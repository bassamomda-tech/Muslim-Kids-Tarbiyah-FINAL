/* ============================================================
   WHO — من أنا؟
   اكشِف الشخصيّةَ من تلميحاتها. كلَّما خمّنتَ بتلميحاتٍ أقل، زادت نقاطُك.
   ============================================================ */

(function () {
  "use strict";

  /* لكل شخصية: الاسم، أيقونة، 4 تلميحات (من الأصعب للأسهل) */
  const FIGURES = [
    { name: "آدم", ic: "🌍", hints: [
      "خلقني اللهُ بيدِه ونفخَ فيَّ من رُوحه.",
      "أمرَ اللهُ الملائكةَ أن تسجُدَ لي.",
      "عَلَّمني اللهُ أسماءَ كلِّ شيء.",
      "أنا أوّلُ البشر، وأبو الأنبياءِ جميعاً." ] },
    { name: "نوح", ic: "🚢", hints: [
      "لبِثتُ في قومي أدعوهم ألفَ سنةٍ إلا خمسين عاماً.",
      "أمرني اللهُ أن أصنعَ شيئاً عظيماً من الخشب.",
      "حمَلتُ من كلِّ زوجين اثنين.",
      "نجوتُ ومن آمنَ معي من الطوفان العظيم." ] },
    { name: "إبراهيم", ic: "🕋", hints: [
      "اتّخذني اللهُ خليلاً.",
      "حطّمتُ أصنامَ قومي ووضعتُ الفأسَ على كبيرِها.",
      "ألقَوني في النار فجعلها اللهُ برداً وسلاماً.",
      "بنيتُ الكعبةَ مع ابني إسماعيل." ] },
    { name: "يوسف", ic: "👑", hints: [
      "رأيتُ في المنامِ أحدَ عشرَ كوكباً والشمسَ والقمرَ ساجدين.",
      "ألقاني إخوتي في قاعِ البئر.",
      "كنتُ أُعبِّرُ الأحلامَ في السجن.",
      "صِرتُ عزيزاً على خزائنِ مصر." ] },
    { name: "موسى", ic: "🌊", hints: [
      "كلّمني اللهُ تكليماً.",
      "تحوّلت عصايَ إلى ثعبانٍ يسعى.",
      "أُرسِلتُ إلى فرعونَ الطاغية.",
      "فلقَ اللهُ لي البحرَ فعبَرتُ ببني إسرائيل." ] },
    { name: "يونس", ic: "🐋", hints: [
      "غاضبتُ قومي وذهبتُ مُغاضِباً.",
      "ركبتُ سفينةً فأُلقيتُ في البحر.",
      "التقمني الحوتُ فمكثتُ في بطنِه.",
      "ناديتُ في الظلمات: لا إله إلا أنت سبحانك إني كنتُ من الظالمين." ] },
    { name: "سليمان", ic: "🐜", hints: [
      "سخّر اللهُ لي الريحَ تجري بأمري.",
      "عُلِّمتُ منطقَ الطير وكلامَ النمل.",
      "سخّر اللهُ لي الجنَّ يعملون بين يدَيّ.",
      "كنتُ نبيّاً ومَلِكاً عظيماً، ووالدي داود." ] },
    { name: "أبو بكر", ic: "🤝", hints: [
      "صدّقتُ النبيَّ ﷺ حين كذّبه الناس.",
      "رافقتُه في الهجرةِ وكنّا في الغار.",
      "أنفقتُ مالي كلَّه في سبيلِ الله.",
      "أنا أوّلُ الخلفاءِ الراشدين، ولُقّبتُ بالصدّيق." ] },
  ];

  const ALL_NAMES = FIGURES.map(f => f.name);
  const STORAGE_KEY = "mk_who_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  let order = [];
  let idx = 0;
  let hintsShown = 1;
  let score = 0;
  let solved = 0;
  let answered = false;
  let options = [];

  /* ---------- تحميل ---------- */
  function load() {
    const f = FIGURES[order[idx]];
    hintsShown = 1; answered = false;
    document.getElementById("wh-silhouette").classList.remove("revealed");
    document.getElementById("wh-silhouette").textContent = "؟";
    document.getElementById("wh-q").innerHTML = `من أنا؟ <small>اقرأ التلميحات واختَر الإجابة</small>`;
    document.getElementById("w-idx").textContent = idx + 1;

    renderHints(f);
    renderOptions(f);
    document.getElementById("wh-next").classList.remove("show");
    const rh = document.getElementById("wh-reveal");
    rh.disabled = false;
    rh.querySelector(".cnt").textContent = `${hintsShown}/${f.hints.length}`;
    renderProgress();
    updateHUD();
  }

  function renderHints(f) {
    const root = document.getElementById("wh-hints");
    root.innerHTML = "";
    f.hints.forEach((h, i) => {
      const el = document.createElement("div");
      el.className = "wh-hint" + (i < hintsShown ? " show" : "");
      el.dataset.i = i;
      el.innerHTML = `<span class="n">${i + 1}</span><span>${i < hintsShown ? h : "…"}</span>`;
      root.appendChild(el);
    });
  }

  function renderOptions(f) {
    // 3 مشتّتات + الإجابة
    const others = ALL_NAMES.filter(n => n !== f.name);
    shuffle(others);
    options = shuffle([f.name, others[0], others[1], others[2]]);
    const root = document.getElementById("wh-options");
    root.innerHTML = "";
    options.forEach(nm => {
      const b = document.createElement("button");
      b.className = "wh-opt"; b.textContent = nm; b.dataset.name = nm;
      b.addEventListener("click", () => guess(nm, b));
      root.appendChild(b);
    });
  }

  /* ---------- كشف تلميح ---------- */
  function revealHint() {
    const f = FIGURES[order[idx]];
    if (hintsShown >= f.hints.length) return;
    hintsShown++;
    AudioBus.tick(560);
    const el = document.querySelector(`.wh-hint[data-i="${hintsShown - 1}"]`);
    if (el) { el.querySelector("span:last-child").textContent = f.hints[hintsShown - 1]; el.classList.add("show"); }
    const rh = document.getElementById("wh-reveal");
    rh.querySelector(".cnt").textContent = `${hintsShown}/${f.hints.length}`;
    if (hintsShown >= f.hints.length) rh.disabled = true;
  }

  /* ---------- تخمين ---------- */
  function guess(nm, btn) {
    if (answered) return;
    const f = FIGURES[order[idx]];
    if (nm === f.name) {
      answered = true;
      btn.classList.add("correct");
      const pts = Math.max(1, f.hints.length - (hintsShown - 1));
      score += pts; solved++;
      AudioBus.success();
      Particles.fire(50, { colors: ["#6A8E7F","#E0D5F2","#FFE9A8"] });
      const sil = document.getElementById("wh-silhouette");
      sil.classList.add("revealed"); sil.textContent = f.ic;
      document.getElementById("wh-q").innerHTML = `أنا <strong>${f.name}</strong> — أحسنتَ! <small>+${pts} نقاط</small>`;
      document.querySelectorAll(".wh-opt").forEach(o => { if (o !== btn) o.classList.add("dim"); });
      document.getElementById("wh-reveal").disabled = true;
      document.getElementById("wh-next").classList.add("show");
      renderProgress(); updateHUD();
    } else {
      btn.classList.add("wrong"); btn.classList.add("dim");
      AudioBus.fail();
      // اكشِف تلميحاً إضافياً مساعدةً
      revealHint();
    }
  }

  function next() {
    if (idx + 1 < order.length) { idx++; load(); }
    else finish();
  }

  /* ---------- progress ---------- */
  function renderProgress() {
    const root = document.getElementById("wh-progress");
    root.innerHTML = "";
    order.forEach((_, i) => {
      const c = document.createElement("span");
      c.className = "wh-pchip" + (i < idx || (i === idx && answered) ? " done" : (i === idx ? " current" : ""));
      c.textContent = i + 1;
      root.appendChild(c);
    });
    document.getElementById("wh-pill").textContent = `${solved}/${order.length}`;
  }

  /* ---------- HUD ---------- */
  function updateHUD() {
    document.getElementById("w-score").textContent = score;
    document.getElementById("w-solved").textContent = solved;
    document.getElementById("best").textContent = STORE.best > 0 ? STORE.best : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function finish() {
    if (score > STORE.best) STORE.best = score;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    updateHUD();
    Particles.fire(170);
    const max = order.reduce((a, i) => a + FIGURES[i].hints.length, 0);
    const stars = score >= max * 0.85 ? 3 : (score >= max * 0.55 ? 2 : 1);
    document.getElementById("win-summary").innerHTML = `
      <div>عرَفتَ <strong>${solved}</strong> شخصياتٍ وجمعتَ <strong>${score}</strong> نقطة.</div>
      <div style="margin-top:var(--s-3); font-size:22px; letter-spacing:4px;">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px;">
        في قصصِ الأنبياءِ عِبرةٌ وهُدى. ﴿لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ﴾.
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function newGame() {
    order = shuffle(FIGURES.map((_, i) => i)).slice(0, 6);
    idx = 0; score = 0; solved = 0;
    load();
  }

  /* ---------- bind ---------- */
  document.getElementById("wh-reveal").addEventListener("click", revealHint);
  document.getElementById("wh-next").addEventListener("click", next);
  document.getElementById("win-replay").addEventListener("click", () => { Modal.close("win-modal"); setTimeout(newGame, 300); });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  newGame();
})();
