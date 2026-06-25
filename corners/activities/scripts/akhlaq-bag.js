/* ============================================================
   AKHLAQ BAG — حقيبة الأخلاق
   Card deck: draw a scenario card, pick the prophetic akhlaq response
   ============================================================ */

(function () {
  "use strict";

  // 10 virtues — full collection
  const VIRTUES = [
    { id: "sidq",     name: "الصِّدق",   seal: "ص" },
    { id: "amana",    name: "الأَمانَة", seal: "أ" },
    { id: "afw",      name: "العَفو",    seal: "ع" },
    { id: "sabr",     name: "الصَّبر",   seal: "ص" },
    { id: "haya",     name: "الحَياء",   seal: "ح" },
    { id: "adl",      name: "العَدل",    seal: "ع" },
    { id: "rahma",    name: "الرَّحمَة", seal: "ر" },
    { id: "ithaar",   name: "الإِيثار",  seal: "إ" },
    { id: "adab",     name: "الأَدَب",   seal: "أ" },
    { id: "tawadu",   name: "التَّواضُع", seal: "ت" },
  ];

  // Scenario pool — each draws 1 of 8
  const POOL = [
    {
      label: "في البَيت",
      scene: "كَسَرتَ كوبَ والِدَتِك دونَ أن تَراك. ماذا تَفعَل؟",
      choices: [
        { t: "أُخفي القِطَعَ وأَسكُت.", correct: false, fb: "إِخفاءُ الخَطأ خِيانَة لِنَفسِك قَبلَ غَيرِك." },
        { t: "أَذهَبُ إلَيها وأَعتَرِف.", correct: true, virtue: "sidq", fb: "الصَّادِقُ نَجا. أُمُّك سَتُحِبُّ صِدقَك أَكثَرَ مِنَ الكوب." },
        { t: "أَتَّهِمُ أَخي الصَّغير.", correct: false, fb: "الكَذِبُ يَجُرُّ الكَذِب، وَظُلمُ الصَّغير أَشَدّ." },
      ],
    },
    {
      label: "في المَدرَسَة",
      scene: "وَجَدتَ مَحفَظَةً فيها مال، وَلا يَعلَمُ بِها أَحَد.",
      choices: [
        { t: "آخُذُ المال، فَلَن يَعرِف.", correct: false, fb: "لا تَأخُذ ما لَيسَ لَك، فاللهُ يَراك." },
        { t: "أَترُكُها مَكانَها.", correct: false, fb: "تَركُها لِلضَّياع لَيسَ أَمانَة." },
        { t: "أُسَلِّمُها لِمُديرِ المَدرَسَة.", correct: true, virtue: "amana", fb: "الأَمينُ يُؤدّي ما اؤتُمِنَ عَلَيه. هذا خُلُقُ المُسلِم." },
      ],
    },
    {
      label: "مَعَ الإِخوَة",
      scene: "أَخوكَ الصَّغيرُ كَسَرَ لُعبَتَك المُفَضَّلَة. وَهوَ يَبكي خائِفاً.",
      choices: [
        { t: "أَصرُخُ في وَجهِه وأَضرِبُه.", correct: false, fb: "الغَضَبُ يَهدِمُ، وأَخوكَ يَحتاجُ رَحمَتَك." },
        { t: "أُهَدِّئُه وأَقولُ: لا بأس.", correct: true, virtue: "afw", fb: "العَفوُ عِندَ المَقدِرَة هُوَ خُلُقُ النَّبيِّ ﷺ." },
        { t: "أُخفي لُعَبَه كُلَّها.", correct: false, fb: "الانتِقامُ لا يُصلِح، بَل يُعَمِّقُ الجُرح." },
      ],
    },
    {
      label: "في الطّابور",
      scene: "تَقِفُ في طابورٍ طَويلٍ والحَرُّ شَديد. صَديقُكَ يَقتَرِحُ التَّقَدُّم.",
      choices: [
        { t: "أَتَقَدَّم معه، الجَميعُ يَفعَل.", correct: false, fb: "ما يَفعَلُهُ النّاسُ لا يَجعَلُ الخَطأَ صَواباً." },
        { t: "أَبقى في مَكاني بِهُدوء.", correct: true, virtue: "sabr", fb: "الصَّبرُ نِصفُ الإِيمان، وَنِظامُ الطّابورِ حَقُّ مَن قَبلَك." },
        { t: "أَترُكُ الطّابورَ وأَذهَبُ.", correct: false, fb: "الانسِحابُ غَضَباً يَحرِمُك ما تَحتاج." },
      ],
    },
    {
      label: "أَمامَ الضُّيوف",
      scene: "دَخَلَ ضَيفٌ كَبيرُ السِّنّ. والمَجلِسُ مُمتَلِئ.",
      choices: [
        { t: "أَتَجاهَلُه، فالكَبيرُ يَجِدُ مَكاناً.", correct: false, fb: "إِكرامُ الكَبيرِ مِن إِكرامِ اللهِ تَعالى." },
        { t: "أَقومُ مِن مَكاني وَأُجلِسُه.", correct: true, virtue: "adab", fb: "«لَيسَ مِنّا مَن لَم يَرحَمْ صَغيرَنا وَيُوَقِّرْ كَبيرَنا»." },
        { t: "أَنظُرُ إليه بِفُضول.", correct: false, fb: "الفُضولُ لَيسَ أَدَباً، الأَدَبُ فِعلٌ لا نَظَر." },
      ],
    },
    {
      label: "عِندَ الطَّعام",
      scene: "بَقِيَت قِطعَةُ كَعكٍ واحِدَة، وأَخوكَ يَنظُرُ إلَيها.",
      choices: [
        { t: "آخُذُها بِسُرعَة قَبلَه.", correct: false, fb: "السُّرعَة في الأَخذِ لا تُورِثُ بَرَكَة." },
        { t: "أُقَسِّمُها نِصفَين.", correct: false, fb: "حَسَن، ولكنَّ هناك ما هُوَ أَعلى." },
        { t: "أُعطيهِ إيّاها وأَفرَح.", correct: true, virtue: "ithaar", fb: "الإِيثار: تُحِبُّ لِأَخيك ما تُحِبُّ لِنَفسِك أو أَكثَر." },
      ],
    },
    {
      label: "حُكمٌ بَينَ صَديقَين",
      scene: "اختَلَفَ صَديقان: أَحَدُهما صَديقُكَ المُقَرَّب، والآخَرُ مَعَهُ الحَقّ.",
      choices: [
        { t: "أَنحازُ لِصَديقي دائِماً.", correct: false, fb: "العَصَبيَّةُ ظُلم، وَلَو لَبِسَت ثَوبَ الصَّداقَة." },
        { t: "أَقولُ الحَقَّ ولَو على نَفسي أو صَديقي.", correct: true, virtue: "adl", fb: "«كونوا قَوّامينَ بِالقِسطِ شُهَداءَ للهِ ولو على أَنفُسِكم»." },
        { t: "أَتَجاهَلُهُما حَتّى تَهدَأ المَشاكِل.", correct: false, fb: "الصَّمتُ عَنِ الحَقِّ خَوفاً ضَعفٌ، لا أَدَب." },
      ],
    },
    {
      label: "مَعَ القِطَّة",
      scene: "رَأَيتَ قِطَّةً جائِعَةً تَنظُرُ إِلَيك في الشّارع.",
      choices: [
        { t: "أَرفُسُها لِتَبتَعِد.", correct: false, fb: "أَذى الحَيَوانِ حَرام. اِمرَأَةٌ دَخَلَتِ النّارَ في هِرَّة." },
        { t: "أُعطيها بَقايا طَعامي.", correct: true, virtue: "rahma", fb: "«في كلِّ كَبِدٍ رَطبَةٍ أَجر». الرَّحمَةُ بابُ الجَنَّة." },
        { t: "أَتَجاهَلُها وأَمضي.", correct: false, fb: "تَركُ المُحتاجِ مَعَ القُدرَة قَسوَة." },
      ],
    },
    {
      label: "في النّادي",
      scene: "هَزَمتَ صَديقَك في لُعبَة. وَهوَ يَنظُرُ إِلى الأَرض.",
      choices: [
        { t: "أَفتَخِرُ وأُذَكِّرُهُ كلَّ يَوم.", correct: false, fb: "الفَخرُ يُؤذي القُلوب، وَهوَ خُلُقُ إِبليس." },
        { t: "أَقولُ: لَعِبتَ جَيِّداً، ولَكَ المَرَّةُ القادِمَة.", correct: true, virtue: "tawadu", fb: "التَّواضُع يَرفَع، وَلَن يَنقُصَ مالاً صَدَقَة، ولا فَوزاً تَواضُع." },
        { t: "أَطلُبُ مِنه أن يَلعَبَ ثانِيَة.", correct: false, fb: "الإِصرار قَد يُحرِجُه. اِنتَبِه لِشُعورِه." },
      ],
    },
    {
      label: "في القِراءَة",
      scene: "زَميلُك يَتَعَثَّرُ في القِراءَة أَمامَ الصَّفّ، وَالكُلُّ يَنظُر.",
      choices: [
        { t: "أَضحَكُ مع البَعض.", correct: false, fb: "السُّخريَةُ بِأَخيك جَرحٌ لا تُداويهِ كَلِمَة." },
        { t: "أُشَجِّعُه بِنَظرَةٍ وابتِسامَة.", correct: true, virtue: "haya", fb: "الحَياءُ خُلُقٌ يَستُرُك ويَستُرُ غَيرَك. الابتِسامَةُ صَدَقَة." },
        { t: "أُكمِلُ مَكانَهُ بِصَوتٍ عالٍ.", correct: false, fb: "نِيَّةٌ طَيِّبَة، لَكِن قَد تَزيدُ حَرَجَه." },
      ],
    },
    {
      label: "بَعدَ عِراك",
      scene: "غَضِبَ مِنكَ جارُكَ بِكَلامٍ جارِح، ثُمَّ نَدِمَ واعتَذَر.",
      choices: [
        { t: "أَنا لَن أَنساها أَبَداً.", correct: false, fb: "حِفظُ الإِساءَةِ يُتعِبُ صاحِبَهُ قَبلَ أَن يُؤذي مَن أَساء." },
        { t: "أَقبَلُ عُذرَه وأَطوي الصَّفحَة.", correct: true, virtue: "afw", fb: "«وَأَن تَعفوا أَقرَبُ لِلتَّقوى»." },
        { t: "أُعامِلُه بِالمِثلِ ثُمَّ أَعفو.", correct: false, fb: "العَفوُ بِلا انتِقامٍ أَقرَبُ لِلنَّبيِّ ﷺ." },
      ],
    },
    {
      label: "أَمامَ المَرآة",
      scene: "تَلبَسُ ثَوباً جَميلاً جَديداً. تَفكيرُكَ الأَوَّل…",
      choices: [
        { t: "كَم سَأُبهِرُ النّاسَ في المَدرَسَة!", correct: false, fb: "اللِّباسُ لِنا، لا لِنَتَفاخَرَ بِه." },
        { t: "الحَمدُ للهِ على نِعمَتِه عَلَيَّ.", correct: true, virtue: "tawadu", fb: "«إِنَّ اللهَ جَميلٌ يُحِبُّ الجَمال»، والشُّكرُ يَزيدُ النِّعَم." },
        { t: "أَتَمَنّى لَو كانَ أَغلى.", correct: false, fb: "الطَّمَعُ يُذهِبُ بَرَكَةَ ما عِندَك." },
      ],
    },
  ];

  const ROUND_SIZE = 8;
  const STORAGE_KEY = "mk_akhlaq_v1";
  const STORE = Storage.get(STORAGE_KEY, { bestPoints: 0, rounds: 0 });

  let deck = [];      // round's chosen scenarios
  let idx = 0;
  let correctCount = 0;
  let points = 0;
  let virtues = new Set();
  let answered = false;

  function shuffle(a) {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function newRound() {
    deck = shuffle(POOL).slice(0, ROUND_SIZE);
    idx = 0; correctCount = 0; points = 0;
    virtues = new Set();
    answered = false;
    showEmpty();
    renderCollection();
    updateHUD();
    document.getElementById("ak-feedback").textContent = "";
    document.getElementById("ak-feedback").className = "ak-feedback";
    document.getElementById("btn-next").disabled = true;
    document.getElementById("btn-skip").disabled = true;
    document.getElementById("btn-draw").disabled = false;
  }

  function showEmpty() {
    const slot = document.getElementById("ak-card-slot");
    slot.classList.remove("has-card");
    slot.innerHTML = `<div class="ak-empty">ابدأ بِسَحبِ بِطاقَةٍ مِنَ الحَقيبَة</div>`;
    document.getElementById("ak-choices").innerHTML = "";
  }

  function drawCard() {
    if (idx >= deck.length) {
      finishRound();
      return;
    }
    const card = deck[idx];
    const bag = document.getElementById("ak-bag");
    bag.classList.add("shaking");
    AudioBus.tone(660, 0.1, "sine", 0.06);
    setTimeout(() => bag.classList.remove("shaking"), 500);

    const slot = document.getElementById("ak-card-slot");
    slot.classList.add("has-card");
    slot.innerHTML = `
      <div class="ak-card-content">
        <span class="label">بِطاقَة ${idx + 1} · ${card.label}</span>
        <div class="scene">${card.scene}</div>
      </div>
    `;

    const ch = document.getElementById("ak-choices");
    ch.innerHTML = "";
    const shuffled = shuffle(card.choices.map((c, i) => ({ ...c, i })));
    shuffled.forEach((c, k) => {
      const btn = document.createElement("button");
      btn.className = "ak-choice";
      btn.innerHTML = `<span class="pick">خِيار ${["A","B","C"][k]}</span><span class="t">${c.t}</span>`;
      btn.addEventListener("click", () => onChoice(btn, c, card));
      ch.appendChild(btn);
    });

    answered = false;
    document.getElementById("ak-feedback").textContent = "";
    document.getElementById("ak-feedback").className = "ak-feedback";
    document.getElementById("btn-next").disabled = true;
    document.getElementById("btn-skip").disabled = false;
    document.getElementById("btn-draw").disabled = true;
  }

  function onChoice(btn, c, card) {
    if (answered) return;
    answered = true;

    const all = document.querySelectorAll(".ak-choice");
    all.forEach(b => b.classList.add("locked"));

    if (c.correct) {
      btn.classList.add("correct");
      correctCount++;
      points += 100;
      AudioBus.success();
      // Add virtue
      if (c.virtue) {
        const isNew = !virtues.has(c.virtue);
        virtues.add(c.virtue);
        if (isNew) {
          renderCollection();
          Particles.fire(40, { colors: ["#DCE9DC","#E0D5F2","#CFE3F2","#FFE9A8"] });
        }
      }
      showFeedback("good", `✓ خُلُقٌ نَبَوي. ${c.fb}`);
    } else {
      btn.classList.add("wrong");
      // reveal the correct one too
      all.forEach(b => {
        const txt = b.querySelector(".t")?.textContent;
        const correctChoice = card.choices.find(x => x.correct);
        if (correctChoice && txt === correctChoice.t) {
          b.classList.add("correct");
        }
      });
      points += 20;
      AudioBus.fail();
      showFeedback("bad", `${c.fb}`);
    }

    updateHUD();
    document.getElementById("btn-next").disabled = false;
    document.getElementById("btn-skip").disabled = true;
  }

  function showFeedback(kind, text) {
    const fb = document.getElementById("ak-feedback");
    fb.className = "ak-feedback " + kind;
    fb.innerHTML = `<span class="ic">${kind === "good" ? "✓" : "!"}</span><span>${text}</span>`;
  }

  function nextCard() {
    idx++;
    if (idx >= deck.length) {
      finishRound();
    } else {
      showEmpty();
      document.getElementById("ak-feedback").textContent = "";
      document.getElementById("ak-feedback").className = "ak-feedback";
      document.getElementById("btn-next").disabled = true;
      document.getElementById("btn-skip").disabled = true;
      document.getElementById("btn-draw").disabled = false;
      updateHUD();
    }
  }

  function skipCard() {
    if (answered) return;
    points = Math.max(0, points - 10);
    idx++;
    showEmpty();
    document.getElementById("btn-next").disabled = true;
    document.getElementById("btn-skip").disabled = true;
    document.getElementById("btn-draw").disabled = false;
    updateHUD();
    if (idx >= deck.length) finishRound();
  }

  function renderCollection() {
    const root = document.getElementById("collection");
    root.innerHTML = "";
    VIRTUES.forEach(v => {
      const has = virtues.has(v.id);
      const chip = document.createElement("div");
      chip.className = "virtue-chip" + (has ? " collected" : "");
      chip.innerHTML = `
        <span class="seal">${has ? "✓" : v.seal}</span>
        <span>${v.name}</span>
      `;
      root.appendChild(chip);
    });
    document.getElementById("coll-pill").textContent = `${virtues.size} / ${VIRTUES.length}`;
    document.getElementById("ak-virtues").textContent = virtues.size;
  }

  function updateHUD() {
    document.getElementById("ak-idx").textContent = Math.min(idx, deck.length);
    document.getElementById("ak-correct").textContent = correctCount;
    document.getElementById("ak-points").textContent = points;
    document.getElementById("best").textContent = STORE.bestPoints > 0 ? `${STORE.bestPoints} نقطة` : "—";
  }

  function finishRound() {
    if (points > STORE.bestPoints) STORE.bestPoints = points;
    STORE.rounds++;
    Storage.set(STORAGE_KEY, STORE);

    Particles.fire(160, { colors: ["#DCE9DC","#E0D5F2","#CFE3F2","#FFE9A8","#FFD9C2"] });
    AudioBus.success();

    const collected = VIRTUES.filter(v => virtues.has(v.id));
    const list = collected.length === 0
      ? `<em style="color:var(--muted)">لَم تَجمَع أَخلاقاً هذه المَرَّة. حاوِل مَرَّةً أُخرى.</em>`
      : collected.map(v => `<span style="display:inline-flex; align-items:center; gap:6px; padding:5px 12px; background:var(--brand-soft); color:var(--brand-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">✓ ${v.name}</span>`).join(" ");

    document.getElementById("done-summary").innerHTML = `
      <div style="display:flex; gap:8px; justify-content:center; margin-bottom: var(--s-3);">
        <span style="padding:6px 12px; background:var(--mint); color:var(--mint-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">${correctCount}/${deck.length} صَحيح</span>
        <span style="padding:6px 12px; background:var(--butter); color:var(--butter-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">+${points} نقطة</span>
      </div>
      <div style="text-align:right; line-height: 2;">${list}</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 12px; line-height: 1.7;">
        قال ﷺ: «أَكمَلُ المُؤمِنينَ إيماناً أَحسَنُهم خُلُقاً». فَحَقيبَتُكَ مَلأى بِما يَنفَعُكَ في الدُّنيا والآخِرَة.
      </div>
    `;
    setTimeout(() => Modal.open("done-modal"), 500);
  }

  /* ============ Bind ============ */
  document.getElementById("btn-draw").addEventListener("click", drawCard);
  document.getElementById("btn-next").addEventListener("click", nextCard);
  document.getElementById("btn-skip").addEventListener("click", skipCard);
  document.getElementById("done-next").addEventListener("click", () => {
    Modal.close("done-modal"); setTimeout(newRound, 300);
  });
  Modal.bindClose("done-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  newRound();
})();
