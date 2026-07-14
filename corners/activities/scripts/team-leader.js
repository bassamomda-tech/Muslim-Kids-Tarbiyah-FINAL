/* ============================================================
   82 · قائد الفريق — مواقف قيادية تبني العدل والشورى والرحمة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "قائد الفريق", en: "Team Leader" },
    title:       { ar: "قائد الفريق", en: "The Team Leader" },
    desc:        { ar: "القيادة أمانة! أنت قائد فريقٍ من الأصدقاء، وتواجه مواقف تحتاج حكمة. قراراتك تبني ثلاث صفات: العدل، والشورى، والرحمة. كن قائداً كالنبي ﷺ.", en: "Leadership is a trust! You lead a team of friends and face situations needing wisdom. Your decisions build three traits: justice, consultation, and mercy. Lead like the Prophet ﷺ." },
    traitJustice:{ ar: "⚖️ العدل", en: "⚖️ Justice" },
    traitShura:  { ar: "🗣 الشورى", en: "🗣 Consultation" },
    traitMercy:  { ar: "💚 الرحمة", en: "💚 Mercy" },
    statScene:   { ar: "الموقف", en: "Situation" },
    sideTitle:   { ar: "صفات القائد المسلم", en: "Traits of a Muslim leader" },
    sideQuote:   { ar: "«كلّكم راعٍ وكلّكم مسؤول عن رعيّته»", en: "\"Each of you is a shepherd, and each is responsible for his flock\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "القائد الحقيقي يخدم فريقه ولا يتكبّر، ويستشيرهم، ويعدل بينهم، ويرحم ضعيفهم. «سيّد القوم خادمهم».", en: "A true leader serves his team without arrogance, consults them, is just among them, and merciful to the weak. \"The leader of a people is their servant.\"" },
    winEyebrow:  { ar: "قائد المستقبل", en: "Future Leader" },
    winTitle:    { ar: "أكملتَ رحلة القيادة!", en: "You completed the leadership journey!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
  };

  /* المواقف: كل خيار يزيد صفة أو أكثر */
  const SCENES = [
    { icon: "⚽", t: { ar: "توزيع الأدوار", en: "Assigning roles" },
      p: { ar: "فريقك سيلعب مباراة، والكل يريد أن يكون مهاجماً. كيف توزّع المراكز؟", en: "Your team has a match and everyone wants to be striker. How do you assign positions?" },
      choices: [
        { t: { ar: "أجمع الفريق ونتشاور، ثم نوزّع حسب مهارة كلٍّ بعدل", en: "Gather the team, consult, then assign fairly by each one's skill" }, j: 15, s: 15, m: 5 },
        { t: { ar: "أختار المراكز بنفسي لأني القائد", en: "Pick positions myself since I'm the leader" }, j: 4, s: 0, m: 2 },
        { t: { ar: "أعطي أصدقائي المقرّبين أفضل المراكز", en: "Give my close friends the best positions" }, j: 0, s: 2, m: 3 },
      ] },
    { icon: "😢", t: { ar: "اللاعب الضعيف", en: "The weaker player" },
      p: { ar: "لاعبٌ جديد يخطئ كثيراً ويشعر بالإحراج أمام الفريق. ماذا تفعل كقائد؟", en: "A new player makes many mistakes and feels embarrassed. What do you do as leader?" },
      choices: [
        { t: { ar: "أشجّعه وأدرّبه بلُطف وأذكّر الفريق أن الجميع بدأ مبتدئاً", en: "Encourage and gently coach him, reminding the team everyone started as a beginner" }, j: 5, s: 3, m: 15 },
        { t: { ar: "أستبعده حتى لا يخسرنا المباراة", en: "Bench him so he doesn't lose us the match" }, j: 2, s: 0, m: 0 },
        { t: { ar: "أتجاهله وأركّز على النجوم", en: "Ignore him and focus on the stars" }, j: 3, s: 0, m: 2 },
      ] },
    { icon: "⚖️", t: { ar: "الخلاف على الخطأ", en: "A disputed foul" },
      p: { ar: "لاعبان في فريقك اختلفا: أحدهما يقول إن الآخر أخطأ. كيف تحكم؟", en: "Two of your players dispute: one says the other committed a foul. How do you judge?" },
      choices: [
        { t: { ar: "أستمع للطرفين بإنصاف قبل أن أحكم", en: "Listen to both sides fairly before judging" }, j: 15, s: 10, m: 8 },
        { t: { ar: "أنحاز لصديقي المفضّل", en: "Side with my favorite friend" }, j: 0, s: 0, m: 0 },
        { t: { ar: "أصرخ عليهما ليسكتا", en: "Yell at both to be quiet" }, j: 2, s: 0, m: 0 },
      ] },
    { icon: "🏆", t: { ar: "لحظة الفوز", en: "The winning moment" },
      p: { ar: "فزتم بالمباراة! الجميع يهنّئك أنت وحدك كقائد. ماذا تقول؟", en: "You won the match! Everyone congratulates you alone as leader. What do you say?" },
      choices: [
        { t: { ar: "«هذا فوز الفريق كله، وكل لاعبٍ بطل»", en: "\"This is the whole team's win, every player is a hero\"" }, j: 10, s: 8, m: 12 },
        { t: { ar: "«نعم، أنا قدتكم للفوز بمهارتي»", en: "\"Yes, I led you to victory with my skill\"" }, j: 0, s: 0, m: 0 },
        { t: { ar: "أصمت ولا أشكر أحداً", en: "Stay silent and thank no one" }, j: 3, s: 2, m: 2 },
      ] },
    { icon: "💡", t: { ar: "فكرة من لاعب", en: "A player's idea" },
      p: { ar: "لاعبٌ صغير اقترح خطّةً جديدة تبدو غريبة لكنها قد تنجح. رأيك؟", en: "A young player suggests a new plan that seems odd but might work. Your view?" },
      choices: [
        { t: { ar: "أشكره وأطرح فكرته على الفريق لنجرّبها معاً", en: "Thank him and bring his idea to the team to try together" }, j: 6, s: 15, m: 8 },
        { t: { ar: "أرفضها لأنه صغير ولا يفهم", en: "Reject it because he's young and doesn't understand" }, j: 0, s: 0, m: 0 },
        { t: { ar: "آخذ الفكرة وأنسبها لنفسي", en: "Take the idea and claim it as mine" }, j: 0, s: 3, m: 0 },
      ] },
    { icon: "🤝", t: { ar: "الفريق الخاسر", en: "The losing team" },
      p: { ar: "بعد فوزكم، الفريق الآخر حزينٌ ومحبَط. ماذا يفعل القائد الكريم؟", en: "After your win, the other team is sad and discouraged. What does a noble leader do?" },
      choices: [
        { t: { ar: "أصافحهم وأشكرهم على مباراةٍ جميلة وأواسيهم", en: "Shake their hands, thank them for a good game, and comfort them" }, j: 8, s: 5, m: 15 },
        { t: { ar: "أفتخر بالفوز أمامهم", en: "Boast about the win in front of them" }, j: 0, s: 0, m: 0 },
        { t: { ar: "أتجاهلهم تماماً", en: "Ignore them completely" }, j: 2, s: 0, m: 0 },
      ] },
  ];

  const $ = (id) => document.getElementById(id);
  let idx = 0, justice = 0, shura = 0, mercy = 0;
  const MAXPER = 6 * 15;

  function setBars() {
    $("ld-justice").style.width = (justice / MAXPER) * 100 + "%"; $("ld-justice-v").textContent = justice;
    $("ld-shura").style.width = (shura / MAXPER) * 100 + "%"; $("ld-shura-v").textContent = shura;
    $("ld-mercy").style.width = (mercy / MAXPER) * 100 + "%"; $("ld-mercy-v").textContent = mercy;
  }

  function render() {
    const L = Lang.current();
    if (idx >= SCENES.length) return win();
    const s = SCENES[idx];
    $("stat-scene").textContent = `${idx + 1}/${SCENES.length}`;
    const opts = s.choices.map((c, i) => ({ c, i })).sort(() => Math.random() - 0.5);
    $("ld-area").innerHTML = `
      <div class="ld-scenario">
        <div class="icon">${s.icon}</div>
        <h3>${s.t[L]}</h3>
        <p>${s.p[L]}</p>
        <div class="ld-choices">
          ${opts.map(o => `<button class="ld-choice" data-i="${o.i}">${o.c.t[L]}</button>`).join("")}
        </div>
      </div>`;
    $("ld-area").querySelectorAll(".ld-choice").forEach(b => b.addEventListener("click", () => choose(+b.dataset.i, b)));
  }

  function choose(i, btn) {
    const c = SCENES[idx].choices[i];
    justice += c.j; shura += c.s; mercy += c.m;
    const total = c.j + c.s + c.m;
    if (total >= 25) { AudioBus.chord([523, 659, 784], 0.2); Particles.fire(24, { originY: "35%" }); }
    else if (total >= 10) AudioBus.chord([440, 554], 0.16);
    else AudioBus.tick(280);
    btn.style.background = total >= 25 ? "var(--mint)" : "var(--bg-soft)";
    btn.style.borderColor = total >= 25 ? "var(--mint-ink)" : "var(--line)";
    $("ld-area").querySelectorAll(".ld-choice").forEach(x => x.style.pointerEvents = "none");
    setBars();
    idx++;
    setTimeout(render, 900);
  }

  function win() {
    setBars();
    const L = Lang.current();
    const total = justice + shura + mercy;
    const pct = total / (MAXPER * 3);
    let title, meaning;
    if (pct >= 0.8) {
      title = L === "ar" ? "قائدٌ عظيم! 👑" : "A great leader! 👑";
      meaning = L === "ar" ? "جمعتَ العدل والشورى والرحمة — هذه صفات القادة الصالحين. فريقك محظوظ بك!" : "You combined justice, consultation, and mercy — the marks of righteous leaders. Your team is lucky to have you!";
    } else if (pct >= 0.5) {
      title = L === "ar" ? "قائدٌ واعد" : "A promising leader";
      meaning = L === "ar" ? "أحسنت في كثيرٍ من قراراتك. تدرّب أكثر على الشورى والرحمة لتصبح قائداً أعظم." : "You did well in many decisions. Practice consultation and mercy more to become an even greater leader.";
    } else {
      title = L === "ar" ? "القيادة تحتاج تدريباً" : "Leadership needs practice";
      meaning = L === "ar" ? "القيادة مهارة تُتعلّم. تذكّر: العدل والشورى والرحمة هي مفاتيح القائد الناجح. جرّب ثانيةً!" : "Leadership is a learned skill. Remember: justice, consultation, and mercy are the keys. Try again!";
    }
    $("win-title").textContent = title;
    $("win-sub").textContent = L === "ar" ? `العدل ${justice} · الشورى ${shura} · الرحمة ${mercy}` : `Justice ${justice} · Shura ${shura} · Mercy ${mercy}`;
    $("win-meaning").innerHTML = meaning;
    Storage.set("anos_leader_done", true);
    if (pct >= 0.8) { AudioBus.success(); Particles.fire(120); } else AudioBus.tone(320, 0.3);
    Modal.open("win-modal");
  }

  function reset() {
    idx = 0; justice = shura = mercy = 0;
    setBars();
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (idx < SCENES.length) render(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  setBars(); render();
})();
