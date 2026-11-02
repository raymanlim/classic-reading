/**
 * 每日推荐 · 参考源：Hacker Books（Hacker News 评论提及书目）
 * ------------------------------------------------------------------
 * ⚠️ 本文件由 `node src/hn-books-source.mjs` 生成，请勿手改。
 * 它不是书单（不会被站点构建加载），而是「每日推荐」任务的候选池：
 * 已按七大在用主题过滤、按「独立提及人数」排序、并与全库做过标题去重。
 *
 * 数据源：https://hackerbooks.org/（2026-11-02 生成，top 榜 600 本）
 * 刷新：node src/hn-books-source.mjs
 *
 * 🔴 本池只提供选题线索，**不提供经典性证据**。入库前仍须按任务规定的
 *    权威认可清单（豆瓣 / Goodreads / 维基 / 奖项 / 课程 / 权威书评 / 微信读书 / Scholar）
 *    取证 ≥2 项，并跑 ingest-books.mjs --existing 二次去重。
 * 生成日期：2026-11-02 ｜ 候选 117 本 ｜ 已排除 226 本
 */
export const source = {
  "source": "hackernews-books",
  "label_zh": "Hacker Books（Hacker News 评论提及书目）",
  "label_en": "Hacker Books — books mentioned in Hacker News comments",
  "url": "https://hackerbooks.org/",
  "generated_at": "2026-11-02",
  "data_generated": "2026-11-02",
  "dataset": {
    "generated": "2026-11-02",
    "n_books": 15766,
    "n_mentions": 281363,
    "n_comments": 225861,
    "n_commenters": 57773,
    "first_year": 2007,
    "last_year": 2026,
    "n_recommend_mentions": 155059
  },
  "ranking_metric": "hn_users = 独立提及人数（不同评论者数），非提及次数",
  "classic_gate_note": "HN 提及人数**不属于**任务规定的权威认可清单（豆瓣/Goodreads/维基/奖项/课程/权威书评/微信读书/Scholar），只能作选题线索与热度参考，不得用于凑经典性门槛的两项证据。",
  "data_quality_note": "year / author 取自 OpenLibrary 元数据，**已知存在错误**（实测 Future Shock 标 1801、Beyond Good and Evil 标 2009）。入库前必须重新核验出版年与作者，不得直接采信本池字段。",
  "coverage_gap": "essays 与 education 两个主题在本源中无可用候选（HN 主题体系无对应类目）。这两个主题仍须走原检索流程。",
  "manual_risk_note": "池内技术类大量为操作手册 / 教科书（Clean Code、Code Complete、Cracking the Coding Interview、Introduction to Algorithms 等），命中任务「排除清单④」者一律不得选用。",
  "year_filter": "出版年 ≤ 2021（距今 ≥ 5 年）",
  "topic_map": {
    "ai-ml": "ai",
    "programming": "technology",
    "computer-science": "technology",
    "software-engineering": "technology",
    "systems": "technology",
    "web": "technology",
    "security": "technology",
    "hardware": "technology",
    "lisp-functional": "technology",
    "data-statistics": "technology",
    "math": "technology",
    "physics": "technology",
    "biology": "technology",
    "popular-science": "technology",
    "history": "history",
    "philosophy": "philosophy",
    "fiction": "literature",
    "science-fiction": "literature",
    "fantasy": "literature"
  },
  "excluded_topics": {
    "psychology": "心理学已严重超配（全库 28 本 / 每日推荐 15 次）",
    "politics-society": "社会与文明不在本次要求主题内",
    "business": "商业已退役",
    "economics": "经济学已退役",
    "startups": "商业/创业已退役",
    "productivity": "自助/效率类，认知增量不足",
    "biography": "传记类，主题无法归入七大主题",
    "religion": "宗教类，不在七大主题内",
    "lifestyle": "生活方式类，不在七大主题内",
    "arts": "艺术/游戏/媒介，不在七大主题内",
    "writing": "写作技巧类，非散文传统",
    "design": "设计/UX，偏操作而非认知框架",
    "other": "未分类，无法判定主题"
  },
  "stats": {
    "scanned": 600,
    "kept": 117,
    "excluded_no_theme": 151,
    "excluded_too_new": 3,
    "excluded_no_year": 3,
    "excluded_duplicate": 69,
    "by_category": {
      "technology": 40,
      "literature": 40,
      "philosophy": 20,
      "ai": 9,
      "history": 8
    }
  }
};

