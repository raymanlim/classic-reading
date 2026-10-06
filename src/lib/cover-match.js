/**
 * 封面文件名 ↔ 书籍 slug 的匹配逻辑
 * ------------------------------------------------------------------
 * 从 src/covers-ingest.mjs 抽出（逻辑与生产共用一份，避免测试漂移）。
 *
 * 匹配策略：把文件名与「slug / title_en / title_zh」做词元匹配，取最高分。
 *   ≥0.85 高置信（自动处理）；0.60–0.85 中置信（默认也处理，但会标出）；<0.60 不处理。
 *
 * ── 2026-10-05 修正（由 scripts/covers-match-selftest.mjs 的 747 条断言逼出）──
 * 原实现在两种情况下会判错，且都是**静默**的：
 *
 * ① 反向包含未处理。原式 `inter / t.size` 在「目标词元 ⊆ 文件名词元」时
 *    `inter === t.size`，得分恒为 1.00，于是短 slug 会抢走长书名的文件：
 *      `the-innovators-dilemma.webp` → 匹配到 `the-innovators`（1.00）
 *      `meditations-on-first-philosophy.webp` → 匹配到 `meditations`（1.00）
 *    配合「目标已存在 + exactSlug」会**静默覆盖一本正确书的封面**。
 *    → 新增 targetSubsetFile 分支，按文件名词元被解释的比例打折。
 *
 * ② 并列满分按数组顺序取先出现者。原式用 `score > best.score`（严格大于），
 *    同分时先遍历到的胜出，没有 tie-break。
 *    → 新增 better()：分数 > 交集大小 > 词元数接近度。
 *
 * ③ 中文词元是「连续汉字串」，部分匹配能力为零。`tokensOf` 只按标点/空格切分，
 *    截短的中文标题 `inter` 直接归零（实测取前 3 个汉字时 223/223 本全失败）。
 *    → 新增汉字子串包含的补充信号（按长度比给分）。
 *
 * 三条修正均不改变 subset 规则（文件名 ⊆ 目标）——它是为
 * `Artificial Intelligence → artificial-intelligence-a-modern-approach` 专门加的。
 */
import { extname } from 'node:path';

/** 「简写」判定所需的最小词元数：少于 2 个词元时子集关系没有区分度 */
const SUBSET_MIN_TOKENS = 2;

/** 反向包含（目标只是长文件名里的一小段）的惩罚系数 */
const REVERSE_PENALTY = 0.8;

/** 汉字子串信号的得分区间：完全相等 = 1.00，长度比越悬殊越低 */
const SUBSTR_BASE = 0.6;
const SUBSTR_SPAN = 0.4;

/** 把字符串切成可比对的词元：NFD 去变音符号 + 转小写 + 只保留字母/数字/汉字 */
export function tokensOf(s) {
  return String(s)
    .normalize('NFD')                    // 拆出变音符号：ö → o + ̈
    .replace(/[\u0300-\u036f]/g, '')     // 去掉组合符号：Gödel → Godel
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

/** 仅保留汉字。中文没有词边界，词元切分会退化成整段，故单列一个字符级信号 */
export function hanOf(s) {
  return String(s).replace(/[^\u4e00-\u9fff]/g, '');
}

/** 交集大小（两侧均按唯一词元计，避免 slug 中重复词把得分抬高） */
export function intersect(fileSet, targetSet) {
  let hit = 0;
  for (const t of targetSet) if (fileSet.has(t)) hit++;
  return hit;
}

/** 为每本书预计算可比对的词元集合（Set 形式，便于求交集） */
export function indexBooks(books) {
  const mk = (s) => new Set(tokensOf(s));
  return books.map((b) => ({
    slug: b.slug,
    label: b.title_zh || b.title_en || b.slug,
    slugSet: mk(b.slug),
    enSet: mk(b.title_en || ''),
    zhSet: mk(b.title_zh || ''),
    zhHan: hanOf(b.title_zh || '')
  }));
}

/**
 * 单个目标（某本书的 slug 词元集 / 英文书名词元集 / 中文书名词元集）的得分。
 * @returns {{score:number, inter:number, sizeDiff:number, subset:boolean}|null}
 */
function scoreTarget(fileSet, fileHan, hasCJK, t, tHan) {
  if (!t.size) return null;
  const hit = intersect(fileSet, t);
  if (!hit) return null;

  // 「文件名 ⊆ 目标」：简写场景（Artificial Intelligence → artificial-intelligence-a-modern-approach）
  const fileSubsetTarget = hit === fileSet.size && fileSet.size >= SUBSET_MIN_TOKENS;
  // 「目标 ⊆ 文件名」：长文件名里嵌了一个短 slug —— 必须惩罚，否则短 slug 恒得满分
  const targetSubsetFile = hit === t.size && t.size < fileSet.size;

  let score;
  if (fileSubsetTarget) {
    score = 1 - Math.min(0.15, (t.size - fileSet.size) * 0.02); // 越接近越好，最多扣 0.15
  } else if (targetSubsetFile) {
    score = (hit / fileSet.size) * REVERSE_PENALTY;             // 按文件名被解释的比例打折
  } else {
    score = hit / t.size;                                       // 常规：目标覆盖率
  }

  // 中文补充信号：文件名的汉字串是书名的子串（或反之）
  if (hasCJK && tHan && tHan.length >= 2 && fileHan.length >= 2) {
    if (tHan.includes(fileHan) || fileHan.includes(tHan)) {
      const lo = Math.min(fileHan.length, tHan.length);
      const hi = Math.max(fileHan.length, tHan.length);
      const s = SUBSTR_BASE + SUBSTR_SPAN * (lo / hi);
      if (s > score) score = s;
    }
  }

  return { score, inter: hit, sizeDiff: Math.abs(fileSet.size - t.size), subset: fileSubsetTarget };
}

/** 候选排序：分数 > 交集大小（证据量） > 词元数接近度 */
function better(a, b) {
  if (!b) return true;
  if (Math.abs(a.score - b.score) > 1e-9) return a.score > b.score;
  if (a.inter !== b.inter) return a.inter > b.inter;
  return a.sizeDiff < b.sizeDiff;
}

/**
 * 为一个文件名找最匹配的书。
 * @returns {{slug:string,label:string,score:number,subset:boolean,inter:number}|null}
 */
export function bestMatch(fileName, index) {
  const stem = fileName.slice(0, fileName.length - extname(fileName).length);
  const fileSet = new Set(tokensOf(stem));
  const fileHan = hanOf(stem);
  const hasCJK = /[\u4e00-\u9fff]/.test(stem);

  let best = null;
  for (const b of index) {
    // 英文/混合文件名优先比对 slug 与英文书名，中文文件名比对中文书名
    const targets = hasCJK
      ? [
          [b.zhSet, b.zhHan],
          [b.slugSet, '']
        ]
      : [
          [b.slugSet, ''],
          [b.enSet, '']
        ];

    let book = null;
    for (const [t, tHan] of targets) {
      const r = scoreTarget(fileSet, fileHan, hasCJK, t, tHan);
      if (!r) continue;
      const cand = { ...b, ...r };
      if (better(cand, book)) book = cand;
    }

    if (book && better(book, best)) best = book;
  }
  return best;
}

/** 置信度分档：与 covers-ingest.mjs 的展示口径保持一致 */
export function scoreTier(score) {
  return score >= 0.85 ? '高' : score >= 0.6 ? '中' : '低';
}

/** 可执行判定：与 covers-ingest.mjs 的 isActionable 保持一致 */
export function isActionable(match, targetExists, exactSlug) {
  return match.score >= 0.6 && (!targetExists || exactSlug);
}
