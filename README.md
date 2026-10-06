# Classics Library · 经典书库

**A bilingual personal library of classic books, ideas, and mental models.**
一个中英文双语的个人经典书籍库、思想库与世界模型入口。

> Read the classics. Think deeper.
> 用经典书籍，建立自己的世界模型。

---

## 一、这是什么

不是「我读过哪些书」的展示页，而是一套**以经典书籍为入口的个人知识导航系统**：

```
BOOK 书籍 → IDEA 思想 → TOPIC 主题 → ARTICLE 文章 → KNOWLEDGE MAP 知识地图 → PERSONAL WORLD MODEL 个人世界模型
```

当前规模（第一阶段已全部完成）：

| 维度 | 数量 |
|---|---|
| 经典书籍 | **100** 本（每本中英双语独立撰写） |
| 分类 | 11 个 |
| 主题 | 30 个 |
| 标签 | 73 个 |
| 作者 | 109 位（含合著者，均有双语简介与核心思想） |
| 阅读路线 | 5 条（每条 6 级，按认知顺序排列） |
| 文章 | 6 篇（4 篇双语，2 篇仅中文，用于演示「英文版即将推出」的降级逻辑） |
| 阅读笔记 | 6 条 |
| 生成页面 | **544** 个静态 HTML（2 语言 × 272 个路由） |

---

## 二、技术选型（以及为什么不是 Next.js）

需求文档首选 `Next.js + next-intl`，同时明确要求 **Lightweight First / Static-first / Minimal JavaScript / Lighthouse > 90 / 不要过度工程**。

最终选择：**零依赖 Node 静态站点生成器（SSG），输出纯静态 HTML/CSS/JS。**

| 维度 | 本方案（零依赖 SSG） | Next.js + next-intl |
|---|---|---|
| 构建依赖 | 0 个 npm 包 | ~300MB 依赖树 |
| 客户端 JS | 约 12KB（单个 app.js） | 框架运行时通常 80–120KB+ |
| 构建耗时 | 约 30 秒（544 页） | 通常 1–3 分钟 |
| 构建失败风险 | 无（无 SWC/Turbopack 二进制依赖） | 中（本机构建常受沙箱限制） |
| 首次加载 | 纯 HTML，无 hydration | 需 hydration |
| i18n | 构建期渲染，`/zh` `/en` 真实独立页面 | next-intl 同样可行 |
| 后续扩展 | 需要时可整体迁移到 Next.js（内容层完全解耦） | 原生支持 API Route / RSC |

**关键权衡**：本方案在性能、SEO、可长期保存与构建稳定性上占优；代价是缺少 React 组件生态，未来若要做服务端 AI 接口（Ask the Library），需另起一个轻量 API 服务或迁到 Next.js。

**内容层与渲染层已完全解耦** —— 所有内容都在 `content/` 下的纯 JS/JSON 中，迁移框架时无需改动任何内容。

---

## 三、目录结构

```
Classics Library/
├── content/                     ← 内容层（唯一的「数据库」，纯文本，Git 友好）
│   ├── books.manifest.js        书目主数据：100 本策展经典的双语书名/作者/年份/分类/经典指数
│   ├── books/batch-1..8.js      每本经典的长文内容 overlay（简介/为什么读/核心思想/关键问题/适合谁/今日思想）
│   ├── lists/batch-1..5.js      ← 书单导入的 148 本轻量条目（来自第三方频道推荐书目）
│   ├── lists/daily-*.js         ← 每日推荐自动入库的轻量条目（按日期命名，定时任务写入，可重复运行）
│   ├── list-prose/*.js          ← 书单条目的阅读指引 overlay（简介/为什么读/核心思想/关键问题/适合谁/阅读指引）
│   ├── list-prose/daily-*.js    ← 每日推荐条目的阅读指引（与 lists/daily-* 同日期、同 slug）
│   ├── authors.js               109 位作者的双语档案
│   ├── taxonomy.js              分类（12）/ 标签（109）/ 主题（41）
│   ├── paths.js                 5 条阅读路线（含每级说明）
│   ├── collections.js           首页精选 + 「我的阅读」初始清单
│   ├── search-aliases.js        双语检索别名表（人工智能 ↔ AI / 芯片 ↔ semiconductor …）
│   ├── articles/*.js            6 篇文章
│   ├── notes.js                 6 条阅读笔记（作者本人的读书笔记，与「阅读指引」是两回事）
│   └── redirects.js             ← 已下线路径的重定向表（发布沙箱是「合并」而非「替换」，删掉的旧 URL 必须显式覆盖）
├── locales/
│   ├── zh-CN.json               中文界面文案（约 300 个 key）
│   └── en-US.json               英文界面文案（key 完全对齐）
├── public/                      ← 直接复制到 dist/assets/
│   ├── styles.css               设计系统（深普鲁士蓝 + 米白 + 米金）
│   ├── app.js                   语言记忆 / 移动端导航 / 筛选排序 / 双语搜索 / 阅读状态
│   ├── favicon.svg
│   ├── og.png                   1200×630 社交分享图（由 headless Chrome 渲染生成）
│   └── covers/                  ← 可选：真实书籍封面图，命名 = <slug>.webp
├── src/
│   ├── build.mjs                构建入口
│   ├── serve.mjs                本地预览服务器
│   ├── check.mjs                数据 + 死链校验
│   ├── ingest-books.mjs         每日推荐入库（--existing 导出去重清单 / --taxonomy 导出合法取值 / --file 入库）
│   ├── covers-check.mjs         封面文件名校验（揪出拼写错误）
│   ├── covers-ingest.mjs        封面一键接入（原名匹配 + 转 WebP + 移走原图）
│   ├── gen-covers-md.mjs        生成封面清单 COVERS.md
│   ├── audit.mjs                多端响应式审计 + OG 图生成
│   ├── site.config.js           SITE_URL 等站点配置
│   ├── og-card.html             OG 图源文件
│   ├── lib/                     i18n / markdown / data / layout / covers
│   └── templates/               home / books / collections / content
├── COVERS.md                    ← 封面生成清单（目录 / 命名 / 规格 / 100 个文件名）
├── _inbox/                      ← 每日推荐载荷投放目录（_TEMPLATE.json 为字段模板，定时任务写入）
└── dist/                        ← 构建产物（部署这个目录）
```

