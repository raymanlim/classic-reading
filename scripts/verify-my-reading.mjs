/**
 * 我的阅读页面 —— 客户端渲染验证
 * ------------------------------------------------------------------
 * 背景：/zh/my-reading/ 的列表最终由前端 app.js 重建（render('all')），
 * 服务端渲染的静态分组会被隐藏。因此**必须验证 JS 执行后的 DOM**，
 * 只检查静态 HTML 会得到假阳性。
 *
 * 用法：node _stage/verify-my-reading.mjs
 */
/* ESM 不读 NODE_PATH，故用绝对路径导入托管 workspace 里的 playwright-core。
   该包是 CJS，动态 import 后需从 default 上取命名导出。 */
const pw = await import(
  'file:///C:/Users/shand/.workbuddy-ai/binaries/node/workspace/node_modules/playwright-core/index.js'
);
const chromium = pw.chromium || (pw.default && pw.default.chromium);
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = 'E:/01_Projects/Classics Library/dist';
const EXEC = 'C:/Users/shand/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';
const PORT = 4183;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8'
};

const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let file = join(ROOT, p);
    try {
      if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    } catch {
      file = join(ROOT, p, 'index.html');
    }
    const buf = await readFile(file);
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(buf);
  } catch {
    res.writeHead(404).end('not found');
  }
});

await new Promise((r) => server.listen(PORT, '127.0.0.1', r));

const browser = await chromium.launch({ executablePath: EXEC });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

const failures = [];
const results = [];

for (const lang of ['zh', 'en']) {
  await page.goto(`http://127.0.0.1:${PORT}/${lang}/my-reading/`, { waitUntil: 'networkidle' });

  // 封面是 loading="lazy"，必须滚动到底把所有图片触发加载，否则会得到假「断链」
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));

  // 客户端重建后：静态分组应被隐藏，动态分组应显示
  const staticHidden = await page.locator('[data-static-groups]').evaluate((el) => el.hasAttribute('hidden'));
  const dynVisible = await page.locator('[data-reading-groups]').evaluate((el) => !el.hasAttribute('hidden'));

  const cards = await page.locator('[data-reading-groups] .book-card').count();
  const imgs = await page.locator('[data-reading-groups] .cover__img').count();

  // 聪明的投资者是否渲染出真实封面图
  const target = await page
    .locator('[data-reading-groups] .book-card[data-slug="the-intelligent-investor"] .cover__img')
    .count();

  // 该图片是否真的加载成功（naturalWidth > 0）
  let naturalWidth = 0;
  if (target) {
    naturalWidth = await page
      .locator('[data-reading-groups] .book-card[data-slug="the-intelligent-investor"] .cover__img')
      .evaluate((el) => (el.complete ? el.naturalWidth : 0));
  }

  // 断链检测：所有 cover__img 是否都成功加载
  const broken = await page
    .locator('[data-reading-groups] .cover__img')
    .evaluateAll((els) => els.filter((el) => !el.complete || el.naturalWidth === 0).map((el) => el.getAttribute('src')));

  results.push({ lang, staticHidden, dynVisible, cards, imgs, target, naturalWidth, broken });
  if (!staticHidden) failures.push(`${lang}: 静态分组未被隐藏（客户端重建未生效）`);
  if (!dynVisible) failures.push(`${lang}: 动态分组未显示`);
  if (target !== 1) failures.push(`${lang}: 聪明的投资者未渲染真实封面图（找到 ${target} 个）`);
  if (naturalWidth === 0) failures.push(`${lang}: 聪明的投资者封面图未加载成功（naturalWidth=0）`);
  if (broken.length) failures.push(`${lang}: ${broken.length} 张封面断链 -> ${broken.join(', ')}`);
}

await page.screenshot({ path: 'E:/01_Projects/Classics Library/_stage/my-reading-zh.png', fullPage: false });
await browser.close();
server.close();

console.log('');
for (const r of results) {
  console.log(`【${r.lang}】静态分组隐藏=${r.staticHidden} 动态分组显示=${r.dynVisible} 卡片=${r.cards} 真实封面=${r.imgs} 聪明的投资者封面=${r.target} naturalWidth=${r.naturalWidth}`);
}
console.log('');
if (failures.length) {
  console.log('❌ 失败：');
  for (const f of failures) console.log('   - ' + f);
  process.exit(1);
}
console.log('✅ 全部通过：客户端重建后，聪明的投资者等真实封面均已正确渲染并加载。');
