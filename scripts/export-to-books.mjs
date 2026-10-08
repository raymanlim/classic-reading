#!/usr/bin/env node
/**
 * export-to-books.mjs — 把「经典书库」站点的文章 / 阅读笔记同步一份到 Obsidian Books 目录
 * ---------------------------------------------------------------------------------
 * 用法：
 *   node scripts/export-to-books.mjs                     # 导出当天日期的文章 + 笔记
 *   node scripts/export-to-books.mjs --all               # 导出**全部**文章 + 全部笔记
 *   node scripts/export-to-books.mjs --date 2026-10-07   # 指定日期
 *   node scripts/export-to-books.mjs --article <slug>    # 只导指定文章
 *   node scripts/export-to-books.mjs --out "D:/somewhere"# 换输出目录
 *
 * 设计要点：
 * - 直接从 content/ 的 JS 模块读取，**不重写正文**，保证与站点内容逐字一致。
 * - 输出中英双语全文（中文在前、英文在后），带 YAML frontmatter，便于 Obsidian 检索。
 * - 阅读笔记的「思考」块标签跟随该条笔记真实的 `voice` 字段
 *   （editorial → 编者笔记 / Editor's Note；其余 → 我的思考 / My Thinking），
 *   与站点 locales 里的 `my_thinking` / `editorial_note` 文案对齐，不一律套「编者笔记」。
 * - 幂等：同名文件直接覆盖。
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const ARTICLES_DIR = join(ROOT, 'content', 'articles');
const NOTES_FILE = join(ROOT, 'content', 'notes.js');

const DEFAULT_OUT = 'D:/Obsidian/obsidian_valut/Books/经典书库';
const SITE_URL = 'https://0e00525f540948a2b66f58b8a0e4962d.sg2.agentos-app.run';

// ---------- 参数 ----------
const argv = process.argv.slice(2);
const getArg = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : undefined;
};
const today = new Date().toISOString().slice(0, 10);
const date = getArg('--date') || today;
const onlySlug = getArg('--article');
const exportAll = argv.includes('--all');
const OUT_DIR = getArg('--out') || DEFAULT_OUT;

// ---------- 工具 ----------
const q = (s) => `"${String(s).replace(/"/g, '\\"')}"`;
const list = (arr) => `[${(arr || []).map((x) => q(x)).join(', ')}]`;
const safeName = (s) => String(s).replace(/[\\/:*?"<>|]/g, '－').trim();

function frontmatter(pairs) {
  return ['---', ...pairs.filter(Boolean), '---', ''].join('\n');
}

// ---------- 读取文章 ----------
async function loadArticles() {
  const out = [];
  for (const f of readdirSync(ARTICLES_DIR).filter((x) => x.endsWith('.js'))) {
    const mod = await import(pathToFileURL(join(ARTICLES_DIR, f)).href);
    const a = mod.article || mod.default;
    if (a) out.push(a);
  }
  return out;
}

async function loadNotes() {
  const mod = await import(pathToFileURL(NOTES_FILE).href);
  return mod.notes || mod.default || [];
}

// ---------- 渲染 ----------
function renderArticle(a) {
  const fm = frontmatter([
    `title: ${q(a.title_zh)}`,
    `title_en: ${q(a.title_en)}`,
    `type: 思想长文`,
    `source: 经典书库 · 文章`,
    `site_slug: ${q(a.slug)}`,
    `publish_date: ${a.publish_date}`,
    `category: ${a.category}`,
    `tags: ${list(['books', '经典书库', ...(a.tags || [])])}`,
    `related_books: ${list(a.related_books)}`,
    `related_topics: ${list(a.related_topics)}`,
    `lang: both`,
    `url: ${SITE_URL}/zh/articles/${a.slug}/`,
    `url_en: ${SITE_URL}/en/articles/${a.slug}/`,
  ]);

  const zh = [
    `# ${a.title_zh}`,
    '',
    `> ${a.subtitle_zh}`,
    '',
    (a.content_zh || '').trim(),
    '',
  ].join('\n');

  const en = [
    `# ${a.title_en}`,
    '',
    `> ${a.subtitle_en}`,
    '',
    (a.content_en || '').trim(),
    '',
  ].join('\n');

  return {
    file: `${a.publish_date} ${safeName(a.title_zh)}.md`,
    body: [fm, zh, '---', '', en].join('\n'),
  };
}

function renderNote(n, bookTitle) {
  const fm = frontmatter([
    `title: ${q(`阅读笔记 · ${bookTitle}`)}`,
    `type: 阅读笔记`,
    `source: 经典书库 · 阅读笔记`,
    `site_slug: ${q(n.slug)}`,
    `note_id: ${q(n.id)}`,
    `book: ${q(n.book)}`,
    `date: ${n.date}`,
    `voice: ${q(n.voice || 'editorial')}`,
    `tags: ${list(['books', '经典书库', '阅读笔记', ...(n.topics || [])])}`,
    `topics: ${list(n.topics)}`,
    `url: ${SITE_URL}/zh/notes/`,
  ]);

  // 与站点保持一致：src/lib/data.js 把 voice 归一化为
  //   note.voice === 'editorial' ? 'editorial' : 'personal'
  // ⇒ **缺省是 personal（我的思考 / My Thinking），不是 editorial**。默认值不要写反。
  const isEditorial = n.voice === 'editorial';
  const block = (lang, insight, thinking, quote) => {
    const L = lang === 'zh'
      ? { h: '中文', insight: '核心洞见', note: isEditorial ? '编者笔记' : '我的思考', quote: '引用' }
      : { h: 'English', insight: 'Key Insight', note: isEditorial ? "Editor's Note" : 'My Thinking', quote: 'Quote' };
    const lines = [
      `## ${L.h}`,
      '',
      `### ${L.insight}`,
      '',
      insight || '',
      '',
      `### ${L.note}`,
      '',
      thinking || '',
      '',
    ];
    if (quote) lines.push(`### ${L.quote}`, '', quote, '');
    return lines.join('\n');
  };

  return {
    file: `${n.date} 阅读笔记·${safeName(bookTitle)}.md`,
    body: [
      fm,
      `# 阅读笔记 · ${bookTitle}`,
      '',
      `> 取自「经典书库」阅读笔记（编者视角）。原页：${SITE_URL}/zh/notes/`,
      '',
      block('zh', n.key_insight_zh, n.thinking_zh, n.quote_zh),
      '---',
      '',
      block('en', n.key_insight_en, n.thinking_en, n.quote_en),
    ].join('\n'),
  };
}

// ---------- 主流程 ----------
const books = await loadArticles();
const notes = await loadNotes();

// 书名映射（用于笔记标题）：直接 import 书目清单模块，**不要用正则去 grep 源码**
// —— 正则受字段顺序 / 换行 / 引号影响，实测 100 条会静默漏掉 13 条（含 superintelligence、
//    thinking-in-systems），回退成 slug 文件名。
// ⚠️ 书目分两处存放：策展经典在 books.manifest.js，书单导入的 166 本在 content/lists/*.js。
//    只读 manifest 会让书单条目静默回退成 slug 文件名（2026-10-08 实证：
//    the-palliative-society 被写成「阅读笔记·the-palliative-society.md」，
//    而不是「阅读笔记·妥协社会.md」）。两处都要读。
let titleOf = {};
try {
  const mod = await import(pathToFileURL(join(ROOT, 'content', 'books.manifest.js')).href);
  const entries = mod.books || mod.default || [];
  titleOf = Object.fromEntries(entries.map((b) => [b.slug, b.title_zh || b.title_en || b.slug]));
} catch { /* 拿不到就退回 slug */ }