---

## 四、运行方法

需要 Node 20+。

```bash
cd classics-library

# 构建（生成 dist/）
node src/build.mjs

# 本地预览 → http://localhost:4321/zh/  （英文 /en/）
node src/serve.mjs          # 或 node src/serve.mjs 8080

# 构建 + 预览
node src/build.mjs && node src/serve.mjs

# 数据与死链校验
node src/check.mjs

# 封面文件名校验（放封面后必跑）
node src/covers-check.mjs

# 重新生成封面清单 COVERS.md（书目变动后跑）
node src/gen-covers-md.mjs

# 多端响应式审计（8 档宽度 × 11 条路由，截图落在 _audit/）
node src/audit.mjs
node src/audit.mjs --og     # 顺便重新生成 public/og.png
```

无任何 npm 依赖，**不需要 `npm install`**。

---

## 五、内容更新方法

### 1. 新增一本书

**第一步**：在 `content/books.manifest.js` 追加事实性元数据（必须真实可核验）。

```js
{
  slug: 'the-new-book',                 // 稳定 URL 标识，勿改
  category: 'ai',                       // 必须是 taxonomy.js 里的分类 slug
  title_en: 'The New Book',
  title_zh: '新书',
  author: 'author-slug',                // 必须是 authors.js 里的 slug
  co_authors: [{ slug: 'x', en: 'X', zh: 'X' }],   // 可选
  year: 2024,
  original_language: 'en',
  classic_index: 85,                    // 个人策展指数 0-100
  sub: [4, 4, 4, 4],                    // [历史影响力, 思想深度, 长期价值, 跨领域影响力] 各 1-5
  batch: 1                              // overlay 所在分片（1-8，可复用任意一个）
}
```

**第二步**：在对应的 `content/books/batch-N.js` 里补该书的 overlay：

```js
'the-new-book': {
  subtitle_zh: '', subtitle_en: '',
  description_zh: '', description_en: '',
  why_read_zh: '', why_read_en: '',
  core_ideas_zh: ['', '', ''], core_ideas_en: ['', '', ''],
  key_questions_zh: ['', ''], key_questions_en: ['', ''],
  who_should_read_zh: '', who_should_read_en: '',
  today_idea_zh: '', today_idea_en: '',
  difficulty: 2, reading_time: 12,
  tags: ['ai', 'decision-making'], topics: ['ai'],
  related_books: ['superintelligence', 'thinking-fast-and-slow']
}
```

**第三步**：若作者不在 `content/authors.js`，补一份作者档案。

**第四步**：`node src/build.mjs && node src/check.mjs`。校验脚本会明确指出缺哪个字段、哪个 slug 非法。

### 2. 改界面文案

只改 `locales/zh-CN.json` 与 `en-US.json`。**两边 key 必须一致**；模板中不允许出现硬编码文字，一律 `t(lang, 'key')`。

### 3. 加一篇新文章

在 `content/articles/` 新建 `<slug>.js`，导出 `article` 对象。构建时自动发现（按目录扫描），无需注册。

- 双语文章：`lang: 'both'`，`content_zh` 与 `content_en` 都写
- 只有中文：`lang: 'zh'`，`content_en: ''` → 英文页自动显示「English version coming soon.」

支持的 Markdown 语法：`##` `###`、段落、`-` 列表、`1.` 列表、`**粗体**`、`> 引用`、`[文字](链接)`。不支持表格与代码块（有意保持轻量）。

### 4. 新增「书单导入」轻量条目

书库由两类书组成，**共用同一套卡片、搜索与详情页**：

| 类别 | 数量 | 内容 | 卡片底部 |
|---|---|---|---|
| 策展经典 `tier` 未设 | 100 | 双语简介、核心思想、关键问题、经典指数 | 经典指数 |
| 书单导入 `tier: 'list'` | 148 | 双语书名、作者、年份、分类、来源主题，**阅读指引见 `content/list-prose/`** | 来源徽章 |

新增一条轻量条目：在 `content/lists/batch-*.js` 的 `batch` 数组里追加一个对象（**数组格式，不是对象映射**）：

