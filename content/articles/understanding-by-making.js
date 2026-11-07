export const article = {
  slug: 'understanding-by-making',
  title_zh: '造出来才算懂：为什么有些知识只能从试制中得到',
  title_en: 'Understanding by Making: Why Some Knowledge Only Arrives Through a Prototype',
  subtitle_zh:
    '分析能说清一个东西是什么，却说不清它会怎样失败。图纸上不存在的性质，只能等它被真正组装起来才出现',
  subtitle_en:
    'Analysis can say what a thing is, but not all the ways it can fail. Properties that do not exist on the drawing only appear once the thing is actually put together',
  category: 'philosophy',
  tags: ['philosophy', 'cognitive-science', 'innovation', 'technology', 'learning'],
  related_books: [
    'sciences-of-the-artificial',
    'mindstorms',
    'the-mythical-man-month',
    'crystal-fire',
    'structures-or-why-things-dont-fall-down',
    'the-perfectionists',
  ],
  related_topics: ['philosophy', 'cognitive-science', 'innovation'],
  publish_date: '2026-11-07',
  lang: 'both',
  content_zh: `## 一、看完了图纸，为什么还是不会做

一个反复出现的场景：规格书写得清楚，流程图没有遗漏，评审也顺利通过，等到第一次把东西真正做出来，问题却从完全没有写过的地方冒出来——两个各自合格的部件装在一起会互相干扰，某个在纸面上可以忽略的偏差在连续运行后会被放大，使用者会用设计者没设想过的方式去操作它。参与者的第一反应通常是「分析还不够细」。但这个反应很少成立：再加一轮分析，新增的仍是同一类描述，而这次缺的恰恰不是描述。

布鲁克斯在《人月神话》里以大型操作系统的经验为据，提出那个广为流传的建议：第一个系统本来就应当准备丢弃。值得注意的不是「会失败」这个预测，而是他把它写进了计划——试制不是执行阶段出了岔子之后的补救，而是认识过程本身的一个环节。如果第一版注定要扔，那它生产出来的就不是一件产品，而是一份关于「这个系统会怎样失败」的知识。

于是问题可以更准确地提出来：为什么某些知识，无论把描述写得多完备，都不会在分析阶段出现？

## 二、两种「懂」

「懂一个东西」至少有两层意思。第一层是能说出它是什么、由什么组成、按什么规则运行；这一层可以完全靠文本传递，也可以被完整写进规格书。第二层是能把它做出来，或者至少能预判它在具体条件下会怎样失效。前者的对象是已经存在的性质，后者的对象却包含那些尚未被实现的组合。

西蒙在《人工科学》里给出过一个有用的区分：自然科学追问事物「是如何」，而设计关心的是为了达到某个目标，事物「应当如何」。人造物之所以特别，在于它要同时服从内部的构造逻辑与外部环境施加的要求，两者相遇的那个界面才是真正的问题所在。这个框架解释了一件事：规格书通常分别写下界面两侧的要求，而界面上究竟会发生什么，必须等两侧真的被放到一起才知道。

帕佩特在《因计算机而强大》里把同一层意思搬到了学习上：理解不是在接收说明时完成的，而是在搭建一个能运行、能被别人看见和讨论的物件时形成的。这里的重点不是「动手比动脑好」这类教学法偏好，而是一个更硬的主张：**有些性质只在被构造出来之后才存在**。一个还没被拼起来的结构没有「受力后的变形」，一个还没运行过的程序没有「在真实输入下的行为」。对尚不存在的性质，再精确的描述也无从描述。

## 三、试制生产的不是验证，而是新问题

把试制理解成「验证已有想法」，会漏掉它最有价值的部分。验证假定问题已经定好，只剩答案的对错；但试制真正产出的，常常是原来根本没被列为问题的东西。

《晶体之火》记录的晶体管发明过程是一个清楚的样本。贝尔实验室的研究者并不是先把理论算完备再照图施工；点接触器件能否成立，取决于半导体表面状态、接触压力、材料纯度这些当时尚未被完全理解的细节，它们只在一次次具体的尝试中才显现为「必须处理的变量」。理论提供了方向，却没有提前交出变量的清单。

《结构：为什么东西不会倒塌》从另一侧说明同一件事：工程结构的失效往往不来自构件强度不够，而来自载荷路径被想错、连接处的局部行为没被料到。构件可以逐一验算，路径却只存在于整体之中。《追求精确》所梳理的公差史再补一层：精度从来不是「希望做到多准」的愿望，而是「能否被稳定地制造并测量」的能力；一个只写在图纸上的精度要求，在它被工艺实现之前并不构成知识。

三例指向同一个机制：分析处理的是可分解的部分，试制暴露的是部分之间的耦合。耦合项既不在任何单一部分的描述里，也不能由各部分描述相加得到。因此把分析做得更细，只会让每一部分更清楚，不会让耦合项自动出现。

## 四、反方：试制会反过来限制想象

对上面这套说法，最有力的反驳不是「试制太贵」，而是它会改变问题本身。

第一，一个能跑起来的原型会迅速把讨论锚定在「它已经能这样了」，于是「该不该做」「还有没有别的形态」这些原本开放的问题被悄悄关闭。布鲁克斯在同一本书里强调大型系统的概念完整性，恰好提示了另一面：早期选择会长期约束后来的所有设计。第一个可行的解，很容易被误认成最优的解。

第二，试制的成本并不均匀。软件里丢弃一版可以承受，桥梁、芯片产线、疫苗不行；在这类领域把「先做出来再说」当成通用方法，等于把不可逆的代价交给试错。更关键的是，有些失败无法诊断：当多个变量一起变化，一次失败并不能告诉你是哪一个变量造成的，这样的试制只生产噪声，不生产知识。

第三，也是这套说法最硬的边界：它对自然对象根本不成立。没有人靠「造一颗恒星」来理解恒星。构造性理解只在对象可干预、且干预结果可归因的领域有效；把它推广成普遍的认识论，就会变成一句听起来漂亮却无法执行的口号。

## 五、三条判据

因此值得保留的不是「多做原型」这个口号，而是一组能判断何时该试制的条件。

**一，对象是否可干预。** 能被拆解、组装、施加条件并观察结果的，试制有可能产生分析给不出的信息；只能观察、不能干预的，必须另走预测与证伪的路径。

**二，失败是否可归因。** 试制必须被设计成一次能学到东西的实验：一次只改动一个可命名的变量，或留有足够记录把结果拆开。否则失败只是一次昂贵的意外。

**三，依据是否可追溯。** 试制给出的结论必须连同「当时为什么这样设」一起留存。西蒙关于界面的框架在这里可以反过来用：原型之所以有价值，是因为它把内部假设与外部环境的一次具体相遇固定了下来；只留结论、不留假设，下一次环境变化时就无从判断哪部分仍然成立。

这三条同时也是对上述反方的回应：锚定效应靠保留替代形态来抑制，成本靠判据筛选场景来约束，诊断困难靠实验设计来改善。它们不是保证成功的配方，而是把「试错」与「碰运气」区分开的界线。

## 六、把试制放进认识流程

回到开头那个问题：为什么看完了图纸还是不会做。答案不是分析有缺陷，而是分析有自己的适用对象——它处理已经存在、可以分解、可以被描述的性质；而人造系统的关键性质，有很大一部分只在被构造、被施加条件、被观察到失效之后才出现。两者不是精度高低之别，是对象不同。

由此得到一个不算激进、却相当具体的判断：**不要在「分析完成」之后才允许试制，而要把试制排进认识流程的前段，并让它有权改写问题清单，而不只是回答清单上的问题。** 与之配套的是两条纪律——保留至少一个未被采用的形态，防止第一个可行解封闭讨论；记录每次试制所依据的假设，使结论能被后来的环境变化重新检验。

对于确实不可试制的领域，这套办法让位于另一条路径：明确写出预测，指定什么样的观察会推翻它，并主动去找那些观察。两条路径的共同点其实是一个更朴素的立场——把「还没看到它失败」和「它不会失败」分开。前者是知识当前的状态，后者是未经检验的断言；把两者混同，才是各类纸面方案最常犯的错误。`,
  content_en: `## 1. Why Knowing the Blueprint Is Not Knowing How to Build It

A familiar scene: the specification is clear, no step is missing from the flowchart, the review passes, and then the first real build produces trouble from somewhere the documents never mentioned. Two components that each pass their own tests interfere once joined; a deviation too small to matter on paper amplifies after sustained operation; users handle the thing in ways no designer anticipated. The first reaction is almost always that the analysis was not detailed enough. That reaction is rarely right. Another round of analysis adds more of the same kind of description, and description is precisely what was not missing.

Writing from the experience of a large operating system, Frederick Brooks offered the well-known advice in The Mythical Man-Month that the first system should be planned for disposal. What matters is not the prediction that it will fail, but that he placed the failure inside the plan. Prototyping is not a repair after execution goes wrong; it is a stage in the process of coming to know. If the first version is meant to be thrown away, what it produces is not a product but knowledge about how this system fails.

The question can now be put more precisely: why do some kinds of knowledge never appear during analysis, however complete the description becomes?

## 2. Two Senses of "Understanding"

To understand a thing means at least two different things. The first is being able to say what it is, what it is made of, and what rules it follows. That layer transfers entirely through text and fits inside a specification. The second is being able to make it, or at least to anticipate how it will fail under concrete conditions. The object of the first is a property that already exists; the object of the second includes combinations that have not yet been realised.

Herbert Simon drew a useful distinction in The Sciences of the Artificial. Natural science asks how things are; design asks how things ought to be in order to reach a goal. Artefacts are peculiar because they must answer at once to an internal logic of construction and to the demands of an external environment, and the interface where the two meet is where the real problem lives. This explains something otherwise puzzling: specifications usually state the requirements on each side of that interface separately, while what actually happens at the interface becomes visible only when the two sides are put together.

Seymour Papert carried the same point into learning in Mindstorms. Understanding, on his account, is not completed when an explanation is received; it forms while someone builds an object that runs, that others can see and argue about. The point is not a pedagogical preference for hands over heads. It is a harder claim: **some properties exist only after something has been constructed.** A structure not yet assembled has no deformation under load; a program not yet run has no behaviour under real input. However precise a description is, it has nothing to describe when the property is not there yet.

## 3. A Prototype Produces New Questions, Not Just Verification

Treating a prototype as a way to verify an existing idea misses its most valuable output. Verification assumes the question is settled and only the answer remains in doubt. What a prototype usually produces is something that was never on the list of questions at all.

The invention of the transistor, recorded in Crystal Fire, is a clear case. The researchers at Bell Labs did not finish the theory first and then build to the drawing. Whether a point-contact device worked depended on the state of the semiconductor surface, contact pressure and material purity — details not yet fully understood, which appeared as variables demanding attention only through repeated concrete attempts. Theory supplied a direction; it did not hand over the list of variables in advance.

Structures: Or Why Things Don't Fall Down makes the same point from the other side. Structural failure often comes not from members lacking strength but from a load path being misread, or from local behaviour at a joint nobody allowed for. Individual members can be checked one by one; a load path exists only in the whole. The history of tolerance in The Perfectionists adds a third layer: precision was never a wish about how accurate one would like to be, but a capacity to manufacture and measure that accuracy reliably. A tolerance written on a drawing is not yet knowledge until a process can hold it.

These three cases point to one mechanism. Analysis handles parts that can be decomposed; a prototype exposes the couplings between them. A coupling term is in none of the individual descriptions and cannot be obtained by adding them up. Making the analysis finer therefore clarifies each part further without ever making the coupling appear.

## 4. The Objection: Making Also Constrains the Imagination

The strongest reply is not that prototypes are expensive. It is that they change the question.

First, a working prototype quickly anchors discussion to "this is what it already does", quietly closing questions that were open — whether it should be built at all, whether another form is possible. Brooks's insistence elsewhere in the same book on conceptual integrity in large systems points to the reverse side: early choices constrain every later design for a long time. The first solution that works is easily mistaken for the best one.

Second, the cost of prototyping is not evenly distributed. Software can afford to discard a version; bridges, fabrication lines and vaccines cannot. Applying "build it and see" as a general method in those domains hands irreversible costs over to trial and error. More decisive still, some failures cannot be diagnosed. When several variables change together, a failure does not reveal which one caused it, and such a prototype produces noise rather than knowledge.

Third, and this is the hardest boundary, the argument does not hold for natural objects at all. Nobody understands a star by making one. Constructive understanding works only where the object can be intervened upon and the results of intervention can be attributed; promoted into a general epistemology, it becomes a handsome slogan with no way to be carried out.

## 5. Three Tests

What deserves keeping, then, is not the slogan "build more prototypes" but a set of conditions for deciding when a prototype is the right move.

**One: can the object be intervened upon?** Where something can be taken apart, assembled, subjected to conditions and observed, a prototype may yield information analysis cannot. Where it can only be observed, the route must be prediction and falsification instead.

**Two: can failure be attributed?** A prototype has to be designed as an experiment that teaches something: change one nameable variable at a time, or keep records fine enough to pull the result apart afterwards. Without that, a failure is merely an expensive accident.

**Three: can the reasoning be traced?** The conclusion must be kept together with the reasons for setting things up that way. Simon's interface can be read backwards here: a prototype is valuable because it fixes one concrete encounter between internal assumptions and an external environment. Keep the conclusion and discard the assumptions, and there is no way to tell which parts still hold when the environment changes.

The three tests also answer the objections above. Anchoring is held in check by keeping an alternative form alive; cost is contained by screening which cases qualify; poor diagnosis is improved by experimental design. They are not a recipe for success. They are the line separating a deliberate trial from a lucky accident.

## 6. Put Making Inside the Process of Knowing

Back to the opening question: why does reading the blueprint not tell you how to build? The answer is not that analysis is defective. Analysis has its own proper object — properties that already exist, can be decomposed and can be described. Many decisive properties of an artefact appear only after it has been constructed, subjected to conditions and watched failing. The difference between the two is not one of precision but of subject matter.

A modest but quite specific judgement follows: **do not permit prototyping only after analysis is complete. Place it early in the process of knowing, and give it the authority to rewrite the list of questions rather than merely answer the questions on the list.** Two disciplines go with it — keep at least one form that was not adopted, so the first workable solution cannot close the discussion; and record the assumptions behind each trial, so the conclusion can be re-examined when conditions change.

Where prototypes are genuinely impossible, this gives way to a different route: state the prediction explicitly, name the observation that would overturn it, and go looking for that observation. Both routes rest on a plainer stance — keep "it has not yet been seen to fail" apart from "it cannot fail". The first describes the current state of knowledge; the second is an untested assertion. Confusing the two is the error that paper plans most reliably commit.`,
};
