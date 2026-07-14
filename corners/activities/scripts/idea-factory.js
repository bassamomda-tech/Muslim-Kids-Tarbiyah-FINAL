/* ============================================================
   87 · مصنع الأفكار — ادمج عنصرين لحلّ مشكلة (ابتكار)
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "مصنع الأفكار", en: "Idea Factory" },
    title:       { ar: "مصنع الأفكار", en: "The Idea Factory" },
    desc:        { ar: "المبدع يحلّ المشكلات بأفكارٍ جديدة! ادمج فكرتين لتخترع حلاً لمشكلةٍ في مجتمعك. اختر العنصرين المناسبين لكل تحدٍّ، وشاهد فكرتك تُولد!", en: "A creative person solves problems with new ideas! Combine two ideas to invent a solution to a community problem. Pick the right two elements for each challenge and watch your idea come to life!" },
    slotHint:    { ar: "العنصر الأول", en: "First element" },
    slotHint2:   { ar: "العنصر الثاني", en: "Second element" },
    resultHint:  { ar: "الفكرة!", en: "The idea!" },
    poolLabel:   { ar: "العناصر المتاحة", en: "Available elements" },
    inventBtn:   { ar: "اخترع!", en: "Invent!" },
    statRound:   { ar: "التحدّي", en: "Challenge" },
    statIdeas:   { ar: "أفكار ابتكرتها", en: "Ideas created" },
    sideTitle:   { ar: "الإبداع في الإسلام", en: "Creativity in Islam" },
    sideQuote:   { ar: "«إنّ الله يحبّ إذا عمل أحدكم عملاً أن يُتقنه»", en: "\"Allah loves that when one of you does a task, he does it with excellence\"" },
    sideSrc:     { ar: "رواه البيهقي", en: "Narrated by al-Bayhaqi" },
    tip:         { ar: "الابتكار يبدأ بملاحظة مشكلة ثم التفكير في حلّ. فكّر: ما الذي يحتاجه الناس؟ وكيف أجمع شيئين معاً لأصنع شيئاً مفيداً؟", en: "Innovation starts by noticing a problem then thinking of a solution. Think: what do people need? How can I combine two things to make something useful?" },
    winEyebrow:  { ar: "مبتكر صغير", en: "Little Innovator" },
    winTitle:    { ar: "حللتَ كل التحدّيات!", en: "You solved every challenge!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "تحدّيات جديدة", en: "New challenges" },
    twoNeeded:   { ar: "اختر عنصرين أولاً", en: "Pick two elements first" },
    wrong:       { ar: "هذا المزيج لا يحلّ المشكلة — فكّر مرة أخرى", en: "That mix doesn't solve it — think again" },
  };

  /* التحدّيات: مشكلة + العنصران الصحيحان + النتيجة + ملهيات */
  const CHALLENGES = [
    { problem: { ar: "المسنّون في الحيّ يصعب عليهم حمل مشترياتهم الثقيلة.", en: "Elderly neighbors struggle to carry heavy groceries." },
      a: { em: "🛒", ar: "عربة تسوّق", en: "Shopping cart" }, b: { em: "🔋", ar: "محرّك كهربائي", en: "Electric motor" },
      result: { em: "🛺", ar: "عربة كهربائية تحمل الأغراض للبيت!", en: "An electric cart that carries goods home!" },
      extra: [ { em: "☂️", ar: "مظلّة", en: "Umbrella" }, { em: "📻", ar: "راديو", en: "Radio" }, { em: "🧊", ar: "ثلج", en: "Ice" } ] },
    { problem: { ar: "الأطفال ينسون أوقات الصلاة أثناء اللعب.", en: "Children forget prayer times while playing." },
      a: { em: "⌚", ar: "ساعة", en: "Watch" }, b: { em: "🕌", ar: "أذان", en: "Adhan" },
      result: { em: "⌚", ar: "ساعة ذكية تُذكّر بالصلاة بصوت الأذان!", en: "A smartwatch that reminds of prayer with the adhan!" },
      extra: [ { em: "🎮", ar: "لعبة", en: "Game" }, { em: "🍭", ar: "حلوى", en: "Candy" }, { em: "🎈", ar: "بالون", en: "Balloon" } ] },
    { problem: { ar: "حديقة الحيّ جافّة والماء قليل في الصيف.", en: "The neighborhood garden is dry with little water in summer." },
      a: { em: "☀️", ar: "طاقة شمسية", en: "Solar energy" }, b: { em: "💧", ar: "مضخّة ماء", en: "Water pump" },
      result: { em: "🌻", ar: "نظام ريّ يعمل بالشمس يسقي الحديقة تلقائياً!", en: "A solar-powered irrigation system that waters the garden!" },
      extra: [ { em: "🎨", ar: "دهان", en: "Paint" }, { em: "📚", ar: "كتاب", en: "Book" }, { em: "🔔", ar: "جرس", en: "Bell" } ] },
    { problem: { ar: "الطلاب المكفوفون لا يستطيعون قراءة لافتات المدرسة.", en: "Blind students can't read the school's signs." },
      a: { em: "🔤", ar: "حروف بارزة", en: "Raised letters" }, b: { em: "🔊", ar: "مكبّر صوت", en: "Speaker" },
      result: { em: "🪧", ar: "لافتات برايل تنطق الاسم عند لمسها!", en: "Braille signs that speak the name when touched!" },
      extra: [ { em: "🪁", ar: "طائرة ورقية", en: "Kite" }, { em: "🧴", ar: "صابون", en: "Soap" }, { em: "🕯", ar: "شمعة", en: "Candle" } ] },
    { problem: { ar: "الناس يرمون طعاماً كثيراً بينما غيرهم جائع.", en: "People throw away lots of food while others go hungry." },
      a: { em: "📱", ar: "تطبيق هاتف", en: "Phone app" }, b: { em: "🍲", ar: "طعام فائض", en: "Surplus food" },
      result: { em: "🤝", ar: "تطبيق يوصّل الطعام الفائض للمحتاجين!", en: "An app that delivers surplus food to those in need!" },
      extra: [ { em: "🎸", ar: "قيثارة", en: "Guitar" }, { em: "🧦", ar: "جوارب", en: "Socks" }, { em: "🪀", ar: "لعبة يويو", en: "Yo-yo" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let round = 0, ideas = 0, slots = [null, null], poolItems = [];

  function renderRound() {
    slots = [null, null];
    const c = CHALLENGES[round], L = Lang.current();
    $("id-mission").innerHTML = `🎯 ${c.problem[L]}`;
    $("stat-round").textContent = `${round + 1}/${CHALLENGES.length}`;
    $("id-feedback").textContent = "";
    $("id-result").innerHTML = `<span>${I18N.resultHint[L]}</span>`;
    $("id-result").classList.remove("filled");
    /* مزيج العناصر: الصحيحان + الملهيات */
    poolItems = [ { ...c.a, key: "a" }, { ...c.b, key: "b" }, ...c.extra.map((e, i) => ({ ...e, key: "e" + i })) ].sort(() => Math.random() - 0.5);
    renderSlots(); renderPool();
  }

  function renderSlots() {
    const L = Lang.current();
    [0, 1].forEach(s => {
      const el = $("id-slot" + s);
      if (slots[s]) { el.classList.add("filled"); el.innerHTML = `<span class="em">${slots[s].em}</span>${slots[s][L]}`; }
      else { el.classList.remove("filled"); el.innerHTML = `<span>${s === 0 ? I18N.slotHint[L] : I18N.slotHint2[L]}</span>`; }
    });
  }

  function renderPool() {
    const L = Lang.current();
    $("id-pool").innerHTML = poolItems.map(p => {
      const used = slots.some(s => s && s.key === p.key);
      return `<button class="id-chip ${used ? "used" : ""}" data-key="${p.key}"><span style="font-size:20px;">${p.em}</span> ${p[L]}</button>`;
    }).join("");
    $("id-pool").querySelectorAll(".id-chip:not(.used)").forEach(b => b.addEventListener("click", () => addToSlot(b.dataset.key)));
  }

  function addToSlot(key) {
    const item = poolItems.find(p => p.key === key);
    const s = slots[0] ? (slots[1] ? null : 1) : 0;
    if (s === null) { slots[0] = item; slots[1] = null; } /* استبدل عند الامتلاء */
    else slots[s] = item;
    AudioBus.tick(560);
    renderSlots(); renderPool();
  }

  function invent() {
    const c = CHALLENGES[round], L = Lang.current();
    if (!slots[0] || !slots[1]) { $("id-feedback").textContent = I18N.twoNeeded[L]; AudioBus.tick(300); return; }
    const keys = [slots[0].key, slots[1].key].sort().join(",");
    if (keys === ["a", "b"].sort().join(",")) {
      ideas++; $("stat-ideas").textContent = ideas;
      $("id-result").innerHTML = `<span class="em">${c.result.em}</span>${c.result[L]}`;
      $("id-result").classList.add("filled", "spark");
      setTimeout(() => $("id-result").classList.remove("spark"), 600);
      AudioBus.success();
      Particles.fire(50, { originY: "40%" });
      $("id-feedback").textContent = "";
      setTimeout(() => {
        round++;
        if (round >= CHALLENGES.length) return win();
        renderRound();
      }, 2000);
    } else {
      AudioBus.fail();
      $("id-feedback").textContent = I18N.wrong[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `خمس أفكار مبتكرة تحلّ مشكلات حقيقية!` : `Five creative ideas solving real problems!`;
    Storage.set("anos_idea_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0; ideas = 0;
    $("stat-ideas").textContent = 0;
    Modal.close("win-modal");
    renderRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", renderRound);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("id-invent").addEventListener("click", invent);
  /* النقر على الخانة يفرّغها */
  [0, 1].forEach(s => $("id-slot" + s).addEventListener("click", () => { if (slots[s]) { slots[s] = null; AudioBus.tick(360); renderSlots(); renderPool(); } }));
  AudioBus.bindButton($("mute-btn"));
  renderRound();
})();
