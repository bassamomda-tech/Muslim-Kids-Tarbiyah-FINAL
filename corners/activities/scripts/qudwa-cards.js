/* ============================================================
   78 · بطاقات القدوة — ألبوم بطاقات تُفتح بالإجابة الصحيحة
   التقدّم محفوظ في localStorage
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "بطاقات القدوة", en: "Role-Model Cards" },
    title:       { ar: "بطاقات القدوة", en: "Role-Model Collectible Cards" },
    desc:        { ar: "اجمع بطاقات القدوات العظيمة! كل بطاقةٍ مقفلة تفتحها بالإجابة عن سؤالٍ عن صاحبها. اجمع الألبوم كاملاً وتعرّف على صفات كل قدوة.", en: "Collect the great role-model cards! Each locked card opens by answering a question about its figure. Complete the album and learn each role model's qualities." },
    statCollected:{ ar: "بطاقات جمعتها", en: "Cards collected" },
    sideTitle:   { ar: "لماذا القدوات؟", en: "Why role models?" },
    sideQuote:   { ar: "﴿لقد كان لكم في رسول الله أسوة حسنة﴾", en: "\"There has certainly been for you in the Messenger of Allah an excellent example\"" },
    sideSrc:     { ar: "الأحزاب · 21", en: "Al-Ahzab · 21" },
    tip:         { ar: "القدوة الحسنة تعلّمنا بالفعل قبل القول. ابحث عن قدواتٍ صالحة تحبّها، واقرأ سِيرهم لتقتبس من أخلاقهم.", en: "A good role model teaches by action before words. Find righteous role models you love, and read their lives to learn from their character." },
    winEyebrow:  { ar: "الألبوم مكتمل", en: "Album complete" },
    winTitle:    { ar: "جمعتَ كل بطاقات القدوة!", en: "You collected every card!" },
    winSub:      { ar: "اجعل من هؤلاء قدواتٍ في حياتك", en: "Make these your role models in life" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "ألبوم جديد", en: "New album" },
    unlock:      { ar: "أجب لتفتح البطاقة", en: "Answer to unlock the card" },
    correct:     { ar: "أحسنت! فُتحت البطاقة 🎉", en: "Well done! Card unlocked 🎉" },
    wrong:       { ar: "ليست الإجابة — حاول ثانيةً", en: "Not correct — try again" },
    rarity:      { ar: "قدوة", en: "Star" },
  };

  const CARDS = [
    { emoji: "🕊", name: { ar: "أبو بكر الصدّيق", en: "Abu Bakr" }, title: { ar: "الصدّيق", en: "The Truthful" },
      facts: [ { ar: "أول الخلفاء الراشدين وصاحب النبي في الغار", en: "First Caliph and companion in the cave" }, { ar: "صدّق النبي ﷺ في كل شيء بلا تردّد", en: "Believed the Prophet ﷺ without hesitation" } ],
      q: { ar: "بماذا لُقّب أبو بكر لتصديقه الفوري للنبي ﷺ؟", en: "What was Abu Bakr titled for instantly believing the Prophet ﷺ?" },
      opts: [ { ar: "الصدّيق", en: "As-Siddiq", ok: true }, { ar: "الفاروق", en: "Al-Faruq" }, { ar: "ذو النورين", en: "Dhul-Nurayn" } ] },
    { emoji: "⚖️", name: { ar: "عمر بن الخطاب", en: "Umar" }, title: { ar: "الفاروق العادل", en: "The Just Faruq" },
      facts: [ { ar: "خليفةٌ عادل اتّسعت الدولة في عهده", en: "A just Caliph; the state expanded in his era" }, { ar: "كان يطوف ليلاً ليتفقّد أحوال الناس", en: "Would patrol at night to check on people" } ],
      q: { ar: "بماذا اشتهر عمر بن الخطاب في حكمه؟", en: "What was Umar famous for in his rule?" },
      opts: [ { ar: "العدل بين الناس", en: "Justice among people", ok: true }, { ar: "جمع القرآن", en: "Compiling the Quran" }, { ar: "الشعر", en: "Poetry" } ] },
    { emoji: "📖", name: { ar: "عائشة بنت أبي بكر", en: "Aisha" }, title: { ar: "أمّ المؤمنين العالِمة", en: "Scholar, Mother of Believers" },
      facts: [ { ar: "من أعلم الناس بالحديث والفقه", en: "Among the most knowledgeable in hadith and fiqh" }, { ar: "روت آلاف الأحاديث وعلّمت الصحابة", en: "Narrated thousands of hadith and taught Companions" } ],
      q: { ar: "بماذا اشتهرت أمّنا عائشة رضي الله عنها؟", en: "What was Aisha (may Allah be pleased with her) known for?" },
      opts: [ { ar: "العلم والفقه", en: "Knowledge and jurisprudence", ok: true }, { ar: "الفروسية", en: "Horsemanship" }, { ar: "التجارة", en: "Trade" } ] },
    { emoji: "🗣", name: { ar: "بلال بن رباح", en: "Bilal" }, title: { ar: "مؤذّن الإسلام", en: "The Mu'adhin of Islam" },
      facts: [ { ar: "صبر على التعذيب قائلاً: أحدٌ أحد", en: "Endured torture saying: Ahad, Ahad (One, One)" }, { ar: "أول مؤذّن في الإسلام بصوته الجميل", en: "First mu'adhin in Islam with his beautiful voice" } ],
      q: { ar: "ماذا كان يقول بلال تحت التعذيب؟", en: "What did Bilal say under torture?" },
      opts: [ { ar: "أحدٌ أحد", en: "Ahad, Ahad", ok: true }, { ar: "لا أعرف", en: "I don't know" }, { ar: "اتركوني", en: "Leave me" } ] },
    { emoji: "🛡", name: { ar: "خالد بن الوليد", en: "Khalid" }, title: { ar: "سيف الله المسلول", en: "The Drawn Sword of Allah" },
      facts: [ { ar: "قائدٌ عبقري لم يُهزم في معركة", en: "A brilliant commander, never defeated in battle" }, { ar: "أسلم بعد الحديبية وأبلى بلاءً عظيماً", en: "Embraced Islam after Hudaybiyyah and excelled" } ],
      q: { ar: "بأي لقبٍ وصف النبيُّ ﷺ خالداً؟", en: "What title did the Prophet ﷺ give Khalid?" },
      opts: [ { ar: "سيف الله المسلول", en: "The Drawn Sword of Allah", ok: true }, { ar: "أمين الأمة", en: "Trustee of the Ummah" }, { ar: "حبر الأمة", en: "Scholar of the Ummah" } ] },
    { emoji: "🌍", name: { ar: "سلمان الفارسي", en: "Salman" }, title: { ar: "الباحث عن الحق", en: "The Seeker of Truth" },
      facts: [ { ar: "رحل من فارس يبحث عن دين الحق حتى وجد الإسلام", en: "Traveled from Persia seeking the true religion until he found Islam" }, { ar: "أشار بحفر الخندق في غزوة الأحزاب", en: "Suggested digging the trench in the Battle of the Confederates" } ],
      q: { ar: "بماذا أشار سلمان في غزوة الأحزاب؟", en: "What did Salman suggest in the Battle of the Confederates?" },
      opts: [ { ar: "حفر الخندق", en: "Digging the trench", ok: true }, { ar: "الهجوم ليلاً", en: "A night attack" }, { ar: "الانسحاب", en: "Retreating" } ] },
    { emoji: "💰", name: { ar: "عثمان بن عفان", en: "Uthman" }, title: { ar: "ذو النورين الكريم", en: "The Generous, of Two Lights" },
      facts: [ { ar: "جهّز جيش العسرة وحفر بئر رومة للمسلمين", en: "Funded the Army of Hardship and dug the Well of Ruma" }, { ar: "جمع القرآن في مصحفٍ واحد", en: "Compiled the Quran into one standard copy" } ],
      q: { ar: "بأي عملٍ عظيم قام عثمان لحفظ القرآن؟", en: "What great deed did Uthman do to preserve the Quran?" },
      opts: [ { ar: "جمعه في مصحفٍ واحد", en: "Compiling it into one copy", ok: true }, { ar: "حفظه كاملاً", en: "Memorizing it all" }, { ar: "ترجمته", en: "Translating it" } ] },
    { emoji: "🧠", name: { ar: "ابن عباس", en: "Ibn Abbas" }, title: { ar: "حبر الأمة", en: "Scholar of the Ummah" },
      facts: [ { ar: "دعا له النبي ﷺ بالفقه في الدين وتأويل القرآن", en: "The Prophet ﷺ prayed for his understanding of religion and Quran" }, { ar: "ترجمان القرآن ومرجع الصحابة في التفسير", en: "Interpreter of the Quran, reference for the Companions in tafsir" } ],
      q: { ar: "بماذا لُقّب عبد الله بن عباس؟", en: "What was Abdullah ibn Abbas titled?" },
      opts: [ { ar: "حبر الأمة", en: "Scholar of the Ummah", ok: true }, { ar: "سيف الله", en: "Sword of Allah" }, { ar: "الفاروق", en: "Al-Faruq" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let owned = Storage.get("anos_cards_owned", []);
  let activeCard = null, winShown = false;

  function renderAlbum() {
    const L = Lang.current();
    $("cd-album").innerHTML = CARDS.map((c, i) => {
      if (owned.includes(i)) {
        return `<div class="cd-card" data-i="${i}" data-owned="1">
          <span class="cd-rarity">★ ${I18N.rarity[L]}</span>
          <div class="cd-top">${c.emoji}</div>
          <div class="cd-body">
            <div class="cd-name">${c.name[L]}</div>
            <div class="cd-title">${c.title[L]}</div>
          </div>
        </div>`;
      }
      return `<div class="cd-card locked" data-i="${i}"><span class="q">?</span></div>`;
    }).join("");
    $("cd-album").querySelectorAll(".cd-card").forEach(card => {
      card.addEventListener("click", () => {
        const i = +card.dataset.i;
        if (owned.includes(i)) showDetail(i);
        else openQuiz(i);
      });
    });
    $("stat-collected").textContent = `${owned.length}/${CARDS.length}`;
  }

  function openQuiz(i) {
    activeCard = i;
    const c = CARDS[i], L = Lang.current();
    const opts = c.opts.map((o, k) => ({ o, k })).sort(() => Math.random() - 0.5);
    $("quiz-body").innerHTML = `
      <div class="modal-eyebrow">🔒 ${I18N.unlock[L]}</div>
      <h2 class="modal-title" style="font-size:20px;">${c.q[L]}</h2>
      <div class="fd-choices" style="margin-top:16px;">
        ${opts.map(x => `<button class="fd-choice" data-ok="${x.o.ok ? 1 : 0}">${x.o[L]}</button>`).join("")}
      </div>
      <div class="feedback-line" id="quiz-fb" style="text-align:center; margin-top:12px; min-height:20px;"></div>`;
    $("quiz-body").querySelectorAll(".fd-choice").forEach(b => b.addEventListener("click", () => quizAnswer(b)));
    Modal.open("quiz-modal");
  }

  function quizAnswer(btn) {
    const L = Lang.current();
    if (btn.dataset.ok === "1") {
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      $("quiz-fb").textContent = I18N.correct[L];
      if (!owned.includes(activeCard)) { owned.push(activeCard); Storage.set("anos_cards_owned", owned); }
      AudioBus.success(); Particles.fire(40);
      setTimeout(() => {
        Modal.close("quiz-modal");
        renderAlbum();
        showDetail(activeCard);
        if (owned.length >= CARDS.length && !winShown) { winShown = true; setTimeout(() => { Modal.close("detail-modal"); win(); }, 1400); }
      }, 900);
    } else {
      btn.style.background = "var(--rose)";
      btn.disabled = true;
      AudioBus.fail();
      $("quiz-fb").textContent = I18N.wrong[L];
    }
  }

  function showDetail(i) {
    const c = CARDS[i], L = Lang.current();
    $("detail-body").innerHTML = `
      <div class="big">${c.emoji}</div>
      <div class="modal-eyebrow">★ ${c.title[L]}</div>
      <h2 class="modal-title">${c.name[L]}</h2>
      <div class="facts">
        ${c.facts.map(f => `<div class="fact">${f[L]}</div>`).join("")}
      </div>`;
    Modal.open("detail-modal");
  }

  function win() {
    Storage.set("anos_qudwacards_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    owned = []; winShown = false;
    Storage.set("anos_cards_owned", []);
    Modal.close("win-modal");
    renderAlbum();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", renderAlbum);
  Modal.bindClose("quiz-modal");
  Modal.bindClose("detail-modal");
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  renderAlbum();
})();
