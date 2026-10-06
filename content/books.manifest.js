/**
 * Classics Library — 书目主数据 (Source of Truth for book identity)
 * ------------------------------------------------------------------
 * 本文件只承载「可核验的事实性元数据」：书名、作者、年份、分类、个人策展指数。
 * 长文内容（简介 / 为什么读 / 核心思想 / 关键问题 / 适合谁 / 今日思想）
 * 存放在 content/books/batch-*.js 的 overlay 中，按 slug 合并。
 *
 * 字段说明：
 *   slug              稳定 URL 标识（英文小写连字符）
 *   category          对应 content/taxonomy.js 中的分类 slug
 *   title_zh / title_en   双语书名（不含书名号，渲染时按语言加）
 *   author            主作者 slug（对应 content/authors.js）
 *   co_authors        合著者
 *   year              出版年份；负数表示公元前
 *   original_language 原始写作语言
 *   classic_index     个人策展指数 0-100
 *   sub               子维度星级 [历史影响力, 思想深度, 长期价值, 跨领域影响力]，各 1-5
 *   batch             内容批次（overlay 分片编号）
 */

export const books = [
  /* ============================================================
   * 01 · AI & 人工智能 — 12 本
   * ============================================================ */
  {
    slug: 'artificial-intelligence-a-modern-approach',
    category: 'ai',
    title_en: 'Artificial Intelligence: A Modern Approach',
    title_zh: '人工智能：一种现代的方法',
    author: 'stuart-russell',
    co_authors: [{ slug: 'peter-norvig', en: 'Peter Norvig', zh: '彼得·诺维格' }],
    year: 1995,
    original_language: 'en',
    classic_index: 96,
    sub: [5, 5, 5, 5],
    batch: 1
  },
  {
    slug: 'deep-learning',
    category: 'ai',
    title_en: 'Deep Learning',
    title_zh: '深度学习',
    author: 'ian-goodfellow',
    co_authors: [
      { slug: 'yoshua-bengio', en: 'Yoshua Bengio', zh: '约书亚·本吉奥' },
      { slug: 'aaron-courville', en: 'Aaron Courville', zh: '亚伦·库维尔' }
    ],
    year: 2016,
    original_language: 'en',
    classic_index: 93,
    sub: [4, 5, 5, 4],
    batch: 1
  },
  {
    slug: 'reinforcement-learning-an-introduction',
    category: 'ai',
    title_en: 'Reinforcement Learning: An Introduction',
    title_zh: '强化学习导论',
    author: 'richard-sutton',
    co_authors: [{ slug: 'andrew-barto', en: 'Andrew Barto', zh: '安德鲁·巴托' }],
    year: 1998,
    original_language: 'en',
    classic_index: 90,
    sub: [4, 5, 5, 4],
    batch: 1
  },
  {
    slug: 'superintelligence',
    category: 'ai',
    title_en: 'Superintelligence: Paths, Dangers, Strategies',
    title_zh: '超级智能：路径、危险与策略',
    author: 'nick-bostrom',
    year: 2014,
    original_language: 'en',
    classic_index: 94,
    sub: [5, 5, 5, 5],
    batch: 1
  },
  {
    slug: 'human-compatible',
    category: 'ai',
    title_en: 'Human Compatible: Artificial Intelligence and the Problem of Control',
    title_zh: 'AI 新生：破解人机共存密码',
    author: 'stuart-russell',
    year: 2019,
    original_language: 'en',
    classic_index: 90,
    sub: [4, 5, 4, 5],
    batch: 1
  },
  {
    slug: 'life-3-0',
    category: 'ai',
    title_en: 'Life 3.0: Being Human in the Age of Artificial Intelligence',
    title_zh: '生命 3.0：人工智能时代，人类的进化与重生',
    author: 'max-tegmark',
    year: 2017,
    original_language: 'en',
    classic_index: 88,
    sub: [4, 4, 4, 5],
    batch: 1
  },
  {
    slug: 'the-alignment-problem',
    category: 'ai',
    title_en: 'The Alignment Problem: Machine Learning and Human Values',
    title_zh: '人机对齐',
    author: 'brian-christian',
    year: 2020,
    original_language: 'en',
    classic_index: 87,
    sub: [4, 5, 4, 4],
    batch: 1
  },
  {
    slug: 'the-master-algorithm',
    category: 'ai',
    title_en: 'The Master Algorithm',
    title_zh: '终极算法：机器学习和人工智能如何重塑世界',
    author: 'pedro-domingos',
    year: 2015,
    original_language: 'en',
    classic_index: 85,
    sub: [3, 4, 4, 5],
    batch: 1
  },
  {
    slug: 'ai-superpowers',
    category: 'ai',
    title_en: 'AI Superpowers: China, Silicon Valley, and the New World Order',
    title_zh: 'AI·未来',
    author: 'kai-fu-lee',
    year: 2018,
    original_language: 'en',
    classic_index: 86,
    sub: [4, 4, 4, 5],
    batch: 1
  },
  {
    slug: 'ai-2041',
    category: 'ai',
    title_en: 'AI 2041: Ten Visions for Our Future',
    title_zh: 'AI 2041：预见 10 个未来新世界',
    author: 'kai-fu-lee',
    co_authors: [{ slug: 'chen-qiufan', en: 'Chen Qiufan', zh: '陈楸帆' }],
    year: 2021,
    original_language: 'en',
    classic_index: 82,
    sub: [2, 3, 4, 4],
    batch: 1
  },
  {
    slug: 'the-age-of-ai',
    category: 'ai',
    title_en: 'The Age of AI: And Our Human Future',
    title_zh: '人工智能时代与人类未来',
    author: 'henry-kissinger',
    co_authors: [
      { slug: 'eric-schmidt', en: 'Eric Schmidt', zh: '埃里克·施密特' },
      { slug: 'daniel-huttenlocher', en: 'Daniel Huttenlocher', zh: '丹尼尔·胡滕洛赫尔' }
    ],
    year: 2021,
    original_language: 'en',
    classic_index: 84,
    sub: [4, 4, 4, 5],
    batch: 1
  },
  {
    slug: 'genius-makers',
    category: 'ai',
    title_en: 'Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World',
    title_zh: '天才制造者：改变世界的 AI 先锋',
    author: 'cade-metz',
    year: 2021,
    original_language: 'en',
    classic_index: 80,
    sub: [3, 3, 4, 4],
    batch: 1
  },

  /* ============================================================
   * 02 · Technology & Science — 9 本
   * ============================================================ */
  {
    slug: 'chip-war',
    category: 'technology',
    title_en: 'Chip War: The Fight for the World\'s Most Critical Technology',
    title_zh: '芯片战争：世界最关键技术的争夺战',
    author: 'chris-miller',
    year: 2022,
    original_language: 'en',
    classic_index: 93,
    sub: [5, 4, 5, 5],
    batch: 1
  },
  {
    slug: 'the-innovators',
    category: 'technology',
    title_en: 'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution',
    title_zh: '创新者：一群技术狂人和黑客如何创造数字革命',
    author: 'walter-isaacson',
    year: 2014,
    original_language: 'en',
    classic_index: 87,
    sub: [4, 4, 4, 4],
    batch: 1
  },
  {
    slug: 'the-information',
    category: 'technology',
    title_en: 'The Information: A History, a Theory, a Flood',
    title_zh: '信息简史',
    author: 'james-gleick',
    year: 2011,
    original_language: 'en',
    classic_index: 89,
    sub: [4, 5, 5, 5],
    batch: 1
  },
  {
    slug: 'understanding-media',
    category: 'technology',
    title_en: 'Understanding Media: The Extensions of Man',
    title_zh: '理解媒介：论人的延伸',
    author: 'marshall-mcluhan',
    year: 1964,
    original_language: 'en',
    classic_index: 90,
    sub: [5, 5, 5, 5],
    batch: 2
  },
  {
    slug: 'the-second-machine-age',
    category: 'technology',
    title_en: 'The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies',
    title_zh: '第二次机器革命：数字化技术将如何改变我们的经济与社会',
    author: 'erik-brynjolfsson',
    co_authors: [{ slug: 'andrew-mcafee', en: 'Andrew McAfee', zh: '安德鲁·麦卡菲' }],
    year: 2014,
    original_language: 'en',
    classic_index: 84,
    sub: [4, 4, 4, 4],
    batch: 2
  },
  {
    slug: 'the-structure-of-scientific-revolutions',
    category: 'technology',
    title_en: 'The Structure of Scientific Revolutions',
    title_zh: '科学革命的结构',
    author: 'thomas-kuhn',
    year: 1962,
    original_language: 'en',
    classic_index: 95,
    sub: [5, 5, 5, 5],
    batch: 2
  },
  {
    slug: 'surely-youre-joking-mr-feynman',
    category: 'technology',
    title_en: 'Surely You\'re Joking, Mr. Feynman!',
    title_zh: '别闹了，费曼先生',
    author: 'richard-feynman',
    year: 1985,
    original_language: 'en',
    classic_index: 85,
    sub: [4, 4, 5, 4],
    batch: 2
  },
  {
    slug: 'structures-or-why-things-dont-fall-down',
    category: 'technology',
    title_en: 'Structures: Or Why Things Don\'t Fall Down',
    title_zh: '结构：为什么东西不会倒塌',
    author: 'j-e-gordon',
    year: 1978,
    original_language: 'en',
    classic_index: 82,
    sub: [4, 4, 5, 4],
    batch: 2
  },
  {
    slug: 'godel-escher-bach',
    category: 'technology',
    title_en: 'Gödel, Escher, Bach: An Eternal Golden Braid',
    title_zh: '哥德尔、艾舍尔、巴赫：集异璧之大成',
    author: 'douglas-hofstadter',
    year: 1979,
    original_language: 'en',
    classic_index: 94,
    sub: [5, 5, 5, 5],
    batch: 2
  },

  /* ============================================================
   * 03 · Finance & 金融 — 9 本
   * ============================================================ */
  {
    slug: 'the-black-swan',
    category: 'finance',
    title_en: 'The Black Swan: The Impact of the Highly Improbable',
    title_zh: '黑天鹅：如何应对不可预知的未来',
    author: 'nassim-nicholas-taleb',
    year: 2007,
    original_language: 'en',
    classic_index: 95,
    sub: [5, 5, 5, 5],
    batch: 2
  },
  {
    slug: 'fooled-by-randomness',
    category: 'finance',
    title_en: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets',
    title_zh: '随机漫步的傻瓜',
    author: 'nassim-nicholas-taleb',
    year: 2001,
    original_language: 'en',
    classic_index: 91,
    sub: [4, 5, 5, 5],
    batch: 2
  },
  {
    slug: 'antifragile',
    category: 'finance',
    title_en: 'Antifragile: Things That Gain from Disorder',
    title_zh: '反脆弱：从不确定性中获益',
    author: 'nassim-nicholas-taleb',
    year: 2012,
    original_language: 'en',
    classic_index: 93,
    sub: [5, 5, 5, 5],
    batch: 2
  },
  {
    slug: 'against-the-gods',
    category: 'finance',
    title_en: 'Against the Gods: The Remarkable Story of Risk',
    title_zh: '与天为敌：风险探索传奇',
    author: 'peter-bernstein',
    year: 1996,
    original_language: 'en',
    classic_index: 90,
    sub: [5, 5, 5, 5],
    batch: 2
  },
  {
    slug: 'manias-panics-and-crashes',
    category: 'finance',
    title_en: 'Manias, Panics, and Crashes: A History of Financial Crises',
    title_zh: '疯狂、惊恐和崩溃：金融危机史',
    author: 'charles-kindleberger',
    year: 1978,
    original_language: 'en',
    classic_index: 89,
    sub: [5, 4, 5, 4],
    batch: 2
  },
  {
    slug: 'extraordinary-popular-delusions',
    category: 'finance',
    title_en: 'Extraordinary Popular Delusions and the Madness of Crowds',
    title_zh: '大癫狂：非同寻常的大众幻想与群体疯狂',
    author: 'charles-mackay',
    year: 1841,
    original_language: 'en',
    classic_index: 86,
    sub: [5, 4, 5, 4],
    batch: 2
  },
  {
    slug: 'the-ascent-of-money',
    category: 'finance',
    title_en: 'The Ascent of Money: A Financial History of the World',
    title_zh: '货币崛起：世界金融简史',
    author: 'niall-ferguson',
    year: 2008,
    original_language: 'en',
    classic_index: 87,
    sub: [4, 4, 5, 5],
    batch: 2
  },
  {
    slug: 'the-big-short',
    category: 'finance',
    title_en: 'The Big Short: Inside the Doomsday Machine',
    title_zh: '大空头',
    author: 'michael-lewis',
    year: 2010,
    original_language: 'en',
    classic_index: 85,
    sub: [4, 3, 4, 4],
    batch: 3
  },
  {
    slug: 'when-genius-failed',
    category: 'finance',
    title_en: 'When Genius Failed: The Rise and Fall of Long-Term Capital Management',
    title_zh: '赌金者：长期资本管理公司的升腾与陨落',
    author: 'roger-lowenstein',
    year: 2000,
    original_language: 'en',
    classic_index: 86,
    sub: [4, 4, 5, 4],
    batch: 3
  },

  /* ============================================================
   * 04 · Investment & 投资 — 10 本
   * ============================================================ */
  {
    slug: 'the-intelligent-investor',
    category: 'investment',
    title_en: 'The Intelligent Investor',
    title_zh: '聪明的投资者',
    author: 'benjamin-graham',
    year: 1949,
    original_language: 'en',
    classic_index: 97,
    sub: [5, 5, 5, 5],
    batch: 3
  },
  {
    slug: 'security-analysis',
    category: 'investment',
    title_en: 'Security Analysis',
    title_zh: '证券分析',
    author: 'benjamin-graham',
    co_authors: [{ slug: 'david-dodd', en: 'David Dodd', zh: '戴维·多德' }],
    year: 1934,
    original_language: 'en',
    classic_index: 95,
    sub: [5, 5, 5, 5],
    batch: 3
  },
  {
    slug: 'common-stocks-and-uncommon-profits',
    category: 'investment',
    title_en: 'Common Stocks and Uncommon Profits',
    title_zh: '怎样选择成长股',
    author: 'philip-fisher',
    year: 1958,
    original_language: 'en',
    classic_index: 90,
    sub: [4, 4, 5, 4],
    batch: 3
  },
  {
    slug: 'poor-charlies-almanack',
    category: 'investment',
    title_en: 'Poor Charlie\'s Almanack: The Wit and Wisdom of Charles T. Munger',
    title_zh: '穷查理宝典：查理·芒格的智慧箴言录',
    author: 'charlie-munger',
    year: 2005,
    original_language: 'en',
    classic_index: 92,
    sub: [4, 5, 5, 5],
    batch: 3
  },
  {
    slug: 'the-most-important-thing',
    category: 'investment',
    title_en: 'The Most Important Thing: Uncommon Sense for the Thoughtful Investor',
    title_zh: '投资最重要的事',
    author: 'howard-marks',
    year: 2011,
    original_language: 'en',
    classic_index: 89,
    sub: [3, 5, 5, 4],
    batch: 3
  },
  {
    slug: 'margin-of-safety',
    category: 'investment',
    title_en: 'Margin of Safety: Risk-Averse Value Investing Strategies for the Thoughtful Investor',
    title_zh: '安全边际',
    author: 'seth-klarman',
    year: 1991,
    original_language: 'en',
    classic_index: 88,
    sub: [3, 4, 5, 3],
    batch: 3
  },
  {
    slug: 'a-random-walk-down-wall-street',
    category: 'investment',
    title_en: 'A Random Walk Down Wall Street',
    title_zh: '漫步华尔街',
    author: 'burton-malkiel',
    year: 1973,
    original_language: 'en',
    classic_index: 92,
    sub: [5, 4, 5, 5],
    batch: 3
  },
  {
    slug: 'one-up-on-wall-street',
    category: 'investment',
    title_en: 'One Up on Wall Street',
    title_zh: '彼得·林奇的成功投资',
    author: 'peter-lynch',
    year: 1989,
    original_language: 'en',
    classic_index: 87,
    sub: [4, 3, 5, 3],
    batch: 3
  },
  {
    slug: 'reminiscences-of-a-stock-operator',
    category: 'investment',
    title_en: 'Reminiscences of a Stock Operator',
    title_zh: '股票作手回忆录',
    author: 'edwin-lefevre',
    year: 1923,
    original_language: 'en',
    classic_index: 89,
    sub: [5, 4, 5, 3],
    batch: 3
  },
  {
    slug: 'irrational-exuberance',
    category: 'investment',
    title_en: 'Irrational Exuberance',
    title_zh: '非理性繁荣',
    author: 'robert-shiller',
    year: 2000,
    original_language: 'en',
    classic_index: 88,
    sub: [4, 5, 5, 5],
    batch: 3
  },

  /* ============================================================
   * 05 · US Stocks & 美股投资 — 4 本
   * ============================================================ */
  {
    slug: 'the-little-book-that-beats-the-market',
    category: 'us-stocks',
    title_en: 'The Little Book That Beats the Market',
    title_zh: '股市稳赚',
    author: 'joel-greenblatt',
    year: 2005,
    original_language: 'en',
    classic_index: 80,
    sub: [2, 3, 4, 3],
    batch: 3
  },
  {
    slug: 'the-battle-for-investment-survival',
    category: 'us-stocks',
    title_en: 'The Battle for Investment Survival',
    title_zh: '投资生存之战',
    author: 'gerald-loeb',
    year: 1935,
    original_language: 'en',
    classic_index: 81,
    sub: [4, 3, 4, 3],
    batch: 3
  },
  {
    slug: 'the-outsiders',
    category: 'us-stocks',
    title_en: 'The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success',
    title_zh: '商界局外人：八位非凡 CEO 的资本配置之道',
    author: 'william-thorndike',
    year: 2012,
    original_language: 'en',
    classic_index: 87,
    sub: [3, 4, 5, 4],
    batch: 3
  },
  {
    slug: '100-baggers',
    category: 'us-stocks',
    title_en: '100 Baggers: Stocks That Return 100-to-1 and How to Find Them',
    title_zh: '百倍股：如何找到回报百倍的股票',
    author: 'christopher-mayer',
    year: 2015,
    original_language: 'en',
    classic_index: 79,
    sub: [2, 3, 4, 3],
    batch: 4
  },

  /* ============================================================
   * 06 · Economics & 经济学 — 12 本
   * ============================================================ */
  {
    slug: 'the-wealth-of-nations',
    category: 'economics',
    title_en: 'An Inquiry into the Nature and Causes of the Wealth of Nations',
    title_zh: '国富论',
    author: 'adam-smith',
    year: 1776,
    original_language: 'en',
    classic_index: 97,
    sub: [5, 5, 5, 5],
    batch: 4
  },
  {
    slug: 'das-kapital',
    category: 'economics',
    title_en: 'Capital: A Critique of Political Economy',
    title_zh: '资本论',
    author: 'karl-marx',
    year: 1867,
    original_language: 'de',
    classic_index: 93,
    sub: [5, 5, 5, 5],
    batch: 4
  },
  {
    slug: 'the-general-theory',
    category: 'economics',
    title_en: 'The General Theory of Employment, Interest and Money',
    title_zh: '就业、利息和货币通论',
    author: 'john-maynard-keynes',
    year: 1936,
    original_language: 'en',
    classic_index: 96,
    sub: [5, 5, 5, 5],
    batch: 4
  },
  {
    slug: 'free-to-choose',
    category: 'economics',
    title_en: 'Free to Choose: A Personal Statement',
    title_zh: '自由选择',
    author: 'milton-friedman',
    co_authors: [{ slug: 'rose-friedman', en: 'Rose Friedman', zh: '罗斯·弗里德曼' }],
    year: 1980,
    original_language: 'en',
    classic_index: 88,
    sub: [4, 4, 5, 4],
    batch: 4
  },
  {
    slug: 'the-road-to-serfdom',
    category: 'economics',
    title_en: 'The Road to Serfdom',
    title_zh: '通往奴役之路',
    author: 'friedrich-hayek',
    year: 1944,
    original_language: 'en',
    classic_index: 92,
    sub: [5, 5, 5, 5],
    batch: 4
  },
  {
    slug: 'the-great-transformation',
    category: 'economics',
    title_en: 'The Great Transformation: The Political and Economic Origins of Our Time',
    title_zh: '大转型：我们时代的政治与经济起源',
    author: 'karl-polanyi',
    year: 1944,
    original_language: 'en',
    classic_index: 90,
    sub: [5, 5, 5, 5],
    batch: 4
  },
  {
    slug: 'capital-in-the-twenty-first-century',
    category: 'economics',
    title_en: 'Capital in the Twenty-First Century',
    title_zh: '21 世纪资本论',
    author: 'thomas-piketty',
    year: 2013,
    original_language: 'fr',
    classic_index: 88,
    sub: [4, 5, 4, 5],
    batch: 4
  },
  {
    slug: 'why-nations-fail',
    category: 'economics',
    title_en: 'Why Nations Fail: The Origins of Power, Prosperity, and Poverty',
    title_zh: '国家为什么会失败',
    author: 'daron-acemoglu',
    co_authors: [{ slug: 'james-robinson', en: 'James A. Robinson', zh: '詹姆斯·罗宾逊' }],
    year: 2012,
    original_language: 'en',
    classic_index: 89,
    sub: [4, 5, 5, 5],
    batch: 4
  },
  {
    slug: 'poor-economics',
    category: 'economics',
    title_en: 'Poor Economics: A Radical Rethinking of the Way to Fight Global Poverty',
    title_zh: '贫穷的本质：我们为什么摆脱不了贫穷',
    author: 'abhijit-banerjee',
    co_authors: [{ slug: 'esther-duflo', en: 'Esther Duflo', zh: '埃斯特·迪弗洛' }],
    year: 2011,
    original_language: 'en',
    classic_index: 85,
    sub: [3, 5, 5, 4],
    batch: 4
  },
  {
    slug: 'this-time-is-different',
    category: 'economics',
    title_en: 'This Time Is Different: Eight Centuries of Financial Folly',
    title_zh: '这次不一样：八百年金融危机史',
    author: 'carmen-reinhart',
    co_authors: [{ slug: 'kenneth-rogoff', en: 'Kenneth S. Rogoff', zh: '肯尼斯·罗格夫' }],
    year: 2009,
    original_language: 'en',
    classic_index: 88,
    sub: [4, 5, 5, 4],
    batch: 4
  },
  {
    slug: 'misbehaving',
    category: 'economics',
    title_en: 'Misbehaving: The Making of Behavioral Economics',
    title_zh: '“错误”的行为：行为经济学的形成',
    author: 'richard-thaler',
    year: 2015,
    original_language: 'en',
    classic_index: 85,
    sub: [4, 4, 5, 4],
    batch: 4
  },
  {
    slug: 'the-worldly-philosophers',
    category: 'economics',
    title_en: 'The Worldly Philosophers: The Lives, Times and Ideas of the Great Economic Thinkers',
    title_zh: '世俗哲学家：伟大经济学家的生平、时代与思想',
    author: 'robert-heilbroner',
    year: 1953,
    original_language: 'en',
    classic_index: 88,
    sub: [5, 4, 5, 5],
    batch: 4
  },

  /* ============================================================
   * 07 · World History & 世界历史 — 12 本
   * ============================================================ */
  {
    slug: 'guns-germs-and-steel',
    category: 'history',
    title_en: 'Guns, Germs, and Steel: The Fates of Human Societies',
    title_zh: '枪炮、病菌与钢铁：人类社会的命运',
    author: 'jared-diamond',
    year: 1997,
    original_language: 'en',
    classic_index: 93,
    sub: [5, 5, 5, 5],
    batch: 5
  },
  {
    slug: 'sapiens',
    category: 'history',
    title_en: 'Sapiens: A Brief History of Humankind',
    title_zh: '人类简史：从动物到上帝',
    author: 'yuval-noah-harari',
    year: 2011,
    original_language: 'he',
    classic_index: 92,
    sub: [5, 4, 5, 5],
    batch: 5
  },
  {
    slug: 'the-clash-of-civilizations',
    category: 'history',
    title_en: 'The Clash of Civilizations and the Remaking of World Order',
    title_zh: '文明的冲突与世界秩序的重建',
    author: 'samuel-huntington',
    year: 1996,
    original_language: 'en',
    classic_index: 91,
    sub: [5, 4, 5, 5],
    batch: 5
  },
  {
    slug: 'world-order',
    category: 'history',
    title_en: 'World Order',
    title_zh: '世界秩序',
    author: 'henry-kissinger',
    year: 2014,
    original_language: 'en',
    classic_index: 88,
    sub: [4, 4, 5, 5],
    batch: 5
  },
  {
    slug: 'the-rise-and-fall-of-the-third-reich',
    category: 'history',
    title_en: 'The Rise and Fall of the Third Reich',
    title_zh: '第三帝国的兴亡',
    author: 'william-shirer',
    year: 1960,
    original_language: 'en',
    classic_index: 91,
    sub: [5, 4, 5, 4],
    batch: 5
  },
  {
    slug: 'the-guns-of-august',
    category: 'history',
    title_en: 'The Guns of August',
    title_zh: '八月炮火',
    author: 'barbara-tuchman',
    year: 1962,
    original_language: 'en',
    classic_index: 90,
    sub: [5, 4, 5, 4],
    batch: 5
  },
  {
    slug: 'postwar',
    category: 'history',
    title_en: 'Postwar: A History of Europe Since 1945',
    title_zh: '战后欧洲史',
    author: 'tony-judt',
    year: 2005,
    original_language: 'en',
    classic_index: 90,
    sub: [4, 5, 5, 5],
    batch: 5
  },
  {
    slug: 'the-silk-roads',
    category: 'history',
    title_en: 'The Silk Roads: A New History of the World',
    title_zh: '丝绸之路：一部全新的世界史',
    author: 'peter-frankopan',
    year: 2015,
    original_language: 'en',
    classic_index: 85,
    sub: [3, 4, 4, 5],
    batch: 5
  },
  {
    slug: 'history-of-the-peloponnesian-war',
    category: 'history',
    title_en: 'History of the Peloponnesian War',
    title_zh: '伯罗奔尼撒战争史',
    author: 'thucydides',
    year: -400,
    original_language: 'grc',
    classic_index: 95,
    sub: [5, 5, 5, 5],
    batch: 5
  },
  {
    slug: 'the-decline-and-fall-of-the-roman-empire',
    category: 'history',
    title_en: 'The History of the Decline and Fall of the Roman Empire',
    title_zh: '罗马帝国衰亡史',
    author: 'edward-gibbon',
    year: 1776,
    original_language: 'en',
    classic_index: 94,
    sub: [5, 5, 5, 5],
    batch: 5
  },
  {
    slug: 'the-end-of-history',
    category: 'history',
    title_en: 'The End of History and the Last Man',
    title_zh: '历史的终结与最后的人',
    author: 'francis-fukuyama',
    year: 1992,
    original_language: 'en',
    classic_index: 89,
    sub: [5, 4, 5, 5],
    batch: 5
  },
  {
    slug: '1587-a-year-of-no-significance',
    category: 'history',
    title_en: '1587, A Year of No Significance: The Ming Dynasty in Decline',
    title_zh: '万历十五年',
    author: 'ray-huang',
    year: 1981,
    original_language: 'en',
    classic_index: 91,
    sub: [4, 5, 5, 5],
    batch: 5
  },

  /* ============================================================
   * 08 · Business & 商业 — 9 本
   * ============================================================ */
  {
    slug: 'zero-to-one',
    category: 'business',
    title_en: 'Zero to One: Notes on Startups, or How to Build the Future',
    title_zh: '从 0 到 1：开启商业与未来的秘密',
    author: 'peter-thiel',
    year: 2014,
    original_language: 'en',
    classic_index: 87,
    sub: [3, 4, 5, 4],
    batch: 5
  },
  {
    slug: 'the-innovators-dilemma',
    category: 'business',
    title_en: 'The Innovator\'s Dilemma',
    title_zh: '创新者的窘境',
    author: 'clayton-christensen',
    year: 1997,
    original_language: 'en',
    classic_index: 94,
    sub: [5, 5, 5, 5],
    batch: 5
  },
  {
    slug: 'competitive-strategy',
    category: 'business',
    title_en: 'Competitive Strategy: Techniques for Analyzing Industries and Competitors',
    title_zh: '竞争战略',
    author: 'michael-porter',
    year: 1980,
    original_language: 'en',
    classic_index: 95,
    sub: [5, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'good-to-great',
    category: 'business',
    title_en: 'Good to Great: Why Some Companies Make the Leap... and Others Don\'t',
    title_zh: '从优秀到卓越',
    author: 'jim-collins',
    year: 2001,
    original_language: 'en',
    classic_index: 87,
    sub: [4, 4, 5, 4],
    batch: 6
  },
  {
    slug: 'the-design-of-everyday-things',
    category: 'business',
    title_en: 'The Design of Everyday Things',
    title_zh: '设计心理学',
    author: 'don-norman',
    year: 1988,
    original_language: 'en',
    classic_index: 90,
    sub: [4, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'the-hard-thing-about-hard-things',
    category: 'business',
    title_en: 'The Hard Thing About Hard Things',
    title_zh: '创业维艰：如何完成比难更难的事',
    author: 'ben-horowitz',
    year: 2014,
    original_language: 'en',
    classic_index: 84,
    sub: [3, 4, 5, 3],
    batch: 6
  },
  {
    slug: 'the-effective-executive',
    category: 'business',
    title_en: 'The Effective Executive: The Definitive Guide to Getting the Right Things Done',
    title_zh: '卓有成效的管理者',
    author: 'peter-drucker',
    year: 1966,
    original_language: 'en',
    classic_index: 92,
    sub: [5, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'crossing-the-chasm',
    category: 'business',
    title_en: 'Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers',
    title_zh: '跨越鸿沟',
    author: 'geoffrey-moore',
    year: 1991,
    original_language: 'en',
    classic_index: 90,
    sub: [4, 4, 5, 4],
    batch: 6
  },
  {
    slug: 'only-the-paranoid-survive',
    category: 'business',
    title_en: 'Only the Paranoid Survive: How to Exploit the Crisis Points That Challenge Every Company',
    title_zh: '只有偏执狂才能生存',
    author: 'andy-grove',
    year: 1996,
    original_language: 'en',
    classic_index: 89,
    sub: [4, 4, 5, 4],
    batch: 6
  },

  /* ============================================================
   * 09 · Philosophy & 哲学 — 9 本
   * ============================================================ */
  {
    slug: 'meditations',
    category: 'philosophy',
    title_en: 'Meditations',
    title_zh: '沉思录',
    author: 'marcus-aurelius',
    year: 180,
    original_language: 'grc',
    classic_index: 96,
    sub: [5, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'thus-spoke-zarathustra',
    category: 'philosophy',
    title_en: 'Thus Spoke Zarathustra: A Book for All and None',
    title_zh: '查拉图斯特拉如是说',
    author: 'friedrich-nietzsche',
    year: 1883,
    original_language: 'de',
    classic_index: 94,
    sub: [5, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'the-republic',
    category: 'philosophy',
    title_en: 'The Republic',
    title_zh: '理想国',
    author: 'plato',
    year: -375,
    original_language: 'grc',
    classic_index: 97,
    sub: [5, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'nicomachean-ethics',
    category: 'philosophy',
    title_en: 'Nicomachean Ethics',
    title_zh: '尼各马可伦理学',
    author: 'aristotle',
    year: -340,
    original_language: 'grc',
    classic_index: 95,
    sub: [5, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'tao-te-ching',
    category: 'philosophy',
    title_en: 'Tao Te Ching',
    title_zh: '道德经',
    author: 'laozi',
    year: -400,
    original_language: 'zh',
    classic_index: 97,
    sub: [5, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'the-analects',
    category: 'philosophy',
    title_en: 'The Analects',
    title_zh: '论语',
    author: 'confucius',
    year: -450,
    original_language: 'zh',
    classic_index: 97,
    sub: [5, 5, 5, 5],
    batch: 6
  },
  {
    slug: 'the-myth-of-sisyphus',
    category: 'philosophy',
    title_en: 'The Myth of Sisyphus',
    title_zh: '西西弗神话',
    author: 'albert-camus',
    year: 1942,
    original_language: 'fr',
    classic_index: 92,
    sub: [5, 5, 5, 5],
    batch: 7
  },
  {
    slug: 'letters-from-a-stoic',
    category: 'philosophy',
    title_en: 'Letters from a Stoic',
    title_zh: '道德书简',
    author: 'seneca',
    year: 65,
    original_language: 'la',
    classic_index: 91,
    sub: [5, 5, 5, 5],
    batch: 7
  },
  {
    slug: 'what-are-you-doing-with-your-life',
    category: 'philosophy',
    title_en: 'What Are You Doing with Your Life?',
    title_zh: '人生中不可不想的事',
    author: 'jiddu-krishnamurti',
    year: 2001,
    original_language: 'en',
    classic_index: 84,
    sub: [3, 5, 5, 4],
    batch: 7
  },

  /* ============================================================
   * 10 · Psychology & Cognitive Science — 9 本
   * ============================================================ */
  {
    slug: 'thinking-fast-and-slow',
    category: 'psychology',
    title_en: 'Thinking, Fast and Slow',
    title_zh: '思考，快与慢',
    author: 'daniel-kahneman',
    year: 2011,
    original_language: 'en',
    classic_index: 95,
    sub: [5, 5, 5, 5],
    batch: 7
  },
  {
    slug: 'noise',
    category: 'psychology',
    title_en: 'Noise: A Flaw in Human Judgment',
    title_zh: '噪声',
    author: 'daniel-kahneman',
    co_authors: [
      { slug: 'olivier-sibony', en: 'Olivier Sibony', zh: '奥利维耶·西博尼' },
      { slug: 'cass-sunstein', en: 'Cass R. Sunstein', zh: '卡斯·桑斯坦' }
    ],
    year: 2021,
    original_language: 'en',
    classic_index: 86,
    sub: [3, 5, 5, 4],
    batch: 7
  },
  {
    slug: 'influence',
    category: 'psychology',
    title_en: 'Influence: The Psychology of Persuasion',
    title_zh: '影响力',
    author: 'robert-cialdini',
    year: 1984,
    original_language: 'en',
    classic_index: 92,
    sub: [5, 5, 5, 5],
    batch: 7
  },
  {
    slug: 'predictably-irrational',
    category: 'psychology',
    title_en: 'Predictably Irrational: The Hidden Forces That Shape Our Decisions',
    title_zh: '怪诞行为学：可预测的非理性',
    author: 'dan-ariely',
    year: 2008,
    original_language: 'en',
    classic_index: 84,
    sub: [3, 4, 4, 4],
    batch: 7
  },
  {
    slug: 'the-psychology-of-money',
    category: 'psychology',
    title_en: 'The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness',
    title_zh: '金钱心理学',
    author: 'morgan-housel',
    year: 2020,
    original_language: 'en',
    classic_index: 82,
    sub: [2, 4, 4, 4],
    batch: 7
  },
  {
    slug: 'flow',
    category: 'psychology',
    title_en: 'Flow: The Psychology of Optimal Experience',
    title_zh: '心流：最优体验心理学',
    author: 'mihaly-csikszentmihalyi',
    year: 1990,
    original_language: 'en',
    classic_index: 88,
    sub: [4, 5, 5, 4],
    batch: 7
  },
  {
    slug: 'mindset',
    category: 'psychology',
    title_en: 'Mindset: The New Psychology of Success',
    title_zh: '终身成长：重新定义成功的思维模式',
    author: 'carol-dweck',
    year: 2006,
    original_language: 'en',
    classic_index: 83,
    sub: [3, 4, 4, 4],
    batch: 7
  },
  {
    slug: 'superforecasting',
    category: 'psychology',
    title_en: 'Superforecasting: The Art and Science of Prediction',
    title_zh: '超预测：预见未来的艺术和科学',
    author: 'philip-tetlock',
    co_authors: [{ slug: 'dan-gardner', en: 'Dan Gardner', zh: '丹·加德纳' }],
    year: 2015,
    original_language: 'en',
    classic_index: 87,
    sub: [3, 5, 5, 4],
    batch: 8
  },
  {
    slug: 'thinking-in-systems',
    category: 'psychology',
    title_en: 'Thinking in Systems: A Primer',
    title_zh: '系统之美：决策者的系统思考',
    author: 'donella-meadows',
    year: 2008,
    original_language: 'en',
    classic_index: 89,
    sub: [4, 5, 5, 5],
    batch: 8
  },

  /* ============================================================
   * 11 · Society & Civilization — 5 本
   * ============================================================ */
  {
    slug: 'the-protestant-ethic-and-the-spirit-of-capitalism',
    category: 'society',
    title_en: 'The Protestant Ethic and the Spirit of Capitalism',
    title_zh: '新教伦理与资本主义精神',
    author: 'max-weber',
    year: 1905,
    original_language: 'de',
    classic_index: 94,
    sub: [5, 5, 5, 5],
    batch: 8
  },
  {
    slug: 'on-liberty',
    category: 'society',
    title_en: 'On Liberty',
    title_zh: '论自由',
    author: 'john-stuart-mill',
    year: 1859,
    original_language: 'en',
    classic_index: 93,
    sub: [5, 5, 5, 5],
    batch: 8
  },
  {
    slug: 'leviathan',
    category: 'society',
    title_en: 'Leviathan',
    title_zh: '利维坦',
    author: 'thomas-hobbes',
    year: 1651,
    original_language: 'en',
    classic_index: 94,
    sub: [5, 5, 5, 5],
    batch: 8
  },
  {
    slug: 'the-crowd',
    category: 'society',
    title_en: 'The Crowd: A Study of the Popular Mind',
    title_zh: '乌合之众：大众心理研究',
    author: 'gustave-le-bon',
    year: 1895,
    original_language: 'fr',
    classic_index: 89,
    sub: [5, 4, 5, 5],
    batch: 8
  },
  {
    slug: 'amusing-ourselves-to-death',
    category: 'society',
    title_en: 'Amusing Ourselves to Death: Public Discourse in the Age of Show Business',
    title_zh: '娱乐至死',
    author: 'neil-postman',
    year: 1985,
    original_language: 'en',
    classic_index: 90,
    sub: [4, 5, 5, 5],
    batch: 8
  }
];

export default books;
