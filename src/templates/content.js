/**
 * 内容类页面：文章 / 阅读笔记 / 我的阅读 / 关于 / 搜索 / 404
 */
import { t, formatDate, nameOf } from '../lib/i18n.js';
import { url, absUrl, page, bookCard, sectionHead, pageHead, topicChip, tagChip } from '../lib/layout.js';
import { renderMarkdown, escapeHtml as e, excerpt } from '../lib/markdown.js';
import { coverImage } from '../lib/covers.js';

/* ------------------------------------------------------------------
 * 文章
 * ------------------------------------------------------------------ */
export function renderArticles(lang, data) {
  const body = `
      ${pageHead(lang, {
        title: t(lang, 'articles.title'),
        sub: t(lang, 'articles.sub'),
        intro: t(lang, 'articles.intro'),
        crumbs: [{ label: t(lang, 'articles.title') }]
      })}
      <section class="section">
        <div class="grid grid--articles">
          ${data.articles
            .map((article) => {
              const title = (lang === 'zh' ? article.title_zh : article.title_en) || article.title_zh || article.title_en;
              const subtitle = lang === 'zh' ? article.subtitle_zh : article.subtitle_en;
              const content = lang === 'zh' ? article.content_zh : article.content_en;
              const cat = article.categoryEntity ? nameOf(lang, article.categoryEntity) : '';
              const flag = article.lang === 'both' || article.lang === lang ? '' : t(lang, 'articles.coming_soon');
              return `<article class="article-card article-card--wide">
            <a class="article-card__link" href="${url(lang, `articles/${article.slug}/`)}">
              <span class="article-card__meta">
                <span class="article-card__cat">${e(cat)}</span>
                <span class="article-card__date">${e(formatDate(lang, article.publish_date))}</span>
              </span>
              <h2 class="article-card__title">${e(title)}</h2>
              ${subtitle ? `<p class="article-card__sub">${e(subtitle)}</p>` : ''}
              ${content ? `<p class="article-card__excerpt">${e(excerpt(content, 150))}</p>` : ''}
              ${flag ? `<p class="article-card__flag">${e(flag)}</p>` : ''}
            </a>
          </article>`;
            })
            .join('\n          ')}
        </div>
      </section>`;

  return page({
    lang,
    currentPath: 'articles/',
    meta: {
      title: t(lang, 'meta.articles.title'),
      description: t(lang, 'meta.articles.description'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: t(lang, 'articles.title'),
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
        blogPost: data.articles.map((article) => ({
          '@type': 'BlogPosting',
          headline: (lang === 'zh' ? article.title_zh : article.title_en) || article.title_zh,
          datePublished: article.publish_date,
          url: absUrl(lang, `articles/${article.slug}/`)
        }))
      }
    },
    body,
    bodyClass: 'page-articles'
  });
}

