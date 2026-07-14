/* ============================================================
   67 · مشكاة الحديث — مواقف يومية، اختر ما يوافق السنّة
   المشكاة تضيء تدريجياً مع كل إجابة صحيحة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "مشكاة الحديث", en: "Lantern of Hadith" },
    title:       { ar: "مشكاة الحديث", en: "The Lantern of Hadith" },
    desc:        { ar: "كل حديثٍ نبويّ نورٌ يضيء الطريق! اقرأ الموقف اليومي، واختر التصرّف الذي يوافق حديث النبي ﷺ — ومع كل اختيارٍ صحيح تشتعل مشكاتك أكثر.", en: "Every hadith is a light on the path! Read the everyday situation and choose the action that matches the Prophet's ﷺ words — with each right choice, your lantern glows brighter." },
    lightLabel:  { ar: "نور المشكاة", en: "Lantern light" },
    statScene:   { ar: "المواقف", en: "Situations" },
    statLight:   { ar: "النور", en: "Light" },
    sideTitle:   { ar: "أحاديث جمعتها", en: "Hadiths you've gathered" },
    sidePill:    { ar: "6 أنوار", en: "6 lights" },
    tip:         { ar: "أحاديث النبي ﷺ ليست للحفظ فقط، بل للعمل بها في حياتنا اليومية — في البيت والمدرسة ومع الأصدقاء.", en: "The Prophet's ﷺ hadiths are not just for memorizing, but for living by every day — at home, at school, and with friends." },
    winEyebrow:  { ar: "مشكاة منيرة", en: "A glowing lantern" },
    winTitle:    { ar: "أضأتَ مشكاة السنّة!", en: "You lit the lantern of the Sunnah!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
  };

  const SCENES = [
    {
      s: { ar: "دخلتَ البيت ووجدت إخوتك نائمين. ماذا تفعل؟", en: "You enter the house and find your siblings asleep. What do you do?" },
      choices: [
        { t: { ar: "أُلقي السلام بصوتٍ منخفض لا يوقظ النائم", en: "Give salam softly, not waking the sleeper", ok: true },
        }, { t: { ar: "أدخل بصمتٍ تام دون سلام", en: "Enter in total silence with no salam" } },
        { t: { ar: "أنادي بصوتٍ عالٍ: أنا هنا!", en: "Call out loudly: I'm here!" } },
      ],
      hadith: { ar: "«كان ﷺ يسلّم تسليماً يسمعه اليقظان ولا يوقظ النائم»", en: "\"He ﷺ would greet in a way the awake could hear without waking the sleeper\"" },
    },
    {
      s: { ar: "عطستَ في الفصل أمام زملائك. ماذا تقول؟", en: "You sneeze in class in front of your classmates. What do you say?" },
      choices: [
        { t: { ar: "الحمد لله", en: "Alhamdulillah", ok: true } },
        { t: { ar: "لا أقول شيئاً", en: "Say nothing" } },
        { t: { ar: "أضحك بصوتٍ عالٍ", en: "Laugh loudly" } },
      ],
      hadith: { ar: "«إذا عطس أحدكم فليقل: الحمد لله، وليقل أخوه: يرحمك الله»", en: "\"When one of you sneezes, let him say Alhamdulillah, and his brother say: Yarhamuk-Allah\"" },
    },
    {
      s: { ar: "جلستَ لتأكل وامتدّت يدك للطعام. ما الذي يسبق الأكل؟", en: "You sit to eat and reach for the food. What comes before eating?" },
      choices: [
        { t: { ar: "أقول: بسم الله، وآكل بيميني مما يليني", en: "Say Bismillah and eat with my right hand from what's near me", ok: true } },
        { t: { ar: "آكل مباشرةً بيدي اليسرى", en: "Eat right away with my left hand" } },
        { t: { ar: "آكل من كل الأطباق بسرعة", en: "Grab quickly from every plate" } },
      ],
      hadith: { ar: "«يا غلام، سمِّ الله، وكُل بيمينك، وكُل مما يليك»", en: "\"O young boy, say Allah's name, eat with your right hand, and eat from what is near you\"" },
    },
    {
      s: { ar: "رأيتَ حجراً في طريق المشاة قد يؤذي الناس. ماذا تفعل؟", en: "You see a stone on the footpath that could hurt people. What do you do?" },
      choices: [
        { t: { ar: "أُزيله عن الطريق — فهذا صدقة", en: "Remove it from the path — that's charity", ok: true } },
        { t: { ar: "أتجاوزه وأتركه لغيري", en: "Step around it and leave it for others" } },
        { t: { ar: "أركله بقوة في أي اتجاه", en: "Kick it hard in any direction" } },
      ],
      hadith: { ar: "«إماطة الأذى عن الطريق صدقة»", en: "\"Removing harm from the path is charity\"" },
    },
    {
      s: { ar: "غضبتَ من صديقك غضباً شديداً وأنت واقف. ما نصيحة النبي ﷺ؟", en: "You're standing, very angry at your friend. What did the Prophet ﷺ advise?" },
      choices: [
        { t: { ar: "أجلس، وإن بقي الغضب أضطجع، وأستعيذ بالله", en: "Sit down, and if anger stays, lie down, and seek refuge in Allah", ok: true } },
        { t: { ar: "أصرخ وأرفع صوتي أكثر", en: "Shout and raise my voice more" } },
        { t: { ar: "أرمي أقرب شيء إليّ", en: "Throw the nearest thing to me" } },
      ],
      hadith: { ar: "«إذا غضب أحدكم وهو قائم فليجلس، فإن ذهب عنه الغضب وإلا فليضطجع»", en: "\"If one of you is angry while standing, let him sit; if the anger goes, good, otherwise let him lie down\"" },
    },
    {
      s: { ar: "أردتَ أن تشرب الماء وأنت عطشان جداً. كيف تشرب؟", en: "You want to drink water while very thirsty. How do you drink?" },
      choices: [
        { t: { ar: "أجلس وأشرب على ثلاث دفعات وأحمد الله", en: "Sit, drink in three sips, and praise Allah", ok: true } },
        { t: { ar: "أشرب كل الكوب دفعة واحدة واقفاً بسرعة", en: "Gulp the whole cup at once, standing, quickly" } },
        { t: { ar: "أشرب من الإناء الكبير مباشرة", en: "Drink straight from the big jug" } },
      ],
      hadith: { ar: "«كان ﷺ يتنفّس في الشراب ثلاثاً» ويقول: «هو أروى وأبرأ وأمرأ»", en: "\"He ﷺ would breathe (pause) three times while drinking\", saying it is \"more quenching and wholesome\"" },
    },
  ];

  const $ = (id) => document.getElementById(id);
  let idx = 0, light = 0, collected = [];

  function renderCollected() {
    const L = Lang.current();
    $("mk-collected").innerHTML = SCENES.map((sc, i) => `
      <div class="dhikr-item ${collected.includes(i) ? "is-highlighted" : ""}">
        <span class="dhikr-swatch" style="background:${collected.includes(i) ? "var(--gold)" : "var(--bg-soft)"}"></span>
        <span class="dhikr-text" style="font-size:12px;">${collected.includes(i) ? sc.hadith[L] : (L === "ar" ? "؟ حديثٌ لم يُضأ بعد" : "? A hadith not yet lit")}</span>
        <span class="dhikr-count">${collected.includes(i) ? "✦" : "?"}</span>
      </div>`).join("");
  }

  function setLight(v) {
    light = v;
    $("mk-fill").style.width = light + "%";
    $("mk-flame").style.opacity = 0.25 + (light / 100) * 0.75;
    $("mk-flame").style.boxShadow = `0 0 ${8 + light / 4}px ${light / 12}px rgba(255,212,105,${light / 140})`;
    $("stat-light").textContent = Math.round(light) + "%";
  }

  function render() {
    const L = Lang.current();
    if (idx >= SCENES.length) return;
    const sc = SCENES[idx];
    $("mk-hadith").style.display = "none";
    $("stat-scene").textContent = `${idx}/${SCENES.length}`;
    const opts = sc.choices.map((c, i) => ({ c, i })).sort(() => Math.random() - 0.5);
    $("mk-area").innerHTML = `
      <div class="fd-event">
        <h3>💡 ${L === "ar" ? "الموقف" : "Situation"} ${idx + 1}</h3>
        <p>${sc.s[L]}</p>
        <div class="fd-choices">
          ${opts.map(o => `<button class="fd-choice" data-ok="${o.c.ok ? 1 : 0}">${o.c.t[L]}</button>`).join("")}
        </div>
      </div>`;
    $("mk-area").querySelectorAll(".fd-choice").forEach(b => {
      b.addEventListener("click", () => choose(b));
    });
    renderCollected();
  }

  function choose(btn) {
    const L = Lang.current();
    const sc = SCENES[idx];
    if (btn.dataset.ok === "1") {
      collected.push(idx);
      AudioBus.chord([523, 659, 784], 0.2);
      Particles.fire(28, { originY: "35%" });
      $("mk-hadith").style.display = "block";
      $("mk-hadith").textContent = "📜 " + sc.hadith[L];
      /* أضئ المشكاة تدريجياً */
      const step = 100 / SCENES.length;
      let v = light;
      const to = light + step;
      const anim = setInterval(() => { v = Math.min(to, v + 2); setLight(v); if (v >= to) clearInterval(anim); }, 20);
      idx++;
      $("mk-area").querySelectorAll(".fd-choice").forEach(x => x.disabled = true);
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      setTimeout(() => { if (idx >= SCENES.length) win(); else render(); }, 2000);
    } else {
      AudioBus.fail();
      btn.style.background = "var(--rose)";
      btn.disabled = true;
    }
  }

  function win() {
    setLight(100);
    const L = Lang.current();
    $("stat-scene").textContent = `${SCENES.length}/${SCENES.length}`;
    $("win-sub").textContent = L === "ar" ? "ستة أحاديث صارت نوراً في حياتك — طبّقها كل يوم!" : "Six hadiths became light in your life — live them every day!";
    Storage.set("anos_lantern_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    idx = 0; light = 0; collected = [];
    setLight(0);
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { render(); renderCollected(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  setLight(0);
  render();
})();
