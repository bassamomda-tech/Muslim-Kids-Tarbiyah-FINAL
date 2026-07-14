/* ============================================================
   53 · مهمة القِبلة — بوصلة تدور بالسحب مع فيزياء نابضة
   الزوايا الحقيقية التقريبية لاتجاه القبلة من كل مدينة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "مهمة القِبلة", en: "Qibla Quest" },
    title:       { ar: "مهمة القِبلة", en: "Qibla Quest" },
    desc:        { ar: "أنت في مدينة جديدة وحان وقت الصلاة! أدِر إبرة البوصلة بإصبعك نحو اتجاه الكعبة، ثم اضغط «تحقّق». استخدم التلميح الجغرافي.", en: "You're in a new city and it's prayer time! Spin the compass needle with your finger toward the Kaaba, then press \"Check\". Use the geographic hint." },
    checkBtn:    { ar: "تحقّق من الاتجاه", en: "Check direction" },
    statRound:   { ar: "المدينة", en: "City" },
    statScore:   { ar: "إصابات", en: "Hits" },
    sideTitle:   { ar: "ما هي القِبلة؟", en: "What is the Qibla?" },
    sideQuote:   { ar: "﴿فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ﴾", en: "\"So turn your face toward al-Masjid al-Haram\"" },
    sideSrc:     { ar: "البقرة · 144", en: "Al-Baqarah · 144" },
    tip:         { ar: "أينما كان المسلم على وجه الأرض، يتّجه في صلاته نحو الكعبة في مكة المكرمة. الشمال في الأعلى دائماً على البوصلة.", en: "Wherever a Muslim is on Earth, they face the Kaaba in Makkah when praying. North is always at the top of the compass." },
    winEyebrow:  { ar: "مستكشف القِبلة", en: "Qibla Explorer" },
    winTitle:    { ar: "وجدتَ القِبلة في كل المدن!", en: "You found the Qibla in every city!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "جولة جديدة", en: "New round" },
  };

  /* المدن: bearing = زاوية القبلة من الشمال (اتجاه عقارب الساعة) */
  const CITIES = [
    { ar: "القاهرة",      en: "Cairo",        bearing: 136, hint: { ar: "الكعبة جنوبَ شرقِ مصر", en: "The Kaaba is south-east of Egypt" } },
    { ar: "إسطنبول",      en: "Istanbul",     bearing: 151, hint: { ar: "اتجه جنوباً مع ميلٍ قليلٍ للشرق", en: "Head south, leaning slightly east" } },
    { ar: "لندن",         en: "London",       bearing: 119, hint: { ar: "جنوب شرق، نحو البحر المتوسط ثم الجزيرة", en: "South-east, over the Mediterranean then Arabia" } },
    { ar: "جاكرتا",       en: "Jakarta",      bearing: 295, hint: { ar: "إندونيسيا شرقُ مكة — فاتجه غرباً بميلٍ للشمال", en: "Indonesia is east of Makkah — face west, leaning north" } },
    { ar: "الرباط",       en: "Rabat",        bearing: 91,  hint: { ar: "المغرب في أقصى الغرب — الكعبة شرقاً تماماً تقريباً", en: "Morocco is in the far west — the Kaaba is almost due east" } },
  ];
  const TOLERANCE = 16;
  const DIRS8 = [
    { ar: "الشمال", en: "N" }, { ar: "الشمال الشرقي", en: "NE" }, { ar: "الشرق", en: "E" }, { ar: "الجنوب الشرقي", en: "SE" },
    { ar: "الجنوب", en: "S" }, { ar: "الجنوب الغربي", en: "SW" }, { ar: "الغرب", en: "W" }, { ar: "الشمال الغربي", en: "NW" },
  ];

  const $ = (id) => document.getElementById(id);
  const dial = $("qb-dial"), needle = $("qb-needle"), stage = $("qb-stage");

  let round = 0, hits = 0, solved = false;
  let angle = 0, target = 0, velocity = 0, dragging = false, lastPointerAngle = null;

  /* علامات الاتجاهات على القرص */
  function buildDialMarks() {
    DIRS8.forEach((d, i) => {
      const deg = i * 45;
      const rad = (deg - 90) * Math.PI / 180;
      const el = document.createElement("div");
      el.className = "qb-city";
      el.style.left = 50 + Math.cos(rad) * 44 + "%";
      el.style.top = 50 + Math.sin(rad) * 44 + "%";
      el.dataset.dirIdx = i;
      el.innerHTML = `<span style="font-family:var(--font-en); font-size:${i % 2 === 0 ? 15 : 11}px; font-weight:800; color:${i === 0 ? "var(--rose)" : "var(--muted)"}">${d.en}</span>`;
      dial.appendChild(el);
    });
  }

  /* أيقونة الكعبة تظهر بعد الحل */
  let kaabaEl = null;
  function showKaaba() {
    const rad = (target - 90) * Math.PI / 180;
    kaabaEl = document.createElement("div");
    kaabaEl.className = "qb-city kaaba";
    kaabaEl.style.left = 50 + Math.cos(rad) * 33 + "%";
    kaabaEl.style.top = 50 + Math.sin(rad) * 33 + "%";
    kaabaEl.innerHTML = `<span class="dot"></span><span>🕋</span>`;
    dial.appendChild(kaabaEl);
  }

  /* فيزياء الإبرة: نابض + احتكاك */
  let displayAngle = 0;
  function physicsLoop() {
    if (!dragging) {
      velocity *= 0.92;
      displayAngle += velocity;
    }
    const diff = angle - displayAngle;
    displayAngle += diff * 0.18;
    needle.style.transform = `translate(-50%, -100%) rotate(${displayAngle}deg)`;
    requestAnimationFrame(physicsLoop);
  }

  function pointerAngle(e) {
    const r = dial.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    return Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI + 90;
  }
  dial.addEventListener("pointerdown", (e) => {
    if (solved) return;
    dragging = true; dial.setPointerCapture(e.pointerId);
    lastPointerAngle = pointerAngle(e);
  });
  dial.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const a = pointerAngle(e);
    let d = a - lastPointerAngle;
    if (d > 180) d -= 360; if (d < -180) d += 360;
    angle += d; velocity = d;
    lastPointerAngle = a;
    if (Math.abs(d) > 2) AudioBus.tick(500 + Math.min(300, Math.abs(d) * 20));
  });
  dial.addEventListener("pointerup", () => { dragging = false; });

  function renderRound() {
    solved = false;
    if (kaabaEl) { kaabaEl.remove(); kaabaEl = null; }
    const c = CITIES[round], L = Lang.current();
    target = c.bearing;
    angle = Math.random() * 360; displayAngle = angle;
    $("qb-scenario").innerHTML = `📍 ${L === "ar" ? "أنت الآن في" : "You are now in"} <strong>${c[L]}</strong> — ${c.hint[L]}`;
    $("qb-feedback").textContent = "";
    $("stat-round").textContent = `${round + 1}/${CITIES.length}`;
    $("qb-check").disabled = false;
  }

  function check() {
    if (solved) return;
    const norm = ((angle % 360) + 360) % 360;
    let d = Math.abs(norm - target);
    if (d > 180) d = 360 - d;
    const L = Lang.current();
    if (d <= TOLERANCE) {
      solved = true; hits++;
      $("stat-score").textContent = hits;
      angle = angle + shortestTo(norm, target); /* محاذاة ناعمة */
      showKaaba();
      AudioBus.success();
      Particles.fire(40, { originY: "45%" });
      $("qb-feedback").textContent = L === "ar" ? "أصبت! هذا هو اتجاه الكعبة 🕋" : "Correct! That's the direction of the Kaaba 🕋";
      $("qb-check").disabled = true;
      setTimeout(() => {
        round++;
        if (round >= CITIES.length) return win();
        renderRound();
      }, 1600);
    } else {
      AudioBus.fail();
      const dir = d <= 45
        ? (L === "ar" ? "قريب جداً! حرّكها قليلاً" : "Very close! Nudge it a little")
        : (L === "ar" ? "بعيد — اقرأ التلميح مرة أخرى" : "Far off — read the hint again");
      $("qb-feedback").textContent = "🧭 " + dir;
      velocity = (Math.random() > 0.5 ? 1 : -1) * 6; /* اهتزاز */
    }
  }
  function shortestTo(from, to) {
    let d = to - from;
    if (d > 180) d -= 360; if (d < -180) d += 360;
    return d;
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `أصبت ${hits} من ${CITIES.length} مدن — بوصلتك القلبية تعمل!`
      : `You hit ${hits} of ${CITIES.length} cities — your heart-compass works!`;
    Storage.set("anos_qibla_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0; hits = 0;
    $("stat-score").textContent = 0;
    Modal.close("win-modal");
    renderRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", renderRound);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("qb-check").addEventListener("click", check);
  AudioBus.bindButton($("mute-btn"));

  buildDialMarks();
  renderRound();
  physicsLoop();
})();
