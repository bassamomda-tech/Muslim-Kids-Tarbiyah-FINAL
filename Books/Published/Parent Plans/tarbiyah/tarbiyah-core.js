/* ════════════════════════════════════════════════════════════════
   tarbiyah-core.js — shared front/back matter for «بوصلة التربية»
   The 100+ page parent guide. Stages are pushed by stage-1..7.js.
   Written in the voice of a Muslim scholar + psychiatrist + parenting
   expert, drawing on: the Qur'an & Sunnah; Ulwan «تربية الأولاد في
   الإسلام»; Ibn al-Qayyim «تحفة المودود»; al-Ghazali «الإحياء»;
   Dr. M.K. al-Sha'al's staged framework; and developmental
   psychology (Erikson, Piaget, Bowlby, Baumrind, Gottman).
   ════════════════════════════════════════════════════════════════ */
window.TARBIYAH = { stages: [] };

window.TARBIYAH.meta = {
  title:{ar:'بوصلةُ التربية', en:'The Tarbiyah Compass'},
  subtitle:{ar:'دليلُ الأهل عبر مراحل العمر · من المهد إلى الرشد', en:'A parent\u2019s guide through the ages · from cradle to maturity'},
  blurb:{ar:'سبعُ مراحلَ عمريّة، من ٠ إلى ما بعد ١٨، يأخذ كلٌّ منها حقَّه: نظرةُ العلماء، ونظرةُ علم النفس، وأصواتُ المختصّين، والأدلّةُ والآثارُ والثواب، وخريطةُ وقتٍ يوميّةٌ وأسبوعيّة، وأنشطةٌ عمليّة، وأمثلةٌ مشروحة، ومشكلاتٌ شائعةٌ وعلاجُها، وقائمةُ محاسبةٍ ومتابعة.',
    en:'Seven life-stages, from 0 to 18+, each given its due: the scholars\u2019 view, the psychology view, specialists\u2019 voices, evidence, rewards, a daily & weekly time-map, practical activities, worked examples, common problems & their treatment, and an accountability & follow-up checklist.'},
};

/* ── the prophetic spine ── */
window.TARBIYAH.anchors = [
  { ic:'🤍', n:{ar:'لاعِبْه سبعًا',en:'Play — first 7'},
    d:{ar:'«الولدُ سيّدٌ سبعًا» — السنواتُ الأولى رحمةٌ ولعبٌ وأمان، لا أمرٌ ولا تكليف.',en:'The early years are mercy, play & security — not commands or burdens.'} },
  { ic:'🧭', n:{ar:'أدِّبْه سبعًا',en:'Discipline — next 7'},
    d:{ar:'«وعبدٌ سبعًا» — سنواتُ التعليم والتأديب وبناء العادة والمسؤولية.',en:'The years of teaching, discipline, habit & responsibility.'} },
  { ic:'🤝', n:{ar:'صاحِبْه سبعًا',en:'Befriend — next 7'},
    d:{ar:'«ووزيرٌ سبعًا» — المراهقةُ صداقةٌ وشورى واحترام، ثمّ إطلاقٌ نحو الرشد.',en:'Adolescence is friendship & counsel, then release toward adulthood.'} },
];

window.TARBIYAH.pillars = [
  { ic:'📿', n:{ar:'نظرةُ العلماء',en:'The scholars\u2019 view'}, d:{ar:'هديٌ نبويٌّ وفقهُ تربية: ماذا نغرس، ومتى نأمر، وكيف نرفق.',en:'Prophetic guidance: what to plant, when to command, how to be gentle.'} },
  { ic:'🧠', n:{ar:'نظرةُ علم النفس',en:'The psychology view'}, d:{ar:'مراحلُ النموّ تفسّر حاجةَ الطفل في كلِّ سنّ، فنوافقها لا نصادمها.',en:'Developmental stages explain each age\u2019s need, so we work with it.'} },
  { ic:'🕰️', n:{ar:'خريطةُ الوقت',en:'The time-map'}, d:{ar:'كم وقتًا، ومتى، وأيُّ نشاطٍ — جدولٌ يوميٌّ وأسبوعيٌّ واقعيّ.',en:'How much, when & what activity — a realistic daily & weekly plan.'} },
  { ic:'🩹', n:{ar:'المشكلاتُ وعلاجُها',en:'Problems & treatment'}, d:{ar:'مشكلاتُ كلِّ مرحلةٍ وحلُّها بأسلوبٍ شرعيٍّ نفسيٍّ عمليّ.',en:'Each stage\u2019s problems, solved the Islamic + psychological way.'} },
  { ic:'✅', n:{ar:'المحاسبةُ والمتابعة',en:'Accountability & follow-up'}, d:{ar:'قائمةٌ تُحاسِب بها نفسَك، ومتابعةٌ دوريّةٌ تقيس بها التقدّم.',en:'A checklist to hold yourself to account, and periodic tracking.'} },
];

