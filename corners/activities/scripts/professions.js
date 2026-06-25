/* ============================================================
   PROPHET PROFESSIONS — أصحاب المهن النبوية
   Matching pairs (memory) — Prophet ↔ Profession
   ============================================================ */

(function () {
  "use strict";

  const PAIRS = [
    {
      id: "dawud",
      prophet: "داود ﷺ", prophetSub: "Dāwūd",
      job: "صانِعُ الدُّروع", jobSub: "الحَدّاد",
      ayah: "«وَعَلَّمْنَاهُ صَنْعَةَ لَبُوسٍ لَّكُمْ» — الأنبياء 80",
      icP: G.quiz,
      icJ: G.tool,
    },
    {
      id: "nuh",
      prophet: "نوح ﷺ", prophetSub: "Nūḥ",
      job: "نَجّارُ السَّفينة", jobSub: "النَّجّار",
      ayah: "«وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا» — هود 37",
      icP: G.quiz,
      icJ: G.lab,
    },
    {
      id: "idris",
      prophet: "إدريس ﷺ", prophetSub: "Idrīs",
      job: "خَيّاطُ الثِّياب", jobSub: "الخَيّاط",
      ayah: "أَوَّلُ مَن خاطَ الثَّوبَ ولَبِسَه — عن ابن عباس",
      icP: G.quiz,
      icJ: G.carpet,
    },
    {
      id: "musa",
      prophet: "موسى ﷺ", prophetSub: "Mūsā",
      job: "راعِي الغَنَم", jobSub: "الرّاعي",
      ayah: "«ما بَعَثَ اللهُ نَبِيّاً إِلاّ رَعى الغَنَم» — البخاري",
      icP: G.quiz,
      icJ: G.tree,
    },
    {
      id: "adam",
      prophet: "آدم ﷺ", prophetSub: "Ādam",
      job: "حارِثُ الأَرض", jobSub: "الزّارع",
      ayah: "أَوَّلُ مَن حَرَثَ الأَرضَ ودَعا لَها بِالبَركة",
      icP: G.quiz,
      icJ: G.landsea,
    },
    {
      id: "yusuf",
      prophet: "يوسف ﷺ", prophetSub: "Yūsuf",
      job: "خازِنُ الأَرض", jobSub: "وَزيرُ الاقتِصاد",
      ayah: "«اجْعَلْنِي عَلَىٰ خَزَائِنِ الْأَرْضِ» — يوسف 55",
      icP: G.quiz,
      icJ: G.bag,
    },
  ];

  const STORAGE_KEY = "mk_professions_v1";
  const STORE = Storage.get(STORAGE_KEY, { bestMoves: 0, bestTime: 0, rounds: 0 });

  let cards = [];          // shuffled deck
  let flipped = [];        // currently-open (max 2)
  let matched = 0;
  let moves = 0;
  let busy = false;
  let timer = null;
  let elapsed = 0;
  let started = false;

  /* ============ Build deck ============ */
  function newRound() {
    matched = 0; moves = 0; elapsed = 0; started = false;
    flipped = []; busy = false;
    stopTimer();

    cards = [];
    PAIRS.forEach(p => {
      cards.push({ key: p.id, kind: "prophet", label: p.prophet, sub: p.prophetSub, ic: p.icP, pair: p });
      cards.push({ key: p.id, kind: "job",     label: p.job,     sub: p.jobSub,     ic: p.icJ, pair: p });
    });
    shuffle(cards);

    render();
    renderDiscovered();
    updateHUD();
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  function render() {
    const grid = document.getElementById("pp-grid");
    grid.innerHTML = "";
    cards.forEach((c, i) => {
      const el = document.createElement("button");
      el.className = `pp-card kind-${c.kind}`;
      el.dataset.idx = i;
      el.innerHTML = `
        <div class="inner">
          <div class="face back">
            <div class="back-ornament"><span>ن</span></div>
          </div>
          <div class="face front">
            <div class="ic">${c.ic}</div>
            <div class="lbl">${c.label}</div>
            <div class="sub">${c.sub}</div>
          </div>
        </div>
      `;
      el.addEventListener("click", () => onFlip(i, el));
      grid.appendChild(el);
    });
  }

  function onFlip(i, el) {
    if (busy) return;
    if (el.classList.contains("flipped") || el.classList.contains("matched")) return;
    if (!started) { started = true; startTimer(); }

    el.classList.add("flipped");
    flipped.push({ i, el, card: cards[i] });
    AudioBus.pop();

    if (flipped.length === 2) {
      moves++;
      updateHUD();
      const [a, b] = flipped;
      if (a.card.key === b.card.key && a.card.kind !== b.card.kind) {
        // match
        busy = true;
        setTimeout(() => {
          a.el.classList.add("matched");
          b.el.classList.add("matched");
          matched++;
          updateHUD();
          renderDiscovered();
          AudioBus.success();
          flipped = [];
          busy = false;
          if (matched === PAIRS.length) finishRound();
        }, 380);
      } else {
        busy = true;
        a.el.classList.add("wrong");
        b.el.classList.add("wrong");
        AudioBus.fail();
        setTimeout(() => {
          a.el.classList.remove("flipped", "wrong");
          b.el.classList.remove("flipped", "wrong");
          flipped = [];
          busy = false;
        }, 800);
      }
    }
  }

  function renderDiscovered() {
    const root = document.getElementById("discovered");
    const found = PAIRS.filter(p => isMatched(p.id));
    document.getElementById("disc-pill").textContent = `${found.length} / ${PAIRS.length}`;

    if (found.length === 0) {
      root.innerHTML = `<div class="pp-empty">ابحث عن الأَزواج لِتَكشِف عن كلِّ نَبِيٍّ ومِهنَتِه.</div>`;
      return;
    }

    root.innerHTML = "";
    found.forEach(p => {
      const row = document.createElement("div");
      row.className = "pp-disc-row";
      row.innerHTML = `
        <div class="ic">${p.icP}</div>
        <div class="meta">
          <strong>${p.prophet} · ${p.job}</strong>
          <small>${p.ayah}</small>
        </div>
        <span class="badge">+1</span>
      `;
      root.appendChild(row);
    });
  }

  function isMatched(key) {
    // matched if both cards with this key are matched in DOM
    const all = document.querySelectorAll(`.pp-card.matched`);
    let n = 0;
    all.forEach((el, idx) => {
      const c = cards[Number(el.dataset.idx)];
      if (c && c.key === key) n++;
    });
    return n === 2;
  }

  function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
      elapsed++;
      document.getElementById("pp-time").textContent = Fmt.time(elapsed);
    }, 1000);
  }
  function stopTimer() {
    if (timer) { clearInterval(timer); timer = null; }
    document.getElementById("pp-time").textContent = Fmt.time(elapsed);
  }

  function updateHUD() {
    document.getElementById("pp-moves").textContent = moves;
    document.getElementById("pp-pairs").textContent = matched;
    document.getElementById("pp-points").textContent = scorePoints();
    document.getElementById("best").textContent =
      STORE.bestMoves > 0 ? `${STORE.bestMoves} · ${Fmt.time(STORE.bestTime)}` : "—";
  }

  function scorePoints() {
    // Lower moves & time = higher points. Optimal = 6 moves, 30s.
    if (moves === 0) return 0;
    const minMoves = PAIRS.length;
    const movePenalty = Math.max(0, moves - minMoves) * 6;
    const timePenalty = Math.floor(elapsed / 3);
    return Math.max(20, 200 - movePenalty - timePenalty);
  }

  function finishRound() {
    stopTimer();
    const points = scorePoints();
    if (!STORE.bestMoves || moves < STORE.bestMoves) STORE.bestMoves = moves;
    if (!STORE.bestTime || elapsed < STORE.bestTime) STORE.bestTime = elapsed;
    STORE.rounds++;
    Storage.set(STORAGE_KEY, STORE);

    Particles.fire(140, { colors: ["#CDEBD7","#FFD9C2","#FFE9A8","#CFE3F2","#E0D5F2"] });
    AudioBus.success();

    document.getElementById("done-summary").innerHTML = `
      <div style="display:flex; gap:8px; justify-content:center; margin-bottom: var(--s-3);">
        <span style="padding:6px 12px; background:var(--mint); color:var(--mint-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">${moves} مُحاوَلة</span>
        <span style="padding:6px 12px; background:var(--sky); color:var(--sky-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">${Fmt.time(elapsed)}</span>
        <span style="padding:6px 12px; background:var(--butter); color:var(--butter-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">+${points} نقطة</span>
      </div>
      <div style="font-size:13px; line-height: 1.7;">
        كانَ الأَنبياءُ — عَلَيهِمُ السَّلام — يَعمَلونَ بِأَيديهم ولا يَسأَلونَ النّاسَ شَيئاً. والعَمَلُ الحَلالُ عِبادَة.
      </div>
    `;
    setTimeout(() => Modal.open("done-modal"), 500);
  }

  /* ============ Peek (preview all cards briefly) ============ */
  function peek() {
    if (busy) return;
    busy = true;
    const cardsEls = document.querySelectorAll(".pp-card:not(.matched)");
    cardsEls.forEach(el => el.classList.add("flipped"));
    moves += 2; // penalty
    updateHUD();
    setTimeout(() => {
      cardsEls.forEach(el => {
        if (!el.classList.contains("matched")) el.classList.remove("flipped");
      });
      flipped = [];
      busy = false;
    }, 2400);
  }

  /* ============ Bind ============ */
  document.getElementById("btn-shuffle").addEventListener("click", () => newRound());
  document.getElementById("btn-peek").addEventListener("click", peek);
  document.getElementById("done-next").addEventListener("click", () => {
    Modal.close("done-modal"); setTimeout(newRound, 300);
  });
  Modal.bindClose("done-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  newRound();
})();
