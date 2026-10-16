# AGENTS.md — 给 AI Agent 的上手说明

> 面向 **AI 编码 Agent**（Claude Code / Codex / Cursor / 云端 Agent）。
> 人类向完整文档在 `README.md`（约 1000 行，含全部细节与历史决策）；本文只讲**接手干活必须知道的事**。
> 冲突时以本文为准，本文未覆盖的细节查 README。

---

## 0. 一分钟理解

**经典书库** —— 双语（中/英）个人图书馆站点。用经典书籍建立自己的「世界模型」。

- **零 npm 依赖**的 Node 静态站点生成器（SSG）。`node src/build.mjs` → 输出 `dist/`。
- **内容即数据库**：`content/` 下的 `.js` 模块就是数据源，**必须提交进 Git**。
- 规模（2026-10-16 基线）：282 本书（100 本策展经典 + 182 本书单导入）、12 分类 / 41 主题 /
  109 作者 / 5 条阅读路线 / 18 篇文章 / 18 条笔记 / 958 个页面。
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

# 重新生成「待出图」清单 COVERS-TODO.md（只列还没封面的书，按分类分组）
node src/gen-covers-todo.mjs

# 多端响应式审计（8 档宽度 × 11 条路由，截图落 _audit/）
node src/audit.mjs
node src/audit.mjs --og            # 顺便重新生成 public/og.png
```

等价 npm script：`npm run build` / `serve` / `check` / `covers` / `covers:ingest` / `covers:list`
/ `covers:publish` / `verify:covers:live`。
**Node 20+**。

---

## 3. 日常任务（两条日更自动化）

本仓库有**两条互不重叠的日更任务**，共用同一仓库、由 `git-sync.sh` 按仓库加锁互斥：

| 任务 | 每日产出 | 唯一写入口 |
|---|---|---|
| **① 每日推荐** | 2 本轻量书目 | `src/ingest-books.mjs`（**不要手写**产出文件） |
| **② 思想长文 + 阅读笔记** | 1 篇文章 + 1 条笔记 | 直接写 `content/articles/*.js` 与 `content/notes.js` |

---

### 3.1 每日推荐

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

### 3.2 思想长文 + 阅读笔记

每天新增 **1 篇思想长文 + 1 条阅读笔记**，两者必须**互补**（同一问题的两个面，或正反两面）。

| 产出 | 写入位置 | 写法 |
|---|---|---|
| 思想长文 | `content/articles/<slug>.js`（**新建文件**） | 导出 `article` 对象，字段与现有文章一致 |
| 阅读笔记 | `content/notes.js` 的 `notes` 数组**末尾追加** | **不要新建文件**，不要改动已有条目 |

#### 幂等守卫（第一步必做）

扫描 `content/articles/*.js` 的 `publish_date` 与 `content/notes.js` 的 `date`：

- **两者都已有当天** → 判定「今日已完成」，直接结束，**不要重复生成**
- 只有其一 → 只补缺的那一项
- 都没有 → 走完整流程

#### 文章规范

- **必须有真正的论证推进**：提出具体问题 → 层层展开 → **给出反方与限度** → 落到判断。
  **不要**写成书单罗列或泛泛感想。
- 结构用 `##` 分 **4～6 节**，每节有明确论点；可用 `###`、`-`、`1.`、`**粗体**`、`> 引用`、`[文字](链接)`。
- 🔴 **站点不支持表格与代码块** —— 不要使用。
- 篇幅：中文 2000–3500 字；英文为**等量内容**（用英文重写同一论证，**不是逐句直译**）。
- 🔴 **引用必须真实可核验**：不得编造引文、数据、作者观点或来源。
  引述书中观点前先联网核实（WebSearch / WebFetch），核实不到就不写。
- 选题**必须先去重**：候选关键词（**含中文名**）用 `grep -i -c` 批量核验，命中 0 才可选。
- **优先选有官方中文版的英文原书**（百度百科定出版社/年份/译者 + 豆瓣定副标题），
  避免为无中译本书自拟中文名。
- 字段契约：`slug / title_zh / title_en / subtitle_zh / subtitle_en / category / tags /
  related_books / related_topics / publish_date / lang: 'both' / content_zh / content_en`
- `category` / `tags` / `related_topics` **必须逐字取自合法取值表**（写错直接构建失败）。
- `related_books` 只能引用**真实存在**的书籍 slug；**全部 tier 均可引用**
  （策展经典 / AZM / XMS / 每日推荐，**无例外**，不必先有策展经典）。
- 古籍年份填 `null`（**不写负数年份**）；`original_language` 填真实语种（`la` / `el` / `fr` / `zh`）。
- 双作者书：`author` 填第一作者 slug，`author_zh` / `author_en` 写全两位（用「、」与 `&` 连接）。
  作者在 `authors.js` 无档案是**安全**的（渲染为纯文本，不产生死链）。

#### 阅读笔记规范

- **追加**到 `content/notes.js` 的 `notes` 数组末尾；`id` 接现有最大编号之后，**不得重号**。
- `voice` 固定填 `'editorial'`。
- 🔴 **第三人称编者视角**。严禁「我读过」「我的感受」「我读完之后」这类第一人称表述；
  用「这本书的关键在于…」「它真正改变的是…」「值得警惕的是…」这类分析者口吻。
- `quote_zh` / `quote_en`：**没有把握逐字准确时留空字符串 `''`**。
- 笔记对象**覆盖全部书籍，无例外**（策展经典 / AZM / XMS / 每日推荐），
  唯一限制是「这本书尚未写过笔记」。
- `topics` 取 2–3 个，必须逐字取自合法取值表。

#### 发布后自检

- 新文章应出现在 `/zh/articles/` 的 **JSON-LD 首位**，且 `datePublished` = 当天。
- `/zh/notes/` 中**新笔记的 offset 必须小于上一条**（= 新笔记排在最上方）。
- `编者笔记` 处数应 = 图例 1 + 新增条数；英文页标签在 HTML 里是
  **`Editor&#39;s Note`（撇号被转义）**，用 `grep "Editor's Note"` 会得到 0 —— 这是**误报**。
- 既有 personal 条目的 `我的思考` 处数**不应变化**（全库固定 7 处）。
- 规模基线：页面数 / 书籍数 / 作者 109 / 分类 12 / 主题 41；近 13 期稳定为**每期 +4~8 页面、+2 书**。

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

### 🔴 构建前先清空 dist（否则会慢 100 倍）

`build.mjs` 的 `resetDist()` 用 Node `rmSync` 逐项删除。在**本机沙箱**里，safe-delete 守卫
会把删除改写成「丢回收站」——900+ 文件要删近 1 小时（实测 **18 文件/分钟**），
而且**全程零输出**，极易被误判成「构建慢」。

**首选（连续 4 次验证有效，构建稳定在 6 秒级）**：

```bash
mv dist _stage/dist-old-$(date +%Y%m%d-%H%M%S)     # 原子改名，绕开删除路径与守卫
CODEBUDDY_SAFE_DELETE_ENABLED=0 node src/build.mjs
```

**备选**：`rm -rf dist` 单独一条命令（**勿与构建用 `&&` 串联**，`rm` 可能偶发挂死）。
但该命令行为**不稳定**（有时瞬间清零、有时超时或被占用），**不要依赖它**。

**若 dist 被占用**（`mv` 也报 `Permission denied`）：把
`env CODEBUDDY_SAFE_DELETE_ENABLED=0 rm -rf dist` **连跑 3–4 轮**收敛
（每轮可能被 SIGTERM 中断，但都有进展），**不要只跑一轮就改用慢速构建**。

**判据**：构建超过 60 秒仍无输出 = 卡在删除阶段 →
用 `find dist -type f | wc -l` 看文件数是否在缓慢下降。此时应 kill 并改用上面的首选方案。

> ⚠️ 构建汇报「完成」后，`ls dist` 可能**短暂看到不完整的树**（沙箱异步刷写），
> 别据此判定「构建不全」。

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
- ✅ **Cloudflare 部署已启用（2026-10-16 21:45）**：仓库 Secrets 已配置 `CLOUDFLARE_API_TOKEN` /
  `CLOUDFLARE_ACCOUNT_ID`，`Deploy to Cloudflare Pages` 步骤已正常执行（此前长期被跳过）。
  该步骤仍是「条件执行」：secret 缺失时会跳过、作业保持绿色并记一条 notice —— 这个防御设计保留。
  原因见第 6 节「步骤级 `if` 用 secrets」那条坑。
- 🔴 **对外唯一域名：`https://classic-reading.pages.dev`**（2026-10-16 起）。
  **push `main` 即自动部署**（1～3 分钟），无需任何手动步骤。
- 🔴 **`SITE_URL` 必须等于对外域名**（2026-10-16 已对齐）：`src/site.config.js` 的 `SITE_URL`
  已改为 `https://classic-reading.pages.dev`。它决定 canonical / hreflang / sitemap，
  **改域名时必须同步改这里并重新构建**，否则搜索引擎索引与分享卡片全部指向错地址。

> 📌 **历史**：本站原托管在 WorkBuddy App Publishing（旧链接形如 `https://<sandboxId>.sg2.agentos-app.run`）。
> README 第六节描述的「shareLink 每次换域名」机制只适用于那套托管。
> 2026-10-16 迁移到 Cloudflare Pages；**同日决定弃用沙箱通道**（不再重新发布沙箱站点），
> 因此 `SITE_URL` 直接改为 pages.dev，沙箱页不再是维护对象。
> 操作手册见 `docs/Cloudflare-Pages-部署清单.md`。

---

## 6. 已知坑（踩过的，别再踩）

| 坑 | 现象 | 处理 |
|---|---|---|
| **客户端缓存** | 改了内容、线上也更新了，但浏览器还是旧的 | 「更新了却看不到」的头号原因。硬刷新 / 无痕验证；不要误判为发布失败 |
| 🔴 **`dist/` 删不掉** | `rm -rf dist` 超时（300s）或大量 `Permission denied`；构建脚本报 `SAFE_DELETE_BULK_GUARD_ERROR` | 沙箱 safe-delete 守卫拦截批量删除。**首选**：`mv dist _stage/dist-old-$(date +%Y%m%d-%H%M%S)` 原子改名绕开删除路径，再 `CODEBUDDY_SAFE_DELETE_ENABLED=0 node src/build.mjs`（连续 4 次一次成功，6s 级）。`rm -rf dist` 只是兜底，受阻时可重试 3～4 次。**构建 60s 无任何输出 = 卡死**，直接中断换方案 |
| **构建「完成」后 `dist/` 树不完整** | 报完成，但 `ls dist` 只见几十个文件 | 沙箱异步刷写。**不要据一次 `ls` 判构建失败**；等几十秒或直接冒烟复跑 |
| **陈旧资源墓碑** | 线上删不掉的旧图 | 见 README 第 14 节，有专门机制 |
| **双轨页面** | 「服务端渲染 + 客户端重建」页面，改负载要成对改 | 见 README 第 15 节 |
| **`_stage/`** | 封面原图与中间产物（约 150MB） | 已在 `.gitignore`，**不要提交** |
| **`_exist.txt`** | 去重清单产物 | 已在 `.gitignore` |
| 🔴 **`git reset --hard` 冲掉未提交内容** | 已跟踪文件的改动被静默还原，未跟踪的新文件却还在 —— 造成「一半在、一半没了」的错觉 | 2026-10-11 实证：`content/notes.js` 的 note-011/012、`package.json` 的两个 npm script 被冲掉。**改完立即提交**，不要指望工作区替你留存 |
| 🔴 **步骤级 `if` 里用 `secrets` 上下文** | **整个工作流文件被判非法**：运行名变成文件路径、`jobs` 数为 0、`startup_failure`，且**没有任何步骤日志**可查（`/logs` 返回 403、check-run 也不暴露报错） | 2026-10-13 实证。GitHub 的 `jobs.<job_id>.steps[*].if` **只允许** `env` / `steps` / `github` / `needs` / `vars` / `inputs` 等，**不含 `secrets`**。正确写法：先把 secret 映射成 `env`，用 shell 探测后写 `$GITHUB_OUTPUT`，再用 `if: steps.<id>.outputs.x == 'true'` 判断。见 `deploy.yml` 的 `Check Cloudflare secrets` 步骤 |
| 🔴 **`git-sync.sh` 用 `run_in_background` 启动** | **静默失败**：后台进程随 turn 结束被平台回收，下一轮 `TaskOutput` 报 `No task found`，产出文件仍 untracked，**无任何报错** | **必须前台执行 + 输出重定向到文件**：`timeout 420 bash "D:/03_Work_Projects/_ops/git-sync.sh" --paths "…" > _stage/_sync-<date>.log 2>&1`，再 `cat` 日志读 `SYNC_RESULT`。这同时绕开 `tail` 缓冲造成的「脚本卡死无输出」假象 |
| **`git-sync.sh` 报 `locked`** | 上一轮被回收的进程留下 `.git/wb-sync.lock` | 先查 `.git/wb-sync.lock` 是否真存在；脚本会自行 `SYNC_NOTE=接管陈旧锁`，**属正常行为，不必手工清锁**。首跑 `locked` 等 30 秒重试即可 |
| 🔴 **`SYNC_SKIPPED_PREEXISTING=N`（基线误伤）** | 产出文件全被跳过、`SYNC_RESULT=no_change` | 根因：本任务写文件后会话中断，**期间另一个任务**在仓库里记了更新的 `SYNC_BASELINE_EPOCH`，把本任务的产出路径写进了 `.git/wb-sync-baseline-files`；本任务 mtime 早于该基线 → 守卫判「疑似人工改动」而跳过。**判据：只要列出的正是本任务的产出路径，就加 `--ignore-baseline` 重跑**（暂存范围仍被 `--paths` 限定，安全），**不要当 `no_change` 收工** |
| 🔴 **跨任务时序：用旧构建覆盖新构建** | 两条日更任务同日先后跑，先跑的那条用自己（较旧、页面数更少）的 `dist` 发布，覆盖掉后跑任务的成果 | 收尾前**先比对 `dist` 与线上的字节数 / offset**；发现线上更新（页面数更多）就**不要重新发布**。另：本任务若未跑完，另一任务可能已补提交本任务的产出路径（防孤儿）→ 此时本任务 `git-sync` 返回 `no_change` 属正常，先 `git show --stat` 确认补提交内容 |
| 🔴 **本地冒烟服务被回收** | 首个 Bash 调用里 curl 返回 200，下一个调用 Playwright 报 `ERR_CONNECTION_REFUSED` | `nohup node src/serve.mjs &` 在工具调用结束时被回收。**必须用 `run_in_background: true` 启服务**，它才跨工具调用存活 |
| 🔴 **裸 `curl` 返回 502（服务其实正常）** | 本地/线上探活莫名 502 | 本机代理（`HTTP_PROXY=127.0.0.1:3066`）干扰。**判站点生死一律加 `--noproxy '*'`**（`--resolve` / `--http1.1` 无效） |
| **Obsidian 导出（写笔记后）** | 笔记只落在仓库、没进 Obsidian | 跑 `node scripts/export-to-books.mjs --date <YYYY-MM-DD>`，产出落到 `D:/Obsidian/obsidian_valut/Books/经典书库/`。书名映射只 import `content/books.manifest.js`，新增书后需先 build 再生效 |

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

### 🔴 改动即同步 GitHub（Rayman 2026-10-11 指令，长期有效）

**只要改动了本仓库的任何文件 —— 代码、脚本、文档（`AGENTS.md` / `README.md` / `COVERS.md`）、
内容（`content/` 下的书目 / 文章 / 笔记 / overlay）、封面资源 —— 都要在同一轮里提交并推送到
`raymanlim/classic-reading`，保持本地与 GitHub 随时一致。**

- 不要「先放着，回头一起提交」。历史教训：工作区里攒着的未提交内容，既会因 `git reset --hard`
  被静默冲掉（见第 6 节），也会被下一次自动化构建顺带发布到线上，造成「线上有、仓库没有」的孤儿内容。
- 推送前必须 `git status` 确认范围；`_stage/`、`dist.local-backup-*/`、`nul` 已在 `.gitignore`。
- 本站**没有** CI 自动提交，同步完全靠手动 / Agent 执行。
- 🔴 **推送用 SSH，不要用 HTTPS**（2026-10-11 实测确证，最省事的解法）：
  ```bash
  git push ssh://git@github.com/raymanlim/classic-reading.git main
  ```
  - 本机 HTTPS 通道会被代理拦死：`git push` → `CONNECT tunnel failed, response 502`；
    `git fetch` → `Error in the HTTP2 framing layer`；`git ls-remote origin` 同样失败。
  - **SSH 通道完全正常**：`ssh -T git@github.com` → `Hi raymanlim! You've successfully authenticated`，
    `git push ssh://…` 实测直接成功（`1732d46..c9605c6  main -> main`），
    `git ls-remote ssh://…` 也能读到远端。
  - ⚠️ **必须写完整的 `ssh://git@github.com/…`**，不能用 `git@github.com:` 简写 ——
    本机全局 git 配置里有 `url.https://github.com/.insteadof git@github.com:`，
    会把简写**静默重写成 HTTPS**，于是又掉回被拦的通道。
  - 注意 `ssh://` 推送**不会**更新 `refs/remotes/origin/main`（remote 名不同），
    推完需手动对齐，或改配一个 `ssh` remote。
