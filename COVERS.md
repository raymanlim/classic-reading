# 封面图生成清单｜Classics Library

本文件是给你生成封面图用的对照表。共 **282** 本 —— 已有封面 **282** 张，待出图 **0** 张。

> ⚠️ 第八节是全量清单。**生成前请只看「⬜ 待出图」的行**，否则会给已有封面重复出图。
> 只列待出图的精简版见 `COVERS-TODO.md`。

---

## 一、放到哪个目录

```
E:\01_Projects\Classics Library\public\covers\
```

如果目录不存在就新建一个。**图片直接放在这个目录下，不要再建子文件夹。**

---

## 二、文件怎么命名

**文件名 = 书籍 slug + 扩展名。**

例如《黑天鹅》对应：

```
public/covers/the-black-swan.webp
```

- 只用**小写字母、数字、连字符**，与下表的「文件名」列**完全一致**
- 不要加书名号、不要加中文、不要加空格、不要加序号前缀
- 拼错一个字母 = 那张图不会生效（构建会静默回退到程序化封面，不会报错）

---

## 三、图片规格

| 项目 | 要求 |
|---|---|
| **宽高比** | **2 : 3**（必须。非 2:3 会被 `object-fit: cover` 裁切） |
| **推荐尺寸** | **800 × 1200 px**（详情页大图 + 卡片小图共用这一张，800px 宽足够 2 倍屏） |
| 最低尺寸 | 600 × 900 px（再低在大图位置会发虚） |
| 格式 | **WebP 优先**（体积最小）；jpg/png 也支持 |
| 单张体积 | 建议 < 150 KB（整站封面总量控制在 30 MB 以内） |
| 色彩 | 建议与站点色调一致：深普鲁士蓝 `#0E2A45` / 米白 `#F7F5F0` / 米金 `#A98A58` |
| 安全区 | 重要文字/图形离四边留 **8% 以上**留白，防止裁切时被切掉 |

> 若你的图不是 2:3，请在生成时裁好再放进来，不要让站点去裁——裁切位置不可控。

---

## 四、生成完怎么自查

在项目根目录运行：

```bash
npm run covers
```

它会告诉你：
- 有多少张成功匹配到了书籍
- 哪些文件名拼错了（匹配不上任何书）
- 哪些书还没有封面（会继续用程序化封面，不影响上线）
- 是否有同一本书放了多个格式

**这一步是防止「拼错文件名导致图片静默不生效」的唯一有效手段，建议交付前必跑。**

---

## 五、交付方式

生成完、自查通过后，直接告诉我「封面已放好」。我会：

1. 跑 `npm run covers` 复核
2. 跑 `npm run build` 重建（构建日志会打印封面覆盖率）
3. 多端截图抽查封面在卡片 / 详情页 / 移动端的实际表现
4. 重新发布上线，并校验线上图片可访问

**支持分批交付**：先做 20 本也行，没做的书自动用程序化封面，不会出现破图。

---

## 六、关于已有的 Obsidian 封面（`Books/_assets/`）

> 以下为 2026-10 初的历史勘察结论，保留备查。

