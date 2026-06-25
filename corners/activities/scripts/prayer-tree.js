/* ============================================================
   PRAYER TREE — شجرة تتبع الصلاة
   ============================================================ */

(function () {
  "use strict";

  const PRAYERS = [
    { id: "fajr",    name: "الفَجر",   time: "Fajr",    icon: "☼", color: "#FF9F70" },
    { id: "dhuhr",   name: "الظُّهر",  time: "Dhuhr",   icon: "☀", color: "#F2C24A" },
    { id: "asr",     name: "العَصر",   time: "Asr",     icon: "🍎", color: "#D05050" },
    { id: "maghrib", name: "المَغرب",  time: "Maghrib", icon: "✦", color: "#C46A4A" },
    { id: "isha",    name: "العِشاء",  time: "Isha",    icon: "☾", color: "#5A3F94" },
  ];

  const STORAGE_KEY = "mk_prayertree_v1";
  const STORE = Storage.get(STORAGE_KEY, { days: {}, bestStreak: 0 });

  // Current viewed date (yyyy-mm-dd)
  let curDate = todayKey();
  let weekAnchor = todayKey(); // The Sunday of the week being shown

  function todayKey(offset = 0) {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + offset);
    return d.toISOString().slice(0, 10);
  }
  function dateFromKey(k) {
    const [y, m, d] = k.split("-").map(Number);
    return new Date(y, m - 1, d, 12);
  }
  function fmtDate(k) {
    const d = dateFromKey(k);
    const months = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
    const today = todayKey();
    if (k === today) return "اليوم";
    if (k === todayKey(-1)) return "الأمس";
    return `${d.getDate()} ${months[d.getMonth()]}`;
  }

  function getDay(key) {
    if (!STORE.days[key]) STORE.days[key] = { fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false };
    return STORE.days[key];
  }
  function countDay(key) {
    const d = STORE.days[key];
    if (!d) return 0;
    return PRAYERS.reduce((s, p) => s + (d[p.id] ? 1 : 0), 0);
  }

  /* ============ Tree SVG ============ */
  function buildTree() {
    const svg = document.getElementById("tree-svg");
    svg.innerHTML = `
      <!-- ground -->
      <ellipse cx="250" cy="370" rx="180" ry="14" fill="#a8c898" opacity="0.6"/>
      <path d="M70 370 Q250 350 430 370" stroke="#88a880" stroke-width="2" fill="none"/>

      <!-- distant hill -->
      <path d="M0 360 Q150 330 250 350 Q350 365 500 340 L500 400 L0 400 Z" fill="#c8d8b8" opacity="0.5"/>

      <!-- trunk -->
      <path d="M232 370 Q236 280 240 240 Q244 200 248 170 Q252 130 256 100 Q260 80 252 60"
            stroke="#6a4a20" stroke-width="20" stroke-linecap="round" fill="none"/>
      <path d="M232 370 Q236 280 240 240 Q244 200 248 170 Q252 130 256 100 Q260 80 252 60"
            stroke="#5a3a18" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.4"/>

      <!-- branches -->
      <path d="M248 200 Q220 175 175 165" stroke="#6a4a20" stroke-width="9" stroke-linecap="round" fill="none"/>
      <path d="M248 165 Q280 145 320 140" stroke="#6a4a20" stroke-width="9" stroke-linecap="round" fill="none"/>
      <path d="M254 130 Q220 110 185 105" stroke="#6a4a20" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M256 100 Q288 85 320 80" stroke="#6a4a20" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M250 70 Q240 50 235 35" stroke="#6a4a20" stroke-width="5" stroke-linecap="round" fill="none"/>

      <!-- Decorations: FAJR — sunrise + small birds (on horizon and around tree base) -->
      <g id="dec-fajr">
        <!-- Rising sun -->
        <circle class="pt-leaf" data-prayer="fajr" cx="80" cy="320" r="22" fill="#FFCC70"/>
        <g class="pt-leaf" data-prayer="fajr" stroke="#FFCC70" stroke-width="2.5" stroke-linecap="round">
          <line x1="80" y1="285" x2="80" y2="278"/>
          <line x1="50" y1="320" x2="43" y2="320"/>
          <line x1="62" y1="295" x2="57" y2="290"/>
          <line x1="98" y1="295" x2="103" y2="290"/>
          <line x1="110" y1="320" x2="117" y2="320"/>
        </g>
        <!-- two birds -->
        <path class="pt-bird" data-prayer="fajr" d="M150 90 Q156 84 162 90 M162 90 Q168 84 174 90" stroke="#5a3a1a" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path class="pt-bird" data-prayer="fajr" d="M340 120 Q346 114 352 120 M352 120 Q358 114 364 120" stroke="#5a3a1a" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      </g>

      <!-- DHUHR — bright yellow leaves (full noon) -->
      <g id="dec-dhuhr">
        ${leafCluster("dhuhr", [
          [175, 165], [195, 150], [165, 145], [185, 135],
          [320, 140], [340, 130], [305, 130], [330, 155]
        ], "#F2C24A", "#D9A832")}
      </g>

      <!-- ASR — apples (red fruit) -->
      <g id="dec-asr">
        ${fruitCluster("asr", [
          [180, 175], [200, 160], [330, 145], [310, 155]
        ], "#D05050", "#5a3010")}
      </g>

      <!-- MAGHRIB — lanterns (warm orange/gold hanging) -->
      <g id="dec-maghrib">
        ${lanternCluster("maghrib", [
          [185, 110], [210, 130], [310, 105], [285, 130], [240, 50]
        ])}
      </g>

      <!-- ISHA — stars + crescent moon in sky -->
      <g id="dec-isha">
        <g class="pt-leaf" data-prayer="isha">
          <circle cx="410" cy="80" r="20" fill="#FFE9A8"/>
          <circle cx="416" cy="76" r="17" fill="#FFF6E0"/>
        </g>
        ${starCluster("isha", [
          [100, 60], [150, 40], [380, 55], [450, 130], [50, 130],
          [220, 50], [400, 30]
        ])}
      </g>

      <!-- soft grass blades at base -->
      <g fill="#88a880">
        <path d="M180 370 L182 363 L184 370 Z"/>
        <path d="M310 370 L312 363 L314 370 Z"/>
        <path d="M340 370 L342 360 L344 370 Z"/>
        <path d="M150 370 L152 363 L154 370 Z"/>
      </g>
    `;
  }

  function leafCluster(prayer, points, fill, stroke) {
    return points.map(([x,y], i) => `
      <ellipse class="pt-leaf" data-prayer="${prayer}" cx="${x}" cy="${y}" rx="11" ry="7"
        fill="${fill}" stroke="${stroke}" stroke-width="1.2"
        transform="rotate(${(i*23)%70 - 35} ${x} ${y})"/>
    `).join("");
  }
  function fruitCluster(prayer, points, fill, stem) {
    return points.map(([x,y]) => `
      <g class="pt-fruit" data-prayer="${prayer}" transform="translate(${x} ${y})">
        <circle cx="0" cy="0" r="8" fill="${fill}"/>
        <ellipse cx="-2" cy="-3" rx="2.5" ry="1.5" fill="rgba(255,255,255,0.5)"/>
        <path d="M0 -8 L0 -12 L3 -13" stroke="${stem}" stroke-width="1.5" fill="none"/>
      </g>
    `).join("");
  }
  function lanternCluster(prayer, points) {
    return points.map(([x,y]) => `
      <g class="pt-lantern" data-prayer="${prayer}" transform="translate(${x} ${y})">
        <line x1="0" y1="-12" x2="0" y2="-5" stroke="#5a3a18" stroke-width="1.2"/>
        <ellipse cx="0" cy="0" rx="7" ry="9" fill="#E8964A"/>
        <ellipse cx="0" cy="0" rx="4" ry="6" fill="#FFE090"/>
        <rect x="-7" y="-5" width="14" height="2" fill="#5a3a18"/>
        <rect x="-7" y="3" width="14" height="2" fill="#5a3a18"/>
      </g>
    `).join("");
  }
  function starCluster(prayer, points) {
    return points.map(([x,y]) => `
      <g class="pt-star" data-prayer="${prayer}" transform="translate(${x} ${y})">
        <path d="M0 -5 L1.5 -1.5 L5 0 L1.5 1.5 L0 5 L-1.5 1.5 L-5 0 L-1.5 -1.5 Z" fill="#FFE9A8"/>
      </g>
    `).join("");
  }

  /* ============ Render & Sync ============ */
  function syncTree(prayers) {
    PRAYERS.forEach(p => {
      const on = prayers[p.id];
      document.querySelectorAll(`#tree-svg [data-prayer="${p.id}"]`).forEach(el => {
        el.classList.toggle("on", !!on);
      });
    });
  }

  function renderPrayers() {
    const root = document.getElementById("prayers");
    const day = getDay(curDate);
    root.innerHTML = "";
    PRAYERS.forEach(p => {
      const el = document.createElement("div");
      const done = !!day[p.id];
      el.className = "pt-prayer" + (done ? " done" : "");
      el.innerHTML = `
        <div class="icon">${done
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>`
          : `<span style="font-size:18px;">${p.icon}</span>`
        }</div>
        <span class="name">${p.name}</span>
        <span class="time">${p.time}</span>
      `;
      el.addEventListener("click", () => togglePrayer(p.id));
      root.appendChild(el);
    });
  }

  function togglePrayer(id) {
    const day = getDay(curDate);
    day[id] = !day[id];
    Storage.set(STORAGE_KEY, STORE);
    syncTree(day);
    renderPrayers();
    if (day[id]) AudioBus.pop();
    else AudioBus.tick(440);
    updateHUD();
    renderWeek();

    // celebrate full day
    if (countDay(curDate) === 5) {
      celebrateFullDay();
    }
  }

  function celebrateFullDay() {
    Particles.fire(140, { colors: ["#FFE9A8","#E0D5F2","#FFD9C2","#CDEBD7"] });
    AudioBus.success();
    const streak = computeStreak();
    document.getElementById("win-summary").innerHTML = `
      صَلَّيتَ الصَّلواتِ الخَمسَ كاملةً اليوم! بارك الله فيك.
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-2); margin-top: var(--s-3);">
        <div><strong>السِّلسلة</strong>${streak} يوم</div>
        <div><strong>أيَّامٌ كاملة</strong>${countFullDays()}</div>
        <div><strong>أفضل سِلسلة</strong>${STORE.bestStreak}</div>
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 600);
  }

  function computeStreak() {
    // count backwards from today: how many consecutive days are 5/5
    let streak = 0;
    let i = 0;
    while (i < 365) {
      const k = todayKey(-i);
      if (countDay(k) >= 5) streak++;
      else break;
      i++;
    }
    if (streak > STORE.bestStreak) STORE.bestStreak = streak;
    Storage.set(STORAGE_KEY, STORE);
    return streak;
  }
  function countFullDays() {
    return Object.keys(STORE.days).filter(k => countDay(k) >= 5).length;
  }
  function countTotalPrayers() {
    return Object.keys(STORE.days).reduce((s, k) => s + countDay(k), 0);
  }

  function updateHUD() {
    document.getElementById("t-today-count").textContent = countDay(curDate);
    document.getElementById("t-streak").textContent = computeStreak();
    document.getElementById("t-full").textContent = countFullDays();
    document.getElementById("t-total").textContent = countTotalPrayers();
    document.getElementById("best").textContent = STORE.bestStreak > 0 ? `${STORE.bestStreak} يوم` : "—";
    document.getElementById("date-pill").textContent = fmtDate(curDate);
  }

  /* ============ Week History ============ */
  function renderWeek() {
    const root = document.getElementById("week-grid");
    root.innerHTML = "";
    const days = ["أحد","اثن","ثلاث","أرب","خميس","جُم","سبت"];
    const today = todayKey();
    // 7 days ending today
    let totalDone = 0;
    for (let i = 6; i >= 0; i--) {
      const k = todayKey(-i);
      const d = dateFromKey(k);
      const done = countDay(k);
      totalDone += done;
      const cell = document.createElement("div");
      cell.className = "pt-day"
        + (k === today ? " today" : "")
        + (k === curDate ? " selected" : "");
      cell.innerHTML = `
        <div class="day-name">${days[d.getDay()]}</div>
        <div class="day-num">${d.getDate()}</div>
        <div class="day-pills">
          ${PRAYERS.map((p, j) =>
            `<div class="p${getDay(k)[p.id] ? " on" : ""}"></div>`).join("")}
        </div>
      `;
      cell.addEventListener("click", () => {
        curDate = k;
        renderAll();
      });
      root.appendChild(cell);
    }
    document.getElementById("week-pill").textContent = `${totalDone}/35`;
  }

  function renderAll() {
    syncTree(getDay(curDate));
    renderPrayers();
    updateHUD();
    renderWeek();
  }

  /* ============ Bind ============ */
  document.getElementById("prev-day").addEventListener("click", () => {
    const d = dateFromKey(curDate);
    d.setDate(d.getDate() - 1);
    curDate = d.toISOString().slice(0, 10);
    renderAll();
  });
  document.getElementById("next-day").addEventListener("click", () => {
    if (curDate >= todayKey()) return;
    const d = dateFromKey(curDate);
    d.setDate(d.getDate() + 1);
    curDate = d.toISOString().slice(0, 10);
    renderAll();
  });
  document.getElementById("today-btn").addEventListener("click", () => {
    curDate = todayKey();
    renderAll();
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع بيانات التَّتَبُّع؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Init ============ */
  buildTree();
  renderAll();
})();
