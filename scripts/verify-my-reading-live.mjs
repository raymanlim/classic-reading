/**
 * 线上验证：/zh/my-reading/ 客户端重建后真实封面是否正常
 * ------------------------------------------------------------------
 * 缺陷在客户端（app.js 重建列表），所以**只能**用真实浏览器验证线上页面。
 * 用法：node _stage/verify-live.mjs
 */
const pw = await import(
  'file:///C:/Users/shand/.workbuddy-ai/binaries/node/workspace/node_modules/playwright-core/index.js'
);
const chromium = pw.chromium || (pw.default && pw.default.chromium);

const EXEC = 'C:/Users/shand/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';
const BASE = 'https://0e00525f540948a2b66f58b8a0e4962d.sg2.agentos-app.run';

const browser = await chromium.launch({ executablePath: EXEC });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const failures = [];

for (const lang of ['zh', 'en']) {
  const url = `${BASE}/${lang}/my-reading/`;
  await page.goto(url, { waitUntil: 'networkidle' });

  // 断言「重建确实发生」
  const staticHidden = await page.locator('[data-static-groups]').evaluate((el) => el.hasAttribute('hidden'));
  const dynVisible = await page.locator('[data-reading-groups]').evaluate((el) => !el.hasAttribute('hidden'));

  // 懒加载：必须滚动到底才能触发所有封面加载
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += Math.floor(window.innerHeight / 2)) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo(0, document.body.scrollHeight);
  });
  // 显式等待所有封面加载完成（懒加载是异步的，固定 sleep 不可靠）
  await page
    .waitForFunction(
      () => {
        const els = [...document.querySelectorAll('[data-reading-groups] .cover__img')];
        return els.length > 0 && els.every((el) => el.complete);
      },
      null,
      { timeout: 20000 }
    )
    .catch(() => {});
  await page.waitForLoadState('networkidle');

  const cards = await page.locator('[data-reading-groups] .book-card').count();
  const imgs = await page.locator('[data-reading-groups] .cover__img').count();

  const t = page.locator('[data-reading-groups] .book-card[data-slug="the-intelligent-investor"] .cover__img');
  const tCount = await t.count();
  const tWidth = tCount ? await t.evaluate((el) => (el.complete ? el.naturalWidth : 0)) : 0;

  const broken = await page
    .locator('[data-reading-groups] .cover__img')
    .evaluateAll((els) => els.filter((el) => !el.complete || el.naturalWidth === 0).map((el) => el.getAttribute('src')));

  console.log(`【${lang}】静态分组隐藏=${staticHidden} 动态分组显示=${dynVisible} 卡片=${cards} 真实封面=${imgs} 聪明的投资者=${tCount}(w=${tWidth}) 断链=${broken.length}`);

  if (!staticHidden) failures.push(`${lang}: 客户端重建未发生`);
  if (tCount !== 1 || tWidth === 0) failures.push(`${lang}: 聪明的投资者封面未正确加载`);
  if (broken.length) failures.push(`${lang}: 断链 ${broken.slice(0, 3).join(', ')}`);
  if (imgs < 15) failures.push(`${lang}: 真实封面数异常（${imgs}）`);
}

await page.evaluate(() => window.scrollTo(0, 620));
await page.waitForTimeout(400);
await page.screenshot({ path: 'E:/01_Projects/Classics Library/_stage/live-my-reading-zh.png' });
await browser.close();

console.log('');
if (failures.length) {
  console.log('❌ 线上验证失败：');
  for (const f of failures) console.log('   - ' + f);
  process.exit(1);
}
console.log('✅ 线上验证通过：客户端重建后真实封面已正常渲染并加载。');
