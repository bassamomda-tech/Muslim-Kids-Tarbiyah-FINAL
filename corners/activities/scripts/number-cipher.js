/* ============================================================
   NUMBER CIPHER — شيفرة الأرقام
   كل حرف عربي يُمثَّل برقم. اِكتشِف الحروف وفُكَّ الجملة.
   ============================================================ */

(function () {
  "use strict";

  /* ============ بنك العبارات ============ */
  const PHRASES = [
    {
      raw: "طَلَبُ العِلمِ فَريضَةٌ على كُلِّ مُسلِم",
      src: "حديث شريف · رواه ابن ماجه · صحيح",
      meaning: "تعلُّم العلم النافع واجبٌ على كل مسلمٍ ومسلمة. وأوَّل العلم تعلُّم القرآن وأمور الدّين.",
    },
    {
      raw: "الكَلِمَةُ الطَّيِّبَةُ صَدَقَة",
      src: "حديث شريف · رواه البخاري · صحيح",
      meaning: "كلمة لطيفة لأمّك أو أخيك أو صديقك تُكتب لك صدقة، مثل تماماً كتلك التي تتصدق بها بالمال.",
    },
    {
      raw: "الصَّبرُ مِفتاحُ الفَرَج",
      src: "مَثَلٌ مشهور",
      meaning: "إذا صبرتَ على ما تكره، فتح الله لك أبواب الخير من حيث لا تَحتسب.",
    },
    {
      raw: "خَيرُكُم خَيرُكُم لِأَهلِه",
      src: "حديث شريف · رواه الترمذي · صحيح",
      meaning: "أفضل الناس هو من يُحسن إلى أهله وأقربائه قبل غيرهم. والنبي ﷺ قال هذا عن نفسه.",
    },
    {
      raw: "اِبتَسِم فَالحَياةُ جَميلَة",
      src: "حِكمة",
      meaning: "اِجعل ابتسامتك دائمة لأنّ الله أكرمك بنِعَمٍ كثيرة، والابتسامة عبادة في الإسلام.",
    },
    {
      raw: "مَن جَدَّ وَجَد",
      src: "مَثَلٌ مشهور",
      meaning: "من اجتهد في عمله ودِراسته، حصل على ما يريد. الاجتهاد طريق النجاح.",
    },
    {
      raw: "العِلمُ نُورٌ والجَهلُ ظَلام",
      src: "حِكمة",
      meaning: "العلم يُضيء الطريق للإنسان ويُريه الصواب، والجهل يَجعله يتخبَّط في الخطأ.",
    },
    {
      raw: "النَّظافَةُ مِنَ الإيمان",
      src: "حِكمة مأخوذة من السنّة",
      meaning: "الإسلام يحبّ النظافة في الجسد والملابس والبيت والقلب. والمؤمن نظيفٌ في كل شيء.",
    },
  ];

  /* ============ تطبيع النص العربي ============ */
  const TASHKEEL = /[\u064B-\u065F\u0670\u0640]/g;
  function normalize(s) {
    return s
      .replace(TASHKEEL, "")
      .replace(/[أإآٱ]/g, "ا")
      .replace(/ى/g, "ي");
  }

  const ARABIC_ALPHABET = "ابتثجحخدذرزسشصضطظعغفقكلمنهويةؤئ".split("");
  function isArabicLetter(ch) { return ARABIC_ALPHABET.includes(ch); }

  /* ============ الحالة ============ */
  const STORAGE_KEY = "mk_cipher_state_v1";
  const STORAGE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  const ROUND_SIZE = 5;
  let round = [];
  let pIdx = 0;
  let totalPoints = 0;
  let wrongTotal = 0;

  // per-puzzle:
  let phrase = "";              // normalized
  let lettersInPhrase = [];     // unique letters
  let letterToNum = new Map();  // letter -> code
  let numToLetter = new Map();
  let discovered = new Set();   // letters discovered
  let activeNum = null;
  let wrongGuesses = 0;
  let hintsUsed = 0;
  let pointsThis = 0;

  /* ============ بدء جولة ============ */
  function startRound() {
    round = PHRASES.slice().sort(() => Math.random() - 0.5).slice(0, ROUND_SIZE);
    pIdx = 0;
    totalPoints = 0;
    wrongTotal = 0;
    loadPuzzle();
  }

  function loadPuzzle() {
    if (pIdx >= round.length) { finishRound(); return; }
    const p = round[pIdx];
    phrase = normalize(p.raw);

    // build unique letters
    const set = new Set();
    [...phrase].forEach(ch => { if (isArabicLetter(ch)) set.add(ch); });
    lettersInPhrase = [...set];

    // assign random codes 1..N
    const codes = Array.from({ length: lettersInPhrase.length }, (_, i) => i + 1);
    codes.sort(() => Math.random() - 0.5);
    letterToNum = new Map();
    numToLetter = new Map();
    lettersInPhrase.forEach((l, i) => {
      letterToNum.set(l, codes[i]);
      numToLetter.set(codes[i], l);
    });

    discovered = new Set();
    activeNum = null;
    wrongGuesses = 0;
    hintsUsed = 0;
    pointsThis = 100;

    // give 1 free letter (the most common)
    const freq = new Map();
    [...phrase].forEach(ch => { if (isArabicLetter(ch)) freq.set(ch, (freq.get(ch) || 0) + 1); });
    let freebie = null, max = 0;
    freq.forEach((v, k) => { if (v > max) { max = v; freebie = k; } });
    if (freebie) discovered.add(freebie);

    document.getElementById("reveal").classList.remove("open");
    document.getElementById("reveal-btn").disabled = true;
    document.getElementById("total-letters").textContent = lettersInPhrase.length;

    renderAll();
  }

  /* ============ التصيير ============ */
  function renderAll() {
    renderCipherWords();
    renderKeyboard();
    renderKeyGrid();
    updateHUD();
  }

  function renderCipherWords() {
    const wrap = document.getElementById("cipher-words");
    wrap.innerHTML = "";
    const words = phrase.split(" ");
    words.forEach(word => {
      const wEl = document.createElement("div");
      wEl.className = "cipher-word";
      [...word].forEach((ch, i) => {
        if (!isArabicLetter(ch)) return;
        const cell = document.createElement("button");
        cell.className = "cipher-cell";
        cell.dataset.num = letterToNum.get(ch);
        cell.dataset.letter = ch;
        const num = letterToNum.get(ch);
        const isDiscovered = discovered.has(ch);
        cell.innerHTML = `
          <span class="letter">${isDiscovered ? ch : ""}</span>
          <span class="num">${num}</span>
        `;
        if (!isDiscovered) cell.classList.add("empty");
        if (isDiscovered) cell.classList.add("correct");
        if (activeNum === num && !isDiscovered) cell.classList.add("active");
        cell.addEventListener("click", () => onCellClick(num, ch));
        wEl.appendChild(cell);
      });
      wrap.appendChild(wEl);
    });

    document.getElementById("found-letters").textContent = discovered.size;
    document.getElementById("selected-hint").textContent = activeNum
      ? `الرقم المحدّد: ${activeNum} · اضغط الحرف من لوحة المفاتيح`
      : "حدّد رقماً أوّلاً";
  }

  function renderKeyboard() {
    const kb = document.getElementById("keyboard");
    kb.innerHTML = "";
    ARABIC_ALPHABET.forEach(letter => {
      const b = document.createElement("button");
      b.className = "kbd-key";
      b.textContent = letter;
      b.dataset.letter = letter;
      const isUsed = discovered.has(letter);
      if (isUsed) {
        b.style.opacity = "0.35";
        b.style.cursor = "not-allowed";
      }
      b.addEventListener("click", () => onKeyboard(letter));
      kb.appendChild(b);
    });
  }

  function renderKeyGrid() {
    const grid = document.getElementById("key-grid");
    grid.innerHTML = "";
    // sort by code
    const list = [...numToLetter.entries()].sort((a, b) => a[0] - b[0]);
    list.forEach(([num, letter]) => {
      const cell = document.createElement("div");
      const isFound = discovered.has(letter);
      cell.className = "cipher-key-cell" + (isFound ? " discovered" : "");
      cell.innerHTML = `<span class="n">${num}</span>${isFound ? letter : "؟"}`;
      grid.appendChild(cell);
    });
    document.getElementById("key-pill").textContent = `${discovered.size} / ${lettersInPhrase.length}`;
  }

  /* ============ التفاعل ============ */
  function onCellClick(num, letter) {
    if (discovered.has(letter)) return; // already done
    activeNum = num;
    renderCipherWords();
    AudioBus.tick(620);
  }

  function onKeyboard(letter) {
    if (activeNum == null) {
      // try to find an unused number — flash hint
      flashTip("حدِّد رقماً من الجملة أوّلاً.");
      return;
    }
    if (discovered.has(letter)) return;

    const correctLetter = numToLetter.get(activeNum);
    if (letter === correctLetter) {
      discovered.add(letter);
      AudioBus.success();
      Particles.fire(20, { colors: ["#E0D5F2","#FFE9A8","#CDEBD7"], originX: "50%", originY: "30%" });
      activeNum = null;
      renderAll();
      if (discovered.size === lettersInPhrase.length) {
        onPuzzleSolved();
      }
    } else {
      AudioBus.fail();
      wrongGuesses++;
      wrongTotal++;
      pointsThis = Math.max(0, pointsThis - 8);
      // shake the active cells
      document.querySelectorAll(`.cipher-cell[data-num="${activeNum}"]`).forEach(c => {
        c.classList.add("wrong");
        setTimeout(() => c.classList.remove("wrong"), 400);
      });
      updateHUD();
    }
  }

  function useHint() {
    // reveal a random undiscovered letter
    const remaining = lettersInPhrase.filter(l => !discovered.has(l));
    if (!remaining.length) {
      flashTip("جميع الحروف مكشوفة!");
      return;
    }
    const letter = remaining[Math.floor(Math.random() * remaining.length)];
    discovered.add(letter);
    hintsUsed++;
    pointsThis = Math.max(0, pointsThis - 12);
    AudioBus.pop();
    activeNum = null;
    renderAll();
    if (discovered.size === lettersInPhrase.length) onPuzzleSolved();
  }

  function onPuzzleSolved() {
    AudioBus.success();
    Particles.fire(80);
    totalPoints += pointsThis;
    const p = round[pIdx];
    document.getElementById("reveal-quote").textContent = p.raw;
    document.getElementById("reveal-src").textContent = p.src;
    document.getElementById("reveal-meaning").textContent = p.meaning;
    document.getElementById("reveal").classList.add("open");
    document.getElementById("reveal-btn").disabled = false;
    updateHUD();
  }

  function nextPuzzle() {
    pIdx++;
    loadPuzzle();
  }

  /* ============ HUD ============ */
  function updateHUD() {
    document.getElementById("puzzle-idx").textContent = pIdx + 1;
    document.getElementById("wrong-guesses").textContent = wrongTotal;
    document.getElementById("points").textContent = totalPoints + pointsThis;
    document.getElementById("best").textContent =
      STORAGE.best > 0 ? `${STORAGE.best} نقطة` : "—";
  }

  function flashTip(msg) {
    let t = document.getElementById("c-flash");
    if (!t) {
      t = document.createElement("div");
      t.id = "c-flash";
      t.style.cssText = "position:fixed; top:24px; right:50%; transform:translateX(50%); background:var(--ink); color:#FBF6EC; padding:10px 18px; border-radius:999px; font-weight:700; font-size:13px; z-index:200; box-shadow: var(--shadow-lg); transition: opacity 0.3s ease;";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = "1";
    clearTimeout(t._h);
    t._h = setTimeout(() => t.style.opacity = "0", 2200);
  }

  /* ============ النهاية ============ */
  function finishRound() {
    if (totalPoints > STORAGE.best) STORAGE.best = totalPoints;
    STORAGE.plays++;
    Storage.set(STORAGE_KEY, STORAGE);
    Particles.fire(140);
    const max = ROUND_SIZE * 100;
    document.getElementById("win-summary").innerHTML = `
      فككتَ ${ROUND_SIZE} شفرات في هذه الجولة.
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-2); margin-top: var(--s-3);">
        <div><strong>النقاط</strong>${totalPoints} / ${max}</div>
        <div><strong>أخطاء</strong>${wrongTotal}</div>
        <div><strong>أعلى نتيجة</strong>${STORAGE.best}</div>
      </div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        أنشطةُ فكِّ الشفرات تُحسِّن الذاكرة والتفكير المنطقي، وهي تمرينٌ ممتاز للعقل.
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 700);
  }

  /* ============ ربط ============ */
  document.getElementById("hint-btn").addEventListener("click", useHint);
  document.getElementById("reveal-btn").addEventListener("click", nextPuzzle);

  document.addEventListener("keydown", e => {
    const k = e.key;
    // Arabic letter? If user types directly
    if (k.length === 1 && isArabicLetter(k)) {
      onKeyboard(k);
    }
  });

  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(startRound, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ تشغيل ============ */
  startRound();
})();
