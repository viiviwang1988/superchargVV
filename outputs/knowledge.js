const focusData = {
  gene: {
    title: "基因",
    text: "基因是 DNA 上可被读取和调控的信息片段，是理解遗传、发育、疾病与基因技术的中心概念。",
    chips: ["DNA", "表达", "突变", "遗传"],
  },
  cell: {
    title: "细胞",
    text: "细胞是生命的基本单位。膜、细胞器、能量系统和分裂机制决定生命活动如何发生。",
    chips: ["细胞膜", "线粒体", "核糖体", "分裂"],
  },
  regulation: {
    title: "调控",
    text: "调控决定同一套 DNA 在不同时间、不同细胞里读出不同结果，是发育和表观遗传的关键。",
    chips: ["启动子", "增强子", "转录因子", "表观遗传"],
  },
  evolution: {
    title: "进化",
    text: "进化解释生命为什么多样，也解释基因频率、适应性和疾病风险如何随时间改变。",
    chips: ["自然选择", "适应性", "物种形成", "群体"],
  },
  disease: {
    title: "疾病",
    text: "癌症、遗传病、免疫病和代谢病都可以从细胞失衡、基因变化和系统调控中理解。",
    chips: ["癌基因", "抑癌基因", "免疫", "代谢"],
  },
  engineering: {
    title: "工程改造",
    text: "CRISPR、基因治疗、CAR-T 和合成生物学把生命机制变成可设计、可干预的技术。",
    chips: ["CRISPR", "Base Editing", "CAR-T", "合成生物学"],
  },
  data: {
    title: "生物信息学",
    text: "生物信息学把测序结果变成可解释的模式，连接数据库、Python、统计和生物问题。",
    chips: ["RNA-seq", "Scanpy", "Biopython", "NCBI"],
  },
};

const board = document.querySelector("#conceptBoard");
const focusCard = document.querySelector("#focusCard");

board.addEventListener("click", (event) => {
  const node = event.target.closest(".concept-node");
  if (!node) return;
  board.querySelectorAll(".concept-node").forEach((item) => item.classList.toggle("is-selected", item === node));
  const focus = focusData[node.dataset.focus];
  focusCard.querySelector("h3").textContent = focus.title;
  focusCard.querySelector("p").textContent = focus.text;
  focusCard.querySelector(".chips").innerHTML = focus.chips.map((chip) => `<span class="chip">${chip}</span>`).join("");
});
