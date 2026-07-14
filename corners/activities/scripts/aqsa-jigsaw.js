/* ============================================================
   96 · فسيفساء الأقصى — أعِد تركيب صورة قبّة الصخرة (3×3)
   الصورة مرسومة على كانفس ثم مقطّعة لـ9 قطع
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "فسيفساء الأقصى", en: "Al-Aqsa Jigsaw" },
    title:       { ar: "فسيفساء الأقصى", en: "The Al-Aqsa Jigsaw" },
    desc:        { ar: "أعِد تركيب صورة قبّة الصخرة المشرّفة! القطع تناثرت — اسحب كل قطعةٍ إلى مكانها الصحيح في الشبكة لتكتمل الصورة الجميلة بألوانها الذهبية.", en: "Rebuild the image of the noble Dome of the Rock! The pieces are scattered — drag each piece to its correct spot in the grid to complete the beautiful golden image." },
    trayLabel:   { ar: "القطع — اختر قطعةً ثم انقر مكانها", en: "Pieces — pick a piece, then tap its spot" },
    statPlaced:  { ar: "قطع في مكانها", en: "Pieces placed" },
    statTries:   { ar: "المحاولات", en: "Tries" },
    sideTitle:   { ar: "قبّة الصخرة", en: "The Dome of the Rock" },
    sideQuote:   { ar: "قبّة الصخرة معلَمٌ إسلاميّ بُني في القدس زمن الخليفة عبد الملك بن مروان، وقبّتها الذهبية رمزٌ للمدينة المقدسة.", en: "The Dome of the Rock is an Islamic landmark built in Al-Quds during the caliph Abd al-Malik ibn Marwan's time; its golden dome is a symbol of the holy city." },
    sideSrc:     { ar: "تاريخ القدس", en: "History of Al-Quds" },
    tip:         { ar: "قبّة الصخرة ليست هي المسجد الأقصى — بل كلاهما داخل الحرم القدسي الشريف. معرفة معالم القدس جزءٌ من الارتباط بها.", en: "The Dome of the Rock is not the Al-Aqsa Mosque itself — both are within the noble Al-Quds sanctuary. Knowing Al-Quds's landmarks is part of connecting to it." },
    winEyebrow:  { ar: "اكتملت الصورة", en: "The image is complete" },
    winTitle:    { ar: "اكتملت فسيفساء الأقصى!", en: "The Al-Aqsa jigsaw is complete!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    good:        { ar: "قطعة في مكانها! ✨", en: "A piece in place! ✨" },
    bad:         { ar: "هذه ليست القطعة الصحيحة لهذا المكان", en: "That's not the right piece for this spot" },
    pick:        { ar: "اختر قطعةً أولاً", en: "Pick a piece first" },
  };

  const N = 3, SIZE = 300;
  const $ = (id) => document.getElementById(id);
  let pieces = [], selected = null, placed = 0, tries = 0, dataUrls = [];

  function drawScene() {
    /* ارسم قبّة الصخرة على كانفس واحد ثم قطّعه */
    const c = document.createElement("canvas"); c.width = SIZE; c.height = SIZE;
    const x = c.getContext("2d");
    /* خلفية سماء */
    const sky = x.createLinearGradient(0, 0, 0, SIZE);
    sky.addColorStop(0, "#BFE0EC"); sky.addColorStop(1, "#E8DCC0");
    x.fillStyle = sky; x.fillRect(0, 0, SIZE, SIZE);
    /* أرضية */
    x.fillStyle = "#C9B08A"; x.fillRect(0, 230, SIZE, 70);
    /* المبنى الثماني */
    x.fillStyle = "#EDE0C4"; x.fillRect(70, 150, 160, 90);
    /* زخارف زرقاء (بلاط) */
    x.fillStyle = "#3A6EA5";
    for (let i = 0; i < 8; i++) x.fillRect(80 + i * 19, 165, 8, 60);
    /* الرقبة */
    x.fillStyle = "#D9C89A"; x.fillRect(110, 120, 80, 34);
    /* القبّة الذهبية */
    const grad = x.createRadialGradient(150, 90, 10, 150, 100, 70);
    grad.addColorStop(0, "#F5D76E"); grad.addColorStop(1, "#C89A2B");
    x.fillStyle = grad;
    x.beginPath(); x.moveTo(105, 122); x.quadraticCurveTo(150, 30, 195, 122); x.closePath(); x.fill();
    /* الهلال */
    x.strokeStyle = "#C89A2B"; x.lineWidth = 4;
    x.beginPath(); x.moveTo(150, 45); x.lineTo(150, 30); x.stroke();
    x.fillStyle = "#C89A2B";
    x.beginPath(); x.arc(150, 22, 8, 0.3 * Math.PI, 1.7 * Math.PI); x.fill();
    /* أعمدة جانبية */
    x.fillStyle = "#C9B08A"; x.fillRect(60, 175, 10, 55); x.fillRect(230, 175, 10, 55);

    /* قطّع لـ9 قطع */
    dataUrls = [];
    const ps = SIZE / N;
    for (let r = 0; r < N; r++) {
      for (let col = 0; col < N; col++) {
        const pc = document.createElement("canvas"); pc.width = ps; pc.height = ps;
        pc.getContext("2d").drawImage(c, col * ps, r * ps, ps, ps, 0, 0, ps, ps);
        dataUrls.push(pc.toDataURL());
      }
    }
  }

  function build() {
    drawScene();
    placed = 0; tries = 0; selected = null;
    $("stat-placed").textContent = `0/${N * N}`;
    $("stat-tries").textContent = 0;
    $("jg-feedback").textContent = "";
    /* الشبكة */
    $("jg-board").style.gridTemplateColumns = `repeat(${N}, 1fr)`;
    $("jg-board").innerHTML = Array.from({ length: N * N }, (_, i) =>
      `<div class="jg-slot" data-slot="${i}"></div>`).join("");
    $("jg-board").querySelectorAll(".jg-slot").forEach(s => s.addEventListener("click", () => dropOn(+s.dataset.slot)));
    /* القطع مخلوطة */
    pieces = dataUrls.map((u, i) => ({ url: u, correct: i })).sort(() => Math.random() - 0.5);
    renderTray();
  }

  function renderTray() {
    $("jg-tray").innerHTML = pieces.map((p, i) =>
      `<div class="jg-piece ${p.done ? "used" : ""} ${selected === i ? "selected" : ""}" data-i="${i}" style="background-image:url('${p.url}')"></div>`).join("");
    $("jg-tray").querySelectorAll(".jg-piece:not(.used)").forEach(el => el.addEventListener("click", () => {
      selected = selected === +el.dataset.i ? null : +el.dataset.i;
      AudioBus.tick(560);
      renderTray();
    }));
  }

  function dropOn(slot) {
    const L = Lang.current();
    if (selected === null) { $("jg-feedback").textContent = I18N.pick[L]; return; }
    const slotEl = $("jg-board").querySelector(`[data-slot="${slot}"]`);
    if (slotEl.classList.contains("filled")) return;
    tries++; $("stat-tries").textContent = tries;
    const p = pieces[selected];
    if (p.correct === slot) {
      slotEl.style.backgroundImage = `url('${p.url}')`;
      slotEl.style.backgroundSize = "cover";
      slotEl.classList.add("filled");
      p.done = true; selected = null; placed++;
      $("stat-placed").textContent = `${placed}/${N * N}`;
      AudioBus.chord([440, 587], 0.14); Particles.fire(12, { originY: "35%" });
      $("jg-feedback").textContent = I18N.good[L];
      renderTray();
      if (placed >= N * N) setTimeout(win, 500);
    } else {
      AudioBus.fail();
      slotEl.style.transform = "scale(0.94)";
      setTimeout(() => { slotEl.style.transform = ""; }, 200);
      $("jg-feedback").textContent = I18N.bad[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `أكملتَ الصورة في ${tries} محاولة — قبّة الصخرة بألوانها!` : `You completed it in ${tries} tries — the Dome of the Rock in full color!`;
    Storage.set("anos_jigsaw_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { /* الصورة ثابتة؛ النصوص تُترجم تلقائياً */ });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); build(); });
  $("reset-btn").addEventListener("click", build);
  AudioBus.bindButton($("mute-btn"));
  build();
})();
