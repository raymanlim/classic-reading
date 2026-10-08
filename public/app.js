/* ==================================================================
   Classics Library — 前端交互
   原则：无框架、无依赖、渐进增强。
   所有功能在禁用 JavaScript 时仍可用（链接与表单均可独立工作）。
   ================================================================== */
(function () {
  'use strict';

  var LANG = document.body.getAttribute('data-lang') || 'zh';
  var LS_LANG = 'cl-lang';
  var LS_READING = 'cl-reading';

  var UI = window.__CL_UI || {};

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (e) { /* 隐私模式等场景静默降级 */ }
    return null;
  }

  function readJSON(key, fallback) {
    try {
      var raw = store(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }

  /* ---------------------------------------------------------------
   * 1. 语言偏好记忆
   *    链接本身已指向对应语言的目标页面（无 JS 也能正确切换），
   *    这里只负责记住选择，供根路径跳转使用。
   * --------------------------------------------------------------- */
  function initLangMemory() {
    $$('a[data-lang]').forEach(function (a) {
      a.addEventListener('click', function () {
        store(LS_LANG, a.getAttribute('data-lang'));
      });
    });
  }

  /* ---------------------------------------------------------------
   * 2. 移动端导航
   * --------------------------------------------------------------- */
  function initMobileNav() {
    var toggle = $('[data-menu-toggle]');
    var panel = $('#mobile-nav');
    if (!toggle || !panel) return;
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      if (open) panel.setAttribute('hidden', '');
      else panel.removeAttribute('hidden');
    });
  }

  /* ---------------------------------------------------------------
   * 3. 书库筛选与排序
   * --------------------------------------------------------------- */
  function initLibrary() {
    var grid = $('[data-book-grid]');
    if (!grid) return;
    var cards = $$('.book-card', grid);
    var countEl = $('[data-count]');
    var emptyEl = $('[data-empty]');
    var sortEl = $('[data-sort]');
    var state = { category: 'all', difficulty: 'all', source: 'all' };

    function apply() {
      var visible = 0;
      cards.forEach(function (card) {
        var okCat = state.category === 'all' || card.getAttribute('data-category') === state.category;
        var okDiff = state.difficulty === 'all' || card.getAttribute('data-difficulty') === state.difficulty;
        var okSrc = state.source === 'all' || card.getAttribute('data-source') === state.source;
        var show = okCat && okDiff && okSrc;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (countEl) countEl.textContent = visible + ' ' + (UI.results || '');
      if (emptyEl) {
        if (visible === 0) emptyEl.removeAttribute('hidden');
        else emptyEl.setAttribute('hidden', '');
      }
    }

    function sortCards() {
      var mode = sortEl ? sortEl.value : 'index';
      var sorted = cards.slice().sort(function (a, b) {
        if (mode === 'index') return Number(b.dataset.index) - Number(a.dataset.index);
        if (mode === 'year-new') return (Number(b.dataset.year) || -99999) - (Number(a.dataset.year) || -99999);
        if (mode === 'year-old') return (Number(a.dataset.year) || 99999) - (Number(b.dataset.year) || 99999);
        return a.dataset.title.localeCompare(b.dataset.title);
      });
      sorted.forEach(function (card) { grid.appendChild(card); });
    }

    $$('[data-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.getAttribute('data-filter');
        state[group] = btn.getAttribute('data-value');
        $$('[data-filter="' + group + '"]').forEach(function (other) {
          other.classList.toggle('is-active', other === btn);
        });
        apply();
      });
    });

    if (sortEl) sortEl.addEventListener('change', function () { sortCards(); apply(); });

    var clear = $('[data-clear-filters]');
    if (clear) {
      clear.addEventListener('click', function () {
        state.category = 'all';
        state.difficulty = 'all';
        state.source = 'all';
        $$('[data-filter]').forEach(function (btn) {
          btn.classList.toggle('is-active', btn.getAttribute('data-value') === 'all');
        });
        apply();
      });
    }

    apply();
  }

  /* ---------------------------------------------------------------
   * 4. 我的阅读：本地状态
   * --------------------------------------------------------------- */
  var STATUS_ORDER = ['reading', 'rereading', 'finished', 'want', 'favorite'];

  function getReading() { return readJSON(LS_READING, {}); }
  function setReading(map) { store(LS_READING, JSON.stringify(map)); }

  function initBookReadingToggle() {
    var btn = $('[data-reading-toggle]');
    if (!btn) return;
    var slug = btn.getAttribute('data-book');
    var map = getReading();
    var labelAdd = btn.getAttribute('data-label-add');
    var labelIn = btn.getAttribute('data-label-in');

    function refresh() {
      var current = map[slug];
      if (current) {
        btn.classList.add('is-on');
        btn.textContent = (UI.statusLabels && UI.statusLabels[current]) || labelIn;
      } else {
        btn.classList.remove('is-on');
        btn.textContent = labelAdd;
      }
    }

    btn.addEventListener('click', function () {
      var current = map[slug];
      if (!current) {
        map[slug] = 'want';
      } else {
        var next = STATUS_ORDER[STATUS_ORDER.indexOf(current) + 1];
        if (next) map[slug] = next;
        else delete map[slug];
      }
      setReading(map);
      refresh();
    });

    refresh();
  }

  function bookCardHTML(book) {
    var title = LANG === 'zh' ? '《' + book.zh.t.replace(/[《》]/g, '') + '》' : book.en.t;
    var alt = LANG === 'zh' ? book.en.t : '《' + book.zh.t.replace(/[《》]/g, '') + '》';
    var author = LANG === 'zh' ? book.zh.a : book.en.a;
    var cat = book.catLabel || '';
    /* 与服务端 bookCard 的 cover() 保持一致：
       有真实封面图就用图，否则回退程序化排版封面。
       图片为装饰性元素（书名/作者在相邻位置已有文本），故 alt 留空避免重复朗读。 */
    var coverHTML = book.cover
      ? '<span class="cover cover--img" data-cat="' + book.cat + '">' +
          '<img class="cover__img" src="' + book.cover + '" alt="" width="800" height="1200" loading="lazy" decoding="async">' +
        '</span>'
      : '<span class="cover" data-cat="' + book.cat + '" aria-hidden="true">' +
          '<span class="cover__top"><span class="cover__cat">' + cat + '</span>' +
          '<span class="cover__year">' + (book.year || '') + '</span></span>' +
          '<span class="cover__title">' + (LANG === 'zh' ? book.zh.t.replace(/[《》]/g, '') : book.en.t) + '</span>' +
          '<span class="cover__bottom"><span class="cover__author">' + author + '</span>' +
          '<span class="cover__rule" aria-hidden="true"></span></span>' +
        '</span>';
    return '<article class="book-card" data-slug="' + book.slug + '">' +
      '<a class="book-card__link" href="/' + LANG + '/' + book.path + '">' +
        coverHTML +
        '<span class="book-card__body">' +
          '<span class="book-card__title">' + title + '</span>' +
          '<span class="book-card__title-alt">' + alt + '</span>' +
          '<span class="book-card__author">' + author + '</span>' +
          '<span class="book-card__foot"><span class="book-card__cat">' + cat + '</span>' +
          '<span class="book-card__index">' + (UI.indexLabel || '') + ' ' + book.index + '</span></span>' +
        '</span>' +
      '</a></article>';
  }

  function initMyReading() {
    var holder = $('[data-reading-data]');
    if (!holder) return;
    var payload;
    try { payload = JSON.parse(holder.textContent); } catch (e) { return; }
    var books = payload.books || [];
    var curated = payload.curated || {};
    var statusLabels = UI.statusLabels || {};

    var map = Object.assign({}, curated, getReading());

    function render(filter) {
      var container = $('[data-reading-groups]');
      if (!container) return;
      container.innerHTML = '';
      var total = 0;
      STATUS_ORDER.forEach(function (status) {
        var slugs = Object.keys(map).filter(function (slug) { return map[slug] === status; });
        if (!slugs.length) return;
        if (filter && filter !== 'all' && filter !== status) return;
        total += slugs.length;
        var section = document.createElement('section');
        section.className = 'section reading-group';
        section.innerHTML =
          '<div class="section__head"><div>' +
          '<h2 class="section__title">' + (statusLabels[status] || status) + '</h2>' +
          '<p class="section__sub">' + slugs.length + ' ' + (UI.booksLabel || '') + '</p>' +
          '</div></div>' +
          '<div class="grid grid--books">' +
          slugs.map(function (slug) {
            var book = books.filter(function (b) { return b.slug === slug; })[0];
            return book ? bookCardHTML(book) : '';
          }).join('') +
          '</div>';
        container.appendChild(section);
      });
      var countEl = $('[data-reading-count]');
      if (countEl) countEl.textContent = total;
      var staticGroups = $('[data-static-groups]');
      if (staticGroups) staticGroups.setAttribute('hidden', '');
      var containerEl = $('[data-reading-groups]');
      if (containerEl) containerEl.removeAttribute('hidden');
    }

    $$('[data-reading-filter] .chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        $$('[data-reading-filter] .chip').forEach(function (c) { c.classList.toggle('is-active', c === chip); });
        render(chip.getAttribute('data-value'));
      });
    });

    var reset = $('[data-reading-reset]');
    if (reset) {
      reset.addEventListener('click', function () {
        store(LS_READING, null);
        map = Object.assign({}, curated);
        render('all');
        reset.textContent = UI.cleared || reset.textContent;
      });
    }

    render('all');
  }

  /* ---------------------------------------------------------------
   * 5. 双语搜索
   * --------------------------------------------------------------- */
  function normalize(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/[\s\u3000]+/g, '')
      .replace(/[《》"'`’‘“”·、，。！？；：（）()\[\]{}<>,.!?;:/\\|~^*_\-+=%$#@&]/g, '');
  }

  function expandTerms(query, aliases) {
    var q = query.trim().toLowerCase();
    var terms = {};
    var base = normalize(q);
    if (base) terms[base] = true;
    var parts = q.split(/[\s,，、]+/).filter(Boolean);
    parts.forEach(function (part) {
      var norm = normalize(part);
      if (norm) terms[norm] = true;
      var raw = part.trim();
      if (aliases[raw]) aliases[raw].forEach(function (a) { var n = normalize(a); if (n) terms[n] = true; });
      if (aliases[norm]) aliases[norm].forEach(function (a) { var n = normalize(a); if (n) terms[n] = true; });
    });
    // 中文无空格长查询：尝试用别名表做子串匹配
    Object.keys(aliases).forEach(function (key) {
      var nk = normalize(key);
      if (nk && nk.length > 1 && base.indexOf(nk) !== -1) {
        terms[nk] = true;
        aliases[key].forEach(function (a) { var n = normalize(a); if (n) terms[n] = true; });
      }
    });
    return Object.keys(terms).filter(function (t) { return t.length > 0; });
  }

  function scoreEntry(entry, terms) {
    var own = entry[LANG] || {};
    var other = entry[LANG === 'zh' ? 'en' : 'zh'] || {};
    var ownFields = {
      t: normalize(own.t), s: normalize(own.s), a: normalize(own.a), d: normalize(own.d), k: normalize(entry.k)
    };
    var otherFields = {
      t: normalize(other.t), s: normalize(other.s), a: normalize(other.a), d: normalize(other.d)
    };
    var score = 0;
    terms.forEach(function (term) {
      var w = term.length;
      if (ownFields.t.indexOf(term) !== -1) score += 14 + w;
      if (ownFields.a.indexOf(term) !== -1) score += 9 + w;
      if (ownFields.k.indexOf(term) !== -1) score += 7 + w;
      if (ownFields.s.indexOf(term) !== -1) score += 5 + w;
      if (ownFields.d.indexOf(term) !== -1) score += 3 + w;
      if (otherFields.t.indexOf(term) !== -1) score += 8 + w;
      if (otherFields.a.indexOf(term) !== -1) score += 5 + w;
      if (otherFields.s.indexOf(term) !== -1) score += 3;
      if (otherFields.d.indexOf(term) !== -1) score += 2;
    });
    if (score > 0) score += Math.min(entry.index || 0, 40) / 20;
    return score;
  }

  function highlight(text, terms) {
    if (!text) return '';
    var out = String(text);
    terms.forEach(function (term) {
      if (term.length < 2) return;
      var lower = out.toLowerCase();
      var idx = lower.indexOf(term);
      while (idx !== -1) {
        var original = out.substr(idx, term.length);
        if (original.toLowerCase() === term || normalize(original) === term) {
          out = out.slice(0, idx) + '\u0001' + original + '\u0002' + out.slice(idx + term.length);
        }
        idx = lower.indexOf(term, idx + term.length);
      }
    });
    return out.replace(/\u0001/g, '<mark>').replace(/\u0002/g, '</mark>');
  }

  function escapeHTML(str) {
    return String(str || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function initSearch() {
    var form = $('[data-search-form]');
    if (!form) return;
    var input = $('[data-search-input]');
    var results = $('[data-search-results]');
    var countEl = $('[data-search-count]');
    var emptyEl = $('[data-search-empty]');
    var index = null;
    var typeLabels = UI.typeLabels || {};

    function params() {
      return new URLSearchParams(window.location.search);
    }

    /* 严格检索：全部词项按子串打分 */
    function collect(terms) {
      var out = [];
      if (!terms.length) return out;
      index.entries.forEach(function (entry) {
        var s = scoreEntry(entry, terms);
        if (s > 0) out.push({ entry: entry, score: s });
      });
      out.sort(function (a, b) { return b.score - a.score; });
      return out.slice(0, 60);
    }

    /* 宽松检索：仅在严格检索 0 命中时启用。
       去掉中文虚词（的 / 之 / 与 / 和 / 及 / 或 / 是 / 在 / 了 / 吗 / 呢）与英文冠词介词后重试，
       使「鞑靼人的沙漠」这类多打一个「的」的查询仍能命中《鞑靼人沙漠》。 */
    function looseTerms(query, aliases) {
      var stripped = query
        .replace(/[的之与和及或是在了吗呢]/g, ' ')
        .replace(/\b(?:the|of|and|a|an|to|in|on|for|is|are)\b/gi, ' ');
      if (normalize(stripped) === normalize(query)) return [];
      return expandTerms(stripped, aliases);
    }

    function render(query) {
      if (!index) return;
      var aliases = index.aliases || {};
      /* terms 必须留在 render 作用域：下面高亮 highlight() 要用它。
         （曾因把它挪进 collect() 而漏掉这层声明，导致 ReferenceError 使搜索整体失效。） */
      var terms = expandTerms(query, aliases);
      var hits = collect(terms);
      var loose = false;
      if (!hits.length && query.trim()) {
        var looseSet = looseTerms(query, aliases);
        /* 阈值 12：只保留标题 / 作者 / 关键词级别的匹配，滤掉仅正文偶然命中的弱结果 */
        var altHits = collect(looseSet).filter(function (h) { return h.score >= 12; });
        if (altHits.length) { hits = altHits; terms = looseSet; loose = true; }
      }

      results.innerHTML = hits.map(function (hit) {
        var entry = hit.entry;
        var own = entry[LANG] || {};
        var other = entry[LANG === 'zh' ? 'en' : 'zh'] || {};
        var title = own.t || other.t;
        var alt = other.t && other.t !== title ? other.t : '';
        var desc = own.d || other.d || own.s || '';
        if (desc.length > 190) desc = desc.slice(0, 189) + '…';
        return '<article class="result">' +
          '<span class="result__type">' + escapeHTML(typeLabels[entry.type] || entry.type) + '</span>' +
          '<a class="result__title" href="/' + LANG + '/' + entry.path + '">' + highlight(escapeHTML(title), terms) + '</a>' +
          (alt ? '<span class="result__title-alt">' + escapeHTML(alt) + '</span>' : '') +
          (desc ? '<p class="result__desc">' + highlight(escapeHTML(desc), terms) + '</p>' : '') +
          '</article>';
      }).join('');

      if (countEl) {
        if (query.trim()) {
          countEl.removeAttribute('hidden');
          countEl.textContent = (UI.foundLabel || '') + ' ' + hits.length + ' ' + (UI.resultUnit || '') +
            (loose && UI.looseHint ? ' · ' + UI.looseHint : '');
        } else {
          countEl.setAttribute('hidden', '');
        }
      }
      if (emptyEl) {
        if (query.trim() && hits.length === 0) emptyEl.removeAttribute('hidden');
        else emptyEl.setAttribute('hidden', '');
      }
    }

    /* 索引 URL 带构建版本号：发布平台不下发 Cache-Control / ETag，
       浏览器会按启发式规则缓存 —— 不带版本号会导致「新书搜不到」。 */
    var indexUrl = '/search-index.json' + (window.__CL_BUILD ? '?v=' + window.__CL_BUILD : '');
    fetch(indexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        index = data;
        var q = params().get('q') || '';
        if (q) {
          input.value = q;
          render(q);
        }
      })
      .catch(function () { /* 索引加载失败时保持静态回退 */ });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var q = input.value.trim();
      var url = window.location.pathname + (q ? '?q=' + encodeURIComponent(q) : '');
      history.replaceState(null, '', url);
      render(q);
    });

    input.addEventListener('input', function () {
      var q = input.value.trim();
      var url = window.location.pathname + (q ? '?q=' + encodeURIComponent(q) : '');
      history.replaceState(null, '', url);
      render(q);
    });

    $$('[data-search-example]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        input.value = btn.getAttribute('data-search-example');
        input.dispatchEvent(new Event('input'));
        input.focus();
      });
    });
  }

  /* --------------------------------------------------------------- */
  function init() {
    initLangMemory();
    initMobileNav();
    initLibrary();
    initBookReadingToggle();
    initMyReading();
    initSearch();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
