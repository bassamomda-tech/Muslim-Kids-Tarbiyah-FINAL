/* ============================================================
   55 · رحلة الروح الطيبة — قصة تفاعلية متفرعة عن التوكل
   والإخلاص والرضا، بثلاث نهايات
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "رحلة الروح الطيبة", en: "The Good Soul's Journey" },
    title:       { ar: "رحلة الروح الطيبة", en: "The Good Soul's Journey" },
    desc:        { ar: "قصة تتغيّر بقراراتك! أنت بطل الحكاية: كل اختيارٍ يفتح طريقاً مختلفاً، وكل طريق يعلّم قلبك درساً من دروس الإيمان.", en: "A story that changes with your decisions! You are the hero: every choice opens a different path, and every path teaches your heart a lesson of faith." },
    statSteps:   { ar: "الخطوات", en: "Steps" },
    statEndings: { ar: "نهايات اكتشفتها", en: "Endings found" },
    sideTitle:   { ar: "دروس الرحلة", en: "Lessons of the journey" },
    sidePill:    { ar: "3 نهايات", en: "3 endings" },
    tip:         { ar: "لا توجد إجابة «خاطئة» — لكن بعض الطرق أنور من غيرها. أعد الرحلة واكتشف النهايات الثلاث كلها!", en: "There is no \"wrong\" answer — but some paths shine brighter. Replay the journey and discover all three endings!" },
    again:       { ar: "أعد الرحلة", en: "Journey again" },
  };

  /* عقد القصة */
  const NODES = {
    start: {
      icon: "🌅",
      text: { ar: "استيقظتَ مبكراً في يوم مسابقة حفظ القرآن الكبرى. قلبك يخفق بسرعة — اليوم ستقف أمام الجميع! ماذا تفعل أولاً؟", en: "You wake up early on the day of the big Quran competition. Your heart is racing — today you'll stand in front of everyone! What do you do first?" },
      choices: [
        { t: { ar: "أصلّي الفجر وأدعو: «اللهم ثبّتني»", en: "Pray Fajr and make du'a: \"O Allah, keep me steady\"" }, to: "calm" },
        { t: { ar: "أفتح المصحف فوراً وأراجع بذعر", en: "Grab the mushaf and revise in a panic" }, to: "panic" },
      ],
    },
    calm: {
      icon: "🕊",
      text: { ar: "بعد الصلاة والدعاء، شعرتَ بسكينةٍ عجيبة. في الطريق للمسابقة رأيت صديقك «سالم» يبكي — لقد نسي مقطعاً كان يحفظه. الوقت ضيق!", en: "After praying and du'a, a strange calm fills you. On the way you see your friend Salim crying — he forgot a passage he memorized. Time is short!" },
      choices: [
        { t: { ar: "أجلس معه وأساعده على التذكّر", en: "Sit with him and help him remember" }, to: "help" },
        { t: { ar: "أعتذر — يجب أن أراجع حفظي أنا", en: "Apologize — I must revise my own memorization" }, to: "self" },
      ],
    },
    panic: {
      icon: "😰",
      text: { ar: "راجعتَ بسرعة وقلبك يزداد خفقاناً، واختلطت السور في رأسك! أمك لاحظت توتّرك وقالت: «يا حبيبي، من يتوكل على الله يكفيه». ماذا تفعل؟", en: "You revise fast but your heart pounds harder, and the surahs mix in your head! Mom notices and says: \"My dear, whoever relies on Allah, He is enough for him.\" What do you do?" },
      choices: [
        { t: { ar: "أتوقف، أتوضأ، وأصلّي ركعتين", en: "Stop, make wudu, and pray two rak'ahs" }, to: "calm" },
        { t: { ar: "أستمر في المراجعة المتوترة", en: "Keep cramming nervously" }, to: "cram" },
      ],
    },
    cram: {
      icon: "📖",
      text: { ar: "وصلتَ للمسابقة مرهقاً. عند دورك، تلعثمت في أول آية... ثم تذكّرت: «رَبِّ اشْرَحْ لِي صَدْرِي». أغمضت عينيك ودعوت بها.", en: "You arrive exhausted. At your turn, you stumble on the first verse... then you remember: \"My Lord, expand my chest for me.\" You close your eyes and pray it." },
      choices: [
        { t: { ar: "أفتح عينيّ وأبدأ من جديد بهدوء", en: "Open your eyes and start again, calmly" }, to: "recover" },
      ],
    },
    help: {
      icon: "🤝",
      text: { ar: "جلستَ مع سالم وذكّرته بالمقطع بطريقة القصة، فتذكّره وابتسم! دخلتما القاعة معاً. عند دورك، تلوتَ بقلبٍ مطمئن... وفاز سالم بالمركز الأول، وأنت بالثاني!", en: "You sit with Salim and remind him using a story trick — he remembers and smiles! You enter together. At your turn you recite with a peaceful heart... Salim wins first place, and you win second!" },
      choices: [
        { t: { ar: "أفرح له من قلبي وأهنّئه", en: "Feel truly happy for him and congratulate him" }, to: "end_light" },
        { t: { ar: "أشعر بغصّة... لماذا ساعدته؟", en: "Feel a sting... why did I help him?" }, to: "jealous" },
      ],
    },
    self: {
      icon: "🚶",
      text: { ar: "راجعتَ وحدك وأدّيت أداءً جيداً وفزت بالمركز الثاني. لكن في طريق العودة، رأيت سالم خرج من المسابقة باكياً لأنه لم يُكمل. شعرت بشيءٍ في قلبك...", en: "You revised alone, performed well, and won second place. But on the way home, you see Salim left the competition in tears because he couldn't finish. Something tugs at your heart..." },
      choices: [
        { t: { ar: "أذهب إليه وأعرض أن نتدرّب معاً كل أسبوع", en: "Go to him and offer to practice together every week" }, to: "end_rida" },
        { t: { ar: "أمضي — ليست مشكلتي", en: "Walk on — not my problem" }, to: "end_lesson" },
      ],
    },
    recover: {
      icon: "🌤",
      text: { ar: "بدأتَ من جديد بصوتٍ هادئ، وأتممت التلاوة. لم تفز بمركزٍ هذه المرة، لكن المُحكّم قال: «أجمل ما رأيتُ اليوم أنك لم تستسلم».", en: "You start again with a calm voice and finish the recitation. You don't win a place this time, but the judge says: \"The most beautiful thing I saw today is that you didn't give up.\"" },
      choices: [
        { t: { ar: "أبتسم وأقول: الحمد لله على كل حال", en: "Smile and say: Alhamdulillah in every case" }, to: "end_rida" },
        { t: { ar: "أقرر: سأستعد من الآن لمسابقة العام القادم", en: "Decide: I'll start preparing now for next year" }, to: "end_lesson" },
      ],
    },
    jealous: {
      icon: "🌫",
      text: { ar: "جلستَ وحدك والغصّة تكبر. ثم تذكّرت حديث النبي ﷺ: «لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه»... ونظرت إلى سالم وهو يرفع الكأس فرحاً.", en: "You sit alone as the sting grows. Then you remember the Prophet's ﷺ words: \"None of you truly believes until he loves for his brother what he loves for himself\"... and you watch Salim raise the trophy with joy." },
      choices: [
        { t: { ar: "أنهض وأعانقه: «فوزك فوزي يا صديقي!»", en: "Get up and hug him: \"Your win is my win, friend!\"" }, to: "end_light" },
      ],
    },
    end_light: {
      icon: "✨", ending: "light",
      text: { ar: "امتلأ قلبك نوراً لا يشبه أي فوز. عرفتَ اليوم أن مَن آثر أخاه، آثره الله — وأن أجمل المراكز هو مركزك عند الله.", en: "Your heart fills with a light unlike any victory. Today you learned: whoever puts his brother first, Allah puts him first — and the best rank is your rank with Allah." },
      lesson: { ar: "درس الإيثار: «ويؤثرون على أنفسهم ولو كان بهم خصاصة»", en: "The lesson of selflessness: \"They prefer others over themselves, even in need\"" },
    },
    end_rida: {
      icon: "🌙", ending: "rida",
      text: { ar: "شعرتَ براحةٍ غريبة رغم أن اليوم لم يكن «مثالياً». هذا هو الرضا: أن تفعل ما عليك، وتثق أن اختيار الله لك أجمل من اختيارك لنفسك.", en: "You feel a strange peace even though the day wasn't \"perfect\". This is rida — contentment: do your part, and trust that Allah's choice for you is more beautiful than your own." },
      lesson: { ar: "درس الرضا: «عجباً لأمر المؤمن، إنّ أمره كله خير»", en: "The lesson of contentment: \"Amazing is the believer's affair — all of it is good\"" },
    },
    end_lesson: {
      icon: "🌱", ending: "lesson",
      text: { ar: "مضت الأيام، وبقي في قلبك سؤال صغير: ماذا لو اخترتُ طريقاً آخر؟ الروح الطيبة تتعلّم من كل رحلة... أعد المحاولة واكتشف!", en: "Days pass, and a small question stays in your heart: what if I'd chosen another path? A good soul learns from every journey... try again and discover!" },
      lesson: { ar: "درس المحاولة: كل يوم فرصة جديدة لتكون أفضل", en: "The lesson of trying: every day is a new chance to be better" },
    },
  };

  const ENDINGS = [
    { id: "light",  ar: "نهاية النور — الإيثار", en: "Ending of Light — Selflessness" },
    { id: "rida",   ar: "نهاية الرضا — التوكل",  en: "Ending of Contentment — Trust" },
    { id: "lesson", ar: "نهاية الدرس — المثابرة", en: "Ending of the Lesson — Perseverance" },
  ];

  const $ = (id) => document.getElementById(id);
  let current = "start", steps = 0;
  let found = Storage.get("anos_soul_endings", []);

  function renderLessons() {
    const L = Lang.current();
    $("sj-lessons").innerHTML = ENDINGS.map(e => `
      <div class="dhikr-item ${found.includes(e.id) ? "is-highlighted" : ""}">
        <span class="dhikr-swatch" style="background:${found.includes(e.id) ? "var(--gold)" : "var(--bg-soft)"}"></span>
        <span class="dhikr-text" style="font-size:13px;">${found.includes(e.id) ? e[L] : (L === "ar" ? "؟ نهاية لم تُكتشف بعد" : "? An undiscovered ending")}</span>
        <span class="dhikr-count">${found.includes(e.id) ? "✓" : "?"}</span>
      </div>`).join("");
    $("stat-endings").textContent = `${found.length}/3`;
  }

  function renderTrail() {
    $("sj-trail").innerHTML = Array.from({ length: 8 }, (_, i) =>
      `<span class="bead ${i < steps ? "on" : ""}"></span>`).join("");
    $("stat-steps").textContent = steps;
  }

  function render() {
    const node = NODES[current], L = Lang.current();
    const isEnd = !!node.ending;
    $("sj-area").innerHTML = `
      <div class="sj-scene">
        <div class="sj-glyph" style="font-size:36px;">${node.icon}</div>
        <p class="sj-text">${node.text[L]}</p>
        ${isEnd ? `
          <div class="sj-lesson">💡 ${node.lesson[L]}</div>
          <div class="sj-choices" style="margin-top:16px;">
            <button class="sj-choice" id="sj-again">🔄 ${I18N.again[L]}</button>
          </div>` : `
          <div class="sj-choices">
            ${node.choices.map((c, i) => `
              <button class="sj-choice" data-i="${i}">
                ${c.t[L]}
                <span class="arrow">←</span>
              </button>`).join("")}
          </div>`}
      </div>`;
    renderTrail(); renderLessons();

    if (isEnd) {
      if (!found.includes(node.ending)) {
        found.push(node.ending);
        Storage.set("anos_soul_endings", found);
        renderLessons();
        AudioBus.success();
        Particles.fire(found.length >= 3 ? 130 : 60);
      }
      $("sj-again").addEventListener("click", reset);
    } else {
      $("sj-area").querySelectorAll(".sj-choice").forEach(btn => {
        btn.addEventListener("click", () => {
          AudioBus.pop();
          steps++;
          current = node.choices[+btn.dataset.i].to;
          render();
        });
      });
    }
  }

  function reset() { current = "start"; steps = 0; render(); }

  Lang.init(I18N);
  document.addEventListener("langchange", render);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  render();
})();
