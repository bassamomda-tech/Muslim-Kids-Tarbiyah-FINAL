/* ═══════════════════════════════════════════════════════════════
   PARENTS' CORNER — bilingual content & tracking registry
   ركن الأهل: القسم التربوي · المتابعة والتقييم · المصادر التربوية
   ─────────────────────────────────────────────────────────────── */
window.PARENTS_DATA = {

  /* ════════════ JOURNEY REGISTRY (for tracking dashboard) ════════════
     Each journey writes localStorage["<prefix>Done"] = [stationId,...].
     We read those arrays to compute real progress across the city. */
  journeys: [
    { prefix:'malaika',  total:10, icon:'👼', color:'#5B6BD6', corner:{ar:'منارة العقيدة',en:'Faith Minaret'}, name:{ar:'رحلة جنود النور (الملائكة)', en:'Soldiers of Light (Angels)'} },
    { prefix:'kutub',    total:10, icon:'📜', color:'#2B8C7E', corner:{ar:'منارة العقيدة',en:'Faith Minaret'}, name:{ar:'رحلة البلاغ (الكتب والرسل)', en:'The Message (Books & Messengers)'} },
    { prefix:'akhira',   total:11, icon:'🌅', color:'#C56B3E', corner:{ar:'منارة العقيدة',en:'Faith Minaret'}, name:{ar:'رحلة العبور (اليوم الآخر)', en:'The Crossing (Last Day)'} },
    { prefix:'qadar',    total:10, icon:'📜', color:'#3E7CB1', corner:{ar:'منارة العقيدة',en:'Faith Minaret'}, name:{ar:'رحلة سر التقدير (القضاء والقدر)', en:'The Decree (Qadar)'} },
    { prefix:'thabat',   total:12, icon:'🦁', color:'#C0392B', corner:{ar:'منارة العقيدة',en:'Faith Minaret'}, name:{ar:'رحلة الأبطال (قصص الثبات)', en:'The Heroes (Steadfastness)'} },
    { prefix:'qsahib',   total:12, icon:'📖', color:'#1A9B7B', corner:{ar:'بستان القرآن والسنة',en:'Quran & Sunnah Garden'}, name:{ar:'رحلة أنا صاحبك القرآن', en:'I Am Your Companion, the Quran'} },
    { prefix:'mubdi',    total:15, icon:'💡', color:'#1FAE8C', corner:{ar:'أكاديمية المبدعين',en:"Innovators' Academy"}, name:{ar:'رحلة كن أنت المبدع', en:'Be the Creator'} },
    { prefix:'manara',   total:10, icon:'🏛️', color:'#C9962E', corner:{ar:'أكاديمية المبدعين',en:"Innovators' Academy"}, name:{ar:'رحلة منارة العالم', en:'Beacon of the World'} },
    { prefix:'aqsa',     total:10, icon:'🕌', color:'#1F8B6E', corner:{ar:'ركن القدس والأمة',en:'Al-Quds & Ummah'}, name:{ar:'رحلة الأقصى', en:'Journey of Al-Aqsa'} },
    { prefix:'wahda',    total:10, icon:'🤝', color:'#1577A6', corner:{ar:'ركن القدس والأمة',en:'Al-Quds & Ummah'}, name:{ar:'رحلة الأمة الواحدة', en:'The One Ummah'} },
    { prefix:'taghyir',  total:10, icon:'🌅', color:'#C0902E', corner:{ar:'ركن القدس والأمة',en:'Al-Quds & Ummah'}, name:{ar:'رحلة التغيير', en:'Journey of Change'} },
  ],

  /* Level ladder for the point system (10 points per completed station) */
  levels: [
    { min:0,    icon:'🌱', ar:'بذرة',        en:'Seed' },
    { min:100,  icon:'🌿', ar:'برعم',        en:'Sprout' },
    { min:250,  icon:'🌳', ar:'شجرة يافعة',  en:'Young Tree' },
    { min:500,  icon:'⭐', ar:'نجم صاعد',    en:'Rising Star' },
    { min:800,  icon:'🏅', ar:'بطل',         en:'Champion' },
    { min:1200, icon:'👑', ar:'قائد مبدع',   en:'Creative Leader' },
  ],

  /* ════════════ SECTION 1 — EDUCATIONAL ARTICLES (القسم التربوي) ════════════ */
  articles: [
    { icon:'🌱', color:'#27AE60', tag:{ar:'التربية الإيمانية',en:'Faith-Based Upbringing'},
      title:{ar:'كيف نغرس حب الله في قلب الطفل؟', en:'How to Plant the Love of Allah in a Child\'s Heart'},
      read:{ar:'٤ دقائق',en:'4 min'},
      body:{
        ar:['التربية الإيمانية لا تبدأ بالأوامر والنواهي، بل بـ<b>المحبة</b>. الطفل الذي يعرف الله محبوباً قريباً رحيماً، يطيعه حباً لا خوفاً فقط.',
            '<b>اربط الله بالنِّعَم:</b> عند كل نعمة يفرح بها طفلك — طعام لذيذ، لعبة جديدة، يوم جميل — ذكّره بلطف: «من الذي أعطاك هذا؟ الله يحبك». فيرتبط الله في وجدانه بالحب والعطاء.',
            '<b>كن قدوة قبل أن تكون واعظاً:</b> الطفل يقلّد ولا يسمع فقط. حين يراك تصلي بخشوع، وتذكر الله، وتتعامل بأخلاق القرآن — يتعلم الإيمان عملياً.',
            '<b>اجعل العبادة محبَّبة لا ثقيلة:</b> ابدأ بالقليل الدائم، وامدح كل خطوة، ولا تُكثر التأنيب. الصلاة التي تُحبَّب خير من صلاة تُفرَض بعنف فيكرهها.',
            '<b>القصة سلاحك الأقوى:</b> قصص الأنبياء والصحابة تغرس القيم دون وعظ مباشر. الطفل يتشرّب البطولة والصدق والثبات من خلال أبطال يحبهم.'],
        en:['Faith-based upbringing doesn\'t start with commands and prohibitions, but with <b>love</b>. A child who knows Allah as beloved, near, and merciful obeys Him out of love, not just fear.',
            '<b>Link Allah to blessings:</b> at every blessing your child enjoys — tasty food, a new toy, a beautiful day — gently remind him: "Who gave you this? Allah loves you." So Allah becomes associated in his heart with love and giving.',
            '<b>Be an example before being a preacher:</b> a child imitates, not just listens. When he sees you pray with devotion, remember Allah, and behave with Quranic character — he learns faith practically.',
            '<b>Make worship beloved, not heavy:</b> begin with little but consistent, praise every step, and don\'t overdo blame. Prayer made beloved is better than prayer forced harshly until he hates it.',
            '<b>Stories are your strongest tool:</b> stories of prophets and companions plant values without direct preaching. A child absorbs heroism, honesty, and steadfastness through heroes he loves.']
      }},

    { icon:'⏰', color:'#E67E22', tag:{ar:'الوقت والعادات',en:'Time & Habits'},
      title:{ar:'حماية الطفل من إدمان الشاشات والتفاهة', en:'Protecting Your Child From Screen Addiction & Triviality'},
      read:{ar:'٥ دقائق',en:'5 min'},
      body:{
        ar:['الشاشات ليست شراً مطلقاً، لكن <b>الإفراط</b> فيها وما تحمله من محتوى تافه يسرق وقت الطفل وتركيزه وطموحه. والحل ليس المنع التام، بل <b>التوجيه والتوازن</b>.',
            '<b>اتفق على حدود واضحة:</b> وقت محدد يومياً للترفيه، يعرفه الطفل مسبقاً، فلا يتحول إلى صراع يومي. القاعدة الذهبية: لكل ساعة استهلاك، ساعة إنتاج أو لعب حركي.',
            '<b>املأ الفراغ بالبديل الجذاب:</b> الطفل يلجأ للشاشة حين يملّ. وفّر له بدائل ممتعة: كتباً مصورة، ألعاباً يدوية، رياضة، مشاريع صنع، وقتاً معك. الفراغ هو باب الإدمان.',
            '<b>راقب المحتوى لا الوقت فقط:</b> ساعة من محتوى نافع (علم، مهارة، قصة هادفة) خير من دقائق من تفاهة. علّم طفلك أن يسأل: «هل سيعطيني هذا علماً أو مهارة أو خُلُقاً؟»',
            '<b>كن قدوة في استخدامك أنت:</b> الطفل الذي يرى والديه مدمنَين على الهاتف لن يقتنع بالحدود. اجعل لبيتك أوقاتاً خالية من الشاشات (الطعام، قبل النوم، الزيارات).'],
        en:['Screens aren\'t absolute evil, but <b>excess</b> of them and the trivial content they carry steals a child\'s time, focus, and ambition. The solution isn\'t total ban, but <b>guidance and balance</b>.',
            '<b>Agree on clear limits:</b> a set daily time for entertainment that the child knows in advance, so it doesn\'t become a daily battle. The golden rule: for every hour of consuming, an hour of producing or active play.',
            '<b>Fill the void with an attractive alternative:</b> a child turns to the screen when bored. Provide enjoyable alternatives: illustrated books, hands-on games, sports, making projects, time with you. Emptiness is the door to addiction.',
            '<b>Watch content, not just time:</b> an hour of beneficial content (knowledge, skill, purposeful story) is better than minutes of triviality. Teach your child to ask: "Will this give me knowledge, a skill, or character?"',
            '<b>Be an example in your own use:</b> a child who sees his parents addicted to the phone won\'t accept limits. Make your home have screen-free times (meals, before sleep, visits).']
      }},

    { icon:'💬', color:'#2980B9', tag:{ar:'التواصل',en:'Communication'},
      title:{ar:'فنّ الحوار مع طفلك بدل الأوامر', en:'The Art of Dialogue With Your Child Instead of Orders'},
      read:{ar:'٤ دقائق',en:'4 min'},
      body:{
        ar:['الطفل الذي يُؤمَر دائماً يتعلم الطاعة أو التمرّد، أما الطفل الذي يُحاوَر فيتعلم <b>التفكير</b>. الحوار يبني عقلاً مستقلاً وشخصية واثقة.',
            '<b>اسأل بدل أن تأمر:</b> بدل «نظّف غرفتك الآن!» جرّب «كيف يمكننا أن نجعل غرفتك مريحة؟». السؤال يُشرك الطفل ويجعله جزءاً من الحل لا متلقياً للأمر.',
            '<b>أنصِت أكثر مما تتكلم:</b> امنح طفلك وقتاً يعبّر فيه دون مقاطعة أو حكم سريع. الطفل الذي يشعر أنه مسموع، يفتح قلبه لك ويثق بك في الكبائر قبل الصغائر.',
            '<b>اشرح «لماذا»:</b> الطفل يطيع بقناعة أكبر حين يفهم سبب الأمر. «نصلي لأن الله يحبنا ونحبه» أبلغ من «صلِّ لأني قلت لك».',
            '<b>تجنب التوبيخ أمام الآخرين:</b> الكرامة تهمّ الطفل. صحّح أخطاءه على انفراد، وامدح إنجازاته أمام الناس — فينمو واثقاً لا منكسراً.'],
        en:['A child who is always ordered learns obedience or rebellion, but a child who is engaged in dialogue learns to <b>think</b>. Dialogue builds an independent mind and a confident personality.',
            '<b>Ask instead of ordering:</b> instead of "Clean your room now!" try "How can we make your room comfortable?" A question involves the child and makes him part of the solution, not a recipient of orders.',
            '<b>Listen more than you speak:</b> give your child time to express himself without interruption or quick judgment. A child who feels heard opens his heart to you and trusts you in big matters before small ones.',
            '<b>Explain "why":</b> a child obeys with greater conviction when he understands the reason. "We pray because Allah loves us and we love Him" is more eloquent than "Pray because I told you to."',
            '<b>Avoid scolding in front of others:</b> dignity matters to a child. Correct his mistakes privately and praise his achievements publicly — so he grows confident, not broken.']
      }},

    { icon:'🛡️', color:'#8E44AD', tag:{ar:'بناء الشخصية',en:'Character Building'},
      title:{ar:'كيف تبني طفلاً قويّاً واثقاً لا يتبع القطيع؟', en:'How to Build a Strong, Confident Child Who Doesn\'t Follow the Crowd'},
      read:{ar:'٥ دقائق',en:'5 min'},
      body:{
        ar:['أعظم هدية تمنحها لطفلك هي <b>شخصية قوية مستقلة</b> لا تنهار أمام ضغط الأقران ولا تتبع القطيع. هذا يُبنى بالتدريج من الصغر.',
            '<b>درّبه على اتخاذ القرار:</b> امنحه خيارات صغيرة يومياً (ماذا يلبس، أي كتاب يقرأ)، فيتعود تحمّل المسؤولية والثقة برأيه.',
            '<b>علّمه أن «الجميع يفعلها» ليست حجة:</b> ناقشه في مواقف يفعلها أصدقاؤه، واسأله: «هل هذا صواب حقاً؟». فيتعلم أن يزن الأمور بالحق لا بكثرة من يفعلها.',
            '<b>اسمح بالخطأ:</b> الطفل الذي يُعاقَب على كل خطأ يصبح خائفاً متردداً. اجعل الخطأ فرصة للتعلم: «ماذا تعلمنا؟ كيف نصلحها؟». فينمو شجاعاً يجرّب ولا يخاف.',
            '<b>اربط ثقته بالله لا بمدح الناس:</b> الطفل الذي يستمد قيمته من رضا الله يكون أثبت من الذي يلهث وراء إعجاب الآخرين. علّمه أن الأهم هو أن يرضى الله عنه.',
            '<b>احكِ له قصص الثبات:</b> الغلام وأصحاب الأخدود، وبلال تحت التعذيب — أبطال ثبتوا وحدهم على الحق. القدوة تصنع الشجاعة.'],
        en:['The greatest gift you give your child is a <b>strong, independent personality</b> that doesn\'t collapse under peer pressure or follow the crowd. This is built gradually from a young age.',
            '<b>Train him in decision-making:</b> give him small daily choices (what to wear, which book to read), so he gets used to responsibility and trusting his judgment.',
            '<b>Teach him that "everyone does it" is no excuse:</b> discuss situations his friends do, and ask: "Is this really right?" So he learns to weigh matters by truth, not by how many do them.',
            '<b>Allow mistakes:</b> a child punished for every mistake becomes fearful and hesitant. Make mistakes a learning opportunity: "What did we learn? How do we fix it?" So he grows brave, trying without fear.',
            '<b>Tie his confidence to Allah, not people\'s praise:</b> a child who draws his worth from Allah\'s pleasure is firmer than one chasing others\' admiration. Teach him that what matters most is Allah\'s pleasure with him.',
            '<b>Tell him stories of steadfastness:</b> the boy and the people of the ditch, Bilal under torture — heroes who stood alone for the truth. Role models create courage.']
      }},

    { icon:'🤲', color:'#16A085', tag:{ar:'العبادة',en:'Worship'},
      title:{ar:'تحبيب الصلاة للطفل دون إجبار', en:'Making Prayer Beloved to a Child Without Force'},
      read:{ar:'٤ دقائق',en:'4 min'},
      body:{
        ar:['أمرنا النبي ﷺ أن نأمر أبناءنا بالصلاة لسبع، ونؤدبهم عليها لعشر — وبين السابعة والعاشرة <b>ثلاث سنوات</b> للتحبيب والتعويد قبل أي شدة. التدرّج والرفق هما الأصل.',
            '<b>صلِّ أمامه واصطحبه معك:</b> الطفل يحب أن يقلّد الكبار. اجعله يقف بجانبك في الصلاة، فيشعر أنه «كبير» ومميز حين يصلي مثلك.',
            '<b>اربط الصلاة بمشاعر جميلة:</b> ابتسم له بعد الصلاة، امدحه، اجعلها وقتاً للقرب والحنان لا للتوتر والصراخ. الطفل يربط العبادة بالشعور المصاحب لها.',
            '<b>كافئ ولا ترشُ:</b> الثناء والاحتفاء بإنجازه أبلغ من المكافآت المادية الدائمة. اجعل أعظم مكافأة هي فرحتك ورضا الله.',
            '<b>اصبر على التعثّر:</b> سيتكاسل أحياناً، وهذا طبيعي. لا تجعل كل تقصير معركة. ذكّره بلطف، وادعُ له، وكن قدوة — فالثمرة تنضج بالصبر لا بالعنف.'],
        en:['The Prophet ﷺ ordered us to command our children to pray at seven and discipline them for it at ten — and between seven and ten are <b>three years</b> for endearing and habituating before any sternness. Gradualness and gentleness are the foundation.',
            '<b>Pray in front of him and take him with you:</b> a child loves to imitate grown-ups. Have him stand beside you in prayer, so he feels "grown up" and special when he prays like you.',
            '<b>Link prayer to beautiful feelings:</b> smile at him after prayer, praise him, make it a time of closeness and tenderness, not tension and shouting. A child associates worship with the feeling that accompanies it.',
            '<b>Reward, don\'t bribe:</b> praise and celebration of his achievement are more eloquent than constant material rewards. Make the greatest reward your joy and Allah\'s pleasure.',
            '<b>Be patient with stumbling:</b> he\'ll sometimes be lazy, and that\'s natural. Don\'t make every shortcoming a battle. Remind him gently, pray for him, and be an example — the fruit ripens with patience, not violence.']
      }},

    { icon:'🎯', color:'#C0392B', tag:{ar:'الهدف والطموح',en:'Purpose & Ambition'},
      title:{ar:'كيف تزرع في طفلك هدفاً كبيراً في الحياة؟', en:'How to Plant a Big Life Purpose in Your Child'},
      read:{ar:'٤ دقائق',en:'4 min'},
      body:{
        ar:['الطفل الذي ينشأ على هدف كبير يصل إلى ما لا يصل إليه غيره. والطفل بلا هدف يضيّع طاقته في اللهو. ودورك أن تساعده على اكتشاف رسالته في الحياة.',
            '<b>حدّثه عن دوره في الأمة:</b> اجعله يشعر أنه خُلق لهدف عظيم — عبادة الله وعمارة الأرض — وأنه يستطيع أن يكون عالماً أو طبيباً أو مخترعاً ينفع أمته.',
            '<b>اربط طموحه الدنيوي بالآخرة:</b> «تعلَّم وأتقِن لتنفع الناس وترضي الله» — فيصبح تفوّقه عبادة لا مجرد نجاح دنيوي.',
            '<b>عرّفه بالقدوات:</b> احكِ له عن العلماء والمخترعين المسلمين الذين بدؤوا أطفالاً. القدوة تشعل الطموح وتقول له: «أنت أيضاً تستطيع».',
            '<b>قسّم الحلم الكبير إلى خطوات:</b> الطموح بلا خطة أمنية. ساعده أن يحوّل حلمه إلى أهداف صغيرة يومية: صفحة يقرؤها، مهارة يتعلمها، عادة يبنيها.'],
        en:['A child raised on a big purpose reaches what others don\'t. A child without a purpose wastes his energy on amusement. Your role is to help him discover his mission in life.',
            '<b>Talk to him about his role in the ummah:</b> make him feel he was created for a great purpose — worshipping Allah and building the earth — and that he can be a scholar, doctor, or inventor who benefits his nation.',
            '<b>Link his worldly ambition to the Hereafter:</b> "Learn and master to benefit people and please Allah" — so his excellence becomes worship, not just worldly success.',
            '<b>Introduce him to role models:</b> tell him about Muslim scholars and inventors who began as children. Role models ignite ambition and tell him: "You can too."',
            '<b>Break the big dream into steps:</b> ambition without a plan is a wish. Help him turn his dream into small daily goals: a page he reads, a skill he learns, a habit he builds.']
      }},

    { icon:'🤝', color:'#D35400', tag:{ar:'العلاقات الأسرية',en:'Family Relations'},
      title:{ar:'الغيرة بين الإخوة: من التنافس إلى المحبة', en:'Sibling Jealousy: From Rivalry to Love'},
      read:{ar:'٥ دقائق',en:'5 min'},
      body:{
        ar:['الغيرةُ بين الإخوة شعورٌ طبيعيٌّ قديمٌ قِدَمَ الإنسان — وقد حكى القرآن غيرةَ إخوة يوسف. فلا تَفزَع منها، بل <b>وجِّهها</b>، فهي إن أُهمِلَت كبِرت، وإن عولِجَت بحكمةٍ صارت محبّةً وتعاوناً.',
            '<b>اعدِل ولا تُفاضِل:</b> قال ﷺ «اعدِلوا بين أولادكم». العدلُ في القُبلة والهدية والمدح والوقت يطفئ نارَ الغيرة. واحذَر المقارنة: «لماذا لا تكون مثل أخيك؟» — فهي أسرعُ طريقٍ لزرعِ الكراهية.',
            '<b>امنح كلَّ طفلٍ وقتاً خاصّاً:</b> دقائقُ يوميّةٌ يشعرُ فيها كلُّ ابنٍ أنه محبوبٌ <b>وحده</b> دون منافسة، تُغنيه عن لفتِ الانتباه بالشِّكاية أو الإيذاء.',
            '<b>لا تجعَلْه قاضياً ولا جلّاداً:</b> حين يتشاجران، لا تبحث عن «المُذنب» لتعاقبه أمام الآخر. احتوِ الاثنين، وعلِّمهما حلَّ الخلافِ بالكلامِ والاعتذار، فيتعلّمان المهارةَ لا الانتقام.',
            '<b>اصنَع منهما فريقاً:</b> كلِّفهما مهمّةً مشتركةً ينجحان فيها معاً (ترتيب، هديّة لأمّهما، لعبة جماعية)، وامدَح تعاونهما. الأخوّةُ تُبنى بالمشاريعِ المشتركةِ والذكرياتِ الجميلة، وادعُ أن يجعلَ اللهُ بينهم مودّةً ورحمة.']
      ,
        en:['Jealousy between siblings is a natural feeling as old as humanity — the Qur\'an itself recounts the jealousy of Yusuf\'s brothers. Don\'t panic over it; <b>channel</b> it. Neglected, it grows; treated wisely, it becomes love and cooperation.',
            '<b>Be just, don\'t favor:</b> the Prophet ﷺ said "Be fair between your children." Fairness in kisses, gifts, praise, and time extinguishes jealousy. Beware comparison: "Why aren\'t you like your brother?" — the fastest way to plant resentment.',
            '<b>Give each child special time:</b> a few daily minutes where each one feels loved <b>on his own</b>, without competition, spare him from seeking attention through complaints or harm.',
            '<b>Don\'t make him judge or executioner:</b> when they fight, don\'t hunt for the "guilty one" to punish in front of the other. Contain both, and teach them to resolve conflict with words and apology — so they learn the skill, not revenge.',
            '<b>Turn them into a team:</b> give them a shared task they succeed at together (tidying, a gift for their mother, a group game), and praise their cooperation. Brotherhood is built through shared projects and beautiful memories — and pray that Allah places love and mercy between them.']
      }},

    { icon:'🧹', color:'#1F8B6E', tag:{ar:'المسؤولية',en:'Responsibility'},
      title:{ar:'الكسل وبناء المسؤولية في الطفل', en:'Laziness & Building Responsibility'},
      read:{ar:'٤ دقائق',en:'4 min'},
      body:{
        ar:['الطفلُ ليس «كسولاً» بطبعِه؛ غالباً لم يتعلّمِ المسؤوليّةَ بعد، أو نقومُ نحن بكلِّ شيءٍ عنه فيعتاد الاتّكال. المسؤوليّةُ <b>مهارةٌ تُبنى بالتدريج</b> لا صفةٌ تُولَدُ مع الطفل.',
            '<b>كلِّفه بما يناسب عمره:</b> ابدأ بمهامَّ صغيرةٍ يقدِر عليها (يرتّبُ ألعابه، يضعُ صحنه في المغسلة)، وزِد تدريجيّاً. الطفلُ الذي يُكلَّفُ يشعرُ أنه مهمٌّ وقادر.',
            '<b>لا تُنقِذه من كلِّ صعوبة:</b> دَعْه يجرّبُ ويُخطئ ويُعيد. حين تفعلُ كلَّ شيءٍ عنه خوفاً أو استعجالاً، تسرقُ منه فرصةَ النموّ. الصبرُ على بطئِه استثمارٌ في استقلالِه.',
            '<b>اربِط المهمّةَ بالمعنى لا بالتهديد:</b> «ترتيبُك لغرفتك أمانةٌ والله يحبُّ المتقن» أبلغُ من «رتّب وإلا عاقبتك». واجعَلِ العملَ ممتعاً أحياناً بالمسابقةِ والموسيقى الهادفة.',
            '<b>امدَح الجهدَ لا الكمال:</b> «شكراً، لقد ساعدتَني» تشجِّعُ أكثرَ من نقدِ النتيجة. الطفلُ الذي يُشكَرُ على محاولتِه يُكرِّرها، والذي يُنتقَدُ يتركها. ابنِ عادةً صغيرةً ثابتةً، فالمسؤوليّةُ تنمو بالتكرار.']
      ,
        en:['A child isn\'t "lazy" by nature; often he simply hasn\'t learned responsibility yet, or we do everything for him so he grows dependent. Responsibility is a <b>skill built gradually</b>, not a trait born with the child.',
            '<b>Assign what suits his age:</b> start with small tasks he can manage (tidying toys, putting his plate in the sink), and increase gradually. A child who is entrusted feels important and capable.',
            '<b>Don\'t rescue him from every difficulty:</b> let him try, err, and redo. When you do everything for him out of fear or haste, you steal his chance to grow. Patience with his slowness is an investment in his independence.',
            '<b>Tie the task to meaning, not threat:</b> "Tidying your room is a trust, and Allah loves excellence" is more eloquent than "Tidy or I\'ll punish you." Make work fun sometimes with friendly competition and purposeful music.',
            '<b>Praise effort, not perfection:</b> "Thank you, you helped me" encourages more than criticizing the result. A child thanked for his attempt repeats it; one criticized abandons it. Build one small steady habit — responsibility grows through repetition.']
      }},

    { icon:'🙇', color:'#7D3C98', tag:{ar:'الأخلاق',en:'Manners'},
      title:{ar:'قلّة الأدب واحترام الكبار: كيف نُعيد البناء؟', en:'Disrespect Toward Elders: Rebuilding Adab'},
      read:{ar:'٥ دقائق',en:'5 min'},
      body:{
        ar:['الأدبُ تاجُ المسلمِ الصغير، وقلّتُه ليست شرّاً في الطفل بل <b>نقصٌ في التعليمِ والقدوة</b>. والطفلُ يتعلّمُ الاحترامَ حين يُحترَم، ويُقلِّدُ ما يراه أكثرَ ممّا يسمعُه.',
            '<b>كُن أنت القدوةَ الأولى:</b> الطفلُ الذي يسمعُ والديه يحترمانِ جدَّه ويخفِضانِ الصوتَ للكبير يتشرّبُ الأدبَ تلقائيّاً. وقال ﷺ «ليس منّا مَن لم يرحَم صغيرَنا ويوقِّر كبيرَنا».',
            '<b>علِّم الأدبَ بالموقفِ لا بالمحاضرة:</b> درِّبه على السلام، والاستئذان، وعدمِ المقاطعة، وتقبيلِ رأسِ الكبير. مرِّن المهارةَ في مواقفَ حقيقيّةٍ صغيرةٍ متكرّرة.',
            '<b>صحِّح بهدوءٍ وعلى انفراد:</b> التوبيخُ أمامَ الناسِ يكسِرُ الطفلَ ويزيدُ تمرُّدَه. اسحَبه جانباً وذكِّره بلطف: «هذه الكلمةُ تُحزِنُ جدَّك، ماذا نقولُ بدلها؟».',
            '<b>اغرِس برَّ الوالدين مبكِّراً:</b> اربِط الأدبَ برضا الله: ﴿وَقُل لَّهُمَا قَوْلًا كَرِيمًا﴾. احكِ قصصَ بِرِّ السلفِ بآبائهم، وامدَح كلَّ كلمةٍ مهذّبةٍ يقولها — فالأدبُ يُثبَّتُ بالثناءِ والقدوةِ والدعاء.']
      ,
        en:['Good manners are the crown of the young Muslim, and their absence is not evil in the child but a <b>gap in teaching and example</b>. A child learns respect when he is respected, and imitates what he sees more than what he hears.',
            '<b>Be the first role model:</b> a child who hears his parents honor his grandfather and lower their voices for elders absorbs adab naturally. The Prophet ﷺ said, "He is not one of us who does not show mercy to our young and respect to our elders."',
            '<b>Teach manners through situations, not lectures:</b> train him in greeting, asking permission, not interrupting, and kissing an elder\'s head. Practice the skill in small, repeated, real-life moments.',
            '<b>Correct calmly and in private:</b> scolding in front of people breaks a child and increases defiance. Take him aside and gently remind: "That word saddens your grandfather — what do we say instead?"',
            '<b>Plant honoring parents early:</b> tie manners to Allah\'s pleasure: "Speak to them a noble word." Tell stories of the pious honoring their parents, and praise every polite word he says — adab is cemented by praise, example, and supplication.']
      }},

    { icon:'🙏', color:'#D4A017', tag:{ar:'القناعة والشكر',en:'Contentment & Gratitude'},
      title:{ar:'«أريدُ! اشترِ لي!»: تربية الشكر في زمن الاستهلاك', en:'"I Want It! Buy Me!" Raising Gratitude in a Consumer Age'},
      read:{ar:'٥ دقائق',en:'5 min'},
      body:{
        ar:['كثرةُ طلباتِ الطفلِ وعدمُ شُكرِه لمَا عنده ليست جشَعاً فطريّاً، بل نتيجةُ بيئةٍ تُغرِقُه بالإعلاناتِ والمقتنياتِ وتُلبّي كلَّ رغبةٍ فوراً. الشكرُ والقناعةُ <b>يُزرَعان</b> بالتربية.',
            '<b>لا تُلبِّ كلَّ رغبةٍ فوراً:</b> الطفلُ الذي يحصلُ على كلِّ شيءٍ بلا انتظارٍ لا يُقدِّرُ شيئاً. علِّمه «التأجيل»: «نضعُها في قائمةِ أمنياتِك ونرى». الانتظارُ يصنعُ التقدير.',
            '<b>اربِط النعمةَ بالمُنعِم:</b> عند كلِّ نعمةٍ ذكِّره: «مَن أعطاك هذا؟ الله. فماذا نقول؟ الحمد لله». الطفلُ الشاكرُ لله يصيرُ شاكراً للناسِ ولِما عنده.',
            '<b>أرِه مَن هو دونه:</b> «انظُر للأطفالِ الذين لا يجدون ماءً نظيفاً أو لعبة». قال ﷺ «انظُروا إلى مَن هو أسفلَ منكم». التعاطفُ يولِّدُ الشكرَ ويُذيبُ الطمع.',
            '<b>اجعَله يُعطي لا يأخذُ فقط:</b> درِّبه على الصدقةِ من مالِه، ومشاركةِ ألعابه، وإهداءِ غيرِه. اليدُ المُعطيةُ تشبَع، واليدُ الآخذةُ تجوع. اصنَع طقوسَ شكرٍ يوميّة: «ثلاثُ نِعَمٍ شكرتُ اللهَ عليها اليوم».']
      ,
        en:['A child\'s constant demands and lack of gratitude for what he has are not innate greed, but the result of an environment that floods him with ads and possessions and grants every wish instantly. Gratitude and contentment are <b>planted</b> through upbringing.',
            '<b>Don\'t grant every wish instantly:</b> a child who gets everything without waiting appreciates nothing. Teach "delay": "Let\'s put it on your wish-list and see." Waiting creates appreciation.',
            '<b>Link the blessing to the Giver:</b> at every blessing remind him: "Who gave you this? Allah. So what do we say? Alhamdulillah." A child grateful to Allah becomes grateful to people and for what he has.',
            '<b>Show him those with less:</b> "Look at children who have no clean water or a toy." The Prophet ﷺ said, "Look to those below you." Empathy breeds gratitude and dissolves greed.',
            '<b>Make him a giver, not only a taker:</b> train him to give charity from his money, share his toys, and gift others. The giving hand is satisfied; the taking hand stays hungry. Create daily gratitude rituals: "Three blessings I thanked Allah for today."']
      }},

    { icon:'🫂', color:'#2B8C7E', tag:{ar:'الصحبة',en:'Friendship'},
      title:{ar:'الصحبة الصالحة: كيف يختار طفلك أصدقاءه؟', en:'Good Company: Helping Your Child Choose Friends'},
      read:{ar:'٤ دقائق',en:'4 min'},
      body:{
        ar:['الصديقُ يصنعُ كثيراً من شخصيّةِ طفلِك؛ قال ﷺ «المرءُ على دينِ خليلِه». ودورُك ليس عزلَه عن الناس، بل <b>تزويدَه بمعاييرَ</b> يختارُ بها الصُّحبةَ ويثبتُ أمامَ ضغطِها.',
            '<b>علِّمه صفاتِ الصديقِ الصالح:</b> الصِّدق، والأمانة، وحُسنُ الخلق، ومَن يُعينُه على الخيرِ لا على الشر. ناقِشه: «هل صديقُك هذا يجعلُك أفضلَ أم أسوأ؟».',
            '<b>افتَح بيتَك لأصدقائه:</b> حين تعرفُ أصدقاءَ طفلِك وتراهم في بيتك، توجِّه بلُطفٍ من حيثُ لا يشعر. البيتُ المُرحِّبُ يحمي أكثرَ من المنعِ المتشدّد.',
            '<b>درِّبه على رفضِ الضغط:</b> «إذا دعاك أحدٌ لشيءٍ خاطئ، ماذا تقول؟». مرِّنه على قولِ «لا» بثقةٍ بالأدوارِ والتمثيل. الطفلُ الذي تدرّبَ يثبتُ وقتَ الجد.',
            '<b>كُن أنت صديقَه الأوّل:</b> الطفلُ الذي يجدُ في والدِه الأنسَ والاستماعَ لا يبحثُ عن قبولٍ مفقودٍ عند رفاقِ السوء. واغرِس حبَّ القدوات: الصحابةُ كانوا خيرَ صحبةٍ لبعضهم، وادعُ أن يرزقَه اللهُ الرفيقَ الصالح.']
      ,
        en:['A friend shapes much of your child\'s character; the Prophet ﷺ said, "A person follows the way of his close friend." Your role isn\'t to isolate him from people, but to <b>equip him with criteria</b> for choosing company and standing firm against its pressure.',
            '<b>Teach him the traits of a good friend:</b> honesty, trustworthiness, good character, and one who helps him toward good, not evil. Discuss: "Does this friend make you better or worse?"',
            '<b>Open your home to his friends:</b> when you know your child\'s friends and see them at home, you guide gently without him feeling it. A welcoming home protects more than strict prohibition.',
            '<b>Train him to resist pressure:</b> "If someone invites you to something wrong, what do you say?" Practice saying "no" confidently through role-play. A rehearsed child stands firm when it matters.',
            '<b>Be his first friend:</b> a child who finds comfort and listening in his parent doesn\'t seek lost acceptance among bad company. Plant love of role models — the Companions were the best company for one another — and pray Allah grants him righteous friends.']
      }},

    { icon:'🗣️', color:'#C0392B', tag:{ar:'اللسان والسلوك',en:'Speech & Behavior'},
      title:{ar:'الألفاظ السيئة والتنمّر: حماية لسانِ طفلك', en:'Bad Words & Bullying: Guarding Your Child\'s Tongue'},
      read:{ar:'٥ دقائق',en:'5 min'},
      body:{
        ar:['حين يَنطقُ طفلُك لفظاً سيّئاً أو يسخَرُ من غيرِه، لا تنفجِر فزعاً؛ غالباً يُردِّدُ ما سمِعَه دون فهمٍ، أو يختبرُ ردَّ فعلِك. الحلُّ تربيةُ اللسانِ بالحكمةِ لا بالصُّراخ الذي يُثبِّتُ اللفظ.',
            '<b>لا تُضخِّم ردَّ فعلِك:</b> المبالغةُ في الانزعاجِ تجعلُ اللفظَ «سلاحاً» مسلّياً يكرِّرُه. قُل بهدوءٍ وحزم: «هذه كلمةٌ لا نقولُها في بيتنا»، ثم علِّمه البديل الجميل.',
            '<b>راقِب المصدر:</b> الألفاظُ تأتي من شاشةٍ أو رفيقٍ أو حتى منّا في لحظةِ غضب. نقِّ البيئةَ المحيطة، وكُن قدوةً في نظافةِ لسانِك — فاللهُ يحبُّ الكلمةَ الطيّبة، والنبيُّ ﷺ لم يكن فاحشاً ولا بذيئاً.',
            '<b>علِّمه أثرَ الكلمة:</b> «الكلمةُ تَجرَحُ كالسكّين». درِّبه على التعاطف: «كيف تشعرُ لو قيلَ لك هذا؟». والتنمُّرُ ظلمٌ، والظلمُ ظلماتٌ يومَ القيامة.',
            '<b>إن كان طفلُك يُتنمَّرُ عليه:</b> أنصِت له دون لومٍ، طَمئِنه أنه ليس مُذنباً، علِّمه ردوداً واثقةً هادئة، وتواصَل مع المدرسة. وإن كان هو المُتنمِّر، فابحَث عن الجَرحِ خلفَ سلوكِه واحتوِه، وعلِّمه الاعتذارَ وجبرَ الخاطر.']
      ,
        en:['When your child utters a bad word or mocks another, don\'t explode in alarm; he often repeats what he heard without understanding, or tests your reaction. The solution is nurturing the tongue with wisdom, not shouting that cements the word.',
            '<b>Don\'t magnify your reaction:</b> over-the-top annoyance turns the word into an amusing "weapon" he repeats. Say calmly but firmly: "That\'s a word we don\'t say in our home," then teach the beautiful alternative.',
            '<b>Watch the source:</b> words come from a screen, a friend, or even from us in a moment of anger. Purify the surrounding environment and model a clean tongue — Allah loves a good word, and the Prophet ﷺ was never obscene or vulgar.',
            '<b>Teach him the impact of words:</b> "A word wounds like a knife." Train empathy: "How would you feel if this were said to you?" Bullying is injustice, and injustice is darkness on the Day of Judgment.',
            '<b>If your child is being bullied:</b> listen without blame, reassure him he isn\'t at fault, teach calm confident responses, and contact the school. If he is the bully, look for the wound behind his behavior and contain it, teaching him to apologize and mend hearts.']
      }},
  ],

  /* ════════════ SECTION 3 — RESOURCES (المصادر التربوية) ════════════ */
  resources: {
    books: [
      { title:{ar:'مكتبة جيل الخلافة',en:'Jeel al-Khilafa Library'}, desc:{ar:'مكتبة كتب تربوية وإسلامية للأطفال — حمّل الكتب مباشرةً',en:'A library of educational & Islamic books for kids — download directly'}, url:'https://jeelalkhelafa.com/library/', dl:true },
      { title:{ar:'مناهج التربية القرآنية',en:'Quranic Tarbiyah Textbooks'}, desc:{ar:'كتب ومناهج دراسية معتمدة — متجر التحميل الرسمي',en:'Approved textbooks & curricula — official download store'}, url:'https://quranictarbiyah.com/product-category/resources/textbooks/', dl:true },
    ],
    videos: [
    ],
    articles: [
      { title:{ar:'دليل الآباء لتعليم القرآن',en:'Parents\' Guide to Teaching Quran'}, desc:{ar:'خطوات عملية لتحبيب القرآن وتيسير حفظه على الطفل',en:'Practical steps to endear the Quran and ease its memorization for the child'} },
      { title:{ar:'التعامل مع نوبات الغضب',en:'Handling Tantrums'}, desc:{ar:'استراتيجيات هادئة لاحتواء غضب الطفل وتعليمه ضبط النفس',en:'Calm strategies to contain a child\'s anger and teach self-control'} },
      { title:{ar:'بناء عادة القراءة من الصغر',en:'Building a Reading Habit Early'}, desc:{ar:'كيف تجعل القراءة متعة يومية لا واجباً ثقيلاً',en:'How to make reading a daily pleasure, not a heavy duty'} },
      { title:{ar:'الثواب والعقاب التربوي الصحيح',en:'Healthy Reward & Consequence'}, desc:{ar:'متى وكيف نكافئ ونصحّح دون كسر شخصية الطفل',en:'When and how to reward and correct without breaking the child\'s personality'} },
    ],
    audio: [
      { title:{ar:'المصحف المعلّم للأطفال',en:'Teaching Mushaf for Kids'}, desc:{ar:'تلاوة مرتّلة مع ترديد الطفل لتسهيل الحفظ',en:'Measured recitation with the child repeating to ease memorization'} },
      { title:{ar:'أناشيد القيم الهادفة',en:'Purposeful Value Nasheeds'}, desc:{ar:'أناشيد نظيفة تغرس الأخلاق والحب لله ورسوله',en:'Clean nasheeds planting morals and love for Allah and His Messenger'} },
      { title:{ar:'قصص ما قبل النوم الإيمانية',en:'Faith-Based Bedtime Stories'}, desc:{ar:'قصص صوتية هادئة تنهي يوم الطفل بقيمة وعبرة',en:'Calm audio stories ending the child\'s day with a value and lesson'} },
      { title:{ar:'سلسلة «اسأل وتعلّم»',en:'"Ask & Learn" Series'}, desc:{ar:'حلقات صوتية تجيب أسئلة الأطفال عن الدين والحياة',en:'Audio episodes answering children\'s questions about religion and life'} },
    ],
  },

  /* ════════════ RECOMMENDED CHANNELS & SERIES (قنوات وسلاسل موصى بها) ════════════ */
  channels: [
    { ar:'حلقات الحبيب وقصص الأنبياء — نبيل العوضي', en:'Al-Habib & Stories of the Prophets — Nabil al-Awadi', g:'kids' },
    { ar:'سلسلة رحلة اليقين — د. إياد قنيبي', en:'Journey of Certainty — Dr. Iyad Qunaibi', g:'kids' },
    { ar:'العلماء المسلمون — الجزيرة وقناة العلم نور', en:'Muslim Scientists — Al Jazeera & Ilm Noor', g:'kids' },
    { ar:'قائد لم يُهزم (خالد بن الوليد) — Cartoon Kidz', en:'The Undefeated Commander (Khalid) — Cartoon Kidz', g:'kids' },
    { ar:'قناة One Way Production', en:'One Way Production', g:'kids' },
    { ar:'قناة روائع إسلامية', en:'Rawa\'i Islamiyya', g:'kids' },
    { ar:'قناة أمة توون', en:'Ummah Toon', g:'kids' },
    { ar:'تعلّم مع زكريا', en:'Learn with Zakariya', g:'kids' },
    { ar:'سراج للأطفال', en:'Siraj for Kids', g:'kids' },
    { ar:'قناة مبدعون', en:'Mubdi\'oon', g:'kids' },
    { ar:'قناة أمجد سمير', en:'Amjad Sameer', g:'scholars' },
    { ar:'قناة أحمد السيد', en:'Ahmad al-Sayed', g:'scholars' },
    { ar:'قناة أحمد العربي', en:'Ahmad al-Arabi', g:'scholars' },
    { ar:'قناة أحمد عبد المنعم', en:'Ahmad Abdulmun\'im', g:'scholars' },
    { ar:'قناة إسلام ويب', en:'IslamWeb', g:'scholars' },
    { ar:'قناة د. راغب السرجاني', en:'Dr. Ragheb al-Sergany', g:'scholars' },
    { ar:'قناة علاء حامد', en:'Alaa Hamed', g:'scholars' },
    { ar:'قناة الشيخ الحويني', en:'Sheikh al-Huwaini', g:'scholars' },
    { ar:'قناة الشيخ سمير مصطفى', en:'Sheikh Sameer Mustafa', g:'scholars' },
    { ar:'قناة د. إياد قنيبي', en:'Dr. Iyad Qunaibi', g:'scholars' },
    { ar:'قناة مسجد الفرقان بمانشستر', en:'Al-Furqan Mosque, Manchester', g:'scholars' },
    { ar:'بودكاست فاهم', en:'Fahem Podcast', g:'podcast' },
    { ar:'بودكاست فنجان', en:'Finjan Podcast', g:'podcast' },
    { ar:'بودكاست وعي', en:'Wa\'i Podcast', g:'podcast' },
    { ar:'بودكاست بدون ورق', en:'Bidoon Waraq Podcast', g:'podcast' },
    { ar:'قناة د. نايف بن نهار', en:'Dr. Nayef bin Nahar', g:'podcast' },
    { ar:'بودكاست إرساء', en:'Irsa\' Podcast', g:'podcast' },
    { ar:'فيديوهات دريد إبراهيم الموصلي', en:'Duraid Ibrahim al-Mawsili', g:'podcast' },
    { ar:'قناة سولافا سليم', en:'Solafa Saleem', g:'tarbiya' },
    { ar:'فقه النفس — عبد الرحمن ذاكر الهاشمي', en:'Fiqh of the Self — A. al-Hashimi', g:'tarbiya' },
    { ar:'قناة فهد الكندري', en:'Fahad al-Kandari', g:'tarbiya' },
    { ar:'التربية — د. محمد بهجت', en:'Tarbiya — Dr. Muhammad Bahgat', g:'tarbiya' },
  ],

  ui: {
    sectionEdu:{ar:'القسم التربوي',en:'Parenting'},
    sectionEduSub:{ar:'مقالات ونصائح في تربية الأبناء',en:'Articles & tips on raising children'},
    sectionTrack:{ar:'المتابعة والتقييم',en:'Tracking & Evaluation'},
    sectionTrackSub:{ar:'رسوم بيانية ونقاط وشهادات',en:'Charts, points & certificates'},
    sectionRes:{ar:'المصادر التربوية',en:'Educational Resources'},
    sectionResSub:{ar:'كتب وفيديوهات ومقالات ودروس سماعية',en:'Books, videos, articles & audio lessons'},
  }
};
