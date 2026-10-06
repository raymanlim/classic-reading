/**
 * 封面图片扫描
 *
 * 约定：把生成的封面图放在 public/covers/ 下，文件名 = 书籍 slug + 扩展名。
 *   例：public/covers/the-black-swan.webp
 *
 * 构建时会扫描该目录；某本书有图就用图，没有图则自动回退到程序化排版封面。
 * 因此可以分批交付，不会因为「只做了一部分」而构建失败。
 *
 * 🔴 只有 `.webp` 会被站点采用（见 coverImage / coverStats）。
 * 为什么：非 webp 原图（PNG/JPG，单张 2–2.5 MB）一旦被采用，就会被复制进
 * dist 并随发布上传，白白拖大发布包。这类「构建期间随手投图」的坑已连续踩三次
 * （Meditations.png、Poor Charlie's Almanack.png + The Most Important Thing.png、
 * The Innovators.png），故改为**硬性只认 webp**：
 *   - 非 webp 封面被忽略 → 该书回退到程序化封面（不会出现 404 破图）
 *   - 构建时会打印醒目告警，提示先跑 `npm run covers:ingest -- --apply`
 *   - `listCoverFiles()` 仍然列出全部图片格式，因此 covers:ingest / covers-check 能看见它们
 */
import { existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const COVERS_DIR = join(ROOT, 'public', 'covers');

/** 支持的扩展名，按优先级排序（越靠前越优先）。仅 webp 会被站点采用。 */
const EXTS = ['webp', 'avif', 'jpg', 'jpeg', 'png'];

/** 站点对外提供的封面格式。其余格式须先经 covers:ingest 转换。 */
export const SITE_COVER_EXT = 'webp';

let cache = null;

function scan() {
  if (cache) return cache;
  const map = new Map();
  if (existsSync(COVERS_DIR)) {
    for (const name of readdirSync(COVERS_DIR)) {
      const m = /^(.+)\.([A-Za-z0-9]+)$/.exec(name);
      if (!m) continue;
      const slug = m[1];
      const ext = m[2].toLowerCase();
      const rank = EXTS.indexOf(ext);
      if (rank < 0) continue;
      const prev = map.get(slug);
      if (!prev || rank < prev.rank) map.set(slug, { file: name, ext, rank });
    }
  }
  cache = map;
  return map;
}

/** 目录中「非站点格式」的图片文件（构建期告警用） */
export function nonWebpCoverFiles() {
  return listCoverFiles().filter((f) => (f.split('.').pop() || '').toLowerCase() !== SITE_COVER_EXT);
}

/** 返回该书的封面图 URL；只认 webp，否则返回 null（回退程序化封面） */
export function coverImage(slug) {
  const hit = scan().get(slug);
  return hit && hit.ext === SITE_COVER_EXT ? `/assets/covers/${hit.file}` : null;
}

/** 构建期统计：已提供封面图的书本数量（只统计 webp，且能对应到真实书籍的 slug） */
export function coverStats(slugs) {
  const webpSlugs = [...scan().entries()].filter(([, v]) => v.ext === SITE_COVER_EXT).map(([s]) => s);
  if (!slugs) return { count: webpSlugs.length, slugs: webpSlugs.sort() };
  const valid = new Set(slugs);
  const hit = webpSlugs.filter((s) => valid.has(s)).sort();
  return { count: hit.length, slugs: hit, total: slugs.length };
}

/** 目录中所有封面文件名（含无法匹配到 slug 的、含非 webp 的），供校验/接入脚本使用 */
export function listCoverFiles() {
  if (!existsSync(COVERS_DIR)) return [];
  return readdirSync(COVERS_DIR).filter((f) => EXTS.includes((f.split('.').pop() || '').toLowerCase()));
}

export { EXTS };
