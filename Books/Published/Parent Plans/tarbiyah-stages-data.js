/* ════════════════════════════════════════════════════════════════
   tarbiyah-stages-data.js — content for "بوصلة التربية" parent guide.
   Seven life-stages (0 → 18+), each in ~3-year bands, with:
   the scholars' view · the developmental-psychology view ·
   voices of parenting specialists (Muslim educators + psychologists) ·
   needs · risks · values to plant · a prophetic anchor ·
   how to practise it with this site & the Parents-Corner books ·
   and a parent checklist.
   Framework after Dr. Muhammad Khair Al-Sha'al's "تربية الأبناء"
   (every stage: needs · risks · values), the prophetic
   "play 7 / discipline 7 / befriend 7", Ulwan's "تربية الأولاد في
   الإسلام", and developmental psychology (Erikson, Piaget, Bowlby,
   Baumrind).
   ════════════════════════════════════════════════════════════════ */
window.TARBIYAH = {

  anchors: [
    { ic:'🤍', n:{ar:'لاعِبْه سبعًا',en:'Play — first 7'},
      d:{ar:'«الولدُ سيّدٌ سبعًا» — السنواتُ الأولى رحمةٌ ولعبٌ وأمان، لا أمرٌ ولا تكليف.',en:'The early years are mercy, play and security — not commands or burdens.'} },
    { ic:'🧭', n:{ar:'أدِّبْه سبعًا',en:'Discipline — next 7'},
      d:{ar:'«وعبدٌ سبعًا» — سنواتُ التعليم والتأديب وبناء العادة والمسؤولية.',en:'The years of teaching, discipline, habit-building and responsibility.'} },
    { ic:'🤝', n:{ar:'صاحِبْه سبعًا',en:'Befriend — next 7'},
      d:{ar:'«ووزيرٌ سبعًا» — المراهقةُ صداقةٌ وشورى واحترام، ثمّ إطلاقٌ نحو الرشد.',en:'Adolescence is friendship & counsel, then release toward adulthood.'} },
  ],

  pillars: [
    { ic:'📿', n:{ar:'نظرةُ العلماء',en:'The scholars\u2019 view'},
      d:{ar:'لكلِّ مرحلةٍ هديٌ نبويٌّ وفقهُ تربيةٍ: ماذا نغرس، ومتى نأمر، وكيف نرفق.',en:'Each stage has prophetic guidance: what to plant, when to command, how to be gentle.'} },
    { ic:'🧠', n:{ar:'نظرةُ علم النفس',en:'The psychology view'},
      d:{ar:'مراحلُ النموّ النفسيّ تفسّر حاجةَ الطفل في كلِّ سنّ، فنوافقها لا نصادمها.',en:'Developmental stages explain the child\u2019s need at each age, so we work with it, not against it.'} },
    { ic:'🎙️', n:{ar:'أصواتُ المختصّين',en:'Specialists\u2019 voices'},
      d:{ar:'خلاصةُ مربّين وعلماءِ نفسٍ في التربية — قواعدُ عمليّةٌ مجرّبة.',en:'Distilled wisdom of educators & psychologists — tested, practical rules.'} },
    { ic:'✅', n:{ar:'قائمةُ المتابعة',en:'The checklist'},
      d:{ar:'لكلِّ مرحلةٍ قائمةُ مهامٍ عمليّة — علّم ✓ ما أنجزتَه، ولا تنتقل قبل أن تُتقنه.',en:'Each stage has an actionable checklist — tick \u2713 what\u2019s done; master it before moving on.'} },
  ],

  stages: [
    /* ── 0–3 ── */
    { id:'s1', age:'0–3', ic:'🍼', c:'#1A9B7B',
      nm:{ar:'الحضنُ والأمان',en:'Bonding & Security'},
      sub:{ar:'مرحلةُ الرضاعة والحضانة — بناءُ الثقة الأولى',en:'Infancy — building the first trust'},
      scholar:{ar:'مرحلةُ الرحمةِ المطلقة. هَديُ النبيِّ ﷺ: الأذانُ في أُذنِ المولود، والتسميةُ الحسنة، والعقيقةُ والتحنيك، والرضاعةُ والحِضنُ والتقبيل. لمّا قال الأقرعُ بنُ حابسٍ إنّ له عشرةً من الولدِ ما قبّل منهم أحدًا، قال ﷺ: «مَن لا يَرحمْ لا يُرحَم». في هذه السنّ لا أمرَ ولا نهيَ ولا تكليف؛ إنّما زرعُ الأمانِ والطمأنينة، وأن يرتبطَ اسمُ الله بالحبِّ والدفء. وقد جعل العلماءُ حقَّ الطفلِ في الرضاعِ والرعايةِ من أوكدِ الحقوق.',
        en:'The stage of pure mercy. The Prophet ﷺ taught the adhan in the newborn\u2019s ear, a good name, the \u2018aqiqah, breastfeeding, and abundant holding and kissing. When a man said he had ten children and never kissed one, the Prophet ﷺ said: \u201cHe who shows no mercy will be shown none.\u201d At this age there are no commands — only planting security and warmth, so Allah\u2019s name is tied to love. The scholars counted the child\u2019s right to nursing and care among the most binding of rights.'},
      psych:{ar:'إريكسون: «الثقةُ مقابل الريبة» (٠–١٫٥)، ثمّ «الاستقلالُ مقابل الخجل» (١٫٥–٣). وبولبي في نظريّةِ التعلّق: استجابتُك السريعةُ لبكائه وجوعِه وخوفِه تبني «التعلّقَ الآمن» الذي هو أساسُ كلِّ علاقةٍ وكلِّ إيمانٍ لاحق. الدماغُ ينمو بسرعةٍ هائلةٍ عبر اللمسِ والصوتِ والحواسّ؛ والروتينُ الثابتُ يمنحه طُمأنينة.',
        en:'Erikson: Trust vs Mistrust (0–1.5) then Autonomy vs Shame (1.5–3). And Bowlby\u2019s attachment theory: your prompt response to crying, hunger and fear builds the \u201csecure attachment\u201d underlying every later relationship and faith. The brain grows at astonishing speed through touch, sound and the senses; a steady routine gives reassurance.'},
      specialists:[
        {q:{ar:'«الطفلُ يُولَد ومعه رصيدٌ من الحبِّ يحتاج أن يُملأ؛ فإن مُلئ في الصغرِ أعطى في الكبر».',en:'\u201cA child is born with a love-tank that must be filled; filled young, he gives when grown.\u201d'}, by:{ar:'من خلاصة مربّي الطفولة المبكّرة',en:'Early-childhood educators'}},
        {q:{ar:'«لا تُدلّل بالإهمالِ ولا بالإفراط؛ الأمانُ استجابةٌ ثابتةٌ لا تدليلٌ زائد».',en:'\u201cSecurity is a consistent response, not over-indulgence.\u201d'}, by:{ar:'علم نفس النموّ',en:'Developmental psychology'}},
      ],
      hadith:{t:{ar:'«مَن لا يَرحمِ الناسَ لا يَرحمْه الله»',en:'\u201cHe who does not show mercy to people, Allah will not show mercy to him.\u201d'}, r:{ar:'متفق عليه',en:'Bukhari & Muslim'}},
      needs:[
        {ar:'الرضاعةُ والتغذيةُ والنومُ المنتظم',en:'Breastfeeding, nutrition & regular sleep'},
        {ar:'الحضنُ والملامسةُ والاستجابةُ الفوريّة للبكاء',en:'Holding, touch & prompt response to crying'},
        {ar:'الأمانُ الحسّيّ وثباتُ الروتين اليوميّ',en:'Physical safety & a stable daily routine'},
        {ar:'سماعُ القرآنِ وذِكرِ الله بصوتٍ هادئ',en:'Hearing Qur\u2019an & dhikr in a calm voice'},
        {ar:'تنبيهٌ حسّيّ: ألوانٌ وأصواتٌ ولعبٌ بسيط',en:'Sensory stimulation: colours, sounds, simple play'},
      ],
      risks:[
        {ar:'الإهمالُ العاطفيّ وتركُ البكاءِ طويلًا',en:'Emotional neglect & leaving crying unanswered'},
        {ar:'الشاشاتُ المبكّرة (تُضعف الانتباهَ واللغة)',en:'Early screens (weaken attention & language)'},
        {ar:'القسوةُ أو الصراخُ أو عدمُ ثباتِ المربّي',en:'Harshness, shouting or an inconsistent caregiver'},
        {ar:'كثرةُ تبديلِ الحاضنين وعدمُ الاستقرار',en:'Frequent change of caregivers & instability'},
      ],
      values:[
        {ar:'الأمانُ والطمأنينة',en:'Security & inner calm'},
        {ar:'الثقةُ بالوالدين',en:'Trust in the parents'},
        {ar:'الرحمةُ والحنان',en:'Mercy & tenderness'},
        {ar:'ارتباطُ اسمِ اللهِ بالحبّ',en:'Linking Allah\u2019s name to love'},
      ],
      practice:{
        track:{ar:'قبل المسارات — مرحلةُ التأسيس',en:'Before the tracks — the foundation stage'},
        items:[
          {ar:'اجعل البيتَ مسموعًا فيه القرآنُ والأذكار؛ ابدأ من «واحة العبادة» بأذكارِ النومِ والاستيقاظ تقرؤها عليه.',en:'Fill the home with Qur\u2019an & adhkar; begin with the sleep/waking adhkar from Worship Oasis, read over him.'},
          {ar:'في «ركن الأهل» سجِّل عاداتِك أنت (الحضن، الدعاء له) لا عاداتِه؛ فأنت المُربَّى أوّلًا في هذه المرحلة.',en:'In the Parents\u2019 Corner, log your own habits (hugging, du\u2019a for him) — you are the one being trained at this stage.'},
        ]},
      checklist:[
        {ar:'أُلبّي حاجاتِه الجسديّةَ والعاطفيّةَ بسرعةٍ وثبات',en:'I meet his physical & emotional needs promptly and consistently'},
        {ar:'أحمله وأُقبّله وأُلاعبه يوميًّا بلا مقابل',en:'I hold, kiss & play with him daily, freely'},
        {ar:'يسمعُ القرآنَ والأذكارَ في جوٍّ هادئ',en:'He hears Qur\u2019an & adhkar in a calm setting'},
        {ar:'له روتينٌ ثابتٌ للنومِ والطعام',en:'He has a stable sleep & feeding routine'},
        {ar:'منعتُ الشاشاتِ قبل العامين تمامًا',en:'I keep screens away entirely before age 2'},
        {ar:'لا أصرخُ في وجهه ولا أُرعبه',en:'I never shout at or frighten him'},
      ] },

    /* ── 3–6 ── */
    { id:'s2', age:'3–6', ic:'🧸', c:'#C9A227',
      nm:{ar:'اللعبُ والتلقين',en:'Play & First Words of Faith'},
      sub:{ar:'الطفولةُ المبكّرة — القدوةُ والتقليد',en:'Early childhood — modeling & imitation'},
      scholar:{ar:'مرحلةُ اللعبِ الأولى. وصّى السلفُ: «افتحوا على صبيانكم أوّلَ كلمةٍ بلا إله إلا الله». يُلقَّنُ الطفلُ توحيدَ اللهِ وحبَّه وحبَّ النبيِّ ﷺ بالكلمةِ الطيّبةِ والقصّةِ لا بالتخويف. وهذه سنُّ القدوة: الطفلُ مرآةٌ يُقلّدُ ما يرى لا ما يُقال. علِّمه الأدبَ بالفعلِ: التسميةَ عند الطعام، السلامَ، الصدقَ. ولا تَعِدْه ثمّ تُخلِف، فقد عدَّ النبيُّ ﷺ الوعدَ الكاذبَ للطفلِ كذبةً تُكتَب.',
        en:'The first stage of play. The early Muslims advised: \u201cLet the first word you open upon your children be La ilaha illa Allah.\u201d The child is taught tawhid and love of Allah and His Prophet ﷺ through kind words and stories, never fear. This is the age of the role-model: the child mirrors what he sees, not what he\u2019s told. Teach adab by doing — Bismillah, salam, truth. And never promise then break it: the Prophet ﷺ counted a false promise to a child as a recorded lie.'},
      psych:{ar:'إريكسون: «المبادرةُ مقابل الذنب» (٣–٦). انفجارٌ في اللغةِ والخيالِ وحبِّ السؤال «لماذا؟». بياجيه: التفكيرُ ما قبل الإجرائيّ — يتعلّمُ باللعبِ والتقليدِ والقصّةِ لا بالتلقينِ المجرّد. تشجيعُ المبادرةِ يبني الثقة؛ وكبتُها بالسخريةِ أو العقابِ الزائدِ يزرعُ الشعورَ بالذنبِ والانكفاء.',
        en:'Erikson: Initiative vs Guilt (3–6). An explosion of language, imagination and \u201cwhy?\u201d questions. Piaget: pre-operational thought — the child learns through play, imitation and story, not abstract instruction. Encouraging initiative builds confidence; crushing it with mockery or excess punishment plants guilt and withdrawal.'},
      specialists:[
        {q:{ar:'«ربِّ ابنَك على القصّةِ لا على المحاضرة؛ القصّةُ تدخلُ القلبَ من غيرِ استئذان».',en:'\u201cRaise your child on story, not on lecture; a story enters the heart without knocking.\u201d'}, by:{ar:'من منهج التربية بالقصّة',en:'Education-by-story method'}},
        {q:{ar:'«أنماطُ التربيةِ الناجحةُ حازمةٌ وحانيةٌ معًا: حدودٌ واضحةٌ مع دفءٍ عالٍ» — أسلوبُ التربيةِ المتوازن.',en:'\u201cThe most successful style is authoritative: clear limits with high warmth\u201d — Baumrind\u2019s balanced parenting.'}, by:{ar:'ديانا باومريند · علم النفس',en:'Diana Baumrind · psychology'}},
      ],
      hadith:{t:{ar:'«مُروا الصبيَّ بالصلاةِ إذا بلغ سبعَ سنين» — وقبلها تحبيبٌ وتعليمٌ باللعب',en:'Before the command at seven comes endearment — teaching worship through play and love.'}, r:{ar:'أبو داود',en:'Abu Dawud'}},
      needs:[
        {ar:'اللعبُ الحرُّ والخيالُ والحركة',en:'Free play, imagination & movement'},
        {ar:'الإجابةُ عن أسئلتِه بصبرٍ وبساطة',en:'Patient, simple answers to his questions'},
        {ar:'قدوةٌ صالحةٌ يُقلّدها (الصلاة، الأدب، الصدق)',en:'A good model to imitate (prayer, adab, truth)'},
        {ar:'قصصُ الأنبياءِ والصالحين قبل النوم',en:'Stories of prophets & the righteous at bedtime'},
        {ar:'تلقينُ «لا إله إلا الله» وحبِّ اللهِ ورسولِه',en:'Planting tawhid & love of Allah and His Prophet'},
      ],
      risks:[
        {ar:'تقليدُ السلوكِ السيّئِ من المحيطِ والشاشات',en:'Imitating bad behaviour from surroundings & screens'},
        {ar:'تخويفُه من اللهِ أو ربطُ الدينِ بالعقاب',en:'Frightening him of Allah or tying faith to punishment'},
        {ar:'الوعدُ الكاذبُ وكثرةُ «لا» بلا سبب',en:'False promises & constant unexplained \u201cno\u201d'},
        {ar:'العقابُ القاسي الذي يكبتُ المبادرةَ والفضول',en:'Harsh punishment that crushes initiative & curiosity'},
      ],
      values:[
        {ar:'حبُّ اللهِ ورسولِه ﷺ',en:'Love of Allah & His Prophet ﷺ'},
        {ar:'الصدقُ ومطابقةُ القولِ للفعل',en:'Truthfulness — words matching deeds'},
        {ar:'آدابُ الطعامِ والسلامِ والاستئذان',en:'Adab of eating, greeting & asking permission'},
        {ar:'المشاركةُ والرحمةُ بالصغير',en:'Sharing & mercy to the small'},
      ],
      practice:{
        track:{ar:'مسارُ «البراعم» (٤–٦) في كتاب خارطة طريق المربّي',en:'The \u201cLittle Sprouts\u201d track (4–6) in the Parent Roadmap book'},
        items:[
          {ar:'اتبع خطّةَ «البراعم»: ١٠–١٥ دقيقة يوميًّا باللعبِ والتكرار — الفاتحةُ وقِصارُ السورِ من «بستان القرآن»، وحركاتُ الصلاةِ من «واحة العبادة».',en:'Follow the Sprouts plan: 10\u201315 min/day through play — Al-Fatihah & short surahs (Qur\u2019an Garden), prayer motions (Worship Oasis).'},
          {ar:'احكِ له قصصَ الأنبياءِ المصوّرةَ من «حصن الأبطال»، وخُلُقًا أسبوعيًّا من «حيّنا الصغير».',en:'Tell the illustrated prophet-stories from Heroes\u2019 Fortress, and a weekly manner from Our Little District.'},
        ]},
      checklist:[
        {ar:'أحكي له قصّةً هادفةً (نبيٍّ أو صحابيٍّ) بانتظام',en:'I tell him a purposeful story (prophet/companion) regularly'},
        {ar:'يراني أُصلّي وأذكُرُ اللهَ فيُقلّدني',en:'He sees me pray & remember Allah, and imitates me'},
        {ar:'لقّنتُه «لا إله إلا الله» وحبَّ النبيِّ ﷺ',en:'I have taught him tawhid & love of the Prophet ﷺ'},
        {ar:'ألعبُ معه يوميًّا وأشجّعُ خيالَه ومبادرتَه',en:'I play with him daily & encourage his imagination/initiative'},
        {ar:'لا أُخوّفه باللهِ ولا أعِدُه ثمّ أُخلِف',en:'I never frighten him with Allah, nor break a promise'},
        {ar:'أضبطُ الشاشةَ محتوًى ووقتًا بصرامة',en:'I strictly control screen content & time'},
      ] },

    /* ── 6–9 ── */
    { id:'s3', age:'6–9', ic:'📿', c:'#2A6FDB',
      nm:{ar:'التعليمُ والتأديب',en:'Teaching & Discipline'},
      sub:{ar:'الطفولةُ الوسطى — بدءُ المسؤولية',en:'Middle childhood — responsibility begins'},
      scholar:{ar:'مرحلةُ «أدِّبْه سبعًا». الأمرُ النبويُّ صريح: «مُروا أولادَكم بالصلاةِ وهم أبناءُ سبع». يبدأُ التعليمُ المنظّم: حفظُ قِصارِ السورِ، فقهُ الطهارةِ والصلاةِ المبسّط، التمييزُ بين الحلالِ والحرام، تحمّلُ مسؤوليّاتٍ صغيرة. الأمرُ بالصلاةِ هنا أمرُ تعويدٍ وتحبيبٍ لا قهر، فالتكليفُ لم يأتِ بعد. والتأديبُ بالقدوةِ والتشجيعِ أوّلًا، والثوابُ خيرٌ من العقاب.',
        en:'The stage of \u201cdiscipline for seven.\u201d The prophetic command is explicit: \u201cCommand your children to pray at seven.\u201d Structured teaching begins: memorizing short surahs, simple fiqh of purity and prayer, distinguishing halal from haram, carrying small responsibilities. The command to pray here is habituation and endearment, not coercion — accountability has not yet begun. Discipline through modeling and encouragement first; reward outweighs punishment.'},
      psych:{ar:'إريكسون: «الكفاءةُ (الاجتهاد) مقابل الدونيّة» (٦–١٢). يدخلُ المدرسةَ ويقيسُ نفسَه بأقرانه؛ يحتاجُ أن يُتقنَ ويُنجزَ ويُمدَح. بياجيه: التفكيرُ العمليُّ المحسوس — يفهمُ القواعدَ والمنطقَ الملموس. النجاحُ المُعترَفُ به يبني تقديرَ الذات؛ والمقارنةُ الجارحةُ أو التحقيرُ يزرعان عقدةَ النقص.',
        en:'Erikson: Industry (Competence) vs Inferiority (6–12). He enters school and measures himself against peers; he needs to master, achieve and be praised. Piaget: concrete-operational thought — he grasps rules and tangible logic. Recognized success builds self-esteem; wounding comparison or belittling plants an inferiority complex.'},
      specialists:[
        {q:{ar:'«علِّق العقابَ بالخطأ لا بالطفل؛ صحّح الفعلَ ولا تجرح الذات».',en:'\u201cTie correction to the act, not the child; fix the deed without wounding the self.\u201d'}, by:{ar:'من أصول التأديب التربويّ',en:'Principles of positive discipline'}},
        {q:{ar:'«حاجةُ هذا السنِّ أن يُنجزَ ويُمدَح؛ امنحه مسؤوليّةً صغيرةً يَنجح فيها كلَّ يوم».',en:'\u201cThis age needs to achieve and be praised; give a small daily responsibility he can succeed at.\u201d'}, by:{ar:'إريكسون · علم النفس',en:'Erikson · psychology'}},
      ],
      hadith:{t:{ar:'«مُروا أولادَكم بالصلاةِ وهم أبناءُ سبعِ سنين»',en:'\u201cCommand your children to pray when they are seven.\u201d'}, r:{ar:'أبو داود',en:'Abu Dawud'}},
      needs:[
        {ar:'تعليمٌ منظّم: قرآنٌ وطهارةٌ وصلاة',en:'Structured teaching: Qur\u2019an, purity & prayer'},
        {ar:'تدريبٌ على الصلاةِ بالحبِّ والتعويد',en:'Prayer training through love & habit'},
        {ar:'مسؤوليّاتٌ صغيرةٌ تُناسبُ سنَّه',en:'Small age-appropriate responsibilities'},
        {ar:'التشجيعُ والثناءُ على الإنجاز',en:'Encouragement & praise for achievement'},
        {ar:'أصدقاءُ صالحون وأنشطةٌ بدنيّة',en:'Good friends & physical activity'},
      ],
      risks:[
        {ar:'القسوةُ التي تقتلُ الثقةَ وحبَّ العبادة',en:'Harshness that kills confidence & love of worship'},
        {ar:'المقارنةُ بالإخوةِ أو الأقرانِ والتحقير',en:'Comparison with siblings/peers & belittling'},
        {ar:'إهمالُ تدريبِ الصلاةِ في وقتها',en:'Neglecting timely prayer training'},
        {ar:'رفقاءُ السوءِ وبدايةُ التأثّرِ بالخارج',en:'Bad company & early outside influence'},
      ],
      values:[
        {ar:'المحافظةُ على الصلاة',en:'Keeping the prayer'},
        {ar:'المسؤوليّةُ والاعتمادُ على النفس',en:'Responsibility & self-reliance'},
        {ar:'الصدقُ والأمانةُ واحترامُ الكبير',en:'Truth, trustworthiness & respect for elders'},
        {ar:'حبُّ العلمِ والإتقان',en:'Love of knowledge & excellence'},
      ],
      practice:{
        track:{ar:'مسارُ «البُناة» (٧–٩) في كتاب خارطة طريق المربّي',en:'The \u201cYoung Builders\u201d track (7–9) in the Parent Roadmap book'},
        items:[
          {ar:'ابدأ خطّةَ الحفظِ في «كتاب خطة حفظ القرآن» (جزء عمّ)، واجعل الصلاةَ عادةً يوميّةً برحلةِ الصلاةِ في «واحة العبادة».',en:'Begin the plan in the Qur\u2019an Memorization Plan book (Juz \u2019Amma), and make prayer a daily habit via the Prayer journey in Worship Oasis.'},
          {ar:'استخدم «نقاطَ السلوك» والشهاداتِ في «ركن الأهل» بالموقع لتثبيتِ العاداتِ والاحتفاءِ بالإنجاز.',en:'Use behaviour-points & certificates in the site\u2019s Parents\u2019 Corner to lock habits in and celebrate achievement.'},
        ]},
      checklist:[
        {ar:'بدأتُ أمرَه بالصلاةِ تعويدًا منذ السابعة',en:'I began commanding prayer (as habit) from age seven'},
        {ar:'يحفظُ قِصارَ السورِ ويتعلّمُ الطهارةَ والصلاة',en:'He memorizes short surahs & learns purity/prayer'},
        {ar:'أُكلّفه مسؤوليّةً صغيرةً وأُثني على إنجازه',en:'I give him a small responsibility & praise his effort'},
        {ar:'لا أُقارنه بإخوتِه ولا أُحقّرُ محاولاتِه',en:'I never compare him to siblings nor belittle his attempts'},
        {ar:'أتابعُ أصدقاءَه وأوجّهه لرفقةٍ صالحة',en:'I monitor his friends & guide him to good company'},
        {ar:'الثوابُ والتشجيعُ عندي أكثرُ من العقاب',en:'I use reward & encouragement more than punishment'},
      ] },

    /* ── 9–12 ── */
    { id:'s4', age:'9–12', ic:'🧭', c:'#8E44AD',
      nm:{ar:'الحياءُ والاستعداد',en:'Modesty & Readiness'},
      sub:{ar:'ما قبل المراهقة — التهيئةُ للبلوغ',en:'Pre-adolescence — preparing for puberty'},
      scholar:{ar:'تشتدُّ العنايةُ بالصلاة: «واضربوهم عليها وهم أبناءُ عشرٍ، وفرّقوا بينهم في المضاجع». وهذا تفريقٌ تعليميٌّ يغرسُ الحياءَ وحدودَ الجسد. هذه مرحلةُ التهيئةِ للبلوغ: تعليمُ الطهارةِ والغُسلِ وأحكامِ الاحتلامِ والحيضِ قبل وقوعها بسكينةٍ ووضوح، وغرسُ الحياءِ والسترِ والفصلِ المناسب. كان السلفُ يُعلّمون أبناءَهم أحكامَ البلوغِ قبل بلوغِهم حتى لا يفجأَهم.',
        en:'Care for prayer intensifies: \u201c...and at ten, and separate their beds.\u201d This separation is instructive — planting modesty and bodily boundaries. This is the stage of preparing for puberty: teaching purity, ghusl, and the rulings of wet-dreams/menstruation calmly and clearly before they occur, and planting haya and covering. The early Muslims taught the rulings of puberty before it arrived so it would not shock the child.'},
      psych:{ar:'ما قبلَ المراهقة: تتسارعُ الاستقلاليّةُ ويبدأُ التفكيرُ المجرّد، ويتعاظمُ تأثيرُ الأقران. يحتاجُ حدودًا واضحةً مع احترام، ومساحةَ خصوصيّةٍ معقولة. الفجوةُ هنا خطيرة: إن لم يجدِ المعلومةَ منك (عن جسدِه وتغيّراتِه) أخذها مشوّهةً من الإنترنتِ والأقران. الحوارُ المفتوحُ الآن يصنعُ الثقةَ التي ستحميه في المراهقة.',
        en:'Pre-adolescence: independence accelerates, abstract thinking begins, and peer influence grows strong. He needs clear boundaries with respect and reasonable privacy. The gap here is dangerous: if he doesn\u2019t get the information from you (about his body and its changes), he\u2019ll take a distorted version from the internet and peers. Open dialogue now builds the trust that will protect him in adolescence.'},
      specialists:[
        {q:{ar:'«مَن لم يُربِّ ابنَه على الحياءِ والمعرفةِ قبلَ البلوغ، ربّاه الإنترنتُ والأقران».',en:'\u201cWhoever does not teach modesty & knowledge before puberty — the internet and peers will teach it.\u201d'}, by:{ar:'من فقه التربية المعاصر',en:'Contemporary tarbiyah'}},
        {q:{ar:'«افتح بابَ الحوارِ قبل أن يُغلِقه البلوغ؛ الثقةُ المبنيّةُ الآن هي حِصنُ المراهقة».',en:'\u201cOpen the door of dialogue before puberty closes it; trust built now is the fortress of adolescence.\u201d'}, by:{ar:'مختصّو نموّ المراهقين',en:'Adolescence specialists'}},
      ],
      hadith:{t:{ar:'«...واضربوهم عليها وهم أبناءُ عشرٍ، وفرّقوا بينهم في المضاجع»',en:'\u201c...and at ten, and separate their beds.\u201d'}, r:{ar:'أبو داود',en:'Abu Dawud'}},
      needs:[
        {ar:'تهيئةٌ هادئةٌ للبلوغِ وتغيّراتِ الجسد',en:'Calm preparation for puberty & bodily change'},
        {ar:'تعليمُ الطهارةِ والغُسلِ وأحكامِ البلوغ',en:'Teaching purity, ghusl & the rulings of buloogh'},
        {ar:'حدودٌ واضحةٌ مع احترامٍ وخصوصيّةٍ معقولة',en:'Clear boundaries with respect & reasonable privacy'},
        {ar:'حوارٌ مفتوحٌ وثقةٌ متبادلة',en:'Open dialogue & mutual trust'},
        {ar:'مسؤوليّاتٌ أكبرُ وثقةٌ في قدراته',en:'Bigger responsibilities & trust in his abilities'},
      ],
      risks:[
        {ar:'الفراغُ المعرفيّ فيأخذُ المعلومةَ مشوّهةً',en:'A knowledge gap filled by distorted sources'},
        {ar:'التعرّضُ للمحتوى غيرِ اللائقِ على الأجهزة',en:'Exposure to inappropriate content on devices'},
        {ar:'رفقاءُ السوءِ والسرّيّةُ والانغلاق',en:'Bad peers, secrecy & withdrawal'},
        {ar:'التشدّدُ الزائدُ فيولّدُ التمرّدَ المبكّر',en:'Over-control breeding early rebellion'},
      ],
      values:[
        {ar:'الحياءُ والسترُ وحدودُ الجسد',en:'Modesty, covering & bodily boundaries'},
        {ar:'المسؤوليّةُ وضبطُ النفس',en:'Responsibility & self-discipline'},
        {ar:'ثباتُ الصلاةِ عن قناعة',en:'Steadfast prayer by conviction'},
        {ar:'الهُويّةُ الإيمانيّةُ والاعتزازُ بالدين',en:'Faith-identity & pride in the deen'},
      ],
      practice:{
        track:{ar:'مسارُ «الفرسان» (١٠–١٢) في كتاب خارطة طريق المربّي',en:'The \u201cKnights\u201d track (10–12) in the Parent Roadmap book'},
        items:[
          {ar:'عمّق العقيدةَ بالبرهان من «منارة العقيدة» (المختبر والتوحيد)، وثبّت الحياءَ والقيمَ من «القلب السليم» و«حيّنا الصغير».',en:'Deepen creed with proof from Faith Minaret (Lab & Tawheed), and anchor modesty & values via Pure Heart and Our Little District.'},
          {ar:'هذه مرحلةُ التهيئةِ للبلوغ: استعِن بكتابِ خطةِ المربّي في فتحِ حوارٍ هادئٍ عن تغيّراتِ الجسدِ قبل وقوعها.',en:'This is the puberty-prep stage: use the Roadmap book to open a calm conversation about bodily changes, in advance.'},
        ]},
      checklist:[
        {ar:'هيّأتُه لتغيّراتِ البلوغِ بوضوحٍ وسكينةٍ قبل وقوعها',en:'I prepared him for puberty\u2019s changes clearly & calmly, in advance'},
        {ar:'علّمتُه الطهارةَ والغُسلَ وأحكامَ البلوغ',en:'I taught him purity, ghusl & the rulings of buloogh'},
        {ar:'صلاتُه شبهُ منتظمةٍ عن قناعةٍ لا إجبار',en:'His prayer is near-regular by conviction, not force'},
        {ar:'بيني وبينه حوارٌ مفتوحٌ يسألني فيه بلا خوف',en:'We have open dialogue; he asks me without fear'},
        {ar:'أحفظُ خصوصيّتَه وأمنحُه حدودًا واضحةً باحترام',en:'I respect his privacy & give clear boundaries respectfully'},
        {ar:'أتابعُ أجهزتَه ومحتواه وأصدقاءَه عن قُرب',en:'I closely monitor his devices, content & friends'},
      ] },

    /* ── 12–15 ── */
    { id:'s5', age:'12–15', ic:'🤝', c:'#C0392B',
      nm:{ar:'الصداقةُ والتكليف',en:'Friendship & Accountability'},
      sub:{ar:'المراهقةُ المبكّرة — عاملْه كصديقٍ لا كطفل',en:'Early adolescence — treat as friend, not child'},
      scholar:{ar:'مرحلةُ «صاحِبْه سبعًا». غالبًا يقعُ البلوغُ هنا فيصيرُ مُكلَّفًا تُكتبُ حسناتُه وسيّئاتُه؛ هذا تحوّلٌ جوهريٌّ في التعامل. عاملْه كرجلٍ/امرأةٍ ناشئة: شاورْه، احترِم رأيَه، كَلِّفه، ولا تُذِلَّه أمام الناس. كان عمرُ يُجلِسُ ابنَ عبّاسٍ الفتى مع كبارِ الصحابة. الإقناعُ لا الإكراه، والصداقةُ لا الوصاية؛ فالمراهقُ يُطيعُ من يحترمُه ويصدُّ من يقهرُه.',
        en:'The stage of \u201cbefriend for seven.\u201d Puberty usually falls here, so he becomes accountable — his deeds now recorded; a fundamental shift. Treat him as a young man/woman: consult him, respect his opinion, entrust him, and never humiliate him before others. \u2018Umar seated the youth Ibn \u2018Abbas among the senior Companions. Persuasion not coercion, friendship not control — the adolescent obeys whoever respects him and resists whoever subdues him.'},
      psych:{ar:'إريكسون: «الهُويّةُ مقابل اضطرابِ الدور» (١٢–١٨). البلوغُ والهرموناتُ تُحدثُ تقلّبًا عاطفيًّا، ويصيرُ الأقرانُ هم المرجع، ويبحثُ المراهقُ عن «مَن أنا؟». يحتاجُ استقلالًا واحترامًا وأن يُسمَع. القهرُ والمحاضراتُ تُنتجُ التمرّدَ أو الازدواجيّة؛ والاحترامُ والحوارُ يُنتجان هُويّةً متّزنة. أكثرُ ما يضرُّه: التحقيرُ أمامَ أصدقائه.',
        en:'Erikson: Identity vs Role Confusion (12–18). Puberty and hormones bring emotional volatility, peers become the reference point, and the teen searches for \u201cwho am I?\u201d He needs autonomy, respect and to be heard. Subjugation and lectures produce rebellion or a double life; respect and dialogue produce a settled identity. What harms him most: being belittled in front of his friends.'},
      specialists:[
        {q:{ar:'«المراهقُ لا يحتاجُ ناصحًا جديدًا بقدرِ ما يحتاجُ صديقًا قديمًا يثقُ به».',en:'\u201cThe teen needs less a new adviser than an old friend he can trust.\u201d'}, by:{ar:'من فقه مصاحبة المراهق',en:'On befriending teens'}},
        {q:{ar:'«اربط المراهقَ بقلبِك أوّلًا، يتبعك في كلِّ أمرٍ بعد ذلك» — قاعدةُ التعلّقِ قبل التوجيه.',en:'\u201cKeep your teen attached to your heart first, and direction follows\u201d — attachment before discipline.\u201d'}, by:{ar:'جوردون نوفيلد · علم النفس',en:'Gordon Neufeld · psychology'}},
      ],
      hadith:{t:{ar:'«رُفِع القلمُ عن ثلاثة... وعن الصبيِّ حتى يحتلم» — فإذا بلغ صار مُكلَّفًا مسؤولًا',en:'The pen is lifted from the child until puberty — once he reaches it, he is accountable.'}, r:{ar:'أبو داود',en:'Abu Dawud'}},
      needs:[
        {ar:'الاحترامُ والمعاملةُ كصديقٍ ناضج',en:'Respect & being treated as a maturing friend'},
        {ar:'الشورى وإشراكُه في القرار',en:'Consultation & inclusion in decisions'},
        {ar:'الاستقلالُ المسؤولُ وأن يُسمَعَ ويُفهَم',en:'Responsible autonomy & being heard'},
        {ar:'هدفٌ ومعنًى ودورٌ يشعرُ بقيمتِه فيه',en:'Purpose, meaning & a role that gives worth'},
        {ar:'رفقةٌ صالحةٌ وقدوةٌ من خارجِ البيت',en:'Good companionship & a role-model beyond home'},
      ],
      risks:[
        {ar:'القهرُ والمحاضراتُ فيولّدان التمرّد',en:'Subjugation & lecturing breeding rebellion'},
        {ar:'رفقاءُ السوءِ وضغطُ الأقرانِ ووسائلُ التواصل',en:'Bad peers, peer pressure & social media'},
        {ar:'التحقيرُ أمام الناسِ وكسرُ كرامتِه',en:'Humiliation in public & breaking his dignity'},
        {ar:'اضطرابُ الهُويّةِ والشبهاتُ والعزلة',en:'Identity confusion, doubts & isolation'},
      ],
      values:[
        {ar:'الهُويّةُ الإسلاميّةُ والاعتزازُ بها',en:'A firm, proud Islamic identity'},
        {ar:'تملّكُ الصلاةِ والعبادةِ مسؤوليّةً ذاتيّة',en:'Owning prayer & worship as personal duty'},
        {ar:'العفّةُ والحياءُ وحفظُ النفس',en:'Chastity, modesty & self-restraint'},
        {ar:'المسؤوليّةُ وحُسنُ اختيارِ الصحبة',en:'Responsibility & choosing companions well'},
      ],
      practice:{
        track:{ar:'ما بعد المسارات — مرحلةُ المصاحبة',en:'Beyond the tracks — the companionship stage'},
        items:[
          {ar:'حوّل الموقعَ من «منهجٍ» إلى «حوار»: ناقشه في رحلاتِ «القدس والأمة» و«حصن الأبطال» كنقاشِ ندٍّ لندّ، لا كدرسٍ يُلقّن.',en:'Turn the site from \u201ccurriculum\u201d into \u201cconversation\u201d: discuss the Al-Quds & Heroes\u2019 Fortress journeys as peer-to-peer talk, not a lecture.'},
          {ar:'أعطه دورًا حقيقيًّا: يُعلّم إخوتَه الصغارَ من كتبِ الأنشطة، ويقودُ «نقاطَ السلوك» للأسرةِ في «ركن الأهل».',en:'Give him a real role: teaching younger siblings from the activity books, and leading the family\u2019s behaviour-points in the Parents\u2019 Corner.'},
        ]},
      checklist:[
        {ar:'أعامله كصديقٍ: أُشاوره وأحترمُ رأيَه ولا أُذِلّه',en:'I treat him as a friend: consult, respect his view, never humiliate'},
        {ar:'علّمتُه أنّه مُكلَّفٌ مسؤولٌ أمام الله بعد البلوغ',en:'I taught him he is now accountable before Allah'},
        {ar:'يملكُ صلاتَه وعبادتَه عن قناعةٍ ذاتيّة',en:'He owns his prayer & worship by personal conviction'},
        {ar:'أعرفُ أصدقاءَه ومتابعاتِه على وسائل التواصل',en:'I know his friends & what he follows on social media'},
        {ar:'أُنصِتُ له أكثرَ ممّا أُحاضِر، وأناقشُ شبهاتِه بصدر رحب',en:'I listen more than I lecture, & discuss his doubts openly'},
        {ar:'أعطيتُه دورًا ومسؤوليّةً حقيقيّةً في البيت',en:'I gave him a real role & responsibility at home'},
      ] },

    /* ── 15–18 ── */
    { id:'s6', age:'15–18', ic:'🦅', c:'#E67E22',
      nm:{ar:'الرسالةُ والاستقلال',en:'Purpose & Independence'},
      sub:{ar:'المراهقةُ المتأخّرة — نحو الرجولةِ والرشد',en:'Late adolescence — toward maturity'},
      scholar:{ar:'تمامُ مرحلةِ الوزارةِ والصُّحبة. الشابُّ الآن مكلَّفٌ كامل، تُبنى علاقتُه على الثقةِ والمشورةِ والشراكةِ في هموم الأسرة. يُهيَّأُ للرسالةِ والمسؤوليّةِ الكبرى: الزواجُ مستقبلًا، العفّةُ، البرُّ، الدعوةُ والنفعُ، وحملُ الدين. غُذِّيَ شبابُ الصحابةِ بالمسؤوليّةِ مبكّرًا: أُسامةُ قاد جيشًا، ومعاذٌ أُرسِل قاضيًا. احفظْه من الفتنِ والشبهاتِ بالتحصينِ العلميِّ والإيمانيِّ والصُّحبةِ الصالحة، لا بالحجرِ والمنع.',
        en:'The completion of the \u201cminister/companion\u201d stage. The young person is now fully accountable; the relationship rests on trust, consultation and partnership in the family\u2019s concerns. Prepare him for purpose and greater responsibility: future marriage, chastity, devotion to parents, da\u2019wah and benefit, and bearing the deen. The young Companions were fed responsibility early — Usamah led an army, Mu\u2018adh was sent as a judge. Protect him from temptations and doubts by fortifying his knowledge, faith and good company — not by confinement.'},
      psych:{ar:'تثبيتُ الهُويّةِ والتوجّهُ للمستقبل. يكتملُ التفكيرُ المجرّدُ والأخلاقيّ، ويسعى للاستقلالِ وبناءِ مشروعِ حياتِه. يحتاجُ أن يُعامَلَ كراشدٍ يُوثَقُ به، ومهاراتٍ حياتيّةً، وحوارًا فكريًّا ناضجًا حول الإيمانِ والمعنى. الانفصالُ العاطفيُّ أو الوصايةُ المفرطةُ يدفعانه بعيدًا؛ والثقةُ مع الحضورِ الدافئ تُبقيه قريبًا حتى الرشد.',
        en:'Identity consolidation and future orientation. Abstract and moral reasoning mature; he seeks independence and to build his life project. He needs to be treated as a trusted adult, given life skills, and engaged in mature dialogue about faith and meaning. Emotional detachment or smothering control push him away; trust with warm presence keeps him close into adulthood.'},
      specialists:[
        {q:{ar:'«أعطِ الشابَّ رسالةً يعيشُ لها، وإلّا عاش لشهوةٍ تستهلكه؛ الفراغُ أخطرُ أعدائه».',en:'\u201cGive the youth a mission to live for, or he\u2019ll live for a desire that consumes him; emptiness is his worst enemy.\u201d'}, by:{ar:'من تربية الشباب على الرسالة',en:'On raising youth with purpose'}},
        {q:{ar:'«حصّن عقلَه بالحوارِ لا بالمنع؛ الشبهةُ تُعالَجُ بالعلمِ والنقاشِ المفتوح، لا بالإنكارِ والخوف».',en:'\u201cFortify his mind through dialogue, not prohibition; doubt is treated with knowledge & open discussion, not denial & fear.\u201d'}, by:{ar:'مختصّو الإرشاد الفكريّ',en:'Intellectual-mentoring specialists'}},
      ],
      hadith:{t:{ar:'«كلُّكم راعٍ وكلُّكم مسؤولٌ عن رعيّتِه» — يُربّى على المسؤوليّةِ والرسالة',en:'\u201cEach of you is a shepherd, responsible for his flock\u201d — raised toward responsibility & mission.'}, r:{ar:'متفق عليه',en:'Bukhari & Muslim'}},
      needs:[
        {ar:'الثقةُ والمعاملةُ كراشدٍ مسؤول',en:'Trust & treatment as a responsible adult'},
        {ar:'هدفٌ ورسالةٌ ومشروعُ حياةٍ واضح',en:'A purpose, mission & clear life-project'},
        {ar:'مهاراتٌ حياتيّةٌ واستقلالٌ متدرّج',en:'Life skills & gradual independence'},
        {ar:'حوارٌ فكريٌّ ناضجٌ حول الإيمانِ والمعنى',en:'Mature intellectual dialogue on faith & meaning'},
        {ar:'تهيئةٌ للزواجِ والعفّةِ ومسؤوليّةِ المستقبل',en:'Preparation for marriage, chastity & future duty'},
      ],
      risks:[
        {ar:'الانفصالُ العاطفيُّ أو الوصايةُ المفرطة',en:'Emotional detachment or smothering control'},
        {ar:'الشبهاتُ الفكريّةُ والإلحادُ بلا تحصين',en:'Intellectual doubts & atheism without fortification'},
        {ar:'العلاقاتُ المحرّمةُ وفتنُ الشهوات',en:'Forbidden relationships & temptations of desire'},
        {ar:'ضياعُ الهدفِ والفراغُ والرفقةُ الضائعة',en:'Loss of purpose, emptiness & lost company'},
      ],
      values:[
        {ar:'الرسالةُ والهدفُ ونفعُ الأمّة',en:'Mission, purpose & serving the ummah'},
        {ar:'رسوخُ الإيمانِ عن علمٍ وقناعة',en:'Faith grounded in knowledge & conviction'},
        {ar:'العفّةُ والمسؤوليّةُ وحُسنُ الخُلُق',en:'Chastity, responsibility & good character'},
        {ar:'الاستقلالُ والبرُّ وتحمّلُ التبعات',en:'Independence, devotion to parents & accountability'},
      ],
      practice:{
        track:{ar:'مرحلةُ الإطلاقِ — من متعلّمٍ إلى شريكٍ ومُعلّم',en:'The launch stage — from learner to partner & teacher'},
        items:[
          {ar:'وجّهه ليُتمّ رحلاتِ «منارة العقيدة» و«القدس والأمة» تحصينًا فكريًّا، وليصيرَ مُعلّمًا لإخوتِه في الموقع.',en:'Steer him to complete the Faith Minaret & Al-Quds journeys as intellectual fortification, and to become a teacher of his siblings on the site.'},
          {ar:'أشركه في قيادةِ خطّةِ الأسرةِ من «ركن الأهل»، وافتح معه حوارًا عن مشروعِه ورسالتِه وتهيئةِ الزواج.',en:'Involve him in leading the family\u2019s plan from the Parents\u2019 Corner, and open a conversation about his project, mission & marriage-readiness.'},
        ]},
      checklist:[
        {ar:'أعامله كراشدٍ موثوقٍ وأُشركه في قراراتِ الأسرة',en:'I treat him as a trusted adult & include him in family decisions'},
        {ar:'حصّنتُه ضدّ الشبهاتِ بالعلمِ والحوارِ المفتوح',en:'I fortified him against doubts with knowledge & open dialogue'},
        {ar:'أعنتُه على اكتشافِ رسالتِه وهدفِه ومشروعِ حياته',en:'I help him discover his mission, purpose & life-project'},
        {ar:'علّمتُه مهاراتٍ حياتيّةً ومنحتُه استقلالًا متدرّجًا',en:'I taught him life skills & gave gradual independence'},
        {ar:'تحدّثنا بوضوحٍ عن العفّةِ والزواجِ والمسؤوليّة',en:'We spoke clearly about chastity, marriage & responsibility'},
        {ar:'أبقى حاضرًا بالحبِّ والثقةِ لا بالرقابةِ والقهر',en:'I stay present through love & trust, not surveillance & force'},
      ] },

    /* ── 18+ ── */
    { id:'s7', age:'+18', ic:'🌳', c:'#0E7C66',
      nm:{ar:'الرشدُ والإطلاق',en:'Adulthood & Release'},
      sub:{ar:'ما بعد الثامنة عشرة — من ابنٍ إلى صديقٍ راشد',en:'Beyond eighteen — from child to grown friend'},
      scholar:{ar:'انتهت سنواتُ الولايةِ التربويّةِ وبدأت سنواتُ الأخوّةِ والنصح. الابنُ الآن رجلٌ مسؤولٌ عن نفسِه، وحقُّه عليك أن تُعينَه على البرِّ بك لا أن تُثقِله، وأن تُحسنَ تزويجَه إن أرادَ كما حثَّ النبيُّ ﷺ: «إذا أتاكم مَن ترضَون دينَه وخُلُقَه فزوّجوه». دورُك تحوّل إلى الدعاءِ والمشورةِ عند الطلبِ، والاحترامِ لاستقلالِه وقراراتِه. ولا ينقطعُ برُّك به ولا حبُّك له؛ «وقُل ربِّ ارحمهما كما ربّياني صغيرًا» تذكّرك أنّ الرحمةَ تبقى وإن كبر. احذر أن تُحاسبَه كطفلٍ أو تتدخّلَ في بيتِه؛ فالحكمةُ أن تكونَ مرجعَه لا رقيبَه.',
        en:'The years of guardianship have ended; the years of brotherhood and counsel begin. Your child is now an adult responsible for himself. His right upon you is that you help him honour you rather than burden him, and that you help him marry well if he wishes — \u201cWhen one whose religion and character please you proposes, marry him.\u201d Your role shifts to du\u2019a, counsel when asked, and respect for his independence and decisions. Your kindness and love never cease — \u201cMy Lord, have mercy on them as they raised me young\u201d reminds us mercy remains even when he is grown. Beware treating him as a child or intruding in his home; wisdom is to be his reference, not his watchman.'},
      psych:{ar:'إريكسون: «الألفةُ مقابل العزلة» (مطلعُ الرشد): مهمّةُ هذه السنِّ بناءُ علاقاتٍ ناضجةٍ وزواجٍ وعمل. يحتاجُ الراشدُ الناشئ أن يُستقَلَّ ماليًّا وعاطفيًّا، وأن يُحترَمَ استقلالُه. تدخّلُ الوالدينِ الزائدُ أو ربطُه عاطفيًّا بالذنبِ يعطّلُ نضجَه؛ بينما الدعمُ المتاحُ بلا فرضٍ (قاعدةٌ آمنةٌ يعودُ إليها) يصنعُ راشدًا متّزنًا قادرًا على تكوينِ أسرةٍ سويّة. أنتَ تنتقلُ من «مدير» إلى «مستشار».',
        en:'Erikson: Intimacy vs Isolation (early adulthood): the task is building mature relationships, marriage and work. The emerging adult needs financial and emotional independence, and respect for his autonomy. Over-involvement or binding him through guilt stalls his maturity; while available support without imposition (a secure base to return to) produces a balanced adult capable of forming a healthy family. You move from \u201cmanager\u201d to \u201cconsultant.\u201d'},
      specialists:[
        {q:{ar:'«أنجحُ الآباءِ مَن ربّى ابنَه ليستغنيَ عنه؛ غايةُ التربيةِ استقلالٌ لا تبعيّة».',en:'\u201cThe best parents raise a child to not need them; the goal of tarbiyah is independence, not dependence.\u201d'}, by:{ar:'من غايات التربية',en:'On the aims of tarbiyah'}},
        {q:{ar:'«كُن قاعدتَه الآمنة: متاحًا حين يُطلَب، صامتًا حين لا يُطلَب، داعيًا له دائمًا».',en:'\u201cBe his secure base: available when sought, silent when not, praying for him always.\u201d'}, by:{ar:'نظريّة التعلّق في الرشد',en:'Adult attachment theory'}},
      ],
      hadith:{t:{ar:'«إذا مات الإنسانُ انقطع عملُه إلّا من ثلاث... أو ولدٍ صالحٍ يدعو له»',en:'\u201cWhen a person dies his deeds end, except three... or a righteous child who prays for him.\u201d'}, r:{ar:'مسلم',en:'Muslim'}},
      needs:[
        {ar:'الاحترامُ الكاملُ لاستقلالِه وقراراتِه',en:'Full respect for his independence & decisions'},
        {ar:'المشورةُ عند الطلبِ لا التدخّلُ المفروض',en:'Counsel when asked, not imposed interference'},
        {ar:'الإعانةُ على الزواجِ وبناءِ بيتِه',en:'Help toward marriage & building his home'},
        {ar:'بقاءُ الرابطةِ: الزيارةُ، الدعاءُ، الحبُّ المعلَن',en:'A lasting bond: visits, du\u2019a & expressed love'},
        {ar:'الثقةُ بثمرةِ تربيتِك وتسليمُ الأمرِ لله',en:'Trust in the fruit of your tarbiyah & reliance on Allah'},
      ],
      risks:[
        {ar:'التدخّلُ في بيتِه وزواجِه وقراراتِه',en:'Intruding in his home, marriage & choices'},
        {ar:'محاسبتُه كطفلٍ أو ربطُه عاطفيًّا بالذنب',en:'Treating him as a child or binding him with guilt'},
        {ar:'القطيعةُ عند اختلافِ الرأيِ أو الطريق',en:'Estrangement over a difference of view or path'},
        {ar:'إهمالُ الدعاءِ له والظنُّ أنّ الدورَ انتهى',en:'Neglecting du\u2019a for him, thinking the role is over'},
      ],
      values:[
        {ar:'البرُّ المتبادلُ وصِلةُ الرحم',en:'Mutual devotion & keeping kinship ties'},
        {ar:'الاستقلالُ وتحمّلُ مسؤوليّةِ أسرتِه',en:'Independence & owning his family\u2019s responsibility'},
        {ar:'استمرارُ طلبِ العلمِ والعملِ الصالح',en:'Continuing knowledge & righteous action'},
        {ar:'حملُ الرسالةِ إلى الجيلِ التالي',en:'Carrying the mission to the next generation'},
      ],
      practice:{
        track:{ar:'دورةُ الحياة تكتمل — يصير هو المربّي',en:'The cycle completes — he becomes the educator'},
        items:[
          {ar:'سلِّمه هذا الدليلَ وكتبَ «ركن الأهل» ليربّيَ أبناءَه؛ فأنت تُخرّجُ مربّيًا لا تُنهي مهمّة.',en:'Hand him this guide and the Parents\u2019 Corner books to raise his own children; you are graduating an educator, not ending a task.'},
          {ar:'ابقَ مرجعَه: شاركه ما ينفعه عند الطلب، وادعُ له في سجودك، واجعل بيتَك قاعدةً آمنةً يعودُ إليها.',en:'Remain his reference: share what benefits him when asked, pray for him in your sujood, and keep your home a secure base he returns to.'},
        ]},
      checklist:[
        {ar:'أحترمُ استقلالَه وقراراتِه ولا أتدخّلُ في بيتِه',en:'I respect his independence & decisions, and don\u2019t intrude in his home'},
        {ar:'أُشيرُ عليه حين يطلب، وأصمتُ حين لا يطلب',en:'I advise when asked, and stay silent when not'},
        {ar:'أعنتُه على الزواجِ وبناءِ حياتِه ما استطعت',en:'I helped him toward marriage & building his life as I could'},
        {ar:'أبقى على صِلتِه بالزيارةِ والحبِّ المعلَن',en:'I keep our bond through visits & expressed love'},
        {ar:'أدعو له في سجودي ولا أظنُّ أنّ دوري انتهى',en:'I pray for him in sujood & never think my role is over'},
        {ar:'سلّمتُه أدواتِ التربيةِ ليُربّيَ جيلَه القادم',en:'I handed him the tools of tarbiyah to raise the next generation'},
      ] },
  ],

  sources: [
    {ar:'القرآنُ الكريمُ وهَديُ النبيِّ ﷺ في تربية الأولاد (أحاديثُ الصلاةِ والرحمةِ والتدرّج) — صحيحُ البخاريِّ ومسلمٍ وسننُ أبي داود.',en:'The Qur\u2019an & the Prophet\u2019s ﷺ guidance on raising children (hadith on prayer, mercy & gradual nurture) — Bukhari, Muslim & Abu Dawud.'},
    {ar:'الأثرُ المرويُّ في المراحل: «الولدُ سيّدٌ سبعًا، وعبدٌ سبعًا، ووزيرٌ سبعًا» — قاعدةُ اللعبِ ثمّ التأديبِ ثمّ المصاحبة.',en:'The reported maxim of the stages: \u201ca master seven, a servant seven, a minister seven\u201d — play, then discipline, then companionship.'},
    {ar:'منهجُ المراحلِ الثلاثيّة (احتياجاتُ المرحلة · مخاطرها · القيمُ المغروسة) مستفادٌ من سلسلةِ د. محمد خير الشَّعَّال في تربية الأبناء.',en:'The per-stage framework (needs · risks · values) draws on Dr. Muhammad Khair Al-Sha\u2019al\u2019s series on raising children.'},
    {ar:'الشيخ عبد الله ناصح علوان — «تربية الأولاد في الإسلام»: المسؤوليّاتُ التربويّةُ ومراحلُها، وأصلُ كثيرٍ من توجيهاتِ هذا الدليل.',en:'Shaykh Abdullah Nasih Ulwan — \u201cChild Education in Islam\u201d: the educational responsibilities & their stages, a root of much of this guide.'},
    {ar:'الإمامُ الغزالي («إحياء علوم الدين») وابنُ القيّم («تحفة المودود بأحكام المولود») — أصولُ تربيةِ النفسِ والطفل.',en:'Al-Ghazali (\u201cIhya\u2019 \u2018Ulum al-Din\u201d) & Ibn al-Qayyim (\u201cTuhfat al-Mawdud\u201d) — classical roots of nurturing the child & the self.'},
    {ar:'علمُ نفسِ النموّ: مراحلُ إريك إريكسون النفسيّةُ الاجتماعيّة، ونموُّ جان بياجيه المعرفيّ، ونظريّةُ التعلّقِ (بولبي)، وأنماطُ التربيةِ (باومريند).',en:'Developmental psychology: Erikson\u2019s psychosocial stages, Piaget\u2019s cognitive development, attachment theory (Bowlby) & parenting styles (Baumrind).'},
    {ar:'كتبُ «ركن الأهل» في هذه المنصّة — «خارطةُ طريق المربّي» و«خطةُ حفظ القرآن» — التطبيقُ العمليُّ لهذا الدليلِ عبر أركانِ الموقع.',en:'The Parents\u2019-Corner books on this platform — \u201cThe Parent Roadmap\u201d & \u201cThe Qur\u2019an Memorization Plan\u201d — the practical application of this guide across the site\u2019s corners.'},
  ],
};
