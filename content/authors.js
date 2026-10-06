/**
 * 作者档案 · 双语
 * key 必须与 books.manifest.js 中的 author / co_authors[].slug 完全一致
 * 生卒年不确定时留空或只写大致世纪，不编造具体年份。
 */
export const authors = {
  'aaron-courville': {
    name_en: 'Aaron Courville',
    name_zh: '亚伦·库维尔',
    life: '',
    nationality_zh: '加拿大',
    nationality_en: 'Canadian',
    role_zh: '计算机科学家、大学教授',
    role_en: 'Computer scientist and university professor',
    bio_zh: '加拿大计算机科学家，任教于蒙特利尔大学，MILA 魁北克人工智能研究所核心成员。他与 Goodfellow、Bengio 合著《深度学习》，该书成为深度学习领域的标准教科书。研究兴趣包括表征学习与生成模型。',
    bio_en: 'Canadian computer scientist at the University of Montreal and a core member of Mila, the Quebec AI Institute. He co-authored Deep Learning with Goodfellow and Bengio, which became the standard textbook of the field. His research spans representation learning and generative models.',
    ideas_zh: ['《深度学习》教科书主要作者之一', '表征学习与生成模型研究'],
    ideas_en: ['A lead author of the Deep Learning textbook', 'Research on representation learning and generative models']
  },

  'abhijit-banerjee': {
    name_en: 'Abhijit Banerjee',
    name_zh: '阿比吉特·班纳吉',
    life: '1961–',
    nationality_zh: '印度裔美国',
    nationality_en: 'Indian-American',
    role_zh: '经济学家、MIT 教授',
    role_en: 'Economist and MIT professor',
    bio_zh: '印度裔美国经济学家，麻省理工学院国际经济学教授，贫困行动实验室（J-PAL）联合创始人。他推动以随机对照试验研究减贫政策，2019 年与 Esther Duflo、Michael Kremer 共同获得诺贝尔经济学奖。',
    bio_en: 'Indian-American economist and professor at MIT, and a co-founder of the Abdul Latif Jameel Poverty Action Lab (J-PAL). He pioneered the use of randomized controlled trials in development economics and shared the 2019 Nobel Prize in Economics with Esther Duflo and Michael Kremer.',
    ideas_zh: ['以随机对照试验研究发展经济学', '贫困行动实验室（J-PAL）联合创始人', '2019 年诺贝尔经济学奖'],
    ideas_en: ['Randomized controlled trials in development economics', 'Co-founder of J-PAL', '2019 Nobel Prize in Economics']
  },

  'adam-smith': {
    name_en: 'Adam Smith',
    name_zh: '亚当·斯密',
    life: '1723–1790',
    nationality_zh: '苏格兰',
    nationality_en: 'Scottish',
    role_zh: '经济学家、哲学家',
    role_en: 'Economist and philosopher',
    bio_zh: '苏格兰启蒙运动思想家，现代经济学的奠基人。1776 年出版《国富论》，系统阐述分工、市场机制与「看不见的手」，成为自由主义经济思想的源头。',
    bio_en: 'A Scottish Enlightenment thinker and the founder of modern economics. His 1776 work The Wealth of Nations set out the division of labour, market mechanisms and the metaphor of the invisible hand, becoming the origin of liberal economic thought.',
    ideas_zh: ['「看不见的手」与市场自发秩序', '分工提升生产率', '现代经济学奠基人'],
    ideas_en: ['The invisible hand and spontaneous market order', 'Division of labour as a source of productivity', 'Founder of modern economics']
  },

  'albert-camus': {
    name_en: 'Albert Camus',
    name_zh: '阿尔贝·加缪',
    life: '1913–1960',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '作家、哲学家',
    role_en: 'Writer and philosopher',
    bio_zh: '法籍阿尔及利亚裔作家与哲学家，荒诞主义文学的代表人物，1957 年获诺贝尔文学奖。《西西弗神话》以「应当想象西西弗是幸福的」回应人在无意义世界中的处境。',
    bio_en: 'A French-Algerian writer and philosopher, a leading figure of absurdist literature and winner of the 1957 Nobel Prize in Literature. The Myth of Sisyphus answers the human condition in a meaningless world with the line that one must imagine Sisyphus happy.',
    ideas_zh: ['荒诞哲学', '反抗与自由', '1957 年诺贝尔文学奖'],
    ideas_en: ['The philosophy of the absurd', 'Revolt and freedom', '1957 Nobel Prize in Literature']
  },

  'andrew-barto': {
    name_en: 'Andrew Barto',
    name_zh: '安德鲁·巴托',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '计算机科学家、大学教授',
    role_en: 'Computer scientist and university professor',
    bio_zh: '美国计算机科学家，马萨诸塞大学阿默斯特分校荣休教授，强化学习领域的奠基人之一。他与 Richard Sutton 合著《强化学习导论》，并共同获得 2024 年图灵奖。',
    bio_en: 'American computer scientist and emeritus professor at UMass Amherst, and one of the founders of reinforcement learning. He co-authored Reinforcement Learning: An Introduction with Richard Sutton and shared the 2024 ACM A. M. Turing Award.',
    ideas_zh: ['强化学习奠基人之一', '时序差分学习', '2024 年图灵奖'],
    ideas_en: ['A founder of reinforcement learning', 'Temporal-difference learning', '2024 ACM A. M. Turing Award']
  },

  'andrew-mcafee': {
    name_en: 'Andrew McAfee',
    name_zh: '安德鲁·麦卡菲',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济学家、MIT 研究员',
    role_en: 'Economist and MIT research scientist',
    bio_zh: '麻省理工学院斯隆管理学院首席研究科学家，与 Erik Brynjolfsson 长期合作，研究数字技术对生产率、就业与增长的影响。两人合著《第二次机器革命》。',
    bio_en: 'Principal research scientist at the MIT Sloan School of Management. He has long collaborated with Erik Brynjolfsson on how digital technologies affect productivity, employment and growth, and the two co-authored The Second Machine Age.',
    ideas_zh: ['数字技术对就业与增长的影响', '与 Brynjolfsson 的长期合作'],
    ideas_en: ['Digital technology and its effect on jobs and growth', 'Long-running collaboration with Brynjolfsson']
  },

  'andy-grove': {
    name_en: 'Andy Grove',
    name_zh: '安迪·格鲁夫',
    life: '1936–2016',
    nationality_zh: '匈牙利裔美国',
    nationality_en: 'Hungarian-American',
    role_zh: '企业家、英特尔前 CEO',
    role_en: 'Businessman and former CEO of Intel',
    bio_zh: '匈牙利裔美国企业家，英特尔公司前董事长兼 CEO，主导了公司从存储器向微处理器的战略转型。著有《只有偏执狂才能生存》，提出「战略转折点」概念。',
    bio_en: 'Hungarian-American businessman and former chairman and CEO of Intel, who led the company through its shift from memory chips to microprocessors. In Only the Paranoid Survive he introduced the idea of the strategic inflection point.',
    ideas_zh: ['「战略转折点」', '英特尔转型的关键领导者'],
    ideas_en: ['The strategic inflection point', 'A key leader of Intel’s transformation']
  },

  'aristotle': {
    name_en: 'Aristotle',
    name_zh: '亚里士多德',
    life: '前384–前322',
    nationality_zh: '古希腊',
    nationality_en: 'Ancient Greek',
    role_zh: '哲学家、科学家',
    role_en: 'Philosopher and scientist',
    bio_zh: '古希腊哲学家，柏拉图的学生、亚历山大大帝的老师。其著作涵盖逻辑学、伦理学、政治学、物理学与生物学，深刻塑造了西方思想传统。《尼各马可伦理学》探讨德性与幸福。',
    bio_en: 'Ancient Greek philosopher, a student of Plato and teacher of Alexander the Great. His works span logic, ethics, politics, physics and biology, shaping the Western intellectual tradition. The Nicomachean Ethics examines virtue and human flourishing.',
    ideas_zh: ['德性伦理学与「中道」', '逻辑学的奠基', '百科全书式的知识体系'],
    ideas_en: ['Virtue ethics and the golden mean', 'Foundations of logic', 'An encyclopaedic body of knowledge']
  },

  'barbara-tuchman': {
    name_en: 'Barbara Tuchman',
    name_zh: '芭芭拉·塔奇曼',
    life: '1912–1989',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '历史学家、作家',
    role_en: 'Historian and author',
    bio_zh: '美国历史学家与通俗史学作家，两度获得普利策奖。《八月炮火》描写第一次世界大战爆发的最初一个月，以叙事史笔法著称。',
    bio_en: 'American historian and popular narrative historian, twice a Pulitzer Prize winner. The Guns of August recounts the first month of the First World War and is celebrated for its narrative craft.',
    ideas_zh: ['叙事史的写作典范', '两度普利策奖', '《八月炮火》'],
    ideas_en: ['A model of narrative history', 'Two Pulitzer Prizes', 'The Guns of August']
  },

  'ben-horowitz': {
    name_en: 'Ben Horowitz',
    name_zh: '本·霍洛维茨',
    life: '1966–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '企业家、风险投资人',
    role_en: 'Entrepreneur and venture capitalist',
    bio_zh: '美国企业家与投资人，Andreessen Horowitz（a16z）联合创始人，曾任 Opsware 首席执行官并将其出售给惠普。《创业维艰》讲述创业与经营中最艰难的决策。',
    bio_en: 'American entrepreneur and investor, co-founder of Andreessen Horowitz (a16z) and former CEO of Opsware, which he sold to Hewlett-Packard. The Hard Thing About Hard Things is about the toughest decisions in building and running a company.',
    ideas_zh: ['a16z 联合创始人', '「艰难时刻」的管理经验'],
    ideas_en: ['Co-founder of a16z', 'Management lessons from the hardest moments']
  },

  'benjamin-graham': {
    name_en: 'Benjamin Graham',
    name_zh: '本杰明·格雷厄姆',
    life: '1894–1976',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资家、经济学家',
    role_en: 'Investor and economist',
    bio_zh: '美国投资家，价值投资的开创者，被誉为「价值投资之父」，也是沃伦·巴菲特的老师。《证券分析》与《聪明的投资者》奠定了基本面分析与安全边际的理论基础。',
    bio_en: 'American investor and the founder of value investing, known as the father of value investing and a teacher of Warren Buffett. Security Analysis and The Intelligent Investor laid the theoretical foundations of fundamental analysis and the margin of safety.',
    ideas_zh: ['价值投资', '安全边际', '「市场先生」寓言'],
    ideas_en: ['Value investing', 'The margin of safety', 'The Mr. Market parable']
  },

  'brian-christian': {
    name_en: 'Brian Christian',
    name_zh: '布莱恩·克里斯蒂安',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家',
    role_en: 'Author',
    bio_zh: '美国作家，拥有计算机科学与哲学背景，擅长写作计算机科学与人文学科交叉的主题。《人机对齐》系统梳理了机器学习与人类价值对齐的研究进展。',
    bio_en: 'American author with a background in computer science and philosophy, who writes on the intersection of computing and the humanities. The Alignment Problem surveys research on aligning machine learning with human values.',
    ideas_zh: ['AI 对齐问题的系统梳理', '科技与人文的跨学科写作'],
    ideas_en: ['A systematic account of the AI alignment problem', 'Cross-disciplinary writing on technology and the humanities']
  },

  'burton-malkiel': {
    name_en: 'Burton Malkiel',
    name_zh: '伯顿·马尔基尔',
    life: '1932–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济学家、普林斯顿大学教授',
    role_en: 'Economist and Princeton professor',
    bio_zh: '美国经济学家，普林斯顿大学经济学教授，曾任多家金融机构董事。《漫步华尔街》倡导指数投资，是有效市场假说在个人投资中的通俗表达。',
    bio_en: 'American economist and Princeton professor, and a former director of several financial institutions. A Random Walk Down Wall Street advocates index investing and popularises the efficient-market hypothesis for individual investors.',
    ideas_zh: ['有效市场假说', '指数基金投资', '随机漫步理论'],
    ideas_en: ['The efficient-market hypothesis', 'Index-fund investing', 'Random walk theory']
  },

  'cade-metz': {
    name_en: 'Cade Metz',
    name_zh: '凯德·梅茨',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '记者、作家',
    role_en: 'Journalist and author',
    bio_zh: '美国科技记者，《纽约时报》记者，长期报道人工智能。《天才制造者》记录了深度学习浪潮中关键人物的竞争与合作。',
    bio_en: 'American technology journalist at The New York Times who has long covered artificial intelligence. Genius Makers chronicles the rivalries and collaborations among the key figures of the deep learning era.',
    ideas_zh: ['AI 产业史的记者视角', '深度学习兴起的人物叙事'],
    ideas_en: ['A journalist’s view of AI industry history', 'The human story behind the rise of deep learning']
  },

  'carmen-reinhart': {
    name_en: 'Carmen Reinhart',
    name_zh: '卡门·莱因哈特',
    life: '1956–',
    nationality_zh: '古巴裔美国',
    nationality_en: 'Cuban-American',
    role_zh: '经济学家',
    role_en: 'Economist',
    bio_zh: '古巴裔美国经济学家，曾任世界银行首席经济学家，现为哈佛肯尼迪学院教授。她与 Kenneth Rogoff 合著《这次不一样》，系统梳理八百年金融危机史。',
    bio_en: 'Cuban-American economist, a former chief economist of the World Bank and now a professor at Harvard Kennedy School. With Kenneth Rogoff she wrote This Time Is Different, a survey of eight centuries of financial crises.',
    ideas_zh: ['主权债务与金融危机研究', '与 Rogoff 的长期合作', '危机史的量化研究'],
    ideas_en: ['Research on sovereign debt and financial crises', 'Long collaboration with Rogoff', 'Quantitative work on crisis history']
  },

  'carol-dweck': {
    name_en: 'Carol Dweck',
    name_zh: '卡罗尔·德韦克',
    life: '1946–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '心理学家、斯坦福大学教授',
    role_en: 'Psychologist and Stanford professor',
    bio_zh: '美国心理学家，斯坦福大学心理学教授，成长型思维理论的提出者。《终身成长》区分固定型思维与成长型思维，对教育与组织管理影响深远。',
    bio_en: 'American psychologist and Stanford professor who developed the theory of growth mindset. Mindset contrasts fixed and growth mindsets and has had wide influence on education and management.',
    ideas_zh: ['固定型思维与成长型思维', '动机与归因研究'],
    ideas_en: ['Fixed versus growth mindset', 'Research on motivation and attribution']
  },

  'cass-sunstein': {
    name_en: 'Cass R. Sunstein',
    name_zh: '卡斯·桑斯坦',
    life: '1954–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '法学家、哈佛大学教授',
    role_en: 'Legal scholar and Harvard professor',
    bio_zh: '美国法学家，哈佛大学法学院教授，行为经济学与法律交叉领域的代表人物，曾任职于奥巴马政府。他与 Richard Thaler 合著《助推》，与 Kahneman、Sibony 合著《噪声》。',
    bio_en: 'American legal scholar and Harvard Law School professor, a leading figure at the intersection of behavioural economics and law who served in the Obama administration. He co-authored Nudge with Richard Thaler and Noise with Kahneman and Sibony.',
    ideas_zh: ['「助推」与自由家长主义', '行为法与公共政策'],
    ideas_en: ['Nudge and libertarian paternalism', 'Behavioural law and public policy']
  },

  'charles-kindleberger': {
    name_en: 'Charles Kindleberger',
    name_zh: '查尔斯·金德尔伯格',
    life: '1910–2003',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济史学家、MIT 教授',
    role_en: 'Economic historian and MIT professor',
    bio_zh: '美国经济史学家，长期任教于麻省理工学院。《疯狂、惊恐和崩溃》成为金融危机史研究的经典，使「明斯基模型」式的危机分析广为流传。',
    bio_en: 'American economic historian who taught for many years at MIT. Manias, Panics, and Crashes became a classic in the study of financial crises and helped popularise a Minsky-style model of crisis dynamics.',
    ideas_zh: ['金融危机史研究', '「明斯基模型」的传播'],
    ideas_en: ['The history of financial crises', 'Popularising the Minsky model']
  },

  'charles-mackay': {
    name_en: 'Charles Mackay',
    name_zh: '查尔斯·麦凯',
    life: '1814–1889',
    nationality_zh: '苏格兰',
    nationality_en: 'Scottish',
    role_zh: '记者、作家',
    role_en: 'Journalist and author',
    bio_zh: '苏格兰记者与作家。《大癫狂》（1841）记述了郁金香狂热、南海泡沫等群体性疯狂事件，是群体心理学与金融史的先驱之作。',
    bio_en: 'Scottish journalist and author. Extraordinary Popular Delusions and the Madness of Crowds (1841) recounts episodes of mass mania such as tulip mania and the South Sea Bubble, and is a pioneering work in crowd psychology and financial history.',
    ideas_zh: ['群体性狂热的历史记录', '金融泡沫的早期分析'],
    ideas_en: ['A record of episodes of mass mania', 'Early analysis of financial bubbles']
  },

  'charlie-munger': {
    name_en: 'Charlie Munger',
    name_zh: '查理·芒格',
    life: '1924–2023',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资家、伯克希尔副主席',
    role_en: 'Investor and vice chairman of Berkshire Hathaway',
    bio_zh: '美国投资家，伯克希尔·哈撒韦公司副主席，沃伦·巴菲特的长期搭档。《穷查理宝典》汇集其演讲与思维模型，强调「多元思维模型」与逆向思考。',
    bio_en: 'American investor, vice chairman of Berkshire Hathaway and Warren Buffett’s long-time partner. Poor Charlie’s Almanack gathers his speeches and mental models, emphasising a latticework of multidisciplinary models and inversion.',
    ideas_zh: ['多元思维模型', '逆向思考', '跨学科的常识体系'],
    ideas_en: ['A latticework of mental models', 'Inversion', 'Multidisciplinary common sense']
  },

  'chen-qiufan': {
    name_en: 'Chen Qiufan',
    name_zh: '陈楸帆',
    life: '1981–',
    nationality_zh: '中国',
    nationality_en: 'Chinese',
    role_zh: '科幻作家',
    role_en: 'Science fiction writer',
    bio_zh: '中国科幻作家，以「科幻现实主义」风格著称，代表作《荒潮》。他与李开复合著《AI 2041》，以虚构故事结合技术分析展望人工智能的未来。',
    bio_en: 'Chinese science fiction writer known for a style he calls science-fiction realism, and author of the novel Waste Tide. With Kai-Fu Lee he wrote AI 2041, pairing fictional stories with technical analysis to imagine the future of artificial intelligence.',
    ideas_zh: ['科幻现实主义', '《荒潮》', '与李开复合作《AI 2041》'],
    ideas_en: ['Science-fiction realism', 'The novel Waste Tide', 'AI 2041 with Kai-Fu Lee']
  },

  'chris-miller': {
    name_en: 'Chris Miller',
    name_zh: '克里斯·米勒',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '历史学家、大学教授',
    role_en: 'Historian and university professor',
    bio_zh: '美国历史学家，塔夫茨大学弗莱彻学院教授，研究国际经济与地缘政治。《芯片战争》讲述半导体产业的地缘竞争史。',
    bio_en: 'American historian and professor at the Fletcher School at Tufts University, working on international economics and geopolitics. Chip War tells the story of geopolitical competition over semiconductors.',
    ideas_zh: ['半导体产业的地缘政治', '技术史与大国竞争'],
    ideas_en: ['The geopolitics of the semiconductor industry', 'Technology history and great-power rivalry']
  },

  'christopher-mayer': {
    name_en: 'Christopher Mayer',
    name_zh: '克里斯托弗·迈耶',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资作家',
    role_en: 'Investment writer',
    bio_zh: '美国投资研究者与作家，曾任职于基金行业。《百倍股》研究长期大幅上涨股票的共同特征，强调长期持有与复利。',
    bio_en: 'American investment researcher and writer with a background in the fund industry. 100 Baggers studies the common traits of stocks that rose a hundredfold, stressing long holding periods and compounding.',
    ideas_zh: ['百倍股的共同特征', '长期持有与复利'],
    ideas_en: ['Common traits of hundred-baggers', 'Long-term holding and compounding']
  },

  'clayton-christensen': {
    name_en: 'Clayton Christensen',
    name_zh: '克莱顿·克里斯坦森',
    life: '1952–2020',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '管理学者、哈佛商学院教授',
    role_en: 'Management scholar and Harvard Business School professor',
    bio_zh: '美国管理学者，哈佛商学院教授，「颠覆性创新」理论的提出者。《创新者的窘境》解释了优秀企业为何会在技术变革中失败。',
    bio_en: 'American management scholar and Harvard Business School professor who developed the theory of disruptive innovation. The Innovator’s Dilemma explains why well-run companies fail in the face of technological change.',
    ideas_zh: ['颠覆性创新理论', '「创新者的窘境」', '待办任务（Jobs to Be Done）'],
    ideas_en: ['Disruptive innovation', 'The innovator’s dilemma', 'Jobs to Be Done']
  },

  'confucius': {
    name_en: 'Confucius',
    name_zh: '孔子',
    life: '前551–前479',
    nationality_zh: '中国',
    nationality_en: 'Chinese',
    role_zh: '思想家、教育家',
    role_en: 'Thinker and educator',
    bio_zh: '中国春秋时期思想家与教育家，儒家学派创始人。其言行由弟子辑录为《论语》，以「仁」与「礼」为核心，塑造了东亚两千余年的伦理与政治传统。',
    bio_en: 'Chinese thinker and educator of the Spring and Autumn period and founder of Confucianism. His sayings were compiled by disciples into the Analects, centred on ren (benevolence) and li (ritual), shaping East Asian ethics and politics for over two millennia.',
    ideas_zh: ['「仁」与「礼」', '「己所不欲，勿施于人」', '教育与君子人格'],
    ideas_en: ['Ren (benevolence) and li (ritual)', 'The golden rule of not imposing on others', 'Education and the ideal of the junzi']
  },

  'dan-ariely': {
    name_en: 'Dan Ariely',
    name_zh: '丹·艾瑞里',
    life: '1967–',
    nationality_zh: '以色列裔美国',
    nationality_en: 'Israeli-American',
    role_zh: '行为经济学家、大学教授',
    role_en: 'Behavioural economist and university professor',
    bio_zh: '以色列裔美国行为经济学家，杜克大学心理学与行为经济学教授。《怪诞行为学》以实验揭示人类决策中可预测的非理性。',
    bio_en: 'Israeli-American behavioural economist and professor of psychology and behavioural economics at Duke University. Predictably Irrational uses experiments to expose the predictable irrationality of human decision-making.',
    ideas_zh: ['可预测的非理性', '行为经济学的实验研究', '「免费」的魔力与相对性'],
    ideas_en: ['Predictable irrationality', 'Experimental research in behavioural economics', 'The power of free and relativity']
  },

  'dan-gardner': {
    name_en: 'Dan Gardner',
    name_zh: '丹·加德纳',
    life: '',
    nationality_zh: '加拿大',
    nationality_en: 'Canadian',
    role_zh: '记者、作家',
    role_en: 'Journalist and author',
    bio_zh: '加拿大记者与作家，曾任职于《渥太华公民报》。他与 Philip Tetlock 合著《超预测》，研究预测准确性的条件。',
    bio_en: 'Canadian journalist and author, formerly of the Ottawa Citizen. With Philip Tetlock he co-authored Superforecasting, a study of the conditions under which predictions are accurate.',
    ideas_zh: ['预测与判断研究', '与 Tetlock 合作《超预测》'],
    ideas_en: ['Research on forecasting and judgement', 'Co-author of Superforecasting with Tetlock']
  },

  'daniel-huttenlocher': {
    name_en: 'Daniel Huttenlocher',
    name_zh: '丹尼尔·胡滕洛赫尔',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '计算机科学家',
    role_en: 'Computer scientist',
    bio_zh: '美国计算机科学家，麻省理工学院施瓦茨曼计算学院首任院长，研究计算机视觉与机器学习。他与基辛格、施密特合著《人工智能时代与人类未来》。',
    bio_en: 'American computer scientist and the first dean of the MIT Schwarzman College of Computing, working on computer vision and machine learning. With Henry Kissinger and Eric Schmidt he co-authored The Age of AI.',
    ideas_zh: ['计算机视觉与机器学习', 'AI 的社会影响'],
    ideas_en: ['Computer vision and machine learning', 'The social impact of AI']
  },

  'daniel-kahneman': {
    name_en: 'Daniel Kahneman',
    name_zh: '丹尼尔·卡尼曼',
    life: '1934–2024',
    nationality_zh: '以色列裔美国',
    nationality_en: 'Israeli-American',
    role_zh: '心理学家、诺贝尔经济学奖得主',
    role_en: 'Psychologist and Nobel laureate in economics',
    bio_zh: '以色列裔美国心理学家，与 Amos Tversky 共同开创行为经济学，2002 年获诺贝尔经济学奖。《思考，快与慢》提出系统 1 与系统 2 的双系统框架。',
    bio_en: 'Israeli-American psychologist who, with Amos Tversky, founded behavioural economics and won the 2002 Nobel Prize in Economics. Thinking, Fast and Slow sets out the two-system framework of fast and slow thinking.',
    ideas_zh: ['双系统理论', '前景理论', '启发式与偏差', '2002 年诺贝尔经济学奖'],
    ideas_en: ['The two-system theory of thinking', 'Prospect theory', 'Heuristics and biases', '2002 Nobel Prize in Economics']
  },

  'daron-acemoglu': {
    name_en: 'Daron Acemoglu',
    name_zh: '达龙·阿西莫格鲁',
    life: '1967–',
    nationality_zh: '土耳其裔美国',
    nationality_en: 'Turkish-American',
    role_zh: '经济学家、MIT 教授',
    role_en: 'Economist and MIT professor',
    bio_zh: '土耳其裔美国经济学家，麻省理工学院经济学教授。他与 James Robinson 合著《国家为什么会失败》，以制度解释国家间的贫富分化，2024 年获诺贝尔经济学奖。',
    bio_en: 'Turkish-American economist and MIT professor. With James Robinson he wrote Why Nations Fail, explaining the wealth and poverty of nations through institutions, and he won the 2024 Nobel Prize in Economics.',
    ideas_zh: ['制度与发展经济学', '包容性制度与攫取性制度', '2024 年诺贝尔经济学奖'],
    ideas_en: ['Institutions and development economics', 'Inclusive versus extractive institutions', '2024 Nobel Prize in Economics']
  },

  'david-dodd': {
    name_en: 'David Dodd',
    name_zh: '戴维·多德',
    life: '1895–1988',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资学者、大学教授',
    role_en: 'Investment scholar and university professor',
    bio_zh: '美国投资学者，哥伦比亚商学院教授，本杰明·格雷厄姆的同事。两人合著《证券分析》，共同奠定了价值投资的理论基础。',
    bio_en: 'American investment scholar and Columbia Business School professor, a colleague of Benjamin Graham. Together they wrote Security Analysis, laying the theoretical foundations of value investing.',
    ideas_zh: ['《证券分析》合著者', '价值投资的教育传承'],
    ideas_en: ['Co-author of Security Analysis', 'Teaching the tradition of value investing']
  },

  'don-norman': {
    name_en: 'Don Norman',
    name_zh: '唐·诺曼',
    life: '1935–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '认知科学家、设计理论家',
    role_en: 'Cognitive scientist and design theorist',
    bio_zh: '美国认知科学家，以设计与人机交互研究闻名，曾任教于加州大学圣地亚哥分校，并在苹果等公司任职。《设计心理学》提出「可供性」与以人为本的设计原则。',
    bio_en: 'American cognitive scientist known for his work on design and human-computer interaction, a former professor at UC San Diego and an executive at Apple. The Design of Everyday Things introduced affordances and human-centred design.',
    ideas_zh: ['以人为本的设计', '「可供性」与示能', '日常物品的设计心理学'],
    ideas_en: ['Human-centred design', 'Affordances and signifiers', 'The design psychology of everyday things']
  },

  'donella-meadows': {
    name_en: 'Donella Meadows',
    name_zh: '德内拉·梅多斯',
    life: '1941–2001',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '系统科学家、作家',
    role_en: 'Systems scientist and writer',
    bio_zh: '美国系统科学家，达特茅斯学院教授，罗马俱乐部报告《增长的极限》的第一作者。《系统之美》系统介绍了系统思考与反馈回路。',
    bio_en: 'American systems scientist and Dartmouth professor, and lead author of The Limits to Growth for the Club of Rome. Thinking in Systems is a systematic introduction to systems thinking and feedback loops.',
    ideas_zh: ['系统思考与反馈回路', '《增长的极限》第一作者', '杠杆点理论'],
    ideas_en: ['Systems thinking and feedback loops', 'Lead author of The Limits to Growth', 'Leverage points']
  },

  'douglas-hofstadter': {
    name_en: 'Douglas Hofstadter',
    name_zh: '侯世达',
    life: '1945–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '认知科学家、作家',
    role_en: 'Cognitive scientist and author',
    bio_zh: '美国认知科学家，印第安纳大学教授，研究意识、类比与自我指涉。《哥德尔、艾舍尔、巴赫》以跨学科方式探讨自指与心智，获 1980 年普利策奖。',
    bio_en: 'American cognitive scientist and Indiana University professor working on consciousness, analogy and self-reference. Gödel, Escher, Bach explores self-reference and mind across disciplines and won the 1980 Pulitzer Prize.',
    ideas_zh: ['自指与奇异环', '类比作为认知核心', '1980 年普利策奖'],
    ideas_en: ['Self-reference and strange loops', 'Analogy as the core of cognition', '1980 Pulitzer Prize']
  },

  'edward-gibbon': {
    name_en: 'Edward Gibbon',
    name_zh: '爱德华·吉本',
    life: '1737–1794',
    nationality_zh: '英国',
    nationality_en: 'English',
    role_zh: '历史学家',
    role_en: 'Historian',
    bio_zh: '英国历史学家与国会议员，《罗马帝国衰亡史》的作者。该书以宏大的叙事与优雅的文体，记述罗马帝国从盛到衰的千余年历程。',
    bio_en: 'English historian and Member of Parliament, author of The History of the Decline and Fall of the Roman Empire, which recounts more than a thousand years of Roman decline in sweeping narrative and elegant prose.',
    ideas_zh: ['《罗马帝国衰亡史》', '启蒙史学与宏大叙事'],
    ideas_en: ['The Decline and Fall of the Roman Empire', 'Enlightenment historiography and grand narrative']
  },

  'edwin-lefevre': {
    name_en: 'Edwin Lefèvre',
    name_zh: '埃德温·勒菲弗',
    life: '1870–1943',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '记者、作家',
    role_en: 'Journalist and author',
    bio_zh: '美国财经记者与作家，曾任驻外记者。《股票作手回忆录》以小说笔法刻画投机者 Jesse Livermore 的原型，成为交易心理的经典读物。',
    bio_en: 'American financial journalist and author who served as a foreign correspondent. Reminiscences of a Stock Operator is a novelised portrait modelled on the speculator Jesse Livermore and became a classic on trading psychology.',
    ideas_zh: ['交易心理的经典刻画', '投机与人性的观察'],
    ideas_en: ['A classic portrait of trading psychology', 'Observations on speculation and human nature']
  },

  'eric-schmidt': {
    name_en: 'Eric Schmidt',
    name_zh: '埃里克·施密特',
    life: '1955–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '企业家、谷歌前 CEO',
    role_en: 'Executive and former CEO of Google',
    bio_zh: '美国科技高管，2001 至 2011 年任谷歌 CEO，后任执行董事长，推动谷歌的规模化扩张。他与基辛格、Huttenlocher 合著《人工智能时代与人类未来》。',
    bio_en: 'American technology executive who was CEO of Google from 2001 to 2011 and later executive chairman, driving the company’s expansion at scale. With Kissinger and Huttenlocher he co-authored The Age of AI.',
    ideas_zh: ['谷歌的规模化经营', 'AI 与地缘政治'],
    ideas_en: ['Scaling Google', 'AI and geopolitics']
  },

  'erik-brynjolfsson': {
    name_en: 'Erik Brynjolfsson',
    name_zh: '埃里克·布林约尔松',
    life: '1962–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济学家、斯坦福大学教授',
    role_en: 'Economist and Stanford professor',
    bio_zh: '美国经济学家，斯坦福大学数字经济实验室主任，曾任教于麻省理工学院。他与 Andrew McAfee 合著《第二次机器革命》，研究数字技术对生产率与就业的影响。',
    bio_en: 'American economist, director of the Stanford Digital Economy Lab and a former MIT professor. With Andrew McAfee he wrote The Second Machine Age, on how digital technology affects productivity and employment.',
    ideas_zh: ['数字技术与生产率', '第二次机器革命', '与 McAfee 的长期合作'],
    ideas_en: ['Digital technology and productivity', 'The second machine age', 'Long collaboration with McAfee']
  },

  'esther-duflo': {
    name_en: 'Esther Duflo',
    name_zh: '埃斯特·迪弗洛',
    life: '1972–',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '经济学家、MIT 教授',
    role_en: 'Economist and MIT professor',
    bio_zh: '法国经济学家，麻省理工学院教授，贫困行动实验室（J-PAL）联合创始人，2019 年获诺贝尔经济学奖。她与 Abhijit Banerjee 合著《贫穷的本质》。',
    bio_en: 'French economist and MIT professor, a co-founder of J-PAL and a winner of the 2019 Nobel Prize in Economics. With Abhijit Banerjee she wrote Poor Economics.',
    ideas_zh: ['以随机对照试验研究减贫', '2019 年诺贝尔经济学奖', '行为发展经济学'],
    ideas_en: ['Randomized trials in the fight against poverty', '2019 Nobel Prize in Economics', 'Behavioural development economics']
  },

  'francis-fukuyama': {
    name_en: 'Francis Fukuyama',
    name_zh: '弗朗西斯·福山',
    life: '1955–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '政治学家、大学教授',
    role_en: 'Political scientist and university professor',
    bio_zh: '美国政治学家，斯坦福大学弗里曼·斯波格利研究所高级研究员。《历史的终结与最后的人》提出冷战结束后自由民主制可能成为人类政治演化的终点。',
    bio_en: 'American political scientist and senior fellow at the Freeman Spogli Institute at Stanford. The End of History and the Last Man argued that liberal democracy might be the endpoint of humanity’s political evolution after the Cold War.',
    ideas_zh: ['「历史的终结」命题', '政治秩序与政治衰败', '信任与社会资本'],
    ideas_en: ['The end of history thesis', 'Political order and decay', 'Trust and social capital']
  },

  'friedrich-hayek': {
    name_en: 'Friedrich Hayek',
    name_zh: '弗里德里希·哈耶克',
    life: '1899–1992',
    nationality_zh: '奥地利',
    nationality_en: 'Austrian',
    role_zh: '经济学家、政治哲学家',
    role_en: 'Economist and political philosopher',
    bio_zh: '奥地利学派经济学家与政治哲学家，1974 年获诺贝尔经济学奖。《通往奴役之路》警告中央计划经济将侵蚀个人自由，是 20 世纪自由主义的重要文本。',
    bio_en: 'Austrian-school economist and political philosopher who won the 1974 Nobel Prize in Economics. The Road to Serfdom warned that central planning would erode individual freedom and became a landmark of twentieth-century liberalism.',
    ideas_zh: ['自发秩序与知识的分散', '计划经济与自由的冲突', '1974 年诺贝尔经济学奖'],
    ideas_en: ['Spontaneous order and dispersed knowledge', 'Planning versus freedom', '1974 Nobel Prize in Economics']
  },

  'friedrich-nietzsche': {
    name_en: 'Friedrich Nietzsche',
    name_zh: '弗里德里希·尼采',
    life: '1844–1900',
    nationality_zh: '德国',
    nationality_en: 'German',
    role_zh: '哲学家',
    role_en: 'Philosopher',
    bio_zh: '德国哲学家与语文学家，对现代哲学、文学与心理学影响深远。《查拉图斯特拉如是说》以诗体宣告「上帝已死」，提出超人、永恒轮回与权力意志。',
    bio_en: 'German philosopher and philologist whose influence reaches deep into modern philosophy, literature and psychology. Thus Spoke Zarathustra announces in poetic form that God is dead, and develops the overman, eternal recurrence and the will to power.',
    ideas_zh: ['「上帝已死」与价值重估', '超人、权力意志与永恒轮回'],
    ideas_en: ['The death of God and the revaluation of values', 'The overman, the will to power and eternal recurrence']
  },

  'geoffrey-moore': {
    name_en: 'Geoffrey Moore',
    name_zh: '杰弗里·摩尔',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '管理顾问、作家',
    role_en: 'Management consultant and author',
    bio_zh: '美国管理顾问与作家，专注高科技产品营销。《跨越鸿沟》提出技术采用生命周期与「鸿沟」概念，成为科技创业营销的经典框架。',
    bio_en: 'American management consultant and author focused on marketing high-technology products. Crossing the Chasm introduced the technology adoption life cycle and the chasm, becoming a classic framework for technology marketing.',
    ideas_zh: ['技术采用生命周期', '「鸿沟」与早期市场', '高科技营销框架'],
    ideas_en: ['The technology adoption life cycle', 'The chasm and the early market', 'A framework for high-tech marketing']
  },

  'gerald-loeb': {
    name_en: 'Gerald Loeb',
    name_zh: '杰拉尔德·勒布',
    life: '1899–1974',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资家',
    role_en: 'Investor',
    bio_zh: '美国投资家，E. F. Hutton 公司联合创始人。《投资生存之战》强调保护本金与顺势而为，是早期技术派投资的代表作。',
    bio_en: 'American investor and co-founder of E. F. Hutton. The Battle for Investment Survival stresses protecting capital and moving with the trend, and stands as an early statement of a more tactical approach to investing.',
    ideas_zh: ['保护本金优先', '顺势与止损', '投资生存之道'],
    ideas_en: ['Preserving capital first', 'Following trends and cutting losses', 'The battle for investment survival']
  },

  'gustave-le-bon': {
    name_en: 'Gustave Le Bon',
    name_zh: '古斯塔夫·勒庞',
    life: '1841–1931',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '社会心理学家',
    role_en: 'Social psychologist',
    bio_zh: '法国社会心理学家与社会学家。《乌合之众》提出群体心理的匿名性、感染性与暗示性，是群体心理学的开创之作。',
    bio_en: 'French social psychologist and sociologist. The Crowd describes the anonymity, contagion and suggestibility of group psychology and is a founding work in the study of crowds.',
    ideas_zh: ['群体心理与感染', '「乌合之众」', '群体中的去个性化'],
    ideas_en: ['Crowd psychology and contagion', 'The popular mind', 'Deindividuation in groups']
  },

  'henry-kissinger': {
    name_en: 'Henry Kissinger',
    name_zh: '亨利·基辛格',
    life: '1923–2023',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '外交家、前美国国务卿',
    role_en: 'Diplomat and former US Secretary of State',
    bio_zh: '美国外交家与政治学者，曾任国务卿与国家安全顾问，是 20 世纪现实主义外交的代表人物。晚年撰写《世界秩序》《人工智能时代与人类未来》等著作。',
    bio_en: 'American diplomat and scholar who served as Secretary of State and National Security Advisor, and a leading figure of twentieth-century realist diplomacy. In later years he wrote World Order and, with co-authors, The Age of AI.',
    ideas_zh: ['均势外交与现实主义', '《世界秩序》', 'AI 与人类未来'],
    ideas_en: ['Balance-of-power diplomacy and realism', 'World Order', 'AI and the human future']
  },

  'howard-marks': {
    name_en: 'Howard Marks',
    name_zh: '霍华德·马克斯',
    life: '1946–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资家、橡树资本创始人',
    role_en: 'Investor and co-founder of Oaktree Capital',
    bio_zh: '美国投资家，橡树资本联合创始人，以不良债权投资著称。《投资最重要的事》汇集其投资备忘录，强调风险控制与周期意识。',
    bio_en: 'American investor and co-founder of Oaktree Capital, known for distressed-debt investing. The Most Important Thing gathers his investor memos, stressing risk control and awareness of cycles.',
    ideas_zh: ['风险控制优先', '市场周期意识', '「第二层次思维」'],
    ideas_en: ['Risk control above all', 'Awareness of market cycles', 'Second-level thinking']
  },

  'ian-goodfellow': {
    name_en: 'Ian Goodfellow',
    name_zh: '伊恩·古德费洛',
    life: '1985–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '计算机科学家',
    role_en: 'Computer scientist',
    bio_zh: '美国计算机科学家，生成对抗网络（GAN）的提出者，曾在谷歌、苹果等公司任职。他是《深度学习》的第一作者，该书成为深度学习领域的标准教材。',
    bio_en: 'American computer scientist who invented generative adversarial networks (GANs) and has worked at Google and Apple. He is the lead author of Deep Learning, which became the standard textbook of the field.',
    ideas_zh: ['生成对抗网络（GAN）', '《深度学习》第一作者'],
    ideas_en: ['Generative adversarial networks (GANs)', 'Lead author of Deep Learning']
  },

  'j-e-gordon': {
    name_en: 'J. E. Gordon',
    name_zh: 'J. E. 戈登',
    life: '1913–1998',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '材料科学家',
    role_en: 'Materials scientist',
    bio_zh: '英国材料科学家，曾任教于雷丁大学，专长于材料力学与结构设计。《结构：为什么东西不会倒塌》以通俗笔法讲解结构工程的基本原理。',
    bio_en: 'British materials scientist who taught at the University of Reading, with a specialism in the mechanics of materials and structural design. Structures: Or Why Things Don’t Fall Down explains structural engineering in plain language.',
    ideas_zh: ['材料力学与结构', '通俗工程写作'],
    ideas_en: ['Mechanics of materials and structures', 'Accessible writing about engineering']
  },

  'james-gleick': {
    name_en: 'James Gleick',
    name_zh: '詹姆斯·格雷克',
    life: '1954–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家、科学史家',
    role_en: 'Author and science historian',
    bio_zh: '美国作家与科学史家，以《混沌》一书成名。《信息简史》梳理了信息概念从语言、电报到信息论与比特的演化历程。',
    bio_en: 'American author and historian of science who came to prominence with Chaos. The Information traces the evolution of the idea of information from language and the telegraph to information theory and the bit.',
    ideas_zh: ['信息史与信息论', '混沌理论的通俗化', '科学史写作'],
    ideas_en: ['The history of information and information theory', 'Popularising chaos theory', 'Writing the history of science']
  },

  'james-robinson': {
    name_en: 'James A. Robinson',
    name_zh: '詹姆斯·罗宾逊',
    life: '1960–',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '政治经济学家',
    role_en: 'Political economist',
    bio_zh: '英国政治经济学家，曾任教于哈佛大学与芝加哥大学，现为圣母大学教授。他与 Daron Acemoglu 合著《国家为什么会失败》，2024 年获诺贝尔经济学奖。',
    bio_en: 'British political economist who has taught at Harvard and Chicago and is now a professor at the University of Notre Dame. With Daron Acemoglu he wrote Why Nations Fail and shared the 2024 Nobel Prize in Economics.',
    ideas_zh: ['制度与政治经济学', '包容性制度与攫取性制度', '2024 年诺贝尔经济学奖'],
    ideas_en: ['Institutions and political economy', 'Inclusive versus extractive institutions', '2024 Nobel Prize in Economics']
  },

  'jared-diamond': {
    name_en: 'Jared Diamond',
    name_zh: '贾雷德·戴蒙德',
    life: '1937–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '地理学家、加州大学教授',
    role_en: 'Geographer and UCLA professor',
    bio_zh: '美国地理学家与生理学家，加州大学洛杉矶分校教授。《枪炮、病菌与钢铁》以地理与生态解释各大洲文明发展的差异，获 1998 年普利策奖。',
    bio_en: 'American geographer and physiologist and a professor at UCLA. Guns, Germs, and Steel explains the divergent development of civilizations through geography and ecology, and won the 1998 Pulitzer Prize.',
    ideas_zh: ['地理与生态对文明的影响', '大陆轴线与可驯化物种', '1998 年普利策奖'],
    ideas_en: ['Geography and ecology in the fate of societies', 'Continental axes and domesticable species', '1998 Pulitzer Prize']
  },

  'jiddu-krishnamurti': {
    name_en: 'Jiddu Krishnamurti',
    name_zh: '克里希那穆提',
    life: '1895–1986',
    nationality_zh: '印度',
    nationality_en: 'Indian',
    role_zh: '哲学家、灵性导师',
    role_en: 'Philosopher and spiritual teacher',
    bio_zh: '印度出生的哲学家与演说家，主张不受任何权威与组织束缚地探问自由、恐惧与教育。其著作多为演讲与对话的辑录，影响遍及东西方。',
    bio_en: 'Indian-born philosopher and speaker who insisted on inquiring into freedom, fear and education without the mediation of any authority or organisation. His books are largely transcriptions of talks and dialogues, and his influence spans East and West.',
    ideas_zh: ['「真理是无路之国」', '无选择的觉察', '教育与自由'],
    ideas_en: ['Truth is a pathless land', 'Choiceless awareness', 'Education and freedom']
  },

  'jim-collins': {
    name_en: 'Jim Collins',
    name_zh: '吉姆·柯林斯',
    life: '1958–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '管理学者、作家',
    role_en: 'Management scholar and author',
    bio_zh: '美国管理研究者，以对企业长期表现的大样本研究著称。《从优秀到卓越》提出第五级领导、刺猬理念与飞轮效应等概念。',
    bio_en: 'American management researcher known for large-sample studies of long-run corporate performance. Good to Great introduced concepts such as Level 5 leadership, the hedgehog concept and the flywheel.',
    ideas_zh: ['第五级领导', '「刺猬理念」', '「飞轮效应」'],
    ideas_en: ['Level 5 leadership', 'The hedgehog concept', 'The flywheel effect']
  },

  'joel-greenblatt': {
    name_en: 'Joel Greenblatt',
    name_zh: '乔尔·格林布拉特',
    life: '1957–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资家、商学院教授',
    role_en: 'Investor and business school professor',
    bio_zh: '美国投资家，Gotham Capital 创始人，曾在哥伦比亚商学院讲授价值投资。《股市稳赚》以「神奇公式」介绍高资本回报与低估值结合的选股思路。',
    bio_en: 'American investor and founder of Gotham Capital, who has taught value investing at Columbia Business School. The Little Book That Beats the Market presents a magic formula that combines high returns on capital with low valuations.',
    ideas_zh: ['「神奇公式」', '价值投资教育'],
    ideas_en: ['The magic formula', 'Teaching value investing']
  },

  'john-maynard-keynes': {
    name_en: 'John Maynard Keynes',
    name_zh: '约翰·梅纳德·凯恩斯',
    life: '1883–1946',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '经济学家',
    role_en: 'Economist',
    bio_zh: '英国经济学家，宏观经济学之父，曾代表英国参加巴黎和会与布雷顿森林会议。《就业、利息和货币通论》提出有效需求理论，奠定了政府干预经济的理论基础。',
    bio_en: 'British economist and the father of macroeconomics, who represented Britain at the Paris Peace Conference and Bretton Woods. The General Theory introduced the theory of effective demand and the case for government intervention in the economy.',
    ideas_zh: ['有效需求理论', '宏观经济学的奠基', '政府干预与财政政策'],
    ideas_en: ['The theory of effective demand', 'Founding macroeconomics', 'Government intervention and fiscal policy']
  },

  'john-stuart-mill': {
    name_en: 'John Stuart Mill',
    name_zh: '约翰·斯图尔特·密尔',
    life: '1806–1873',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '哲学家、政治经济学家',
    role_en: 'Philosopher and political economist',
    bio_zh: '英国哲学家与政治经济学家，古典自由主义与功利主义的重要代表。《论自由》提出「伤害原则」，界定个人自由与社会干预的边界。',
    bio_en: 'British philosopher and political economist, a leading representative of classical liberalism and utilitarianism. On Liberty sets out the harm principle, defining the boundary between individual freedom and social interference.',
    ideas_zh: ['「伤害原则」', '自由与个性', '功利主义伦理'],
    ideas_en: ['The harm principle', 'Liberty and individuality', 'Utilitarian ethics']
  },

  'kai-fu-lee': {
    name_en: 'Kai-Fu Lee',
    name_zh: '李开复',
    life: '1961–',
    nationality_zh: '中国台湾裔美国',
    nationality_en: 'Taiwanese-American',
    role_zh: '计算机科学家、投资人',
    role_en: 'Computer scientist and investor',
    bio_zh: '华裔计算机科学家，曾任微软、谷歌高管，后创办创新工场。《AI·未来》比较中美人工智能生态，《AI 2041》则与陈楸帆合作展望 AI 的未来图景。',
    bio_en: 'Chinese-American computer scientist who held senior roles at Microsoft and Google before founding Sinovation Ventures. AI Superpowers compares the Chinese and American AI ecosystems, while AI 2041, written with Chen Qiufan, imagines the future of AI.',
    ideas_zh: ['中美 AI 竞争格局', 'AI 与就业、社会', '创新工场'],
    ideas_en: ['The China-US AI rivalry', 'AI, jobs and society', 'Sinovation Ventures']
  },

  'karl-marx': {
    name_en: 'Karl Marx',
    name_zh: '卡尔·马克思',
    life: '1818–1883',
    nationality_zh: '德国',
    nationality_en: 'German',
    role_zh: '哲学家、政治经济学家',
    role_en: 'Philosopher and political economist',
    bio_zh: '德国哲学家、经济学家与革命者，与恩格斯共同奠定马克思主义。《资本论》分析资本主义的生产关系、剩余价值与资本积累规律。',
    bio_en: 'German philosopher, economist and revolutionary who, with Friedrich Engels, founded Marxism. Capital analyses the relations of production, surplus value and the accumulation of capital under capitalism.',
    ideas_zh: ['剩余价值理论', '历史唯物主义', '阶级与资本积累'],
    ideas_en: ['The theory of surplus value', 'Historical materialism', 'Class and capital accumulation']
  },

  'karl-polanyi': {
    name_en: 'Karl Polanyi',
    name_zh: '卡尔·波兰尼',
    life: '1886–1964',
    nationality_zh: '匈牙利',
    nationality_en: 'Hungarian',
    role_zh: '经济史学家、经济人类学家',
    role_en: 'Economic historian and economic anthropologist',
    bio_zh: '匈牙利经济史学家与经济人类学家。《大转型》论证市场社会是历史的产物，并提出「嵌入性」与「双向运动」等概念。',
    bio_en: 'Hungarian economic historian and economic anthropologist. The Great Transformation argues that the market society is a historical product, and introduces ideas such as embeddedness and the double movement.',
    ideas_zh: ['经济的「嵌入性」', '「双向运动」', '市场社会的历史建构'],
    ideas_en: ['The embeddedness of the economy', 'The double movement', 'The historical construction of market society']
  },

  'kenneth-rogoff': {
    name_en: 'Kenneth S. Rogoff',
    name_zh: '肯尼斯·罗格夫',
    life: '1953–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济学家、哈佛大学教授',
    role_en: 'Economist and Harvard professor',
    bio_zh: '美国经济学家，哈佛大学经济学与公共政策教授，曾任国际货币基金组织首席经济学家。他与 Carmen Reinhart 合著《这次不一样》。',
    bio_en: 'American economist and Harvard professor of economics and public policy, and a former chief economist of the IMF. With Carmen Reinhart he wrote This Time Is Different.',
    ideas_zh: ['主权债务与金融危机', '与 Reinhart 的合作研究'],
    ideas_en: ['Sovereign debt and financial crises', 'Joint research with Reinhart']
  },

  'laozi': {
    name_en: 'Laozi',
    name_zh: '老子',
    life: '约公元前 6 世纪',
    nationality_zh: '中国',
    nationality_en: 'Chinese',
    role_zh: '思想家',
    role_en: 'Thinker',
    bio_zh: '中国古代思想家，道家学派创始人，传统上被视为《道德经》的作者。其「道法自然」「无为而治」的思想深刻影响了中国哲学与政治文化。',
    bio_en: 'Ancient Chinese thinker and founder of Daoism, traditionally regarded as the author of the Tao Te Ching. His ideas of the Dao as the natural order and of governing through non-action deeply shaped Chinese philosophy and political culture.',
    ideas_zh: ['「道」与自然', '无为而治', '柔弱胜刚强'],
    ideas_en: ['The Dao and the natural order', 'Governing through non-action', 'The soft overcoming the hard']
  },

  'marcus-aurelius': {
    name_en: 'Marcus Aurelius',
    name_zh: '马可·奥勒留',
    life: '121–180',
    nationality_zh: '古罗马',
    nationality_en: 'Roman',
    role_zh: '罗马皇帝、斯多葛哲学家',
    role_en: 'Roman emperor and Stoic philosopher',
    bio_zh: '罗马帝国皇帝（161 至 180 年在位），晚期斯多葛学派的代表人物。《沉思录》是写给自己的哲学札记，强调理性、克制与对命运的接受。',
    bio_en: 'Roman emperor from 161 to 180 and a leading figure of later Stoicism. Meditations is a private notebook of philosophical reflection, emphasising reason, self-discipline and acceptance of fate.',
    ideas_zh: ['斯多葛哲学', '控制二分法', '《沉思录》'],
    ideas_en: ['Stoic philosophy', 'The dichotomy of control', 'Meditations']
  },

  'marshall-mcluhan': {
    name_en: 'Marshall McLuhan',
    name_zh: '马歇尔·麦克卢汉',
    life: '1911–1980',
    nationality_zh: '加拿大',
    nationality_en: 'Canadian',
    role_zh: '媒介理论家',
    role_en: 'Media theorist',
    bio_zh: '加拿大媒介理论家，多伦多大学教授，媒介环境学的奠基人。《理解媒介》提出「媒介即讯息」与「地球村」，深刻影响了媒介研究。',
    bio_en: 'Canadian media theorist and University of Toronto professor, a founder of media ecology. Understanding Media introduced the medium is the message and the global village, shaping the field of media studies.',
    ideas_zh: ['「媒介即讯息」', '「地球村」', '冷热媒介'],
    ideas_en: ['The medium is the message', 'The global village', 'Hot and cool media']
  },

  'max-tegmark': {
    name_en: 'Max Tegmark',
    name_zh: '迈克斯·泰格马克',
    life: '1967–',
    nationality_zh: '瑞典裔美国',
    nationality_en: 'Swedish-American',
    role_zh: '物理学家、MIT 教授',
    role_en: 'Physicist and MIT professor',
    bio_zh: '瑞典裔美国物理学家，麻省理工学院教授，生命未来研究所（FLI）联合创始人。《生命 3.0》讨论人工智能时代人类面临的选择。',
    bio_en: 'Swedish-American physicist and MIT professor, and a co-founder of the Future of Life Institute. Life 3.0 examines the choices facing humanity in the age of artificial intelligence.',
    ideas_zh: ['生命 3.0 框架', 'AI 安全与未来', '生命未来研究所'],
    ideas_en: ['The Life 3.0 framework', 'AI safety and the future', 'The Future of Life Institute']
  },

  'max-weber': {
    name_en: 'Max Weber',
    name_zh: '马克斯·韦伯',
    life: '1864–1920',
    nationality_zh: '德国',
    nationality_en: 'German',
    role_zh: '社会学家、政治经济学家',
    role_en: 'Sociologist and political economist',
    bio_zh: '德国社会学家与政治经济学家，现代社会学奠基人之一。《新教伦理与资本主义精神》论证新教禁欲伦理与资本主义兴起之间的关系。',
    bio_en: 'German sociologist and political economist and one of the founders of modern sociology. The Protestant Ethic and the Spirit of Capitalism argues for a link between ascetic Protestant ethics and the rise of capitalism.',
    ideas_zh: ['理性化与「祛魅」', '新教伦理与资本主义', '理想类型方法'],
    ideas_en: ['Rationalisation and disenchantment', 'The Protestant ethic and capitalism', 'The ideal type']
  },

  'michael-lewis': {
    name_en: 'Michael Lewis',
    name_zh: '迈克尔·刘易斯',
    life: '1960–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家、财经记者',
    role_en: 'Author and financial journalist',
    bio_zh: '美国作家与财经记者，曾任所罗门兄弟公司债券交易员。《大空头》讲述次贷危机中做空者的故事，是金融非虚构写作的代表作。',
    bio_en: 'American author and financial journalist who once worked as a bond salesman at Salomon Brothers. The Big Short tells the story of the investors who bet against subprime mortgages and is a landmark of financial nonfiction.',
    ideas_zh: ['金融非虚构写作', '《大空头》与次贷危机', '市场中的非理性'],
    ideas_en: ['Financial nonfiction writing', 'The Big Short and the subprime crisis', 'Irrationality in markets']
  },

  'michael-porter': {
    name_en: 'Michael Porter',
    name_zh: '迈克尔·波特',
    life: '1947–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '管理学者、哈佛商学院教授',
    role_en: 'Management scholar and Harvard Business School professor',
    bio_zh: '美国管理学者，哈佛商学院教授，竞争战略研究的奠基人。《竞争战略》提出五力模型与三种通用战略。',
    bio_en: 'American management scholar and Harvard Business School professor who founded the field of competitive strategy. Competitive Strategy introduced the five forces framework and three generic strategies.',
    ideas_zh: ['五力模型', '三种通用战略', '价值链分析'],
    ideas_en: ['The five forces', 'Three generic strategies', 'Value chain analysis']
  },

  'mihaly-csikszentmihalyi': {
    name_en: 'Mihaly Csikszentmihalyi',
    name_zh: '米哈里·契克森米哈赖',
    life: '1934–2021',
    nationality_zh: '匈牙利裔美国',
    nationality_en: 'Hungarian-American',
    role_zh: '心理学家',
    role_en: 'Psychologist',
    bio_zh: '匈牙利裔美国心理学家，积极心理学奠基人之一，曾任教于芝加哥大学。《心流》提出最优体验的心理学理论。',
    bio_en: 'Hungarian-American psychologist and a founder of positive psychology, formerly a professor at the University of Chicago. Flow develops a psychology of optimal experience.',
    ideas_zh: ['心流理论', '最优体验', '积极心理学奠基人之一'],
    ideas_en: ['Flow theory', 'Optimal experience', 'A founder of positive psychology']
  },

  'milton-friedman': {
    name_en: 'Milton Friedman',
    name_zh: '米尔顿·弗里德曼',
    life: '1912–2006',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济学家、诺贝尔经济学奖得主',
    role_en: 'Economist and Nobel laureate',
    bio_zh: '美国经济学家，芝加哥学派领袖，1976 年获诺贝尔经济学奖。《自由选择》与妻子 Rose Friedman 合著，倡导自由市场与有限政府。',
    bio_en: 'American economist and leader of the Chicago school who won the 1976 Nobel Prize in Economics. Free to Choose, written with his wife Rose Friedman, makes the case for free markets and limited government.',
    ideas_zh: ['货币主义', '自由市场与有限政府', '1976 年诺贝尔经济学奖'],
    ideas_en: ['Monetarism', 'Free markets and limited government', '1976 Nobel Prize in Economics']
  },

  'morgan-housel': {
    name_en: 'Morgan Housel',
    name_zh: '摩根·豪泽尔',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '财经作家、投资人',
    role_en: 'Financial writer and investor',
    bio_zh: '美国财经作家，Collaborative Fund 合伙人，长期撰写关于投资与行为的文章。《金钱心理学》以短篇论述财富、贪婪与幸福。',
    bio_en: 'American financial writer and a partner at the Collaborative Fund who writes on investing and behaviour. The Psychology of Money uses short essays to examine wealth, greed and happiness.',
    ideas_zh: ['金钱与行为的心理学', '复利与长期主义', '财务成功的软技能'],
    ideas_en: ['The psychology of money and behaviour', 'Compounding and long-term thinking', 'The soft skills of financial success']
  },

  'nassim-nicholas-taleb': {
    name_en: 'Nassim Nicholas Taleb',
    name_zh: '纳西姆·尼古拉斯·塔勒布',
    life: '1960–',
    nationality_zh: '黎巴嫩裔美国',
    nationality_en: 'Lebanese-American',
    role_zh: '学者、前衍生品交易员',
    role_en: 'Scholar and former derivatives trader',
    bio_zh: '黎巴嫩裔美国学者与前衍生品交易员，以「黑天鹅」与不确定性研究闻名。著有《随机漫步的傻瓜》《黑天鹅》《反脆弱》，合称其「不确定性」系列。',
    bio_en: 'Lebanese-American scholar and former derivatives trader known for his work on black swans and uncertainty. Fooled by Randomness, The Black Swan and Antifragile form his Incerto series.',
    ideas_zh: ['黑天鹅与极端事件', '反脆弱性', '杠铃策略与不对称性'],
    ideas_en: ['Black swans and extreme events', 'Antifragility', 'The barbell strategy and asymmetry']
  },

  'neil-postman': {
    name_en: 'Neil Postman',
    name_zh: '尼尔·波兹曼',
    life: '1931–2003',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '媒介批评家、教育家',
    role_en: 'Media critic and educator',
    bio_zh: '美国媒介理论家与教育家，曾任纽约大学教授，媒介环境学的代表人物。《娱乐至死》批评电视将公共话语娱乐化。',
    bio_en: 'American media theorist and educator, a professor at New York University and a leading figure in media ecology. Amusing Ourselves to Death criticises television for turning public discourse into entertainment.',
    ideas_zh: ['「娱乐至死」', '媒介即隐喻', '技术与文化的批判'],
    ideas_en: ['Amusing ourselves to death', 'The medium as metaphor', 'Critique of technology and culture']
  },

  'niall-ferguson': {
    name_en: 'Niall Ferguson',
    name_zh: '尼尔·弗格森',
    life: '1964–',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '历史学家',
    role_en: 'Historian',
    bio_zh: '英国历史学家，曾任教于牛津与哈佛大学，现为斯坦福大学胡佛研究所高级研究员。《货币崛起》讲述金融与世界历史的互动。',
    bio_en: 'British historian who has taught at Oxford and Harvard and is now a senior fellow at the Hoover Institution at Stanford. The Ascent of Money tells the intertwined history of finance and the world.',
    ideas_zh: ['金融史与世界史', '货币与权力', '帝国与大西洋史研究'],
    ideas_en: ['Financial and world history', 'Money and power', 'Work on empire and Atlantic history']
  },

  'nick-bostrom': {
    name_en: 'Nick Bostrom',
    name_zh: '尼克·博斯特罗姆',
    life: '1973–',
    nationality_zh: '瑞典',
    nationality_en: 'Swedish',
    role_zh: '哲学家、牛津大学教授',
    role_en: 'Philosopher and Oxford professor',
    bio_zh: '瑞典哲学家，牛津大学人类未来研究所创始主任，研究存在风险与超级智能。《超级智能》系统讨论机器智能超越人类之后的风险与策略。',
    bio_en: 'Swedish philosopher and founding director of the Future of Humanity Institute at Oxford, working on existential risk and superintelligence. Superintelligence examines the risks and strategies once machine intelligence surpasses human intelligence.',
    ideas_zh: ['超级智能与存在风险', '对齐与控制问题', '人类未来研究所'],
    ideas_en: ['Superintelligence and existential risk', 'Alignment and the control problem', 'The Future of Humanity Institute']
  },

  'olivier-sibony': {
    name_en: 'Olivier Sibony',
    name_zh: '奥利维耶·西博尼',
    life: '',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '管理学者、作家',
    role_en: 'Management scholar and author',
    bio_zh: '法国管理学者，曾任麦肯锡高级合伙人，后任教于 HEC 巴黎。他与 Kahneman、Sunstein 合著《噪声》，研究决策中的判断偏差。',
    bio_en: 'French management scholar, a former senior partner at McKinsey who later taught at HEC Paris. With Kahneman and Sunstein he co-authored Noise, on unwanted variability in human judgement.',
    ideas_zh: ['决策中的「噪声」', '判断与偏差', '与 Kahneman 的合作'],
    ideas_en: ['Noise in decision-making', 'Judgement and bias', 'Collaboration with Kahneman']
  },

  'pedro-domingos': {
    name_en: 'Pedro Domingos',
    name_zh: '佩德罗·多明戈斯',
    life: '1965–',
    nationality_zh: '葡萄牙裔美国',
    nationality_en: 'Portuguese-American',
    role_zh: '计算机科学家、大学教授',
    role_en: 'Computer scientist and university professor',
    bio_zh: '葡萄牙裔美国计算机科学家，华盛顿大学教授，研究机器学习与数据挖掘。《终极算法》梳理了机器学习的五大流派。',
    bio_en: 'Portuguese-American computer scientist and University of Washington professor working on machine learning and data mining. The Master Algorithm surveys the five main schools of machine learning.',
    ideas_zh: ['机器学习五大流派', '「终极算法」构想', '数据挖掘'],
    ideas_en: ['The five schools of machine learning', 'The idea of a master algorithm', 'Data mining']
  },

  'peter-bernstein': {
    name_en: 'Peter Bernstein',
    name_zh: '彼得·伯恩斯坦',
    life: '1919–2009',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '金融史学家、投资人',
    role_en: 'Financial historian and investor',
    bio_zh: '美国金融史学家与投资人，创办 Peter L. Bernstein 公司。《与天为敌》讲述人类认识与驾驭风险的历史。',
    bio_en: 'American financial historian and investor who founded Peter L. Bernstein, Inc. Against the Gods tells the history of how humanity came to understand and manage risk.',
    ideas_zh: ['风险观念史', '概率与决策的历史', '金融史写作'],
    ideas_en: ['The history of the idea of risk', 'The history of probability and decision', 'Writing financial history']
  },

  'peter-drucker': {
    name_en: 'Peter Drucker',
    name_zh: '彼得·德鲁克',
    life: '1909–2005',
    nationality_zh: '奥地利裔美国',
    nationality_en: 'Austrian-American',
    role_zh: '管理学家',
    role_en: 'Management thinker',
    bio_zh: '奥地利裔美国管理学家，现代管理学的奠基人，长期任教于克莱蒙特研究生大学。《卓有成效的管理者》强调管理者的时间与贡献。',
    bio_en: 'Austrian-American management thinker and the founder of modern management studies, who taught for many years at Claremont Graduate University. The Effective Executive focuses on a manager’s use of time and contribution.',
    ideas_zh: ['目标管理', '知识工作者', '「卓有成效」的管理实践'],
    ideas_en: ['Management by objectives', 'The knowledge worker', 'The practice of effectiveness']
  },

  'peter-frankopan': {
    name_en: 'Peter Frankopan',
    name_zh: '彼得·弗兰科潘',
    life: '1971–',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '历史学家、牛津大学教授',
    role_en: 'Historian and Oxford professor',
    bio_zh: '英国历史学家，牛津大学全球史教授。《丝绸之路》以欧亚大陆中部为视角重述世界史。',
    bio_en: 'British historian and professor of global history at Oxford. The Silk Roads retells world history from the vantage point of the centre of the Eurasian landmass.',
    ideas_zh: ['以中亚为中心的世界史', '丝绸之路与交流', '全球史视角'],
    ideas_en: ['World history centred on Central Asia', 'The Silk Roads and exchange', 'A global-history perspective']
  },

  'peter-lynch': {
    name_en: 'Peter Lynch',
    name_zh: '彼得·林奇',
    life: '1944–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资家、基金经理',
    role_en: 'Investor and fund manager',
    bio_zh: '美国投资家，1977 至 1990 年管理富达麦哲伦基金，取得长期优异回报。《彼得·林奇的成功投资》主张投资自己了解的公司。',
    bio_en: 'American investor who managed the Fidelity Magellan Fund from 1977 to 1990 with outstanding long-run returns. One Up on Wall Street argues for investing in businesses you understand.',
    ideas_zh: ['「投资你了解的东西」', '成长股投资', '业余投资者的优势'],
    ideas_en: ['Invest in what you know', 'Growth investing', 'The edge of the amateur investor']
  },

  'peter-norvig': {
    name_en: 'Peter Norvig',
    name_zh: '彼得·诺维格',
    life: '1956–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '计算机科学家',
    role_en: 'Computer scientist',
    bio_zh: '美国计算机科学家，曾任谷歌研究总监，现为斯坦福大学研究员。他与 Stuart Russell 合著《人工智能：一种现代的方法》，该书是人工智能领域的标准教材。',
    bio_en: 'American computer scientist, formerly director of research at Google and now a researcher at Stanford. With Stuart Russell he co-authored Artificial Intelligence: A Modern Approach, the standard textbook in the field.',
    ideas_zh: ['AI 教科书合著者', '搜索与信息检索', 'AI 教育'],
    ideas_en: ['Co-author of the leading AI textbook', 'Search and information retrieval', 'AI education']
  },

  'peter-thiel': {
    name_en: 'Peter Thiel',
    name_zh: '彼得·蒂尔',
    life: '1967–',
    nationality_zh: '德裔美国',
    nationality_en: 'German-American',
    role_zh: '企业家、投资人',
    role_en: 'Entrepreneur and investor',
    bio_zh: '德裔美国企业家与投资人，PayPal 联合创始人，Founders Fund 合伙人。《从 0 到 1》强调垄断式创新与「从 0 到 1」的创造。',
    bio_en: 'German-American entrepreneur and investor, a co-founder of PayPal and a partner at Founders Fund. Zero to One argues for monopoly-style innovation and for creating something genuinely new.',
    ideas_zh: ['「从 0 到 1」的创新', '垄断优于竞争', '逆向问题思维'],
    ideas_en: ['Going from zero to one', 'Monopoly over competition', 'Inverting the question']
  },

  'philip-fisher': {
    name_en: 'Philip Fisher',
    name_zh: '菲利普·费雪',
    life: '1907–2004',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资家',
    role_en: 'Investor',
    bio_zh: '美国投资家，成长股投资的先驱，创办 Fisher & Company。《怎样选择成长股》提出「十五要点」与「闲聊法」调研方法。',
    bio_en: 'American investor and a pioneer of growth investing, who founded Fisher & Company. Common Stocks and Uncommon Profits sets out his fifteen points and the scuttlebutt method of research.',
    ideas_zh: ['成长股投资', '「十五要点」', '长期持有优质公司'],
    ideas_en: ['Growth investing', 'The fifteen points', 'Holding great companies for the long term']
  },

  'philip-tetlock': {
    name_en: 'Philip Tetlock',
    name_zh: '菲利普·泰特洛克',
    life: '1954–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '心理学家、大学教授',
    role_en: 'Psychologist and university professor',
    bio_zh: '美国心理学家，宾夕法尼亚大学沃顿商学院教授，研究政治判断与预测。《超预测》基于大规模预测竞赛，研究预测准确性的条件。',
    bio_en: 'American psychologist and Wharton professor at the University of Pennsylvania who studies political judgement and forecasting. Superforecasting draws on large-scale forecasting tournaments to study what makes predictions accurate.',
    ideas_zh: ['预测与判断研究', '「超预测者」的特征', '狐狸式思维与刺猬式思维'],
    ideas_en: ['Research on forecasting and judgement', 'Traits of superforecasters', 'Fox-like versus hedgehog-like thinking']
  },

  'plato': {
    name_en: 'Plato',
    name_zh: '柏拉图',
    life: '前427–前347',
    nationality_zh: '古希腊',
    nationality_en: 'Ancient Greek',
    role_zh: '哲学家',
    role_en: 'Philosopher',
    bio_zh: '古希腊哲学家，苏格拉底的学生、亚里士多德的老师，西方哲学的奠基者之一。《理想国》探讨正义、城邦与哲人王，并提出理念论。',
    bio_en: 'Ancient Greek philosopher, a student of Socrates and teacher of Aristotle, and one of the founders of Western philosophy. The Republic examines justice, the city and the philosopher-king, and sets out the theory of forms.',
    ideas_zh: ['理念论', '《理想国》与正义', '洞穴寓言'],
    ideas_en: ['The theory of forms', 'The Republic and justice', 'The allegory of the cave']
  },

  'ray-huang': {
    name_en: 'Ray Huang',
    name_zh: '黄仁宇',
    life: '1918–2000',
    nationality_zh: '华裔美国',
    nationality_en: 'Chinese-American',
    role_zh: '历史学家',
    role_en: 'Historian',
    bio_zh: '华裔美国历史学家，以「大历史观」著称，曾任教于多所美国大学。《万历十五年》以 1587 年为切口，剖析明代制度的结构性困境。',
    bio_en: 'Chinese-American historian known for his macro-history approach, who taught at several American universities. 1587, A Year of No Significance uses a single year as a lens on the structural predicaments of the Ming system.',
    ideas_zh: ['「大历史观」', '《万历十五年》', '明代财政与制度分析'],
    ideas_en: ['Macro-history', '1587, A Year of No Significance', 'Ming fiscal and institutional analysis']
  },

  'richard-feynman': {
    name_en: 'Richard Feynman',
    name_zh: '理查德·费曼',
    life: '1918–1988',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '物理学家',
    role_en: 'Physicist',
    bio_zh: '美国理论物理学家，1965 年获诺贝尔物理学奖，以量子电动力学与费曼图闻名。《别闹了，费曼先生》以自述展现其好奇心与率真。',
    bio_en: 'American theoretical physicist who won the 1965 Nobel Prize in Physics and is known for quantum electrodynamics and Feynman diagrams. Surely You’re Joking, Mr. Feynman! reveals his curiosity and irreverent wit.',
    ideas_zh: ['量子电动力学与费曼图', '1965 年诺贝尔物理学奖', '科学的好奇心与诚实'],
    ideas_en: ['Quantum electrodynamics and Feynman diagrams', '1965 Nobel Prize in Physics', 'Curiosity and honesty in science']
  },

  'richard-sutton': {
    name_en: 'Richard Sutton',
    name_zh: '理查德·萨顿',
    life: '1956–',
    nationality_zh: '加拿大',
    nationality_en: 'Canadian',
    role_zh: '计算机科学家',
    role_en: 'Computer scientist',
    bio_zh: '加拿大计算机科学家，强化学习领域的奠基人之一，任教于阿尔伯塔大学。他与 Andrew Barto 合著《强化学习导论》，并共同获得 2024 年图灵奖。',
    bio_en: 'Canadian computer scientist and one of the founders of reinforcement learning, a professor at the University of Alberta. He co-authored Reinforcement Learning: An Introduction with Andrew Barto and shared the 2024 ACM A. M. Turing Award.',
    ideas_zh: ['强化学习奠基人之一', '时序差分学习', '2024 年图灵奖'],
    ideas_en: ['A founder of reinforcement learning', 'Temporal-difference learning', '2024 ACM A. M. Turing Award']
  },

  'richard-thaler': {
    name_en: 'Richard Thaler',
    name_zh: '理查德·塞勒',
    life: '1945–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '行为经济学家、诺贝尔经济学奖得主',
    role_en: 'Behavioural economist and Nobel laureate',
    bio_zh: '美国行为经济学家，芝加哥大学教授，行为金融学的奠基人之一，2017 年获诺贝尔经济学奖。《“错误”的行为》记述了行为经济学的形成过程。',
    bio_en: 'American behavioural economist and University of Chicago professor, a founder of behavioural finance, who won the 2017 Nobel Prize in Economics. Misbehaving recounts the making of behavioural economics.',
    ideas_zh: ['行为经济学与行为金融', '心理账户', '「助推」', '2017 年诺贝尔经济学奖'],
    ideas_en: ['Behavioural economics and finance', 'Mental accounting', 'Nudge', '2017 Nobel Prize in Economics']
  },

  'robert-cialdini': {
    name_en: 'Robert Cialdini',
    name_zh: '罗伯特·西奥迪尼',
    life: '1945–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '社会心理学家',
    role_en: 'Social psychologist',
    bio_zh: '美国社会心理学家，亚利桑那州立大学教授，研究说服与影响。《影响力》总结互惠、承诺、社会认同等六项说服原理。',
    bio_en: 'American social psychologist and Arizona State University professor who studies persuasion and influence. Influence summarises six principles of persuasion, including reciprocity, commitment and social proof.',
    ideas_zh: ['说服六原则', '影响力与顺从研究'],
    ideas_en: ['The six principles of persuasion', 'Research on influence and compliance']
  },

  'robert-heilbroner': {
    name_en: 'Robert Heilbroner',
    name_zh: '罗伯特·海尔布隆纳',
    life: '1919–2005',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济思想史家',
    role_en: 'Historian of economic thought',
    bio_zh: '美国经济学家与经济思想史家，长期任教于纽约社会研究新学院。《世俗哲学家》以传记笔法讲述斯密、马克思、凯恩斯等经济学家的思想。',
    bio_en: 'American economist and historian of economic thought who taught for many years at the New School for Social Research. The Worldly Philosophers tells the story of Smith, Marx, Keynes and others through biography and ideas.',
    ideas_zh: ['经济思想史', '《世俗哲学家》', '经济学的观念史写作'],
    ideas_en: ['The history of economic thought', 'The Worldly Philosophers', 'Writing the intellectual history of economics']
  },

  'robert-shiller': {
    name_en: 'Robert Shiller',
    name_zh: '罗伯特·席勒',
    life: '1946–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济学家、耶鲁大学教授',
    role_en: 'Economist and Yale professor',
    bio_zh: '美国经济学家，耶鲁大学教授，以资产价格与行为金融研究著称，2013 年获诺贝尔经济学奖。《非理性繁荣》预警了互联网泡沫与房地产泡沫。',
    bio_en: 'American economist and Yale professor known for his work on asset prices and behavioural finance, and a winner of the 2013 Nobel Prize in Economics. Irrational Exuberance warned of the dot-com and housing bubbles.',
    ideas_zh: ['非理性繁荣与资产泡沫', '行为金融学', '2013 年诺贝尔经济学奖'],
    ideas_en: ['Irrational exuberance and asset bubbles', 'Behavioural finance', '2013 Nobel Prize in Economics']
  },

  'roger-lowenstein': {
    name_en: 'Roger Lowenstein',
    name_zh: '罗杰·洛温斯坦',
    life: '1954–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '财经作家',
    role_en: 'Financial writer',
    bio_zh: '美国财经作家，曾任《华尔街日报》记者。《赌金者》记述长期资本管理公司（LTCM）的兴衰，是金融风险的经典案例研究。',
    bio_en: 'American financial writer and a former Wall Street Journal reporter. When Genius Failed recounts the rise and fall of Long-Term Capital Management, a classic case study in financial risk.',
    ideas_zh: ['LTCM 案例研究', '杠杆与风险管理', '财经叙事写作'],
    ideas_en: ['The LTCM case study', 'Leverage and risk management', 'Narrative financial writing']
  },

  'rose-friedman': {
    name_en: 'Rose Friedman',
    name_zh: '罗斯·弗里德曼',
    life: '1910–2009',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '经济学家',
    role_en: 'Economist',
    bio_zh: '美国经济学家，米尔顿·弗里德曼的妻子与长期合作者，共同推动自由市场理念的公共传播。《自由选择》由两人合著。',
    bio_en: 'American economist, the wife and long-time collaborator of Milton Friedman, who helped bring free-market ideas to a wide public. Free to Choose was written by the two of them together.',
    ideas_zh: ['自由市场理念的传播', '与弗里德曼的合作'],
    ideas_en: ['Communicating free-market ideas', 'Collaboration with Milton Friedman']
  },

  'samuel-huntington': {
    name_en: 'Samuel Huntington',
    name_zh: '塞缪尔·亨廷顿',
    life: '1927–2008',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '政治学家、哈佛大学教授',
    role_en: 'Political scientist and Harvard professor',
    bio_zh: '美国政治学家，哈佛大学教授，曾任《外交政策》主编。《文明的冲突与世界秩序的重建》以文明为单位分析冷战后的国际政治。',
    bio_en: 'American political scientist and Harvard professor, and a former editor of Foreign Policy. The Clash of Civilizations and the Remaking of World Order analyses post-Cold War politics in terms of civilisations.',
    ideas_zh: ['「文明的冲突」', '政治秩序与变迁', '民主化研究'],
    ideas_en: ['The clash of civilizations', 'Political order and change', 'Research on democratisation']
  },

  'seneca': {
    name_en: 'Seneca',
    name_zh: '塞内加',
    life: '约前4–65',
    nationality_zh: '古罗马',
    nationality_en: 'Roman',
    role_zh: '哲学家、政治家',
    role_en: 'Philosopher and statesman',
    bio_zh: '古罗马斯多葛派哲学家、政治家与剧作家，尼禄的老师与顾问。《道德书简》以书信体讨论如何面对命运、财富与死亡。',
    bio_en: 'Roman Stoic philosopher, statesman and playwright, and tutor and adviser to Nero. The Letters to Lucilius discuss, in epistolary form, how to face fate, wealth and death.',
    ideas_zh: ['斯多葛伦理', '面对命运与死亡', '《道德书简》'],
    ideas_en: ['Stoic ethics', 'Facing fate and death', 'The Letters to Lucilius']
  },

  'seth-klarman': {
    name_en: 'Seth Klarman',
    name_zh: '赛思·卡拉曼',
    life: '1957–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资家、基金创始人',
    role_en: 'Investor and founder of a hedge fund',
    bio_zh: '美国投资家，Baupost Group 创始人兼首席执行官，格雷厄姆价值投资传统的实践者。《安全边际》强调以保守估值防范风险，已成为投资经典。',
    bio_en: 'American investor and founder and CEO of the Baupost Group, a practitioner in the Graham tradition of value investing. Margin of Safety stresses conservative valuation as a guard against risk and has become an investing classic.',
    ideas_zh: ['安全边际', '绝对收益与风险规避', '价值投资实践'],
    ideas_en: ['The margin of safety', 'Absolute returns and risk avoidance', 'The practice of value investing']
  },

  'stuart-russell': {
    name_en: 'Stuart Russell',
    name_zh: '斯图尔特·罗素',
    life: '1962–',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '计算机科学家、大学教授',
    role_en: 'Computer scientist and university professor',
    bio_zh: '英国计算机科学家，加州大学伯克利分校教授，人工智能安全研究的倡导者。《人工智能：一种现代的方法》是人工智能领域的标准教材，《AI 新生》则讨论人机共存与可控性。',
    bio_en: 'British computer scientist and UC Berkeley professor who advocates research on AI safety. Artificial Intelligence: A Modern Approach is the standard textbook in the field, while Human Compatible argues for provably beneficial, controllable AI.',
    ideas_zh: ['AI 教科书合著者', 'AI 价值对齐与可控性', 'AI 安全研究的倡导者'],
    ideas_en: ['Co-author of the leading AI textbook', 'Value alignment and controllability', 'Advocacy of AI safety research']
  },

  'thomas-hobbes': {
    name_en: 'Thomas Hobbes',
    name_zh: '托马斯·霍布斯',
    life: '1588–1679',
    nationality_zh: '英国',
    nationality_en: 'English',
    role_zh: '哲学家',
    role_en: 'Philosopher',
    bio_zh: '英国政治哲学家，社会契约论的代表人物。《利维坦》以「自然状态」与「所有人对所有人的战争」论证主权者的必要性。',
    bio_en: 'English political philosopher and a leading theorist of the social contract. Leviathan argues from the state of nature and the war of all against all to the necessity of a sovereign power.',
    ideas_zh: ['社会契约论', '「自然状态」', '《利维坦》与主权'],
    ideas_en: ['Social contract theory', 'The state of nature', 'Leviathan and sovereignty']
  },

  'thomas-kuhn': {
    name_en: 'Thomas Kuhn',
    name_zh: '托马斯·库恩',
    life: '1922–1996',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '科学哲学家、科学史家',
    role_en: 'Philosopher and historian of science',
    bio_zh: '美国科学哲学家与科学史家，曾任教于哈佛、加州大学伯克利分校与普林斯顿。《科学革命的结构》提出「范式」与「范式转移」。',
    bio_en: 'American philosopher and historian of science who taught at Harvard, UC Berkeley and Princeton. The Structure of Scientific Revolutions introduced the notions of paradigm and paradigm shift.',
    ideas_zh: ['范式与范式转移', '常规科学与科学革命', '不可通约性'],
    ideas_en: ['Paradigms and paradigm shifts', 'Normal science and scientific revolutions', 'Incommensurability']
  },

  'thomas-piketty': {
    name_en: 'Thomas Piketty',
    name_zh: '托马斯·皮凯蒂',
    life: '1971–',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '经济学家',
    role_en: 'Economist',
    bio_zh: '法国经济学家，巴黎经济学院教授。《21 世纪资本论》以长时段数据论证资本收益率长期高于经济增长率，引发全球关于不平等问题的讨论。',
    bio_en: 'French economist and professor at the Paris School of Economics. Capital in the Twenty-First Century uses long-run data to argue that the return on capital tends to exceed economic growth, sparking global debate about inequality.',
    ideas_zh: ['资本收益率高于增长率', '财富不平等的长期趋势', '税制与再分配'],
    ideas_en: ['Return on capital above growth', 'Long-run trends in wealth inequality', 'Taxation and redistribution']
  },

  'thucydides': {
    name_en: 'Thucydides',
    name_zh: '修昔底德',
    life: '约前460–前400',
    nationality_zh: '古希腊',
    nationality_en: 'Ancient Greek',
    role_zh: '历史学家',
    role_en: 'Historian',
    bio_zh: '古希腊历史学家与雅典将军。《伯罗奔尼撒战争史》以严格考据与冷静叙事记述雅典与斯巴达的战争，被视为政治现实主义史学的开端。',
    bio_en: 'Ancient Greek historian and Athenian general. History of the Peloponnesian War, with its rigorous inquiry and dispassionate narrative, is regarded as the beginning of realist historiography.',
    ideas_zh: ['政治现实主义史学', '「米洛斯对话」', '权力与恐惧的动因'],
    ideas_en: ['Realist historiography', 'The Melian dialogue', 'Power and fear as motives']
  },

  'tony-judt': {
    name_en: 'Tony Judt',
    name_zh: '托尼·朱特',
    life: '1948–2010',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '历史学家',
    role_en: 'Historian',
    bio_zh: '英国历史学家，长期任教于纽约大学，研究欧洲现代史与战后欧洲。《战后欧洲史》被视为战后欧洲史领域的权威著作。',
    bio_en: 'British historian who taught for many years at New York University, working on modern and postwar European history. Postwar is widely regarded as the authoritative account of Europe since 1945.',
    ideas_zh: ['战后欧洲史', '欧洲社会民主的兴衰', '公共知识分子写作'],
    ideas_en: ['The history of postwar Europe', 'The rise and fall of European social democracy', 'Writing as a public intellectual']
  },

  'walter-isaacson': {
    name_en: 'Walter Isaacson',
    name_zh: '沃尔特·艾萨克森',
    life: '1952–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '传记作家、记者',
    role_en: 'Biographer and journalist',
    bio_zh: '美国传记作家，曾任《时代》周刊主编与 CNN 董事长。《创新者》讲述数字革命中发明者与工程师的群像。',
    bio_en: 'American biographer, a former editor of Time and chairman of CNN. The Innovators tells the collective story of the inventors and engineers behind the digital revolution.',
    ideas_zh: ['创新者群像', '传记写作', '数字革命史'],
    ideas_en: ['Portraits of innovators', 'The craft of biography', 'The history of the digital revolution']
  },

  'william-shirer': {
    name_en: 'William Shirer',
    name_zh: '威廉·夏伊勒',
    life: '1904–1993',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '记者、历史学家',
    role_en: 'Journalist and historian',
    bio_zh: '美国记者与历史学家，二战期间驻柏林报道。《第三帝国的兴亡》基于日记与档案记述纳粹德国的兴衰，获 1961 年美国国家图书奖。',
    bio_en: 'American journalist and historian who reported from Berlin during the Second World War. The Rise and Fall of the Third Reich draws on diaries and archives to chronicle Nazi Germany and won the 1961 National Book Award.',
    ideas_zh: ['《第三帝国的兴亡》', '记者视角的历史写作', '1961 年美国国家图书奖'],
    ideas_en: ['The Rise and Fall of the Third Reich', 'History written from a reporter’s vantage point', '1961 National Book Award']
  },

  'william-thorndike': {
    name_en: 'William Thorndike',
    name_zh: '威廉·桑代克',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '投资人、作家',
    role_en: 'Investor and author',
    bio_zh: '美国投资人，Housatonic Partners 创始人，曾任职于哈佛商学院。《商界局外人》研究八位以资本配置见长的首席执行官。',
    bio_en: 'American investor and founder of Housatonic Partners, and a former member of the Harvard Business School faculty. The Outsiders studies eight chief executives distinguished by their approach to capital allocation.',
    ideas_zh: ['CEO 的资本配置能力', '「局外人」式管理'],
    ideas_en: ['Capital allocation as a CEO skill', 'The outsider approach to management']
  },

  'yoshua-bengio': {
    name_en: 'Yoshua Bengio',
    name_zh: '约书亚·本吉奥',
    life: '1964–',
    nationality_zh: '加拿大',
    nationality_en: 'Canadian',
    role_zh: '计算机科学家、大学教授',
    role_en: 'Computer scientist and university professor',
    bio_zh: '加拿大计算机科学家，蒙特利尔大学教授，MILA 科学主任，深度学习的奠基人之一，2018 年获图灵奖。他与 Goodfellow、Courville 合著《深度学习》。',
    bio_en: 'Canadian computer scientist and University of Montreal professor, scientific director of Mila and one of the founders of deep learning, who won the 2018 ACM A. M. Turing Award. He co-authored Deep Learning with Goodfellow and Courville.',
    ideas_zh: ['深度学习奠基人之一', '2018 年图灵奖', '表征学习与注意力机制'],
    ideas_en: ['A founder of deep learning', '2018 ACM A. M. Turing Award', 'Representation learning and attention']
  },

  'yuval-noah-harari': {
    name_en: 'Yuval Noah Harari',
    name_zh: '尤瓦尔·赫拉利',
    life: '1976–',
    nationality_zh: '以色列',
    nationality_en: 'Israeli',
    role_zh: '历史学家、大学教授',
    role_en: 'Historian and university professor',
    bio_zh: '以色列历史学家，耶路撒冷希伯来大学教授。《人类简史》从认知革命、农业革命到科学革命重构人类历史，成为全球畅销书。',
    bio_en: 'Israeli historian and professor at the Hebrew University of Jerusalem. Sapiens reconstructs human history from the cognitive and agricultural revolutions to the scientific revolution, and became a global bestseller.',
    ideas_zh: ['认知革命与「想象的共同体」', '农业革命的悖论', '智人的未来'],
    ideas_en: ['The cognitive revolution and imagined orders', 'The paradox of the agricultural revolution', 'The future of Homo sapiens']
  }
};

export default authors;
