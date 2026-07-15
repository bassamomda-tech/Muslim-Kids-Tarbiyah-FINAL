/* mkvoice-loader */(function(){try{var cs=document.currentScript,src=(cs&&cs.src)||"";var m=src.match(/^(.*\/corners\/)/);var base=m?m[1]:"";if(base&&!window.MKVoice&&!document.querySelector("script[data-mkvoice]")){var s=document.createElement("script");s.src=base+"shared/voice-engine.js";s.setAttribute("data-mkvoice","1");document.head.appendChild(s);}}catch(e){}})();
/* ============================================================
   RECITER — المقرأة الذكية
   استمِع إلى الآية/الذِّكر وهي تُتلى كلمةً كلمة، ثم سَمِّعها بترتيب
   كلماتها الصحيح. تدريبٌ على الإنصات وحفظ الترتيب.
   ============================================================ */

(function () {
  "use strict";

  const PHRASES = [
    { short: "البسملة", words: ["بِسْمِ","اللهِ","الرَّحْمَٰنِ","الرَّحِيمِ"] },
    { short: "الحمد", words: ["الْحَمْدُ","لِلَّهِ","رَبِّ","الْعَالَمِينَ"] },
    { short: "التسبيح", words: ["سُبْحَانَ","اللهِ","وَبِحَمْدِهِ"] },
    { short: "التهليل", words: ["لَا","إِلَٰهَ","إِلَّا","اللهُ"] },
    { short: "الاستعانة", words: ["إِيَّاكَ","نَعْبُدُ","وَإِيَّاكَ","نَسْتَعِينُ"] },
    { short: "دعاء العلم", words: ["رَبِّ","زِدْنِي","عِلْمًا"] },
  ];

  const STORAGE_KEY = "mk_reciter_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  let idx = 0;
  let answer = [];          // مؤشرات الكلمات المرتّبة
  let bankOrder = [];       // ترتيب البنك المخلوط (مصفوفة مؤشرات)
  let solved = 0;
  let stars = 0;
  let mistakes = 0;
  let listened = false;
  let playing = false;

  /* ---------- تحميل ---------- */
  function load() {
    const p = PHRASES[idx];
    answer = [];
    listened = false;
    bankOrder = shuffle(p.words.map((_, i) => i));
    if (bankOrder.every((v, i) => v === i) && p.words.length > 1) bankOrder = shuffle(bankOrder);

    document.getElementById("r-idx").textContent = idx + 1;
    renderPhrase();
    renderAnswer();
    renderBank();
    renderList();
    updateHUD();
  }

  function renderPhrase() {
    const p = PHRASES[idx];
    const root = document.getElementById("rc-phrase");
    root.innerHTML = "";
    p.words.forEach((w, i) => {
      const s = document.createElement("span");
      s.className = "rc-w"; s.dataset.i = i; s.textContent = w;
      root.appendChild(s);
    });
  }

  function renderAnswer() {
    const root = document.getElementById("rc-answer");
    root.innerHTML = "";
    answer.forEach((wi, pos) => {
      const c = document.createElement("span");
      c.className = "rc-chip placed";
      c.textContent = PHRASES[idx].words[wi];
      c.addEventListener("click", () => { if (!playing) takeBack(pos); });
      root.appendChild(c);
    });
  }

  function renderBank() {
    const root = document.getElementById("rc-bank");
    root.innerHTML = "";
    bankOrder.forEach(wi => {
      const c = document.createElement("span");
      c.className = "rc-chip" + (answer.includes(wi) ? " used" : "");
      c.textContent = PHRASES[idx].words[wi];
      c.dataset.wi = wi;
      c.addEventListener("click", () => { if (!playing) place(wi); });
      root.appendChild(c);
    });
  }

  /* ---------- تفاعل ---------- */
  function place(wi) {
    if (answer.includes(wi)) return;
    const expected = answer.length;       // الموضع الصحيح التالي
    if (wi === expected) {
      answer.push(wi);
      AudioBus.pop();
      flashWord(wi);
      renderAnswer(); renderBank();
      if (answer.length === PHRASES[idx].words.length) onSolved();
    } else {
      mistakes++;
      AudioBus.fail();
      // أظهِر الكلمة الخاطئة لحظياً ثم أعِدها
      answer.push(wi);
      renderAnswer();
      const chips = document.querySelectorAll("#rc-answer .rc-chip");
      const last = chips[chips.length - 1];
      if (last) last.classList.add("wrong");
      setTimeout(() => { answer.pop(); renderAnswer(); renderBank(); updateHUD(); }, 480);
      updateHUD();
    }
  }

  function takeBack(pos) {
    // أرجِع هذه الكلمة وكلَّ ما بعدها للحفاظ على الترتيب
    answer = answer.slice(0, pos);
    AudioBus.tick(440);
    renderAnswer(); renderBank();
  }

  function flashWord(wi) {
    const w = document.querySelector(`.rc-w[data-i="${wi}"]`);
    if (w) { w.classList.add("lit"); setTimeout(() => w.classList.remove("lit"), 400); }
  }

  function onSolved() {
    const p = PHRASES[idx];
    p._solved = true;
    solved++;
    let s = (mistakesThisPhrase() === 0 && listened) ? 3 : (mistakesThisPhrase() <= 1 ? 2 : 1);
    p._stars = s; stars += s;
    AudioBus.success();
    Particles.fire(50, { colors: ["#CDEBD7","#FFE9A8","#6A8E7F"] });
    say(p.words.join(" "));
    renderList(); updateHUD();
    setTimeout(() => { if (idx + 1 < PHRASES.length) { idx++; load(); } else finish(); }, 1200);
  }
  let _mBefore = 0;
  function mistakesThisPhrase() { const m = mistakes - _mBefore; _mBefore = mistakes; return m; }

  /* ---------- تلاوة المعلّم ---------- */
  function playTeacher() {
    if (playing) return;
    playing = true; listened = true;
    const btn = document.getElementById("rc-play");
    btn.classList.add("playing"); btn.disabled = true;
    const words = document.querySelectorAll("#rc-phrase .rc-w");
    say(PHRASES[idx].words.join(" "));
    let i = 0;
    const step = () => {
      words.forEach(w => w.classList.remove("lit"));
      if (i < words.length) {
        words[i].classList.add("lit");
        AudioBus.tone(420 + i * 40, 0.18, "sine", 0.06);
        i++;
        setTimeout(step, 620);
      } else {
        setTimeout(() => {
          words.forEach(w => w.classList.remove("lit"));
          playing = false; btn.classList.remove("playing"); btn.disabled = false;
        }, 300);
      }
    };
    step();
  }

  function say(text) {
    try {
      if (!("speechSynthesis" in window)) return;
      const u = new SpeechSynthesisUtterance(window.MKVoice?MKVoice.fixText(text):text);
      u.lang = "ar-SA"; u.rate = 0.78;
      const ar = (window.MKVoice&&MKVoice.bestVoice("ar")) || speechSynthesis.getVoices().find(v => /ar/i.test(v.lang));
      if (ar) u.voice = ar;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ---------- side list ---------- */
  function renderList() {
    const root = document.getElementById("rc-list");
    root.innerHTML = "";
    PHRASES.forEach((p, i) => {
      const it = document.createElement("div");
      it.className = "rc-list-item" + (p._solved ? " done" : (i === idx ? " current" : ""));
      it.innerHTML = `<span class="n">${p._solved ? "✓" : i + 1}</span><span>${p.short}</span>`;
      root.appendChild(it);
    });
    document.getElementById("rc-pill").textContent = `${solved}/${PHRASES.length}`;
  }

  /* ---------- HUD ---------- */
  function updateHUD() {
    document.getElementById("r-stars").textContent = stars;
    document.getElementById("r-mistakes").textContent = mistakes;
    document.getElementById("best").textContent = STORE.best > 0 ? STORE.best + " ⭐" : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function finish() {
    if (stars > STORE.best) STORE.best = stars;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(170);
    const max = PHRASES.length * 3;
    document.getElementById("win-summary").innerHTML = `
      <div>سمَّعتَ <strong>${solved}</strong> آياتٍ وأذكار بـ <strong>${stars}</strong> نجمة من ${max}.</div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px;">
        الإنصاتُ أوّلُ الحفظ. قال تعالى: ﴿وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنْصِتُوا﴾.
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function newRound() {
    PHRASES.forEach(p => { delete p._solved; delete p._stars; });
    idx = 0; solved = 0; stars = 0; mistakes = 0; _mBefore = 0;
    load();
  }

  /* ---------- bind ---------- */
  document.getElementById("rc-play").addEventListener("click", playTeacher);
  document.getElementById("rc-clear").addEventListener("click", () => { answer = []; renderAnswer(); renderBank(); AudioBus.tick(440); });
  document.getElementById("rc-replay-word").addEventListener("click", () => say(PHRASES[idx].words.join(" ")));
  document.getElementById("win-replay").addEventListener("click", () => { Modal.close("win-modal"); setTimeout(newRound, 300); });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));
  if ("speechSynthesis" in window) { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => {}; }

  load();
})();
