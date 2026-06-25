/* ════════════════════════════════════════════════════════════════
   behavior-core.js — «مفاتيحُ السلوك» · حلُّ مشكلاتِ الأطفالِ السلوكيّة
   A parent guide solving 8 childhood behaviour problems from four
   lenses: religious (شرعي), educational (تربوي), psychological
   (نفسي) & medical (طبي). Written as a Muslim educator + physician +
   behavioural specialist. Problems pushed by problem-1..8.js.
   Each problem: natural-vs-abnormal · 4-lens view · causes · worked
   examples · a clear realistic program · checklist. (~6 pages each.)
   Sources: Qur'an & Sunnah; Ulwan, Ibn al-Qayyim, al-Ghazali;
   developmental & clinical psychology (Erikson, Piaget, Gottman,
   Baumrind, Kazdin, CBT/behaviour-modification); pediatric guidance.
   ════════════════════════════════════════════════════════════════ */
window.BEHAVIOR = { problems: [] };

window.BEHAVIOR.meta = {
  title:{ar:'مفاتيحُ السلوك', en:'Keys to Behaviour'},
  subtitle:{ar:'حلُّ مشكلاتِ الأطفالِ السلوكيّة — برؤيةٍ شرعيّةٍ تربويّةٍ نفسيّةٍ طبّيّة', en:'Solving children\u2019s behaviour problems — a religious, educational, psychological & medical view'},
  blurb:{ar:'ثماني مشكلاتٍ يواجهها كلُّ بيت: الكذب، الخوف، الغضب، السبّ، التشتّت، الغيرة، عدمُ سماعِ الكلام، وعدمُ تحمّلِ المسؤوليّة. لكلِّ مشكلةٍ بابٌ كامل: الفرقُ بين الطبيعيِّ وغيرِ الطبيعيّ، والرؤيةُ الشرعيّةُ والتربويّةُ والنفسيّةُ والطبّيّة، والأسبابُ، وأمثلةٌ عمليّةٌ مشروحة، وبرنامجٌ واقعيٌّ واضحٌ للعلاج، وقائمةُ متابعة.',
    en:'Eight problems every home meets: lying, fear, anger, cursing, distraction, jealousy, not listening & shirking responsibility. Each gets a full chapter: the natural vs the concerning, the religious, educational, psychological & medical view, the causes, worked examples, a clear realistic treatment program & a follow-up checklist.'},
};

/* four lenses */
window.BEHAVIOR.lenses = [
  { ic:'📿', n:{ar:'شرعيّ',en:'Religious'}, d:{ar:'هَديُ الكتابِ والسنّةِ في معالجةِ السلوكِ بالرحمةِ والحكمةِ والقدوة.',en:'Qur\u2019an & Sunnah guidance: treating behaviour with mercy, wisdom & example.'} },
  { ic:'🌱', n:{ar:'تربويّ',en:'Educational'}, d:{ar:'أصولُ التربيةِ في بناءِ العادةِ وتعديلِ السلوكِ بالتدرّجِ والثبات.',en:'Educational principles: building habits & shaping behaviour gradually & consistently.'} },
  { ic:'🧠', n:{ar:'نفسيّ',en:'Psychological'}, d:{ar:'فهمُ الحاجةِ والدافعِ خلف السلوك، وأدواتُ تعديلِه المثبتةُ علميًّا.',en:'Understanding the need & motive behind behaviour, & its evidence-based tools.'} },
  { ic:'🩺', n:{ar:'طبّيّ',en:'Medical'}, d:{ar:'متى يكون السلوكُ عَرَضًا لحالةٍ تحتاج طبيبًا أو مختصًّا — وعلاماتُ ذلك.',en:'When behaviour is a symptom needing a doctor or specialist \u2014 and its signs.'} },
];

