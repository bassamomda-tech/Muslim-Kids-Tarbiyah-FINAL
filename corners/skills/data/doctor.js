/* doctor.js — «صانع المهارات» · الطبيب الصغير — 8 stations + podcast */
window.SKILLS = window.SKILLS || {};
window.SKILLS.doctor = {
  id: 'doctor', icon: '🩺', color: '#C0392B',
  title: ['الطبيب الصغير', 'The Little Doctor'],
  intro: ['تعرّف على جسمك العجيب، وتعلّم عاداتٍ صحيّة حقيقيّة، وكيف تساعد غيرك بأمان: تبقى هادئًا وتُخبر شخصًا كبيرًا تثق به.', 'Discover your amazing body, learn real healthy habits, and find out how to help others safely: stay calm and tell a trusted adult.'],
  mentor: { icon: '👩‍⚕️', name: ['الدكتورة نور', 'Dr. Noor'], say: ['أهلًا بك يا طبيبي الصغير! أنا الدكتورة نور. لن نُعطي دواءً ولن نخاف من شيء؛ سنتعلّم كيف نعتني بأجسامنا، وكيف نكون لطفاء ونطلب المساعدة من الكبار في الوقت المناسب.', 'Welcome, little doctor! I am Dr. Noor. We will not give any medicine and we will not be scared of anything. We will learn how to look after our bodies, how to be kind, and how to ask an adult for help at the right time.'] },
  cast: { h: { icon: '👩‍⚕️', name: ['الدكتورة نور', 'Dr. Noor'], g: 'female' },
          k: { icon: '👦', name: ['يوسف', 'Yusuf'], g: 'male' } },
  goals: [
    ['معرفة حقائق بسيطة صحيحة عن القلب والرئتين والعظام', 'غسل اليدين بالطريقة الصحيحة لمدّة ٢٠ ثانية', 'بناء طبقٍ صحّي وشرب الماء دون إسراف', 'النوم الكافي والحركة كلّ يوم', 'الاهتمام بمشاعر الآخرين وعيادة المريض', 'الإسعاف الآمن للطفل: الهدوء وإخبار شخص كبير والاتصال برقم الطوارئ', 'فهم الفحص الطبّي وأدوات الطبيب دون خوف', 'التعرّف على أطباء مسلمين عظماء وإنجاز مشروع «مساعد الصحّة»'],
    ['Know simple, correct facts about the heart, lungs and bones', 'Wash hands the right way for 20 seconds', 'Build a healthy plate and drink water without excess', 'Get enough sleep and move every day', 'Care about how others feel and visit the sick', 'Safe first aid for a child: stay calm, tell an adult, call the emergency number', 'Understand a check-up and a doctor\'s tools without fear', 'Meet great Muslim physicians and finish the "Health Helper" project']
  ],
  filters: [['body', 'جسمي العجيب', 'My amazing body'], ['habits', 'عاداتي الصحيّة', 'Healthy habits'], ['care', 'أرعى غيري', 'Caring for others'], ['clinic', 'عالم الطبّ', 'World of medicine']],
  parents: [
    '<h3>كيف تسيرون في الرحلة؟</h3><p>محطّة واحدة في اليوم أو اثنتان في الأسبوع تكفي. اقرؤوا القصّة معًا، واستمعوا إلى حلقة البودكاست، ثم نفّذوا المهمّة الحقيقيّة في البيت.</p>' +
    '<h3>قواعد السلامة في هذه الرحلة</h3><ul><li>لا يتناول الطفل أيّ دواء ولا يُعطيه لأحد؛ الدواء مسؤوليّة الكبار وبإرشاد الطبيب أو الصيدلي.</li><li>لا تشخيص للأمراض: الطفل يلاحظ ويُخبر شخصًا كبيرًا يثق به.</li><li>لا يلمس الطفل دمَ غيره ولا الأدوات الحادّة.</li><li>رقم الطوارئ يختلف من بلدٍ لآخر؛ اكتبوه مع الطفل في «بطاقة الطوارئ» وتدرّبوا على قوله.</li></ul>' +
    '<h3>المشروع الختامي</h3><p>ملصق «مساعد الصحّة» للعائلة، أو لعب دور «العيادة الصغيرة» ببطاقة فحص، مع جدول العادات الصحيّة لسبعة أيّام. امدحوا المحاولة لا الكمال.</p>',
    '<h3>How to run the journey</h3><p>One station a day, or two a week, is plenty. Read the story together, listen to the podcast episode, then do the real mission at home.</p>' +
    '<h3>Safety rules for this journey</h3><ul><li>The child never takes or gives any medicine; medicine is for adults to handle, following a doctor or pharmacist.</li><li>No diagnosing: the child notices and tells a trusted adult.</li><li>The child does not touch other people\'s blood or sharp tools.</li><li>Emergency numbers differ by country; write yours with your child on the "My emergency card" and practise saying it.</li></ul>' +
    '<h3>Final project</h3><p>A family "Health Helper" poster, or a pretend "little clinic" role-play with a check-up card, plus a 7-day healthy-habits tracker. Praise the effort, not perfection.</p>'
  ],
  worksheet: [
    '<h2>🩺 ورقة الطبيب الصغير</h2>' +
    '<h3>١) خطوات غسل اليدين (٢٠ ثانية)</h3><table border="1" cellpadding="8" style="border-collapse:collapse;width:100%"><tr><th>الخطوة</th><th>ماذا أفعل؟</th><th>✔</th></tr><tr><td>١</td><td>أبلّل يديّ بالماء النظيف</td><td></td></tr><tr><td>٢</td><td>أضع الصابون</td><td></td></tr><tr><td>٣</td><td>أفرك الكفّين، ثم ظهر اليدين</td><td></td></tr><tr><td>٤</td><td>أفرك بين الأصابع والإبهامين</td><td></td></tr><tr><td>٥</td><td>أفرك أطراف الأصابع وتحت الأظافر</td><td></td></tr><tr><td>٦</td><td>أشطف بالماء وأنشّف بمنشفة نظيفة</td><td></td></tr></table>' +
    '<h3>٢) ارسم طبقك الصحّي</h3><div style="border:2px dashed #C0392B;border-radius:50%;width:260px;height:260px;margin:.5rem auto;display:grid;place-items:center;text-align:center">نصفه خضار وفواكه<br>ربعه حبوب وخبز<br>ربعه بروتين<br>+ كوب ماء</div>' +
    '<h3>٣) جدول عاداتي الصحيّة لسبعة أيّام</h3><table border="1" cellpadding="6" style="border-collapse:collapse;width:100%;text-align:center"><tr><th>العادة</th><th>١</th><th>٢</th><th>٣</th><th>٤</th><th>٥</th><th>٦</th><th>٧</th></tr><tr><td>غسلت يديّ قبل الأكل</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>شربت الماء</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>أكلت خضارًا أو فاكهة</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>تحرّكت ساعة</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>نمت مبكّرًا</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>فرّشت أسناني</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>' +
    '<h3>٤) بطاقة الطوارئ الخاصّة بي (أملؤها مع أحد والديّ)</h3><table border="1" cellpadding="10" style="border-collapse:collapse;width:100%"><tr><td>اسمي</td><td style="width:60%"></td></tr><tr><td>عنوان بيتي</td><td></td></tr><tr><td>هاتف أمّي أو أبي</td><td></td></tr><tr><td>رقم الطوارئ في بلدي</td><td></td></tr><tr><td>شخص كبير أثق به قريب منّي</td><td></td></tr></table><p>تذكّر: أبقى هادئًا، أُخبر شخصًا كبيرًا، ولا ألمس الدم أو الدواء أو الأشياء الحادّة.</p>',
    '<h2>🩺 Little Doctor worksheet</h2>' +
    '<h3>1) Handwashing steps (20 seconds)</h3><table border="1" cellpadding="8" style="border-collapse:collapse;width:100%"><tr><th>Step</th><th>What do I do?</th><th>✔</th></tr><tr><td>1</td><td>Wet my hands with clean water</td><td></td></tr><tr><td>2</td><td>Put on soap</td><td></td></tr><tr><td>3</td><td>Rub palms, then the backs of my hands</td><td></td></tr><tr><td>4</td><td>Rub between my fingers and my thumbs</td><td></td></tr><tr><td>5</td><td>Rub my fingertips and under my nails</td><td></td></tr><tr><td>6</td><td>Rinse with water and dry with a clean towel</td><td></td></tr></table>' +
    '<h3>2) Draw your healthy plate</h3><div style="border:2px dashed #C0392B;border-radius:50%;width:260px;height:260px;margin:.5rem auto;display:grid;place-items:center;text-align:center">Half vegetables and fruit<br>A quarter grains and bread<br>A quarter protein<br>+ a cup of water</div>' +
    '<h3>3) My 7-day healthy-habits tracker</h3><table border="1" cellpadding="6" style="border-collapse:collapse;width:100%;text-align:center"><tr><th>Habit</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr><tr><td>Washed hands before eating</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Drank water</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Ate vegetables or fruit</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Moved for an hour</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Went to bed early</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Brushed my teeth</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>' +
    '<h3>4) My emergency card (fill it in with a parent)</h3><table border="1" cellpadding="10" style="border-collapse:collapse;width:100%"><tr><td>My name</td><td style="width:60%"></td></tr><tr><td>My home address</td><td></td></tr><tr><td>Mum\'s or Dad\'s phone</td><td></td></tr><tr><td>Emergency number in my country</td><td></td></tr><tr><td>A trusted adult near me</td><td></td></tr></table><p>Remember: I stay calm, I tell an adult, and I never touch blood, medicine or sharp things.</p>'
  ],
  next: ['../activities/play.html', '🎲', 'ساحة الأنشطة', 'Activities', 'جرّب مهارة أخرى أو لعبة', 'Try another skill or a game'],
  stations: [
    /* ───────── 1 ───────── */
    {
      id: 'amazing-body', icon: '❤️', tag: 'body',
      t: ['جسمي العجيب', 'My amazing body'],
      sub: ['القلب والرئتان والعظام', 'Heart, lungs and bones'],
      pg: [
        ['👦🎒', 'جاء يوسف إلى عيادة الدكتورة نور مع أمّه، لا لأنّه مريض، بل لأنّه يريد أن يصبح «طبيبًا صغيرًا». قالت الدكتورة مبتسمة: «أوّل درسٍ للطبيب: أن يعرف الجسم الذي خلقه الله».', 'Yusuf came to Dr. Noor\'s clinic with his mother. He was not ill; he wanted to become a "little doctor". Dr. Noor smiled: "A doctor\'s first lesson is to know the body Allah created."'],
        ['✊❤️', 'قالت: «اصنع قبضةً بيدك. قلبك تقريبًا بحجم قبضتك!». القلب عضلةٌ تضخّ الدم إلى كلّ الجسم، وينبض عند الأطفال وهم مرتاحون نحو ٨٠ إلى ١٠٠ مرّة في الدقيقة، ليلًا ونهارًا دون أن نطلب منه.', '"Make a fist," she said. "Your heart is about the size of your fist!" The heart is a muscle that pumps blood around the whole body. In a resting child it beats roughly 80 to 100 times a minute, day and night, without us asking it to.'],
        ['🫁🌬️', 'ثم وضع يوسف يديه على صدره وأخذ نفسًا عميقًا، فشعر بصدره يرتفع. «هاتان رئتاك. تُدخلان الهواء ليأخذ الدم منه الأكسجين، وتُخرجان ثاني أكسيد الكربون». الطفل يتنفّس نحو ٢٠ مرّة في الدقيقة وهو هادئ.', 'Yusuf put his hands on his chest and took a deep breath. He felt his chest rise. "Those are your lungs. They bring air in so the blood can take oxygen, and they breathe out carbon dioxide." A calm child breathes about 20 times a minute.'],
        ['🦴🏃', '«وماذا عن العظام؟». قالت الدكتورة: «جسم الشخص البالغ فيه ٢٠٦ عظمات، أمّا المولود فعنده عظامٌ أكثر، ثم يلتحم بعضها ببعض وهو يكبر. العظام تحميك؛ فالجمجمة تحمي الدماغ، والأضلاع تحمي القلب والرئتين».', '"And the bones?" Dr. Noor said: "An adult\'s body has 206 bones. A newborn baby has more, and some of them join together as the child grows. Bones protect you: the skull protects the brain, and the ribs protect the heart and lungs."'],
        ['🤲✨', 'ابتسم يوسف: «كلّ هذا يعمل في داخلي الآن؟». قالت: «نعم، والله صوّرك في أحسن صورة. وشكرُ هذه النعمة أن نعتني بالجسم ونستعمله في الخير».', 'Yusuf smiled: "All of this is working inside me right now?" She said: "Yes, and Allah shaped you in the best form. We thank Him for this blessing by caring for our body and using it for good."']
      ],
      learn: ['<b>القلب</b> عضلة تضخّ الدم، و<b>الرئتان</b> تُدخلان الأكسجين وتُخرجان ثاني أكسيد الكربون، و<b>العظام</b> (٢٠٦ عند البالغ) تحمي الأعضاء وتُمسك الجسم. كلّها تعمل معًا كفريقٍ واحد.', 'The <b>heart</b> is a muscle that pumps blood, the <b>lungs</b> bring in oxygen and breathe out carbon dioxide, and the <b>bones</b> (206 in an adult) protect our organs and hold the body up. They all work together as one team.'],
      islam: ['قال الله تعالى: ﴿لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ﴾ (التين: ٤)', 'Allah says: "We have certainly created man in the best of stature." (at-Tin 95:4)'],
      src: ['التين: ٤', 'At-Tin 95:4'],
      mission: ['جرّب «سمّاعة الطبيب» بيديك: ضع أذنك بلطف على ظهر أحد والديك واستمع لنبض القلب ولصوت التنفّس (بإذنه). ثم اقفز ٢٠ قفزة وضع يدك على صدرك: هل أسرع قلبك؟ ارسم قلبًا ورئتين وعظمةً واكتب تحت كلٍّ منها وظيفته.', 'Try a "doctor\'s stethoscope" with your ears: with permission, gently place your ear on a parent\'s back and listen to the heartbeat and the breathing. Then do 20 jumps and put your hand on your chest: did your heart speed up? Draw a heart, two lungs and a bone, and write each one\'s job under it.'],
      q: ['ما وظيفة الأضلاع في جسمك؟', 'What do your ribs do?'],
      o: [['تهضم الطعام', 'They digest food'], ['تحمي القلب والرئتين', 'They protect the heart and lungs', 1], ['تضخّ الدم', 'They pump blood']],
      fb: ['أحسنت! الأضلاع مثل قفصٍ قويّ يحمي القلب والرئتين، أمّا ضخّ الدم فهو عمل القلب.', 'Well done! The ribs are like a strong cage that protects the heart and lungs. Pumping blood is the heart\'s job.'],
      podcast: {
        title: ['قلبٌ بحجم قبضتك', 'A heart the size of your fist'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور في بودكاست الطبيب الصغير. ومعي اليوم ضيفٌ مميّز.', 'Assalamu alaikum, friends! This is Dr. Noor on The Little Doctor podcast. Today I have a special guest.'],
          ['k', 'وعليكم السلام يا دكتورة! أنا يوسف، وأريد أن أعرف ماذا يحدث داخل جسمي.', 'Wa alaikum assalam, Doctor! I am Yusuf, and I want to know what happens inside my body.'],
          ['h', 'سؤالٌ رائع. هيّا اصنع قبضةً بيدك. هل تعلم أنّ قلبك تقريبًا بهذا الحجم؟', 'Great question. Make a fist with your hand. Did you know your heart is about that size?'],
          ['k', 'صغيرٌ هكذا؟ وماذا يفعل طوال الوقت؟', 'That small? What does it do all the time?'],
          ['h', 'القلب عضلة تضخّ الدم إلى كلّ الجسم. وهو ينبض عند الأطفال نحو ثمانين إلى مئة مرّة في الدقيقة وهم مرتاحون.', 'The heart is a muscle that pumps blood to the whole body. In a resting child it beats about eighty to a hundred times a minute.'],
          ['k', 'حتى وأنا نائم؟', 'Even when I am asleep?'],
          ['h', 'حتى وأنت نائم! لا تحتاج أن تتذكّره، فالله جعله يعمل وحده.', 'Even when you are asleep! You do not need to remember it. Allah made it work by itself.'],
          ['k', 'وعندما آخذ نفسًا عميقًا، أين يذهب الهواء؟', 'And when I take a deep breath, where does the air go?'],
          ['h', 'يذهب إلى رئتيك. هناك يأخذ الدم الأكسجين، ثم تُخرج ثاني أكسيد الكربون مع الزفير.', 'It goes to your lungs. There your blood picks up oxygen, and you breathe out carbon dioxide.'],
          ['k', 'وماذا عن العظام؟ سمعت أنّ عندي مئتي عظمة!', 'What about bones? I heard I have two hundred bones!'],
          ['h', 'قريبٌ جدًّا! البالغ عنده مئتان وستّ عظمات. والأضلاع منها تصنع قفصًا يحمي القلب والرئتين.', 'Very close! An adult has two hundred and six bones. The ribs make a cage that protects the heart and lungs.'],
          ['k', 'سبحان الله! جسمي مثل فريقٍ يعمل معًا.', 'Subhan Allah! My body is like a team working together.'],
          ['h', 'تمامًا. والله يقول: لقد خلقنا الإنسان في أحسن تقويم. فلنشكره بأن نعتني بهذا الجسم.', 'Exactly. Allah says: We have certainly created man in the best of stature. So let us thank Him by caring for this body.'],
          ['k', 'وما مهمّة اليوم يا دكتورة؟', 'What is today\'s mission, Doctor?'],
          ['h', 'مهمّة اليوم: استمع بأذنك لقلب أحد والديك بإذنه، ثم اقفز عشرين قفزة ولاحظ كيف يُسرع قلبك. إلى اللقاء في الحلقة القادمة!', 'Today\'s mission: with permission, listen to a parent\'s heart with your ear, then do twenty jumps and notice your heart speed up. See you next episode!']
        ]
      }
    },
    /* ───────── 2 ───────── */
    {
      id: 'clean-hands', icon: '🧼', tag: 'habits',
      t: ['الجراثيم وغسل اليدين', 'Germs and handwashing'],
      sub: ['عشرون ثانية تحميك', 'Twenty seconds that protect you'],
      pg: [
        ['🔬🦠', 'أرت الدكتورة نور يوسفَ صورةً من المجهر: «هذه جراثيم. هي صغيرة جدًّا لا نراها بأعيننا، وبعضها قد يُمرضنا إذا دخل إلى الجسم من الفم أو الأنف أو العينين».', 'Dr. Noor showed Yusuf a picture from a microscope. "These are germs. They are far too small to see with our eyes, and some can make us ill if they get into the body through the mouth, nose or eyes."'],
        ['✨🤚', 'وضعت قليلًا من البريق اللامع على يد يوسف وقالت: «تخيّل أنّه جراثيم». صافح يوسف أخته، ثم لمس مقبض الباب... فإذا البريق في كلّ مكان! «هكذا تنتقل الجراثيم بالأيدي».', 'She put a little glitter on Yusuf\'s hand: "Pretend this is germs." Yusuf shook his sister\'s hand, then touched the door handle... and the glitter was everywhere! "That is how germs travel on hands."'],
        ['💧🧼', 'جرّب يوسف أن يغسل بالماء وحده، فبقي كثيرٌ من البريق. ثم غسل بالماء والصابون وفرك جيّدًا: الكفّين، وظهر اليدين، وبين الأصابع، والإبهامين، وأطراف الأصابع تحت الأظافر، مدّة ٢٠ ثانية، ثم شطف ونشّف بمنشفة نظيفة.', 'Yusuf tried washing with water only, and lots of glitter stayed. Then he used soap and water and scrubbed well: palms, backs of the hands, between the fingers, the thumbs, and the fingertips under the nails, for 20 seconds. Then he rinsed and dried with a clean towel.'],
        ['⏱️🔢', '«كيف أعرف أنّها ٢٠ ثانية؟». قالت: «عُدّ ببطء من واحد إلى عشرين وأنت تفرك». ومتى نغسل؟ قبل الأكل، وبعد دخول الحمّام، وبعد العطاس أو السعال في اليد، وبعد اللعب في الخارج أو لمس الحيوانات.', '"How do I know it is 20 seconds?" She said: "Count slowly from one to twenty while you scrub." When do we wash? Before eating, after using the toilet, after sneezing or coughing into your hand, and after playing outside or touching animals.'],
        ['🕌💦', 'ابتسم يوسف: «نحن المسلمين نغسل أيدينا كثيرًا في الوضوء!». قالت: «صدقت. ديننا يحبّ الطهارة، والوضوء خمس مرّات في اليوم نظافةٌ وعبادة معًا. لكن تذكّر: عند الأكل والحمّام نستعمل الصابون أيضًا».', 'Yusuf smiled: "We Muslims wash our hands a lot in wudu!" She said: "True. Our deen loves cleanliness, and wudu five times a day is cleanliness and worship together. But remember: before eating and after the toilet, we use soap as well."']
      ],
      learn: ['الجراثيم صغيرة لا تُرى وتنتقل بالأيدي. <b>الماء والصابون والفرك ٢٠ ثانية</b> يُزيلها: الكفّان، ظهر اليدين، بين الأصابع، الإبهامان، أطراف الأصابع، ثم الشطف والتنشيف.', 'Germs are too small to see and they travel on hands. <b>Soap, water and 20 seconds of scrubbing</b> remove them: palms, backs, between the fingers, thumbs, fingertips, then rinse and dry.'],
      islam: ['قال رسول الله ﷺ: «الطُّهُورُ شَطْرُ الْإِيمَانِ» — أي نصف الإيمان. والوضوء يعلّمنا كلّ يوم أن نحبّ النظافة.', 'The Messenger of Allah ﷺ said: "Purity is half of faith." Wudu teaches us every day to love cleanliness.'],
      src: ['صحيح مسلم: ٢٢٣', 'Sahih Muslim 223'],
      mission: ['جرّب تجربة «جراثيم البريق» مع أحد والديك (أو استعمل قليلًا من الزيت ورشّة قرفة). اغسل مرّة بالماء وحده ومرّة بالماء والصابون ٢٠ ثانية، وقارن. ثم علّق ورقة «خطوات غسل اليدين» قرب المغسلة.', 'Do the "glitter germs" experiment with a parent (or use a little oil and a pinch of cinnamon). Wash once with water only and once with soap and water for 20 seconds, and compare. Then hang the "handwashing steps" sheet next to the sink.'],
      q: ['كم ثانية على الأقلّ نفرك أيدينا بالصابون؟', 'For at least how many seconds do we scrub our hands with soap?'],
      o: [['ثانيتين', 'Two seconds'], ['خمس دقائق', 'Five minutes'], ['عشرين ثانية', 'Twenty seconds', 1]],
      fb: ['ممتاز! عشرون ثانية من الفرك بالصابون تكفي لإزالة معظم الجراثيم. عُدّ ببطء إلى عشرين.', 'Excellent! Twenty seconds of scrubbing with soap removes most germs. Count slowly to twenty.'],
      podcast: {
        title: ['البريق الذي لا يختفي', 'The glitter that would not go away'],
        lines: [
          ['h', 'أهلًا بكم من جديد في بودكاست الطبيب الصغير! يوسف، لماذا يداك تلمعان اليوم؟', 'Welcome back to The Little Doctor podcast! Yusuf, why are your hands sparkling today?'],
          ['k', 'هذا بريق يا دكتورة! قلتِ لي أن أتخيّله جراثيم.', 'It is glitter, Doctor! You told me to pretend it is germs.'],
          ['h', 'صحيح. والآن انظر إلى يدي، صافحتني فانتقل البريق إليّ.', 'Right. Now look at my hand. You shook it, and the glitter moved to me.'],
          ['k', 'وعلى مقبض الباب أيضًا! هل الجراثيم الحقيقية تنتقل هكذا؟', 'And on the door handle too! Do real germs travel like that?'],
          ['h', 'نعم، لكنّها صغيرة جدًّا لا نراها. وإذا لمسنا بعدها الفم أو الأنف أو العينين قد تدخل الجسم.', 'Yes, but they are so tiny we cannot see them. If we then touch our mouth, nose or eyes, they can get inside.'],
          ['k', 'غسلت يدي بالماء فقط، وبقي البريق!', 'I washed with water only, and the glitter stayed!'],
          ['h', 'لهذا نحتاج الصابون. الصابون مع الفرك يُفكّك الأوساخ ويحملها الماء بعيدًا.', 'That is why we need soap. Soap and scrubbing loosen the dirt, and the water carries it away.'],
          ['k', 'وكم أفرك؟', 'How long do I scrub?'],
          ['h', 'عشرين ثانية. عُدّ ببطء إلى عشرين وأنت تفرك الكفّين، وظهر اليدين، وبين الأصابع، والإبهامين، وتحت الأظافر.', 'Twenty seconds. Count slowly to twenty while you scrub your palms, the backs, between your fingers, your thumbs and under your nails.'],
          ['k', 'ثم أشطف وأنشّف بمنشفة نظيفة. فهمت!', 'Then I rinse and dry with a clean towel. Got it!'],
          ['h', 'أحسنت. ومتى نغسل أيدينا؟', 'Well done. And when do we wash our hands?'],
          ['k', 'قبل الأكل، وبعد الحمّام، وبعد اللعب في الخارج. ونحن نتوضّأ كذلك!', 'Before eating, after the toilet, and after playing outside. And we make wudu too!'],
          ['h', 'رائع. وقد قال النبي صلّى الله عليه وسلّم: الطّهور شطر الإيمان. يعني أنّ النظافة جزءٌ كبير من ديننا.', 'Wonderful. The Prophet, peace be upon him, said: Purity is half of faith. Cleanliness is a big part of our deen.'],
          ['h', 'مهمّة اليوم: جرّب تجربة البريق مع أحد والديك، واغسل يديك عشرين ثانية قبل كلّ وجبة. إلى اللقاء!', 'Today\'s mission: try the glitter experiment with a parent, and wash your hands for twenty seconds before every meal. Goodbye for now!']
        ]
      }
    },
    /* ───────── 3 ───────── */
    {
      id: 'healthy-plate', icon: '🥗', tag: 'habits',
      t: ['طبقي الصحّي', 'My healthy plate'],
      sub: ['الطعام والماء ولا إسراف', 'Food, water and no excess'],
      pg: [
        ['🍽️🤔', 'في الغداء نظر يوسف إلى طبقه: كومة كبيرة من البطاطا المقليّة فقط. قالت أمّه: «طبقٌ لونه واحد! ما رأي الطبيب الصغير؟». فتذكّر كلام الدكتورة نور عن «طبق الألوان».', 'At lunch Yusuf looked at his plate: just a big pile of chips. His mother said: "A plate of only one colour! What does the little doctor think?" He remembered what Dr. Noor said about the "rainbow plate".'],
        ['🥦🍎', 'الطبق الصحّي: <b>نصفه</b> خضار وفواكه بألوان مختلفة، و<b>ربعه</b> حبوب كالخبز والأرز (والأسمر أفضل)، و<b>ربعه</b> بروتين كالبيض والعدس والسمك والدجاج. وكلّ لون يعطي الجسم فائدة مختلفة.', 'A healthy plate is <b>half</b> vegetables and fruit of different colours, a <b>quarter</b> grains like bread and rice (wholegrain is better), and a <b>quarter</b> protein like eggs, lentils, fish or chicken. Each colour gives the body something different.'],
        ['💧🥤', 'وماذا نشرب؟ الماء أفضل شراب. الجسم يحتاجه ليبقى نشيطًا، وخاصّة في الحرّ وبعد اللعب. أمّا المشروبات الغازيّة والحلويات فهي قليلًا وأحيانًا، لأنّ السكّر الكثير يضرّ الأسنان والجسم.', 'And what do we drink? Water is the best drink. The body needs it to stay active, especially in hot weather and after playing. Fizzy drinks and sweets are for a little, sometimes, because too much sugar harms teeth and the body.'],
        ['🙂🛑', 'ثم تعلّم يوسف سرًّا آخر: «لا تملأ بطنك حتى آخره». نأكل ببطء، ونقول «بسم الله»، ونتوقّف عندما نشعر بالشبع قبل أن نتعب. ولا نرمي الطعام؛ نأخذ ما نحتاج فقط.', 'Then Yusuf learned another secret: "Do not fill your tummy to the very top." We eat slowly, say "Bismillah", and stop when we feel full, before we feel heavy. And we do not throw food away; we take only what we need.'],
        ['🌈😋', 'في اليوم التالي صنع يوسف طبقًا ملوّنًا: خيار أخضر، وجزر برتقالي، وقطعة دجاج، وقليل من الأرز، وكوب ماء. قالت أمّه: «هذا طبق طبيب!».', 'The next day Yusuf made a colourful plate: green cucumber, orange carrots, a piece of chicken, a little rice and a glass of water. His mother said: "That is a doctor\'s plate!"']
      ],
      learn: ['<b>الطبق الصحّي</b>: نصفه خضار وفواكه، وربعه حبوب، وربعه بروتين، مع <b>الماء</b>. نأكل باعتدال ونتوقّف عند الشبع، والسكّر قليلًا وأحيانًا.', 'A <b>healthy plate</b>: half vegetables and fruit, a quarter grains, a quarter protein, with <b>water</b>. We eat in moderation and stop when full; sugar is a little, sometimes.'],
      islam: ['قال الله تعالى: ﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ﴾ (الأعراف: ٣١). وقال النبي ﷺ: «...فإن كان لا محالة، فثلثٌ لطعامه، وثلثٌ لشرابه، وثلثٌ لنَفَسه».', 'Allah says: "And eat and drink, but be not excessive. Indeed, He does not like those who commit excess." (al-A\'raf 7:31). The Prophet ﷺ said: "...If he must, then a third for his food, a third for his drink and a third for his breath."'],
      src: ['الأعراف: ٣١ · سنن الترمذي: ٢٣٨٠ (صحّحه الألباني)', 'Al-A\'raf 7:31 · Sunan at-Tirmidhi 2380 (graded sahih by al-Albani)'],
      mission: ['ساعد في تحضير وجبة واحدة اليوم (بإشراف أحد والديك، ودون سكّين حادّ أو موقد). اصنع «طبق الألوان»: نصفه خضار وفواكه، وربعه حبوب، وربعه بروتين، مع كوب ماء. ثم ارسمه في ورقة العمل.', 'Help prepare one meal today (with a parent watching, and no sharp knife or stove). Make a "rainbow plate": half vegetables and fruit, a quarter grains, a quarter protein, with a glass of water. Then draw it on your worksheet.'],
      q: ['ما الذي يجب أن يملأ نصف الطبق الصحّي؟', 'What should fill half of a healthy plate?'],
      o: [['الحلويات', 'Sweets'], ['الخضار والفواكه', 'Vegetables and fruit', 1], ['الخبز وحده', 'Bread only']],
      fb: ['صحيح! نصف الطبق خضار وفواكه بألوان مختلفة، والباقي حبوب وبروتين.', 'Correct! Half the plate is colourful vegetables and fruit, and the rest is grains and protein.'],
      podcast: {
        title: ['طبق الألوان', 'The rainbow plate'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! اليوم في بودكاست الطبيب الصغير سنتكلّم عن شيءٍ نحبّه جميعًا: الطعام!', 'Assalamu alaikum, friends! Today on The Little Doctor podcast we talk about something we all love: food!'],
          ['k', 'أنا أحبّ البطاطا المقليّة كثيرًا يا دكتورة. هل هذا خطأ؟', 'I really love chips, Doctor. Is that wrong?'],
          ['h', 'ليس خطأً أن نأكلها أحيانًا. لكن الجسم يحتاج ألوانًا كثيرة، لا لونًا واحدًا.', 'It is not wrong to eat them sometimes. But your body needs many colours, not just one.'],
          ['k', 'ألوان؟ كيف يعني؟', 'Colours? What do you mean?'],
          ['h', 'تخيّل طبقك دائرة. نصفها خضار وفواكه، وربعها حبوب مثل الخبز والأرز، وربعها بروتين مثل البيض والعدس والسمك.', 'Imagine your plate is a circle. Half is vegetables and fruit, a quarter is grains like bread and rice, and a quarter is protein like eggs, lentils or fish.'],
          ['k', 'وماذا أشرب معه؟ عصيرًا بالسكّر؟', 'What do I drink with it? A sugary juice?'],
          ['h', 'أفضل شراب هو الماء. السكّر الكثير يضرّ الأسنان، فنتركه للمناسبات وبقليل.', 'The best drink is water. Too much sugar harms your teeth, so we keep it for special times, and just a little.'],
          ['k', 'وهل آكل حتى لا أستطيع أن أتحرّك؟', 'Should I eat until I cannot move?'],
          ['h', 'لا! الله تعالى يقول: وكلوا واشربوا ولا تسرفوا. يعني نأكل ونستمتع، لكن بلا إسراف.', 'No! Allah says: Eat and drink, but be not excessive. We enjoy our food, but without excess.'],
          ['k', 'وكيف أعرف أنّي اكتفيت؟', 'How do I know I have had enough?'],
          ['h', 'كُل ببطء، وتوقّف حين تشعر بالشبع. والنبي صلّى الله عليه وسلّم علّمنا: ثلثٌ للطعام، وثلثٌ للشراب، وثلثٌ للنفس.', 'Eat slowly and stop when you feel full. The Prophet, peace be upon him, taught: a third for food, a third for drink, and a third for breath.'],
          ['k', 'ثلثٌ للنفس! حتى أتنفّس براحة. فكرة جميلة.', 'A third for breath! So I can breathe easily. What a nice idea.'],
          ['h', 'وهذا الحديث رواه الترمذي وصحّحه العلماء. والآن، هل أنت جاهز للمهمّة؟', 'This hadith is in at-Tirmidhi and scholars graded it authentic. Now, are you ready for the mission?'],
          ['k', 'جاهز!', 'Ready!'],
          ['h', 'مهمّة اليوم: ساعد أهلك في صنع طبق الألوان مع كوب ماء، ثم ارسمه. نلتقي في الحلقة القادمة!', 'Today\'s mission: help your family make a rainbow plate with a glass of water, then draw it. See you next episode!']
        ]
      }
    },
    /* ───────── 4 ───────── */
    {
      id: 'sleep-move', icon: '🌙', tag: 'habits',
      t: ['النوم والحركة', 'Sleep and movement'],
      sub: ['جسمٌ يرتاح وجسمٌ يلعب', 'A body that rests and a body that plays'],
      pg: [
        ['😴📱', 'في الصباح كان يوسف متعبًا ومتضايقًا. لقد سهر أمام الشاشة حتى وقتٍ متأخّر. في المدرسة لم يستطع التركيز، وفي الملعب كان بطيئًا.', 'In the morning Yusuf felt tired and grumpy. He had stayed up late in front of a screen. At school he could not concentrate, and in the playground he was slow.'],
        ['🛌🧠', 'قالت الدكتورة نور: «أثناء النوم يرتاح جسمك ويكبر، ويرتّب دماغك ما تعلّمته في النهار. الأطفال في عمرك يحتاجون تقريبًا من ٩ إلى ١٢ ساعة نوم كلّ ليلة».', 'Dr. Noor said: "While you sleep, your body rests and grows, and your brain sorts out what you learned during the day. Children your age need about 9 to 12 hours of sleep every night."'],
        ['🌌📵', 'ولكي ننام جيّدًا: نُطفئ الشاشات قبل النوم بوقت، ونتوضّأ، ونقرأ أذكار النوم، وننام في غرفةٍ هادئة مظلمة، ونستيقظ في وقتٍ ثابت قريبًا من الفجر.', 'To sleep well: we switch off screens a while before bed, make wudu, say the bedtime adhkar, sleep in a quiet, dark room, and wake at a regular time near Fajr.'],
        ['⚽🚲', '«والحركة؟». قالت: «الأطفال يحتاجون أن يتحرّكوا نحو ساعة كلّ يوم: جري، قفز، سباحة مع الكبار، ركوب درّاجة بخوذة، أو لعب في الحديقة. الحركة تقوّي القلب والعظام والعضلات وتجعلك سعيدًا».', '"And moving?" She said: "Children need to move for about an hour every day: running, jumping, swimming with adults, riding a bike with a helmet, or playing in the park. Moving makes the heart, bones and muscles stronger and makes you feel happy."'],
        ['☀️💪', 'في تلك الليلة نام يوسف مبكّرًا. وفي الصباح استيقظ نشيطًا، ولعب الكرة مع أخيه بعد المدرسة. قال: «جسمي مثل البطارية: النوم يشحنه، والحركة تجعله قويًّا!».', 'That night Yusuf went to bed early. In the morning he woke up full of energy and played football with his brother after school. He said: "My body is like a battery: sleep charges it, and moving makes it strong!"']
      ],
      learn: ['<b>النوم</b> ٩ إلى ١٢ ساعة تقريبًا لعمرك يشحن الجسم والدماغ. و<b>الحركة</b> نحو ساعة كلّ يوم تقوّي القلب والعظام والعضلات. نُطفئ الشاشات قبل النوم.', '<b>Sleep</b> of about 9 to 12 hours at your age recharges the body and brain. <b>Moving</b> for about an hour a day strengthens the heart, bones and muscles. Screens off before bed.'],
      islam: ['قال الله تعالى: ﴿وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا﴾ (النبأ: ٩) أي راحةً لأجسامكم. وقال النبي ﷺ: «الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ، وَفِي كُلٍّ خَيْرٌ».', 'Allah says: "And We made your sleep a means of rest." (an-Naba 78:9). The Prophet ﷺ said: "The strong believer is better and more beloved to Allah than the weak believer, and in both there is good."'],
      src: ['النبأ: ٩ · صحيح مسلم: ٢٦٦٤', 'An-Naba 78:9 · Sahih Muslim 2664'],
      mission: ['اتّفق مع أحد والديك على «وقت نوم» ثابت هذا الأسبوع، وأطفئ الشاشات قبله بساعة. واختر حركةً تحبّها وافعلها اليوم مدّة ساعة (يمكن تقسيمها: ٢٠ دقيقة × ٣). سجّلها في جدول العادات.', 'Agree on a fixed "bedtime" with a parent this week, and switch screens off an hour before it. Choose a kind of movement you love and do it today for an hour (you can split it: 20 minutes × 3). Record it on your habits tracker.'],
      q: ['ماذا يحدث لدماغك وأنت نائم؟', 'What happens to your brain while you sleep?'],
      o: [['يتوقّف عن العمل تمامًا', 'It stops working completely'], ['ينسى كلّ شيء', 'It forgets everything'], ['يرتاح ويرتّب ما تعلّمته', 'It rests and sorts out what you learned', 1]],
      fb: ['أحسنت! الدماغ لا يتوقّف في النوم، بل يرتاح ويرتّب ما تعلّمته في النهار، لذلك النوم الكافي يساعدك على الحفظ والتركيز.', 'Well done! The brain does not switch off in sleep; it rests and sorts out what you learned during the day. That is why enough sleep helps you remember and focus.'],
      podcast: {
        title: ['البطارية العجيبة', 'The amazing battery'],
        lines: [
          ['h', 'صباح الخير يا أصدقاء! معكم الدكتورة نور. يوسف، تبدو متثائبًا اليوم!', 'Good morning, friends! This is Dr. Noor. Yusuf, you look very yawny today!'],
          ['k', 'آه يا دكتورة، سهرت أمام الشاشة البارحة، والآن أنا متعب جدًّا.', 'Oh Doctor, I stayed up late in front of a screen, and now I am so tired.'],
          ['h', 'هذا يحدث لنا جميعًا. هل تعلم ماذا يفعل جسمك وأنت نائم؟', 'That happens to all of us. Do you know what your body does while you sleep?'],
          ['k', 'لا شيء؟ ينام فقط؟', 'Nothing? It just sleeps?'],
          ['h', 'بل يعمل بهدوء! يرتاح ويكبر، ودماغك يرتّب ما تعلّمته، مثل من يرتّب كتبه على الرفّ.', 'No, it works quietly! It rests and grows, and your brain tidies what you learned, like someone arranging books on a shelf.'],
          ['k', 'وكم ساعة أحتاج؟', 'How many hours do I need?'],
          ['h', 'في عمرك تقريبًا من تسع إلى اثنتي عشرة ساعة كلّ ليلة.', 'At your age, about nine to twelve hours every night.'],
          ['k', 'هذا كثير! وماذا يساعدني على النوم؟', 'That is a lot! What helps me fall asleep?'],
          ['h', 'أطفئ الشاشة قبل النوم بوقت، وتوضّأ، واقرأ أذكار النوم، ونم في غرفة هادئة. والله تعالى يقول: وجعلنا نومكم سباتًا، أي راحة.', 'Switch off the screen a while before bed, make wudu, say your bedtime adhkar, and sleep in a quiet room. Allah says: And We made your sleep a means of rest.'],
          ['k', 'وفي النهار؟ هل أبقى جالسًا؟', 'And in the daytime? Do I stay sitting down?'],
          ['h', 'لا! تحتاج أن تتحرّك نحو ساعة كلّ يوم. اجرِ، واقفز، والعب، واركب الدرّاجة بخوذتك.', 'No! You need to move for about an hour every day. Run, jump, play, and ride your bike with your helmet.'],
          ['k', 'فهمت! النوم يشحن البطارية، والحركة تجعلني قويًّا.', 'I get it! Sleep charges the battery, and moving makes me strong.'],
          ['h', 'أحسنت. والنبي صلّى الله عليه وسلّم قال: المؤمن القويّ خيرٌ وأحبّ إلى الله من المؤمن الضعيف، وفي كلٍّ خير.', 'Well done. The Prophet, peace be upon him, said: The strong believer is better and more beloved to Allah than the weak believer, and in both there is good.'],
          ['h', 'مهمّة اليوم: اختر وقت نوم ثابتًا مع أهلك، وتحرّك ساعة اليوم بلعبةٍ تحبّها. تصبحون على خير!', 'Today\'s mission: choose a fixed bedtime with your family, and move for an hour today with a game you love. Good night, everyone!']
        ]
      }
    },
    /* ───────── 5 ───────── */
    {
      id: 'caring-heart', icon: '🤗', tag: 'care',
      t: ['كيف تشعر؟', 'How are you feeling?'],
      sub: ['اللطف والإصغاء وعيادة المريض', 'Kindness, listening and visiting the sick'],
      pg: [
        ['👵🛏️', 'مرضت جدّة يوسف وبقيت في بيتها أيّامًا. قال يوسف: «أنا طبيبٌ صغير، لكنّي لا أعرف الأدوية. كيف أساعدها؟». قالت الدكتورة نور: «الطبيب الجيّد لا يعالج بالدواء وحده، بل بقلبه أيضًا».', 'Yusuf\'s grandmother fell ill and stayed at home for some days. Yusuf said: "I am a little doctor, but I do not know about medicines. How can I help her?" Dr. Noor said: "A good doctor does not care for people with medicine alone, but with their heart too."'],
        ['👂💬', '«أوّل أداة: الإصغاء». نجلس قريبًا، وننظر بلطف، ونسأل: «كيف تشعرين اليوم يا جدّتي؟»، ثم نستمع ولا نقاطع. أحيانًا يحتاج المريض من يسمعه أكثر من أيّ شيء.', '"The first tool is listening." We sit close, look kindly, and ask: "How are you feeling today, Grandma?" Then we listen without interrupting. Sometimes an ill person needs someone to listen more than anything.'],
        ['🌷🎨', '«الأداة الثانية: اللطف». بطاقة ملوّنة، أو وردة، أو قراءة سورة قصيرة لها، أو الدعاء لها بالشفاء. وإذا لاحظنا أنّها متعبة جدًّا أو يؤلمها شيء، لا نحاول أن نعرف ما المرض؛ بل نُخبر شخصًا كبيرًا فورًا.', '"The second tool is kindness." A colourful card, a flower, reading a short surah to her, or making dua for her healing. And if we notice she seems very tired or something hurts, we do not try to work out the illness; we tell an adult straight away.'],
        ['🙂😟', 'وتعلّم يوسف أنّ المشاعر مهمّة أيضًا: صديقه في المدرسة كان حزينًا. سأله بلطف: «هل أنت بخير؟ هل تريد أن نتكلّم؟». وإن كان الأمر كبيرًا، نشجّعه أن يُخبر معلّمًا أو أحد والديه.', 'Yusuf learned that feelings matter too: his friend at school seemed sad. Yusuf asked gently: "Are you OK? Do you want to talk?" And if it is something big, we encourage him to tell a teacher or a parent.'],
        ['🏡❤️', 'زار يوسف جدّته مع أبيه، ولم يُطِل الزيارة حتى لا تتعب، وغسل يديه قبل الدخول وبعد الخروج. أعطاها بطاقته فابتسمت وقالت: «أنت دوائي الحلو!». قال أبوه: «ولك أجرٌ عظيم يا بنيّ».', 'Yusuf visited his grandmother with his father. He kept the visit short so she would not get tired, and washed his hands before going in and after leaving. He gave her his card and she smiled: "You are my sweet medicine!" His father said: "And you have a great reward, my son."']
      ],
      learn: ['نرعى الآخرين بـ<b>الإصغاء</b> و<b>اللطف</b> و<b>الزيارة القصيرة</b> والدعاء. لا نشخّص الأمراض: إذا بدا أحدٌ متعبًا جدًّا أو متألّمًا، <b>نُخبر شخصًا كبيرًا نثق به</b>.', 'We care for others by <b>listening</b>, <b>kindness</b>, <b>short visits</b> and dua. We do not diagnose: if someone seems very unwell or in pain, we <b>tell a trusted adult</b>.'],
      islam: ['قال رسول الله ﷺ: «عائدُ المريضِ في مَخْرَفَةِ الجنّة حتى يرجع» — أي كأنّه يقطف من ثمار الجنّة طوال زيارته.', 'The Messenger of Allah ﷺ said: "The one who visits a sick person is in the harvest of Paradise until he returns." It is as if he is picking the fruits of Paradise throughout his visit.'],
      src: ['صحيح مسلم: ٢٥٦٨', 'Sahih Muslim 2568'],
      mission: ['اصنع بطاقة «شفاك الله» لشخصٍ مريض أو كبير في السنّ تعرفه، واطلب من أحد والديك أن تزوره معًا أو تتّصلا به. اسأله «كيف تشعر؟» واستمع إليه دون مقاطعة، وادعُ له.', 'Make a "Get well soon" card for someone you know who is ill or elderly, and ask a parent to visit or call them together. Ask "How are you feeling?", listen without interrupting, and make dua for them.'],
      q: ['لاحظت أنّ جدّتك متعبة جدًّا اليوم. ماذا تفعل؟', 'You notice your grandmother seems very unwell today. What do you do?'],
      o: [['أُخبر شخصًا كبيرًا فورًا', 'Tell an adult straight away', 1], ['أعطيها دواءً من الخزانة', 'Give her medicine from the cupboard'], ['أحاول أن أعرف مرضها وحدي', 'Try to work out her illness by myself']],
      fb: ['أحسنت! الطبيب الصغير لا يعطي دواءً ولا يشخّص المرض؛ بل يُخبر شخصًا كبيرًا ويبقى لطيفًا وقريبًا.', 'Well done! A little doctor never gives medicine or diagnoses; they tell an adult and stay kind and close by.'],
      podcast: {
        title: ['دواءٌ اسمه اللطف', 'A medicine called kindness'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! معكم الدكتورة نور. يوسف، تبدو مهمومًا اليوم.', 'Assalamu alaikum, friends! This is Dr. Noor. Yusuf, you look worried today.'],
          ['k', 'جدّتي مريضة يا دكتورة، وأريد أن أساعدها، لكنّي لا أعرف الأدوية.', 'My grandmother is ill, Doctor. I want to help her, but I do not know about medicines.'],
          ['h', 'وهذا صحيح، الأدوية للكبار والأطبّاء فقط. لكن عندك أدوات أخرى رائعة.', 'That is right, medicines are only for adults and doctors. But you have other wonderful tools.'],
          ['k', 'أدوات؟ مثل السمّاعة؟', 'Tools? Like a stethoscope?'],
          ['h', 'أداة اسمها الإصغاء. تجلس قربها وتسألها: كيف تشعرين؟ ثم تستمع ولا تقاطع.', 'A tool called listening. You sit next to her, ask how she is feeling, and then you listen without interrupting.'],
          ['k', 'وهل هذا يساعد حقًّا؟', 'Does that really help?'],
          ['h', 'كثيرًا! المريض يحبّ أن يشعر أنّ أحدًا يهتمّ به. والأداة الثانية اللطف: بطاقة، أو وردة، أو دعاء.', 'A lot! An ill person loves to feel that someone cares. The second tool is kindness: a card, a flower, or a dua.'],
          ['k', 'وإذا رأيتها متعبة جدًّا؟', 'What if I see she is very unwell?'],
          ['h', 'لا تحاول أن تعرف ما المرض وحدك. أخبر أباك أو أمّك فورًا. هذا هو عمل الطبيب الصغير الذكي.', 'Do not try to work out the illness by yourself. Tell your dad or mum straight away. That is what a smart little doctor does.'],
          ['k', 'سأزورها مع أبي غدًا إن شاء الله.', 'I will visit her with my dad tomorrow, insha Allah.'],
          ['h', 'رائع. وهل تعلم أنّ النبي صلّى الله عليه وسلّم قال: عائد المريض في مخرفة الجنّة حتى يرجع؟', 'Wonderful. Did you know the Prophet, peace be upon him, said: The one who visits a sick person is in the harvest of Paradise until he returns?'],
          ['k', 'يعني كأنّي أقطف من ثمار الجنّة؟ ما أجمل هذا!', 'So it is as if I am picking the fruits of Paradise? How beautiful!'],
          ['h', 'تمامًا. لكن اجعل الزيارة قصيرة حتى لا تتعب، واغسل يديك قبلها وبعدها.', 'Exactly. But keep the visit short so she does not get tired, and wash your hands before and after.'],
          ['h', 'مهمّة اليوم: اصنع بطاقة شفاك الله لشخصٍ تحبّه، وزره أو اتّصل به مع أهلك. إلى اللقاء!', 'Today\'s mission: make a get-well card for someone you love, and visit or call them with your family. Goodbye for now!']
        ]
      }
    },
    /* ───────── 6 ───────── */
    {
      id: 'first-aid', icon: '🆘', tag: 'care',
      t: ['إسعافٌ آمن للصغار', 'Safe first aid for kids'],
      sub: ['اهدأ، أخبر، اتّصل', 'Stay calm, tell, call'],
      pg: [
        ['🛝😢', 'في الحديقة سقطت سارة أخت يوسف عن الدرّاجة، فخُدشت ركبتها خدشًا صغيرًا وبكت. شعر يوسف بالخوف، ثم تذكّر الكلمات الثلاث التي علّمته إيّاها الدكتورة نور.', 'In the park, Yusuf\'s sister Sara fell off her bike. She got a small scrape on her knee and started to cry. Yusuf felt scared, then he remembered the three words Dr. Noor taught him.'],
        ['😮‍💨1️⃣', '<b>اهدأ</b>: خذ نفسًا عميقًا. الهدوء يساعدك على التفكير ويطمئن المصاب. وتأكّد أنّك أنت في مكانٍ آمن، بعيدًا عن الطريق والسيّارات.', '<b>Stay calm</b>: take a deep breath. Being calm helps you think and comforts the person who is hurt. And make sure you are safe yourself, away from roads and cars.'],
        ['🗣️2️⃣', '<b>أخبر</b>: نادِ شخصًا كبيرًا تثق به فورًا: أباك أو أمّك أو المعلّم. قل بوضوح: «سارة سقطت وجُرحت ركبتها». الكبير هو من يقرّر ماذا نفعل.', '<b>Tell</b>: call a trusted adult straight away: your dad, mum or teacher. Say clearly: "Sara fell and hurt her knee." The adult decides what to do.'],
        ['📞3️⃣', '<b>اتّصل</b>: إذا كان الأمر خطيرًا (شخص لا يتكلّم، أو لا يتنفّس جيّدًا، أو نزيف كبير، أو حريق) ولم يكن هناك كبير، اتّصل برقم الطوارئ في بلدك، وقل اسمك وعنوانك وما حدث، ولا تُغلق الهاتف حتى يطلبوا منك.', '<b>Call</b>: if it is serious (someone is not talking, not breathing well, bleeding a lot, or there is a fire) and no adult is there, call your country\'s emergency number. Say your name, your address and what happened, and stay on the line until they tell you to hang up.'],
        ['💧🩹', 'أمّا خدشٌ صغير في ركبتك أنت: اغسله بماءٍ نظيف جارٍ وأخبر شخصًا كبيرًا. وتذكّر القاعدة الذهبيّة: <b>لا ألمس دم غيري، ولا الأدوية، ولا الأشياء الحادّة</b>. جاءت الأمّ ونظّفت ركبة سارة ووضعت لاصقًا، وقالت ليوسف: «تصرّفت كطبيبٍ حقيقي!».', 'For a small scrape on your own knee: wash it with clean running water and tell an adult. And remember the golden rule: <b>I never touch someone else\'s blood, medicines or sharp things</b>. Their mother came, cleaned Sara\'s knee and put on a plaster, and told Yusuf: "You acted like a real doctor!"']
      ],
      learn: ['ثلاث كلمات: <b>اهدأ — أخبر — اتّصل</b>. الخدش الصغير: ماءٌ نظيف وأُخبر كبيرًا. القاعدة الذهبيّة: <b>لا ألمس الدم ولا الدواء ولا الأشياء الحادّة</b>. وأحفظ عنواني ورقم الطوارئ في بلدي.', 'Three words: <b>Stay calm — Tell — Call</b>. A small scrape: clean water and tell an adult. The golden rule: <b>never touch blood, medicine or sharp things</b>. Know your address and your country\'s emergency number.'],
      islam: ['قال الله تعالى: ﴿وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ﴾ (المائدة: ٢). حين تنادي الكبير وتطلب المساعدة بهدوء، فأنت تتعاون على الخير.', 'Allah says: "And cooperate in righteousness and piety." (al-Ma\'idah 5:2). When you calmly call an adult and ask for help, you are cooperating in good.'],
      src: ['المائدة: ٢', 'Al-Ma\'idah 5:2'],
      mission: ['املأ «بطاقة الطوارئ» مع أحد والديك: عنوانك، ورقم هاتف أحد والديك، ورقم الطوارئ في بلدك. ثم تدرّبا معًا: يمثّل أحدكما موقفًا، وتقول أنت الكلمات الثلاث وتتظاهر بالاتّصال (دون أن تتّصل فعلًا).', 'Fill in "My emergency card" with a parent: your address, a parent\'s phone number, and your country\'s emergency number. Then practise together: one of you acts out a situation, and you say the three words and pretend to make the call (without really calling).'],
      q: ['وجدت حبوب دواء ملوّنة على الأرض. ماذا تفعل؟', 'You find some colourful pills on the floor. What do you do?'],
      o: [['أتذوّق واحدة لأعرف طعمها', 'Taste one to see what it is like'], ['أعطيها لأخي الصغير', 'Give them to my little brother'], ['لا ألمسها وأُخبر شخصًا كبيرًا', 'Leave them and tell an adult', 1]],
      fb: ['ممتاز! الأدوية قد تشبه الحلوى لكنّها خطيرة. لا نلمسها، ونُخبر شخصًا كبيرًا فورًا.', 'Excellent! Medicines can look like sweets but they are dangerous. We do not touch them, and we tell an adult straight away.'],
      podcast: {
        title: ['اهدأ، أخبر، اتّصل', 'Stay calm, tell, call'],
        lines: [
          ['h', 'أهلًا يا أصدقاء! معكم الدكتورة نور. اليوم حلقة مهمّة جدًّا عن الإسعاف الآمن.', 'Hello, friends! This is Dr. Noor. Today is a very important episode about safe first aid.'],
          ['k', 'أختي سارة سقطت عن الدرّاجة البارحة، وخفت كثيرًا!', 'My sister Sara fell off her bike yesterday, and I was really scared!'],
          ['h', 'الخوف شعورٌ طبيعي. لكن عندي ثلاث كلمات سحريّة تساعدك. الأولى: اهدأ.', 'Feeling scared is normal. But I have three magic words to help you. The first one is: stay calm.'],
          ['k', 'آخذ نفسًا عميقًا. وأتأكّد أنّي بعيد عن الطريق.', 'I take a deep breath. And I make sure I am away from the road.'],
          ['h', 'أحسنت. الكلمة الثانية: أخبر. تنادي شخصًا كبيرًا تثق به فورًا.', 'Well done. The second word is: tell. You call a trusted adult straight away.'],
          ['k', 'وإذا لم يكن هناك أحدٌ كبير؟', 'And if there is no adult around?'],
          ['h', 'هنا الكلمة الثالثة: اتّصل. إذا كان الأمر خطيرًا، تتّصل برقم الطوارئ في بلدك وتقول اسمك وعنوانك وما حدث.', 'That is the third word: call. If it is serious, you call your country\'s emergency number and say your name, your address and what happened.'],
          ['k', 'لكنّي لا أحفظ رقم الطوارئ!', 'But I do not know the emergency number!'],
          ['h', 'لذلك ستكتبه اليوم مع أهلك في بطاقة الطوارئ. وتحفظ عنوان بيتك أيضًا.', 'That is why you will write it today with your family on your emergency card. And you will learn your home address too.'],
          ['k', 'وركبة سارة؟ هل أضع عليها شيئًا من الخزانة؟', 'And Sara\'s knee? Should I put something from the cupboard on it?'],
          ['h', 'لا. القاعدة الذهبيّة: لا تلمس دم غيرك، ولا الأدوية، ولا الأشياء الحادّة. أنت تُخبر، والكبير يعتني.', 'No. The golden rule: never touch someone else\'s blood, medicines or sharp things. You tell, and the adult takes care of it.'],
          ['k', 'وإذا خُدشت ركبتي أنا خدشًا صغيرًا؟', 'And if I get a small scrape on my own knee?'],
          ['h', 'تغسله بماءٍ نظيف وتُخبر شخصًا كبيرًا. والله تعالى يقول: وتعاونوا على البرّ والتقوى. طلب المساعدة تعاونٌ على الخير.', 'You wash it with clean water and tell an adult. Allah says: And cooperate in righteousness and piety. Asking for help is cooperating in good.'],
          ['k', 'اهدأ، أخبر، اتّصل. حفظتها!', 'Stay calm, tell, call. I have got it!'],
          ['h', 'مهمّة اليوم: املأ بطاقة الطوارئ مع أهلك وتدرّب على الكلمات الثلاث. إلى اللقاء يا أبطال!', 'Today\'s mission: fill in your emergency card with your family and practise the three words. Goodbye, heroes!']
        ]
      }
    },
    /* ───────── 7 ───────── */
    {
      id: 'check-up', icon: '🩺', tag: 'clinic',
      t: ['أدوات الطبيب والفحص', 'A doctor\'s tools and a check-up'],
      sub: ['لا شيء مخيف هنا', 'Nothing scary here'],
      pg: [
        ['🏥😬', 'حان موعد الفحص الدوري ليوسف. في غرفة الانتظار شعر بقليلٍ من القلق. قالت الدكتورة نور: «الفحص ليس لأنّك مريض، بل لنتأكّد أنّك تكبر بصحّة جيّدة. هيّا أعرّفك على أدواتي».', 'It was time for Yusuf\'s regular check-up. In the waiting room he felt a little nervous. Dr. Noor said: "A check-up is not because you are ill. It is to make sure you are growing up healthy. Let me introduce you to my tools."'],
        ['🩺👂', '<b>السمّاعة</b>: تضعها على صدرك وظهرك لتسمع قلبك ورئتيك. «خذ نفسًا عميقًا... وأخرجه». قد تكون باردةً قليلًا فقط! و<b>الميزان ومسطرة الطول</b> لنعرف كم كبرت.', 'The <b>stethoscope</b>: placed on your chest and back to listen to your heart and lungs. "Take a deep breath... and out." It might feel a little cold, that is all! The <b>scale and height ruler</b> show how much you have grown.'],
        ['🌡️🔦', '<b>مقياس الحرارة</b> يعرف إن كان جسمك ساخنًا. و<b>المنظار الصغير</b> بضوءٍ في طرفه ينظر في أذنيك. و<b>خافض اللسان</b> الخشبي ليرى حلقك: «قل آآآه!». و<b>جهاز الضغط</b> يضغط ذراعك مثل عناقٍ قويّ ثم يرتخي.', 'The <b>thermometer</b> checks whether your body is hot. The little <b>otoscope</b> with a light on the end looks into your ears. The wooden <b>tongue depressor</b> lets the doctor see your throat: "Say aaah!" The <b>blood pressure cuff</b> squeezes your arm like a tight hug, then lets go.'],
        ['💉🛡️', 'وأحيانًا يحتاج الطفل <b>تطعيمًا</b>: وخزة سريعة تحميه من أمراض. يمكنك أن تمسك يد أمّك وتعدّ إلى ثلاثة. أمّا الدواء فالطبيب يقرّره، والوالدان يعطيانه بالمقدار الصحيح، ولا يأخذه الطفل وحده أبدًا.', 'Sometimes a child needs a <b>vaccine</b>: a quick pinch that protects against illnesses. You can hold your mum\'s hand and count to three. As for medicine, the doctor decides on it, the parents give it in the right amount, and a child never takes it alone.'],
        ['🤲🌿', 'قبل أن يخرج يوسف قالت الدكتورة: «نحن الأطبّاء نبحث عن العلاج، لكنّ الشافي هو الله. لذلك نقول: بسم الله، ونأخذ بالأسباب، وندعو». ابتسم يوسف: «لم يكن شيءٌ مخيفًا أبدًا!».', 'Before Yusuf left, the doctor said: "We doctors look for the treatment, but the One who heals is Allah. So we say Bismillah, we take the means, and we make dua." Yusuf smiled: "Nothing was scary at all!"']
      ],
      learn: ['الفحص الدوري يطمئننا أنّنا نكبر بصحّة. <b>السمّاعة</b> تسمع القلب والرئتين، و<b>مقياس الحرارة</b> يقيس الحرارة، و<b>المنظار</b> ينظر في الأذن. <b>الدواء يقرّره الطبيب ويعطيه الكبار فقط</b>. والشافي هو الله، ونحن نأخذ بالأسباب.', 'A regular check-up shows we are growing up healthy. The <b>stethoscope</b> listens to heart and lungs, the <b>thermometer</b> measures temperature, the <b>otoscope</b> looks in the ear. <b>Medicine is decided by the doctor and given only by adults</b>. Allah is the One who heals, and we take the means.'],
      islam: ['قال الله تعالى على لسان إبراهيم عليه السلام: ﴿وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ﴾ (الشعراء: ٨٠). وقال النبي ﷺ: «تَدَاوَوْا، فإنّ الله عزّ وجلّ لم يضع داءً إلّا وضع له دواءً، غير داءٍ واحد: الهَرَم».', 'Allah tells us that Ibrahim, peace be upon him, said: "And when I am ill, it is He who cures me." (ash-Shu\'ara 26:80). The Prophet ﷺ said: "Seek treatment, for Allah has not made a disease without making a cure for it, except one disease: old age."'],
      src: ['الشعراء: ٨٠ · سنن أبي داود: ٣٨٥٥ (صحيح)', 'Ash-Shu\'ara 26:80 · Sunan Abi Dawud 3855 (sahih)'],
      mission: ['اصنع «حقيبة طبيب» للّعب: سمّاعة من خيطٍ وكوبين ورقيّين، ومقياس حرارة من ورق، ومصباح صغير. ثم افحص دميتك أو أحد والديك «فحصًا دوريًّا» واشرح كلّ أداة وأنت تستعملها.', 'Make a pretend "doctor\'s bag": a stethoscope from string and two paper cups, a paper thermometer and a small torch. Then give your teddy or a parent a "check-up" and explain each tool as you use it.'],
      q: ['ماذا تفعل سمّاعة الطبيب؟', 'What does a doctor\'s stethoscope do?'],
      o: [['تسمع القلب والرئتين', 'It listens to the heart and lungs', 1], ['تقيس الطول', 'It measures height'], ['تعطي الدواء', 'It gives medicine']],
      fb: ['صحيح! السمّاعة تساعد الطبيب على سماع دقّات القلب وصوت التنفّس. لا شيء مخيف فيها.', 'Correct! The stethoscope helps the doctor hear the heartbeat and the breathing. Nothing scary about it.'],
      podcast: {
        title: ['ماذا في حقيبة الطبيبة؟', 'What is in the doctor\'s bag?'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! اليوم سأفتح لكم حقيبتي الطبّية. يوسف، هل أنت مستعد؟', 'Assalamu alaikum, friends! Today I will open my doctor\'s bag for you. Yusuf, are you ready?'],
          ['k', 'مستعد، لكنّي بصراحة أخاف قليلًا من الفحص.', 'Ready, but to be honest, I am a little scared of check-ups.'],
          ['h', 'شكرًا لأنّك أخبرتني. كثيرٌ من الأطفال يشعرون بذلك، وحين نعرف الأدوات يذهب الخوف.', 'Thank you for telling me. Many children feel that way, and when we know the tools, the fear goes away.'],
          ['k', 'ما هذا الأنبوب الطويل بالأذنين؟', 'What is this long tube with ear pieces?'],
          ['h', 'هذه السمّاعة. أضعها على صدرك لأسمع قلبك ورئتيك. قد تكون باردة قليلًا فقط.', 'That is the stethoscope. I put it on your chest to hear your heart and lungs. It might just feel a little cold.'],
          ['k', 'وهذا المصباح الصغير؟', 'And this little torch?'],
          ['h', 'هذا المنظار، أنظر به في أذنيك. وهذه العصا الخشبية لأرى حلقك وأنت تقول: آآآه!', 'That is the otoscope. I look into your ears with it. And this wooden stick helps me see your throat while you say aaah!'],
          ['k', 'آآآه! هذا مضحك. وماذا عن الإبرة؟', 'Aaah! That is funny. What about the needle?'],
          ['h', 'أحيانًا نعطي تطعيمًا يحميك من الأمراض. هو وخزة سريعة، وتستطيع أن تمسك يد أمّك وتعدّ إلى ثلاثة.', 'Sometimes we give a vaccine that protects you from illnesses. It is a quick pinch, and you can hold your mum\'s hand and count to three.'],
          ['k', 'وهل أستطيع أن آخذ الدواء وحدي إذا مرضت؟', 'Can I take medicine by myself if I am ill?'],
          ['h', 'أبدًا. الطبيب يقرّر الدواء، والوالدان يعطيانه بالمقدار الصحيح. أنت تخبرهما كيف تشعر فقط.', 'Never. The doctor decides on the medicine, and your parents give it in the right amount. You just tell them how you feel.'],
          ['k', 'إذن الطبيب هو الذي يشفي؟', 'So the doctor is the one who heals?'],
          ['h', 'الطبيب يبحث عن العلاج، لكنّ الشافي هو الله. قال إبراهيم عليه السلام: وإذا مرضت فهو يشفين. والنبي صلّى الله عليه وسلّم قال: تداووا.', 'The doctor looks for the treatment, but the One who heals is Allah. Ibrahim, peace be upon him, said: And when I am ill, it is He who cures me. And the Prophet, peace be upon him, said: Seek treatment.'],
          ['k', 'يعني نذهب إلى الطبيب، ونقول بسم الله، وندعو. جميل!', 'So we go to the doctor, say Bismillah, and make dua. Lovely!'],
          ['h', 'مهمّة اليوم: اصنع سمّاعة من كوبين وخيط، وافحص دميتك فحصًا دوريًّا. إلى اللقاء!', 'Today\'s mission: make a stethoscope from two cups and a string, and give your teddy a check-up. See you soon!']
        ]
      }
    },
    /* ───────── 8 ───────── */
    {
      id: 'health-helper', icon: '🏅', tag: 'clinic',
      t: ['أطبّاؤنا ومشروعي', 'Our physicians and my project'],
      sub: ['الرازي وابن سينا ومساعد الصحّة', 'Ar-Razi, Ibn Sina and the Health Helper'],
      pg: [
        ['📜🏛️', 'في المحطّة الأخيرة فتحت الدكتورة نور كتابًا قديمًا: «قبل أكثر من ألف سنة، كان في بغداد والريّ طبيبٌ مسلم اسمه <b>أبو بكر الرازي</b>. كان يراقب المرضى بدقّة ويكتب ما يراه».', 'At the last station Dr. Noor opened an old book: "More than a thousand years ago, in Baghdad and Rayy, there was a Muslim physician called <b>Abu Bakr ar-Razi</b>. He watched his patients carefully and wrote down what he saw."'],
        ['🔍📝', 'كتب الرازي رسالةً شهيرة فرّق فيها بين مرضين متشابهين هما <b>الجدري والحصبة</b>، ووصف كلّ واحدٍ منهما بدقّة. وكان من أوائل من فعل ذلك. سرّه: الملاحظة الدقيقة والكتابة.', 'Ar-Razi wrote a famous treatise that told apart two similar illnesses, <b>smallpox and measles</b>, describing each one carefully. He was among the first to do so. His secret: careful observation and writing things down.'],
        ['📚🌍', 'ثم جاء <b>ابن سينا</b>، وكتب كتابًا عظيمًا اسمه <b>«القانون في الطبّ»</b>، جمع فيه علوم الطبّ في زمانه. تُرجم إلى اللاتينيّة، وبقي يُدرَّس في جامعات أوروبا قرونًا طويلة.', 'Then came <b>Ibn Sina</b>, who wrote a great book called <b>"The Canon of Medicine" (al-Qanun fi at-Tibb)</b>, gathering the medical knowledge of his time. It was translated into Latin and was taught in European universities for centuries.'],
        ['🖍️📋', 'قال يوسف: «أريد أن أكون مثلهما!». قالت: «ابدأ اليوم. مشروعك: ملصق <b>مساعد الصحّة</b> للعائلة يجمع ما تعلّمته، أو <b>عيادة صغيرة</b> تمثّل فيها الفحص ببطاقة فحص، مع <b>جدول العادات لسبعة أيّام</b>. ولاحظ واكتب مثل الرازي».', 'Yusuf said: "I want to be like them!" She said: "Start today. Your project: a family <b>Health Helper</b> poster with everything you learned, or a <b>little clinic</b> role-play with a check-up card, plus a <b>7-day habits tracker</b>. Observe and write, just like ar-Razi."'],
        ['🎉🩺', 'علّق يوسف ملصقه في المطبخ: «اغسل يديك ٢٠ ثانية — طبق الألوان — نَم مبكّرًا — تحرّك ساعة — اهدأ، أخبر، اتّصل». وبعد سبعة أيّام نظرت العائلة إلى الجدول المليء بالعلامات وقالت: «شكرًا يا طبيبنا الصغير!».', 'Yusuf hung his poster in the kitchen: "Wash hands 20 seconds — Rainbow plate — Sleep early — Move for an hour — Stay calm, tell, call." After seven days the family looked at the tracker full of ticks and said: "Thank you, our little doctor!"']
      ],
      learn: ['<b>الرازي</b> فرّق بين الجدري والحصبة بالملاحظة الدقيقة، و<b>ابن سينا</b> ألّف «القانون في الطبّ» الذي دُرِّس قرونًا. وأنت تبدأ بالعادات الصحيّة، والملاحظة، والكتابة، ومساعدة عائلتك.', '<b>Ar-Razi</b> told smallpox and measles apart through careful observation, and <b>Ibn Sina</b> wrote "The Canon of Medicine", taught for centuries. You start with healthy habits, observing, writing, and helping your family.'],
      islam: ['قدوتنا: <b>أبو بكر الرازي</b> (توفّي نحو ٣١٣هـ / ٩٢٥م) ميّز بين الجدري والحصبة في رسالته المشهورة، و<b>ابن سينا</b> (٣٧٠–٤٢٨هـ / ٩٨٠–١٠٣٧م) ألّف «القانون في الطبّ». تعلّما ليخدما الناس، ونتذكّر قوله تعالى: ﴿وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ﴾ (الشعراء: ٨٠).', 'Our role models: <b>Abu Bakr ar-Razi</b> (died c. 925 CE) distinguished smallpox from measles in his famous treatise, and <b>Ibn Sina</b> (980–1037 CE) wrote "The Canon of Medicine". They learned in order to serve people, and we remember: "And when I am ill, it is He who cures me." (ash-Shu\'ara 26:80)'],
      src: ['الرازي: رسالة في الجدري والحصبة · ابن سينا: القانون في الطبّ · الشعراء: ٨٠', 'Ar-Razi: Treatise on Smallpox and Measles · Ibn Sina: The Canon of Medicine · Ash-Shu\'ara 26:80'],
      mission: ['مشروعك الختامي: اختر واحدًا — (أ) ملصق «مساعد الصحّة» للعائلة فيه خمس قواعد تعلّمتها، أو (ب) «عيادة صغيرة» تمثّل فيها الفحص مع أحد أفراد العائلة وتملأ له «بطاقة فحص» (الطول، هل غسل يديه، كم ساعة نام، كيف يشعر). ثم ابدأ جدول العادات لسبعة أيّام وعلّقه مع بطاقة الطوارئ.', 'Your final project: choose one — (a) a family "Health Helper" poster with five rules you learned, or (b) a "little clinic" role-play where you give a family member a check-up and fill in a "check-up card" (height, did they wash their hands, hours of sleep, how they feel). Then start the 7-day habits tracker and hang it up with your emergency card.'],
      q: ['ما الكتاب الشهير الذي ألّفه ابن سينا؟', 'What famous book did Ibn Sina write?'],
      o: [['كتاب الحيوان', 'The Book of Animals'], ['القانون في الطبّ', 'The Canon of Medicine', 1], ['كتاب الخرائط', 'The Book of Maps']],
      fb: ['أحسنت! «القانون في الطبّ» لابن سينا تُرجم إلى اللاتينيّة ودُرِّس في الجامعات قرونًا. والآن جاء دورك يا طبيبنا الصغير!', 'Well done! Ibn Sina\'s "Canon of Medicine" was translated into Latin and taught at universities for centuries. Now it is your turn, little doctor!'],
      podcast: {
        title: ['من الرازي إلى ملصقي', 'From ar-Razi to my poster'],
        lines: [
          ['h', 'السلام عليكم يا أصدقاء! هذه آخر حلقة في رحلة الطبيب الصغير. يوسف، ماذا تشعر؟', 'Assalamu alaikum, friends! This is the last episode of The Little Doctor journey. Yusuf, how do you feel?'],
          ['k', 'سعيد وحزين قليلًا! وأريد أن أعرف: هل كان هناك أطبّاء مسلمون مشهورون؟', 'Happy, and a little sad! And I want to know: were there famous Muslim doctors?'],
          ['h', 'كثيرون! أحدهم أبو بكر الرازي، عاش قبل أكثر من ألف سنة، وعمل في بغداد والريّ.', 'Many! One of them is Abu Bakr ar-Razi. He lived more than a thousand years ago and worked in Baghdad and Rayy.'],
          ['k', 'وماذا فعل؟', 'What did he do?'],
          ['h', 'كان يراقب مرضاه بدقّة ويكتب. وكتب رسالةً شهيرة فرّق فيها بين مرضين متشابهين، الجدري والحصبة.', 'He watched his patients carefully and wrote things down. He wrote a famous treatise telling apart two similar illnesses, smallpox and measles.'],
          ['k', 'يعني سرّه الملاحظة والكتابة! وأنا أستطيع ذلك.', 'So his secret was observing and writing! I can do that.'],
          ['h', 'بالتأكيد. وبعده جاء ابن سينا، وألّف كتابًا عظيمًا اسمه القانون في الطبّ.', 'Of course. After him came Ibn Sina, who wrote a great book called The Canon of Medicine.'],
          ['k', 'هل قرأه الناس كثيرًا؟', 'Did many people read it?'],
          ['h', 'جدًّا! تُرجم إلى اللاتينيّة، ودرسه طلّاب الطبّ في أوروبا قرونًا طويلة.', 'Very many! It was translated into Latin, and medical students in Europe studied it for centuries.'],
          ['k', 'وأنا، ماذا أفعل الآن بكلّ ما تعلّمته؟', 'And me? What do I do now with everything I learned?'],
          ['h', 'مشروعك الختامي! ملصق مساعد الصحّة للعائلة، أو عيادة صغيرة تفحص فيها أحد أهلك ببطاقة فحص.', 'Your final project! A family Health Helper poster, or a little clinic where you give someone in your family a check-up with a check-up card.'],
          ['k', 'سأكتب على الملصق: اغسل يديك، طبق الألوان، نَم مبكّرًا، تحرّك، اهدأ وأخبر واتّصل!', 'I will write on the poster: wash your hands, rainbow plate, sleep early, move, stay calm, tell and call!'],
          ['h', 'رائع. ومعه جدول العادات لسبعة أيّام. وتذكّر دائمًا: الشافي هو الله، ونحن نأخذ بالأسباب.', 'Wonderful. And with it, the seven-day habits tracker. And always remember: Allah is the One who heals, and we take the means.'],
          ['k', 'شكرًا يا دكتورة نور على هذه الرحلة!', 'Thank you, Dr. Noor, for this journey!'],
          ['h', 'مهمّة اليوم: ابدأ مشروعك وجدول السبعة أيّام، وعلّقهما في البيت. شكرًا لكم يا أطبّاءنا الصغار، في أمان الله!', 'Today\'s mission: start your project and your seven-day tracker, and hang them up at home. Thank you, our little doctors. Go in Allah\'s care!']
        ]
      }
    }
  ]
};
