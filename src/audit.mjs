/**
 * 多端响应式审计 + OG 图生成
 * 用法：
 *   node src/audit.mjs              # 审计 dist 站点
 *   node src/audit.mjs --og         # 额外生成 public/og.png
 *
 * 检查项（只报确定性缺陷，不做审美判断）：
 *   1. 横向溢出（scrollWidth > clientWidth），并列出越界元素
 *   2. H1 标题孤行（折行后末行 ≤ 1 字）
 *   3. 可点区域过小（独立交互元素宽或高 < 32px）
 */
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SHOTS = join(ROOT, '_audit');

const require = createRequire(import.meta.url);
const PW_ROOTS = [
  'C:/Users/shand/.workbuddy-ai/binaries/node/workspace/node_modules/playwright-core',
  'C:/Users/shand/WorkBuddy AI/Claw/node_modules/playwright-core'
];
const EXECUTABLES = [
  'C:/Users/shand/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe'
];

const WIDTHS = [320, 360, 375, 393, 412, 768, 1024, 1440];
const ROUTES = [
  '/zh/',
  '/zh/library/',
  '/zh/books/the-black-swan/',
  '/zh/books/liberalism/',
  '/zh/categories/ai/',
  '/zh/categories/literature/',
  '/zh/topics/risk/',
  '/zh/authors/nassim-nicholas-taleb/',
  '/zh/paths/ai-for-beginners/',
  '/zh/articles/the-reading-list-for-the-ai-era/',
  '/zh/my-reading/',
  '/zh/search/?q=%E6%8A%95%E8%B5%84',
  '/en/library/',
  '/en/books/animal-farm/'
];

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain'
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const clean = decodeURIComponent((req.url || '/').split('?')[0]);
      let file = join(DIST, clean);
      if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
      if (!existsSync(file)) {
        res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
        res.end('not found');
        return;
      }
      res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(readFileSync(file));
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

const probe = (width) => `(() => {
  const w = ${width};
  const de = document.documentElement;
  const overflow = de.scrollWidth - de.clientWidth;
  const offenders = [];
  if (overflow > 0) {
    document.querySelectorAll('body *').forEach((el) => {
      if (el instanceof SVGElement) return;
      const r = el.getBoundingClientRect();
      if (r.width <= 2 || r.height <= 2) return;
      if (r.right > w + 1 || r.left < -1) {
        offenders.push({
          sel: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : ''),
          left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width)
        });
      }
    });
  }
  const seen = new Set();
  const uniq = offenders.filter((o) => { const k = o.sel + o.right; if (seen.has(k)) return false; seen.add(k); return true; }).slice(0, 8);

  let orphan = null;
  const h1 = document.querySelector('h1');
  if (h1) {
    const range = document.createRange();
    range.selectNodeContents(h1);
    const rects = Array.from(range.getClientRects()).filter((r) => r.width > 1);
    if (rects.length > 1) {
      const last = rects[rects.length - 1];
      const chars = (h1.textContent || '').trim().length;
      const avg = h1.getBoundingClientRect().width / Math.max(chars, 1);
      const lastChars = Math.round(last.width / Math.max(avg, 1));
      if (lastChars <= 1) orphan = { text: (h1.textContent || '').trim().slice(0, 40), lastWidth: Math.round(last.width) };
    }
  }

  const small = [];
  document.querySelectorAll('a, button, select, input[type="search"]').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width <= 2 || r.height <= 2) return;
    const style = getComputedStyle(el);
    if (style.display === 'inline' && el.tagName === 'A') return;
    if (r.width < 32 || r.height < 32) {
      small.push({ sel: el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\\s+/)[0] : ''), w: Math.round(r.width), h: Math.round(r.height) });
    }
  });
  const seenS = new Set();
  const smallUniq = small.filter((s) => { const k = s.sel; if (seenS.has(k)) return false; seenS.add(k); return true; }).slice(0, 6);

  return { overflow, offenders: uniq, orphan, small: smallUniq, title: document.title };
})()`;

