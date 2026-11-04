/**
 * 书籍 → 视频解读映射（「经典书籍推荐」系列）
 *
 * 来源：Rayman 2026-11-04 提供的紧凑版台账（28 条，书 slug → youtu.be 短链）。
 * 与 `article-videos.js`（深度解读系列）是两条互不相同的视频线，不要混用。
 *
 * 🔴 维护约定
 * 1. 只登记台账里确认存在的条目。播放列表比台账多出的条目（30 vs 28）在核对清楚前
 *    **一律不补**，宁缺勿造。
 * 2. 重制版替换时直接改本文件的值，旧链接不得保留在代码里。
 * 3. slug 必须是 `content/books.manifest.js` / `content/lists/*.js` 里真实存在的书目；
 *    `src/lib/data.js` 会在构建期校验并给出警告。
 */
export const bookVideos = {
  superintelligence: 'https://youtu.be/0o0GoaJ3XmM',
  'human-compatible': 'https://youtu.be/wN8oSyrSCPc',
  'life-3-0': 'https://youtu.be/joPV3II59Mc',
  'ai-superpowers': 'https://youtu.be/3oDe3AwMb7U',
  'ai-2041': 'https://youtu.be/xfKtguS_zsg',
  'genius-makers': 'https://youtu.be/oRvUbOfrFFA',
  'the-alignment-problem': 'https://youtu.be/_tlmocJd3Nw',
  'chip-war': 'https://youtu.be/bqAqWwcg_98',
  'the-information': 'https://youtu.be/pLSo0qQEdcc',
  'understanding-media': 'https://youtu.be/T2vc6Lu4o68',
  'the-structure-of-scientific-revolutions': 'https://youtu.be/WAIGcYaOwkM',
  'the-innovators': 'https://youtu.be/kpu2kd5Uw_E',
  'godel-escher-bach': 'https://youtu.be/FAOePFQcqf4',
  'the-second-machine-age': 'https://youtu.be/uIS-yaO2U3c',
  'the-black-swan': 'https://youtu.be/bygEAoaLMDU',
  'manias-panics-and-crashes': 'https://youtu.be/sCGhRlzmxUE',
  antifragile: 'https://youtu.be/iQdtGW006T0',
  'against-the-gods': 'https://youtu.be/ANmP5CHmIJM',
  'fooled-by-randomness': 'https://youtu.be/SUNE78-51qs',
  'the-ascent-of-money': 'https://youtu.be/e2wYJG_O5SI',
  'the-intelligent-investor': 'https://youtu.be/KsAlqY8-niQ',
  'security-analysis': 'https://youtu.be/txkueVBEZPE',
  'extraordinary-popular-delusions': 'https://youtu.be/j86ELT2_mKQ',
  'the-guns-of-august': 'https://youtu.be/0tQAI0tOtwU',
  'why-nations-fail': 'https://youtu.be/RVSu-G9jYR8',
  'thinking-fast-and-slow': 'https://youtu.be/k-i115ey4U8',
  'the-innovators-dilemma': 'https://youtu.be/0xmu-99IFos',
  // 现行 v1.1（旧版已删，勿回填旧链接）
  'thinking-in-systems': 'https://youtu.be/wRb-dsFClV4'
};
