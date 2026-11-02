#!/usr/bin/env node
/**
 * 每日推荐 · 参考源生成器：Hacker Books（Hacker News 评论提及书目）
 * ------------------------------------------------------------------
 * 数据源：https://hackerbooks.org/
 *   统计口径（2026-11-02 抓取）：15,766 本书 / 281,363 条提及 / 225,861 条评论 /
 *   57,773 位独立评论者 / 2007–2026 / 其中 155,059 条属「推荐性提及」。
 *   排序指标 `u` = 独立提及人数（多少不同的人提到过），比「提及次数」抗刷屏。
 *
 * 用法：
 *   node src/hn-books-source.mjs            # 联网刷新候选池 + 报告
 *   node src/hn-books-source.mjs --offline  # 用 _stage 缓存刷新（不联网）
 *   node src/hn-books-source.mjs --brief    # 只打印现有候选池（按分类分组）
 *   node src/hn-books-source.mjs --json     # 打印候选池 JSON
 *   node src/hn-books-source.mjs --check    # 只做去重体检（不写文件）
 *
 * 输出：
 *   content/sources/hackernews-books.js   候选池（机器可读，**不会被站点构建加载**）
 *   docs/HackerNews书源-候选池.md          人工审阅报告
 *   缓存：_stage/hn-books/（gitignore）
 *
 * 🔴 纪律（Rayman 2026-11-02 指令）：
 *   1. 本池只做「选题线索」，**不构成经典性证据**。HN 提及人数不在任务规定的
 *      权威认可清单（豆瓣/Goodreads/维基/奖项/课程/权威书评/微信读书/Scholar）之内，
 *      不得用它凑经典性门槛的两项。
 *   2. 主题轮转仍由 coverage.mjs 机械决定，本池不得反向影响今日主题。
 *   3. 只收录能映射到七大在用主题的书；退役主题（金融/投资/美股/经济/商业）
 *      与超配主题（心理学/社会）一律不收。
 *   4. 不足 5 年的书不收（经典性门槛①）；年份缺失的不收（无法核验）。
 *   5. 与全库去重规则同 anzm-source.mjs；入库前 ingest-books.mjs 仍会二次校验。
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadData, ROOT } from './lib/data.js';

const SITE = 'https://hackerbooks.org/';
const CACHE_DIR = join(ROOT, '_stage', 'hn-books');
const CACHE_BOOKS = join(CACHE_DIR, 'books-top.json');
const CACHE_META = join(CACHE_DIR, 'meta.json');
const OUT_JS = join(ROOT, 'content', 'sources', 'hackernews-books.js');
const OUT_MD = join(ROOT, 'docs', 'HackerNews书源-候选池.md');

/* ------------------------------------------------------------------
 * HN 主题 → 站点 category
 * 只映射七大在用主题；未列出的主题 = 不收（含退役主题与超配主题）
 * ------------------------------------------------------------------ */
const TOPIC_MAP = {
  'ai-ml': 'ai',
  programming: 'technology',
  'computer-science': 'technology',
  'software-engineering': 'technology',
  systems: 'technology',
  web: 'technology',
  security: 'technology',
  hardware: 'technology',
  'lisp-functional': 'technology',
  'data-statistics': 'technology',
  math: 'technology',
  physics: 'technology',
  biology: 'technology',
  'popular-science': 'technology',
  history: 'history',
  philosophy: 'philosophy',
  fiction: 'literature',
  'science-fiction': 'literature',
  fantasy: 'literature'
};

// 明确不收的主题（写出来是为了报告里能解释「为什么这些书没进池」）
const EXCLUDED_TOPICS = {
  psychology: '心理学已严重超配（全库 28 本 / 每日推荐 15 次）',
  'politics-society': '社会与文明不在本次要求主题内',
  business: '商业已退役',
  economics: '经济学已退役',
  startups: '商业/创业已退役',
  productivity: '自助/效率类，认知增量不足',
  biography: '传记类，主题无法归入七大主题',
  religion: '宗教类，不在七大主题内',
  lifestyle: '生活方式类，不在七大主题内',
  arts: '艺术/游戏/媒介，不在七大主题内',
  writing: '写作技巧类，非散文传统',
  design: '设计/UX，偏操作而非认知框架',
  other: '未分类，无法判定主题'
};