/* the universal method (front) */
window.BEHAVIOR.method = {
  intro:{ar:'قبل أيِّ مشكلةٍ بعينها، هذه القواعدُ الستُّ تصلح لكلِّ سلوكٍ صعب؛ هي العمودُ الفقريُّ لكلِّ برنامجٍ في هذا الكتاب:',
    en:'Before any specific problem, these six rules fit every difficult behaviour; they are the backbone of every program in this book:'},
  steps:[
    {n:1,t:{ar:'افهم الحاجةَ خلف السلوك',en:'Understand the need behind it'},d:{ar:'السلوكُ رسالةٌ عن حاجةٍ غيرِ مُلبّاة (انتباه، أمان، قدرة، عجز). عالِج الحاجةَ لا العَرَض.',en:'Behaviour is a message about an unmet need (attention, safety, ability, helplessness). Treat the need, not the symptom.'}},
    {n:2,t:{ar:'افصِل الطفلَ عن السلوك',en:'Separate the child from the behaviour'},d:{ar:'«فعلُك خطأ» لا «أنت سيّئ». انتقِد الفعلَ واحفظ كرامةَ الطفل.',en:'\u201cYour act is wrong,\u201d not \u201cyou are bad.\u201d Criticize the act & preserve the child\u2019s dignity.'}},
    {n:3,t:{ar:'كُن قدوةً قبل أن تأمر',en:'Be the example before commanding'},d:{ar:'الطفلُ يقلّد لا يسمع؛ لا تطلب صدقًا وأنت تكذب، ولا هدوءًا وأنت تصرخ.',en:'A child imitates, not hears; don\u2019t demand truth while you lie, nor calm while you shout.'}},
    {n:4,t:{ar:'عزّز الإيجابيَّ أكثرَ من معاقبةِ السلبيّ',en:'Reinforce the positive more than punishing the negative'},d:{ar:'امدح السلوكَ الحسنَ فورًا؛ التعزيزُ أقوى من العقابِ في بناءِ العادة.',en:'Praise good behaviour instantly; reinforcement beats punishment in building habits.'}},
    {n:5,t:{ar:'ثباتٌ واتّفاقُ الأبوين',en:'Consistency & parental accord'},d:{ar:'قاعدةٌ متذبذبةٌ أو أبوان متناقضان يُفسدان أيَّ برنامج. اتّفِقا وداوِما.',en:'A wavering rule or contradicting parents ruin any program. Agree & persist.'}},
    {n:6,t:{ar:'الصبرُ والدعاءُ والتدرّج',en:'Patience, du\u2019a & gradual change'},d:{ar:'تغييرُ السلوكِ يحتاج أسابيعَ لا أيّامًا؛ اصبر، وادعُ، وقِس التقدّمَ لا الكمال.',en:'Behaviour change takes weeks, not days; be patient, pray, & measure progress not perfection.'}},
  ],
  warn:{ar:'تجنّب نهائيًّا في كلِّ مشكلة: الضربَ المُهين، التحقيرَ والشتم، المقارنةَ بالإخوة، التهديدَ الكاذب، الوصمَ («أنت كذّاب/جبان»)، والعقابَ أمام الناس — كلُّها تُرسّخ المشكلةَ وتزيدها.',
    en:'Avoid entirely in every problem: humiliating hitting, belittling & insults, comparison with siblings, false threats, labeling (\u201cyou\u2019re a liar/coward\u201d), & punishment in public — all entrench the problem & worsen it.'},
};

/* how to read the natural-vs-abnormal sections (front) */
window.BEHAVIOR.normalIntro = {
  intro:{ar:'أهمُّ سؤالٍ يطرحه الأهل: «هل هذا طبيعيٌّ أم يحتاج تدخّلًا؟». معظمُ السلوكياتِ الصعبةِ مرحلةٌ نموٍّ طبيعيّةٌ تمرُّ بالرفقِ والتوجيه. لكنّ بعضَها — حين يشتدّ، أو يطول، أو يعطّل الحياة، أو يؤذي — يصير علامةً تستدعي مختصًّا. في كلِّ بابٍ جدولٌ يفرّق بوضوحٍ بين الحالتين.',
    en:'The most important question parents ask: \u201cis this normal or does it need intervention?\u201d Most difficult behaviours are a normal developmental phase that passes with gentleness & guidance. But some — when severe, prolonged, life-disrupting, or harmful — become a sign that calls for a specialist. Each chapter has a table that clearly distinguishes the two.'},
  flags:[
    {ic:'⏱️', t:{ar:'المدّة',en:'Duration'}, d:{ar:'سلوكٌ يستمرّ أكثرَ من ٦ أشهرٍ رغم العلاجِ الصحيح.',en:'A behaviour lasting over 6 months despite right handling.'}},
    {ic:'📊', t:{ar:'الشدّة',en:'Severity'}, d:{ar:'أشدُّ بكثيرٍ من أقرانِه في نفسِ السنّ.',en:'Far more intense than peers of the same age.'}},
    {ic:'🚧', t:{ar:'التعطيل',en:'Impairment'}, d:{ar:'يعطّل الدراسةَ أو العلاقاتِ أو حياةَ الأسرة.',en:'Disrupts school, relationships or family life.'}},
    {ic:'🩸', t:{ar:'الأذى',en:'Harm'}, d:{ar:'يؤذي نفسَه أو غيرَه، أو يصحبه تراجعٌ أو انطواء.',en:'Harms self or others, or comes with regression/withdrawal.'}},
  ],
  note:{ar:'إذا اجتمعت هذه العلاماتُ فلا تتردّد في استشارةِ طبيبِ الأطفالِ أو المختصِّ النفسيِّ؛ التدخّلُ المبكّرُ رحمةٌ لا وصمة.',
    en:'If these signs gather, don\u2019t hesitate to consult a pediatrician or psychologist; early intervention is a mercy, not a stigma.'},
};