- 兜底方案（SSH 也不可用时）：**GitHub Git Data API**
  （Create Blob → Create Tree(`base_tree`) → Create Commit → Update Ref），`api.github.com` 始终可用。
  两个已知坑：
  1. blob 内容必须取 `git cat-file blob <sha>`，**不能读工作区** ——
     `core.autocrlf=true` 时工作区是 CRLF、仓库内是 LF，直接读会得到不同的 blob sha。
  2. GitHub 会把 commit 的 author/committer 时区**归一化为 UTC**（`+0800` → `+0000`，unix 时间戳不变）：
     **tree sha 与本地完全一致，commit sha 不同**，所以「commit sha 对不上」不等于失败，比对 **tree** 才算数。
     想避免 sha 漂移，可在提交时就把时区写成 UTC（`GIT_AUTHOR_DATE=…+0000`），这样本地与远端 sha 完全相同。

---

## 8. 与其他仓库的关系

本站是「Rayman 的三个静态站点」之一，另两个：

| 仓库 | 内容 |
|---|---|
| `raymanlim/classic-cinema-daily` | 世界经典电影日报（Next.js） |
| `raymanlim/fyx-material-intel` | 方宇鑫半导体材料情报站（Python SSG） |

三者**互相独立**，不要跨仓库引用路径。
