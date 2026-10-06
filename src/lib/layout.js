/**
 * 布局与通用组件
 * 所有界面文字来自 t()，禁止硬编码。
 */
import { SITE_URL, SITE, ASSETS, BUILD_ID } from '../site.config.js';
import {
  t, LANGS, LANG_META, otherLang, formatYear, nameOf, bookTitle, bookTitleSecondary,
  bookTitleMain, bookTitleMainAlt
} from './i18n.js';
import { escapeHtml } from './markdown.js';
import { coverImage } from './covers.js';

const e = escapeHtml;

/* ------------------------------------------------------------------
 * URL 工具
 * path 约定：语言无关的相对路径，目录型页面以 / 结尾
 * 例如 'library/'、'books/the-black-swan/'、''（首页）
 * ------------------------------------------------------------------ */
export function url(lang, path = '') {
  const clean = String(path).replace(/^\/+/, '');
  return `/${lang}/${clean}`;
}

export function absUrl(lang, path = '') {
  return `${SITE_URL}${url(lang, path)}`;
}

/* ------------------------------------------------------------------
 * <head> 元信息：title / description / canonical / hreflang / OG / Twitter / Schema
 * ------------------------------------------------------------------ */
export function head({ lang, title, description, path, type = 'website', jsonLd = [], keywords = [] }) {
  const alt = otherLang(lang);
  const canonical = absUrl(lang, path);
  const ld = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  const ogImage = `${SITE_URL}${ASSETS.og}`;

  return `
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">
  <title>${e(title)}</title>
  <meta name="description" content="${e(description)}">
  ${keywords.length ? `<meta name="keywords" content="${e(keywords.join(', '))}">` : ''}
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="zh-CN" href="${absUrl('zh', path)}">
  <link rel="alternate" hreflang="en" href="${absUrl('en', path)}">
  <link rel="alternate" hreflang="x-default" href="${absUrl('zh', path)}">
  <meta name="author" content="${e(SITE.author)}">
  <meta name="theme-color" content="#0e2a45">
  <link rel="icon" href="${ASSETS.favicon}" type="image/svg+xml">
  <link rel="stylesheet" href="${ASSETS.css}?v=${BUILD_ID}">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="${e(SITE.name_en)}">
  <meta property="og:locale" content="${LANG_META[lang].ogLocale}">
  <meta property="og:locale:alternate" content="${LANG_META[alt].ogLocale}">
  <meta property="og:title" content="${e(title)}">
  <meta property="og:description" content="${e(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${e(title)}">
  <meta name="twitter:description" content="${e(description)}">
  <meta name="twitter:image" content="${ogImage}">
  <link rel="alternate" type="application/rss+xml" title="Classics Library" href="/feed.xml">
  ${ld.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('\n  ')}`;
}

/* ------------------------------------------------------------------
 * 顶部导航
 * ------------------------------------------------------------------ */
const NAV_ITEMS = [
  { key: 'library', path: 'library/' },
  { key: 'topics', path: 'topics/' },
  { key: 'paths', path: 'paths/' },
  { key: 'articles', path: 'articles/' },
  { key: 'notes', path: 'notes/' },
  { key: 'myReading', path: 'my-reading/' },
  { key: 'about', path: 'about/' }
];

function navLink(lang, item, currentPath) {
  const active = currentPath.startsWith(item.path) ? ' is-active' : '';
  const aria = active ? ' aria-current="page"' : '';
  return `<a class="nav__link${active}" href="${url(lang, item.path)}"${aria}>${e(t(lang, `nav.${item.key}`))}</a>`;
}

