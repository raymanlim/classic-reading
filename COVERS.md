# 封面图生成清单｜Classics Library

本文件是给你生成封面图用的对照表。共 **100** 本。

---

## 一、放到哪个目录

```
public/covers/
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
| 单张体积 | 建议 < 150 KB（整站 100 张，总量控制在 15 MB 以内） |
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

已勘察 Obsidian 的 `Books/_assets/` 目录，结论：**不适合直接用于本站**，原因如下。

**（1）覆盖率只有 8%**

该目录 98 张图按**书名**命名，与本站 100 本经典的交集：

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

其余 90 张属于另一套书单（中文原创 / 中文译本 / 实用类），本站没有对应书目。

**（2）规格不达标**

- 宽高比区间 0.648 – 1.345，目标 0.667；多数是 0.750（3:4），会被左右各裁约 11%
- `黑天鹅.jpg` 为横构图（1.345），裁成 2:3 会切掉约 50% 宽度
- 分辨率 270 – 640 px 宽，低于 800 px 目标；最小的一张在详情页会明显发虚

**（3）视觉一致性**

不同出版社的真实封面有各自的色彩与字体系统，与本站「深普鲁士蓝 + 米白 + 米金」的设计系统冲突。8 张真封面混在 92 张程序化封面里，比 100 张统一封面更难看。

**（4）版权**

真实出版社封面受版权保护。本站原始设计刻意采用纯 CSS 程序化封面以规避该风险，引入真封面会重新引入。

**建议**：本站封面**统一重新生成**（AI 生成或设计），保持同一视觉语言。

---

## 七、另一件事：这批封面有更合适的去处

`Books/_assets/` 在**它自己的语境**里表现很好：

| 指标 | 数值 |
|---|---|
| 书籍笔记（排除报告类） | 99 篇 |
| 含 `cover` 字段 | 99 篇 |
| 封面文件实际存在 | **97 篇（98.0%）** |
| 阅读状态分布 | 想读 87 · 已读 10 · 在读 1 |

也就是说，你的 Obsidian 藏书本身已经是一套**封面覆盖 98% + 阅读状态 + 笔记**的完整数据。它更适合做成一个独立的「我的书架 / My Shelf」页面——在那里，封面来源不统一是**真实**的，不是缺陷。

如果要做，这是独立于本站的另一个任务。

---

## 八、完整清单（100 本，按经典指数降序）

| # | 文件名 | 中文书名 | 英文书名 | 作者 | 分类 |
|---|---|---|---|---|---|
| 1 | `the-intelligent-investor.webp` | 聪明的投资者 | The Intelligent Investor | 本杰明·格雷厄姆 | 投资 |
| 2 | `the-wealth-of-nations.webp` | 国富论 | An Inquiry into the Nature and Causes of the Wealth of Nations | 亚当·斯密 | 经济学 |
| 3 | `the-republic.webp` | 理想国 | The Republic | 柏拉图 | 哲学 |
| 4 | `tao-te-ching.webp` | 道德经 | Tao Te Ching | 老子 | 哲学 |
| 5 | `the-analects.webp` | 论语 | The Analects | 孔子 | 哲学 |
| 6 | `artificial-intelligence-a-modern-approach.webp` | 人工智能：一种现代的方法 | Artificial Intelligence: A Modern Approach | 斯图尔特·罗素 | 人工智能 |
| 7 | `the-general-theory.webp` | 就业、利息和货币通论 | The General Theory of Employment, Interest and Money | 约翰·梅纳德·凯恩斯 | 经济学 |
| 8 | `meditations.webp` | 沉思录 | Meditations | 马可·奥勒留 | 哲学 |
| 9 | `the-structure-of-scientific-revolutions.webp` | 科学革命的结构 | The Structure of Scientific Revolutions | 托马斯·库恩 | 科技与科学 |
| 10 | `the-black-swan.webp` | 黑天鹅：如何应对不可预知的未来 | The Black Swan: The Impact of the Highly Improbable | 纳西姆·尼古拉斯·塔勒布 | 金融 |
| 11 | `security-analysis.webp` | 证券分析 | Security Analysis | 本杰明·格雷厄姆 | 投资 |
| 12 | `history-of-the-peloponnesian-war.webp` | 伯罗奔尼撒战争史 | History of the Peloponnesian War | 修昔底德 | 世界历史 |
| 13 | `competitive-strategy.webp` | 竞争战略 | Competitive Strategy: Techniques for Analyzing Industries and Competitors | 迈克尔·波特 | 商业 |
| 14 | `nicomachean-ethics.webp` | 尼各马可伦理学 | Nicomachean Ethics | 亚里士多德 | 哲学 |
| 15 | `thinking-fast-and-slow.webp` | 思考，快与慢 | Thinking, Fast and Slow | 丹尼尔·卡尼曼 | 心理学与认知科学 |
| 16 | `superintelligence.webp` | 超级智能：路径、危险与策略 | Superintelligence: Paths, Dangers, Strategies | 尼克·博斯特罗姆 | 人工智能 |
| 17 | `godel-escher-bach.webp` | 哥德尔、艾舍尔、巴赫：集异璧之大成 | Gödel, Escher, Bach: An Eternal Golden Braid | 侯世达 | 科技与科学 |
| 18 | `the-decline-and-fall-of-the-roman-empire.webp` | 罗马帝国衰亡史 | The History of the Decline and Fall of the Roman Empire | 爱德华·吉本 | 世界历史 |
| 19 | `the-innovators-dilemma.webp` | 创新者的窘境 | The Innovator's Dilemma | 克莱顿·克里斯坦森 | 商业 |
| 20 | `thus-spoke-zarathustra.webp` | 查拉图斯特拉如是说 | Thus Spoke Zarathustra: A Book for All and None | 弗里德里希·尼采 | 哲学 |
| 21 | `the-protestant-ethic-and-the-spirit-of-capitalism.webp` | 新教伦理与资本主义精神 | The Protestant Ethic and the Spirit of Capitalism | 马克斯·韦伯 | 社会与文明 |
| 22 | `leviathan.webp` | 利维坦 | Leviathan | 托马斯·霍布斯 | 社会与文明 |
| 23 | `deep-learning.webp` | 深度学习 | Deep Learning | 伊恩·古德费洛 | 人工智能 |
| 24 | `chip-war.webp` | 芯片战争：世界最关键技术的争夺战 | Chip War: The Fight for the World's Most Critical Technology | 克里斯·米勒 | 科技与科学 |
| 25 | `antifragile.webp` | 反脆弱：从不确定性中获益 | Antifragile: Things That Gain from Disorder | 纳西姆·尼古拉斯·塔勒布 | 金融 |
| 26 | `das-kapital.webp` | 资本论 | Capital: A Critique of Political Economy | 卡尔·马克思 | 经济学 |
| 27 | `guns-germs-and-steel.webp` | 枪炮、病菌与钢铁：人类社会的命运 | Guns, Germs, and Steel: The Fates of Human Societies | 贾雷德·戴蒙德 | 世界历史 |
| 28 | `on-liberty.webp` | 论自由 | On Liberty | 约翰·斯图尔特·密尔 | 社会与文明 |
| 29 | `poor-charlies-almanack.webp` | 穷查理宝典：查理·芒格的智慧箴言录 | Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger | 查理·芒格 | 投资 |
| 30 | `a-random-walk-down-wall-street.webp` | 漫步华尔街 | A Random Walk Down Wall Street | 伯顿·马尔基尔 | 投资 |
| 31 | `the-road-to-serfdom.webp` | 通往奴役之路 | The Road to Serfdom | 弗里德里希·哈耶克 | 经济学 |
| 32 | `sapiens.webp` | 人类简史：从动物到上帝 | Sapiens: A Brief History of Humankind | 尤瓦尔·赫拉利 | 世界历史 |
| 33 | `the-effective-executive.webp` | 卓有成效的管理者 | The Effective Executive: The Definitive Guide to Getting the Right Things Done | 彼得·德鲁克 | 商业 |
| 34 | `the-myth-of-sisyphus.webp` | 西西弗神话 | The Myth of Sisyphus | 阿尔贝·加缪 | 哲学 |
| 35 | `influence.webp` | 影响力 | Influence: The Psychology of Persuasion | 罗伯特·西奥迪尼 | 心理学与认知科学 |
| 36 | `fooled-by-randomness.webp` | 随机漫步的傻瓜 | Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets | 纳西姆·尼古拉斯·塔勒布 | 金融 |
| 37 | `the-clash-of-civilizations.webp` | 文明的冲突与世界秩序的重建 | The Clash of Civilizations and the Remaking of World Order | 塞缪尔·亨廷顿 | 世界历史 |
| 38 | `the-rise-and-fall-of-the-third-reich.webp` | 第三帝国的兴亡 | The Rise and Fall of the Third Reich | 威廉·夏伊勒 | 世界历史 |
| 39 | `1587-a-year-of-no-significance.webp` | 万历十五年 | 1587, A Year of No Significance: The Ming Dynasty in Decline | 黄仁宇 | 世界历史 |
| 40 | `letters-from-a-stoic.webp` | 道德书简 | Letters from a Stoic | 塞内加 | 哲学 |
| 41 | `reinforcement-learning-an-introduction.webp` | 强化学习导论 | Reinforcement Learning: An Introduction | 理查德·萨顿 | 人工智能 |
| 42 | `human-compatible.webp` | AI 新生：破解人机共存密码 | Human Compatible: Artificial Intelligence and the Problem of Control | 斯图尔特·罗素 | 人工智能 |
| 43 | `understanding-media.webp` | 理解媒介：论人的延伸 | Understanding Media: The Extensions of Man | 马歇尔·麦克卢汉 | 科技与科学 |
| 44 | `against-the-gods.webp` | 与天为敌：风险探索传奇 | Against the Gods: The Remarkable Story of Risk | 彼得·伯恩斯坦 | 金融 |
| 45 | `common-stocks-and-uncommon-profits.webp` | 怎样选择成长股 | Common Stocks and Uncommon Profits | 菲利普·费雪 | 投资 |
| 46 | `the-great-transformation.webp` | 大转型：我们时代的政治与经济起源 | The Great Transformation: The Political and Economic Origins of Our Time | 卡尔·波兰尼 | 经济学 |
| 47 | `the-guns-of-august.webp` | 八月炮火 | The Guns of August | 芭芭拉·塔奇曼 | 世界历史 |
| 48 | `postwar.webp` | 战后欧洲史 | Postwar: A History of Europe Since 1945 | 托尼·朱特 | 世界历史 |
| 49 | `the-design-of-everyday-things.webp` | 设计心理学 | The Design of Everyday Things | 唐·诺曼 | 商业 |
| 50 | `crossing-the-chasm.webp` | 跨越鸿沟 | Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers | 杰弗里·摩尔 | 商业 |
| 51 | `amusing-ourselves-to-death.webp` | 娱乐至死 | Amusing Ourselves to Death: Public Discourse in the Age of Show Business | 尼尔·波兹曼 | 社会与文明 |
| 52 | `the-information.webp` | 信息简史 | The Information: A History, a Theory, a Flood | 詹姆斯·格雷克 | 科技与科学 |
| 53 | `manias-panics-and-crashes.webp` | 疯狂、惊恐和崩溃：金融危机史 | Manias, Panics, and Crashes: A History of Financial Crises | 查尔斯·金德尔伯格 | 金融 |
| 54 | `the-most-important-thing.webp` | 投资最重要的事 | The Most Important Thing: Uncommon Sense for the Thoughtful Investor | 霍华德·马克斯 | 投资 |
| 55 | `reminiscences-of-a-stock-operator.webp` | 股票作手回忆录 | Reminiscences of a Stock Operator | 埃德温·勒菲弗 | 投资 |
| 56 | `why-nations-fail.webp` | 国家为什么会失败 | Why Nations Fail: The Origins of Power, Prosperity, and Poverty | 达龙·阿西莫格鲁 | 经济学 |
| 57 | `the-end-of-history.webp` | 历史的终结与最后的人 | The End of History and the Last Man | 弗朗西斯·福山 | 世界历史 |
| 58 | `only-the-paranoid-survive.webp` | 只有偏执狂才能生存 | Only the Paranoid Survive: How to Exploit the Crisis Points That Challenge Every Company | 安迪·格鲁夫 | 商业 |
| 59 | `thinking-in-systems.webp` | 系统之美：决策者的系统思考 | Thinking in Systems: A Primer | 德内拉·梅多斯 | 心理学与认知科学 |
| 60 | `the-crowd.webp` | 乌合之众：大众心理研究 | The Crowd: A Study of the Popular Mind | 古斯塔夫·勒庞 | 社会与文明 |
| 61 | `life-3-0.webp` | 生命 3.0：人工智能时代，人类的进化与重生 | Life 3.0: Being Human in the Age of Artificial Intelligence | 迈克斯·泰格马克 | 人工智能 |
| 62 | `margin-of-safety.webp` | 安全边际 | Margin of Safety: Risk-Averse Value Investing Strategies for the Thoughtful Investor | 赛思·卡拉曼 | 投资 |
| 63 | `irrational-exuberance.webp` | 非理性繁荣 | Irrational Exuberance | 罗伯特·席勒 | 投资 |
| 64 | `free-to-choose.webp` | 自由选择 | Free to Choose: A Personal Statement | 米尔顿·弗里德曼 | 经济学 |
| 65 | `capital-in-the-twenty-first-century.webp` | 21 世纪资本论 | Capital in the Twenty-First Century | 托马斯·皮凯蒂 | 经济学 |
| 66 | `this-time-is-different.webp` | 这次不一样：八百年金融危机史 | This Time Is Different: Eight Centuries of Financial Folly | 卡门·莱因哈特 | 经济学 |
| 67 | `the-worldly-philosophers.webp` | 世俗哲学家：伟大经济学家的生平、时代与思想 | The Worldly Philosophers: The Lives, Times and Ideas of the Great Economic Thinkers | 罗伯特·海尔布隆纳 | 经济学 |
| 68 | `world-order.webp` | 世界秩序 | World Order | 亨利·基辛格 | 世界历史 |
| 69 | `flow.webp` | 心流：最优体验心理学 | Flow: The Psychology of Optimal Experience | 米哈里·契克森米哈赖 | 心理学与认知科学 |
| 70 | `the-alignment-problem.webp` | 人机对齐 | The Alignment Problem: Machine Learning and Human Values | 布莱恩·克里斯蒂安 | 人工智能 |
| 71 | `the-innovators.webp` | 创新者：一群技术狂人和黑客如何创造数字革命 | The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution | 沃尔特·艾萨克森 | 科技与科学 |
| 72 | `the-ascent-of-money.webp` | 货币崛起：世界金融简史 | The Ascent of Money: A Financial History of the World | 尼尔·弗格森 | 金融 |
| 73 | `one-up-on-wall-street.webp` | 彼得·林奇的成功投资 | One Up on Wall Street | 彼得·林奇 | 投资 |
| 74 | `the-outsiders.webp` | 商界局外人：八位非凡 CEO 的资本配置之道 | The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success | 威廉·桑代克 | 美股投资 |
| 75 | `zero-to-one.webp` | 从 0 到 1：开启商业与未来的秘密 | Zero to One: Notes on Startups, or How to Build the Future | 彼得·蒂尔 | 商业 |
| 76 | `good-to-great.webp` | 从优秀到卓越 | Good to Great: Why Some Companies Make the Leap... and Others Don't | 吉姆·柯林斯 | 商业 |
| 77 | `superforecasting.webp` | 超预测：预见未来的艺术和科学 | Superforecasting: The Art and Science of Prediction | 菲利普·泰特洛克 | 心理学与认知科学 |
| 78 | `ai-superpowers.webp` | AI·未来 | AI Superpowers: China, Silicon Valley, and the New World Order | 李开复 | 人工智能 |
| 79 | `extraordinary-popular-delusions.webp` | 大癫狂：非同寻常的大众幻想与群体疯狂 | Extraordinary Popular Delusions and the Madness of Crowds | 查尔斯·麦凯 | 金融 |
| 80 | `when-genius-failed.webp` | 赌金者：长期资本管理公司的升腾与陨落 | When Genius Failed: The Rise and Fall of Long-Term Capital Management | 罗杰·洛温斯坦 | 金融 |
| 81 | `noise.webp` | 噪声 | Noise: A Flaw in Human Judgment | 丹尼尔·卡尼曼 | 心理学与认知科学 |
| 82 | `the-master-algorithm.webp` | 终极算法：机器学习和人工智能如何重塑世界 | The Master Algorithm | 佩德罗·多明戈斯 | 人工智能 |
| 83 | `surely-youre-joking-mr-feynman.webp` | 别闹了，费曼先生 | Surely You're Joking, Mr. Feynman! | 理查德·费曼 | 科技与科学 |
| 84 | `the-big-short.webp` | 大空头 | The Big Short: Inside the Doomsday Machine | 迈克尔·刘易斯 | 金融 |
| 85 | `poor-economics.webp` | 贫穷的本质：我们为什么摆脱不了贫穷 | Poor Economics: A Radical Rethinking of the Way to Fight Global Poverty | 阿比吉特·班纳吉 | 经济学 |
| 86 | `misbehaving.webp` | “错误”的行为：行为经济学的形成 | Misbehaving: The Making of Behavioral Economics | 理查德·塞勒 | 经济学 |
| 87 | `the-silk-roads.webp` | 丝绸之路：一部全新的世界史 | The Silk Roads: A New History of the World | 彼得·弗兰科潘 | 世界历史 |
| 88 | `the-age-of-ai.webp` | 人工智能时代与人类未来 | The Age of AI: And Our Human Future | 亨利·基辛格 | 人工智能 |
| 89 | `the-second-machine-age.webp` | 第二次机器革命：数字化技术将如何改变我们的经济与社会 | The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies | 埃里克·布林约尔松 | 科技与科学 |
| 90 | `the-hard-thing-about-hard-things.webp` | 创业维艰：如何完成比难更难的事 | The Hard Thing About Hard Things | 本·霍洛维茨 | 商业 |
| 91 | `what-are-you-doing-with-your-life.webp` | 人生中不可不想的事 | What Are You Doing with Your Life? | 克里希那穆提 | 哲学 |
| 92 | `predictably-irrational.webp` | 怪诞行为学：可预测的非理性 | Predictably Irrational: The Hidden Forces That Shape Our Decisions | 丹·艾瑞里 | 心理学与认知科学 |
| 93 | `mindset.webp` | 终身成长：重新定义成功的思维模式 | Mindset: The New Psychology of Success | 卡罗尔·德韦克 | 心理学与认知科学 |
| 94 | `ai-2041.webp` | AI 2041：预见 10 个未来新世界 | AI 2041: Ten Visions for Our Future | 李开复 | 人工智能 |
| 95 | `structures-or-why-things-dont-fall-down.webp` | 结构：为什么东西不会倒塌 | Structures: Or Why Things Don't Fall Down | J. E. 戈登 | 科技与科学 |
| 96 | `the-psychology-of-money.webp` | 金钱心理学 | The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness | 摩根·豪泽尔 | 心理学与认知科学 |
| 97 | `the-battle-for-investment-survival.webp` | 投资生存之战 | The Battle for Investment Survival | 杰拉尔德·勒布 | 美股投资 |
| 98 | `genius-makers.webp` | 天才制造者：改变世界的 AI 先锋 | Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World | 凯德·梅茨 | 人工智能 |
| 99 | `the-little-book-that-beats-the-market.webp` | 股市稳赚 | The Little Book That Beats the Market | 乔尔·格林布拉特 | 美股投资 |
| 100 | `100-baggers.webp` | 百倍股：如何找到回报百倍的股票 | 100 Baggers: Stocks That Return 100-to-1 and How to Find Them | 克里斯托弗·迈耶 | 美股投资 |

---

## 九、只导出文件名（方便批量生成）

```text
the-intelligent-investor.webp
the-wealth-of-nations.webp
the-republic.webp
tao-te-ching.webp
the-analects.webp
artificial-intelligence-a-modern-approach.webp
the-general-theory.webp
meditations.webp
the-structure-of-scientific-revolutions.webp
the-black-swan.webp
security-analysis.webp
history-of-the-peloponnesian-war.webp
competitive-strategy.webp
nicomachean-ethics.webp
thinking-fast-and-slow.webp
superintelligence.webp
godel-escher-bach.webp
the-decline-and-fall-of-the-roman-empire.webp
the-innovators-dilemma.webp
thus-spoke-zarathustra.webp
the-protestant-ethic-and-the-spirit-of-capitalism.webp
leviathan.webp
deep-learning.webp
chip-war.webp
antifragile.webp
das-kapital.webp
guns-germs-and-steel.webp
on-liberty.webp
poor-charlies-almanack.webp
a-random-walk-down-wall-street.webp
the-road-to-serfdom.webp
sapiens.webp
the-effective-executive.webp
the-myth-of-sisyphus.webp
influence.webp
fooled-by-randomness.webp
the-clash-of-civilizations.webp
the-rise-and-fall-of-the-third-reich.webp
1587-a-year-of-no-significance.webp
letters-from-a-stoic.webp
reinforcement-learning-an-introduction.webp
human-compatible.webp
understanding-media.webp
against-the-gods.webp
common-stocks-and-uncommon-profits.webp
the-great-transformation.webp
the-guns-of-august.webp
postwar.webp
the-design-of-everyday-things.webp
crossing-the-chasm.webp
amusing-ourselves-to-death.webp
the-information.webp
manias-panics-and-crashes.webp
the-most-important-thing.webp
reminiscences-of-a-stock-operator.webp
why-nations-fail.webp
the-end-of-history.webp
only-the-paranoid-survive.webp
thinking-in-systems.webp
the-crowd.webp
life-3-0.webp
margin-of-safety.webp
irrational-exuberance.webp
free-to-choose.webp
capital-in-the-twenty-first-century.webp
this-time-is-different.webp
the-worldly-philosophers.webp
world-order.webp
flow.webp
the-alignment-problem.webp
the-innovators.webp
the-ascent-of-money.webp
one-up-on-wall-street.webp
the-outsiders.webp
zero-to-one.webp
good-to-great.webp
superforecasting.webp
ai-superpowers.webp
extraordinary-popular-delusions.webp
when-genius-failed.webp
noise.webp
the-master-algorithm.webp
surely-youre-joking-mr-feynman.webp
the-big-short.webp
poor-economics.webp
misbehaving.webp
the-silk-roads.webp
the-age-of-ai.webp
the-second-machine-age.webp
the-hard-thing-about-hard-things.webp
what-are-you-doing-with-your-life.webp
predictably-irrational.webp
mindset.webp
ai-2041.webp
structures-or-why-things-dont-fall-down.webp
the-psychology-of-money.webp
the-battle-for-investment-survival.webp
genius-makers.webp
the-little-book-that-beats-the-market.webp
100-baggers.webp
```
