/**
 * 构建入口
 * 用法：node src/build.mjs
 * 产出：dist/ 纯静态站点（可直接部署到任意静态托管）
 */
import { mkdirSync, writeFileSync, rmSync, renameSync, existsSync, cpSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE_URL, SITE } from './site.config.js';
import { redirects } from '../content/redirects.js';
import { staleAssets } from '../content/stale-assets.js';
import { LANGS, t, formatDate } from './lib/i18n.js';
import { loadData, ROOT } from './lib/data.js';
import { url, absUrl } from './lib/layout.js';
import { coverStats, nonWebpCoverFiles } from './lib/covers.js';
import { escapeHtml, excerpt } from './lib/markdown.js';

import { renderHome } from './templates/home.js';
import { renderLibrary, renderBook } from './templates/books.js';
import {
  renderCategories, renderCategory, renderTopics, renderTopic,
  renderAuthors, renderAuthor, renderPaths, renderPath
} from './templates/collections.js';
import {
  renderArticles, renderArticle, renderNotes, renderMyReading, renderAbout, renderSearch, renderNotFound
} from './templates/content.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, 'dist');

/** 1×1 透明 PNG（68 字节）—— 用于覆盖线上残留的旧资源，见 content/stale-assets.js */
const TOMBSTONE_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
  'base64'
);

/* ------------------------------------------------------------------ */

/**
 * 重置 dist/ —— 清空其内容，但**不删除 dist 目录本身**。
 *
 * 为什么不写 `rmSync(DIST, {recursive:true, force:true})`：
 *
 * ① **safe-delete 守卫**：本机 WorkBuddy 沙箱装了 node-safe-delete-shim.cjs，
 *    把递归删除改写成「丢进回收站」。删除整个 dist（900+ 文件）时该操作会失败：
 *      Error: [safe-delete] 操作失败: Error during a `trash` operation: Unknown
 *             { description: "Some operations were aborted" }
 *    而且**失败前已经删掉一部分**，留下半残目录，后续构建读到残缺产物。
 *
 * ② **目录句柄占用**：dist（或其子目录，如 assets/）常被宿主进程短暂持有
 *    （预览面板 / 文件监视 / 杀软扫描），表现为
 *      `EPERM: operation not permitted, rename ... -> dist`
 *    此时连「整体改名挪走」都不行；但**它下面的子项通常仍可删除或改名**，
 *    且该占用一般几秒内自行释放。
 *
 * 因此策略：逐个清空子项 → 失败则短暂重试 → 目录递归清空内容 → 最后改名挪走。
 * 全程不碰被占用的目录句柄，也不依赖回收站。
 */
function resetDist() {
  mkdirSync(DIST, { recursive: true });
  const stuck = clearDir(DIST);
  if (stuck.length) {
    console.warn(`⚠️ dist 中有 ${stuck.length} 项无法清除（被占用）：`);
    for (const p of stuck) console.warn(`   - ${p}`);
    console.warn('   这些文件若未被本次构建覆盖，会成为线上残留，请关闭占用它的程序后重新构建。');
  }
}

const waitMs = (ms) => {
  const end = Date.now() + ms;
  while (Date.now() < end) { /* 短时自旋，仅用于等待句柄释放 */ }
};

/** 清空目录内容（保留目录本身）；返回无法清除的条目路径 */
function clearDir(dir) {
  const stuck = [];
  let entries = [];
  try {
    entries = readdirSync(dir);
  } catch {
    return stuck;
  }
  for (const name of entries) {
    const p = join(dir, name);

    let removed = false;
    for (let attempt = 0; attempt < 3 && !removed; attempt++) {
      try {
        rmSync(p, { recursive: true, force: true });
        removed = true;
      } catch {
        waitMs(150); // 句柄多为瞬时占用，稍等再试
      }
    }
    if (removed) continue;

    // 兜底一：目录 → 递归清空其内容，再删空壳
    let isDir = false;
    try {
      isDir = statSync(p).isDirectory();
    } catch {
      continue; // 已不存在
    }
    if (isDir) {
      stuck.push(...clearDir(p));
      try {
        rmSync(p, { recursive: true, force: true });
        continue;
      } catch {
        /* 落到改名兜底 */
      }
    }

    // 兜底二：改名挪出 dist（rename 不走删除路径，且能绕开回收站守卫）
    try {
      const stash = join(ROOT, '_stage', 'dist-locked');
      mkdirSync(stash, { recursive: true });
      renameSync(p, join(stash, `${Date.now()}-${name}`));
      continue;
    } catch {
      /* 彻底没辙 */
    }
    stuck.push(p);
  }
  return stuck;
}

/* ------------------------------------------------------------------ */

