/**
 * 集合类页面：分类 / 主题 / 作者 / 阅读路线
 */
import { t, nameOf, descriptionOf, formatYear } from '../lib/i18n.js';
import {
  url, absUrl, page, cover, bookGrid, sectionHead, pageHead, categoryCard, topicChip, tagChip, authorLine
} from '../lib/layout.js';
import { escapeHtml as e } from '../lib/markdown.js';

/* ------------------------------------------------------------------
 * 分类
 * ------------------------------------------------------------------ */
export function renderCategories(lang, data) {
  const body = `
      ${pageHead(lang, {
        title: t(lang, 'categories.title'),
        sub: t(lang, 'categories.sub'),
        intro: t(lang, 'categories.intro'),
        crumbs: [{ label: t(lang, 'categories.title') }]
      })}
      <section class="section">
        <div class="grid grid--categories">
          ${data.categories.map((cat) => categoryCard(lang, cat, (data.categoryBooks[cat.slug] || []).length)).join('\n')}
        </div>
      </section>`;

  return page({
    lang,
    currentPath: 'categories/',
    meta: {
      title: t(lang, 'meta.categories.title'),
      description: t(lang, 'meta.categories.description'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t(lang, 'categories.title'),
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
        hasPart: data.categories.map((cat) => ({
          '@type': 'Thing',
          name: nameOf(lang, cat),
          url: absUrl(lang, `categories/${cat.slug}/`)
        }))
      }
    },
    body,
    bodyClass: 'page-categories'
  });
}

export function renderCategory(lang, data, category) {
  const books = data.categoryBooks[category.slug] || [];
  const topicsHere = [...new Set(books.flatMap((b) => b.topicSlugs))].map((s) => data.topicBySlug[s]).filter(Boolean);

  const body = `
      ${pageHead(lang, {
        title: nameOf(lang, category),
        sub: lang === 'zh' ? category.name_en : category.name_zh,
        intro: descriptionOf(lang, category),
        crumbs: [
          { label: t(lang, 'categories.title'), href: url(lang, 'categories/') },
          { label: nameOf(lang, category) }
        ]
      })}

      <section class="section">
        <p class="count-line">${books.length} ${e(t(lang, 'categories.books_in'))}</p>
        ${books.length ? bookGrid(lang, books) : `<p class="empty">${e(t(lang, 'common.no_content'))}</p>`}
      </section>

      ${topicsHere.length ? `
      <section class="section">
        ${sectionHead(lang, 'topics.related_topics', null)}
        <div class="chips">${topicsHere.map((topic) => topicChip(lang, topic)).join('\n')}</div>
      </section>` : ''}`;

  const metaTitle = lang === 'zh'
    ? `${category.name_zh} · ${category.name_en} · 经典书库`
    : `${category.name_en} · ${category.name_zh} · Classics Library`;

  return page({
    lang,
    currentPath: `categories/${category.slug}/`,
    meta: {
      title: metaTitle,
      description: descriptionOf(lang, category),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: nameOf(lang, category),
        description: descriptionOf(lang, category),
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
        hasPart: books.map((book) => ({
          '@type': 'Book',
          name: lang === 'zh' ? book.title_zh : book.title_en,
          url: absUrl(lang, `books/${book.slug}/`)
        }))
      }
    },
    body,
    bodyClass: 'page-category'
  });
}

/* ------------------------------------------------------------------
 * 主题
 * ------------------------------------------------------------------ */
export function renderTopics(lang, data) {
  const sorted = [...data.topics].sort(
    (a, b) => (data.topicBooks[b.slug]?.length || 0) - (data.topicBooks[a.slug]?.length || 0)
  );

  const body = `
      ${pageHead(lang, {
        title: t(lang, 'topics.title'),
        sub: t(lang, 'topics.sub'),
        intro: t(lang, 'topics.intro'),
        crumbs: [{ label: t(lang, 'topics.title') }]
      })}
      <section class="section">
        <div class="grid grid--topics">
          ${sorted
            .map((topic) => {
              const count = (data.topicBooks[topic.slug] || []).length;
              return `<a class="topic-card" href="${url(lang, `topics/${topic.slug}/`)}">
            <span class="topic-card__names">
              <span class="topic-card__name">${e(lang === 'zh' ? topic.name_zh : topic.name_en)}</span>
              <span class="topic-card__alt">${e(lang === 'zh' ? topic.name_en : topic.name_zh)}</span>
            </span>
            <span class="topic-card__desc">${e(descriptionOf(lang, topic))}</span>
            <span class="topic-card__count">${count} ${e(t(lang, 'topics.count'))}</span>
          </a>`;
            })
            .join('\n          ')}
        </div>
      </section>`;

  return page({
    lang,
    currentPath: 'topics/',
    meta: {
      title: t(lang, 'meta.topics.title'),
      description: t(lang, 'meta.topics.description'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t(lang, 'topics.title'),
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en'
      }
    },
    body,
    bodyClass: 'page-topics'
  });
}

