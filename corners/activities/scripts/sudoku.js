/* ============================================================
   SUDOKU — سودوكو إسلامي 4×4
   املأ الشبكة بحيث يحوي كلُّ صفٍّ وعمودٍ ومربّعٍ (2×2) الرموزَ الأربعة
   مرّةً واحدة: 🕌 المسجد، 📖 المصحف، ⭐ النجمة، 🌙 الهلال.
   ============================================================ */

(function () {
  "use strict";

  const SYMS = ["🕌", "📖", "⭐", "🌙"];
  const NAMES = ["المسجد", "المصحف", "النجمة", "الهلال"];
  const BASE = [
    [0, 1, 2, 3],
    [2, 3, 0, 1],
    [1, 0, 3, 2],
    [3, 2, 1, 0],
  ];

  const STORAGE_KEY = "mk_sudoku_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: null, plays: 0 });

  let solution = [];        // 4×4 من المؤشرات 0..3
  let grid = [];            // الحالة الحالية (مؤشر أو null)
  let givens = [];          // bool
  let selected = null;      // {r,c}
  let activeSym = null;     // مؤشر الرمز المختار من اللوحة
  let mistakes = 0;
  let hintsUsed = 0;
  let reveal = 6;           // عدد الخانات المكشوفة (الصعوبة)
  let startTime = 0;

  /* ---------- توليد ---------- */
  function genSolution() {
    let g = BASE.map(r => r.slice());
    // إعادة تسمية الرموز
    const perm = shuffle([0, 1, 2, 3]);
    g = g.map(row => row.map(v => perm[v]));
    // تبديل صفّين داخل نفس النطاق
    if (Math.random() < 0.5) swapRows(g, 0, 1);
    if (Math.random() < 0.5) swapRows(g, 2, 3);
    // تبديل نطاقَي الصفوف
    if (Math.random() < 0.5) { swapRows(g, 0, 2); swapRows(g, 1, 3); }
    // أعمدة
    if (Math.random() < 0.5) swapCols(g, 0, 1);
    if (Math.random() < 0.5) swapCols(g, 2, 3);
    if (Math.random() < 0.5) { swapCols(g, 0, 2); swapCols(g, 1, 3); }
    // تبديل محوري
    if (Math.random() < 0.5) g = transpose(g);
    return g;
  }
  function swapRows(g, a, b) { const t = g[a]; g[a] = g[b]; g[b] = t; }
  function swapCols(g, a, b) { g.forEach(r => { const t = r[a]; r[a] = r[b]; r[b] = t; }); }
  function transpose(g) { return g[0].map((_, c) => g.map(r => r[c])); }

  /* ---------- بناء لغز ---------- */
  function newGame() {
    solution = genSolution();
    grid = solution.map(r => r.map(() => null));
    givens = solution.map(r => r.map(() => false));

    // اكشِف خاناتٍ عشوائية
    const cells = [];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) cells.push([r, c]);
    shuffle(cells);
    for (let i = 0; i < reveal; i++) {
      const [r, c] = cells[i];
      grid[r][c] = solution[r][c]; givens[r][c] = true;
    }
    selected = null; activeSym = null; mistakes = 0; hintsUsed = 0;
    startTime = Date.now();
    render(); renderPalette(); updateHUD();
  }

  /* ---------- render ---------- */
  function render() {
    const root = document.getElementById("sd-grid");
    root.innerHTML = "";
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const cell = document.createElement("div");
        cell.className = "sd-cell" + (givens[r][c] ? " given" : "");
        cell.dataset.r = r; cell.dataset.c = c;
        if (selected && selected.r === r && selected.c === c) cell.classList.add("sel");
        const v = grid[r][c];
        cell.innerHTML = v != null ? `<span class="sym">${SYMS[v]}</span>` : "";
        if (!givens[r][c]) cell.addEventListener("click", () => onCell(r, c));
        else cell.addEventListener("click", () => { AudioBus.tick(440); });
        root.appendChild(cell);
      }
    }
    markConflicts();
  }

  function renderPalette() {
    document.querySelectorAll(".sd-sbtn[data-s]").forEach(btn => {
      const s = +btn.dataset.s;
      const count = countSym(s);
      const cnt = btn.querySelector(".cnt");
      if (cnt) cnt.textContent = count;
      btn.classList.toggle("full", count >= 4);
      btn.classList.toggle("active", activeSym === s);
    });
    const er = document.getElementById("sd-erase");
    if (er) er.classList.toggle("active", activeSym === -1);
  }
  function countSym(s) {
    let n = 0;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) if (grid[r][c] === s) n++;
    return n;
  }

  /* ---------- interaction ---------- */
  function onCell(r, c) {
    selected = { r, c };
    if (activeSym != null) {
      applySym(r, c, activeSym);
    }
    render();
  }

  function pickSym(s) {
    activeSym = (activeSym === s) ? null : s;
    if (selected && activeSym != null && !givens[selected.r][selected.c]) {
      applySym(selected.r, selected.c, activeSym);
    }
    render(); renderPalette();
  }

  function applySym(r, c, s) {
    if (givens[r][c]) return;
    if (s === -1) { grid[r][c] = null; AudioBus.tick(440); afterMove(); return; }
    grid[r][c] = s;
    AudioBus.pop();
    const cell = document.querySelector(`.sd-cell[data-r="${r}"][data-c="${c}"]`);
    if (cell) { cell.classList.add("pop"); }
    afterMove(r, c, s);
  }

  function afterMove(r, c, s) {
    renderPalette();
    // خطأ منطقي؟
    if (r != null && hasConflictAt(r, c)) { mistakes++; AudioBus.fail(); }
    updateHUD();
    setTimeout(() => { markConflicts(); checkWin(); }, 60);
  }

  /* ---------- conflicts ---------- */
  function hasConflictAt(r, c) {
    const v = grid[r][c]; if (v == null) return false;
    for (let i = 0; i < 4; i++) {
      if (i !== c && grid[r][i] === v) return true;
      if (i !== r && grid[i][c] === v) return true;
    }
    const br = Math.floor(r / 2) * 2, bc = Math.floor(c / 2) * 2;
    for (let i = br; i < br + 2; i++) for (let j = bc; j < bc + 2; j++)
      if ((i !== r || j !== c) && grid[i][j] === v) return true;
    return false;
  }
  function markConflicts() {
    document.querySelectorAll(".sd-cell").forEach(cell => {
      const r = +cell.dataset.r, c = +cell.dataset.c;
      cell.classList.toggle("conflict", grid[r][c] != null && hasConflictAt(r, c));
    });
  }

  /* ---------- hint ---------- */
  function hint() {
    const empties = [];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++)
      if (!givens[r][c] && grid[r][c] !== solution[r][c]) empties.push([r, c]);
    if (!empties.length) return;
    const [r, c] = empties[Math.floor(Math.random() * empties.length)];
    grid[r][c] = solution[r][c];
    givens[r][c] = true;
    hintsUsed++;
    AudioBus.tick(560);
    render(); renderPalette(); updateHUD();
    setTimeout(checkWin, 80);
  }

  /* ---------- win ---------- */
  function isComplete() {
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++)
      if (grid[r][c] !== solution[r][c]) return false;
    return true;
  }
  function checkWin() {
    if (!isComplete()) return;
    const secs = Math.round((Date.now() - startTime) / 1000);
    STORE.plays++;
    if (STORE.best == null || secs < STORE.best) STORE.best = secs;
    Storage.set(STORAGE_KEY, STORE);
    updateHUD();
    AudioBus.success();
    Particles.fire(170);
    const stars = (mistakes === 0 && hintsUsed === 0) ? 3 : ((mistakes + hintsUsed) <= 3 ? 2 : 1);
    document.getElementById("win-summary").innerHTML = `
      <div>حلَلتَ اللغزَ في <strong>${Fmt.time(secs)}</strong> بـ
      <strong>${mistakes}</strong> أخطاء و<strong>${hintsUsed}</strong> تلميحات.</div>
      <div style="margin-top:var(--s-3); font-size:22px; letter-spacing:4px;">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px;">
        المنطقُ نعمةٌ من الله؛ بالتفكيرِ المرتَّب تُحَلُّ المسائل. ﴿أَفَلَا تَعْقِلُونَ﴾.
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 450);
  }

  /* ---------- HUD ---------- */
  function updateHUD() {
    let filled = 0;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) if (grid[r][c] != null) filled++;
    document.getElementById("s-filled").textContent = filled + "/16";
    document.getElementById("s-mistakes").textContent = mistakes;
    document.getElementById("best").textContent = STORE.best != null ? Fmt.time(STORE.best) : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  /* ---------- bind ---------- */
  document.querySelectorAll(".sd-sbtn[data-s]").forEach(btn => {
    btn.addEventListener("click", () => pickSym(+btn.dataset.s));
  });
  document.getElementById("sd-erase").addEventListener("click", () => pickSym(-1));
  document.getElementById("sd-hint").addEventListener("click", hint);
  document.getElementById("sd-new").addEventListener("click", newGame);

  document.querySelectorAll(".sd-diff button").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".sd-diff button").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      reveal = +b.dataset.reveal;
      newGame();
    });
  });

  document.getElementById("win-replay").addEventListener("click", () => { Modal.close("win-modal"); setTimeout(newGame, 300); });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  newGame();
})();
