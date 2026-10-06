/**
 * i18n 运行时
 * 语言资源位于 /locales/{zh-CN,en-US}.json
 * 所有界面文字必须通过 t() 取得，禁止在模板中硬编码。
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');

export const LANGS = ['zh', 'en'];

/** 站点语言 → BCP47（用于 hreflang / og:locale / html lang） */
export const LANG_META = {
  zh: { bcp47: 'zh-CN', htmlLang: 'zh-CN', ogLocale: 'zh_CN', label: '中文' },
  en: { bcp47: 'en', htmlLang: 'en', ogLocale: 'en_US', label: 'English' }
};

const dicts = {};
for (const lang of LANGS) {
  const file = lang === 'zh' ? 'zh-CN.json' : 'en-US.json';
  dicts[lang] = JSON.parse(readFileSync(join(ROOT, 'locales', file), 'utf8'));
}

function lookup(dict, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
}

/**
 * 取界面文案。缺失时返回 key 本身，便于构建期发现遗漏。
 */
export function t(lang, path, vars) {
  let value = lookup(dicts[lang], path);
  if (value === undefined) value = lookup(dicts.zh, path);
  if (value === undefined) return path;
  if (typeof value === 'string' && vars) {
    for (const [k, v] of Object.entries(vars)) value = value.replaceAll(`{${k}}`, String(v));
  }
  return value;
}

/** 取数组类文案（如 about.principles） */
export function tList(lang, path) {
  const value = lookup(dicts[lang], path) ?? lookup(dicts.zh, path);
  return Array.isArray(value) ? value : [];
}

/** 另一语言 */
export function otherLang(lang) {
  return lang === 'zh' ? 'en' : 'zh';
}

/** 年份显示：负数表示公元前 */
export function formatYear(lang, year) {
  if (year === null || year === undefined || year === '') return '';
  const n = Number(year);
  if (Number.isNaN(n)) return String(year);
  if (n < 0) {
    const abs = Math.abs(n);
    return lang === 'zh' ? `约公元前 ${abs} 年` : `c. ${abs} BC`;
  }
  return lang === 'zh' ? `${n} 年` : String(n);
}

const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/** 日期显示：ISO 'YYYY-MM-DD' */
export function formatDate(lang, iso) {
  if (!iso) return '';
  const [y, m, d] = String(iso).split('-').map(Number);
  if (!y || !m || !d) return String(iso);
  if (lang === 'zh') return `${y} 年 ${m} 月 ${d} 日`;
  return `${MONTHS_EN[m - 1]} ${d}, ${y}`;
}

/** 阅读时长 */
export function formatReadingTime(lang, hours) {
  if (!hours) return '';
  return lang === 'zh' ? `约 ${hours} 小时` : `~${hours} hours`;
}

/** 分类/主题名称按语言取 */
export function nameOf(lang, entity) {
  if (!entity) return '';
  return lang === 'zh' ? entity.name_zh : entity.name_en;
}

export function descriptionOf(lang, entity) {
  if (!entity) return '';
  return lang === 'zh' ? entity.description_zh : entity.description_en;
}

/** 书名：按语言决定主次（中文模式主显中文名，英文模式主显英文名） */
export function bookTitle(lang, book) {
  if (!book) return '';
  return lang === 'zh' ? `《${book.title_zh}》` : book.title_en;
}

export function bookTitleSecondary(lang, book) {
  if (!book) return '';
  return lang === 'zh' ? book.title_en : `《${book.title_zh}》`;
}

/**
 * 短书名：取主标题（冒号前的部分），用于封面、卡片等空间受限处。
 * 例如「黑天鹅：如何应对不可预知的未来」→「黑天鹅」；
 *      "Sapiens: A Brief History of Humankind" → "Sapiens"
 */
export function titleShort(raw) {
  const s = String(raw || '');
  const m = s.match(/^(.{2,58}?)[：:]\s*(.+)$/);
  if (!m) return s;
  const main = m[1].trim();
  return main.length >= 2 ? main : s;
}

/** 书名主标题（按语言） */
export function bookTitleMain(lang, book) {
  if (!book) return '';
  return lang === 'zh' ? titleShort(book.title_zh) : titleShort(book.title_en);
}

/** 书名主标题的另一种语言（用于副显） */
export function bookTitleMainAlt(lang, book) {
  if (!book) return '';
  return lang === 'zh' ? titleShort(book.title_en) : titleShort(book.title_zh);
}

export default { t, tList, LANGS, LANG_META, formatYear, formatDate, nameOf, bookTitle };
