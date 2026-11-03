/* maker.js — «صانع المهارات» · الصانع الصغير — 10 stations + podcast
   Built from the site's «ورشة الصانع الصغير» activities (corners/workshop/workshop-data.js):
   lantern · kaaba · watercycle · filter · moon · safari · room · cook · sadaqabox · birr */
window.SKILLS = window.SKILLS || {};
window.SKILLS.maker = {
  id: 'maker', icon: '🧰', color: '#5E8C31',
  title: ['الصانع الصغير', 'The Little Maker'],
  intro: [`في عشر محطّات ستصنع بيديك أشياء حقيقية: فانوسًا وكعبةً ومصفاةً ومرصدًا للقمر وطبقًا للجيران… وتكتشف المهارة التي وراء كلّ صنعة. وفي النهاية يكون عندك «دفتر الصانع» مليئًا بإنجازاتك!`,
          `In ten stations you will make real things with your own hands: a lantern, a Kaaba model, a water filter, a moon observatory, a dish for the neighbours… and discover the skill behind each one. By the end, your very own Maker's Journal will be full of what you made!`],
  mentor: { icon: '🧕', name: ['الخالة زينب', 'Aunt Zaynab'],
    say: [`أهلًا يا صانعي الصغير! أنا الخالة زينب، أحبّ الورق والصمغ والخيوط، وأحبّ أكثر أن أرى يدين صغيرتين تصنعان شيئًا جميلًا. أحضرتُ «صندوق الصانع»، فهل أحضرتَ صبرك وابتسامتك؟ هيّا نبدأ!`,
          `Welcome, little maker! I'm Aunt Zaynab. I love paper, glue and string, and I love even more watching small hands make something beautiful. I've brought the Maker's Box. Have you brought your patience and your smile? Let's begin!`] },
  cast: { h: { icon: '🧕', name: ['الخالة زينب', 'Aunt Zaynab'], g: 'female' },
          k: { icon: '👦', name: ['آدم', 'Adam'], g: 'male' } },
  goals: [
    ['اتّباع الخطوات بالترتيب والدقّة في الطيّ والقصّ', 'صنع نموذجٍ مصغّر وفهم معنى «المجسّم»', 'الملاحظة على مدى يومٍ كامل وفهم دورة الماء', 'التجربة العادلة والمقارنة: أيّ ترتيبٍ يصفّي أفضل؟', 'تسجيل الملاحظات ليلةً بعد ليلة واكتشاف النمط', 'الصبر والهدوء والعدّ عند استكشاف المخلوقات', 'التنظيم وبناء عادةٍ يومية لسبعة أيام', 'النظافة والسلامة والعمل مع الكبار في المطبخ', 'الادّخار والعدّ ثمّ العطاء', 'ملاحظة حاجات الآخرين وخدمتهم في السرّ، وإتمام «دفتر الصانع»'],
    ['Follow steps in order and fold and cut with care', 'Build a scale model and understand what a "model" is', 'Observe over a whole day and understand the water cycle', 'Run a fair test and compare: which layer order filters best?', 'Record observations night after night and discover a pattern', 'Be patient, quiet and count carefully when exploring creatures', 'Organise and build a daily habit for seven days', 'Cleanliness, safety and teamwork with adults in the kitchen', 'Save, count, and then give', 'Notice what others need and serve them in secret, and complete the Maker\'s Journal']
  ],
  filters: [['make', 'أصنع بيدي', 'I make'], ['discover', 'أكتشف', 'I discover'], ['home', 'في بيتي', 'At home'], ['khair', 'صنائع الخير', 'Good deeds']],
  parents: [
    '<h3>كيف ترافق صانعك الصغير؟</h3><p>هذه الرحلة تحوّل أنشطة «ورشة الصانع الصغير» إلى مسارٍ متدرّج: نصنع بأيدينا، ثمّ نكتشف ونلاحظ، ثمّ نخدم البيت، ثمّ نصنع الخير. في كلّ محطّة قصّة قصيرة، وفكرة مهمّة (المهارة التي وراء الصنعة)، وربط بديننا، ومهمّة حقيقية بأدواتها وخطواتها، وحلقة بودكاست.</p>' +
    '<ul><li><b>محطّة واحدة في الجلسة</b> تكفي. بعض المهمّات تأخذ أيامًا (القمر ٧ ليالٍ، الغرفة ٧ أيام، الصندوق أسابيع)، فابدؤوها واتركوها تجري وانتقلوا بهدوء.</li>' +
    '<li><b>صندوق الصانع:</b> ورق ملوّن، صمغ، أقلام تلوين، شريط لاصق، علب كرتون فارغة، قارورة بلاستيكية، كيس شفّاف بسحّاب، رمل نظيف وحصى، قطن، دفتر.</li>' +
    '<li><b>السلامة أوّلًا:</b> المقصّ وقصّ القارورة والسكاكين والموقد والماء الساخن مع شخصٍ كبير فقط. لا شيء كهربائي في هذه الرحلة. ولا نتذوّق ولا نشرب شيئًا من التجارب (خاصّةً ماء المصفاة).</li>' +
    '<li><b>للصغار والكبار:</b> لكلّ مهمّة نسخةٌ أسهل للصغار وتحدٍّ للكبار؛ اختاروا ما يناسب طفلكم دون مقارنة.</li>' +
    '<li><b>لا تصنعوا عنه:</b> ساعدوا في الخطوات الخطرة فقط، واتركوا له الأخطاء الصغيرة؛ فهي أفضل معلّم.</li></ul>' +
    '<h3>🎓 المشروع الختامي: دفتر الصانع</h3><p>بعد كلّ صنعة، يضع الطفل في دفتره صورةً أو رسمًا لما صنعه، مع الأدوات والخطوات وما تعلّمه، ثمّ تختمون له خانة الختم ⭐. في النهاية نظّموا «معرضًا صغيرًا» في البيت: الفانوس والكعبة ودفتر القمر وبطاقة السفاري… ويشرح الطفل لضيوفه كلّ صنعة بكلماته. وأمّا الصدقة والبرّ فتبقى أسرارًا لا تُعرض!</p>',
    '<h3>How to walk alongside your little maker</h3><p>This journey turns the site\'s Little Maker Workshop activities into a step-by-step path: we make with our hands, then we discover and observe, then we serve at home, then we make good deeds. Each station has a short story, a big idea (the skill behind the craft), a link to our deen, a real mission with its tools and steps, and a podcast episode.</p>' +
    '<ul><li><b>One station per session</b> is plenty. Some missions take days (the moon 7 nights, the room 7 days, the box several weeks), so start them, let them run, and move on calmly.</li>' +
    '<li><b>The Maker\'s Box:</b> coloured paper, glue, crayons, tape, empty cardboard boxes, a plastic bottle, a clear zip-lock bag, clean sand and pebbles, cotton wool, a notebook.</li>' +
    '<li><b>Safety first:</b> scissors, cutting the bottle, knives, the stove and hot water only with an adult. Nothing electrical on this journey. We never taste or drink anything from an experiment (especially the filter water).</li>' +
    '<li><b>For little ones and big ones:</b> every mission has an easier version and a challenge. Pick what fits your child, without comparing.</li>' +
    '<li><b>Don\'t make it for them:</b> help only with the risky steps and leave them their small mistakes. Mistakes are the best teacher.</li></ul>' +
    '<h3>🎓 Final project: the Maker\'s Journal</h3><p>After each make, your child adds a photo or drawing of it to the journal, with the tools, the steps and what they learned, and you stamp the stamp box ⭐. At the end, hold a "little exhibition" at home: the lantern, the Kaaba, the moon diary, the safari card… and let your child explain each one to the guests in their own words. The sadaqah and the kindness mission stay secrets that are not on display!</p>'
  ],
  worksheet: [
    '<h2>🧰 دفتر الصانع — صفحة صنعتي</h2>' +
    '<p>اسمي: ____________ &nbsp; التاريخ: ____________ &nbsp; رقم المحطّة: ______</p>' +
    '<h3>١. ماذا صنعت؟</h3><p>اسم صنعتي: ______________________________</p>' +
    '<div style="border:2px dashed #5E8C31;height:200px;padding:6px">ارسم صنعتك هنا أو الصق صورتها 📸</div>' +
    '<h3>٢. أدواتي</h3><p>١. ____________ &nbsp; ٢. ____________ &nbsp; ٣. ____________ &nbsp; ٤. ____________</p>' +
    '<h3>٣. خطواتي بالترتيب</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse"><tr><th style="width:15%">الخطوة</th><th>ماذا فعلت؟</th></tr><tr><td>١</td><td></td></tr><tr><td>٢</td><td></td></tr><tr><td>٣</td><td></td></tr><tr><td>٤</td><td></td></tr><tr><td>٥</td><td></td></tr></table>' +
    '<h3>٤. ماذا تعلّمت؟</h3><p>المهارة التي تدرّبت عليها: ______________________________</p><p>شيءٌ صعب واجهته وكيف حللته: ______________________________</p><p>ماذا سأحسّن في المرّة القادمة؟ ______________________________</p>' +
    '<table border="1" cellpadding="8" style="width:100%;border-collapse:collapse;margin-top:8px"><tr><td style="width:60%">كيف أشعر بصنعتي؟ ☐ 😊 فخور ☐ 🙂 جيّد ☐ 🤔 سأحاول مرّة أخرى</td><td style="height:110px;text-align:center;vertical-align:top">⭐ خانة الختم<br>(يختمها أحد الوالدين)</td></tr></table>' +
    '<h2>🧰 قائمة أدوات الصانع</h2><p>ضع ✓ أمام ما جمعته في صندوقك. وما عليه 🧑‍🦳 لا نستعمله إلا مع شخصٍ كبير.</p>' +
    '<table border="1" cellpadding="6" style="width:100%;border-collapse:collapse"><tr><th>الأداة</th><th>✓</th><th>الأداة</th><th>✓</th></tr>' +
    '<tr><td>📄 ورق ملوّن</td><td></td><td>🧴 صمغ</td><td></td></tr>' +
    '<tr><td>🖍️ أقلام تلوين</td><td></td><td>✏️ قلم رصاص ومسطرة</td><td></td></tr>' +
    '<tr><td>📦 علبة كرتون صغيرة</td><td></td><td>🫙 مرطبان أو علبة نظيفة</td><td></td></tr>' +
    '<tr><td>🛍️ كيس شفّاف بسحّاب</td><td></td><td>🍶 قارورة بلاستيكية فارغة</td><td></td></tr>' +
    '<tr><td>🏖️ رمل نظيف وحصى</td><td></td><td>🧻 قطن أو منديل ورقي</td><td></td></tr>' +
    '<tr><td>🔍 عدسة مكبّرة (اختياري)</td><td></td><td>📔 دفتر الصانع</td><td></td></tr>' +
    '<tr><td>✂️ مقصّ 🧑‍🦳</td><td></td><td>🔪 سكّين بلاستيكية آمنة 🧑‍🦳</td><td></td></tr></table>' +
    '<p>⚠️ قاعدة الصانع: لا كهرباء، ولا موقد أو ماء ساخن إلا مع كبير، ولا نتذوّق أو نشرب شيئًا من التجارب.</p>',
    '<h2>🧰 Maker\'s Journal — My Make page</h2>' +
    '<p>My name: ____________ &nbsp; Date: ____________ &nbsp; Station no.: ______</p>' +
    '<h3>1. What did I make?</h3><p>Name of my make: ______________________________</p>' +
    '<div style="border:2px dashed #5E8C31;height:200px;padding:6px">Draw what you made here, or stick in a photo 📸</div>' +
    '<h3>2. My tools</h3><p>1. ____________ &nbsp; 2. ____________ &nbsp; 3. ____________ &nbsp; 4. ____________</p>' +
    '<h3>3. My steps in order</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse"><tr><th style="width:15%">Step</th><th>What did I do?</th></tr><tr><td>1</td><td></td></tr><tr><td>2</td><td></td></tr><tr><td>3</td><td></td></tr><tr><td>4</td><td></td></tr><tr><td>5</td><td></td></tr></table>' +
    '<h3>4. What did I learn?</h3><p>The skill I practised: ______________________________</p><p>Something hard I faced and how I solved it: ______________________________</p><p>What will I improve next time? ______________________________</p>' +
    '<table border="1" cellpadding="8" style="width:100%;border-collapse:collapse;margin-top:8px"><tr><td style="width:60%">How do I feel about my make? ☐ 😊 proud ☐ 🙂 good ☐ 🤔 I\'ll try again</td><td style="height:110px;text-align:center;vertical-align:top">⭐ Stamp box<br>(stamped by a parent)</td></tr></table>' +
    '<h2>🧰 Maker\'s Tools Checklist</h2><p>Tick ✓ what you have collected in your box. Anything marked 🧑‍🦳 is only used with an adult.</p>' +
    '<table border="1" cellpadding="6" style="width:100%;border-collapse:collapse"><tr><th>Tool</th><th>✓</th><th>Tool</th><th>✓</th></tr>' +
    '<tr><td>📄 Coloured paper</td><td></td><td>🧴 Glue</td><td></td></tr>' +
    '<tr><td>🖍️ Crayons</td><td></td><td>✏️ Pencil and ruler</td><td></td></tr>' +
    '<tr><td>📦 Small cardboard box</td><td></td><td>🫙 Clean jar or box</td><td></td></tr>' +
    '<tr><td>🛍️ Clear zip-lock bag</td><td></td><td>🍶 Empty plastic bottle</td><td></td></tr>' +
    '<tr><td>🏖️ Clean sand and pebbles</td><td></td><td>🧻 Cotton wool or paper towel</td><td></td></tr>' +
    '<tr><td>🔍 Magnifying glass (optional)</td><td></td><td>📔 Maker\'s Journal</td><td></td></tr>' +
    '<tr><td>✂️ Scissors 🧑‍🦳</td><td></td><td>🔪 Safe plastic knife 🧑‍🦳</td><td></td></tr></table>' +
    '<p>⚠️ The maker\'s rule: nothing electrical, no stove or hot water without an adult, and we never taste or drink anything from an experiment.</p>'
  ],
  next: ['index.html', '🛠️', 'صانع المهارات', 'Skills Maker', 'اختر رحلة مهارةٍ أخرى', 'Pick another skill journey'],
  stations: [
    /* ───────── 1. Paper mosque lantern ───────── */
    {
      id: 'lantern', icon: '🏮', tag: 'make',
      t: ['فانوس المسجد الورقيّ', 'The paper mosque lantern'],
      sub: ['الصانع يقرأ الخطوات أوّلًا', 'A maker reads the steps first'],
      pg: [
        ['🧰✨', `في أوّل يومٍ من العطلة وصلت <b>الخالة زينب</b> ومعها صندوقٌ خشبيّ كبير مكتوبٌ عليه: «صندوق الصانع». فتحه <b>آدم</b> فوجد ورقًا ملوّنًا وصمغًا وخيوطًا وأقلامًا.`, `On the first day of the holidays, <b>Aunt Zaynab</b> arrived carrying a big wooden box with "The Maker's Box" written on it. <b>Adam</b> opened it and found coloured paper, glue, string and crayons.`],
        ['🕌🌙', `قالت الخالة: «في كلّ محطّة سنصنع شيئًا حقيقيًا، ونكتشف المهارة التي وراءه. وأوّل صنعة: فانوسٌ يُضيء ركن صلاتك».`, `"At every station we'll make something real," said Aunt Zaynab, "and discover the skill hiding behind it. Our first make: a lantern to brighten your prayer corner."`],
        ['✂️😮', `أسرع آدم يقصّ… فقصّ حتى طرف الورقة فانقسمت قطعتين! ضحكت الخالة بلطف: «الصانع يقرأ الخطوات كلّها أوّلًا. انظر: نقصّ من جهة الطيّة، ونقف قبل الطرف بمسافة إصبعين».`, `Adam rushed to cut… and cut right to the edge, so the paper fell into two pieces! Aunt Zaynab laughed kindly. "A maker reads all the steps first. Look: we cut from the folded side and stop two fingers before the edge."`],
        ['🔄🏮', `جرّبا مرّة ثانية بهدوء: طيٌّ، قصٌّ، فتحٌ، لفٌّ، لصق. وفجأة صار في يد آدم فانوسٌ له نوافذ رفيعة! أمّا أخته الصغيرة <b>ليلى</b> فلوّنت الهلال والنجوم.`, `They tried again, slowly: fold, cut, open, roll, glue. Suddenly Adam was holding a lantern with thin little windows! His little sister <b>Layla</b> coloured the crescent and the stars.`],
        ['📔📸', `علّقوا الفانوس فوق سجّادة الصلاة، وأعطت الخالة آدمَ دفترًا جديدًا: «هذا <b>دفتر الصانع</b>. بعد كلّ صنعة ارسمها أو الصق صورتها، واكتب ماذا تعلّمت».`, `They hung the lantern above the prayer mat, and Aunt Zaynab gave Adam a new notebook. "This is your <b>Maker's Journal</b>. After every make, draw it or stick in a photo, and write what you learned."`]
      ],
      learn: [`<b>اتّباع الخطوات بالترتيب:</b> الصانع الماهر يقرأ التعليمات كلّها قبل أن يبدأ، ويجهّز أدواته، ثمّ ينفّذ خطوةً بعد خطوة. والطيّ من المنتصف يجعل الجهتين متطابقتين، وهذا اسمه <b>التماثل</b>.`, `<b>Following steps in order:</b> a skilled maker reads all the instructions before starting, gets the tools ready, then works one step at a time. Folding down the middle makes both sides match. That is called <b>symmetry</b>.`],
      islam: [`قال النبيّ ﷺ: «الصلاةُ نور». تعلّمنا أنّ الصلاة نور، فلنصنع نورًا صغيرًا لركن صلاتنا يذكّرنا بها؛ والنور الحقيقيّ هو الصلاة نفسها.`, `The Prophet ﷺ said: "Prayer is light." We learned that prayer is light, so let's make a little light for our prayer corner to remind us of it. The real light is the prayer itself.`],
      src: ['صحيح مسلم، رقم ٢٢٣', 'Sahih Muslim, no. 223'],
      mission: [`<b>اصنع فانوسك!</b> الأدوات: ورقٌ ملوّن، مقصّ (مع أحد الكبار)، ألوان، صمغ.<br>١. اطوِ الورقة من المنتصف طوليًا.<br>٢. قُصّ خطوطًا من جهة الطيّة دون أن تصل إلى الطرف (مع كبير).<br>٣. افتح الورقة ولُفّها أسطوانة وألصق طرفيها.<br>٤. زيّنه بهلالٍ ونجومٍ من الورق.<br>٥. علّقه فوق سجّادة صلاتك.<br>🧒 للصغار: لوّنوا وزيّنوا، والكبار يقصّون. 💪 تحدٍّ: اصنع ٣ فوانيس بأحجامٍ متدرّجة وعلّقها معًا بخيط. 📔 ارسم فانوسك في دفتر الصانع.`, `<b>Make your lantern!</b> Tools: coloured paper, scissors (with an adult), crayons, glue.<br>1. Fold the paper in half lengthwise.<br>2. Cut slits from the folded edge without reaching the other edge (with an adult).<br>3. Open it, roll it into a cylinder and glue the edges.<br>4. Decorate it with a paper crescent and stars.<br>5. Hang it above your prayer mat.<br>🧒 Little ones: colour and decorate while an adult cuts. 💪 Challenge: make 3 lanterns of different sizes and hang them on one string. 📔 Draw your lantern in your Maker's Journal.`],
      q: [`لماذا انقسمت ورقة آدم في المحاولة الأولى؟`, `Why did Adam's paper fall into two pieces the first time?`],
      o: [[`لأنّ الورق كان ملوّنًا`, `Because the paper was coloured`], [`لأنّه قصّ حتى الطرف قبل أن يقرأ الخطوات`, `Because he cut to the edge before reading the steps`, 1], [`لأنّ الصمغ كان قليلًا`, `Because there wasn't enough glue`]],
      fb: [`أحسنت! الصانع يقرأ الخطوات كلّها أوّلًا، ثمّ يقصّ بهدوء ويترك مسافةً قبل الطرف.`, `Well done! A maker reads all the steps first, then cuts calmly and leaves a gap before the edge.`],
      podcast: {
        title: [`نورٌ لركن الصلاة`, `A light for the prayer corner`],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم الخالة زينب في بودكاست الصانع الصغير. ومعي اليوم صانعٌ متحمّس جدًّا.`, `Assalamu alaikum, friends! This is Aunt Zaynab on The Little Maker podcast. And today I have a very excited maker with me.`],
          ['k', `وعليكم السلام يا خالة! أنا آدم، عمري تسع سنوات، وصنعتُ أوّل فانوسٍ في حياتي!`, `Wa alaikum assalam, Aunt Zaynab! I'm Adam, I'm nine, and I just made the first lantern of my life!`],
          ['h', `مبارك يا آدم! لكن أخبر أصدقاءنا، ماذا حدث في المحاولة الأولى؟`, `Congratulations, Adam! But tell our friends, what happened on the first try?`],
          ['k', `قصصتُ بسرعة حتى آخر الورقة، فصارت قطعتين! شعرتُ بالخجل قليلًا.`, `I cut really fast all the way to the end, and it turned into two pieces! I felt a bit embarrassed.`],
          ['h', `لا داعي للخجل أبدًا. كلّ صانعٍ في العالم أفسد ورقةً أو اثنتين. المهمّ ماذا تعلّمت.`, `No need to be embarrassed at all. Every maker in the world has ruined a sheet or two. What matters is what you learned.`],
          ['k', `تعلّمتُ أن أقرأ الخطوات كلّها قبل أن أبدأ.`, `I learned to read all the steps before I start.`],
          ['h', `هذا سرٌّ كبير يا آدم. الطبّاخ يقرأ الوصفة، والنجّار يقيس قبل أن يقطع. الصانع يفكّر أوّلًا ثمّ يعمل.`, `That is a big secret, Adam. A cook reads the recipe, and a carpenter measures before cutting. A maker thinks first, then works.`],
          ['k', `وعندما طويتُ الورقة من المنتصف، صار الجانبان متشابهين تمامًا!`, `And when I folded the paper down the middle, both sides came out exactly the same!`],
          ['h', `هذا اسمه التماثل. انظر إلى جناحي الفراشة، أو إلى وجهك في المرآة. الجهتان متشابهتان.`, `That's called symmetry. Look at a butterfly's two wings, or your face in the mirror. The two sides match.`],
          ['k', `يا خالة، لماذا اخترنا الفانوس بالذات ليكون الصنعة الأولى؟`, `Aunt Zaynab, why did we choose a lantern to be our very first make?`],
          ['h', `لأنّ النبيّ صلّى الله عليه وسلّم قال: الصلاة نور. فصنعنا نورًا صغيرًا يذكّرنا بالنور الكبير، نور الصلاة.`, `Because the Prophet, peace be upon him, said: prayer is light. So we made a small light to remind us of the big light, the light of prayer.`],
          ['k', `علّقناه فوق سجّادتي. صرتُ أحبّ أن أصلّي هناك أكثر!`, `We hung it above my prayer mat. Now I love praying there even more!`],
          ['h', `وما رأيك أن ترسمه الآن في دفتر الصانع؟ سيكون أوّل صفحةٍ في دفترك.`, `And how about drawing it now in your Maker's Journal? It will be the first page in your journal.`],
          ['k', `فكرةٌ رائعة! وسأكتب تحته: اقرأ الخطوات أوّلًا.`, `Great idea! And underneath I'll write: read the steps first.`],
          ['h', `مهمّة اليوم: اصنع فانوسًا ورقيًا لركن صلاتك، واقرأ الخطوات كلّها قبل أن تبدأ. إلى اللقاء في الحلقة القادمة!`, `Today's mission: make a paper lantern for your prayer corner, and read all the steps before you begin. See you in the next episode!`],
          ['k', `مع السلامة يا أصدقاء! ولا تنسوا: المقصّ مع شخصٍ كبير!`, `Goodbye, friends! And don't forget: scissors only with a grown-up!`]
        ]
      }
    },

    /* ───────── 2. Kaaba model ───────── */
    {
      id: 'kaaba', icon: '🕋', tag: 'make',
      t: ['مجسّم الكعبة المشرّفة', 'The Kaaba model'],
      sub: ['النموذج: نسخةٌ صغيرة من شيءٍ كبير', 'A model: a small copy of something big'],
      pg: [
        ['📦🤔', `وجد آدم علبة كرتونٍ صغيرة فارغة وأراد رميها. قالت الخالة زينب: «انتظر! الصانع يرى في العلبة القديمة أشياء كثيرة. ما رأيك أن نحوّلها إلى <b>مجسّمٍ للكعبة</b>؟»`, `Adam found a small empty cardboard box and was about to throw it away. "Wait!" said Aunt Zaynab. "A maker sees many things in an old box. How about we turn it into a <b>model of the Kaaba</b>?"`],
        ['🕋📏', `قالت: «المجسّم نسخةٌ صغيرة تشبه الشيء الحقيقيّ في شكله. الكعبة الحقيقية عظيمة وكبيرة، وشكلها قريبٌ من المكعّب، وكسوتها سوداء عليها حزامٌ ذهبيّ مطرّز بآيات القرآن».`, `"A model is a small copy that has the same shape as the real thing," she said. "The real Kaaba is huge and magnificent. Its shape is close to a cube, and its cover is black with a golden band embroidered with verses of the Quran."`],
        ['🖤💛', `غلّف آدم العلبة بالورق الأسود، ثمّ قاس بالمسطرة خطًّا قرب الأعلى ليلصق الشريط الذهبيّ مستقيمًا. ورسمت ليلى بابًا ذهبيًا صغيرًا.`, `Adam wrapped the box in black paper, then used a ruler to mark a line near the top so the gold band would be glued on straight. Layla drew a small golden door.`],
        ['🧱👴', `حكت الخالة: «أتعرف من بنى الكعبة؟ نبيّ الله <b>إبراهيم</b> وابنه <b>إسماعيل</b> عليهما السلام، رفعا حجارتها بأيديهما وهما يدعوان الله أن يتقبّل منهما».`, `Aunt Zaynab told him: "Do you know who built the Kaaba? The Prophet <b>Ibrahim</b> and his son <b>Ismail</b>, peace be upon them. They raised its stones with their own hands, praying that Allah would accept it from them."`],
        ['🧭🤲', `سأل آدمُ أباه: «أين القِبلة في بيتنا؟» فأشار الأب إلى الجدار. وضع آدم مجسّمه في ذلك الاتّجاه، وصلّى المغرب وهو يعرف أنّ المسلمين في كلّ الأرض يتّجهون إلى هذا البيت نفسه.`, `Adam asked his father, "Where is the Qiblah in our home?" His father pointed to a wall. Adam placed his model facing that way, and prayed Maghrib knowing that Muslims all over the earth face this very same House.`]
      ],
      learn: [`<b>النموذج (المجسّم)</b> نسخةٌ مصغّرة تحفظ شكل الشيء الحقيقيّ. المهندسون والمعماريّون يصنعون النماذج ليفهموا الأشياء الكبيرة قبل بنائها. و<b>القياس</b> بالمسطرة يجعل الشريط مستقيمًا والعمل متقنًا.`, `<b>A model</b> is a smaller copy that keeps the shape of the real thing. Engineers and architects make models to understand big things before building them. <b>Measuring</b> with a ruler keeps the band straight and the work neat.`],
      islam: [`قال الله تعالى: ﴿وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ﴾ (البقرة: ١٢٧). وقال: ﴿فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ﴾ (البقرة: ١٤٤). صنع إبراهيم وإسماعيل بأيديهما، ودعَوا الله أن يتقبّل عملهما.`, `Allah says: "And when Ibrahim was raising the foundations of the House, and Ismail: Our Lord, accept this from us. Indeed, You are the All-Hearing, the All-Knowing." (al-Baqarah 2:127). And He says: "So turn your face toward al-Masjid al-Haram." (al-Baqarah 2:144). Ibrahim and Ismail built with their own hands and asked Allah to accept their work.`],
      src: ['البقرة: ١٢٧، ١٤٤', 'Al-Baqarah 2:127, 2:144'],
      mission: [`<b>اصنع مجسّم الكعبة!</b> الأدوات: علبة كرتونٍ صغيرة، ورقٌ أو قماشٌ أسود، شريطٌ ذهبيّ أو ورقٌ أصفر، صمغ.<br>١. غلّف العلبة كلّها بالورق الأسود.<br>٢. ألصق الشريط الذهبيّ حولها قرب الأعلى — هذا حزام الكعبة.<br>٣. ارسم بابًا ذهبيًا صغيرًا في أحد الجوانب.<br>٤. اسأل أهلك: أين اتّجاه القِبلة في بيتنا؟ وضع المجسّم في ذلك الاتّجاه.<br>٥. صلِّ صلاتك القادمة وأنت تعرف أنّك تتوجّه نحو هذا البيت العظيم.<br>🧒 للصغار: يكفي التغليف بالأسود ولصق شريطٍ واحد. 💪 تحدٍّ: ابحث كم مرّةً يطوف الحاجّ حول الكعبة، واكتب الجواب على بطاقةٍ بجانب المجسّم. 📔 الصق صورة مجسّمك في دفتر الصانع.`, `<b>Make a Kaaba model!</b> Tools: a small cardboard box, black paper or fabric, gold ribbon or yellow paper, glue.<br>1. Wrap the whole box in black paper.<br>2. Glue the gold band around it near the top. That's the Kaaba's belt.<br>3. Draw a small golden door on one side.<br>4. Ask your parents: which way is the Qiblah in our home? Place your model facing that way.<br>5. Pray your next prayer knowing you are facing this great House.<br>🧒 Little ones: wrapping it in black and adding one band is enough. 💪 Challenge: find out how many times pilgrims go around the Kaaba, and write the answer on a card next to your model. 📔 Stick a photo of your model in your Maker's Journal.`],
      q: [`ما هو المجسّم (النموذج)؟`, `What is a model?`],
      o: [[`صورةٌ مرسومة على الورق فقط`, `Just a picture drawn on paper`], [`شيءٌ لا يشبه الأصل أبدًا`, `Something that looks nothing like the real thing`], [`نسخةٌ صغيرة تحفظ شكل الشيء الحقيقيّ`, `A small copy that keeps the shape of the real thing`, 1]],
      fb: [`صحيح! المجسّم نسخةٌ صغيرة بشكل الأصل، تساعدنا أن نفهم الأشياء الكبيرة ونتذكّرها.`, `Correct! A model is a small copy with the same shape as the real thing. It helps us understand and remember big things.`],
      podcast: {
        title: [`بيتٌ بناه نبيّان`, `A House built by two prophets`],
        lines: [
          ['h', `السلام عليكم يا صنّاعنا الصغار! معكم الخالة زينب، ومعي صديقنا آدم. ماذا صنعتَ اليوم يا آدم؟`, `Assalamu alaikum, little makers! This is Aunt Zaynab, and our friend Adam is here. What did you make today, Adam?`],
          ['k', `وعليكم السلام! صنعتُ مجسّمًا للكعبة من علبةٍ كنتُ سأرميها!`, `Wa alaikum assalam! I made a model of the Kaaba out of a box I was going to throw away!`],
          ['h', `أحسنت. الصانع يرى كنزًا في الأشياء القديمة. ولكن ما معنى كلمة مجسّم؟`, `Well done. A maker sees treasure in old things. But what does the word model mean?`],
          ['k', `يعني نسخةٌ صغيرة تشبه الشيء الكبير في شكله.`, `It means a small copy that has the same shape as the big thing.`],
          ['h', `تمامًا. المعماريّون يصنعون مجسّمات للمساجد والبيوت قبل أن يبنوها، ليروا شكلها من كلّ الجهات.`, `Exactly. Architects make models of mosques and houses before they build them, so they can see them from every side.`],
          ['k', `يا خالة، كيف ألصقتُ الشريط الذهبيّ مستقيمًا؟ آه نعم، بالمسطرة!`, `Aunt Zaynab, how did I get the gold band so straight? Oh yes, with the ruler!`],
          ['h', `صحيح. القياس سرّ الإتقان. خطٌّ صغير بقلم الرصاص قبل اللصق يوفّر عليك تعبًا كثيرًا.`, `That's right. Measuring is the secret of neat work. A little pencil line before gluing saves you lots of trouble.`],
          ['k', `وهل تعرفين يا خالة من بنى الكعبة الحقيقية؟`, `And do you know, Aunt Zaynab, who built the real Kaaba?`],
          ['h', `أخبرني أنت!`, `You tell me!`],
          ['k', `النبيّ إبراهيم وابنه إسماعيل عليهما السلام!`, `The Prophet Ibrahim and his son Ismail, peace be upon them!`],
          ['h', `أحسنت. وفي سورة البقرة يخبرنا الله أنّهما كانا يرفعان القواعد ويقولان: ربّنا تقبّل منّا. كانا يعملان بأيديهما ويدعوان معًا.`, `Excellent. In Surat al-Baqarah, Allah tells us they were raising the foundations and saying: Our Lord, accept this from us. They worked with their hands and prayed at the same time.`],
          ['k', `إذن سأقول أنا أيضًا: ربّنا تقبّل منّا، عندما أنهي أيّ صنعة!`, `Then I'll also say: Our Lord, accept this from us, whenever I finish any make!`],
          ['h', `ما أجمل هذه العادة! وأين وضعتَ مجسّمك؟`, `What a beautiful habit! And where did you put your model?`],
          ['k', `في اتّجاه القِبلة. سألتُ أبي فأشار إلى الجدار الصحيح.`, `Facing the Qiblah. I asked my dad and he pointed to the right wall.`],
          ['h', `مهمّة اليوم: حوّل علبةً صغيرة إلى مجسّمٍ للكعبة، واسأل أهلك عن اتّجاه القِبلة في بيتكم. إلى اللقاء!`, `Today's mission: turn a small box into a Kaaba model, and ask your family which way the Qiblah is in your home. See you soon!`],
          ['k', `مع السلامة يا أصدقاء! لا ترموا العلب، اصنعوا منها شيئًا جميلًا!`, `Goodbye, friends! Don't throw boxes away, make something beautiful out of them!`]
        ]
      }
    },

    /* ───────── 3. Water cycle in a bag ───────── */
    {
      id: 'watercycle', icon: '💧', tag: 'discover',
      t: ['دورة الماء في كيس', 'The water cycle in a bag'],
      sub: ['الصانع يلاحظ ويصبر', 'A maker watches and waits'],
      pg: [
        ['🌧️🪟', `في صباحٍ ماطر، كان آدم يراقب القطرات على النافذة وسأل: «يا خالة، من أين يأتي المطر؟ هل في السماء خزّانٌ كبير؟»`, `On a rainy morning, Adam watched the drops on the window and asked, "Aunt Zaynab, where does rain come from? Is there a giant tank in the sky?"`],
        ['🛍️🖊️', `ابتسمت الخالة وأخرجت كيسًا شفّافًا بسحّاب: «لن أخبرك، بل سنصنع سماءً صغيرة ونرى بأعيننا!» رسم آدم على الكيس شمسًا وغيمةً وبحرًا.`, `Aunt Zaynab smiled and took out a clear zip-lock bag. "I won't tell you. We'll make a tiny sky and see with our own eyes!" Adam drew a sun, a cloud and a sea on the bag.`],
        ['💧☀️', `وضعا فيه قليلًا من الماء الملوّن بالأزرق، وأغلقاه جيّدًا، وألصقاه على نافذةٍ مشمسة. قالت الخالة: «والآن أصعب مهارةٍ للصانع: <b>الصبر</b>».`, `They poured in a little blue-coloured water, sealed it tightly and taped it to a sunny window. "And now," said Aunt Zaynab, "the hardest skill a maker has: <b>patience</b>."`],
        ['👀🌫️', `بعد الظهر نظر آدم فرأى قطراتٍ صغيرة تحت رسم الغيمة! دفّأت الشمس الماء ف<b>تبخّر</b> وصعد، ثمّ برد على سطح الكيس ف<b>تكثّف</b> قطرات، ثمّ <b>نزلت</b> القطرات كالمطر.`, `In the afternoon Adam looked and saw tiny drops under the cloud he had drawn! The sun warmed the water so it <b>evaporated</b> and rose, then it cooled on the bag and <b>condensed</b> into drops, and then the drops <b>fell</b> like rain.`],
        ['🌍🔁', `قالت الخالة: «هذا ما يحدث في الأرض كلّها كلّ يوم: البحار تتبخّر، والغيوم تتكوّن، والمطر ينزل، ثمّ يعود الماء إلى البحر. دورةٌ لا تتوقّف!» وكتب آدم ما رآه في دفتره.`, `"This is what happens all over the earth every day," said Aunt Zaynab. "Seas evaporate, clouds form, rain falls, and the water goes back to the sea. A cycle that never stops!" Adam wrote what he saw in his journal.`]
      ],
      learn: [`<b>الملاحظة عبر الوقت:</b> بعض الأشياء لا نراها في دقيقة، بل نحتاج أن ننتظر ونعود وننظر. وفي <b>دورة الماء</b>: الحرارة تجعل الماء يتبخّر، والبرودة تجعل البخار يتكثّف قطرات، ثمّ تنزل القطرات مطرًا.`, `<b>Observing over time:</b> some things can't be seen in a minute. We have to wait, come back and look again. In the <b>water cycle</b>, heat makes water evaporate, cooling makes the vapour condense into drops, and the drops fall as rain.`],
      islam: [`قال الله تعالى: ﴿وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا﴾ (الفرقان: ٤٨). كلّ قطرةٍ في كيسك تذكّرك بآيةٍ من آيات الله: يُنزل المطر رحمةً لنا وللأرض.`, `Allah says: "And We sent down from the sky pure water." (al-Furqan 25:48). Every drop in your bag reminds you of one of Allah's signs: He sends down rain as a mercy for us and for the earth.`],
      src: ['الفرقان: ٤٨', 'Al-Furqan 25:48'],
      mission: [`<b>اصنع دورة الماء في كيس!</b> الأدوات: كيسٌ شفّاف بسحّاب، قليلٌ من الماء، لون طعامٍ أزرق (اختياري)، قلمٌ ثابت وشريطٌ لاصق.<br>١. ارسم على الكيس شمسًا وغيمةً وبحرًا.<br>٢. ضع قليلًا من الماء الملوّن وأغلق الكيس جيّدًا.<br>٣. ألصقه على نافذةٍ مشمسة واتركه يومًا كاملًا.<br>٤. راقب: الماء يتبخّر ويصعد، ثمّ يتكثّف وينزل قطراتٍ كالمطر!<br>٥. سجّل ما رأيت في دفتر الصانع: في الصباح، وبعد الظهر، وفي المساء.<br>🧒 للصغار: ارسموا الشمس والغيمة، ويكفي أن تراقبوا القطرات. 💪 تحدٍّ: ضع كيسًا ثانيًا في الظلّ وقارن: أيّهما ظهرت فيه القطرات أسرع؟ ولماذا؟ ⚠️ ماء التجربة لا نشربه.`, `<b>Make the water cycle in a bag!</b> Tools: a clear zip-lock bag, a little water, blue food colouring (optional), a permanent marker and tape.<br>1. Draw a sun, a cloud and a sea on the bag.<br>2. Pour in a little coloured water and seal the bag tightly.<br>3. Tape it to a sunny window and leave it for a whole day.<br>4. Watch: the water evaporates and rises, then condenses and falls in drops like rain!<br>5. Record what you saw in your Maker's Journal: morning, afternoon and evening.<br>🧒 Little ones: draw the sun and cloud, and just watch for the drops. 💪 Challenge: put a second bag in the shade and compare: in which one do drops appear faster? Why? ⚠️ We don't drink the experiment water.`],
      q: [`لماذا ظهرت القطرات تحت الغيمة في الكيس؟`, `Why did drops appear under the cloud in the bag?`],
      o: [[`لأنّ أحدًا رشّ الماء من الخارج`, `Because someone sprayed water on the outside`], [`لأنّ الشمس بخّرت الماء ثمّ تكثّف البخار قطرات`, `Because the sun evaporated the water and then the vapour condensed into drops`, 1], [`لأنّ الكيس كان مثقوبًا`, `Because the bag had a hole in it`]],
      fb: [`ممتاز! الحرارة تبخّر الماء، والبرودة تكثّفه قطرات. هكذا يتكوّن المطر الذي ينزله الله من السماء.`, `Excellent! Heat evaporates the water and cooling condenses it into drops. That is how the rain Allah sends from the sky forms.`],
      podcast: {
        title: [`سماءٌ صغيرة على النافذة`, `A tiny sky on the window`],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم الخالة زينب في بودكاست الصانع الصغير. آدم، يبدو أنّ عندك خبرًا مثيرًا!`, `Assalamu alaikum, friends! This is Aunt Zaynab on The Little Maker podcast. Adam, it sounds like you have exciting news!`],
          ['k', `وعليكم السلام! نعم يا خالة! أمطرت السماء داخل الكيس على نافذتي!`, `Wa alaikum assalam! Yes, Aunt Zaynab! It rained inside the bag on my window!`],
          ['h', `مطرٌ في كيس؟ احكِ لنا من البداية.`, `Rain in a bag? Tell us from the beginning.`],
          ['k', `وضعنا ماءً أزرق في كيسٍ شفّاف، وأغلقناه، وألصقناه في الشمس. ثمّ انتظرنا.`, `We put blue water in a clear bag, sealed it and taped it in the sun. Then we waited.`],
          ['h', `والانتظار صعب، أليس كذلك؟`, `And waiting is hard, isn't it?`],
          ['k', `صعبٌ جدًّا! نظرتُ إليه عشر مرّات في الساعة الأولى ولم يحدث شيء.`, `Super hard! I looked at it ten times in the first hour and nothing happened.`],
          ['h', `هذا درسٌ مهمّ. بعض الأشياء تحتاج وقتًا. العالِم والصانع يصبران ويعودان للملاحظة.`, `That's an important lesson. Some things need time. Scientists and makers are patient, and they come back to look again.`],
          ['k', `وبعد الظهر رأيتُ قطراتٍ صغيرة تحت الغيمة التي رسمتها! كيف صعد الماء يا خالة؟`, `And in the afternoon I saw little drops under the cloud I drew! How did the water go up, Aunt Zaynab?`],
          ['h', `الشمس دفّأت الماء فصار بخارًا خفيفًا لا نراه، وصعد إلى الأعلى. هذا هو التبخّر.`, `The sun warmed the water, so it turned into a light vapour we can't see, and it rose up. That's evaporation.`],
          ['k', `ثمّ صار قطرات من جديد؟`, `And then it turned back into drops?`],
          ['h', `نعم. عندما لمس البخار سطح الكيس الأبرد، تجمّع قطرات. هذا اسمه التكثّف. ثمّ ثقلت القطرات فنزلت، مثل المطر تمامًا.`, `Yes. When the vapour touched the cooler surface of the bag, it gathered into drops. That's called condensation. Then the drops got heavy and fell, just like rain.`],
          ['k', `يعني البحر يتبخّر، ويصير غيومًا، ثمّ تمطر علينا؟`, `So the sea evaporates, turns into clouds, and then it rains on us?`],
          ['h', `بالضبط. وفي سورة الفرقان يقول الله تعالى: وأنزلنا من السماء ماءً طهورًا. كلّ قطرة مطرٍ رحمةٌ من الله.`, `Exactly. And in Surat al-Furqan, Allah says: And We sent down from the sky pure water. Every raindrop is a mercy from Allah.`],
          ['k', `سأقول الحمد لله كلّما رأيتُ المطر بعد اليوم.`, `From now on I'll say Alhamdulillah whenever I see rain.`],
          ['h', `مهمّة اليوم: اصنع دورة الماء في كيس، وانظر إليه ثلاث مرّات في اليوم، وسجّل ما رأيت في دفترك. إلى اللقاء!`, `Today's mission: make the water cycle in a bag, look at it three times during the day, and record what you see in your journal. See you soon!`],
          ['k', `مع السلامة! وتذكّروا: الصبر مهارة الصانع!`, `Goodbye! And remember: patience is a maker's skill!`]
        ]
      }
    },

    /* ───────── 4. Little water filter ───────── */
    {
      id: 'filter', icon: '🫗', tag: 'discover',
      t: ['مصفاة الماء الصغيرة', 'The little water filter'],
      sub: ['طبقاتٌ وتجربةٌ عادلة', 'Layers and a fair test'],
      pg: [
        ['🌧️🟤', `بعد المطر امتلأت حفرةٌ في الحديقة بماءٍ بنّيّ عكِر. قال آدم: «يا خالة، هل يمكن أن نجعل هذا الماء صافيًا؟» قالت: «لنصنع <b>مصفاة</b> ونرَ!»`, `After the rain, a hole in the garden filled with muddy brown water. "Aunt Zaynab," said Adam, "could we make this water clear?" "Let's build a <b>filter</b> and find out!" she said.`],
        ['🍶✂️', `قصّ أبو آدم قارورةً بلاستيكية نصفين، لأنّ حافّتها قد تكون حادّة. قلب آدم النصف العلويّ كالقمع فوق النصف السفليّ، ووضع في العنق قطنًا، ثمّ طبقة رمل، ثمّ طبقة حصى.`, `Adam's dad cut a plastic bottle in half, because the cut edge can be sharp. Adam turned the top half upside down like a funnel over the bottom half, and put cotton in the neck, then a layer of sand, then a layer of pebbles.`],
        ['🫗✨', `سكب الماء العكِر ببطء… فخرجت من الأسفل قطراتٌ أصفى بكثير! صاح آدم: «سأشربه!» فأمسكت الخالة يده بلطف: «لا يا آدم. <b>الصافي ليس دائمًا نظيفًا</b>. قد تبقى فيه جراثيم صغيرةٌ جدًّا لا تراها العين».`, `He poured the muddy water in slowly… and much clearer drops came out at the bottom! "I'm going to drink it!" Adam shouted. Aunt Zaynab gently held his hand. "No, Adam. <b>Clear is not always clean.</b> There can still be germs far too tiny for our eyes to see."`],
        ['🏭💧', `قالت: «محطّات الماء الحقيقية تصفّي الماء بطبقاتٍ مثل مصفاتك، ثمّ تعقّمه وتفحصه في المختبر قبل أن يصل إلى بيوتنا. أمّا ماء تجربتنا فنسقي به نبتةً في الحديقة».`, `"Real water treatment plants filter water through layers just like yours," she said, "then they disinfect it and test it in a lab before it reaches our homes. Our experiment water goes to a garden plant."`],
        ['🔬📋', `ثمّ قالت: «لنجرّب كالعلماء: نصنع مصفاةً ثانية بترتيبٍ مختلف، ونسكب فيها <b>الكمّية نفسها</b> من الماء العكِر. نغيّر شيئًا واحدًا فقط، هذه هي <b>التجربة العادلة</b>». سجّل آدم النتيجة في دفتره.`, `Then she said, "Let's test like scientists: we'll make a second filter with a different order and pour in <b>the same amount</b> of muddy water. We change only one thing. That's a <b>fair test</b>." Adam recorded the result in his journal.`]
      ],
      learn: [`<b>الطبقات تعمل معًا:</b> الحصى يحجز القطع الكبيرة، والرمل يحجز الأصغر، والقطن يحجز الأدقّ. و<b>التجربة العادلة</b> أن نغيّر شيئًا واحدًا فقط ونُبقي الباقي كما هو، حتى نعرف ما الذي صنع الفرق. وتذكّر: <b>الماء الصافي ليس بالضرورة نظيفًا للشرب</b>.`, `<b>Layers work together:</b> pebbles catch the big bits, sand catches smaller ones, and cotton catches the finest. A <b>fair test</b> means changing only one thing and keeping everything else the same, so we know what made the difference. And remember: <b>clear water is not necessarily safe to drink</b>.`],
      islam: [`قال الله تعالى: ﴿وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ﴾ (الأنبياء: ٣٠). وقال النبيّ ﷺ: «الطُّهورُ شطرُ الإيمان». الماء نعمةٌ عظيمة نتطهّر به ونحيا به، فنحافظ عليه ولا نسرف فيه.`, `Allah says: "And We made from water every living thing." (al-Anbiya 21:30). And the Prophet ﷺ said: "Purity is half of faith." Water is a great blessing: we purify ourselves with it and live by it, so we look after it and don't waste it.`],
      src: ['الأنبياء: ٣٠ · صحيح مسلم، رقم ٢٢٣', 'Al-Anbiya 21:30 · Sahih Muslim, no. 223'],
      mission: [`<b>اصنع مصفاة الماء!</b> الأدوات: قارورةٌ بلاستيكية مقصوصة نصفين (يقصّها أحد الكبار)، رملٌ نظيف وحصى صغيرة، قطنٌ أو منديلٌ ورقيّ، كوب ماءٍ معكَّرٍ بقليلٍ من التراب.<br>١. اقلب النصف العلويّ للقارورة كالقمع فوق النصف السفليّ.<br>٢. ضع في عنقها القطن، ثمّ طبقة رمل، ثمّ طبقة حصى.<br>٣. اسكب الماء العكِر ببطءٍ من الأعلى.<br>٤. راقب الماء يخرج من الأسفل أصفى بكثير!<br>٥. ⚠️ <b>انتبه: هذا الماء للتجربة فقط — لا نشربه ولا نتذوّقه أبدًا.</b> اسقِ به نبتةً في الحديقة.<br>🧒 للصغار: الكبار يقصّون القارورة، والصغير يرتّب الطبقات ويسكب. 💪 تحدٍّ: جرّب ترتيبًا مختلفًا للطبقات بالكمّية نفسها من الماء — أيّ ترتيبٍ يصفّي أفضل؟ سجّل نتيجتك في دفتر الصانع.`, `<b>Build the water filter!</b> Tools: a plastic bottle cut in half (an adult does the cutting), clean sand and small pebbles, cotton wool or a paper towel, a cup of water muddied with a little soil.<br>1. Turn the bottle's top half upside down like a funnel over the bottom half.<br>2. Put cotton in the neck, then a layer of sand, then a layer of pebbles.<br>3. Slowly pour the muddy water in at the top.<br>4. Watch much clearer water drip out at the bottom!<br>5. ⚠️ <b>Careful: this water is only for the experiment. We never drink it or taste it.</b> Use it to water a garden plant.<br>🧒 Little ones: an adult cuts the bottle; you layer and pour. 💪 Challenge: try a different layer order with the same amount of water. Which order filters best? Record your result in your Maker's Journal.`],
      q: [`خرج الماء من مصفاة آدم صافيًا. ماذا نفعل به؟`, `The water came out of Adam's filter looking clear. What do we do with it?`],
      o: [[`نشربه لأنّه صار صافيًا`, `Drink it, because it's clear now`], [`نتذوّق منه قليلًا فقط`, `Just taste a little of it`], [`لا نشربه؛ نسقي به نبتة، لأنّ الصافي ليس دائمًا نظيفًا`, `We don't drink it. We water a plant with it, because clear isn't always clean`, 1]],
      fb: [`أحسنت يا صانع! الجراثيم صغيرةٌ لا تُرى، وماء الشرب يُعقَّم ويُفحص في محطّات خاصّة. ماء التجارب لا نشربه أبدًا.`, `Well done, maker! Germs are too small to see, and drinking water is disinfected and tested at special plants. We never drink experiment water.`],
      podcast: {
        title: [`الصافي ليس دائمًا نظيفًا`, `Clear isn't always clean`],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم الخالة زينب. ومعي آدم، وفي يده قارورةٌ فيها رمل وحصى!`, `Assalamu alaikum, friends! This is Aunt Zaynab. Adam is with me, holding a bottle full of sand and pebbles!`],
          ['k', `وعليكم السلام! هذه مصفاتي يا أصدقاء. سكبتُ فيها ماءً بنّيًا، فخرج من الأسفل صافيًا تقريبًا!`, `Wa alaikum assalam! This is my filter, friends. I poured brown water into it, and it came out almost clear at the bottom!`],
          ['h', `رائع. لكن ماذا أردتَ أن تفعل بالماء أوّل مرّة؟`, `Wonderful. But what did you want to do with the water the first time?`],
          ['k', `أردتُ أن أشربه! ثمّ أوقفتِني يا خالة.`, `I wanted to drink it! And then you stopped me, Aunt Zaynab.`],
          ['h', `لأنّ الصافي ليس دائمًا نظيفًا. قد تبقى فيه جراثيم صغيرةٌ جدًّا، أصغر من أن تراها العين.`, `Because clear isn't always clean. There can still be germs in it, far too small for our eyes to see.`],
          ['k', `إذن كيف يصير ماء البيت صالحًا للشرب؟`, `So how does the water at home become safe to drink?`],
          ['h', `في محطّات الماء يصفّونه بطبقاتٍ مثل مصفاتك، ثمّ يعقّمونه ويفحصونه في المختبر. خطواتٌ كثيرة قبل أن يصل إلى الصنبور.`, `At water treatment plants they filter it through layers like yours, then disinfect it and test it in a lab. Lots of steps before it reaches the tap.`],
          ['k', `وماء تجربتي، ماذا فعلتُ به؟ سقيتُ به شجرة الليمون!`, `And my experiment water? I gave it to the lemon tree!`],
          ['h', `أحسنت. ثمّ جرّبنا ترتيبًا آخر للطبقات. لماذا سكبنا الكمّية نفسها من الماء في المرّتين؟`, `Well done. Then we tried another layer order. Why did we pour the same amount of water both times?`],
          ['k', `حتى تكون المقارنة عادلة! نغيّر شيئًا واحدًا فقط.`, `So the comparison is fair! We only change one thing.`],
          ['h', `هذه هي التجربة العادلة يا آدم. لو غيّرنا كلّ شيء، لن نعرف ما الذي صنع الفرق.`, `That's a fair test, Adam. If we changed everything, we wouldn't know what made the difference.`],
          ['k', `يا خالة، الماء مهمٌّ جدًّا، صحيح؟`, `Aunt Zaynab, water is really important, isn't it?`],
          ['h', `مهمٌّ جدًّا. يقول الله تعالى في سورة الأنبياء: وجعلنا من الماء كلّ شيءٍ حيّ. وبه نتوضّأ ونتطهّر، والنبيّ صلّى الله عليه وسلّم قال: الطهور شطر الإيمان.`, `Very important. Allah says in Surat al-Anbiya: And We made from water every living thing. We also make wudu and purify ourselves with it, and the Prophet, peace be upon him, said: purity is half of faith.`],
          ['k', `سأغلق الصنبور وأنا أفرك يديّ، حتى لا أسرف في الماء.`, `I'll turn off the tap while I scrub my hands, so I don't waste water.`],
          ['h', `مهمّة اليوم: اصنع مصفاةً بطبقات الحصى والرمل والقطن، وتذكّر أنّ ماء التجربة لا نشربه أبدًا. إلى اللقاء!`, `Today's mission: build a filter with layers of pebbles, sand and cotton, and remember that we never drink experiment water. See you soon!`],
          ['k', `مع السلامة يا أصدقاء! الصافي ليس دائمًا نظيفًا!`, `Goodbye, friends! Clear isn't always clean!`]
        ]
      }
    },

    /* ───────── 5. Little moon observatory ───────── */
    {
      id: 'moon', icon: '🌙', tag: 'discover',
      t: ['مرصد القمر الصغير', 'The little moon observatory'],
      sub: ['سجّل ليلةً بعد ليلة واكتشف النمط', 'Record night after night and find the pattern'],
      pg: [
        ['🌙❓', `في ليلةٍ صافية رأى آدم القمر رفيعًا كالقوس، فقال: «أين ذهب باقيه؟ أمس كان أكبر!» قالت الخالة: «لنصبح <b>راصدين</b> ونكتشف السرّ بأنفسنا».`, `One clear night Adam saw the moon as thin as a bow. "Where did the rest of it go? It was bigger yesterday!" "Let's become <b>observers</b> and discover the secret ourselves," said Aunt Zaynab.`],
        ['📋✏️', `صنعت له بطاقة «يوميات القمر» فيها سبع خانات، لكلّ ليلةٍ خانة. وكلّ ليلة بعد صلاة العشاء يخرج آدم مع أبيه إلى الشرفة، وينظر، ويرسم شكل القمر في خانة ذلك اليوم.`, `She made him a Moon Journal card with seven boxes, one for each night. Every night after Isha, Adam went out with his father to the balcony, looked, and drew the moon's shape in that day's box.`],
        ['☁️🙂', `في الليلة الرابعة غطّت الغيوم السماء. حزن آدم، فقالت الخالة: «اكتب: غيوم. الراصد الصادق يكتب ما رآه حقًّا، ولا يخترع».`, `On the fourth night, clouds covered the sky. Adam was disappointed, but Aunt Zaynab said, "Write: cloudy. An honest observer writes what they really saw, and never makes things up."`],
        ['☀️🌕', `بعد سبع ليالٍ وضع آدم البطاقة أمامه فرأى <b>نمطًا</b>: القمر يكبر قليلًا كلّ ليلة! شرحت الخالة: «القمر لا يضيء من نفسه؛ إنّه يعكس نور الشمس. ونحن نرى جزءًا أكبر من وجهه المضيء كلّ ليلة حتى يصير بدرًا».`, `After seven nights Adam laid the card in front of him and saw a <b>pattern</b>: the moon grew a little every night! Aunt Zaynab explained, "The moon doesn't shine by itself. It reflects the sun's light. Each night we see more of its lit-up face, until it becomes a full moon."`],
        ['🗓️🌙', `«ولهذا تبدأ الشهور الهجرية برؤية الهلال، ويكون البدر في منتصف الشهر تقريبًا، والشهر الهجريّ تسعة وعشرون يومًا أو ثلاثون. نحن نعرف رمضان والعيد من القمر!»`, `"That's why the Hijri months begin with sighting the new crescent, the full moon comes around the middle of the month, and a Hijri month is twenty-nine or thirty days long. We know Ramadan and Eid from the moon!"`]
      ],
      learn: [`<b>التسجيل المنتظم يكشف الأنماط:</b> ملاحظةٌ واحدة لا تخبرنا الكثير، لكنّ سبع ملاحظات مرتّبة تكشف قاعدة. والقمر <b>يعكس نور الشمس</b>، ويتغيّر شكله بنظامٍ دقيق: هلالٌ يكبر حتى يصير بدرًا، ثمّ يصغر، في نحو تسعة وعشرين يومًا ونصف.`, `<b>Regular recording reveals patterns:</b> one observation doesn't tell us much, but seven ordered observations reveal a rule. The moon <b>reflects the sun's light</b>, and its shape changes in a precise order: a crescent that grows into a full moon, then shrinks again, in about twenty-nine and a half days.`],
      islam: [`قال الله تعالى: ﴿وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ﴾ (يس: ٣٩). وقال: ﴿يَسْأَلُونَكَ عَنِ الْأَهِلَّةِ ۖ قُلْ هِيَ مَوَاقِيتُ لِلنَّاسِ وَالْحَجِّ﴾ (البقرة: ١٨٩). جعل الله القمر تقويمًا في السماء نعرف به أوقات عباداتنا.`, `Allah says: "And the moon, We have determined for it phases, until it returns like the old, curved date stalk." (Ya-Sin 36:39). And He says: "They ask you about the new moons. Say: They are measures of time for the people and for Hajj." (al-Baqarah 2:189). Allah made the moon a calendar in the sky, by which we know the times of our worship.`],
      src: ['يس: ٣٩ · البقرة: ١٨٩', 'Ya-Sin 36:39 · Al-Baqarah 2:189'],
      mission: [`<b>افتح مرصدك!</b> الأدوات: بطاقة «يوميات القمر» (ارسم ٧ خانات في دفترك إن لم تطبعها)، قلم رصاص، وأحد والديك للخروج ليلًا.<br>١. بعد صلاة العشاء اخرج مع أحد والديك إلى الشرفة أو الحديقة.<br>٢. ابحث عن القمر: هل هو هلالٌ رفيع؟ نصف؟ بدرٌ مكتمل؟<br>٣. ارسم شكله في خانة اليوم على بطاقتك.<br>٤. كرّر ذلك ٧ ليالٍ — ولا بأس إن غاب خلف الغيم، اكتب «غيوم».<br>٥. تأمّل رسوماتك: القمر يتغيّر كلّ ليلة بنظامٍ دقيقٍ قدّره الله.<br>🧒 للصغار: تكفي ٣ ليالٍ، ويمكن تلوين القمر بدل رسمه. 💪 تحدٍّ: تابع شهرًا كاملًا وحدّد متى كان البدر، وأيّ ليلةٍ هجريّة وافقها. ⚠️ لا تنظر إلى الشمس أبدًا، والخروج ليلًا مع الكبار فقط.`, `<b>Open your observatory!</b> Tools: the Moon Journal card (draw 7 boxes in your journal if you can't print it), a pencil, and a parent for going outside at night.<br>1. After Isha, go out with a parent to the balcony or garden.<br>2. Find the moon: is it a thin crescent? A half? A full moon?<br>3. Draw its shape in today's box on your card.<br>4. Repeat for 7 nights. If clouds hide it, that's fine, just write "cloudy".<br>5. Look at your drawings: the moon changes every night in a precise order that Allah decreed.<br>🧒 Little ones: 3 nights are enough, and you can colour the moon instead of drawing it. 💪 Challenge: track a whole month and find when the full moon was, and which Hijri night it fell on. ⚠️ Never look at the sun, and only go outside at night with an adult.`],
      q: [`من أين يأتي نور القمر؟`, `Where does the moon's light come from?`],
      o: [[`القمر يعكس نور الشمس`, `The moon reflects the sun's light`, 1], [`في داخل القمر نارٌ مشتعلة`, `There is a fire burning inside the moon`], [`القمر يأخذ نوره من مصابيح المدينة`, `The moon gets its light from the city's lamps`]],
      fb: [`صحيح! القمر لا يضيء من نفسه، بل يعكس نور الشمس، ولهذا نرى منه أجزاءً مختلفة في كلّ ليلة.`, `Correct! The moon doesn't shine by itself. It reflects the sun's light, which is why we see a different part of it each night.`],
      podcast: {
        title: [`تقويمٌ في السماء`, `A calendar in the sky`],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم الخالة زينب في بودكاست الصانع الصغير. ومعي اليوم راصدٌ فلكيّ صغير!`, `Assalamu alaikum, friends! This is Aunt Zaynab on The Little Maker podcast. And today I have a little astronomer with me!`],
          ['k', `وعليكم السلام! أنا آدم، وراقبتُ القمر سبع ليالٍ متتالية!`, `Wa alaikum assalam! I'm Adam, and I watched the moon for seven nights in a row!`],
          ['h', `سبع ليالٍ! وماذا اكتشفت؟`, `Seven nights! And what did you discover?`],
          ['k', `اكتشفتُ أنّ القمر يكبر قليلًا كلّ ليلة. في الأولى كان رفيعًا كالقوس، وفي السابعة صار قريبًا من النصف.`, `I discovered that the moon gets a little bigger every night. On the first night it was as thin as a bow, and by the seventh it was nearly half.`],
          ['h', `هذا اسمه نمط. لو نظرتَ ليلةً واحدة فقط، هل كنتَ ستكتشفه؟`, `That's called a pattern. If you'd looked only one night, would you have discovered it?`],
          ['k', `لا! احتجتُ أن أسجّل كلّ ليلة وأقارن الرسومات.`, `No! I needed to record every night and compare the drawings.`],
          ['h', `أحسنت. وماذا فعلتَ في ليلة الغيوم؟`, `Well done. And what did you do on the cloudy night?`],
          ['k', `كتبتُ: غيوم. لم أرسم قمرًا لم أره.`, `I wrote: cloudy. I didn't draw a moon I hadn't seen.`],
          ['h', `هذه أمانة الراصد. والآن سؤالٌ كبير: هل القمر مصباحٌ يضيء من نفسه؟`, `That's an observer's honesty. Now a big question: is the moon a lamp that shines by itself?`],
          ['k', `لا يا خالة. إنّه يعكس نور الشمس، مثل مرآةٍ كبيرة في السماء.`, `No, Aunt Zaynab. It reflects the sun's light, like a big mirror in the sky.`],
          ['h', `صحيح. وفي سورة يس يقول الله تعالى: والقمر قدّرناه منازل. يعني جعل له مراحل دقيقة، ليلةً بعد ليلة.`, `Right. In Surat Ya-Sin Allah says: And the moon, We have determined for it phases. He gave it precise stages, night after night.`],
          ['k', `ولهذا نعرف بداية رمضان من رؤية الهلال؟`, `Is that why we know when Ramadan starts by sighting the crescent?`],
          ['h', `نعم. الشهر الهجريّ يبدأ بالهلال، ويكون تسعة وعشرين يومًا أو ثلاثين. القمر تقويمٌ جعله الله في السماء للناس كلّهم.`, `Yes. The Hijri month starts with the crescent and lasts twenty-nine or thirty days. The moon is a calendar Allah placed in the sky for all people.`],
          ['k', `سأتابع حتى البدر، وأعرف في أيّ ليلةٍ هجريّة يكون!`, `I'll keep going until the full moon, and find out which Hijri night it falls on!`],
          ['h', `مهمّة اليوم: اخرج مع أحد والديك بعد العشاء، وارسم شكل القمر في دفترك، وكرّر ذلك سبع ليالٍ. إلى اللقاء!`, `Today's mission: go out with a parent after Isha, draw the moon's shape in your journal, and repeat for seven nights. See you soon!`],
          ['k', `تصبحون على خير يا أصدقاء! انظروا إلى السماء الليلة!`, `Good night, friends! Look up at the sky tonight!`]
        ]
      }
    },

    /* ───────── 6. Garden safari ───────── */
    {
      id: 'safari', icon: '🐜', tag: 'discover',
      t: ['سفاري الحديقة الصغير', 'The garden safari'],
      sub: ['المستكشف هادئ وصبور ولا يؤذي', 'An explorer is quiet, patient and gentle'],
      pg: [
        ['🌳🔍', `قالت الخالة زينب: «اليوم لن نصنع بأيدينا، بل سنصنع بأعيننا!» وخرجت مع آدم وليلى إلى الحديقة القريبة، ومعهم بطاقة «سفاري الحديقة» وقلمٌ وعدسةٌ مكبّرة.`, `"Today we won't make with our hands," said Aunt Zaynab. "We'll make with our eyes!" She went out with Adam and Layla to the nearby park, with a Garden Safari card, a pencil and a magnifying glass.`],
        ['🤫⏱️', `قالت: «قاعدة المستكشف الأولى: قف ساكنًا دقيقةً كاملة». وقف آدم بلا حركة… ففجأة ظهر عصفورٌ على الغصن، ونحلةٌ على زهرة، وخطٌّ طويلٌ من النمل على الرصيف!`, `"The explorer's first rule," she said, "is to stand still for one whole minute." Adam stood without moving… and suddenly a sparrow appeared on a branch, a bee on a flower, and a long line of ants on the path!`],
        ['🐜🍞', `اختار آدم نملةً واحدة وراقبها دقيقتين. كانت تحمل فتاتةَ خبزٍ أكبر منها! قالت الخالة: «النملة تحمل أضعاف وزنها، وتترك أثرًا من رائحةٍ خاصّة لتتبعه أخواتها إلى الطعام».`, `Adam picked one ant and watched it for two minutes. It was carrying a breadcrumb bigger than itself! "An ant can carry many times its own weight," said Aunt Zaynab, "and it leaves a special scent trail so its sisters can follow it to the food."`],
        ['📋🔢', `على البطاقة سجّل آدم بالخطوط: ||||| نمل، ||| عصافير، || فراشات، | نحلة. أمّا ليلى فبحثت عن شيءٍ واحد فقط، النمل، وعدّته بأصابعها.`, `On the card Adam kept a tally with lines: ||||| ants, ||| birds, || butterflies, | bee. Layla hunted for just one thing, ants, and counted them on her fingers.`],
        ['👑🐜', `في طريق العودة حكت الخالة قصّة نملةٍ في القرآن رأت جيش سليمان عليه السلام قادمًا، فنادت أخواتها ليدخلن بيوتهنّ حتى لا يُدسن. فتبسّم سليمان من قولها. قال آدم: «لن أدوس نملةً بعد اليوم!»`, `On the way home, Aunt Zaynab told the story of an ant in the Quran who saw the army of Sulayman, peace be upon him, approaching, and called to the other ants to go into their homes so they wouldn't be crushed. Sulayman smiled at her words. "I'll never step on an ant again!" said Adam.`]
      ],
      learn: [`<b>الملاحظة الهادئة والعدّ:</b> المستكشف يقف ساكنًا، ويركّز على شيءٍ واحد، ويسجّل بالأرقام أو بخطوط العدّ. هكذا يعمل علماء الطبيعة: ينظرون طويلًا، ويعدّون بدقّة، و<b>لا يؤذون</b> المخلوقات.`, `<b>Quiet observing and counting:</b> an explorer stands still, focuses on one thing, and records with numbers or tally marks. That's how nature scientists work: they look for a long time, count carefully, and <b>never harm</b> the creatures.`],
      islam: [`قال الله تعالى: ﴿حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ﴾ (النمل: ١٨). وقال: ﴿وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا﴾ (هود: ٦). كلّ نملةٍ وعصفور يرزقه الله، ونحن نرفق بها ولا نؤذيها.`, `Allah says: "Until, when they came upon the valley of the ants, an ant said: O ants, enter your dwellings so that Sulayman and his soldiers do not crush you while they do not notice." (an-Naml 27:18). And He says: "There is no creature on earth but that upon Allah is its provision." (Hud 11:6). Allah provides for every ant and bird, and we are gentle with them and never hurt them.`],
      src: ['النمل: ١٨ · هود: ٦', 'An-Naml 27:18 · Hud 11:6'],
      mission: [`<b>انطلق في سفاري!</b> الأدوات: بطاقة «سفاري الحديقة» (أو صفحةٌ في دفترك)، قلم، عدسةٌ مكبّرة (اختياري).<br>١. اخرج إلى الحديقة أو أقرب مساحةٍ خضراء مع أحد الأهل.<br>٢. قف ساكنًا دقيقةً كاملة — المستكشف الجيّد هادئ.<br>٣. ابحث عن: نملة، عصفور، فراشة أو نحلة، ورقةٍ غريبة الشكل.<br>٤. سجّل على بطاقتك بخطوط العدّ كم رأيت من كلّ نوع.<br>٥. راقب نملةً واحدة دقيقتين: إلى أين تذهب؟ ماذا تحمل؟ لا تؤذِها.<br>🧒 للصغار: ابحثوا عن شيءٍ واحد فقط، النمل، وعدّوه بأصابعكم. 💪 تحدٍّ: اختر مخلوقًا واحدًا وابحث عنه مع أهلك: ماذا يأكل؟ أين يبيت؟ ⚠️ ننظر ولا نلمس النحل ولا الحشرات، ونغسل أيدينا بعد العودة.`, `<b>Go on safari!</b> Tools: the Garden Safari card (or a page in your journal), a pencil, a magnifying glass (optional).<br>1. Go to the garden or the nearest green space with a family member.<br>2. Stand still for one whole minute. A good explorer is quiet.<br>3. Look for: an ant, a bird, a butterfly or bee, an oddly shaped leaf.<br>4. On your card, keep a tally of how many of each you see.<br>5. Watch one ant for two minutes: where is it going? What is it carrying? Don't harm it.<br>🧒 Little ones: hunt for just one thing, ants, and count them on your fingers. 💪 Challenge: choose one creature and research it with your family: what does it eat? Where does it sleep? ⚠️ We look but don't touch bees or insects, and we wash our hands when we get home.`],
      q: [`ما أوّل قاعدةٍ للمستكشف في السفاري؟`, `What is an explorer's first rule on safari?`],
      o: [[`أن يجري بسرعة ليرى أكثر`, `Run fast to see more`], [`أن يمسك الحشرات ليراها عن قرب`, `Catch the insects to see them up close`], [`أن يقف ساكنًا وهادئًا ولا يؤذي شيئًا`, `Stand still and quiet, and harm nothing`, 1]],
      fb: [`أحسنت! حين نهدأ تظهر المخلوقات، وحين نرفق بها نكون مستكشفين حقيقيين يحبّون خلق الله.`, `Well done! When we are calm, the creatures appear, and when we are gentle with them, we are real explorers who love Allah's creation.`],
      podcast: {
        title: [`نملةٌ في القرآن`, `An ant in the Quran`],
        lines: [
          ['h', `السلام عليكم يا مستكشفينا! معكم الخالة زينب، ومعي آدم عائدٌ من رحلة سفاري!`, `Assalamu alaikum, explorers! This is Aunt Zaynab, and Adam is back from a safari!`],
          ['k', `وعليكم السلام! لكنّها سفاري في الحديقة، بلا أسود ولا فيلة!`, `Wa alaikum assalam! But it was a garden safari, with no lions or elephants!`],
          ['h', `لكنّ الحديقة مليئةٌ بالعجائب. ماذا رأيت؟`, `But a garden is full of wonders. What did you see?`],
          ['k', `في البداية لا شيء! ثمّ وقفتُ ساكنًا دقيقةً كاملة، فظهر كلّ شيء: عصافير ونحلة وخطٌّ طويلٌ من النمل.`, `At first, nothing! Then I stood still for a whole minute and everything appeared: birds, a bee and a long line of ants.`],
          ['h', `هذا سرّ المستكشف. الحيوانات تختبئ من الضجيج، وتظهر حين نهدأ.`, `That's the explorer's secret. Animals hide from noise and come out when we're calm.`],
          ['k', `وراقبتُ نملةً تحمل فتاتة خبزٍ أكبر منها! كيف تستطيع ذلك يا خالة؟`, `And I watched an ant carrying a breadcrumb bigger than itself! How can it do that, Aunt Zaynab?`],
          ['h', `النملة قويّةٌ جدًّا بالنسبة لحجمها، تحمل أضعاف وزنها. وتترك رائحةً خاصّة على الأرض، فتتبعها أخواتها إلى الطعام.`, `An ant is very strong for its size. It can carry many times its own weight. And it leaves a special scent on the ground, so its sisters can follow it to the food.`],
          ['k', `يعني النمل يتكلّم بالرائحة؟`, `So ants talk using smells?`],
          ['h', `بطريقةٍ ما، نعم! وكيف عددتَ كلّ ما رأيت؟`, `In a way, yes! And how did you count everything you saw?`],
          ['k', `بخطوط العدّ. كلّ نملةٍ خطّ، وكلّ عصفورٍ خطّ.`, `With tally marks. One line for each ant, one line for each bird.`],
          ['h', `ممتاز. وهل تعرف أنّ في القرآن سورةً اسمها النمل؟ فيها نملةٌ رأت جيش سليمان، فقالت: يا أيّها النمل ادخلوا مساكنكم.`, `Excellent. And did you know there's a surah in the Quran called an-Naml, the Ants? In it, an ant saw Sulayman's army and said: O ants, enter your dwellings.`],
          ['k', `نملةٌ تحمي أخواتها! وتبسّم سليمان من كلامها، صحيح؟`, `An ant protecting her sisters! And Sulayman smiled at what she said, right?`],
          ['h', `صحيح. والله يرزق كلّ نملةٍ وكلّ عصفور. ولهذا لا نؤذي المخلوقات الصغيرة، بل ننظر ونتعلّم.`, `Right. And Allah provides for every ant and every bird. That's why we don't hurt small creatures. We watch and learn.`],
          ['k', `أعدكِ يا خالة، لن أدوس نملةً أبدًا.`, `I promise, Aunt Zaynab, I'll never step on an ant.`],
          ['h', `مهمّة اليوم: اخرج مع أحد أهلك إلى الحديقة، وقف ساكنًا دقيقة، وسجّل بخطوط العدّ ما تراه من مخلوقات. إلى اللقاء!`, `Today's mission: go to the garden with a family member, stand still for a minute, and tally the creatures you see. See you soon!`],
          ['k', `مع السلامة يا مستكشفين! كونوا هادئين ولطفاء!`, `Goodbye, explorers! Be quiet and be kind!`]
        ]
      }
    },

    /* ───────── 7. My room, my kingdom ───────── */
    {
      id: 'room', icon: '🛏️', tag: 'home',
      t: ['غرفتي مملكتي المرتّبة', 'My room, my tidy kingdom'],
      sub: ['لكلّ شيءٍ بيت، ولكلّ يومٍ خطّة', 'Everything has a home, every day has a plan'],
      pg: [
        ['🧸🌪️', `بعد كلّ هذه الصنائع صارت غرفة آدم كأنّ إعصارًا مرّ بها: ورقٌ مقصوص، وأقلامٌ تحت السرير، وجوربٌ واحد فوق المكتب! بحث آدم عن الصمغ ربع ساعة ولم يجده.`, `After all those makes, Adam's room looked as if a tornado had passed through: paper scraps, crayons under the bed, and a single sock on the desk! Adam searched for the glue for a quarter of an hour and couldn't find it.`],
        ['🧰📦', `قالت الخالة زينب: «انظر إلى صندوق الصانع: لكلّ أداةٍ مكانها، ولهذا أجد المقصّ في ثانية. الورشة المرتّبة تصنع أسرع. وغرفتك ورشتك ومملكتك!»`, `"Look at the Maker's Box," said Aunt Zaynab. "Every tool has its own place, so I can find the scissors in a second. A tidy workshop makes things faster. And your room is your workshop and your kingdom!"`],
        ['🏷️🧺', `صنعا معًا لافتاتٍ صغيرة: «بيت الأقلام»، «بيت الألعاب»، «بيت الكتب». وقرّرا ثلاث مهامّ يومية: ترتيب السرير صباحًا، وإعادة كلّ لعبةٍ إلى بيتها، ووضع الملابس المتّسخة في السلّة.`, `Together they made little labels: "Crayon house", "Toy house", "Book house". And they chose three daily jobs: make the bed in the morning, return every toy to its home, and put dirty clothes in the basket.`],
        ['📋✅', `علّقت الخالة جدولًا فيه سبعة أيام. كلّ مساء يضع آدم علامة ✓ إذا أنجز مهامّه. في اليوم الثالث نسي السرير، فقالت الخالة: «لا بأس، غدًا يومٌ جديد. المهمّ أن نكمل».`, `Aunt Zaynab put up a chart with seven days. Every evening Adam ticked ✓ if he had done his jobs. On day three he forgot the bed. "That's fine," said Aunt Zaynab. "Tomorrow is a new day. What matters is that we keep going."`],
        ['🏆👑', `في اليوم السابع دخلت الأمّ فابتسمت: «ما أجمل مملكتك يا آدم!» وحكت له الخالة أنّ النبيّ ﷺ كان في بيته يساعد أهله، فإذا حضرت الصلاة خرج إليها.`, `On day seven, his mother came in and smiled. "What a beautiful kingdom, Adam!" And Aunt Zaynab told him that the Prophet ﷺ used to help his family at home, and when the time for prayer came, he went out to pray.`]
      ],
      learn: [`<b>التنظيم والتخطيط:</b> «لكلّ شيءٍ بيت» قاعدةٌ تجعل البحث سهلًا والعمل أسرع. و<b>العادة</b> تُبنى بالتكرار: مهامّ قليلة وواضحة، وجدولٌ نراه كلّ يوم، وبدايةٌ جديدة إذا نسينا مرّة.`, `<b>Organising and planning:</b> "Everything has a home" is a rule that makes finding things easy and work faster. A <b>habit</b> is built by repeating: a few clear jobs, a chart we can see every day, and a fresh start if we forget once.`],
      islam: [`قال النبيّ ﷺ: «إنّ اللهَ جميلٌ يحبّ الجمال». وسُئلت عائشة رضي الله عنها: ما كان النبيّ ﷺ يصنع في بيته؟ قالت: «كان يكون في مِهنة أهله» — تعني في خدمة أهله — «فإذا حضرت الصلاة خرج إلى الصلاة».`, `The Prophet ﷺ said: "Allah is beautiful and loves beauty." And Aishah, may Allah be pleased with her, was asked what the Prophet ﷺ used to do at home. She said: "He used to be busy serving his family, and when the time for prayer came, he would go out to pray."`],
      src: ['صحيح مسلم، رقم ٩١ · صحيح البخاري، رقم ٦٧٦', 'Sahih Muslim, no. 91 · Sahih al-Bukhari, no. 676'],
      mission: [`<b>ابنِ مملكتك المرتّبة!</b> الأدوات: جدول «مهاراتي المنزلية» (أو جدولٌ ترسمه في دفترك بسبعة أيام)، وهمّةٌ عالية.<br>١. كلّ صباحٍ بعد الاستيقاظ: رتّب سريرك أوّل شيء.<br>٢. أعِد كلّ لعبةٍ إلى مكانها بعد اللعب — لكلّ شيءٍ بيت.<br>٣. ضع ملابسك المتّسخة في السلّة بنفسك.<br>٤. ضع علامة ✓ في جدولك كلّ مساء: هل أنجزت مهامّ اليوم؟<br>٥. أكمل ٧ أيامٍ متتالية — وأنت بطل الترتيب في البيت! وإن نسيت يومًا، ابدأ من جديد بلا حزن.<br>🧒 للصغار: مهمّتان فقط، السرير والألعاب. 💪 تحدٍّ: أضف مهمّةً أسبوعية: ترتيب خزانتك أو رفّ كتبك كلّ جمعة. 📔 صوّر غرفتك قبل وبعد، والصق الصورتين في دفتر الصانع.`, `<b>Build your tidy kingdom!</b> Tools: the Home Skills chart (or a seven-day chart you draw in your journal), and lots of energy.<br>1. Every morning when you wake up: make your bed first thing.<br>2. Return every toy to its place after playing. Everything has a home.<br>3. Put your dirty clothes in the basket yourself.<br>4. Tick your chart every evening: did you finish today's jobs?<br>5. Complete 7 days in a row, and you're the home's tidiness champion! If you forget a day, just start again without feeling sad.<br>🧒 Little ones: just two jobs, the bed and the toys. 💪 Challenge: add a weekly job: tidy your wardrobe or bookshelf every Friday. 📔 Take a before and after photo of your room and stick both in your Maker's Journal.`],
      q: [`نسي آدم ترتيب سريره في اليوم الثالث. ماذا يفعل الصانع الحكيم؟`, `Adam forgot to make his bed on day three. What does a wise maker do?`],
      o: [[`يكمل غدًا ويبدأ من جديد بلا حزن`, `Carries on tomorrow and starts fresh without feeling sad`, 1], [`يترك الجدول كلّه لأنّه أخطأ`, `Gives up the whole chart because he made a mistake`], [`يمزّق الجدول ويرسم جديدًا كلّ يوم`, `Tears up the chart and draws a new one every day`]],
      fb: [`أحسنت! العادات تُبنى بالمحاولة بعد المحاولة. يومٌ منسيّ لا يهدم المملكة، المهمّ أن نكمل.`, `Well done! Habits are built try after try. One forgotten day doesn't knock down the kingdom. What matters is that we keep going.`],
      podcast: {
        title: [`لكلّ شيءٍ بيت`, `Everything has a home`],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم الخالة زينب. ومعي اليوم ملكٌ صغير لمملكةٍ مرتّبة!`, `Assalamu alaikum, friends! This is Aunt Zaynab. And today I'm with the little king of a very tidy kingdom!`],
          ['k', `وعليكم السلام! أنا آدم، ومملكتي هي غرفتي. لكنّها لم تكن مرتّبةً أبدًا من قبل!`, `Wa alaikum assalam! I'm Adam, and my kingdom is my room. But it was never tidy before!`],
          ['h', `صحيح. أذكر أنّك بحثتَ عن الصمغ ربع ساعة!`, `True. I remember you searched for the glue for a quarter of an hour!`],
          ['k', `ووجدته في النهاية تحت الوسادة! لا أعرف كيف وصل إلى هناك.`, `And in the end I found it under my pillow! I have no idea how it got there.`],
          ['h', `هذا ما يحدث عندما لا يكون للأشياء بيت. لكلّ شيءٍ بيت يا آدم، فإذا انتهيتَ منه أعدته إلى بيته.`, `That's what happens when things don't have a home. Everything has a home, Adam. When you've finished with something, you put it back home.`],
          ['k', `ولهذا صنعنا لافتات: بيت الأقلام، وبيت الألعاب، وبيت الكتب.`, `That's why we made labels: crayon house, toy house and book house.`],
          ['h', `بالضبط. والآن أخبرني عن الجدول. ما مهامّك اليومية؟`, `Exactly. Now tell me about the chart. What are your daily jobs?`],
          ['k', `ثلاث مهامّ: السرير في الصباح، والألعاب بعد اللعب، والملابس المتّسخة في السلّة.`, `Three jobs: the bed in the morning, toys after playing, and dirty clothes in the basket.`],
          ['h', `ثلاث مهامّ فقط، وليست عشرًا. لماذا تظنّ ذلك؟`, `Only three jobs, not ten. Why do you think that is?`],
          ['k', `لأنّ المهامّ القليلة أسهل أن أتذكّرها كلّ يوم؟`, `Because a few jobs are easier to remember every day?`],
          ['h', `صحيح. هكذا تُبنى العادة: قليلٌ دائم. وماذا حدث في اليوم الثالث؟`, `Right. That's how a habit is built: a little, every day. And what happened on day three?`],
          ['k', `نسيتُ السرير! لكنّكِ قلتِ: غدًا يومٌ جديد. فأكملتُ حتى اليوم السابع.`, `I forgot the bed! But you said: tomorrow is a new day. So I kept going until day seven.`],
          ['h', `وهذا أهمّ من أن يكون كلّ شيءٍ كاملًا. وهل تعرف أنّ النبيّ صلّى الله عليه وسلّم كان يساعد أهله في البيت؟ هكذا أخبرتنا أمّنا عائشة.`, `And that matters more than being perfect. Did you know the Prophet, peace be upon him, used to help his family at home? That's what our mother Aishah told us.`],
          ['k', `إذن ترتيب غرفتي من السنّة! والنبيّ قال أيضًا: إنّ الله جميلٌ يحبّ الجمال.`, `So tidying my room is following the Sunnah! And the Prophet also said: Allah is beautiful and loves beauty.`],
          ['h', `مهمّة اليوم: اختر ثلاث مهامّ صغيرة لغرفتك، وارسم لها جدولًا بسبعة أيام، وابدأ غدًا صباحًا بسريرك. إلى اللقاء!`, `Today's mission: pick three small jobs for your room, draw a seven-day chart, and start tomorrow morning with your bed. See you soon!`],
          ['k', `مع السلامة يا ملوك الممالك المرتّبة!`, `Goodbye, kings and queens of tidy kingdoms!`]
        ]
      }
    },

    /* ───────── 8. My first dish ───────── */
    {
      id: 'cook', icon: '🥗', tag: 'home',
      t: ['طبقي الأوّل بيدي', 'My first dish'],
      sub: ['نظافة، سلامة، وعملٌ مع الكبار', 'Clean hands, safety and teamwork'],
      pg: [
        ['🍳🙋', `قال آدم: «يا خالة، صنعتُ فانوسًا وكعبةً ومصفاة. أريد أن أصنع شيئًا يُؤكل!» قالت الخالة: «فكرةٌ لذيذة! لكنّ للمطبخ قوانين، والصانع يحترم القوانين».`, `"Aunt Zaynab," said Adam, "I've made a lantern, a Kaaba and a filter. I want to make something you can eat!" "A delicious idea!" said Aunt Zaynab. "But the kitchen has rules, and a maker respects the rules."`],
        ['🧼📜', `عدّت القوانين على أصابعها: «أوّلًا: نغسل أيدينا بالماء والصابون ونسمّي الله. ثانيًا: السكّين الحادّة والموقد والماء الساخن مع الكبار فقط. ثالثًا: نغسل الخضار قبل التقطيع».`, `She counted the rules on her fingers. "One: we wash our hands with soap and water and say Bismillah. Two: sharp knives, the stove and hot water only with an adult. Three: we wash the vegetables before cutting."`],
        ['🥒🔪', `أعطت آدم سكّينًا بلاستيكية آمنة، فقطّع الخيار الطريّ قطعًا صغيرة. أمّا الجزر الصلب فقطّعته الخالة. وغسلت ليلى الطماطم وخلطت كلّ شيء في الوعاء الكبير.`, `She gave Adam a safe plastic knife, and he chopped the soft cucumber into little pieces. Aunt Zaynab cut the hard carrots. Layla washed the tomatoes and mixed everything in the big bowl.`],
        ['🍋🥣', `أضاف آدم قليلًا من الليمون والزيت، ورتّب طبقًا جميلًا بألوان الخضار. قالت الخالة: «والآن أجمل خطوة في الوصفة: نشارك!»`, `Adam added a squeeze of lemon and a little oil, and arranged a beautiful plate with all the colours of the vegetables. "And now," said Aunt Zaynab, "the best step of the recipe: we share!"`],
        ['🚪😊', `حمل آدم الطبق مع أمّه إلى جارتهم أمّ خالد، وقال بابتسامة: «السلام عليكم، هذا من صنع يدي!» فرحت الجارة كثيرًا، وعاد آدم يشعر أنّ قلبه أكبر من الطبق.`, `Adam carried the plate with his mother to their neighbour, Umm Khalid, and said with a smile, "Assalamu alaikum, I made this myself!" The neighbour was delighted, and Adam came home feeling his heart was bigger than the plate.`]
      ],
      learn: [`<b>في المطبخ يتعلّم الصانع ثلاث مهارات:</b> النظافة (غسل اليدين والخضار)، والسلامة (الأدوات الخطرة مع الكبار)، و<b>العمل في فريق</b>: كلٌّ يأخذ مهمّةً تناسبه. وقبل أن نشارك الطعام نسأل الكبار إن كان عند أحدٍ حساسيةٌ من شيء.`, `<b>In the kitchen a maker learns three skills:</b> cleanliness (washing hands and vegetables), safety (risky tools only with adults), and <b>teamwork</b>: everyone takes a job that suits them. And before sharing food, we ask an adult whether anyone is allergic to something.`],
      islam: [`قال النبيّ ﷺ: «ما زال جبريلُ يوصيني بالجار حتى ظننتُ أنّه سيورّثه». وقال لغلامٍ صغير: «يا غلام، سمِّ الله، وكُلْ بيمينك، وكُلْ ممّا يليك». فالطبق الذي نصنعه ونهديه للجار عبادةٌ وفرح.`, `The Prophet ﷺ said: "Jibril kept advising me about the neighbour until I thought he would make him an heir." And he told a young boy: "Young man, say Bismillah, eat with your right hand, and eat from what is in front of you." So a dish we make and give to a neighbour is both worship and joy.`],
      src: ['صحيح البخاري ٦٠١٤، صحيح مسلم ٢٦٢٤ · صحيح البخاري ٥٣٧٦، صحيح مسلم ٢٠٢٢', 'Sahih al-Bukhari 6014, Sahih Muslim 2624 · Sahih al-Bukhari 5376, Sahih Muslim 2022'],
      mission: [`<b>اصنع طبقك الأوّل — مع أحد الكبار!</b> الأدوات: خضارٌ أو فواكه مغسولة، سكّينٌ بلاستيكية آمنة (والكبار يقطعون الصعب)، وعاءٌ كبير، طبقٌ جميل للجيران.<br>١. اغسل يديك بالماء والصابون وسمِّ الله.<br>٢. قطّع الخضار الطريّة بسكّينك الآمنة — والكبار يساعدونك في الباقي.<br>٣. اخلط كلّ شيءٍ في الوعاء وأضف قليلًا من الليمون والزيت.<br>٤. رتّب طبقًا جميلًا واحمله مع أحد والديك إلى الجيران.<br>٥. سلّم عليهم بابتسامة: «هذا من صنع يدي!»<br>🧒 للصغار: اغسلوا الخضار واخلطوا وزيّنوا الطبق. 💪 تحدٍّ: خطّط مع أهلك وجبةً بسيطة كاملة وأشرف على تحضيرها من البداية إلى النهاية. ⚠️ لا سكّين حادّة ولا موقد ولا ماء ساخن إلا مع كبير، ونسأل عن الحساسية قبل الإهداء. 📔 ارسم طبقك واكتب وصفتك في دفتر الصانع.`, `<b>Make your first dish, with an adult!</b> Tools: washed vegetables or fruit, a safe plastic knife (adults cut the hard parts), a big bowl, a nice plate for the neighbours.<br>1. Wash your hands with soap and water and say Bismillah.<br>2. Chop the soft vegetables with your safe knife. Adults help with the rest.<br>3. Mix everything in the bowl and add a little lemon and oil.<br>4. Arrange a beautiful plate and carry it with a parent to the neighbours.<br>5. Greet them with a smile: "I made this myself!"<br>🧒 Little ones: wash the vegetables, mix, and decorate the plate. 💪 Challenge: plan a simple full meal with your family and lead its preparation from start to finish. ⚠️ No sharp knives, stove or hot water without an adult, and we ask about allergies before giving food. 📔 Draw your dish and write your recipe in your Maker's Journal.`],
      q: [`أراد آدم تقطيع الجزر الصلب. ما التصرّف الصحيح؟`, `Adam wanted to cut the hard carrots. What is the right thing to do?`],
      o: [[`يأخذ أحدّ سكّينٍ في المطبخ وحده`, `Take the sharpest knife in the kitchen by himself`], [`يطلب من شخصٍ كبير أن يقطّعه أو يساعده`, `Ask an adult to cut them or help him`, 1], [`يضع الجزر على الموقد حتى يلين`, `Put the carrots on the stove until they go soft`]],
      fb: [`أحسنت! الصانع الذكيّ يعرف حدوده: السكاكين الحادّة والموقد مع الكبار فقط. العمل في فريقٍ آمنٌ وممتع.`, `Well done! A smart maker knows their limits: sharp knives and the stove are only for working with adults. Teamwork is safe and fun.`],
      podcast: {
        title: [`وصفةٌ فيها مشاركة`, `A recipe with sharing in it`],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم الخالة زينب في بودكاست الصانع الصغير. آدم، أشمّ رائحة ليمون!`, `Assalamu alaikum, friends! This is Aunt Zaynab on The Little Maker podcast. Adam, I can smell lemon!`],
          ['k', `وعليكم السلام! صنعتُ أوّل طبقٍ في حياتي: سلطةً ملوّنة!`, `Wa alaikum assalam! I made the first dish of my life: a colourful salad!`],
          ['h', `ما شاء الله! لكن قبل الطبخ، ما أوّل قانونٍ في المطبخ؟`, `Masha'Allah! But before cooking, what's the first kitchen rule?`],
          ['k', `نغسل أيدينا بالماء والصابون، ونقول بسم الله.`, `We wash our hands with soap and water, and say Bismillah.`],
          ['h', `أحسنت. والنبيّ صلّى الله عليه وسلّم علّم غلامًا صغيرًا فقال: يا غلام، سمِّ الله، وكُل بيمينك، وكُل ممّا يليك.`, `Well done. The Prophet, peace be upon him, taught a young boy and said: young man, say Bismillah, eat with your right hand, and eat from what is in front of you.`],
          ['k', `وأنا قطّعتُ الخيار بسكّينٍ بلاستيكية. لكنّ الجزر كان صلبًا جدًّا.`, `And I chopped the cucumber with a plastic knife. But the carrots were really hard.`],
          ['h', `فماذا فعلت؟`, `So what did you do?`],
          ['k', `طلبتُ منكِ أن تقطّعيه. لأنّ السكّين الحادّة مع الكبار فقط.`, `I asked you to cut them. Because sharp knives are only with grown-ups.`],
          ['h', `هذا تصرّف صانعٍ حكيم. وكذلك الموقد والماء الساخن. في المطبخ نعمل فريقًا، وكلّ واحدٍ يأخذ مهمّةً تناسبه.`, `That's what a wise maker does. The same goes for the stove and hot water. In the kitchen we work as a team, and everyone takes a job that suits them.`],
          ['k', `ليلى غسلت الطماطم وخلطت، وأنا قطّعتُ ورتّبتُ الطبق.`, `Layla washed the tomatoes and mixed, and I chopped and arranged the plate.`],
          ['h', `وما الخطوة الأخيرة في وصفتنا؟`, `And what was the last step in our recipe?`],
          ['k', `المشاركة! أخذتُ طبقًا مع أمّي إلى جارتنا أمّ خالد.`, `Sharing! I took a plate with my mum to our neighbour, Umm Khalid.`],
          ['h', `والجار له حقٌّ كبير. قال النبيّ صلّى الله عليه وسلّم: ما زال جبريل يوصيني بالجار حتى ظننتُ أنّه سيورّثه.`, `And a neighbour has a great right. The Prophet, peace be upon him, said: Jibril kept advising me about the neighbour until I thought he would make him an heir.`],
          ['k', `وقد سألنا أمّ خالد أوّلًا إن كانت عندها حساسية من شيء. ففرحت كثيرًا!`, `And we asked Umm Khalid first if she was allergic to anything. She was so happy!`],
          ['h', `مهمّة اليوم: اصنع مع أحد الكبار طبقًا بسيطًا من الخضار أو الفواكه، وأهدِ جزءًا منه لجيرانكم. إلى اللقاء!`, `Today's mission: with an adult, make a simple dish of vegetables or fruit, and give part of it to your neighbours. See you soon!`],
          ['k', `مع السلامة يا أصدقاء! صحّة وعافية!`, `Goodbye, friends! Enjoy your food!`]
        ]
      }
    },

    /* ───────── 9. My secret sadaqah box ───────── */
    {
      id: 'sadaqabox', icon: '🎁', tag: 'khair',
      t: ['صندوق صدقتي السرّيّ', 'My secret sadaqah box'],
      sub: ['أدّخر قليلًا كلّ يوم ثمّ أعطي', 'Save a little every day, then give'],
      pg: [
        ['🫙🎨', `قالت الخالة زينب: «صنعنا أشياء نراها ونلمسها. اليوم سنصنع شيئًا يكبر في السرّ!» وأخرجت مرطبانًا فارغًا نظيفًا وأوراق تزيين.`, `"We've made things we can see and touch," said Aunt Zaynab. "Today we'll make something that grows in secret!" She took out an empty, clean jar and some decorating paper.`],
        ['✂️🪙', `زيّن آدم المرطبان بالنجوم والأهلّة وكتب عليه: «صدقتي السرّية». ثمّ فتحت الخالة بالمقصّ شقًّا صغيرًا في الغطاء، يتّسع لقطعةٍ نقدية واحدة.`, `Adam decorated the jar with stars and crescents and wrote on it: "My secret sadaqah". Then Aunt Zaynab used the scissors to cut a small slot in the lid, just wide enough for one coin.`],
        ['🗓️➕', `قرّر آدم أن يضع قطعةً من مصروفه كلّ يوم. وحسب في دفتره: «قطعةٌ واحدة كلّ يوم، في سبعة أيام تصير سبع قطع. وفي رمضان كلّه ثلاثون قطعة تقريبًا!» قالت الخالة: «هذا هو <b>الادّخار</b>: القليل الدائم يصير كثيرًا».`, `Adam decided to put in one coin from his pocket money every day. He worked it out in his journal: "One coin a day makes seven coins in seven days. And in the whole of Ramadan, about thirty coins!" "That is <b>saving</b>," said Aunt Zaynab. "A little, every day, becomes a lot."`],
        ['🤫💚', `قالت: «وسرّ هذا الصندوق أنّه بينك وبين الله. لا نتفاخر بما وضعنا، ولا نحكي لأصدقائنا كم جمعنا». فوضعه آدم في درجه، وصار يضع القطعة بهدوءٍ كلّ مساء.`, `"And the secret of this box," she said, "is that it's between you and Allah. We don't show off what we put in, and we don't tell our friends how much we've saved." So Adam kept it in his drawer and quietly dropped in a coin each evening.`],
        ['🕌🤲', `بعد أسابيع امتلأ المرطبان. ذهب آدم مع أبيه إلى صندوق التبرّعات في المسجد، وأفرغه بيده. لم يعرف أحدٌ كم وضع، لكنّ آدم كان يعرف أنّ الله يعلم.`, `After a few weeks the jar was full. Adam went with his father to the donation box at the masjid and emptied it in with his own hand. Nobody knew how much he gave, but Adam knew that Allah knows.`]
      ],
      learn: [`<b>الادّخار:</b> أن نحتفظ بجزءٍ صغير بانتظام حتى يكبر، ونعدّه ونحسبه. و<b>العطاء</b> أجمل غايةٍ للادّخار. الصانع يصنع الأشياء، والمؤمن يصنع الخير أيضًا.`, `<b>Saving</b> means regularly keeping a small part aside until it grows, and counting and calculating it. And <b>giving</b> is the most beautiful reason to save. A maker makes things, and a believer makes good deeds too.`],
      islam: [`قال الله تعالى: ﴿إِن تُبْدُوا الصَّدَقَاتِ فَنِعِمَّا هِيَ ۖ وَإِن تُخْفُوهَا وَتُؤْتُوهَا الْفُقَرَاءَ فَهُوَ خَيْرٌ لَّكُمْ﴾ (البقرة: ٢٧١). وذكر النبيّ ﷺ من السبعة الذين يظلّهم الله في ظلّه: «رجلٌ تصدّق بصدقةٍ فأخفاها حتى لا تعلم شماله ما تنفق يمينه».`, `Allah says: "If you give charity openly, it is good; but if you conceal it and give it to the poor, it is better for you." (al-Baqarah 2:271). And among the seven whom Allah will shade in His shade, the Prophet ﷺ mentioned: "a man who gives charity and hides it, so that his left hand does not know what his right hand gives."`],
      src: ['البقرة: ٢٧١ · صحيح البخاري ١٤٢٣، صحيح مسلم ١٠٣١', 'Al-Baqarah 2:271 · Sahih al-Bukhari 1423, Sahih Muslim 1031'],
      mission: [`<b>اصنع صندوق صدقتك!</b> الأدوات: مرطبانٌ أو علبةٌ فارغة نظيفة، ألوانٌ وورقٌ للتزيين، مقصٌّ لفتحة النقود (مع أحد الكبار).<br>١. زيّن الصندوق واكتب عليه: «صدقتي السرّية».<br>٢. اطلب من أحد الكبار فتح شقٍّ صغيرٍ للنقود في الغطاء.<br>٣. ضع فيه قطعةً من مصروفك كلّ يوم أو كلّ جمعة.<br>٤. اجعلها سرًّا بينك وبين الله — الصدقة الخفيّة أعظم أجرًا.<br>٥. حين يمتلئ، اذهب مع أهلك وتصدّق به على محتاجٍ أو في مسجد.<br>🧒 للصغار: لوّنوا الصندوق وضعوا القطعة بأيديكم كلّ جمعة. 💪 تحدٍّ: احسب لو وضعتَ قطعةً واحدة كلّ يوم، كم تجمع في رمضان كاملًا (٢٩ أو ٣٠ يومًا)؟ 📔 في دفتر الصانع ارسم الصندوق فقط — ولا تكتب كم جمعت، فهذا سرّك!`, `<b>Make your sadaqah box!</b> Tools: an empty, clean jar or box, colours and paper for decorating, scissors for the coin slot (with an adult).<br>1. Decorate the box and write on it: "My secret sadaqah".<br>2. Ask an adult to cut a small coin slot in the lid.<br>3. Drop in a coin from your pocket money every day or every Friday.<br>4. Keep it a secret between you and Allah. Hidden charity has a greater reward.<br>5. When it's full, go with your family and give it to someone in need or at a masjid.<br>🧒 Little ones: colour the box and drop the coin in yourselves every Friday. 💪 Challenge: if you put in one coin every day, how many would you collect in a whole Ramadan (29 or 30 days)? 📔 In your Maker's Journal, draw only the box. Don't write how much you saved, that's your secret!`],
      q: [`لماذا جعل آدم صندوق صدقته سرًّا؟`, `Why did Adam keep his sadaqah box a secret?`],
      o: [[`لأنّ الصدقة الخفيّة بينه وبين الله وأجرها عظيم`, `Because hidden charity is between him and Allah, and its reward is great`, 1], [`لأنّه لا يريد أن يعطي شيئًا في النهاية`, `Because he doesn't want to give anything in the end`], [`لأنّ الصندوق كان قبيحًا`, `Because the box was ugly`]],
      fb: [`أحسنت! الصدقة في السرّ تحمينا من التفاخر، والله يعلمها ويجزي عليها، حتى لو كانت قطعةً صغيرة.`, `Well done! Giving in secret protects us from showing off, and Allah knows it and rewards it, even if it's a small coin.`],
      podcast: {
        title: [`كنزٌ يكبر في السرّ`, `A treasure that grows in secret`],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم الخالة زينب. ومعي آدم، وعنده اليوم… سرّ!`, `Assalamu alaikum, friends! This is Aunt Zaynab. And Adam is here with… a secret!`],
          ['k', `وعليكم السلام! نعم، صنعتُ صندوق صدقةٍ سرّيًا. لكنّي لن أقول كم فيه!`, `Wa alaikum assalam! Yes, I made a secret sadaqah box. But I won't say how much is in it!`],
          ['h', `أحسنت، هذا هو المطلوب! أخبرنا كيف صنعته فقط.`, `Good, that's exactly right! Just tell us how you made it.`],
          ['k', `أخذتُ مرطبانًا فارغًا، وزيّنته بالنجوم، وكتبتُ عليه: صدقتي السرّية. وفتحتِ أنتِ الشقّ في الغطاء بالمقصّ.`, `I took an empty jar, decorated it with stars, and wrote on it: my secret sadaqah. And you cut the slot in the lid with the scissors.`],
          ['h', `صحيح، المقصّ مع الكبار. والآن سؤالٌ في الحساب: قطعةٌ واحدة كلّ يوم، كم تصير في أسبوع؟`, `Right, scissors with grown-ups. Now a maths question: one coin every day, how many in a week?`],
          ['k', `سبع قطع! وفي رمضان كلّه ثلاثون تقريبًا.`, `Seven coins! And in the whole of Ramadan, about thirty.`],
          ['h', `هذا هو الادّخار يا آدم. القليل الدائم يصير كثيرًا، مثل قطرات المطر التي تملأ النهر.`, `That's saving, Adam. A little every day becomes a lot, like raindrops that fill a river.`],
          ['k', `لكن يا خالة، لماذا يكون سرًّا؟ أليس جميلًا أن يعرف أصدقائي؟`, `But Aunt Zaynab, why does it have to be a secret? Isn't it nice for my friends to know?`],
          ['h', `سؤالٌ ذكيّ. في سورة البقرة يقول الله: إن تُبدوا الصدقات فنعمّا هي، وإن تخفوها وتؤتوها الفقراء فهو خيرٌ لكم.`, `Clever question. In Surat al-Baqarah Allah says: if you give charity openly it is good, but if you hide it and give it to the poor, it is better for you.`],
          ['k', `يعني الاثنان جميلان، لكنّ السرّ أفضل؟`, `So both are good, but secret is better?`],
          ['h', `نعم. والنبيّ صلّى الله عليه وسلّم ذكر رجلًا يظلّه الله يوم القيامة، تصدّق فأخفى صدقته حتى لا تعلم شماله ما تنفق يمينه.`, `Yes. And the Prophet, peace be upon him, mentioned a man whom Allah will shade on the Day of Judgement: he gave charity and hid it so well that his left hand didn't know what his right hand gave.`],
          ['k', `حتى يده الثانية لا تعرف! هذا سرٌّ كبيرٌ جدًّا!`, `Not even his other hand knows! That's a really big secret!`],
          ['h', `وعندما يمتلئ صندوقك، تذهب مع أهلك وتعطيه لمحتاجٍ أو للمسجد.`, `And when your box is full, you go with your family and give it to someone in need or to the masjid.`],
          ['k', `سأفعل. وسأقول في قلبي: ربّنا تقبّل منّا، مثل إبراهيم وإسماعيل.`, `I will. And in my heart I'll say: Our Lord, accept this from us, like Ibrahim and Ismail.`],
          ['h', `مهمّة اليوم: اصنع صندوق صدقةٍ من علبةٍ فارغة، وضع فيه قطعةً صغيرة، واجعله سرًّا بينك وبين الله. إلى اللقاء!`, `Today's mission: make a sadaqah box from an empty jar or box, put in one small coin, and keep it a secret between you and Allah. See you soon!`],
          ['k', `مع السلامة يا أصدقاء! وششش… لا تخبروا أحدًا!`, `Goodbye, friends! And shhh… don't tell anyone!`]
        ]
      }
    },

    /* ───────── 10. Secret mission of kindness to parents ───────── */
    {
      id: 'birr', icon: '💐', tag: 'khair',
      t: ['مهمّة البرّ السرّية', 'The secret kindness mission'],
      sub: ['عين الصانع ترى حاجات من نحبّ', 'A maker\'s eye sees what loved ones need'],
      pg: [
        ['📔🌟', `امتلأ دفتر الصانع: فانوس، وكعبة، وكيس المطر، ومصفاة، وقمرٌ في سبع خانات، وبطاقة سفاري، وغرفةٌ مرتّبة، وطبقٌ للجيران. قالت الخالة زينب: «بقيت آخر صنعة… وهي أعظمها».`, `The Maker's Journal was filling up: a lantern, a Kaaba, a rain bag, a filter, a moon in seven boxes, a safari card, a tidy room and a dish for the neighbours. "There's one last make left," said Aunt Zaynab, "and it's the greatest of all."`],
        ['🔎👀', `قالت: «تعلّمتَ أن تلاحظ القمر والنمل والماء. الآن لاحظ أمّك وأباك: ما الذي يُتعبهما كلّ يوم؟» راقب آدم يومًا كاملًا بعين المستكشف: أبوه يبحث عن نظّارته، وأمّه ترتّب الأحذية المبعثرة كلّ مساء.`, `"You've learned to observe the moon, the ants and the water," she said. "Now observe your mum and dad: what tires them every day?" Adam watched for a whole day with an explorer's eye: his dad hunting for his glasses, his mum tidying the scattered shoes every evening.`],
        ['📝🤫', `اختار آدم ثلاث خدمات: ترتيب الأحذية عند الباب، وتعبئة قارورة الماء، ووضع نظّارة أبيه بجانب كرسيّه. وقرّر أن ينفّذها <b>في السرّ</b> دون أن يراه أحد.`, `Adam chose three services: lining up the shoes by the door, refilling the water bottle, and putting his dad's glasses next to his chair. And he decided to do them <b>in secret</b>, without anyone seeing.`],
        ['😲🙊', `في المساء سألت الأمّ متعجّبة: «من رتّب الأحذية؟» وسأل الأب: «من وضع نظّارتي هنا؟» ابتسم آدم ولم يُجب! وكادت ليلى تكشف السرّ، فوضع إصبعه على شفتيه.`, `In the evening his mum asked in surprise, "Who lined up the shoes?" And his dad asked, "Who put my glasses here?" Adam just smiled and didn't answer! Layla almost gave the secret away, so he put a finger to his lips.`],
        ['🤲🏆', `في سجوده دعا آدم: «ربّ ارحمهما كما ربّياني صغيرًا». وفي اليوم التالي أقام معرضًا صغيرًا لصنائعه، وشرح كلّ واحدةٍ لأهله. أمّا الصدقة والبرّ فبقيا سرّين جميلين، لا يعرفهما إلا الله.`, `In his sujood Adam prayed: "My Lord, have mercy on them as they raised me when I was small." The next day he held a little exhibition of his makes and explained each one to his family. But the sadaqah and the kindness stayed two beautiful secrets, known only to Allah.`]
      ],
      learn: [`<b>الملاحظة من أجل الآخرين:</b> المهارة نفسها التي راقبنا بها القمر والنمل نستعملها لنرى ما يحتاجه من نحبّ. والخدمة الصغيرة المتقنة، المتكرّرة، في السرّ، من أجمل ما يصنعه الإنسان. وهكذا يكتمل <b>دفتر الصانع</b>: يدٌ تصنع، وعينٌ تلاحظ، وقلبٌ يُعطي.`, `<b>Observing for others:</b> the same skill we used to watch the moon and the ants helps us see what our loved ones need. A small service done carefully, repeatedly and in secret is one of the most beautiful things a person can make. And so the <b>Maker's Journal</b> is complete: a hand that makes, an eye that notices, and a heart that gives.`],
      islam: [`قال الله تعالى: ﴿وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾ (الإسراء: ٢٤). وسُئل النبيّ ﷺ: أيّ العمل أحبّ إلى الله؟ قال: «الصلاة على وقتها». قيل: ثمّ أيّ؟ قال: «ثمّ برّ الوالدين».`, `Allah says: "And lower to them the wing of humility out of mercy, and say: My Lord, have mercy upon them as they brought me up when I was small." (al-Isra 17:24). The Prophet ﷺ was asked: which deed is most beloved to Allah? He said: "Prayer on time." He was asked: then what? He said: "Then kindness to parents."`],
      src: ['الإسراء: ٢٤ · صحيح البخاري ٥٢٧، صحيح مسلم ٨٥', 'Al-Isra 17:24 · Sahih al-Bukhari 527, Sahih Muslim 85'],
      mission: [`<b>نفّذ مهمّة البرّ السرّية!</b> الأدوات: بطاقة «مهمّة الخير السرّية» (أو ورقةٌ صغيرة تخبّئها)، وقدرةٌ على كتمان السرّ!<br>١. راقب: ما الذي يُتعب أمّك أو أباك كلّ يوم؟<br>٢. اختر ٣ خدماتٍ تقدر عليها: ترتيب الأحذية، تعبئة قارورة الماء، إحضار نظّارة أبيك…<br>٣. نفّذها في الخفاء دون أن يراك أحد.<br>٤. إذا سألوا «من فعل هذا؟» ابتسم ولا تُجب!<br>٥. ادعُ لهما في سجودك: «ربّ ارحمهما كما ربّياني صغيرًا».<br>🧒 للصغار: خدمةٌ سرّية واحدة تكفي، ومعها الدعاء. 💪 تحدٍّ: اجعلها عادة: خدمةٌ سرّية واحدة كلّ يومٍ لمدّة أسبوع. 🎓 <b>المشروع الختاميّ:</b> أكمل دفتر الصانع بصورةٍ أو رسمٍ لكلّ صنعة، وأقم معرضًا صغيرًا في البيت تشرح فيه صنائعك لأهلك.`, `<b>Carry out the secret kindness mission!</b> Tools: the Kindness Mission card (or a small piece of paper you hide), and the ability to keep a secret!<br>1. Observe: what tires your mum or dad every day?<br>2. Choose 3 services you can manage: lining up the shoes, refilling the water bottle, fetching your dad's glasses…<br>3. Do them secretly, without anyone seeing you.<br>4. If they ask "Who did this?", just smile and don't tell!<br>5. Pray for them in your sujood: "My Lord, have mercy on them as they raised me when I was small."<br>🧒 Little ones: one secret service is enough, together with the du'a. 💪 Challenge: make it a habit, one secret service every day for a week. 🎓 <b>Final project:</b> complete your Maker's Journal with a photo or drawing of every make, and hold a little exhibition at home where you explain your makes to your family.`],
      q: [`بماذا بدأ آدم مهمّة البرّ السرّية؟`, `How did Adam begin his secret kindness mission?`],
      o: [[`بأن أعلن لأهله ما سيفعله`, `By announcing to his family what he was going to do`], [`بأن طلب منهم مكافأة`, `By asking them for a reward`], [`بأن لاحظ ما يُتعب والديه كلّ يوم`, `By noticing what tired his parents every day`, 1]],
      fb: [`ممتاز! عين الصانع التي تلاحظ القمر والنمل تلاحظ أيضًا حاجات الوالدين. وبرّهما من أحبّ الأعمال إلى الله.`, `Excellent! The maker's eye that notices the moon and the ants also notices what parents need. And kindness to them is among the deeds most beloved to Allah.`],
      podcast: {
        title: [`أعظم صنعة`, `The greatest make`],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم الخالة زينب في الحلقة الأخيرة من بودكاست الصانع الصغير. ومعي صانعنا آدم للمرّة الأخيرة في هذه الرحلة.`, `Assalamu alaikum, friends! This is Aunt Zaynab with the last episode of The Little Maker podcast. And our maker Adam is with me for the last time on this journey.`],
          ['k', `وعليكم السلام! دفتري امتلأ يا خالة! فيه فانوس وكعبة وقمر ونمل وطبق سلطة!`, `Wa alaikum assalam! My journal is full, Aunt Zaynab! It has a lantern, a Kaaba, the moon, ants and a salad!`],
          ['h', `ما شاء الله. لكنّ آخر صنعةٍ لا تُصنع بالورق ولا بالصمغ. ماذا كانت؟`, `Masha'Allah. But the last make isn't made with paper or glue. What was it?`],
          ['k', `مهمّة البرّ السرّية! خدمتُ أمّي وأبي دون أن يعرفا.`, `The secret kindness mission! I helped my mum and dad without them knowing.`],
          ['h', `وكيف عرفتَ ماذا تفعل؟`, `And how did you know what to do?`],
          ['k', `راقبتهما مثلما راقبتُ القمر! رأيتُ أبي يبحث عن نظّارته كلّ يوم، وأمّي ترتّب الأحذية كلّ مساء.`, `I watched them, just like I watched the moon! I saw Dad looking for his glasses every day, and Mum tidying the shoes every evening.`],
          ['h', `رائع. المهارة نفسها، لكنّها صارت في خدمة من نحبّ. وماذا حدث في المساء؟`, `Wonderful. The same skill, but now it's serving the people we love. And what happened in the evening?`],
          ['k', `سألت أمّي: من رتّب الأحذية؟ فابتسمتُ ولم أقل شيئًا! كان ذلك صعبًا جدًّا.`, `Mum asked: who lined up the shoes? I just smiled and didn't say anything! That was really hard.`],
          ['h', `كتمان السرّ صعب، لكنّه يجعل العمل خالصًا لله. وهل تعرف ما الذي يأتي بعد الصلاة في أحبّ الأعمال إلى الله؟`, `Keeping a secret is hard, but it keeps the deed purely for Allah. And do you know what comes right after prayer among the deeds Allah loves most?`],
          ['k', `برّ الوالدين! هكذا قال النبيّ صلّى الله عليه وسلّم.`, `Kindness to parents! That's what the Prophet, peace be upon him, said.`],
          ['h', `صحيح. وفي سورة الإسراء علّمنا الله دعاءً جميلًا لهما. هل تحفظه؟`, `Right. And in Surat al-Isra, Allah taught us a beautiful du'a for them. Do you know it?`],
          ['k', `ربّ ارحمهما كما ربّياني صغيرًا. دعوتُ به في سجودي.`, `My Lord, have mercy on them as they raised me when I was small. I said it in my sujood.`],
          ['h', `يا آدم، في هذه الرحلة صارت لك يدٌ تصنع، وعينٌ تلاحظ، وقلبٌ يُعطي. هذا هو الصانع الحقيقيّ.`, `Adam, on this journey you've gained a hand that makes, an eye that notices and a heart that gives. That's a real maker.`],
          ['k', `وغدًا سأقيم معرضًا صغيرًا لصنائعي. لكنّ الصدقة والبرّ سيبقيان سرّين!`, `And tomorrow I'll hold a little exhibition of my makes. But the sadaqah and the kindness will stay secrets!`],
          ['h', `مهمّة اليوم: لاحظ ما يُتعب والديك، ونفّذ ثلاث خدماتٍ في السرّ، وادعُ لهما في سجودك. شكرًا لكم يا صنّاعنا، وإلى اللقاء في رحلةٍ جديدة!`, `Today's mission: notice what tires your parents, do three services in secret, and pray for them in your sujood. Thank you, little makers, and see you on a new journey!`],
          ['k', `مع السلامة يا أصدقاء! اصنعوا الجمال، واصنعوا الخير!`, `Goodbye, friends! Make beautiful things, and make good deeds!`]
        ]
      }
    }
  ]
};
