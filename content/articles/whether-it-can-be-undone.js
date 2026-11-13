export const article = {
  slug: 'whether-it-can-be-undone',
  title_zh: '能不能撤回：为什么决策的第一种分类不是对错',
  title_en: 'Whether It Can Be Undone: Why the First Question About a Decision Is Not Whether It Is Right',
  subtitle_zh:
    '精确并不能补救一个无法撤回的错误；多数制度把可逆与不可逆的决定送进同一套审批程序，于是该试的不敢试，该慎的反而快',
  subtitle_en:
    'Accuracy cannot repair a mistake that cannot be undone; most institutions route reversible and irreversible choices through the same approval process, making experiments timid and commitments careless',
  category: 'economics',
  tags: ['decision-making', 'risk', 'uncertainty', 'behavioral-economics', 'systems-thinking'],
  related_books: [
    'against-the-gods',
    'thinking-in-systems',
    'superforecasting',
    'margin-of-safety',
    'antifragile',
  ],
  related_topics: ['decision-making', 'uncertainty', 'systems-thinking'],
  publish_date: '2026-11-13',
  lang: 'both',
  content_zh: `## 一、两类错误不在同一条轴上

一个可以回滚的功能上线，往往要经过需求评审、测试报告、灰度方案和三个人签字；同一家公司决定关掉一条产线、签下十年期的独家供应协议，或把一片场地一次性推平重建，却常在**一次会议**里定案。两件事的后果相差不止一个数量级，投入的论证时间却常常相反。

值得追问的是：如果判断力指的是「把事情想准」，为什么更需要想准的那类决定反而想得更少？先排除三种现成的解释。不是信息不足——不可逆的决定通常信息更少，却也没有因此触发更多的搜寻与追问。不是胆量差异——同一批人在两种场合的表现截然不同。也不是组织整体偏好冒险：它对可以撤回的事谨慎到近乎迟缓，说明它并不缺谨慎，只是谨慎放错了地方。

剩下的差别落在决定的**时间结构**上：错了能不能撤回。判断的对错是一根轴，能否重来是另一根轴，而多数决策制度只按第一根轴设计流程。把两者混用之后，一个后果轻微却会留下记录的错误显得很贵，一个后果巨大却要很多年才显现的错误显得很便宜。

## 二、可逆性不是程度，是三把不同的锁

「能不能撤回」常被当成一个程度问题：多少成本、多少时间、多少面子。更有效的拆法是把它看成三把互相独立的锁。

第一把是**状态锁**：原来的状态是否还在。删掉的代码可以恢复，本金亏光不能，推平的栖息地不能，公开说过的立场不能。第二把是**协调锁**：别人是否已经据此改动了自己的计划。一份内部标准一旦发布，配套采购、合同条款、培训材料会跟着调整，此后「改回去」要动的不是那一份文件，而是所有已经按它行动的人。第三把是**窗口锁**：有些机会只开一次，错过之后连「维持原状」都不再是可选项。

多数误判来自只检查第一把锁。技术上能回滚，被直接读成实际上能撤回，而协调锁与窗口锁把成本悄悄转嫁给了别人和以后。系统思考的传统一直提醒，反馈有延迟，干预的后果常常显现在别处、也显现在很久之后；《系统之美》所作的正是把这类时滞与反馈摆到台面上。这也解释了一个反差：「先试一下」在软件里近乎免费，在组织里却可能是一次昂贵的、收不回来的承诺。

彼得·伯恩斯坦在《与天为敌》里追溯风险概念的成形，把现代与过去的分界放在人类是否把未来视为可掌握、可选择的对象，并把风险描述为一种选择而非命运。顺着这个命题再问一步就能看到：「可选择」其实隐含一个前提——选错了还能重来。这个前提在风险管理的叙事里通常被当作背景，而它恰恰最该被单独检查。把未来变成选择，与把选择变成可修正的选择，是两件不同的事。

## 三、为什么可逆的事反而被过度审批

可逆决定有一个共同特征：它的错误**可见、短期、可归责**。上线后出问题，日志、时间线与责任人一应俱全，复盘会能开得很具体。错误留下了记录，制度于是为它加审批、加签字、加检查表。

不可逆决定的后果恰好相反：延迟、分散、难以归因。等到影响显现，当初的提案、批复与在场者早已散去，代价摊在许多人身上，很难指向某一个具体的错判。于是审批强度并不跟着后果规模走，而是跟着**错误被记录的方式**走——容易被记录的错被反复防备，不容易被记录的错被轻轻放过。

这里要同两种相近的说法划清界限。它不是「责任稀释」：多人分摊、最后谁都不必回答，讲的是组织形态；这里的决策者权限清楚，只是错误的证据出现得太晚。它也不是「警告说得太早」：那讲的是正确意见与时机之间的错位；这里讲的是可归责性的时间差。三者都涉及「谁该负责」，但成因不同，不能互相替代解释。

菲利普·泰洛克在《超预测》中强调以概率表达判断、随新信息持续修正，并把优秀预测者描述为不断改进、没有最终版本的状态。这套方法的价值依赖一个条件：判断可以被修订，而且修订能改变后续行动。一旦决定执行之后无法撤回，持续修正就只剩记录价值——预测变得更准，结果却不再跟着变。追求准确率，前提是准确率还能兑换成第二次机会；把校准用在一次定生死的选择上，等于把一件为可重复环境设计的工具放进了不可重复的环境。

## 四、把可逆性折算成成本：同一道门槛标了两个价

可逆的决定相当于持有一份「重来的权利」；未来越不确定，这份权利越值钱。不可逆的决定相当于把这份权利一次性卖掉，换来当下的确定。两者不该用同一道审批门槛、同一个折现率去衡量，但多数组织正是这么做的：所有提议排队过同一套流程，按金额或职级分级，唯独不按能否撤回分级。

后果是双重的。在可逆事务上，注意力与审批带宽被耗尽，本可以用小错换信息的试验被拖成漫长的论证；在不可逆事务上，「先做起来再说」把最贵的那份权利无偿交了出去。这不是判断失误，而是**定价失误**。

塞思·卡拉曼在《安全边际》里把重心放在以明显低于内在价值的价格买入、为下行留出余量；纳西姆·塔勒布在《反脆弱》里区分了能从波动中获益的结构与一旦触及就出局的结构，并强调承担后果的人应当与作出决定的人一致。两本书路径不同，却指向同一条朴素的算术：在存在出局风险的地方，提高命中率带来的收益，远小于保住继续参与资格带来的收益。一次判断再准，若它的错误会终结参与，那么准与不准之间的差别并不像直觉以为的那么大。

这里也要与另外两个主题分开。「余量的消失」讲的是冗余被效率挤掉，「控制的错觉」讲的是越想掌控越容易过度干预；本节讲的不是储备多少，也不是干预多少，而是同一套程序被套用在两类结构不对称的决定上，因而给它们标了同一个价。

## 五、反方：不可逆并非纯粹的风险，它也是一种承诺装置

最强的反方是：若按上述逻辑，组织应当永远偏好可逆，那么一切需要他人配合的事都做不成。婚姻、宪法、长期投资、公开立场、公开标准，其价值恰恰来自不能轻易撤回。别人愿意投入、愿意按这个前提重新安排自己的计划，正是因为判断这次不会翻案。把可逆性制度化地交出去，是协作得以发生的前提之一。「尽量保持可逆」因此不是通用最优解；把它当成通则，会得到一种永远不承诺、因而永远没人跟随的组织。

第二个反方更贴近日常：可逆性经常被高估。第一次决定公布之后，别人已经据此签了合同、改了产线、培训了人员；回滚代码容易，回滚这些调整极难。把「技术上可逆」当作「实际上可逆」，实质是把撤回成本转嫁给没有参与拍板的人。于是真正被忽略的不是技术，而是分配——谁在不知不觉中替这次「可撤回」买了单。

还有一层限度必须承认：有些不可逆无法事前识别，只能在事后被讲述成「当初本可避免」。要求事前穷尽可逆性判断，会催生又一套形式化清单，并把事后归因误当成先见之明；清单填得越满，越容易让人以为风险已经被处理。因此目标既不是最大化可逆性，也不是取消审批，而是让不可逆被**明确地选择一次**，而不是默认地发生。

## 六、落到判断：三个问题与三类程序

在决定之前先问三句话。第一，撤回时原来的状态还在不在？第二，有多少人已经据此改变了自己的计划？第三，撤回的成本由谁承担，是否就是当初拍板的人？这三问分别对应状态锁、协调锁与责任的归属，缺一项就会把不可逆误判成「再改回来就好」。

据此可以把决定分成三类，各配一套程序：

- **可试**：三问都轻。降低审批层级、缩短周期，并明确写出停止条件与回滚触发点。这一类的目标不是避错，而是用小错换信息。
- **需承诺**：有状态锁或协调锁。提高证据门槛、拉长冷却期，把「本决定不可撤回」写成文件里的显式条款，并要求列明若判断错了由谁承担。
- **需退出条款**：主要是窗口锁。不追求一次判断正确，而是预先约定复核时点与退出路径，把一次性的不可逆拆成若干可复核的段落。

关键在于分类依据。金额、职级与影响人数都是容易填写的字段，可逆性不是，所以流程里通常没有这一栏；而缺了这一栏，前两类决定就会被同一道门槛处理。补上它，比追加一轮论证更有效。三类程序也各有代价：可试一类会制造更多小故障，需承诺一类会拖慢真正的机会，退出条款一类依赖有人肯在到期时真的复核。承认这些代价，比宣称分类能消除错误更诚实。

回到开头。判断力常被理解为提高准确率，但准确率只在能重来的地方才产生复利。真正需要先回答的不是「这个决定对不对」，而是「如果错了，还有没有第二次」。把这句话放在流程第一栏，可逆的事才敢试，不可逆的事才配得上更慢、更郑重的程序。`,
  content_en: `## I. Two Kinds of Error Do Not Sit on the Same Axis

A feature that can be rolled back usually passes a requirements review, a test report, a staged rollout plan and three signatures. The same organisation will close a production line, sign a ten-year exclusive supply agreement, or clear a site for a single irreversible rebuild in **one meeting**. The consequences differ by more than an order of magnitude; the time spent arguing is often inversely related.

The question worth pressing is this: if judgement means getting things right, why does the decision that most needs to be right receive the least thought? Three ready explanations can be set aside. It is not lack of information — irreversible choices typically have less of it, yet that scarcity does not trigger more searching or more questions. It is not temperament — the same people behave quite differently in the two settings. Nor is the organisation broadly risk-seeking: its caution over reversible matters borders on paralysis, so caution is not in short supply; it is simply deployed in the wrong place.

What remains is the **temporal structure** of the choice: whether a mistake can be undone. Being right and being able to try again are separate axes, and most decision procedures are built along only the first. Once the two are conflated, a small error that leaves a record looks expensive, while a vast error that surfaces years later looks cheap.

## II. Reversibility Is Not a Matter of Degree but of Three Distinct Locks

"Can this be undone" is usually treated as a matter of degree: how much cost, how much time, how much embarrassment. A more useful move is to treat it as three independent locks.

The first is a **state lock**: does the original state still exist? Deleted code can be restored; capital that has gone to zero cannot; a cleared habitat cannot; a position stated in public cannot. The second is a **coordination lock**: have other people already changed their plans around the decision? Once an internal standard is published, procurement, contract terms and training materials adjust to it, and "changing it back" no longer means editing one document but moving everyone who has acted on it. The third is a **window lock**: some openings occur once, and after they close even standing still is no longer available as an option.

Most misjudgements come from checking only the first lock. Technical rollback is read as actual reversibility, while the coordination and window locks quietly transfer the cost to other people and to later years. The systems-thinking tradition has long insisted that feedback arrives with delay and that the effects of an intervention tend to appear elsewhere and much later; *Thinking in Systems* is precisely an attempt to put those lags and feedback loops on the table. That also explains a contrast: "let us try it and see" is nearly free in software, yet inside an organisation it can be an expensive commitment that cannot be recalled.

In *Against the Gods*, Peter Bernstein traces how the concept of risk took shape, locating the boundary between the modern world and earlier ones in whether the future came to be seen as something that could be grasped and chosen, and describing risk as a choice rather than a fate. One step further from that claim reveals an assumption: a choice only counts as a choice if a wrong one can be made again. That assumption usually sits in the background of risk management, and it is exactly the part that deserves separate inspection. Turning the future into a choice and turning a choice into a revisable choice are two different achievements.

## III. Why Reversible Matters Are Over-Approved

Reversible decisions share one feature: their mistakes are **visible, near-term and attributable**. When a release goes wrong, logs, timelines and named owners are all present, and a post-mortem can be very specific. The error leaves a record, and the institution responds by adding approvals, signatures and checklists.

The consequences of irreversible decisions run the other way: delayed, dispersed, hard to attribute. By the time the effects appear, the original proposal, its sign-off and the people in the room have scattered, and the cost is spread across many hands, so it is difficult to point to a single wrong judgement. Approval intensity therefore does not track the size of the consequence; it tracks **the way an error gets recorded**. Errors that are easily documented are defended against repeatedly; errors that are not easily documented are let through lightly.

Two neighbouring arguments should be kept distinct here. This is not the dilution of responsibility, where many people share a task and in the end nobody has to answer — that is a question of organisational form. Here authority is perfectly clear; the evidence simply arrives too late. Nor is it the problem of warnings issued too early, which concerns correct advice meeting the wrong moment. The issue here is a time lag in attributability. All three concern who should answer, but their causes differ and cannot substitute for one another.

In *Superforecasting*, Philip Tetlock argues for expressing judgements as probabilities and revising them continuously as evidence arrives, describing the best forecasters as being in a state of permanent revision, with no final version. The value of that method depends on a condition: a judgement can be revised, and the revision can still change what happens next. Once a decision has been executed and cannot be withdrawn, continuous revision retains only documentary value — the forecast grows more accurate while the outcome stops responding to it. The pursuit of accuracy presupposes that accuracy can still be converted into a second chance. Applying calibration to a one-shot, all-or-nothing choice puts a tool designed for repeatable environments into an environment that does not repeat.

## IV. Pricing Reversibility: One Threshold, Two Prices

A reversible decision is equivalent to holding a right to start over; the more uncertain the future, the more that right is worth. An irreversible decision is equivalent to selling that right once, in exchange for present certainty. The two should not be measured by the same approval threshold or the same discount rate, yet most organisations do exactly that: every proposal queues for the same process, graded by amount or by rank, never by whether it can be undone.

The consequence is double. On reversible matters, attention and approval capacity are consumed, and experiments that could have traded small errors for information are stretched into long arguments. On irreversible matters, "let us start and adjust later" hands away the most valuable right for nothing. This is not a failure of judgement but a failure of **pricing**.

In *Margin of Safety*, Seth Klarman puts the weight on buying well below intrinsic value and leaving room for the downside. In *Antifragile*, Nassim Taleb distinguishes structures that gain from volatility from those that exit the game the moment a boundary is touched, and insists that those who bear the consequences should be the ones who decide. The two books take different routes to the same plain arithmetic: where the risk of being knocked out exists, the gain from improving one's hit rate is far smaller than the gain from keeping the right to stay in the game. However accurate a single call may be, if being wrong ends participation, the difference between accurate and inaccurate matters much less than intuition suggests.

Two other themes should also be separated here. The disappearance of slack concerns redundancy being squeezed out by efficiency; the illusion of control concerns how the drive to master outcomes produces over-intervention. The present point is about neither how much reserve to hold nor how much to intervene, but about one procedure being applied to two structurally asymmetric kinds of decision, and thereby tagging them with the same price.

## V. The Countercase: Irreversibility Is Also a Device for Commitment

The strongest objection is this: if the argument above holds, an institution should always prefer the reversible, and then nothing that requires other people's cooperation could ever be built. Marriages, constitutions, long-horizon investments, public positions and published standards derive their value precisely from not being easily withdrawn. Others commit and rearrange their plans because they judge that the decision will not be reopened. Giving up reversibility in a deliberate, institutional way is one of the preconditions of cooperation. "Keep everything reversible" is therefore not a general optimum; elevated into a rule, it produces an organisation that never commits and is therefore never followed.

A second objection is closer to daily work: reversibility is routinely overestimated. After the first decision is announced, other people have signed contracts, retooled lines and trained staff. Rolling back code is easy; rolling back those adjustments is not. Treating "technically reversible" as "actually reversible" is, in effect, a transfer of the cost of withdrawal to people who were not in the room. What gets overlooked is not technology but distribution: who quietly paid for the claim that this could be undone.

A further limit has to be conceded. Some irreversibilities cannot be identified in advance and can only be narrated afterwards as "it could have been avoided". Demanding an exhaustive pre-mortem on reversibility breeds another formal checklist and encourages hindsight to be mistaken for foresight; the fuller the form, the easier it is to believe the risk has been handled. The aim, then, is neither to maximise reversibility nor to abolish review, but to ensure that irreversibility is **chosen explicitly once** rather than occurring by default.

## VI. A Judgement: Three Questions and Three Procedures

Three questions belong before the decision. First, when this is withdrawn, will the original state still be there? Second, how many people have already changed their plans because of it? Third, who bears the cost of withdrawal, and is that the same person who made the call? The three map onto the state lock, the coordination lock and the ownership of consequences; omit any one of them and irreversibility gets misread as "we can always change it back".

On that basis, decisions fall into three classes, each with its own procedure:

- **Try it**: all three answers are light. Lower the approval level, shorten the cycle, and write down a stopping condition and a rollback trigger in advance. The goal here is not to avoid mistakes but to buy information with small ones.
- **Commit**: a state lock or a coordination lock is present. Raise the evidential bar, lengthen the cooling-off period, state explicitly in the document that this decision cannot be withdrawn, and require a named answer to what happens if the call proves wrong.
- **Pre-arrange an exit**: the window lock dominates. Do not aim to be right once; agree in advance on review dates and an exit path, breaking a single irreversible step into several revisable segments.

What matters is the basis of classification. Amount, seniority and headcount are easy fields to fill in; reversibility is not, which is why the column is usually missing from the form. Without it, the first two classes pass through the same threshold. Adding the column does more than adding another round of argument. Each procedure also carries a cost: the first class generates more small failures, the second slows down genuine opportunities, and the third depends on someone actually showing up at the review date. Admitting those costs is more honest than claiming the classification eliminates error.

Back to the opening contrast. Judgement is usually understood as improving accuracy, but accuracy compounds only where a second attempt is possible. The question that needs answering first is not "is this decision right" but "if it is wrong, is there another go". Put that question in the first column of the process, and reversible matters become safe to try, while irreversible ones finally receive the slower and more deliberate procedure they deserve.`,
};
