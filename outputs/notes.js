const dbName = "bio-study-notes-db";
const storeName = "notes";
let db;
let notes = [];
let activeNoteStage = "全部";
let noteSearch = "";

const noteGrid = document.querySelector("#noteGrid");
const noteTemplate = document.querySelector("#noteTemplate");
const noteTabs = document.querySelector("#noteTabs");

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName, { keyPath: "id" });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function getAllNotes() {
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName).objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function saveNote(note) {
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, "readwrite").objectStore(storeName).put(note);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function deleteNote(id) {
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, "readwrite").objectStore(storeName).delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function stages() {
  return ["全部", "第一阶段", "第二阶段", "第三阶段", "第四阶段", "第五阶段"];
}

function populateMonths() {
  const select = document.querySelector("#noteMonth");
  select.innerHTML = Array.from({ length: 24 }, (_, index) => `<option value="月${index + 1}">月${index + 1}</option>`).join("");
}

function renderTabs() {
  noteTabs.innerHTML = "";
  stages().forEach((stage) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = stage;
    button.className = stage === activeNoteStage ? "is-active" : "";
    button.addEventListener("click", () => {
      activeNoteStage = stage;
      renderTabs();
      renderNotes();
    });
    noteTabs.append(button);
  });
}

function renderStats() {
  document.querySelector("#noteCount").textContent = notes.length;
  document.querySelector("#pdfCount").textContent = notes.filter((note) => note.type === "application/pdf").length;
  document.querySelector("#imageCount").textContent = notes.filter((note) => note.type.startsWith("image/")).length;
}

function renderNotes() {
  const term = noteSearch.trim().toLowerCase();
  const visible = notes
    .filter((note) => activeNoteStage === "全部" || note.stage === activeNoteStage)
    .filter((note) => {
      const haystack = [note.title, note.stage, note.month, note.tags, note.comment, note.name].join(" ").toLowerCase();
      return !term || haystack.includes(term);
    })
    .sort((a, b) => b.createdAt - a.createdAt);

  noteGrid.innerHTML = "";
  if (visible.length === 0) {
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = "<h3>还没有匹配的笔记</h3><p>从 GoodNotes 导出 PDF 或图片，然后在左侧上传。</p>";
    noteGrid.append(empty);
    renderStats();
    return;
  }

  visible.forEach((note) => {
    const card = noteTemplate.content.firstElementChild.cloneNode(true);
    const url = URL.createObjectURL(note.file);
    card.querySelector(".note-stage").textContent = `${note.stage} · ${note.month}`;
    card.querySelector("h3").textContent = note.title || note.name;
    card.querySelector(".note-meta").textContent = `${note.name} · ${formatSize(note.size)} · ${new Date(note.createdAt).toLocaleDateString()}`;
    card.querySelector(".note-comment").textContent = note.comment || "还没有备注。Add a short review note next time.";
    card.querySelector(".note-open").href = url;
    card.querySelector(".note-delete").addEventListener("click", async () => {
      URL.revokeObjectURL(url);
      await deleteNote(note.id);
      notes = await getAllNotes();
      renderNotes();
    });

    const preview = card.querySelector(".note-preview");
    if (note.type.startsWith("image/")) {
      const image = document.createElement("img");
      image.src = url;
      image.alt = note.title || note.name;
      preview.append(image);
    } else {
      preview.innerHTML = "<span>PDF</span>";
    }

    const tags = card.querySelector(".note-tags");
    note.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
      .forEach((tag) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = tag;
        tags.append(chip);
      });

    noteGrid.append(card);
  });
  renderStats();
}

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

document.querySelector("#noteForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = document.querySelector("#noteFile").files[0];
  if (!file) return;
  const note = {
    id: `note-${Date.now()}`,
    name: file.name,
    title: document.querySelector("#noteTitle").value.trim(),
    stage: document.querySelector("#noteStage").value,
    month: document.querySelector("#noteMonth").value,
    tags: document.querySelector("#noteTags").value.trim(),
    comment: document.querySelector("#noteComment").value.trim(),
    type: file.type || "application/octet-stream",
    size: file.size,
    createdAt: Date.now(),
    file,
  };
  await saveNote(note);
  event.target.reset();
  populateMonths();
  notes = await getAllNotes();
  renderNotes();
});

document.querySelector("#noteSearch").addEventListener("input", (event) => {
  noteSearch = event.target.value;
  renderNotes();
});

async function init() {
  populateMonths();
  renderTabs();
  db = await openDb();
  notes = await getAllNotes();
  renderNotes();
}

init().catch((error) => {
  noteGrid.innerHTML = `<article class="empty-state"><h3>无法打开本地笔记库</h3><p>${error.message}</p></article>`;
});
