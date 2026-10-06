/**
 * 数据与产物校验
 * 用法：node src/check.mjs
 * 检查项：
 *   1. 每本书都有内容 overlay，且关键双语字段非空
 *   2. 每本书至少一个 author 档案、分类存在
 *   3. tags / topics / related_books 全部合法
 *   4. 每个作者 slug 都有档案且至少关联一本书
 *   5. 阅读路线引用的书全部存在
 *   6. 文章引用的书/主题/分类/标签全部存在
 *   7. dist 内部链接无死链（抽样全量扫描）
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadData, ROOT } from './lib/data.js';
import { LANGS } from './lib/i18n.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, 'dist');

const errors = [];
const notes = [];

const REQUIRED_ZH = ['description_zh', 'why_read_zh', 'who_should_read_zh', 'today_idea_zh'];
const REQUIRED_EN = ['description_en', 'why_read_en', 'who_should_read_en', 'today_idea_en'];

/* 书单条目没有 today_idea（不参与「每日一书」轮转），其余阅读指引字段与策展经典一致 */
const LIST_PROSE_ZH = ['description_zh', 'why_read_zh', 'who_should_read_zh', 'reading_note_zh'];
const LIST_PROSE_EN = ['description_en', 'why_read_en', 'who_should_read_en', 'reading_note_en'];

function isBlank(value) {
  if (Array.isArray(value)) return value.length === 0 || value.every((v) => !String(v).trim());
  return !value || !String(value).trim();
}

