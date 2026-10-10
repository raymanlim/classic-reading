#!/usr/bin/env node
/**
 * 内容选题简报（文章 + 阅读笔记）
 * ------------------------------------------------------------------
 * 用法：node src/articles-brief.mjs
 *
 * 为「工作日思想长文 + 阅读笔记」自动化任务一次性输出四份上下文：
 *   一、现有文章清单 —— 新文章的选题与角度必须与之明显不同
 *   二、合法 taxonomy 取值 —— category / tags / topics 必须逐字使用，写错会导致构建失败
 *   三、书库概览 —— 文章的「分析对象」与 related_books 均可取自其中的 slug
 *   四、阅读笔记现状 —— 已写过的书不得重复写；笔记的 topics 只能取自第二部分
 *
 * 🔴 选题素材范围（2026-10-11 起，Rayman 指令）：
 *   「文章」板块的选题素材 = **全部书籍，无例外**。书库由两个来源合并而成 ——
 *     ① 策展经典（content/books.manifest.js）
 *     ② 书单导入（content/lists/*.js）：AZM 推荐 / XMS 推荐 / **每日推荐**
 *   四类来源**全部同等可选**为文章的核心分析对象与 related_books，
 *   **不存在「只选策展经典」或「书单条目只能做配角」的规则**。
 *   「阅读笔记」板块**同理**：笔记对象也覆盖全部书籍，唯一限制是「尚未写过笔记」。
 *   每本书后标注来源，选题时据此识别。
 *
 * 设计意图：让自动化任务在**不猜**的前提下选题。
 * 任务本身不需要记住任何历史状态，每次运行读一遍本简报即可。
 */
import { loadData } from './lib/data.js';

const data = await loadData();
const { books, articles, notes, categories, tags, topics } = data;

const line = (s = '') => console.log(s);
const nameOf = (x) => x.zh || x.name_zh || x.slug;

/* 来源标签：策展经典 / AZM推荐 / XMS推荐 / 每日推荐（与站点 src/lib/layout.js 的 sourceLabel 一致） */
const SOURCE_LABEL = {
  anzhengming: 'AZM推荐',
  xiaomingshuo: 'XMS推荐',
  daily: '每日推荐'
};
const tierLabel = (b) => (b.tier === 'list' ? SOURCE_LABEL[b.source] || '书单推荐' : '策展经典');

line('# 内容选题简报（自动生成）');
line();

/* ---------- 一、现有文章 ---------- */
line('## 一、现有文章 —— 新文章的选题与角度必须与之明显不同');
line();
if (!articles.length) {
  line('（暂无文章，可自由选题）');
} else {
  for (const a of articles) {
    line(`- **${a.slug}**`);
    line(`  - 中文标题：${a.title_zh}`);
    line(`  - 英文标题：${a.title_en || '（无）'}`);
    line(`  - 分类：${a.category} ｜ 主题：${(a.related_topics || []).join(', ') || '（无）'}`);
    line(`  - 关联书：${(a.related_books || []).join(', ') || '（无）'}`);
  }
  line();
  line(`合计 **${articles.length}** 篇。新文章必须满足：`);
  line('- 覆盖一个**全新的思想主题**，而不是把上述任一主题换词重写；');
  line('- 若确要触及相近领域，必须在**标题与副标题**中体现一个不同的问题意识。');
}
line();

/* ---------- 二、合法 taxonomy 取值 ---------- */
line('## 二、合法 taxonomy 取值（必须逐字使用，否则构建失败）');
line();
line(`**category**（${categories.length} 个，只能选 1 个）：`);
line();
line(categories.map((c) => `\`${c.slug}\``).join(' '));
line();
line(`**topics**（${topics.length} 个，选 2–3 个）：`);
line();
line(topics.map((t) => `\`${t.slug}\``).join(' '));
line();
line(`**tags**（${tags.length} 个，选 3–5 个）：`);
line();
line(tags.map((t) => `\`${t.slug}\``).join(' '));
line();

/* ---------- 三、书库 ---------- */
line('## 三、书库 —— 文章的分析对象与 `related_books` 均可取自下列 slug（选 3–6 本）');
line();
const SOURCE_ORDER = ['策展经典', 'AZM推荐', 'XMS推荐', '每日推荐'];
const sourceSummary = SOURCE_ORDER
  .map((l) => `${l} ${books.filter((b) => tierLabel(b) === l).length}`)
  .join(' + ');
