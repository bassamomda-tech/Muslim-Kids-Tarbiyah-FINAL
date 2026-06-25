/* ============================================================
   TIMED QUIZ — اختبار المعلومات السريع
   ============================================================ */

(function () {
  "use strict";

  const QUESTIONS = [
    { q: "كم عَدَدُ أركان الإسلام؟",
      a: ["أربعة", "خمسة", "ستَّة", "سبعة"], c: 1,
    },
    { q: "ما اسمُ أُمِّ النبي محمد ﷺ؟",
      a: ["فاطمة", "خديجة", "آمِنة بنت وَهْب", "حليمة"], c: 2,
    },
    { q: "في أيّ مدينةٍ وُلِدَ النبي ﷺ؟",
      a: ["المدينة", "الطَّائف", "مَكَّة", "الكوفة"], c: 2,
    },
    { q: "في أيّ شَهرٍ يَصومُ المسلمون؟",
      a: ["شَوَّال", "رَجَب", "شَعبان", "رَمضان"], c: 3,
    },
    { q: "كَمْ عَدَدُ أسماء الله الحُسنى؟",
      a: ["٧٧", "٩٩", "١٠١", "١١٠"], c: 1,
    },
    { q: "ما هي أوَّل سورة في القرآن الكَريم؟",
      a: ["البَقرة", "الفاتحة", "الإخلاص", "النَّاس"], c: 1,
    },
    { q: "أيُّ هذه الكلمات جَمْعُ «كِتاب»؟",
      a: ["كاتب", "كُتُب", "مَكتبة", "كَتَبَة"], c: 1,
    },
    { q: "كَمْ عَدَدُ رَكَعاتِ صلاة الفَجر؟",
      a: ["رَكعتان", "ثلاث", "أربع", "خمس"], c: 0,
    },
    { q: "في أيّ غارٍ نَزل أوَّل الوَحي؟",
      a: ["ثَور", "حِراء", "الكَهف", "حُنَين"], c: 1,
    },
    { q: "ما اسمُ الخليفة الذي جَمعَ القرآنَ في مُصحفٍ واحد؟",
      a: ["أبو بكر", "عُمر", "عُثمان", "عَلِيّ"], c: 2,
    },
    { q: "كَمْ مَرَّةً في اليَوم يَرفعُ المسلمُ يَدَيهِ لِلوُضوء؟",
      a: ["مَرَّة", "مَرَّتان", "خَمسة", "حسب الحاجة"], c: 3,
    },
    { q: "أيُّ هذه ليست من أيَّام التَّشريق؟",
      a: ["11 ذي الحجَّة", "12 ذي الحجَّة", "13 ذي الحجَّة", "14 ذي الحجَّة"], c: 3,
    },
  ];

  const STORAGE_KEY = "mk_timedquiz_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  const TOTAL_Q = 10;
  const TIME_PER_Q = 15; // seconds
  const RING_LEN = 188.5; // 2*pi*30

  let pool = [];
  let qIdx = 0;
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let timer = null;
  let timeLeft = TIME_PER_Q;
  let answered = false;
  let results = []; // 'correct'|'wrong'|'timeout'

  function start() {
    pool = shuffle(QUESTIONS.slice()).slice(0, TOTAL_Q);
    qIdx = 0; score = 0; correct = 0; wrong = 0;
    results = new Array(TOTAL_Q).fill(null);
    document.getElementById("start-overlay").classList.add("hidden");
    renderProgress();
    loadQ();
  }

  function loadQ() {
    if (qIdx >= TOTAL_Q) { finish(); return; }
    answered = false;
    timeLeft = TIME_PER_Q;

    const q = pool[qIdx];
    document.getElementById("q-idx").textContent = qIdx + 1;
    document.getElementById("q-num-label").textContent = `السؤال ${qIdx + 1} من ${TOTAL_Q}`;
    document.getElementById("question-text").textContent = q.q;

    const ans = document.getElementById("answers");
    ans.innerHTML = "";
    q.a.forEach((txt, i) => {
      const el = document.createElement("div");
      el.className = "tq-answer";
      el.innerHTML = `
        <span class="letter">${["أ","ب","ج","د"][i]}</span>
        <span>${txt}</span>
      `;
      el.addEventListener("click", () => choose(i, el));
      ans.appendChild(el);
    });

    updateRing();
    startTimer();
    updateHUD();
    renderProgress();
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft -= 0.1;
      if (timeLeft <= 0) {
        timeLeft = 0;
        clearInterval(timer);
        if (!answered) timeoutQ();
      }
      updateRing();
    }, 100);
  }

  function updateRing() {
    const pct = timeLeft / TIME_PER_Q;
    const ring = document.getElementById("ring-fg");
    ring.style.strokeDashoffset = (1 - pct) * RING_LEN;
    document.getElementById("time-text").textContent = Math.ceil(timeLeft);

    const t = document.getElementById("timer");
    t.classList.remove("warn", "danger");
    if (timeLeft <= 3) t.classList.add("danger");
    else if (timeLeft <= 6) t.classList.add("warn");
  }

  function choose(i, el) {
    if (answered) return;
    answered = true;
    clearInterval(timer);
    const q = pool[qIdx];

    // lock all
    document.querySelectorAll(".tq-answer").forEach(a => a.classList.add("locked"));

    if (i === q.c) {
      el.classList.add("correct");
      correct++;
      const elapsed = TIME_PER_Q - timeLeft;
      let pts = 5;
      if (elapsed <= 5) pts = 15;
      else if (elapsed <= 10) pts = 10;
      score += pts;
      results[qIdx] = "correct";
      AudioBus.success();
      Particles.fire(30, {
        colors: ["#CDEBD7","#FFE9A8","#FFD9C2"],
        originX: "50%", originY: "30%",
      });
      flashPoints(`+${pts}`);
    } else {
      el.classList.add("wrong");
      // show correct
      document.querySelectorAll(".tq-answer")[q.c].classList.add("correct");
      wrong++;
      results[qIdx] = "wrong";
      AudioBus.fail();
    }

    updateHUD();
    renderProgress();
    setTimeout(nextQ, 1500);
  }

  function timeoutQ() {
    answered = true;
    const q = pool[qIdx];
    document.querySelectorAll(".tq-answer").forEach(a => a.classList.add("locked"));
    document.querySelectorAll(".tq-answer")[q.c].classList.add("correct");
    wrong++;
    results[qIdx] = "timeout";
    AudioBus.fail();
    updateHUD();
    renderProgress();
    setTimeout(nextQ, 1500);
  }

  function nextQ() {
    qIdx++;
    loadQ();
  }

  function flashPoints(txt) {
    const el = document.createElement("div");
    el.textContent = txt;
    el.style.cssText = `
      position: fixed; left: 50%; top: 30%;
      transform: translate(-50%, -50%);
      font-family: var(--font-en); font-size: 64px; font-weight: 900;
      color: var(--mint-ink); pointer-events: none; z-index: 200;
      text-shadow: 0 4px 16px rgba(47,122,82,0.4);
    `;
    document.body.appendChild(el);
    el.animate(
      [{ opacity: 0, transform: "translate(-50%, -30%) scale(0.6)" },
       { opacity: 1, transform: "translate(-50%, -50%) scale(1.2)", offset: 0.3 },
       { opacity: 0, transform: "translate(-50%, -80%) scale(0.9)" }],
      { duration: 1200, easing: "ease-out" }
    ).onfinish = () => el.remove();
  }

  function updateHUD() {
    document.getElementById("q-score").textContent = score;
    document.getElementById("q-correct").textContent = correct;
    document.getElementById("q-wrong").textContent = wrong;
    document.getElementById("score-line").textContent = score;
    document.getElementById("best-line").textContent = STORE.best > 0 ? `${STORE.best}` : "—";
    document.getElementById("best").textContent = STORE.best > 0 ? `${STORE.best} نقطة` : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function renderProgress() {
    const root = document.getElementById("progress");
    root.innerHTML = "";
    for (let i = 0; i < TOTAL_Q; i++) {
      const c = document.createElement("span");
      let cls = "chip";
      if (results[i] === "correct") cls += " correct";
      else if (results[i] === "wrong") cls += " wrong";
      else if (results[i] === "timeout") cls += " timeout";
      else if (i === qIdx) cls += " current";
      c.className = cls;
      root.appendChild(c);
    }
  }

  function finish() {
    clearInterval(timer);
    if (score > STORE.best) STORE.best = score;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    const max = TOTAL_Q * 15;

    let rank = "مُجتهد";
    if (score >= max * 0.85) rank = "بَطلٌ ذَكِيّ";
    else if (score >= max * 0.65) rank = "مُتَفَوِّق";
    else if (score >= max * 0.4) rank = "جَيِّد";
    else rank = "بِخَطًى صَغيرة";
    document.getElementById("win-title").textContent = rank + "!";

    document.getElementById("win-summary").innerHTML = `
      <div>أَجبتَ على <strong>${correct}</strong> سؤالاً صحيحاً من ${TOTAL_Q}،
      وحَصَلتَ على <strong>${score}</strong> نقطة من ${max}.</div>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-2); margin-top: var(--s-3);">
        <div><strong>صحيح</strong>${correct}</div>
        <div><strong>خَطأ</strong>${wrong}</div>
        <div><strong>أفضل</strong>${STORE.best}</div>
      </div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        كلّ سؤالٍ أَخطأتَ فيه فُرصة لِتَتَعلَّم. ارجع وأعد المُحاولة لِتُحَسِّن نَتيجتَك.
      </div>
    `;
    Particles.fire(180);
    setTimeout(() => Modal.open("win-modal"), 600);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* Bind */
  document.getElementById("start-btn").addEventListener("click", start);
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(start, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  // initial UI
  for (let i = 0; i < TOTAL_Q; i++) {
    const c = document.createElement("span");
    c.className = "chip";
    document.getElementById("progress").appendChild(c);
  }
  updateHUD();
})();
