/* ============================================================
   AYAH COLOR — تلوين الآيات
   لكل لوحة: آية + مرجعها + بنية زخرفية (شبكة خلايا SVG).
   ============================================================ */

(function () {
  "use strict";

  /* ====== الباليتة (هادئة، باستيلية) ====== */
  const PALETTE = [
    { c: "#FFD9C2", name: "خَوخي" },
    { c: "#FFE9A8", name: "زُبدي" },
    { c: "#CDEBD7", name: "نَعنَع" },
    { c: "#CFE3F2", name: "سَماوي" },
    { c: "#E0D5F2", name: "لافَندَر" },
    { c: "#E8A5A5", name: "وَردي" },
    { c: "#C9A961", name: "ذَهَبي" },
    { c: "#6A8E7F", name: "زَيتوني" },
    { c: "#1F2540", name: "كُحلي" },
  ];

  /* ====== اللوحات ====== */
  const AYAHS = [
    {
      text: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
      src: "سورة طه · 114",
      style: "stars",   // تَصميمُ النُّجوم الثَّمانية
    },
    {
      text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      src: "سورة الشرح · 6",
      style: "hex",     // تَصميمُ السُّداسيَّات
    },
    {
      text: "وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
      src: "سورة آل عمران · 134",
      style: "petals",  // تَصميمُ البَتلات
    },
    {
      text: "فَاذْكُرُونِي أَذْكُرْكُمْ",
      src: "سورة البقرة · 152",
      style: "diamond", // تَصميمُ المُعَيَّنات
    },
  ];

  const STORAGE_KEY = "mk_ayahcolor_v1";
  const STORE = Storage.get(STORAGE_KEY, { paintings: [], done: 0 });

  let idx = 0;
  let selectedColor = PALETTE[2].c;
  let selectedName = PALETTE[2].name;
  let cells = [];          // [{el, fill}]
  let history = [];        // [{i, prev, next}]

  /* ====== توليد البنى الزخرفية ====== */
  function buildPattern(style) {
    const svg = document.getElementById("canvas");
    svg.innerHTML = "";
    cells = [];

    if (style === "stars") starsGrid(svg);
    else if (style === "hex") hexGrid(svg);
    else if (style === "petals") petalsGrid(svg);
    else if (style === "diamond") diamondGrid(svg);

    cells.forEach((c, i) => {
      c.el.classList.add("ac-cell");
      c.el.addEventListener("click", () => paint(i));
    });
    updateHUD();
  }

  function addCell(el) {
    cells.push({ el, fill: "#FFFBF3" });
    document.getElementById("canvas").appendChild(el);
    return cells.length - 1;
  }

  // 1) نُجوم ثُمانيَّة + مُربَّعات بين
  function starsGrid(svg) {
    const cols = 10, rows = 4;
    const w = 600, h = 240;
    const sz = Math.min(w/cols, h/rows);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = c*sz + sz/2 + 0;
        const cy = r*sz + sz/2 + 0;
        const shape = (r+c) % 2 === 0 ? "star" : "diamond";
        let el;
        if (shape === "star") {
          el = document.createElementNS("http://www.w3.org/2000/svg","polygon");
          const pts = eightStar(cx, cy, sz*0.42);
          el.setAttribute("points", pts);
        } else {
          el = document.createElementNS("http://www.w3.org/2000/svg","polygon");
          el.setAttribute("points", diamond(cx, cy, sz*0.32));
        }
        addCell(el);
      }
    }
  }

  // 2) سُداسيَّات
  function hexGrid(svg) {
    const sz = 28;
    const horiz = sz * Math.sqrt(3);
    const vert  = sz * 1.5;
    const cols = 12, rows = 5;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = c*horiz + (r%2 ? horiz/2 : 0) - 10;
        const cy = r*vert + sz - 10;
        if (cx < -horiz || cx > 620) continue;
        const el = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        el.setAttribute("points", hexagon(cx, cy, sz*0.85));
        addCell(el);
      }
    }
  }

  // 3) بَتَلات (دوائر بصُفوف مُتداخِلة)
  function petalsGrid(svg) {
    const cols = 11, rows = 4;
    const sz = 600/cols;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = c*sz + sz/2 + (r%2 ? sz/2 : 0);
        const cy = r*sz + sz/2;
        if (cx > 600) continue;
        const el = document.createElementNS("http://www.w3.org/2000/svg","path");
        el.setAttribute("d", petal(cx, cy, sz*0.45));
        addCell(el);
      }
    }
  }

  // 4) مُعَيَّنات مَنسوجة
  function diamondGrid(svg) {
    const cols = 12, rows = 5;
    const w = 600/cols, h = 240/rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = c*w + w/2;
        const cy = r*h + h/2;
        const el = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        el.setAttribute("points", diamond(cx, cy, Math.min(w,h)*0.42));
        addCell(el);
      }
    }
  }

  /* ====== مساعدات الأشكال ====== */
  function eightStar(cx, cy, r) {
    const pts = [];
    for (let i = 0; i < 16; i++) {
      const a = (Math.PI/8) * i - Math.PI/2;
      const rr = i % 2 === 0 ? r : r*0.55;
      pts.push(`${(cx + Math.cos(a)*rr).toFixed(1)},${(cy + Math.sin(a)*rr).toFixed(1)}`);
    }
    return pts.join(" ");
  }
  function diamond(cx, cy, r) {
    return `${cx},${cy-r} ${cx+r},${cy} ${cx},${cy+r} ${cx-r},${cy}`;
  }
  function hexagon(cx, cy, r) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI/3) * i + Math.PI/6;
      pts.push(`${(cx + Math.cos(a)*r).toFixed(1)},${(cy + Math.sin(a)*r).toFixed(1)}`);
    }
    return pts.join(" ");
  }
  function petal(cx, cy, r) {
    return `M${cx} ${cy} m-${r} 0 a${r} ${r} 0 1 0 ${r*2} 0 a${r} ${r} 0 1 0 ${-r*2} 0`;
  }

  /* ====== التَّلوين ====== */
  function paint(i) {
    const cell = cells[i];
    const prev = cell.fill;
    if (prev === selectedColor) return;
    cell.fill = selectedColor;
    cell.el.setAttribute("fill", selectedColor);
    cell.el.classList.remove("just"); void cell.el.offsetWidth;
    cell.el.classList.add("just");
    history.push({ i, prev, next: selectedColor });
    if (history.length > 80) history.shift();
    AudioBus.tick(560 + (i%6)*40);
    updateHUD();
  }

  function undo() {
    const last = history.pop();
    if (!last) return;
    cells[last.i].fill = last.prev;
    cells[last.i].el.setAttribute("fill", last.prev);
    AudioBus.tick(440);
    updateHUD();
  }

  function clearAll() {
    cells.forEach(c => {
      if (c.fill !== "#FFFBF3") {
        c.fill = "#FFFBF3";
        c.el.setAttribute("fill", "#FFFBF3");
      }
    });
    history = [];
    AudioBus.fail();
    updateHUD();
  }

  /* ====== الباليتة ====== */
  function renderPalette() {
    const root = document.getElementById("palette");
    root.innerHTML = "";
    // ممحاة
    const eraser = document.createElement("button");
    eraser.className = "ac-swatch eraser";
    eraser.title = "ممحاة";
    eraser.addEventListener("click", () => selectColor("#FFFBF3", "ممحاة", eraser));
    root.appendChild(eraser);

    PALETTE.forEach(p => {
      const b = document.createElement("button");
      b.className = "ac-swatch";
      b.title = p.name;
      b.style.background = p.c;
      if (p.c === selectedColor) b.classList.add("active");
      b.addEventListener("click", () => selectColor(p.c, p.name, b));
      root.appendChild(b);
    });
  }
  function selectColor(c, name, el) {
    selectedColor = c; selectedName = name;
    document.querySelectorAll(".ac-swatch").forEach(s => s.classList.remove("active"));
    el.classList.add("active");
    AudioBus.pop();
    updateHUD();
  }

  /* ====== القائمة + المعرض + HUD ====== */
  function renderList() {
    const root = document.getElementById("ayah-list");
    root.innerHTML = "";
    AYAHS.forEach((a, i) => {
      const it = document.createElement("div");
      it.className = "item" + (i === idx ? " current" : "");
      it.innerHTML = `
        <span class="idx">${i+1}</span>
        <div style="flex:1;">
          <div class="name">${a.text}</div>
          <div class="src">${a.src}</div>
        </div>
        ${STORE.paintings.some(p => p.idx === i) ? '<span class="ck">✓</span>' : ''}
      `;
      it.addEventListener("click", () => { idx = i; loadAyah(); });
      root.appendChild(it);
    });
  }
  function renderGallery() {
    const root = document.getElementById("gallery");
    root.innerHTML = "";
    const recent = STORE.paintings.slice(-6).reverse();
    for (let i = 0; i < 6; i++) {
      const t = document.createElement("div");
      t.className = "tile";
      if (recent[i]) {
        t.innerHTML = recent[i].svg + `<span class="stamp">${recent[i].date}</span>`;
      } else {
        t.classList.add("empty");
        t.textContent = "—";
      }
      root.appendChild(t);
    }
  }

  function loadAyah() {
    const a = AYAHS[idx];
    document.getElementById("ayah-text").textContent = a.text;
    document.getElementById("ayah-source").textContent = a.src;
    document.getElementById("a-idx").textContent = idx + 1;
    history = [];
    buildPattern(a.style);
    renderList();
  }

  function updateHUD() {
    const filled = cells.filter(c => c.fill !== "#FFFBF3").length;
    document.getElementById("a-filled").textContent = filled;
    document.querySelector("#a-filled + small").textContent = "/" + cells.length;
    document.getElementById("a-done").textContent = STORE.done;
    document.getElementById("a-color").textContent = selectedName;
    document.getElementById("best").textContent =
      STORE.paintings.length > 0 ? `${STORE.paintings.length} لَوحة` : "—";
  }

  function savePainting() {
    const svg = document.getElementById("canvas");
    const filled = cells.filter(c => c.fill !== "#FFFBF3").length;
    if (filled < 4) {
      AudioBus.fail();
      alert("لَوِّن أكثر مِن أربعِ خلايا قَبل الحِفظ.");
      return;
    }
    const clone = svg.cloneNode(true);
    clone.removeAttribute("id");
    clone.querySelectorAll(".ac-cell").forEach(el => el.removeAttribute("class"));
    const xml = new XMLSerializer().serializeToString(clone);
    STORE.paintings.push({
      idx, svg: xml, date: new Date().toLocaleDateString("ar-EG", { day: "numeric", month: "short" }),
    });
    if (STORE.paintings.length > 24) STORE.paintings.shift();
    STORE.done++;
    Storage.set(STORAGE_KEY, STORE);

    AudioBus.success();
    Particles.fire(80, { colors: ["#E0D5F2","#FFD9C2","#CDEBD7","#FFE9A8"] });
    document.getElementById("save-summary").innerHTML = `
      <div>لَوحَتُك «<strong>${AYAHS[idx].text}</strong>» أُضيفَت إلى مَعرضِك بِـ<strong>${filled}</strong> خَليَّةً مُلَوَّنة.</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        مَجموع لَوحاتِكَ المَحفوظة: ${STORE.paintings.length}.
      </div>
    `;
    setTimeout(() => Modal.open("save-modal"), 500);
    renderGallery(); renderList(); updateHUD();
  }

  /* ====== Bind ====== */
  document.getElementById("btn-undo").addEventListener("click", undo);
  document.getElementById("btn-clear").addEventListener("click", () => {
    if (confirm("مَسحُ كلِّ الألوان؟")) clearAll();
  });
  document.getElementById("btn-save").addEventListener("click", savePainting);
  document.getElementById("save-next").addEventListener("click", () => {
    Modal.close("save-modal");
    idx = (idx + 1) % AYAHS.length;
    setTimeout(loadAyah, 250);
  });
  Modal.bindClose("save-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ====== Start ====== */
  renderPalette();
  renderGallery();
  loadAyah();
})();
