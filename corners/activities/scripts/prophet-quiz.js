/* ============================================================
   PROPHET QUIZ — اختبار: من هو النبي؟
   12 نبيّاً، 4 قرائن لكل نبي، 6 أسئلة في الجولة.
   النجوم تتناقص مع كل قرينة إضافية: 4 → 3 → 2 → 1
   ============================================================ */

(function () {
  "use strict";

  const PROPHETS = [
    {
      name: "آدم", clues: [
        "أنا أبو البشر، خَلَقَني الله بِيدِه ونفخَ فيَّ من روحه.",
        "علَّمني الله الأسماءَ كلَّها، فعجِب الملائكة من علمي.",
        "زوجتي حواء، وأمر الله الملائكة أن يسجدوا لي، فسجدوا إلا واحداً.",
        "أكلتُ من الشجرة فأُهبِطتُ إلى الأرض، ثم تاب الله عليَّ.",
      ],
      fact: "آدم هو أوّل إنسان، وأبو الأنبياء جميعاً. خلقَهُ الله من تراب.",
    },
    {
      name: "نوح", clues: [
        "صنعتُ سفينةً كبيرة بأمر ربي قبل أن يأتي طوفان عظيم.",
        "دعوتُ قومي ألفَ سنةٍ إلا خمسين عاماً، لكنّهم لم يؤمنوا.",
        "حملتُ في السفينة من كلِّ زوجين اثنين، وأَنجى الله المؤمنين.",
        "غرِق ابني الكافر مع الكافرين، وقال لي ربي: «إنه ليس من أهلِك».",
      ],
      fact: "نوح أوّل رسولٍ بَعَثه الله إلى أهل الأرض، ومن أُولي العزم من الرسل.",
    },
    {
      name: "إبراهيم", clues: [
        "كسرتُ أصنامَ قومي وعلّقتُ الفأسَ في عنق أكبرها.",
        "ألقى قومي بي في النار العظيمة، فقال الله لها: «يا نار كوني برداً وسلاماً».",
        "بنيتُ الكعبة المُشرَّفة مع ابني إسماعيل.",
        "رأيتُ في المنام أنّي أذبح ابني، فأطعتُ ربي، ففداهُ الله بكبشٍ عظيم.",
      ],
      fact: "إبراهيم خليلُ الرحمن، أبو الأنبياء، ومن أُولي العزم. مَلَّةُ الإسلام مَلَّتُهُ.",
    },
    {
      name: "يوسف", clues: [
        "رأيتُ في المنام أحدَ عشَر كوكباً والشمسَ والقمر يسجدون لي.",
        "ألقاني إخوتي في بئرٍ من الحسد، فالتقطتني قافلة وباعتني في مصر.",
        "سَجَنوني ظُلماً، ففسَّرتُ في السجن رؤيا الملك فأصبحتُ عزيز مصر.",
        "ابنُ يعقوب، ومن أجمل البشر، وقصتي «أحسنُ القصص» في القرآن.",
      ],
      fact: "ليوسف سورةٌ كاملة بِاسمه. عَفا عن إخوته رغم ظلمهم له، وجعله الله عزيز مصر.",
    },
    {
      name: "موسى", clues: [
        "تربَّيتُ في قصر فرعون، وعصاي تتحوّل إلى ثعبانٍ بإذن الله.",
        "كلَّمَني ربي مباشرةً على جبل الطور، فأنا «كليم الله».",
        "ضربتُ البحر بعصاي فانفلق إلى اثني عشر طريقاً يبسا.",
        "أهلَك الله فرعون وجنودَه في البحر بعد ما تكبَّر وادَّعى الألوهية.",
      ],
      fact: "موسى كليم الله، من أُولي العزم، أنزل الله عليه التوراة وأَنجى به بني إسرائيل.",
    },
    {
      name: "يونس", clues: [
        "غضبتُ من قومي وخرجتُ من بلدي قبل أن يأذن لي ربي.",
        "ركبتُ سفينةً فاقترَعنا فوقعتْ القُرعة عليَّ، فألقَوني في البحر.",
        "ابتلَعَني حوتٌ عظيم وبقيتُ في بطنه في ثلاث ظلمات.",
        "ناديتُ ربي: «لا إله إلا أنتَ سبحانَك إنّي كنتُ من الظالمين»، فنَجَّاني.",
      ],
      fact: "دعاء يونس عليه السلام في بطن الحوت من أعظم الأدعية لتفريج الكَرب.",
    },
    {
      name: "سليمان", clues: [
        "علَّمَني الله منطق الطير، فكنتُ أفهم لُغة كل دابة.",
        "سخَّر الله لي الجِنّ يَعملون لي ما أشاء من المحاريب والقدور.",
        "سَخَّر الله لي الريح، تجري بأمري حيثُ شئتُ، شهراً غُدوَّاً وشهراً رواحاً.",
        "جاءني الهدهد بنبأ ملكة سبأ، فأرسلتُ إليها كتاباً فأَسلَمتْ معي لله.",
      ],
      fact: "سليمان ابن داود، نبيٌّ ومَلِك، آتاه الله مُلكاً لم يُؤتَه أحدٌ من بعده.",
    },
    {
      name: "أيوب", clues: [
        "ابتلاني الله بمرضٍ شديد في جسدي سنواتٍ طويلة، فصبرتُ على بَلائه.",
        "فقدتُ مالي وأبنائي وصحَّتي، ولم أَشكُ إلا إلى ربي.",
        "قال الله عنّي: «نِعمَ العبدُ إنّه أوَّاب».",
        "ضربتُ الأرضَ برِجلي فنبَع ماءٌ بارد، فاغتسلتُ به فعافاني الله.",
      ],
      fact: "أيوب عليه السلام مَضرِبُ المثل في الصبر على البلاء. أعاد الله إليه أهلَه ومالَه أضعافاً.",
    },
    {
      name: "عيسى", clues: [
        "وُلِدتُ من غير أبٍ، وأمي مريم العذراء الصدّيقة.",
        "تكلَّمتُ في المهد صبياً فقلتُ: «إنّي عبدُ الله».",
        "أُحيي الموتى وأُبرئُ الأَكْمَه والأبرص بإذن الله.",
        "رَفَعَني الله إلى السماء، ولم يَقتلوني ولم يَصلبوني، وسأنزل آخر الزمان.",
      ],
      fact: "عيسى بن مريم رسول الله وكلمتُه ألقاها إلى مريم، ومن أُولي العزم من الرسل.",
    },
    {
      name: "محمد ﷺ", clues: [
        "أنا خاتَمُ الأنبياء، لا نبيَّ بعدي.",
        "وُلِدتُ في مكة عام الفيل، يَتيماً، ربَّتني حليمة السعدية.",
        "أنزَل الله عليَّ القرآن في غار حراء، وأَوّلُ ما نزل: «اقرأ».",
        "هاجَرتُ إلى المدينة، وفتحتُ مكة بغير قتال، ودُفِنتُ في المسجد النبوي.",
      ],
      fact: "محمد ﷺ سيّدُ الأنبياء وخاتَمُهم، رحمةُ الله للعالمين. عليه أفضلُ الصلاة والسلام.",
    },
    {
      name: "داود", clues: [
        "أَنزَل الله عليَّ كتاباً اسمه الزَّبور.",
        "كنتُ صبيّاً صغيراً، فقتلتُ المَلِكَ الجبَّار جالوت بحَجَرٍ من مِقلاع.",
        "أَلانَ الله لي الحديد، فكنتُ أصنعُ الدُّروع.",
        "كانت الجبال والطير تُسبِّح معي عندما أُسبِّح الله، وصوتي جميلٌ في تلاوة الزبور.",
      ],
      fact: "داود نبيٌّ ومَلِك، أبو سليمان عليه السلام. لِصومه يُسمَّى «صومُ داود» (يوم صيام ويوم فطر).",
    },
    {
      name: "زكريّا", clues: [
        "كنتُ كافلَ مريم العذراء، ووجدتُ عندها رزقاً من السماء.",
        "دعَوتُ ربي وأنا شيخٌ كبير وزوجتي عاقر أن يَهَبَني وَلداً.",
        "بشَّرَتْني الملائكة بِغُلامٍ اسمُهُ يحيى.",
        "كنتُ نبيّاً نَجَّاراً، وابني يحيى نبيٌّ صالح.",
      ],
      fact: "زكريّا عليه السلام مَضرِبُ المثل في الدعاء واليقين بإجابة الله، حتى في الكِبَر.",
    },
  ];

  /* ============ الحالة ============ */
  const STORAGE_KEY = "mk_prophet_quiz_v1";
  const STORAGE = Storage.get(STORAGE_KEY, {
    best: 0, plays: 0, solvedIds: [],
  });

  const ROUND_SIZE = 6;
  const MAX_CLUES = 4;

  let round = [];          // مصفوفة الأنبياء في الجولة
  let qIdx = 0;
  let cluesShown = 1;
  let totalScore = 0;
  let solvedCount = 0;
  let answered = false;
  let roundResults = [];   // {name, stars}

  /* ============ بناء جولة جديدة ============ */
  function startRound() {
    round = PROPHETS.slice().sort(() => Math.random() - 0.5).slice(0, ROUND_SIZE);
    qIdx = 0;
    totalScore = 0;
    solvedCount = 0;
    roundResults = [];
    updateHUD();
    loadQuestion();
    renderRoundChips();
  }

  /* ============ تحميل سؤال ============ */
  function loadQuestion() {
    if (qIdx >= round.length) {
      finishRound();
      return;
    }
    cluesShown = 1;
    answered = false;
    const p = round[qIdx];

    // الخيارات: النبي الصحيح + 3 خياراتٍ عشوائية مختلفة
    const distractors = PROPHETS
      .filter(x => x.name !== p.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const options = [p, ...distractors].sort(() => Math.random() - 0.5);

    document.getElementById("q-idx").textContent = (qIdx + 1);
    document.getElementById("reveal-card").classList.remove("open");

    renderClues(p);
    renderOptions(p, options);
    renderScoreMeter();
    renderCounter();
    document.getElementById("next-clue-btn").disabled = false;
  }

  function renderClues(p) {
    const list = document.getElementById("clue-list");
    list.innerHTML = "";
    for (let i = 0; i < cluesShown; i++) {
      const div = document.createElement("div");
      div.className = "clue-bubble";
      div.innerHTML = `<span class="num">${i + 1}</span><span>${p.clues[i]}</span>`;
      list.appendChild(div);
    }
  }

  function renderOptions(prophet, options) {
    const wrap = document.getElementById("prophet-options");
    wrap.innerHTML = "";
    const letters = ["أ", "ب", "ج", "د"];
    options.forEach((opt, i) => {
      const b = document.createElement("button");
      b.className = "prophet-option";
      b.dataset.name = opt.name;
      b.innerHTML = `<span class="letter">${letters[i]}</span> ${opt.name}`;
      b.addEventListener("click", () => onAnswer(prophet, opt, b));
      wrap.appendChild(b);
    });
  }

  function renderScoreMeter() {
    const m = document.getElementById("q-score");
    m.innerHTML = "";
    const possible = MAX_CLUES;
    const earned = MAX_CLUES - (cluesShown - 1); // 1 clue → 4 stars
    for (let i = 0; i < possible; i++) {
      const s = document.createElement("span");
      if (i >= earned) s.className = "off";
      m.appendChild(s);
    }
  }

  function renderCounter() {
    const c = document.getElementById("clue-counter");
    c.innerHTML = "";
    for (let i = 0; i < MAX_CLUES; i++) {
      const s = document.createElement("span");
      if (i < cluesShown) s.className = "shown";
      c.appendChild(s);
    }
  }

  /* ============ قرينة أخرى ============ */
  function showNextClue() {
    if (answered) return;
    if (cluesShown >= MAX_CLUES) return;
    cluesShown++;
    AudioBus.tick(540);
    renderClues(round[qIdx]);
    renderScoreMeter();
    renderCounter();
    if (cluesShown >= MAX_CLUES) {
      document.getElementById("next-clue-btn").disabled = true;
    }
  }

  /* ============ إجابة ============ */
  function onAnswer(prophet, opt, btn) {
    if (answered) return;
    answered = true;
    const wrap = document.getElementById("prophet-options");
    wrap.querySelectorAll("button").forEach(b => b.disabled = true);

    let stars = 0;
    if (opt.name === prophet.name) {
      btn.classList.add("correct");
      stars = MAX_CLUES - (cluesShown - 1);
      totalScore += stars;
      solvedCount++;
      if (!STORAGE.solvedIds.includes(prophet.name)) STORAGE.solvedIds.push(prophet.name);
      AudioBus.success();
      Particles.fire(50, { colors: ["#FFD98B","#FFE9A8","#CDEBD7"] });
    } else {
      btn.classList.add("wrong");
      // highlight correct
      wrap.querySelectorAll("button").forEach(b => {
        if (b.dataset.name === prophet.name) b.classList.add("correct");
      });
      AudioBus.fail();
      stars = 0;
    }

    roundResults.push({ name: prophet.name, stars });
    revealAnswer(prophet, stars);
    updateHUD();
    renderRoundChips();
    Storage.set(STORAGE_KEY, STORAGE);
  }

  function revealAnswer(p, stars) {
    const card = document.getElementById("reveal-card");
    document.getElementById("reveal-name").textContent =
      (stars > 0 ? `هو ${p.name} عليه السلام — أحسنتَ!` : `هو ${p.name} عليه السلام`);
    const allCluesHTML = p.clues.map((c, i) =>
      `<div style="margin: 6px 0; padding: 8px 12px; background: rgba(255,255,255,0.5); border-radius: 8px; font-size: 13px;">
        <strong style="color: var(--brand-ink); margin-left: 6px;">${i+1}.</strong>${c}
      </div>`
    ).join("");
    document.getElementById("reveal-summary").innerHTML = allCluesHTML;
    document.getElementById("reveal-fact").innerHTML = `<strong>هل تعلم؟</strong> ${p.fact}`;
    card.classList.add("open");
  }

  /* ============ HUD + chips ============ */
  function updateHUD() {
    document.getElementById("total-score").textContent = totalScore;
    document.getElementById("solved").textContent = solvedCount;
    document.getElementById("round-pill").textContent = `${qIdx}/${ROUND_SIZE}`;
    document.getElementById("best-score").textContent =
      STORAGE.best > 0 ? `${STORAGE.best} نجمة` : "—";
  }

  function renderRoundChips() {
    const list = document.getElementById("prophet-list");
    list.innerHTML = "";
    round.forEach((p, i) => {
      const chip = document.createElement("span");
      chip.className = "prophet-chip";
      const result = roundResults[i];
      if (result) {
        chip.classList.add(result.stars > 0 ? "solved" : "");
        chip.textContent = result.stars > 0
          ? `✓ ${p.name}`
          : (i < qIdx ? `· ${p.name}` : `؟`);
      } else if (i === qIdx) {
        chip.textContent = "← الآن";
      } else {
        chip.textContent = "؟";
      }
      list.appendChild(chip);
    });
  }

  /* ============ نهاية الجولة ============ */
  function finishRound() {
    if (totalScore > STORAGE.best) STORAGE.best = totalScore;
    STORAGE.plays++;
    Storage.set(STORAGE_KEY, STORAGE);

    const maxScore = ROUND_SIZE * MAX_CLUES;
    const pct = Math.round((totalScore / maxScore) * 100);

    let eyebrow, title;
    if (totalScore === maxScore) { eyebrow = "ممتاز جداً!"; title = "أنتَ عالِمٌ صغير!"; }
    else if (pct >= 75)         { eyebrow = "بطل القصص"; title = "أحسنتَ، معرفتُك بقصص الأنبياء واسعة"; }
    else if (pct >= 50)         { eyebrow = "تقدّمٌ طيّب"; title = "أكمِل قراءة قصص الأنبياء"; }
    else                          { eyebrow = "بدايةٌ مباركة"; title = "لا بأس، أعِد الجولة وستتحسّن"; }

    const breakdown = roundResults.map(r => {
      const stars = "★".repeat(r.stars) + "☆".repeat(MAX_CLUES - r.stars);
      return `<div style="display:flex; justify-content:space-between; padding: 6px 10px; border-bottom: 1px dashed var(--line);">
        <span><strong>${r.name}</strong></span>
        <span style="font-family: var(--font-en); color: ${r.stars > 0 ? 'var(--gold)' : 'var(--muted)'};">${stars}</span>
      </div>`;
    }).join("");

    document.getElementById("win-eyebrow").textContent = eyebrow;
    document.getElementById("win-title").textContent = title;
    document.getElementById("win-summary").innerHTML = `
      <div style="text-align:center; margin-bottom: var(--s-3); font-size: 14px;">
        <span style="font-size: 28px; font-weight: 800; color: var(--gold); font-family: var(--font-en);">${totalScore}</span>
        <span style="font-size: 14px; color: var(--muted);"> / ${maxScore} نجمة</span>
      </div>
      ${breakdown}
      <div style="margin-top: var(--s-4); padding: 12px; background: var(--bg-soft); border-radius: 10px; font-size: 13px; line-height: 1.6;">
        قصص الأنبياء مليئة بالعِبَر. اقرأ القصص كاملةً في كتاب «قصص الأنبياء» لابن كثير المختصر للأطفال.
      </div>
    `;
    setTimeout(() => { Modal.open("win-modal"); Particles.fire(140); }, 600);
  }

  /* ============ ربط ============ */
  document.getElementById("next-clue-btn").addEventListener("click", showNextClue);
  document.getElementById("next-q-btn").addEventListener("click", () => {
    qIdx++;
    loadQuestion();
  });
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(startRound, 300);
  });
  Modal.bindClose("win-modal");

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });

  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ بدء ============ */
  startRound();
})();
