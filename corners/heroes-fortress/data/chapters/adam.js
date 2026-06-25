// data/chapters/adam.js — Era I · Adam عليه السلام  (faithful to Ibn Kathir's قصص الأنبياء)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.adam = {
  id: 'adam', era: 'prophets', icon: 'apple',
  name: { ar: 'آدَمُ عليه السلام', en: 'Adam' },
  tag:  { ar: 'أبو البَشَرِ وأوّلُ الأنبياء', en: 'Father of mankind & first prophet' },
  accent: '#5DA236', accent2: '#7FBF4D',
  greeting: { ar: 'أهلاً يا بطل! دعني أحكي لك عن آدمَ عليه السلام، أوّلِ إنسانٍ خلقه الله، وكيف علَّمنا أن نقولَ «أنا آسف» ونعودَ إلى ربِّنا.', en: "Hello, hero! Let me tell you about Adam, the first human Allah created — and how he taught us to say 'I'm sorry' and turn back to our Lord." },

  knowledge: {
    didYouKnow: { ar: 'آدمُ عليه السلام هو أوّلُ إنسانٍ وأوّلُ نبيّ، وكلُّ الناسِ من ولده.', en: 'Adam was the first human and the first prophet — all people are his children.' },
    who: {
      ar: 'خلقَ اللهُ آدمَ عليه السلام مِن طينٍ بِيدِه، ونفخَ فيه مِن روحِه، وعلَّمه <b>أسماءَ كلِّ شيء</b>. وأمرَ الملائكةَ أن يَسجدوا له إكراماً، فسجدوا إلا إبليسَ استكبر. ثم أسكنه اللهُ الجنّةَ، وجعله <b>خليفةً في الأرض</b>.',
      en: "Allah created Adam from clay with His own hand, breathed life into him, and taught him <b>the names of everything</b>. He ordered the angels to bow to him in honour — and they all did, except Iblis, who was proud. Then Allah let him live in Paradise and made him a <b>caretaker of the earth</b>.",
    },
    facts: [
      { ar: 'خلقه اللهُ بِيدِه ونفخَ فيه مِن روحِه.', en: 'Allah created him with His hand and breathed life into him.' },
      { ar: 'علَّمه اللهُ أسماءَ كلِّ الأشياء، فكان أعلمَ مِن الملائكة.', en: 'Allah taught him the names of all things, so he knew more than the angels.' },
      { ar: 'سجدتْ له الملائكةُ إلا إبليسَ، الذي رفضَ كِبراً.', en: 'The angels bowed to him — except Iblis, who refused out of pride.' },
      { ar: 'أخطأ ثم تابَ، فعلَّمنا أجملَ دعاءٍ للتوبة.', en: 'He made a mistake, then repented — teaching us a beautiful prayer of forgiveness.' },
    ],
    timeline: [
      { when:{ar:'الخَلق',en:'Creation'}, what:{ar:'خلقه اللهُ مِن طينٍ ونفخَ فيه الروح.',en:'Allah shaped him from clay and gave him life.'} },
      { when:{ar:'العِلم',en:'Knowledge'}, what:{ar:'علَّمه اللهُ أسماءَ كلِّ شيء.',en:'Allah taught him the names of everything.'} },
      { when:{ar:'السُّجود',en:'The Bow'}, what:{ar:'سجدتْ الملائكةُ، ورفضَ إبليسُ كِبراً.',en:'The angels bowed; Iblis refused in pride.'} },
      { when:{ar:'الجنّة',en:'Paradise'}, what:{ar:'سكنَ الجنّةَ مع زوجِه حوّاء.',en:'He lived in Paradise with his wife Hawwa.'} },
      { when:{ar:'التوبة',en:'Repentance'}, what:{ar:'أكلَ مِن الشجرةِ، فتابَ فتابَ اللهُ عليه.',en:'He ate from the tree, repented, and Allah forgave him.'} },
      { when:{ar:'الأرض',en:'Earth'}, what:{ar:'نزلَ إلى الأرضِ خليفةً وأوّلَ نبيّ.',en:'He came to earth as a caretaker and first prophet.'} },
    ],
    ayah: { ar: '﴿ وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا ﴾', ref: { ar: 'البقرة ٣١', en: 'Al-Baqarah 31' } },
  },

  story: [
    { scene:'garden', text:{ ar:'في البدايةِ لم يكن على الأرضِ بشر. أرادَ اللهُ تعالى أن يخلقَ خَلْقاً جديداً، فقالَ للملائكة: <b>«إنّي جاعلٌ في الأرضِ خليفة»</b>. تعجّبتِ الملائكةُ وسألتْ بأدب، فقالَ اللهُ بحكمتِه: «إنّي أعلمُ ما لا تعلمون».',
      en:'In the beginning there were no humans on earth. Allah willed to create a new being, and told the angels: <b>"I am placing a caretaker on the earth."</b> The angels wondered and asked politely, and Allah in His wisdom said: "I know what you do not know."' } },
    { scene:'garden', text:{ ar:'أخذَ اللهُ قبضةً مِن ترابِ الأرضِ، فخلقَ منها آدمَ بِيدِه، وتركه زمناً صورةً مِن طين. ثم <b>نفخَ فيه مِن روحِه</b>، فدبَّتِ الحياةُ فيه. عطسَ آدمُ فقال: «الحمدُ لله»، فقالَ له ربُّه: «يرحمُك ربُّك».',
      en:'Allah took a handful of the earth\'s soil and shaped Adam from it with His hand, leaving him for a while as a form of clay. Then He <b>breathed into him from His spirit</b>, and life flowed through him. Adam sneezed and said "All praise to Allah," and his Lord replied: "May your Lord have mercy on you."' } },
    { scene:'pen', text:{ ar:'ثم <b>علَّمه اللهُ أسماءَ كلِّ شيء</b> — الجبالِ والبحارِ والطيرِ والشجرِ والنجوم. وعرضَها على الملائكةِ فلم يعرفوها، فقالوا: «سبحانك لا عِلمَ لنا إلا ما علَّمتنا». فسألَ اللهُ آدمَ فسمّاها كلَّها! فعلِمَ الجميعُ أنّ آدمَ مخلوقٌ مميَّزٌ يُحبُّ العِلم.',
      en:'Then <b>Allah taught him the names of everything</b> — mountains, seas, birds, trees and stars. He showed them to the angels, who did not know them and said: "Glory to You, we know only what You taught us." Then Allah asked Adam, and he named them all! Everyone saw that Adam was a special being who loved knowledge.' } },
    { scene:'idols', text:{ ar:'أمرَ اللهُ الملائكةَ أن يَسجدوا لآدمَ إكراماً وتحيّةً، فسجدوا كلُّهم طاعةً لله. إلا واحداً: <b>إبليس</b>! قالَ بِكِبرٍ وغرور: «أنا خيرٌ منه، خلقتني مِن نارٍ وخلقتَه مِن طين». فعصى ربَّه، فطردَه اللهُ مِن رحمتِه.',
      en:'Allah ordered the angels to bow to Adam in honour and greeting, and they all bowed in obedience to Allah — except one: <b>Iblis</b>! He said proudly and arrogantly: "I am better than him; You made me from fire and him from clay." He disobeyed his Lord, so Allah cast him out of His mercy.' },
      choice:{ q:{ar:'لماذا رفضَ إبليسُ السجودَ لآدم؟',en:'Why did Iblis refuse to bow to Adam?'},
        opts:[
          { t:{ar:'بسببِ الكِبرِ والغرور',en:'Because of pride and arrogance'}, c:true, exp:{ar:'نعم! الكِبرُ هو أوّلُ ذنبٍ عُصِيَ اللهُ به. فلنحذرْ أن نظنَّ أنفسَنا أفضلَ مِن غيرنا.',en:'Yes! Pride was the first sin against Allah. Let us beware of thinking we are better than others.'} },
          { t:{ar:'لأنّه كان متعَباً',en:'Because he was tired'}, c:false, exp:{ar:'لا، بل رفضَ كِبراً وحَسداً، لا تعباً.',en:'No — he refused out of pride and envy, not tiredness.'} },
          { t:{ar:'لأنّه نسيَ الأمر',en:'Because he forgot'}, c:false, exp:{ar:'لا، بل سمعَ الأمرَ وعصاه عمداً بِكِبر.',en:'No — he heard the command and disobeyed it on purpose, out of pride.'} },
        ] } },
    { scene:'tree', text:{ ar:'خلقَ اللهُ لآدمَ زوجةً اسمُها <b>حوّاء</b> لِيأنسَ بها، وأسكنهما الجنّةَ الواسعةَ الجميلة. قالَ لهما: «كُلا مِن كلِّ ثِمارِها الطيّبةِ حيثُ شئتما، إلا <b>هذه الشجرةَ</b> فلا تقرباها». وحذّرهما: «إنّ إبليسَ لكما عدوٌّ مبين».',
      en:'Allah created for Adam a wife named <b>Hawwa</b> to comfort him, and settled them in the wide, beautiful Paradise. He told them: "Eat of all its good fruits wherever you like, but do not approach <b>this one tree</b>." And He warned them: "Iblis is a clear enemy to you both."' } },
    { scene:'idols', text:{ ar:'لكنَّ إبليسَ حَسَدهما على نعيمِ الجنّة. جاءَ يُوَسوِسُ لهما مرّةً بعدَ مرّة، ويكذبُ ويُقسِم: «ما نهاكما ربُّكما عن هذه الشجرةِ إلا لِئلّا تكونا مَلَكين، وإنّي لكما لَمِن الناصحين!». فصدّقاه ونسيا التحذير، و<b>أكلا مِن الشجرة</b>.',
      en:'But Iblis envied them their bliss in Paradise. He came whispering again and again, lying and even swearing: "Your Lord only forbade you this tree so you would not become angels — truly I am a sincere adviser to you!" They believed him, forgot the warning, and <b>ate from the tree</b>.' } },
    { scene:'tree', text:{ ar:'في الحالِ شعرا بالنَّدمِ والحياء، وزالَ عنهما لباسُهما الجميل. ناداهما اللهُ: «ألم أنهكما عن تلكما الشجرة؟». لم يُلقِ آدمُ اللومَ على غيره، بل <b>اعترفَ بخطئِه</b> وحزِنَ حزناً شديداً. عرفَ أنّه عصى أمرَ ربِّه.',
      en:'At once they felt regret and shame, and their lovely covering left them. Allah called them: "Did I not forbid you that tree?" Adam did not blame anyone else — he <b>admitted his mistake</b> and was deeply sad. He knew he had disobeyed his Lord\'s command.' } },
    { scene:'ascend', text:{ ar:'لم ييأسْ آدمُ مِن رحمةِ الله. تعلَّمَ مِن ربِّه كلماتٍ جميلة، ورفعَ يديه وقال: <b>﴿ رَبَّنا ظَلَمْنا أنفُسَنا ﴾</b> وطلبَ المغفرة. فتابَ اللهُ عليه وأحبَّه. ثم أنزله إلى الأرضِ ليكونَ أوّلَ نبيٍّ يُعلِّمُ أبناءه، وأبا للبشرِ جميعاً. ووعدَه أنّ مَن اتّبعَ هُداه فلا خوفٌ عليه.',
      en:'Adam did not despair of Allah\'s mercy. He learned beautiful words from his Lord, raised his hands and said: <b>"Our Lord, we have wronged ourselves"</b> and asked forgiveness. Allah accepted his repentance and loved him. Then He sent him to earth to be the first prophet teaching his children, and the father of all people. And He promised that whoever follows His guidance need not fear.' } },
  ],

  traits: [
    { ar:'التواضع', en:'Humility' }, { ar:'حُبُّ العِلم', en:'Love of knowledge' },
    { ar:'سرعةُ التوبة', en:'Quick to repent' }, { ar:'الأمل', en:'Hope' },
  ],
  lessons: [
    { icon:'🙇', color:'#5DA236', title:{ar:'اعترفْ بخطئِك',en:'Own your mistakes'},
      body:{ar:'حين أخطأ آدمُ لم يَلُمْ غيرَه ولم يَختبئ، بل قال: «ظلمنا أنفسنا». الاعترافُ بالخطأ أوّلُ خطوةٍ لإصلاحِه.',en:'When Adam erred, he did not blame others or hide — he said: "We wronged ourselves." Admitting a mistake is the first step to fixing it.'},
      apply:{ar:'إذا أخطأتُ أقول «أنا أخطأت» بدلَ أن ألومَ غيري.',en:'When I do wrong, I say "I made a mistake" instead of blaming others.'} },
    { icon:'🤲', color:'#2980B9', title:{ar:'عُدْ إلى اللهِ بسرعة',en:'Turn back quickly'},
      body:{ar:'لم ينتظرْ آدمُ طويلاً، بل سارعَ بالتوبةِ والاستغفار، فأحبَّه اللهُ وقبِلَه.',en:'Adam did not wait long — he hurried to repent and seek forgiveness, and Allah loved and accepted him.'},
      apply:{ar:'أستغفرُ اللهَ فوراً بعدَ الخطأ ولا أُؤجِّل.',en:'I seek Allah\'s forgiveness right away after a mistake, not later.'} },
    { icon:'🌅', color:'#E67E22', title:{ar:'لا تيأسْ أبداً',en:'Never despair'},
      body:{ar:'رغمَ خطئِه، وثِقَ آدمُ برحمةِ اللهِ الواسعةِ ولم ييأس. رحمةُ اللهِ أكبرُ مِن كلِّ ذنب.',en:'Despite his slip, Adam trusted Allah\'s vast mercy and never despaired. Allah\'s mercy is greater than any sin.'},
      apply:{ar:'مهما أخطأتُ، أعرفُ أنّ بابَ اللهِ مفتوحٌ لي دائماً.',en:'However much I slip, I know Allah\'s door is always open to me.'} },
    { icon:'📚', color:'#8E44AD', title:{ar:'أحبَّ العِلم',en:'Love knowledge'},
      body:{ar:'كرَّمَ اللهُ آدمَ بالعِلمِ وعلَّمه أسماءَ كلِّ شيء، فصارَ أعلمَ مِن الملائكة. العِلمُ شرفٌ ورِفعة.',en:'Allah honoured Adam with knowledge and taught him the names of everything, so he knew more than the angels. Knowledge is honour and elevation.'},
      apply:{ar:'أتعلّمُ شيئاً نافعاً جديداً كلَّ يوم.',en:'I learn one new useful thing every day.'} },
    { icon:'🚫', color:'#C0392B', title:{ar:'احذرِ الكِبر',en:'Beware of pride'},
      body:{ar:'سقطَ إبليسُ مِن رحمةِ اللهِ بسببِ ذنبٍ واحد: الكِبر. مَن يتكبّرْ يَسقُط، ومَن يتواضعْ يَرتفع.',en:'Iblis fell from Allah\'s mercy because of one sin: pride. Whoever is arrogant falls, and whoever is humble rises.'},
      apply:{ar:'لا أحتقرُ أحداً ولا أظنُّ أنّي أفضلُ مِن غيري.',en:'I look down on no one and never think I am better than others.'} },
  ],

  memorize: {
    hadith:{ ar:'«للهُ أفرحُ بتوبةِ عبدِه من أحدِكم بدابّتِه إذا وجدها بعد ضياعها»', en:"\"Allah rejoices more at the repentance of His servant than one of you who finds his lost mount in the desert.\"", ref:{ ar:'[رواه البخاري ٦٣٠٩، ومسلم ٢٧٤٧]', en:'[Bukhari 6309 & Muslim 2747]' } },
    ayah: { ar: '﴿ رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ ﴾', ref:{ ar:'الأعراف ٢٣', en:'Al-A\'raf 23' } },
    dua:  { ar: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ', ref:{ ar:'مِن دعاءِ التوبة', en:'A prayer of repentance' } },
    pledge: {
      title: { ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines: [
        { ar:'أعترفُ بخطئي ولا أُكابِر كما كابرَ إبليس.', en:"I will admit my mistakes and not be arrogant like Iblis." },
        { ar:'أقولُ «أنا آسف» بسرعةٍ كما فعلَ آدم.', en:"I will say 'I'm sorry' quickly, like Adam did." },
        { ar:'لا أيأسُ أبداً مِن رحمةِ اللهِ ومغفرتِه.', en:"I will never despair of Allah's mercy and forgiveness." },
        { ar:'أُحبُّ العِلمَ وأتعلّمُ كلَّ يومٍ شيئاً جديداً.', en:'I will love knowledge and learn something new every day.' },
      ],
    },
  },

  activities: [
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'مِمَّ خلقَ اللهُ آدمَ عليه السلام؟',en:'What did Allah create Adam from?'},
          options:[{ar:'مِن طين',en:'From clay'},{ar:'مِن نار',en:'From fire'},{ar:'مِن ماء',en:'From water'}], answer:0 },
        { q:{ar:'مَن رفضَ السجودَ لآدم؟',en:'Who refused to bow to Adam?'},
          options:[{ar:'الملائكة',en:'The angels'},{ar:'إبليس',en:'Iblis'},{ar:'حوّاء',en:'Hawwa'}], answer:1 },
        { q:{ar:'ماذا فعلَ آدمُ بعدَ خطئِه؟',en:'What did Adam do after his mistake?'},
          options:[{ar:'تابَ واستغفرَ الله',en:'He repented and sought forgiveness'},{ar:'هربَ',en:'He ran away'},{ar:'يئسَ',en:'He despaired'}], answer:0 },
      ] },
    { type:'order', title:{ar:'رتّبِ قصةَ آدم',en:'Put Adam\'s story in order'},
      items:[
        {ar:'خلقَ اللهُ آدمَ مِن طين',en:'Allah created Adam from clay'},
        {ar:'علَّمه أسماءَ كلِّ شيء',en:'He taught him the names of everything'},
        {ar:'سجدتْ الملائكةُ ورفضَ إبليس',en:'The angels bowed; Iblis refused'},
        {ar:'أكلَ مِن الشجرةِ بِوَسوسةِ إبليس',en:'He ate from the tree by Iblis\'s whisper'},
        {ar:'تابَ فتابَ اللهُ عليه',en:'He repented and Allah forgave him'},
      ] },
    { type:'whoAmI', title:{ar:'مَن أنا؟',en:'Who am I?'},
      clues:[
        {ar:'خلقني اللهُ بِيدِه مِن طين.',en:'Allah created me with His hand from clay.'},
        {ar:'علَّمني ربّي أسماءَ كلِّ شيء.',en:'My Lord taught me the names of everything.'},
        {ar:'سجدتْ لي الملائكةُ إكراماً.',en:'The angels bowed to me in honour.'},
        {ar:'أنا أوّلُ إنسانٍ وأبو البشر.',en:'I am the first human and father of mankind.'},
      ],
      options:[{ar:'نوح',en:'Nuh'},{ar:'آدم',en:'Adam'},{ar:'إدريس',en:'Idris'}], answer:1 },
  ],

  treasures: {
    medal: { ar:'وِسامُ التوبة', en:'Medal of Repentance' },
    stickers:[
      { icon:'light', color:'#F4D03F', title:{ar:'نفخةُ الروح',en:'Breath of Life'} },
      { icon:'book',  color:'#2980B9', title:{ar:'تاجُ العِلم',en:'Crown of Knowledge'} },
      { icon:'heart', color:'#8E44AD', title:{ar:'قلبٌ تائب',en:'A Repentant Heart'} },
      { icon:'globe', color:'#1ABC9C', title:{ar:'خليفةُ الأرض',en:'Caretaker of Earth'} },
    ],
    moral: { ar:'كلُّنا نُخطئ، لكنَّ البطلَ هو مَن يعترفُ بخطئِه ويعودُ إلى اللهِ بسرعة.', en:'Everyone makes mistakes — but the hero is the one who admits it and turns back to Allah quickly.' },
    reflect:[
      {ar:'متى آخرُ مرّةٍ قلتَ فيها «أنا آسف»؟ لمن تريدُ أن تعتذرَ اليوم؟',en:"When did you last say 'I'm sorry'? Who would you like to apologize to today?"},
      {ar:'آدمُ أحبَّ العِلم. ما الشيءُ الجديدُ الذي تعلّمتَه اليوم؟',en:'Adam loved knowledge. What new thing did you learn today?'},
    ],
  },
};
