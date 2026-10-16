# 经典阅读站 · Cloudflare Pages 部署清单

> 2026-10-16 编写。目标：让 `classic-reading.pages.dev` 自动跟随 GitHub 更新。
> 完成后，每次 push 到 main 都会自动构建并上线，无需任何手动操作。

---

## 一、当前状态（实测，非推测）

| 项 | 状态 |
|:--|:--|
| 本地 / 远端 main | 已同步至 `409add9` |
| GitHub Actions | 一直在跑，累计 65 次运行全部 success |
| `Deploy to Cloudflare Pages` 步骤 | 🔴 **长期 skipped** —— 两个密钥从未配置 |
| `classic-reading.pages.dev` | 能打开，但内容是**旧版**（不含《精神现象学》《谁说了算》） |

**根因**：`.github/workflows/deploy.yml` 里的部署步骤，只有在检测到两个密钥时才执行。
密钥不存在 → 步骤被跳过 → 站点永远停在旧版本。构建和校验一直是好的，问题只在这一步。

---

## 二、你要做的：拿两个值 → 填进 GitHub

### 第 0 步 · 先「进入账号」（否则看不到 Workers & Pages）

登录后停在 `dash.cloudflare.com` 时，左侧是**用户级**菜单：

```
Organizations
Accounts        ← 你现在在这一层
Domains
My Profile
```

**`Workers & Pages` 不在这里**，它在**账号内部**。所以：

1. 在中间的 **Accounts** 列表里，点一行账号名（例如 `Pinghe.tongshen@gmail.com's Account`）
2. 进入后左侧菜单会**整排换掉**，变成账号级菜单：

   ```
   Account home
   Recents
   Domains
   Observability
   Build
     ├ Compute        ← Workers & Pages 在这里
     ├ AI
     ├ Storage & databases
     ├ Images & Stream
     └ Realtime
   Protect & connect
     ├ Application security
     └ Zero Trust
   ```

3. 🔴 **新版界面里没有顶层的 `Workers & Pages`** —— 它被收在 **Compute** 下面。
   所以点 **Compute**，再进 **Workers & Pages**（或直接点左侧 **Recents** 里出现的
   `Compute / Workers & Pages` 条目，更快）。

> 🔑 **顺手确认账号选对了**：在 Workers & Pages 页面里找有没有 **`classic-reading`** 这个项目。
> - **有** → 就是它，继续第 1 步
> - **没有** → 退回去换另一个账号（例如 `Power System`）再试
>
> 因为 `classic-reading.pages.dev` 这个站点只存在于**某一个**账号里。
> 如果密钥建在**另一个**账号，部署会报 `project not found`。

> ⚠️ 你截图里有两个账号（`Pinghe.tongshen@gmail.com's Account` 和 `Power System`）。
> 建 Token 时 **Account Resources 要选「包含那个有 classic-reading 的账号」**，不要选错。

### 第 1 步 · 创建 Cloudflare API Token

1. 打开 https://dash.cloudflare.com ，登录
2. 右上角头像 → **My Profile**
3. 左侧菜单 **API Tokens** → **Create Token**
4. 拉到页面最下方 → **Create Custom Token** → **Get started**
5. 按下表填写：

| 字段 | 填什么 |
|:--|:--|
| Token name | `classic-reading-pages-deploy` |
| Permissions | **Account** — **Cloudflare Pages** — **Edit** |
| Account Resources | **Include** — 你的账号名 |
| TTL | 留空（永久有效） |

6. **Continue to summary** → **Create Token**
7. 复制生成的 token —— **只显示这一次**，关掉页面就再也看不到

> 🔴 **不要用 Global API Key**。它的权限等于整个账号，泄露后果远大于一个 Pages token。
> 我们只需要「改 Pages」这一项权限。

### 第 2 步 · 找到 Account ID

**方法 A（最省事，推荐）**：进入账号后看浏览器地址栏 ——

```
https://dash.cloudflare.com/347e5e2d8700d9af3dc4e5fd4e9f……
                          └────────── 这 32 位就是 Account ID ──────────┘
```

整段复制下来，斜杠后面那串 32 位字符就是 Account ID。

**方法 B**：进入 **Compute → Workers & Pages** 后，页面右侧信息卡里也有 **Account ID**。

### 第 3 步 · 填进 GitHub Secrets

打开：

```
https://github.com/raymanlim/classic-reading/settings/secrets/actions
```

点 **New repository secret**，建两个：

| Name（必须逐字一致） | Secret（粘贴上一步的值） |
|:--|:--|
| `CLOUDFLARE_API_TOKEN` | 第 1 步复制的 token |
| `CLOUDFLARE_ACCOUNT_ID` | 第 2 步的 Account ID |

> ⚠️ 名字全大写、下划线分隔。错一个字母，Actions 就读不到，部署会继续被跳过。

### 第 4 步 · 触发一次部署

**方式 A（推荐）**：手动触发，不用改代码

1. 打开 https://github.com/raymanlim/classic-reading/actions/workflows/deploy.yml
2. 右上角 **Run workflow** → 分支选 `main` → **Run workflow**

**方式 B**：随便推一个提交到 main（此后也会自动触发）

### 第 5 步 · 验收

等 1～3 分钟，打开：

```
https://classic-reading.pages.dev/zh/books/phenomenology-of-spirit/
```

**能看到《精神现象学》的页面 = 成功。**

这本书是 10-15 才入库的，旧版站点上没有它 —— 所以它是一个可靠的「是否真的更新了」探针。

命令行版本：

```bash
curl -s -o /dev/null -w "%{http_code}\n" \
  https://classic-reading.pages.dev/zh/books/phenomenology-of-spirit/
```

返回 `200` 即成功。

---

## 三、部署成功之后

- ✅ 此后每次 push 到 `main` → 自动构建 + 校验 + 部署，**全自动**
- ✅ `classic-reading.pages.dev` 是**永久固定链接**（不像 WorkBuddy 的 shareLink 每次发布都换域名）
- ⚠️ 构建失败时，Cloudflare 会**保留上一版** —— 站点不会坏，但也不会更新

---

## 四、出问题怎么办

| 症状 | 原因 | 处理 |
|:--|:--|:--|
| 部署步骤仍是 skipped | 密钥名字写错 / 没保存成功 | 回第 3 步核对名字拼写 |
| Actions 报 authentication 错误 | token 权限不足或已失效 | 重建 token，确认权限是 Account · Cloudflare Pages · Edit |
| Actions 报 project not found | Account ID 填错 | 回第 2 步重新复制 |
| 部署成功但内容没变 | 浏览器缓存 | 强制刷新（Ctrl+Shift+R） |

---

## 五、回滚

- **Cloudflare 后台**：Workers & Pages → classic-reading → Deployments → 选中上一个正常版本 → **Rollback**
- **或者**：`git revert <commit> && git push`，等自动部署覆盖

---

## 附：为什么 `dist/` 不进 Git

`dist/`（1258 个文件 / 63 MB）已在 `.gitignore` 中排除，这是刻意的：

- Git 只存**能重新生成成品的最小集合**（源文件 `content/` + `locales/` + 构建脚本）
- 成品每次都由 `node src/build.mjs` 完整重建，存进 Git 只会让仓库无谓膨胀
- 所以：**本地构建一次是为了预览，云端构建一次才是为了上线** —— 两次是各自独立的
