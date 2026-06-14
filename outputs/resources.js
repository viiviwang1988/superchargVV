const resources = [
  {
    phase: "第一阶段",
    months: "月1-3",
    title: "生命的基础",
    titleEn: "Foundations of Life",
    goal: "建立生物学语言体系：细胞、分子、能量、分裂和遗传的基本词汇。",
    goalEn: "Build the basic language of biology: cells, molecules, energy, cell division, and inheritance.",
    local: [
      ["先画一个真核细胞：细胞膜、细胞核、线粒体、核糖体、内质网、高尔基体。", "Draw a eukaryotic cell first: membrane, nucleus, mitochondria, ribosomes, endoplasmic reticulum, and Golgi apparatus."],
      ["用一句话区分蛋白质、糖类、脂质和核酸。", "Distinguish proteins, carbohydrates, lipids, and nucleic acids in one sentence each."],
      ["把 ATP 理解成细胞里的能量周转货币，而不是单纯背分子名。", "Think of ATP as the cell's energy currency, not just a molecule to memorize."],
      ["把有丝分裂看作复制身体细胞，把减数分裂看作制造配子和遗传多样性。", "Treat mitosis as copying body cells, and meiosis as producing gametes and genetic diversity."],
    ],
    links: [
      ["Khan Academy Biology", "https://www.khanacademy.org/science/biology", "入门视频与练习，适合建立基础概念。"],
      ["Crash Course Biology", "https://thecrashcourse.com/courses/biology/", "节奏快，适合作为每周预习或复习。"],
      ["OpenStax Biology 2e", "https://openstax.org/details/books/biology-2e", "免费开放教材，可作为 Campbell 前的系统读物。"],
      ["HHMI BioInteractive", "https://www.biointeractive.org/classroom-resources", "高质量动画、课堂活动和生命科学案例。"],
    ],
    output: "完成一张细胞结构图，并用 500 字解释“吃饭、ATP、酶、细胞分裂”之间的关系。",
    outputEn: "Create a cell diagram and write 500 Chinese characters explaining the relationship between eating, ATP, enzymes, and cell division.",
  },
  {
    phase: "第二阶段",
    months: "月4-8",
    title: "基因学核心",
    titleEn: "Core Genetics",
    goal: "掌握 DNA、中央法则、基因调控、经典遗传和进化论。",
    goalEn: "Master DNA, the central dogma, gene regulation, classical genetics, and evolution.",
    local: [
      ["把 DNA 理解成信息存储介质：碱基序列就是可复制、可读取、可突变的信息。", "Understand DNA as an information storage medium: base sequences are copyable, readable, and mutable information."],
      ["中央法则的核心不是箭头，而是信息如何从 DNA 变成可执行的蛋白质。", "The central dogma is not just arrows; it explains how DNA information becomes functional proteins."],
      ["基因调控回答“同一套 DNA 为什么能制造不同细胞”。", "Gene regulation answers why the same DNA can produce different cell types."],
      ["进化论把遗传差异、环境选择和时间尺度放在一起解释生命多样性。", "Evolution combines genetic variation, environmental selection, and time to explain biological diversity."],
    ],
    links: [
      ["Learn.Genetics", "https://learn.genetics.utah.edu/", "遗传学和 DNA 概念的互动学习站点。"],
      ["Nature Education: Genetics", "https://www.nature.com/scitable/topic/genetics-5/", "适合从科普过渡到较严肃的英文材料。"],
      ["YourGenome", "https://www.yourgenome.org/", "基因组、遗传病和基因技术的清晰解释。"],
      ["NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/", "免费生命科学与医学书籍数据库。"],
    ],
    output: "写一页解释：为什么同一个 DNA 能长出不同器官？再用孟德尔遗传做 3 个概率题。",
    outputEn: "Write one page explaining why the same DNA can form different organs, then solve three Mendelian genetics probability problems.",
  },
  {
    phase: "第三阶段",
    months: "月9-14",
    title: "人体系统",
    titleEn: "Human Body Systems",
    goal: "理解免疫、神经、内分泌、循环、消化、生殖与发育如何协同工作。",
    goalEn: "Understand how immune, nervous, endocrine, circulatory, digestive, reproductive, and developmental systems work together.",
    local: [
      ["免疫系统关注“识别自己和非己”，疫苗是训练适应性免疫。", "The immune system focuses on recognizing self versus non-self; vaccines train adaptive immunity."],
      ["神经系统关注信号传递：神经元、电信号、神经递质、突触可塑性。", "The nervous system focuses on signaling: neurons, electrical impulses, neurotransmitters, and synaptic plasticity."],
      ["内分泌系统关注慢变量调节：激素、受体、反馈回路。", "The endocrine system regulates slower variables through hormones, receptors, and feedback loops."],
      ["人体系统学习要画流程图：输入、运输、调控、输出和反馈。", "Study body systems with flowcharts: input, transport, regulation, output, and feedback."],
    ],
    links: [
      ["Khan Academy Human Biology", "https://www.khanacademy.org/science/health-and-medicine", "人体系统和医学基础的友好入口。"],
      ["OpenStax Anatomy and Physiology 2e", "https://openstax.org/details/books/anatomy-and-physiology-2e", "免费人体解剖与生理教材。"],
      ["NIAID Immune System", "https://www.niaid.nih.gov/research/immune-system-overview", "免疫系统官方概览。"],
      ["BrainFacts", "https://www.brainfacts.org/", "神经科学科普和大脑主题资料。"],
    ],
    output: "做一张人体系统地图：免疫、神经、内分泌、循环和消化之间各写 2 条连接。",
    outputEn: "Create a body-systems map and write two connections among immunity, nervous signaling, endocrine regulation, circulation, and digestion.",
  },
  {
    phase: "第四阶段",
    months: "月15-20",
    title: "现代基因科技",
    titleEn: "Modern Genetic Technologies",
    goal: "理解测序、CRISPR、癌症、基因治疗、精准医疗和合成生物学。",
    goalEn: "Understand sequencing, CRISPR, cancer biology, gene therapy, precision medicine, and synthetic biology.",
    local: [
      ["测序技术把生物体的信息变成数据文件，后续分析决定你能看见什么模式。", "Sequencing turns biological information into data files; downstream analysis determines which patterns you can see."],
      ["CRISPR 的重点是定位、切割、修复；Base Editing 和 Prime Editing是在提高编辑精度。", "CRISPR centers on targeting, cutting, and repair; base editing and prime editing aim for higher precision."],
      ["癌症可理解为细胞层面的演化：突变、选择、克隆扩张、逃避免疫。", "Cancer can be understood as evolution at the cellular level: mutation, selection, clonal expansion, and immune evasion."],
      ["基因治疗和 CAR-T 是把分子机制转化成临床干预的例子。", "Gene therapy and CAR-T show how molecular mechanisms can become clinical interventions."],
    ],
    links: [
      ["Broad Institute CRISPR", "https://www.broadinstitute.org/what-broad/areas-focus/project-spotlight/questions-and-answers-about-crispr", "CRISPR 常见问题和概念解释。"],
      ["National Human Genome Research Institute", "https://www.genome.gov/", "基因组学、测序、疾病和伦理的权威入口。"],
      ["Cancer.gov Genetics", "https://www.cancer.gov/about-cancer/causes-prevention/genetics", "癌症与遗传主题资料。"],
      ["Addgene CRISPR Guide", "https://www.addgene.org/guides/crispr/", "面向实验和技术理解的 CRISPR 指南。"],
    ],
    output: "选择 CRISPR、CAR-T 或癌症生物学之一，写一个“机制 → 应用 → 风险限制”的案例卡。",
    outputEn: "Choose CRISPR, CAR-T, or cancer biology and write a case card: mechanism, application, and limitations.",
  },
  {
    phase: "第五阶段",
    months: "月21-24",
    title: "生物信息学",
    titleEn: "Bioinformatics",
    goal: "用 Linux、Python、数据库、RNA-seq 和单细胞分析连接你的数据能力。",
    goalEn: "Connect your data skills with Linux, Python, databases, RNA-seq, and single-cell analysis.",
    local: [
      ["先熟悉 FASTA、FASTQ、BAM、VCF、表达矩阵这些常见数据对象。", "Start with common data objects: FASTA, FASTQ, BAM, VCF, and expression matrices."],
      ["用 Jupyter 做可复现笔记：读取数据、清洗、统计、可视化、解释。", "Use Jupyter for reproducible notes: load data, clean it, analyze it, visualize it, and interpret it."],
      ["RNA-seq 的直觉是比较基因表达量，单细胞分析的直觉是比较细胞状态。", "The intuition of RNA-seq is comparing gene expression; the intuition of single-cell analysis is comparing cell states."],
      ["每次分析都写清楚：数据来源、处理步骤、参数、图的解释和局限。", "For every analysis, document the data source, processing steps, parameters, figure interpretation, and limitations."],
    ],
    links: [
      ["NCBI Learn", "https://www.ncbi.nlm.nih.gov/home/learn/", "NCBI 的课程、网络研讨会、教程和文档入口。"],
      ["Biopython Documentation", "https://biopython.org/wiki/Documentation", "Python 生物信息学包的官方文档。"],
      ["Galaxy Training Network", "https://training.galaxyproject.org/", "无需本地复杂安装的生物信息学训练材料。"],
      ["Scanpy Tutorials", "https://scanpy.readthedocs.io/en/stable/tutorials/index.html", "单细胞分析 Scanpy 官方教程。"],
    ],
    output: "完成一个 notebook：下载一个公开序列或表达数据，做基础统计、可视化，并写出 3 条生物学解释。",
    outputEn: "Complete a notebook: download a public sequence or expression dataset, run basic statistics and visualization, and write three biological interpretations.",
  },
];

