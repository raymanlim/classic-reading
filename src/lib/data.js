/**
 * 数据层：把 manifest、内容 overlay、作者、分类词表、路线、文章、笔记
 * 合并成一份构建期使用的完整数据集，并派生各种索引。
 */
import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

import { books as manifest } from '../../content/books.manifest.js';
import { categories, tags, topics } from '../../content/taxonomy.js';
import { readingPaths } from '../../content/paths.js';
import { featured, readingStatus, statusOrder } from '../../content/collections.js';
import { searchAliases } from '../../content/search-aliases.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(__dirname, '..', '..');

const BATCH_COUNT = 8;

const EMPTY_OVERLAY = {
  subtitle_zh: '',
  subtitle_en: '',
  description_zh: '',
  description_en: '',
  why_read_zh: '',
  why_read_en: '',
  core_ideas_zh: [],
  core_ideas_en: [],
  key_questions_zh: [],
  key_questions_en: [],
  who_should_read_zh: '',
  who_should_read_en: '',
  reading_note_zh: '',
  reading_note_en: '',
  today_idea_zh: '',
  today_idea_en: '',
  difficulty: 2,
  reading_time: 12,
  tags: [],
  topics: [],
  related_books: []
};

async function importOptional(absPath) {
  if (!existsSync(absPath)) return null;
  try {
    const mod = await import(pathToFileURL(absPath).href);
    return mod;
  } catch (err) {
    throw new Error(`导入失败 ${absPath}: ${err.message}`);
  }
}

function cleanList(list) {
  return Array.isArray(list) ? list.filter((x) => typeof x === 'string' && x.trim()) : [];
}

