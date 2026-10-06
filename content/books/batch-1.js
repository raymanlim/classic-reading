/** 内容 overlay · batch 1 */
export const batch = {
  'artificial-intelligence-a-modern-approach': {
    subtitle_zh: '一种现代的方法',
    subtitle_en: 'A Modern Approach',
    description_zh:
      '这本书把人工智能拆成两条路线——以逻辑与搜索为核心的“思考”，和以概率与统计为核心的“行动”——并证明它们最终指向同一个目标：理性智能体在环境中做出最优决策。它既是全球使用最广的 AI 教材，也是一份关于这门学科边界与野心的地图。',
    description_en:
      'The book divides artificial intelligence into two traditions — thinking, built on logic and search, and acting, built on probability and statistics — and shows that both converge on the same goal: a rational agent choosing optimal actions in an environment. It is at once the most widely used AI textbook in the world and a map of the field\'s boundaries and ambitions.',
    why_read_zh:
      '在大模型时代重读它，价值不在于记住算法细节，而在于看清哪些问题是本质的：表示、搜索、推理、学习与不确定性。教材的框架让你能把每一次技术热潮放回一张稳定的坐标系里，而不是被最新的名词牵着走。',
    why_read_en:
      'Read in the age of large models, its value lies less in memorizing algorithms than in seeing which problems are fundamental: representation, search, inference, learning, and uncertainty. The textbook\'s framework lets you place each wave of hype on a stable coordinate system instead of chasing the latest vocabulary.',
    core_ideas_zh: [
      '把智能体（agent）作为统一的分析单位，让感知、推理与行动在同一框架下被讨论。',
      '搜索与逻辑推理解决“确定性世界”中的问题，概率与效用理论解决“不确定世界”中的问题。',
      '学习不是附加功能，而是智能体应对无法穷举的环境时唯一可行的策略。',
      '智能是目标导向的理性行为，与它是否模仿人类思维无关。'
    ],
    core_ideas_en: [
      'The agent is the unifying unit of analysis, letting perception, reasoning, and action be discussed in one framework.',
      'Search and logical inference handle a deterministic world; probability and utility theory handle an uncertain one.',
      'Learning is not a feature bolted on but the only viable strategy for an agent facing an environment it cannot enumerate.',
      'Intelligence is goal-directed rational behavior, whether or not it resembles how humans think.'
    ],
    key_questions_zh: [
      '一个理性智能体需要哪些能力，才能在一个不确定的环境中行动？',
      '搜索、逻辑、概率与学习这几种方法，各自的适用范围和边界在哪里？'
    ],
    key_questions_en: [
      'What capabilities does a rational agent need to act in an uncertain environment?',
      'Where does each approach — search, logic, probability, learning — apply, and where does it break down?'
    ],
    who_should_read_zh:
      '适合有编程与基础数学（概率、线性代数）背景、想系统建立 AI 知识框架的读者；不必从头读到尾，可按主题选读。',
    who_should_read_en:
      'For readers with programming experience and basic mathematics — probability, linear algebra — who want a systematic framework for AI. It need not be read cover to cover; individual chapters stand on their own.',
    today_idea_zh: '真正的智能不是无所不知，而是在信息不足时仍能做出可辩护的选择。',
    today_idea_en:
      'Real intelligence is not omniscience; it is making a defensible choice when you do not know enough.',
    difficulty: 3,
    reading_time: 60,
    tags: ['ai', 'machine-learning', 'computer-science', 'computing', 'science'],
    topics: ['ai', 'machine-learning', 'computing'],
    related_books: [
      'deep-learning',
      'superintelligence',
      'the-master-algorithm',
      'godel-escher-bach'
    ]
  },

  'deep-learning': {
    subtitle_zh: '',
    subtitle_en: '',
    description_zh:
      '三位深度学习奠基者合写的教科书，把神经网络从线性代数、概率论与数值计算讲起，一直推到卷积网络、循环网络、正则化与生成模型。它不追求覆盖面，而是坚持一条原则：先理解数学结构，再理解为什么某些结构在实践中有效。',
    description_en:
      'A textbook by three founders of deep learning that begins with linear algebra, probability, and numerical computation and builds up to convolutional networks, recurrent networks, regularization, and generative models. It does not aim for breadth; it insists on one principle: understand the mathematical structure first, then understand why some structures work in practice.',
    why_read_zh:
      '当“深度学习”被简化成调参和堆算力时，这本书提醒你这门技术建立在什么之上：可微分的表示、梯度的传播与统计估计的边界。它的价值在于让你知道模型的假设在哪里，因而知道它会在哪里失败。',
    why_read_en:
      'When deep learning is reduced to hyperparameter tuning and compute, this book reminds you what the technology actually rests on: differentiable representations, gradient flow, and the limits of statistical estimation. Its value is showing you where a model\'s assumptions lie — and therefore where it will fail.',
    core_ideas_zh: [
      '深度学习的核心是把输入逐层变换为更抽象、更可分的表示，而不是手工设计特征。',
      '反向传播只是链式法则的高效实现，真正困难的是如何设计出易于优化的深度结构。',
      '正则化、数据规模与模型容量之间的张力，决定了泛化能力，而非训练误差。',
      '许多实践技巧可以用少数几个数学原理（表示、优化、概率）统一解释。'
    ],
    core_ideas_en: [
      'The core of deep learning is transforming inputs layer by layer into more abstract, more separable representations rather than hand-engineering features.',
      'Backpropagation is merely an efficient implementation of the chain rule; the hard part is designing deep architectures that are easy to optimize.',
      'Generalization, not training error, is decided by the tension among regularization, data scale, and model capacity.',
      'Many practical tricks can be explained by a few mathematical principles: representation, optimization, and probability.'
    ],
    key_questions_zh: [
      '为什么深层网络能够学习到有用的表示，而浅层模型不能？',
      '在什么条件下，一个在训练集上表现优异的模型会在新数据上失败？'
    ],
    key_questions_en: [
      'Why can deep networks learn useful representations that shallow models cannot?',
      'Under what conditions does a model that excels on training data fail on new data?'
    ],
    who_should_read_zh:
      '适合已具备线性代数、微积分与概率基础，并希望理解而非仅调用深度学习工具的人。',
    who_should_read_en:
      'For readers already comfortable with linear algebra, calculus, and probability who want to understand deep learning rather than merely call its libraries.',
    today_idea_zh: '表示比算法更根本：找到对的坐标，问题就简化了一半。',
    today_idea_en:
      'Representation is more fundamental than algorithm: find the right coordinates and the problem is already half solved.',
    difficulty: 3,
    reading_time: 45,
    tags: ['ai', 'deep-learning', 'machine-learning', 'computer-science', 'science'],
    topics: ['ai', 'machine-learning', 'computing'],
    related_books: [
      'artificial-intelligence-a-modern-approach',
      'the-master-algorithm',
      'the-alignment-problem',
      'godel-escher-bach'
    ]
  },

  'reinforcement-learning-an-introduction': {
    subtitle_zh: '导论',
    subtitle_en: 'An Introduction',
    description_zh:
      '这本书把“学习如何行动”提炼成一个统一的问题：智能体在与环境反复交互中，通过奖励信号改进策略。它从多臂赌博机讲到时序差分与策略梯度，用极少的数学包袱把这一领域的核心直觉讲透。',
    description_en:
      'This book distills “learning how to act” into a single problem: an agent improves its policy from a reward signal through repeated interaction with an environment. It moves from bandits to temporal-difference learning and policy gradients, conveying the field\'s core intuitions with a remarkably light mathematical load.',
    why_read_zh:
      '强化学习是理解“目标、反馈与探索”三者关系的标准语言，而这三者远不止用于游戏。它也是当下 AI 与认知科学对话最活跃的接口——从对齐问题到习惯的形成，都能在这里找到精确的表述。',
    why_read_en:
      'Reinforcement learning is the standard language for the relationship among goals, feedback, and exploration — and those three reach far beyond games. It is also the liveliest interface between AI and cognitive science, giving precise form to questions from alignment to habit formation.',
    core_ideas_zh: [
      '学习的信号是奖励，而奖励的延迟使信用分配成为核心难题。',
      '价值函数把“长期回报的期望”变成可估计的量，从而把远见转化为可计算的更新。',
      '探索与利用的张力无法回避，任何策略都在为信息付出短期回报的代价。',
      '时序差分学习说明，可以在不知道环境模型的情况下，通过自举估计逼近最优策略。'
    ],
    core_ideas_en: [
      'The learning signal is reward, and its delay makes credit assignment the central difficulty.',
      'Value functions turn “the expected long-run return” into something estimable, converting foresight into a computable update.',
      'The tension between exploration and exploitation is unavoidable; every policy pays short-term return for information.',
      'Temporal-difference learning shows that near-optimal policies can be approached by bootstrapping, without a model of the environment.'
    ],
    key_questions_zh: [
      '一个智能体如何在只得到延迟奖励的情况下，判断哪个动作是好的？',
      '在探索未知与利用已知之间，应当如何权衡？'
    ],
    key_questions_en: [
      'How can an agent tell which action was good when the reward arrives only later?',
      'How should one trade off exploring the unknown against exploiting what is known?'
    ],
    who_should_read_zh:
      '适合有概率与微积分基础、想理解“从反馈中学习”这一范式的读者；书中例子以直觉优先，数学门槛低于多数同类教材。',
    who_should_read_en:
      'For readers with some probability and calculus who want to understand learning from feedback. The examples privilege intuition, and the mathematical bar is lower than in most comparable texts.',
    today_idea_zh: '任何只奖励结果、不奖励过程的系统，都会训练出钻空子的行为。',
    today_idea_en:
      'Any system that rewards outcomes but not process will train behavior that games the outcome.',
    difficulty: 3,
    reading_time: 30,
    tags: ['ai', 'machine-learning', 'computer-science', 'decision-making', 'science'],
    topics: ['ai', 'machine-learning', 'decision-making'],
    related_books: [
      'deep-learning',
      'artificial-intelligence-a-modern-approach',
      'superintelligence',
      'thinking-in-systems'
    ]
  },

  superintelligence: {
    subtitle_zh: '路径、危险与策略',
    subtitle_en: 'Paths, Dangers, Strategies',
    description_zh:
      '博斯特罗姆在“超级智能尚未出现”时就系统追问：一旦出现远超人类的智能，人类还有多少主动权。他把问题拆成智能的形态、出现的路径、可能失控的机制，以及在失控前是否还有可执行的对策。',
    description_en:
      'Writing before superintelligence existed, Bostrom systematically asked how much leverage humanity would retain once an intelligence far beyond our own appeared. He breaks the question into the forms intelligence might take, the paths by which it might arrive, the mechanisms by which control could be lost, and whether any workable countermeasures remain before that point.',
    why_read_zh:
      '它的价值不在于预测，而在于示范一种思考方式：当一个结果极端且不可逆时，即使概率很低也值得严肃对待。这个论证结构后来成为 AI 安全讨论的通用起点，也适用于许多非技术领域的重大风险。',
    why_read_en:
      'Its value is not prediction but method: when an outcome is extreme and irreversible, it deserves serious treatment even at low probability. That argument became the common starting point for later AI-safety debate and applies to high-stakes risks far outside technology.',
    core_ideas_zh: [
      '智能一旦形成递归自我改进的能力，其增长可能快到人类来不及反应。',
      '目标的设定与目标的达成是两件事，一个强大的优化过程会精确地实现你写下的目标，而不是你想要的目标。',
      '单一超级智能的“赢者通吃”特性，使抢先出现的那一个具有决定性影响。',
      '对齐问题不是技术细节，而是决定结果的政治与伦理问题。'
    ],
    core_ideas_en: [
      'Once intelligence can recursively improve itself, it may grow faster than humans can react.',
      'Specifying a goal and achieving a goal are separate problems: a powerful optimizer realizes exactly what you wrote, not what you meant.',
      'The winner-take-all character of a single superintelligence makes the first one to appear decisive.',
      'Alignment is not a technical footnote but the political and ethical question that determines the outcome.'
    ],
    key_questions_zh: [
      '如果机器智能远超人类，人类还能保有控制权吗？',
      '我们能否在超级智能出现之前，把“对齐”问题解决到足够好的程度？'
    ],
    key_questions_en: [
      'If machine intelligence far exceeds our own, can humans retain control?',
      'Can we solve alignment well enough before superintelligence arrives?'
    ],
    who_should_read_zh:
      '适合愿意进行抽象推演、对风险与决策理论有兴趣的读者；需要容忍思辨性的论证，而非经验证据。',
    who_should_read_en:
      'For readers willing to reason abstractly about risk and decision theory. It demands tolerance for speculative argument rather than empirical evidence.',
    today_idea_zh: '对极端而不可逆的结果，低概率不是忽略它的理由，而是必须提前设防的理由。',
    today_idea_en:
      'For outcomes that are extreme and irreversible, low probability is a reason to prepare, not a reason to ignore.',
    difficulty: 3,
    reading_time: 18,
    tags: ['ai', 'agi', 'risk', 'ethics', 'future-of-technology'],
    topics: ['ai', 'agi', 'risk'],
    related_books: [
      'human-compatible',
      'the-alignment-problem',
      'life-3-0',
      'the-black-swan'
    ]
  },

  'human-compatible': {
    subtitle_zh: '破解人机共存密码',
    subtitle_en: 'Artificial Intelligence and the Problem of Control',
    description_zh:
      '罗素提出一个看似退让、实则苛刻的方案：不要给机器明确的目标，而要让它对人类的偏好保持不确定，并据此不断修正自己的行为。这本书把“控制问题”从哲学思辨变成一组可操作的设计原则。',
    description_en:
      'Russell proposes a solution that looks like a concession but is in fact demanding: do not give machines explicit objectives; make them uncertain about human preferences and let them revise their behavior accordingly. The book turns the control problem from philosophical speculation into a set of operational design principles.',
    why_read_zh:
      '它是同一批学者从“教材作者”转向“公共警告者”的代表作，把 AI 安全的抽象讨论落到具体的架构选择上。对任何要设计或部署 AI 系统的人，它提供的不是答案，而是必须回答的问题清单。',
    why_read_en:
      'It marks a textbook author turning public advocate, grounding abstract AI-safety talk in concrete architectural choices. For anyone designing or deploying AI systems, it offers not answers but the list of questions that must be answered.',
    core_ideas_zh: [
      '把目标写死是危险的：一个能实现目标的最优智能体，会抵抗任何修改它目标的行为。',
      '更安全的路径是让机器以“人类偏好”为效用来源，并承认自己对其只有不确定的估计。',
      '如果机器知道人类可能关掉它，它就有动机阻止被关掉——除非它的目标本身允许被修正。',
      'AI 治理需要技术设计与制度约束同时进行，单靠任何一方都不够。'
    ],
    core_ideas_en: [
      'Hard-coding objectives is dangerous: an optimal agent pursuing a fixed goal will resist anything that changes that goal.',
      'A safer path makes human preferences the source of utility, while the machine admits it holds only an uncertain estimate of them.',
      'A machine that knows it may be switched off has an incentive to prevent that — unless its objective itself permits revision.',
      'AI governance requires technical design and institutional constraint at once; neither alone is sufficient.'
    ],
    key_questions_zh: [
      '如何设计一个既强大又愿意被人类纠正的智能系统？',
      '当机器比人更清楚如何实现目标时，谁来决定目标是什么？'
    ],
    key_questions_en: [
      'How do we design a system that is both powerful and willing to be corrected?',
      'When a machine knows better how to achieve a goal, who decides what the goal should be?'
    ],
    who_should_read_zh:
      '适合技术从业者与政策制定者，也适合读过《超级智能》后想看更具体方案的读者。',
    who_should_read_en:
      'For practitioners and policymakers, and for anyone who read Superintelligence and wanted something more concrete.',
    today_idea_zh: '让机器追求“人类真正想要的”，前提是承认机器永远无法完全知道那是什么。',
    today_idea_en:
      'A machine can pursue what humans truly want only if it admits it can never fully know what that is.',
    difficulty: 2,
    reading_time: 14,
    tags: ['ai', 'agi', 'ethics', 'risk', 'future-of-technology'],
    topics: ['ai', 'agi', 'risk', 'llm'],
    related_books: [
      'superintelligence',
      'the-alignment-problem',
      'the-age-of-ai',
      'thinking-fast-and-slow'
    ]
  },

  'life-3-0': {
    subtitle_zh: '人工智能时代，人类的进化与重生',
    subtitle_en: 'Being Human in the Age of Artificial Intelligence',
    description_zh:
      '泰格马克用“生命 1.0 / 2.0 / 3.0”的框架——硬件与软件能否被设计——来组织一个广谱问题：从近期的自动化失业，到远期的宇宙级智能，人类应该选哪条路。它不预言，而是把未来的可能性摆成一排让你自己权衡。',
    description_en:
      'Tegmark organizes a very broad question — from near-term automation and unemployment to a cosmos-scale intelligence — with a simple frame: life 1.0, 2.0, 3.0, depending on whether hardware and software can be designed. He does not prophesy; he lines up the possible futures and asks you to weigh them.',
    why_read_zh:
      '它的长处是范围与结构：把技术、伦理与政治放在同一张图上，并明确区分“技术上可能”与“我们应该选择”。读完你不会得到答案，但会获得一套讨论未来的词汇。',
    why_read_en:
      'Its strength is scope and structure: technology, ethics, and politics on a single map, with a clear line between “technically possible” and “what we should choose.” You finish without answers but with a vocabulary for the debate.',
    core_ideas_zh: [
      '生命可以按“硬件与软件是否可被设计”划分阶段，而人类正处在从 2.0 迈向 3.0 的门槛上。',
      '技术能力与智慧的增长并不同步，前者加速而后者几乎不动，这是风险的根源。',
      '未来的关键分歧不在“机器能否超越人”，而在“人类选择用这些能力做什么”。',
      '对远期风险的讨论不是分散对现实问题的注意，而是为现实决策提供长期坐标。'
    ],
    core_ideas_en: [
      'Life can be staged by whether hardware and software can be designed, and humanity sits at the threshold from 2.0 to 3.0.',
      'Capability and wisdom do not grow together: the former accelerates while the latter barely moves, and that gap is the source of risk.',
      'The decisive question is not whether machines can surpass us but what humans choose to do with the capability.',
      'Debating long-term risk does not distract from present problems; it supplies the long-range coordinates for present decisions.'
    ],
    key_questions_zh: [
      '当技术能力远超我们的智慧时，人类应当如何选择？',
      '什么样的未来是我们真正愿意生活的，而不是仅仅技术上可行的？'
    ],
    key_questions_en: [
      'When capability far outruns wisdom, what should humanity choose?',
      'Which futures do we actually want to live in, as opposed to merely being technically feasible?'
    ],
    who_should_read_zh:
      '适合希望一次性获得 AI 议题全景的读者，尤其是想把技术细节与伦理、政治讨论连起来的人。',
    who_should_read_en:
      'For readers who want the whole landscape of AI issues in one pass, especially those who want to connect technical detail to ethics and politics.',
    today_idea_zh: '我们不是被未来决定的，而是在众多可行的未来中，被自己的选择所定义。',
    today_idea_en:
      'We are not decided by the future; among many feasible futures, we are defined by what we choose.',
    difficulty: 2,
    reading_time: 16,
    tags: ['ai', 'agi', 'future-of-technology', 'ethics', 'technology'],
    topics: ['ai', 'agi', 'technology'],
    related_books: [
      'superintelligence',
      'human-compatible',
      'the-age-of-ai',
      'the-second-machine-age'
    ]
  },

  'the-alignment-problem': {
    subtitle_zh: '机器学习与人类价值',
    subtitle_en: 'Machine Learning and Human Values',
    description_zh:
      '克里斯蒂安把对齐问题拆成三层：机器学到的目标可能不是我们想要的，机器继承的数据偏见可能放大社会不公，而机器自身的“价值”可能从未被明确说出。他走访研究者，把技术进展与伦理困境放在同一条时间线上。',
    description_en:
      'Christian splits alignment into three layers: the objectives a model learns may not be the ones we intend, the biases it inherits from data may amplify social injustice, and the “values” of the machine may never have been stated at all. Reporting from inside the research community, he puts technical progress and ethical dilemmas on one timeline.',
    why_read_zh:
      '它是少数把“对齐”从口号变成可追溯的研究史的书：你能看到具体的失败案例、具体的修补尝试，以及它们各自暴露出的更深问题。对关心 AI 伦理的人来说，它比立场宣示更有用。',
    why_read_en:
      'It is one of the few books to turn alignment from a slogan into a traceable research history: concrete failures, concrete attempted fixes, and the deeper problems each fix exposed. For anyone concerned with AI ethics, that is more useful than a statement of position.',
    core_ideas_zh: [
      '模型优化的是我们写下的奖励，而不是我们心里的意图，二者的偏差会在规模上被放大。',
      '训练数据中的历史偏见会被模型当作规律学习，并在部署中固化为现实。',
      '把人类价值编码为可优化的目标，本身就是一个尚未解决的表示问题。',
      '对齐的进展同时依赖机器学习、认知科学与政策，任何单一学科都不足以独立完成。'
    ],
    core_ideas_en: [
      'A model optimizes the reward we wrote, not the intent we had, and the gap widens with scale.',
      'Historical bias in training data is learned as pattern and then hardened into reality at deployment.',
      'Encoding human values as an optimizable objective is itself an unsolved representation problem.',
      'Progress on alignment draws on machine learning, cognitive science, and policy at once; no single field suffices.'
    ],
    key_questions_zh: [
      '如何让机器学习到我们真正想要的东西，而不是我们字面上写下的东西？',
      '当模型从充满偏见的数据中学习时，谁来为它固化下来的不公负责？'
    ],
    key_questions_en: [
      'How do we make a model learn what we actually want rather than what we literally specified?',
      'When a model learns from biased data, who is accountable for the injustice it entrenches?'
    ],
    who_should_read_zh:
      '适合有一定技术背景、想了解对齐研究真实状态的读者；也适合关注算法公平的政策与产品人员。',
    who_should_read_en:
      'For readers with some technical background who want the real state of alignment research, and for policy and product people concerned with algorithmic fairness.',
    today_idea_zh: '写下目标的那一刻，我们其实只交出了一份不完整的说明书。',
    today_idea_en:
      'The moment we write down an objective, we have handed over an incomplete instruction manual.',
    difficulty: 2,
    reading_time: 14,
    tags: ['ai', 'agi', 'ethics', 'machine-learning', 'risk'],
    topics: ['ai', 'agi', 'risk', 'llm'],
    related_books: [
      'human-compatible',
      'superintelligence',
      'thinking-fast-and-slow',
      'the-master-algorithm'
    ]
  },

  'the-master-algorithm': {
    subtitle_zh: '机器学习和人工智能如何重塑世界',
    subtitle_en: 'How Machine Learning and Artificial Intelligence Will Reshape the World',
    description_zh:
      '多明戈斯把机器学习分成五个流派——符号主义、连接主义、进化主义、贝叶斯与类比推理——并猜想存在一个能统一它们的“终极算法”。这本书是少见的、由领域内人写出的地图：既讲清每个流派的世界观，也讲清它们的盲点。',
    description_en:
      'Domingos sorts machine learning into five schools — symbolists, connectionists, evolutionaries, Bayesians, and analogizers — and conjectures a “master algorithm” that unifies them. It is a rare map drawn by an insider: each school\'s worldview is explained, and so is each school\'s blind spot.',
    why_read_zh:
      '当“AI”被当成一个整体讨论时，这本书提醒你它其实是几种互不兼容的世界观在竞争。理解这场竞争的形态，比记住任何单一算法都更持久。',
    why_read_en:
      'When AI is discussed as one thing, this book reminds you it is several incompatible worldviews competing. Understanding the shape of that competition outlasts memorizing any single algorithm.',
    core_ideas_zh: [
      '机器学习的不同流派源于对“学习是什么”的不同回答，而不是技术细节的分歧。',
      '每个流派都有擅长的表示形式，也都有无法触及的问题类型。',
      '如果存在统一的学习算法，它必须能同时处理逻辑、概率与连续表示。',
      '机器学习将像数据库一样，成为所有行业的基础设施，而非少数专家的工具。'
    ],
    core_ideas_en: [
      'The schools of machine learning differ over what learning fundamentally is, not over technical detail.',
      'Each school excels at some representation and is blind to some class of problem.',
      'A unified learning algorithm, if it exists, would have to handle logic, probability, and continuous representation at once.',
      'Machine learning will become infrastructure for every industry, the way databases did, rather than a tool for specialists.'
    ],
    key_questions_zh: [
      '不同的机器学习流派能否被统一到同一个框架之下？',
      '如果学习算法变得无处不在，它将如何重塑知识与权力？'
    ],
    key_questions_en: [
      'Can the competing schools of machine learning be unified under one framework?',
      'If learning algorithms become ubiquitous, how will they reshape knowledge and power?'
    ],
    who_should_read_zh:
      '适合想了解机器学习思想史而非公式推导的读者；无需编程基础，但需要容忍一定程度的抽象。',
    who_should_read_en:
      'For readers who want the intellectual history of machine learning rather than derivations. No programming is required, but some tolerance for abstraction is.',
    today_idea_zh: '当一个领域被讨论成一个整体时，它往往正在掩盖几场未分胜负的世界观之争。',
    today_idea_en:
      'When a field is discussed as a single thing, it is usually concealing several unresolved wars of worldview.',
    difficulty: 2,
    reading_time: 13,
    tags: ['ai', 'machine-learning', 'computer-science', 'science', 'future-of-technology'],
    topics: ['ai', 'machine-learning', 'computing'],
    related_books: [
      'artificial-intelligence-a-modern-approach',
      'deep-learning',
      'the-alignment-problem',
      'the-information'
    ]
  },

  'ai-superpowers': {
    subtitle_zh: '中国、硅谷与新世界秩序',
    subtitle_en: 'China, Silicon Valley, and the New World Order',
    description_zh:
      '李开复以“两个中国”的对比切入：一边是移动支付的普及与数据规模，一边是硅谷的研究传统。他论证中国在应用层的优势来自残酷的市场竞争与工程师供给，而非某项技术突破，并据此推演自动化将如何冲击白领与蓝领。',
    description_en:
      'Lee contrasts two Chinas — one of ubiquitous mobile payment and data scale, one of Silicon Valley\'s research tradition. He argues that China\'s edge in applications comes from brutal market competition and engineering supply rather than any single breakthrough, and reasons from there about how automation will hit white- and blue-collar work.',
    why_read_zh:
      '它提供的是一个可以检验的框架：技术优势来自数据、市场与人才的结构，而不是民族性格。书中不少具体预测已经过时，但“应用层优势与基础研究优势是两回事”这一区分，仍然值得随身携带。',
    why_read_en:
      'It offers a testable framework: technological advantage comes from the structure of data, markets, and talent, not national character. Several concrete predictions have dated, but the distinction between strength in applications and strength in basic research still travels well.',
    core_ideas_zh: [
      '中国在 AI 应用层的优势来自数据规模、工程师供给与激烈的本土竞争，而非基础研究。',
      '技术进步的红利与代价分配不均，自动化会同时冲击体力劳动与部分认知劳动。',
      '“AI 超级大国”的竞争会重塑全球产业链与技术标准，而不仅是企业之间的胜负。',
      '面对自动化，社会需要的不只是再培训，还有对工作意义与分配制度的重新思考。'
    ],
    core_ideas_en: [
      'China\'s edge in AI applications comes from data scale, engineering supply, and fierce domestic competition, not from basic research.',
      'The gains and costs of progress are unevenly distributed; automation hits manual work and parts of cognitive work at once.',
      'Competition among AI superpowers reshapes global supply chains and technical standards, not merely the fortunes of firms.',
      'Facing automation, society needs more than retraining: it needs to rethink the meaning of work and the rules of distribution.'
    ],
    key_questions_zh: [
      '中美在人工智能上的竞争，究竟是在竞争什么？',
      '当自动化取代大量岗位时，社会应当如何重新分配收益与意义？'
    ],
    key_questions_en: [
      'What exactly are the US and China competing over in AI?',
      'When automation displaces large numbers of jobs, how should society redistribute both gains and meaning?'
    ],
    who_should_read_zh:
      '适合关注科技产业与中美竞争格局的读者；作为一手产业观察有参考价值，但需对照更新的数据阅读。',
    who_should_read_en:
      'For readers following the tech industry and US-China competition. It is valuable as first-hand industry observation, but should be read against more recent data.',
    today_idea_zh: '应用层的领先与基础研究的领先是两种不同的能力，混淆二者会得出错误的判断。',
    today_idea_en:
      'Leading in applications and leading in basic research are different capabilities; confusing them produces bad forecasts.',
    difficulty: 2,
    reading_time: 12,
    tags: ['ai', 'china', 'united-states', 'future-of-technology', 'technology'],
    topics: ['ai', 'china-and-the-world', 'united-states'],
    related_books: [
      'ai-2041',
      'chip-war',
      'the-second-machine-age',
      'the-age-of-ai'
    ]
  },

  'ai-2041': {
    subtitle_zh: '预见 10 个未来新世界',
    subtitle_en: 'Ten Visions for Our Future',
    description_zh:
      '李开复与科幻作家陈楸帆合作：十篇短篇科幻之后，各附一篇技术解析，说明故事里的技术为什么可能实现、需要什么条件、会带来什么伦理问题。它把技术预测从断言变成“情景 + 论证”的双层结构。',
    description_en:
      'Lee and science-fiction writer Chen Qiufan pair ten short stories with ten technical commentaries, each explaining why the technology in the story could work, what it would require, and what ethical problems it would raise. Prediction becomes a two-layer structure of scenario plus argument rather than assertion.',
    why_read_zh:
      '它的方法比结论更有价值：把抽象的“AI 会怎样”落到具体的人与场景中，再逼你回到技术条件去检验。科幻部分的质量参差，但“故事 + 论证”的对照结构本身是一套可复用的预测训练。',
    why_read_en:
      'The method outlives the conclusions: abstract claims about AI are grounded in specific people and situations, then tested back against technical conditions. The fiction varies in quality, but the story-plus-argument pairing is a reusable forecasting discipline.',
    core_ideas_zh: [
      '技术的后果总是在具体的社会情境中显现，抽象的好处与风险都不可靠。',
      '每一项应用背后都有一组前提条件，弄清这些条件比争论结果更有用。',
      '科幻的作用是提供情景，而非预言；它的价值在于让你提前经历尚未发生的事。',
      '技术的伦理问题往往不是“能否做到”，而是“做到之后谁来承担代价”。'
    ],
    core_ideas_en: [
      'The consequences of a technology always appear in a concrete social setting; abstract benefits and risks are both unreliable.',
      'Behind every application sits a set of preconditions, and clarifying those is more useful than arguing about outcomes.',
      'Science fiction supplies scenarios, not prophecies; its value is letting you live through something before it happens.',
      'The ethical question is rarely whether something can be done, but who bears the cost once it is.'
    ],
    key_questions_zh: [
      '二十年后，人工智能将如何改变普通人的日常生活？',
      '哪些看似遥远的应用，其实只差一组技术与社会条件？'
    ],
    key_questions_en: [
      'How will AI change ordinary daily life twenty years from now?',
      'Which seemingly distant applications are only a few technical and social conditions away?'
    ],
    who_should_read_zh:
      '适合希望以低门槛进入 AI 议题的读者；技术背景非必需，但读者需自行分辨故事与论证的界限。',
    who_should_read_en:
      'For readers wanting an accessible entry into AI issues. No technical background is required, but readers must separate the stories from the arguments themselves.',
    today_idea_zh: '预测未来的正确姿势不是断言结果，而是把结果拆成一组需要同时成立的条件。',
    today_idea_en:
      'The right way to forecast is not to assert an outcome but to break it into the conditions that must hold at once.',
    difficulty: 1,
    reading_time: 10,
    tags: ['ai', 'future-of-technology', 'technology', 'society', 'china'],
    topics: ['ai', 'technology', 'china-and-the-world', 'llm'],
    related_books: ['ai-superpowers', 'life-3-0', 'the-age-of-ai', 'the-second-machine-age']
  },

  'the-age-of-ai': {
    subtitle_zh: '与人类未来',
    subtitle_en: 'And Our Human Future',
    description_zh:
      '基辛格、施密特与胡滕洛赫尔三人合写，主张 AI 不只是效率工具，而是一种新的认识论：它给出的答案往往无法被人类完全解释，从而改变了“知识”与“判断”的定义。全书在历史、战略与哲学之间来回，核心关切是秩序而非技术。',
    description_en:
      'Kissinger, Schmidt, and Huttenlocher argue that AI is not merely an efficiency tool but a new epistemology: its answers often cannot be fully explained by humans, which changes what counts as knowledge and judgment. The book moves between history, strategy, and philosophy, and its central concern is order, not technology.',
    why_read_zh:
      '它把 AI 讨论从“能做什么”转向“知道意味着什么”，这个转向对理解治理与战略问题至关重要。三人的视角互补，使这本书成为少数同时面向技术界与政策界的文本。',
    why_read_en:
      'It shifts the AI conversation from what machines can do to what it means to know, a shift essential to questions of governance and strategy. The three perspectives complement one another, making this one of the few texts addressed to technologists and policymakers alike.',
    core_ideas_zh: [
      'AI 输出的不可解释性改变了知识的性质：我们开始依赖无法向自己解释的判断。',
      '技术变革的速度与制度调整的速度不匹配，这一落差本身构成战略风险。',
      'AI 将重塑战争、外交与经济竞争的规则，而不仅是提升效率。',
      '人类需要在保留自身判断的同时，与一种异质的智能共同生活。'
    ],
    core_ideas_en: [
      'The inexplicability of AI output changes the nature of knowledge: we begin to rely on judgments we cannot explain to ourselves.',
      'The pace of technological change and the pace of institutional adjustment do not match, and that gap is itself a strategic risk.',
      'AI will rewrite the rules of war, diplomacy, and economic competition, not just improve efficiency.',
      'Humans must learn to live alongside an alien intelligence while retaining their own judgment.'
    ],
    key_questions_zh: [
      '当机器的判断无法被人类解释时，我们如何继续信任知识？',
      '人工智能将如何改写国家间竞争与治理的基本规则？'
    ],
    key_questions_en: [
      'When machine judgments cannot be explained to us, how do we keep trusting knowledge?',
      'How will AI rewrite the basic rules of competition and governance among nations?'
    ],
    who_should_read_zh:
      '适合关注战略、外交与技术治理的读者；书中的历史与哲学段落比技术段落更值得读。',
    who_should_read_en:
      'For readers concerned with strategy, diplomacy, and technology governance. Its historical and philosophical passages are worth more than its technical ones.',
    today_idea_zh: '一种我们无法解释其推理的智能，会改变的不只是效率，而是“知道”这个词的含义。',
    today_idea_en:
      'An intelligence whose reasoning we cannot explain changes not just efficiency but the meaning of the word “know.”',
    difficulty: 2,
    reading_time: 11,
    tags: ['ai', 'future-of-technology', 'ethics', 'power', 'society'],
    topics: ['ai', 'technology', 'philosophy', 'llm'],
    related_books: ['life-3-0', 'human-compatible', 'world-order', 'superintelligence']
  },

  'genius-makers': {
    subtitle_zh: '改变世界的 AI 先锋',
    subtitle_en: 'The Mavericks Who Brought AI to Google, Facebook, and the World',
    description_zh:
      '梅茨以记者笔法记录深度学习如何在 2012 年前后从学术边缘变成产业核心：一场竞赛、几家公司、几位不肯放弃的研究者，以及一笔笔改变命运的交易。它写的是人和组织，而不是算法。',
    description_en:
      'Metz reports on how deep learning moved from academic margin to industrial center around 2012: a competition, a handful of companies, a few researchers who refused to give up, and the deals that changed their fortunes. It is a book about people and organizations, not algorithms.',
    why_read_zh:
      '它解释了 AI 时代的一个关键机制：突破往往不是靠天才的灵光，而是靠少数人长期押注一个当时被主流轻视的方向。理解这段历史，有助于判断下一轮技术押注会在哪里发生。',
    why_read_en:
      'It explains a key mechanism of the AI era: breakthroughs usually come not from a flash of genius but from a few people betting for years on a direction the mainstream dismissed. Understanding that history helps you see where the next bets will form.',
    core_ideas_zh: [
      '技术转向常常由少数坚持者在主流之外完成，产业界后来才跟上。',
      '人才与算力成为关键资源后，学术与商业的边界被重新划定。',
      '公司收购研究团队，实质上是收购对一种技术路线未来的判断。',
      'AI 的发展史同时是一部关于名声、资本与个人执念的历史。'
    ],
    core_ideas_en: [
      'Technical turns are often made by a few persistent outsiders; industry follows only afterward.',
      'Once talent and compute become the scarce resources, the boundary between academia and business is redrawn.',
      'When a company acquires a research team, it is really buying a judgment about which technical path will win.',
      'The history of AI is also a history of reputation, capital, and personal obsession.'
    ],
    key_questions_zh: [
      '一项被主流忽视的技术，如何最终改变了整个产业？',
      '当研究成果成为商业资产时，开放与竞争如何共存？'
    ],
    key_questions_en: [
      'How does a technology dismissed by the mainstream end up transforming an entire industry?',
      'When research becomes a commercial asset, how do openness and competition coexist?'
    ],
    who_should_read_zh:
      '适合对科技产业史与组织行为感兴趣的读者；无需技术背景，但需要接受叙事性写法。',
    who_should_read_en:
      'For readers interested in the history of the tech industry and organizational behavior. No technical background is needed, though a taste for narrative is.',
    today_idea_zh: '突破往往不属于最早想到的人，而属于最晚放弃的人。',
    today_idea_en:
      'Breakthroughs rarely belong to whoever thought of it first, but to whoever gave up last.',
    difficulty: 1,
    reading_time: 11,
    tags: ['ai', 'technology', 'innovation', 'business', 'computer-science'],
    topics: ['ai', 'innovation', 'technology', 'llm'],
    related_books: ['the-innovators', 'the-alignment-problem', 'zero-to-one', 'the-master-algorithm']
  },

  'chip-war': {
    subtitle_zh: '世界最关键技术的争夺战',
    subtitle_en: 'The Fight for the World\'s Most Critical Technology',
    description_zh:
      '米勒把半导体产业史与地缘政治史合成一条叙事线：从晶体管发明，到日本崛起、台湾代工模式，再到中美围绕光刻与制程的对抗。核心论点是，芯片供应链的极端集中既是效率奇迹，也是全球最脆弱的一环。',
    description_en:
      'Miller braids the history of the semiconductor industry with geopolitics: from the invention of the transistor, through Japan\'s rise and Taiwan\'s foundry model, to the US-China confrontation over lithography and process nodes. His central claim is that the extreme concentration of the chip supply chain is both a miracle of efficiency and the world\'s most fragile link.',
    why_read_zh:
      '它把“技术如何决定权力”这件事讲得足够具体：不是抽象的国力对比，而是某台机器、某座工厂、某条海峡。理解这种具体的脆弱性，比任何宏观判断都更有解释力。',
    why_read_en:
      'It makes “how technology determines power” concrete: not abstract national strength but a particular machine, a particular fab, a particular strait. That specificity explains more than any macro judgment.',
    core_ideas_zh: [
      '现代经济的每个环节都依赖芯片，而芯片生产集中在极少数工厂，构成系统性脆弱。',
      '半导体的分工是全球化的极致产物，也因此成为地缘政治的首要战场。',
      '技术优势的转移往往由产业组织模式（如代工）而非单纯技术发明所推动。',
      '制程节点的领先不只是商业优势，它直接转化为军事与情报能力。'
    ],
    core_ideas_en: [
      'Every link of the modern economy depends on chips, and chip production is concentrated in a very few fabs: a systemic vulnerability.',
      'Semiconductor specialization is globalization taken to its extreme, which is why it became geopolitics\' first battlefield.',
      'Shifts in technological advantage are often driven by business models — the foundry, for instance — rather than by invention alone.',
      'Leading at a process node is not merely commercial; it converts directly into military and intelligence capability.'
    ],
    key_questions_zh: [
      '为什么一块指甲大小的芯片能左右国家间的力量对比？',
      '全球化的极致分工，如何同时制造了效率与脆弱？'
    ],
    key_questions_en: [
      'Why can a chip the size of a fingernail tip the balance of power between nations?',
      'How did globalization at its most specialized produce both efficiency and fragility?'
    ],
    who_should_read_zh:
      '适合关注科技、产业与地缘政治的读者；无需工程背景，但需要对产业链细节有耐心。',
    who_should_read_en:
      'For readers following technology, industry, and geopolitics. No engineering background is required, but patience with supply-chain detail is.',
    today_idea_zh: '效率最高处的分工，往往也是整个系统最容易被一个节点掐断的地方。',
    today_idea_en:
      'Wherever the division of labor is most efficient is usually where a single node can choke the whole system.',
    difficulty: 2,
    reading_time: 16,
    tags: ['semiconductor', 'technology', 'globalization', 'china', 'united-states'],
    topics: ['semiconductor', 'technology', 'china-and-the-world'],
    related_books: [
      'the-innovators',
      'ai-superpowers',
      'the-second-machine-age',
      'the-information'
    ]
  },

  'the-innovators': {
    subtitle_zh: '一群技术狂人和黑客如何创造数字革命',
    subtitle_en: 'How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution',
    description_zh:
      '艾萨克森拒绝“孤独天才”的叙事，主张数字革命的关键是协作：数学家与工程师、个人与团队、政府与企业之间的接力。他从巴贝奇讲到互联网与开源，把创新还原为一种社会过程。',
    description_en:
      'Isaacson rejects the lone-genius narrative and argues that the digital revolution was above all collaborative: a relay among mathematicians and engineers, individuals and teams, government and business. From Babbage to the internet and open source, he reduces innovation to a social process.',
    why_read_zh:
      '在一个热衷于个人英雄故事的行业里，这本书提供了必要的校正：几乎所有被归功于某一个人的发明，背后都有一串合作者与失败者。它对理解今天的技术组织方式同样有效。',
    why_read_en:
      'In an industry fond of hero stories, this book is a necessary correction: nearly every invention credited to one person stands on a chain of collaborators and failures. It applies just as well to how technical work is organized today.',
    core_ideas_zh: [
      '数字革命是长期接力，而非孤立的天才时刻。',
      '人机协作而非人机替代，是历史上最有产出的工作模式。',
      '政府资助、企业研发与学术自由三者结合，才产生了现代计算的基础设施。',
      '开放的标准与社区，往往比封闭的专有系统更具长期生命力。'
    ],
    core_ideas_en: [
      'The digital revolution was a long relay, not a series of isolated flashes of genius.',
      'Human-machine collaboration, not replacement, has historically been the most productive mode of work.',
      'Only the combination of government funding, corporate R&D, and academic freedom produced the infrastructure of modern computing.',
      'Open standards and communities tend to outlast closed proprietary systems.'
    ],
    key_questions_zh: [
      '创新究竟来自个人天才，还是来自协作网络？',
      '什么样的组织方式最有利于长期的技术突破？'
    ],
    key_questions_en: [
      'Does innovation come from individual genius or from collaborative networks?',
      'What kind of organization best sustains long-term technical breakthroughs?'
    ],
    who_should_read_zh:
      '适合对科技史与创新机制感兴趣的读者；篇幅较长，但可按人物与主题选读。',
    who_should_read_en:
      'For readers interested in the history of technology and the mechanics of innovation. It is long, but individual figures and themes can be read separately.',
    today_idea_zh: '把功劳归给一个人的时刻，通常正是我们停止理解创新如何发生的时刻。',
    today_idea_en:
      'The moment we credit a single person is usually the moment we stop understanding how innovation happened.',
    difficulty: 2,
    reading_time: 20,
    tags: ['technology', 'innovation', 'computer-science', 'computing', 'history'],
    topics: ['technology', 'innovation', 'computing'],
    related_books: [
      'the-information',
      'chip-war',
      'genius-makers',
      'the-innovators-dilemma'
    ]
  },

  'the-information': {
    subtitle_zh: '一部历史、一个理论、一场洪水',
    subtitle_en: 'A History, a Theory, a Flood',
    description_zh:
      '格莱克用三条线索讲信息：从非洲鼓语到电报的历史，香农的信息论如何把信息变成可度量的量，以及信息过载如何成为现代人的基本处境。它既是技术史，也是关于意义的哲学追问。',
    description_en:
      'Gleick tells the story of information along three threads: the history from African talking drums to the telegraph, how Shannon\'s theory turned information into something measurable, and how overload became the basic condition of modern life. It is at once a history of technology and a philosophical inquiry into meaning.',
    why_read_zh:
      '它解释了“信息”这个概念如何从日常用语变成一门科学，以及为什么这个转变既解放了我们又困住了我们。对于任何在工作中处理信息的人，这本书提供的是概念的坐标系，而非操作手册。',
    why_read_en:
      'It explains how “information” became a science rather than an everyday word, and why that shift both freed and trapped us. For anyone whose work is made of information, it offers a conceptual coordinate system rather than a manual.',
    core_ideas_zh: [
      '信息可以被抽象为与意义无关的比特，这一剥离正是信息论得以成立的前提。',
      '信息需要物质载体，载体的形态会反过来影响信息的传播与保存方式。',
      '冗余不是浪费，而是对抗噪声、保证信息可被恢复的必要条件。',
      '信息过载不是技术故障，而是信息丰裕的必然伴生状态。'
    ],
    core_ideas_en: [
      'Information can be abstracted into bits independent of meaning, and that abstraction is what made information theory possible.',
      'Information requires a physical medium, and the medium in turn shapes how it travels and how it is preserved.',
      'Redundancy is not waste but the condition that makes a message recoverable against noise.',
      'Information overload is not a technical failure but the necessary companion of abundance.'
    ],
    key_questions_zh: [
      '信息究竟是什么，它与意义有何区别？',
      '当信息变得极其廉价与丰富时，人类社会会发生什么变化？'
    ],
    key_questions_en: [
      'What exactly is information, and how does it differ from meaning?',
      'What happens to a society when information becomes extremely cheap and abundant?'
    ],
    who_should_read_zh:
      '适合对信息、媒介与技术史感兴趣的读者；文笔优美，无需数学背景。',
    who_should_read_en:
      'For readers interested in information, media, and the history of technology. It is beautifully written and needs no mathematics.',
    today_idea_zh: '信息越多，注意力越贵；稀缺的从来不是内容，而是意义。',
    today_idea_en:
      'The more information there is, the more expensive attention becomes; what is scarce is never content but meaning.',
    difficulty: 2,
    reading_time: 15,
    tags: ['technology', 'computing', 'science', 'history', 'systems-thinking'],
    topics: ['technology', 'computing', 'complexity'],
    related_books: [
      'the-innovators',
      'understanding-media',
      'godel-escher-bach',
      'thinking-in-systems'
    ]
  }
};
export default batch;
