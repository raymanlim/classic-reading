/**
 * 首页
 */
import { t, formatDate, nameOf } from '../lib/i18n.js';
import {
  url, absUrl, page, cover, bookGrid, sectionHead, categoryCard, topicChip
} from '../lib/layout.js';
import { escapeHtml as e } from '../lib/markdown.js';

/** 知识地图：以分类为根、以主题为叶的树状结构（纯 HTML + CSS，双语节点） */
function knowledgeMap(lang, data) {
  const rows = data.categories
    .map((cat) => {
      const books = data.categoryBooks[cat.slug] || [];
      const counter = new Map();
      for (const book of books) for (const topic of book.topicSlugs) counter.set(topic, (counter.get(topic) || 0) + 1);
      const children = [...counter.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([slug]) => data.topicBySlug[slug])
        .filter(Boolean);

      return `
        <li class="map-tree__root">
          <a class="map-node map-node--root" href="${url(lang, `categories/${cat.slug}/`)}">
            <span class="map-node__main">${e(lang === 'zh' ? cat.name_zh : cat.name_en)}</span>
            <span class="map-node__alt">${e(lang === 'zh' ? cat.name_en : cat.name_zh)}</span>
            <span class="map-node__count">${books.length}</span>
          </a>
          ${children.length ? `<ul class="map-tree__leaves">
            ${children
              .map(
                (topic) => `<li>
              <a class="map-node map-node--leaf" href="${url(lang, `topics/${topic.slug}/`)}">
                <span class="map-node__main">${e(lang === 'zh' ? topic.name_zh : topic.name_en)}</span>
                <span class="map-node__alt">${e(lang === 'zh' ? topic.name_en : topic.name_zh)}</span>
              </a>
            </li>`
              )
              .join('')}
          </ul>` : ''}
        </li>`;
    })
    .join('');

  return `
      <section class="section section--map" aria-labelledby="map-title">
        ${sectionHead(lang, 'home.map_title', 'home.map_sub')}
        <p class="section__note">${e(t(lang, 'map.note'))}</p>
        <ul class="map-tree">${rows}</ul>
      </section>`;
}

function pathPreview(lang, path, data) {
  const levels = path.levels
    .map((level, i) => {
      const book = data.bookBySlug[level.book];
      const label = lang === 'zh' ? level.label_zh : level.label_en;
      return `
          <li class="path-preview__item">
            <span class="path-preview__num">${String(i + 1).padStart(2, '0')}</span>
            <span class="path-preview__label">${e(label)}</span>
            <span class="path-preview__book">${e(book ? (lang === 'zh' ? `《${book.title_zh}》` : book.title_en) : '')}</span>
          </li>`;
    })
    .join('');

  return `
        <article class="path-card">
          <header class="path-card__head">
            <h3 class="path-card__title">
              <a href="${url(lang, `paths/${path.slug}/`)}">${e(lang === 'zh' ? path.name_zh : path.name_en)}</a>
            </h3>
            <p class="path-card__alt">${e(lang === 'zh' ? path.name_en : path.name_zh)}</p>
            <p class="path-card__tagline">${e(lang === 'zh' ? path.tagline_zh : path.tagline_en)}</p>
          </header>
          <ol class="path-preview">${levels}</ol>
          <footer class="path-card__foot">
            <span>${path.levels.length} ${e(t(lang, 'paths.steps'))}</span>
            <a class="link-arrow" href="${url(lang, `paths/${path.slug}/`)}">${e(t(lang, 'paths.start'))}<span aria-hidden="true"> →</span></a>
          </footer>
        </article>`;
}

function articleCard(lang, article) {
  const title = lang === 'zh' ? article.title_zh : article.title_en;
  const subtitle = lang === 'zh' ? article.subtitle_zh : article.subtitle_en;
  const hasLang = article.lang === 'both' || article.lang === lang;
  const cat = article.categoryEntity ? nameOf(lang, article.categoryEntity) : '';
  return `
        <article class="article-card">
          <a class="article-card__link" href="${url(lang, `articles/${article.slug}/`)}">
            <span class="article-card__meta">
              <span class="article-card__cat">${e(cat)}</span>
              <span class="article-card__date">${e(formatDate(lang, article.publish_date))}</span>
            </span>
            <h3 class="article-card__title">${e(title || article.title_en)}</h3>
            ${subtitle ? `<p class="article-card__sub">${e(subtitle)}</p>` : ''}
            ${hasLang ? '' : `<p class="article-card__flag">${e(t(lang, 'articles.coming_soon'))}</p>`}
          </a>
        </article>`;
}

