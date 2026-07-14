/* ============================================================
   54 · حصّالة الزكاة — احسب 2.5% وارمِ العملات في الحصّالة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "حصّالة الزكاة", en: "Zakat Jar" },
    title:       { ar: "حصّالة الزكاة", en: "The Zakat Jar" },
    desc:        { ar: "الزكاة رُبع العُشر: من كل 100 دينار نخرج 2.5 دينار. احسب زكاة مالك، ثم انقر على العملات لرميها في الحصّالة حتى تصل للمبلغ الصحيح تماماً!", en: "Zakat is 2.5%: from every 100 dinars we give 2.5. Work out the zakat on your wealth, then tap coins to toss them into the jar until you reach the exact amount!" },
    walletLabel: { ar: "محفظتك — انقر عملة لرميها", en: "Your wallet — tap a coin to toss it" },
    jarLabel:    { ar: "حصّالة الزكاة", en: "Zakat jar" },
    sumWealth:   { ar: "مالُك", en: "Your wealth" },
    sumDue:      { ar: "الزكاة الواجبة", en: "Zakat due" },
    sumJar:      { ar: "في الحصّالة", en: "In the jar" },
    checkBtn:    { ar: "أخرج الزكاة", en: "Give the zakat" },
    statRound:   { ar: "الجولة", en: "Round" },
    statTries:   { ar: "المحاولات", en: "Tries" },
    sideTitle:   { ar: "كيف نحسب الزكاة؟", en: "How do we calculate zakat?" },
    sideQuote:   { ar: "﴿وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ﴾", en: "\"Establish prayer and give zakat\"" },
    sideSrc:     { ar: "البقرة · 110", en: "Al-Baqarah · 110" },
    mathTip:     { ar: "حيلة الحساب: اقسم المال على 100 ثم اضرب في 2.5 — أو الأسهل: اقسم على 40!", en: "Math trick: divide by 100 then multiply by 2.5 — or even easier: divide by 40!" },
    tip:         { ar: "الزكاة تُطهّر المال وتُسعد الفقراء. تجب إذا بلغ المال النِّصاب ومرّ عليه عامٌ كامل.", en: "Zakat purifies wealth and brings joy to the poor. It is due when wealth reaches the nisab and a full year passes." },
    winEyebrow:  { ar: "محاسب الزكاة الصغير", en: "Little Zakat Accountant" },
    winTitle:    { ar: "أخرجتَ الزكاة بدقة!", en: "You gave the zakat precisely!" },
    winMeaning:  { ar: "<strong>تذكّر</strong> المال الذي نُخرج زكاته لا ينقص، بل يُبارك الله فيه ويزيده.", en: "<strong>Remember</strong> Wealth doesn't shrink when we give zakat — Allah blesses it and makes it grow." },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "جولة جديدة", en: "New round" },
  };

  /* الجولات: الثروة، الزكاة (2.5%)، فئات العملات في المحفظة */
  const ROUNDS = [
    { wealth: 400,  due: 10, coins: [5, 5, 2, 2, 2, 1, 1, 10] },
    { wealth: 1000, due: 25, coins: [10, 10, 5, 5, 2, 2, 1, 20, 25] },
    { wealth: 2000, due: 50, coins: [25, 20, 10, 10, 5, 5, 2, 50, 20] },
  ];

  const $ = (id) => document.getElementById(id);
  const wallet = $("zk-wallet"), jar = $("zk-jar");

  let round = 0, tries = 0, inJar = [];

  function shuffle(a) { return a.slice().sort(() => Math.random() - 0.5); }

  function renderRound() {
    const r = ROUNDS[round], L = Lang.current();
    inJar = [];
    $("zk-mission").innerHTML = L === "ar"
      ? `💰 مرّ عامٌ كامل ومعك <strong>${r.wealth}</strong> دينار — كم زكاتها؟ (2.5%)`
      : `💰 A full year has passed and you have <strong>${r.wealth}</strong> dinars — how much zakat? (2.5%)`;
    $("zk-wealth").textContent = r.wealth;
    $("zk-due").textContent = "؟";
    $("stat-round").textContent = `${round + 1}/${ROUNDS.length}`;
    $("zk-feedback").textContent = "";
    wallet.innerHTML = "";
    jar.querySelectorAll(".zk-coin").forEach(c => c.remove());
    shuffle(r.coins).forEach((v, i) => {
      const c = document.createElement("button");
      c.className = "zk-coin"; c.textContent = v; c.dataset.v = v;
      c.style.transform = `rotate(${Math.random() * 14 - 7}deg)`;
      c.addEventListener("click", () => toss(c));
      wallet.appendChild(c);
    });
    updateSum();
  }

  function toss(coin) {
    const v = +coin.dataset.v;
    AudioBus.tone(700 + v * 8, 0.1, "triangle", 0.07);
    /* قفزة بسيطة نحو الحصّالة */
    coin.style.transition = "transform 0.35s cubic-bezier(0.3,-0.3,0.4,1.4), opacity 0.35s";
    coin.style.transform = "translateY(80px) rotate(200deg) scale(0.8)";
    coin.style.opacity = "0.3";
    setTimeout(() => {
      coin.remove();
      const jc = document.createElement("button");
      jc.className = "zk-coin"; jc.textContent = v; jc.dataset.v = v;
      jc.title = Lang.current() === "ar" ? "انقر لاستعادتها" : "Tap to take back";
      jc.addEventListener("click", () => takeBack(jc));
      jar.appendChild(jc);
      inJar.push(v);
      updateSum();
    }, 320);
  }

  function takeBack(coin) {
    const v = +coin.dataset.v;
    AudioBus.tick(420);
    coin.remove();
    inJar.splice(inJar.indexOf(v), 1);
    const c = document.createElement("button");
    c.className = "zk-coin"; c.textContent = v; c.dataset.v = v;
    c.addEventListener("click", () => toss(c));
    wallet.appendChild(c);
    updateSum();
  }

  function sum() { return inJar.reduce((a, b) => a + b, 0); }
  function updateSum() { $("zk-injar").textContent = sum(); }

  function check() {
    const r = ROUNDS[round], L = Lang.current();
    tries++; $("stat-tries").textContent = tries;
    const s = sum();
    if (s === r.due) {
      $("zk-due").textContent = r.due;
      AudioBus.success();
      Particles.fire(50, { originY: "55%" });
      $("zk-feedback").textContent = L === "ar" ? `ممتاز! زكاة ${r.wealth} هي ${r.due} بالضبط ✓` : `Excellent! Zakat on ${r.wealth} is exactly ${r.due} ✓`;
      setTimeout(() => {
        round++;
        if (round >= ROUNDS.length) return win();
        renderRound();
      }, 1500);
    } else if (s < r.due) {
      AudioBus.fail();
      $("zk-feedback").textContent = L === "ar" ? "المبلغ أقل من الزكاة الواجبة — أضف المزيد" : "That's less than the zakat due — add more";
    } else {
      AudioBus.fail();
      $("zk-feedback").textContent = L === "ar" ? "المبلغ أكثر من الواجب — الزكاة عدلٌ ودقة! أرجِع بعضها" : "That's more than due — zakat is precise! Take some back";
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `ثلاث جولات في ${tries} محاولات`
      : `Three rounds in ${tries} tries`;
    Storage.set("anos_zakat_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0; tries = 0;
    $("stat-tries").textContent = 0;
    Modal.close("win-modal");
    renderRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", renderRound);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("zk-check").addEventListener("click", check);
  AudioBus.bindButton($("mute-btn"));
  renderRound();
})();