async function main() {
  const wantOg = process.argv.includes('--og');
  const pwRoot = PW_ROOTS.find((p) => existsSync(p));
  if (!pwRoot) throw new Error('未找到 playwright-core');
  const { chromium } = require(pwRoot);
  const exe = EXECUTABLES.find((p) => existsSync(p));

  const browser = await chromium.launch({
    executablePath: exe,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none']
  });

  /* ---------- OG 图 ---------- */
  if (wantOg) {
    const card = join(ROOT, 'src', 'og-card.html');
    if (existsSync(card)) {
      const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
      const pg = await ctx.newPage();
      await pg.goto('file:///' + card.replace(/\\/g, '/'));
      await pg.waitForTimeout(600);
      const buf = await pg.screenshot({ type: 'png' });
      writeFileSync(join(ROOT, 'public', 'og.png'), buf);
      console.log('· 已生成 public/og.png (1200×630)');
      await ctx.close();
    }
  }

  if (!existsSync(DIST)) {
    console.log('dist 不存在，先运行 npm run build');
    await browser.close();
    return;
  }

  const { server, port } = await startServer();
  const base = `http://127.0.0.1:${port}`;
  mkdirSync(SHOTS, { recursive: true });

  const rows = [];
  const problems = [];

  for (const width of WIDTHS) {
    const ctx = await browser.newContext({
      viewport: { width, height: 812 },
      deviceScaleFactor: 1,
      isMobile: width < 768,
      hasTouch: width < 768
    });
    const pg = await ctx.newPage();
    for (const route of ROUTES) {
      try {
        await pg.goto(base + route, { waitUntil: 'load', timeout: 20000 });
        await pg.waitForTimeout(260);
        const res = await pg.evaluate(probe(width));
        rows.push({ width, route, overflow: res.overflow, offenders: res.offenders.length });
        if (res.overflow > 0) {
          problems.push(`横向溢出 ${res.overflow}px @${width} ${route}`);
          res.offenders.forEach((o) => problems.push(`    ↳ ${o.sel}  left=${o.left} right=${o.right} w=${o.width}`));
        }
        if (res.orphan) problems.push(`标题孤行 @${width} ${route}：「${res.orphan.text}」末行宽 ${res.orphan.lastWidth}px`);
        if (res.small.length) {
          res.small.forEach((s) => problems.push(`可点区域过小 @${width} ${route}：${s.sel} ${s.w}×${s.h}`));
        }
      } catch (err) {
        problems.push(`加载失败 @${width} ${route}：${err.message}`);
      }
    }
    await ctx.close();
  }

  /* ---------- 截图（关键页面，三档） ---------- */
  for (const width of [390, 768, 1440]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const pg = await ctx.newPage();
    for (const [name, route] of [['home', '/zh/'], ['library', '/zh/library/'], ['book', '/zh/books/the-black-swan/'], ['path', '/zh/paths/ai-for-beginners/']]) {
      await pg.goto(base + route, { waitUntil: 'load' });
      await pg.waitForTimeout(400);
      await pg.screenshot({ path: join(SHOTS, `${name}-${width}.png`) });
    }
    await ctx.close();
  }

  await browser.close();
  server.close();

  /* ---------- 汇总 ---------- */
  const totalOverflow = rows.filter((r) => r.overflow > 0).length;
  console.log('\n宽度  路由                                   溢出');
  for (const r of rows) {
    if (r.overflow > 0 || r.width === WIDTHS[0]) {
      console.log(`${String(r.width).padEnd(6)}${r.route.padEnd(40)}${r.overflow > 0 ? '✗ ' + r.overflow + 'px' : '✓'}`);
    }
  }
  console.log(`\n共 ${rows.length} 个「宽度 × 路由」组合，${totalOverflow} 个存在横向溢出。`);
  if (problems.length) {
    console.log(`\n发现 ${problems.length} 条问题：`);
    for (const p of problems.slice(0, 60)) console.log('  ' + p);
  } else {
    console.log('✅ 无横向溢出、无标题孤行、无可点区域过小问题。');
  }
  console.log(`\n截图目录：${SHOTS}\n`);
  process.exitCode = totalOverflow > 0 ? 1 : 0;
}

main().catch((err) => { console.error(err); process.exit(2); });