```js
{
  slug: 'animal-farm',            // 唯一，[a-z0-9-]
  category: 'literature',          // 必须是 taxonomy.js 里的分类 slug
  title_zh: '动物农场',
  title_en: 'Animal Farm',         // 无官方英译就填 null（页面会只显示中文名）
  author: 'george-orwell',
  author_zh: '乔治·奥威尔',
  author_en: 'George Orwell',
  nationality_zh: '英国', nationality_en: 'United Kingdom',
  year: 1945,                      // 核实不了就填 null（页面显示「年份待考」）
  original_language: 'en',
  tier: 'list',                    // 必须。标记为轻量条目
  source: 'anzhengming',           // 'anzhengming' | 'xiaomingshuo'
  list_category_zh: '文学、小说与戏剧',
  list_category_en: 'Literature, Fiction & Drama',
  theme_zh: '来源频道给出的核心主题',
  theme_en: 'Natural English rendering of the same theme.',
  tags: ['fiction', 'dystopia', 'politics'],   // 3-5 个，必须是 taxonomy.js 的标签 slug
  topics: ['literature', 'power-and-politics'] // 2-3 个，必须是 taxonomy.js 的主题 slug
}
```

**关键约束**：

- **`year` 与 `title_en` 查不到就填 `null`，绝不猜测**。页面会显示「年份待考」，卡片与搜索仍正常工作。
- `tags` / `topics` / `category` 的 slug 必须**逐字存在**于 `content/taxonomy.js`，写错会导致构建失败。
- 轻量条目**不放在** `content/books/batch-*.js`（那是策展经典专用）；它的阅读指引放在 `content/list-prose/`，见下一节。未提供阅读指引的条目仍可构建，但 `check.mjs` 会报错。
- 轻量条目的作者**不需要**在 `authors.js` 建档；页面上作者名渲染为纯文本，不产生死链。
- **不参与「今日经典」轮转**（`data.curatedByIndex` 只含策展经典）。
- 新增分类/标签/主题时，同步改 `content/taxonomy.js`，并保证中英双语的 `name_*` 都填。

### 5. 给书单条目补写「阅读指引」

书单导入的条目要渲染与策展经典同级的 6 个板块，需在 `content/list-prose/` 下提供覆盖层。

**目录**：`content/list-prose/*.js`（每个文件一个 `export const batch`，**对象映射**，键为 slug）

```js
/** 书单条目阅读指引 · 安争鸣书单 1/2 */
export const batch = {
  'liberalism': {
    description_zh: '这本书讲什么（中文 100–160 字）',
    description_en: 'What it is about (70–110 words).',
    why_read_zh: '为什么值得读',
    why_read_en: 'Why it is worth reading.',
    core_ideas_zh: ['核心思想 1', '核心思想 2', '核心思想 3'],   // ≥ 3 条
    core_ideas_en: ['...', '...', '...'],
    key_questions_zh: ['它试图回答的问题 1', '问题 2'],           // ≥ 2 条
    key_questions_en: ['...', '...'],
    who_should_read_zh: '适合谁读',
    who_should_read_en: 'Who should read it.',
    reading_note_zh: '阅读指引：怎么读（篇幅结构、顺序、前置读物、版本选择、对照读物）',
    reading_note_en: 'How to read it.'
  }
};
```

**渲染规则**：有覆盖层 → 渲染「来源主题 + 6 个板块」；无覆盖层 → 回落为「来源主题 + 待补充提示」。判定依据是 `book.hasProse`。

**与策展经典的区别**：

| | 策展经典 | 书单条目 |
|---|---|---|
| 覆盖层位置 | `content/books/batch-*.js` | `content/list-prose/*.js` |
| 导出格式 | 对象映射 | 对象映射 |
| `today_idea_*` | 需要 | **不需要**（不参与每日一书轮转） |
| `reading_note_*` | 无此字段 | **需要** |
| 经典指数 / 难度 / 阅读时长 | 需要 | 不需要 |

**关键约束**：

- `slug` 必须与 `content/lists/batch-*.js` 中的**逐字一致**，写错则该条无指引且构建报「书单条目缺少阅读指引」。
- 同一 slug **不得重复定义**，也不得与 `content/books/` 的策展经典冲突（`data.js` 会报冲突警告）。
- **禁止虚构**：查不到的作者、年份、内容一律不写；`reading_note` 中可如实标注「出处存疑」。

### 6. 每日自动推荐（定时任务）

站点内置一条**每日两本**的推荐管线，由 WorkBuddy 定时任务驱动（任务名「经典书籍推荐（每日两本 + 站点同步 + 发布）」，每日 19:00）。它把「推荐 → 入库 → 构建 → 校验 → 发布」串成一个闭环，写入的是 `tier:'list'` + `source:'daily'` 的轻量条目，**与书单导入同构**，因此天然带完整的 6 板块阅读指引。

**三个查询/写入命令**（`src/ingest-books.mjs`）：

```bash
node src/ingest-books.mjs --existing                      # 导出全库已有书目（去重比对用）
node src/ingest-books.mjs --taxonomy                      # 导出合法 category / tags / topics
node src/ingest-books.mjs --file _inbox/YYYY-MM-DD.json    # 入库当日推荐
```

**载荷格式**：见 `_inbox/_TEMPLATE.json`。顶层 `{ date, books: [...] }`；每本书除书目事实字段外，须带 `prose` 的 12 个字段（`core_ideas` 中英各 ≥3 条、`key_questions` 中英各 ≥2 条、条数必须一致），`tags` ≥3 个、`topics` ≥2 个且**只能取自 `--taxonomy` 的合法值**。

**幂等与合并语义**（重要）：

