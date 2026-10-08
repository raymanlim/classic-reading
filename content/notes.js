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
    topics: ['modern-society', 'philosophy'],
  },
];

export default notes;
