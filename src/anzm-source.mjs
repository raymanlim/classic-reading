#!/usr/bin/env node
/**
 * 每日推荐 · 参考源生成器：安争鸣（Stella An）YouTube 频道推荐书目
 * ------------------------------------------------------------------
 * 用法：
 *   node src/anzm-source.mjs            # 刷新候选池文件 + 报告，打印摘要
 *   node src/anzm-source.mjs --brief    # 只打印候选清单（按分类分组），不写文件
 *   node src/anzm-source.mjs --json     # 只打印候选池 JSON
 *   node src/anzm-source.mjs --check    # 只做去重体检，列出与全库的近似重复（不写文件）
 *
 * 输入（Obsidian vault，Rayman 维护）：
 *   D:/Obsidian/obsidian_valut/Books/安争鸣油管推荐书目/
 *     ├─ 2026-10-18 小鸣说推荐书目合并整理.md   （102 本，含视频链接）
 *     └─ 安争鸣（Stella An）频道推荐书目全景深度导读指南.md （126 本，六维导读）
 *
 * 输出：
 *   content/sources/anzhengming-yt.js  候选池（机器可读，**不会被站点构建加载**）
 *   docs/安争鸣油管推荐书目-候选池.md    人工审阅报告（含排除清单与理由）
 *
 * 🔴 去重是硬要求（Rayman 2026-10-20 指令）：候选池与全库（策展经典 + AZM + XMS +
 *    每日推荐）零重复。规则见 DEDUP 段落；入库前 ingest-books.mjs 仍会二次去重。
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadData, ROOT } from './lib/data.js';

const SRC_DIR = process.env.ANZM_DIR || 'D:/Obsidian/obsidian_valut/Books/安争鸣油管推荐书目';
const MERGED_FILE = '2026-10-18 小鸣说推荐书目合并整理.md';
const GUIDE_FILE = '安争鸣（Stella An）频道推荐书目全景深度导读指南.md';
const OUT_JS = join(ROOT, 'content', 'sources', 'anzhengming-yt.js');
const OUT_MD = join(ROOT, 'docs', '安争鸣油管推荐书目-候选池.md');

/* ------------------------------------------------------------------
 * 分类映射：来源章节 → 站点 category slug
 * ------------------------------------------------------------------ */
const CAT_MAP = {
  '文学、小说与戏剧': 'literature',
  '政治学、社会学与制度批判': 'society',
  '历史、文明与国际政治': 'history',
  '自然科学、宇宙与生命科普': 'technology',
  '哲学、思想与信仰': 'philosophy',
  '性别研究、女性主义与婚姻家庭': 'society',
  '经济、商业与社会阶层': 'economics',
  历史: 'history',
  社科: 'society',
  文艺: 'literature'
};

/* ------------------------------------------------------------------
 * 同一本书的不同译名 / 分卷 → 归并到主条目（不单独占候选位）
 * ------------------------------------------------------------------ */
const ALIAS_OF = {
  英国书简: '哲学通信',
  超越生命: '死亡回忆',
  '埃努玛·埃利什': '巴比伦创世史诗',
  拉斐尔: '入世天使拉斐尔',
  地狱篇: '神曲',
  炼狱篇: '神曲',
  天堂篇: '神曲',
  徬徨少年时: '德米安',
  别让我走: '莫失莫忘',
  爱的艺术: '爱经'
};

/* ------------------------------------------------------------------
 * 人工确认的排除项：站内已有「合集/系列」条目覆盖，或来源本身有误
 * ------------------------------------------------------------------ */
const MANUAL_EXCLUDE = {
  老后破产: '站内已有「NHK特别取材组纪实丛书」合集条目覆盖',
  女性贫困: '站内已有「NHK特别取材组纪实丛书」合集条目覆盖',
  青年失业: '站内已有「NHK特别取材组纪实丛书」合集条目覆盖',
  直到时间的尽头: '站内已有同书（直到时间尽头 / until-the-end-of-time）',
  古罗马帝국의辉煌: '站内已有同书（古罗马帝国的辉煌），来源标题含错字'
};

/* ------------------------------------------------------------------
 * 分类校准：来源章节过粗（社科一锅端），按站内惯例归位
 * ------------------------------------------------------------------ */
