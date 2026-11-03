/* historian.js — «صانع المهارات» · مستكشف التاريخ — 8 stations + podcast */
window.SKILLS = window.SKILLS || {};
window.SKILLS.historian = {
  id: 'historian', icon: '🧭', color: '#8E5A2B',
  title: ['مستكشف التاريخ', 'The History Explorer'],
  intro: ['المؤرّخ لا يحفظ التواريخ فقط؛ إنه محقّقٌ يسأل ويتأكّد ويرتّب. تعال نتعلّم مهاراته، ثم نبني معًا «صندوق متحف عائلتي».',
          'A historian does not just memorise dates; a historian is a detective who asks, checks and puts things in order. Let us learn the skills, then build your own "Family History Museum Box".'],
  mentor: { icon: '🧕', name: ['الخالة نور', 'Aunt Noor'],
    say: ['أهلًا بك في متحفي الصغير! أنا الخالة نور، مرشدةُ المتحف. كلّ قطعةٍ هنا تحكي حكاية، وسأعلّمك كيف تسمعها وتتأكّد من صدقها.',
          'Welcome to my little museum! I am Aunt Noor, the museum guide. Every object here tells a story, and I will teach you how to hear it and check that it is true.'] },
  cast: { h: { icon: '🎙️', name: ['الخالة نور', 'Aunt Noor'], g: 'female' },
          k: { icon: '👦', name: ['يوسف', 'Yusuf'], g: 'male' } },
  goals: [
    ['فهم ما هو التاريخ ولماذا قصّ الله علينا القصص', 'رسم خطٍّ زمنيّ وقراءة التاريخين الهجري والميلادي', 'التفريق بين المصدر الأصلي والحكاية المنقولة', 'معرفة فكرة الإسناد وكيف تحقّق علماؤنا من الأخبار', 'طرح الأسئلة الجيدة وكشف الأساطير', 'قراءة الخريطة وما تقوله القطع الأثرية', 'إجراء مقابلة مع الأجداد وكتابة تاريخ العائلة', 'بناء صندوق متحف العائلة وتقديمه'],
    ['Understand what history is and why Allah tells us stories', 'Draw a timeline and read Hijri and Gregorian dates', 'Tell a primary source from a retold story', 'Know the idea of isnad and how Muslim scholars checked reports', 'Ask good questions and spot myths', 'Read a map and learn what objects can tell us', 'Interview grandparents and write a family history', 'Build a family museum box and present it']
  ],
  filters: [['think', 'عقل المؤرّخ', 'Historian\'s mind'], ['tools', 'أدوات المؤرّخ', 'Historian\'s tools'], ['family', 'تاريخ عائلتي', 'My family history']],
  parents: [
    '<h3>كيف تسيرون في الرحلة؟</h3><p>هذه الرحلة تعلّم <b>مهارات</b> المؤرّخ، لا قائمة أحداث. محطّةٌ واحدة في الأسبوع تكفي: نقرأ القصة معًا، ونستمع لحلقة البودكاست، ثم ننفّذ المهمّة الحقيقية في البيت.</p>' +
    '<ul><li>جهّزوا علبة كرتون (صندوق أحذية مثلًا) من البداية؛ ستُجمع فيها أعمال كلّ محطّة حتى تصير «متحف العائلة» في المحطّة الأخيرة.</li>' +
    '<li>المهمّات تحتاج صورًا قديمة وأغراضًا من البيت؛ اختاروا ما لا يُخاف عليه، وأبقوا الثمين بأيديكم.</li>' +
    '<li>رتّبوا مكالمةً أو زيارةً للجدّ أو الجدّة في المحطّة السابعة. إن كان الأجداد قد تُوفّوا رحمهم الله، فليقابل الطفل أحد الوالدين أو كبيرًا من العائلة، وتكون المقابلة بابًا للدعاء لهم.</li>' +
    '<li>لا نعيد هنا أحداث السيرة؛ لها في الموقع رحلةٌ كاملة، ولتاريخنا ركنٌ خاص. هنا نتعلّم <b>كيف</b> نقرأ التاريخ.</li>' +
    '<li>احتفلوا بالسؤال أكثر من الجواب: «كيف عرفنا ذلك؟» هو أجمل ما يتعلّمه الطفل.</li></ul>',
    '<h3>How to run the journey</h3><p>This journey teaches the <b>skills</b> of a historian, not a list of events. One station a week is plenty: read the story together, listen to the podcast episode, then do the real mission at home.</p>' +
    '<ul><li>Find a cardboard box (a shoebox is perfect) at the start; the work from each station goes into it, until it becomes the "Family Museum" in the final station.</li>' +
    '<li>Missions use old photos and household objects; choose things that are not precious, and keep valuable items in your own hands.</li>' +
    '<li>Arrange a call or visit with a grandparent for station 7. If the grandparents have passed away, may Allah have mercy on them, the child can interview a parent or an older relative, and the interview becomes a door to making dua for them.</li>' +
    '<li>We do not retell the Seerah here; the site has a full Seerah journey and a history corner for that. Here we learn <b>how</b> to read history.</li>' +
    '<li>Celebrate the question more than the answer: "How do we know that?" is the best thing a child can learn.</li></ul>'
  ],
  worksheet: [
    '<h2>🧭 دفتر مستكشف التاريخ</h2><p>الاسم: ____________________ &nbsp; التاريخ الهجري: ________ &nbsp; الميلادي: ________</p>' +
    '<h3>١. شريط حياتي الزمني</h3><p>اكتب سنة كلّ حدث (هجري وميلادي) وارسم أو الصق صورة.</p>' +
    '<table border="1" cellpadding="8" style="width:100%;border-collapse:collapse;text-align:center"><tr><th>وُلدتُ</th><th>أوّل كلمة / أوّل خطوة</th><th>أوّل يوم في المدرسة</th><th>حدثٌ أحببته</th><th>اليوم</th></tr>' +
    '<tr><td style="height:70px"></td><td></td><td></td><td></td><td></td></tr><tr><td>سنة: ____</td><td>سنة: ____</td><td>سنة: ____</td><td>سنة: ____</td><td>سنة: ____</td></tr></table>' +
    '<h3>٢. ورقة مقابلة الجدّ / الجدّة</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse">' +
    '<tr><td>من قابلتُ؟</td><td style="width:60%"></td></tr><tr><td>١. أين وُلدتَ؟ وكيف كان بيتكم؟</td><td style="height:45px"></td></tr><tr><td>٢. ماذا كنتَ تلعب وأنت في عمري؟</td><td style="height:45px"></td></tr>' +
    '<tr><td>٣. كيف كانت مدرستك؟</td><td style="height:45px"></td></tr><tr><td>٤. كيف كنتم تقضون رمضان والعيد؟</td><td style="height:45px"></td></tr><tr><td>٥. ما الشيء الذي تغيّر أكثر من غيره منذ صغرك؟</td><td style="height:45px"></td></tr></table>' +
    '<h3>٣. بطاقات القطع (قصّها وضعها بجانب كلّ قطعة)</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse">' +
    '<tr><td>القطعة: ________<br>صاحبها: ________<br>عمرها تقريبًا: ________<br>من أين جاءت: ________<br>ماذا تحكي لنا: ________</td><td>القطعة: ________<br>صاحبها: ________<br>عمرها تقريبًا: ________<br>من أين جاءت: ________<br>ماذا تحكي لنا: ________</td></tr>' +
    '<tr><td>القطعة: ________<br>صاحبها: ________<br>عمرها تقريبًا: ________<br>من أين جاءت: ________<br>ماذا تحكي لنا: ________</td><td>القطعة: ________<br>صاحبها: ________<br>عمرها تقريبًا: ________<br>من أين جاءت: ________<br>ماذا تحكي لنا: ________</td></tr>' +
    '<tr><td colspan="2">القطعة: ________ &nbsp; صاحبها: ________ &nbsp; عمرها تقريبًا: ________ &nbsp; من أين جاءت: ________ &nbsp; ماذا تحكي لنا: ________</td></tr></table>' +
    '<h3>٤. قائمة فحص الخبر ✔</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse">' +
    '<tr><th>السؤال</th><th>نعم</th><th>لا</th></tr><tr><td>من قال هذا الخبر أو كتبه؟</td><td></td><td></td></tr><tr><td>هل كان حاضرًا، أم سمعه من غيره؟</td><td></td><td></td></tr>' +
    '<tr><td>متى كُتب؟ وقت الحدث أم بعده بزمن طويل؟</td><td></td><td></td></tr><tr><td>هل هو معروفٌ بالصدق؟</td><td></td><td></td></tr><tr><td>هل يقول مصدرٌ آخر الشيءَ نفسه؟</td><td></td><td></td></tr><tr><td>هل الخبر معقول، أم فيه مبالغة؟</td><td></td><td></td></tr></table>',
    '<h2>🧭 History Explorer\'s Notebook</h2><p>Name: ____________________ &nbsp; Hijri date: ________ &nbsp; Gregorian date: ________</p>' +
    '<h3>1. My life timeline</h3><p>Write the year of each event (Hijri and Gregorian) and draw or stick a photo.</p>' +
    '<table border="1" cellpadding="8" style="width:100%;border-collapse:collapse;text-align:center"><tr><th>I was born</th><th>First word / first step</th><th>First day at school</th><th>An event I loved</th><th>Today</th></tr>' +
    '<tr><td style="height:70px"></td><td></td><td></td><td></td><td></td></tr><tr><td>Year: ____</td><td>Year: ____</td><td>Year: ____</td><td>Year: ____</td><td>Year: ____</td></tr></table>' +
    '<h3>2. Grandparent interview sheet</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse">' +
    '<tr><td>Who did I interview?</td><td style="width:60%"></td></tr><tr><td>1. Where were you born? What was your home like?</td><td style="height:45px"></td></tr><tr><td>2. What did you play when you were my age?</td><td style="height:45px"></td></tr>' +
    '<tr><td>3. What was your school like?</td><td style="height:45px"></td></tr><tr><td>4. How did your family spend Ramadan and Eid?</td><td style="height:45px"></td></tr><tr><td>5. What has changed the most since you were little?</td><td style="height:45px"></td></tr></table>' +
    '<h3>3. Object label cards (cut out and place next to each object)</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse">' +
    '<tr><td>Object: ________<br>Owner: ________<br>About how old: ________<br>Where it came from: ________<br>What it tells us: ________</td><td>Object: ________<br>Owner: ________<br>About how old: ________<br>Where it came from: ________<br>What it tells us: ________</td></tr>' +
    '<tr><td>Object: ________<br>Owner: ________<br>About how old: ________<br>Where it came from: ________<br>What it tells us: ________</td><td>Object: ________<br>Owner: ________<br>About how old: ________<br>Where it came from: ________<br>What it tells us: ________</td></tr>' +
    '<tr><td colspan="2">Object: ________ &nbsp; Owner: ________ &nbsp; About how old: ________ &nbsp; Where it came from: ________ &nbsp; What it tells us: ________</td></tr></table>' +
    '<h3>4. Source-check checklist ✔</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse">' +
    '<tr><th>Question</th><th>Yes</th><th>No</th></tr><tr><td>Do I know who said or wrote this?</td><td></td><td></td></tr><tr><td>Were they there, or did they hear it from someone else?</td><td></td><td></td></tr>' +
    '<tr><td>Was it written at the time, or long after?</td><td></td><td></td></tr><tr><td>Is this person known for being truthful?</td><td></td><td></td></tr><tr><td>Does another source say the same thing?</td><td></td><td></td></tr><tr><td>Does it make sense, without exaggeration?</td><td></td><td></td></tr></table>'
  ],
  next: ['../activities/play.html', '🪐', 'كوكب الإبداع', 'Planet of Creativity', 'جرّب مهارة أخرى أو لعبة', 'Try another skill or a game'],
  stations: [
    /* ── 1 ── */
    {
      id: 'what-is-history', icon: '📜', tag: 'think',
      t: ['ما هو التاريخ؟', 'What is history?'],
      sub: ['لماذا يقصّ الله علينا القصص', 'Why Allah tells us stories'],
      pg: [
        ['🏛️👦', 'دخل يوسف، وعمره تسع سنوات، متحفَ المدينة لأوّل مرّة. رأى سيوفًا قديمة، وأواني من فخّار، وورقةً صفراء مكتوبة بخطٍّ جميل. همس: «كيف يعرفون عمر هذه الأشياء؟»',
                 'Yusuf, nine years old, walked into the city museum for the first time. He saw old swords, clay pots, and a yellow page written in beautiful handwriting. He whispered, "How do they know how old these things are?"'],
        ['🧕✨', 'ابتسمت مرشدة المتحف، الخالة نور: «هذا بالضبط سؤال المؤرّخ! التاريخ هو قصّة ما حدث للناس من قبلنا. والمؤرّخ هو الذي يجمع الأدلّة ليعرف ما حدث حقًّا.»',
                 'The museum guide, Aunt Noor, smiled. "That is exactly a historian\'s question! History is the story of what happened to people before us. A historian collects clues to find out what really happened."'],
        ['🔍📦', '«المؤرّخ يشبه المحقّق»، قالت. «لا يكفيه أن يسمع حكاية. يسأل: من قالها؟ متى؟ وأين الدليل؟ ثم يرتّب الأدلّة كقطع الأحجية حتى تظهر الصورة.»',
                 '"A historian is like a detective," she said. "Hearing a story is not enough. A historian asks: Who said it? When? Where is the proof? Then puts the clues together like a puzzle until the picture appears."'],
        ['📖🌙', 'ثم قالت: «وفي القرآن قصصٌ كثيرة عن الأنبياء والأمم السابقة. لم يقصّها الله علينا للتسلية فقط، بل لنأخذ منها <b>العِبرة</b>: نتعلّم ممّا نجح فيه الناس وممّا أخطؤوا فيه.»',
                 'Then she said, "The Quran has many stories about the prophets and the nations before us. Allah did not tell them to us just for fun, but so we take a <b>lesson</b> from them: we learn from what people did well and from their mistakes."'],
        ['🧒➡️👴', 'سأل يوسف: «وهل لي أنا تاريخ؟» ضحكت الخالة نور: «طبعًا! لك يومُ ولادة، وأوّل خطوة، وأوّل يوم في المدرسة. وأنت اليوم ستبدأ بتعلّم مهارات المؤرّخ، وفي آخر الرحلة ستبني متحفًا صغيرًا لعائلتك!»',
                 'Yusuf asked, "Do I have a history too?" Aunt Noor laughed. "Of course! You have a birthday, a first step, a first day at school. Today you start learning the skills of a historian, and at the end of this journey you will build a little museum for your family!"']
      ],
      learn: ['<b>التاريخ</b> هو دراسة ما حدث في الماضي اعتمادًا على <b>الأدلّة</b>. والمؤرّخ يجمع الأدلّة، ويتأكّد منها، ثم يرتّبها ليفهم: ماذا حدث؟ ولماذا؟ وماذا نتعلّم؟',
              '<b>History</b> is the study of what happened in the past, based on <b>evidence</b>. A historian gathers evidence, checks it, then puts it in order to understand: What happened? Why? What can we learn?'],
      islam: ['قال الله تعالى في آخر سورة يوسف: ﴿لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ﴾ (يوسف: ١١١). أولو الألباب هم أصحاب العقول الذين يفكّرون؛ فالتاريخ عندنا ليس حكاياتٍ تُنسى، بل دروسٌ نعيشها.',
              'Allah says at the end of Surah Yusuf: "There is certainly a lesson in their stories for people of understanding" (Yusuf 12:111). People of understanding are those who think; so for us history is not stories to forget, but lessons to live by.'],
      src: ['يوسف: ١١١', 'Yusuf 12:111'],
      mission: ['جهّز «صندوق المستكشف»: علبة كرتون فارغة اكتب عليها اسمك و«متحف عائلتي». ثم اسأل أحد والديك: ما أقدم شيءٍ في بيتنا؟ وما قصّته؟ اكتب الجواب في ثلاثة أسطر وضعه في الصندوق.',
                'Make your "Explorer Box": an empty cardboard box with your name and "My Family Museum" written on it. Then ask a parent: What is the oldest thing in our home, and what is its story? Write the answer in three lines and put it in the box.'],
      q: ['لماذا قصّ الله علينا قصص الأمم السابقة؟', 'Why did Allah tell us the stories of earlier nations?'],
      o: [['لنحفظ أسماءهم فقط', 'Only so we memorise their names', 0], ['لنأخذ منها العبرة والدرس', 'So we take lessons from them', 1], ['لنقضي الوقت', 'To pass the time', 0]],
      fb: ['أحسنت! ﴿لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ﴾؛ المؤرّخ المسلم يبحث دائمًا عن الدرس.', 'Well done! "There is certainly a lesson in their stories." A Muslim historian always looks for the lesson.'],
      podcast: {
        title: ['المؤرّخ محقّقٌ صغير', 'The historian is a detective'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الخالة نور، مرشدة المتحف، في بودكاست مستكشف التاريخ.', 'Assalamu alaikum, friends! This is Aunt Noor, the museum guide, on the History Explorer podcast.'],
          ['k', 'وعليكم السلام يا خالة! أنا يوسف، وعندي سؤالٌ كبير. ما هو التاريخ أصلًا؟', 'Wa alaikum assalam, Aunt Noor! I am Yusuf, and I have a big question. What is history, anyway?'],
          ['h', 'التاريخ هو قصّة ما حدث للناس قبلنا. لكن ليس أيّ قصّة؛ إنها قصّةٌ لها أدلّة.', 'History is the story of what happened to people before us. But not just any story. It is a story with evidence.'],
          ['k', 'أدلّة؟ مثل المحقّقين في الألغاز؟', 'Evidence? Like detectives in mystery books?'],
          ['h', 'تمامًا! المؤرّخ يجد رسالةً قديمة، أو عملة، أو صورة، ويسأل: ماذا تخبرني هذه عن الماضي؟', 'Exactly! A historian finds an old letter, or a coin, or a photo, and asks: what does this tell me about the past?'],
          ['k', 'لكن لماذا نهتمّ بالماضي؟ لقد انتهى!', 'But why should we care about the past? It is over!'],
          ['h', 'سؤالٌ جميل. تخيّل أنك تعثّرتَ بحجرٍ في الطريق. في المرّة القادمة ماذا تفعل؟', 'Good question. Imagine you trip over a stone on the path. What do you do next time?'],
          ['k', 'أنتبه للحجر وأمشي من جانبه طبعًا.', 'I watch out for the stone and walk around it, of course.'],
          ['h', 'هذا هو التاريخ! نتعلّم من الماضي حتى لا نتعثّر مرّةً أخرى. ولهذا قصّ الله علينا قصص الأنبياء والأمم.', 'That is history! We learn from the past so we do not trip again. That is why Allah told us the stories of the prophets and nations.'],
          ['k', 'وفي سورة يوسف، سورتي أنا، آيةٌ عن هذا، صحيح؟', 'And in Surah Yusuf, my own surah, there is a verse about this, right?'],
          ['h', 'صحيح. يقول الله تعالى: لقد كان في قصصهم عبرةٌ لأولي الألباب. يعني درسًا لمن يفكّر.', 'Right. Allah says: There is certainly a lesson in their stories for people of understanding. A lesson for those who think.'],
          ['k', 'إذن أريد أن أكون من الذين يفكّرون! من أين أبدأ؟', 'Then I want to be one of the people who think! Where do I start?'],
          ['h', 'مهمّة اليوم: جهّز علبة كرتون واكتب عليها متحف عائلتي، واسأل أهلك عن أقدم شيءٍ في البيت.', 'Today\'s mission: get a cardboard box, write My Family Museum on it, and ask your family about the oldest thing in your home.'],
          ['k', 'سأفعل الآن! مع السلامة يا خالة نور.', 'I will do it right now! Goodbye, Aunt Noor.'],
          ['h', 'مع السلامة يا مستكشفين، نلقاكم في الحلقة القادمة إن شاء الله.', 'Goodbye, explorers. See you in the next episode, in sha Allah.']
        ]
      }
    },
    /* ── 2 ── */
    {
      id: 'timeline', icon: '📅', tag: 'tools',
      t: ['الخطّ الزمني والتقويم', 'Timelines and calendars'],
      sub: ['الهجري والميلادي', 'Hijri and Gregorian dates'],
      pg: [
        ['🧵📏', 'في اليوم التالي مدّت الخالة نور حبلًا طويلًا على أرض المتحف، وعلّقت عليه بطاقات. قالت: «هذا <b>خطٌّ زمني</b>. نضع الأقدم في البداية، والأحدث في النهاية.»',
                 'The next day, Aunt Noor stretched a long string across the museum floor and pegged cards onto it. "This is a <b>timeline</b>," she said. "The oldest things go at the start, the newest at the end."'],
        ['🔢❓', 'سأل يوسف: «لكن كيف نعرف ترتيب الأحداث؟» قالت: «بالتاريخ المكتوب: اليوم والشهر والسنة. والسنة تحتاج نقطة بداية نعدّ منها، مثل خطّ البداية في السباق.»',
                 'Yusuf asked, "But how do we know the order?" She said, "With dates: the day, the month and the year. And years need a starting point to count from, like the start line of a race."'],
        ['🌙🕋', '«نحن المسلمين نعدّ السنين من <b>هجرة</b> النبيّ ﷺ من مكة إلى المدينة. وهذا اختاره الصحابة في زمن الخليفة عمر بن الخطاب رضي الله عنه. ويُسمّى <b>التقويم الهجري</b>، وشهوره تبدأ برؤية الهلال.»',
                 '"We Muslims count the years from the <b>Hijra</b>, the Prophet\'s ﷺ migration from Makkah to Madinah. The Companions chose this in the time of the caliph Umar ibn al-Khattab, may Allah be pleased with him. It is called the <b>Hijri calendar</b>, and its months begin with the new crescent moon."'],
        ['☀️🗓️', '«وهناك <b>التقويم الميلادي</b> الذي يعتمد على الشمس، وهو المكتوب على أغلب الجدران والهواتف. السنة الهجرية الأولى بدأت سنة ٦٢٢ ميلادية.»',
                 '"There is also the <b>Gregorian calendar</b>, based on the sun, which is on most wall calendars and phones. The first Hijri year began in 622 CE."'],
        ['🤯🌙', 'مفاجأة! السنة القمرية أقصر من الشمسية بنحو ١١ يومًا. لذلك يأتي رمضان كلّ عام أبكر بنحو ١١ يومًا في التقويم الميلادي، فيمرّ على الصيف والشتاء خلال سنوات العمر.',
                 'Surprise! A lunar year is about 11 days shorter than a solar year. So Ramadan comes about 11 days earlier each year on the Gregorian calendar, and over the years it moves through summer and winter.'],
        ['👦📸', 'قالت الخالة نور: «والآن دورك. سترسم خطّ حياتك الزمني، من يوم ولادتك إلى اليوم، بالتاريخين معًا!»',
                 'Aunt Noor said, "Now it is your turn. You will draw the timeline of your own life, from the day you were born until today, in both calendars!"']
      ],
      learn: ['<b>الخطّ الزمني</b> يرتّب الأحداث من الأقدم إلى الأحدث، فنرى ما جاء قبل وما جاء بعد. والتاريخ <b>الهجري</b> قمريّ يبدأ من الهجرة، و<b>الميلادي</b> شمسيّ، والمؤرّخ الجيّد يعرف قراءة الاثنين.',
              'A <b>timeline</b> puts events in order from oldest to newest, so we see what came before and after. The <b>Hijri</b> calendar is lunar and starts from the Hijra; the <b>Gregorian</b> one is solar. A good historian can read both.'],
      islam: ['قال الله تعالى: ﴿هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ نُورًا وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ﴾ (يونس: ٥). فالقمر والشمس ساعةُ السماء التي نعدّ بها أيامنا وسنيننا.',
              'Allah says: "He is the One who made the sun a radiance and the moon a light, and determined its phases so that you may know the number of years and how to count time" (Yunus 10:5). The sun and moon are the sky\'s clock for counting our days and years.'],
      src: ['يونس: ٥', 'Yunus 10:5'],
      mission: ['ارسم خطّ حياتك الزمني على شريطٍ طويل من الورق: ٥ أحداث على الأقلّ (ولادتك، أوّل خطوة، أوّل يوم في المدرسة...). اسأل والديك عن سنة كلّ حدث بالهجري والميلادي، والصق صورةً لكلّ حدث إن وُجدت. ضعه في صندوق المستكشف.',
                'Draw your life timeline on a long strip of paper: at least 5 events (your birth, first step, first day at school...). Ask your parents the year of each event in Hijri and Gregorian, and stick on a photo for each one if you have it. Put it in your Explorer Box.'],
      q: ['لماذا يأتي رمضان كلّ عام في وقتٍ أبكر من الأشهر الميلادية؟', 'Why does Ramadan come earlier each year in the Gregorian calendar?'],
      o: [['لأن الناس يغيّرون موعده', 'Because people change its date', 0], ['لأن الشمس تتأخّر', 'Because the sun is late', 0], ['لأن السنة القمرية أقصر بنحو ١١ يومًا', 'Because the lunar year is about 11 days shorter', 1]],
      fb: ['ممتاز! السنة الهجرية تتبع القمر، فهي أقصر بنحو ١١ يومًا، ولذلك يتنقّل رمضان بين الفصول.', 'Excellent! The Hijri year follows the moon, so it is about 11 days shorter, which is why Ramadan moves through the seasons.'],
      podcast: {
        title: ['حبلُ الزمن', 'The string of time'],
        lines: [
          ['h', 'أهلًا بكم من جديد في بودكاست مستكشف التاريخ! ومعي صديقي يوسف.', 'Welcome back to the History Explorer podcast! My friend Yusuf is here with me.'],
          ['k', 'أهلًا يا خالة! اليوم رأيتُ حبلًا عليه بطاقات. ما قصّته؟', 'Hello, Aunt Noor! Today I saw a string with cards on it. What is that about?'],
          ['h', 'هذا خطٌّ زمني. نرتّب عليه الأحداث كما يقف الناس في طابور: الأقدم في الأمام.', 'That is a timeline. We line up events on it like people in a queue: the oldest at the front.'],
          ['k', 'وكيف نعرف من الأقدم؟', 'And how do we know which is oldest?'],
          ['h', 'بالتاريخ المكتوب. والسنين تحتاج نقطة بداية نعدّ منها.', 'By the date. And years need a starting point to count from.'],
          ['k', 'ونحن المسلمين من أين نعدّ؟', 'Where do we Muslims count from?'],
          ['h', 'من هجرة النبيّ صلى الله عليه وسلم إلى المدينة. اختارها الصحابة في زمن عمر بن الخطاب.', 'From the Prophet\'s migration to Madinah, peace be upon him. The Companions chose it in the time of Umar ibn al-Khattab.'],
          ['k', 'لكن هاتف أبي يكتب تاريخًا آخر!', 'But my dad\'s phone shows a different date!'],
          ['h', 'هذا التقويم الميلادي، وهو يتبع الشمس. أمّا الهجري فيتبع القمر، وسنته أقصر بنحو أحد عشر يومًا.', 'That is the Gregorian calendar, which follows the sun. The Hijri one follows the moon, and its year is about eleven days shorter.'],
          ['k', 'آه! لهذا جاء رمضان هذه السنة أبكر من السنة الماضية!', 'Oh! That is why Ramadan came earlier this year than last year!'],
          ['h', 'أحسنت يا مؤرّخ! وفي القرآن أن الله جعل القمر منازل لنعلم عدد السنين والحساب.', 'Well done, historian! The Quran tells us Allah gave the moon its phases so we can know the number of years and count time.'],
          ['k', 'هل أستطيع أن أصنع خطًّا زمنيًّا لحياتي أنا؟', 'Can I make a timeline of my own life?'],
          ['h', 'هذه بالضبط مهمّة اليوم: ارسم خطّ حياتك بخمسة أحداث، واكتب سنة كلّ حدثٍ بالهجري والميلادي.', 'That is exactly today\'s mission: draw your life timeline with five events, and write the year of each one in Hijri and Gregorian.'],
          ['k', 'سأبدأ بيوم ولادتي! إلى اللقاء يا خالة.', 'I will start with my birthday! See you, Aunt Noor.'],
          ['h', 'إلى اللقاء يا أصدقاء، في أمان الله.', 'Goodbye, friends. May Allah keep you safe.']
        ]
      }
    },
    /* ── 3 ── */
    {
      id: 'sources', icon: '📰', tag: 'think',
      t: ['المصادر: الدليل والحكاية', 'Sources: evidence or story?'],
      sub: ['تبيّنوا قبل أن تصدّقوا', 'Check before you believe'],
      pg: [
        ['🗣️🐘', 'جاء صديق يوسف إلى الصفّ وقال: «سمعتُ أن فيلًا هرب من حديقة الحيوان وهو الآن في السوق!» ركض الأولاد إلى النافذة… ولم يكن هناك فيل.',
                 'Yusuf\'s friend came to class and said, "I heard an elephant escaped from the zoo and it is in the market right now!" The children ran to the window… and there was no elephant.'],
        ['🧕🤔', 'حكى يوسف القصّة للخالة نور فقالت: «هذا درسٌ مهمّ للمؤرّخ. هناك فرقٌ بين <b>مصدرٍ أصلي</b> وبين <b>حكايةٍ منقولة</b> انتقلت من فمٍ إلى فم.»',
                 'Yusuf told Aunt Noor the story. She said, "That is an important lesson for a historian. There is a difference between a <b>primary source</b> and a <b>story passed on</b> from mouth to mouth."'],
        ['✉️📷🪙', '«المصدر الأصلي شيءٌ صُنع أو كُتب <b>وقت الحدث</b> نفسه، أو كتبه شخصٌ رآه بعينه: رسالة، أو مذكّرات، أو صورة، أو عملة، أو وثيقة.»',
                 '"A primary source is something made or written <b>at the time</b> of the event, or written by someone who saw it with their own eyes: a letter, a diary, a photo, a coin, a document."'],
        ['📚🔁', '«أمّا المصدر الثانوي فكتابٌ أو مقال كُتب <b>بعد</b> ذلك بزمن، يشرح ما حدث. وهو مفيد، لكن علينا أن نسأل: من أين جاء كاتبه بمعلوماته؟»',
                 '"A secondary source is a book or article written <b>later</b>, explaining what happened. It is useful, but we must ask: where did the writer get the information?"'],
        ['✅📋', 'أعطته الخالة نور ورقةً عليها <b>قائمة فحص الخبر</b>: من قاله؟ هل كان حاضرًا؟ متى كُتب؟ هل هو معروف بالصدق؟ هل يقول مصدرٌ آخر الشيء نفسه؟ هل هو معقول؟',
                 'Aunt Noor gave him a sheet with a <b>source-check checklist</b>: Who said it? Were they there? When was it written? Are they known to be truthful? Does another source agree? Does it make sense?'],
        ['🌙🛡️', 'قالت: «وقبل أن يعلّمنا أيّ أستاذ هذه القائمة، علّمنا القرآن أن نتبيّن من الأخبار قبل أن نصدّقها وننشرها.»',
                 'She said, "Long before any teacher made this checklist, the Quran taught us to verify news before we believe it and pass it on."']
      ],
      learn: ['<b>المصدر الأصلي</b>: ما كُتب أو صُنع وقت الحدث أو من شاهدٍ رآه (رسالة، صورة، عملة). <b>المصدر الثانوي</b>: ما كُتب لاحقًا ليشرح. والمؤرّخ يفحص كلّ خبرٍ قبل أن يصدّقه.',
              'A <b>primary source</b> was written or made at the time, or by an eyewitness (a letter, a photo, a coin). A <b>secondary source</b> was written later to explain. A historian checks every report before believing it.'],
      islam: ['قال الله تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا﴾ (الحجرات: ٦). أي: إذا جاءكم خبرٌ ممّن لا يُوثق به فتأكّدوا منه قبل أن تبنوا عليه شيئًا.',
              'Allah says: "O you who believe, if someone untrustworthy brings you news, verify it" (al-Hujurat 49:6). That is: when news comes from someone you cannot trust, check it before you act on it.'],
      src: ['الحجرات: ٦', 'Al-Hujurat 49:6'],
      mission: ['ابحث في البيت عن <b>مصدرٍ أصلي</b> واحد (صورة قديمة، شهادة، بطاقة تهنئة، تذكرة سفر) بإذن والديك. طبّق عليه قائمة فحص الخبر من ورقة العمل: من صنعه؟ متى؟ ماذا يخبرنا؟ ثم اختر خبرًا سمعته هذا الأسبوع وافحصه بالقائمة نفسها.',
                'With your parents\' permission, find one <b>primary source</b> at home (an old photo, a certificate, a greeting card, a travel ticket). Use the source-check checklist from the worksheet: Who made it? When? What does it tell us? Then pick a piece of news you heard this week and check it with the same list.'],
      q: ['أيّ هذه الأشياء مصدرٌ أصلي عن طفولة جدّك؟', 'Which of these is a primary source about your grandfather\'s childhood?'],
      o: [['قصّةٌ سمعها جارك من صديقه', 'A story your neighbour heard from a friend', 0], ['صورةٌ التُقطت لجدّك وهو صغير', 'A photo taken of your grandfather as a boy', 1], ['فيلمٌ كرتونيّ عن الماضي', 'A cartoon about the past', 0]],
      fb: ['صحيح! الصورة صُنعت وقت الحدث نفسه، فهي دليلٌ أصلي.', 'Correct! The photo was made at the time itself, so it is primary evidence.'],
      podcast: {
        title: ['الفيل الذي لم يهرب', 'The elephant that never escaped'],
        lines: [
          ['h', 'السلام عليكم يا مستكشفين! معكم الخالة نور، ويوسف عنده اليوم حكايةٌ مضحكة.', 'Assalamu alaikum, explorers! Aunt Noor here, and Yusuf has a funny story today.'],
          ['k', 'نعم! صديقي قال إن فيلًا هرب إلى السوق، فركضنا كلّنا إلى النافذة ولم نجد شيئًا!', 'Yes! My friend said an elephant escaped to the market, so we all ran to the window and found nothing!'],
          ['h', 'وممّن سمع صديقك هذا الخبر؟', 'And who did your friend hear that from?'],
          ['k', 'قال إن ابن عمّه سمعه من شخصٍ في الحافلة.', 'He said his cousin heard it from someone on the bus.'],
          ['h', 'إذن لم يرَ أحدٌ منهم الفيل بعينه. هذه حكايةٌ منقولة، وليست مصدرًا أصليًّا.', 'So none of them saw the elephant with their own eyes. That is a passed-on story, not a primary source.'],
          ['k', 'وما هو المصدر الأصلي؟', 'So what is a primary source?'],
          ['h', 'شيءٌ صُنع وقت الحدث، أو كتبه من رآه. مثل صورة، أو رسالة، أو مذكّرات.', 'Something made at the time, or written by someone who saw it. Like a photo, a letter or a diary.'],
          ['k', 'يعني لو التقط أحدهم صورةً للفيل في السوق، لصارت دليلًا؟', 'So if someone took a photo of the elephant in the market, that would be evidence?'],
          ['h', 'بالضبط! ومع ذلك نتأكّد أن الصورة حقيقية وليست معدّلة.', 'Exactly! And even then, we check that the photo is real and not edited.'],
          ['k', 'هل في ديننا شيءٌ عن هذا؟', 'Does our deen say anything about this?'],
          ['h', 'نعم، يقول الله تعالى: إن جاءكم فاسقٌ بنبإٍ فتبيّنوا. أي تأكّدوا قبل أن تصدّقوا وتنشروا.', 'Yes. Allah says: if someone untrustworthy brings you news, verify it. Check before you believe and before you share.'],
          ['k', 'سأستعمل قائمة الفحص قبل أن أرسل أيّ خبرٍ لأصدقائي.', 'I will use the checklist before I send any news to my friends.'],
          ['h', 'رائع. مهمّة اليوم: ابحث في البيت عن مصدرٍ أصلي واحد، وافحصه بأسئلة القائمة.', 'Wonderful. Today\'s mission: find one primary source at home, and check it with the checklist questions.'],
          ['k', 'أظنّ أن عند أمّي بطاقة عرسها القديمة! مع السلامة.', 'I think my mum has her old wedding card! Goodbye.'],
          ['h', 'مع السلامة يا أصدقاء، وتبيّنوا دائمًا.', 'Goodbye, friends, and always check first.']
        ]
      }
    },
    /* ── 4 ── */
    {
      id: 'isnad', icon: '🔗', tag: 'think',
      t: ['سلسلة الرواة: الإسناد', 'The chain of narrators: isnad'],
      sub: ['كيف حفظ علماؤنا الأخبار', 'How our scholars protected reports'],
      pg: [
        ['🔗👥', 'لعب يوسف مع أصدقائه لعبة «الهاتف المكسور»: همس الأوّل جملةً في أذن الثاني، وهكذا حتى العاشر. كانت الجملة «القطّ نام على السجّادة»… وصارت في الآخر «البطّ قام على الوسادة»!',
                 'Yusuf played "broken telephone" with his friends: the first whispered a sentence to the second, and so on to the tenth. It started as "The cat slept on the rug"… and ended as "The duck jumped on the mug"!'],
        ['🧕💡', 'قالت الخالة نور: «الكلام إذا انتقل بلا انتباه يتغيّر. ولهذا ابتكر علماء المسلمين طريقةً عظيمة لحفظ حديث النبيّ ﷺ اسمها <b>الإسناد</b>.»',
                 'Aunt Noor said, "When words pass along carelessly, they change. That is why Muslim scholars developed a great method to protect the Prophet\'s ﷺ sayings. It is called <b>isnad</b>."'],
        ['📜⛓️', '«الإسناد هو <b>سلسلة الرواة</b>: حدّثني فلان، قال حدّثني فلان، عن فلان، عن النبيّ ﷺ. فنعرف بالضبط من نقل الخبر، واحدًا بعد واحد، حتى نصل إلى أوّله.»',
                 '"Isnad is the <b>chain of narrators</b>: So-and-so told me, that So-and-so told him, from So-and-so, from the Prophet ﷺ. So we know exactly who passed the report on, one by one, right back to the start."'],
        ['🔍📚', '«ثم سأل العلماء عن كلّ راوٍ في السلسلة: هل كان صادقًا؟ هل كان حافظًا جيّدًا لا ينسى؟ هل لقي فعلًا الذي روى عنه؟ وكتبوا في ذلك كتبًا كثيرة عن الرواة وأحوالهم.»',
                 '"Then the scholars asked about each narrator in the chain: Were they truthful? Did they have a strong memory? Did they really meet the person they reported from? They wrote many books about the narrators and their lives."'],
        ['🐪🌍', '«ورحل بعضهم مسافاتٍ طويلة ليسمع الحديث بنفسه من راويه، مثل الإمام البخاري الذي سافر إلى مدنٍ كثيرة، واختار لكتابه «الصحيح» ما اطمأنّ إلى صحّته بعد فحصٍ دقيق.»',
                 '"Some travelled long distances to hear a hadith directly from its narrator, like Imam al-Bukhari, who journeyed to many cities and chose for his book, the Sahih, only what he was confident was authentic after careful checking."'],
        ['👦✨', 'قال يوسف بدهشة: «هذا أدقّ من لعبتنا بكثير!» قالت: «نعم. وأنت أيضًا تستطيع أن تصنع سلسلة رواةٍ لخبرٍ في عائلتك.»',
                 'Yusuf said in amazement, "That is much more careful than our game!" She said, "Yes. And you can make a chain of narrators for a story in your own family too."']
      ],
      learn: ['<b>الإسناد</b> هو سلسلة الأشخاص الذين نقلوا الخبر واحدًا عن واحد. فحصه علماء الحديث بسؤالين كبيرين: هل الراوي <b>صادق</b>؟ وهل هو <b>ضابطٌ</b> يحفظ جيّدًا؟ وهل اتّصلت السلسلة بلا انقطاع؟',
              '<b>Isnad</b> is the chain of people who passed a report on, one from another. Hadith scholars checked it with big questions: Is the narrator <b>truthful</b>? Is their <b>memory</b> precise? Is the chain connected with no gap?'],
      islam: ['قال الإمام عبد الله بن المبارك رحمه الله: «الإسنادُ من الدين، ولولا الإسنادُ لقال مَن شاء ما شاء». فبالإسناد لا يستطيع أحدٌ أن ينسب للنبيّ ﷺ كلامًا لم يقله.',
              'Imam Abdullah ibn al-Mubarak, may Allah have mercy on him, said: "The isnad is part of the religion. Were it not for the isnad, anyone could say whatever they wished." Because of the isnad, no one can claim the Prophet ﷺ said something he did not say.'],
      src: ['مقدّمة صحيح مسلم (قول عبد الله بن المبارك)', 'Introduction to Sahih Muslim (saying of Abdullah ibn al-Mubarak)'],
      mission: ['اختر قصّةً تُحكى في عائلتك (مثل: كيف التقى جدّاك، أو من أين جاء اسمك). اسأل: من حكاها لك؟ وممّن سمعها هو؟ ارسم «سلسلة الرواة» حلقاتٍ من ورق، في كلّ حلقة اسم شخص، حتى تصل إلى أوّل من رآها. ضعها في الصندوق.',
                'Pick a story told in your family (like how your grandparents met, or where your name came from). Ask: Who told you? Who did they hear it from? Draw a "chain of narrators" with paper rings, one name in each ring, back to the first person who saw it. Put it in the box.'],
      q: ['ما الذي فحصه علماء الحديث في كلّ راوٍ؟', 'What did hadith scholars check about each narrator?'],
      o: [['لون ثيابه', 'The colour of his clothes', 0], ['صدقه وقوّة حفظه', 'Their truthfulness and memory', 1], ['عدد أولاده', 'How many children they had', 0]],
      fb: ['أحسنت! الصدق وقوّة الحفظ واتّصال السلسلة، هذه أسس الإسناد.', 'Well done! Truthfulness, strong memory and an unbroken chain: these are the foundations of isnad.'],
      podcast: {
        title: ['لعبة الهاتف المكسور', 'The broken telephone game'],
        lines: [
          ['h', 'أهلًا بكم في حلقةٍ جديدة! يوسف، سمعتُ أنكم لعبتم لعبةً طريفة.', 'Welcome to a new episode! Yusuf, I hear you played a funny game.'],
          ['k', 'نعم، الهاتف المكسور! بدأت الجملة عن قطٍّ نائم، وانتهت عن بطٍّ يقفز!', 'Yes, broken telephone! The sentence started with a sleeping cat and ended with a jumping duck!'],
          ['h', 'لأن كلّ واحدٍ نقل الكلام بسرعة وبلا انتباه. والآن تخيّل أنه كلام النبيّ صلى الله عليه وسلم.', 'Because each person passed it on quickly and carelessly. Now imagine if it were the words of the Prophet, peace be upon him.'],
          ['k', 'هذا خطير! كيف حفظه المسلمون إذن؟', 'That would be serious! So how did Muslims protect it?'],
          ['h', 'بطريقةٍ اسمها الإسناد. يعني أن نحفظ أسماء كلّ من نقل الحديث، واحدًا بعد واحد.', 'With a method called isnad. It means remembering the name of every person who passed the hadith on, one after another.'],
          ['k', 'مثل سلسلة؟ كلّ حلقةٍ فيها شخص؟', 'Like a chain? Each link is a person?'],
          ['h', 'تمامًا. ثم يسأل العلماء عن كلّ حلقة: هل هو صادق؟ هل يحفظ جيّدًا؟ هل قابل الذي روى عنه حقًّا؟', 'Exactly. Then scholars ask about each link: Is this person truthful? Do they remember well? Did they really meet the one they reported from?'],
          ['k', 'وإذا كانت حلقةٌ ضعيفة؟', 'And if one link is weak?'],
          ['h', 'يعرف العلماء أن الخبر يحتاج إلى حذر، ولا يقبلونه كما يقبلون الصحيح.', 'Then scholars know the report needs caution, and they do not accept it the way they accept an authentic one.'],
          ['k', 'سمعتُ أن الإمام البخاري سافر كثيرًا.', 'I heard Imam al-Bukhari travelled a lot.'],
          ['h', 'نعم، رحل إلى مدنٍ كثيرة ليسمع الحديث بنفسه، واختار لكتابه ما اطمأنّ إلى صحّته.', 'Yes. He travelled to many cities to hear hadith himself, and chose for his book only what he was confident was authentic.'],
          ['k', 'وقال عبد الله بن المبارك: لولا الإسناد لقال من شاء ما شاء.', 'And Abdullah ibn al-Mubarak said that without the isnad, anyone could say whatever they wished.'],
          ['h', 'أحسنت الحفظ! مهمّة اليوم: اصنع سلسلة رواةٍ من حلقات الورق لقصّةٍ في عائلتك.', 'Great memory! Today\'s mission: make a paper chain of narrators for a story in your family.'],
          ['k', 'سأبدأ بقصّة اسمي! إلى اللقاء.', 'I will start with the story of my name! See you.'],
          ['h', 'إلى اللقاء يا أصحاب السلاسل القويّة!', 'See you, makers of strong chains!']
        ]
      }
    },
    /* ── 5 ── */
    {
      id: 'good-questions', icon: '❓', tag: 'think',
      t: ['الأسئلة الجيدة وكشف الأساطير', 'Good questions and busting myths'],
      sub: ['من؟ متى؟ أين؟ لماذا؟ ومع ابن خلدون', 'Who, when, where, why, with Ibn Khaldun'],
      pg: [
        ['🖐️❓', 'رسمت الخالة نور يدًا على اللوح، وكتبت على أصابعها: <b>من؟ ماذا؟ متى؟ أين؟ لماذا؟</b> قالت: «هذه أصابع المؤرّخ الخمسة. كلّ خبرٍ نسأله بها.»',
                 'Aunt Noor drew a hand on the board and wrote on its fingers: <b>Who? What? When? Where? Why?</b> She said, "These are the historian\'s five fingers. We ask every report these questions."'],
        ['⛑️🐂', '«هل تعلم أن الصور المشهورة للفايكنغ بخوذاتٍ لها قرون ليست صحيحة؟ لم يجد الباحثون دليلًا على أنهم لبسوها في القتال. انتشرت الفكرة من ملابس المسرح قبل نحو ١٥٠ سنة فقط!»',
                 '"Did you know the famous pictures of Vikings in horned helmets are not accurate? Researchers have found no evidence they wore them in battle. The idea spread from theatre costumes only about 150 years ago!"'],
        ['🧱🚀', '«وهناك أسطورة أن سور الصين العظيم يُرى بالعين من الفضاء. لكن روّاد الفضاء قالوا إنهم لا يكادون يرونه بالعين المجرّدة؛ فهو طويلٌ جدًّا لكنه ضيّق.» هكذا يكشف المؤرّخ الأساطير: يسأل عن الدليل.',
                 '"There is also a myth that the Great Wall of China can be seen with the naked eye from space. But astronauts have said they can hardly see it without help; it is very long but narrow." This is how a historian busts myths: by asking for evidence.'],
        ['📘🧔', '«وكان من أعظم من علّمنا هذا عالمٌ مسلم اسمه <b>ابن خلدون</b>، وُلد في تونس سنة ٧٣٢ هـ (١٣٣٢م). كتب «المقدّمة»، وهي مدخلٌ لكتابه الكبير في التاريخ.»',
                 '"One of the greatest teachers of this was a Muslim scholar named <b>Ibn Khaldun</b>, born in Tunis in 732 AH (1332 CE). He wrote the <i>Muqaddimah</i>, the introduction to his big book of history."'],
        ['⚖️🧠', '«قال ابن خلدون إن المؤرّخ لا ينقل كلّ خبرٍ كما سمعه، بل يسأل: هل هذا ممكنٌ في الواقع؟ ولاحظ أن بعض الكتب القديمة ذكرت أعداد جيوشٍ مبالغًا فيها جدًّا لا تتّسع لها الأرض ولا الطعام. ورأى أن للتاريخ أسبابًا نبحث عنها، لا أحداثًا فقط.»',
                 '"Ibn Khaldun said a historian should not repeat every report as heard, but ask: Is this possible in real life? He noticed some old books gave army sizes so huge that no land or food supply could hold them. He taught that history has causes we should look for, not just events."'],
        ['👦🕵️', 'قال يوسف: «سأصير صائد أساطير!» قالت الخالة نور: «وأفضل مكانٍ تبدأ منه: الأسئلة التي ستطرحها على جدّك وجدّتك قريبًا.»',
                 'Yusuf said, "I am going to be a myth hunter!" Aunt Noor said, "And the best place to start is the questions you will soon ask your grandparents."']
      ],
      learn: ['المؤرّخ يسأل: <b>من؟ ماذا؟ متى؟ أين؟ لماذا؟</b> ثم يسأل سؤال ابن خلدون: <b>هل هذا معقولٌ وممكن؟</b> والأسطورة خبرٌ مشهور بلا دليل، نكشفها بطلب الدليل لا بالسخرية من الناس.',
              'A historian asks: <b>Who? What? When? Where? Why?</b> Then asks Ibn Khaldun\'s question: <b>Does this make sense, is it possible?</b> A myth is a popular claim with no evidence; we bust it by asking for proof, not by mocking people.'],
      islam: ['قال الله تعالى: ﴿قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ﴾ (البقرة: ١١١). فالقرآن يعلّمنا أن نطلب الدليل على كلّ دعوى. وابن خلدون رحمه الله مثالٌ لعالمٍ مسلم جعل التحقيق والعقل أساسًا لعلم التاريخ.',
              'Allah says: "Say: Bring your proof, if you are truthful" (al-Baqarah 2:111). The Quran teaches us to ask for proof of every claim. Ibn Khaldun, may Allah have mercy on him, is an example of a Muslim scholar who made checking and reasoning the foundation of history.'],
      src: ['البقرة: ١١١', 'Al-Baqarah 2:111'],
      mission: ['اكتب ٥ أسئلة جيّدة ستسألها لجدّك أو جدّتك في المحطّة القادمة: سؤالٌ يبدأ بـ«من»، وسؤالٌ بـ«متى»، وسؤالٌ بـ«أين»، وسؤالٌ بـ«ماذا»، وسؤالٌ بـ«لماذا». ثم اسأل أهلك عن «معلومةٍ مشهورة» سمعوها، وابحثوا معًا: هل عليها دليل؟',
                'Write 5 good questions to ask a grandparent in the next station: one starting with "Who", one with "When", one with "Where", one with "What", and one with "Why". Then ask your family about a "famous fact" they have heard, and look together: is there evidence for it?'],
      q: ['ما السؤال الذي أضافه ابن خلدون لكلّ خبر؟', 'What question did Ibn Khaldun add for every report?'],
      o: [['هل هذا الخبر ممتع؟', 'Is this report fun?', 0], ['هل هذا ممكنٌ في الواقع؟', 'Is this possible in real life?', 1], ['هل الكاتب مشهور؟', 'Is the writer famous?', 0]],
      fb: ['رائع! الخبر الذي لا يمكن أن يحدث في الواقع نتوقّف عنده ونبحث عن الدليل.', 'Great! When a report could not happen in real life, we stop and look for evidence.'],
      podcast: {
        title: ['صائد الأساطير', 'The myth hunter'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! اليوم نلعب لعبة صائد الأساطير. مستعدّ يا يوسف؟', 'Assalamu alaikum, friends! Today we play Myth Hunter. Ready, Yusuf?'],
          ['k', 'مستعدّ! ما الأسطورة الأولى؟', 'Ready! What is the first myth?'],
          ['h', 'يُقال إن الفايكنغ لبسوا خوذاتٍ بقرون. صحيح أم أسطورة؟', 'People say the Vikings wore helmets with horns. True or myth?'],
          ['k', 'رأيتها في الرسوم المتحرّكة كثيرًا، لكن… هل عليها دليل؟', 'I have seen it in cartoons a lot, but… is there any evidence?'],
          ['h', 'سؤالٌ ممتاز! لم يجد الباحثون دليلًا على ذلك. الفكرة جاءت من ملابس المسرح قبل نحو مئةٍ وخمسين سنة.', 'Excellent question! Researchers found no evidence for it. The idea came from theatre costumes about a hundred and fifty years ago.'],
          ['k', 'واو! إذن الشهرة ليست دليلًا.', 'Wow! So being famous is not the same as being proof.'],
          ['h', 'جملةٌ رائعة. وقد علّمنا عالمٌ مسلم كبير هذا قبل قرون، اسمه ابن خلدون.', 'Beautifully said. A great Muslim scholar taught this centuries ago. His name was Ibn Khaldun.'],
          ['k', 'من هو ابن خلدون؟', 'Who was Ibn Khaldun?'],
          ['h', 'عالمٌ وُلد في تونس، وكتب كتابًا مشهورًا اسمه المقدّمة. قال فيه إن المؤرّخ يسأل: هل هذا الخبر ممكنٌ في الواقع؟', 'A scholar born in Tunis who wrote a famous book called the Muqaddimah. In it he said a historian must ask: is this report possible in real life?'],
          ['k', 'وكيف يعرف ذلك؟', 'And how would he know?'],
          ['h', 'مثلًا، لاحظ أن بعض الكتب ذكرت جيوشًا ضخمةً جدًّا لا تكفيها أرضٌ ولا طعام. فقال: هذا مبالغة.', 'For example, he noticed some books described armies so huge that no land or food could support them. So he said: this is exaggeration.'],
          ['k', 'والقرآن يقول: هاتوا برهانكم إن كنتم صادقين!', 'And the Quran says: bring your proof, if you are truthful!'],
          ['h', 'أحسنت. مهمّة اليوم: اكتب خمسة أسئلة لجدّك، تبدأ بمن ومتى وأين وماذا ولماذا.', 'Well done. Today\'s mission: write five questions for your grandparent, starting with who, when, where, what and why.'],
          ['k', 'سأكتبها على أصابع يدٍ من ورق! مع السلامة.', 'I will write them on the fingers of a paper hand! Goodbye.'],
          ['h', 'مع السلامة يا صيّادي الأساطير.', 'Goodbye, myth hunters.']
        ]
      }
    },
    /* ── 6 ── */
    {
      id: 'maps-objects', icon: '🗺️', tag: 'tools',
      t: ['الخرائط والقطع الأثرية', 'Maps and museum objects'],
      sub: ['ماذا يخبرنا المكان والشيء؟', 'What places and things tell us'],
      pg: [
        ['🗺️🧭', 'فتحت الخالة نور خريطةً كبيرة. قالت: «المؤرّخ لا يسأل متى فقط، بل <b>أين</b> أيضًا. انظر: هذا <b>مفتاح الخريطة</b> يشرح الرموز، وهذه <b>البوصلة</b> تشير إلى الشمال، وهذا <b>المقياس</b> يخبرنا كم تساوي المسافة.»',
                 'Aunt Noor unrolled a big map. "A historian asks not only when, but also <b>where</b>. Look: this <b>key</b> explains the symbols, this <b>compass</b> points north, and this <b>scale</b> tells us how far the distances really are."'],
        ['🌍✍️', '«ومن علماء المسلمين في الخرائط <b>الإدريسي</b>، الذي رسم خريطةً كبيرة للعالم المعروف في زمنه، وكتب معها كتابًا يصف البلاد والطرق، سنة ٥٤٨ هـ (١١٥٤م) تقريبًا.»',
                 '"Among Muslim map-makers was <b>al-Idrisi</b>, who drew a large map of the world known in his time and wrote a book describing its lands and routes, around 548 AH (1154 CE)."'],
        ['🏺🔎', 'ثم وقفا أمام جرّةٍ من فخّار. قالت: «هذه <b>قطعةٌ أثرية</b>: شيءٌ صنعه الناس واستعملوه قديمًا. لا تتكلّم، لكنها تخبرنا: ممّ صُنعت؟ كيف استُعملت؟ ماذا كان الناس يأكلون ويشربون؟»',
                 'Then they stopped in front of a clay jar. "This is an <b>artefact</b>: something people made and used long ago. It cannot speak, but it tells us things: What is it made of? How was it used? What did people eat and drink?"'],
        ['📜🧪', '«أحيانًا يستعمل العلماء أدواتٍ علمية لتقدير عمر القطع. مثلًا، فحص العلماء أوراقًا قديمة من مصحفٍ محفوظ في جامعة برمنغهام، فقدّروا أن جلدها يعود إلى ما بين سنة ٥٦٨ و٦٤٥ ميلادية تقريبًا، أي إلى زمنٍ قريب جدًّا من عهد النبوّة.»',
                 '"Sometimes scientists use special tests to estimate an object\'s age. For example, scientists tested old pages of a Quran manuscript kept at the University of Birmingham and estimated that its parchment dates from roughly 568 to 645 CE, very close to the time of the Prophet ﷺ."'],
        ['🏷️🖼️', '«وفي المتحف نضع بجانب كلّ قطعة <b>بطاقة</b>: اسمها، وعمرها التقريبي، ومن أين جاءت، وماذا تحكي. والبطاقة الجيّدة قصيرة وصادقة؛ وإن لم نعرف شيئًا كتبنا: غير معروف.»',
                 '"In a museum, each object has a <b>label</b>: its name, roughly how old it is, where it came from, and what it tells us. A good label is short and honest; if we do not know something, we write: unknown."'],
        ['👦🧓', 'قال يوسف: «في بيت جدّتي مفتاحٌ حديديّ قديم كبير!» قالت الخالة نور: «إذن عندك قطعةٌ أثرية تنتظر بطاقتها.»',
                 'Yusuf said, "At my grandmother\'s house there is a big old iron key!" Aunt Noor said, "Then you have an artefact waiting for its label."']
      ],
      learn: ['<b>الخريطة</b> تجيب عن سؤال «أين؟» بمفتاحها وبوصلتها ومقياسها. و<b>القطعة الأثرية</b> شيءٌ صنعه الناس واستعملوه، نقرؤها بأسئلة: ممّ صُنعت؟ كيف استُعملت؟ كم عمرها؟ ماذا تخبرنا عن حياة أصحابها؟',
              'A <b>map</b> answers "Where?" using its key, compass and scale. An <b>artefact</b> is something people made and used; we read it with questions: What is it made of? How was it used? How old is it? What does it tell us about its owners\' lives?'],
      islam: ['قال الله تعالى: ﴿قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ﴾ (العنكبوت: ٢٠). فالسير في الأرض والنظر في آثارها عبادةُ تفكّر؛ وقد سار علماؤنا كالإدريسي يصفون البلاد ويرسمونها.',
              'Allah says: "Say: Travel through the land and see how He began creation" (al-Ankabut 29:20). Travelling and looking at the traces on the earth is a form of reflection; our scholars like al-Idrisi travelled, described lands and mapped them.'],
      src: ['العنكبوت: ٢٠', 'Al-Ankabut 29:20'],
      mission: ['١) ارسم خريطةً لبيتك أو حيّك فيها مفتاحٌ للرموز وسهمٌ للشمال، وضع نجمةً على مكانٍ مهمّ في قصّة عائلتك. ٢) اختر قطعةً قديمة في البيت (بإذن الأهل)، واملأ لها <b>بطاقة قطعة</b> من ورقة العمل: اسمها، صاحبها، عمرها التقريبي، من أين جاءت، ماذا تحكي.',
                '1) Draw a map of your home or neighbourhood with a key for the symbols and an arrow for north, and put a star on a place that matters in your family\'s story. 2) Choose an old object at home (with permission) and fill in an <b>object label card</b> from the worksheet: name, owner, about how old, where it came from, what it tells us.'],
      q: ['ماذا يفعل المؤرّخ إذا لم يعرف عمر القطعة؟', 'What does a historian do if they do not know an object\'s age?'],
      o: [['يخترع رقمًا جميلًا', 'Makes up a nice number', 0], ['يرمي القطعة', 'Throws the object away', 0], ['يكتب بصدق: غير معروف، ويواصل البحث', 'Honestly writes "unknown" and keeps searching', 1]],
      fb: ['أحسنت! الصدق أهمّ من الإجابة الكاملة. «غير معروف» كلمةٌ شجاعة.', 'Well done! Honesty matters more than a complete answer. "Unknown" is a brave word.'],
      podcast: {
        title: ['المفتاح الحديدي', 'The iron key'],
        lines: [
          ['h', 'مرحبًا بكم في المتحف مرّةً أخرى! يوسف، ماذا أحضرت اليوم؟', 'Welcome back to the museum! Yusuf, what did you bring today?'],
          ['k', 'أحضرتُ صورة مفتاحٍ حديديّ كبير من بيت جدّتي. ثقيلٌ جدًّا!', 'I brought a photo of a big iron key from my grandmother\'s house. It is really heavy!'],
          ['h', 'رائع! هذه قطعةٌ أثرية. لنقرأها معًا. ممّ صُنعت؟', 'Wonderful! That is an artefact. Let us read it together. What is it made of?'],
          ['k', 'من الحديد، وعليه صدأ قليل.', 'Iron, with a little rust on it.'],
          ['h', 'والصدأ يخبرنا أنه قديم ومرّ عليه زمن. وحجمه الكبير؟', 'The rust tells us it is old and has been around a long time. And its big size?'],
          ['k', 'ربما كان لبابٍ كبير، باب بيتٍ قديم!', 'Maybe it was for a big door, the door of an old house!'],
          ['h', 'فكرةٌ ذكية، لكن تذكّر: نكتب ربما حتى نتأكّد. من نسأل؟', 'Smart idea, but remember: we write maybe until we are sure. Who should we ask?'],
          ['k', 'جدّتي طبعًا! هي صاحبة المفتاح.', 'My grandmother, of course! It is her key.'],
          ['h', 'ممتاز. والآن سؤال أين؟ هل تعرف أين كان ذلك البيت القديم؟', 'Excellent. Now the where question. Do you know where that old house was?'],
          ['k', 'لا. هل أحتاج خريطة؟', 'No. Do I need a map?'],
          ['h', 'نعم! الخريطة لها مفتاحٌ للرموز وسهمٌ للشمال. وقد رسم الإدريسي قديمًا خريطةً كبيرة للعالم المعروف في زمنه.', 'Yes! A map has a key for symbols and an arrow for north. Long ago, al-Idrisi drew a big map of the world known in his time.'],
          ['k', 'والقرآن يقول: سيروا في الأرض فانظروا.', 'And the Quran says: travel through the land and see.'],
          ['h', 'أحسنت. مهمّة اليوم: ارسم خريطة حيّك، واملأ بطاقةً لقطعةٍ قديمة في بيتكم.', 'Well done. Today\'s mission: draw a map of your neighbourhood, and fill in a label card for an old object in your home.'],
          ['k', 'سأكتب بطاقة المفتاح الليلة! إلى اللقاء.', 'I will write the key\'s label tonight! See you.'],
          ['h', 'إلى اللقاء يا أمناء المتاحف الصغار.', 'See you, little museum curators.']
        ]
      }
    },
    /* ── 7 ── */
    {
      id: 'oral-history', icon: '👵', tag: 'family',
      t: ['مقابلة الأجداد', 'Interviewing grandparents'],
      sub: ['التاريخ الشفوي وتاريخ عائلتي', 'Oral history and my family story'],
      pg: [
        ['📞👵', 'جلس يوسف بجانب جدّته وفي يده ورقة الأسئلة الخمسة. قالت الخالة نور قبلها: «هذا اسمه <b>التاريخ الشفوي</b>: أن نسمع الماضي من أفواه الذين عاشوه.»',
                 'Yusuf sat beside his grandmother with his five-question sheet in hand. Aunt Noor had told him, "This is called <b>oral history</b>: hearing the past from the people who lived it."'],
        ['🙂🤝', 'بدأ بالسلام وقبّل يد جدّته، ثم قال: «جدّتي، هل تسمحين أن أكتب ما تقولين لمتحف العائلة؟» ابتسمت وقالت: «بكلّ سرور يا حبيبي.» <b>الاستئذان</b> أوّل مهارة في المقابلة.',
                 'He began with salam and kissed his grandmother\'s hand, then said, "Grandma, may I write down what you say for our family museum?" She smiled. "With pleasure, my dear." <b>Asking permission</b> is the first interview skill.'],
        ['👂✍️', 'سألها: «ماذا كنتِ تلعبين وأنتِ في عمري؟» ثم <b>سكت واستمع</b> ولم يقاطع. حكت عن لعبة الحجارة الخمس، وعن ماء البئر في القرية. كتب يوسف كلماتٍ قليلة مهمّة، لا كلّ شيء.',
                 'He asked, "What did you play when you were my age?" Then he <b>stayed quiet and listened</b> without interrupting. She told him about the five-stones game and the village well. Yusuf wrote a few key words, not everything.'],
        ['🔁❓', 'ثم سأل <b>سؤال متابعة</b>: «وكيف كنتم تعرفون دخول رمضان بلا هاتف؟» قالت: «كنّا نسمع الخبر من المسجد والمذياع.» سؤال المتابعة يفتح كنوزًا لم تخطر على البال.',
                 'Then he asked a <b>follow-up question</b>: "How did you know Ramadan had started without a phone?" She said, "We heard it from the masjid and on the radio." A follow-up question opens treasures you never expected.'],
        ['📝📖', 'في البيت رتّب يوسف ما سمعه على خطٍّ زمني صغير، وكتب صفحةً عنوانها «تاريخ عائلتي». وكتب في أعلاها: <b>الراوي: جدّتي</b>، كما يفعل أهل الإسناد!',
                 'At home, Yusuf arranged what he heard on a small timeline and wrote a page titled "My Family History". At the top he wrote: <b>Narrator: my grandmother</b>, just like the scholars of isnad!'],
        ['🤲💛', 'وفي آخر الزيارة شكرها، ودعا لها. قالت الخالة نور: «المقابلة لم تكن درس تاريخٍ فقط؛ كانت صِلةَ رحمٍ وبِرًّا يحبّه الله.»',
                 'At the end of the visit he thanked her and made dua for her. Aunt Noor said, "The interview was not only a history lesson; it was keeping family ties and kindness that Allah loves."']
      ],
      learn: ['<b>التاريخ الشفوي</b> هو جمع الماضي ممّن عاشوه. مهارات المقابلة: استأذِن، اسأل سؤالًا واضحًا، استمع ولا تقاطع، اسأل سؤال متابعة، اكتب الكلمات المهمّة، اذكر اسم الراوي والتاريخ، واشكر.',
              '<b>Oral history</b> is collecting the past from people who lived it. Interview skills: ask permission, ask a clear question, listen without interrupting, ask a follow-up, note key words, record the narrator\'s name and the date, and say thank you.'],
      islam: ['قال رسول الله ﷺ: «مَن أحبَّ أن يُبسَطَ له في رزقه، ويُنسَأَ له في أثَرِه، فليَصِلْ رَحِمَه». فزيارة الأجداد والاستماع إليهم صلةُ رحمٍ عظيمة الأجر.',
              'The Messenger of Allah ﷺ said: "Whoever would like his provision to be increased and his life to be extended, let him keep good ties with his relatives." Visiting grandparents and listening to them is a way of keeping family ties, with great reward.'],
      src: ['صحيح البخاري ٥٩٨٦، صحيح مسلم ٢٥٥٧', 'Sahih al-Bukhari 5986, Sahih Muslim 2557'],
      mission: ['قابِل جدّك أو جدّتك (زيارةً أو اتصالًا) بأسئلتك الخمسة من ورقة المقابلة. استأذن، واستمع، واسأل سؤال متابعة واحدًا على الأقلّ. ثم اكتب صفحة «تاريخ عائلتي» واكتب في أعلاها اسم الراوي وتاريخ المقابلة بالهجري والميلادي. (إن لم يتيسّر الأجداد، قابِل أحد والديك أو كبيرًا من العائلة.)',
                'Interview a grandparent (in person or by phone) with your five questions from the interview sheet. Ask permission, listen, and ask at least one follow-up question. Then write a "My Family History" page with the narrator\'s name and the interview date in Hijri and Gregorian at the top. (If a grandparent is not available, interview a parent or an older relative.)'],
      q: ['ما أفضل شيءٍ تفعله بعد أن يجيب جدّك عن سؤالك؟', 'What is the best thing to do after your grandparent answers?'],
      o: [['أقاطعه لأسأل السؤال التالي بسرعة', 'Interrupt to rush to the next question', 0], ['أستمع جيّدًا ثم أسأل سؤال متابعة', 'Listen well, then ask a follow-up question', 1], ['أنظر إلى الهاتف', 'Look at my phone', 0]],
      fb: ['أحسنت! الاستماع وسؤال المتابعة يفتحان القصص المخبّأة، ويُشعران جدّك بأنك تحترمه.', 'Well done! Listening and a follow-up question open hidden stories, and show your grandparent you respect them.'],
      podcast: {
        title: ['كنزٌ في ذاكرة جدّتي', 'Treasure in Grandma\'s memory'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! يوسف قابل جدّته هذا الأسبوع. كيف كانت المقابلة؟', 'Assalamu alaikum, friends! Yusuf interviewed his grandmother this week. How did it go?'],
          ['k', 'كانت أجمل من كلّ الكتب! حكت لي عن لعبة الحجارة الخمس وبئر القرية.', 'It was better than any book! She told me about the five-stones game and the village well.'],
          ['h', 'هذا اسمه التاريخ الشفوي. أن نسمع الماضي ممّن عاشه. بماذا بدأت؟', 'That is called oral history: hearing the past from people who lived it. How did you start?'],
          ['k', 'سلّمتُ عليها، واستأذنتها أن أكتب كلامها.', 'I greeted her with salam and asked if I could write down what she said.'],
          ['h', 'ممتاز، الاستئذان أدبٌ ومهارة. وماذا فعلت وهي تتكلّم؟', 'Excellent. Asking permission is good manners and a real skill. What did you do while she spoke?'],
          ['k', 'سكتُّ واستمعتُ. أردتُ أن أقاطعها مرّة، لكني صبرت!', 'I stayed quiet and listened. I wanted to interrupt once, but I was patient!'],
          ['h', 'أحسنت. ثم سألت سؤال متابعة، صحيح؟', 'Well done. Then you asked a follow-up question, right?'],
          ['k', 'نعم، سألتها كيف عرفوا دخول رمضان بلا هاتف. قالت من المسجد والمذياع!', 'Yes, I asked how they knew Ramadan had started without a phone. She said from the masjid and the radio!'],
          ['h', 'هذا هو الكنز. سؤال المتابعة يفتح بابًا جديدًا. وهل كتبت اسم الراوي؟', 'That is the treasure. A follow-up question opens a new door. Did you write down the narrator\'s name?'],
          ['k', 'كتبت: الراوي جدّتي، والتاريخ بالهجري والميلادي. مثل الإسناد!', 'I wrote: Narrator, my grandmother, with the date in Hijri and Gregorian. Like the isnad!'],
          ['h', 'رائع. وتذكّر أن النبيّ صلى الله عليه وسلم قال: من أحبّ أن يُبسط له في رزقه ويُنسأ له في أثره فليصل رحمه.', 'Wonderful. And remember the Prophet, peace be upon him, said that whoever wants more provision and a longer life should keep ties with family.'],
          ['k', 'يعني مقابلتي كانت صلة رحم أيضًا!', 'So my interview was also keeping family ties!'],
          ['h', 'بالضبط. مهمّة اليوم: قابل جدّك أو جدّتك بأسئلتك الخمسة، واكتب صفحة تاريخ عائلتي.', 'Exactly. Today\'s mission: interview a grandparent with your five questions, and write your My Family History page.'],
          ['k', 'وسأدعو لجدّتي في آخر المقابلة. مع السلامة يا خالة!', 'And I will make dua for my grandma at the end. Goodbye, Aunt Noor!'],
          ['h', 'مع السلامة يا أصدقاء، وصِلوا أرحامكم.', 'Goodbye, friends, and keep your family ties strong.']
        ]
      }
    },
    /* ── 8 ── */
    {
      id: 'family-museum', icon: '🏛️', tag: 'family',
      t: ['مشروعي: صندوق متحف العائلة', 'My project: the Family Museum Box'],
      sub: ['خمس قطع، وخطٌّ زمني، وعرضٌ أمام العائلة', 'Five objects, a timeline and a family presentation'],
      pg: [
        ['📦✨', 'جاء اليوم الكبير! فتح يوسف «صندوق المستكشف» الذي جمع فيه أعمال الرحلة كلّها: خطّ حياته، وسلسلة الرواة، والخريطة، وبطاقة المفتاح، وصفحة تاريخ العائلة.',
                 'The big day arrived! Yusuf opened his "Explorer Box", which held all his work from the journey: his life timeline, the chain of narrators, the map, the key\'s label and the family history page.'],
        ['🖼️🧵', 'قالت الخالة نور: «المتحف الجيّد يحكي قصّة واحدة واضحة. اختر <b>خمس قطع</b> تحكي قصّة عائلتك، ورتّبها على <b>خطٍّ زمنيّ</b> من الأقدم إلى الأحدث.»',
                 'Aunt Noor said, "A good museum tells one clear story. Choose <b>five objects</b> that tell your family\'s story, and arrange them on a <b>timeline</b> from oldest to newest."'],
        ['🏷️✅', 'اختار يوسف: صورة جدّه شابًّا، وصورة المفتاح الحديدي، وبطاقة عرس والديه، وأوّل حذاءٍ لبسه، ورسمةً من صفّه هذا العام. ووضع بجانب كلّ قطعة بطاقة، وفحص كلّ بطاقة بالقائمة: هل كتبتُ الصحيح فقط؟',
                 'Yusuf chose: a photo of his grandfather as a young man, a photo of the iron key, his parents\' wedding card, his first baby shoe, and a drawing from his class this year. He put a label beside each one, and checked each label with the list: did I write only what is true?'],
        ['🎤👨‍👩‍👧', 'ثم دعا عائلته إلى «افتتاح المتحف». وقف وقال: «السلام عليكم، أهلًا بكم في متحف عائلتنا!» وشرح كلّ قطعة في جملتين: ما هي؟ وماذا تخبرنا؟',
                 'Then he invited his family to the "Museum Opening". He stood up and said, "Assalamu alaikum, welcome to our family museum!" He explained each object in two sentences: What is it? What does it tell us?'],
        ['❓😊', 'سألته أخته الصغيرة: «كيف عرفتَ أن الصورة لجدّي؟» قال: «سألتُ جدّتي، فهي الراوية، وكتبتُ ذلك على البطاقة.» صفّق الجميع؛ لقد صار مؤرّخًا حقيقيًّا.',
                 'His little sister asked, "How do you know that photo is Grandpa?" He said, "I asked Grandma; she is the narrator, and I wrote it on the label." Everyone clapped; he had become a real historian.'],
        ['🌱🤲', 'قالت الخالة نور: «وتذكّر يا يوسف: أنت اليوم تكتب تاريخ عائلتك، وغدًا سيقرأ أحفادك تاريخك أنت. فاجعل أجمل ما تتركه عملًا صالحًا.»',
                 'Aunt Noor said, "And remember, Yusuf: today you write your family\'s history, and one day your grandchildren will read yours. So let the best thing you leave behind be good deeds."']
      ],
      learn: ['المشروع الكامل يجمع كلّ المهارات: <b>الخطّ الزمني</b> للترتيب، و<b>المصادر</b> كقطع، و<b>الإسناد</b> بذكر الراوي، و<b>الأسئلة</b> لكتابة البطاقات، و<b>الصدق</b> في كلّ كلمة، ثم <b>العرض</b> بثقةٍ أمام الناس.',
              'The full project brings every skill together: a <b>timeline</b> for order, <b>sources</b> as objects, <b>isnad</b> by naming the narrator, <b>questions</b> to write the labels, <b>honesty</b> in every word, and then <b>presenting</b> with confidence.'],
      islam: ['قال رسول الله ﷺ: «إذا مات الإنسانُ انقطع عنه عملُه إلا من ثلاثة: إلا من صدقةٍ جارية، أو علمٍ يُنتفع به، أو ولدٍ صالحٍ يدعو له». فأجمل تاريخٍ نتركه هو الخير الذي يبقى بعدنا، ودعاؤنا لآبائنا وأجدادنا.',
              'The Messenger of Allah ﷺ said: "When a person dies, their deeds come to an end except for three: ongoing charity, knowledge that benefits others, or a righteous child who prays for them." The best history we leave is the good that lasts after us, and our dua for our parents and grandparents.'],
      src: ['صحيح مسلم ١٦٣١', 'Sahih Muslim 1631'],
      mission: ['ابنِ «صندوق متحف العائلة» أو «ملصق الخطّ الزمني للعائلة»: ٥ قطع (أو صورها) مرتّبة من الأقدم إلى الأحدث، ولكلّ قطعة بطاقة من ورقة العمل. اكتب عنوانًا للمتحف واسم الراوي لكلّ معلومة. ثم ادعُ عائلتك إلى «الافتتاح» واشرح كلّ قطعة في جملتين، وأجب عن أسئلتهم. وفي الختام ادعُ لأجدادك.',
                'Build your "Family Museum Box" or "Family Timeline Poster": 5 objects (or their photos) arranged from oldest to newest, each with a label card from the worksheet. Write a title for your museum and the narrator for each fact. Then invite your family to the "Opening", explain each object in two sentences, and answer their questions. Finish by making dua for your grandparents.'],
      q: ['كيف نرتّب القطع الخمس في متحف العائلة؟', 'How should we arrange the five objects in the family museum?'],
      o: [['حسب لونها', 'By colour', 0], ['على خطٍّ زمني من الأقدم إلى الأحدث', 'On a timeline from oldest to newest', 1], ['حسب حجمها', 'By size', 0]],
      fb: ['ممتاز يا مؤرّخ! الخطّ الزمني يجعل قصّة عائلتك واضحةً للجميع. مبارك عليك المتحف!', 'Excellent, historian! A timeline makes your family\'s story clear to everyone. Congratulations on your museum!'],
      podcast: {
        title: ['افتتاح متحف العائلة', 'The family museum opening'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! هذه الحلقة الأخيرة في رحلة مستكشف التاريخ، ويوسف عنده خبرٌ كبير.', 'Assalamu alaikum, friends! This is the last episode of the History Explorer journey, and Yusuf has big news.'],
          ['k', 'افتتحتُ متحف عائلتي! في صندوق أحذية!', 'I opened my family museum! In a shoebox!'],
          ['h', 'ما شاء الله! وكم قطعة اخترت؟', 'Masha Allah! How many objects did you choose?'],
          ['k', 'خمس قطع: صورة جدّي شابًّا، والمفتاح الحديدي، وبطاقة عرس والديّ، وحذائي الأوّل، ورسمتي من هذا العام.', 'Five: a photo of Grandpa as a young man, the iron key, my parents\' wedding card, my first shoe, and my drawing from this year.'],
          ['h', 'وكيف رتّبتها؟', 'And how did you arrange them?'],
          ['k', 'على خطٍّ زمني، من الأقدم إلى الأحدث، كما تعلّمنا في المحطّة الثانية.', 'On a timeline, from oldest to newest, like we learned in the second station.'],
          ['h', 'رائع. وماذا كتبت على البطاقات؟', 'Wonderful. What did you write on the labels?'],
          ['k', 'اسم القطعة، وصاحبها، وعمرها التقريبي، وماذا تحكي. وحين لم أعرف شيئًا كتبت غير معروف.', 'The object\'s name, its owner, roughly how old it is, and what it tells us. When I did not know something, I wrote unknown.'],
          ['h', 'هذه أمانة المؤرّخ. وهل سألك أحدٌ سؤالًا صعبًا؟', 'That is a historian\'s honesty. Did anyone ask you a hard question?'],
          ['k', 'أختي سألت: كيف عرفت أنها صورة جدّي؟ قلت: سألت جدّتي، فهي الراوية!', 'My sister asked how I knew it was Grandpa\'s photo. I said I asked Grandma, she is the narrator!'],
          ['h', 'ما أجمل هذا! ويا يوسف، تذكّر أنك يومًا ما ستصير أنت جزءًا من تاريخ عائلتك.', 'How lovely! And Yusuf, remember that one day you will be part of your family\'s history too.'],
          ['k', 'إذن أريد أن يكون تاريخي جميلًا، فيه خيرٌ كثير.', 'Then I want my history to be beautiful, full of good things.'],
          ['h', 'وقد قال النبيّ صلى الله عليه وسلم إن من الخير الذي يبقى بعد الإنسان ولدًا صالحًا يدعو له.', 'And the Prophet, peace be upon him, told us that one good thing that lasts after a person is a righteous child who prays for them.'],
          ['k', 'سأدعو لأجدادي كلّ يوم.', 'I will make dua for my grandparents every day.'],
          ['h', 'مهمّة اليوم: ابنِ صندوق متحفك بخمس قطع وبطاقاتها، وادعُ عائلتك إلى الافتتاح.', 'Today\'s mission: build your museum box with five objects and their labels, and invite your family to the opening.'],
          ['k', 'شكرًا يا خالة نور على هذه الرحلة! مع السلامة يا أصدقاء.', 'Thank you, Aunt Noor, for this journey! Goodbye, friends.'],
          ['h', 'مع السلامة يا مستكشفي التاريخ. كنتم مؤرّخين رائعين، في أمان الله.', 'Goodbye, history explorers. You have been wonderful historians. May Allah keep you safe.']
        ]
      }
    }
  ]
};