export const candidates = [
  {
    "title_en": "The art of computer programming",
    "title_zh": null,
    "author_en": "Donald Knuth",
    "author_zh": null,
    "year": 1968,
    "category": "technology",
    "hn_topics": [
      "programming",
      "computer-science"
    ],
    "hn_users": 1125,
    "hn_mentions": 1799,
    "hn_score": 100,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL257263W",
    "needs_author": false
  },
  {
    "title_en": "Snow Crash",
    "title_zh": null,
    "author_en": "Neal Stephenson",
    "author_zh": null,
    "year": 1992,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 977,
    "hn_mentions": 1283,
    "hn_score": 97.1,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL38501W",
    "needs_author": false
  },
  {
    "title_en": "Neuromancer",
    "title_zh": null,
    "author_en": "William Gibson",
    "author_zh": null,
    "year": 1984,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 780,
    "hn_mentions": 1117,
    "hn_score": 94.4,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL27258W",
    "needs_author": false
  },
  {
    "title_en": "The Mythical Man-Month",
    "title_zh": null,
    "author_en": "Frederick P. Brooks",
    "author_zh": null,
    "year": 1975,
    "category": "technology",
    "hn_topics": [
      "programming",
      "software-engineering"
    ],
    "hn_users": 760,
    "hn_mentions": 957,
    "hn_score": 93.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL3510570W",
    "needs_author": false
  },
  {
    "title_en": "Atlas Shrugged",
    "title_zh": null,
    "author_en": "Ayn Rand & Sophie Bastide-Foltz & Adrian Rand",
    "author_zh": null,
    "year": 1957,
    "category": "literature",
    "hn_topics": [
      "fiction",
      "science-fiction"
    ],
    "hn_users": 758,
    "hn_mentions": 1006,
    "hn_score": 93.7,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL731644W",
    "needs_author": false
  },
  {
    "title_en": "Clean Code",
    "title_zh": null,
    "author_en": "Robert C. Martin",
    "author_zh": null,
    "year": 2008,
    "category": "technology",
    "hn_topics": [
      "software-engineering",
      "programming"
    ],
    "hn_users": 739,
    "hn_mentions": 951,
    "hn_score": 93.2,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL17618370W",
    "needs_author": false
  },
  {
    "title_en": "Introduction to Algorithms",
    "title_zh": null,
    "author_en": "Thomas H. Cormen & Charles E. Leiserson & Ronald L. Rivest & Clifford Stein",
    "author_zh": null,
    "year": 1990,
    "category": "technology",
    "hn_topics": [
      "computer-science",
      "programming"
    ],
    "hn_users": 712,
    "hn_mentions": 880,
    "hn_score": 92.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL4781294W",
    "needs_author": false
  },
  {
    "title_en": "Brave New World",
    "title_zh": null,
    "author_en": "Aldous Huxley",
    "author_zh": null,
    "year": 1932,
    "category": "literature",
    "hn_topics": [
      "fiction",
      "science-fiction"
    ],
    "hn_users": 708,
    "hn_mentions": 843,
    "hn_score": 92.2,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL64365W",
    "needs_author": false
  },
  {
    "title_en": "Code Complete",
    "title_zh": null,
    "author_en": "Steve McConnell",
    "author_zh": null,
    "year": 1993,
    "category": "technology",
    "hn_topics": [
      "programming",
      "computer-science"
    ],
    "hn_users": 669,
    "hn_mentions": 894,
    "hn_score": 91.9,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2722063W",
    "needs_author": false
  },
  {
    "title_en": "Compilers, principles, techniques, and tools",
    "title_zh": null,
    "author_en": "Alfred V. Aho & Monica S. Lam & Ravi Sethi & Jeffrey D. Ullman",
    "author_zh": null,
    "year": 1986,
    "category": "technology",
    "hn_topics": [
      "computer-science",
      "programming"
    ],
    "hn_users": 659,
    "hn_mentions": 958,
    "hn_score": 92.1,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL3509433W",
    "needs_author": false
  },
  {
    "title_en": "Designing Data-Intensive Applications",
    "title_zh": null,
    "author_en": "Martin Kleppmann",
    "author_zh": null,
    "year": 2017,
    "category": "technology",
    "hn_topics": [
      "software-engineering",
      "systems",
      "programming"
    ],
    "hn_users": 659,
    "hn_mentions": 846,
    "hn_score": 91.5,
    "first_mention_year": 2014,
    "last_mention_year": 2026,
    "openlibrary_id": "OL19293745W",
    "needs_author": false
  },
  {
    "title_en": "Cryptonomicon",
    "title_zh": null,
    "author_en": "Neal Stephenson",
    "author_zh": null,
    "year": 1999,
    "category": "technology",
    "hn_topics": [
      "science-fiction",
      "fiction",
      "security"
    ],
    "hn_users": 628,
    "hn_mentions": 847,
    "hn_score": 91.1,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL38494W",
    "needs_author": false
  },
  {
    "title_en": "Structure and Interpretation of Computer Programs",
    "title_zh": null,
    "author_en": "Harold Abelson & Gerald Jay Sussman & Julie Sussman",
    "author_zh": null,
    "year": 1985,
    "category": "technology",
    "hn_topics": [
      "lisp-functional",
      "programming",
      "computer-science"
    ],
    "hn_users": 602,
    "hn_mentions": 761,
    "hn_score": 90.2,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL3267304W",
    "needs_author": false
  },
  {
    "title_en": "The Diamond Age",
    "title_zh": null,
    "author_en": "Neal Stephenson",
    "author_zh": null,
    "year": 1995,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 596,
    "hn_mentions": 831,
    "hn_score": 90.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL38499W",
    "needs_author": false
  },
  {
    "title_en": "The Pragmatic Programmer",
    "title_zh": null,
    "author_en": "Andy Hunt & Dave Thomas",
    "author_zh": null,
    "year": 1999,
    "category": "technology",
    "hn_topics": [
      "programming"
    ],
    "hn_users": 589,
    "hn_mentions": 700,
    "hn_score": 89.7,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL5748544W",
    "needs_author": false
  },
  {
    "title_en": "Three-Body Problem",
    "title_zh": null,
    "author_en": "Cixin Liu & Ken Liu",
    "author_zh": null,
    "year": 2008,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 513,
    "hn_mentions": 620,
    "hn_score": 87.8,
    "first_mention_year": 2014,
    "last_mention_year": 2026,
    "openlibrary_id": "OL44560520W",
    "needs_author": false
  },
  {
    "title_en": "Dune",
    "title_zh": null,
    "author_en": "Frank Herbert",
    "author_zh": null,
    "year": 1965,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 512,
    "hn_mentions": 630,
    "hn_score": 87.9,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL893414W",
    "needs_author": false
  },
  {
    "title_en": "Zen and the Art of Motorcycle Maintenance",
    "title_zh": null,
    "author_en": "Robert M. Pirsig",
    "author_zh": null,
    "year": 1974,
    "category": "philosophy",
    "hn_topics": [
      "philosophy",
      "religion",
      "biography"
    ],
    "hn_users": 508,
    "hn_mentions": 620,
    "hn_score": 87.7,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL827357W",
    "needs_author": false
  },
  {
    "title_en": "The C Programming Language",
    "title_zh": null,
    "author_en": "Brian W. Kernighan & Dennis MacAlistair Ritchie",
    "author_zh": null,
    "year": 1978,
    "category": "technology",
    "hn_topics": [
      "programming"
    ],
    "hn_users": 501,
    "hn_mentions": 604,
    "hn_score": 87.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL4617640W",
    "needs_author": false
  },
  {
    "title_en": "Foundation",
    "title_zh": null,
    "author_en": "Isaac Asimov",
    "author_zh": null,
    "year": 1951,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 487,
    "hn_mentions": 568,
    "hn_score": 87,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL46125W",
    "needs_author": false
  },
  {
    "title_en": "Cracking The Coding Interview",
    "title_zh": null,
    "author_en": "Gayle Laakmann McDowell",
    "author_zh": null,
    "year": 2010,
    "category": "technology",
    "hn_topics": [
      "programming",
      "computer-science"
    ],
    "hn_users": 485,
    "hn_mentions": 553,
    "hn_score": 86.8,
    "first_mention_year": 2010,
    "last_mention_year": 2026,
    "openlibrary_id": "OL16816263W",
    "needs_author": false
  },
  {
    "title_en": "The Hitchhiker's Guide to the Galaxy",
    "title_zh": null,
    "author_en": "Douglas Adams",
    "author_zh": null,
    "year": 1979,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 481,
    "hn_mentions": 540,
    "hn_score": 86.6,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2163649W",
    "needs_author": false
  },
  {
    "title_en": "How to Design Programs",
    "title_zh": null,
    "author_en": "Matthias Felleisen",
    "author_zh": null,
    "year": 2001,
    "category": "technology",
    "hn_topics": [
      "programming",
      "computer-science",
      "lisp-functional"
    ],
    "hn_users": 440,
    "hn_mentions": 776,
    "hn_score": 87.4,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL15106070W",
    "needs_author": false
  },
  {
    "title_en": "The Little Schemer",
    "title_zh": null,
    "author_en": "Daniel P. Friedman & Matthias Felleisen",
    "author_zh": null,
    "year": 1995,
    "category": "technology",
    "hn_topics": [
      "lisp-functional"
    ],
    "hn_users": 438,
    "hn_mentions": 652,
    "hn_score": 86.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2938928W",
    "needs_author": false
  },
  {
    "title_en": "Moby Dick",
    "title_zh": null,
    "author_en": "Herman Melville",
    "author_zh": null,
    "year": 1851,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 436,
    "hn_mentions": 528,
    "hn_score": 85.6,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL102749W",
    "needs_author": false
  },
  {
    "title_en": "Ender's Game",
    "title_zh": null,
    "author_en": "Orson Scott Card",
    "author_zh": null,
    "year": 1985,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 436,
    "hn_mentions": 524,
    "hn_score": 85.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL49488W",
    "needs_author": false
  },
  {
    "title_en": "Infinite Jest",
    "title_zh": null,
    "author_en": "David Foster Wallace",
    "author_zh": null,
    "year": 1996,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 421,
    "hn_mentions": 549,
    "hn_score": 85.4,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2943602W",
    "needs_author": false
  },
  {
    "title_en": "Seveneves",
    "title_zh": null,
    "author_en": "Neal Stephenson",
    "author_zh": null,
    "year": 2015,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 417,
    "hn_mentions": 524,
    "hn_score": 85.1,
    "first_mention_year": 2015,
    "last_mention_year": 2026,
    "openlibrary_id": "OL17829905W",
    "needs_author": false
  },
  {
    "title_en": "Design Patterns",
    "title_zh": null,
    "author_en": "Erich Gamma & John Vlissides & Richard Helm & Ralph Johnson",
    "author_zh": null,
    "year": 1995,
    "category": "technology",
    "hn_topics": [
      "software-engineering",
      "programming"
    ],
    "hn_users": 412,
    "hn_mentions": 491,
    "hn_score": 84.7,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL6030812W",
    "needs_author": false
  },
  {
    "title_en": "A Fire upon the Deep",
    "title_zh": null,
    "author_en": "Vernor Vinge",
    "author_zh": null,
    "year": 1992,
    "category": "literature",
    "hn_topics": [
      "science-fiction"
    ],
    "hn_users": 405,
    "hn_mentions": 563,
    "hn_score": 85.1,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1975714W",
    "needs_author": false
  },
  {
    "title_en": "Crafting Interpreters",
    "title_zh": null,
    "author_en": "Robert Nystrom",
    "author_zh": null,
    "year": 2021,
    "category": "technology",
    "hn_topics": [
      "computer-science"
    ],
    "hn_users": 397,
    "hn_mentions": 521,
    "hn_score": 84.6,
    "first_mention_year": 2017,
    "last_mention_year": 2026,
    "openlibrary_id": "OL26124818W",
    "needs_author": false
  },
  {
    "title_en": "Learn Python the Hard Way",
    "title_zh": null,
    "author_en": "Zed Shaw",
    "author_zh": null,
    "year": 2011,
    "category": "technology",
    "hn_topics": [
      "programming"
    ],
    "hn_users": 395,
    "hn_mentions": 489,
    "hn_score": 84.3,
    "first_mention_year": 2010,
    "last_mention_year": 2026,
    "openlibrary_id": "OL20890912W",
    "needs_author": false
  },
  {
    "title_en": "Anathem",
    "title_zh": null,
    "author_en": "Neal Stephenson",
    "author_zh": null,
    "year": 2008,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 393,
    "hn_mentions": 561,
    "hn_score": 84.8,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL14911626W",
    "needs_author": false
  },
  {
    "title_en": "Why We Sleep",
    "title_zh": null,
    "author_en": "Matthew P. Walker & Matthew Walker",
    "author_zh": null,
    "year": 2017,
    "category": "technology",
    "hn_topics": [
      "biology",
      "psychology"
    ],
    "hn_users": 378,
    "hn_mentions": 479,
    "hn_score": 83.8,
    "first_mention_year": 2017,
    "last_mention_year": 2026,
    "openlibrary_id": "OL20168133W",
    "needs_author": false
  },
  {
    "title_en": "Learn You a Haskell for Great Good!",
    "title_zh": null,
    "author_en": "Miran Lipovača",
    "author_zh": null,
    "year": 2011,
    "category": "technology",
    "hn_topics": [
      "lisp-functional"
    ],
    "hn_users": 370,
    "hn_mentions": 456,
    "hn_score": 83.3,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL15916305W",
    "needs_author": false
  },
  {
    "title_en": "War and Peace",
    "title_zh": null,
    "author_en": "Lev Tolstoi",
    "author_zh": null,
    "year": 1869,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 370,
    "hn_mentions": 438,
    "hn_score": 83.2,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL267171W",
    "needs_author": false
  },
  {
    "title_en": "Masters of Doom",
    "title_zh": null,
    "author_en": "David Kushner",
    "author_zh": null,
    "year": 2003,
    "category": "technology",
    "hn_topics": [
      "biography",
      "programming"
    ],
    "hn_users": 365,
    "hn_mentions": 434,
    "hn_score": 83,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL5957689W",
    "needs_author": false
  },
  {
    "title_en": "On LISP",
    "title_zh": null,
    "author_en": "Paul Graham",
    "author_zh": null,
    "year": 1993,
    "category": "technology",
    "hn_topics": [
      "lisp-functional"
    ],
    "hn_users": 355,
    "hn_mentions": 533,
    "hn_score": 83.6,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL7944707W",
    "needs_author": false
  },
  {
    "title_en": "A Deepness in the Sky",
    "title_zh": null,
    "author_en": "Vernor Vinge",
    "author_zh": null,
    "year": 1999,
    "category": "literature",
    "hn_topics": [
      "science-fiction"
    ],
    "hn_users": 354,
    "hn_mentions": 551,
    "hn_score": 83.8,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1975705W",
    "needs_author": false
  },
  {
    "title_en": "Permutation City",
    "title_zh": null,
    "author_en": "Greg Egan",
    "author_zh": null,
    "year": 1994,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 354,
    "hn_mentions": 542,
    "hn_score": 83.7,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL115336W",
    "needs_author": false
  },
  {
    "title_en": "Don't Make Me Think",
    "title_zh": null,
    "author_en": "Steve Krug",
    "author_zh": null,
    "year": 2000,
    "category": "technology",
    "hn_topics": [
      "web"
    ],
    "hn_users": 339,
    "hn_mentions": 408,
    "hn_score": 82,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL8578577W",
    "needs_author": false
  },
  {
    "title_en": "Man's Search for Meaning",
    "title_zh": null,
    "author_en": "Viktor Emil Frankl",
    "author_zh": null,
    "year": 1946,
    "category": "philosophy",
    "hn_topics": [
      "philosophy",
      "religion"
    ],
    "hn_users": 325,
    "hn_mentions": 394,
    "hn_score": 81.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL31263386W",
    "needs_author": false
  },
  {
    "title_en": "A new kind of science",
    "title_zh": null,
    "author_en": "Stephen Wolfram",
    "author_zh": null,
    "year": 2002,
    "category": "technology",
    "hn_topics": [
      "computer-science"
    ],
    "hn_users": 316,
    "hn_mentions": 388,
    "hn_score": 81.1,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL15838690W",
    "needs_author": false
  },
  {
    "title_en": "The moon is a harsh mistress",
    "title_zh": null,
    "author_en": "Robert A. Heinlein",
    "author_zh": null,
    "year": 1965,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 305,
    "hn_mentions": 423,
    "hn_score": 81.2,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL59704W",
    "needs_author": false
  },
  {
    "title_en": "Harry Potter and the Methods of Rationality",
    "title_zh": null,
    "author_en": "Eliezer Yudkowsky",
    "author_zh": null,
    "year": 2015,
    "category": "literature",
    "hn_topics": [
      "fiction",
      "fantasy"
    ],
    "hn_users": 301,
    "hn_mentions": 384,
    "hn_score": 80.6,
    "first_mention_year": 2010,
    "last_mention_year": 2026,
    "openlibrary_id": "OL17351743W",
    "needs_author": false
  },
  {
    "title_en": "Practical Common Lisp",
    "title_zh": null,
    "author_en": "Peter Seibel",
    "author_zh": null,
    "year": 2005,
    "category": "technology",
    "hn_topics": [
      "lisp-functional"
    ],
    "hn_users": 294,
    "hn_mentions": 400,
    "hn_score": 80.6,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL8977732W",
    "needs_author": false
  },
  {
    "title_en": "Blindsight",
    "title_zh": null,
    "author_en": "Peter Watts",
    "author_zh": null,
    "year": 2006,
    "category": "literature",
    "hn_topics": [
      "science-fiction"
    ],
    "hn_users": 294,
    "hn_mentions": 385,
    "hn_score": 80.4,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL8514692W",
    "needs_author": false
  },
  {
    "title_en": "Eloquent Javascript",
    "title_zh": null,
    "author_en": "Marijn Haverbeke",
    "author_zh": null,
    "year": 2009,
    "category": "technology",
    "hn_topics": [
      "web"
    ],
    "hn_users": 293,
    "hn_mentions": 356,
    "hn_score": 80,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL15444205W",
    "needs_author": false
  },
  {
    "title_en": "Accelerando",
    "title_zh": null,
    "author_en": "Charles Stross",
    "author_zh": null,
    "year": 1900,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 287,
    "hn_mentions": 391,
    "hn_score": 80.2,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2465670W",
    "needs_author": false
  },
  {
    "title_en": "Ready Player One",
    "title_zh": null,
    "author_en": "Ernest Cline",
    "author_zh": null,
    "year": 2008,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 287,
    "hn_mentions": 324,
    "hn_score": 79.5,
    "first_mention_year": 2011,
    "last_mention_year": 2026,
    "openlibrary_id": "OL15936512W",
    "needs_author": false
  },
  {
    "title_en": "Nineteen Eighty-Four",
    "title_zh": null,
    "author_en": "George Orwell",
    "author_zh": null,
    "year": 1949,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 283,
    "hn_mentions": 337,
    "hn_score": 79.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1168083W",
    "needs_author": false
  },
  {
    "title_en": "Stranger in a Strange Land",
    "title_zh": null,
    "author_en": "Robert A. Heinlein",
    "author_zh": null,
    "year": 1961,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 277,
    "hn_mentions": 317,
    "hn_score": 79,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL59688W",
    "needs_author": false
  },
  {
    "title_en": "The Cuckoo’s Egg",
    "title_zh": null,
    "author_en": "Clifford Stoll",
    "author_zh": null,
    "year": 1989,
    "category": "technology",
    "hn_topics": [
      "security"
    ],
    "hn_users": 275,
    "hn_mentions": 372,
    "hn_score": 79.6,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL3741565W",
    "needs_author": false
  },
  {
    "title_en": "The Cathedral and the Bazaar",
    "title_zh": null,
    "author_en": "Eric S. Raymond",
    "author_zh": null,
    "year": 1999,
    "category": "technology",
    "hn_topics": [
      "systems",
      "programming"
    ],
    "hn_users": 270,
    "hn_mentions": 308,
    "hn_score": 78.7,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL6036025W",
    "needs_author": false
  },
  {
    "title_en": "The Elements of Computing Systems",
    "title_zh": null,
    "author_en": "Noam Nisan & Shimon Schocken",
    "author_zh": null,
    "year": 2005,
    "category": "technology",
    "hn_topics": [
      "computer-science",
      "programming"
    ],
    "hn_users": 268,
    "hn_mentions": 344,
    "hn_score": 79,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL19550033W",
    "needs_author": false
  },
  {
    "title_en": "The algorithm design manual",
    "title_zh": null,
    "author_en": "Steven S. Skiena",
    "author_zh": null,
    "year": 1998,
    "category": "technology",
    "hn_topics": [
      "computer-science",
      "programming"
    ],
    "hn_users": 265,
    "hn_mentions": 321,
    "hn_score": 78.6,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2677499W",
    "needs_author": false
  },
  {
    "title_en": "Fahrenheit 451",
    "title_zh": null,
    "author_en": "Ray Bradbury",
    "author_zh": null,
    "year": 1953,
    "category": "literature",
    "hn_topics": [
      "fiction",
      "science-fiction",
      "politics-society"
    ],
    "hn_users": 265,
    "hn_mentions": 291,
    "hn_score": 78.2,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL103123W",
    "needs_author": false
  },
  {
    "title_en": "Children of Time",
    "title_zh": null,
    "author_en": "Adrian Tchaikovsky",
    "author_zh": null,
    "year": 2015,
    "category": "literature",
    "hn_topics": [
      "science-fiction"
    ],
    "hn_users": 263,
    "hn_mentions": 345,
    "hn_score": 78.9,
    "first_mention_year": 2016,
    "last_mention_year": 2026,
    "openlibrary_id": "OL17373843W",
    "needs_author": false
  },
  {
    "title_en": "The Count of Monte Cristo",
    "title_zh": null,
    "author_en": "Alexandre Dumas",
    "author_zh": null,
    "year": 1964,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 260,
    "hn_mentions": 323,
    "hn_score": 78.5,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL43161739W",
    "needs_author": false
  },
  {
    "title_en": "Harry Potter",
    "title_zh": null,
    "author_en": "J. K. Rowling",
    "author_zh": null,
    "year": 2001,
    "category": "literature",
    "hn_topics": [
      "fiction",
      "fantasy"
    ],
    "hn_users": 255,
    "hn_mentions": 271,
    "hn_score": 77.6,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL21385222W",
    "needs_author": false
  },
  {
    "title_en": "Programming Pearls",
    "title_zh": null,
    "author_en": "Jon Bentley",
    "author_zh": null,
    "year": 1999,
    "category": "technology",
    "hn_topics": [
      "programming"
    ],
    "hn_users": 245,
    "hn_mentions": 315,
    "hn_score": 77.8,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL8021453W",
    "needs_author": false
  },
  {
    "title_en": "Hyperion",
    "title_zh": null,
    "author_en": "Dan Simmons",
    "author_zh": null,
    "year": 1989,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 245,
    "hn_mentions": 282,
    "hn_score": 77.3,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1963268W",
    "needs_author": false
  },
  {
    "title_en": "Effective Java",
    "title_zh": null,
    "author_en": "Joshua Bloch",
    "author_zh": null,
    "year": 2001,
    "category": "technology",
    "hn_topics": [
      "programming"
    ],
    "hn_users": 243,
    "hn_mentions": 287,
    "hn_score": 77.3,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL6223299W",
    "needs_author": false
  },
  {
    "title_en": "To Kill a Mockingbird",
    "title_zh": null,
    "author_en": "Harper Lee",
    "author_zh": null,
    "year": 1960,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 241,
    "hn_mentions": 275,
    "hn_score": 77.1,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL3140822W",
    "needs_author": false
  },
  {
    "title_en": "Ruby on Rails tutorial",
    "title_zh": null,
    "author_en": "Michael Hartl",
    "author_zh": null,
    "year": 2012,
    "category": "technology",
    "hn_topics": [
      "programming",
      "web"
    ],
    "hn_users": 239,
    "hn_mentions": 314,
    "hn_score": 77.5,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL16714424W",
    "needs_author": false
  },
  {
    "title_en": "Rainbows End",
    "title_zh": null,
    "author_en": "Vernor Vinge",
    "author_zh": null,
    "year": 2006,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 238,
    "hn_mentions": 337,
    "hn_score": 77.8,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1975712W",
    "needs_author": false
  },
  {
    "title_en": "The Great Gatsby",
    "title_zh": null,
    "author_en": "F. Scott Fitzgerald",
    "author_zh": null,
    "year": 1920,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 238,
    "hn_mentions": 257,
    "hn_score": 76.7,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL468431W",
    "needs_author": false
  },
  {
    "title_en": "The Lord of the Rings",
    "title_zh": null,
    "author_en": "J.R.R. Tolkien",
    "author_zh": null,
    "year": 1954,
    "category": "literature",
    "hn_topics": [
      "fantasy",
      "fiction"
    ],
    "hn_users": 235,
    "hn_mentions": 277,
    "hn_score": 76.9,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL27448W",
    "needs_author": false
  },
  {
    "title_en": "Working effectively with legacy code",
    "title_zh": null,
    "author_en": "Michael C. Feathers",
    "author_zh": null,
    "year": 2004,
    "category": "technology",
    "hn_topics": [
      "software-engineering",
      "programming"
    ],
    "hn_users": 234,
    "hn_mentions": 315,
    "hn_score": 77.3,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL5742702W",
    "needs_author": false
  },
  {
    "title_en": "The Catcher in the Rye",
    "title_zh": null,
    "author_en": "J. D. Salinger & Shao jia yun",
    "author_zh": null,
    "year": 1945,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 234,
    "hn_mentions": 263,
    "hn_score": 76.6,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL3335245W",
    "needs_author": false
  },
  {
    "title_en": "Coders at Work",
    "title_zh": null,
    "author_en": "Peter Seibel",
    "author_zh": null,
    "year": 2009,
    "category": "technology",
    "hn_topics": [
      "programming"
    ],
    "hn_users": 233,
    "hn_mentions": 355,
    "hn_score": 77.8,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL16301038W",
    "needs_author": false
  },
  {
    "title_en": "A Philosophy of Software Design",
    "title_zh": null,
    "author_en": "John K. Ousterhout",
    "author_zh": null,
    "year": 2018,
    "category": "technology",
    "hn_topics": [
      "software-engineering"
    ],
    "hn_users": 232,
    "hn_mentions": 342,
    "hn_score": 77.6,
    "first_mention_year": 2018,
    "last_mention_year": 2026,
    "openlibrary_id": "OL21221785W",
    "needs_author": false
  },
  {
    "title_en": "The art of electronics",
    "title_zh": null,
    "author_en": "Paul Horowitz & Winfield Hill",
    "author_zh": null,
    "year": 1980,
    "category": "technology",
    "hn_topics": [
      "hardware"
    ],
    "hn_users": 230,
    "hn_mentions": 328,
    "hn_score": 77.4,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL4770496W",
    "needs_author": false
  },
  {
    "title_en": "The Elements of Statistical Learning",
    "title_zh": null,
    "author_en": "Trevor Hastie & Robert Tibshirani & Jerome Friedman",
    "author_zh": null,
    "year": 2001,
    "category": "ai",
    "hn_topics": [
      "ai-ml",
      "data-statistics"
    ],
    "hn_users": 227,
    "hn_mentions": 266,
    "hn_score": 76.3,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL4147338W",
    "needs_author": false
  },
  {
    "title_en": "The Origin of Species",
    "title_zh": null,
    "author_en": "Charles Darwin",
    "author_zh": null,
    "year": 2002,
    "category": "technology",
    "hn_topics": [
      "biology"
    ],
    "hn_users": 227,
    "hn_mentions": 273,
    "hn_score": 76.5,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL515289W",
    "needs_author": false
  },
  {
    "title_en": "Types and Programming Languages",
    "title_zh": null,
    "author_en": "Benjamin C. Pierce",
    "author_zh": null,
    "year": 2002,
    "category": "technology",
    "hn_topics": [
      "programming",
      "computer-science"
    ],
    "hn_users": 226,
    "hn_mentions": 321,
    "hn_score": 77.1,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL4078119W",
    "needs_author": false
  },
  {
    "title_en": "The Rust Programming Language",
    "title_zh": null,
    "author_en": "Steve Klabnik & Carol Nichols",
    "author_zh": null,
    "year": 2018,
    "category": "technology",
    "hn_topics": [
      "programming"
    ],
    "hn_users": 226,
    "hn_mentions": 257,
    "hn_score": 76.2,
    "first_mention_year": 2015,
    "last_mention_year": 2026,
    "openlibrary_id": "OL19080231W",
    "needs_author": false
  },
  {
    "title_en": "Baroque Cycle",
    "title_zh": null,
    "author_en": "Neal Stephenson",
    "author_zh": null,
    "year": 2014,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 226,
    "hn_mentions": 298,
    "hn_score": 76.8,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL26553525W",
    "needs_author": false
  },
  {
    "title_en": "Elements",
    "title_zh": null,
    "author_en": "Euclid",
    "author_zh": null,
    "year": 1482,
    "category": "technology",
    "hn_topics": [
      "math"
    ],
    "hn_users": 225,
    "hn_mentions": 271,
    "hn_score": 76.3,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL912133W",
    "needs_author": false
  },
  {
    "title_en": "Project Hail Mary",
    "title_zh": null,
    "author_en": "Andy Weir",
    "author_zh": null,
    "year": 2021,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 221,
    "hn_mentions": 240,
    "hn_score": 75.7,
    "first_mention_year": 2021,
    "last_mention_year": 2026,
    "openlibrary_id": "OL21745884W",
    "needs_author": false
  },
  {
    "title_en": "Ulysses",
    "title_zh": null,
    "author_en": "James Joyce",
    "author_zh": null,
    "year": 1914,
    "category": "literature",
    "hn_topics": [
      "fiction"
    ],
    "hn_users": 219,
    "hn_mentions": 297,
    "hn_score": 76.5,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL86318W",
    "needs_author": false
  },
  {
    "title_en": "Starship Troopers",
    "title_zh": null,
    "author_en": "Robert A. Heinlein",
    "author_zh": null,
    "year": 1959,
    "category": "literature",
    "hn_topics": [
      "science-fiction",
      "fiction"
    ],
    "hn_users": 218,
    "hn_mentions": 259,
    "hn_score": 75.8,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL59740W",
    "needs_author": false
  },
  {
    "title_en": "The Wheel of Time",
    "title_zh": null,
    "author_en": "Robert Jordan",
    "author_zh": null,
    "year": 2000,
    "category": "literature",
    "hn_topics": [
      "fiction",
      "fantasy"
    ],
    "hn_users": 208,
    "hn_mentions": 242,
    "hn_score": 75.1,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL19914930W",
    "needs_author": false
  },
  {
    "title_en": "I Am a Strange Loop",
    "title_zh": null,
    "author_en": "Douglas R. Hofstadter",
    "author_zh": null,
    "year": 2007,
    "category": "ai",
    "hn_topics": [
      "ai-ml",
      "psychology",
      "math"
    ],
    "hn_users": 204,
    "hn_mentions": 249,
    "hn_score": 75,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL8067922W",
    "needs_author": false
  },
  {
    "title_en": "The Prince",
    "title_zh": null,
    "author_en": "Niccolò Machiavelli",
    "author_zh": null,
    "year": 1515,
    "category": "philosophy",
    "hn_topics": [
      "philosophy",
      "politics-society",
      "biography"
    ],
    "hn_users": 194,
    "hn_mentions": 220,
    "hn_score": 74,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1089297W",
    "needs_author": false
  },
  {
    "title_en": "IBM and the Holocaust",
    "title_zh": null,
    "author_en": "Edwin Black",
    "author_zh": null,
    "year": 2001,
    "category": "history",
    "hn_topics": [
      "history",
      "business",
      "biography"
    ],
    "hn_users": 191,
    "hn_mentions": 240,
    "hn_score": 74.2,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL4103951W",
    "needs_author": false
  },
  {
    "title_en": "The Dawn of Everything",
    "title_zh": null,
    "author_en": "David Graeber & David Wengrow",
    "author_zh": null,
    "year": 2021,
    "category": "history",
    "hn_topics": [
      "history",
      "politics-society"
    ],
    "hn_users": 167,
    "hn_mentions": 270,
    "hn_score": 73.5,
    "first_mention_year": 2020,
    "last_mention_year": 2026,
    "openlibrary_id": "OL24663287W",
    "needs_author": false
  },
  {
    "title_en": "The making of the atomic bomb",
    "title_zh": null,
    "author_en": "Richard Rhodes",
    "author_zh": null,
    "year": 1986,
    "category": "history",
    "hn_topics": [
      "history"
    ],
    "hn_users": 161,
    "hn_mentions": 231,
    "hn_score": 72.4,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2617750W",
    "needs_author": false
  },
  {
    "title_en": "A Guide to the Good Life",
    "title_zh": null,
    "author_en": "William B. Irvine",
    "author_zh": null,
    "year": 2009,
    "category": "philosophy",
    "hn_topics": [
      "philosophy"
    ],
    "hn_users": 158,
    "hn_mentions": 197,
    "hn_score": 71.6,
    "first_mention_year": 2010,
    "last_mention_year": 2026,
    "openlibrary_id": "OL15597577W",
    "needs_author": false
  },
  {
    "title_en": "Bowling Alone",
    "title_zh": null,
    "author_en": "Robert D. Putnam",
    "author_zh": null,
    "year": 2000,
    "category": "history",
    "hn_topics": [
      "politics-society",
      "history"
    ],
    "hn_users": 150,
    "hn_mentions": 188,
    "hn_score": 70.9,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL4291077W",
    "needs_author": false
  },
  {
    "title_en": "War is a racket",
    "title_zh": null,
    "author_en": "Smedley D. Butler",
    "author_zh": null,
    "year": 1935,
    "category": "history",
    "hn_topics": [
      "history"
    ],
    "hn_users": 146,
    "hn_mentions": 170,
    "hn_score": 70.2,
    "first_mention_year": 2010,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2413847W",
    "needs_author": false
  },
  {
    "title_en": "The Fountainhead",
    "title_zh": null,
    "author_en": "Ayn Rand",
    "author_zh": null,
    "year": 1943,
    "category": "philosophy",
    "hn_topics": [
      "fiction",
      "philosophy"
    ],
    "hn_users": 143,
    "hn_mentions": 176,
    "hn_score": 70.1,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL731663W",
    "needs_author": false
  },
  {
    "title_en": "Programming Collective Intelligence",
    "title_zh": null,
    "author_en": "Toby Segaran",
    "author_zh": null,
    "year": 2007,
    "category": "ai",
    "hn_topics": [
      "ai-ml"
    ],
    "hn_users": 119,
    "hn_mentions": 135,
    "hn_score": 67.3,
    "first_mention_year": 2007,
    "last_mention_year": 2025,
    "openlibrary_id": "OL8167707W",
    "needs_author": false
  },
  {
    "title_en": "Weapons of Math Destruction",
    "title_zh": null,
    "author_en": "Cathy O'Neil",
    "author_zh": null,
    "year": 2016,
    "category": "ai",
    "hn_topics": [
      "computer-science",
      "ai-ml",
      "politics-society"
    ],
    "hn_users": 112,
    "hn_mentions": 132,
    "hn_score": 66.6,
    "first_mention_year": 2016,
    "last_mention_year": 2026,
    "openlibrary_id": "OL17840708W",
    "needs_author": false
  },
  {
    "title_en": "On Bullshit",
    "title_zh": null,
    "author_en": "Harry G. Frankfurt",
    "author_zh": null,
    "year": 2005,
    "category": "philosophy",
    "hn_topics": [
      "philosophy",
      "psychology",
      "writing"
    ],
    "hn_users": 111,
    "hn_mentions": 143,
    "hn_score": 66.8,
    "first_mention_year": 2010,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1829528W",
    "needs_author": false
  },
  {
    "title_en": "The Coddling of the American Mind",
    "title_zh": null,
    "author_en": "Greg Lukianoff & Jonathan Haidt",
    "author_zh": null,
    "year": 2018,
    "category": "philosophy",
    "hn_topics": [
      "politics-society",
      "psychology",
      "philosophy"
    ],
    "hn_users": 109,
    "hn_mentions": 151,
    "hn_score": 66.9,
    "first_mention_year": 2016,
    "last_mention_year": 2026,
    "openlibrary_id": "OL19664112W",
    "needs_author": false
  },
  {
    "title_en": "In praise of idleness",
    "title_zh": null,
    "author_en": "Bertrand Russell",
    "author_zh": null,
    "year": 1935,
    "category": "philosophy",
    "hn_topics": [
      "fiction",
      "philosophy",
      "politics-society"
    ],
    "hn_users": 109,
    "hn_mentions": 134,
    "hn_score": 66.4,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1088514W",
    "needs_author": false
  },
  {
    "title_en": "12 Rules for Life",
    "title_zh": null,
    "author_en": "Jordan B. Peterson",
    "author_zh": null,
    "year": 2015,
    "category": "philosophy",
    "hn_topics": [
      "productivity",
      "philosophy",
      "psychology"
    ],
    "hn_users": 109,
    "hn_mentions": 119,
    "hn_score": 65.9,
    "first_mention_year": 2018,
    "last_mention_year": 2026,
    "openlibrary_id": "OL17837119W",
    "needs_author": false
  },
  {
    "title_en": "Introduction to Statistical Learning",
    "title_zh": null,
    "author_en": "Gareth James & Daniela Witten & Trevor Hastie & Robert Tibshirani",
    "author_zh": null,
    "year": 2021,
    "category": "ai",
    "hn_topics": [
      "ai-ml",
      "data-statistics"
    ],
    "hn_users": 108,
    "hn_mentions": 120,
    "hn_score": 65.8,
    "first_mention_year": 2014,
    "last_mention_year": 2026,
    "openlibrary_id": "OL25772533W",
    "needs_author": false
  },
  {
    "title_en": "Pattern Recognition and Machine Learning",
    "title_zh": null,
    "author_en": "Christopher M. Bishop",
    "author_zh": null,
    "year": 2008,
    "category": "ai",
    "hn_topics": [
      "ai-ml"
    ],
    "hn_users": 104,
    "hn_mentions": 121,
    "hn_score": 65.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2963587W",
    "needs_author": false
  },
  {
    "title_en": "The Singularity Is Near",
    "title_zh": null,
    "author_en": "Ray Kurzweil",
    "author_zh": null,
    "year": 2005,
    "category": "ai",
    "hn_topics": [
      "ai-ml"
    ],
    "hn_users": 103,
    "hn_mentions": 123,
    "hn_score": 65.5,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1958850W",
    "needs_author": false
  },
  {
    "title_en": "A People's History of the United States",
    "title_zh": null,
    "author_en": "Howard Zinn & Kathy Emery & Ellen Reeves & Matt Damon",
    "author_zh": null,
    "year": 1980,
    "category": "history",
    "hn_topics": [
      "history"
    ],
    "hn_users": 102,
    "hn_mentions": 116,
    "hn_score": 65.1,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL50283W",
    "needs_author": false
  },
  {
    "title_en": "Information Theory, Inference & Learning Algorithms",
    "title_zh": null,
    "author_en": "David J.C. MacKay",
    "author_zh": null,
    "year": 2003,
    "category": "ai",
    "hn_topics": [
      "ai-ml"
    ],
    "hn_users": 93,
    "hn_mentions": 111,
    "hn_score": 64,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL8325677W",
    "needs_author": false
  },
  {
    "title_en": "This is water",
    "title_zh": null,
    "author_en": "David Foster Wallace",
    "author_zh": null,
    "year": 2009,
    "category": "philosophy",
    "hn_topics": [
      "philosophy"
    ],
    "hn_users": 87,
    "hn_mentions": 103,
    "hn_score": 63.1,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2943591W",
    "needs_author": false
  },
  {
    "title_en": "The Open Society and Its Enemies",
    "title_zh": null,
    "author_en": "Karl Popper",
    "author_zh": null,
    "year": 1945,
    "category": "philosophy",
    "hn_topics": [
      "philosophy",
      "politics-society"
    ],
    "hn_users": 85,
    "hn_mentions": 109,
    "hn_score": 63.1,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1984583W",
    "needs_author": false
  },
  {
    "title_en": "Beyond good and evil",
    "title_zh": null,
    "author_en": "Friedrich Nietzsche",
    "author_zh": null,
    "year": 2009,
    "category": "philosophy",
    "hn_topics": [
      "philosophy"
    ],
    "hn_users": 85,
    "hn_mentions": 99,
    "hn_score": 62.7,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL16947216W",
    "needs_author": false
  },
  {
    "title_en": "Metamagical Themas",
    "title_zh": null,
    "author_en": "Douglas R. Hofstadter",
    "author_zh": null,
    "year": 1985,
    "category": "ai",
    "hn_topics": [
      "ai-ml",
      "philosophy",
      "math"
    ],
    "hn_users": 84,
    "hn_mentions": 98,
    "hn_score": 62.6,
    "first_mention_year": 2007,
    "last_mention_year": 2026,
    "openlibrary_id": "OL487019W",
    "needs_author": false
  },
  {
    "title_en": "Simulacra and Simulation",
    "title_zh": null,
    "author_en": "Jean Baudrillard",
    "author_zh": null,
    "year": 1994,
    "category": "philosophy",
    "hn_topics": [
      "philosophy"
    ],
    "hn_users": 84,
    "hn_mentions": 102,
    "hn_score": 62.7,
    "first_mention_year": 2010,
    "last_mention_year": 2026,
    "openlibrary_id": "OL790308W",
    "needs_author": false
  },
  {
    "title_en": "Candide",
    "title_zh": null,
    "author_en": "Voltaire",
    "author_zh": null,
    "year": 1746,
    "category": "philosophy",
    "hn_topics": [
      "fiction",
      "philosophy"
    ],
    "hn_users": 80,
    "hn_mentions": 89,
    "hn_score": 61.7,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL100672W",
    "needs_author": false
  },
  {
    "title_en": "Finite and infinite games",
    "title_zh": null,
    "author_en": "James P. Carse & James Carse",
    "author_zh": null,
    "year": 1986,
    "category": "philosophy",
    "hn_topics": [
      "philosophy",
      "religion"
    ],
    "hn_users": 78,
    "hn_mentions": 105,
    "hn_score": 62.1,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2669550W",
    "needs_author": false
  },
  {
    "title_en": "Skin in the Game",
    "title_zh": null,
    "author_en": "Nassim Nicholas Taleb",
    "author_zh": null,
    "year": 2017,
    "category": "philosophy",
    "hn_topics": [
      "philosophy",
      "psychology",
      "politics-society"
    ],
    "hn_users": 78,
    "hn_mentions": 90,
    "hn_score": 61.5,
    "first_mention_year": 2015,
    "last_mention_year": 2026,
    "openlibrary_id": "OL17887158W",
    "needs_author": false
  },
  {
    "title_en": "Against Method",
    "title_zh": null,
    "author_en": "Paul K. Feyerabend",
    "author_zh": null,
    "year": 1975,
    "category": "philosophy",
    "hn_topics": [
      "philosophy"
    ],
    "hn_users": 72,
    "hn_mentions": 97,
    "hn_score": 61,
    "first_mention_year": 2009,
    "last_mention_year": 2025,
    "openlibrary_id": "OL455919W",
    "needs_author": false
  },
  {
    "title_en": "Tractatus logico-philosophicus",
    "title_zh": null,
    "author_en": "Ludwig Wittgenstein & Isidoro Reguera Pérez & Ivo Hernández & Spanish",
    "author_zh": null,
    "year": 1921,
    "category": "philosophy",
    "hn_topics": [
      "philosophy"
    ],
    "hn_users": 72,
    "hn_mentions": 79,
    "hn_score": 60.2,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL1410381W",
    "needs_author": false
  },
  {
    "title_en": "Discipline and Punish",
    "title_zh": null,
    "author_en": "Michel Foucault & Simon Prebble",
    "author_zh": null,
    "year": 1975,
    "category": "history",
    "hn_topics": [
      "philosophy",
      "politics-society",
      "history"
    ],
    "hn_users": 70,
    "hn_mentions": 98,
    "hn_score": 60.8,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL26841W",
    "needs_author": false
  },
  {
    "title_en": "On the Shortness of Life",
    "title_zh": null,
    "author_en": "Seneca",
    "author_zh": null,
    "year": 2016,
    "category": "philosophy",
    "hn_topics": [
      "philosophy"
    ],
    "hn_users": 70,
    "hn_mentions": 94,
    "hn_score": 60.6,
    "first_mention_year": 2010,
    "last_mention_year": 2026,
    "openlibrary_id": "OL20557860W",
    "needs_author": false
  },
  {
    "title_en": "The Enchiridion",
    "title_zh": null,
    "author_en": "Epictetus",
    "author_zh": null,
    "year": 1955,
    "category": "philosophy",
    "hn_topics": [
      "philosophy"
    ],
    "hn_users": 66,
    "hn_mentions": 90,
    "hn_score": 59.9,
    "first_mention_year": 2009,
    "last_mention_year": 2026,
    "openlibrary_id": "OL27292376W",
    "needs_author": false
  },
  {
    "title_en": "Future shock",
    "title_zh": null,
    "author_en": "Alvin Toffler",
    "author_zh": null,
    "year": 1801,
    "category": "history",
    "hn_topics": [
      "history",
      "psychology"
    ],
    "hn_users": 62,
    "hn_mentions": 106,
    "hn_score": 60.1,
    "first_mention_year": 2008,
    "last_mention_year": 2026,
    "openlibrary_id": "OL2869043W",
    "needs_author": false
  }
];
