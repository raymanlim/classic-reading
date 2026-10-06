/**
 * 封面清单校验
 * 用法：node src/covers-check.mjs
 *
 * 检查 public/covers/ 下的图片文件名是否与 100 本书的 slug 一一对应。
 * 在把封面交给构建之前先跑一次，可以避免「文件名拼错导致图片静默不生效」。
 */
import { loadData } from './lib/data.js';
import { listCoverFiles, COVERS_DIR } from './lib/covers.js';

const data = await loadData();
const books = data.books;
const validSlugs = new Set(books.map((b) => b.slug));

const files = listCoverFiles();
const EXTS = ['webp', 'avif', 'jpg', 'jpeg', 'png'];

const matched = [];
const unknown = [];
const seen = new Map();

for (const f of files) {
  const ext = f.split('.').pop().toLowerCase();
  const slug = f.slice(0, f.length - ext.length - 1);
  if (validSlugs.has(slug)) {
    matched.push(slug);
    seen.set(slug, (seen.get(slug) || 0) + 1);
  } else {
    unknown.push(f);
  }
}

const dupes = [...seen.entries()].filter(([, n]) => n > 1).map(([s]) => s);
const missing = books.filter((b) => !seen.has(b.slug)).map((b) => b.slug);

console.log('');
console.log(`封面目录：${COVERS_DIR}`);
console.log(`目录中图片文件：${files.length} 个`);
console.log(`成功匹配书本：${matched.length} / ${books.length}`);
console.log('');

if (unknown.length) {
  console.log(`⚠️  ${unknown.length} 个文件名无法匹配任何书籍 slug（多半是拼写错误）：`);
  for (const f of unknown.slice(0, 40)) console.log(`   - ${f}`);
  if (unknown.length > 40) console.log(`   ... 其余 ${unknown.length - 40} 个省略`);
  console.log('');
}

if (dupes.length) {
  console.log(`⚠️  ${dupes.length} 本书存在多个格式的封面文件（构建会按 webp > avif > jpg > png 取一个）：`);
  for (const s of dupes.slice(0, 20)) console.log(`   - ${s}`);
  console.log('');
}

if (missing.length) {
  console.log(`ℹ️  尚未提供封面（${missing.length} 本），这些书将继续使用程序化封面：`);
  console.log(`   ${missing.join(', ')}`);
  console.log('');
}

if (!unknown.length && !dupes.length) {
  console.log('✅ 文件名全部合法，无拼写错误、无重复格式。');
  console.log('');
}

if (!files.length) {
  console.log('（目录为空——尚未放入任何封面图，站点全部使用程序化封面）');
  console.log('');
}
