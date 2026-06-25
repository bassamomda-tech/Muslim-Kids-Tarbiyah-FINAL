/* ════════════════════════════════════════════════════════════════
   quran-plan-guide.js — expansion for «خطة حفظ القرآن».
   Written in the voice of a ḥāfiẓ + muḥaffiẓ (memorization teacher)
   and a specialist in the problems of hifdh. Augments window.QPLAN
   with: the 5-stage journey (start → itqān), a step-by-step guide to
   memorizing one portion, the criteria & path of itqān, flexible
   lifestyle plans, and a problems-and-solutions clinic.
   Loaded AFTER quran-plan-data.js.
   ════════════════════════════════════════════════════════════════ */
(function () {
  var Q = window.QPLAN; if(!Q) return;

  /* ── voice of the teacher (opening) ── */
  Q.teacher = {
    ar:'يقول المحفّظ: حفظُ القرآن ليس سباقًا بل بناء؛ الحجرُ المتقَنُ خيرٌ من جدارٍ مائل. وأكثرُ من يفشل لا يفشل لضعفِ ذاكرة، بل لخللٍ في الطريقة أو لإهمالِ المراجعة أو لاستعجالٍ يحرق الدافع. هذه الصفحاتُ خلاصةُ سنواتٍ من تحفيظِ الصغارِ والكبار: طريقٌ واضحٌ، ومرونةٌ تناسب كلَّ حال، وعلاجٌ صريحٌ لكلِّ مشكلةٍ تعترض الحافظ.',
    en:'The teacher says: memorizing the Qur\u2019an is not a race but a construction \u2014 one well-set stone beats a leaning wall. Most who fail do not fail from weak memory, but from a flawed method, neglected review, or a haste that burns out motivation. These pages distill years of teaching young and old: a clear path, flexibility for every situation, and a frank remedy for every problem a memorizer meets.'
  };

  /* ── the 5-stage journey: from first day to itqān ── */
  Q.journey = {
    intro:{ar:'كلُّ مقطعٍ تحفظه يمرّ بخمسِ مراحل، من أوّلِ نظرةٍ إليه حتى يصير راسخًا لا يتزحزح. لا تقفز مرحلةً؛ فالقفزُ هو سرُّ التفلّت.',
      en:'Every portion you memorize passes through five stages, from the first glance to becoming unshakably firm. Skip none \u2014 skipping is the secret of slipping.'},
    stages:[
      {ic:'🎧', c:'#8E44AD', n:{ar:'١ · التهيئة والسماع',en:'1 · Prepare & listen'},
        d:{ar:'قبل الحفظ: صحِّح النطقَ بسماعِ المقطعِ من قارئٍ متقنٍ مرّاتٍ عديدة حتى يألفه لسانُك. الأذنُ تحفظ قبل العين.',en:'Before memorizing: fix pronunciation by hearing the portion from a skilled reciter many times until your tongue knows it. The ear memorizes before the eye.'}},
      {ic:'🌱', c:'#1A9B7B', n:{ar:'٢ · الحفظُ الأوّليّ',en:'2 · Initial memorizing'},
        d:{ar:'احفظ آيةً آية بالتكرار (نظرًا ثم إغماضًا)، ثم اربط كلَّ آيةٍ بما قبلها، حتى تسرد المقطعَ كاملًا من حفظك.',en:'Memorize verse by verse through repetition (looking, then eyes-closed), then link each verse to the one before, until you recite the whole portion from memory.'}},
      {ic:'🧱', c:'#C9A227', n:{ar:'٣ · التثبيت',en:'3 · Consolidation'},
        d:{ar:'اعرض المقطعَ على مُستمِعٍ ثم راجعه في اليومين التاليين قبل أيِّ جديد، حتى ينتقل من ذاكرةٍ مؤقّتةٍ إلى راسخة.',en:'Recite the portion to a listener, then review it the next two days before any new portion, so it moves from short-term to lasting memory.'}},
      {ic:'🔗', c:'#2E86DE', n:{ar:'٤ · الربطُ والمراجعة',en:'4 · Linking & review'},
        d:{ar:'ادمج المقطعَ مع ما قبله في الصفحةِ والجزء، وأدخِله في دائرةِ المراجعةِ البعيدة، وانتبه للمتشابهات.',en:'Merge the portion with what precedes it in the page & juz, enter it into the far-review cycle, and watch the similar passages.'}},
      {ic:'💎', c:'#C0392B', n:{ar:'٥ · الإتقان',en:'5 · Mastery (Itqān)'},
        d:{ar:'تسرده بلا تردّد، من أيِّ آيةٍ تُطلَب، بتجويدٍ سليمٍ وفهمٍ للمعنى — هنا فقط يُقال: «أتقنه».',en:'You recite it without hesitation, from any verse asked, with sound tajwīd and grasp of meaning \u2014 only here is it said: \u201che has mastered it.\u201d'}}
    ],
    note:{ar:'القاعدة: لا ينتقل المقطعُ للمرحلةِ التالية حتى يستقرَّ في الحالية. والإتقانُ ليس حدثًا بل عادةُ مراجعةٍ تدوم.',
      en:'The rule: a portion does not advance until it settles in its current stage. And mastery is not an event but a lasting habit of review.'}
  };

  /* ── step-by-step: how to memorize ONE portion today ── */
  Q.dailyProcess = {
    intro:{ar:'هذه هي «الجلسةُ» العمليّة لحفظِ مقطعِ اليوم (نصفُ صفحةٍ مثلًا). اتبعها بالترتيب؛ تستغرق ٢٠–٤٠ دقيقةً بحسب السنِّ والمقدار.',
      en:'This is the practical \u201csession\u201d for memorizing today\u2019s portion (say, half a page). Follow it in order; it takes 20\u201340 minutes depending on age and amount.'},
    steps:[
      {ar:'<b>اسمع (٣ مرّات):</b> شغّل المقطعَ من قارئٍ متقنٍ وتابع بعينك في المصحف، دون محاولةِ حفظ.',en:'<b>Listen (3\u00d7):</b> play the portion from a skilled reciter and follow in the mushaf, without yet trying to memorize.'},
      {ar:'<b>اقرأ بالنظر (٧ مرّات):</b> اقرأه بصوتٍ مسموعٍ بتجويدٍ صحيح، بتدبّرٍ خفيفٍ للمعنى.',en:'<b>Read looking (7\u00d7):</b> recite it aloud with correct tajwīd, with a light reflection on the meaning.'},
      {ar:'<b>احفظ الآيةَ الأولى:</b> كرّرها بالنظر ٥ مرّات، ثم أغمض وكرّرها حتى تسردها ٣ مرّاتٍ بلا خطأ.',en:'<b>Memorize verse 1:</b> repeat it looking 5\u00d7, then close your eyes and repeat until you recite it 3\u00d7 flawlessly.'},
      {ar:'<b>الآيةُ الثانية ثم الربط:</b> افعل بها مثلَ الأولى، ثم اسرد الأولى والثانية معًا موصولتَين.',en:'<b>Verse 2, then link:</b> do the same, then recite verses 1 & 2 together, joined.'},
      {ar:'<b>تراكَم:</b> أضِف آيةً آية بنفسِ الطريقة، وفي كلِّ مرّةٍ اسرد من أوّلِ المقطعِ لتربط الكلَّ.',en:'<b>Accumulate:</b> add verse by verse the same way, each time reciting from the start of the portion to bind it all.'},
      {ar:'<b>السردُ الكامل (٣ مرّات):</b> أغمض عينيك واسرد المقطعَ كلَّه من حفظك ثلاثًا بلا نظر.',en:'<b>Full recite (3\u00d7):</b> close your eyes and recite the whole portion from memory three times, no looking.'},
      {ar:'<b>اعرض على مُستمِع:</b> اسرده على أبٍ أو معلّمٍ ليُمسك عليك الخطأ — لا يُعتمَد حفظٌ بلا عرض.',en:'<b>Recite to a listener:</b> recite to a parent or teacher to catch errors \u2014 no hifdh counts without reciting to someone.'},
      {ar:'<b>ثبّته غدًا:</b> أوّلُ ما تفعله في جلسةِ الغد سردُ مقطعِ اليومِ قبل أيِّ جديد.',en:'<b>Set it tomorrow:</b> the first thing in tomorrow\u2019s session is to recite today\u2019s portion before anything new.'}
    ],
    flex:{ar:'<b>مرونة:</b> الأرقام إرشاديّة لا مقدّسة. الطفلُ الصغير: آيةٌ أو آيتان بالسماعِ واللعب. المتقن: قد يكفيه تكرارٌ أقل. زِد التكرارَ مع المقاطعِ المتشابهةِ أو الثقيلة، وأنقِصه مع السهلة.',
      en:'<b>Flexibility:</b> the numbers guide, they are not sacred. A young child: a verse or two by listening & play. A strong memorizer: fewer repeats may suffice. Increase repetition for similar or heavy passages, decrease for easy ones.'}
  };

  /* ── itqān: criteria + how to reach it ── */
  Q.itqan = {
    intro:{ar:'الفرقُ بين «حفظتُه» و«أتقنتُه» هو الفرقُ بين من يجمع ومن يبني. هذه علاماتُ الإتقانِ الخمس، وطريقُه العمليّ.',
      en:'The difference between \u201cI memorized it\u201d and \u201cI mastered it\u201d is the difference between one who gathers and one who builds. Here are the five signs of mastery, and its practical path.'},
    criteria:[
      {ar:'تسرده بلا تردّدٍ ولا تلقين، بطلاقة.',en:'You recite it fluently, without hesitation or prompting.'},
      {ar:'تبدأ من أيِّ آيةٍ يُطلب منك، لا من أوّلِ السورةِ فقط.',en:'You can start from any verse asked, not only the surah\u2019s beginning.'},
      {ar:'لا تخلط بين الآياتِ المتشابهةِ في مواضعها.',en:'You don\u2019t confuse similar verses across their places.'},
      {ar:'تجويدُك سليمٌ تلقائيًّا دون تكلّف.',en:'Your tajwīd is sound automatically, without strain.'},
      {ar:'يبقى ثابتًا بعد أسبوعٍ من تركِ مراجعتِه المكثّفة.',en:'It stays firm a week after its intensive review stops.'}
    ],
    path:[
      {ic:'🔁', t:{ar:'كثرةُ السرد',en:'Abundant reciting'}, d:{ar:'السردُ المتكرّرُ من الحفظ — لا القراءةُ من المصحف — هو ما يصنع الرسوخ.',en:'Repeated reciting from memory \u2014 not reading from the mushaf \u2014 is what sets it.'}},
      {ic:'🕌', t:{ar:'السردُ في الصلاة',en:'Recite in prayer'}, d:{ar:'اقرأ محفوظَك في الفرائضِ والنوافل؛ صلاةُ الليلِ أعظمُ مثبّت.',en:'Recite your memorization in obligatory & voluntary prayers; night prayer is the greatest fixer.'}},
      {ic:'🎯', t:{ar:'الاختبارُ العشوائيّ',en:'Random testing'}, d:{ar:'ليطلب منك المعلّمُ السردَ من مواضعَ عشوائيّة؛ يكشف الثغراتِ قبل أن تكبر.',en:'Have the teacher ask you to recite from random places; it exposes gaps before they grow.'}},
      {ic:'👯', t:{ar:'سردُ المتشابهات معًا',en:'Recite look-alikes together'}, d:{ar:'اجمع الآياتِ المتشابهةَ في جلسةٍ واحدةٍ ووازِن بينها لتثبّت الفروق.',en:'Gather similar verses in one session and contrast them to fix the differences.'}},
      {ic:'📖', t:{ar:'ربطُ المعنى',en:'Anchor the meaning'}, d:{ar:'فهمُ معنى الآيةِ وسياقِها يجعل الحفظَ منطقيًّا لا آليًّا، فيثبت أكثر.',en:'Understanding a verse\u2019s meaning & context makes hifdh logical, not mechanical, so it holds better.'}}
    ]
  };

  /* ── flexible, lifestyle-based plans (beyond the 5 timescales) ── */
  Q.flexPlans = {
    intro:{ar:'الخططُ الزمنيّةُ (سنة–٥) تحدّد «المدى»؛ وهذه الخططُ تحدّد «النمط» بحسب حياتك. اختر ما يناسب واقعَك، وغيّره متى تغيّر حالُك — المرونةُ تُبقي الحافظَ مستمرًّا.',
      en:'The timescale plans (1\u20135 yrs) set the \u201chorizon\u201d; these set the \u201cpattern\u201d by your life. Choose what fits your reality, and change it when your situation changes \u2014 flexibility keeps the memorizer going.'},
    plans:[
      {ic:'🏫', c:'#2E86DE', n:{ar:'خطّةُ العامِ الدراسيّ',en:'School-year plan'},
        d:{ar:'مقطعٌ صغيرٌ يوميًّا (نصفُ صفحةٍ أو أقل) بعد الفجرِ أو المغرب، والجمعةُ والعطلةُ للتثبيتِ والمراجعة. لا تنافس المدرسةَ بل رافِقها.',en:'A small daily portion (half a page or less) after Fajr or Maghrib; Fridays & holidays for consolidation. Don\u2019t compete with school \u2014 accompany it.'}},
      {ic:'☀️', c:'#D4860B', n:{ar:'المكثّفُ الصيفيّ',en:'Summer intensive'},
        d:{ar:'استثمر العطلةَ: جرعةٌ مضاعفة (صفحة–صفحتان) مع حلقةٍ يوميّةٍ ومراجعةٍ صارمة. ختمةُ حفظٍ صيفيّةٌ ممكنةٌ لأجزاء.',en:'Use the break: a doubled dose (1\u20132 pages) with a daily ḥalaqah and strict review. A summer hifdh of several juz is achievable.'}},
      {ic:'📅', c:'#1A9B7B', n:{ar:'خطّةُ نهايةِ الأسبوع',en:'Weekend plan'},
        d:{ar:'للمنشغلين جدًّا: حصّتان مطوّلتان في العطلةِ للحفظِ الجديد، ومراجعةٌ يوميّةٌ خفيفةٌ (١٠ دقائق) في أيّامِ العمل.',en:'For the very busy: two longer weekend sessions for new memorizing, and a light daily review (10 min) on workdays.'}},
      {ic:'🌙', c:'#8E44AD', n:{ar:'دفعةُ رمضان',en:'Ramadan boost'},
        d:{ar:'الشهرُ موسمُ القرآن: ضاعِف المراجعةَ واسرد في التراويح، واجعل هدفًا واضحًا (تثبيتُ المحفوظِ أو حفظُ جزء).',en:'The month is the Qur\u2019an\u2019s season: double review, recite in Tarāwīh, and set a clear goal (consolidate, or memorize a juz).'}},
      {ic:'🧸', c:'#16A085', n:{ar:'الطفلُ الصغيرُ جدًّا (٤–٦)',en:'The very young (4\u20136)'},
        d:{ar:'بالسماعِ والتلقينِ واللعب: آياتٌ قصيرةٌ تُردّد بعد الأب، تكرارٌ مرحٌ بلا ضغط، وقصّةُ السورة. الهدفُ حبُّ القرآنِ أوّلًا.',en:'By listening, prompting & play: short verses repeated after the parent, joyful repetition without pressure, and the surah\u2019s story. The goal is love of the Qur\u2019an first.'}},
      {ic:'🔙', c:'#C0392B', n:{ar:'العودةُ بعد انقطاع',en:'Returning after a break'},
        d:{ar:'لا تبدأ بالجديد! ابدأ بإعادةِ بناءِ القديمِ مراجعةً حتى يثبت، ثم استأنف الحفظَ بجرعةٍ أصغرَ مؤقّتًا. الانقطاعُ يُعالَج بالرفقِ لا بالجلد.',en:'Don\u2019t start with new! Begin by rebuilding the old through review until firm, then resume memorizing at a temporarily smaller dose. A lapse is treated with gentleness, not self-flagellation.'}}
    ]
  };

  /* ── the problems clinic (the heart of the request) ── */
  Q.problems = {
    intro:{ar:'كلُّ حافظٍ يواجه هذه العقبات؛ والفرقُ بين من يُتمّ ومن ينقطع هو معرفةُ الدواء. هذه أشهرُ مشكلاتِ الحفظ، بسببِها وعلاجِها العمليِّ من خبرةِ المحفّظين.',
      en:'Every memorizer meets these obstacles; the difference between who finishes and who quits is knowing the cure. These are the commonest hifdh problems, with their cause and practical remedy from teachers\u2019 experience.'},
    items:[
      { ic:'💨', t:{ar:'تفلّتُ المحفوظِ وسرعةُ النسيان',en:'Memorization slipping & fast forgetting'},
        why:{ar:'السبب الأول دائمًا: قلّةُ المراجعةِ والاستعجالُ في الجديد. النسيانُ طبيعةُ الحفظ، والمراجعةُ هي العلاج.',en:'Always the top cause: too little review and rushing the new. Forgetting is the nature of hifdh; review is the cure.'},
        fix:[{ar:'اجعل المراجعةَ ثلثَي وقتك، والجديدَ ثلثًا فقط.',en:'Make review two-thirds of your time, new only one-third.'},
          {ar:'لا تزِد جديدًا حتى يثبت القديم؛ القليلُ الراسخُ أبقى.',en:'Add no new until the old is firm; a little well-set lasts.'},
          {ar:'أدخِل كلَّ محفوظٍ في دورةِ مراجعةٍ بعيدةٍ لا يخرج منها أبدًا.',en:'Put every portion into a far-review cycle it never leaves.'},
          {ar:'اسرد محفوظَك في الصلاةِ يوميًّا.',en:'Recite your memorization in daily prayers.'}]},
      { ic:'👯', t:{ar:'الخلطُ بين الآياتِ المتشابهة',en:'Confusing similar verses'},
        why:{ar:'القرآنُ فيه مواضعُ متشابهةٌ تتكرّر بفروقٍ دقيقة؛ الذاكرةُ تخلط بينها إن لم تُميّز.',en:'The Qur\u2019an has similar passages that recur with subtle differences; memory mixes them unless distinguished.'},
        fix:[{ar:'اجمع المتشابهاتِ في ورقةٍ واحدةٍ ووازِن بين فروقها بالتلوين.',en:'Gather the look-alikes on one page and contrast their differences with colour.'},
          {ar:'احفظ علامةً مميّزةً لكلِّ موضع (كلمةٌ أو سياقٌ قبلها).',en:'Memorize a distinguishing marker for each place (a word or context before it).'},
          {ar:'اسرد الموضعَين متتاليَين في جلسةٍ واحدةٍ حتى يرسخ الفرق.',en:'Recite both places back-to-back in one session until the difference sets.'},
          {ar:'استعِن بكتبِ «متشابهات القرآن» المبسّطة.',en:'Use simplified \u201cmutashābihāt\u201d (look-alike) reference booklets.'}]},
      { ic:'🐌', t:{ar:'بطءُ الحفظِ والإحباط',en:'Slow memorizing & frustration'},
        why:{ar:'قد يكون المقدارُ أكبرَ من طاقة الطفل، أو النطقُ غيرَ مصحّح، أو الوقتُ غيرَ مناسب، أو مقارنةٌ ظالمةٌ بغيره.',en:'The amount may exceed the child\u2019s capacity, or pronunciation is uncorrected, or the time is wrong, or an unfair comparison to others.'},
        fix:[{ar:'صغّر المقدارَ حتى ينجح؛ النجاحُ الصغيرُ يولّد الدافع.',en:'Shrink the amount until he succeeds; small success breeds drive.'},
          {ar:'صحّح النطقَ بالسماعِ أولًا — نصفُ البطءِ سببُه نطقٌ غيرُ مألوف.',en:'Fix pronunciation by listening first \u2014 half of slowness is unfamiliar pronunciation.'},
          {ar:'لا تقارنه بأحد؛ قارنه بنفسِه بالأمس.',en:'Never compare him to anyone; compare him to his own yesterday.'},
          {ar:'احتفِ بكلِّ إنجازٍ صغيرٍ ولو سورةً قصيرة.',en:'Celebrate every small win, even one short surah.'}]},
      { ic:'😮‍💨', t:{ar:'المللُ وفقدانُ الدافع',en:'Boredom & lost motivation'},
        why:{ar:'الرتابةُ، أو غيابُ الهدفِ الواضح، أو ضغطٌ بلا تشجيع، أو انقطاعُ صلةِ الطفلِ بمعنى ما يحفظ.',en:'Monotony, no clear goal, pressure without encouragement, or the child losing connection to the meaning.'},
        fix:[{ar:'ضع أهدافًا صغيرةً مرئيّةً (لوحةُ تقدّمٍ، شهادةٌ لكلِّ جزء).',en:'Set small visible goals (a progress board, a certificate per juz).'},
          {ar:'نوّع: سماعٌ، سردٌ جماعيّ، مسابقةٌ أسريّةٌ خفيفة.',en:'Vary it: listening, group reciting, a light family contest.'},
          {ar:'اربط الآياتِ بقصصِها ومعانيها ليعيشها لا ليكرّرها.',en:'Tie verses to their stories & meanings so he lives them, not just repeats.'},
          {ar:'ذكّره بفضلِ حَمَلةِ القرآنِ ومكانتِهم عند الله.',en:'Remind him of the virtue & rank of the bearers of the Qur\u2019an with Allah.'}]},
      { ic:'🗣️', t:{ar:'ضعفُ التجويدِ وكثرةُ الأخطاء',en:'Weak tajwīd & frequent errors'},
        why:{ar:'الحفظُ قبل تصحيحِ النطقِ يرسّخ الخطأَ؛ والخطأُ المحفوظُ يصعب إصلاحُه لاحقًا.',en:'Memorizing before correcting pronunciation entrenches the error; a memorized mistake is hard to fix later.'},
        fix:[{ar:'الإصلاحُ قبل الحفظ: لا تحفظ مقطعًا حتى تنطقه صحيحًا.',en:'Correct before memorizing: don\u2019t memorize a portion until you pronounce it correctly.'},
          {ar:'اسمع من قارئٍ متقنٍ وقلّده (طريقةُ المحاكاة).',en:'Listen to a skilled reciter and imitate (the mimicry method).'},
          {ar:'اعرض على معلّمٍ متقنٍ للتجويدِ بانتظام.',en:'Recite regularly to a teacher skilled in tajwīd.'},
          {ar:'تعلّم أحكامَ التجويدِ الأساسيّةَ تدريجيًّا مع الحفظ.',en:'Learn the basic tajwīd rules gradually alongside hifdh.'}]},
      { ic:'🌀', t:{ar:'التشتّتُ وقلّةُ التركيز',en:'Distraction & poor focus'},
        why:{ar:'الشاشاتُ قبل الجلسة، أو وقتٌ متعب، أو مكانٌ مزدحم، أو جلسةٌ أطولُ من طاقةِ التركيز.',en:'Screens before the session, a tired time, a busy place, or a session longer than the attention span.'},
        fix:[{ar:'مكانٌ هادئٌ ثابتٌ ووقتٌ يكون فيه الذهنُ صافيًا (بعد الفجر).',en:'A quiet fixed place and a time when the mind is clear (after Fajr).'},
          {ar:'لا شاشاتٍ قبل الجلسةِ بساعة.',en:'No screens for an hour before the session.'},
          {ar:'جلساتٌ قصيرةٌ مركّزة خيرٌ من جلسةٍ طويلةٍ مشتّتة.',en:'Short focused sessions beat one long distracted one.'},
          {ar:'ابدأ بدعاءٍ واستعاذةٍ لطردِ الوسواس.',en:'Begin with du\u2019a & isti\u2019ādhah to repel distraction.'}]},
      { ic:'📚', t:{ar:'تراكمُ المراجعةِ وثِقَلُها',en:'Review piling up & feeling heavy'},
        why:{ar:'كلّما زاد المحفوظُ زادت المراجعة؛ فإن لم تُنظَّم تراكمت حتى يعجز عنها فيتركها.',en:'As memorization grows, review grows; if unorganized it piles up until he can\u2019t cope and abandons it.'},
        fix:[{ar:'قسّم المحفوظَ على أيّامٍ ثابتة (وِردُ مراجعةٍ يوميٍّ لا يتغيّر).',en:'Divide the memorized over fixed days (a daily review-wird that never changes).'},
          {ar:'دورةٌ بعيدةٌ منتظمة: تمرُّ على كلِّ محفوظِك كلَّ ١٥–٣٠ يومًا.',en:'A regular far-cycle: pass over all your hifdh every 15\u201330 days.'},
          {ar:'إن تأخّرت المراجعةُ، أوقِف الجديدَ حتى تلحق بها.',en:'If review falls behind, pause new memorizing until you catch up.'},
          {ar:'راجِع بالسردِ من الحفظ لا بالقراءة؛ أسرعُ وأثبت.',en:'Review by reciting from memory, not reading; faster and firmer.'}]},
      { ic:'⏸️', t:{ar:'الانقطاعُ وصعوبةُ العودة',en:'Interruption & hard return'},
        why:{ar:'سفرٌ أو مرضٌ أو فتورٌ يوقف الحفظ، ثم يثقل على النفسِ العودةُ فتطول الفجوة.',en:'Travel, illness or slackness halts hifdh, then returning feels heavy and the gap widens.'},
        fix:[{ar:'عُد بالمراجعةِ لا بالجديد؛ أعِد بناءَ ما تفلّت أولًا.',en:'Return with review, not new; rebuild what slipped first.'},
          {ar:'ابدأ بجرعةٍ صغيرةٍ جدًّا لتكسر حاجزَ العودة.',en:'Start with a very small dose to break the return barrier.'},
          {ar:'سامِح نفسَك؛ التوبةُ من التقصيرِ تبدأ بخطوةٍ واحدة.',en:'Forgive yourself; recovering from a lapse begins with one step.'},
          {ar:'ثبّت موعدًا لا يتغيّر ولو خمسَ دقائقَ يوميًّا.',en:'Fix an unchanging appointment, even five minutes daily.'}]}
    ]
  };

  /* ── parting words ── */
  Q.closing = {
    ar:'تذكّر: «خيرُكم من تعلّم القرآنَ وعلّمه». الطريقُ طويلٌ لكنّه مبارك، وكلُّ آيةٍ تثبت في صدر ولدك صدقةٌ جاريةٌ لك وله. ارفُق، وثابِر، وادعُ — فالهدايةُ والتثبيتُ بيدِ الله وحده.',
    en:'Remember: \u201cThe best of you are those who learn the Qur\u2019an and teach it.\u201d The road is long but blessed, and every verse set firm in your child\u2019s chest is ongoing charity for you both. Be gentle, persevere, and pray \u2014 guidance and firmness are in Allah\u2019s hand alone.'
  };

})();
