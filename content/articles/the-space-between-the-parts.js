export const article = {
  slug: 'the-space-between-the-parts',
  title_zh: '部件之间：为什么每个零件都合格，整体仍会失败',
  title_en: 'The Space Between the Parts: Why a System Fails When Every Component Passes',
  subtitle_zh:
    '分工把责任交给了部件，把假设留在了缝隙里。真正决定整体是否可靠的，是那条从未被测量的通道',
  subtitle_en:
    'Division of labour hands responsibility to the parts and abandons its assumptions in the gaps. What decides whether the whole holds is the channel nobody measures',
  category: 'technology',
  tags: ['systems-thinking', 'organization', 'management', 'technology', 'complexity'],
  related_books: [
    'sciences-of-the-artificial',
    'the-mythical-man-month',
    'the-design-of-everyday-things',
    'thinking-in-systems',
    'structures-or-why-things-dont-fall-down',
    'the-perfectionists',
  ],
  related_topics: ['systems-thinking', 'complexity', 'technology'],
  publish_date: '2026-11-08',
  lang: 'both',
  content_zh: `## 一、合格的零件，失败的整体

一个反复出现却很少被当作问题来问的场景：每个部件都通过了验收，规格书没有遗漏，测试报告齐备，装起来之后系统却不稳定。复盘时几乎总能找到一句相似的结论——「两边都按自己那部分做对了，但对不上」。这类失败不发生在任何一个部件内部，而发生在部件之间；它不属于任何一份验收报告，因而在事先的所有检查里都不存在。

第一反应通常是「规定得还不够细」，于是补文档、加评审、再列一份接口清单。这个反应有道理，却经常无效，因为它把问题理解成信息量不足：只要描述足够完备，缝隙就会被填平。但缝隙里装着的并不是被漏写的信息，而是一组从未被任何一方当作自己决定来做的假设——谁先谁后、异常时由谁退让、单位与精度按谁的口径、失败之后状态归谁。它们平时不需要被说出来，恰恰因为双方各自都「按常理」办了。

于是问题可以更准确地提出来：为什么一套把每个局部都验证过的方法，会系统性地看不见整体？

## 二、局部正确不等于整体正确

赫伯特·西蒙在《人工科学》里给出一个有用的起点。层级系统之所以可理解、可建造，是因为它「近可分解」：部件内部的相互作用远比部件之间的相互作用频繁而强烈。正因如此，短期内可以把每个部件当作近乎独立的对象去设计和检验，长期行为则通过少数聚合变量在部件之间慢慢传递。近可分解性不是系统的缺陷，而是分工得以成立的前提——没有它，任何局部改动都会立刻扰动全局，模块化、并行开发、逐级验收全都不可能。

但同一个前提也埋下了盲区。既然部件之间的耦合稀疏，那么在部件内部做验证时，那些稀疏的耦合几乎不会出现；它们只在整体被装配、并且运行到一定时长之后才显形。于是「每个部件都合格」并不是一个接近「整体合格」的结论，而是另一个层面的结论：它证明的是在切开系统的那几个截面上，各段自身成立。截面选在哪里，检验就只能看到什么。

这解释了一个常见错觉：把验证的覆盖率等同于覆盖的范围。覆盖率可以做到很高，而所有被覆盖的对象都是部件；那条决定整体行为的稀疏通道，因为不属于任何部件，天然落在覆盖率之外。

## 三、缝隙里的假设归谁

布鲁克斯在《人月神话》里处理的是同一结构的另一面。他强调大型系统需要「概念完整性」：设计应当由少数人统一把握，宁可少一些功能，也不能让系统的设计哲学分裂成几套互不协调的局部理性。同时他给出那个常被引用的算式——若每两人之间都需要沟通，沟通成本随 n(n−1)/2 增长，向已经落后的项目增加人手只会让它更落后。常被忽略的是这两点之间的因果：分工一旦把系统切成若干份，协调工作并不会消失，它只是从「做设计」变成了「对齐设计」，而后者没有人天然拥有。

唐·诺曼在《设计心理学》里把类似的错位放到了人与物之间。他用「执行的鸿沟」与「评估的鸿沟」描述使用者面对一个物件时的两处断裂：想做的事能否被转化为可操作的动作，做完之后能否从物件那里读到结果。两处鸿沟都落在界面上，而不是落在使用者或物件的内部。把视角换成组织，部件之间的接缝就是这样的界面：一方输出的动作、另一方读到的反馈，中间隔着一条谁都没有负责翻译的通道。

更关键的是度量的方向。责任按部件划分，指标按部件采集，验收按部件签字，于是所有记录都只产生在部件内部。接缝处的失败既无法被记录，也就无法被归责；不能被归责的事情，在下一次会被原样重做一遍。这不是人的疏忽，而是一套把「谁负责」和「系统在哪里出错」画成两张不同地图的做法。

## 四、误差预算与那条不被测量的通道

工程实践提供了一个更朴素的旁证。《结构：为什么东西不会倒塌》之所以用大量篇幅讨论连接与接头，是因为载荷必须经过接缝才能传递；杆件本身算得再准，力在接头处的转向、集中与偏心才是薄弱环节。西蒙·温切斯特在《追求精确》里把公差写成现代制造的核心概念，而公差的定义恰恰是「允许多少不一致」：它不要求零件完全相同，它规定的是零件之间可以容忍多少偏差。换句话说，工业体系早就承认了一件事——真正需要被显式管理的，从来不是零件，而是零件之间的关系。

德内拉·梅多斯在《系统之美》里给出更一般的理由：系统的行为很大程度上由信息流的结构决定，谁掌握什么信息、信息在哪里被截断或延迟，往往比单个元件的性能更能解释整体表现。把这条与前面几节合起来看，结论就不是「沟通不足」这类劝告，而是一个可检验的诊断：如果一个系统反复在接缝处出问题，那么问题在于关于接缝的信息从未进入任何人的决策回路。

这也说明为什么「补文档」经常无效。文档写的是部件的对外声明，而失败来自声明双方各自未言明的那部分前提；只要度量和问责仍然只对着部件，新增的文字就只是又一份部件级产物。

## 五、反方与限度

第一条反方最有力：把失败归给接缝，很容易变成把责任推给「沟通」，从而放过真正有缺陷的部件。现实中不乏这样的情况——某一侧确实算错了、材料不达标、实现偏离规格，只是因为接口含混，错误被暂时藏在缝隙里。接缝框架的滥用会制造一种体面的推诿：既然谁都没错，那就谁都不必改。因此在使用这套诊断之前，必须先穷尽部件级的解释，而不是拿它当第一反应。

第二条反方来自另一种设计传统。为每条接缝指定负责人、把每个假设写成契约，会生产出一层「接口官僚」：协调被固定成常设结构，成本长期化，响应变慢。端到端原则所代表的思路恰好相反——把智能尽量放在两端，让中间保持简单，许多模糊性由使用者自行吸收反而更省事，也更健壮。松耦合系统的适应力，部分正来自接缝没有被写死。要求全部显式化，等于假设环境稳定到值得把合同签满。

第三条是适用范围的限度。近可分解性本身是有条件的。对生态系统、宏观经济、组织文化这类强耦合对象，「部件」是分析时切出来的虚构，而不是世界里实存的边界；此时硬要去找一条接缝，只会把连续的相互作用误画成一次交接事故。本篇的判断只对那些确实存在清晰分层、且局部可以被独立验证的系统成立。

还须承认：让接缝可观测本身也有代价。跨边界的日志、契约与联合验收会占用本可用于改进部件的资源，在小系统里往往是净损失。这个方案的收益随系统规模与协作方数量增长，不是无条件成立的。

## 六、判断：不消除缝隙，而是让缝隙可观测

因此落到判断上，可执行的不是「把接口定死」，而是把那条从未被测量的通道纳入测量。三条具体判据：其一，部件之间共享的假设必须被写成显式约定，且约定的所有权不归任何一方单独所有；其二，跨边界的失败单独计数，不与部件内缺陷混在同一份缺陷清单里，否则它永远会被归到某一侧名下；其三，接缝的验收与部件的验收同级，即存在一次只有组合起来才能通过的检验，而不是把全部信心建立在分别签字上。

这三条共同指向一个更一般的结论：系统的可靠性上限，由最不被测量的那条关系决定，而不是由最弱的那个部件决定。部件弱可以替换，关系不被测量则连「哪里弱」都无法提出。把验证的对象从物件扩展到物件之间的假设，并不是增加一道手续，而是补上一个此前根本不存在的观察位置。

最后仍需给这个判断划界。可观测不等于可消除：把假设写清楚，只是让它进入讨论，并不保证有人愿意承担改动它的代价。许多长期反复出现的接口故障，根子不在认识，而在改动会同时触动两方的既得安排。此时看得见仍然值得——它至少把一次技术争执还原成一次可以摆到桌面上的分工谈判，而不是让它在下一次复盘里继续以「两边都做对了」的面目出现。`,
  content_en: `## 1. Sound Parts, a Failing Whole

A scene recurs often enough to be familiar and rarely enough to go unexamined. Every component passes inspection, the specification has no gaps, the test reports are complete — and once assembled the system is unstable. The post-mortem almost always produces the same sentence: both sides did their own part correctly, but the two did not meet. The failure occurs inside no component. It occurs between them, belongs to no acceptance report, and therefore did not exist in any of the checks that preceded it.

The first response is usually that the rules were not detailed enough. More documents, another review, one more interface checklist follow. The response is reasonable and frequently useless, because it treats the trouble as a shortage of information: given a sufficiently complete description, the gap would close. What actually sits in the gap is not information that someone forgot to write down. It is a set of assumptions nobody made as a decision — who goes first, who yields when something goes wrong, whose units and whose tolerances apply, who owns the state after a failure. They never need to be spoken precisely because both sides were following their own version of common sense.

The question can therefore be put more sharply: why does a method that verifies every locality systematically fail to see the whole?

## 2. Local Correctness Is Not Global Correctness

Herbert Simon offers a useful starting point in *The Sciences of the Artificial*. Hierarchical systems are intelligible and buildable because they are nearly decomposable: interactions within a component are far more frequent and stronger than interactions between components. That is why, over short horizons, each part can be designed and tested as if it were almost independent, while long-run behaviour passes between parts through a small number of aggregate variables. Near decomposability is not a defect. It is the precondition for division of labour. Without it, any local change would immediately disturb everything, and modularity, parallel work and staged acceptance would all be impossible.

The same precondition plants the blind spot. Because coupling across the joints is sparse, it barely appears when a part is verified on its own; it becomes visible only after assembly and only after the system has run for a while. "Every part passes" is thus not an approximation to "the whole passes". It is a claim at a different level: it says that along the cuts where the system was divided, each segment holds on its own terms. Where the cuts are made determines what inspection can see.

This explains a persistent confusion between the coverage of verification and the scope of verification. Coverage can be driven very high while every object covered is a component. The sparse channel that governs the behaviour of the whole belongs to no component and therefore falls outside coverage by construction.

## 3. Who Owns the Assumptions in the Gap

Fred Brooks approaches the same structure from another direction in *The Mythical Man-Month*. He insists that large systems require conceptual integrity: design should be held coherently by a small number of people, and it is better to ship fewer features than to let a system's design philosophy split into several internally rational but mutually incompatible local ones. He also gives the familiar arithmetic — if every pair must communicate, coordination grows as n(n−1)/2, and adding people to a late project makes it later. What is usually missed is the causal link between the two claims. Once division of labour cuts a system into pieces, coordination does not disappear; it changes from doing design to aligning designs, and nobody naturally owns the second activity.

Don Norman places a similar mismatch between person and artefact in *The Design of Everyday Things*. His gulf of execution and gulf of evaluation name two breaks in use: whether an intention can be turned into an available action, and whether the result can afterwards be read back from the thing. Both gulfs lie at the interface, not inside the user and not inside the object. Translated into an organisation, the seam between two components is exactly such an interface: an action emitted on one side, a feedback read on the other, and a translation channel in between that nobody was assigned to maintain.

The direction of measurement matters more still. Responsibility is divided by component, metrics are collected by component, sign-off is granted by component, so every record is generated inside a component. A failure at the seam can be neither recorded nor attributed, and what cannot be attributed will be reproduced unchanged next time. This is not individual carelessness. It is a way of drawing "who answers" and "where the system breaks" on two different maps.

## 4. Tolerance Budgets and the Unmeasured Channel

Engineering practice supplies a plainer corroboration. *Structures: Or Why Things Don't Fall Down* devotes so much attention to connections and joints because loads can only travel across seams; however accurately a beam is calculated, it is the turning, concentration and eccentricity of forces at the joint that make the weak point. Simon Winchester's *The Perfectionists* treats tolerance as a central concept in the history of manufacturing, and tolerance is defined precisely as how much mismatch is permitted: it does not demand that parts be identical, it specifies how much divergence between parts is acceptable. Industry has long admitted, in other words, that what requires explicit management is never the part but the relation between parts.

Donella Meadows gives the more general reason in *Thinking in Systems*: behaviour is largely shaped by the structure of information flows — who holds which information, where it is cut off or delayed — often more than by the performance of any single element. Read alongside the earlier sections, the conclusion is not an exhortation to communicate better but a testable diagnosis. If a system keeps failing at its joints, then information about the joints has never entered anyone's decision loop.

That also explains why writing more documents so often fails. A document states a component's outward declaration, whereas the failure comes from the unspoken premises on each side of that declaration. As long as measurement and accountability point only at components, additional text is simply one more component-level artefact.

## 5. Objections and Limits

The strongest objection comes first. Attributing failure to the seam easily becomes a way of blaming "communication" and letting a genuinely defective part off the hook. Such cases are common: one side really did miscalculate, the material was below spec, the implementation departed from the design, and an ambiguous interface merely gave the error somewhere to hide. Overusing the seam frame manufactures a polite evasion — if nobody is wrong, nobody has to change anything. Component-level explanations must be exhausted before this diagnosis is used, not skipped in its favour.

A second objection comes from another design tradition. Assigning an owner to every seam and turning every assumption into a contract produces an interface bureaucracy: coordination becomes a permanent layer, its cost is locked in, response slows. The end-to-end argument runs the other way — keep intelligence at the edges, keep the middle simple, and let users absorb much of the ambiguity, which is often cheaper and more robust. Part of the adaptability of loosely coupled systems comes precisely from seams that were never written down. Demanding that everything be explicit assumes an environment stable enough to be worth contracting over in full.

A third point bounds the scope. Near decomposability is conditional. For ecosystems, macroeconomic systems or organisational culture, "components" are fictions cut out by the analyst rather than boundaries present in the world; hunting for a seam there turns continuous mutual influence into a fictitious handover accident. The judgement below holds only for systems with genuinely clear layering, whose parts can be independently verified.

It should also be admitted that making seams observable has a cost of its own. Cross-boundary logging, contracts and joint acceptance consume resources that could have improved the parts, and in a small system they are often a net loss. The return grows with scale and with the number of cooperating parties. It is not unconditional.

## 6. Judgement: Make the Seam Observable, Not Rigid

The actionable conclusion is therefore not to freeze the interfaces but to bring the unmeasured channel inside measurement. Three concrete tests follow. First, the assumptions shared across components must be written as explicit agreements whose ownership does not sit with either party alone. Second, cross-boundary failures must be counted separately rather than folded into the same defect list as faults inside a component — otherwise they will always be assigned to one side. Third, acceptance of the seam must carry the same weight as acceptance of the parts, meaning there exists a check that can only be passed in combination, rather than resting all confidence on separate sign-offs.

Together these point to a more general conclusion: the ceiling on a system's reliability is set by its least-measured relation, not by its weakest component. A weak part can be replaced. An unmeasured relation leaves even the question "where is it weak?" unaskable. Extending verification from objects to the assumptions between objects is not one more procedure. It supplies an observation post that did not previously exist.

The judgement still needs its own boundary. Observable is not the same as removable. Writing an assumption down admits it to discussion; it does not guarantee that anyone will pay the price of changing it. Many chronic interface failures are rooted not in knowledge but in the fact that a change would disturb the settled arrangements of both parties. Visibility is still worth having: at minimum it turns a technical dispute back into a negotiable question about division of labour, instead of letting it reappear at the next post-mortem in the familiar costume of "both sides did it right".`,
};

export default article;
