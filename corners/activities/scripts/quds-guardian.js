/* ============================================================
   91 · حارس القدس الصغير — قصة تفاعلية حول المسجد الأقصى
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "حارس القدس الصغير", en: "Little Guardian of Al-Quds" },
    title:       { ar: "حارس القدس الصغير", en: "The Little Guardian of Al-Quds" },
    desc:        { ar: "القدس أمانةٌ في أعناقنا! رافِق «سلمى» الصغيرة في يومٍ حول المسجد الأقصى، وساعدها باختياراتك على حبّ القدس وحمايتها بالعلم والدعاء والعمل الصالح.", en: "Al-Quds is a trust upon us! Join little Salma on a day around Al-Aqsa Mosque, and help her through your choices to love and protect Al-Quds with knowledge, du'a, and good deeds." },
    statStep:    { ar: "المشهد", en: "Scene" },
    statLove:    { ar: "حبّ القدس", en: "Love of Quds" },
    sideTitle:   { ar: "فضل المسجد الأقصى", en: "The virtue of Al-Aqsa" },
    sideQuote:   { ar: "﴿سبحان الذي أسرى بعبده ليلاً من المسجد الحرام إلى المسجد الأقصى الذي باركنا حوله﴾", en: "\"Glory to Him who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We blessed\"" },
    sideSrc:     { ar: "الإسراء · 1", en: "Al-Isra · 1" },
    tip:         { ar: "المسجد الأقصى أولى القبلتين، وثالث الحرمين الشريفين، ومسرى النبي ﷺ. حبّه ومعرفته والدعاء لأهله من واجبنا نحو أمتنا.", en: "Al-Aqsa is the first of the two qiblas, the third of the sacred mosques, and the site of the Prophet's ﷺ night journey. Loving it, knowing it, and praying for its people is our duty to our Ummah." },
    winEyebrow:  { ar: "حارسٌ صغير", en: "A little guardian" },
    winTitle:    { ar: "أصبحتَ حارساً للقدس بقلبك!", en: "You became a guardian of Al-Quds with your heart!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
  };

  const SCENES = [
    { em: ["🌅", "🕊"], chapter: { ar: "صباحٌ في القدس", en: "A morning in Al-Quds" },
      s: { ar: "استيقظت سلمى على صوت أذان الفجر من المسجد الأقصى. جدّها يدعوها للصلاة. ماذا تختار؟", en: "Salma woke to the Fajr adhan from Al-Aqsa. Her grandfather calls her to pray. What does she choose?" },
      choices: [
        { t: { ar: "أذهب للصلاة في الأقصى وأتعلّم فضله", en: "Go pray in Al-Aqsa and learn its virtue", ok: true },
          fb: { ar: "الصلاة في الأقصى بخمسمائة صلاة — أجرٌ عظيم!", en: "A prayer in Al-Aqsa equals 500 prayers — a great reward!" } },
        { t: { ar: "أكمل نومي، سأصلّي في البيت", en: "Keep sleeping, I'll pray at home" }, fb: null },
      ] },
    { em: ["📖", "🕌"], chapter: { ar: "درس التاريخ", en: "A history lesson" },
      s: { ar: "في المسجد، شيخٌ كبير يحكي للأطفال عن القدس. يسأل: مَن يعرف لماذا الأقصى مهمّ؟", en: "In the mosque, an elder tells children about Al-Quds. He asks: who knows why Al-Aqsa matters?" },
      choices: [
        { t: { ar: "أرفع يدي: هو أولى القبلتين ومسرى النبي ﷺ", en: "Raise my hand: it's the first qibla and site of the night journey", ok: true },
          fb: { ar: "أحسنتِ! المعرفة أول خطوات الحبّ والحماية", en: "Well done! Knowledge is the first step of love and protection" } },
        { t: { ar: "أبقى صامتة لأني لا أعرف", en: "Stay silent because I don't know" }, fb: null },
      ] },
    { em: ["🫒", "🌳"], chapter: { ar: "شجرة الزيتون", en: "The olive tree" },
      s: { ar: "في طريق العودة، رأت سلمى جارَها المسنّ يعتني بزيتونةٍ قديمة. ماذا تفعل؟", en: "On the way home, Salma sees her elderly neighbor tending an old olive tree. What does she do?" },
      choices: [
        { t: { ar: "أساعده وأتعلّم أن الزيتون رمز صمود أهلنا", en: "Help him and learn the olive is a symbol of our people's steadfastness", ok: true },
          fb: { ar: "الزيتونة تعيش مئات السنين — كصمود أهل القدس", en: "An olive tree lives centuries — like the steadfastness of Al-Quds's people" } },
        { t: { ar: "أمرّ مسرعةً دون أن ألتفت", en: "Rush past without looking" }, fb: null },
      ] },
    { em: ["🤲", "🌙"], chapter: { ar: "دعاءٌ من القلب", en: "A du'a from the heart" },
      s: { ar: "في المساء، تجلس العائلة معاً. تسأل الأم: بماذا ندعو لإخواننا في كل مكان؟", en: "In the evening, the family sits together. Mom asks: what do we pray for our brothers everywhere?" },
      choices: [
        { t: { ar: "أدعو بالنصر والأمان لأهل القدس وكل المسلمين", en: "Pray for victory and safety for Al-Quds's people and all Muslims", ok: true },
          fb: { ar: "الدعاء سلاح المؤمن، ورابطة الأمة الواحدة", en: "Du'a is the believer's weapon, and the bond of the one Ummah" } },
        { t: { ar: "أفكّر في ألعابي ولا أشارك", en: "Think about my toys and not join in" }, fb: null },
      ] },
    { em: ["🎨", "🖼"], chapter: { ar: "لوحة القدس", en: "A painting of Al-Quds" },
      s: { ar: "في المدرسة، طُلب من الأطفال رسم شيءٍ يحبّونه. ماذا ترسم سلمى؟", en: "At school, children are asked to draw something they love. What does Salma draw?" },
      choices: [
        { t: { ar: "أرسم قبّة الصخرة لأعرّف أصدقائي بالقدس", en: "Draw the Dome of the Rock to introduce my friends to Al-Quds", ok: true },
          fb: { ar: "الفنّ رسالة! عرّفتِ غيرك بقضيّة أمتك", en: "Art is a message! You taught others about your Ummah's cause" } },
        { t: { ar: "أرسم أي شيء بسرعة لأنتهي", en: "Draw anything quickly to be done" }, fb: null },
      ] },
    { em: ["🕊", "💚"], chapter: { ar: "وعدُ الحارس", en: "The guardian's promise" },
      s: { ar: "قبل النوم، تفكّر سلمى في يومها. ما العهد الذي تقطعه على نفسها؟", en: "Before sleep, Salma reflects on her day. What promise does she make to herself?" },
      choices: [
        { t: { ar: "أن أتعلّم عن القدس وأدعو لها وأعرّف بها دائماً", en: "To always learn about Al-Quds, pray for it, and tell others", ok: true },
          fb: { ar: "هذا هو الحارس الحقيقي: بالقلب والعلم والعمل", en: "This is a true guardian: with heart, knowledge, and action" } },
        { t: { ar: "أن أنساها بعد اليوم", en: "To forget about it after today" }, fb: null },
      ] },
  ];

  const $ = (id) => document.getElementById(id);
  let step = 0, love = 0;

  function decorate(ems) {
    $("gd-illus").querySelectorAll(".gd-scene-em").forEach(e => e.remove());
    ems.forEach((em, i) => {
      const s = document.createElement("span");
      s.className = "gd-scene-em";
      s.textContent = em;
      s.style.left = (14 + i * 62) + "%"; s.style.top = (18 + (i % 2) * 20) + "%";
      $("gd-illus").appendChild(s);
    });
  }

  function render() {
    const L = Lang.current();
    if (step >= SCENES.length) return;
    const sc = SCENES[step];
    decorate(sc.em);
    $("gd-chapter").innerHTML = `📖 ${sc.chapter[L]}`;
    $("stat-step").textContent = `${step + 1}/${SCENES.length}`;
    const opts = sc.choices.map((c, i) => ({ c, i })).sort(() => Math.random() - 0.5);
    $("gd-area").innerHTML = `
      <div class="sj-scene">
        <p class="sj-text">${sc.s[L]}</p>
        <div class="sj-choices">
          ${opts.map(o => `<button class="sj-choice" data-ok="${o.c.ok ? 1 : 0}" data-i="${o.i}">${o.c.t[L]}<span class="arrow">←</span></button>`).join("")}
        </div>
      </div>`;
    $("gd-area").querySelectorAll(".sj-choice").forEach(b => b.addEventListener("click", () => choose(b)));
  }

  function choose(btn) {
    const L = Lang.current();
    const sc = SCENES[step];
    const i = +btn.dataset.i;
    $("gd-area").querySelectorAll(".sj-choice").forEach(x => x.style.pointerEvents = "none");
    if (btn.dataset.ok === "1") {
      love += 20; $("stat-love").textContent = love;
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      AudioBus.chord([523, 659, 784], 0.2); Particles.fire(24, { originY: "40%" });
      const box = document.createElement("div");
      box.className = "sj-lesson"; box.innerHTML = "💚 " + sc.choices[i].fb[L];
      $("gd-area").querySelector(".sj-scene").appendChild(box);
      step++;
      setTimeout(() => { if (step >= SCENES.length) win(); else render(); }, 2100);
    } else {
      AudioBus.fail();
      btn.style.background = "var(--rose)";
      const hint = document.createElement("div");
      hint.className = "sj-lesson"; hint.style.background = "var(--rose)"; hint.style.color = "#8A3030";
      hint.textContent = L === "ar" ? "فكّري ثانيةً كحارسةٍ للقدس 💭" : "Think again like a guardian of Al-Quds 💭";
      if (!$("gd-area").querySelector(".sj-lesson")) $("gd-area").querySelector(".sj-scene").appendChild(hint);
      setTimeout(render, 1500);
    }
  }

  function win() {
    $("gd-area").innerHTML = "";
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? "بالعلم والدعاء والعمل صرتَ من حرّاس القدس في قلبك"
      : "Through knowledge, du'a, and action, you became a guardian of Al-Quds in your heart";
    Storage.set("anos_quds_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    step = 0; love = 0;
    $("stat-love").textContent = 0;
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (step < SCENES.length) render(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  render();
})();
