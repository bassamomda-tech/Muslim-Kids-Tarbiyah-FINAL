/* ============================================================
   LETTER SOUNDS — أصوات الحروف (ages 5–6)
   1) tap a letter → hear its name + an example word
   2) quiz: "which picture starts with this letter?" — 8 correct → win-modal
   ============================================================ */
(function () {
  "use strict";

  /* alt: other letters a child might use to name the same picture → never a distractor for them */
  const L = [
    { ch: "أ", name: "أَلِف",  word: "أَرْنَب",   e: "🐇", en: "Rabbit" },
    { ch: "ب", name: "بَاء",   word: "بَطَّة",    e: "🦆", en: "Duck" },
    { ch: "ت", name: "تَاء",   word: "تُفَّاحَة",  e: "🍎", en: "Apple" },
    { ch: "ث", name: "ثَاء",   word: "ثُوم",     e: "🧄", en: "Garlic" },
    { ch: "ج", name: "جِيم",   word: "جَمَل",    e: "🐪", en: "Camel", alt: "ب" },
    { ch: "ح", name: "حَاء",   word: "حِصَان",   e: "🐎", en: "Horse", alt: "خ" },
    { ch: "خ", name: "خَاء",   word: "خَرُوف",   e: "🐑", en: "Sheep", alt: "ك" },
    { ch: "د", name: "دَال",   word: "دَجَاجَة",  e: "🐔", en: "Chicken", alt: "ف" },
    { ch: "ذ", name: "ذَال",   word: "ذُرَة",    e: "🌽", en: "Corn" },
    { ch: "ز", name: "زَاي",   word: "زَرَافَة",  e: "🦒", en: "Giraffe" },
    { ch: "س", name: "سِين",   word: "سَمَكَة",  e: "🐟", en: "Fish", alt: "ح" },
    { ch: "ش", name: "شِين",   word: "شَمْس",    e: "☀️", en: "Sun" },
    { ch: "ص", name: "صَاد",   word: "صَارُوخ",  e: "🚀", en: "Rocket" },
    { ch: "ط", name: "طَاء",   word: "طَائِرَة",  e: "✈️", en: "Airplane" },
    { ch: "ظ", name: "ظَاء",   word: "ظَرْف",    e: "✉️", en: "Envelope", alt: "ر" },
    { ch: "ع", name: "عَيْن",  word: "عِنَب",    e: "🍇", en: "Grapes" },
    { ch: "ف", name: "فَاء",   word: "فِيل",     e: "🐘", en: "Elephant" },
    { ch: "ق", name: "قَاف",   word: "قَلَم",    e: "✏️", en: "Pencil", alt: "ر" },
    { ch: "ك", name: "كَاف",   word: "كِتَاب",   e: "📖", en: "Book" },
    { ch: "ل", name: "لَام",   word: "لَيْمُون",  e: "🍋", en: "Lemon" },
    { ch: "م", name: "مِيم",   word: "مَوْز",    e: "🍌", en: "Banana" },
    { ch: "ن", name: "نُون",   word: "نَحْلَة",  e: "🐝", en: "Bee" },
    { ch: "هـ", name: "هَاء",   word: "هَدِيَّة",  e: "🎁", en: "Gift" },
    { ch: "و", name: "وَاو",   word: "وَرْدَة",  e: "🌹", en: "Rose", alt: "ز" },
  ];
  const GOAL = 8, CHOICES = 3;

  const $ = (id) => document.getElementById(id);
  let correct = 0, mistakes = 0, cur = null, locked = false, used = [];

  /* ---------- speech: fixed short texts only ---------- */
  function say(text) {
    try {
      const S = window.speechSynthesis; if (!S) return;
      S.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ar-SA"; u.rate = 0.8;
      S.speak(u);
    } catch (e) {}
  }
  const full = (x) => x.name + "، " + x.word;
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ---------- part 1: learn ---------- */
  function buildLetters() {
    const box = $("ls-letters");
    L.forEach((x, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "ls-letter";
      b.setAttribute("aria-label", x.name);
      b.innerHTML = `<span>${x.ch}</span><small aria-hidden="true">${x.e}</small>`;
      b.addEventListener("click", () => {
        b.classList.add("heard");
        AudioBus.pop();
        show(x);
        say(full(x));
      });
      box.appendChild(b);
    });
  }
  function show(x) {
    $("ls-show").innerHTML = `<span class="big">${x.ch}</span><span class="emo" aria-hidden="true">${x.e}</span><span class="w">${x.word}<small class="en-only">${x.en}</small></span>`;
  }

  /* ---------- part 2: quiz ---------- */
  function newRound() {
    locked = false;
    if (used.length >= L.length) used = [];
    let pool = L.filter((x) => used.indexOf(x.ch) < 0);
    cur = pool[Math.floor(Math.random() * pool.length)];
    used.push(cur.ch);
    const others = shuffle(L.filter((x) => x !== cur && x.alt !== cur.ch)).slice(0, CHOICES - 1);
    const opts = shuffle([cur].concat(others));
    $("ls-target-letter").textContent = cur.ch;
    const box = $("ls-choices");
    box.innerHTML = "";
    opts.forEach((x) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "ls-choice";
      b.dataset.ch = x.ch;
      b.setAttribute("aria-label", x.word);
      b.innerHTML = `<span aria-hidden="true">${x.e}</span><small>${x.word}</small>`;
      b.addEventListener("click", () => pick(x, b));
      box.appendChild(b);
    });
    setFb("أيّ صورة تبدأ بهذا الحرف؟");
  }

  function pick(x, b) {
    if (locked || b.classList.contains("no")) return;
    if (x === cur) {
      locked = true;
      b.classList.add("right", "pop");
      correct++;
      AudioBus.success();
      say(full(cur));
      Particles.fire(30, { originX: "50%", originY: "60%" });
      updateStats();
      setFb("أحسنت! إجابة صحيحة", "good");
      if (correct >= GOAL) return setTimeout(win, 900);
      setTimeout(newRound, 1700);
    } else {
      mistakes++;
      b.classList.add("no", "shake");
      AudioBus.fail();
      updateStats();
      setFb("ليست هذه — استمع للحرف وحاول مرة أخرى", "oops");
    }
  }

  function setFb(t, cls) { const f = $("feedback"); f.textContent = t; f.className = "kp-feedback" + (cls ? " " + cls : ""); }
  function updateStats() {
    $("stat-correct").textContent = correct + "/" + GOAL;
    $("stat-mistakes").textContent = mistakes;
    const pips = $("ls-pips"); pips.innerHTML = "";
    for (let i = 0; i < GOAL; i++) { const s = document.createElement("span"); if (i < correct) s.className = "on"; pips.appendChild(s); }
  }

  function win() {
    $("win-mistakes").textContent = mistakes;
    setFb("ما شاء الله! عرفت الحروف", "good");
    Particles.fire(110);
    Modal.open("win-modal");
  }

  function reset() {
    correct = 0; mistakes = 0; used = [];
    updateStats();
    newRound();
  }

  $("ls-hear").addEventListener("click", () => { if (cur) say(cur.name); });
  $("reset-btn").addEventListener("click", reset);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); reset(); });
  AudioBus.bindButton($("mute-btn"));

  buildLetters();
  show(L[0]);
  reset();
})();