export async function loadData() {
  const warnings = [];

  /* ---------- 1. 书籍 overlay ---------- */
  const overlays = {};
  for (let i = 1; i <= BATCH_COUNT; i += 1) {
    const mod = await importOptional(join(ROOT, 'content', 'books', `batch-${i}.js`));
    if (mod?.batch) Object.assign(overlays, mod.batch);
  }

  /* ---------- 1b. 书单导入（轻量条目，无长文 overlay） ---------- */
  const listEntries = [];
  const listDir = join(ROOT, 'content', 'lists');
  if (existsSync(listDir)) {
    for (const file of readdirSync(listDir).filter((f) => f.endsWith('.js')).sort()) {
      const mod = await importOptional(join(listDir, file));
      const arr = Array.isArray(mod?.batch) ? mod.batch : [];
      if (!arr.length) warnings.push(`书单文件无有效导出：${file}`);
      // daily-<date>.js 由定时任务生成：把日期挂到条目上，供首页「近 7 日推荐」排序
      const dailyMatch = /^daily-(\d{4}-\d{2}-\d{2})\.js$/.exec(file);
      const dailyDate = dailyMatch ? dailyMatch[1] : null;
      for (const b of arr) listEntries.push(dailyDate ? { ...b, daily_date: dailyDate } : b);
    }
  }

  /* ---------- 1c. 书单条目的阅读指引 overlay ----------
     与策展经典的 overlay 分开存放：策展经典在 content/books/，
     书单条目在 content/list-prose/。两者 slug 互不重叠（导入时已剔除站内已有书目），
     这里仍做一次冲突检查，避免未来手动维护时踩坑。 */
  const listProse = {};
  const listProseDir = join(ROOT, 'content', 'list-prose');
  if (existsSync(listProseDir)) {
    for (const file of readdirSync(listProseDir).filter((f) => f.endsWith('.js')).sort()) {
      const mod = await importOptional(join(listProseDir, file));
      const map = mod?.batch && !Array.isArray(mod.batch) ? mod.batch : null;
      if (!map) {
        warnings.push(`阅读指引文件无有效导出：${file}`);
        continue;
      }
      for (const [slug, prose] of Object.entries(map)) {
        if (listProse[slug]) warnings.push(`阅读指引重复定义：${slug}（${file}）`);
        if (overlays[slug]) warnings.push(`阅读指引与策展经典 overlay 冲突：${slug}（${file}）`);
        listProse[slug] = prose;
      }
    }
  }

  /* ---------- 2. 作者 ---------- */
  const authorsMod = await importOptional(join(ROOT, 'content', 'authors.js'));
  const authorsRaw = authorsMod?.authors ?? {};

  /* ---------- 3. 文章 ---------- */
  const articleDir = join(ROOT, 'content', 'articles');
  const articles = [];
  if (existsSync(articleDir)) {
    for (const file of readdirSync(articleDir).filter((f) => f.endsWith('.js')).sort()) {
      const mod = await importOptional(join(articleDir, file));
      const article = mod?.article ?? mod?.default;
      if (article?.slug) articles.push(article);
      else warnings.push(`文章文件无有效导出：${file}`);
    }
  }
  articles.sort((a, b) => String(b.publish_date).localeCompare(String(a.publish_date)));

  /* ---------- 4. 笔记 ---------- */
  const notesMod = await importOptional(join(ROOT, 'content', 'notes.js'));
  const notes = Array.isArray(notesMod?.notes) ? notesMod.notes : [];

  /* ---------- 5. 合并书籍 ---------- */
  const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));
  const tagBySlug = Object.fromEntries(tags.map((t) => [t.slug, t]));
  const topicBySlug = Object.fromEntries(topics.map((t) => [t.slug, t]));

  const books = [...manifest, ...listEntries].map((entry) => {
    const isList = entry.tier === 'list';
    const overlay = isList ? listProse[entry.slug] : overlays[entry.slug];
    if (!overlay && !isList) warnings.push(`缺少内容 overlay：${entry.slug}`);
    if (isList && !overlay) warnings.push(`书单条目缺少阅读指引：${entry.slug}`);
    const merged = { ...EMPTY_OVERLAY, ...(overlay || {}), ...entry };

    const authorRefs = [
      { slug: entry.author, en: entry.author_en, zh: entry.author_zh },
      ...(entry.co_authors || [])
    ];

    const authorEntities = authorRefs
      .filter((a) => a && a.slug)
      .map((a) => {
        const record = authorsRaw[a.slug];
        if (!record && !isList) warnings.push(`缺少作者档案：${a.slug}`);
        return {
          slug: a.slug,
          name_en: record?.name_en || a.en || a.slug,
          name_zh: record?.name_zh || a.zh || a.en || a.slug,
          life: record?.life || '',
          nationality_zh: record?.nationality_zh || entry.nationality_zh || '',
          nationality_en: record?.nationality_en || entry.nationality_en || '',
          role_zh: record?.role_zh || '',
          role_en: record?.role_en || '',
          bio_zh: record?.bio_zh || '',
          bio_en: record?.bio_en || '',
          ideas_zh: cleanList(record?.ideas_zh),
          ideas_en: cleanList(record?.ideas_en),
          hasProfile: Boolean(record)
        };
      });

    const bookTags = cleanList(merged.tags).filter((slug) => {
      if (!tagBySlug[slug]) {
        warnings.push(`未知标签 ${slug}（${entry.slug}）`);
        return false;
      }
      return true;
    });
    const bookTopics = cleanList(merged.topics).filter((slug) => {
      if (!topicBySlug[slug]) {
        warnings.push(`未知主题 ${slug}（${entry.slug}）`);
        return false;
      }
      return true;
    });
    const related = cleanList(merged.related_books).filter((slug) => slug !== entry.slug);

    return {
      ...merged,
      isList,
      hasProse: Boolean(overlay),
      author: authorEntities[0],
      authors: authorEntities,
      categoryEntity: categoryBySlug[merged.category] || null,
      tagSlugs: bookTags,
      topicSlugs: bookTopics,
      relatedSlugs: related,
      index: Number(merged.classic_index) || 0,
      sub: Array.isArray(merged.sub) ? merged.sub : [3, 3, 3, 3]
    };
  });

  const bookBySlug = Object.fromEntries(books.map((b) => [b.slug, b]));

  /* 关联书籍实体（过滤掉不存在的 slug） */
  for (const book of books) {
    book.related = book.relatedSlugs
      .map((slug) => {
        if (!bookBySlug[slug]) {
          warnings.push(`未知关联书籍 ${slug}（来自 ${book.slug}）`);
          return null;
        }
        return bookBySlug[slug];
      })
      .filter(Boolean);
    book.tagEntities = book.tagSlugs.map((s) => tagBySlug[s]);
    book.topicEntities = book.topicSlugs.map((s) => topicBySlug[s]);
  }

  /* ---------- 6. 派生索引 ---------- */
  const categoryBooks = {};
  const topicBooks = {};
  const tagBooks = {};
  for (const c of categories) categoryBooks[c.slug] = [];
  for (const t of topics) topicBooks[t.slug] = [];
  for (const tg of tags) tagBooks[tg.slug] = [];

  for (const book of books) {
    if (categoryBooks[book.category]) categoryBooks[book.category].push(book);
    for (const slug of book.topicSlugs) if (topicBooks[slug]) topicBooks[slug].push(book);
    for (const slug of book.tagSlugs) if (tagBooks[slug]) tagBooks[slug].push(book);
  }

  const byIndex = (a, b) => b.index - a.index;
  Object.values(categoryBooks).forEach((list) => list.sort(byIndex));
  Object.values(topicBooks).forEach((list) => list.sort(byIndex));
  Object.values(tagBooks).forEach((list) => list.sort(byIndex));

  /* 作者 → 著作 */
  const authorBooks = {};
  for (const book of books) {
    for (const a of book.authors) {
      if (!authorBooks[a.slug]) authorBooks[a.slug] = [];
      authorBooks[a.slug].push(book);
    }
  }
  Object.values(authorBooks).forEach((list) => list.sort(byIndex));

  const authorList = Object.entries(authorsRaw)
    .map(([slug, a]) => ({ slug, ...a, books: authorBooks[slug] || [] }))
    .sort((a, b) => (b.books[0]?.index || 0) - (a.books[0]?.index || 0));

  /* 主题 → 相关主题（共现次数） */
  const topicRelated = {};
  for (const t of topics) {
    const counter = new Map();
    for (const book of topicBooks[t.slug]) {
      for (const slug of book.topicSlugs) {
        if (slug === t.slug) continue;
        counter.set(slug, (counter.get(slug) || 0) + 1);
      }
    }
    topicRelated[t.slug] = [...counter.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([slug]) => topicBySlug[slug])
      .filter(Boolean);
  }

  /* 作者 → 相关主题 */
  const authorTopics = {};
  for (const [slug, list] of Object.entries(authorBooks)) {
    const counter = new Map();
    for (const book of list) for (const t of book.topicSlugs) counter.set(t, (counter.get(t) || 0) + 1);
    authorTopics[slug] = [...counter.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([s]) => topicBySlug[s])
      .filter(Boolean);
  }

  /* 笔记 → 书
     - voice 归一化：缺省视为 'personal'（站点所有者的个人笔记），
       自动化生成的笔记显式写 'editorial'（编者视角）。仅影响「思考」块的字段标签。
     - 排序：按日期倒序，**最新在最上面**；同日以 id 倒序做稳定次级排序，
       使新增笔记始终插在当天最前，不依赖文件书写顺序。 */
  const notesWithBook = notes
    .map((note) => ({ ...note, voice: note.voice === 'editorial' ? 'editorial' : 'personal', bookEntity: bookBySlug[note.book] || null }))
    .filter((note) => {
      if (!note.bookEntity) warnings.push(`笔记引用了不存在的书：${note.book}`);
      return Boolean(note.bookEntity);
    })
    .sort((a, b) => {
      const byDate = String(b.date || '').localeCompare(String(a.date || ''));
      return byDate !== 0 ? byDate : String(b.id || '').localeCompare(String(a.id || ''));
    });

  const bookNotes = {};
  for (const note of notesWithBook) {
    if (!bookNotes[note.book]) bookNotes[note.book] = [];
    bookNotes[note.book].push(note);
  }

  /* 文章 → 关联实体 */
  const articlesResolved = articles.map((article) => ({
    ...article,
    relatedBooks: cleanList(article.related_books).map((s) => bookBySlug[s]).filter(Boolean),
    relatedTopics: cleanList(article.related_topics).map((s) => topicBySlug[s]).filter(Boolean),
    categoryEntity: categoryBySlug[article.category] || null,
    tagEntities: cleanList(article.tags).map((s) => tagBySlug[s]).filter(Boolean)
  }));

  /* 每日一书：按当年第几天轮转，保证同一天全球一致。
     只从「策展经典」中选取——书单导入的轻量条目没有经典指数，不参与轮转。 */
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), 0, 0));
  const dayOfYear = Math.floor((now - start) / 86400000);

  /* 书库总览顺序：策展经典（经典指数降序）→ 每日推荐（日期降序）→ 历史书单。
     🔴 原实现是 [...books].sort(byIndex)：书单导入条目没有 classic_index，一律落到 index=0，
     于是退化成「按文件读取顺序」= 最旧在前 —— 最新推荐沉到 266 本的最后两位，
     用户点「每日推荐」筛选后看到的全是几天前的老书。此处显式分三组，保证最新在前。 */
  const curatedBooks = books.filter((b) => b.tier !== 'list');
  const listBooks = books.filter((b) => b.tier === 'list');
  const byDailyDateDesc = (a, b) =>
    a.daily_date === b.daily_date ? 0 : a.daily_date < b.daily_date ? 1 : -1;
  const dailyListBooks = listBooks.filter((b) => b.daily_date).sort(byDailyDateDesc);
  const legacyListBooks = listBooks.filter((b) => !b.daily_date);

  const sortedByIndex = [...curatedBooks]
    .sort(byIndex)
    .concat(dailyListBooks, legacyListBooks);
  const curatedByIndex = [...curatedBooks].sort(byIndex);
  const bookOfTheDay = curatedByIndex[dayOfYear % curatedByIndex.length];

  /* 每日推荐（定时任务入库）：按日期倒序，供首页「近 7 日推荐」使用。
     同一天入库多本时保持文件内的原有顺序。 */
  const dailyBooks = listBooks
    .filter((b) => b.source === 'daily' && b.daily_date)
    .sort(byDailyDateDesc);

  /* 阅读状态初始清单 */
  const readingList = readingStatus
    .map((entry) => ({ ...entry, bookEntity: bookBySlug[entry.book] }))
    .filter((entry) => Boolean(entry.bookEntity));

  return {
    books,
    bookBySlug,
    sortedBooks: sortedByIndex,
    curatedBooks,
    curatedByIndex,
    listBooks,
    categories,
    categoryBySlug,
    categoryBooks,
    tags,
    tagBySlug,
    tagBooks,
    topics,
    topicBySlug,
    topicBooks,
    topicRelated,
    authors: authorList,
    authorBooks,
    authorTopics,
    paths: readingPaths,
    pathBySlug: Object.fromEntries(readingPaths.map((p) => [p.slug, p])),
    articles: articlesResolved,
    articleBySlug: Object.fromEntries(articlesResolved.map((a) => [a.slug, a])),
    notes: notesWithBook,
    bookNotes,
    featured: featured.map((s) => bookBySlug[s]).filter(Boolean),
    bookOfTheDay,
    dailyBooks,
    readingList,
    statusOrder,
    searchAliases,
    warnings
  };
}

export default loadData;
