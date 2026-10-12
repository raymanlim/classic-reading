/**
 * 生成封面清单 COVERS.md
 * 用法：node src/gen-covers-md.mjs
 *
 * 书籍清单（content/books.manifest.js）变动后重新跑一次，清单会自动同步。
 *
 * 2026-10-13 修订：
 *   - 表格新增「状态」列（✅ 已有 / ⬜ 待出图），避免拿全量清单去生成时重复出图。
 *   - 第九节「只导出文件名」改为只导**待出图**的，可直接喂给批量生成。
 *   - 章节标题里的书目数改为动态，不再写死。
 *   只列待出图的精简版见 `COVERS-TODO.md`（node src/gen-covers-todo.mjs）。
 */
import { writeFileSync, readdirSync } from 'node:fs';
import { loadData } from './lib/data.js';

const data = await loadData();
const books = [...data.books].sort((a, b) => b.index - a.index);
const catName = (b) => (b.categoryEntity ? b.categoryEntity.name_zh : b.category);

const have = new Set(
  readdirSync('public/covers')
    .filter((f) => f.toLowerCase().endsWith('.webp'))
    .map((f) => f.slice(0, -5))
);
const hasCover = (b) => have.has(b.slug);
const missing = books.filter((b) => !hasCover(b));

const rows = books
  .map((b, i) => `| ${i + 1} | \`${b.slug}.webp\` | ${b.title_zh} | ${b.title_en || ''} | ${b.author?.name_zh || ''} | ${catName(b)} | ${hasCover(b) ? '✅ 已有' : '⬜ 待出图'} |`)
  .join('\n');