export function renderArticle(lang, data, article) {
  const zh = lang === 'zh';
  const title = (zh ? article.title_zh : article.title_en) || article.title_zh || article.title_en;
  const altTitle = zh ? article.title_en : article.title_zh;
  const subtitle = zh ? article.subtitle_zh : article.subtitle_en;
  const content = zh ? article.content_zh : article.content_en;
  const hasOwn = Boolean(content && content.trim());
  const altLang = zh ? 'en' : 'zh';
  const altExists = Boolean((altLang === 'zh' ? article.content_zh : article.content_en)?.trim());
  const cat = article.categoryEntity ? nameOf(lang, article.categoryEntity) : '';

  const body = `
      ${pageHead(lang, {
        title,
        crumbs: [
          { label: t(lang, 'articles.title'), href: url(lang, 'articles/') },
          { label: title }
        ]
      })}

      <article class="article">
        <header class="article__head">
          <p class="article__meta">
            ${cat ? `<span class="article__cat">${e(cat)}</span>` : ''}
            <span class="article__date">${e(t(lang, 'articles.published'))} ${e(formatDate(lang, article.publish_date))}</span>
          </p>
          ${altTitle ? `<p class="article__title-alt">${e(altTitle)}</p>` : ''}
          ${subtitle ? `<p class="article__sub">${e(subtitle)}</p>` : ''}
        </header>

        ${hasOwn
          ? `<div class="prose">${renderMarkdown(content)}</div>`
          : `<div class="notice notice--soft">
              <p>${e(zh ? t(lang, 'articles.coming_soon_zh') : t(lang, 'articles.coming_soon'))}</p>
              ${altExists ? `<p><a class="link-arrow" href="${url(altLang, `articles/${article.slug}/`)}">${e(altLang === 'zh' ? '阅读中文版' : 'Read the English version')}<span aria-hidden="true"> →</span></a></p>` : ''}
            </div>`}

        <footer class="article__foot">
          ${article.relatedTopics?.length ? `
          <div class="article__block">
            <h2 class="article__block-title">${e(t(lang, 'articles.related_topics'))}</h2>
            <div class="chips chips--small">${article.relatedTopics.map((topic) => topicChip(lang, topic)).join('')}</div>
          </div>` : ''}
          ${article.tagEntities?.length ? `
          <div class="article__block">
            <h2 class="article__block-title">${e(t(lang, 'book.tags'))}</h2>
            <div class="chips chips--small">${article.tagEntities.map((tag) => tagChip(lang, tag)).join('')}</div>
          </div>` : ''}
        </footer>
      </article>

      ${article.relatedBooks?.length ? `
      <section class="section">
        ${sectionHead(lang, 'articles.related_books', null)}
        <div class="grid grid--books">
          ${article.relatedBooks.slice(0, 4).map((book) => bookCard(lang, book, { showDesc: false })).join('\n')}
        </div>
      </section>` : ''}

      <nav class="back-nav">
        <a class="link-arrow" href="${url(lang, 'articles/')}"><span aria-hidden="true">← </span>${e(t(lang, 'articles.back'))}</a>
      </nav>`;

  const metaTitle = zh ? `${article.title_zh} · 经典书库` : `${article.title_en} · Classics Library`;
  const metaDesc = excerpt(hasOwn ? content : subtitle || '', 180);

  return page({
    lang,
    currentPath: `articles/${article.slug}/`,
    meta: {
      title: metaTitle,
      description: metaDesc,
      type: 'article',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          alternativeHeadline: altTitle || undefined,
          description: metaDesc,
          datePublished: article.publish_date,
          inLanguage: zh ? 'zh-CN' : 'en',
          author: { '@type': 'Person', name: 'Rayman' },
          url: absUrl(lang, `articles/${article.slug}/`)
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t(lang, 'common.home'), item: absUrl(lang, '') },
            { '@type': 'ListItem', position: 2, name: t(lang, 'articles.title'), item: absUrl(lang, 'articles/') },
            { '@type': 'ListItem', position: 3, name: title, item: absUrl(lang, `articles/${article.slug}/`) }
          ]
        }
      ]
    },
    body,
    bodyClass: 'page-article'
  });
}

/* ------------------------------------------------------------------
 * 阅读笔记
 * ------------------------------------------------------------------ */
