/* ============================================================
   GOOD BINGO — بنغو الصالحات
   24 عملاً صالحاً + خانة وسطى (الصلاة) ثابتة.
   ============================================================ */

(function () {
  "use strict";

  const DEEDS_POOL = [
    { ic: "🤲", t: "قُلتُ بسم الله قَبلَ الأَكل" },
    { ic: "📿", t: "ذَكَرتُ اللهَ عَشرَ مَرَّات" },
    { ic: "👋", t: "سَلَّمتُ على شَخصٍ اليَوم" },
    { ic: "💧", t: "تَوَضَّأتُ بِإِتقان" },
    { ic: "📖", t: "قَرَأتُ آيَةً مِنَ القرآن" },
    { ic: "👨‍👩‍👧", t: "ساعَدتُ والِدَيَّ في عَمَل" },
    { ic: "🍎", t: "أَطعَمتُ جائِعاً أو طَيرًا" },
    { ic: "😊", t: "ابتَسَمتُ في وَجهِ أَخي" },
    { ic: "🛏", t: "رَتَّبتُ سَريري" },
    { ic: "🧼", t: "نَظَّفتُ يَدَيَّ قَبلَ الطَّعام" },
    { ic: "🌳", t: "اعتَنَيتُ بِنَبتَةٍ أو شَجَرة" },
    { ic: "📚", t: "قَرأتُ كِتاباً نافِعاً" },
    { ic: "🤐", t: "كَفَفتُ لِسانيَ عَن سُوء" },
    { ic: "🤝", t: "صالَحتُ مَن خاصَمتُ" },
    { ic: "🎁", t: "أَهدَيتُ شَيئاً لِأَخي" },
    { ic: "🙇", t: "أَطَعتُ والِدَيَّ بِلا تَأَفُّف" },
    { ic: "💵", t: "تَصَدَّقتُ ولَو بِقَليل" },
    { ic: "🚶", t: "مَشَيتُ إلى المَسجِد" },
    { ic: "💤", t: "نِمتُ على وُضوء" },
    { ic: "🗣", t: "قُلتُ كَلِمَةَ شُكرٍ لِمَن أَحسَنَ إِلَيّ" },
    { ic: "♻", t: "وَفَّرتُ ماءً أو كَهرَباء" },
    { ic: "📝", t: "أَتمَمتُ واجِبي اليَوم" },
    { ic: "🙋", t: "أَجَبتُ مَن سَأَلَ عَن طَريق" },
    { ic: "🌙", t: "صَلَّيتُ الفَجرَ في وَقتِه" },
    { ic: "❤", t: "أَطَعتُ مُعَلِّمي وأَكرَمتُه" },
    { ic: "🎯", t: "نَوَيتُ نِيَّةً صالِحَة" },
    { ic: "🕋", t: "حَمِدتُ اللهَ على نِعمَة" },
    { ic: "🙏", t: "اِستَغفَرتُ اللهَ" },
  ];

  const CENTER = { ic: "★", t: "الصَّلاة (هَدِيَّةُ المَركَز)" };

  const STORAGE_KEY = "mk_bingo_v1";
  const STORE = Storage.get(STORAGE_KEY, { totalBingos: 0, cards: 1, bestLines: 0 });

  let card = [];         // [{ic,t,done,isCenter}] × 25
  let lines = 0;
  let activeLineCells = new Set();
  let claimed = false;

  /* ============ Build Card ============ */
  function buildCard() {
    const pool = shuffle(DEEDS_POOL).slice(0, 24);
    card = [];
    for (let i = 0; i < 25; i++) {
      if (i === 12) {
        card.push({ ...CENTER, isCenter: true, done: true });
      } else {
        const d = pool.pop();
        card.push({ ...d, done: false });
      }
    }
    lines = 0; activeLineCells = new Set(); claimed = false;
    renderBoard();
    renderDeeds();
    updateHUD();
    document.getElementById("banner").hidden = true;
  }

  function shuffle(a) {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* ============ Render ============ */
  function renderBoard() {
    const root = document.getElementById("board");
    root.innerHTML = "";
    card.forEach((c, i) => {
      const el = document.createElement("button");
      el.className = "gb-cell" +
        (c.done ? " done" : "") +
        (c.isCenter ? " center" : "") +
        (activeLineCells.has(i) ? " on-line" : "");
      el.innerHTML = `
        <span class="ic">${c.ic}</span>
        <span>${c.t}</span>
      `;
      if (!c.isCenter) {
        el.addEventListener("click", () => toggleCell(i));
      }
      root.appendChild(el);
    });
  }

  function renderDeeds() {
    const root = document.getElementById("deeds-list");
    root.innerHTML = "";
    card.forEach((c, i) => {
      if (c.isCenter) return;
      const r = document.createElement("div");
      r.className = "row" + (c.done ? " done" : "");
      r.innerHTML = `<span class="dot"></span><span style="font-size:14px;">${c.ic}</span><span style="flex:1;">${c.t}</span>`;
      root.appendChild(r);
    });
    document.getElementById("deeds-pill").textContent = `${card.filter(c => !c.isCenter).length} عَمَل`;
  }

  /* ============ Logic ============ */
  function toggleCell(i) {
    card[i].done = !card[i].done;
    if (card[i].done) AudioBus.pop(); else AudioBus.tick(440);
    checkLines();
    renderBoard();
    renderDeeds();
    updateHUD();
  }

  function checkLines() {
    const linesSets = [];
    // صفوف
    for (let r = 0; r < 5; r++) linesSets.push([0,1,2,3,4].map(c => r*5 + c));
    // أعمدة
    for (let c = 0; c < 5; c++) linesSets.push([0,1,2,3,4].map(r => r*5 + c));
    // قطران
    linesSets.push([0,6,12,18,24]);
    linesSets.push([4,8,12,16,20]);

    let completedLines = 0;
    const active = new Set();
    linesSets.forEach(line => {
      if (line.every(i => card[i].done)) {
        completedLines++;
        line.forEach(i => active.add(i));
      }
    });
    activeLineCells = active;
    const wasZero = lines === 0;
    const prev = lines;
    lines = completedLines;
    if (completedLines > prev) {
      // أوَّل خَطٍّ في هذِه البِطاقة؟
      showBanner();
      AudioBus.success();
    }
    document.getElementById("btn-claim").disabled = lines === 0 || claimed;
  }

  function showBanner() {
    const b = document.getElementById("banner");
    document.getElementById("banner-text").textContent =
      lines === 1 ? "بِنغو!" : `${lines}× بِنغو!`;
    b.hidden = false;
  }

  function claimBingo() {
    if (lines === 0 || claimed) return;
    claimed = true;
    STORE.totalBingos += lines;
    if (lines > STORE.bestLines) STORE.bestLines = lines;
    Storage.set(STORAGE_KEY, STORE);

    Particles.fire(140, { colors: ["#E0D5F2","#FFE9A8","#FFD9C2","#CDEBD7","#C9A961"] });
    AudioBus.success();

    const list = card.filter(c => c.done && !c.isCenter)
      .map(c => `<span style="display:inline-block; padding:3px 9px; margin:2px; background:var(--bg-soft); border-radius:var(--r-pill); font-size:12px; font-weight:700;">${c.ic} ${c.t}</span>`)
      .join("");

    document.getElementById("bingo-summary").innerHTML = `
      <div>أَتمَمتَ <strong>${lines}</strong> صَفّاً مِن الأعمالِ الصَّالِحَة في هذه البِطاقة!</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        إجمالي البِنغو: <strong>${STORE.totalBingos}</strong> · أَفضَل بِطاقة: <strong>${STORE.bestLines}</strong> صَفّ.
      </div>
      <div style="margin-top: var(--s-3); display:flex; flex-wrap:wrap;">${list}</div>
    `;
    setTimeout(() => Modal.open("bingo-modal"), 500);
    updateHUD();
  }

  function newCard() {
    STORE.cards++;
    Storage.set(STORAGE_KEY, STORE);
    buildCard();
    AudioBus.tick(660);
  }

  function updateHUD() {
    const done = card.filter(c => c.done).length;
    document.getElementById("marks").textContent = done;
    document.getElementById("lines").textContent = lines;
    document.getElementById("cards").textContent = STORE.cards;
    document.getElementById("total-bingos").textContent = STORE.totalBingos;
    document.getElementById("best").textContent =
      STORE.bestLines > 0 ? `${STORE.bestLines} صَفّ` : "— صَفّ";
    document.getElementById("btn-claim").disabled = lines === 0 || claimed;
  }

  /* ============ Bind ============ */
  document.getElementById("btn-newcard").addEventListener("click", () => {
    if (card.some(c => c.done && !c.isCenter)) {
      if (!confirm("بِطاقَةٌ جَديدة؟ سَتُمسَح عَلاماتُ الحاليَّة.")) return;
    }
    newCard();
  });
  document.getElementById("new-card").addEventListener("click", () => {
    if (card.some(c => c.done && !c.isCenter)) {
      if (!confirm("بِطاقَةٌ جَديدة؟ سَتُمسَح عَلاماتُ الحاليَّة.")) return;
    }
    newCard();
  });
  document.getElementById("btn-claim").addEventListener("click", claimBingo);
  document.getElementById("bingo-newcard").addEventListener("click", () => {
    Modal.close("bingo-modal");
    setTimeout(newCard, 250);
  });

  Modal.bindClose("bingo-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  buildCard();
})();
