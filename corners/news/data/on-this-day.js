/* on-this-day.js — «حدث في مثل هذا اليوم» — Hijri-first.
   Every event is matched by its HIJRI day/month (d, m) and year (y, AH).
   ce = the Gregorian year (shown next to the Hijri one); g = the exact Gregorian date when it is the recorded one;
   hc = the Hijri day was calculated from that Gregorian date (dates before 1582 read as Julian) and may differ by a day;
   pre = an event before the Hijrah (shown with its Gregorian year); sure:false = date per the most common view («على الأرجح»).
   G = events and world days matched by their GREGORIAN day/month (gd, gm; y = CE year for events, none for yearly
   world days). Hijri events above that carry an exact recorded Gregorian date (g, from 1582 on) also show on that day. */
window.MK_OTD = { H: [
 {
  "d": 1,
  "m": 1,
  "icon": "🌙",
  "kind": "occasion",
  "sure": true,
  "t": [
   "بداية السنة الهجرية",
   "The Start of the Hijri Year"
  ],
  "s": [
   "اليوم أول شهر محرّم، بداية سنة هجرية جديدة. واعتمد المسلمون التقويم الهجري في عهد الخليفة عمر بن الخطاب رضي الله عنه، وجعلوا الهجرة النبوية بداية له.",
   "Today is the first of Muharram, the start of a new Hijri year. The Muslims adopted the Hijri calendar during the caliphate of Umar ibn al-Khattab (may Allah be pleased with him), counting the years from the Prophet's ﷺ Hijrah."
  ],
  "lesson": [
   "سنة جديدة فرصة جديدة: اختر عادة طيبة تبدأ بها عامك.",
   "A new year is a fresh start: pick one good habit to begin your year with."
  ]
 },
 {
  "d": 4,
  "m": 1,
  "y": 1345,
  "icon": "🕌",
  "sure": true,
  "t": [
   "افتتاح مسجد باريس الكبير",
   "The Great Mosque of Paris Opens"
  ],
  "s": [
   "في الخامس عشر من يوليو ١٩٢٦م افتُتح مسجد باريس الكبير في فرنسا، وبُني تكريمًا للجنود المسلمين الذين ضحّوا في الحرب العالمية الأولى.",
   "On 15 July 1926, the Great Mosque of Paris was inaugurated in France. It was built to honour the Muslim soldiers who gave their lives in the First World War."
  ],
  "lesson": [
   "الوفاء لمن ضحّى من أجلنا من الأخلاق الكريمة.",
   "Honouring those who sacrificed for others is a noble trait."
  ],
  "g": {
   "d": 15,
   "m": 7,
   "y": 1926
  },
  "ce": 1926,
  "hc": true
 },
 {
  "d": 9,
  "m": 1,
  "icon": "🤲",
  "kind": "occasion",
  "sure": true,
  "t": [
   "يوم تاسوعاء",
   "The Day of Tasu'a"
  ],
  "s": [
   "قال النبي ﷺ: «لئن بقيت إلى قابل لأصومنّ التاسع» (رواه مسلم)، فيُستحب صيام التاسع مع العاشر من محرّم.",
   "The Prophet ﷺ said: \"If I live until next year, I will surely fast the ninth\" (Muslim). So it is recommended to fast the 9th of Muharram together with the 10th."
  ],
  "lesson": [
   "النبي ﷺ كان يحب أن يسبق إلى الخير ويخطط له.",
   "The Prophet ﷺ planned ahead for good deeds."
  ],
  "link": "corners/little-district/pages/ibada.html"
 },
 {
  "d": 10,
  "m": 1,
  "icon": "🌊",
  "kind": "occasion",
  "sure": true,
  "t": [
   "يوم عاشوراء",
   "The Day of Ashura"
  ],
  "s": [
   "في يوم عاشوراء نجّى الله موسى عليه السلام وقومه من فرعون، فصامه موسى شكرًا لله، وصامه النبي ﷺ وأمر بصيامه (رواه البخاري ٢٠٠٤).",
   "On the day of Ashura, Allah saved Musa (peace be upon him) and his people from Pharaoh. Musa fasted it to thank Allah, and the Prophet ﷺ fasted it and told Muslims to fast it (Bukhari 2004)."
  ],
  "lesson": [
   "إذا أنعم الله عليك بنعمة فاشكره بعمل صالح.",
   "When Allah blesses you, thank Him with a good deed."
  ],
  "link": "corners/little-district/pages/ibada.html"
 },
 {
  "d": 25,
  "m": 1,
  "y": 1441,
  "icon": "🚀",
  "sure": true,
  "t": [
   "أول إماراتي في الفضاء",
   "The First Emirati in Space"
  ],
  "s": [
   "في الخامس والعشرين من سبتمبر ٢٠١٩م انطلق هزاع المنصوري إلى محطة الفضاء الدولية، ليكون أول إماراتي يصعد إلى الفضاء.",
   "On 25 September 2019, Hazza al-Mansouri launched to the International Space Station, becoming the first Emirati in space."
  ],
  "lesson": [
   "كل كوكب ونجم آية تدل على الله.",
   "Every planet and star is a sign pointing to Allah."
  ],
  "g": {
   "d": 25,
   "m": 9,
   "y": 2019
  },
  "ce": 2019,
  "hc": true
 },
 {
  "d": 4,
  "m": 2,
  "y": 656,
  "icon": "📚",
  "sure": true,
  "t": [
   "سقوط بغداد",
   "The Fall of Baghdad"
  ],
  "s": [
   "في العاشر من فبراير ١٢٥٨م سقطت بغداد في يد المغول، وكانت مدينة العلم وبيت الحكمة. لكن المسلمين أوقفوا المغول بعد سنتين في عين جالوت، ثم أسلم كثير من المغول أنفسهم.",
   "On 10 February 1258, Baghdad, the city of learning and the House of Wisdom, fell to the Mongols. But two years later the Muslims stopped the Mongols at Ain Jalut, and later many Mongols themselves became Muslim."
  ],
  "lesson": [
   "بعد كل محنة يأتي فرج؛ ﴿إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾.",
   "After every hardship comes relief: \"Indeed, with hardship comes ease.\""
  ],
  "link": "corners/treasures/landmarks.html#baghdad",
  "g": {
   "d": 10,
   "m": 2,
   "y": 1258
  },
  "ce": 1258,
  "hc": true
 },
 {
  "d": 27,
  "m": 2,
  "y": 1,
  "icon": "🐪",
  "kind": "event",
  "sure": false,
  "t": [
   "ليلة الهجرة وغار ثور",
   "The Night of the Hijrah and the Cave of Thawr"
  ],
  "s": [
   "على الأرجح، في مثل هذه الليلة خرج النبي ﷺ مع صاحبه أبي بكر الصديق من مكة مهاجرَين، واختبآ في غار ثور ثلاث ليال. (التاريخ بحسب أشهر الأقوال.)",
   "According to the most common view, on this night the Prophet ﷺ left Makkah with his companion Abu Bakr as-Siddiq, and they hid in the Cave of Thawr for three nights."
  ],
  "lesson": [
   "قال النبي ﷺ لصاحبه: «لا تحزن إن الله معنا»؛ فالله معنا دائمًا.",
   "The Prophet ﷺ told his friend, \"Do not be sad, Allah is with us.\" Allah is always with us."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=hijrah",
  "ce": 622
 },
 {
  "d": 27,
  "m": 2,
  "y": 589,
  "icon": "🛡️",
  "sure": true,
  "t": [
   "وفاة صلاح الدين الأيوبي",
   "Salah al-Din Passes Away"
  ],
  "s": [
   "في الرابع من مارس ١١٩٣م توفي صلاح الدين الأيوبي في دمشق، محرّر القدس، وقد ترك مالًا قليلًا جدًّا لأنه كان ينفق كل ما عنده.",
   "On 4 March 1193, Salah al-Din, who freed Jerusalem, passed away in Damascus. He left very little money because he gave away almost everything he had."
  ],
  "lesson": [
   "العظمة ليست في جمع المال، بل في البذل والعدل.",
   "Greatness is not in collecting money but in giving and fairness."
  ],
  "link": "corners/treasures/landmarks.html#umayyad",
  "g": {
   "d": 4,
   "m": 3,
   "y": 1193
  },
  "ce": 1193,
  "hc": true
 },
 {
  "d": 2,
  "m": 3,
  "y": 897,
  "icon": "🏰",
  "sure": true,
  "t": [
   "تسليم غرناطة",
   "Granada Is Handed Over"
  ],
  "s": [
   "في الثاني من يناير ١٤٩٢م سُلّمت غرناطة، آخر ممالك المسلمين في الأندلس، بعد نحو ثمانية قرون من الحضارة الإسلامية هناك.",
   "On 2 January 1492, Granada, the last Muslim kingdom in al-Andalus, was handed over, after about eight centuries of Islamic civilisation there."
  ],
  "lesson": [
   "بقيت آثار الأندلس كقصر الحمراء، وبقي علمها الذي نوّر أوروبا؛ الخير الذي نصنعه لا يضيع.",
   "Al-Andalus left behind treasures like the Alhambra and knowledge that lit up Europe. The good we build never disappears."
  ],
  "link": "corners/treasures/landmarks.html#alhambra",
  "g": {
   "d": 2,
   "m": 1,
   "y": 1492
  },
  "ce": 1492
 },
 {
  "d": 7,
  "m": 3,
  "y": 1306,
  "icon": "🎓",
  "sure": true,
  "t": [
   "مولد مولانا أبي الكلام آزاد",
   "Maulana Abul Kalam Azad Is Born"
  ],
  "s": [
   "في الحادي عشر من نوفمبر ١٨٨٨م وُلد أبو الكلام آزاد في مكة المكرمة، العالم الذي صار أول وزير للتعليم في الهند، ويُحتفل بيوم مولده هناك «يومًا وطنيًّا للتعليم».",
   "On 11 November 1888, Abul Kalam Azad was born in Makkah. This scholar became India's first Minister of Education, and his birthday is celebrated there as National Education Day."
  ],
  "lesson": [
   "التعليم أعظم هدية تقدّمها لبلدك.",
   "Education is the greatest gift you can give your country."
  ],
  "g": {
   "d": 11,
   "m": 11,
   "y": 1888
  },
  "ce": 1888,
  "hc": true
 },
 {
  "d": 8,
  "m": 3,
  "y": 1,
  "icon": "🌴",
  "kind": "event",
  "sure": false,
  "t": [
   "وصول النبي ﷺ إلى قباء",
   "The Prophet ﷺ Arrives in Quba"
  ],
  "s": [
   "في يوم الاثنين من ربيع الأول سنة ١ هـ وصل النبي ﷺ إلى قباء قرب المدينة، وبنى فيها أول مسجد في الإسلام. واليوم الثامن هو أحد الأقوال المشهورة (وقيل الثاني عشر).",
   "On a Monday in Rabi' al-Awwal, 1 AH, the Prophet ﷺ reached Quba near Madinah and built the first mosque in Islam there. The 8th is one of the well-known views of the date (others say the 12th)."
  ],
  "lesson": [
   "أول ما بدأ به النبي ﷺ في بلده الجديد: بيت لله.",
   "The first thing the Prophet ﷺ built in his new home was a house for Allah."
  ],
  "link": "corners/treasures/landmarks.html#quba",
  "ce": 622
 },
 {
  "d": 12,
  "m": 3,
  "icon": "✨",
  "kind": "event",
  "sure": false,
  "t": [
   "مولد النبي ﷺ",
   "The Birth of the Prophet ﷺ"
  ],
  "s": [
   "وُلد النبي محمد ﷺ في مكة يوم الاثنين من شهر ربيع الأول في عام الفيل. واليوم الثاني عشر هو أشهر الأقوال، وقد اختلف العلماء في تحديد اليوم.",
   "The Prophet Muhammad ﷺ was born in Makkah on a Monday in Rabi' al-Awwal, in the Year of the Elephant. The 12th is the most widely known view, but scholars differ on the exact day."
  ],
  "lesson": [
   "نحب النبي ﷺ حين نتعلّم أخلاقه ونقتدي به كل يوم.",
   "We show love for the Prophet ﷺ by learning his manners and following them every day."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=birth",
  "ce": 571,
  "pre": [
   "عام الفيل",
   "the Year of the Elephant"
  ]
 },
 {
  "d": 12,
  "m": 3,
  "y": 11,
  "icon": "🤍",
  "kind": "event",
  "sure": false,
  "t": [
   "وفاة النبي ﷺ",
   "The Passing of the Prophet ﷺ"
  ],
  "s": [
   "يوم الاثنين من ربيع الأول سنة ١١ هـ توفي النبي ﷺ في المدينة بعد أن بلّغ الرسالة كاملة. والثاني عشر هو المشهور عند المؤرخين، مع خلاف في اليوم.",
   "On a Monday in Rabi' al-Awwal, 11 AH, the Prophet ﷺ passed away in Madinah after delivering the whole message. The 12th is the date best known among historians, though some differ."
  ],
  "lesson": [
   "قال أبو بكر: «من كان يعبد الله فإن الله حيّ لا يموت»؛ والقرآن والسنة باقيان معنا.",
   "Abu Bakr said, \"Whoever worships Allah, Allah is Ever-Living and never dies.\" The Quran and Sunnah are still with us."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=farewell",
  "ce": 632
 },
 {
  "d": 12,
  "m": 3,
  "y": 1414,
  "icon": "🌊",
  "sure": true,
  "t": [
   "افتتاح مسجد الحسن الثاني",
   "Hassan II Mosque Opens"
  ],
  "s": [
   "في الثلاثين من أغسطس ١٩٩٣م افتُتح مسجد الحسن الثاني في الدار البيضاء بالمغرب، وجزء منه مبني فوق مياه المحيط الأطلسي، ومئذنته من أطول المآذن في العالم.",
   "On 30 August 1993, Hassan II Mosque opened in Casablanca, Morocco. Part of it stands over the Atlantic Ocean, and its minaret is one of the tallest in the world."
  ],
  "lesson": [
   "كلما رأيت البحر الواسع فتذكّر عظمة خالقه سبحانه.",
   "Whenever you see the wide sea, remember the greatness of its Creator."
  ],
  "g": {
   "d": 30,
   "m": 8,
   "y": 1993
  },
  "ce": 1993,
  "hc": true
 },
 {
  "d": 14,
  "m": 3,
  "y": 1398,
  "icon": "🕌",
  "sure": true,
  "t": [
   "افتتاح مسجد الاستقلال",
   "Istiqlal Mosque Opens"
  ],
  "s": [
   "في الثاني والعشرين من فبراير ١٩٧٨م افتُتح مسجد الاستقلال في جاكرتا بإندونيسيا، أكبر مسجد في جنوب شرق آسيا، وإندونيسيا أكبر بلد مسلم من حيث عدد السكان.",
   "On 22 February 1978, Istiqlal Mosque opened in Jakarta, Indonesia. It is the largest mosque in Southeast Asia, in the country with the most Muslims in the world."
  ],
  "lesson": [
   "الإسلام وصل إلى جزر بعيدة بالتجارة الأمينة والأخلاق الحسنة.",
   "Islam reached faraway islands through honest traders and good manners."
  ],
  "g": {
   "d": 22,
   "m": 2,
   "y": 1978
  },
  "ce": 1978,
  "hc": true
 },
 {
  "d": 12,
  "m": 4,
  "y": 857,
  "icon": "⛵",
  "sure": true,
  "t": [
   "السفن تسير على اليابسة",
   "Ships Sail Over Land"
  ],
  "s": [
   "في الثاني والعشرين من أبريل ١٤٥٣م نقل محمد الفاتح سفنه فوق اليابسة على ألواح خشبية مدهونة، وأنزلها في خليج القرن الذهبي، فدهش أهل القسطنطينية.",
   "On 22 April 1453, Muhammad al-Fatih moved his ships over land on greased wooden planks and launched them into the Golden Horn, amazing the people of Constantinople."
  ],
  "lesson": [
   "إذا أُغلق أمامك طريق، فكّر بإبداع في طريق آخر.",
   "When one road is blocked, think creatively to find another."
  ],
  "link": "corners/treasures/landmarks.html#istanbul",
  "g": {
   "d": 22,
   "m": 4,
   "y": 1453
  },
  "ce": 1453,
  "hc": true
 },
 {
  "d": 25,
  "m": 4,
  "y": 583,
  "icon": "🛡️",
  "sure": true,
  "t": [
   "معركة حطّين",
   "The Battle of Hattin"
  ],
  "s": [
   "في الرابع من يوليو ١١٨٧م انتصر صلاح الدين الأيوبي في معركة حطّين قرب طبرية، وفتح ذلك الطريق إلى تحرير القدس بعد ثلاثة أشهر.",
   "On 4 July 1187, Salah al-Din won the Battle of Hattin near Tiberias, opening the way to freeing Jerusalem three months later."
  ],
  "lesson": [
   "الوحدة بين المسلمين كانت سرّ هذا النصر.",
   "Unity among Muslims was the secret of this victory."
  ],
  "link": "corners/treasures/landmarks.html#aqsa",
  "g": {
   "d": 4,
   "m": 7,
   "y": 1187
  },
  "ce": 1187,
  "hc": true
 },
 {
  "d": 29,
  "m": 4,
  "y": 1385,
  "icon": "🕌",
  "sure": true,
  "t": [
   "افتتاح المسجد الوطني في ماليزيا",
   "Malaysia's National Mosque Opens"
  ],
  "s": [
   "في السابع والعشرين من أغسطس ١٩٦٥م افتُتح «المسجد الوطني» في كوالالمبور، وسقفه على شكل نجمة كبيرة تشبه مظلّة مفتوحة.",
   "On 27 August 1965, Masjid Negara (the National Mosque) opened in Kuala Lumpur. Its roof is shaped like a great star, like an open umbrella."
  ],
  "lesson": [
   "جمال المساجد يختلف من بلد لآخر، والقبلة واحدة.",
   "Mosques look different in every land, but the Qiblah is one."
  ],
  "g": {
   "d": 27,
   "m": 8,
   "y": 1965
  },
  "ce": 1965,
  "hc": true
 },
 {
  "d": 3,
  "m": 5,
  "y": 145,
  "icon": "⭕",
  "sure": true,
  "t": [
   "تأسيس بغداد",
   "Baghdad Is Founded"
  ],
  "s": [
   "في الثلاثين من يوليو ٧٦٢م وضع الخليفة أبو جعفر المنصور حجر الأساس لمدينة بغداد «المدينة المدوّرة»، التي صارت عاصمة العلم في العالم.",
   "On 30 July 762, Caliph Abu Ja'far al-Mansur laid the foundation of Baghdad, the \"Round City\", which became the world's capital of learning."
  ],
  "lesson": [
   "التخطيط الجيد أول خطوة لبناء أي شيء عظيم.",
   "Good planning is the first step to building anything great."
  ],
  "link": "corners/treasures/landmarks.html#baghdad",
  "g": {
   "d": 30,
   "m": 7,
   "y": 762
  },
  "ce": 762,
  "hc": true
 },
 {
  "d": 19,
  "m": 5,
  "y": 796,
  "icon": "🔭",
  "sure": true,
  "t": [
   "مولد أُلُغ بيك",
   "Ulugh Beg Is Born"
  ],
  "s": [
   "في الثاني والعشرين من مارس ١٣٩٤م وُلد أُلُغ بيك، الحاكم العالِم الذي بنى مرصدًا عظيمًا في سمرقند، وصنع جدولًا دقيقًا لأكثر من ألف نجم.",
   "On 22 March 1394, Ulugh Beg was born. This scholar-ruler built a great observatory in Samarkand and made an accurate table of more than a thousand stars."
  ],
  "lesson": [
   "يمكنك أن تكون قائدًا وعالمًا في الوقت نفسه.",
   "You can be a leader and a scientist at the same time."
  ],
  "g": {
   "d": 22,
   "m": 3,
   "y": 1394
  },
  "ce": 1394,
  "hc": true
 },
 {
  "d": 20,
  "m": 5,
  "y": 857,
  "icon": "🕌",
  "sure": true,
  "t": [
   "فتح القسطنطينية",
   "The Opening of Constantinople"
  ],
  "s": [
   "في التاسع والعشرين من مايو ١٤٥٣م فتح السلطان محمد الفاتح القسطنطينية، فصارت إسطنبول.",
   "On 29 May 1453, Sultan Muhammad al-Fatih opened Constantinople, which became Istanbul."
  ],
  "lesson": [
   "الصبر والتخطيط والثقة بالله تصنع المستحيل.",
   "Patience, planning and trust in Allah can achieve the impossible."
  ],
  "link": "corners/treasures/landmarks.html#istanbul",
  "g": {
   "d": 29,
   "m": 5,
   "y": 1453
  },
  "ce": 1453,
  "hc": true
 },
 {
  "d": 2,
  "m": 6,
  "y": 1350,
  "icon": "🚀",
  "sure": true,
  "t": [
   "مولد عبد الكلام",
   "A. P. J. Abdul Kalam Is Born"
  ],
  "s": [
   "في الخامس عشر من أكتوبر ١٩٣١م وُلد عبد الكلام في الهند لعائلة فقيرة، وكان يبيع الصحف صغيرًا، ثم صار عالم صواريخ ورئيسًا للهند، وكان يحب الأطفال كثيرًا.",
   "On 15 October 1931, Abdul Kalam was born in India to a poor family. He sold newspapers as a boy, became a rocket scientist and later President of India, and he loved children dearly."
  ],
  "lesson": [
   "الفقر لا يمنع النجاح إذا وُجد الاجتهاد.",
   "Being poor cannot stop success when there is hard work."
  ],
  "g": {
   "d": 15,
   "m": 10,
   "y": 1931
  },
  "ce": 1931,
  "hc": true
 },
 {
  "d": 15,
  "m": 6,
  "y": 505,
  "icon": "📘",
  "sure": true,
  "t": [
   "وفاة الإمام الغزالي",
   "Imam al-Ghazali Passes Away"
  ],
  "s": [
   "في التاسع عشر من ديسمبر ١١١١م (١٤ جمادى الآخرة ٥٠٥ هـ) توفي الإمام أبو حامد الغزالي في طوس، صاحب كتاب «إحياء علوم الدين» الذي علّم الناس إصلاح القلوب.",
   "On 19 December 1111 (14 Jumada al-Akhirah 505 AH), Imam Abu Hamid al-Ghazali passed away in Tus. His book \"The Revival of the Religious Sciences\" taught people how to purify their hearts."
  ],
  "lesson": [
   "نظافة القلب من الحسد والكِبر أهم من كل زينة.",
   "A heart clean of envy and pride matters more than any decoration."
  ],
  "g": {
   "d": 19,
   "m": 12,
   "y": 1111
  },
  "ce": 1111,
  "hc": true
 },
 {
  "d": 22,
  "m": 6,
  "y": 13,
  "icon": "🤝",
  "kind": "event",
  "sure": false,
  "t": [
   "من أبي بكر إلى عمر",
   "From Abu Bakr to Umar"
  ],
  "s": [
   "على الأرجح، في هذا اليوم سنة ١٣ هـ توفي الخليفة أبو بكر الصديق رضي الله عنه، وتولّى الخلافة بعده عمر بن الخطاب رضي الله عنه.",
   "According to the most common view, on this day in 13 AH the caliph Abu Bakr as-Siddiq passed away, and Umar ibn al-Khattab became caliph after him."
  ],
  "lesson": [
   "الصحابة تعاونوا على الخير، فكان كل واحد يكمل عمل أخيه.",
   "The Companions worked together, each one continuing the good work of the other."
  ],
  "ce": 634
 },
 {
  "d": 26,
  "m": 6,
  "y": 1442,
  "icon": "🚀",
  "sure": true,
  "t": [
   "«مسبار الأمل» يصل إلى المريخ",
   "The Hope Probe Reaches Mars"
  ],
  "s": [
   "في التاسع من فبراير ٢٠٢١م دخل «مسبار الأمل» الإماراتي مدار كوكب المريخ، ليكون أول مهمة عربية إلى كوكب آخر.",
   "On 9 February 2021, the UAE's Hope probe entered orbit around Mars, the first Arab mission to another planet."
  ],
  "lesson": [
   "قال الله: ﴿قُلِ انظُرُوا مَاذَا فِي السَّمَاوَاتِ﴾؛ التفكّر في الكون عبادة.",
   "Allah says, \"Look at what is in the heavens.\" Reflecting on the universe is worship."
  ],
  "g": {
   "d": 9,
   "m": 2,
   "y": 2021
  },
  "ce": 2021,
  "hc": true
 },
 {
  "d": 1,
  "m": 7,
  "icon": "🕋",
  "kind": "occasion",
  "sure": true,
  "t": [
   "شهر رجب: من الأشهر الحُرُم",
   "Rajab: One of the Sacred Months"
  ],
  "s": [
   "رجب أحد الأشهر الحُرُم الأربعة التي ذكرها الله في القرآن (سورة التوبة: ٣٦)، وهي: ذو القعدة وذو الحجة ومحرّم ورجب.",
   "Rajab is one of the four sacred months Allah mentions in the Quran (at-Tawbah 9:36): Dhul-Qa'dah, Dhul-Hijjah, Muharram and Rajab."
  ],
  "lesson": [
   "في الأشهر الحرم نحرص أكثر على ألّا نظلم أحدًا.",
   "In the sacred months we take extra care never to wrong anyone."
  ]
 },
 {
  "d": 2,
  "m": 7,
  "y": 1420,
  "icon": "🔬",
  "sure": true,
  "t": [
   "أحمد زويل ينال جائزة نوبل",
   "Ahmed Zewail Wins the Nobel Prize"
  ],
  "s": [
   "في الثاني عشر من أكتوبر ١٩٩٩م أُعلن فوز العالم المصري أحمد زويل بجائزة نوبل في الكيمياء، لأنه استطاع تصوير التفاعلات الكيميائية في أجزاء صغيرة جدًّا من الثانية.",
   "On 12 October 1999, Egyptian scientist Ahmed Zewail was announced as winner of the Nobel Prize in Chemistry, for filming chemical reactions in tiny fractions of a second."
  ],
  "lesson": [
   "الصبر في المختبر كالصبر في كل خير: ثمرته حلوة.",
   "Patience in the lab, like patience in any good work, bears sweet fruit."
  ],
  "g": {
   "d": 12,
   "m": 10,
   "y": 1999
  },
  "ce": 1999,
  "hc": true
 },
 {
  "d": 12,
  "m": 7,
  "y": 479,
  "icon": "🛡️",
  "sure": true,
  "t": [
   "معركة الزلّاقة",
   "The Battle of Zallaqa (Sagrajas)"
  ],
  "s": [
   "في الثالث والعشرين من أكتوبر ١٠٨٦م انتصر يوسف بن تاشفين مع أهل الأندلس في معركة الزلّاقة، فحفظ الله الأندلس قرونًا أخرى.",
   "On 23 October 1086, Yusuf ibn Tashfin and the people of al-Andalus won the Battle of Zallaqa, and Allah preserved al-Andalus for centuries more."
  ],
  "lesson": [
   "مساعدة الأخ لأخيه وقت الشدة من أعظم الأخوّة.",
   "Helping your brother in hard times is true brotherhood."
  ],
  "g": {
   "d": 23,
   "m": 10,
   "y": 1086
  },
  "ce": 1086,
  "hc": true
 },
 {
  "d": 17,
  "m": 7,
  "y": 703,
  "icon": "🧳",
  "sure": true,
  "t": [
   "مولد ابن بطوطة",
   "Ibn Battuta Is Born"
  ],
  "s": [
   "في الرابع والعشرين من فبراير ١٣٠٤م وُلد ابن بطوطة في طنجة بالمغرب، الرحّالة الذي جاب العالم الإسلامي من أفريقيا إلى الصين، وكتب رحلته في كتاب شهير.",
   "On 24 February 1304, Ibn Battuta was born in Tangier, Morocco. He travelled across the Muslim world from Africa to China and wrote about it in a famous book."
  ],
  "lesson": [
   "السفر يعلّمك أن تحترم الناس وتتعرّف على عجائب خلق الله.",
   "Travel teaches you to respect people and discover the wonders of Allah's creation."
  ],
  "g": {
   "d": 24,
   "m": 2,
   "y": 1304
  },
  "ce": 1304,
  "hc": true
 },
 {
  "d": 24,
  "m": 7,
  "y": 676,
  "icon": "📗",
  "kind": "event",
  "sure": true,
  "t": [
   "وفاة الإمام النووي",
   "Imam an-Nawawi Passes Away"
  ],
  "s": [
   "في الرابع والعشرين من رجب سنة ٦٧٦ هـ توفي الإمام النووي، صاحب «الأربعين النووية» و«رياض الصالحين»، وعمره نحو خمس وأربعين سنة فقط.",
   "On 24 Rajab 676 AH, Imam an-Nawawi passed away. He wrote \"The Forty Hadith\" and \"Riyad as-Salihin\", and he was only about forty-five years old."
  ],
  "lesson": [
   "العمر القصير المليء بالعلم النافع يبقى خيره قرونًا.",
   "A short life full of useful knowledge can keep giving for centuries."
  ],
  "ce": 1277
 },
 {
  "d": 27,
  "m": 7,
  "y": 835,
  "icon": "👑",
  "sure": true,
  "t": [
   "مولد محمد الفاتح",
   "Muhammad al-Fatih Is Born"
  ],
  "s": [
   "في الثلاثين من مارس ١٤٣٢م وُلد السلطان محمد الثاني في أدرنة، الذي فتح القسطنطينية وهو في الحادية والعشرين من عمره، وكان يتقن عدة لغات.",
   "On 30 March 1432, Sultan Mehmed II was born in Edirne. He opened Constantinople at just twenty-one and spoke several languages."
  ],
  "lesson": [
   "الأحلام الكبيرة تبدأ بالتعلّم منذ الصغر.",
   "Big dreams begin with learning from a young age."
  ],
  "link": "corners/treasures/landmarks.html#istanbul",
  "g": {
   "d": 30,
   "m": 3,
   "y": 1432
  },
  "ce": 1432,
  "hc": true
 },
 {
  "d": 27,
  "m": 7,
  "y": 583,
  "icon": "🕌",
  "sure": true,
  "t": [
   "صلاح الدين يحرّر القدس",
   "Salah al-Din Frees Jerusalem"
  ],
  "s": [
   "في الثاني من أكتوبر ١١٨٧م (٢٧ رجب ٥٨٣ هـ) دخل صلاح الدين القدس، فلم ينتقم من أحد، وعامل أهلها بالرحمة، وعاد الأذان إلى المسجد الأقصى.",
   "On 2 October 1187 (27 Rajab 583 AH), Salah al-Din entered Jerusalem. He took no revenge, treated its people with mercy, and the adhan returned to al-Masjid al-Aqsa."
  ],
  "lesson": [
   "الرحمة عند القوة هي أخلاق المسلم الحقيقي.",
   "Mercy when you are strong is true Muslim character."
  ],
  "link": "corners/treasures/landmarks.html#aqsa",
  "g": {
   "d": 2,
   "m": 10,
   "y": 1187
  },
  "ce": 1187,
  "hc": true
 },
 {
  "d": 1,
  "m": 8,
  "icon": "🌱",
  "kind": "occasion",
  "sure": true,
  "t": [
   "شهر شعبان",
   "The Month of Sha'ban"
  ],
  "s": [
   "قالت عائشة رضي الله عنها: ما رأيت النبي ﷺ أكثر صيامًا منه في شعبان (رواه البخاري ومسلم). إنه شهر الاستعداد لرمضان.",
   "Aishah (may Allah be pleased with her) said she never saw the Prophet ﷺ fast more in any month than in Sha'ban (Bukhari and Muslim). It is the month of getting ready for Ramadan."
  ],
  "lesson": [
   "تدرّب من الآن: صفحة قرآن إضافية كل يوم.",
   "Start training now: one extra page of Quran every day."
  ],
  "link": "corners/little-district/pages/ibada.html"
 },
 {
  "d": 4,
  "m": 8,
  "y": 1326,
  "icon": "🚂",
  "sure": true,
  "t": [
   "قطار الحجاز يصل المدينة",
   "The Hejaz Railway Reaches Madinah"
  ],
  "s": [
   "في الأول من سبتمبر ١٩٠٨م افتُتح خط سكة حديد الحجاز إلى المدينة المنورة، ليسهّل رحلة الحجاج التي كانت تستغرق أسابيع على الجِمال.",
   "On 1 September 1908, the Hejaz Railway to Madinah was officially opened, making the pilgrims' journey easier; it used to take weeks by camel."
  ],
  "lesson": [
   "خدمة ضيوف الرحمن شرف عظيم.",
   "Serving the guests of Allah is a great honour."
  ],
  "link": "corners/treasures/landmarks.html#nabawi",
  "g": {
   "d": 1,
   "m": 9,
   "y": 1908
  },
  "ce": 1908,
  "hc": true
 },
 {
  "d": 15,
  "m": 8,
  "y": 2,
  "icon": "🧭",
  "kind": "event",
  "sure": false,
  "t": [
   "تحويل القبلة إلى الكعبة",
   "The Qiblah Turns to the Ka'bah"
  ],
  "s": [
   "بعد ستة عشر أو سبعة عشر شهرًا من الهجرة أمر الله المسلمين أن يتوجهوا في صلاتهم إلى الكعبة بدل بيت المقدس. ومنتصف شعبان سنة ٢ هـ أحد القولين المشهورين (وقيل في رجب).",
   "Sixteen or seventeen months after the Hijrah, Allah commanded the Muslims to face the Ka'bah in prayer instead of Jerusalem. Mid-Sha'ban 2 AH is one of the two well-known views (others say Rajab)."
  ],
  "lesson": [
   "المسلمون في كل الأرض يتّجهون إلى قبلة واحدة؛ نحن أمة واحدة.",
   "Muslims all over the world face one Qiblah: we are one Ummah."
  ],
  "link": "corners/treasures/landmarks.html#kaaba",
  "ce": 624
 },
 {
  "d": 1,
  "m": 9,
  "icon": "🌙",
  "kind": "occasion",
  "sure": true,
  "t": [
   "أول أيام رمضان",
   "The First Day of Ramadan"
  ],
  "s": [
   "يبدأ اليوم شهر رمضان، شهر الصيام والقرآن، الذي قال الله فيه: ﴿شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ﴾.",
   "Today Ramadan begins, the month of fasting and Quran, about which Allah says: \"The month of Ramadan in which the Quran was revealed.\""
  ],
  "lesson": [
   "اجعل لك هدفًا صغيرًا في رمضان وحاول أن تحققه.",
   "Set yourself one small Ramadan goal and work to reach it."
  ],
  "link": "corners/little-district/pages/ibada.html"
 },
 {
  "d": 1,
  "m": 9,
  "y": 732,
  "icon": "📖",
  "sure": true,
  "t": [
   "مولد ابن خلدون",
   "Ibn Khaldun Is Born"
  ],
  "s": [
   "في السابع والعشرين من مايو ١٣٣٢م وُلد ابن خلدون في تونس، وقد حفظ القرآن صغيرًا، ثم صار من أعظم المؤرخين في العالم.",
   "On 27 May 1332, Ibn Khaldun was born in Tunis. He memorised the Quran as a boy and grew up to be one of the greatest historians in the world."
  ],
  "lesson": [
   "حفظ القرآن صغيرًا أساس متين لكل علم.",
   "Learning the Quran young is a strong foundation for all knowledge."
  ],
  "g": {
   "d": 27,
   "m": 5,
   "y": 1332
  },
  "ce": 1332,
  "hc": true
 },
 {
  "d": 1,
  "m": 9,
  "y": 328,
  "icon": "📐",
  "sure": true,
  "t": [
   "مولد أبي الوفاء البوزجاني",
   "Abu al-Wafa' al-Buzjani Is Born"
  ],
  "s": [
   "في العاشر من يونيو ٩٤٠م وُلد أبو الوفاء البوزجاني، عالم الرياضيات والفلك الذي طوّر علم المثلثات، وعمل في بغداد.",
   "On 10 June 940, Abu al-Wafa' al-Buzjani was born. This mathematician and astronomer developed trigonometry and worked in Baghdad."
  ],
  "lesson": [
   "الرياضيات لغة نفهم بها نظام الكون الذي خلقه الله.",
   "Maths is a language that helps us understand the order of Allah's universe."
  ],
  "g": {
   "d": 10,
   "m": 6,
   "y": 940
  },
  "ce": 940,
  "hc": true
 },
 {
  "d": 7,
  "m": 9,
  "y": 361,
  "icon": "🕌",
  "sure": true,
  "t": [
   "أول صلاة في الجامع الأزهر",
   "The First Prayer at al-Azhar"
  ],
  "s": [
   "في الثاني والعشرين من يونيو ٩٧٢م (رمضان ٣٦١ هـ) أُقيمت أول صلاة جمعة في الجامع الأزهر بالقاهرة، الذي صار من أقدم الجامعات في العالم.",
   "On 22 June 972 (Ramadan 361 AH), the first Friday prayer was held at al-Azhar Mosque in Cairo, which became one of the oldest universities in the world."
  ],
  "lesson": [
   "المسجد في الإسلام بيت للعبادة والعلم معًا.",
   "In Islam, the mosque is a home for both worship and learning."
  ],
  "link": "corners/treasures/landmarks.html#azhar",
  "g": {
   "d": 22,
   "m": 6,
   "y": 972
  },
  "ce": 972,
  "hc": true
 },
 {
  "d": 15,
  "m": 9,
  "y": 3,
  "icon": "👶",
  "kind": "event",
  "sure": false,
  "t": [
   "مولد الحسن بن علي",
   "The Birth of al-Hasan ibn Ali"
  ],
  "s": [
   "على الأرجح، في منتصف رمضان سنة ٣ هـ وُلد الحسن بن علي، حفيد النبي ﷺ، وكان النبي ﷺ يحبه كثيرًا ويقول عنه: «إن ابني هذا سيد».",
   "According to the most common view, in mid-Ramadan 3 AH al-Hasan ibn Ali, the Prophet's ﷺ grandson, was born. The Prophet ﷺ loved him dearly and said, \"This son of mine is a leader.\""
  ],
  "lesson": [
   "الحسن صار صانع سلام بين المسلمين؛ الصلح من أعظم الأعمال.",
   "Al-Hasan grew up to make peace between Muslims: peacemaking is a great deed."
  ],
  "ce": 625
 },
 {
  "d": 17,
  "m": 9,
  "y": 2,
  "icon": "⚔️",
  "kind": "event",
  "sure": true,
  "t": [
   "غزوة بدر الكبرى",
   "The Battle of Badr"
  ],
  "s": [
   "في السابع عشر من رمضان سنة ٢ هـ نصر الله المسلمين في بدر وهم قلّة، نحو ثلاثمئة وثلاثة عشر رجلًا، وسمّى الله ذلك اليوم «يوم الفرقان».",
   "On 17 Ramadan 2 AH, Allah gave the Muslims victory at Badr even though they were few, about 313 men. Allah called that day \"the Day of the Criterion.\""
  ],
  "lesson": [
   "النصر من عند الله، وليس بكثرة العدد.",
   "Victory comes from Allah, not from big numbers."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=badr",
  "ce": 624
 },
 {
  "d": 20,
  "m": 9,
  "y": 8,
  "icon": "🕋",
  "kind": "event",
  "sure": false,
  "t": [
   "فتح مكة",
   "The Conquest of Makkah"
  ],
  "s": [
   "في رمضان سنة ٨ هـ دخل النبي ﷺ مكة فاتحًا بلا قتال يُذكر، وعفا عن أهلها عفوًا عظيمًا. والعشرون من رمضان هو أشهر الأقوال.",
   "In Ramadan 8 AH the Prophet ﷺ entered Makkah almost without fighting and forgave its people with great generosity. The 20th of Ramadan is the most common view of the date."
  ],
  "lesson": [
   "أجمل القوة أن تعفو وأنت قادر.",
   "The most beautiful strength is to forgive when you could do otherwise."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=fath",
  "ce": 630
 },
 {
  "d": 21,
  "m": 9,
  "icon": "📖",
  "kind": "event",
  "sure": false,
  "t": [
   "بدء نزول الوحي",
   "The First Revelation"
  ],
  "s": [
   "في رمضان نزل جبريل عليه السلام على النبي ﷺ في غار حراء بأول آيات القرآن: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ﴾. واليوم مختلف فيه، ومن أشهر الأقوال الحادي والعشرون (وقيل السابع عشر).",
   "In Ramadan, Jibril (peace be upon him) came to the Prophet ﷺ in the Cave of Hira with the first verses of the Quran: \"Read in the name of your Lord who created.\" The day is disputed; the 21st is among the best-known views (others say the 17th)."
  ],
  "lesson": [
   "أول كلمة نزلت: «اقرأ»؛ فالعلم يبدأ بالقراءة.",
   "The first word revealed was \"Read!\" Learning begins with reading."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=revelation",
  "ce": 610,
  "pre": [
   "قبل الهجرة بـ١٣ سنة",
   "13 years before the Hijrah"
  ]
 },
 {
  "d": 21,
  "m": 9,
  "icon": "⭐",
  "kind": "occasion",
  "sure": true,
  "t": [
   "العشر الأواخر وليلة القدر",
   "The Last Ten Nights and Laylat al-Qadr"
  ],
  "s": [
   "بدأت العشر الأواخر من رمضان، وكان النبي ﷺ يجتهد فيها ويعتكف، وقال: «تحرّوا ليلة القدر في الوتر من العشر الأواخر» (رواه البخاري). وهي خير من ألف شهر.",
   "The last ten nights of Ramadan begin. The Prophet ﷺ worked hardest in them and stayed in the mosque for worship, and said: \"Seek Laylat al-Qadr in the odd nights of the last ten\" (Bukhari). It is better than a thousand months."
  ],
  "lesson": [
   "ادعُ الليلة بدعاء: «اللهم إنك عفوّ تحب العفو فاعفُ عني».",
   "Tonight, say the du'a: \"O Allah, You are Pardoning and love to pardon, so pardon me.\""
  ],
  "link": "corners/little-district/pages/ibada.html"
 },
 {
  "d": 25,
  "m": 9,
  "y": 658,
  "icon": "⚔️",
  "sure": true,
  "t": [
   "معركة عين جالوت",
   "The Battle of Ain Jalut"
  ],
  "s": [
   "في الثالث من سبتمبر ١٢٦٠م (٢٥ رمضان ٦٥٨ هـ) انتصر المسلمون بقيادة قطز وبيبرس على المغول في عين جالوت بفلسطين، فأوقفوا زحفهم.",
   "On 3 September 1260 (25 Ramadan 658 AH), the Muslims led by Qutuz and Baybars defeated the Mongols at Ain Jalut in Palestine and stopped their advance."
  ],
  "lesson": [
   "صاح قطز: «وا إسلاماه!»؛ التوكل على الله يعيد الأمل.",
   "Qutuz cried out, \"O Islam!\" Trusting Allah brings hope back."
  ],
  "g": {
   "d": 3,
   "m": 9,
   "y": 1260
  },
  "ce": 1260,
  "hc": true
 },
 {
  "d": 26,
  "m": 9,
  "y": 808,
  "icon": "📜",
  "sure": true,
  "t": [
   "وفاة ابن خلدون",
   "Ibn Khaldun Passes Away"
  ],
  "s": [
   "في السابع عشر من مارس ١٤٠٦م توفي ابن خلدون في القاهرة، صاحب «المقدمة»، الذي يُعدّ من مؤسسي علم الاجتماع وعلم التاريخ الحديث.",
   "On 17 March 1406, Ibn Khaldun passed away in Cairo. His book \"The Muqaddimah\" makes him one of the founders of sociology and the modern study of history."
  ],
  "lesson": [
   "اسأل دائمًا: لماذا حدث هذا؟ فالسؤال بداية الفهم.",
   "Always ask, \"Why did this happen?\" Questions are the start of understanding."
  ],
  "g": {
   "d": 17,
   "m": 3,
   "y": 1406
  },
  "ce": 1406,
  "hc": true
 },
 {
  "d": 28,
  "m": 9,
  "y": 1405,
  "icon": "🛰️",
  "sure": true,
  "t": [
   "أول عربي مسلم في الفضاء",
   "The First Arab Muslim in Space"
  ],
  "s": [
   "في السابع عشر من يونيو ١٩٨٥م انطلق الأمير السعودي سلطان بن سلمان على متن مكوك الفضاء «ديسكفري»، ليكون أول عربي ومسلم يصعد إلى الفضاء.",
   "On 17 June 1985, Saudi Prince Sultan bin Salman flew on the Space Shuttle Discovery, becoming the first Arab and first Muslim in space."
  ],
  "lesson": [
   "من الفضاء تبدو الأرض بيتًا واحدًا لكل الناس.",
   "From space, Earth looks like one home for all people."
  ],
  "g": {
   "d": 17,
   "m": 6,
   "y": 1985
  },
  "ce": 1985,
  "hc": true
 },
 {
  "d": 30,
  "m": 9,
  "y": 384,
  "icon": "✒️",
  "sure": true,
  "t": [
   "مولد ابن حزم الأندلسي",
   "Ibn Hazm of al-Andalus Is Born"
  ],
  "s": [
   "في السابع من نوفمبر ٩٩٤م وُلد ابن حزم في قرطبة، العالم الذي ألّف مئات الكتب في الفقه والتاريخ والأخلاق.",
   "On 7 November 994, Ibn Hazm was born in Cordoba. This scholar wrote hundreds of books on law, history and good character."
  ],
  "lesson": [
   "اكتب ما تتعلمه؛ فالكتابة تحفظ العلم.",
   "Write down what you learn: writing preserves knowledge."
  ],
  "link": "corners/treasures/landmarks.html#cordoba",
  "g": {
   "d": 7,
   "m": 11,
   "y": 994
  },
  "ce": 994,
  "hc": true
 },
 {
  "d": 1,
  "m": 10,
  "icon": "🎉",
  "kind": "occasion",
  "sure": true,
  "t": [
   "عيد الفطر المبارك",
   "Eid al-Fitr"
  ],
  "s": [
   "اليوم عيد الفطر، يفرح فيه المسلمون بإتمام صيام رمضان، فيصلّون صلاة العيد ويكبّرون، ويُخرجون زكاة الفطر قبلها ليفرح الفقراء أيضًا.",
   "Today is Eid al-Fitr. Muslims celebrate completing the Ramadan fast, pray the Eid prayer, say takbir, and give Zakat al-Fitr beforehand so that the poor can celebrate too."
  ],
  "lesson": [
   "فرحة العيد أجمل حين نشاركها مع الآخرين.",
   "Eid joy is sweeter when we share it with others."
  ],
  "link": "corners/treasures/eids.html"
 },
 {
  "d": 2,
  "m": 10,
  "icon": "6️⃣",
  "kind": "occasion",
  "sure": true,
  "t": [
   "ستّ من شوّال",
   "Six Days of Shawwal"
  ],
  "s": [
   "قال النبي ﷺ: «من صام رمضان ثم أتبعه ستًّا من شوال كان كصيام الدهر» (رواه مسلم). ويمكن صيامها في أي أيام من شوّال بعد العيد.",
   "The Prophet ﷺ said: \"Whoever fasts Ramadan and follows it with six days of Shawwal, it is as if he fasted all year\" (Muslim). They can be any days of Shawwal after Eid."
  ],
  "lesson": [
   "الخير لا ينتهي بانتهاء رمضان.",
   "Doing good does not stop when Ramadan ends."
  ],
  "link": "corners/little-district/pages/ibada.html"
 },
 {
  "d": 7,
  "m": 10,
  "y": 1444,
  "icon": "👨‍🚀",
  "sure": true,
  "t": [
   "أول سير عربي في الفضاء",
   "The First Arab Spacewalk"
  ],
  "s": [
   "في الثامن والعشرين من أبريل ٢٠٢٣م خرج رائد الفضاء الإماراتي سلطان النيادي من محطة الفضاء الدولية، ليكون أول عربي يسير في الفضاء.",
   "On 28 April 2023, Emirati astronaut Sultan al-Neyadi stepped outside the International Space Station, becoming the first Arab to walk in space."
  ],
  "lesson": [
   "اطلب العلم واحلم عاليًا، فالسماء ليست حدًّا.",
   "Seek knowledge and dream high: even the sky is not the limit."
  ],
  "g": {
   "d": 28,
   "m": 4,
   "y": 2023
  },
  "ce": 2023,
  "hc": true
 },
 {
  "d": 13,
  "m": 10,
  "y": 194,
  "icon": "📚",
  "kind": "event",
  "sure": true,
  "t": [
   "مولد الإمام البخاري",
   "The Birth of Imam al-Bukhari"
  ],
  "s": [
   "في الثالث عشر من شوّال سنة ١٩٤ هـ وُلد الإمام محمد بن إسماعيل البخاري في مدينة بخارى، وهو الذي جمع «صحيح البخاري»، أصحّ كتاب بعد القرآن الكريم.",
   "On 13 Shawwal 194 AH, Imam Muhammad ibn Isma'il al-Bukhari was born in Bukhara. He compiled \"Sahih al-Bukhari\", the most authentic book after the Quran."
  ],
  "lesson": [
   "بدأ البخاري حفظ الحديث وهو صغير؛ وأنت أيضًا تستطيع أن تبدأ الآن.",
   "Al-Bukhari began memorising hadith as a child, and you can start now too."
  ],
  "ce": 810
 },
 {
  "d": 15,
  "m": 10,
  "y": 3,
  "icon": "⛰️",
  "kind": "event",
  "sure": false,
  "t": [
   "غزوة أُحد",
   "The Battle of Uhud"
  ],
  "s": [
   "في شوّال سنة ٣ هـ كانت غزوة أحد عند جبل أحد قرب المدينة، وتعلّم المسلمون فيها درسًا عظيمًا في طاعة أمر النبي ﷺ. والخامس عشر هو أشهر الأقوال.",
   "In Shawwal 3 AH the Battle of Uhud took place by Mount Uhud near Madinah, and the Muslims learned a great lesson about obeying the Prophet's ﷺ instructions. The 15th is the most common view of the day."
  ],
  "lesson": [
   "قال النبي ﷺ عن أحد: «جبل يحبنا ونحبه».",
   "The Prophet ﷺ said of Uhud: \"A mountain that loves us and we love it.\""
  ],
  "link": "corners/heroes-fortress/chapter.html?id=uhud",
  "ce": 625
 },
 {
  "d": 22,
  "m": 10,
  "y": 1347,
  "icon": "🏙️",
  "sure": true,
  "t": [
   "مولد المهندس فضل الرحمن خان",
   "Engineer Fazlur Rahman Khan Is Born"
  ],
  "s": [
   "في الثالث من أبريل ١٩٢٩م وُلد فضل الرحمن خان في بنغلاديش، المهندس الذي صمّم ناطحات سحاب شهيرة، وصمّم سقف «صالة الحجاج» الذي يشبه الخيام في مطار جدة.",
   "On 3 April 1929, Fazlur Rahman Khan was born in Bangladesh. This engineer designed famous skyscrapers and the tent-like roof of the Hajj Terminal at Jeddah airport."
  ],
  "lesson": [
   "الإتقان عبادة: «إن الله يحب إذا عمل أحدكم عملًا أن يتقنه».",
   "Doing excellent work is worship: \"Allah loves that when one of you does a job, he does it well.\""
  ],
  "g": {
   "d": 3,
   "m": 4,
   "y": 1929
  },
  "ce": 1929,
  "hc": true
 },
 {
  "d": 1,
  "m": 11,
  "y": 6,
  "icon": "🕊️",
  "kind": "event",
  "sure": false,
  "t": [
   "الخروج إلى الحديبية",
   "Setting Out to al-Hudaybiyah"
  ],
  "s": [
   "في ذي القعدة سنة ٦ هـ خرج النبي ﷺ مع نحو ألف وأربعمئة من أصحابه يريدون العمرة، فكان صلح الحديبية الذي سمّاه الله «فتحًا مبينًا». وأول الشهر هو أشهر الأقوال في يوم الخروج.",
   "In Dhul-Qa'dah 6 AH the Prophet ﷺ set out with about 1,400 Companions to perform Umrah, which led to the Treaty of al-Hudaybiyah that Allah called \"a clear victory.\" The 1st of the month is the most common view of the departure day."
  ],
  "lesson": [
   "أحيانًا يكون الصلح والصبر هو الفوز الحقيقي.",
   "Sometimes peace and patience are the real win."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=hudaybiyah",
  "ce": 628
 },
 {
  "d": 1,
  "m": 11,
  "y": 1444,
  "icon": "👩‍🚀",
  "sure": true,
  "t": [
   "ريانة برناوي في الفضاء",
   "Rayyanah Barnawi Goes to Space"
  ],
  "s": [
   "في الحادي والعشرين من مايو ٢٠٢٣م انطلقت العالمة السعودية ريانة برناوي إلى محطة الفضاء الدولية، لتكون أول امرأة سعودية وعربية مسلمة تصعد إلى الفضاء، وأجرت هناك تجارب علمية.",
   "On 21 May 2023, Saudi scientist Rayyanah Barnawi launched to the International Space Station, becoming the first Saudi and Arab Muslim woman in space, where she carried out scientific experiments."
  ],
  "lesson": [
   "طلب العلم فريضة على كل مسلم ومسلمة.",
   "Seeking knowledge is a duty for every Muslim, boy or girl."
  ],
  "g": {
   "d": 21,
   "m": 5,
   "y": 2023
  },
  "ce": 2023,
  "hc": true
 },
 {
  "d": 3,
  "m": 11,
  "y": 1294,
  "icon": "🖋️",
  "sure": true,
  "t": [
   "مولد الشاعر محمد إقبال",
   "The Poet Muhammad Iqbal Is Born"
  ],
  "s": [
   "في التاسع من نوفمبر ١٨٧٧م وُلد محمد إقبال في سيالكوت، الشاعر الذي كتب للأطفال دعاءً شعريًّا شهيرًا يردده تلاميذ المدارس: «لب پہ آتی ہے دعا».",
   "On 9 November 1877, Muhammad Iqbal was born in Sialkot. This poet wrote a famous prayer-poem for children that schoolchildren still recite: \"Lab pe aati hai dua.\""
  ],
  "lesson": [
   "ادعُ الله أن يجعلك نورًا ونفعًا لمن حولك.",
   "Ask Allah to make you a light and a help to those around you."
  ],
  "g": {
   "d": 9,
   "m": 11,
   "y": 1877
  },
  "ce": 1877,
  "hc": true
 },
 {
  "d": 21,
  "m": 11,
  "y": 687,
  "icon": "🫀",
  "sure": true,
  "t": [
   "وفاة الطبيب ابن النفيس",
   "The Physician Ibn al-Nafis Passes Away"
  ],
  "s": [
   "في السابع عشر من ديسمبر ١٢٨٨م توفي ابن النفيس في القاهرة، الطبيب الذي كان أول من وصف الدورة الدموية الصغرى بين القلب والرئتين، وأوقف بيته وكتبه على مستشفى.",
   "On 17 December 1288, Ibn al-Nafis passed away in Cairo. This physician was the first to describe how blood travels between the heart and the lungs, and he left his house and books to a hospital."
  ],
  "lesson": [
   "العلم الذي ينفع الناس صدقة جارية.",
   "Knowledge that helps people is a charity that keeps on giving."
  ],
  "g": {
   "d": 17,
   "m": 12,
   "y": 1288
  },
  "ce": 1288,
  "hc": true
 },
 {
  "d": 25,
  "m": 11,
  "y": 10,
  "icon": "🐪",
  "kind": "event",
  "sure": false,
  "t": [
   "الخروج إلى حجة الوداع",
   "Setting Out for the Farewell Hajj"
  ],
  "s": [
   "قالت عائشة رضي الله عنها: خرجنا مع رسول الله ﷺ لخمس بقين من ذي القعدة (رواه البخاري ومسلم)؛ أي نحو الخامس والعشرين منه سنة ١٠ هـ، فكانت حجّته الوحيدة.",
   "Aishah (may Allah be pleased with her) said: \"We set out with the Messenger of Allah ﷺ with five days left of Dhul-Qa'dah\" (Bukhari and Muslim), around the 25th, in 10 AH. It was his only Hajj."
  ],
  "lesson": [
   "قال النبي ﷺ: «خذوا عني مناسككم»؛ نتعلم ديننا من سنّته.",
   "The Prophet ﷺ said, \"Learn your rites from me.\" We learn our religion from his Sunnah."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=farewell",
  "ce": 632
 },
 {
  "d": 25,
  "m": 11,
  "y": 1407,
  "icon": "🚀",
  "sure": true,
  "t": [
   "محمد فارس في الفضاء",
   "Muhammed Faris Goes to Space"
  ],
  "s": [
   "في الثاني والعشرين من يوليو ١٩٨٧م انطلق رائد الفضاء السوري محمد فارس إلى محطة الفضاء «مير»، ليكون أول سوري يصعد إلى الفضاء.",
   "On 22 July 1987, Syrian cosmonaut Muhammed Faris launched to the Mir space station, becoming the first Syrian in space."
  ],
  "lesson": [
   "الاجتهاد والصبر في الدراسة يفتحان أبوابًا لا تتخيلها.",
   "Hard work and patience in your studies open doors you can't imagine."
  ],
  "g": {
   "d": 22,
   "m": 7,
   "y": 1987
  },
  "ce": 1987,
  "hc": true
 },
 {
  "d": 27,
  "m": 11,
  "y": 463,
  "icon": "🤝",
  "sure": true,
  "t": [
   "معركة ملاذكرد",
   "The Battle of Manzikert"
  ],
  "s": [
   "في السادس والعشرين من أغسطس ١٠٧١م انتصر السلطان ألب أرسلان في ملاذكرد، وأسر إمبراطور الروم، ثم أكرمه وأطلق سراحه.",
   "On 26 August 1071, Sultan Alp Arslan won at Manzikert and captured the Byzantine emperor, then treated him kindly and set him free."
  ],
  "lesson": [
   "الكريم يعامل حتى خصمه بالإحسان.",
   "A noble person treats even an opponent with kindness."
  ],
  "g": {
   "d": 26,
   "m": 8,
   "y": 1071
  },
  "ce": 1071,
  "hc": true
 },
 {
  "d": 30,
  "m": 11,
  "y": 1376,
  "icon": "🕌",
  "sure": true,
  "t": [
   "افتتاح المركز الإسلامي في واشنطن",
   "The Islamic Center of Washington Opens"
  ],
  "s": [
   "في الثامن والعشرين من يونيو ١٩٥٧م افتُتح المركز الإسلامي في العاصمة الأمريكية واشنطن، وكان من أوائل المساجد الكبيرة في أمريكا.",
   "On 28 June 1957, the Islamic Center of Washington was dedicated in the US capital. It was one of the first large mosques in America."
  ],
  "lesson": [
   "المسلمون في كل بلد سفراء لدينهم بأخلاقهم.",
   "Muslims in every country represent their faith through their character."
  ],
  "g": {
   "d": 28,
   "m": 6,
   "y": 1957
  },
  "ce": 1957,
  "hc": true
 },
 {
  "d": 1,
  "m": 12,
  "icon": "🌟",
  "kind": "occasion",
  "sure": true,
  "t": [
   "العشر الأوائل من ذي الحجة",
   "The First Ten Days of Dhul-Hijjah"
  ],
  "s": [
   "بدأت أفضل أيام السنة؛ قال النبي ﷺ إن العمل الصالح فيها أحب إلى الله من غيرها (رواه البخاري). فأكثِر فيها من التكبير والتهليل والتحميد.",
   "The best days of the year begin. The Prophet ﷺ said that good deeds in these days are more beloved to Allah than at any other time (Bukhari). Say lots of takbir, tahlil and tahmid."
  ],
  "lesson": [
   "قل اليوم: «الله أكبر، الله أكبر، لا إله إلا الله».",
   "Say today: \"Allahu akbar, Allahu akbar, la ilaha illallah.\""
  ],
  "link": "corners/little-district/pages/ibada.html"
 },
 {
  "d": 2,
  "m": 12,
  "y": 316,
  "icon": "🏛️",
  "sure": true,
  "t": [
   "قرطبة عاصمة الخلافة",
   "Cordoba Becomes a Caliphate's Capital"
  ],
  "s": [
   "في السادس عشر من يناير ٩٢٩م أعلن عبد الرحمن الناصر الخلافة في قرطبة، فصارت من أعظم مدن العالم بمكتباتها وشوارعها المضاءة ومسجدها الكبير.",
   "On 16 January 929, Abd al-Rahman III declared the caliphate in Cordoba, which became one of the greatest cities in the world, with its libraries, lit streets and great mosque."
  ],
  "lesson": [
   "المدن تعظُم بالعلم والنظام والنظافة.",
   "Cities become great through knowledge, order and cleanliness."
  ],
  "link": "corners/treasures/landmarks.html#cordoba",
  "g": {
   "d": 16,
   "m": 1,
   "y": 929
  },
  "ce": 929,
  "hc": true
 },
 {
  "d": 4,
  "m": 12,
  "y": 10,
  "icon": "🕋",
  "kind": "event",
  "sure": true,
  "t": [
   "النبي ﷺ يصل مكة حاجًّا",
   "The Prophet ﷺ Arrives in Makkah for Hajj"
  ],
  "s": [
   "في صباح الرابع من ذي الحجة سنة ١٠ هـ قدم النبي ﷺ وأصحابه مكة لأداء حجة الوداع، كما في صحيح البخاري.",
   "On the morning of 4 Dhul-Hijjah 10 AH, the Prophet ﷺ and his Companions reached Makkah to perform the Farewell Hajj, as reported in Sahih al-Bukhari."
  ],
  "lesson": [
   "الكعبة قبلتنا، ونرجو أن نزورها يومًا.",
   "The Ka'bah is our Qiblah; we hope to visit it one day."
  ],
  "link": "corners/treasures/landmarks.html#kaaba",
  "ce": 632
 },
 {
  "d": 8,
  "m": 12,
  "icon": "⛺",
  "kind": "occasion",
  "sure": true,
  "t": [
   "يوم التروية",
   "The Day of Tarwiyah"
  ],
  "s": [
   "في اليوم الثامن من ذي الحجة يتوجّه الحجاج إلى منى ويبيتون فيها، كما فعل النبي ﷺ في حجته.",
   "On the 8th of Dhul-Hijjah, pilgrims go to Mina and spend the night there, just as the Prophet ﷺ did in his Hajj."
  ],
  "lesson": [
   "الحج رحلة يتساوى فيها الجميع، غنيّهم وفقيرهم.",
   "Hajj is a journey where everyone is equal, rich and poor alike."
  ]
 },
 {
  "d": 9,
  "m": 12,
  "icon": "⛰️",
  "kind": "occasion",
  "sure": true,
  "t": [
   "يوم عرفة",
   "The Day of Arafah"
  ],
  "s": [
   "اليوم يقف الحجاج على صعيد عرفات يدعون الله. ويُستحب لغير الحاج صيامه، وقال النبي ﷺ إنه يكفّر السنة الماضية والباقية (رواه مسلم).",
   "Today pilgrims stand on the plain of Arafat calling on Allah. For those not on Hajj it is recommended to fast; the Prophet ﷺ said it wipes away the sins of the past year and the coming year (Muslim)."
  ],
  "lesson": [
   "قال النبي ﷺ: «خير الدعاء دعاء يوم عرفة»؛ فادعُ لنفسك ولوالديك.",
   "The Prophet ﷺ said, \"The best du'a is the du'a of the Day of Arafah.\" Make du'a for yourself and your parents."
  ],
  "link": "corners/treasures/landmarks.html#arafat"
 },
 {
  "d": 9,
  "m": 12,
  "y": 10,
  "icon": "📜",
  "kind": "event",
  "sure": true,
  "t": [
   "خطبة الوداع",
   "The Farewell Sermon"
  ],
  "s": [
   "في يوم عرفة سنة ١٠ هـ، وكان يوم جمعة، خطب النبي ﷺ خطبة الوداع، ونزل قول الله تعالى: ﴿الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ﴾ (رواه البخاري ومسلم).",
   "On the Day of Arafah in 10 AH, which was a Friday, the Prophet ﷺ gave the Farewell Sermon, and Allah revealed: \"Today I have perfected your religion for you\" (Bukhari and Muslim)."
  ],
  "lesson": [
   "أوصى النبي ﷺ بالرحمة وحفظ الحقوق: لا تظلم أحدًا.",
   "The Prophet ﷺ urged mercy and respect for everyone's rights: never wrong anyone."
  ],
  "link": "corners/heroes-fortress/chapter.html?id=farewell",
  "ce": 632
 },
 {
  "d": 10,
  "m": 12,
  "icon": "🐑",
  "kind": "occasion",
  "sure": true,
  "t": [
   "عيد الأضحى المبارك",
   "Eid al-Adha"
  ],
  "s": [
   "اليوم عيد الأضحى، نتذكّر فيه طاعة إبراهيم وإسماعيل عليهما السلام، ونصلّي العيد ونضحّي ونتقاسم اللحم مع الأهل والجيران والفقراء.",
   "Today is Eid al-Adha. We remember the obedience of Ibrahim and Isma'il (peace be upon them), pray the Eid prayer, offer the sacrifice and share the meat with family, neighbours and the poor."
  ],
  "lesson": [
   "الطاعة لله ومشاركة الخير هما روح هذا العيد.",
   "Obeying Allah and sharing what we have are the heart of this Eid."
  ],
  "link": "corners/treasures/eids.html"
 },
 {
  "d": 11,
  "m": 12,
  "icon": "🍽️",
  "kind": "occasion",
  "sure": true,
  "t": [
   "أيام التشريق",
   "The Days of Tashriq"
  ],
  "s": [
   "الحادي عشر والثاني عشر والثالث عشر من ذي الحجة أيام التشريق، قال عنها النبي ﷺ: «أيام أكل وشرب وذكر لله» (رواه مسلم).",
   "The 11th, 12th and 13th of Dhul-Hijjah are the Days of Tashriq. The Prophet ﷺ said: \"They are days of eating, drinking and remembering Allah\" (Muslim)."
  ],
  "lesson": [
   "استمتع بالعيد ولا تنسَ ذكر الله والتكبير.",
   "Enjoy Eid, and keep remembering Allah with takbir."
  ],
  "link": "corners/treasures/eids.html"
 }
],
 G: [
 {
  "gd": 21,
  "gm": 2,
  "icon": "🗣️",
  "kind": "day",
  "t": [
   "اليوم الدولي للغة الأم",
   "International Mother Language Day"
  ],
  "s": [
   "يحتفل العالم اليوم باللغات التي يتكلّمها الناس. وقد جعل الله اختلاف لغاتنا آيةً من آياته: ﴿وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ﴾ [الروم: ٢٢].",
   "Today the world celebrates the languages people speak. Allah made the variety of our languages one of His signs: \"And among His signs is the creation of the heavens and the earth and the diversity of your languages and your colours\" [ar-Rum 30:22]."
  ],
  "lesson": [
   "تعلّم اليوم كلمة «شكرًا» بلغةٍ جديدة، وقلها لمن يساعدك.",
   "Learn to say \"thank you\" in a new language today, and say it to someone who helps you."
  ]
 },
 {
  "gd": 3,
  "gm": 3,
  "icon": "🐾",
  "kind": "day",
  "t": [
   "اليوم العالمي للحياة البرية",
   "World Wildlife Day"
  ],
  "s": [
   "أخبرنا النبي ﷺ عن رجلٍ سقى كلبًا عطشانًا فشكر الله له وغفر له، وقال: «في كلِّ كبدٍ رطبةٍ أجر» (رواه البخاري ومسلم). فالرحمة بالحيوان عبادة.",
   "The Prophet ﷺ told us of a man who gave water to a thirsty dog, so Allah thanked him and forgave him, and he said: \"There is a reward for (kindness to) every living being\" (al-Bukhari and Muslim). Mercy to animals is worship."
  ],
  "lesson": [
   "ضع اليوم وعاء ماءٍ صغيرًا للطيور في الشرفة أو الحديقة.",
   "Put out a small bowl of water for the birds today."
  ]
 },
 {
  "gd": 3,
  "gm": 3,
  "icon": "📜",
  "kind": "event",
  "t": [
   "إلغاء الخلافة العثمانية",
   "The Ottoman Caliphate Is Abolished"
  ],
  "s": [
   "في الثالث من مارس ١٩٢٤م أُلغيت الخلافة العثمانية، بعد قرونٍ طويلة كان المسلمون فيها تحت رايةٍ واحدة. ويتذكّر المسلمون هذا اليوم ليتعلّموا قيمة الوحدة والتعاون.",
   "On 3 March 1924 the Ottoman Caliphate was abolished, after many centuries in which Muslims lived under one banner. Muslims remember this day to learn the value of unity and working together."
  ],
  "lesson": [
   "الوحدة تبدأ من البيت: ساعد إخوتك اليوم بلا شجار.",
   "Unity starts at home: help your brothers and sisters today without arguing."
  ],
  "y": 1924
 },
 {
  "gd": 15,
  "gm": 3,
  "icon": "🤝",
  "kind": "day",
  "t": [
   "اليوم الدولي لمكافحة كراهية الإسلام",
   "International Day to Combat Islamophobia"
  ],
  "s": [
   "اختارت الأمم المتحدة هذا اليوم لنشر الاحترام ونبذ الكراهية ضدّ المسلمين. والمسلم يدعو إلى الخير بأخلاقه، كما قال الله تعالى: ﴿ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ﴾ [فصّلت: ٣٤].",
   "The United Nations chose this day to spread respect and reject hatred against Muslims. A Muslim invites to good through his character, as Allah says: \"Repel (evil) with what is better\" [Fussilat 41:34]."
  ],
  "lesson": [
   "أجمل ردٍّ على الكلام السيّئ: ابتسامة وكلمة طيّبة.",
   "The best answer to unkind words: a smile and a kind word."
  ]
 },
 {
  "gd": 21,
  "gm": 3,
  "icon": "🌳",
  "kind": "day",
  "t": [
   "اليوم الدولي للغابات",
   "International Day of Forests"
  ],
  "s": [
   "قال النبي ﷺ: «ما من مسلمٍ يغرس غرسًا أو يزرع زرعًا، فيأكل منه طيرٌ أو إنسانٌ أو بهيمة، إلا كان له به صدقة» (رواه البخاري ومسلم).",
   "The Prophet ﷺ said: \"No Muslim plants a tree or sows a crop from which a bird, a person or an animal eats, except that it is charity for him\" (al-Bukhari and Muslim)."
  ],
  "lesson": [
   "ازرع بذرةً في كوبٍ صغير، واسقِها كلّ يوم.",
   "Plant a seed in a small cup and water it every day."
  ]
 },
 {
  "gd": 22,
  "gm": 3,
  "icon": "💧",
  "kind": "day",
  "t": [
   "اليوم العالمي للمياه",
   "World Water Day"
  ],
  "s": [
   "الماء أصل الحياة، قال الله تعالى: ﴿وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ﴾ [الأنبياء: ٣٠]. وكان النبي ﷺ يتوضّأ بقليلٍ من الماء ولا يُسرف.",
   "Water is the source of life. Allah says: \"And We made from water every living thing\" [al-Anbiya 21:30]. The Prophet ﷺ made wudu with little water and never wasted it."
  ],
  "lesson": [
   "أغلق الصنبور وأنت تفرّش أسنانك.",
   "Turn off the tap while you brush your teeth."
  ]
 },
 {
  "gd": 7,
  "gm": 4,
  "icon": "🩺",
  "kind": "day",
  "t": [
   "يوم الصحة العالمي",
   "World Health Day"
  ],
  "s": [
   "قال النبي ﷺ: «نعمتان مغبونٌ فيهما كثيرٌ من الناس: الصحّة والفراغ» (رواه البخاري). فالصحة نعمةٌ نشكر الله عليها ونحافظ عليها.",
   "The Prophet ﷺ said: \"There are two blessings that many people lose out on: health and free time\" (al-Bukhari). Health is a blessing we thank Allah for and look after."
  ],
  "lesson": [
   "اشرب الماء، وكُل فاكهة، والعب في الهواء الطلق اليوم.",
   "Drink water, eat a fruit and play outdoors today."
  ]
 },
 {
  "gd": 23,
  "gm": 4,
  "icon": "📚",
  "kind": "day",
  "t": [
   "اليوم العالمي للكتاب",
   "World Book Day"
  ],
  "s": [
   "أقسم الله تعالى بالقلم فقال: ﴿ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ﴾ [القلم: ١]. والكتاب صديقٌ يعلّمك ولا يملّ منك.",
   "Allah swore by the pen: \"Nun. By the pen and what they write\" [al-Qalam 68:1]. A book is a friend who teaches you and never tires of you."
  ],
  "lesson": [
   "اقرأ اليوم صفحةً من كتابٍ تحبّه، وأخبر أحدًا بما تعلّمت.",
   "Read a page of a book you love today, and tell someone what you learned."
  ]
 },
 {
  "gd": 15,
  "gm": 5,
  "icon": "👨‍👩‍👧",
  "kind": "day",
  "t": [
   "اليوم الدولي للأسر",
   "International Day of Families"
  ],
  "s": [
   "الأسرة نعمة، وقد قرن الله الإحسان إلى الوالدين بعبادته: ﴿وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا﴾ [الإسراء: ٢٣].",
   "Family is a blessing, and Allah joined kindness to parents with worshipping Him: \"Your Lord has decreed that you worship none but Him, and that you be good to your parents\" [al-Isra 17:23]."
  ],
  "lesson": [
   "اسأل أمّك أو أباك: كيف أساعدك اليوم؟",
   "Ask your mother or father: how can I help you today?"
  ]
 },
 {
  "gd": 20,
  "gm": 5,
  "icon": "🐝",
  "kind": "day",
  "t": [
   "اليوم العالمي للنحل",
   "World Bee Day"
  ],
  "s": [
   "في القرآن سورةٌ اسمها «النحل»، وفيها: ﴿وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ﴾ [النحل: ٦٨]. فالنحلة تعمل بنظامٍ عجيب علّمها إيّاه ربّها.",
   "There is a surah in the Quran called \"The Bee\", and in it: \"And your Lord inspired the bee: Take homes in the mountains, in the trees and in what people build\" [an-Nahl 16:68]. The bee works with an amazing order her Lord taught her."
  ],
  "lesson": [
   "تذوّق ملعقة عسل، وقل: الحمد لله الذي سخّر لنا النحل.",
   "Taste a spoon of honey and say: Praise be to Allah who made the bee serve us."
  ]
 },
 {
  "gd": 5,
  "gm": 6,
  "icon": "🌍",
  "kind": "day",
  "t": [
   "اليوم العالمي للبيئة",
   "World Environment Day"
  ],
  "s": [
   "أمرنا الله أن نحافظ على الأرض فقال: ﴿وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا﴾ [الأعراف: ٥٦].",
   "Allah commanded us to look after the earth: \"And do not cause corruption on the earth after it has been set right\" [al-A'raf 7:56]."
  ],
  "lesson": [
   "اجمع ثلاث قطع من النفايات من حولك وضعها في مكانها.",
   "Pick up three bits of litter around you and put them in the bin."
  ]
 },
 {
  "gd": 8,
  "gm": 6,
  "icon": "🌊",
  "kind": "day",
  "t": [
   "اليوم العالمي للمحيطات",
   "World Oceans Day"
  ],
  "s": [
   "البحر من نِعم الله علينا: ﴿وَهُوَ الَّذِي سَخَّرَ الْبَحْرَ لِتَأْكُلُوا مِنْهُ لَحْمًا طَرِيًّا﴾ [النحل: ١٤]. ونحافظ عليه فلا نرمي فيه النفايات.",
   "The sea is one of Allah's blessings: \"It is He who made the sea serve you, so that you eat fresh meat from it\" [an-Nahl 16:14]. We protect it and never throw rubbish into it."
  ],
  "lesson": [
   "ارسم سمكةً وأخبر أهلك بثلاث نِعَمٍ يعطينا الله إيّاها من البحر.",
   "Draw a fish and tell your family three blessings Allah gives us from the sea."
  ]
 },
 {
  "gd": 30,
  "gm": 7,
  "icon": "🫂",
  "kind": "day",
  "t": [
   "اليوم الدولي للصداقة",
   "International Day of Friendship"
  ],
  "s": [
   "قال النبي ﷺ: «المرء على دين خليله، فلينظر أحدكم من يُخالل» (رواه أبو داود والترمذي). فالصديق الصالح يقرّبك من الخير.",
   "The Prophet ﷺ said: \"A person follows the way of his close friend, so let each of you look at whom he befriends\" (Abu Dawud and at-Tirmidhi). A good friend brings you closer to good."
  ],
  "lesson": [
   "اكتب بطاقة شكرٍ صغيرة لصديقٍ يعينك على الخير.",
   "Write a small thank-you card to a friend who helps you do good."
  ]
 },
 {
  "gd": 21,
  "gm": 8,
  "icon": "🕌",
  "kind": "event",
  "t": [
   "حريق المسجد الأقصى",
   "The Al-Aqsa Mosque Fire"
  ],
  "s": [
   "في الحادي والعشرين من أغسطس ١٩٦٩م أُشعلت النار في المسجد الأقصى، فاحترق منبر صلاح الدين التاريخي، ثمّ صُنع منبرٌ جديد يشبهه وأُعيد إلى مكانه سنة ٢٠٠٧م. والأقصى مسجدٌ مبارك ذكره الله في القرآن: ﴿سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ﴾ [الإسراء: ١].",
   "On 21 August 1969 the Al-Aqsa Mosque was set on fire, and the historic minbar of Salahuddin burned. A new minbar like it was made and returned to its place in 2007. Al-Aqsa is a blessed mosque mentioned in the Quran: \"Glory be to Him who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed\" [al-Isra 17:1]."
  ],
  "lesson": [
   "ادعُ الله اليوم أن يحفظ المسجد الأقصى وأهله.",
   "Make dua today for Allah to protect Al-Aqsa and its people."
  ],
  "y": 1969
 },
 {
  "gd": 5,
  "gm": 9,
  "icon": "🤲",
  "kind": "day",
  "t": [
   "اليوم الدولي للعمل الخيري",
   "International Day of Charity"
  ],
  "s": [
   "قال النبي ﷺ: «ما نقصت صدقةٌ من مال» (رواه مسلم). فالصدقة لا تُنقص ما عندك، بل يباركه الله.",
   "The Prophet ﷺ said: \"Charity never decreases wealth\" (Muslim). Giving does not make you poorer — Allah blesses what you have."
  ],
  "lesson": [
   "تصدّق اليوم بشيءٍ صغير: لعبة، أو كتاب، أو ابتسامة.",
   "Give something small today: a toy, a book, or a smile."
  ]
 },
 {
  "gd": 8,
  "gm": 9,
  "icon": "✏️",
  "kind": "day",
  "t": [
   "اليوم الدولي لمحو الأمية",
   "International Literacy Day"
  ],
  "s": [
   "أوّل كلمةٍ نزلت من القرآن كانت: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ﴾ [العلق: ١]. فالقراءة والكتابة بابٌ عظيم للعلم.",
   "The very first word of the Quran revealed was \"Read\": \"Read in the name of your Lord who created\" [al-'Alaq 96:1]. Reading and writing are a great door to knowledge."
  ],
  "lesson": [
   "علّم أخاك الصغير حرفًا جديدًا، أو اقرأ له قصّة.",
   "Teach your little brother or sister a new letter, or read them a story."
  ]
 },
 {
  "gd": 21,
  "gm": 9,
  "icon": "🕊️",
  "kind": "day",
  "t": [
   "اليوم الدولي للسلام",
   "International Day of Peace"
  ],
  "s": [
   "تحيّة المسلمين «السلام عليكم»، وقال النبي ﷺ: «أفشوا السلام بينكم» (رواه مسلم). فالسلام يملأ القلوب محبّة.",
   "The Muslim greeting is \"Peace be upon you\", and the Prophet ﷺ said: \"Spread the greeting of peace among you\" (Muslim). Peace fills hearts with love."
  ],
  "lesson": [
   "ألقِ السلام اليوم على كلّ من تلقاه.",
   "Greet everyone you meet today with \"as-salamu alaykum\"."
  ]
 },
 {
  "gd": 25,
  "gm": 9,
  "icon": "🌐",
  "kind": "event",
  "t": [
   "تأسيس منظّمة التعاون الإسلامي",
   "The Organisation of Islamic Cooperation Is Founded"
  ],
  "s": [
   "في الخامس والعشرين من سبتمبر ١٩٦٩م اجتمع قادة دولٍ مسلمة في مدينة الرباط بالمغرب، وأسّسوا منظّمةً تجمع الدول الإسلامية على التعاون، تذكيرًا بقول الله تعالى: ﴿وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا﴾ [آل عمران: ١٠٣].",
   "On 25 September 1969 leaders of Muslim countries met in Rabat, Morocco, and founded an organisation bringing Muslim nations together to cooperate — a reminder of Allah's words: \"Hold firmly to the rope of Allah all together and do not be divided\" [Al 'Imran 3:103]."
  ],
  "lesson": [
   "اعمل اليوم مشروعًا صغيرًا مع إخوتك أو أصدقائك معًا.",
   "Do a small project together with your siblings or friends today."
  ],
  "y": 1969
 },
 {
  "gd": 1,
  "gm": 10,
  "icon": "👴",
  "kind": "day",
  "t": [
   "اليوم الدولي لكبار السنّ",
   "International Day of Older Persons"
  ],
  "s": [
   "قال النبي ﷺ: «ليس منّا من لم يرحم صغيرنا ويوقّر كبيرنا» (رواه الترمذي). فاحترام الكبار من أخلاق المسلم.",
   "The Prophet ﷺ said: \"He is not one of us who does not show mercy to our young and respect to our elders\" (at-Tirmidhi). Respecting elders is part of a Muslim's character."
  ],
  "lesson": [
   "اتّصل بجدّك أو جدّتك اليوم، أو زُرهما.",
   "Call or visit your grandfather or grandmother today."
  ]
 },
 {
  "gd": 5,
  "gm": 10,
  "icon": "👩‍🏫",
  "kind": "day",
  "t": [
   "اليوم العالمي للمعلّم",
   "World Teachers' Day"
  ],
  "s": [
   "قال النبي ﷺ: «إنّ الله وملائكته، حتى النملة في جحرها وحتى الحوت، ليصلّون على معلّم الناس الخير» (رواه الترمذي). فالمعلّم صاحب فضلٍ عظيم.",
   "The Prophet ﷺ said: \"Allah, His angels — even the ant in its hole and the fish — pray for the one who teaches people good\" (at-Tirmidhi). A teacher has a great virtue."
  ],
  "lesson": [
   "اكتب لمعلّمك رسالة شكر، وادعُ له.",
   "Write your teacher a thank-you note and make dua for them."
  ]
 },
 {
  "gd": 7,
  "gm": 10,
  "icon": "🧬",
  "kind": "event",
  "t": [
   "عزيز سنجر ينال جائزة نوبل",
   "Aziz Sancar Wins the Nobel Prize"
  ],
  "s": [
   "في السابع من أكتوبر ٢٠١٥م أُعلن فوز العالم التركي المسلم عزيز سنجر بجائزة نوبل في الكيمياء، لاكتشافاته في الطريقة التي تُصلح بها خلايا الجسم نفسها.",
   "On 7 October 2015 the Turkish Muslim scientist Aziz Sancar was announced as a winner of the Nobel Prize in Chemistry, for his discoveries about how the body's cells repair themselves."
  ],
  "lesson": [
   "سبحان الله! جسمك يُصلح نفسه كلّ يوم — اشكر الله على هذه النعمة.",
   "Subhan Allah! Your body repairs itself every day — thank Allah for this blessing."
  ],
  "y": 2015
 },
 {
  "gd": 10,
  "gm": 10,
  "icon": "🎓",
  "kind": "event",
  "t": [
   "ملالا يوسفزاي تنال جائزة نوبل للسلام",
   "Malala Yousafzai Wins the Nobel Peace Prize"
  ],
  "s": [
   "في العاشر من أكتوبر ٢٠١٤م أُعلن فوز الفتاة الباكستانية ملالا يوسفزاي بجائزة نوبل للسلام لدفاعها عن حقّ الأطفال — وخاصّةً البنات — في التعليم، وكانت في السابعة عشرة من عمرها.",
   "On 10 October 2014 the Pakistani girl Malala Yousafzai was announced as a winner of the Nobel Peace Prize for standing up for every child's — especially every girl's — right to learn. She was seventeen years old."
  ],
  "lesson": [
   "العلم نعمة: اشكر الله على مدرستك، واجتهد في درسك اليوم.",
   "Learning is a blessing: thank Allah for your school and work hard on your lesson today."
  ],
  "y": 2014
 },
 {
  "gd": 16,
  "gm": 10,
  "icon": "🍽️",
  "kind": "day",
  "t": [
   "يوم الأغذية العالمي",
   "World Food Day"
  ],
  "s": [
   "قال الله تعالى: ﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا﴾ [الأعراف: ٣١]. فنأكل ما يكفينا، ولا نرمي الطعام، ونشارك من يحتاج.",
   "Allah says: \"Eat and drink, but do not waste\" [al-A'raf 7:31]. We eat what is enough, never throw food away, and share with those in need."
  ],
  "lesson": [
   "ضع في صحنك ما تستطيع أكله فقط، وابدأ بـ«بسم الله».",
   "Put on your plate only what you can finish, and start with \"Bismillah\"."
  ]
 },
 {
  "gd": 13,
  "gm": 11,
  "icon": "💗",
  "kind": "day",
  "t": [
   "اليوم العالمي للّطف",
   "World Kindness Day"
  ],
  "s": [
   "قال النبي ﷺ: «إنّ الله رفيقٌ يحبّ الرفق في الأمر كلّه» (رواه البخاري ومسلم). فاللطف يجعل كلّ شيءٍ أجمل.",
   "The Prophet ﷺ said: \"Allah is Gentle and loves gentleness in all matters\" (al-Bukhari and Muslim). Kindness makes everything more beautiful."
  ],
  "lesson": [
   "افعل اليوم ثلاثة أشياء لطيفة دون أن يطلبها أحد.",
   "Do three kind things today without being asked."
  ]
 },
 {
  "gd": 20,
  "gm": 11,
  "icon": "🧒",
  "kind": "day",
  "t": [
   "اليوم العالمي للطفل",
   "World Children's Day"
  ],
  "s": [
   "كان النبي ﷺ يرحم الأطفال ويلاعبهم ويسلّم عليهم، وقال: «ليس منّا من لم يرحم صغيرنا» (رواه الترمذي).",
   "The Prophet ﷺ was merciful to children: he played with them and greeted them, and said: \"He is not one of us who does not show mercy to our young\" (at-Tirmidhi)."
  ],
  "lesson": [
   "العب اليوم لعبةً مع طفلٍ أصغر منك، وكن لطيفًا معه.",
   "Play a game today with a child younger than you, and be gentle with them."
  ]
 },
 {
  "gd": 29,
  "gm": 11,
  "icon": "🇵🇸",
  "kind": "day",
  "t": [
   "اليوم الدولي للتضامن مع الشعب الفلسطيني",
   "International Day of Solidarity with the Palestinian People"
  ],
  "s": [
   "يتذكّر العالم في هذا اليوم أهل فلسطين، أرض المسجد الأقصى المبارك. والمسلمون كالجسد الواحد، يتألّمون لألم إخوانهم ويدعون لهم.",
   "On this day the world remembers the people of Palestine, the land of the blessed Al-Aqsa Mosque. Muslims are like one body: they feel their brothers' pain and make dua for them."
  ],
  "lesson": [
   "ادعُ اليوم لأطفال فلسطين بالأمن والسلام.",
   "Make dua today for the children of Palestine to have safety and peace."
  ]
 },
 {
  "gd": 3,
  "gm": 12,
  "icon": "♿",
  "kind": "day",
  "t": [
   "اليوم الدولي للأشخاص ذوي الإعاقة",
   "International Day of Persons with Disabilities"
  ],
  "s": [
   "جاء الصحابي الكفيف عبد الله ابن أمّ مكتوم إلى النبي ﷺ يسأله، فنزلت: ﴿عَبَسَ وَتَوَلَّىٰ ۝ أَنْ جَاءَهُ الْأَعْمَىٰ﴾ [عبس: ١–٢]. فصار النبي ﷺ يكرمه، وكان مؤذّنه، واستخلفه على المدينة مرّات.",
   "The blind Companion Abdullah ibn Umm Maktum came to the Prophet ﷺ with a question, and the verses were revealed: \"He frowned and turned away, because the blind man came to him\" ['Abasa 80:1–2]. After that the Prophet ﷺ honoured him: he was one of his callers to prayer, and he left him in charge of Madinah several times."
  ],
  "lesson": [
   "كل إنسانٍ عنده مواهب: ساعد اليوم من يحتاج مساعدة، واحترمه.",
   "Everyone has gifts: help someone who needs it today, and treat them with respect."
  ]
 },
 {
  "gd": 18,
  "gm": 12,
  "icon": "🔤",
  "kind": "day",
  "t": [
   "اليوم العالمي للغة العربية",
   "World Arabic Language Day"
  ],
  "s": [
   "العربية لغة القرآن، قال الله تعالى: ﴿إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ﴾ [يوسف: ٢]. واختير هذا اليوم لأنّ الأمم المتحدة جعلت العربية من لغاتها الرسمية في ١٨ ديسمبر ١٩٧٣م.",
   "Arabic is the language of the Quran. Allah says: \"We have sent it down as an Arabic Quran so that you may understand\" [Yusuf 12:2]. This day was chosen because the United Nations made Arabic one of its official languages on 18 December 1973."
  ],
  "lesson": [
   "تعلّم اليوم كلمةً عربيةً جديدة من القرآن واعرف معناها.",
   "Learn a new Arabic word from the Quran today, and its meaning."
  ]
 }
] };