export function renderNotes(lang, data) {
  const zh = lang === 'zh';
  const body = `
      ${pageHead(lang, {
        title: t(lang, 'notes.title'),
        sub: t(lang, 'notes.sub'),
        intro: t(lang, 'notes.intro'),
        crumbs: [{ label: t(lang, 'notes.title') }]
      })}
      <section class="section">
        <div class="notes">
          ${data.notes
            .map((note) => {
              const book = note.bookEntity;
              const insight = zh ? note.key_insight_zh : note.key_insight_en;
              const thinking = zh ? note.thinking_zh : note.thinking_en;
              const quote = zh ? note.quote_zh : note.quote_en;
              /* 视角标签：personal = 站点所有者的个人笔记；editorial = 站点解读（自动化生成） */
              const thinkingLabel = t(lang, note.voice === 'editorial' ? 'notes.editorial_note' : 'notes.my_thinking');
              return `<article class="note">
            <header class="note__head">
              <p class="note__book">
                <a href="${url(lang, `books/${book.slug}/`)}">${e(zh ? `《${book.title_zh}》` : book.title_en)}</a>
              </p>
              <p class="note__date">${e(formatDate(lang, note.date))}</p>
            </header>
            <dl class="note__fields">
              <div><dt>${e(t(lang, 'notes.key_insight'))}</dt><dd>${e(insight || '')}</dd></div>
              ${quote ? `<div><dt>${e(t(lang, 'notes.quote'))}</dt><dd><blockquote>${e(quote)}</blockquote></dd></div>` : ''}
              <div><dt>${e(thinkingLabel)}</dt><dd>${e(thinking || '')}</dd></div>
            </dl>
            <footer class="note__foot">
              ${(note.topics || [])
                .map((slug) => data.topicBySlug[slug])
                .filter(Boolean)
                .map((topic) => topicChip(lang, topic))
                .join('')}
            </footer>
          </article>`;
            })
            .join('\n          ')}
        </div>
      </section>`;

  return page({
    lang,
    currentPath: 'notes/',
    meta: {
      title: t(lang, 'meta.notes.title'),
      description: t(lang, 'meta.notes.description'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t(lang, 'notes.title'),
        inLanguage: zh ? 'zh-CN' : 'en'
      }
    },
    body,
    bodyClass: 'page-notes'
  });
}

/* ------------------------------------------------------------------
 * 我的阅读
 * ------------------------------------------------------------------ */
export function renderMyReading(lang, data) {
  const zh = lang === 'zh';
  const statusKeys = ['reading', 'rereading', 'finished', 'want', 'favorite'];

  const groups = statusKeys
    .map((status) => {
      const items = data.readingList.filter((entry) => entry.status === status);
      return { status, items };
    })
    .filter((group) => group.items.length);

  /* 供前端重建清单使用的轻量数据（仅本页加载）。
     ⚠️ `cover` 字段必须带上：本页的列表**最终由前端重建**（app.js 的 render('all')），
     若负载里没有封面地址，前端就只能画程序化封面 —— 页面上所有真实封面都会消失。 */
  const clientBooks = data.books.map((book) => ({
    slug: book.slug,
    path: `books/${book.slug}/`,
    cat: book.category,
    catLabel: book.categoryEntity ? (zh ? book.categoryEntity.name_zh : book.categoryEntity.name_en) : '',
    year: book.year,
    index: book.index,
    cover: coverImage(book.slug) || '',
    zh: { t: book.title_zh, a: book.author?.name_zh || '' },
    en: { t: book.title_en, a: book.author?.name_en || '' }
  }));
  const curated = Object.fromEntries(data.readingList.map((entry) => [entry.book, entry.status]));
  const payload = JSON.stringify({ books: clientBooks, curated });

  const body = `
      ${pageHead(lang, {
        title: t(lang, 'reading.title'),
        sub: t(lang, 'reading.sub'),
        intro: t(lang, 'reading.intro'),
        crumbs: [{ label: t(lang, 'reading.title') }]
      })}

      <section class="section">
        <div class="reading-toolbar">
          <div class="filters__chips" data-reading-filter>
            <button class="chip chip--filter is-active" type="button" data-value="all">${e(t(lang, 'reading.filter_all'))}</button>
            ${statusKeys
              .map(
                (status) => `<button class="chip chip--filter" type="button" data-value="${status}">${e(t(lang, `reading.status.${status}`))}</button>`
              )
              .join('\n            ')}
          </div>
          <button class="btn btn--ghost btn--small" type="button" data-reading-reset>${e(t(lang, 'reading.clear'))}</button>
        </div>
        <p class="count-line"><span data-reading-count>${data.readingList.length}</span> ${e(t(lang, 'reading.count'))}</p>
      </section>

      <div data-reading-groups hidden></div>

      <div data-static-groups>
      ${groups
        .map(
          (group) => `
      <section class="section reading-group" data-status="${group.status}">
        <div class="section__head">
          <div>
            <h2 class="section__title">${e(t(lang, `reading.status.${group.status}`))}</h2>
            <p class="section__sub">${group.items.length} ${e(t(lang, 'reading.count'))}</p>
          </div>
        </div>
        <div class="grid grid--books">
          ${group.items.map((entry) => bookCard(lang, entry.bookEntity, { showDesc: false })).join('\n          ')}
        </div>
      </section>`
        )
        .join('\n')}
      </div>

      <script type="application/json" data-reading-data>${payload.replace(/</g, '\\u003c')}</script>

      <section class="section">
        <div class="notice notice--soft">
          <p>${e(zh
            ? '这里的初始清单是策展人的阅读状态。你在任何书籍页面点击按钮后，状态只保存在本机浏览器，不会上传。'
            : 'The starting list reflects the curator\'s reading status. Any change you make on a book page is stored only in your own browser and is never uploaded.')}</p>
        </div>
      </section>`;

  return page({
    lang,
    currentPath: 'my-reading/',
    meta: {
      title: t(lang, 'meta.reading.title'),
      description: t(lang, 'meta.reading.description')
    },
    body,
    bodyClass: 'page-reading'
  });
}