export function header(lang, currentPath = '', options = {}) {
  const alt = otherLang(lang);
  const siteName = lang === 'zh' ? SITE.name_zh : SITE.name_en;
  const otherLabel = LANG_META[alt].label;

  return `
  <a class="skip-link" href="#main">${e(t(lang, 'common.skip_to_content'))}</a>
  <header class="site-header">
    <div class="site-header__inner">
      <a class="brand" href="${url(lang)}">
        <span class="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
               stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 6.6v12.9"/>
            <path d="M12 6.6C10.3 5.3 8.2 4.6 5.7 4.6H3v12.4h2.7c2.5 0 4.6.7 6.3 2"/>
            <path d="M12 6.6c1.7-1.3 3.8-2 6.3-2H21v12.4h-2.7c-2.5 0-4.6.7-6.3 2"/>
          </svg>
        </span>
        <span class="brand__text">
          <span class="brand__name">${e(siteName)}</span>
          <span class="brand__tag">${e(t(lang, 'site.tagline'))}</span>
        </span>
      </a>

      <nav class="nav" aria-label="${e(t(lang, 'nav.menu'))}">
        ${NAV_ITEMS.map((item) => navLink(lang, item, currentPath)).join('\n        ')}
      </nav>

      <div class="header-tools">
        <form class="search-mini" role="search" action="${url(lang, 'search/')}" method="get">
          <label class="sr-only" for="header-q">${e(t(lang, 'search.title'))}</label>
          <input id="header-q" class="search-mini__input" type="search" name="q" autocomplete="off"
                 placeholder="${e(t(lang, 'search.placeholder'))}">
          <button class="search-mini__btn" type="submit" aria-label="${e(t(lang, 'search.button'))}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6">
              <circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>
            </svg>
          </button>
        </form>

        <div class="lang-switch" role="group" aria-label="${e(t(lang, 'lang.label'))}">
          <a class="lang-switch__link${lang === 'zh' ? ' is-active' : ''}"
             href="${url('zh', currentPath)}" hreflang="zh-CN" lang="zh-CN"
             data-lang="zh"${lang === 'zh' ? ' aria-current="true"' : ''}>${e(t(lang, 'lang.zh'))}</a>
          <span class="lang-switch__sep" aria-hidden="true">/</span>
          <a class="lang-switch__link${lang === 'en' ? ' is-active' : ''}"
             href="${url('en', currentPath)}" hreflang="en" lang="en"
             data-lang="en"${lang === 'en' ? ' aria-current="true"' : ''}>${e(t(lang, 'lang.en'))}</a>
        </div>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"
                data-menu-toggle aria-label="${e(t(lang, 'nav.menu'))}">
          <span class="menu-toggle__bar" aria-hidden="true"></span>
          <span class="menu-toggle__bar" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <div class="mobile-nav" id="mobile-nav" hidden>
      <nav class="mobile-nav__inner" aria-label="${e(t(lang, 'nav.menu'))}">
        <a class="mobile-nav__link" href="${url(lang)}">${e(t(lang, 'nav.home'))}</a>
        ${NAV_ITEMS.map((item) => `<a class="mobile-nav__link" href="${url(lang, item.path)}">${e(t(lang, `nav.${item.key}`))}</a>`).join('\n        ')}
      </nav>
      <div class="mobile-nav__lang">
        <a class="mobile-nav__link${lang === 'zh' ? ' is-active' : ''}" href="${url('zh', currentPath)}" data-lang="zh">${e(t(lang, 'lang.zh'))}</a>
        <a class="mobile-nav__link${lang === 'en' ? ' is-active' : ''}" href="${url('en', currentPath)}" data-lang="en">${e(t(lang, 'lang.en'))}</a>
      </div>
    </div>
  </header>`;
}

/* ------------------------------------------------------------------
 * 页脚
 * ------------------------------------------------------------------ */