line(`> 🔴 **选题素材 = 全部书籍，无例外**：下列 **${books.length}** 本**全部**可作为文章的核心分析对象`);
line('> 或 `related_books`，**不论来源、不论层级** ——');
line(`> ${sourceSummary}。`);
line('> 可以直接以**任意一本**（含 AZM / XMS / **每日推荐**书目）为中心展开论证，不必先有策展经典；');
line('> 也不存在「必须先选策展经典」或「书单条目只能做配角」的规则。');
line('> 每本书后已标注来源，据此识别即可。');
line();
const byCat = new Map();
for (const b of books) {
  if (!byCat.has(b.category)) byCat.set(b.category, []);
  byCat.get(b.category).push(b);
}
for (const c of categories) {
  const list = byCat.get(c.slug) || [];
  if (!list.length) continue;
  line(`### ${nameOf(c)}（\`${c.slug}\`）— ${list.length} 本`);
  line();
  for (const b of list) {
    const en = b.title_en ? ` / ${b.title_en}` : '';
    line(`- \`${b.slug}\` — ${b.title_zh}${en} ｜ ${tierLabel(b)}`);
  }
  line();
}
const curatedCount = books.filter((b) => b.tier !== 'list').length;
const listCount = books.length - curatedCount;
line(`书库合计 **${books.length}** 本（策展经典 ${curatedCount} + 书单推荐 ${listCount}）。`);
line();

/* ---------- 四、阅读笔记现状 ---------- */
const notedBookSlugs = new Set(notes.map((n) => n.book));
const available = books.filter((b) => !notedBookSlugs.has(b.slug));

line('## 四、阅读笔记现状 —— 新笔记只能写下列「尚未写过」的书');
line();
line('> 🔴 **笔记对象同样覆盖全部书籍，无例外**：策展经典 / AZM 推荐 / XMS 推荐 / 每日推荐');
line('> 四类来源**全部**可写笔记（2026-10-11 起，Rayman 指令）。唯一的限制是「这本书还没写过笔记」，');
line('> **不限定书目层级**，也不存在「书单条目只能做轻量条目、不配写笔记」的规则。');
line('> 每本书后已标注来源，据此识别。');
line();
if (!notes.length) {
  line('（暂无笔记，书库内任一本书都可作为首篇笔记对象）');
} else {
  line(`已有 **${notes.length}** 篇笔记，覆盖以下 ${notedBookSlugs.size} 本书（**不得重复写**）：`);
  line();
  for (const n of notes) {
    const b = books.find((x) => x.slug === n.book);
    line(`- \`${n.book}\` — ${b ? b.title_zh : '（书籍缺失）'} ｜ 笔记日期 ${n.date} ｜ 视角 ${n.voice || 'personal'}`);
  }
  line();
  line(`尚未写笔记的书：**${available.length} / ${books.length}** 本。新笔记必须从这些书里选。`);
  line();
  line(`可写清单（按分类）：`);
  line();
  const availByCat = new Map();
  for (const b of available) {
    if (!availByCat.has(b.category)) availByCat.set(b.category, []);
    availByCat.get(b.category).push(b);
  }
  for (const c of categories) {
    const list = availByCat.get(c.slug) || [];
    if (!list.length) continue;
    line(`### ${nameOf(c)}（\`${c.slug}\`）— ${list.length} 本`);
    line();
      for (const b of list) {
        const en = b.title_en ? ` / ${b.title_en}` : '';
        line(`- \`${b.slug}\` — ${b.title_zh}${en} ｜ ${tierLabel(b)}`);
      }
    line();
  }
}
line('**笔记字段契约**（与 `content/notes.js` 现有条目一致）：');
line('- `id`：`note-XXX`，接在现有最大编号之后，不得重号');
line('- `slug`：英文小写连字符，不得与现有笔记重名');
line('- `book`：必须取自上方可写清单的 slug');
line('- `date`：当天日期 `YYYY-MM-DD`');
line("- `voice`：固定填 `'editorial'`（编者视角）");
line('- `key_insight_zh` / `key_insight_en`：一句话核心洞见');
line('- `thinking_zh` / `thinking_en`：3–5 句分析，**第三人称、分析者口吻**，不得使用「我读过」「我的感受」这类第一人称');
line('- `quote_zh` / `quote_en`：没有把握逐字准确时**留空字符串**');
line('- `topics`：2–3 个，必须逐字取自第二部分的 topics 列表');
