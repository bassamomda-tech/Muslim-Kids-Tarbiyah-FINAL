/* ============================================================
   WHAT IF — ماذا لو؟
   Branching scenarios: root → 2 choices → 2 endings each (4 endings)
   ============================================================ */

(function () {
  "use strict";

  const STORIES = [
    {
      id: "wallet",
      title: "المَحفَظَة الضّائِعَة",
      sub: "أَمانَةٌ في الطَّريق",
      ic: "💼",
      nodes: {
        root: {
          label: "المَوقِف",
          text: "في طَريقِكَ إلى المَدرَسَة وَجَدتَ مَحفَظَةً سَقَطَت مِن شَخصٍ ما، فيها مالٌ وَبِطاقَةٌ شَخصيَّة. لَم يَرَكَ أَحَد. ماذا تَفعَل؟",
          choices: [
            { key: "A", text: "آخُذُها مَعي بِهُدوء وأَفكِّر لاحِقاً." },
            { key: "B", text: "أَفتَحُها لِأَعرِفَ صاحِبَها." },
          ],
        },
        A: {
          label: "بَعدَ خُطوَتَين",
          text: "وَضَعتَ المَحفَظَةَ في حَقيبَتِك. صَديقُكَ لَحِقَ بِك وسَأَلَك: «ما هذا الَّذي تُخفيه؟»",
          choices: [
            { key: "AA", text: "أَعتَرِفُ لَهُ وأَطلُبُ مُساعَدَتَهُ في إيصالِها." },
            { key: "AB", text: "أَكذِبُ وأَقول: لا شَيء، حاجَةٌ خاصَّة." },
          ],
        },
        B: {
          label: "وَجَدتَ بِطاقَة",
          text: "البِطاقَةُ تَحمِلُ اسماً وَرَقمَ هاتِف. الشَّمسُ تَرتَفِع، وأَنتَ مُتَأَخِّر قَليلاً.",
          choices: [
            { key: "BA", text: "أَتَّصِلُ بِالرَّقمِ فَوراً مِن هاتِفِ والِدي." },
            { key: "BB", text: "أَترُكُ المَحفَظَةَ تَحتَ شَجَرَةٍ، لَعَلَّ صاحِبَها يَجِدُها." },
          ],
        },
        AA: {
          ending: true,
          kind: "good",
          title: "صَديقانِ على الصِّدق",
          body: "اِتَّصَلتُما بِصاحِبِها، فَفَرِحَ وَدَعا لَكُما. اِكتَشَفتُما أَنَّ الصِّدقَ يُسهِّلُ ما كانَ يَبدو ثَقيلاً.",
          quote: "«إنَّ الصِّدقَ يَهدي إلى البِرّ» — البخاري ومسلم",
        },
        AB: {
          ending: true,
          kind: "bad",
          title: "ثِقلٌ في الصَّدر",
          body: "نَجاتٌ ظاهِرَة، لكِنَّكَ بِتَّ ساهِراً تُفَكِّرُ بِصاحِبِها. الكَذبَةُ الواحِدَةُ تَطلُبُ أُختاً لَها، وَهكَذا.",
          quote: "«إيّاكُم والكَذِبَ فإنَّ الكَذِبَ يَهدي إلى الفُجور» — البخاري ومسلم",
        },
        BA: {
          ending: true,
          kind: "excellent",
          title: "أَمينٌ صَغيرٌ كَبير",
          body: "حَضَرَ صاحِبُها وَشَكَرَكَ بِدَموع. عَرَضَ مُكافَأَةً فَقُلتَ: «هذا واجِب». رَأى فيكَ الكَبيرَ قَبلَ أن تَكبَر.",
          quote: "«المُسلِمُ مَن سَلِمَ المُسلِمونَ مِن لِسانِهِ وَيَدِه» — البخاري ومسلم",
        },
        BB: {
          ending: true,
          kind: "neutral",
          title: "نِيَّةٌ بِلا خُطوَة",
          body: "أَخفَيتَها بِنيَّةٍ طَيِّبَة، لكِنَّ مَن وَجَدَها بَعدَكَ قَد لا يَكونُ مِثلَكَ. النِّيَّةُ الحَسَنَةُ تَحتاجُ يَداً تُحَقِّقُها.",
          quote: "«مَن دَلَّ على خَيرٍ فَلَهُ مِثلُ أَجرِ فاعِلِه» — مسلم",
        },
      },
    },

    {
      id: "exam",
      title: "إشارَةٌ في الامتِحان",
      sub: "صَديقٌ في وَرطَة",
      ic: "📝",
      nodes: {
        root: {
          label: "المَوقِف",
          text: "في الامتِحان، صَديقُكَ يَنظُرُ إليكَ بِعَينَين قَلِقَتَين، يُومِئُ بِرَأسِه طالِباً أن تُريَهُ إِجابَتَك. المُعَلِّمَةُ ظَهرُها لَكُما.",
          choices: [
            { key: "A", text: "أَرفَعُ وَرَقَتي قَليلاً لِيَرى." },
            { key: "B", text: "أَهُزُّ رَأسي بِأَدَب: لا، لاحِقاً." },
          ],
        },
        A: {
          label: "تَطَوُّر",
          text: "اِنتَبَهَتِ المُعَلِّمَةُ لِحَرَكَةِ يَدِكُما، وَجاءَت تَسأَلُكُما: «ما الَّذي يَحدُث؟»",
          choices: [
            { key: "AA", text: "أَعتَرِفُ بِأَنّي ساعَدتُهُ، وأَتحَمَّلُ النَّتيجَة." },
            { key: "AB", text: "أَتَّهِمُهُ وَحدَه، فَهوَ مَن طَلَب." },
          ],
        },
        B: {
          label: "بَعدَ الامتِحان",
          text: "خَرَجَ صَديقُكَ مُحبَطاً وزَعِلاً، يُلَوِّحُ لَكَ بِيَدِه. ماذا تَفعَل؟",
          choices: [
            { key: "BA", text: "أَدعوهُ لِمُذاكَرَةٍ مَعي قَبلَ الامتِحانِ القادِم." },
            { key: "BB", text: "أَتَجاهَلُه، فَهوَ سَبَبُ زَعَلِه." },
          ],
        },
        AA: {
          ending: true,
          kind: "good",
          title: "صِدقٌ يَفتَحُ باباً",
          body: "تَحَدَّثَت مَعَكُما المُعَلِّمَةُ، وعاقَبَتكُما بِواجِبٍ إِضافي. لكِنَّها قالَت: «أَنا فَخورَةٌ بِصِدقِك». تَعَلَّمتَ أنَّ الاعتِرافَ يُخَفِّفُ الحِملَ ولا يُثَقِّلُه.",
          quote: "«التّائِبُ مِنَ الذَّنبِ كَمَن لا ذَنبَ لَه» — ابن ماجه",
        },
        AB: {
          ending: true,
          kind: "bad",
          title: "خِيانَةُ صَديق",
          body: "صَديقُكَ نَظَرَ إليكَ بِخَيبَة، وَفَقَدَ ثِقَتَهُ بِك. صِرتَ شَريكاً في خَطإٍ ثُمَّ شاهِداً عَلَيهِ كاذِباً. الخَيرُ يَهدِم نَفسَهُ بِالظُّلم.",
          quote: "«الظُّلمُ ظُلُماتٌ يَومَ القِيامَة» — البخاري ومسلم",
        },
        BA: {
          ending: true,
          kind: "excellent",
          title: "نَصيحَةٌ لا غِشّ",
          body: "ذاكَرتُما مَعاً، فَنَجَحَ في الامتِحانِ التّالي بِنَفسِه. الفَرقُ بَينَ المُساعَدَةِ والغِشّ: الأُولى تَبني، والثّاني يَهدِم.",
          quote: "«الدّينُ النَّصيحَة» — مسلم",
        },
        BB: {
          ending: true,
          kind: "neutral",
          title: "نَجَوتَ وَحدَك",
          body: "أَنتَ بَريءٌ مِنَ الغِشّ، لكِنَّكَ تَرَكتَ صَديقاً يَحتاجُك. المُؤمِنُ مِرآةُ أَخيه، وَلَيسَ غَريباً عَنه.",
          quote: "«المُؤمِنُ لِلمُؤمِنِ كَالبُنيانِ يَشُدُّ بَعضُهُ بَعضاً» — البخاري ومسلم",
        },
      },
    },

    {
      id: "old-man",
      title: "كيسُ الرَّجُلِ الكَبير",
      sub: "مُساعَدَةٌ في وَقتٍ ضَيِّق",
      ic: "🤲",
      nodes: {
        root: {
          label: "المَوقِف",
          text: "وَأَنتَ في طَريقِك مِنَ المَسجِد، رَأَيتَ رَجُلاً كَبيراً يَحمِلُ كيساً ثَقيلاً ويَلهَث. والِدُكَ يَنتَظِرُكَ على الغَداء، وَقَد تَأَخَّرت.",
          choices: [
            { key: "A", text: "أُسرِعُ إليه: «دَعني أُساعِدُك يا عَمّ»." },
            { key: "B", text: "أُلوِّحُ لَهُ بِالعُذرِ وأُسرِعُ لِلبَيت." },
          ],
        },
        A: {
          label: "وَصَلتَ مُتَأَخِّراً",
          text: "أَوصَلتَ الكيسَ إلى بَيتِه، ثُمَّ رَكَضتَ. والِدُكَ في البَيتِ غاضِبٌ مِنَ التَّأخير. ماذا تَقول؟",
          choices: [
            { key: "AA", text: "أَقولُ الصِّدقَ بِبَساطَة، حَتّى لَو غَضِب." },
            { key: "AB", text: "أَقولُ: المُعَلِّمَةُ أَخَّرَتنا، لا أَكثَر." },
          ],
        },
        B: {
          label: "في البَيت",
          text: "وَصَلتَ في الوَقت. لكِنَّ صورَةَ الرَّجُلِ ما زالَت في رَأسِك. ماذا تَفعَل؟",
          choices: [
            { key: "BA", text: "أَعودُ بَعدَ الغَداءِ لِأَطمَئِنَّ عَلَيه." },
            { key: "BB", text: "أَنسى الأَمر، لَعَلَّ غَيري ساعَدَه." },
          ],
        },
        AA: {
          ending: true,
          kind: "excellent",
          title: "إِحسانٌ بِصِدق",
          body: "والِدُكَ سَكَتَ ثُمَّ ابتَسَم. قال: «إن كانَت هذه عُذرَك، فَعُذرٌ مَقبول. عُد إليه غَداً ليَسأَل عَنه». مَلَأتَ يَومَكَ بِأَجرَين.",
          quote: "«ما نَقَصَت صَدَقَةٌ مِن مال» — مسلم",
        },
        AB: {
          ending: true,
          kind: "bad",
          title: "كَذبَةٌ أَضاعَت إِحساناً",
          body: "صَدَّقَكَ والِدُكَ، لكِنَّكَ شَعَرتَ بِشَيءٍ يَنزِفُ في صَدرِك. كَأَنَّكَ مَحَوتَ أَجرَ المُساعَدَةِ بِكَذبَةٍ صَغيرَة.",
          quote: "«إنَّما الأَعمالُ بِالنِّيّات» — البخاري ومسلم",
        },
        BA: {
          ending: true,
          kind: "good",
          title: "تَدارَكتَ الخَيرَ",
          body: "عُدتَ فَوَجَدتَهُ يَجلِسُ تَحتَ شَجَرَةٍ. اِبتَسَمَ وَقالَ: «اللهُ يَكرِمُك». لا تَتأَخَّر عَنِ الخَيرِ مَرَّتَين، فالخَطوَةُ التّالِيَةُ قَد لا تَلحَق.",
          quote: "«اِغتَنِم خَمساً قَبلَ خَمس» — الحاكم",
        },
        BB: {
          ending: true,
          kind: "neutral",
          title: "نَجاةٌ مِن غَيرِ جائِزَة",
          body: "نَسيتَه، لكِنَّ اللهَ لا يَنسى. لَستَ آثِماً، لَكِنَّكَ فَوَّتَّ بابَ خَيرٍ كانَ مَفتوحاً لَك.",
          quote: "«لا تَحقِرَنَّ مِنَ المَعروفِ شَيئاً» — مسلم",
        },
      },
    },
  ];

  const STORAGE_KEY = "mk_whatif_v1";
  const STORE = Storage.get(STORAGE_KEY, { bestPoints: 0, rounds: 0, endingsBy: {} });

  const KIND_LABEL = {
    excellent: "نِهايَةٌ مُمتازَة",
    good: "نِهايَةٌ حَسَنَة",
    neutral: "نِهايَةٌ مُتَوَسِّطَة",
    bad: "نِهايَةٌ مُؤسِفَة",
  };
  const KIND_ICON = {
    excellent: "✦",
    good: "✓",
    neutral: "·",
    bad: "✕",
  };
  const KIND_POINTS = {
    excellent: 100,
    good: 70,
    neutral: 40,
    bad: 20,
  };

  let currentStory = STORIES[0];
  let currentNode = "root";
  let history = [];          // node ids in path
  let collected = {};        // storyId -> Set of leaf ids reached
  let totalPoints = 0;

  function init() {
    // Migrate STORE.endingsBy into collected
    STORIES.forEach(s => {
      collected[s.id] = new Set(STORE.endingsBy[s.id] || []);
    });
    totalPoints = STORE.bestPoints || 0;
    buildStoryPicker();
    chooseStory(STORIES[0]);
  }

  function buildStoryPicker() {
    const root = document.getElementById("wi-story-picker");
    root.innerHTML = "";
    STORIES.forEach((s, i) => {
      const card = document.createElement("button");
      card.className = "wi-story-card" + (currentStory === s ? " active" : "");
      const endings = countEndings(s);
      const done = (collected[s.id] || new Set()).size;
      const dotsHTML = Array.from({ length: endings }, (_, k) => `<span class="${k < done ? "done" : ""}"></span>`).join("");
      card.innerHTML = `
        <span class="ic">${s.ic}</span>
        <div class="meta">
          <strong>${s.title}</strong>
          <small>${s.sub}</small>
          <span class="endings-mini">${dotsHTML}</span>
        </div>
      `;
      card.addEventListener("click", () => chooseStory(s));
      root.appendChild(card);
    });
  }

  function countEndings(story) {
    return Object.values(story.nodes).filter(n => n.ending).length;
  }

  function chooseStory(story) {
    currentStory = story;
    currentNode = "root";
    history = ["root"];
    document.querySelectorAll(".wi-story-card").forEach((el, i) => {
      el.classList.toggle("active", STORIES[i] === story);
    });
    document.getElementById("story-title").textContent = story.title;
    document.getElementById("story-sub").textContent = story.sub;
    document.getElementById("story-ic").textContent = story.ic;
    document.getElementById("wi-story-num").innerHTML = toArDigit(STORIES.indexOf(story) + 1) + `<small>/${STORIES.length}</small>`;
    renderNode();
    renderEndings();
    document.getElementById("btn-next-story").hidden = true;
  }

  function toArDigit(n) {
    return String(n).replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
  }

  function renderNode() {
    const node = currentStory.nodes[currentNode];
    const sceneEl = document.getElementById("wi-scene");
    const choicesEl = document.getElementById("wi-choices");
    const outcomeEl = document.getElementById("wi-outcome");

    if (!node) return;

    // Breadcrumb
    const bc = document.getElementById("breadcrumb");
    bc.innerHTML = "";
    history.forEach((h, i) => {
      const dot = document.createElement("span");
      dot.className = "step" + (i === history.length - 1 ? " active" : " past");
      bc.appendChild(dot);
      if (i < history.length - 1) {
        const a = document.createElement("span");
        a.className = "arrow";
        a.textContent = "›";
        bc.appendChild(a);
      }
    });
    document.getElementById("wi-depth").textContent = toArDigit(history.length);

    if (node.ending) {
      // Hide choices, show outcome
      sceneEl.hidden = true;
      choicesEl.innerHTML = "";
      outcomeEl.hidden = false;
      outcomeEl.className = "wi-outcome kind-" + node.kind;
      outcomeEl.innerHTML = `
        <div class="o-head">
          <div class="o-icon">${KIND_ICON[node.kind]}</div>
          <div>
            <div class="o-label">${KIND_LABEL[node.kind]}</div>
            <div class="o-title">${node.title}</div>
          </div>
        </div>
        <div class="o-body">${node.body}</div>
        <div class="o-quote">${node.quote}</div>
      `;

      // Award if first time
      const set = collected[currentStory.id] || (collected[currentStory.id] = new Set());
      if (!set.has(currentNode)) {
        set.add(currentNode);
        totalPoints += KIND_POINTS[node.kind] || 0;
        Particles.fire(node.kind === "excellent" ? 100 : 50, {
          colors: node.kind === "bad"
            ? ["#FFD9C2","#E8A5A5"]
            : ["#CDEBD7","#DCE9DC","#FFE9A8","#E0D5F2"],
        });
        if (node.kind === "excellent" || node.kind === "good") AudioBus.success();
        else if (node.kind === "bad") AudioBus.fail();
        else AudioBus.tone(540, 0.18, "sine", 0.06);
        persist();
        buildStoryPicker();
      }

      renderEndings();
      updateHUD();

      // Show "next story" if all endings collected for this story
      const all = countEndings(currentStory);
      if (set.size === all) {
        document.getElementById("btn-next-story").hidden = false;
        setTimeout(() => maybeFinishStory(), 800);
      }
    } else {
      sceneEl.hidden = false;
      outcomeEl.hidden = true;
      document.getElementById("scene-label").textContent = node.label || "المَشهَد";
      document.getElementById("scene-text").textContent = node.text;
      choicesEl.innerHTML = "";
      const keys = ["أ", "ب", "ج"];
      node.choices.forEach((c, i) => {
        const btn = document.createElement("button");
        btn.className = "wi-choice";
        btn.innerHTML = `
          <span class="key">خِيار ${keys[i] || (i+1)}</span>
          <span class="text">${c.text}</span>
          <span class="arrow">›</span>
        `;
        btn.addEventListener("click", () => onChoice(c.key));
        choicesEl.appendChild(btn);
      });
      AudioBus.tone(620, 0.12, "sine", 0.04);
    }
    updateHUD();
  }

  function onChoice(key) {
    history.push(key);
    currentNode = key;
    AudioBus.pop();
    renderNode();
  }

  function goBack() {
    if (history.length <= 1) return;
    history.pop();
    currentNode = history[history.length - 1];
    AudioBus.tick(540);
    renderNode();
  }

  function restartStory() {
    history = ["root"];
    currentNode = "root";
    AudioBus.tick(720);
    renderNode();
  }

  function renderEndings() {
    const root = document.getElementById("endings-list");
    root.innerHTML = "";
    const nodes = Object.entries(currentStory.nodes).filter(([, n]) => n.ending);
    const set = collected[currentStory.id] || new Set();
    nodes.forEach(([key, n]) => {
      const found = set.has(key);
      const row = document.createElement("div");
      row.className = `wi-end-row kind-${n.kind}` + (found ? " found" : "");
      row.innerHTML = `
        <span class="seal">${found ? KIND_ICON[n.kind] : "?"}</span>
        <span class="nm">${found ? n.title : "نِهايَةٌ مَخفيَّة"}<small>${found ? KIND_LABEL[n.kind] : "لَم تَكتَشِفها بَعد"}</small></span>
      `;
      root.appendChild(row);
    });
    document.getElementById("end-pill").textContent = `${set.size} / ${nodes.length}`;
    document.getElementById("wi-endings").textContent = set.size;
  }

  function updateHUD() {
    document.getElementById("wi-points").textContent = totalPoints;
    document.getElementById("best").textContent = STORE.bestPoints > 0 ? `${STORE.bestPoints} نقطة` : "—";
  }

  function persist() {
    STORE.endingsBy = {};
    STORIES.forEach(s => { STORE.endingsBy[s.id] = Array.from(collected[s.id] || []); });
    if (totalPoints > (STORE.bestPoints || 0)) STORE.bestPoints = totalPoints;
    STORE.rounds = (STORE.rounds || 0) + 0;
    Storage.set(STORAGE_KEY, STORE);
  }

  function maybeFinishStory() {
    const allDone = STORIES.every(s => (collected[s.id] || new Set()).size === countEndings(s));
    if (allDone) {
      STORE.rounds = (STORE.rounds || 0) + 1;
      Storage.set(STORAGE_KEY, STORE);
      const lines = STORIES.map(s =>
        `<div style="display:flex; gap:8px; padding:5px 0; font-size:13px; border-bottom:1px dashed var(--line);">
          <span style="font-size:18px;">${s.ic}</span>
          <span><strong>${s.title}</strong> · جَميعُ النِّهايات (${countEndings(s)})</span>
        </div>`
      ).join("");
      document.getElementById("done-summary").innerHTML = `
        <div style="text-align:center; margin-bottom: var(--s-3);">
          <span style="padding:6px 14px; background:var(--brand); color:#fff; border-radius:var(--r-pill); font-weight:800; font-size:13px;">+${totalPoints} نَقَطَة</span>
        </div>
        ${lines}
        <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 12px; line-height: 1.7;">
          القَرارُ خُطوَة، والخُطوَةُ مَصير. مَن جَرَّبَ الطُّرُقَ كُلَّها هنا، عَرَفَ أَقصَرَها إلى رِضا الله.
        </div>
      `;
      setTimeout(() => Modal.open("done-modal"), 600);
    }
  }

  function nextStory() {
    const i = STORIES.indexOf(currentStory);
    const next = STORIES[(i + 1) % STORIES.length];
    chooseStory(next);
  }

  /* ============ Bind ============ */
  document.getElementById("btn-back").addEventListener("click", goBack);
  document.getElementById("btn-restart-story").addEventListener("click", restartStory);
  document.getElementById("btn-next-story").addEventListener("click", nextStory);
  document.getElementById("done-next").addEventListener("click", () => {
    Modal.close("done-modal"); setTimeout(nextStory, 300);
  });
  Modal.bindClose("done-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  init();
})();
