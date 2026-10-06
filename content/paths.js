/**
 * 阅读路线 Reading Paths
 * 每条路线是一条有顺序的认知阶梯：level 从 01 开始，每级指向一本真实存在的书。
 */

export const readingPaths = [
  {
    slug: 'ai-for-beginners',
    name_zh: 'AI 入门',
    name_en: 'AI for Beginners',
    tagline_zh: '从计算的基础，走到通用智能的问题。',
    tagline_en: 'From the foundations of computing to the question of general intelligence.',
    description_zh:
      '这条路线不是"AI 书单"，而是一条认知阶梯：先理解计算是什么，再理解机器如何学习，最后才面对超级智能与对齐这些尚未有答案的问题。跳级阅读是理解 AI 最常见的失败方式。',
    description_en:
      'This is not a list of AI books but a ladder of understanding: first what computation is, then how machines learn, and only then the unresolved questions of superintelligence and alignment. Skipping steps is the most common way to misunderstand AI.',
    levels: [
      {
        label_zh: '理解计算',
        label_en: 'Understand Computing',
        book: 'the-innovators',
        note_zh: '计算不是单一发明，而是一连串人物的接力。先建立"技术如何发生"的直觉。',
        note_en: 'Computing was never a single invention but a relay of people. Start by building an intuition for how technology actually happens.'
      },
      {
        label_zh: '理解人工智能',
        label_en: 'Understand Artificial Intelligence',
        book: 'artificial-intelligence-a-modern-approach',
        note_zh: '把"智能"拆解成搜索、推理、学习、感知等可处理的问题。',
        note_en: 'Break "intelligence" down into tractable problems: search, reasoning, learning, perception.'
      },
      {
        label_zh: '理解机器学习',
        label_en: 'Understand Machine Learning',
        book: 'deep-learning',
        note_zh: '理解表示学习与梯度方法，这是当代 AI 的技术底座。',
        note_en: 'Understand representation learning and gradient-based methods — the technical base of modern AI.'
      },
      {
        label_zh: '理解强化学习与智能体',
        label_en: 'Understand Reinforcement Learning and Agents',
        book: 'reinforcement-learning-an-introduction',
        note_zh: '当系统开始为了目标而行动，问题就从"预测"变成"决策"。',
        note_en: 'Once a system acts toward goals, the problem shifts from prediction to decision.'
      },
      {
        label_zh: '理解大语言模型与对齐',
        label_en: 'Understand LLMs and Alignment',
        book: 'the-alignment-problem',
        note_zh: '能力增长快于价值对齐，这是当前最真实的工程与伦理张力。',
        note_en: 'Capability is outpacing value alignment — the most concrete engineering and ethical tension of our time.'
      },
      {
        label_zh: '理解 AGI 与人类未来',
        label_en: 'Understand AGI and the Human Future',
        book: 'superintelligence',
        note_zh: '在技术之外，认真思考不可逆的决策与控制的边界。',
        note_en: 'Beyond engineering: thinking seriously about irreversible decisions and the limits of control.'
      }
    ]
  },
  {
    slug: 'investing-from-first-principles',
    name_zh: '投资入门：从第一性原理出发',
    name_en: 'Investing from First Principles',
    tagline_zh: '先理解市场，再建立原则，最后管理自己。',
    tagline_en: 'Understand the market, build principles, then manage yourself.',
    description_zh:
      '投资的失败很少来自知识不足，多数来自顺序错误：先学技巧，后学原则，最后才发现最难的是管理自己的行为。这条路线把顺序倒过来。',
    description_en:
      'Investment failure rarely comes from a lack of knowledge. It comes from wrong sequencing: techniques first, principles later, and only then the discovery that the hardest part is managing yourself. This path reverses the order.',
    levels: [
      {
        label_zh: '认识市场',
        label_en: 'Understand the Market',
        book: 'a-random-walk-down-wall-street',
        note_zh: '先接受一个不舒服的前提：短期价格接近于随机。',
        note_en: 'Start with an uncomfortable premise: short-term prices are close to random.'
      },
      {
        label_zh: '建立投资原则',
        label_en: 'Establish Principles',
        book: 'the-intelligent-investor',
        note_zh: '区分投资与投机，把安全边际变成纪律而不是口号。',
        note_en: 'Separate investing from speculation, and turn margin of safety into discipline rather than a slogan.'
      },
      {
        label_zh: '学会估值',
        label_en: 'Learn Valuation',
        book: 'security-analysis',
        note_zh: '估值不是算出一个精确数字，而是判断价格与价值之间的差距是否足够大。',
        note_en: 'Valuation is not a precise number; it is a judgment about whether the gap between price and value is wide enough.'
      },
      {
        label_zh: '寻找质量与成长',
        label_en: 'Find Quality and Growth',
        book: 'common-stocks-and-uncommon-profits',
        note_zh: '当价格不再便宜，唯一能保护你的是企业本身的质地。',
        note_en: 'When price is no longer cheap, the only protection left is the quality of the business itself.'
      },
      {
        label_zh: '理解风险与不确定性',
        label_en: 'Understand Risk and Uncertainty',
        book: 'the-black-swan',
        note_zh: '风险不是波动率。真正的风险来自你根本没纳入模型的那部分世界。',
        note_en: 'Risk is not volatility. Real risk lives in the part of the world your model never included.'
      },
      {
        label_zh: '管理自己的行为',
        label_en: 'Manage Your Own Behavior',
        book: 'the-psychology-of-money',
        note_zh: '最后你会发现，收益曲线主要是一条行为曲线。',
        note_en: 'In the end, the return curve is mostly a behavior curve.'
      }
    ]
  },
  {
    slug: 'understanding-world-history',
    name_zh: '理解世界历史',
    name_en: 'Understanding World History',
    tagline_zh: '从地理条件出发，走到当代格局。',
    tagline_en: 'From geographic conditions to the present order.',
    description_zh:
      '历史不是年代与人名的堆积。这条路线关心的是因果结构：为什么是这一支文明扩张，为什么帝国会自我消耗，为什么秩序会在看似稳定的时刻崩塌。',
    description_en:
      'History is not an accumulation of dates and names. This path is about causal structure: why one civilization expanded, why empires consume themselves, and why order collapses at moments that look stable.',
    levels: [
      {
        label_zh: '文明的起点',
        label_en: 'The Origins of Civilization',
        book: 'guns-germs-and-steel',
        note_zh: '先把"谁更优秀"的解释换掉，换成地理与生态的解释。',
        note_en: 'First replace explanations based on superiority with explanations based on geography and ecology.'
      },
      {
        label_zh: '古典世界',
        label_en: 'The Classical World',
        book: 'history-of-the-peloponnesian-war',
        note_zh: '第一部真正意义上的历史著作，也是第一部关于权力结构的分析。',
        note_en: 'The first real work of history — and the first analysis of the structure of power.'
      },
      {
        label_zh: '帝国的兴衰',
        label_en: 'The Rise and Fall of Empires',
        book: 'the-decline-and-fall-of-the-roman-empire',
        note_zh: '衰亡不是单一事件，而是一连串自我强化的缓慢过程。',
        note_en: 'Decline is never a single event but a chain of slowly self-reinforcing processes.'
      },
      {
        label_zh: '现代世界的形成',
        label_en: 'The Making of the Modern World',
        book: 'the-guns-of-august',
        note_zh: '理解一场"没有人真正想要"的战争如何必然发生。',
        note_en: 'Understand how a war nobody truly wanted became almost inevitable.'
      },
      {
        label_zh: '战后秩序',
        label_en: 'The Postwar Order',
        book: 'postwar',
        note_zh: '当代欧洲的制度、记忆与焦虑，都在这段历史里成形。',
        note_en: 'Europe\'s institutions, memories, and anxieties all took shape here.'
      },
      {
        label_zh: '当代格局',
        label_en: 'The Present Order',
        book: 'the-clash-of-civilizations',
        note_zh: '无论你同意与否，这是一个必须被认真对待的解释框架。',
        note_en: 'Agree or not, this is a framework that must be taken seriously.'
      }
    ]
  },
  {
    slug: 'economics-essentials',
    name_zh: '经济学入门',
    name_en: 'Economics Essentials',
    tagline_zh: '从分工与市场，走到制度与货币。',
    tagline_en: 'From division of labor to institutions and money.',
    description_zh:
      '经济学最容易被误读成一门"预测市场"的技术。这条路线把它还原成一门研究稀缺、激励与制度的学科，并让你看见这些理论之间的争论本身。',
    description_en:
      'Economics is often misread as a technique for predicting markets. This path restores it as a discipline about scarcity, incentives, and institutions — and lets you see the arguments between its schools.',
    levels: [
      {
        label_zh: '市场与分工',
        label_en: 'Markets and Division of Labor',
        book: 'the-wealth-of-nations',
        note_zh: '起点：专业化与交换如何让总量增长。',
        note_en: 'The starting point: how specialization and exchange expand total output.'
      },
      {
        label_zh: '制度与繁荣',
        label_en: 'Institutions and Prosperity',
        book: 'why-nations-fail',
        note_zh: '把解释从资源转向规则：谁制定规则，谁承担后果。',
        note_en: 'Shift the explanation from resources to rules: who writes them and who bears the consequences.'
      },
      {
        label_zh: '货币与危机',
        label_en: 'Money and Crisis',
        book: 'this-time-is-different',
        note_zh: '八百年数据给出的教训：每次都说这次不一样。',
        note_en: 'Eight centuries of data teach one lesson: everyone says this time is different.'
      },
      {
        label_zh: '宏观与政策',
        label_en: 'Macroeconomics and Policy',
        book: 'the-general-theory',
        note_zh: '理解有效需求、政府角色与 20 世纪宏观经济学争论的源头。',
        note_en: 'Understand effective demand, the role of government, and the source of twentieth-century macro debates.'
      },
      {
        label_zh: '行为与真实决策',
        label_en: 'Behavior and Real Decisions',
        book: 'misbehaving',
        note_zh: '把"理性人"假设放回现实：人是可预测地不理性的。',
        note_en: 'Bring the rational-actor assumption back to reality: people are predictably irrational.'
      },
      {
        label_zh: '经济思想史',
        label_en: 'The History of Economic Thought',
        book: 'the-worldly-philosophers',
        note_zh: '回到思想本身，看每一代人在回答什么问题。',
        note_en: 'Return to the ideas themselves, and see what question each generation was answering.'
      }
    ]
  },
  {
    slug: 'thinking-better',
    name_zh: '认知升级',
    name_en: 'Thinking Better',
    tagline_zh: '减少判断错误，并在不确定中获益。',
    tagline_en: 'Reduce judgment error and gain from uncertainty.',
    description_zh:
      '这条路线处理一个非常具体的问题：为什么聪明人也会做出糟糕的判断？答案不在智力，而在于是否有一套可以反复使用的思考装置。',
    description_en:
      'This path addresses one concrete question: why do intelligent people make bad judgments? The answer is not intelligence, but whether you own a set of thinking devices you can reuse.',
    levels: [
      {
        label_zh: '认识两套系统',
        label_en: 'Two Systems of Mind',
        book: 'thinking-fast-and-slow',
        note_zh: '直觉快速而廉价，理性缓慢而懒惰。先看见自己的默认设置。',
        note_en: 'Intuition is fast and cheap; reasoning is slow and lazy. Start by seeing your own defaults.'
      },
      {
        label_zh: '识别噪声与偏差',
        label_en: 'Identify Noise and Bias',
        book: 'noise',
        note_zh: '偏差是系统性的方向错误，噪声是无方向的随机散布。两者都要治。',
        note_en: 'Bias is systematic error in one direction; noise is random scatter. Both need treatment.'
      },
      {
        label_zh: '理解概率与运气',
        label_en: 'Understand Probability and Luck',
        book: 'fooled-by-randomness',
        note_zh: '把结果与技能分开，是最难也最有价值的一次认知剥离。',
        note_en: 'Separating outcome from skill is the hardest and most valuable act of detachment.'
      },
      {
        label_zh: '提高预测能力',
        label_en: 'Improve Forecasting',
        book: 'superforecasting',
        note_zh: '预测是一项可以训练的技能，而不是天赋。',
        note_en: 'Forecasting is a trainable skill, not a gift.'
      },
      {
        label_zh: '用系统视角思考',
        label_en: 'Think in Systems',
        book: 'thinking-in-systems',
        note_zh: '当问题反复出现，通常不是人的问题，而是结构的问题。',
        note_en: 'When a problem keeps recurring, it is usually the structure, not the people.'
      },
      {
        label_zh: '在不确定中获益',
        label_en: 'Gain from Uncertainty',
        book: 'antifragile',
        note_zh: '终点不是预测未来，而是让自己在未来无论哪种情形下都更好。',
        note_en: 'The endpoint is not predicting the future but arranging to benefit whichever future arrives.'
      }
    ]
  }
];

export const pathBySlug = Object.fromEntries(readingPaths.map((p) => [p.slug, p]));
export default readingPaths;