const md = `# 封面图生成清单｜Classics Library

本文件是给你生成封面图用的对照表。共 **${books.length}** 本 —— 已有封面 **${books.length - missing.length}** 张，待出图 **${missing.length}** 张。

> ⚠️ 第八节是全量清单。**生成前请只看「⬜ 待出图」的行**，否则会给已有封面重复出图。
> 只列待出图的精简版见 \`COVERS-TODO.md\`。

---

## 一、放到哪个目录

\`\`\`
E:\\01_Projects\\Classics Library\\public\\covers\\
\`\`\`

如果目录不存在就新建一个。**图片直接放在这个目录下，不要再建子文件夹。**

---

## 二、文件怎么命名

**文件名 = 书籍 slug + 扩展名。**

例如《黑天鹅》对应：

\`\`\`
public/covers/the-black-swan.webp
\`\`\`

- 只用**小写字母、数字、连字符**，与下表的「文件名」列**完全一致**
- 不要加书名号、不要加中文、不要加空格、不要加序号前缀
- 拼错一个字母 = 那张图不会生效（构建会静默回退到程序化封面，不会报错）

---

## 三、图片规格

| 项目 | 要求 |
|---|---|
| **宽高比** | **2 : 3**（必须。非 2:3 会被 \`object-fit: cover\` 裁切） |
| **推荐尺寸** | **800 × 1200 px**（详情页大图 + 卡片小图共用这一张，800px 宽足够 2 倍屏） |
| 最低尺寸 | 600 × 900 px（再低在大图位置会发虚） |
| 格式 | **WebP 优先**（体积最小）；jpg/png 也支持 |
| 单张体积 | 建议 < 150 KB（整站封面总量控制在 30 MB 以内） |
| 色彩 | 建议与站点色调一致：深普鲁士蓝 \`#0E2A45\` / 米白 \`#F7F5F0\` / 米金 \`#A98A58\` |
| 安全区 | 重要文字/图形离四边留 **8% 以上**留白，防止裁切时被切掉 |

> 若你的图不是 2:3，请在生成时裁好再放进来，不要让站点去裁——裁切位置不可控。

---

## 四、生成完怎么自查

在项目根目录运行：

\`\`\`bash
npm run covers
\`\`\`

它会告诉你：
- 有多少张成功匹配到了书籍
- 哪些文件名拼错了（匹配不上任何书）
- 哪些书还没有封面（会继续用程序化封面，不影响上线）
- 是否有同一本书放了多个格式

**这一步是防止「拼错文件名导致图片静默不生效」的唯一有效手段，建议交付前必跑。**

---

## 五、交付方式

生成完、自查通过后，直接告诉我「封面已放好」。我会：

1. 跑 \`npm run covers\` 复核
2. 跑 \`npm run build\` 重建（构建日志会打印封面覆盖率）
3. 多端截图抽查封面在卡片 / 详情页 / 移动端的实际表现
4. 重新发布上线，并校验线上图片可访问

**支持分批交付**：先做 20 本也行，没做的书自动用程序化封面，不会出现破图。

---

## 六、关于已有的 Obsidian 封面（\`Books/_assets/\`）

> 以下为 2026-10 初的历史勘察结论，保留备查。

已勘察 \`D:\\Obsidian\\obsidian_valut\\Books\\_assets\\\`，结论：**不适合直接用于本站**，原因如下。

**（1）覆盖率低**

该目录按**书名**命名的图与本站书目的交集很小：

| Obsidian 文件名 | 对应本站 slug | 可用性 |
|---|---|---|
| \`antifragile.jpg\` | \`antifragile\` | ✅ 真封面，比例 0.648 接近 2:3，但仅 324px 宽 |
| \`证券分析.jpg\` | \`security-analysis\` | ⚠️ 640×940，比例 0.681 |
| \`金钱心理学.jpg\` | \`the-psychology-of-money\` | ⚠️ 640×940，比例 0.681 |
| \`从零到一.png\` | \`zero-to-one\` | ⚠️ 仅 270×391，大图会发虚 |
| \`随机漫步的傻瓜.jpg\` | \`fooled-by-randomness\` | ⚠️ 640×853，比例 0.750 |
| \`思考，快与慢.jpg\` | \`thinking-fast-and-slow\` | ⚠️ 563×751，比例 0.750 |
| \`超级智能.jpg\` | \`superintelligence\` | ⚠️ 618×825，比例 0.749 |
| \`黑天鹅.jpg\` | \`the-black-swan\` | ❌ **不是书籍封面**，是一张横构图黑白照片 |

**（2）规格不达标**：宽高比 0.648 – 1.345（目标 0.667），分辨率 270 – 640 px 宽，低于 800 px 目标。

**（3）视觉一致性**：真实出版社封面各有色彩与字体系统，与本站「深普鲁士蓝 + 米白 + 米金」的设计系统冲突。

**（4）版权**：真实出版社封面受版权保护。本站刻意采用统一设计以规避该风险。

**建议**：本站封面**统一生成**，保持同一视觉语言。

---

## 七、另一件事：那批封面有更合适的去处

\`Books/_assets/\` 在**它自己的语境**里表现很好：Obsidian 藏书本身已是一套
**封面覆盖 ≈98% + 阅读状态 + 笔记**的完整数据，更适合做成独立的「我的书架 / My Shelf」页面。
那是独立于本站的另一个任务。

---

## 八、完整清单（${books.length} 本，按经典指数降序）

> ⬜ = 待出图（${missing.length} 本）；✅ = 已有封面（${books.length - missing.length} 本）

| # | 文件名 | 中文书名 | 英文书名 | 作者 | 分类 | 状态 |
|---|---|---|---|---|---|---|
${rows}

---

## 九、只导出「待出图」文件名（${missing.length} 个，可直接批量生成）

\`\`\`text
${missing.map((b) => `${b.slug}.webp`).join('\n')}
\`\`\`
`;

writeFileSync('COVERS.md', md, 'utf8');
console.log(`COVERS.md 已生成：共 ${books.length} 本 · 已有 ${books.length - missing.length} · 待出图 ${missing.length}`);
