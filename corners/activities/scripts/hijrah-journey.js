/* ============================================================
   71 · رحلة الهجرة — قصة متفرعة على خريطة مكة→المدينة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "رحلة الهجرة", en: "The Hijrah Journey" },
    title:       { ar: "رحلة الهجرة", en: "The Hijrah Journey" },
    desc:        { ar: "عِش رحلة الهجرة النبوية من مكة إلى المدينة! قراراتك الحكيمة تحمي النبي ﷺ وصاحبه أبا بكر — اختر بحكمة لتصل بأمان وتضيء الطريق.", en: "Live the Prophet's ﷺ migration from Makkah to Madinah! Your wise decisions protect the Prophet ﷺ and his companion Abu Bakr — choose wisely to arrive safely." },
    cave:        { ar: "غار ثور", en: "Cave of Thawr" },
    statStep:    { ar: "المرحلة", en: "Stage" },
    statWisdom:  { ar: "الحكمة", en: "Wisdom" },
    sideTitle:   { ar: "دروس الهجرة", en: "Lessons of the Hijrah" },
    tip:         { ar: "كانت الهجرة سنة 622م، وبها بدأ التقويم الهجري. علّمتنا أن النصر يأتي بالتوكل على الله مع الأخذ بالأسباب والتخطيط.", en: "The Hijrah was in 622 CE and began the Islamic calendar. It taught us that victory comes through trust in Allah alongside planning and taking the means." },
    winEyebrow:  { ar: "استقبال المدينة", en: "Welcome of Madinah" },
    winTitle:    { ar: "وصلتَ إلى المدينة بأمان!", en: "You reached Madinah safely!" },
    winMeaning:  { ar: "<strong>طلع البدر علينا</strong> استقبل أهل المدينة النبي ﷺ بالفرح والأناشيد. بدأت دولة الإسلام الأولى، وأصبح الأنصار والمهاجرون إخوة.", en: "<strong>The full moon rose upon us</strong> The people of Madinah welcomed the Prophet ﷺ with joy and songs. The first Islamic state began, and the Ansar and Muhajirun became brothers." },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "رحلة جديدة", en: "New journey" },
  };

  /* المراحل: موضع الدبوس على الخريطة + موقف + خياران */
  const STAGES = [
    { pin: [82, 32], info: { ar: "الليلة الأولى — بيت النبي ﷺ في مكة", en: "Night one — the Prophet's ﷺ house in Makkah" },
      scene: { ar: "قريش تآمرت لإيذاء النبي ﷺ الليلة. طلب النبي من عليٍّ رضي الله عنه أمراً. ما هو؟", en: "Quraysh plotted to harm the Prophet ﷺ tonight. He asked Ali (may Allah be pleased with him) to do something. What?" },
      choices: [
        { t: { ar: "أن ينام في فراشه ويردّ الأمانات لأهلها", en: "Sleep in his bed and return people's trusts to them", ok: true },
          lesson: { ar: "الأمانة: ردّ النبي ﷺ الأمانات حتى لأعدائه", en: "Trustworthiness: the Prophet ﷺ returned trusts even to his enemies" } },
        { t: { ar: "أن يحمل السيف ويقاتل قريشاً", en: "Take a sword and fight Quraysh" } },
      ] },
    { pin: [72, 34], info: { ar: "الخروج من مكة", en: "Leaving Makkah" },
      scene: { ar: "خرج النبي ﷺ وأبو بكر. القوم يبحثون عنهم شمالاً نحو المدينة. أي طريقٍ تختار؟", en: "The Prophet ﷺ and Abu Bakr set out. The pursuers search north toward Madinah. Which route?" },
      choices: [
        { t: { ar: "الاتجاه جنوباً إلى غار ثور لنُضلّل الأعداء", en: "Head south to the Cave of Thawr to mislead the enemy", ok: true },
          lesson: { ar: "التخطيط: الأخذ بالأسباب لا ينافي التوكل", en: "Planning: taking the means does not contradict trust in Allah" } },
        { t: { ar: "الذهاب مباشرةً شمالاً بأسرع طريق", en: "Go straight north by the fastest route" } },
      ] },
    { pin: [60, 30], info: { ar: "غار ثور", en: "The Cave of Thawr" },
      scene: { ar: "وصل المشركون إلى فم الغار! خاف أبو بكر على النبي. بماذا طمأنه النبي ﷺ؟", en: "The pursuers reached the cave's mouth! Abu Bakr feared for the Prophet. How did the Prophet ﷺ reassure him?" },
      choices: [
        { t: { ar: "«لا تحزن إنّ الله معنا»", en: "\"Do not grieve; indeed Allah is with us\"", ok: true },
          lesson: { ar: "التوكل: الطمأنينة تأتي من اليقين بمعية الله", en: "Trust: peace comes from certainty in Allah's company" } },
        { t: { ar: "«اخرج وقاتلهم يا أبا بكر»", en: "\"Go out and fight them, Abu Bakr\"" } },
      ] },
    { pin: [46, 27], info: { ar: "في الطريق الصحراوي", en: "On the desert road" },
      scene: { ar: "لحق بهم سراقة على فرسه طمعاً في جائزة قريش، فعثرت فرسه. لما رأى الآية طلب الأمان. ماذا فعل النبي ﷺ؟", en: "Suraqah chased them for Quraysh's reward, but his horse stumbled. Seeing the sign, he asked for safety. What did the Prophet ﷺ do?" },
      choices: [
        { t: { ar: "أمّنه ووعده بسواري كسرى مستقبلاً", en: "Granted him safety and promised him the bracelets of Kisra one day", ok: true },
          lesson: { ar: "الرحمة والثقة بوعد الله ونصره", en: "Mercy and confidence in Allah's promise and victory" } },
        { t: { ar: "دعا عليه أن يهلك في الصحراء", en: "Prayed for him to perish in the desert" } },
      ] },
    { pin: [30, 22], info: { ar: "خيمة أم معبد", en: "The tent of Umm Ma'bad" },
      scene: { ar: "مرّوا بخيمة أم معبد وكانوا جياعاً. كانت لها شاةٌ هزيلة لا لبن فيها. ماذا كان أدب النبي ﷺ؟", en: "They passed Umm Ma'bad's tent, hungry. She had a weak goat with no milk. What was the Prophet's ﷺ manner?" },
      choices: [
        { t: { ar: "استأذنها بلطف ومسح ضرع الشاة فدرّت بإذن الله", en: "Politely asked her, wiped the goat's udder, and it gave milk by Allah's will", ok: true },
          lesson: { ar: "حسن الخلق والبركة تصحب أهل الأدب", en: "Good character — and blessing accompanies the well-mannered" } },
        { t: { ar: "أخذ الشاة دون استئذان لأنهم جياع", en: "Took the goat without asking since they were hungry" } },
      ] },
    { pin: [18, 16], info: { ar: "أطراف المدينة", en: "The outskirts of Madinah" },
      scene: { ar: "لاح نخيل المدينة! خرج أهلها ينتظرون منذ أيام. كيف تدخل المدينة؟", en: "The palms of Madinah appeared! Its people had waited for days. How do you enter?" },
      choices: [
        { t: { ar: "بتواضعٍ وشكرٍ لله، وأبدأ ببناء المسجد", en: "With humility and gratitude to Allah, and start by building the mosque", ok: true },
          lesson: { ar: "التواضع والبدء بالمسجد: قلب المجتمع المسلم", en: "Humility, and starting with the mosque: the heart of the Muslim community" } },
        { t: { ar: "بموكبٍ عظيمٍ يليق بزعيمٍ منتصر", en: "With a grand parade befitting a victorious leader" } },
      ] },
  ];

  const $ = (id) => document.getElementById(id);
  let step = 0, wisdom = 0, lessons = [];

  function renderLessons() {
    const L = Lang.current();
    $("hj-lessons").innerHTML = STAGES.map((s, i) => {
      const got = lessons[i];
      return `<div class="dhikr-item ${got ? "is-highlighted" : ""}">
        <span class="dhikr-swatch" style="background:${got ? "var(--coral)" : "var(--bg-soft)"}"></span>
        <span class="dhikr-text" style="font-size:12px;">${got ? got : (L === "ar" ? "؟ درسٌ لم يُكتشف" : "? A lesson not yet found")}</span>
        <span class="dhikr-count">${got ? "✓" : i + 1}</span>
      </div>`;
    }).join("");
  }

  function render() {
    const L = Lang.current();
    if (step >= STAGES.length) return;
    const s = STAGES[step];
    $("hj-pin").style.left = s.pin[0] + "%";
    $("hj-pin").style.top = s.pin[1] + "%";
    $("hj-stage-info").innerHTML = "📍 " + s.info[L];
    $("stat-step").textContent = `${step + 1}/${STAGES.length}`;
    const opts = s.choices.map((c, i) => ({ c, i })).sort(() => Math.random() - 0.5);
    $("hj-area").innerHTML = `
      <div class="sj-scene">
        <p class="sj-text">${s.scene[L]}</p>
        <div class="sj-choices">
          ${opts.map(o => `<button class="sj-choice" data-ok="${o.c.ok ? 1 : 0}" data-idx="${o.i}">${o.c.t[L]}<span class="arrow">←</span></button>`).join("")}
        </div>
      </div>`;
    $("hj-area").querySelectorAll(".sj-choice").forEach(b => b.addEventListener("click", () => choose(b)));
    renderLessons();
  }

  function choose(btn) {
    const L = Lang.current();
    const s = STAGES[step];
    const idx = +btn.dataset.idx;
    $("hj-area").querySelectorAll(".sj-choice").forEach(x => x.style.pointerEvents = "none");
    if (btn.dataset.ok === "1") {
      wisdom += 20; $("stat-wisdom").textContent = wisdom;
      lessons[step] = s.choices[idx].lesson[L];
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      AudioBus.chord([523, 659, 784], 0.2);
      Particles.fire(24, { originY: "40%" });
      const lessonBox = document.createElement("div");
      lessonBox.className = "sj-lesson";
      lessonBox.innerHTML = "💡 " + s.choices[idx].lesson[L];
      $("hj-area").querySelector(".sj-scene").appendChild(lessonBox);
      step++;
      setTimeout(() => { if (step >= STAGES.length) win(); else render(); }, 2200);
    } else {
      AudioBus.fail();
      btn.style.background = "var(--rose)";
      const hint = document.createElement("div");
      hint.className = "sj-lesson";
      hint.style.background = "var(--rose)"; hint.style.color = "#8A3030";
      hint.textContent = L === "ar" ? "هذا ليس هدي النبي ﷺ — فكّر في الحكمة والرحمة، وحاول ثانيةً" : "That's not the Prophet's ﷺ way — think of wisdom and mercy, and try again";
      if (!$("hj-area").querySelector(".sj-lesson")) $("hj-area").querySelector(".sj-scene").appendChild(hint);
      setTimeout(() => { render(); }, 1600);
    }
  }

  function win() {
    renderLessons();
    $("hj-area").innerHTML = "";
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `أكملتَ الرحلة بحكمةٍ قدرها ${wisdom}` : `You completed the journey with ${wisdom} wisdom`;
    Storage.set("anos_hijrah_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    step = 0; wisdom = 0; lessons = [];
    $("stat-wisdom").textContent = 0;
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", render);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  render();
})();