/** 近 7 日推荐：定时任务每日入库的轻量条目，横向滚动条。无内容时整块不渲染。 */
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function shortDate(lang, iso) {
  const [, m, d] = String(iso || '').split('-').map(Number);
  if (!m || !d) return '';
  return lang === 'zh' ? `${m} 月 ${d} 日` : `${MONTHS_SHORT[m - 1]} ${d}`;
}

function recentStrip(lang, books) {
  if (!books.length) return '';
  const items = books
    .map(
      (b) => `<li class="recent-strip__item">
          <a class="recent-strip__link" href="${url(lang, `books/${b.slug}/`)}">
            ${cover(lang, b, { size: 'sm' })}
            <span class="recent-strip__meta">
              <span class="recent-strip__date">${e(shortDate(lang, b.daily_date))}</span>
              <span class="recent-strip__title">${e(lang === 'zh' ? `《${b.title_zh}》` : b.title_en)}</span>
              <span class="recent-strip__author">${e(lang === 'zh' ? b.author?.name_zh : b.author?.name_en)}</span>
            </span>
          </a>
        </li>`
    )
    .join('');

  return `
        <div class="recent">
          <div class="recent__head">
            <h3 class="recent__title">${e(t(lang, 'home.botd_recent_title'))}</h3>
            <p class="recent__sub">${e(t(lang, 'home.botd_recent_sub'))}</p>
          </div>
          <ul class="recent-strip">${items}</ul>
        </div>`;
}

