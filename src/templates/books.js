/**
 * 书籍相关页面：书库总览 / 书籍详情
 */
import {
  t, formatYear, formatReadingTime, nameOf, bookTitle, bookTitleSecondary,
  bookTitleMain, bookTitleMainAlt
} from '../lib/i18n.js';
import {
  url, absUrl, page, cover, bookGrid, bookCard, stars, pageHead, authorLine, tagChip, topicChip, sourceLabel
} from '../lib/layout.js';
import { escapeHtml as e } from '../lib/markdown.js';

/* ------------------------------------------------------------------
 * 书库总览 Library
 * ------------------------------------------------------------------ */
export function renderLibrary(lang, data) {
  const books = data.sortedBooks;
  const difficulties = [1, 2, 3];

  const body = `
      ${pageHead(lang, {
        title: t(lang, 'library.title'),
        sub: t(lang, 'library.sub', {
          total: data.books.length,
          curated: data.curatedBooks.length,
          list: data.listBooks.length,
          fields: data.categories.length
        }),
        intro: t(lang, 'library.intro'),
        crumbs: [{ label: t(lang, 'library.title') }]
      })}

      <section class="section">
        <div class="filters" data-filters>
          <div class="filters__row">
            <span class="filters__label">${e(t(lang, 'library.category'))}</span>
            <div class="filters__chips">
              <button class="chip chip--filter is-active" type="button" data-filter="category" data-value="all">${e(t(lang, 'library.all'))}</button>
              ${data.categories
                .map(
                  (cat) => `<button class="chip chip--filter" type="button" data-filter="category" data-value="${e(cat.slug)}">
                <span class="chip__main">${e(lang === 'zh' ? cat.name_zh : cat.name_en)}</span>
                <span class="chip__alt">${e(lang === 'zh' ? cat.name_en : cat.name_zh)}</span>
              </button>`
                )
                .join('\n              ')}
            </div>
          </div>

          <div class="filters__row">
            <span class="filters__label">${e(t(lang, 'library.difficulty'))}</span>
            <div class="filters__chips">
              <button class="chip chip--filter is-active" type="button" data-filter="difficulty" data-value="all">${e(t(lang, 'library.all'))}</button>
              ${difficulties
                .map(
                  (d) => `<button class="chip chip--filter" type="button" data-filter="difficulty" data-value="${d}">${e(t(lang, `difficulty.${d}`))}</button>`
                )
                .join('\n              ')}
            </div>
          </div>

          <div class="filters__row">
            <span class="filters__label">${e(t(lang, 'library.filter_source'))}</span>
            <div class="filters__chips">
              <button class="chip chip--filter is-active" type="button" data-filter="source" data-value="all">${e(t(lang, 'library.source_all'))}</button>
              <button class="chip chip--filter" type="button" data-filter="source" data-value="curated">${e(t(lang, 'library.source_curated'))}</button>
              <button class="chip chip--filter" type="button" data-filter="source" data-value="anzhengming">${e(t(lang, 'source.anzhengming'))}</button>
              <button class="chip chip--filter" type="button" data-filter="source" data-value="xiaomingshuo">${e(t(lang, 'source.xiaomingshuo'))}</button>
              <button class="chip chip--filter" type="button" data-filter="source" data-value="daily">${e(t(lang, 'source.daily'))}</button>
            </div>
          </div>

          <div class="filters__row filters__row--end">
            <label class="filters__label" for="sort-select">${e(t(lang, 'library.sort'))}</label>
            <select id="sort-select" class="select" data-sort>
              <option value="index">${e(t(lang, 'library.sort_index'))}</option>
              <option value="year-new">${e(t(lang, 'library.sort_year_new'))}</option>
              <option value="year-old">${e(t(lang, 'library.sort_year_old'))}</option>
              <option value="title">${e(t(lang, 'library.sort_title'))}</option>
            </select>
            <span class="filters__count" data-count>${books.length} ${e(t(lang, 'library.results'))}</span>
          </div>
        </div>

        <p class="filters__note">${e(t(lang, 'library.list_note'))}</p>
        <p class="filters__empty" data-empty hidden>${e(t(lang, 'library.no_results'))}</p>
        <div class="grid grid--books" data-book-grid data-lang="${e(lang)}">
          ${books.map((book) => bookCard(lang, book, { descChars: 110 })).join('\n')}
        </div>
      </section>
`;

  return page({
    lang,
    currentPath: 'library/',
    meta: {
      title: t(lang, 'meta.library.title'),
      description: t(lang, 'meta.library.description'),
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: t(lang, 'library.title'),
          description: t(lang, 'meta.library.description'),
          inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
          hasPart: books.slice(0, 30).map((book) => ({
            '@type': 'Book',
            name: lang === 'zh' ? book.title_zh : book.title_en,
            url: absUrl(lang, `books/${book.slug}/`)
          }))
        }
      ]
    },
    body,
    bodyClass: 'page-library'
  });
}

