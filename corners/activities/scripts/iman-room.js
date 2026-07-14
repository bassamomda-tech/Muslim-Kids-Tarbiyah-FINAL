/* ============================================================
   60 · غرفة أركان الإيمان — غرفة هروب بستة ألغاز
   كل لغز عن ركن إيمان يمنح رقماً من رمز الباب
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "غرفة أركان الإيمان", en: "Room of Iman" },
    title:       { ar: "غرفة أركان الإيمان", en: "The Room of the Pillars of Iman" },
    desc:        { ar: "الباب مقفل برمزٍ من ستة أرقام! في الغرفة ستة أشياء متوهّجة، كل واحد يخفي لغزاً عن ركنٍ من أركان الإيمان الستة. حُلّها كلها لتفتح الباب.", en: "The door is locked with a six-digit code! Six objects glow in the room, each hiding a puzzle about one of the six pillars of Iman. Solve them all to open the door." },
    openBtn:     { ar: "🔓 افتح الباب", en: "🔓 Open the door" },
    statSolved:  { ar: "ألغاز محلولة", en: "Puzzles solved" },
    sideTitle:   { ar: "أركان الإيمان الستة", en: "The six pillars of Iman" },
    tip:         { ar: "سُئل النبي ﷺ: ما الإيمان؟ قال: «أن تؤمن بالله وملائكته وكتبه ورسله واليوم الآخر، وتؤمن بالقدر خيره وشره».", en: "The Prophet ﷺ was asked: What is Iman? He said: \"To believe in Allah, His angels, His books, His messengers, the Last Day, and to believe in the divine decree — its good and its bad.\"" },
    winEyebrow:  { ar: "انفتح الباب!", en: "The door opened!" },
    winTitle:    { ar: "قلبٌ عرف أركان الإيمان", en: "A heart that knows the pillars of Iman" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "غرفة جديدة", en: "New room" },
    solvedMsg:   { ar: "رقمٌ جديد للرمز! ✦", en: "A new code digit! ✦" },
    wrongMsg:    { ar: "ليست الإجابة — فكّر مرة أخرى", en: "Not the answer — think again" },
    allSolved:   { ar: "اكتمل الرمز! اضغط «افتح الباب»", en: "The code is complete! Press \"Open the door\"" },
  };

  /* الألغاز الستة: موضع النقطة (٪) + سؤال + خيارات + رقم يكافئه */
  const PUZZLES = [
    { x: 13, y: 66, obj: { ar: "السجادة", en: "the rug" }, pillar: { ar: "الإيمان بالله", en: "Belief in Allah" }, digit: 1,
      q: { ar: "على السجادة نقشٌ مكتوب: «واحدٌ لا شريك له، خلق كل شيء». مَن هو؟", en: "Woven into the rug: \"One without partner, Creator of everything.\" Who is He?" },
      opts: [ { ar: "الله سبحانه وتعالى", en: "Allah, glorified and exalted", ok: true }, { ar: "مَلَك من الملائكة", en: "One of the angels" }, { ar: "نبيّ من الأنبياء", en: "One of the prophets" } ] },
    { x: 20, y: 30, obj: { ar: "النافذة", en: "the window" }, pillar: { ar: "الإيمان بالملائكة", en: "Belief in the angels" }, digit: 4,
      q: { ar: "خلف النافذة سماءٌ واسعة. مخلوقاتٌ من نور لا تعصي الله أبداً — على كتفيك اثنان منها يكتبان. من هما؟", en: "Beyond the window, a vast sky. Beings of light who never disobey Allah — two sit at your shoulders, writing. Who are they?" },
      opts: [ { ar: "رقيب وعتيد", en: "Raqib and 'Atid", ok: true }, { ar: "هاروت وماروت", en: "Harut and Marut" }, { ar: "الجن", en: "The jinn" } ] },
    { x: 48, y: 12, obj: { ar: "رف الكتب", en: "the bookshelf" }, pillar: { ar: "الإيمان بالكتب", en: "Belief in the books" }, digit: 3,
      q: { ar: "على الرف أربعة كتب سماوية. أيّها آخرها نزولاً والمحفوظ من التحريف؟", en: "On the shelf are four revealed books. Which came last and is protected from change?" },
      opts: [ { ar: "القرآن الكريم", en: "The Noble Quran", ok: true }, { ar: "التوراة", en: "The Torah" }, { ar: "الإنجيل", en: "The Gospel" } ] },
    { x: 44, y: 48, obj: { ar: "الصندوق", en: "the chest" }, pillar: { ar: "الإيمان بالرسل", en: "Belief in the messengers" }, digit: 9,
      q: { ar: "في الصندوق خاتمٌ نُقش عليه: «خاتم النبيين». لمن هذا الخاتم؟", en: "Inside the chest is a ring engraved: \"Seal of the Prophets.\" Whose ring is it?" },
      opts: [ { ar: "محمد ﷺ", en: "Muhammad ﷺ", ok: true }, { ar: "موسى عليه السلام", en: "Musa (peace be upon him)" }, { ar: "آدم عليه السلام", en: "Adam (peace be upon him)" } ] },
    { x: 65, y: 43, obj: { ar: "المصباح", en: "the lamp" }, pillar: { ar: "الإيمان باليوم الآخر", en: "Belief in the Last Day" }, digit: 7,
      q: { ar: "المصباح يُضيء ثم ينطفئ... كهذه الدنيا! ماذا يأتي بعدها حين يُنفخ في الصور؟", en: "The lamp glows, then goes out... like this world! What comes after, when the Trumpet is blown?" },
      opts: [ { ar: "يوم القيامة والحساب", en: "The Day of Resurrection and Judgment", ok: true }, { ar: "لا شيء أبداً", en: "Nothing at all" }, { ar: "دنيا أخرى مثلها", en: "Another world just like it" } ] },
    { x: 83, y: 46, obj: { ar: "الباب", en: "the door" }, pillar: { ar: "الإيمان بالقدر", en: "Belief in the decree" }, digit: 2,
      q: { ar: "على الباب حكمة: «ما أصابك لم يكن ليخطئك». إذا لم تفز في مسابقة رغم اجتهادك، ماذا يقول المؤمن؟", en: "On the door, a wisdom: \"What reached you was never going to miss you.\" If you lose a contest despite trying hard, what does a believer say?" },
      opts: [ { ar: "قدّر الله وما شاء فعل — وسأحاول من جديد", en: "Allah decreed, and He does what He wills — and I'll try again", ok: true }, { ar: "الحظ ظلمني دائماً!", en: "Luck is always against me!" }, { ar: "لن أشارك مرة أخرى أبداً", en: "I'll never take part again" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  const room = $("ir-room");
  let solved = [], active = null;

  function buildHotspots() {
    room.querySelectorAll(".ir-hotspot").forEach(h => h.remove());
    PUZZLES.forEach((p, i) => {
      const h = document.createElement("button");
      h.className = "ir-hotspot" + (solved.includes(i) ? " solved" : "");
      h.style.left = p.x + "%"; h.style.top = p.y + "%";
      h.textContent = solved.includes(i) ? "✓" : "?";
      h.addEventListener("click", () => openPuzzle(i));
      room.appendChild(h);
    });
  }

  function renderCode() {
    $("ir-code").innerHTML = PUZZLES.map((p, i) =>
      `<div class="ir-code-cell ${solved.includes(i) ? "got" : ""}">${solved.includes(i) ? p.digit : "•"}</div>`).join("");
    $("stat-solved").textContent = `${solved.length}/6`;
    $("ir-open").disabled = solved.length < 6;
  }

  function renderGuide() {
    const L = Lang.current();
    $("ir-guide").innerHTML = PUZZLES.map((p, i) => `
      <div class="dhikr-item ${solved.includes(i) ? "is-highlighted" : ""}">
        <span class="dhikr-swatch" style="background:var(--teal)"></span>
        <span class="dhikr-text" style="font-size:13px;">${p.pillar[L]}</span>
        <span class="dhikr-count">${solved.includes(i) ? p.digit : "?"}</span>
      </div>`).join("");
  }

  function openPuzzle(i) {
    if (solved.includes(i)) return;
    active = i;
    const p = PUZZLES[i], L = Lang.current();
    AudioBus.pop();
    const opts = p.opts.slice().sort(() => Math.random() - 0.5);
    $("ir-quiz").innerHTML = `
      <div class="fd-event" style="margin-top:var(--s-4);">
        <h3>🔍 ${L === "ar" ? "لغز" : "Puzzle of"} ${p.obj[L]} — ${p.pillar[L]}</h3>
        <p>${p.q[L]}</p>
        <div class="ir-quiz-opts">
          ${opts.map((o, k) => `<button class="fd-choice" data-ok="${o.ok ? 1 : 0}">${o[L]}</button>`).join("")}
        </div>
      </div>`;
    $("ir-quiz").querySelectorAll(".fd-choice").forEach(b => {
      b.addEventListener("click", () => {
        const L2 = Lang.current();
        if (b.dataset.ok === "1") {
          solved.push(active);
          AudioBus.chord([523, 659, 784], 0.2);
          Particles.fire(24, { originY: "40%" });
          $("ir-quiz").innerHTML = "";
          $("ir-feedback").textContent = solved.length >= 6 ? I18N.allSolved[L2] : I18N.solvedMsg[L2];
          buildHotspots(); renderCode(); renderGuide();
        } else {
          AudioBus.fail();
          b.style.background = "var(--rose)";
          $("ir-feedback").textContent = I18N.wrongMsg[L2];
        }
      });
    });
  }

  function openDoor() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `الرمز ${PUZZLES.map(p => p.digit).join("")} — ستة أركان يقوم عليها إيمانك`
      : `Code ${PUZZLES.map(p => p.digit).join("")} — six pillars your faith stands on`;
    Storage.set("anos_imanroom_done", true);
    AudioBus.success(); Particles.fire(130);
    Modal.open("win-modal");
  }

  function reset() {
    solved = []; active = null;
    $("ir-quiz").innerHTML = "";
    $("ir-feedback").textContent = "";
    Modal.close("win-modal");
    buildHotspots(); renderCode(); renderGuide();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { $("ir-quiz").innerHTML = ""; buildHotspots(); renderCode(); renderGuide(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("ir-open").addEventListener("click", openDoor);
  AudioBus.bindButton($("mute-btn"));
  reset();
})();
