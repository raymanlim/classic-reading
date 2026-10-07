# AGENTS.md — 给 AI Agent 的上手说明

> 面向 **AI 编码 Agent**（Claude Code / Codex / Cursor / 云端 Agent）。
> 人类向完整文档在 `README.md`（约 1000 行，含全部细节与历史决策）；本文只讲**接手干活必须知道的事**。
> 冲突时以本文为准，本文未覆盖的细节查 README。

---

## 0. 一分钟理解

**经典书库** —— 双语（中/英）个人图书馆站点。用经典书籍建立自己的「世界模型」。

- **零 npm 依赖**的 Node 静态站点生成器（SSG）。`node src/build.mjs` → 输出 `dist/`。
- **内容即数据库**：`content/` 下的 `.js` 模块就是数据源，**必须提交进 Git**。
- 规模：260 本书（100 本策展经典 + 160 本书单导入）、12 分类 / 41 主题 / 109 标签 / 109 作者 / 5 条阅读路线 / 7 篇文章 / 约 892 个页面。
- URL 目录式路由：`/zh/books/<slug>/`、`/en/books/<slug>/`。

```
content/     ← 唯一的数据库（书目 / overlay / 作者 / 分类 / 路线 / 文章）
locales/     ← 界面文案（zh-CN.json / en-US.json，key 必须对齐）
public/      ← 静态资源（styles.css / app.js / og.png / covers/）
src/         ← 构建器（build / serve / check / ingest / covers / audit）
dist/        ← 构建产物 —— 部署这个目录（不提交）
```

---

## 1. 🔴 硬约束（违反会静默出错，不是报错）

1. **零依赖**。不要引入任何 npm 包，不要跑 `npm install`（没有 dependencies）。构建器只用 Node 内置模块。
2. **`content/` 是数据库，必须提交**。永远不要把 `content/` 加进 `.gitignore`。
3. **`slug` 一旦发布不可改**。它是 URL 的一部分，改了就是死链。要下线页面，必须在 `content/redirects.js` 里加显式重定向（发布沙箱是「合并」而非「替换」，删掉旧文件不会删掉线上旧 URL）。
4. **`locales/zh-CN.json` 与 `en-US.json` 的 key 必须完全一致**。模板里不允许出现硬编码文字，一律 `t(lang, 'key')`。
5. **封面只认 WebP**。构建期有格式门禁，放 PNG/JPG 会被拒或静默跳过。命名必须是 `<slug>.webp`。
6. **中英内容是两个独立字段，分别撰写**，不是机器翻译。不要用翻译结果糊弄 `_en` 字段。
7. **`dist/` 不提交**（已在 `.gitignore`）。

---

## 2. 常用命令

```bash
# 构建（生成 dist/）—— 每次改完 content/ 或 locales/ 都要跑
node src/build.mjs

# 本地预览 → http://localhost:4321/zh/  （英文 /en/）
node src/serve.mjs
node src/serve.mjs 8080            # 换端口

# 数据 + 死链校验 —— 提交前必跑
node src/check.mjs

# 封面文件名校验（放了新封面必跑，能揪出拼写错误）
node src/covers-check.mjs

# 封面一键接入（原名匹配 + 转 WebP + 移走原图）
node src/covers-ingest.mjs

# 重新生成封面清单 COVERS.md（书目变动后跑）
node src/gen-covers-md.mjs

# 多端响应式审计（8 档宽度 × 11 条路由，截图落 _audit/）
node src/audit.mjs
node src/audit.mjs --og            # 顺便重新生成 public/og.png
```

等价 npm script：`npm run build` / `serve` / `check` / `covers` / `covers:ingest` / `covers:list`。
**Node 20+**。

---

## 3. 日常任务：每日推荐（最重要的自动化）

每日向书库追加 **2 本轻量书目**（来自第三方频道推荐），共两个文件、同日期同 slug：

| 文件 | 作用 |
|---|---|
| `content/lists/daily-YYYY-MM-DD.js` | 条目本身（书名/作者/分类/年份等事实字段） |
| `content/list-prose/daily-YYYY-MM-DD.js` | 该条目的阅读指引 overlay（简介/为什么读/核心思想/关键问题/适合谁/阅读指引） |

**唯一写入口**是 `src/ingest-books.mjs`，不要手写这两个文件。

```bash
# 1. 导出去重清单（避免推荐重复书目）—— 先跑这个
node src/ingest-books.mjs --existing

# 2. 导出合法取值（分类 / 作者 / 标签的可用 slug）
node src/ingest-books.mjs --taxonomy

# 3. 入库（载荷 JSON 放 _inbox/，模板见 _inbox/_TEMPLATE.json）
node src/ingest-books.mjs --file _inbox/YYYY-MM-DD-<slug>.json
```

