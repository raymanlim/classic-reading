#!/usr/bin/env node
/**
 * 封面匹配逻辑预演测试（dry-run，不写任何文件）
 * ------------------------------------------------------------------
 * 为什么要它：`covers-ingest.mjs` 的匹配算法只在真正投放封面时才会被执行，
 * 而它一旦判错，后果是「静默回退到程序化封面」或「封面挂到别的书上」——
 * 线上看起来只是"没生效"，极难定位。所以需要一份可随时跑的回归测试。
 *
 * 测三类：
 *   A. 全量正例 —— 用真实书籍库，对每本书构造 <slug> / <title_en> / <title_zh>
 *      三种文件名，断言都能映射回它自己。
 *   B. 负例    —— UUID、纯数字、通用词等无信息文件名，断言得分 < 0.60
 *      （即 covers-ingest 的 isActionable 门槛之下，不会被写盘）。
 *   C. 显式用例 —— 历史上真实投放过的文件名，人工核对过的期望结果。
 *
 * 用法：node scripts/covers-match-selftest.mjs
 * 退出码：0 = 全部通过；1 = 有失败
 */
import { loadData } from '../src/lib/data.js';
import { indexBooks, bestMatch, scoreTier } from '../src/lib/cover-match.js';

const ACTIONABLE = 0.6;

const data = await loadData();
const books = data.books;
const index = indexBooks(books);

let pass = 0;
let fail = 0;
const failures = [];

function check(group, fileName, expect) {
  const m = bestMatch(fileName, index);
  const ok = expect(m);
  if (ok) pass++;
  else {
    fail++;
    failures.push({ group, fileName, got: m, expect });
  }
  return m;
}

function fmt(m) {
  if (!m) return '(无匹配)';
  return `${m.slug}  分=${m.score.toFixed(2)}(${scoreTier(m.score)})${m.subset ? ' ·简写' : ''}`;
}

/* ---------------- A. 全量正例 ---------------- */

const zhCount = new Map();
const enCount = new Map();
for (const b of books) {
  if (b.title_zh) zhCount.set(b.title_zh, (zhCount.get(b.title_zh) || 0) + 1);
  if (b.title_en) enCount.set(b.title_en, (enCount.get(b.title_en) || 0) + 1);
}

let aTotal = 0;
let aSkippedDup = 0;
const dupNotes = [];

for (const b of books) {
  // A1. <slug>.webp —— 必须 1.00 且指向自己
  aTotal++;
  check('A1 slug', `${b.slug}.webp`, (m) => m && m.slug === b.slug && m.score >= 0.999);

  // A2. <title_en>.png —— 英文书名，期望高置信且指向自己
  if (b.title_en) {
    if (enCount.get(b.title_en) > 1) {
      aSkippedDup++;
      dupNotes.push(`title_en 重复：${b.title_en}（${enCount.get(b.title_en)} 本）`);
    } else {
      aTotal++;
      check('A2 title_en', `${b.title_en}.png`, (m) => m && m.slug === b.slug && m.score >= 0.85);
    }
  }

  // A3. <title_zh>.png —— 中文书名
  if (b.title_zh) {
    if (zhCount.get(b.title_zh) > 1) {
      aSkippedDup++;
      dupNotes.push(`title_zh 重复：${b.title_zh}（${zhCount.get(b.title_zh)} 本）`);
    } else {
      aTotal++;
      check('A3 title_zh', `${b.title_zh}.png`, (m) => m && m.slug === b.slug && m.score >= 0.85);
    }
  }
}

/* ---------------- B. 负例（必须低于可执行门槛） ---------------- */

const negatives = [
  ['UUID', '01ff022c-8a06-476d-883b-e9989a4257eb.png'],
  ['UUID', '4667f199-3b03-4802-9ff6-bf91065b06ab.png'],
  ['纯数字', '3.png'],
  ['纯数字', '2.png'],
  ['纯数字', '1.png'],
  ['通用词', 'cover.png'],
  ['通用词', 'image.png'],
  ['通用词', 'download.png'],
  ['通用词', 'IMG_1234.png'],
  ['通用词', '未命名.png'],
  ['单字', '书.png'],
  ['随机串', 'a1b2c3d4e5f6.png']
];