export function footer(lang, data) {
  const alt = otherLang(lang);
  return `
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <p class="site-footer__name">${e(lang === 'zh' ? SITE.name_zh : 'CLASSICS LIBRARY')}</p>
        <p class="site-footer__tagline">${e(t(lang, 'footer.tagline'))}</p>
        <p class="site-footer__note">${e(t(lang, 'footer.note'))}</p>
        <p class="site-footer__curated">${e(t(lang, 'footer.curated'))}</p>
      </div>
      <div class="site-footer__col">
        <p class="site-footer__head">${e(t(lang, 'footer.sections'))}</p>
        <a href="${url(lang)}">${e(t(lang, 'nav.home'))}</a>
        ${NAV_ITEMS.map((item) => `<a href="${url(lang, item.path)}">${e(t(lang, `nav.${item.key}`))}</a>`).join('\n        ')}
      </div>
      <div class="site-footer__col">
        <p class="site-footer__head">${e(t(lang, 'footer.explore'))}</p>
        <a href="${url(lang, 'categories/')}">${e(t(lang, 'categories.title'))}</a>
        <a href="${url(lang, 'library/')}">${e(t(lang, 'library.title'))}</a>
        <a href="${url(lang, 'authors/')}">${e(t(lang, 'authors.title'))}</a>
        <a href="${url(lang, 'search/')}">${e(t(lang, 'search.title'))}</a>
        <a href="/sitemap.xml">Sitemap</a>
      </div>
      <div class="site-footer__col">
        <p class="site-footer__head">${e(t(lang, 'footer.language'))}</p>
        <a href="${url('zh', '')}" data-lang="zh"${lang === 'zh' ? ' aria-current="true"' : ''}>中文</a>
        <a href="${url('en', '')}" data-lang="en"${lang === 'en' ? ' aria-current="true"' : ''}>English</a>
        <p class="site-footer__meta">${e(t(lang, 'common.updated'))} ${data.buildDate}</p>
      </div>
    </div>
    <div class="site-footer__bottom">
      <p>${e(t(lang, 'footer.copyright'))}</p>
    </div>
  </footer>`;
}

/* ------------------------------------------------------------------
 * 完整 HTML 文档
 * ------------------------------------------------------------------ */
export function page({ lang, meta, body, currentPath = '', bodyClass = '' }) {
  const htmlLang = LANG_META[lang].htmlLang;
  const ui = {
    results: t(lang, 'library.results'),
    indexLabel: t(lang, 'index.label'),
    booksLabel: t(lang, 'reading.count'),
    cleared: t(lang, 'reading.cleared'),
    foundLabel: t(lang, 'search.results'),
    resultUnit: t(lang, 'search.result_unit'),
    statusLabels: {
      want: t(lang, 'reading.status.want'),
      reading: t(lang, 'reading.status.reading'),
      finished: t(lang, 'reading.status.finished'),
      rereading: t(lang, 'reading.status.rereading'),
      favorite: t(lang, 'reading.status.favorite')
    },
    typeLabels: {
      book: t(lang, 'search.type_book'),
      author: t(lang, 'search.type_author'),
      topic: t(lang, 'search.type_topic'),
      category: t(lang, 'search.type_category'),
      article: t(lang, 'search.type_article'),
      path: t(lang, 'search.type_path')
    }
  };
  return `<!DOCTYPE html>
<html lang="${htmlLang}">
<head>${head({ lang, ...meta, path: currentPath })}
  <script>window.__CL_UI=${JSON.stringify(ui)};</script>
</head>
<body class="${bodyClass}" data-lang="${lang}">
${header(lang, currentPath)}
<main id="main" class="main">
${body}
</main>
${footer(lang, { buildDate: meta.buildDate || '' })}
<script src="${ASSETS.js}?v=${BUILD_ID}" defer></script>
</body>
</html>
`;
}

/* ------------------------------------------------------------------
 * 组件
 * ------------------------------------------------------------------ */

/** 程序化排版封面（不使用任何图片资源，避免版权与加载问题） */
export function cover(lang, book, opts = {}) {
  const cat = book.categoryEntity;
  const title = bookTitleMain(lang, book);
  const author = lang === 'zh' ? book.author?.name_zh : book.author?.name_en;
  const catLabel = cat ? (lang === 'zh' ? cat.name_zh : cat.name_en) : '';
  const size = opts.size ? ` cover--${opts.size}` : '';

  /* 若 public/covers/ 中存在该书封面图，优先使用真实封面。
     图片为装饰性元素（书名/作者在相邻位置已有文本），故 alt 留空避免重复朗读。 */
  const img = coverImage(book.slug);
  if (img) {
    return `
      <span class="cover cover--img${size}" data-cat="${e(book.category)}">
        <img class="cover__img" src="${e(img)}" alt="" width="800" height="1200"
             loading="lazy" decoding="async">
      </span>`;
  }

  return `
      <span class="cover${size}" data-cat="${e(book.category)}" aria-hidden="true">
        <span class="cover__top">
          <span class="cover__cat">${e(catLabel)}</span>
          <span class="cover__year">${e(formatYear(lang, book.year))}</span>
        </span>
        <span class="cover__title">${e(title)}</span>
        <span class="cover__bottom">
          <span class="cover__author">${e(author || '')}</span>
          <span class="cover__rule" aria-hidden="true"></span>
        </span>
      </span>`;
}