export function renderHome(lang, data) {
  const botd = data.bookOfTheDay;
  const featured = data.featured.slice(0, 8);
  const articles = data.articles.slice(0, 3);
  const topics = [...data.topics]
    .sort((a, b) => (data.topicBooks[b.slug]?.length || 0) - (data.topicBooks[a.slug]?.length || 0))
    .slice(0, 18);

  const body = `
      <section class="hero">
        <div class="hero__inner">
          <p class="hero__eyebrow">${e(t(lang, 'site.name_full'))}</p>
          <h1 class="hero__title">${e(t(lang, 'home.hero_title'))}</h1>
          <p class="hero__sub">${e(t(lang, 'home.hero_sub'))}</p>
          <p class="hero__lede">${e(t(lang, 'home.hero_lede'))}</p>
          <form class="hero__search" role="search" action="${url(lang, 'search/')}" method="get">
            <label class="sr-only" for="hero-q">${e(t(lang, 'search.title'))}</label>
            <input id="hero-q" type="search" name="q" autocomplete="off"
                   placeholder="${e(t(lang, 'home.search_placeholder'))}">
            <button type="submit">${e(t(lang, 'home.explore'))}</button>
          </form>
          <p class="hero__hint">${e(t(lang, 'search.bilingual_hint'))}</p>
          <p class="hero__stats">
            <span class="hero__stats-total"><strong>${data.books.length}</strong> ${e(t(lang, 'home.stats_total'))}</span>
            <span><strong>${data.curatedBooks.length}</strong> ${e(t(lang, 'home.stats_books'))}</span>
            <span><strong>${data.listBooks.length}</strong> ${e(t(lang, 'home.stats_list'))}</span>
            <span><strong>${data.categories.length}</strong> ${e(t(lang, 'home.stats_categories'))}</span>
            <span><strong>${data.topics.length}</strong> ${e(t(lang, 'home.stats_topics'))}</span>
            <span><strong>${data.paths.length}</strong> ${e(t(lang, 'home.stats_paths'))}</span>
          </p>
        </div>
      </section>

      <section class="section section--featured">
        ${sectionHead(lang, 'home.featured_title', 'home.featured_sub', url(lang, 'library/'), 'home.view_all_books')}
        ${bookGrid(lang, featured, { showDesc: true })}
      </section>

      <section class="section section--botd" aria-labelledby="botd-title">
        <div class="botd">
          <div class="botd__visual">
            ${cover(lang, botd, { size: 'lg' })}
          </div>
          <div class="botd__body">
            <p class="botd__label"><span class="botd__dot" aria-hidden="true"></span>${e(t(lang, 'home.botd_label'))} · ${e(t(lang, 'home.botd_en'))}</p>
            <h2 class="botd__title" id="botd-title">
              <a href="${url(lang, `books/${botd.slug}/`)}">${e(lang === 'zh' ? `《${botd.title_zh}》` : botd.title_en)}</a>
            </h2>
            <p class="botd__title-alt">${e(lang === 'zh' ? botd.title_en : `《${botd.title_zh}》`)}</p>
            <p class="botd__author">${e(lang === 'zh' ? botd.author?.name_zh : botd.author?.name_en)} · ${e(nameOf(lang, botd.categoryEntity))}</p>
            <div class="botd__idea botd__idea--why">
              <p class="botd__idea-label">${e(t(lang, 'home.botd_why'))}</p>
              <blockquote>${e(lang === 'zh' ? botd.why_read_zh : botd.why_read_en)}</blockquote>
            </div>
            <div class="botd__idea">
              <p class="botd__idea-label">${e(t(lang, 'home.botd_idea'))}</p>
              <blockquote>${e(lang === 'zh' ? botd.today_idea_zh : botd.today_idea_en)}</blockquote>
            </div>
            <p class="botd__actions">
              <a class="btn btn--primary" href="${url(lang, `books/${botd.slug}/`)}">${e(t(lang, 'home.botd_read'))}</a>
              <a class="btn btn--ghost" href="${url(lang, 'library/')}">${e(t(lang, 'home.botd_all'))}</a>
            </p>
          </div>
        </div>
        ${recentStrip(lang, data.dailyBooks.slice(0, 14))}
      </section>

      <section class="section section--categories">
        ${sectionHead(lang, 'home.categories_title', 'home.categories_sub', url(lang, 'categories/'))}
        <div class="grid grid--categories">
          ${data.categories.map((cat) => categoryCard(lang, cat, (data.categoryBooks[cat.slug] || []).length)).join('\n')}
        </div>
      </section>

      <section class="section section--paths">
        ${sectionHead(lang, 'home.paths_title', 'home.paths_sub', url(lang, 'paths/'))}
        <div class="grid grid--paths">
          ${data.paths.map((path) => pathPreview(lang, path, data)).join('\n')}
        </div>
      </section>

      <section class="section section--topics">
        ${sectionHead(lang, 'home.topics_title', 'home.topics_sub', url(lang, 'topics/'))}
        <div class="chips">${topics.map((topic) => topicChip(lang, topic)).join('\n')}</div>
      </section>

      ${articles.length ? `
      <section class="section section--articles">
        ${sectionHead(lang, 'home.articles_title', 'home.articles_sub', url(lang, 'articles/'))}
        <div class="grid grid--articles">
          ${articles.map((article) => articleCard(lang, article)).join('\n')}
        </div>
      </section>` : ''}

      ${knowledgeMap(lang, data)}
`;

  return page({
    lang,
    currentPath: '',
    meta: {
      title: t(lang, 'meta.home.title'),
      description: t(lang, 'meta.home.description'),
      keywords: lang === 'zh'
        ? ['经典书籍', '书单', '阅读路线', '知识地图', 'AI 书单', '投资书单', '中英双语']
        : ['classic books', 'reading list', 'reading paths', 'knowledge map', 'AI books', 'investing books', 'bilingual'],
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: lang === 'zh' ? '经典书库' : 'Classics Library',
          alternateName: lang === 'zh' ? 'Classics Library' : '经典书库',
          inLanguage: ['zh-CN', 'en'],
          description: t(lang, 'meta.home.description')
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: t(lang, 'home.featured_title'),
          itemListElement: featured.map((book, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: lang === 'zh' ? book.title_zh : book.title_en,
            url: absUrl(lang, `books/${book.slug}/`)
          }))
        }
      ]
    },
    body,
    bodyClass: 'page-home'
  });
}

export default renderHome;