已勘察 `D:\Obsidian\obsidian_valut\Books\_assets\`，结论：**不适合直接用于本站**，原因如下。

**（1）覆盖率低**

该目录按**书名**命名的图与本站书目的交集很小：

| Obsidian 文件名 | 对应本站 slug | 可用性 |
|---|---|---|
| `antifragile.jpg` | `antifragile` | ✅ 真封面，比例 0.648 接近 2:3，但仅 324px 宽 |
| `证券分析.jpg` | `security-analysis` | ⚠️ 640×940，比例 0.681 |
| `金钱心理学.jpg` | `the-psychology-of-money` | ⚠️ 640×940，比例 0.681 |
| `从零到一.png` | `zero-to-one` | ⚠️ 仅 270×391，大图会发虚 |
| `随机漫步的傻瓜.jpg` | `fooled-by-randomness` | ⚠️ 640×853，比例 0.750 |
| `思考，快与慢.jpg` | `thinking-fast-and-slow` | ⚠️ 563×751，比例 0.750 |
| `超级智能.jpg` | `superintelligence` | ⚠️ 618×825，比例 0.749 |
| `黑天鹅.jpg` | `the-black-swan` | ❌ **不是书籍封面**，是一张横构图黑白照片 |

**（2）规格不达标**：宽高比 0.648 – 1.345（目标 0.667），分辨率 270 – 640 px 宽，低于 800 px 目标。

**（3）视觉一致性**：真实出版社封面各有色彩与字体系统，与本站「深普鲁士蓝 + 米白 + 米金」的设计系统冲突。

**（4）版权**：真实出版社封面受版权保护。本站刻意采用统一设计以规避该风险。

**建议**：本站封面**统一生成**，保持同一视觉语言。

---

## 七、另一件事：那批封面有更合适的去处

`Books/_assets/` 在**它自己的语境**里表现很好：Obsidian 藏书本身已是一套
**封面覆盖 ≈98% + 阅读状态 + 笔记**的完整数据，更适合做成独立的「我的书架 / My Shelf」页面。
那是独立于本站的另一个任务。

---

## 八、完整清单（282 本，按经典指数降序）

> ⬜ = 待出图（0 本）；✅ = 已有封面（282 本）

| # | 文件名 | 中文书名 | 英文书名 | 作者 | 分类 | 状态 |
|---|---|---|---|---|---|---|
| 1 | `the-intelligent-investor.webp` | 聪明的投资者 | The Intelligent Investor | 本杰明·格雷厄姆 | 投资 | ✅ 已有 |
| 2 | `the-wealth-of-nations.webp` | 国富论 | An Inquiry into the Nature and Causes of the Wealth of Nations | 亚当·斯密 | 经济学 | ✅ 已有 |
| 3 | `the-republic.webp` | 理想国 | The Republic | 柏拉图 | 哲学 | ✅ 已有 |
| 4 | `tao-te-ching.webp` | 道德经 | Tao Te Ching | 老子 | 哲学 | ✅ 已有 |
| 5 | `the-analects.webp` | 论语 | The Analects | 孔子 | 哲学 | ✅ 已有 |
| 6 | `artificial-intelligence-a-modern-approach.webp` | 人工智能：一种现代的方法 | Artificial Intelligence: A Modern Approach | 斯图尔特·罗素 | 人工智能 | ✅ 已有 |
| 7 | `the-general-theory.webp` | 就业、利息和货币通论 | The General Theory of Employment, Interest and Money | 约翰·梅纳德·凯恩斯 | 经济学 | ✅ 已有 |
| 8 | `meditations.webp` | 沉思录 | Meditations | 马可·奥勒留 | 哲学 | ✅ 已有 |
| 9 | `the-structure-of-scientific-revolutions.webp` | 科学革命的结构 | The Structure of Scientific Revolutions | 托马斯·库恩 | 科技与科学 | ✅ 已有 |
| 10 | `the-black-swan.webp` | 黑天鹅：如何应对不可预知的未来 | The Black Swan: The Impact of the Highly Improbable | 纳西姆·尼古拉斯·塔勒布 | 金融 | ✅ 已有 |
| 11 | `security-analysis.webp` | 证券分析 | Security Analysis | 本杰明·格雷厄姆 | 投资 | ✅ 已有 |
| 12 | `history-of-the-peloponnesian-war.webp` | 伯罗奔尼撒战争史 | History of the Peloponnesian War | 修昔底德 | 世界历史 | ✅ 已有 |
| 13 | `competitive-strategy.webp` | 竞争战略 | Competitive Strategy: Techniques for Analyzing Industries and Competitors | 迈克尔·波特 | 商业 | ✅ 已有 |
| 14 | `nicomachean-ethics.webp` | 尼各马可伦理学 | Nicomachean Ethics | 亚里士多德 | 哲学 | ✅ 已有 |
| 15 | `thinking-fast-and-slow.webp` | 思考，快与慢 | Thinking, Fast and Slow | 丹尼尔·卡尼曼 | 心理学与认知科学 | ✅ 已有 |
| 16 | `superintelligence.webp` | 超级智能：路径、危险与策略 | Superintelligence: Paths, Dangers, Strategies | 尼克·博斯特罗姆 | 人工智能 | ✅ 已有 |
| 17 | `godel-escher-bach.webp` | 哥德尔、艾舍尔、巴赫：集异璧之大成 | Gödel, Escher, Bach: An Eternal Golden Braid | 侯世达 | 科技与科学 | ✅ 已有 |
| 18 | `the-decline-and-fall-of-the-roman-empire.webp` | 罗马帝国衰亡史 | The History of the Decline and Fall of the Roman Empire | 爱德华·吉本 | 世界历史 | ✅ 已有 |
| 19 | `the-innovators-dilemma.webp` | 创新者的窘境 | The Innovator's Dilemma | 克莱顿·克里斯坦森 | 商业 | ✅ 已有 |
| 20 | `thus-spoke-zarathustra.webp` | 查拉图斯特拉如是说 | Thus Spoke Zarathustra: A Book for All and None | 弗里德里希·尼采 | 哲学 | ✅ 已有 |
| 21 | `the-protestant-ethic-and-the-spirit-of-capitalism.webp` | 新教伦理与资本主义精神 | The Protestant Ethic and the Spirit of Capitalism | 马克斯·韦伯 | 社会与文明 | ✅ 已有 |
| 22 | `leviathan.webp` | 利维坦 | Leviathan | 托马斯·霍布斯 | 社会与文明 | ✅ 已有 |
| 23 | `deep-learning.webp` | 深度学习 | Deep Learning | 伊恩·古德费洛 | 人工智能 | ✅ 已有 |
| 24 | `chip-war.webp` | 芯片战争：世界最关键技术的争夺战 | Chip War: The Fight for the World's Most Critical Technology | 克里斯·米勒 | 科技与科学 | ✅ 已有 |
| 25 | `antifragile.webp` | 反脆弱：从不确定性中获益 | Antifragile: Things That Gain from Disorder | 纳西姆·尼古拉斯·塔勒布 | 金融 | ✅ 已有 |
| 26 | `das-kapital.webp` | 资本论 | Capital: A Critique of Political Economy | 卡尔·马克思 | 经济学 | ✅ 已有 |
| 27 | `guns-germs-and-steel.webp` | 枪炮、病菌与钢铁：人类社会的命运 | Guns, Germs, and Steel: The Fates of Human Societies | 贾雷德·戴蒙德 | 世界历史 | ✅ 已有 |
| 28 | `on-liberty.webp` | 论自由 | On Liberty | 约翰·斯图尔特·密尔 | 社会与文明 | ✅ 已有 |
| 29 | `poor-charlies-almanack.webp` | 穷查理宝典：查理·芒格的智慧箴言录 | Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger | 查理·芒格 | 投资 | ✅ 已有 |
| 30 | `a-random-walk-down-wall-street.webp` | 漫步华尔街 | A Random Walk Down Wall Street | 伯顿·马尔基尔 | 投资 | ✅ 已有 |
| 31 | `the-road-to-serfdom.webp` | 通往奴役之路 | The Road to Serfdom | 弗里德里希·哈耶克 | 经济学 | ✅ 已有 |
| 32 | `sapiens.webp` | 人类简史：从动物到上帝 | Sapiens: A Brief History of Humankind | 尤瓦尔·赫拉利 | 世界历史 | ✅ 已有 |
| 33 | `the-effective-executive.webp` | 卓有成效的管理者 | The Effective Executive: The Definitive Guide to Getting the Right Things Done | 彼得·德鲁克 | 商业 | ✅ 已有 |
| 34 | `the-myth-of-sisyphus.webp` | 西西弗神话 | The Myth of Sisyphus | 阿尔贝·加缪 | 哲学 | ✅ 已有 |
| 35 | `influence.webp` | 影响力 | Influence: The Psychology of Persuasion | 罗伯特·西奥迪尼 | 心理学与认知科学 | ✅ 已有 |
| 36 | `fooled-by-randomness.webp` | 随机漫步的傻瓜 | Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets | 纳西姆·尼古拉斯·塔勒布 | 金融 | ✅ 已有 |
| 37 | `the-clash-of-civilizations.webp` | 文明的冲突与世界秩序的重建 | The Clash of Civilizations and the Remaking of World Order | 塞缪尔·亨廷顿 | 世界历史 | ✅ 已有 |
| 38 | `the-rise-and-fall-of-the-third-reich.webp` | 第三帝国的兴亡 | The Rise and Fall of the Third Reich | 威廉·夏伊勒 | 世界历史 | ✅ 已有 |
| 39 | `1587-a-year-of-no-significance.webp` | 万历十五年 | 1587, A Year of No Significance: The Ming Dynasty in Decline | 黄仁宇 | 世界历史 | ✅ 已有 |
| 40 | `letters-from-a-stoic.webp` | 道德书简 | Letters from a Stoic | 塞内加 | 哲学 | ✅ 已有 |
| 41 | `reinforcement-learning-an-introduction.webp` | 强化学习导论 | Reinforcement Learning: An Introduction | 理查德·萨顿 | 人工智能 | ✅ 已有 |
| 42 | `human-compatible.webp` | AI 新生：破解人机共存密码 | Human Compatible: Artificial Intelligence and the Problem of Control | 斯图尔特·罗素 | 人工智能 | ✅ 已有 |
| 43 | `understanding-media.webp` | 理解媒介：论人的延伸 | Understanding Media: The Extensions of Man | 马歇尔·麦克卢汉 | 科技与科学 | ✅ 已有 |
| 44 | `against-the-gods.webp` | 与天为敌：风险探索传奇 | Against the Gods: The Remarkable Story of Risk | 彼得·伯恩斯坦 | 金融 | ✅ 已有 |
| 45 | `common-stocks-and-uncommon-profits.webp` | 怎样选择成长股 | Common Stocks and Uncommon Profits | 菲利普·费雪 | 投资 | ✅ 已有 |
| 46 | `the-great-transformation.webp` | 大转型：我们时代的政治与经济起源 | The Great Transformation: The Political and Economic Origins of Our Time | 卡尔·波兰尼 | 经济学 | ✅ 已有 |
| 47 | `the-guns-of-august.webp` | 八月炮火 | The Guns of August | 芭芭拉·塔奇曼 | 世界历史 | ✅ 已有 |
| 48 | `postwar.webp` | 战后欧洲史 | Postwar: A History of Europe Since 1945 | 托尼·朱特 | 世界历史 | ✅ 已有 |
| 49 | `the-design-of-everyday-things.webp` | 设计心理学 | The Design of Everyday Things | 唐·诺曼 | 商业 | ✅ 已有 |
| 50 | `crossing-the-chasm.webp` | 跨越鸿沟 | Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers | 杰弗里·摩尔 | 商业 | ✅ 已有 |
| 51 | `amusing-ourselves-to-death.webp` | 娱乐至死 | Amusing Ourselves to Death: Public Discourse in the Age of Show Business | 尼尔·波兹曼 | 社会与文明 | ✅ 已有 |
| 52 | `the-information.webp` | 信息简史 | The Information: A History, a Theory, a Flood | 詹姆斯·格雷克 | 科技与科学 | ✅ 已有 |
| 53 | `manias-panics-and-crashes.webp` | 疯狂、惊恐和崩溃：金融危机史 | Manias, Panics, and Crashes: A History of Financial Crises | 查尔斯·金德尔伯格 | 金融 | ✅ 已有 |
| 54 | `the-most-important-thing.webp` | 投资最重要的事 | The Most Important Thing: Uncommon Sense for the Thoughtful Investor | 霍华德·马克斯 | 投资 | ✅ 已有 |
| 55 | `reminiscences-of-a-stock-operator.webp` | 股票作手回忆录 | Reminiscences of a Stock Operator | 埃德温·勒菲弗 | 投资 | ✅ 已有 |
| 56 | `why-nations-fail.webp` | 国家为什么会失败 | Why Nations Fail: The Origins of Power, Prosperity, and Poverty | 达龙·阿西莫格鲁 | 经济学 | ✅ 已有 |
| 57 | `the-end-of-history.webp` | 历史的终结与最后的人 | The End of History and the Last Man | 弗朗西斯·福山 | 世界历史 | ✅ 已有 |
| 58 | `only-the-paranoid-survive.webp` | 只有偏执狂才能生存 | Only the Paranoid Survive: How to Exploit the Crisis Points That Challenge Every Company | 安迪·格鲁夫 | 商业 | ✅ 已有 |
| 59 | `thinking-in-systems.webp` | 系统之美：决策者的系统思考 | Thinking in Systems: A Primer | 德内拉·梅多斯 | 心理学与认知科学 | ✅ 已有 |
| 60 | `the-crowd.webp` | 乌合之众：大众心理研究 | The Crowd: A Study of the Popular Mind | 古斯塔夫·勒庞 | 社会与文明 | ✅ 已有 |
| 61 | `life-3-0.webp` | 生命 3.0：人工智能时代，人类的进化与重生 | Life 3.0: Being Human in the Age of Artificial Intelligence | 迈克斯·泰格马克 | 人工智能 | ✅ 已有 |
| 62 | `margin-of-safety.webp` | 安全边际 | Margin of Safety: Risk-Averse Value Investing Strategies for the Thoughtful Investor | 赛思·卡拉曼 | 投资 | ✅ 已有 |
| 63 | `irrational-exuberance.webp` | 非理性繁荣 | Irrational Exuberance | 罗伯特·席勒 | 投资 | ✅ 已有 |
| 64 | `free-to-choose.webp` | 自由选择 | Free to Choose: A Personal Statement | 米尔顿·弗里德曼 | 经济学 | ✅ 已有 |
| 65 | `capital-in-the-twenty-first-century.webp` | 21 世纪资本论 | Capital in the Twenty-First Century | 托马斯·皮凯蒂 | 经济学 | ✅ 已有 |
| 66 | `this-time-is-different.webp` | 这次不一样：八百年金融危机史 | This Time Is Different: Eight Centuries of Financial Folly | 卡门·莱因哈特 | 经济学 | ✅ 已有 |
| 67 | `the-worldly-philosophers.webp` | 世俗哲学家：伟大经济学家的生平、时代与思想 | The Worldly Philosophers: The Lives, Times and Ideas of the Great Economic Thinkers | 罗伯特·海尔布隆纳 | 经济学 | ✅ 已有 |
| 68 | `world-order.webp` | 世界秩序 | World Order | 亨利·基辛格 | 世界历史 | ✅ 已有 |
| 69 | `flow.webp` | 心流：最优体验心理学 | Flow: The Psychology of Optimal Experience | 米哈里·契克森米哈赖 | 心理学与认知科学 | ✅ 已有 |
| 70 | `the-alignment-problem.webp` | 人机对齐 | The Alignment Problem: Machine Learning and Human Values | 布莱恩·克里斯蒂安 | 人工智能 | ✅ 已有 |
| 71 | `the-innovators.webp` | 创新者：一群技术狂人和黑客如何创造数字革命 | The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution | 沃尔特·艾萨克森 | 科技与科学 | ✅ 已有 |
| 72 | `the-ascent-of-money.webp` | 货币崛起：世界金融简史 | The Ascent of Money: A Financial History of the World | 尼尔·弗格森 | 金融 | ✅ 已有 |
| 73 | `one-up-on-wall-street.webp` | 彼得·林奇的成功投资 | One Up on Wall Street | 彼得·林奇 | 投资 | ✅ 已有 |
| 74 | `the-outsiders.webp` | 商界局外人：八位非凡 CEO 的资本配置之道 | The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success | 威廉·桑代克 | 美股投资 | ✅ 已有 |
| 75 | `zero-to-one.webp` | 从 0 到 1：开启商业与未来的秘密 | Zero to One: Notes on Startups, or How to Build the Future | 彼得·蒂尔 | 商业 | ✅ 已有 |
| 76 | `good-to-great.webp` | 从优秀到卓越 | Good to Great: Why Some Companies Make the Leap... and Others Don't | 吉姆·柯林斯 | 商业 | ✅ 已有 |
| 77 | `superforecasting.webp` | 超预测：预见未来的艺术和科学 | Superforecasting: The Art and Science of Prediction | 菲利普·泰特洛克 | 心理学与认知科学 | ✅ 已有 |
| 78 | `ai-superpowers.webp` | AI·未来 | AI Superpowers: China, Silicon Valley, and the New World Order | 李开复 | 人工智能 | ✅ 已有 |
| 79 | `extraordinary-popular-delusions.webp` | 大癫狂：非同寻常的大众幻想与群体疯狂 | Extraordinary Popular Delusions and the Madness of Crowds | 查尔斯·麦凯 | 金融 | ✅ 已有 |
| 80 | `when-genius-failed.webp` | 赌金者：长期资本管理公司的升腾与陨落 | When Genius Failed: The Rise and Fall of Long-Term Capital Management | 罗杰·洛温斯坦 | 金融 | ✅ 已有 |
| 81 | `noise.webp` | 噪声 | Noise: A Flaw in Human Judgment | 丹尼尔·卡尼曼 | 心理学与认知科学 | ✅ 已有 |
| 82 | `the-master-algorithm.webp` | 终极算法：机器学习和人工智能如何重塑世界 | The Master Algorithm | 佩德罗·多明戈斯 | 人工智能 | ✅ 已有 |
| 83 | `surely-youre-joking-mr-feynman.webp` | 别闹了，费曼先生 | Surely You're Joking, Mr. Feynman! | 理查德·费曼 | 科技与科学 | ✅ 已有 |
| 84 | `the-big-short.webp` | 大空头 | The Big Short: Inside the Doomsday Machine | 迈克尔·刘易斯 | 金融 | ✅ 已有 |
| 85 | `poor-economics.webp` | 贫穷的本质：我们为什么摆脱不了贫穷 | Poor Economics: A Radical Rethinking of the Way to Fight Global Poverty | 阿比吉特·班纳吉 | 经济学 | ✅ 已有 |
| 86 | `misbehaving.webp` | “错误”的行为：行为经济学的形成 | Misbehaving: The Making of Behavioral Economics | 理查德·塞勒 | 经济学 | ✅ 已有 |
| 87 | `the-silk-roads.webp` | 丝绸之路：一部全新的世界史 | The Silk Roads: A New History of the World | 彼得·弗兰科潘 | 世界历史 | ✅ 已有 |
| 88 | `the-age-of-ai.webp` | 人工智能时代与人类未来 | The Age of AI: And Our Human Future | 亨利·基辛格 | 人工智能 | ✅ 已有 |
| 89 | `the-second-machine-age.webp` | 第二次机器革命：数字化技术将如何改变我们的经济与社会 | The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies | 埃里克·布林约尔松 | 科技与科学 | ✅ 已有 |
| 90 | `the-hard-thing-about-hard-things.webp` | 创业维艰：如何完成比难更难的事 | The Hard Thing About Hard Things | 本·霍洛维茨 | 商业 | ✅ 已有 |
| 91 | `what-are-you-doing-with-your-life.webp` | 人生中不可不想的事 | What Are You Doing with Your Life? | 克里希那穆提 | 哲学 | ✅ 已有 |
| 92 | `predictably-irrational.webp` | 怪诞行为学：可预测的非理性 | Predictably Irrational: The Hidden Forces That Shape Our Decisions | 丹·艾瑞里 | 心理学与认知科学 | ✅ 已有 |
| 93 | `mindset.webp` | 终身成长：重新定义成功的思维模式 | Mindset: The New Psychology of Success | 卡罗尔·德韦克 | 心理学与认知科学 | ✅ 已有 |
| 94 | `ai-2041.webp` | AI 2041：预见 10 个未来新世界 | AI 2041: Ten Visions for Our Future | 李开复 | 人工智能 | ✅ 已有 |
| 95 | `structures-or-why-things-dont-fall-down.webp` | 结构：为什么东西不会倒塌 | Structures: Or Why Things Don't Fall Down | J. E. 戈登 | 科技与科学 | ✅ 已有 |
| 96 | `the-psychology-of-money.webp` | 金钱心理学 | The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness | 摩根·豪泽尔 | 心理学与认知科学 | ✅ 已有 |
| 97 | `the-battle-for-investment-survival.webp` | 投资生存之战 | The Battle for Investment Survival | 杰拉尔德·勒布 | 美股投资 | ✅ 已有 |
| 98 | `genius-makers.webp` | 天才制造者：改变世界的 AI 先锋 | Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World | 凯德·梅茨 | 人工智能 | ✅ 已有 |
| 99 | `the-little-book-that-beats-the-market.webp` | 股市稳赚 | The Little Book That Beats the Market | 乔尔·格林布拉特 | 美股投资 | ✅ 已有 |
| 100 | `100-baggers.webp` | 百倍股：如何找到回报百倍的股票 | 100 Baggers: Stocks That Return 100-to-1 and How to Find Them | 克里斯托弗·迈耶 | 美股投资 | ✅ 已有 |
| 101 | `liberalism.webp` | 自由与繁荣的国度 | Liberalism | 路德维希·冯·米瑟斯 | 社会与文明 | ✅ 已有 |
| 102 | `the-feast-of-the-goat.webp` | 公羊的节日 | The Feast of the Goat | 马里奥·巴尔加斯·略萨 | 文学与小说 | ✅ 已有 |
| 103 | `bad-beliefs.webp` | 坏信念 | Bad Beliefs: Why They Happen to Good People | 尼尔·利维 | 社会与文明 | ✅ 已有 |
| 104 | `the-treason-of-the-intellectuals.webp` | 知识分子的背叛 | The Treason of the Intellectuals | 朱利安·班达 | 社会与文明 | ✅ 已有 |
| 105 | `the-goodness-paradox.webp` | 人性悖论 | The Goodness Paradox: The Strange Relationship Between Virtue and Violence in Human Evolution | 理查德·兰厄姆 | 社会与文明 | ✅ 已有 |
| 106 | `the-dictators-handbook.webp` | 独裁者手册 | The Dictator's Handbook: Why Bad Behavior Is Almost Always Good Politics | 布鲁斯·布埃诺·德·梅斯奎塔 | 社会与文明 | ✅ 已有 |
| 107 | `the-collapse-of-complex-societies.webp` | 复杂社会的崩溃 | The Collapse of Complex Societies | 约瑟夫·泰恩特 | 社会与文明 | ✅ 已有 |
| 108 | `a-luminous-republic.webp` | 光明共和国 | A Luminous Republic | 安德烈斯·巴尔瓦 | 文学与小说 | ✅ 已有 |
| 109 | `the-palliative-society.webp` | 妥协社会：今日之痛 | The Palliative Society: Pain Today | 韩炳哲 | 社会与文明 | ✅ 已有 |
| 110 | `21-lessons-for-the-21st-century.webp` | 今日简史 | 21 Lessons for the 21st Century | 尤瓦尔·赫拉利 | 社会与文明 | ✅ 已有 |
| 111 | `nexus.webp` | 智人之上 | Nexus: A Brief History of Information Networks from the Stone Age to AI | 尤瓦尔·赫拉利 | 社会与文明 | ✅ 已有 |
| 112 | `homo-deus.webp` | 未来简史 | Homo Deus: A Brief History of Tomorrow | 尤瓦尔·赫拉利 | 社会与文明 | ✅ 已有 |
| 113 | `civilized-to-death.webp` | 文明至死 | Civilized to Death: The Price of Progress | 克里斯托弗·瑞安 | 社会与文明 | ✅ 已有 |
| 114 | `how-groups-encourage-misbehavior.webp` | 害马之群 | How Groups Encourage Misbehavior | 凯文·墨菲 | 社会与文明 | ✅ 已有 |
| 115 | `envy.webp` | 嫉妒与社会 | Envy: A Theory of Social Behaviour | 赫尔穆特·舍克 | 社会与文明 | ✅ 已有 |
| 116 | `the-right-nation.webp` | 右派国家 | The Right Nation: Conservative Power in America | 约翰·米克尔思韦特 | 社会与文明 | ✅ 已有 |
| 117 | `the-conformist.webp` | 同流者 | The Conformist | 阿尔伯特·莫拉维亚 | 文学与小说 | ✅ 已有 |
| 118 | `how-change-happens.webp` | 变革如何发生 | How Change Happens | 邓肯·格林 | 社会与文明 | ✅ 已有 |
| 119 | `against-elections.webp` | 反对选举 | Against Elections: The Case for Democracy | 达维德·范雷布鲁克 | 社会与文明 | ✅ 已有 |
| 120 | `propaganda-technique-in-the-world-war.webp` | 世界大战中的宣传技巧 | Propaganda Technique in the World War | 哈罗德·拉斯韦尔 | 社会与文明 | ✅ 已有 |
| 121 | `capitalism-socialism-and-democracy.webp` | 资本主义、社会主义与民主 | Capitalism, Socialism and Democracy | 约瑟夫·熊彼特 | 社会与文明 | ✅ 已有 |
| 122 | `shi-wo-de-cuo-ma.webp` | 是我的错吗？ |  | 吴赞镐 | 社会与文明 | ✅ 已有 |
| 123 | `bad-or-the-dumbing-of-america.webp` | 恶俗 | BAD: or, The Dumbing of America | 保罗·福赛尔 | 社会与文明 | ✅ 已有 |
| 124 | `bei-panchu-sixing-zhihou.webp` | 被判处死刑之后 |  | unknown-bei-panchu | 社会与文明 | ✅ 已有 |
| 125 | `helen-of-troy.webp` | 特洛伊的海伦 | Helen of Troy: Goddess, Princess, Whore | 贝尼塔·休斯 | 世界历史 | ✅ 已有 |
| 126 | `animal-farm.webp` | 动物农场 | Animal Farm | 乔治·奥威尔 | 文学与小说 | ✅ 已有 |
| 127 | `runaway.webp` | 逃离 | Runaway | 艾丽丝·门罗 | 文学与小说 | ✅ 已有 |
| 128 | `chance.webp` | 机缘 | Chance | 艾丽丝·门罗 | 文学与小说 | ✅ 已有 |
| 129 | `beneath-the-wheel.webp` | 在轮下 | Beneath the Wheel | 赫尔曼·黑塞 | 文学与小说 | ✅ 已有 |
| 130 | `demian.webp` | 德米安（彷徨少年时） | Demian | 赫尔曼·黑塞 | 文学与小说 | ✅ 已有 |
| 131 | `the-kiss-to-the-leper.webp` | 给麻风病人的吻 | The Kiss to the Leper | 弗朗索瓦·莫里亚克 | 文学与小说 | ✅ 已有 |
| 132 | `the-desert-of-love.webp` | 爱的荒漠 | The Desert of Love | 弗朗索瓦·莫里亚克 | 文学与小说 | ✅ 已有 |
| 133 | `genitrix.webp` | 母亲大人 | Genitrix | 弗朗索瓦·莫里亚克 | 文学与小说 | ✅ 已有 |
| 134 | `therese-desqueyroux.webp` | 苔蕾丝·德斯盖鲁 | Thérèse Desqueyroux | 弗朗索瓦·莫里亚克 | 文学与小说 | ✅ 已有 |
| 135 | `never-let-me-go.webp` | 莫失莫忘（别让我走） | Never Let Me Go | 石黑一雄 | 文学与小说 | ✅ 已有 |
| 136 | `the-wall.webp` | 隐墙 | The Wall | 玛尔伦·豪斯霍费尔 | 文学与小说 | ✅ 已有 |
| 137 | `the-moon-and-sixpence.webp` | 月亮与六便士 | The Moon and Sixpence | 威廉·萨默塞特·毛姆 | 文学与小说 | ✅ 已有 |
| 138 | `accidental-death-of-an-anarchist.webp` | 一个无政府主义者的意外死亡 | Accidental Death of an Anarchist | 达里奥·福 | 文学与小说 | ✅ 已有 |
| 139 | `giovannis-room.webp` | 乔瓦尼的房间 | Giovanni's Room | 詹姆斯·鲍德温 | 文学与小说 | ✅ 已有 |
| 140 | `greek-lessons.webp` | 失语者 | Greek Lessons | 韩江 | 文学与小说 | ✅ 已有 |
| 141 | `a-happy-death.webp` | 快乐的死 | A Happy Death | 阿尔贝·加缪 | 文学与小说 | ✅ 已有 |
| 142 | `ward-no-6.webp` | 第六病室 | Ward No. 6 | 安东·契诃夫 | 文学与小说 | ✅ 已有 |
| 143 | `the-tartar-steppe.webp` | 鞑靼人沙漠 | The Tartar Steppe | 迪诺·布扎蒂 | 文学与小说 | ✅ 已有 |
| 144 | `fear.webp` | 恐惧 | Fear | 斯蒂芬·茨威格 | 文学与小说 | ✅ 已有 |
| 145 | `simple-passion.webp` | 简单的激情 | Simple Passion | 安妮·埃尔诺 | 文学与小说 | ✅ 已有 |
| 146 | `the-persian-boy.webp` | 波斯少年 | The Persian Boy | 玛丽·瑞瑙特 | 文学与小说 | ✅ 已有 |
| 147 | `a-whole-life.webp` | 大雪将至（完整的一生） | A Whole Life | 罗伯特·泽塔勒 | 文学与小说 | ✅ 已有 |
| 148 | `bloodchild.webp` | 血孩子 | Bloodchild | 奥克塔维娅·巴特勒 | 文学与小说 | ✅ 已有 |
| 149 | `the-lost-daughter.webp` | 暗处的女儿 | The Lost Daughter | 埃莱娜·费兰特 | 文学与小说 | ✅ 已有 |
| 150 | `by-night-in-chile.webp` | 智利之夜 | By Night in Chile | 罗贝托·波拉尼奥 | 文学与小说 | ✅ 已有 |
| 151 | `tokyo-refugees.webp` | 一个贫穷的年轻人 | Tokyo Refugees | 福泽彻三 | 文学与小说 | ✅ 已有 |
| 152 | `lao-ji-chao.webp` | 老妓抄 |  | 冈本加乃子 | 文学与小说 | ✅ 已有 |
| 153 | `the-hunger-angel.webp` | 呼吸秋千 | The Hunger Angel | 赫塔·米勒 | 文学与小说 | ✅ 已有 |
| 154 | `digenis-akritas.webp` | 狄吉尼斯·阿克里特 | Digenis Akritas | 匿名 | 文学与小说 | ✅ 已有 |
| 155 | `slaughterhouse-five.webp` | 五号屠场 | Slaughterhouse-Five | 库尔特·冯内古特 | 文学与小说 | ✅ 已有 |
| 156 | `a-canticle-for-leibowitz.webp` | 莱博维兹的赞歌 | A Canticle for Leibowitz | 小沃尔特·M·米勒 | 文学与小说 | ✅ 已有 |
| 157 | `oresteia.webp` | 俄瑞斯忒亚三部曲 | Oresteia | 埃斯库罗斯 | 文学与小说 | ✅ 已有 |
| 158 | `divan-of-hafez.webp` | 设拉子夜莺 | Divan of Hafez | 哈菲兹 | 文学与小说 | ✅ 已有 |
| 159 | `the-summer-outside.webp` | 外面是夏天 |  | 金爱烂 | 文学与小说 | ✅ 已有 |
| 160 | `lizi-xiaojie-yu-ziji-xiangchu.webp` | 梨子小姐与自己相处 |  | 白辂 | 文学与小说 | ✅ 已有 |
| 161 | `assemblywomen.webp` | 公民大会妇女 | Assemblywomen | 阿里斯托芬 | 文学与小说 | ✅ 已有 |
| 162 | `democratic-ideals-and-reality.webp` | 陆权论 | Democratic Ideals and Reality | 哈尔福德·麦金德 | 世界历史 | ✅ 已有 |
| 163 | `gong-su-xi-fang-wen-hua-jing-shen-de-yan-bian.webp` | 共塑：西方文化精神的演变 |  | 赵林 | 世界历史 | ✅ 已有 |
| 164 | `gu-luo-ma-di-guo-de-hui-huang.webp` | 古罗马帝国的辉煌 |  | 赵林 | 世界历史 | ✅ 已有 |
| 165 | `russia-under-the-old-regime.webp` | 旧制度下的俄国 | Russia Under the Old Regime | 理查德·派普斯 | 世界历史 | ✅ 已有 |
| 166 | `aftermath-life-in-the-fallout-of-the-third-reich.webp` | 狼性时代 | Aftermath: Life in the Fallout of the Third Reich | 哈拉尔德·耶纳 | 世界历史 | ✅ 已有 |
| 167 | `wen-ming-da-qu-shi.webp` | 文明大趋势 |  | 苏三 | 世界历史 | ✅ 已有 |
| 168 | `zuo-jia-cheng-bao.webp` | 作家城堡 |  | 乌韦·诺伊玛尔 | 世界历史 | ✅ 已有 |
| 169 | `rise-and-kill-first.webp` | 先发制人 | Rise and Kill First: The Secret History of Israel's Targeted Assassinations | 罗南·伯格曼 | 世界历史 | ✅ 已有 |
| 170 | `february-1933-the-winter-of-literature.webp` | 文学之冬：1933年... | February 1933: The Winter of Literature | 乌维·维特斯托克 | 世界历史 | ✅ 已有 |
| 171 | `why-dont-we-learn-from-history.webp` | 战争的底层逻辑 | Why Don't We Learn from History? | B. H. 李德·哈特 | 世界历史 | ✅ 已有 |
| 172 | `zhu-wang-de-ou-zhou.webp` | 诸王的欧洲 |  | 莱昂哈德·霍洛夫斯基 | 世界历史 | ✅ 已有 |
| 173 | `zi-you-de-wen-hua.webp` | 自由的文化：古希腊与... |  | 克里斯蒂安·迈耶 | 世界历史 | ✅ 已有 |
| 174 | `huo-zhe-hui-lai-de-nan-ren.webp` | 活着回来的男人 |  | 小熊英二 | 世界历史 | ✅ 已有 |
| 175 | `culture-matters.webp` | 文化的重要作用 | Culture Matters: How Values Shape Human Progress | 塞缪尔·亨廷顿 | 世界历史 | ✅ 已有 |
| 176 | `the-coming-of-the-third-reich.webp` | 第三帝国的到来 | The Coming of the Third Reich | 理查德·J. 埃文斯 | 世界历史 | ✅ 已有 |
| 177 | `heart-of-darkness.webp` | 黑暗的心 | Heart of Darkness | 约瑟夫·康拉德 | 文学与小说 | ✅ 已有 |
| 178 | `you-suo-bu-wei-de-fan-pan-zhe.webp` | 有所不为的反叛者 |  | 罗新 | 世界历史 | ✅ 已有 |
| 179 | `religion-without-god.webp` | 没有上帝的宗教 | Religion Without God | 罗纳德·德沃金 | 哲学 | ✅ 已有 |
| 180 | `the-god-delusion.webp` | 上帝的错觉 | The God Delusion | 理查德·道金斯 | 哲学 | ✅ 已有 |
| 181 | `mind-and-cosmos.webp` | 心灵和宇宙 | Mind and Cosmos: Why the Materialist Neo-Darwinian Conception of Nature Is Almost Certainly False | 托马斯·内格尔 | 哲学 | ✅ 已有 |
| 182 | `the-wisdom-of-insecurity.webp` | 心安：致焦虑的时代 | The Wisdom of Insecurity: A Message for an Age of Anxiety | 阿伦·瓦兹 | 哲学 | ✅ 已有 |
| 183 | `the-stillborn-god.webp` | 夭折的上帝 | The Stillborn God: Religion, Politics, and the Modern West | 马克·里拉 | 哲学 | ✅ 已有 |
| 184 | `just-babies.webp` | 善恶之源 | Just Babies: The Origins of Good and Evil | 保罗·布鲁姆 | 哲学 | ✅ 已有 |
| 185 | `memorabilia.webp` | 回忆苏格拉底 | Memorabilia | 色诺芬 | 哲学 | ✅ 已有 |
| 186 | `the-hemlock-cup.webp` | 毒堇之杯 | The Hemlock Cup: Socrates, Athens and the Search for the Good Life | 贝尼塔·休斯 | 哲学 | ✅ 已有 |
| 187 | `yi-ge-bei-guan-zhu-yi-zhe-de-ji-ji-si-kao.webp` | 一个悲观主义者的积极思考 |  | 亚瑟·叔本华 | 哲学 | ✅ 已有 |
| 188 | `on-the-laws.webp` | 论法律 | On the Laws | 西塞罗 | 哲学 | ✅ 已有 |
| 189 | `the-story-of-mankind.webp` | 人类的故事 | The Story of Mankind | 亨德里克·威廉·房龙 | 哲学 | ✅ 已有 |
| 190 | `yue-du-shi-an-jing-de-zi-wo-jue-xing.webp` | 阅读是安静的自我觉醒 |  | 赫尔曼·黑塞 | 哲学 | ✅ 已有 |
| 191 | `starry-messenger.webp` | 星际信使 | Starry Messenger: Cosmic Perspectives on Civilization | 尼尔·德格拉斯·泰森 | 科技与科学 | ✅ 已有 |
| 192 | `zhege-yuzhou-he-wo-you-shenme-guanxi.webp` | 这个宇宙和我有什么关系 |  | 哈拉尔德·莱施 | 科技与科学 | ✅ 已有 |
| 193 | `until-the-end-of-time.webp` | 直到时间尽头 | Until the End of Time: Mind, Matter, and Our Search for Meaning in an Evolving Universe | 布莱恩·格林 | 科技与科学 | ✅ 已有 |
| 194 | `suanfa-yu-yuyan.webp` | 算法与预言 |  | 历山德罗·韦斯皮尼亚尼 | 科技与科学 | ✅ 已有 |
| 195 | `visions-of-technological-transcendence.webp` | 人类未来进化史 | Visions of Technological Transcendence: Human Enhancement and the Rhetoric of the Future | 詹姆斯·赫里克 | 科技与科学 | ✅ 已有 |
| 196 | `extraterrestrial.webp` | 外星人 | Extraterrestrial: The First Sign of Intelligent Life Beyond Earth | 阿维·洛布 | 科技与科学 | ✅ 已有 |
| 197 | `the-passions-and-the-interests.webp` | 欲望与利益 | The Passions and the Interests: Political Arguments for Capitalism before Its Triumph | 艾伯特·赫希曼 | 经济学 | ✅ 已有 |
| 198 | `our-symphony-with-animals.webp` | 伴生：我们与动物的故事 | Our Symphony with Animals: On Health, Empathy, and Our Shared Destinies | 阿伊莎·阿赫塔 | 科技与科学 | ✅ 已有 |
| 199 | `the-selfish-gene.webp` | 自私的基因 | The Selfish Gene | 理查德·道金斯 | 科技与科学 | ✅ 已有 |
| 200 | `the-naked-ape.webp` | 裸猿 | The Naked Ape: A Zoologist's Study of the Human Animal | 德斯蒙德·莫里斯 | 科技与科学 | ✅ 已有 |
| 201 | `the-meaning-of-human-existence.webp` | 人类存在的意义 | The Meaning of Human Existence | 爱德华·威尔逊 | 科技与科学 | ✅ 已有 |
| 202 | `you-bet-your-life.webp` | 赌命 | You Bet Your Life: From Blood Transfusions to Mass Vaccination, the Long and Risky History of Medical Innovation | 保罗·奥菲特 | 科技与科学 | ✅ 已有 |
| 203 | `letter-to-a-child-never-born.webp` | 给一个未能出生的孩子的信 | Letter to a Child Never Born | 奥里亚娜·法拉奇 | 文学与小说 | ✅ 已有 |
| 204 | `shiyu-jixian.webp` | 始于极限 |  | 上野千鹤子 | 社会与文明 | ✅ 已有 |
| 205 | `zai-shuxi-de-jiazhong-xiang-shijie-daobie.webp` | 在熟悉的家中向世界道别 |  | 上野千鹤子 | 社会与文明 | ✅ 已有 |
| 206 | `yannu.webp` | 厌女 |  | 上野千鹤子 | 社会与文明 | ✅ 已有 |
| 207 | `wuyuan-shehui.webp` | 无缘社会 |  | NHK特别追踪报道组 | 社会与文明 | ✅ 已有 |
| 208 | `ta-yannan-ta-shi-wo-nvyou.webp` | 她厌男，她是我女友 |  | 闵智炯 | 社会与文明 | ✅ 已有 |
| 209 | `not-just-for-the-boys.webp` | 一直在场 | Not Just for the Boys: Why We Need More Women in Science | 雅典娜·唐纳德 | 社会与文明 | ✅ 已有 |
| 210 | `the-gender-knot.webp` | 性别打结 | The Gender Knot: Unraveling Our Patriarchal Legacy | 艾伦·约翰逊 | 社会与文明 | ✅ 已有 |
| 211 | `li-yinhe-shuo-aiqing.webp` | 李银河说爱情 |  | 李银河 | 社会与文明 | ✅ 已有 |
| 212 | `heading-home.webp` | 回归家庭 | Heading Home: Motherhood, Work, and the Failed Promise of Equality | 沙尼·奥加德 | 社会与文明 | ✅ 已有 |
| 213 | `a-room-of-ones-own.webp` | 一间自己的屋子 | A Room of One's Own | 弗吉尼亚·伍尔夫 | 社会与文明 | ✅ 已有 |
| 214 | `shaonian-fasheng.webp` | 少年发声 |  | 陈瑜 | 社会与文明 | ✅ 已有 |
| 215 | `the-politics-of-social-solidarity.webp` | 福利大博弈 | The Politics of Social Solidarity: Class Bases of the European Welfare State, 1875–1975 | 彼得·鲍德温 | 经济学 | ✅ 已有 |
| 216 | `coffeeland.webp` | 咖啡帝国 | Coffeeland: One Man's Dark Empire and the Making of Our Favorite Drug | 奥古斯丁·赛奇威克 | 经济学 | ✅ 已有 |
| 217 | `relationships-5-0.webp` | 关系5.0 | Relationships 5.0: How AI, VR, and Robots Will Reshape Our Emotional Lives | 伊里亚金·基斯列夫 | 社会与文明 | ✅ 已有 |
| 218 | `shehui-weishenme-dui-nianqingren-lengku-wuqing.webp` | 社会为什么对年轻人冷酷无情 |  | 山田昌弘 | 经济学 | ✅ 已有 |
| 219 | `complexity-the-evolution-of-earths-biodiversity.webp` | 生命大趋势 | Complexity: The Evolution of Earth's Biodiversity and the Future of Humanity | unknown-complexity | 科技与科学 | ✅ 已有 |
| 220 | `we-have-never-been-middle-class.webp` | 我们从未中产过 | We Have Never Been Middle Class: How Social Mobility Misleads Us | 豪道斯·魏斯 | 经济学 | ✅ 已有 |
| 221 | `the-fuzzy-and-the-techie.webp` | 文艺呆与科技宅 | The Fuzzy and the Techie: Why the Liberal Arts Will Rule the Digital World | 斯科特·哈特里 | 经济学 | ✅ 已有 |
| 222 | `sanshi-buli.webp` | 三十不立 |  | NHK特别追踪报道组 | 经济学 | ✅ 已有 |
| 223 | `00-niandai-de-xiangxiangli.webp` | 00年代的想象力 |  | 宇野常宽 | 社会与文明 | ✅ 已有 |
| 224 | `soulstealers.webp` | 叫魂：1768年中国妖术大恐慌 | Soulstealers | 孔飞力 | 社会与文明 | ✅ 已有 |
| 225 | `the-book-of-lord-shang.webp` | 商君书 | The Book of Lord Shang | 商鞅 | 社会与文明 | ✅ 已有 |
| 226 | `nhk-special-reporting-team-documentary-series.webp` | NHK特别取材组纪实丛书 |  | 日本NHK特别取材组 | 社会与文明 | ✅ 已有 |
| 227 | `the-path-of-least-resistance.webp` | 最小阻力路径相关社会学著作 |  | 艾伦·约翰逊 | 社会与文明 | ✅ 已有 |
| 228 | `the-world-as-will-and-representation.webp` | 作为意志和表象的世界 | The World as Will and Representation | 亚瑟·叔本华 | 哲学 | ✅ 已有 |
| 229 | `critique-of-pure-reason.webp` | 纯粹理性批判 | Critique of Pure Reason | 伊曼努尔·康德 | 哲学 | ✅ 已有 |
| 230 | `symposium.webp` | 会饮篇 | Symposium | 柏拉图 | 哲学 | ✅ 已有 |
| 231 | `a-treatise-of-human-nature.webp` | 人性论 | A Treatise of Human Nature | 大卫·休谟 | 哲学 | ✅ 已有 |
| 232 | `iliad-and-odyssey.webp` | 荷马史诗（伊利亚特奥德赛） | Iliad & Odyssey | 荷马 | 文学与小说 | ✅ 已有 |
| 233 | `aeneid.webp` | 埃涅阿斯纪 | Aeneid | 维吉尔 | 文学与小说 | ✅ 已有 |
| 234 | `ars-amatoria.webp` | 爱经（爱的艺术） | Ars Amatoria | 奥维德 | 文学与小说 | ✅ 已有 |
| 235 | `satyricon.webp` | 萨蒂利孔 | Satyricon | 佩特罗尼乌斯 | 文学与小说 | ✅ 已有 |
| 236 | `the-decameron.webp` | 十日谈 | The Decameron | 乔万尼·薄伽丘 | 文学与小说 | ✅ 已有 |
| 237 | `childe-harolds-pilgrimage.webp` | 恰尔德·哈罗尔德游记 | Childe Harold's Pilgrimage | 拜伦 | 文学与小说 | ✅ 已有 |
| 238 | `the-psychopath-inside.webp` | 天生变态狂 | The Psychopath Inside | 詹姆斯·法隆 | 心理学与认知科学 | ✅ 已有 |
| 239 | `rewire-your-anxious-brain.webp` | 重塑与情绪修复脑科学 |  | 凯特琳·M·特曼 | 心理学与认知科学 | ✅ 已有 |
| 240 | `testosterone.webp` | 睾酮 | Testosterone | 卡罗尔·胡文 | 心理学与认知科学 | ✅ 已有 |
| 241 | `dirty-genes.webp` | 脏基因 | Dirty Genes | 本·林奇 | 心理学与认知科学 | ✅ 已有 |
| 242 | `the-fermi-paradox-seventy-five-solutions.webp` | 费米悖论的75种解释 |  | 史蒂芬·韦伯 | 科技与科学 | ✅ 已有 |
| 243 | `biocentrism.webp` | 生物中心主义三部曲 | Biocentrism | 罗伯特·兰扎 | 科技与科学 | ✅ 已有 |
| 244 | `the-easterlin-paradox.webp` | 幸福经济学相关著作 |  | 理查德·伊斯特林 | 经济学 | ✅ 已有 |
| 245 | `the-cafe-on-the-edge-of-the-world.webp` | 世界尽头的咖啡馆系列 | The Cafe on the Edge of the World | 约翰·史崔勒基 | 经济学 | ✅ 已有 |
| 246 | `a-travel-guide-to-heaven.webp` | 天堂之旅 | A Travel Guide to Heaven | 安东尼·德斯蒂法诺 | 经济学 | ✅ 已有 |
| 247 | `the-philosophy-of-art.webp` | 艺术哲学 | The Philosophy of Art | 伊波利特·丹纳 | 社会与文明 | ✅ 已有 |
| 248 | `tiancai-de-shenghui.webp` | 天才的盛会：文艺复兴艺术300年 |  | 江逐浪 | 社会与文明 | ✅ 已有 |
| 249 | `crystal-fire.webp` | 晶体之火：晶体管的发明与信息时代的来临 | Crystal Fire: The Invention of the Transistor and the Birth of the Information Age | 迈克尔·赖尔登、莉莉安·霍德森 | 科技与科学 | ✅ 已有 |
| 250 | `the-man-who-mistook-his-wife-for-a-hat.webp` | 错把妻子当帽子 | The Man Who Mistook His Wife for a Hat and Other Clinical Tales | 奥利弗·萨克斯 | 心理学与认知科学 | ✅ 已有 |
| 251 | `the-human-condition.webp` | 人的境况 | The Human Condition | 汉娜·阿伦特 | 哲学 | ✅ 已有 |
| 252 | `the-society-of-mind.webp` | 心智社会：从细胞到人工智能，人类思维的优雅解读 | The Society of Mind | 马文·明斯基 | 心理学与认知科学 | ✅ 已有 |
| 253 | `meditations-on-first-philosophy.webp` | 第一哲学沉思集 | Meditations on First Philosophy | 勒内·笛卡尔 | 哲学 | ✅ 已有 |
| 254 | `descartes-error.webp` | 笛卡尔的错误：情绪、推理和大脑 | Descartes' Error: Emotion, Reason, and the Human Brain | 安东尼奥·达马西奥 | 心理学与认知科学 | ✅ 已有 |
| 255 | `1177-bc-the-year-civilization-collapsed.webp` | 文明的崩塌：公元前1177年的地中海世界 | 1177 B.C.: The Year Civilization Collapsed | 埃里克·H. 克莱因 | 世界历史 | ✅ 已有 |
| 256 | `the-man-behind-the-microchip.webp` | 硅谷之父：微型芯片业的幕后巨人 | The Man Behind the Microchip: Robert Noyce and the Invention of Silicon Valley | 莱斯利·柏林 | 科技与科学 | ✅ 已有 |
| 257 | `de-anima.webp` | 论灵魂 | De Anima (On the Soul) | 亚里士多德 | 哲学 | ✅ 已有 |
| 258 | `consciousness-explained.webp` | 意识的解释 | Consciousness Explained | 丹尼尔·C. 丹尼特 | 心理学与认知科学 | ✅ 已有 |
| 259 | `the-idea-factory.webp` | 贝尔实验室与美国革新大时代 | The Idea Factory: Bell Labs and the Great Age of American Innovation | 乔恩·格特纳 | 科技与科学 | ✅ 已有 |
| 260 | `the-language-instinct.webp` | 语言本能：人类语言进化的奥秘 | The Language Instinct: How the Mind Creates Language | 史蒂芬·平克 | 心理学与认知科学 | ✅ 已有 |
| 261 | `cybernetics.webp` | 控制论：或关于在动物和机器中控制和通信的科学 | Cybernetics: Or Control and Communication in the Animal and the Machine | 诺伯特·维纳 | 人工智能 | ✅ 已有 |
| 262 | `the-rise-and-fall-of-the-great-powers.webp` | 大国的兴衰：1500-2000年的经济变迁与军事冲突 | The Rise and Fall of the Great Powers: Economic Change and Military Conflict from 1500 to 2000 | 保罗·肯尼迪 | 世界历史 | ✅ 已有 |
| 263 | `philosophical-investigations.webp` | 哲学研究 | Philosophical Investigations | 路德维希·维特根斯坦 | 哲学 | ✅ 已有 |
| 264 | `how-emotions-are-made.webp` | 情绪 | How Emotions Are Made: The Secret Life of the Brain | 莉莎·费德曼·巴瑞特 | 心理学与认知科学 | ✅ 已有 |
| 265 | `ethics-spinoza.webp` | 伦理学 | Ethics | 巴鲁赫·斯宾诺莎 | 哲学 | ✅ 已有 |
| 266 | `stuff-matters.webp` | 迷人的材料 | Stuff Matters: Exploring the Marvelous Materials That Shape Our Man-Made World | 马克·米奥多尼克 | 科技与科学 | ✅ 已有 |
| 267 | `the-sleepwalkers.webp` | 梦游者：1914年，欧洲如何走向“一战” | The Sleepwalkers: How Europe Went to War in 1914 | 克里斯托弗·克拉克 | 世界历史 | ✅ 已有 |
| 268 | `artificial-intelligence-a-guide-for-thinking-humans.webp` | AI 3.0 | Artificial Intelligence: A Guide for Thinking Humans | 梅拉妮·米歇尔 | 人工智能 | ✅ 已有 |
| 269 | `les-mots-et-les-choses.webp` | 词与物 | The Order of Things: An Archaeology of the Human Sciences | 米歇尔·福柯 | 哲学 | ✅ 已有 |
| 270 | `interpretation-of-cultures.webp` | 作为文化的解释 | The Interpretation of Cultures | 克利福德·格尔茨 | 心理学与认知科学 | ✅ 已有 |
| 271 | `the-concept-of-mind.webp` | 心的概念 | The Concept of Mind | 吉尔伯特·赖尔 | 哲学 | ✅ 已有 |
| 272 | `consciousness-and-the-brain.webp` | 脑与意识 | Consciousness and the Brain: Deciphering How the Brain Codes Our Thoughts | 斯坦尼斯拉斯·迪昂 | 心理学与认知科学 | ✅ 已有 |
| 273 | `being-and-time.webp` | 存在与时间 | Being and Time | 马丁·海德格尔 | 哲学 | ✅ 已有 |
| 274 | `sciences-of-the-artificial.webp` | 人工科学 | The Sciences of the Artificial | 赫伯特·A·西蒙（司马贺） | 人工智能 | ✅ 已有 |
| 275 | `a-history-of-western-philosophy.webp` | 西方哲学史 | A History of Western Philosophy | 伯特兰·罗素 | 哲学 | ✅ 已有 |
| 276 | `moores-law.webp` | 摩尔神话：硅谷数字革命先驱的传奇人生 | Moore's Law: The Life of Gordon Moore, Silicon Valley's Quiet Revolutionary | 阿诺德·萨克雷、戴维·布洛克、雷切尔·琼斯 | 科技与科学 | ✅ 已有 |
| 277 | `empire-of-cotton.webp` | 棉花帝国：一部资本主义全球史 | Empire of Cotton: A Global History | 斯文·贝克特 | 世界历史 | ✅ 已有 |
| 278 | `the-book-of-why.webp` | 为什么：关于因果关系的新科学 | The Book of Why: The New Science of Cause and Effect | 朱迪亚·珀尔、达纳·麦肯齐 | 人工智能 | ✅ 已有 |
| 279 | `phenomenology-of-spirit.webp` | 精神现象学 | The Phenomenology of Spirit | 格奥尔格·威廉·弗里德里希·黑格尔 | 哲学 | ✅ 已有 |
| 280 | `whos-in-charge.webp` | 谁说了算？自由意志的心理学解读 | Who's in Charge?: Free Will and the Science of the Brain | 迈克尔·S. 加扎尼加 | 心理学与认知科学 | ✅ 已有 |
| 281 | `zhuangzi.webp` | 庄子 | Zhuangzi | 庄子（庄周） | 哲学 | ✅ 已有 |
| 282 | `being-you.webp` | 意识机器：成为你自己 | Being You: A New Science of Consciousness | 阿尼尔·赛斯 | 心理学与认知科学 | ✅ 已有 |

---

## 九、只导出「待出图」文件名（0 个，可直接批量生成）

```text

```
