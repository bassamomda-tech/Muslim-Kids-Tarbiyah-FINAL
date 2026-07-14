/* ============================================================
   51 · مناسك الحج الصغير — محاكاة تفاعلية من 5 مناسك
   ============================================================ */
(function () {
  "use strict";

  /* ---------- الترجمة ---------- */
  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "مناسك الحج الصغير", en: "Little Hajj" },
    title:       { ar: "مناسك الحج الصغير", en: "The Little Pilgrim's Hajj" },
    desc:        { ar: "عِش رحلة الحج خطوةً بخطوة: أحرِم، طُف حول الكعبة، اسعَ بين الصفا والمروة، قِف بعرفة، وارمِ الجمرات — كلها بيدَيك!", en: "Live the Hajj journey step by step: enter ihram, circle the Kaaba, walk between Safa and Marwa, stand at Arafah, and throw the pebbles — all with your own hands!" },
    statStage:   { ar: "المرحلة", en: "Stage" },
    statProgress:{ ar: "التقدّم", en: "Progress" },
    guideTitle:  { ar: "مناسك الرحلة", en: "Rites of the journey" },
    guidePill:   { ar: "5 مناسك", en: "5 rites" },
    tip:         { ar: "الحج هو الركن الخامس من أركان الإسلام، يؤدّيه المسلم القادر مرةً في العمر. قال ﷺ: «الحج المبرور ليس له جزاء إلا الجنة».", en: "Hajj is the fifth pillar of Islam, performed once in a lifetime by Muslims who are able. The Prophet ﷺ said: \"An accepted Hajj has no reward other than Paradise.\"" },
    winEyebrow:  { ar: "لبّيك اللهم لبّيك", en: "Labbayk Allahumma Labbayk" },
    winTitle:    { ar: "أتممتَ مناسك الحج!", en: "You completed the Hajj!" },
    winSub:      { ar: "Labbayk Allahumma Labbayk — here I am, O Allah!", en: "لبّيك اللهم لبّيك — أنا هنا يا الله!" },
    winMeaning:  { ar: "<strong>هل تعلم؟</strong> يطوف الحجاج حول الكعبة عكس عقارب الساعة سبعة أشواط، تماماً كما فعلتَ الآن — قلبٌ واحد يدور حول بيتٍ واحد.", en: "<strong>Did you know?</strong> Pilgrims circle the Kaaba counter-clockwise seven times, just like you did — one heart circling one House." },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "رحلة جديدة", en: "New journey" },
  };

  const STAGES = [
    { id: "ihram",  ar: "الإحرام",        en: "Ihram" },
    { id: "tawaf",  ar: "الطواف",          en: "Tawaf" },
    { id: "sai",    ar: "السعي",           en: "Sa'i" },
    { id: "arafah", ar: "الوقوف بعرفة",    en: "Arafah" },
    { id: "rami",   ar: "رمي الجمرات",     en: "Rami" },
  ];
  const GUIDE = [
    { ar: "الإحرام: نلبس ثوبين أبيضين ونقول التلبية", en: "Ihram: wear two white garments and say the Talbiyah" },
    { ar: "الطواف: سبعة أشواط حول الكعبة", en: "Tawaf: seven laps around the Kaaba" },
    { ar: "السعي: سبعة أشواط بين الصفا والمروة", en: "Sa'i: seven walks between Safa and Marwa" },
    { ar: "عرفة: نقف وندعو الله — الحج عرفة!", en: "Arafah: we stand and make du'a — Hajj is Arafah!" },
    { ar: "رمي الجمرات: سبع حصيات صغيرات", en: "Rami: throw seven small pebbles" },
  ];
  const INSTR = {
    ihram:  { ar: "اضغط زر التلبية 3 مرات وأنت تقرأها بصوتٍ جميل 🕊", en: "Press the Talbiyah button 3 times while reading it aloud 🕊" },
    tawaf:  { ar: "ضع إصبعك (أو الفأرة) على الساحة ودُر حول الكعبة 7 أشواط عكس عقارب الساعة", en: "Hold your finger (or mouse) on the courtyard and circle the Kaaba 7 times counter-clockwise" },
    sai:    { ar: "اضغط الصفا ثم المروة بالتناوب حتى تُكمل 7 أشواط", en: "Tap Safa then Marwa, alternating, until you complete 7 laps" },
    arafah: { ar: "اضغط مطوّلاً على زر الدعاء واملأ قلبك — لا تتركه حتى يمتلئ الشريط", en: "Press and HOLD the du'a button — don't let go until the bar is full" },
    rami:   { ar: "اضغط على العمود لرمي حصاة — تحتاج 7 رميات ناجحات", en: "Tap the pillar to throw a pebble — you need 7 good throws" },
  };

  const $ = (id) => document.getElementById(id);
  const strip = $("hj-strip"), area = $("hj-area"), instr = $("hj-instruction");

  let stage = 0, laps = 0, angleAcc = 0, lastAngle = null;
  let saiCount = 0, saiNext = "safa";
  let talbiyah = 0, pebbles = 0, holdT = null, holdVal = 0;
  let transitioning = false; /* يمنع الانتقال المزدوج بين المراحل */

  /* ---------- عرض عام ---------- */
  function renderStrip() {
    strip.innerHTML = STAGES.map((s, i) => `
      <span class="stage-chip ${i < stage ? "done" : i === stage ? "current" : ""}">
        <span class="n">${i + 1}</span> ${Lang.current() === "ar" ? s.ar : s.en}
      </span>`).join("");
    $("stat-stage").textContent = `${Math.min(stage + 1, 5)}/5`;
    $("stat-progress").textContent = Math.round((stage / 5) * 100) + "%";
  }
  function renderGuide() {
    $("hj-guide").innerHTML = GUIDE.map((g, i) => `
      <div class="dhikr-item ${i < stage ? "is-highlighted" : ""}">
        <span class="dhikr-swatch" style="background:var(--teal)"></span>
        <span class="dhikr-text" style="font-size:13px;">${Lang.current() === "ar" ? g.ar : g.en}</span>
        <span class="dhikr-count">${i < stage ? "✓" : i + 1}</span>
      </div>`).join("");
  }
  function setInstr(key) { instr.textContent = INSTR[key] ? (Lang.current() === "ar" ? INSTR[key].ar : INSTR[key].en) : ""; }

  function render() {
    transitioning = false;
    renderStrip(); renderGuide();
    const s = STAGES[stage] ? STAGES[stage].id : null;
    if (!s) return;
    setInstr(s);
    if (s === "ihram") renderIhram();
    else if (s === "tawaf") renderTawaf();
    else if (s === "sai") renderSai();
    else if (s === "arafah") renderArafah();
    else if (s === "rami") renderRami();
  }

  function nextStage() {
    if (transitioning) return;
    transitioning = true;
    AudioBus.chord([523, 659, 784], 0.2);
    stage++;
    if (stage >= 5) return win();
    render();
  }

  /* ---------- 1 الإحرام ---------- */
  function renderIhram() {
    const ar = Lang.current() === "ar";
    area.innerHTML = `
      <div class="play-stage" style="padding:32px; text-align:center;">
        <div style="font-size:52px; line-height:1;">🕋</div>
        <p style="font-size:20px; font-weight:800; margin:16px 0 4px;">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لا شَرِيكَ لَكَ لَبَّيْكَ</p>
        <p style="font-size:13px; color:var(--muted); margin:0 0 20px;">${ar ? "«ها أنا ذا يا الله، جئتُ ملبّياً نداءك»" : "\"Here I am, O Allah, answering Your call\""}</p>
        <button class="btn-primary" id="talbiyah-btn" style="min-width:200px;">
          ${ar ? "قُل التلبية" : "Say the Talbiyah"} <span id="talbiyah-count" style="font-family:var(--font-en);">0/3</span>
        </button>
      </div>`;
    $("talbiyah-btn").addEventListener("click", () => {
      if (talbiyah >= 3 || transitioning) return;
      talbiyah++;
      AudioBus.chord([440, 554, 659], 0.18);
      $("talbiyah-count").textContent = `${talbiyah}/3`;
      if (talbiyah >= 3) setTimeout(nextStage, 400);
    });
  }

  /* ---------- 2 الطواف ---------- */
  function renderTawaf() {
    laps = 0; angleAcc = 0; lastAngle = null;
    area.innerHTML = `
      <div class="play-stage">
        <canvas id="hj-canvas" width="640" height="420"></canvas>
      </div>`;
    const cv = $("hj-canvas"), ctx = cv.getContext("2d");
    const cx = 320, cy = 210;
    let px = null, py = null, tracking = false;
    const trail = [];

    function draw() {
      ctx.clearRect(0, 0, 640, 420);
      // الساحة
      ctx.fillStyle = "#F3EEE2"; ctx.fillRect(0, 0, 640, 420);
      ctx.strokeStyle = "rgba(31,110,104,0.3)"; ctx.setLineDash([6, 8]); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, 130, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      // الأثر
      ctx.strokeStyle = "rgba(31,110,104,0.5)"; ctx.lineWidth = 4; ctx.lineCap = "round";
      for (let i = 1; i < trail.length; i++) {
        ctx.globalAlpha = i / trail.length;
        ctx.beginPath(); ctx.moveTo(trail[i-1][0], trail[i-1][1]); ctx.lineTo(trail[i][0], trail[i][1]); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      // الكعبة
      ctx.fillStyle = "#1F2540"; ctx.fillRect(cx - 42, cy - 42, 84, 84);
      ctx.fillStyle = "#C9A961"; ctx.fillRect(cx - 42, cy - 20, 84, 8);
      // الحاج
      if (px != null) {
        ctx.beginPath(); ctx.arc(px, py, 13, 0, Math.PI * 2);
        ctx.fillStyle = "#fff"; ctx.fill();
        ctx.lineWidth = 3; ctx.strokeStyle = "#1F6E68"; ctx.stroke();
      }
      // العداد
      ctx.fillStyle = "#1F6E68"; ctx.font = "800 26px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "left"; ctx.fillText(`${laps}/7`, 20, 40);
    }
    draw();

    function pos(e) {
      const r = cv.getBoundingClientRect();
      return [(e.clientX - r.left) * (640 / r.width), (e.clientY - r.top) * (420 / r.height)];
    }
    cv.addEventListener("pointerdown", (e) => { if (laps >= 7 || transitioning) return; tracking = true; cv.setPointerCapture(e.pointerId); [px, py] = pos(e); lastAngle = Math.atan2(py - cy, px - cx); });
    cv.addEventListener("pointerup", () => { tracking = false; lastAngle = null; });
    cv.addEventListener("pointermove", (e) => {
      if (!tracking) return;
      [px, py] = pos(e);
      trail.push([px, py]); if (trail.length > 40) trail.shift();
      const a = Math.atan2(py - cy, px - cx);
      if (lastAngle != null) {
        let d = a - lastAngle;
        if (d > Math.PI) d -= 2 * Math.PI;
        if (d < -Math.PI) d += 2 * Math.PI;
        angleAcc += -d; /* عكس عقارب الساعة = موجب */
        if (angleAcc >= 2 * Math.PI) {
          angleAcc -= 2 * Math.PI; laps++;
          AudioBus.pop(); Particles.fire(16, { originY: "40%" });
          if (laps >= 7) { tracking = false; setTimeout(nextStage, 500); }
        }
        if (angleAcc < 0) angleAcc = 0;
      }
      lastAngle = a;
      draw();
    });
  }

  /* ---------- 3 السعي ---------- */
  function renderSai() {
    saiCount = 0; saiNext = "safa";
    const ar = Lang.current() === "ar";
    area.innerHTML = `
      <div class="play-stage" style="padding:28px;">
        <div style="display:flex; gap:16px; align-items:center; justify-content:center;">
          <button class="btn-primary" id="btn-safa" style="min-width:130px; padding:22px;">⛰ ${ar ? "الصفا" : "Safa"}</button>
          <div style="text-align:center; min-width:90px;">
            <div id="sai-walker" style="font-size:34px; transition:transform 0.3s ease;">🚶</div>
            <strong id="sai-count" style="font-family:var(--font-en); font-size:22px;">0/7</strong>
          </div>
          <button class="btn-ghost" id="btn-marwa" style="min-width:130px; padding:22px;">⛰ ${ar ? "المروة" : "Marwa"}</button>
        </div>
      </div>`;
    function tap(which) {
      if (saiCount >= 7 || transitioning) return;
      if (which !== saiNext) { AudioBus.fail(); return; }
      saiCount++;
      AudioBus.tick(760);
      $("sai-walker").style.transform = which === "safa" ? "translateX(30px)" : "translateX(-30px)";
      $("sai-count").textContent = `${saiCount}/7`;
      saiNext = which === "safa" ? "marwa" : "safa";
      $("btn-safa").className = saiNext === "safa" ? "btn-primary" : "btn-ghost";
      $("btn-marwa").className = saiNext === "marwa" ? "btn-primary" : "btn-ghost";
      if (saiCount >= 7) setTimeout(nextStage, 400);
    }
    $("btn-safa").addEventListener("click", () => tap("safa"));
    $("btn-marwa").addEventListener("click", () => tap("marwa"));
  }

  /* ---------- 4 عرفة ---------- */
  function renderArafah() {
    holdVal = 0;
    const ar = Lang.current() === "ar";
    area.innerHTML = `
      <div class="play-stage" style="padding:32px; text-align:center; background:linear-gradient(180deg,#FFE9C4,#F3EEE2);">
        <div style="font-size:46px;">🤲</div>
        <p style="font-weight:700; margin:12px 0 20px;">${ar ? "«اللهم اغفر لي ولوالديّ وللمسلمين أجمعين»" : "\"O Allah, forgive me, my parents, and all the Muslims\""}</p>
        <button class="btn-primary" id="dua-btn" style="min-width:220px; padding:18px;">${ar ? "اضغط مطوّلاً للدعاء" : "Press & hold to make du'a"}</button>
        <div class="hj-hold-meter" style="position:static; width:70%; margin:20px auto 0;"><span id="dua-fill"></span></div>
      </div>`;
    const btn = $("dua-btn"), fill = $("dua-fill");
    function start(e) {
      e.preventDefault();
      if (holdVal >= 100 || transitioning) return;
      holdT = setInterval(() => {
        holdVal = Math.min(100, holdVal + 2.2);
        fill.style.width = holdVal + "%";
        if (holdVal % 22 < 2.2) AudioBus.tick(540 + holdVal * 3);
        if (holdVal >= 100) { clearInterval(holdT); setTimeout(nextStage, 400); }
      }, 60);
    }
    function stop() { clearInterval(holdT); }
    btn.addEventListener("pointerdown", start);
    btn.addEventListener("pointerup", stop);
    btn.addEventListener("pointerleave", stop);
  }

  /* ---------- 5 رمي الجمرات ---------- */
  function renderRami() {
    pebbles = 0;
    area.innerHTML = `
      <div class="play-stage">
        <canvas id="hj-canvas" width="640" height="380"></canvas>
      </div>`;
    const cv = $("hj-canvas"), ctx = cv.getContext("2d");
    const pillar = { x: 480, y: 120, w: 44, h: 190 };
    let flying = null;

    function draw() {
      ctx.clearRect(0, 0, 640, 380);
      ctx.fillStyle = "#F3EEE2"; ctx.fillRect(0, 0, 640, 380);
      ctx.fillStyle = "#D8CBA8"; ctx.fillRect(0, 330, 640, 50);
      // العمود
      ctx.fillStyle = "#8A8272";
      ctx.fillRect(pillar.x, pillar.y, pillar.w, pillar.h);
      ctx.beginPath(); ctx.ellipse(pillar.x + pillar.w / 2, pillar.y, pillar.w / 2 + 8, 12, 0, 0, Math.PI * 2); ctx.fill();
      // الرامي
      ctx.font = "44px sans-serif"; ctx.textAlign = "center";
      ctx.fillText("🧕", 110, 330);
      // الحصاة الطائرة
      if (flying) {
        ctx.beginPath(); ctx.arc(flying.x, flying.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#555"; ctx.fill();
      }
      ctx.fillStyle = "#1F6E68"; ctx.font = "800 26px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "left"; ctx.fillText(`${pebbles}/7`, 20, 40);
    }
    draw();

    cv.addEventListener("pointerdown", (e) => {
      if (flying || pebbles >= 7 || transitioning) return;
      const r = cv.getBoundingClientRect();
      const tx = (e.clientX - r.left) * (640 / r.width);
      const ty = (e.clientY - r.top) * (380 / r.height);
      const hit = tx >= pillar.x - 14 && tx <= pillar.x + pillar.w + 14 && ty >= pillar.y - 20 && ty <= pillar.y + pillar.h;
      flying = { x: 120, y: 300, t: 0, hit,
        ex: hit ? pillar.x + pillar.w / 2 : tx, ey: hit ? pillar.y + 60 : ty };
      const anim = setInterval(() => {
        flying.t += 0.06;
        const t = flying.t;
        flying.x = 120 + (flying.ex - 120) * t;
        flying.y = 300 + (flying.ey - 300) * t - 120 * Math.sin(Math.PI * t);
        draw();
        if (t >= 1) {
          clearInterval(anim);
          if (flying.hit) {
            pebbles++; AudioBus.pop(); Particles.fire(10, { originX: "70%", originY: "40%" });
            if (pebbles >= 7) { setTimeout(nextStage, 450); }
          } else { AudioBus.tick(240); }
          flying = null; draw();
        }
      }, 16);
    });
  }

  /* ---------- الفوز ---------- */
  function win() {
    renderStrip(); renderGuide();
    instr.textContent = "";
    area.innerHTML = "";
    const done = Storage.get("anos_hajj", { plays: 0 });
    done.plays++; Storage.set("anos_hajj", done);
    AudioBus.success();
    Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    stage = 0; talbiyah = 0; laps = 0; saiCount = 0; pebbles = 0; holdVal = 0;
    Modal.close("win-modal");
    render();
  }

  /* ---------- تهيئة ---------- */
  Lang.init(I18N);
  document.addEventListener("langchange", render);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  render();
})();