/* ------------------------------------------------------------------
 * 关于
 * ------------------------------------------------------------------ */
export function renderAbout(lang, data) {
  const zh = lang === 'zh';
  const principles = t(lang, 'about.principles') || [];

  const body = `
      ${pageHead(lang, {
        title: t(lang, 'about.title'),
        sub: t(lang, 'about.sub'),
        crumbs: [{ label: t(lang, 'about.title') }]
      })}

      <section class="section prose prose--wide">
        <p>${e(t(lang, 'about.p1'))}</p>
        <p>${e(t(lang, 'about.p2'))}</p>
        <p>${e(t(lang, 'about.p3'))}</p>

        <h2>${e(t(lang, 'about.how_title'))}</h2>
        <div class="flow">
          <span class="flow__node">${e(t(lang, 'book.details'))}</span>
          <span class="flow__arrow" aria-hidden="true">↓</span>
          <span class="flow__node">${e(t(lang, 'book.core_ideas'))}</span>
          <span class="flow__arrow" aria-hidden="true">↓</span>
          <span class="flow__node">${e(t(lang, 'topics.title'))}</span>
          <span class="flow__arrow" aria-hidden="true">↓</span>
          <span class="flow__node">${e(t(lang, 'articles.title'))}</span>
          <span class="flow__arrow" aria-hidden="true">↓</span>
          <span class="flow__node">${e(t(lang, 'map.title'))}</span>
          <span class="flow__arrow" aria-hidden="true">↓</span>
          <span class="flow__node flow__node--end">${e(zh ? '个人世界模型' : 'Personal World Model')}</span>
        </div>
        <p>${e(t(lang, 'about.how_body'))}</p>

        <h2>${e(t(lang, 'about.principles_title'))}</h2>
        <div class="principles">
          ${principles
            .map(
              (item, i) => `<div class="principle">
            <span class="principle__num">${String(i + 1).padStart(2, '0')}</span>
            <h3 class="principle__title">${e(item.title)}</h3>
            <p class="principle__body">${e(item.body)}</p>
          </div>`
            )
            .join('\n          ')}
        </div>

        <h2>${e(t(lang, 'about.stack_title'))}</h2>
        <p>${e(t(lang, 'about.stack_body'))}</p>
        <ul class="fact-list">
          <li><strong>${data.curatedBooks.length}</strong> ${e(zh ? '本经典书籍，每本均有中英双语独立撰写的内容' : 'classic books, each with separately written Chinese and English content')}</li>
          <li><strong>${data.listBooks.length}</strong> ${e(zh ? '本书单导入条目，来自第三方频道推荐书目，仅收录书目事实信息' : 'titles imported from third-party reading lists — bibliographic facts only')}</li>
          <li><strong>${data.categories.length}</strong> ${e(zh ? '个分类 · ' : 'categories · ')}<strong>${data.topics.length}</strong> ${e(zh ? '个主题 · ' : 'topics · ')}<strong>${data.tags.length}</strong> ${e(zh ? '个标签' : 'tags')}</li>
          <li><strong>${data.paths.length}</strong> ${e(zh ? '条阅读路线，按认知顺序排列' : 'reading paths, ordered by how understanding accumulates')}</li>
          <li>${e(zh ? '纯静态生成，无运行时依赖，加载快且可长期保存' : 'Statically generated with no runtime dependencies: fast and durable')}</li>
        </ul>

        <h2>${e(t(lang, 'about.contact_title'))}</h2>
        <p>${e(t(lang, 'about.contact_body'))}</p>
      </section>`;

  return page({
    lang,
    currentPath: 'about/',
    meta: {
      title: t(lang, 'meta.about.title'),
      description: t(lang, 'meta.about.description'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: t(lang, 'about.title'),
        description: t(lang, 'meta.about.description'),
        inLanguage: zh ? 'zh-CN' : 'en'
      }
    },
    body,
    bodyClass: 'page-about'
  });
}

