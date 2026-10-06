/**
 * Classics Library — 分类 / 标签 / 主题 词表
 * 所有条目均双语。slug 一经确定不要修改（会破坏 URL 与关联）。
 */

/* ------------------------------------------------------------------
 * 分类 Categories（11 个）— 一级导航维度
 * ------------------------------------------------------------------ */
export const categories = [
  {
    slug: 'ai',
    order: '01',
    name_zh: '人工智能',
    name_en: 'Artificial Intelligence',
    description_zh: '探索计算、机器智能与人类未来。',
    description_en: 'Explore machine intelligence, computing, and the future of humanity.',
    icon: '<circle cx="12" cy="12" r="3"/><circle cx="4.5" cy="6" r="1.8"/><circle cx="19.5" cy="6" r="1.8"/><circle cx="12" cy="20.5" r="1.8"/><path d="M6.1 7.2 10 10.6M17.9 7.2 14 10.6M12 15.1v3.6"/>'
  },
  {
    slug: 'technology',
    order: '02',
    name_zh: '科技与科学',
    name_en: 'Technology & Science',
    description_zh: '从芯片到材料，理解技术如何塑造文明。',
    description_en: 'From chips to materials: how technology shapes civilization.',
    icon: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>'
  },
  {
    slug: 'finance',
    order: '03',
    name_zh: '金融',
    name_en: 'Finance',
    description_zh: '货币、市场、风险与危机的运作机制。',
    description_en: 'Money, markets, risk, and the anatomy of financial crises.',
    icon: '<path d="M3 17.5 8.5 11l4 3.5L21 6"/><path d="M15.5 6H21v5.5"/>'
  },
  {
    slug: 'investment',
    order: '04',
    name_zh: '投资',
    name_en: 'Investment',
    description_zh: '从第一性原理构建长期投资体系。',
    description_en: 'Building a long-term investing framework from first principles.',
    icon: '<path d="M12 3.5 3.5 8 12 12.5 20.5 8 12 3.5Z"/><path d="M3.5 12 12 16.5 20.5 12M3.5 16 12 20.5 20.5 16"/>'
  },
  {
    slug: 'us-stocks',
    order: '05',
    name_zh: '美股投资',
    name_en: 'US Stock Investment',
    description_zh: '美股、科技股与资本配置的实战视角。',
    description_en: 'US equities, technology stocks, and capital allocation in practice.',
    icon: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'
  },
  {
    slug: 'economics',
    order: '06',
    name_zh: '经济学',
    name_en: 'Economics',
    description_zh: '增长、货币、制度与繁荣的根源。',
    description_en: 'Growth, money, institutions, and the roots of prosperity.',
    icon: '<path d="M12 4v16M6 20h12"/><path d="M12 7 5 10.5M12 7l7 3.5"/><path d="M3 10.5a2.5 2.5 0 0 0 4 0M17 10.5a2.5 2.5 0 0 0 4 0"/>'
  },
  {
    slug: 'history',
    order: '07',
    name_zh: '世界历史',
    name_en: 'World History',
    description_zh: '帝国、战争与全球化的长期脉络。',
    description_en: 'Empires, wars, and the long arc of globalization.',
    icon: '<path d="M3 21h18M5 21V9M9.5 21V9M14.5 21V9M19 21V9"/><path d="M2.5 9h19L12 3.5 2.5 9Z"/>'
  },
  {
    slug: 'business',
    order: '08',
    name_zh: '商业',
    name_en: 'Business',
    description_zh: '战略、创新、组织与商业模式的底层逻辑。',
    description_en: 'Strategy, innovation, organization, and business models.',
    icon: '<rect x="3" y="7.5" width="18" height="12.5" rx="1.5"/><path d="M8.5 7.5V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5v2M3 13h18"/>'
  },
  {
    slug: 'philosophy',
    order: '09',
    name_zh: '哲学',
    name_en: 'Philosophy',
    description_zh: '关于如何思考、如何生活的古老追问。',
    description_en: 'Ancient questions on how to think and how to live.',
    icon: '<path d="M12 3.5c4.7 0 8.5 3.1 8.5 7 0 2.4-1.5 4.5-3.8 5.7l.5 4.3-4-2.2a11 11 0 0 1-1.2.1c-4.7 0-8.5-3.1-8.5-7.9s3.8-7 8.5-7Z"/>'
  },
  {
    slug: 'psychology',
    order: '10',
    name_zh: '心理学与认知科学',
    name_en: 'Psychology & Cognitive Science',
    description_zh: '判断、决策、偏见与心智的运作。',
    description_en: 'Judgment, decision-making, bias, and the workings of the mind.',
    icon: '<path d="M12 20.5v-4"/><path d="M9 16.5a5.5 5.5 0 0 1-3.5-9.6A4 4 0 0 1 12 4.2a4 4 0 0 1 6.5 2.7A5.5 5.5 0 0 1 15 16.5Z"/><path d="M12 4.2v12.3"/>'
  },
  {
    slug: 'society',
    order: '11',
    name_zh: '社会与文明',
    name_en: 'Society & Civilization',
    description_zh: '制度、文化与公共生活的结构。',
    description_en: 'Institutions, culture, and the structure of public life.',
    icon: '<circle cx="12" cy="7" r="3.2"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/><path d="M2 12.5c1.8-2 3.6-3 5.5-3M22 12.5c-1.8-2-3.6-3-5.5-3"/>'
  },
  {
    slug: 'literature',
    order: '12',
    name_zh: '文学与小说',
    name_en: 'Literature & Fiction',
    description_zh: '小说、戏剧与诗歌——用叙事理解人的处境。',
    description_en: 'Novels, drama, and poetry — understanding the human condition through narrative.',
    icon: '<path d="M4 5.5A2 2 0 0 1 6 3.5h5.5v17H6a2 2 0 0 1-2-2Z"/><path d="M20 5.5a2 2 0 0 0-2-2h-5.5v17H18a2 2 0 0 0 2-2Z"/><path d="M11.5 3.5v17"/>'
  }
];

