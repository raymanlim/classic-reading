/**
 * 文章 → YouTube「深度解读」视频映射
 * ------------------------------------------------------------------
 * 初始台账：docs/article-video-mapping-2026-11-04.csv（Rayman 提供，11-04 快照）
 *   频道「平和通神」@limrayman-gd1pz · 播放列表「深度解读」
 *   https://www.youtube.com/playlist?list=PLNR6jJn9QOTY
 *
 * 🔴 CSV 是 11-04 历史快照，无脚本消费它；之后的回填与新增文章一律以本文件为准。
 * 更新流程：
 *   1. 在 `articleVideos` 追加/修改条目（url 为 youtu.be 短链，episode 为整数期号）
 *   2. 若该 slug 原在 `videoPending`，同步从数组移除，避免状态冲突
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
  // 第 26 期
  'the-evidence-of-sight': { url: 'https://youtu.be/KkL3j-RVXQ4', episode: 26 },
  // 第 27 期
  'the-illusion-of-control': { url: 'https://youtu.be/Il5ls8yb7Tw', episode: 27 },
  // 第 28 期
  'the-noise-in-judgment': { url: 'https://youtu.be/0eGPwpEeN1w', episode: 28 },
  // 第 29 期
  'the-invention-of-inevitability': { url: 'https://youtu.be/T5QTZiN2b6E', episode: 29 },
  // 第 30 期
  'the-answer-already-filled-in': { url: 'https://youtu.be/aCICkckolmc', episode: 30 },
  // 第 31 期（2026-11-08 回填，原列 videoPending）
  'the-cost-of-exemption': { url: 'https://youtu.be/lcJB6LioOzs', episode: 31 },
  // 第 32 期（2026-11-08 回填，原列 videoPending）
  'understanding-by-making': { url: 'https://youtu.be/qb84d5xN3yQ', episode: 32 },
  // 第 33 期（2026-11-10 回填，原列 videoPending）
  'the-space-between-the-parts': { url: 'https://youtu.be/dNotkfU4eJ4', episode: 33 },
  // 第 34 期（2026-11-10 回填）
  'when-the-price-is-removed': { url: 'https://youtu.be/cXI4x8LRv-8', episode: 34 },
  // 第 35 期（2026-11-14 回填）
  'the-unsigned-contract': { url: 'https://youtu.be/ROPMNIlK8jw', episode: 35 },
  // 第 36 期（2026-11-14 回填）
  'the-seduction-of-the-single-cause': { url: 'https://youtu.be/wRAPp1hGvfk', episode: 36 },
  // 第 37 期（2026-11-14 回填）
  'the-one-you-can-see': { url: 'https://youtu.be/jZpC66AOIkY', episode: 37 },
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
  'whether-it-can-be-undone',
];
