// data/activities-heart.js — Challenge Hall for the PURE HEART corner (القلب السليم).
// 8 activities × 3 levels = 24 challenges. Built on the corner's own content:
// the Beautiful Names, love of the Prophet ﷺ, honoring parents, love for Allah's
// sake, and soundness of the heart (its diseases & their cures).
window.HISN = window.HISN || {}; HISN.activities = HISN.activities || {};

HISN.activities.heart = {
  era: 'heart',
  title: { ar: 'ساحةُ القلبِ السليم', en: 'Pure Heart Challenge Hall' },
  sub:   { ar: '٨ أنشطة — كلٌّ على ٣ مستويات (٢٤ تحدّياً)', en: '8 activities — each at 3 levels (24 challenges)' },
  medal: { ar: 'صاحبُ القلبِ السليم', en: 'Owner of the Sound Heart' },
  list: [

  /* 1 · Name of Allah & its meaning */
  { id:'names', icon:'🌙', cat:['love_allah'], title:{ ar:'اسمُ اللهِ ومعناه', en:'Name of Allah & meaning' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'الرحمنُ الرحيم',en:'Ar-Rahman'}, b:{ar:'رحمتُه وسِعَتْ كلَّ شيء',en:'His mercy embraces all'} },
        { a:{ar:'الرزّاق',en:'Ar-Razzaq'},        b:{ar:'يرزقُ كلَّ حيّ',en:'Provides for every living thing'} },
        { a:{ar:'الغفور',en:'Al-Ghafur'},         b:{ar:'يغفرُ الذنوب',en:'Forgives sins'} },
        { a:{ar:'السميعُ البصير',en:'As-Sami al-Basir'}, b:{ar:'يسمعُ ويرى كلَّ شيء',en:'Hears & sees everything'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'العليم',en:'Al-Alim'},   b:{ar:'يعلمُ السرَّ وأخفى',en:'Knows the secret & hidden'} },
        { a:{ar:'القدير',en:'Al-Qadir'},  b:{ar:'على كلِّ شيءٍ قدير',en:'Powerful over all things'} },
        { a:{ar:'الحفيظ',en:'Al-Hafiz'},  b:{ar:'يحفظُك ويرعاك',en:'Guards & watches over you'} },
        { a:{ar:'الودود',en:'Al-Wadud'},  b:{ar:'يحبُّ عبادَه الصالحين',en:'Loves His righteous servants'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'العفوّ',en:'Al-Afuww'},   b:{ar:'يمحو الخطأَ كأنّه لم يكن',en:'Erases the mistake utterly'} },
        { a:{ar:'الحليم',en:'Al-Halim'},   b:{ar:'لا يُعاجِلُ بالعقوبة',en:'Not hasty to punish'} },
        { a:{ar:'اللطيف',en:'Al-Latif'},   b:{ar:'لطفُه بك في الخفاء',en:'His kindness reaches you unseen'} },
        { a:{ar:'الشكور',en:'Ash-Shakur'}, b:{ar:'يشكرُ القليلَ ويضاعِفُه',en:'Rewards the little, multiplied'} },
        { a:{ar:'الحكيم',en:'Al-Hakim'},   b:{ar:'يضعُ كلَّ شيءٍ في موضعِه بحكمة',en:'Places all things wisely'} },
      ]},
    } },

  /* 2 · Heart disease & its cure */
  { id:'cures', icon:'💊', cat:['salamat_qalb'], title:{ ar:'مرضُ القلبِ ودواؤه', en:'Heart disease & its cure' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'الحسد',en:'Envy'},   b:{ar:'الرضا بما قسمَ الله',en:'Contentment with Allah’s decree'} },
        { a:{ar:'الكِبر',en:'Arrogance'}, b:{ar:'التواضع',en:'Humility'} },
        { a:{ar:'الغضب',en:'Anger'},  b:{ar:'الحِلم',en:'Forbearance'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'الحسد',en:'Envy'},     b:{ar:'الرضا والدعاءُ للمحسود',en:'Contentment & du’a for the envied'} },
        { a:{ar:'الرياء',en:'Showing off'}, b:{ar:'الإخلاص',en:'Sincerity'} },
        { a:{ar:'الحقد',en:'Grudge'},   b:{ar:'العفوُ والصفح',en:'Pardon & overlooking'} },
        { a:{ar:'البخل',en:'Stinginess'}, b:{ar:'الكرمُ والإنفاق',en:'Generosity & giving'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'قسوةُ القلب',en:'Hard-heartedness'}, b:{ar:'ذكرُ اللهِ ولينُ القلب',en:'Remembrance softens the heart'} },
        { a:{ar:'الغفلة',en:'Heedlessness'}, b:{ar:'المحاسبةُ والذكر',en:'Self-accounting & dhikr'} },
        { a:{ar:'سوءُ الظنّ',en:'Suspicion'}, b:{ar:'حُسنُ الظنّ',en:'Good assumption'} },
        { a:{ar:'العُجب',en:'Self-admiration'}, b:{ar:'شكرُ النعمةِ لله',en:'Thanking Allah for the blessing'} },
        { a:{ar:'حبُّ الدنيا',en:'Love of dunya'}, b:{ar:'تذكُّرُ الآخرة',en:'Remembering the Hereafter'} },
      ]},
    } },

  /* 3 · Virtue & its meaning */
  { id:'virtues', icon:'🏷️', cat:['love_for_allah','birr_walidayn'], title:{ ar:'الخُلقُ ومعناه', en:'Virtue & meaning' },
    levels:{
      beginner:{ type:'match', pairs:[
        { a:{ar:'برُّ الوالدين',en:'Honoring parents'}, b:{ar:'الإحسانُ إليهما وطاعتُهما في المعروف',en:'Kindness & obedience in good'} },
        { a:{ar:'الحبُّ في الله',en:'Love for Allah’s sake'}, b:{ar:'تحبُّ أخاك لأجلِ الله',en:'Loving your brother for Allah'} },
        { a:{ar:'سلامةُ القلب',en:'Soundness of heart'}, b:{ar:'قلبٌ نقيٌّ من الحقدِ والحسد',en:'A heart pure of grudge & envy'} },
      ]},
      intermediate:{ type:'match', pairs:[
        { a:{ar:'الإخلاص',en:'Sincerity'},  b:{ar:'العملُ لله وحده',en:'Acting for Allah alone'} },
        { a:{ar:'الشكر',en:'Gratitude'},    b:{ar:'الاعترافُ بالنعمةِ وحمدُ المُنعِم',en:'Acknowledging the blessing'} },
        { a:{ar:'التوكُّل',en:'Reliance'},  b:{ar:'الأخذُ بالأسبابِ والاعتمادُ على الله',en:'Means + trust in Allah'} },
        { a:{ar:'الرضا',en:'Contentment'},  b:{ar:'القبولُ بما قسمَ الله',en:'Accepting Allah’s decree'} },
      ]},
      advanced:{ type:'match', pairs:[
        { a:{ar:'الحياء',en:'Modesty'},     b:{ar:'خُلقٌ يبعثُ على ترك القبيح',en:'Restraint from the shameful'} },
        { a:{ar:'الصبر',en:'Patience'},     b:{ar:'حبسُ النفسِ على الطاعةِ عند البلاء',en:'Steadfastness in trial'} },
        { a:{ar:'التوبة',en:'Repentance'},  b:{ar:'الرجوعُ إلى اللهِ وتركُ الذنب',en:'Returning to Allah'} },
        { a:{ar:'محبّةُ النبيِّ ﷺ',en:'Love of the Prophet ﷺ'}, b:{ar:'اتّباعُه وتقديمُ هديِه',en:'Following his guidance'} },
        { a:{ar:'الإحسان',en:'Ihsan'},      b:{ar:'أن تعبدَ اللهَ كأنّك تراه',en:'To worship as if you see Him'} },
      ]},
    } },

  /* 4 · Quiz */
  { id:'facts', icon:'❓', title:{ ar:'اختبارُ القلب', en:'Heart quiz' },
    levels:{
      beginner:{ type:'quiz', questions:[
        { q:{ar:'بمعرفةِ أسماءِ اللهِ الحسنى يزدادُ في القلب؟',en:'Knowing Allah’s names increases what in the heart?'},
          options:[{ar:'حبُّ الله',en:'Love of Allah'},{ar:'الخوفُ من الناس',en:'Fear of people'},{ar:'الغفلة',en:'Heedlessness'}], answer:0 },
        { q:{ar:'مَن أحقُّ الناسِ بحُسنِ صحبتِك؟',en:'Who most deserves your good company?'},
          options:[{ar:'الوالدان',en:'Your parents'},{ar:'الأصدقاء',en:'Friends'},{ar:'الجيران',en:'Neighbors'}], answer:0 },
        { q:{ar:'القلبُ السليمُ قلبٌ خالٍ من؟',en:'A sound heart is free of?'},
          options:[{ar:'الحقدِ والحسد',en:'Grudge & envy'},{ar:'الإيمان',en:'Faith'},{ar:'الرحمة',en:'Mercy'}], answer:0 },
      ]},
      intermediate:{ type:'quiz', questions:[
        { q:{ar:'«المرءُ مع مَن…»؟',en:'“A person will be with…”?'},
          options:[{ar:'أحبّ',en:'whom he loves'},{ar:'سَكَن',en:'where he lives'},{ar:'عمِل',en:'what he does'}], answer:0 },
        { q:{ar:'دواءُ الحسدِ هو؟',en:'The cure for envy is?'},
          options:[{ar:'الرضا والدعاءُ بالخير',en:'Contentment & du’a'},{ar:'الغضب',en:'Anger'},{ar:'الانتقام',en:'Revenge'}], answer:0 },
        { q:{ar:'الإخلاصُ هو العملُ من أجلِ؟',en:'Sincerity is acting for the sake of?'},
          options:[{ar:'الله وحده',en:'Allah alone'},{ar:'المدح',en:'Praise'},{ar:'الجائزة',en:'A prize'}], answer:0 },
      ]},
      advanced:{ type:'quiz', questions:[
        { q:{ar:'قال تعالى ﴿إلّا مَن أتى اللهَ بقلبٍ…﴾؟',en:'“…except one who comes to Allah with a heart…”?'},
          options:[{ar:'سليم',en:'sound (salim)'},{ar:'كبير',en:'big'},{ar:'قويّ',en:'strong'}], answer:0 },
        { q:{ar:'المتحابّونَ في اللهِ يومَ القيامةِ على؟',en:'Those who love for Allah’s sake will be upon?'},
          options:[{ar:'منابرَ من نور',en:'pulpits of light'},{ar:'جبالٍ من ذهب',en:'mountains of gold'},{ar:'سفنٍ',en:'ships'}], answer:0 },
        { q:{ar:'الإحسانُ أن تعبدَ اللهَ كأنّك؟',en:'Ihsan is to worship Allah as if you?'},
          options:[{ar:'تراه',en:'see Him'},{ar:'تسمعُه',en:'hear Him'},{ar:'تكتبُه',en:'write Him'}], answer:0 },
      ]},
    } },

  /* 5 · True or False */
  { id:'truefalse', icon:'⚖️', title:{ ar:'صحٌّ أم خطأ', en:'True or False' },
    levels:{
      beginner:{ type:'trueFalse', items:[
        { statement:{ar:'برُّ الوالدينِ من أحبِّ الأعمالِ إلى الله.',en:'Honoring parents is among the most beloved deeds.'}, t:true },
        { statement:{ar:'الحسدُ خُلقٌ حسنٌ يُحبُّه الله.',en:'Envy is a good trait Allah loves.'}, t:false },
        { statement:{ar:'القلبُ السليمُ يخلو من الشركِ والحقد.',en:'A sound heart is free of shirk & grudge.'}, t:true },
      ]},
      intermediate:{ type:'trueFalse', items:[
        { statement:{ar:'الإخلاصُ شرطٌ لقبولِ العمل.',en:'Sincerity is a condition for accepting deeds.'}, t:true },
        { statement:{ar:'الرياءُ يُبطِلُ العمل.',en:'Showing off nullifies the deed.'}, t:true },
        { statement:{ar:'طاعةُ الوالدينِ تكونُ في معصيةِ الله.',en:'We obey parents even in disobeying Allah.'}, t:false },
      ]},
      advanced:{ type:'trueFalse', items:[
        { statement:{ar:'محبّةُ النبيِّ ﷺ تكونُ باتّباعِه لا بالابتداع.',en:'Loving the Prophet ﷺ is by following, not innovating.'}, t:true },
        { statement:{ar:'دواءُ الكِبرِ هو التواضع.',en:'The cure for arrogance is humility.'}, t:true },
        { statement:{ar:'العفوُ عن المسيءِ يُنقِصُ صاحبَه ولا يرفعُه.',en:'Pardoning lowers a person, never raising him.'}, t:false },
      ]},
    } },

  /* 6 · Who am I? (a quality of the heart) */
  { id:'whoami', icon:'🕵️', cat:['love_prophet','salamat_qalb'], title:{ ar:'ما أنا؟', en:'What am I?' },
    levels:{
      beginner:{ type:'whoAmI',
        clues:[ {ar:'أنا خُلقٌ في القلب.',en:'I am a quality of the heart.'},
                {ar:'بي يُحسِنُ الطفلُ إلى أمِّه وأبيه.',en:'By me a child is good to his parents.'},
                {ar:'رضا الربِّ في رضا الوالد.',en:'The Lord’s pleasure is in the parent’s pleasure.'},
                {ar:'أنا برُّ الوالدين.',en:'I am honoring of parents.'} ],
        options:[{ar:'برُّ الوالدين',en:'Honoring parents'},{ar:'الحسد',en:'Envy'},{ar:'الكِبر',en:'Arrogance'},{ar:'الغفلة',en:'Heedlessness'}], answer:0 },
      intermediate:{ type:'whoAmI',
        clues:[ {ar:'أنا نقاءُ القلب.',en:'I am the purity of the heart.'},
                {ar:'لا حقدَ فيَّ ولا حسد.',en:'No grudge nor envy is in me.'},
                {ar:'بي ينجو العبدُ يومَ القيامة.',en:'By me a servant is saved on Judgment Day.'},
                {ar:'أنا سلامةُ القلب.',en:'I am soundness of the heart.'} ],
        options:[{ar:'سلامةُ القلب',en:'Soundness of heart'},{ar:'الرياء',en:'Showing off'},{ar:'البخل',en:'Stinginess'},{ar:'الغضب',en:'Anger'}], answer:0 },
      advanced:{ type:'whoAmI',
        clues:[ {ar:'أنا أعلى مقاماتِ العبودية.',en:'I am the highest station of worship.'},
                {ar:'أن تعبدَ اللهَ كأنّك تراه.',en:'To worship Allah as if you see Him.'},
                {ar:'فإن لم تكن تراه فإنّه يراك.',en:'And if you do not see Him, He sees you.'},
                {ar:'أنا الإحسان.',en:'I am Ihsan.'} ],
        options:[{ar:'الإحسان',en:'Ihsan'},{ar:'الإسلام',en:'Islam'},{ar:'الإيمان',en:'Iman'},{ar:'التقوى',en:'Taqwa'}], answer:0 },
    } },

  /* 7 · Memory flip (name ↔ symbol) */
  { id:'flip', icon:'🃏', cat:['love_allah'], title:{ ar:'بطاقاتُ الذاكرة', en:'Memory flip cards' },
    levels:{
      beginner:{ type:'flip', pairs:[
        { a:{ar:'الرحمن',en:'Ar-Rahman'}, b:{ar:'💚',en:'💚'} },
        { a:{ar:'الرزّاق',en:'Ar-Razzaq'},b:{ar:'🌾',en:'🌾'} },
        { a:{ar:'الحفيظ',en:'Al-Hafiz'}, b:{ar:'🛡️',en:'🛡️'} },
        { a:{ar:'الهادي',en:'Al-Hadi'},  b:{ar:'💡',en:'💡'} },
      ]},
      intermediate:{ type:'flip', pairs:[
        { a:{ar:'الرحمن',en:'Ar-Rahman'}, b:{ar:'💚',en:'💚'} },
        { a:{ar:'الرزّاق',en:'Ar-Razzaq'},b:{ar:'🌾',en:'🌾'} },
        { a:{ar:'الغفور',en:'Al-Ghafur'},b:{ar:'🕊️',en:'🕊️'} },
        { a:{ar:'السميع',en:'As-Sami'}, b:{ar:'👂',en:'👂'} },
        { a:{ar:'البصير',en:'Al-Basir'},b:{ar:'👁️',en:'👁️'} },
        { a:{ar:'الحفيظ',en:'Al-Hafiz'},b:{ar:'🛡️',en:'🛡️'} },
      ]},
      advanced:{ type:'flip', pairs:[
        { a:{ar:'الرحمن',en:'Ar-Rahman'}, b:{ar:'💚',en:'💚'} },
        { a:{ar:'الرزّاق',en:'Ar-Razzaq'},b:{ar:'🌾',en:'🌾'} },
        { a:{ar:'الغفور',en:'Al-Ghafur'},b:{ar:'🕊️',en:'🕊️'} },
        { a:{ar:'الحفيظ',en:'Al-Hafiz'},b:{ar:'🛡️',en:'🛡️'} },
        { a:{ar:'الهادي',en:'Al-Hadi'},  b:{ar:'💡',en:'💡'} },
        { a:{ar:'الودود',en:'Al-Wadud'},b:{ar:'❤️',en:'❤️'} },
        { a:{ar:'الشكور',en:'Ash-Shakur'},b:{ar:'🌟',en:'🌟'} },
        { a:{ar:'الحكيم',en:'Al-Hakim'},b:{ar:'🧭',en:'🧭'} },
      ]},
    } },

  /* 8 · Order — steps to a sound heart */
  { id:'order', icon:'🔢', cat:['salamat_qalb'], title:{ ar:'طريقُ القلبِ السليم', en:'The path to a sound heart' },
    levels:{
      beginner:{ type:'order', items:[
        {ar:'معرفةُ الله',en:'Knowing Allah'},{ar:'محبّتُه',en:'Loving Him'},
        {ar:'طاعتُه',en:'Obeying Him'},{ar:'قلبٌ سليم',en:'A sound heart'} ]},
      intermediate:{ type:'order', items:[
        {ar:'معرفةُ اللهِ بأسمائه',en:'Knowing Allah by His names'},{ar:'محبّتُه',en:'Loving Him'},
        {ar:'الإخلاصُ له',en:'Sincerity to Him'},{ar:'تطهيرُ القلبِ من الأمراض',en:'Purifying the heart'},{ar:'قلبٌ سليم',en:'A sound heart'} ]},
      advanced:{ type:'order', items:[
        {ar:'العلمُ بالله',en:'Knowledge of Allah'},{ar:'المحبّة',en:'Love'},{ar:'الإخلاص',en:'Sincerity'},
        {ar:'محاسبةُ النفس',en:'Self-accounting'},{ar:'التوبةُ من الذنوب',en:'Repentance'},{ar:'سلامةُ القلب',en:'Soundness of heart'} ]},
    } },

  ],
};