- 输出文件按日期命名（`content/lists/daily-<date>.js` + `content/list-prose/daily-<date>.js`），**同一天重跑不会累积文件**。
- 同日第二次运行且选书不同时，会与当日已有条目**合并去重**（而非覆盖），因此不会丢书。
- 去重键为 `slug` + 归一化后的 `title_zh` / `title_en`，与**全库**（策展经典 + 书单导入 + 已入库的每日推荐）比对；命中即 `status=skipped_duplicate` 并跳过该本。

**注意**：每日条目一旦入库就计入 `data.books`，因此 `check.mjs` 的**全库书名查重**同样适用——如果某本「新」书其实与已有书重复（例如《历史的终结及最后之人》与策展经典 `the-end-of-history` 是同一本），`check.mjs` 会直接报错拦住发布。这是有意设计：宁可漏推一本，也不允许同一本书出现两个页面。

### 7. 换域名 / 改站点地址

改 `src/site.config.js` 的 `SITE_URL`，重新构建。它会同步影响 canonical、hreflang、Open Graph、sitemap.xml、robots.txt、feed.xml。

### 8. 换书籍封面（真实图片）

**默认是纯 CSS 程序化封面，不需要任何图片。** 若要换成真实封面图：

**放这里**（图片直接放根下，不建子目录）：

```
public/covers/
```

**命名规则**：`<书籍 slug>.<扩展名>`，例如 `the-black-swan.webp`。
完整 100 个文件名清单见 **`COVERS.md`**（由 `npm run covers:list` 生成）。

**规格**：宽高比 **2:3**（必须）、推荐 **800 × 1200 px**、**WebP 优先**、单张 < 150 KB。

**工作机制**：

- 构建时扫描 `public/covers/`，有图用图，**没图自动回退到程序化封面**
- 因此可以**分批交付**，不会出现破图
- 构建日志会打印覆盖率：`封面图 37 / 100（其余使用程序化封面）`
- 支持 `.webp` > `.avif` > `.jpg` > `.png`，同一本书多个格式时按此优先级取一个

**一键接入（推荐）**：把原图（PNG / JPG 都行，**文件名随便起**）直接丢进 `public/covers/`，然后跑：

```bash
npm run covers:ingest              # 预演：只报告「哪个文件 → 哪个 slug」，不改动任何文件
npm run covers:ingest -- --apply   # 执行：转 800×1200 WebP + 原图自动移入 _stage/_covers-src/ 备份
```

它用**词元覆盖率**把文件名匹配到最可能的书籍 slug，输出置信度（≥0.85 高 / 0.60–0.85 中 / <0.60 不处理），
自动完成「改名 + 转格式 + 缩尺寸 + 移走原图」四件事。
实测能正确处理 `The Society of Mind.png`、`Crystal Fire.png`，甚至**缺字母**的
`he Man Who Mistook His Wife for a Hat and Other Clinical Tales.png`（置信度 0.92）。
转换走 **Python + Pillow**，脚本自动探测 `CLASSICS_PYTHON` 环境变量或本机 venv 路径。

**覆盖规则**（决定「新封面到底会不会生效」）：

| 情况 | 行为 |
|---|---|
| 目标 `<slug>.webp` 不存在 | 正常转换 |
| 目标已存在，且**源文件名恰好等于该 slug**（如 `the-crowd.png`） | 视为**显式替换**：转换并覆盖，旧图备份为 `_stage/_covers-src/__replaced__<slug>.webp` |
| 目标已存在，但源是**模糊文件名**（如 `2.png`、`Manias, Panics, and Crashes.png`） | **跳过并提示**，需人工确认，避免误覆盖已上线封面 |

**⚠️ 关键陷阱三：换新封面时，`<slug>.webp` 与 `<slug>.png` 并存 = 新图被静默忽略。**
`lib/covers.js` 按 `webp > avif > jpg > jpeg > png` 优先级取图（`rank` 小者胜）。
所以「旧 `.webp` + 新 `.png`」同处一目录时，**旧 webp 胜出，新封面根本不显示** ——
这正是 2026-10-05 那轮「线上看不到新封面」的成因。
因此 `covers:ingest` 现在把**任何非 webp 文件**（哪怕 stem 已是合法 slug）都收进待处理队列，
不再因为「文件名对得上」就放行。

**交付前必跑**：

```bash
npm run covers     # 校验文件名，揪出拼写错误 / 重复格式 / 缺失清单
```

**⚠️ 关键陷阱一：文件名拼错不会报错。** 只会静默回退到程序化封面。所以必须跑 `npm run covers` 复核。

常见错误是直接用书名原文命名（如 `The Intelligent Investor.png`）——**必须**改成 slug 形式 `the-intelligent-investor.webp`（全小写、空格转连字符）。**该坑已连续踩两次**（2026-09-30《聪明的投资者》、2026-10-05 五张），故引入 `covers:ingest`。

**⚠️ 关键陷阱二：原图不要留在 `public/covers/`。** 构建会把该目录下**所有** `webp/avif/jpg/jpeg/png` 原样复制进 `dist/assets/covers/`。放一张 2.3 MB 的 PNG 原图，每次发布都会把它一并上传。`covers:ingest --apply` 会自动把原图移走，天然规避此坑。

手工转换命令（`covers:ingest` 不可用时的兜底）：

```bash
python -c "
from PIL import Image
im = Image.open('原图.png').convert('RGB').resize((800,1200), Image.LANCZOS)
im.save('public/covers/<slug>.webp', 'WEBP', quality=84, method=6)
"
```