/* ------------------------------------------------------------------
 * 搜索页
 * ------------------------------------------------------------------ */
export function renderSearch(lang, data) {
  const zh = lang === 'zh';
  const examples = zh
    ? ['人工智能', '投资', '风险', '芯片', '历史', '决策', 'Black Swan']
    : ['AI', 'investing', 'risk', 'semiconductors', 'history', 'decision', '黑天鹅'];

  const body = `
      ${pageHead(lang, {
        title: t(lang, 'search.title'),
        sub: t(lang, 'search.sub'),
        crumbs: [{ label: t(lang, 'search.title') }]
      })}

      <section class="section">
        <form class="search-page" role="search" data-search-form>
          <label class="sr-only" for="search-q">${e(t(lang, 'search.title'))}</label>
          <input id="search-q" class="search-page__input" type="search" name="q" autocomplete="off"
                 placeholder="${e(t(lang, 'search.placeholder'))}" data-search-input>
          <button class="btn btn--primary" type="submit">${e(t(lang, 'search.button'))}</button>
        </form>
        <p class="search-page__hint">${e(t(lang, 'search.bilingual_hint'))}</p>
        <p class="search-page__examples">
          <span>${e(t(lang, 'search.try'))}：</span>
          ${examples.map((term) => `<button class="chip chip--filter" type="button" data-search-example="${e(term)}">${e(term)}</button>`).join('')}
        </p>

        <p class="count-line" data-search-count hidden></p>
        <div class="search-results" data-search-results></div>
        <div class="notice notice--soft" data-search-empty hidden>
          <p>${e(t(lang, 'search.no_results'))}</p>
          <p>${e(t(lang, 'search.no_results_hint'))}</p>
        </div>
      </section>

      <section class="section">
        ${sectionHead(lang, 'home.categories_title', null, url(lang, 'categories/'))}
        <div class="chips">
          ${data.categories
            .map(
              (cat) => `<a class="chip chip--topic" href="${url(lang, `categories/${cat.slug}/`)}">
            <span class="chip__main">${e(zh ? cat.name_zh : cat.name_en)}</span>
            <span class="chip__alt">${e(zh ? cat.name_en : cat.name_zh)}</span>
          </a>`
            )
            .join('\n          ')}
        </div>
      </section>`;

  return page({
    lang,
    currentPath: 'search/',
    meta: {
      title: t(lang, 'meta.search.title'),
      description: t(lang, 'meta.search.description')
    },
    body,
    bodyClass: 'page-search'
  });
}

/* ------------------------------------------------------------------
 * 404
 * ------------------------------------------------------------------ */
export function renderNotFound(lang) {
  const body = `
      <section class="section section--notfound">
        <p class="notfound__code">404</p>
        <h1 class="notfound__title">${e(t(lang, 'notfound.title'))}</h1>
        <p class="notfound__text">${e(t(lang, 'notfound.text'))}</p>
        <p><a class="btn btn--primary" href="${url(lang)}">${e(t(lang, 'notfound.cta'))}</a></p>
      </section>`;

  return page({
    lang,
    currentPath: '',
    meta: {
      title: t(lang, 'meta.notfound.title'),
      description: t(lang, 'meta.notfound.description')
    },
    body,
    bodyClass: 'page-404'
  });
}

export default {
  renderArticles, renderArticle, renderNotes, renderMyReading, renderAbout, renderSearch, renderNotFound
};
