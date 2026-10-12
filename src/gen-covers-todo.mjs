/**
 * 生成「待出图」清单 COVERS-TODO.md
 * 用法：node src/gen-covers-todo.mjs
 *
 * 只列**还没有封面**的书（public/covers/<slug>.webp 不存在），
 * 按 分层 → 分类 分组，格式与 COVERS.md 一致，可直接拿去做图。
 *
 * 书目变动后重新跑一次即可。
 */
import { writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadData } from './lib/data.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const COVERS_DIR = join(ROOT, 'public', 'covers');

const data = await loadData();
const have = new Set(
  readdirSync(COVERS_DIR)
    .filter((f) => f.toLowerCase().endsWith('.webp'))
    .map((f) => f.slice(0, -5))
);

const books = [...data.books];
const missing = books.filter((b) => !have.has(b.slug));
const tierOf = (b) => (b.isList || b.tier === 'list' ? 'list' : 'curated');
const TIER_LABEL = { curated: '策展经典', list: '书单导入' };
const catName = (b) => (b.categoryEntity ? b.categoryEntity.name_zh : b.category || '未分类');

// ── 统计 ──
const total = books.length;
const covered = total - missing.length;
const byTier = {};
for (const b of books) {
  const t = tierOf(b);
  byTier[t] = byTier[t] || { total: 0, missing: 0 };
  byTier[t].total++;
  if (!have.has(b.slug)) byTier[t].missing++;
}
const byCat = {};
for (const b of books) {
  const c = catName(b);
  byCat[c] = byCat[c] || { total: 0, missing: 0 };
  byCat[c].total++;
  if (!have.has(b.slug)) byCat[c].missing++;
}

// ── 清单（分层 → 分类 → 指数降序）──
const sorted = [...missing].sort((a, b) => {
  const ta = tierOf(a) === 'curated' ? 0 : 1;
  const tb = tierOf(b) === 'curated' ? 0 : 1;
  if (ta !== tb) return ta - tb;
  const ca = catName(a);
  const cb = catName(b);
  if (ca !== cb) return ca.localeCompare(cb, 'zh');
  return (b.index ?? 0) - (a.index ?? 0);
});

let table = '';
let i = 0;
let curTier = '';
let curCat = '';
for (const b of sorted) {
  const t = tierOf(b);
  const c = catName(b);
  if (t !== curTier) {
    curTier = t;
    curCat = '';
    table += `\n### ${TIER_LABEL[t]}\n`;
  }
  if (c !== curCat) {
    curCat = c;
    table += `\n**${c}**\n\n| # | 文件名 | 中文名 | 英文名 | 作者 |\n|---|---|---|---|---|\n`;
  }
  i++;
  table += `| ${i} | \`${b.slug}.webp\` | ${b.title_zh || ''} | ${b.title_en || ''} | ${b.author?.name_zh || ''} |\n`;
}

const pct = (n, d) => (d ? ((n / d) * 100).toFixed(1) : '0.0');

const md = `# 封面待出图清单｜Classics Library

> 自动生成，请勿手改。重新生成：\`node src/gen-covers-todo.mjs\`
> 生成时间：${new Date().toISOString().replace('T', ' ').slice(0, 19)} (+08 本地时区见文件 mtime)

## 一、总览

| 指标 | 数量 |
|---|---|
| 书籍总数 | **${total}** |
| 已有封面 | **${covered}**（${pct(covered, total)}%） |
| **待出图** | **${missing.length}**（${pct(missing.length, total)}%） |

### 按分层

| 分层 | 总数 | 已有 | 待出图 |
|---|---|---|---|
| 策展经典 | ${byTier.curated?.total ?? 0} | ${(byTier.curated?.total ?? 0) - (byTier.curated?.missing ?? 0)} | **${byTier.curated?.missing ?? 0}** |
| 书单导入 | ${byTier.list?.total ?? 0} | ${(byTier.list?.total ?? 0) - (byTier.list?.missing ?? 0)} | **${byTier.list?.missing ?? 0}** |

### 按分类（仅列有待出图的）

| 分类 | 总数 | 待出图 |
|---|---|---|
${Object.entries(byCat)
  .filter(([, v]) => v.missing > 0)
  .sort((a, b) => b[1].missing - a[1].missing)
  .map(([k, v]) => `| ${k} | ${v.total} | **${v.missing}** |`)
  .join('\n')}

---

## 二、规格（与 COVERS.md 一致）

- 目录：\`public/covers/\`，文件名 = \`<slug>.webp\`（下表「文件名」列，逐字一致）
- 宽高比 **2:3**，推荐 **800 × 1200 px**，WebP，单张建议 < 150 KB
- 配色建议：深普鲁士蓝 \`#0E2A45\` / 米白 \`#F7F5F0\` / 米金 \`#A98A58\`
- 自查：\`node src/covers-check.mjs\`

---

## 三、待出图清单（${missing.length} 本）
${table}
`;

writeFileSync(join(ROOT, 'COVERS-TODO.md'), md, 'utf8');

console.log(`书籍总数 ${total} · 已有 ${covered} · 待出图 ${missing.length}`);
console.log(`分层：策展经典 缺 ${byTier.curated?.missing ?? 0} / ${byTier.curated?.total ?? 0}；书单导入 缺 ${byTier.list?.missing ?? 0} / ${byTier.list?.total ?? 0}`);
console.log(`已写出 COVERS-TODO.md`);
