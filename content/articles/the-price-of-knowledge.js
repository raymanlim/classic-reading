export const article = {
  slug: 'the-price-of-knowledge',
  title_zh: '知识的价格：为什么最有用的东西最难被付钱',
  title_en: 'The Price of Knowledge: Why the Most Useful Things Are the Hardest to Pay For',
  subtitle_zh:
    '观念一旦说出口就无法收回，可它的生产成本极高。杰斐逊的蜡烛、英国半个世纪的机器禁令、OpenSSL 的两千美元，指向同一个结构性难题：非竞争性的商品，没有任何一种定价机制能同时解决生产、扩散与维护',
  subtitle_en:
    "An idea cannot be taken back once spoken, yet it is expensive to produce. Jefferson's candle, Britain's half-century machine embargo and OpenSSL's two thousand dollars all point to one structural problem: for non-rival goods, no pricing mechanism can solve production, diffusion and maintenance at once",
  category: 'economics',
  tags: ['economics', 'innovation', 'technology', 'institutions', 'capitalism'],
  related_books: [
    'empire-of-cotton',
    'capitalism-socialism-and-democracy',
    'the-idea-factory',
    'poor-economics',
    'chip-war',
    'the-wealth-of-nations',
  ],
  related_topics: ['markets', 'innovation', 'technology'],
  publish_date: '2026-10-20',
  lang: 'both',
  content_zh: `## 一、一支蜡烛

1813 年 8 月，托马斯·杰斐逊在蒙蒂塞洛写给出版商艾萨克·麦克弗森（Isaac McPherson）一封长信，讨论的是「观念能否成为财产」。信里有一段后来被反复引用的话：

> 谁从我这里接受一个观念，他自己就得到了教益，而我的并没有减少；正如谁用我的蜡烛点燃他的蜡烛，他得到光，而我没有变暗。

这句话常被当作「知识应当免费」的宣言。但它所在的那封信，处理的是一个更窄的问题：专利制度该不该存在，如果存在，边界在哪里。而写信的人，此时已经做过四年国务卿——按 1790 年美国第一部专利法，国务卿与陆军部长、司法部长共同组成三人审查委员会，他本人就是最初的专利审查者之一。

这个位置上的张力，正是本文要处理的问题。写下「观念在自然上不能成为财产的对象」的人，同时是第一批给人颁发排他权的人。这不是伪善，而是他撞上了一个结构性的难题：**观念这种商品的物理属性，与任何一种定价机制都不兼容。**

## 二、没有正确价格的东西

经济学给这类商品的名字是「非竞争性」（non-rivalrous）：一个人使用它，不减少另一个人可使用的量。面包是竞争性的，我吃了你就不能吃；疫苗的生产工艺不是，我知道了你仍然可以知道。

非竞争性带来一个直接推论：**它的边际成本接近零。** 多印一份说明书、多复制一份代码、多教一个学生，几乎不增加成本。而效率要求价格等于边际成本。所以效率要求价格为零。

但它的**固定成本极高**。发现一条物理定律可能耗尽一个人二十年，开发一个新药通常需要十年以上与数亿美元。这笔钱必须从某处收回。

于是出现一个在任何标准的价格理论里都没有解的局面：**效率要求的价格（零）与回收成本要求的价格（大于零）之间没有折中点。** 这不是「市场不够完善」，也不是「监管不到位」。它是商品属性与定价机制之间的类型不匹配。任何制度都只能在这个矛盾的两侧选一个位置站住，然后承担那个位置的全部后果。

这也解释了为什么关于知识产权的一百多年争论始终无法收敛：争论双方往往在讨论「应不应该有价格」，而真正没有答案的问题是「价格该落在哪一段」。

## 三、三条出路，以及它们各自的账单

历史上试过的方案只有三类，每一类都不是免费的。

**第一类：制造排他。** 专利、版权、商业秘密。用法律或技术手段让知识重新变得「竞争性」——你可以知道，但不能合法使用。

代价很清楚。价格高于边际成本，使用者必然少于社会最优，这部分损失（死重损失）是制度的固定开销。更麻烦的是它改变了创新的**方向**：只有可被权利要求书描述的东西才值得投资，而最难描述的部分——工艺诀窍、失败经验、调试直觉——恰好落在保护范围之外。专利丛林与策略性专利是这套激励的成熟形态：申请不是为了使用，而是为了阻断。

**第二类：公共资助。** 税收、基金会、大学、国家实验室。

代价是把「什么值得研究」变成一个政治或行政判断。这个判断有一个已知的弱点：它偏向可短期展示的成果。贝尔实验室是一个著名反例，但它的钱来自一家受管制垄断企业的稳定收入，而不是来自每年的竞争性评审——这个条件后来没有再出现过。

**第三类：声誉与互惠。** 学术优先权、开源社区、同行的承认。

代价是它只奖励**可署名**的工作。写出一段代码有署名，维护它十年没有。发表一篇论文有署名，复现它没有。这条出路在「生产」上极其有效，在「维护」上系统性失效。

三条路各有各的账，没有一条能覆盖全部。这不是因为设计者不够聪明，而是因为三件事本身冲突：生产要求排他，扩散要求开放，维护要求稳定——而排他会阻碍扩散，开放会消解稳定的收入来源。

## 四、封锁的物理上限

第一类出路有一个物理上限，18 世纪的英国撞上过。

当时英国是全球唯一掌握机械化棉纺技术的国家。为保住这个位置，议会通过一系列法律：禁止纺织机械与图纸出口，禁止熟练纺织工匠移民。这些限制不是一纸空文——针对工匠的禁令延续到 1820 年代，针对机械的出口禁令直到 1842 年才完全废除。

结果是一个名叫塞缪尔·斯莱特（Samuel Slater）的英国纺织厂监工，在 1789 年伪装成普通劳工移民美国。他没有带任何图纸——他把阿克莱特水力纺纱机的构造记在了脑子里。1790 年 12 月，他在罗德岛帕塔基特的布莱克斯通河畔让机器转了起来。英国人后来给他起了个绰号：「叛徒斯莱特」。

这件事的教训不是「封锁无效」。封锁确实买到了时间：据 Irwin 与 Temin 的估计，直到 1807 年，新英格兰生产的布匹总值仍只有从英国进口的约 8%。半个世纪的禁令，换来的是半个世纪的领先。

真正的教训更精确：**排他的强度取决于知识的载体形态。** 图纸可以被海关拦下，机器可以被扣押，但知识一旦存在于人脑中，排他就是在与人的流动性对抗。而人的流动性没有海关能完全控制。只要载体是「可以被带走的人」，「禁止扩散」就只是一项延缓措施，不是一项产权。

《棉花帝国》记录的正是这条封锁线如何被反复穿越：技术、工匠与资本沿着大西洋来回移动，每一次移动都让禁令的边际效力下降一点。英国真正失去优势，不是因为某一道禁令被废除，而是因为知识的载体从「机器」变成了「人」，再从「人」变成了「可复制的文本」。

## 五、反方：开放也会失败

如果排他有物理上限，那么完全开放应该解决问题。它没有。

2014 年 4 月 7 日，OpenSSL 的一个缓冲区溢出漏洞被公开，代号「心脏出血」（Heartbleed）。当时全球经认证的安全 Web 服务器中，约 17%、接近五十万台受影响——包括大量银行、电商与政府站点。

而在这一天之前，OpenSSL 项目每年的捐款大约是两千美元。整个项目只有一名全职开发者，年薪约两万美元。Linux 基金会随后仓促成立核心基础设施计划（Core Infrastructure Initiative），十三家公司各承诺每年十万美元、连续三年。

这个案例的精确之处在于：**它不是没人生产，而是没人维护。** 生产有声誉回报——写出来就署名；维护没有。而维护恰恰是安全性的全部来源。当一件非竞争性商品同时是非排他的（即公共品），经典结论是「供给不足」，但真实的失效机制更窄也更难看见：**可见的部分有人做，不可见的部分没人付钱。**

还有一层更细的：排他不仅影响创新的**数量**，更影响**方向**。莫泽（Petra Moser）2005 年发表在《美国经济评论》的论文，用 1851 年伦敦与 1876 年费城世博会的展品数据做了一次检验。结论不是「没有专利就没有创新」——没有专利法的国家，创新数量并没有明显减少。结论是：那些国家的创新集中在专利不重要的少数行业里，而实行专利法的国家，创新分布明显更分散。

这个结果比「专利有用」或「专利无用」都更有意思。它说的是：专利制度的主要作用不是提高创新总量，而是**改变创新的构成**——它把资源推向那些「可被描述、可被主张、可被许可」的方向。这个作用既可能是收益，也可能是扭曲，取决于你认为哪些方向更值得。

最后一条反例来自抗生素。世界卫生组织 2025 年的一项分析显示，处于临床开发阶段的抗生素数量从 2023 年的 97 个降至 90 个。原因不是技术难度，而是商业结构：一种好的新抗生素应当**尽量少用**，只在其他药物失效时使用；而药品的研发回收依赖销量。疗效与收入在这类商品上方向相反。市场定价在这里不是失灵，而是**正确地执行了一个错误的目标函数**。

## 六、判断：判据在维护，不在获取

把上面几条放在一起，会得到一个不太令人满意但更诚实的结论：**没有一种制度能同时解决生产、扩散与维护三件事。**

所以真正可操作的问题不是「知识该不该有价格」，而是三个更窄的判据。

**第一，排他期限是否匹配投资回收周期。** 专利保护期自申请日起二十年，而新药从发现到上市常需十年以上——留给回收的时间被压缩到不足一半。保护期是否够长，不能按「发明的价值」判断，只能按「这笔钱需要多久才能收回来」判断。熊彼特在《资本主义、社会主义与民主》里把垄断利润看作创新的燃料，这个判断在「回收周期」这个尺度上是对的；但燃料的量必须与路程匹配，过多与过少都是浪费。

**第二，商品是否存在「用得越多越危险」的属性。** 抗生素、抗药性、某些安全技术属于这一类。对它们，定价必须与销量脱钩：订阅制、里程碑奖金、把许可费与销售量分离的安排（业内称为 delinkage），都是同一逻辑的不同形式。《贫穷的本质》讨论疫苗与药物在贫困地区的定价时，触及的其实是同一个结构——当支付能力与需求方向相反，价格就不再是信息，而是障碍。

**第三，维护成本是否可见。** OpenSSL 的教训不是「开源不好」，而是**没有署名的地方就没有预算**。基础库、测试、文档、复现——这些工作不产生叙事，因此在任何评审体系里都排在最后。把它们写进预算科目，比呼吁「重视基础设施」有用得多。

三条判据之外，必须说清限度。

第一，基础科学的开放是**道德要求**，不是效率选择。用效率语言为它辩护反而危险：一旦进入效率计算，它会在很多场景里输给应用研究。它的正当性在于「任何人都无权把世界的说明书锁起来」，而不在于它更划算。

第二，「知识应当免费」与「知识生产者应当免费劳动」是两件不同的事。把它们混为一谈，开放就会变成对少数人的隐性征税——被征税的往往是那些最没有议价能力的人。

第三，不是所有知识都该开放。病原体增强实验的细节、可被直接利用的攻击代码，属于「扩散本身就是伤害」的类别。承认这一点不会推翻前面的论证，只是给它加一个边界条件。

回到那支蜡烛。杰斐逊的比喻是对的：光不会因为被分享而减少。但他漏掉了比喻之外的一件事——**蜡烛本身会烧完，而没有人靠「光应当免费」这句话去种蜡。** 真正需要被付费的，从来不是那束光，是那根蜡烛，以及守着它不让它熄灭的人。`,
  content_en: `## 1. A Candle

In August 1813, Thomas Jefferson wrote a long letter from Monticello to the publisher Isaac McPherson about whether an idea can be property. One passage has been quoted ever since:

> He who receives an idea from me, receives instruction himself without lessening mine; as he who lights his taper at mine, receives light without darkening me.

The line is usually read as a manifesto for free knowledge. But the letter it sits in addresses a narrower question: whether patents should exist at all, and if so, where their boundary should fall. And the man writing it had already served four years as Secretary of State — under the Patent Act of 1790, the Secretary of State sat with the Secretary of War and the Attorney General on a three-member examination board. He was one of the first patent examiners in the United States.

That tension is the subject of this essay. The person who wrote that ideas cannot in nature be a subject of property was also among the first to grant others a legal monopoly over them. This is not hypocrisy; it is a collision with a structural problem: **the physical properties of an idea as a commodity are incompatible with every pricing mechanism we have.**

## 2. The Thing Without a Correct Price

Economics calls such goods non-rivalrous: one person's use does not reduce what another can use. Bread is rivalrous — if I eat it, you cannot. A vaccine's manufacturing process is not: if I know it, you can still know it.

Non-rivalry yields an immediate corollary: **its marginal cost is approximately zero.** One more copy of a manual, one more clone of a repository, one more student in a lecture adds almost nothing to cost. Efficiency requires price to equal marginal cost. Efficiency therefore requires the price to be zero.

But its **fixed cost is enormous.** A physical law may consume twenty years of one person's life; a new drug typically requires more than a decade and hundreds of millions of dollars. That money has to be recovered from somewhere.

The result is a situation that has no solution in any standard price theory: **between the price efficiency demands (zero) and the price cost recovery demands (greater than zero), there is no midpoint.** This is not an imperfect market, nor a failure of regulation. It is a category mismatch between the nature of the good and the logic of pricing. Every institution must pick a position on one side of that contradiction and then carry the full consequences of that position.

This also explains why a century of argument over intellectual property never converges: both sides usually debate whether there should be a price, while the question with no answer is where along the range the price should fall.

## 3. Three Ways Out, and What Each Costs

History has produced only three families of solutions, and none is free.

**The first: manufacture exclusion.** Patents, copyright, trade secrets. Use law or technology to make knowledge rivalrous again — you may know it, but you may not lawfully use it.

The cost is plain. When price exceeds marginal cost, use falls below the social optimum, and that deadweight loss is the fixed overhead of the institution. The deeper problem is that it bends the **direction** of innovation: only what can be described in a claim is worth investing in, while the hardest parts — process know-how, records of failure, the intuition of debugging — fall outside protection by construction. Patent thickets and strategic filings are the mature form of this incentive: filing not to use, but to block.

**The second: public funding.** Taxation, foundations, universities, national laboratories.

The cost is that "what deserves study" becomes a political or administrative judgment, and that judgment has a known weakness: it favours results that can be displayed quickly. Bell Labs is the famous counterexample, but its money came from the stable revenue of a regulated monopoly rather than from annual competitive review — a condition that has not recurred.

**The third: reputation and reciprocity.** Scientific priority, open-source communities, the recognition of peers.

The cost is that it rewards only work that can be **signed**. Writing a piece of code earns an attribution; maintaining it for ten years earns none. Publishing a paper earns an attribution; reproducing it earns none. This route is extraordinarily effective at production and systematically useless at maintenance.

Each route has its own bill, and none covers the whole. Not because the designers were uncreative, but because the three requirements genuinely conflict: production demands exclusion, diffusion demands openness, maintenance demands stable revenue — and exclusion obstructs diffusion while openness dissolves the revenue that maintenance needs.

## 4. The Physical Ceiling of Exclusion

The first route has a physical ceiling, and eighteenth-century Britain hit it.

Britain was then the only country with mechanised cotton spinning. To hold that position, Parliament passed a series of statutes: no export of textile machinery or drawings, no emigration of skilled textile workers. These were not decorative. Restrictions on artisans persisted into the 1820s; the machinery export ban was not fully repealed until 1842.

The result was Samuel Slater, an English mill overseer, who sailed for America in 1789 disguised as an ordinary labourer. He carried no drawings. He had committed the construction of Arkwright's water frame to memory. In December 1790, on the Blackstone River at Pawtucket, Rhode Island, he got the machines running. The English later called him "Slater the traitor."

The lesson is not that embargoes fail. They bought time: by the estimate of Irwin and Temin, as late as 1807 the total value of cloth produced in New England was still only about eight per cent of the value imported from Britain. Half a century of prohibition purchased half a century of lead.

The precise lesson is this: **the strength of exclusion depends on the carrier of the knowledge.** Drawings can be stopped at customs; machines can be seized. But once knowledge resides in a human head, exclusion is a contest against human mobility, and no customs service has ever fully controlled that. As long as the carrier is a person who can walk away, prohibiting diffusion is a delaying tactic, not a property right.

*Empire of Cotton* traces exactly how that line was crossed repeatedly: technology, artisans and capital moved back and forth across the Atlantic, and each crossing lowered the marginal effectiveness of the ban. Britain lost its advantage not when a particular statute was repealed, but when the carrier of knowledge shifted from machine to person, and then from person to reproducible text.

## 5. The Counter-Case: Openness Fails Too

If exclusion has a physical ceiling, full openness should solve the problem. It does not.

On 7 April 2014, a buffer overflow in OpenSSL was disclosed under the name Heartbleed. Roughly seventeen per cent of the internet's certified secure web servers — close to half a million — were believed vulnerable, including banks, retailers and government sites.

Before that day, the OpenSSL project received about two thousand dollars a year in donations. It had one full-time developer, earning around twenty thousand dollars a year. The Linux Foundation then hastily created the Core Infrastructure Initiative; thirteen companies each pledged one hundred thousand dollars annually for three years.

What makes the case precise is this: **the failure was not in production but in maintenance.** Production earns reputation — write it and your name is on it. Maintenance earns nothing. And maintenance is the entire source of security. When a non-rival good is also non-excludable — a public good — the textbook conclusion is underprovision. The actual mechanism is narrower and harder to see: **the visible parts get built, the invisible parts go unpaid.**

There is a subtler layer still: exclusion changes not the **quantity** of innovation but its **composition**. Petra Moser's 2005 paper in the *American Economic Review* tested this using exhibit data from the 1851 London and 1876 Philadelphia world's fairs. The finding was not that innovation requires patents — countries without patent laws showed no clear decline in the number of innovations. It was that those countries concentrated their innovation in a small set of industries where patents mattered little, while countries with patent laws showed a markedly more diversified distribution.

That result is more interesting than either "patents work" or "patents are useless." It says the primary effect of the patent system is to **change the composition of innovation** — to push resources toward whatever can be described, claimed and licensed. Whether that is a benefit or a distortion depends on which directions you think matter more.

A final counter-case comes from antibiotics. A 2025 World Health Organization analysis found that the number of antibiotics in clinical development had fallen from 97 in 2023 to 90. The cause is not technical difficulty but commercial structure: a good new antibiotic should be used **as little as possible**, held in reserve until other drugs fail, while pharmaceutical recovery depends on volume. For this class of goods, efficacy and revenue point in opposite directions. Market pricing here is not malfunctioning; it is **correctly executing the wrong objective function.**

## 6. The Criterion Is Maintenance, Not Access

Put these together and the conclusion is unsatisfying but more honest: **no single institution can solve production, diffusion and maintenance at the same time.**

The operable question, then, is not whether knowledge should have a price, but three narrower criteria.

**First, does the term of exclusion match the payback period?** Patent protection runs twenty years from filing, while a new drug commonly takes more than a decade from discovery to market — leaving less than half the term for recovery. Whether a term is long enough cannot be judged by the value of the invention, only by how long the money needs to come back. Schumpeter, in *Capitalism, Socialism and Democracy*, treated monopoly profit as the fuel of innovation; on the scale of the payback period he was right. But the amount of fuel must match the distance, and too much wastes as surely as too little.

**Second, does the good become more dangerous the more it is used?** Antibiotics, antimicrobial resistance, some safety technologies belong here. For these, price must be decoupled from volume: subscription models, milestone prizes, and arrangements that separate licence fees from sales — what the field calls delinkage — are variants of one logic. *Poor Economics*, in discussing vaccine and drug pricing in poor countries, touches the same structure: when ability to pay runs opposite to need, price stops being information and becomes an obstacle.

**Third, is the cost of maintenance visible?** The lesson of OpenSSL is not that open source is bad, but that **where there is no attribution, there is no budget.** Core libraries, tests, documentation, reproduction — none of it generates narrative, so all of it ranks last in every review process. Putting it into a budget line is worth more than exhorting people to value infrastructure.

Beyond the three criteria, the limits must be stated.

First, openness in basic science is a **moral requirement**, not an efficiency choice. Defending it in the language of efficiency is actively dangerous: once it enters an efficiency calculation, it will lose to applied research in many settings. Its justification is that no one has the right to lock up the instruction manual of the world — not that it pays better.

Second, "knowledge should be free" and "knowledge producers should work for free" are two different claims. Confusing them turns openness into an implicit tax on a few — and the taxed are usually those with the least bargaining power.

Third, not all knowledge should be open. The details of pathogen gain-of-function work, or attack code that can be used directly, belong to the category where diffusion is itself the harm. Admitting this does not overturn the argument; it adds a boundary condition to it.

Return to the candle. Jefferson's metaphor is right: light is not diminished by being shared. But he left out one thing the metaphor cannot carry — **the candle itself burns down, and no one plants wax because someone said light ought to be free.** What has always needed paying for is not the light. It is the candle, and the person keeping it from going out.`,
};
