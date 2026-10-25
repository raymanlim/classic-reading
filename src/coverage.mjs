#!/usr/bin/env node
/**
 * coverage.mjs — 七大主题覆盖度统计与今日选题建议
 * ------------------------------------------------------------------
 * 用途：为「经典书籍推荐」定时任务提供确定性的题材轮转依据。
 *
 * 设计原则：
 *   1. 只读，不写任何文件、不改任何数据。
 *   2. 主题池固定为 8 类（Rayman 2026-10-25 指令），psychology / society /
 *      literature 不参与轮转（前者已超配，后两者非本次要求主题）。
 *   3. 建议结果由「缺口分 + 冷却期」共同决定，避免某一主题连推多日。
 *
 * 用法：
 *   node src/coverage.mjs            # 人类可读报告 + 建议
 *   node src/coverage.mjs --json     # 结构化输出
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LISTS_DIR = path.join(ROOT, 'content', 'lists');
const MANIFEST = path.join(ROOT, 'content', 'books.manifest.js');

/**
 * 主题池（2026-10-25 Rayman 调整后）
 * ------------------------------------------------------------------
 * 现役 7 类：AI / 科技 / 历史 / 哲学 / 文学 / 散文 / 教育与反思
 * 退役 5 类：finance / investment / us-stocks / economics / business
 *   —— 存量书保留在库（分类页可访问），但不再作为每日推荐目标主题。
 */
const THEMES = [
  { key: 'ai', label: 'AI 人工智能', cats: ['ai'] },
  { key: 'technology', label: '科技', cats: ['technology'] },
  { key: 'history', label: '历史', cats: ['history'] },
  { key: 'philosophy', label: '哲学', cats: ['philosophy'] },
  { key: 'literature', label: '文学', cats: ['literature'] },
  { key: 'essays', label: '经典散文', cats: ['essays'] },
  { key: 'education', label: '教育与反思', cats: ['education'] },
];

/** 已退役分类：存量保留，不再轮转（仅用于统计提示） */
const RETIRED = ['finance', 'investment', 'us-stocks', 'economics', 'business'];

const COOLDOWN_DAYS = 2; // 同一主题在最近 N 天内出现过则本轮降权

/**
 * 相邻大类互斥组：同一天的两本书不应落在同一组内。
 *   技术：AI / 科技
 *   人文：历史 / 哲学
 *   文章：文学 / 散文
 *   教育：独立成组（可与任意组配对）
 */
const GROUPS = {
  tech: ['ai', 'technology'],
  humanities: ['history', 'philosophy'],
  letters: ['literature', 'essays'],
  education: ['education'],
};

function groupOf(key) {
  for (const [g, keys] of Object.entries(GROUPS)) if (keys.includes(key)) return g;
  return null;
}

function themeOf(category) {
  const t = THEMES.find((x) => x.cats.includes(category));
  return t ? t.key : null;
}

/** 读取 manifest 书目（权威主数据） */
async function readManifest() {
  if (!fs.existsSync(MANIFEST)) return [];
  const mod = await import(`file://${MANIFEST.replace(/\\/g, '/')}?t=${Date.now()}`);
  return (mod.books || []).map((b) => ({
    slug: b.slug,
    category: b.category,
    source: 'manifest',
  }));
}

/**
 * 读取 content/lists/*.js 中的条目（含 category 与所属日期）
 * source 判定以「书级别 source 字段」为准（ingest 会写入）：
 *   source='daily'    → 每日推荐任务的真实产出（均衡覆盖的考核对象）
 *   source='backfill' → 人工补遗批次（进库但不计入每日推荐频次）
 *   source='anzhengming' / 'xiaomingshuo' → 外部书单导入
 * 仅当书级别字段缺失时，才回退到文件名（daily-YYYY-MM-DD.js）判断。
 */
function readLists() {
  if (!fs.existsSync(LISTS_DIR)) return [];
  const out = [];
  const catRe = /category:\s*['"]([^'"]+)['"]/g;
  const slugRe = /slug:\s*['"]([^'"]+)['"]/g;
  const srcRe = /source:\s*['"]([^'"]+)['"]/g;
  for (const f of fs.readdirSync(LISTS_DIR).filter((x) => x.endsWith('.js'))) {
    const txt = fs.readFileSync(path.join(LISTS_DIR, f), 'utf8');
    const dm = f.match(/(\d{4}-\d{2}-\d{2})/);
    const date = dm ? dm[1] : null;
    const fallbackSource = f.startsWith('daily-') ? 'daily' : 'batch';
    const cats = [...txt.matchAll(catRe)].map((m) => m[1]);
    const slugs = [...txt.matchAll(slugRe)].map((m) => m[1]);
    const srcs = [...txt.matchAll(srcRe)].map((m) => m[1]);
    // category / slug / source 按出现顺序一一对应（每本书对象内各出现一次）
    const aligned = cats.length === slugs.length && srcs.length === cats.length;
    cats.forEach((c, i) => {
      out.push({
        slug: aligned ? slugs[i] : null,
        category: c,
        date,
        source: aligned ? srcs[i] : fallbackSource,
      });
    });
  }
  return out;
}

function daysBetween(a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}

function pad(s, n) {
  const w = [...String(s)].reduce((acc, ch) => acc + (ch.charCodeAt(0) > 127 ? 2 : 1), 0);
  return String(s) + ' '.repeat(Math.max(0, n - w));
}

