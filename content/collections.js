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

export default { featured, readingStatus, statusOrder };
