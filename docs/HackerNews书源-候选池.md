# Hacker Books 书源 · 候选池审阅报告

> 生成时间：2026-11-02 ｜ 数据源生成日：2026-11-02
> 数据源：<https://hackerbooks.org/> ｜ 机器可读池：`content/sources/hackernews-books.js`

## 一、数据源是什么

Hacker Books 抓取 Hacker News 全站评论（2007–2026），把评论里提到的书聚合起来，
按「多少个**不同的人**提到过」排序。当前数据集：**15,766 本书** / 
**281,363 条提及** / 57,773 位独立评论者 / 
其中 155,059 条属推荐性提及。

它的价值在于：**这是一份大规模、去中心化的「从业者用脚投票」清单**，
比任何编辑榜单更难被营销操纵；短板是它天然偏向英文技术圈，
且「被很多人提到」≠「经典」，畅销的操作手册同样会被反复提及。

## 二、过滤规则

| 步骤 | 规则 |
|---|---|
| 主题映射 | 仅保留能映射到七大在用主题的书（ai / technology / history / philosophy / literature / essays / education） |
| 排除主题 | psychology / politics-society / business / economics / startups / productivity / biography / religion / lifestyle / arts / writing / design / other |
| 时间门槛 | 出版年 ≤ 2021（距今 ≥ 5 年）；年份缺失一律不收 |
| 去重 | 与全库比对标题（完全一致 / 互相包含 / 主标题互相包含） |
| 分类上限 | 每类最多 40 本，按独立提及人数取前 40 |

### 本次过滤结果

| 指标 | 数量 |
|---|---|
| 扫描 top 榜 | 600 |
| 进入候选池 | **117** |
| 主题不在七大主题 | 151 |
| 不足 5 年 | 3 |
| 年份缺失 | 3 |
| 与全库重复 | 69 |

## 三、候选分布

| 分类 | 候选数 | 最高独立提及人数 |
|---|---|---|
| ai | 9 | 227 |
| technology | 40 | 1125 |
| history | 8 | 191 |
| philosophy | 20 | 508 |
| literature | 40 | 977 |

## 四、各分类 Top 15

### ai

| # | 书名 | 作者 | 年份 | 独立提及 | 提及次数 | HN 主题 |
|---|---|---|---|---|---|---|
| 1 | The Elements of Statistical Learning | Trevor Hastie & Robert Tibshirani & Jerome Friedman | 2001 | 227 | 266 | ai-ml, data-statistics |
| 2 | I Am a Strange Loop | Douglas R. Hofstadter | 2007 | 204 | 249 | ai-ml, psychology, math |
| 3 | Programming Collective Intelligence | Toby Segaran | 2007 | 119 | 135 | ai-ml |
| 4 | Weapons of Math Destruction | Cathy O'Neil | 2016 | 112 | 132 | computer-science, ai-ml, politics-society |
| 5 | Introduction to Statistical Learning | Gareth James & Daniela Witten & Trevor Hastie & Robert Tibshirani | 2021 | 108 | 120 | ai-ml, data-statistics |
| 6 | Pattern Recognition and Machine Learning | Christopher M. Bishop | 2008 | 104 | 121 | ai-ml |
| 7 | The Singularity Is Near | Ray Kurzweil | 2005 | 103 | 123 | ai-ml |
| 8 | Information Theory, Inference & Learning Algorithms | David J.C. MacKay | 2003 | 93 | 111 | ai-ml |
| 9 | Metamagical Themas | Douglas R. Hofstadter | 1985 | 84 | 98 | ai-ml, philosophy, math |

### technology