// 分类优先序：先命中者为准（ai 最具体，其次技术，再人文）
const CAT_PRIORITY = ['ai', 'technology', 'history', 'philosophy', 'literature', 'essays', 'education'];

const MIN_YEARS = 5; // 经典性门槛①：首次出版距今 ≥ 5 年
const MAX_PER_CAT = 40;

/* ------------------------------------------------------------------
 * 标题归一化（与 anzm-source.mjs 保持同一套规则）
 * ------------------------------------------------------------------ */
const norm = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/[\s\u3000]+/g, '')
    .replace(/[《》〈〉「」『』()（）[\]【】:：,，.。!！?？'"“”‘’·、\-—_/|]/g, '');
const coreOf = (s) => String(s || '').split(/[：:—]/)[0];

const NOW_YEAR = new Date().getFullYear();
const MAX_YEAR = NOW_YEAR - MIN_YEARS;

/* ------------------------------------------------------------------
 * 抓取
 * ------------------------------------------------------------------ */
async function getText(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return await res.text();
}

async function fetchAssets(offline) {
  if (offline) {
    if (!existsSync(CACHE_BOOKS)) throw new Error('缓存不存在，去掉 --offline 重跑');
    return { books: JSON.parse(readFileSync(CACHE_BOOKS, 'utf8')), meta: existsSync(CACHE_META) ? JSON.parse(readFileSync(CACHE_META, 'utf8')) : null, cached: true };
  }
  const html = await getText(SITE);
  const pick = (key) => {
    const m = html.match(new RegExp(`"${key}":"([^"]+)"`));
    return m ? m[1] : null;
  };
  const booksPath = pick('top');
  const metaPath = pick('meta');
  if (!booksPath) throw new Error('首页未找到 books-top 资源路径（站点结构可能变更）');

  const books = JSON.parse(await getText(new URL(booksPath, SITE).href));
  const meta = metaPath ? JSON.parse(await getText(new URL(metaPath, SITE).href)) : null;

  if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(CACHE_BOOKS, JSON.stringify(books), 'utf8');
  if (meta) writeFileSync(CACHE_META, JSON.stringify(meta), 'utf8');
  return { books, meta, cached: false };
}

/* ------------------------------------------------------------------
 * 主题映射
 * ------------------------------------------------------------------ */
function mapCategory(topics) {
  const mapped = new Set();
  const excludedHits = [];
  for (const t of topics || []) {
    if (TOPIC_MAP[t]) mapped.add(TOPIC_MAP[t]);
    else if (EXCLUDED_TOPICS[t]) excludedHits.push(t);
  }
  if (!mapped.size) return { category: null, excludedHits };
  const category = CAT_PRIORITY.find((c) => mapped.has(c)) || [...mapped][0];
  return { category, excludedHits };
}

/* ------------------------------------------------------------------
 * 主流程
 * ------------------------------------------------------------------ */
const args = new Set(process.argv.slice(2));
const MODE = args.has('--brief') ? 'brief' : args.has('--json') ? 'json' : args.has('--check') ? 'check' : 'build';

async function main() {
  /* ---- 只读模式：直接读已有候选池 ---- */
  if (MODE === 'brief' || MODE === 'json') {
    if (!existsSync(OUT_JS)) {
      console.log('候选池尚未生成，先跑 node src/hn-books-source.mjs');
      return;
    }
    const mod = await import(`file://${OUT_JS.replace(/\\/g, '/')}?t=${Date.now()}`);
    const list = mod.candidates || [];
    if (MODE === 'json') {
      console.log(JSON.stringify({ source: mod.source, candidates: list }, null, 2));
      return;
    }
    console.log(`【Hacker News 书源候选池】${mod.source.generated_at} 生成 ｜ 候选 ${list.length} 本\n`);
    const byCat = new Map();
    for (const b of list) {
      if (!byCat.has(b.category)) byCat.set(b.category, []);
      byCat.get(b.category).push(b);
    }
    for (const cat of CAT_PRIORITY) {
      const rows = byCat.get(cat);
      if (!rows || !rows.length) continue;
      console.log(`── ${cat}（${rows.length} 本）──`);
      rows.slice(0, 12).forEach((b, i) => {
        console.log(`  ${String(i + 1).padStart(2)}. ${b.title_en} ｜ ${b.author_en || '作者待核'} ｜ ${b.year ?? '年份待核'} ｜ 独立提及 ${b.hn_users} 人`);
      });
      if (rows.length > 12) console.log(`  … 其余 ${rows.length - 12} 本见 docs/HackerNews书源-候选池.md`);
      console.log('');
    }
    return;
  }

  /* ---- 构建模式 ---- */
  const { books, meta, cached } = await fetchAssets(args.has('--offline'));
  console.log(`数据源：${cached ? '本地缓存' : 'hackerbooks.org'} ｜ top 榜 ${books.length} 本 ｜ 数据生成日 ${meta?.generated || '未知'}`);

  const data = await loadData();
  const site = data.books.map((b) => ({
    slug: b.slug,
    title: b.title_zh || b.title_en || b.slug,
    nt: [b.title_zh, b.title_en].filter(Boolean).map(norm),
    nc: [b.title_zh, b.title_en].filter(Boolean).map((t) => norm(coreOf(t)))
  }));
  console.log(`全库：${site.length} 本`);

  const kept = [];
  const excluded = [];
  const stat = { no_theme: 0, too_new: 0, no_year: 0, dup: 0 };

  for (const b of books) {
    const title = String(b.t || '').trim();
    if (!title) continue;
    const authors = Array.isArray(b.a) ? b.a.filter(Boolean) : [];
    const year = Number.isFinite(b.y) ? b.y : null;
    const { category, excludedHits } = mapCategory(b.tp);

    if (!category) {
      stat.no_theme++;
      excluded.push({ title, year, reason: '主题不在七大在用主题', topics: b.tp || [] });
      continue;
    }
    if (year === null) {
      stat.no_year++;
      excluded.push({ title, year, reason: '出版年缺失，无法核验 5 年门槛', topics: b.tp || [] });
      continue;
    }
    if (year > MAX_YEAR) {
      stat.too_new++;
      excluded.push({ title, year, reason: `不足 ${MIN_YEARS} 年（${year} > ${MAX_YEAR}）`, topics: b.tp || [] });
      continue;
    }

    // 与全库去重
    const ct = norm(title);
    const cc = norm(coreOf(title));
    let hit = null;
    let reason = '';
    for (const s of site) {
      for (let i = 0; i < s.nt.length; i++) {
        const st = s.nt[i];
        if (st === ct) { hit = s; reason = '标题完全一致'; break; }
        if (ct.length >= 3 && st.length >= 3 && (st.includes(ct) || ct.includes(st))) {
          hit = s; reason = `标题互相包含（站内：${s.title}）`; break;
        }
        if (cc.length >= 3 && s.nc[i].length >= 3 && (s.nc[i].includes(cc) || cc.includes(s.nc[i]))) {
          hit = s; reason = `主标题互相包含（站内：${s.title}）`; break;
        }
      }
      if (hit) break;
    }
    if (hit) {
      stat.dup++;
      excluded.push({ title, year, reason, site_slug: hit.slug, site_title: hit.title, topics: b.tp || [] });
      continue;
    }

    kept.push({
      title_en: title,
      title_zh: null,
      author_en: authors.length ? authors.join(' & ') : null,
      author_zh: null,
      year,
      category,
      hn_topics: b.tp || [],
      hn_users: b.u ?? 0,
      hn_mentions: b.n ?? 0,
      hn_score: b.s ?? null,
      first_mention_year: b.f ?? null,
      last_mention_year: b.l ?? null,
      openlibrary_id: b.id || null,
      needs_author: !authors.length
    });
  }

  // 按分类截断（保留独立提及人数最高的）
  const byCat = new Map();
  for (const b of kept) {
    if (!byCat.has(b.category)) byCat.set(b.category, []);
    byCat.get(b.category).push(b);
  }
  const capped = [];
  for (const cat of CAT_PRIORITY) {
    const rows = (byCat.get(cat) || []).sort((x, y) => y.hn_users - x.hn_users);
    capped.push(...rows.slice(0, MAX_PER_CAT));
  }
  capped.sort((a, b) => b.hn_users - a.hn_users);

  const catCount = {};
  for (const b of capped) catCount[b.category] = (catCount[b.category] || 0) + 1;

  const sourceMeta = {
    source: 'hackernews-books',
    label_zh: 'Hacker Books（Hacker News 评论提及书目）',
    label_en: 'Hacker Books — books mentioned in Hacker News comments',
    url: SITE,
    generated_at: new Date().toISOString().slice(0, 10),
    data_generated: meta?.generated || null,
    dataset: meta || null,
    ranking_metric: 'hn_users = 独立提及人数（不同评论者数），非提及次数',
    classic_gate_note:
      'HN 提及人数**不属于**任务规定的权威认可清单（豆瓣/Goodreads/维基/奖项/课程/权威书评/微信读书/Scholar），只能作选题线索与热度参考，不得用于凑经典性门槛的两项证据。',
    data_quality_note:
      'year / author 取自 OpenLibrary 元数据，**已知存在错误**（实测 Future Shock 标 1801、Beyond Good and Evil 标 2009）。入库前必须重新核验出版年与作者，不得直接采信本池字段。',
    coverage_gap:
      'essays 与 education 两个主题在本源中无可用候选（HN 主题体系无对应类目）。这两个主题仍须走原检索流程。',
    manual_risk_note:
      '池内技术类大量为操作手册 / 教科书（Clean Code、Code Complete、Cracking the Coding Interview、Introduction to Algorithms 等），命中任务「排除清单④」者一律不得选用。',
    year_filter: `出版年 ≤ ${MAX_YEAR}（距今 ≥ ${MIN_YEARS} 年）`,
    topic_map: TOPIC_MAP,
    excluded_topics: EXCLUDED_TOPICS,
    stats: {
      scanned: books.length,
      kept: capped.length,
      excluded_no_theme: stat.no_theme,
      excluded_too_new: stat.too_new,
      excluded_no_year: stat.no_year,
      excluded_duplicate: stat.dup,
      by_category: catCount
    }
  };

  if (MODE === 'check') {
    console.log('\n=== 去重与过滤体检（不写文件）===');
    console.log(`扫描 ${books.length} 本 → 候选 ${capped.length} 本`);
    console.log(`  主题不符 ${stat.no_theme} ｜ 不足 ${MIN_YEARS} 年 ${stat.too_new} ｜ 年份缺失 ${stat.no_year} ｜ 与全库重复 ${stat.dup}`);
    console.log('  分类分布：', JSON.stringify(catCount));
    return;
  }

  /* ---- 写候选池 JS ---- */
  const header = `/**
 * 每日推荐 · 参考源：Hacker Books（Hacker News 评论提及书目）
 * ------------------------------------------------------------------
 * ⚠️ 本文件由 \`node src/hn-books-source.mjs\` 生成，请勿手改。
 * 它不是书单（不会被站点构建加载），而是「每日推荐」任务的候选池：
 * 已按七大在用主题过滤、按「独立提及人数」排序、并与全库做过标题去重。
 *
 * 数据源：https://hackerbooks.org/（${meta?.generated || '日期未知'} 生成，top 榜 ${books.length} 本）
 * 刷新：node src/hn-books-source.mjs
 *
 * 🔴 本池只提供选题线索，**不提供经典性证据**。入库前仍须按任务规定的
 *    权威认可清单（豆瓣 / Goodreads / 维基 / 奖项 / 课程 / 权威书评 / 微信读书 / Scholar）
 *    取证 ≥2 项，并跑 ingest-books.mjs --existing 二次去重。
 * 生成日期：${sourceMeta.generated_at} ｜ 候选 ${capped.length} 本 ｜ 已排除 ${stat.no_theme + stat.too_new + stat.no_year + stat.dup} 本
 */
export const source = ${JSON.stringify(sourceMeta, null, 2)};

export const candidates = ${JSON.stringify(capped, null, 2)};
`;
  writeFileSync(OUT_JS, header, 'utf8');

  /* ---- 写报告 ---- */
  const lines = [];
  lines.push('# Hacker Books 书源 · 候选池审阅报告');
  lines.push('');
  lines.push(`> 生成时间：${sourceMeta.generated_at} ｜ 数据源生成日：${meta?.generated || '未知'}`);
  lines.push(`> 数据源：<${SITE}> ｜ 机器可读池：\`content/sources/hackernews-books.js\``);
  lines.push('');
  lines.push('## 一、数据源是什么');
  lines.push('');
  if (meta) {
    lines.push(`Hacker Books 抓取 Hacker News 全站评论（2007–${meta.last_year}），把评论里提到的书聚合起来，`);
    lines.push(`按「多少个**不同的人**提到过」排序。当前数据集：**${meta.n_books.toLocaleString()} 本书** / `);
    lines.push(`**${meta.n_mentions.toLocaleString()} 条提及** / ${meta.n_commenters.toLocaleString()} 位独立评论者 / `);
    lines.push(`其中 ${meta.n_recommend_mentions.toLocaleString()} 条属推荐性提及。`);
    lines.push('');
    lines.push('它的价值在于：**这是一份大规模、去中心化的「从业者用脚投票」清单**，');
    lines.push('比任何编辑榜单更难被营销操纵；短板是它天然偏向英文技术圈，');
    lines.push('且「被很多人提到」≠「经典」，畅销的操作手册同样会被反复提及。');
  } else {
    lines.push('（本次未取到 meta 数据，统计口径见站点首页。）');
  }
  lines.push('');
  lines.push('## 二、过滤规则');
  lines.push('');
  lines.push('| 步骤 | 规则 |');
  lines.push('|---|---|');
  lines.push(`| 主题映射 | 仅保留能映射到七大在用主题的书（ai / technology / history / philosophy / literature / essays / education） |`);
  lines.push(`| 排除主题 | ${Object.keys(EXCLUDED_TOPICS).join(' / ')} |`);
  lines.push(`| 时间门槛 | 出版年 ≤ ${MAX_YEAR}（距今 ≥ ${MIN_YEARS} 年）；年份缺失一律不收 |`);
  lines.push('| 去重 | 与全库比对标题（完全一致 / 互相包含 / 主标题互相包含） |');
  lines.push(`| 分类上限 | 每类最多 ${MAX_PER_CAT} 本，按独立提及人数取前 ${MAX_PER_CAT} |`);
  lines.push('');
  lines.push('### 本次过滤结果');
  lines.push('');
  lines.push('| 指标 | 数量 |');
  lines.push('|---|---|');
  lines.push(`| 扫描 top 榜 | ${books.length} |`);
  lines.push(`| 进入候选池 | **${capped.length}** |`);
  lines.push(`| 主题不在七大主题 | ${stat.no_theme} |`);
  lines.push(`| 不足 ${MIN_YEARS} 年 | ${stat.too_new} |`);
  lines.push(`| 年份缺失 | ${stat.no_year} |`);
  lines.push(`| 与全库重复 | ${stat.dup} |`);
  lines.push('');
  lines.push('## 三、候选分布');
  lines.push('');
  lines.push('| 分类 | 候选数 | 最高独立提及人数 |');
  lines.push('|---|---|---|');
  for (const cat of CAT_PRIORITY) {
    const rows = capped.filter((b) => b.category === cat);
    if (!rows.length) continue;
    lines.push(`| ${cat} | ${rows.length} | ${rows[0].hn_users} |`);
  }
  lines.push('');
  lines.push('## 四、各分类 Top 15');
  lines.push('');
  for (const cat of CAT_PRIORITY) {
    const rows = capped.filter((b) => b.category === cat).slice(0, 15);
    if (!rows.length) continue;
    lines.push(`### ${cat}`);
    lines.push('');
    lines.push('| # | 书名 | 作者 | 年份 | 独立提及 | 提及次数 | HN 主题 |');
    lines.push('|---|---|---|---|---|---|---|');
    rows.forEach((b, i) => {
      lines.push(`| ${i + 1} | ${b.title_en} | ${b.author_en || '待核'} | ${b.year} | ${b.hn_users} | ${b.hn_mentions} | ${(b.hn_topics || []).join(', ')} |`);
    });
    lines.push('');
  }
  lines.push('## 五、这个源的三条硬缺陷（使用前必读）');
  lines.push('');
  lines.push('1. **元数据不可直接采信。** `year` / `author` 来自 OpenLibrary，实测存在明显错误：');
  lines.push('   `Future Shock`（1970）被标为 1801，`Beyond Good and Evil`（1886）被标为 2009。');
  lines.push('   入库前必须用出版社 / 维基 / 豆瓣重新核验年份与作者。');
  lines.push('2. **「被很多人提到」≠「经典」。** top 榜前列大量是操作手册与教科书');
  lines.push('   （Clean Code、Code Complete、Cracking the Coding Interview、Introduction to Algorithms），');
  lines.push('   这类命中任务「排除清单④」（纯操作手册 / 只有罗列没有观点），一律不得选用。');
  lines.push('3. **两个主题无覆盖。** `essays`（经典散文）与 `education`（教育与反思）在本源无对应类目，');
  lines.push('   这两个主题仍须走原检索流程，不要指望本池。');
  lines.push('');
  lines.push('## 六、使用纪律');
  lines.push('');
  lines.push('1. **本池只给线索，不给证据。** HN 提及人数不在任务规定的权威认可清单内，');
  lines.push('   经典性仍须按「豆瓣 / Goodreads / 维基 / 奖项 / 课程 / 权威书评 / 微信读书 / Scholar」取证 ≥2 项。');
  lines.push('2. **主题轮转优先。** 今日主题由 `node src/coverage.mjs` 机械决定，本池不得反向影响选题主题。');
  lines.push('3. **只在主题匹配时使用。** 本池以 technology / ai / literature 为主，');
  lines.push('   若今日主题是哲学或历史，仍优先用安争鸣候选池（那边人文学科更厚）。');
  lines.push('4. **英文书名需核中译本。** 池内 `title_zh` 一律为 null，入库前须查证是否有正式中文版；');
  lines.push('   无中译本时，按任务「红线」只写英文原名，不自拟中文名。');
  lines.push('5. **作者必须核。** `needs_author: true` 的条目须先查实作者。');
  lines.push('');
  writeFileSync(OUT_MD, lines.join('\n'), 'utf8');

  console.log(`\n✅ 候选池已生成：${capped.length} 本 → content/sources/hackernews-books.js`);
  console.log(`   排除：主题不符 ${stat.no_theme} ｜ 不足 ${MIN_YEARS} 年 ${stat.too_new} ｜ 年份缺失 ${stat.no_year} ｜ 重复 ${stat.dup}`);
  console.log(`   分类分布：${JSON.stringify(catCount)}`);
  console.log(`   报告：docs/HackerNews书源-候选池.md`);
}

main().catch((e) => {
  console.error('❌ 失败：', e.message);
  process.exitCode = 1;
});
