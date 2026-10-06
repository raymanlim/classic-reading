/**
 * 已下线路径的重定向表
 * ------------------------------------------------------------------
 * 用途：站点曾发布过、后来因合并或删除而下线的页面。
 *
 * 为什么必须显式保留：发布沙箱是**复用 + 合并**的，不是「替换」。
 * 本地 dist/ 里删掉的文件不会自动从线上消失，旧 URL 仍会返回 200。
 * 因此每下线一个已发布过的路径，都要在这里留一条重定向存根把它覆盖掉，
 * 否则线上会长期存在一个孤立的重复页面（对 SEO 不利）。
 *
 * 字段：from / to 均为「不含语言前缀、不含首尾斜杠」的路径。
 * 构建时会为每种语言生成 <from>/index.html：
 *   meta refresh 跳转到 to，canonical 指向 to，并标 noindex。
 * 重定向页不进 sitemap。
 */
export const redirects = [
  /* 小鸣说书单条目《历史的终结及最后之人》与策展经典 the-end-of-history 是同一本书，
     已从 content/lists/batch-5.js 移除，此处把线上旧路径指回策展经典页面。 */
  {
    from: 'books/the-end-of-history-and-the-last-man',
    to: 'books/the-end-of-history'
  }
];

export default { redirects };
