const roadmap = [
  {
    phase: "第一阶段",
    phaseName: "生命的基础",
    month: 1,
    title: "细胞生物学",
    goal: "建立生物学语言体系，理解细胞膜、线粒体、核糖体、内质网和高尔基体。",
    topics: ["生命定义", "原核与真核", "细胞器", "能量系统"],
    outputs: ["画出完整细胞图", "解释主要细胞器功能"],
  },
  {
    phase: "第一阶段",
    phaseName: "生命的基础",
    month: 2,
    title: "生物化学",
    goal: "理解蛋白质、氨基酸、糖类、脂质、酶和 ATP，建立分子层面的生命观。",
    topics: ["蛋白质", "酶", "ATP", "碳基生命"],
    outputs: ["解释为什么人需要吃饭", "说明 ATP 与酶如何工作"],
  },
  {
    phase: "第一阶段",
    phaseName: "生命的基础",
    month: 3,
    title: "细胞分裂与遗传基础",
    goal: "掌握有丝分裂、减数分裂、染色体和 DNA，理解孩子为什么像父母。",
    topics: ["有丝分裂", "减数分裂", "染色体", "DNA"],
    outputs: ["画出细胞分裂流程", "解释遗传相似性"],
  },
  {
    phase: "第二阶段",
    phaseName: "基因学核心",
    month: 4,
    title: "DNA",
    goal: "学习 DNA 结构、碱基配对、染色体和基因，理解人类约 20000 个基因的意义。",
    topics: ["双螺旋", "碱基配对", "染色体", "基因"],
    outputs: ["解释 DNA 如何存储信息"],
  },
  {
    phase: "第二阶段",
    phaseName: "基因学核心",
    month: 5,
    title: "中央法则",
    goal: "掌握 DNA 到 RNA 到蛋白质的主线，理解转录、翻译、密码子和蛋白表达。",
    topics: ["转录", "翻译", "密码子", "tRNA"],
    outputs: ["解释同一个 DNA 为什么能长出不同器官"],
  },
  {
    phase: "第二阶段",
    phaseName: "基因学核心",
    month: 6,
    title: "基因调控",
    goal: "理解启动子、增强子、转录因子和表观遗传学。",
    topics: ["启动子", "增强子", "转录因子", "表观遗传"],
    outputs: ["解释同卵双胞胎为何逐渐不同"],
  },
  {
    phase: "第二阶段",
    phaseName: "基因学核心",
    month: 7,
    title: "经典遗传学",
    goal: "学习孟德尔遗传、显隐性、遗传概率和连锁遗传。",
    topics: ["孟德尔", "显隐性", "概率", "连锁遗传"],
    outputs: ["解释部分疾病如何遗传"],
  },
  {
    phase: "第二阶段",
    phaseName: "基因学核心",
    month: 8,
    title: "进化论",
    goal: "理解达尔文、自然选择、适应性和物种形成。",
    topics: ["自然选择", "适应性", "物种形成", "人类演化"],
    outputs: ["解释人类与黑猩猩 DNA 相似度"],
  },
  {
    phase: "第三阶段",
    phaseName: "人体系统",
    month: 9,
    title: "免疫系统",
    goal: "掌握先天免疫、适应性免疫、抗体和疫苗。",
    topics: ["先天免疫", "适应性免疫", "抗体", "疫苗"],
    outputs: ["解释为什么疫苗有效"],
  },
  {
    phase: "第三阶段",
    phaseName: "人体系统",
    month: 10,
    title: "神经系统",
    goal: "学习神经元、大脑结构、神经递质、学习与记忆。",
    topics: ["神经元", "大脑结构", "神经递质", "记忆"],
    outputs: ["整理意识问题的基础假说"],
  },
  {
    phase: "第三阶段",
    phaseName: "人体系统",
    month: 11,
    title: "内分泌系统",
    goal: "理解激素、胰岛素、糖尿病和生长激素。",
    topics: ["激素", "胰岛素", "糖尿病", "生长激素"],
    outputs: ["解释血糖调节机制"],
  },
  {
    phase: "第三阶段",
    phaseName: "人体系统",
    month: 12,
    title: "循环系统",
    goal: "学习心脏、血液和氧运输。",
    topics: ["心脏", "血液", "氧运输"],
    outputs: ["画出氧气运输路径"],
  },
  {
    phase: "第三阶段",
    phaseName: "人体系统",
    month: 13,
    title: "消化系统",
    goal: "理解肠道菌群和营养吸收。",
    topics: ["肠道菌群", "营养吸收", "代谢"],
    outputs: ["总结菌群如何影响人体"],
  },
  {
    phase: "第三阶段",
    phaseName: "人体系统",
    month: 14,
    title: "生殖与发育",
    goal: "学习胚胎发育、干细胞和衰老。",
    topics: ["胚胎发育", "干细胞", "衰老"],
    outputs: ["解释干细胞与分化"],
  },
  {
    phase: "第四阶段",
    phaseName: "现代基因科技",
    month: 15,
    title: "测序技术",
    goal: "学习 Sanger、NGS 和单细胞测序。",
    topics: ["Sanger", "NGS", "单细胞测序"],
    outputs: ["比较三类测序技术"],
  },
  {
    phase: "第四阶段",
    phaseName: "现代基因科技",
    month: 16,
    title: "CRISPR",
    goal: "理解 Cas9、Base Editing 和 Prime Editing，建立基因编辑直觉。",
    topics: ["Cas9", "Base Editing", "Prime Editing"],
    outputs: ["解释如何编辑人类基因"],
  },
  {
    phase: "第四阶段",
    phaseName: "现代基因科技",
    month: 17,
    title: "癌症生物学",
    goal: "学习癌基因、抑癌基因和肿瘤进化。",
    topics: ["癌基因", "抑癌基因", "肿瘤进化"],
    outputs: ["解释癌症为何不是单一疾病"],
  },
  {
    phase: "第四阶段",
    phaseName: "现代基因科技",
    month: 18,
    title: "基因治疗",
    goal: "理解遗传病治疗和 CAR-T 的基本逻辑。",
    topics: ["遗传病治疗", "病毒载体", "CAR-T"],
    outputs: ["拆解一个基因治疗案例"],
  },
  {
    phase: "第四阶段",
    phaseName: "现代基因科技",
    month: 19,
    title: "精准医疗",
    goal: "学习个体化治疗和基因检测。",
    topics: ["个体化治疗", "基因检测", "风险评估"],
    outputs: ["解释基因检测报告的局限"],
  },
  {
    phase: "第四阶段",
    phaseName: "现代基因科技",
    month: 20,
    title: "合成生物学",
    goal: "理解设计生命和人工细胞的基本思想。",
    topics: ["设计生命", "人工细胞", "工程改造"],
    outputs: ["设计一个合成生物学概念项目"],
  },
  {
    phase: "第五阶段",
    phaseName: "生物信息学",
    month: 21,
    title: "Linux 与生物数据",
    goal: "掌握命令行、文件格式和基础基因数据库。",
    topics: ["Linux", "FASTA", "FASTQ", "NCBI"],
    outputs: ["下载并查看一个基因序列"],
  },
  {
    phase: "第五阶段",
    phaseName: "生物信息学",
    month: 22,
    title: "Python 生物包",
    goal: "学习 Biopython、Jupyter 和常见序列处理任务。",
    topics: ["Python", "Jupyter", "Biopython"],
    outputs: ["写一个序列统计 notebook"],
  },
  {
    phase: "第五阶段",
    phaseName: "生物信息学",
    month: 23,
    title: "RNA-seq",
    goal: "理解表达矩阵、差异表达和可视化。",
    topics: ["RNA-seq", "表达矩阵", "差异表达"],
    outputs: ["完成一个小型 RNA-seq 分析"],
  },
  {
    phase: "第五阶段",
    phaseName: "生物信息学",
    month: 24,
    title: "单细胞分析",
    goal: "学习 Scanpy、聚类、细胞类型注释和结果解释。",
    topics: ["Scanpy", "聚类", "细胞注释", "UMAP"],
    outputs: ["完成一个单细胞数据探索"],
  },
];

