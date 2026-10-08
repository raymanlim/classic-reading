#!/usr/bin/env node
/**
 * verify-search-live.mjs — 线上搜索冒烟测试（真实浏览器）
 * ------------------------------------------------------------------
 * 为什么需要它：2026-10-08 出现过一次严重故障 —— public/app.js 里 render() 引用了
 * 已不存在的变量 terms，抛 ReferenceError，导致**搜索框任何关键词都返回 0 结果**。
 * 而当时的 `node src/check.mjs` 依然输出「✅ 校验通过」：check.mjs 只校验构建产物里的
 * 死链与数据完整性，**从不执行客户端 JS**，因此这类「构建成功、页面打开、功能全废」的
 * 故障完全在它的盲区。本脚本补上这个盲区。
 *
 * 用法：
 *   node scripts/verify-search-live.mjs                     # 默认打稳定沙箱域名
 *   node scripts/verify-search-live.mjs <baseUrl>           # 指定域名（本地/线上）
 *
 * 检查项：
 *   1. 页面无 JS 运行时错误（pageerror）—— 这条直接对应上面那次事故
 *   2. 索引请求带构建版本号 ?v=...（否则浏览器启发式缓存会让新书搜不到）
 *   3. 从索引里**动态取** 3 条真实书名做正向检索，断言有结果且首条命中该书
 *      （动态取样 → 不需要维护硬编码关键词，新增书籍自动纳入覆盖）
 *   4. 反向检索：一个不存在的书名必须 0 结果（防止「什么都能搜出来」的假阳性）
 *   5. 中文虚词宽松兜底：去掉「的」后仍能命中（鞑靼人沙漠 / 鞑靼人的沙漠）
 *   6. library 页「每日推荐」筛选后可见卡片 > 0
 *
 * 退出码：全部通过 0，任一失败 1（可挂在自动化流程里做发布后门禁）。
 */
const pw = await import(
  process.env.PW_CORE ||
    'file:///C:/Users/shand/.workbuddy-ai/binaries/node/workspace/node_modules/playwright-core/index.js'
);
const chromium = pw.chromium || (pw.default && pw.default.chromium);

const EXEC =
  process.env.PW_CHROME ||
  'C:/Users/shand/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';

const BASE = (process.argv[2] || 'https://0e00525f540948a2b66f58b8a0e4962d.sg2.agentos-app.run').replace(/\/$/, '');

const results = [];
function check(name, ok, detail) {
  results.push({ name, ok, detail });
  console.log(`  ${ok ? '✅' : '❌'} ${name}${detail ? ' — ' + detail : ''}`);
}

const browser = await chromium.launch({ executablePath: EXEC });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

const pageErrors = [];
page.on('pageerror', (e) => pageErrors.push(e.message));
const indexRequests = [];
page.on('request', (r) => {
  if (r.url().includes('search-index.json')) indexRequests.push(r.url());
});

console.log(`\n▶ 目标：${BASE}\n`);

/* 🔴 必须拦掉平台注入的腾讯埋点脚本。
   发布平台会往每个页面注入 <script src="https://beacon.cdn.qq.com/sdk/x/beacon_web.min.js">，
   它是**同步脚本**：本地网络一旦访问不到该域名，浏览器会卡在这条请求上，**整个 HTML 解析停住** ——
   表现是 page.goto 超时、#search-q 永远不出现，而 curl 一切正常，极易误判成「站点挂了」。
   本脚本测的是本站功能，第三方埋点与判定无关，直接 abort（顺带也更快）。 */
await page.route('**/beacon.cdn.qq.com/**', (route) => route.abort());
await page.route('**/beacon*.qq.com/**', (route) => route.abort());

/* 仍用 'commit'：只等响应到达并完成导航提交，再显式等目标元素，不受阻塞脚本影响。 */
async function open(path, selector) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'commit', timeout: 45000 });
  await page.waitForSelector(selector, { timeout: 25000 });
  await page.waitForTimeout(1200);
}

/* ---------- 1. 搜索页：无 JS 错误 ---------- */
console.log('[1] 搜索页加载');
/* 先挂上索引响应监听，再导航 —— 否则可能抢跑（索引未就绪时检索会返回 0，造成假失败） */
const idxReady = page
  .waitForResponse((r) => r.url().includes('search-index.json') && r.status() === 200, { timeout: 25000 })
  .catch(() => null);
await open('/zh/search/', '#search-q');
await idxReady;
await page.waitForTimeout(500);

const build = await page.evaluate(() => window.__CL_BUILD);
check('页面注入 __CL_BUILD', Boolean(build), `build=${build}`);
check('搜索页无 JS 运行时错误', pageErrors.length === 0, pageErrors.join(' | ') || '无');

