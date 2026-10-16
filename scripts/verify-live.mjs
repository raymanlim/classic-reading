#!/usr/bin/env node
/**
 * verify-live.mjs — 线上站点一键自检（纯 HTTP，零依赖，无需浏览器）
 * ==================================================================
 * 用途：**改完内容、推送之后，用一条命令自证「没搞砸」**。
 *       把 AGENTS.md §3.2「发布后自检」里散落的检查项收拢成可执行断言，
 *       让任何 Agent（含云端沙箱）跑一次就有明确结论，不必逐条手写 curl。
 *
 * 与 scripts/verify-search-live.mjs 的分工：
 *   · verify-search-live.mjs —— **真实浏览器**跑客户端 JS（搜索功能冒烟），需要 playwright-core；
 *   · verify-live.mjs（本脚本）—— **纯 HTTP** 验「内容上没上线、结构对不对、域名配没配错」。
 *     零依赖、任何沙箱都能跑，适合做推送后的第一道门禁。两者互补，不重复。
 *
 * 用法：
 *   node scripts/verify-live.mjs                      # 打 src/site.config.js 的 SITE_URL
 *   node scripts/verify-live.mjs <baseUrl>            # 指定域名（本地 http://127.0.0.1:4321 也可）
 *   node scripts/verify-live.mjs --date 2026-10-16    # 额外校验「当天内容已上线」
 *   node scripts/verify-live.mjs --date today         # 当天（按 UTC+8 判定）
 *   node scripts/verify-live.mjs --quick              # 只跑路由 + 域名（跳过与本地数据的比对）
 *
 * 检查项：
 *   A 关键路由可达（中英各页 + robots + sitemap）
 *   B 域名一致性 —— canonical / robots / sitemap 是否都指向被测域名
 *      （防「换了域名忘了改 SITE_URL」这类静默错误）
 *   C 规模一致性 —— 线上书库卡片数 vs 本地 content/ 真实数据（同一数据层 loadData()）
 *   D 当天内容（--date）—— 文章 JSON-LD datePublished、笔记排在最上方、详情页 200
 *   E 封面抽查 —— 线上 /assets/covers/<slug>.webp 是否可达
 *
 * 退出码：全部通过 0，任一失败 1。
 *
 * ⚠️ 本机网络说明：Node 内置 fetch（undici）**不走 HTTP_PROXY 环境变量**，
 *    因此不受本机代理（127.0.0.1:3066）干扰 —— 这是刻意选它而非 curl 的原因
 *    （本机裸 curl 会被代理注入 502，必须加 --noproxy '*'）。
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

/* ---------------- 参数解析 ---------------- */
const argv = process.argv.slice(2);
let baseArg = '';
let dateArg = '';
let quick = false;
for (let i = 0; i < argv.length; i += 1) {
  const a = argv[i];
  if (a === '--quick') quick = true;
  else if (a === '--date') dateArg = argv[++i] || '';
  else if (a.startsWith('--date=')) dateArg = a.slice(7);
  else if (!a.startsWith('--')) baseArg = a;
}

/* 默认域名取 SITE_URL —— 与构建期 canonical 同源，能直接暴露「域名没对齐」 */
function readSiteUrl() {
  try {
    const src = readFileSync(join(ROOT, 'src', 'site.config.js'), 'utf8');
    const m = /SITE_URL\s*=\s*['"]([^'"]+)['"]/.exec(src);
    return m ? m[1] : '';
  } catch {
    return '';
  }
}
const BASE = (baseArg || readSiteUrl() || '').replace(/\/+$/, '');
if (!BASE) {
  console.error('✗ 无法确定目标域名：请传 <baseUrl>，或确认 src/site.config.js 里有 SITE_URL');
  process.exit(2);
}

/* 业务时区 UTC+8（与站点一致） */
function bizToday() {
  const d = new Date(Date.now() + 8 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}
let DATE = dateArg === 'today' ? bizToday() : dateArg;
if (DATE && !/^\d{4}-\d{2}-\d{2}$/.test(DATE)) {
  console.error(`✗ --date 需为 YYYY-MM-DD 或 today，收到：${dateArg}`);
  process.exit(2);
}
/* 中文页把日期渲染成「2026 年 10 月 16 日」（月/日不补零） */
function zhDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${y} 年 ${m} 月 ${d} 日`;
}
/* 英文页渲染成「October 16, 2026」——手工拼，不用 Intl（避免 locale 数据差异） */
const EN_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
function enDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${EN_MONTHS[m - 1]} ${d}, ${y}`;
}