async function checkData() {
  const data = await loadData();

  if (data.curatedBooks.length !== 100) notes.push(`策展经典 ${data.curatedBooks.length} 本（期望 100）`);
  const listWithProse = data.listBooks.filter((b) => b.hasProse).length;
  notes.push(`书单导入 ${data.listBooks.length} 本 · 书籍总数 ${data.books.length}`);
  notes.push(`书单阅读指引覆盖 ${listWithProse} / ${data.listBooks.length}`);

  for (const book of data.books) {
    /* 分类与词表合法性对两类书籍都适用 */
    if (!book.categoryEntity) errors.push(`[书籍] ${book.slug} 分类无效：${book.category}`);

    if (book.tier === 'list') {
      /* 轻量条目：只校验事实字段与词表合法性，不要求长文内容 */
      if (!book.title_zh) errors.push(`[书单] ${book.slug} 缺少中文书名`);
      if (!book.author) errors.push(`[书单] ${book.slug} 缺少作者`);
      if (!['anzhengming', 'xiaomingshuo', 'daily'].includes(book.source)) {
        errors.push(`[书单] ${book.slug} 来源非法：${book.source}`);
      }
      if (!book.theme_zh || !book.theme_en) errors.push(`[书单] ${book.slug} 缺少来源主题`);
      if (book.tagSlugs.length < 3) errors.push(`[书单] ${book.slug} 标签少于 3 个`);
      if (book.topicSlugs.length < 2) errors.push(`[书单] ${book.slug} 主题少于 2 个`);

      /* 阅读指引：与策展经典同一套内容标准 */
      if (!book.hasProse) {
        errors.push(`[书单] ${book.slug} 缺少阅读指引（content/list-prose/）`);
        continue;
      }
      for (const field of LIST_PROSE_ZH) {
        if (isBlank(book[field])) errors.push(`[书单] ${book.slug} 缺少 ${field}`);
      }
      for (const field of LIST_PROSE_EN) {
        if (isBlank(book[field])) errors.push(`[书单] ${book.slug} 缺少 ${field}`);
      }
      if (isBlank(book.core_ideas_zh) || book.core_ideas_zh.length < 3) errors.push(`[书单] ${book.slug} core_ideas_zh 少于 3 条`);
      if (isBlank(book.core_ideas_en) || book.core_ideas_en.length < 3) errors.push(`[书单] ${book.slug} core_ideas_en 少于 3 条`);
      if (isBlank(book.key_questions_zh) || book.key_questions_zh.length < 2) errors.push(`[书单] ${book.slug} key_questions_zh 少于 2 条`);
      if (isBlank(book.key_questions_en) || book.key_questions_en.length < 2) errors.push(`[书单] ${book.slug} key_questions_en 少于 2 条`);
      continue;
    }

    for (const field of REQUIRED_ZH) {
      if (isBlank(book[field])) errors.push(`[书籍] ${book.slug} 缺少 ${field}`);
    }
    for (const field of REQUIRED_EN) {
      if (isBlank(book[field])) errors.push(`[书籍] ${book.slug} 缺少 ${field}`);
    }
    if (isBlank(book.core_ideas_zh) || book.core_ideas_zh.length < 3) errors.push(`[书籍] ${book.slug} core_ideas_zh 少于 3 条`);
    if (isBlank(book.core_ideas_en) || book.core_ideas_en.length < 3) errors.push(`[书籍] ${book.slug} core_ideas_en 少于 3 条`);
    if (isBlank(book.key_questions_zh) || book.key_questions_zh.length < 2) errors.push(`[书籍] ${book.slug} key_questions_zh 少于 2 条`);
    if (isBlank(book.key_questions_en) || book.key_questions_en.length < 2) errors.push(`[书籍] ${book.slug} key_questions_en 少于 2 条`);
    if (!book.author) errors.push(`[书籍] ${book.slug} 缺少主作者档案`);
    if (book.tagSlugs.length < 3) errors.push(`[书籍] ${book.slug} 标签少于 3 个`);
    if (book.topicSlugs.length < 2) errors.push(`[书籍] ${book.slug} 主题少于 2 个`);
    if (book.related.length < 3) errors.push(`[书籍] ${book.slug} 相关书籍少于 3 本`);
    if (!book.index || book.index < 50) errors.push(`[书籍] ${book.slug} 经典指数异常：${book.index}`);
    if (![1, 2, 3].includes(Number(book.difficulty))) errors.push(`[书籍] ${book.slug} 难度异常：${book.difficulty}`);
    if (!book.reading_time) errors.push(`[书籍] ${book.slug} 缺少 reading_time`);
  }

  /* 全库书名查重：归一化后比对中文名与英文名，防止「每日推荐」或手工导入产生重复书目 */
  const normTitle = (s) =>
    String(s || '')
      .toLowerCase()
      .replace(/[\s\u3000]+/g, '')
      .replace(/[《》〈〉「」『』()（）[\]【】:：,，.。!！?？'"“”‘’·、\-—_/]/g, '');
  const titleSeen = new Map();
  for (const book of data.books) {
    for (const raw of [book.title_zh, book.title_en]) {
      const key = normTitle(raw);
      if (!key) continue;
      if (titleSeen.has(key)) {
        errors.push(`[查重] ${book.slug} 的书名与 ${titleSeen.get(key)} 重复：${raw}`);
      } else {
        titleSeen.set(key, book.slug);
      }
    }
  }

  for (const author of data.authors) {
    if (!author.books.length) errors.push(`[作者] ${author.slug} 未关联任何书籍`);
    if (isBlank(author.bio_zh) || isBlank(author.bio_en)) errors.push(`[作者] ${author.slug} 缺少双语简介`);
    if (isBlank(author.name_zh) || isBlank(author.name_en)) errors.push(`[作者] ${author.slug} 缺少双语姓名`);
  }

  const authorSlugs = new Set(data.authors.map((a) => a.slug));
  for (const book of data.books) {
    /* 书单导入的轻量条目允许作者无独立档案（页面上作者名渲染为纯文本，不产生死链） */
    if (book.tier === 'list') continue;
    for (const a of book.authors) {
      if (!authorSlugs.has(a.slug)) errors.push(`[书籍] ${book.slug} 引用了未建档作者 ${a.slug}`);
    }
  }

  for (const path of data.paths) {
    for (const level of path.levels) {
      if (!data.bookBySlug[level.book]) errors.push(`[路线] ${path.slug} 引用了不存在的书 ${level.book}`);
      if (isBlank(level.label_zh) || isBlank(level.label_en)) errors.push(`[路线] ${path.slug} 级别缺少双语标签`);
    }
  }

  for (const article of data.articles) {
    if (!article.categoryEntity) errors.push(`[文章] ${article.slug} 分类无效：${article.category}`);
    if (!article.content_zh && !article.content_en) errors.push(`[文章] ${article.slug} 没有任何语言的正文`);
    if (article.content_zh && article.content_zh.length < 600) errors.push(`[文章] ${article.slug} 中文正文过短（${article.content_zh.length} 字）`);
    if (article.content_en && article.content_en.length < 600) errors.push(`[文章] ${article.slug} 英文正文过短（${article.content_en.length} 字符）`);
    for (const book of article.related_books || []) {
      if (!data.bookBySlug[book]) errors.push(`[文章] ${article.slug} 关联了不存在的书 ${book}`);
    }
  }

  const emptyCategories = data.categories.filter((c) => !(data.categoryBooks[c.slug] || []).length);
  for (const c of emptyCategories) errors.push(`[分类] ${c.slug} 没有任何书籍`);

  const emptyTopics = data.topics.filter((t) => !(data.topics && (data.topicBooks[t.slug] || []).length));
  for (const t of emptyTopics) notes.push(`[主题] ${t.slug} 没有关联书籍（不会生成有效页面内容）`);

  notes.push(`书籍 ${data.books.length} · 作者 ${data.authors.length} · 分类 ${data.categories.length} · 主题 ${data.topics.length} · 标签 ${data.tags.length} · 路线 ${data.paths.length} · 文章 ${data.articles.length} · 笔记 ${data.notes.length}`);
  return data;
}

/* ---------------- 产物链接检查 ---------------- */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function existsRoute(routePath) {
  const clean = routePath.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return true;
  if (/\.(xml|txt|json|svg|png|css|js|ico|webp|avif)$/i.test(clean)) {
    return existsSync(join(DIST, clean.replace(/^\//, '')));
  }
  const base = join(DIST, clean.replace(/^\//, ''));
  return existsSync(join(base, 'index.html')) || existsSync(base) || existsSync(`${base}.html`);
}

function checkLinks() {
  if (!existsSync(DIST)) {
    notes.push('dist 尚未生成，跳过链接检查');
    return;
  }
  const files = walk(DIST).filter((f) => f.endsWith('.html'));
  const bad = new Map();
  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    const hrefs = [...html.matchAll(/(?:href|src)="(\/[^"#][^"]*)"/g)].map((m) => m[1]);
    for (const href of hrefs) {
      if (!existsRoute(href)) {
        const key = href;
        if (!bad.has(key)) bad.set(key, file.replace(DIST, ''));
      }
    }
  }
  for (const [href, from] of bad) errors.push(`[死链] ${href} ← ${from}`);
  notes.push(`已扫描 ${files.length} 个 HTML 文件`);
}

async function main() {
  await checkData();
  checkLinks();

  console.log('');
  for (const n of notes) console.log(`· ${n}`);
  console.log('');
  if (errors.length) {
    console.log(`❌ 发现 ${errors.length} 个问题：`);
    for (const e of errors.slice(0, 80)) console.log(`   - ${e}`);
    if (errors.length > 80) console.log(`   ... 其余 ${errors.length - 80} 条省略`);
    process.exitCode = 1;
  } else {
    console.log('✅ 校验通过，未发现问题。');
  }
  console.log('');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
