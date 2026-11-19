/**
 * 每日推荐 · 参考源：Obsidian Books 目录全量扫描
 * ------------------------------------------------------------------
 * Rayman 2026-11-19 指令：`D:/Obsidian/obsidian_valut/Books` 整个目录下的书目
 * 都可作为选题来源（他会定期往该目录补书），加上 HackerBooks / 豆瓣 / 维基百科
 * 三个指定网址作为检索与取证通道。
 *
 * 本脚本只做「候选线索 + 全库去重」，不产出经典性证据。
 *
 * 输入：
 *   D:/Obsidian/obsidian_valut/Books/<主题目录>/*.md
 *   D:/Obsidian/obsidian_valut/Books/HackerBooks全站目录/*.md
 *   D:/Obsidian/obsidian_valut/Books/10_安争鸣油管推荐书目/*.md
 *
 * 产出：
 *   content/sources/books-vault.js   候选池（供 ingest 去重比对）
 *   docs/Books目录-候选池.md           人工审阅报告
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';
import { loadData, ROOT } from './lib/data.js';

const VAULT_DIR = process.env.BOOKS_VAULT || 'D:/Obsidian/obsidian_valut/Books';
const OUT_JS = join(ROOT, 'content', 'sources', 'books-vault.js');
const OUT_MD = join(ROOT, 'docs', 'Books目录-候选池.md');

/* ------------------------------------------------------------------
 * 目录 → 站点 category slug
 * 只映射本任务要求的七大主题；投资/区块链等退役主题不作为推荐目标，
 * 其书目仍保留在库内可访问，但不进入候选池。
 * ------------------------------------------------------------------ */
const DIR_MAP = {
  '03_哲学与思想': 'philosophy',
  '10_安争鸣油管推荐书目': 'philosophy',
  '06_科学与技术': 'technology',
  '06_计算与科技': 'technology',
  '05_认知与学习': 'technology',
  '07_文学与小说': 'literature',
  '08_历史与世界': 'history',
  '09_教育': 'education',
  '04_中国研究': 'history'
};

/**
 * HackerBooks 全站目录：34 个分类快照（官方 CSV）。
 * 按文件名前缀的分类名映射到本站七大主题；
 * 无法归入七大主题的分类（经济/创业/效率提升/商业等）一律不进候选池。
 */
const HN_CAT_MAP = {
  '001-小说与文学': 'literature',
  '002-政治与社会': 'history',
  '003-传记与回忆录': 'history',
  '004-编程': 'technology',
  '005-历史': 'history',
  '006-心理与行为': null,
  '007-商业与管理': null,
  '008-科幻': 'literature',
  '009-经济与金融': null,
  '010-生物与医学': 'technology',
  '011-哲学': 'philosophy',
  '012-数学': 'technology',
  '013-计算机科学': 'technology',
  '014-生活与旅行': null,
  '015-物理与宇宙学': 'technology',
  '016-宗教与灵性': 'philosophy',
  '017-效率与自我提升': null,
  '018-设计与用户体验': null,
  '019-写作与语言': 'essays',
  '020-艺术游戏与媒体': null,
  '021-奇幻': 'literature',
  '022-系统与操作系统': 'technology',
  '023-网络与互联网': 'technology',
  '024-大众科学': 'technology',
  '025-创业': null,
  '026-电子与硬件': 'technology',
  '027-软件工程': 'technology',
  '028-数据与统计': 'technology',
  '029-安全与隐私': 'technology',
  '030-人工智能与机器学习': 'ai',
  '031-Lisp与函数式编程': 'technology',
  '032-其他': null
};

/** 退役主题目录：书目保留但不进候选池 */
const RETIRED_DIRS = ['01_投资与金融', '02_区块链与Web3'];

const CATEGORY_LABEL = {
  ai: 'AI 人工智能',
  technology: '科技',
  history: '历史',
  philosophy: '哲学',
  literature: '文学',
  essays: '经典散文',
  education: '教育与反思'
};

/* ------------------------------------------------------------------
 * 工具函数
 * ------------------------------------------------------------------ */
