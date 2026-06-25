// data/chapters/jabir.js — Scientists · جابر بن حيّان (full chapter; Story tab uses data/stories/jabir.js)
// Sources: الفهرست · إسلام ويب · موسوعات تاريخ العلوم · الدرر السنية
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.jabir = {
  id:'jabir', era:'heroes', icon:'gem',
  collection:{ ar:'أكاديميةُ المبدعين', en:'The Innovators\u2019 Academy' },
  subtitle:{ ar:'المرحلة الخامسة · أكاديميةُ المبدعين', en:'Era V · The Innovators\u2019 Academy' },
  name:{ ar:'جابرُ بنُ حيّان', en:'Jabir ibn Hayyan' },
  tag:{ ar:'أبو الكيمياء', en:'Father of chemistry' },
  accent:'#5A5A1A', accent2:'#7A7A3A',
  greeting:{ ar:'أهلاً يا بطل! جابرُ بنُ حيّانَ رحمه الله أبو الكيمياء، أوّلُ من أدخلَ التجربةَ والمختبرَ في الكيمياء، واخترعَ أدواتٍ ومناهجَ ما زالت تُستخدَمُ اليوم. تعالَ نتعلّمْ من تجربتِه وإبداعِه.',
    en:'Hello, hero! Jabir ibn Hayyan, the father of chemistry, the first to bring experiment and the laboratory into chemistry, who invented tools and methods still used today. Come, let\'s learn from his experimentation and innovation.' },

  knowledge:{
    didYouKnow:{ ar:'يُلقَّبُ جابرُ بنُ حيّانَ بـ«أبي الكيمياء»، وكان أوّلَ من اعتمدَ على <b>التجربةِ في المختبر</b> بدلَ التخمين، واخترعَ أدواتٍ ومناهجَ ما زال الكيميائيّونَ يستخدمونها!',
      en:'Jabir ibn Hayyan is titled "the father of chemistry," and was the first to rely on <b>experiment in the laboratory</b> instead of guessing, inventing tools and methods chemists still use!' },
    who:{ ar:'هو <b>جابرُ بنُ حيّان</b>، عالمٌ مسلمٌ عظيم، يُلقَّبُ بـ<b>«أبي الكيمياء»</b>. كان أوّلَ من حوّلَ الكيمياءَ من خرافاتٍ وتخميناتٍ إلى <b>علمٍ حقيقيٍّ قائمٍ على التجربةِ والمختبر</b>. كان يقول: «أساسُ العلمِ هو العملُ والتجربة، فمن لم يُجرِّبْ لم يُتقِنْ». أجرى تجاربَ كثيرةً دقيقة، واكتشفَ موادَّ وأحماضاً جديدة، واخترعَ <b>أدواتٍ مخبريّةً ومناهجَ</b> (كالتقطيرِ والتبلور) ما زالتْ تُستخدَمُ في معاملِ الكيمياءِ إلى اليوم! وكتبَ كتباً كثيرةً في الكيمياء. تُرجِمتْ كتبُه إلى لغاتٍ كثيرة، وأثّرتْ في علماءِ العالمِ قروناً. مثالٌ للعالمِ الذي يبني العلمَ على التجربةِ والعملِ لا على الكلامِ والظنّ.',
      en:'He is <b>Jabir ibn Hayyan</b>, a great Muslim scientist titled <b>"the father of chemistry."</b> He was the first to transform chemistry from superstitions and guesses into a <b>real science based on experiment and the laboratory</b>. He used to say: "The basis of knowledge is work and experiment; whoever does not experiment does not master." He conducted many precise experiments, discovered new substances and acids, and invented <b>laboratory tools and methods</b> (like distillation and crystallization) still used in chemistry labs to this day! He wrote many books on chemistry. His books were translated into many languages and influenced the world\u2019s scientists for centuries. A model of the scientist who builds knowledge on experiment and action, not talk and assumption.' },
    facts:[
      { ar:'عالمٌ مسلمٌ يُلقَّبُ بأبي الكيمياء.', en:'A Muslim scientist titled "the father of chemistry."' },
      { ar:'حوّلَ الكيمياءَ إلى علمٍ قائمٍ على التجربة.', en:'He turned chemistry into a science based on experiment.' },
      { ar:'اخترعَ أدواتٍ ومناهجَ مخبريّةً ما زالت تُستخدَم.', en:'He invented lab tools and methods still in use.' },
      { ar:'اكتشفَ موادَّ وأحماضاً جديدة.', en:'He discovered new substances and acids.' },
      { ar:'قال: من لم يُجرِّبْ لم يُتقِنْ.', en:'He said: whoever does not experiment does not master.' },
    ],
    timeline:[
      { when:{ar:'البداية',en:'The Start'}, what:{ar:'أحبَّ العلمَ والتجربةَ منذ صِغَرِه.',en:'He loved knowledge and experiment from his youth.'} },
      { when:{ar:'المختبر',en:'The Laboratory'}, what:{ar:'أدخلَ التجربةَ والمختبرَ في الكيمياء.',en:'He brought experiment and the laboratory into chemistry.'} },
      { when:{ar:'الاكتشاف',en:'Discovery'}, what:{ar:'اكتشفَ موادَّ وأحماضاً جديدة.',en:'He discovered new substances and acids.'} },
      { when:{ar:'الاختراع',en:'Invention'}, what:{ar:'اخترعَ أدواتٍ ومناهجَ مخبريّة.',en:'He invented laboratory tools and methods.'} },
      { when:{ar:'الإرث',en:'Legacy'}, what:{ar:'تُرجِمتْ كتبُه وأثّرتْ في العالمِ قروناً.',en:'His books were translated and influenced the world for centuries.'} },
    ],
    ayah:{ ar:'﴿ وَقُل رَّبِّ زِدْنِي عِلْمًا ﴾', ref:{ ar:'طه ١١٤', en:'Ta-Ha 114' } },
  },

  story:[
    { title:{ ar:'أبو الكيمياء', en:'Father of Chemistry' },
      pages:[
        { scene:'mihrab', text:{ ar:'كان <b>جابرُ بنُ حيّان</b> عالماً مسلماً عظيماً يُلقَّبُ بأبي الكيمياء. حوّلَ الكيمياءَ من خرافاتٍ إلى علمٍ قائمٍ على التجربةِ والمختبر، وكان يقول: «من لم يُجرِّبْ لم يُتقِنْ». اخترعَ أدواتٍ ومناهجَ ما زالتْ تُستخدَمُ في معاملِ الكيمياءِ إلى اليوم.',
          en:'<b>Jabir ibn Hayyan</b> was a great Muslim scientist titled "the father of chemistry." He transformed chemistry from superstitions into a science based on experiment and the laboratory, saying: "Whoever does not experiment does not master." He invented tools and methods still used in chemistry labs to this day.' } } ] }
  ],

  traits:[
    { ar:'التجربة', en:'Experimentation' }, { ar:'الإبداع', en:'Innovation' },
    { ar:'الدقّة', en:'Precision' }, { ar:'حبُّ العلم', en:'Love of knowledge' },
  ],
  lessons:[
    { icon:'⚗️', color:'#5A5A1A', title:{ar:'تعلّمْ بالتجربةِ والعمل',en:'Learn by experiment and action'},
      body:{ar:'علّمنا جابرٌ أنّ «من لم يُجرِّبْ لم يُتقِنْ». العلمُ الحقيقيُّ يُبنى على التجربةِ لا التخمين.',en:'Jabir taught us "whoever does not experiment does not master." Real knowledge is built on experiment, not guessing.'},
      apply:{ar:'أتعلّمُ بالتجربةِ والعملِ لا بالكلامِ فقط.',en:'I learn by experiment and action, not just talk.'} },
    { icon:'🧪', color:'#7A7A3A', title:{ar:'كنْ دقيقاً منظّماً',en:'Be precise and organized'},
      body:{ar:'أجرى جابرٌ تجاربَه بدقّةٍ ونظام. الدقّةُ والتنظيمُ أساسُ النجاحِ في العلمِ والعمل.',en:'Jabir conducted his experiments with precision and order. Precision and organization are the basis of success in science and work.'},
      apply:{ar:'أعملُ بدقّةٍ ونظامٍ في كلِّ ما أفعل.',en:'I work with precision and order in all I do.'} },
    { icon:'💡', color:'#4A4A0A', title:{ar:'ابتكرْ أدواتٍ وحلولاً جديدة',en:'Invent new tools and solutions'},
      body:{ar:'اخترعَ جابرٌ أدواتٍ ومناهجَ جديدةً ما زالتْ تُستخدَم. الابتكارُ يُطوّرُ العلمَ وينفعُ الناس.',en:'Jabir invented new tools and methods still in use. Innovation advances science and benefits people.'},
      apply:{ar:'أُفكِّرُ بابتكارِ حلولٍ جديدةٍ للمشكلات.',en:'I think of inventing new solutions to problems.'} },
    { icon:'📚', color:'#5A5A1A', title:{ar:'اطلبِ العلمَ وزِدْ منه',en:'Seek knowledge and increase in it'},
      body:{ar:'لم يتوقّفْ جابرٌ عن التعلّمِ والبحثِ والتأليف. طلبُ العلمِ لا ينتهي، وكلُّ يومٍ فرصةٌ لتتعلّمَ جديداً.',en:'Jabir never stopped learning, researching, and writing. Seeking knowledge never ends, and every day is a chance to learn something new.'},
      apply:{ar:'أطلبُ العلمَ دائماً وأقول: ربِّ زِدني علماً.',en:'I always seek knowledge and say: "My Lord, increase me in knowledge."'} },
  ],

  memorize:{
    ayah:{ ar:'﴿ وَقُل رَّبِّ زِدْنِي عِلْمًا ﴾', ref:{ ar:'طه ١١٤', en:'Ta-Ha 114' } },
    dua:{ ar:'اللّهُمَّ ارزقني العلمَ النافعَ والإبداعَ فيما ينفعُ الناس', ref:{ ar:'من الدعاء', en:'A supplication' } },
    pledge:{ title:{ ar:'عهدُ البطل', en:"The Hero's Pledge" },
      lines:[
        { ar:'أتعلّمُ بالتجربةِ والعملِ لا بالكلامِ فقط.', en:'I learn by experiment and action, not just talk.' },
        { ar:'أعملُ بدقّةٍ ونظامٍ وأبتكرُ حلولاً جديدة.', en:'I work with precision and order and invent new solutions.' },
        { ar:'أطلبُ العلمَ دائماً وأزيدُ منه.', en:'I always seek knowledge and increase in it.' },
      ] },
  },

  activities:[
    { type:'quiz', title:{ar:'اختبارٌ سريع',en:'Quick Quiz'},
      questions:[
        { q:{ar:'بأيِّ لقبٍ عُرِفَ جابرُ بنُ حيّان؟',en:'What was Jabir ibn Hayyan known as?'},
          options:[{ar:'أبو الكيمياء',en:'Father of chemistry'},{ar:'أبو الجبر',en:'Father of algebra'},{ar:'أبو البصريات',en:'Father of optics'}], answer:0 },
        { q:{ar:'على ماذا بنى جابرٌ علمَ الكيمياء؟',en:'On what did Jabir build the science of chemistry?'},
          options:[{ar:'التجربةِ والمختبر',en:'Experiment and the laboratory'},{ar:'التخمينِ',en:'Guessing'},{ar:'الخرافاتِ',en:'Superstitions'}], answer:0 },
        { q:{ar:'ماذا قال جابرٌ عن التجربة؟',en:'What did Jabir say about experiment?'},
          options:[{ar:'من لم يُجرِّبْ لم يُتقِنْ',en:'Whoever does not experiment does not master'},{ar:'التجربةُ غيرُ مهمّة',en:'Experiment is unimportant'},{ar:'التخمينُ يكفي',en:'Guessing suffices'}], answer:0 },
      ] },
    { type:'trueFalse', title:{ar:'صحٌّ أم خطأ؟',en:'True or False?'},
      items:[
        { statement:{ar:'جابرُ بنُ حيّانَ يُلقَّبُ بأبي الكيمياء.',en:'Jabir ibn Hayyan is titled "the father of chemistry."'}, t:true },
        { statement:{ar:'بنى الكيمياءَ على التجربةِ والمختبر.',en:'He built chemistry on experiment and the laboratory.'}, t:true },
        { statement:{ar:'اعتمدَ على التخمينِ والخرافاتِ فقط.',en:'He relied only on guessing and superstitions.'}, t:false },
        { statement:{ar:'اخترعَ أدواتٍ ومناهجَ ما زالتْ تُستخدَم.',en:'He invented tools and methods still in use.'}, t:true },
      ] },
    { type:'match', title:{ar:'وصِّلْ',en:'Match'},
      pairs:[
        { a:{ar:'أبو الكيمياء',en:'Father of chemistry'}, b:{ar:'لقبُ جابر',en:'Jabir\u2019s title'} },
        { a:{ar:'التجربةُ والمختبر',en:'Experiment & lab'}, b:{ar:'أساسُ علمِه',en:'The basis of his science'} },
        { a:{ar:'الأدواتُ المخبريّة',en:'Lab tools'}, b:{ar:'اخترعها وما زالتْ تُستخدَم',en:'He invented them; still used'} },
        { a:{ar:'من لم يُجرِّبْ لم يُتقِنْ',en:'No mastery without experiment'}, b:{ar:'قولُه المشهور',en:'His famous saying'} },
      ] },
  ],

  treasures:{
    medal:{ ar:'وِسامُ الكيمياءِ والتجربة', en:'Medal of Chemistry & Experiment' },
    stickers:[
      { icon:'gem',   color:'#5A5A1A', title:{ar:'أبو الكيمياء',en:'Father of Chemistry'} },
      { icon:'light', color:'#7A7A3A', title:{ar:'صاحبُ المختبر',en:'Master of the Laboratory'} },
      { icon:'compass',color:'#4A4A0A', title:{ar:'المبتكرُ المبدع',en:'The Creative Innovator'} },
      { icon:'star',  color:'#5A5A1A', title:{ar:'من لم يُجرِّبْ لم يُتقِنْ',en:'No Mastery Without Experiment'} },
    ],
    moral:{ ar:'جابرُ بنُ حيّانَ قدوةٌ في التجربةِ والإبداعِ والدقّة — حوّلَ الكيمياءَ إلى علمٍ حقيقيٍّ بالعملِ والتجربة، ونفعَ العالمَ قروناً.',
      en:'Jabir ibn Hayyan is a model of experimentation, innovation, and precision — he transformed chemistry into a real science through work and experiment, benefiting the world for centuries.' },
    reflect:[
      { ar:'علّمنا جابرٌ أنّ «من لم يُجرِّبْ لم يُتقِنْ». كيف تتعلّمُ بالتجربةِ والعملِ لا بالكلامِ فقط؟', en:'Jabir taught us "no mastery without experiment." How do you learn by experiment and action, not just talk?' },
      { ar:'اخترعَ أدواتٍ نفعتِ العالمَ قروناً. كيف تُفكِّرُ بابتكارِ ما ينفعُ الناس؟', en:'He invented tools that benefited the world for centuries. How do you think of inventing what benefits people?' },
    ],
  },
};