const CATEGORY_OVERRIDE = {
  // 哲学
  实践理性批判: 'philosophy',
  判断力批判: 'philosophy',
  悲剧的诞生: 'philosophy',
  尼采哲学: 'philosophy',
  '牛津通识读本：叔本华': 'philosophy',
  人类理解论: 'philosophy',
  人类精神进步史纲: 'philosophy',
  哲学通信: 'philosophy',
  哲学的故事: 'philosophy',
  通向哲学的后楼梯: 'philosophy',
  政治学: 'philosophy',
  '1844年经济学哲学手稿': 'philosophy',
  '修行：生命的证悟': 'philosophy',
  佛教常识答问: 'philosophy',
  // 心理学
  '大脑：关于它的意义、运转和衰老': 'psychology',
  '对权威的服从：一次逼近人性真相的心理学实验': 'psychology',
  死亡回忆: 'psychology',
  // 科技与科学
  '人体简史：你的身体30亿年演化史': 'technology',
  // 经济学
  '奢侈的：奢侈品何以失去光泽': 'economics',
  // 文学
  有四十金币的人: 'literature'
};

/* ------------------------------------------------------------------
 * 人工确认的保留项：包含匹配误伤但确为不同书
 * ------------------------------------------------------------------ */
const MANUAL_KEEP = {
  '原则：应对变化中的世界秩序': '站内《世界秩序》为基辛格著作，本书为瑞·达利欧，非同一本'
};

/* ------------------------------------------------------------------
 * 标题修正：来源文件本身的错字 / 截断
 * ------------------------------------------------------------------ */
const TITLE_FIX = {
  '古罗马帝국의辉煌': '古罗马帝国的辉煌',
  '原则2：应对变化中的世界秩序': '原则：应对变化中的世界秩序'
};

const norm = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/[\s\u3000]+/g, '')
    .replace(/[《》〈〉「」『』()（）[\]【】:：,，.。!！?？'"“”‘’·、\-—_/|]/g, '');

const coreOf = (s) => String(s || '').split(/[：:—]/)[0];

/** 从表格单元提取书名：支持「《A》 / 《B》」「《A》（别名）」 */
function extractTitles(cell) {
  const out = [];
  const re = /《([^》]+)》/g;
  let m;
  while ((m = re.exec(cell))) {
    const raw = m[1].trim();
    const paren = raw.match(/^(.*?)[（(]([^）)]+)[）)]$/);
    if (paren) out.push(paren[1].trim(), paren[2].trim());
    else out.push(raw);
  }
  if (!out.length) {
    const t = cell.replace(/\*\*/g, '').trim();
    if (t) out.push(t);
  }
  return out;
}

const cleanAuthor = (s) =>
  String(s || '')
    .replace(/\*\*/g, '')
    .replace(/^\[[^\]]+\]\s*/, '')
    .replace(/[（(][^）)]*[）)]/g, '')
    .split(/\s*[/、]\s*/)[0]
    .replace(/\s*(主编|编著|口述|笔录|等|译著|译)\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim();

/** 作者字段明显不是人名（来源里的占位描述 / 学科名） */
const isRealAuthor = (a) =>
  !!a &&
  a.length >= 2 &&
  a.length <= 40 &&
  !/(综合|汇编|读物|专著)/.test(a) &&
  !/^(社会学|哲学|文学|历史学|心理学|经济学|艺术史|思想史)$/.test(a);

/* ------------------------------------------------------------------
 * 解析两个来源
 * ------------------------------------------------------------------ */
function parseMerged(absPath) {
  const rows = [];
  if (!existsSync(absPath)) return rows;
  const text = readFileSync(absPath, 'utf8');
  let cat = '';
  for (const line of text.split(/\r?\n/)) {
    const h = line.match(/^##\s+(历史|社科|文艺)/);
    if (h) { cat = h[1]; continue; }
    if (!line.startsWith('| ') || /^\|\s*-+/.test(line) || line.includes('分类 | 书籍')) continue;
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.length < 5) continue;
    const [, bookCell, authorCell, descCell, linkCell] = cells;
    const author = cleanAuthor(authorCell);
    const video = (linkCell.match(/\((https?:\/\/[^)]+)\)/) || [])[1] || '';
    for (const title of extractTitles(bookCell)) {
      rows.push({
        title: TITLE_FIX[title] || title,
        author: isRealAuthor(author) ? author : '',
        author_raw: author,
        category: CAT_MAP[cat] || 'society',
        theme_zh: descCell.replace(/\*\*/g, '').slice(0, 160),
        video,
        from: 'merged-2026-10-18'
      });
    }
  }
  return rows;
}

