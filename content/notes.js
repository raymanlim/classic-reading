/**
 * Classics Library — 阅读笔记 Reading Notes
 * ------------------------------------------------------------------
 * 每条笔记记录的是「我如何理解这本书」，而不是对书的复述。
 * 引用字段只放短句或概念，且不复制受版权保护的长段落；没有把握时留空。
 * book / topics 的 slug 必须真实存在于 books.manifest.js 与 taxonomy.js。
 */

export const notes = [
  {
    id: 'note-001',
    slug: 'superintelligence-control-problem',
    book: 'superintelligence',
    date: '2026-09-20',
    key_insight_zh: '当能力增长快于我们对目标的理解时，风险不在于机器变坏，而在于它太精确地执行了一个模糊的目标。',
    key_insight_en:
      'When capability grows faster than our understanding of our own goals, the danger is not a malicious machine but one that executes a vague goal with perfect precision.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书最有价值的地方，不是它对时间点的判断，而是它把"控制"从科幻话题变成了工程话题。我读完之后改变的一个习惯是：不再问"AI 会不会失控"，而是问"在什么条件下，一个比我强大的系统会做出我不想要的事"。这个问题和智能无关，和目标的表述有关。它让我意识到，对齐不是技术收尾工作，而是前提。',
    thinking_en:
      'The book\'s real value is not its timing but its move from science fiction to engineering: it turns "control" into a design problem. What changed for me is the question I now ask. Not "will AI go out of control," but "under what conditions would a system more capable than me do something I do not want?" That question is not about intelligence; it is about how goals are specified. It convinced me that alignment is a precondition, not a finishing step.',
    questions_zh: [
      '既然系统只是「精确执行目标」，为什么我们说它有风险，而不是说目标制定者有责任？',
      '把「对齐」放在能力发展之前和之后，代价有什么不同？',
      '你最近一次把模糊指令交给别人（或 AI）执行，是在哪一刻发现「我表达的」和「我想要的」不是一回事？',
    ],
    questions_en: [
      'If the system is only executing its goal precisely, why do we call it the risk rather than blaming whoever wrote the goal?',
      'What is the difference in cost between aligning a system before, versus after, it becomes powerful?',
      'When did you last hand a vague instruction to someone — or an AI — and discover that what you expressed and what you wanted were not the same thing?',
    ],
    answers_zh: [
      '两者都成立，但风险的性质由执行端决定：目标制定者承担表述责任，而精确执行会把表述中的任何漏洞放大到不可逆的规模。真正的问题不是分工，而是模糊目标一旦获得执行力，杠杆就被放大了几个数量级。',
      '事后对齐的前提是「先有一个可控的强系统」，而这个前提恰恰是对齐要保证的东西——循环依赖。事先对齐的代价是研发速度，事后对齐的代价可能是全部修正窗口。',
      '通常发生在看到执行结果的时刻：结果没有错，但不是自己要的。这正是对齐问题的日常版本——每一次「返工」都在提醒，诠释权一旦交出去，解释权就不在自己手里了。',
    ],
    answers_en: [
      'Both are true, but the risk is shaped by the executing side: the goal-writer owns the specification, while precise execution magnifies every gap in it to an irreversible scale. The real issue is not the division of labour but the leverage a vague goal gains once it can be executed at scale.',
      'Aligning afterward assumes a controllable strong system already exists — which is exactly what alignment is supposed to guarantee. Aligning early costs development speed; aligning late may cost the entire window of correction.',
      'Usually at the moment the result arrives: nothing in it is wrong, yet it is not what you wanted. That is the everyday version of alignment — every redo is a reminder that once interpretive authority is handed over, it is hard to reclaim.',
    ],
    topics: ['ai', 'risk'],
  },
  {
    id: 'note-002',
    slug: 'intelligent-investor-price-vs-value',
    book: 'the-intelligent-investor',
    date: '2026-09-22',
    key_insight_zh: '投资的核心不是预测价格，而是持续地区分"你付出的价格"和"你得到的价值"。',
    key_insight_en:
      'The core of investing is not forecasting prices but persistently separating the price you pay from the value you receive.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '我最初以为这本书的价值在于具体的方法，读进去才发现它真正的贡献是心理上的：它把"市场先生"变成了一种可以日常使用的比喻。价格每天在变，价值不会每天在变，这个简单的不对称，才是长期持有的心理基础。它没有教我怎么赢，而是教我如何在别人情绪失控时不跟着失控。',
    thinking_en:
      'I expected the book to be about method. What struck me is that its real contribution is psychological: it turns the market into a counterparty you can learn to ignore. Price moves daily; value does not. That simple asymmetry is the psychological basis for holding anything long. It did not teach me how to win; it taught me how not to lose my footing when others do.',
    questions_zh: [
      '如果价格每天在变而价值不变，「市场先生」每天报价的意义究竟是什么？',
      '为什么「区分价格与价值」说起来容易，做起来需要的却是心理基础而不是分析能力？',
      '你有没有过一次「买对了但拿不住」的经历？卡住你的是判断还是情绪？',
    ],
    questions_en: [
      'If price changes daily while value does not, what is the point of Mr. Market\'s daily quotation?',
      'Why does separating price from value require a psychological foundation rather than analytical skill?',
      'Have you ever bought right and still failed to hold? What stopped you — the judgement or the emotion?',
    ],
    answers_zh: [
      '他提供的是交易机会，不是信息。报价的意义随尺度反转：日线上的噪声是长期投资者的机会来源，把它当信号才会亏钱。价格只在偏离价值时才有用——它衡量的是别人的情绪，不是资产的品质。',
      '分析能力只解决「价值是多少」，执行则需要忍受价格长期偏离价值时的孤独与怀疑。多数人不是算不清，而是在市场先生咆哮时，对自己的计算失去了信任。',
      '多数案例卡住的不是判断而是情绪：判断在买入时就完成了，拿不住来自价格波动对自我怀疑的持续供给。把卖出条件写进买入理由里，是让理性留存到最后的唯一办法。',
    ],
    answers_en: [
      'He offers a trading opportunity, not information. The meaning of the quotation reverses with the horizon: daily noise is a source of opportunity for the long-term investor, and treating it as a signal is what loses money. Price is useful only when it diverges from value — it measures others\' emotions, not the asset\'s quality.',
      'Analysis settles what value is; execution requires enduring the loneliness and doubt of a price that stays away from it. Most people can do the arithmetic — they lose faith in their own calculation while Mr. Market is shouting.',
      'In most cases it is not the judgement but the emotion: the judgement was complete at purchase, and holding failed because price volatility kept supplying self-doubt. Writing the sell conditions into the buy rationale is the only way for reason to survive to the end.',
    ],
    topics: ['investing', 'decision-making'],
  },
  {
    id: 'note-003',
    slug: 'guns-of-august-contingency',
    book: 'the-guns-of-august',
    date: '2026-09-24',
    key_insight_zh: '大战往往不是被某个人决定的，而是被已经启动的机制推着走完的。',
    key_insight_en:
      'Great wars are often not decided by a single person but carried to completion by mechanisms that were already in motion.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书让我重新理解了"失控"这个词。动员时间表、联盟义务、通讯延迟，这些看似中性的安排，共同构成了一个一旦启动就难以停止的系统。我从中得到的一个判断习惯是：看到重大冲突时，先别急着找"谁该负责"，先看有没有已经被锁死的机制。责任归属让人解气，机制分析才让人看清下一步。',
    thinking_en:
      'This book made me reconsider what "out of control" actually means. Mobilization timetables, alliance obligations, and communication delays — neutral-looking arrangements — together form a system that is hard to stop once started. The habit I took from it: when a conflict escalates, do not rush to assign blame. Look first for mechanisms that are already locked in. Blame is satisfying; mechanism analysis is what shows you what comes next.',
    questions_zh: [
      '既然没有人想要一场四年的战争，为什么到最后也没有人踩下刹车？',
      '「先看机制，再找责任」这个习惯，在商业或组织决策里怎么用？',
      '一个组织的「动员时间表」是什么样的？你身边有没有「一旦启动就停不下来」的计划？',
    ],
    questions_en: [
      'If no one wanted a four-year war, why was no one able to step on the brake at the last minute?',
      'How would the habit of "mechanism first, blame later" be used in business or organisational decisions?',
      'What does an organisation\'s mobilisation timetable look like? Is there a plan near you that, once started, cannot be stopped?',
    ],
    answers_zh: [
      '因为刹车本身需要时间，而动员体系不给人时间：时间表一旦启动，「暂停」的代价（让对手先完成部署）立刻大于执行的代价。决定战争的不是意志，是时钟。',
      '遇到坏事先问：是什么结构让这个结果几乎必然发生？看激励、流程和截止日期实际奖励什么。归因于个人让人解气，但只有改机制才能阻止下一次。',
      '一切写死了截止日期、且延期成本被制度化的计划都是——季度考核、承诺过的上线日。识别标志：暂停它需要一个比继续更勇敢的决定。',
    ],
    answers_en: [
      'Because braking itself takes time, and the mobilisation system gives none: once the timetable starts, the cost of pausing (letting the opponent finish deploying first) is immediately greater than the cost of proceeding. What decided the war was not will but the clock.',
      'When something goes wrong, ask first: what structure makes this outcome almost inevitable? Look at what the incentives, processes, and deadlines actually reward. Blaming individuals is satisfying, but only changing the mechanism prevents a repeat.',
      'Any plan with a hard deadline and institutionalised delay costs — quarterly targets, promised launch dates. The tell: stopping it requires a braver decision than continuing.',
    ],
    topics: ['history', 'complexity'],
  },
  {
    id: 'note-004',
    slug: 'why-nations-fail-institutions',
    book: 'why-nations-fail',
    date: '2026-09-25',
    key_insight_zh: '决定长期繁荣的，不是资源或文化，而是制度是否把权力和收益分散给足够多的人。',
    key_insight_en:
      'What decides long-run prosperity is not resources or culture but whether institutions spread power and reward widely enough.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的说服力来自它把"制度"这个抽象词变成了可以观察的东西：谁有权做决定，谁能分享增长的收益。我读的时候一直提醒自己，不要把它当成一个可以解释一切的万能框架——它的批评者也很有道理。但它确实给了我一个有用的提问方式：当看到一国长期停滞，先问它的制度在奖励什么行为。',
    thinking_en:
      'The book persuades by turning "institutions" into something observable: who holds decision rights and who shares in the gains. While reading, I kept reminding myself not to treat it as a theory that explains everything — its critics have real points. Still, it gave me a useful question: when a country stagnates for a long time, ask first what its institutions are rewarding.',
    questions_zh: [
      '资源禀赋完全不同的国家可能同样繁荣、同样停滞——这个理论最难解释的是哪类案例？',
      '「制度在奖励什么行为」这个提问方式，用在一个公司或团队上成立吗？',
      '批评者说这套理论有「用结果解释制度」之嫌——这个批评在什么程度上成立？',
    ],
    questions_en: [
      'Countries with completely different endowments can be equally prosperous, or equally stagnant — which cases does this theory struggle most to explain?',
      'Does the question "what behaviour are the institutions rewarding" work when applied to a company or a team?',
      'Critics say the theory "explains institutions by their outcomes" — how much of that criticism holds?',
    ],
    answers_zh: [
      '最难解释的是制度相近而结果迥异的近邻案例，以及「资源诅咒」的反例。禀赋相近结局相反恰恰说明变量在制度侧；但制度如何起源、为何反转，书中给出的历史叙述多于可检验的机制。',
      '成立，而且更好检验：看晋升、加薪、免责实际奖励什么，而不是写在价值观手册里的是什么。组织的长期停滞，几乎总能从「实际在奖励什么」里找到答案。',
      '部分成立：繁荣后制度改善与制度先行，因果方向确实难分。但它保留了可观察的变量——权力与收益的分配——比文化决定论更接近可证伪，这是它站得住的部分。',
    ],
    answers_en: [
      'The hardest cases are neighbours with similar institutions and divergent outcomes, and the reversals that make up the resource curse. Similar endowments with opposite outcomes is precisely evidence that the variable lies on the institutional side; but how institutions originate and why they reverse gets more historical narrative than testable mechanism.',
      'Yes, and it is easier to test: look at what promotion, pay, and immunity from blame actually reward, not what the values handbook says. Long-run stagnation in an organisation can almost always be found in what it is actually rewarding.',
      'Partly. The causal direction between post-prosperity institutional improvement and institutional priority is genuinely hard to separate. But it keeps an observable variable — the distribution of power and reward — which is closer to falsifiable than cultural determinism.',
    ],
    topics: ['civilization', 'macroeconomics'],
  },
  {
    id: 'note-005',
    slug: 'thinking-fast-and-slow-two-systems',
    book: 'thinking-fast-and-slow',
    date: '2026-09-26',
    key_insight_zh: '我们的错误大多不是随机的，而是系统性的：快思考在它不该发言的时候抢答了。',
    key_insight_en:
      'Most of our errors are not random but systematic: fast thinking answers when it should have stayed quiet.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书我读得最慢，因为几乎每一章都在指出我刚刚犯过的错。它最大的作用不是让我"变得更理性"——那种期待本身就很天真——而是让我能在事后认出自己掉进了哪个陷阱。我现在会刻意在重要判断前停顿几秒，问一句：这是快思考的直觉，还是慢思考算出来的结论？就这一个停顿，已经值回票价。',
    thinking_en:
      'I read this book slowly, because nearly every chapter pointed at an error I had just made. Its effect was not to make me more rational — that expectation is naive — but to let me recognize, afterward, which trap I fell into. I now pause before important judgments and ask one question: is this a fast intuition, or a slow conclusion? That single pause has already been worth the whole book.',
    questions_zh: [
      '如果事后识别陷阱的用处大于事前避免，「意识到自己有系统性偏差」还有什么意义？',
      '「先停几秒再判断」为什么对小事无效、对大事有效？',
      '回顾你最近一次被「第一印象」说服的决定：当时缺的是信息，还是缺少一个慢思考的启动动作？',
    ],
    questions_en: [
      'If recognising a trap after the fact beats avoiding it beforehand, what is the point of knowing about your own systematic biases?',
      'Why does "pause a few seconds before judging" fail on small decisions and work on big ones?',
      'Look back at a recent decision you were talked into by a first impression: were you missing information, or missing the action that starts slow thinking?',
    ],
    answers_zh: [
      '意义在于把「以后不再犯」换成「再犯时能当场认出」。认识偏差不能免疫，但能缩短从犯下到察觉的时间——多数损失恰恰发生在察觉之前的这段窗口里。',
      '因为快思考接管的是熟悉回路，停几秒的作用是把决策从自动模式切回受控模式。小事不值得付这个切换成本；大事的价值足以支付，且切换一次就能改变结论的来源。',
      '多数时候缺的是后者。第一印象拿到的信息其实够用，缺的是把「我觉得」改写成「我的理由是」的那个动作——写下来，快思考就很难继续垄断。',
    ],
    answers_en: [
      'The value is in trading "never do it again" for "recognise it the moment it happens." Knowing your biases does not confer immunity, but it shortens the gap between the error and the detection — and most losses happen inside that gap.',
      'Because fast thinking runs on familiar circuits; the pause switches the decision from autopilot back to controlled mode. The switch is not worth it for small things; for big ones the stakes pay for it, and one switch changes where the conclusion comes from.',
      'Usually the latter. The information from a first impression is often sufficient; what is missing is the act of rewriting "I feel" into "my reasons are" — write it down, and fast thinking loses its monopoly.',
    ],
    topics: ['cognitive-science', 'decision-making'],
  },
  {
    id: 'note-006',
    slug: 'innovators-dilemma-good-management-trap',
    book: 'the-innovators-dilemma',
    date: '2026-09-28',
    key_insight_zh: '让优秀公司失败的不是管理不善，恰恰是它们太擅长服务现有客户。',
    key_insight_en:
      'What destroys great companies is not bad management but the very excellence of serving their existing customers.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书最反直觉、也最令人不安的地方在于：它证明失败可以来自正确的决定。每一家被颠覆的公司，几乎都做出了在当时看起来最合理的资源分配。这让我对"把事做对"这件事本身变得警惕起来——有时候真正的问题不是执行，而是你正在正确地执行一件已经过时的事。',
    thinking_en:
      'The most counterintuitive and unsettling part is that it shows failure can come from correct decisions. Nearly every disrupted company allocated resources in the way that looked most reasonable at the time. That made me wary of doing things right as a goal in itself — sometimes the real problem is not execution but that you are executing an obsolete thing very well.',
    questions_zh: [
      '「听从客户」是管理常识，为什么它反而是大公司被颠覆的原因？',
      '「正确地执行一件过时的事」——一个团队怎么判断自己正在做的事是不是已经过时？',
      '小公司同样可能犯这个错吗？还是说创新者的窘境只保护大公司？',
    ],
    questions_en: [
      'Listening to the customer is management common sense — why is it also the reason incumbents get disrupted?',
      'How can a team tell whether the thing it is executing so well has already become obsolete?',
      'Can small companies make the same mistake, or does the innovator\'s dilemma only protect large ones?',
    ],
    answers_zh: [
      '因为能清晰表达需求的客户，永远指向现有价值网的改进；而颠覆性技术在早期恰恰是现有客户「不需要」的。客户说的是真话，只是那句话是关于过去的。',
      '看增量来自哪里：如果增长主要来自现有客户的加购与提效，而不是新客户因新价值进入，曲线再漂亮也是在旧轨道上加速。判断标准不在执行质量，在需求来源的结构。',
      '都错，只是形式不同：大公司错在砍掉不服务现有客户的探索，小公司错在把全部身家押给一个同样会过时的需求。共同点是都缺少一块「允许失败」的隔离地带。',
    ],
    answers_en: [
      'Because customers who can articulate their needs always point at improvements within the existing value network, while disruptive technology is precisely what they "do not need" early on. Customers tell the truth — it is just a truth about the past.',
      'Look at where the growth comes from: if it is mostly add-ons and efficiency for existing customers rather than new customers arriving for a new value, then even a beautiful curve is acceleration on the old track. The test is not execution quality but the structure of the demand source.',
      'Both err, in different forms: incumbents kill exploration that serves no existing customer; small firms bet everything on a demand that will also become obsolete. What they share is the absence of a quarantine zone where failure is allowed.',
    ],
    topics: ['innovation', 'strategy'],
  },
  {
    id: 'note-007',
    slug: 'thinking-in-systems-leverage-points',
    book: 'thinking-in-systems',
    date: '2026-10-05',
    voice: 'editorial',
    key_insight_zh:
      '一个系统反复产生同样的坏结果，通常不是因为里面的人不够好，而是因为它的结构在奖励那个结果。',
    key_insight_en:
      'When a system keeps producing the same bad outcome, the cause is usually not the people inside it but the structure that rewards that outcome.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '梅多斯的核心主张是：系统的行为主要来自结构，而不是参与者的意图。她列出的杠杆点从参数、缓冲、流量一路排到规则、目标与范式——越靠后越有效，也越难改动，而人们习惯去调的往往是靠前的那几项。她描述的若干「系统陷阱」（公地悲剧、目标侵蚀、成瘾式依赖）共享同一个形状：每个参与者都在做局部理性的选择，合成出来却是集体非理性的结果。这与「聪明人一起犯错」那类社会性解释正好互补——那里强调的是放大机制，这里强调的是结构本身就会产生行为。由此得出的推论相当不客气：把反复出现的失败归因于具体的人，通常是最省事、也最无效的一种解释。',
    thinking_en:
      'Meadows\'s central claim is that a system\'s behaviour comes mainly from its structure, not from the intentions of the people inside it. Her leverage points run from parameters and buffers up through rules, goals and paradigms — the higher ones are more powerful and far harder to change, yet attention tends to go to the lower ones. The traps she catalogues — the tragedy of the commons, goal erosion, addiction — share one shape: each participant makes a locally rational choice, and the aggregate is collectively irrational. That complements social accounts of collective failure: those stress amplification, whereas Meadows stresses that structure alone can generate behaviour. The uncomfortable corollary is that attributing a recurring failure to particular people is usually the cheapest explanation and the least useful one.',
    questions_zh: [
      '如果行为主要来自结构，为什么换一批人进去，结果往往还是老样子？',
      '为什么高效杠杆点（规则、目标、范式）人人回避，低效杠杆点（参数、缓冲）人人爱调？',
      '举一个你身边「局部理性合成集体非理性」的例子：每个人的选择都合理，加总起来却是坏结果。',
    ],
    questions_en: [
      'If behaviour comes mainly from structure, why does replacing the people usually leave the outcome unchanged?',
      'Why do high-leverage points (rules, goals, paradigms) get avoided while low-leverage ones (parameters, buffers) get attention?',
      'Give an example near you of locally rational choices composing into a collectively irrational result.',
    ],
    answers_zh: [
      '因为结构会通过激励重新塑造后来者：留下来的人要么被同化，要么被筛掉，而新来的人按同一套激励行动。换人不改变激励时，改变的就只是演员表，不是剧情。',
      '因为前者动的是权力与共识，改动成本高且威胁现有位置；后者在权限内、见效快、可汇报。组织不是没有理性，是理性地选择了阻力最小的旋钮。',
      '典型如会议逐条发言以证明参与，每个人的理性让会议变长、结论变模糊；又如每个团队都自建工具以自救，最终整体技术栈碎片化。合成谬误的标点：每一笔账单独看都划得来。',
    ],
    answers_en: [
      'Because structure reshapes its occupants through incentives: those who stay are either assimilated or selected out, and newcomers act on the same incentives. Change the people without changing the incentives and you have only changed the cast, not the plot.',
      'Because the former moves power and consensus — high cost and a threat to existing positions — while the latter sits inside one\'s own remit, shows fast results, and reports well. Organisations are not irrational; they rationally pick the knob with the least resistance.',
      'A classic: everyone speaks in meetings to demonstrate participation, and each rational choice makes the meeting longer and the conclusion vaguer. Or every team builds its own tool for self-rescue, and the whole stack fragments. The mark of a composition fallacy: every entry pays off on its own.',
    ],
    topics: ['systems-thinking', 'complexity', 'decision-making'],
  },
  {
    id: 'note-008',
    slug: 'the-information-meaning-vs-signal',
    book: 'the-information',
    date: '2026-10-06',
    voice: 'editorial',
    key_insight_zh:
      '信息论刻意把「意义」排除在通信的数学之外，这既是它威力的来源，也是为什么传输量的增长从来不等于理解的增长。',
    key_insight_en:
      'Information theory deliberately excluded meaning from the mathematics of communication — the source of its power, and the reason more transmission has never automatically meant more understanding.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于它把「信息」从一个日常词汇改造成了一个可以被度量的量。香农的定义刻意不谈意义：一条消息携带多少信息，取决于它排除了多少不确定性，而与它是否真实、是否重要无关。这个抽象撑起了现代通信与存储的全部基础设施，同时也留下了一个容易被忽略的后果——信息量的增长与理解力的增长是两件不同的事。值得警惕的是，当一个组织把「更多数据」当作「更清楚」的替代品时，它其实是在用一个不属于意义范畴的量，去回答一个关于意义的问题。另一个容易被忽略的地方是噪音的地位：在这个框架里，噪音不是需要清除的杂质，而是前提；没有噪音，冗余就毫无价值，而冗余恰恰是意义得以存活的余地。',
    thinking_en:
      'The key move in this book is to convert "information" from an everyday word into a measurable quantity. Shannon\'s definition deliberately says nothing about meaning: how much information a message carries depends on how much uncertainty it resolves, not on whether it is true or important. That abstraction underwrites the entire infrastructure of modern communication and storage, and it leaves one easily overlooked consequence — growth in the volume of information and growth in understanding are two different things. The caution worth keeping is this: when an organisation treats "more data" as a substitute for "more clarity," it is using a quantity outside the domain of meaning to answer a question about meaning. The other easily missed point is the status of noise. In this framework noise is not an impurity to be eliminated but a precondition; without it, redundancy would be worthless — and redundancy is precisely the room in which meaning survives.',
    questions_zh: [
      '把「意义」排除在定义之外，为什么反而成就了信息论的威力？',
      '「更多数据不等于更清楚」——一个组织把数据量当清晰度时，典型的症状是什么？',
      '为什么说噪音不是要清除的杂质，而是前提？',
    ],
    questions_en: [
      'Why did excluding "meaning" from the definition give information theory its power?',
      'When an organisation treats data volume as a substitute for clarity, what are the typical symptoms?',
      'Why is noise a precondition rather than an impurity to be removed?',
    ],
    answers_zh: [
      '因为意义不可度量且争论不休，把它排除后，剩下的「消除不确定性」可以被精确计算，整个通信工程由此获得共同语言。威力来自放弃解释，不是来自解释得更深。',
      '症状是汇报越来越厚、决策越来越慢，讨论从「我们知道了什么」变成「我们还能看什么」。当仪表盘代替判断，量的增长就替代了质的澄清。',
      '因为没有噪音就没有冗余的必要，而冗余是纠错与容错的余地。一个零噪声的信道连校验都不需要——没有不确定性，也就没有信息得以存活的空间。',
    ],
    answers_en: [
      'Because meaning is unmeasurable and endlessly arguable; excluding it leaves "resolving uncertainty," which can be computed exactly, and that gave the whole engineering of communication a common language. The power came from giving up interpretation, not from interpreting more deeply.',
      'Reports grow thicker, decisions slower, and the discussion shifts from "what do we know" to "what else can we look at." Once the dashboard replaces judgement, growth in quantity has substituted for clarification in kind.',
      'Because without noise, redundancy would be pointless — and redundancy is the room for correction and tolerance. A zero-noise channel needs no error-checking at all: with no uncertainty, there is no space in which information can survive.',
    ],
    topics: ['technology', 'cognitive-science'],
  },
  {
    id: 'note-009',
    slug: 'design-of-everyday-things-error-is-designed',
    book: 'the-design-of-everyday-things',
    date: '2026-10-07',
    voice: 'editorial',
    key_insight_zh:
      '当同一类错误被一个人接一个人地反复犯下，缺陷通常不在人身上，而在于设计没有让正确的操作变得显而易见。',
    key_insight_en:
      'When the same mistake is made by one person after another, the defect is usually not in the people but in a design that failed to make the right action obvious.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于它把「犯错」从道德范畴挪到了设计范畴。诺曼的核心主张是：一件日常用品如果需要说明书才能用对，缺陷在于它给出的可供性，而不在于使用者的能力——人并非不理性，他们只是在按设计提供的线索行动。它真正改变的是归因方向：把反复出现的操作失误当作系统的属性来诊断，而不是当作个人的粗心。值得警惕的是，这种视角同样可以被滥用，把所有责任都推给「设计」和「系统」，会让人逐渐失去承担后果的能力。容易被忽略的一点是，诺曼并不主张设计应当消灭错误，而是主张让错误变得可见、可撤销、代价可控——这比追求零失误现实得多，也更接近工程上的诚实。',
    thinking_en:
      'The key move in this book is to shift "making a mistake" out of the moral register and into the register of design. Norman\'s central claim is that when an everyday object requires a manual to be used correctly, the defect lies in the affordances it offers rather than in the competence of its user — people are not irrational, they are following the cues the design supplies. What it genuinely changes is the direction of attribution: recurring operational errors get diagnosed as properties of a system rather than as individual carelessness. The caution worth keeping is that the same lens can be abused; assigning all responsibility to "design" and "the system" gradually erodes the capacity to own a consequence. The easily missed point is that Norman does not argue for eliminating error at all. He argues for making error visible, reversible, and cheap — a far more realistic goal than zero defects, and a more honest one in engineering terms.',
    questions_zh: [
      '为什么反复犯同样错误的人不是「粗心」，而是被设计了？',
      '诺曼主张的「让错误可见、可撤销、代价可控」和追求零失误相比，差别在哪里？',
      '把一切都归因于「系统问题」，这套视角有没有被滥用的风险？',
    ],
    questions_en: [
      'Why is a person who repeatedly makes the same error not "careless" but being designed?',
      'How does Norman\'s "make error visible, reversible, and cheap" differ from pursuing zero errors?',
      'Is there a real risk of abusing this lens by attributing everything to "the system"?',
    ],
    answers_zh: [
      '因为人按线索行动：门把手暗示拉、平板暗示推。当线索与正确动作矛盾，错误就以固定概率重复发生——那是系统的输出。把系统输出归因于使用者，只是每次都重新罚一个受害者。',
      '零失误要求消除触发条件，在复杂系统里不可能；后者要求错误发生后能被发现、能撤回、损失可控。前者是免责叙事，后者是工程诚实。',
      '有，且是真实风险：当「不是我的错，是系统」成为万能挡箭牌，个体就失去了承担后果的能力。设计视角的边界在于——它诊断结构，不豁免角色。',
    ],
    answers_en: [
      'Because people act on cues: a handle implies pull, a flat plate implies push. When the cues contradict the correct action, the error repeats at a fixed rate — it is the system\'s output. Attributing a system output to the user just punishes a fresh victim every time.',
      'Zero error requires eliminating the trigger, which is impossible in a complex system; the latter requires that once an error happens it can be detected, reversed, and bounded. The first is an exoneration narrative; the second is engineering honesty.',
      'Yes, and the risk is real: when "not my fault, the system did it" becomes an all-purpose excuse, the individual loses the capacity to own a consequence. The boundary of the design lens is that it diagnoses structure — it does not exempt the role.',
    ],
    topics: ['systems-thinking', 'decision-making'],
  },
  {
    id: 'note-010',
    slug: 'palliative-society-pain-as-threshold',
    book: 'the-palliative-society',
    date: '2026-10-08',
    voice: 'editorial',
    key_insight_zh:
      '把痛苦当成需要消除的故障，代价是同时抹掉了痛苦的另一种功能——它是一道门槛，越过去，人才会真正改变。',
    key_insight_en:
      'Treating pain as a malfunction to be eliminated also erases its other function: pain is a threshold, and only by crossing it does anyone actually change.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把痛苦从「需要被消除的故障」重新定义成一种有认知功能的经验，而不是一种纯粹的损耗。韩炳哲的观察是双向的：社会把痛苦医疗化、私人化，使它退出公共讨论；个体则把自己交给绩效与自我优化，在持续的不适管理里完成自愿的自我剥削。它真正改变的是对「舒适」的评价——一个把所有摩擦都磨平的体系，同时也磨掉了越过门槛所需要的那股张力。值得警惕的是，这个诊断很容易被误读成对苦难的美化；它要求的不是主动去找痛，而是拒绝把任何不适都当成需要立刻修复的缺陷。容易被忽略的一点是，妥协并非软弱，而是一种理性计算：在一个把反抗定价过高的环境里，顺从往往是个人层面的最优解——正因如此，问题才不在个人身上。',
    thinking_en:
      'The key move in this book is to redefine pain as an experience with a cognitive function rather than as pure loss — something to be eliminated. Han\'s observation runs in two directions at once: society medicalises and privatises pain until it drops out of public argument, while individuals hand themselves over to performance and self-optimisation, completing a voluntary self-exploitation through the continuous management of discomfort. What it genuinely changes is the valuation of comfort — a system that sands down every source of friction also sands down the tension required to cross a threshold. The caution worth keeping is that the diagnosis is easily misread as a romanticisation of suffering; what it asks for is not the pursuit of pain but a refusal to treat every discomfort as a defect requiring immediate repair. The easily missed point is that compromise is not weakness but a rational calculation: where resistance has been priced very high, compliance is often the optimal individual move — which is precisely why the problem does not lie with the individual.',
    questions_zh: [
      '为什么「消除痛苦」与「越过痛苦带来的改变」不能两全？',
      '这个诊断为什么容易被误读成「赞美苦难」？原意与误读的边界在哪里？',
      '「顺从是个人层面的最优解」——这个判断是在替谁开脱，又在哪里停住？',
    ],
    questions_en: [
      'Why can eliminating pain and preserving the change that crossing it brings not be had at the same time?',
      'Why is this diagnosis so easily misread as a romanticisation of suffering? Where is the line between the original point and the misreading?',
      'Who does the judgement "compliance is the optimal individual move" exonerate — and where does it stop?',
    ],
    answers_zh: [
      '因为改变的门槛正是由不适感标定的：镇痛把信号和通道一起关掉，门槛消失，改变也就不再发生。止痛是医疗，止痛成瘾是治理。',
      '误读把功能描述当成了规范主张。原意是不要把所有不适都视为缺陷并立即修复——值得保留的是「不是所有痛都该被消除」这一句，而不是「人应当寻求痛苦」。',
      '它替被高价惩罚的反抗开脱，但不停在个人：既然顺从是理性计算的结果，问题就出在定价系统本身。理解这一点，才不会把结构问题误诊为品格问题。',
    ],
    answers_en: [
      'Because the threshold of change is marked by discomfort: pain relief switches off both the signal and the passage, the threshold disappears, and change never happens. Pain relief is medicine; addiction to it is governance.',
      'The misread turns a functional description into a normative claim. The original point is not to treat every discomfort as a defect requiring immediate repair — what deserves keeping is "not all pain should be eliminated," not "one ought to seek suffering."',
      'It exonerates a resistance that has been priced very high, but it does not stop at the individual: if compliance is the rational outcome, the problem lies with the pricing system itself. Grasping that is what keeps a structural problem from being misdiagnosed as a flaw of character.',
    ],
    topics: ['modern-society', 'philosophy'],
  },
  {
    id: 'note-011',
    slug: 'scientific-revolutions-anomaly-before-crisis',
    book: 'the-structure-of-scientific-revolutions',
    date: '2026-10-09',
    voice: 'editorial',
    key_insight_zh:
      '反常不是被发现的，而是被承认的：一个框架只有在它自己宣布过「这不该发生」的地方，才可能看见危机。',
    key_insight_en:
      'An anomaly is not so much discovered as admitted: a framework can only see a crisis where it has first declared that this should not happen.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把「发现」重新描述成一件依赖框架的事：范式不只是关于世界的理论，它同时规定了什么问题值得问、什么答案算合格、什么观察算数据。它真正改变的是对「反常」的理解——同一份观察，在框架稳固时只是待解的谜题，只有在框架本身开始松动时才成为危机，区别不在观察，而在框架还剩多少余量。容易被忽略的一点是，库恩并不把范式转换描述成证据的累积胜利：他明确指出范式之间的选择无法被逻辑与证据完全决定，最终取决于相关共同体的认同，这也正是教科书会把革命重写成一连串平滑发现的原因。值得警惕的是，这个论证常被滥用来搁置任何不受欢迎的证据——只要把它称作「范式之争」即可；而库恩的原意恰恰相反，他要说明框架必须承担自己宣布过的检验，否则它连自己的反常都识别不出来。',
    thinking_en:
      'The key move in this book is to redescribe discovery as something framework-dependent: a paradigm is not merely a theory about the world but a set of commitments about which questions are worth asking, which answers count as admissible, and which observations count as data. What it genuinely changes is the meaning of an anomaly — the same observation is a puzzle awaiting solution while the framework holds, and becomes a crisis only once the framework itself begins to loosen; the difference lies not in the observation but in how much slack the framework still has. The easily missed point is that Kuhn does not present paradigm change as a cumulative victory of evidence. He states plainly that the choice between paradigms cannot be fully determined by logic and evidence and rests in the end on the assent of the relevant community, which is precisely why textbooks rewrite revolutions as a smooth sequence of discoveries. The caution worth keeping is that the argument is easily abused to shelve any unwelcome piece of evidence by calling it "a matter of paradigms," whereas Kuhn\'s intention runs the other way — a framework must answer the tests it has declared for itself, or it will not even be able to recognise its own anomalies.',
    questions_zh: [
      '为什么范式转换不是「证据累积够了」的自然结果？',
      '「教科书把革命写成平滑的发现史」，这种重写为什么重要？',
      '「范式之争」这个标签有没有可能被用来搁置不受欢迎的证据？判据是什么？',
    ],
    questions_en: [
      'Why is a paradigm shift not the natural result of "enough evidence accumulating"?',
      'Why does it matter that textbooks rewrite revolutions as smooth histories of discovery?',
      'Can the label "paradigm dispute" be used to shelve unwelcome evidence? What is the test?',
    ],
    answers_zh: [
      '因为证据的解释权在范式手里：同一份数据在旧框架里是待解之谜，在新框架里才是反例。证据不能自己选举新范式——能选举的只有相关共同体的认同。',
      '因为它抹掉了真实的断裂时刻，让从业者以为标准从来如此、问题本来就有唯一解法。历史被平滑化的领域，从业者对替代方案的想象力也最差。',
      '有可能，且这是最常见的滥用。判据是具体的：能否指出对方违反了哪条你自己宣布过的检验，以及新框架能否解释旧框架的反例——贴标签不是论证。',
    ],
    answers_en: [
      'Because interpretive authority over evidence sits with the paradigm: the same data are a puzzle awaiting solution in the old framework and a counterexample only in the new one. Evidence cannot elect a new paradigm by itself — only the assent of the relevant community can.',
      'Because the rewrite erases the moments of genuine rupture and leaves practitioners believing the standard was always so and the problem always had one answer. Fields whose history has been smoothed have the weakest practitioners\' imagination about alternatives.',
      'It can be, and that is the most common abuse. The test is specific: can you name which self-declared test the other side has violated, and can the new framework explain the old framework\'s anomalies? Affixing a label is not an argument.',
    ],
    topics: ['science-and-nature', 'philosophy', 'systems-thinking'],
  },
  {
    id: 'note-012',
    slug: 'envy-the-passion-that-interests-cannot-tame',
    book: 'envy',
    date: '2026-10-10',
    voice: 'editorial',
    key_insight_zh:
      '嫉妒由他人的所得触发，因而是唯一一种在财富增长时反而增多的激情——它正是「以利益驯服激情」这套现代方案漏掉的那一种。',
    key_insight_en:
      'Envy is triggered by what other people gain, which makes it the one passion that multiplies as wealth grows — the very one the modern project of taming passion with interest left out of account.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把嫉妒从个人心理重新描述为社会结构：它不能被消灭，也不能被满足，因为它的触发条件是相对的——别人变好，它就产生。它真正改变的是对「公平」的理解：嫉妒既是分配正义的心理底座，没有它则任何公平规范都失去执行力，同时也是发展的永久刹车，因为它系统性地惩罚一切超出均值的成功。容易被忽略的一点是，嫉妒的对象总是具体的人而非抽象的制度，因此它倾向于把怨恨引向身边的成功者，而不是催生结构性变革——这解释了为什么普遍的嫉妒情绪常常与政治上的保守并行。值得警惕的是，追求「无嫉妒社会」的政治想象通常以更坏的结局收场：压制嫉妒需要持续的监督与强制，而执行监督的人自己并不对嫉妒免疫。',
    thinking_en:
      'The key move in this book is to redescribe envy from an individual psychological quirk into a social structure: it cannot be abolished and cannot be satisfied, because its trigger is relative — someone else improves, and envy appears. What it genuinely changes is the understanding of fairness: envy is the psychological foundation of distributive justice, without which no norm of fairness has any enforcing power, and at the same time a permanent brake on development, because it systematically punishes every success that rises above the average. The easily missed point is that envy always targets concrete people rather than abstract systems, so it channels resentment toward successful neighbours instead of producing structural change — which explains why pervasive envy so often coexists with political conservatism. The caution worth keeping is that political imaginings of an envy-free society tend to end far worse: suppressing envy requires continuous surveillance and coercion, and those who do the suppressing are not themselves immune to it.',
    questions_zh: [
      '为什么用利益驯激情的现代方案，对嫉妒完全无效？',
      '嫉妒为何总是烧向具体的邻居，而不是抽象的制度？',
      '追求「无嫉妒社会」的政治实验，通常为什么以更糟的结局收场？',
    ],
    questions_en: [
      'Why does the modern project of taming passion with interest fail completely against envy?',
      'Why does envy burn toward concrete neighbours rather than abstract systems?',
      'Why do political experiments aimed at an envy-free society usually end worse?',
    ],
    answers_zh: [
      '因为利益机制处理的是绝对所得，而嫉妒的触发条件是相对所得：蛋糕做大无法平息它，只能改变它指向的人。驯服方案假设激情随绝对改善而下降，嫉妒恰恰相反。',
      '因为具体的比较对象可感知、可命名，制度不可见。这解释了为什么嫉妒维持现状：它惩罚身边超越者，却不质疑产生差距的结构。',
      '因为压制嫉妒需要持续的监督与强制，而执行者自身不对嫉妒免疫。制度于是不断生产新的不平等与被敌视者，最终以普遍的互相监视代替了嫉妒本身。',
    ],
    answers_en: [
      'Because interest mechanisms operate on absolute gains while envy\'s trigger is relative: enlarging the pie does not settle it, it only shifts whom it points at. The taming project assumes passion declines as absolute conditions improve — envy is exactly the exception.',
      'Because concrete comparators can be perceived and named; institutions cannot. That is why envy preserves the status quo: it punishes the neighbour who has pulled ahead instead of questioning the structure that produced the gap.',
      'Because suppressing envy requires continuous surveillance and coercion, and those who do the suppressing are not themselves immune. The system then manufactures new inequalities and new objects of resentment, ending by replacing envy with universal mutual surveillance.',
    ],
    topics: ['class-and-inequality', 'modern-society', 'power-and-politics'],
  },
  {
    id: 'note-013',
    slug: 'seneca-time-lost-while-postponing-life',
    book: 'letters-from-a-stoic',
    date: '2026-10-11',
    voice: 'editorial',
    key_insight_zh:
      '拖延之所以致命，不在于被拖延的事最终没做成，而在于被搁置的那部分时间已经支付出去、不可追偿——塞涅卡说死亡大半落在身后，指的正是这一点。',
    key_insight_en:
      'Postponement is fatal not because the postponed task may never get done but because the portion of time set aside has already been spent and cannot be reclaimed — which is precisely what Seneca means when he says most of death lies behind us.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把「时间不够」重新描述为一个记账问题，而不是一个寿命问题：时间是人唯一真正拥有的东西，而人对待它的方式恰好与对待金钱相反——金钱上的债务要追讨，时间却随手让人拿走。它真正改变的是对「浪费」的理解：浪费不是事后才看清的结果，而是此刻正在发生的过程，「我们期盼着死亡还在前方，其实它大半已经落在身后」。容易被忽略的一点是，塞涅卡并未把自己算作例外，他坦承自己同样浪费时间，只是清楚浪费在了哪里——这使这封信读起来不像训诫，而像一份公开的账单。值得警惕的是，「抓住当下」后来被简化成一种行动力口号，而原意更接近审计：先算清时间实际流向何处，才谈得上如何使用它。它与本站《等待的建筑学》一文恰好构成两侧：那篇讲期待如何抵押当下，这封信念的正是同一笔债的利息。',
    thinking_en:
      'The key move in these letters is to redescribe "not enough time" as an accounting problem rather than a lifespan problem: time is the one thing genuinely our own, yet it is treated as the exact inverse of money — a debt in cash is pursued, while hours are handed to anyone who asks. What it genuinely changes is the meaning of waste: waste is not a verdict visible only in retrospect but a process under way right now, for "we look forward to death as though it lay ahead, when most of it is already behind us." The easily missed point is that Seneca does not exempt himself: he concedes that he too wastes time, but knows exactly where it went — which makes the letter read less as a sermon than as a published account. The caution worth keeping is that "seize the day" later hardened into a slogan of productivity, whereas the original point is closer to an audit: only after establishing where time actually goes does the question of how to spend it become meaningful. It forms two halves with this site\'s "The Architecture of Waiting": that piece examines how expectation mortgages the present, and this letter is the interest on the same debt.',
    questions_zh: [
      '「死亡大半落在身后」指的是什么？它为什么比「时间有限」更进一步？',
      '「抓住当下」被口号化之后，为什么反而丢失了原意？',
      '如果你给上周的时间做一次审计，最大的一笔「支出」流向了谁？',
    ],
    questions_en: [
      'What does "most of death lies behind us" mean? Why is it a step beyond "time is limited"?',
      'Why does "seize the day" lose its original meaning once hardened into a slogan?',
      'If you audited last week\'s time, where did the largest single "expense" go?',
    ],
    answers_zh: [
      '指已经付出的那部分时间没有再被赎回的可能。「时间有限」是总量问题，塞涅卡问的是流向问题：钱债有人追讨，时间却任人取用。差别在一个是预算，一个是审计。',
      '口号把它变成行动催促，原意更接近记账：先算清时间实际流向哪里，才谈得上怎么花。没有审计的励志，只是施加更多内疚。',
      '多数人的答案不是工作而是等待：等会议开始、等审批、等一个回复。塞涅卡的账单逼人发现：时间不是花在做事上，是花在「等着能做那件事」上。',
    ],
    answers_en: [
      'It means the seconds already paid out cannot be bought back. "Time is limited" is a question of budget; Seneca\'s is a question of flow: a debt in cash is pursued, while hours are handed to anyone who asks. One is an accounting of totals, the other an audit of drainage.',
      'The slogan turns it into urgency to act; the original point is closer to bookkeeping: establish where the time actually goes before asking how to spend it. Motivation without an audit only adds more guilt.',
      'For most people the answer is not work but waiting: for the meeting to start, for the approval, for a reply. Seneca\'s bill forces the discovery that time is not spent doing things — it is spent waiting to be able to do them.',
    ],
    topics: ['philosophy', 'modern-society'],
  },
  {
    id: 'note-014',
    slug: 'cybernetics-feedback-is-the-only-brake',
    book: 'cybernetics',
    date: '2026-10-12',
    voice: 'editorial',
    key_insight_zh:
      '维纳把「控制」从工程词汇升格为普遍范畴：只要系统依靠信息反馈维持稳定，机器与生命就能用同一套语言描述——智能不在某个部件里，而在回路里。',
    key_insight_en:
      'Wiener promoted "control" from an engineering term to a universal category: any system that maintains stability through informational feedback can be described in one vocabulary, organism and machine alike — intelligence does not sit in any particular part but in the loop.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把「控制」从一门工程手艺升格为普遍范畴：无论伺服机构、神经系统还是人群组织，只要依靠信息反馈来维持稳定并指向目标，就可以用同一套语言描述，机器与生命在这里没有本质差别。它真正改变的是「智能的位置」这个判断——智能不藏在某个过人部件里，而在回路之中，这也解释了为什么此后的自动化与人工智能研究都把这本 1948 年的书当作概念母体。容易被忽略的一点是，维纳并不把反馈写成一条坦途：误差、噪声、滞后与震荡都是回路的固有成分，控制系统的工作不是消灭波动，而是与波动共处。值得警惕的是他在书末反复强调的另一面：同一套控制机器既可以扩展人的能力，也可以用来支配人，科学家无法把后果推给使用者。它与本站《分工的账本》一文互为表里：那篇讲拆分如何让个体看不见自身工作的结果，这本讲的正是看不见结果的结构为何无法自我纠正。',
    thinking_en:
      'The key move of this book is to promote control from an engineering craft to a universal category: whether the system is a servomechanism, a nervous system, or a crowd of people, it can be described in the same language as long as it maintains stability and pursues a goal through informational feedback — organism and machine do not differ in principle here. What it genuinely changes is where intelligence is located: not in some superior component but in the loop, which is why later work on automation and artificial intelligence repeatedly returns to this 1948 book as its conceptual parent. The easily missed point is that Wiener does not present feedback as a smooth road: error, noise, lag, and oscillation are inherent constituents of any loop, and the work of a control system is not to eliminate fluctuation but to live with it. The caution worth keeping is his repeated warning at the end of the book: the same machinery of control can extend human capability or be turned to dominating people, and the scientist cannot hand the consequences off to the user. It forms the inside of this site\'s "The Ledger of Division of Labor": that piece shows how splitting work leaves individuals unable to see the outcome of their own labour, and this book explains why a structure that cannot see its own output cannot correct itself.',
    questions_zh: [
      '为什么说智能「不在部件里，而在回路里」？',
      '反馈既然这么好，为什么系统不能追求「零波动」？',
      '维纳为什么坚持「科学家不能把后果推给使用者」？',
    ],
    questions_en: [
      'Why is intelligence located "in the loop, not in any component"?',
      'If feedback is so effective, why can a system not pursue "zero fluctuation"?',
      'Why does Wiener insist that scientists cannot hand the consequences off to users?',
    ],
    answers_zh: [
      '因为稳定的伺服机构单看每个零件都很笨：误差检测、反馈、修正的循环才是「智能」的发生地。拆掉任何一个部件，回路断，行为就消失——行为属于结构，不属于零件。',
      '因为噪声、滞后是回路的固有成分：追求零波动等于要求无限增益，而增益过大会自激震荡、消灭系统本身。控制是与波动共处的艺术，不是对波动的战争。',
      '因为设计控制装置时就嵌入了它的用途范围：可扩展能力的同一结构也可用于支配，选择做什么不做什么发生在实验室里，不在市场上。把后果推给使用者，是假装选择不是自己做的。',
    ],
    answers_en: [
      'Because every part of a stable servomechanism is individually stupid: error detection, feedback, correction — the loop is where the "intelligence" happens. Remove any part, the loop breaks, the behaviour vanishes. Behaviour belongs to the structure, not to the components.',
      'Because noise and lag are constituents of any loop: pursuing zero fluctuation demands infinite gain, and excessive gain produces self-exciting oscillation that destroys the system. Control is the art of living with fluctuation, not a war against it.',
      'Because the range of uses is embedded at the moment of design: the same structure that extends capability can be turned to domination, and the choice of what to build or not build is made in the laboratory, not the market. Handing the consequences to users is pretending the choice was not yours.',
    ],
    topics: ['ai', 'computing', 'systems-thinking'],
  },
  {
    id: 'note-015',
    slug: 'bad-beliefs-rationality-in-a-polluted-environment',
    book: 'bad-beliefs',
    date: '2026-10-13',
    voice: 'editorial',
    key_insight_zh:
      '坏信念不是愚蠢的产物，而是理性在污染环境中照常运转的副产品——它不挑智商，挑的是环境。',
    key_insight_en:
      'Bad beliefs are not a product of stupidity but a by-product of rationality running as normal in a polluted environment — they select for environment, not for intelligence.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把坏信念从「愚蠢」重新描述为环境的产物：人照常推理，只是推理所依赖的信息与权威结构被系统性地污染了，于是理性的运转方式本身没有出错，产出却是错的。它真正改变的是责任的归属——如果坏信念是环境病，那么纠正的对象就是公共的信息条件，而不是某个人的智商，这也解释了为什么高学历在此并不构成免疫力。容易被忽略的一点是，书中保留了「照常推理」这一层：人并没有放弃理性，恰恰是理性在污染的输入下把他们送到了错误结论，因此「再多想想」本身不是解药。值得警惕的是由此产生的推论：若把一切都归因于环境，个体的判断责任就被彻底豁免，而这正是坏信念赖以蔓延的另一种土壤。它与本站《警告的代价》一文互为表里：那篇讲警告为何在外部被吞没，这本讲的正是清醒的头脑如何在内部被污染。',
    thinking_en:
      'The key move in this book is to redescribe bad beliefs as a product of environment rather than of stupidity: people reason exactly as they normally do, but the information and the structures of authority that reasoning depends on have been systematically polluted, so the machinery of rationality is not itself at fault even though its output is wrong. What it genuinely changes is where responsibility sits — if bad beliefs are an environmental disease, then what has to be corrected is the public condition of information rather than someone\'s intelligence, which also explains why higher education confers no immunity here. The easily missed point is that the book preserves the layer of "reasoning as normal": people have not abandoned rationality; it is precisely rationality operating on polluted input that delivers them to the wrong conclusion, so "just think harder" is not the remedy. The caution worth keeping is the inference that follows if one presses this too far: if everything is attributed to environment, individual responsibility for judgement is waived altogether, and that waiver is itself one of the soils in which bad beliefs spread. It forms two halves with this site\'s "The Price of Warning": that piece examines how a warning is swallowed up on the outside, and this book examines how a clear head is corrupted on the inside.',
    questions_zh: [
      '为什么高学历、高智商不构成对坏信念的免疫力？',
      '「再多想想」为什么不是解药？',
      '如果一切都是环境的错，判断的责任在哪里停住？',
    ],
    questions_en: [
      'Why do education and intelligence confer no immunity against bad beliefs?',
      'Why is "think harder" not the remedy?',
      'If everything is the environment\'s fault, where does the responsibility for judgement stop?',
    ],
    answers_zh: [
      '因为推理能力处理的是输入质量：同样的推理机制喂给污染的信息与权威结构，产出同样错，且推理越强，自圆其说的能力越强。智力放大方向，不保证方向正确。',
      '因为需要在污染的输入里「再想」，想得越深只是把错误论证得更严密。解药在输入端：改善信息条件与验证机制，而不是加大推演功率。',
      '停在「个体对自身输入负有部分责任」：选择信息源、容忍反证的程度、是否接触对立论证，仍是个人可控制的变量。完全归因于环境，等于宣布没有人该为自己的信念做任何事。',
    ],
    answers_en: [
      'Because reasoning power processes input quality: feed the same machinery polluted information and structures of authority and the output is equally wrong — and the stronger the reasoning, the better the rationalisation. Intelligence amplifies direction; it does not guarantee the direction is right.',
      'Because "thinking harder" has to be done on polluted input, and thinking harder only argues the error more thoroughly. The remedy is at the input end: improving information conditions and verification mechanisms, not increasing inferential wattage.',
      'It stops at "the individual bears partial responsibility for their own input": which sources you choose, how much counter-evidence you tolerate, whether you engage opposing arguments — these remain within personal control. Attributing everything to the environment declares that no one should do anything about their own beliefs.',
    ],
    topics: ['cognitive-science', 'philosophy', 'modern-society'],
  },
  {
    id: 'note-016',
    slug: 'philosophical-investigations-rule-following-as-practice',
    book: 'philosophical-investigations',
    date: '2026-10-14',
    voice: 'editorial',
    key_insight_zh:
      '规则不能决定自己的应用——遵守规则是一种实践、一种制度，而不是一次解释；标准的约束力来自共同执行的实践，而不来自标准自身的正确性。',
    key_insight_en:
      'A rule cannot determine its own application: following a rule is a practice, a custom, an institution, not an interpretation. The binding force of a standard comes from a shared practice, never from the standard\'s own correctness.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把「遵守规则」从一种私人心理活动改写为一种公共实践：任何规则都无法独自决定下一步该怎么做，因为每一个下一步都能被解释成与规则相符，于是规则与「对规则的解释」之间需要一个本身不属于解释的东西来收口，那就是一群人反复做同一件事所形成的惯例。它真正改变的是对「标准」的理解——标准之所以有约束力，不是因为它正确，而是因为有人在照着它做，而且这种做法是被共享的；一个没有安装基数的规则，在这个论证里是空的。容易被忽略的一点是，这一论证同时切断了「心中存在一个正确用法」这条退路：私人语言之所以不可能，是因为没有人能替他确认自己是否用对了。值得警惕的是由此推出的反面：既然规则依赖实践，那么「换一个更好的做法」就不是纯粹的技术判断，而要等到共同实践能够整体迁移。它与本站《锁定的窗口期》一文正好相接：那篇讲转换成本为何沉淀在人与惯例上，这本讲的正是惯例为何是规则唯一的落点。',
    thinking_en:
      'The key move in this book is to rewrite "following a rule" from a private mental act into a public practice: no rule can determine its own next application on its own, since every next step can be construed as according with the rule, and so the gap between a rule and an interpretation of it must be closed by something that is not itself an interpretation — namely a convention formed by a group of people doing the same thing repeatedly. What it genuinely changes is the understanding of what a standard is: a standard binds not because it is correct but because people act on it and that way of acting is shared; a rule with no installed base is, on this account, empty. The easily missed point is that the argument also closes off the retreat of a privately held correct usage — a purely private language is impossible because no one else can confirm whether it has been used correctly. The caution worth keeping is the corollary: if rules rest on practice, then switching to a better way of doing things is not a purely technical judgement but has to wait until the shared practice can migrate as a whole. It meets this site\'s "The Window Before Lock-In" head on: that piece examines why switching costs settle in people and conventions, and this book explains why conventions are the only place a rule can land.',
    questions_zh: [
      '为什么说「再完美的标准」也无法决定自己的应用？',
      '「没有安装基数的规则是空的」——这对推行新标准的团队意味着什么？',
      '私下坚持「我的理解才对」为什么不可行？',
    ],
    questions_en: [
      'Why can even a perfectly written standard not determine its own application?',
      'What does "a rule with no installed base is empty" mean for a team rolling out a new standard?',
      'Why is privately insisting "my understanding is the correct one" not viable?',
    ],
    answers_zh: [
      '因为任何一步都能被解释成符合规则，也都能被解释成不符合：规则与应用之间隔着解释，而解释没有终结机制。给规则加「解释规则的规则」，只是把问题推给了新的规则。',
      '意味着换标准的成败不在文件质量，而在共同实践能否整体迁移：需要有人反复照着做、有样板、有反馈、有容错。只发文档不改实践的推行，等于给一座空岛颁布法律。',
      '因为「对」的标准本身依赖共同实践来确认：没有人能替他核验。私人语言的不可能性不是逻辑洁癖，而是确认机制不存在——对错是社会性的落点。',
    ],
    answers_en: [
      'Because every next step can be construed as according with the rule and as contrary to it: between a rule and its application sits an interpretation, and interpretation has no terminating mechanism. Adding "rules for interpreting rules" just pushes the problem onto the new rules.',
      'It means success depends not on the document\'s quality but on whether the shared practice can migrate as a whole: people acting on it repeatedly, exemplars, feedback, tolerance for error. Rolling out a document without changing practice is legislating for an empty island.',
      'Because the standard of "correct" itself rests on shared practice: no one can verify it on his behalf. The impossibility of a private language is not logical fastidiousness — it is that no confirmation mechanism exists. Right and wrong land socially.',
    ],
    topics: ['philosophy', 'cognitive-science'],
  },
  {
    id: 'note-017',
    slug: 'the-human-condition-action-reveals-the-who',
    book: 'the-human-condition',
    date: '2026-10-15',
    voice: 'editorial',
    key_insight_zh:
      '阿伦特把人的活动分成劳动、工作与行动三层：劳动循环而匿名，工作留下持久的物，唯有行动必然揭示「谁」——它无法匿名，因此责任不是制度外加的负担，而是行动本身固有的属性。',
    key_insight_en:
      'Arendt sorts human activity into three layers — labour, work, and action. Labour is cyclical and anonymous, work leaves durable objects behind, and only action necessarily discloses the "who": it cannot be anonymous, so responsibility is not a burden added by institutions but a property inherent in acting at all.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把「人在做什么」拆成三个层次：劳动对应生命的必然循环，产物随即被消耗，做事的人不留痕迹；工作制造出比制造者活得更久的人工物，从工具到建筑都是这一类；行动则发生在人与人的公共空间里，它的产物不是物品，而是被共同见证的一件事。它真正改变的是「身份从哪里来」这个判断——人的独特性不是从劳动或工作中得到的，劳动与工作回答的都是「什么」，只有行动回答「谁」，而回答「谁」意味着行动者无法躲在角色后面。容易被忽略的一点是，阿伦特把现代社会的主要危险描述为人被降格为「劳动动物」：当谋生的循环占据了全部时间，行动的公共空间就萎缩了，而人一旦只以角色身份出现，就失去了被要求回答的条件。值得警惕的是这个论证容易被读成一种怀旧——它其实不是要求退回城邦，而是指出：凡是把参与者彻底还原为职能的组织，都在系统性地生产「无人可被追问」的状态。它与本站《责任的稀释》一文互为表里：那篇讲责任如何在工序的分段中被稀释，这本讲的正是行动为何在根上不能被匿名。',
    thinking_en:
      'The key move of this book is to split "what people are doing" into three layers: labour answers the necessary cycle of life, its product is consumed almost at once, and the one who does it leaves no trace; work produces artifacts that outlast their maker, from tools to buildings; action takes place in a public space between people, and what it produces is not an object but an event witnessed in common. What it genuinely changes is the answer to where identity comes from — human distinctness is not obtained through labour or work, since both answer the question "what," and only action answers "who," and to answer "who" is to be unable to hide behind a role. The easily missed point is that Arendt names the main danger of modern society as the reduction of human beings to "labour animals": when the cycle of making a living occupies all the time, the public space of action shrinks, and a person who appears only as a function loses the very condition of being called to account. The caution worth keeping is that the argument is easily misread as nostalgia — it is not a demand to return to the polis but a claim that any organization reducing its participants to pure function is systematically manufacturing a state in which no one can be questioned. It forms two halves with this site\'s "The Dilution of Responsibility": that piece examines how responsibility thins out as work is cut into stages, and this book explains why action cannot be anonymous in the first place.',
    questions_zh: [
      '为什么说劳动和工作回答「什么」，只有行动回答「谁」？',
      '「被降格为劳动动物」的现代社会危险，具体危险在哪里？',
      '「凡是把参与者彻底还原为职能的组织，都在生产无人可被追问的状态」——你见过这种状态吗？',
    ],
    questions_en: [
      'Why do labour and work answer "what," while only action answers "who"?',
      'Where does the concrete danger of being reduced to a "labour animal" lie?',
      'Have you seen an organisation manufacturing a state in which no one can be questioned?',
    ],
    answers_zh: [
      '因为劳动的产物随即被消耗、工作的物比人长久——两者都只留下结果，不留下做事的人。行动发生在人与人之间，被共同见证的正是这个「谁」：见证需要主体，所以行动无法匿名。',
      '在当谋生的循环占满全部时间，公共空间萎缩、人只以角色出现，就失去了被追问的条件：没有谁在场，也就没有谁能被要求回答。危险不是变笨，是变得不可被追问。',
      '典型是每个环节都说「我只负责这一段」的失败事故：每个人都完成了职能，结果无人负责。职能完备而主体缺席，正是行动被还原成劳动的标记。',
    ],
    answers_en: [
      'Because the product of labour is consumed at once and the artifact of work outlasts its maker — both leave results, not the person who acted. Action takes place between people, and what is witnessed in common is precisely this "who": witnessing requires a subject, so action cannot be anonymous.',
      'In this: when the cycle of making a living occupies all the time, the public space shrinks and people appear only as functions — losing the condition of being called to account. If no one is present, no one can be required to answer. The danger is not stupidity but becoming unquestionable.',
      'The classic case is the failed incident where every stage says "my job was only this part": everyone completed their function and no one was responsible. Functions complete but subjects absent — that is exactly the mark of action reduced to labour.',
    ],
    topics: ['philosophy', 'power-and-politics', 'modern-society'],
  },
  {
    id: 'note-018',
    slug: 'the-concept-of-mind-category-mistake',
    book: 'the-concept-of-mind',
    date: '2026-10-16',
    voice: 'editorial',
    key_insight_zh:
      '伪问题不是愚蠢的产物，而是「范畴错误」的产物——把属于一种逻辑类型的词用在另一种类型上，问题就永远找不到答案，因为它从一开始就不是一个真问题。',
    key_insight_en:
      'Pseudo-problems are not the product of stupidity but of the category mistake: apply a word from one logical type to something of another type, and the question can never be answered, because it was never a genuine question to begin with.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把一大批关于心灵的争论诊断为一种范畴错误：当一位访客看遍了学院的各座楼、图书馆与实验室之后问「那么大学在哪里」，他并不缺少信息，而是把「大学」当成了与那些楼同一类型的另一个东西。它真正改变的是「找不到答案」这件事的性质——在这类问题里继续寻找答案只会加固错误，因为需要的不是更细的观察，而是重新确认问题本身属于哪一类。容易被忽略的一点是，赖尔针对的并不只是笛卡尔式的实体二元论，而是那种把心智当作一个「内部场所」、把心理词当作对某种内部事件的报告的整个语言习惯；他指出许多心理词描述的是做事的方式与倾向，而不是藏在行为背后的东西。值得警惕的是这套诊断容易被反向滥用：把任何自己不愿回答的问题都宣布为范畴错误，恰恰是对它最糟糕的模仿，因为判据不是「答不上来」，而是能否指出被混用的究竟是哪两种逻辑类型。它与本站《分类先于发现》一文构成一对照面：那篇讲分类一旦被制度固化就取得事实地位，这本讲的正是分类的错位如何在根上生产出永远无解的问题。',
    thinking_en:
      'The key move of this book is to diagnose a large family of disputes about the mind as a category mistake: when a visitor has been shown the colleges, the libraries, and the laboratories and then asks "but where is the University?", he is not short of information — he has treated the University as one more item of the same type as the buildings. What it genuinely changes is the nature of "not being able to find an answer": in questions of this kind, looking harder only reinforces the error, because what is needed is not finer observation but a re-check of which type the question itself belongs to. The easily missed point is that Ryle is aiming not only at Cartesian substance dualism but at an entire habit of speech that treats the mind as an inner place and mental words as reports of inner events; many mental words, he argues, describe ways of doing things and dispositions to do them, not something hidden behind the behaviour. The caution worth keeping is that the diagnosis is easily abused in reverse: declaring any inconvenient question a category mistake is the worst imitation of it, since the test is not "I cannot answer" but whether one can say which two logical types have been conflated. It forms a diptych with this site\'s "The Order Before the Thing": that piece examines how a classification acquires the standing of fact once institutions harden it, and this book examines how a mis-placed classification manufactures questions that can never be answered.',
    questions_zh: [
      '为什么「大学在哪里」式的问题，再仔细观察也找不到答案？',
      '「很多心理词描述的是倾向与做法，而非内部事件」——这个区分改变了什么？',
      '把任何不想答的问题都宣布为「范畴错误」，为什么是对这套诊断最糟的滥用？',
    ],
    questions_en: [
      'Why can\'t questions like "where is the University?" be answered by looking harder?',
      'What does the claim that many mental words describe dispositions and ways of doing things change?',
      'Why is declaring every inconvenient question a category mistake the worst abuse of this diagnosis?',
    ],
    answers_zh: [
      '因为它把「大学」当成了与图书馆、实验室同一类型的又一个东西，而大学是这些要素之间的关系。在类型错误里追加观察，只是在错误的地图上加快脚步。',
      '它把「他为什么这样」从「他内部发生了什么」改写为「他在按什么方式行事」：心理词从对隐藏事件的报告，改为对行为倾向的描述，身心对立的老问题随之消解。',
      '因为判据被换掉了：原判据是能否指出被混用的两种逻辑类型，滥用后的判据是「我答不上来」。前者可检验，后者只是豁免。',
    ],
    answers_en: [
      'Because it treats the University as one more item of the same type as the libraries and laboratories, when the University is the relation among those elements. Inside a category mistake, more observation only means walking faster on the wrong map.',
      'It rewrites "why does he act this way" from "what happened inside him" to "what manner of acting is he engaged in": mental words shift from reports of hidden events to descriptions of behavioural dispositions — and the old mind-body standoff dissolves.',
      'Because the test has been swapped: the original test is whether one can name the two logical types that have been conflated; the abused test is "I cannot answer." The first is checkable, the second is merely an exemption.',
    ],
    topics: ['philosophy', 'cognitive-science'],
  },
  {
    id: 'note-019',
    slug: 'sciences-of-the-artificial-satisficing-as-the-only-standard',
    book: 'sciences-of-the-artificial',
    date: '2026-10-17',
    voice: 'editorial',
    key_insight_zh:
      '在有限理性之下，「最优」不是难以达到，而是根本无法定义；「足够好」因此不是妥协，而是唯一可执行的理性标准——余量是满足标准的产物，不是效率计算剩下的残渣。',
    key_insight_en:
      'Under bounded rationality the optimum is not merely hard to reach but impossible to define; "good enough" is therefore not a compromise but the only executable standard of rationality — and margin is what satisficing produces, not the residue left over after an efficiency calculation.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把「理性」从一种计算能力改写成一种搜索程序：决策者不可能枚举所有选项、算出每个选项的全部后果，他只能在有限时间里搜索，并在达到某个可接受的水平时停下——西蒙把这种停下称为「满足」。它真正改变的是「次优」这个词的地位：如果最优本身不可计算，那么「足够好」就不是失败的标记，而是唯一能被执行的判据。容易被忽略的一点是那只沙滩上的蚂蚁——它走出复杂路线，复杂的其实是沙滩而不是蚂蚁；人的许多行为同样如此，看上去精妙的心智，来源常常是环境的形状。值得警惕的是这套论证常被读成「不必追求更好」的许可证，而西蒙要的恰恰是把停止规则显式化：既然搜索总要停下，那么停在哪里、由谁决定，就应当是一个公开的设计选择，而不是默认的习惯。它与本站《余量的消失》一文互为表里：那篇讲余量为何在账上永远是负号因而被优先削掉，这本讲的正是「最优」这个目标函数在有限理性下并不存在——余量于是不是浪费，而是判据的产物。',
    thinking_en:
      'The key move of this book is to rewrite rationality from a capacity for calculation into a procedure of search: a decision-maker cannot enumerate every option or compute all of their consequences, so he searches within a limited time and stops when he reaches an acceptable level — what Simon calls satisficing. What it genuinely changes is the standing of the word "suboptimal": if the optimum cannot be computed, then "good enough" is not the mark of failure but the only standard that can actually be executed. The easily missed point is the ant on the beach — its path looks intricate, but the intricacy belongs to the beach, not to the ant; much of what looks like cleverness in human behaviour likewise comes from the shape of the environment rather than from the mind. The caution worth keeping is that this argument is often read as a licence not to try harder, whereas Simon is asking for the stopping rule to be made explicit: since search must stop somewhere, where it stops and who decides should be a declared design choice rather than an unexamined habit. It forms two halves with this site\'s "The Disappearance of Slack": that piece examines why margin always enters the ledger with a minus sign and is therefore cut first, and this book explains why the objective function called "the optimum" does not exist under bounded rationality — so margin is not waste but a product of the standard itself.',
    questions_zh: [
      '为什么有限理性下「最优」不是难找，而是无法定义？',
      '「复杂的是沙滩，不是蚂蚁」这个比喻推翻了什么直觉？',
      '既然「满足」是唯一标准，「停在哪里、由谁决定」为什么必须变成公开的设计选择？',
    ],
    questions_en: [
      'Why is the optimum not merely hard to find but impossible to define under bounded rationality?',
      'What intuition does "the intricacy belongs to the beach, not the ant" overturn?',
      'If satisficing is the only standard, why must "where it stops and who decides" become a declared design choice?',
    ],
    answers_zh: [
      '因为定义最优需要枚举全部选项并算出全部后果，而这两项都超出任何决策者的计算能力。目标函数在能被计算之前就没有被完整定义过——问题不在搜索深度，在定义本身。',
      '它推翻「行为复杂度来自行为者复杂度」的直觉：蚂蚁的路线复杂，是因为沙滩的形状复杂。人的许多精妙决策同样可能是环境结构的投影——把聪明归因于自己，是误读了环境。',
      '因为搜索总要停下：停止规则不在明处就在暗处，不明说就等于交给默认习惯与最有权的人决定。公开停止规则，是把「够好了」从潜规则变成可讨论的决策。',
    ],
    answers_en: [
      'Because defining the optimum requires enumerating all options and computing all their consequences — both beyond any decision-maker. The objective function is never fully defined before it must be computed: the problem is not search depth but the definition itself.',
      'It overturns the intuition that behavioural complexity comes from the complexity of the behaver: the ant\'s path is intricate because the beach is complicated. Much of human cleverness may likewise be a projection of the environment\'s shape — crediting it to oneself misreads the environment.',
      'Because search must stop somewhere: the stopping rule is either explicit or implicit, and leaving it unstated hands it to default habits and whoever holds the most power. Making it explicit turns "good enough" from a hidden rule into a discussable decision.',
    ],
    topics: ['systems-thinking', 'decision-making', 'philosophy'],
  },
  {
    id: 'note-020',
    slug: 'the-book-of-why-counterfactuals-are-missing-data',
    book: 'the-book-of-why',
    date: '2026-10-19',
    voice: 'editorial',
    key_insight_zh:
      '数据只能告诉人「什么和什么一起出现过」，不能告诉人「改变什么会导致什么」；因果之梯的第二、三层——干预与反事实——永远无法从观察里自动读出，只能靠一个显式的模型爬上去。',
    key_insight_en:
      'Data can tell you only what occurred together, never what would change if something were changed; the second and third rungs of the ladder — intervention and counterfactual — can never be read off observation, only climbed with an explicit model.',
    quote_zh: '',
    quote_en: '',
    thinking_zh:
      '这本书的关键在于把因果问题拆成三层阶梯：底层是观察，即看见两件事同时出现；中层是干预，即主动改变一件事之后另一件会怎样；顶层是反事实，即如果当初没有那样做，结果会是什么。它真正改变的是「让数据说话」这句话的地位——珀尔反复指出，统计学习再强也只停在山脚，因为相关性本身不携带「改变之后会怎样」的信息，无论样本多大都不会自动长出这一层。容易被忽略的一点是，登上中层和顶层并不需要更多数据，而需要一个别的东西：一个关于世界如何运作的假设模型；同一批观察配上不同的因果图，会给出不同的干预结论，辛普森悖论让人不安的地方正在这里。值得警惕的是，这套框架常被读成「只要画了箭头就有了因果」，而珀尔自己的条件恰恰相反——模型必须可以被检验、被反驳，否则它只是把偏见翻译成了图。它与本站《沉默的证据》一文互为表里：那篇讲样本被结果悄悄筛掉了一部分，这本讲的是即便样本完整，观察本身也只停在第一层。',
    thinking_en:
      'The key move of this book is to split causal questions into a ladder of three rungs: at the bottom, association — seeing two things occur together; in the middle, intervention — what happens to one thing when another is deliberately changed; at the top, counterfactual — what would have happened had something not been done. What it genuinely changes is the standing of the phrase "let the data speak": Pearl argues repeatedly that statistical learning, however powerful, stays at the bottom rung, because correlation carries no information about what would happen under a change, and no sample size will grow that layer on its own. The easily missed point is that climbing to the middle and top rungs requires not more data but something else entirely — an explicit model of how the world works; the same observations paired with different causal graphs yield different conclusions about intervention, which is exactly what makes Simpson\'s paradox unsettling. The caution worth keeping is that the framework is often read as "draw the arrows and you have causation," whereas Pearl\'s own condition is the reverse: the model must be testable and refutable, or it is merely prejudice translated into a diagram. It forms two halves with this site\'s "The Evidence That Isn\'t There": that piece examines how the sample is quietly filtered by the outcome, and this book explains that even a complete sample leaves observation itself at the foot of the ladder.',
    questions_zh: [
      '为什么样本再大，也长不出「改变之后会怎样」的答案？',
      '「让数据说话」这句话错在哪里？',
      '珀尔说「画了箭头不等于有了因果」——模型怎样才算可检验？',
    ],
    questions_en: [
      'Why can no sample size, however large, produce the answer to "what happens if we change something"?',
      'What is wrong with the phrase "let the data speak"?',
      'Pearl says drawing arrows is not causation — when is a model testable?',
    ],
    answers_zh: [
      '因为观察记录的是实际发生的世界，干预问的是被改变的世界：差别不在数据量，在数据生成的方式。辛普森悖论证明的正是同一批观察配不同分组，会给出相反的结论。',
      '错在把相关性当作因果性的代言人：数据能说「一起出现」，不能说「导致」。把代言权交出去的同时，模型假设就悄悄溜进了结论——而那些假设从未被检验。',
      '当模型能对「干预后的新数据」做出可能被证伪的预测：可检验的模型押上自己的后果，不可检验的只是把既有偏见翻译成图形。分界线不在图形，在预测。',
    ],
    answers_en: [
      'Because observation records the world as it happened; intervention asks about a world that has been changed. The difference is not volume but how the data were generated. Simpson\'s paradox is the proof that the same observations, grouped differently, yield opposite conclusions.',
      'It mistakes correlation for a spokesperson of causation: data can say "occurred together," never "caused." The moment the spokesperson is handed over, model assumptions slip quietly into the conclusion — and those assumptions are never tested.',
      'When it makes falsifiable predictions about data generated after an intervention: a testable model stakes its own consequences; an untestable one merely translates existing prejudice into a diagram. The line runs through prediction, not through the picture.',
    ],
    topics: ['decision-making', 'science-and-nature', 'cognitive-science'],
  },
];

export default notes;
