#!/usr/bin/env node
/**
 * 封面上线 · 一键流水线（2026-10-09 沉淀）
 * ==================================================================
 * 「每次上封面都要跑很久」的根因不是构建慢（构建只占 30–40s），
 * 而是把「扫描 → 量尺寸 → 匹配 → 读图 → 接入 → 清 dist → 构建 → 校验」
 * 拆成了十几条独立命令，每条都是一次往返。本脚本把**确定性步骤**压缩成一条命令。
 *
 * 不可自动化的只有两步，脚本会把它们明确点出来：
 *   1. 读图核对（文件名不是书名时必须人工看一眼，防张冠李戴）
 *   2. workbuddy_sites_deploy 发布（MCP 工具，Node 调不了）
 *
 * 用法：
 *   npm run covers:publish            # 阶段一：扫描 + 尺寸 + 匹配，列出「需要读图的文件」
 *   npm run covers:publish -- run     # 阶段二：接入 → 清 dist → 构建 → 校验，然后给出发布命令
 *
 * 典型流程：
 *   1. npm run covers:publish         → 看输出，读图核对被点名的文件，必要时改名
 *   2. npm run covers:publish -- run  → 一条跑完本地全流程
 *   3. 按提示调用 workbuddy_sites_deploy（directory 必须是 dist）
 *   4. npm run verify:covers:live     → 一条跑完线上核验
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, renameSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadData } from '../src/lib/data.js';
import { listCoverFiles } from '../src/lib/covers.js';
import { indexBooks, bestMatch, scoreTier } from '../src/lib/cover-match.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const STAGE = join(ROOT, '_stage');
const PHASE = process.argv[2] || 'plan';

/** 跑一条子命令，输出直接透传；失败则终止 */
function sh(label, cmd, args) {
  console.log(`\n──── ${label} ────`);
  const r = spawnSync(cmd, args, { stdio: 'inherit', cwd: ROOT, shell: false });
  if (r.status !== 0) {
    console.error(`\n❌ ${label} 失败（exit ${r.status}），流水线终止。`);
    process.exit(r.status ?? 1);
  }
}

/* ---------- 阶段一：plan ---------- */
if (PHASE !== 'run') {
  sh('① 扫描 + 尺寸 + 匹配（预演，不改动文件）', 'node', ['src/covers-ingest.mjs']);

  // 用同一份匹配器，算出「哪些文件必须人工读图」
  const data = await loadData();
  const index = indexBooks(data.books);
  const files = listCoverFiles();
  const needLook = [];
  for (const f of files) {
    const ext = f.split('.').pop().toLowerCase();
    if (ext === 'webp') continue;
    const stem = f.slice(0, f.length - ext.length - 1);
    const m = bestMatch(f, index);
    const score = m ? m.score : 0;
    const namedExactly = m && stem === m.slug;
    if (!namedExactly || score < 0.85) {
      needLook.push({ f, slug: m ? m.slug : '（无匹配）', score, label: m ? m.label : '', namedExactly });
    }
  }

  console.log('\n──── ② 需要人工读图核对 ────');
  if (!needLook.length) {
    console.log('✅ 无待接入源图，或全部已是精确 slug 且高置信 —— 可直接进入 run 阶段。');
  } else {
    console.log('这些文件的「文件名 ≠ 书名」，匹配算法的分数不具备鉴别力，必须看图：\n');
    for (const n of needLook) {
      console.log(`  ${n.f}`);
      console.log(`    算法认为 → ${n.slug}（${n.label}）置信度 ${scoreTier(n.score)}（${n.score.toFixed(2)}）`);
      console.log(`    ${n.namedExactly ? '⚠ 文件名虽是 slug，但置信度不足 0.85，仍需核对画面内容' : '⚠ 文件名不是 slug，务必核对画面上的作者名'}`);
    }
    console.log('\n读图确认后：若 slug 错了，改名成正确 slug 再跑 run；若都对，直接跑 run。');
  }

  console.log('\n──── 下一步 ────');
  console.log('  npm run covers:publish -- run');
  console.log('');
  process.exit(0);
}

/* ---------- 阶段二：run ---------- */
sh('① 接入（转 800x1200 webp，原图备份到 _stage/_covers-src/）', 'node', ['src/covers-ingest.mjs', '--apply']);

console.log('\n──── ② 清空 dist ────');
let how;
try {
  const r = spawnSync('bash', ['-c', `rm -rf "${DIST}" && mkdir -p "${DIST}"`], { encoding: 'utf8', cwd: ROOT });
  if (r.status === 0 && readdirSync(DIST).length === 0) how = 'bash rm -rf（快路径，瞬间清零）';
} catch {
  /* 落到兜底 */
}
if (!how) {
  if (existsSync(DIST)) {
    const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    mkdirSync(STAGE, { recursive: true });
    renameSync(DIST, join(STAGE, `dist-old-${ts}`));
  }
  mkdirSync(DIST, { recursive: true });
  how = 'renameSync 兜底（旧 dist 移到 _stage/dist-old-*，记得定期清）';
}
console.log(`✅ ${how}`);

sh('③ 构建', 'node', ['src/build.mjs']);
sh('④ 校验（死链 + 一致性）', 'node', ['src/check.mjs']);

console.log('\n──── 本地全流程完成，剩下两步 ────');
console.log('③ 发布（MCP 工具，Node 无法调用）：workbuddy_sites_deploy');
console.log(`     directory = ${DIST}`);
console.log('     language  = static   appName = 经典书库   domainPrefix = classics-library');
console.log('     ⚠️ directory 必须是 dist（见 .wbapp_*.genie 的 localDir），传项目根目录会「假成功」');
console.log('');
console.log('④ 线上核验：');
console.log('     npm run verify:covers:live');
console.log('');
