export const article = {
  slug: 'the-practice-that-automation-cancels',
  title_zh: '被取消的练习：为什么自动化越成功，人的失误越致命',
  title_en: 'The Practice That Automation Cancels: Why Better Automation Makes Human Error Worse',
  subtitle_zh:
    '自动化的经典目标是把人从系统里移出去。但被移走的是简单的那一半，留下的恰好是最难的：监控、诊断、接管。这三件事只能靠反复做获得，而反复做的机会恰好被自动化取消了。一九八三年的一份六页论文与二〇〇九年的一次失速，指向同一个设计错误',
  subtitle_en:
    'The classic goal of automation is to remove the human from the system. What gets removed is the easy half; what remains is the hardest part — monitoring, diagnosis, takeover. All three can only be learned by doing, and doing is precisely what automation abolishes. A six-page paper from 1983 and a stall in 2009 point to the same design error',
  category: 'ai',
  tags: ['ai', 'technology', 'risk', 'systems-thinking', 'computing'],
  related_books: [
    'the-second-machine-age',
    'human-compatible',
    'the-alignment-problem',
    'cybernetics',
    'sciences-of-the-artificial',
    'the-design-of-everyday-things',
  ],
  related_topics: ['ai', 'risk', 'systems-thinking'],
  publish_date: '2026-10-21',
  lang: 'both',
  content_zh: `## 一、三分半钟

2009 年 6 月 1 日凌晨，法国航空 447 号班机从里约热内卢飞往巴黎。机型是空中客车 A330-203，机上 216 名乘客、12 名机组人员。

进入赤道辐合带后，机外低温与高湿让皮托管结冰，空速读数失效。自动驾驶仪按设计断开——它无法在不知道自己速度的情况下继续工作。控制权交回驾驶舱。

接下来发生的事，法国航空事故调查局（BEA）在 2012 年 7 月的最终报告里逐条还原：操纵飞机的副驾驶把侧杆向后拉，飞机爬升，速度衰减，进入失速。从自动驾驶断开到坠入大西洋，约三分半钟。

有一处细节值得停一下。失速警告响过。但当机头抬到 15 度、前进速度掉到 60 节以下时，警告**停了**——因为攻角数据在那个速度下已不再有效。等到速度数据恢复、警告重新响起，飞行员面对的是一个互相矛盾的驾驶舱：一个刚刚安静过的警报，一堆彼此冲突的读数，和一片没有任何地面参照的夜空。

引这个细节不是为了复盘一次空难的责任。BEA 的结论、司法程序、两版不同的调查报告，都不是本文要处理的东西。要处理的是一个更窄的问题：**那个在关键时刻该告诉人「你正在失败」的装置，恰好依赖那条正在失效的通道。**

这是自动化的一个结构性特征，不是某一家公司的软件缺陷。

## 二、被移走的是容易的那一半

1983 年，伦敦大学学院的心理学家莉桑·班布里奇（Lisanne Bainbridge）在《自动化》（Automatica）第 19 卷第 6 期发表了一篇六页的论文，题为《自动化的讽刺》（Ironies of Automation）。它后来成为人因工程领域被引用最多的文献之一。

她的出发点是一句几乎像悖论的判断：**控制系统越先进，人类操作员的贡献可能越关键。**

这不是修辞。她给出了两条推理。

第一条关于设计者的意图。自动化的经典目标是把人从系统里移出去——操作员不可靠、会疲劳、会分心，所以应该被替换。但设计者移走的，只是他能想到怎么自动化的那部分。剩下那些他想不到怎么自动化的任务，仍然留给人。于是出现第一个讽刺：**试图消除操作员的设计，最终把操作员变成了「处理设计者没想到的情况」的岗位**，而且几乎不考虑为这个岗位提供支持。

第二条关于任务的性质。班布里奇的原话是：自动化通过拿走任务中容易的部分，使人任务中困难的部分变得更困难。

这句话值得展开。自动化接管了稳态运行——保持温度、维持航向、按节拍焊接。留下的是三件事：**监控**（系统还正常吗）、**诊断**（不正常的话，哪里不正常）、**接管**（把控制权拿回来并稳住）。这三件事在技能结构上完全不同，但它们有一个共同点：都只能通过反复做来获得，而反复做的机会恰好被自动化取消了。

## 三、练习为什么不能靠课堂

班布里奇把技能拆成三层，每一层的退化机制都不一样。

**第一层是身体技能。** 她引用 Edwards 与 Lees 1974 年编的《过程控制中的人工操作员》：有经验的操作员做一次设定值变更，用最少的动作，让过程输出平稳而迅速地移到新水平；没有经验的操作员则在目标值附近来回振荡。差别不在知识，在手感——对增益和时机的把握。而这类东西不用就退，退得很快。一个曾经熟练、如今只负责监控自动化系统的操作员，实际上已经是一个不熟练的操作员。他一旦接管，可能把整个过程搅乱。

**第二层是认知技能。** 长期知识要靠使用频率才能被提取——她举的例子很朴素：想想你在学校里考完试就再没碰过的科目。而「工作记忆」这一层更麻烦：在线决策依赖的不是原始数据，而是操作员对过程当前状态的预测与判断，这些需要时间积累。她记录了一个具体数字：手动操作员通常会在接管前一刻钟到半小时进入控制室，为的是「对过程正在做什么有感觉」。一个必须立刻行动的接管者，只能在最少的信息基础上行动。

**第三层是监控，而这一层在生理上就不成立。** 她引用 Mackworth 1950 年代的警觉性研究：即使一个高度积极的人，也无法对一个很少出现的信息源保持有效的视觉注意超过半小时。这意味着「人作为罕见异常的监控者」这个岗位设计，从一开始就违背了人的基本参数。她的建议是让自动报警系统承担这件事——然后立刻追问：报警系统坏了，谁来发现？她提到一个更荒诞的做法：要求操作员定时抄表。而人可以在完全不注意数字含义的情况下把数字抄下来。

然后是整篇论文里最锋利的一句。如果计算机被用来做决策，恰恰是因为人的判断和直觉推理在这些情况下不够用；那么人凭什么判断计算机的决策是否「可接受」？班布里奇的结论是：**人类监控者被赋予了一项不可能完成的任务。**

最后是那个字面意义上的讽刺：**最成功的自动化系统——极少需要人工干预的那些——恰恰需要最大的人力培训投入。** 因为干预越少，人越没有机会练；而一旦需要干预，那一定是最难的一次。

## 四、三条反方

这套论证容易被读成「所以应该少自动化」。这是误读，而且会让它失去力量。至少有三条反方必须认真对待。

**第一条：数据反方。** 自动化总体上让系统更安全。商业航空的致命事故率在过去数十年里下降了不止一个数量级，这个过程与自动化程度提高是同时发生的。班布里奇没有否认这一点，她否认的是收益的平均分配。自动化把风险从「高频小错」转移到「低频大错」：日常操作的失误被系统吸收掉了，但剩下的那一次，人是在最没有准备的状态下接手的。低频大错的期望值可能仍然远低于高频小错——所以「减少自动化」不是结论，**「重新分配练习」才是。**

**第二条：归因反方。** 诺曼在《设计心理学》里反复论证：被称作「人为失误」的东西，多数是设计没有把人的局限算进去。把 AF447 称作「飞行员失误」在技术上没错，在解释上却几乎无用——那两名飞行员不是不称职，他们是在一个读数自相矛盾、告警在关键时刻静音、且从未在真实高度练过失速改出的驾驶舱里做判断。这一条既削弱了「人不可靠」的叙事，也削弱了「换更训练有素的人」这个解法：**问题不在人的品质，在界面与交接的设计。**

**第三条：彻底自动化反方。** 既然人监控不了，那就别让人监控。这条路在相当多领域是对的：防抱死刹车、电网的继电保护、飞机的电传操纵内环，人退出是净收益。但它有一个前提——**异常必须可穷举**。只要系统还会遇到设计者没想到的情况，就需要一个能处理「没想到」的东西。而西蒙在《人工科学》里说过一句与此相关的话：一只蚂蚁的行走路线看起来很复杂，但蚂蚁本身很简单，复杂性主要在它所处的环境里。同理，一个操作员看起来胜任，往往是因为环境（在这里是自动化）替他承担了大部分工作。**当环境突然撤走，剩下的那个人立刻显出他本来的简单。** 而「处理没想到」恰好是唯一无法被预先训练的功能——它只能出现在被真实情境反复打磨过的人身上。

## 五、把练习写进设计

所以真正的问题不是「人该不该在环里」，而是三个可以逐项检查的设计参数。

**判据一：异常频率。** 如果某类异常一年只出现一次，就不要设计一个「熟练接管者」的岗位——那个人不存在。设计必须假定接管者是不熟练的：界面要能让一个陌生人在三十秒内建立情境意识，而不是让一个专家更快地建立。这两条要求经常互相冲突，而多数系统选择了后者。

**判据二：接管时间窗。** 班布里奇给过一条清晰的界线。几秒钟内完成的故障（压水堆的某些瞬变），人来不及，必须自动响应，无论投入多大；几分钟的故障，可以靠过度学习的手动反应争取时间；几十分钟的，才有条件让人进入状态。**时间窗决定人该不该在环里，而不是反过来。**

**判据三：反馈是否可读。** 她指出一个容易被忽略的机制：自动控制会**伪装**故障——它通过调节被控变量把异常吸收掉，于是趋势在被推到控制范围之外以前都不明显。所以监视的对象不能只是「是否越限」，而必须是「变量的运动是否不寻常」。这一条对今天的软件系统同样成立：一个悄悄重试、悄悄降级的服务，会把故障藏到它再也藏不住的那一刻。

**这三条在今天不是航空业的旧闻。** 当 Agent 接管了检索、起草、初筛，人剩下的是判断「这个输出对不对」——而那正是练习机会最少的一项。克里斯蒂安在《人机对齐》里记录的那个反复出现的模式值得记住：系统会精确地优化被写下来的目标，而没有被写下来的部分就悄悄消失了。拉塞尔在《AI 新生》里给出的方向是对的——机器不应对人类偏好持有确定信念，而应保持不确定，并在人不满意时让步。但这个方案把负担移到了同一个地方：**人必须能够表达不满意。** 而一个从不练习判断的人，凭什么知道自己不满意？

**限度也要说清。** 这条论证只对「低频、高后果、反馈延迟」的场合成立。在高频、低后果、反馈即时的场合——拼写检查、路径规划、推荐排序——自动化净收益明确，人退出是好事，不必为此惋惜。而正因为边界如此清楚，它才是一个设计问题，不是一个关于人机关系的立场问题。

班布里奇那篇论文的结尾很克制：她希望文章说明了自动化不一定能消除这些困难。四十三年过去，这句话的适用范围从控制室扩到了整个知识工作。被取消的从来不是工作，是练习。而练习一旦被取消，就不会在需要它的那一刻回来。`,
  content_en: `## I. Three and a Half Minutes

Shortly after midnight on 1 June 2009, Air France 447 left Rio de Janeiro for Paris. The aircraft was an Airbus A330-203 carrying 216 passengers and 12 crew.

Entering the intertropical convergence zone, the cold, moisture-laden air froze the pitot probes. Airspeed readings failed. The autopilot disconnected, exactly as designed: it cannot fly an aircraft whose speed it does not know. Control returned to the cockpit.

What followed is reconstructed line by line in the French aviation accident bureau's final report of July 2012. The pilot flying pulled the sidestick back. The aircraft climbed, speed decayed, and it stalled. From autopilot disconnection to the surface of the Atlantic: about three and a half minutes.

One detail is worth pausing on. The stall warning did sound. But when the nose reached fifteen degrees and forward speed fell below sixty knots, the warning **stopped** — angle-of-attack data is no longer valid at that speed. By the time speed data returned and the warning resumed, the pilot faced a cockpit arguing with itself: an alarm that had just fallen silent, a set of contradictory readings, and a night sky with no ground reference anywhere in it.

I raise this not to re-litigate an accident. The bureau's conclusions, the judicial proceedings, the two competing reports — none of that is the subject here. The subject is a narrower question: **the device that was supposed to tell the human "you are failing" depended on the very channel that was failing.**

That is a structural property of automation, not a software defect at one company.

## II. The Easy Half Is What Gets Removed

In 1983, Lisanne Bainbridge, a psychologist at University College London, published a six-page paper in Automatica, volume 19, number 6, titled "Ironies of Automation." It has since become one of the most cited documents in human factors engineering.

Her starting point is a claim that reads like a paradox: **the more advanced a control system is, the more crucial the contribution of the human operator may become.**

This is not rhetoric. She offers two lines of reasoning.

The first concerns the designer's intention. The classic goal of automation is to remove the human from the system — operators are unreliable, they tire, they lose attention, so they should be replaced. But what the designer removes is only the portion he could figure out how to automate. The tasks he could not figure out remain with the human. Hence the first irony: **a design intended to eliminate the operator ends up assigning the operator the job of handling whatever the designer did not anticipate** — with almost no thought given to supporting that job.

The second concerns the nature of the remaining work. Automation, Bainbridge writes, takes away the easy parts of the task and makes the difficult parts more difficult.

That sentence deserves unpacking. Automation absorbs steady-state operation: holding a temperature, maintaining a heading, welding at cadence. What remains is three things — **monitoring** (is the system still behaving), **diagnosis** (if not, where), and **takeover** (retrieve control and stabilise). These are structurally different skills, but they share one property: all three can only be acquired by doing them repeatedly, and repeated doing is precisely what automation abolishes.

## III. Why Practice Cannot Be Taught

Bainbridge separates skill into three layers, each with its own mechanism of decay.

**The first is physical skill.** She cites Edwards and Lees' 1974 volume, The Human Operator in Process Control: an experienced operator making a set-point change uses the fewest possible actions and moves the process output smoothly and quickly to the new level; an inexperienced one oscillates around the target. The difference is not knowledge but feel — a sense of gain and timing. And this decays when unused, quickly. An operator who was once skilled and now merely supervises an automated plant is, in practice, an unskilled operator. If he takes over, he may throw the whole process into turmoil.

**The second is cognitive skill.** Long-term knowledge is retrieved in proportion to how often it is used — her example is disarmingly plain: think of any subject you have not touched since passing the exam. Working memory is worse still: on-line decisions rest not on raw data but on the operator's predictions and judgments about the current state of the process, and those take time to accumulate. She records a concrete number: manual operators typically arrive in the control room a quarter of an hour to half an hour before taking over, in order to get a feel for what the process is doing. A takeover that must happen immediately can only be made on the thinnest possible base of information.

**The third is monitoring, and this layer is physiologically impossible.** She cites Mackworth's vigilance research from the 1950s: even a highly motivated person cannot sustain effective visual attention to a rarely occurring signal for more than about half an hour. This means the very job design of "human as monitor of rare anomalies" violates basic human parameters from the outset. Her recommendation is to let automatic alarm systems carry that function — and then she immediately asks: when the alarm system fails, who notices? She mentions an even more absurd practice: requiring operators to keep a periodic log. People can copy down numbers while paying no attention whatsoever to what the numbers are.

Then comes the sharpest line in the paper. If a computer is used to make decisions precisely because human judgment and intuitive reasoning are inadequate in these situations, on what basis is the human supposed to judge whether the computer's decision is "acceptable"? Her conclusion: **the human monitor is given an impossible task.**

And finally the irony in its literal sense: **it is the most successful automated systems — the ones that rarely need manual intervention — that may require the greatest investment in human operator training.** The less intervention is needed, the less chance there is to practise; and when intervention is finally needed, it will be the hardest case there is.

## IV. Three Objections

The argument is easily read as "therefore automate less." That is a misreading, and it drains the argument of its force. At least three objections deserve serious weight.

**First, the data objection.** Automation makes systems safer overall. The fatal accident rate in commercial aviation has fallen by more than an order of magnitude over recent decades, and that decline coincided with increasing automation. Bainbridge does not deny this. What she denies is that the benefit is evenly distributed. Automation shifts risk from frequent small errors to rare large ones: everyday slips get absorbed by the system, but the remaining case arrives when the human is least prepared. The expected cost of rare large errors may still be far below that of frequent small ones — so "automate less" is not the conclusion. **"Redistribute the practice" is.**

**Second, the attribution objection.** Norman argues throughout The Design of Everyday Things that most of what gets called "human error" is design that failed to account for human limits. Calling AF447 "pilot error" is technically accurate and explanatorily almost useless: those two pilots were not incompetent, they were making judgments in a cockpit whose readings contradicted one another, whose alarm fell silent at the decisive moment, and in which neither had ever practised a stall recovery at that altitude. This objection weakens the "humans are unreliable" narrative — and it equally weakens the proposed remedy of "hire better-trained people." **The problem is not the quality of the person; it is the design of the interface and the handover.**

**Third, the full-automation objection.** If humans cannot monitor, then stop asking them to. In many domains this is right: anti-lock brakes, protective relays on power grids, the inner control loops of fly-by-wire. Human withdrawal is a net gain. But it has a precondition — **the anomalies must be enumerable.** As long as a system can still meet situations its designers did not imagine, something must be able to handle the unimagined. Simon offers a related observation in The Sciences of the Artificial: the path of an ant looks complex, but the ant is simple; the complexity resides largely in the environment. By the same logic, an operator looks competent largely because the environment — here, the automation — is carrying most of the work. **Remove the environment and the remaining person immediately shows how simple he always was.** And handling the unimagined is precisely the one function that cannot be trained in advance. It appears only in people who have been repeatedly shaped by real situations.

## V. Write the Practice Into the Design

So the real question is not whether the human belongs in the loop. It is three design parameters that can be checked one at a time.

**Criterion one: anomaly frequency.** If a class of anomaly occurs once a year, do not design a post for a "skilled takeover operator" — that person does not exist. The design must assume an unskilled taker: the interface should let a stranger build situational awareness in thirty seconds, rather than letting an expert build it faster. These two requirements frequently conflict, and most systems choose the second.

**Criterion two: the takeover window.** Bainbridge draws a clear line. Failures that unfold in seconds — certain transients in a pressurised water reactor — leave no time for a human, and must be answered automatically whatever the cost. Failures measured in minutes can be met by over-learned manual responses that buy time. Only failures measured in tens of minutes give a person room to get into a state. **The window determines whether the human belongs in the loop, not the reverse.**

**Criterion three: whether the feedback is legible.** She identifies an easily overlooked mechanism: automatic control can **disguise** failure. By adjusting the controlled variables, it absorbs the anomaly, so the trend remains invisible until it is pushed outside the control range. The object of monitoring therefore cannot be "has a limit been crossed" but "is the movement of the variables itself unusual." This holds for software as much as for process plants: a service that quietly retries and quietly degrades will hide its failure until the moment it can hide it no longer.

**None of this is aviation archaeology.** When an agent takes over retrieval, drafting, and first-pass screening, what remains to the human is judging whether the output is right — the very skill with the fewest opportunities to practise. The pattern Christian documents in The Alignment Problem is worth keeping: systems optimise precisely the objective that was written down, and whatever was not written down quietly disappears. Russell's direction in Human Compatible is correct — a machine should not hold definite beliefs about human preferences but remain uncertain and defer when the human is dissatisfied. But that solution moves the burden to the same place: **the human must be able to express dissatisfaction.** And by what right does someone who never practises judgment know that he is dissatisfied?

**The limits deserve stating too.** This argument holds only for settings that are infrequent, high-consequence, and slow to give feedback. Where events are frequent, consequences small, and feedback immediate — spell-check, route planning, recommendation ranking — the net benefit of automation is unambiguous, and human withdrawal is a good thing, not a loss to be mourned. And because that boundary is so clear, this is a design question, not a position on the proper relation between people and machines.

Bainbridge closes her paper with restraint: she hopes it has shown that automation does not necessarily eliminate these difficulties. Forty-three years on, the scope of that sentence has widened from the control room to knowledge work entire. What gets cancelled was never the job. It was the practice. And practice, once cancelled, does not come back at the moment it is needed.`,
};
