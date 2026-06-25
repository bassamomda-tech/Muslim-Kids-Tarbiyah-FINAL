// data/chapters/abudharr.js — Heroes · أبو ذرٍّ الغفاري (full chapter; Story tab uses data/stories/abudharr.js)
// Sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.abudharr = {
  id:'abudharr', era:'heroes', icon:'leaf',
  collection:{ ar:'قصص الصحابة', en:'Companion Stories' },
  subtitle:{ ar:'المرحلة الثالثة · أبطالُ الإسلام', en:'Era III · Heroes of Islam' },
  name:{ ar:'أبو ذرٍّ الغفاري', en:'Abu Dharr al-Ghifari' },
  tag:{ ar:'الزاهدُ الصادق', en:'The truthful ascetic' },
  accent:'#7B6A48', accent2:'#9B8A66',
  greeting:{ ar:'أهلاً يا بطل! أبو ذرٍّ الغفاريُّ رضي الله عنه من أوائلِ من أسلم، رفضَ الأصنامَ قبلَ الإسلام، واشتهرَ بصدقِه وزهدِه حتى قال النبيُّ ﷺ إنّه أصدقُ الناسِ لهجة. تعالَ نتعلّمْ من صدقِه وقناعتِه.',
    en:'Hello, hero! Abu Dharr al-Ghifari, among the earliest to embrace Islam, who rejected idols even before Islam, famed for his truthfulness and simple living — the Prophet ﷺ said he was the most truthful of people. Come, let\'s learn from his honesty and contentment.' },

  knowledge:{
    didYouKnow:{ ar:'قال النبيُّ ﷺ: «ما أظلّتِ الخضراءُ ولا أقلّتِ الغبراءُ أصدقَ لهجةً من أبي ذر» — أي ما تحتَ السماءِ أصدقُ منه.',
      en:'The Prophet ﷺ said: "The sky has not shaded nor the earth carried anyone more truthful in speech than Abu Dharr" — none beneath the heavens was more honest.' },
    who:{ ar:'هو <b>جُندبُ بنُ جُنادة</b> من قبيلةِ <b>غِفار</b>، أحدُ <b>السابقينَ الأوّلين</b> إلى الإسلام (الرابعُ أو الخامس). كان قبلَ الإسلامِ موحِّداً <b>يرفضُ عبادةَ الأصنام</b> ويبحثُ عن الحق. لمّا بلغه خبرُ النبيِّ ﷺ سافرَ إلى مكّةَ حتى لقيه فأسلم، ثمّ <b>جهرَ بإسلامِه عندَ الكعبة</b> فضربه المشركون. اشتهرَ بـ<b>الصدقِ والزهدِ</b> والقناعة، وكان يحذِّرُ من كنزِ المالِ وحبسِه عن الفقراء. عاشَ زاهداً وماتَ وحيداً في الرَّبَذَة.',
      en:'He is <b>Jundub ibn Junada</b> of the tribe of <b>Ghifar</b>, one of the <b>earliest believers</b> (the fourth or fifth). Before Islam he worshipped Allah alone and <b>rejected idol worship</b>, seeking the truth. When he heard of the Prophet ﷺ he traveled to Makkah until he met him and embraced Islam, then <b>proclaimed his Islam openly at the Ka\u2019ba</b> and was beaten by the idolaters. He was famed for <b>truthfulness, asceticism</b>, and contentment, and warned against hoarding wealth from the poor. He lived simply and died alone in ar-Rabadha.' },
    facts:[
      { ar:'من السابقينَ الأوّلين، الرابعُ أو الخامسُ في الإسلام.', en:'Among the earliest believers — the fourth or fifth Muslim.' },
      { ar:'رفضَ عبادةَ الأصنامِ قبلَ الإسلام.', en:'Rejected idol worship even before Islam.' },
      { ar:'جهرَ بإسلامِه عندَ الكعبةِ بشجاعة.', en:'Proclaimed his Islam bravely at the Ka\u2019ba.' },
      { ar:'وصفه النبيُّ ﷺ بأنّه أصدقُ الناسِ لهجة.', en:'The Prophet ﷺ called him the most truthful in speech.' },
      { ar:'اشتهرَ بالزهدِ والقناعةِ والتحذيرِ من كنزِ المال.', en:'Famed for asceticism, contentment, and warning against hoarding.' },
    ],
    timeline:[
      { when:{ar:'قبلَ الإسلام',en:'Before Islam'}, what:{ar:'رفضَ الأصنامَ وبحثَ عن الحق.',en:'He rejected idols and sought the truth.'} },
      { when:{ar:'الإسلام',en:'His Islam'}, what:{ar:'سافرَ إلى مكّةَ فلقيَ النبيَّ ﷺ وأسلم.',en:'He journeyed to Makkah, met the Prophet ﷺ, and believed.'} },
      { when:{ar:'الجهر',en:'The Proclamation'}, what:{ar:'صدعَ بإسلامِه عندَ الكعبةِ فضُرِب.',en:'He declared his Islam at the Ka\u2019ba and was beaten.'} },
      { when:{ar:'الصدق',en:'Truthfulness'}, what:{ar:'صار مثلاً في الصدقِ بشهادةِ النبيِّ ﷺ.',en:'He became a byword for truth, by the Prophet\'s ﷺ witness.'} },
      { when:{ar:'الزهد',en:'Asceticism'}, what:{ar:'عاشَ زاهداً قانعاً وماتَ وحيداً.',en:'He lived ascetic and content, and died alone.'} },
    ],
    ayah:{ ar:'﴿ وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنفِقُونَهَا فِي سَبِيلِ اللَّهِ ﴾', ref:{ ar:'التوبة ٣٤', en:'At-Tawba 34' } },
  },

  story:[
    { title:{ ar:'الصادقُ الزاهد', en:'The Truthful Ascetic' },
      pages:[
        { scene:'kaaba', text:{ ar:'كان <b>أبو ذرٍّ</b> من أوائلِ من أسلم، رفضَ الأصنامَ قبلَ الإسلام، وجهرَ بإسلامِه عندَ الكعبةِ بشجاعة. اشتهرَ بالصدقِ حتى قال النبيُّ ﷺ إنّه أصدقُ الناسِ لهجة، وعاشَ زاهداً قانعاً.',
          en:'<b>Abu Dharr</b> was among the first to embrace Islam; he rejected idols beforehand and bravely proclaimed his Islam at the Ka\u2019ba. He was so honest the Prophet ﷺ called him the most truthful of people, and he lived ascetic and content.' } } ] }
  ],

  traits:[
    { ar:'الصدق', en:'Truthfulness' }, { ar:'الشجاعة', en:'Courage' },
    { ar:'الزهد', en:'Asceticism' }, { ar:'القناعة', en:'Contentment' },
  ],
  lessons:[
    { icon:'💯', color:'#7B6A48', title:{ar:'قُلِ الصدقَ دائماً',en:'Always speak the truth'},
      body:{ar:'كان أبو ذرٍّ أصدقَ الناسِ لهجة. الصدقُ يرفعُ مكانتَك عندَ اللهِ والناس.',en:'Abu Dharr was the most truthful in speech. Honesty raises your rank with Allah and people.'},
      apply:{ar:'أقولُ الصدقَ ولو كان صعباً.',en:'I tell the truth even when it is hard.'} },
    { icon:'🦅', color:'#9B8A66', title:{ar:'اشهدْ بالحقِّ بشجاعة',en:'Bear witness to truth bravely'},
      body:{ar:'جهرَ أبو ذرٍّ بإسلامِه عندَ الكعبةِ رغمَ الخطر. البطلُ يُعلِنُ الحقَّ ولا يخاف.',en:'Abu Dharr proclaimed his Islam at the Ka\u2019ba despite danger. A hero declares the truth and does not fear.'},
      apply:{ar:'أُعلِنُ الحقَّ وأدافعُ عنه بأدب.',en:'I declare the truth and defend it courteously.'} },
    { icon:'🌿', color:'#5E5238', title:{ar:'اقنعْ بما عندَك',en:'Be content with what you have'},
      body:{ar:'عاشَ أبو ذرٍّ زاهداً قانعاً لا يطلبُ الكثير. القناعةُ كنزٌ لا يفنى.',en:'Abu Dharr lived ascetic and content, wanting little. Contentment is a treasure that never runs out.'},
      apply:{ar:'أرضى بما رزقني اللهُ وأشكرُه.',en:'I am content with what Allah gives me and thank Him.'} },
    { icon:'🤲', color:'#7B6A48', title:{ar:'لا تكنزْ مالاً عن المحتاج',en:'Don\'t hoard from the needy'},
      body:{ar:'حذّرَ أبو ذرٍّ من جمعِ المالِ وحبسِه عن الفقراء. المالُ نعمةٌ تُنفَقُ في الخير.',en:'Abu Dharr warned against gathering wealth and withholding it from the poor. Wealth is a blessing to spend in good.'},
      apply:{ar:'أُشارِكُ ما عندي مع المحتاجين.',en:'I share what I have with the needy.'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنفِقُونَهَا فِي سَبِيلِ اللَّهِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ ﴾', ref:{ ar:'التوبة ٣٤', en:'At-Tawba 34' } },
    dua:{ ar:'اللّهُمَّ اجعلني صادقاً قانعاً زاهداً فيما عندَ الناس', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أقولُ الصدقَ في كلِّ أحوالي.', en:'I speak the truth in every situation.' },
        { ar:'أشهدُ بالحقِّ بشجاعةٍ وأدب.', en:'I bear witness to truth bravely and politely.' },
        { ar:'أقنعُ بما عندي وأُشارِكُ المحتاجين.', en:'I am content with what I have and share with the needy.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بِمَ وصفَ النبيُّ ﷺ أبا ذر؟',en:'How did the Prophet ﷺ describe Abu Dharr?'},
          options:[{ar:'أصدقُ الناسِ لهجة',en:'The most truthful of people'},{ar:'أغنى الناس',en:'The wealthiest'},{ar:'أقوى الناس',en:'The strongest'}], answer:0 },
        { q:{ar:'ماذا فعلَ أبو ذرٍّ بعدَ إسلامِه عندَ الكعبة؟',en:'What did Abu Dharr do after his Islam at the Ka\u2019ba?'},
          options:[{ar:'جهرَ بإسلامِه رغمَ الخطر',en:'Proclaimed it openly despite danger'},{ar:'أخفاه',en:'Hid it'},{ar:'تراجعَ عنه',en:'Recanted it'}], answer:0 },
        { q:{ar:'بِمَ اشتهرَ أبو ذرٍّ في حياتِه؟',en:'What was Abu Dharr famed for in life?'},
          options:[{ar:'الزهدِ والقناعة',en:'Asceticism and contentment'},{ar:'جمعِ المال',en:'Hoarding wealth'},{ar:'حبِّ الدنيا',en:'Love of the world'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'كان أبو ذرٍّ من أوائلِ من أسلم.',en:'Abu Dharr was among the first to embrace Islam.'}, t:true },
        { statement:{ar:'رفضَ عبادةَ الأصنامِ قبلَ الإسلام.',en:'He rejected idol worship before Islam.'}, t:true },
        { statement:{ar:'كان كذّاباً لا يُوثَقُ به.',en:'He was a liar no one could trust.'}, t:false },
        { statement:{ar:'عاشَ زاهداً قانعاً.',en:'He lived ascetic and content.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'أصدقُ لهجة',en:'Most truthful'}, b:{ar:'شهادةُ النبيِّ ﷺ له',en:'The Prophet\'s ﷺ witness for him'} },
        { a:{ar:'غِفار',en:'Ghifar'}, b:{ar:'قبيلتُه',en:'His tribe'} },
        { a:{ar:'الكعبة',en:'The Ka\u2019ba'}, b:{ar:'جهرَ بإسلامِه عندَها',en:'He proclaimed his Islam there'} },
        { a:{ar:'الزهد',en:'Asceticism'}, b:{ar:'قناعةٌ وبُعدٌ عن الدنيا',en:'Contentment, detachment'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الصدقِ والزهد', en:'Medal of Truth & Detachment' },
    stickers:[
      { icon:'light', color:'#7B6A48', title:{ar:'أصدقُ لهجة',en:'Most Truthful'} },
      { icon:'leaf',  color:'#9B8A66', title:{ar:'الزاهدُ القانع',en:'The Content Ascetic'} },
      { icon:'dove',  color:'#5E5238', title:{ar:'صادعٌ بالحق',en:'A Voice for Truth'} },
      { icon:'heart', color:'#7B6A48', title:{ar:'القلبُ القنوع',en:'The Content Heart'} },
    ],
    moral:{ ar:'أبو ذرٍّ قدوةٌ في الصدقِ والشجاعةِ والزهدِ والقناعة — أصدقُ من أظلّتْه السماء.',
      en:'Abu Dharr is a model of truthfulness, courage, asceticism, and contentment — the most truthful the sky ever shaded.' },
    reflect:[
      { ar:'كان أبو ذرٍّ أصدقَ الناس. هل تقولُ الصدقَ حتى لو خسرتَ شيئاً؟', en:'Abu Dharr was the most truthful. Do you tell the truth even if you lose something?' },
      { ar:'عاشَ قانعاً زاهداً. هل ترضى بما عندَك وتشكرُ الله؟', en:'He lived content and ascetic. Are you satisfied with what you have and thankful to Allah?' },
    ],
  },
};
