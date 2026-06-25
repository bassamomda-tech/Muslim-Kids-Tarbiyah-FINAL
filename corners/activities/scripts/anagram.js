/* ============================================================
   ANAGRAM — ترتيب الحروف المبعثرة
   لكل كلمة: مصفوفة حروفها بالترتيب الصحيح + تلميح + أيقونة.
   ============================================================ */

(function () {
  "use strict";

  /* ============ قائمة الكلمات ============ */
  // ملاحظة: نَعرضُ كل حرف بشكلٍ مستقلٍّ (Isolated form). هذا تَدريبٌ على
  // التَّعَرُّف على الحروف من خلال جمعها لِتُكوِّن كلمة كاملة.
  const WORDS = [
    { letters: ["ص","ل","ا","ة"],     text: "صلاة",  icon: "🕌", hint: "ركنٌ من أركان الإسلام، خَمسٌ في اليوم والليلة" },
    { letters: ["ز","ك","ا","ة"],     text: "زكاة",  icon: "🤲", hint: "نُخرِجها للفقراء، وهي طُهرةٌ للمال" },
    { letters: ["ص","ي","ا","م"],     text: "صيام",  icon: "🌙", hint: "نَترُك فيه الطعام والشراب من الفجر إلى المغرب" },
    { letters: ["ك","ع","ب","ة"],     text: "كعبة",  icon: "🕋", hint: "أوّل بيتٍ وُضِع للناس، نَطوف حوله في الحجّ" },
    { letters: ["ق","ر","آ","ن"],     text: "قرآن",  icon: "📖", hint: "كلامُ الله، فيه هُدًى للمتَّقين" },
    { letters: ["م","س","ج","د"],     text: "مسجد",  icon: "🏛️", hint: "بيتُ الله في الأرض، نُصلِّي فيه جماعة" },
    { letters: ["ر","ح","م","ة"],     text: "رحمة",  icon: "💚", hint: "صفةُ ربِّنا، وما أُرسِل النبي ﷺ إلا بها" },
    { letters: ["ص","د","ق"],         text: "صدق",   icon: "💎", hint: "ضِدُّ الكذب، نَجاةٌ وطمأنينة" },
  ];

  const STORAGE_KEY = "mk_anagram_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  let idx = 0;
  let correct = 0;
  let slips = 0;
  let stars = 0;
  let attempts = 0;
  let hintUsed = false;
  let bankLetters = [];     // array of {ch, used:bool, originalPos}
  let slots = [];           // array of {ch, fromBank} or null

  /* ============ Render ============ */
  function loadWord() {
    const w = WORDS[idx];
    attempts = 0;
    hintUsed = false;
    slots = new Array(w.letters.length).fill(null);
    bankLetters = shuffle(w.letters.map((ch, i) => ({ ch, used: false, originalCh: ch })));
    // make sure shuffled order isn't the original
    if (bankLetters.map(b=>b.ch).join("") === w.letters.join("") && w.letters.length > 2) {
      bankLetters = shuffle(bankLetters);
    }

    document.getElementById("clue-icon").textContent = w.icon;
    document.getElementById("clue-hint").textContent = w.hint;
    document.getElementById("a-idx").textContent = idx + 1;

    renderSlots();
    renderBank();
    renderWordsList();
  }

  function renderSlots() {
    const root = document.getElementById("slots");
    root.innerHTML = "";
    slots.forEach((s, i) => {
      const el = document.createElement("div");
      el.className = "ana-slot" + (s ? " filled" : "");
      el.textContent = s ? s.ch : "";
      const pos = document.createElement("span");
      pos.className = "pos"; pos.textContent = i + 1;
      el.appendChild(pos);
      el.addEventListener("click", () => returnLetter(i));
      root.appendChild(el);
    });
  }

  function renderBank() {
    const root = document.getElementById("bank");
    root.innerHTML = "";
    bankLetters.forEach((b, i) => {
      const el = document.createElement("div");
      el.className = "ana-letter" + (b.used ? " placed" : "");
      el.textContent = b.ch;
      el.addEventListener("click", () => placeLetter(i));
      root.appendChild(el);
    });
  }

  function renderWordsList() {
    const list = document.getElementById("words-list");
    list.innerHTML = "";
    WORDS.forEach((w, i) => {
      const c = document.createElement("span");
      c.className = "ana-chip" + (w._solved ? " solved" : (i === idx ? " current" : ""));
      c.textContent = w._solved ? `${w.text} ${"★".repeat(w._stars||0)}` : `كلمة ${i+1}`;
      list.appendChild(c);
    });
    document.getElementById("words-pill").textContent = `${correct}/${WORDS.length}`;
  }

  /* ============ Interactions ============ */
  function placeLetter(bankIdx) {
    if (bankLetters[bankIdx].used) return;
    const nextEmpty = slots.findIndex(s => !s);
    if (nextEmpty < 0) return;
    slots[nextEmpty] = { ch: bankLetters[bankIdx].ch, fromBank: bankIdx };
    bankLetters[bankIdx].used = true;
    AudioBus.pop();
    renderSlots();
    renderBank();
    // auto-check when all filled
    if (slots.every(s => s)) {
      setTimeout(checkAnswer, 250);
    }
  }
  function returnLetter(slotIdx) {
    const s = slots[slotIdx];
    if (!s) return;
    bankLetters[s.fromBank].used = false;
    slots[slotIdx] = null;
    AudioBus.tick(440);
    renderSlots(); renderBank();
  }

  function checkAnswer() {
    attempts++;
    const guess = slots.map(s => s ? s.ch : "").join("");
    const target = WORDS[idx].letters.join("");
    if (guess === target) {
      onCorrect();
    } else {
      slips++;
      AudioBus.fail();
      const slotEls = document.querySelectorAll(".ana-slot");
      slotEls.forEach((el, i) => {
        if (slots[i] && slots[i].ch !== WORDS[idx].letters[i]) {
          el.classList.add("wrong");
          setTimeout(() => el.classList.remove("wrong"), 500);
        }
      });
      updateHUD();
    }
  }

  function onCorrect() {
    const w = WORDS[idx];
    correct++;
    // stars: 3 = first try (no hint), 2 = 2-3 attempts or hint, 1 = many attempts
    let s = 3;
    if (attempts > 1 || hintUsed) s = 2;
    if (attempts > 3) s = 1;
    w._solved = true;
    w._stars = s;
    stars += s;

    AudioBus.success();
    Particles.fire(50, { colors: ["#FFD9C2","#FFE9A8","#CDEBD7"] });

    document.querySelectorAll(".ana-slot").forEach(el => el.classList.add("correct"));

    updateHUD();
    renderWordsList();

    setTimeout(() => {
      if (idx + 1 < WORDS.length) {
        idx++;
        loadWord();
      } else {
        finishRound();
      }
    }, 1100);
  }

  function useHint() {
    if (hintUsed) return;
    const w = WORDS[idx];
    // place first letter
    const firstCh = w.letters[0];
    const bIdx = bankLetters.findIndex(b => !b.used && b.ch === firstCh);
    if (bIdx < 0) return;
    // clear slot 0 if needed
    if (slots[0]) returnLetter(0);
    slots[0] = { ch: firstCh, fromBank: bIdx };
    bankLetters[bIdx].used = true;
    hintUsed = true;
    AudioBus.tick(550);
    renderSlots(); renderBank();
  }

  function shuffleBank() {
    const used = bankLetters.filter(b => b.used);
    const free = bankLetters.filter(b => !b.used);
    bankLetters = [...used, ...shuffle(free)];
    // Reindex slot references
    slots.forEach(s => {
      if (s) {
        s.fromBank = bankLetters.findIndex(b => b.ch === s.ch && b.used);
      }
    });
    AudioBus.tick(620);
    renderBank();
  }

  function skipWord() {
    if (idx + 1 < WORDS.length) { idx++; loadWord(); }
    else finishRound();
  }

  function updateHUD() {
    document.getElementById("a-correct").textContent = correct;
    document.getElementById("a-stars").textContent = stars;
    document.getElementById("a-slips").textContent = slips;
    document.getElementById("best").textContent = STORE.best > 0 ? `${STORE.best} ⭐` : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function finishRound() {
    if (stars > STORE.best) STORE.best = stars;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(160);
    const max = WORDS.length * 3;
    const list = WORDS.map(w =>
      `<div style="display:flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid var(--line);">
        <span style="font-weight:700;">${w.text}</span>
        <span>${w._solved ? "★".repeat(w._stars) + "☆".repeat(3-w._stars) : "—"}</span>
      </div>`
    ).join("");
    document.getElementById("win-summary").innerHTML = `
      <div>أعَدتَ بِناءَ <strong>${correct}</strong> من <strong>${WORDS.length}</strong> كلمات بـ<strong>${stars}</strong> نجمة (من ${max}).</div>
      <div style="margin-top: var(--s-3);">${list}</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        كلمةٌ جميلة: «العلم نور». كلَّما تَعرَّفتَ على حروفِك، صار قَلبك أنور.
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  function shuffle(a) {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function newRound() {
    WORDS.forEach(w => { delete w._solved; delete w._stars; });
    idx = 0; correct = 0; slips = 0; stars = 0;
    loadWord(); updateHUD();
  }

  /* ============ Bind ============ */
  document.getElementById("btn-check").addEventListener("click", checkAnswer);
  document.getElementById("btn-hint").addEventListener("click", useHint);
  document.getElementById("btn-shuffle").addEventListener("click", shuffleBank);
  document.getElementById("btn-skip").addEventListener("click", skipWord);
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(newRound, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  loadWord();
  updateHUD();
})();
