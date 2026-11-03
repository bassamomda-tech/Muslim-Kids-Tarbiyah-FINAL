/* scientist.js — «صانع المهارات» · العالِم الصغير — 8 stations + podcast */
window.SKILLS = window.SKILLS || {};
window.SKILLS.scientist = {
  id: 'scientist', icon: '🔬', color: '#2E86C1',
  title: ['العالِم الصغير', 'The Little Scientist'],
  intro: ['العالِم لا يحفظ الأجوبة فقط، بل يعرف كيف يصل إليها: ينظر، ويسأل، ويخمّن، ويجرّب بعدل، ويقيس، ويصدُق. هيّا نتعلّم طريقة العلماء خطوةً خطوة!',
          'A scientist doesn’t just remember answers — they know how to find them: look, ask, guess, test fairly, measure and tell the truth. Let’s learn the scientist’s way, step by step!'],
  mentor: { icon: '👩‍🔬', name: ['الدكتورة نور', 'Dr. Nour'],
    say: ['أهلًا بك في مختبري الصغير! أنا الدكتورة نور. لن نحتاج إلى أجهزة غالية؛ يكفينا ماء وورق ومسطرة ودفتر… وعينان فضوليّتان. وعدٌ منّي: كلّ تجاربنا آمنة، وحين نحتاج إلى كبير نناديه.',
          'Welcome to my little lab! I’m Dr. Nour. We won’t need expensive machines — just water, paper, a ruler, a notebook… and two curious eyes. My promise: all our experiments are safe, and when we need a grown-up, we call one.'] },
  cast: { h: { icon: '👩‍🔬', name: ['الدكتورة نور', 'Dr. Nour'], g: 'female' },
          k: { icon: '👦', name: ['عُمَر', 'Omar'], g: 'male' } },
  goals: [
    ['أن يلاحظ بدقّة بكلّ حواسّه، ويتفكّر في خلق الله', 'أن يفرّق بين السؤال الذي يمكن اختباره والسؤال الذي لا يمكن', 'أن يصوغ فرضيّة (تخمينًا ذكيًّا) مع سببها', 'أن يصمّم اختبارًا عادلًا يغيّر فيه شيئًا واحدًا فقط', 'أن يقيس ويسجّل البيانات في جدول ودفتر', 'أن يرسم رسمًا بيانيًّا بالأعمدة ويقرأه', 'أن يستنتج بأمانة حتّى لو كان تخمينه خطأ', 'أن يعرض عمله ويتحقّق من عمل غيره بأدب، وينجز مشروعًا علميًّا حقيقيًّا'],
    ['Observe carefully with all the senses and reflect on Allah’s creation', 'Tell a testable question from one that can’t be tested', 'Make a hypothesis (a smart guess) with a reason', 'Design a fair test that changes only one thing', 'Measure and record data in a table and notebook', 'Draw and read a simple bar chart', 'Draw honest conclusions, even when the guess was wrong', 'Present work, check others’ work kindly, and complete a real science project']
  ],
  filters: [['look', 'أنظر وأسأل', 'Look & ask'], ['test', 'أجرّب وأقيس', 'Test & measure'], ['share', 'أستنتج وأشارك', 'Conclude & share']],
  parents: [
    '<h3>🔬 كيف تمضون في هذه الرحلة؟</h3><p>محطّة واحدة في الجلسة تكفي (٢٠–٣٠ دقيقة). اقرؤوا القصّة معًا، واستمعوا للحلقة، ثمّ نفّذوا المهمّة بأدوات البيت البسيطة. خصّصوا لطفلكم «دفتر تجارب» يكتب فيه كلّ شيء.</p>' +
    '<h3>🛡️ السلامة أوّلًا</h3><ul><li>كلّ التجارب هنا بالماء والورق والملح والثلج والبذور والظلّ فقط.</li><li>لا نار، ولا أدوات حادّة، ولا موادّ كيميائيّة، ولا كهرباء أو مقابس.</li><li>لا نتذوّق شيئًا في التجارب، ونغسل الأيدي بعدها.</li><li>في تجربة الظلّ: نذكّر الطفل ألّا ينظر إلى الشمس مباشرة أبدًا.</li></ul>' +
    '<h3>💛 روح العالِم</h3><ul><li>امدحوا السؤال الجيّد أكثر من الجواب الصحيح.</li><li>إذا خاب التخمين فقولوا: «رائع! تعلّمنا شيئًا جديدًا». الخطأ الصادق جزء من العلم.</li><li>لا تعطوا الجواب بسرعة؛ قولوا: «كيف نعرف؟ هيّا نجرّب».</li></ul>' +
    '<h3>🌱 المشروع النهائيّ</h3><p>في المحطّة الأخيرة ينفّذ الطفل تجربة عادلة على عدّة أيّام (مثل بذور في الضوء وبذور في الظلام)، ثمّ يصنع «ملصقًا علميًّا» من صفحة واحدة ويعرضه على الأسرة. يمكنكم زرع البذور مبكّرًا عند المحطّة الرابعة لتكون جاهزة.</p>',
    '<h3>🔬 How to run this journey</h3><p>One station per session is enough (20–30 minutes). Read the story together, listen to the episode, then do the mission with simple things from home. Give your child an “experiment notebook” to write everything in.</p>' +
    '<h3>🛡️ Safety first</h3><ul><li>Every experiment here uses only water, paper, salt, ice, seeds and shadows.</li><li>No fire, no sharp tools, no chemicals, no electricity or sockets.</li><li>We never taste anything in an experiment, and we wash hands afterwards.</li><li>In the shadow activity, remind your child never to look straight at the sun.</li></ul>' +
    '<h3>💛 The scientist’s spirit</h3><ul><li>Praise a good question more than a right answer.</li><li>If a guess turns out wrong, say: “Great! We learned something new.” An honest mistake is part of science.</li><li>Don’t give the answer too quickly; ask: “How could we find out? Let’s test it.”</li></ul>' +
    '<h3>🌱 The final project</h3><p>In the last station your child runs a fair test over several days (for example, seeds in the light and seeds in the dark), then makes a one-page “science poster” and presents it to the family. You can plant the seeds early, around station 4, so they are ready in time.</p>'
  ],
  worksheet: [
    '<h2>📓 صفحة من دفتر تجاربي</h2><p>اسمي: ................ التاريخ: ................</p>' +
    '<table border="1" cellpadding="8" style="width:100%;border-collapse:collapse">' +
    '<tr><td style="width:30%"><b>❓ سؤالي</b></td><td style="height:50px"></td></tr>' +
    '<tr><td><b>💭 تخميني (فرضيّتي)</b><br><small>أظنّ أنّ… لأنّ…</small></td><td style="height:50px"></td></tr>' +
    '<tr><td><b>🧰 ما أحتاجه</b></td><td style="height:40px"></td></tr>' +
    '<tr><td><b>👣 خطواتي</b></td><td style="height:90px">١. <br>٢. <br>٣. <br>٤. </td></tr></table>' +
    '<h3>📏 جدول النتائج</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse"><tr><th>المحاولة / اليوم</th><th>المجموعة (أ)</th><th>المجموعة (ب)</th><th>ملاحظة</th></tr>' +
    '<tr><td>١</td><td></td><td></td><td></td></tr><tr><td>٢</td><td></td><td></td><td></td></tr><tr><td>٣</td><td></td><td></td><td></td></tr><tr><td>٤</td><td></td><td></td><td></td></tr><tr><td>٥</td><td></td><td></td><td></td></tr></table>' +
    '<table border="1" cellpadding="8" style="width:100%;border-collapse:collapse;margin-top:10px"><tr><td style="width:30%"><b>✅ النتيجة</b></td><td style="height:50px"></td></tr>' +
    '<tr><td><b>🤝 هل كان تخميني صحيحًا؟</b></td><td>نعم ☐ &nbsp; لا ☐ &nbsp; جزئيًّا ☐</td></tr>' +
    '<tr><td><b>🌟 ماذا تعلّمت؟</b></td><td style="height:60px"></td></tr></table>' +
    '<h3>⚖️ قائمة الاختبار العادل</h3><ul style="list-style:none;padding:0;line-height:2">' +
    '<li>☐ غيّرتُ شيئًا واحدًا فقط، وهو: ................</li><li>☐ أبقيتُ كلّ الأشياء الأخرى متساوية (الكمّيّة، الحجم، المكان، الوقت)</li><li>☐ قِستُ بالأداة نفسها في كلّ مرّة</li><li>☐ كرّرتُ التجربة أكثر من مرّة</li><li>☐ كتبتُ النتائج فورًا كما رأيتها، دون تغيير</li><li>☐ كانت تجربتي آمنة، واستعنتُ بكبير عند الحاجة</li></ul>' +
    '<h3>📊 رسمي البيانيّ بالأعمدة</h3><p>العنوان: ................................ &nbsp; لوّن مربّعًا لكلّ وحدة.</p>' +
    '<table border="1" style="border-collapse:collapse;text-align:center"><tr><td style="width:40px">١٠</td><td style="width:70px;height:24px"></td><td style="width:70px"></td><td style="width:70px"></td><td style="width:70px"></td></tr>' +
    '<tr><td>٩</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>٨</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>٧</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>٦</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>٥</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>٤</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>٣</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>٢</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>١</td><td style="height:24px"></td><td></td><td></td><td></td></tr>' +
    '<tr><td>٠</td><td>.......</td><td>.......</td><td>.......</td><td>.......</td></tr></table>',
    '<h2>📓 A page from my experiment notebook</h2><p>My name: ................ Date: ................</p>' +
    '<table border="1" cellpadding="8" style="width:100%;border-collapse:collapse">' +
    '<tr><td style="width:30%"><b>❓ My question</b></td><td style="height:50px"></td></tr>' +
    '<tr><td><b>💭 My guess (hypothesis)</b><br><small>I think that… because…</small></td><td style="height:50px"></td></tr>' +
    '<tr><td><b>🧰 What I need</b></td><td style="height:40px"></td></tr>' +
    '<tr><td><b>👣 My steps</b></td><td style="height:90px">1. <br>2. <br>3. <br>4. </td></tr></table>' +
    '<h3>📏 Results table</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse"><tr><th>Try / Day</th><th>Group A</th><th>Group B</th><th>Note</th></tr>' +
    '<tr><td>1</td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td></tr></table>' +
    '<table border="1" cellpadding="8" style="width:100%;border-collapse:collapse;margin-top:10px"><tr><td style="width:30%"><b>✅ The result</b></td><td style="height:50px"></td></tr>' +
    '<tr><td><b>🤝 Was my guess right?</b></td><td>Yes ☐ &nbsp; No ☐ &nbsp; Partly ☐</td></tr>' +
    '<tr><td><b>🌟 What I learned</b></td><td style="height:60px"></td></tr></table>' +
    '<h3>⚖️ Fair-test checklist</h3><ul style="list-style:none;padding:0;line-height:2">' +
    '<li>☐ I changed only ONE thing, which was: ................</li><li>☐ I kept everything else the same (amount, size, place, time)</li><li>☐ I measured with the same tool every time</li><li>☐ I repeated the test more than once</li><li>☐ I wrote the results straight away, exactly as I saw them</li><li>☐ My experiment was safe, and I asked an adult when needed</li></ul>' +
    '<h3>📊 My bar chart</h3><p>Title: ................................ &nbsp; Colour one square for each unit.</p>' +
    '<table border="1" style="border-collapse:collapse;text-align:center"><tr><td style="width:40px">10</td><td style="width:70px;height:24px"></td><td style="width:70px"></td><td style="width:70px"></td><td style="width:70px"></td></tr>' +
    '<tr><td>9</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>8</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>7</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>6</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>5</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>4</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>3</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>2</td><td style="height:24px"></td><td></td><td></td><td></td></tr><tr><td>1</td><td style="height:24px"></td><td></td><td></td><td></td></tr>' +
    '<tr><td>0</td><td>.......</td><td>.......</td><td>.......</td><td>.......</td></tr></table>'
  ],
  next: ['../activities/play.html', '🎲', 'ساحة الأنشطة', 'Activities', 'جرّب مهارة أخرى أو لعبة', 'Try another skill or a game'],
  stations: [
    /* ───────── 1 · observe ───────── */
    {
      id: 'observe', icon: '👀', tag: 'look',
      t: ['أنظرُ بدقّة', 'Looking carefully'],
      sub: ['العالِم يبدأ بالتأمّل', 'Every scientist starts by observing'],
      pg: [
        ['🍃👦', 'كان عُمَر يمرّ كلّ يوم بشجرة الليمون في فناء البيت، ولم ينظر إليها حقًّا قطّ. قالت الدكتورة نور: «هل تستطيع أن تخبرني عن ورقة واحدة منها عشرة أشياء؟»', 'Omar walked past the lemon tree in the yard every day, but he had never really looked at it. Dr. Nour asked, “Can you tell me ten things about just one of its leaves?”'],
        ['🔍🍃', 'ضحك عُمَر: «إنّها خضراء… وهذا كلّ شيء!». لكنّه حين اقترب رأى خطوطًا دقيقة تتفرّع كالأنهار، وحافّة ناعمة، ولمعانًا في وجهٍ دون الآخر.', 'Omar laughed: “It’s green… that’s all!” But when he looked closer, he saw tiny lines branching like rivers, a smooth edge, and a shine on one side but not the other.'],
        ['👃✋', 'شمّ الورقة فوجد لها رائحة الليمون! ولمسها فوجد وجهها أنعم من ظهرها. قالت الدكتورة نور: «هذه هي <b>الملاحظة</b>: أن نستعمل عيوننا وأنوفنا وأيدينا وآذاننا بانتباه».', 'He smelled the leaf — it smelled of lemon! He touched it and found the top smoother than the back. Dr. Nour said, “That’s <b>observing</b>: using our eyes, nose, hands and ears with real attention.”'],
        ['🚫👅', '«وماذا عن التذوّق؟» سأل عُمَر. قالت: «العالِم لا يتذوّق شيئًا لا يعرفه أبدًا. نكتفي بالنظر واللمس والشمّ والسمع، وبعدها نغسل أيدينا».', '“What about tasting?” asked Omar. She said, “A scientist never tastes something they don’t know. We look, touch, smell and listen — then we wash our hands.”'],
        ['📓✨', 'كتب عُمَر في دفتره اثنتي عشرة ملاحظة عن ورقة واحدة! ثمّ قال متعجّبًا: «سبحان الله! كلّ هذا في ورقة صغيرة كنت أمرّ بها كلّ يوم؟»', 'Omar wrote twelve observations about one single leaf! Then he said in wonder, “SubhanAllah! All this in a little leaf I walked past every day?”']
      ],
      learn: ['<b>الملاحظة</b> هي الخطوة الأولى في العلم: أن ننظر ببطء وانتباه، ونستعمل حواسّنا بأمان، ونكتب ما نراه <b>كما هو</b> دون أن نخمّن بعد.', '<b>Observing</b> is the first step in science: looking slowly and carefully, using our senses safely, and writing down what we see <b>exactly as it is</b> — no guessing yet.'],
      islam: ['دعانا الله إلى التأمّل في خلقه، فقال تعالى: ﴿أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ ۝ وَإِلَى السَّمَاءِ كَيْفَ رُفِعَتْ ۝ وَإِلَى الْجِبَالِ كَيْفَ نُصِبَتْ ۝ وَإِلَى الْأَرْضِ كَيْفَ سُطِحَتْ﴾ (الغاشية: ١٧–٢٠).<br>وقال سبحانه: ﴿إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ﴾ (آل عمران: ١٩٠)، ومدح الذين ﴿يَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ﴾ (آل عمران: ١٩١). فالنظر بدقّة عبادةٌ حين يقودنا إلى معرفة عظمة الخالق.',
              'Allah invites us to reflect on His creation: “Do they not look at the camels — how they are created? And at the sky — how it is raised? And at the mountains — how they are set firm? And at the earth — how it is spread out?” (al-Ghashiyah 88:17–20).<br>He also says: “In the creation of the heavens and the earth, and the alternation of night and day, are signs for people of understanding” (Al Imran 3:190), and He praises those who “reflect on the creation of the heavens and the earth: ‘Our Lord, You did not create this in vain. Glory be to You!’” (Al Imran 3:191). Careful looking becomes worship when it helps us see the greatness of the Creator.'],
      src: ['الغاشية: ١٧–٢٠ · آل عمران: ١٩٠–١٩١', 'Al-Ghashiyah 88:17–20 · Al Imran 3:190–191'],
      mission: ['اختر شيئًا واحدًا من البيت أو الحديقة: ورقة شجر، أو حبّة فاكهة، أو حجرًا. راقبه خمس دقائق، واكتب في دفترك <b>عشر ملاحظات</b> على الأقلّ: لونه، شكله، ملمسه، رائحته، حجمه… (بلا تذوّق!). ثمّ ارسمه بدقّة.', 'Choose one thing from your home or garden: a leaf, a piece of fruit or a stone. Observe it for five minutes and write at least <b>ten observations</b> in your notebook: colour, shape, texture, smell, size… (no tasting!). Then draw it carefully.'],
      q: ['أيّ هذه الجمل «ملاحظة» علميّة؟', 'Which of these is a scientific observation?'],
      o: [['الورقة جميلة جدًّا', 'The leaf is very beautiful', 0], ['الورقة لها خطوط دقيقة تتفرّع من خطّ في وسطها', 'The leaf has thin lines branching from a line in its middle', 1], ['الورقة تحبّ الشمس', 'The leaf loves the sun', 0]],
      fb: ['أحسنت! الملاحظة تصف ما نراه فعلًا، أمّا «جميلة» فرأيٌ، و«تحبّ» ليست شيئًا نراه.', 'Well done! An observation describes what we actually see. “Beautiful” is an opinion, and “loves” isn’t something we can see.'],
      podcast: {
        title: ['عشرة أشياء في ورقة واحدة', 'Ten things in one leaf'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في بودكاست العالِم الصغير. ومعي اليوم ضيف فضوليّ جدًّا.', 'Assalamu alaikum, friends! This is Dr. Nour on The Little Scientist podcast. And today I have a very curious guest.'],
          ['k', 'وعليكم السلام! أنا عُمَر. وأريد أن أصبح عالِمًا… لكن من أين أبدأ؟', 'Wa alaikum assalam! I’m Omar. I want to be a scientist… but where do I start?'],
          ['h', 'تبدأ بعينيك يا عُمَر. كلّ عالِم عظيم بدأ بأن نظر إلى شيء عاديّ نظرةً غير عاديّة.', 'You start with your eyes, Omar. Every great scientist began by looking at an ordinary thing in an extraordinary way.'],
          ['k', 'لكنّي أنظر إلى الأشياء طوال اليوم!', 'But I look at things all day long!'],
          ['h', 'أنت ترى، لكنّك لا تلاحظ دائمًا. مثلًا: كم زرًّا في قميصك الآن؟ لا تنظر!', 'You see, but you don’t always observe. For example, how many buttons are on your shirt right now? Don’t look!'],
          ['k', 'همم… خمسة؟ لا، ستّة؟ لا أعرف!', 'Hmm… five? No, six? I don’t know!'],
          ['h', 'هذا هو الفرق. الملاحظة أن تنظر ببطء وانتباه، وتستعمل حواسّك، وتكتب ما تراه كما هو.', 'That’s the difference. Observing means looking slowly and carefully, using your senses, and writing down what you see, just as it is.'],
          ['k', 'وهل أتذوّق الأشياء أيضًا؟', 'Do I taste things too?'],
          ['h', 'لا، أبدًا في التجارب. العالِم لا يتذوّق شيئًا لا يعرفه. نرى ونلمس ونشمّ ونسمع، ثمّ نغسل أيدينا.', 'No, never in experiments. A scientist doesn’t taste something unknown. We look, touch, smell and listen, then wash our hands.'],
          ['k', 'وهل في القرآن شيء عن النظر؟', 'Does the Quran say anything about looking?'],
          ['h', 'نعم! يسألنا الله: أفلا ينظرون إلى الإبل كيف خُلقت، وإلى السماء كيف رُفعت. الله يريدنا أن ننظر ونتفكّر.', 'Yes! Allah asks us: do they not look at the camels, how they were created, and at the sky, how it was raised? Allah wants us to look and reflect.'],
          ['k', 'يعني حين أتأمّل ورقة شجر، أكون أتفكّر في خلق الله؟', 'So when I study a leaf, I’m reflecting on Allah’s creation?'],
          ['h', 'بالضبط. وستتعجّب كم من الأسرار في ورقة صغيرة. ستقول: سبحان الله!', 'Exactly. And you’ll be amazed how many secrets hide in one small leaf. You’ll say: SubhanAllah!'],
          ['k', 'أنا متحمّس! ماذا أفعل اليوم؟', 'I’m excited! What do I do today?'],
          ['h', 'مهمّة اليوم: اختر ورقة أو حبّة فاكهة، واكتب عنها عشر ملاحظات بلا تذوّق. إلى اللقاء في الحلقة القادمة!', 'Today’s mission: pick a leaf or a piece of fruit and write ten observations about it, no tasting. See you next episode!']
        ]
      }
    },

    /* ───────── 2 · question ───────── */
    {
      id: 'question', icon: '❓', tag: 'look',
      t: ['أسألُ سؤالًا نختبره', 'Asking a testable question'],
      sub: ['ليس كلّ سؤال يُجاب بالتجربة', 'Some questions can be tested, some can’t'],
      pg: [
        ['🌞👤', 'في الصباح خرج عُمَر إلى الفناء فرأى ظلّه طويلًا جدًّا. وعند الظهر رآه قصيرًا تحت قدميه! فسأل: «لماذا يتغيّر ظلّي؟»', 'In the morning Omar went out into the yard and saw that his shadow was very long. At noon it was short, right under his feet! He asked, “Why does my shadow change?”'],
        ['👩‍🔬💬', 'قالت الدكتورة نور: «سؤال رائع! لكن العلماء يحوّلونه إلى سؤالٍ نستطيع أن <b>نختبره</b>: هل يكون ظلّ العصا أقصر عند الظهر منه في الصباح والعصر؟»', 'Dr. Nour said, “A great question! But scientists turn it into one we can <b>test</b>: Is a stick’s shadow shorter at noon than in the morning and afternoon?”'],
        ['📏✅', '«ما الفرق؟» سأل عُمَر. قالت: «السؤال القابل للاختبار نستطيع أن نجيب عنه بأن نجرّب ونقيس ونعدّ. نستطيع أن نقيس الظلّ بالمسطرة ثلاث مرّات في اليوم».', '“What’s the difference?” asked Omar. She said, “A testable question is one we can answer by trying, measuring or counting. We can measure the shadow with a ruler three times a day.”'],
        ['🤔🎨', '«وماذا عن سؤال: أيّ لونٍ أجمل، الأزرق أم الأخضر؟» ضحكت الدكتورة نور: «هذا سؤال رأي. كلّ واحد له جوابه، ولا يوجد مقياس له. نحترمه، لكنّنا لا نختبره في المختبر».', '“What about: which colour is nicer, blue or green?” Dr. Nour laughed. “That’s an opinion question. Everyone has their own answer and there’s nothing to measure. We respect it, but we don’t test it in the lab.”'],
        ['🖍️🪵', 'غرس عُمَر عصا في أصيص من التراب، ورسم بالطبشور طرف الظلّ في الصباح، ثمّ عند الظهر، ثمّ العصر. ولم ينظر إلى الشمس أبدًا، بل إلى الأرض فقط!', 'Omar stood a stick in a pot of soil and marked the tip of its shadow with chalk in the morning, at noon and in the afternoon. He never looked at the sun — only at the ground!']
      ],
      learn: ['<b>السؤال القابل للاختبار</b> سؤالٌ نستطيع أن نجيب عنه بالتجربة: بأن نغيّر شيئًا ونقيس أو نعدّ ما يحدث. مثل: «هل يذوب السكّر أسرع في الماء الدافئ أم البارد؟». أمّا أسئلة الرأي مثل «أيّ لون أجمل؟» فلا تُقاس.', 'A <b>testable question</b> is one we can answer with an experiment — by changing something and measuring or counting what happens. Like: “Does sugar dissolve faster in warm water or cold water?” Opinion questions like “Which colour is nicest?” can’t be measured.'],
      islam: ['السؤال الجيّد بابُ العلم، وقد علّمنا الله أن ندعوه: ﴿وَقُل رَّبِّ زِدْنِي عِلْمًا﴾ (طه: ١١٤). فالعالِم الصغير يسأل ليتعلّم، ويدعو الله أن يزيده علمًا.', 'A good question is the doorway to knowledge, and Allah taught us to pray: “And say: My Lord, increase me in knowledge.” (Ta-Ha 20:114). A little scientist asks in order to learn, and asks Allah for more knowledge.'],
      src: ['طه: ١١٤', 'Ta-Ha 20:114'],
      mission: ['اكتب في دفترك <b>خمسة أسئلة</b> عن أشياء حولك، ثمّ ضع ✅ بجانب الأسئلة التي يمكن اختبارها. وجرّب واحدًا: اغرس عصا أو قلمًا في أصيص تراب في مكان مشمس، وعلّم طرف ظلّه بالطبشور أو بحجر صغير صباحًا وظهرًا وعصرًا، وقِس طوله بالمسطرة. ⚠️ لا تنظر إلى الشمس مباشرة أبدًا.', 'Write <b>five questions</b> about things around you in your notebook, then put a ✅ next to the ones that can be tested. Try one: stand a stick or pencil in a pot of soil in a sunny spot, mark the tip of its shadow with chalk or a pebble in the morning, at noon and in the afternoon, and measure its length with a ruler. ⚠️ Never look straight at the sun.'],
      q: ['أيّ سؤال يمكن اختباره بتجربة؟', 'Which question can be tested with an experiment?'],
      o: [['أيّ الفصول أجمل؟', 'Which season is the most beautiful?', 0], ['هل تحبّ القطط الحليب أكثر من الكلاب؟', 'Do cats love milk more than dogs do?', 0], ['هل يجفّ القميص المبلول أسرع في الشمس أم في الظلّ؟', 'Does a wet shirt dry faster in the sun or in the shade?', 1]],
      fb: ['ممتاز! نستطيع أن نعلّق قميصين متشابهين في الشمس والظلّ ونقيس الوقت. أمّا «الأجمل» و«تحبّ» فلا نستطيع قياسهما بسهولة.', 'Excellent! We can hang two similar shirts in the sun and the shade and time them. “Most beautiful” and “love” are not easy to measure.'],
      podcast: {
        title: ['سرّ الظلّ الطويل', 'The mystery of the long shadow'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في بودكاست العالِم الصغير. عُمَر، أراك تفكّر في شيء.', 'Assalamu alaikum, friends! Dr. Nour here on The Little Scientist. Omar, I can see you’re thinking about something.'],
          ['k', 'وعليكم السلام! نعم، ظلّي كان طويلًا جدًّا في الصباح، وعند الظهر صار قصيرًا. لماذا؟', 'Wa alaikum assalam! Yes, my shadow was really long this morning, and at noon it got short. Why?'],
          ['h', 'هذا سؤال عالِم حقيقيّ! لكن قبل أن نبحث عن السبب، نحوّله إلى سؤال نستطيع اختباره.', 'That’s a real scientist’s question! But before we look for the reason, let’s turn it into a question we can test.'],
          ['k', 'وكيف أعرف أنّ السؤال يمكن اختباره؟', 'How do I know if a question can be tested?'],
          ['h', 'اسأل نفسك: هل أستطيع أن أجرّب وأقيس أو أعدّ لأعرف الجواب؟ إن كان نعم، فهو قابل للاختبار.', 'Ask yourself: can I try something and measure or count to find the answer? If yes, it’s testable.'],
          ['k', 'إذن: هل يكون ظلّ العصا أقصر عند الظهر؟ أستطيع أن أقيسه بالمسطرة!', 'So: is a stick’s shadow shorter at noon? I can measure it with a ruler!'],
          ['h', 'أحسنت! والآن جرّب هذا: أيّ طعام ألذّ، البيتزا أم الكبسة؟', 'Well done! Now try this one: which food is tastier, pizza or kabsa?'],
          ['k', 'الكبسة طبعًا! لكن أختي تقول البيتزا… آه، هذا رأي، لا نستطيع قياسه!', 'Kabsa, of course! But my sister says pizza… oh, that’s an opinion. We can’t measure it!'],
          ['h', 'تمامًا. أسئلة الرأي جميلة، لكنّها ليست للمختبر.', 'Exactly. Opinion questions are lovely, but they aren’t for the lab.'],
          ['k', 'وهل أنظر إلى الشمس لأفهم الظلّ؟', 'Should I look at the sun to understand shadows?'],
          ['h', 'لا، أبدًا! النظر إلى الشمس يؤذي العين. نحن ننظر إلى الأرض فقط، إلى الظلّ.', 'No, never! Looking at the sun hurts your eyes. We only look at the ground, at the shadow.'],
          ['k', 'حسنًا. وهل هناك دعاء يساعدني على التعلّم؟', 'OK. Is there a dua that helps me learn?'],
          ['h', 'نعم، من القرآن: ربِّ زدني علمًا. قُلها قبل كلّ تجربة.', 'Yes, from the Quran: My Lord, increase me in knowledge. Say it before every experiment.'],
          ['h', 'مهمّة اليوم: اكتب خمسة أسئلة، وضع علامة على ما يمكن اختباره، ثمّ قِس ظلّ عصا ثلاث مرّات. إلى اللقاء!', 'Today’s mission: write five questions, tick the testable ones, then measure a stick’s shadow three times. Goodbye for now!']
        ]
      }
    },

    /* ───────── 3 · hypothesis ───────── */
    {
      id: 'hypothesis', icon: '💭', tag: 'look',
      t: ['أخمّنُ تخمينًا ذكيًّا', 'Making a smart guess'],
      sub: ['الفرضيّة: ماذا أظنّ؟ ولماذا؟', 'A hypothesis: what do I think, and why?'],
      pg: [
        ['🛁🍎', 'ملأت الدكتورة نور وعاءً كبيرًا بالماء، ووضعت بجانبه: تفّاحة، ومفتاحًا، وقطعة صلصال، وعودًا خشبيًّا، وملعقة معدنيّة، وغطاء قارورة.', 'Dr. Nour filled a big bowl with water and put next to it: an apple, a key, a lump of clay, a wooden stick, a metal spoon and a bottle cap.'],
        ['💭🤔', 'قالت: «قبل أن نضع أيّ شيء في الماء، أريد منك <b>فرضيّة</b> لكلّ واحد: هل سيطفو أم يغوص؟ ولماذا تظنّ ذلك؟»', 'She said, “Before we put anything in the water, I want a <b>hypothesis</b> for each one: will it float or sink? And why do you think so?”'],
        ['📝🍎', 'كتب عُمَر: «التفّاحة ستغوص، لأنّها ثقيلة». «والمفتاح سيغوص لأنّه من معدن». «والعود سيطفو لأنّه خفيف». قالت الدكتورة نور: «جميل! كتبت التخمين وسببه».', 'Omar wrote: “The apple will sink because it’s heavy.” “The key will sink because it’s metal.” “The stick will float because it’s light.” Dr. Nour said, “Lovely! You wrote the guess and the reason.”'],
        ['❔💡', '«لكن لماذا لا نجرّب مباشرة؟» سأل عُمَر. قالت: «لأنّ التخمين يجعلك تفكّر قبل أن ترى. وحين ترى النتيجة تعرف هل كان تفكيرك في محلّه أم تحتاج أن تتعلّم شيئًا جديدًا».', '“Why not just try it straight away?” asked Omar. She said, “Because guessing makes you think before you see. Then, when you see the result, you know whether your thinking was right or whether you have something new to learn.”'],
        ['🔒📓', 'أغلق عُمَر دفتره على تخميناته وقال: «لن أغيّرها، مهما حدث!». ابتسمت الدكتورة نور: «هكذا يفعل العالِم الأمين. وفي المحطّة القادمة نعرف كيف نختبرها اختبارًا عادلًا».', 'Omar closed his notebook on his guesses and said, “I won’t change them, whatever happens!” Dr. Nour smiled. “That’s what an honest scientist does. Next, we’ll learn how to test them fairly.”']
      ],
      learn: ['<b>الفرضيّة</b> تخمينٌ ذكيّ نكتبه <b>قبل</b> التجربة، ومعه سببه: «أظنّ أنّ… لأنّ…». ليست الفرضيّة علمًا مؤكّدًا، بل فكرة تنتظر الاختبار. وقد تكون صحيحة أو خاطئة، وكلاهما مفيد.', 'A <b>hypothesis</b> is a smart guess we write <b>before</b> the experiment, with a reason: “I think that… because…”. It isn’t certain knowledge — it’s an idea waiting to be tested. It may turn out right or wrong, and both are useful.'],
      islam: ['يعلّمنا القرآن ألّا نجزم بما لا نعلم: ﴿وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ ۚ إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا﴾ (الإسراء: ٣٦). لذلك نسمّي تخميننا «تخمينًا»، ولا نقول «أنا متأكّد» حتّى نختبر ونرى.', 'The Quran teaches us not to claim what we don’t know: “Do not follow what you have no knowledge of. Hearing, sight and the heart — all of these will be asked about.” (al-Isra 17:36). So we call our guess a “guess”, and we don’t say “I’m sure” until we have tested and seen.'],
      src: ['الإسراء: ٣٦', 'Al-Isra 17:36'],
      mission: ['اجمع ٦–٨ أشياء آمنة من البيت (ملعقة، تفّاحة، غطاء قارورة، قطعة إسفنج، حجر صغير، ورقة…). اكتب لكلّ واحد في جدول: <b>تخميني</b> (يطفو / يغوص) و<b>لماذا</b>. ثمّ املأ وعاءً بالماء — بمساعدة كبير — وجرّب كلّ شيء، واكتب <b>ما حدث فعلًا</b> بجانب تخمينك. امسح الماء المنسكب بعدها.', 'Collect 6–8 safe objects from home (a spoon, an apple, a bottle cap, a sponge, a small stone, a sheet of paper…). In a table, write for each one: <b>my guess</b> (float / sink) and <b>why</b>. Then fill a bowl with water — with an adult’s help — test each object and write <b>what really happened</b> next to your guess. Wipe up any spills afterwards.'],
      q: ['أيّ جملة هي فرضيّة جيّدة؟', 'Which sentence is a good hypothesis?'],
      o: [['أظنّ أنّ الإسفنجة ستطفو لأنّ فيها فتحات مليئة بالهواء', 'I think the sponge will float because it has holes full of air', 1], ['الإسفنجة صفراء', 'The sponge is yellow', 0], ['أنا متأكّد مئة بالمئة من كلّ شيء', 'I’m one hundred percent sure about everything', 0]],
      fb: ['رائع! الفرضيّة الجيّدة فيها تخمين («ستطفو») وسبب («لأنّ فيها هواء»)، ونستطيع اختبارها.', 'Great! A good hypothesis has a guess (“it will float”) and a reason (“because it has air”), and we can test it.'],
      podcast: {
        title: ['هل تغوص التفّاحة؟', 'Will the apple sink?'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في بودكاست العالِم الصغير. عُمَر، أمامنا اليوم وعاء ماء كبير!', 'Assalamu alaikum, friends! Dr. Nour here on The Little Scientist. Omar, today we have a big bowl of water!'],
          ['k', 'وعليكم السلام! وأريد أن أرمي فيه كلّ شيء فورًا!', 'Wa alaikum assalam! And I want to drop everything in right now!'],
          ['h', 'مهلًا مهلًا! العلماء يتوقّفون لحظة قبل التجربة، ويكتبون تخمينًا ذكيًّا. نسمّيه فرضيّة.', 'Wait, wait! Scientists pause for a moment before an experiment and write a smart guess. We call it a hypothesis.'],
          ['k', 'فرضيّة؟ كلمة كبيرة! هل هي مثل التخمين في الألغاز؟', 'Hypothesis? That’s a big word! Is it like guessing in a riddle?'],
          ['h', 'قريبة، لكن معها سبب. تقول: أظنّ أنّ كذا سيحدث، لأنّ كذا.', 'Close, but with a reason. You say: I think this will happen, because of that.'],
          ['k', 'إذن: أظنّ أنّ التفّاحة ستغوص، لأنّها ثقيلة!', 'So: I think the apple will sink, because it’s heavy!'],
          ['h', 'فرضيّة ممتازة! اكتبها في الدفتر ولا تمحها مهما حدث.', 'An excellent hypothesis! Write it in your notebook and don’t rub it out, whatever happens.'],
          ['k', 'ولماذا لا أمحوها إذا ظهر أنّها خطأ؟', 'Why not rub it out if it turns out to be wrong?'],
          ['h', 'لأنّ العالِم أمين. نحن لا نخفي تخميناتنا. والتخمين الخاطئ يعلّمنا شيئًا جديدًا.', 'Because a scientist is honest. We don’t hide our guesses. And a wrong guess teaches us something new.'],
          ['k', 'ولماذا لا أقول فقط: أنا متأكّد؟', 'Why don’t I just say: I’m sure?'],
          ['h', 'لأنّ القرآن يعلّمنا ألّا نتكلّم بما ليس لنا به علم. قبل التجربة، هو مجرّد تخمين.', 'Because the Quran teaches us not to speak about what we have no knowledge of. Before the test, it’s only a guess.'],
          ['k', 'فهمت. سأقول: أظنّ… حتّى أختبر وأرى.', 'Got it. I’ll say: I think… until I test it and see.'],
          ['h', 'وأخبرك سرًّا: بعض الأشياء ستفاجئك جدًّا اليوم. انتظر وسترى!', 'And here’s a secret: some things will really surprise you today. Wait and see!'],
          ['h', 'مهمّة اليوم: اجمع ستّة أشياء آمنة، واكتب لكلّ واحد تخمينك وسببه، ثمّ جرّب مع كبير. إلى اللقاء!', 'Today’s mission: collect six safe objects, write your guess and reason for each, then test them with an adult. See you soon!']
        ]
      }
    },

    /* ───────── 4 · fair test ───────── */
    {
      id: 'fair-test', icon: '⚖️', tag: 'test',
      t: ['الاختبار العادل', 'The fair test'],
      sub: ['نغيّر شيئًا واحدًا فقط', 'Change only one thing'],
      pg: [
        ['🧻🧻', 'في البيت نوعان من المناديل الورقيّة للمطبخ. قالت أمّ عُمَر: «أيّهما يمتصّ الماء أكثر؟». قال عُمَر: «سأعرف!»', 'At home there were two kinds of kitchen paper towel. Omar’s mum asked, “Which one soaks up more water?” Omar said, “I’ll find out!”'],
        ['💦😬', 'أخذ قطعة كبيرة من النوع الأوّل وغمسها في كوب ممتلئ، وقطعة صغيرة من النوع الثاني وغمسها في كوب فيه قليل من الماء. ثمّ قال: «الأوّل فاز!»', 'He took a big piece of the first kind and dipped it into a full cup, and a small piece of the second kind and dipped it into a cup with only a little water. Then he said, “The first one wins!”'],
        ['👩‍🔬⚖️', 'قالت الدكتورة نور بلطف: «هل كانت المباراة عادلة؟ القطعتان مختلفتان في الحجم، والماء مختلف في الكمّيّة! لعلّ الأوّل فاز لأنّه أكبر فقط». فكّر عُمَر: «صحيح… غيّرت أشياء كثيرة».', 'Dr. Nour said gently, “Was it a fair match? The pieces were different sizes and the water was different amounts! Maybe the first one won just because it was bigger.” Omar thought: “True… I changed lots of things.”'],
        ['✂️📐', 'هذه المرّة، قصّت له أمّه قطعتين بالحجم نفسه تمامًا. وصبّ في كوبين متماثلين الكمّيّة نفسها من الماء. وغمس القطعتين معًا عشر ثوانٍ، ثمّ رفعهما وقاس الماء الباقي في كلّ كوب.', 'This time his mum cut two pieces of exactly the same size. He poured the same amount of water into two identical cups. He dipped both pieces at the same time for ten seconds, then lifted them out and measured the water left in each cup.'],
        ['🔦🏛️', 'قالت الدكتورة نور: «قبل نحو ألف سنة، كان العالِم المسلم <b>ابن الهيثم</b> لا يكتفي بالكلام، بل يجرّب. درس الضوء في غرفة مظلمة فيها ثقب صغير، فرأى صورة ما في الخارج تظهر مقلوبة على الجدار. وكان يكرّر تجاربه ويغيّر فيها بعناية».', 'Dr. Nour said, “About a thousand years ago, the Muslim scientist <b>Ibn al-Haytham</b> didn’t just talk — he experimented. He studied light in a dark room with a tiny hole and saw the outside scene appear upside down on the wall. He repeated his experiments and changed things carefully.”']
      ],
      learn: ['<b>الاختبار العادل</b>: نغيّر <b>شيئًا واحدًا فقط</b> (مثل نوع المنديل)، ونُبقي كلّ شيء آخر متساويًا (الحجم، كمّيّة الماء، الوقت، الكوب). هكذا نعرف أنّ الفرق في النتيجة جاء من ذلك الشيء الواحد. ونكرّر التجربة أكثر من مرّة لنتأكّد.', 'A <b>fair test</b>: change <b>only one thing</b> (like the type of paper towel) and keep everything else the same (size, amount of water, time, cup). That way we know any difference in the result came from that one thing. We also repeat the test more than once to be sure.'],
      islam: ['العدل قيمة عظيمة في ديننا، حتّى في الميزان: ﴿وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ﴾ (الرحمن: ٩). والاختبار العادل نوعٌ من هذا العدل: نعطي كلّ مجموعة الفرصة نفسها.<br>ومن قدواتنا <b>ابن الهيثم</b> (عاش نحو ٩٦٥–١٠٤٠م، وُلد في البصرة وعمل في القاهرة)، صاحب «كتاب المناظر» في الضوء والإبصار. اعتمد على التجربة، وبيّن أنّنا نرى حين يدخل الضوء من الأشياء إلى العين، ودرس الغرفة المظلمة ذات الثقب التي تُعدّ فكرة «الكاميرا المظلمة».',
              'Fairness is a great value in our deen, even in weighing: “Establish weight with justice and do not short the balance.” (ar-Rahman 55:9). A fair test is a kind of this fairness: every group gets the same chance.<br>One of our role models is <b>Ibn al-Haytham</b> (lived about 965–1040 CE, born in Basra, worked in Cairo), author of the “Book of Optics” about light and sight. He relied on experiments, showed that we see when light travels from objects into the eye, and studied the dark room with a small hole — the idea behind the “camera obscura”.'],
      src: ['الرحمن: ٩ · ابن الهيثم، كتاب المناظر', 'Ar-Rahman 55:9 · Ibn al-Haytham, Book of Optics'],
      mission: ['جرّب تجربة المناديل الورقيّة اختبارًا عادلًا: اطلب من كبير أن يقصّ قطعتين <b>بالحجم نفسه</b> من نوعين مختلفين (أو منديل ورقيّ وقطعة قماش). صبّ في كوبين متماثلين <b>الكمّيّة نفسها</b> من الماء (مثلًا ٥ ملاعق). اغمس القطعتين معًا ١٠ ثوانٍ، ثمّ عُدّ ملاعق الماء الباقي في كلّ كوب. كرّر ثلاث مرّات، واملأ «قائمة الاختبار العادل» في ورقة العمل.', 'Run the paper towel experiment as a fair test: ask an adult to cut two pieces of <b>the same size</b> from two different kinds (or a paper towel and a piece of cloth). Pour <b>the same amount</b> of water into two identical cups (for example 5 spoonfuls). Dip both pieces at once for 10 seconds, then count the spoonfuls of water left in each cup. Repeat three times and fill in the “fair-test checklist” on the worksheet.'],
      q: ['تريد أن تعرف: هل الماء الدافئ يذيب السكّر أسرع من البارد؟ ما الشيء الوحيد الذي تغيّره؟', 'You want to know if warm water dissolves sugar faster than cold water. What is the one thing you change?'],
      o: [['كمّيّة السكّر وحجم الكوب', 'The amount of sugar and the size of the cup', 0], ['حرارة الماء فقط، وكلّ شيء آخر متساوٍ', 'Only the water temperature — everything else stays the same', 1], ['كلّ شيء، لتكون التجربة ممتعة', 'Everything, to make it more fun', 0]],
      fb: ['أحسنت! نغيّر الحرارة فقط، ونُبقي السكّر والكوب وكمّيّة الماء والتحريك متساوية. (ويصبّ الماء الدافئ شخصٌ كبير.)', 'Well done! We change only the temperature and keep the sugar, cup, amount of water and stirring the same. (And an adult pours the warm water.)'],
      podcast: {
        title: ['مباراة المناديل', 'The paper towel match'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في بودكاست العالِم الصغير. عُمَر، سمعت أنّك أجريت مباراة؟', 'Assalamu alaikum, friends! Dr. Nour here on The Little Scientist. Omar, I heard you held a match?'],
          ['k', 'وعليكم السلام! نعم، مباراة بين نوعين من المناديل. أيّهما يمتصّ الماء أكثر. وفاز الأوّل!', 'Wa alaikum assalam! Yes, a match between two kinds of paper towel, to see which soaks up more water. The first one won!'],
          ['h', 'رائع! لكن أخبرني، هل كانت القطعتان بالحجم نفسه؟', 'Great! But tell me, were the two pieces the same size?'],
          ['k', 'لا… الأولى كانت أكبر. والكوب الأوّل كان فيه ماء أكثر.', 'No… the first was bigger. And the first cup had more water.'],
          ['h', 'تخيّل سباق جري: عدّاء يركض مئة متر، وآخر يركض ألف متر. هل السباق عادل؟', 'Imagine a running race: one runner runs a hundred metres and another runs a thousand. Is that race fair?'],
          ['k', 'لا طبعًا! إذن مباراتي لم تكن عادلة!', 'Of course not! So my match wasn’t fair!'],
          ['h', 'بالضبط. في الاختبار العادل نغيّر شيئًا واحدًا فقط، وهنا هو نوع المنديل. وكلّ شيء آخر يبقى متساويًا.', 'Exactly. In a fair test we change only one thing — here, the type of towel. Everything else stays the same.'],
          ['k', 'الحجم نفسه، والماء نفسه، والوقت نفسه. فهمت!', 'Same size, same water, same time. Got it!'],
          ['h', 'وكرّر التجربة أكثر من مرّة. مرّة واحدة قد تخدعك.', 'And repeat the test more than once. Just one try can fool you.'],
          ['k', 'هل كان العلماء المسلمون يجرّبون هكذا؟', 'Did Muslim scientists experiment like this?'],
          ['h', 'نعم! ابن الهيثم قبل نحو ألف سنة درس الضوء بالتجربة. جلس في غرفة مظلمة فيها ثقب صغير، فظهرت صورة الخارج مقلوبة على الجدار.', 'Yes! About a thousand years ago, Ibn al-Haytham studied light through experiments. In a dark room with a tiny hole, a picture of the outside appeared upside down on the wall.'],
          ['k', 'مقلوبة! هذا مدهش. وهو لم يصدّق فقط، بل جرّب بنفسه.', 'Upside down! That’s amazing. And he didn’t just believe things — he tested them himself.'],
          ['h', 'وتذكّر: ربّنا يحبّ العدل، حتّى في الميزان. والاختبار العادل يعطي كلّ مجموعة الفرصة نفسها.', 'And remember: our Lord loves fairness, even in weighing. A fair test gives every group the same chance.'],
          ['h', 'مهمّة اليوم: أعِد مباراة المناديل بعدل، قطعتان بالحجم نفسه، وماء بالكمّيّة نفسها، ثلاث مرّات. إلى اللقاء!', 'Today’s mission: rerun the paper towel match fairly — same-size pieces, same amount of water, three times. Bye for now!']
        ]
      }
    },

    /* ───────── 5 · measure & record ───────── */
    {
      id: 'measure', icon: '📏', tag: 'test',
      t: ['أقيسُ وأسجّل', 'Measuring and recording'],
      sub: ['الأرقام لا تنسى', 'Numbers don’t forget'],
      pg: [
        ['🧊🧂', 'وضعت الدكتورة نور مكعّبَي ثلج متشابهين على صحنين متماثلين. ورشّت على أحدهما ملعقة صغيرة من الملح، وتركت الآخر بلا ملح. وسألت: «أيّهما يذوب أسرع؟»', 'Dr. Nour put two matching ice cubes on two identical plates. She sprinkled a small spoonful of salt on one and left the other with no salt. She asked, “Which one will melt faster?”'],
        ['💭📓', 'كتب عُمَر فرضيّته: «أظنّ أنّهما سيذوبان معًا، لأنّهما الثلج نفسه». ثمّ قالت الدكتورة نور: «والآن لن نقول (ذاب قليلًا) أو (ذاب كثيرًا)، بل سنقيس».', 'Omar wrote his hypothesis: “I think they’ll melt at the same time, because they’re the same ice.” Then Dr. Nour said, “Now we won’t say ‘melted a bit’ or ‘melted a lot’ — we’ll measure.”'],
        ['⏱️📏', 'كلّ خمس دقائق، كان عُمَر يصبّ الماء الذائب من كلّ صحن في كأس صغيرة شفّافة، ويقيس ارتفاعه بالمسطرة، ويكتب الرقم في جدول.', 'Every five minutes, Omar poured the melted water from each plate into a small clear cup, measured its height with a ruler, and wrote the number in a table.'],
        ['📋😮', 'بعد عشرين دقيقة نظر إلى جدوله: الثلج المملّح ذاب أسرع بوضوح! قالت الدكتورة نور: «الملح يجعل الثلج يذوب عند درجة حرارة أقلّ، لذلك يرشّون الملح على الطرق المتجمّدة في الشتاء».', 'After twenty minutes he looked at his table: the salted ice had clearly melted faster! Dr. Nour said, “Salt makes ice melt at a lower temperature. That’s why people spread salt on icy roads in winter.”'],
        ['🌍📐', 'ثمّ حكت له عن <b>البيروني</b>: «قبل نحو ألف سنة، قاس البيروني ارتفاع جبل، ثمّ صعد إليه وقاس زاوية انخفاض الأفق، وحسب من ذلك نصف قطر الأرض! وكانت نتيجته قريبة جدًّا ممّا نعرفه اليوم».', 'Then she told him about <b>al-Biruni</b>: “About a thousand years ago, al-Biruni measured the height of a mountain, then climbed it and measured how far the horizon dipped below him — and from that he worked out the radius of the Earth! His result was very close to what we know today.”']
      ],
      learn: ['<b>القياس</b> يحوّل الكلام إلى أرقام دقيقة، و<b>التسجيل</b> يحفظها فلا ننساها. نقيس بالأداة نفسها كلّ مرّة (مسطرة، ملعقة، ساعة)، ونكتب الرقم <b>فورًا</b> مع وحدته (سم، دقيقة، ملعقة) في جدول مرتّب.', '<b>Measuring</b> turns words into exact numbers, and <b>recording</b> keeps them safe so we don’t forget. We measure with the same tool every time (ruler, spoon, clock) and write the number down <b>straight away</b>, with its unit (cm, minutes, spoonfuls), in a neat table.'],
      islam: ['خلق الله كلّ شيء بمقدار دقيق: ﴿إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ﴾ (القمر: ٤٩). والعالِم حين يقيس يكتشف شيئًا من هذا النظام البديع.<br>ومن قدواتنا <b>أبو الريحان البيروني</b> (٩٧٣–١٠٤٨م تقريبًا)، العالِم الذي قدّر نصف قطر الأرض بقياس ارتفاع جبل وزاوية انخفاض الأفق من قمّته، فجاءت نتيجته قريبة جدًّا من القيمة المعروفة اليوم.',
              'Allah created everything in exact measure: “Indeed, We have created everything in due measure.” (al-Qamar 54:49). When a scientist measures, they discover a little of this beautiful order.<br>One of our role models is <b>Abu Rayhan al-Biruni</b> (about 973–1048 CE), the scholar who estimated the Earth’s radius by measuring a mountain’s height and how far the horizon dipped as seen from its top. His answer was very close to the value we know today.'],
      src: ['القمر: ٤٩ · البيروني وقياس الأرض', 'Al-Qamar 54:49 · Al-Biruni and measuring the Earth'],
      mission: ['تجربة الثلج والملح: اطلب من كبير مكعّبَي ثلج متشابهين، وضع كلّ واحد على صحن. رُشّ ملعقة صغيرة من الملح على أحدهما فقط. كلّ ٥ دقائق صبّ الماء الذائب في كأس صغيرة وقِسه بالمسطرة أو عُدّه بالملاعق، وسجّله في جدول من عمودين (مع ملح / بلا ملح) لمدّة ٢٠ دقيقة. ⚠️ لا تُمسك الثلج المملّح بيدك طويلًا فهو شديد البرودة، ولا تتذوّقه.', 'Ice and salt experiment: ask an adult for two matching ice cubes and put each on a plate. Sprinkle a small spoonful of salt on one only. Every 5 minutes, pour the melted water into a small cup and measure it with a ruler or count it in spoonfuls, and record it in a two-column table (salt / no salt) for 20 minutes. ⚠️ Don’t hold the salted ice for long — it gets very cold — and don’t taste it.'],
      q: ['ما أفضل طريقة لتسجيل نتائج التجربة؟', 'What is the best way to record an experiment’s results?'],
      o: [['أتذكّرها في رأسي وأكتبها غدًا', 'Remember them in my head and write them tomorrow', 0], ['أكتب «ذاب كثيرًا» فقط', 'Just write “it melted a lot”', 0], ['أكتب الرقم ووحدته في جدول فورًا', 'Write the number and its unit in a table straight away', 1]],
      fb: ['ممتاز! الذاكرة تنسى، والكلمات مثل «كثير» غير دقيقة. الرقم مع وحدته في جدول هو كنز العالِم.', 'Excellent! Memory forgets, and words like “a lot” aren’t exact. A number with its unit in a table is a scientist’s treasure.'],
      podcast: {
        title: ['الثلج والملح وقياس الأرض', 'Ice, salt and measuring the Earth'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في بودكاست العالِم الصغير. عُمَر، يداك باردتان!', 'Assalamu alaikum, friends! Dr. Nour here on The Little Scientist. Omar, your hands are cold!'],
          ['k', 'وعليكم السلام! لأنّي كنت أراقب مكعّبَي ثلج، واحد عليه ملح وواحد بلا ملح.', 'Wa alaikum assalam! That’s because I was watching two ice cubes, one with salt and one without.'],
          ['h', 'وماذا حدث؟', 'And what happened?'],
          ['k', 'المملّح ذاب أسرع! كثيرًا… أعني، أسرع كثيرًا.', 'The salted one melted faster! A lot… I mean, a lot faster.'],
          ['h', 'كم هو كثير؟ هنا يأتي دور القياس. العالِم لا يقول كثيرًا أو قليلًا، بل يقول رقمًا.', 'How much is a lot? That’s where measuring comes in. A scientist doesn’t say a lot or a little — they give a number.'],
          ['k', 'آه! لقد قِست الماء الذائب بالمسطرة كلّ خمس دقائق. بعد عشرين دقيقة كان المملّح ثلاثة سنتيمترات تقريبًا، والآخر أقلّ من سنتيمتر.', 'Oh! I measured the melted water with a ruler every five minutes. After twenty minutes, the salted one was about three centimetres, and the other less than one.'],
          ['h', 'رائع! هذه بيانات حقيقيّة. وهل كتبتها فورًا؟', 'Wonderful! That’s real data. Did you write it down straight away?'],
          ['k', 'نعم، في جدول. لأنّ ذاكرتي تنسى أحيانًا!', 'Yes, in a table. Because my memory sometimes forgets!'],
          ['h', 'ذكيّ جدًّا. والآن قصّة: قبل نحو ألف سنة، أراد البيروني أن يعرف حجم الأرض كلّها.', 'Very smart. Now a story: about a thousand years ago, al-Biruni wanted to know the size of the whole Earth.'],
          ['k', 'الأرض كلّها؟ بمسطرة؟', 'The whole Earth? With a ruler?'],
          ['h', 'لا! قاس ارتفاع جبل، ثمّ صعد إلى قمّته وقاس كم ينخفض الأفق أمامه، ثمّ حسب. وجاءت نتيجته قريبة جدًّا ممّا نعرفه اليوم.', 'No! He measured a mountain’s height, then climbed to the top and measured how much the horizon dipped in front of him, and then he calculated. His answer was very close to what we know today.'],
          ['k', 'سبحان الله! القياس الدقيق يكشف أسرارًا كبيرة.', 'SubhanAllah! Careful measuring reveals big secrets.'],
          ['h', 'وفي القرآن: إنّا كلّ شيء خلقناه بقدر. كلّ شيء في خلق الله بمقدار دقيق.', 'And in the Quran: Indeed, We created everything in due measure. Everything Allah made has its exact measure.'],
          ['h', 'مهمّة اليوم: جرّب الثلج والملح مع كبير، وقِس كلّ خمس دقائق، وسجّل الأرقام في جدول. إلى اللقاء!', 'Today’s mission: try the ice and salt test with an adult, measure every five minutes, and record the numbers in a table. See you next time!']
        ]
      }
    },

    /* ───────── 6 · chart ───────── */
    {
      id: 'chart', icon: '📊', tag: 'test',
      t: ['أرسمُ رسمًا بيانيًّا', 'Making a simple chart'],
      sub: ['حين تتكلّم الأعمدة', 'When the bars do the talking'],
      pg: [
        ['📋😵', 'امتلأ دفتر عُمَر بالأرقام: أرقام المناديل، وأرقام الثلج، وأطوال الظلّ. قال: «عندي أرقام كثيرة… لكنّي لا أرى القصّة فيها!»', 'Omar’s notebook was full of numbers: paper towel numbers, ice numbers, shadow lengths. He said, “I have so many numbers… but I can’t see the story in them!”'],
        ['📊✏️', 'أخرجت الدكتورة نور ورقة مربّعات وقالت: «لنرسم <b>رسمًا بيانيًّا بالأعمدة</b>. لكلّ مجموعة عمود، وطول العمود يساوي الرقم».', 'Dr. Nour took out squared paper and said, “Let’s draw a <b>bar chart</b>. Each group gets a bar, and the height of the bar shows the number.”'],
        ['↔️↕️', 'رسم عُمَر خطًّا أفقيًّا في الأسفل وكتب تحته: «منديل أ» و«منديل ب». ورسم خطًّا عموديًّا على اليسار وكتب عليه الأرقام: ٠، ١، ٢، ٣… ثمّ كتب العنوان في الأعلى: «كم ملعقة ماء امتصّ كلّ منديل؟»', 'Omar drew a line across the bottom and wrote “Towel A” and “Towel B” under it. He drew a line up the side and numbered it: 0, 1, 2, 3… Then he wrote a title at the top: “How many spoonfuls of water did each towel soak up?”'],
        ['🟦🟩', 'لوّن عُمَر أربعة مربّعات للمنديل الأوّل، وثلاثة للثاني. فقال: «يا سلام! الآن أرى الفرق بنظرة واحدة!»', 'Omar coloured four squares for the first towel and three for the second. He said, “Wow! Now I can see the difference in one look!”'],
        ['📚🔢', 'قالت الدكتورة نور: «هل تعلم أنّ كلمة <b>الجبر</b> في الرياضيّات جاءت من كتاب العالِم المسلم <b>الخوارزمي</b>؟ وأنّ كلمة (خوارزميّة) التي يستعملها مبرمجو الحاسوب اليوم مأخوذة من اسمه؟ الأرقام لغةٌ تساعدنا على الفهم».', 'Dr. Nour said, “Did you know that the word <b>algebra</b> comes from a book by the Muslim scholar <b>al-Khwarizmi</b>? And that the word ‘algorithm’, which computer programmers use today, comes from his name? Numbers are a language that helps us understand.”']
      ],
      learn: ['<b>الرسم البيانيّ بالأعمدة</b> يحوّل الجدول إلى صورة: لكلّ مجموعة عمود، وطول العمود هو الرقم. لا تنسَ: <b>عنوانًا</b> في الأعلى، و<b>أسماء المجموعات</b> في الأسفل، و<b>أرقامًا متساوية المسافات</b> على الجانب تبدأ من الصفر.', 'A <b>bar chart</b> turns a table into a picture: each group gets a bar, and the bar’s height is the number. Don’t forget: a <b>title</b> at the top, the <b>group names</b> along the bottom, and <b>evenly spaced numbers</b> up the side, starting from zero.'],
      islam: ['جعل الله في خلقه نظامًا نعرف به العدد والحساب: ﴿وَلِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ﴾ (الإسراء: ١٢).<br>ومن قدواتنا <b>محمّد بن موسى الخوارزمي</b> (نحو ٧٨٠–٨٥٠م)، عمل في «بيت الحكمة» في بغداد، وكتب كتاب «المختصر في حساب الجبر والمقابلة» الذي أخذ منه علم <b>الجبر</b> اسمه، ومن اسمه جاءت كلمة «خوارزميّة» (algorithm).',
              'Allah placed an order in creation through which we learn numbers and counting: “…so that you may know the number of years and the reckoning.” (al-Isra 17:12).<br>One of our role models is <b>Muhammad ibn Musa al-Khwarizmi</b> (about 780–850 CE), who worked at the “House of Wisdom” in Baghdad. He wrote the book <i>al-Mukhtasar fi Hisab al-Jabr wal-Muqabala</i>, from which <b>algebra</b> got its name, and the word “algorithm” comes from his own name.'],
      src: ['الإسراء: ١٢ · الخوارزمي وعلم الجبر', 'Al-Isra 17:12 · Al-Khwarizmi and algebra'],
      mission: ['خذ نتائج إحدى تجاربك (المناديل أو الثلج أو الظلّ) وارسمها <b>رسمًا بيانيًّا بالأعمدة</b> على شبكة ورقة العمل أو ورق مربّعات: اكتب العنوان، وأسماء المجموعات، والأرقام من الصفر، ولوّن كلّ عمود بلون. ثمّ اعرضه على أحد أفراد أسرتك واسأله: «ماذا تفهم من رسمي دون أن أشرح؟»', 'Take the results of one of your experiments (paper towels, ice or shadows) and draw them as a <b>bar chart</b> on the worksheet grid or squared paper: write the title, the group names and the numbers from zero, and colour each bar. Then show it to someone in your family and ask, “What can you tell from my chart without me explaining?”'],
      q: ['في رسم بيانيّ: عمود «مع ملح» طوله ٦ مربّعات، وعمود «بلا ملح» طوله ٢. ماذا نفهم؟', 'In a bar chart, the “salt” bar is 6 squares high and the “no salt” bar is 2. What does it tell us?'],
      o: [['الثلج بلا ملح ذاب أكثر', 'The ice without salt melted more', 0], ['الثلج مع الملح ذاب أكثر، بثلاثة أضعاف تقريبًا', 'The salted ice melted more — about three times as much', 1], ['لا نستطيع أن نفهم شيئًا', 'We can’t tell anything', 0]],
      fb: ['أحسنت! العمود الأطول يعني رقمًا أكبر. ٦ هي ثلاثة أضعاف ٢.', 'Well done! The taller bar means a bigger number, and 6 is three times 2.'],
      podcast: {
        title: ['حين تتكلّم الأعمدة', 'When the bars talk'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في بودكاست العالِم الصغير. عُمَر، دفترك صار ثقيلًا!', 'Assalamu alaikum, friends! Dr. Nour here on The Little Scientist. Omar, your notebook is getting heavy!'],
          ['k', 'وعليكم السلام! نعم، مليء بالأرقام. لكنّي أنظر إليها فأتوه.', 'Wa alaikum assalam! Yes, it’s full of numbers. But when I look at them, I get lost.'],
          ['h', 'عندي حلّ سحريّ… ليس سحرًا حقًّا، اسمه الرسم البيانيّ بالأعمدة.', 'I have a magic solution… not real magic. It’s called a bar chart.'],
          ['k', 'أعمدة؟ مثل أعمدة البيت؟', 'Bars? Like pillars in a house?'],
          ['h', 'تقريبًا! كلّ مجموعة لها عمود، وكلّما كان الرقم أكبر كان العمود أطول.', 'Almost! Each group gets a bar, and the bigger the number, the taller the bar.'],
          ['k', 'إذن الثلج المملّح سيكون عموده أطول!', 'So the salted ice will have the taller bar!'],
          ['h', 'بالضبط. وتحتاج ثلاثة أشياء: عنوانًا في الأعلى، وأسماء المجموعات في الأسفل، وأرقامًا على الجانب تبدأ من الصفر.', 'Exactly. And you need three things: a title at the top, the group names at the bottom, and numbers up the side starting at zero.'],
          ['k', 'ولماذا من الصفر؟', 'Why from zero?'],
          ['h', 'لأنّك لو بدأت من رقم آخر، قد يبدو الفرق الصغير كبيرًا جدًّا. والعالِم لا يخدع العيون.', 'Because if you start from another number, a small difference can look huge. And a scientist doesn’t trick people’s eyes.'],
          ['k', 'فهمت. وهل كان العلماء المسلمون يحبّون الأرقام؟', 'I see. Did Muslim scientists love numbers?'],
          ['h', 'كثيرًا! الخوارزمي في بغداد كتب كتابًا أخذ منه علم الجبر اسمه. وكلمة خوارزميّة التي يستعملها المبرمجون جاءت من اسمه.', 'Very much! Al-Khwarizmi in Baghdad wrote a book that gave algebra its name. And the word algorithm, which programmers use, comes from his name.'],
          ['k', 'واو! كلّ مرّة يعمل الحاسوب، هناك شيء من اسم الخوارزمي!', 'Wow! Every time a computer works, there’s a bit of al-Khwarizmi’s name in it!'],
          ['h', 'جميل قولك. والقرآن يذكّرنا أنّ الله جعل لنا الليل والنهار لنعلم عدد السنين والحساب.', 'Nicely put. And the Quran reminds us that Allah made night and day so we may know the number of years and the reckoning.'],
          ['h', 'مهمّة اليوم: ارسم نتائج تجربة واحدة رسمًا بيانيًّا بالأعمدة، واسأل أحدًا: ماذا تفهم منه؟ إلى اللقاء!', 'Today’s mission: draw one experiment’s results as a bar chart and ask someone what they can tell from it. Goodbye!']
        ]
      }
    },

    /* ───────── 7 · honest conclusion ───────── */
    {
      id: 'conclusion', icon: '🤝', tag: 'share',
      t: ['أستنتجُ بأمانة', 'Honest conclusions'],
      sub: ['حتّى لو كان تخميني خطأ', 'Even when my guess was wrong'],
      pg: [
        ['🍎🌊', 'فتح عُمَر دفتر الفرضيّات. كان قد كتب: «التفّاحة ستغوص لأنّها ثقيلة». لكنّها في التجربة… طفت فوق الماء!', 'Omar opened his hypothesis notebook. He had written: “The apple will sink because it’s heavy.” But in the experiment… it floated!'],
        ['✏️😳', 'أمسك الممحاة وهمس: «لو محوتها وكتبت (ستطفو)، لن يعرف أحد». ثمّ توقّف. تذكّر أنّ الله يراه، وأنّ العالِم الأمين لا يغيّر النتائج.', 'He picked up his eraser and whispered, “If I rub it out and write ‘it will float’, nobody will know.” Then he stopped. He remembered that Allah sees him, and that an honest scientist never changes the results.'],
        ['👩‍🔬😊', 'قالت الدكتورة نور بفرح: «تخمينك الخاطئ هديّة! كتبتَ أنّ الثقيل يغوص، فتعلّمت الآن أنّ الأمر ليس بالوزن وحده. التفّاحة فيها هواء كثير بين خلاياها، فهي أخفّ من مثل حجمها من الماء».', 'Dr. Nour said happily, “Your wrong guess is a gift! You wrote that heavy things sink, and now you’ve learned it isn’t only about weight. An apple has lots of air between its cells, so it’s lighter than the same amount of water.”'],
        ['📝✅', 'كتب عُمَر <b>الاستنتاج</b>: «كان تخميني أنّ التفّاحة ستغوص. النتيجة: طفت. إذن تعلّمت أنّ الطفو لا يعتمد على الوزن فقط، بل على الهواء والمادّة أيضًا».', 'Omar wrote his <b>conclusion</b>: “My guess was that the apple would sink. The result: it floated. So I learned that floating doesn’t depend on weight alone, but also on air and what a thing is made of.”'],
        ['🌟🔬', 'قالت الدكتورة نور: «كثير من الاكتشافات العظيمة بدأت حين قال عالِم أمين: كنتُ مخطئًا، والنتيجة غير ما توقّعت. هذه شجاعة العلماء».', 'Dr. Nour said, “Many great discoveries began when an honest scientist said: I was wrong — the result isn’t what I expected. That’s a scientist’s courage.”']
      ],
      learn: ['<b>الاستنتاج</b> هو ما نتعلّمه من النتائج، ونكتبه بثلاث خطوات: «كان تخميني… والنتيجة كانت… إذن تعلّمت…». ونكتب النتائج <b>كما حدثت فعلًا</b>، ولا نغيّرها لتوافق تخميننا. التخمين الخاطئ ليس فشلًا، بل معلومة جديدة.', 'A <b>conclusion</b> is what we learn from our results. We write it in three steps: “My guess was… The result was… So I learned…”. We write the results <b>exactly as they happened</b> and never change them to match our guess. A wrong guess isn’t failure — it’s new information.'],
      islam: ['الصدق خُلق المؤمن في كلّ شيء، حتّى في دفتر التجارب: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ﴾ (التوبة: ١١٩). فالعالِم المسلم يكتب ما رأى بصدق، لأنّه يعلم أنّ الله يراه، حتّى حين لا يراه أحد.', 'Truthfulness is a believer’s character in everything, even in an experiment notebook: “O you who believe, be mindful of Allah and be with those who are truthful.” (at-Tawbah 9:119). A Muslim scientist writes down what they saw honestly, knowing Allah sees them even when no one else does.'],
      src: ['التوبة: ١١٩', 'At-Tawbah 9:119'],
      mission: ['افتح دفترك وارجع إلى تجاربك السابقة (الطفو، المناديل، الثلج). لكلّ تجربة اكتب استنتاجًا من ثلاث جمل: «كان تخميني… / النتيجة كانت… / إذن تعلّمت…». ضع ⭐ بجانب كلّ تخمين خاطئ، لأنّه علّمك شيئًا جديدًا! ثمّ أخبر أحد والديك عن أكثر نتيجة فاجأتك.', 'Open your notebook and go back to your earlier experiments (floating, paper towels, ice). For each one, write a three-sentence conclusion: “My guess was… / The result was… / So I learned…”. Put a ⭐ next to every wrong guess, because it taught you something new! Then tell a parent which result surprised you most.'],
      q: ['خمّنت أنّ البذور لن تنبت في الظلام، لكنّها نبتت. ماذا يفعل العالِم الأمين؟', 'You guessed seeds wouldn’t sprout in the dark, but they did. What does an honest scientist do?'],
      o: [['يكتب النتيجة كما حدثت، ويكتب ما تعلّمه منها', 'Writes the result as it happened, and what they learned from it', 1], ['يمحو تخمينه ويكتب أنّه كان يعرف من البداية', 'Rubs out the guess and writes that they knew all along', 0], ['يرمي التجربة ولا يخبر أحدًا', 'Throws the experiment away and tells no one', 0]],
      fb: ['أحسنت! الصدق أساس العلم. والتخمين الخاطئ المكتوب بصدق يعلّمنا ويعلّم غيرنا.', 'Well done! Honesty is the foundation of science. A wrong guess, written honestly, teaches us and others.'],
      podcast: {
        title: ['التفّاحة التي طفت', 'The apple that floated'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في بودكاست العالِم الصغير. عُمَر، تبدو هادئًا اليوم.', 'Assalamu alaikum, friends! Dr. Nour here on The Little Scientist. Omar, you seem quiet today.'],
          ['k', 'وعليكم السلام… الحقيقة أنّ تخميني كان خطأ. قلت إنّ التفّاحة ستغوص، فطفت!', 'Wa alaikum assalam… the truth is, my guess was wrong. I said the apple would sink, and it floated!'],
          ['h', 'ما شاء الله! هذا خبر رائع.', 'MashaAllah! That’s wonderful news.'],
          ['k', 'رائع؟ لكنّي أخطأت!', 'Wonderful? But I was wrong!'],
          ['h', 'نعم رائع، لأنّك تعلّمت شيئًا لم تكن تعرفه. لو كان كلّ تخمين صحيحًا، ما تعلّمنا شيئًا جديدًا.', 'Yes, wonderful, because you learned something you didn’t know. If every guess were right, we’d never learn anything new.'],
          ['k', 'لكن لماذا طفت وهي ثقيلة؟', 'But why did it float when it’s heavy?'],
          ['h', 'لأنّ في التفّاحة هواء كثيرًا بين خلاياها. فهي أخفّ من كمّيّة ماء بحجمها. الأمر ليس بالوزن وحده.', 'Because an apple has lots of air between its cells, so it’s lighter than the same amount of water. It isn’t just about weight.'],
          ['k', 'سأعترف بشيء. فكّرت أن أمحو تخميني وأكتب أنّها ستطفو.', 'I’ll admit something. I thought about rubbing out my guess and writing that it would float.'],
          ['h', 'وماذا فعلت؟', 'And what did you do?'],
          ['k', 'لم أفعل. تذكّرت أنّ الله يراني، حتّى لو لم يرني أحد.', 'I didn’t. I remembered that Allah sees me, even when nobody else does.'],
          ['h', 'هذا والله هو العالِم الحقيقيّ. يقول الله: يا أيّها الذين آمنوا اتّقوا الله وكونوا مع الصادقين.', 'That is a true scientist. Allah says: O you who believe, be mindful of Allah and be with the truthful.'],
          ['k', 'إذن كيف أكتب الاستنتاج؟', 'So how do I write my conclusion?'],
          ['h', 'ثلاث جمل: كان تخميني كذا، والنتيجة كانت كذا، إذن تعلّمت كذا. بسيط وصادق.', 'Three sentences: my guess was this, the result was that, so I learned this. Simple and honest.'],
          ['h', 'مهمّة اليوم: اكتب استنتاجًا صادقًا لكلّ تجربة، وضع نجمة بجانب كلّ تخمين خاطئ. إلى اللقاء!', 'Today’s mission: write an honest conclusion for each experiment, and put a star next to every wrong guess. See you soon!']
        ]
      }
    },

    /* ───────── 8 · share, check & final project ───────── */
    {
      id: 'share', icon: '🧪', tag: 'share',
      t: ['أشاركُ وأتحقّق: مشروعي العلميّ', 'Share and check: my science project'],
      sub: ['تجربتي الكبيرة وملصقي العلميّ', 'My big experiment and science poster'],
      pg: [
        ['🌱🌑', 'جاء وقت المشروع الكبير! زرع عُمَر حبّات فول على قطن مبلول في كوبين متماثلين: كوب على حافّة نافذة مشمسة، وكوب في خزانة مظلمة. والماء نفسه، والبذور نفسها. الشيء الوحيد المختلف: <b>الضوء</b>.', 'Time for the big project! Omar put bean seeds on damp cotton wool in two identical cups: one on a sunny windowsill and one in a dark cupboard. Same water, same seeds. The only difference: <b>light</b>.'],
        ['📅📏', 'كلّ يوم لمدّة أسبوع، كان يسقيهما الكمّيّة نفسها، ويقيس طول النبتة بالمسطرة، ويكتب لونها في جدوله. وفي اليوم الثالث صاح: «نبتت البذور في الكوبين!»', 'Every day for a week, he gave them the same amount of water, measured each shoot with a ruler, and wrote its colour in his table. On day three he shouted, “The seeds have sprouted in both cups!”'],
        ['🟢🟡', 'كانت المفاجأة: النبتة في الظلام طويلة ونحيلة وصفراء باهتة، والنبتة في الضوء أقصر وأقوى وخضراء! كتب عُمَر بصدق: «خمّنت أنّها لن تنبت في الظلام، لكنّها نبتت. الضوء لم يكن لازمًا للإنبات، لكنّه لازم لتكون النبتة خضراء قويّة».', 'The surprise: the plant in the dark was tall, thin and pale yellow, while the one in the light was shorter, sturdier and green! Omar wrote honestly: “I guessed it wouldn’t sprout in the dark, but it did. Light wasn’t needed to sprout, but it was needed for a strong green plant.”'],
        ['🖼️🖍️', 'صنع عُمَر <b>ملصقًا علميًّا</b> من صفحة واحدة: السؤال، والتخمين، والخطوات، والجدول، والرسم البيانيّ، والنتيجة، وما تعلّمه. وعرضه على أسرته بعد العشاء.', 'Omar made a one-page <b>science poster</b>: the question, the guess, the steps, the table, the bar chart, the result and what he learned. He presented it to his family after dinner.'],
        ['🙋‍♀️🔁', 'سألت أخته: «هل جرّبتها مرّة واحدة فقط؟ سأعيدها بنفسي لأتأكّد!». ابتسمت الدكتورة نور: «هذا هو العلم: نشارك عملنا، ونسمح لغيرنا أن يتحقّق منه ويكرّره. حتّى ابن الهيثم كتب كتابًا يناقش فيه أخطاء عالِم كبير قبله هو بطليموس».', 'His sister asked, “Did you only try it once? I’ll repeat it myself to check!” Dr. Nour smiled. “That’s science: we share our work and let others check and repeat it. Even Ibn al-Haytham wrote a book questioning mistakes in the work of a great scientist before him, Ptolemy.”']
      ],
      learn: ['العلم ليس سرًّا نخفيه: <b>نشارك</b> سؤالنا وطريقتنا ونتائجنا، و<b>نسمح</b> لغيرنا أن يكرّر التجربة ويتحقّق منها. وحين نراجع عمل غيرنا نكون مؤدّبين: «هل جرّبت كذا؟»، لا «أنت مخطئ!». والنتيجة التي تتكرّر عند أكثر من شخص نثق بها أكثر.', 'Science isn’t a secret to hide: we <b>share</b> our question, our method and our results, and we <b>let others</b> repeat the experiment and check it. When we check someone else’s work, we are kind: “Did you try…?”, not “You’re wrong!”. A result that comes out the same for different people is one we can trust more.'],
      islam: ['يعلّمنا القرآن أن نطلب الدليل لكلّ دعوى: ﴿قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ﴾ (البقرة: ١١١). فالعالِم يقدّم برهانه، ويقبل أن يُسأل عنه.<br>وقد كتب <b>ابن الهيثم</b> كتابًا عنوانه «الشكوك على بطليموس»، راجع فيه بأدبٍ وعلمٍ أعمالَ عالِمٍ كبير سبقه، ولم يقبلها دون تحقّق.',
              'The Quran teaches us to ask for proof of every claim: “Say: Bring your proof, if you are truthful.” (al-Baqarah 2:111). A scientist brings their evidence and accepts being questioned about it.<br><b>Ibn al-Haytham</b> wrote a book called “Doubts concerning Ptolemy”, in which he carefully and respectfully checked the work of a great scientist before him, rather than accepting it without testing.'],
      src: ['البقرة: ١١١ · ابن الهيثم، الشكوك على بطليموس', 'Al-Baqarah 2:111 · Ibn al-Haytham, Doubts concerning Ptolemy'],
      mission: ['<b>مشروعك النهائيّ:</b> اختر تجربة عادلة تستمرّ ٥–٧ أيّام، مثل: بذور فول أو عدس على قطن مبلول، كوب في الضوء وكوب في الظلام (بالماء نفسه). كل يوم: قِس، وسجّل في الجدول، وارسم. في النهاية اصنع <b>ملصقًا علميًّا</b> من صفحة واحدة فيه: السؤال، التخمين، الخطوات، الجدول، الرسم البيانيّ، النتيجة، وما تعلّمته. اعرضه على أسرتك، واطلب من أحدهم أن يكرّر تجربتك ليتحقّق منها. 🧼 اغسل يديك بعد لمس البذور والتراب.', '<b>Your final project:</b> choose a fair test that runs for 5–7 days, such as bean or lentil seeds on damp cotton wool — one cup in the light and one in the dark (with the same water). Every day: measure, record in your table and draw. At the end, make a one-page <b>science poster</b> showing: the question, the guess, the steps, the table, the bar chart, the result and what you learned. Present it to your family and ask someone to repeat your experiment to check it. 🧼 Wash your hands after touching seeds and soil.'],
      q: ['عرض صديقك تجربته، ولاحظت أنّه جرّبها مرّة واحدة فقط. ماذا تقول؟', 'A friend presents an experiment and you notice they only tried it once. What do you say?'],
      o: [['«تجربتك فاشلة!»', '“Your experiment is a failure!”', 0], ['لا أقول شيئًا أبدًا', 'I say nothing at all', 0], ['«فكرة جميلة! هل نكرّرها معًا لنتأكّد من النتيجة؟»', '“Nice idea! Shall we repeat it together to check the result?”', 1]],
      fb: ['ممتاز! نتحقّق من عمل غيرنا بأدب ولطف، والتكرار يجعل النتيجة أقوى. مبارك يا عالِمنا الصغير، لقد أكملت الرحلة! 🔬', 'Excellent! We check others’ work politely and kindly, and repeating makes a result stronger. Congratulations, little scientist — you’ve completed the journey! 🔬'],
      podcast: {
        title: ['ملصقي العلميّ الأوّل', 'My first science poster'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في الحلقة الأخيرة من بودكاست العالِم الصغير. عُمَر، ماذا تحمل؟', 'Assalamu alaikum, friends! Dr. Nour here for the last episode of The Little Scientist. Omar, what are you holding?'],
          ['k', 'وعليكم السلام! هذا ملصقي العلميّ! عن بذور في الضوء وبذور في الظلام.', 'Wa alaikum assalam! This is my science poster! About seeds in the light and seeds in the dark.'],
          ['h', 'ما شاء الله! أخبر المستمعين: ما كان سؤالك؟', 'MashaAllah! Tell our listeners: what was your question?'],
          ['k', 'هل تنبت البذور في الظلام؟ وخمّنت أنّها لن تنبت، لأنّ النبات يحتاج إلى الشمس.', 'Do seeds sprout in the dark? I guessed they wouldn’t, because plants need sunlight.'],
          ['h', 'وهل كان الاختبار عادلًا؟', 'And was it a fair test?'],
          ['k', 'نعم! الكوبان متماثلان، والماء نفسه، والبذور نفسها. الشيء الوحيد المختلف هو الضوء. وقِست كلّ يوم لمدّة أسبوع.', 'Yes! Two matching cups, the same water, the same seeds. The only difference was light. And I measured every day for a week.'],
          ['h', 'والنتيجة؟', 'And the result?'],
          ['k', 'مفاجأة! نبتت في الظلام أيضًا، لكنّها صارت طويلة ونحيلة وصفراء. وفي الضوء كانت خضراء وقويّة.', 'A surprise! They sprouted in the dark too, but they grew tall, thin and yellow. In the light they were green and strong.'],
          ['h', 'وكتبت ذلك بصدق رغم أنّ تخمينك كان خطأ. أنا فخورة بك.', 'And you wrote it honestly, even though your guess was wrong. I’m proud of you.'],
          ['k', 'وعرضته على أسرتي، فقالت أختي إنّها ستكرّر التجربة لتتأكّد. هل هذا يعني أنّها لا تصدّقني؟', 'I showed it to my family, and my sister said she’ll repeat it to check. Does that mean she doesn’t believe me?'],
          ['h', 'لا، هذا يعني أنّها عالِمة أيضًا! العلماء يشاركون عملهم، ويتحقّق بعضهم من عمل بعض. حتّى ابن الهيثم راجع أعمال بطليموس ولم يقبلها دون تحقّق.', 'No, it means she’s a scientist too! Scientists share their work and check each other’s. Even Ibn al-Haytham checked Ptolemy’s work instead of just accepting it.'],
          ['k', 'وفي القرآن: هاتوا برهانكم إن كنتم صادقين. ملصقي هو برهاني!', 'And in the Quran: Bring your proof, if you are truthful. My poster is my proof!'],
          ['h', 'أحسنت يا عُمَر. لقد نظرت، وسألت، وخمّنت، وجرّبت بعدل، وقِست، ورسمت، واستنتجت بأمانة، وشاركت.', 'Well done, Omar. You looked, asked, guessed, tested fairly, measured, drew a chart, concluded honestly and shared.'],
          ['k', 'الحمد لله! صرت عالِمًا صغيرًا حقًّا.', 'Alhamdulillah! I’ve really become a little scientist.'],
          ['h', 'مهمّة اليوم: ابدأ تجربتك الكبيرة لأسبوع، ثمّ اصنع ملصقك واعرضه على أسرتك. وتذكّروا: ربِّ زدني علمًا. في أمان الله!', 'Today’s mission: start your big week-long experiment, then make your poster and present it to your family. And remember: My Lord, increase me in knowledge. Goodbye, and may Allah keep you safe!']
        ]
      }
    }
  ]
};
