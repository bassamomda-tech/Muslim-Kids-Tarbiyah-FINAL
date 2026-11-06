/* ════════════════════════════════════════════════════════════════
   annual-plan.js — «الخطة السنوية» · The Annual Plan
   A 12-month route through THIS website for two age groups
   (٥–٧ سنوات · ٨ سنوات فما فوق) so a family never gets lost and
   reaches the site's goals: every month names the exact corners,
   journeys and pages to open, the weekly rhythm, an off-screen family
   activity, the book to print from the free library, the goal to
   reach, and the reward/medal it unlocks.

   Shown in: ركن الأهل (tab «الخطة السنوية») and «دليل الأهل الشامل»
   (Part 5). One renderer, one data source.
     ANNUAL_PLAN.render(groupId, lang, root)  → HTML
     ANNUAL_PLAN.wire(container, lang, root)  → checkboxes, group switch, print
   Paths are relative to the site root; `root` is the prefix from the
   calling page ('../../../' from the Parents Corner, '../' from the guide).
   Progress is saved on this device: localStorage 'mk-annual:<group>'.
   ════════════════════════════════════════════════════════════════ */
(function(){
  var FM='corners/faith-minaret/', HF='corners/heroes-fortress/', LD='corners/little-district/pages/',
      QU='corners/quds-ummah/', TR='corners/treasures/', SK='corners/skills/', BK='Books/Published/';

  /* ── how the website works (shared by both groups) ── */
  var HOW=[
    {ic:'🗺️',t:{ar:'ابدأ دائمًا من المدينة',en:'Always start from the city'},d:{ar:'الصفحة الرئيسية خريطةٌ للأركان. ادخل الركنَ الذي تحدّده خطةُ الشهر فقط، ولا تتنقّل بين الأركان عشوائيًا.',en:'The home page is a map of the corners. Open only the corner this month’s plan names — don’t wander between corners.'},p:'index.html'},
    {ic:'🧭',t:{ar:'الرحلات والمحطات',en:'Journeys & stations'},d:{ar:'كلُّ ركنٍ فيه رحلات، وكلُّ رحلةٍ محطات. محطةٌ واحدةٌ في الجلسة تكفي، والتقدّم يُحفظ تلقائيًا على هذا الجهاز.',en:'Each corner has journeys; each journey has stations. One station per session is enough; progress saves on this device.'}},
    {ic:'📝',t:{ar:'الاختبارات تفتح المكافآت',en:'Tests unlock rewards'},d:{ar:'في صفحة كل ركن اختباراتُ رحلاته. إذا اختُبرت كلُّ رحلاته وبلغت نتيجةُ الركن ٧٥٪ انفتحت ٥ أنشطة في «ركن أنوس».',en:'Each corner page has its journey tests. When every journey is tested and the corner score reaches 75%, 5 activities open in the Anous corner.'},p:'corners/activities/dashboard.html'},
    {ic:'🏅',t:{ar:'الأوسمة',en:'Medals'},d:{ar:'في حصن الأبطال والقلب السليم: يقرأ الطفلُ الفصل، ويلعب ألعابه كلّها، ثم يجمع الوسام فيظهر في قاعة الأوسمة.',en:'In the Heroes’ Fortress and the Pure Heart: read the chapter, play all its games, then collect the medal for the hall.'},p:HF+'fortress.html'},
    {ic:'🧔',t:{ar:'ركن الأهل',en:'The Parents Corner'},d:{ar:'المتابعة والتقييم (رسوم وشهادات)، ونقاط السلوك، ومنظّم اليوم، ودليل الأهل الشامل. راجعها مرّةً في الأسبوع.',en:'Tracking (charts & certificates), behaviour points, the day planner and the complete guide. Review once a week.'},p:LD+'parents.html'},
    {ic:'📚',t:{ar:'المكتبة المجانية',en:'The free library'},d:{ar:'لكل شهرٍ كتابٌ مطبوع يُكمل ما على الشاشة. اطبعه أوّل الشهر واقرأه مع طفلك بعيدًا عن الجهاز.',en:'Each month has a printed book that completes the screen work. Print it at the start of the month and read it together away from the screen.'},p:'corners/shared/store.html#books'}
  ];

  var GROUPS=[
  /* ═══════════════════════ ٥–٧ سنوات ═══════════════════════ */
  { id:'g57', ic:'🌱', c:'#1F9D6B', age:{ar:'٥ – ٧ سنوات',en:'Ages 5–7'}, nm:{ar:'البراعم المستكشفون',en:'Little Explorers'},
    pace:{ar:'١٥–٢٠ دقيقة، ٤ أيام في الأسبوع، بصحبة أحد الوالدين دائمًا',en:'15–20 min · 4 days a week · always with a parent'},
    aim:{ar:'نزرع الحبَّ قبل المعلومة: حبَّ الله ورسوله ﷺ والصلاة والقرآن، وأخلاقًا جميلة — بالقصة واللعب والتكرار، بلا ضغطٍ ولا عقاب.',en:'Plant love before information — love of Allah, His Messenger ﷺ, prayer and the Qur’an, and beautiful manners — through story, play and repetition, with no pressure.'},
    rules:[
      {ar:'اجلس معه دائمًا: اقرأ له نصوصَ المحطات بصوتك، ودعه يضغط ويختار.',en:'Always sit with them: read the station texts aloud and let them tap and choose.'},
      {ar:'الاختبار لعبةٌ لا امتحان: اقرأ السؤال، وإن أخطأ أعيدا المحاولة معًا.',en:'A test is a game, not an exam: read the question; if wrong, try again together.'},
      {ar:'المكافأة احتفال: حين يُفتح نشاطٌ في ركن أنوس العبا به معًا يوم الإجازة.',en:'Rewards are a celebration: when an Anous activity opens, play it together at the weekend.'},
      {ar:'الشاشة نصف الخطة فقط: النشاط العائلي وكتاب الشهر هما النصف الآخر.',en:'The screen is only half the plan: the family activity and the month’s book are the other half.'}],
    week:[
      {d:{ar:'الجلسة ١',en:'Session 1'},a:{ar:'قصة من مكتبة الصغار أو حلقة من رحلة الشهر',en:'A story from the little library or an episode of the month’s journey'}},
      {d:{ar:'الجلسة ٢',en:'Session 2'},a:{ar:'محطة واحدة من رحلة الركن المحدّد',en:'One station of the named corner journey'}},
      {d:{ar:'الجلسة ٣',en:'Session 3'},a:{ar:'سورة الشهر: استماعٌ وترديد (٥ دقائق) + بطاقة',en:'The month’s surah: listen & repeat (5 min) + a card'}},
      {d:{ar:'الجلسة ٤',en:'Session 4'},a:{ar:'لعبة الفصل أو الاختبار القصير مع الأهل',en:'The chapter game or the short test with a parent'}},
      {d:{ar:'نهاية الأسبوع',en:'Weekend'},a:{ar:'نشاط الشهر العائلي بلا شاشة + صفحة من كتاب الشهر',en:'The family activity, screen-free + a page of the month’s book'}}],
    months:[
      {ic:'🌅',t:{ar:'أهلًا بالمدينة: مَن خلقني؟',en:'Welcome to the city: who made me?'},
        go:[['🗺️','جولة في المدينة: اعرف الأركان','City tour: meet the corners','index.html'],
            ['📖','مكتبة الصغار — قصص منارة العقيدة','Little library — Faith stories','corners/stories/little.html'],
            ['🌅','كيف عرفنا الله؟','How we knew Allah',FM+'maarifa.html'],
            ['❤️','رحلة «أحبُّ الله»','The “I love Allah” journey','رحلة أحب الله.html'],
            ['📜','سورة الفاتحة','Surah al-Fatihah',LD+'quran-surahs.html']],
        fam:{ar:'نزهة «عجائب الخلق»: يجمع الطفل ٥ أشياء خلقها الله (ورقة، حجر، زهرة…) ويقول: «الله خلقها».',en:'A “wonders of creation” walk: collect 5 things Allah made (a leaf, a stone, a flower…) and say “Allah made it”.'},
        book:['كيف عَرَفْنا الله؟','How We Knew Allah',BK+'Faith Minaret/Maarifa Book.html'],
        goal:{ar:'يعرف أن الله خلق كلَّ شيء، ويفتح المدينة ويختار الركن بنفسه، ويقرأ الفاتحة معك.',en:'Knows Allah made everything, opens the city and picks a corner, recites al-Fatihah with you.'}},
      {ic:'🕌',t:{ar:'أحبُّ الصلاة: الوضوء والصلاة',en:'I love prayer: wudu & salah'},
        go:[['🕌','رحلة «أحبُّ الصلاة»','The “I love salah” journey','رحلة أحب الصلاة.html'],
            ['🤲','واحة العبادة — رحلة الصلاة','Worship Oasis — the prayer journey',LD+'ibada-journeys.html?j=salah'],
            ['🌙','قصص العبادة في مكتبة الصغار','Worship stories in the little library','corners/stories/little.html']],
        fam:{ar:'«ركن صلاتي» في البيت: سجادة صغيرة باسمه، ويصلّي بجوار أبيه أو أمه صلاةً واحدةً كلَّ يوم.',en:'A “my prayer spot” at home: a small mat with their name; one prayer a day beside a parent.'},
        book:['رحلةُ الصَّلاة','The Prayer Journey',BK+'Worship Oasis/Salah Book.html'],
        goal:{ar:'يرتّب خطوات الوضوء، ويؤدّي حركات الصلاة، ويصلّي صلاةً يوميًا مع أهله.',en:'Orders the wudu steps, does the prayer movements, prays once a day with family.'},
        win:{ar:'اختبار رحلة الصلاة يقرّبه من نشاط «ترتيب الوضوء» في ركن أنوس.',en:'The prayer test moves them toward the “Wudu order” Anous activity.'}},
      {ic:'📖',t:{ar:'سُوَري الصغيرة',en:'My little surahs'},
        go:[['📜','بستان القرآن — السور القصيرة','Quran Garden — short surahs',LD+'quran-surahs.html'],
            ['🎙️','مقرأة الحفظ: استمع وردّد','The hifdh reader: listen & repeat','corners/quran-hifz/index.html'],
            ['📝','اختبارات بستان القرآن','Quran Garden tests',LD+'quran-tests.html']],
        fam:{ar:'«سورة على المائدة»: يقرأ السورة التي حفظها قبل العشاء، والأسرة تصفّق وتدعو له.',en:'“A surah at the table”: recite the new surah before dinner; the family cheers and makes du’a.'},
        book:['بستانُ السور — قِصار السور','Short Surahs',BK+'Quran Garden/Short Surahs Book.html'],
        goal:{ar:'يحفظ الإخلاص والفلق والناس مع الفاتحة (٤ سور) ويعرف معنى كلٍّ منها ببساطة.',en:'Memorizes al-Ikhlas, al-Falaq, an-Nas with al-Fatihah (4 surahs) and knows each meaning simply.'}},
      {ic:'🏘️',t:{ar:'أخلاقي الجميلة',en:'My beautiful manners'},
        go:[['🏘️','حيّنا الصغير — بيوت الأخلاق','Our Little District — houses of manners',LD+'social.html'],
            ['🌟','رحلة «الأخلاق والآداب»','The “Manners & morals” journey','رحلة الأخلاق والآداب.html'],
            ['🌳','شجرة الشكر','The gratitude tree',LD+'social.html']],
        fam:{ar:'«جرّة الكلمات الطيبة»: كلّما قال «من فضلك/شكرًا/آسف» وضع حبّة في الجرّة، وفي آخر الأسبوع مكافأة.',en:'A “kind words jar”: a bead for each please / thank you / sorry; a treat at the week’s end.'},
        book:['أخلاقُ الحيّ','Manners of the District',BK+'Little District/Manners Book.html'],
        goal:{ar:'يُلقي السلام، ويشكر، ويصدق، ويستأذن — ويختار خُلقًا يطبّقه كلَّ أسبوع.',en:'Greets with salam, thanks, tells the truth, asks permission — one manner practised each week.'}},
      {ic:'🏰',t:{ar:'قصص الأنبياء',en:'Stories of the prophets'},
        go:[['🏰','حصن الأبطال — عصر الأنبياء','Heroes’ Fortress — age of the prophets',HF+'era.html?era=prophets'],
            ['📚','قصص الأنبياء في مكتبة الصغار','Prophets in the little library','corners/stories/little.html']],
        fam:{ar:'«مسرح العائلة»: تمثيل قصة نوح والسفينة أو يوسف والبئر بدُمى وصناديق.',en:'“Family theatre”: act out Nuh and the ark or Yusuf and the well with toys and boxes.'},
        book:['قصصُ الأنبياء','Stories of the Prophets',BK+'Heroes Fortress/Prophets Book.html'],
        goal:{ar:'يعرف ٥ أنبياء (آدم، نوح، إبراهيم، يوسف، موسى) ودرسًا من كلٍّ، ويجمع أوّل أوسمته.',en:'Knows 5 prophets (Adam, Nuh, Ibrahim, Yusuf, Musa) and a lesson from each; collects first medals.'},
        win:{ar:'كلُّ فصلٍ يُكمل ألعابه = وسامٌ في قاعة حصن الأبطال.',en:'Each chapter with its games done = a medal in the Fortress hall.'}},
      {ic:'💚',t:{ar:'أحبُّ رسولَ الله ﷺ',en:'I love the Messenger ﷺ'},
        go:[['💚','رحلة «أحبُّ الرسول»','The “I love the Prophet” journey','رحلة أحب الرسول.html'],
            ['🌙','حصن الأبطال — رحلة السيرة','Heroes’ Fortress — the Seerah',HF+'era.html?era=seerah'],
            ['✨','لحظات من حياة النبي ﷺ (بطاقات)','Moments from his life ﷺ (cards)',TR+'prophet-moments.html']],
        fam:{ar:'«سُنّة اليوم»: كلَّ يومٍ سُنّةٌ صغيرة نفعلها معًا (التيامن، الابتسامة، السلام) ونقول: «هكذا كان يفعل ﷺ».',en:'“Sunnah of the day”: one small sunnah together daily (right side, a smile, salam) — “this is what he ﷺ did”.'},
        book:['سيرةُ النبيّ ﷺ','The Prophet ﷺ',BK+'Heroes Fortress/Seerah Book.html'],
        goal:{ar:'يعرف اسم النبي ﷺ ونسبه ومكة والمدينة، ويصلّي عليه ﷺ إذا ذُكر.',en:'Knows the Prophet’s ﷺ name and lineage, Makkah and Madinah, and sends salawat when he is mentioned.'}},
      {ic:'📿',t:{ar:'أذكاري ودعائي',en:'My adhkar & du’a'},
        go:[['📿','رحلة «الأذكار والدعاء»','The “Adhkar & du’a” journey','رحلة الأذكار والدعاء.html'],
            ['🛡️','واحة العبادة — الأذكار','Worship Oasis — adhkar',LD+'ibada-journeys.html?j=adhkar'],
            ['💡','واحة العبادة — الدعاء','Worship Oasis — du’a',LD+'ibada-journeys.html?j=dua'],
            ['🃏','بطاقات الأذكار','Adhkar cards',TR+'adhkar.html']],
        fam:{ar:'لوحة «أذكار يومي» على باب الغرفة: الاستيقاظ، الطعام، الخروج، النوم — ونجمة لكلِّ ذكرٍ يقوله.',en:'A “my daily adhkar” chart on the door: waking, eating, leaving, sleeping — a star for each.'},
        book:['رحلةُ الأذكار','The Adhkar Journey',BK+'Worship Oasis/Adhkar Book.html'],
        goal:{ar:'يقول أذكار الطعام والنوم والخروج والاستيقاظ وحده، ويدعو بكلماته.',en:'Says the eating, sleeping, leaving and waking adhkar alone, and makes du’a in their own words.'},
        win:{ar:'يقرّبه من نشاط «عجلة الأذكار» في ركن أنوس.',en:'Moves them toward the “Adhkar wheel” Anous activity.'}},
      {ic:'✨',t:{ar:'أسماء الله الحسنى والقلب الطيّب',en:'Allah’s beautiful names & a kind heart'},
        go:[['💚','القلب السليم — محطات الأسماء الحسنى','The Pure Heart — the names stations',HF+'heart.html?era=heart'],
            ['🃏','بطاقات الأسماء الحسنى','Beautiful Names cards',TR+'names-cards.html']],
        fam:{ar:'«اسمٌ في الأسبوع»: نختار اسمًا (الرحمن، الرزاق، الخالق، السميع) ونبحث عن أثره في يومنا.',en:'“A name a week”: pick a name (ar-Rahman, ar-Razzaq, al-Khaliq, as-Sami’) and spot its trace in our day.'},
        book:['أسماءُ اللهِ الحُسنى','The Beautiful Names of Allah',BK+'Pure Heart/Beautiful Names Book.html'],
        goal:{ar:'يعرف ٨ أسماء بمعانيها البسيطة، ويجمع وسام محطةٍ في القلب السليم.',en:'Knows 8 names with simple meanings and collects a Pure Heart station medal.'}},
      {ic:'🏊',t:{ar:'جسمي أمانة: الفطرة والرياضة',en:'My body is a trust: fitrah & sport'},
        go:[['🏊','النادي الرياضي — سنن الفطرة والرياضة','Sports Club — fitrah & sport',LD+'sport.html']],
        fam:{ar:'«ساعة القوّة» الأسبوعية: جري، سباحة أو رمي، مع نيّة «المؤمن القوي أحبّ إلى الله».',en:'A weekly “strength hour”: running, swimming or throwing, with the intention “the strong believer is more beloved to Allah”.'},
        book:['سُنَنُ الفِطرة','The Fitrah Sunnahs',BK+'Sports Club/Fitrah Sunnahs Book.html'],
        goal:{ar:'يعتني بنظافته (السواك، الأظافر، غسل اليدين) ويمارس رياضةً أسبوعيًا.',en:'Keeps clean (siwak, nails, hand-washing) and plays a sport weekly.'}},
      {ic:'⭐',t:{ar:'أبطالي الصحابة',en:'My heroes, the Companions'},
        go:[['⭐','رحلة «القدوات — نجوم الصحابة»','“Role models — star Companions” journey','رحلة القدوات.html'],
            ['🏰','حصن الأبطال — أبطال الإسلام','Heroes’ Fortress — heroes of Islam',HF+'era.html?era=heroes'],
            ['📚','قصص الصحابة في مكتبة الصغار','Companions in the little library','corners/stories/little.html']],
        fam:{ar:'«بطل الأسبوع»: نعلّق صورة/اسم صحابيّ ونقلّد خُلقًا منه (صدق أبي بكر، أذان بلال).',en:'“Hero of the week”: hang a Companion’s name and copy one trait (Abu Bakr’s truthfulness, Bilal’s adhan).'},
        book:['الصحابةُ الكرام','The Noble Companions',BK+'Heroes Fortress/Companions Book.html'],
        goal:{ar:'يحكي قصة ٤ صحابة ويذكر خُلقًا تعلّمه من كلٍّ منهم.',en:'Tells the story of 4 Companions and one trait learned from each.'}},
      {ic:'🌙',t:{ar:'الصيام والصدقة',en:'Fasting & charity'},
        note:{ar:'إن وافق شهرُ رمضان شهرًا آخر في خطتك فقدّم هذا الشهر إليه.',en:'If Ramadan falls in another month of your plan, move this month there.'},
        go:[['🌙','واحة العبادة — الصيام','Worship Oasis — fasting',LD+'ibada-journeys.html?j=fasting'],
            ['🎁','واحة العبادة — الزكاة والصدقة','Worship Oasis — zakah & charity',LD+'ibada-journeys.html?j=zakah'],
            ['✨','دفتر الحسنات','The good-deeds book',LD+'hasanat.html']],
        fam:{ar:'«صندوق الصدقة»: يضع فيه من مصروفه، ونسلّمه معًا لمحتاج في آخر الشهر. وصيامُ ساعاتٍ متدرّجة إن كان رمضان.',en:'A “charity box” from pocket money, handed together to someone in need; gradual hours of fasting in Ramadan.'},
        book:['رحلةُ الصِّيام','The Fasting Journey',BK+'Worship Oasis/Fasting Book.html'],
        goal:{ar:'يعرف معنى الصيام والصدقة، ويتصدّق بنفسه، ويصوم ساعاتٍ إن كان رمضان.',en:'Knows what fasting and charity mean, gives charity himself, fasts some hours in Ramadan.'}},
      {ic:'🎓',t:{ar:'مسجدي الأقصى وحفل نهاية العام',en:'Al-Aqsa & the end-of-year party'},
        go:[['🕌','ركن القدس — رحلة الأقصى','Al-Quds — the Al-Aqsa journey',QU+'aqsa.html'],
            ['🧩','ركن أنوس: أنشطة المكافآت المفتوحة','The Anous corner: unlocked rewards','corners/activities/dashboard.html'],
            ['🏅','الشهادات والتنزيلات','Certificates & downloads','corners/shared/downloads.html'],
            ['📊','ركن الأهل — المتابعة والتقييم','Parents Corner — tracking',LD+'parents.html']],
        fam:{ar:'«حفل الحصاد»: نعرض ما حفظ وما تعلّم أمام العائلة، ونطبع شهادته ونعلّقها، ونختار معه هدف العام القادم.',en:'A “harvest party”: show the family what they learned, print and hang the certificate, and choose next year’s goal together.'},
        book:['رحلةُ الأقصى','Journey of Al-Aqsa',BK+'Al-Quds and Ummah/Aqsa Book.html'],
        goal:{ar:'يعرف المسجد الأقصى ومكانته، ويراجع ما تعلّمه في العام — ثم ينتقل إلى خطة ٨+ إذا بلغ الثامنة.',en:'Knows Al-Aqsa and its status, reviews the year — then moves to the 8+ plan when 8.'}}
    ]},

  /* ═══════════════════════ ٨ سنوات فما فوق ═══════════════════════ */
  { id:'g8', ic:'🛡️', c:'#2B5FA8', age:{ar:'٨ سنوات فما فوق',en:'Ages 8+'}, nm:{ar:'الفرسان البُناة',en:'Young Knights'},
    pace:{ar:'٣٠–٤٠ دقيقة، ٥ أيام في الأسبوع، يعمل وحده، ومراجعةٌ أسبوعية مع الأهل (٢٠ دقيقة)',en:'30–40 min · 5 days a week · works alone, with a 20-min weekly review with a parent'},
    aim:{ar:'من الحبّ إلى الفهم والقناعة والعمل: يُتمّ رحلات الأركان كاملة، ويجتاز اختباراتها (٧٥٪+)، ويجمع الأوسمة، ويحفظ بخطة، ويكتسب مهارة — حتى يصير مسلمًا واثقًا يحمل همّ أمته.',en:'From love to understanding, conviction and action: complete each corner’s journeys, pass its tests (75%+), collect medals, memorize with a plan and learn a skill — a confident Muslim who carries the Ummah’s concerns.'},
    rules:[
      {ar:'اتفق معه على «عقدٍ أسبوعي»: كم محطة، وأيّ اختبار، وأيّ فصلٍ في الحصن.',en:'Agree a “weekly contract”: how many stations, which test, which Fortress chapter.'},
      {ar:'المراجعة الأسبوعية في ركن الأهل: افتح «المتابعة والتقييم» وناقشه فيما تعلّم لا في الدرجات فقط.',en:'Weekly review in the Parents Corner: open “Tracking” and discuss what they learned, not just scores.'},
      {ar:'لا يُفتح ركنٌ جديد قبل اختبار رحلات الركن الحالي؛ هكذا لا يتشتّت.',en:'Don’t open a new corner before testing the current corner’s journeys — that is how they avoid getting lost.'},
      {ar:'اربط كلَّ شهرٍ بعمل: ما تعلّمه يظهر في البيت والمسجد والمدرسة.',en:'Tie each month to action: what they learn shows at home, in the mosque and at school.'}],
    week:[
      {d:{ar:'٣ جلسات',en:'3 sessions'},a:{ar:'محطة يوميًا من رحلة الشهر حتى تكتمل الرحلة',en:'A station a day from the month’s journey until it is complete'}},
      {d:{ar:'جلسة',en:'1 session'},a:{ar:'فصلٌ من حصن الأبطال أو القلب السليم + ألعابه ← الوسام',en:'A Heroes’ Fortress or Pure Heart chapter + its games → the medal'}},
      {d:{ar:'يوميًا ١٠ د',en:'Daily 10 min'},a:{ar:'ورد الحفظ في مقرأة الحفظ حسب خطة حفظ القرآن',en:'The hifdh portion in the hifdh reader, following the Quran plan'}},
      {d:{ar:'جلسة',en:'1 session'},a:{ar:'مهارة من «صانع المهارات» أو قصة من «مكتبة الكبار»',en:'A skill from the Skills Maker or a story from the big library'}},
      {d:{ar:'نهاية الأسبوع',en:'Weekend'},a:{ar:'اختبار الرحلة المكتملة + مراجعة الأهل + نشاط عائلي',en:'Test the completed journey + parent review + a family activity'}}],
    months:[
      {ic:'🧭',t:{ar:'اليقين والتوحيد',en:'Certainty & tawheed'},
        go:[['🧭','منارة العقيدة — رحلة اليقين','Faith Minaret — certainty',FM+'yaqeen.html'],
            ['🕋','رحلة التوحيد','The tawheed journey',FM+'tawheed.html'],
            ['🌅','كيف عرفنا الله؟','How we knew Allah',FM+'maarifa.html'],
            ['🔬','مختبر كشف الحقائق','The truth-revealing lab',FM+'lab.html']],
        fam:{ar:'«حوار الأسئلة الكبرى» على العشاء: من خلق الكون؟ كيف نعرف الله؟ ويقود هو الحوار بما تعلّم.',en:'A “big questions” dinner talk: who made the universe? how do we know Allah? — they lead with what they learned.'},
        book:['قَصرُ المَلِكِ الواحِد — التوحيد','City of Tawheed',BK+'Faith Minaret/Tawheed Book.html'],
        goal:{ar:'يشرح أدلّة وجود الله ومعنى التوحيد بكلماته، ويُتمّ ٤ رحلات ويختبرها.',en:'Explains the signs of Allah’s existence and tawheed in their words; completes and tests 4 journeys.'}},
      {ic:'🕌',t:{ar:'صلاتي بإتقان وأذكاري',en:'Prayer done well & adhkar'},
        go:[['🤲','واحة العبادة — الصلاة','Worship Oasis — prayer',LD+'ibada-journeys.html?j=salah'],
            ['🛡️','الأذكار','Adhkar',LD+'ibada-journeys.html?j=adhkar'],
            ['💡','الدعاء','Du’a',LD+'ibada-journeys.html?j=dua'],
            ['📘','دليل الأهل: كيف أجعل ابني يصلي؟','Parents’ guide: how do I get my child to pray?','parents-guide/index.html#g/salah']],
        fam:{ar:'«جدول الصلوات الخمس» على الثلاجة مع ٣٠ يومًا للمتابعة، وصلاة جماعة في المسجد أسبوعيًا مع الأب.',en:'A five-prayers chart on the fridge for 30 days, and a weekly congregational prayer at the mosque with dad.'},
        book:['رحلةُ الصَّلاة','The Prayer Journey',BK+'Worship Oasis/Salah Book.html'],
        goal:{ar:'يحافظ على الصلوات الخمس في وقتها، ويحفظ أذكار الصباح والمساء.',en:'Keeps the five prayers on time and memorizes the morning & evening adhkar.'}},
      {ic:'📖',t:{ar:'صاحبي القرآن',en:'The Qur’an, my companion'},
        go:[['📜','السور القصيرة','Short surahs',LD+'quran-surahs.html'],
            ['🏛️','قصص القرآن','Qur’an stories',LD+'quran-stories.html'],
            ['🤝','أنا صاحبك القرآن','“I am your companion, the Qur’an”',LD+'quran-companions.html'],
            ['🎙️','مقرأة الحفظ','The hifdh reader','corners/quran-hifz/index.html'],
            ['📖','دليل الأهل: خطة حفظ القرآن','Parents’ guide: the hifdh plan','parents-guide/index.html#b/qp-method'],
            ['📝','اختبارات بستان القرآن','Quran Garden tests',LD+'quran-tests.html']],
        fam:{ar:'«مجلس القرآن» الأسبوعي: يسمّع ما حفظ، ويحكي قصةً قرآنية، ويختار الأسرة منها درسًا تعمل به.',en:'A weekly “Qur’an circle”: recite the new portion, tell a Qur’anic story, pick a lesson to live by.'},
        book:['قصصُ القرآن','Quran Stories',BK+'Quran Garden/Quran Stories Book.html'],
        goal:{ar:'يبدأ خطة حفظٍ ثابتة (جزء عمّ)، ويُتمّ رحلات البستان الأربع ويختبرها.',en:'Starts a steady hifdh plan (Juz ’Amma) and completes and tests the four Garden journeys.'},
        win:{ar:'نتيجة ٧٥٪ في البستان تفتح ٥ أنشطة قرآنية في ركن أنوس (منها «المقرأة الذكية»).',en:'75% in the Garden opens 5 Qur’an activities in Anous (including the “smart reader”).'}},
      {ic:'✨',t:{ar:'أركان الإيمان: الملائكة والكتب والرسل',en:'Pillars of faith: angels, books & messengers'},
        go:[['✨','رحلة جنود النور (الملائكة)','Soldiers of Light (angels)',FM+'malaika.html'],
            ['📜','رحلة البلاغ (الكتب والرسل)','The Message (books & messengers)',FM+'kutub.html'],
            ['🛡️','سلسلة الأمان بالله','The chain of security with Allah',FM+'aman.html'],
            ['❓','بطاقات «ردّ الشبهات»','“Answering doubts” cards',TR+'shubuhat.html']],
        fam:{ar:'«سؤال صديقي»: يتخيّل سؤالًا قد يسأله صديقٌ غير مسلم عن الإيمان، ويجيب عنه أمام الأسرة.',en:'“My friend’s question”: imagine a question a non-Muslim friend might ask about faith, and answer it for the family.'},
        book:['جُنودُ النّور — الملائكة','Soldiers of Light',BK+'Faith Minaret/Malaika Book.html'],
        goal:{ar:'يعدّد أركان الإيمان ويشرحها، ويجيب عن ٣ شبهاتٍ شائعة بهدوء.',en:'Lists and explains the pillars of faith and calmly answers 3 common doubts.'}},
      {ic:'🏰',t:{ar:'الأنبياء والسيرة',en:'The prophets & the Seerah'},
        go:[['🏰','حصن الأبطال — عصر الأنبياء','Fortress — age of the prophets',HF+'era.html?era=prophets'],
            ['🌙','حصن الأبطال — رحلة السيرة','Fortress — the Seerah',HF+'era.html?era=seerah'],
            ['📖','قصص الأنبياء (الكاملة)','Prophets’ stories (full)',HF+'stories.html']],
        fam:{ar:'«خريطة الأنبياء»: يرسم خريطةً ويضع عليها أماكن الأنبياء (مكة، مصر، الشام…) ويحكي عند كلٍّ قصته.',en:'A “prophets map”: draw a map, mark where the prophets lived (Makkah, Egypt, Sham…) and tell each story.'},
        book:['سيرةُ النبيّ ﷺ','The Prophet ﷺ',BK+'Heroes Fortress/Seerah Book.html'],
        goal:{ar:'يجمع أوسمة ١٠ أنبياء ومراحل السيرة الكبرى، ويروي السيرة من المولد إلى الهجرة.',en:'Collects medals for 10 prophets and the main Seerah stages; narrates the Seerah from birth to the Hijrah.'},
        win:{ar:'أوسمة الفصول تملأ قاعة حصن الأبطال.',en:'Chapter medals fill the Fortress hall.'}},
      {ic:'💎',t:{ar:'الأخلاق والآداب والقلب السليم',en:'Character, manners & a sound heart'},
        go:[['🏘️','حيّنا الصغير — اختبارا الأخلاق والآداب','Little District — the character & manners tests',LD+'social.html'],
            ['💚','القلب السليم — الأسماء الحسنى والقلب','The Pure Heart — the names & the heart',HF+'heart.html?era=heart'],
            ['📜','بطاقات السنن','Sunnah cards',TR+'sunnah.html']],
        fam:{ar:'«تحدّي خُلق الأسبوع»: خُلقٌ واحد (الحلم، الصدق، الإيثار) يطبّقه كلُّ أفراد الأسرة ويقيّمون أنفسهم يوم الجمعة.',en:'“Trait of the week” challenge: one trait (forbearance, truth, selflessness) the whole family practises and self-rates on Friday.'},
        book:['القلبُ السليم','The Sound Heart',BK+'Pure Heart/Sound Heart Book.html'],
        goal:{ar:'يجتاز اختباري الأخلاق والآداب، ويجمع ١٠ أوسمة من محطات القلب السليم.',en:'Passes the character and manners tests and collects 10 Pure Heart station medals.'},
        win:{ar:'٧٥٪ تفتح أنشطة حيّنا الصغير (منها «شجرة الشكر») وأنشطة القلب السليم.',en:'75% opens the Little District activities (including “gratitude tree”) and the Pure Heart ones.'}},
      {ic:'🚩',t:{ar:'أبطال الإسلام والقائد الصغير',en:'Heroes of Islam & the little leader'},
        go:[['🏰','حصن الأبطال — أبطال الإسلام','Fortress — heroes of Islam',HF+'era.html?era=heroes'],
            ['⚔️','أيام الإسلام الخالدة','The immortal days',HF+'era.html?era=battles'],
            ['🚩','رحلة «القائد الصغير»','The “little leader” journey','رحلة القائد الصغير.html'],
            ['🦁','النادي الرياضي — القوة والشخصية القيادية','Sports Club — strength & leadership',LD+'sport.html']],
        fam:{ar:'«قائد البيت ليوم»: يخطّط يومًا عائليًا كاملًا (برنامج، ميزانية صغيرة، توزيع مهام) ويقوده.',en:'“Leader for a day”: plan and lead a full family day (schedule, small budget, tasks).'},
        book:['القادةُ والفاتِحون','Leaders & Rulers',BK+'Heroes Fortress/Leaders Book.html'],
        goal:{ar:'يعرف ١٥ بطلًا وصفاتهم القيادية، ويقود مشروعًا صغيرًا في البيت أو المدرسة.',en:'Knows 15 heroes and their leadership traits, and leads a small project at home or school.'}},
      {ic:'🌉',t:{ar:'اليوم الآخر والقدر والثبات',en:'The Last Day, the decree & steadfastness'},
        go:[['🌉','رحلة العبور (اليوم الآخر)','The crossing (the Last Day)',FM+'akhira.html'],
            ['📿','رحلة سرّ التقدير (القدر)','The secret of the decree',FM+'qadar.html'],
            ['🦁','رحلة الأبطال (قصص الثبات)','The heroes (steadfastness)',FM+'thabat.html'],
            ['🕋','صفحة منارة العقيدة: الاختبارات','Faith Minaret page: the tests',FM+'aqeeda.html']],
        fam:{ar:'«دفتر الرضا»: يكتب كلَّ يوم شيئًا لم يُحبّه ثم كيف رأى فيه خيرًا — تطبيقًا للإيمان بالقدر.',en:'A “contentment notebook”: daily, something they disliked and the good they found in it — living belief in the decree.'},
        book:['رِحلةُ العُبور — الآخرة','Journey of the Crossing',BK+'Faith Minaret/Akhira Book.html'],
        goal:{ar:'يُتمّ رحلات منارة العقيدة العشر، ونتيجة الركن ٧٥٪ أو أكثر.',en:'Completes all ten Faith Minaret journeys with a corner score of 75%+.'},
        win:{ar:'تُفتح ٥ أنشطة العقيدة في ركن أنوس (منها «خريطة الأنبياء» و«منظار النجوم»).',en:'Opens the 5 faith activities in Anous (including “prophets’ map” and “star telescope”).'}},
      {ic:'🔭',t:{ar:'العقل المبدع والمهارات',en:'The creative mind & skills'},
        go:[['🏛️','أكاديمية المبدعين: كُن أنت المبدع، لغتي، منارة العالم','The Academy: be the creator · my Arabic · the world’s lighthouse',HF+'academy.html'],
            ['🔭','رحلة المستكشفين','The explorers',HF+'activities.html?era=explorers'],
            ['📖','عقول منيرة','Illuminating minds',HF+'activities.html?era=minds'],
            ['🛠️','صانع المهارات: اختر مهارة (الفقيه، المبرمج، المتفكّر، العالِم…)','Skills Maker: pick a skill (faqih, coder, thinker, scientist…)',SK+'index.html']],
        fam:{ar:'«معرض العائلة»: يعرض مشروعًا صنعه بالمهارة التي اختارها (تجربة، برنامج صغير، بحث) أمام الأسرة.',en:'A “family fair”: present a project made with the chosen skill (an experiment, a small program, a report).'},
        book:['صانعُ المستقبل','Maker of the Future',BK+'Innovators Academy/Future Maker Book.html'],
        goal:{ar:'يُتمّ رحلات الأكاديمية الثلاث ويختبرها، ويُنجز مهارةً واحدةً كاملة.',en:'Completes and tests the Academy’s three journeys and finishes one whole skill.'},
        win:{ar:'٧٥٪ تفتح أنشطة الأكاديمية (منها «المحقّق الذكي» و«شيفرة الأرقام»).',en:'75% opens the Academy activities (including “smart detective” and “number code”).'}},
      {ic:'🌙',t:{ar:'الصيام والزكاة والحج',en:'Fasting, zakah & hajj'},
        note:{ar:'قدّم هذا الشهر إلى رمضان إن وافق غيره، ورحلة الحج إلى ذي الحجة إن أمكن.',en:'Move this month to Ramadan if needed, and the hajj journey to Dhul-Hijjah if possible.'},
        go:[['🌙','الصيام','Fasting',LD+'ibada-journeys.html?j=fasting'],
            ['🎁','الزكاة والصدقة','Zakah & charity',LD+'ibada-journeys.html?j=zakah'],
            ['🕋','الحج','Hajj',LD+'ibada-journeys.html?j=hajj'],
            ['✨','دفتر الحسنات','The good-deeds book',LD+'hasanat.html']],
        fam:{ar:'«مشروع الخير»: يخطّط صدقةً جماعية (إفطار صائم، سلة طعام) ويحسب زكاة مثالٍ بسيط مع أبيه.',en:'A “charity project”: plan a group sadaqah (an iftar, a food basket) and calculate a simple zakah example with a parent.'},
        book:['رحلةُ الحَجّ','The Hajj Journey',BK+'Worship Oasis/Hajj Book.html'],
        goal:{ar:'يُتمّ رحلات واحة العبادة الست بنتيجة ٧٥٪+، ويصوم ما يطيق.',en:'Completes the six Worship Oasis journeys at 75%+, and fasts as able.'},
        win:{ar:'تُفتح ٥ أنشطة العبادة (منها «بطل الأركان الخمسة» و«حقيبة المسافر»).',en:'Opens the 5 worship activities (including “five-pillars hero” and “traveller’s bag”).'}},
      {ic:'🕌',t:{ar:'القدس والأمة',en:'Al-Quds & the Ummah'},
        go:[['🕌','رحلة الأقصى','The Al-Aqsa journey',QU+'aqsa.html'],
            ['🤝','الأمة الواحدة','The one Ummah',QU+'wahda.html'],
            ['🌅','رحلة التغيير','The journey of change',QU+'taghyir.html'],
            ['🏛️','الأندلس','Al-Andalus',QU+'andalus.html']],
        fam:{ar:'«خريطة الأمة»: نعلّق خريطة العالم ونضع دبوسًا على بلاد المسلمين، وندعو لأهل بلدٍ كلَّ ليلة.',en:'An “Ummah map”: pin the Muslim lands on a world map and make du’a for one country each night.'},
        book:['رحلةُ الوَحدة','Journey of Unity',BK+'Al-Quds and Ummah/Wahda Book.html'],
        goal:{ar:'يعرف تاريخ الأقصى ومكانته ووحدة الأمة، ويُتمّ رحلات الركن الثلاث ويختبرها.',en:'Knows Al-Aqsa’s history and status and the unity of the Ummah; completes and tests the three journeys.'},
        win:{ar:'٧٥٪ تفتح أنشطة القدس (منها «شريط الزمن الهجري»).',en:'75% opens the Al-Quds activities (including “Hijri timeline”).'}},
      {ic:'🏆',t:{ar:'الجسد القوي وحصاد العام',en:'A strong body & the year’s harvest'},
        go:[['🏊','النادي الرياضي — الرحلات الأربع','Sports Club — all four journeys',LD+'sport.html'],
            ['🏆','ركن المسابقات','The competitions corner','corners/competitions/competitions.html'],
            ['🏅','الشهادات والتنزيلات','Certificates & downloads','corners/shared/downloads.html'],
            ['📊','ركن الأهل — المتابعة والتقييم','Parents Corner — tracking',LD+'parents.html']],
        fam:{ar:'«حفل الفرسان»: يعرض حصاد عامه (المحفوظ، الأوسمة، المهارة)، ويكتب بنفسه أهداف العام القادم.',en:'A “knights’ party”: present the year’s harvest (memorization, medals, skill) and write next year’s goals himself.'},
        book:['القُوّةُ والشَّخصيّةُ القِياديّة','Strength & Leadership',BK+'Sports Club/Strength and Leadership Book.html'],
        goal:{ar:'يُتمّ رحلات النادي الأربع ويختبرها، ويراجع نتائج كل الأركان مع والديه، ويطبع شهاداته.',en:'Completes and tests the four Sports Club journeys, reviews every corner’s results with parents and prints the certificates.'},
        win:{ar:'تُفتح أنشطة النادي، وتكتمل قاعة الأوسمة لهذا العام.',en:'Opens the Sports Club activities and rounds off the year’s medal hall.'}}
    ]}
  ];

  /* ── helpers ── */
  function T(o,l){ return o?(o[l]||o.ar||''):''; }
  function N(n,l){ return l==='ar'?String(n).replace(/[0-9]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'[+d];}):String(n); }
  function href(root,p){ return root+encodeURI(p).replace(/%25/g,'%'); }
  function progTxt(d,t,l){ var p=t?Math.round(d*100/t):0; return l==='ar'?('أُنجز '+N(d,l)+' من '+N(t,l)+' — بنسبة '+N(p,l)+'٪'):('Done '+d+' of '+t+' ('+p+'%)'); }
  function key(g){ return 'mk-annual:'+g; }
  function load(g){ try{ return JSON.parse(localStorage.getItem(key(g))||'{}'); }catch(e){ return {}; } }
  function save(g,s){ try{ localStorage.setItem(key(g),JSON.stringify(s)); }catch(e){} }
  var QTR=[{ar:'الفصل الأول — الأساس',en:'Term 1 — foundations'},{ar:'الفصل الثاني — البناء',en:'Term 2 — building'},{ar:'الفصل الثالث — القدوة والعمل',en:'Term 3 — role models & action'},{ar:'الفصل الرابع — الحصاد',en:'Term 4 — harvest'}];

  function monthItems(m){ /* the checklist of a month: each place to open + family + book + goal */
    return m.go.length+3;
  }
  function render(gid,lang,root){
    var l=lang==='en'?'en':'ar', G=GROUPS.filter(function(g){return g.id===gid;})[0]||GROUPS[0], S=load(G.id);
    var tot=0, done=0; G.months.forEach(function(m,mi){ var n=monthItems(m); tot+=n; for(var i=0;i<n;i++) if(S[mi+'.'+i]) done++; });
    var pct=tot?Math.round(done*100/tot):0;
    var h='<div class="ap" data-g="'+G.id+'" style="--apc:'+G.c+'">';
    h+='<div class="ap-switch no-print">'+GROUPS.map(function(g){ return '<button type="button" class="ap-gbtn'+(g.id===G.id?' on':'')+'" data-g="'+g.id+'" style="--apc:'+g.c+'"><span>'+g.ic+'</span><b>'+T(g.age,l)+'</b><small>'+T(g.nm,l)+'</small></button>'; }).join('')+'</div>';
    h+='<div class="ap-hero"><div class="ap-hic">'+G.ic+'</div><div><div class="ap-kick">'+(l==='ar'?'الخطة السنوية — ':'Annual plan — ')+T(G.age,l)+'</div><h2>'+T(G.nm,l)+'</h2><p>'+T(G.aim,l)+'</p>'
      +'<div class="ap-pace">⏱️ '+T(G.pace,l)+'</div>'
      +'<div class="ap-prog"><div class="ap-bar"><i style="width:'+pct+'%"></i></div><span>'+progTxt(done,tot,l)+'</span></div>'
      +'<div class="ap-tools no-print"><button type="button" class="ap-btn" data-ap="print">🖨️ '+(l==='ar'?'اطبع الخطة':'Print the plan')+'</button><button type="button" class="ap-btn ghost" data-ap="reset">↺ '+(l==='ar'?'تصفير التقدّم':'Reset progress')+'</button></div></div></div>';
    /* how the site works */
    h+='<h3 class="ap-h">🧭 '+(l==='ar'?'كيف يعمل الموقع؟ (اقرأها مرّة واحدة)':'How the website works (read once)')+'</h3><div class="ap-how">'
      +HOW.map(function(x){ var inner='<span class="ap-ic">'+x.ic+'</span><b>'+T(x.t,l)+'</b><span>'+T(x.d,l)+'</span>'; return x.p?'<a class="ap-hw" target="_blank" rel="noopener" href="'+href(root,x.p)+'">'+inner+'</a>':'<div class="ap-hw">'+inner+'</div>'; }).join('')+'</div>';
    /* golden rules + weekly rhythm */
    h+='<div class="ap-two"><div class="ap-box"><h3 class="ap-h">🤝 '+(l==='ar'?'قواعد هذه الفئة':'Rules for this group')+'</h3><ul class="ap-rules">'+G.rules.map(function(r){ return '<li>'+T(r,l)+'</li>'; }).join('')+'</ul></div>'
      +'<div class="ap-box"><h3 class="ap-h">📅 '+(l==='ar'?'الإيقاع الأسبوعي (ثابتٌ طوال العام)':'The weekly rhythm (same all year)')+'</h3><table class="ap-week">'+G.week.map(function(w){ return '<tr><th>'+T(w.d,l)+'</th><td>'+T(w.a,l)+'</td></tr>'; }).join('')+'</table></div></div>';
    /* the year at a glance */
    h+='<h3 class="ap-h">🗓️ '+(l==='ar'?'العام في لمحة':'The year at a glance')+'</h3><div class="ap-glance">'
      +G.months.map(function(m,mi){ var n=monthItems(m), d=0; for(var i=0;i<n;i++) if(S[mi+'.'+i]) d++; return '<a class="ap-gl'+(d===n?' full':'')+'" href="#ap-'+G.id+'-'+mi+'" data-jump="ap-'+G.id+'-'+mi+'"><span class="n">'+N(mi+1,l)+'</span><span class="i">'+m.ic+'</span><span class="t">'+T(m.t,l)+'</span><span class="d">'+N(d,l)+'/'+N(n,l)+'</span></a>'; }).join('')+'</div>';
    /* months */
    G.months.forEach(function(m,mi){
      if(mi%3===0) h+='<div class="ap-term">'+T(QTR[mi/3],l)+'</div>';
      var i=0, ck=function(inner){ var k=mi+'.'+(i++); return '<li class="ap-ck'+(S[k]?' done':'')+'" data-k="'+k+'"><span class="box">✓</span><span class="tx">'+inner+'</span></li>'; };
      h+='<section class="ap-m" id="ap-'+G.id+'-'+mi+'"><div class="ap-mh"><span class="ap-mn">'+(l==='ar'?'الشهر ':'Month ')+N(mi+1,l)+'</span><span class="ap-mi">'+m.ic+'</span><h4>'+T(m.t,l)+'</h4></div>';
      if(m.note) h+='<p class="ap-note">🌙 '+T(m.note,l)+'</p>';
      h+='<div class="ap-goal">🎯 <b>'+(l==='ar'?'هدف الشهر: ':'Goal: ')+'</b>'+T(m.goal,l)+'</div>';
      h+='<div class="ap-sub">'+(l==='ar'?'📍 افتح في الموقع — بهذا الترتيب':'📍 Open on the site — in this order')+'</div><ul class="ap-list">'
        +m.go.map(function(g){ return ck('<a target="_blank" rel="noopener" href="'+href(root,g[3])+'">'+g[0]+' '+(l==='ar'?g[1]:g[2])+' ↗</a>'); }).join('')+'</ul>';
      h+='<div class="ap-sub">'+(l==='ar'?'🏡 بعيدًا عن الشاشة':'🏡 Away from the screen')+'</div><ul class="ap-list">'
        +ck('<b>'+(l==='ar'?'نشاط العائلة: ':'Family activity: ')+'</b>'+T(m.fam,l))
        +ck('<b>'+(l==='ar'?'كتاب الشهر: ':'Book of the month: ')+'</b><a target="_blank" rel="noopener" href="'+href(root,m.book[2])+'">📘 '+(l==='ar'?m.book[0]:m.book[1])+' ↗</a> '+(l==='ar'?'(اطبعه من المكتبة المجانية)':'(print it from the free library)'))
        +ck('<b>'+(l==='ar'?'تحقّق الهدف: ':'Goal reached: ')+'</b>'+(l==='ar'?'راجعه مع طفلك في آخر الشهر قبل الانتقال.':'check it together at month’s end before moving on.'))+'</ul>';
      if(m.win) h+='<div class="ap-win">🎁 '+T(m.win,l)+'</div>';
      h+='</section>';
    });
    h+='<div class="ap-end">'+(l==='ar'
      ?'<b>إذا فاتك شهر</b> فلا تقفز إلى الشهر التالي: أكمل المتأخّر بإيقاعٍ أخفّ، فالخطة سلسلةٌ يبني كلُّ شهرٍ فيها على ما قبله. وللتفصيل حسب العمر الدقيق (٤–٦، ٧–٩، ١٠–١٢) ارجع إلى «خارطة طريق المربّي» في الباب الخامس من دليل الأهل الشامل.'
      :'<b>Missed a month?</b> Don’t jump ahead — finish it at a lighter pace; each month builds on the one before. For detail by exact age (4–6 · 7–9 · 10–12) see the “Parent Roadmap” in Part 5 of the Complete Parents’ Guide.')+'</div>';
    return h+'</div>';
  }
  function wire(box,lang,root,onSwitch){
    var ap=box.querySelector('.ap'); if(!ap) return; var g=ap.dataset.g;
    Array.prototype.forEach.call(ap.querySelectorAll('.ap-ck'),function(li){
      li.addEventListener('click',function(e){ if(e.target.closest('a')) return; var s=load(g); li.classList.toggle('done'); s[li.dataset.k]=li.classList.contains('done'); if(!s[li.dataset.k]) delete s[li.dataset.k]; save(g,s); refresh(); });
    });
    Array.prototype.forEach.call(ap.querySelectorAll('.ap-gbtn'),function(b){ b.onclick=function(){ try{ localStorage.setItem('mk-annual-group',b.dataset.g); }catch(e){} if(onSwitch) onSwitch(b.dataset.g); }; });
    Array.prototype.forEach.call(ap.querySelectorAll('[data-jump]'),function(a){ a.onclick=function(e){ e.preventDefault(); var el=document.getElementById(a.dataset.jump); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }; });
    var pr=ap.querySelector('[data-ap="print"]'); if(pr) pr.onclick=function(){ document.documentElement.classList.add('ap-printing'); window.print(); setTimeout(function(){ document.documentElement.classList.remove('ap-printing'); },500); };
    var rs=ap.querySelector('[data-ap="reset"]'); if(rs) rs.onclick=function(){ if(confirm(lang==='en'?'Reset this plan’s progress?':'تصفير تقدّم هذه الخطة؟')){ save(g,{}); if(onSwitch) onSwitch(g); } };
    function refresh(){ /* recompute counters without re-rendering */
      var S=load(g), G=GROUPS.filter(function(x){return x.id===g;})[0], tot=0, done=0;
      G.months.forEach(function(m,mi){ var n=monthItems(m), d=0; for(var i=0;i<n;i++) if(S[mi+'.'+i]) d++; tot+=n; done+=d;
        var gl=ap.querySelectorAll('.ap-gl')[mi]; if(gl){ gl.querySelector('.d').textContent=N(d,lang)+(lang==='ar'?' من ':'/')+N(n,lang); gl.classList.toggle('full',d===n); } });
      var pct=tot?Math.round(done*100/tot):0; ap.querySelector('.ap-bar i').style.width=pct+'%';
      ap.querySelector('.ap-prog span').textContent=progTxt(done,tot,lang);
    }
  }
  function currentGroup(){ try{ return localStorage.getItem('mk-annual-group')||'g57'; }catch(e){ return 'g57'; } }
  window.ANNUAL_PLAN={groups:GROUPS,how:HOW,render:render,wire:wire,currentGroup:currentGroup};
})();