window.BEHAVIOR.principles = [
  ['🤲',{ar:'القدوةُ قبل الكلمة',en:'Example before words'},{ar:'لا يُعالَج سلوكٌ بأمرٍ يناقضه فعلُك؛ كُن أنت التغييرَ الذي تريده.',en:'No behaviour is fixed by a command your action contradicts; be the change you want.'}],
  ['❤️',{ar:'الرابطةُ قبل الإصلاح',en:'Bond before correction'},{ar:'الطفلُ يقبل التوجيهَ ممّن يحبّه ويثق به؛ ابنِ الجسرَ ثمّ اعبُره.',en:'A child accepts guidance from whom he loves & trusts; build the bridge, then cross it.'}],
  ['🎯',{ar:'مشكلةٌ واحدةٌ كلَّ مرّة',en:'One problem at a time'},{ar:'لا تعالج كلَّ شيءٍ معًا؛ اختر الأهمَّ وركّز حتى يتحسّن.',en:'Don\u2019t treat everything at once; pick the most important & focus until it improves.'}],
  ['📏',{ar:'النتائجُ لا الانتقام',en:'Consequences, not revenge'},{ar:'اربط النتيجةَ بالفعلِ بهدوءٍ وثبات؛ الحزمُ بلا قسوة.',en:'Tie the consequence to the act calmly & consistently; firmness without harshness.'}],
  ['🪜',{ar:'التدرّجُ والصبر',en:'Gradualness & patience'},{ar:'العادةُ بُنيت في شهورٍ فلا تُهدَم في يوم؛ تقدّمٌ صغيرٌ كلَّ أسبوعٍ نجاح.',en:'A habit built over months isn\u2019t undone in a day; small weekly progress is success.'}],
  ['📿',{ar:'الدعاءُ سرُّ التوفيق',en:'Du\u2019a is the secret'},{ar:'صلاحُ الولدِ بيدِ الله؛ ادعُ له بظهرِ الغيبِ وأنت تعمل.',en:'A child\u2019s rectitude is in Allah\u2019s hand; pray for him in his absence as you work.'}],
];

window.BEHAVIOR.sources = [
  {ar:'القرآنُ الكريمُ وهَديُ النبيِّ ﷺ في الرفقِ بالطفلِ وتقويمِ سلوكه — البخاريُّ ومسلمٌ وأبو داود والترمذيّ.',en:'The Qur\u2019an & the Prophet\u2019s ﷺ guidance on gentleness with children & correcting behaviour — Bukhari, Muslim, Abu Dawud & Tirmidhi.'},
  {ar:'الشيخ عبد الله ناصح علوان — «تربية الأولاد في الإسلام»: أساليبُ التقويمِ والعقابِ والثواب.',en:'Shaykh Abdullah Nasih Ulwan — \u201cChild Education in Islam\u201d: methods of correction, reward & discipline.'},
  {ar:'ابنُ القيّم — «تحفة المودود»، والإمامُ الغزالي — «إحياء علوم الدين» (رياضةُ الصبيان وتأديبهم).',en:'Ibn al-Qayyim — \u201cTuhfat al-Mawdud\u201d & al-Ghazali — \u201cIhya\u2019\u201d (training & disciplining children).'},
  {ar:'علمُ نفسِ النموّ: إريكسون، بياجيه، باومريند (أنماط التربية)، جون غوتمان (التدريب الانفعاليّ).',en:'Developmental psychology: Erikson, Piaget, Baumrind (parenting styles), Gottman (emotion-coaching).'},
  {ar:'تعديلُ السلوك والعلاجُ المعرفيُّ السلوكيّ (CBT): التعزيزُ، الإطفاءُ، النتائجُ المنطقيّة، نموذجُ كازدِن للوالدين.',en:'Behaviour modification & CBT: reinforcement, extinction, logical consequences, the Kazdin parenting model.'},
  {ar:'الإرشاداتُ الطبّيّةُ لطبِّ الأطفالِ والصحّةِ النفسيّةِ في تمييزِ السلوكِ الطبيعيِّ من الاضطراب.',en:'Pediatric & mental-health clinical guidance on distinguishing normal behaviour from disorder.'},
];

window.BEHAVIOR.closing = {ar:'«رَبَّنا هَب لنا من أزواجِنا وذرّيّاتِنا قُرّةَ أعيُنٍ واجعلنا للمتّقين إمامًا». تذكّر: لا يوجد طفلٌ «سيّئ»، بل سلوكٌ يحتاج فهمًا وتوجيهًا وحبًّا. اصبر، واثبُت، وادعُ.',
  en:'\u201cOur Lord, grant us comfort from our spouses & offspring, & make us leaders for the righteous.\u201d Remember: there is no \u201cbad\u201d child, only behaviour needing understanding, guidance & love. Be patient, be consistent, & pray.'};
window.BEHAVIOR.disclaimer = {ar:'هذا الكتابُ مُعينٌ تربويٌّ لا تشخيصٌ طبّيٌّ ولا فتوى. يجمع بين هَديِ الشرعِ والعلمِ الحديثِ فيما لا تعارض. راجِع أهلَ العلمِ في الأحكام، وطبيبَ الأطفالِ والمختصَّ النفسيَّ في الحالاتِ التي تتجاوز الطبيعيّ.',
  en:'This is an educational aid, not a medical diagnosis or fatwa. It joins the Shari\u2019ah\u2019s guidance with modern science where they don\u2019t conflict. Consult scholars for rulings, & a pediatrician/psychologist for cases beyond the normal.'};
