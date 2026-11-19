import io, sys

path = 'content/authors.js'
src = io.open(path, 'r', encoding='utf-8', newline='').read()

entries = """
  'rainer-maria-rilke': {
    name_en: 'Rainer Maria Rilke',
    name_zh: '莱纳·马利亚·里尔克',
    life: '1875–1926',
    nationality_zh: '奥地利',
    nationality_en: 'Austrian',
    role_zh: '诗人、作家',
    role_en: 'Poet and writer',
    bio_zh: '奥地利诗人、小说家，1875 年生于布拉格，1926 年逝世于瑞士瓦莱。自视为「欧洲诗人」，一生辗转布拉格、柏林、巴黎、俄国与瑞士，因在巴黎自学的法语写作与 1912 年前往俄国、拜访马孔科娃而转向一种近乎宗教性的写作姿态。代表作有《杜伊诺哀歌》《给一个青年诗人的十封信》《马尔特·劳里兹·布里格随笔》。《给一个青年诗人的十封信》是他 1903—1908 年写给维也纳青年军官卡普斯的十封回信，1929 年由卡普斯整理出版，在英文维基百科有独立条目，Goodreads 评分 4.26、逾 13 万人评分，中译本《给一个青年诗人的十封信》由冯至翻译、豆瓣评分 9.0、逾 6900 人评价，茨威格、冯至、北岛等均有高度评价。他常被视为二十世纪德语文学最重要的诗人之一，其诗学核心是「向内走」与「忍耐」，即要求创作者不依赖外部评判、而从自身的必要性中生长出作品。批评者则指出他的美学姿态回避了具体的社会与经济条件，且带有神秘主义与性别观念的局限。',
    bio_en: 'Austrian poet and novelist, born in Prague in 1875 and dead in Valais, Switzerland, in 1926. He regarded himself as a "European poet" and moved between Prague, Berlin, Paris, Russia and Switzerland; the decision to write in self-taught French and the 1912 journey to Russia and to Marina Tsvetaeva mark his turn toward an almost religious attitude to writing. His major works include the Duino Elegies, Letters to a Young Poet and the semi-autobiographical The Notebooks of Malte Laurids Brigge. Letters to a Young Poet collects ten replies Rilke wrote between 1903 and 1908 to the Viennese junior officer Franz Xaver Kappus, who had asked him to judge his poems and to advise him on a literary career; Kappus assembled and published them in 1929. The book has a standalone English Wikipedia article, a Goodreads score of 4.26 from over 130,000 ratings, and a Chinese translation by Feng Zhi scoring 9.0 on Douban with over 6,900 ratings; praise came from Zweig, Feng Zhi and Bei Dao alike. He is widely regarded as one of the most important German-language poets of the twentieth century, and the core of his poetics is the injunction to go inward and endure — to let work grow from one\\'s own necessity rather than from external judgement. Critics note that his aesthetic stance evades concrete social and economic conditions, and that it carries a strain of mysticism and limiting ideas about gender.',
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
    bio_en: 'American cognitive psychologist. He took his B.A. at Duke University in 1983, earned his Ph.D. in cognitive psychology from Harvard in 1990, and has taught in the psychology department of the University of Virginia since 1992. He wrote the long-running "Ask the Cognitive Scientist" column in American Educator, translating experimental cognitive science into judgements teachers and parents can act on. His 2009 book Why Don\\'t Students Like School? distils that research into nine principles, arguing that the mind is not designed for thinking, that working memory is severely limited, that factual knowledge precedes thinking skills, that "learning styles" do not exist and that intelligence is malleable. The English original was published by Jossey-Bass, scores 4.04 on Goodreads from more than 6,000 ratings, and its Chinese edition scores 9.2 on Douban with over 3,000 ratings; the Wall Street Journal ran a review noting that Willingham\\'s answers apply as well outside the classroom. Since around 2000 his research has shifted from the brain basis of learning and memory to the application of cognitive science in K-12 education.',
    ideas_zh: ['大脑不是为了思考而设计的：默认状态是避免思考，因此「走神」不是意志薄弱而是节能', '工作记忆是硬约束：思考的瓶颈是同时可处理的项数，而不是智力高低', '事实先于思维技能：没有背景知识，所谓「批判性思维」只是空中楼阁', '可被反驳之处：把实验室认知科学直接迁移到课堂，效果证据并不一致，本书本身也承认这些原则需要专业判断'],
    ideas_en: ['The mind is not designed for thinking: avoiding thought is the default, so distraction is energy-saving rather than weakness of will', 'Working memory is a hard constraint: the bottleneck on thinking is how many items can be processed at once, not how intelligent one is', 'Facts come before thinking skills: without background knowledge, "critical thinking" is an empty structure', 'Refutable: transferring laboratory cognitive science straight into classrooms has produced inconsistent effect evidence, and the book itself concedes that its principles require professional judgement']
  }
"""

marker = '\n};\n'
idx = src.rindex(marker)
src = src[:idx] + ',\n' + entries + src[idx:]

io.open(path, 'w', encoding='utf-8', newline='').write(src)
print('written ok')