const stateKey = "bio-roadmap-progress-v1";
const state = JSON.parse(localStorage.getItem(stateKey) || "{}");
state.completed ||= {};
state.outputs ||= {};
state.notes ||= {};
state.hours ||= 0;
state.weekHours ||= 0;

let activePhase = "全部";
let searchTerm = "";

const monthGrid = document.querySelector("#monthGrid");
const template = document.querySelector("#monthTemplate");
const phaseTabs = document.querySelector("#phaseTabs");

function save() {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function phases() {
  return ["全部", ...new Set(roadmap.map((item) => item.phase))];
}

function renderTabs() {
  phaseTabs.innerHTML = "";
  phases().forEach((phase) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = phase;
    button.className = phase === activePhase ? "is-active" : "";
    button.addEventListener("click", () => {
      activePhase = phase;
      renderTabs();
      renderRoadmap();
    });
    phaseTabs.append(button);
  });
}

function renderRoadmap() {
  monthGrid.innerHTML = "";
  const term = searchTerm.trim().toLowerCase();
  roadmap
    .filter((item) => activePhase === "全部" || item.phase === activePhase)
    .filter((item) => {
      const haystack = [item.phase, item.phaseName, item.title, item.goal, ...item.topics, ...item.outputs].join(" ").toLowerCase();
      return !term || haystack.includes(term);
    })
    .forEach((item) => {
      const card = template.content.firstElementChild.cloneNode(true);
      const id = `m${item.month}`;
      card.dataset.month = item.month;
      card.querySelector(".month-card__badge").textContent = `${item.phase} · 月${item.month}`;
      card.querySelector("h3").textContent = item.title;
      card.querySelector(".month-card__goal").textContent = item.goal;
      card.classList.toggle("is-complete", Boolean(state.completed[id]));

      const complete = card.querySelector(".month-complete");
      complete.checked = Boolean(state.completed[id]);
      complete.addEventListener("change", () => {
        state.completed[id] = complete.checked;
        save();
        renderRoadmap();
        updateSummary();
      });

      const chips = card.querySelector(".chips");
      item.topics.forEach((topic) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = topic;
        chips.append(chip);
      });

      const outputs = card.querySelector(".outputs");
      item.outputs.forEach((output, index) => {
        const key = `${id}-o${index}`;
        const label = document.createElement("label");
        label.className = "output-check";
        label.innerHTML = `<input type="checkbox" ${state.outputs[key] ? "checked" : ""} /> <span></span>`;
        label.querySelector("span").textContent = output;
        label.querySelector("input").addEventListener("change", (event) => {
          state.outputs[key] = event.target.checked;
          save();
          updateSummary();
        });
        outputs.append(label);
      });

      const notes = card.querySelector("textarea");
      notes.value = state.notes[id] || "";
      notes.addEventListener("input", () => {
        state.notes[id] = notes.value;
        save();
      });

      monthGrid.append(card);
    });
}

