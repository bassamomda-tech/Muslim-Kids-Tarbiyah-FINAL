/* ============================================================
   LANDMARKS PUZZLE — أحجية المعالم
   3x3 swap puzzle. Three Islamic landmarks, drawn as inline SVGs.
   ============================================================ */

(function () {
  "use strict";

  /* ============ SVG illustrations ============ */
  // Each SVG is 300x300; the board displays it at 360x360 via background-size: 300%.

  const SVG_KAABA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
    <rect width="300" height="170" fill="#F5EEDF"/>
    <rect y="170" width="300" height="130" fill="#E8E0D0"/>
    <path d="M0 200 L300 200" stroke="#D5C9B2" stroke-width="1"/>
    <path d="M0 240 L300 240" stroke="#D5C9B2" stroke-width="1"/>
    <ellipse cx="150" cy="260" rx="120" ry="32" fill="none" stroke="#B5A88B" stroke-width="3"/>
    <ellipse cx="150" cy="262" rx="100" ry="20" fill="none" stroke="#B5A88B" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="70" y="70" width="160" height="160" fill="#1a1a1a"/>
    <rect x="70" y="92" width="160" height="22" fill="#C9A961"/>
    <path d="M82 105 q4 -4 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" stroke="#1a1a1a" stroke-width="1.5" fill="none"/>
    <path d="M82 99 q4 -3 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" stroke="#1a1a1a" stroke-width="1" fill="none" opacity="0.7"/>
    <line x1="72" y1="70" x2="72" y2="230" stroke="#8A6510" stroke-width="2"/>
    <line x1="228" y1="70" x2="228" y2="230" stroke="#8A6510" stroke-width="2"/>
    <line x1="70" y1="92" x2="230" y2="92" stroke="#8A6510" stroke-width="1.5"/>
    <line x1="70" y1="114" x2="230" y2="114" stroke="#8A6510" stroke-width="1.5"/>
    <rect x="135" y="135" width="30" height="85" fill="#C9A961" stroke="#8A6510" stroke-width="1.5"/>
    <line x1="150" y1="135" x2="150" y2="220" stroke="#8A6510" stroke-width="1"/>
    <circle cx="143" cy="178" r="1.5" fill="#8A6510"/>
    <circle cx="157" cy="178" r="1.5" fill="#8A6510"/>
    <circle cx="40" cy="38" r="1.8" fill="#C9A961"/>
    <circle cx="260" cy="48" r="1.8" fill="#C9A961"/>
    <circle cx="50" cy="160" r="1.2" fill="#C9A961"/>
    <circle cx="245" cy="155" r="1.2" fill="#C9A961"/>
  </svg>`;

  const SVG_NABAWI = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
    <defs>
      <linearGradient id="nabSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#CFE3F2"/>
        <stop offset="100%" stop-color="#F5EEDF"/>
      </linearGradient>
    </defs>
    <rect width="300" height="240" fill="url(#nabSky)"/>
    <rect y="240" width="300" height="60" fill="#E8E0D0"/>
    <path d="M0 240 L300 240" stroke="#B5A88B" stroke-width="1"/>
    <circle cx="55" cy="50" r="6" fill="#FFE9A8" opacity="0.75"/>
    <rect x="40" y="160" width="220" height="100" fill="#F5EEDF" stroke="#B5A88B" stroke-width="1.5"/>
    <rect x="40" y="156" width="220" height="6" fill="#C9A961"/>
    <path d="M70 260 L70 215 a15 15 0 0 1 30 0 L100 260 Z" fill="#1F2540" opacity="0.55"/>
    <path d="M130 260 L130 210 a20 20 0 0 1 40 0 L170 260 Z" fill="#1F2540" opacity="0.65"/>
    <path d="M200 260 L200 215 a15 15 0 0 1 30 0 L230 260 Z" fill="#1F2540" opacity="0.55"/>
    <rect x="20" y="100" width="20" height="160" fill="#F5EEDF" stroke="#B5A88B"/>
    <rect x="22" y="80" width="16" height="20" fill="#E8E0D0" stroke="#B5A88B" stroke-width="0.8"/>
    <path d="M20 80 L40 80 L30 65 Z" fill="#C9A961"/>
    <circle cx="30" cy="55" r="3" fill="#C9A961"/>
    <line x1="30" y1="58" x2="30" y2="48" stroke="#C9A961" stroke-width="1.5"/>
    <rect x="260" y="100" width="20" height="160" fill="#F5EEDF" stroke="#B5A88B"/>
    <rect x="262" y="80" width="16" height="20" fill="#E8E0D0" stroke="#B5A88B" stroke-width="0.8"/>
    <path d="M260 80 L280 80 L270 65 Z" fill="#C9A961"/>
    <circle cx="270" cy="55" r="3" fill="#C9A961"/>
    <line x1="270" y1="58" x2="270" y2="48" stroke="#C9A961" stroke-width="1.5"/>
    <path d="M75 175 a14 12 0 0 1 28 0 Z" fill="#E8E0D0" stroke="#B5A88B"/>
    <path d="M197 175 a14 12 0 0 1 28 0 Z" fill="#E8E0D0" stroke="#B5A88B"/>
    <path d="M115 160 a35 32 0 0 1 70 0 Z" fill="#2F7A52" stroke="#1F4A30" stroke-width="1"/>
    <path d="M115 160 a35 32 0 0 1 70 0" fill="none" stroke="#1F4A30" stroke-width="0.6" stroke-dasharray="2 4"/>
    <ellipse cx="150" cy="160" rx="40" ry="5" fill="#1F4A30"/>
    <circle cx="150" cy="124" r="3" fill="#C9A961"/>
    <line x1="150" y1="124" x2="150" y2="114" stroke="#C9A961" stroke-width="1.5"/>
    <path d="M147 112 a4 4 0 1 0 0 -1" fill="#C9A961"/>
    <line x1="0" y1="240" x2="300" y2="240" stroke="#A8987B" stroke-width="1"/>
    <line x1="0" y1="270" x2="300" y2="270" stroke="#C8B89B" stroke-width="0.8"/>
  </svg>`;

  const SVG_AQSA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
    <defs>
      <linearGradient id="aqSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E0EEF7"/>
        <stop offset="100%" stop-color="#FFF6E0"/>
      </linearGradient>
      <radialGradient id="aqDome" cx="0.4" cy="0.3">
        <stop offset="0%" stop-color="#FFE9A8"/>
        <stop offset="55%" stop-color="#C9A961"/>
        <stop offset="100%" stop-color="#8A6510"/>
      </radialGradient>
    </defs>
    <rect width="300" height="270" fill="url(#aqSky)"/>
    <rect y="270" width="300" height="30" fill="#A8B888"/>
    <path d="M0 270 L300 270" stroke="#7B8E68" stroke-width="1"/>
    <circle cx="40" cy="210" r="22" fill="#7BAB91" opacity="0.85"/>
    <circle cx="50" cy="218" r="14" fill="#5C9678" opacity="0.7"/>
    <rect x="38" y="220" width="3" height="18" fill="#5A4E2E"/>
    <circle cx="260" cy="210" r="22" fill="#7BAB91" opacity="0.85"/>
    <circle cx="252" cy="218" r="14" fill="#5C9678" opacity="0.7"/>
    <rect x="259" y="220" width="3" height="18" fill="#5A4E2E"/>
    <polygon points="80,150 100,130 200,130 220,150 220,250 200,260 100,260 80,250" fill="#5A8FB5" stroke="#2E5F8A" stroke-width="2"/>
    <rect x="100" y="155" width="100" height="80" fill="#7AAFCD"/>
    <path d="M100 165 L200 165" stroke="#1F2540" stroke-width="3"/>
    <path d="M100 225 L200 225" stroke="#1F2540" stroke-width="3"/>
    <path d="M110 195 L190 195" stroke="#fff" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.7"/>
    <path d="M108 220 L108 178 a9 9 0 0 1 18 0 L126 220 Z" fill="#1F2540"/>
    <path d="M141 220 L141 175 a9 9 0 0 1 18 0 L159 220 Z" fill="#1F2540"/>
    <path d="M174 220 L174 178 a9 9 0 0 1 18 0 L192 220 Z" fill="#1F2540"/>
    <rect x="105" y="98" width="90" height="34" fill="#7AAFCD" stroke="#2E5F8A" stroke-width="1.5"/>
    <rect x="113" y="105" width="6" height="20" fill="#1F2540"/>
    <rect x="133" y="105" width="6" height="20" fill="#1F2540"/>
    <rect x="153" y="105" width="6" height="20" fill="#1F2540"/>
    <rect x="173" y="105" width="6" height="20" fill="#1F2540"/>
    <path d="M105 98 Q150 26 195 98 Z" fill="url(#aqDome)" stroke="#8A6510" stroke-width="1.5"/>
    <path d="M105 98 Q150 26 195 98" fill="none" stroke="#FFE9A8" stroke-width="0.6" opacity="0.7"/>
    <circle cx="150" cy="22" r="3" fill="#8A6510"/>
    <line x1="150" y1="22" x2="150" y2="12" stroke="#8A6510" stroke-width="2"/>
    <path d="M146 6 a6 6 0 1 0 0 -2 a4 4 0 1 1 0 2 Z" fill="#C9A961" stroke="#8A6510" stroke-width="0.8"/>
  </svg>`;

  const LANDMARKS = [
    {
      id: "kaaba",
      name: "الكَعبَة المُشَرَّفَة",
      sub: "مَكَّة المُكَرَّمَة",
      thumbIc: "▣",
      svg: SVG_KAABA,
      body: "أَوَّلُ بَيتٍ وُضِعَ لِلنّاس. قِبلَةُ المُسلِمين في كلِّ صَلاة. بَناها إِبراهيمُ وإِسماعيلُ — عَلَيهِما السَّلام.",
      quote: "«إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا» — آل عمران · 96",
    },
    {
      id: "nabawi",
      name: "المَسجِد النَّبَوي",
      sub: "المَدينَة المُنَوَّرَة",
      thumbIc: "◔",
      svg: SVG_NABAWI,
      body: "بَناهُ النَّبيُّ ﷺ بِيَدِه عِندَ هِجرَتِه إلى المَدينَة. تَحتَ قُبَّتِه الخَضراءِ مَدفِنُهُ الشَّريف ﷺ.",
      quote: "«صَلاةٌ في مَسجِدي هذا أَفضَلُ مِن أَلفِ صَلاةٍ فيما سِواه» — البخاري ومسلم",
    },
    {
      id: "aqsa",
      name: "قُبَّةُ الصَّخرَة",
      sub: "القُدسُ الشَّريف",
      thumbIc: "✦",
      svg: SVG_AQSA,
      body: "مَعلَمُ القُدسِ المُذَهَّب، يَقومُ على صَخرَةٍ مُبارَكَة. مِن باحاتِ المَسجِدِ الأقصى أَوَّلِ القِبلَتَين.",
      quote: "«سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا … إِلَى الْمَسْجِدِ الْأَقْصَى» — الإسراء · 1",
    },
  ];

  function svgToDataURL(svg) {
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  }

  const STORAGE_KEY = "mk_landmarks_v1";
  const STORE = Storage.get(STORAGE_KEY, { bestPoints: 0, solvedIds: [], rounds: 0 });

  const POSITIONS = ["0% 0%", "50% 0%", "100% 0%",
                     "0% 50%", "50% 50%", "100% 50%",
                     "0% 100%", "50% 100%", "100% 100%"];

  let currentLM = LANDMARKS[0];
  let order = [];           // tile arrangement: order[displayIdx] = correctIdx
  let selectedDisplayIdx = null;
  let swaps = 0;
  let solved = false;
  let solvedSet = new Set(STORE.solvedIds || []);
  let totalPoints = STORE.bestPoints || 0;

  function init() {
    buildPicker();
    chooseLandmark(LANDMARKS[0]);
    renderDiscovered();
    updateHUD();
  }

  function buildPicker() {
    const root = document.getElementById("lp-picker");
    root.innerHTML = "";
    LANDMARKS.forEach(lm => {
      const isActive = currentLM && currentLM.id === lm.id;
      const isSolved = solvedSet.has(lm.id);
      const card = document.createElement("button");
      card.className = "lp-picker-card" + (isActive ? " active" : "") + (isSolved ? " solved" : "");
      card.dataset.id = lm.id;
      card.innerHTML = `
        <div class="thumb">${isSolved ? lm.svg : `<span style="font-size:22px;">${lm.thumbIc}</span>`}</div>
        <div class="meta">
          <strong>${lm.name}</strong>
          <small>${lm.sub}</small>
        </div>
      `;
      card.addEventListener("click", () => chooseLandmark(lm));
      root.appendChild(card);
    });
  }

  function chooseLandmark(lm) {
    currentLM = lm;
    solved = false; swaps = 0;
    selectedDisplayIdx = null;
    document.getElementById("lp-cur").innerHTML = toArDigit(LANDMARKS.indexOf(lm) + 1) + `<small>/${LANDMARKS.length}</small>`;
    document.getElementById("btn-next-landmark").hidden = true;
    document.getElementById("lp-reveal").hidden = true;
    document.querySelectorAll(".lp-picker-card").forEach(c => c.classList.toggle("active", c.dataset.id === lm.id));
    shuffleAndRender();
  }

  function toArDigit(n) { return String(n).replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[d]); }

  function shuffleAndRender() {
    // Build correct order then shuffle
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    do {
      arr = arr.sort(() => Math.random() - 0.5);
    } while (arr.every((v, i) => v === i)); // ensure not pre-solved
    order = arr;
    swaps = 0;
    solved = false;
    selectedDisplayIdx = null;
    renderBoard();
    updateHUD();
  }

  function renderBoard() {
    const board = document.getElementById("lp-board");
    board.style.direction = "ltr"; // tiles fill L→R regardless of page RTL
    board.innerHTML = "";
    const dataURL = svgToDataURL(currentLM.svg);

    order.forEach((correctIdx, displayIdx) => {
      const tile = document.createElement("div");
      tile.className = "lp-tile";
      tile.dataset.display = displayIdx;
      tile.style.backgroundImage = dataURL;
      tile.style.backgroundPosition = POSITIONS[correctIdx];
      tile.addEventListener("click", () => onTileClick(displayIdx, tile));
      if (correctIdx === displayIdx) tile.classList.add("correct");
      board.appendChild(tile);
    });
  }

  function onTileClick(displayIdx, tileEl) {
    if (solved) return;
    if (tileEl.classList.contains("correct") && order[displayIdx] === displayIdx) {
      // Allow user to still pick it (in case they want to free up space) — pulse
      // but actually let's prevent selection of locked-correct tiles to make it easier
      return;
    }
    if (selectedDisplayIdx == null) {
      selectedDisplayIdx = displayIdx;
      tileEl.classList.add("selected");
      AudioBus.tick(720);
      return;
    }
    if (selectedDisplayIdx === displayIdx) {
      // Toggle off
      selectedDisplayIdx = null;
      tileEl.classList.remove("selected");
      AudioBus.tick(440);
      return;
    }
    // Swap
    const a = selectedDisplayIdx;
    const b = displayIdx;
    [order[a], order[b]] = [order[b], order[a]];
    swaps++;
    selectedDisplayIdx = null;
    // Animate + re-render
    document.querySelectorAll(".lp-tile").forEach(t => t.classList.remove("selected"));
    renderBoard();
    // Mark swapped pair briefly
    const board = document.getElementById("lp-board");
    [a, b].forEach(idx => {
      const t = board.querySelector(`.lp-tile[data-display="${idx}"]`);
      if (t) t.classList.add("swapping");
    });
    setTimeout(() => {
      document.querySelectorAll(".lp-tile.swapping").forEach(t => t.classList.remove("swapping"));
    }, 400);
    AudioBus.pop();
    updateHUD();
    checkSolved();
  }

  function checkSolved() {
    if (order.every((v, i) => v === i)) {
      solved = true;
      document.querySelectorAll(".lp-tile").forEach(t => t.classList.add("solved"));
      const points = scorePoints();

      // Reveal
      const reveal = document.getElementById("lp-reveal");
      reveal.hidden = false;
      document.getElementById("reveal-label").textContent = currentLM.sub;
      document.getElementById("reveal-title").textContent = currentLM.name;
      document.getElementById("reveal-body").textContent = currentLM.body;
      document.getElementById("reveal-quote").textContent = currentLM.quote;

      // Award
      const newlyDiscovered = !solvedSet.has(currentLM.id);
      if (newlyDiscovered) {
        solvedSet.add(currentLM.id);
        totalPoints += points;
        AudioBus.success();
        Particles.fire(120, { colors: ["#C9A961","#FFE9A8","#CDEBD7","#CFE3F2"] });
      } else {
        AudioBus.success();
      }
      persist();
      buildPicker();
      renderDiscovered();
      updateHUD();
      document.getElementById("btn-next-landmark").hidden = false;

      if (solvedSet.size === LANDMARKS.length) {
        setTimeout(() => finishRound(), 1400);
      }
    }
  }

  function peek() {
    if (solved) return;
    // Briefly show the correct arrangement
    const board = document.getElementById("lp-board");
    const dataURL = svgToDataURL(currentLM.svg);
    const tiles = Array.from(board.querySelectorAll(".lp-tile"));
    tiles.forEach((t, i) => {
      t.dataset.peekPos = t.style.backgroundPosition;
      t.style.backgroundPosition = POSITIONS[i];
      t.classList.add("peeked");
    });
    swaps += 1; // small penalty
    updateHUD();
    AudioBus.tone(720, 0.15, "sine", 0.05);
    setTimeout(() => {
      tiles.forEach((t) => {
        t.style.backgroundPosition = t.dataset.peekPos;
        t.classList.remove("peeked");
      });
    }, 2200);
  }

  function nextLandmark() {
    const i = LANDMARKS.indexOf(currentLM);
    chooseLandmark(LANDMARKS[(i + 1) % LANDMARKS.length]);
  }

  function renderDiscovered() {
    const root = document.getElementById("discovered");
    root.innerHTML = "";
    LANDMARKS.forEach(lm => {
      const found = solvedSet.has(lm.id);
      const row = document.createElement("div");
      row.className = "lp-disc-row" + (found ? " found" : "");
      row.innerHTML = `
        <div class="ic">${found ? lm.svg : `<span style="font-size:18px;">${lm.thumbIc}</span>`}</div>
        <div class="meta">
          <strong>${found ? lm.name : "مَعلَمٌ مَخفي"}</strong>
          <small>${found ? lm.sub : "اِكتَشِف الصُّورَة"}</small>
        </div>
      `;
      root.appendChild(row);
    });
    document.getElementById("lp-pill").textContent = `${solvedSet.size} / ${LANDMARKS.length}`;
  }

  function updateHUD() {
    const correct = order.filter((v, i) => v === i).length;
    document.getElementById("lp-correct").textContent = correct;
    document.getElementById("lp-swaps").textContent = swaps;
    document.getElementById("lp-points").textContent = totalPoints;
    document.getElementById("best").textContent = STORE.bestPoints > 0 ? `${STORE.bestPoints} نقطة` : "—";
  }

  function scorePoints() {
    // Best case: ~12 swaps, optimal up to 8 for adjacent. Give 200 base minus penalty.
    const ideal = 10;
    const penalty = Math.max(0, swaps - ideal) * 8;
    return Math.max(60, 220 - penalty);
  }

  function persist() {
    STORE.solvedIds = Array.from(solvedSet);
    if (totalPoints > (STORE.bestPoints || 0)) STORE.bestPoints = totalPoints;
    Storage.set(STORAGE_KEY, STORE);
  }

  function finishRound() {
    STORE.rounds = (STORE.rounds || 0) + 1;
    Storage.set(STORAGE_KEY, STORE);

    const list = LANDMARKS.map(lm =>
      `<div style="display:grid; grid-template-columns:36px 1fr; gap:10px; padding:5px 0; font-size:13px; border-bottom:1px dashed var(--line); align-items:center;">
        <span style="width:36px; height:36px; border-radius:6px; overflow:hidden; border:1px solid var(--line);">${lm.svg}</span>
        <span><strong>${lm.name}</strong> — <span style="color:var(--muted)">${lm.sub}</span></span>
      </div>`
    ).join("");

    document.getElementById("done-summary").innerHTML = `
      <div style="text-align:center; margin-bottom: var(--s-3);">
        <span style="padding:6px 14px; background:var(--brand); color:#fff; border-radius:var(--r-pill); font-weight:800; font-size:13px;">+${totalPoints} نَقَطَة</span>
      </div>
      ${list}
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 12px; line-height: 1.7;">
        ثَلاثَةُ مَساجِد، وَدُعاءُ كلِّ مُسلِمٍ أن يُصَلِّيَ فيها — اللَّهُمَّ ارزُقنا زِيارَتَها.
      </div>
    `;
    setTimeout(() => Modal.open("done-modal"), 600);
  }

  /* ============ Bind ============ */
  document.getElementById("btn-shuffle").addEventListener("click", shuffleAndRender);
  document.getElementById("btn-peek").addEventListener("click", peek);
  document.getElementById("btn-next-landmark").addEventListener("click", nextLandmark);
  document.getElementById("done-next").addEventListener("click", () => {
    Modal.close("done-modal");
    solvedSet = new Set();
    totalPoints = 0;
    persist();
    buildPicker();
    renderDiscovered();
    chooseLandmark(LANDMARKS[0]);
  });
  Modal.bindClose("done-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  init();
})();
