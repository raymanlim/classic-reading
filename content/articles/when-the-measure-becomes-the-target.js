export const article = {
  slug: 'when-the-measure-becomes-the-target',
  title_zh: '当度量变成目标：为什么把一切量化之后，反而看不清了',
  title_en: 'When the Measure Becomes the Target: Why Quantifying Everything Makes It Harder to See',
  subtitle_zh: '从央行的货币目标到公司的季度考核——同一个机制在反复出现：一个数字一旦被用来指挥行动，它就不再是描述现实的好工具',
  subtitle_en:
    'From central-bank targets to quarterly earnings — the same mechanism keeps recurring: once a number is used to steer action, it stops being a good description of reality',
  category: 'society',
  tags: ['systems-thinking', 'decision-making', 'management', 'organization', 'institutions'],
  related_books: [
    'noise',
    'superforecasting',
    'the-outsiders',
    'poor-charlies-almanack',
    'the-dictators-handbook',
    'thinking-in-systems',
  ],
  related_topics: ['systems-thinking', 'decision-making', 'management'],
  publish_date: '2026-10-09',
  lang: 'both',
  content_zh: `## 一个具体的问题：为什么越量化，越看不清

现代组织几乎把一切翻译成了数字。学校有升学率，医院有床位周转率，公司有季度每股收益，投资人有夏普比率，连个人也被建议记录睡眠时长与每日步数。这场翻译的承诺是清晰的：数字让比较成为可能，让责任有处安放，让模糊的直觉让位于可检验的证据。

但几乎每一个被长期使用的数字，最终都出现了同一个症状：它开始失真。分数不再代表学习，点击率不再代表价值，盈利不再代表经营质量。对这个症状，最省事的解释是「有人作弊」，于是修补方案永远是加审计、加惩罚、加更细的细则。

这篇文章要论证的判断是：**度量失真不是执行环节的道德问题，而是度量本身的机制后果。** 只要一个数字同时被用来描述现实和分配奖惩，失真就会自发产生，与从业者的品格无关。

要看清这一点，需要依次回答三个问题：数字为什么会失真；失真是否意味着应当放弃度量；以及在什么条件下，度量仍然值得信任。

## 数字的双重身份：描述与指挥

一个指标通常同时承担两个角色。它描述现实，也分配奖惩。

问题在于，这两个角色对数字的要求是相反的。作为描述，指标应当尽可能忠实地映射现实；作为指挥，指标必须简单、可比、可归因。现实是多维的，而能被用来指挥的指标必须是一维的。压缩的过程中，信息必然丢失。

被测量的人并没有跟着被压缩。他仍然活在高维的现实里，因此总能在未被测量的维度上移动。这个可以移动的空间，就是失真的来源。

这一点早被两个不同领域各自发现。查尔斯·古德哈特在 1975 年研究英国的货币目标时注意到：任何被观察到的统计规律，一旦被当局拿来当作控制目标，这个规律本身就会瓦解。这个表述后来被简化成一句更容易记住的形式——当一个度量变成目标，它就不再是一个好的度量。四年后，唐纳德·坎贝尔在研究社会指标的评估时给出了几乎同构的结论：一个量化社会指标被用于社会决策的程度越高，它就越容易受到扭曲压力，也就越容易反过来腐蚀它本应监测的那个过程。

两者说的都不是「人会作弊」这件小事，而是一个结构性事实：**代理变量与真实目标之间永远存在裂缝，而奖惩会把所有能量导向裂缝。**

于是出现了一种典型的分裂状态：所有人都知道指标在说谎，但没有人能停止按它行事，因为最先停下来的那一方会立刻在指标上落后。

## 反方：没有度量，情况只会更糟

在继续之前，必须先给出最强的反方。因为「度量会失真」这个判断，最容易滑向一个偷懒的结论：既然会失真，不如相信直觉。

这个结论在证据面前站不住。

丹尼尔·卡尼曼与同事在[《噪声》](/zh/books/noise/)里给出的发现是：人类判断中真正被低估的不是偏见，而是噪声——也就是本应相同的判断之间那些毫无意义的随机差异。同一份卷宗交给不同的法官、同一份简历交给不同的面试官，结论可能相差很远，而差异的原因往往只是时段、顺序与情绪。他们的结论对专业直觉并不友好：在多数可重复的决策场景里，一个简单的机械规则，比一位有经验的专家更准确、更稳定。

菲利普·泰特洛克在[《超预测》](/zh/books/superforecasting/)里提供了另一个方向的证据。他让参与者把预测写成可核验的概率，再用一套固定规则给每一次预测打分。结果是：**可被度量的反馈，是校准能力的前提。** 那些最终表现突出的预测者并非天赋异禀，而是持续地、小幅地修正自己的判断，并且能看见自己的历史成绩。

这两项研究合起来构成一个有力的反方：放弃度量，等于把决策交还给不可复现、无法学习的直觉。

所以真正的选择不是「度量还是直觉」，而是「以什么方式使用度量」。把「度量会失真」当作反对一切测量的理由，与把「直觉不可靠」当作反对一切判断的理由，是同一种懒惰。

## 裂缝在哪里最致命

既然度量不可放弃，问题就变成：在什么条件下，失真的代价最高？

有三个条件会显著放大风险。

**第一，代理变量离真实目标越远，越危险。** 考试分数离「学习」只有一步，离「能力」有多步；点击率离「用户价值」有多步。链条越长，可被优化却不改善目标的空间就越大。

**第二，反馈越快、奖惩越即时，越危险。** 年度考核比十年评价更容易被操纵。这一点在资本配置上表现得最清楚。威廉·索恩代克在[《商界局外人》](/zh/books/the-outsiders/)里考察了八位长期回报极高的 CEO，发现他们的共同点恰恰是不按华尔街的季度节奏行事：他们优化的是每股现金流的长期复利，而不是每股收益的连续增长。而市场对 CEO 的默认考核方式，是后者。这意味着，一个按季度盈利打分的体系，会系统性地筛出擅长管理预期的管理者，而不是擅长配置资本的管理者。

**第三，测量者与被测量者利益不一致、且信息不对称时，最危险。** 查理·芒格在[《穷查理宝典》](/zh/books/poor-charlies-almanack/)里把「激励导致的偏差」放在人类误判倾向的第一位，理由很直接：激励不需要说服任何人，它改变的是人能够看见什么。他还反复提醒，会计数字是一套约定，而不是对现实的直接读取——当一套约定被当成现实本身，操纵就从作弊变成了合规。

这个机制并不限于商业。布鲁斯·布恩诺·德·梅斯奎塔与阿拉斯泰尔·史密斯在[《独裁者手册》](/zh/books/the-dictators-handbook/)里论证，政治家的首要目标是维持使其掌权的联盟，因此公共指标会被选择性地生产与呈现，服务于政治生存，而不是服务于真实状况。在信息最不对称的地方，度量最容易变成叙事工具。

综合这三点，可以得到一条粗略但有用的界限：**度量在描述「已发生的、可重复的、低维的」事物时最可靠；在被用来指挥「未发生的、一次性的、高维的」事物时最危险。** 财务账目属于前者，战略判断属于后者。把后者的评价方式照搬给前者，或者反过来，都会出事。

## 判断：仪表不是方向盘

唐内拉·梅多斯在[《系统之美》](/zh/books/thinking-in-systems/)里把「系统的目标」与「信息流」都排在很高的杠杆位置。这个排序有一个直接推论：**改一个指标，就能改变整个系统的行为；这也意味着，任何掌握指标的人，事实上掌握了行为的分配权。**

由此得出三条可操作的原则。

1. **区分仪表与方向盘。** 指标适合用来发现异常，不适合同时用来分配奖惩。当同一个数字既当仪表又当方向盘，读数就失效了。可行的做法是让用于考核的指标与用于观察的指标分开，并让后者的更新频率高于前者。

2. **用组合而不是单一数字。** 只要存在一个未被计分的维度，沿着它逃离就是理性选择。让主指标始终伴随至少一个来自不同维度的指标，可以显著提高操纵成本。

3. **保留一个不参与计分的判断通道。** 这不是取消判断，而是承认有一类问题必须靠论证而不是靠打分来解决：评估一个人的长期贡献、判断一个战略方向的对错，都属于这一类。

最后是限度。这个判断本身也有边界。在安全、医疗、工程等领域，强制度量确实挽救了大量生命，并且不可逆地抬高了行业底线——航空业的事故率、外科手术的感染率，都是被度量逼下来的，不是被直觉逼下来的。因此，判断一个度量好坏的标准，从来不是「是否量化」，而是**它是否还允许被证伪**：当有人指出指标已经与实际脱节时，这个体系是会修正指标，还是会修正那个人。

一个系统最危险的状态，不是没有指标，而是所有人都知道指标在说谎，但没有任何人能停止按它行事。`,
  content_en: `## A Concrete Problem: Why More Measurement Can Mean Less Clarity

Modern institutions translate almost everything into numbers. Schools track progression rates, hospitals track bed turnover, companies track quarterly earnings per share, investors track Sharpe ratios, and individuals are advised to log their sleep and their steps. The promise behind this translation is straightforward: numbers make comparison possible, they give responsibility somewhere to sit, and they replace vague intuition with evidence that can be checked.

Yet almost every number that stays in use long enough develops the same symptom: it stops being true. Scores stop standing for learning, click-through rates stop standing for value, reported profit stops standing for the quality of a business. The cheapest explanation for this symptom is that somebody is cheating, and so the remedy is always the same — more auditing, harsher penalties, finer rules.

The judgement this essay defends is different: **the distortion of measures is not a moral failure at the point of execution but a mechanical consequence of measurement itself.** Whenever a single number is used both to describe reality and to allocate reward, distortion arises on its own, regardless of anyone's character.

To see this clearly, three questions have to be answered in order: why numbers distort; whether distortion means measurement should be abandoned; and under what conditions a measure can still be trusted.

## The Double Life of a Number: Description and Command

An indicator normally does two jobs at once. It describes reality, and it distributes reward.

The trouble is that these two jobs impose opposite requirements. As a description, an indicator should track reality as faithfully as possible. As a command, it must be simple, comparable, and attributable. Reality is multidimensional; anything capable of commanding action has to be one-dimensional. Compression necessarily destroys information.

The people being measured are not compressed along with it. They continue to live in the high-dimensional reality, and can therefore always move along a dimension that is not being counted. That space of movement is where distortion comes from.

Two separate fields discovered this independently. Studying British monetary targets in 1975, Charles Goodhart observed that any statistical regularity that is observed will tend to collapse once the authorities place pressure on it for purposes of control. The formulation was later condensed into something more memorable: when a measure becomes a target, it ceases to be a good measure. Four years later, assessing the evaluation of social programmes, Donald Campbell reached a near-isomorphic conclusion: the more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures, and the more apt it will be to distort the very process it was meant to monitor.

Neither is really about cheating. Both describe a structural fact: **a proxy variable and the goal it stands for are never identical, and incentives direct all available energy into the gap.**

What follows is a characteristic split state. Everyone knows the number is lying. Nobody can stop acting on it, because whoever stops first immediately falls behind on the number.

## The Counterargument: Without Measurement, Things Get Worse

Before going further, the strongest opposing case deserves a hearing, because the claim that measures distort slides very easily into a lazy conclusion: if measures distort, trust intuition instead.

That conclusion does not survive the evidence.

In [Noise](/en/books/noise/), Daniel Kahneman and his co-authors show that what is genuinely underestimated in human judgement is not bias but noise — the meaningless random variation between judgements that ought to be identical. The same file given to different judges, the same résumé given to different interviewers, can produce widely different conclusions, and the causes are often nothing more than time of day, order, and mood. Their conclusion is unkind to professional intuition: across most repeatable decisions, a simple mechanical rule outperforms an experienced expert, and does so more consistently.

Philip Tetlock supplies evidence pointing the same way in [Superforecasting](/en/books/superforecasting/). He asked participants to state forecasts as checkable probabilities, then scored every forecast by a fixed rule. The finding: **measurable feedback is a precondition for calibration.** The people who eventually performed best were not unusually gifted; they revised their judgements continuously and in small increments, and they could see their own track record.

Together these constitute a strong counterargument: abandoning measurement hands decisions back to intuition that cannot be reproduced and cannot be improved.

So the real choice is not measurement versus intuition. It is how measurement is used. Treating "measures distort" as a reason to oppose all measurement is the same laziness as treating "intuition is unreliable" as a reason to oppose all judgement.

## Where the Gap Turns Lethal

If measurement cannot be abandoned, the question becomes: under what conditions is distortion most expensive?

Three conditions amplify the risk sharply.

**First, the further the proxy sits from the goal, the more dangerous it is.** An exam score is one step from learning and several steps from competence; a click-through rate is several steps from user value. The longer the chain, the more room there is to optimise the measure without improving the goal.

**Second, the faster the feedback and the more immediate the reward, the more dangerous it is.** Annual reviews are easier to game than ten-year assessments. This shows up most clearly in capital allocation. In [The Outsiders](/en/books/the-outsiders/), William Thorndike examines eight chief executives with extraordinary long-run returns and finds that what they shared was precisely a refusal to run the business on Wall Street's quarterly rhythm: they optimised the long-run compounding of cash flow per share rather than the uninterrupted growth of earnings per share. Yet the market's default way of grading a CEO is the latter. A system that grades on quarterly earnings will therefore systematically select executives who are good at managing expectations rather than executives who are good at allocating capital.

**Third, the more the measured and the measurer have divergent interests and asymmetric information, the more dangerous it is.** In [Poor Charlie's Almanack](/en/books/poor-charlies-almanack/), Charlie Munger places incentive-caused bias first among the tendencies that lead people astray, for a direct reason: incentives do not need to persuade anyone, they change what a person is able to see. He also returns repeatedly to the point that accounting figures are a set of conventions rather than a direct reading of reality — and when a convention is mistaken for reality itself, manipulation stops being cheating and becomes compliance.

The mechanism is not confined to business. In [The Dictator's Handbook](/en/books/the-dictators-handbook/), Bruce Bueno de Mesquita and Alastair Smith argue that a politician's first objective is to maintain the coalition that keeps them in power, so public indicators get produced and presented selectively, in the service of political survival rather than of accurate reporting. Where information is most asymmetric, measurement most easily becomes a narrative instrument.

Taken together, these give a rough but useful boundary: **measurement is most reliable when describing what has already happened, is repeatable, and is low-dimensional; it is most dangerous when used to command what has not happened, happens once, and is high-dimensional.** Financial accounts belong to the first category; strategic judgement belongs to the second. Applying the evaluation method of one to the other causes trouble in either direction.

## The Judgement: An Instrument Panel Is Not a Steering Wheel

In [Thinking in Systems](/en/books/thinking-in-systems/), Donella Meadows ranks both "the goals of a system" and "information flows" very high among leverage points. The implication is direct: **changing one indicator can change the behaviour of an entire system — which also means that whoever controls the indicator controls, in practice, the distribution of behaviour.**

Three operating principles follow.

1. **Separate the instrument panel from the steering wheel.** Indicators are good at detecting anomalies and bad at simultaneously allocating reward. When one number serves as both, the reading fails. A workable arrangement keeps the measures used for evaluation distinct from the measures used for observation, and updates the latter more often than the former.

2. **Use a portfolio rather than a single number.** As long as one uncounted dimension exists, moving along it is the rational choice. Pairing a primary measure with at least one measure from a different dimension raises the cost of gaming substantially.

3. **Preserve one channel of judgement that is not scored.** This is not the abolition of judgement but an admission that some questions must be settled by argument rather than by score — the long-run contribution of a person, the soundness of a strategic direction, the difference between a lucky quarter and a durable capability.

Finally, the limits. This judgement has boundaries of its own. In safety, medicine, and engineering, hard measurement has saved a great many lives and irreversibly raised the floor of whole industries — aviation accident rates and surgical infection rates were driven down by measurement, not by intuition. So the test of a measure has never been whether it is quantitative, but **whether it still permits itself to be falsified**: when someone points out that the indicator has drifted away from reality, does the system revise the indicator, or does it revise the person?

The most dangerous state of any system is not the absence of indicators. It is a state in which everyone knows the numbers are lying, and nobody can stop acting on them.`,
};

export default article;
