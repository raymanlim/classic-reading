/**
 * 阅读笔记 → YouTube 视频映射
 * ------------------------------------------------------------------
 * 权威来源：docs/note-video-mapping-2026-11-04.csv（Rayman 提供）
 *   频道「平和通神」@limrayman-gd1pz
 *
 * 四种状态（Rayman 2026-11-04 确认）：
 *   - 素材已用（6 条，note-002～007）：笔记素材已用于该视频
 *     → 笔记页显示「视频解读」
 *   - 已消费（1 条，note-001）：书早在主题周出过片，按对账跳过
 *     → 笔记页不贴
 *   - 待对账（3 条）：笔记还没轮到，但书已出过片，轮到时直接跳过
 *     → 笔记页不贴
 *   - 待用（24 条）：排队中，尚无视频 → 留空
 *
 * 🔴 这些视频是「书级解读」，不是「某条笔记专属视频」。
 *    因此只有「素材已用」的 6 条在笔记页出现；已消费/待对账的 4 条
 *    书级视频留给书籍详情页（后续任务），避免把书的视频说成笔记的视频。
 *
 * 🔴 待用的 24 条一律留空，不写占位、不编造链接。
 */
export const noteVideos = {
  // 素材已用：笔记素材已用于该视频
  'note-002': 'https://youtu.be/KsAlqY8-niQ', // 投资周第1期 · 《聪明的投资者》
  'note-003': 'https://youtu.be/0tQAI0tOtwU', // 阅读笔记 9月24日 · 《八月炮火》
  'note-004': 'https://youtu.be/RVSu-G9jYR8', // 阅读笔记 9月25日 · 《国家为什么会失败》
  'note-005': 'https://youtu.be/k-i115ey4U8', // 阅读笔记 9月26日 · 《思考，快与慢》
  'note-006': 'https://youtu.be/0xmu-99IFos', // 阅读笔记 9月28日 · 《创新者的窘境》
  'note-007': 'https://youtu.be/wRb-dsFClV4', // 阅读笔记 10月5日 · 《系统之美》
};

/**
 * 书已出片、本条笔记跳过：不在笔记页渲染。
 * 这些是「书级视频」，应归书籍详情页；此处仅登记备查。
 */
export const noteVideoSkipped = {
  'note-001': 'https://youtu.be/0o0GoaJ3XmM', // 已消费（书已出片）· 《超级智能》
  'note-008': 'https://youtu.be/pLSo0qQEdcc', // 待对账 · 《信息简史》
  'note-011': 'https://youtu.be/WAIGcYaOwkM', // 待对账 · 《科学革命的结构》
  'note-030': 'https://youtu.be/ANmP5CHmIJM', // 待对账 · 《与天为敌》
};