/* ------------------------------------------------------------------
 * 标签 Tags — 用于检索与交叉导航（双语）
 * ------------------------------------------------------------------ */
export const tags = [
  { slug: 'ai', zh: '人工智能', en: 'AI' },
  { slug: 'agi', zh: '通用人工智能', en: 'AGI' },
  { slug: 'machine-learning', zh: '机器学习', en: 'Machine Learning' },
  { slug: 'deep-learning', zh: '深度学习', en: 'Deep Learning' },
  { slug: 'llm', zh: '大语言模型', en: 'LLM' },
  { slug: 'robotics', zh: '机器人', en: 'Robotics' },
  { slug: 'computing', zh: '计算', en: 'Computing' },
  { slug: 'computer-science', zh: '计算机科学', en: 'Computer Science' },
  { slug: 'future-of-technology', zh: '技术未来', en: 'Future of Technology' },
  { slug: 'technology', zh: '技术', en: 'Technology' },
  { slug: 'semiconductor', zh: '半导体', en: 'Semiconductor' },
  { slug: 'materials', zh: '材料', en: 'Materials' },
  { slug: 'physics', zh: '物理', en: 'Physics' },
  { slug: 'science', zh: '科学', en: 'Science' },
  { slug: 'energy', zh: '能源', en: 'Energy' },
  { slug: 'markets', zh: '市场', en: 'Markets' },
  { slug: 'banking', zh: '银行', en: 'Banking' },
  { slug: 'monetary-system', zh: '货币体系', en: 'Monetary System' },
  { slug: 'financial-history', zh: '金融史', en: 'Financial History' },
  { slug: 'risk', zh: '风险', en: 'Risk' },
  { slug: 'uncertainty', zh: '不确定性', en: 'Uncertainty' },
  { slug: 'behavioral-finance', zh: '行为金融', en: 'Behavioral Finance' },
  { slug: 'value-investing', zh: '价值投资', en: 'Value Investing' },
  { slug: 'growth-investing', zh: '成长投资', en: 'Growth Investing' },
  { slug: 'portfolio', zh: '组合管理', en: 'Portfolio' },
  { slug: 'asset-allocation', zh: '资产配置', en: 'Asset Allocation' },
  { slug: 'etf', zh: 'ETF', en: 'ETF' },
  { slug: 'long-term-investing', zh: '长期投资', en: 'Long-term Investing' },
  { slug: 'investor-psychology', zh: '投资者心理', en: 'Investor Psychology' },
  { slug: 'technology-stocks', zh: '科技股', en: 'Technology Stocks' },
  { slug: 'macroeconomics', zh: '宏观经济学', en: 'Macroeconomics' },
  { slug: 'microeconomics', zh: '微观经济学', en: 'Microeconomics' },
  { slug: 'inflation', zh: '通货膨胀', en: 'Inflation' },
  { slug: 'interest-rates', zh: '利率', en: 'Interest Rates' },
  { slug: 'business-cycles', zh: '经济周期', en: 'Business Cycles' },
  { slug: 'behavioral-economics', zh: '行为经济学', en: 'Behavioral Economics' },
  { slug: 'institutional-economics', zh: '制度经济学', en: 'Institutional Economics' },
  { slug: 'ancient-civilizations', zh: '古代文明', en: 'Ancient Civilizations' },
  { slug: 'empires', zh: '帝国', en: 'Empires' },
  { slug: 'world-wars', zh: '世界大战', en: 'World Wars' },
  { slug: 'industrial-revolution', zh: '工业革命', en: 'Industrial Revolution' },
  { slug: 'cold-war', zh: '冷战', en: 'Cold War' },
  { slug: 'globalization', zh: '全球化', en: 'Globalization' },
  { slug: 'modern-world', zh: '现代世界', en: 'Modern World' },
  { slug: 'entrepreneurship', zh: '创业', en: 'Entrepreneurship' },
  { slug: 'strategy', zh: '战略', en: 'Strategy' },
  { slug: 'innovation', zh: '创新', en: 'Innovation' },
  { slug: 'management', zh: '管理', en: 'Management' },
  { slug: 'product', zh: '产品', en: 'Product' },
  { slug: 'organization', zh: '组织', en: 'Organization' },
  { slug: 'business-models', zh: '商业模式', en: 'Business Models' },
  { slug: 'ai-native-business', zh: 'AI 原生商业', en: 'AI-Native Business' },
  { slug: 'philosophy', zh: '哲学', en: 'Philosophy' },
  { slug: 'ethics', zh: '伦理', en: 'Ethics' },
  { slug: 'stoicism', zh: '斯多葛主义', en: 'Stoicism' },
  { slug: 'existentialism', zh: '存在主义', en: 'Existentialism' },
  { slug: 'psychology', zh: '心理学', en: 'Psychology' },
  { slug: 'cognitive-science', zh: '认知科学', en: 'Cognitive Science' },
  { slug: 'decision-making', zh: '决策', en: 'Decision Making' },
  { slug: 'society', zh: '社会', en: 'Society' },
  { slug: 'civilization', zh: '文明', en: 'Civilization' },
  { slug: 'history', zh: '历史', en: 'History' },
  { slug: 'economics', zh: '经济学', en: 'Economics' },
  { slug: 'investing', zh: '投资', en: 'Investing' },
  { slug: 'finance', zh: '金融', en: 'Finance' },
  { slug: 'business', zh: '商业', en: 'Business' },
  { slug: 'power', zh: '权力', en: 'Power' },
  { slug: 'human-nature', zh: '人性', en: 'Human Nature' },
  { slug: 'progress', zh: '进步', en: 'Progress' },
  { slug: 'complexity', zh: '复杂性', en: 'Complexity' },
  { slug: 'systems-thinking', zh: '系统思考', en: 'Systems Thinking' },
  { slug: 'china', zh: '中国', en: 'China' },
  { slug: 'united-states', zh: '美国', en: 'United States' },
  /* --- 以下为「书单导入」批次补充 --- */
  { slug: 'fiction', zh: '小说', en: 'Fiction' },
  { slug: 'novel', zh: '长篇小说', en: 'Novel' },
  { slug: 'drama', zh: '戏剧', en: 'Drama' },
  { slug: 'poetry', zh: '诗歌', en: 'Poetry' },
  { slug: 'epic', zh: '史诗', en: 'Epic' },
  { slug: 'short-stories', zh: '短篇小说', en: 'Short Stories' },
  { slug: 'memoir', zh: '回忆录', en: 'Memoir' },
  { slug: 'nobel-laureate', zh: '诺贝尔文学奖', en: 'Nobel Laureate' },
  { slug: 'dystopia', zh: '反乌托邦', en: 'Dystopia' },
  { slug: 'modernism', zh: '现代主义', en: 'Modernism' },
  { slug: 'politics', zh: '政治', en: 'Politics' },
  { slug: 'authoritarianism', zh: '威权主义', en: 'Authoritarianism' },
  { slug: 'democracy', zh: '民主', en: 'Democracy' },
  { slug: 'liberalism', zh: '自由主义', en: 'Liberalism' },
  { slug: 'institutions', zh: '制度', en: 'Institutions' },
  { slug: 'propaganda', zh: '宣传与舆论', en: 'Propaganda' },
  { slug: 'gender', zh: '性别', en: 'Gender' },
  { slug: 'feminism', zh: '女性主义', en: 'Feminism' },
  { slug: 'family', zh: '家庭', en: 'Family' },
  { slug: 'religion', zh: '宗教', en: 'Religion' },
  { slug: 'atheism', zh: '无神论', en: 'Atheism' },
  { slug: 'evolution', zh: '演化论', en: 'Evolution' },
  { slug: 'cosmology', zh: '宇宙学', en: 'Cosmology' },
  { slug: 'consciousness', zh: '意识', en: 'Consciousness' },
  { slug: 'neuroscience', zh: '神经科学', en: 'Neuroscience' },
  { slug: 'genetics', zh: '遗传学', en: 'Genetics' },
  { slug: 'art', zh: '艺术', en: 'Art' },
  { slug: 'cultural-history', zh: '文化史', en: 'Cultural History' },
  { slug: 'inequality', zh: '不平等', en: 'Inequality' },
  { slug: 'capitalism', zh: '资本主义', en: 'Capitalism' },
  { slug: 'welfare', zh: '福利制度', en: 'Welfare' },
  { slug: 'japan', zh: '日本', en: 'Japan' },
  { slug: 'korea', zh: '韩国', en: 'Korea' },
  { slug: 'russia', zh: '俄罗斯', en: 'Russia' },
  { slug: 'germany', zh: '德国', en: 'Germany' },
  { slug: 'classics', zh: '经典', en: 'Classics' }
];

