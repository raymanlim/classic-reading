/**
 * 本地预览服务器
 * 用法：node src/serve.mjs [port]
 *
 * 支持 HTTP Range（206）：音频资源需要字节范围请求才能拖动进度条。
 * 线上 Cloudflare Pages 原生支持，本地预览必须等价，否则播放器行为不一致。
 */
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, extname, dirname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = Number(process.argv[2] || 4321);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4'
};

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const safe = normalize(clean).replace(/^(\.\.[/\\])+/, '');
  let target = join(DIST, safe);
  if (!target.startsWith(DIST)) return null;
  if (existsSync(target) && statSync(target).isDirectory()) target = join(target, 'index.html');
  if (!existsSync(target)) return null;
  return target;
}

const server = createServer((req, res) => {
  const file = resolveFile(req.url || '/');
  if (!file) {
    const fallback = join(DIST, '404.html');
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(existsSync(fallback) ? readFileSync(fallback) : 'Not found');
    return;
  }

  const type = MIME[extname(file)] || 'application/octet-stream';
  const size = statSync(file).size;
  const range = req.headers.range;

  if (range) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (m) {
      const start = m[1] ? Number(m[1]) : 0;
      const end = m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;
      if (start <= end && start < size) {
        const buf = readFileSync(file);
        res.writeHead(206, {
          'content-type': type,
          'content-range': `bytes ${start}-${end}/${size}`,
          'accept-ranges': 'bytes',
          'content-length': end - start + 1
        });
        res.end(buf.subarray(start, end + 1));
        return;
      }
      res.writeHead(416, { 'content-range': `bytes */${size}` });
      res.end();
      return;
    }
  }

  res.writeHead(200, {
    'content-type': type,
    'accept-ranges': 'bytes',
    'content-length': size
  });
  res.end(readFileSync(file));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n▶ 本地预览： http://127.0.0.1:${PORT}/zh/   （英文： /en/）\n`);
});