function parseGuide(absPath) {
  const rows = [];
  if (!existsSync(absPath)) return rows;
  const text = readFileSync(absPath, 'utf8');
  let cat = '';
  for (const line of text.split(/\r?\n/)) {
    const h = line.match(/^##\s+[一二三四五六七]、\s*([^（(]+)/);
    if (h) { cat = h[1].trim(); continue; }
    if (!line.startsWith('| ') || /^\|\s*:?-+/.test(line) || line.includes('序号 | 书名')) continue;
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.length < 8) continue;
    const parts = (cells[1] || '').split(/<br\s*\/?>/i);
    const author = cleanAuthor(parts[1] || '');
    for (const title of extractTitles(parts[0] || '')) {
      rows.push({
        title: TITLE_FIX[title] || title,
        author: isRealAuthor(author) ? author : '',
        author_raw: author,
        category: CAT_MAP[cat] || 'society',
        theme_zh: (cells[2] || '').replace(/\*\*/g, '').slice(0, 160),
        why_zh: (cells[3] || '').replace(/\*\*/g, '').slice(0, 200),
        from: 'guide-126'
      });
    }
  }
  return rows;
}

/* ------------------------------------------------------------------
 * 主流程
 * ------------------------------------------------------------------ */
const mergedRows = parseMerged(join(SRC_DIR, MERGED_FILE));
const guideRows = parseGuide(join(SRC_DIR, GUIDE_FILE));

/* 1. 两源合并（按归一化标题），别名挂到主条目 */
const pool = new Map();
for (const row of [...mergedRows, ...guideRows]) {
  const mainTitle = ALIAS_OF[row.title];
  const key = norm(mainTitle || row.title);
  if (!key) continue;
  if (!pool.has(key)) {
    pool.set(key, { ...row, title: mainTitle || row.title, aliases: [], sources: [row.from] });
  } else {
    const cur = pool.get(key);
    if (!cur.sources.includes(row.from)) cur.sources.push(row.from);
    if (row.title !== cur.title && !cur.aliases.includes(row.title)) cur.aliases.push(row.title);
    for (const f of ['author', 'theme_zh', 'why_zh', 'video']) {
      if (!cur[f] && row[f]) cur[f] = row[f];
    }
  }
}

/* 2. 与全库去重 */
const data = await loadData();
const site = data.books.map((b) => ({
  slug: b.slug,
  title: b.title_zh || b.title_en || b.slug,
  nt: [b.title_zh, b.title_en].filter(Boolean).map(norm),
  nc: [b.title_zh, b.title_en].filter(Boolean).map((t) => norm(coreOf(t)))
}));

const kept = [];
const excluded = [];
for (const [key, row] of pool) {
  const manual = MANUAL_EXCLUDE[row.title];
  if (manual) { excluded.push({ ...row, reason: `人工确认：${manual}` }); continue; }

  const ct = norm(row.title);
  const cc = norm(coreOf(row.title));
  const aliasNorms = row.aliases.map(norm);
  let hit = null;
  let reason = '';
  const keepOverride = MANUAL_KEEP[row.title];
  if (!keepOverride) {
    for (const s of site) {
      for (let i = 0; i < s.nt.length; i++) {
        const st = s.nt[i];
        const sc = s.nc[i];
        if (st === ct || aliasNorms.includes(st)) { hit = s; reason = '标题完全一致'; break; }
        if (ct.length >= 3 && st.length >= 3 && (st.includes(ct) || ct.includes(st))) {
          hit = s; reason = `标题互相包含（站内：${s.title}）`; break;
        }
        if (cc.length >= 3 && sc.length >= 3 && (sc.includes(cc) || cc.includes(sc))) {
          hit = s; reason = `主标题互相包含（站内：${s.title}）`; break;
        }
      }
      if (hit) break;
    }
  }
  if (hit) { excluded.push({ ...row, reason, site_slug: hit.slug, site_title: hit.title }); continue; }

  kept.push({
    title_zh: row.title,
    title_en: null,
    author_zh: row.author || null,
    category: CATEGORY_OVERRIDE[row.title] || row.category,
    theme_zh: row.theme_zh || '',
    why_zh: row.why_zh || '',
    video: row.video || '',
    aliases: row.aliases,
    sources: row.sources,
    needs_author: !row.author
  });
}

kept.sort((a, b) => a.category.localeCompare(b.category) || a.title_zh.localeCompare(b.title_zh, 'zh'));

const meta = {
  source: 'anzhengming-yt',
  label_zh: '安争鸣 · 小鸣说（YouTube 频道推荐书目）',
  label_en: 'Stella An / Xiaoming Shuo — YouTube book recommendations',
  generated_at: new Date().toISOString().slice(0, 10),
  input_dir: SRC_DIR,
  input_rows: { merged: mergedRows.length, guide: guideRows.length, unique_after_alias: pool.size },
  site_books: data.books.length,
  kept: kept.length,
  excluded: excluded.length,
  rule: '候选池已与全库（策展经典 / AZM / XMS / 每日推荐）去重；入库前 ingest-books.mjs 仍会二次校验。'
};