function updateSummary() {
  const completed = roadmap.filter((item) => state.completed[`m${item.month}`]).length;
  const outputTotal = roadmap.reduce((sum, item) => sum + item.outputs.length, 0);
  const outputDone = Object.values(state.outputs).filter(Boolean).length;
  const percent = Math.round(((completed + outputDone / Math.max(outputTotal, 1)) / 25) * 100);
  const next = roadmap.find((item) => !state.completed[`m${item.month}`]) || roadmap.at(-1);
  const current = next ? `${next.phaseName} · ${next.phase}` : "全部完成";

  document.querySelector("#overallPercent").textContent = `${Math.min(percent, 100)}%`;
  document.querySelector("#overallBar").style.width = `${Math.min(percent, 100)}%`;
  document.querySelector("#completedMonths").textContent = completed;
  document.querySelector("#totalHours").textContent = Number(state.hours || 0).toFixed(1).replace(".0", "");
  document.querySelector("#nextMonth").textContent = next ? `月${next.month}` : "完成";
  document.querySelector("#nextTopic").textContent = next ? next.title : "可以进入更高级领域";
  document.querySelector("#currentPhase").textContent = current;

  const pace = Number(state.weekHours || 0);
  document.querySelector("#weekHours").value = pace || 0;
  document.querySelector("#paceStatus").textContent = pace >= 5 ? "达到节奏" : pace > 0 ? "继续补一点" : "尚未记录";
}

document.querySelector("#searchInput").addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderRoadmap();
});

document.querySelector("#saveHours").addEventListener("click", () => {
  const value = Math.max(0, Number(document.querySelector("#weekHours").value || 0));
  state.hours = Number(state.hours || 0) + value;
  state.weekHours = value;
  save();
  updateSummary();
});

document.querySelector("#focusToday").addEventListener("click", () => {
  const next = roadmap.find((item) => !state.completed[`m${item.month}`]);
  if (!next) return;
  activePhase = next.phase;
  searchTerm = "";
  document.querySelector("#searchInput").value = "";
  renderTabs();
  renderRoadmap();
  requestAnimationFrame(() => {
    document.querySelector(`[data-month="${next.month}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

document.querySelector("#resetProgress").addEventListener("click", () => {
  if (!confirm("确定要清空所有完成状态、小时和笔记吗？")) return;
  localStorage.removeItem(stateKey);
  location.reload();
});

renderTabs();
renderRoadmap();
updateSummary();
