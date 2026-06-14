const defaultTerms = [
  ["细胞", "cell", "第一阶段", "生命的基本单位。The basic unit of life."],
  ["细胞膜", "cell membrane", "第一阶段", "控制物质进出细胞的边界。A boundary that controls what enters and leaves the cell."],
  ["线粒体", "mitochondrion", "第一阶段", "产生 ATP 的细胞器。An organelle that produces ATP."],
  ["核糖体", "ribosome", "第一阶段", "制造蛋白质的分子机器。A molecular machine that builds proteins."],
  ["酶", "enzyme", "第一阶段", "加速化学反应的蛋白质。A protein that speeds up chemical reactions."],
  ["ATP", "ATP", "第一阶段", "细胞的能量周转分子。The cell's energy currency."],
  ["DNA", "DNA", "第二阶段", "存储遗传信息的分子。The molecule that stores genetic information."],
  ["基因", "gene", "第二阶段", "DNA 上可被读取和调控的信息片段。A readable and regulatable segment of DNA."],
  ["转录", "transcription", "第二阶段", "把 DNA 信息复制成 RNA。Copying DNA information into RNA."],
  ["翻译", "translation", "第二阶段", "根据 RNA 信息制造蛋白质。Building proteins from RNA information."],
  ["突变", "mutation", "第二阶段", "DNA 序列发生变化。A change in a DNA sequence."],
  ["抗体", "antibody", "第三阶段", "免疫系统识别目标的蛋白质。A protein used by the immune system to recognize targets."],
  ["神经元", "neuron", "第三阶段", "传递神经信号的细胞。A cell that transmits nervous-system signals."],
  ["激素", "hormone", "第三阶段", "在身体中传递调节信号的分子。A molecule that carries regulatory signals in the body."],
  ["测序", "sequencing", "第四阶段", "读取 DNA 或 RNA 序列的技术。Technology for reading DNA or RNA sequences."],
  ["CRISPR", "CRISPR", "第四阶段", "可用于定点基因编辑的系统。A system used for targeted gene editing."],
  ["癌基因", "oncogene", "第四阶段", "促进癌症发生的基因。A gene that can promote cancer development."],
  ["RNA-seq", "RNA-seq", "第五阶段", "测量基因表达的测序方法。A sequencing method for measuring gene expression."],
  ["表达矩阵", "expression matrix", "第五阶段", "记录样本或细胞中基因表达量的表格。A table of gene expression values across samples or cells."],
  ["单细胞分析", "single-cell analysis", "第五阶段", "在单个细胞分辨率理解细胞状态。Understanding cell states at single-cell resolution."],
].map(([zh, en, stage, note], index) => ({
  id: `default-${index}`,
  zh,
  en,
  stage,
  note,
  personalNote: "",
  status: "review",
}));

const storageKey = "bio-vocabulary-notes-v1";
let terms = JSON.parse(localStorage.getItem(storageKey) || "null") || defaultTerms;
let activeStage = "全部";
let activeLetter = "全部";
let termSearch = "";

const termGrid = document.querySelector("#termGrid");
const termTemplate = document.querySelector("#termTemplate");
const vocabTabs = document.querySelector("#vocabTabs");
const alphabetIndex = document.querySelector("#alphabetIndex");

function saveTerms() {
  localStorage.setItem(storageKey, JSON.stringify(terms));
}

function stages() {
  return ["全部", "第一阶段", "第二阶段", "第三阶段", "第四阶段", "第五阶段"];
}

function renderTabs() {
  vocabTabs.innerHTML = "";
  stages().forEach((stage) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = stage;
    button.className = stage === activeStage ? "is-active" : "";
    button.addEventListener("click", () => {
      activeStage = stage;
      renderTabs();
      renderTerms();
    });
    vocabTabs.append(button);
  });
}