| # | 书名 | 作者 | 年份 | 独立提及 | 提及次数 | HN 主题 |
|---|---|---|---|---|---|---|
| 1 | The art of computer programming | Donald Knuth | 1968 | 1125 | 1799 | programming, computer-science |
| 2 | The Mythical Man-Month | Frederick P. Brooks | 1975 | 760 | 957 | programming, software-engineering |
| 3 | Clean Code | Robert C. Martin | 2008 | 739 | 951 | software-engineering, programming |
| 4 | Introduction to Algorithms | Thomas H. Cormen & Charles E. Leiserson & Ronald L. Rivest & Clifford Stein | 1990 | 712 | 880 | computer-science, programming |
| 5 | Code Complete | Steve McConnell | 1993 | 669 | 894 | programming, computer-science |
| 6 | Compilers, principles, techniques, and tools | Alfred V. Aho & Monica S. Lam & Ravi Sethi & Jeffrey D. Ullman | 1986 | 659 | 958 | computer-science, programming |
| 7 | Designing Data-Intensive Applications | Martin Kleppmann | 2017 | 659 | 846 | software-engineering, systems, programming |
| 8 | Cryptonomicon | Neal Stephenson | 1999 | 628 | 847 | science-fiction, fiction, security |
| 9 | Structure and Interpretation of Computer Programs | Harold Abelson & Gerald Jay Sussman & Julie Sussman | 1985 | 602 | 761 | lisp-functional, programming, computer-science |
| 10 | The Pragmatic Programmer | Andy Hunt & Dave Thomas | 1999 | 589 | 700 | programming |
| 11 | The C Programming Language | Brian W. Kernighan & Dennis MacAlistair Ritchie | 1978 | 501 | 604 | programming |
| 12 | Cracking The Coding Interview | Gayle Laakmann McDowell | 2010 | 485 | 553 | programming, computer-science |
| 13 | How to Design Programs | Matthias Felleisen | 2001 | 440 | 776 | programming, computer-science, lisp-functional |
| 14 | The Little Schemer | Daniel P. Friedman & Matthias Felleisen | 1995 | 438 | 652 | lisp-functional |
| 15 | Design Patterns | Erich Gamma & John Vlissides & Richard Helm & Ralph Johnson | 1995 | 412 | 491 | software-engineering, programming |

### history

| # | 书名 | 作者 | 年份 | 独立提及 | 提及次数 | HN 主题 |
|---|---|---|---|---|---|---|
| 1 | IBM and the Holocaust | Edwin Black | 2001 | 191 | 240 | history, business, biography |
| 2 | The Dawn of Everything | David Graeber & David Wengrow | 2021 | 167 | 270 | history, politics-society |
| 3 | The making of the atomic bomb | Richard Rhodes | 1986 | 161 | 231 | history |
| 4 | Bowling Alone | Robert D. Putnam | 2000 | 150 | 188 | politics-society, history |
| 5 | War is a racket | Smedley D. Butler | 1935 | 146 | 170 | history |
| 6 | A People's History of the United States | Howard Zinn & Kathy Emery & Ellen Reeves & Matt Damon | 1980 | 102 | 116 | history |
| 7 | Discipline and Punish | Michel Foucault & Simon Prebble | 1975 | 70 | 98 | philosophy, politics-society, history |
| 8 | Future shock | Alvin Toffler | 1801 | 62 | 106 | history, psychology |

### philosophy

| # | 书名 | 作者 | 年份 | 独立提及 | 提及次数 | HN 主题 |
|---|---|---|---|---|---|---|
| 1 | Zen and the Art of Motorcycle Maintenance | Robert M. Pirsig | 1974 | 508 | 620 | philosophy, religion, biography |
| 2 | Man's Search for Meaning | Viktor Emil Frankl | 1946 | 325 | 394 | philosophy, religion |
| 3 | The Prince | Niccolò Machiavelli | 1515 | 194 | 220 | philosophy, politics-society, biography |
| 4 | A Guide to the Good Life | William B. Irvine | 2009 | 158 | 197 | philosophy |
| 5 | The Fountainhead | Ayn Rand | 1943 | 143 | 176 | fiction, philosophy |
| 6 | On Bullshit | Harry G. Frankfurt | 2005 | 111 | 143 | philosophy, psychology, writing |
| 7 | The Coddling of the American Mind | Greg Lukianoff & Jonathan Haidt | 2018 | 109 | 151 | politics-society, psychology, philosophy |
| 8 | In praise of idleness | Bertrand Russell | 1935 | 109 | 134 | fiction, philosophy, politics-society |
| 9 | 12 Rules for Life | Jordan B. Peterson | 2015 | 109 | 119 | productivity, philosophy, psychology |
| 10 | This is water | David Foster Wallace | 2009 | 87 | 103 | philosophy |
| 11 | The Open Society and Its Enemies | Karl Popper | 1945 | 85 | 109 | philosophy, politics-society |
| 12 | Beyond good and evil | Friedrich Nietzsche | 2009 | 85 | 99 | philosophy |
| 13 | Simulacra and Simulation | Jean Baudrillard | 1994 | 84 | 102 | philosophy |
| 14 | Candide | Voltaire | 1746 | 80 | 89 | fiction, philosophy |
| 15 | Finite and infinite games | James P. Carse & James Carse | 1986 | 78 | 105 | philosophy, religion |