/* ------------------------------------------------------------------
 * 主题 Topics — 跨分类的思想坐标（双语）
 * ------------------------------------------------------------------ */
export const topics = [
  {
    slug: 'ai',
    name_zh: '人工智能',
    name_en: 'AI',
    description_zh: '机器能否思考，以及这个问题为何重要。',
    description_en: 'Whether machines can think — and why the question matters.'
  },
  {
    slug: 'agi',
    name_zh: '通用人工智能',
    name_en: 'AGI',
    description_zh: '超越人类的通用智能：可能性、风险与控制问题。',
    description_en: 'Beyond-human general intelligence: possibility, risk, and the control problem.'
  },
  {
    slug: 'machine-learning',
    name_zh: '机器学习',
    name_en: 'Machine Learning',
    description_zh: '从数据中提取规律的方法论基础。',
    description_en: 'The methodological foundation for learning patterns from data.'
  },
  {
    slug: 'llm',
    name_zh: '大语言模型',
    name_en: 'LLM',
    description_zh: '语言、规模与涌现能力带来的新范式。',
    description_en: 'Language, scale, and the new paradigm of emergent capability.'
  },
  {
    slug: 'computing',
    name_zh: '计算',
    name_en: 'Computing',
    description_zh: '计算作为理解世界的底层语言。',
    description_en: 'Computation as an underlying language for understanding the world.'
  },
  {
    slug: 'semiconductor',
    name_zh: '半导体',
    name_en: 'Semiconductor',
    description_zh: '芯片、材料与全球技术秩序的交汇点。',
    description_en: 'Where chips, materials, and the global technology order intersect.'
  },
  {
    slug: 'innovation',
    name_zh: '创新',
    name_en: 'Innovation',
    description_zh: '新技术为何总是先在边缘出现，再颠覆中心。',
    description_en: 'Why new technology appears at the edge before it disrupts the center.'
  },
  {
    slug: 'technology',
    name_zh: '技术',
    name_en: 'Technology',
    description_zh: '技术如何重塑经济、社会与人的认知。',
    description_en: 'How technology reshapes economies, societies, and human cognition.'
  },
  {
    slug: 'risk',
    name_zh: '风险',
    name_en: 'Risk',
    description_zh: '理解不确定性、概率与脆弱性。',
    description_en: 'Understanding uncertainty, probability, and fragility.'
  },
  {
    slug: 'uncertainty',
    name_zh: '不确定性',
    name_en: 'Uncertainty',
    description_zh: '在无法预测的世界里如何做出稳健决策。',
    description_en: 'How to decide well in a world that cannot be predicted.'
  },
  {
    slug: 'markets',
    name_zh: '市场',
    name_en: 'Markets',
    description_zh: '价格、情绪与结构共同构成的复杂系统。',
    description_en: 'A complex system of prices, sentiment, and structure.'
  },
  {
    slug: 'monetary-system',
    name_zh: '货币体系',
    name_en: 'Monetary System',
    description_zh: '货币的起源、信用创造与中央银行的权力。',
    description_en: 'The origins of money, credit creation, and central bank power.'
  },
  {
    slug: 'inflation',
    name_zh: '通货膨胀',
    name_en: 'Inflation',
    description_zh: '物价、购买力与货币秩序的历史经验。',
    description_en: 'Prices, purchasing power, and the historical record of monetary order.'
  },
  {
    slug: 'macroeconomics',
    name_zh: '宏观经济学',
    name_en: 'Macroeconomics',
    description_zh: '增长、就业、利率与周期的总体图景。',
    description_en: 'The aggregate picture of growth, employment, rates, and cycles.'
  },
  {
    slug: 'behavioral-economics',
    name_zh: '行为经济学',
    name_en: 'Behavioral Economics',
    description_zh: '真实的人如何偏离理性人假设。',
    description_en: 'How real people depart from the rational-actor assumption.'
  },
  {
    slug: 'investing',
    name_zh: '投资',
    name_en: 'Investing',
    description_zh: '把资本配置到未来生产力上的长期方法。',
    description_en: 'The long-term craft of allocating capital to future productivity.'
  },
  {
    slug: 'value-investing',
    name_zh: '价值投资',
    name_en: 'Value Investing',
    description_zh: '价格与价值之间的差距，以及安全边际。',
    description_en: 'The gap between price and value, and the margin of safety.'
  },
  {
    slug: 'decision-making',
    name_zh: '决策',
    name_en: 'Decision Making',
    description_zh: '在信息不完整时如何提高判断质量。',
    description_en: 'Improving judgment when information is incomplete.'
  },
  {
    slug: 'cognitive-science',
    name_zh: '认知科学',
    name_en: 'Cognitive Science',
    description_zh: '注意、记忆、偏见与心智的机制。',
    description_en: 'Attention, memory, bias, and the mechanics of mind.'
  },
  {
    slug: 'civilization',
    name_zh: '文明',
    name_en: 'Civilization',
    description_zh: '文明为何兴起、分化与衰落。',
    description_en: 'Why civilizations rise, diverge, and decline.'
  },
  {
    slug: 'history',
    name_zh: '历史',
    name_en: 'History',
    description_zh: '长周期视角下的因果与偶然。',
    description_en: 'Causation and contingency viewed over long horizons.'
  },
  {
    slug: 'philosophy',
    name_zh: '哲学',
    name_en: 'Philosophy',
    description_zh: '关于知识、伦理与美好生活的第一性追问。',
    description_en: 'First-principle questions about knowledge, ethics, and the good life.'
  },
  {
    slug: 'stoicism',
    name_zh: '斯多葛主义',
    name_en: 'Stoicism',
    description_zh: '区分可控与不可控，并据此行动。',
    description_en: 'Separating what is up to us from what is not — and acting accordingly.'
  },
  {
    slug: 'strategy',
    name_zh: '战略',
    name_en: 'Strategy',
    description_zh: '竞争优势从何而来，又如何被侵蚀。',
    description_en: 'Where competitive advantage comes from, and how it erodes.'
  },
  {
    slug: 'management',
    name_zh: '管理',
    name_en: 'Management',
    description_zh: '组织如何做出决策并持续交付结果。',
    description_en: 'How organizations decide and keep delivering results.'
  },
  {
    slug: 'entrepreneurship',
    name_zh: '创业',
    name_en: 'Entrepreneurship',
    description_zh: '从零建立新事物所需的判断与勇气。',
    description_en: 'The judgment and courage required to build something from nothing.'
  },
  {
    slug: 'systems-thinking',
    name_zh: '系统思考',
    name_en: 'Systems Thinking',
    description_zh: '反馈、存量与流量构成的动态结构。',
    description_en: 'Dynamic structure built from feedback, stocks, and flows.'
  },
  {
    slug: 'complexity',
    name_zh: '复杂性',
    name_en: 'Complexity',
    description_zh: '涌现、非线性与不可完全预测的系统。',
    description_en: 'Emergence, non-linearity, and systems that resist prediction.'
  },
  {
    slug: 'china-and-the-world',
    name_zh: '中国与世界',
    name_en: 'China and the World',
    description_zh: '中国在全球化与技术竞争中的位置。',
    description_en: 'China\'s place in globalization and technological competition.'
  },
  {
    slug: 'united-states',
    name_zh: '美国',
    name_en: 'United States',
    description_zh: '美国的制度、市场与技术创新动力。',
    description_en: 'American institutions, markets, and the engine of technological innovation.'
  },
  /* --- 以下为「书单导入」批次补充 --- */
  {
    slug: 'literature',
    name_zh: '文学与叙事',
    name_en: 'Literature & Narrative',
    description_zh: '小说与戏剧如何让人理解他人的处境。',
    description_en: 'How novels and drama let us understand the lives of others.'
  },
  {
    slug: 'existentialism',
    name_zh: '存在与虚无',
    name_en: 'Existence & Nothingness',
    description_zh: '自由、荒谬、死亡与自我选择。',
    description_en: 'Freedom, absurdity, death, and the choosing self.'
  },
  {
    slug: 'power-and-politics',
    name_zh: '权力与政治',
    name_en: 'Power & Politics',
    description_zh: '权力如何获得、维持与崩塌。',
    description_en: 'How power is won, held, and lost.'
  },
  {
    slug: 'authoritarianism',
    name_zh: '威权与极权',
    name_en: 'Authoritarianism & Totalitarianism',
    description_zh: '专制机器的运行逻辑与普通人的处境。',
    description_en: 'The machinery of dictatorship and the position of ordinary people.'
  },
  {
    slug: 'democracy-and-liberty',
    name_zh: '民主与自由',
    name_en: 'Democracy & Liberty',
    description_zh: '自由的条件、民主的缺陷与制度设计。',
    description_en: 'The conditions of liberty, the flaws of democracy, and institutional design.'
  },
  {
    slug: 'gender-and-family',
    name_zh: '性别与家庭',
    name_en: 'Gender & Family',
    description_zh: '父权结构、女性困境与婚姻家庭的变迁。',
    description_en: 'Patriarchal structures, women’s predicaments, and the shifting family.'
  },
  {
    slug: 'religion-and-meaning',
    name_zh: '宗教与意义',
    name_en: 'Religion & Meaning',
    description_zh: '信仰、无神论与人生的意义问题。',
    description_en: 'Faith, atheism, and the question of meaning.'
  },
  {
    slug: 'science-and-nature',
    name_zh: '科学与自然',
    name_en: 'Science & Nature',
    description_zh: '宇宙、演化、意识与生命科学。',
    description_en: 'Cosmos, evolution, consciousness, and the life sciences.'
  },
  {
    slug: 'art-and-culture',
    name_zh: '艺术与文化',
    name_en: 'Art & Culture',
    description_zh: '艺术风格的形成与文化史的脉络。',
    description_en: 'How artistic style forms, and the arc of cultural history.'
  },
  {
    slug: 'class-and-inequality',
    name_zh: '阶层与不平等',
    name_en: 'Class & Inequality',
    description_zh: '中产焦虑、向下流动与阶层固化。',
    description_en: 'Middle-class anxiety, downward mobility, and frozen hierarchies.'
  },
  {
    slug: 'modern-society',
    name_zh: '现代社会的困境',
    name_en: 'Predicaments of Modern Society',
    description_zh: '老龄化、孤独、内卷与代际困境。',
    description_en: 'Ageing, loneliness, involution, and generational strain.'
  }
];

export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));
export const topicBySlug = Object.fromEntries(topics.map((t) => [t.slug, t]));
export const tagBySlug = Object.fromEntries(tags.map((t) => [t.slug, t]));

export default { categories, tags, topics };