/* ------------------------------------------------------------------
 * 书籍详情 Book Detail
 * ------------------------------------------------------------------ */
const INDEX_DIMS = [
  'historical_influence',
  'intellectual_depth',
  'long_term_relevance',
  'cross_domain_influence'
];

function listSection(lang, id, titleKey, items) {
  if (!items || !items.length) return '';
  return `
      <section class="book-section" aria-labelledby="${id}">
        <h2 class="book-section__title" id="${id}">${e(t(lang, `book.${titleKey}`))}</h2>
        <ul class="book-section__list">
          ${items.map((item) => `<li>${e(item)}</li>`).join('\n          ')}
        </ul>
      </section>`;
}

function textSection(lang, id, titleKey, text) {
  if (!text) return '';
  return `
      <section class="book-section" aria-labelledby="${id}">
        <h2 class="book-section__title" id="${id}">${e(t(lang, `book.${titleKey}`))}</h2>
        <p class="book-section__text">${e(text)}</p>
      </section>`;
}

export function renderBook(lang, data, book) {
  const zh = lang === 'zh';
  const isList = book.tier === 'list';
  const mainRaw = bookTitleMain(lang, book);
  const altRaw = bookTitleMainAlt(lang, book);
  const main = mainRaw ? (zh ? `《${mainRaw}》` : mainRaw) : (book.title_zh || book.slug);
  const alt = altRaw ? (zh ? altRaw : `《${altRaw}》`) : '';
  const subtitle = zh ? book.subtitle_zh : book.subtitle_en;
  const category = book.categoryEntity;
  const notes = data.bookNotes[book.slug] || [];
  const sameAuthor = (data.authorBooks[book.author?.slug] || []).filter((b) => b.slug !== book.slug);
  const related = book.related;
  const indexOf = data.sortedBooks.findIndex((b) => b.slug === book.slug);
  const prev = indexOf > 0 ? data.sortedBooks[indexOf - 1] : null;
  const next = indexOf < data.sortedBooks.length - 1 ? data.sortedBooks[indexOf + 1] : null;

  const metaTitle = zh
    ? `${book.title_zh}${book.title_en ? `（${book.title_en}）` : ''} · 经典书库`
    : `${book.title_en || book.title_zh}${book.title_en ? ` (《${book.title_zh}》)` : ''} · Classics Library`;
  const metaDesc = (zh ? book.description_zh : book.description_en
    || (zh ? book.theme_zh : book.theme_en)
  ).slice(0, 200);

  const yearText = book.year == null ? t(lang, 'book.year_unknown') : formatYear(lang, book.year);
  const themeText = zh ? book.theme_zh : book.theme_en;
  const listCatText = zh ? book.list_category_zh : book.list_category_en;
  const alsoIn = Array.isArray(book.also_in) ? book.also_in : [];

  /* 书单条目的阅读指引：有 prose 时渲染完整板块，否则回落到「来源主题 + 提示」。 */
  const sourcePanel = isList
    ? `<section class="book-section book-section--list">
              <h2 class="book-section__title">${e(t(lang, 'book.theme'))}</h2>
              <p class="book-section__lead">${e(themeText || '')}</p>
            </section>`
    : '';
  const proseSections = `
            ${sourcePanel}
            ${textSection(lang, 'sec-what', 'what_is_it', zh ? book.description_zh : book.description_en)}
            ${textSection(lang, 'sec-why', 'why_read', zh ? book.why_read_zh : book.why_read_en)}
            ${listSection(lang, 'sec-ideas', 'core_ideas', zh ? book.core_ideas_zh : book.core_ideas_en)}
            ${listSection(lang, 'sec-questions', 'key_questions', zh ? book.key_questions_zh : book.key_questions_en)}
            ${textSection(lang, 'sec-who', 'who_should_read', zh ? book.who_should_read_zh : book.who_should_read_en)}
            ${textSection(lang, 'sec-reading-note', 'reading_note', zh ? book.reading_note_zh : book.reading_note_en)}`;
  const fallbackSections = `
            <section class="book-section book-section--list">
              <h2 class="book-section__title">${e(t(lang, 'book.theme'))}</h2>
              <p class="book-section__lead">${e(themeText || '')}</p>
              <p class="notice notice--soft">${e(t(lang, 'book.no_prose'))}</p>
            </section>`;

  const body = `
      <article class="book-detail">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="${url(lang)}">${e(t(lang, 'common.home'))}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <a href="${url(lang, 'library/')}">${e(t(lang, 'library.title'))}</a>
          ${category ? `<span class="breadcrumb__sep" aria-hidden="true">/</span>
          <a href="${url(lang, `categories/${category.slug}/`)}">${e(nameOf(lang, category))}</a>` : ''}
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">${e(zh ? book.title_zh : book.title_en)}</span>
        </nav>

        <header class="book-hero">
          <div class="book-hero__visual">${cover(lang, book, { size: 'xl' })}</div>
          <div class="book-hero__info">
            <p class="book-hero__cat">
              ${category ? `<a href="${url(lang, `categories/${category.slug}/`)}">${e(nameOf(lang, category))}</a>` : ''}
              <span class="dot" aria-hidden="true">·</span>
              <span>${e(yearText)}</span>
              ${isList ? `<span class="dot" aria-hidden="true">·</span>
              <span class="book-hero__source-badge">${e(sourceLabel(lang, book))}</span>` : ''}
            </p>
            <h1 class="book-hero__title">${e(main)}</h1>
            ${alt ? `<p class="book-hero__title-alt">${e(alt)}</p>` : ''}
            ${subtitle ? `<p class="book-hero__subtitle">${e(subtitle)}</p>` : ''}
            <p class="book-hero__author">
              ${e(t(lang, 'book.author'))}：${authorLine(lang, book.authors)}
            </p>

            ${isList ? `
            <dl class="book-facts">
              <div><dt>${e(t(lang, 'book.year'))}</dt><dd>${e(yearText)}</dd></div>
              <div><dt>${e(t(lang, 'book.category'))}</dt><dd>${e(category ? nameOf(lang, category) : '')}</dd></div>
              <div><dt>${e(t(lang, 'book.original_language'))}</dt><dd>${e(book.original_language || '—')}</dd></div>
              <div><dt>${e(t(lang, 'source.list_label'))}</dt><dd>${e(listCatText || '—')}</dd></div>
              ${alsoIn.length ? `<div><dt>${e(t(lang, 'source.also_in'))}</dt><dd>${e(alsoIn.map((s) => t(lang, `source.${s}`)).join(' · '))}</dd></div>` : ''}
            </dl>

            <div class="index-panel index-panel--source">
              <div class="index-panel__score">
                <span class="index-panel__label">${e(t(lang, 'book.theme'))}</span>
              </div>
              <p class="index-panel__theme">${e(themeText || '')}</p>
              <p class="index-panel__note">${e(t(lang, 'source.note'))}</p>
            </div>` : `
            <dl class="book-facts">
              <div><dt>${e(t(lang, 'book.year'))}</dt><dd>${e(yearText)}</dd></div>
              <div><dt>${e(t(lang, 'book.category'))}</dt><dd>${e(category ? nameOf(lang, category) : '')}</dd></div>
              <div><dt>${e(t(lang, 'book.difficulty'))}</dt><dd>${e(t(lang, `difficulty.${book.difficulty}`))}</dd></div>
              <div><dt>${e(t(lang, 'book.reading_time'))}</dt><dd>${e(formatReadingTime(lang, book.reading_time))}</dd></div>
              <div><dt>${e(t(lang, 'book.original_language'))}</dt><dd>${e(book.original_language)}</dd></div>
            </dl>

            <div class="index-panel">
              <div class="index-panel__score">
                <span class="index-panel__label">${e(t(lang, 'index.label'))}</span>
                <span class="index-panel__value">${book.index}<small>/ 100</small></span>
              </div>
              <div class="index-panel__dims">
                ${INDEX_DIMS.map(
                  (dim, i) => `<div class="index-dim">
                  <span class="index-dim__name">${e(t(lang, `index.${dim}`))}</span>
                  ${stars(book.sub[i] || 0)}
                </div>`
                ).join('\n                ')}
              </div>
              <p class="index-panel__note">${e(t(lang, 'book.index_note'))}</p>
            </div>`}

            <p class="book-hero__actions">
              <button class="btn btn--primary" type="button" data-reading-toggle data-book="${e(book.slug)}"
                      data-label-add="${e(t(lang, 'book.add_to_reading'))}"
                      data-label-in="${e(t(lang, 'book.in_reading'))}">${e(t(lang, 'book.add_to_reading'))}</button>
              <a class="btn btn--ghost" href="${url(lang, 'my-reading/')}">${e(t(lang, 'nav.myReading'))}</a>
            </p>
          </div>
        </header>

        <div class="book-body">
          <div class="book-body__main">
            ${book.hasProse ? proseSections : fallbackSections}

            ${notes.length ? `
            <section class="book-section book-section--notes" aria-labelledby="sec-notes">
              <h2 class="book-section__title" id="sec-notes">${e(t(lang, 'notes.title'))}</h2>
              ${notes
                .map(
                  (note) => `<div class="note-inline">
                <p class="note-inline__date">${e(note.date || '')}</p>
                <p class="note-inline__insight">${e(zh ? note.key_insight_zh : note.key_insight_en)}</p>
                ${(zh ? note.thinking_zh : note.thinking_en) ? `<p class="note-inline__thinking">${e(zh ? note.thinking_zh : note.thinking_en)}</p>` : ''}
              </div>`
                )
                .join('\n              ')}
            </section>` : ''}
          </div>

          <aside class="book-body__aside">
            <section class="book-aside-block">
              <h2 class="book-aside-block__title">${e(t(lang, 'book.topics'))}</h2>
              <div class="chips chips--small">
                ${book.topicEntities.map((topic) => topicChip(lang, topic)).join('\n                ')}
              </div>
            </section>
            <section class="book-aside-block">
              <h2 class="book-aside-block__title">${e(t(lang, 'book.tags'))}</h2>
              <div class="chips chips--small">
                ${book.tagEntities.map((tag) => tagChip(lang, tag)).join('\n                ')}
              </div>
            </section>
            ${sameAuthor.length ? `
            <section class="book-aside-block">
              <h2 class="book-aside-block__title">${e(t(lang, 'book.more_by_author'))}</h2>
              <ul class="aside-list">
                ${sameAuthor
                  .map(
                    (b) => `<li><a href="${url(lang, `books/${b.slug}/`)}">${e(zh ? `《${b.title_zh}》` : b.title_en)}</a></li>`
                  )
                  .join('\n                ')}
              </ul>
            </section>` : ''}
          </aside>
        </div>

        ${related.length ? `
        <section class="section section--related">
          <div class="section__head">
            <div>
              <h2 class="section__title">${e(t(lang, 'book.related'))}</h2>
              <p class="section__sub">${e(t(lang, 'book.if_you_like'))}</p>
            </div>
          </div>
          ${bookGrid(lang, related.slice(0, 4), { showDesc: false })}
        </section>` : ''}

        <nav class="book-pager" aria-label="Book navigation">
          ${prev ? `<a class="book-pager__item" href="${url(lang, `books/${prev.slug}/`)}">
            <span class="book-pager__dir">← ${e(t(lang, 'book.prev'))}</span>
            <span class="book-pager__name">${e(zh ? `《${prev.title_zh}》` : prev.title_en)}</span>
          </a>` : '<span></span>'}
          ${next ? `<a class="book-pager__item book-pager__item--next" href="${url(lang, `books/${next.slug}/`)}">
            <span class="book-pager__dir">${e(t(lang, 'book.next'))} →</span>
            <span class="book-pager__name">${e(zh ? `《${next.title_zh}》` : next.title_en)}</span>
          </a>` : '<span></span>'}
        </nav>
      </article>
`;

  return page({
    lang,
    currentPath: `books/${book.slug}/`,
    meta: {
      title: metaTitle,
      description: metaDesc,
      keywords: [
        book.title_zh, book.title_en,
        book.author?.name_zh, book.author?.name_en,
        ...book.tagEntities.map((tag) => (zh ? tag.zh : tag.en))
      ].filter(Boolean),
      type: 'article',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Book',
          name: zh ? book.title_zh : book.title_en,
          alternateName: zh ? book.title_en : book.title_zh,
          author: book.authors.map((a) => ({ '@type': 'Person', name: zh ? a.name_zh : a.name_en })),
          datePublished: String(book.year),
          inLanguage: book.original_language,
          genre: category ? nameOf(lang, category) : undefined,
          description: metaDesc,
          url: absUrl(lang, `books/${book.slug}/`),
          isPartOf: { '@type': 'CollectionPage', name: t(lang, 'library.title') }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t(lang, 'common.home'), item: absUrl(lang, '') },
            { '@type': 'ListItem', position: 2, name: t(lang, 'library.title'), item: absUrl(lang, 'library/') },
            { '@type': 'ListItem', position: 3, name: zh ? book.title_zh : book.title_en, item: absUrl(lang, `books/${book.slug}/`) }
          ]
        }
      ]
    },
    body,
    bodyClass: 'page-book'
  });
}

export default { renderLibrary, renderBook };
