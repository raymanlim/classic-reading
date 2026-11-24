/** 每日推荐阅读指引 · 2026-10-06 */
export const batch = {
  'cybernetics': {
    description_zh: '《控制论》是数学家诺伯特·维纳 1948 年的著作，副题 Or Control and Communication in the Animal and the Machine。全书从二战的密码破译与预测炮射击落误差谈起，提出一个跨越生物学与工程的命题：控制的本质是在系统接近临界状态时通过反馈把偏差纠正回去，而这个机制在机器与活体内是同一种东西。维纳据此讨论了反馈、振荡、随机与自组织，以及一个引起长久争议的设想——把通信与热力学第二定律联系起来，指出信息在信道中的传递要付出不可回收的代价。书中对心智与自动机的讨论后来长成了控制论、系统论、认知科学与人工智能的共同母体。',
    description_en: 'Cybernetics is the 1948 book in which the mathematician Norbert Wiener proposed a single vocabulary for systems that steer themselves. Whether the system is a servomechanism, a nervous system, or a human institution, Wiener argued, it can be described in terms of communication, information, feedback, and stability. Drawing on wartime work on anti-aircraft prediction, on early computing machinery, and on physiology, he treats control not as a property of a particular device but as a general phenomenon of organised matter. The book ranges across the statistical nature of messages, noise, entropy, learning, and self-organisation, and it anticipates many of the questions later taken up by artificial intelligence and automation research. Wiener also turns repeatedly to the social and ethical consequences of his own science, warning that the same feedback machinery which extends human capability can be turned against human ends. It is a thought experiment that places organism and machine side by side, not an engineering manual.',
    why_read_zh: '维纳这本书的分量不只在「反馈」一词被用滥之后的通俗意义，而在于他当年提出的跨学科断言是认真的：生命体与自动机在通过反馈维持自身于临界状态这一点上是同一类东西，倒不是因为生命是机器，而是因为二者必须解决同一个控制问题。这条思路在四分之一世纪后开花，长出系统论、控制论、认知科学、运筹学，乃至今天的复杂系统研究与人工生命。维纳还有一段常被引用却很少被细读的判断：信息在信道中传输要付出不可回收的代价，这一想法比香农的信息论早了好几年。今天重读它，你会重新意识到数据的免费流通从来只是账目的一半，另一半是熵。  经典性证据（命中 4 项）：① 维基百科设有独立条目 Cybernetics: Or Control and Communication in the Animal and the Machine，当场核实条目存在，载 1948 年由 Hermann & Cie（巴黎）与 MIT Press 出版，1961 年增订第二版并新增两章，2019 年 MIT Press 推出开放获取版（ISBN 978-0-262-73009-9），条目称其为「二十世纪最具影响力的著作之一」，并记下 cybernetics 一词在公共用法中的首次出现。② 媒体：条目引《纽约时报》1964-02-02 John R. Platt 的书评，称此书可与 Galileo、Malthus、Mill、Rousseau 相比；该报 1948-12-19 的「Science in Review」整版刊出 William L. Lawrence 的长篇书评；Stephen Toulmin 在《纽约书评》(New York Review of Books) 撰有长文《The Importance of Norbert Wiener》。③ 课程与机构收藏：MIT ESD.83 课程讲义设有专章 Cybernetics 专论本书，MIT OpenCourseWare 的金融理论课 15-401 亦以 Wiener 的预测理论为讲授内容；理海大学图书馆 Informationland 展览把 1948 年原版列为馆藏，并记 1962 年该校信息科学研究中心将 cybernetics 列为研究方向。④ 评分：豆瓣北京大学出版社 2007-12 郝季仁译本为 9.1 分。未计入项：Goodreads 为 3.99 分、803 个 ratings，评分未达「≥4.0」且人数未达「≥5000」；豆瓣同书评价人数 455 人，未达「≥1000」，豆瓣一项不计入；维基条目自身不列本书所获奖项，Norbert Wiener 的 National Book Award 是为其传记《Dark Hero of the Information Age》所获，与本书无关，奖项一项未计入。时间检验：1948 年首版，至 2026-11-19 已满 78 年，远超 ≥5 年门槛。',
    why_read_en: 'Most accounts of artificial intelligence begin with the computer; Wiener begins with the idea that living things and machines can be described by the same laws of communication and control. Reading him restores the conceptual prehistory of AI — feedback, information, stability, self-organisation — that later technical work inherited without naming. The book is also unusually candid about consequences: Wiener warns early and forcefully that the machinery of control can serve domination as easily as it serves liberation. For anyone who wants the intellectual genealogy of AI rather than its product announcements, this is the source to read.',
    core_ideas_zh: [
        '通信与控制是同一现象的两面：任何系统只要依靠信息反馈维持稳定并指向目标，就落入统一的分析框架，机器与生命在这一点上没有本质差别。',
        '信息可以被度量，而噪声与熵为可靠传递设定了硬性上限；对消息统计性质的讨论，直接通向此后独立发展的信息论。',
        '生命与机器之间不存在不可逾越的鸿沟，两者都是组织化的、以目标为导向的动态系统，区别在于组织方式而非本质。',
        '技术中立的说法站不住脚：控制机器一旦被用于支配他人，就会产生新的社会风险，科学家无法把后果推给使用者。',
        '稳态依赖反馈回路，而反馈意味着误差、滞后与震荡；理解系统为何失稳，与控制它同样重要。'
      ],
    core_ideas_en: [
        'Communication and control are two aspects of one phenomenon: any system that maintains stability and pursues a goal through feedback falls under a single analysis, and machine and organism do not differ in principle here.',
        'Information can be measured, and noise and entropy impose hard limits on reliable transmission; the discussion of the statistical nature of messages leads directly toward information theory.',
        'There is no unbridgeable gulf between organisms and machines: both are organised, goal-directed dynamical systems, and the difference lies in their organisation rather than their essence.',
        'The claim that technology is neutral does not hold: control machinery turned toward domination creates new social risks, and the scientist cannot hand the consequences to the user.',
        'Stability depends on feedback loops, and feedback brings error, lag, and oscillation; understanding why a system destabilises matters as much as controlling it.'
      ],
    key_questions_zh: [
        '反馈能否解释从恒温器到神经系统、再到社会秩序的一切自稳定现象？',
        '信息如何被度量，噪声又为可靠通信设定了怎样的极限？',
        '当控制技术可以被用于支配人时，科学家应承担怎样的伦理责任？'
      ],
    key_questions_en: [
        'Can feedback explain every self-stabilising phenomenon, from a thermostat to a nervous system to a social order?',
        'How is information to be measured, and what limits does noise place on reliable communication?',
        'When the machinery of control can be used to dominate people, what ethical responsibility falls on the scientist?'
      ],
    who_should_read_zh: '适合人工智能、自动化、控制科学与认知科学的从业者和研究者，尤其是想理解 AI 思想谱系而非只看最新产品的人；也适合关心技术伦理、科学与人文交叉议题的读者。需要一定的抽象思维能力，但不要求工程或数学专业背景。',
    who_should_read_en: 'Suited to practitioners and students of artificial intelligence, automation, control science, and cognitive science — above all those who want the intellectual genealogy of AI rather than its latest results. It also suits readers concerned with technology ethics and the meeting point of science and the humanities. Some tolerance for abstract argument helps, though no engineering or mathematical background is required.',
    reading_note_zh: '建议先读导论与第一章，抓住「反馈」这一核心概念，再跳到讨论信息与熵的章节。第二部分的计算与学习内容可略读，重点体会维纳如何把不同学科并置思考。可配合《人有人的用处》（1950）理解其社会关切，或对照香农的信息论看清两条路线的分岔。不必逐章精读，读其问题意识比读其公式更重要。',
    reading_note_en: 'Start with the introduction and first chapter to fix the concept of feedback, then move to the chapters on information and entropy. The technical material on computation and learning in the second half can be skimmed; what matters is how Wiener places disciplines side by side. Pair it with The Human Use of Human Beings (1950) for his social argument, or read it against Shannon\'s information theory to see where the two lineages divide. It rewards attention to questions more than to formulas.'
  },
  'the-rise-and-fall-of-the-great-powers': {
    description_zh: '《大国的兴衰》是历史学家 Paul Kennedy 1987 年的巨著，副题是 1500 至 2000 年间经济变化与军事冲突对世界强国兴衰的作用。Kennedy 追问一个贯穿两个半世纪的问题：什么样的国家能在长时段里维持强盛？他给出的答案是一套可量化的指标组合——制造业生产占世界的份额、战争开支占国民生产的比例、以及政治凝聚与经济实力之间的匹配度。他用这些指标追踪明朝、奥斯曼、荷兰、法国、德国、美国与苏联的兴衰，指出 1688 至 1815 年英国在英法战争中耗资 £2,293,483,437、借款占财政支出 33.3%，也指出中国制造业份额从 1750 年的 32.8% 跌到 1880 年的 12.5%。',
    description_en: 'The Rise and Fall of the Great Powers is a work of international history published in 1987 by the British historian Paul Kennedy. Its subtitle states the scope: economic change and military conflict from 1500 to 2000. Over a five-century horizon Kennedy traces the trajectories of Spain, the Netherlands, France, Britain, Germany, Russia, Japan, and the United States, arguing that a great power\'s strategic position ultimately rests on its economic and fiscal base. When commitments outrun resources — the condition usually called imperial overstretch — decline becomes difficult to avoid. Kennedy resists single-cause explanations, weaving technology, industrial capacity, fiscal institutions, geography, and alliance systems into one comparative framework. In his closing projection he considers the relative adjustment of American power and the rising potential of China. Its scale and judgement have made it a standard reference in the study of grand strategy.',
    why_read_zh: 'Kennedy 的方法是把「强盛」从形容词变成一组可追踪的变量，然后用它去检验那些靠直觉流传的判断。最有说服力的一处检验是英国：18 世纪的英国几乎每一场对外战争都打赢了，可胜利本身正在消耗它——巨额战争借款与工业份额的相对下滑，在同一条因果链上。所以他反复警告的不是霸权必然衰落这种宿命论，而是军事成功可以先于经济基础被抽走，而衰落往往在账面上还看不出来时就已经启动。这个框架对读当代史同样锋利：把一国的工业份额、军工负担与内部凝聚放在一起看，比单看 GDP 或单看军队规模都可靠得多。  经典性证据（命中 5 项）：① 维基百科设有独立条目 The Rise and Fall of the Great Powers，当场核实条目存在，载 1987 年由 Random House 出版，共 677 页（ISBN 0-394-54674-1），并列出 1688-1815 年英国战时支出 £2,293,483,437、借款占比 33.3%，英国人均工业化指数 1750 年 10 至 1900 年 100、法国 9 至 39，中国制造业份额 1750 年 32.8% 至 1880 年 12.5% 等数据。② 奖项：1988 年沃尔夫森历史奖（Wolfson History Prize）。③ 评分与评价人数：Goodreads 为 4.14 分、6,651 个 ratings、400 条 reviews，各版本区间 6,647–6,734 个 ratings，双门槛均达标。④ 豆瓣：国际文化 2006-1 陈景彪等译本为 8.3 分、1,793 人评价，双门槛均达标。⑤ 媒体：《纽约时报》1988-01-07 的 Books of the Times 与 1988-12-06《纽约时报书评》的「Imperial Cycles: Bucks, Bullets and Bust」，James Joll 在《纽约书评》(New York Review of Books)、Michael Howard 在《纽约时报书评》均有长评。未计入项：本书另见中信 2013 年上下册（8.1 分、714 人与 8.1 分、472 人）与求实 1988 年版（8.1 分、70 人），人数均未达 1000，不重复计入；香港中文大学「城中读书会」2014 年专题讲座与斯坦福 HAI 相关研讨课不计入门槛，仅作课程采用参考。时间检验：1987 年首版，至 2026-11-19 已满 39 年，远超 ≥5 年门槛。',
    why_read_en: 'Kennedy offers a transferable comparative framework for the question of where national power comes from and how it drains away, rather than a single verdict. By braiding military history together with fiscal and technological history, he shows that today\'s contests over semiconductors, energy, and supply chains turn on the same variables that have governed five centuries: the fit between economic base, fiscal capacity, and strategic commitment. For readers tracking geopolitics, macro cycles, and industrial competition, it is a calibration tool for judgement. Its long horizon is a useful antidote to the myopia of the news cycle.',
    core_ideas_zh: [
        '大国的兴衰根植于经济与财政基础，军事力量只是这一基础的表现而非原因；长期看，能负担什么，决定了能承诺什么。',
        '「帝国过度扩张」是一种反复出现的机制：当战略承诺持续超出资源供给，衰落便进入自我强化的通道，且往往在外部挑战到来之前就已开始。',
        '技术领先与工业能力是权力转移的关键变量，而领先者常因优势固化、路径依赖而丧失适应速度。',
        '权力转移是长周期的相对变化，不是单点事件；短期胜负经常掩盖长期趋势，因此需要以百年尺度校准判断。',
        '地理与联盟体系会放大或抵消经济优势：位置决定了防御成本，而联盟决定了可动员的资源边界。'
      ],
    core_ideas_en: [
        'The rise and fall of great powers is rooted in economic and fiscal strength; military power expresses that base rather than creating it, and what a state can afford ultimately sets what it can commit to.',
        'Imperial overstretch is a recurring mechanism: when strategic commitments persistently outrun resources, decline becomes self-reinforcing — and it typically begins before any external challenger arrives.',
        'Technological and industrial leadership are pivotal variables in power transitions, and incumbents often lose the capacity to adapt as advantages harden into path dependence.',
        'Power transitions are long-run relative shifts rather than single events; short-term outcomes routinely obscure the underlying trend, which is why judgement needs a century-long scale.',
        'Geography and alliance systems amplify or cancel economic advantage: position sets the cost of defence, while alliances set the boundary of mobilisable resources.'
      ],
    key_questions_zh: [
        '在五百年的大国竞争中，经济实力与军事力量之间究竟如何相互作用？',
        '为什么一些国家能在技术变革中持续领先，而另一些迅速掉队？',
        '当战略承诺超过经济承受力时，国家有哪些调整路径，各自的代价是什么？'
      ],
    key_questions_en: [
        'Across five centuries of great-power competition, exactly how do economic strength and military power interact?',
        'Why do some states sustain leadership through technological change while others fall away quickly?',
        'When strategic commitments exceed economic capacity, what paths of adjustment remain open, and at what cost?'
      ],
    who_should_read_zh: '适合关注地缘政治、宏观周期、产业竞争与长期投资判断的读者，也适合历史学、国际关系与经济史的学习者。企业战略与政策研究者可借其框架理解技术与国力之间的关系。阅读需要耐心，但不要求专业史学训练。',
    who_should_read_en: 'Suited to readers tracking geopolitics, macro cycles, industrial competition, and long-horizon investment judgement, along with students of history, international relations, and economic history. Corporate strategists and policy researchers can use its framework to think about how technology and national power connect. It demands patience rather than specialist training.',
    reading_note_zh: '篇幅很大，建议不要顺序硬啃：先读导论与结论，抓住「经济基础—战略承诺」这条主线，再按兴趣选读国别章节，其中英国、德国与美国三章尤为关键。阅读时随手记录各国的「经济—财政—军事」三栏数据，便于横向比较。可配合布罗代尔的长时段方法对照，也可与《枪炮、病菌与钢铁》并读，比较两种解释路径。',
    reading_note_en: 'It is long, so avoid a front-to-back grind: read the introduction and conclusion first to fix the base-versus-commitment argument, then choose country chapters by interest, with Britain, Germany, and the United States especially instructive. Keep a three-column tally — economy, fiscal capacity, military — as you go, to make comparisons concrete. It pairs well with Braudel\'s long-duration method, or read against Guns, Germs, and Steel to compare two explanatory strategies.'
  }
};
