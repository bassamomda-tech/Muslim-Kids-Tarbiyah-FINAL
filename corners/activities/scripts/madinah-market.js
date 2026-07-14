/* ============================================================
   74 · سوق المدينة — محاكاة تجارية عن الأمانة
   لكل زبون خياران: أمين (ثقة+، ربح قليل) أو غاشّ (ربح كثير، ثقة−)
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "سوق المدينة", en: "The Madinah Market" },
    title:       { ar: "سوق المدينة", en: "The Madinah Market" },
    desc:        { ar: "أنت تاجرٌ في سوق المدينة! يأتيك الزبائن، وعليك أن تبيع بأمانة النبي ﷺ. الصدق يبني ثقتك، والغش يهدمها — التاجر الصدوق مع النبيين يوم القيامة!", en: "You're a trader in the Madinah market! Customers come, and you sell with the honesty of the Prophet ﷺ. Honesty builds your trust; cheating destroys it — the honest trader will be with the Prophets!" },
    stallName:   { ar: "🏪 دكّان العطّار الأمين", en: "🏪 The Honest Perfumer's Shop" },
    trustLabel:  { ar: "ثقة الناس", en: "People's trust" },
    goldLabel:   { ar: "الربح", en: "Profit" },
    statCustomer:{ ar: "الزبون", en: "Customer" },
    sideTitle:   { ar: "أخلاق التاجر المسلم", en: "The Muslim trader's ethics" },
    sideQuote:   { ar: "«التاجر الصدوق الأمين مع النبيين والصدّيقين والشهداء»", en: "\"The truthful, trustworthy trader will be with the Prophets, the truthful, and the martyrs\"" },
    sideSrc:     { ar: "رواه الترمذي", en: "Narrated by at-Tirmidhi" },
    tip:         { ar: "مرّ النبي ﷺ على صُبرة طعام فوجد بللاً تحتها، فقال: «مَن غشّ فليس منّي». الأمانة قد تُقلّل ربحك اليوم لكنها تبني ثقةً تدوم.", en: "The Prophet ﷺ passed a pile of food, found it wet underneath, and said: \"Whoever cheats is not one of us.\" Honesty may lower today's profit but builds lasting trust." },
    winEyebrow:  { ar: "أغلق الدكّان", en: "Shop closed" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "يوم جديد", en: "New day" },
    honest:      { ar: "أمانة", en: "Honest" },
    profit:      { ar: "ربح أكبر", en: "More profit" },
  };

  /* الزبائن: الموقف + خيار أمين وخيار غاشّ */
  const CUSTOMERS = [
    { avatar: "🧕", say: { ar: "أريد أفضل تمرٍ عندك لضيوفي.", en: "I want your best dates for my guests." },
      sub: { ar: "بعض تمرك جيّد وبعضه رديء مختلط.", en: "Some dates are good, some are poor, all mixed." },
      honest: { t: { ar: "أُريها الجيّد والرديء وأسعّر كلاً بصدق", en: "Show her both and price each honestly" }, gold: 8, trust: 12 },
      cheat: { t: { ar: "أضع الرديء أسفل والجيّد فوق وأبيع بسعرٍ واحد", en: "Hide the poor below the good and sell at one price" }, gold: 20, trust: -25 } },
    { avatar: "👳", say: { ar: "كم وزن هذا العسل؟", en: "How much does this honey weigh?" },
      sub: { ar: "الميزان بيدك ويمكنك التلاعب به.", en: "The scale is in your hand; you could tip it." },
      honest: { t: { ar: "أزِن بالتمام وأُوفي الكيل والميزان", en: "Weigh exactly and give full measure" }, gold: 7, trust: 12 },
      cheat: { t: { ar: "أُنقص الوزن قليلاً فلن يلاحظ", en: "Shave a little off — he won't notice" }, gold: 18, trust: -22 } },
    { avatar: "🧓", say: { ar: "هذا القماش، هل لونه يثبت بالغسيل؟", en: "This cloth — will its color hold when washed?" },
      sub: { ar: "تعرف أن لونه يبهت بعد غسلتين.", en: "You know the color fades after two washes." },
      honest: { t: { ar: "أُخبره أن اللون يبهت وأعرض قماشاً أثبت", en: "Tell him it fades and offer a sturdier cloth" }, gold: 6, trust: 14 },
      cheat: { t: { ar: "أقول إنه يدوم للأبد وأبيعه بسعرٍ عالٍ", en: "Say it lasts forever and sell it dear" }, gold: 22, trust: -28 } },
    { avatar: "👩", say: { ar: "أعطِني الباقي من درهمي.", en: "Give me the change from my dirham." },
      sub: { ar: "الباقي 4 قروش، وهي مستعجلة.", en: "The change is 4 coins, and she's in a hurry." },
      honest: { t: { ar: "أُعيد الباقي كاملاً وأشكرها", en: "Return the full change and thank her" }, gold: 5, trust: 10 },
      cheat: { t: { ar: "أُعطيها 3 قروش وأحتفظ بواحد", en: "Give 3 coins and keep one" }, gold: 12, trust: -20 } },
    { avatar: "🧔", say: { ar: "سمعتُ أن بضاعتك الأرخص في السوق!", en: "I heard your goods are the cheapest in the market!" },
      sub: { ar: "سعرك عادلٌ لكنه ليس الأرخص فعلاً.", en: "Your price is fair but not truly the cheapest." },
      honest: { t: { ar: "أوضّح سعري الحقيقي دون مبالغة", en: "State my real price without exaggeration" }, gold: 7, trust: 11 },
      cheat: { t: { ar: "أؤكّد أنني الأرخص حتى أكسبه", en: "Insist I'm the cheapest to win him over" }, gold: 15, trust: -18 } },
    { avatar: "🧒", say: { ar: "أمي أرسلتني لأشتري دقيقاً، وهذه نقودي.", en: "Mom sent me to buy flour; here's my money." },
      sub: { ar: "طفلٌ صغير لا يعرف الأسعار جيداً.", en: "A little child who doesn't know prices well." },
      honest: { t: { ar: "أُعامله كأنه ابني وأُعطيه حقّه كاملاً", en: "Treat him like my own child and give full value" }, gold: 6, trust: 15 },
      cheat: { t: { ar: "أستغلّ صِغره وأبيعه أقل بأكثر", en: "Exploit his youth and sell less for more" }, gold: 16, trust: -30 } },
  ];

  const $ = (id) => document.getElementById(id);
  let idx = 0, gold = 0, trust = 50, honestCount = 0;

  function setMeters() {
    trust = Math.max(0, Math.min(100, trust));
    $("mk-trust").style.width = trust + "%";
    $("mk-trust-val").textContent = Math.round(trust) + "%";
    $("mk-gold").style.width = Math.min(100, gold) + "%";
    $("mk-gold-val").textContent = gold;
    $("mk-purse").textContent = "💰 " + gold;
  }

  function render() {
    const L = Lang.current();
    if (idx >= CUSTOMERS.length) return win();
    const c = CUSTOMERS[idx];
    $("stat-customer").textContent = `${idx + 1}/${CUSTOMERS.length}`;
    /* رتّب الخيارين عشوائياً */
    const choices = [
      { key: "honest", ...c.honest, tag: "trust", tagTxt: I18N.honest[L] },
      { key: "cheat", ...c.cheat, tag: "gold", tagTxt: I18N.profit[L] },
    ].sort(() => Math.random() - 0.5);
    $("mk-area").innerHTML = `
      <div class="mk-customer">
        <span class="avatar">${c.avatar}</span>
        <div class="bubble">
          <p>«${c.say[L]}»</p>
          <small>${c.sub[L]}</small>
        </div>
      </div>
      <div class="mk-choices">
        ${choices.map(ch => `
          <button class="mk-choice" data-key="${ch.key}">
            <span>${ch.t[L]}</span>
            <span class="tag ${ch.tag}">${ch.tagTxt}</span>
          </button>`).join("")}
      </div>`;
    $("mk-area").querySelectorAll(".mk-choice").forEach(b => b.addEventListener("click", () => choose(b.dataset.key)));
  }

  function choose(key) {
    const c = CUSTOMERS[idx];
    const ch = c[key];
    gold += ch.gold; trust += ch.trust;
    if (key === "honest") { honestCount++; AudioBus.chord([523, 659], 0.18); Particles.fire(16, { originY: "45%" }); }
    else { AudioBus.tone(220, 0.2, "sawtooth", 0.06); }
    setMeters();
    idx++;
    render();
  }

  function win() {
    const L = Lang.current();
    setMeters();
    let title, meaning;
    if (trust >= 70) {
      title = L === "ar" ? "التاجر الأمين! 🤝" : "The trusted trader! 🤝";
      meaning = L === "ar" ? "بنيتَ ثقةً عظيمة وربحاً حلالاً — سيعود إليك الناس دائماً، وأجرك عند الله أعظم." : "You built great trust and lawful profit — people will always return, and your reward with Allah is greater.";
    } else if (trust >= 40) {
      title = L === "ar" ? "تاجرٌ متوسط" : "An average trader";
      meaning = L === "ar" ? "ربحتَ بعض المال لكن ثقة الناس اهتزّت. تذكّر: الأمانة كنزٌ لا يفنى." : "You made some money but people's trust wavered. Remember: honesty is a treasure that never fades.";
    } else {
      title = L === "ar" ? "خسرتَ ثقة الناس" : "You lost people's trust";
      meaning = L === "ar" ? "جمعتَ مالاً كثيراً لكن لا أحد يثق بك الآن. «مَن غشّ فليس منّي» — جرّب يوماً جديداً بالأمانة." : "You gathered much money but no one trusts you now. \"Whoever cheats is not one of us\" — try a new day with honesty.";
    }
    $("win-title").textContent = title;
    $("win-sub").textContent = L === "ar" ? `الثقة ${Math.round(trust)}% · الربح ${gold} · قرارات أمينة: ${honestCount}/6` : `Trust ${Math.round(trust)}% · Profit ${gold} · Honest choices: ${honestCount}/6`;
    $("win-meaning").innerHTML = meaning;
    Storage.set("anos_market_done", true);
    if (trust >= 70) { AudioBus.success(); Particles.fire(120); } else AudioBus.tone(300, 0.3);
    Modal.open("win-modal");
  }

  function reset() {
    idx = 0; gold = 0; trust = 50; honestCount = 0;
    setMeters();
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (idx < CUSTOMERS.length) render(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  setMeters(); render();
})();
