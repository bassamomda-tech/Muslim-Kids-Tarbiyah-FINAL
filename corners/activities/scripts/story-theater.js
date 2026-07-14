/* ============================================================
   75 · فرسان القصص — مسرح متحرّك لقصص القدوات + سؤال متابعة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "فرسان القصص", en: "Story Knights" },
    title:       { ar: "فرسان القصص", en: "Story Knights Theater" },
    desc:        { ar: "مسرحٌ صغيرٌ لقصص القدوات! شاهد المشاهد تتحرّك أمامك مشهداً بعد مشهد، وفي كل قصة سؤالٌ لطيف يتأكّد أنك تابعت البطل جيداً.", en: "A little theater of role-model stories! Watch the scenes move before you one by one, and in each story a gentle question checks you followed the hero." },
    nextBtn:     { ar: "المشهد التالي ▶", en: "Next scene ▶" },
    answerBtn:   { ar: "أجب", en: "Answer" },
    statStory:   { ar: "القصة", en: "Story" },
    statStars:   { ar: "نجوم المتابعة", en: "Attention stars" },
    sideTitle:   { ar: "قصص القدوات", en: "Role-model stories" },
    sidePill:    { ar: "4 قصص", en: "4 stories" },
    tip:         { ar: "القصص خيرُ معلّم للأطفال. كان القرآن يقصّ علينا أخبار الأنبياء لنأخذ العبرة: ﴿لقد كان في قصصهم عبرة لأولي الألباب﴾.", en: "Stories are the best teacher for children. The Quran narrated the prophets' accounts so we take the lesson: \"In their stories is a lesson for people of understanding.\"" },
    winEyebrow:  { ar: "أُسدل الستار", en: "Curtain down" },
    winTitle:    { ar: "شاهدتَ كل القصص!", en: "You watched every story!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "شاهد ثانيةً", en: "Watch again" },
  };

  /* القصص: مشاهد (بطل يتحرك + مؤثرات + تعليق) + سؤال ختامي */
  const STORIES = [
    { title: { ar: "الغلام والراهب", en: "The Boy and the Monk" },
      hero: "🧒", bg: "linear-gradient(180deg,#FBE3D0,#F3C9B3 60%,#C98A6B)",
      scenes: [
        { actorX: "12%", flip: false, props: [{ e: "🧙", x: "70%", y: "35%" }], cap: { ar: "كان غلامٌ ذكيّ يذهب لراهبٍ مؤمن ليتعلّم منه التوحيد سرّاً.", en: "A clever boy would secretly visit a believing monk to learn about the Oneness of God." } },
        { actorX: "40%", flip: false, props: [{ e: "🦁", x: "78%", y: "55%" }], cap: { ar: "وفي طريقه وجد وحشاً يمنع الناس، فدعا الله فقتله بحجر — فعلم أن أمر الله أعظم.", en: "On his way he found a beast blocking people; he prayed and killed it with a stone — knowing God's cause is greater." } },
        { actorX: "66%", flip: false, props: [{ e: "🙏", x: "20%", y: "45%" }], cap: { ar: "صار الغلام يشفي المرضى بإذن الله ويقول: إنما يشفي الله وحده.", en: "The boy began healing the sick by God's leave, saying: only Allah heals." } },
        { actorX: "50%", flip: false, props: [{ e: "👑", x: "82%", y: "30%" }], cap: { ar: "غضب الملك الظالم وحاول قتله، لكن إيمان الغلام أدخل شعباً كاملاً في دين الله.", en: "The unjust king raged and tried to kill him, but the boy's faith brought a whole people to God." } },
      ],
      q: { ar: "ماذا كان يقول الغلام عندما يشفى المرضى؟", en: "What did the boy say when the sick were healed?" },
      opts: [ { ar: "إنما يشفي الله وحده", en: "Only Allah heals", ok: true }, { ar: "أنا الذي أشفيكم", en: "I am the one who heals you" }, { ar: "الراهب هو الشافي", en: "The monk is the healer" } ] },
    { title: { ar: "أويس القرني البارّ", en: "Uways al-Qarani the Devoted" },
      hero: "🧑", bg: "linear-gradient(180deg,#E8E0F0,#D0C4E0 60%,#9A8AB0)",
      scenes: [
        { actorX: "16%", flip: false, props: [{ e: "🐫", x: "72%", y: "55%" }], cap: { ar: "أويسٌ راعٍ من اليمن، آمن بالنبي ﷺ لكنه لم يره قط.", en: "Uways, a shepherd from Yemen, believed in the Prophet ﷺ but never met him." } },
        { actorX: "42%", flip: false, props: [{ e: "👵", x: "78%", y: "42%" }], cap: { ar: "منعه برّ أمه المريضة من السفر لرؤية النبي ﷺ — فآثر رضاها.", en: "Caring for his sick mother kept him from traveling to see the Prophet ﷺ — he chose her contentment." } },
        { actorX: "64%", flip: false, props: [{ e: "💬", x: "20%", y: "35%" }], cap: { ar: "أخبر النبيُّ ﷺ عمرَ وعليّاً أن يطلبا منه الدعاء إن لقياه — لعظيم مكانته.", en: "The Prophet ﷺ told Umar and Ali to ask Uways for du'a if they met him — for his great rank." } },
      ],
      q: { ar: "لماذا لم يسافر أويس لرؤية النبي ﷺ؟", en: "Why didn't Uways travel to see the Prophet ﷺ?" },
      opts: [ { ar: "لبرّه بأمه المريضة", en: "Out of devotion to his sick mother", ok: true }, { ar: "لأنه لم يؤمن به", en: "Because he didn't believe" }, { ar: "لأنه كان خائفاً", en: "Because he was afraid" } ] },
    { title: { ar: "نملة سليمان", en: "The Ant of Sulayman" },
      hero: "🧑‍✈️", bg: "linear-gradient(180deg,#FDF0C8,#F0DA9A 60%,#C0A860)",
      scenes: [
        { actorX: "18%", flip: false, props: [{ e: "🐎", x: "60%", y: "40%" }, { e: "🦅", x: "80%", y: "22%" }], cap: { ar: "سليمان عليه السلام نبيٌّ مَلِك، سخّر الله له الريح والجنّ والطير.", en: "Sulayman (peace be upon him), a prophet-king; God subjected the wind, jinn, and birds to him." } },
        { actorX: "40%", flip: false, props: [{ e: "🐜", x: "72%", y: "70%" }], cap: { ar: "مرّ جيشه بوادِ النمل، فقالت نملة: ادخلوا مساكنكم لا يحطمنّكم سليمان وجنوده.", en: "His army passed the valley of ants; an ant said: enter your homes lest Sulayman and his troops crush you." } },
        { actorX: "56%", flip: false, props: [{ e: "😊", x: "22%", y: "30%" }], cap: { ar: "فتبسّم سليمان ضاحكاً من قولها، وشكر الله على نعمة فهم الكلام.", en: "Sulayman smiled at her words and thanked God for the gift of understanding speech." } },
      ],
      q: { ar: "بماذا نصحت النملةُ النملَ؟", en: "What did the ant advise the ants?" },
      opts: [ { ar: "ادخلوا مساكنكم", en: "Enter your homes", ok: true }, { ar: "هاجموا الجيش", en: "Attack the army" }, { ar: "ناموا في الطريق", en: "Sleep on the road" } ] },
    { title: { ar: "أصحاب الفيل", en: "The People of the Elephant" },
      hero: "🧍", bg: "linear-gradient(180deg,#D8E8F0,#B8D0E0 60%,#7098B0)",
      scenes: [
        { actorX: "20%", flip: false, props: [{ e: "🐘", x: "68%", y: "55%" }, { e: "🕋", x: "18%", y: "40%" }], cap: { ar: "جاء أبرهة بجيشٍ وفيلٍ ضخم ليهدم الكعبة المشرّفة.", en: "Abraha came with an army and a huge elephant to destroy the Ka'bah." } },
        { actorX: "35%", flip: false, props: [{ e: "🐘", x: "55%", y: "58%" }], cap: { ar: "لكن الفيل برك ورفض التقدّم نحو بيت الله مهما ضربوه.", en: "But the elephant knelt and refused to advance toward God's House, however they struck it." } },
        { actorX: "30%", flip: false, props: [{ e: "🐦", x: "40%", y: "18%" }, { e: "🐦", x: "62%", y: "24%" }, { e: "🐦", x: "78%", y: "16%" }], cap: { ar: "أرسل الله طيراً أبابيل ترميهم بحجارةٍ من سجّيل فجعلهم كعصفٍ مأكول.", en: "God sent flocks of birds pelting them with stones of baked clay, leaving them like devoured chaff." } },
      ],
      q: { ar: "بماذا حمى الله الكعبة من جيش الفيل؟", en: "How did God protect the Ka'bah from the elephant army?" },
      opts: [ { ar: "بطيرٍ يرمي حجارة من سجّيل", en: "With birds pelting stones of baked clay", ok: true }, { ar: "بجيشٍ من الناس", en: "With an army of people" }, { ar: "بريحٍ شديدة", en: "With a fierce wind" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let sIdx = 0, scene = 0, stars = 0, answering = false;

  function renderList() {
    const L = Lang.current();
    $("st-list").innerHTML = STORIES.map((s, i) => `
      <div class="dhikr-item ${i < sIdx ? "is-highlighted" : ""}">
        <span class="dhikr-swatch" style="background:${i < sIdx ? "var(--coral)" : "var(--bg-soft)"}"></span>
        <span class="dhikr-text" style="font-size:13px;">${s.title[L]}</span>
        <span class="dhikr-count">${i < sIdx ? "✓" : i + 1}</span>
      </div>`).join("");
  }

  function renderDots() {
    const st = STORIES[sIdx];
    $("st-dots").innerHTML = st.scenes.map((_, i) =>
      `<span class="bead ${i <= scene ? "on" : ""}" style="width:10px;height:10px;border-radius:50%;background:${i <= scene ? "var(--coral-ink)" : "var(--bg-soft)"};border:1px solid var(--line);display:inline-block;"></span>`).join("");
  }

  function renderScene() {
    const L = Lang.current();
    const st = STORIES[sIdx];
    const sc = st.scenes[scene];
    const stage = $("st-stage");
    stage.style.background = st.bg;
    stage.innerHTML = `
      <div class="st-actor" id="st-hero" style="left:${sc.actorX}; transform:scaleX(${sc.flip ? -1 : 1});">${st.hero}</div>
      ${sc.props.map(p => `<span class="st-prop" style="left:${p.x}; top:${p.y}; font-size:40px;">${p.e}</span>`).join("")}
      <div class="st-caption">${sc.cap[L]}</div>`;
    AudioBus.tick(500 + scene * 60);
    $("stat-story").textContent = `${sIdx + 1}/${STORIES.length}`;
    $("st-next").textContent = (scene >= st.scenes.length - 1) ? (L === "ar" ? "سؤال المتابعة ❓" : "Follow-up ❓") : I18N.nextBtn[L];
    renderDots(); renderList();
  }

  function next() {
    if (answering) return;
    const st = STORIES[sIdx];
    if (scene < st.scenes.length - 1) { scene++; renderScene(); }
    else askQuestion();
  }

  function askQuestion() {
    answering = true;
    const L = Lang.current();
    const st = STORIES[sIdx];
    const opts = st.opts.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
    $("st-stage").innerHTML = `
      <div style="position:absolute; inset:0; background:rgba(43,36,56,0.72); display:grid; place-items:center; padding:20px;">
        <div style="background:var(--surface); border-radius:var(--r-xl); padding:22px; max-width:440px; width:100%;">
          <p style="font-weight:800; font-size:16px; margin:0 0 14px;">❓ ${st.q[L]}</p>
          <div class="fd-choices">
            ${opts.map(x => `<button class="fd-choice" data-ok="${x.o.ok ? 1 : 0}">${x.o[L]}</button>`).join("")}
          </div>
        </div>
      </div>`;
    $("st-next").style.display = "none";
    $("st-stage").querySelectorAll(".fd-choice").forEach(b => b.addEventListener("click", () => answer(b)));
  }

  function answer(btn) {
    const L = Lang.current();
    $("st-stage").querySelectorAll(".fd-choice").forEach(x => x.disabled = true);
    if (btn.dataset.ok === "1") {
      stars++; $("stat-stars").textContent = stars;
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      AudioBus.chord([523, 659, 784], 0.2);
      Particles.fire(30);
    } else {
      btn.style.background = "var(--rose)";
      AudioBus.fail();
      $("st-stage").querySelectorAll(".fd-choice").forEach(x => { if (x.dataset.ok === "1") { x.style.background = "var(--mint)"; x.style.borderColor = "var(--mint-ink)"; } });
    }
    $("st-caption-note").textContent = "";
    setTimeout(() => {
      answering = false;
      $("st-next").style.display = "";
      sIdx++;
      scene = 0;
      if (sIdx >= STORIES.length) return win();
      renderScene();
    }, 1800);
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `جمعتَ ${stars} من ${STORIES.length} نجوم متابعة` : `You earned ${stars} of ${STORIES.length} attention stars`;
    Storage.set("anos_theater_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    sIdx = 0; scene = 0; stars = 0; answering = false;
    $("stat-stars").textContent = 0;
    $("st-next").style.display = "";
    Modal.close("win-modal");
    renderScene();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (!answering) renderScene(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("st-next").addEventListener("click", next);
  AudioBus.bindButton($("mute-btn"));
  renderScene();
})();
