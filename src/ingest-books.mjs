/**
 * 每日推荐书目入库
 * ------------------------------------------------------------------
 * 用法：
 *   node src/ingest-books.mjs --file _inbox/2026-09-30.json   # 入库
 *   node src/ingest-books.mjs --existing                      # 导出已有书目（供去重）
 *
 * 设计目标：让定时任务能安全地「每天加两本」，重复运行不会产生脏数据。
 *
 * 幂等性：输出文件按日期命名（content/lists/daily-<date>.js），
 * 同一天重跑 = 覆盖当天文件，不会累积。
 *
 * 去重：slug 与 title_zh / title_en（归一化后）都会与全库比对；
 * 命中即跳过该本，其余正常写入，并在 stdout 报告。
 *
 * 只写这两个文件，不碰 taxonomy / manifest / 策展经典 overlay。
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { books as manifest } from '../content/books.manifest.js';
import { categories, tags as allTags, topics as allTopics } from '../content/taxonomy.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const LISTS_DIR = join(ROOT, 'content', 'lists');
const PROSE_DIR = join(ROOT, 'content', 'list-prose');

const PROSE_FIELDS_TEXT = [
  'description_zh', 'description_en',
  'why_read_zh', 'why_read_en',
  'who_should_read_zh', 'who_should_read_en',
  'reading_note_zh', 'reading_note_en'
];
const PROSE_FIELDS_LIST = [
  'core_ideas_zh', 'core_ideas_en',
  'key_questions_zh', 'key_questions_en'
];
const ENTRY_FIELDS = [
  'slug', 'category', 'title_zh', 'author', 'author_zh', 'author_en',
  'nationality_zh', 'nationality_en', 'original_language',
  'theme_zh', 'theme_en'
];

const catSlugs = new Set(categories.map((c) => c.slug));
const tagSlugs = new Set(allTags.map((t) => t.slug));
const topicSlugs = new Set(allTopics.map((t) => t.slug));

/** 归一化标题：去空白、标点、大小写，用于跨源查重 */
function normTitle(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[\s\u3000]+/g, '')
    .replace(/[《》〈〉「」『』()（）[\]【】:：,，.。!！?？'"“”‘’·、\-—_/]/g, '');
}

async function loadExisting() {
  const rows = [];
  for (const b of manifest) {
    rows.push({ slug: b.slug, title_zh: b.title_zh, title_en: b.title_en, author: b.author, from: 'curated' });
  }
  if (existsSync(LISTS_DIR)) {
    for (const f of readdirSync(LISTS_DIR).filter((x) => x.endsWith('.js')).sort()) {
      const mod = await import(pathToFileURL(join(LISTS_DIR, f)).href);
      if (!Array.isArray(mod?.batch)) continue;
      for (const b of mod.batch) {
        rows.push({ slug: b.slug, title_zh: b.title_zh, title_en: b.title_en, author: b.author, from: f });
      }
    }
  }
  return rows;
}

function die(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

/** 读取当天已生成的条目（用于同日重跑的合并），带缓存击穿 */
async function loadDayFile(date) {
  const listFile = join(LISTS_DIR, `daily-${date}.js`);
  const proseFile = join(PROSE_DIR, `daily-${date}.js`);
  const stamp = Date.now();
  let entries = [];
  let prose = {};
  if (existsSync(listFile)) {
    const mod = await import(`${pathToFileURL(listFile).href}?t=${stamp}`);
    if (Array.isArray(mod?.batch)) entries = mod.batch;
  }
  if (existsSync(proseFile)) {
    const mod = await import(`${pathToFileURL(proseFile).href}?t=${stamp}`);
    if (mod?.batch && !Array.isArray(mod.batch)) prose = mod.batch;
  }
  return { entries, prose };
}

/* ---------------- --existing ---------------- */
async function cmdExisting() {
  const rows = await loadExisting();
  console.log(`# 全库已有 ${rows.length} 本（用于去重，新书不得与其重复）`);
  console.log('# slug\ttitle_zh\ttitle_en\tauthor');
  for (const r of rows) {
    console.log([r.slug, r.title_zh || '', r.title_en || '', r.author || ''].join('\t'));
  }
}

/* ---------------- --taxonomy ---------------- */
async function cmdTaxonomy() {
  console.log('# 合法取值表（供撰写载荷时选用，不得自造）');
  console.log('');
  console.log(`## category（必填 1 个，共 ${categories.length}）`);
  for (const c of categories) console.log(`${c.slug}\t${c.name_zh || ''}\t${c.name_en || ''}`);
  console.log('');
  console.log(`## tags（必填 ≥3 个，共 ${allTags.length}）`);
  console.log(allTags.map((t) => t.slug).join(' '));
  console.log('');
  console.log(`## topics（必填 ≥2 个，共 ${allTopics.length}）`);
  console.log(allTopics.map((t) => t.slug).join(' '));
}

/* ---------------- 校验单本 ---------------- */
function validateBook(b, idx) {
  const errs = [];
  const at = `books[${idx}]`;
  for (const f of ENTRY_FIELDS) {
    if (!b[f] || !String(b[f]).trim()) errs.push(`${at}.${f} 缺失`);
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(b.slug || '')) errs.push(`${at}.slug 必须是小写连字符形式：${b.slug}`);
  if (!catSlugs.has(b.category)) errs.push(`${at}.category 不在 taxonomy：${b.category}`);
  if (b.year !== null && b.year !== undefined && !Number.isInteger(b.year)) {
    errs.push(`${at}.year 必须是整数或 null`);
  }
  if (!Array.isArray(b.tags) || b.tags.length < 3) errs.push(`${at}.tags 至少 3 个`);
  else for (const t of b.tags) if (!tagSlugs.has(t)) errs.push(`${at} 未知标签：${t}`);
  if (!Array.isArray(b.topics) || b.topics.length < 2) errs.push(`${at}.topics 至少 2 个`);
  else for (const t of b.topics) if (!topicSlugs.has(t)) errs.push(`${at} 未知主题：${t}`);

  const p = b.prose;
  if (!p || typeof p !== 'object') {
    errs.push(`${at}.prose 缺失`);
    return errs;
  }
  for (const f of PROSE_FIELDS_TEXT) {
    if (!p[f] || !String(p[f]).trim()) errs.push(`${at}.prose.${f} 缺失`);
  }
  for (const f of PROSE_FIELDS_LIST) {
    if (!Array.isArray(p[f]) || !p[f].length) errs.push(`${at}.prose.${f} 必须是数组`);
  }
  if (Array.isArray(p.core_ideas_zh) && p.core_ideas_zh.length < 3) errs.push(`${at} core_ideas 至少 3 条`);
  if (Array.isArray(p.core_ideas_en) && p.core_ideas_en.length < 3) errs.push(`${at} core_ideas_en 至少 3 条`);
  if (Array.isArray(p.key_questions_zh) && p.key_questions_zh.length < 2) errs.push(`${at} key_questions 至少 2 条`);
  if (Array.isArray(p.key_questions_en) && p.key_questions_en.length < 2) errs.push(`${at} key_questions_en 至少 2 条`);
  if (Array.isArray(p.core_ideas_zh) && Array.isArray(p.core_ideas_en) && p.core_ideas_zh.length !== p.core_ideas_en.length) {
    errs.push(`${at} core_ideas 中英条数不一致`);
  }
  if (Array.isArray(p.key_questions_zh) && Array.isArray(p.key_questions_en) && p.key_questions_zh.length !== p.key_questions_en.length) {
    errs.push(`${at} key_questions 中英条数不一致`);
  }
  return errs;
}

/* ---------------- 序列化 ---------------- */
const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ')}'`;
const qa = (arr, ind = '      ') =>
  `[\n${arr.map((x) => `${ind}  ${q(x)}`).join(',\n')}\n${ind}]`;

function renderListFile(date, books) {
  const body = books
    .map((b) => `  {
    slug: ${q(b.slug)},
    category: ${q(b.category)},
    title_zh: ${q(b.title_zh)},
    title_en: ${b.title_en ? q(b.title_en) : 'null'},
    author: ${q(b.author)},
    author_zh: ${q(b.author_zh)},
    author_en: ${q(b.author_en)},
    nationality_zh: ${q(b.nationality_zh)},
    nationality_en: ${q(b.nationality_en)},
    year: ${b.year === null || b.year === undefined ? 'null' : b.year},
    original_language: ${q(b.original_language)},
    tier: 'list',
    source: 'daily',
    list_category_zh: ${q(b.list_category_zh || '每日推荐')},
    list_category_en: ${q(b.list_category_en || 'Daily Pick')},
    theme_zh: ${q(b.theme_zh)},
    theme_en: ${q(b.theme_en)},
    tags: ${JSON.stringify(b.tags)},
    topics: ${JSON.stringify(b.topics)}
  }`)
    .join(',\n');

  return `/**
 * 每日推荐 · ${date}
 * 由定时任务自动生成。year / title_en 核实不了写 null，绝不猜测。
 * 同一天重复运行会与当日已有条目**合并去重**，不会丢书、不会重复。
 */
export const batch = [
${body}
];
`;
}

function renderProseFile(date, books) {
  const body = books
    .map((b) => {
      const p = b.prose;
      return `  '${b.slug}': {
    description_zh: ${q(p.description_zh)},
    description_en: ${q(p.description_en)},
    why_read_zh: ${q(p.why_read_zh)},
    why_read_en: ${q(p.why_read_en)},
    core_ideas_zh: ${qa(p.core_ideas_zh)},
    core_ideas_en: ${qa(p.core_ideas_en)},
    key_questions_zh: ${qa(p.key_questions_zh)},
    key_questions_en: ${qa(p.key_questions_en)},
    who_should_read_zh: ${q(p.who_should_read_zh)},
    who_should_read_en: ${q(p.who_should_read_en)},
    reading_note_zh: ${q(p.reading_note_zh)},
    reading_note_en: ${q(p.reading_note_en)}
  }`;
    })
    .join(',\n');

  return `/** 每日推荐阅读指引 · ${date} */
export const batch = {
${body}
};
`;
}

/* ---------------- 主流程 ---------------- */
async function cmdIngest(file) {
  if (!existsSync(file)) die(`载荷文件不存在：${file}`);
  let payload;
  try {
    payload = JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    die(`载荷不是合法 JSON：${err.message}`);
  }

  const date = payload.date;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(date || ''))) die(`date 必须是 YYYY-MM-DD：${date}`);
  const incoming = Array.isArray(payload.books) ? payload.books : [];
  if (!incoming.length) die('books 为空，无内容可入库');

  const errs = [];
  incoming.forEach((b, i) => errs.push(...validateBook(b, i)));
  if (errs.length) {
    console.error('❌ 载荷校验失败：');
    for (const e of errs) console.error(`   - ${e}`);
    process.exit(1);
  }

  const existing = await loadExisting();
  const usedSlugs = new Set(existing.map((r) => r.slug));
  const usedTitles = new Set();
  for (const r of existing) {
    if (r.title_zh) usedTitles.add(normTitle(r.title_zh));
    if (r.title_en) usedTitles.add(normTitle(r.title_en));
  }

  const accepted = [];
  const skipped = [];
  for (const b of incoming) {
    if (usedSlugs.has(b.slug)) {
      skipped.push(`${b.slug}（slug 已存在）`);
      continue;
    }
    const tz = normTitle(b.title_zh);
    const te = normTitle(b.title_en);
    if ((tz && usedTitles.has(tz)) || (te && usedTitles.has(te))) {
      skipped.push(`${b.slug}（书名与已有书籍重复：${b.title_zh}）`);
      continue;
    }
    usedSlugs.add(b.slug);
    if (tz) usedTitles.add(tz);
    if (te) usedTitles.add(te);
    accepted.push(b);
  }

  if (!accepted.length) {
    console.log(`status=skipped_duplicate`);
    console.log(`已收录过，本次无新增。跳过原因：${skipped.join('；')}`);
    return;
  }

  mkdirSync(LISTS_DIR, { recursive: true });
  mkdirSync(PROSE_DIR, { recursive: true });

  // 与当天已生成的条目合并（同日重跑时不会丢掉先写入的书）
  const prev = await loadDayFile(date);
  const merged = new Map();
  for (const e of prev.entries) {
    const p = prev.prose[e.slug];
    if (p) merged.set(e.slug, { ...e, prose: p });
  }
  for (const b of accepted) merged.set(b.slug, b);
  const all = [...merged.values()];

  const listFile = join(LISTS_DIR, `daily-${date}.js`);
  const proseFile = join(PROSE_DIR, `daily-${date}.js`);
  writeFileSync(listFile, renderListFile(date, all), 'utf8');
  writeFileSync(proseFile, renderProseFile(date, all), 'utf8');

  console.log(`status=added`);
  console.log(`新增 ${accepted.length} 本：`);
  for (const b of accepted) console.log(`  + ${b.slug}  《${b.title_zh}》`);
  if (skipped.length) console.log(`跳过 ${skipped.length} 本：${skipped.join('；')}`);
  console.log(`当日累计 ${all.length} 本（含此前同日写入的 ${all.length - accepted.length} 本）`);
  console.log(`写入：content/lists/daily-${date}.js`);
  console.log(`写入：content/list-prose/daily-${date}.js`);
}

/* ---------------- 入口 ---------------- */
const args = process.argv.slice(2);
const fileIdx = args.indexOf('--file');
if (args.includes('--existing')) {
  await cmdExisting();
} else if (args.includes('--taxonomy')) {
  await cmdTaxonomy();
} else if (fileIdx >= 0 && args[fileIdx + 1]) {
  await cmdIngest(args[fileIdx + 1]);
} else {
  console.log(`用法：
  node src/ingest-books.mjs --existing            # 导出全库已有书目（去重用）
  node src/ingest-books.mjs --taxonomy            # 导出合法 category / tags / topics
  node src/ingest-books.mjs --file _inbox/YYYY-MM-DD.json   # 入库当日推荐`);
}
