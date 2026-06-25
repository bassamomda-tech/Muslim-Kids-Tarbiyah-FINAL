/* ============================================================
   MEMORY GAME — ذاكرة الأسماء الحسنى
   منطق لعبة المطابقة: خلط، قلب، تحقق، عداد حركات ووقت
   ============================================================ */

(function () {
  "use strict";

  /* ---------- بيانات الأسماء الحسنى ---------- */
  const NAMES = [
    { ar: "الرَّحْمٰن",  meaning: "الواسع الرحمة بجميع الخلائق",     color: "#FFD9C2", ink: "#B5612A" },
    { ar: "الرَّحِيم",  meaning: "الذي يرحم المؤمنين خاصة",          color: "#CDEBD7", ink: "#2F7A52" },
    { ar: "الْمَلِك",     meaning: "المالك لكل شيء، المُتصرّف فيه",   color: "#E0D5F2", ink: "#5A3F94" },
    { ar: "الْقُدُّوس",  meaning: "الطاهر المنزّه عن كل نقص",         color: "#CFE3F2", ink: "#2E5F8A" },
    { ar: "السَّلَام",    meaning: "السالم من كل عيب، المُسلِّم عباده", color: "#FFE9A8", ink: "#8A6510" },
    { ar: "الْكَرِيم",    meaning: "كثير الخير والعطاء بلا حدّ",        color: "#E8A5A5", ink: "#7A2F2F" },
    { ar: "الْغَفُور",    meaning: "الذي يستر الذنوب ويعفو عن العباد",  color: "#DCE9DC", ink: "#2E4A3F" },
    { ar: "الْوَدُود",    meaning: "المُحِبّ لعباده الصالحين",          color: "#FFCFB0", ink: "#9A4A1A" },
  ];

  /* ---------- حالة اللعبة + التخزين ---------- */
  const STORAGE_KEY = "mk_memory_state_v1";
  const state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { bestMoves: null, bestTime: null, gamesWon: 0, muted: false };
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- متغيرات الجولة ---------- */
  let deck = [];           // مصفوفة البطاقات المخلوطة (كل اسم مرتين)
  let flipped = [];        // البطاقات المقلوبة حالياً
  let matched = new Set(); // المؤشرات إلى الأسماء المُطابقَة
  let moves = 0;
  let startTime = 0;
  let timerInterval = null;
  let lock = false;        // قفل أثناء انتظار قلب البطاقات الخاطئة

  /* ---------- مرجعيات DOM ---------- */
  const board = document.getElementById("memory-board");
  const namesList = document.getElementById("names-list");
  const movesEl = document.getElementById("stat-moves");
  const timeEl = document.getElementById("stat-time");
  const matchesEl = document.getElementById("stat-matches");
  const bestEl = document.getElementById("stat-best");

  /* ============================================================
     خلط (Fisher-Yates)
     ============================================================ */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ============================================================
     بدء جولة جديدة
     ============================================================ */
  function newGame() {
    // إنشاء deck: كل اسم مرتين، ثم خلط
    deck = shuffle(
      NAMES.flatMap((_, i) => [{ idx: i }, { idx: i }])
    );
    flipped = [];
    matched = new Set();
    moves = 0;
    startTime = Date.now();
    lock = false;

    renderBoard();
    renderNames();
    updateUI();

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTime, 200);
  }

  /* ============================================================
     رسم اللوحة
     ============================================================ */
  function renderBoard() {
    board.innerHTML = "";
    deck.forEach((card, pos) => {
      const data = NAMES[card.idx];
      const el = document.createElement("div");
      el.className = "mem-card";
      el.dataset.pos = pos;
      el.dataset.idx = card.idx;
      el.innerHTML = `
        <div class="mem-card-face mem-card-back">
          <div class="star">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 6.6L21 9l-5 4.6L17.2 21 12 17.4 6.8 21 8 13.6 3 9l6.6-.4z"/></svg>
          </div>
        </div>
        <div class="mem-card-face mem-card-front" style="background:${data.color}; color:${data.ink}; border-color:${data.ink}">
          <div class="name">${data.ar}</div>
          <div class="num-pill">${String(card.idx + 1).padStart(2, "0")}</div>
        </div>
      `;
      el.addEventListener("click", () => onCardClick(pos));
      board.appendChild(el);
    });
  }

  /* ============================================================
     قائمة الأسماء (تظهر التقدم)
     ============================================================ */
  function renderNames() {
    namesList.innerHTML = NAMES.map((n, i) => `
      <div class="name-row ${matched.has(i) ? 'matched' : ''}" data-idx="${i}">
        <span class="swatch" style="background:${n.color}"></span>
        <div style="flex-grow:1;">
          <div class="name-ar">${n.ar}</div>
          <div class="name-meaning">${matched.has(i) ? n.meaning : '———'}</div>
        </div>
        <span class="check-tick">✓</span>
      </div>
    `).join("");
  }

  /* ============================================================
     نقر على بطاقة
     ============================================================ */
  function onCardClick(pos) {
    if (lock) return;
    const card = deck[pos];
    if (matched.has(card.idx)) return;
    if (flipped.some(f => f.pos === pos)) return; // مقلوبة بالفعل

    // قلب البطاقة
    const el = board.querySelector(`.mem-card[data-pos="${pos}"]`);
    el.classList.add("flipped");
    flipped.push({ pos, idx: card.idx });
    AudioBus.tick(720);

    if (flipped.length === 2) {
      moves++;
      updateUI();
      checkMatch();
    }
  }

  /* ============================================================
     التحقق من المطابقة
     ============================================================ */
  function checkMatch() {
    const [a, b] = flipped;
    if (a.idx === b.idx) {
      // مطابقة!
      matched.add(a.idx);
      flipped.forEach(f => {
        const el = board.querySelector(`.mem-card[data-pos="${f.pos}"]`);
        el.classList.add("matched");
      });
      AudioBus.chord([523.25, 659.25, 783.99], 0.3);
      flipped = [];
      renderNames();
      updateUI();

      // فحص الفوز
      if (matched.size === NAMES.length) onWin();
    } else {
      // غير مطابقة — قلب عكسي بعد لحظة
      lock = true;
      AudioBus.tone(220, 0.18, "triangle", 0.06);
      setTimeout(() => {
        flipped.forEach(f => {
          const el = board.querySelector(`.mem-card[data-pos="${f.pos}"]`);
          el.classList.remove("flipped");
          el.classList.add("shake");
          setTimeout(() => el.classList.remove("shake"), 400);
        });
        flipped = [];
        lock = false;
      }, 900);
    }
  }

  /* ============================================================
     نهاية الجولة + الفوز
     ============================================================ */
  function onWin() {
    clearInterval(timerInterval);
    const elapsed = Math.floor((Date.now() - startTime) / 1000);

    // تحديث أفضل النتائج
    let newRecord = false;
    if (state.bestMoves === null || moves < state.bestMoves) {
      state.bestMoves = moves; newRecord = true;
    }
    if (state.bestTime === null || elapsed < state.bestTime) {
      state.bestTime = elapsed; newRecord = true;
    }
    state.gamesWon++;
    saveState();
    updateUI();

    Particles.fire(120);

    setTimeout(() => {
      document.getElementById("win-moves").textContent = moves;
      document.getElementById("win-time").textContent = formatTime(elapsed);
      document.getElementById("win-best-moves").textContent = state.bestMoves;
      document.getElementById("win-best-time").textContent = formatTime(state.bestTime);
      document.getElementById("win-record").style.display = newRecord ? "" : "none";
      Modal.open("win-modal");
    }, 700);
  }

  /* ============================================================
     مساعدات
     ============================================================ */
  function formatTime(sec) {
    if (sec == null) return "—";
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  function updateTime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeEl.textContent = formatTime(elapsed);
  }

  function updateUI() {
    movesEl.textContent = moves;
    matchesEl.textContent = `${matched.size}/${NAMES.length}`;
    bestEl.textContent = state.bestMoves != null
      ? `${state.bestMoves} حركة · ${formatTime(state.bestTime)}`
      : "—";
  }

  /* ============================================================
     ربط أحداث + بدء
     ============================================================ */
  document.getElementById("replay-btn").addEventListener("click", newGame);
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(newGame, 300);
  });
  document.getElementById("win-dismiss").addEventListener("click", () => Modal.close("win-modal"));

  // كتم الصوت
  const muteBtn = document.getElementById("mute-btn");
  AudioBus.setMuted(state.muted);
  AudioBus.bindButton(muteBtn, (val) => { state.muted = val; saveState(); });

  // إعادة الضبط
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("هل تريد إعادة ضبط أفضل النتائج؟")) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });

  newGame();
})();
