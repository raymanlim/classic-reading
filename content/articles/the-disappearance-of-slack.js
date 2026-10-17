export const article = {
  slug: 'the-disappearance-of-slack',
  title_zh: '余量的消失：为什么最该留下的东西，总是最先被优化掉',
  title_en: 'The Disappearance of Slack: Why the Thing We Most Need Is Always the First to Be Optimized Away',
  subtitle_zh:
    '安全系数、备用产能、现金缓冲——这些东西只在灾难没有发生的时候起作用，而灾难没有发生恰好使它们显得多余。真正的问题不是「要不要留余量」，而是余量能不能被看见、被定价、被测试',
  subtitle_en:
    'Safety factors, spare capacity, cash buffers — these things only do their work on the days when nothing goes wrong, and a day when nothing goes wrong is exactly what makes them look superfluous. The real question is not whether to keep slack but whether slack can be seen, priced, and tested',
  category: 'business',
  tags: ['management', 'organization', 'risk', 'systems-thinking', 'progress'],
  related_books: [
    'structures-or-why-things-dont-fall-down',
    'antifragile',
    'thinking-in-systems',
    'manias-panics-and-crashes',
    'chip-war',
  ],
  related_topics: ['management', 'risk', 'systems-thinking'],
  publish_date: '2026-10-17',
  lang: 'both',
  content_zh: `## 一、一个从不出现在账上的东西

1954 年，两架彗星客机在飞行中解体。这是世界上第一种投入商业运营的喷气式客机，事故调查与随后的全尺寸机身增压疲劳试验把原因指向一个当时尚未被工程界充分重视的现象：增压机身的蒙皮在反复起降中产生疲劳裂纹，而裂纹的起点在方形舷窗与铆钉孔附近——那里应力集中。此后客机的舷窗改成了圆角。

早在 1920 年，格里菲斯（A. A. Griffith）就在《皇家学会哲学汇刊》A 辑第 221 卷上给出了这件事的物理基础。他研究的是玻璃：按分子键强度估算，玻璃应该比实测值坚固得多；差距的来源是材料内部无法避免的微小裂纹，裂纹尖端会把应力放大许多倍。**强度不是材料的属性，而是「材料加上缺陷」的属性。**

工程界的回应不是消除缺陷——那不可能——而是留出余量：让设计载荷乘上一个大于 1 的系数，让许用应力低于实测强度，让结构在出现一个没被算到的缺陷、一次意外的超载、一个错误假设时，不至于立刻失效。

值得注意的是，**安全系数本身不做任何事**。它不产生推力，不传递信号，不参与任何功能。它唯一的作用是在事情出错的那一天，把「失效」换成「仍能工作」。于是问题变得具体：**如果余量这么关键，为什么它总是第一个被削掉的东西？**

## 二、余量的价值只存在于反事实里

一个系统运行良好，我们观察到的事实是「没有出事」。而「没有出事」无法归因：它可能是设计得好，可能是运气好，也可能是因为余量吸收了本来会造成事故的偏差。这三种解释在观测上完全等价。

会计学对此有精确的处理方式：**没有发生的成本不记账。** 一台备用发电机在停电那天值多少钱，事前无法入账；它在报表上唯一确定的表现形式是购置成本与折旧。也就是说，冗余在账上永远以负号出现，而它带来的收益以「什么都没有发生」的形式存在。

这一不对称带来三个后果，而它们都不是道德问题，是观测问题：

1. 削减余量的收益立刻可见（成本下降、周转加快、指标改善），保留余量的收益不可见（什么都没发生）。
2. 削减的代价延迟出现，而且出现时不署名——灾难到来时，做决定的人往往已经离开那张桌子。
3. 因此，任何以效率为核心的考核体系，都会系统性地高估余量的成本、低估它的收益。这不是因为管理者短视，而是因为他们能看到的东西，本来就只有一半。

## 三、削掉余量的三条路径

### 第一条：效率叙事把闲置读成浪费

精益生产、零库存、产能利用率、人均产出——这一整套语言有一个共同的隐含前提：未被使用的资源就是被浪费的资源。它确实带来了巨大的成本下降，也确实在冲击面前暴露了脆弱。2021 年全球芯片短缺期间，多家汽车厂因缺少几美元的芯片而停掉整条产线：问题不在于它们买不起芯片，而在于按零库存原则，它们手里从来没有多出来的那一点。

### 第二条：成功本身会重新标定「正常」

梅多斯在《[系统之美](/zh/books/thinking-in-systems/)》里描述过一类结构，她称之为「目标侵蚀」：实际表现与期望之间的差距，不是通过提高表现来消除，而是通过降低期望来消除。安全记录越长，被认为「正常」的余量就越少——因为已经连续十年没出事，那部分看起来就是白留的。

这是余量最阴险的削减方式：它不是被人砍掉的，而是被成功一点点重新定价的。**每一次没有出事的年份，都在为下一次削减提供论据。**

### 第三条：削减者与承担者不是同一批人

如果削减余量的收益归当期、归自己，而代价归未来、归他人，那么削减就是理性选择。巴塞尔协议 III 引入的逆周期资本缓冲正是对这一结构的直接回应：它要求银行在信贷高速扩张期额外积累资本，也就是在「看起来最不需要」的时候强制留出余量。这个设计的前提是一次坦白的承认：**在景气期，任何自愿的余量都会被竞争压力削掉，所以它必须被强制。**

## 四、反方：余量也有代价，而且会掩盖问题

如果论证停在这里，它就退化成一句「多留备份总没错」的常识。必须给出反方，而这个反方相当有力。

**第一，缓冲会延迟信号。** 系统的波动被缓冲区吸收之后，管理者看到的是被平滑过的曲线，而不是真实的扰动。缓冲越厚，反馈越迟；等到缓冲耗尽，问题往往已经积累了很长时间。梅多斯把缓冲与延迟并列为系统最容易被误读的两个特征，原因就在这里：**缓冲不是消除了波动，它只是把波动推迟到账。**

**第二，冗余会退化成转移负担。** 当系统存在结构性缺陷时，加一层缓冲永远比修结构便宜，于是缓冲变成了掩盖。梅多斯称之为「转移负担」：症状被缓解，根本原因被保留，而且因为症状消失了，修复的动力也一并消失。用库存掩盖供应链的脆弱、用加班掩盖人手的不足、用最后贷款人掩盖资产负债表的问题，都是同一个结构。

**第三，冗余有真实的资源成本，也会僵化组织。** 过度储备并不等于更安全，它只是把风险换成了另一种形式：反应更慢、资源被锁死、错误更难暴露。塔勒布在《[反脆弱](/zh/books/antifragile/)》里为冗余辩护，但他的辩护是有条件的——冗余之所以有价值，是因为它提供了在冲击后继续行动的能力，而不是因为它本身值得积累。

所以正确的结论不是「余量越多越好」。**余量是保险，不是修复。** 把保险当修复用，等于用成本换掉了一次本该发生的学习。

## 五、判断：把余量从数量问题变成可观测性问题

既然余量的根本困境是「不可观测」，那么解决办法也只能从可观测性入手。三条判据：

1. **成本是否被显式定价，且记在受益者账上。** 谁享受了余量带来的稳定，谁就该承担它的成本。当成本与收益被拆到两个主体、两个年度，余量一定会被削——这不是激励设计的细节，而是决定性的。
2. **是否被定期测试。** 没被测试过的余量等于没有。电力系统的 N-1 准则之所以有效，是因为它被写成了一条可检验的判据：失去任意一个元件，系统不应失稳。它不是一句「要留有余地」的劝告，而是一个可以被反复施加的检验。压力测试、消防演练、故障注入，都是同一类装置。
3. **是否存在独立的守门人。** 留余量的人，不能同时是被考核效率的人。这条判据在组织设计上最难，因为它要求一个不参与效率竞赛的岗位拥有否决权——而这在顺境中总显得多余。

限度也必须说清楚：**余量买的是时间，不是安全。** 对真正的未知——那些不在模型里的失效模式——任何余量都只是提高生存概率、延长反应窗口，而不能保证生存。所以最终的问题不是「要不要留」，而是：**这个系统失败的时候，是降级，还是归零？**

如果失败是归零式的（核电站、疫苗、飞行控制），余量的价值与成本无关，任何精算都不成立；如果失败是降级式的（多等一周、少赚一季、换一条路线），余量就可以被定价，也就可以被理性地讨论。

余量之所以总被削掉，不是因为人们短视，而是因为它在正常时期没有可观测的形态。要保住它，只能给它造一个形态：一条写进规程的判据、一次被强制执行的测试、一个不参与效率考核的守门人。除此之外，所有「要留有余地」的告诫，都会在下一次预算会议上输给一个更漂亮的数字。`,
  content_en: `## 1. A Thing That Never Appears on the Books

In 1954, two Comet airliners broke up in flight. This was the world's first jet airliner in commercial service, and the accident investigation — together with the full-scale pressure-cabin fatigue tests that followed — pointed to something the engineering profession had not yet taken seriously enough: the skin of a pressurized fuselage develops fatigue cracks under repeated pressurization cycles, and the cracks began near the square windows and rivet holes, where stress concentrates. Airliner windows became rounded.

The physical basis had been laid out in 1920, when A. A. Griffith published in the Philosophical Transactions of the Royal Society A (volume 221) an explanation of why glass breaks far below its theoretical strength. The gap comes from microscopic cracks that cannot be eliminated; at a crack tip, stress is multiplied many times over. **Strength is not a property of a material. It is a property of the material plus its defects.**

Engineering's response was not to eliminate defects — that is impossible — but to leave margin: multiply design loads by a factor greater than one, hold allowable stress below measured strength, and arrange for the structure to survive an unanticipated defect, an accidental overload, a mistaken assumption.

The striking thing is that **a safety factor does nothing.** It produces no thrust, carries no signal, performs no function. Its only job is to convert "failure" into "still working" on the day something goes wrong. Which raises the question this essay is about: **if margin matters this much, why is it always the first thing cut?**

## 2. Margin Exists Only in the Counterfactual

When a system runs well, the fact we observe is that nothing happened. And "nothing happened" cannot be attributed. It might mean the design was good, or that we were lucky, or that margin absorbed a deviation that would otherwise have become an accident. These three explanations are observationally identical.

Accounting handles this with precision: **costs that do not occur are not recorded.** What a standby generator is worth on the day the grid fails cannot be booked in advance; its only definite appearance in the accounts is purchase cost and depreciation. Redundancy therefore always enters the ledger with a minus sign, while the benefit it produces takes the form of nothing at all.

Three consequences follow, and none of them is a moral problem. They are problems of observation:

1. The gains from cutting margin are immediately visible — lower cost, faster turnover, better metrics — while the gains from keeping it are invisible, because nothing happened.
2. The costs of cutting margin arrive late, and they arrive unsigned: by the time the failure lands, the person who made the decision has usually left the table.
3. Any evaluation system centred on efficiency will therefore systematically overprice margin and underprice its absence. Not because managers are short-sighted, but because half of what matters is structurally unobservable to them.

## 3. Three Routes by Which Margin Disappears

### Route one: the language of efficiency reads idle capacity as waste

Lean production, zero inventory, capacity utilization, output per head — this vocabulary shares one hidden premise: a resource that is not being used is a resource being wasted. It has delivered enormous cost reductions, and it has also exposed real fragility. During the 2021 global chip shortage, several automakers halted entire assembly lines over components worth a few dollars. The problem was not that they could not afford the chips. It was that, under a zero-inventory rule, they never held the extra few.

### Route two: success itself redefines what counts as normal

In [Thinking in Systems](/en/books/thinking-in-systems/), Donella Meadows describes a structure she calls "drift to low performance": the gap between actual and desired performance is closed not by raising performance but by lowering the target. The longer the safety record, the less margin counts as normal — because after ten years without an incident, that margin looks like something kept for nothing.

This is the most insidious route, because nobody has to cut anything. **Every year without an accident supplies the argument for the next reduction.**

### Route three: the people who cut are not the people who bear the cost

If the benefit of cutting margin accrues now and to you, while the cost accrues later and to someone else, cutting is the rational choice. The countercyclical capital buffer introduced under Basel III is a direct answer to this structure: it requires banks to build capital during credit booms — that is, to hold margin precisely when margin looks least necessary. The design rests on a candid admission: **in good times, no voluntary margin survives competitive pressure, so it has to be mandated.**

## 4. The Counterargument: Margin Has Costs, and It Hides Problems

If the argument stopped here, it would collapse into the platitude that backups are always good. The counterargument is strong and has to be met.

**First, buffers delay signals.** Once fluctuations are absorbed by a buffer, managers see a smoothed curve rather than the actual disturbance. The thicker the buffer, the later the feedback; by the time it is exhausted, the problem has usually been accumulating for a long while. Meadows treats buffers and delays as the two most commonly misread features of systems for exactly this reason: **a buffer does not remove volatility, it postpones the bill.**

**Second, redundancy degenerates into shifting the burden.** When a system has a structural defect, adding a buffer is always cheaper than fixing the structure, so the buffer becomes concealment. Meadows calls this "shifting the burden": the symptom is relieved, the root cause is preserved, and because the symptom is gone, so is the motive to repair it. Inventory that hides a fragile supply chain, overtime that hides understaffing, a lender of last resort that hides a broken balance sheet — all one structure.

**Third, redundancy has real resource costs and can rigidify an organization.** Over-provisioning is not the same as safety; it merely converts one risk into another — slower response, locked-up resources, errors that never surface. Taleb defends redundancy in [Antifragile](/en/books/antifragile/), but his defence is conditional: redundancy is valuable because it preserves the capacity to act after a shock, not because accumulation is good in itself.

So the conclusion is not that more margin is better. **Margin is insurance, not repair.** Using insurance as repair trades money for a lesson that should have been learned.

## 5. The Judgement: Turn Margin from a Quantity Problem into an Observability Problem

If the core difficulty is that margin cannot be observed, the remedy has to start with observability. Three tests:

1. **Is the cost explicitly priced, and booked to the party that benefits?** Whoever enjoys the stability should carry its cost. When cost and benefit are split across two parties or two fiscal years, margin will be cut — this is not a detail of incentive design but the decisive variable.
2. **Is it tested on a schedule?** Margin that has never been tested is margin that does not exist. The N-1 criterion in power systems works because it is written as a testable rule: the loss of any single element must not destabilize the system. It is not advice to leave room; it is a check that can be applied again and again. Stress tests, fire drills, and fault injection belong to the same family.
3. **Is there an independent gatekeeper?** The person who holds margin cannot also be the person measured on efficiency. This is the hardest test organizationally, because it requires a role outside the efficiency contest to hold a veto — and in good times that role always looks superfluous.

The limits must be stated too: **margin buys time, not safety.** Against genuinely unknown failure modes — the ones not in the model — any margin only raises the probability of survival and lengthens the window to react. It cannot guarantee survival. So the final question is not whether to hold margin, but this: **when this system fails, does it degrade, or does it go to zero?**

Where failure is zero-sum — nuclear plants, vaccines, flight control — the value of margin has nothing to do with cost, and no cost-benefit calculation applies. Where failure is degrading — a week's delay, a quarter of forgone profit, a different route — margin can be priced, and therefore argued about rationally.

Margin gets cut not because people are short-sighted but because in normal times it has no observable form. The only way to keep it is to give it one: a criterion written into procedure, a test that is actually run, a gatekeeper who is not measured on efficiency. Without that, every warning to leave room will lose, at the next budget meeting, to a prettier number.`,
};
