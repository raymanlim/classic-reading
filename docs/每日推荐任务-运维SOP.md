# 每日推荐任务 · 运维 SOP（给定时任务看的操作手册）

> 本文件由 2026-10-25 的两次真实故障驱动建立。**每日推荐任务（15:20）跑 `node src/coverage.mjs` 时
> 会在报告末尾看到本文件的路径提示**，届时必须按本文件对应条款执行，不要自行发明处置方式。

---

## 1. 构建卡死的判定与处置（2026-10-25 实测，两次复现）

### 症状

`node src/build.mjs` 启动后**长时间零输出**：

- 控制台 / 日志文件超过 **3 分钟没有任何字符**
- `dist/` 目录文件时间戳不更新（可用 `ls -la dist/zh/index.html` 核对）
- 正常构建约 60 秒，且过程中会持续打印进度

### 判定

出现上述任一症状持续超过 3 分钟，即判定为**卡死**。不要怀疑是"书多所以慢"——
316 本书的正常构建耗时约 60 秒，不会变成 15 分钟。

### 处置（按顺序）

1. **停止等待，不再重试第三次。** 沙箱对该命令偶发阻塞，重试大概率同样卡住，只会耗尽任务时间。
2. 若第一、二步（推荐 + 入库）已完成 → 视为「**主体已交付，构建环节降级**」。
3. **直接进入同步步骤**，用 `git-sync.sh` 推送 `content/`，交由 GitHub CI 完成构建与校验：
   - `deploy.yml` 的流程是 Build → Verify → Deploy
   - **校验（`check.mjs`）不通过就不会部署**，线上站点不会被坏版本覆盖，这个降级是安全的
4. 摘要中必须标注：**「⚠️ 本地构建卡死，已交 CI 构建」**，并描述现象（零输出时长、dist 是否更新）。
5. 推送后 **2–5 分钟**自查线上是否真的更新：
   ```bash
   curl -s -k --noproxy '*' https://classic-reading.pages.dev/zh/ -o page.html
   grep -c "<本期新增书名>" page.html
   ```
   - 🔴 `-k` 不可省略：本机 TLS 证书链不完整，不加 `-k` 会返回 SSL error 35，被误判成站点故障
   - 🔴 `--noproxy '*'` 不可省略：否则本机代理会注入 502，同样造成假失败
6. `node src/check.mjs` 卡死同样按本条处置。
7. 若本地 dist 未更新导致冒烟测试（`verify-search-live.mjs`）无法执行，**跳过并在摘要中说明**，
   不要为了跑冒烟而反复重建。

---

## 2. 新书入库后必须同步作者档案（2026-10-25 教训）

### 故障

20 本补遗书入库后，书详情页显示正常，但 `/zh/authors/<slug>/` 全部 **404**。

### 根因

- `src/ingest-books.mjs` 只写 `content/lists/` 与 `content/list-prose/`
- 作者档案在 `content/authors.js`，**ingest 不会自动创建**
- `src/lib/data.js` 里 `if (!record && !isList) warnings.push(...)` 只对 curated 书告警，
  list 类型静默兜底，所以构建不报错、`check.mjs` 也查不出来

### 规则

入库任何新书后，**必须检查作者是否已有档案**：

```bash
# 逐个确认新作者的 slug 是否已存在于 content/authors.js
grep -c "'<author-slug>':" content/authors.js
```

返回 0 就要补档案，字段结构照抄文件内已有条目：
`name_en / name_zh / life / nationality_zh / nationality_en / role_zh / role_en / bio_zh / bio_en / ideas_zh / ideas_en`

- `life` 生卒年不确定就留空字符串，**不要编造**
- 检查方法：`node -e "import('./content/authors.js').then(m=>console.log(Object.keys(m.authors).length))"`

---

## 3. 推送遇到远端被抢先

### 症状

`git push` 失败或 `SYNC_RESULT` 异常，`git ls-remote` 与本地 HEAD 不一致。

### 处置

1. **先看两个提交改了哪些文件**，确认是否真的冲突：
   ```bash
   git show --stat --oneline <远端提交>
   git show --stat --oneline <本地提交>
   ```
2. 文件不重叠（常见情况：封面任务只加 `public/covers/*.webp`）→ `git merge origin/main --no-edit` 后推送，
   **不要 rebase、不要 force push**。
3. 文件真冲突 → 停止，摘要写明「因分叉阻塞」，交人工处置。

---

## 4. 编辑 locales/*.json 必须保持行尾符

### 症状

`git show` 显示某个 JSON 文件 **整个文件被重写**（几百行删除 + 几百行新增），实际只改了几行。

### 根因

仓库 `core.autocrlf=true`，工作区是 CRLF；Edit 类工具写入 LF 时，git 会把整文件当成变更。

### 规则

改 `locales/*.json`、`content/*.js` 这类 CRLF 文件时，**用 Python 以 `newline=''` 读写**，
不要用会重写行尾的编辑方式。改完用 `git diff --stat` 确认行数是否符合预期
（几行改动就应该是几行 diff）。