/* ---------------- 断言框架 ---------------- */
const results = [];
function check(name, ok, detail) {
  results.push({ name, ok, detail });
  console.log(`  ${ok ? '✅' : '❌'} ${name}${detail ? ' — ' + detail : ''}`);
}
function skip(name, why) {
  results.push({ name, ok: true, skipped: true, detail: why });
  console.log(`  ⏭️  ${name} — 跳过（${why}）`);
}

/* ---------------- HTTP ---------------- */
async function get(path) {
  const url = path.startsWith('http') ? path : BASE + path;
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: { 'User-Agent': 'classics-library-verify/1.0' }
    });
    const buf = Buffer.from(await res.arrayBuffer());
    return { ok: true, status: res.status, bytes: buf.length, text: buf.toString('utf8'), url };
  } catch (e) {
    return { ok: false, status: 0, bytes: 0, text: '', url, error: e.message };
  }
}

console.log(`\n▶ 目标：${BASE}`);
console.log(`  日期：${DATE || '（未指定，跳过当天内容校验）'}${quick ? '  · --quick 模式' : ''}\n`);

/* ================= A. 关键路由可达 ================= */
console.log('[A] 关键路由可达');
const ROUTES = [
  '/zh/',
  '/en/',
  '/zh/library/',
  '/en/library/',
  '/zh/articles/',
  '/en/articles/',
  '/zh/notes/',
  '/en/notes/',
  '/robots.txt',
  '/sitemap.xml'
];
const pages = {};
for (const p of ROUTES) {
  const r = await get(p);
  pages[p] = r;
  check(`GET ${p}`, r.status === 200, r.ok ? `HTTP ${r.status} · ${r.bytes} B` : `请求失败：${r.error}`);
}

/* ================= B. 域名一致性 ================= */
console.log('\n[B] 域名一致性（canonical / robots / sitemap）');
const home = pages['/zh/'];
if (home?.status === 200) {
  const m = /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/.exec(home.text);
  const canonical = m ? m[1] : '';
  check(
    'canonical 指向被测域名',
    canonical.startsWith(BASE + '/'),
    canonical ? canonical : '（页面里没有 canonical）'
  );
} else {
  skip('canonical 检查', '/zh/ 不可达');
}

const robots = pages['/robots.txt'];
if (robots?.status === 200) {
  const m = /Sitemap:\s*(\S+)/i.exec(robots.text);
  check('robots.txt 的 Sitemap 指向被测域名', Boolean(m) && m[1].startsWith(BASE), m ? m[1] : '（无 Sitemap 行）');
} else {
  skip('robots.txt 检查', '不可达');
}

const sm = pages['/sitemap.xml'];
if (sm?.status === 200) {
  const locs = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]);
  const bad = locs.filter((u) => !u.startsWith(BASE));
  check(
    `sitemap 全部 URL 指向被测域名（共 ${locs.length} 条）`,
    locs.length > 0 && bad.length === 0,
    bad.length ? `越界示例：${bad.slice(0, 2).join(' , ')}` : '全部一致'
  );
} else {
  skip('sitemap 检查', '不可达');
}

/* ================= C. 规模一致性（对本地真实数据） ================= */
console.log('\n[C] 规模一致性（线上 vs 本地 content/）');
let data = null;
if (!quick) {
  try {
    const { loadData } = await import(new URL('../src/lib/data.js', import.meta.url).href);
    data = await loadData();
  } catch (e) {
    skip('规模一致性', `本地数据层不可用：${e.message}`);
  }
} else {
  skip('规模一致性', '--quick');
}

const lib = pages['/zh/library/'];
if (data && lib?.status === 200) {
  const liveBooks = (lib.text.match(/class="book-card__link"/g) || []).length;
  const liveCurated = (lib.text.match(/data-source="curated"/g) || []).length;
  check(
    `线上书籍卡片数 = 本地 ${data.books.length}`,
    liveBooks === data.books.length,
    `线上 ${liveBooks}`
  );
  check(
    `线上策展经典数 = 本地 ${data.curatedBooks.length}`,
    liveCurated === data.curatedBooks.length,
    `线上 ${liveCurated}`
  );
} else if (!data && lib?.status === 200) {
  /* 本地数据不可用时至少确认卡片存在 */
  const liveBooks = (lib.text.match(/class="book-card__link"/g) || []).length;
  check('线上书库有书籍卡片', liveBooks > 0, `${liveBooks} 张`);
}

