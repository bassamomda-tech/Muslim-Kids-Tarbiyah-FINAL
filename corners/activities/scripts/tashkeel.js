/* mkvoice-loader */(function(){try{var cs=document.currentScript,src=(cs&&cs.src)||"";var m=src.match(/^(.*\/corners\/)/);var base=m?m[1]:"";if(base&&!window.MKVoice&&!document.querySelector("script[data-mkvoice]")){var s=document.createElement("script");s.src=base+"shared/voice-engine.js";s.setAttribute("data-mkvoice","1");document.head.appendChild(s);}}catch(e){}})();
/* ============================================================
   TASHKEEL — لعبة الحركات
   ضَع الحركةَ الصحيحة على كلِّ حرف: فتحة، ضمّة، كسرة، أو سكون.
   الحركات (Combining marks):
     فتحة \u064E  ضمّة \u064F  كسرة \u0650  سكون \u0652
   ============================================================ */

(function () {
  "use strict";

  const H = {
    fatha:  { mark: "\u064E", name: "فَتْحة", sound: "a", glyph: "بَ" },
    damma:  { mark: "\u064F", name: "ضَمّة", sound: "u", glyph: "بُ" },
    kasra:  { mark: "\u0650", name: "كَسْرة", sound: "i", glyph: "بِ" },
    sukoon: { mark: "\u0652", name: "سُكون", sound: "—", glyph: "بْ" },
  };

  /* كل كلمة: حروفها مع الحركة الصحيحة + معنى + نطق لاتيني + أيقونة */
  const WORDS = [
    { icon: "✍️", meaning: "كَتَبَ", translit: "kataba", say: "كَتَبَ",
      letters: [["ك","fatha"],["ت","fatha"],["ب","fatha"]] },
    { icon: "📖", meaning: "عَلِمَ", translit: "ʿalima", say: "عَلِمَ",
      letters: [["ع","fatha"],["ل","kasra"],["م","fatha"]] },
    { icon: "🍶", meaning: "شَرِبَ", translit: "shariba", say: "شَرِبَ",
      letters: [["ش","fatha"],["ر","kasra"],["ب","fatha"]] },
    { icon: "🤝", meaning: "كَرُمَ", translit: "karuma", say: "كَرُمَ",
      letters: [["ك","fatha"],["ر","damma"],["م","fatha"]] },
    { icon: "🌙", meaning: "صَوْم", translit: "ṣawm", say: "صَوْم",
      letters: [["ص","fatha"],["و","sukoon"],["م","sukoon"]] },
    { icon: "🕌", meaning: "مَسْجِد", translit: "masjid", say: "مَسْجِد",
      letters: [["م","fatha"],["س","sukoon"],["ج","kasra"],["د","sukoon"]] },
    { icon: "🤲", meaning: "مُسْلِم", translit: "muslim", say: "مُسْلِم",
      letters: [["م","damma"],["س","sukoon"],["ل","kasra"],["م","sukoon"]] },
    { icon: "💎", meaning: "صَدَقَ", translit: "ṣadaqa", say: "صَدَقَ",
      letters: [["ص","fatha"],["د","fatha"],["ق","fatha"]] },
  ];

  const STORAGE_KEY = "mk_tashkeel_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  let idx = 0;
  let solvedCount = 0;
  let stars = 0;
  let mistakes = 0;
  let assigned = [];        // الحركة المختارة لكل حرف أو null
  let activeLetter = -1;
  let attempts = 0;
  let hintUsed = false;

  /* ---------- تحميل كلمة ---------- */
  function load() {
    const w = WORDS[idx];
    assigned = new Array(w.letters.length).fill(null);
    activeLetter = -1; attempts = 0; hintUsed = false;

    document.getElementById("tk-icon").textContent = w.icon;
    document.getElementById("tk-meaning").textContent = w.meaning;
    document.getElementById("tk-translit").textContent = "(" + w.translit + ")";
    document.getElementById("t-idx").textContent = idx + 1;

    renderWord();
    renderChips();
    updateHUD();
  }

  function renderWord() {
    const w = WORDS[idx];
    const root = document.getElementById("tk-word");
    root.innerHTML = "";
    w.letters.forEach((pair, i) => {
      const el = document.createElement("button");
      el.className = "tk-letter";
      const base = pair[0];
      const h = assigned[i];
      el.innerHTML = `<span class="empty-mark"></span><span class="ch">${base}${h ? H[h].mark : ""}</span>
        <span class="slot-tag">${i + 1}</span>`;
      if (h) el.classList.add("has-h");
      if (i === activeLetter) el.classList.add("active");
      el.addEventListener("click", () => { activeLetter = i; renderWord(); AudioBus.tick(600); });
      root.appendChild(el);
    });
  }

  function renderChips() {
    const list = document.getElementById("tk-list");
    list.innerHTML = "";
    WORDS.forEach((w, i) => {
      const c = document.createElement("span");
      c.className = "tk-chip" + (w._solved ? " solved" : (i === idx ? " current" : ""));
      c.textContent = w._solved ? w.meaning : "كلمة " + (i + 1);
      list.appendChild(c);
    });
    document.getElementById("tk-pill").textContent = `${solvedCount}/${WORDS.length}`;
  }

  /* ---------- اختيار حركة ---------- */
  function pickHaraka(key) {
    if (activeLetter < 0) {
      // اختر أوّل حرفٍ فارغ تلقائياً
      const next = assigned.findIndex(a => !a);
      if (next < 0) { flashActiveHint(); return; }
      activeLetter = next;
    }
    assigned[activeLetter] = key;
    AudioBus.pop();
    // انتقل للحرف الفارغ التالي
    const next = assigned.findIndex(a => !a);
    activeLetter = next;
    renderWord();
    if (assigned.every(a => a)) setTimeout(check, 200);
  }

  function flashActiveHint() {
    const first = document.querySelector(".tk-letter");
    if (first) { first.classList.add("active"); }
  }

  /* ---------- تحقّق ---------- */
  function check() {
    const w = WORDS[idx];
    attempts++;
    let allRight = true;
    document.querySelectorAll(".tk-letter").forEach((el, i) => {
      if (!assigned[i]) { allRight = false; return; }
      if (assigned[i] === w.letters[i][1]) {
        el.classList.add("correct");
      } else {
        el.classList.add("wrong");
        allRight = false;
        const ii = i;
        setTimeout(() => {
          const e2 = document.querySelectorAll(".tk-letter")[ii];
          if (e2) { e2.classList.remove("wrong"); }
          assigned[ii] = null;
          renderWord();
        }, 600);
      }
    });

    if (allRight) onSolved();
    else { AudioBus.fail(); mistakes++; updateHUD(); }
  }

  function onSolved() {
    const w = WORDS[idx];
    w._solved = true;
    solvedCount++;
    let s = 3;
    if (attempts > 1 || hintUsed) s = 2;
    if (attempts > 3) s = 1;
    w._stars = s; stars += s;
    AudioBus.success();
    Particles.fire(50, { colors: ["#FFE9A8","#CDEBD7","#E0D5F2"] });
    say(w.say);
    renderChips(); updateHUD();
    setTimeout(() => {
      if (idx + 1 < WORDS.length) { idx++; load(); }
      else finish();
    }, 1100);
  }

  /* ---------- تلميح ---------- */
  function hint() {
    const w = WORDS[idx];
    const i = assigned.findIndex((a, k) => a !== w.letters[k][1]);
    if (i < 0) return;
    assigned[i] = w.letters[i][1];
    hintUsed = true;
    AudioBus.tick(540);
    activeLetter = assigned.findIndex(a => !a);
    renderWord();
    const el = document.querySelectorAll(".tk-letter")[i];
    if (el) el.classList.add("correct");
    if (assigned.every(a => a)) setTimeout(check, 250);
  }

  /* ---------- نطق (best-effort) ---------- */
  function say(text) {
    try {
      if (!("speechSynthesis" in window)) return chime();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ar-SA"; u.rate = 0.8;
      const voices = speechSynthesis.getVoices();
      const ar = (window.MKVoice&&MKVoice.bestVoice("ar")) || voices.find(v => /ar/i.test(v.lang));
      if (ar) u.voice = ar;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    } catch (e) { chime(); }
  }
  function chime() { AudioBus.chord([523, 659, 784], 0.18); }

  /* ---------- HUD ---------- */
  function updateHUD() {
    document.getElementById("t-stars").textContent = stars;
    document.getElementById("t-mistakes").textContent = mistakes;
    document.getElementById("best").textContent = STORE.best > 0 ? STORE.best + " ⭐" : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function finish() {
    if (stars > STORE.best) STORE.best = stars;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(170);
    const max = WORDS.length * 3;
    const rows = WORDS.map(w =>
      `<div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--line);">
        <span style="font-weight:700;">${w.meaning}</span>
        <span>${w._solved ? "★".repeat(w._stars) + "☆".repeat(3 - w._stars) : "—"}</span>
      </div>`).join("");
    document.getElementById("win-summary").innerHTML = `
      <div>ضبَطتَ حركاتِ <strong>${solvedCount}</strong> كلماتٍ بـ <strong>${stars}</strong> نجمة من ${max}.</div>
      <div style="margin-top:var(--s-3);">${rows}</div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px;">
        الحركاتُ روحُ الكلمة: الفتحةُ «أَ»، والضمّةُ «أُ»، والكسرةُ «إِ»، والسكونُ وقفٌ بلا حركة.
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  function newRound() {
    WORDS.forEach(w => { delete w._solved; delete w._stars; });
    idx = 0; solvedCount = 0; stars = 0; mistakes = 0;
    load();
  }

  /* ---------- bind palette ---------- */
  document.querySelectorAll(".tk-hbtn").forEach(btn => {
    btn.addEventListener("click", () => pickHaraka(btn.dataset.h));
  });
  document.getElementById("tk-check").addEventListener("click", () => {
    if (assigned.every(a => a)) check();
    else flashActiveHint();
  });
  document.getElementById("tk-hint").addEventListener("click", hint);
  document.getElementById("tk-clear").addEventListener("click", () => {
    assigned = assigned.map(() => null); activeLetter = -1; renderWord(); AudioBus.tick(440);
  });
  document.getElementById("tk-listen").addEventListener("click", () => say(WORDS[idx].say));
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(newRound, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  // تحميل الأصوات للنطق
  if ("speechSynthesis" in window) { speechSynthesis.onvoiceschanged = () => {}; speechSynthesis.getVoices(); }

  load();
  updateHUD();
})();
