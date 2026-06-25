/* ============================================================
   RIDDLES — ألغاز الأدوات
   ============================================================ */

(function () {
  "use strict";

  const RIDDLES = [
    { clue: "أَنا كتابٌ كَريم، أَحمِلُ كلامَ ربِّي، فيَّ هُدًى للناس وشِفاءٌ للقُلوب. مَن أنا؟",
      options: ["القرآن", "القاموس", "المُعجَم", "القِصَّة"],
      correct: 0,
      explain: "القرآن هو كلام الله، أُنزِل على نبيّنا محمد ﷺ، فيه هُدًى ورحمة." },
    { clue: "أَطيرُ في السماء بِجَناحَين، وأَنزِلُ على الأنبياء بالوحي. مَن أنا؟",
      options: ["الفَراشة", "جِبريل ﷺ", "الحَمامة", "النَّجم"],
      correct: 1,
      explain: "جبريل ﷺ هو أمين الوحي، يُنزِّل كلام الله على الأنبياء." },
    { clue: "أَنا أوَّل بَيتٍ وُضِعَ للنَّاس، يَطوفُ حَولي الحُجَّاج، أَلبسُ ثَوباً أَسود. مَن أنا؟",
      options: ["المسجد النبوي", "قُبَّة الصَّخرة", "الكعبة المُشَرَّفة", "غار حِراء"],
      correct: 2,
      explain: "الكعبة المشرَّفة في مكَّة، أول بيت بُني لعبادة الله، يَكسوها ثوبٌ أسود." },
    { clue: "خَمسٌ في اليوم والليلة، فيَّ رُكوعٌ وسُجود، وأنا عَمودُ الدِّين. مَن أنا؟",
      options: ["الصلاة", "الصِّيام", "الزكاة", "الحجّ"],
      correct: 0,
      explain: "الصلاة عمودُ الدين، من أقامها أقام الدين ومن هَدمها هَدم الدين." },
    { clue: "أَتَنَزَّلُ من السماء فأُحيي الأرضَ بَعدَ مَوتها، وفيَّ سِرُّ الحياة. مَن أنا؟",
      options: ["الشمس", "النَّسيم", "الرعد", "المَطر"],
      correct: 3,
      explain: "المَطر رَحمةٌ من الله، يُحيي به الأرض والزَّرع والإنسان." },
    { clue: "شَهرٌ كَريم، أَصومُ نَهاره وأُصلِّي ليله، فيَّ ليلةٌ خَيرٌ من ألفِ شَهر. مَن أنا؟",
      options: ["شَوَّال", "ذو الحِجَّة", "رَمَضان", "مُحَرَّم"],
      correct: 2,
      explain: "رمضان شَهر القرآن، فيه ليلةُ القَدر التي هي خيرٌ من ألف شَهر." },
    { clue: "أَنا أُمُّك، وجَنَّتُكَ تَحت قَدَمَيَّ، أَوصاكَ بي ربُّك ثلاث مَرَّات. مَن أنا؟",
      options: ["الجَدَّة", "الأُمّ", "الخالة", "الأُخت"],
      correct: 1,
      explain: "بِرُّ الأمّ من أعظم القُربات. قال ﷺ لرجلٍ سأله عن الجهاد ولهُ أمٌّ حيّة: «فالزمها، فإنّ الجنة تحت رجليها» — رواه النسائي." },
    { clue: "أَنا أَعمى لكنِّي أُبصِر الحقّ بقَلبي، أَذَّنتُ للنَّاس في المدينة بصَوتي الجَميل. مَن أنا؟",
      options: ["أبو هريرة", "بِلال بن رَباح", "ابن أُمّ مَكتوم", "حَسَّان بن ثابت"],
      correct: 2,
      explain: "ابن أمّ مكتوم رضي الله عنه كان أعمى، ومُؤذِّن النبي ﷺ مع بِلال." },
    { clue: "أَنا أَخفِيها فأَزداد ثَواباً، يُسلِّمها صاحِبُها لأخيهِ الفقير، وأُطَهِّر بها المال. مَن أنا؟",
      options: ["الهَدِيَّة", "الميراث", "الصَّدقة", "الرُّشوة"],
      correct: 2,
      explain: "الصَّدقةُ تُطفئُ غضَب الرَّبّ كما يُطفئ الماءُ النار، وتُطهِّر المال." },
    { clue: "أَنا أَوَّل من آمَن من الرِّجال، صاحِبُ النبي ﷺ في الغار، خَليفته الأوَّل. مَن أنا؟",
      options: ["عُمَر بن الخطَّاب", "أبو بَكر الصدِّيق", "عُثمان بن عفَّان", "عَلِيّ بن أبي طالب"],
      correct: 1,
      explain: "أبو بَكر الصدِّيق رضي الله عنه، صاحِبُ النبي ﷺ في الهجرة وأوَّل خلفاء المسلمين." },
  ];

  const STORAGE_KEY = "mk_riddles_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  let idx = 0;
  let correct = 0;
  let wrong = 0;
  let stars = 0;
  let answered = false;
  let fiftyUsed = false;
  let attemptsThisRiddle = 0;

  function loadRiddle() {
    answered = false;
    fiftyUsed = false;
    attemptsThisRiddle = 0;

    const r = RIDDLES[idx];
    document.getElementById("rid-num").textContent = `لغز ${String(idx+1).padStart(2,"0")}`;
    document.getElementById("clue-text").textContent = r.clue;
    document.getElementById("r-idx").textContent = idx + 1;
    document.getElementById("reveal").classList.remove("show");
    document.getElementById("btn-next").style.display = "none";
    document.getElementById("btn-skip").style.display = "";
    document.getElementById("btn-fifty").style.display = "";
    document.getElementById("btn-fifty").disabled = false;

    const opts = document.getElementById("options");
    opts.innerHTML = "";
    r.options.forEach((opt, i) => {
      const el = document.createElement("div");
      el.className = "rid-option";
      el.dataset.idx = i;
      el.innerHTML = `
        <span class="letter">${["أ","ب","ج","د"][i]}</span>
        <span>${opt}</span>
      `;
      el.addEventListener("click", () => choose(i, el));
      opts.appendChild(el);
    });

    renderList();
  }

  function renderList() {
    const list = document.getElementById("riddles-list");
    list.innerHTML = "";
    RIDDLES.forEach((r, i) => {
      const c = document.createElement("span");
      const cls = r._state === "right" ? "solved"
                : r._state === "wrong" ? "wrong"
                : i === idx ? "current" : "";
      c.className = "rid-chip " + cls;
      c.textContent = String(i+1).padStart(2,"0");
      list.appendChild(c);
    });
    document.getElementById("prog-pill").textContent = `${correct + wrong}/${RIDDLES.length}`;
  }

  function choose(i, el) {
    if (answered) return;
    attemptsThisRiddle++;
    const r = RIDDLES[idx];

    if (i === r.correct) {
      el.classList.add("correct", "locked");
      // lock all
      document.querySelectorAll(".rid-option").forEach(o => o.classList.add("locked"));
      answered = true;
      correct++;
      let s = attemptsThisRiddle === 1 ? 2 : 1;
      if (fiftyUsed) s = Math.max(0, s - 0.5);
      r._state = "right"; r._stars = s;
      stars += s;
      AudioBus.success();
      Particles.fire(40, { colors: ["#CDEBD7","#CFE3F2","#FFE9A8"] });
      showReveal(true);
    } else {
      el.classList.add("wrong", "locked");
      AudioBus.fail();
      if (attemptsThisRiddle >= 2) {
        // reveal correct
        document.querySelectorAll(".rid-option").forEach((o, j) => {
          o.classList.add("locked");
          if (j === r.correct) o.classList.add("correct");
        });
        answered = true;
        wrong++;
        r._state = "wrong"; r._stars = 0;
        showReveal(false);
      }
    }
    updateHUD();
    renderList();
  }

  function showReveal(success) {
    const r = RIDDLES[idx];
    const rev = document.getElementById("reveal");
    rev.classList.add("show");
    document.getElementById("rev-title").textContent = success ? "أحسنت! " : "الإجابة الصحيحة: ";
    document.getElementById("rev-explain").innerHTML =
      `<strong style="color:var(--ink);">${r.options[r.correct]}</strong> — ${r.explain}`;
    document.getElementById("btn-next").style.display = "";
    document.getElementById("btn-skip").style.display = "none";
    document.getElementById("btn-fifty").style.display = "none";
  }

  function fifty() {
    if (fiftyUsed || answered) return;
    fiftyUsed = true;
    const r = RIDDLES[idx];
    // remove 2 wrong options
    const wrongIdxs = [0,1,2,3].filter(i => i !== r.correct);
    const remove = shuffle(wrongIdxs).slice(0, 2);
    remove.forEach(i => {
      const el = document.querySelector(`.rid-option[data-idx="${i}"]`);
      if (el) { el.classList.add("locked"); el.style.opacity = "0.25"; el.style.pointerEvents = "none"; }
    });
    document.getElementById("btn-fifty").disabled = true;
    AudioBus.tick(550);
  }

  function next() {
    if (idx + 1 < RIDDLES.length) {
      idx++; loadRiddle();
    } else {
      finishRound();
    }
  }
  function skip() {
    if (answered) return;
    RIDDLES[idx]._state = "wrong";
    wrong++;
    updateHUD(); renderList();
    next();
  }

  function updateHUD() {
    document.getElementById("r-correct").textContent = correct;
    document.getElementById("r-wrong").textContent = wrong;
    document.getElementById("r-stars").textContent = Math.round(stars * 10) / 10;
    document.getElementById("best").textContent = STORE.best > 0 ? `${STORE.best} ⭐` : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function finishRound() {
    if (stars > STORE.best) STORE.best = stars;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(150);
    const max = RIDDLES.length * 2;
    document.getElementById("win-summary").innerHTML = `
      أَجبتَ بِنجاحٍ عن <strong>${correct}</strong> من <strong>${RIDDLES.length}</strong> لغزاً،
      وحَصلتَ على <strong>${Math.round(stars*10)/10}</strong> نَجمة من ${max}.
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-2); margin-top: var(--s-3);">
        <div><strong>صحيح</strong>${correct}</div>
        <div><strong>خاطئ</strong>${wrong}</div>
        <div><strong>أفضل</strong>${STORE.best}</div>
      </div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        التَّفَكُّرُ عبادة. خُذ من كل لغزٍ مَعلومةً وعَلِّمها لأخيك الصغير.
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  function shuffle(a) {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function newRound() {
    RIDDLES.forEach(r => { delete r._state; delete r._stars; });
    idx = 0; correct = 0; wrong = 0; stars = 0;
    loadRiddle(); updateHUD();
  }

  /* Bind */
  document.getElementById("btn-fifty").addEventListener("click", fifty);
  document.getElementById("btn-skip").addEventListener("click", skip);
  document.getElementById("btn-next").addEventListener("click", next);
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(newRound, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  loadRiddle();
  updateHUD();
})();