try {
  const listsDir = join(ROOT, 'content', 'lists');
  for (const f of readdirSync(listsDir).filter((x) => x.endsWith('.js'))) {
    const mod = await import(pathToFileURL(join(listsDir, f)).href);
    const arr = Array.isArray(mod?.batch) ? mod.batch : [];
    for (const b of arr) {
      if (b?.slug && !titleOf[b.slug]) titleOf[b.slug] = b.title_zh || b.title_en || b.slug;
    }
  }
} catch { /* 拿不到就退回 slug */ }

mkdirSync(OUT_DIR, { recursive: true });

const written = [];

for (const a of books) {
  if (onlySlug) {
    if (a.slug !== onlySlug) continue;
  } else if (!exportAll && a.publish_date !== date) continue;
  const { file, body } = renderArticle(a);
  writeFileSync(join(OUT_DIR, file), body, 'utf8');
  written.push(file);
}

for (const n of notes) {
  if (onlySlug) continue;
  if (!exportAll && n.date !== date) continue;
  const { file, body } = renderNote(n, titleOf[n.book] || n.book);
  writeFileSync(join(OUT_DIR, file), body, 'utf8');
  written.push(file);
}

written.sort();

console.log(`输出目录：${OUT_DIR}`);
console.log(`模式：${onlySlug ? `单篇 article=${onlySlug}` : exportAll ? '全部（--all）' : `按日期 date=${date}`}`);
if (written.length === 0) {
  console.log(`⚠️  未找到匹配的文章或笔记，未写入任何文件。`);
} else {
  written.forEach((f) => console.log(`  ✅ ${f}`));
  console.log(`共 ${written.length} 个文件。`);
}