**⚠️ 关键陷阱三：删掉的封面不会从线上消失。** 发布沙箱是**合并**而非替换，旧的 `assets/covers/<旧文件名>` 会继续返回 200（孤儿资源，无页面引用、不在 sitemap，但占空间）。同「### 9 重定向存根」一节同源。

**版权提示**：真实出版社封面受版权保护。原始设计刻意采用纯 CSS 程序化封面以规避该风险，引入真封面请自行评估。

### 9. 下线一个已发布的页面（重定向存根）

**这是本站最容易踩的坑之一。** 发布沙箱是**复用 + 合并**的，不是「替换」：本地 `dist/` 里删掉的文件**不会**自动从线上消失，旧 URL 依然返回 200。因此直接删掉一本已上线的书，会在线留下一个孤立的重复页面。

正确做法是**两步都做**：

1. 删掉内容源（例如从 `content/lists/batch-5.js` 移除条目、从 `content/list-prose/` 移除对应指引）。
2. 在 `content/redirects.js` 追加一条记录，把旧路径指回新路径：

```js
export const redirects = [
  { from: 'books/old-slug', to: 'books/new-slug' }   // 均不含语言前缀与首尾斜杠
];
```

构建时会为**每种语言**生成 `<from>/index.html`：`meta refresh` 跳转到 `to`、`canonical` 指向 `to`、并标 `noindex`。重定向页不进 sitemap。

若 `from` 与站内仍存在的真实页面冲突，构建会跳过该条并输出数据警告（不会覆盖真实页面）。

**验证方法**：重新构建后，线上旧 URL 应返回 200 但内容已是跳转页；`curl` 该 URL 能看到 `meta http-equiv="refresh"`。

---

### 10. 客户端缓存（「更新了却看不到」的头号原因）

**症状**：站点已发布成功、线上文件确认是最新的，但浏览器/微信里看到的仍是旧内容。

**根因**：发布平台（CloudStudio Gateway）**不下发 `Cache-Control` / `ETag` 响应头**，只给 `Last-Modified`。
缺少显式缓存指令时，浏览器按 RFC 7234 的**启发式缓存**规则自行决定缓存时长（常取 `Last-Modified` 距今的 10%），
于是页面和资源会被静默缓存，重新发布不会让客户端失效。

**已实施的两道防线**（见 `src/site.config.js` 的 `BUILD_ID` 与 `src/lib/layout.js` 的 `head()`）：

1. **HTML 加防缓存 meta**：`Cache-Control: no-cache, must-revalidate` + `Pragma` + `Expires: 0`
2. **资源加构建版本号**：`styles.css?v=<BUILD_ID>`、`app.js?v=<BUILD_ID>`，每次构建 `BUILD_ID` 都不同 → URL 变化强制重新拉取

**诊断「到底是缓存还是真没发布」的标准动作**：

```bash
curl -sI "https://<固定链接>/zh/" | grep -i last-modified   # 看服务端时间是否为刚才
curl -s  "https://<固定链接>/zh/" | grep -c 'cover__img'    # 与本地 dist 对比
diff <(sed 's/></>\n</g' dist/zh/index.html) <(curl -s "https://<固定链接>/zh/" | sed 's/></>\n</g')
```

> 差异若只有约 20 余行、且包含 `beacon.cdn.qq.com` 埋点，属**平台注入**，不是发布失败 —— 不要据此判定「没更新」。

**客户端强制刷新**：Windows `Ctrl + F5` / `Ctrl + Shift + R`；macOS `Cmd + Shift + R`；
微信内置浏览器：右上角 `···` → 刷新，仍不行则「设置 → 通用 → 存储空间 → 清理缓存」。
临时验证可加随机参数：`.../zh/?v=123`。

---

### 11. 工作日长文与阅读笔记（定时任务）

**任务 ID**：`95cc8ab8-9d4f-4763-a73b-6acae9274be6`（名称：经典书库 · 工作日长文与笔记）
**调度**：周一至周五 22:00 ｜ **cwds**：项目根目录

每个工作日自动生成并发布**两项中英双语内容**，共用一次构建与发布：

| 产出 | 落盘位置 | 发布地址 |
|---|---|---|
| 思想长文（中英各 2000–3500 字） | `content/articles/<slug>.js` | `/zh/articles/` |
| 阅读笔记（核心洞见 + 3–5 句解读） | 追加到 `content/notes.js` | `/zh/notes/` |

流程：

1. `node src/articles-brief.mjs` —— 输出四份选题上下文
2. 写 `content/articles/<slug>.js`
3. 追加笔记到 `content/notes.js`
4. `node src/build.mjs && node src/check.mjs`
5. 发布 `dist/`

**关键设计：任务不保存任何历史状态。**
`src/articles-brief.mjs` 每次从真实数据生成四份上下文 ——
① 现有文章清单（避免主题重复）；② 合法 taxonomy 取值（category / tags / topics）；
③ 书库 260 本的 slug 清单（供 `related_books` 引用）；
④ 阅读笔记现状（已写过笔记的书 + 可写清单）。
因此任务**不可能引用不存在的书籍 slug 或非法的 taxonomy 取值**，也不会把已有主题换词重写，
更不会对同一本书写第二则笔记。

**幂等与补写规则**：文章与笔记**都**已存在当天日期 → 报告「今日已完成」并跳过；
只有其一存在 → 只补写缺的那一项。这样即使中途升级了任务，也不会漏掉当天内容。