let activeResourcePhase = "全部";
let resourceTerm = "";

const resourceGrid = document.querySelector("#resourceGrid");
const resourceTemplate = document.querySelector("#resourceTemplate");
const resourceTabs = document.querySelector("#resourceTabs");

function resourcePhases() {
  return ["全部", ...resources.map((item) => item.phase)];
}

function renderResourceTabs() {
  resourceTabs.innerHTML = "";
  resourcePhases().forEach((phase) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = phase;
    button.className = phase === activeResourcePhase ? "is-active" : "";
    button.addEventListener("click", () => {
      activeResourcePhase = phase;
      renderResourceTabs();
      renderResources();
    });
    resourceTabs.append(button);
  });
}

function renderResources() {
  const term = resourceTerm.trim().toLowerCase();
  resourceGrid.innerHTML = "";
  const visibleResources = resources
    .filter((item) => activeResourcePhase === "全部" || item.phase === activeResourcePhase)
    .filter((item) => {
      const linkText = item.links.flat().join(" ");
      const localText = item.local.flat().join(" ");
      const haystack = [item.phase, item.months, item.title, item.titleEn, item.goal, item.goalEn, item.output, item.outputEn, localText, linkText].join(" ").toLowerCase();
      return !term || haystack.includes(term);
    });

  if (visibleResources.length === 0) {
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = "<h3>没有匹配的资料</h3><p>换一个关键词，或者切回“全部”阶段再搜索。</p>";
    resourceGrid.append(empty);
    return;
  }

  visibleResources.forEach((item) => {
      const card = resourceTemplate.content.firstElementChild.cloneNode(true);
      card.querySelector(".resource-phase").textContent = item.phase;
      card.querySelector(".resource-months").textContent = item.months;
      card.querySelector("h3").textContent = item.title;
      card.querySelector(".resource-title-en").textContent = item.titleEn;
      card.querySelector(".resource-goal").textContent = item.goal;
      card.querySelector(".resource-goal-en").textContent = item.goalEn;

      const localList = card.querySelector(".local-list");
      item.local.forEach(([zh, en]) => {
        const li = document.createElement("li");
        li.innerHTML = "<span></span><em></em>";
        li.querySelector("span").textContent = zh;
        li.querySelector("em").textContent = en;
        localList.append(li);
      });

      const links = card.querySelector(".link-list");
      item.links.forEach(([name, href, description]) => {
        const anchor = document.createElement("a");
        anchor.className = "resource-link";
        anchor.href = href;
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
        anchor.innerHTML = `<strong></strong><span></span>`;
        anchor.querySelector("strong").textContent = name;
        anchor.querySelector("span").textContent = description;
        links.append(anchor);
      });

      card.querySelector(".resource-output").textContent = item.output;
      card.querySelector(".resource-output-en").textContent = item.outputEn;
      resourceGrid.append(card);
    });
}

document.querySelector("#resourceSearch").addEventListener("input", (event) => {
  resourceTerm = event.target.value;
  renderResources();
});

renderResourceTabs();
renderResources();
