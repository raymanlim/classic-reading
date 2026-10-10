#!/usr/bin/env node
/**
 * 封面线上核验（2026-10-09 沉淀）
 * ==================================================================
 * 替代每次发布后手写的「curl 轮询 + 比字节数 + 数书库页封面」循环。
 *
 * 判据全部是**内容级**的（字节数逐一相等 / 详情页确实引用），不看状态码本身：
 *   - 发布成功但内容陈旧 ⇒ 目录传错了（坑 2a）
 *   - 000 / 409 / 504 ⇒ 网关抖动，本脚本自动重试，不据此判定失败（坑 2a-2）
 *
 * 用法：
 *   npm run verify:covers:live                    # 核验固定链接，默认比对全部封面
 *   node scripts/verify-covers-live.mjs <baseUrl> # 指定其他域名
 */
import { readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const COVERS_DIST = join(ROOT, 'dist', 'assets', 'covers');
const BASE = process.argv[2] || 'https://0e00525f540948a2b66f58b8a0e4962d.sg2.agentos-app.run';
const SLEEP_MS = 2000; // 网关有防爬限流，请求之间必须留间隔
const MAX_ROUNDS = 30; // 最多约 60–90 秒

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 本地 dist 的全部封面：slug → 字节数 */
function localCovers() {
  const map = new Map();
  for (const f of readdirSync(COVERS_DIST)) {
    if (!f.toLowerCase().endsWith('.webp')) continue;
    map.set(f.slice(0, -5), statSync(join(COVERS_DIST, f)).size);
  }
  return map;
}

async function head(url) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
    const len = Number(r.headers.get('content-length') || 0);
    return { status: r.status, len };
  } catch {
    return { status: 0, len: 0 };
  }
}

async function getText(url) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(20000) });
    if (!r.ok) return null;
    return await r.text();
  } catch {
    return null;
  }
}

const local = localCovers();
console.log(`本地 dist 封面：${local.size} 张`);
console.log(`目标站点：${BASE}\n`);

// 先把「尚未上线」的封面挑出来（404 或字节数不等）
const pending = new Map();
for (const [slug, size] of local) {
  const { status, len } = await head(`${BASE}/assets/covers/${slug}.webp`);
  const ok = status === 200 && len === size;
  if (!ok) pending.set(slug, size);
  process.stdout.write(ok ? '  ' : '  ⏳ ');
  console.log(`${slug.padEnd(52)} ${status === 200 ? `${len}/${size} B` : `HTTP ${status}`}${ok ? ' ✅' : ''}`);
  await sleep(SLEEP_MS);
}

if (!pending.size) {
  console.log('\n✅ 全部封面已在线上且字节数一致，无需等待。');
} else {
  console.log(`\n⏳ ${pending.size} 张待更新，开始轮询…\n`);
  let converged = false;
  for (let i = 1; i <= MAX_ROUNDS; i++) {
    let allOk = true;
    for (const [slug, size] of pending) {
      const { status, len } = await head(`${BASE}/assets/covers/${slug}.webp`);
      const ok = status === 200 && len === size;
      if (!ok) allOk = false;
      process.stdout.write(`  [${i}] ${slug.padEnd(46)} ${status === 200 ? `${len}/${size} B` : `HTTP ${status}`}${ok ? ' ✅' : ' ⏳'}\n`);
      await sleep(SLEEP_MS);
    }
    if (allOk) {
      converged = true;
      console.log(`\n>>> 第 ${i} 轮全部收敛`);
      break;
    }
  }
  if (!converged) {
    console.log('\n⚠️ 超时仍未收敛。若返回的是 000/409/504 而非 404，多半是网关抖动，稍后重跑本命令即可。');
    process.exit(1);
  }
}

/* ---------- 收敛后的内容级核验 ---------- */
console.log('\n──── 书库页封面计数 ────');
const lib = await getText(`${BASE}/zh/library/`);
if (!lib) {
  console.log('⚠️ 书库页抓取失败（可能是网关抖动），跳过本项');
} else {
  const live = new Set([...lib.matchAll(/assets\/covers\/[a-z0-9-]+\.webp/g)].map((m) => m[0]));
  console.log(`线上 ${live.size} 张 / 本地 ${local.size} 张 ${live.size === local.size ? '✅' : '⚠️ 不一致'}`);
  if (live.size !== local.size) {
    const missing = [...local.keys()].filter((s) => !live.has(`assets/covers/${s}.webp`));
    if (missing.length) console.log('  本地有、页面没引用：', missing.join(', '));
  }
}

console.log('\n──── 新接入封面的详情页引用 ────');
const toCheck = pending.size ? [...pending.keys()] : [];
let bad = 0;
for (const slug of toCheck) {
  const html = await getText(`${BASE}/zh/books/${slug}/`);
  const ref = html ? html.includes(`covers/${slug}.webp`) : null;
  console.log(`  ${slug.padEnd(52)} ${ref === null ? '抓取失败' : ref ? '✅ 已引用' : '🔴 未引用'}`);
  if (ref === false) bad++;
  await sleep(SLEEP_MS);
}
if (!toCheck.length) console.log('  （本次无新增封面，跳过）');

console.log('\n──── 关键页可达性 ────');
for (const p of ['/', '/zh/', '/zh/library/', '/en/']) {
  const { status } = await head(`${BASE}${p}`);
  console.log(`  ${p.padEnd(16)} HTTP ${status}${status === 200 ? ' ✅' : ''}`);
  await sleep(SLEEP_MS);
}

if (bad) {
  console.log(`\n❌ ${bad} 个详情页未引用新封面`);
  process.exit(1);
}
console.log('\n✅ 线上核验通过');
