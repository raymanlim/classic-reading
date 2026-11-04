/**
 * 文章 → YouTube「深度解读」视频映射
 * ------------------------------------------------------------------
 * 权威来源：docs/article-video-mapping-2026-11-04.csv（Rayman 提供）
 *   频道「平和通神」@limrayman-gd1pz · 播放列表「深度解读」
 *   https://www.youtube.com/playlist?list=PLNR6jJn9QOTY
 *
 * 本文件由 CSV 生成，请勿手工改动条目；更新流程：
 *   1. 在 CSV 中补充/修改 youtube_url 与 status
 *   2. 重新生成本文件（或按同样格式手工追加一行）
 *   3. node src/build.mjs && node src/check.mjs
 *
 * 状态语义：
 *   - articleVideos：已发布且有可访问链接，模板渲染「视频解读」区块
 *   - videoExcluded：「不做-清单指南类」，永久留空，不渲染
 *   - videoPending：「待制作」及 CSV 未覆盖的新文，留空，待上线后移入 articleVideos
 *
 * 🔴 无视频的文章一律留空，不写占位、不编造链接。
 */
export const articleVideos = {
  // 第 1 期
  'when-the-measure-becomes-the-target': { url: 'https://youtu.be/ywQ4eJcISgg', episode: 1 },
  // 第 2 期
  'the-scarcity-of-attention': { url: 'https://youtu.be/unQUDPV7B8o', episode: 2 },
  // 第 3 期
  'the-architecture-of-waiting': { url: 'https://youtu.be/dGENfecgFD4', episode: 3 },
  // 第 4 期
  'the-ledger-of-division-of-labor': { url: 'https://youtu.be/7OG1rNQ2bEU', episode: 4 },
  // 第 5 期
  'the-price-of-warning': { url: 'https://youtu.be/fqx-fQeSHuE', episode: 5 },
  // 第 6 期
  'the-window-before-lock-in': { url: 'https://youtu.be/ywytbRbTaxg', episode: 6 },
  // 第 7 期
  'the-dilution-of-responsibility': { url: 'https://youtu.be/l-uryL7u1go', episode: 7 },
  // 第 8 期
  'the-order-before-the-thing': { url: 'https://youtu.be/re-_fQqB3Jc', episode: 8 },
  // 第 9 期
  'the-disappearance-of-slack': { url: 'https://youtu.be/wdcN2MNjbOA', episode: 9 },
  // 第 10 期
  'the-evidence-that-isnt-there': { url: 'https://youtu.be/2j6z3EsoPh4', episode: 10 },
  // 第 11 期
  'the-price-of-knowledge': { url: 'https://youtu.be/lyV77pSQ1jE', episode: 11 },
  // 第 12 期
  'the-practice-that-automation-cancels': { url: 'https://youtu.be/FnZTev6Y7lk', episode: 12 },
  // 第 13 期
  'the-use-of-forgetting': { url: 'https://youtu.be/3PBxBOoBdf4', episode: 13 },
  // 第 14 期
  'the-treason-of-inheritance': { url: 'https://youtu.be/0qXNkT_YzJY', episode: 14 },
  // 第 15 期
  'the-layering-of-credit': { url: 'https://youtu.be/PE2bQ41m9lw', episode: 15 },
  // 第 16 期
  'the-invention-of-the-average': { url: 'https://youtu.be/66pPnXkv22o', episode: 16 },
  // 第 17 期
  'the-coordinates-of-comparison': { url: 'https://youtu.be/ZGJ0hEPStWM', episode: 17 },
  // 第 18 期
  'the-unteachable-part': { url: 'https://youtu.be/Pn_y3Ch6imI', episode: 18 },
  // 第 19 期
  'why-smart-people-fail-together': { url: 'https://youtu.be/iOBFrZ_cR6k', episode: 19 },
  // 第 20 期
  'the-invisibility-of-maintenance': { url: 'https://youtu.be/YVbVGVd4Zb0', episode: 20 },
  // 第 21 期
  'the-weight-of-tacit-knowledge': { url: 'https://youtu.be/PdJAyt6gOS4', episode: 21 },
  // 第 22 期
  'the-diminishing-returns-of-discovery': { url: 'https://youtu.be/Igz_3keMR2Q', episode: 22 },
  // 第 23 期
  'the-price-of-complexity': { url: 'https://youtu.be/0OtNij8f3O8', episode: 23 },
  // 第 24 期
  'the-secondhand-mind': { url: 'https://youtu.be/F-SxQu3IdrM', episode: 24 },
  // 第 25 期
  'when-interest-became-a-passion': { url: 'https://youtu.be/OHZ9CxLl_IM', episode: 25 },
};

/** 「不做-清单指南类」：明确不会制作视频，永久留空 */
export const videoExcluded = [
  'history-as-a-model-library',
  'investing-from-first-principles',
  'ten-mental-models-worth-reusing',
  'the-reading-list-for-the-ai-era',
  'understanding-semiconductors-a-reading-path',
  'why-read-the-classics',
];

/** 待制作：视频上线后移入 articleVideos（含 CSV 未覆盖的新增文章） */
export const videoPending = [
  'the-evidence-of-sight',
  'the-illusion-of-control',
  'the-invention-of-inevitability',
  'the-noise-in-judgment',
];