/* ── four constants whatever the age ── */
window.TARBIYAH.constants = [
  { ic:'💗', n:{ar:'الحبُّ والحضن',en:'Love & affection'}, d:{ar:'الأمانُ العاطفيُّ قبل كلِّ تعليم؛ كلمةٌ طيّبةٌ وحضنٌ كلَّ يوم.',en:'Emotional safety before any teaching; a kind word & a hug daily.'} },
  { ic:'🧎', n:{ar:'القدوةُ الحيّة',en:'Living example'}, d:{ar:'الطفلُ يقلّد لا يسمع؛ كُن أنت ما تريده أن يكون.',en:'A child imitates, not just hears; be what you want him to be.'} },
  { ic:'🕌', n:{ar:'العبادةُ المرئيّة',en:'Visible worship'}, d:{ar:'اربط البيتَ بالله: صلاةٌ تُرى، قرآنٌ يُسمَع، دعاءٌ ظاهر.',en:'Tie the home to Allah: prayer seen, Qur\u2019an heard, du\u2019a aloud.'} },
  { ic:'👂', n:{ar:'الإصغاءُ والوقت',en:'Listening & time'}, d:{ar:'المُصغى إليه لا يبحث عن أذنٍ في الخارج؛ وقتُك هو حبُّك المترجَم.',en:'The heard child seeks no ear outside; your time is love made visible.'} },
];

/* ── the philosophy of time with children (front section) ── */
window.TARBIYAH.timePhilosophy = {
  intro:{ar:'أكثرُ ما يُربّي الأبناءَ ليس الدروسَ المقصودة، بل الوقتُ المبذولُ والقدوةُ المعيشة. والوقتُ مع الطفلِ نوعان: وقتٌ كميٌّ (الحضورُ الطويلُ المطمئن) ووقتٌ نوعيٌّ (لحظاتٌ مركّزةٌ مليئةٌ بالانتباه). الطفلُ لا يحفظ ما قلتَ بقدرِ ما يحفظ كيف كنتَ معه. وهذه الخريطةُ تُترجِم الحبَّ إلى دقائقَ وأنشطةٍ محسوبة.',
    en:'What raises children most is not deliberate lessons but invested time and a lived example. Time with a child is two kinds: quantity time (long, reassuring presence) and quality time (focused, fully-attentive moments). A child remembers less what you said than how you were with him. This map turns love into measured minutes and activities.'},
  laws:[
    { ic:'⏳', t:{ar:'القليلُ الدائمُ خيرٌ من الكثيرِ المنقطع',en:'A little, daily, beats a lot that stops'}, d:{ar:'عشرُ دقائقَ كلَّ يومٍ تبني أكثرَ من ساعتين في الأسبوع؛ الدماغُ يثبّت بالتكرارِ لا بالدفعة.',en:'Ten minutes daily build more than two hours weekly; the brain consolidates by repetition, not bursts.'} },
    { ic:'🎯', t:{ar:'الوقتُ النوعيُّ: انتباهٌ كامل',en:'Quality time = full attention'}, d:{ar:'خمسُ دقائقَ بلا هاتفٍ ولا تشتّتٍ أغلى من ساعةٍ مشتّتة؛ انظر في عينيه واسمعه.',en:'Five phone-free, undistracted minutes beat a distracted hour; look in his eyes and listen.'} },
    { ic:'🔁', t:{ar:'الطقوسُ الثابتةُ ترسّخ الانتماء',en:'Fixed rituals root belonging'}, d:{ar:'موعدٌ ثابتٌ يوميّ (دعاءُ النوم، حكايةٌ، فطورُ الجمعة) يصنع أمانًا وذكرياتٍ تدوم.',en:'A fixed daily ritual (bedtime du\u2019a, a story, Friday breakfast) builds security & lasting memories.'} },
    { ic:'🤲', t:{ar:'كلُّ دقيقةٍ عبادةٌ ونيّة',en:'Every minute is worship & intention'}, d:{ar:'احتسِب وقتَك مع ولدِك صدقةً وتربيةً؛ النيّةُ تحوّل اللعبَ إلى أجرٍ والتعليمَ إلى قربة.',en:'Count your time with your child as charity & nurture; intention turns play into reward.'} },
  ],
  evidence:{text:{ar:'«وكفى بالمرءِ إثمًا أن يُضيِّعَ من يقوت»',en:'\u201cIt is enough sin for a person to neglect those he is responsible for.\u201d'}, ref:{ar:'أبو داود',en:'Abu Dawud'}},
};