/* ================= D. 当天内容（--date） ================= */
if (DATE) {
  console.log(`\n[D] 当天内容（${DATE}）`);

  /* D1 文章：JSON-LD blogPost[0] 即最新一篇 */
  for (const [lang, path] of [['zh', '/zh/articles/'], ['en', '/en/articles/']]) {
    const r = pages[path];
    if (r?.status !== 200) {
      skip(`${lang} 文章 JSON-LD`, `${path} 不可达`);
      continue;
    }
    const m = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(r.text);
    let newest = null;
    if (m) {
      try {
        const ld = JSON.parse(m[1]);
        newest = (ld.blogPost || [])[0] || null;
      } catch { /* 解析失败按未命中处理 */ }
    }
    check(
      `${lang} 最新文章 datePublished = ${DATE}`,
      Boolean(newest) && newest.datePublished === DATE,
      newest ? `${newest.datePublished} ·《${newest.headline}》` : '（未取到 blogPost）'
    );
    if (newest?.url) {
      const detail = await get(newest.url);
      check(`${lang} 最新文章详情页可达`, detail.status === 200, `HTTP ${detail.status} · ${detail.bytes} B`);
    }
  }

  /* D2 笔记：新笔记必须排在最上方（列表按日期倒序，第一条即最新） */
  for (const [lang, path, expect] of [
    ['zh', '/zh/notes/', zhDate(DATE)],
    ['en', '/en/notes/', enDate(DATE)]
  ]) {
    const r = pages[path];
    if (r?.status !== 200) {
      skip(`${lang} 笔记排序`, `${path} 不可达`);
      continue;
    }
    const first = /class="note__date">([^<]*)</.exec(r.text);
    const firstText = first ? first[1].trim() : '';
    check(
      `${lang} 笔记页第一条 = ${expect}`,
      firstText === expect,
      firstText ? `实际「${firstText}」` : '（未取到 note__date）'
    );
  }

  /* D3 编者笔记口吻（新笔记应为「编者笔记」，不是「我的思考」） */
  const zhNotes = pages['/zh/notes/'];
  if (zhNotes?.status === 200) {
    const editorial = (zhNotes.text.match(/编者笔记/g) || []).length;
    const personal = (zhNotes.text.match(/我的思考/g) || []).length;
    check('笔记页存在「编者笔记」条目', editorial > 0, `${editorial} 处`);
    check(
      '「我的思考」处数仍为 7（未被误改）',
      personal === 7,
      `实际 ${personal} 处`
    );
  }
} else {
  console.log('\n[D] 当天内容 — 跳过（未传 --date）');
}

/* ================= E. 封面抽查 ================= */
console.log('\n[E] 封面可达性抽查');
let coverSlugs = [];
if (data) {
  const all = data.books.map((b) => b.slug).filter(Boolean);
  /* 取头、中、尾各 2 本，覆盖程序化封面与真实封面两种形态 */
  coverSlugs = [...new Set([all[0], all[1], all[Math.floor(all.length / 2)], all[Math.floor(all.length / 2) + 1], all[all.length - 1], all[all.length - 2]])].filter(Boolean);
} else if (!quick) {
  skip('封面抽查', '本地数据层不可用，无法取 slug');
} else {
  skip('封面抽查', '--quick');
}
let coverOk = 0;
for (const slug of coverSlugs) {
  const r = await get(`/assets/covers/${slug}.webp`);
  const pass = r.status === 200 && r.bytes > 0;
  if (pass) coverOk += 1;
  check(`封面 /assets/covers/${slug}.webp`, pass, r.ok ? `HTTP ${r.status} · ${r.bytes} B` : `请求失败：${r.error}`);
}
if (coverSlugs.length) {
  console.log(`  （抽查 ${coverOk}/${coverSlugs.length} 通过）`);
}

/* ================= 汇总 ================= */
const failed = results.filter((r) => !r.ok);
const skipped = results.filter((r) => r.skipped);
console.log(`\n${'─'.repeat(56)}`);
if (failed.length === 0) {
  console.log(`✅ 线上自检全部通过（${results.length - skipped.length} 项${skipped.length ? `，跳过 ${skipped.length} 项` : ''}）`);
  console.log(`   目标：${BASE}\n`);
  process.exit(0);
}
console.log(`❌ 线上自检失败 ${failed.length} 项（共 ${results.length} 项）：`);
failed.forEach((f) => console.log(`   · ${f.name}${f.detail ? ' — ' + f.detail : ''}`));
console.log('');
process.exit(1);
