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

  'gerald-sussman': {
    name_en: 'Gerald Jay Sussman',
    name_zh: '杰拉尔德·杰伊·萨斯曼',
    life: '1934–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '计算机科学家',
    role_en: 'Computer scientist',
    bio_zh: '美国计算机科学家，麻省理工学院教授。与哈罗德·阿贝尔森及朱莉·萨斯曼同编《计算机程序的构造和解释》（SICP），该书自 1984 年起在 MIT 和斯坦福等高校长期作为核心课程教材使用。',
    bio_en: 'American computer scientist and MIT professor, longtime teacher of MIT CS 6.001. With Harold Abelson and Julie Sussman he wrote Structure and Interpretation of Computer Programs (SICP), the project which won a teaching award.',
    ideas_zh: ['SICP 的教学方法', '计算即理解', '过程抽象的力量'],
    ideas_en: ['The teaching method of SICP', 'Computation as understanding', 'The power of process abstraction']
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

  'harold-abelson': {
    name_en: 'Harold Abelson',
    name_zh: '哈罗德·阿贝尔森',
    life: '1934–2016',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '计算机科学家、MIT 教授',
    role_en: 'Computer scientist and MIT professor',
    bio_zh: '美国计算机科学家，麻省理工学院教授。与 Gerald Jay Sussman 及 Julie Sussman 共同编写《计算机程序的构造和解释》（SICP），影响了几代程序员的思考方式。',
    bio_en: 'American computer scientist and MIT professor. With Gerald Jay Sussman and Julie Sussman, he wrote Structure and Interpretation of Computer Programs (SICP), shaping the thinking of generations of programmers.',
    ideas_zh: ['SICP 的结构化编程', '计算的抽象与过程', 'MIT 计算机科学的奠基框架'],
    ideas_en: ['The architecture of SICP', 'Abstraction and process in computing', 'A foundational framework for MIT computer science']
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

  'julie-sussman': {
    name_en: 'Julie Sussman',
    name_zh: '朱莉·萨斯曼',
    life: '1941–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '合著者',
    role_en: 'Co-author',
    bio_zh: '美国作家与编辑。被列为 MIT 经典教材《计算机程序的构造和解释》（SICP）第二版的合著者之一，该书使用长达数十年。',
    bio_en: 'American computer scientist and educator who carried an educational mission with Harper Sussman. Co-author with Harold Abelson and Gerald Jay Sussman of SICP, listed as MIT\'s standard computer science textbook, used for decades.',
    ideas_zh: ['SICP 的教育方法论', '计算机程序的构造与解释', '过程与表现的平衡'],
    ideas_en: ['Educational methodology of SICP', 'The construction and interpretation of programs', 'Balancing process and performance']
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

  'michel-foucault': {
    name_en: 'Michel Foucault',
    name_zh: '米歇尔·福柯',
    life: '1926–1984',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '哲学家、思想史家',
    role_en: 'Philosopher and intellectual historian',
    bio_zh: '法国哲学家，曾任法兰西公学院教授。对权力、知识与规训机制的谱系学分析，彻底改变了我们对监狱、精神病学、性与社会规范的认识。《规训与惩罚》与《知识考古学》与《性史》构成其理论坐标的核心。',
    bio_en: 'French philosopher and professor at the Collège de France. His genealogical analyses of power, knowledge and disciplinary mechanisms transformed our understanding of prisons, psychiatry, sexuality and social norms. Discipline and Punish, together with The Archaeology of Knowledge and The History of Sexuality, are the core of his theoretical coordinates.',
    ideas_zh: ['规训与惩罚：权力通过微观机制运作', '知识与权力的共生', '呼吁批判性地审视「常识」'],
    ideas_en: ['Discipline and punishment: power in the micro-mechanisms', 'The symbiosis of knowledge and power', 'A call to critically examine common sense']
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

  'roger-penrose': {
    name_en: 'Roger Penrose',
    name_zh: '罗杰·彭罗斯',
    life: '1931–',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '数学物理学家',
    role_en: 'Mathematical physicist',
    bio_zh: '英国数学物理学家，1973 至 1998 年任牛津大学罗斯·波勒数学教授。他在广义相对论与宇宙学中的工作——尤其是与霍金合作的奇点定理——为黑洞研究奠定基础，并因此获得 2020 年诺贝尔物理学奖。1989 年的《皇帝新脑》以哥德尔定理论证人类心智非算法，是强人工智能最重要的反面论证之一；此后与哈默罗夫合作提出 Orchestrated Objective Reduction 假说。',
    bio_en: 'British mathematical physicist who held the Rouse Ball Chair of Mathematics at Oxford from 1973 to 1998. His work in general relativity and cosmology — above all the singularity theorems written with Stephen Hawking — laid the groundwork for the study of black holes and led to the 2020 Nobel Prize in Physics. The Emperor\'s New Mind (1989) used Godel\'s theorem to argue that human mind is non-algorithmic, making it one of the most important counter-arguments to strong AI; he later developed the Orchestrated Objective Reduction hypothesis with Stuart Hameroff.',
    ideas_zh: ['奇点定理与黑洞物理', '彭罗斯图与扭量理论', '心智非算法论证', 'Orch-OR 意识假说'],
    ideas_en: ['Singularity theorems and black hole physics', 'Penrose diagrams and twistor theory', 'The non-algorithmic mind argument', 'The Orch-OR hypothesis of consciousness']
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

  'susan-sontag': {
    name_en: 'Susan Sontag',
    name_zh: '苏珊·桑塔格',
    life: '1933–2004',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家、评论家',
    role_en: 'Writer and critic',
    bio_zh: '美国作家与评论家，二十世纪后半期最重要的公共知识分子之一。她的随笔与批评覆盖先锋文学、戏剧、电影与摄影，《论摄影》（1977）获美国国家书评人协会奖批评类奖，《在美国》获 2000 年美国国家图书奖小说奖。她还获得耶路撒冷奖（2001）与德国书业和平奖（2003）。',
    bio_en: 'American writer and critic, one of the most influential public intellectuals of the second half of the twentieth century. Her essays and criticism ranged across avant-garde literature, theatre, film and photography; On Photography (1977) won the National Book Critics Circle Award for Criticism, and In America won the 2000 National Book Award for Fiction. She also received the Jerusalem Prize (2001) and the Peace Prize of the German Book Trade (2003).',
    ideas_zh: ['反对阐释：以形式与感受力取代内容索隐', '影像如何取代经验', '疾病作为隐喻的批判', '「坎普」趣味的界定'],
    ideas_en: ['Against interpretation: form and sensibility over content-hunting', 'How images replace experience', 'Illness as metaphor and its punitive uses', 'Defining the sensibility of camp']
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
  },
  'fyodor-dostoevsky': {
    name_en: 'Fyodor Dostoevsky',
    name_zh: '费奥多尔·陀思妥耶夫斯基',
    life: '1821–1881',
    nationality_zh: '俄国',
    nationality_en: 'Russian',
    role_zh: '作家、思想家',
    role_en: 'Novelist and thinker',
    bio_zh: '俄国作家，与托尔斯泰、屠格涅夫并称俄国文学高峰。《罪与罚》《卡拉马佐夫兄弟》以极端处境拷问道德、信仰与自由意志，开拓了心理小说的深度，深刻影响了二十世纪哲学与文学。',
    bio_en: 'Russian novelist, ranked with Tolstoy and Turgenev at the summit of Russian literature. With Crime and Punishment and The Brothers Karamazov he used extreme situations to interrogate morality, faith, and free will, founding a depth of psychological fiction that shaped twentieth-century philosophy and literature.',
    ideas_zh: ['在极端处境中拷问道德与信仰', '心理小说的深度开拓者', '对存在主义与二十世纪思想的深远影响'],
    ideas_en: ['Interrogating morality and faith in extreme situations', 'A founder of psychological depth in fiction', 'A formative influence on existentialism and twentieth-century thought']
  },
  'franz-kafka': {
    name_en: 'Franz Kafka',
    name_zh: '弗兰茨·卡夫卡',
    life: '1883–1924',
    nationality_zh: '奥地利',
    nationality_en: 'Austrian',
    role_zh: '作家',
    role_en: 'Novelist',
    bio_zh: '生于布拉格的德语犹太作家。《审判》《城堡》《变形记》写人如何陷入无法理解、无法申辩的庞大系统，「卡夫卡式」已成为描述现代官僚困境的通用词。',
    bio_en: 'German-Jewish writer born in Prague. In The Trial, The Castle, and The Metamorphosis he depicted people trapped inside vast systems they can neither understand nor argue against; "Kafkaesque" is now the standard word for the modern bureaucratic predicament.',
    ideas_zh: ['人陷入无法理解的系统时的处境', '「卡夫卡式」与官僚困境', '二十世纪现代主义文学的核心'],
    ideas_en: ['The human condition inside incomprehensible systems', '"Kafkaesque" and the bureaucratic predicament', 'A central figure of modernist literature']
  },
  'thomas-mann': {
    name_en: 'Thomas Mann',
    name_zh: '托马斯·曼',
    life: '1875–1955',
    nationality_zh: '德国',
    nationality_en: 'German',
    role_zh: '作家',
    role_en: 'Novelist',
    bio_zh: '德国作家，1929 年诺贝尔文学奖得主。《魔山》《布登勃洛克一家》以精密结构承载观念冲突，把欧洲思想史写成小说。',
    bio_en: 'German novelist and 1929 Nobel laureate in Literature. In The Magic Mountain and Buddenbrooks he used precise structures to stage conflicts of ideas, writing the intellectual history of Europe as fiction.',
    ideas_zh: ['《魔山》：观念冲突的文学实验室', '1929 年诺贝尔文学奖', '德国现代小说的传统奠基者'],
    ideas_en: ['The Magic Mountain as a laboratory of conflicting ideas', '1929 Nobel Prize in Literature', 'A founder of the modern German novel']
  },
  'jose-saramago': {
    name_en: 'José Saramago',
    name_zh: '若泽·萨拉马戈',
    life: '1922–2010',
    nationality_zh: '葡萄牙',
    nationality_en: 'Portuguese',
    role_zh: '作家',
    role_en: 'Novelist',
    bio_zh: '葡萄牙作家，1998 年诺贝尔文学奖得主。《失明症漫记》《修道院纪事》以寓言方式处理文明崩溃与权力暴政，句子绵长、几无标点，是他标志性的风格。',
    bio_en: 'Portuguese novelist and 1998 Nobel laureate in Literature. In Blindness and Baltasar and Blimunda he treated civilizational collapse and tyranny as fable, with the long, nearly punctuation-free sentences that became his signature.',
    ideas_zh: ['《失明症漫记》：文明剥落的思想实验', '1998 年诺贝尔文学奖', '以寓言处理制度与权力'],
    ideas_en: ['Blindness as a thought experiment in civilizational collapse', '1998 Nobel Prize in Literature', 'Allegory as a way to treat institutions and power']
  },
  'george-eliot': {
    name_en: 'George Eliot',
    name_zh: '乔治·艾略特',
    life: '1819–1880',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '作家',
    role_en: 'Novelist',
    bio_zh: '英国作家，本名玛丽·安·伊万斯。《米德尔马契》《织工马南传》以罕见的心理精确度写普通人的道德生活，被广泛视为英语小说中洞察人性的高峰。',
    bio_en: 'English novelist, born Mary Ann Evans. With Middlemarch and Silas Marner she wrote the moral lives of ordinary people with rare psychological precision, widely regarded as a high point of the English novel.',
    ideas_zh: ['《米德尔马契》：普通生活中的道德考验', '以心理精确度写人物动机', '英语小说的人性洞察高峰'],
    ideas_en: ['Middlemarch as moral test in ordinary life', 'Psychological precision in motive', 'A high point of the English novel on character']
  },
  'michel-de-montaigne': {
    name_en: 'Michel de Montaigne',
    name_zh: '米歇尔·德·蒙田',
    life: '1533–1592',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '思想家、散文家',
    role_en: 'Thinker and essayist',
    bio_zh: '法国思想家，随笔（essai）文体的开创者。他辞官退隐，以《随笔集》把自己作为研究对象，写恐惧、习惯、疾病与判断的流动，示范了一种温和而彻底的自我怀疑。',
    bio_en: 'French thinker who founded the essay as a form. Leaving public office, he made himself the subject of study in the Essays, writing on fear, habit, illness, and the movement of judgment, and modelling a gentle but thorough self-doubt.',
    ideas_zh: ['开创「随笔」文体', '把自己当作研究对象', '「我知道什么」的怀疑精神'],
    ideas_en: ['Inventing the essay as a literary form', 'Taking oneself as the object of study', 'The skeptical spirit of "what do I know"']
  },
  'francis-bacon': {
    name_en: 'Francis Bacon',
    name_zh: '弗朗西斯·培根',
    life: '1561–1626',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '哲学家、法学家、政治家',
    role_en: 'Philosopher, jurist, and statesman',
    bio_zh: '英国哲学家与政治家，近代科学方法的奠基人之一。他的《随笔》把处世经验压缩成短硬可执行的判断句，也是英语散文的奠基之作。',
    bio_en: 'English philosopher and statesman, among the founders of the modern scientific method. His Essays compressed worldly experience into short, hard, actionable judgments, and became a founding work of English prose.',
    ideas_zh: ['《新工具》与经验归纳法', '英语散文的奠基者', '把经验提炼为可执行规则'],
    ideas_en: ['Novum Organum and inductive method', 'A founder of English prose', 'Distilling experience into actionable rules']
  },
  'ralph-waldo-emerson': {
    name_en: 'Ralph Waldo Emerson',
    name_zh: '拉尔夫·沃尔多·爱默生',
    life: '1803–1882',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '思想家、散文家',
    role_en: 'Thinker and essayist',
    bio_zh: '美国思想家，超验主义运动的中心人物。《随笔集》《论自然》主张人应信任自身经验而非传统与机构，深刻影响了美国文学与个人主义传统。',
    bio_en: 'American thinker and the central figure of the Transcendentalist movement. In Essays and Nature he argued that people should trust their own experience over tradition and institutions, shaping American literature and the tradition of individualism.',
    ideas_zh: ['「自立」：不依赖他人判断而活', '超验主义运动的中心', '美国个人主义的思想源头'],
    ideas_en: ['Self-Reliance: living without depending on the judgment of others', 'The center of Transcendentalism', 'A source of American individualism']
  },
  'virginia-woolf': {
    name_en: 'Virginia Woolf',
    name_zh: '弗吉尼亚·伍尔夫',
    life: '1882–1941',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '作家、批评家',
    role_en: 'Novelist and critic',
    bio_zh: '英国作家，现代主义小说的核心人物。《达洛维夫人》《到灯塔去》以意识流写法深入时间的内部；她的批评文集《普通读者》示范了如何凭第一手阅读经验判断作品。',
    bio_en: 'English novelist and a central figure of modernist fiction. Mrs Dalloway and To the Lighthouse used stream of consciousness to enter the interior of time; her critical collection The Common Reader shows how to judge a work from firsthand reading.',
    ideas_zh: ['意识流与现代主义小说', '《一间自己的屋子》与女性创作条件', '以普通读者姿态重估经典'],
    ideas_en: ['Stream of consciousness and modernist fiction', 'A Room of One\'s Own on the conditions of women\'s writing', 'Reassessing the classics as a common reader']
  },
  'james-baldwin': {
    name_en: 'James Baldwin',
    name_zh: '詹姆斯·鲍德温',
    life: '1924–1987',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家、社会评论家',
    role_en: 'Novelist and social critic',
    bio_zh: '美国作家，生于哈莱姆的民权运动重要声音。《乔瓦尼的房间》《土生子札记》《下一次将是烈火》以亲身经验剖析美国的种族结构，同时拒绝把愤怒简化为口号。',
    bio_en: 'American writer from Harlem and a defining voice of the civil rights movement. With Giovanni\'s Room, Notes of a Native Son, and The Fire Next Time he examined America\'s racial structure from lived experience while refusing to reduce anger to slogans.',
    ideas_zh: ['种族结构同时塑造压迫者与被压迫者', '愤怒必须转化为理解', '二十世纪美国散文的高峰'],
    ideas_en: ['Racial structure shapes oppressor and oppressed alike', 'Anger must be converted into understanding', 'A high point of twentieth-century American essay']
  },
  'joan-didion': {
    name_en: 'Joan Didion',
    name_zh: '琼·狄迪恩',
    life: '1934–2021',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家、记者',
    role_en: 'Novelist and journalist',
    bio_zh: '美国作家与记者，新新闻主义的代表。《向伯利恒跋涉》《奇想之年》以冷静、克制的句子记录六十年代加州的秩序松动与个人创伤，是二十世纪英语散文的重要样本。',
    bio_en: 'American writer and journalist, a leading exponent of New Journalism. Slouching Towards Bethlehem and The Year of Magical Thinking recorded, in cool restrained sentences, the loosening order of 1960s California and the experience of personal grief, and remain major specimens of twentieth-century English prose.',
    ideas_zh: ['新新闻主义的代表', '精确细节优于明确评论', '以克制句子处理个人创伤'],
    ideas_en: ['A leading exponent of New Journalism', 'Precise detail over explicit commentary', 'Grief handled in restrained sentences']
  },
  'lu-xun': {
    name_en: 'Lu Xun',
    name_zh: '鲁迅',
    life: '1881–1936',
    nationality_zh: '中国',
    nationality_en: 'Chinese',
    role_zh: '作家、思想家',
    role_en: 'Novelist and thinker',
    bio_zh: '中国现代文学的奠基人之一。《呐喊》《彷徨》《朝花夕拾》以冷峻的观察写旧制度、旧礼俗对个体的塑造，同时保持对自身的审视，是中文现代散文与小说共同的源头。',
    bio_en: 'One of the founders of modern Chinese literature. With Call to Arms, Wandering, and Dawn Blossoms Plucked at Dusk he wrote cold-eyed observations of how old institutions and customs form the individual, while never exempting himself from scrutiny — a source for both modern Chinese fiction and essay.',
    ideas_zh: ['中国现代文学的奠基人', '旧制度如何塑造个体', '温情与批判共存的散文写法'],
    ideas_en: ['A founder of modern Chinese literature', 'How old institutions form the individual', 'An essay style where warmth and criticism coexist']
  },
  'john-dewey': {
    name_en: 'John Dewey',
    name_zh: '约翰·杜威',
    life: '1859–1952',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '哲学家、教育家',
    role_en: 'Philosopher and educator',
    bio_zh: '美国哲学家与教育家，实用主义的核心人物。《民主主义与教育》把教育重新定义为经验的持续改造，主张学习发生在解决真实问题的过程中，对二十世纪教育改革影响深远。',
    bio_en: 'American philosopher and educator, a central figure in pragmatism. Democracy and Education redefined education as the continuous reconstruction of experience, holding that learning occurs in the solving of real problems — an argument that shaped twentieth-century educational reform.',
    ideas_zh: ['教育即经验的持续改造', '在做中学', '民主是一种需要被教育维持的生活方式'],
    ideas_en: ['Education as continuous reconstruction of experience', 'Learning by doing', 'Democracy as a way of life that education must sustain']
  },
  'paulo-freire': {
    name_en: 'Paulo Freire',
    name_zh: '保罗·弗莱雷',
    life: '1921–1997',
    nationality_zh: '巴西',
    nationality_en: 'Brazilian',
    role_zh: '教育家',
    role_en: 'Educator',
    bio_zh: '巴西教育家，《被压迫者教育学》的作者。他提出「银行式教育」的批判与「提问式教育」的替代方案，是批判教育学与成人扫盲运动的理论源头。',
    bio_en: 'Brazilian educator and author of Pedagogy of the Oppressed. His critique of "banking" education and his alternative of problem-posing education are the theoretical source of critical pedagogy and of adult literacy movements.',
    ideas_zh: ['「银行式教育」的批判', '提问式教育与解放', '批判教育学的奠基人'],
    ideas_en: ['The critique of banking education', 'Problem-posing education and liberation', 'A founder of critical pedagogy']
  },
  'ivan-illich': {
    name_en: 'Ivan Illich',
    name_zh: '伊万·伊里奇',
    life: '1926–2002',
    nationality_zh: '奥地利',
    nationality_en: 'Austrian',
    role_zh: '思想家、社会批评家',
    role_en: 'Thinker and social critic',
    bio_zh: '奥地利思想家，曾任神父后离开教会。《去学校化社会》《医学的界限》等著作系统批判现代制度如何把自己的存续置于其宣称的目标之上，是反体制化思潮的代表。',
    bio_en: 'Austrian thinker and former priest who left the Church. In Deschooling Society and Limits to Medicine he systematically criticized how modern institutions place their own survival above the goals they claim to serve, and became a figurehead of the deinstitutionalization critique.',
    ideas_zh: ['制度会把自身存续置于目标之上', '去学校化与学习交换', '对专业垄断的系统批判'],
    ideas_en: ['Institutions place their survival above their aims', 'Deschooling and learning exchanges', 'A systematic critique of professional monopoly']
  },
  'nicholas-carr': {
    name_en: 'Nicholas Carr',
    name_zh: '尼古拉斯·卡尔',
    life: '1963–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家、科技评论者',
    role_en: 'Author and technology critic',
    bio_zh: '美国作家，长期写技术与商业的交叉影响。《浅薄》以神经科学、媒介史与文化批评论证互联网如何重塑注意力与记忆，《大转变》则追溯 IT 从稀缺资源变为公共服务的过程。',
    bio_en: 'American author writing on technology and business. The Shallows argues from neuroscience, media history, and cultural criticism that the internet reshapes attention and memory; The Big Switch traces how IT moved from a scarce resource to a public utility.',
    ideas_zh: ['《浅薄》：媒介重塑大脑', '注意力的神经科学分析', 'IT 从稀缺资源到公共服务'],
    ideas_en: ['The Shallows: media rewires the brain', 'A neuroscientific account of attention', 'IT from scarce resource to public utility']
  },
  'sherry-turkle': {
    name_en: 'Sherry Turkle',
    name_zh: '雪莉·特克尔',
    life: '1948–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '心理学家、MIT 教授',
    role_en: 'Psychologist and MIT professor',
    bio_zh: '美国心理学家，MIT 技术与自我研究方向的教授，做了三十年人与技术关系的访谈研究。《重拾交谈》《群体性孤独》记录人们如何用效率换掉低效但不可替代的对话。',
    bio_en: 'American psychologist and MIT professor of technology and the self, with three decades of interview research on the human relationship with technology. Reclaiming Conversation and Alone Together record how people trade away inefficient but irreplaceable conversation for efficiency.',
    ideas_zh: ['三十年人与技术关系的访谈研究', '对话中的停顿是共情的条件', '独处能力是真实关系的前提'],
    ideas_en: ['Three decades of interviews on people and technology', 'Pauses in conversation as conditions of empathy', 'The capacity to be alone as a precondition of real relationship']
  },
  'audrey-watters': {
    name_en: 'Audrey Watters',
    name_zh: '奥黛丽·沃特斯',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '教育技术批评者、研究者',
    role_en: 'Education-technology critic and researcher',
    bio_zh: '美国教育技术批评者，长期以档案研究追踪「个性化学习」话语的历史。《教学机器》挖出普莱西与斯金纳的教学机器传统，证明 AI 教育的承诺百年前已被许下并落空。',
    bio_en: 'American critic of education technology who has used archival research to trace the history of "personalized learning." Teaching Machines excavates the Pressey–Skinner tradition, showing that the promises of AI education were made a century ago and failed then too.',
    ideas_zh: ['「个性化学习」话语的历史考古', '教育技术的循环失败史', '技术承诺与教育目标的简化'],
    ideas_en: ['An archaeology of "personalized learning"', 'The repeating cycle of ed-tech failure', 'Technological promises and the simplification of educational aims']
  },
  'e-p-thompson': {
    name_en: 'E. P. Thompson',
    name_zh: 'E. P. 汤普森',
    life: '1924–1993',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '历史学家、社会史学者',
    role_en: 'Historian and social historian',
    bio_zh: '英国历史学家，马克思主义人道主义与英国新左派的核心人物，曾在利兹大学与华威大学任教（1971 年因抗议该校商业化而辞职）。1963 年出版《英国工人阶级的形成》，以「自下而上的历史」重写工业革命时期的社会史，被视为社会史的奠基之作。1966 年提出「history from below」一语，1952 年参与创办《过去与现在》期刊；1978 年以《理论的贫困》反击阿尔都塞式结构马克思主义。2011 年《今日历史》杂志评选「过去六十年最重要历史学家」，他位列第二，仅次于布罗代尔。',
    bio_en: 'British historian, a central figure of Marxist humanism and the British New Left, who taught at the University of Leeds and the University of Warwick, resigning from Warwick in 1971 in protest at its commercialisation. His 1963 book The Making of the English Working Class rewrote the social history of industrialisation as history from below and is regarded as a founding work of the field. He coined the phrase history from below in 1966, helped found the journal Past and Present in 1952, and answered Althusserian structural Marxism in The Poverty of Theory (1978). In 2011 History Today ranked him the second most important historian of the previous sixty years, after Fernand Braudel.',
    ideas_zh: ['阶级是关系与过程，不是结构实体', '「经验」中介社会存在与意识', '「自下而上的历史」视角'],
    ideas_en: ['Class as relationship and process rather than structural entity', 'Experience as the mediator between social being and consciousness', 'History from below']
  },
  'tracy-kidder': {
    name_en: 'Tracy Kidder',
    name_zh: '特雷西·基德尔',
    life: '1945–2026',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '非虚构作家、文学新闻代表',
    role_en: 'Nonfiction writer and literary journalist',
    bio_zh: '美国非虚构作家，哈佛大学 1967 年毕业，爱荷华大学作家工作坊 MFA。1981 年出版《新机器的灵魂》，记录数据通用公司一支工程团队赶制 Eagle 小型机的全过程，1982 年同时获得普利策通用非虚构奖与美国国家图书奖非虚构类奖。此后以《House》《Among Schoolchildren》《Mountains Beyond Mountains》《Rough Sleepers》持续以长时段蹲点方式书写普通职业与制度。2026 年 3 月 24 日病逝于波士顿。',
    bio_en: 'American nonfiction writer, a Harvard graduate of 1967 and an MFA from the Iowa Writers\' Workshop. The Soul of a New Machine (1981), an account of the Data General team racing to build the Eagle minicomputer, won both the 1982 Pulitzer Prize for General Nonfiction and the National Book Award for Nonfiction. He went on to write House, Among Schoolchildren, Mountains Beyond Mountains and Rough Sleepers, all built on long immersion in ordinary professions and institutions. He died in Boston on 24 March 2026.',
    ideas_zh: ['长时段蹲点的文学新闻方法', '工程激励的「再玩一局」机制', '把专业劳动写成可读的人类样本'],
    ideas_en: ['Literary journalism built on long immersion', 'The "another round" mechanism of engineering motivation', 'Turning specialised labour into readable human evidence']
  },
  'henry-david-thoreau': {
    name_en: 'Henry David Thoreau',
    name_zh: '亨利·戴维·梭罗',
    life: '1817–1862',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '散文家、哲学家、自然主义者',
    role_en: 'Essayist, philosopher and naturalist',
    bio_zh: '美国散文家、哲学家、超验主义代表人物，1817 年生于马萨诸塞州康科德，1837 年毕业于哈佛大学。1845 至 1847 年在瓦尔登湖畔自建木屋独居两年两个月，据此写成《瓦尔登湖》（1854）。1849 年发表《论公民的不服从》，因拒缴支持美墨战争的人头税曾入狱一夜。他一生以日记写作，观察自然与政治，作品多在其身后整理出版；二十世纪以后被公认为具有世界影响力的美国作家。',
    bio_en: 'American essayist, philosopher and leading transcendentalist, born in Concord, Massachusetts in 1817 and a Harvard graduate of 1837. Between 1845 and 1847 he lived alone in a cabin he built on the shore of Walden Pond, the experience behind Walden (1854). His essay Civil Disobedience appeared in 1849; he spent a night in jail for refusing to pay a poll tax supporting the Mexican-American War. He wrote continuously in his journal on nature and politics, much of it published after his death, and since the twentieth century has been recognised as an American writer of world influence.',
    ideas_zh: ['简朴作为生活成本的核算', '《论公民的不服从》', '以日记与测量为基础的博物观察'],
    ideas_en: ['Simplicity as the accounting of life\'s cost', 'Civil Disobedience', 'Natural observation grounded in journals and measurement']
  },
  'jeff-hawkins': {
    name_en: 'Jeff Hawkins',
    name_zh: '杰夫·霍金斯',
    life: '1957–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '发明家、计算机科学家、企业家',
    role_en: 'Inventor, computer scientist and entrepreneur',
    bio_zh: '美国发明家与计算机科学家，1957 年生于纽约州亨廷顿，1979 年获康奈尔大学电气工程学士。1992 年创立 Palm Computing，主导 PalmPilot 等手持设备；1998 年参与创立 Handspring；2002 年创立红木神经科学研究所（后并入加州大学伯克利分校）；2005 年创立 Numenta，推进基于大脑理论的机器智能。2003 年当选美国国家工程院院士。2004 年与桑德拉·布拉克斯莉合著《On Intelligence》，提出「记忆—预测框架」；2021 年出版《A Thousand Brains》，进一步提出「千脑」理论。',
    bio_en: 'American inventor and computer scientist, born in Huntington, New York in 1957 and a 1979 graduate in electrical engineering from Cornell. He founded Palm Computing in 1992, where he led the PalmPilot and other handheld devices; co-founded Handspring in 1998; founded the Redwood Neuroscience Institute in 2002, later associated with UC Berkeley; and founded Numenta in 2005 to advance brain-based machine intelligence. He was elected to the National Academy of Engineering in 2003. With Sandra Blakeslee he wrote On Intelligence (2004), which set out the memory-prediction framework, and in 2021 published A Thousand Brains, extending it into the thousand-brains theory.',
    ideas_zh: ['记忆—预测框架', '「千脑」理论', '以大脑理论指导机器智能'],
    ideas_en: ['The memory-prediction framework', 'The thousand-brains theory', 'Machine intelligence guided by brain theory']
  },
  'ursula-k-le-guin': {
    name_en: 'Ursula K. Le Guin',
    name_zh: '厄休拉·K·勒古恩',
    life: '1929–2018',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '小说家、科幻与奇幻作家',
    role_en: 'Novelist and writer of science fiction and fantasy',
    bio_zh: '美国作家，1929 年生于加州伯克利，父亲是人类学家阿尔弗雷德·克罗伯，母亲是作家西奥多拉·克罗伯。1951 年毕业于拉德克利夫学院，1952 年获哥伦比亚大学硕士学位。1966 年以《劳卡农的世界》进入科幻领域，此后以「海尼什宇宙」与《地海》两个系列确立地位。她共获 8 次雨果奖、6 次星云奖、25 次轨迹奖；2000 年被美国国会图书馆列为「活传奇」，2003 年获美国科幻奇幻作家协会大师称号，2014 年获美国国家图书基金会杰出贡献奖章。2018 年逝于俄勒冈州波特兰。',
    bio_en: 'American writer born in Berkeley, California in 1929, daughter of the anthropologist Alfred Kroeber and the writer Theodora Kroeber. She graduated from Radcliffe College in 1951 and took an MA at Columbia in 1952. She entered science fiction with Rocannon\'s World (1966) and established herself through the Hainish cycle and the Earthsea series. She won eight Hugo Awards, six Nebulas and twenty-five Locus Awards; the Library of Congress named her a Living Legend in 2000, SFWA made her a Grand Master in 2003, and she received the National Book Foundation Medal for Distinguished Contribution to American Letters in 2014. She died in Portland, Oregon in 2018.',
    ideas_zh: ['以人类学式虚构做思想实验', '「海尼什宇宙」与《地海》两个系列', '性别、权力与无政府主义的持续追问'],
    ideas_en: ['Thought experiments in anthropological fiction', 'The Hainish cycle and the Earthsea series', 'Sustained inquiry into gender, power and anarchism']
  },
  'seymour-papert': {
    name_en: 'Seymour Papert',
    name_zh: '西摩·佩珀特',
    life: '1928–2016',
    nationality_zh: '南非裔美国',
    nationality_en: 'South African-born American',
    role_zh: '数学家、计算机科学家、教育理论家',
    role_en: 'Mathematician, computer scientist and educational theorist',
    bio_zh: '南非出生的美国数学家与计算机科学家，1928 年生于比勒陀利亚，1952 年获金山大学数学博士，1960 年获剑桥大学第二个数学博士。1958 至 1963 年在日内瓦与皮亚杰共事，其后进入麻省理工学院，1967 年起任 MIT 人工智能实验室联合主任至 1981 年，并创立「认识论与学习研究组」，该组后来发展为 MIT 媒体实验室。他与 Wally Feurzeig、Cynthia Solomon 共同发明 Logo 编程语言；1969 年与明斯基合著《Perceptrons》。1980 年出版《Mindstorms》，提出建构主义学习观。2016 年逝于缅因州。',
    bio_en: 'South African-born American mathematician and computer scientist, born in Pretoria in 1928. He took a doctorate in mathematics at the University of the Witwatersrand in 1952 and a second at Cambridge in 1960. He worked with Jean Piaget in Geneva from 1958 to 1963, then moved to MIT, where he served as co-director of the Artificial Intelligence Laboratory from 1967 to 1981 and founded the Epistemology and Learning Research Group, which grew into the MIT Media Lab. With Wally Feurzeig and Cynthia Solomon he co-invented the Logo programming language, and with Marvin Minsky he wrote Perceptrons (1969). Mindstorms (1980) set out his theory of constructionism. He died in Maine in 2016.',
    ideas_zh: ['建构主义学习理论', 'Logo 与海龟绘图', '「对象思考」与微型世界'],
    ideas_en: ['The theory of constructionism', 'Logo and Turtle graphics', '"Objects-to-think-with" and microworlds']
  },
  'rene-grousset': {
    name_en: 'René Grousset',
    name_zh: '勒内·格鲁塞',
    life: '1885–1952',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '历史学家、东方学家',
    role_en: 'Historian and orientalist',
    bio_zh: '法国历史学家与东方学家，1885 年生于加尔省，1952 年逝于巴黎。他长期主持吉美博物馆（Musée Guimet），是 20 世纪上半叶法国最重要的亚洲史研究者之一，著述涵盖中亚、蒙古、中国与远东。代表作《草原帝国》（L\'Empire des steppes，1939）首次把欧亚草原上的游牧政权作为一个连续整体来叙述，至今仍是突厥—蒙古史研究的参考点。',
    bio_en: 'French historian and orientalist, born in the Gard in 1885 and died in Paris in 1952. He long directed the Musée Guimet and was one of the leading French scholars of Asian history in the first half of the twentieth century, writing on Central Asia, the Mongols, China and the Far East. His major work, L\'Empire des steppes (The Empire of the Steppes, 1939), was the first to narrate the nomadic polities of the Eurasian steppe as one continuous whole, and remains a reference point in Turco-Mongol studies.',
    ideas_zh: ['以「草原帝国」框架整合欧亚游牧史', '吉美博物馆馆长', '中亚与蒙古史研究'],
    ideas_en: ['The "steppe empire" frame for Eurasian nomadic history', 'Director of the Musée Guimet', 'Scholarship on Central Asia and the Mongols']
  },
  'steven-levy': {
    name_en: 'Steven Levy',
    name_zh: '史蒂文·利维',
    life: '1951–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '科技记者、作家',
    role_en: 'Technology journalist and author',
    bio_zh: '美国科技记者与作家，1951 年生。他长期报道计算机与互联网文化，曾任《新闻周刊》《滚石》记者，后为《连线》（Wired）资深作者。1984 年出版的《黑客：计算机革命的英雄》首次系统记录黑客亚文化并提出「黑客伦理」，被视为该领域的奠基文本。另著有《Crypto》《In the Plex》（关于谷歌）与《Facebook: The Inside Story》。',
    bio_en: 'American technology journalist and author, born in 1951. A longtime reporter on computing and internet culture, he wrote for Newsweek and Rolling Stone before becoming a senior writer at Wired. His 1984 book Hackers: Heroes of the Computer Revolution was the first systematic account of hacker subculture and named the "hacker ethic"; it is regarded as a founding text of the field. His other books include Crypto, In the Plex (on Google) and Facebook: The Inside Story.',
    ideas_zh: ['记录并命名「黑客伦理」', '计算机与互联网文化史写作', '《连线》资深作者'],
    ideas_en: ['Documenting and naming the "hacker ethic"', 'Histories of computing and internet culture', 'Senior writer at Wired']
  },
  'ray-kurzweil': {
    name_en: 'Ray Kurzweil',
    name_zh: '雷·库兹韦尔',
    life: '1948–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '发明家、未来学家',
    role_en: 'Inventor and futurist',
    bio_zh: '美国发明家与未来学家，1948 年生于纽约，毕业于麻省理工学院。他早年开发出第一台 CCD 平板扫描仪与第一套商用语音识别系统，1999 年获美国国家技术奖章，并入选美国发明家名人堂。此后转向技术趋势预测，提出「加速回报定律」，主张信息技术按指数而非线性演进；2005 年出版的《奇点临近》把这一推演延伸到 2045 年前后「技术奇点」的假设。现为谷歌工程总监，参与自然语言处理相关研究。',
    bio_en: 'American inventor and futurist, born in New York in 1948 and educated at MIT. He developed one of the first CCD flatbed scanners and the first commercial speech-recognition system, received the National Medal of Technology in 1999 and was inducted into the National Inventors Hall of Fame. He later turned to forecasting, formulating the "law of accelerating returns" — the claim that information technology advances exponentially rather than linearly — and in The Singularity Is Near (2005) extended that argument to a hypothetical "technological singularity" around 2045. He is currently a director of engineering at Google, working on natural language processing.',
    ideas_zh: ['加速回报定律：信息技术按指数演进', '技术奇点：2045 年前后人机融合的假设', 'GNR：基因、纳米、机器人三大技术的汇合'],
    ideas_en: ['The law of accelerating returns: IT advances exponentially', 'The singularity: a hypothesis of human-machine merger around 2045', 'GNR: the convergence of genetics, nanotechnology and robotics']
  },
  'wang-xiaobo': {
    name_en: 'Wang Xiaobo',
    name_zh: '王小波',
    life: '1952–1997',
    nationality_zh: '中国',
    nationality_en: 'Chinese',
    role_zh: '作家',
    role_en: 'Writer',
    bio_zh: '中国作家，1952 年生于北京。早年赴云南插队，做过民办教师与工人；1978 年考入中国人民大学贸易经济系，毕业后赴美国匹兹堡大学取得硕士学位，回国后曾在北京大学、中国人民大学任教，随后辞职专事写作。1991 年《黄金时代》获第 13 届《联合报》文学奖中篇小说大奖。1997 年因心脏病猝然去世，此后其杂文与小说在大陆读书界持续引发「王小波现象」。杂文集《沉默的大多数》是他的随笔代表作。',
    bio_en: 'Chinese writer, born in Beijing in 1952. Sent to the countryside in Yunnan as a rusticated youth, he worked as a village teacher and a factory hand before entering the Renmin University of China in 1978 to study trade economics; he took a master\'s degree at the University of Pittsburgh, taught briefly at Peking and Renmin universities, then resigned to write full time. In 1991 his novella The Golden Age won the 13th United Daily News fiction prize. He died suddenly of a heart attack in 1997, and his essays and fiction have since sustained a lasting "Wang Xiaobo phenomenon" among mainland readers. The Silent Majority is his best-known essay collection.',
    ideas_zh: ['「沉默的大多数」：沉默本身是一种话语位置', '思维的乐趣：把独立思考当作生活必需品', '以常识与幽默对抗装腔作势的权威'],
    ideas_en: ['The "silent majority": silence itself as a discursive position', 'The pleasure of thinking: independent thought as a necessity of life', 'Common sense and humour against pompous authority']
  },
  'a-s-neill': {
    name_en: 'A. S. Neill',
    name_zh: 'A.S. 尼尔',
    life: '1883–1973',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '教育家、夏山学校创办者',
    role_en: 'Educator and founder of Summerhill School',
    bio_zh: '苏格兰教育家，1883 年生于苏格兰福法尔。做过教师与记者，后受弗洛伊德与精神分析影响，转向以情感健康为核心的教育观。1921 年在德国德累斯顿附近创办夏山学校，1927 年迁至英格兰萨福克郡莱斯顿，坚持学生自治、自由选课、不体罚。1960 年出版《夏山学校》，使其教育实验广为人知，成为进步教育与「自由学校」运动的重要文本。',
    bio_en: 'Scottish educator, born in Forfar, Scotland, in 1883. He worked as a teacher and journalist before turning, under the influence of Freud and psychoanalysis, to an educational view centred on emotional health. In 1921 he founded Summerhill School near Dresden, Germany, and moved it in 1927 to Leiston, Suffolk, where he insisted on pupil self-government, free attendance at lessons and no corporal punishment. Summerhill (1960) made the experiment widely known and became a key text of progressive and free-school education.',
    ideas_zh: ['儿童天性本不坏，问题行为源于成人强制与恐惧', '自由不等于放纵：在民主共同体内部的自由', '学生自治优于外部纪律', '教育应让孩子活出自己的人生'],
    ideas_en: ['Children are not naturally bad; problem behaviour stems from adult coercion and fear', 'Freedom is not license: freedom within a democratic community', 'Pupil self-government over external discipline', 'Education should let a child live his own life']
  },
  'aldous-huxley': {
    name_en: 'Aldous Huxley',
    name_zh: '奥尔德斯·赫胥黎',
    life: '1894–1963',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '小说家、散文家',
    role_en: 'Novelist and essayist',
    bio_zh: '英国小说家与散文家，1894 年生于萨里郡，出身学术世家（祖父为生物学家托马斯·赫胥黎）。早年因眼疾放弃医学，转攻文学，1920 年代以讽刺小说成名。1932 年出版《美丽新世界》，成为反乌托邦文学的经典；1958 年又以《重访美丽新世界》反思其预言。他后期转向神秘主义与意识研究，著有《知觉之门》（1954）等。1940 年代移居美国加州，1963 年去世。',
    bio_en: 'British novelist and essayist, born in Surrey in 1894 into an intellectual family (his grandfather was the biologist Thomas Henry Huxley). Eye trouble ended his plans for medicine and he turned to literature, making his name in the 1920s with satirical novels. Brave New World (1932) became a classic of dystopian fiction, and in Brave New World Revisited (1958) he reassessed its prophecy. He later turned to mysticism and the study of consciousness, writing The Doors of Perception (1954), among others. He moved to California in the 1940s and died in 1963.',
    ideas_zh: ['稳定与自由不可兼得：被设计的幸福以取消自由为代价', '舒适与快感可以成为比暴力更彻底的控制手段', '对技术进步保持警惕的自由主义批判'],
    ideas_en: ['Stability and freedom cannot both be maximised: engineered happiness costs freedom', 'Comfort and pleasure can be more thorough instruments of control than violence', 'A liberal critique wary of technological progress']
  },
  'richard-rhodes': {
    name_en: 'Richard Rhodes',
    name_zh: '理查德·罗兹',
    life: '1937–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家、历史学家',
    role_en: 'Writer and historian',
    bio_zh: '美国作家与历史学家，1937 年生于堪萨斯州堪萨斯城，曾任斯坦福大学国际安全与合作中心客座教授。1986 年出版《原子弹秘史》（The Making of the Atomic Bomb），获 1988 年普利策非虚构奖、1987 年美国国家图书奖与国家书评人协会奖，被视为核武器史与二十世纪物理学史的权威叙述。此后陆续写成《黑太阳：氢弹秘史》《愚蠢的兵工厂》《核弹之暮光》，合为核武器史四部曲。他并非科学家出身，其叙述以口述史与人物材料见长，也因弱于制度与工业组织分析而受到史学界批评。',
    bio_en: 'American writer and historian, born in Kansas City, Kansas, in 1937, and formerly a visiting professor at Stanford University Center for International Security and Cooperation. The Making of the Atomic Bomb (1986) won the 1988 Pulitzer Prize for General Nonfiction, the 1987 National Book Award for Nonfiction and the National Book Critics Circle Award, and is regarded as an authoritative account of nuclear weapons history and twentieth-century physics. He went on to write Dark Sun, Arsenals of Folly and The Twilight of the Bombs, forming a four-volume history of nuclear weapons. Not trained as a scientist, he works chiefly from oral histories and biographical material, and historians have criticised his relative neglect of institutional and industrial analysis.',
    ideas_zh: ['科学发现与工程实现是两个不同的问题，技术可行不等于历史必然', '大科学把知识共同体改造成国家机器内部的角色', '双重用途技术的责任归属是结构性问题，而非个人追悔'],
    ideas_en: ['Discovery and implementation are different problems; technical feasibility is not historical inevitability', 'Big science turned a community of knowledge into an actor inside the state', 'Accountability for dual-use technology is structural, not a matter of personal regret']
  },
  'frederick-p-brooks': {
    name_en: 'Frederick P. Brooks Jr.',
    name_zh: '弗雷德里克·布鲁克斯',
    life: '1931–2022',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '计算机科学家、软件工程奠基者',
    role_en: 'Computer scientist and founding figure of software engineering',
    bio_zh: '美国计算机科学家，1931 年生，2022 年去世。在 IBM 主持 System/360 系列与 OS/360 操作系统开发，被称为「IBM 360 系统之父」；后任北卡罗来纳大学教堂山分校计算机科学系创始系主任。1999 年获图灵奖。1975 年出版《人月神话》，提出布鲁克斯定律、概念完整性、第二系统效应，并在 1995 年增补的《没有银弹》中区分本质复杂性与偶然复杂性。该书被戏称为「软件工程的圣经」，是软件项目管理领域被引最多、也最常被反驳的经典。',
    bio_en: 'American computer scientist, born in 1931 and died in 2022. He led the development of IBM System/360 and its OS/360 operating system and is known as the father of the IBM 360; he later founded the computer science department at the University of North Carolina at Chapel Hill. He received the ACM Turing Award in 1999. The Mythical Man-Month (1975) introduced Brooks law, conceptual integrity and the second-system effect, and its 1995 addition No Silver Bullet distinguished essential from accidental complexity. Jokingly called the bible of software engineering, it remains among the most cited and most contested classics of software project management.',
    ideas_zh: ['人月是神话：人数与时间不可线性互换', '向延期项目加人只会使它更晚（布鲁克斯定律）', '概念完整性优先于功能数量', '本质复杂性不可消除，不存在银弹'],
    ideas_en: ['The man-month is a myth: people and time are not linearly interchangeable', 'Adding manpower to a late project makes it later (Brooks law)', 'Conceptual integrity outranks feature count', 'Essential complexity cannot be removed; there is no silver bullet']
  },
  'annie-dillard': {
    name_en: 'Annie Dillard',
    name_zh: '安妮·迪拉德',
    life: '1945–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '作家、诗人、散文家',
    role_en: 'Writer, poet and essayist',
    bio_zh: '美国作家，1945 年生于宾夕法尼亚州匹兹堡。1968 年以关于梭罗《瓦尔登湖》的论文毕业于弗吉尼亚霍林斯大学。1971 年一场几乎致命的肺炎之后，她在蓝山听客溪畔独居一年，写成《听客溪的朝圣》（Pilgrim at Tinker Creek，1974），29 岁凭此书获 1975 年普利策通用非虚构奖。她长期拒绝「自然文学作家」的标签，强调作品关心的是观看、意识与神义论，而非风物记录；另有诗集《兽皮上的记号》、散文集《教顽石开口》、回忆录《美国童年》与小说《梅特里一家》。曾任《哈泼市场》《大西洋》专栏作者，长期任教于卫斯理大学。',
    bio_en: 'American writer, born in Pittsburgh, Pennsylvania, in 1945. She graduated from Hollins University in Virginia in 1968 with a thesis on Thoreau\'s Walden. After a near-fatal bout of pneumonia in 1971 she spent a year alone beside Tinker Creek in the Blue Ridge Mountains, which produced Pilgrim at Tinker Creek (1974); at twenty-nine she won the 1975 Pulitzer Prize for General Nonfiction for it. She has consistently refused the label of nature writer, insisting that her subject is seeing, consciousness and theodicy rather than scenery. Other works include the poetry collection Tickets for a Prayer Wheel, the essay collection Teaching a Stone to Talk, the memoir An American Childhood and the novel The Maytrees. She wrote for Harper\'s Bazaar and The Atlantic and taught for many years at Wesleyan University.',
    ideas_zh: ['观看是需要训练的选择，不是被动接收；分心才是认知的主要障碍', '自然的丰饶与残酷出自同一套机制，美不是对残酷的补偿', '拒绝把自然拟人化或道德化，也拒绝把观察者放在世界之外', '苦难无法被解释，只能让问题保持在场，而不是换算成可以放下的结论'],
    ideas_en: ['Seeing is a choice that must be trained, not passive reception; distraction, not scarcity of information, is the main obstacle to knowing', 'Abundance and cruelty arise from the same machinery; beauty is not a compensation for cruelty', 'Refuse to personify or moralise nature, and refuse to place the observer outside the world', 'Suffering cannot be explained; the question should be kept present rather than converted into a conclusion one can set aside']
  },
  'cathy-oneil': {
    name_en: 'Cathy O\'Neil',
    name_zh: '凯西·奥尼尔',
    life: '',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '数学家、数据科学家、算法审计者',
    role_en: 'Mathematician, data scientist and algorithmic auditor',
    bio_zh: '美国数学家与数据科学家，哈佛大学数学博士，曾在巴纳德学院任教，后任 D. E. Shaw 对冲基金量化分析师、哥伦比亚大学新闻学院数据实践项目（Lede Program）主任。2008 年金融危机后对金融模型失望，参与「占领华尔街」运动，转向算法审计，创办 ORCAA。2016 年出版《算法霸权》（Weapons of Math Destruction），提出「数学杀伤性武器」三判据——不透明、规模化、毁灭性，列 2016 年美国国家图书奖非虚构长名单，2019 年获美国数学协会 Euler Book Prize。长期为 Bloomberg View 撰稿，运营博客 mathbabe.org。',
    bio_en: 'American mathematician and data scientist with a PhD in mathematics from Harvard. She taught at Barnard College, worked as a quant at the hedge fund D. E. Shaw, and directed the Lede Program in Data Practices at Columbia University Graduate School of Journalism. Disillusioned with financial models after the 2008 crisis, she joined Occupy Wall Street and moved into algorithmic auditing, later founding the audit firm ORCAA. Her 2016 book Weapons of Math Destruction introduced the three tests of a weapon of math destruction — opacity, scale and damage — was longlisted for the 2016 National Book Award for Nonfiction and won the 2019 Euler Book Prize of the Mathematical Association of America. She has written regularly for Bloomberg View and blogs at mathbabe.org.',
    ideas_zh: ['判断模型是否危险，看不透明、规模化、毁灭性三判据，而非算法复杂度', '模型不描述现实而是分配机会，预测通过反馈回路把自己变成结果', '公平难以量化，因此在以效率为目标的函数中被系统性排除', '问责与可申诉性是制度问题，不能靠模型自身的精度解决'],
    ideas_en: ['Judge a model by opacity, scale and damage, not by algorithmic sophistication', 'Models allocate opportunity rather than describe reality, and predictions turn themselves into outcomes through feedback loops', 'Fairness resists quantification and is therefore systematically excluded from objective functions built around efficiency', 'Accountability and appeal are institutional questions that accuracy alone cannot settle']
  },
  'ray-bradbury': {
    name_en: 'Ray Bradbury',
    name_zh: '雷·布拉德伯里',
    life: '1920–2012',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '小说家、诗人、编剧',
    role_en: 'Novelist, poet and screenwriter',
    bio_zh: '美国作家，1920 年生于伊利诺伊州沃基根，1943 年起成为职业写作者，2012 年卒于洛杉矶。代表作《火星编年史》（1950）与《华氏451》（1953），后者由 1951 年中篇《消防员》扩写而来，1953 年由 Ballantine Books 出版，先后获 1954 年美国艺术与文学学会文学奖、1954 年加州联邦俱乐部金奖、1984 年普罗米修斯名人堂奖与 2004 年回溯雨果奖。他晚年反复说明，《华氏451》写的不是政府审查，而是大众媒介与娱乐如何让文学阅读被边缘化——焚书的元凶是公众而非国家。另获 2000 年美国国家图书基金会卓越成就奖、2004 年美国国家艺术奖章与 2007 年普利策特别褒扬奖。',
    bio_en: 'American writer, born in Waukegan, Illinois, in 1920, a professional author from 1943 and died in Los Angeles in 2012. His best-known works are The Martian Chronicles (1950) and Fahrenheit 451 (1953), the latter expanded from the 1951 novella The Fireman and published by Ballantine Books in 1953; it received the 1954 American Academy of Arts and Letters Award in Literature, the 1954 Commonwealth Club of California Gold Medal, the 1984 Prometheus Hall of Fame Award and a 2004 Retro Hugo Award. In later years he insisted repeatedly that the novel was not about state censorship but about mass media and entertainment marginalising the reading of literature, and that the culprit was the public rather than the government. He also received the 2000 National Book Foundation Medal for Distinguished Contribution to American Letters, the 2004 National Medal of Arts and a 2007 Pulitzer Prize Special Citation.',
    ideas_zh: ['焚书不必从禁令开始：当阅读变得不必要，书会自己消失', '技术、大规模娱乐与群体压力足以完成审查，无需一纸法令', '删改有多个作者，每个群体都觉得自己有权撕掉一页', '被压缩以适应短注意力的文本，等于被提前烧过一次'],
    ideas_en: ['Book burning need not begin with a ban: once reading becomes unnecessary, books vanish on their own', 'Technology, mass entertainment and group pressure can accomplish censorship without any decree', 'Revision has many authors, and every group feels entitled to tear out a page', 'A text abridged for a shorter attention span has already been burned once']
  },
  'yang-jiang': {
    name_en: 'Yang Jiang',
    name_zh: '杨绛',
    life: '1911–2016',
    nationality_zh: '中国',
    nationality_en: 'Chinese',
    role_zh: '作家、文学翻译家、外国文学研究家',
    role_en: 'Writer, literary translator and scholar of foreign literature',
    bio_zh: '中国现代作家、文学翻译家，本名杨季康，祖籍江苏无锡，生于北京。1932 年毕业于苏州东吴大学，后入清华大学研究院，1935 年赴英法留学。长期在中国社会科学院文学研究所、外国文学研究所工作，为中国社会科学院荣誉学部委员。译有《堂吉诃德》《小癞子》《吉尔·布拉斯》等，著有散文集《干校六记》（1981）、《将饮茶》、《我们仨》，长篇小说《洗澡》及文学评论多种。1981 年由生活·读书·新知三联书店出版的《干校六记》以六篇白描短文记日常琐细，钱锺书在书前小引中称之为「大背景的小点缀，大故事的小穿插」。',
    bio_en: 'A modern Chinese writer and literary translator, born Yang Jikang in Beijing with family roots in Wuxi, Jiangsu. She graduated from Soochow University in 1932, pursued graduate study at Tsinghua and travelled to Britain and France in 1935. She spent much of her career at the Institute of Literature and the Institute of Foreign Literature of the Chinese Academy of Social Sciences, where she was made an honorary member of the Academic Division. Her translations include Don Quixote, Lazarillo de Tormes and Gil Blas; her own books include the essay collection Gan Xiao Liu Ji (1981), Jiang Yin Cha and We Three, the novel Baptism, and several volumes of literary criticism. Gan Xiao Liu Ji, published by SDX Joint Publishing in 1981, records small daily episodes in six plainly written essays; in a preface Qian Zhongshu called them small ornaments against a large backdrop, minor interpolations within a larger story.',
    ideas_zh: ['以白描与节制替代评价句，把判断交还读者', '「小点缀 / 大故事」：局部写准比整体虚构更诚实', '散文体例取法《浮生六记》，六篇各自独立又互成结构', '中译《堂吉诃德》等西班牙文学经典的译介'],
    ideas_en: ['Plain description and restraint in place of explicit judgement, leaving conclusions to the reader', 'Small ornament, large story: accuracy about a part over invention of a whole', 'A six-essay structure modelled on Shen Fu\'s Six Chapters of a Floating Life', 'Chinese translations of Spanish classics including Don Quixote']
  },

  'jacques-ranciere': {
    name_en: 'Jacques Rancière',
    name_zh: '雅克·朗西埃',
    life: '1940–',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '哲学家、政治与美学思想研究者',
    role_en: 'Philosopher of politics and aesthetics',
    bio_zh: '法国哲学家，1940 年生于法属阿尔及利亚阿尔及尔。曾受 Louis Althusser 指导并参与《读〈资本论〉》（Lire le Capital，1965）的写作，后因对 1968 年五月事件的判断分歧与 Althusser 公开决裂。长期任教于巴黎第八大学（Vincennes–Saint-Denis），现为该校荣誉退休哲学教授，并任欧洲研究生院（European Graduate School）哲学教授。研究横跨政治哲学、美学、历史哲学、教育哲学与电影。1987 年出版《无知的教师：智力解放五讲》（Le Maître ignorant），借 19 世纪教师 Joseph Jacotot 的普遍教学法提出「智力平等是前提而非目标」「讲解制造愚化」等论断，成为其后续政治与美学思想的起点。',
    bio_en: 'French philosopher, born in 1940 in Algiers, then French Algeria. A student of Louis Althusser, he contributed to Reading Capital (Lire le Capital, 1965) before breaking publicly with Althusser over their divergent readings of May 1968. He taught for many years at the University of Paris VIII: Vincennes–Saint-Denis, where he is now Emeritus Professor of Philosophy, and also holds a professorship in philosophy at the European Graduate School. His work ranges across political philosophy, aesthetics, the philosophy of history, the philosophy of education and cinema. In 1987 he published Le Maître ignorant, later translated as The Ignorant Schoolmaster, which draws on the nineteenth-century teacher Joseph Jacotot and his method of universal teaching to argue that intellectual equality is a presupposition rather than a goal and that explanation produces stultification. That argument became the point of departure for his later work on politics and aesthetics.',
    ideas_zh: ['智力平等是教学得以开始的前提，不是有待达成的目标', '「讲解」通过替学生拆解知识制造依赖，即所谓愚化', '无知的教师放弃讲解者的位置，把权威从内容转移到对注意力的组织', '从课堂权威推及可感者的分配与社会秩序'],
    ideas_en: ['Intellectual equality as the presupposition with which teaching begins, not a goal to be reached', 'Explanation that breaks knowledge down on a pupil’s behalf manufactures dependence, which he calls stultification', 'The ignorant schoolmaster vacates the position of explainer, shifting authority from content to the organisation of attention', 'Extending classroom authority into the distribution of the sensible and the social order']
  },

  'neal-stephenson': {
    name_en: 'Neal Stephenson',
    name_zh: '尼尔·斯蒂芬森',
    life: '1959–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '小说家、随笔作家',
    role_en: 'Novelist and essayist',
    bio_zh: '美国小说家，1959 年生于马里兰州，毕业于波士顿大学，主修物理学与地理学。1992 年以《雪崩》（Snow Crash）成名，此后作品横跨赛博朋克、历史小说与科技史，包括 Cryptonomicon、巴洛克循环与《七夏娃》等。1995 年出版 The Diamond Age（全名 The Diamond Age: Or, A Young Lady’s Illustrated Primer），以纳米技术时代一本可随读者实时改写自己的「插画启蒙读本」为轴，追问教育工程化、阶级与主体性；该书获 1996 年雨果奖最佳长篇小说与同年轨迹奖最佳长篇小说。他亦撰写关于计算、技术与科学的非虚构随笔。',
    bio_en: 'American novelist, born in Maryland in 1959 and educated at Boston University, where he studied physics and geography. He became widely known with Snow Crash (1992) and has since written across cyberpunk, historical fiction and the history of technology, including Cryptonomicon, the Baroque Cycle and Seveneves. The Diamond Age (1995), fully titled The Diamond Age: Or, A Young Lady’s Illustrated Primer, turns on an illustrated primer that rewrites itself in response to its reader in a nanotechnological age, and uses it to ask about the engineering of education, class and agency. It won the 1996 Hugo Award for Best Novel and the Locus Award for Best Novel in the same year. He has also written non-fiction essays on computing, technology and science.',
    ideas_zh: ['《钻石年代》把教育能否被工程化写成一条可追的制度线索', '自适应系统隐含理想用户画像，落到画像之外的人手里才暴露其价值观', '把技术设定推到极致，观察匮乏消失后新的稀缺在社会哪一层重新出现'],
    ideas_en: ['The Diamond Age treats the question of whether education can be engineered as an institutional thread rather than a gadget', 'Every adaptive system encodes an ideal user, and its values surface only when someone outside that model uses it', 'Pushing a technological premise to its extreme to see at which layer scarcity reappears once it has been abolished']
  },

  'aldo-leopold': {
    name_en: 'Aldo Leopold',
    name_zh: '奥尔多·利奥波德',
    life: '1887–1948',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '生态学家、林学家、自然资源管理者',
    role_en: 'Ecologist, forester and natural resource manager',
    bio_zh: '美国生态学家、林学家与自然资源管理者，1887 年生于艾奥瓦州伯灵顿，毕业于耶鲁大学森林系，长期任职于美国林务局（US Forest Service），后任威斯康星大学游戏管理（wildlife management）教授，被后世称为「生态伦理之父」。1935 年购得威斯康星河畔的废弃农场并带头恢复其生态，即后来所称的沙乡（Sand County）；其观察笔记与哲学论文身后由其子 Luna Leopold 编辑整理，1949 年由牛津大学出版社以 A Sand County Almanac 为名出版，其中「土地伦理」（The Land Ethic）一文主张把人类从土地共同体的征服者改造成普通成员，成为现代环境伦理的奠基文本之一。1948 年 4 月在赶赴邻居农场扑救山火时去世。其子女于 1982 年创立 Aldo Leopold Foundation（非营利机构），维护沙乡农场旧址。',
    bio_en: 'American ecologist, forester and natural-resource manager, born in Burlington, Iowa, in 1887 and educated in forestry at Yale. He spent much of his career with the US Forest Service and later held a chair in wildlife management at the University of Wisconsin; posterity knows him as a father of ecological ethics. In 1935 he bought a worn-out farm along the Wisconsin River and set about restoring its ecology, the place later known as Sand County. His field notes and philosophical essays were edited posthumously by his son Luna Leopold and published by Oxford University Press in 1949 as A Sand County Almanac, whose concluding essay The Land Ethic argues for converting humanity from conqueror of the land-community into a plain member of it, making the book a founding text of modern environmental ethics. He died in April 1948 while fighting a wildfire on a neighbour’s farm. His children founded the non-profit Aldo Leopold Foundation in 1982, which maintains the historic farmstead.',
    ideas_zh: ['土地伦理：正确与否的判准是生物群落的完整、稳定与美丽', '把人类从土地共同体的征服者改写为普通成员', '生态恢复需要长期田野观察，而非单一政策动作'],
    ideas_en: ['The land ethic: rightness is judged by the integrity, stability and beauty of the biotic community', 'Rewriting humanity from conqueror of the land-community into a plain member of it', 'Ecological restoration depends on long field observation, not single policy moves']
  },

  'david-deutsch': {
    name_en: 'David Deutsch',
    name_zh: '戴维·多伊奇',
    life: '1953–',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '物理学家、量子计算奠基人之一',
    role_en: 'Physicist and one of the founders of quantum computation',
    bio_zh: '英国物理学家，1953 年生于海法，先后就读于剑桥大学与牛津大学，现任牛津大学物理学教授、英国皇家学会会员，并为牛津大学量子计算中心成员。1985 年提出量子图灵机（quantum Turing machine），为量子计算奠定理论基础；1997 年出版 The Fabric of Reality，从进化、量子物理、知识与计算四条主线展开世界观，2011 年出版 The Beginning of Infinity，主张好解释的创造是宇宙间客观上无限的过程，乐观主义是关于知识创造本性的定理而非愿望。1998 年获英国物理学会狄拉克奖章（Dirac Medal and Prize），2022 年获基础物理学突破奖（Breakthrough Prize in Fundamental Physics）。',
    bio_en: 'British physicist, born in Haifa in 1953, educated at Cambridge and Oxford, where he is Professor of Physics, a Fellow of the Royal Society, and a member of the Centre for Quantum Computation. In 1985 he proposed the quantum Turing machine, laying the theoretical foundation of quantum computation. The Fabric of Reality (1997) set out his worldview across four strands—evolution, quantum physics, knowledge and computation—while The Beginning of Infinity (2011) argues that the creation of good explanations is an objectively infinite process in the universe and that optimism is a theorem about the nature of knowledge creation rather than a wish. He received the Dirac Medal and Prize of the Institute of Physics in 1998 and the Breakthrough Prize in Fundamental Physics in 2022.',
    ideas_zh: ['量子图灵机与量子计算的理论基础', '好解释的标准是难改动性（hard to vary）', '问题不可避免但原则上皆可解决：乐观主义是定理', '计算的普遍性推出解释力的无限性'],
    ideas_en: ['The quantum Turing machine and the theoretical basis of quantum computation', 'The criterion of a good explanation: being hard to vary', 'Problems are unavoidable yet solvable in principle: optimism as a theorem', 'Universality of computation entails unbounded explanatory reach']
  },

  'charles-c-mann': {
    name_en: 'Charles C. Mann',
    name_zh: '查尔斯·C·曼恩',
    life: '1955–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '科学记者、非虚构作家',
    role_en: 'Science journalist and non-fiction author',
    bio_zh: '美国科学记者与作家，1955 年生，长期为《科学》《大西洋月刊》《连线》担任特约编辑，并为《纽约时报》《华盛顿邮报》《史密森尼》《财富》等撰稿，曾三次入围美国国家杂志奖。2005 年出版 1491: New Revelations of the Americas Before Columbus，综合考古学、人类学与人口学的新证据，主张哥伦布抵达前的美洲并非原始荒野，而是原住民长期以火与农作塑造的景观；该书获 2006 年美国国家学院传播奖（National Academies Communication Award）年度最佳图书奖。2011 年出版续作 1493: Uncovering the New World Columbus Created，追踪哥伦布之后物种、疾病与人口的全球交换；另著有 The Wizard and the Prophet。中文版《1491：前哥伦布时代美洲启示录》由胡亦南译、中信出版社 2014 年出版。他亦曾获美国律师协会、美国物理学会、阿尔弗雷德·P·斯隆基金会与兰南基金会的写作奖项。',
    bio_en: 'American science journalist and author, born in 1955, a long-serving contributing editor at Science, The Atlantic Monthly and Wired, and a contributor to The New York Times, The Washington Post, Smithsonian and Fortune. He has been a three-time finalist for the National Magazine Award. His 1491: New Revelations of the Americas Before Columbus (2005) synthesised new evidence from archaeology, anthropology and demography to argue that the pre-Columbian Americas were not a pristine wilderness but a landscape shaped over millennia by Indigenous fire and cultivation; it won the 2006 National Academies Communication Award for best book of the year. 1493: Uncovering the New World Columbus Created (2011) followed the global exchange of species, disease and populations after Columbus, and he also wrote The Wizard and the Prophet. The Chinese edition of 1491, translated by Hu Yinan, was published by CITIC Press in 2014. He has received writing awards from the American Bar Association, the American Institute of Physics, the Alfred P. Sloan Foundation and the Lannan Foundation.',
    ideas_zh: ['所谓原始荒野往往是人口崩溃之后的次生景观，观测时点会污染自然基线', '原住民是塑造美洲环境的关键种，用火与土壤改良长期经营景观', '人口估计的可靠性取决于推算链的每一个假设，而非最终数字'],
    ideas_en: ['A supposedly pristine wilderness is often a secondary landscape after demographic collapse; the moment of observation contaminates the natural baseline', 'Indigenous peoples were a keystone species shaping American environments through fire and soil management over millennia', 'The reliability of a population estimate rests on every assumption in its chain of inference, not on the final number']
  },

  'charles-perrow': {
    name_en: 'Charles Perrow',
    name_zh: '查尔斯·佩罗',
    life: '1925–2019',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '组织社会学家、耶鲁大学社会学教授',
    role_en: 'Organizational sociologist and professor of sociology at Yale',
    bio_zh: '美国社会学家（1925–2019），组织社会学的重要人物，先后任教于密歇根大学、匹兹堡大学、威斯康星大学麦迪逊分校与纽约州立大学石溪分校，1981 年加入耶鲁大学，2000 年荣休，2004 年曾任斯坦福大学国际安全与合作中心访问教授。1972 年出版 Complex Organizations: A Critical Essay，为其引用最广的著作。1984 年由 Basic Books 出版 Normal Accidents: Living with High-Risk Technologies，以 1979 年三哩岛事故为起点，提出以「复杂/线性交互」与「紧/松耦合」两个维度解释高风险系统的结构，断言在复杂且紧耦合、兼具灾难潜势的系统中，多重故障的意外组合不可避免，即「正常事故」；1999 年 Princeton University Press 更新版增补博帕尔、切尔诺贝利与挑战者号的后记。2007 年另著 The Next Catastrophe，把分析扩展到自然灾害与关键基础设施的集中化风险。中文版《高风险技术与“正常”事故》1988 年由科学技术文献出版社出版，译者署名「寒窗」。',
    bio_en: 'American sociologist (1925–2019) and a leading figure in organizational sociology. He taught at the University of Michigan, the University of Pittsburgh, the University of Wisconsin–Madison and SUNY Stony Brook before joining Yale University in 1981, where he became emeritus in 2000; in 2004 he was a visiting professor at Stanford University’s Center for International Security and Cooperation. Complex Organizations: A Critical Essay (1972) remains his most widely cited work. Normal Accidents: Living with High-Risk Technologies (Basic Books, 1984) took the 1979 Three Mile Island accident as its point of departure and proposed two dimensions—complex versus linear interactions and tight versus loose coupling—to explain the structure of high-risk systems, arguing that in complex, tightly coupled systems with catastrophic potential, unforeseen combinations of multiple failures are inevitable, which he called normal accidents. Princeton University Press issued an updated edition in 1999 with an afterword on Bhopal, Chernobyl and Challenger. The Next Catastrophe (2007) extended the analysis to natural disasters and the risks of concentrated critical infrastructure. A Chinese translation appeared in 1988 from Scientific and Technical Documents Press under the collective translator name Han Chuang.',
    ideas_zh: ['正常事故：复杂且紧耦合系统中的事故是结构的正常产出，不是偶发的人为失误', '以复杂/线性交互与紧/松耦合两维构建风险坐标，先问故障能否被隔离', '安全冗余会提高复杂度、稀释责任并推高生产压力，反而制造新的事故类别', '重大事故的归因应从追责个人转向组织结构与管理条件'],
    ideas_en: ['Normal accidents: in complex, tightly coupled systems accidents are the normal output of structure rather than sporadic human error', 'A risk coordinate built from complex/linear interactions and tight/loose coupling—first ask whether a fault can be isolated', 'Safety redundancy increases complexity, dilutes responsibility and raises production pressure, creating new categories of accident', 'Attribution for major accidents should shift from blaming individuals to organisational structure and management conditions']
  },

  'frank-herbert': {
    name_en: 'Frank Herbert',
    name_zh: '弗兰克·赫伯特',
    life: '1920–1986',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '科幻小说家、记者、生态顾问',
    role_en: 'Science-fiction author, journalist and ecological consultant',
    bio_zh: '美国科幻作家，1920 年 10 月 8 日生于华盛顿州塔科马，1986 年 2 月 11 日卒于威斯康星州麦迪逊。早年做过报纸记者、摄影师、书评人与演讲撰稿人，也担任过社会与生态顾问，1972 年底转为全职小说创作。1963 年起在 Analog 杂志以 Dune World 与 Prophet of Dune 两段连载《沙丘》，书稿曾被近二十家出版社退稿，最终由以汽车维修手册为主业的 Chilton Book Company 于 1965 年出版；该书获 1965 年度星云奖最佳长篇，并与罗杰·泽拉兹尼《不朽》并列 1966 年雨果奖最佳长篇，此后写出五部续集。他的作品把生态学、宗教、政治与权力放在同一套系统里考察，较早向大众普及 ecology 与 systems thinking，也反复警惕人对魅力型领袖的盲从；英文维基作者条目把这一关切概括为「对领导力与权力滥用的关注」，并引述「权力吸引病态人格」。中文版《沙丘》以四川科学技术出版社 2006 年顾备译本流传最广。',
    bio_en: 'American science-fiction author, born 8 October 1920 in Tacoma, Washington, and died 11 February 1986 in Madison, Wisconsin. He worked as a newspaper journalist, photographer, book reviewer and speechwriter, and as a social and ecological consultant, before becoming a full-time fiction writer at the end of 1972. Dune appeared in Analog as two serials, Dune World and Prophet of Dune, from 1963, was rejected by nearly twenty publishers, and was finally published in 1965 by Chilton Book Company, a house known mainly for automobile repair manuals. It won the 1965 Nebula Award for Best Novel and shared the 1966 Hugo Award for Best Novel with Roger Zelazny, and Herbert went on to write five sequels. His work examines ecology, religion, politics and power as one system, helped popularise ecological and systems thinking, and returns repeatedly to the human tendency to submit to charismatic leaders; the Wikipedia article on him frames this as a concern with leadership and quotes "Power attracts pathological personalities". The most widely circulated Chinese translation is Gu Bei’s 2006 edition from Sichuan Science and Technology Press.',
    ideas_zh: ['把信仰、稀缺资源与解释权当作一套统治基础设施来写：救世主是长期培育出来的产品，而非天降的希望', '以生态与长时段系统思维替代技术奇观，让水、沙虫与香料成为真正决定政治选择的变量', '反复警告对魅力型领袖与「绝对正确」的服从：权力吸引病态人格，而不加追问的追随者会把领袖的错误成倍放大'],
    ideas_en: ['Treating belief, a scarce resource and interpretive authority as one infrastructure of rule, with the messiah as a long-cultivated product rather than a heaven-sent hope', 'Replacing technological spectacle with ecological and long-term systems thinking, so that water, sandworms and spice become the variables that actually decide political choices', 'A repeated warning against submission to charismatic and supposedly infallible leaders: power attracts pathological personalities, and unquestioning followers multiply a leader’s errors']
  },

  'pierre-bourdieu': {
    name_en: 'Pierre Bourdieu & Jean-Claude Passeron',
    name_zh: '皮埃尔·布尔迪厄、让-克洛德·帕斯隆',
    life: '1930–2002 / 1930–',
    nationality_zh: '法国',
    nationality_en: 'French',
    role_zh: '社会学家、教育社会学家、认识论学者',
    role_en: 'Sociologists of education, culture and epistemology',
    bio_zh: '法国社会学家皮埃尔·布尔迪厄（Pierre Bourdieu，1930 年 8 月 1 日生于登甘，2002 年 1 月 23 日卒于巴黎）与让-克洛德·帕斯隆（Jean-Claude Passeron，1930 年 11 月 26 日生于尼斯）。布尔迪厄就读巴黎高等师范学院，1964 年起任高等研究实践学院（后为 EHESS）研究主任，1981 年起任法兰西公学院社会学讲席，1968 年接掌欧洲社会学中心，1975 年创办《社会科学研究丛刊》（Actes de la recherche en sciences sociales）；帕斯隆为哲学教师资格获得者，先后任教于南特大学与万塞讷大学中心并创建其社会学系，1981 年当选 EHESS 研究主任。二人在欧洲社会学中心相识后合作开展法国高等教育的实证研究，1964 年合著《继承人》（Les Héritiers），1970 年合著《再生产：一种教育系统理论的要点》（La Reproduction），法文维基称两书为教育社会学领域「留下时代印记」的著作。布尔迪厄后来以惯习、资本、场域与符号暴力这一组概念深化文化再生产分析；其英文维基条目明确把正规教育列为社会与文化再生产「最典型的例子」，并强调惯习并非决定论。中文版《再生产》由邢克超译、商务印书馆 2002 年 12 月出版。',
    bio_en: 'The French sociologists Pierre Bourdieu (born 1 August 1930 in Denguin, died 23 January 2002 in Paris) and Jean-Claude Passeron (born 26 November 1930 in Nice). Bourdieu studied at the École Normale Supérieure, became a director of studies at the École pratique des hautes études (later EHESS) in 1964 and took the Chair of Sociology at the Collège de France in 1981; he took over the Centre de Sociologie Européenne in 1968 and founded the journal Actes de la recherche en sciences sociales in 1975. Passeron, an agrégé in philosophy, taught at the University of Nantes and at Vincennes, where he founded the sociology department, and was elected a director of studies at EHESS in 1981. Meeting at the Centre de Sociologie Européenne, the two undertook an empirical research programme on French higher education and co-authored Les Héritiers (1964) and La Reproduction. Éléments pour une théorie du système d’enseignement (1970); the French Wikipedia article calls the pair works that made their mark on the sociology of education. Bourdieu later deepened the analysis of cultural reproduction through habitus, capital, field and symbolic violence. His English Wikipedia article names formal education the key example of social and cultural reproduction, while stressing that habitus is not deterministic. The Chinese edition of La Reproduction, translated by Xing Kechao, was published by The Commercial Press in December 2002.',
    ideas_zh: ['教育行动的双重专断性：授权的来源与所传递的文化内容都是任意的，学校只需让这个前提不被追问', '符号暴力与误识：被支配者只能用支配者提供的范畴理解自身，于是把阶层结构读成天赋与努力，并主动承认秩序', '家庭长期积累的文化资本被学校当作中性能力测量并兑换成文凭，看似按天赋分配，实为继承的另一种记账方式', '再生产命题可被反驳：抵制理论以学生主动制造的反学校文化质疑其结构决定论，布尔迪厄后期以惯习、场域与策略试图超越结构与能动性的二分'],
    ideas_en: ['The double arbitrariness of pedagogical action: both the delegation of authority and the cultural content transmitted are arbitrary; the school need only keep that premise from being questioned', 'Symbolic violence and misrecognition: the dominated have only the dominant’s categories with which to understand themselves, so they read class structure as talent and effort and consent to the order', 'Cultural capital accumulated in the family is measured by the school as neutral ability and exchanged for credentials; what looks like distribution by talent is another accounting of inheritance', 'The reproduction thesis is refutable: resistance theory answers with pupils who actively produce counter-school culture, and Bourdieu’s later vocabulary of habitus, field and strategy sought to transcend the opposition of structure and agency']
  },
  'shi-tiesheng': {
    name_en: 'Shi Tiesheng',
    name_zh: '史铁生',
    life: '1951–2010',
    nationality_zh: '中国',
    nationality_en: 'Chinese',
    role_zh: '作家、散文家',
    role_en: 'Writer and essayist',
    bio_zh: '中国当代作家、散文家，1951 年生于北京，1969 年赴陕西延安插队，1972 年因病双腿瘫痪回京，此后长期与疾病相伴，2010 年 12 月 31 日逝世。他的散文《我与地坛》1991 年首发于《上海文学》，第一、二节后被收入人民教育出版社高中语文教材，被视为二十世纪中国散文的代表文本之一；另有中篇小说《我的遥远的清平湾》、散文集《病隙碎笔》、长篇小说《务虚笔记》、短篇集《命若琴弦》等。他2002 年获华语文学传媒大奖年度杰出成就奖。其写作以对残疾、死亡、母爱与信仰的持续追问见长，拒绝把苦难兑换成廉价的意义，在当代中文世界里建立起一种诚实而克制的思想性散文。',
    bio_en: 'Chinese writer and essayist, born in Beijing in 1951. He was sent to rural Shaanxi in 1969 and returned to Beijing in 1972 after an illness left him paralysed from the waist down; he lived with disability until his death on 31 December 2010. His extended essay I and the Temple of Earth first appeared in the literary journal Shanghai Literature in 1991; its first two sections were later included in the People’s Education Press high-school Chinese curriculum, and the work is regarded as one of the representative Chinese prose texts of the twentieth century. Other works include the novella My Distant Qingping Bay, the essay collection Fragments of Illness, the novel Notes on the Void and the story collection If String Breaks. He received the 2002 Chinese Media Literature Award for outstanding achievement. His writing persists in questioning disability, death, motherhood and faith, refusing to convert suffering into cheap consolation.',
    ideas_zh: ['苦难本身不自带意义，意义来自人对苦难的注视与言说，把不幸说成「财富」是懒惰', '死亡作为尺度：既然它不会失约，当下就不是倒计时而是可支配的自由', '理解总在失去之后才到来，这份迟到构成亲情最沉的伦理重量', '接纳人的有限性而非否认它，是自由与写作的起点'],
    ideas_en: ['Suffering carries no inherent meaning; meaning is built in the act of attending to it', 'Death as a measure: since it will not miss its appointment, the present is freedom rather than a countdown', 'Understanding arrives after loss, and that lateness is the heaviest ethical weight of kinship', 'Freedom and writing begin by accepting human finitude rather than denying it']
  },
  'kevin-kelly': {
    name_en: 'Kevin Kelly',
    name_zh: '凯文·凯利',
    life: '1952–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '科技作家、编辑、摄影家',
    role_en: 'Technology writer, editor and photographer',
    bio_zh: '美国科技作家与编辑，1952 年生，《连线》（Wired）杂志创始执行编辑，长期为《纽约时报》《经济学人》等撰稿。1994 年出版《失控：机器、社会与经济世界的新生物学》，以蜂群、蚁群、神经网络、免疫系统与市场为材料，提出智能从大量简单个体的局部互动中涌现、而非由中央设计的论点；该书英文版有独立维基百科条目，豆瓣中文版评分 8.6（逾 1.7 万人评价），《出版人周刊》称其为「拓展心智的探索」，《技术评论》亦撰长评。他后来出版《科技想要什么》《必然》，合称「KK 三部曲」，持续以涌现、共同演化与去中心化为主线讨论技术走向。《失控》被列为电影《黑客帝国》主演开拍前的必读书之一，其蜂群思维与预测也对互联网与人工智能的后来发展产生广泛影响；批评者则指其技术乌托邦立场遮蔽了权力与政治问题。',
    bio_en: 'American technology writer and editor, born in 1952 and a founding executive editor of Wired magazine. His 1994 book Out of Control: The New Biology of Machines, Social Systems, and the Economic World drew on bee colonies, ant nests, neural networks, immune systems and markets to argue that intelligence emerges from local interactions among many simple agents rather than from central design. The book has a standalone Wikipedia article; its Chinese edition scores 8.6 on Douban with over 17,000 ratings, and Publishers Weekly called it a "mind-expanding exploration" while MIT Technology Review ran a sustained review. He later published What Technology Wants and The Inevitable, forming the "KK trilogy", and has continued to write about emergence, co-evolution and decentralisation. Out of Control was among the books given to Keanu Reeves before filming The Matrix, and its ideas on hive mind and emergence have widely influenced thinking about the internet and artificial intelligence; critics argue its techno-utopian framing obscures questions of power and politics.',
    ideas_zh: ['涌现优先于设计：复杂系统的秩序自下而上长出，不来自全知的中心', '失控是一种更高级的控制：设定简单规则、释放演化、接受不可预测的后果', '共同演化与共生：封闭而追求纯粹的系统脆弱，相互塑造才有韧性', '框架可被反驳：把自组织当作普适隐喻，可能遮蔽「谁在设定规则」的政治问题'],
    ideas_en: ['Emergence precedes design: order in complex systems grows from below, not from an omniscient centre', 'Losing control can be a higher form of control: set simple rules, release evolution, accept unpredictable outcomes', 'Co-evolution and symbiosis: closed systems seeking purity are fragile; mutual shaping builds resilience', 'The framework is refutable: treating self-organisation as a universal metaphor can hide the political question of who sets the rules']
  },

  'rainer-maria-rilke': {
    name_en: 'Rainer Maria Rilke',
    name_zh: '莱纳·马利亚·里尔克',
    life: '1875–1926',
    nationality_zh: '奥地利',
    nationality_en: 'Austrian',
    role_zh: '诗人、作家',
    role_en: 'Poet and writer',
    bio_zh: '奥地利诗人、小说家，1875 年生于布拉格，1926 年逝世于瑞士瓦莱。自视为「欧洲诗人」，一生辗转布拉格、柏林、巴黎、俄国与瑞士，因在巴黎自学的法语写作与 1912 年前往俄国、拜访马孔科娃而转向一种近乎宗教性的写作姿态。代表作有《杜伊诺哀歌》《给一个青年诗人的十封信》《马尔特·劳里兹·布里格随笔》。《给一个青年诗人的十封信》是他 1903—1908 年写给维也纳青年军官卡普斯的十封回信，1929 年由卡普斯整理出版，在英文维基百科有独立条目，Goodreads 评分 4.26、逾 13 万人评分，中译本《给一个青年诗人的十封信》由冯至翻译、豆瓣评分 9.0、逾 6900 人评价，茨威格、冯至、北岛等均有高度评价。他常被视为二十世纪德语文学最重要的诗人之一，其诗学核心是「向内走」与「忍耐」，即要求创作者不依赖外部评判、而从自身的必要性中生长出作品。批评者则指出他的美学姿态回避了具体的社会与经济条件，且带有神秘主义与性别观念的局限。',
    bio_en: 'Austrian poet and novelist, born in Prague in 1875 and dead in Valais, Switzerland, in 1926. He regarded himself as a "European poet" and moved between Prague, Berlin, Paris, Russia and Switzerland; the decision to write in self-taught French and the 1912 journey to Russia and to Marina Tsvetaeva mark his turn toward an almost religious attitude to writing. His major works include the Duino Elegies, Letters to a Young Poet and the semi-autobiographical The Notebooks of Malte Laurids Brigge. Letters to a Young Poet collects ten replies Rilke wrote between 1903 and 1908 to the Viennese junior officer Franz Xaver Kappus, who had asked him to judge his poems and to advise him on a literary career; Kappus assembled and published them in 1929. The book has a standalone English Wikipedia article, a Goodreads score of 4.26 from over 130,000 ratings, and a Chinese translation by Feng Zhi scoring 9.0 on Douban with over 6,900 ratings; praise came from Zweig, Feng Zhi and Bei Dao alike. He is widely regarded as one of the most important German-language poets of the twentieth century, and the core of his poetics is the injunction to go inward and endure — to let work grow from one\'s own necessity rather than from external judgement. Critics note that his aesthetic stance evades concrete social and economic conditions, and that it carries a strain of mysticism and limiting ideas about gender.',
    ideas_zh: ['没有人能给你建议，只有向内走这一条路：外部评价只能制造依赖，不能产生作品', '忍耐是创作的前置条件：艺术与理解都需要「向内挖」的漫长过程，而非立刻求得的答案', '被讨厌的勇气：真正的成熟是对自我诚实，而不是让所有人满意', '可被反驳之处：把灵性姿态当作唯一路径，可能回避了具体的社会条件与历史处境'],
    ideas_en: ['Nobody can advise you; there is only one way — go into yourself, because external judgement only produces dependence', 'Patience is a precondition of art: understanding and making both require a long inward excavation rather than a quickly available answer', 'The courage to be disliked: maturity means honesty with oneself rather than universal approval', 'Refutable: treating spiritual attunement as the only path can sidestep concrete social conditions and historical context']
  },

  'daniel-willingham': {
    name_en: 'Daniel T. Willingham',
    name_zh: '丹尼尔·T·威林厄姆',
    life: '1963–',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '认知心理学家、弗吉尼亚大学教授',
    role_en: 'Cognitive psychologist and professor at the University of Virginia',
    bio_zh: '美国认知心理学家，1983 年杜克大学本科毕业，1990 年获哈佛大学认知心理学博士学位，1992 年起任教于弗吉尼亚大学心理学系。他在《美国教育家》杂志长期撰写「Ask the Cognitive Scientist」专栏，把实验认知科学的结论翻译成教师与家长可直接使用的判断。2009 年出版《为什么学生不喜欢上学？》，把认知科学提炼为九条教学原则，指出大脑并非为「思考」而设计、工作记忆容量极为有限、事实性知识先于思维技能、「学习风格」并不存在、智力可以改变；该书英文原版由 Jossey-Bass 出版，Goodreads 评分 4.04、逾 6000 人评分，中译本《为什么学生不喜欢上学？》豆瓣评分 9.2、逾 3000 人评价，《华尔街日报》撰长评称其结论同样适用于课堂之外的读者。他的研究重心在 2000 年后由学习与记忆的脑机制转向认知心理学在基础教育中的实际应用。',
    bio_en: 'American cognitive psychologist. He took his B.A. at Duke University in 1983, earned his Ph.D. in cognitive psychology from Harvard in 1990, and has taught in the psychology department of the University of Virginia since 1992. He wrote the long-running "Ask the Cognitive Scientist" column in American Educator, translating experimental cognitive science into judgements teachers and parents can act on. His 2009 book Why Don\'t Students Like School? distils that research into nine principles, arguing that the mind is not designed for thinking, that working memory is severely limited, that factual knowledge precedes thinking skills, that "learning styles" do not exist and that intelligence is malleable. The English original was published by Jossey-Bass, scores 4.04 on Goodreads from more than 6,000 ratings, and its Chinese edition scores 9.2 on Douban with over 3,000 ratings; the Wall Street Journal ran a review noting that Willingham\'s answers apply as well outside the classroom. Since around 2000 his research has shifted from the brain basis of learning and memory to the application of cognitive science in K-12 education.',
    ideas_zh: ['大脑不是为了思考而设计的：默认状态是避免思考，因此「走神」不是意志薄弱而是节能', '工作记忆是硬约束：思考的瓶颈是同时可处理的项数，而不是智力高低', '事实先于思维技能：没有背景知识，所谓「批判性思维」只是空中楼阁', '可被反驳之处：把实验室认知科学直接迁移到课堂，效果证据并不一致，本书本身也承认这些原则需要专业判断'],
    ideas_en: ['The mind is not designed for thinking: avoiding thought is the default, so distraction is energy-saving rather than weakness of will', 'Working memory is a hard constraint: the bottleneck on thinking is how many items can be processed at once, not how intelligent one is', 'Facts come before thinking skills: without background knowledge, "critical thinking" is an empty structure', 'Refutable: transferring laboratory cognitive science straight into classrooms has produced inconsistent effect evidence, and the book itself concedes that its principles require professional judgement']
  }
,

  'hubert-dreyfus': {
    name_en: 'Hubert L. Dreyfus',
    name_zh: '休伯特·德雷福斯',
    life: '1929–2017',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '哲学家、加利福尼亚大学伯克利分校哲学教授',
    role_en: 'Philosopher and professor emeritus at UC Berkeley',
    bio_zh: '美国哲学家，1929 年 10 月 15 日生于印第安纳州特雷霍特，2017 年 4 月 22 日卒于伯克利。他本科在哈佛主修物理，听逻辑学家 C·I·刘易斯一节课后转向哲学，1951 至 1964 年间在哈佛取得学士、硕士与哲学博士学位，其间赴弗赖堡随海德格尔研究、在鲁汶研究胡塞尔档案，1964 年以《胡塞尔的知觉现象学》获博士学位。1964 年起他在麻省理工学院任哲学讲师，1965 年受兰德公司委托撰写《炼金术与人工智能》，系统攻击早期 AI 研究的哲学预设；1972 年扩展为《计算机不能做什么：人工智能的极限》（1992 年麻省理工出版社出增订版 What Computers Still Cannot Do 并加新序），此书在英语世界至少被译成十种语言，是他在公共领域的成名作。他 1968 年起任教于伯克利分校近五十年，以对海德格尔、福柯、梅洛-庞蒂、克尔凯郭尔的系统阐释闻名（被戏称为 Dreydegger），代表作另有《在场与在场者》《心灵超越机器》《所有的光辉》。他的批判在若干处被后来的连接主义与深度学习部分推翻，他在 1992 年新序中对此作了自我修正。',
    bio_en: 'American philosopher, born in Terre Haute, Indiana on 15 October 1929 and dead in Berkeley on 22 April 2017. He entered Harvard as a physics major and switched to philosophy after hearing a lecture by the logician C. I. Lewis, taking his BA, MA and PhD there between 1951 and 1964, with a period in Freiburg studying under Heidegger and a Fulbright year in the Husserl Archives at Louvain; his 1964 dissertation was on Husserl and perception. He taught at MIT from 1964, and in 1965 the RAND Corporation commissioned him to write Alchemy and Artificial Intelligence, a systematic attack on the philosophical presuppositions of early AI. That report became What Computers Cannot Do in 1972 (revised and republished by MIT Press in 1992 as What Computers Still Cannot Do, with a new introduction), translated into at least ten languages and the work that made him publicly known. He taught at Berkeley for nearly fifty years from 1968 and became famous for his systematic readings of Heidegger, Foucault, Merleau-Ponty and Kierkegaard, earning the nickname Dreydegger; other books include Being-in-the-World, Mind over Machine and All Things Shining. Parts of his critique were later overturned by connectionism and deep learning, a correction he acknowledged himself in the 1992 preface.',
    ideas_zh: [
      '智能并不依赖符号操作：人的专业技能依赖尚未被充分理解的非形式化、无意识过程',
      '「知道如何」与「知道什么」的分野：能被逐步复述的求解，不等于在具体处境中行事的技能',
      'AI 的四项隐含假设：生物学、心理学、认识论与本体论假设，任何一项不成立，通用机器就只是空想',
      '第一步谬误：把某个特例上的成功当成通往通用智能的必然台阶，以此替代实证检验',
      '可被反驳之处：把形式化的失败归因于哲学前提过于草率，连接主义与深度学习的后来兴起部分推翻了其判断'
    ],
    ideas_en: [
      'Intelligence does not rest on symbolic manipulation: human expertise depends on processes that remain non-formal and largely unconscious',
      'Knowing how against knowing that: a solution you can recite step by step is not the same as a skill exercised in a concrete situation',
      'Four hidden assumptions behind AI: the biological, psychological, epistemological and ontological ones, any of which collapses the project of a general machine',
      'The first-step fallacy: reading a success on one special case as the inevitable rung on the ladder towards general intelligence',
      'Refutable: blaming philosophy for the failure of formalisation was too convenient, and connectionism and deep learning later overturned part of the argument'
    ],
  },

  'jorge-luis-borges': {
    name_en: 'Jorge Luis Borges',
    name_zh: '豪尔赫·路易斯·博尔赫斯',
    life: '1899–1986',
    nationality_zh: '阿根廷',
    nationality_en: 'Argentine',
    role_zh: '作家、诗人、翻译家，阿根廷国立图书馆馆长',
    role_en: 'Writer, poet and translator; director of the National Library of Argentina',
    bio_zh: '阿根廷作家、诗人与翻译家，1899 年 8 月 24 日生于布宜诺斯艾利斯，1986 年 6 月 14 日卒于日内瓦。祖父是英国血统，家庭在他幼年便让他同时浸淫英语与西班牙语；第一次世界大战期间他随家人在欧洲长大，早年在巴黎接触象征主义并与之决裂。1923 年他自费出版第一部诗集《布宜诺斯艾利斯激情》，1935 年出版第一部短篇小说集《恶棍列传》，1944 年以《虚构集》统名出版《小径分岔的花园》与《杜撰集》两部而声名大噪，1956 年增订版加入《结局》《凤凰教派》《南方》。他长期在布宜诺斯艾利斯市立图书馆任职，馆藏与目录经验直接进入《巴别图书馆》等作品；1955 年出任阿根廷国立图书馆馆长。1950 年代起视力急剧衰退直至失明，他靠记忆与口述继续写作，由亲友代笔。他的作品深刻影响了余华、马原、残雪、苏童、格非等中国先锋派作家，被视为魔幻现实主义文学的重要源头。1961 年他与塞缪尔·贝克特分享国际出版者奖（Prix Formentor），《世界报》将《虚构集》列入「20 世纪百书」；他终身未获诺贝尔文学奖，1982 年马尔克斯领奖时曾公开表示不理解为何不授予他。',
    bio_en: 'Argentine writer, poet and translator, born in Buenos Aires on 24 August 1899 and dead in Geneva on 14 June 1986. His grandfather was of British descent and the family had him reading in two languages from early childhood; he spent his childhood in Europe during the First World War and encountered the Symbolists in Paris, only to break with them. He self-published his first book of poems, Veinte poemas para ser leidos en el Avellaneda, in 1923 and his first story collection, Los vagabundos, in 1935; Ficciones, which united The Garden of Forking Paths with Artificios in 1944, made him internationally known, and the 1956 edition added The End, The Sect of the Phoenix and The South. He worked for years in the municipal libraries of Buenos Aires, an experience of catalogues and shelves that fed directly into The Library of Babel, and in 1955 became director of the National Library of Argentina. His sight failed sharply through the 1950s until he was blind, and he continued writing from memory with friends as amanuenses. His work shaped the Chinese avant-garde from Yu Hua and Ma Yuan to Can Xue, Su Tong and Ge Fei, and he is widely treated as a founding source of magical realism. In 1961 he shared the Prix Formentor with Samuel Beckett, and Le Monde included Ficciones among its books of the century. He never received the Nobel Prize; when Garcia Marquez accepted it in 1982 he said publicly that he still did not understand why it had not gone to Borges.',
    ideas_zh: [
      '取消现实与虚构的二元对立：虚构不是现实的摹本，而是认识现实的必要条件',
      '无限的可数化：有限的符号与组合足以生成一个无限的文本宇宙',
      '记忆与理解的分离：博闻强记的富内斯记得一切，却无法归纳、无法思考',
      '作者与文本的解耦：同一串字词由不同作者写出，就成为不同的作品',
      '可被反驳之处：批评者认为他把智性游戏当作避难所，回避了阿根廷二十世纪的政治暴力与历史创伤'
    ],
    ideas_en: [
      'Cancelling the binary between reality and fiction: invention is not a copy of the world but a condition for grasping it',
      'Making infinity countable: a finite set of symbols and combinations generates an unbounded universe of texts',
      'Separating memory from understanding: Funes the Memorious remembers everything and therefore cannot generalise or think',
      'Decoupling authorship from the text: the same words, set down by a different author, make a different work',
      'Refutable: critics argue that intellectual play became a refuge from the political violence and historical trauma of twentieth-century Argentina'
    ],
  },
  'wilfred-thesiger': {
    name_en: 'Wilfred Thesiger',
    name_zh: '威尔弗雷德·塞西杰',
    life: '1910-2003',
    nationality_zh: '英国',
    nationality_en: 'British',
    role_zh: '探险家、旅行文学作家',
    role_en: 'Explorer and travel writer',
    bio_zh: '英国探险家与旅行文学作家，1910 年生于埃塞俄比亚的亚的斯亚贝巴，成长于英埃边界，1933 年代表牛津大学参加拳击比赛并任校队队长。他早年在苏丹政治署任职，二战期间在阿比西尼亚、叙利亚与北非沙漠服役并获杰出服务奖章，战后辞去公职转入沙漠，1945 至 1950 年间两度穿越阿拉伯半岛南部的「空白之地」。代表作《阿拉伯之沙》（1959）与《沼地阿拉伯人》（1964）是二十世纪旅行文学的标杆，后者获海尼曼奖，前者被收入《国家地理》「有史以来最伟大的 100 部探险作品」榜，并被书评家 Michael Dirda 称为「现代英语旅行文学六大杰作之一」；英文维基百科有独立条目 Arabian Sands。他 1995 年获授爵士，1966 年获英国皇家亚洲学会柏顿纪念奖，另获英国皇家地理学会创会人奖章，是英国皇家文学学会荣誉会士、大英学院院士与牛津马格达伦学院荣誉院士。他拒绝使用机械交通工具穿越沙漠，认为那会毁掉旅行的精神意义；批评者则指出其对贝都生活的理想化，以及对女性与殖民秩序的沉默。',
    bio_en: 'A British explorer and travel writer, born in Addis Ababa in 1910 and raised on the Anglo-Ethiopian frontier. He boxed for Oxford University, captaining the team in 1933. He served in the Sudan Political Service before the war, then in Abyssinia, Syria and the North African deserts during the Second World War, winning the DSO, and afterwards gave up public service for the desert, crossing the Empty Quarter of southern Arabia twice between 1945 and 1950. His Arabian Sands (1959) and The Marsh Arabs (1964) are the benchmarks of twentieth-century travel literature: the latter won the Heinemann Award, the former was included in National Geographic\'s list of the 100 Greatest Adventure Books of All Time and was called by critic Michael Dirda one of the half-dozen greatest works of modern English travel writing. It has a standalone English Wikipedia article, Arabian Sands. He was knighted in 1995, received the Royal Asiatic Society\'s Burton Memorial Medal in 1966 and the Royal Geographical Society\'s Founder\'s Medal, and is a Fellow of the Royal Society of Literature, the British Academy and Magdalen College, Oxford. He refused mechanical transport across the desert on the grounds that it destroyed the meaning of travel; critics note the idealisation of Bedouin life and the silence on women and on the colonial order.',
    ideas_zh: ['现代性并不等于进步：便利与机械同时终结了以能力与荣誉为尺度的生存方式', '民族志式的写作方法：不站在远处观察，而是融入其中长期生活，并承担由此带来的代价', '两种尺度的冲突不可调和：荣誉与复仇之法和「文明」的定义互不相容，作者拒绝替任何一方裁决', '可被反驳之处：对贝都生活的理想化、对女性与殖民秩序的沉默，以及把正在被石油经济吞噬的世界当作纯净标本'],
    ideas_en: ['Modernity is not the same as progress: convenience and machinery also end a way of life measured by competence and honour', 'An ethnographic method: living among people rather than observing them from a distance, and paying the price of that choice', 'The clash between two scales is irreducible - honour and retribution are incompatible with the definition of civility, and the author refuses to adjudicate', 'Refutable: the idealisation of Bedouin life, the silence on women and the colonial order, and the treatment of a world already being consumed by the oil economy']
  },

  'jean-lave': {
    name_en: 'Jean Lave',
    name_zh: '琼·莱夫',
    life: '1939-',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '社会人类学家、加利福尼亚大学伯克利分校地理学荣休教授',
    role_en: 'Social anthropologist and professor emerita of geography at the University of California, Berkeley',
    bio_zh: '美国社会人类学家，1939 年生，曾任教于加州大学欧文分校，现为加州大学伯克利分校地理学荣休教授。她以研究学徒制与技能传承起家：在法国南部裁缝铺的田野观察使她发现，学徒真正从同伴而非师傅身上学到东西，这一观察后来成为她与艾蒂纳·温格 1991 年合著《情境学习：合法的边缘性参与》的起点。该书提出「合法的边缘性参与」与「实践共同体」两个概念，取代了把学习理解成知识获取的认知主义框架，英文维基百科有独立条目 Situated learning，该书在 Google Scholar 上的引用数逾 11.9 万次，被评价为学习科学领域最具影响力的奠基性著作之一。她的研究重心始终是「参与的变化即学习」这一命题，并影响了后来关于职业身份形成与工作学习的研究。',
    bio_en: 'An American social anthropologist, born in 1939. She taught at the University of California, Irvine and is professor emerita of geography at the University of California, Berkeley. Her work began with apprenticeship and skill transmission: fieldwork in a tailor\'s shop in southern France showed her that apprentices learn chiefly from one another rather than from the master, an observation that became the seed of the 1991 book she wrote with Etienne Wenger, Situated Learning: Legitimate Peripheral Participation. That book introduced the concepts of legitimate peripheral participation and communities of practice, displacing the cognitivist account of learning as knowledge acquisition; it has a standalone English Wikipedia article, Situated learning, and more than 119,000 citations on Google Scholar, and is widely described as one of the most influential foundational works in the learning sciences. Her central proposition throughout has been that a change in participation is learning itself, which shaped later research on the formation of professional identity and on learning at work.',
    ideas_zh: ['学习是参与的变化，而不是知识的获取：学会一件事与成为某种人是同一个过程', '实践共同体是知识的位置：知识不是可脱情境封存的客体，而是人、实践与社会世界相互构成的关系', '合法边缘参与：新手以正当的外围身份进入真实工作，在承担越来越复杂的任务中从边缘走向中心', '可被反驳之处：实践共同体的内部结构刻画过于简略，学术类比牵强，该概念后来被随意套用，2015 年的文献综述为其提出使用规范'],
    ideas_en: ['Learning is a change in participation, not the acquisition of knowledge: learning to do something and becoming a certain kind of person are one process', 'The community of practice is where knowledge lives: knowledge is a relation co-constituted by person, practice and social world', 'Legitimate peripheral participation: newcomers enter real work under a legitimate peripheral role and move towards the centre as the work assigned to them grows more complex', 'Refutable: the internal structure of practice is sketched too thinly, the academic analogies are strained, and the construct has since been applied indiscriminately - a 2015 literature review set out rules for its use']
  },

  'etienne-wenger': {
    name_en: 'Etienne Wenger',
    name_zh: '艾蒂纳·温格',
    life: '1952-',
    nationality_zh: '瑞士',
    nationality_en: 'Swiss',
    role_zh: '教育理论研究者、实践共同体理论提出者',
    role_en: 'Educational theorist and originator of the theory of communities of practice',
    bio_zh: '瑞士教育理论研究者，1952 年生于瑞士纳沙泰尔，在日内瓦大学取得计算机科学学士与硕士学位，1990 年在加州大学欧文分校获信息与计算机科学博士学位。他原本研究人工智能与辅导系统，在加入约翰·塞利·布朗领导的学习研究院后，转向人类学家琼·莱夫对非洲裁缝学徒制的田野观察，并由此发展出「实践共同体」理论：1991 年与莱夫合著《情境学习：合法的边缘性参与》，1998 年出版《实践共同体：学习、意义与身份》，2000 年提出「三种归属模式」，2002 年与迈克多莫特、斯奈德合著《培育实践共同体》。他关于「小行星地球学习」的研究把技术变革与学习共同体直接连起来，对组织学习与知识管理影响广泛。他的博士训练来自计算机科学，这与该书把学习理论建立在「参与与结构」而非「符号处理」之上直接相关。',
    bio_en: 'A Swiss educational theorist born in Neuchatel in 1952. He took a B.S. and an M.S. in computer science from the University of Geneva and a Ph.D. in information and computer science from the University of California, Irvine in 1990. Originally working on artificial intelligence and tutoring systems, he joined the Institute for Research on Learning under John Seely Brown and turned to Jean Lave\'s fieldwork on apprenticeship among African tailors, developing the theory of communities of practice: Situated Learning: Legitimate Peripheral Participation with Lave in 1991, Communities of Practice: Learning, Meaning, and Identity in 1998, the three modes of belonging in 2000, and Cultivating Communities of Practice with McDermott and Snyder in 2002. His work on Learning for a Small Planet connects technological change directly to learning communities and has been influential in organizational learning and knowledge management. His doctorate came from computer science, which is directly reflected in a learning theory built on participation and structure rather than on symbol processing.',
    ideas_zh: ['知识存在于实践共同体之中，而不是存在于个人的头脑或文件中', '学习是身份的变化：成为共同体的一员，意味着同时获得技能、意义与归属', '三种归属模式：参与、参与方式与想象，解释了新人如何从边缘走向中心', '可被反驳之处：框架对权力、冲突与共同体内部的不平等着墨不多，「知识在共同体中」这一主张在高度流动的远程协作时代面临挑战'],
    ideas_en: ['Knowledge resides in communities of practice, not in individual minds or in documents', 'Learning is a change of identity: becoming a member means acquiring skills, meaning and belonging at once', 'The three modes of belonging - engagement, alignment and imagination - explain how newcomers move from the edge to the centre', 'Refutable: the framework says little about power, conflict and internal inequality, and the claim that knowledge sits in communities is strained in an era of highly mobile, remote collaboration']
  },

  'mikhail-bulgakov': {
    name_en: 'Mikhail Bulgakov',
    name_zh: '米哈伊尔·布尔加科夫',
    life: '1891-1940',
    nationality_zh: '俄罗斯（苏联时期）',
    nationality_en: 'Russian (Soviet)',
    role_zh: '小说家、剧作家',
    role_en: 'Novelist and playwright',
    bio_zh: '俄罗斯小说家与剧作家，1891 年生于基辅，1916 年毕业于基辅大学医学院，曾在第一次世界大战与俄国内战期间行医，1920 年起放弃医学专事写作。代表作有中篇《不祥的蛋》《狗心》、长篇《白卫军》与剧本《图尔宾一家的日子》。《白卫军》改编的剧本获准上演并引发争论，但他的多数作品在此后的审查中遭禁，他本人多次写信申诉。1928 至 1940 年间他持续写作《大师与玛格丽特》，书稿在生前未能完整发表：1966 至 1967 年删节本在《莫斯科》杂志连载，1967 年巴黎 YMCA Press 出版首个单行本，1973 年苏联才推出完整未删节版。他 1940 年在莫斯科病逝。英文维基百科有独立条目 Mikhail Bulgakov 与 The Master and Margarita；后者入选《世界报》「世纪之书」100 种。Salman Rushdie 曾称该书与作者是《撒旦诗篇》的两大影响之一。',
    bio_en: 'A Russian novelist and playwright, born in Kiev in 1891 and graduated from the medical faculty of Kyiv University in 1916. He practised medicine during the First World War and the Russian Civil War, then abandoned it for writing in 1920. His major works include the novellas The Fatal Eggs and Heart of a Dog, the novel The White Guard and the play The Days of the Turbins, adapted from the novel. The play was permitted on stage and proved controversial, but most of his work was subsequently censored and he repeatedly appealed against the bans. He worked on The Master and Margarita from 1928 until 1940 without seeing it published in full: a censored serial appeared in Moskva in 1966-67, the first book edition followed at YMCA Press in Paris in 1967, and the first uncensored Soviet edition in 1973. He died in Moscow in 1940. English Wikipedia has standalone articles on Mikhail Bulgakov and on The Master and Margarita, the latter included in Le Monde\'s 100 Books of the Century. Salman Rushdie named the book and its author as two of the influences behind The Satanic Verses.',
    ideas_zh: ['怯懦是最严重的罪：沉默与自保在权力面前不是中立，而是对责任的让渡', '自称理性的机构往往最擅长制造谎言，撒旦反而承担了揭穿虚假的叙事职能', '创作与爱情都是拒绝被没收的自由，代价是放弃安全', '可被反驳之处：善恶的分配过于依赖超自然框架，漫画式讽刺削弱了制度责任的具体性'],
    ideas_en: ['Cowardice is the gravest sin: silence and self-protection under power are not neutral but a surrender of responsibility', 'Institutions that call themselves rational are often the most accomplished liars, while the Devil carries the narrative function of exposing falsehood', 'Both writing and love are forms of freedom that cannot be confiscated, and both require surrendering safety', 'Refutable: the distribution of good and evil leans too heavily on a supernatural framework, and satirical caricature weakens the specificity of institutional responsibility']
  },

  'james-c-scott': {
    name_en: 'James C. Scott',
    name_zh: '詹姆斯·C·斯科特',
    life: '1936-2024',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '政治学家、人类学家、农学研究学者',
    role_en: 'Political scientist, anthropologist and agrarian studies scholar',
    bio_zh: '美国政治学家与人类学家，1936 年生，2024 年 7 月 19 日在康涅狄格州达勒姆去世，生前为耶鲁大学政治学斯特林荣休教授、人类学教授，并创办耶鲁农学研究中心并任首任主任。他 1978 至 1980 年在马来西亚一个七十户人家的村庄做了两年田野，写成《弱者的武器：农民反抗的日常形式》（1985），把偷懒、装糊涂、暗中破坏这类「日常抵抗」带进政治学视野。其他代表作包括《农民的道义经济学》（1976）、《国家的视角》（1998）、《支配与抵抗艺术》（1990）、《逃避统治的艺术》（2009）与《作茧自缚》（2017）。2012 年《纽约时报》人物文章称他为「抵抗研究领域的非官方创始人」，称《弱者的武器》「堪称该领域圣经」；2020 年获社会科学研究理事会最高荣誉阿尔伯特·O·赫希曼奖。',
    bio_en: 'An American political scientist and anthropologist, born in 1936 and died in Durham, Connecticut, on 19 July 2024. At his death he was Sterling Professor Emeritus of Political Science and professor of Anthropology at Yale, and the founding director of Yale\'s Agrarian Studies Center. Between 1978 and 1980 he spent two years doing fieldwork in a seventy-household Malaysian village, producing Weapons of the Weak: Everyday Forms of Peasant Resistance (1985), which brought everyday resistance — foot-dragging, feigned ignorance, covert sabotage — into political science. Other major books include The Moral Economy of the Peasant (1976), Seeing Like a State (1998), Domination and the Arts of Resistance (1990), The Art of Not Being Governed (2009) and Against the Grain (2017). A 2012 New York Times profile described him as the unofficial founder of the field of resistance studies and called Weapons of the Weak a kind of Bible; in 2020 he received the Albert O. Hirschman Prize, the Social Science Research Council\'s highest honour.',
    ideas_zh: ['国家为使社会「可辨认」而进行的标准化，同时销毁了规划本身所需要的地方知识', '极端现代主义意识形态、独裁的国家能力、软弱的公民社会与行政清晰性四者叠加，使善意的社会工程走向灾难', '米提斯——实践中积累、难以编码的地方技艺——与技术知识同等重要，不能被前者替代', '可被反驳之处：证据选择性强、较少权衡反证；批评者认为集体化的失败首先是激励结构的失败'],
    ideas_en: ['Standardisation undertaken to make society legible simultaneously destroys the local knowledge the plan itself needs', 'High-modernist ideology, authoritarian state capacity, a weak civil society and administrative legibility together turn benign social engineering into disaster', 'Metis — practical, hard-to-code local know-how — is as important as technical knowledge and cannot be substituted by it', 'Refutable: the evidence is selective and rarely weighs disconfirming material; critics argue that collectivisation failed first and foremost because of incentives']
  },
  'n-katherine-hayles': {
    name_en: 'N. Katherine Hayles',
    name_zh: 'N. 凯瑟琳·海勒',
    life: '1945-',
    nationality_zh: '美国',
    nationality_en: 'American',
    role_zh: '文学学者、数字媒介研究者',
    role_en: 'Literary scholar and digital media researcher',
    bio_zh: '美国文学学者，1945 年生，芝加哥大学出版社资深教授，UCLA 希利斯讲席教授、杜克大学詹姆士·B·杜克文学讲席教授，后于 2018 年荣休返回 UCLA 任英语系杰出研究教授。她的学术训练横跨英语文学与化学，这种双重背景成为她「文学与科学」研究的底色：早期《宇宙之网》（1984）与《混沌的束缚》（1990）讨论当代物理学与文学之间的呼应，奠定她在该领域的地位；1999 年出版的《我们何以成为后人类》（How We Became Posthuman）是后人类主义研究的奠基文本，也是第一部长篇研究，系统梳理控制论从二战后梅西会议到人工生命的历史，批评把信息视作可脱离物质载体的、把意识视作可「上传」的观念。她于 2000 年获美国比较文学协会勒内·韦勒克奖（René Wellek Prize），该书另获伊顿奖（Eaton Award），并被《村声》列入 1999 年最佳二十五本书；英文维基百科有其独立书籍条目。2015 年当选美国艺术与科学院院士。其后转向数字媒介与电子文学，著有《书写机器》（2002）、《我的母亲是计算机》（2005）、《电子文学》（2008）、《我们如何思考》（2012）与《未思》（2017）。',
    bio_en: 'An American literary scholar born in 1945, the Frank B. Baird Professor of Literature at the University of Chicago and a distinguished research professor of English at UCLA, after serving as the James B. Duke Professor of Literature at Duke University until 2018. Her training spans English literature and chemistry, a combination that underpins her work at the intersection of literature and science: The Cosmic Web (1984) and Chaos Bound (1990) addressed the resonance between contemporary physics and literary form. How We Became Posthuman (1999) is the founding text of posthuman studies and the first book-length study of the field, tracing cybernetics from the postwar Macy conferences to artificial life and criticising the notion of information as disembodied and of consciousness as uploadable. It won the 2000 René Wellek Prize from the American Comparative Literature Association and the Eaton Award, and the Village Voice placed it among the twenty-five best books of 1999; English Wikipedia carries a standalone article on it. She was elected to the American Academy of Arts and Sciences in 2015, and has since written Writing Machines (2002), My Mother Was a Computer (2005), Electronic Literature (2008), How We Think (2012) and Unthought (2017).',
    ideas_zh: ['信息并非可脱离物质载体独立存在的实体，抽象化过程本身是历史产物，需要被追问', '后人类不是人类的消亡，而是「自主的个体主体」这一自由主义人文主义假设的终结', '半符号方框：同一套符号系统同时具有建构与解构两重运作方式，可用模式与随机性区分', '可被反驳之处：概念艰深、部分身体理论术语含混，女性主义学者质疑其过度依赖物质的物理实在'],
    ideas_en: ['Information is not an entity that can exist apart from its material carrier; the abstraction itself is a historical product that must be interrogated', 'Posthumanism is not the end of humanity but the end of a particular liberal-humanist assumption of the autonomous individual subject', 'The semiotic square: a symbolic system operates constructively and deconstructively at once, distinguishable by pattern and randomness', 'Refutable: the prose is dense and some terms around the body are imprecise, and feminist critics question its reliance on material physical reality']
  },

  'niccolo-machiavelli': {
    name_en: 'Niccolò Machiavelli',
    name_zh: '尼可罗·马基雅维利',
    life: '1469-1527',
    nationality_zh: '意大利',
    nationality_en: 'Italian',
    role_zh: '政治思想家、外交家、军事史作者',
    role_en: 'Political thinker, diplomat and military historian',
    bio_zh: '意大利佛罗伦萨的政治思想家、外交家与军事史作者，1469 年生于佛罗伦萨，1527 年去世。他是近代政治思想从神学与伦理中剥离出来的关键人物：与古典的「君主镜」传统不同，他主张用历史与经验而非道德教条来衡量政治人物的有效性，写下《君主论》（1513 年撰成，1532 年作者身后由 Antonio Blado d\'Asola 印行）、《论李维》（1531）与《战争的艺术》。在共和与僭主交替的佛罗伦萨，他担任过外交官与使节，亲历美第奇家族复辟并因此被捕受刑、流放，1527 年去世时佛罗伦萨已落入共和国体制。他的著作在 1559 年教宗保罗四世《禁书目录》中被列入禁书，又在 16 世纪催生大量「反马基雅维利主义」论争。英文维基百科有其独立书籍条目 The Prince；他本人被 20 世纪西方舆论界列入影响历史进程的作者行列，其政治现实主义被后世现实主义学派奉为起点。',
    bio_en: 'An Italian political thinker, diplomat and military historian born in Florence in 1469 and deceased in 1527, he was the decisive figure in detaching modern political thought from theology and ethics. Unlike the classical mirror-for-princes tradition, he judged political men by history and effective experience rather than moral doctrine, writing The Prince (composed in 1513, first printed posthumously in 1532 by Antonio Blado d\'Asola), the Discourses on Livy (1531) and The Art of War. Serving as a diplomat and envoy in a Florence that alternated between republic and principality, he was arrested, tortured and exiled after the Medici returned, and died in 1527 as the city had already reverted to a republic. His works were placed on the Index of Paul IV in 1559 and prompted a long series of anti-Machiavellian rejoinders from the sixteenth century onwards. English Wikipedia carries a standalone article on The Prince, and he has been ranked by Western critics among the authors whose work shaped the course of history, his political realism serving as the starting point for the realist school that followed.',
    ideas_zh: ['政治判断与道德判断可以分离：有效的统治与值得称颂的品质是两套不同的评价标准', '畏惧优于爱戴：被畏惧之所以更安全，是因为爱戴靠恩惠维系，而恩惠一旦停止就转为怨恨', 'fortuna 与 virtù：决定性的局面由外部偶然性造成，对抗它的方式是积累可控的机动性而非等待好运', '可被反驳之处：把政治从道德中彻底剥离后，如何避免为暴政提供技术性背书，本身就是没有答案的问题'],
    ideas_en: ['Political and moral judgement can be separated: effective rule and praiseworthy character are two different standards', 'Being feared is safer than being loved, because love rests on benefits, and benefits withheld turn into hatred', 'Fortune and virtù: decisive situations are made by external contingency, and the response is to accumulate controllable manoeuvring room rather than wait for luck', 'Refutable: once politics is detached entirely from morality, how to avoid supplying technical cover to tyranny is itself a question without an answer']
  }
};

export default authors;