/** 经典指数星级 */
export function stars(value, max = 5) {
  const v = Math.max(0, Math.min(max, Number(value) || 0));
  let out = '';
  for (let i = 1; i <= max; i += 1) out += i <= v ? '★' : '☆';
  return `<span class="stars" aria-label="${v} / ${max}"><span aria-hidden="true">${out}</span></span>`;
}

/** 来源标签：策展经典 / AZM推荐 / XMS推荐 */
export function sourceLabel(lang, book) {
  if (book.tier === 'list') return t(lang, `source.${book.source}`);
  return t(lang, 'source.curated');
}

/** 书籍卡片 */
export function bookCard(lang, book, opts = {}) {
  const path = `books/${book.slug}/`;
  const isList = book.tier === 'list';

  const mainRaw = bookTitleMain(lang, book);
  const altRaw = bookTitleMainAlt(lang, book);
  const titleMain = mainRaw ? (lang === 'zh' ? `《${mainRaw}》` : mainRaw) : (book.title_zh || book.slug);
  const titleAlt = altRaw ? (lang === 'zh' ? altRaw : `《${altRaw}》`) : '';

  const authorName = lang === 'zh' ? book.author?.name_zh : book.author?.name_en;
  const catName = book.categoryEntity ? nameOf(lang, book.categoryEntity) : '';

  /* 描述：策展经典用简介；书单导入用来源频道给出的核心主题 */
  let desc = isList
    ? (lang === 'zh' ? book.theme_zh : book.theme_en)
    : (lang === 'zh' ? book.description_zh : book.description_en);
  const limit = opts.descChars === 0 ? 0 : opts.descChars || 150;
  if (desc && limit && desc.length > limit) {
    let cut = desc.slice(0, limit - 1);
    // 英文在词边界截断，避免切断单词
    if (lang === 'en' && /\s/.test(cut)) cut = cut.slice(0, cut.lastIndexOf(' '));
    desc = `${cut.replace(/[,;:，、；：]$/, '')}…`;
  }

  const footRight = isList
    ? `<span class="book-card__source">${e(sourceLabel(lang, book))}</span>`
    : `<span class="book-card__index">${e(t(lang, 'index.label'))} ${book.index}</span>`;

  return `
      <article class="book-card${isList ? ' book-card--list' : ''}" data-slug="${e(book.slug)}" data-category="${e(book.category)}"
               data-index="${book.index}" data-year="${book.year == null ? '' : e(book.year)}"
               data-title="${e((book.title_en || book.title_zh || '').toLowerCase())}"
               data-difficulty="${e(book.difficulty)}"
               data-source="${e(book.tier === 'list' ? book.source : 'curated')}"
               data-tags="${e(book.tagSlugs.join(' '))}"
               data-topics="${e(book.topicSlugs.join(' '))}">
        <a class="book-card__link" href="${url(lang, path)}">
          ${cover(lang, book)}
          <span class="book-card__body">
            <span class="book-card__title">${e(titleMain)}</span>
            ${titleAlt ? `<span class="book-card__title-alt">${e(titleAlt)}</span>` : ''}
            <span class="book-card__author">${e(authorName || '')}</span>
            ${opts.showDesc !== false && desc ? `<span class="book-card__desc">${e(desc)}</span>` : ''}
            <span class="book-card__foot">
              <span class="book-card__cat">${e(catName)}</span>
              ${footRight}
            </span>
          </span>
        </a>
      </article>`;
}