const negResults = [];
for (const [kind, f] of negatives) {
  const m = bestMatch(f, index);
  const belowThreshold = !m || m.score < ACTIONABLE;
  if (belowThreshold) pass++;
  else {
    fail++;
    failures.push({ group: `B 负例/${kind}`, fileName: f, got: m, expect: () => false });
  }
  negResults.push({ kind, file: f, score: m ? m.score : 0, slug: m ? m.slug : '-', ok: belowThreshold });
}

/* ---------------- C. 显式用例（历史真实投放） ---------------- */

const explicit = [
  ['Crystal Fire.png', 'crystal-fire'],
  ['Thinking, Fast and Slow.png', 'thinking-fast-and-slow'],
  ['Gödel, Escher, Bach.png', 'godel-escher-bach'],
  ['Artificial Intelligence.png', 'artificial-intelligence-a-modern-approach'],
  ['The Intelligent Investor.png', 'the-intelligent-investor'],
  ['Thus Spoke Zarathustra.png', 'thus-spoke-zarathustra'],
  ['Manias, Panics, and Crashes.png', 'manias-panics-and-crashes'],
  [
    'The Man Who Mistook His Wife for a Hat and Other Clinical Tales.png',
    'the-man-who-mistook-his-wife-for-a-hat'
  ],
  ['查拉图斯特拉如是说.png', 'thus-spoke-zarathustra'],
  ['黑天鹅.png', 'the-black-swan'],
  ['利维坦.png', 'leviathan'],
  ['On Liberty.png', 'on-liberty'],
  ['The Protestant Ethic and the Spirit of Capitalism.png', 'the-protestant-ethic-and-the-spirit-of-capitalism'],
  ['The Clash of Civilizations.png', 'the-clash-of-civilizations']
];

const explicitResults = [];
for (const [f, want] of explicit) {
  const m = bestMatch(f, index);
  const ok = m && m.slug === want && m.score >= 0.6;
  if (ok) pass++;
  else {
    fail++;
    failures.push({ group: 'C 显式', fileName: f, got: m, expect: () => false });
  }
  explicitResults.push({ file: f, want, got: m ? m.slug : '-', score: m ? m.score : 0, ok });
}

/* ---------------- 报告 ---------------- */

const line = '─'.repeat(96);

console.log('');
console.log('封面匹配逻辑 · 预演测试（未改动任何文件）');
console.log(line);
console.log(`书籍库：${books.length} 本 · 索引词元集：${index.length} 个`);
console.log('');

console.log(`【A】全量正例：${aTotal} 条断言（跳过 ${aSkippedDup} 条标题重复的用例）`);
if (dupNotes.length) {
  const uniq = [...new Set(dupNotes)];
  console.log(`     跳过的重复标题 ${uniq.length} 种，例如：`);
  for (const n of uniq.slice(0, 5)) console.log(`       · ${n}`);
}
const aFail = failures.filter((f) => f.group.startsWith('A')).length;
console.log(`     ${aFail === 0 ? '✅ 全部通过' : `❌ ${aFail} 条失败`}`);
console.log('');

console.log('【B】负例（无信息文件名，必须 < 0.60 即不会被写盘）');
console.log('     文件名                                       得分   判定   最相近的书');
for (const r of negResults) {
  const mark = r.ok ? '✅' : '❌';
  console.log(
    `  ${mark}  ${r.file.padEnd(44)} ${r.score.toFixed(2)}  ${scoreTier(r.score)}    ${r.slug}`
  );
}
console.log('');

console.log('【C】显式用例（历史上真实投放过的文件名）');
console.log('     文件名                                       期望 slug                                实际 slug                                分   判定');
for (const r of explicitResults) {
  const mark = r.ok ? '✅' : '❌';
  console.log(
    `  ${mark}  ${r.file.padEnd(44)} ${r.want.padEnd(40)} ${r.got.padEnd(40)} ${r.score.toFixed(2)}`
  );
}
console.log('');

console.log(line);
if (fail === 0) {
  console.log(`✅ 预演测试全部通过：${pass} / ${pass}`);
  console.log('');
  process.exit(0);
} else {
  console.log(`❌ 预演测试失败：通过 ${pass}，失败 ${fail}`);
  console.log('');
  console.log('失败明细（最多 20 条）：');
  for (const f of failures.slice(0, 20)) {
    console.log(`  [${f.group}] ${f.fileName}`);
    console.log(`      实际：${fmt(f.got)}`);
  }
  console.log('');
  process.exit(1);
}
