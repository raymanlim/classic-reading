/**
 * 文章 → YouTube 视频解读 映射
 * ------------------------------------------------------------------
 * 数据来源：频道「平和通神」@limrayman-gd1pz 的「深度解读」播放列表
 *   https://www.youtube.com/playlist?list=PLNR6jJn9QOTY
 *
 * 规则（重要）：
 * 1. 只收录**可公开访问**的视频。播放列表标注 27 期，但页面显示
 *    「2 unavailable videos are hidden」——那 2 条取不到链接，故不收录。
 * 2. 没有视频的文章**不要写占位符、不要编造链接**，直接不出现在此表即可；
 *    模板仅在存在有效链接时渲染「视频解读」区块。
 * 3. 以后新视频上线，只需在此表追加一行 `'<article-slug>': '<url>'`，
 *    无需改动文章文件与模板。
 *
 * 校验：构建期会检查 key 是否为真实文章 slug、value 是否为 YouTube 观看链接，
 * 不合法会输出 warning（见 src/lib/data.js）。
 */
export const articleVideos = {
  'the-ledger-of-division-of-labor': 'https://www.youtube.com/watch?v=7OG1rNQ2bEU',
  'the-architecture-of-waiting': 'https://www.youtube.com/watch?v=dGENfecgFD4',
  'the-scarcity-of-attention': 'https://www.youtube.com/watch?v=unQUDPV7B8o',
  'when-the-measure-becomes-the-target': 'https://www.youtube.com/watch?v=ywQ4eJcISgg',
  'the-price-of-warning': 'https://www.youtube.com/watch?v=fqx-fQeSHuE',
  'the-window-before-lock-in': 'https://www.youtube.com/watch?v=ywytbRbTaxg',
  'the-dilution-of-responsibility': 'https://www.youtube.com/watch?v=l-uryL7u1go',
  'the-order-before-the-thing': 'https://www.youtube.com/watch?v=re-_fQqB3Jc',
  'the-disappearance-of-slack': 'https://www.youtube.com/watch?v=wdcN2MNjbOA',
  'the-evidence-that-isnt-there': 'https://www.youtube.com/watch?v=2j6z3EsoPh4',
  'the-price-of-knowledge': 'https://www.youtube.com/watch?v=lyV77pSQ1jE',
  'the-practice-that-automation-cancels': 'https://www.youtube.com/watch?v=FnZTev6Y7lk',
  'the-treason-of-inheritance': 'https://www.youtube.com/watch?v=0qXNkT_YzJY',
  'the-use-of-forgetting': 'https://www.youtube.com/watch?v=3PBxBOoBdf4',
  'the-layering-of-credit': 'https://www.youtube.com/watch?v=PE2bQ41m9lw',
  'the-invention-of-the-average': 'https://www.youtube.com/watch?v=66pPnXkv22o',
  'the-coordinates-of-comparison': 'https://www.youtube.com/watch?v=ZGJ0hEPStWM',
  'the-unteachable-part': 'https://www.youtube.com/watch?v=Pn_y3Ch6imI',
  'why-smart-people-fail-together': 'https://www.youtube.com/watch?v=iOBFrZ_cR6k',
  'the-invisibility-of-maintenance': 'https://www.youtube.com/watch?v=YVbVGVd4Zb0',
  'the-weight-of-tacit-knowledge': 'https://www.youtube.com/watch?v=PdJAyt6gOS4',
  'the-diminishing-returns-of-discovery': 'https://www.youtube.com/watch?v=Igz_3keMR2Q',
  'the-price-of-complexity': 'https://www.youtube.com/watch?v=0OtNij8f3O8',
  'the-secondhand-mind': 'https://www.youtube.com/watch?v=F-SxQu3IdrM',
  'when-interest-became-a-passion': 'https://www.youtube.com/watch?v=OHZ9CxLl_IM',
};
