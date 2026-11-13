/* merchant.js — «صانع المهارات» · التاجر الصغير — 10 stations + podcast
   Built on the goals of the physical kit «حقيبة رائد الأعمال الصغير» (26 goals)
   and its board game «مغامرات رائد الأعمال الصغير» (station 10). */
window.SKILLS = window.SKILLS || {};
window.SKILLS.merchant = {
  id: 'merchant', icon: '🛍️', color: '#C0841A',
  title: ['التاجر الصغير', 'The Little Merchant'],
  intro: [
    `رحلةٌ مبسّطة للصغار (٥–٨ سنوات) من عشر محطّات مع العمّ أمين وسلمى: نفهم المال، ونتعلّم تجارة المسلم الأمين، ثم تُطلق مشروعك الأوّل الحقيقيّ — وتلعب في جزيرة الأعمال!`,
    `A simple ten-station journey for little ones (ages 5–8) with Uncle Amin and Salma: we understand money, learn how an honest Muslim trades, then you launch your very first real project — and play on Business Island!`
  ],
  mentor: {
    icon: '🧔', name: ['العمّ أمين', 'Uncle Amin'],
    say: [
      `أهلًا يا تاجرنا الصغير! أنا العمّ أمين، أبيع في السوق منذ ثلاثين سنة. تعلّمتُ أنّ الصدق رأسُ مالٍ لا يضيع. تعالَ معي، وفي آخر الرحلة سيكون لك مشروعك الخاصّ!`,
      `Welcome, little merchant! I am Uncle Amin, and I have sold in the market for thirty years. I learned that honesty is capital you never lose. Come with me, and by the end of the journey you will have your own project!`
    ]
  },
  cast: {
    h: { icon: '🎙️', name: ['العمّ أمين', 'Uncle Amin'], g: 'male' },
    k: { icon: '👧', name: ['سلمى', 'Salma'], g: 'female' }
  },
  goals: [
    [
      'فهم ما هو المال.',
      'معرفة أفكار مختلفة للحصول على رأس المال.',
      'تطور العملات والبيع والشراء عبر التاريخ.',
      'كيفية تقسيم رأس المال بشكل صحيح.',
      'اسم الله الرازق.',
      'نماذج لشخصيات كانوا رواد أعمال وأثرياء.',
      'التفرقة بين ما نريد وما نحتاج.',
      'التعرف على المفاهيم الاقتصادية والمالية.',
      'بعض النقاط في فقه البيوع.',
      'أهمية توحيد العملة في الاقتصاد.',
      'التعرف على مراحل تأسيس المشروع.',
      'الجمهور.',
      'هدف المشروع.',
      'التسعير.',
      'العروض.',
      'التسويق.',
      'خطة عمل المشروع.',
      'منصات الإعلان عن مشروعك.',
      'الزكاة والصدقة والتبرع والفرق بينهم.',
      'الادخار وكيفية القيام به.',
      'إطلاق أول مشروع للطفل لكي يصبح رائد أعمال.',
      'التدرب على مفاهيم البيع والشراء.',
      'حل المشكلات بشكل واقعي وعملي.',
      'التدرب على الخرائط الذهنية واستخدامها في عمل المشروع.',
      'نماذج لمشاريع والتدرب على حل مشكلاتها.',
      'التعرف على جزر الأعمال بشكل عملي من خلال اللعبة.'
    ],
    [
      'Understand what money is.',
      'Know different ideas for getting starting capital.',
      'How coins, buying and selling developed through history.',
      'How to divide capital wisely.',
      'Allah\'s name al-Razzaq, the Provider.',
      'Role models who were entrepreneurs and wealthy.',
      'Tell the difference between what we want and what we need.',
      'Learn basic economic and money concepts.',
      'Some points of the fiqh of trade (buying and selling in Islam).',
      'Why one shared currency matters for an economy.',
      'Learn the stages of starting a project.',
      'The audience (who your customers are).',
      'The goal of the project.',
      'Pricing.',
      'Offers.',
      'Marketing.',
      'The project\'s business plan.',
      'Places and platforms to announce your project.',
      'Zakat, sadaqah and donation — and the difference between them.',
      'Saving, and how to do it.',
      'Launching the child\'s first project, to become an entrepreneur.',
      'Practising buying and selling.',
      'Solving problems in a realistic, practical way.',
      'Practising mind maps and using them to build the project.',
      'Sample projects, and practice solving their problems.',
      'Exploring the business islands hands-on through the game.'
    ]
  ],
  filters: [
    ['money', 'عالم المال', 'World of money'],
    ['deen', 'تجارة المسلم', 'The Muslim trader'],
    ['project', 'مشروعي الأوّل', 'My first project'],
    ['game', 'جزيرة الأعمال', 'Business Island']
  ],
  parents: [
    `<h3>🏡 كيف نسير في الرحلة بهدوء؟</h3>
<p>محطّةٌ واحدة في الجلسة تكفي (٢٠–٣٠ دقيقة): اقرآ القصّة معًا، واستمعا لحلقة البودكاست، ثم نفّذا المهمّة الحقيقية. لا عجلة؛ يمكن أن تمتدّ الرحلة أسبوعين أو شهرًا.</p>
<ul>
<li><b>المحطّات ١–٣ (عالم المال):</b> المال وتاريخه، ما نحتاج وما نريد، ورأس المال وتقسيمه. استعملوا نقودًا حقيقية قليلة أو أزرارًا.</li>
<li><b>المحطّات ٤–٥ (تجارة المسلم):</b> قدوات من الصحابة، وآداب البيع: الصدق، ولا غشّ، والوفاء بالكيل، وحرمة الربا. العبوا «دكّان البيت».</li>
<li><b>المحطّات ٦–٨ (مشروعي الأوّل):</b> خطّة من صفحة واحدة، وخريطة ذهنية، وسعر وعرض وإعلان، ثم <b>يوم الإطلاق</b> مع العائلة.</li>
<li><b>المحطّة ٩:</b> عدّ الربح، وتقسيمه: ادّخار، وصدقة يختارها الطفل بنفسه، وإعادة استثمار.</li>
<li><b>المحطّة ١٠:</b> لعبة «جزيرة الأعمال» على ورق — مناسبة لسهرة عائلية.</li>
</ul>
<h3>🛡️ السلامة أوّلًا</h3>
<ul>
<li>البيع يكون للعائلة والأقارب والجيران المعروفين، وبحضور أحد الوالدين دائمًا.</li>
<li>أيّ إعلان على الإنترنت أو في مجموعات الهاتف يتولّاه الوالد أو الوالدة، بلا صورة الطفل ولا العنوان.</li>
<li>الفرن والسكاكين والموقد مع شخص كبير فقط. والعصير والطعام بأيدٍ نظيفة.</li>
</ul>
<h3>💬 نصائح</h3>
<ul>
<li>الخسارة الصغيرة درسٌ ثمين؛ لا تعوّضها فورًا، بل اسأل: «ماذا تعلّمنا؟ ماذا نغيّر؟».</li>
<li>الصدقة من الربح اختيار الطفل؛ شجّعه ولا تفرض نسبة. أمّا الزكاة فالوالدان يحسبانها على المال إذا بلغ النصاب.</li>
<li>امدحوا الصدق والجهد والتخطيط، لا مقدار الربح.</li>
</ul>`,
    `<h3>🏡 How to run the journey calmly</h3>
<p>One station per sitting is enough (20–30 minutes): read the story together, listen to the podcast episode, then do the real mission. No rush — the journey can take two weeks or a month.</p>
<ul>
<li><b>Stations 1–3 (World of money):</b> money and its history, needs versus wants, and starting capital and how to divide it. Use a few real coins or buttons.</li>
<li><b>Stations 4–5 (The Muslim trader):</b> role models from the Companions, and the manners of trade: honesty, no cheating, full measure, and riba being forbidden. Play "home shop".</li>
<li><b>Stations 6–8 (My first project):</b> a one-page plan, a mind map, a price, an offer and an advert, then <b>launch day</b> with the family.</li>
<li><b>Station 9:</b> count the profit and split it: saving, a sadaqah the child chooses, and reinvesting.</li>
<li><b>Station 10:</b> the paper game "Business Island" — perfect for a family evening.</li>
</ul>
<h3>🛡️ Safety first</h3>
<ul>
<li>Selling is only to family, relatives and known neighbours, always with a parent present.</li>
<li>Any online or phone-group advert is handled by a parent, with no photo of the child and no address.</li>
<li>Oven, knives and stove only with an adult. Juice and food with clean hands.</li>
</ul>
<h3>💬 Tips</h3>
<ul>
<li>A small loss is a precious lesson; don't cover it straight away — ask "What did we learn? What will we change?"</li>
<li>Sadaqah from the profit is the child's own choice; encourage it, don't impose a percentage. Zakat is calculated by parents on wealth that reaches the nisab.</li>
<li>Praise honesty, effort and planning — not the size of the profit.</li>
</ul>`
  ],
  worksheet: [
    `<h1>🛍️ حقيبة التاجر الصغير — أوراق المشروع</h1>
<h3>١) جدول: أحتاج أم أريد؟</h3>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><th>الشيء</th><th>أحتاجه ✅</th><th>أريده فقط 💭</th><th>لماذا؟</th></tr>
<tr><td>ماء للشرب</td><td></td><td></td><td></td></tr>
<tr><td>حذاء للمدرسة</td><td></td><td></td><td></td></tr>
<tr><td>لعبة جديدة</td><td></td><td></td><td></td></tr>
<tr><td>حلوى</td><td></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
</table>
<h3>٢) تقسيم رأس المال</h3>
<p>رأس مالي: ........ &nbsp; من أين حصلت عليه؟ ..............................</p>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><th>الموادّ (٦٠٪ تقريبًا)</th><th>التغليف والإعلان (٢٠٪)</th><th>الاحتياط للطوارئ (٢٠٪)</th></tr>
<tr><td style="height:12mm"></td><td></td><td></td></tr>
</table>
<h3>٣) خريطتي الذهنية</h3>
<p>اكتب اسم مشروعك في الدائرة، ثم ارسم فروعًا: المنتج · الزبائن · التكلفة · السعر · العرض · الإعلان · المكان والوقت · من يساعدني</p>
<div class="ws-box" style="min-height:70mm;display:flex;align-items:center;justify-content:center"><div style="border:2px solid #888;border-radius:50%;width:45mm;height:30mm;display:flex;align-items:center;justify-content:center">مشروعي: ..........</div></div>
<h3>٤) خطّة المشروع في صفحة واحدة</h3>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><td style="width:35%">اسم المشروع</td><td></td></tr>
<tr><td>ماذا أبيع؟</td><td></td></tr>
<tr><td>هدفي من المشروع</td><td></td></tr>
<tr><td>جمهوري (لمن أبيع؟)</td><td></td></tr>
<tr><td>المكان والوقت</td><td></td></tr>
<tr><td>تكلفة القطعة الواحدة</td><td></td></tr>
<tr><td>السعر</td><td></td></tr>
<tr><td>العرض الصادق</td><td></td></tr>
<tr><td>أين أعلن؟ (مع والديّ)</td><td></td></tr>
<tr><td>من يساعدني؟</td><td></td></tr>
</table>
<h3>٥) دفتر يوم البيع</h3>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><th>المبيعات (الدخل)</th><th>التكلفة</th><th>الربح = المبيعات − التكلفة</th></tr>
<tr><td style="height:12mm"></td><td></td><td></td></tr>
</table>
<p>مشكلة واجهتني: ......................... &nbsp; كيف حللتها: .........................</p>
<h3>٦) تقسيم الربح</h3>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><th>💰 ادّخار</th><th>🤲 صدقة (أختارها أنا)</th><th>🔁 إعادة استثمار</th><th>🎁 لي</th></tr>
<tr><td style="height:12mm"></td><td></td><td></td><td></td></tr>
</table>
<h3>٧) بطاقات لعبة «جزيرة الأعمال» (قصّها)</h3>
<p><b>النقود لكلّ لاعب = ٥٠٠ فضّة:</b> ٤ قطع من ٥ · قطعتان من ١٠ · ٣ قطع من ٢٠ · قطعتان من ٥٠ · قطعة من ١٠٠ · قطعة من ٢٠٠</p>
<table style="width:100%;border-collapse:collapse;text-align:center" border="1" cellpadding="8">
<tr><td>🍋 جزيرة العصير<br>سعر الشراء: ١٠٠<br>تكاليف التشغيل: ٢٠<br>أجرة الزائر: ١٠</td><td>🔖 جزيرة الفواصل<br>سعر الشراء: ٨٠<br>تكاليف التشغيل: ١٠<br>أجرة الزائر: ١٠</td><td>🍪 جزيرة المخبز<br>سعر الشراء: ١٥٠<br>تكاليف التشغيل: ٣٠<br>أجرة الزائر: ٢٠</td></tr>
<tr><td>🌱 جزيرة الزرع<br>سعر الشراء: ١٢٠<br>تكاليف التشغيل: ٢٠<br>أجرة الزائر: ١٥</td><td>🎨 جزيرة الرسم<br>سعر الشراء: ٩٠<br>تكاليف التشغيل: ١٠<br>أجرة الزائر: ١٠</td><td>⛵ جزيرة السفن<br>سعر الشراء: ٢٠٠<br>تكاليف التشغيل: ٤٠<br>أجرة الزائر: ٣٠</td></tr>
</table>
<p><b>بطاقات الأسئلة:</b></p>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="8">
<tr><td>❓ ما الفرق بين الحاجة والرغبة؟</td><td>❓ الربح = ؟</td><td>❓ اذكر صحابيًّا كان تاجرًا.</td></tr>
<tr><td>❓ ما معنى اسم الله الرزّاق؟</td><td>❓ ما حكم الغشّ في البيع؟</td><td>❓ ما الفرق بين الزكاة والصدقة؟</td></tr>
<tr><td>❓ لماذا نحتاج عملة موحّدة؟</td><td>❓ اذكر عرضًا صادقًا.</td><td>❓ أين تعلن عن مشروعك بأمان؟</td></tr>
</table>`,
    `<h1>🛍️ Little Merchant Kit — project sheets</h1>
<h3>1) Table: Need or want?</h3>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><th>Item</th><th>I need it ✅</th><th>I just want it 💭</th><th>Why?</th></tr>
<tr><td>Drinking water</td><td></td><td></td><td></td></tr>
<tr><td>School shoes</td><td></td><td></td><td></td></tr>
<tr><td>A new toy</td><td></td><td></td><td></td></tr>
<tr><td>Sweets</td><td></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
</table>
<h3>2) Dividing my capital</h3>
<p>My capital: ........ &nbsp; Where did it come from? ..............................</p>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><th>Materials (about 60%)</th><th>Packaging and adverts (20%)</th><th>Emergency reserve (20%)</th></tr>
<tr><td style="height:12mm"></td><td></td><td></td></tr>
</table>
<h3>3) My mind map</h3>
<p>Write your project's name in the circle, then draw branches: product · customers · cost · price · offer · advert · place and time · who helps me</p>
<div class="ws-box" style="min-height:70mm;display:flex;align-items:center;justify-content:center"><div style="border:2px solid #888;border-radius:50%;width:45mm;height:30mm;display:flex;align-items:center;justify-content:center">My project: ..........</div></div>
<h3>4) One-page project plan</h3>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><td style="width:35%">Project name</td><td></td></tr>
<tr><td>What do I sell?</td><td></td></tr>
<tr><td>My goal for the project</td><td></td></tr>
<tr><td>My audience (who buys?)</td><td></td></tr>
<tr><td>Place and time</td><td></td></tr>
<tr><td>Cost of one piece</td><td></td></tr>
<tr><td>Price</td><td></td></tr>
<tr><td>My honest offer</td><td></td></tr>
<tr><td>Where do I advertise? (with my parents)</td><td></td></tr>
<tr><td>Who helps me?</td><td></td></tr>
</table>
<h3>5) Sales-day notebook</h3>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><th>Sales (income)</th><th>Cost</th><th>Profit = sales − cost</th></tr>
<tr><td style="height:12mm"></td><td></td><td></td></tr>
</table>
<p>A problem I faced: ......................... &nbsp; How I solved it: .........................</p>
<h3>6) Splitting the profit</h3>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="6">
<tr><th>💰 Saving</th><th>🤲 Sadaqah (my choice)</th><th>🔁 Reinvest</th><th>🎁 For me</th></tr>
<tr><td style="height:12mm"></td><td></td><td></td><td></td></tr>
</table>
<h3>7) "Business Island" game cards (cut out)</h3>
<p><b>Money for each player = 500 silver:</b> 4 coins of 5 · 2 coins of 10 · 3 coins of 20 · 2 coins of 50 · 1 coin of 100 · 1 coin of 200</p>
<table style="width:100%;border-collapse:collapse;text-align:center" border="1" cellpadding="8">
<tr><td>🍋 Juice Island<br>Buy price: 100<br>Running costs: 20<br>Visitor fee: 10</td><td>🔖 Bookmark Island<br>Buy price: 80<br>Running costs: 10<br>Visitor fee: 10</td><td>🍪 Bakery Island<br>Buy price: 150<br>Running costs: 30<br>Visitor fee: 20</td></tr>
<tr><td>🌱 Garden Island<br>Buy price: 120<br>Running costs: 20<br>Visitor fee: 15</td><td>🎨 Art Island<br>Buy price: 90<br>Running costs: 10<br>Visitor fee: 10</td><td>⛵ Ship Island<br>Buy price: 200<br>Running costs: 40<br>Visitor fee: 30</td></tr>
</table>
<p><b>Question cards:</b></p>
<table style="width:100%;border-collapse:collapse" border="1" cellpadding="8">
<tr><td>❓ What is the difference between a need and a want?</td><td>❓ Profit = ?</td><td>❓ Name a Companion who was a trader.</td></tr>
<tr><td>❓ What does Allah's name al-Razzaq mean?</td><td>❓ What is the ruling on cheating in trade?</td><td>❓ What is the difference between zakat and sadaqah?</td></tr>
<tr><td>❓ Why do we need one shared currency?</td><td>❓ Give an example of an honest offer.</td><td>❓ Where can you safely advertise your project?</td></tr>
</table>`
  ],
  next: ['../activities/play.html', '🌴', 'واحة المرح والتعلّم', 'Fun and Learning Oasis', 'جرّب مهارة أخرى أو لعبة', 'Try another skill or a game'],
  stations: [

    /* ───────── 1 · What is money? (goals 1, 3, 10) ───────── */
    {
      id: 'what-is-money', icon: '🪙', tag: 'money',
      t: ['ما هو المال؟', 'What is money?'],
      sub: ['من المقايضة إلى الدينار', 'From barter to the dinar'],
      pg: [
        ['🐑🌾', `في قريةٍ قديمة كان <b>سالم</b> يربّي الغنم، ويحتاج قمحًا. ذهب إلى المزارع وقال: خذ خروفًا وأعطني قمحًا!`, `In an old village, <b>Salim</b> raised sheep and needed wheat. He went to the farmer and said: take a sheep and give me wheat!`],
        ['🤔👞', `لكنّ المزارع قال: لا أريد خروفًا اليوم، أريد حذاءً! وهذه مشكلة <b>المقايضة</b>: أن تجد شخصًا يريد ما عندك، وعنده ما تريده أنت.`, `But the farmer said: I don't want a sheep today, I want shoes! That is the problem with <b>barter</b>: you must find someone who wants what you have and has what you want.`],
        ['🐚🧂🪙', `فاتّفق الناس على أشياء يقبلها الجميع: الأصداف في بلاد، والملح أحيانًا، ثم قطع الذهب والفضّة. وقبل نحو ٢٦٠٠ سنة ظهرت أولى <b>العملات المسكوكة</b> المختومة.`, `So people agreed on things everyone accepts: shells in some lands, sometimes salt, then pieces of gold and silver. About 2,600 years ago the first <b>stamped coins</b> appeared.`],
        ['🕌✨', `كان العرب قديمًا يتعاملون بالدينار الذهبيّ الروميّ والدرهم الفضّيّ الفارسيّ، حتى سكّ الخليفة <b>عبد الملك بن مروان</b> دينارًا إسلاميًّا عربيًّا نحو سنة ٧٧ للهجرة.`, `Long ago the Arabs used Byzantine gold dinars and Persian silver dirhams, until Caliph <b>Abd al-Malik ibn Marwan</b> minted an Arabic Islamic dinar around the year 77 AH (about 696 CE).`],
        ['💵💳', `ثم انتشرت النقود الورقيّة، وكانت الصين من أوائل من استعملها. واليوم عندنا البطاقات والمال الإلكترونيّ. تغيّر شكل المال، لكنّ فكرته بقيت واحدة.`, `Then paper money spread — China was one of the first places to use it. Today we have cards and electronic money. The shape of money changed, but the idea stayed the same.`],
        ['🗺️🤝', `لماذا نحتاج <b>عملةً موحّدة</b>؟ لو كان لكلّ مدينة نقودٌ مختلفة لاحتار التاجر: كم يساوي هذا بذاك؟ العملة الواحدة تجعل الأسعار واضحة، والبيع أسهل، والادّخار آمنًا.`, `Why do we need <b>one shared currency</b>? If every town had different money, traders would be confused: how much is this worth in that? One currency makes prices clear, selling easier and saving safer.`]
      ],
      learn: [
        `<b>المال</b> وسيلةٌ يتّفق الناس عليها: نتبادل بها الأشياء، ونقيس بها قيمتها، ونحفظ بها تعبنا لوقتٍ لاحق. والمال ليس هدفًا بذاته، بل أداة. و<b>توحيد العملة</b> في البلد يجعل الجميع يفهمون الأسعار نفسها، فتسهل التجارة.`,
        `<b>Money</b> is a tool people agree on: we exchange things with it, measure their value with it, and store our effort for later. Money is not a goal in itself — it is a tool. And <b>one shared currency</b> in a country means everyone understands the same prices, so trade becomes easy.`
      ],
      islam: [
        `في قصّة أصحاب الكهف، لمّا استيقظوا قال أحدهم: ﴿فَابْعَثُوا أَحَدَكُم بِوَرِقِكُمْ هَٰذِهِ إِلَى الْمَدِينَةِ فَلْيَنظُرْ أَيُّهَا أَزْكَىٰ طَعَامًا فَلْيَأْتِكُم بِرِزْقٍ مِّنْهُ﴾ — و«الوَرِق» هي النقود الفضّيّة! فالنقود قديمة جدًّا، والمسلم يشتري بها الطيّب الحلال.`,
        `In the story of the People of the Cave, when they woke up one of them said: "So send one of you with this silver coin of yours to the city, and let him look for the purest food and bring you provision from it." Coins are very old, and a Muslim uses them to buy what is good and halal.`
      ],
      src: ['الكهف: ١٩', 'Al-Kahf 18:19'],
      mission: [
        `<b>لعبة المقايضة:</b> ضع ٥ أشياء صغيرة أمامك (قلم، تفّاحة، ممحاة…)، وحاول أن تبادلها مع أهلك بلا نقود. ثم أعيدوا اللعبة باستعمال «نقود» من الأزرار. أيّهما كان أسهل؟ ثم اسأل جدّك أو جدّتك: كيف كانت النقود في صغرك؟ واكتب شيئين تعلّمتهما.`,
        `<b>The barter game:</b> put 5 small things in front of you (a pencil, an apple, an eraser…) and try to swap them with your family without money. Then play again using "money" made of buttons. Which was easier? Then ask a grandparent: what was money like when you were little? Write down two things you learned.`
      ],
      q: ['لماذا اخترع الناس النقود؟', 'Why did people invent money?'],
      o: [
        ['لأنّ الذهب لامع وجميل فقط', 'Only because gold is shiny and pretty', 0],
        ['لأنّ المقايضة كانت صعبة، فاحتاجوا شيئًا يقبله الجميع', 'Because barter was hard, so they needed something everyone accepts', 1],
        ['لكي لا يعمل أحد', 'So that nobody has to work', 0]
      ],
      fb: [`أحسنت! المقايضة صعبة لأنّك تحتاج شخصًا يريد ما عندك بالضبط، فصار المال وسيلةً يقبلها الجميع.`, `Well done! Barter is hard because you need someone who wants exactly what you have, so money became a tool everyone accepts.`],
      podcast: {
        title: ['من الغنم إلى الدينار', 'From sheep to dinars'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم العمّ أمين في بودكاست التاجر الصغير. ومعي اليوم ضيفةٌ نشيطة.`, `Assalamu alaikum, friends! This is Uncle Amin on the Little Merchant podcast. And today I have a very lively guest.`],
          ['k', `وعليكم السلام يا عمّ! أنا سلمى، وعندي سؤال كبير. ما هو المال أصلًا؟`, `Wa alaikum assalam, Uncle! I am Salma, and I have a big question. What is money, anyway?`],
          ['h', `سؤالٌ ممتاز. تخيّلي أنّه لا توجد نقود أبدًا. وأنتِ تريدين خبزًا. ماذا تفعلين؟`, `Excellent question. Imagine there is no money at all. And you want some bread. What would you do?`],
          ['k', `أممم. أعطي الخبّاز شيئًا عندي؟ مثلًا قلمي الأزرق؟`, `Hmm. I give the baker something I have? Like my blue pen?`],
          ['h', `هذه اسمها المقايضة. لكن ماذا لو قال الخبّاز: لا أحتاج قلمًا، أحتاج حليبًا؟`, `That is called barter. But what if the baker says: I don't need a pen, I need milk?`],
          ['k', `يا إلهي! سأبحث عن صاحب بقرة يريد قلمًا، ثم أعود للخبّاز. هذا متعب!`, `Oh no! I would have to find a cow owner who wants a pen, then go back to the baker. That is exhausting!`],
          ['h', `بالضبط. لذلك اتّفق الناس على أشياء يقبلها الجميع. الأصداف، ثم الذهب والفضّة، ثم العملات المختومة.`, `Exactly. So people agreed on things everyone accepts. Shells, then gold and silver, then stamped coins.`],
          ['k', `وهل كان للمسلمين نقودٌ خاصّة بهم؟`, `Did the Muslims have their own money?`],
          ['h', `في البداية استعملوا دنانير الروم ودراهم الفرس. ثم سكّ الخليفة عبد الملك بن مروان دينارًا إسلاميًّا مكتوبًا بالعربيّة.`, `At first they used Roman dinars and Persian dirhams. Then Caliph Abd al-Malik ibn Marwan minted an Islamic dinar written in Arabic.`],
          ['k', `ولماذا لا تصنع كلّ مدينة نقودها كما تحبّ؟`, `And why doesn't every city just make its own money?`],
          ['h', `تخيّلي أنّ عندك نقود مدينتك، وذهبتِ لمدينة أخرى. لن يفهم البائع كم تساوي! العملة الموحّدة تجعل الجميع يتكلّمون لغة أسعارٍ واحدة.`, `Imagine you have your town's money and you visit another town. The seller won't know what it is worth! One shared currency lets everyone speak the same language of prices.`],
          ['k', `فهمت. المال مثل لغةٍ نتّفق عليها للبيع والشراء.`, `I get it. Money is like a language we agree on for buying and selling.`],
          ['h', `أحسنتِ يا سلمى! وحتى أصحاب الكهف في القرآن أرسلوا أحدهم بنقودهم الفضّيّة ليشتري أطيب الطعام.`, `Well said, Salma! Even the People of the Cave in the Quran sent one of them with their silver coins to buy the purest food.`],
          ['k', `جميل! إذن النقود قديمة جدًّا.`, `Lovely! So money is really old.`],
          ['h', `مهمّة اليوم: العبوا لعبة المقايضة في البيت، ثم العبوها بنقود من الأزرار، وقارنوا. إلى اللقاء في الحلقة القادمة!`, `Today's mission: play the barter game at home, then play it with button money, and compare. See you in the next episode!`]
        ]
      }
    },

    /* ───────── 2 · Needs and wants + money words (goals 7, 8) ───────── */
    {
      id: 'needs-wants', icon: '⚖️', tag: 'money',
      t: ['أحتاج أم أريد؟', 'Need or want?'],
      sub: ['وكلماتُ التاجر المهمّة', 'and the trader\'s key words'],
      pg: [
        ['🛒✨', `في السوق رأت سلمى حقيبةً لامعة بأضواء ملوّنة، فصاحت: أريدها! وكان معها مالٌ يكفي لحذاء المدرسة الذي تمزّق.`, `At the market Salma saw a shiny bag with coloured lights and cried: I want it! She had just enough money for the school shoes that had torn.`],
        ['👞💭', `قال العمّ أمين بهدوء: هناك فرق بين <b>الحاجة</b> و<b>الرغبة</b>. الحاجة شيءٌ لا تستقيم حياتك بدونه، كالطعام والماء والحذاء. والرغبة شيءٌ جميل، لكن يمكنك أن تنتظر.`, `Uncle Amin said calmly: there is a difference between a <b>need</b> and a <b>want</b>. A need is something your life can't go well without, like food, water and shoes. A want is something nice, but you can wait for it.`],
        ['❓❓❓', `علّمها ثلاثة أسئلة: هل أستطيع العيش بدونه؟ هل أحتاجه الآن أم لاحقًا؟ هل عندي شيءٌ يقوم مقامه؟ فاختارت سلمى الحذاء، وكتبت الحقيبة في «قائمة الانتظار».`, `He taught her three questions: Can I live without it? Do I need it now or later? Do I already have something that does the job? Salma chose the shoes, and wrote the bag on her "waiting list".`],
        ['📒✏️', `ثم فتح العمّ دفتره وقال: هذه كلمات كلّ تاجر: <b>الدخل</b> ما يأتيك من مال، و<b>المصروف</b> ما يخرج، و<b>التكلفة</b> ما تدفعه لتصنع الشيء، و<b>السعر</b> ما يدفعه الزبون.`, `Then Uncle opened his notebook: these are every trader's words: <b>income</b> is money coming in, <b>expense</b> is money going out, <b>cost</b> is what you pay to make something, and <b>price</b> is what the customer pays.`],
        ['📈📉', `<b>الربح</b> = السعر − التكلفة إذا كان موجبًا، وإن كانت التكلفة أكبر فهي <b>خسارة</b>. و<b>العرض والطلب</b>: إذا قلّ الليمون وكثر من يريده ارتفع سعره، وإذا كثر الليمون انخفض.`, `<b>Profit</b> = price − cost when it is positive; if the cost is bigger, it is a <b>loss</b>. And <b>supply and demand</b>: when lemons are few and many people want them, the price goes up; when lemons are plentiful, it goes down.`]
      ],
      learn: [
        `<b>الحاجة</b> ضروريّة، و<b>الرغبة</b> يمكن تأجيلها. والتاجر الذكيّ يعرف كلماته: الدخل، والمصروف، والتكلفة، والسعر، والربح، والخسارة، والعرض والطلب. ونقدّم الحاجات على الرغبات، ونخطّط للرغبات بالادّخار.`,
        `A <b>need</b> is necessary; a <b>want</b> can wait. A smart trader knows the words: income, expense, cost, price, profit, loss, supply and demand. We put needs before wants, and plan for wants by saving.`
      ],
      islam: [
        `مدح الله عباده فقال: ﴿وَالَّذِينَ إِذَا أَنفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا وَكَانَ بَيْنَ ذَٰلِكَ قَوَامًا﴾ — لا تبذير، ولا بُخل، بل توازنٌ جميل.`,
        `Allah praises His servants: "And those who, when they spend, are neither extravagant nor stingy, but keep a just balance between the two." No waste and no stinginess — a beautiful balance.`
      ],
      src: ['الفرقان: ٦٧', 'Al-Furqan 25:67'],
      mission: [
        `تجوّل في البيت واختر ١٠ أشياء، واكتبها في جدول «أحتاج أم أريد؟» في ورقة النشاط. ثم اكتب «قائمة انتظار» لثلاث رغبات تحبّها، وبجانب كلّ واحدة: كم أسبوعًا أحتاج لأدّخر ثمنها؟`,
        `Walk around the house, pick 10 things and write them in the "Need or want?" table on the activity sheet. Then write a "waiting list" of three wants you love, and next to each: how many weeks would I need to save for it?`
      ],
      q: ['أيّ هذه <b>حاجة</b>؟', 'Which of these is a <b>need</b>?'],
      o: [
        ['لعبة إلكترونيّة جديدة', 'A new video game', 0],
        ['حقيبة بأضواء ملوّنة', 'A bag with coloured lights', 0],
        ['ماء نظيف للشرب', 'Clean drinking water', 1]
      ],
      fb: [`صحيح! الماء حاجة لا نعيش بدونها، أمّا اللعبة والحقيبة فرغبات يمكن أن تنتظر.`, `Right! Water is a need we can't live without; the game and the bag are wants that can wait.`],
      podcast: {
        title: ['الحقيبة اللامعة', 'The shiny bag'],
        lines: [
          ['h', `أهلًا بكم من جديد في بودكاست التاجر الصغير! سلمى، سمعت أنّ مغامرةً حدثت لكِ في السوق.`, `Welcome back to the Little Merchant podcast! Salma, I heard you had an adventure at the market.`],
          ['k', `نعم يا عمّ! رأيت حقيبة بأضواء ملوّنة. أردتها جدًّا جدًّا!`, `Yes, Uncle! I saw a bag with coloured lights. I wanted it so, so much!`],
          ['h', `وماذا كان معكِ من مال؟`, `And how much money did you have?`],
          ['k', `كان معي ثمن حذاء المدرسة فقط. حذائي القديم تمزّق.`, `Only enough for school shoes. My old shoes had torn.`],
          ['h', `هنا نتعلّم درسًا مهمًّا. الحذاء حاجة، والحقيبة رغبة. هل تعرفين الفرق؟`, `Here is an important lesson. The shoes are a need, and the bag is a want. Do you know the difference?`],
          ['k', `الحاجة لا أستطيع الاستغناء عنها، والرغبة أحبّها لكن يمكنني الانتظار؟`, `A need is something I can't do without, and a want is something I like but can wait for?`],
          ['h', `رائع! وعندي ثلاثة أسئلة سحريّة. هل أعيش بدونه؟ هل أحتاجه الآن؟ هل عندي ما يقوم مقامه؟`, `Brilliant! And I have three magic questions. Can I live without it? Do I need it now? Do I have something else that does the job?`],
          ['k', `جرّبتها! فاخترت الحذاء، وكتبت الحقيبة في قائمة الانتظار.`, `I tried them! So I chose the shoes, and put the bag on my waiting list.`],
          ['h', `هذا تفكير تاجرٍ حقيقيّ. والآن كلمات التاجر. الدخل هو المال الداخل، والمصروف هو المال الخارج.`, `That is real merchant thinking. Now, merchant words. Income is money coming in, and expense is money going out.`],
          ['k', `وما الفرق بين التكلفة والسعر؟`, `What is the difference between cost and price?`],
          ['h', `التكلفة ما تدفعينه أنتِ لتصنعي الكوب. والسعر ما يدفعه الزبون. والفرق بينهما هو الربح.`, `Cost is what you pay to make the cup. Price is what the customer pays. And the difference between them is profit.`],
          ['k', `وسمعت كلمة العرض والطلب. ما معناها؟`, `I also heard the words supply and demand. What do they mean?`],
          ['h', `إذا قلّ الليمون وكثر من يريده، يرتفع سعره. وفي موسمه يكثر، فيرخص.`, `When lemons are scarce and many people want them, the price goes up. In lemon season there are plenty, so they get cheaper.`],
          ['k', `يعني السعر يتحرّك مثل الأرجوحة!`, `So the price moves like a seesaw!`],
          ['h', `تشبيهٌ جميل! والقرآن يمدح من لا يسرف ولا يبخل. مهمّة اليوم: املئي جدول أحتاج أم أريد بعشرة أشياء من البيت. إلى اللقاء!`, `Lovely comparison! And the Quran praises those who neither waste nor are stingy. Today's mission: fill the need-or-want table with ten things from home. Goodbye for now!`]
        ]
      }
    },

    /* ───────── 3 · Starting capital (goals 2, 4) ───────── */
    {
      id: 'capital', icon: '💰', tag: 'money',
      t: ['رأس المال: من أين أبدأ؟', 'Capital: where do I start?'],
      sub: ['أفكارٌ للحصول عليه، وطريقة تقسيمه', 'ideas for getting it, and how to divide it'],
      pg: [
        ['🍋💭', `قرّرت سلمى أن تبدأ مشروعًا صغيرًا. لكنّها توقّفت وقالت: الليمون والأكواب تحتاج مالًا… ومحفظتي فارغة!`, `Salma decided to start a small project. But she stopped and said: lemons and cups cost money… and my purse is empty!`],
        ['🏦', `قال العمّ أمين: كلّ مشروع يحتاج <b>رأس مال</b>، وهو المال الذي تبدأ به قبل أن تبيع شيئًا. وحتى التجّار الكبار بدؤوا بقليل.`, `Uncle Amin said: every project needs <b>capital</b> — the money you start with before you sell anything. Even big traders started with a little.`],
        ['💡💡💡', `ثم عدّ لها الأفكار: ادّخار المصروف، والعيديّة، وبيع لعبٍ قديمة بإذن الأهل، وعملٌ صغير في البيت مقابل أجر، و<b>شراكة</b> مع أخيك، أو <b>قرضٌ حسن</b> من والدك بلا زيادة تردّه بعد البيع.`, `Then he listed ideas: saving pocket money, Eid money, selling old toys with your parents' permission, a small paid job at home, a <b>partnership</b> with your brother, or a <b>good loan</b> from a parent with no extra added, paid back after you sell.`],
        ['🤝📝', `اختارت سلمى الشراكة مع أخيها يوسف، فجمعا ١٠٠ (من عملة بلدهما). وكتبا على ورقة: من دفع كم؟ وكيف نقسم الربح؟ لأنّ الاتّفاق الواضح يحفظ المحبّة.`, `Salma chose a partnership with her brother Yusuf, and together they collected 100 (in their country's money). They wrote down: who paid how much? How will we share the profit? A clear agreement keeps the love between partners.`],
        ['🫙🫙🫙', `ثم قسّما رأس المال في ثلاثة ظروف: <b>٦٠ للموادّ</b> (ليمون وسكّر)، و<b>٢٠ للتغليف والإعلان</b> (أكواب وورق)، و<b>٢٠ احتياط</b> لأيّ مفاجأة. وقال العمّ: لا تُنفق رأس مالك كلّه مرّةً واحدة!`, `Then they split the capital into three envelopes: <b>60 for materials</b> (lemons and sugar), <b>20 for packaging and adverts</b> (cups and paper), and <b>20 as a reserve</b> for any surprise. Uncle said: never spend all your capital at once!`]
      ],
      learn: [
        `<b>رأس المال</b> هو ما تبدأ به المشروع. نحصل عليه بالادّخار، أو العمل، أو الشراكة، أو القرض الحسن بلا زيادة. ثم <b>نقسمه بحكمة</b>: جزءٌ للموادّ، وجزءٌ للتغليف والإعلان، وجزءٌ احتياط، ونكتب كلّ شيء.`,
        `<b>Capital</b> is what you start a project with. We get it by saving, working, partnering, or a good loan with nothing extra added. Then we <b>divide it wisely</b>: part for materials, part for packaging and adverts, part as a reserve — and we write everything down.`
      ],
      islam: [
        `قال الله تعالى: ﴿هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ ۖ وَإِلَيْهِ النُّشُورُ﴾ — الله يسّر لنا الأرض، ويريد منّا أن نسعى ونعمل.`,
        `Allah says: "It is He who made the earth easy for you, so walk through its paths and eat of His provision — and to Him is the return." Allah made the earth easy for us, and wants us to strive and work.`
      ],
      src: ['الملك: ١٥', 'Al-Mulk 67:15'],
      mission: [
        `اكتب ثلاث طرقٍ تستطيع بها جمع رأس مالٍ لمشروعك، واختر واحدة مع والديك. ثم جهّز ثلاثة ظروف أو علب، واكتب عليها: موادّ · تغليف وإعلان · احتياط، وقسّم مالك فيها (ولو كان قليلًا)، واملأ جدول «تقسيم رأس المال».`,
        `Write three ways you could gather capital for your project, and choose one with your parents. Then prepare three envelopes or jars labelled: materials · packaging and adverts · reserve. Split your money between them (even if it is small), and fill the "Dividing my capital" table.`
      ],
      q: ['لماذا نترك جزءًا من رأس المال «احتياطًا»؟', 'Why do we keep part of the capital as a "reserve"?'],
      o: [
        ['لنشتري به حلوى', 'To buy sweets with it', 0],
        ['لأنّ المفاجآت تحدث، كأن ينسكب العصير أو ترتفع الأسعار', 'Because surprises happen, like spilt juice or prices going up', 1],
        ['لا فائدة منه', 'It is useless', 0]
      ],
      fb: [`أحسنت! الاحتياط يحمي مشروعك من التوقّف عند أوّل مشكلة.`, `Well done! A reserve protects your project from stopping at the first problem.`],
      podcast: {
        title: ['المحفظة الفارغة', 'The empty purse'],
        lines: [
          ['h', `مرحبًا بكم في حلقةٍ جديدة! سلمى، تبدين محتارة اليوم.`, `Welcome to a new episode! Salma, you look puzzled today.`],
          ['k', `نعم يا عمّ. أريد أن أبيع عصير الليمون، لكنّ محفظتي فارغة!`, `Yes, Uncle. I want to sell lemonade, but my purse is empty!`],
          ['h', `هذه أوّل عقبة لكلّ تاجر. أنتِ تحتاجين رأس مال. أي المال الذي تبدئين به.`, `That is every trader's first hurdle. You need capital. The money you start with.`],
          ['k', `وكيف يحصل عليه طفلٌ مثلي؟`, `And how does a kid like me get it?`],
          ['h', `أفكار كثيرة! ادّخار المصروف، أو العيديّة، أو بيع لعبة قديمة بإذن أهلك.`, `Lots of ideas! Saving pocket money, or Eid money, or selling an old toy with your parents' permission.`],
          ['k', `وماذا أيضًا؟`, `What else?`],
          ['h', `عملٌ صغير مقابل أجر، كترتيب المكتبة. أو شراكة مع أخيكِ. أو قرضٌ حسن من والدكِ تردّينه كما هو، بلا زيادة.`, `A small paid job, like tidying the bookshelf. Or a partnership with your brother. Or a good loan from your dad that you pay back exactly, with nothing extra.`],
          ['k', `اخترت الشراكة مع يوسف! جمعنا مئة.`, `I chose a partnership with Yusuf! We collected one hundred.`],
          ['h', `ممتاز. هل كتبتما من دفع كم، وكيف تقسمان الربح؟`, `Excellent. Did you both write down who paid how much, and how you will share the profit?`],
          ['k', `لا… هل هذا ضروريّ؟ هو أخي!`, `No… is that necessary? He is my brother!`],
          ['h', `حتى مع الإخوة. الاتّفاق المكتوب يحفظ المحبّة، فلا يختلف أحدٌ بعد ذلك.`, `Even with brothers. A written agreement protects your love, so nobody argues later.`],
          ['k', `حسنًا. وهل نصرف المئة كلّها على الليمون؟`, `Okay. And do we spend the whole hundred on lemons?`],
          ['h', `لا! قسّميها ثلاثة ظروف. ستّون للموادّ، وعشرون للتغليف والإعلان، وعشرون احتياط للمفاجآت.`, `No! Split it into three envelopes. Sixty for materials, twenty for packaging and adverts, and twenty as a reserve for surprises.`],
          ['k', `مثل لو سقط إبريق العصير!`, `Like if the lemonade jug falls!`],
          ['h', `بالضبط. والله أمرنا أن نمشي في الأرض ونسعى. مهمّة اليوم: جهّزي ثلاثة ظروف وقسّمي فيها رأس مالكِ. إلى اللقاء!`, `Exactly. And Allah told us to walk the earth and strive. Today's mission: prepare three envelopes and divide your capital into them. See you soon!`]
        ]
      }
    },

    /* ───────── 4 · Role models (goal 6) ───────── */
    {
      id: 'role-models', icon: '🐫', tag: 'deen',
      t: ['تجّارٌ عظماء', 'Great traders'],
      sub: ['قدواتٌ أمينة من تاريخنا', 'honest role models from our history'],
      pg: [
        ['🐪🌄', `قبل البعثة كان النبيّ ﷺ يعمل في التجارة، وكان الناس يسمّونه <b>«الأمين»</b> لصدقه وأمانته، حتى كانوا يتركون عنده ودائعهم.`, `Before prophethood, the Prophet ﷺ worked in trade, and people called him <b>"al-Amin" — the trustworthy</b> — for his honesty, so much that they left their valuables with him.`],
        ['👑🧕', `وكانت <b>خديجة</b> رضي الله عنها تاجرةً ناجحة، ترسل القوافل إلى الشام. فلمّا سمعت بأمانة محمّد ﷺ أرسلته بتجارتها، فرجع بخيرٍ وبركة.`, `<b>Khadijah</b>, may Allah be pleased with her, was a successful trader who sent caravans to Syria. When she heard of Muhammad's ﷺ honesty she sent him with her trade, and he returned with goodness and blessing.`],
        ['🏃‍♂️🏪', `ولمّا هاجر <b>عبد الرحمن بن عوف</b> إلى المدينة لم يكن معه مال. عرض عليه أخوه الأنصاريّ <b>سعد بن الربيع</b> نصف ماله، فشكره وقال: «دُلُّونِي عَلَى السُّوقِ».`, `When <b>Abd al-Rahman ibn Awf</b> migrated to Madinah he had no money. His Ansari brother <b>Sa'd ibn al-Rabi'</b> offered him half his wealth. He thanked him and said: "Show me the way to the market."`],
        ['🧀📈', `فبدأ ببيعٍ صغير، وربح شيئًا من الأقط والسمن، ثم كبرت تجارته حتى صار من أغنى الصحابة — وكان كثير الصدقة والإنفاق في سبيل الله.`, `He began with small trade and earned a little dried cheese and butter, then his trade grew until he became one of the richest Companions — and he gave a great deal in charity in the way of Allah.`],
        ['💧🪣', `وكان <b>عثمان بن عفّان</b> تاجرًا كريمًا، اشترى <b>بئر رُومة</b> في المدينة وجعل ماءها للمسلمين مجّانًا (رواه الترمذي وحسّنه).`, `<b>Uthman ibn Affan</b> was a generous trader who bought the <b>Well of Rumah</b> in Madinah and made its water free for the Muslims (narrated by al-Tirmidhi, who graded it hasan).`],
        ['⭐', `ماذا يجمعهم؟ <b>الصدق، والعمل، والكرم</b>. لم يكن المال في قلوبهم، بل في أيديهم يعملون به الخير.`, `What do they share? <b>Honesty, hard work and generosity</b>. Wealth was not in their hearts — it was in their hands, used to do good.`]
      ],
      learn: [
        `التاجر المسلم الناجح: <b>صادقٌ أمين</b> كالنبيّ ﷺ، <b>ذكيّ في العمل</b> كخديجة، <b>يعتمد على نفسه</b> كعبد الرحمن بن عوف، و<b>كريم</b> كعثمان. الغنى نعمة إذا استعملناه في الخير.`,
        `A successful Muslim trader is <b>honest and trustworthy</b> like the Prophet ﷺ, <b>smart at business</b> like Khadijah, <b>self-reliant</b> like Abd al-Rahman ibn Awf, and <b>generous</b> like Uthman. Wealth is a blessing when we use it for good.`
      ],
      islam: [
        `لمّا عرض سعد بن الربيع على عبد الرحمن بن عوف نصف ماله، قال عبد الرحمن: «بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، دُلُّونِي عَلَى السُّوقِ» — فاختار العمل بيده بدل أن يأخذ.`,
        `When Sa'd ibn al-Rabi' offered Abd al-Rahman ibn Awf half his wealth, Abd al-Rahman said: "May Allah bless your family and your wealth for you — show me the way to the market." He chose to work with his own hands rather than take.`
      ],
      src: ['صحيح البخاري ٢٠٤٩ (عن أنس)', 'Sahih al-Bukhari 2049 (from Anas)'],
      mission: [
        `اصنع <b>بطاقة بطل</b> لأحد هؤلاء التجّار: اسمه، وماذا كان يتاجر، وصفة واحدة تريد أن تقلّدها. ثم أجرِ <b>مقابلة</b> قصيرة مع شخص في عائلتك يعمل في التجارة أو عمل حرّ: كيف بدأ؟ وما أصعب مشكلة واجهها؟`,
        `Make a <b>hero card</b> for one of these traders: name, what they traded, and one quality you want to copy. Then do a short <b>interview</b> with someone in your family who works in trade or for themselves: how did they start? What was the hardest problem they faced?`
      ],
      q: ['ماذا قال عبد الرحمن بن عوف لمّا عُرض عليه نصف المال؟', 'What did Abd al-Rahman ibn Awf say when offered half the wealth?'],
      o: [
        ['أعطني المال كلّه', 'Give me all of it', 0],
        ['لا أريد أن أعمل', 'I don\'t want to work', 0],
        ['دُلّوني على السوق', 'Show me the way to the market', 1]
      ],
      fb: [`أحسنت! اختار أن يعمل ويتاجر بنفسه، فبارك الله له.`, `Well done! He chose to work and trade himself, and Allah blessed him.`],
      podcast: {
        title: ['دُلّوني على السوق', 'Show me the market'],
        lines: [
          ['h', `السلام عليكم! حلقة اليوم عن أبطال حقيقيّين. تجّارٌ من تاريخنا.`, `Assalamu alaikum! Today's episode is about real heroes. Traders from our history.`],
          ['k', `هل كان هناك صحابة تجّار يا عمّ؟`, `Were there Companions who were traders, Uncle?`],
          ['h', `كثيرون! بل النبيّ صلّى الله عليه وسلّم نفسه عمل في التجارة قبل البعثة. وكان الناس يسمّونه الأمين.`, `Many! In fact the Prophet, peace be upon him, worked in trade himself before prophethood. People called him al-Amin, the trustworthy.`],
          ['k', `لماذا الأمين؟`, `Why al-Amin?`],
          ['h', `لأنّه لا يكذب، ولا يغشّ، ويحفظ الأمانات. حتى خديجة رضي الله عنها، وكانت تاجرةً كبيرة، اختارته ليتاجر بمالها.`, `Because he never lied, never cheated, and kept what people trusted him with. Even Khadijah, may Allah be pleased with her, a big trader, chose him to trade with her money.`],
          ['k', `واو! امرأة تاجرة ناجحة!`, `Wow! A successful businesswoman!`],
          ['h', `نعم. والآن قصّة أحبّها. عبد الرحمن بن عوف هاجر إلى المدينة بلا مال.`, `Yes. Now a story I love. Abd al-Rahman ibn Awf migrated to Madinah with no money.`],
          ['k', `يا حرام! ماذا فعل؟`, `Oh no! What did he do?`],
          ['h', `عرض عليه أخوه الأنصاريّ سعد نصف ماله. تخيّلي! لكنّه قال: بارك الله لك، دُلّوني على السوق.`, `His Ansari brother Sa'd offered him half his wealth. Imagine! But he said: may Allah bless you, show me the way to the market.`],
          ['k', `يعني فضّل أن يعمل بنفسه؟`, `So he preferred to work for himself?`],
          ['h', `بالضبط. بدأ صغيرًا ببيع السمن والأقط، ثم صار من أغنى الصحابة، وكان يتصدّق كثيرًا.`, `Exactly. He started small, selling butter and dried cheese, then became one of the richest Companions, and he gave lots in charity.`],
          ['k', `وعثمان بن عفّان؟ سمعت أنّه كريم.`, `And Uthman ibn Affan? I heard he was generous.`],
          ['h', `كريمٌ جدًّا. اشترى بئر رومة وجعل ماءها مجّانًا للناس. تجارته صارت خيرًا للجميع.`, `Very generous. He bought the Well of Rumah and made its water free for people. His trade became good for everyone.`],
          ['k', `سأكون صادقةً مثل النبيّ، وأعتمد على نفسي مثل عبد الرحمن.`, `I will be honest like the Prophet, and rely on myself like Abd al-Rahman.`],
          ['h', `نيّةٌ جميلة! مهمّة اليوم: اصنعي بطاقة بطل لأحدهم، واسألي أحد أقاربكِ كيف بدأ عمله. إلى اللقاء!`, `A beautiful intention! Today's mission: make a hero card for one of them, and ask a relative how they started their work. Goodbye!`]
        ]
      }
    },

    /* ───────── 5 · Fiqh of trade + practice shop (goals 9, 22) ───────── */
    {
      id: 'halal-trade', icon: '🤝', tag: 'deen',
      t: ['قواعد السوق الحلال', 'Rules of the halal market'],
      sub: ['من فقه البيوع — ودكّان البيت', 'from the fiqh of trade — and the home shop'],
      pg: [
        ['🍎🍎', `في دكّان العمّ أمين جاء بائعٌ يقترح: لنضع التفّاح الجيّد فوق، والمعطوب تحته، فلا يراه أحد! فابتسم العمّ وقال: لا يا صاحبي، هذا غشّ.`, `At Uncle Amin's shop a seller suggested: let's put the good apples on top and the bruised ones underneath, so nobody sees! Uncle smiled and said: no, my friend, that is cheating.`],
        ['🌾✋', `ثم حكى لسلمى: مرّ النبيّ ﷺ على كومة طعام، فأدخل يده فيها فوجد أسفلها مبلولًا، فقال: لماذا لم تجعله فوق حتى يراه الناس؟ «مَنْ غَشَّ فَلَيْسَ مِنِّي».`, `Then he told Salma: the Prophet ﷺ passed by a heap of food, put his hand in and found the bottom wet. He said: why didn't you put it on top so people could see it? "Whoever cheats is not of me."`],
        ['⚖️', `القاعدة الثانية: <b>أوفِ الكيل والميزان</b>. إذا قلت «كوبٌ ممتلئ» فاملأه، وإذا قلت «عشر فواصل» فلا تعطِ تسعًا.`, `Rule two: <b>give full measure and weight</b>. If you say "a full cup", fill it; if you say "ten bookmarks", don't give nine.`],
        ['🗣️🤝', `القاعدة الثالثة: البيع <b>برضا الطرفين</b>، ولكلٍّ منهما الخيار ما داما في مجلس البيع لم يتفرّقا. فلا تُلحّ على أحد، ولا تُجبره.`, `Rule three: a sale is <b>by agreement of both sides</b>, and each has the choice to cancel while they are still together and haven't parted. So never pressure or force anyone.`],
        ['🚫💰', `القاعدة الرابعة: <b>الربا حرام</b>. الربا أن تُقرض أحدًا مالًا وتشترط أن يردّه أكثر. أمّا الربح من البيع الصادق فحلالٌ طيّب. ونبيع الحلال فقط.`, `Rule four: <b>riba is forbidden</b>. Riba is lending someone money on condition they pay back more. But profit from honest selling is halal and good. And we only sell halal things.`],
        ['🏪🪙', `ثم فتحت سلمى <b>دكّان البيت</b>: خمس سلع، وبطاقات أسعار، ونقود ورقيّة. اشترت أمّها، فقالت سلمى: هذا القلم جديد، وهذه الممحاة فيها خدش صغير — فسعرها أقلّ.`, `Then Salma opened her <b>home shop</b>: five items, price tags and paper money. Her mother bought, and Salma said: this pen is new, and this eraser has a small scratch — so it's cheaper.`]
      ],
      learn: [
        `من <b>فقه البيوع</b>: ① الصدق وبيان العيب، ولا غشّ. ② الوفاء بالكيل والوزن. ③ البيع بالتراضي، ولكلٍّ الخيار قبل التفرّق. ④ ﴿وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا﴾ (البقرة: ٢٧٥). ⑤ نبيع الحلال الطيّب.`,
        `From the <b>fiqh of trade</b>: ① honesty and showing defects — no cheating. ② full measure and weight. ③ selling by mutual agreement, each with the choice before parting. ④ "Allah has permitted trade and forbidden riba" (al-Baqarah 2:275). ⑤ we sell only what is halal and good.`
      ],
      islam: [
        `قال رسول الله ﷺ: «مَنْ غَشَّ فَلَيْسَ مِنِّي». وقال ﷺ: «البَيِّعَانِ بِالخِيَارِ مَا لَمْ يَتَفَرَّقَا». وقال الله تعالى: ﴿وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا﴾.`,
        `The Messenger of Allah ﷺ said: "Whoever cheats is not of me." And he ﷺ said: "The buyer and the seller have the choice as long as they have not parted." And Allah says: "Allah has permitted trade and forbidden riba."`
      ],
      src: ['صحيح مسلم ١٠٢ · صحيح البخاري ٢٠٧٩ وصحيح مسلم ١٥٣٢ · البقرة: ٢٧٥', 'Sahih Muslim 102 · Sahih al-Bukhari 2079 and Sahih Muslim 1532 · Al-Baqarah 2:275'],
      mission: [
        `افتح <b>دكّان البيت</b> اليوم: اختر ٥ أشياء، واكتب لها بطاقات أسعار، واصنع نقودًا ورقيّة. ليشترِ منك أفراد عائلتك. تدرّب على: التحيّة، وذكر السعر، وإرجاع الباقي، وبيان أيّ عيب، وأن تقول في النهاية: «بارك الله لك». ثم بدّلوا الأدوار: أنت المشتري!`,
        `Open your <b>home shop</b> today: choose 5 things, make price tags, and make paper money. Let your family buy from you. Practise: greeting, saying the price, giving change, pointing out any defect, and finishing with "May Allah bless it for you." Then swap roles — you are the buyer!`
      ],
      q: ['وجدتَ عيبًا صغيرًا في سلعة تبيعها. ماذا تفعل؟', 'You find a small defect in something you are selling. What do you do?'],
      o: [
        ['أخفيه حتى لا يراه الزبون', 'Hide it so the customer doesn\'t see', 0],
        ['أبيّنه للزبون بصدق', 'Show it honestly to the customer', 1],
        ['أرفع سعرها', 'Raise its price', 0]
      ],
      fb: [`أحسنت! بيان العيب صدقٌ وأمانة، والنبيّ ﷺ قال: «من غشّ فليس منّي».`, `Well done! Showing the defect is honesty and trust — the Prophet ﷺ said: "Whoever cheats is not of me."`],
      podcast: {
        title: ['التفّاحة المخبّأة', 'The hidden apple'],
        lines: [
          ['h', `أهلًا يا أصدقاء! اليوم نتكلّم عن قواعد السوق الحلال. سلمى، حدث شيءٌ في دكّاني اليوم.`, `Hello, friends! Today we talk about the rules of the halal market. Salma, something happened at my shop today.`],
          ['k', `ماذا حدث يا عمّ؟`, `What happened, Uncle?`],
          ['h', `اقترح بائع أن نضع التفّاح الجميل فوق، والمعطوب تحت. حتى يظنّ الزبون أنّ الكلّ جيّد.`, `A seller suggested we put the nice apples on top and the bruised ones below. So customers think they are all good.`],
          ['k', `هذا ليس عدلًا! الزبون سيحزن عندما يصل البيت.`, `That's not fair! The customer will be sad when they get home.`],
          ['h', `صحيح. ومرّةً وجد النبيّ صلّى الله عليه وسلّم طعامًا مبلولًا تحت كومة جافّة. فقال: من غشّ فليس منّي.`, `True. Once the Prophet, peace be upon him, found wet food hidden under a dry heap. He said: whoever cheats is not of me.`],
          ['k', `إذن أوّل قاعدة الصدق. وما الثانية؟`, `So rule one is honesty. What is rule two?`],
          ['h', `الوفاء بالكيل. إذا قلتِ كوبٌ ممتلئ فاملئيه للآخر.`, `Full measure. If you say a full cup, fill it right up.`],
          ['k', `والثالثة؟`, `And the third?`],
          ['h', `الرضا. لا نُجبر أحدًا. والنبيّ قال: البيّعان بالخيار ما لم يتفرّقا. يعني يمكن لأحدهما أن يتراجع قبل أن يفترقا.`, `Agreement. We never force anyone. The Prophet said: the buyer and seller have the choice as long as they have not parted. Either can change their mind before they separate.`],
          ['k', `وسمعت كلمة الربا. ما هو؟`, `I heard the word riba. What is it?`],
          ['h', `أن تُقرضي صديقتكِ عشرة، وتقولي: ردّيها اثني عشر. هذه الزيادة المشروطة حرام. أمّا ربح البيع الصادق فحلال.`, `It's lending your friend ten and saying: give me back twelve. That extra, made a condition, is forbidden. But profit from honest selling is halal.`],
          ['k', `فهمت! البيع حلال والربا حرام.`, `I see! Trade is halal and riba is haram.`],
          ['h', `هكذا قال الله في القرآن. والآن، هل جرّبتِ دكّان البيت؟`, `That is what Allah says in the Quran. Now, have you tried the home shop?`],
          ['k', `نعم! وقلت لأمّي: هذه الممحاة فيها خدش، فسعرها أقلّ. فضحكت وقالت: بارك الله فيكِ!`, `Yes! I told Mum: this eraser has a scratch, so it's cheaper. She laughed and said: may Allah bless you!`],
          ['h', `هذه تاجرةٌ أمينة! مهمّة اليوم: افتحوا دكّان البيت، وتدرّبوا على البيع والشراء بصدق. إلى اللقاء!`, `That is an honest trader! Today's mission: open your home shop and practise buying and selling honestly. Goodbye!`]
        ]
      }
    },

    /* ───────── 6 · Plan: stages, audience, goal, mind map, business plan (11, 12, 13, 17, 24) ───────── */
    {
      id: 'my-plan', icon: '🗺️', tag: 'project',
      t: ['خطّة مشروعي', 'My project plan'],
      sub: ['المراحل · الجمهور · الهدف · الخريطة الذهنية', 'stages · audience · goal · mind map'],
      pg: [
        ['🍋🔖', `جلست سلمى ويوسف يفكّران: نبيع عصير الليمون؟ أم <b>فواصل كتبٍ</b> مرسومة باليد؟ قال العمّ: التاجر لا يقفز، بل يمشي على <b>مراحل</b>.`, `Salma and Yusuf sat thinking: should we sell lemonade? Or hand-drawn <b>bookmarks</b>? Uncle said: a trader doesn't jump — he walks in <b>stages</b>.`],
        ['🪜', `مراحل تأسيس المشروع: ① الفكرة ② السؤال والبحث ③ الهدف ④ الخطّة ⑤ التجهيز ⑥ التجربة الصغيرة ⑦ الإطلاق ⑧ المراجعة والتحسين.`, `The stages of starting a project: ① the idea ② asking and researching ③ the goal ④ the plan ⑤ preparing ⑥ a small test ⑦ the launch ⑧ reviewing and improving.`],
        ['🏡❓', `<b>الجمهور</b> هم من سيشترون منك. سألت سلمى عائلتها: ماذا تحبّون أكثر؟ فقال الكبار: العصير في الحرّ! وقالت ابنة خالتها: أنا أحبّ الفواصل للقراءة.`, `The <b>audience</b> are the people who will buy from you. Salma asked her family: what would you like more? The grown-ups said: lemonade in the heat! Her cousin said: I love bookmarks for reading.`],
        ['🎯', `ثم <b>الهدف</b>: لماذا أعمل هذا المشروع؟ كتبت سلمى: «أتعلّم التجارة، وأشتري كتابًا، وأتصدّق بجزءٍ من الربح». الهدف الواضح يجعلك لا تستسلم.`, `Then the <b>goal</b>: why am I doing this project? Salma wrote: "To learn trading, buy a book, and give part of the profit in charity." A clear goal keeps you from giving up.`],
        ['🧠🌳', `ورسمت <b>خريطة ذهنية</b>: في الوسط «عصير سلمى»، ومنه فروع: المنتج، الزبائن، التكلفة، السعر، العرض، الإعلان، المكان والوقت، من يساعدني. فرأت المشروع كلّه في ورقة واحدة!`, `She drew a <b>mind map</b>: "Salma's Lemonade" in the middle, with branches: product, customers, cost, price, offer, advert, place and time, who helps me. She saw the whole project on one page!`],
        ['📋✅', `ومن الخريطة كتبت <b>خطّة العمل</b> في صفحة واحدة: ماذا، ولمن، وأين، ومتى، وبكم، ومن يساعد. ثم عرضتها على أبيها ليستشيره، فاقترح: يوم الجمعة بعد العصر عند اجتماع العائلة.`, `From the map she wrote a one-page <b>business plan</b>: what, for whom, where, when, how much, and who helps. Then she showed it to her father to consult him, and he suggested: Friday after Asr, when the family gathers.`]
      ],
      learn: [
        `المشروع يمرّ بـ<b>مراحل</b>: فكرة ← بحث ← هدف ← خطّة ← تجهيز ← تجربة ← إطلاق ← مراجعة. نعرف <b>جمهورنا</b> بالسؤال، ونكتب <b>هدفنا</b>، ونرسم <b>خريطة ذهنية</b>، ثم نكتب <b>خطّة العمل</b> ونستشير الكبار.`,
        `A project goes through <b>stages</b>: idea → research → goal → plan → prepare → test → launch → review. We learn about our <b>audience</b> by asking, write our <b>goal</b>, draw a <b>mind map</b>, then write the <b>business plan</b> and consult the grown-ups.`
      ],
      islam: [
        `قال الله تعالى لنبيّه ﷺ: ﴿وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ﴾ — نستشير، ونخطّط، ثم نعزم ونتوكّل على الله.`,
        `Allah says to His Prophet ﷺ: "And consult them in the matter; then when you have decided, put your trust in Allah." We consult, we plan, then we decide and trust Allah.`
      ],
      src: ['آل عمران: ١٥٩', 'Aal Imran 3:159'],
      mission: [
        `① اختر فكرة مشروعك (عصير ليمون، فواصل كتب، بطاقات معايدة، زرعة صغيرة…). ② اسأل ٣ أفراد من عائلتك: هل ستشترون؟ ماذا تحبّون؟ ③ ارسم خريطتك الذهنية في ورقة النشاط. ④ املأ «خطّة المشروع في صفحة واحدة» واعرضها على والديك واستشرهما.`,
        `① Choose your project idea (lemonade, bookmarks, greeting cards, a small plant…). ② Ask 3 family members: would you buy? What would you like? ③ Draw your mind map on the activity sheet. ④ Fill in the "One-page project plan" and show it to your parents to consult them.`
      ],
      q: ['من هو «جمهور» مشروعك؟', 'Who is your project\'s "audience"?'],
      o: [
        ['الأشخاص الذين سيشترون منك', 'The people who will buy from you', 1],
        ['الذين يصفّقون في المسرح فقط', 'Only people who clap in a theatre', 0],
        ['الموادّ التي تشتريها', 'The materials you buy', 0]
      ],
      fb: [`صحيح! الجمهور هم زبائنك، ونعرف ما يحبّون بالسؤال قبل أن نبدأ.`, `Correct! Your audience are your customers, and we learn what they like by asking before we start.`],
      podcast: {
        title: ['الخريطة التي تفكّر', 'The map that thinks'],
        lines: [
          ['h', `السلام عليكم يا روّاد الأعمال الصغار! اليوم نكتب خطّة. سلمى، هل اخترتِ مشروعكِ؟`, `Assalamu alaikum, little entrepreneurs! Today we write a plan. Salma, have you chosen your project?`],
          ['k', `محتارة يا عمّ! عصير ليمون أم فواصل كتب أرسمها بيدي؟`, `I can't decide, Uncle! Lemonade, or bookmarks I draw by hand?`],
          ['h', `لا تقرّري وحدكِ. اسألي جمهوركِ. أي الذين سيشترون منكِ.`, `Don't decide alone. Ask your audience. The people who will buy from you.`],
          ['k', `سألت عائلتي. الكبار يريدون العصير، وابنة خالتي تريد الفواصل.`, `I asked my family. The grown-ups want lemonade, and my cousin wants bookmarks.`],
          ['h', `رائع! هذا اسمه بحث السوق. والآن، ما هدفكِ من المشروع؟`, `Great! That's called market research. Now, what is your goal for the project?`],
          ['k', `أتعلّم التجارة، وأشتري كتابًا، وأتصدّق بشيء.`, `To learn trading, buy a book, and give something in charity.`],
          ['h', `هدفٌ جميل وواضح. والآن أعلّمكِ سحر الخريطة الذهنية.`, `A lovely, clear goal. Now let me teach you the magic of a mind map.`],
          ['k', `خريطة؟ مثل خريطة الكنز؟`, `A map? Like a treasure map?`],
          ['h', `تقريبًا! اكتبي اسم المشروع في دائرة في الوسط. ثم ارسمي فروعًا مثل أغصان الشجرة.`, `Almost! Write the project name in a circle in the middle. Then draw branches like a tree.`],
          ['k', `وماذا أكتب على الفروع؟`, `And what do I write on the branches?`],
          ['h', `المنتج، الزبائن، التكلفة، السعر، العرض، الإعلان، المكان والوقت، ومن يساعدكِ.`, `Product, customers, cost, price, offer, advert, place and time, and who helps you.`],
          ['k', `رسمتها! أرى المشروع كلّه في ورقة واحدة!`, `I drew it! I can see the whole project on one page!`],
          ['h', `هذه قوّة الخريطة. ومنها تكتبين خطّة العمل. ثم تستشيرين والدكِ، فالله أمر نبيّه بالشورى.`, `That is the power of the map. From it you write the business plan. Then consult your dad — Allah told His Prophet to consult.`],
          ['k', `أبي اقترح يوم الجمعة بعد العصر، عندما تجتمع العائلة.`, `Dad suggested Friday after Asr, when the family gets together.`],
          ['h', `اقتراحٌ ذكيّ. مهمّة اليوم: ارسمي خريطتكِ الذهنية واملئي خطّة الصفحة الواحدة. إلى اللقاء!`, `A smart suggestion. Today's mission: draw your mind map and fill in the one-page plan. See you next time!`]
        ]
      }
    },

    /* ───────── 7 · Price, offers, marketing, platforms (14, 15, 16, 18) ───────── */
    {
      id: 'price-and-ads', icon: '🏷️', tag: 'project',
      t: ['السعر والعرض والإعلان', 'Price, offer and advert'],
      sub: ['كم أبيع؟ وكيف يعرف الناس؟', 'how much, and how will people know?'],
      pg: [
        ['🧮🍋', `حسبت سلمى التكلفة: ليمون ١٥، وسكّر ٥، وأكواب ١٠ = <b>٣٠</b>، وتكفي لـ١٥ كوبًا. إذن <b>تكلفة الكوب = ٣٠ ÷ ١٥ = ٢</b>.`, `Salma worked out the cost: lemons 15, sugar 5, cups 10 = <b>30</b>, enough for 15 cups. So <b>cost per cup = 30 ÷ 15 = 2</b>.`],
        ['🏷️⚖️', `<b>التسعير</b>: السعر = التكلفة + ربحٌ عادل. وتسأل: كم يبيع غيري؟ وكم يستطيع زبوني أن يدفع؟ فاختارت <b>٥ للكوب</b>: ليس غاليًا فيهرب الزبون، ولا رخيصًا فتخسر.`, `<b>Pricing</b>: price = cost + a fair profit. Ask: what do others charge? What can my customer afford? She chose <b>5 a cup</b>: not so expensive that customers run away, not so cheap that she loses.`],
        ['🎁', `ثم <b>العرض</b>: «كوبان بـ٩» أو «فاصل هديّة مع كلّ ٣ أكواب». قال العمّ: العرض الصادق يفرح الزبون. أمّا أن تكتب «كان بـ٢٠ والآن بـ٥» وهو لم يكن بـ٢٠ قطّ، فهذا كذب.`, `Then the <b>offer</b>: "2 cups for 9" or "a free bookmark with every 3 cups". Uncle said: an honest offer delights the customer. But writing "was 20, now 5" when it was never 20 — that is a lie.`],
        ['📣😊', `<b>التسويق</b> أن تُخبر الناس بمنتجك بطريقةٍ جميلة وصادقة. اختارت سلمى اسمًا: «ليمونة سلمى»، وشعارًا مرسومًا، وجملةً قصيرة: «انتعش بالحلال الطيّب!»`, `<b>Marketing</b> is telling people about your product in a beautiful, honest way. Salma chose a name, "Salma's Lemon", a drawn logo, and a short slogan: "Refresh yourself with something good!"`],
        ['🪧📱', `<b>منصّات الإعلان</b>: ملصق على باب البيت أو الثلّاجة، والكلمة الطيّبة من زبونٍ سعيد، والإعلان في اجتماع العائلة، ورسالة في مجموعة العائلة من هاتف أمّها، وسوق خيريّ في المدرسة أو المسجد بإذن.`, `<b>Places to advertise</b>: a poster on the front door or fridge, kind word of mouth from a happy customer, announcing it at a family gathering, a message in the family group from her mum's phone, and a school or mosque charity fair with permission.`],
        ['🛡️', `وقاعدة الأمان: الإعلان على الإنترنت يتولّاه والداك فقط، بلا صورتك ولا عنوانك.`, `And the safety rule: any online advert is done by your parents only, with no photo of you and no address.`]
      ],
      learn: [
        `<b>التسعير</b> = التكلفة + ربحٌ عادل، مع النظر في السوق والزبون. <b>العرض</b> يكون صادقًا بلا خداع. <b>التسويق</b>: اسم، وشعار، وجملة قصيرة صادقة. و<b>المنصّات</b> الآمنة: ملصق، واجتماع العائلة، والكلمة الطيّبة، ومجموعة العائلة عبر الوالدين.`,
        `<b>Pricing</b> = cost + a fair profit, looking at the market and the customer. An <b>offer</b> is honest with no tricks. <b>Marketing</b>: a name, a logo and a short honest slogan. Safe <b>platforms</b>: a poster, family gatherings, word of mouth, and the family group through your parents.`
      ],
      islam: [
        `قال الله تعالى: ﴿وَيْلٌ لِّلْمُطَفِّفِينَ ۝ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ ۝ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ﴾ — فالكوب الذي تعلن عنه ممتلئًا يكون ممتلئًا حقًّا، والعرض الذي تكتبه يكون صادقًا.`,
        `Allah says: "Woe to those who give short measure — who, when they take a measure from people, take it in full, but when they measure or weigh for them, give less." So the cup you advertise as full must really be full, and the offer you write must be true.`
      ],
      src: ['المطفّفين: ١–٣', 'Al-Mutaffifin 83:1–3'],
      mission: [
        `① احسب تكلفة القطعة الواحدة لمنتجك (مجموع التكاليف ÷ عدد القطع). ② اختر سعرًا عادلًا. ③ صمّم عرضًا صادقًا واحدًا. ④ ارسم ملصقًا فيه: الاسم، والشعار، والسعر، والعرض، والوقت. ⑤ اختر مع والديك منصّتين آمنتين للإعلان.`,
        `① Work out the cost of one piece of your product (total cost ÷ number of pieces). ② Choose a fair price. ③ Design one honest offer. ④ Draw a poster with: name, logo, price, offer and time. ⑤ With your parents, choose two safe places to advertise.`
      ],
      q: ['صنعتَ ١٠ فواصل بتكلفة ٢٠. كم تكلفة الفاصل الواحد؟', 'You made 10 bookmarks for a total cost of 20. What is the cost of one bookmark?'],
      o: [
        ['٢٠', '20', 0],
        ['١٠', '10', 0],
        ['٢', '2', 1]
      ],
      fb: [`أحسنت! ٢٠ ÷ ١٠ = ٢. والآن تضيف ربحًا عادلًا لتختار السعر.`, `Well done! 20 ÷ 10 = 2. Now you add a fair profit to choose the price.`],
      podcast: {
        title: ['ليمونة سلمى', 'Salma\'s Lemon'],
        lines: [
          ['h', `أهلًا بكم! اليوم حلقة الأرقام والألوان. السعر، والعرض، والإعلان. سلمى، كم كلّفكِ العصير؟`, `Welcome! Today is the episode of numbers and colours. Price, offer and advert. Salma, how much did your lemonade cost?`],
          ['k', `ليمون خمسة عشر، وسكّر خمسة، وأكواب عشرة. المجموع ثلاثون. ويكفي لخمسة عشر كوبًا.`, `Lemons fifteen, sugar five, cups ten. Thirty in total. Enough for fifteen cups.`],
          ['h', `إذن تكلفة الكوب الواحد؟`, `So the cost of one cup is?`],
          ['k', `ثلاثون تقسيم خمسة عشر. اثنان!`, `Thirty divided by fifteen. Two!`],
          ['h', `ممتاز. والسعر يكون التكلفة مع ربحٍ عادل. لو بعتِه باثنين؟`, `Excellent. The price is the cost plus a fair profit. What if you sold it for two?`],
          ['k', `لن أربح شيئًا! ولو بعته بعشرين لن يشتري أحد.`, `I'd earn nothing! And if I sold it for twenty, nobody would buy.`],
          ['h', `بالضبط. لذلك اخترتِ خمسة. والآن العرض. ماذا تقترحين؟`, `Exactly. That's why you chose five. Now the offer. What do you suggest?`],
          ['k', `كوبان بتسعة! أو فاصلٌ هديّة مع كلّ ثلاثة أكواب.`, `Two cups for nine! Or a free bookmark with every three cups.`],
          ['h', `عرضٌ صادق وجميل. لكن احذري أن تكتبي: كان بعشرين والآن بخمسة، وهو لم يكن بعشرين أبدًا.`, `Honest and lovely. But never write: was twenty, now five, if it was never twenty.`],
          ['k', `هذا كذب! والله ذمّ من يُنقص الكيل.`, `That's a lie! And Allah condemns those who give short measure.`],
          ['h', `أحسنتِ. والآن التسويق. يعني أن تخبري الناس بمنتجكِ بطريقة جميلة وصادقة.`, `Well done. Now marketing. It means telling people about your product in a lovely, honest way.`],
          ['k', `سمّيته ليمونة سلمى! ورسمت ليمونة تبتسم.`, `I named it Salma's Lemon! And I drew a smiling lemon.`],
          ['h', `رائع! وأين ستعلنين؟`, `Wonderful! And where will you advertise?`],
          ['k', `ملصق على باب البيت، وأمّي ترسل رسالة في مجموعة العائلة. ولا أضع صورتي على الإنترنت.`, `A poster on our front door, and Mum will send a message in the family group. And I won't put my photo online.`],
          ['h', `هذه تاجرةٌ ذكيّة وآمنة. مهمّة اليوم: احسبي تكلفة القطعة، واختاري سعرًا وعرضًا، وارسمي ملصقكِ. إلى اللقاء!`, `A smart and safe trader. Today's mission: work out the cost per piece, choose a price and an offer, and draw your poster. Goodbye!`]
        ]
      }
    },

    /* ───────── 8 · Launch day + problem solving + sample projects (21, 22, 23, 25) ───────── */
    {
      id: 'launch-day', icon: '🚀', tag: 'project',
      t: ['يوم الإطلاق!', 'Launch day!'],
      sub: ['مشروعي الأوّل — ومشكلاتٌ نحلّها', 'my first project — and problems we solve'],
      pg: [
        ['🍋🥤', `جاء يوم الجمعة! غسلت سلمى يديها، وعصرت الليمون مع أمّها، ورتّبت الطاولة والملصق والأكواب. وقالت: بسم الله، توكّلت على الله.`, `Friday came! Salma washed her hands, squeezed the lemons with her mum, and set up the table, the poster and the cups. She said: Bismillah, I put my trust in Allah.`],
        ['😊👋', `أوّل زبون كان جدّها. ابتسمت وسلّمت وقالت: كوبٌ بخمسة، أو كوبان بتسعة. فاشترى كوبين، وأعادت له الباقي بدقّة، وقالت: بارك الله لك!`, `The first customer was her grandfather. She smiled, greeted him and said: one cup for 5, or two for 9. He bought two, she gave him the exact change, and said: May Allah bless it for you!`],
        ['☀️🧊', `<b>المشكلة الأولى:</b> ذاب الثلج سريعًا في الحرّ! فتوقّفت سلمى وفكّرت: ① ما المشكلة؟ العصير يسخن. ② ما الحلول؟ ظلّ، وإبريق في الثلّاجة، وثلج قليل في كلّ كوب. ③ جرّبت الأفضل. فنجح!`, `<b>Problem one:</b> the ice melted fast in the heat! Salma stopped and thought: ① What's the problem? The juice gets warm. ② What are the solutions? Shade, a jug in the fridge, a little ice in each cup. ③ She tried the best one. It worked!`],
        ['⏳😕', `<b>المشكلة الثانية:</b> في أوّل نصف ساعة لم يأتِ إلّا شخصان. لم تحزن، بل سألت أخاها يوسف أن ينادي الأقارب في الغرفة الأخرى بلطف، ونقلت الطاولة قرب مكان الجلوس.`, `<b>Problem two:</b> in the first half hour only two people came. She didn't get upset — she asked Yusuf to kindly call the relatives from the other room, and moved the table near where everyone sat.`],
        ['💧🤲', `<b>المشكلة الثالثة:</b> انسكب كوب على ابن عمّها الصغير. اعتذرت، ونظّفت، وأعطته كوبًا جديدًا مجّانًا. فقال الجميع: هذه تاجرة أمينة!`, `<b>Problem three:</b> a cup spilled on her little cousin. She apologised, cleaned up, and gave him a new cup for free. Everyone said: what an honest trader!`],
        ['📒🔖🍪', `في المساء حكى العمّ عن مشاريع أخرى: <b>فواصل</b> انثنت ← الحلّ ورقٌ مقوّى. <b>كعك</b> احترق ← الحلّ مؤقّت ووقتٌ أقصر مع شخص كبير. <b>زرعات</b> ذبلت ← الحلّ جدول سقاية. كلّ مشكلة لها حلّ عمليّ.`, `In the evening Uncle told of other projects: <b>bookmarks</b> bent → solution: thicker card. <b>Cookies</b> burnt → a timer and shorter baking, with an adult. <b>Plants</b> wilted → a watering chart. Every problem has a practical solution.`]
      ],
      learn: [
        `<b>إطلاق المشروع</b>: تجهيز، وابتسامة، وصدق، وباقٍ دقيق. و<b>حلّ المشكلات</b> بخطوات: ① توقّف وسمِّ المشكلة ② اكتب ٣ حلول ③ جرّب الأفضل ④ تعلّم وسجّل. المشكلة ليست فشلًا، بل درسٌ يجعلك تاجرًا أقوى.`,
        `<b>Launching</b>: be prepared, smile, be honest, give exact change. <b>Problem solving</b> in steps: ① stop and name the problem ② write 3 solutions ③ try the best one ④ learn and write it down. A problem is not failure — it's a lesson that makes you a stronger trader.`
      ],
      islam: [
        `قال الله تعالى: ﴿فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾ — مع كلّ مشكلة يجعل الله تيسيرًا، فلا نيأس، ونبحث عن الحلّ.`,
        `Allah says: "So indeed, with hardship comes ease. Indeed, with hardship comes ease." With every problem Allah brings ease, so we don't despair — we look for the solution.`
      ],
      src: ['الشرح: ٥–٦', 'Ash-Sharh 94:5–6'],
      mission: [
        `<b>المهمّة الكبرى — أطلِق مشروعك الحقيقيّ!</b> مع أحد والديك، بِع منتجك لعائلتك أو أقاربك لمدّة ساعة تقريبًا. سجّل في «دفتر يوم البيع»: كم بعت؟ وكم التكلفة؟ واكتب مشكلةً واحدة واجهتك وكيف حللتها بالخطوات الأربع.`,
        `<b>The big mission — launch your real project!</b> With a parent, sell your product to your family or relatives for about an hour. In the "Sales-day notebook" write: how much did you sell? What was the cost? And write one problem you faced and how you solved it with the four steps.`
      ],
      q: ['قلّ الزبائن في أوّل ساعة. ما أفضل تصرّف؟', 'Few customers came in the first hour. What is the best thing to do?'],
      o: [
        ['أغلق المشروع وأحزن', 'Close the project and feel sad', 0],
        ['أفكّر في السبب وأجرّب حلًّا، كتغيير المكان أو دعوة الناس بلطف', 'Think about why and try a solution, like moving the table or kindly inviting people', 1],
        ['أُجبر الناس على الشراء', 'Force people to buy', 0]
      ],
      fb: [`ممتاز! التاجر يسمّي المشكلة ويجرّب حلولًا، ومع العسر يسر.`, `Excellent! A trader names the problem and tries solutions — with hardship comes ease.`],
      podcast: {
        title: ['الثلج الذي ذاب', 'The ice that melted'],
        lines: [
          ['h', `السلام عليكم! حلقة اليوم مميّزة جدًّا. سلمى أطلقت مشروعها الأوّل! كيف كان يا سلمى؟`, `Assalamu alaikum! Today's episode is very special. Salma launched her first project! How was it, Salma?`],
          ['k', `يا عمّ، كان قلبي يدقّ بسرعة! لكنّي قلت بسم الله وبدأت.`, `Uncle, my heart was racing! But I said Bismillah and started.`],
          ['h', `ومن كان أوّل زبون؟`, `Who was your first customer?`],
          ['k', `جدّي! اشترى كوبين بتسعة، وأعدت له الباقي بالضبط.`, `My grandpa! He bought two cups for nine, and I gave him the exact change.`],
          ['h', `رائع. وهل واجهتِ مشكلات؟ فكلّ تاجر يواجه مشكلات.`, `Wonderful. Did you face any problems? Every trader does.`],
          ['k', `ثلاث مشكلات! أوّلًا ذاب الثلج والعصير صار دافئًا.`, `Three problems! First, the ice melted and the juice got warm.`],
          ['h', `وماذا فعلتِ؟`, `What did you do?`],
          ['k', `تذكّرت خطواتك. سمّيت المشكلة، وفكّرت في ثلاثة حلول، فوضعت الإبريق في الثلّاجة وأخرجته كلّما احتجت.`, `I remembered your steps. I named the problem, thought of three solutions, then kept the jug in the fridge and took it out when needed.`],
          ['h', `هذا حلٌّ عمليّ ممتاز. والثانية؟`, `A brilliant practical solution. And the second?`],
          ['k', `في البداية لم يأتِ أحد تقريبًا. فنقلت الطاولة قرب جلسة العائلة.`, `At first almost nobody came. So I moved the table near where the family was sitting.`],
          ['h', `ذكيّة! الزبون يحبّ القريب. والثالثة؟`, `Clever! Customers like things close by. And the third?`],
          ['k', `انسكب كوب على ابن عمّي الصغير. اعتذرت، وأعطيته كوبًا جديدًا مجّانًا.`, `A cup spilled on my little cousin. I apologised and gave him a new cup for free.`],
          ['h', `هنا ربحتِ شيئًا أغلى من المال: ثقة الناس. والله يقول: إنّ مع العسر يسرًا.`, `There you earned something more precious than money: people's trust. And Allah says: with hardship comes ease.`],
          ['k', `فعلًا! بعد كلّ مشكلة جاء حلّ.`, `Really! After every problem a solution came.`],
          ['h', `مهمّة اليوم: أطلقوا مشروعكم مع أحد الوالدين، وسجّلوا مشكلة واحدة وحلّها. إلى اللقاء يا تجّاري الأبطال!`, `Today's mission: launch your project with a parent, and write down one problem and its solution. Goodbye, my hero traders!`]
        ]
      }
    },

    /* ───────── 9 · Profit: al-Razzaq, saving, zakat / sadaqah / donation (5, 19, 20, 4) ───────── */
    {
      id: 'profit-and-giving', icon: '🤲', tag: 'deen',
      t: ['الرزّاق: أعدّ وأدّخر وأعطي', 'Al-Razzaq: count, save and give'],
      sub: ['الربح · الادّخار · الزكاة والصدقة والتبرّع', 'profit · saving · zakat, sadaqah and donation'],
      pg: [
        ['🪙🧮', `جلست سلمى تعدّ: باعت ١٤ كوبًا = <b>٦٨</b>، والتكلفة <b>٣٠</b>، إذن <b>الربح = ٦٨ − ٣٠ = ٣٨</b>. فصاحت فرحًا: ربحت!`, `Salma sat and counted: she sold 14 cups = <b>68</b>, the cost was <b>30</b>, so <b>profit = 68 − 30 = 38</b>. She cried with joy: I made a profit!`],
        ['🐦🌅', `قال العمّ أمين: تذكّري من رزقكِ. الله <b>الرزّاق</b> يرزق الطير في السماء والنملة في الأرض. أنتِ عملتِ وتعبتِ، والرزق من الله. فقولي: الحمد لله.`, `Uncle Amin said: remember who provided for you. Allah, <b>al-Razzaq</b>, provides for the bird in the sky and the ant on the ground. You worked hard, and the provision is from Allah. So say: Alhamdulillah.`],
        ['💰🔁', `ثم قسّمت الربح مع يوسف كما اتّفقا، وقسّمت نصيبها: جزء <b>للادّخار</b> في حصّالة، وجزء <b>لإعادة الاستثمار</b> في المشروع القادم، وجزء <b>صدقة</b> اختارته بنفسها، وجزءٌ صغير لها.`, `Then she shared the profit with Yusuf as agreed, and split her share: part for <b>saving</b> in a money box, part to <b>reinvest</b> in the next project, part as <b>sadaqah</b> she chose herself, and a small part for her.`],
        ['🌾📦', `<b>الادّخار</b> أن تحفظ جزءًا من مالك لحاجةٍ قادمة. وقد علّمنا يوسف عليه السلام في القرآن أن نحفظ من محصول السنوات الطيّبة للسنوات الصعبة. نصيحة: ادّخر أوّلًا، ثم أنفق، واكتب هدف الادّخار على الحصّالة.`, `<b>Saving</b> is keeping part of your money for a future need. In the Quran, Prophet Yusuf, peace be upon him, taught people to store part of the good years' harvest for the hard years. Tip: save first, then spend — and write your saving goal on the money box.`],
        ['🕌📿', `وما الفرق بين الزكاة والصدقة والتبرّع؟ <b>الزكاة</b> فريضة وركنٌ من أركان الإسلام: إذا بلغ المال <b>النصاب</b> ومرّ عليه <b>عامٌ هجريّ</b> كامل، يُخرج منه <b>٢٫٥٪</b> لمستحقّيها. ويحسبها الكبار.`, `What is the difference between zakat, sadaqah and donation? <b>Zakat</b> is an obligation and a pillar of Islam: when savings reach the <b>nisab</b> (a minimum amount) and a full <b>lunar year</b> passes, <b>2.5%</b> is given to those entitled to it. The grown-ups calculate it.`],
        ['💝🏥', `<b>الصدقة</b> تطوّع: أيّ عطاءٍ في أيّ وقت، ولو قليلًا، ولو ابتسامة. و<b>التبرّع</b> أن تعطي لمشروع خير أو قضيّة، كبناء بئر أو مسجد أو مساعدة مستشفى. اختارت سلمى أن تتبرّع لحفر بئر — مثل عثمان!`, `<b>Sadaqah</b> is voluntary: any giving, any time, even a little, even a smile. A <b>donation</b> is giving to a good cause or project, like building a well or a mosque, or helping a hospital. Salma chose to donate to digging a well — just like Uthman!`]
      ],
      learn: [
        `<b>الربح = المبيعات − التكلفة</b>. والرزق من الله <b>الرزّاق</b>. نقسم الربح: ادّخار، وإعادة استثمار، وصدقة. <b>الزكاة</b> فرض بشروط (النصاب ومرور عام، و٢٫٥٪ في المال). <b>الصدقة</b> تطوّع في أيّ وقت. <b>التبرّع</b> عطاءٌ لمشروع أو قضيّة خير.`,
        `<b>Profit = sales − cost</b>. Provision comes from Allah, <b>al-Razzaq</b>. We split the profit: saving, reinvesting, sadaqah. <b>Zakat</b> is obligatory with conditions (nisab and a full year, 2.5% on money). <b>Sadaqah</b> is voluntary, any time. A <b>donation</b> is giving to a good project or cause.`
      ],
      islam: [
        `قال الله تعالى: ﴿إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ﴾. وقال رسول الله ﷺ: «اليَدُ العُلْيَا خَيْرٌ مِنَ اليَدِ السُّفْلَى» — واليد العليا هي اليد التي تعطي.`,
        `Allah says: "Indeed, it is Allah who is the Provider, the Possessor of strength, the Firm." And the Messenger of Allah ﷺ said: "The upper hand is better than the lower hand" — the upper hand is the one that gives.`
      ],
      src: ['الذاريات: ٥٨ · صحيح البخاري ١٤٢٧ وصحيح مسلم ١٠٣٣', 'Adh-Dhariyat 51:58 · Sahih al-Bukhari 1427 and Sahih Muslim 1033'],
      mission: [
        `① احسب ربح مشروعك: المبيعات − التكلفة. ② قل: الحمد لله الرزّاق. ③ قسّم ربحك في جدول «تقسيم الربح»: ادّخار، وصدقة تختارها أنت، وإعادة استثمار، وشيء لك. ④ اصنع حصّالة من علبة واكتب عليها هدف ادّخارك. ⑤ أعطِ صدقتك بيدك — بمساعدة والديك.`,
        `① Work out your project's profit: sales − cost. ② Say: Alhamdulillah, al-Razzaq. ③ Split your profit in the "Splitting the profit" table: saving, a sadaqah you choose, reinvesting, and something for you. ④ Make a money box from a container and write your saving goal on it. ⑤ Give your sadaqah with your own hand — with your parents' help.`
      ],
      q: ['ما الفرق بين الزكاة والصدقة؟', 'What is the difference between zakat and sadaqah?'],
      o: [
        ['لا فرق بينهما أبدًا', 'There is no difference at all', 0],
        ['الصدقة فرضٌ كلّ يوم، والزكاة تطوّع', 'Sadaqah is required every day, and zakat is optional', 0],
        ['الزكاة فريضة بشروط كالنصاب ومرور عام، والصدقة تطوّع في أيّ وقت', 'Zakat is obligatory with conditions like the nisab and a full year; sadaqah is voluntary, any time', 1]
      ],
      fb: [`أحسنت! الزكاة ركنٌ مفروض بشروط، والصدقة باب خيرٍ مفتوح في كلّ وقت.`, `Well done! Zakat is a required pillar with conditions, and sadaqah is a door of good open at any time.`],
      podcast: {
        title: ['اليد العليا', 'The upper hand'],
        lines: [
          ['h', `مرحبًا بكم! سلمى، حان وقت الحساب. كم بعتِ؟`, `Welcome! Salma, it's counting time. How much did you sell?`],
          ['k', `بعت بثمانية وستّين، والتكلفة ثلاثون. إذن ربحت ثمانية وثلاثين!`, `I sold sixty-eight, and the cost was thirty. So I made thirty-eight profit!`],
          ['h', `ما شاء الله! ومن رزقكِ هذا الربح؟`, `Masha Allah! And who gave you this provision?`],
          ['k', `أنا تعبت… لكنّ الرزق من الله.`, `I worked hard… but provision is from Allah.`],
          ['h', `بالضبط. الله هو الرزّاق. يرزق العصفور الصغير والنملة في جحرها. نحن نسعى، وهو يرزق.`, `Exactly. Allah is al-Razzaq. He provides for the little sparrow and the ant in its nest. We strive, and He provides.`],
          ['k', `الحمد لله! والآن ماذا أفعل بالمال؟`, `Alhamdulillah! Now what do I do with the money?`],
          ['h', `قسّميه. جزء للادّخار، وجزء تعيدينه للمشروع القادم، وجزء صدقة، وشيء لكِ.`, `Split it. Some to save, some back into your next project, some as sadaqah, and something for you.`],
          ['k', `وكيف أدّخر جيّدًا؟ دائمًا أصرف كلّ شيء!`, `How do I save well? I always spend everything!`],
          ['h', `السرّ: ادّخري أوّلًا، ثم اصرفي. واكتبي هدفكِ على الحصّالة. ونبيّ الله يوسف علّم الناس أن يحفظوا من السنوات الطيّبة.`, `The secret: save first, then spend. Write your goal on the money box. And Prophet Yusuf taught people to store from the good years.`],
          ['k', `يا عمّ، ما الفرق بين الزكاة والصدقة والتبرّع؟ أخلط بينها دائمًا.`, `Uncle, what's the difference between zakat, sadaqah and donation? I always mix them up.`],
          ['h', `الزكاة فريضة، ركنٌ من أركان الإسلام. إذا بلغ المال النصاب ومرّ عليه عامٌ كامل، نُخرج اثنين ونصفًا في المئة.`, `Zakat is an obligation, a pillar of Islam. When savings reach the nisab and a full year passes, we give two and a half percent.`],
          ['k', `والصدقة؟`, `And sadaqah?`],
          ['h', `الصدقة تطوّع. أيّ عطاء في أيّ وقت، ولو قليلًا. والتبرّع عطاءٌ لمشروع خير، مثل حفر بئر.`, `Sadaqah is voluntary. Any giving, any time, even a little. And a donation is giving to a good cause, like digging a well.`],
          ['k', `سأتبرّع لحفر بئر، مثل عثمان رضي الله عنه!`, `I'll donate to digging a well, like Uthman, may Allah be pleased with him!`],
          ['h', `نيّة رائعة. والنبيّ صلّى الله عليه وسلّم قال: اليد العليا خيرٌ من اليد السفلى. أي اليد التي تعطي.`, `A wonderful intention. The Prophet, peace be upon him, said: the upper hand is better than the lower hand. The hand that gives.`],
          ['h', `مهمّة اليوم: احسبوا ربحكم، وقسّموه، واصنعوا حصّالة، وأعطوا صدقتكم بأيديكم. إلى اللقاء!`, `Today's mission: count your profit, split it, make a money box, and give your sadaqah with your own hands. See you soon!`]
        ]
      }
    },

    /* ───────── 10 · Business Island game (goal 26 + review) ───────── */
    {
      id: 'business-island', icon: '🏝️', tag: 'game',
      t: ['جزيرة الأعمال', 'Business Island'],
      sub: ['لعبة «مغامرات رائد الأعمال الصغير» في البيت', 'the "Little Entrepreneur Adventures" game at home'],
      pg: [
        ['🏝️⛵', `في آخر الرحلة قال العمّ أمين: الآن صرتِ تاجرة! هيّا نلعب <b>جزيرة الأعمال</b>: بحرٌ فيه جزر، وعلى كلّ جزيرة مشروع، وكلّ لاعب يقود سفينته ليبني تجارته.`, `At the end of the journey Uncle Amin said: now you are a trader! Let's play <b>Business Island</b>: a sea full of islands, a project on each island, and each player sails a ship to build their trade.`],
        ['✂️🗺️', `<b>التجهيز:</b> ارسم على ورقة كبيرة طريقًا من ٣٠ دائرة يدور بين ٦ جزر. لوّن بعض الدوائر بالأصفر (<b>دوائر الذهب</b>) وبعضها بعلامة ❓ (<b>دوائر الأسئلة</b>). واقصص بطاقات الجزر والأسئلة من ورقة النشاط، واصنع سفنًا ورقيّة ونرد.`, `<b>Setup:</b> on a big sheet draw a path of 30 circles winding between 6 islands. Colour some circles yellow (<b>gold circles</b>) and mark some with ❓ (<b>question circles</b>). Cut out the island and question cards from the activity sheet, and make paper ships and a die.`],
        ['🪙💰', `<b>النقود:</b> كلّ لاعب يبدأ بـ<b>٥٠٠ فضّة</b> من نقود ورقيّة: ٤ قطع من ٥، وقطعتان من ١٠، و٣ قطع من ٢٠، وقطعتان من ٥٠، وقطعة من ١٠٠، وقطعة من ٢٠٠. وأحد الكبار هو «البنك».`, `<b>Money:</b> each player starts with <b>500 silver</b> in paper coins: four 5s, two 10s, three 20s, two 50s, one 100 and one 200. One grown-up is "the bank".`],
        ['🧩❓⭐', `<b>الدور:</b> ارمِ النرد وتقدّم بسفينتك بعدد النقاط. على <b>دائرة الأسئلة</b>: اسحب بطاقة وأجب؛ الجواب الصحيح يربحك ١٠ فضّة من البنك. على <b>دائرة الذهب</b>: هديّة ٢٠ فضّة من البنك!`, `<b>Your turn:</b> roll the die and sail that many steps. On a <b>question circle</b>: draw a card and answer; a right answer earns 10 silver from the bank. On a <b>gold circle</b>: a gift of 20 silver from the bank!`],
        ['🏝️🧾', `<b>عند الجزيرة:</b> إن لم يكن لها مالك، يمكنك <b>شراء مشروعها</b> بسعره، ودفع <b>تكاليف تشغيله</b> للبنك مرّة واحدة. وإن كان لها مالك، تدفع له <b>أجرة الزائر</b> لأنّك استعملت مشروعه — بلا زيادة ولا غشّ!`, `<b>At an island:</b> if it has no owner, you may <b>buy its project</b> at its price and pay its <b>running costs</b> to the bank once. If someone owns it, you pay them the <b>visitor fee</b> for using their project — no extra, no cheating!`],
        ['🏆🤲', `<b>النهاية:</b> بعد ٣٠ دقيقة يعدّ كلّ لاعب فضّته وقيمة مشاريعه. وقاعدة البركة: من شاء وضع شيئًا في «صندوق الصدقة» أثناء اللعب، فيُكافأ بنجمة. الفائز الحقيقيّ من لعب بصدق وفرح!`, `<b>The end:</b> after 30 minutes each player counts their silver plus the value of their projects. And the blessing rule: anyone may put something in the "sadaqah box" during the game and earn a star. The real winner is whoever played honestly and joyfully!`]
      ],
      learn: [
        `في <b>جزيرة الأعمال</b> تتدرّب على كلّ ما تعلّمت: تقسيم النقود، وشراء مشروع، ودفع التكاليف، وأجرة استعمال مشروع غيرك، والإجابة عن أسئلة المال والتجارة، والصدقة. اللعب طريقٌ ممتع لتصبح رائد أعمال.`,
        `On <b>Business Island</b> you practise everything you learned: handling money, buying a project, paying costs, paying for using someone else's project, answering money and trade questions, and giving sadaqah. Play is a fun way to become an entrepreneur.`
      ],
      islam: [
        `قال الله تعالى: ﴿رَّبُّكُمُ الَّذِي يُزْجِي لَكُمُ الْفُلْكَ فِي الْبَحْرِ لِتَبْتَغُوا مِن فَضْلِهِ ۚ إِنَّهُ كَانَ بِكُمْ رَحِيمًا﴾ — السفن التي تحمل التجارة من نِعَم الله، والتاجر يبتغي من فضله.`,
        `Allah says: "Your Lord is the One who drives the ships for you through the sea so that you may seek of His bounty. Indeed, He is ever Merciful to you." Ships carrying trade are among Allah's blessings, and the trader seeks His bounty.`
      ],
      src: ['الإسراء: ٦٦', 'Al-Isra 17:66'],
      mission: [
        `اصنع لعبة <b>جزيرة الأعمال</b> مع عائلتك: ارسم البحر والجزر والدوائر، واقصص البطاقات والنقود (٥٠٠ فضّة لكلّ لاعب)، واصنع سفنًا ورقيّة، والعبوا سهرة ٣٠ دقيقة. ثم اكتب: أيّ جزيرة كانت أربح؟ ولماذا؟`,
        `Make the <b>Business Island</b> game with your family: draw the sea, islands and circles, cut out the cards and money (500 silver per player), make paper ships, and play a 30-minute game night. Then write: which island earned the most? Why?`
      ],
      q: ['وصلتَ إلى جزيرة يملكها لاعبٌ آخر. ماذا تفعل؟', 'You land on an island owned by another player. What do you do?'],
      o: [
        ['آخذ مشروعه بلا ثمن', 'Take their project for free', 0],
        ['أدفع له أجرة الزائر لأنّي استعملت مشروعه', 'Pay them the visitor fee because I used their project', 1],
        ['أهرب بسفينتي دون أن أدفع', 'Sail away without paying', 0]
      ],
      fb: [`أحسنت! من استعمل مشروع غيره يدفع حقّه بأمانة — هكذا يتاجر المسلم.`, `Well done! Whoever uses someone else's project pays what is due honestly — that is how a Muslim trades.`],
      podcast: {
        title: ['سفن وجزر وفضّة', 'Ships, islands and silver'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! هذه آخر حلقة في رحلتنا. واليوم… نلعب!`, `Assalamu alaikum, friends! This is the last episode of our journey. And today… we play!`],
          ['k', `أخيرًا! ما اسم اللعبة يا عمّ؟`, `Finally! What's the game called, Uncle?`],
          ['h', `جزيرة الأعمال. بحرٌ فيه ستّ جزر، وعلى كلّ جزيرة مشروع، مثل جزيرة العصير وجزيرة المخبز.`, `Business Island. A sea with six islands, and a project on each one, like Juice Island and Bakery Island.`],
          ['k', `وكيف أتحرّك؟`, `How do I move?`],
          ['h', `لكِ سفينة ورقيّة. ترمين النرد وتتقدّمين بعدد النقاط على طريقٍ من الدوائر.`, `You have a paper ship. You roll the die and move that many circles along the path.`],
          ['k', `وكم معي من المال؟`, `And how much money do I have?`],
          ['h', `خمسمئة فضّة. أربع قطع من خمسة، وقطعتان من عشرة، وثلاث من عشرين، وقطعتان من خمسين، وواحدة من مئة، وواحدة من مئتين.`, `Five hundred silver. Four coins of five, two of ten, three of twenty, two of fifty, one of a hundred, and one of two hundred.`],
          ['k', `دعني أجمع… نعم، خمسمئة بالضبط!`, `Let me add it up… yes, exactly five hundred!`],
          ['h', `ممتاز! وعلى الطريق دوائر خاصّة. دائرة الأسئلة، إن أجبتِ صحيحًا ربحتِ عشرة. ودائرة الذهب، هديّة عشرين فضّة.`, `Excellent! And there are special circles on the path. A question circle — answer right and win ten. And a gold circle — a gift of twenty silver.`],
          ['k', `وإذا وصلت إلى جزيرة؟`, `And if I reach an island?`],
          ['h', `إن لم يكن لها مالك، تشترين مشروعها وتدفعين تكاليف تشغيله. وإن كان لها مالك، تدفعين له أجرة الزائر.`, `If nobody owns it, you can buy its project and pay its running costs. If someone owns it, you pay them the visitor fee.`],
          ['k', `لأنّي استعملت مشروعه! مثل البيع الحقيقيّ.`, `Because I used their project! Just like real trade.`],
          ['h', `تمامًا. والله ذكر في القرآن السفن التي تجري في البحر لنبتغي من فضله.`, `Exactly. And Allah mentions in the Quran the ships that sail the sea so we can seek His bounty.`],
          ['k', `يا عمّ، شكرًا على هذه الرحلة! تعلّمت المال، والصدق، وأطلقت مشروعي الأوّل.`, `Uncle, thank you for this journey! I learned about money and honesty, and I launched my first project.`],
          ['h', `وأنا فخورٌ بكِ يا سلمى. مهمّة اليوم: اصنعوا جزيرة الأعمال والعبوها مع العائلة. والسلام عليكم يا تجّار المستقبل!`, `And I am proud of you, Salma. Today's mission: make Business Island and play it with your family. Assalamu alaikum, traders of the future!`]
        ]
      }
    }
  ]
};
