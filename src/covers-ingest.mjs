#!/usr/bin/env node
/**
 * 封面接入工具
 * ------------------------------------------------------------------
 * 把「随手丢进 public/covers/ 的原始封面图」规范化为站点要求的 <slug>.webp。
 *
 * 为什么需要它（同一个坑已连续踩两次）：
 *   站点只认「文件名逐字等于书籍 slug」的图片（<slug>.webp）。
 *   文件名不符时（`Crystal Fire.png`、`The Society of Mind.png`、
 *   `The Intelligent Investor.png` …）**不会报任何错**，只会静默回退到
 *   程序化封面；更糟的是原图会被原样复制进 dist，每次发布白白多传几 MB。
 *
 * 用法：
 *   node src/covers-ingest.mjs            # 预演（默认）：只报告「哪个文件 → 哪个 slug」，不改动任何文件
 *   node src/covers-ingest.mjs --apply    # 执行：转 webp(800x1200, q84)，原图移入 _stage/_covers-src/ 备份
 *
 * 覆盖规则：
 *   - 目标 `<slug>.webp` 不存在          → 正常转换。
 *   - 目标已存在，且源文件名 == 该 slug  → 视为「显式替换新封面」：转换并覆盖，旧图备份为
 *                                          `_stage/_covers-src/__replaced__<slug>.webp`。
 *   - 目标已存在，但源是「模糊文件名」   → 跳过并提示，需人工确认（避免误覆盖已上线的封面）。
 *
 * 匹配策略：把文件名与「slug / title_en」做词元覆盖率匹配，取最高分。
 *   ≥0.85 高置信（自动处理）；0.60–0.85 中置信（默认也处理，但会标出）；<0.60 不处理。
 */
