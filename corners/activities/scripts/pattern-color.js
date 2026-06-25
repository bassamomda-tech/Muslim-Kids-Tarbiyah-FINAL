/* ============================================================
   PATTERN COLORING — تلوين الزخارف الإسلامية
   زخرفتان مُولَّدتان رِياضياً، قابلتان للتَّلوين بالنقر.
   ============================================================ */

(function () {
  "use strict";

  /* ============ Helpers ============ */
  function rot(cx, cy, x, y, deg) {
    const r = deg * Math.PI / 180;
    return [cx + x * Math.cos(r) - y * Math.sin(r),
            cy + x * Math.sin(r) + y * Math.cos(r)];
  }
  // create a "petal" (lozenge with curved sides) from (r1, 0) to (r2, 0)
  function petal(cx, cy, r1, r2, w, deg) {
    const [x1,y1] = rot(cx, cy, r1, 0, deg);
    const [x2,y2] = rot(cx, cy, (r1+r2)/2, -w, deg);
    const [x3,y3] = rot(cx, cy, r2, 0, deg);
    const [x4,y4] = rot(cx, cy, (r1+r2)/2, w, deg);
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${x2.toFixed(1)} ${y2.toFixed(1)} ${x3.toFixed(1)} ${y3.toFixed(1)} Q${x4.toFixed(1)} ${y4.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)} Z`;
  }
  // diamond (straight sides) from r1 to r2
  function diamond(cx, cy, r1, r2, w, deg) {
    const [x1,y1] = rot(cx, cy, r1, 0, deg);
    const [x2,y2] = rot(cx, cy, (r1+r2)/2, -w, deg);
    const [x3,y3] = rot(cx, cy, r2, 0, deg);
    const [x4,y4] = rot(cx, cy, (r1+r2)/2, w, deg);
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} L${x4.toFixed(1)} ${y4.toFixed(1)} Z`;
  }
  // regular polygon
  function polygon(cx, cy, n, r, startDeg = -90) {
    const pts = [];
    for (let i = 0; i < n; i++) {
      const a = (startDeg + i * 360 / n) * Math.PI / 180;
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    return "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L") + " Z";
  }
  // triangle from center going from r1 to r2, with span (angle width)
  function triangle(cx, cy, r1, r2, spanDeg, deg) {
    const half = spanDeg / 2;
    const [x1,y1] = rot(cx, cy, r1, 0, deg - half);
    const [x2,y2] = rot(cx, cy, r1, 0, deg + half);
    const [x3,y3] = rot(cx, cy, r2, 0, deg);
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
  }

  /* ============ Presets ============ */
  function buildRosette() {
    const cx = 200, cy = 200;
    const regions = [];
    // background ring
    regions.push({ d: `M200 200 m -200 0 a 200 200 0 1 0 400 0 a 200 200 0 1 0 -400 0 M200 200 m -185 0 a 185 185 0 1 1 370 0 a 185 185 0 1 1 -370 0`, fillRule: "evenodd", layer: "frame" });
    // outer frame circle (the "background inside circle")
    regions.push({ d: `M200 200 m -185 0 a 185 185 0 1 0 370 0 a 185 185 0 1 0 -370 0 M200 200 m -160 0 a 160 160 0 1 1 320 0 a 160 160 0 1 1 -320 0`, fillRule: "evenodd", layer: "ring" });
    // 8 outer triangles between ring and 8-star (at 22.5° offset positions)
    for (let i = 0; i < 8; i++) {
      regions.push({ d: triangle(cx, cy, 80, 160, 30, i*45 + 22.5), layer: "outer-tri" });
    }
    // 8 outer diamonds
    for (let i = 0; i < 8; i++) {
      regions.push({ d: diamond(cx, cy, 80, 160, 24, i*45), layer: "outer-diamond" });
    }
    // 8 inner petals between r=25 and r=80
    for (let i = 0; i < 8; i++) {
      regions.push({ d: petal(cx, cy, 25, 80, 18, i*45 + 22.5), layer: "inner-petal" });
    }
    // 8 small triangles between inner petals
    for (let i = 0; i < 8; i++) {
      regions.push({ d: triangle(cx, cy, 25, 80, 22, i*45), layer: "inner-tri" });
    }
    // center polygon
    regions.push({ d: polygon(cx, cy, 8, 25), layer: "center" });
    return regions;
  }

  function buildSixStar() {
    const cx = 200, cy = 200;
    const regions = [];
    // outer hexagon frame (border)
    regions.push({ d: polygon(cx, cy, 6, 192) + " " + polygon(cx, cy, 6, 175).replace(/M/g, "M"), fillRule: "evenodd", layer: "frame" });
    // ring between r=175 and r=140
    regions.push({ d: polygon(cx, cy, 12, 175) + " " + polygon(cx, cy, 12, 140), fillRule: "evenodd", layer: "ring" });
    // 6 outer diamonds (star points) from r=80 to r=140
    for (let i = 0; i < 6; i++) {
      regions.push({ d: diamond(cx, cy, 80, 140, 32, i*60 - 90), layer: "star-point" });
    }
    // 6 triangles between star points (from r=80 to r=140 offset 30°)
    for (let i = 0; i < 6; i++) {
      regions.push({ d: triangle(cx, cy, 80, 140, 30, i*60 - 60), layer: "between-points" });
    }
    // 6 inner petals from r=25 to r=80
    for (let i = 0; i < 6; i++) {
      regions.push({ d: petal(cx, cy, 25, 80, 18, i*60 - 90), layer: "inner-petal" });
    }
    // 6 small wedges between inner petals
    for (let i = 0; i < 6; i++) {
      regions.push({ d: triangle(cx, cy, 25, 80, 28, i*60 - 60), layer: "inner-wedge" });
    }
    // center hexagon
    regions.push({ d: polygon(cx, cy, 6, 25, -90), layer: "center" });
    return regions;
  }

  function buildKhatim() {
    const cx = 200, cy = 200;
    const regions = [];
    // outer circle frame
    regions.push({ d: `M200 200 m -195 0 a 195 195 0 1 0 390 0 a 195 195 0 1 0 -390 0 M200 200 m -170 0 a 170 170 0 1 1 340 0 a 170 170 0 1 1 -340 0`, fillRule: "evenodd", layer: "frame" });
    // 8 large diamonds emanating outward from center to r=170
    for (let i = 0; i < 8; i++) {
      regions.push({ d: diamond(cx, cy, 30, 170, 38, i*45), layer: "ray" });
    }
    // 8 triangles between rays (smaller)
    for (let i = 0; i < 8; i++) {
      regions.push({ d: triangle(cx, cy, 30, 130, 25, i*45 + 22.5), layer: "between-ray" });
    }
    // 8 small petals at outer ring
    for (let i = 0; i < 8; i++) {
      regions.push({ d: petal(cx, cy, 130, 168, 13, i*45 + 22.5), layer: "outer-petal" });
    }
    // center
    regions.push({ d: polygon(cx, cy, 16, 30), layer: "center" });
    return regions;
  }

  const PRESETS = [
    { id: "rosette",  name: "وَردة ثُمانيَّة",   build: buildRosette,  miniSvg: '<circle cx="16" cy="16" r="14"/><circle cx="16" cy="16" r="9"/><path d="M16 2 L18 16 L16 30 L14 16 Z"/><path d="M2 16 L16 14 L30 16 L16 18 Z"/><path d="M6 6 L18 14 L26 26 L14 18 Z"/><path d="M26 6 L18 18 L6 26 L14 14 Z"/>' },
    { id: "sixstar",  name: "نَجمة سُداسيَّة",   build: buildSixStar,  miniSvg: '<polygon points="16,2 28,9 28,23 16,30 4,23 4,9"/><polygon points="16,8 16,24 22,12"/><polygon points="16,8 16,24 10,12"/><polygon points="22,12 10,20 4,16"/><polygon points="10,12 22,20 28,16"/>' },
    { id: "khatim",   name: "خاتم سُلَيمان",     build: buildKhatim,   miniSvg: '<circle cx="16" cy="16" r="14"/><path d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z"/><path d="M6 6 L17 15 L26 6 M6 26 L17 17 L26 26"/>' },
  ];

  /* ============ Palette ============ */
  const COLORS = [
    "#FFFFFF","#FFD9C2","#FFE9A8","#CDEBD7","#CFE3F2","#E0D5F2",
    "#E8A5A5","#FFC4D6","#B5612A","#2F7A52","#2E5F8A","#5A3F94",
    "#C9A961","#1F2540","#6A8E7F",
  ];

  const STORAGE_KEY = "mk_pattern_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { gallery: [] });

  let presetId = "rosette";
  let currentColor = "#FFD9C2";
  let regions = [];
  let regionEls = [];

  /* ============ Render ============ */
  function renderPalette() {
    const root = document.getElementById("palette");
    root.innerHTML = "";
    // eraser
    const eraser = document.createElement("div");
    eraser.className = "pc-swatch eraser" + (currentColor === "#FFFFFF" ? " active" : "");
    eraser.title = "مَحو";
    eraser.addEventListener("click", () => selectColor("#FFFFFF", eraser));
    root.appendChild(eraser);
    // colors
    COLORS.slice(1).forEach(c => {
      const el = document.createElement("div");
      el.className = "pc-swatch" + (currentColor === c ? " active" : "");
      el.style.background = c;
      el.title = c;
      el.addEventListener("click", () => selectColor(c, el));
      root.appendChild(el);
    });
  }
  function selectColor(c, el) {
    currentColor = c;
    document.querySelectorAll(".pc-swatch").forEach(s => s.classList.remove("active"));
    el.classList.add("active");
    AudioBus.pop();
  }

  function renderPresets() {
    const root = document.getElementById("presets");
    root.innerHTML = "";
    PRESETS.forEach(p => {
      const el = document.createElement("div");
      el.className = "pc-preset" + (presetId === p.id ? " active" : "");
      el.innerHTML = `
        <svg viewBox="0 0 32 32">${p.miniSvg}</svg>
        <span>${p.name}</span>
      `;
      el.addEventListener("click", () => { presetId = p.id; loadPreset(); renderPresets(); });
      root.appendChild(el);
    });
  }

  function loadPreset() {
    const preset = PRESETS.find(p => p.id === presetId);
    regions = preset.build();
    const svg = document.getElementById("pattern-svg");
    svg.innerHTML = "";
    regionEls = regions.map((r, i) => {
      const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
      el.setAttribute("d", r.d);
      if (r.fillRule) el.setAttribute("fill-rule", r.fillRule);
      el.setAttribute("class", "pc-paintable");
      el.dataset.idx = i;
      el.addEventListener("click", () => {
        el.setAttribute("fill", currentColor);
        AudioBus.pop();
        updateCounts();
      });
      svg.appendChild(el);
      return el;
    });
    updateCounts();
  }

  function updateCounts() {
    const filled = regionEls.filter(e => {
      const f = e.getAttribute("fill");
      return f && f !== "#FFFFFF" && f.toLowerCase() !== "#ffffff";
    }).length;
    document.getElementById("p-filled").textContent = filled;
    document.getElementById("p-remaining").textContent = regionEls.length - filled;
    document.getElementById("p-saved").textContent = STORE.gallery.length;
    document.getElementById("best").textContent = STORE.gallery.length;
  }

  function clearAll() {
    regionEls.forEach(e => e.setAttribute("fill", "#FFFFFF"));
    AudioBus.tick(440);
    updateCounts();
  }

  function autoFill() {
    regionEls.forEach(e => {
      const c = COLORS[1 + Math.floor(Math.random() * (COLORS.length - 1))];
      e.setAttribute("fill", c);
    });
    Particles.fire(40, { colors: ["#E0D5F2","#CFE3F2","#CDEBD7"] });
    AudioBus.tick(620);
    updateCounts();
  }

  function saveDesign() {
    const svg = document.getElementById("pattern-svg").outerHTML;
    STORE.gallery.unshift({ id: Date.now(), preset: presetId, svg, ts: new Date().toISOString() });
    if (STORE.gallery.length > 9) STORE.gallery = STORE.gallery.slice(0, 9);
    Storage.set(STORAGE_KEY, STORE);
    AudioBus.success();
    Particles.fire(80, { colors: ["#FFE9A8","#E0D5F2"] });
    renderGallery();
    updateCounts();
  }

  function renderGallery() {
    const root = document.getElementById("gallery");
    root.innerHTML = "";
    STORE.gallery.forEach((item, i) => {
      const cell = document.createElement("div");
      cell.style.cssText = "aspect-ratio: 1; background: var(--bg-soft); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; cursor: pointer; position: relative;";
      cell.title = "انقُر لاستعادة هذه اللَّوحة";
      cell.innerHTML = item.svg;
      const svgEl = cell.querySelector("svg");
      if (svgEl) { svgEl.style.width = "100%"; svgEl.style.height = "100%"; svgEl.style.pointerEvents = "none"; }
      cell.addEventListener("click", () => loadDesign(i));
      root.appendChild(cell);
    });
    document.getElementById("gallery-pill").textContent = STORE.gallery.length;
    if (STORE.gallery.length === 0) {
      root.innerHTML = '<div style="grid-column: 1/-1; padding: 18px; text-align: center; color: var(--muted); font-size: 13px;">لا توجد لَوحات بَعد — اِبدأ بالتَّلوين واحفَظ أوَّل تصميمٍ لك!</div>';
    }
  }

  function loadDesign(i) {
    const item = STORE.gallery[i];
    if (!item) return;
    presetId = item.preset;
    loadPreset();
    renderPresets();
    // parse stored svg and apply fills
    const temp = document.createElement("div");
    temp.innerHTML = item.svg;
    const paths = temp.querySelectorAll("path");
    paths.forEach((p, idx) => {
      const fill = p.getAttribute("fill");
      if (fill && regionEls[idx]) regionEls[idx].setAttribute("fill", fill);
    });
    updateCounts();
    AudioBus.pop();
  }

  /* ============ Bind ============ */
  document.getElementById("btn-clear").addEventListener("click", clearAll);
  document.getElementById("btn-fill").addEventListener("click", autoFill);
  document.getElementById("btn-save").addEventListener("click", saveDesign);
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات والمَعرض؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Init ============ */
  renderPalette();
  renderPresets();
  loadPreset();
  renderGallery();
})();
