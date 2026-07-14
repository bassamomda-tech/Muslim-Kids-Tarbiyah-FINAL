/* ============================================================
   66 · صيّاد المعاني — سلّة تلتقط الكلمة القرآنية المطابقة للمعنى
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "صيّاد المعاني", en: "Meaning Catcher" },
    title:       { ar: "صيّاد المعاني", en: "The Meaning Catcher" },
    desc:        { ar: "كلماتٌ قرآنية تتساقط من السماء! المطلوب في الأعلى معنى واحد — حرّك السلّة والتقط الكلمة التي تحمل ذلك المعنى، وتجنّب الباقي.", en: "Quranic words rain from the sky! One meaning is shown up top — move the basket and catch the word carrying that meaning, avoiding the rest." },
    startBtn:    { ar: "ابدأ الصيد", en: "Start catching" },
    statCaught:  { ar: "أصبتَ", en: "Caught" },
    statMiss:    { ar: "أخطاء", en: "Misses" },
    sideTitle:   { ar: "كلمات من القرآن", en: "Words from the Quran" },
    sideQuote:   { ar: "فهم معاني الكلمات القرآنية يفتح كنوز التدبّر. الصحابة كانوا يتعلّمون عشر آيات فلا يتجاوزونها حتى يعرفوا معانيها والعمل بها.", en: "Understanding Quranic words unlocks the treasures of reflection. The Companions would learn ten verses and not move past them until they knew their meanings and acted on them." },
    sideSrc:     { ar: "أثر عن ابن مسعود", en: "Report from Ibn Mas'ud" },
    tip:         { ar: "حرّك السلّة بإصبعك أو بالفأرة يميناً ويساراً. اقرأ الكلمة قبل التقاطها — بعض الكلمات متشابهة لكن معانيها مختلفة!", en: "Move the basket left and right with your finger or mouse. Read the word before catching — some words look similar but mean different things!" },
    winEyebrow:  { ar: "صيّاد ماهر", en: "Skilled catcher" },
    winTitle:    { ar: "جمعتَ كل المعاني!", en: "You gathered every meaning!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "صيد جديد", en: "New catch" },
    needLabel:   { ar: "التقط ما معناه:", en: "Catch the word meaning:" },
  };

  /* كلمات قرآنية مع معانيها */
  const WORDS = [
    { w: "الْفَلَق", m: { ar: "الصُّبح", en: "the dawn" } },
    { w: "الْوَتِين", m: { ar: "عِرق القلب", en: "the heart's artery" } },
    { w: "الْعُسْر", m: { ar: "الصعوبة", en: "hardship" } },
    { w: "الْيُسْر", m: { ar: "السهولة", en: "ease" } },
    { w: "الصَّمَد", m: { ar: "المقصود في الحوائج", en: "the eternal refuge" } },
    { w: "الْكَوْثَر", m: { ar: "الخير الكثير", en: "abundant good" } },
    { w: "الْحُطَمَة", m: { ar: "النار المحطِّمة", en: "the crushing fire" } },
    { w: "السَّائِل", m: { ar: "الفقير المحتاج", en: "the one who asks / needy" } },
    { w: "الْمَاعُون", m: { ar: "ما يُعان به الناس", en: "small kindnesses / aid" } },
    { w: "الْأَبْتَر", m: { ar: "المقطوع من الخير", en: "cut off from good" } },
    { w: "الْغَاسِق", m: { ar: "الليل إذا أظلم", en: "the darkening night" } },
    { w: "النَّجْم", m: { ar: "الكوكب المضيء", en: "the shining star" } },
  ];
  const GOAL = 8;

  const W = 680, H = 380;
  const $ = (id) => document.getElementById(id);
  const cv = $("wc-canvas"), ctx = cv.getContext("2d");

  let running = false, raf = null;
  let basketX, target, drops, spawnT, caught, miss, t;

  function pickTarget() {
    target = WORDS[Math.floor(Math.random() * WORDS.length)];
    $("wc-meaning").innerHTML = `${I18N.needLabel[Lang.current()]} <strong style="color:var(--sand-ink)">${target.m[Lang.current()]}</strong>`;
  }

  function spawn() {
    /* أحياناً الكلمة الصحيحة، وإلا كلمات ملهية */
    let word;
    if (Math.random() < 0.4) word = target;
    else { do { word = WORDS[Math.floor(Math.random() * WORDS.length)]; } while (word === target && Math.random() < 0.7); }
    drops.push({ x: 60 + Math.random() * (W - 120), y: -20, vy: 1.4 + Math.random() * 1.1 + t * 0.0004, word, gone: false });
  }

  function init() {
    basketX = W / 2; drops = []; spawnT = 30; caught = 0; miss = 0; t = 0;
    pickTarget();
    $("stat-caught").textContent = `0/${GOAL}`;
    $("stat-miss").textContent = "0";
  }

  function loop() {
    t++;
    if (spawnT-- <= 0) { spawn(); spawnT = 55 + Math.random() * 45; }
    drops.forEach(d => d.y += d.vy);

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#F3EEE2"; ctx.fillRect(0, 0, W, H);
    /* الأرض */
    ctx.fillStyle = "#E4D8BD"; ctx.fillRect(0, H - 30, W, 30);

    /* الكلمات */
    drops.forEach(d => {
      if (d.gone) return;
      const isT = d.word === target;
      ctx.font = "800 24px Tajawal, sans-serif"; ctx.textAlign = "center";
      const tw = ctx.measureText(d.word.w).width + 26;
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.roundRect(d.x - tw / 2, d.y - 22, tw, 40, 12); ctx.fill();
      ctx.strokeStyle = isT ? "rgba(138,107,46,0.4)" : "rgba(0,0,0,0.12)"; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = "#8A6B2E";
      ctx.fillText(d.word.w, d.x, d.y + 6);
    });

    /* السلّة */
    const by = H - 54;
    ctx.font = "44px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("🧺", basketX, by + 16);

    /* الالتقاط والفوات */
    drops.forEach(d => {
      if (d.gone) return;
      if (d.y > by - 6 && d.y < by + 26 && Math.abs(d.x - basketX) < 46) {
        d.gone = true;
        if (d.word === target) {
          caught++; $("stat-caught").textContent = `${caught}/${GOAL}`;
          AudioBus.chord([523, 659], 0.16);
          Particles.fire(16, { originX: (basketX / W * 100) + "%", originY: "80%" });
          $("wc-feedback").textContent = "";
          if (caught >= GOAL) return end();
          pickTarget();
        } else {
          miss++; $("stat-miss").textContent = miss;
          AudioBus.fail();
          $("wc-feedback").textContent = Lang.current() === "ar" ? `«${d.word.w}» معناها: ${d.word.m.ar}` : `"${d.word.w}" means: ${d.word.m.en}`;
        }
      }
      if (d.y > H) { d.gone = true; }
    });
    drops = drops.filter(d => !d.gone || d.y < H + 40);

    if (running) raf = requestAnimationFrame(loop);
  }

  function end() {
    running = false; cancelAnimationFrame(raf);
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `${GOAL} معانٍ صحيحة و${miss} أخطاء فقط` : `${GOAL} correct meanings, only ${miss} misses`;
    Storage.set("anos_meaning_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function start() {
    init();
    running = true;
    $("wc-feedback").textContent = "";
    loop();
  }

  function movePointer(e) {
    if (!running) return;
    const r = cv.getBoundingClientRect();
    basketX = Math.max(40, Math.min(W - 40, (e.clientX - r.left) * (W / r.width)));
  }
  cv.addEventListener("pointermove", movePointer);
  cv.addEventListener("pointerdown", movePointer);

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (target) pickTarget(); });
  Modal.bindClose("win-modal");
  $("wc-start").addEventListener("click", start);
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); start(); });
  $("reset-btn").addEventListener("click", () => { cancelAnimationFrame(raf); running = false; init(); ctx.clearRect(0,0,W,H); ctx.fillStyle="#F3EEE2"; ctx.fillRect(0,0,W,H); });
  AudioBus.bindButton($("mute-btn"));

  init();
  ctx.fillStyle = "#F3EEE2"; ctx.fillRect(0, 0, W, H);
})();
