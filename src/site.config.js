/**
 * 站点级配置
 * SITE_URL 用于 canonical / hreflang / sitemap / robots 的绝对地址。
 * 发布到新域名后，把这里改成新的固定链接并重新构建即可。
 */
export const SITE_URL = 'https://0e00525f540948a2b66f58b8a0e4962d.sg2.agentos-app.run';

export const SITE = {
  name_zh: '经典书库',
  name_en: 'Classics Library',
  author: 'Rayman',
  email: '',
  buildYear: new Date().getFullYear()
};

/**
 * 构建版本号
 * ------------------------------------------------------------------
 * 每次执行 build.mjs 都不同，用于给 styles.css / app.js 加 `?v=` 查询串，
 * 让浏览器在每次发布后重新拉取资源（缓存击穿）。
 *
 * 背景：发布平台不下发 Cache-Control / ETag 响应头，浏览器会按
 * RFC 7234 的「启发式缓存」规则自行缓存页面与资源 —— 表现为
 * 「站点明明更新了，客户端却还是旧内容」。详见 README「### 10 客户端缓存」。
 */
export const BUILD_ID = String(Date.now()).slice(0, 10);

export const ASSETS = {
  css: '/assets/styles.css',
  js: '/assets/app.js',
  favicon: '/assets/favicon.svg',
  og: '/assets/og.png'
};

export default { SITE_URL, SITE, ASSETS, BUILD_ID };
