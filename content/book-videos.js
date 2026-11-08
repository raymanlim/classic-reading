/**
 * 书籍 → 视频解读映射（「经典书籍推荐」系列）
 *
 * 来源：Rayman 2026-11-04 提供的台账 `book-video-mapping.csv`（28 条），
 * 2026-11-07 依总映射表 `slug-video-mapping-all.md`「书籍页」段落补齐至 32 条。
 * 与 `article-videos.js`（深度解读系列）是两条互不相同的视频线，不要混用。
 *
 * 🔴 30 vs 28 已查清（2026-11-04）：YouTube 播放列表 PLX_l4V1ACK5Q 页面显示
 * 「30 videos」同时标注「2 unavailable videos are hidden」；可访问的 28 条与台账
 * 逐条对应（顺序、书名、标题全部一致）。**不是台账漏记，也不是重复上传**，
 * 差的 2 条是已被平台隐藏的不可用视频，不要凭空补。
 *
 * 🔴 维护约定
 * 1. 只登记台账里确认存在且可访问的条目，宁缺勿造。
 * 2. 重制版替换时直接改本文件的值，旧链接不得保留在代码里。
 * 3. slug 必须是书目里真实存在的；`src/lib/data.js` 会在构建期校验并给出警告。
 * 4. `episode` 为系列期号（AI周/科技周/金融周/投资周）。源自「阅读笔记」的条目
 *    一律不写期号（`''`）——它们与 `note-videos.js` 是同一批视频，期号信息在那边。
 */
export const bookVideos = {
  superintelligence: { url: 'https://youtu.be/0o0GoaJ3XmM', episode: 'AI周第1期' },
  'human-compatible': { url: 'https://youtu.be/wN8oSyrSCPc', episode: 'AI周第2期' },
  'life-3-0': { url: 'https://youtu.be/joPV3II59Mc', episode: 'AI周第3期' },
  'ai-superpowers': { url: 'https://youtu.be/3oDe3AwMb7U', episode: 'AI周第4期' },
  'ai-2041': { url: 'https://youtu.be/xfKtguS_zsg', episode: 'AI周第5期' },
  'genius-makers': { url: 'https://youtu.be/oRvUbOfrFFA', episode: 'AI周第6期' },
  'the-alignment-problem': { url: 'https://youtu.be/_tlmocJd3Nw', episode: 'AI周第7期' },
  'chip-war': { url: 'https://youtu.be/bqAqWwcg_98', episode: '科技周第1期' },
  'the-information': { url: 'https://youtu.be/pLSo0qQEdcc', episode: '科技周第2期' },
  'understanding-media': { url: 'https://youtu.be/T2vc6Lu4o68', episode: '科技周第3期' },
  'the-structure-of-scientific-revolutions': { url: 'https://youtu.be/WAIGcYaOwkM', episode: '科技周第4期' },
  'the-innovators': { url: 'https://youtu.be/kpu2kd5Uw_E', episode: '科技周第5期' },
  'godel-escher-bach': { url: 'https://youtu.be/FAOePFQcqf4', episode: '科技周第6期' },
  'the-second-machine-age': { url: 'https://youtu.be/uIS-yaO2U3c', episode: '科技周第7期' },
  'the-black-swan': { url: 'https://youtu.be/bygEAoaLMDU', episode: '金融周第1期' },
  'manias-panics-and-crashes': { url: 'https://youtu.be/sCGhRlzmxUE', episode: '金融周第2期' },
  antifragile: { url: 'https://youtu.be/iQdtGW006T0', episode: '金融周第3期' },
  'against-the-gods': { url: 'https://youtu.be/ANmP5CHmIJM', episode: '金融周第4期' },
  'fooled-by-randomness': { url: 'https://youtu.be/SUNE78-51qs', episode: '金融周第5期' },
  'the-ascent-of-money': { url: 'https://youtu.be/e2wYJG_O5SI', episode: '金融周第6期' },
  'extraordinary-popular-delusions': { url: 'https://youtu.be/j86ELT2_mKQ', episode: '金融周第7期' },
  'the-intelligent-investor': { url: 'https://youtu.be/KsAlqY8-niQ', episode: '投资周第1期' },
  'security-analysis': { url: 'https://youtu.be/txkueVBEZPE', episode: '投资周第2期' },
  /* 以下条目源自「阅读笔记」系列，期号信息在 content/note-videos.js，此处不重复登记 */
  'the-guns-of-august': { url: 'https://youtu.be/0tQAI0tOtwU', episode: '' },
  'why-nations-fail': { url: 'https://youtu.be/RVSu-G9jYR8', episode: '' },
  'thinking-fast-and-slow': { url: 'https://youtu.be/k-i115ey4U8', episode: '' },
  'the-innovators-dilemma': { url: 'https://youtu.be/0xmu-99IFos', episode: '' },
  // 现行 v1.1（旧版已删，勿回填旧链接）
  'thinking-in-systems': { url: 'https://youtu.be/wRb-dsFClV4', episode: '' },
  'the-design-of-everyday-things': { url: 'https://youtu.be/_ZEvsXLODtI', episode: '' },
  'letters-from-a-stoic': { url: 'https://youtu.be/KStTNfV83ok', episode: '' },
  'on-liberty': { url: 'https://youtu.be/UVpNAs513-k', episode: '' },
  // 2026-11-08 依总映射表补齐（阅读笔记 10月23日 ·《道德经》解读）
  'tao-te-ching': { url: 'https://youtu.be/4PeKj52zrfY', episode: '' }
};
