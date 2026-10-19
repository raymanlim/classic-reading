export const article = {
  slug: 'the-evidence-that-isnt-there',
  title_zh: '沉默的证据：为什么我们总是从幸存者身上学习，然后学错',
  title_en: "The Evidence That Isn't There: Why We Learn from Survivors and Learn Wrong",
  subtitle_zh:
    '所有关于成功的方法论，都建立在一批被结果筛选过的样本上。问题不在于我们看不见失败者，而在于我们常常不知道「看不见」这件事本身已经是一次筛选——于是把幸存者的特征当成了原因',
  subtitle_en:
    'Every methodology of success rests on a sample that has already been filtered by the outcome. The problem is not that we cannot see the failures, but that we rarely notice the filtering itself — and so mistake the traits of survivors for causes',
  category: 'business',
  tags: ['decision-making', 'uncertainty', 'risk', 'investing', 'psychology'],
  related_books: [
    'fooled-by-randomness',
    'the-black-swan',
    'good-to-great',
    'the-outsiders',
    '100-baggers',
    'the-psychology-of-money',
  ],
  related_topics: ['decision-making', 'uncertainty', 'investing'],
  publish_date: '2026-10-19',
  lang: 'both',
  content_zh: `## 一、返航的飞机

1943 年，哥伦比亚大学的统计研究组（Statistical Research Group）接到一项很具体的任务：给轰炸机加装甲。装甲有重量，只能装在关键部位，问题是装在哪。

军方带来了一份很干净的数据：返航飞机上的弹孔分布。机翼最多，机身中段次之，发动机和油箱附近最少。按这份数据的指引，最该加固的显然是弹孔最密的地方。

沃德（Abraham Wald）给出了相反的结论：应该加固弹孔最少的地方——发动机、油箱、驾驶舱。

理由只有一句：**你看到的只是回来的飞机。** 在发动机上中弹的飞机没有回来，所以它们的弹孔从未被记录。返航飞机上弹孔稀少的部位，不是因为那里不容易中弹，而是因为在那里中弹的飞机已经不在这一页表上了。沃德为此写了一份正式报告（《A Method of Estimating Plane Vulnerability Based on Damage of Survivors》，统计研究组，1943 年，编号 CRC 432，后由海军分析中心于 1980 年重印）。

这个故事在管理培训里被讲了无数遍，通常被讲成「逆向思维」的范例。这个讲法恰好丢掉了最重要的部分。沃德做的不是灵机一动，而是一件更笨也更硬的事：他建立了一个估计模型，用可见的损伤分布去反推不可见的生存函数。**他不是猜到了答案，他是把「缺失」本身当成了数据来建模。**

这是本文要处理的问题：当我们从经验中学习时，那些没有进入样本的东西，究竟带走了什么；以及，在什么条件下我们仍然可以从残缺的样本里学到真东西。

## 二、删失有三种，只有一种能被统计处理

统计学给这类问题起了名字：删失（censoring）。它指的不是数据有错，而是某些观测因为某种原因根本没有被记录下来。关键在于，删失分两类，性质完全不同。

第一类是**随机删失**。一项为期五年的临床试验，有的病人第三年搬走了，此后失访。只要失访与病情本身无关，这类缺失是可以被处理的——生存分析里的 Kaplan-Meier 估计就是为此设计的，它把「不知道后来怎样」的人按已知的存活时间计入风险集，而不是简单删掉。随机删失损失的是精度，不是有效性。

第二类是**信息性删失**：缺失的概率本身取决于结果。基金清盘、公司退市、创业者转行、门店关门——它们从数据库里消失，而消失的原因恰恰是表现差。这时候删掉它们，不是减少样本，而是**系统性地删掉了分布的下半段**。任何在这个剩余样本上算出的均值、增长率、存活率，都是被抬高的。

还有第三种，最容易被忽略：**在场但沉默**。客户没有投诉不等于满意，员工没有反对不等于同意，读者没有反馈不等于读懂了。这一类删失不留痕迹，因为被删掉的人还在你的样本里，只是他们的信息从未被采集。

三者合起来指向同一个枢纽，也是本文全部论证的支点：

**缺失本身不是问题，缺失与结果相关才是问题。**

一个样本残缺到什么程度并不要紧，要紧的是「谁不见了」和「为什么不见」这两件事，是否与你要解释的那个结果纠缠在一起。如果是，那么样本规模再大也无济于事——你不是样本太小，你是样本被结果挑选过。

## 三、为什么幸存者的故事特别有说服力

如果幸存者偏差只是一道统计题，它不会如此顽固。它顽固，是因为它同时得到了三种认知力量的支援。

**第一是叙事完整性。** 成功者有完整的故事：起点、转折、决策、结果。失败者只有断裂——公司没了，当事人不愿谈，档案散了。故事越完整，越像解释；而断裂的部分不构成故事，也就不进入讨论。于是我们讨论的从来不是「全部案例」，而是「有故事的案例」。

**第二是可得性。** 可见的样本占据注意力，而注意力是稀缺的。这一点在信息过剩的环境里反而加剧：能被讲述的成功被反复讲述，不能被讲述的失败连一次讲述的机会都没有。

**第三层更隐蔽：幸存者叙事自带因果外观。** 因为它成功了，所以它的每一个特征都被读成原因。罗森茨维格（Phil Rosenzweig）在《光环效应》里把这类研究的错误归成三种：依赖二手报道因而充满光环、把因果方向弄反（公司先成功，才有余裕去「专注」，而不是因为专注才成功）、以及把相关当成因果的「组织物理学」。

柯林斯的《从优秀到卓越》是检验这三点的好样本。它出版于 2001 年，研究区间是 1965 至 1995 年，选出 11 家「实现跃迁」的公司，并为每家配了一家同行业、面临相似机会却未能跃迁的对照公司。这份设计比大多数同类著作认真得多——它确实做了对照。但问题出在更前面：**「卓越」是按结果定义的。** 先按股价表现挑出赢家，再回头找它们的共同点，共同点必然存在，这是逻辑必然，不是发现。这就是事后分层。

芝加哥大学的史蒂文·莱维特（Steven D. Levitt）做过一个直接的检验：如果在 2001 年按这本书的名单建一个组合，它会跑输标普 500 指数；11 家公司里只有纽柯（Nucor）大幅跑赢，雅培与富国银行表现尚可。而名单上的电路城（Circuit City）在 2008 年申请破产保护、次年清盘，房利美（Fannie Mae）在 2008 年 9 月被政府接管。

这不是说研究不诚实。这是说：**当样本按结果选取时，方法论上的严谨也无法补救结论的时效性**——你描述的是「曾经卓越过的一组公司」，读者收到的却是「卓越的配方」。

对照之下，《商界局外人》研究八位 CEO 时用的是同期同行业的对照 CEO，并且用每股价值而不是营收规模来衡量，这在设计上就避开了「按结果划线」。而《百倍股》研究历史上涨过一百倍的股票，问题不在于研究不认真，而在于「一百倍」这个门槛本身就是结果——按定义，只有活到那一天的公司才在名单上。

## 四、反方：删失并不总是致命的

如果论证停在这里，结论会是「一切成功学都不可信」。这个结论太强，而且错。至少有三条有力的反驳。

**第一，沃德本人就是反例。** 他用的全部数据都来自幸存者，却得出了正确结论。这说明信息性删失并非不可逾越——只要你把缺失机制写进模型，用可见部分的形状去反推不可见部分的形状。这是可以被数学化的工作，不是玄学。真正致命的不是删失，是**不知道自己在删失**。

**第二，随机删失完全可以处理。** 临床试验、设备寿命、保险赔付，这些领域每天都在和数据缺失打交道，靠的不是追求完整，而是明确假设缺失与结果独立，然后在这个假设下估计。缺数据是可以的，缺假设不行。

**第三，向成功者学习有独立价值。** 它证明可行解存在。你不需要知道所有失败的原因，才知道某条路走得通；你只需要一个反例就足以否定「不可能」，而一个正例就足以否定「不可行」。这是存在性论证，它比因果论证弱，但它便宜、可靠，而且往往正是决策当下唯一能拿到的东西。如果要求「必须有完整样本才能学习」，结果是学习瘫痪——而在历史、军事、创业这些失败样本根本无从获取的领域，拒绝学习比学错更糟。

所以辩护是成立的，但它有前提：**这些辩护全部依赖「缺失机制可以被显式说明」。** 一旦缺失机制不明、且与结果相关，从幸存者出发的任何因果断言都不成立。反方赢的是「不必绝望」，不是「可以随便归纳」。

## 五、判断：三个判据

据此可以给出一组可操作的判据。读任何一本成功学、管理书、投资书，或者复盘自己的一次判断，先问三件事。

**一、缺失是否与结果相关。** 如果消失的原因正是你要解释的那个结果——业绩差所以清盘、亏损所以退赛、失败所以不写回忆录——那么样本就是被结果筛选过的。这时候你算出的任何比率都只是幸存者的比率。

**二、有没有独立的失败样本。** 注意措辞：不是「有没有失败者」，而是「失败者的数据是否以同样的方式被采集」。事后在记忆里找几个反例不算，因为能被想起来的反例同样经过了一次筛选。这一步必须靠设计，不能靠回忆。

**三、你的结论是存在性还是因果性。** 「有人这样做并且成功了」是存在性断言，弱，但通常安全。「因为这样做所以成功」是因果断言，强，但需要对照、需要排除、需要时间。把前者说成后者，是绝大多数商业叙事的失真方式。

三个判据都过，你得到的也只是「在某个已经消失的世界里成立的相关性」。这不是悲观，这是准确的成本核算：**幸存者偏差不是一种可以被彻底消除的偏差，它是从有限经验中学习的结构性代价。**

真正可做的不是假装已经校正过，而是据此调整结论的强度——把「这样做会成功」降级为「这样做曾经成功过，样本被结果筛选，且失败者无从查证」。这个句子读起来远不如前者有力量，但它包含的信息更多，而且它是真的。

谦逊在这里不是一种态度，而是一种技术：承认你的样本是被挑选过的，然后让结论的强度与样本的强度匹配。做不到这一点，学得越多，错得越整齐。`,
  content_en: `## 1. The Planes That Came Back

In 1943 the Statistical Research Group at Columbia University was handed a very concrete problem: add armour to bombers. Armour is heavy, so it can only go on the parts that matter. Which parts?

The military brought clean data: the distribution of bullet holes on aircraft that had returned. Most on the wings, fewer along the fuselage, very few near the engines and fuel tanks. Read straight off the table, the answer was obvious — reinforce where the holes are densest.

Abraham Wald concluded the opposite: reinforce where the holes are scarcest — engines, fuel tanks, cockpit.

His reasoning was a single sentence long: **you are only looking at the planes that came back.** A bomber hit in the engine did not return, so its holes were never recorded. The sparsely punctured areas on surviving aircraft were not areas where hits were unlikely; they were areas where a hit removed the aircraft from the page. Wald wrote this up formally ("A Method of Estimating Plane Vulnerability Based on Damage of Survivors," Statistical Research Group, 1943, CRC 432, reprinted by the Center for Naval Analyses in 1980).

The story is retold in management training constantly, usually as an example of "thinking outside the box." That retelling discards the part that matters. Wald did not have a clever intuition. He did something slower and harder: he built an estimation model that used the visible damage distribution to infer the invisible survival function. **He did not guess the answer; he treated the absence itself as data and modelled it.**

That is the question this essay takes up: when we learn from experience, what exactly do the observations that never entered the sample take away with them — and under what conditions can we still learn something true from a broken sample?

## 2. Three Kinds of Censoring, Only One of Which Is Tractable

Statistics has a name for this: censoring. It does not mean the data are wrong. It means some observations were never recorded, for a reason. The reason matters, because there are two fundamentally different kinds.

The first is **random censoring**. In a five-year clinical trial, some patients move away in year three and are lost to follow-up. Provided the loss is unrelated to the disease, this is manageable: Kaplan-Meier estimation, for instance, keeps such patients in the risk set for as long as they were known to be alive rather than simply deleting them. Random censoring costs precision, not validity.

The second is **informative censoring**: the probability of being missing depends on the outcome. Funds close, companies delist, founders quit, stores shut — they vanish from the database, and the reason they vanish is that they did badly. Deleting them does not shrink the sample; it **systematically removes the lower half of the distribution**. Every mean, growth rate and survival rate computed on what remains is inflated.

There is a third kind, easiest to miss: **present but silent**. A customer who does not complain is not a satisfied customer. An employee who does not object has not agreed. A reader who gives no feedback has not understood. This kind leaves no trace at all, because the missing observations are still inside your sample — their information was simply never collected.

All three point at the same hinge, and this is the load-bearing claim of the whole argument:

**Missingness is not the problem. Missingness correlated with the outcome is the problem.**

How incomplete a sample is matters far less than whether *who disappeared* and *why they disappeared* are entangled with the outcome you want to explain. If they are, a larger sample will not save you. You do not have a small sample. You have a sample that the outcome selected.

## 3. Why Survivor Stories Are So Persuasive

If survivorship bias were merely a statistical nuisance, it would not be this stubborn. It is stubborn because three cognitive forces reinforce it at once.

**The first is narrative completeness.** Survivors come with a full story: a beginning, a turning point, decisions, results. Failures come as fragments — the company is gone, the people do not want to talk, the records are scattered. The more complete the story, the more it resembles an explanation; the fragments do not form a story, so they never enter the discussion. What we discuss is therefore never "all cases" but "cases that have a story."

**The second is availability.** Visible cases capture attention, and attention is scarce. In an information-rich environment this gets worse rather than better: the successes that can be told are told repeatedly, while the failures that cannot be told never get a first telling.

**The third layer is subtler: survivor narratives arrive with the appearance of causality.** Because it succeeded, every one of its features is read as a cause. Phil Rosenzweig, in *The Halo Effect*, sorts the errors of this literature into three families: reliance on secondhand accounts, which imports the halo; reversed causality (the company succeeded first and thereby earned the luxury of focus, rather than focusing its way to success); and "organizational physics," the habit of treating correlation as causation.

Jim Collins's *Good to Great* is a good specimen for testing all three. Published in 2001, covering 1965 to 1995, it selects eleven companies that made the leap and pairs each with a comparison company in the same industry facing similar opportunities that did not. That design is far more careful than most books of its kind — it genuinely does compare. But the trouble sits further upstream: **"great" is defined by the outcome.** You first pick the winners by stock performance, then go looking for what they share. The shared traits are guaranteed to exist. That is a logical necessity, not a finding. It is post-hoc stratification.

Steven D. Levitt of the University of Chicago ran a direct test: a portfolio built from that list in 2001, the year of publication, would have underperformed the S&P 500. Of the eleven, only Nucor substantially beat the market; Abbott and Wells Fargo did acceptably. Circuit City, on the list, filed for bankruptcy protection in 2008 and liquidated the following year; Fannie Mae was taken into government conservatorship in September 2008.

This is not an accusation of dishonesty. It is a demonstration that **when the sample is selected by the outcome, methodological rigour cannot repair the shelf life of the conclusion.** The book describes a set of companies that were once great. The reader receives a recipe for greatness.

By contrast, *The Outsiders* studies eight chief executives against contemporaneous peers in the same industries and measures per-share value rather than revenue size — a design that dodges outcome-based selection at the outset. *100 Baggers* studies stocks that returned a hundredfold, and its difficulty is not carelessness: the hundredfold threshold *is* the outcome. By definition, only companies that lived to that day are on the list.

## 4. The Counterargument: Censoring Is Not Always Fatal

Stop here and the conclusion would be "no book about success can be trusted." That conclusion is too strong, and it is wrong. At least three objections have real force.

**First, Wald is himself the counterexample.** Every observation he used came from survivors, and he reached the correct conclusion. Informative censoring is therefore not impassable — provided you write the missingness mechanism into the model and infer the shape of the unseen from the shape of the seen. That is mathematisable work, not mysticism. What is fatal is not censoring but **not knowing that you are censoring**.

**Second, random censoring is entirely tractable.** Clinical trials, equipment lifetimes, insurance claims — these fields deal with missing data daily, and they do it not by demanding completeness but by stating the assumption that missingness is independent of the outcome, then estimating under it. Missing data is acceptable. Missing assumptions are not.

**Third, learning from survivors has independent value.** It establishes that a feasible solution exists. You do not need to know why every attempt failed in order to know that a path can be walked; one counterexample kills "impossible," and one positive case kills "unworkable." This is an existence claim — weaker than a causal claim, but cheap, robust, and often the only thing available at the moment of decision. Demanding a complete sample before learning anything produces paralysis — and in history, war and entrepreneurship, where failure data are often unobtainable in principle, refusing to learn is worse than learning badly.

So the defence holds, but it has a precondition: **all three objections depend on the missingness mechanism being explicitly statable.** The moment the mechanism is unknown and correlated with the outcome, no causal claim built on survivors survives. What the counterargument wins is "do not despair," not "anything goes."

## 5. A Judgement: Three Tests

From this, three operational tests follow. Applied to any book about success, any management framework, or your own post-mortem on a decision.

**One: is the missingness correlated with the outcome?** If the reason for disappearance is the very result you want to explain — poor performance so the fund closed, losses so the trader quit, failure so no memoir was written — then the sample was selected by the outcome, and every rate you compute is a rate among survivors.

**Two: is there an independent failure sample?** Note the wording. Not "are there failures," but "were the failures' data collected the same way." Recalling a few counterexamples afterwards does not count, because the counterexamples you can recall have themselves been filtered. This step requires design, not memory.

**Three: is your claim existential or causal?** "Someone did this and succeeded" is an existence claim: weak, usually safe. "Because they did this, they succeeded" is a causal claim: strong, and it requires a comparison, an exclusion, and time. Presenting the first as the second is how most business narrative goes wrong.

Pass all three and what you hold is still only a correlation that held in a world which no longer exists. That is not pessimism; it is accurate cost accounting. **Survivorship bias is not a bias that can be eliminated. It is the structural price of learning from finite experience.**

The workable response is not to pretend the correction has been made, but to adjust the strength of the conclusion accordingly — to downgrade "this will work" into "this once worked, in a sample selected by the outcome, with the failures unverifiable." That sentence is far less forceful than the first. It also carries more information, and it is true.

Humility here is not a temperament. It is a technique: acknowledge that your sample was chosen, then make the strength of your claim match the strength of the sample. Fail at that, and the more you learn, the more uniformly wrong you become.`,
};
