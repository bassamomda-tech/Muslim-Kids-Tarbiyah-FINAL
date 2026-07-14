/* ============================================================
   93 · زيتونة فلسطين — اعتنِ بالزيتونة عبر المواسم لتنمو وتُثمر
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "زيتونة فلسطين", en: "The Olive of Palestine" },
    title:       { ar: "زيتونة فلسطين", en: "The Olive of Palestine" },
    desc:        { ar: "ازرع زيتونةً واعتنِ بها عبر السنين! الزيتونة رمز الصمود والجذور. أجب عن أسئلة الرعاية الصحيحة عبر المواسم لتكبر شجرتك وتُثمر بإذن الله.", en: "Plant an olive tree and care for it over the years! The olive is a symbol of steadfastness and roots. Answer the correct care questions across seasons to grow your tree and bear fruit." },
    statStage:   { ar: "مرحلة النمو", en: "Growth stage" },
    statSeasons: { ar: "مواسم اعتنيتَ بها", en: "Seasons tended" },
    sideTitle:   { ar: "شجرة مباركة", en: "A blessed tree" },
    sideQuote:   { ar: "﴿والتين والزيتون﴾ — أقسم الله بالزيتون لبركته ونفعه.", en: "\"By the fig and the olive\" — Allah swore by the olive for its blessing and benefit." },
    sideSrc:     { ar: "التين · 1", en: "At-Tin · 1" },
    tip:         { ar: "شجرة الزيتون تعيش آلاف السنين وتُثمر في أصعب الظروف — كصمود أهل فلسطين المتجذّرين في أرضهم رغم كل التحدّيات.", en: "The olive tree lives thousands of years and bears fruit in the harshest conditions — like the steadfastness of Palestinians rooted in their land despite every challenge." },
    winEyebrow:  { ar: "زيتونةٌ مثمرة", en: "A fruitful olive" },
    winTitle:    { ar: "أثمرت زيتونتك بعد سنين!", en: "Your olive bore fruit after years!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "ازرع من جديد", en: "Plant again" },
    stages:      { ar: ["بذرة", "شتلة", "شجرة", "مثمرة"], en: ["Seed", "Sapling", "Tree", "Fruiting"] },
    right:       { ar: "رعايةٌ صحيحة! نمت الزيتونة 🫒", en: "Good care! The olive grew 🫒" },
    wrong:       { ar: "هذه ليست الرعاية المناسبة لهذا الموسم", en: "That's not the right care for this season" },
  };

  const TREES = ["🌱", "🌿", "🌳", "🫒"];

  /* المواسم: سؤال رعاية + الإجابة الصحيحة */
  const SEASONS = [
    { year: "السنة 1 · الربيع", yearEn: "Year 1 · Spring",
      q: { ar: "زرعتَ البذرة. ما أول ما تحتاجه لتنبت؟", en: "You planted the seed. What does it first need to sprout?" },
      opts: [ { ar: "الماء والتربة الجيدة", en: "Water and good soil", ok: true }, { ar: "تركها في الظلام", en: "Leaving it in the dark" }, { ar: "قطعها فوراً", en: "Cutting it at once" } ] },
    { year: "السنة 2 · الصيف", yearEn: "Year 2 · Summer",
      q: { ar: "الصيف حارّ والشتلة صغيرة. كيف تحميها؟", en: "Summer is hot and the sapling is small. How do you protect it?" },
      opts: [ { ar: "أسقيها بانتظام صباحاً ومساءً", en: "Water it regularly, morning and evening", ok: true }, { ar: "أتركها بلا ماء", en: "Leave it without water" }, { ar: "أضع عليها ملحاً", en: "Put salt on it" } ] },
    { year: "السنة 3 · الخريف", yearEn: "Year 3 · Autumn",
      q: { ar: "ظهرت أغصانٌ ضعيفة كثيرة. ماذا تفعل ليقوى الجذع؟", en: "Many weak branches appeared. What do you do to strengthen the trunk?" },
      opts: [ { ar: "أقلّم الأغصان الضعيفة برفق", en: "Gently prune the weak branches", ok: true }, { ar: "أتركها كلها تنمو فوضى", en: "Let them all grow wildly" }, { ar: "أقطع الجذع", en: "Cut the trunk" } ] },
    { year: "السنة 4 · الشتاء", yearEn: "Year 4 · Winter",
      q: { ar: "جاء البرد القارس. كيف تحفظ جذورها؟", en: "Harsh cold arrived. How do you protect its roots?" },
      opts: [ { ar: "أغطّي التربة حول الجذور", en: "Cover the soil around the roots", ok: true }, { ar: "أصبّ ماءً مثلجاً", en: "Pour icy water" }, { ar: "أنزع كل الأوراق", en: "Strip off all the leaves" } ] },
    { year: "السنة 6 · الربيع", yearEn: "Year 6 · Spring",
      q: { ar: "كبرت الشجرة. كيف تحافظ على صحّتها من الآفات؟", en: "The tree grew. How do you keep it healthy from pests?" },
      opts: [ { ar: "أفحصها وأزيل الآفات طبيعياً", en: "Inspect it and remove pests naturally", ok: true }, { ar: "أتجاهل الآفات", en: "Ignore the pests" }, { ar: "أحرق الأوراق", en: "Burn the leaves" } ] },
    { year: "السنة 8 · الخريف", yearEn: "Year 8 · Autumn",
      q: { ar: "حان وقت الحصاد! كيف تجني الزيتون وتشارك خيره؟", en: "Harvest time! How do you pick the olives and share their goodness?" },
      opts: [ { ar: "أجنيه برفق وأشارك الجيران والفقراء", en: "Pick gently and share with neighbors and the poor", ok: true }, { ar: "أرمي كل الثمار", en: "Throw away all the fruit" }, { ar: "أكسر الأغصان لأسرع", en: "Break branches to go faster" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let idx = 0, stage = 0;

  function updateTree() {
    const st = Math.min(3, Math.floor((idx / SEASONS.length) * 3.99));
    stage = st;
    $("ol-tree").dataset.stage = st;
    $("ol-tree").textContent = TREES[st];
    const L = Lang.current();
    $("stat-stage").textContent = I18N.stages[L][st];
    $("stat-seasons").textContent = `${idx}/${SEASONS.length}`;
    /* ثمار عند الاكتمال */
    if (st >= 3) {
      $("ol-olives").innerHTML = Array.from({ length: 8 }, () =>
        `<span style="position:absolute; left:${35 + Math.random() * 30}%; top:${25 + Math.random() * 30}%; font-size:14px;">🫒</span>`).join("");
    } else $("ol-olives").innerHTML = "";
  }

  function render() {
    const L = Lang.current();
    if (idx >= SEASONS.length) return;
    const s = SEASONS[idx];
    $("ol-year").textContent = L === "ar" ? s.year : s.yearEn;
    $("ol-mission").innerHTML = `🌦 ${s.q[L]}`;
    const opts = s.opts.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
    $("ol-area").innerHTML = `
      <div class="fd-choices">
        ${opts.map(x => `<button class="fd-choice" data-ok="${x.o.ok ? 1 : 0}">${x.o[L]}</button>`).join("")}
      </div>`;
    $("ol-area").querySelectorAll(".fd-choice").forEach(b => b.addEventListener("click", () => choose(b)));
    updateTree();
  }

  function choose(btn) {
    const L = Lang.current();
    $("ol-area").querySelectorAll(".fd-choice").forEach(x => x.disabled = true);
    if (btn.dataset.ok === "1") {
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      AudioBus.chord([392, 523, 659], 0.2); Particles.fire(20, { originY: "45%" });
      $("ol-mission").innerHTML = "🫒 " + I18N.right[L];
      idx++;
      updateTree();
      setTimeout(() => { if (idx >= SEASONS.length) win(); else render(); }, 1400);
    } else {
      btn.style.background = "var(--rose)";
      AudioBus.fail();
      $("ol-area").querySelectorAll(".fd-choice").forEach(x => { if (x.dataset.ok === "1") { x.style.background = "var(--mint)"; x.style.borderColor = "var(--mint-ink)"; } });
      $("ol-mission").innerHTML = "🌦 " + I18N.wrong[L];
      idx++;
      updateTree();
      setTimeout(() => { if (idx >= SEASONS.length) win(); else render(); }, 1600);
    }
  }

  function win() {
    updateTree();
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? "ثماني سنواتٍ من الصبر والرعاية أثمرت زيتوناً مباركاً!" : "Eight years of patience and care produced blessed olives!";
    Storage.set("anos_olive_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    idx = 0; stage = 0;
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (idx < SEASONS.length) render(); else updateTree(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  render();
})();
