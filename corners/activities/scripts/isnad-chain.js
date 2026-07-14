/* ============================================================
   62 · سلسلة الإسناد — ركّب سلسلة الرواة: صحابي ← تابعي ← إمام
   (سلاسل مبسطة للأطفال)
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "سلسلة الإسناد", en: "Chain of Narration" },
    title:       { ar: "سلسلة الإسناد", en: "The Golden Chain" },
    desc:        { ar: "كيف وصلنا حديث النبي ﷺ؟ عبر سلسلةٍ ذهبية من الرواة الثقات! ركّب السلسلة: مَن الصحابي الذي سمع، ومَن التابعي الذي نقل، ومَن الإمام الذي دوّن.", en: "How did the Prophet's ﷺ words reach us? Through a golden chain of trustworthy narrators! Build the chain: which Companion heard it, which Successor passed it on, and which Imam wrote it down." },
    poolLabel:   { ar: "بطاقات الرواة — انقر بطاقة لوضعها في السلسلة", en: "Narrator cards — tap a card to place it in the chain" },
    checkBtn:    { ar: "تحقّق من السلسلة", en: "Check the chain" },
    statRound:   { ar: "الحديث", en: "Hadith" },
    statTries:   { ar: "المحاولات", en: "Tries" },
    sideTitle:   { ar: "ما هو الإسناد؟", en: "What is an isnad?" },
    sideQuote:   { ar: "«الإسناد من الدين، ولولا الإسناد لقال مَن شاء ما شاء»", en: "\"The isnad is part of the religion — without it, anyone would say whatever they wished\"" },
    sideSrc:     { ar: "عبد الله بن المبارك", en: "Abdullah ibn al-Mubarak" },
    tip:         { ar: "الصحابي: مَن لقي النبي ﷺ وآمن به. التابعي: مَن لقي الصحابة. الإمام المحدّث: مَن جمع الأحاديث ودوّنها في الكتب — كالبخاري ومسلم.", en: "Companion: one who met the Prophet ﷺ and believed. Successor: one who met the Companions. Hadith Imam: one who collected and recorded hadiths in books — like Bukhari and Muslim." },
    winEyebrow:  { ar: "محدّث صغير", en: "Little Hadith Scholar" },
    winTitle:    { ar: "أتقنتَ سلاسل الإسناد!", en: "You mastered the chains!" },
    winMeaning:  { ar: "<strong>هل تعلم؟</strong> علماء الحديث حفظوا أسماء آلاف الرواة وتواريخهم وأخلاقهم — أعظم نظام توثيق عرفه التاريخ!", en: "<strong>Did you know?</strong> Hadith scholars memorized thousands of narrators' names, dates, and characters — the greatest verification system in history!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    prophet:     { ar: "النبي محمد ﷺ", en: "The Prophet Muhammad ﷺ" },
    roleSahabi:  { ar: "الصحابي الذي سمع", en: "The Companion who heard" },
    roleTabii:   { ar: "التابعي الذي نقل", en: "The Successor who passed it on" },
    roleImam:    { ar: "الإمام الذي دوّن", en: "The Imam who recorded" },
    goodMsg:     { ar: "سلسلة ذهبية متصلة! ✨", en: "A connected golden chain! ✨" },
    badMsg:      { ar: "في السلسلة خلل — راجع أدوار الرواة", en: "The chain has a flaw — check the narrators' roles" },
    emptyMsg:    { ar: "أكمل السلسلة أولاً", en: "Complete the chain first" },
  };

  /* السلاسل المبسطة */
  const ROUNDS = [
    {
      hadith: { ar: "«إنما الأعمالُ بالنيات»", en: "\"Actions are but by intentions\"" },
      chain: [
        { name: { ar: "عمر بن الخطاب", en: "Umar ibn al-Khattab" }, hint: { ar: "ثاني الخلفاء الراشدين", en: "The second rightly-guided Caliph" } },
        { name: { ar: "علقمة بن وقّاص", en: "Alqamah ibn Waqqas" }, hint: { ar: "من علماء أهل المدينة", en: "A scholar of Madinah" } },
        { name: { ar: "الإمام البخاري", en: "Imam al-Bukhari" }, hint: { ar: "صاحب أصح كتاب بعد القرآن", en: "Author of the most authentic book after the Quran" } },
      ],
      distractor: { name: { ar: "أبو هريرة", en: "Abu Hurayrah" }, hint: { ar: "صحابي — لكنه ليس راوي هذا الحديث", en: "A Companion — but not this hadith's narrator" } },
    },
    {
      hadith: { ar: "«مَن لا يَرحم الناسَ لا يَرحمه الله»", en: "\"Whoever does not show mercy to people, Allah will not show mercy to him\"" },
      chain: [
        { name: { ar: "جرير بن عبد الله", en: "Jarir ibn Abdullah" }, hint: { ar: "صحابي جليل من اليمن", en: "A noble Companion from Yemen" } },
        { name: { ar: "قيس بن أبي حازم", en: "Qays ibn Abi Hazim" }, hint: { ar: "تابعي أدرك كبار الصحابة", en: "A Successor who met senior Companions" } },
        { name: { ar: "الإمام مسلم", en: "Imam Muslim" }, hint: { ar: "صاحب الصحيح الثاني", en: "Author of the second Sahih" } },
      ],
      distractor: { name: { ar: "الإمام الشافعي", en: "Imam al-Shafi'i" }, hint: { ar: "إمام فقيه — وليس مدوّن هذا الحديث", en: "A great jurist — but not this hadith's recorder" } },
    },
    {
      hadith: { ar: "«الكلمةُ الطيبةُ صدقة»", en: "\"A kind word is charity\"" },
      chain: [
        { name: { ar: "أبو هريرة", en: "Abu Hurayrah" }, hint: { ar: "أكثر الصحابة روايةً للحديث", en: "The Companion who narrated the most hadith" } },
        { name: { ar: "سعيد بن المسيّب", en: "Sa'id ibn al-Musayyib" }, hint: { ar: "سيد التابعين في المدينة", en: "The master of the Successors in Madinah" } },
        { name: { ar: "الإمام البخاري", en: "Imam al-Bukhari" }, hint: { ar: "رحل آلاف الأميال يجمع الحديث", en: "Traveled thousands of miles collecting hadith" } },
      ],
      distractor: { name: { ar: "عثمان بن عفان", en: "Uthman ibn Affan" }, hint: { ar: "صحابي جليل — لكن ليس في هذه السلسلة", en: "A noble Companion — but not in this chain" } },
    },
  ];
  const ROLES = ["roleSahabi", "roleTabii", "roleImam"];

  const $ = (id) => document.getElementById(id);
  let round = 0, tries = 0, placed = [null, null, null];

  function renderRound() {
    placed = [null, null, null];
    const r = ROUNDS[round], L = Lang.current();
    $("is-hadith").innerHTML = `📜 ${r.hadith[L]}`;
    $("stat-round").textContent = `${round + 1}/${ROUNDS.length}`;
    $("is-feedback").textContent = "";
    renderChain(); renderPool();
  }

  function renderChain() {
    const L = Lang.current();
    let html = `
      <div class="is-slot filled" style="border-color:var(--gold); background:rgba(201,169,97,0.12); cursor:default;">
        ⭐ ${I18N.prophet[L]}
      </div>`;
    ROLES.forEach((role, i) => {
      html += `<div class="is-link"></div>`;
      const card = placed[i];
      html += card === null
        ? `<div class="is-slot" data-slot="${i}">${I18N[role][L]} — ؟</div>`
        : `<div class="is-slot filled" data-slot="${i}">${cardLabel(card)}</div>`;
    });
    $("is-chain").innerHTML = html;
    $("is-chain").querySelectorAll(".is-slot[data-slot].filled").forEach(s => {
      s.addEventListener("click", () => {
        placed[+s.dataset.slot] = null;
        AudioBus.tick(400);
        renderChain(); renderPool();
      });
    });
  }

  function cardLabel(cardIdx) {
    const L = Lang.current();
    const c = allCards()[cardIdx];
    return `${c.name[L]}<br/><small style="font-weight:600; color:var(--muted); font-size:11px;">${c.hint[L]}</small>`;
  }

  function allCards() {
    const r = ROUNDS[round];
    return [...r.chain, r.distractor];
  }

  let shuffleOrder = null;
  function renderPool() {
    const L = Lang.current();
    const cards = allCards();
    if (!shuffleOrder || shuffleOrder.length !== cards.length || shuffleOrder.round !== round) {
      shuffleOrder = cards.map((_, i) => i).sort(() => Math.random() - 0.5);
      shuffleOrder.round = round;
    }
    $("is-pool").innerHTML = shuffleOrder.map(i => `
      <button class="is-card ${placed.includes(i) ? "used" : ""}" data-i="${i}">
        ${cards[i].name[L]}
        <small>${cards[i].hint[L]}</small>
      </button>`).join("");
    $("is-pool").querySelectorAll(".is-card:not(.used)").forEach(b => {
      b.addEventListener("click", () => {
        const slot = placed.indexOf(null);
        if (slot === -1) return;
        placed[slot] = +b.dataset.i;
        AudioBus.pop();
        renderChain(); renderPool();
      });
    });
  }

  function check() {
    const L = Lang.current();
    if (placed.includes(null)) {
      $("is-feedback").textContent = I18N.emptyMsg[L];
      AudioBus.tick(300);
      return;
    }
    tries++; $("stat-tries").textContent = tries;
    const ok = placed.every((c, i) => c === i); /* السلسلة بالترتيب 0,1,2 */
    const slots = $("is-chain").querySelectorAll(".is-slot[data-slot]");
    if (ok) {
      slots.forEach(s => s.classList.add("good"));
      AudioBus.success();
      Particles.fire(50, { originY: "40%" });
      $("is-feedback").textContent = I18N.goodMsg[L];
      setTimeout(() => {
        round++;
        shuffleOrder = null;
        if (round >= ROUNDS.length) return win();
        renderRound();
      }, 1500);
    } else {
      placed.forEach((c, i) => { if (c !== i) slots[i].classList.add("bad"); });
      setTimeout(() => slots.forEach(s => s.classList.remove("bad")), 600);
      AudioBus.fail();
      $("is-feedback").textContent = I18N.badMsg[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `ثلاث سلاسل في ${tries} محاولات`
      : `Three chains in ${tries} tries`;
    Storage.set("anos_isnad_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0; tries = 0; shuffleOrder = null;
    $("stat-tries").textContent = 0;
    Modal.close("win-modal");
    renderRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { renderChain(); renderPool(); const r = ROUNDS[round]; $("is-hadith").innerHTML = `📜 ${r.hadith[Lang.current()]}`; });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("is-check").addEventListener("click", check);
  AudioBus.bindButton($("mute-btn"));
  renderRound();
})();
