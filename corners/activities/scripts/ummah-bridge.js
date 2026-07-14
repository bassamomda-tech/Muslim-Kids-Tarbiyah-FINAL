/* ============================================================
   94 · جسور الأمة — أجب عن قيم الأمة لبناء قطع الجسر ثم اختبره
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "جسور الأمة", en: "Bridges of the Ummah" },
    title:       { ar: "جسور الأمة", en: "Bridges of the Ummah" },
    desc:        { ar: "المسلمون كالجسد الواحد! ابنِ جسراً يصل بين بلاد المسلمين ليعبر فوقه قافلة الخير. اختر القِطع القويّة بالترتيب لتحمل الجسر الحمولة بأمان.", en: "Muslims are like one body! Build a bridge connecting Muslim lands so the caravan of good can cross. Choose the strong pieces in order so the bridge carries the load safely." },
    testBtn:     { ar: "🚚 اختبر الجسر!", en: "🚚 Test the bridge!" },
    statParts:   { ar: "قطع سليمة", en: "Solid pieces" },
    sideTitle:   { ar: "الأمة جسدٌ واحد", en: "The Ummah is one body" },
    sideQuote:   { ar: "«مثل المؤمنين في توادّهم وتراحمهم كمثل الجسد الواحد»", en: "\"The believers in their mutual love and mercy are like one body\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "لكل قطعةٍ سؤال عن قيمةٍ تربط الأمة: التكافل، الأخوّة، التعاون. اختر الإجابة الصحيحة لتكون القطعة قويّة تحمل الجسر.", en: "Each piece has a question about a value that binds the Ummah: solidarity, brotherhood, cooperation. Choose the right answer to make the piece strong." },
    winEyebrow:  { ar: "عبرت القافلة", en: "The caravan crossed" },
    winTitle:    { ar: "صمد جسر الأمة!", en: "The Ummah's bridge held!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    good:        { ar: "قطعة قويّة! أُضيفت للجسر 🧱", en: "A strong piece! Added to the bridge 🧱" },
    weak:        { ar: "قطعة ضعيفة — لكنها أُضيفت. قد يهتزّ الجسر!", en: "A weak piece — added, but the bridge may wobble!" },
    testReady:   { ar: "اكتمل الجسر! اضغط لتعبر القافلة.", en: "The bridge is complete! Press to send the caravan." },
  };

  const PIECES = [
    { q: { ar: "أخوك المسلم في بلدٍ بعيد جائع. ما موقفك؟", en: "Your Muslim brother in a far land is hungry. Your stance?" },
      opts: [ { ar: "أتكافل معه وأتبرّع لإغاثته", en: "Show solidarity and donate to help", ok: true }, { ar: "لا يعنيني فهو بعيد", en: "It's none of my concern, he's far" } ] },
    { q: { ar: "«المسلم أخو المسلم» — فماذا يعني ذلك؟", en: "\"A Muslim is the brother of a Muslim\" — what does that mean?" },
      opts: [ { ar: "لا يظلمه ولا يخذله وينصره", en: "He doesn't wrong him, forsake him, but supports him", ok: true }, { ar: "يتنافس معه في كل شيء", en: "He competes with him in everything" } ] },
    { q: { ar: "سمعتَ خبراً كاذباً يفرّق بين المسلمين. ماذا تفعل؟", en: "You heard a false rumor dividing Muslims. What do you do?" },
      opts: [ { ar: "أتثبّت ولا أنشره حفاظاً على الوحدة", en: "Verify and don't spread it, protecting unity", ok: true }, { ar: "أنشره بسرعة للجميع", en: "Spread it quickly to everyone" } ] },
    { q: { ar: "اختلفتَ مع أخيك المسلم في رأي. كيف تتعامل؟", en: "You disagreed with your Muslim brother on an opinion. How do you handle it?" },
      opts: [ { ar: "أحترم رأيه ونتحاور بأدب", en: "Respect his view and discuss politely", ok: true }, { ar: "أقاطعه وأكرهه", en: "Boycott and hate him" } ] },
    { q: { ar: "ما الذي يجمع مليارَي مسلمٍ حول العالم؟", en: "What unites two billion Muslims worldwide?" },
      opts: [ { ar: "الإيمان بالله ورسوله والقبلة الواحدة", en: "Faith in Allah, His Messenger, and one qibla", ok: true }, { ar: "اللون واللغة فقط", en: "Only color and language" } ] },
  ];

  const W = 720, H = 300;
  const $ = (id) => document.getElementById(id);
  const cv = $("br-canvas"), ctx = cv.getContext("2d");

  let idx = 0, strength = 0, pieceQuality = [];

  function drawBridge(truckX) {
    ctx.clearRect(0, 0, W, H);
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#DCE8C8"); sky.addColorStop(1, "#C8DCA8");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    /* الماء في الوادي */
    ctx.fillStyle = "#7EB8C8"; ctx.fillRect(120, 220, W - 240, 80);
    /* الضفّتان */
    ctx.fillStyle = "#5A7A2E"; ctx.fillRect(0, 200, 120, 100); ctx.fillRect(W - 120, 200, 120, 100);
    ctx.font = "24px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("🕌", 40, 195); ctx.fillText("🕌", W - 40, 195);
    /* قطع الجسر */
    const segW = (W - 240) / PIECES.length;
    for (let i = 0; i < pieceQuality.length; i++) {
      const x = 120 + i * segW;
      const q = pieceQuality[i];
      const sag = q ? 0 : 8;
      ctx.fillStyle = q ? "#8A6B3A" : "#B06A4A";
      ctx.fillRect(x, 200 + sag, segW - 3, 14);
      /* حبال معلّقة */
      ctx.strokeStyle = "rgba(90,122,46,0.5)"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x + segW / 2, 200 + sag); ctx.lineTo(x + segW / 2, 160); ctx.stroke();
    }
    /* القافلة */
    if (truckX != null) { ctx.font = "34px sans-serif"; ctx.fillText("🚚", truckX, 192); }
    else if (pieceQuality.length < PIECES.length) {
      /* أشر لموضع القطعة التالية */
      const x = 120 + pieceQuality.length * segW;
      ctx.strokeStyle = "rgba(90,122,46,0.6)"; ctx.setLineDash([5, 5]); ctx.lineWidth = 2;
      ctx.strokeRect(x, 200, segW - 3, 14); ctx.setLineDash([]);
    }
    $("br-strength").textContent = "💪 " + Math.round(strength) + "%";
    $("br-parts-n").textContent = "🧱 " + pieceQuality.length + "/" + PIECES.length;
  }

  function render() {
    const L = Lang.current();
    if (idx >= PIECES.length) {
      $("br-mission").innerHTML = "✅ " + I18N.testReady[L];
      $("br-parts").innerHTML = "";
      $("br-test").style.display = "";
      $("br-feedback").textContent = "";
      return;
    }
    const p = PIECES[idx];
    $("br-mission").innerHTML = `🌉 ${p.q[L]}`;
    const opts = p.opts.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
    $("br-parts").innerHTML = opts.map(x => `<button class="br-part-btn" data-ok="${x.o.ok ? 1 : 0}">${x.o[L]}</button>`).join("");
    $("br-parts").querySelectorAll(".br-part-btn").forEach(b => b.addEventListener("click", () => choose(b)));
    drawBridge();
  }

  function choose(btn) {
    const L = Lang.current();
    $("br-parts").querySelectorAll(".br-part-btn").forEach(x => x.style.pointerEvents = "none");
    const good = btn.dataset.ok === "1";
    pieceQuality.push(good);
    strength += good ? 20 : 8;
    $("stat-parts").textContent = `${pieceQuality.filter(Boolean).length}/${PIECES.length}`;
    if (good) { btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)"; AudioBus.chord([392, 523], 0.16); Particles.fire(14); $("br-feedback").textContent = I18N.good[L]; }
    else { btn.style.background = "var(--rose)"; AudioBus.tone(200, 0.15, "sawtooth", 0.06); $("br-feedback").textContent = I18N.weak[L]; }
    drawBridge();
    idx++;
    setTimeout(render, 1200);
  }

  function test() {
    $("br-test").style.display = "none";
    const solid = pieceQuality.filter(Boolean).length;
    let x = 30;
    const anim = setInterval(() => {
      x += 8;
      drawBridge(x);
      /* اهتزاز عند القطع الضعيفة */
      if (x > W - 60) {
        clearInterval(anim);
        win(solid);
      }
    }, 30);
    AudioBus.tone(300, 0.2);
  }

  function win(solid) {
    const L = Lang.current();
    const allSolid = solid === PIECES.length;
    $("win-sub").textContent = allSolid
      ? (L === "ar" ? "جسرٌ متينٌ بقيمٍ راسخة — عبرت القافلة بأمان تام!" : "A sturdy bridge of firm values — the caravan crossed safely!")
      : (L === "ar" ? `عبرت القافلة رغم ${PIECES.length - solid} قطعة ضعيفة — قوّي قيم الأمة أكثر!` : `The caravan crossed despite ${PIECES.length - solid} weak pieces — strengthen the Ummah's values more!`);
    Storage.set("anos_bridge_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    idx = 0; strength = 0; pieceQuality = [];
    $("stat-parts").textContent = "0/" + PIECES.length;
    $("br-test").style.display = "none";
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (idx < PIECES.length) render(); drawBridge(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("br-test").addEventListener("click", test);
  AudioBus.bindButton($("mute-btn"));
  render();
})();