async function main() {
  const json = process.argv.includes('--json');
  const manifest = await readManifest();
  const lists = readLists();
  const all = [...manifest, ...lists];

  const today = new Date().toISOString().slice(0, 10);

  // 各主题计数：count=全库可用量（选题池深度），dailyCount=每日推荐实际产出
  const stat = {};
  for (const t of THEMES) stat[t.key] = { count: 0, dailyCount: 0, batchCount: 0, dailyLastSeen: null };
  for (const b of all) {
    const k = themeOf(b.category);
    if (!k) continue;
    stat[k].count++;
    if (b.source === 'daily') {
      stat[k].dailyCount++;
      if (b.date && (!stat[k].dailyLastSeen || b.date > stat[k].dailyLastSeen)) {
        stat[k].dailyLastSeen = b.date;
      }
    } else {
      stat[k].batchCount++;
    }
  }

  // 最近 7 天已推荐（只取每日任务产出，用于题材新鲜度）
  const recent = lists
    .filter((x) => x.source === 'daily' && x.date)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, 14)
    .map((x) => ({ date: x.date, slug: x.slug, category: x.category, theme: themeOf(x.category) }));

  /**
   * 缺口分以「每日推荐产出」为主导 —— 用户要求的是每日推荐均匀覆盖，
   * 历史批量入库的书不影响轮转公平性，只作为选题池深度约束。
   */
  const totalDaily = THEMES.reduce((s, t) => s + stat[t.key].dailyCount, 0);
  const dailyIdeal = totalDaily / THEMES.length;
  const scored = THEMES.map((t) => {
    const s = stat[t.key];
    const gapDaily = dailyIdeal - s.dailyCount;
    const sinceLast = s.dailyLastSeen ? daysBetween(s.dailyLastSeen, today) : 999;
    const cooling = sinceLast <= COOLDOWN_DAYS;
    const shallowPool = s.count < 6;
    return {
      key: t.key,
      label: t.label,
      count: s.count,
      dailyCount: s.dailyCount,
      dailyLastSeen: s.dailyLastSeen,
      sinceLastDays: sinceLast === 999 ? null : sinceLast,
      gapDaily: Number(gapDaily.toFixed(2)),
      cooling,
      shallowPool,
      score: gapDaily * 10 + Math.min(sinceLast, 30) - (cooling ? 1000 : 0) - (shallowPool ? 15 : 0),
    };
  });

  // 选取：第一本取缺口最高者；第二本必须来自不同互斥组（避免同日题材扎堆）
  const ranked = scored.filter((x) => !x.cooling).sort((a, b) => b.score - a.score);
  const picked = [];
  if (ranked.length) picked.push(ranked[0]);
  const second = ranked.find((x) => picked.length && groupOf(x.key) !== groupOf(picked[0].key));
  if (second) picked.push(second);
  else if (ranked.length > 1) picked.push(ranked[1]); // 无跨组候选时才退让
  const fallback = picked.length < 2
    ? scored.filter((x) => x.cooling).sort((a, b) => b.score - a.score).slice(0, 2 - picked.length)
    : [];
  const suggest = [...picked, ...fallback];

  const report = {
    today,
    totalBooks: all.length,
    manifestCount: manifest.length,
    listsCount: lists.length,
    dailyEntries: totalDaily,
    dailyIdeal: Number(dailyIdeal.toFixed(2)),
    themes: scored.sort((a, b) => b.dailyCount - a.dailyCount || b.count - a.count),
    suggest: suggest.map((x) => ({
      key: x.key,
      label: x.label,
      count: x.count,
      dailyCount: x.dailyCount,
      gapDaily: x.gapDaily,
      shallowPool: x.shallowPool,
    })),
    recent,
  };

  if (json) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  console.log(`# 七大主题覆盖度 · ${today}`);
  console.log(
    `# 全库 ${all.length} 本（manifest ${manifest.length} + lists ${lists.length}）｜每日推荐条目 ${totalDaily} 条，均分理想值 ${dailyIdeal.toFixed(1)}`
  );
  console.log('');
  console.log(
    pad('主题', 14) + pad('全库', 8) + pad('每日推荐', 10) + pad('每日缺口', 10) + '最近推荐'
  );
  for (const t of scored) {
    console.log(
      pad(t.label, 14) +
        pad(t.count, 8) +
        pad(t.dailyCount, 10) +
        pad((t.gapDaily > 0 ? '+' : '') + t.gapDaily.toFixed(1), 10) +
        (t.dailyLastSeen || '从未') +
        (t.shallowPool ? '  ⚠️池浅' : '')
    );
  }
  console.log('');
  console.log('## 今日建议主题（每日推荐缺口优先 + 冷却期排除）');
  for (const s of suggest) {
    console.log(
      `  · ${s.label}（全库 ${s.count} 本 / 已推荐 ${s.dailyCount} 次，缺口 ${s.gapDaily > 0 ? '+' : ''}${s.gapDaily}）` +
        (s.shallowPool ? ' —— 池子较浅，需仔细挑选真正够经典的书' : '')
    );
  }
  if (suggest.length < 2) {
    console.log('  ⚠️ 可用主题不足 2 个（全部处于冷却期），可从相邻主题补位：金融↔投资、经济↔商业。');
  }
  console.log('');
  console.log('## 最近 7 天已推荐（避免题材与书目重复）');
  for (const r of recent.slice(0, 7)) {
    console.log(`  ${r.date}  [${r.theme || r.category}]  ${r.slug || '(slug 未解析)'}`);
  }
}

main().catch((e) => {
  console.error('coverage.mjs 运行失败:', e.message);
  process.exit(1);
});