const norm = (s) =>
  String(s || '')
    .replace(/[\s\u3000]+/g, '')
    .replace(/[《》「」『』"'“”‘’]/g, '')
    .replace(/[，,。.、:：;；!！?？\-—–_()（）《》]/g, '')
    .toLowerCase();

/** 从 YAML frontmatter 中取一个标量字段 */
function fmField(text, key) {
  const m = text.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'));
  return m ? m[1].trim() : '';
}

/** frontmatter 的 tags 列表 */
function fmTags(text) {
  const m = text.match(/^tags:\s*\n((?:\s*-\s*.+\n?)+)/m);
  if (!m) return [];
  return m[1]
    .split(/\r?\n/)
    .map((l) => l.replace(/^\s*-\s*/, '').trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

/** 去掉 markdown 链接与强调符号 */
const plain = (s) =>
  String(s || '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim();

/** 从一行里抽书名：《…》优先，否则取 | 表格首列 */
function extractTitle(raw) {
  const s = plain(raw);
  const bm = s.match(/《([^》]{2,60})》/);
  if (bm) return bm[1].trim();
  return '';
}

/** 从一行里抽作者：`**作者**`、`作者` 列、或 "作者:" 字段 */
function extractAuthor(raw) {
  const s = plain(raw);
  const bold = s.match(/\*\*(.+?)\*\*/g);
  if (bold && bold.length) {
    // 《…》**作者** 的形态
    const afterTitle = s.replace(/《[^》]+》/, '').trim();
    const m = afterTitle.match(/^\*\*(.+?)\*\*/) || afterTitle.match(/^\*\*(.+?)\*\*/);
    if (m) return m[1].replace(/\*\*/g, '').trim();
  }
  const seg = s.split(/\||\s{2,}|\//).map((x) => x.trim()).filter(Boolean);
  for (const g of seg) {
    if (/^\*\*[^*]+\*\*$/.test(g)) return g.replace(/\*\*/g, '').trim();
  }
  return '';
}

/* ------------------------------------------------------------------
 * 解析：单书笔记（带 frontmatter）
 * ------------------------------------------------------------------ */
function parseBookNote(absPath, category) {
  let text;
  try {
    text = readFileSync(absPath, 'utf8');
  } catch {
    return null;
  }
  if (!text.startsWith('---')) return null;
  const title = fmField(text, 'title');
  const author = fmField(text, 'author');
  if (!title) return null;
  const published = fmField(text, 'published');
  const year = published ? (published.match(/\d{4}/) || [])[0] || '' : '';
  return {
    title: plain(title),
    author: plain(author),
    year,
    category,
    theme_zh: plain(fmField(text, 'subtitle')) || '',
    video: '',
    from: 'vault-note'
  };
}

/* ------------------------------------------------------------------
 * 解析：HackerBooks 推荐书目表（| 书名 | 作者 | 推荐数 | 理由 | 链接 |）
 * ------------------------------------------------------------------ */
function parseHackBooksTable(absPath, category) {
  const rows = [];
  let text;
  try {
    text = readFileSync(absPath, 'utf8');
  } catch {
    return rows;
  }
  for (const line of text.split(/\r?\n/)) {
    if (!line.startsWith('| ') || /^\|\s*:?-+/.test(line)) continue;
    const cells = line.split('|').slice(1, -1).map((c) => plain(c));
    if (cells.length < 3) continue;
    const title = extractTitle(cells[0]) || (cells[0].split(/[（(]/)[0] || '').trim();
    if (!title || title.length < 2 || title.length > 80) continue;
    if (/^(书名|書名|title)$/i.test(title)) continue;
    const video = (cells[cells.length - 1].match(/https?:\/\/[^\s)]+/) || [])[0] || '';
    const author = extractAuthor(cells[1] || '');
    const reason = cells.length > 3 ? cells[3] : '';
    rows.push({
      title,
      author,
      year: '',
      category,
      theme_zh: reason.slice(0, 160),
      video,
      from: 'vault-hackerbooks'
    });
  }
  return rows;
}

/* ------------------------------------------------------------------
 * 解析：HackerBooks 全站目录分类快照
 * 表格列：| 排名 | 书名 | 作者 | 首版年 | 推荐人数 | 提及人数 | 提及数 | 首次提及 | 最近提及 | 站点主题 | Open Library |
 * ------------------------------------------------------------------ */
function parseHackBooksCatalog(absPath, category) {
  const rows = [];
  let text;
  try {
    text = readFileSync(absPath, 'utf8');
  } catch {
    return rows;
  }
  for (const line of text.split(/\r?\n/)) {
    if (!line.startsWith('| ') || /^\|\s*:?-+/.test(line)) continue;
    const cells = line.split('|').slice(1, -1).map((c) => plain(c));
    if (cells.length < 4) continue;
    // 定位「书名」列：跳过开头的「排名」数字列
    let i = 0;
    if (/^\d+$/.test(cells[0])) i = 1;
    const title = cells[i];
    if (!title || title.length < 2 || title.length > 120) continue;
    if (/^(书名|書名|title)$/i.test(title)) continue;
    const author = cells[i + 1] || '';
    const year = (cells[i + 2] || '').match(/\d{4}/)?.[0] || '';
    const recCount = cells[i + 3] || '';
    const themes = cells[i + 8] || '';
    const ol = (cells[cells.length - 1].match(/https?:\/\/[^\s)]+/) || [])[0] || '';
    rows.push({
      title,
      author,
      year,
      category,
      theme_zh: themes ? `HackerBooks 站点主题：${themes}` : '',
      video: '',
      hn_mentions: recCount,
      ol,
      from: 'vault-hackerbooks-catalog'
    });
  }
  return rows;
}

/* ------------------------------------------------------------------
 * 主流程
 * ------------------------------------------------------------------ */
if (!existsSync(VAULT_DIR)) {
  console.error(`❌ Books 目录不存在：${VAULT_DIR}`);
  process.exit(1);
}

const dirs = readdirSync(VAULT_DIR).filter((d) => {
  const p = join(VAULT_DIR, d);
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
});

const raw = [];
const seenDirs = [];

for (const d of dirs) {
  if (d.startsWith('_') || d.startsWith('.')) continue;
  if (RETIRED_DIRS.includes(d)) continue;

  // HackerBooks 全站目录：34 个分类快照，按分类映射主题
  if (d === 'HackerBooks全站目录') {
    const sub = join(VAULT_DIR, d);
    let files = [];
    try {
      files = readdirSync(sub).filter((f) => f.toLowerCase().endsWith('.md') && f !== 'README.md');
    } catch {
      continue;
    }
    let n = 0;
    for (const f of files) {
      const key = basename(f, '.md');
      const category = HN_CAT_MAP[key];
      if (!category) continue; // 无法归入七大主题的分类直接跳过
      const rows = parseHackBooksCatalog(join(sub, f), category);
      raw.push(...rows);
      n += rows.length;
    }
    seenDirs.push(`${d} → 七大主题过滤后 ${n} 本（34 个分类，退役/无关分类已排除）`);
    continue;
  }

  const category = DIR_MAP[d];
  if (!category) continue;

  const sub = join(VAULT_DIR, d);
  let files = [];
  try {
    files = readdirSync(sub).filter((f) => f.toLowerCase().endsWith('.md'));
  } catch {
    continue;
  }
  seenDirs.push(`${d} → ${CATEGORY_LABEL[category] || category}（${files.length} 个 md）`);

  for (const f of files) {
    const abs = join(sub, f);
    let isTable = false;
    try {
      const head = readFileSync(abs, 'utf8').slice(0, 4000);
      isTable = /\|/.test(head) && /HackerBooks|书名|書名/.test(head);
    } catch {
      continue;
    }
    if (isTable) {
      raw.push(...parseHackBooksTable(abs, category));
    } else if (d === 'HackerBooks全站目录') {
      raw.push(...parseHackBooksCatalog(abs, category));
    } else {
      const row = parseBookNote(abs, category);
      if (row) raw.push(row);
    }
  }
}

/* 1. 合并去重（同目录内按归一化标题） */
const pool = new Map();
for (const row of raw) {
  const key = norm(row.title);
  if (!key || key.length < 2) continue;
  if (!pool.has(key)) {
    pool.set(key, { ...row, aliases: [], sources: [row.from] });
  } else {
    const cur = pool.get(key);
    if (!cur.sources.includes(row.from)) cur.sources.push(row.from);
    if (!cur.author && row.author) cur.author = row.author;
    if (!cur.year && row.year) cur.year = row.year;
    if (!cur.theme_zh && row.theme_zh) cur.theme_zh = row.theme_zh;
    if (!cur.video && row.video) cur.video = row.video;
  }
}

/* 2. 与全库去重（书名中英文均比） */
const data = await loadData();
const site = data.books.map((b) => ({
  slug: b.slug,
  titles: [b.title_zh, b.title_en].filter(Boolean).map(norm),
  cores: [b.title_zh, b.title_en].filter(Boolean).map((t) => norm(coreOf(t)))
}));

function coreOf(t) {
  return String(t || '')
    .replace(/[:：].*$/, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

const kept = [];
const excluded = [];
for (const row of pool.values()) {
  const nk = norm(row.title);
  const nc = norm(coreOf(row.title));
  const hit = site.find(
    (s) => s.titles.includes(nk) || s.titles.includes(nc) || s.cores.includes(nc)
  );
  if (hit) {
    excluded.push({ ...row, dup_of: hit.slug });
  } else {
    kept.push(row);
  }
}

/* 3. 写出候选池 */
const byCat = {};
for (const r of kept) {
  (byCat[r.category] ||= []).push(r);
}

const js = `/**
 * 每日推荐 · 参考源：Obsidian Books 目录全量扫描
 * ------------------------------------------------------------------
 * ⚠️ 本文件由 \`node src/books-vault-source.mjs\` 生成，请勿手改。
 * 数据源：${VAULT_DIR}（Rayman 定期更新此目录，脚本每日可重跑）
 *
 * 本池只给选题线索，不给经典性证据。经典性仍须按
 * 豆瓣 / Goodreads / 维基百科 / 奖项 / 课程书单 / 权威书评 / 微信读书 逐条取证。
 */
export const source = {
  "source": "books-vault",
  "label_zh": "Obsidian Books 目录全量（Rayman 滚动更新）",
  "label_en": "Obsidian Books vault — full scan",
  "generated_at": "${new Date().toISOString().slice(0, 10)}",
  "vault_dir": "${VAULT_DIR.replace(/\\/g, '/')}",
  "dirs_scanned": ${JSON.stringify(seenDirs)},
  "classic_gate_note": "本池仅作选题线索，不得用于凑经典性门槛的两项证据。",
  "dedup_note": "已与全库（${data.books.length} 本）按书名去重；入库前 ingest-books.mjs 仍会二次校验。",
  "external_sources": {
    "hackerbooks": "https://hackerbooks.org/",
    "douban": "https://book.douban.com/",
    "wikipedia": "https://zh.wikipedia.org/ + https://en.wikipedia.org/"
  },
  "counts": ${JSON.stringify(
    Object.fromEntries(Object.entries(byCat).map(([k, v]) => [k, v.length]))
  )},
  "candidates": ${JSON.stringify(
    kept.map((r) => ({
      title: r.title,
      author: r.author || '',
      year: r.year || null,
      category: r.category,
      theme_zh: r.theme_zh || '',
      video: r.video || '',
      sources: r.sources
    })),
    null,
    2
  )}
};
`;
writeFileSync(OUT_JS, js, 'utf8');

/* 4. 审阅报告 */
let md = `# Books 目录全量 · 每日推荐候选池\n\n`;
md += `> 由 \`node src/books-vault-source.mjs\` 生成（${new Date().toISOString().slice(0, 10)}）。\n`;
md += `> 数据源：\`${VAULT_DIR}\`（Rayman 定期更新，可随时重跑刷新）。\n`;
md += `> 候选 **${kept.length}** 本，已排除（与全库重复）**${excluded.length}** 本；全库现有 **${data.books.length}** 本。\n\n`;
md += `## 覆盖目录\n\n`;
for (const d of seenDirs) md += `- ${d}\n`;
md += `\n## 外部检索与取证通道（不属本池，仅为取证途径）\n\n`;
md += `- HackerBooks：https://hackerbooks.org/ — 独立提及人数排序，**只作线索不作证据**\n`;
md += `- 豆瓣读书：https://book.douban.com/ — 评分与评价人数、正式中文版核验\n`;
md += `- 维基百科：https://zh.wikipedia.org/ 、https://en.wikipedia.org/ — 出版年、奖项、版本沿革\n\n`;
md += `## 候选清单（${kept.length} 本）\n`;
for (const cat of Object.keys(CATEGORY_LABEL)) {
  const list = byCat[cat] || [];
  if (!list.length) continue;
  md += `\n### ${CATEGORY_LABEL[cat]}（${cat}）— ${list.length} 本\n\n`;
  md += `| 书名 | 作者 | 年份 | 线索理由 | 来源 |\n| --- | --- | --- | --- | --- |\n`;
  for (const r of list) {
    md += `| ${r.title} | ${r.author || '—'} | ${r.year || '—'} | ${(r.theme_zh || '').replace(/\|/g, '/').slice(0, 90)} | ${r.sources.join(', ')} |\n`;
  }
}
writeFileSync(OUT_MD, md, 'utf8');

console.log('✅ Books 目录候选池已刷新');
console.log(`   扫描目录 ${seenDirs.length} 个 ｜ 原始行 ${raw.length} ｜ 去重后 ${pool.size} 本`);
console.log(`   全库 ${data.books.length} 本 ｜ 候选 ${kept.length} 本 ｜ 排除重复 ${excluded.length} 本`);
console.log(`   输出：${OUT_JS}`);
console.log(`         ${OUT_MD}`);
const needAuthor = kept.filter((r) => !r.author).length;
if (needAuthor) console.log(`   ⚠️ ${needAuthor} 本作者待核验（入库前必须查实）`);
