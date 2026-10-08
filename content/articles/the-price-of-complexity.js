export const article = {
  slug: 'the-price-of-complexity',
  title_zh: '复杂的代价：为什么系统不是越大越稳',
  title_en: 'The Price of Complexity: Why Systems Do Not Get Safer as They Grow',
  subtitle_zh: '从青铜时代的崩溃到现代基础设施——增长的边际收益何时转为脆弱',
  subtitle_en: 'From the Bronze Age collapse to modern infrastructure — when the returns on growth turn into fragility',
  category: 'society',
  tags: ['complexity', 'systems-thinking', 'civilization', 'progress'],
  related_books: [
    'the-collapse-of-complex-societies',
    '1177-bc-the-year-civilization-collapsed',
    'the-rise-and-fall-of-the-great-powers',
    'thinking-in-systems',
    'antifragile',
  ],
  related_topics: ['complexity', 'systems-thinking', 'civilization'],
  publish_date: '2026-10-07',
  lang: 'both',
  content_zh: `## 一个具体的问题：解决问题的能力，为什么会长成问题本身

每一项现代制度都是为解决某个具体问题而生的。监管是为了防止上一场危机重演，审批是为了防止事故，中台是为了消除重复建设，多层供应链是为了压低成本。几十年之后，这些东西本身成了被抱怨的对象：监管套利、审批僵局、中台与业务互相拖累、供应链一断全断。

这不是偶然的退化，而是一个值得当作思想问题来处理的结构。它问的是：**为什么解决问题的努力，最终会长成问题的一部分？**

最省事的解释是「官僚机构自我膨胀」或者「既得利益阻挠改革」。这两种解释有时成立，但它们解释不了为什么同样的事情会发生在没有官僚、没有既得利益的地方——开源项目、科研共同体、快速成长的创业公司，都经历过从灵活到笨重的同一条曲线。

这篇文章要论证的判断是：**复杂不是失败的征兆，而是成功的副产品。** 一个系统只要还有余力，就几乎总会选择再增加一层来解决眼前的问题；而每一层都在向未来借维护能力。真正的风险不在于系统变得复杂，而在于复杂度增长的速度长期高于维护能力的增长速度。

## 复杂是一笔投资，而它的回报率会下降

要理解这件事，需要先放弃一个隐含假设：复杂度是免费的。它不是。复杂度需要持续投入能量来维持——税收、管理工时、培训、协调、审计、以及大量说不清楚的解释成本。

人类学家约瑟夫·泰恩特在《复杂社会的崩溃》里提出了一个至今仍被反复引用的论断：社会面对问题时，最主要的应对方式就是增加社会政治复杂度——更多的层级、更细的分工、更专门的机构、更复杂的资源调配。这套策略在很长时间里是有效的，问题在于它遵循收益递减：**每增加一层复杂度所能换来的问题解决能力，会随着层级的累积而下降。**

当继续增加复杂度的成本超过它带来的收益时，系统就失去了应对下一个冲击的余量。此时泰恩特给出的结论相当反直觉：崩溃并不是灾难性的事件，而是一次**快速的简化**——系统塌回一个成本更低的复杂度水平。它之所以看起来像灾难，是因为生活在其中的人承受了全部代价，而收益（成本负担的解除）是分散且延后的。

这个框架最不讨喜的推论是：**对一个过度复杂的结构来说，简化在系统层面可能是理性的。** 因为维持那个结构本身，就在持续消耗它原本想要保护的东西。

## 三个让它变脆的机制

复杂本身不会杀死系统，杀死系统的是复杂度带来的三种特定结构。

### 一、紧耦合：局部故障获得了全局的传导路径

埃里克·克莱因在《文明的崩塌：公元前1177年的地中海世界》中处理的是青铜时代晚期的体系崩溃。他的论证要点不在于找到单一的元凶，而在于指出：宫廷经济之间通过礼物交换、外交联姻、以及锡与铜的长途贸易，已经形成了极高密度的相互依赖。干旱、地震、迁徙压力、局部战争——其中任何一项单独出现，体系都曾扛住过。但当它们同时发生，**互联本身把它们合成了同一次崩溃**。

这里的机制值得单独记住：**互联提高效率的同时，把原本彼此独立的失败模式合并成了一个共同的失败模式。** 金融体系、电网、全球供应链、乃至一家公司的技术栈，遵循的是同一逻辑。

### 二、隐藏依赖：可读性是用视野换来的

德内拉·梅多斯在《系统之美》里强调，系统的行为主要由结构决定，而结构中包含存量、流量、反馈回路和延迟。延迟是最容易被忽略的一项：它让因果在时间上分离，于是反馈失效、误判累积。

复杂度的一部分作用，正是把依赖关系**隐藏**起来。抽象层让局部看起来干净、可替换、可管理，代价是真实的依赖被推到视野之外。于是故障发生时，因果链已经不在任何人的观察范围内——这不是有人失职，而是结构使然。**一个系统越是把复杂度封装得漂亮，它在出事时就越不可诊断。**

### 三、维护赤字：收益是当下的，成本是延后的

保罗·肯尼迪在《大国的兴衰》中论证的是相对经济基础与战略承诺之间的长期失衡：承诺是刚性的、长期的、公开的，而支撑承诺的经济基础会漂移。这一结构可以类比到任何系统：**复杂度带来的收益是即时的、可见的、可以拿来展示的；维护成本是延后的、分散的、无人认领的。**

于是每一次决策都倾向于再增加一层，而削减维护。这不是短视，而是激励结构的必然结果。等到维护赤字显形时，通常已经不再是一个技术问题，而是一个政治问题。

> 复杂性是一笔以未来维护能力为抵押的贷款，而账单不会在同一届任期、同一份预算、同一个人的任期内到期。

## 反方：规模不是病，缺冗余才是

上面这套论证非常容易被推到一个错误的位置——反复杂、反规模、赞美小共同体。这个位置站不住，至少有四条理由。

1. **大规模系统可以非常稳健。** 互联网、分区运行的电网、生物的免疫系统，都是规模巨大且韧性极强的系统。它们共同的特征是模块化、冗余、多样性与松耦合。这说明脆弱来自结构，而不是来自尺寸。把两者混为一谈，是把病症当成了病因。
2. **有一类系统从波动中获益。** 塔勒布在《反脆弱》中区分了三种状态：脆弱、强韧、以及从混乱中受益。对第三类系统，冗余不是浪费，而是可选性；小错误不是事故，而是信息。对它们而言，减少复杂度等于降低学习能力——这是「简化」最大的反例。
3. **泰恩特的模型是事后解释，且存在幸存者偏差。** 它擅长说明一个已经崩溃的复杂社会为何崩溃，却很难在事前给出可操作的预警；同时，那些复杂度持续上升而并未崩溃的社会，在模型里缺少位置。描述力强、预测力弱的理论，不该被当作处方使用。
4. **简化会杀人。** 公共卫生、食品安全、航空管理、金融监管中的复杂度，对应的是真实的死亡与损失。拆除它们带来的「效率提升」，往往要很多年后才以另一种方式结账。反复杂的浪漫主义，通常是富足社会才付得起的奢侈品。

这四条都成立，所以论点必须收窄。可辩护的命题不是「复杂度有害」，而是：**脆弱并不来自复杂度的绝对水平，而来自复杂度与维护能力之间的失衡。**

## 限度与判据：三种复杂度

收窄之后，问题就从「要不要更复杂」变成了一个可操作的判断：眼前这一层，属于哪一类？

- **承载型复杂度**：每一层都在消除某一类失败模式。冗余、隔离、校验、限流、备用路径都属于这一类。它增加成本，但同时增加韧性。
- **装饰型复杂度**：增加的是协调、解释与合规的成本，而不是能力。多层审批、指标堆叠、为对齐而存在的对齐会议、为了让人看懂而再包一层的抽象，都属于这一类。
- **伪装型复杂度**：表面上是承载型，实质上是装饰型。它用「风险控制」「规范化」「治理」这样的名义，把成本推给下游或未来。

区分它们可以用三条测试：

1. **移除测试**：拿掉这一层，对应的失败模式是消失了，还是只是被藏到别处去了？
2. **模块测试**：能否在不让整体停摆的前提下替换其中任何一个部件？如果不能，说明模块化是名义上的。
3. **维护归属测试**：谁承担这层的维护成本，他是否拥有相应的资源与权限？如果承担者没有话语权，这一层迟早会以故障的形式被重新发现。

三条都通过，可以加层；任何一条失败，这一层就很可能只是一张递给未来的账单。

## 判断

把分析落到三个层面。

**对组织而言**，维护必须被当作预算项目，而不是「没钱时最先砍掉的可选项」。一个比「技术债有多少」更诚实的指标是：如果今天起停止所有新增，现有系统还能维持运转多久。这个数字下降的速度，比任何架构图都更能说明组织的真实处境。

**对个人而言**，复杂度同时是能力的放大器和依赖的放大器。选择系统的标准，不应是它看起来多先进，而是**你是否理解它的失效方式**。不理解失效方式，就等于把控制权交给了别人；而当它失效时，你也无法判断该修它、绕过它，还是该换掉它。

**对 AI 时代而言**，这一点尤其紧迫。模型让「再套一层自动化」的边际成本急剧下降——而这正是危险所在。当一个组织能以近乎零的成本再增加一层抽象、一层代理、一层自动流程时，它几乎一定会这么做。关键在于：**AI 降低的是构建成本，不是维护成本。** 如果维护仍然需要人来承担，那么构建成本的下降只会把系统的复杂度推高到一个维护能力永远追不上的水平。届时出现的不是效率的飞跃，而是一批没人真正理解、也无人有能力关停的系统。

复杂的代价不在复杂本身，而在于它总以未来的维护能力作抵押。因此真正需要追问的从来不是「要不要更复杂」，而是：**维护能力是否与复杂度同步增长。** 只要这个问题的答案是「否」，那么无论系统当前运行得多好，它都已经在借债了。`,
  content_en: `## A Concrete Puzzle: Why Solutions Grow Into Problems

Every modern institution was built to solve a specific problem. Regulation exists to prevent the last crisis from repeating. Approval workflows exist to prevent accidents. Shared internal platforms exist to stop every team from rebuilding the same thing. Multi-tier supply chains exist to cut cost. Decades later, the same institutions are the things being complained about: regulatory arbitrage, approval gridlock, platforms and business units dragging each other down, a supply chain where one break stops everything.

This is not random decay. It is a structure worth treating as an intellectual problem. It asks: **why does the effort to solve problems eventually grow into part of the problem?**

The cheapest explanations are "bureaucracies expand on their own" or "entrenched interests block reform." Sometimes both are true, but neither explains why the same curve appears where there is no bureaucracy and no entrenched interest — open-source projects, scientific communities, and fast-growing startups all travel the same road from nimble to ponderous.

The claim this essay defends is this: **complexity is not a symptom of failure but a by-product of success.** Any system with spare capacity will almost always choose to add another layer in order to solve the problem in front of it, and every layer borrows maintenance capacity from the future. The real risk is not that a system becomes complex. It is that complexity grows faster than the capacity to maintain it, year after year.

## Complexity Is an Investment, and Its Returns Decline

To see this, one implicit assumption has to go: that complexity is free. It is not. Complexity requires a continuous supply of energy to sustain — taxation, management hours, training, coordination, audit, and a large volume of explanation cost that nobody can quite itemise.

The anthropologist Joseph Tainter, in *The Collapse of Complex Societies*, advanced an argument still cited today: when societies face problems, their dominant response is to increase sociopolitical complexity — more levels, finer divisions of labour, more specialised institutions, more elaborate resource allocation. This strategy works for a long time. The catch is that it obeys diminishing returns: **the problem-solving capacity bought by each additional layer falls as layers accumulate.**

Once the cost of further complexity exceeds what it returns, the system no longer has slack to absorb the next shock. Tainter's conclusion is counterintuitive: collapse is not a cataclysm but a **rapid simplification** — the system falls back to a cheaper level of complexity. It looks like catastrophe because the people inside it bear the entire cost, while the benefit — relief from the cost burden — is diffuse and delayed.

The least welcome corollary is this: **for an over-complex structure, simplification may be rational at the level of the system.** Maintaining the structure is itself consuming the thing the structure was built to protect.

## Three Mechanisms That Make It Brittle

Complexity alone does not kill systems. Three specific structures do.

### 1. Tight Coupling: Local Failure Acquires a Global Path

Eric Cline's *1177 B.C.* deals with the collapse of the Late Bronze Age. The point of his argument is not to identify a single culprit but to show that the palace economies had become densely interdependent through gift exchange, dynastic marriage, and long-distance trade in tin and copper. Drought, earthquakes, migration pressure, local war — the system had absorbed each of these individually. When they arrived together, **interconnection itself fused them into a single collapse.**

The mechanism deserves to be remembered on its own: **interconnection raises efficiency and simultaneously merges previously independent failure modes into one shared failure mode.** Financial systems, power grids, global supply chains, and a single company's technology stack all obey the same logic.

### 2. Hidden Dependency: Legibility Is Bought With Vision

Donella Meadows, in *Thinking in Systems*, stresses that a system's behaviour comes mainly from its structure, and that structure includes stocks, flows, feedback loops and delays. Delay is the most neglected of these: it separates cause from effect in time, so feedback fails and misjudgement accumulates.

Part of what complexity does is **hide** dependencies. An abstraction layer makes the local view clean, swappable, manageable — at the price of pushing real dependencies out of sight. When something breaks, the causal chain is no longer inside anyone's field of view. This is not negligence; it is what the structure produces. **The more elegantly a system encapsulates its complexity, the less diagnosable it becomes when it fails.**

### 3. The Maintenance Deficit: Benefits Arrive Now, Costs Arrive Later

Paul Kennedy's *The Rise and Fall of the Great Powers* argues that great powers drift into a long-run imbalance between their relative economic base and their strategic commitments: commitments are rigid, long-term and public, while the economic base that funds them shifts. The same structure applies to any system: **the benefits of complexity are immediate, visible and demonstrable; maintenance costs are deferred, dispersed and unclaimed.**

So every decision tilts toward adding another layer and cutting maintenance. This is not short-sightedness; it is what the incentives produce. By the time the maintenance deficit becomes visible, it is usually no longer a technical problem. It is a political one.

> Complexity is a loan secured against future maintenance capacity, and the bill does not come due within the same term of office, the same budget, or the same person's career.

## The Case Against: Scale Is Not the Disease; Missing Redundancy Is

The argument so far slides easily into a wrong position — anti-complexity, anti-scale, nostalgic for small communities. That position does not hold, for at least four reasons.

1. **Large systems can be extremely robust.** The internet, a properly zoned power grid, and the biological immune system are all enormous and highly resilient. What they share is modularity, redundancy, diversity and loose coupling. Fragility comes from structure, not from size. Conflating the two mistakes the symptom for the disease.
2. **Some systems gain from disorder.** Taleb, in *Antifragile*, separates three states: fragile, robust, and better off for volatility. For the third, redundancy is not waste but optionality, and small errors are not accidents but information. For such systems, reducing complexity means reducing the capacity to learn — the strongest counterexample to simplification as a policy.
3. **Tainter's model explains backwards and suffers survivorship bias.** It is good at saying why a complex society that already collapsed did so; it struggles to give usable early warning in advance. And societies whose complexity rose without collapsing have no clear place in it. A theory with strong descriptive power and weak predictive power should not be used as a prescription.
4. **Simplification kills.** Complexity in public health, food safety, aviation management and financial supervision corresponds to real deaths and real losses. The "efficiency gains" from dismantling it are often settled years later, in another currency. Anti-complexity romanticism is usually a luxury that only affluent societies can afford.

All four hold, so the thesis must be narrowed. The defensible proposition is not that complexity is harmful, but that **fragility comes not from the absolute level of complexity but from the gap between complexity and the capacity to maintain it.**

## Limits and Tests: Three Kinds of Complexity

Once narrowed, the question stops being "more or less complexity" and becomes an operational one: which kind of layer is this?

- **Load-bearing complexity:** each layer removes a class of failure. Redundancy, isolation, validation, rate limiting, fallback paths. It raises cost and raises resilience at the same time.
- **Ornamental complexity:** it adds coordination, explanation and compliance cost without adding capability. Layered approvals, stacked metrics, alignment meetings that exist in order to align, abstractions added so that the abstraction can be understood.
- **Disguised complexity:** it looks load-bearing and is ornamental. It pushes cost downstream or into the future under the names of "risk control," "standardisation," or "governance."

Three tests separate them:

1. **The removal test:** take this layer away — does the failure mode disappear, or does it merely relocate out of view?
2. **The modularity test:** can any component be replaced without stopping the whole? If not, the modularity is nominal.
3. **The maintenance-ownership test:** who carries this layer's maintenance cost, and do they hold the matching resources and authority? If the bearer has no voice, the layer will eventually be rediscovered as an outage.

Pass all three and the layer is worth adding. Fail any one and it is probably an invoice handed to the future.

## The Judgement

Three levels follow.

**For organisations:** maintenance has to be a budget line, not the first thing cut when money is tight. A more honest metric than "how much technical debt do we carry" is this: if all new work stopped today, how long could the existing system keep running? The speed at which that number falls says more about an organisation's true position than any architecture diagram.

**For individuals:** complexity amplifies capability and dependency in the same measure. The criterion for choosing a system is not how advanced it looks but **whether you understand how it fails.** Not understanding the failure mode means handing control to someone else — and when it breaks, you cannot tell whether to fix it, route around it, or replace it.

**For the age of AI:** this is urgent. Models have driven the marginal cost of "add another layer of automation" sharply down, and that is precisely the danger. When an organisation can add another abstraction, another agent, another automated pipeline at almost no cost, it will. The crucial point: **AI lowers the cost of building, not the cost of maintaining.** If maintenance still has to be carried by people, then cheaper building only pushes complexity up to a level that maintenance capacity can never match. What appears is not a leap in efficiency but a population of systems that nobody fully understands and nobody is able to switch off.

The price of complexity is not complexity itself. It is that complexity is always secured against future maintenance capacity. So the question that matters was never "should we be more complex." It is: **is maintenance capacity growing in step with complexity?** As long as the answer is no, the system is already borrowing — however well it happens to be running today.`,
};

export default article;