export function renderTopic(lang, data, topic) {
  const books = data.topicBooks[topic.slug] || [];
  const related = data.topicRelated[topic.slug] || [];

  const body = `
      ${pageHead(lang, {
        title: nameOf(lang, topic),
        sub: lang === 'zh' ? topic.name_en : topic.name_zh,
        intro: descriptionOf(lang, topic),
        crumbs: [
          { label: t(lang, 'topics.title'), href: url(lang, 'topics/') },
          { label: nameOf(lang, topic) }
        ]
      })}

      <section class="section">
        <p class="count-line">${books.length} ${e(t(lang, 'topics.count'))}</p>
        ${books.length ? bookGrid(lang, books) : `<p class="empty">${e(t(lang, 'common.no_content'))}</p>`}
      </section>

      ${related.length ? `
      <section class="section">
        ${sectionHead(lang, 'topics.related_topics', null)}
        <div class="chips">${related.map((item) => topicChip(lang, item)).join('\n')}</div>
      </section>` : ''}`;

  const metaTitle = lang === 'zh'
    ? `${topic.name_zh} · ${topic.name_en} · 经典书库`
    : `${topic.name_en} · ${topic.name_zh} · Classics Library`;

  return page({
    lang,
    currentPath: `topics/${topic.slug}/`,
    meta: {
      title: metaTitle,
      description: descriptionOf(lang, topic),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: nameOf(lang, topic),
        description: descriptionOf(lang, topic),
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
        hasPart: books.map((book) => ({
          '@type': 'Book',
          name: lang === 'zh' ? book.title_zh : book.title_en,
          url: absUrl(lang, `books/${book.slug}/`)
        }))
      }
    },
    body,
    bodyClass: 'page-topic'
  });
}

/* ------------------------------------------------------------------
 * 作者
 * ------------------------------------------------------------------ */
export function renderAuthors(lang, data) {
  const body = `
      ${pageHead(lang, {
        title: t(lang, 'authors.title'),
        sub: t(lang, 'authors.sub'),
        intro: t(lang, 'authors.intro'),
        crumbs: [{ label: t(lang, 'authors.title') }]
      })}
      <section class="section">
        <div class="grid grid--authors">
          ${data.authors
            .map((author) => {
              const name = lang === 'zh' ? author.name_zh : author.name_en;
              const alt = lang === 'zh' ? author.name_en : author.name_zh;
              const role = lang === 'zh' ? author.role_zh : author.role_en;
              return `<a class="author-card" href="${url(lang, `authors/${author.slug}/`)}">
            <span class="author-card__name">${e(name)}</span>
            <span class="author-card__alt">${e(alt)}</span>
            ${author.life ? `<span class="author-card__life">${e(author.life)}</span>` : ''}
            ${role ? `<span class="author-card__role">${e(role)}</span>` : ''}
            <span class="author-card__count">${author.books.length} ${e(t(lang, 'authors.books_count'))}</span>
          </a>`;
            })
            .join('\n          ')}
        </div>
      </section>`;

  return page({
    lang,
    currentPath: 'authors/',
    meta: {
      title: t(lang, 'meta.authors.title'),
      description: t(lang, 'meta.authors.description'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t(lang, 'authors.title'),
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en'
      }
    },
    body,
    bodyClass: 'page-authors'
  });
}

