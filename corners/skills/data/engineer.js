/* engineer.js — «صانع المهارات» · المهندس الصغير — 8 stations + podcast */
window.SKILLS = window.SKILLS || {};
window.SKILLS.engineer = {
  id: 'engineer', icon: '🏗️', color: '#E67E22',
  title: ['المهندس الصغير', 'The Little Engineer'],
  intro: ['المهندس لا يبدأ بالأدوات، بل بعينين تلاحظان وقلبٍ يريد أن يساعد. في ثماني محطّات ستتعلّم كيف يفكّر المهندسون، ثمّ تصمّم وتبني وتختبر اختراعك الحقيقي الأوّل!',
          'Engineers don\'t start with tools. They start with eyes that notice and a heart that wants to help. In eight stations you will learn how engineers think, then design, build and test your very first real invention!'],
  mentor: { icon: '👷‍♀️', name: ['العمّة هدى', 'Aunt Huda'],
    say: ['أهلًا يا مهندسي الصغير! أنا العمّة هدى، مهندسةٌ أحبّ الجسور والأبراج والأفكار الذكية. معي كرتونٌ وشريطٌ لاصق وأقلام، ومعك عقلك الرائع. هيّا نبني شيئًا مفيدًا معًا!',
          'Welcome, little engineer! I\'m Aunt Huda, an engineer who loves bridges, towers and clever ideas. I\'ve brought cardboard, tape and pencils, and you\'ve brought your wonderful mind. Let\'s build something useful together!'] },
  cast: { h: { icon: '👷‍♀️', name: ['العمّة هدى', 'Aunt Huda'], g: 'female' },
          k: { icon: '👦', name: ['يوسف', 'Yusuf'], g: 'male' } },
  goals: [
    ['ملاحظة مشكلةٍ حقيقية تستحقّ الحلّ', 'سؤال صاحب الحاجة عمّا يحتاجه فعلًا', 'توليد أفكارٍ كثيرة قبل اختيار واحدة', 'رسم خطّةٍ بالقياسات', 'اختيار موادّ آمنة ومُعاد تدويرها، وفهم سرّ المثلّث', 'بناء نموذجٍ أوّلي وفهم الآلات البسيطة', 'الاختبار والتحسين: الخطأ جزءٌ من التعلّم', 'عرض الاختراع بثقةٍ وإتقان'],
    ['Notice a real problem worth solving', 'Ask the person who needs it what they really need', 'Generate many ideas before choosing one', 'Draw a plan with measurements', 'Choose safe, recycled materials and discover the secret of the triangle', 'Build a first prototype and understand simple machines', 'Test and improve: mistakes are part of learning', 'Present the invention with confidence and care']
  ],
  filters: [['process', 'خطوات المهندس', 'Design steps'], ['science', 'أسرار القوّة', 'Strength secrets'], ['project', 'اختراعي', 'My invention']],
  parents: [
    '<h3>كيف ترافق مهندسك الصغير؟</h3><p>هذه الرحلة تعلّم طريقة تفكير المهندسين: لاحِظ، اسأل، فكّر، خطّط، ابنِ، اختبر، حسّن، اعرض. في نهايتها يصمّم الطفل حلًّا حقيقيًا لمشكلةٍ صغيرة في البيت (حامل جهاز لوحي، جسر يحمل ١٠ قطع نقدية، منظّم أقلام…).</p>' +
    '<ul><li><b>محطّة في اليوم أو اثنتان في الأسبوع</b> تكفي؛ اتركوا وقتًا للّعب والتجريب.</li>' +
    '<li><b>صندوق الموادّ:</b> كرتون من علب قديمة، ورق، شريط لاصق، مصّاصات، أكواب ورقية، خيط، مسطرة، قلم رصاص.</li>' +
    '<li><b>السلامة أوّلًا:</b> المقصّ والقاطع مع شخصٍ كبير فقط، لا مسدّس غراءٍ حارّ بدون كبير، ولا شيء كهربائي في هذه الرحلة.</li>' +
    '<li><b>احتفلوا بالمحاولات الفاشلة:</b> قولوا «رائع! ماذا تعلّمنا؟» بدل «خطأ». هكذا يتعلّم المهندسون.</li>' +
    '<li>لا تبنوا عنه؛ اسألوه أسئلة: «لماذا اخترت هذا؟ كيف نختبره؟»</li></ul>',
    '<h3>How to walk alongside your little engineer</h3><p>This journey teaches how engineers think: notice, ask, imagine, plan, build, test, improve, present. At the end your child designs a real solution to a small problem at home (a tablet stand, a bridge that holds 10 coins, a pencil organiser…).</p>' +
    '<ul><li><b>One station a day, or two a week,</b> is plenty. Leave time to play and tinker.</li>' +
    '<li><b>Materials box:</b> cardboard from old boxes, paper, tape, straws, paper cups, string, a ruler, a pencil.</li>' +
    '<li><b>Safety first:</b> scissors and cutters only with an adult, no hot glue gun without an adult, and nothing electrical on this journey.</li>' +
    '<li><b>Celebrate failed attempts:</b> say "Great! What did we learn?" instead of "Wrong". That is how engineers learn.</li>' +
    '<li>Don\'t build it for them. Ask questions instead: "Why did you choose this? How shall we test it?"</li></ul>'
  ],
  worksheet: [
    '<h2>🏗️ ورقة المهندس الصغير — خطوات التصميم</h2>' +
    '<p>اسمي: ____________ &nbsp; التاريخ: ____________</p>' +
    '<h3>١. المشكلة</h3><p>ما المشكلة التي لاحظتها؟ ______________________________</p><p>لمن أصنع الحلّ؟ ____________ ماذا يحتاج بالضبط؟ ______________________</p>' +
    '<h3>٢. أفكاري (ارسم ٤ أفكار سريعة)</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse"><tr><td style="height:110px;width:50%">فكرة ١</td><td>فكرة ٢</td></tr><tr><td style="height:110px">فكرة ٣</td><td>فكرة ٤</td></tr></table>' +
    '<h3>٣. خطّتي بالقياسات</h3><div style="border:2px dashed #E67E22;height:170px;padding:6px">ارسم هنا واكتب الطول والعرض والارتفاع بالسنتيمتر</div>' +
    '<h3>٤. الموادّ</h3><p>☐ كرتون ☐ ورق ☐ شريط لاصق ☐ مصّاصات ☐ أكواب ☐ خيط ☐ أخرى: ________</p>' +
    '<h3>٥. نتائج الاختبار</h3><table border="1" cellpadding="6" style="width:100%;border-collapse:collapse"><tr><th>المحاولة</th><th>ماذا اختبرت؟</th><th>ماذا حدث؟</th><th>ماذا سأغيّر؟</th></tr><tr><td>١</td><td></td><td></td><td></td></tr><tr><td>٢</td><td></td><td></td><td></td></tr><tr><td>٣</td><td></td><td></td><td></td></tr></table>' +
    '<h3>٦. التحسينات</h3><p>أهمّ تحسينٍ قمت به: ______________________________</p>' +
    '<h2>🌉 تحدّي الجسر</h2><p>كومتان من الكتب بينهما ٢٠ سم، وورقة واحدة. كم قطعة نقدية يحمل جسرك؟</p>' +
    '<table border="1" cellpadding="6" style="width:100%;border-collapse:collapse"><tr><th>شكل الجسر</th><th>توقّعي (عدد القطع)</th><th>النتيجة</th><th>ملاحظة</th></tr><tr><td>ورقة مسطّحة</td><td></td><td></td><td></td></tr><tr><td>ورقة مطويّة كالمروحة</td><td></td><td></td><td></td></tr><tr><td>ورقة ملفوفة أنابيب</td><td></td><td></td><td></td></tr><tr><td>تصميمي الخاص</td><td></td><td></td><td></td></tr></table>',
    '<h2>🏗️ Little Engineer Sheet — Design Steps</h2>' +
    '<p>My name: ____________ &nbsp; Date: ____________</p>' +
    '<h3>1. The problem</h3><p>What problem did I notice? ______________________________</p><p>Who am I making it for? ____________ What exactly do they need? ______________________</p>' +
    '<h3>2. My ideas (sketch 4 quick ideas)</h3><table border="1" cellpadding="8" style="width:100%;border-collapse:collapse"><tr><td style="height:110px;width:50%">Idea 1</td><td>Idea 2</td></tr><tr><td style="height:110px">Idea 3</td><td>Idea 4</td></tr></table>' +
    '<h3>3. My plan with measurements</h3><div style="border:2px dashed #E67E22;height:170px;padding:6px">Draw here and write the length, width and height in centimetres</div>' +
    '<h3>4. Materials</h3><p>☐ cardboard ☐ paper ☐ tape ☐ straws ☐ cups ☐ string ☐ other: ________</p>' +
    '<h3>5. Test results</h3><table border="1" cellpadding="6" style="width:100%;border-collapse:collapse"><tr><th>Try</th><th>What did I test?</th><th>What happened?</th><th>What will I change?</th></tr><tr><td>1</td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td></tr></table>' +
    '<h3>6. Improvements</h3><p>My most important improvement: ______________________________</p>' +
    '<h2>🌉 The Bridge Challenge</h2><p>Two piles of books 20 cm apart and one sheet of paper. How many coins can your bridge hold?</p>' +
    '<table border="1" cellpadding="6" style="width:100%;border-collapse:collapse"><tr><th>Bridge shape</th><th>My guess (coins)</th><th>Result</th><th>Note</th></tr><tr><td>Flat sheet</td><td></td><td></td><td></td></tr><tr><td>Folded like a fan</td><td></td><td></td><td></td></tr><tr><td>Rolled into tubes</td><td></td><td></td><td></td></tr><tr><td>My own design</td><td></td><td></td><td></td></tr></table>'
  ],
  next: ['../activities/play.html', '🪐', 'كوكب الإبداع', 'Planet of Creativity', 'جرّب مهارة أخرى أو لعبة', 'Try another skill or a game'],
  stations: [
    /* ───────── 1. Noticing a problem ───────── */
    {
      id: 'notice-problem', icon: '🔍', tag: 'process',
      t: ['مشكلةٌ تستحقّ الحلّ', 'A problem worth solving'],
      sub: ['عين المهندس تلاحظ', 'An engineer\'s eyes notice'],
      pg: [
        ['📱👵', 'كلّ يوم جمعة تتّصل الجدّة فاطمة بـ<b>يوسف</b> على الجهاز اللوحي. لكنّ الجهاز ينزلق ويسقط على الطاولة، فلا يرى يوسف إلا السقف! ضحك يوسف… ثمّ فكّر.', 'Every Friday, Grandma Fatima video-calls <b>Yusuf</b> on her tablet. But the tablet keeps sliding and falling flat on the table, so all Yusuf can see is the ceiling! Yusuf laughed… and then he started thinking.'],
        ['👷‍♀️🧰', 'زارتهم <b>العمّة هدى</b> المهندسة وقالت: «المهندس لا يبدأ بالأدوات، بل بعينيه. كلّ شيءٍ يزعج الناس هو مشكلةٌ تنتظر حلًّا».', 'Then <b>Aunt Huda</b>, the engineer, came to visit. "Engineers don\'t start with tools," she said. "They start with their eyes. Everything that bothers people is a problem waiting for a solution."'],
        ['📝🏠', 'أخذا دفترًا وتجوّلا في البيت: أحذيةٌ متكوّمة عند الباب، أقلامٌ تتدحرج عن المكتب، أسلاك شاحنٍ متشابكة، نبتةٌ ينسون سقيها. كتب يوسف كلّ ما لاحظه.', 'They took a notebook and walked around the house: a pile of shoes by the door, pencils rolling off the desk, tangled charger cables, a plant everyone forgets to water. Yusuf wrote down everything he noticed.'],
        ['🌿🐕', 'قالت العمّة: «هل تعرف أنّ الشريط اللاصق ذا الخطّاف (الفيلكرو) اخترعه مهندسٌ لاحظ بذور نباتٍ شائكة تعلق بفراء كلبه بعد نزهة؟ ملاحظةٌ صغيرة صنعت اختراعًا كبيرًا!»', '"Did you know," said Aunt Huda, "that hook-and-loop tape, Velcro, was invented by an engineer who noticed prickly plant burrs sticking to his dog\'s fur after a walk? A small observation became a big invention!"'],
        ['⭐🎯', 'ثمّ علّمته: «اختر مشكلةً <b>صغيرة، حقيقية</b>، يمكن حلّها بموادّ بسيطة». نظر يوسف إلى قائمته وقال: «سأصنع حاملًا لجهاز جدّتي!»', 'Then she taught him: "Pick a problem that is <b>small and real</b>, and that you can solve with simple materials." Yusuf looked at his list and said, "I\'ll make a stand for Grandma\'s tablet!"']
      ],
      learn: ['<b>الخطوة الأولى في التصميم الهندسي:</b> أن تلاحظ المشكلة وتصفها بوضوح: ماذا يحدث؟ أين؟ ومتى يزعج؟ المشكلة الموصوفة جيّدًا أسهل في الحلّ.', '<b>The first step of engineering design</b> is to notice a problem and describe it clearly: What happens? Where? When does it bother someone? A clearly described problem is easier to solve.'],
      islam: ['يدعونا الله تعالى إلى النظر والتأمّل في صنعه: ﴿أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ﴾ ﴿وَإِلَى السَّمَاءِ كَيْفَ رُفِعَتْ﴾ ﴿وَإِلَى الْجِبَالِ كَيْفَ نُصِبَتْ﴾ (الغاشية: ١٧–١٩). العين التي تتأمّل هي أوّل أداة للمهندس.', 'Allah invites us to look and reflect on His creation: "Do they not look at the camels, how they are created? And at the sky, how it is raised? And at the mountains, how they are set firm?" (al-Ghashiyah 88:17–19). An eye that reflects is an engineer\'s first tool.'],
      src: ['الغاشية: ١٧–١٩', 'Al-Ghashiyah 88:17–19'],
      mission: ['خذ دفترًا وتجوّل في بيتك ١٠ دقائق. اكتب ٥ أشياء صغيرة تزعجك أو تزعج أهلك. ثمّ ضع نجمة بجانب مشكلةٍ واحدة صغيرة وحقيقية يمكنك حلّها بالكرتون والورق — ستكون مشروعك في هذه الرحلة!', 'Take a notebook and walk around your home for 10 minutes. Write down 5 small things that bother you or your family. Then put a star next to ONE small, real problem you could solve with cardboard and paper. That will be your project for this journey!'],
      q: ['أيّ هذه المشكلات هي الأنسب لمهندسٍ صغير يبدأ أوّل مشروع؟', 'Which of these problems suits a little engineer starting a first project best?'],
      o: [['بناء جسرٍ فوق نهرٍ كبير', 'Building a bridge over a big river'], ['أقلامٌ تتدحرج دائمًا عن المكتب', 'Pencils that always roll off the desk', 1], ['اختراع سيّارةٍ تطير', 'Inventing a flying car']],
      fb: ['أحسنت! مشكلةٌ صغيرة وحقيقية يمكن حلّها بموادّ بسيطة هي أفضل بداية. الجسور الكبيرة تأتي لاحقًا!', 'Well done! A small, real problem you can solve with simple materials is the best start. The big bridges come later!'],
      podcast: {
        title: ['عينا المهندس', 'An engineer\'s eyes'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم العمّة هدى في بودكاست المهندس الصغير. ومعي اليوم ضيفٌ رائع.', 'Assalamu alaikum, friends! This is Aunt Huda on The Little Engineer podcast. And today I have a wonderful guest.'],
          ['k', 'وعليكم السلام يا عمّة! أنا يوسف، وعمري تسع سنوات. وأريد أن أصبح مهندسًا!', 'Wa alaikum assalam, Aunt Huda! I\'m Yusuf, I\'m nine, and I want to be an engineer!'],
          ['h', 'رائع يا يوسف. قل لي، ماذا تظنّ أنّ المهندس يفعل أوّلًا؟', 'Wonderful, Yusuf. Tell me, what do you think an engineer does first?'],
          ['k', 'يمسك المطرقة ويبدأ البناء؟', 'He picks up a hammer and starts building?'],
          ['h', 'ليس بعد! أوّل شيء يفعله المهندس هو أن يلاحظ. يرى مشكلةً يتجاهلها الناس.', 'Not yet! The first thing an engineer does is notice. They see a problem that other people ignore.'],
          ['k', 'مثل جهاز جدّتي الذي يسقط دائمًا وهي تكلّمني؟', 'Like my grandma\'s tablet that keeps falling over while she talks to me?'],
          ['h', 'بالضبط! هذه مشكلةٌ حقيقية. هل تعرف قصّة الفيلكرو؟', 'Exactly! That\'s a real problem. Do you know the story of Velcro?'],
          ['k', 'الشريط الذي يلتصق ويصدر صوتًا عندما نفتحه؟', 'The strip that sticks and makes a ripping sound when you open it?'],
          ['h', 'نعم. مهندسٌ خرج مع كلبه في نزهة، فرأى بذورًا شائكة عالقة بفرائه. نظر إليها عن قرب، فرأى خطاطيف صغيرة جدًّا. ومن هنا جاءت الفكرة.', 'Yes. An engineer took his dog for a walk and found prickly seeds stuck in its fur. He looked closely and saw tiny little hooks. And that is where the idea came from.'],
          ['k', 'يعني الملاحظة الصغيرة ممكن تصير اختراعًا!', 'So a small observation can become an invention!'],
          ['h', 'تمامًا. والله تعالى يدعونا في سورة الغاشية أن ننظر إلى الإبل كيف خُلقت، وإلى الجبال كيف نُصبت. التأمّل عبادةٌ وعلم.', 'Exactly. And in Surat al-Ghashiyah, Allah invites us to look at the camels, how they were created, and at the mountains, how they were set firm. Reflecting is worship and knowledge too.'],
          ['k', 'لكن يا عمّة، كيف أعرف أيّ مشكلةٍ أختار؟', 'But Aunt Huda, how do I know which problem to choose?'],
          ['h', 'اختر مشكلةً صغيرة، حقيقية، وتستطيع حلّها بالكرتون والورق والشريط اللاصق.', 'Choose a problem that is small and real, one you can solve with cardboard, paper and tape.'],
          ['k', 'إذن سأختار جهاز جدّتي. سأصنع له حاملًا!', 'Then I choose Grandma\'s tablet. I\'ll make a stand for it!'],
          ['h', 'مهمّة اليوم: تجوّل في بيتك واكتب خمس مشكلاتٍ صغيرة، ثمّ اختر واحدة. إلى اللقاء في الحلقة القادمة!', 'Today\'s mission: walk around your home, write down five small problems, then choose one. See you in the next episode!'],
          ['k', 'إلى اللقاء يا أصدقاء! افتحوا عيونكم جيّدًا!', 'Bye, friends! Keep your eyes wide open!']
        ]
      }
    },

    /* ───────── 2. Who is it for? ───────── */
    {
      id: 'who-needs', icon: '🗣️', tag: 'process',
      t: ['لِمن نصنع؟', 'Who is it for?'],
      sub: ['اسأل صاحب الحاجة', 'Ask the person who needs it'],
      pg: [
        ['🤔📱', 'كان يوسف متحمّسًا: «سأصنع حاملًا عاليًا ملوّنًا بالأحمر!» فسألته العمّة هدى: «هل سألت جدّتك ماذا تحتاج هي؟»', 'Yusuf was excited. "I\'ll make a tall stand and paint it red!" Aunt Huda asked, "Did you ask Grandma what <i>she</i> needs?"'],
        ['☎️👵', 'اتّصل يوسف بجدّته وسألها أسئلة المهندس: «أين تضعين الجهاز؟ هل تجلسين أم تقفين؟ ماذا يزعجك أكثر؟»', 'Yusuf called his grandmother and asked her engineer questions: "Where do you put the tablet? Do you sit or stand? What bothers you most?"'],
        ['☕🧓', 'فوجئ يوسف! قالت الجدّة: «أضعه على طاولة المطبخ وأنا جالسة. يداي تتعبان من حمله. وأريد أن أشحنه وهو على الحامل. واللون لا يهمّني».', 'Yusuf was surprised! Grandma said, "I put it on the kitchen table while I sit. My hands get tired holding it. I\'d like to charge it while it\'s on the stand. And I don\'t mind about the colour."'],
        ['📋✅', 'كتب يوسف قائمة <b>الحاجات</b>: ١) يقف ثابتًا ولا ينزلق. ٢) مائلٌ قليلًا لترى الشاشة وهي جالسة. ٣) فيه فتحة لسلك الشحن. ٤) خفيف ليسهل حمله.', 'Yusuf wrote a list of <b>needs</b>: 1) Stands firmly without sliding. 2) Tilted a little so she can see the screen while sitting. 3) Has a gap for the charging cable. 4) Light, so it\'s easy to carry.'],
        ['💡❤️', 'قالت العمّة: «المهندس الجيّد يصمّم للناس، لا لنفسه فقط. الاستماع نصف الحلّ!»', 'Aunt Huda said, "A good engineer designs for people, not just for themselves. Listening is half the solution!"']
      ],
      learn: ['قبل أن نصمّم نسأل: <b>لمن؟</b> و<b>ماذا يحتاج بالضبط؟</b> ونكتب الحاجات في قائمة واضحة. هذه القائمة تصبح «شروط النجاح» التي نختبر بها اختراعنا لاحقًا.', 'Before designing we ask: <b>Who is it for?</b> and <b>What exactly do they need?</b> We write the needs as a clear list. That list becomes our "success rules", which we use to test our invention later.'],
      islam: ['حين وصل ذو القرنين إلى قومٍ يعانون، استمع أوّلًا لحاجتهم: ﴿قَالُوا يَا ذَا الْقَرْنَيْنِ إِنَّ يَأْجُوجَ وَمَأْجُوجَ مُفْسِدُونَ فِي الْأَرْضِ فَهَلْ نَجْعَلُ لَكَ خَرْجًا عَلَىٰ أَن تَجْعَلَ بَيْنَنَا وَبَيْنَهُمْ سَدًّا﴾ (الكهف: ٩٤). سمع المشكلة من أصحابها قبل أن يبني.', 'When Dhul-Qarnayn reached a people who were suffering, he first listened to their need: "They said, O Dhul-Qarnayn, Gog and Magog are spreading corruption in the land. Shall we pay you a tribute so that you build a barrier between us and them?" (al-Kahf 18:94). He heard the problem from the people themselves before building.'],
      src: ['الكهف: ٩٤', 'Al-Kahf 18:94'],
      mission: ['قابل الشخص الذي ستصنع له اختراعك (أو نفسك إن كان لك). اسأله ٣ أسئلة: أين يستعمله؟ ماذا يزعجه؟ ما أهمّ شيءٍ عنده؟ ثمّ اكتب قائمة من ٣ أو ٤ «حاجات» واضحة.', 'Interview the person you\'re making your invention for (or yourself, if it\'s for you). Ask 3 questions: Where will they use it? What bothers them? What matters most to them? Then write a clear list of 3 or 4 "needs".'],
      q: ['لماذا سأل يوسف جدّته قبل أن يبدأ التصميم؟', 'Why did Yusuf ask his grandmother before he started designing?'],
      o: [['ليعرف حاجتها الحقيقية فيصمّم لها', 'To learn her real needs and design for her', 1], ['ليطلب منها المال', 'To ask her for money'], ['لأنّ اللون الأحمر أهمّ شيء', 'Because the red colour is the most important thing']],
      fb: ['ممتاز! الجدّة لم تهتمّ باللون، بل بالثبات وفتحة الشحن. لولا السؤال لصمّم يوسف شيئًا لا تحتاجه.', 'Excellent! Grandma didn\'t care about the colour. She cared about it staying steady and having a gap for the charger. Without asking, Yusuf might have built something she didn\'t need.'],
      podcast: {
        title: ['اسأل قبل أن تبني', 'Ask before you build'],
        lines: [
          ['h', 'أهلًا بكم من جديد في بودكاست المهندس الصغير! يوسف، كيف حال مشروع الحامل؟', 'Welcome back to The Little Engineer! Yusuf, how is the stand project going?'],
          ['k', 'كنت سأصنعه أحمر وعاليًا جدًّا، لكنّي اتّصلت بجدّتي أوّلًا.', 'I was going to make it red and really tall, but I called my grandma first.'],
          ['h', 'أحسنت! وماذا اكتشفت؟', 'Well done! And what did you find out?'],
          ['k', 'اكتشفت أنّ اللون لا يهمّها أبدًا! تريده ثابتًا، ومائلًا قليلًا، وفيه مكانٌ لسلك الشحن.', 'I found out she doesn\'t care about the colour at all! She wants it steady, tilted a little, with room for the charging cable.'],
          ['h', 'هذا يسمّيه المهندسون: حاجات المستخدم. المستخدم هو الشخص الذي سيستعمل الاختراع.', 'Engineers call that the user\'s needs. The user is the person who will use the invention.'],
          ['k', 'وهل المهندسون الكبار يسألون الناس أيضًا؟', 'Do grown-up engineers ask people too?'],
          ['h', 'دائمًا! قبل أن يصمّموا مستشفى يسألون الأطبّاء والممرّضين. وقبل أن يصمّموا مدرسة يسألون المعلّمين.', 'Always! Before designing a hospital they ask doctors and nurses. Before designing a school they ask teachers.'],
          ['k', 'هذا منطقي. لا أحد يعرف المشكلة أكثر من صاحبها.', 'That makes sense. Nobody knows a problem better than the person who has it.'],
          ['h', 'جميل جدًّا. وفي سورة الكهف، جاء قومٌ إلى ذي القرنين وأخبروه بمشكلتهم مع يأجوج ومأجوج، فاستمع إليهم أوّلًا.', 'Beautiful. In Surat al-Kahf, a people came to Dhul-Qarnayn and told him about their problem with Gog and Magog, and he listened to them first.'],
          ['k', 'وماذا فعل بعد ذلك؟', 'And what did he do after that?'],
          ['h', 'هذه قصّة سنكملها في حلقةٍ قادمة، عندما نتكلّم عن الموادّ. انتظرها!', 'We\'ll finish that story in a later episode, when we talk about materials. Wait for it!'],
          ['k', 'حسنًا! إذن الآن أكتب قائمة الحاجات؟', 'Okay! So now I write my list of needs?'],
          ['h', 'نعم. ثلاث أو أربع حاجات واضحة. ستكون هي اختبار النجاح في النهاية.', 'Yes. Three or four clear needs. They will be your success test at the end.'],
          ['h', 'مهمّة اليوم: اسأل صاحب المشكلة ثلاثة أسئلة واكتب حاجاته. إلى اللقاء!', 'Today\'s mission: ask the person with the problem three questions and write down their needs. Goodbye for now!'],
          ['k', 'مع السلامة! واسمعوا جيّدًا قبل أن تبنوا!', 'Bye! And listen carefully before you build!']
        ]
      }
    },

    /* ───────── 3. Brainstorming ───────── */
    {
      id: 'many-ideas', icon: '💡', tag: 'process',
      t: ['عاصفةُ الأفكار', 'A storm of ideas'],
      sub: ['أفكارٌ كثيرة قبل الاختيار', 'Many ideas before choosing'],
      pg: [
        ['⏱️📝', 'وضعت العمّة هدى ساعةً أمام يوسف: «عندك ١٠ دقائق. ارسم أكبر عددٍ من الأفكار لحامل الجهاز. لا توجد فكرة سخيفة الآن!»', 'Aunt Huda set a timer in front of Yusuf. "You have 10 minutes. Sketch as many ideas for the tablet stand as you can. There are no silly ideas right now!"'],
        ['✏️🖍️', 'رسم يوسف بسرعة: مثلّثٌ من الكرتون، كتبٌ مكدّسة، صندوق حذاءٍ مقصوص، علّاقة ملابس، حامل على شكل ديناصور، وكوبٌ ورقي فيه شقّ!', 'Yusuf drew quickly: a cardboard triangle, a stack of books, a cut shoebox, a coat hanger, a dinosaur-shaped stand, and a paper cup with a slit in it!'],
        ['😂🦖', 'ضحكا كثيرًا من الديناصور، لكنّ العمّة قالت: «الأفكار المضحكة تفتح الباب لأفكارٍ ذكيّة. ذيل الديناصور قد يصبح سندًا من الخلف!»', 'They laughed a lot at the dinosaur, but Aunt Huda said, "Funny ideas open the door to clever ones. That dinosaur tail could become a support at the back!"'],
        ['🔢⚖️', 'بعد الرسم، قارنا كلّ فكرة بقائمة حاجات الجدّة: ثابت؟ مائل؟ فيه فتحة شحن؟ خفيف؟ وأعطيا كلّ فكرة نقاطًا.', 'After sketching, they compared each idea with Grandma\'s list of needs: Steady? Tilted? Gap for the charger? Light? They gave each idea points.'],
        ['🔺🏆', 'فاز <b>المثلّث الكرتوني</b> مع لمسةٍ من ذيل الديناصور: سندٌ خلفي، وحافّة صغيرة في الأسفل تمنع الانزلاق.', 'The winner was the <b>cardboard triangle</b>, with a touch of dinosaur tail: a back support, plus a small lip at the bottom to stop sliding.']
      ],
      learn: ['<b>العصف الذهني:</b> نولّد أفكارًا كثيرة بسرعة دون حكم، ثمّ نختار الأفضل بمقارنتها بالحاجات. الفكرة الأولى ليست دائمًا الأفضل، وأحيانًا نجمع فكرتين في فكرة واحدة.', '<b>Brainstorming:</b> we produce lots of ideas quickly without judging, then pick the best by comparing them with the needs. The first idea isn\'t always the best, and sometimes we combine two ideas into one.'],
      islam: ['في بغداد قبل أكثر من ألف ومئة سنة، عاش ثلاثة إخوة يُعرفون بـ<b>بني موسى</b> (محمّد وأحمد والحسن، أبناء موسى بن شاكر). عملوا معًا، وكتبوا «<b>كتاب الحيل</b>» الذي يصف نحو مئة جهازٍ ميكانيكيٍّ ذكي. ثلاثة عقول تتشاور تصنع أفكارًا أكثر من عقلٍ واحد!', 'In Baghdad more than eleven hundred years ago lived three brothers known as the <b>Banu Musa</b> (Muhammad, Ahmad and al-Hasan, sons of Musa ibn Shakir). They worked together and wrote the "<b>Book of Ingenious Devices</b>", describing about a hundred clever mechanical devices. Three minds sharing ideas make more ideas than one!'],
      src: ['بنو موسى بن شاكر — كتاب الحيل (القرن التاسع الميلادي، بغداد)', 'The Banu Musa brothers — Book of Ingenious Devices (9th century CE, Baghdad)'],
      mission: ['اضبط مؤقّتًا ١٠ دقائق وارسم ٦ أفكار على الأقلّ لحلّ مشكلتك، حتّى المضحكة منها. ثمّ ادعُ أحد أفراد أسرتك ليضيف فكرة. قارن الأفكار بقائمة الحاجات واختر واحدة (أو اجمع فكرتين).', 'Set a 10-minute timer and sketch at least 6 ideas for solving your problem, even funny ones. Then invite someone in your family to add an idea. Compare the ideas with your list of needs and pick one (or combine two).'],
      q: ['ما القاعدة الذهبية أثناء العصف الذهني؟', 'What is the golden rule during brainstorming?'],
      o: [['نختار أوّل فكرة ونتوقّف', 'Pick the first idea and stop'], ['نرفض أيّ فكرة غريبة فورًا', 'Reject any strange idea right away'], ['نكتب أفكارًا كثيرة أوّلًا ثمّ نختار', 'Write lots of ideas first, then choose', 1]],
      fb: ['صحيح! الكثرة أوّلًا ثمّ الاختيار. حتّى فكرة الديناصور المضحكة أعطت يوسف فكرة السند الخلفي!', 'Right! Quantity first, then choose. Even the funny dinosaur idea gave Yusuf the idea of a back support!'],
      podcast: {
        title: ['الديناصور الذي ساعدنا', 'The dinosaur that helped'],
        lines: [
          ['h', 'السلام عليكم! حلقة اليوم فيها عاصفة. لكن لا تخافوا، إنّها عاصفة أفكار!', 'Assalamu alaikum! Today\'s episode has a storm in it. But don\'t worry, it\'s a storm of ideas!'],
          ['k', 'رسمت أمس ستّ أفكار في عشر دقائق يا عمّة! واحدة منها ديناصور.', 'Yesterday I drew six ideas in ten minutes, Aunt Huda! One of them was a dinosaur.'],
          ['h', 'وأنا أحببت الديناصور كثيرًا. لماذا تظنّ أنّني طلبت منك أفكارًا كثيرة؟', 'And I loved that dinosaur. Why do you think I asked you for so many ideas?'],
          ['k', 'لأنّ الفكرة الأولى قد لا تكون الأفضل؟', 'Because the first idea might not be the best one?'],
          ['h', 'تمامًا. العقل مثل الصنبور. أوّل الماء قد يكون عاديًّا، ثمّ يأتي الماء الصافي.', 'Exactly. Your mind is like a tap. The first water may be ordinary, then the clear water comes.'],
          ['k', 'لكنّ الديناصور فكرة سخيفة، أليس كذلك؟', 'But the dinosaur was a silly idea, wasn\'t it?'],
          ['h', 'لا أبدًا! ذيله أعطانا فكرة السند الخلفي الذي يمنع الجهاز من السقوط.', 'Not at all! Its tail gave us the idea for the back support that stops the tablet from falling.'],
          ['k', 'واو! الفكرة المضحكة صارت فكرة مفيدة.', 'Wow! The funny idea became a useful one.'],
          ['h', 'وهل تعرف بني موسى؟ ثلاثة إخوة عاشوا في بغداد قبل أكثر من ألف سنة.', 'Have you heard of the Banu Musa? Three brothers who lived in Baghdad more than a thousand years ago.'],
          ['k', 'ماذا فعلوا؟', 'What did they do?'],
          ['h', 'كانوا يعملون معًا ويتشاورون، وكتبوا كتاب الحيل، وفيه نحو مئة جهازٍ ذكي، منها أوعيةٌ وألعابٌ تعمل بالماء والهواء.', 'They worked together and shared ideas, and they wrote the Book of Ingenious Devices, with about a hundred clever machines, including vessels and toys worked by water and air.'],
          ['k', 'إذن العصف الذهني أفضل مع الآخرين!', 'So brainstorming is better with other people!'],
          ['h', 'نعم. اطلب من أخيك أو أمّك فكرة واحدة، وقد تكون هي الفائزة.', 'Yes. Ask your brother or your mum for one idea. It might be the winner.'],
          ['k', 'وكيف نختار في النهاية؟', 'And how do we choose in the end?'],
          ['h', 'نقارن كلّ فكرة بقائمة الحاجات ونعطيها نقاطًا. مهمّة اليوم: ارسم ستّ أفكار واختر واحدة. إلى اللقاء!', 'We compare each idea with the list of needs and give it points. Today\'s mission: sketch six ideas and choose one. See you soon!'],
          ['k', 'مع السلامة! ولا تخافوا من الأفكار الغريبة!', 'Bye! And don\'t be afraid of strange ideas!']
        ]
      }
    },

    /* ───────── 4. Plan with measurements ───────── */
    {
      id: 'plan-measure', icon: '📐', tag: 'process',
      t: ['ارسم خطّتك بالقياسات', 'Draw a plan with measurements'],
      sub: ['قِس مرّتين واقطع مرّة', 'Measure twice, cut once'],
      pg: [
        ['📏📱', 'أمسك يوسف المقصّ ليقصّ الكرتون فورًا، فقالت العمّة: «انتظر! المهندسون يقولون: قِس مرّتين واقطع مرّة واحدة». وأعطته مسطرة.', 'Yusuf grabbed the scissors to cut the cardboard straight away, but Aunt Huda said, "Wait! Engineers say: measure twice, cut once." And she handed him a ruler.'],
        ['📱📏', 'قاس يوسف جهاز الجدّة: العرض نحو ٢٥ سم، والسُّمك نحو ١ سم. ثمّ قاس سلك الشحن ليعرف كم يجب أن تكون الفتحة.', 'Yusuf measured Grandma\'s tablet: about 25 cm wide and about 1 cm thick. Then he measured the charging plug to know how big the gap should be.'],
        ['✏️📄', 'رسم خطّته: مثلّثان جانبيّان من الكرتون، ولوحٌ للظهر، وحافّةٌ في الأسفل ارتفاعها ٢ سم، وفتحة في الوسط. وكتب القياس على كلّ قطعة.', 'He drew his plan: two side triangles of cardboard, a back panel, a 2 cm lip along the bottom, and a gap in the middle. He wrote the measurement on every piece.'],
        ['🕌📐', 'حكت له العمّة عن <b>معمار سنان</b>، كبير المعماريّين في الدولة العثمانية، الذي بنى جامع السليمانية في إسطنبول. قبابٌ ضخمة لا تقوم إلا على حساباتٍ وخططٍ دقيقة.', 'Aunt Huda told him about <b>Mimar Sinan</b>, the chief architect of the Ottoman state, who built the Süleymaniye Mosque in Istanbul. Huge domes like those only stand because of careful calculations and plans.'],
        ['🌈🧱', 'وأرته سرًّا: «القوس والقبّة ينقلان الثقل إلى الجوانب ثمّ إلى الأرض، لذلك صمدت المساجد القديمة مئات السنين».', 'And she showed him a secret: "Arches and domes pass the weight out to the sides and down into the ground. That\'s why old mosques have stood for hundreds of years."']
      ],
      learn: ['<b>الخطّة الهندسية</b> رسمٌ واضح لكلّ قطعة مع قياسها (الطول والعرض والارتفاع بالسنتيمتر). الرسم يوفّر الموادّ والوقت، ويكشف الأخطاء قبل أن نقصّ. وتذكّر: <b>القوس</b> يوزّع الثقل على جانبيه نحو الأرض.', 'An <b>engineering plan</b> is a clear drawing of every piece with its measurements (length, width and height in centimetres). Drawing saves material and time and shows mistakes before we cut. And remember: an <b>arch</b> spreads weight out through its sides into the ground.'],
      islam: ['قال الله تعالى: ﴿إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ﴾ (القمر: ٤٩). كلّ شيءٍ في خلق الله بمقدارٍ دقيق، ونحن نتعلّم من ذلك أن نقيس ونقدّر بعناية. وعلى هذا سار مهندسون مسلمون مثل معمار سنان، الذي بنى جامع السليمانية في إسطنبول وجامع السليمية في أدرنة.', 'Allah says: "Indeed, We have created everything in due measure" (al-Qamar 54:49). Everything in Allah\'s creation has a precise measure, and from that we learn to measure and plan with care. Muslim engineers walked this path, like Mimar Sinan, who built the Süleymaniye Mosque in Istanbul and the Selimiye Mosque in Edirne.'],
      src: ['القمر: ٤٩', 'Al-Qamar 54:49'],
      mission: ['بالمسطرة والقلم، قِس الشيء الذي يتعلّق به اختراعك (الجهاز، الأقلام، العلبة…). ارسم خطّتك على ورقة الأنشطة واكتب قياس كلّ قطعة بالسنتيمتر. تحدٍّ إضافي: ابنِ قوسًا من شريط كرتون فوق كتابين وضع عليه ممحاة.', 'With a ruler and pencil, measure the thing your invention is for (the tablet, the pencils, the box…). Draw your plan on the worksheet and write each piece\'s measurement in centimetres. Extra challenge: bend a strip of card into an arch between two books and rest an eraser on top.'],
      q: ['لماذا يقول المهندسون «قِس مرّتين واقطع مرّة»؟', 'Why do engineers say "measure twice, cut once"?'],
      o: [['لأنّ القصّ ممتع أكثر', 'Because cutting is more fun'], ['لأنّ الخطأ في القياس يضيّع الموادّ ويصعب إصلاحه بعد القصّ', 'Because a measuring mistake wastes material and is hard to fix after cutting', 1], ['لأنّ المسطرة جميلة', 'Because rulers are pretty']],
      fb: ['أحسنت! القطعة المقصوصة خطأً لا تعود. التأكّد من القياس يوفّر الكرتون والوقت والتعب.', 'Well done! A piece cut wrongly can\'t be uncut. Checking the measurement saves cardboard, time and effort.'],
      podcast: {
        title: ['قِس مرّتين', 'Measure twice'],
        lines: [
          ['h', 'أهلًا بكم في بودكاست المهندس الصغير! اليوم معنا أداة صغيرة لكنّها مهمّة جدًّا.', 'Welcome to The Little Engineer! Today we have a small but very important tool.'],
          ['k', 'أعرفها! المسطرة. لقد أوقفتِني يا عمّة قبل أن أقصّ الكرتون!', 'I know! The ruler. You stopped me before I cut the cardboard, Aunt Huda!'],
          ['h', 'نعم، لأنّ المهندسين يقولون: قِس مرّتين واقطع مرّة واحدة.', 'Yes, because engineers say: measure twice, cut once.'],
          ['k', 'وماذا كان سيحدث لو قصصت مباشرة؟', 'What would have happened if I cut straight away?'],
          ['h', 'ربّما يكون الحامل أضيق من الجهاز بسنتيمتر واحد، فلا يدخل فيه. وعندها نرمي الكرتون ونبدأ من جديد.', 'Maybe the stand would be one centimetre narrower than the tablet, so it wouldn\'t fit. Then we\'d throw away the cardboard and start again.'],
          ['k', 'سنتيمتر واحد فقط يفسد كلّ شيء؟', 'Just one centimetre can ruin everything?'],
          ['h', 'أحيانًا نعم. لذلك نرسم الخطّة ونكتب القياس على كلّ قطعة.', 'Sometimes, yes. That\'s why we draw a plan and write the measurement on every piece.'],
          ['k', 'هل المهندسون الكبار يرسمون أيضًا؟', 'Do grown-up engineers draw too?'],
          ['h', 'طبعًا. معمار سنان، كبير المعماريّين العثمانيّين، بنى جامع السليمانية في إسطنبول. قبابه الضخمة تحتاج حساباتٍ دقيقة جدًّا.', 'Of course. Mimar Sinan, the chief Ottoman architect, built the Süleymaniye Mosque in Istanbul. Its huge domes needed very careful calculations.'],
          ['k', 'وكيف تبقى القبّة الثقيلة في الأعلى ولا تسقط؟', 'How does a heavy dome stay up there without falling?'],
          ['h', 'سؤال رائع! القبّة والقوس يدفعان الثقل إلى الجوانب ثمّ إلى الأرض. جرّب أن تضغط على قوسٍ من الكرتون، ستشعر بقدميه تتباعدان.', 'Great question! A dome or an arch pushes its weight out to the sides and down into the ground. Press on a cardboard arch and you\'ll feel its feet pushing apart.'],
          ['k', 'إذن لو وضعت كتابًا عند كلّ قدم، يصير القوس أقوى!', 'So if I put a book at each foot, the arch gets stronger!'],
          ['h', 'بالضبط، أنت تفكّر كمهندس. والله تعالى يقول: إنّا كلّ شيءٍ خلقناه بقدر. كلّ شيءٍ بمقدار.', 'Exactly, you\'re thinking like an engineer. And Allah says: Indeed, We created everything in due measure. Everything has its measure.'],
          ['h', 'مهمّة اليوم: قِس، وارسم خطّتك، واكتب القياسات على كلّ قطعة. إلى اللقاء!', 'Today\'s mission: measure, draw your plan, and write the measurements on every piece. See you next time!'],
          ['k', 'مع السلامة! ولا تنسوا المسطرة!', 'Bye! And don\'t forget your ruler!']
        ]
      }
    },

    /* ───────── 5. Materials & the triangle ───────── */
    {
      id: 'materials-shapes', icon: '🔺', tag: 'science',
      t: ['الموادّ وسرّ المثلّث', 'Materials and the secret of the triangle'],
      sub: ['قويّ، خفيف، ومُعاد تدويره', 'Strong, light and recycled'],
      pg: [
        ['📦♻️', 'فتح يوسف «صندوق المهندس»: كرتونٌ من علب قديمة، أوراق، شريط لاصق، مصّاصات، أكواب ورقية، وخيط. قالت العمّة: «أفضل الموادّ ما كان آمنًا ومتوفّرًا ومُعاد استعماله».', 'Yusuf opened the "engineer\'s box": cardboard from old boxes, paper, tape, straws, paper cups and string. Aunt Huda said, "The best materials are safe, easy to find, and reused."'],
        ['📄🌀', 'تجربة: ورقةٌ مسطّحة تنثني فورًا. لكن حين طواها يوسف كالمروحة، أو لفّها أنبوبًا، صارت أقوى بكثير! الشكل يغيّر القوّة، لا المادّة فقط.', 'An experiment: a flat sheet of paper flops straight away. But when Yusuf folded it like a fan, or rolled it into a tube, it became much stronger! Shape changes strength, not just material.'],
        ['⬜🔺', 'ثمّ صنع مربّعًا من أربع مصّاصات، وضغط على زاويته فانطوى كالمعيّن. أمّا المثلّث من ثلاث مصّاصات فلم يتغيّر شكله أبدًا!', 'Then he made a square from four straws and pushed on a corner. It squashed into a slanted diamond. But a triangle of three straws kept its shape completely!'],
        ['🗼🌉', 'قالت العمّة: «لهذا ترى المثلّثات في الجسور الحديدية والرافعات وأبراج الكهرباء. المثلّث لا يتغيّر شكله إلا إذا انكسر أحد أضلاعه».', 'Aunt Huda said, "That\'s why you see triangles in steel bridges, cranes and electricity pylons. A triangle can\'t change shape unless one of its sides breaks."'],
        ['🔺📱', 'قرّر يوسف: جانبا الحامل مثلّثان من كرتون مزدوج (طبقتان)، فيصير قويًّا وخفيفًا في الوقت نفسه.', 'Yusuf decided: the sides of the stand would be triangles of double-layer cardboard, so it would be strong and light at the same time.']
      ],
      learn: ['نختار المادّة حسب الحاجة: <b>قويّة</b> لتحمل، <b>خفيفة</b> لتُحمَل، و<b>آمنة</b>. و<b>الشكل</b> يصنع القوّة: الورق المطويّ أو الملفوف أقوى من المسطّح، و<b>المثلّث</b> أثبت الأشكال لأنّه لا ينطوي إذا ضُغط، بينما المربّع ينطوي.', 'We choose materials for the job: <b>strong</b> to hold, <b>light</b> to carry, and <b>safe</b>. And <b>shape</b> creates strength: folded or rolled paper is stronger than flat paper, and the <b>triangle</b> is the most rigid shape because it doesn\'t squash when pushed, while a square does.'],
      islam: ['اختار ذو القرنين موادّه بحكمة لبناء السدّ: ﴿قَالَ مَا مَكَّنِّي فِيهِ رَبِّي خَيْرٌ فَأَعِينُونِي بِقُوَّةٍ أَجْعَلْ بَيْنَكُمْ وَبَيْنَهُمْ رَدْمًا ۝ آتُونِي زُبَرَ الْحَدِيدِ حَتَّىٰ إِذَا سَاوَىٰ بَيْنَ الصَّدَفَيْنِ قَالَ انفُخُوا حَتَّىٰ إِذَا جَعَلَهُ نَارًا قَالَ آتُونِي أُفْرِغْ عَلَيْهِ قِطْرًا﴾ (الكهف: ٩٥–٩٦). قطعُ الحديد، ثمّ النحاس المذاب فوقها: مادّتان معًا صنعتا سدًّا عظيمًا، وطلب العون من الناس فعملوا فريقًا.', 'Dhul-Qarnayn chose his materials wisely to build the barrier: "He said, What my Lord has granted me is better, so help me with strength and I will build a barrier between you and them. Bring me blocks of iron. Then, when he had levelled them between the two mountainsides, he said: Blow! When he had made it like fire, he said: Bring me molten copper to pour over it" (al-Kahf 18:95–96). Blocks of iron, then molten copper poured over them: two materials together made a mighty barrier, and he asked the people to help, so they worked as a team.'],
      src: ['الكهف: ٩٥–٩٦', 'Al-Kahf 18:95–96'],
      mission: ['تجربة المثلّث: اصنع مربّعًا من ٤ مصّاصات ومثلّثًا من ٣ مصّاصات (اربط الزوايا بالشريط اللاصق أو بخيط). اضغط على كلّ واحد بلطف: أيّهما يحافظ على شكله؟ ثمّ اجمع موادّ مشروعك من الكرتون والورق المستعمل. (المقصّ مع شخصٍ كبير.)', 'Triangle test: make a square from 4 straws and a triangle from 3 straws (join the corners with tape or string). Press gently on each one: which keeps its shape? Then gather the materials for your project from used cardboard and paper. (Scissors only with an adult.)'],
      q: ['لماذا نرى المثلّثات كثيرًا في الجسور والرافعات؟', 'Why do we often see triangles in bridges and cranes?'],
      o: [['لأنّ شكلها جميل فقط', 'Only because they look nice'], ['لأنّها تحتاج حديدًا أكثر', 'Because they need more steel'], ['لأنّ المثلّث لا ينطوي إذا ضُغط عليه', 'Because a triangle doesn\'t squash when pushed', 1]],
      fb: ['ممتاز! المربّع يميل وينطوي، أمّا المثلّث فيبقى ثابتًا ما دامت أضلاعه سليمة. لذلك هو بطل الجسور والأبراج.', 'Excellent! A square leans and squashes, but a triangle stays firm as long as its sides hold. That\'s why it\'s the hero of bridges and towers.'],
      podcast: {
        title: ['المثلّث البطل', 'The hero triangle'],
        lines: [
          ['h', 'السلام عليكم يا مهندسين! اليوم نفتح صندوق الموادّ ونكتشف سرًّا عجيبًا.', 'Assalamu alaikum, engineers! Today we open the materials box and discover an amazing secret.'],
          ['k', 'يا عمّة، صنعت مربّعًا من المصّاصات فانطوى فورًا، لكنّ المثلّث لم يتحرّك!', 'Aunt Huda, I made a square out of straws and it squashed straight away, but the triangle didn\'t move!'],
          ['h', 'هذا هو السرّ! المثلّث لا يستطيع أن يغيّر شكله إلا إذا انكسر أحد أضلاعه.', 'That\'s the secret! A triangle can\'t change its shape unless one of its sides breaks.'],
          ['k', 'ولهذا الجسور الحديدية مليئة بالمثلّثات؟', 'Is that why steel bridges are full of triangles?'],
          ['h', 'نعم، والرافعات، وأبراج الكهرباء، وحتّى بعض أسقف البيوت.', 'Yes, and cranes, and electricity pylons, and even some house roofs.'],
          ['k', 'وجرّبت الورقة أيضًا. المسطّحة ضعيفة، لكنّ المطويّة كالمروحة قويّة جدًّا.', 'I tried the paper too. Flat paper is weak, but paper folded like a fan is really strong.'],
          ['h', 'لأنّ الطيّات تجعل الورقة أسمك في اتّجاه الضغط. الكرتون نفسه فيه طبقة متموّجة في الداخل لهذا السبب.', 'Because the folds make the paper deeper in the direction you press. Cardboard has a wavy layer inside for exactly that reason.'],
          ['k', 'حقًّا؟ سأفتح علبة قديمة وأنظر!', 'Really? I\'ll open an old box and look!'],
          ['h', 'افعل، لكن اطلب من أحد الكبار أن يساعدك في القصّ. والآن، أعدتك بإكمال قصّة ذي القرنين.', 'Do, but ask a grown-up to help with the cutting. Now, I promised to finish the story of Dhul-Qarnayn.'],
          ['k', 'نعم! ماذا بنى للقوم؟', 'Yes! What did he build for the people?'],
          ['h', 'طلب منهم قطع الحديد، فرصّها بين الجبلين، ثمّ أحماها بالنار، ثمّ صبّ عليها النحاس المذاب. مادّتان معًا صنعتا سدًّا قويًّا.', 'He asked them for blocks of iron, stacked them between the two mountains, heated them with fire, then poured molten copper over them. Two materials together made a strong barrier.'],
          ['k', 'وهو لم يعمل وحده، صحيح؟', 'And he didn\'t work alone, did he?'],
          ['h', 'صحيح. قال لهم: فأعينوني بقوّة. المهندس الذكيّ يعمل مع فريق.', 'Right. He told them, help me with strength. A smart engineer works with a team.'],
          ['k', 'وأنا فريقي العمّة هدى وأختي الصغيرة!', 'And my team is Aunt Huda and my little sister!'],
          ['h', 'فريقٌ رائع! مهمّة اليوم: اختبر المربّع والمثلّث، واجمع موادّ مشروعك. إلى اللقاء!', 'A wonderful team! Today\'s mission: test the square and the triangle, and collect your project materials. Goodbye!'],
          ['k', 'مع السلامة! عاش المثلّث!', 'Bye! Long live the triangle!']
        ]
      }
    },

    /* ───────── 6. Build a prototype + simple machines ───────── */
    {
      id: 'build-prototype', icon: '🛠️', tag: 'science',
      t: ['ابنِ نموذجك الأوّل', 'Build your first prototype'],
      sub: ['والآلات البسيطة من حولنا', 'And the simple machines around us'],
      pg: [
        ['📦✂️', 'جاء وقت البناء! رسم يوسف المثلّثين على الكرتون بالقلم، وقصّتهما أمّه بالمقصّ الكبير، ثمّ ثبّت القطع بالشريط اللاصق خطوةً خطوة حسب الخطّة.', 'Time to build! Yusuf traced the two triangles onto the cardboard in pencil, his mum cut them out with the big scissors, and then he taped the pieces together step by step, following the plan.'],
        ['🧪📦', 'قالت العمّة: «هذا اسمه <b>نموذج أوّلي</b>: نسخةٌ سريعة رخيصة نتعلّم منها. لا يجب أن يكون جميلًا، يجب أن يعلّمنا».', 'Aunt Huda said, "This is called a <b>prototype</b>: a quick, cheap version we learn from. It doesn\'t have to be pretty. It has to teach us something."'],
        ['🛝📱', 'نظر يوسف إلى حامله المائل وقال: «إنّه يشبه الزلّاقة!» قالت العمّة: «صحيح! هذا <b>سطحٌ مائل</b>، وهو من الآلات البسيطة. المنحدر يجعل رفع الأشياء أسهل لأنّنا ندفع بقوّة أقلّ مسافةً أطول».', 'Yusuf looked at his slanted stand and said, "It looks like a slide!" Aunt Huda said, "Right! That\'s a <b>ramp</b>, one of the simple machines. A ramp makes lifting easier because we push with less force over a longer distance."'],
        ['⚖️🎡', 'ثمّ عدّا الآلات البسيطة في البيت: <b>الرافعة</b> مثل الأرجوحة ذات الكفّتين، <b>العجلة والمحور</b> في مقبض الباب وعجلات الحقيبة، و<b>البكرة</b> التي ترفع الدلو من البئر أو العلم إلى أعلى السارية.', 'Then they counted the simple machines at home: the <b>lever</b>, like a seesaw; the <b>wheel and axle</b> in a doorknob and the wheels of a suitcase; and the <b>pulley</b> that lifts a bucket from a well or a flag up a pole.'],
        ['🌟📱', 'في ٣٠ دقيقة كان النموذج الأوّل جاهزًا. وضع يوسف هاتف أبيه عليه بحذر… فوقف! لكنّه كان يهتزّ قليلًا. «سنختبره غدًا جيّدًا»، قالت العمّة.', 'In 30 minutes the first prototype was ready. Yusuf carefully put his dad\'s phone on it… and it stood! But it wobbled a little. "Tomorrow we\'ll test it properly," said Aunt Huda.']
      ],
      learn: ['<b>النموذج الأوّلي</b> نسخةٌ أولى سريعة نبنيها لنتعلّم ونحسّن. و<b>الآلات البسيطة</b> تجعل العمل أسهل: <b>الرافعة</b> (كلّما ابتعدتَ عن نقطة الارتكاز احتجتَ قوّة أقلّ)، <b>السطح المائل</b> (قوّة أقلّ ومسافة أطول)، <b>البكرة</b> (تغيّر اتّجاه الشدّ فنرفع بالسحب إلى الأسفل)، و<b>العجلة والمحور</b> (تسهّل الدوران والحركة).', 'A <b>prototype</b> is a quick first version we build to learn and improve. <b>Simple machines</b> make work easier: the <b>lever</b> (the farther from the pivot you push, the less force you need), the <b>ramp</b> (less force over a longer distance), the <b>pulley</b> (changes the direction of the pull, so we lift by pulling down), and the <b>wheel and axle</b> (makes turning and moving easier).'],
      islam: ['أمر الله تعالى نوحًا عليه السلام أن يبني السفينة: ﴿وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا﴾ (هود: ٣٧). فبناها بيديه خطوةً بعد خطوة كما أمره الله، وصبر وأكمل عمله حتّى حين سخر منه قومه.', 'Allah commanded the Prophet Nuh (peace be upon him) to build the ark: "And build the ship under Our eyes and Our inspiration" (Hud 11:37). He built it with his own hands, step by step, as Allah instructed him, and he stayed patient and finished his work even when his people mocked him.'],
      src: ['هود: ٣٧', 'Hud 11:37'],
      mission: ['ابنِ النموذج الأوّلي لمشروعك في ٣٠ دقيقة من الكرتون والشريط اللاصق حسب خطّتك (القصّ مع شخصٍ كبير). تحدٍّ صغير: اصنع منحدرًا من الكرتون فوق كتاب، ودحرج عليه سيّارة لعبة، ثمّ اجعله أعلى بكتابٍ ثانٍ: ماذا تغيّر؟ ثمّ ابحث في البيت عن رافعة وعجلة ومحور.', 'Build the prototype of your project in 30 minutes with cardboard and tape, following your plan (cutting with an adult). Mini challenge: make a cardboard ramp on one book and roll a toy car down it, then raise it with a second book: what changed? Then hunt around the house for a lever and a wheel and axle.'],
      q: ['أيّ هذه الأشياء يعمل كرافعة؟', 'Which of these works like a lever?'],
      o: [['الأرجوحة ذات الكفّتين (السيسو)', 'A seesaw', 1], ['كوب الماء', 'A glass of water'], ['الوسادة', 'A pillow']],
      fb: ['صحيح! الأرجوحة لوحٌ يدور حول نقطة ارتكاز في الوسط، وهذه هي الرافعة. لهذا يستطيع طفلٌ صغير أن يرفع أخاه الأكبر إذا جلس بعيدًا عن الوسط.', 'Right! A seesaw is a board turning around a pivot in the middle, and that is a lever. That\'s why a small child can lift a bigger brother by sitting farther from the middle.'],
      podcast: {
        title: ['آلاتٌ بسيطة وأفكارٌ كبيرة', 'Simple machines, big ideas'],
        lines: [
          ['h', 'أهلًا وسهلًا بكم! اليوم يوم البناء. يوسف، هل صنعت النموذج الأوّلي؟', 'Welcome, everyone! Today is building day. Yusuf, did you make your prototype?'],
          ['k', 'نعم! وأمّي ساعدتني في القصّ. شكله غريب قليلًا لكنّه يقف!', 'Yes! My mum helped me with the cutting. It looks a bit strange, but it stands up!'],
          ['h', 'ممتاز. النموذج الأوّلي لا يجب أن يكون جميلًا. يجب أن يعلّمنا.', 'Excellent. A prototype doesn\'t have to be pretty. It has to teach us.'],
          ['k', 'ولاحظت أنّه يشبه الزلّاقة!', 'And I noticed it looks like a slide!'],
          ['h', 'أحسنت الملاحظة. هذا سطحٌ مائل، وهو واحد من الآلات البسيطة.', 'Good noticing. That\'s a ramp, and it\'s one of the simple machines.'],
          ['k', 'آلات؟ لكن ليس فيه أيّ محرّك!', 'Machines? But it doesn\'t have a motor!'],
          ['h', 'الآلة البسيطة لا تحتاج محرّكًا. هي شكلٌ ذكيّ يجعل العمل أسهل. مثل الأرجوحة، إنّها رافعة.', 'A simple machine doesn\'t need a motor. It\'s a clever shape that makes work easier. Like a seesaw, which is a lever.'],
          ['k', 'آه! لذلك عندما أجلس بعيدًا عن الوسط أستطيع رفع أخي الكبير!', 'Oh! That\'s why when I sit far from the middle I can lift my big brother!'],
          ['h', 'بالضبط. والبكرة ترفع الدلو من البئر، والعجلة والمحور في مقبض الباب وعجلات الحقيبة.', 'Exactly. A pulley lifts a bucket out of a well, and there\'s a wheel and axle in a doorknob and in suitcase wheels.'],
          ['k', 'الآلات البسيطة في كلّ مكان!', 'Simple machines are everywhere!'],
          ['h', 'نعم. وهل تعرف من بنى أعظم نموذجٍ في التاريخ بأمر الله؟', 'Yes. And do you know who built a great ship by Allah\'s command?'],
          ['k', 'نوح عليه السلام! بنى السفينة.', 'The Prophet Nuh, peace be upon him! He built the ark.'],
          ['h', 'قال الله له: واصنع الفلك بأعيننا ووحينا. فبناها خطوةً خطوة، وصبر حتّى حين سخر منه قومه.', 'Allah told him: Build the ship under Our eyes and Our inspiration. He built it step by step, and stayed patient even when his people laughed at him.'],
          ['k', 'إذن لو ضحك أحدٌ من نموذجي الغريب، أكمل ولا أحزن.', 'So if someone laughs at my strange prototype, I keep going and don\'t feel sad.'],
          ['h', 'تمامًا. مهمّة اليوم: ابنِ نموذجك، وابحث عن رافعة وعجلة في بيتك. إلى اللقاء!', 'Exactly. Today\'s mission: build your prototype, and find a lever and a wheel in your home. See you next time!'],
          ['k', 'مع السلامة! وابنوا بأمان مع الكبار!', 'Bye! And build safely with a grown-up!']
        ]
      }
    },

    /* ───────── 7. Test & improve: bridges & towers ───────── */
    {
      id: 'test-improve', icon: '🌉', tag: 'project',
      t: ['اختبِر وحسِّن', 'Test and improve'],
      sub: ['الجسور والأبراج والتوازن', 'Bridges, towers and balance'],
      pg: [
        ['📱💥', 'يوم الاختبار! وضع يوسف الجهاز اللوحي على الحامل ولمس الشاشة كما تفعل الجدّة… فانزلق الجهاز إلى الأمام وسقط على الوسادة! احمرّ وجه يوسف.', 'Test day! Yusuf put the tablet on the stand and tapped the screen the way Grandma does… and the tablet slid forward and fell onto the cushion! Yusuf\'s face went red.'],
        ['🤗📝', 'قالت العمّة مبتسمة: «رائع! هذا ليس فشلًا، هذه <b>معلومة</b>. ماذا تعلّمنا؟» فكّر يوسف: «الحافّة السفلية قصيرة، والقاعدة ضيّقة».', 'Aunt Huda smiled. "Brilliant! That\'s not failure, that\'s <b>information</b>. What did we learn?" Yusuf thought. "The bottom lip is too short, and the base is too narrow."'],
        ['🔧🔺', 'حسّن يوسف التصميم: رفع الحافّة إلى ٣ سم، ووسّع القاعدة، وأضاف مثلّثًا ثالثًا في الوسط. ثمّ اختبر مرّة ثانية وثالثة، وسجّل كلّ نتيجة في جدول.', 'Yusuf improved the design: he raised the lip to 3 cm, widened the base and added a third triangle in the middle. Then he tested it a second and third time, writing every result in a table.'],
        ['🗼🥤', 'وفي الاستراحة، تحدٍّ: برجٌ من المصّاصات والأكواب! سقط البرج العالي النحيف، أمّا البرج ذو <b>القاعدة العريضة</b> والمثلّثات فصمد. «القاعدة العريضة والثقل في الأسفل يصنعان التوازن».', 'During the break, a challenge: a tower of straws and cups! The tall thin tower fell, but the tower with a <b>wide base</b> and triangles stood firm. "A wide base and weight at the bottom create balance."'],
        ['🌉🪙', 'ثمّ <b>تحدّي الجسر</b>: ورقة بين كومتين من الكتب. المسطّحة حملت قطعة نقدية أو اثنتين، أمّا المطويّة كالمروحة فحملت أكثر من عشر قطع! صاح يوسف: «الشكل هو السرّ!»', 'Then the <b>bridge challenge</b>: one sheet of paper between two piles of books. The flat sheet held one or two coins, but the fan-folded one held more than ten! Yusuf shouted, "The shape is the secret!"']
      ],
      learn: ['<b>الاختبار</b> يعني أن نجرّب الاختراع كما سيُستعمل فعلًا، ونقيس النتيجة بقائمة الحاجات. <b>الخطأ جزءٌ من التعلّم</b>: كلّ محاولة تعطينا معلومة تحسّن التصميم. وللثبات: <b>قاعدة عريضة</b>، و<b>ثقلٌ في الأسفل</b>، و<b>مثلّثات</b> في الهيكل.', '<b>Testing</b> means trying the invention the way it will really be used and checking the result against the list of needs. <b>Mistakes are part of learning</b>: every try gives us information to improve the design. For stability: a <b>wide base</b>, <b>weight low down</b>, and <b>triangles</b> in the frame.'],
      islam: ['قال رسول الله ﷺ: «إنّ الله يحبّ إذا عمل أحدكم عملًا أن يتقنه». الإتقان أن نختبر ونحسّن حتّى يصبح عملنا جيّدًا ونافعًا، لا أن نتوقّف عند أوّل محاولة.', 'The Messenger of Allah ﷺ said: "Allah loves that when one of you does a job, he does it with excellence (itqan)." Itqan means testing and improving until our work is good and useful, not stopping at the first try.'],
      src: ['رواه البيهقي في شعب الإيمان وأبو يعلى، وحسّنه الألباني في صحيح الجامع (١٨٨٠)', 'Narrated by al-Bayhaqi in Shu\'ab al-Iman and by Abu Ya\'la; graded hasan by al-Albani in Sahih al-Jami\' (1880)'],
      mission: ['اختبر نموذجك ٣ مرّات كما سيُستعمل فعلًا، وسجّل في جدول ورقة الأنشطة: ماذا حدث؟ وماذا ستغيّر؟ ثمّ قم بتحدّي الجسر: ورقة واحدة بين كومتين من الكتب على بُعد ٢٠ سم. جرّب المسطّحة ثمّ المطويّة ثمّ الملفوفة، وعُدّ القطع النقدية. هل يصل جسرك إلى ١٠ قطع؟', 'Test your prototype 3 times the way it will really be used and record in the worksheet table: What happened? What will you change? Then try the bridge challenge: one sheet of paper between two piles of books 20 cm apart. Try flat, then fan-folded, then rolled, and count the coins. Can your bridge hold 10?'],
      q: ['سقط اختراعك في الاختبار الأوّل. ماذا يفعل المهندس؟', 'Your invention failed its first test. What does an engineer do?'],
      o: [['يحزن ويرمي المشروع', 'Feels sad and throws the project away'], ['يسأل: ماذا تعلّمت؟ ثمّ يحسّن ويختبر مرّة أخرى', 'Asks "What did I learn?", then improves and tests again', 1], ['يقول إنّ الاختبار كان خطأ', 'Says the test was wrong']],
      fb: ['أحسنت! كلّ اختبارٍ فاشل يعطيك معلومة ثمينة. هكذا يعمل المهندسون: اختبار، تحسين، ثمّ اختبار من جديد، حتّى يصل العمل إلى الإتقان.', 'Well done! Every failed test gives you precious information. That\'s how engineers work: test, improve, test again, until the work reaches excellence.'],
      podcast: {
        title: ['الفشل صديق المهندس', 'Failure is an engineer\'s friend'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! حلقة اليوم عن لحظةٍ يخاف منها الجميع: لحظة السقوط!', 'Assalamu alaikum, friends! Today\'s episode is about a moment everyone is scared of: the moment it falls!'],
          ['k', 'يا عمّة، الجهاز سقط من على حاملي أمس. شعرت بالخجل.', 'Aunt Huda, the tablet fell off my stand yesterday. I felt embarrassed.'],
          ['h', 'لا داعي للخجل أبدًا. المهندسون يختبرون كي يكتشفوا الأخطاء قبل أن يستعمل الناس الاختراع.', 'No need to feel embarrassed at all. Engineers test so they can find the mistakes before people use the invention.'],
          ['k', 'يعني السقوط كان شيئًا جيّدًا؟', 'So the fall was a good thing?'],
          ['h', 'نعم! لأنّه أخبرك أنّ الحافّة قصيرة والقاعدة ضيّقة. هذه معلومة، وليست فشلًا.', 'Yes! Because it told you the lip was too short and the base too narrow. That\'s information, not failure.'],
          ['k', 'فرفعت الحافّة إلى ثلاثة سنتيمترات، ووسّعت القاعدة، وأضفت مثلّثًا. والآن لا يسقط!', 'So I raised the lip to three centimetres, widened the base and added a triangle. Now it doesn\'t fall!'],
          ['h', 'رائع! وماذا عن برج المصّاصات؟', 'Wonderful! And what about the straw tower?'],
          ['k', 'البرج النحيف سقط. أمّا البرج ذو القاعدة العريضة فبقي واقفًا.', 'The thin tower fell over. But the tower with the wide base stayed up.'],
          ['h', 'لأنّ القاعدة العريضة والثقل في الأسفل يجعلان البرج متوازنًا. انظر إلى الجبال، أسفلها أعرض من قمّتها.', 'Because a wide base and weight at the bottom keep a tower balanced. Look at mountains: they\'re wider at the bottom than at the top.'],
          ['k', 'وفي تحدّي الجسر، الورقة المطويّة حملت أكثر من عشر قطع نقدية!', 'And in the bridge challenge, the folded paper held more than ten coins!'],
          ['h', 'نفس الورقة، شكلٌ مختلف، وقوّةٌ أكبر بكثير. هذا هو سحر الهندسة.', 'The same paper, a different shape, and much more strength. That\'s the magic of engineering.'],
          ['k', 'متى أتوقّف عن التحسين؟', 'When do I stop improving?'],
          ['h', 'عندما ينجح الاختراع في كلّ حاجات المستخدم. والنبيّ ﷺ قال: إنّ الله يحبّ إذا عمل أحدكم عملًا أن يتقنه.', 'When the invention meets all the user\'s needs. And the Prophet, peace be upon him, said: Allah loves that when one of you does a job, he does it with excellence.'],
          ['k', 'الإتقان! سأجعل حامل جدّتي متقنًا.', 'Itqan! I\'ll make Grandma\'s stand excellent.'],
          ['h', 'مهمّة اليوم: اختبر نموذجك ثلاث مرّات، وجرّب تحدّي الجسر، وسجّل النتائج. إلى اللقاء!', 'Today\'s mission: test your prototype three times, try the bridge challenge, and write down the results. See you soon!'],
          ['k', 'مع السلامة! ولا تخافوا من السقوط، تعلّموا منه!', 'Bye! Don\'t be scared when it falls. Learn from it!']
        ]
      }
    },

    /* ───────── 8. Present your invention (final project) ───────── */
    {
      id: 'present-invention', icon: '🏆', tag: 'project',
      t: ['اعرض اختراعك', 'Present your invention'],
      sub: ['مشروعي النهائي', 'My final project'],
      pg: [
        ['🎁👵', 'جاء يوم الجمعة. حمل يوسف حامله المتقن إلى بيت الجدّة فاطمة. لكنّ العمّة قالت: «المهندس لا يسلّم اختراعه فقط، بل يشرحه أيضًا».', 'Friday came. Yusuf carried his finished stand to Grandma Fatima\'s house. But Aunt Huda said, "An engineer doesn\'t just hand over an invention. They explain it too."'],
        ['🗒️🎤', 'جهّز يوسف عرضًا قصيرًا من أربع جمل: <b>المشكلة</b> (الجهاز يسقط)، <b>الحلّ</b> (حامل بمثلّثات)، <b>ماذا تعلّمت من الاختبار</b> (الحافّة والقاعدة)، و<b>كيف نستعمله</b>.', 'Yusuf prepared a short talk of four sentences: <b>the problem</b> (the tablet falls), <b>the solution</b> (a stand with triangles), <b>what I learned from testing</b> (the lip and the base), and <b>how to use it</b>.'],
        ['📐📜', 'وضع بجانبه ورقة الخطّة وجدول الاختبارات وصور النموذج الأوّل الذي سقط. قالت العمّة: «الناس يحبّون قصّة المحاولات، لا النتيجة فقط».', 'Next to it he placed his plan, his test table and photos of the first prototype that fell. Aunt Huda said, "People love the story of the attempts, not just the result."'],
        ['🐘⏰', 'وحكت له عن <b>الجزري</b>، المهندس المسلم الذي ألّف قبل أكثر من ثمانمئة سنة كتابًا عن الآلات الميكانيكية العجيبة، مثل «ساعة الفيل»، ورسم كلّ آلة وشرح طريقة صنعها حتّى يتعلّم منها غيره.', 'She told him about <b>al-Jazari</b>, the Muslim engineer who, more than eight hundred years ago, wrote a book of ingenious mechanical devices, like the famous "elephant clock". He drew every machine and explained how to make it, so others could learn.'],
        ['📱😊', 'وضعت الجدّة جهازها على الحامل، واتّصلت بعمّ يوسف، فظهر وجهها واضحًا وثابتًا. قالت: «جزاك الله خيرًا يا مهندسي الصغير!» وكان ذلك أجمل جائزة.', 'Grandma placed her tablet on the stand and video-called Yusuf\'s uncle. Her face showed up clear and steady. "May Allah reward you, my little engineer!" she said. That was the best prize of all.']
      ],
      learn: ['<b>عرض الاختراع</b> خطوة هندسية حقيقية: نشرح المشكلة، والحلّ، وما تعلّمناه من الاختبار، وكيف يُستعمل. والعرض الجيّد قصير وواضح، ويُظهر المحاولات والتحسينات. وبعد العرض نسأل: «ما الذي يمكن أن يجعله أفضل؟»', '<b>Presenting an invention</b> is a real engineering step: we explain the problem, the solution, what we learned from testing, and how to use it. A good presentation is short and clear and shows the attempts and improvements. Afterwards we ask, "What could make it even better?"'],
      islam: ['المهندس المسلم <b>بديع الزمان الجزري</b> ألّف نحو سنة ١٢٠٦م كتابًا مشهورًا عن الآلات الميكانيكية البديعة، رسم فيه آلاته وشرح صنعها خطوةً خطوة، فنفع الناس بعلمه قرونًا. وندعو كما علّمنا الله تعالى: ﴿وَقُل رَّبِّ زِدْنِي عِلْمًا﴾ (طه: ١١٤).', 'The Muslim engineer <b>Badi al-Zaman al-Jazari</b> completed, around 1206 CE, a famous book of ingenious mechanical devices. He drew his machines and explained how to build them step by step, and his knowledge benefited people for centuries. And we pray as Allah taught us: "And say: My Lord, increase me in knowledge" (Taha 20:114).'],
      src: ['طه: ١١٤ — والجزري: كتاب «الجامع بين العلم والعمل النافع في صناعة الحيل» (نحو ١٢٠٦م)', 'Taha 20:114 — and al-Jazari: The Book of Knowledge of Ingenious Mechanical Devices (c. 1206 CE)'],
      mission: ['<b>مشروعك النهائي:</b> أكمل اختراعك (حامل جهاز، جسر يحمل ١٠ قطع نقدية، منظّم أقلام…) بعد التحسينات. ثمّ اعرضه على أسرتك في ٤ جمل: المشكلة، الحلّ، ماذا تعلّمت من الاختبار، وكيف يُستعمل. أرِهم ورقة الخطّة وجدول الاختبارات، واسألهم: ما الذي يجعله أفضل؟', '<b>Your final project:</b> finish your invention (a tablet stand, a bridge that holds 10 coins, a pencil organiser…) after your improvements. Then present it to your family in 4 sentences: the problem, the solution, what you learned from testing, and how to use it. Show them your plan and your test table, and ask: what would make it better?'],
      q: ['ما الذي يجعل عرض الاختراع جيّدًا؟', 'What makes a good invention presentation?'],
      o: [['أن يكون طويلًا جدًّا ومليئًا بالكلمات الصعبة', 'Being very long and full of hard words'], ['ألّا نذكر المحاولات التي فشلت أبدًا', 'Never mentioning the attempts that failed'], ['أن يشرح المشكلة والحلّ وما تعلّمناه بوضوح', 'Clearly explaining the problem, the solution and what we learned', 1]],
      fb: ['رائع! العرض الواضح القصير الذي يحكي قصّة المحاولات يُفهم الناس ويُلهمهم، كما فعل الجزري حين رسم آلاته وشرحها.', 'Wonderful! A short, clear talk that tells the story of the attempts helps people understand and inspires them, just as al-Jazari did when he drew and explained his machines.'],
      podcast: {
        title: ['يوم العرض الكبير', 'The big presentation day'],
        lines: [
          ['h', 'السلام عليكم يا مهندسين! هذه آخر حلقة في رحلتنا، وهي حلقة الاحتفال.', 'Assalamu alaikum, engineers! This is the last episode of our journey, and it\'s a celebration.'],
          ['k', 'يا عمّة، جدّتي استعملت الحامل! ظهر وجهها واضحًا في المكالمة.', 'Aunt Huda, Grandma used the stand! Her face was really clear on the call.'],
          ['h', 'ما شاء الله! وهل شرحت لها كيف صنعته؟', 'Masha Allah! And did you explain to her how you made it?'],
          ['k', 'نعم، في أربع جمل: المشكلة، والحلّ، وماذا تعلّمت من الاختبار، وكيف تستعمله.', 'Yes, in four sentences: the problem, the solution, what I learned from testing, and how to use it.'],
          ['h', 'هذا عرضٌ مهندسٌ حقيقي. وهل أخبرتها عن النموذج الذي سقط؟', 'That\'s a real engineer\'s presentation. Did you tell her about the prototype that fell?'],
          ['k', 'نعم، وضحكت كثيرًا، وقالت إنّها تحبّ أنّني لم أستسلم.', 'Yes, and she laughed a lot, and said she loves that I didn\'t give up.'],
          ['h', 'الناس يحبّون قصّة المحاولات. هل تعرف من كان يشرح اختراعاته بطريقة رائعة؟', 'People love the story of the attempts. Do you know who explained his inventions brilliantly?'],
          ['k', 'من؟', 'Who?'],
          ['h', 'الجزري، مهندسٌ مسلم ألّف قبل أكثر من ثمانمئة سنة كتابًا عن الآلات الميكانيكية العجيبة.', 'Al-Jazari, a Muslim engineer who wrote a book about amazing mechanical machines more than eight hundred years ago.'],
          ['k', 'وما أعجب آلةٍ فيه؟', 'What was the most amazing machine in it?'],
          ['h', 'كثيرون يحبّون ساعة الفيل، ساعةٌ كبيرة على شكل فيل تعمل بالماء. وقد رسم كلّ آلة وشرح طريقة صنعها حتّى يتعلّم غيره.', 'Lots of people love the elephant clock, a big water-powered clock shaped like an elephant. And he drew every machine and explained how to make it, so others could learn.'],
          ['k', 'إذن العرض والشرح يجعلان العلم ينتقل للناس!', 'So presenting and explaining helps knowledge reach other people!'],
          ['h', 'تمامًا. والآن ما مشروعك القادم يا يوسف؟', 'Exactly. So what\'s your next project, Yusuf?'],
          ['k', 'منظّم لأقلام أختي التي تتدحرج دائمًا! وسأبدأ بالسؤال: ماذا تحتاج هي؟', 'An organiser for my sister\'s pencils that always roll away! And I\'ll start by asking: what does she need?'],
          ['h', 'أحسنت، لقد أصبحت مهندسًا صغيرًا حقًّا. مهمّة اليوم: اعرض اختراعك على أسرتك في أربع جمل. ونقول معًا: ربّ زدني علمًا.', 'Well done, you really are a little engineer now. Today\'s mission: present your invention to your family in four sentences. And let\'s say together: My Lord, increase me in knowledge.'],
          ['k', 'ربّ زدني علمًا! شكرًا يا عمّة هدى، ومع السلامة يا أصدقاء!', 'My Lord, increase me in knowledge! Thank you, Aunt Huda, and goodbye, friends!'],
          ['h', 'مع السلامة يا مهندسينا الصغار. ابنوا، واختبروا، وأتقنوا. في أمان الله!', 'Goodbye, our little engineers. Build, test, and do it with excellence. May Allah keep you safe!']
        ]
      }
    }
  ]
};