/* ---------- 2. 索引请求带版本号 ---------- */
const idxUrl = indexRequests[indexRequests.length - 1] || '';
check('索引请求带 ?v= 版本号', /\?v=\d+/.test(idxUrl), idxUrl.replace(BASE, '') || '(未发出请求)');

/* ---------- 3/4. 正向 + 反向检索 ---------- */
console.log('\n[2] 关键词检索');
const idx = await page.evaluate(async () => {
  const u = '/search-index.json' + (window.__CL_BUILD ? '?v=' + window.__CL_BUILD : '');
  const r = await fetch(u);
  return r.json();
});

/** 用页面真实逻辑检索，返回结果标题列表与结果数 */
async function query(q) {
  await page.fill('#search-q', '');
  await page.fill('#search-q', q);
  await page.waitForTimeout(800);
  return page.evaluate(() => {
    const box = document.querySelector('[data-search-results]');
    const cnt = document.querySelector('[data-search-count]');
    const titles = box
      ? [...box.querySelectorAll('.result__title')].map((n) => n.textContent.replace(/[《》]/g, '').trim())
      : [];
    const m = /(\d+)/.exec(cnt ? cnt.textContent : '');
    return { count: m ? Number(m[1]) : 0, titles, first: titles[0] || '' };
  });
}

/* 从索引动态取样本：只取书籍、中文标题、且足够长以便截取关键词。
   注意 zh.t 自带《》，必须先剥掉再截词，否则会拿「《人工智」这种带书名的词去检索。 */
const samples = idx.entries
  .filter((e) => e.type === 'book' && e.zh && e.zh.t && e.zh.t.replace(/[《》]/g, '').length >= 3)
  .slice(0, 3);

for (const s of samples) {
  const key = s.zh.t.replace(/[《》]/g, '').slice(0, 4);
  const r = await query(key);
  check(`「${key}」有结果`, r.count > 0, `${r.count} 个`);
  /* 断言「找得到」而不是「排第一」：排序属调优，功能要求是能搜到。
     首条命中断言对短前缀太脆弱（易被摘要命中挤下去），会造成假失败。 */
  check(
    `「${key}」结果中包含《${s.zh.t.replace(/[《》]/g, '')}》`,
    r.titles.some((t) => t.includes(key)),
    `前 3 条：${r.titles.slice(0, 3).join(' / ') || '(无)'}`
  );
}

const bogus = await query('这本书肯定不存在xyzq');
check('不存在的书名返回 0 结果', bogus.count === 0, `实际 ${bogus.count} 个`);

/* 关键：render() 是在「输入」时才执行的，所以加载期无错不代表检索无错。
   2026-10-08 那次故障（terms is not defined）正是在打字时才抛出 —— 必须在此处再断言一次。 */
check('检索过程中无 JS 运行时错误', pageErrors.length === 0, pageErrors.join(' | ') || '无');

/* ---------- 5. 宽松兜底 ---------- */
console.log('\n[3] 中文虚词宽松兜底');
const loose = await query('鞑靼人的沙漠');
check('「鞑靼人的沙漠」能命中《鞑靼人沙漠》', loose.titles.some((t) => t.includes('鞑靼人沙漠')), `首条《${loose.first}》`);

/* ---------- 6. library 每日推荐 ---------- */
console.log('\n[4] 书库「每日推荐」筛选');
page.removeAllListeners('pageerror');
pageErrors.length = 0;
await open('/zh/library/', '[data-book-grid]');
const chip = await page.$('button[data-filter="source"][data-value="daily"]');
if (!chip) {
  check('存在「每日推荐」筛选按钮', false);
} else {
  await chip.click();
  await page.waitForTimeout(600);
  const vis = await page.evaluate(
    () => [...document.querySelectorAll('.book-card')].filter((c) => c.offsetParent !== null).length
  );
  check('筛选后可见卡片 > 0', vis > 0, `${vis} 张`);
  check('书库页无 JS 运行时错误', pageErrors.length === 0, pageErrors.join(' | ') || '无');
}

await browser.close();

/* ---------- 汇总 ---------- */
const failed = results.filter((r) => !r.ok);
console.log(`\n${'─'.repeat(50)}`);
if (failed.length === 0) {
  console.log(`✅ 搜索冒烟测试全部通过（${results.length} 项）\n`);
  process.exit(0);
}
console.log(`❌ 搜索冒烟测试失败 ${failed.length}/${results.length} 项：`);
failed.forEach((f) => console.log(`   · ${f.name}${f.detail ? ' — ' + f.detail : ''}`));
console.log('');
process.exit(1);