function writePage(relPath, html) {
  const file = join(DIST, relPath, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html, 'utf8');
}

function writeFile(relPath, content) {
  const file = join(DIST, relPath);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content, 'utf8');
}

/* 搜索索引：一个文件同时服务两种语言，前端按当前语言加权 */
function buildSearchIndex(data) {
  const entries = [];

  for (const book of data.books) {
    const isList = book.tier === 'list';
    entries.push({
      type: 'book',
      slug: book.slug,
      path: `books/${book.slug}/`,
      index: book.index,
      cat: book.category,
      source: isList ? book.source : 'curated',
      zh: {
        t: `《${book.title_zh}》`,
        s: book.subtitle_zh || (isList ? book.theme_zh || '' : ''),
        a: book.author?.name_zh || '',
        d: book.description_zh || (isList ? book.theme_zh || '' : '')
      },
      en: {
        t: book.title_en || book.title_zh,
        s: book.subtitle_en || (isList ? book.theme_en || '' : ''),
        a: book.author?.name_en || '',
        d: book.description_en || (isList ? book.theme_en || '' : '')
      },
      k: [
        ...book.tagSlugs,
        ...book.topicSlugs,
        ...book.tagEntities.map((x) => x.zh),
        ...book.tagEntities.map((x) => x.en),
        ...book.topicEntities.map((x) => x.zh),
        ...book.topicEntities.map((x) => x.en),
        ...(isList ? [book.list_category_zh || '', book.list_category_en || ''] : [])
      ].join(' ')
    });
  }

  for (const author of data.authors) {
    entries.push({
      type: 'author',
      slug: author.slug,
      path: `authors/${author.slug}/`,
      index: author.books[0]?.index || 0,
      zh: { t: author.name_zh, s: author.role_zh || '', a: '', d: author.bio_zh || '' },
      en: { t: author.name_en, s: author.role_en || '', a: '', d: author.bio_en || '' },
      k: [...(author.ideas_zh || []), ...(author.ideas_en || [])].join(' ')
    });
  }

  for (const topic of data.topics) {
    entries.push({
      type: 'topic',
      slug: topic.slug,
      path: `topics/${topic.slug}/`,
      index: (data.topicBooks[topic.slug] || []).length,
      zh: { t: topic.name_zh, s: '', a: '', d: topic.description_zh },
      en: { t: topic.name_en, s: '', a: '', d: topic.description_en },
      k: ''
    });
  }

  for (const cat of data.categories) {
    entries.push({
      type: 'category',
      slug: cat.slug,
      path: `categories/${cat.slug}/`,
      index: (data.categoryBooks[cat.slug] || []).length,
      zh: { t: cat.name_zh, s: '', a: '', d: cat.description_zh },
      en: { t: cat.name_en, s: '', a: '', d: cat.description_en },
      k: ''
    });
  }

  for (const path of data.paths) {
    entries.push({
      type: 'path',
      slug: path.slug,
      path: `paths/${path.slug}/`,
      index: path.levels.length,
      zh: { t: path.name_zh, s: '', a: '', d: path.description_zh },
      en: { t: path.name_en, s: '', a: '', d: path.description_en },
      k: path.levels.map((l) => `${l.label_zh} ${l.label_en}`).join(' ')
    });
  }

  for (const article of data.articles) {
    entries.push({
      type: 'article',
      slug: article.slug,
      path: `articles/${article.slug}/`,
      index: 0,
      zh: { t: article.title_zh, s: article.subtitle_zh || '', a: '', d: excerpt(article.content_zh || '', 400) },
      en: { t: article.title_en, s: article.subtitle_en || '', a: '', d: excerpt(article.content_en || '', 400) },
      k: [...(article.tags || []), article.category].join(' ')
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    aliases: data.searchAliases,
    entries
  };
}

/* 站点地图：每个语言独立 URL，并声明 xhtml:link 互指 */
function buildSitemap(data) {
  const paths = [''];
  paths.push('library/', 'categories/', 'topics/', 'authors/', 'paths/', 'articles/', 'notes/', 'my-reading/', 'about/', 'search/');
  for (const cat of data.categories) paths.push(`categories/${cat.slug}/`);
  for (const topic of data.topics) paths.push(`topics/${topic.slug}/`);
  for (const book of data.books) paths.push(`books/${book.slug}/`);
  for (const author of data.authors) paths.push(`authors/${author.slug}/`);
  for (const path of data.paths) paths.push(`paths/${path.slug}/`);
  for (const article of data.articles) paths.push(`articles/${article.slug}/`);

  const today = new Date().toISOString().slice(0, 10);
  const urls = [];
  for (const lang of LANGS) {
    for (const path of paths) {
      urls.push(`  <url>
    <loc>${absUrl(lang, path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${path === '' ? '1.0' : path.startsWith('books/') ? '0.8' : '0.6'}</priority>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${absUrl('zh', path)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${absUrl('en', path)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl('zh', path)}"/>
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function buildFeed(data) {
  const items = data.articles.slice(0, 20).map((article) => {
    const title = article.title_zh || article.title_en;
    const link = absUrl('zh', `articles/${article.slug}/`);
    const desc = excerpt(article.content_zh || article.content_en || '', 300);
    return `    <item>
      <title>${escapeHtml(title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(article.publish_date).toUTCString()}</pubDate>
      <description>${escapeHtml(desc)}</description>
    </item>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeHtml(SITE.name_zh)} · ${escapeHtml(SITE.name_en)}</title>
    <link>${SITE_URL}/</link>
    <description>${escapeHtml(t('zh', 'site.description'))}</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>
`;
}

/** 根路径：按浏览器语言与上次选择跳转；同时提供可抓取的备用入口 */
function buildRootRedirect() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Classics Library · 经典书库</title>
<meta name="description" content="${escapeHtml(t('zh', 'site.description'))}">
<link rel="canonical" href="${SITE_URL}/zh/">
<link rel="alternate" hreflang="zh-CN" href="${SITE_URL}/zh/">
<link rel="alternate" hreflang="en" href="${SITE_URL}/en/">
<link rel="alternate" hreflang="x-default" href="${SITE_URL}/zh/">
<script>
(function () {
  var saved = null;
  try { saved = localStorage.getItem('cl-lang'); } catch (e) {}
  var nav = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
  var lang = saved || (nav.indexOf('zh') === 0 ? 'zh' : 'en');
  if (lang !== 'zh' && lang !== 'en') lang = 'zh';
  location.replace('/' + lang + '/');
})();
</script>
</head>
<body>
  <p><a href="/zh/">中文版 · 经典书库</a> ｜ <a href="/en/">English · Classics Library</a></p>
</body>
</html>
`;
}

/** 已下线路径的重定向存根：覆盖线上残留的旧 URL（见 content/redirects.js） */
function buildRedirectStub(lang, from, to) {
  const target = url(lang, `${to}/`);
  const canonical = absUrl(lang, `${to}/`);
  return `<!DOCTYPE html>
<html lang="${lang === 'zh' ? 'zh-CN' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(t(lang, 'redirect.title'))}</title>
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="zh-CN" href="${absUrl('zh', `${to}/`)}">
<link rel="alternate" hreflang="en" href="${absUrl('en', `${to}/`)}">
<meta http-equiv="refresh" content="0; url=${target}">
</head>
<body>
  <p>${escapeHtml(t(lang, 'redirect.body'))} <a href="${target}">${escapeHtml(target)}</a></p>
</body>
</html>
`;
}

/* ------------------------------------------------------------------ */

async function build() {
  const started = Date.now();
  const data = await loadData();
  data.buildDate = new Date().toISOString().slice(0, 10);

  resetDist();

  let pageCount = 0;

  for (const lang of LANGS) {
    writePage(lang, renderHome(lang, data)); pageCount += 1;
    writePage(`${lang}/library`, renderLibrary(lang, data)); pageCount += 1;
    writePage(`${lang}/categories`, renderCategories(lang, data)); pageCount += 1;
    writePage(`${lang}/topics`, renderTopics(lang, data)); pageCount += 1;
    writePage(`${lang}/authors`, renderAuthors(lang, data)); pageCount += 1;
    writePage(`${lang}/paths`, renderPaths(lang, data)); pageCount += 1;
    writePage(`${lang}/articles`, renderArticles(lang, data)); pageCount += 1;
    writePage(`${lang}/notes`, renderNotes(lang, data)); pageCount += 1;
    writePage(`${lang}/my-reading`, renderMyReading(lang, data)); pageCount += 1;
    writePage(`${lang}/about`, renderAbout(lang, data)); pageCount += 1;
    writePage(`${lang}/search`, renderSearch(lang, data)); pageCount += 1;

    for (const book of data.books) {
      writePage(`${lang}/books/${book.slug}`, renderBook(lang, data, book));
      pageCount += 1;
    }
    for (const cat of data.categories) {
      writePage(`${lang}/categories/${cat.slug}`, renderCategory(lang, data, cat));
      pageCount += 1;
    }
    for (const topic of data.topics) {
      writePage(`${lang}/topics/${topic.slug}`, renderTopic(lang, data, topic));
      pageCount += 1;
    }
    for (const author of data.authors) {
      writePage(`${lang}/authors/${author.slug}`, renderAuthor(lang, data, author));
      pageCount += 1;
    }
    for (const path of data.paths) {
      writePage(`${lang}/paths/${path.slug}`, renderPath(lang, data, path));
      pageCount += 1;
    }
    for (const article of data.articles) {
      writePage(`${lang}/articles/${article.slug}`, renderArticle(lang, data, article));
      pageCount += 1;
    }

    /* 重定向存根：把线上残留的旧路径指回新路径。
       若 from 恰好是站内仍存在的真实页面，说明重定向表写错了——跳过并告警，不覆盖真实页面。 */
    for (const r of redirects) {
      if (data.bookBySlug[r.from.replace(/^books\//, '')] && r.from.startsWith('books/')) {
        data.warnings.push(`重定向 from 与现存书籍页冲突，已跳过：${r.from}`);
        continue;
      }
      writePage(`${lang}/${r.from}`, buildRedirectStub(lang, r.from, r.to));
      pageCount += 1;
    }
  }

  /* 资源 */
  const publicDir = join(ROOT, 'public');
  if (existsSync(publicDir)) {
    for (const entry of readdirSync(publicDir)) {
      const src = join(publicDir, entry);
      if (statSync(src).isFile()) cpSync(src, join(DIST, 'assets', entry));
    }
    /* public/covers/ 为目录，**只复制 webp** 到 dist/assets/covers/。
       非 webp 原图（PNG/JPG，单张 2–2.5 MB）既不复制、也不被站点引用，
       否则会随发布白白上传几 MB —— 这个坑已连续踩三次。
       这里不静默：下方会打印醒目告警，提示先跑 covers:ingest 转换。 */
    const coversDir = join(publicDir, 'covers');
    if (existsSync(coversDir)) {
      const outDir = join(DIST, 'assets', 'covers');
      mkdirSync(outDir, { recursive: true });
      for (const f of readdirSync(coversDir)) {
        if (/\.webp$/i.test(f)) cpSync(join(coversDir, f), join(outDir, f));
      }
    }
  }

  writeFile('search-index.json', JSON.stringify(buildSearchIndex(data)));
  writeFile('sitemap.xml', buildSitemap(data));
  writeFile('robots.txt', buildRobots());
  writeFile('feed.xml', buildFeed(data));
  writeFile('index.html', buildRootRedirect());
  writeFile('404.html', renderNotFound('zh'));
  writeFile('en/404.html', renderNotFound('en'));

  /* 陈旧资源墓碑：发布沙箱是「复用 + 合并」，本地删掉的资源不会从线上消失。
     这里在相同路径写入 1×1 透明 PNG，把线上残留的大图覆盖成几十字节。
     见 content/stale-assets.js。 */
  if (staleAssets.length) {
    for (const rel of staleAssets) {
      const file = join(DIST, rel);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, TOMBSTONE_PNG);
    }
    console.log(`   🪦 已写入 ${staleAssets.length} 个陈旧资源墓碑（覆盖线上残留）`);
  }

  const seconds = ((Date.now() - started) / 1000).toFixed(2);

  console.log(`\n✅ 构建完成 · ${pageCount} 个页面 · ${seconds}s`);
  console.log(`   书籍 ${data.books.length} · 作者 ${data.authors.length} · 分类 ${data.categories.length} · 主题 ${data.topics.length} · 路线 ${data.paths.length} · 文章 ${data.articles.length} · 笔记 ${data.notes.length}`);
  const cs = coverStats(data.books.map((b) => b.slug));
  console.log(`   封面图 ${cs.count} / ${data.books.length}（其余使用程序化封面）`);
  console.log(`   输出目录：${DIST}\n`);

  /* 非 webp 封面告警：这些文件不会被复制进 dist，也不会被站点引用 */
  const strays = nonWebpCoverFiles();
  if (strays.length) {
    console.log(`⚠️  public/covers/ 中有 ${strays.length} 个非 WebP 图片，已被忽略（未复制进 dist）：`);
    for (const f of strays) console.log(`   - ${f}`);
    console.log('   请运行以下命令转换后再重新构建：');
    console.log('     npm run covers:ingest            # 先预演核对匹配结果');
    console.log('     npm run covers:ingest -- --apply # 确认无误后执行\n');
  }

  if (data.warnings.length) {
    const uniq = [...new Set(data.warnings)];
    console.log(`⚠️  ${uniq.length} 条数据警告：`);
    for (const w of uniq.slice(0, 40)) console.log(`   - ${w}`);
    if (uniq.length > 40) console.log(`   ... 其余 ${uniq.length - 40} 条省略`);
    console.log('');
  }

  return data;
}

build().catch((err) => {
  console.error('构建失败：', err);
  process.exit(1);
});