export function bookGrid(lang, books, opts = {}) {
  return `<div class="grid grid--books">${books.map((b) => bookCard(lang, b, opts)).join('\n')}</div>`;
}

/** 章节标题 */
export function sectionHead(lang, titleKey, subKey, moreHref, moreKey = 'home.view_all') {
  return `
      <div class="section__head">
        <div>
          <h2 class="section__title">${e(t(lang, titleKey))}</h2>
          ${subKey ? `<p class="section__sub">${e(t(lang, subKey))}</p>` : ''}
        </div>
        ${moreHref ? `<a class="section__more" href="${moreHref}">${e(t(lang, moreKey))}<span aria-hidden="true"> →</span></a>` : ''}
      </div>`;
}

/** 分类卡片 */
export function categoryCard(lang, category, count) {
  return `
      <a class="cat-card" href="${url(lang, `categories/${category.slug}/`)}" data-cat="${e(category.slug)}">
        <span class="cat-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
               stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${category.icon}</svg>
        </span>
        <span class="cat-card__order">${e(category.order)}</span>
        <span class="cat-card__names">
          <span class="cat-card__name">${e(lang === 'zh' ? category.name_zh : category.name_en)}</span>
          <span class="cat-card__name-alt">${e(lang === 'zh' ? category.name_en : category.name_zh)}</span>
        </span>
        <span class="cat-card__desc">${e(lang === 'zh' ? category.description_zh : category.description_en)}</span>
        <span class="cat-card__count">${count} ${e(t(lang, 'categories.books_in'))}</span>
      </a>`;
}

/** 主题胶囊 */
export function topicChip(lang, topic) {
  return `<a class="chip chip--topic" href="${url(lang, `topics/${topic.slug}/`)}">
        <span class="chip__main">${e(lang === 'zh' ? topic.name_zh : topic.name_en)}</span>
        <span class="chip__alt">${e(lang === 'zh' ? topic.name_en : topic.name_zh)}</span>
      </a>`;
}

export function tagChip(lang, tag) {
  return `<span class="chip chip--tag">
        <span class="chip__main">${e(lang === 'zh' ? tag.zh : tag.en)}</span>
        <span class="chip__alt">${e(lang === 'zh' ? tag.en : tag.zh)}</span>
      </span>`;
}

/** 面包屑 */
export function breadcrumb(lang, items) {
  const parts = [`<a href="${url(lang)}">${e(t(lang, 'common.home'))}</a>`];
  for (const item of items) {
    if (item.href) parts.push(`<a href="${item.href}">${e(item.label)}</a>`);
    else parts.push(`<span aria-current="page">${e(item.label)}</span>`);
  }
  return `<nav class="breadcrumb" aria-label="Breadcrumb">${parts.join('<span class="breadcrumb__sep" aria-hidden="true">/</span>')}</nav>`;
}

/** 页面头（内部页统一使用） */
export function pageHead(lang, { title, sub, intro, crumbs = [] }) {
  return `
      <header class="page-head">
        ${crumbs.length ? breadcrumb(lang, crumbs) : ''}
        <h1 class="page-head__title">${e(title)}</h1>
        ${sub ? `<p class="page-head__sub">${e(sub)}</p>` : ''}
        ${intro ? `<p class="page-head__intro">${e(intro)}</p>` : ''}
      </header>`;
}

/** 作者署名行 */
export function authorLine(lang, authors) {
  if (!authors?.length) return '';
  return authors
    .map((a) => {
      const name = lang === 'zh' ? a.name_zh : a.name_en;
      const has = Boolean(a.hasProfile);
      return has
        ? `<a class="author-line" href="${url(lang, `authors/${a.slug}/`)}">${e(name)}</a>`
        : `<span class="author-line">${e(name)}</span>`;
    })
    .join('<span class="author-line__sep"> · </span>');
}

export { e as escapeHtml, nameOf, bookTitle, bookTitleSecondary, formatYear, t };
