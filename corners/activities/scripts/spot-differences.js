/* ============================================================
   SPOT DIFFERENCES — الفوارق الخمسة
   ثلاثة مَشاهد SVG، كلُّ مَشهدٍ يَحوي خَمسة فوارق بين A و B.
   ============================================================ */

(function () {
  "use strict";

  /* ============ بناء SVG لكلِّ مَشهد ============ */

  function sceneMosque(side) {
    const A = side === "A";
    return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="m-sky-${side}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1a2845"/>
          <stop offset="1" stop-color="#3d4a72"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#m-sky-${side})"/>

      <!-- stars (diff 3: extra star at 180,55 in A) -->
      <g fill="#FFE9A8" opacity="0.95">
        <circle cx="60"  cy="40" r="1.6"/>
        <circle cx="110" cy="70" r="1.6"/>
        <circle cx="220" cy="35" r="1.6"/>
        <circle cx="270" cy="80" r="1.6"/>
        <circle cx="370" cy="120" r="1.6"/>
        ${A ? '<circle cx="180" cy="55" r="2"/>' : ''}
      </g>

      <!-- moon (diff 1: full in A, crescent in B) -->
      <g transform="translate(335,55)">
        ${A
          ? '<circle r="22" fill="#FFE9A8"/>'
          : '<circle r="22" fill="#FFE9A8"/><circle cx="9" cy="-3" r="20" fill="#1a2845"/>'
        }
      </g>

      <!-- ground -->
      <rect y="240" width="400" height="60" fill="#2a3a5a"/>
      <rect y="238" width="400" height="3" fill="#4a5a7a"/>

      <!-- palm tree (diff 4: 5 fronds A vs 4 fronds B) -->
      <g transform="translate(70,240)">
        <rect x="-4" y="-50" width="8" height="50" fill="#5a3a1a"/>
        <path d="M0,-50 Q-25,-60 -45,-55" stroke="#4a8050" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M0,-50 Q25,-60 45,-55"   stroke="#4a8050" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M0,-50 Q-15,-75 -30,-80" stroke="#4a8050" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M0,-50 Q15,-75 30,-80"   stroke="#4a8050" stroke-width="6" fill="none" stroke-linecap="round"/>
        ${A ? '<path d="M0,-50 Q0,-80 0,-95" stroke="#4a8050" stroke-width="6" fill="none" stroke-linecap="round"/>' : ''}
      </g>

      <!-- mosque -->
      <g transform="translate(160,160)">
        <!-- main building -->
        <rect x="0" y="20" width="120" height="60" fill="#d8c8a8"/>
        <!-- dome (diff 2: blue in A, gold in B) -->
        <path d="M0,20 Q0,-25 60,-25 Q120,-25 120,20 Z" fill="${A ? '#5b7fb5' : '#C9A961'}"/>
        <circle cx="60" cy="-32" r="4" fill="${A ? '#5b7fb5' : '#C9A961'}"/>
        <path d="M58,-32 Q60,-42 62,-32" fill="${A ? '#5b7fb5' : '#C9A961'}"/>
        <!-- door + windows -->
        <path d="M50,80 L50,55 Q60,42 70,55 L70,80 Z" fill="#3a3a3a"/>
        <circle cx="22" cy="50" r="6" fill="#FFE9A8"/>
        <circle cx="98" cy="50" r="6" fill="#FFE9A8"/>
      </g>

      <!-- minaret (right) -->
      <g transform="translate(310,140)">
        <rect x="-5" y="0" width="10" height="100" fill="#d8c8a8"/>
        <path d="M-8,0 L0,-15 L8,0 Z" fill="#d8c8a8"/>
        <circle cx="0" cy="-22" r="3" fill="#d8c8a8"/>
        <!-- flag (diff 5: present in A, absent in B) -->
        ${A ? '<rect x="0" y="-25" width="14" height="8" fill="#4a8050"/><line x1="0" y1="-22" x2="0" y2="-15" stroke="#3a3a3a" stroke-width="1"/>' : ''}
      </g>
    </svg>`;
  }

  function sceneGarden(side) {
    const A = side === "A";
    return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-sky-${side}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#CFE3F2"/>
          <stop offset="1" stop-color="#FFFBF3"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#g-sky-${side})"/>

      <!-- sun (diff 1: A has 8 rays, B has 6) -->
      <g transform="translate(340,55)">
        <circle r="20" fill="#FFE9A8"/>
        <g stroke="#FFE9A8" stroke-width="3" stroke-linecap="round">
          <line x1="-32" y1="0"  x2="-26" y2="0"/>
          <line x1="32"  y1="0"  x2="26"  y2="0"/>
          <line x1="0"   y1="-32" x2="0"  y2="-26"/>
          <line x1="0"   y1="32"  x2="0"  y2="26"/>
          <line x1="-22" y1="-22" x2="-18" y2="-18"/>
          <line x1="22"  y1="22"  x2="18"  y2="18"/>
          ${A ? '<line x1="-22" y1="22" x2="-18" y2="18"/><line x1="22" y1="-22" x2="18" y2="-18"/>' : ''}
        </g>
      </g>

      <!-- cloud (diff 4: bigger in A) -->
      <g transform="translate(80,60)" fill="#FFFFFF">
        ${A
          ? '<ellipse cx="0" cy="0" rx="32" ry="12"/><ellipse cx="-18" cy="-4" rx="16" ry="10"/><ellipse cx="18" cy="-4" rx="18" ry="10"/>'
          : '<ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="-12" cy="-3" rx="11" ry="7"/>'
        }
      </g>

      <!-- ground -->
      <rect y="230" width="400" height="70" fill="#a8d8a0"/>
      <path d="M0,230 Q100,224 200,230 Q300,236 400,228 L400,232 L0,232 Z" fill="#88c080"/>

      <!-- tree -->
      <g transform="translate(120,180)">
        <rect x="-6" y="0" width="12" height="55" fill="#7a4a20"/>
        <circle cx="0" cy="-10" r="38" fill="#5aaa50"/>
        <circle cx="-22" cy="-5" r="22" fill="#5aaa50"/>
        <circle cx="22" cy="-5" r="22" fill="#5aaa50"/>
        <!-- apple (diff 5: present A, absent B) -->
        ${A ? '<circle cx="14" cy="-18" r="5" fill="#d05050"/><path d="M14,-23 L14,-27 L16,-27" stroke="#5a3010" stroke-width="1.5" fill="none"/>' : ''}
        <!-- bird (diff 2: bird in A, none in B) -->
        ${A
          ? '<path d="M-20,-35 Q-13,-40 -6,-35 M-6,-35 Q-2,-32 2,-35" stroke="#3a3a3a" stroke-width="2" fill="none" stroke-linecap="round"/>'
          : ''
        }
      </g>

      <!-- flowers along ground (diff 3: leftmost flower color) -->
      <g transform="translate(0,250)">
        <g transform="translate(60,0)">
          <line x1="0" y1="0" x2="0" y2="-22" stroke="#4a8050" stroke-width="2"/>
          <circle cx="0" cy="-26" r="6" fill="${A ? '#d05050' : '#9e6bd0'}"/>
          <circle cx="0" cy="-26" r="2" fill="#FFE9A8"/>
        </g>
        <g transform="translate(220,0)">
          <line x1="0" y1="0" x2="0" y2="-22" stroke="#4a8050" stroke-width="2"/>
          <circle cx="0" cy="-26" r="6" fill="#FF80B0"/>
          <circle cx="0" cy="-26" r="2" fill="#FFE9A8"/>
        </g>
        <g transform="translate(290,0)">
          <line x1="0" y1="0" x2="0" y2="-18" stroke="#4a8050" stroke-width="2"/>
          <circle cx="0" cy="-22" r="5" fill="#FFE9A8"/>
          <circle cx="0" cy="-22" r="2" fill="#d05050"/>
        </g>
      </g>

      <!-- bush bottom right -->
      <g transform="translate(360,230)">
        <ellipse cx="0" cy="0" rx="30" ry="14" fill="#5aaa50"/>
      </g>
    </svg>`;
  }

  function sceneOasis(side) {
    const A = side === "A";
    return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="o-sky-${side}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#FFDFB0"/>
          <stop offset="0.7" stop-color="#FFF0D6"/>
        </linearGradient>
        <linearGradient id="o-sand-${side}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#E8C58A"/>
          <stop offset="1" stop-color="#C9A063"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#o-sky-${side})"/>

      <!-- sun -->
      <circle cx="65" cy="65" r="26" fill="#FFB060"/>
      <circle cx="65" cy="65" r="20" fill="#FFE9A8"/>

      <!-- cloud (diff 5: cloud in A, none in B) -->
      ${A
        ? '<g transform="translate(200,55)" fill="#FFFFFF" opacity="0.85"><ellipse cx="0" cy="0" rx="24" ry="9"/><ellipse cx="-14" cy="-3" rx="12" ry="7"/></g>'
        : ''
      }

      <!-- bird (diff 3: bird in A, none in B) -->
      ${A
        ? '<g transform="translate(290,80)" stroke="#5a3a1a" stroke-width="2" fill="none" stroke-linecap="round"><path d="M-10,0 Q-5,-6 0,0 M0,0 Q5,-6 10,0"/></g>'
        : ''
      }

      <!-- dune background -->
      <path d="M0,200 Q100,170 200,185 Q300,200 400,175 L400,300 L0,300 Z" fill="url(#o-sand-${side})"/>

      <!-- water -->
      <ellipse cx="200" cy="245" rx="80" ry="14" fill="#5b9fcf"/>
      <ellipse cx="200" cy="244" rx="80" ry="14" fill="#3b8fbf"/>
      <path d="M150,243 Q170,240 190,243 M210,247 Q230,244 250,247" stroke="#FFFFFF" stroke-width="1.5" fill="none" opacity="0.7"/>

      <!-- palm trees (diff 2: 3 trees in A, 2 in B — middle tree absent in B) -->
      <g transform="translate(95,225)">
        <rect x="-4" y="-55" width="8" height="55" fill="#6a3a1a"/>
        <path d="M0,-55 Q-20,-65 -38,-58" stroke="#4a8050" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M0,-55 Q20,-65 38,-58"   stroke="#4a8050" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M0,-55 Q-12,-80 -22,-82" stroke="#4a8050" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M0,-55 Q12,-80 22,-82"   stroke="#4a8050" stroke-width="5" fill="none" stroke-linecap="round"/>
      </g>
      ${A ? `<g transform="translate(140,225)">
        <rect x="-3" y="-45" width="6" height="45" fill="#6a3a1a"/>
        <path d="M0,-45 Q-15,-55 -28,-50" stroke="#4a8050" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M0,-45 Q15,-55 28,-50"   stroke="#4a8050" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M0,-45 Q-10,-65 -18,-68" stroke="#4a8050" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M0,-45 Q10,-65 18,-68"   stroke="#4a8050" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>` : ''}
      <g transform="translate(320,225)">
        <rect x="-4" y="-55" width="8" height="55" fill="#6a3a1a"/>
        <path d="M0,-55 Q-20,-65 -38,-58" stroke="#4a8050" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M0,-55 Q20,-65 38,-58"   stroke="#4a8050" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M0,-55 Q-12,-80 -22,-82" stroke="#4a8050" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M0,-55 Q12,-80 22,-82"   stroke="#4a8050" stroke-width="5" fill="none" stroke-linecap="round"/>
      </g>

      <!-- camel (diff 1: A=2 humps, B=1 hump) -->
      <g transform="translate(230,205)">
        <ellipse cx="0" cy="0" rx="32" ry="12" fill="#a07040"/>
        <!-- humps -->
        ${A
          ? '<path d="M-22,-2 Q-15,-18 -6,-2 Z" fill="#a07040"/><path d="M5,-2 Q14,-20 22,-2 Z" fill="#a07040"/>'
          : '<path d="M-12,-2 Q0,-22 12,-2 Z" fill="#a07040"/>'
        }
        <!-- neck + head -->
        <path d="M-30,-2 Q-40,-10 -38,-22 L-32,-22 Q-35,-12 -28,-4 Z" fill="#a07040"/>
        <circle cx="-37" cy="-22" r="5" fill="#a07040"/>
        <circle cx="-39" cy="-22" r="0.8" fill="#1F2540"/>
        <!-- legs -->
        <rect x="-18" y="9" width="3" height="18" fill="#a07040"/>
        <rect x="-10" y="9" width="3" height="18" fill="#a07040"/>
        <rect x="10" y="9" width="3" height="18" fill="#a07040"/>
        <rect x="18" y="9" width="3" height="18" fill="#a07040"/>
        <!-- tail -->
        <path d="M30,-2 Q38,2 36,12" stroke="#a07040" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>

      <!-- stones (diff 4: A=2 stones at left, B=3 stones) -->
      <g transform="translate(0,260)">
        <ellipse cx="50" cy="0" rx="9" ry="4" fill="#9a7050"/>
        <ellipse cx="68" cy="-2" rx="6" ry="3" fill="#7a5030"/>
        ${!A ? '<ellipse cx="82" cy="-1" rx="5" ry="2.5" fill="#7a5030"/>' : ''}
      </g>
    </svg>`;
  }

  /* ============ تَعريف الفوارق لكلِّ مَشهد ============ */
  // x,y as % of the diff-side container
  const SCENES = [
    {
      id: "mosque",
      name: "مَسجدٌ في الليل",
      render: sceneMosque,
      diffs: [
        { id: 1, label: "القمر",   x: 84, y: 18 },
        { id: 2, label: "قبَّة المسجد", x: 55, y: 45 },
        { id: 3, label: "نجمة إضافية", x: 45, y: 18 },
        { id: 4, label: "سَعَفة النَّخلة", x: 17.5, y: 47 },
        { id: 5, label: "علم المئذنة", x: 80, y: 36 },
      ],
    },
    {
      id: "garden",
      name: "حَديقةٌ بالنَّهار",
      render: sceneGarden,
      diffs: [
        { id: 1, label: "أشعَّة الشَّمس",     x: 85, y: 18 },
        { id: 2, label: "العُصفور",          x: 25, y: 47 },
        { id: 3, label: "لون الزَّهرة",       x: 15, y: 75 },
        { id: 4, label: "حَجم السَّحابة",     x: 20, y: 20 },
        { id: 5, label: "ثَمَرَة التُّفَّاح",  x: 33, y: 54 },
      ],
    },
    {
      id: "oasis",
      name: "واحَةُ الصَّحراء",
      render: sceneOasis,
      diffs: [
        { id: 1, label: "حُدبَتا الجَمَل",   x: 56, y: 65 },
        { id: 2, label: "نَخلة في الوَسط", x: 35, y: 60 },
        { id: 3, label: "طَير في السَّماء", x: 72, y: 27 },
        { id: 4, label: "حَجَر إضافي",       x: 17, y: 87 },
        { id: 5, label: "سَحابةٌ بَيضاء",    x: 50, y: 18 },
      ],
    },
  ];

  const HIT_R = 28; // px

  /* ============ Engine ============ */
  const STORAGE_KEY = "mk_diff_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  let sceneIdx = 0;
  let foundThisScene = 0;
  let missThisScene = 0;
  let totalStars = 0;
  let hintUsed = false;

  function loadScene() {
    foundThisScene = 0;
    missThisScene = 0;
    hintUsed = false;

    const sc = SCENES[sceneIdx];
    const sideA = document.getElementById("side-A");
    const sideB = document.getElementById("side-B");
    // keep labels, replace SVG/hits
    sideA.querySelectorAll("svg, .diff-hit").forEach(n => n.remove());
    sideB.querySelectorAll("svg, .diff-hit").forEach(n => n.remove());

    sideA.insertAdjacentHTML("beforeend", sc.render("A"));
    sideB.insertAdjacentHTML("beforeend", sc.render("B"));

    sc.diffs.forEach(d => {
      [sideA, sideB].forEach(side => {
        const hit = document.createElement("div");
        hit.className = "diff-hit";
        hit.style.left = d.x + "%";
        hit.style.top = d.y + "%";
        hit.style.width = (HIT_R * 2) + "px";
        hit.style.height = (HIT_R * 2) + "px";
        hit.dataset.diff = d.id;
        side.appendChild(hit);
      });
    });

    // background click on diff-side (for wrong taps)
    [sideA, sideB].forEach(side => {
      if (!side._wired) {
        side.addEventListener("click", (e) => {
          if (e.target.classList.contains("diff-hit")) {
            const did = e.target.dataset.diff;
            if (e.target.classList.contains("found")) return;
            markFound(did);
          } else {
            // wrong click
            const rect = side.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const ghost = document.createElement("div");
            ghost.className = "diff-hit wrong";
            ghost.style.left = (x / rect.width) * 100 + "%";
            ghost.style.top = (y / rect.height) * 100 + "%";
            ghost.style.width = "44px"; ghost.style.height = "44px";
            side.appendChild(ghost);
            setTimeout(() => ghost.remove(), 500);
            missThisScene++;
            AudioBus.fail();
            updateUI();
          }
        });
        side._wired = true;
      }
    });

    // progress pills
    const pills = document.getElementById("prog-pills");
    pills.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const d = document.createElement("div");
      d.className = "pill-dot";
      pills.appendChild(d);
    }

    updateUI();
    renderScenesList();
  }

  function markFound(diffId) {
    document.querySelectorAll(`.diff-hit[data-diff="${diffId}"]`).forEach(el => el.classList.add("found"));
    foundThisScene++;
    AudioBus.pop();
    Particles.fire(20, { colors: ["#CDEBD7","#FFE9A8"] });

    // mark progress dot
    const dots = document.querySelectorAll("#prog-pills .pill-dot");
    if (dots[foundThisScene - 1]) dots[foundThisScene - 1].classList.add("found");

    if (foundThisScene >= SCENES[sceneIdx].diffs.length) {
      onSceneDone();
    }
    updateUI();
  }

  function onSceneDone() {
    const sc = SCENES[sceneIdx];
    let s = 3;
    if (missThisScene >= 2) s = 2;
    if (missThisScene >= 5) s = 1;
    if (hintUsed) s = Math.max(1, s - 1);
    sc._done = true; sc._stars = s;
    totalStars += s;
    AudioBus.success();
    Particles.fire(100, { colors: ["#CDEBD7","#CFE3F2","#FFE9A8"] });
    setTimeout(() => {
      if (sceneIdx + 1 < SCENES.length) {
        sceneIdx++; loadScene();
      } else {
        finishGame();
      }
    }, 1200);
  }

  function useHint() {
    if (hintUsed) return;
    const sc = SCENES[sceneIdx];
    const unfound = sc.diffs.find(d => {
      const el = document.querySelector(`.diff-hit[data-diff="${d.id}"]`);
      return el && !el.classList.contains("found");
    });
    if (!unfound) return;
    // pulse the hit areas briefly
    document.querySelectorAll(`.diff-hit[data-diff="${unfound.id}"]`).forEach(el => {
      el.style.boxShadow = "0 0 0 4px rgba(255, 233, 168, 0.7)";
      el.style.background = "rgba(255, 233, 168, 0.25)";
      el.style.border = "3px dashed #8A6510";
      setTimeout(() => {
        if (!el.classList.contains("found")) {
          el.style.boxShadow = ""; el.style.background = ""; el.style.border = "";
        }
      }, 2000);
    });
    hintUsed = true;
    AudioBus.tick(540);
    document.getElementById("btn-hint").disabled = true;
    document.getElementById("btn-hint").style.opacity = "0.5";
  }

  function skipScene() {
    if (sceneIdx + 1 < SCENES.length) { sceneIdx++; loadScene(); }
    else finishGame();
  }

  function updateUI() {
    document.getElementById("d-scene").textContent = sceneIdx + 1;
    document.getElementById("d-found").textContent = foundThisScene;
    document.getElementById("d-miss").textContent = missThisScene;
    document.getElementById("d-stars").textContent = totalStars;
    document.getElementById("scenes-pill").textContent =
      `${SCENES.filter(s => s._done).length}/${SCENES.length}`;
    document.getElementById("best").textContent = STORE.best > 0 ? `${STORE.best} ⭐` : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function renderScenesList() {
    const list = document.getElementById("scenes-list");
    list.innerHTML = "";
    SCENES.forEach((sc, i) => {
      const row = document.createElement("div");
      const cls = sc._done ? "done" : (i === sceneIdx ? "current" : "");
      row.className = "diff-scene-row " + cls;
      row.innerHTML = `
        <span class="scene-name">${i+1}. ${sc.name}</span>
        <span class="scene-stars">${sc._done ? "★".repeat(sc._stars) + "☆".repeat(3-sc._stars) : "☆☆☆"}</span>
      `;
      list.appendChild(row);
    });
  }

  function finishGame() {
    if (totalStars > STORE.best) STORE.best = totalStars;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(160);
    const max = SCENES.length * 3;
    const rows = SCENES.map(sc =>
      `<div style="display:flex; justify-content:space-between; padding: 6px 0; border-bottom: 1px solid var(--line);">
        <span style="font-weight:700;">${sc.name}</span>
        <span>${sc._done ? "★".repeat(sc._stars) + "☆".repeat(3-sc._stars) : "—"}</span>
      </div>`
    ).join("");
    document.getElementById("win-summary").innerHTML = `
      <div>أتممتَ <strong>${SCENES.filter(s=>s._done).length}</strong> من <strong>${SCENES.length}</strong> مَشاهد بِـ <strong>${totalStars}</strong> نَجمة من ${max}.</div>
      <div style="margin-top: var(--s-3);">${rows}</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        التَّأمُّل في الفوارق تَمرينٌ للعَين والذهن. الكَمال لله وَحده، ومع ذلك فالتَّقارُبُ آيةٌ من آيات الخلق.
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  function newGame() {
    SCENES.forEach(s => { delete s._done; delete s._stars; });
    sceneIdx = 0; totalStars = 0;
    loadScene(); updateUI();
  }

  /* Bind */
  document.getElementById("btn-hint").addEventListener("click", useHint);
  document.getElementById("btn-skip").addEventListener("click", skipScene);
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(newGame, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  loadScene();
  updateUI();
})();