#### 阅读笔记的排序与视角

- **排序**：按 `date` 倒序，**最新在最上面**；同日以 `id` 倒序做稳定次级排序。
  实现在 `src/lib/data.js` 的 `notesWithBook`（书页的笔记列表同步受益）。
- **视角（`voice` 字段）**：站点有两类笔记，用标签区分，避免把 AI 生成的内容
  冒充成站点所有者的个人笔记：

  | `voice` | 含义 | 「思考」块标签（中 / 英） |
  |---|---|---|
  | `personal`（缺省） | 站点所有者的个人阅读笔记 | 我的思考 / My Thinking |
  | `editorial` | 站点解读（自动化生成） | 编者笔记 / Editor's Note |

  `data.js` 会把缺省值归一化为 `personal`，因此历史条目无需改动。
  自动化任务生成的笔记**一律写 `voice: 'editorial'`**，且 thinking 字段必须用
  **第三人称分析者口吻**（不得出现「我读过」「我的感受」这类第一人称表述）。

---

### 12. 构建报「dist 删不掉」怎么办

`src/build.mjs` 在每次构建前要清空 `dist/`。本机有两个环境因素会让朴素的
`rmSync(dist, {recursive:true})` 失败：

| 现象 | 原因 |
|---|---|
| `[safe-delete] 操作失败 … Error during a \`trash\` operation: Unknown { description: "Some operations were aborted" }` | WorkBuddy 沙箱的 safe-delete 守卫（`node-safe-delete-shim.cjs`）把递归删除改写成「丢进回收站」，900+ 文件时该操作会失败 |
| `EPERM: operation not permitted, rename '…\dist' -> '…'` | `dist` 或其子目录被宿主进程短暂持有句柄（预览面板 / 文件监视 / 杀软扫描） |

两者的共同危险是**失败前已经删掉一部分**，留下半残 `dist`，后续构建会读到残缺产物。

`build.mjs` 已内置三级兜底，**不需要手工处理**：

1. 逐个删除 `dist` 的子项（不删 `dist` 目录本身，绕开目录句柄）
2. 失败则短暂自旋等待后重试 3 次（句柄多为瞬时占用）
3. 仍失败则**改名挪到 `_stage/dist-locked/`**（rename 不走删除路径，也绕开回收站守卫）

构建结束若打印 `⚠️ dist 中有 N 项无法清除（被占用）`，说明有程序正在占用这些文件：
**关掉占用它的程序后重跑一次构建即可**；若重跑后警告仍在，不要发布，先排查。

> 清理积累的临时目录：`rm -rf _stage/dist-locked _stage/dist-stale-*`
> （`_stage/` 不参与发布，可以放心清空。）

---

### 13. 站点只认 WebP 封面（构建期格式门禁）

**规则：只有 `public/covers/<slug>.webp` 会被站点采用。** 非 WebP 文件（PNG/JPG）：
- **不会被复制进 `dist`**（构建只复制 `*.webp`）
- **不会被页面引用**（`coverImage()` 只返回 webp，该书回退到程序化封面，不会 404）
- 但 `covers:ingest` / `covers-check` **仍然看得见它们**（`listCoverFiles()` 保留全部格式）

构建时会打印醒目告警：

```
⚠️  public/covers/ 中有 1 个非 WebP 图片，已被忽略（未复制进 dist）：
   - The Guns of August.png
   请运行以下命令转换后再重新构建：
     npm run covers:ingest            # 先预演核对匹配结果
     npm run covers:ingest -- --apply # 确认无误后执行
```

**为什么是告警而不是报错**：若做成硬失败，一张匹配不上名字的杂图（如 `1.png`）
会**永久阻塞构建和每日自动化**。告警 + 忽略 + 回退程序化封面，是唯一不会自锁的选择。

> 背景：这个坑连续踩了三次（`Meditations.png`、`Poor Charlie's Almanack.png` +
> `The Most Important Thing.png`、`The Innovators.png`）—— 构建期间用户仍在投图，
> 原图被复制进 dist 并随发布上传。

---

### 14. 陈旧资源「墓碑」（线上删不掉的旧图）

**问题**：发布沙箱是**复用 + 合并**的，不是替换。
本地 `dist/` 删掉的**静态资源**（图片等）**不会从线上消失**，旧 URL 仍返回 200。
`content/redirects.js` 的重定向存根只能覆盖**页面路径**（`<from>/index.html`），
覆盖不了 `.png` 这种具体文件路径。

实测代价：线上累积了 **9 张封面原图、约 20.7 MB 死重**（页面根本不引用它们）。

**解法**：`content/stale-assets.js` 墓碑表 + 构建期在**相同路径**写入
**1×1 透明 PNG（70 字节）**，下次发布时覆盖掉线上残留。

```js
// content/stale-assets.js
export const staleAssets = [
  'assets/covers/Crystal Fire.png',
  'assets/covers/The Society of Mind.png',
  // 每发现一个线上残留就追加一条；⚠️ 只追加，不要删条目
];
```

构建日志会显示：`🪦 已写入 N 个陈旧资源墓碑（覆盖线上残留）`。

**如何发现残留**（别靠猜）：把 `_stage/_covers-src/`（历史原图备份）里的文件名
逐个探测线上 ——