/* 3. 输出 */
const mode = process.argv[2] || '';

if (mode === '--brief' || mode === '--json' || mode === '--check') {
  if (mode === '--json') {
    console.log(JSON.stringify({ meta, candidates: kept }, null, 2));
  } else if (mode === '--check') {
    console.log(`来源 ${mergedRows.length}+${guideRows.length} 行 → 别名合并后 ${pool.size} 本`);
    console.log(`全库 ${data.books.length} 本；候选 ${kept.length}；已排除 ${excluded.length}`);
    console.log('\n排除清单：');
    for (const x of excluded) console.log(`  - ${x.title}（${x.reason}）`);
  } else {
    console.log(`# 每日推荐候选池 · 安争鸣油管书目（${kept.length} 本）\n`);
    const groups = new Map();
    for (const b of kept) {
      if (!groups.has(b.category)) groups.set(b.category, []);
      groups.get(b.category).push(b);
    }
    for (const [cat, list] of groups) {
      console.log(`## ${cat}（${list.length}）`);
      for (const b of list) {
        console.log(`- ${b.title_zh}${b.author_zh ? ` — ${b.author_zh}` : ' — 作者待核'}${b.video ? ` ｜ ${b.video}` : ''}`);
      }
      console.log();
    }
  }
} else {
  mkdirSync(join(ROOT, 'content', 'sources'), { recursive: true });
  mkdirSync(join(ROOT, 'docs'), { recursive: true });

  const js = `/**
 * 每日推荐 · 参考源：安争鸣（Stella An）YouTube 频道推荐书目
 * ------------------------------------------------------------------
 * ⚠️ 本文件由 \`node src/anzm-source.mjs\` 生成，请勿手改。
 * 它不是书单（不会被站点构建加载），而是「每日推荐」任务的候选池：
 * 已与全库（策展经典 / AZM / XMS / 每日推荐）做过去重，可直接选题。
 * 入库前 \`ingest-books.mjs\` 仍会二次校验重复。
 *
 * 刷新：node src/anzm-source.mjs
 * 生成日期：${meta.generated_at} ｜ 候选 ${meta.kept} 本 / 已排除 ${meta.excluded} 本
 */
export const source = ${JSON.stringify(meta, null, 2)};

export const candidates = ${JSON.stringify(kept, null, 2)};
`;
  writeFileSync(OUT_JS, js, 'utf8');

  const byCat = new Map();
  for (const b of kept) {
    if (!byCat.has(b.category)) byCat.set(b.category, []);
    byCat.get(b.category).push(b);
  }
  const md = `# 安争鸣油管推荐书目 · 每日推荐候选池

> 由 \`node src/anzm-source.mjs\` 生成（${meta.generated_at}）。数据源：\`${SRC_DIR}\`。
> 候选 **${meta.kept}** 本，已排除 **${meta.excluded}** 本；全库现有 **${meta.site_books}** 本。

## 使用方式

每日推荐任务选题时，从下方候选池中挑选，再按 \`AGENTS.md §3.1\` 流程入库。
候选池已与全库去重，但入库前 \`node src/ingest-books.mjs --existing\` 仍要跑一次二次校验。

\`\`\`bash
node src/anzm-source.mjs --brief   # 打印候选清单
node src/anzm-source.mjs           # 数据源更新后刷新本文件
\`\`\`

## 候选清单（${meta.kept} 本）

${[...byCat].map(([cat, list]) => `### ${cat}（${list.length} 本）

| 书名 | 作者 | 备注 |
| --- | --- | --- |
${list.map((b) => `| ${b.title_zh} | ${b.author_zh || '**待核**'} | ${b.needs_author ? '作者需核验后入库' : b.video ? '有视频出处' : '—'} |`).join('\n')}`).join('\n\n')}

## 排除清单（${meta.excluded} 本，与全库重复或来源有误）

| 书名 | 排除理由 |
| --- | --- |
${excluded.map((x) => `| ${x.title} | ${x.reason} |`).join('\n')}
`;
  writeFileSync(OUT_MD, md, 'utf8');

  console.log(`✅ 候选池已刷新`);
  console.log(`   来源：${mergedRows.length} + ${guideRows.length} 行 → 别名合并 ${pool.size} 本`);
  console.log(`   全库 ${data.books.length} 本 ｜ 候选 ${kept.length} 本 ｜ 排除 ${excluded.length} 本`);
  console.log(`   输出：${OUT_JS}`);
  console.log(`         ${OUT_MD}`);
  const needAuth = kept.filter((b) => b.needs_author).length;
  if (needAuth) console.log(`   ⚠️ ${needAuth} 本作者待核验（入库前必须查实）`);
}
