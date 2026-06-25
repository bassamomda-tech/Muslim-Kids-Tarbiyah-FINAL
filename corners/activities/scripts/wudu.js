/* ============================================================
   WUDU GAME — ترتيب خطوات الوضوء
   منطق Drag & Drop + النقر للاختيار (للدعم على اللمس)
   ============================================================ */

(function () {
  "use strict";

  /* ---------- بيانات الخطوات (بالترتيب الصحيح) ---------- */
  const STEPS = [
    {
      id: "intent",
      title: "النية والتسمية",
      desc: "أنوي الوضوء وأقول: بسم الله",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8"/></svg>`,
    },
    {
      id: "hands",
      title: "غسل اليدين ثلاثاً",
      desc: "غسل الكفين ثلاث مرات",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12V6a2 2 0 1 1 4 0v6M12 12V4a2 2 0 1 1 4 0v8M16 12V6a2 2 0 1 1 4 0v8c0 4-3 7-7 7s-7-3-7-7v-2a2 2 0 1 1 4 0"/></svg>`,
    },
    {
      id: "mouth",
      title: "المضمضة والاستنشاق",
      desc: "أُدخِل الماء في الفم والأنف",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14c1 2 3 3 4 3s3-1 4-3"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>`,
    },
    {
      id: "face",
      title: "غسل الوجه",
      desc: "من منابت الشعر للذقن ثلاثاً",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M9 11h.01M15 11h.01M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5"/></svg>`,
    },
    {
      id: "arms",
      title: "غسل اليدين إلى المرفقين",
      desc: "اليمنى ثم اليسرى ثلاثاً",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12L9 6l5 5-6 6z M14 11l4-4 3 3-4 4z M9 17l3 3"/></svg>`,
    },
    {
      id: "head",
      title: "مسح الرأس",
      desc: "تمرير اليدين على الرأس مرة واحدة",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a8 8 0 0 1 16 0M4 14h16M8 18v2M16 18v2"/></svg>`,
    },
    {
      id: "feet",
      title: "غسل القدمين إلى الكعبين",
      desc: "اليمنى ثم اليسرى ثلاثاً",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4a3 3 0 0 1 6 0c0 2 1 3 1 6 0 4-2 6-4 6s-4-2-4-4 1-2 1-4-1-2-1-4z"/><circle cx="11" cy="4" r="1" fill="currentColor"/><circle cx="14" cy="6" r="1" fill="currentColor"/><circle cx="16" cy="9" r="1" fill="currentColor"/></svg>`,
    },
  ];

  /* ---------- حالة + تخزين ---------- */
  const STORAGE_KEY = "mk_wudu_state_v1";
  const state = Storage.get(STORAGE_KEY, {
    bestTries: null,
    completions: 0,
    muted: false,
  });
  AudioBus.setMuted(state.muted);

  /* ---------- متغيرات الجولة ---------- */
  let pool = [];      // الخطوات في الخزانة (ids)
  let placement = []; // placement[i] = step id أو null
  let tries = 0;
  let selectedCard = null; // لنقر-للاختيار

  /* ---------- مرجعيات DOM ---------- */
  const poolEl = document.getElementById("wudu-pool");
  const slotsEl = document.getElementById("wudu-slots");
  const feedback = document.getElementById("feedback");
  const triesEl = document.getElementById("stat-tries");
  const placedEl = document.getElementById("stat-placed");
  const bestEl = document.getElementById("stat-best");
  const verifyBtn = document.getElementById("verify-btn");

  /* ============================================================
     خلط
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
    pool = shuffle(STEPS.map(s => s.id));
    placement = Array(STEPS.length).fill(null);
    tries = 0;
    selectedCard = null;
    render();
    updateStats();
    setFeedback("اسحب الخطوات إلى الترتيب الصحيح، أو انقر على خطوة ثم على الخانة.", "");
  }

  /* ============================================================
     رسم بطاقة خطوة
     ============================================================ */
  function makeCard(stepId, opts = {}) {
    const step = STEPS.find(s => s.id === stepId);
    const card = document.createElement("div");
    card.className = "step-card" + (opts.inSlot ? " in-slot" : "");
    card.draggable = true;
    card.dataset.id = step.id;
    card.innerHTML = `
      <div class="step-icon">${step.icon}</div>
      <div class="step-title">${step.title}</div>
    `;

    // drag and drop
    card.addEventListener("dragstart", (e) => {
      card.classList.add("dragging");
      e.dataTransfer.setData("text/plain", step.id);
      e.dataTransfer.effectAllowed = "move";
    });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));

    // النقر للاختيار
    card.addEventListener("click", () => onCardClick(card, step.id));

    return card;
  }

  /* ============================================================
     النقر على بطاقة
     ============================================================ */
  function onCardClick(cardEl, stepId) {
    // إلغاء أي تحديد سابق
    document.querySelectorAll(".step-card.selected").forEach(el =>
      el.classList.remove("selected"));

    if (selectedCard === stepId) {
      selectedCard = null;
      return;
    }
    selectedCard = stepId;
    cardEl.classList.add("selected");
    cardEl.style.boxShadow = "0 0 0 3px var(--brand)";
    setFeedback("اختر الآن الخانة التي تريد وضع هذه الخطوة فيها.", "");
  }

  /* ============================================================
     وضع خطوة في خانة
     ============================================================ */
  function placeStep(stepId, slotIdx) {
    // إزالة من مكانها الحالي
    const fromIdx = placement.indexOf(stepId);
    if (fromIdx !== -1) {
      placement[fromIdx] = null;
    } else {
      // من الخزانة
      const idx = pool.indexOf(stepId);
      if (idx !== -1) pool.splice(idx, 1);
    }

    // إذا كانت الخانة المستهدفة ممتلئة، اقلب
    const existing = placement[slotIdx];
    if (existing) {
      if (fromIdx !== -1) {
        placement[fromIdx] = existing; // تبادل
      } else {
        pool.push(existing); // إعادة إلى الخزانة
      }
    }

    placement[slotIdx] = stepId;
    selectedCard = null;
    AudioBus.pop();
    render();
    updateStats();
  }

  /* ============================================================
     إعادة خطوة إلى الخزانة (نقر مزدوج أو زر)
     ============================================================ */
  function returnToPool(stepId) {
    const idx = placement.indexOf(stepId);
    if (idx !== -1) {
      placement[idx] = null;
      pool.push(stepId);
      render();
      updateStats();
    }
  }

  /* ============================================================
     التحقق
     ============================================================ */
  function verify() {
    if (placement.some(p => p === null)) {
      setFeedback("املأ جميع الخانات السبعة أولاً.", "error");
      AudioBus.fail();
      return;
    }

    tries++;
    let correct = 0;
    placement.forEach((stepId, i) => {
      const slotEl = slotsEl.children[i];
      const cardEl = slotEl.querySelector(".step-card");
      if (!cardEl) return;
      cardEl.classList.remove("correct", "wrong");

      if (STEPS[i].id === stepId) {
        cardEl.classList.add("correct");
        correct++;
      } else {
        cardEl.classList.add("wrong");
      }
    });

    if (correct === STEPS.length) {
      onWin();
    } else {
      AudioBus.fail();
      setFeedback(`${correct}/7 صحيحة. الخطوات المُلوّنة باللون الأخضر في مكانها الصحيح. أعد ترتيب الباقي.`, "error");
      // إزالة العلامات الخاطئة بعد ثانية والاحتفاظ بالصحيحة
      setTimeout(() => {
        slotsEl.querySelectorAll(".step-card.wrong").forEach(c => c.classList.remove("wrong"));
      }, 1400);
    }
    updateStats();
  }

  function onWin() {
    setFeedback("ممتاز! رتّبتَ خطوات الوضوء كاملة.", "success");
    AudioBus.success();
    Particles.fire(120);

    state.completions++;
    if (state.bestTries === null || tries < state.bestTries) state.bestTries = tries;
    Storage.set(STORAGE_KEY, state);

    setTimeout(() => {
      document.getElementById("win-tries").textContent = tries;
      document.getElementById("win-best").textContent = state.bestTries;
      Modal.open("win-modal");
    }, 600);
  }

  /* ============================================================
     رسم كل شيء
     ============================================================ */
  function render() {
    // الخزانة
    poolEl.innerHTML = "";
    pool.forEach(id => poolEl.appendChild(makeCard(id)));

    // الخانات
    slotsEl.innerHTML = "";
    placement.forEach((stepId, i) => {
      const slot = document.createElement("div");
      slot.className = "wudu-slot" + (stepId ? " filled" : "");
      slot.dataset.idx = i;
      slot.innerHTML = `<span class="slot-num">${i + 1}</span>`;
      if (stepId) {
        const card = makeCard(stepId, { inSlot: true });
        // نقر مزدوج لإعادة للخزانة
        card.addEventListener("dblclick", () => returnToPool(stepId));
        slot.appendChild(card);
      } else {
        slot.insertAdjacentHTML("beforeend", `<span class="slot-hint">خطوة ${i + 1}</span>`);
      }

      // أحداث Drag-over
      slot.addEventListener("dragover", e => {
        e.preventDefault();
        slot.classList.add("over");
      });
      slot.addEventListener("dragleave", () => slot.classList.remove("over"));
      slot.addEventListener("drop", e => {
        e.preventDefault();
        slot.classList.remove("over");
        const id = e.dataTransfer.getData("text/plain");
        if (id) placeStep(id, i);
      });

      // النقر لوضع الخطوة المحددة
      slot.addEventListener("click", e => {
        if (e.target.closest(".step-card")) return; // كلَكس العادي على البطاقة
        if (selectedCard) placeStep(selectedCard, i);
      });

      slotsEl.appendChild(slot);
    });

    // إعدادات الخزانة كمنطقة إفلات
    poolEl.ondragover = e => { e.preventDefault(); poolEl.style.borderColor = "var(--brand)"; };
    poolEl.ondragleave = () => poolEl.style.borderColor = "";
    poolEl.ondrop = e => {
      e.preventDefault();
      poolEl.style.borderColor = "";
      const id = e.dataTransfer.getData("text/plain");
      if (id && placement.includes(id)) returnToPool(id);
    };
  }

  /* ============================================================
     تحديثات
     ============================================================ */
  function setFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = "feedback-line " + (type || "");
  }

  function updateStats() {
    triesEl.textContent = tries;
    const placed = placement.filter(p => p !== null).length;
    placedEl.textContent = `${placed}/${STEPS.length}`;
    bestEl.textContent = state.bestTries !== null ? state.bestTries + " محاولات" : "—";
    verifyBtn.disabled = placed < STEPS.length;
  }

  /* ============================================================
     ربط
     ============================================================ */
  verifyBtn.addEventListener("click", verify);
  document.getElementById("shuffle-btn").addEventListener("click", newGame);
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(newGame, 300);
  });
  document.getElementById("win-dismiss").addEventListener("click", () => Modal.close("win-modal"));

  const muteBtn = document.getElementById("mute-btn");
  AudioBus.bindButton(muteBtn, v => { state.muted = v; Storage.set(STORAGE_KEY, state); });

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });

  newGame();
})();