export function renderAuthor(lang, data, author) {
  const zh = lang === 'zh';
  const name = zh ? author.name_zh : author.name_en;
  const alt = zh ? author.name_en : author.name_zh;
  const bio = zh ? author.bio_zh : author.bio_en;
  const role = zh ? author.role_zh : author.role_en;
  const nationality = zh ? author.nationality_zh : author.nationality_en;
  const ideas = zh ? author.ideas_zh : author.ideas_en;
  const topics = data.authorTopics[author.slug] || [];

  const body = `
      ${pageHead(lang, {
        title: name,
        sub: alt,
        crumbs: [
          { label: t(lang, 'authors.title'), href: url(lang, 'authors/') },
          { label: name }
        ]
      })}

      <section class="section author-profile">
        <div class="author-profile__facts">
          ${author.life ? `<div><dt>${e(zh ? '生卒' : 'Lifespan')}</dt><dd>${e(author.life)}</dd></div>` : ''}
          ${nationality ? `<div><dt>${e(zh ? '国籍' : 'Nationality')}</dt><dd>${e(nationality)}</dd></div>` : ''}
          ${role ? `<div><dt>${e(zh ? '身份' : 'Role')}</dt><dd>${e(role)}</dd></div>` : ''}
          <div><dt>${e(t(lang, 'authors.books'))}</dt><dd>${author.books.length}</dd></div>
        </div>

        ${bio ? `
        <div class="author-profile__bio">
          <h2 class="book-section__title">${e(t(lang, 'authors.biography'))}</h2>
          <p>${e(bio)}</p>
        </div>` : ''}

        ${ideas?.length ? `
        <div class="author-profile__ideas">
          <h2 class="book-section__title">${e(t(lang, 'authors.ideas'))}</h2>
          <ul class="book-section__list">
            ${ideas.map((idea) => `<li>${e(idea)}</li>`).join('\n            ')}
          </ul>
        </div>` : ''}
      </section>

      ${author.books.length ? `
      <section class="section">
        ${sectionHead(lang, 'authors.books', null)}
        ${bookGrid(lang, author.books, { showDesc: false })}
      </section>` : ''}

      ${topics.length ? `
      <section class="section">
        ${sectionHead(lang, 'authors.related_topics', null)}
        <div class="chips">${topics.map((topic) => topicChip(lang, topic)).join('\n')}</div>
      </section>` : ''}`;

  const metaTitle = zh
    ? `${author.name_zh} · ${author.name_en} · 经典书库`
    : `${author.name_en} · ${author.name_zh} · Classics Library`;

  return page({
    lang,
    currentPath: `authors/${author.slug}/`,
    meta: {
      title: metaTitle,
      description: bio.slice(0, 200) || `${name} — ${role}`,
      type: 'profile',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: zh ? author.name_zh : author.name_en,
        alternateName: zh ? author.name_en : author.name_zh,
        description: bio,
        jobTitle: role || undefined,
        nationality: nationality || undefined,
        url: absUrl(lang, `authors/${author.slug}/`)
      }
    },
    body,
    bodyClass: 'page-author'
  });
}

/* ------------------------------------------------------------------
 * 阅读路线
 * ------------------------------------------------------------------ */
export function renderPaths(lang, data) {
  const body = `
      ${pageHead(lang, {
        title: t(lang, 'paths.title'),
        sub: t(lang, 'paths.sub'),
        intro: t(lang, 'paths.intro'),
        crumbs: [{ label: t(lang, 'paths.title') }]
      })}
      <section class="section">
        <div class="grid grid--paths">
          ${data.paths
            .map(
              (path) => `<article class="path-card">
            <header class="path-card__head">
              <h2 class="path-card__title"><a href="${url(lang, `paths/${path.slug}/`)}">${e(lang === 'zh' ? path.name_zh : path.name_en)}</a></h2>
              <p class="path-card__alt">${e(lang === 'zh' ? path.name_en : path.name_zh)}</p>
              <p class="path-card__tagline">${e(lang === 'zh' ? path.tagline_zh : path.tagline_en)}</p>
            </header>
            <ol class="path-preview">
              ${path.levels
                .map((level, i) => {
                  const book = data.bookBySlug[level.book];
                  return `<li class="path-preview__item">
                <span class="path-preview__num">${String(i + 1).padStart(2, '0')}</span>
                <span class="path-preview__label">${e(lang === 'zh' ? level.label_zh : level.label_en)}</span>
                <span class="path-preview__book">${e(book ? (lang === 'zh' ? `《${book.title_zh}》` : book.title_en) : '')}</span>
              </li>`;
                })
                .join('\n              ')}
            </ol>
            <footer class="path-card__foot">
              <span>${path.levels.length} ${e(t(lang, 'paths.steps'))}</span>
              <a class="link-arrow" href="${url(lang, `paths/${path.slug}/`)}">${e(t(lang, 'paths.start'))}<span aria-hidden="true"> →</span></a>
            </footer>
          </article>`
            )
            .join('\n          ')}
        </div>
      </section>`;

  return page({
    lang,
    currentPath: 'paths/',
    meta: {
      title: t(lang, 'meta.paths.title'),
      description: t(lang, 'meta.paths.description'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t(lang, 'paths.title'),
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en'
      }
    },
    body,
    bodyClass: 'page-paths'
  });
}

