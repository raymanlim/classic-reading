#!/usr/bin/env node
/**
 * 文章视频映射：单命令回填 + 全量核对（零依赖，Node 20+）
 *
 * 用法：
 *   node scripts/backfill-article-video.mjs --list
 *   node scripts/backfill-article-video.mjs --check
 *   node scripts/backfill-article-video.mjs --backfill \
 *       --slug <slug> --url https://youtu.be/<id> --episode <N> [--dry-run] [--force]
 *   node scripts/backfill-article-video.mjs --check --md <备用总表路径>
 *
 * 回填会同时更新两处，避免台账漂移：
 *   1. content/article-videos.js —— articleVideos 追加（或 --force 替换）+ videoPending 移除
 *   2. docs/slug-video-mapping-all.md —— 文章页追加行 + 待制作移除行 + 更新日期
 *
 * 🔴 本脚本不负责 build / check / git 提交；执行完仍需走发布链：
 *    rm -rf dist && mkdir -p dist
 *    CODEBUDDY_SAFE_DELETE_ENABLED=0 node src/build.mjs
 *    node src/check.mjs
 *    git-sync.sh --paths "content/article-videos.js,docs/slug-video-mapping-all.md" --ignore-baseline
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const SELF = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(SELF), '..');
const CODE = path.join(ROOT, 'content/article-videos.js');
const BOOKS = path.join(ROOT, 'content/book-videos.js');
const NOTES = path.join(ROOT, 'content/note-videos.js');
const ARTICLES_DIR = path.join(ROOT, 'content/articles');
const CONTENT_DIR = path.join(ROOT, 'content');
const DOC_DEFAULT = path.join(ROOT, 'docs/slug-video-mapping-all.md');

const URL_RE = /^https:\/\/youtu\.be\/[A-Za-z0-9_-]{6,}$/;
const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : undefined; };
const flag = (n) => argv.includes(n);
const DOC = opt('--md') || DOC_DEFAULT;

const die = (m) => { console.error(`ERROR: ${m}`); process.exit(1); };
const load = (p) => import(pathToFileURL(p).href);
const readLF = (p) => fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n');
const writeKeepEol = (p, original, next) => {
  const crlf = original.includes('\r\n');
  fs.writeFileSync(p, crlf ? next.replace(/\n/g, '\r\n') : next, 'utf8');
};
const localDate = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const USAGE = `用法：
  node scripts/backfill-article-video.mjs --list
  node scripts/backfill-article-video.mjs --check [--md <path>]
  node scripts/backfill-article-video.mjs --backfill --slug <slug> --url <youtu.be短链> --episode <N> [--dry-run] [--force]`;

/* ------------------------------------------------------------------ */
/* A+B：全量核对                                                        */
/* ------------------------------------------------------------------ */
async function runCheck() {
  const { articleVideos, videoExcluded, videoPending } = await load(CODE);
  const { bookVideos } = await load(BOOKS);
  const { noteVideos, noteVideoSkipped } = await load(NOTES);

  let problems = 0;
  const report = (label, items) => {
    console.log(`  ${label}: ${items.length ? items.join(', ') : '无'}`);
    return items.length;
  };

  console.log('=== A. 代码自检 ===');
  problems += report('书籍 URL 格式异常',
    Object.entries(bookVideos).filter(([, v]) => !URL_RE.test(String(v.url))).map(([k]) => k));
  problems += report('文章 URL 格式异常',
    Object.entries(articleVideos).filter(([, v]) => !URL_RE.test(String(v.url))).map(([k]) => k));
  problems += report('文章期号非法',
    Object.entries(articleVideos)
      .filter(([, v]) => !Number.isInteger(v.episode) || v.episode <= 0)
      .map(([k, v]) => `${k}=${v.episode}`));

  const aKeys = Object.keys(articleVideos);
  problems += report('三态冲突', [
    ...aKeys.filter((s) => videoPending.includes(s)).map((s) => `${s}: 已发布∩待制作`),
    ...aKeys.filter((s) => videoExcluded.includes(s)).map((s) => `${s}: 已发布∩不做视频`),
    ...videoPending.filter((s) => videoExcluded.includes(s)).map((s) => `${s}: 待制作∩不做视频`),
  ]);
  problems += report('笔记视频冲突', Object.keys(noteVideos).filter((id) => noteVideoSkipped[id]));

  const articleSlugs = [];
  for (const f of fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.js'))) {
    const m = await load(path.join(ARTICLES_DIR, f));
    if (m.article?.slug) articleSlugs.push(m.article.slug);
  }
  const registered = new Set([...aKeys, ...videoPending, ...videoExcluded]);
  problems += report('文章未登记任何状态', articleSlugs.filter((s) => !registered.has(s)));
  console.log(`  （全站 ${articleSlugs.length} 篇文章 / 已登记 ${registered.size} 个 slug）`);

  const files = [];
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.js')) files.push(p);
    }
  };
  walk(CONTENT_DIR);
  const slugPool = new Set();
  for (const f of files) {
    const t = fs.readFileSync(f, 'utf8');
    for (const m of t.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)) slugPool.add(m[1]);
    for (const m of t.matchAll(/^\s*['"]([a-z0-9-]+)['"]\s*:\s*\{/gm)) slugPool.add(m[1]);
  }
  problems += report('书籍映射指向不存在的书', Object.keys(bookVideos).filter((s) => !slugPool.has(s)));
  problems += report('文章映射/状态清单指向不存在的文章',
    [...aKeys, ...videoPending, ...videoExcluded].filter((s) => !articleSlugs.includes(s)));

  if (!fs.existsSync(DOC)) {
    console.log('\n=== B. 总表比对：跳过 ===');
    console.log(`  未找到总表：${DOC}`);
  } else {
    console.log(`\n=== B. 总表比对（${path.relative(ROOT, DOC)}） ===`);
    const md = readLF(DOC);
    const cut = (from, to) => md.slice(md.indexOf(from), to ? md.indexOf(to) : md.length);
    const rows = (txt) => txt.split('\n')
      .filter((l) => /^\s*\|/.test(l))
      .map((l) => l.split('|').slice(1, -1).map((c) => c.trim()))
      // 首字符须为字母/数字，否则 Markdown 分隔行 `|---|` 会被当成 slug `---`
      .filter((c) => c.length >= 2 && SLUG_RE.test(c[0]));

    const mdBooks = Object.fromEntries(rows(cut('## 一、书籍页', '## 二、文章页'))
      .map(([s, n, e, u]) => [s, { name: n, ep: e, url: u }]));
    const mdArticles = Object.fromEntries(rows(cut('## 二、文章页', '## 三、待制作'))
      .map(([s, n, e, u]) => [s, { name: n, ep: e, url: u }]));
    const mdPending = rows(cut('## 三、待制作', '## 四、不做视频')).map((r) => r[0]);
    const mdExcluded = cut('## 四、不做视频').split('\n')
      .filter((l) => /^\s*-\s*[a-z0-9-]+/.test(l))
      .map((l) => l.match(/^\s*-\s*([a-z0-9-]+)/)[1]);

    const diff = (label, expect, actual, ignoreExtra = []) => {
      const e = Object.keys(expect), a = Object.keys(actual);
      const missing = e.filter((k) => !actual[k]);
      const extra = a.filter((k) => !expect[k] && !ignoreExtra.includes(k));
      const badUrl = e.filter((k) => actual[k] && actual[k].url !== expect[k].url);
      const badEp = e.filter((k) => actual[k] && 'episode' in actual[k] &&
        (expect[k].ep || '').match(/^第(\d+)期$/) &&
        Number((expect[k].ep || '').match(/^第(\d+)期$/)[1]) !== actual[k].episode);
      console.log(`\n  [${label}] 总表 ${e.length} 条 / 代码 ${a.length} 条`);
      console.log(`    缺失(总表有·代码无): ${missing.length ? missing.join(', ') : '无'}`);
      console.log(`    多余(代码有·总表无): ${extra.length ? extra.join(', ') : '无'}`);
      console.log(`    URL 不一致: ${badUrl.length ? badUrl.map((k) => `${k} (${expect[k].url} vs ${actual[k].url})`).join(' | ') : '无'}`);
      console.log(`    期号不一致: ${badEp.length ? badEp.join(', ') : '无'}`);
      return missing.length + extra.length + badUrl.length + badEp.length;
    };
    const setDiff = (label, expect, actual, ignoreMissing = []) => {
      const missing = expect.filter((s) => !actual.includes(s) && !ignoreMissing.includes(s));
      const extra = actual.filter((s) => !expect.includes(s));
      console.log(`\n  [${label}] 总表 ${expect.length} 条 / 代码 ${actual.length} 条`);
      console.log(`    缺失: ${missing.length ? missing.join(', ') : '无'}`);
      console.log(`    多余: ${extra.length ? extra.join(', ') : '无'}`);
      return missing.length + extra.length;
    };

    const promoted = mdPending.filter((s) => articleVideos[s]);
    console.log(`\n  [状态迁移] 总表「待制作」中已上线: ${promoted.length
      ? promoted.map((s) => `${s}（第 ${articleVideos[s].episode} 期）`).join(', ') : '无'}`);
    if (promoted.length) console.log('    → 合法迁移；请更新总表：从「待制作」移除、加入「文章页」');

    problems += diff('书籍页 → book-videos.js', mdBooks, bookVideos);
    problems += diff('文章页 → article-videos.js', mdArticles, articleVideos, promoted);
    problems += setDiff('待制作 → videoPending', mdPending, videoPending, promoted);
    problems += setDiff('不做视频 → videoExcluded', mdExcluded, videoExcluded);
    problems += report('总表书 slug 在全库不存在', Object.keys(mdBooks).filter((s) => !slugPool.has(s)));
  }

  console.log(`\n=== 差异合计: ${problems} ===`);
  process.exit(problems ? 1 : 0);
}

/* ------------------------------------------------------------------ */
/* --list：排期视图                                                     */
/* ------------------------------------------------------------------ */
async function runList() {
  const { articleVideos, videoExcluded, videoPending } = await load(CODE);
  const eps = Object.values(articleVideos).map((v) => v.episode).filter(Number.isInteger);
  console.log(`已发布视频: ${Object.keys(articleVideos).length} 篇（期号 ${Math.min(...eps)}–${Math.max(...eps)}）`);
  console.log(`\n待制作 (${videoPending.length}):`);
  for (const s of videoPending) {
    const f = path.join(ARTICLES_DIR, `${s}.js`);
    let title = '(文章文件未找到)', date = '';
    if (fs.existsSync(f)) {
      const m = await load(f);
      title = m.article?.title_zh || title;
      date = m.article?.publish_date || '';
    }
    console.log(`  - ${s} | ${title} | ${date}`);
  }
  console.log(`\n不做视频 (${videoExcluded.length}): ${videoExcluded.join(', ')}`);
  console.log('\n回填命令模板：');
  console.log('  node scripts/backfill-article-video.mjs --backfill --slug <slug> --url https://youtu.be/<id> --episode <N>');
}

/* ------------------------------------------------------------------ */
/* --backfill：改代码 + 同步总表                                        */
/* ------------------------------------------------------------------ */
async function runBackfill() {
  const slug = opt('--slug');
  const url = opt('--url');
  const episode = Number(opt('--episode'));
  const dry = flag('--dry-run');
  const force = flag('--force');

  if (!slug || !SLUG_RE.test(slug)) die('--slug 缺失或格式非法');
  if (!url || !URL_RE.test(url)) die('--url 必须是 https://youtu.be/<id> 形式的短链');
  if (!Number.isInteger(episode) || episode <= 0) die('--episode 必须是正整数');

  const articleFile = path.join(ARTICLES_DIR, `${slug}.js`);
  if (!fs.existsSync(articleFile)) die(`文章文件不存在：${path.relative(ROOT, articleFile)}`);
  const articleMod = await load(articleFile);
  const title = articleMod.article?.title_zh || slug;
  const { articleVideos, videoPending } = await load(CODE);

  /* 幂等 / 重制版保护 */
  if (articleVideos[slug]) {
    const cur = articleVideos[slug];
    const same = cur.url === url && cur.episode === episode;
    if (same && !force) {
      console.log(`OK 幂等：${slug} 已登记且值一致（第 ${episode} 期 / ${url}），无需改动`);
      return;
    }
    if (!same && !force) die(`${slug} 已存在但值不同（现为 ${cur.url} / 第 ${cur.episode} 期）。若为重制版替换，请加 --force`);
    /* --force：值相同也强制重写（可刷新条目格式），亦便于无损验证写入链路 */
  }

  const date = localDate();
  const codeOrig = fs.readFileSync(CODE, 'utf8');
  let code = readLF(CODE);
  const entryLine = `  '${slug}': { url: '${url}', episode: ${episode} },`;

  if (articleVideos[slug]) {
    const lineRe = new RegExp(`^\\s*'${slug}':\\s*\\{[^}]*\\},?\\s*$`, 'm');
    if (!lineRe.test(code)) die(`无法定位 ${slug} 在 articleVideos 中的行`);
    code = code.replace(lineRe, entryLine);
  } else {
    const start = code.indexOf('export const articleVideos = {');
    const end = code.indexOf('\n};', start);
    if (start < 0 || end < 0) die('无法定位 articleVideos 块');
    const fromPending = videoPending.includes(slug);
    const comment = `  // 第 ${episode} 期（${date} 回填${fromPending ? '，原列 videoPending' : ''}）`;
    code = code.slice(0, end) + `\n${comment}\n${entryLine}` + code.slice(end);
  }

  /* 只在 videoPending 块内移除，避免误删其它同名行 */
  const pStart = code.indexOf('export const videoPending = [');
  const pEnd = pStart >= 0 ? code.indexOf('\n];', pStart) : -1;
  if (pStart >= 0 && pEnd >= 0) {
    const block = code.slice(pStart, pEnd);
    const trimmed = block.replace(new RegExp(`^[ \\t]*'${slug}',[ \\t]*\\n`, 'm'), '');
    code = code.slice(0, pStart) + trimmed + code.slice(pEnd);
  }

  /* 同步总表 */
  let docOrig = null, doc = null, docNote = '总表不存在，跳过（仅代码已更新）';
  if (fs.existsSync(DOC)) {
    docOrig = fs.readFileSync(DOC, 'utf8');
    doc = readLF(DOC);
    const s2 = doc.indexOf('## 二、文章页');
    const s3 = doc.indexOf('## 三、待制作');
    if (s2 < 0 || s3 < 0) die('总表缺少「二、文章页」或「三、待制作」段');
    const rowRe = new RegExp(`^\\|\\s*${slug}\\s*\\|`);
    const newRow = `| ${slug} | ${title} | 第${episode}期 | ${url} |`;

    const part = doc.slice(s2, s3).split('\n');
    let lastIdx = -1, existIdx = -1;
    part.forEach((l, i) => {
      if (/^\|\s*[a-z0-9][a-z0-9-]*\s*\|/.test(l)) lastIdx = i;
      if (rowRe.test(l)) existIdx = i;
    });
    if (lastIdx < 0) die('总表「二、文章页」段未找到数据行');
    if (existIdx >= 0) part[existIdx] = newRow;
    else part.splice(lastIdx + 1, 0, newRow);
    doc = doc.slice(0, s2) + part.join('\n') + doc.slice(s3);

    const t3 = doc.indexOf('## 三、待制作');
    const t4 = doc.indexOf('## 四、不做视频', t3);
    if (t3 >= 0 && t4 >= 0) {
      const kept = doc.slice(t3, t4).split('\n').filter((l) => !rowRe.test(l));
      doc = doc.slice(0, t3) + kept.join('\n') + doc.slice(t4);
    }

    const a2 = doc.indexOf('## 二、文章页');
    const a3 = doc.indexOf('## 三、待制作');
    const cnt = (doc.slice(a2, a3).match(/^\|\s*[a-z0-9][a-z0-9-]*\s*\|/gm) || []).length;
    doc = doc.replace(/(## 二、文章页[^\n]*?共\s*)\d+(\s*篇)/, `$1${cnt}$2`);
    doc = doc.replace(/^更新日期：\d{4}-\d{2}-\d{2}/m, `更新日期：${date}`);
    docNote = `文章页 ${existIdx >= 0 ? '替换' : '追加'} 1 行 / 待制作移除 1 行 / 更新日期 ${date}`;
  }

  console.log(`回填目标: ${slug} · 第 ${episode} 期 · ${url}`);
  console.log(`文章标题: ${title}`);
  console.log(`  content/article-videos.js : ${articleVideos[slug] ? '--force 替换条目' : '追加条目'} / 从 videoPending 移除`);
  console.log(`  ${path.relative(ROOT, DOC)} : ${docNote}`);

  if (dry) {
    console.log('\n[--dry-run] 未写入任何文件。');
    return;
  }

  writeKeepEol(CODE, codeOrig, code);
  if (docOrig !== null) writeKeepEol(DOC, docOrig, doc);
  console.log('\n已写入。开始写后自检：');
  const r = spawnSync(process.execPath, [SELF, '--check', '--md', DOC], { stdio: 'inherit' });
  if (r.status !== 0) die('写后自检未通过，请检查上面的差异输出');
  console.log('\n下一步：build → check → git-sync 发布（脚本不代劳）。');
}

if (flag('--check')) await runCheck();
else if (flag('--list')) await runList();
else if (flag('--backfill')) await runBackfill();
else console.log(USAGE);
