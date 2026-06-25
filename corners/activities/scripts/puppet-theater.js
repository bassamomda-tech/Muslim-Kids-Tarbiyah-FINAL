/* ============================================================
   PUPPET THEATER — مسرح العرائس
   ============================================================ */

(function () {
  "use strict";

  /* ============ Character art ============ */
  // viewBox 0 0 100 160 — head ~y=30, body to y=140
  function head(skin = "#F2C9A0") {
    return `
      <circle cx="50" cy="38" r="20" fill="${skin}"/>
      <!-- eyes -->
      <circle cx="43" cy="38" r="1.6" fill="#1F2540"/>
      <circle cx="57" cy="38" r="1.6" fill="#1F2540"/>
      <!-- smile -->
      <path d="M44 46 Q50 50 56 46" stroke="#1F2540" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    `;
  }
  function boyCap(capColor = "#FFFFFF") {
    return `
      <ellipse cx="50" cy="22" rx="20" ry="9" fill="${capColor}" stroke="#1F2540" stroke-width="1"/>
      <ellipse cx="50" cy="22" rx="18" ry="2" fill="none" stroke="#1F2540" stroke-width="0.8"/>
      <circle cx="50" cy="14" r="3" fill="${capColor}" stroke="#1F2540" stroke-width="1"/>
    `;
  }
  function thobe(color, accent = "#1F2540") {
    return `
      <path d="M30 60 L25 145 L45 148 L50 100 L55 148 L75 145 L70 60 Z" fill="${color}" stroke="${accent}" stroke-width="1"/>
      <!-- collar v -->
      <path d="M45 60 L50 70 L55 60" fill="none" stroke="${accent}" stroke-width="1"/>
      <!-- arms -->
      <path d="M30 62 L22 100 L26 105 L34 70" fill="${color}" stroke="${accent}" stroke-width="1"/>
      <path d="M70 62 L78 100 L74 105 L66 70" fill="${color}" stroke="${accent}" stroke-width="1"/>
    `;
  }
  function hijabFrame(color, faceX = 50) {
    return `
      <!-- hijab around head -->
      <path d="M${faceX-22} 35 Q${faceX-25} 18 ${faceX} 14 Q${faceX+25} 18 ${faceX+22} 35 L${faceX+24} 60 L${faceX-24} 60 Z" fill="${color}" stroke="#1F2540" stroke-width="1"/>
    `;
  }

  const CHARACTERS = [
    {
      id: "boy1", name: "صَبِيٌّ صَغير",
      svg: `<svg viewBox="0 0 100 160">
        ${thobe("#88B7DC")}
        ${head()}
        ${boyCap("#FFFFFF")}
      </svg>`
    },
    {
      id: "girl1", name: "فَتاةٌ بِحِجاب",
      svg: `<svg viewBox="0 0 100 160">
        <path d="M28 60 L23 145 L77 145 L72 60 Z" fill="#E89BB8" stroke="#1F2540" stroke-width="1"/>
        <path d="M28 62 L18 100 L23 105 L33 70" fill="#E89BB8" stroke="#1F2540" stroke-width="1"/>
        <path d="M72 62 L82 100 L77 105 L67 70" fill="#E89BB8" stroke="#1F2540" stroke-width="1"/>
        <!-- skirt flare -->
        <path d="M23 145 L18 155 L82 155 L77 145 Z" fill="#C7799A"/>
        ${head()}
        ${hijabFrame("#D4567A")}
      </svg>`
    },
    {
      id: "father", name: "الأب",
      svg: `<svg viewBox="0 0 100 160">
        ${thobe("#FFFFFF", "#6a4a20")}
        ${head("#E8B888")}
        <!-- beard -->
        <path d="M38 48 Q40 60 50 62 Q60 60 62 48 L60 52 Q55 56 50 56 Q45 56 40 52 Z" fill="#1F2540"/>
        <!-- mustache -->
        <path d="M42 46 Q46 47 50 46 Q54 47 58 46" stroke="#1F2540" stroke-width="2" fill="none" stroke-linecap="round"/>
        <!-- ghutra (head scarf) -->
        <path d="M28 30 Q28 14 50 12 Q72 14 72 30 L72 50 L70 50 Q60 38 50 38 Q40 38 30 50 L28 50 Z" fill="#E2D3A4" stroke="#1F2540" stroke-width="1"/>
        <!-- agal (black rope on head) -->
        <ellipse cx="50" cy="20" rx="22" ry="3" fill="#1F2540"/>
      </svg>`
    },
    {
      id: "mother", name: "الأمّ",
      svg: `<svg viewBox="0 0 100 160">
        <path d="M22 60 L18 150 L82 150 L78 60 Z" fill="#1F2540" stroke="#000" stroke-width="0.5"/>
        <path d="M22 62 L14 100 L20 106 L28 70" fill="#1F2540"/>
        <path d="M78 62 L86 100 L80 106 L72 70" fill="#1F2540"/>
        ${head("#E8B888")}
        ${hijabFrame("#1F2540")}
        <!-- decorative trim -->
        <path d="M40 78 L60 78" stroke="#C9A961" stroke-width="1.2"/>
        <circle cx="50" cy="92" r="2" fill="#C9A961"/>
      </svg>`
    },
    {
      id: "grandpa", name: "الجَدّ",
      svg: `<svg viewBox="0 0 100 160">
        ${thobe("#F0F0F0", "#6a4a20")}
        ${head("#D8A878")}
        <!-- white beard -->
        <path d="M34 48 Q36 68 50 72 Q64 68 66 48 L62 54 Q56 58 50 58 Q44 58 38 54 Z" fill="#FFFFFF" stroke="#1F2540" stroke-width="0.8"/>
        <!-- white turban (imama) -->
        <ellipse cx="50" cy="22" rx="22" ry="10" fill="#FFFFFF" stroke="#1F2540" stroke-width="1"/>
        <path d="M28 22 Q50 14 72 22 Q66 18 50 16 Q34 18 28 22" fill="#E8E8E8"/>
        <!-- cane -->
        <line x1="80" y1="80" x2="84" y2="150" stroke="#6a4a20" stroke-width="2" stroke-linecap="round"/>
        <path d="M84 80 Q88 75 84 70" stroke="#6a4a20" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: "scholar", name: "العالِم",
      svg: `<svg viewBox="0 0 100 160">
        ${thobe("#5a3F94", "#3a2a64")}
        ${head("#E8B888")}
        <!-- beard -->
        <path d="M38 48 Q40 60 50 62 Q60 60 62 48 L60 52 Q55 56 50 56 Q45 56 40 52 Z" fill="#3a2a14"/>
        <!-- turban -->
        <path d="M28 28 Q28 12 50 10 Q72 12 72 28 L72 38 Q60 32 50 32 Q40 32 28 38 Z" fill="#FFFFFF" stroke="#1F2540" stroke-width="1"/>
        <!-- book -->
        <rect x="35" y="105" width="30" height="20" fill="#C9A961" stroke="#1F2540" stroke-width="1"/>
        <line x1="50" y1="105" x2="50" y2="125" stroke="#1F2540" stroke-width="1"/>
        <line x1="40" y1="112" x2="46" y2="112" stroke="#1F2540" stroke-width="0.6"/>
        <line x1="54" y1="112" x2="60" y2="112" stroke="#1F2540" stroke-width="0.6"/>
        <line x1="40" y1="117" x2="46" y2="117" stroke="#1F2540" stroke-width="0.6"/>
        <line x1="54" y1="117" x2="60" y2="117" stroke="#1F2540" stroke-width="0.6"/>
      </svg>`
    },
    {
      id: "kid2", name: "صَبيٌّ بِبُرنُس",
      svg: `<svg viewBox="0 0 100 160">
        ${thobe("#CDEBD7", "#2F7A52")}
        ${head()}
        <!-- hooded -->
        <path d="M28 30 Q28 14 50 12 Q72 14 72 30 L72 50 Q60 40 50 40 Q40 40 28 50 Z" fill="#5aaa50" stroke="#2F7A52" stroke-width="1"/>
      </svg>`
    },
    {
      id: "girl2", name: "طِفلةٌ صَغيرة",
      svg: `<svg viewBox="0 0 100 160">
        <path d="M28 60 L23 130 L40 142 L50 100 L60 142 L77 130 L72 60 Z" fill="#FFE9A8" stroke="#1F2540" stroke-width="1"/>
        <path d="M28 62 L18 100 L23 105 L33 70" fill="#FFE9A8" stroke="#1F2540" stroke-width="1"/>
        <path d="M72 62 L82 100 L77 105 L67 70" fill="#FFE9A8" stroke="#1F2540" stroke-width="1"/>
        ${head()}
        ${hijabFrame("#FF80B0")}
        <!-- bow -->
        <path d="M44 18 L50 22 L56 18 L54 24 L46 24 Z" fill="#FFFFFF"/>
      </svg>`
    },
  ];

  /* ============ Backdrops ============ */
  function backdropMosque() {
    return `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bd-m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#E2D3A4"/>
          <stop offset="1" stop-color="#C9A961"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#bd-m)"/>
      <!-- floor -->
      <rect y="200" width="400" height="50" fill="#8a6c4a"/>
      <pattern id="rug" x="0" y="200" width="40" height="50" patternUnits="userSpaceOnUse">
        <rect width="40" height="50" fill="#8a4c3a"/>
        <path d="M20 215 L25 225 L20 235 L15 225 Z" fill="#C9A961"/>
      </pattern>
      <rect x="50" y="200" width="300" height="40" fill="url(#rug)"/>
      <!-- arches -->
      <path d="M40 200 L40 130 Q40 70 100 70 Q160 70 160 130 L160 200" fill="none" stroke="#5a3a18" stroke-width="3"/>
      <path d="M170 200 L170 110 Q170 50 230 50 Q290 50 290 110 L290 200" fill="none" stroke="#5a3a18" stroke-width="4"/>
      <path d="M300 200 L300 130 Q300 70 340 70 Q380 70 380 130 L380 200" fill="none" stroke="#5a3a18" stroke-width="3"/>
      <!-- inside arch fill -->
      <path d="M170 200 L170 110 Q170 50 230 50 Q290 50 290 110 L290 200 Z" fill="rgba(255, 233, 168, 0.15)"/>
      <!-- lanterns hanging -->
      <line x1="100" y1="0" x2="100" y2="80" stroke="#1F2540" stroke-width="1"/>
      <ellipse cx="100" cy="90" rx="8" ry="12" fill="#FFE9A8" stroke="#1F2540" stroke-width="1"/>
      <line x1="230" y1="0" x2="230" y2="40" stroke="#1F2540" stroke-width="1"/>
      <ellipse cx="230" cy="50" rx="10" ry="14" fill="#FFE9A8" stroke="#1F2540" stroke-width="1"/>
      <line x1="340" y1="0" x2="340" y2="80" stroke="#1F2540" stroke-width="1"/>
      <ellipse cx="340" cy="90" rx="8" ry="12" fill="#FFE9A8" stroke="#1F2540" stroke-width="1"/>
    </svg>`;
  }
  function backdropGarden() {
    return `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="bd-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#CFE3F2"/>
        <stop offset="1" stop-color="#FFFBF3"/>
      </linearGradient></defs>
      <rect width="400" height="250" fill="url(#bd-g)"/>
      <!-- sun -->
      <circle cx="350" cy="50" r="22" fill="#FFE9A8"/>
      <g stroke="#FFE9A8" stroke-width="2.5" stroke-linecap="round">
        <line x1="350" y1="20" x2="350" y2="14"/><line x1="320" y1="50" x2="314" y2="50"/>
        <line x1="380" y1="50" x2="386" y2="50"/><line x1="350" y1="80" x2="350" y2="86"/>
      </g>
      <!-- clouds -->
      <g fill="#FFFFFF"><ellipse cx="80" cy="50" rx="28" ry="10"/><ellipse cx="60" cy="46" rx="14" ry="8"/></g>
      <!-- ground -->
      <rect y="200" width="400" height="50" fill="#a8c898"/>
      <path d="M0 200 Q200 192 400 198 L400 204 L0 204 Z" fill="#88a880"/>
      <!-- tree -->
      <rect x="60" y="140" width="10" height="60" fill="#6a4a20"/>
      <circle cx="65" cy="135" r="28" fill="#5aaa50"/>
      <circle cx="45" cy="140" r="18" fill="#5aaa50"/>
      <circle cx="85" cy="140" r="18" fill="#5aaa50"/>
      <!-- flowers -->
      ${[120,180,220,290,330].map(x =>
        `<line x1="${x}" y1="200" x2="${x}" y2="186" stroke="#5aaa50" stroke-width="1.5"/>
         <circle cx="${x}" cy="182" r="4" fill="${["#D05050","#FF80B0","#FFE9A8","#9e6bd0","#FFD9C2"][Math.floor((x/40)%5)]}"/>`).join("")}
    </svg>`;
  }
  function backdropDesert() {
    return `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="bd-d" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFCC70"/><stop offset="1" stop-color="#E8964A"/>
      </linearGradient></defs>
      <rect width="400" height="250" fill="url(#bd-d)"/>
      <!-- sun -->
      <circle cx="100" cy="55" r="28" fill="#FFE090"/>
      <!-- dunes -->
      <path d="M0 200 Q120 160 250 190 Q330 210 400 175 L400 250 L0 250 Z" fill="#D6A45A"/>
      <path d="M0 220 Q150 200 280 215 Q360 225 400 215 L400 250 L0 250 Z" fill="#C9853A"/>
      <!-- palms -->
      <g transform="translate(330,210)">
        <rect x="-3" y="-50" width="6" height="50" fill="#6a3a18"/>
        <path d="M0 -50 Q-18 -60 -30 -55" stroke="#4a8050" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M0 -50 Q18 -60 30 -55" stroke="#4a8050" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M0 -50 Q-10 -75 -18 -76" stroke="#4a8050" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M0 -50 Q10 -75 18 -76" stroke="#4a8050" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>
    </svg>`;
  }
  function backdropRoom() {
    return `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <!-- wall -->
      <rect width="400" height="250" fill="#E8DCC0"/>
      <!-- floor -->
      <path d="M0 180 L400 180 L400 250 L0 250 Z" fill="#6a4a20"/>
      <path d="M0 180 L400 180" stroke="#3a2a10" stroke-width="2"/>
      <!-- window -->
      <rect x="50" y="50" width="100" height="80" fill="#CFE3F2" stroke="#5a3a10" stroke-width="3"/>
      <line x1="100" y1="50" x2="100" y2="130" stroke="#5a3a10" stroke-width="2"/>
      <line x1="50" y1="90" x2="150" y2="90" stroke="#5a3a10" stroke-width="2"/>
      <!-- shelf w/ books -->
      <rect x="220" y="80" width="140" height="6" fill="#5a3a18"/>
      ${[0,1,2,3,4,5,6].map(i =>
        `<rect x="${230 + i*18}" y="60" width="14" height="20" fill="${["#5a3F94","#C9A961","#E89BB8","#5aaa50","#88B7DC","#D05050","#1F2540"][i]}"/>`).join("")}
      <!-- prayer rug -->
      <ellipse cx="200" cy="200" rx="60" ry="14" fill="#8a4c3a"/>
      <path d="M195 192 L205 192 L200 184 Z" fill="#C9A961"/>
    </svg>`;
  }
  const BACKDROPS = [
    { id: "mosque", name: "مَسجد", build: backdropMosque },
    { id: "garden", name: "حَديقة", build: backdropGarden },
    { id: "desert", name: "صَحراء", build: backdropDesert },
    { id: "room",   name: "غُرفة",  build: backdropRoom },
  ];

  /* ============ State ============ */
  const STORAGE_KEY = "mk_puppet_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { library: [] });

  let backdropId = "mosque";
  let placed = []; // {id, char, x, y, z, speech}
  let nextZ = 1;
  let selectedId = null;

  function genId() { return "p" + Math.random().toString(36).slice(2, 8); }

  /* ============ Render ============ */
  function renderBin() {
    const bin = document.getElementById("bin");
    bin.innerHTML = "";
    CHARACTERS.forEach(c => {
      const cell = document.createElement("div");
      cell.className = "pp-bin-cell";
      cell.title = c.name;
      cell.innerHTML = c.svg;
      cell.addEventListener("click", () => addCharacter(c.id));
      bin.appendChild(cell);
    });
  }
  function renderBackdrops() {
    const root = document.getElementById("backdrops");
    root.innerHTML = "";
    BACKDROPS.forEach(b => {
      const btn = document.createElement("div");
      btn.className = "pp-backdrop-btn" + (backdropId === b.id ? " active" : "");
      btn.innerHTML = b.build() + `<span>${b.name}</span>`;
      btn.addEventListener("click", () => { backdropId = b.id; renderStage(); renderBackdrops(); });
      root.appendChild(btn);
    });
  }
  function renderStage() {
    const stage = document.getElementById("stage");
    stage.innerHTML = "";
    // backdrop
    const bd = BACKDROPS.find(b => b.id === backdropId);
    const wrap = document.createElement("div");
    wrap.style.cssText = "position:absolute; inset:0;";
    wrap.innerHTML = bd.build();
    const bdSvg = wrap.querySelector("svg");
    if (bdSvg) bdSvg.classList.add("backdrop");
    stage.appendChild(wrap);

    placed.forEach(p => {
      const char = CHARACTERS.find(c => c.id === p.char);
      if (!char) return;
      const el = document.createElement("div");
      el.className = "pp-puppet" + (selectedId === p.id ? " selected" : "");
      el.dataset.pid = p.id;
      el.style.left = p.x + "%";
      el.style.top = p.y + "%";
      el.style.zIndex = p.z;
      el.innerHTML = (p.speech ? `<div class="speech">${escape(p.speech)}</div>` : "") + char.svg;
      el.addEventListener("pointerdown", startDrag);
      stage.appendChild(el);
    });

    document.getElementById("stat-count").textContent = placed.length;
    document.getElementById("stat-saved").textContent = STORE.library.length;
    document.getElementById("lib-pill").textContent = STORE.library.length;
  }

  function escape(s) {
    return String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  }

  /* ============ Add / Drag / Select ============ */
  function addCharacter(charId) {
    const id = genId();
    placed.push({ id, char: charId, x: 25 + Math.random() * 50, y: 55 + Math.random() * 15, z: ++nextZ, speech: "" });
    AudioBus.pop();
    renderStage();
    select(id);
  }

  function startDrag(e) {
    const el = e.currentTarget;
    const id = el.dataset.pid;
    select(id);
    el.setPointerCapture(e.pointerId);
    const stage = document.getElementById("stage");
    const rect = stage.getBoundingClientRect();
    const startX = e.clientX, startY = e.clientY;
    const startLeft = parseFloat(el.style.left), startTop = parseFloat(el.style.top);
    let moved = false;

    function onMove(ev) {
      if (Math.abs(ev.clientX - startX) > 3 || Math.abs(ev.clientY - startY) > 3) moved = true;
      if (!moved) return;
      const nx = startLeft + (ev.clientX - startX) / rect.width * 100;
      const ny = startTop + (ev.clientY - startY) / rect.height * 100;
      const x = Math.max(5, Math.min(95, nx));
      const y = Math.max(20, Math.min(95, ny));
      el.style.left = x + "%"; el.style.top = y + "%";
      const item = placed.find(p => p.id === id);
      if (item) { item.x = x; item.y = y; }
    }
    function onUp() {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      document.getElementById("stat-count").textContent = placed.length;
    }
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
  }

  function select(id) {
    selectedId = id;
    document.querySelectorAll(".pp-puppet").forEach(p => {
      p.classList.toggle("selected", p.dataset.pid === id);
    });
    const editor = document.getElementById("speech-editor");
    if (!id) { editor.classList.remove("open"); return; }
    const item = placed.find(p => p.id === id);
    const char = CHARACTERS.find(c => c.id === item.char);
    document.getElementById("ed-name").textContent = char.name;
    document.getElementById("speech-input").value = item.speech || "";
    editor.classList.add("open");
  }

  /* ============ Editor actions ============ */
  function updateSpeech(text) {
    if (!selectedId) return;
    const item = placed.find(p => p.id === selectedId);
    if (item) { item.speech = text; renderStage(); }
  }
  function deleteSelected() {
    if (!selectedId) return;
    placed = placed.filter(p => p.id !== selectedId);
    selectedId = null;
    document.getElementById("speech-editor").classList.remove("open");
    renderStage();
    AudioBus.tick(440);
  }
  function bringFront() {
    if (!selectedId) return;
    const item = placed.find(p => p.id === selectedId);
    item.z = ++nextZ;
    renderStage();
  }
  function sendBack() {
    if (!selectedId) return;
    const item = placed.find(p => p.id === selectedId);
    item.z = Math.min(...placed.map(p => p.z)) - 1;
    renderStage();
  }

  /* ============ Library ============ */
  function saveScene() {
    if (!placed.length) return;
    STORE.library.unshift({
      ts: Date.now(),
      backdrop: backdropId,
      placed: JSON.parse(JSON.stringify(placed)),
    });
    if (STORE.library.length > 8) STORE.library = STORE.library.slice(0, 8);
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(60, { colors: ["#E0D5F2","#FFE9A8"] });
    AudioBus.success();
    renderLibrary();
    renderStage();
  }
  function renderLibrary() {
    const root = document.getElementById("library");
    root.innerHTML = "";
    if (!STORE.library.length) {
      root.innerHTML = '<div style="grid-column: 1/-1; padding: 14px; text-align:center; color: var(--muted); font-size:13px;">لم تَحفظ مَشهداً بَعد. اِبدأ بِترتيب شَخصيَّاتك ثم احفَظ!</div>';
      return;
    }
    STORE.library.forEach((scene, i) => {
      const cell = document.createElement("div");
      cell.style.cssText = "aspect-ratio: 4/3; background: #2a2645; border-radius: 8px; padding: 4px; cursor:pointer; position: relative; overflow:hidden;";
      cell.title = "انقر لاستعادة هذا المَشهد";
      const bd = BACKDROPS.find(b => b.id === scene.backdrop);
      cell.innerHTML = `
        <div style="position:absolute; inset:4px; overflow:hidden; border-radius:4px;">
          ${bd.build()}
          ${scene.placed.map(p => {
            const c = CHARACTERS.find(c => c.id === p.char);
            if (!c) return "";
            return `<div style="position:absolute; left:${p.x}%; top:${p.y}%; width:30%; transform:translate(-50%,-50%); pointer-events:none;">${c.svg}</div>`;
          }).join("")}
        </div>
      `;
      cell.addEventListener("click", () => loadScene(i));
      root.appendChild(cell);
    });
  }
  function loadScene(i) {
    const s = STORE.library[i];
    if (!s) return;
    backdropId = s.backdrop;
    placed = JSON.parse(JSON.stringify(s.placed));
    nextZ = Math.max(0, ...placed.map(p => p.z));
    selectedId = null;
    document.getElementById("speech-editor").classList.remove("open");
    renderStage(); renderBackdrops();
    AudioBus.pop();
  }

  /* ============ Bind ============ */
  document.getElementById("speech-input").addEventListener("input", e => updateSpeech(e.target.value));
  document.querySelectorAll(".pp-speech-presets button").forEach(b => {
    b.addEventListener("click", () => {
      const t = b.dataset.preset;
      document.getElementById("speech-input").value = t;
      updateSpeech(t);
    });
  });
  document.getElementById("ed-delete").addEventListener("click", deleteSelected);
  document.getElementById("ed-front").addEventListener("click", bringFront);
  document.getElementById("ed-back").addEventListener("click", sendBack);
  document.getElementById("ed-clear-speech").addEventListener("click", () => {
    document.getElementById("speech-input").value = "";
    updateSpeech("");
  });
  document.getElementById("ed-done").addEventListener("click", () => {
    selectedId = null;
    document.getElementById("speech-editor").classList.remove("open");
    renderStage();
  });
  document.getElementById("btn-clear").addEventListener("click", () => {
    if (placed.length && !confirm("مَسحُ كلّ الشَّخصيَّات من المَسرح؟")) return;
    placed = []; selectedId = null;
    document.getElementById("speech-editor").classList.remove("open");
    renderStage();
  });
  document.getElementById("btn-save").addEventListener("click", saveScene);
  document.getElementById("stage").addEventListener("click", e => {
    if (e.target.id === "stage" || e.target.classList.contains("backdrop")) {
      selectedId = null;
      document.getElementById("speech-editor").classList.remove("open");
      renderStage();
    }
  });
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات والمَكتبة؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Init ============ */
  renderBin();
  renderBackdrops();
  renderStage();
  renderLibrary();
})();
