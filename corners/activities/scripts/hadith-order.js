/* ============================================================
   HADITH ORDER — ترتيب كلمات الحديث الشريف
   آلية: انقر كلمة من الحقيبة لإضافتها إلى الشريط، أو من الشريط لإعادتها.
   ============================================================ */

(function () {
  "use strict";

  /* ============ بنك الأحاديث ============ */
  const HADITHS = [
    {
      topic: "النِّيّة",
      words: ["إنَّما", "الأعمالُ", "بِالنِّيَّاتِ", "وإنَّما", "لِكُلِّ", "امرِئٍ", "ما", "نَوى"],
      meaning: "كلُّ عملٍ نقومُ به يُكتَب لنا بحسب نيَّتنا. فإذا نويتَ الخير كُتب لك خير، ولو لم تستطعْ فِعلَه.",
      src: "رواه البخاري ومسلم · صحيح",
    },
    {
      topic: "الكلمةُ الطيِّبة",
      words: ["الكَلِمَةُ", "الطَّيِّبَةُ", "صَدَقَة"],
      meaning: "كلُّ كلمةٍ جميلةٍ تقولها لأمّك أو صديقك أو معلّمك تُكتب لك صدقة، مثل التي تتصدّق بها بالمال.",
      src: "رواه البخاري · صحيح",
    },
    {
      topic: "الابتسامة",
      words: ["تَبَسُّمُكَ", "في", "وَجْهِ", "أخيكَ", "لَكَ", "صَدَقَة"],
      meaning: "ابتسامتُك أمام أخيك المسلم صدقةٌ يُكتَب لك بها أَجر. الإسلام دين البِشر والمرح.",
      src: "رواه الترمذي · صحيح",
    },
    {
      topic: "الغِشّ",
      words: ["مَن", "غَشَّنَا", "فَلَيسَ", "مِنَّا"],
      meaning: "الذي يغُشّ غيره — في البيع أو الاختبار أو غيرها — فعمَلُهُ ليس من أخلاق المسلمين الصالحين.",
      src: "رواه مسلم",
    },
    {
      topic: "حُبُّ الخير",
      words: ["لا", "يُؤمِنُ", "أَحَدُكُم", "حتَّى", "يُحِبَّ", "لِأَخِيهِ", "ما", "يُحِبُّ", "لِنَفسِه"],
      meaning: "الإيمان الكامل أن تُحبّ الخير لأخيك المسلم مثل ما تحبّه لنفسك تماماً، لا أقلّ.",
      src: "رواه البخاري ومسلم · صحيح",
    },
    {
      topic: "أحبُّ الأعمال",
      words: ["أَحَبُّ", "الأَعمالِ", "إلى", "اللهِ", "أَدوَمُها", "وإنْ", "قَلَّ"],
      meaning: "العمل الصالح القليل الذي تواظب عليه كلّ يوم، أحبُّ إلى الله من العمل الكثير الذي تتركه بعد يومين.",
      src: "رواه البخاري ومسلم · صحيح",
    },
    {
      topic: "حُسن الخلق",
      words: ["إنَّ", "اللهَ", "جَميلٌ", "يُحِبُّ", "الجَمال"],
      meaning: "الله جميلٌ في ذاته وأفعاله، وهو يُحبّ من عبده أن يكون نظيفاً جميل المظهر والخُلُق.",
      src: "رواه مسلم",
    },
    {
      topic: "الحياء",
      words: ["الحَياءُ", "شُعبَةٌ", "مِنَ", "الإيمان"],
      meaning: "الحياء — أي الخجل من فِعل القبيح — جزءٌ مهمّ من إيمان المسلم. والحياء يَجعل صاحبه يبتعد عن الكلام السيّئ.",
      src: "رواه البخاري ومسلم · صحيح",
    },
    {
      topic: "بِرّ الأمّ",
      words: ["الجَنَّةُ", "تَحتَ", "أَقدامِ", "الأُمَّهاتِ"],
      meaning: "خِدمة الأم وطاعتها وإسعادها سببٌ مباشر لدخول الجنة. لذلك لا تَغضب أمّك يوماً.",
      src: "رواه النسائي وغيره",
    },
    {
      topic: "النظافة",
      words: ["الطُّهورُ", "شَطْرُ", "الإيمان"],
      meaning: "الوضوء والنظافة والاهتمام بطهارة الجسد والملابس نِصفُ الإيمان عند الله.",
      src: "رواه مسلم",
    },
    {
      topic: "المسلم الحقّ",
      words: ["المُسلِمُ", "مَن", "سَلِمَ", "المُسلِمونَ", "مِن", "لِسانِهِ", "ويَدِهِ"],
      meaning: "المسلم الحقيقي هو الذي لا يؤذي إخوته المسلمين، لا بكلامٍ سيّء ولا بِفعلٍ سيّء.",
      src: "رواه البخاري · صحيح",
    },
    {
      topic: "السلام",
      words: ["أَفشُوا", "السَّلامَ", "بَينَكُم", "تَحابُّوا"],
      meaning: "إذا انتشرت تحيّة «السلام عليكم» بين الناس، انتشر الحبّ والأمان. ابدأ بالسلام مع كل مَن تلقاه.",
      src: "رواه مسلم",
    },
  ];

  /* ============ الحالة ============ */
  const STORAGE_KEY = "mk_hadith_order_v1";
  const STORAGE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  const ROUND_SIZE = 6;
  let round = [];
  let qIdx = 0;
  let attempts = 0;
  let done = 0;
  let points = 0;
  let bagWords = [];      // [{word, originalPos, id}]
  let trackWords = [];    // [{word, originalPos, id}]
  let perQAttempts = 0;
  let drag = null;        // currently dragging info

  /* ============ شُؤون الحقيبة والشريط ============ */
  function shuffle(a) { return a.slice().sort(() => Math.random() - 0.5); }

  function startRound() {
    round = shuffle(HADITHS).slice(0, ROUND_SIZE);
    qIdx = 0;
    attempts = 0;
    done = 0;
    points = 0;
    loadHadith();
    renderProgress();
    updateHUD();
  }

  function loadHadith() {
    if (qIdx >= round.length) { finishRound(); return; }
    const h = round[qIdx];
    perQAttempts = 0;

    // words with ids
    bagWords = shuffle(h.words.map((w, i) => ({ word: w, originalPos: i, id: i })));
    trackWords = [];

    document.getElementById("h-topic").textContent = `حديث ${qIdx + 1}: ${h.topic}`;
    document.getElementById("h-meta").textContent = `عدد الكلمات: ${h.words.length} · ${h.src}`;
    document.getElementById("meaning").classList.remove("open");
    document.getElementById("track").classList.remove("correct");

    renderBag(); renderTrack();
    updateHUD();
    renderProgress();
  }

  function renderBag() {
    const bag = document.getElementById("bag");
    bag.innerHTML = "";
    bagWords.forEach(w => bag.appendChild(makeChip(w, "bag")));
  }

  function renderTrack() {
    const track = document.getElementById("track");
    track.innerHTML = "";
    trackWords.forEach(w => track.appendChild(makeChip(w, "track")));
  }

  function makeChip(w, place) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "word-chip" + (place === "track" ? " in-track" : "");
    el.draggable = true;
    el.dataset.id = w.id;
    el.dataset.place = place;
    el.dataset.pos = w.originalPos;
    el.textContent = w.word;
    el.addEventListener("click", () => {
      if (place === "bag") moveToTrack(w.id);
      else moveToBag(w.id);
    });

    // ---- drag & drop (desktop) ----
    el.addEventListener("dragstart", e => {
      drag = { id: w.id, from: place };
      el.classList.add("dragging");
      try { e.dataTransfer.setData("text/plain", String(w.id)); } catch(_) {}
      e.dataTransfer.effectAllowed = "move";
    });
    el.addEventListener("dragend", () => {
      el.classList.remove("dragging");
      drag = null;
    });

    return el;
  }

  function moveToTrack(id) {
    const idx = bagWords.findIndex(w => w.id === id);
    if (idx < 0) return;
    const [w] = bagWords.splice(idx, 1);
    trackWords.push(w);
    AudioBus.tick(720);
    renderBag(); renderTrack();
  }
  function moveToBag(id) {
    const idx = trackWords.findIndex(w => w.id === id);
    if (idx < 0) return;
    const [w] = trackWords.splice(idx, 1);
    bagWords.push(w);
    AudioBus.tick(420);
    renderBag(); renderTrack();
  }

  /* drag-drop zones */
  ["track","bag"].forEach(zoneId => {
    const z = document.getElementById(zoneId);
    z.addEventListener("dragover", e => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; });
    z.addEventListener("drop", e => {
      e.preventDefault();
      if (!drag) return;
      const id = drag.id;
      if (zoneId === "track" && drag.from === "bag") moveToTrack(id);
      else if (zoneId === "bag" && drag.from === "track") moveToBag(id);
    });
  });

  /* ============ التحقّق ============ */
  function checkOrder() {
    const h = round[qIdx];
    if (trackWords.length !== h.words.length) {
      shakeTrack();
      AudioBus.fail();
      flashTip("ضع كلَّ الكلمات في الشريط أوّلاً.");
      return;
    }
    attempts++; perQAttempts++;
    const isRight = trackWords.every((w, i) => w.originalPos === i);
    if (isRight) {
      const track = document.getElementById("track");
      track.classList.add("correct");
      // pulse each chip
      [...track.querySelectorAll(".word-chip")].forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("correct");
          el.innerHTML = `<span class="pos">${i+1}</span>${el.textContent}`;
        }, i * 80);
      });
      const gainedPoints = Math.max(1, 5 - perQAttempts);
      points += gainedPoints;
      done++;
      AudioBus.success();
      Particles.fire(60, { colors: ["#CFE3F2","#A8DDF0","#FFE9A8"] });

      // أظهر المعنى
      document.getElementById("meaning-text").textContent = h.meaning;
      document.getElementById("meaning").classList.add("open");

      updateHUD();
      renderProgress();

      setTimeout(() => {
        qIdx++;
        loadHadith();
      }, 3200);
    } else {
      shakeTrack();
      AudioBus.fail();
      flashTip("الترتيب غير صحيح، حاول مرّةً أخرى.");
      updateHUD();
    }
  }

  function shakeTrack() {
    const t = document.getElementById("track");
    t.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }],
      { duration: 360 }
    );
  }

  function flashTip(msg) {
    let t = document.getElementById("h-flash");
    if (!t) {
      t = document.createElement("div");
      t.id = "h-flash";
      t.style.cssText = "position:fixed; top:24px; right:50%; transform:translateX(50%); background:var(--ink); color:#FBF6EC; padding:10px 18px; border-radius:999px; font-weight:700; font-size:13px; z-index:200; box-shadow: var(--shadow-lg); transition: opacity 0.3s ease;";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = "1";
    clearTimeout(t._h);
    t._h = setTimeout(() => t.style.opacity = "0", 2500);
  }

  /* ============ تلميح: ضع كلمة صحيحة ============ */
  function placeOneCorrect() {
    const h = round[qIdx];
    const needPos = trackWords.length;
    // Find correct word for that pos (the one with originalPos === needPos)
    const correct = bagWords.find(w => w.originalPos === needPos);
    if (correct) {
      moveToTrack(correct.id);
      attempts++;
      perQAttempts++;
      AudioBus.pop();
      updateHUD();
    } else {
      // It's already in track but wrong position. Find it and move to bag first
      const inTrack = trackWords.find(w => w.originalPos === needPos);
      if (inTrack) {
        moveToBag(inTrack.id);
      } else {
        flashTip("جميع الكلمات في الشريط، اضغط تحقَّق.");
      }
    }
  }

  /* ============ اخلِط ============ */
  function shuffleBag() {
    bagWords = shuffle(bagWords);
    renderBag();
    AudioBus.tick(540);
  }

  /* ============ إعادة ============ */
  function clearTrack() {
    bagWords = shuffle([...bagWords, ...trackWords]);
    trackWords = [];
    renderBag(); renderTrack();
    AudioBus.tick(420);
  }

  /* ============ HUD ============ */
  function updateHUD() {
    document.getElementById("h-idx").textContent = qIdx + 1;
    document.getElementById("h-attempts").textContent = attempts;
    document.getElementById("h-done").textContent = done;
    document.getElementById("h-points").textContent = points;
    document.getElementById("round-pill").textContent = `${done}/${ROUND_SIZE}`;
    document.getElementById("best").textContent =
      STORAGE.best > 0 ? `${STORAGE.best} نقطة` : "—";
  }

  function renderProgress() {
    const list = document.getElementById("progress");
    list.innerHTML = "";
    round.forEach((h, i) => {
      const d = document.createElement("div");
      const cls = i < qIdx ? "done" : (i === qIdx ? "current" : "");
      d.className = "h-prog-item " + cls;
      d.innerHTML = `<span class="idx">${i+1}</span><span>${h.topic}</span>`;
      list.appendChild(d);
    });
  }

  /* ============ النهاية ============ */
  function finishRound() {
    if (points > STORAGE.best) STORAGE.best = points;
    STORAGE.plays++;
    Storage.set(STORAGE_KEY, STORAGE);
    Particles.fire(140);
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  /* ============ ربط ============ */
  document.getElementById("check-btn").addEventListener("click", checkOrder);
  document.getElementById("hint-btn").addEventListener("click", placeOneCorrect);
  document.getElementById("shuffle-btn").addEventListener("click", shuffleBag);
  document.getElementById("clear-btn").addEventListener("click", clearTrack);

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

  /* ============ تشغيل ============ */
  startRound();
})();