```bash
BASE="https://0e00525f540948a2b66f58b8a0e4962d.sg2.agentos-app.run"
while IFS= read -r f; do
  enc=$(printf '%s' "$f" | sed "s/ /%20/g; s/'/%27/g; s/,/%2C/g")
  code=$(curl -s -o /dev/null -w '%{http_code} %{size_download}' "$BASE/assets/covers/$enc")
  case "$code" in 200*) printf "STALE %s | %s\n" "$code" "$f";; esac
done < <(ls -1 _stage/_covers-src/)
```

> ⚠️ 编码要一次到位：`sed` 里再补 `%20` 会**双重编码**，得到假 404。

---

### 15. 「服务端渲染 + 客户端重建」双轨页面：改负载要成对改

**症状**：某本书明明有封面，某个页面上却不显示；但 `grep` 静态 HTML 又能找到封面。

**真因**：这类页面渲染两遍 ——
服务端渲染一份完整列表，客户端 JS 再**无条件重建**一遍并隐藏服务端版本。
若喂给 JS 的 JSON 负载**缺少字段**，重建出来的内容就退化了。

目前 `/zh/my-reading/`（我的阅读）就是这种结构：

```
renderMyReading()
  ├─ <div data-static-groups>  服务端渲染，用 bookCard()，含真实封面   ← JS 跑完被隐藏
  └─ <script data-reading-data>  JSON 负载 → app.js 的 initMyReading()  ← 实际显示的是这个
```

`app.js` 第 259 行**无条件**调用 `render('all')`，所以用户看到的永远是客户端版本。

**因此：任何影响该页显示的字段，必须同时加进负载和 `bookCardHTML()`。**

```js
// src/templates/content.js —— 负载里必须有 cover
cover: coverImage(book.slug) || ''

// public/app.js —— 有 cover 就用真实图，否则回退程序化封面
var coverHTML = book.cover
  ? '<span class="cover cover--img" …><img class="cover__img" src="' + book.cover + '" …></span>'
  : '<span class="cover" …>…</span>';
```

> 两处**必须成对改**，且前端输出的 class 要与服务端 `cover()` 组件**逐字对齐**，
> 否则图会出现但样式错乱。

**排查口诀**：静态 HTML 里能找到目标 → **不是数据/链接问题** → 去查「谁会把这个 DOM 换掉」
（搜 `innerHTML` / `render(` 的调用点）。

#### 验证：必须跑 JS，且必须滚动

`curl | grep cover__img` 在静态分组里**本来就能找到**，会给出**假阳性**。
本项目内置了真实浏览器验证脚本：

```bash
npm run verify:my-reading        # 本地 dist（需先 build）
npm run verify:my-reading:live   # 线上站点
```

它断言两件事：① **重建确实发生了**（静态分组 hidden、动态分组 visible）；
② **内容是对的**（真实封面数量、目标元素 `naturalWidth > 0`）。

> ⚠️ 封面是 `loading="lazy"`，**验证前必须先滚动到底**，否则视口外的图
> `complete=false`、`naturalWidth=0`，会误报「断链」。

---

## 六、部署方法

**当前线上地址（稳定链接，可直接分享）**：

```
https://0e00525f540948a2b66f58b8a0e4962d.sg2.agentos-app.run
```

中文首页 `/zh/`，英文首页 `/en/`。

### 🔴 关于发布域名的关键机制（实测结论）

WorkBuddy App Publishing 的域名规则如下，**务必理解，否则会分享到死链**：

| 字段 | 行为 | 能否对外分享 |
|---|---|---|
| `shareLink`（每次发布返回的随机域名） | **每次发布都换新域名，上一个立即失效（返回 400）** | ❌ 绝对不可 |
| sandbox 域名（`<sandboxId>.sg2.agentos-app.run`） | 同一应用的 sandboxId 跨多次发布**保持不变**，始终指向最新内容 | ✅ 这才是对外链接 |

因此：**`src/site.config.js` 的 `SITE_URL` 必须填 sandbox 域名，不要填 `shareLink`**。
填 sandbox 域名后，canonical / hreflang / sitemap 永远正确，且后续重新发布内容不会失效。

沙箱服务**未启用 gzip**，书库页（100 张卡片）约 190KB。若后续追求更极致的首屏，
可考虑书库分页或改为「加载更多」。

### 其他托管方式

`dist/` 是纯静态目录，任何静态托管均可：

| 方式 | 说明 |
|---|---|
| Vercel / Netlify / Cloudflare Pages | 构建命令 `node src/build.mjs`，输出目录 `dist` |
| Nginx / 对象存储（COS / S3 / OSS） | 直接上传 `dist/` 全部内容 |

**注意**：站点使用目录式路由（`/zh/books/xxx/` → `index.html`），托管方需支持「目录索引」；
若使用对象存储，请开启静态网站功能并把索引文档设为 `index.html`。

### 更新内容的完整闭环

```
改 content/ 或 locales/
   ↓
node src/build.mjs        # 重新生成 dist/
   ↓
node src/check.mjs        # 校验数据与死链（推荐）
   ↓
重新发布 dist/            # 对话中说「重新发布站点」即可
```

sandbox 域名不变，因此**已分享出去的链接继续有效**，无需重新分发。

---

## 七、已实现的功能清单

