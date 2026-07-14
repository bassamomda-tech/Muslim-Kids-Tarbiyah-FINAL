/* ============================================================
   99 · سفير السلام — أصلِح بين المتخاصمين برفع مقياس السلام
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "سفير السلام", en: "Peace Envoy" },
    title:       { ar: "سفير السلام", en: "The Peace Envoy" },
    desc:        { ar: "الإصلاح بين الناس من أعظم الأعمال! أنت سفيرٌ صغير للسلام، تحلّ الخلافات بالحكمة والعدل. اختر كلماتك بعناية لتُصلح بين المتخاصمين وترفع مقياس السلام.", en: "Reconciling people is among the greatest deeds! You are a little peace envoy, resolving disputes with wisdom and justice. Choose your words carefully to reconcile the disputing parties and raise the peace meter." },
    peaceLabel:  { ar: "☮️ مقياس السلام", en: "☮️ Peace meter" },
    statCase:    { ar: "القضية", en: "Case" },
    statSolved:  { ar: "صلحٌ عقدته", en: "Reconciliations" },
    sideTitle:   { ar: "فضل الإصلاح", en: "The virtue of reconciliation" },
    sideQuote:   { ar: "﴿فأصلحوا بين أخويكم واتقوا الله لعلكم ترحمون﴾", en: "\"So make reconciliation between your brothers and fear Allah that you may receive mercy\"" },
    sideSrc:     { ar: "الحجرات · 10", en: "Al-Hujurat · 10" },
    tip:         { ar: "الإصلاح بين الناس أفضل من كثيرٍ من النوافل. استمع للطرفين، وأنصِف، واختر الكلمة اللينة — «والصلح خير».", en: "Reconciling people is better than much voluntary worship. Listen to both sides, be fair, and choose the gentle word — \"and reconciliation is best.\"" },
    winEyebrow:  { ar: "سفيرُ السلام", en: "Peace Envoy" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
  };

  /* القضايا: الطرفان + الموقف + خيارات بقيم سلام مختلفة */
  const CASES = [
    { a: { face: "😠", name: { ar: "سالم", en: "Salim" } }, b: { face: "😤", name: { ar: "عمر", en: "Omar" } },
      text: { ar: "تشاجر سالم وعمر على كرةٍ في الملعب، كلٌّ يقول إنها له. ماذا تفعل كسفيرٍ للسلام؟", en: "Salim and Omar quarreled over a ball, each claiming it. What do you do as peace envoy?" },
      choices: [
        { t: { ar: "أستمع لكليهما بإنصاف ثم نجد حلاً يرضيهما", en: "Listen to both fairly, then find a solution that satisfies them" }, p: 20 },
        { t: { ar: "آخذ الكرة لنفسي حتى يتوقّفا", en: "Take the ball myself so they stop" }, p: -5 },
        { t: { ar: "أنحاز لصديقي سالم", en: "Side with my friend Salim" }, p: -10 },
      ] },
    { a: { face: "😢", name: { ar: "ليلى", en: "Layla" } }, b: { face: "😔", name: { ar: "هند", en: "Hind" } },
      text: { ar: "قالت هند كلمةً جرحت ليلى دون قصد، وليلى حزينة. كيف تُصلح بينهما؟", en: "Hind unintentionally said something that hurt Layla, and Layla is sad. How do you reconcile them?" },
      choices: [
        { t: { ar: "أوضّح أنها لم تقصد وأشجّع هند على الاعتذار", en: "Explain she didn't mean it and encourage Hind to apologize" }, p: 20 },
        { t: { ar: "أقول لليلى أن تنسى الأمر فقط", en: "Just tell Layla to forget it" }, p: 5 },
        { t: { ar: "أخبر الجميع بما حدث", en: "Tell everyone what happened" }, p: -10 },
      ] },
    { a: { face: "😡", name: { ar: "فريق أ", en: "Team A" } }, b: { face: "😠", name: { ar: "فريق ب", en: "Team B" } },
      text: { ar: "فريقان اختلفا على نتيجة مباراة والجميع يصرخ. ما تصرّفك الحكيم؟", en: "Two teams dispute a match result and everyone is shouting. Your wise move?" },
      choices: [
        { t: { ar: "أهدّئ الجميع وأقترح إعادة اللعب بروحٍ رياضية", en: "Calm everyone and suggest a replay in good sporting spirit" }, p: 20 },
        { t: { ar: "أعلن فوز الفريق الأقوى", en: "Declare the stronger team the winner" }, p: 0 },
        { t: { ar: "أصرخ أعلى منهم", en: "Shout louder than them" }, p: -10 },
      ] },
    { a: { face: "🙁", name: { ar: "جار", en: "Neighbor" } }, b: { face: "😕", name: { ar: "جار", en: "Neighbor" } },
      text: { ar: "جاران اختلفا حول شجرةٍ على الحدّ بين بيتيهما. كيف توفّق بينهما؟", en: "Two neighbors dispute a tree on the boundary between their homes. How do you reconcile them?" },
      choices: [
        { t: { ar: "أقترح أن يتشاركا ثمرها ويعتنيا بها معاً", en: "Suggest they share its fruit and care for it together" }, p: 20 },
        { t: { ar: "أقترح قطع الشجرة لإنهاء الخلاف", en: "Suggest cutting the tree to end the dispute" }, p: -5 },
        { t: { ar: "أتركهما يتخاصمان", en: "Leave them to quarrel" }, p: -10 },
      ] },
    { a: { face: "😞", name: { ar: "أخ", en: "Brother" } }, b: { face: "😟", name: { ar: "أخ", en: "Brother" } },
      text: { ar: "أخوان تخاصما وهجر كلٌّ منهما الآخر أسبوعاً. ما نصيحتك لهما؟", en: "Two brothers fell out and haven't spoken for a week. Your advice to them?" },
      choices: [
        { t: { ar: "أذكّرهما أن هجر المسلم فوق ثلاثٍ لا يجوز، وأجمعهما", en: "Remind them shunning a Muslim over 3 days isn't allowed, and bring them together" }, p: 20 },
        { t: { ar: "أقول لكلٍّ أن ينتظر اعتذار الآخر", en: "Tell each to wait for the other's apology" }, p: 0 },
        { t: { ar: "أنقل كلام كلٍّ منهما للآخر", en: "Carry each one's words to the other" }, p: -15 },
      ] },
  ];

  const $ = (id) => document.getElementById(id);
  let idx = 0, peace = 50, solved = 0;

  function setPeace() {
    peace = Math.max(0, Math.min(100, peace));
    $("dv-peace").style.width = peace + "%";
    $("dv-peace-v").textContent = Math.round(peace) + "%";
  }

  function render() {
    const L = Lang.current();
    if (idx >= CASES.length) return win();
    const c = CASES[idx];
    $("stat-case").textContent = `${idx + 1}/${CASES.length}`;
    $("dv-parties").innerHTML = `
      <div class="dv-party"><div class="face">${c.a.face}</div><div class="name">${c.a.name[L]}</div></div>
      <div class="dv-vs">⚡</div>
      <div class="dv-party"><div class="face">${c.b.face}</div><div class="name">${c.b.name[L]}</div></div>`;
    $("dv-text").textContent = c.text[L];
    const opts = c.choices.map((ch, i) => ({ ch, i })).sort(() => Math.random() - 0.5);
    $("dv-choices").innerHTML = opts.map(o => `<button class="fd-choice" data-i="${o.i}">${o.ch.t[L]}</button>`).join("");
    $("dv-choices").querySelectorAll(".fd-choice").forEach(b => b.addEventListener("click", () => choose(+b.dataset.i, b)));
  }

  function choose(i, btn) {
    const c = CASES[idx];
    const ch = c.choices[i];
    peace += ch.p;
    if (ch.p >= 20) {
      solved++; $("stat-solved").textContent = solved;
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      AudioBus.chord([523, 659, 784], 0.2); Particles.fire(24);
      $("dv-parties").innerHTML = `<div class="dv-party"><div class="face">🤝</div><div class="name">${Lang.current() === "ar" ? "تصالحا!" : "Reconciled!"}</div></div>`;
    } else {
      btn.style.background = ch.p < 0 ? "var(--rose)" : "var(--bg-soft)";
      AudioBus.tone(ch.p < 0 ? 200 : 320, 0.16);
    }
    $("dv-choices").querySelectorAll(".fd-choice").forEach(x => x.style.pointerEvents = "none");
    setPeace();
    idx++;
    setTimeout(render, 1200);
  }

  function win() {
    setPeace();
    const L = Lang.current();
    let title, meaning;
    if (peace >= 80) {
      title = L === "ar" ? "سفيرُ سلامٍ بارع! 🕊" : "A masterful peace envoy! 🕊";
      meaning = L === "ar" ? "أصلحتَ بين الجميع بالحكمة والعدل. الإصلاح بين الناس من أحبّ الأعمال إلى الله." : "You reconciled everyone with wisdom and justice. Reconciling people is among the most beloved deeds to Allah.";
    } else if (peace >= 50) {
      title = L === "ar" ? "مُصلحٌ واعد" : "A promising peacemaker";
      meaning = L === "ar" ? "أحسنت في كثيرٍ من القضايا. تذكّر: الاستماع للطرفين والكلمة اللينة مفتاح الصلح." : "You did well in many cases. Remember: listening to both sides and gentle words are the key to reconciliation.";
    } else {
      title = L === "ar" ? "الصلح يحتاج حكمة" : "Peace needs wisdom";
      meaning = L === "ar" ? "الإصلاح مهارة تُتعلّم. أنصِت، وأنصِف، واختر الكلمة الطيبة. جرّب ثانيةً!" : "Reconciliation is a learned skill. Listen, be fair, and choose kind words. Try again!";
    }
    $("win-title").textContent = title;
    $("win-sub").textContent = L === "ar" ? `مقياس السلام ${Math.round(peace)}% · صلحٌ ناجح: ${solved}/${CASES.length}` : `Peace meter ${Math.round(peace)}% · successful: ${solved}/${CASES.length}`;
    $("win-meaning").innerHTML = meaning;
    Storage.set("anos_envoy_done", true);
    if (peace >= 80) { AudioBus.success(); Particles.fire(120); } else AudioBus.tone(320, 0.3);
    Modal.open("win-modal");
  }

  function reset() {
    idx = 0; peace = 50; solved = 0;
    $("stat-solved").textContent = 0;
    setPeace();
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (idx < CASES.length) render(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  setPeace(); render();
})();
