// data/chapters/khansa.js — Heroes · الخنساء (full chapter; Story tab uses data/stories/khansa.js)
// Sources: الاستيعاب (ابن عبد البر) · الإصابة (ابن حجر) · ديوان الخنساء · صحيح البخاري ومسلم (أحاديث الصبر) · إسلام ويب · الدرر السنية
// ⚠️ خبرُ وصيّتِها لأبنائها يومَ القادسية رواه ابنُ عبد البرّ بإسنادٍ فيه محمدُ بنُ الحسنِ المخزوميّ (ابنُ زَبالة) وقد تكلّم فيه العلماء — فيُذكَرُ بصيغةِ «يُروى».
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.khansa = {
  id:'khansa', era:'heroes', icon:'pen',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'الخنساء', en:'Al-Khansa’' },
  tag:{ ar:'الشاعرةُ الصابرة', en:'The patient poetess' },
  accent:'#8A4A5A', accent2:'#AA6A7A',
  greeting:{ ar:'أهلاً يا بطل! الخنساءُ رضي الله عنها أشهرُ شاعرةٍ عند العرب، بكتْ أخاها صخراً سنينَ طويلةً قبلَ الإسلام، فلمّا أسلمتْ علّمها الإسلامُ الصبرَ والاحتساب. تعالَ نتعلّمْ كيف يُغيِّرُ الإيمانُ القلبَ الحزين.',
    en:'Hello, hero! Al-Khansa’ was the most famous poetess of the Arabs. Before Islam she wept for her brother Sakhr for many long years, and when she embraced Islam, Islam taught her patience and seeking reward from Allah. Come, let’s learn how faith transforms a grieving heart.' },

  knowledge:{
    didYouKnow:{ ar:'اسمُها الحقيقيُّ <b>تُماضِر</b>، و«الخنساء» لقبٌ لُقِّبتْ به — وقد جاءتْ إلى النبيِّ ﷺ مع قومِها بني سُليمٍ فأسلمتْ — كما ذكرَ ابنُ عبد البرّ في الاستيعاب.',
      en:'Her real name was <b>Tumadir</b>; "al-Khansa’" was a nickname. She came to the Prophet ﷺ with her people, Banu Sulaym, and embraced Islam — as Ibn Abd al-Barr mentions in al-Isti’ab.' },
    who:{ ar:'هي <b>تُماضِرُ بنتُ عمرِو بنِ الشَّريدِ السُّلَميّة</b>، المعروفةُ بـ<b>الخنساء</b>، من أعظمِ شعراءِ العربِ على الإطلاق. قُتِلَ أخواها <b>معاويةُ وصخرٌ</b> في الجاهليّة، وكان صخرٌ كريماً شجاعاً تُحبُّه حبّاً شديداً، فبكتْه بقصائدَ حزينةٍ صارتْ أشهرَ شعرِ الرِّثاءِ في تاريخِ العرب. ثم جاءتْ مع قومِها <b>بني سُليمٍ</b> إلى النبيِّ ﷺ <b>فأسلمتْ</b>، وكان ﷺ يستنشدُها شعرَها ويُعجِبُه. وفي الإسلامِ تعلّمتْ أنّ المصيبةَ يُقابِلُها المؤمنُ <b>بالصبرِ والاحتساب</b>، وأنّ ما عند اللهِ خيرٌ وأبقى. و<b>يُروى</b> أنّها شهدتِ القادسيّةَ مع أبنائها الأربعة، وأوصتْهم بالثبات، فلمّا جاءها خبرُ استشهادِهم حمدتِ الله — وهذا الخبرُ تكلّمَ العلماءُ في إسنادِه.',
      en:'She is <b>Tumadir bint Amr ibn ash-Sharid as-Sulamiyya</b>, known as <b>al-Khansa’</b>, one of the greatest Arab poets of all time. Her brothers <b>Mu’awiya and Sakhr</b> were killed before Islam; Sakhr was generous and brave and she loved him dearly, so she mourned him in sorrowful poems that became the most famous elegies in Arab history. Then she came with her people, <b>Banu Sulaym</b>, to the Prophet ﷺ and <b>embraced Islam</b>, and he ﷺ would ask her to recite her poetry and admired it. In Islam she learned that a believer meets hardship <b>with patience and seeking reward from Allah</b>, and that what is with Allah is better and more lasting. It is <b>narrated</b> that she was present at al-Qadisiyya with her four sons and urged them to stand firm, and that when news of their martyrdom reached her she praised Allah — scholars have discussed the chain of this report.' },
    facts:[
      { ar:'اسمُها تُماضِرُ بنتُ عمرٍو السُّلَميّة.', en:'Her name was Tumadir bint Amr as-Sulamiyya.' },
      { ar:'أشهرُ شاعرةٍ في تاريخِ العرب.', en:'The most famous poetess in Arab history.' },
      { ar:'رثتْ أخاها صخراً بأشهرِ قصائدِ الرِّثاء.', en:'She mourned her brother Sakhr in the most famous elegies.' },
      { ar:'أسلمتْ مع قومِها بني سُليمٍ عند النبيِّ ﷺ.', en:'She embraced Islam with her people Banu Sulaym before the Prophet ﷺ.' },
      { ar:'يُروى أنّ أبناءَها الأربعةَ استُشهِدوا بالقادسيّة فحمدتِ الله.', en:'It is narrated her four sons were martyred at al-Qadisiyya and she praised Allah.' },
    ],
    timeline:[
      { when:{ar:'الجاهليّة',en:'Before Islam'}, what:{ar:'اشتهرتْ بالشعرِ ورثاءِ أخيها صخر.',en:'She became famous for poetry and her elegies for Sakhr.'} },
      { when:{ar:'الإسلام',en:'Her Islam'}, what:{ar:'جاءتْ مع بني سُليمٍ إلى النبيِّ ﷺ فأسلمت.',en:'She came with Banu Sulaym to the Prophet ﷺ and embraced Islam.'} },
      { when:{ar:'الشعر',en:'Her Poetry'}, what:{ar:'كان النبيُّ ﷺ يستنشدُها شعرَها.',en:'The Prophet ﷺ would ask her to recite her poetry.'} },
      { when:{ar:'الصبر',en:'Patience'}, what:{ar:'تعلّمتْ في الإسلامِ الصبرَ والاحتساب.',en:'In Islam she learned patience and seeking reward.'} },
      { when:{ar:'القادسيّة (يُروى)',en:'Al-Qadisiyya (narrated)'}, what:{ar:'يُروى أنّها حمدتِ اللهَ حين بلغَها استشهادُ أبنائها.',en:'It is narrated she praised Allah when her sons’ martyrdom reached her.'} },
    ],
    ayah:{ ar:'﴿ الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ﴾', ref:{ ar:'البقرة ١٥٦', en:'Al-Baqara 156' } },
  },

  story:[
    { title:{ ar:'من الدموعِ إلى الصبر', en:'From Tears to Patience' },
      pages:[
        { scene:'desert', text:{ ar:'كانت <b>الخنساءُ</b> أشهرَ شاعرةٍ عند العرب، بكتْ أخاها صخراً سنينَ بقصائدَ حزينة. فلمّا أسلمتْ مع قومِها بني سُليمٍ تعلّمتْ أنّ المؤمنَ يقولُ عند المصيبة: <b>إنّا لله وإنّا إليه راجعون</b>، ويصبرُ ويحتسب. فتحوّلَ قلبُها الحزينُ إلى قلبٍ صابرٍ راضٍ بقضاءِ الله.',
          en:'<b>Al-Khansa’</b> was the most famous poetess of the Arabs; she wept for her brother Sakhr for years in sorrowful poems. When she embraced Islam with Banu Sulaym, she learned that a believer says at a hardship: <b>"To Allah we belong and to Him we return,"</b> and is patient and seeks reward. So her grieving heart became a patient heart, content with Allah’s decree.' } } ] }
  ],

  traits:[
    { ar:'الصبر', en:'Patience' }, { ar:'الاحتساب', en:'Seeking reward' },
    { ar:'الفصاحة', en:'Eloquence' }, { ar:'الوفاء', en:'Loyalty' },
  ],
  lessons:[
    { icon:'💧', color:'#8A4A5A', title:{ar:'الإيمانُ يُداوي الحزن',en:'Faith heals sorrow'},
      body:{ar:'بكتِ الخنساءُ أخاها في الجاهليّةِ سنين، فلمّا أسلمتْ عرفتْ أنّ الدنيا دارُ ممرّ وأنّ اللقاءَ في الآخرة.',en:'Al-Khansa’ wept for her brother for years before Islam; when she embraced Islam she knew this world is a passage and the meeting is in the Hereafter.'},
      apply:{ar:'إذا حزنتُ تذكّرتُ أنّ اللهَ معي وأنّ الأجرَ عنده.',en:'When I am sad, I remember Allah is with me and the reward is with Him.'} },
    { icon:'🤲', color:'#AA6A7A', title:{ar:'قُلْ: إنّا لله وإنّا إليه راجعون',en:'Say: To Allah we belong'},
      body:{ar:'علّمنا القرآنُ أن نقولَ عند المصيبة: إنّا لله وإنّا إليه راجعون. هذه الكلمةُ تُطمئِنُ القلبَ وتجلبُ الأجر.',en:'The Qur’an teaches us to say at a hardship: To Allah we belong and to Him we return. These words calm the heart and bring reward.'},
      apply:{ar:'أقولُها كلّما أصابني شيءٌ يُحزِنني.',en:'I say them whenever something saddens me.'} },
    { icon:'✒️', color:'#6A3A4A', title:{ar:'سخِّرْ موهبتَك للخير',en:'Use your talent for good'},
      body:{ar:'كانت الخنساءُ شاعرةً عظيمة، وكان النبيُّ ﷺ يستمعُ إلى شعرِها. الموهبةُ نعمةٌ نستعملُها فيما يُرضي الله.',en:'Al-Khansa’ was a great poet, and the Prophet ﷺ listened to her poetry. A talent is a blessing we use in what pleases Allah.'},
      apply:{ar:'أستعملُ موهبتي في الكلامِ الطيّبِ والخير.',en:'I use my talents for good words and good deeds.'} },
    { icon:'🌙', color:'#8A4A5A', title:{ar:'الصبرُ عند الصدمةِ الأولى',en:'Patience at the first blow'},
      body:{ar:'قال النبيُّ ﷺ: «إنّما الصبرُ عند الصدمةِ الأولى» (البخاري ومسلم). أعظمُ الصبرِ أن تصبرَ لحظةَ المصيبة.',en:'The Prophet ﷺ said: "True patience is at the first blow" (Bukhari & Muslim). The greatest patience is in the very moment of hardship.'},
      apply:{ar:'أتمالكُ نفسي في أوّلِ لحظةِ حزنٍ وأذكرُ الله.',en:'I hold myself together at the first moment of sorrow and remember Allah.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَبَشِّرِ الصَّابِرِينَ ﴾', ref:{ ar:'البقرة ١٥٥', en:'Al-Baqara 155' } },
    dua:{ ar:'إنّا لله وإنّا إليه راجعون، اللّهُمَّ أْجُرْني في مصيبتي واخلُفْ لي خيراً منها', ref:{ ar:'صحيح مسلم', en:'Sahih Muslim' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أصبِرُ عند المصيبةِ وأحتسبُ الأجرَ عند الله.', en:'I am patient in hardship and seek my reward with Allah.' },
        { ar:'أقولُ عند الحزن: إنّا لله وإنّا إليه راجعون.', en:'In sorrow I say: To Allah we belong and to Him we return.' },
        { ar:'أستعملُ موهبتي فيما يُرضي ربّي.', en:'I use my talent in what pleases my Lord.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بماذا اشتهرتِ الخنساء؟',en:'What was al-Khansa’ famous for?'},
          options:[{ar:'الطبّ',en:'Medicine'},{ar:'التجارة',en:'Trade'},{ar:'الشعر',en:'Poetry'}], answer:2 },
        { q:{ar:'من الأخُ الذي رثتْه الخنساءُ بأشهرِ شعرِها؟',en:'Which brother did she mourn in her most famous poems?'},
          options:[{ar:'صخر',en:'Sakhr'},{ar:'خالد',en:'Khalid'},{ar:'عمرو',en:'Amr'}], answer:0 },
        { q:{ar:'ماذا يقولُ المؤمنُ عند المصيبة؟',en:'What does a believer say at a hardship?'},
          options:[{ar:'لماذا أنا؟',en:'Why me?'},{ar:'إنّا لله وإنّا إليه راجعون',en:'To Allah we belong and to Him we return'},{ar:'لا شيء',en:'Nothing'}], answer:1 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'اسمُ الخنساءِ الحقيقيُّ تُماضِر.',en:'Al-Khansa’s real name was Tumadir.'}, t:true },
        { statement:{ar:'أسلمتِ الخنساءُ مع قومِها بني سُليم.',en:'She embraced Islam with her people Banu Sulaym.'}, t:true },
        { statement:{ar:'كلُّ ما يُروى عنها في القادسيّةِ ثابتٌ بإسنادٍ صحيح.',en:'Everything narrated about her at al-Qadisiyya has an authentic chain.'}, t:false },
        { statement:{ar:'الصبرُ الحقيقيُّ عند الصدمةِ الأولى.',en:'True patience is at the first blow.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'تُماضِر',en:'Tumadir'}, b:{ar:'اسمُ الخنساء',en:'Al-Khansa’s name'} },
        { a:{ar:'صخر',en:'Sakhr'}, b:{ar:'أخوها الذي رثتْه',en:'The brother she mourned'} },
        { a:{ar:'بنو سُليم',en:'Banu Sulaym'}, b:{ar:'قومُها',en:'Her people'} },
        { a:{ar:'إنّا لله وإنّا إليه راجعون',en:'To Allah we belong'}, b:{ar:'كلمةُ الصابرين',en:'The words of the patient'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الصبرِ والاحتساب', en:'Medal of Patience & Seeking Reward' },
    stickers:[
      { icon:'pen',      color:'#8A4A5A', title:{ar:'الشاعرةُ الكبيرة',en:'The Great Poetess'} },
      { icon:'heart',    color:'#AA6A7A', title:{ar:'القلبُ الصابر',en:'The Patient Heart'} },
      { icon:'crescent', color:'#6A3A4A', title:{ar:'إنّا لله',en:'To Allah We Belong'} },
      { icon:'star',     color:'#8A4A5A', title:{ar:'وبشِّرِ الصابرين',en:'Glad Tidings to the Patient'} },
    ],
    moral:{ ar:'الخنساءُ قدوةٌ في أنّ الإيمانَ يُحوِّلُ الحزنَ إلى صبرٍ واحتساب — والصابرونَ يُبشِّرُهم اللهُ بالخير.',
      en:'Al-Khansa’ shows that faith turns sorrow into patience and seeking reward — and Allah gives glad tidings to the patient.' },
    reflect:[
      { ar:'تغيّرتِ الخنساءُ بعد الإسلامِ من الجزعِ إلى الصبر. ماذا تفعلُ حين يُصيبُك شيءٌ يُحزِنُك؟', en:'After Islam al-Khansa’ changed from despair to patience. What do you do when something saddens you?' },
      { ar:'كانت الخنساءُ موهوبةً في الشعر. ما موهبتُك، وكيف تستعملُها في الخير؟', en:'Al-Khansa’ was gifted in poetry. What is your talent, and how do you use it for good?' },
    ],
  },
};