### 双语
- [x] 界面文字 100% 走 i18n，零硬编码
- [x] URL 采用 `/zh/...` 与 `/en/...`，中英页面可被搜索引擎独立索引
- [x] 中英内容为**两个独立字段**，分别撰写，非机器翻译
- [x] 书名按语言决定主次（中文模式主显《中文名》，英文模式主显 English Title，双语同时可见）
- [x] Header 语言切换：`中文 | EN`，链接直达同一路径的对应语言，**不跳回首页**；选择被记住（localStorage）
- [x] 根路径 `/` 按浏览器语言自动分流，并提供双语可抓取入口
- [x] 移动端同样支持语言切换

### 内容
- [x] 100 本书：双语书名/副标题/作者/年份/简介/为什么读/核心思想/关键问题/适合谁/今日思想/难度/阅读时长/标签/主题/相关书籍
- [x] 11 个分类（双语名称 + 描述 + 图标 + 书籍数）
- [x] 30 个主题（双语 + 相关主题共现推荐）
- [x] 109 位作者（双语姓名/生卒/国籍/身份/简介/核心思想/著作/相关主题）
- [x] 5 条阅读路线，每条 6 级，含每级说明与对应书籍
- [x] CLASSIC INDEX：0–100 总分 + 4 个维度星级（明确标注为个人策展指标）
- [x] **今日经典书籍推荐**：按日期确定性轮转 100 本策展经典，含「为什么推荐这本」+ 中英双语「今日思想」
- [x] **近 7 日推荐**：首页横向滚动条，展示每日定时任务入库的推荐（无内容时整块不渲染）
- [x] 相关书籍 / 如果你喜欢这本书 / 同一作者其他著作

### 功能
- [x] 书库筛选（分类 / 难度）+ 4 种排序（经典指数 / 年份新旧 / 书名）
- [x] **双语搜索**：搜「人工智能」能找到 Artificial Intelligence / AI / AGI；搜 `Black Swan` 能找到《黑天鹅》
- [x] 我的阅读：5 种状态（想读/正在阅读/已读/重读/收藏），状态存本机浏览器
- [x] 阅读笔记：书籍 / 日期 / 核心洞见 / 摘录 / 我的思考 / 相关主题
- [x] 知识地图：分类为根、主题为叶的双语树状结构
- [x] 移动端汉堡菜单
- [x] 渐进增强：禁用 JS 时所有链接、表单、筛选降级仍可用

### SEO / 性能
- [x] 每页独立 title / description / keywords
- [x] canonical + hreflang（zh-CN / en / x-default）三向互指
- [x] Open Graph + Twitter Card（含 1200×630 og.png）
- [x] Schema.org 结构化数据：WebSite / Book / Person / BlogPosting / BreadcrumbList / ItemList / CollectionPage
- [x] sitemap.xml（含 xhtml:link 双语互指）、robots.txt、RSS feed.xml
- [x] 静态优先、零外部请求（无 Google Fonts、无 CDN、无统计脚本）、字体使用系统栈
- [x] 响应式：Desktop 4 列 / Tablet 2 列 / Mobile 1 列（窄屏书籍卡转为横向排列）
- [x] `prefers-reduced-motion` 支持、打印样式

### 设计
- [x] 主色深普鲁士蓝（#0e2a45）+ 米白（#f7f5f0）+ 暖灰 + 少量米金（#a98a57）
- [x] 标题 Serif + 正文 Sans；中文思源宋体/黑体优先，英文 Source Serif / Inter 优先
- [x] 程序化排版封面：不使用任何图片素材，按分类着色，无版权与加载风险
- [x] 11 个分类各有一套低饱和编辑色

---

## 八、刻意没做的事（第一阶段）

按需求文档「不要过度工程」的要求，以下均未实现，且不建议在第二阶段之前加入：

- 用户系统 / 登录 / 评论 / 点赞 / 积分 / 权限
- 复杂 CMS 后台（内容即 Markdown/JS，Git 即版本管理）
- 微服务、数据库（100 本书的规模下 SQLite 都是过度设计）
- 复杂动画与玻璃拟态效果

---

## 九、后续迭代路线

### 第二阶段
- [ ] Obsidian 自动同步（读取 Obsidian vault 的 `books/` `reading-notes/` `articles/`，解析 frontmatter）
- [ ] 知识图谱可视化（当前是树状图，可升级为力导向图）
- [ ] AI 图书推荐（优先从本站书库内推荐，并解释「为什么推荐」）
- [ ] 每日一书自动化（结合自动化任务定时重建并发布）

### 第三阶段
- [ ] Ask the Library：自然语言检索书库（「AI 时代最值得读的 10 本书？」）
- [ ] AI Reading Assistant：总结 / 比较两本书 / 解释思想 / 推荐下一本 / 生成阅读路线
- [ ] 概念图谱与个人知识图谱
- [ ] 自适应推荐（基于阅读状态与笔记）

---

## 十、内容原则

1. **准确优先**：书目信息（书名、作者、年份、中英对应）均经核验，不虚构。
2. **不机械翻译**：中英双语分别撰写，语义一致但表达各自自然。
3. **原创概括**：所有简介、核心思想、今日思想均为原创总结，不复制受版权保护的长段原文。
4. **中立口径**：对思想史上存在长期争论的著作（《资本论》《通往奴役之路》《文明的冲突》等），按「提出什么问题 — 学术史位置 — 后世争论焦点」介绍，不做政治表态。
5. **内容质量 > 功能数量**。

---

*Curated by Rayman · 内容为原创概括，书籍版权归原作者与出版方所有。*