流程：**导出已有清单 → 选题（避开重复）→ 写载荷 JSON → 入库 → build → check → 提交**。

### 写作规范要点

- 事实字段必须**真实可核验**（书名、作者、年份、原语言）。不确定就查，不要编。
- `category` 必须是 `content/taxonomy.js` 里的合法 slug；`author` 必须是 `content/authors.js` 里的 slug。
- 作者不在 `authors.js` 里时，补一份双语作者档案。
- 轻量条目与策展经典**共用同一套卡片、搜索与详情页**，靠 `tier` 字段区分。

### 新增策展经典（比每日推荐重）

三步，缺一不可：

1. `content/books.manifest.js` 追加元数据（含 `slug` / `category` / `author` / `classic_index` / `sub` 四维评分 / `batch`）
2. 对应的 `content/books/batch-N.js` 补该书的完整 overlay（双语简介 / 为什么读 / 核心思想 / 关键问题 / 适合谁 / 今日思想）
3. 作者不在 `content/authors.js` 就补档案

然后 `node src/build.mjs && node src/check.mjs`。校验脚本会明确指出缺哪个字段、哪个 slug 非法。

---

## 4. 质量门禁（提交前必须全绿）

```bash
node src/build.mjs   # 必须 RC=0，且页数与预期一致
node src/check.mjs   # 数据完整性 + 死链，必须无错误
```

- `check.mjs` 报错**必须修**，不要靠「先提交再说」。
- 改动了界面文案 → 额外确认 zh/en 两边 key 对齐。
- 新增/更换了封面 → 额外跑 `node src/covers-check.mjs`。
- 大改版式 → 额外跑 `node src/audit.mjs`（多端响应式）。

---

## 5. 部署

**目标架构：GitHub Actions → Cloudflare Pages（自动部署）。**

```
改 content/ 或 locales/
   ↓ git commit && git push
GitHub Actions: node src/build.mjs → node src/check.mjs → 部署 dist/
   ↓
线上自动更新
```

- 构建命令 `node src/build.mjs`，输出目录 `dist`，**无需安装依赖**。
- 站点用目录式路由（`/zh/books/xxx/` → `index.html`），托管方需支持目录索引。Cloudflare Pages 默认支持。
- `src/site.config.js` 的 `SITE_URL` 必须是**最终对外域名**，否则 canonical / hreflang / sitemap 全错。
- 工作流文件：`.github/workflows/deploy.yml`（密钥走 GitHub Secrets，勿硬编码）。

> ⚠️ **历史遗留**：本站曾托管在 WorkBuddy App Publishing，旧链接形如
> `https://<sandboxId>.sg2.agentos-app.run`。README 第六节描述的「shareLink 每次换域名」机制
> 是那套托管的问题，**迁移到 Cloudflare Pages 后不再适用**。迁移完成后应更新 README 该节。

---

## 6. 已知坑（踩过的，别再踩）

| 坑 | 现象 | 处理 |
|---|---|---|
| **客户端缓存** | 改了内容、线上也更新了，但浏览器还是旧的 | 「更新了却看不到」的头号原因。硬刷新 / 无痕验证；不要误判为发布失败 |
| **`dist/` 删不掉** | 构建报删除失败 | 见 README 第 12 节。沙箱 safe-delete 守卫会拦批量删除 |
| **陈旧资源墓碑** | 线上删不掉的旧图 | 见 README 第 14 节，有专门机制 |
| **双轨页面** | 「服务端渲染 + 客户端重建」页面，改负载要成对改 | 见 README 第 15 节 |
| **`_stage/`** | 封面原图与中间产物（约 150MB） | 已在 `.gitignore`，**不要提交** |
| **`_exist.txt`** | 去重清单产物 | 已在 `.gitignore` |

---

## 7. 提交规范

```
feat:     新增内容或功能（如新增书目、新文章）
content:  纯内容更新（每日推荐入库）
fix:      修 bug
docs:     文档
chore:    构建/配置/杂项
```

- 提交前工作区应只有**你这次改动**的文件，不要顺手带上无关变更。
- 提交信息用中文或英文均可，但要能说清「改了什么、为什么」。
- **不要** `git add -A` 之后不看 diff 就提交 —— 先 `git status` 确认范围。

---

## 8. 与其他仓库的关系

本站是「Rayman 的三个静态站点」之一，另两个：

| 仓库 | 内容 |
|---|---|
| `raymanlim/classic-cinema-daily` | 世界经典电影日报（Next.js） |
| `raymanlim/fyx-material-intel` | 方宇鑫半导体材料情报站（Python SSG） |

三者**互相独立**，不要跨仓库引用路径。
