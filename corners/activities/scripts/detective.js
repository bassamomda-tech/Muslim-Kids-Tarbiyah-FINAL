/* ============================================================
   DETECTIVE — منطق نشاط المحقّق الذكي
   ثمانية أعمال صالحة مخفية في مشهد. تحديد بإحداثيات (%) ضمن SVG المشهد.
   ============================================================ */

(function () {
  "use strict";

  /* قائمة الأعمال الصالحة المخفية — إحداثيات نسبية (% من المشهد) */
  const DEEDS = [
    { id: "trash",   x: 14, y: 78, r: 6, t: "إماطة الأذى عن الطريق",
      h: "ابحث قرب الرصيف الأمامي", d: "رفع علبةٍ ساقطة من الطريق" },
    { id: "elder",   x: 30, y: 64, r: 6, t: "مساعدة كبير السن",
      h: "قرب باب المنزل الأخضر", d: "حمل حقيبة العمّ الكبير" },
    { id: "cat",     x: 50, y: 80, r: 6, t: "إطعام قطة",
      h: "خلف الصندوق على الرصيف", d: "وضْع طعام لقطة صغيرة" },
    { id: "tree",    x: 78, y: 72, r: 6, t: "زرع شجرة",
      h: "في الحديقة على اليسار", d: "زرع شتلةٍ صغيرة" },
    { id: "smile",   x: 64, y: 50, r: 5, t: "ابتسامة في وجه أخيك",
      h: "في نافذة الطابق الأول", d: "السلام والابتسام للجار" },
    { id: "charity", x: 22, y: 44, r: 5, t: "صدقة خفيّة",
      h: "إلى يسار النافذة الزرقاء", d: "إدخال نقودٍ في صندوق التبرع" },
    { id: "quran",   x: 86, y: 38, r: 5, t: "قراءة القرآن",
      h: "في الطابق العلوي", d: "طفلٌ يقرأ المصحف بهدوء" },
    { id: "water",   x: 44, y: 28, r: 5, t: "سقي الطير",
      h: "على حافة السطح", d: "وضع ماءٍ للعصافير" },
  ];

  const STORAGE_KEY = "mk_detective_state_v1";
  const state = Storage.get(STORAGE_KEY, {
    bestMisses: null, bestHints: null, bestTime: null, plays: 0,
  });

  let found = new Set();
  let misses = 0;
  let hintsUsed = 0;
  const HINT_MAX = 3;
  let hintedId = null;
  let startTs = 0;
  let timerInt = null;
  let playing = false;

  const sceneEl = document.getElementById("scene");
  const hitsEl  = document.getElementById("scene-hits");
  const bgEl    = document.getElementById("scene-bg");
  const overlay = document.getElementById("scene-overlay");

  /* --------- مشهد SVG (الحي) --------- */
  bgEl.innerHTML = sceneSVG();

  function sceneSVG() {
    // مشهد حي مبسّط: سماء، شمس، بيتان، حديقة، رصيف
    return `
<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <!-- سماء -->
  <defs>
    <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#E6F0FA"/>
      <stop offset="1" stop-color="#CFE3F2"/>
    </linearGradient>
    <linearGradient id="ground" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#E8DEC2"/>
      <stop offset="1" stop-color="#C8B98C"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="700" fill="url(#sky)"/>
  <rect y="700" width="1600" height="300" fill="url(#ground)"/>

  <!-- شمس -->
  <circle cx="1350" cy="180" r="60" fill="#FFE9A8" opacity="0.9"/>
  <circle cx="1350" cy="180" r="40" fill="#FFD98B"/>

  <!-- سحاب -->
  <g fill="#fff" opacity="0.85">
    <ellipse cx="300" cy="160" rx="80" ry="22"/>
    <ellipse cx="360" cy="150" rx="60" ry="20"/>
    <ellipse cx="900" cy="120" rx="100" ry="24"/>
  </g>

  <!-- شجرة كبيرة على اليسار -->
  <rect x="120" y="540" width="30" height="160" fill="#7A5A3A"/>
  <circle cx="135" cy="500" r="80" fill="#7FA66A"/>
  <circle cx="100" cy="520" r="55" fill="#8FB57A"/>
  <circle cx="170" cy="510" r="55" fill="#8FB57A"/>

  <!-- بيت 1 -->
  <rect x="220" y="430" width="280" height="290" fill="#F2E5D0"/>
  <polygon points="200,430 360,310 520,430" fill="#A8654B"/>
  <rect x="270" y="500" width="60" height="80" fill="#9FC4E3" stroke="#fff" stroke-width="4"/>
  <rect x="395" y="500" width="60" height="80" fill="#9FC4E3" stroke="#fff" stroke-width="4"/>
  <rect x="330" y="600" width="70" height="120" fill="#5B8C5A" stroke="#fff" stroke-width="4"/>
  <circle cx="385" cy="660" r="4" fill="#FFD98B"/>

  <!-- بيت 2 -->
  <rect x="900" y="380" width="320" height="340" fill="#EEDFC2"/>
  <polygon points="880,380 1060,260 1240,380" fill="#B57049"/>
  <rect x="960" y="450" width="70" height="90" fill="#9FC4E3" stroke="#fff" stroke-width="4"/>
  <rect x="1100" y="450" width="70" height="90" fill="#9FC4E3" stroke="#fff" stroke-width="4"/>
  <rect x="960" y="600" width="70" height="120" fill="#7A5A3A" stroke="#fff" stroke-width="4"/>
  <rect x="1100" y="600" width="70" height="120" fill="#9FC4E3" stroke="#fff" stroke-width="4"/>

  <!-- مسجد صغير بعيد -->
  <rect x="640" y="500" width="180" height="200" fill="#F5F0E2"/>
  <path d="M640 500 Q730 420 820 500 Z" fill="#D9CDA8"/>
  <rect x="610" y="460" width="20" height="240" fill="#F5F0E2"/>
  <rect x="830" y="460" width="20" height="240" fill="#F5F0E2"/>
  <rect x="720" y="580" width="40" height="120" fill="#7A5A3A"/>

  <!-- حديقة وشجرة صغيرة (يمين) -->
  <ellipse cx="1380" cy="780" rx="180" ry="60" fill="#A8C99A" opacity="0.6"/>
  <rect x="1370" y="660" width="20" height="120" fill="#7A5A3A"/>
  <circle cx="1380" cy="640" r="40" fill="#7FA66A"/>

  <!-- صندوق على الرصيف -->
  <rect x="780" y="800" width="60" height="55" fill="#A8654B"/>
  <rect x="780" y="800" width="60" height="10" fill="#7A4A30"/>

  <!-- رصيف وطريق -->
  <rect y="850" width="1600" height="20" fill="#B8AC85"/>
  <rect y="870" width="1600" height="130" fill="#7E7363"/>
  <g stroke="#fff" stroke-width="3" stroke-dasharray="40 20">
    <line x1="0" y1="935" x2="1600" y2="935"/>
  </g>

  <!-- سور حديقة الأولى -->
  <g stroke="#fff" stroke-width="4" fill="none">
    <line x1="40" y1="750" x2="200" y2="750"/>
    <line x1="60" y1="730" x2="60" y2="780"/>
    <line x1="100" y1="730" x2="100" y2="780"/>
    <line x1="140" y1="730" x2="140" y2="780"/>
    <line x1="180" y1="730" x2="180" y2="780"/>
  </g>

  <!-- صندوق التبرع (داخل البيت 1) -->
  <rect x="330" y="430" width="36" height="24" fill="#FBF6EC" opacity="0.7"/>
</svg>`;
  }

  /* --------- بناء نقاط الإصابة --------- */
  function buildHits() {
    hitsEl.innerHTML = "";
    DEEDS.forEach(d => {
      const el = document.createElement("button");
      el.className = "hit-spot";
      el.dataset.id = d.id;
      el.style.right = d.x + "%";
      el.style.top = d.y + "%";
      el.style.width = (d.r * 2.4) + "%";
      el.style.aspectRatio = "1";
      el.setAttribute("aria-label", d.t);
      el.innerHTML = deedIcon(d.id);
      el.addEventListener("click", e => { e.stopPropagation(); onHitClick(d); });
      hitsEl.appendChild(el);
    });
  }

  function deedIcon(id) {
    const ICONS = {
      trash:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/></svg>`,
      elder:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6" r="3"/><path d="M6 22v-5a6 6 0 0 1 12 0v5"/></svg>`,
      cat:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11 4 5l4 3h8l4-3-1 6"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/><path d="M12 16v2"/></svg>`,
      tree:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M7 12a5 5 0 0 1 10 0"/><path d="M5 8a4 4 0 0 1 7-2 4 4 0 0 1 7 2"/></svg>`,
      smile:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="10" r="0.8" fill="currentColor"/><circle cx="15" cy="10" r="0.8" fill="currentColor"/></svg>`,
      charity: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.6-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.4-7 11-7 11z"/></svg>`,
      quran:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2"/><path d="M9 7h6"/></svg>`,
      water:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z"/></svg>`,
    };
    return ICONS[id] || "";
  }

  /* --------- قائمة الأعمال الجانبية --------- */
  function renderDeedsList() {
    const box = document.getElementById("deeds-list");
    box.innerHTML = DEEDS.map(d => `
      <div class="deed-row ${found.has(d.id) ? 'found' : ''}" data-id="${d.id}">
        <span class="check">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>
        </span>
        <div class="deed-text">${d.t}<small>${found.has(d.id) ? d.d : '— لم يُكتشف بعد —'}</small></div>
      </div>
    `).join("");
  }

  /* --------- منطق التحقيق --------- */
  function onHitClick(d) {
    if (!playing) return;
    if (found.has(d.id)) return;
    found.add(d.id);
    AudioBus.success();
    Particles.fire(40, {
      originX: (100 - d.x) + "%",
      originY: d.y + "%",
      colors: ["#CDEBD7","#FFE9A8","#FFD9C2","#E0D5F2"],
    });
    const spot = hitsEl.querySelector(`[data-id="${d.id}"]`);
    if (spot) spot.classList.add("found");
    if (hintedId === d.id) hintedId = null;

    updateHUD();
    renderDeedsList();

    if (found.size === DEEDS.length) finish();
  }

  function onSceneClick(e) {
    if (!playing) return;
    // Did the click hit a deed?
    if (e.target.closest(".hit-spot")) return;
    // Miss ripple
    misses++;
    AudioBus.fail();
    const rect = sceneEl.getBoundingClientRect();
    const xPct = ((rect.right - e.clientX) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    const r = document.createElement("span");
    r.className = "miss-ripple";
    r.style.right = xPct + "%";
    r.style.top = yPct + "%";
    hitsEl.appendChild(r);
    setTimeout(() => r.remove(), 800);
    updateHUD();
  }

  function useHint() {
    if (!playing) return;
    if (hintsUsed >= HINT_MAX) return;
    const remaining = DEEDS.filter(d => !found.has(d.id));
    if (!remaining.length) return;
    const d = remaining[Math.floor(Math.random() * remaining.length)];
    hintedId = d.id;
    const spot = hitsEl.querySelector(`[data-id="${d.id}"]`);
    if (spot) {
      spot.classList.add("hinted");
      setTimeout(() => spot.classList.remove("hinted"), 4500);
    }
    showToast(`القرينة: ${d.h}`);
    hintsUsed++;
    AudioBus.pop();
    updateHUD();
  }

  function showToast(msg) {
    let t = document.getElementById("d-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "d-toast";
      t.style.cssText = "position:absolute;top:12px;right:50%;transform:translateX(50%);background:rgba(31,37,64,0.9);color:#FBF6EC;padding:10px 18px;border-radius:999px;font-weight:700;font-size:13px;z-index:10;transition:opacity 0.3s ease;";
      sceneEl.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = "1";
    clearTimeout(t._h);
    t._h = setTimeout(() => { t.style.opacity = "0"; }, 3500);
  }

  function updateHUD() {
    document.getElementById("d-found").textContent = `${found.size}/${DEEDS.length}`;
    document.getElementById("d-misses").textContent = misses;
    document.getElementById("checklist-pill").textContent = `${found.size}/${DEEDS.length}`;
    const pips = document.getElementById("hint-pips");
    pips.innerHTML = "";
    for (let i = 0; i < HINT_MAX; i++) {
      const s = document.createElement("span");
      if (i < hintsUsed) s.className = "used";
      pips.appendChild(s);
    }
    const hintBtn = document.getElementById("hint-btn");
    hintBtn.disabled = hintsUsed >= HINT_MAX;
  }

  /* --------- وقت --------- */
  function startTimer() {
    startTs = Date.now();
    timerInt = setInterval(() => {}, 1000);
  }
  function stopTimer() {
    if (timerInt) { clearInterval(timerInt); timerInt = null; }
  }
  function elapsedSec() { return Math.floor((Date.now() - startTs) / 1000); }

  /* --------- البدء/الإنهاء --------- */
  function start() {
    found = new Set();
    misses = 0;
    hintsUsed = 0;
    hintedId = null;
    playing = true;
    buildHits();
    renderDeedsList();
    updateHUD();
    startTimer();
    overlay.classList.add("hidden");
  }

  function finish() {
    playing = false;
    stopTimer();
    const t = elapsedSec();
    const isBest = state.bestMisses == null || misses < state.bestMisses;
    if (isBest) { state.bestMisses = misses; state.bestHints = hintsUsed; state.bestTime = t; }
    state.plays++;
    Storage.set(STORAGE_KEY, state);
    setTimeout(() => {
      document.getElementById("win-misses").textContent = misses;
      document.getElementById("win-hints").textContent = hintsUsed;
      document.getElementById("win-time").textContent = Fmt.time(t);
      Modal.open("win-modal");
      Particles.fire(120);
    }, 600);
  }

  /* --------- ربط الأحداث --------- */
  document.getElementById("start-btn").addEventListener("click", () => { AudioBus.pop(); start(); });
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(start, 300);
  });
  document.getElementById("hint-btn").addEventListener("click", useHint);
  Modal.bindClose("win-modal");

  sceneEl.addEventListener("click", onSceneClick);

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });

  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* تهيئة أولية */
  buildHits();
  renderDeedsList();
  updateHUD();
})();
