/* farmer.js — «صانع المهارات» · المزارع الصغير — 8 stations + podcast */
window.SKILLS = window.SKILLS || {};
window.SKILLS.farmer = {
  id: 'farmer', icon: '🌱', color: '#27AE60',
  title: ['المزارع الصغير', 'The Little Farmer'],
  intro: [`تعالَ نزرع بذرةً صغيرة في كوب، ونراقبها تكبر يومًا بعد يوم، ثم نُهدي ثمرتها لمن نحبّ. اللهُ يُنبِت، ونحن نعتني!`,
          `Let us plant a tiny seed in a cup, watch it grow day by day, then gift its harvest to someone we love. Allah makes it grow, and we take care of it!`],
  mentor: { icon: '👴', name: ['جدّو صالح', 'Grandpa Salih'],
    say: [`أهلًا يا مزارعي الصغير! أنا جدّو صالح، زرعتُ الأرض خمسين سنة. في هذه الرحلة سأعلّمك كيف تزرع بذرةً بيدك، وتسقيها بلُطف، وتكتب قصّتها في دفترك.`,
          `Welcome, my little farmer! I am Grandpa Salih, and I have farmed the land for fifty years. On this journey I will teach you to plant a seed with your own hands, water it gently, and write its story in your diary.`] },
  cast: { h: { icon: '👴', name: ['جدّو صالح', 'Grandpa Salih'], g: 'male' },
          k: { icon: '👧', name: ['مريم', 'Maryam'], g: 'female' } },
  goals: [
    ['معرفة ما يحتاجه النبات: الضوء والماء والهواء والتربة', 'زراعة بذرة ومراقبة إنباتها', 'صنع سماد من بقايا المطبخ', 'السقي الصحيح بلا إفراط', 'تسجيل النموّ في دفتر النبتة', 'الرفق بالنحل وديدان الأرض وكل المخلوقات', 'الحصاد والمشاركة والإهداء', 'حفظ الماء والعناية بالأرض'],
    ['Know what a plant needs: light, water, air and soil', 'Plant a seed and watch it sprout', 'Make compost from kitchen scraps', 'Water correctly, never too much', 'Record growth in a plant diary', 'Be kind to bees, earthworms and all creatures', 'Harvest, share and gift', 'Save water and care for the earth']
  ],
  filters: [['plant', 'النبتة', 'The plant'], ['grow', 'أزرع بيدي', 'I grow'], ['earth', 'أرضنا', 'Our earth']],
  parents: [
    `<h3>🌱 كيف تعيشون الرحلة في البيت؟</h3>
<p>هذه رحلة هادئة مدّتها ثلاثة إلى أربعة أسابيع. المشروع الكبير: يزرع طفلك بذرةً بنفسه، ويكتب دفتر نبتته، ثم يُهدي نبتته أو حصادها.</p>
<ul>
<li><b>الأدوات:</b> كوب أو أصيص فيه ثقب في الأسفل، صحن تحته، قطن أو مناديل ورقية، برطمان زجاجي، حبّات فول أو عدس أو حمّص جافّة من المطبخ (غير محمّصة)، مسطرة، ودفتر.</li>
<li><b>الإيقاع:</b> محطّة أو محطّتان في الأسبوع تكفي. المحطّة الثانية تبدأ البذور، وما بعدها يرافق نموّها.</li>
<li><b>السلامة:</b> لا يأكل الطفل أي بذرة أو نبتة نيئة إلا بإذنكم (الفاصولياء الحمراء النيئة ضارّة). اغسلوا الأيدي بعد لمس التراب. لا مبيدات ولا أدوات حادّة.</li>
<li><b>إن لم تنبت البذرة:</b> هذا جزء من التعلّم! جرّبوا بذورًا أخرى، وقولوا معًا: نحن نزرع، واللهُ يُنبِت.</li>
<li><b>الهدية:</b> ساعدوه أن يختار من سيُهدي نبتته: جدّة، جار، معلّمة. فرحة العطاء هي ثمرة الرحلة.</li>
</ul>`,
    `<h3>🌱 How to run this journey at home</h3>
<p>This is a calm journey of three to four weeks. The big project: your child plants a seed, keeps a plant diary, then gifts the plant or its harvest.</p>
<ul>
<li><b>Materials:</b> a cup or pot with a hole in the bottom, a saucer, cotton wool or paper towels, a glass jar, dry beans, lentils or chickpeas from the kitchen (not roasted), a ruler and a notebook.</li>
<li><b>Rhythm:</b> one or two stations a week is plenty. Station two starts the seeds, and the later stations follow their growth.</li>
<li><b>Safety:</b> your child should not eat any raw seed or sprout without your permission (raw red kidney beans are harmful). Wash hands after touching soil. No pesticides and no sharp tools.</li>
<li><b>If a seed does not sprout:</b> that is part of learning! Try other seeds, and say together: we plant, and Allah makes it grow.</li>
<li><b>The gift:</b> help them choose who receives the plant: a grandparent, a neighbour, a teacher. The joy of giving is the real fruit of this journey.</li>
</ul>`
  ],
  worksheet: [
    `<h2>🌱 دفتر نبتتي</h2>
<p>اسم نبتتي: ............ &nbsp; نوع البذرة: ............ &nbsp; يوم الزراعة: ............</p>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%">
<tr><th>التاريخ</th><th>الطول (سم)</th><th>رسمة نبتتي</th><th>الماء الذي أعطيتُه</th><th>ملاحظاتي</th></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
</table>
<h2>✂️ قُصّ وطابِق: ماذا يحتاج النبات؟</h2>
<p>قُصّ البطاقات، ثم ألصق كلّ حاجة بجانب عملها.</p>
<table border="1" cellpadding="10" style="border-collapse:collapse;width:100%">
<tr><td>☀️ الضوء</td><td>💧 الماء</td><td>🌬️ الهواء</td><td>🟫 التربة</td></tr>
<tr><td>تمسك الجذور وتعطي النبتة الأملاح المفيدة</td><td>تأخذ منه الأوراق الطاقة لتطبخ غذاءها</td><td>تشربه الجذور فيحمل الأملاح إلى الأوراق</td><td>تأخذ منه الأوراق ثاني أكسيد الكربون</td></tr>
</table>
<h2>♻️ صندوق السماد: نعم أم لا؟</h2>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%">
<tr><th>✅ نعم، نضعه</th><th>❌ لا، لا نضعه</th></tr>
<tr><td>قشور الخضار والفواكه</td><td>اللحم والسمك والعظام</td></tr>
<tr><td>قشر البيض المطحون</td><td>الحليب والجبن والزيت</td></tr>
<tr><td>أوراق الشاي وبقايا القهوة</td><td>البلاستيك والزجاج والمعادن</td></tr>
<tr><td>الأوراق اليابسة والكرتون الممزّق</td><td>فضلات الحيوانات الأليفة</td></tr>
</table>
<p>☐ زرعتُ بذرتي &nbsp; ☐ كتبتُ دفتري ٣ أسابيع &nbsp; ☐ أهديتُ نبتتي إلى: ............</p>`,
    `<h2>🌱 My Plant Diary</h2>
<p>My plant's name: ............ &nbsp; Type of seed: ............ &nbsp; Planting day: ............</p>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%">
<tr><th>Date</th><th>Height (cm)</th><th>Drawing of my plant</th><th>Water I gave</th><th>My notes</th></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
<tr><td>&nbsp;</td><td></td><td style="height:70px"></td><td></td><td></td></tr>
</table>
<h2>✂️ Cut and match: what does a plant need?</h2>
<p>Cut out the cards, then stick each need next to the job it does.</p>
<table border="1" cellpadding="10" style="border-collapse:collapse;width:100%">
<tr><td>☀️ Light</td><td>💧 Water</td><td>🌬️ Air</td><td>🟫 Soil</td></tr>
<tr><td>Holds the roots and gives the plant useful minerals</td><td>Gives the leaves energy to cook their food</td><td>Roots drink it, and it carries minerals up to the leaves</td><td>Leaves take carbon dioxide from it</td></tr>
</table>
<h2>♻️ Compost box: yes or no?</h2>
<table border="1" cellpadding="8" style="border-collapse:collapse;width:100%">
<tr><th>✅ Yes, put it in</th><th>❌ No, keep it out</th></tr>
<tr><td>Vegetable and fruit peels</td><td>Meat, fish and bones</td></tr>
<tr><td>Crushed eggshells</td><td>Milk, cheese and oil</td></tr>
<tr><td>Tea leaves and coffee grounds</td><td>Plastic, glass and metal</td></tr>
<tr><td>Dry leaves and torn cardboard</td><td>Pet droppings</td></tr>
</table>
<p>☐ I planted my seed &nbsp; ☐ I kept my diary for 3 weeks &nbsp; ☐ I gave my plant to: ............</p>`
  ],
  next: ['../activities/play.html', '🌴', 'واحة المرح والتعلّم', 'Fun and Learning Oasis', 'جرّب مهارة أخرى أو لعبة', 'Try another skill or a game'],
  stations: [
    /* ───────────── 1 ───────────── */
    {
      id: 'plant-needs', icon: '☀️', tag: 'plant',
      t: ['ماذا تحتاج النبتة؟', 'What does a plant need?'],
      sub: ['الضوء والماء والهواء والتربة', 'Light, water, air and soil'],
      pg: [
        ['🏡🌳', `في عطلة الصيف ذهبت <b>مريم</b> إلى مزرعة جدّها صالح. رأت أشجار الزيتون، وأحواض النعناع، وصفوف الطماطم الحمراء.`, `In the summer holidays, <b>Maryam</b> went to Grandpa Salih's farm. She saw olive trees, beds of mint, and rows of red tomatoes.`],
        ['🤔🍅', `سألت مريم: «يا جدّو، أنا آكل لأكبر. فماذا تأكل النبتة؟» ضحك الجدّ وقال: «سؤال مزارعٍ حقيقي! النبتة تصنع طعامها بنفسها.»`, `Maryam asked, "Grandpa, I eat so I can grow. So what does a plant eat?" Grandpa laughed. "A real farmer's question! A plant makes its own food."`],
        ['☀️🍃', `«الورقة الخضراء مثل مطبخٍ صغير. تأخذ <b>ضوء الشمس</b>، و<b>الماء</b> من الجذور، و<b>ثاني أكسيد الكربون</b> من الهواء، فتصنع منها سُكّرًا هو غذاؤها. وتُخرِج لنا الأكسجين الذي نتنفّسه!»`, `"A green leaf is like a tiny kitchen. It takes <b>sunlight</b>, <b>water</b> from the roots, and <b>carbon dioxide</b> from the air, and makes sugar, which is its food. And it gives out the oxygen we breathe!"`],
        ['🟫🌱', `«و<b>التربة</b>؟» سألت مريم. «التربة بيت الجذور: تمسك النبتة كي لا تسقط، وتعطيها الماء وأملاحًا مفيدة. والجذور تحتاج هواءً أيضًا، فالتراب الجيّد فيه فراغات صغيرة.»`, `"And the <b>soil</b>?" asked Maryam. "Soil is the home of the roots. It holds the plant up so it does not fall, and gives it water and useful minerals. Roots need air too, so good soil has tiny spaces in it."`],
        ['🌿🪟', `أخذت مريم نبتتين من النعناع: واحدة عند الشبّاك، وواحدة في خزانة مظلمة. بعد أسبوع صارت نبتة الخزانة صفراء ضعيفة، ونبتة الشبّاك خضراء قويّة. فهمت مريم: بلا ضوء لا تستطيع الورقة أن تطبخ!`, `Maryam took two mint plants: one by the window, one in a dark cupboard. After a week, the cupboard plant was pale and weak, and the window plant was green and strong. Maryam understood: without light, the leaf cannot cook!`]
      ],
      learn: [`النبتة تحتاج أربعة أشياء: <b>الضوء</b> و<b>الماء</b> و<b>الهواء</b> و<b>التربة</b>. أوراقها الخضراء تصنع غذاءها من الضوء والماء وثاني أكسيد الكربون، وتُطلِق الأكسجين. هذا اسمه <b>البناء الضوئي</b>.`,
              `A plant needs four things: <b>light</b>, <b>water</b>, <b>air</b> and <b>soil</b>. Its green leaves make food from light, water and carbon dioxide, and release oxygen. This is called <b>photosynthesis</b>.`],
      islam: [`قال الله تعالى: ﴿فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ ۝ أَنَّا صَبَبْنَا الْمَاءَ صَبًّا ۝ ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا ۝ فَأَنبَتْنَا فِيهَا حَبًّا﴾ (عبس: ٢٤–٢٧). الماء والأرض والحَبّ كلّها من نِعَم الله.`,
              `Allah says: "Let people look at their food: how We pour down water in abundance, then split the earth open, and make grain grow in it." (Abasa 80:24–27). Water, earth and grain are all blessings from Allah.`],
      src: ['عبس: ٢٤–٢٧', 'Abasa 80:24–27'],
      mission: [`ابحث في بيتك عن نبتة (أو اطلب من أهلك واحدة). انظر إليها وأجب: من أين يأتيها الضوء؟ هل تربتها رطبة أم جافّة؟ هل ورقها يميل نحو الشبّاك؟ ارسمها في دفترك واكتب الحاجات الأربع حولها.`,
                `Find a plant at home (or ask your family for one). Look at it and answer: where does its light come from? Is its soil damp or dry? Do its leaves lean towards the window? Draw it in your notebook and write the four needs around it.`],
      q: ['من أين تأتي النبتة بطعامها؟', 'Where does a plant get its food?'],
      o: [[`تشتريه من السوق`, `It buys it at the market`], [`تصنعه أوراقها من الضوء والماء والهواء`, `Its leaves make it from light, water and air`, 1], [`تأكل التراب فقط`, `It only eats soil`]],
      fb: [`أحسنت! الورقة الخضراء مطبخ صغير يصنع السكّر من الضوء والماء وثاني أكسيد الكربون. والتربة تعطيها الماء والأملاح وتمسك جذورها.`, `Well done! A green leaf is a tiny kitchen that makes sugar from light, water and carbon dioxide. The soil gives water and minerals and holds the roots.`],
      podcast: {
        title: ['مطبخ الورقة الخضراء', 'The green leaf kitchen'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم جدّو صالح في بودكاست المزارع الصغير. ومعي اليوم ضيفة مميّزة.`, `Assalamu alaikum, friends! This is Grandpa Salih on The Little Farmer podcast. And today I have a special guest.`],
          ['k', `وعليكم السلام يا جدّو! أنا مريم، وعندي سؤال يحيّرني.`, `Wa alaikum assalam, Grandpa! I am Maryam, and I have a question that puzzles me.`],
          ['h', `هاتِ سؤالك يا مريم، فالمزارع الذكي يسأل كثيرًا.`, `Ask away, Maryam. A clever farmer asks lots of questions.`],
          ['k', `النبتة ليس لها فم. فكيف تأكل؟`, `A plant has no mouth. So how does it eat?`],
          ['h', `سؤال رائع! النبتة لا تأكل مثلنا. هي تطبخ طعامها بنفسها، في أوراقها الخضراء.`, `Great question! A plant does not eat like us. It cooks its own food, inside its green leaves.`],
          ['k', `تطبخ؟ وأين النار؟`, `Cooks? Where is the fire?`],
          ['h', `نارها هي ضوء الشمس. تأخذ الماء من الجذور، وتأخذ غازًا من الهواء اسمه ثاني أكسيد الكربون، ثم تصنع سُكّرًا.`, `Its fire is sunlight. It takes water from the roots, and a gas from the air called carbon dioxide, and then it makes sugar.`],
          ['k', `سُكّر! يعني النبتة تحبّ الحلوى مثلي؟`, `Sugar! So the plant loves sweets like me?`],
          ['h', `هههه، السكّر هو طاقتها كي تكبر. وأجمل شيء أنها تُخرِج الأكسجين، الهواء الذي نتنفّسه نحن.`, `Ha ha, the sugar is its energy to grow. And the best part is that it gives out oxygen, the air that we breathe.`],
          ['k', `وماذا تفعل التربة إذن؟`, `So what does the soil do?`],
          ['h', `التربة بيت الجذور. تمسك النبتة، وتعطيها الماء وأملاحًا صغيرة مفيدة. والجذور تحتاج هواءً في التربة أيضًا.`, `Soil is the home of the roots. It holds the plant and gives it water and tiny useful minerals. And the roots need air in the soil too.`],
          ['k', `إذن الحاجات أربع: ضوء، وماء، وهواء، وتربة!`, `So there are four needs: light, water, air and soil!`],
          ['h', `بالضبط. وكلّها نِعَمٌ من الله. يقول ربّنا إنه صبّ الماء، وشقّ الأرض، وأنبت فيها الحَبّ.`, `Exactly. And all of them are blessings from Allah. Our Lord tells us He poured down the water, split the earth, and made grain grow in it.`],
          ['h', `مهمّة اليوم: ابحث عن نبتة في بيتك، وارسمها، واكتب حولها الحاجات الأربع. إلى اللقاء في الحلقة القادمة!`, `Today's mission: find a plant at home, draw it, and write the four needs around it. See you in the next episode!`]
        ]
      }
    },
    /* ───────────── 2 ───────────── */
    {
      id: 'seed-jar', icon: '🫘', tag: 'plant',
      t: ['البذرة تستيقظ', 'The seed wakes up'],
      sub: ['بذرة في برطمان على قطن مبلول', 'A seed in a jar on wet cotton'],
      pg: [
        ['🫘✋', `أعطى جدّو صالح مريمَ حبّةَ فولٍ يابسة. «هذه البذرة نائمة، وفي داخلها نبتةٌ صغيرة جدًّا، ومعها زادُها من الطعام.»`, `Grandpa Salih gave Maryam a dry broad bean. "This seed is asleep. Inside it is a tiny baby plant, with its own packed lunch of food."`],
        ['🫙💧', `وضعت مريم قطنًا مبلولًا في برطمان زجاجي، ووضعت ثلاث حبّات بين القطن والزجاج حتى تراها. «لا تُغرقيها يا مريم،» قال الجدّ، «البذرة تحتاج ماءً وهواءً معًا.»`, `Maryam put wet cotton in a glass jar and placed three beans between the cotton and the glass so she could see them. "Don't drown them, Maryam," said Grandpa. "A seed needs water and air together."`],
        ['🌡️🫙', `وضعا البرطمان في مكانٍ دافئ. «هل تحتاج الضوء الآن؟» سألت مريم. «ليس بعد. البذرة تأكل من زادها الذي في داخلها. تحتاج الدفء والماء والهواء لتستيقظ.»`, `They put the jar somewhere warm. "Does it need light now?" asked Maryam. "Not yet. The seed eats from the food stored inside it. To wake up, it needs warmth, water and air."`],
        ['🫘➡️🌱', `بعد يومين انتفخت الحبّات وتشقّقت قشرتها. ثم خرج <b>جذرٌ</b> أبيض صغير واتّجه إلى الأسفل! وبعد أيام خرجت <b>ساقٌ</b> خضراء واتّجهت إلى الأعلى.`, `After two days, the beans swelled and their skins cracked. Then a small white <b>root</b> came out and turned downwards! A few days later, a green <b>shoot</b> appeared and turned upwards.`],
        ['🤲✨', `قلبت مريم البرطمان بلطف. بعد يوم عاد الجذر يتّجه إلى الأسفل من جديد! همست: «سبحان الله، من علّم الجذر طريقه؟» ابتسم الجدّ: «الذي فلق الحبّة.»`, `Maryam gently turned the jar on its side. A day later, the root had curved downwards again! She whispered, "Subhan Allah, who taught the root its way?" Grandpa smiled. "The One who splits the seed."`]
      ],
      learn: [`البذرة نبتةٌ نائمة ومعها طعامها. حين تجد <b>الماء والهواء والدفء</b> تستيقظ، وهذا اسمه <b>الإنبات</b>. يخرج <b>الجذر</b> أوّلًا نحو الأسفل، ثم <b>الساق</b> نحو الأعلى. وحين تظهر الأوراق تحتاج الضوء.`,
              `A seed is a sleeping plant with its own food. When it finds <b>water, air and warmth</b>, it wakes up. This is called <b>germination</b>. The <b>root</b> comes out first and grows down, then the <b>shoot</b> grows up. Once leaves appear, it needs light.`],
      islam: [`قال الله تعالى: ﴿إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَىٰ﴾ (الأنعام: ٩٥). اللهُ هو الذي يشقّ الحبّة والنواة فيُخرِج منها النبتة.`,
              `Allah says: "Indeed, Allah is the One who splits the grain and the date-stone." (al-An'am 6:95). It is Allah who splits the seed open and brings out the plant.`],
      src: ['الأنعام: ٩٥', 'Al-An\'am 6:95'],
      mission: [`<b>بداية مشروعك الكبير!</b> بمساعدة أحد والديك: ضع قطنًا مبلولًا في برطمان أو كوب شفّاف، وضع ٣–٤ حبّات فول أو حمّص أو عدس بين القطن والزجاج. ضعه في مكان دافئ، وبلّل القطن إذا جفّ. اكتب اليوم تاريخ الزراعة في دفترك.`,
                `<b>The start of your big project!</b> With a parent's help: put wet cotton in a jar or clear cup, and place 3–4 beans, chickpeas or lentils between the cotton and the glass. Put it somewhere warm, and dampen the cotton if it dries. Write today's planting date in your diary.`],
      q: ['ما الذي يخرج من البذرة أوّلًا؟', 'What comes out of the seed first?'],
      o: [[`الوردة`, `The flower`], [`الورقة الخضراء`, `The green leaf`], [`الجذر، ويتّجه إلى الأسفل`, `The root, growing downwards`, 1]],
      fb: [`صحيح! الجذر يخرج أوّلًا ليشرب الماء ويثبّت النبتة، ثم تخرج الساق إلى الأعلى نحو الضوء.`, `Correct! The root comes out first to drink water and anchor the plant, then the shoot grows up towards the light.`],
      podcast: {
        title: ['سرّ البذرة النائمة', 'The secret of the sleeping seed'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! معكم جدّو صالح. واليوم في يدي شيء صغير جدًّا، فيه سرّ كبير.`, `Assalamu alaikum, friends! Grandpa Salih here. Today I am holding something very small, with a very big secret.`],
          ['k', `وعليكم السلام! هذه حبّة فول يا جدّو. ما سرّها؟`, `Wa alaikum assalam! That is a bean, Grandpa. What is its secret?`],
          ['h', `في داخلها نبتة صغيرة نائمة، ومعها زاد من الطعام، مثل حقيبة رحلة.`, `Inside it is a tiny sleeping plant, with its own supply of food, like a travel bag.`],
          ['k', `وكيف نوقظها؟ هل نصرخ عليها؟`, `And how do we wake it up? Do we shout at it?`],
          ['h', `هههه، لا يا مريم. نعطيها ثلاثة أشياء: ماءً، وهواءً، ودفئًا.`, `Ha ha, no, Maryam. We give it three things: water, air and warmth.`],
          ['k', `فقط؟ ألا تحتاج الشمس؟`, `That is all? Does it not need the sun?`],
          ['h', `ليس في البداية. هي تأكل من زادها. لكن حين تخرج أوراقها الخضراء، ستحتاج الضوء لتطبخ طعامها.`, `Not at the start. It eats from its own food supply. But once its green leaves come out, it will need light to cook its food.`],
          ['k', `وماذا يخرج منها أوّلًا؟`, `And what comes out first?`],
          ['h', `الجذر! يخرج أبيض صغيرًا ويتّجه إلى الأسفل دائمًا. حتى لو قلبتِ البرطمان، يعود ويتّجه إلى الأسفل.`, `The root! It comes out small and white and always grows down. Even if you turn the jar over, it curves back down again.`],
          ['k', `سبحان الله! من أين يعرف الطريق؟`, `Subhan Allah! How does it know the way?`],
          ['h', `اللهُ خلقه هكذا. يقول تعالى: إنّ الله فالقُ الحَبّ والنوى. هو الذي يشقّ البذرة ويُخرِج النبتة.`, `Allah created it that way. He says: Indeed, Allah is the One who splits the grain and the date-stone. He opens the seed and brings out the plant.`],
          ['k', `وإذا وضعتُ ماءً كثيرًا جدًّا؟`, `And what if I put in loads of water?`],
          ['h', `ستغرق البذرة ولا تجد هواءً، وقد تتعفّن. القطن يكون مبلولًا، لا سابحًا في الماء.`, `The seed will drown with no air, and it may rot. The cotton should be damp, not swimming in water.`],
          ['h', `مهمّة اليوم: ازرع حبّاتك على قطن مبلول في برطمان، واكتب تاريخ اليوم في دفترك. إلى اللقاء!`, `Today's mission: plant your beans on damp cotton in a jar, and write today's date in your diary. See you soon!`]
        ]
      }
    },
    /* ───────────── 3 ───────────── */
    {
      id: 'soil-compost', icon: '🪱', tag: 'earth',
      t: ['التربة والسماد', 'Soil and compost'],
      sub: ['نحوّل قشور المطبخ إلى غذاء للأرض', 'Turning kitchen peels into food for the earth'],
      pg: [
        ['🥕🗑️', `بعد الغداء رأت مريم أمّها تجمع قشور الجزر والبطاطا. «إلى سلّة المهملات؟» قال الجدّ: «لا! هذه كنز. سنصنع منها <b>سمادًا</b>.»`, `After lunch, Maryam saw her mother gathering carrot and potato peels. "Into the bin?" Grandpa said, "No! These are treasure. We will make <b>compost</b> from them."`],
        ['🟫🔍', `أخذ الجدّ حفنة من تراب المزرعة الداكن. «انظري: فيه حُبيبات رمل، وطين ناعم، وبقايا أوراق قديمة صارت ترابًا. هذه البقايا تجعل التربة غنيّة.»`, `Grandpa picked up a handful of dark farm soil. "Look: it has grains of sand, soft clay, and bits of old leaves that have turned into soil. Those old bits make the soil rich."`],
        ['🍂🥬', `في صندوق السماد وضعا طبقة من <b>الأوراق اليابسة</b> والكرتون الممزّق، ثم طبقة من <b>قشور الخضار</b> وأوراق الشاي وقشر البيض المطحون. «لا لحم، ولا جبن، ولا زيت،» قال الجدّ، «فهي تُفسد الرائحة وتجذب الحيوانات.»`, `In the compost box they put a layer of <b>dry leaves</b> and torn cardboard, then a layer of <b>vegetable peels</b>, tea leaves and crushed eggshells. "No meat, no cheese, no oil," said Grandpa. "They make it smell bad and attract animals."`],
        ['🦠🪱', `«من يأكل القشور؟» سألت مريم. «جنود صغار لا نراها: كائنات دقيقة، وديدان الأرض. تأكل البقايا ببطء وتحوّلها إلى تراب أسود غنيّ.» وكانا يقلّبان الصندوق ويرشّان عليه قليلًا من الماء كلّ أسبوع.`, `"Who eats the peels?" asked Maryam. "Tiny workers we cannot see, called microbes, and earthworms. They slowly eat the scraps and turn them into rich dark soil." Every week they turned the box and sprinkled it with a little water.`],
        ['⏳🌻', `بعد أسابيع طويلة صار الصندوق ترابًا داكنًا رائحته مثل الغابة بعد المطر. خلطته مريم مع تراب أصيصها. «الأرض التي كانت ميتة صارت حيّة!»`, `After many weeks, the box had become dark soil that smelled like a forest after rain. Maryam mixed it into her pot's soil. "The earth that was dead has come alive!"`]
      ],
      learn: [`التربة خليط من الرمل والطين وبقايا النباتات والهواء والماء. <b>السماد</b> نصنعه من قشور الخضار والفواكه والأوراق اليابسة، فتحوّلها الكائنات الدقيقة والديدان إلى غذاء للتربة. لا نضع اللحم ولا الألبان ولا الزيت. وهكذا لا نرمي ما يمكن أن ينفع.`,
              `Soil is a mix of sand, clay, old plant bits, air and water. <b>Compost</b> is made from fruit and vegetable peels and dry leaves; microbes and worms turn them into food for the soil. We keep out meat, dairy and oil. This way, we do not throw away what can be useful.`],
      islam: [`قال الله تعالى: ﴿وَآيَةٌ لَّهُمُ الْأَرْضُ الْمَيْتَةُ أَحْيَيْنَاهَا وَأَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُونَ﴾ (يس: ٣٣). اللهُ يُحيي الأرض، ونحن نعتني بها ولا نُضيّع النِّعَم.`,
              `Allah says: "And a sign for them is the dead earth: We give it life and bring forth grain from it, and from it they eat." (Ya-Sin 36:33). Allah gives the earth life, and we take care of it and do not waste His blessings.`],
      src: ['يس: ٣٣', 'Ya-Sin 36:33'],
      mission: [`مع أحد والديك: اجمع اليوم قشور الخضار والفواكه في وعاء. إذا كان عندكم حديقة أو شرفة، اصنعوا صندوق سماد صغيرًا (أو قارورة بلاستيكية كبيرة مقصوصة) بطبقات: أوراق يابسة، ثم قشور، ثم قليل من التراب. وإلا فادفن القشور الصغيرة في تراب أصيص. اغسل يديك بعدها.`,
                `With a parent: collect today's fruit and vegetable peels in a bowl. If you have a garden or balcony, make a small compost box (or a large cut plastic bottle) in layers: dry leaves, then peels, then a little soil. If not, bury small peels in the soil of a pot. Wash your hands afterwards.`],
      q: ['أيّ هذه نضعه في صندوق السماد؟', 'Which of these goes in the compost box?'],
      o: [[`قطعة جبن`, `A piece of cheese`], [`كيس بلاستيك`, `A plastic bag`], [`قشر الموز والجزر`, `Banana and carrot peels`, 1]],
      fb: [`ممتاز! قشور الخضار والفواكه تتحلّل وتصير غذاءً للتربة. أمّا الجبن فيُفسد الرائحة، والبلاستيك لا يتحلّل أبدًا تقريبًا.`, `Excellent! Fruit and vegetable peels break down and feed the soil. Cheese makes it smell bad, and plastic almost never breaks down.`],
      podcast: {
        title: ['كنز في سلّة القشور', 'Treasure in the peel bin'],
        lines: [
          ['h', `السلام عليكم يا مزارعين! معكم جدّو صالح. اليوم نتكلّم عن شيء نرميه كلّ يوم، وهو كنز.`, `Assalamu alaikum, farmers! Grandpa Salih here. Today we talk about something we throw away every day, and it is treasure.`],
          ['k', `وعليكم السلام! أيّ كنز يا جدّو؟ ذهب؟`, `Wa alaikum assalam! What treasure, Grandpa? Gold?`],
          ['h', `أفضل من الذهب للنبات! قشور الخضار والفواكه.`, `Better than gold, for plants! Fruit and vegetable peels.`],
          ['k', `القشور؟ لكنها تصير طريّة وغريبة!`, `Peels? But they go soft and strange!`],
          ['h', `بالضبط. هذا هو السحر الطبيعي. كائنات صغيرة جدًّا لا نراها، وديدان الأرض، تأكلها ببطء وتحوّلها إلى تراب أسود غنيّ. نسمّيه السماد.`, `Exactly. That is nature at work. Tiny living things we cannot see, and earthworms, eat them slowly and turn them into rich dark soil. We call it compost.`],
          ['k', `هل أضع فيه بقايا الدجاج من الغداء؟`, `Can I put the chicken leftovers from lunch in it?`],
          ['h', `لا يا مريم. لا لحم، ولا عظام، ولا جبن، ولا زيت. رائحتها تصير سيّئة، وتجذب الحيوانات.`, `No, Maryam. No meat, no bones, no cheese and no oil. They start to smell bad and attract animals.`],
          ['k', `إذن ماذا أضع؟`, `So what can I put in?`],
          ['h', `قشور الخضار والفواكه، وأوراق الشاي، وقشر البيض المطحون. ومعها أشياء بنّية يابسة، مثل الأوراق الجافّة والكرتون الممزّق.`, `Fruit and vegetable peels, tea leaves, and crushed eggshells. And some dry brown things too, like dead leaves and torn cardboard.`],
          ['k', `وكم يحتاج من الوقت؟`, `How long does it take?`],
          ['h', `أسابيع كثيرة، وأحيانًا شهورًا. نقلّبه ونرشّ عليه قليلًا من الماء، ونصبر.`, `Many weeks, sometimes months. We turn it, sprinkle a little water, and we are patient.`],
          ['k', `يعني الأرض الميتة تصير حيّة!`, `So the dead earth comes alive!`],
          ['h', `أحسنتِ. والله تعالى يقول: وآيةٌ لهم الأرضُ الميتةُ أحييناها، وأخرجنا منها حبًّا فمنه يأكلون.`, `Well said. And Allah says: a sign for them is the dead earth; We give it life and bring forth grain from it, and from it they eat.`],
          ['h', `مهمّة اليوم: اجمع قشور اليوم مع أهلك، وابدأ صندوق سماد صغيرًا، أو ادفنها في تراب أصيص. إلى اللقاء!`, `Today's mission: collect today's peels with your family and start a small compost box, or bury them in a pot of soil. Goodbye for now!`]
        ]
      }
    },
    /* ───────────── 4 ───────────── */
    {
      id: 'plant-water', icon: '💧', tag: 'grow',
      t: ['الزراعة والسقي الصحيح', 'Planting and watering right'],
      sub: ['ماءٌ كافٍ، لا كثيرٌ ولا قليل', 'Enough water, not too much, not too little'],
      pg: [
        ['🌱🫙', `صار لنبتات مريم في البرطمان جذورٌ وساقٌ وورقتان صغيرتان. قال الجدّ: «آن الأوان! البيت الصغير ضاق عليها. ننقلها إلى كوبٍ فيه تراب.»`, `Maryam's jar plants now had roots, a stem and two little leaves. Grandpa said, "It is time! The little house is too small. Let us move them to a cup of soil."`],
        ['🥤🕳️', `أخذا كوبًا قديمًا، وصنع الجدّ في أسفله <b>ثقبًا صغيرًا</b>. «لماذا الثقب؟» «كي يخرج الماء الزائد. الجذور تحتاج أن تتنفّس، والماء الراكد يخنقها.»`, `They took an old cup, and Grandpa made a <b>small hole</b> in the bottom. "Why the hole?" "So extra water can drain out. Roots need to breathe, and standing water suffocates them."`],
        ['🤲🟫', `ملأت مريم الكوب بالتراب والسماد، وصنعت حفرة بإصبعها، ووضعت النبتة بلطف والجذر إلى الأسفل، ثم غطّته بالتراب وضغطت حوله برفق. ووضعت تحت الكوب صحنًا.`, `Maryam filled the cup with soil and compost, made a hole with her finger, and gently placed the plant with its root pointing down. Then she covered it and pressed the soil softly around it. She put a saucer under the cup.`],
        ['🚿😟', `في اليوم التالي أرادت مريم أن تسقيها مرّة أخرى، وأخرى، وأخرى. أوقفها الجدّ: «يا مريم، الماء الكثير يُغرق الجذور فتتعفّن. المحبّة ليست في الكثرة، بل في القدر الصحيح.»`, `The next day, Maryam wanted to water it again, and again, and again. Grandpa stopped her. "Maryam, too much water drowns the roots and they rot. Love is not about more, it is about the right amount."`],
        ['☝️🟫', `علّمها الجدّ <b>اختبار الإصبع</b>: «أدخلي إصبعك في التراب إلى أوّل عُقدة. إن كان جافًّا فاسقيها بهدوء عند الجذور حتى يخرج قليلٌ من الماء من الثقب. وإن كان رطبًا فانتظري.»`, `Grandpa taught her the <b>finger test</b>: "Push your finger into the soil up to the first knuckle. If it is dry, water gently at the base until a little comes out of the hole. If it is damp, wait."`]
      ],
      learn: [`نزرع النبتة في وعاء له <b>ثقبٌ</b> في أسفله، والجذر إلى الأسفل، ونضغط التراب حوله برفق. نسقي <b>عند الجذور</b> حين يكون التراب جافًّا من الأعلى، ولا نُكثر: الماء الزائد يُغرق الجذور ويُعفّنها. والأفضل السقي في الصباح أو المساء.`,
              `We plant in a pot with a <b>hole</b> in the bottom, roots down, and press the soil gently around them. We water <b>at the base</b> when the top of the soil is dry, and not too much: extra water drowns and rots the roots. Morning or evening is the best time to water.`],
      islam: [`قال الله تعالى: ﴿أَفَرَأَيْتُم مَّا تَحْرُثُونَ ۝ أَأَنتُمْ تَزْرَعُونَهُ أَمْ نَحْنُ الزَّارِعُونَ﴾ (الواقعة: ٦٣–٦٤). نحن نضع البذرة ونسقيها، واللهُ وحده هو الذي يُنبِتها.`,
              `Allah says: "Have you seen what you sow? Is it you who make it grow, or are We the Grower?" (al-Waqi'ah 56:63–64). We place the seed and water it, but Allah alone makes it grow.`],
      src: ['الواقعة: ٦٣–٦٤', 'Al-Waqi\'ah 56:63–64'],
      mission: [`مع أحد والديك: اصنعوا ثقبًا صغيرًا في أسفل كوب، واملؤوه بالتراب، وانقل إليه أقوى نبتة من البرطمان (أو ازرع فيه بذرتين مباشرة على عمق إصبع). ضعه عند الشبّاك فوق صحن. قم باختبار الإصبع كلّ يوم، ولا تسقِ إلا إذا كان التراب جافًّا. قل: بسم الله.`,
                `With a parent: make a small hole in the bottom of a cup, fill it with soil, and move your strongest jar plant into it (or sow two seeds straight in, one finger deep). Put it on a saucer by the window. Do the finger test every day, and water only when the soil is dry. Say: Bismillah.`],
      q: ['متى نسقي النبتة؟', 'When should we water the plant?'],
      o: [[`حين يكون التراب جافًّا عند اختبار الإصبع`, `When the soil feels dry in the finger test`, 1], [`كلّ ساعة حتى يمتلئ الكوب`, `Every hour until the cup is full`], [`مرّة واحدة في الشهر فقط`, `Only once a month`]],
      fb: [`أحسنت! الجذور تحتاج الماء والهواء معًا. اختبار الإصبع يخبرك متى تحتاج نبتتك أن تشرب.`, `Well done! Roots need both water and air. The finger test tells you when your plant needs a drink.`],
      podcast: {
        title: ['اختبار الإصبع العجيب', 'The amazing finger test'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! جدّو صالح معكم، ومعي مريم. ونبتتها انتقلت اليوم إلى بيتٍ جديد!`, `Assalamu alaikum, friends! Grandpa Salih with you, and Maryam is here. Her plant moved into a new home today!`],
          ['k', `وعليكم السلام! نعم، نقلتُها إلى كوب فيه تراب. وأحبّها كثيرًا، فسقيتُها خمس مرّات!`, `Wa alaikum assalam! Yes, I moved it into a cup of soil. And I love it so much, I watered it five times!`],
          ['h', `أوه! خمس مرّات في يوم واحد؟ هذا حبّ يُغرق المسكينة.`, `Oh! Five times in one day? That kind of love could drown the poor thing.`],
          ['k', `يُغرقها؟ لكنّ النبات يحبّ الماء!`, `Drown it? But plants love water!`],
          ['h', `يحبّه، نعم. لكنّ الجذور تتنفّس أيضًا. إذا امتلأ التراب بالماء دائمًا لا يبقى هواء، فتختنق الجذور وتتعفّن.`, `They love it, yes. But roots also breathe. If the soil is always full of water, there is no air left, and the roots suffocate and rot.`],
          ['k', `فكيف أعرف أنها عطشانة؟`, `So how do I know when it is thirsty?`],
          ['h', `بإصبعك! أدخليه في التراب إلى أوّل عُقدة. إن كان جافًّا فاسقيها. وإن كان رطبًا فقولي لها: ليس الآن يا حبيبتي.`, `With your finger! Push it into the soil up to the first knuckle. If it is dry, water it. If it is damp, tell it: not now, my dear.`],
          ['k', `هههه، سأكلّمها كلّ يوم! ولماذا صنعتَ ثقبًا في الكوب؟`, `Ha ha, I will talk to it every day! And why did you make a hole in the cup?`],
          ['h', `كي يخرج الماء الزائد إلى الصحن. بلا ثقب يصير الكوب بِركة صغيرة.`, `So the extra water can drain into the saucer. Without a hole, the cup becomes a little pond.`],
          ['k', `وأين أصبّ الماء؟ على الأوراق؟`, `And where do I pour the water? On the leaves?`],
          ['h', `عند الجذور، على التراب، بهدوء. في الصباح أو المساء، حين لا تكون الشمس حارّة جدًّا.`, `At the base, on the soil, gently. In the morning or evening, when the sun is not too hot.`],
          ['k', `أنا أضع البذرة وأسقيها. لكن من الذي يجعلها تكبر حقًّا؟`, `I put in the seed and water it. But who really makes it grow?`],
          ['h', `سؤالٌ جميل. الله تعالى يسألنا: أأنتم تزرعونه أم نحن الزارعون؟ نحن نعمل، واللهُ هو الذي يُنبِت.`, `A beautiful question. Allah asks us: is it you who make it grow, or are We the Grower? We do the work, and Allah makes it grow.`],
          ['h', `مهمّة اليوم: ازرع نبتتك في كوب له ثقب، وقم باختبار الإصبع كلّ صباح. أراك في الحلقة القادمة!`, `Today's mission: plant your seedling in a cup with a hole, and do the finger test every morning. See you next episode!`]
        ]
      }
    },
    /* ───────────── 5 ───────────── */
    {
      id: 'plant-diary', icon: '📏', tag: 'grow',
      t: ['دفتر نبتتي', 'My plant diary'],
      sub: ['أراقب وأقيس وأرسم', 'I watch, measure and draw'],
      pg: [
        ['📓✏️', `أهدى الجدّ مريمَ دفترًا أخضر. «المزارع الحقيقي لا ينظر فقط، بل <b>يُسجّل</b>. كلّ يومين، اكتبي التاريخ، وطول النبتة، وعدد أوراقها، وارسميها.»`, `Grandpa gave Maryam a green notebook. "A real farmer does not just look, he <b>records</b>. Every two days, write the date, the plant's height and how many leaves it has, and draw it."`],
        ['📏🌱', `وضعت مريم المسطرة بجانب الساق، من التراب إلى أعلى ورقة: <b>٣ سنتيمترات</b>. بعد أربعة أيام: <b>٦ سنتيمترات</b>! «تضاعف طولها!» صاحت.`, `Maryam held the ruler beside the stem, from the soil to the top leaf: <b>3 centimetres</b>. Four days later: <b>6 centimetres</b>! "It doubled!" she shouted.`],
        ['🪟↗️', `لاحظت مريم شيئًا غريبًا: النبتة كلّها تميل نحو الشبّاك! قال الجدّ: «إنها تمدّ نفسها نحو الضوء. أديري الكوب قليلًا كلّ يومين لتنمو مستقيمة.»`, `Maryam noticed something strange: the whole plant was leaning towards the window! Grandpa said, "It is stretching towards the light. Turn the cup a little every two days so it grows straight."`],
        ['🍂🔍', `في يومٍ رأت ورقةً صفراء في الأسفل. خافت قليلًا. «لا بأس،» قال الجدّ، «الأوراق الأولى تُعطي زادها ثم تذبل. لكن إن اصفرّت أوراق كثيرة، فاسألي: هل أكثرتُ الماء؟ هل يكفي الضوء؟»`, `One day she saw a yellow leaf at the bottom. She worried a little. "That is fine," said Grandpa. "The first seed leaves give away their food and then wither. But if many leaves turn yellow, ask: did I water too much? Is there enough light?"`],
        ['📈🌿', `في آخر الأسبوع الثالث صار دفتر مريم مليئًا بالرسوم والأرقام. رسمت خطًّا يصعد مثل السُّلّم. «دفتري يحكي قصّة نبتتي!»`, `By the end of the third week, Maryam's diary was full of drawings and numbers. She drew a line climbing like a staircase. "My diary tells my plant's story!"`]
      ],
      learn: [`العالِم والمزارع <b>يراقبان ويسجّلان</b>. في دفتر النبتة نكتب: التاريخ، الطول بالسنتيمتر، عدد الأوراق، كمّية الماء، ورسمة. النبتة تميل نحو <b>الضوء</b>، فنُدير الوعاء لتنمو مستقيمة. والأوراق الصفراء رسالة نقرؤها بهدوء.`,
              `Scientists and farmers <b>observe and record</b>. In a plant diary we write the date, the height in centimetres, the number of leaves, the water given, and a drawing. Plants lean towards the <b>light</b>, so we turn the pot to help them grow straight. Yellow leaves are a message we read calmly.`],
      islam: [`قال الله تعالى: ﴿انظُرُوا إِلَىٰ ثَمَرِهِ إِذَا أَثْمَرَ وَيَنْعِهِ ۚ إِنَّ فِي ذَٰلِكُمْ لَآيَاتٍ لِّقَوْمٍ يُؤْمِنُونَ﴾ (الأنعام: ٩٩). الله يدعونا أن ننظر إلى النبات وهو يكبر وينضج، ففيه آياتٌ تدلّ عليه.`,
              `Allah says: "Look at its fruit when it bears fruit, and at its ripening. Surely in that are signs for people who believe." (al-An'am 6:99). Allah invites us to watch plants grow and ripen, because in them are signs that point to Him.`],
      src: ['الأنعام: ٩٩', 'Al-An\'am 6:99'],
      mission: [`اطبع ورقة «دفتر نبتتي» أو ارسم جدولها في دفترك. اليوم وكلّ يومين: قِس طول نبتتك بالمسطرة من التراب إلى أعلى ورقة، وعُدّ الأوراق، وارسمها، واكتب هل سقيتَها. استمرّ ثلاثة أسابيع على الأقل.`,
                `Print the "My Plant Diary" sheet or draw its table in your notebook. Today and every two days: measure your plant with a ruler from the soil to the top leaf, count the leaves, draw it, and write whether you watered it. Keep going for at least three weeks.`],
      q: ['لماذا تميل النبتة نحو الشبّاك؟', 'Why does the plant lean towards the window?'],
      o: [[`لأنها تريد أن ترى الشارع`, `Because it wants to see the street`], [`لأنها تمدّ نفسها نحو الضوء`, `Because it stretches towards the light`, 1], [`لأن الماء كثير`, `Because there is too much water`]],
      fb: [`صحيح! النبتة تحتاج الضوء لتصنع غذاءها، فتنمو نحوه. أَدِر الكوب قليلًا لتنمو مستقيمة.`, `Correct! The plant needs light to make food, so it grows towards it. Turn the cup a little so it grows straight.`],
      podcast: {
        title: ['نبتتي ترقص نحو الشبّاك', 'My plant dances to the window'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! جدّو صالح هنا. ومريم جاءت اليوم ومعها دفتر أخضر.`, `Assalamu alaikum, friends! Grandpa Salih here. Maryam came today carrying a green notebook.`],
          ['k', `وعليكم السلام! هذا دفتر نبتتي يا جدّو. فيه أرقام ورسوم.`, `Wa alaikum assalam! This is my plant diary, Grandpa. It has numbers and drawings.`],
          ['h', `ما شاء الله! اقرئي لنا آخر ما كتبتِ.`, `Masha Allah! Read us your latest entry.`],
          ['k', `يوم الاثنين: ثلاثة سنتيمترات وورقتان. يوم الجمعة: ستّة سنتيمترات وأربع أوراق!`, `Monday: three centimetres and two leaves. Friday: six centimetres and four leaves!`],
          ['h', `تضاعف طولها في أربعة أيام! لو لم تكتبي، هل كنتِ ستعرفين؟`, `It doubled in four days! If you had not written it down, would you have known?`],
          ['k', `لا، كنتُ سأقول فقط: كبرت قليلًا.`, `No, I would just have said: it got a bit bigger.`],
          ['h', `هذا سرّ العلماء. لا يكتفون بالنظر، بل يقيسون ويسجّلون.`, `That is the secret of scientists. They do not just look; they measure and record.`],
          ['k', `جدّو، نبتتي تميل نحو الشبّاك كأنها ترقص. لماذا؟`, `Grandpa, my plant leans towards the window like it is dancing. Why?`],
          ['h', `إنها تمدّ نفسها نحو الضوء، لأنها تطبخ طعامها به. أديري الكوب قليلًا كلّ يومين، فتنمو مستقيمة.`, `It is stretching towards the light, because it cooks its food with it. Turn the cup a little every two days, and it will grow straight.`],
          ['k', `ورأيتُ ورقة صفراء. هل نبتتي مريضة؟`, `And I saw a yellow leaf. Is my plant sick?`],
          ['h', `لا تقلقي. الأوراق الأولى تعطي زادها ثم تذبل. لكن إن اصفرّت أوراق كثيرة، اسألي نفسك: هل أكثرتُ الماء؟`, `Don't worry. The very first leaves give away their stored food and then wither. But if many leaves turn yellow, ask yourself: did I water too much?`],
          ['k', `سأكتب ذلك في الملاحظات!`, `I will write that in my notes!`],
          ['h', `أحسنتِ. والله يقول: انظروا إلى ثمره إذا أثمر وينعه. النظر بتأمّل عبادةٌ جميلة.`, `Well done. And Allah says: look at its fruit when it bears fruit, and at its ripening. Watching carefully and reflecting is a beautiful act of worship.`],
          ['h', `مهمّة اليوم: قِس نبتتك، وعُدّ أوراقها، وارسمها في دفترك. إلى اللقاء يا مزارعين!`, `Today's mission: measure your plant, count its leaves, and draw it in your diary. Goodbye, farmers!`]
        ]
      }
    },
    /* ───────────── 6 ───────────── */
    {
      id: 'garden-helpers', icon: '🐝', tag: 'earth',
      t: ['أصدقاء الحديقة', 'Garden helpers'],
      sub: ['النحل وديدان الأرض، والرفق بكل مخلوق', 'Bees, earthworms and kindness to every creature'],
      pg: [
        ['🐝🌼', `في المزرعة طارت نحلة قرب مريم، فرفعت يدها لتضربها. أمسك الجدّ يدها بلطف: «اهدئي ولا تتحرّكي بسرعة. النحلة لا تريدك، تريد الزهرة. وهي صديقتنا الكبيرة!»`, `On the farm, a bee flew near Maryam and she raised her hand to swat it. Grandpa gently held her hand. "Stay calm and move slowly. The bee does not want you, it wants the flower. And it is our great friend!"`],
        ['🌸➡️🍎', `«النحلة تنقل <b>حبوب اللقاح</b> من زهرة إلى زهرة. وبهذا تتحوّل كثيرٌ من الأزهار إلى ثمار: التفّاح، والخيار، واللوز. بلا نحل تقلّ ثمارٌ كثيرة!»`, `"The bee carries <b>pollen</b> from flower to flower. That is how many flowers turn into fruit: apples, cucumbers, almonds. Without bees, we would have much less fruit!"`],
        ['🪱🟫', `حفر الجدّ قليلًا فظهرت <b>دودة أرض</b> حمراء. «هذه مهندسة التربة. تحفر أنفاقًا يدخل منها الهواء والماء إلى الجذور، وفضلاتها سماد ممتاز.» أعادتها مريم إلى التراب بلطف.`, `Grandpa dug a little and a pink <b>earthworm</b> appeared. "This is the soil engineer. It digs tunnels that let air and water reach the roots, and its droppings are excellent fertiliser." Maryam gently put it back in the soil.`],
        ['🐞🌿', `على ورقة فول رأت مريم حشرات خضراء صغيرة تمتصّ عصارتها، اسمها <b>المنّ</b>. «هل نرشّ سُمًّا؟» «لا! السمّ يؤذي النحل والطيور. نغسلها برشّة ماء، ونترك <b>الدعسوقة</b> تأكلها، فهي حارسة الحديقة.»`, `On a bean leaf, Maryam saw tiny green insects sucking its sap, called <b>aphids</b>. "Do we spray poison?" "No! Poison hurts bees and birds. We wash them off with a spray of water, and let the <b>ladybird</b> eat them. She is the garden's guard."`],
        ['🐌🤲', `ووجدت حلزونًا يأكل ورقة. حملته مريم بلطف بورقة، ووضعته بعيدًا تحت الشجيرات. «لكلّ مخلوقٍ مكانه،» قال الجدّ، «ونحن نحمي نبتتنا برفق، لا بأذى.»`, `She found a snail eating a leaf. Maryam gently picked it up on a leaf and moved it far away under the bushes. "Every creature has its place," said Grandpa. "We protect our plant kindly, not cruelly."`]
      ],
      learn: [`<b>النحل</b> ينقل حبوب اللقاح فتصير الأزهار ثمارًا. <b>ديدان الأرض</b> تُهوّي التربة وتُغذّيها. <b>الدعسوقة</b> تأكل المنّ. نحمي نباتنا برفق: نغسل المنّ بالماء، وننقل الحلزون بعيدًا، ولا نستعمل السمّ. وإذا اقتربت نحلة: نهدأ ولا نضربها.`,
              `<b>Bees</b> carry pollen so flowers become fruit. <b>Earthworms</b> let air into the soil and feed it. <b>Ladybirds</b> eat aphids. We protect our plants kindly: wash aphids off with water, move snails away, and use no poison. If a bee comes close: stay calm and do not swat it.`],
      islam: [`قال الله تعالى: ﴿وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ﴾ (النحل: ٦٨). وقال: ﴿وَمَا مِن دَابَّةٍ فِي الْأَرْضِ وَلَا طَائِرٍ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُمْ﴾ (الأنعام: ٣٨). المخلوقات أُمَمٌ مثلنا، فنرفق بها.`,
              `Allah says: "And your Lord inspired the bee: Make homes in the mountains, in the trees, and in what people build." (an-Nahl 16:68). And He says: "There is no creature on earth, nor bird that flies with its wings, but they are communities like you." (al-An'am 6:38). Creatures are communities like us, so we treat them kindly.`],
      src: ['النحل: ٦٨ · الأنعام: ٣٨', 'An-Nahl 16:68 · Al-An\'am 6:38'],
      mission: [`مع أحد الكبار: اخرج إلى حديقة أو شرفة أو حديقة عامّة. ابحث بهدوء عن ثلاثة أصدقاء للحديقة (نحلة على زهرة، دودة تحت حجر، دعسوقة على ورقة). لا تلمس النحل. ارسمهم في دفترك واكتب عمل كلّ واحد. وافحص نبتتك: هل عليها منّ؟ اغسله برشّة ماء.`,
                `With an adult: go out to a garden, balcony or park. Quietly look for three garden helpers (a bee on a flower, a worm under a stone, a ladybird on a leaf). Do not touch bees. Draw them in your notebook and write each one's job. Check your own plant: any aphids? Wash them off with a spray of water.`],
      q: ['وجدتَ حشرات منّ على نبتتك. ماذا تفعل؟', 'You find aphids on your plant. What do you do?'],
      o: [[`أرشّ عليها سُمًّا قويًّا`, `Spray strong poison on them`], [`أقطع النبتة كلّها`, `Cut off the whole plant`], [`أغسلها برشّة ماء بلطف`, `Gently wash them off with a spray of water`, 1]],
      fb: [`أحسنت! رشّة الماء تحمي نبتتك ولا تؤذي النحل ولا الطيور ولا الدعسوقة صديقة الحديقة.`, `Well done! A spray of water protects your plant without hurting bees, birds or the ladybird, the garden's friend.`],
      podcast: {
        title: ['النحلة ليست عدوّتي', 'The bee is not my enemy'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! جدّو صالح معكم. اليوم نزور أصدقاء الحديقة الصغار.`, `Assalamu alaikum, friends! Grandpa Salih with you. Today we visit the little friends of the garden.`],
          ['k', `وعليكم السلام! جدّو، أنا أخاف من النحل قليلًا.`, `Wa alaikum assalam! Grandpa, I am a bit scared of bees.`],
          ['h', `هذا طبيعي يا مريم. لكن اسمعي سرًّا: النحلة لا تبحث عنكِ، بل عن الزهرة. إذا هدأتِ وابتعدتِ ببطء، تكمل طريقها.`, `That is normal, Maryam. But here is a secret: the bee is not looking for you, it is looking for the flower. If you stay calm and move away slowly, it carries on its way.`],
          ['k', `وماذا تفعل عند الزهرة؟`, `And what does it do at the flower?`],
          ['h', `تشرب الرحيق، وتحمل على جسمها غبارًا أصفر اسمه حبوب اللقاح، فتنقله إلى زهرة أخرى. وهكذا تصير الأزهار ثمارًا.`, `It drinks nectar and carries a yellow dust on its body called pollen, taking it to another flower. That is how flowers become fruit.`],
          ['k', `يعني التفّاح الذي آكله، ساعدت فيه نحلة؟`, `So the apple I eat, a bee helped make it?`],
          ['h', `نعم! والله تعالى ذكر النحل في القرآن، وسمّى به سورة كاملة. قال: وأوحى ربُّك إلى النحل.`, `Yes! And Allah mentions the bee in the Quran, and a whole surah is named after it. He says: and your Lord inspired the bee.`],
          ['k', `ومن صديق الحديقة الثاني؟`, `Who is the second garden friend?`],
          ['h', `دودة الأرض. تحفر أنفاقًا صغيرة، فيدخل الهواء والماء إلى الجذور. هي مهندسة التربة.`, `The earthworm. It digs little tunnels so air and water reach the roots. She is the soil engineer.`],
          ['k', `وإذا جاءت حشرات صغيرة تأكل نبتتي؟`, `And what if little insects come to eat my plant?`],
          ['h', `نغسلها برشّة ماء. لا نستعمل السمّ أبدًا، لأنه يؤذي النحل والطيور. والدعسوقة الحمراء تأكل تلك الحشرات عنّا.`, `We wash them off with a spray of water. We never use poison, because it hurts bees and birds. And the red ladybird eats those insects for us.`],
          ['k', `والحلزون؟`, `And the snail?`],
          ['h', `نحمله بلطف على ورقة ونضعه بعيدًا. ربّنا يقول إنّ المخلوقات أُمَمٌ أمثالنا، فنرفق بها.`, `We gently lift it on a leaf and put it somewhere far away. Our Lord says creatures are communities like us, so we are kind to them.`],
          ['h', `مهمّة اليوم: ابحث مع أحد الكبار عن ثلاثة أصدقاء للحديقة وارسمهم، ولا تلمس النحل. مع السلامة!`, `Today's mission: with an adult, look for three garden helpers and draw them, and do not touch the bees. Goodbye!`]
        ]
      }
    },
    /* ───────────── 7 ───────────── */
    {
      id: 'harvest-share', icon: '🎁', tag: 'grow',
      t: ['الحصاد والهديّة', 'Harvest and gift'],
      sub: ['ما زرعتُه أشاركه', 'What I grow, I share'],
      pg: [
        ['🌿🎉', `مرّت ثلاثة أسابيع. صارت نبتة مريم بطول المسطرة تقريبًا، ولها أوراق خضراء كثيرة. وصارت حبّات العدس التي زرعتها في صحنٍ ثانٍ بساطًا أخضر صغيرًا.`, `Three weeks went by. Maryam's plant was almost as tall as her ruler, with lots of green leaves. And the lentils she had sown in a second dish had become a little green carpet.`],
        ['✂️🥗', `قصّت أمّها بالمقصّ براعم العدس الخضراء، وغسلتها، وأضافتها إلى الحساء. «أنا زرعتُ هذا!» قالت مريم بفخر. قال الجدّ: «لا تأكلي البذور أو البراعم نيئةً إلا بإذن الكبار.»`, `Her mother snipped the green lentil shoots with scissors, washed them, and added them to the soup. "I grew this!" said Maryam proudly. Grandpa said, "Never eat seeds or sprouts raw unless a grown-up says it is fine."`],
        ['🐦🌾', `في المزرعة رأت عصفورًا يأكل من سنابل القمح. «يا جدّو، العصفور يسرق!» ابتسم الجدّ: «لا يا ابنتي. كلّ ما أكل منه طيرٌ أو إنسانٌ أو حيوانٌ صار لي صدقة. هكذا علّمنا النبيّ ﷺ.»`, `On the farm, she saw a sparrow eating from the wheat. "Grandpa, the bird is stealing!" Grandpa smiled. "No, my dear. Whatever a bird, a person or an animal eats from it becomes charity for me. That is what the Prophet ﷺ taught us."`],
        ['🎁👵', `فكّرت مريم: «لمن أُهدي نبتتي؟» اختارت جارتها الكبيرة أمّ خالد التي تعيش وحدها. زيّنت الكوب بشريط، وكتبت بطاقة: «زرعتُها لكِ، واعتنيتُ بها ثلاثة أسابيع».`, `Maryam wondered, "Who should I give my plant to?" She chose her elderly neighbour, Umm Khalid, who lives alone. She decorated the cup with a ribbon and wrote a card: "I grew this for you and cared for it for three weeks."`],
        ['😊💚', `فرحت أمّ خالد كثيرًا، ووضعت النبتة على شبّاكها، وعلّمتها مريم اختبار الإصبع. في طريق العودة قالت مريم: «فرحةُ الهديّة أجمل من فرحة الحصاد!»`, `Umm Khalid was overjoyed and put the plant on her windowsill, and Maryam taught her the finger test. On the way home, Maryam said, "The joy of giving is even sweeter than the joy of harvest!"`]
      ],
      learn: [`<b>الحصاد</b> يكون بلطف وبأداة مناسبة مع الكبار. لا نأكل أي بذرة أو برعم نيئًا إلا بإذن الكبار، ونغسل كلّ ما نأكله. وأجمل الحصاد <b>المشاركة</b>: نُهدي النبتة أو ثمرها لجارٍ أو قريب، ونعلّمه كيف يعتني بها.`,
              `We <b>harvest</b> gently, with the right tool and with a grown-up. We never eat raw seeds or sprouts without an adult's permission, and we wash everything we eat. The best harvest is <b>sharing</b>: we gift the plant or its produce to a neighbour or relative and teach them how to care for it.`],
      islam: [`قال رسول الله ﷺ: «ما من مسلمٍ يغرس غرسًا، أو يزرع زرعًا، فيأكل منه طيرٌ أو إنسانٌ أو بهيمةٌ، إلا كان له به صدقة». وقال الله تعالى: ﴿كُلُوا مِن ثَمَرِهِ إِذَا أَثْمَرَ وَآتُوا حَقَّهُ يَوْمَ حَصَادِهِ﴾ (الأنعام: ١٤١).`,
              `The Messenger of Allah ﷺ said: "No Muslim plants a tree or sows a crop, and then a bird, a person or an animal eats from it, except that it is charity for him." And Allah says: "Eat of its fruit when it bears fruit, and give its due on the day of its harvest." (al-An'am 6:141).`],
      src: ['صحيح البخاري ٢٣٢٠، صحيح مسلم ١٥٥٣ · الأنعام: ١٤١', 'Sahih al-Bukhari 2320, Sahih Muslim 1553 · Al-An\'am 6:141'],
      mission: [`<b>المشروع الكبير!</b> بعد ٣–٤ أسابيع من الزراعة: اختر شخصًا تُهديه نبتتك (جدّة، جار، معلّمة، صديق). زيّن الكوب، واكتب بطاقة فيها اسم النبتة وكيف يسقيها. وإن زرعتَ عدسًا في صحن، اقطفه مع أحد والديك ليغسله ويطبخه. ألصق صورة أو رسمة الهديّة في آخر دفترك.`,
                `<b>The big project!</b> After 3–4 weeks of growing: choose someone to give your plant to (a grandparent, neighbour, teacher or friend). Decorate the cup and write a card with the plant's name and how to water it. If you grew lentils in a dish, harvest them with a parent so they can be washed and cooked. Stick a photo or drawing of the gift at the end of your diary.`],
      q: ['أكل عصفورٌ من زرعك. ماذا قال النبيّ ﷺ عن ذلك؟', 'A bird ate from your crop. What did the Prophet ﷺ say about that?'],
      o: [[`يكون لك به صدقة`, `It is charity for you`, 1], [`يجب أن تطرده بعيدًا`, `You must chase it away`], [`ضاع زرعك بلا فائدة`, `Your crop was wasted for nothing`]],
      fb: [`أحسنت! كلّ ما أكل منه طيرٌ أو إنسانٌ أو حيوانٌ من زرعك صدقةٌ لك. (البخاري ٢٣٢٠، مسلم ١٥٥٣)`, `Well done! Whatever a bird, a person or an animal eats from what you grow is charity for you. (Bukhari 2320, Muslim 1553)`],
      podcast: {
        title: ['العصفور الذي لم يسرق', 'The sparrow that did not steal'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! جدّو صالح معكم. واليوم يوم فرح: يوم الحصاد!`, `Assalamu alaikum, friends! Grandpa Salih with you. And today is a happy day: harvest day!`],
          ['k', `وعليكم السلام! جدّو، براعم العدس صارت بساطًا أخضر. وأمّي وضعتها في الحساء!`, `Wa alaikum assalam! Grandpa, my lentil sprouts became a green carpet. And Mum put them in the soup!`],
          ['h', `ما شاء الله! وهل غسلتها أمّك قبل الطبخ؟`, `Masha Allah! And did your mother wash them before cooking?`],
          ['k', `نعم. وأنت قلتَ لي: لا آكل البذور نيئة إلا بإذن الكبار.`, `Yes. And you told me: I do not eat raw seeds unless a grown-up says so.`],
          ['h', `أحسنتِ، هذه قاعدة المزارع الذكي. والآن أحكي لكِ عن العصفور.`, `Well done, that is the clever farmer's rule. Now let me tell you about the sparrow.`],
          ['k', `أيّ عصفور؟`, `What sparrow?`],
          ['h', `عصفور جاء إلى قمحي وأكل منه. فقلتِ أنتِ: إنه يسرق! أتذكرين؟`, `A sparrow came to my wheat and ate some. And you said: it is stealing! Remember?`],
          ['k', `هههه، نعم! أليس كذلك؟`, `Ha ha, yes! Isn't it?`],
          ['h', `النبيّ ﷺ قال: ما من مسلم يغرس غرسًا أو يزرع زرعًا، فيأكل منه طيرٌ أو إنسانٌ أو بهيمة، إلا كان له به صدقة.`, `The Prophet ﷺ said: no Muslim plants a tree or sows a crop, and a bird, a person or an animal eats from it, except that it is charity for him.`],
          ['k', `يعني العصفور أعطاك حسنات!`, `So the sparrow gave you good deeds!`],
          ['h', `بالضبط. الزرع يُطعم ويُعطي حتى وأنتِ نائمة.`, `Exactly. What you plant feeds others and gives, even while you are asleep.`],
          ['k', `أنا سأهدي نبتتي لجارتنا أمّ خالد. هي تعيش وحدها.`, `I am going to give my plant to our neighbour Umm Khalid. She lives alone.`],
          ['h', `فكرة رائعة. اكتبي لها بطاقة، وعلّميها اختبار الإصبع. الهديّة التي تعبنا فيها تفرح القلب كثيرًا.`, `A wonderful idea. Write her a card and teach her the finger test. A gift we worked hard on makes hearts very happy.`],
          ['h', `مهمّة اليوم: اختر من تُهديه نبتتك، وزيّن كوبها، واكتب بطاقتك. إلى اللقاء في الحلقة الأخيرة!`, `Today's mission: choose who will receive your plant, decorate its cup, and write your card. See you in the final episode!`]
        ]
      }
    },
    /* ───────────── 8 ───────────── */
    {
      id: 'care-earth', icon: '🌍', tag: 'earth',
      t: ['أحمي الأرض والماء', 'I protect the earth and water'],
      sub: ['لا إسراف، حتى في الوضوء', 'No waste, even in wudu'],
      pg: [
        ['🚰😮', `رأى الجدّ مريم تتوضّأ والصنبور مفتوح بقوّة، والماء يجري وهي تغسل يديها وتتكلّم. أغلق الصنبور بهدوء وقال: «أتعرفين كم كان يتوضّأ النبيّ ﷺ؟»`, `Grandpa saw Maryam doing wudu with the tap running full blast, water pouring away while she chatted. He gently turned it down and said, "Do you know how much water the Prophet ﷺ used for wudu?"`],
        ['🤲💧', `«بـ<b>مُدّ</b>. والمُدّ ملء الكفّين معًا، أقلّ من لتر واحد! وكان يغتسل بالصاع، وهو أربعة أمداد.» تعجّبت مريم: «وأنا استعملتُ أكثر من ذلك في غسل يديّ فقط!»`, `"With a <b>mudd</b>. A mudd is two cupped hands full, less than one litre! And he bathed with a sa', which is four mudds." Maryam was amazed. "I used more than that just washing my hands!"`],
        ['🥤🌱', `علّمها الجدّ حيلًا صغيرة: نُغلق الصنبور ونحن نفرك أيدينا، ونفتحه قليلًا لا كثيرًا. والماء الذي نغسل به الخضار نجمعه في وعاء ونسقي به النباتات.`, `Grandpa taught her little tricks: turn off the tap while scrubbing your hands, and open it gently, not fully. And the water used to rinse vegetables can be collected in a bowl and used to water the plants.`],
        ['🌳⏳', `ثم جلس الجدّ تحت شجرة زيتون عمرها مئة سنة. «زرعها جدّي، ولم يأكل منها كثيرًا. لكنّنا نأكل منها اليوم. النبيّ ﷺ قال: لو قامت الساعة وفي يد أحدكم فسيلة، فليغرسها.»`, `Then Grandpa sat under an olive tree a hundred years old. "My grandfather planted it, and he did not eat much from it. But we eat from it today. The Prophet ﷺ said that even if the Hour comes and one of you holds a small palm shoot, let him plant it."`],
        ['🌍💚', `نظرت مريم إلى دفترها، وإلى نبتة أمّ خالد، وإلى شجرة الزيتون. «أنا مزارعة صغيرة: أزرع، وأسقي بلا إسراف، وأرفق بالمخلوقات، وأُهدي. وسأزرع شجرةً يأكل منها أحفادي!»`, `Maryam looked at her diary, at Umm Khalid's plant, and at the olive tree. "I am a little farmer: I plant, I water without waste, I am kind to creatures, and I give. And I will plant a tree my grandchildren will eat from!"`]
      ],
      learn: [`الماء نعمة غالية. كان النبيّ ﷺ يتوضّأ بـ<b>مُدّ</b> (ملء الكفّين تقريبًا، أقلّ من لتر). نُغلق الصنبور أثناء الفرك، ونجمع ماء غسل الخضار لسقي النبات، ونزرع شجرة ولو لم نأكل منها. المزارع الصغير يحمي الأرض لمن بعده.`,
              `Water is a precious blessing. The Prophet ﷺ did wudu with a <b>mudd</b> (about two cupped handfuls, less than a litre). We turn off the tap while scrubbing, save vegetable-rinsing water for plants, and plant trees even if we will not eat from them. A little farmer protects the earth for those who come after.`],
      islam: [`عن أنس رضي الله عنه قال: «كان النبيّ ﷺ يتوضّأ بالمُدّ، ويغتسل بالصاع إلى خمسة أمداد». وقال ﷺ: «إن قامت الساعة وفي يد أحدكم فسيلة، فإن استطاع أن لا تقوم حتى يغرسها فليغرسها».`,
              `Anas (may Allah be pleased with him) said: "The Prophet ﷺ used to do wudu with a mudd, and bathe with a sa' up to five mudds." And he ﷺ said: "If the Hour comes and one of you has a palm seedling in his hand, and he is able to plant it before it comes, let him plant it."`],
      src: ['حديث المُدّ: صحيح البخاري ٢٠١، صحيح مسلم ٣٢٥ · حديث الفسيلة: رواه أحمد في المسند، والبخاري في الأدب المفرد (٤٧٩)، وصحّحه الألباني',
            'The mudd hadith: Sahih al-Bukhari 201, Sahih Muslim 325 · The seedling hadith: Ahmad in al-Musnad, and al-Bukhari in al-Adab al-Mufrad (479), graded sahih by al-Albani'],
      mission: [`<b>تحدّي الماء!</b> مع أحد والديك: ضع وعاءً تحت الصنبور وتوضّأ كعادتك، ثم انظر كم جمعت. وفي المرّة الثانية توضّأ بماء قليل وصنبور شبه مغلق. قارن! وطوال الأسبوع: اجمع ماء غسل الخضار في إبريق واسقِ به نبتتك. وأكمل دفترك واكتب في آخره: «ماذا تعلّمتُ من المزرعة؟»`,
                `<b>The water challenge!</b> With a parent: put a bowl under the tap and do wudu as you usually do, then see how much you collected. Next time, do wudu with a little water and the tap only slightly open. Compare! All week, save the water from rinsing vegetables in a jug and water your plant with it. Finish your diary and write on the last page: "What did I learn from the farm?"`],
      q: ['بكم كان النبيّ ﷺ يتوضّأ؟', 'How much water did the Prophet ﷺ use for wudu?'],
      o: [[`بدلوٍ كبير مملوء`, `A big full bucket`], [`بمُدّ، أي ملء الكفّين تقريبًا`, `A mudd, about two cupped handfuls`, 1], [`بالصنبور مفتوحًا حتى ينتهي`, `With the tap running until he finished`]],
      fb: [`أحسنت! كان ﷺ يتوضّأ بمُدّ (البخاري ٢٠١، مسلم ٣٢٥). الوضوء الكامل لا يحتاج ماءً كثيرًا، بل يحتاج عناية.`, `Well done! He ﷺ did wudu with a mudd (Bukhari 201, Muslim 325). A complete wudu does not need lots of water, it needs care.`],
      podcast: {
        title: ['شجرة لأحفادي', 'A tree for my grandchildren'],
        lines: [
          ['h', `السلام عليكم يا أصدقاء! هذه آخر حلقة في رحلة المزارع الصغير. ومعي مريم، المزارعة الماهرة.`, `Assalamu alaikum, friends! This is the last episode of The Little Farmer journey. And with me is Maryam, the skilful farmer.`],
          ['k', `وعليكم السلام يا جدّو! لكنّي اليوم أخطأتُ في الوضوء، أليس كذلك؟`, `Wa alaikum assalam, Grandpa! But today I made a mistake with my wudu, didn't I?`],
          ['h', `ليس خطأً كبيرًا، لكنّ الصنبور كان مفتوحًا بقوّة والماء يجري. أتعرفين كم كان يتوضّأ النبيّ ﷺ؟`, `Not a big mistake, but the tap was wide open and the water kept running. Do you know how much the Prophet ﷺ used for wudu?`],
          ['k', `لا. كم؟`, `No. How much?`],
          ['h', `بمُدّ واحد. والمُدّ ملء الكفّين معًا، أقلّ من لتر. وهذا في صحيح البخاري ومسلم.`, `With one mudd. A mudd is two cupped hands full, less than a litre. That is in Sahih al-Bukhari and Muslim.`],
          ['k', `أقلّ من لتر! وأنا أستعمل أكثر من ذلك في يديّ فقط!`, `Less than a litre! I use more than that just for my hands!`],
          ['h', `لا بأس، نتعلّم معًا. نُغلق الصنبور ونحن نفرك، ونفتحه قليلًا. ووضوؤنا يبقى كاملًا جميلًا.`, `That is fine, we learn together. We turn off the tap while scrubbing, and open it gently. Our wudu stays complete and beautiful.`],
          ['k', `وماء غسل الخضار؟`, `And the water from washing vegetables?`],
          ['h', `نجمعه في إبريق ونسقي به النبات. لا نرمي نعمة يمكن أن تنفع.`, `We collect it in a jug and water the plants with it. We do not throw away a blessing that can still be useful.`],
          ['k', `جدّو، شجرة الزيتون هذه، من زرعها؟`, `Grandpa, this olive tree, who planted it?`],
          ['h', `جدّي، قبل مئة سنة. لم يأكل منها كثيرًا، لكنّنا نأكل منها اليوم. والنبيّ ﷺ قال: إن قامت الساعة وفي يد أحدكم فسيلة، فليغرسها.`, `My grandfather, a hundred years ago. He did not eat much from it, but we eat from it today. And the Prophet ﷺ said: if the Hour comes and one of you holds a seedling, let him plant it.`],
          ['k', `يعني نزرع دائمًا، حتى لو لم نأكل نحن!`, `So we always plant, even if we do not get to eat from it!`],
          ['h', `بالضبط. الزرع خير لا يتوقّف. وأنتِ اليوم زرعتِ، وراقبتِ، وأهديتِ. أنا فخور بكِ يا مريم.`, `Exactly. Planting is goodness that never stops. And you have planted, observed and given. I am proud of you, Maryam.`],
          ['k', `شكرًا يا جدّو! سأزرع شجرة يأكل منها أحفادي.`, `Thank you, Grandpa! I will plant a tree my grandchildren will eat from.`],
          ['h', `مهمّة اليوم: جرّب تحدّي الماء في الوضوء، واسقِ نبتتك بماء غسل الخضار. مع السلامة يا مزارعين صغار!`, `Today's mission: try the water challenge with your wudu, and water your plant with vegetable-rinsing water. Goodbye, little farmers!`]
        ]
      }
    }
  ]
};