function renderStats() {
  document.querySelector("#termCount").textContent = terms.length;
  document.querySelector("#knownCount").textContent = terms.filter((term) => term.status === "known").length;
  document.querySelector("#reviewCount").textContent = terms.filter((term) => term.status !== "known").length;
}

function firstLetter(term) {
  const match = term.en.trim().match(/[a-z]/i);
  return match ? match[0].toUpperCase() : "#";
}

function renderAlphabetIndex() {
  alphabetIndex.innerHTML = "";
  const available = new Set(terms.map(firstLetter));
  ["全部", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", "#"].forEach((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = letter;
    button.className = letter === activeLetter ? "is-active" : "";
    button.disabled = letter !== "全部" && !available.has(letter);
    button.addEventListener("click", () => {
      activeLetter = letter;
      renderAlphabetIndex();
      renderTerms();
    });
    alphabetIndex.append(button);
  });
}

function renderTerms() {
  const query = termSearch.trim().toLowerCase();
  const visibleTerms = terms
    .filter((term) => activeStage === "全部" || term.stage === activeStage)
    .filter((term) => activeLetter === "全部" || firstLetter(term) === activeLetter)
    .filter((term) => {
      const haystack = [term.zh, term.en, term.stage, term.note, term.status].join(" ").toLowerCase();
      return !query || haystack.includes(query);
    })
    .sort((a, b) => a.en.localeCompare(b.en, "en", { sensitivity: "base" }));

  termGrid.innerHTML = "";
  if (visibleTerms.length === 0) {
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = "<h3>没有匹配的词语</h3><p>换一个关键词，或者新增一个你想记住的术语。</p>";
    termGrid.append(empty);
    renderStats();
    return;
  }

  visibleTerms.forEach((term) => {
    term.personalNote ||= "";
    const card = termTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.status = term.status;
    card.querySelector(".term-stage").textContent = term.stage;
    card.querySelector("h3").textContent = term.zh;
    card.querySelector(".term-en").textContent = term.en;
    card.querySelector(".speak-button").addEventListener("click", () => openDictionaryPronunciation(term.en));
    card.querySelector(".term-note").textContent = term.note || "还没有解释。Add your own explanation.";
    const personalNote = card.querySelector(".term-personal-note textarea");
    personalNote.value = term.personalNote;
    personalNote.addEventListener("input", () => {
      term.personalNote = personalNote.value;
      saveTerms();
    });
    card.querySelector(".term-delete").addEventListener("click", () => {
      terms = terms.filter((item) => item.id !== term.id);
      saveTerms();
      renderTerms();
    });
    card.querySelectorAll(".status-button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.status === term.status);
      button.addEventListener("click", () => {
        term.status = button.dataset.status;
        saveTerms();
        renderTerms();
      });
    });
    termGrid.append(card);
  });
  renderStats();
}

function openDictionaryPronunciation(text) {
  window.open(`https://dictionary.cambridge.org/dictionary/english/${dictionarySlug(text)}`, "_blank", "noreferrer");
}

function dictionarySlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

document.querySelector("#termForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const zh = document.querySelector("#termZh").value.trim();
  const en = document.querySelector("#termEn").value.trim();
  if (!zh || !en) return;
  terms.unshift({
    id: `custom-${Date.now()}`,
    zh,
    en,
    stage: document.querySelector("#termStage").value,
    note: document.querySelector("#termNote").value.trim(),
    personalNote: "",
    status: "review",
  });
  event.target.reset();
  saveTerms();
  renderTerms();
});

document.querySelector("#termSearch").addEventListener("input", (event) => {
  termSearch = event.target.value;
  renderTerms();
});

document.querySelector("#loadDefaults").addEventListener("click", () => {
  const existingIds = new Set(terms.map((term) => term.id));
  defaultTerms.forEach((term) => {
    if (!existingIds.has(term.id)) terms.push({ ...term });
  });
  saveTerms();
  renderAlphabetIndex();
  renderTerms();
});

renderTabs();
renderAlphabetIndex();
renderTerms();