/* ── general method for handling any problem (front section) ── */
window.TARBIYAH.problemMethod = {
  intro:{ar:'لكلِّ مرحلةٍ مشكلاتُها، وعلاجُها يجمع بين ميزانِ الشرعِ وفهمِ النفس. وقبل أيِّ مشكلةٍ خاصّةٍ، اتبع هذه الخطواتِ الستَّ التي تصلح لكلِّ سلوكٍ صعب:',
    en:'Every stage has its problems, and the cure joins the scale of the Shari\u2019ah with the understanding of the self. Before any specific problem, follow these six steps that fit any difficult behaviour:'},
  steps:[
    { n:1, t:{ar:'افهم الحاجةَ خلف السلوك',en:'Understand the need behind the behaviour'}, d:{ar:'السلوكُ السيّئُ رسالةٌ عن حاجةٍ غيرِ مُلبّاة (انتباه، أمان، نوم، جوع). عالِج الحاجةَ لا العَرَض.',en:'Bad behaviour is a message about an unmet need (attention, safety, sleep, hunger). Treat the need, not the symptom.'} },
    { n:2, t:{ar:'اضبط نفسَك أوّلًا',en:'Regulate yourself first'}, d:{ar:'لا تُربِّ وأنتَ غاضب؛ «إذا غضب أحدُكم فليسكت». طفلٌ هائجٌ لا يهدأ بوالدٍ هائج.',en:'Don\u2019t discipline while angry; \u201cif one of you is angry, let him be silent.\u201d A raging child is not calmed by a raging parent.'} },
    { n:3, t:{ar:'اتّصل قبل أن تُصحِّح',en:'Connect before you correct'}, d:{ar:'احتضنه وسمِّ شعورَه («أراك غاضبًا») قبل أيِّ توجيه؛ القلبُ المطمئنُّ يقبل التصحيح.',en:'Hug him & name the feeling (\u201cI see you\u2019re angry\u201d) before any direction; a settled heart accepts correction.'} },
    { n:4, t:{ar:'علِّم البديلَ الصحيح',en:'Teach the right alternative'}, d:{ar:'لا تكتفِ بـ«لا»؛ أرِه ماذا يفعل بدلًا منها. الطفلُ يحتاج مهارةً لا توبيخًا.',en:'Don\u2019t stop at \u201cno\u201d; show him what to do instead. A child needs a skill, not a scolding.'} },
    { n:5, t:{ar:'نتائجُ طبيعيّةٌ لا انتقام',en:'Natural consequences, not revenge'}, d:{ar:'اربط النتيجةَ بالفعلِ بهدوءٍ وثبات؛ الحزمُ بلا قسوة، واللينُ بلا تسيّب.',en:'Tie the consequence to the act, calmly & consistently; firmness without harshness, gentleness without chaos.'} },
    { n:6, t:{ar:'أصلِح واغرس ودُلَّ على الله',en:'Repair, plant & point to Allah'}, d:{ar:'بعد الهدوء: أعِد الوصل، اشكر التحسّن، واربط الخيرَ بحبِّ الله ومراقبتِه.',en:'After calm: restore the bond, praise improvement, & tie good to Allah\u2019s love & watchfulness.'} },
  ],
  warn:{ar:'تجنّب نهائيًّا: الضربَ المُهين، السبَّ والتحقير، المقارنةَ بالإخوة، التهديدَ الكاذب، والعقابَ أمام الناس — كلُّها تكسِر الثقةَ وتورِث العنادَ والكذب.',
    en:'Avoid entirely: humiliating hitting, insults & belittling, comparison with siblings, false threats, and punishment in public — all break trust and breed defiance & lying.'},
};

/* ── timeless principles (back section) ── */
window.TARBIYAH.principles = [
  ['🤲',{ar:'القدوةُ قبل الكلمة',en:'Example before words'},{ar:'طفلُك يصير ما يراك عليه لا ما تأمره به. أصلِح نفسَك يصلُح ولدُك.',en:'He becomes what he sees in you, not what you command. Fix yourself and your child is fixed.'}],
  ['❤️',{ar:'الحبُّ قبل التوجيه',en:'Love before direction'},{ar:'اربط طفلَك بك قبل أن تربطه بالأمر؛ القلبُ الآمنُ يقبل التوجيه.',en:'Bond with your child before binding him with rules; a safe heart accepts guidance.'}],
  ['🪜',{ar:'التدرّجُ سُنّةٌ ربّانيّة',en:'Gradualness is divine'},{ar:'لا تطلب من مرحلةٍ ما هو لِما بعدها؛ لكلِّ سنٍّ تكليفُها ولينُها.',en:'Don\u2019t demand of one stage what belongs to the next; each age has its duty & gentleness.'}],
  ['🗣️',{ar:'الإنصاتُ قبل المحاضرة',en:'Listen before lecturing'},{ar:'مَن أنصت لولده سمِعه ولدُه؛ المراهقُ يُطيع من يحترمه.',en:'Who listens to his child is heard; the teen obeys who respects him.'}],
  ['🤝',{ar:'الثباتُ واتّفاقُ الأبوين',en:'Consistency & parental accord'},{ar:'تناقضُ الأبوين أو تذبذبُ القاعدةِ يهدم ما تبنيه؛ اتّفِقا وداوِما.',en:'Parents contradicting or a wavering rule destroys what you build; agree & persist.'}],
  ['📿',{ar:'الدعاءُ سرُّ التوفيق',en:'Du\u2019a is the secret'},{ar:'الهدايةُ بيد الله؛ ادعُ لولدك: «ربِّ هَب لي من الصالحين».',en:'Guidance is Allah\u2019s; pray: \u201cMy Lord, grant me a righteous child.\u201d'}],
];

