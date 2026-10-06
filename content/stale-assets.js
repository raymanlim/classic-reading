/**
 * 陈旧资源「墓碑」表
 * ------------------------------------------------------------------
 * 用途：站点曾发布过、后来因合并或删除而下线的**静态资源**（图片等）。
 *
 * 为什么必须显式保留：发布沙箱是**复用 + 合并**的，不是「替换」。
 * 本地 dist/ 里删掉的文件不会自动从线上消失，旧 URL 仍会返回 200。
 *
 * 这与 content/redirects.js 是同一类问题的两种形态：
 *   - redirects.js  处理**页面路径**（生成 <from>/index.html 重定向存根）
 *   - 本文件处理**静态资源**（无法用 HTML 存根覆盖，改为写入 1×1 透明 PNG 占位）
 *
 * 为什么必须处理：封面原图是 PNG，单张 2–2.5 MB。一旦某轮构建期间误把原图
 * 复制进 dist 并发布，它会**永久留在线上**，即使本地后来清理干净。
 * 实测累积了 9 张、约 20.7 MB 死重。
 *
 * 用法：每发现一个线上残留的资源，把它的路径（相对 dist/，不含首尾斜杠）
 * 加进下面的数组。构建时会自动写入几十字节的占位文件把它覆盖掉。
 *
 * ⚠️ 只需追加，不要删除已有条目 —— 删掉条目会让线上残留重新变成大图。
 */
export const staleAssets = [
  'assets/covers/Crystal Fire.png',
  'assets/covers/Guns, Germs, and Steel.png',
  'assets/covers/Poor Charlie\'s Almanack.png',
  'assets/covers/The Human Condition.png',
  'assets/covers/The Innovator\'s Dilemma.png',
  'assets/covers/The Most Important Thing.png',
  'assets/covers/The Society of Mind.png',
  'assets/covers/Thinking, Fast and Slow.png',
  'assets/covers/he Man Who Mistook His Wife for a Hat and Other Clinical Tales.png'
];

export default { staleAssets };
