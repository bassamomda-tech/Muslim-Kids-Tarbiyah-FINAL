/* ============================================================
   CARPET DESIGNER — مصمم السجادة
   ============================================================ */

(function () {
  "use strict";

  const COLORS = [
    "#E8DCC0", "#1F2540", "#FFFFFF",
    "#8B1A2A", "#C9A961", "#1F4068",
    "#5A3F94", "#2F7A52", "#C46A4A",
    "#E89BB8", "#88B7DC", "#D9A832",
  ];

  const SYMMETRIES = [
    { id: "none",    name: "بدون",      fn: (x, y, size) => [[x, y]] },
    { id: "mirror-h", name: "أُفُقيّ",   fn: (x, y, s) => [[x, y], [s-1-x, y]] },
    { id: "mirror-v", name: "رأسيّ",    fn: (x, y, s) => [[x, y], [x, s-1-y]] },
    { id: "mirror-4", name: "مزدوج",     fn: (x, y, s) => [[x, y], [s-1-x, y], [x, s-1-y], [s-1-x, s-1-y]] },
    { id: "rot-4",   name: "رُباعيّ",    fn: (x, y, s) => [[x, y], [s-1-y, x], [s-1-x, s-1-y], [y, s-1-x]] },
    { id: "rot-8",   name: "ثُمانيّ",    fn: (x, y, s) => [
      [x, y], [s-1-y, x], [s-1-x, s-1-y], [y, s-1-x],
      [s-1-x, y], [y, x], [x, s-1-y], [s-1-y, s-1-x]
    ]},
  ];

  const SIZES = [9, 13, 17, 21];

  const STORAGE_KEY = "mk_carpet_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { gallery: [] });

  let symId = "rot-8";
  let size = 17;
  let color = "#8B1A2A";
  let cells = []; // 2D array of color strings (empty string = default)

  function init() {
    cells = Array(size).fill(null).map(() => Array(size).fill(""));
  }

  /* ============ Render ============ */
  function renderPalette() {
    const root = document.getElementById("palette");
    root.innerHTML = "";
    COLORS.forEach(c => {
      const el = document.createElement("div");
      el.className = "cd-swatch" + (color === c ? " active" : "");
      el.style.background = c;
      el.addEventListener("click", () => {
        color = c;
        document.querySelectorAll(".cd-swatch").forEach(s => s.classList.remove("active"));
        el.classList.add("active");
        AudioBus.pop();
      });
      root.appendChild(el);
    });
  }

  function renderSymmetry() {
    const row = document.getElementById("symmetry-row");
    row.innerHTML = "";
    SYMMETRIES.forEach(s => {
      const b = document.createElement("button");
      b.className = "cd-sym-btn" + (symId === s.id ? " active" : "");
      b.textContent = s.name;
      b.addEventListener("click", () => { symId = s.id; renderSymmetry(); });
      row.appendChild(b);
    });
  }

  function renderSize() {
    const row = document.getElementById("size-row");
    row.innerHTML = "";
    SIZES.forEach(n => {
      const b = document.createElement("button");
      b.className = "cd-sym-btn" + (size === n ? " active" : "");
      b.textContent = `${n}×${n}`;
      b.addEventListener("click", () => {
        if (confirm("تَغيير الحَجم سَيَمحو التَّصميم. متابعة؟")) {
          size = n;
          init();
          renderGrid();
          renderSize();
          renderTassels();
        } else {
          // keep current
        }
      });
      row.appendChild(b);
    });
  }

  function renderTassels() {
    const top = document.getElementById("tassels-top");
    const bot = document.getElementById("tassels-bot");
    top.innerHTML = bot.innerHTML = "";
    for (let i = 0; i < Math.min(size, 30); i++) {
      const s1 = document.createElement("span");
      const s2 = document.createElement("span");
      top.appendChild(s1); bot.appendChild(s2);
    }
  }

  function renderGrid() {
    const grid = document.getElementById("grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.innerHTML = "";
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const cell = document.createElement("div");
        cell.className = "cd-cell";
        const c = cells[y][x];
        cell.style.background = c || "#E8DCC0";
        cell.dataset.x = x; cell.dataset.y = y;
        cell.addEventListener("pointerdown", e => paint(x, y));
        cell.addEventListener("pointerenter", e => {
          if (e.buttons === 1) paint(x, y);
        });
        grid.appendChild(cell);
      }
    }
    updateHUD();
  }

  function paint(x, y) {
    const sym = SYMMETRIES.find(s => s.id === symId);
    const pts = sym.fn(x, y, size);
    pts.forEach(([px, py]) => {
      if (px >= 0 && py >= 0 && px < size && py < size) {
        cells[py][px] = color;
        const cell = document.querySelector(`.cd-cell[data-x="${px}"][data-y="${py}"]`);
        if (cell) cell.style.background = color;
      }
    });
    updateHUD();
  }

  function updateHUD() {
    let filled = 0;
    const colors = new Set();
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (cells[y][x]) { filled++; colors.add(cells[y][x]); }
      }
    }
    document.getElementById("c-filled").textContent = filled;
    document.getElementById("c-colors").textContent = colors.size;
    document.getElementById("c-saved").textContent = STORE.gallery.length;
    document.getElementById("best").textContent = STORE.gallery.length;
    document.getElementById("gallery-pill").textContent = STORE.gallery.length;
  }

  function clearAll() {
    init();
    renderGrid();
    AudioBus.tick(440);
  }
  function randomize() {
    init();
    const palette = COLORS.slice(3, 9); // rich colors
    // generate by stamping random patterns
    const stamps = 12 + Math.floor(Math.random() * 8);
    for (let i = 0; i < stamps; i++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      const c = palette[Math.floor(Math.random() * palette.length)];
      const sym = SYMMETRIES.find(s => s.id === "rot-8");
      sym.fn(x, y, size).forEach(([px, py]) => {
        if (px >= 0 && py >= 0 && px < size && py < size) cells[py][px] = c;
      });
    }
    renderGrid();
    AudioBus.tick(620);
    Particles.fire(40, { colors: ["#E0D5F2","#C9A961","#FFE9A8"] });
  }

  function saveDesign() {
    if (!cells.some(row => row.some(c => c))) return;
    STORE.gallery.unshift({
      ts: Date.now(),
      size,
      cells: cells.map(r => r.slice()),
    });
    if (STORE.gallery.length > 9) STORE.gallery = STORE.gallery.slice(0, 9);
    Storage.set(STORAGE_KEY, STORE);
    AudioBus.success();
    Particles.fire(80, { colors: ["#C9A961","#8B1A2A","#FFE9A8"] });
    renderGallery();
    updateHUD();
  }

  function renderGallery() {
    const root = document.getElementById("gallery");
    root.innerHTML = "";
    if (!STORE.gallery.length) {
      root.innerHTML = '<div style="grid-column: 1/-1; padding: 14px; text-align:center; color: var(--muted); font-size:13px;">لا توجد سجادات بَعد — اِبدأ بالتَّصميم!</div>';
      return;
    }
    STORE.gallery.forEach((item, i) => {
      const cell = document.createElement("div");
      cell.className = "cd-gallery-item";
      const mini = document.createElement("div");
      mini.className = "mini";
      mini.style.gridTemplateColumns = `repeat(${item.size}, 1fr)`;
      mini.style.gridTemplateRows = `repeat(${item.size}, 1fr)`;
      item.cells.forEach(row => {
        row.forEach(c => {
          const d = document.createElement("div");
          d.style.background = c || "#E8DCC0";
          mini.appendChild(d);
        });
      });
      cell.appendChild(mini);
      cell.addEventListener("click", () => loadDesign(i));
      root.appendChild(cell);
    });
  }

  function loadDesign(i) {
    const item = STORE.gallery[i];
    if (!item) return;
    size = item.size;
    cells = item.cells.map(r => r.slice());
    renderSize();
    renderTassels();
    renderGrid();
    AudioBus.pop();
  }

  /* ============ Bind ============ */
  document.getElementById("btn-clear").addEventListener("click", clearAll);
  document.getElementById("btn-random").addEventListener("click", randomize);
  document.getElementById("btn-save").addEventListener("click", saveDesign);
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات والمَعرض؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Init ============ */
  init();
  renderPalette();
  renderSymmetry();
  renderSize();
  renderTassels();
  renderGrid();
  renderGallery();
})();