window.TARBIYAH.sources = [
  {ar:'القرآنُ الكريمُ وهَديُ النبيِّ ﷺ في تربية الأولاد — صحيحُ البخاريِّ ومسلمٍ وسننُ أبي داود والترمذيّ.',en:'The Qur\u2019an & the Prophet\u2019s ﷺ guidance — Bukhari, Muslim, Abu Dawud & Tirmidhi.'},
  {ar:'الأثرُ في المراحل: «الولدُ سيّدٌ سبعًا، وعبدٌ سبعًا، ووزيرٌ سبعًا» — اللعبُ ثمّ التأديبُ ثمّ المصاحبة.',en:'The maxim of the stages: \u201ca master seven, a servant seven, a minister seven\u201d — play, discipline, companionship.'},
  {ar:'الشيخ عبد الله ناصح علوان — «تربية الأولاد في الإسلام»: المسؤوليّاتُ التربويّةُ ومراحلُها.',en:'Shaykh Abdullah Nasih Ulwan — \u201cChild Education in Islam\u201d: the educational responsibilities & their stages.'},
  {ar:'ابنُ القيّم — «تحفة المودود بأحكام المولود»، والإمامُ الغزالي — «إحياء علوم الدين» (رياضةُ الصبيان).',en:'Ibn al-Qayyim — \u201cTuhfat al-Mawdud\u201d & al-Ghazali — \u201cIhya\u2019\u201d (the disciplining of children).'},
  {ar:'منهجُ المراحلِ (احتياجات · مخاطر · قيم) مستفادٌ من سلسلةِ د. محمد خير الشَّعَّال في تربية الأبناء.',en:'The per-stage framework (needs · risks · values) draws on Dr. M.K. al-Sha\u2019al\u2019s series on raising children.'},
  {ar:'علمُ نفسِ النموّ: إريك إريكسون (المراحل النفسيّة الاجتماعيّة)، جان بياجيه (النموّ المعرفيّ)، جون بولبي (التعلّق)، ديانا باومريند (أنماط التربية)، جون غوتمان (التدريب الانفعاليّ).',en:'Developmental psychology: Erikson (psychosocial stages), Piaget (cognitive growth), Bowlby (attachment), Baumrind (parenting styles), Gottman (emotion-coaching).'},
  {ar:'كتبُ «ركن الأهل» في هذه المنصّة — «خارطةُ طريق المربّي» و«خطةُ حفظ القرآن» — التطبيقُ العمليُّ لهذا الدليل عبر أركانِ الموقع.',en:'The Parents\u2019-Corner books here — \u201cParent Roadmap\u201d & \u201cQur\u2019an Memorization Plan\u201d — the practical application across the site.'},
];

window.TARBIYAH.closingDua = {ar:'«رَبَّنا هَب لنا من أزواجِنا وذرّيّاتِنا قُرّةَ أعيُنٍ واجعلنا للمتّقين إمامًا».',en:'\u201cOur Lord, grant us from our spouses & offspring comfort to our eyes, and make us leaders for the righteous.\u201d'};
window.TARBIYAH.disclaimer = {ar:'هذا الدليلُ مُعينٌ تربويٌّ لا فتوى ولا تشخيصٌ طبّيّ؛ يجمع بين هَدي الشرعِ وعلمِ النفسِ فيما لا يخالف الشرع. راجِع أهلَ العلمِ في الأحكام، والطبيبَ والمختصَّ النفسيَّ في الحالاتِ الخاصّة.',
  en:'This is an educational aid, not a fatwa or medical diagnosis; it joins the Shari\u2019ah\u2019s guidance with psychology where they do not conflict. Consult scholars for rulings, and physicians/psychologists for specific conditions.'};
