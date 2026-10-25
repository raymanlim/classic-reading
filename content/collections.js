/**
 * 首页精选 + 我的阅读初始清单
 * featured：首页「精选经典」展示顺序（人工策展）
 * readingStatus：My Reading 的初始清单；用户在本地的修改只存在浏览器中，不会回写这里
 */

export const featured = [
  'the-black-swan',
  'superintelligence',
  'the-intelligent-investor',
  'chip-war',
  'thinking-fast-and-slow',
  'guns-germs-and-steel',
  'the-wealth-of-nations',
  'zero-to-one',
  'meditations',
  'the-innovators-dilemma',
  'poor-charlies-almanack',
  'the-structure-of-scientific-revolutions'
];

export const readingStatus = [
  { book: 'the-black-swan', status: 'finished' },
  { book: 'antifragile', status: 'rereading' },
  { book: 'fooled-by-randomness', status: 'finished' },
  { book: 'the-intelligent-investor', status: 'reading' },
  { book: 'security-analysis', status: 'want' },
  { book: 'poor-charlies-almanack', status: 'finished' },
  { book: 'the-most-important-thing', status: 'finished' },
  { book: 'the-outsiders', status: 'favorite' },
  { book: 'chip-war', status: 'finished' },
  { book: 'the-innovators-dilemma', status: 'finished' },
  { book: 'competitive-strategy', status: 'reading' },
  { book: 'zero-to-one', status: 'finished' },
  { book: 'only-the-paranoid-survive', status: 'finished' },
  { book: 'superintelligence', status: 'reading' },
  { book: 'artificial-intelligence-a-modern-approach', status: 'want' },
  { book: 'deep-learning', status: 'want' },
  { book: 'the-alignment-problem', status: 'reading' },
  { book: 'thinking-fast-and-slow', status: 'finished' },
  { book: 'noise', status: 'favorite' },
  { book: 'superforecasting', status: 'finished' },
  { book: 'thinking-in-systems', status: 'finished' },
  { book: 'guns-germs-and-steel', status: 'finished' },
  { book: 'sapiens', status: 'finished' },
  { book: '1587-a-year-of-no-significance', status: 'favorite' },
  { book: 'the-wealth-of-nations', status: 'reading' },
  { book: 'why-nations-fail', status: 'finished' },
  { book: 'this-time-is-different', status: 'want' },
  { book: 'the-worldly-philosophers', status: 'finished' },
  { book: 'meditations', status: 'rereading' },
  { book: 'the-analects', status: 'rereading' },
  { book: 'the-information', status: 'finished' },
  { book: 'godel-escher-bach', status: 'want' }
];

/** 阅读状态枚举（顺序即展示顺序） */
export const statusOrder = ['reading', 'rereading', 'finished', 'want', 'favorite'];

/**
 * 跨越分类的思想坐标（精选 · 首页策展入口）
 * ------------------------------------------------------------------
 * 「主题」栏目本就是跨分类的思想坐标，但仅以标签形式呈现时，
 * 读者看不到「同一个问题可以由不同学科的书来回答」这件事。
 * 这里人工挑出若干坐标，每个坐标配 4 本**来自不同分类**的代表书，
 * 在首页以卡片形式展示，让跨分类关系可见。
 *
 * 约束：
 *   - slug 必须存在于 content/taxonomy.js 的 topics 中；
 *   - books 里的 slug 必须是已入库书籍，缺失时构建会跳过该本（不报错）；
 *   - 同一坐标内尽量让 category 分散，避免四本同属一类。
 */
export const featuredCoordinates = [
  {
    slug: 'attention-and-depth',
    note_zh: '当注意力成为最稀缺的资源，深度思考还如何可能。',
    note_en: 'When attention becomes the scarcest resource, how is deep thinking still possible?',
    books: ['the-shallows', 'the-palliative-society', 'reclaiming-conversation', 'the-end-of-education']
  },
  {
    slug: 'education',
    note_zh: '教育是为了传授技能、塑造公民，还是让人学会自由地思考。',
    note_en: 'Is education for skills, for citizenship, or for learning to think freely?',
    books: ['democracy-and-education', 'beneath-the-wheel', 'pedagogy-of-the-oppressed', 'a-room-of-ones-own']
  },
  {
    slug: 'essays-and-reflection',
    note_zh: '把自己当作研究对象：随笔如何把模糊的感受逼成清晰的判断。',
    note_en: 'Taking oneself as the object of study: how the essay turns vague feeling into clear judgment.',
    books: ['montaigne-essays', 'philosophical-letters', 'the-common-reader', 'a-room-of-ones-own']
  },
  {
    slug: 'ai',
    note_zh: '机器能否思考，以及这个问题为何重要。',
    note_en: 'Whether machines can think — and why the question matters.',
    books: ['superintelligence', 'nexus', 'the-alignment-problem', 'philosophical-investigations']
  },
  {
    slug: 'power-and-politics',
    note_zh: '权力如何运作，以及人为何会服从。',
    note_en: 'How power operates, and why people obey.',
    books: ['animal-farm', 'the-dictators-handbook', 'the-human-condition', 'obedience-to-authority']
  },
  {
    slug: 'modern-society',
    note_zh: '孤独、内卷与代际困境：现代生活为何让人疲惫。',
    note_en: 'Loneliness, involution, and generational strain: why modern life exhausts people.',
    books: ['the-palliative-society', 'a-luminous-republic', 'zhao-hua-xi-shi', 'slouching-towards-bethlehem']
  }
];

export default { featured, readingStatus, statusOrder, featuredCoordinates };