### literature

| # | 书名 | 作者 | 年份 | 独立提及 | 提及次数 | HN 主题 |
|---|---|---|---|---|---|---|
| 1 | Snow Crash | Neal Stephenson | 1992 | 977 | 1283 | science-fiction, fiction |
| 2 | Neuromancer | William Gibson | 1984 | 780 | 1117 | science-fiction, fiction |
| 3 | Atlas Shrugged | Ayn Rand & Sophie Bastide-Foltz & Adrian Rand | 1957 | 758 | 1006 | fiction, science-fiction |
| 4 | Brave New World | Aldous Huxley | 1932 | 708 | 843 | fiction, science-fiction |
| 5 | The Diamond Age | Neal Stephenson | 1995 | 596 | 831 | science-fiction, fiction |
| 6 | Three-Body Problem | Cixin Liu & Ken Liu | 2008 | 513 | 620 | fiction |
| 7 | Dune | Frank Herbert | 1965 | 512 | 630 | science-fiction, fiction |
| 8 | Foundation | Isaac Asimov | 1951 | 487 | 568 | science-fiction, fiction |
| 9 | The Hitchhiker's Guide to the Galaxy | Douglas Adams | 1979 | 481 | 540 | science-fiction, fiction |
| 10 | Moby Dick | Herman Melville | 1851 | 436 | 528 | fiction |
| 11 | Ender's Game | Orson Scott Card | 1985 | 436 | 524 | science-fiction, fiction |
| 12 | Infinite Jest | David Foster Wallace | 1996 | 421 | 549 | fiction |
| 13 | Seveneves | Neal Stephenson | 2015 | 417 | 524 | science-fiction, fiction |
| 14 | A Fire upon the Deep | Vernor Vinge | 1992 | 405 | 563 | science-fiction |
| 15 | Anathem | Neal Stephenson | 2008 | 393 | 561 | science-fiction, fiction |

## 五、这个源的三条硬缺陷（使用前必读）

1. **元数据不可直接采信。** `year` / `author` 来自 OpenLibrary，实测存在明显错误：
   `Future Shock`（1970）被标为 1801，`Beyond Good and Evil`（1886）被标为 2009。
   入库前必须用出版社 / 维基 / 豆瓣重新核验年份与作者。
2. **「被很多人提到」≠「经典」。** top 榜前列大量是操作手册与教科书
   （Clean Code、Code Complete、Cracking the Coding Interview、Introduction to Algorithms），
   这类命中任务「排除清单④」（纯操作手册 / 只有罗列没有观点），一律不得选用。
3. **两个主题无覆盖。** `essays`（经典散文）与 `education`（教育与反思）在本源无对应类目，
   这两个主题仍须走原检索流程，不要指望本池。

## 六、使用纪律

1. **本池只给线索，不给证据。** HN 提及人数不在任务规定的权威认可清单内，
   经典性仍须按「豆瓣 / Goodreads / 维基 / 奖项 / 课程 / 权威书评 / 微信读书 / Scholar」取证 ≥2 项。
2. **主题轮转优先。** 今日主题由 `node src/coverage.mjs` 机械决定，本池不得反向影响选题主题。
3. **只在主题匹配时使用。** 本池以 technology / ai / literature 为主，
   若今日主题是哲学或历史，仍优先用安争鸣候选池（那边人文学科更厚）。
4. **英文书名需核中译本。** 池内 `title_zh` 一律为 null，入库前须查证是否有正式中文版；
   无中译本时，按任务「红线」只写英文原名，不自拟中文名。
5. **作者必须核。** `needs_author: true` 的条目须先查实作者。
