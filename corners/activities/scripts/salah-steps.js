/* ============================================================
   SALAH STEPS — خطوات الصلاة (ركعة واحدة)
   Tap the steps of one rak'ah in order; each placed step shows
   (and can speak) what is said in it. Win → win-modal.
   ============================================================ */
(function () {
  "use strict";

  /* simple posture pictograms — abstract silhouettes, no faces */
  const MAT = '<path d="M6 59h52" stroke-width="3" opacity=".45"/>';
  const P = (body) => `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${MAT}${body}</svg>`;
  const POSE = {
    takbir: P('<circle cx="32" cy="11" r="6" fill="currentColor" stroke="none"/><path d="M32 20v19M32 39l-4 16M32 39l4 16M32 24l-9-3v-10M32 24l9-3v-10"/>'),
    qiyam:  P('<circle cx="32" cy="11" r="6" fill="currentColor" stroke="none"/><path d="M32 20v19M32 39l-4 16M32 39l4 16M32 24l-6 7h11"/>'),
    ruku:   P('<circle cx="50" cy="30" r="6" fill="currentColor" stroke="none"/><path d="M20 55V33h23M38 33l-15 10"/>'),
    itidal: P('<circle cx="32" cy="11" r="6" fill="currentColor" stroke="none"/><path d="M32 20v19M32 39l-4 16M32 39l4 16M32 24l-4 13M32 24l4 13"/>'),
    sujud:  P('<circle cx="50" cy="51" r="5.5" fill="currentColor" stroke="none"/><path d="M8 56h12l6-15 18 8M40 47l3 9"/>'),
    jalsa:  P('<circle cx="22" cy="17" r="6" fill="currentColor" stroke="none"/><path d="M12 56h20M18 50h10l4 6M18 50l3-24M21 31l9 15"/>'),
  };

  const STEPS = [
    { id: "takbir", name: "تكبيرة الإحرام",          say: "اللَّهُ أَكْبَرُ",                                   en: "Allahu akbar — Allah is the Greatest" },
    { id: "qiyam",  name: "القيام وقراءة الفاتحة",    say: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",              en: "Al-hamdu lillahi rabbil-'alamin — the Fatihah" },
    { id: "ruku",   name: "الركوع",                  say: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",                       en: "Subhana rabbiyal-'azim — Glory to my Lord, the Most Great" },
    { id: "itidal", name: "الرفع من الركوع",          say: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ", en: "Sami'allahu liman hamidah, rabbana wa lakal-hamd" },
    { id: "sujud",  name: "السجود",                  say: "سُبْحَانَ رَبِّيَ الْأَعْلَى",                        en: "Subhana rabbiyal-a'la — Glory to my Lord, the Most High" },
    { id: "jalsa",  name: "الجلسة بين السجدتين",      say: "رَبِّ اغْفِرْ لِي",                                  en: "Rabbighfir li — My Lord, forgive me" },
    { id: "sujud2", pose: "sujud", name: "السجدة الثانية", say: "سُبْحَانَ رَبِّيَ الْأَعْلَى",             en: "Subhana rabbiyal-a'la (second prostration)" },
  ];
  const N = STEPS.length;

  const $ = (id) => document.getElementById(id);
  const pool = $("salah-pool"), track = $("salah-track"), fb = $("feedback");
  let next = 0, mistakes = 0, best = Storage.get("salah_steps_best", null);

  /* ---------- speech (fixed short texts → cached once by the site voice) ---------- */
  function say(text, btn) {
    try {
      const S = window.speechSynthesis; if (!S) return;
      S.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ar-SA"; u.rate = 0.85;
      if (btn) { btn.classList.add("speaking"); u.onend = u.onerror = () => btn.classList.remove("speaking"); setTimeout(() => btn.classList.remove("speaking"), 4000); }
      S.speak(u);
    } catch (e) {}
  }
  function sayBtn(text) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "say-btn"; b.textContent = "🔊";
    b.setAttribute("aria-label", "استمع");
    b.addEventListener("click", (e) => { e.stopPropagation(); say(text, b); });
    return b;
  }

  function setFb(text, cls) { fb.textContent = text; fb.className = "kp-feedback" + (cls ? " " + cls : ""); }
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function buildTrack() {
    track.innerHTML = "";
    STEPS.forEach((s, i) => {
      const row = document.createElement("div");
      row.className = "salah-slot" + (i === 0 ? " next" : "");
      row.dataset.i = i;
      row.innerHTML = `<span class="num">${i + 1}</span><span class="pose"></span><div class="txt"><div class="hint">؟</div></div>`;
      track.appendChild(row);
    });
  }

  function buildPool() {
    pool.innerHTML = "";
    let order = shuffle(STEPS.map((_, i) => i));
    while (order.every((v, i) => v === i)) order = shuffle(order);
    order.forEach((i) => {
      const s = STEPS[i];
      const card = document.createElement("div");
      card.className = "salah-card";
      card.dataset.i = i;
      const pick = document.createElement("button");
      pick.type = "button"; pick.className = "pick";
      pick.innerHTML = `<span class="pose">${POSE[s.pose || s.id]}</span><span class="s-name">${s.name}</span>`;
      pick.addEventListener("click", () => choose(i, card));
      card.appendChild(pick);
      card.appendChild(sayBtn(s.say));
      pool.appendChild(card);
    });
  }

  function choose(i, card) {
    const s = STEPS[i];
    /* the two prostrations say the same words — either card may fill the 5th or 7th place */
    const ok = i === next || (STEPS[i].say === STEPS[next].say && (STEPS[i].pose || STEPS[i].id) === (STEPS[next].pose || STEPS[next].id));
    if (!ok) {
      mistakes++; $("stat-mistakes").textContent = mistakes;
      AudioBus.fail();
      card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake", "wrong");
      setTimeout(() => card.classList.remove("wrong"), 700);
      setFb("ليست هذه الخطوة التالية — فكّر وحاول مرة أخرى", "oops");
      return;
    }
    const slotStep = STEPS[next];
    const row = track.children[next];
    row.classList.remove("next"); row.classList.add("filled", "pop");
    row.querySelector(".pose").innerHTML = POSE[slotStep.pose || slotStep.id];
    const txt = row.querySelector(".txt");
    txt.innerHTML = `<div class="s-name">${slotStep.name}</div><div class="s-say">${slotStep.say}</div><div class="en-only mean" style="font-size:12px;color:var(--muted)">${slotStep.en}</div>`;
    row.appendChild(sayBtn(slotStep.say));
    card.remove();
    AudioBus.success();
    say(slotStep.say);
    next++;
    $("stat-placed").textContent = next + "/" + N;
    if (next < N) {
      track.children[next].classList.add("next");
      setFb("أحسنت! خطوة صحيحة — ما الخطوة التالية؟", "good");
    } else {
      win();
    }
  }

  function win() {
    setFb("ما شاء الله! رتّبت الركعة كاملة", "good");
    if (best === null || mistakes < best) { best = mistakes; Storage.set("salah_steps_best", best); }
    $("stat-best").textContent = best;
    $("win-mistakes").textContent = mistakes;
    Particles.fire(110);
    setTimeout(() => Modal.open("win-modal"), 700);
  }

  function reset() {
    next = 0; mistakes = 0;
    $("stat-mistakes").textContent = "0";
    $("stat-placed").textContent = "0/" + N;
    $("stat-best").textContent = best === null ? "—" : best;
    setFb("اضغط على الخطوة الأولى من الصلاة");
    buildTrack(); buildPool();
  }

  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); reset(); });
  $("reset-btn").addEventListener("click", reset);
  $("shuffle-btn").addEventListener("click", buildPoolKeep);
  function buildPoolKeep() {   // reshuffle only the cards still in the pool
    const cards = shuffle([...pool.children]); cards.forEach((c) => pool.appendChild(c)); AudioBus.pop();
  }
  AudioBus.bindButton($("mute-btn"));
  reset();
})();