export function renderPath(lang, data, path) {
  const zh = lang === 'zh';
  const levels = path.levels
    .map((level, i) => {
      const book = data.bookBySlug[level.book];
      const label = zh ? level.label_zh : level.label_en;
      const note = zh ? level.note_zh : level.note_en;
      if (!book) return '';
      return `
        <li class="path-step">
          <div class="path-step__marker">
            <span class="path-step__level">${e(t(lang, 'paths.level'))} ${String(i + 1).padStart(2, '0')}</span>
          </div>
          <div class="path-step__content">
            <p class="path-step__label">${e(label)}</p>
            <p class="path-step__note">${e(note)}</p>
            <a class="path-step__book" href="${url(lang, `books/${book.slug}/`)}">
              ${cover(lang, book, { size: 'sm' })}
              <span class="path-step__bookinfo">
                <span class="path-step__title">${e(zh ? `《${book.title_zh}》` : book.title_en)}</span>
                <span class="path-step__title-alt">${e(zh ? book.title_en : `《${book.title_zh}》`)}</span>
                <span class="path-step__author">${e(zh ? book.author?.name_zh : book.author?.name_en)} · ${e(formatYear(lang, book.year))}</span>
              </span>
            </a>
          </div>
        </li>`;
    })
    .join('');

  const body = `
      ${pageHead(lang, {
        title: zh ? path.name_zh : path.name_en,
        sub: zh ? path.name_en : path.name_zh,
        intro: zh ? path.description_zh : path.description_en,
        crumbs: [
          { label: t(lang, 'paths.title'), href: url(lang, 'paths/') },
          { label: zh ? path.name_zh : path.name_en }
        ]
      })}
      <section class="section">
        <ol class="path-steps">${levels}</ol>
      </section>
      <section class="section">
        ${sectionHead(lang, 'paths.all_paths', null)}
        <div class="chips">
          ${data.paths
            .filter((p) => p.slug !== path.slug)
            .map((p) => `<a class="chip chip--topic" href="${url(lang, `paths/${p.slug}/`)}">
            <span class="chip__main">${e(zh ? p.name_zh : p.name_en)}</span>
            <span class="chip__alt">${e(zh ? p.name_en : p.name_zh)}</span>
          </a>`)
            .join('\n          ')}
        </div>
      </section>`;

  const metaTitle = zh
    ? `${path.name_zh} · ${path.name_en} · 阅读路线`
    : `${path.name_en} · ${path.name_zh} · Reading Path`;

  return page({
    lang,
    currentPath: `paths/${path.slug}/`,
    meta: {
      title: metaTitle,
      description: zh ? path.description_zh : path.description_en,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: zh ? path.name_zh : path.name_en,
        description: zh ? path.description_zh : path.description_en,
        itemListElement: path.levels.map((level, i) => {
          const book = data.bookBySlug[level.book];
          return {
            '@type': 'ListItem',
            position: i + 1,
            name: book ? (zh ? book.title_zh : book.title_en) : level.book,
            url: book ? absUrl(lang, `books/${book.slug}/`) : undefined
          };
        })
      }
    },
    body,
    bodyClass: 'page-path'
  });
}

export default {
  renderCategories, renderCategory, renderTopics, renderTopic, renderAuthors, renderAuthor, renderPaths, renderPath
};