import { loadData } from './lib/data.js';
import { listCoverFiles, COVERS_DIR } from './lib/covers.js';
import { indexBooks, bestMatch, scoreTier, isActionable as matchActionable } from './lib/cover-match.js';
import { existsSync, mkdirSync, renameSync, unlinkSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BACKUP = join(ROOT, '_stage', '_covers-src');
const APPLY = process.argv.includes('--apply');

const TARGET_W = 800;
const TARGET_H = 1200;
const QUALITY = 84;

/* ---------- 词元与匹配 ----------
 * 实现已抽到 src/lib/cover-match.js（预演与执行共用同一份，便于单独测试）。
 */

/* ---------- 图片转换（走本机 Python + Pillow） ---------- */

const PY_CODE = [
  'import sys',
  'from PIL import Image',
  'src, dst, w, h, q = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5])',
  'im = Image.open(src).convert("RGB")',
  'im = im.resize((w, h), Image.LANCZOS)',
  'im.save(dst, "WEBP", quality=q, method=6)'
].join(';');

function findPython() {
  const cands = [
    process.env.CLASSICS_PYTHON,
    'C:\\Users\\shand\\.workbuddy-ai\\binaries\\python\\envs\\default\\Scripts\\python.exe',
    'python',
    'python3'
  ].filter(Boolean);
  for (const c of cands) {
    try {
      execFileSync(c, ['-c', 'from PIL import Image'], { stdio: 'ignore' });
      return c;
    } catch {
      /* 试下一个 */
    }
  }
  return null;
}

/* ---------- 主流程 ---------- */

const data = await loadData();
const books = data.books;
const validSlugs = new Set(books.map((b) => b.slug));
const index = indexBooks(books);

const files = listCoverFiles();
const ok = [];
const todo = [];

for (const f of files) {
  const ext = extname(f).slice(1).toLowerCase();
  const stem = f.slice(0, f.length - ext.length - 1);
  // 只有「文件名 = 合法 slug 且已是 webp」才算合规。
  // 任何非 webp（哪怕 stem 已经是合法 slug）都必须进待处理队列，原因有二：
  //   1) 非 webp 会被原样复制进 dist，白白把几 MB 原图塞进发布包；
  //   2) 更隐蔽的是 —— lib/covers.js 按 EXTS 优先级取图，webp 排在 png 之前。
  //      若 `<slug>.webp`（旧版）与 `<slug>.png`（新版）并存，**旧 webp 会胜出**，
  //      新封面被静默忽略，表现为「线上看不到新封面」。
  if (ext === 'webp' && validSlugs.has(stem)) ok.push(f);
  else todo.push({ file: f, ext, stem, exactSlug: validSlugs.has(stem) });
}

console.log('');
console.log(`封面目录：${COVERS_DIR}`);
console.log(`目录中图片文件：${files.length} 个（其中已合规 ${ok.length} 个，待处理 ${todo.length} 个）`);
console.log('');

if (!todo.length) {
  console.log('✅ 没有需要处理的文件，目录已是规范状态。');
  console.log('');
  process.exit(0);
}

const plan = [];
for (const t of todo) {
  // bestMatch 在「文件名与任何书都没有共同词元」时返回 null（UUID / 纯数字 / 通用词）。
  // 此时给出一个显式的空匹配，避免下游取 .slug 崩溃，也避免编造一个假目标误导人工判断。
  const m = bestMatch(t.file, index);
  const match = m || { slug: '', label: '(与任何书都无共同词元)', score: 0, subset: false, inter: 0 };
  const target = match.slug ? `${match.slug}.webp` : '—';
  const exists = Boolean(match.slug) && existsSync(join(COVERS_DIR, target));
  plan.push({ ...t, match, target, exists });
}

console.log('待处理文件 → 目标文件名：');
console.log('');
for (const p of plan) {
  const tag = scoreTier(p.match.score);
  const note = p.match.subset ? ' · 书名简写' : '';
  const flag = !p.match.slug
    ? '  ⚠️ 无任何匹配，需人工识别后改名'
    : !p.exists
      ? ''
      : p.exactSlug
        ? '  ♻️ 将覆盖同名旧封面（旧图自动备份）'
        : '  ⚠️ 目标已存在，将跳过';
  console.log(`  ${p.file}`);
  console.log(`    → ${p.target}   置信度 ${tag}（${p.match.score.toFixed(2)}）  书：${p.match.label}${note}${flag}`);
}

// 可执行条件：置信度达标，且（目标不存在 或 文件名本就是该 slug 的显式替换）
const isActionable = (p) => matchActionable(p.match, p.exists, p.exactSlug);
const actionable = plan.filter(isActionable);
const skipped = plan.filter((p) => !isActionable(p));

console.log('');
if (skipped.length) {
  console.log(`⚠️  ${skipped.length} 个文件不会被处理（置信度过低或目标已存在），请人工确认后手动处理。`);
  console.log('');
}

if (!APPLY) {
  console.log(`【预演模式】未改动任何文件。确认无误后执行：`);
  console.log(`  node src/covers-ingest.mjs --apply`);
  console.log('');
  process.exit(0);
}

const python = findPython();
if (!python) {
  console.error('❌ 找不到可用的 Python + Pillow，无法转换图片。');
  console.error('   可设置环境变量 CLASSICS_PYTHON 指向 python.exe 后重试。');
  process.exit(1);
}

mkdirSync(BACKUP, { recursive: true });

let done = 0;
for (const p of actionable) {
  const src = join(COVERS_DIR, p.file);
  const dst = join(COVERS_DIR, p.target);
  try {
    // 覆盖场景：先把被替换的旧封面挪进备份，避免新版有问题时无从回退
    if (existsSync(dst)) {
      const oldBackup = join(BACKUP, `__replaced__${p.target}`);
      if (existsSync(oldBackup)) unlinkSync(oldBackup);
      renameSync(dst, oldBackup);
    }
    execFileSync(python, ['-c', PY_CODE, src, dst, String(TARGET_W), String(TARGET_H), String(QUALITY)], {
      stdio: 'inherit'
    });
    // 备份原图：Windows 下 renameSync 遇同名目标会抛错，先移除旧备份
    const backupPath = join(BACKUP, p.file);
    if (existsSync(backupPath)) unlinkSync(backupPath);
    renameSync(src, backupPath);
    console.log(`✅ ${p.file}  →  ${p.target}`);
    done++;
  } catch (e) {
    console.error(`❌ 转换失败：${p.file}\n   ${e.message}`);
  }
}

console.log('');
console.log(`完成：${done} / ${actionable.length} 个文件已规范化，原图备份在 _stage/_covers-src/`);
console.log('下一步：node src/build.mjs && node src/check.mjs，然后发布。');
console.log('');
