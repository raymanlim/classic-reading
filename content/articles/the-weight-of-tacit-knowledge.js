export const article = {
  slug: 'the-weight-of-tacit-knowledge',
  title_zh: '隐性知识的重量：为什么流程取代不了手艺',
  title_en: 'The Weight of Tacit Knowledge: Why Process Cannot Replace Craft',
  subtitle_zh: '从贝尔实验室的走廊到芯片产线，最难复制的那部分知识从来不写在手册里',
  subtitle_en: 'From the corridors of Bell Labs to the fab floor, the hardest knowledge to copy is the knowledge nobody wrote down',
  category: 'technology',
  tags: ['innovation', 'technology', 'science', 'organization', 'strategy'],
  related_books: [
    'the-idea-factory',
    'crystal-fire',
    'the-man-behind-the-microchip',
    'structures-or-why-things-dont-fall-down',
    'surely-youre-joking-mr-feynman',
  ],
  related_topics: ['technology', 'innovation', 'cognitive-science'],
  publish_date: '2026-10-06',
  lang: 'both',
  content_zh: `## 一个具体的问题

半导体行业有一个反复出现的现象：一条成熟产线可以被完整地"复制"到另一座城市——同样的设备清单、同样的工艺配方、同样的操作规程，甚至同一批被派过去的工程师。然后良率掉下来，并且往往需要好几年才能追回原来的水平。设备可以照单采购，配方可以逐行抄写，唯独那个"让一切正常运转"的东西，始终不肯跟着文件一起过去。

这个现象值得被当作一个思想问题来处理，而不只是一个产业细节。它问的是：**知识究竟以什么形态存在？** 如果知识是一组可记录、可传输的信息，那么复制一条产线就该等于复制一份文档。事实显然不是。于是我们面对一个更尖锐的问题：在什么条件下知识可以被写下来，在什么条件下写下来就会失真？

这篇文章要论证的结论并不讨喜：**现代组织最常犯的错误，是把可编码的知识误当成知识的全部。** 流程、手册、指标、模型都是真实的成就，但它们覆盖的只是知识中较薄的一层。剩下的那一层——手艺、判断、对异常的敏感——只能通过人与人的长期接触来传递。忽略它，组织的效率会继续上升一段时间，然后在某个意想不到的地方断裂。

## 知识有两种，而只有一种能被写下来

波兰尼（Michael Polanyi）在二十世纪五十年代提出「隐性知识」（tacit knowledge）时，给出的核心表述是：我们知道的比我们能说出来的多。他举的例子很朴素——一个人可以在成千上万张脸中认出朋友的脸，却说不出自己凭什么认得出；一个人可以骑车保持平衡，但支配他身体的并不是关于力矩的方程式。

这个区分之所以重要，是因为它划出了一条边界：知识的一部分是**命题性的**，可以判断真假、可以写进手册、可以考试、可以远程传输、可以被审计；另一部分则是**技能性的**，只能在具体情境中显形，靠模仿与纠正传递，只能判断是否奏效，很难被验证。

J. E. Gordon 在《结构：为什么东西不会倒塌》里反复指出一个落差：材料的理论强度与实际可用的强度相差好几个数量级，而工程师真正采用的数值，往往来自长期积累的经验系数、行业传统和「大致够用」的判断。他们并不是解完方程才决定梁的尺寸；他们用一套被时间筛过的近似规则先做决定，只在必要时才去算。这不是偷懒，而是承认一个事实：在真实世界里，能算的部分和需要判断的部分，其边界并不是由理论划出来的。

## 手艺住在距离里

如果隐性知识只能靠接触传递，那么它的传递就有三个必要条件：**距离足够近、时间足够长、允许失败**。三者缺一，传递就会退化成形式。

贝尔实验室是最好的样本。在《贝尔实验室与美国革新大时代》里，格特纳描述的真正发明不是某间实验室，而是走廊。默文·凯利刻意把物理、化学、冶金、电路几拨人塞进同一栋楼、同一条走廊，让他们在午饭和偶遇里互相干扰。晶体管的诞生不是某一个人的灵光，而是几个学科长期共处之后的产物。可以复制的是「设立一个研究部门」，无法复制的是那种密度。

《晶体之火》补充了另一半：理论洞见只有在材料纯度这样的工艺条件具备之后才可能变成器件。把杂质从百分之几压到百万分之一，是纯粹的工艺胜利——它依赖的是操作经验，而不是公式。《硅谷之父》里诺伊斯的故事同样如此：Fairchild 更像一所学校，人离开、公司分裂、经验随之扩散。技术转移在这里从来不是文件转移，而是人的转移。

费曼在《别闹了，费曼先生》里反复强调，他真正学会的东西都是自己动手算出来、拆出来、修出来的。他后来批评的「货物崇拜科学」，正是指一种只模仿形式、不承担思考风险的做法——而这恰恰是隐性知识被"表面编码"之后的样子：形式上全都对，内核已经空了。

## 反方：流程不是敌人，而是脚手架

必须承认，上述论证很容易滑向一种自我陶醉的手艺崇拜。反方至少有四条理由站得住脚。

1. **编码本身就是人类最伟大的成就之一。** 摩尔定律之所以能持续几十年，靠的正是把不断重复的东西标准化、度量化和自动化。没有可编码的流程，就没有良率，也就没有整个半导体产业。批判编码，等于批判现代工业的根基。
2. **许多所谓的隐性知识，其实是不该被保护的坏习惯。** 老手的"手感"里，一部分确实是宝贵的判断力，另一部分只是未经检验的惯例。把后者神圣化，实际上是在为不问责、不改进提供掩护。
3. **编码会创造新的隐性知识。** 每当一层知识被写下来，人就被解放出来去做更上一层的事。电子表格没有消灭会计，它把会计推向了分析。知识不是被转移，而是被重新分层。
4. **AI 正在移动这条边界。** 大语言模型是历史上最强的编码机器，它把大量过去被认为「只可意会」的东西——语感、套路、常见错误——变成了可调用的模式。这直接动摇了「隐性知识不可复制」的强版本。

这四条都成立，因此必须把论点收窄。正确的命题不是「隐性知识不可编码」，而是：**编码的边际收益在知识的不同层级上极不均匀。** 在稳定、可重复、可度量的层级，编码几乎总能赢；在环境持续漂移、需要判断边界情形的层级，编码的收益会迅速递减。

## 限度：规则处理常态，判断处理边界

规则的本质，是对已经发生过的情况所做的压缩。一条规则越有效，通常说明它面对的环境越稳定。因此，规则的适用性与环境的稳定性其实是同一件事的两面。

真正的价值出现在规则失效的地方：异常情形、全新情境，以及多条规则互相冲突时的取舍。由此得出一个反直觉的推论：**越成功的编码，越会制造对判断力的稀缺需求。** 当流程把常规工作吃掉之后，剩下的工作几乎全是例外，而例外无法由流程本身处理。

更麻烦的是，过度编码会侵蚀判断力的再生产机制。如果组织里每个岗位都被流程定义完毕，新人就没有机会在「做错、被纠正、再试一次」的循环中长出手感。结果是组织出现一种结构性脆弱：在常规情形下极其高效，在非常规情形下极其无能——而后者恰恰是危机发生的地方。

这里还有一个测量上的偏差在起作用：可度量的东西更容易被管理，于是被过度管理；不可度量的东西被系统性低估，最终被悄悄耗尽。

## 判断

把以上分析落到三个层面。

**对组织而言**，隐性知识的再生产应当被当作资本开支，而不是管理费用。衡量标准不是「流程覆盖率」，而是「关键经验有没有接班人」。一个更诚实的指标是：过去一年里，有多少疑难问题是在没有资深人员参与的情况下被独立解决的。

**对个人而言**，可编码的技能会被持续贬值，但判断力不会凭空生长，它是大量具体操作的结果。因此正确的策略不是逃离操作，而是选择那些操作与判断距离最近的领域——你亲手做的事，恰好就是你要为之做判断的事。长期只做被流程完全定义的工作，会让人在不知不觉中失去议价能力。

**对 AI 时代而言**，模型会吃掉大量中间层，却不会凭空产生判断力。它把人推向两端：一端是被完全替代的常规工作，另一端是需要承担后果的判断工作。而判断力只能由亲手做过的人提供。因此最值得投入的，是那些「必须亲自做过、做过才有资格判断」的能力。

知识的重量，在于它必须被人真正扛过一遍。能被写下来的那部分，只是它的影子。`,
  content_en: `## A Concrete Puzzle

There is a recurring phenomenon in the semiconductor industry. A mature production line can be "copied" wholesale to another city: the same equipment list, the same process recipes, the same operating procedures, even the same engineers sent over to run it. Then yield drops, and it often takes years to climb back to where it started. Equipment can be purchased from a catalogue. Recipes can be transcribed line by line. Only the thing that makes all of it actually work refuses to travel with the documents.

This is worth treating as an intellectual problem, not merely an industrial footnote. It asks: **what form does knowledge actually take?** If knowledge were a body of recordable, transferable information, copying a production line would be equivalent to copying a document. It plainly is not. So we face a sharper question: under what conditions can knowledge be written down, and under what conditions does writing it down distort it?

The claim this essay defends is an uncomfortable one: **the most common mistake of modern organisations is mistaking codifiable knowledge for the whole of knowledge.** Processes, manuals, metrics and models are genuine achievements, but they cover only the thinner layer of what an organisation knows. The layer underneath — craft, judgement, sensitivity to anomaly — moves only through prolonged contact between people. Ignore it and efficiency keeps rising for a while, then breaks somewhere you did not expect.

## There Are Two Kinds of Knowledge, and Only One Can Be Written Down

When Michael Polanyi introduced the idea of tacit knowledge in the 1950s, his central formulation was that we know more than we can tell. His examples were deliberately mundane. A person can recognise a friend's face among thousands and still be unable to say what the recognition consists of. A person can ride a bicycle and stay upright, yet the equations of torque are not what governs the body doing it.

The distinction matters because it draws a boundary. One part of knowledge is **propositional**: it can be judged true or false, written into a manual, examined, transmitted remotely, audited. The other part is **dispositional**: it appears only in a concrete situation, travels by imitation and correction, can only be judged by whether it works, and resists verification.

J. E. Gordon, in *Structures: Or Why Things Don't Fall Down*, keeps pointing at a gap. The theoretical strength of a material and the strength engineers actually rely on differ by orders of magnitude; the numbers they use come from accumulated experience, trade tradition, and a judgement that something is "about right." They do not solve for the beam before sizing it. They size it with approximate rules that time has filtered, and calculate only when they must. That is not laziness. It is an admission that in the real world, the border between what can be calculated and what must be judged is not drawn by theory.

## Craft Lives in Distance

If tacit knowledge travels only through contact, then its transmission has three preconditions: **close enough, long enough, and permitted to fail.** Remove any one and transmission degrades into form.

Bell Labs is the cleanest specimen. In *The Idea Factory*, Jon Gertner argues that the real invention was not a laboratory but a corridor. Mervin Kelly deliberately packed physicists, chemists, metallurgists and circuit people into the same building and the same hallway, so that they would interfere with one another over lunch and by accident. The transistor was not one person's flash of insight; it was what several disciplines produced after years of proximity. You can copy "create a research department." You cannot copy that density.

*Crystal Fire* supplies the other half: theoretical insight became a device only once process conditions such as materials purity existed. Pushing impurities from a few percent down to parts per million was a triumph of craft, and it depended on operating experience rather than on formulas. Robert Noyce's story in *The Man Behind the Microchip* works the same way. Fairchild behaved more like a school than a company: people left, firms split off, and experience diffused with the people. Technology transfer here was never document transfer. It was human transfer.

Feynman, in *Surely You're Joking, Mr. Feynman!*, insists repeatedly that what he genuinely learned he learned by calculating, taking apart, and repairing things himself. The "cargo cult science" he later criticised is precisely the imitation of form without the willingness to bear the risk of thought — which is exactly what tacit knowledge looks like after it has been superficially encoded. Every box ticked, the core hollow.

## The Case Against: Process Is Not the Enemy, It Is the Scaffolding

It must be granted that the argument so far slides easily into a self-congratulatory cult of craft. The opposition has at least four solid points.

1. **Codification is one of humanity's greatest achievements.** Moore's Law held for decades precisely because repeated work was standardised, measured and automated. Without codifiable process there is no yield, and without yield there is no semiconductor industry. To attack codification is to attack the foundation of modern industry.
2. **Much "tacit knowledge" is bad habit that deserves to die.** Inside a veteran's touch, one part is valuable judgement and another is unexamined convention. Sanctifying the latter is really a way of shielding incompetence from accountability.
3. **Codification manufactures new tacit knowledge.** Each time a layer is written down, people are freed to work one level up. Spreadsheets did not abolish accountants; they pushed them toward analysis. Knowledge is not transferred so much as re-stratified.
4. **AI is moving the boundary.** Large language models are the strongest encoding machines in history, turning a great deal of what was thought ineffable — register, convention, common error — into callable patterns. That directly weakens the strong version of the claim.

All four hold, so the thesis has to be narrowed. The defensible proposition is not that tacit knowledge cannot be encoded, but that **the marginal return on encoding is extremely uneven across layers of knowledge.** Where work is stable, repeatable and measurable, encoding almost always wins. Where the environment keeps drifting and the task is to judge boundary cases, the return falls away quickly.

## Limits: Rules Handle the Normal, Judgement Handles the Edge

A rule is a compression of situations that have already occurred. The more effective a rule is, the more stable the environment it faces — the applicability of rules and the stability of the world are two sides of one fact.

Value shows up where rules fail: anomalies, genuinely new situations, and trade-offs between rules that contradict each other. Hence a counterintuitive corollary: **the more successful the encoding, the scarcer judgement becomes.** Once process has eaten the routine work, almost everything left is an exception, and exceptions cannot be processed by process.

Worse, over-encoding erodes the mechanism that reproduces judgement. If every role is fully defined by procedure, newcomers never get the loop of getting it wrong, being corrected, and trying again. The organisation then acquires a structural brittleness: extremely efficient under normal conditions, extremely helpless outside them — which is exactly where crises happen.

A measurement bias compounds this. What can be measured is easier to manage, and so it gets over-managed; what cannot be measured is systematically underweighted and eventually quietly exhausted.

## The Judgement

Three levels follow.

**For organisations:** treat the reproduction of tacit knowledge as capital expenditure, not overhead. The relevant measure is not process coverage but whether critical experience has a successor. A more honest metric: over the past year, how many hard problems were solved independently by people with no senior engineer in the room?

**For individuals:** codifiable skills will keep depreciating, but judgement does not grow out of nothing — it is the residue of a large amount of concrete doing. The right strategy is therefore not to flee hands-on work but to choose domains where doing and judging are closest together, so that what you do by hand is exactly what you must judge. Spending a career only on work that process has fully defined is a slow way of losing your bargaining position.

**For the age of AI:** models will eat a large middle layer without conjuring judgement out of nothing. They push people toward two ends — routine work that can be fully replaced, and consequential work that requires someone to own the outcome. Judgement can only be supplied by someone who has done the thing. What is worth investing in, then, is capability that can only be earned by doing the work yourself.

The weight of knowledge is that someone has to carry it personally. The part that can be written down is only its shadow.`,
};

export default article;
