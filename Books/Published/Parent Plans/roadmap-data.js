/* ════════════════════════════════════════════════════════════════
   roadmap-data.js — content for «خطة الأهل · Parent Roadmap».
   Age tracks (4–6, 7–9, 10–12), each with a 1-year & 2-year plan
   that walks the child through the website's 10 corners (the goals).
   window.ROADMAP = { corners, tracks, ... }
   ════════════════════════════════════════════════════════════════ */
(function () {
  var R = {};

  /* ── the 10 goals (corners) ── */
  R.corners = [
    { ic:'🕋', c:'#27AE60', n:{ar:'منارة العقيدة', en:'Faith Minaret'}, d:{ar:'بناء العقيدة واليقين: من خلق الكون؟ أركان الإيمان، التوحيد، الأمان بالله.', en:'Building creed & certainty: who made the universe, pillars of faith, tawheed, security with Allah.'}, t:{ar:'١٠ رحلات · ١٣٨ محطة', en:'10 journeys · 138 stations'} },
    { ic:'🌙', c:'#117A8B', n:{ar:'واحة العبادة', en:'Worship Oasis'}, d:{ar:'الصلاة، الأذكار، الدعاء، الصيام، الزكاة والحج — عمليًّا خطوة بخطوة.', en:'Prayer, adhkar, du\u2019a, fasting, zakah & hajj — practically, step by step.'}, t:{ar:'٦ رحلات · ٩٤ محطة', en:'6 journeys · 94 stations'} },
    { ic:'📖', c:'#1A9B7B', n:{ar:'بستان القرآن والسنة', en:'Qur\u2019an & Sunnah Garden'}, d:{ar:'السور القصيرة، قصص القرآن، الأربعون النووية، وصحبة القرآن.', en:'Short surahs, Qur\u2019anic stories, the 40 Hadith, companionship of the Qur\u2019an.'}, t:{ar:'٤ رحلات · ١١٥ محطة', en:'4 journeys · 115 stations'} },
    { ic:'🏘️', c:'#D4A017', n:{ar:'حيّنا الصغير', en:'Our Little District'}, d:{ar:'الأخلاق والآداب: بيوتٌ كلٌّ منها خُلُقٌ يعيشه الطفل في حيّه.', en:'Manners & etiquette: houses, each a character the child lives out.'}, t:{ar:'٣٤ بيت خُلُق', en:'34 manner-houses'} },
    { ic:'💚', c:'#16A085', n:{ar:'ركن القلب السليم', en:'The Pure Heart'}, d:{ar:'تزكية القلب: الإخلاص، الرضا، الشكر، وترك آفات القلب.', en:'Purifying the heart: sincerity, contentment, gratitude, leaving the heart\u2019s ailments.'}, t:{ar:'تزكية ومحاسبة', en:'Purification & self-check'} },
    { ic:'🏰', c:'#C0392B', n:{ar:'حصن الأبطال', en:'Heroes\u2019 Fortress'}, d:{ar:'قصص الأنبياء والصحابة والسيرة — قدواتٌ تُبنى عليها الشخصية.', en:'Stories of prophets, companions & seerah — role models that shape character.'}, t:{ar:'قدوات وسيرة', en:'Role models & seerah'} },
    { ic:'🏊', c:'#27AE60', n:{ar:'النادي الرياضي', en:'Sports Club'}, d:{ar:'سنن الفطرة، الرياضة والقوة، قوة الشخصية، والحذر من الآفات.', en:'Fitrah sunnahs, sport & strength, strength of character, avoiding dangers.'}, t:{ar:'٤ رحلات · ٤٥ محطة', en:'4 journeys · 45 stations'} },
    { ic:'🔭', c:'#1FAE8C', n:{ar:'أكاديمية المبدعين', en:'Innovators\u2019 Academy'}, d:{ar:'اللغة العربية، الإبداع، العلوم، الخطابة وعقولٌ منيرة.', en:'Arabic language, creativity, science, oratory & illuminating minds.'}, t:{ar:'٦ رحلات · ٧٨ محطة', en:'6 journeys · 78 stations'} },
    { ic:'🕌', c:'#1F8B6E', n:{ar:'ركن القدس والأمة', en:'Al-Quds & the Ummah'}, d:{ar:'الأقصى، الأمة الواحدة، ورحلة التغيير — انتماءٌ وهمّ.', en:'Al-Aqsa, the one ummah, the journey of change — belonging & concern.'}, t:{ar:'٣ رحلات · ٣٠ محطة', en:'3 journeys · 30 stations'} },
    { ic:'🧔', c:'#8E44AD', n:{ar:'ركن الأهل', en:'Parents\u2019 Corner'}, d:{ar:'دورك أنت: المتابعة، نقاط السلوك، البرامج العلاجية والقدوة.', en:'Your own role: tracking, behaviour points, solution programs & being the example.'}, t:{ar:'قيادتك للرحلة', en:'You lead the journey'} }
  ];

  /* daily anchors shared by every track */
  R.anchors = [
    { ic:'📖', n:{ar:'وِردُ القرآن', en:'Qur\u2019an portion'}, d:{ar:'حِفظٌ ومراجعةٌ يوميّة (انظر كتاب خطة الحفظ).', en:'Daily memorize + review (see the Memorization Plan book).'} },
    { ic:'🕌', n:{ar:'الصلاة والأذكار', en:'Prayer & adhkar'}, d:{ar:'الصلوات في وقتها + أذكار الصباح والمساء.', en:'Prayers on time + morning & evening adhkar.'} },
    { ic:'🏘️', n:{ar:'خُلُقُ الأسبوع', en:'Manner of the week'}, d:{ar:'خُلُقٌ واحدٌ من الحيّ يُطبَّق طوال الأسبوع.', en:'One manner from the District, practised all week.'} },
    { ic:'⭐', n:{ar:'نقطةُ السلوك', en:'Behaviour point'}, d:{ar:'سجِّل التزام طفلك في ركن الأهل بالموقع.', en:'Log your child\u2019s commitment in the site\u2019s Parents\u2019 Corner.'} }
  ];

  /* ── helper to keep rows terse ── */
  function row(period, ic, focus, goals, milestone){ return {p:period, ic:ic, f:focus, g:goals, m:milestone}; }

  /* ════════ TRACK A · 4–6 ════════ */
  var A1 = [
    row({ar:'الشهر ١',en:'Month 1'},'🌅',{ar:'مَن خلق الكون؟',en:'Who made the universe?'},{ar:'منارة العقيدة — عجائب المخلوقات (مبسّطة)',en:'Faith Minaret — wonders of creation (simple)'},{ar:'يعرف أن الله خلق كل شيء',en:'Knows Allah made everything'}),
    row({ar:'الشهر ٢',en:'Month 2'},'🕌',{ar:'أحبُّ الصلاة',en:'I love prayer'},{ar:'واحة العبادة — حركات الصلاة والوضوء',en:'Worship Oasis — prayer moves & wudu'},{ar:'يصلّي مع أهله بالحركات',en:'Prays the motions with family'}),
    row({ar:'الشهر ٣',en:'Month 3'},'📖',{ar:'سُوَري الصغيرة',en:'My little surahs'},{ar:'بستان القرآن — الفاتحة + ٣ سور قصار',en:'Qur\u2019an Garden — Al-Fatihah + 3 short surahs'},{ar:'يحفظ ٤ سور',en:'Memorizes 4 surahs'}),
    row({ar:'الشهر ٤',en:'Month 4'},'🗣️',{ar:'كلماتٌ جميلة',en:'Beautiful words'},{ar:'حيّنا الصغير — السلام، الشكر، الصدق',en:'District — salam, thanks, truthfulness'},{ar:'يبدأ بالسلام ويشكر',en:'Greets & says thank you'}),
    row({ar:'الشهر ٥',en:'Month 5'},'💚',{ar:'قلبي الطيّب',en:'My kind heart'},{ar:'القلب السليم — الرحمة والمشاركة',en:'Pure Heart — mercy & sharing'},{ar:'يشارك ويرحم الصغار',en:'Shares & shows mercy'}),
    row({ar:'الشهر ٦',en:'Month 6'},'🏰',{ar:'قصصُ الأنبياء',en:'Stories of the prophets'},{ar:'حصن الأبطال — قصص مصوّرة قصيرة',en:'Heroes\u2019 Fortress — short illustrated stories'},{ar:'يحكي قصة نبيّ',en:'Retells a prophet\u2019s story'}),
    row({ar:'الشهر ٧',en:'Month 7'},'🌿',{ar:'نظافتي وفطرتي',en:'My cleanliness & fitrah'},{ar:'النادي الرياضي — سنن الفطرة والنظافة',en:'Sports Club — fitrah sunnahs & hygiene'},{ar:'يعتني بنظافته بنفسه',en:'Cares for his own hygiene'}),
    row({ar:'الشهر ٨',en:'Month 8'},'🔤',{ar:'حروفي ولُغتي',en:'My letters & language'},{ar:'أكاديمية المبدعين — الحروف والكلمات',en:'Academy — letters & words'},{ar:'يعرف الحروف العربية',en:'Knows the Arabic letters'}),
    row({ar:'الشهر ٩',en:'Month 9'},'🕌',{ar:'أحبُّ المسجد الأقصى',en:'I love Al-Aqsa'},{ar:'القدس والأمة — قصة الأقصى (مبسّطة)',en:'Al-Quds — the Aqsa story (simple)'},{ar:'يدعو للأقصى',en:'Makes du\u2019a for Al-Aqsa'}),
    row({ar:'الشهر ١٠',en:'Month 10'},'✨',{ar:'أسماءُ الله الحُسنى',en:'Allah\u2019s beautiful names'},{ar:'منارة العقيدة — أسماء يحبّها الطفل',en:'Faith Minaret — names a child loves'},{ar:'يحفظ ٥ أسماء',en:'Learns 5 names'}),
    row({ar:'الشهر ١١',en:'Month 11'},'🌙',{ar:'رمضان والعيد',en:'Ramadan & Eid'},{ar:'واحة العبادة — الصيام بفرح (موسمي)',en:'Worship Oasis — joyful fasting (seasonal)'},{ar:'يصوم ساعاتٍ ويفرح',en:'Fasts a few hours, joyfully'}),
    row({ar:'الشهر ١٢',en:'Month 12'},'🎉',{ar:'احتفالُ البراعم',en:'Sprouts\u2019 celebration'},{ar:'مراجعة الحفظ والقصص + شهادة',en:'Review surahs & stories + certificate'},{ar:'حفلة تخرّج صغيرة',en:'A little graduation party'})
  ];
  var A2 = { note:{ar:'السنة الأولى: نفس خطة الـ١٢ شهرًا أعلاه، لكن بإيقاعٍ أهدأ (موضوعٌ كلَّ ٥–٦ أسابيع، ١٠ دقائق يوميًّا، تكرارٌ ولعب).',en:'Year 1: the same 12-month plan above, but slower (one theme every 5\u20136 weeks, 10 min/day, repetition & play).'},
    y2:[
      row({ar:'ف١',en:'T1'},'📖',{ar:'مزيدٌ من السور',en:'More surahs'},{ar:'٥ سور قصار جديدة + مراجعة',en:'5 new short surahs + review'},{ar:'٩ سور محفوظة',en:'9 surahs memorized'}),
      row({ar:'ف٢',en:'T2'},'🕌',{ar:'الصلاة بترتيب',en:'Prayer in order'},{ar:'أركان الصلاة بالترتيب + الأذكار',en:'Prayer steps in order + adhkar'},{ar:'يصلّي ركعةً صحيحة',en:'Prays one correct rak\u2019ah'}),
      row({ar:'ف٣',en:'T3'},'🏘️',{ar:'آدابٌ أوسع',en:'Wider manners'},{ar:'آداب الطعام، الاستئذان، الطريق',en:'Manners of eating, asking permission, the road'},{ar:'٦ آداب يطبّقها',en:'Lives 6 manners'}),
      row({ar:'ف٤',en:'T4'},'🏰',{ar:'أبطالٌ صغار',en:'Little heroes'},{ar:'قصص الصحابة الصغار',en:'Stories of the young companions'},{ar:'قدوة يحبّها',en:'Has a role model'}),
      row({ar:'ف٥',en:'T5'},'✨',{ar:'أركانُ الإيمان',en:'Pillars of faith'},{ar:'الملائكة والكتب (مبسّطة)',en:'Angels & books (simple)'},{ar:'يعدّد أركان الإيمان',en:'Lists the pillars of faith'}),
      row({ar:'ف٦',en:'T6'},'🔭',{ar:'أتأمّلُ خلق الله',en:'I ponder creation'},{ar:'تجارب ومشاهدات بسيطة للكون',en:'Simple experiments & sky-watching'},{ar:'يسأل ويتعجّب',en:'Asks & wonders'}),
      row({ar:'ف٧',en:'T7'},'🤲',{ar:'أدعو ربّي',en:'I call my Lord'},{ar:'أدعية يومٍ صغيرة محفوظة',en:'Small daily du\u2019as memorized'},{ar:'٧ أدعية يومية',en:'7 daily du\u2019as'}),
      row({ar:'ف٨',en:'T8'},'🎓',{ar:'مستعدٌّ للبُناة',en:'Ready for Builders'},{ar:'مراجعة شاملة + الانتقال لمسار ٧–٩',en:'Full review + move to the 7\u20139 track'},{ar:'شهادة البراعم',en:'Sprouts certificate'})
    ] };

  /* ════════ TRACK B · 7–9 ════════ */
  var B1 = [
    row({ar:'الشهر ١',en:'Month 1'},'🌅',{ar:'من خلق هذا؟',en:'Who made this?'},{ar:'منارة العقيدة — رحلة اليقين (عجائب المخلوقات)',en:'Faith Minaret — Certainty (wonders of creation)'},{ar:'شهادة اليقين',en:'Certainty certificate'}),
    row({ar:'الشهر ٢',en:'Month 2'},'🕌',{ar:'الصلاة عمود الدين',en:'Prayer, pillar of faith'},{ar:'واحة العبادة — رحلة الصلاة',en:'Worship Oasis — the Prayer journey'},{ar:'مصلٍّ صغير منتظم',en:'A steady little worshipper'}),
    row({ar:'الشهر ٣',en:'Month 3'},'📖',{ar:'رفيقي القرآن',en:'My companion, the Qur\u2019an'},{ar:'بستان القرآن — السور القصيرة + قصص القرآن',en:'Qur\u2019an Garden — short surahs + stories'},{ar:'حفظ جزء عمّ (بداية)',en:'Begins Juz \u2019Amma'}),
    row({ar:'الشهر ٤',en:'Month 4'},'🏘️',{ar:'أخلاقُ الحيّ',en:'Manners of the District'},{ar:'حيّنا الصغير — بيوت الأخلاق',en:'Our District — the manner-houses'},{ar:'خُلُقٌ كلَّ أسبوع',en:'A manner each week'}),
    row({ar:'الشهر ٥',en:'Month 5'},'💚',{ar:'قلبٌ سليم',en:'A sound heart'},{ar:'القلب السليم — الإخلاص والشكر',en:'Pure Heart — sincerity & gratitude'},{ar:'محاسبةٌ يومية بسيطة',en:'A simple daily self-check'}),
    row({ar:'الشهر ٦',en:'Month 6'},'🏰',{ar:'في حصن الأبطال',en:'In the Heroes\u2019 Fortress'},{ar:'حصن الأبطال — قصص الأنبياء',en:'Heroes\u2019 Fortress — prophets\u2019 stories'},{ar:'قصة نبيٍّ كلَّ أسبوع',en:'A prophet a week'}),
    row({ar:'الشهر ٧',en:'Month 7'},'🏊',{ar:'جسمٌ قويّ وفطرة',en:'Strong body & fitrah'},{ar:'النادي الرياضي — سنن الفطرة + الرياضة',en:'Sports Club — fitrah sunnahs + sport'},{ar:'عاداتٌ صحية وفطرية',en:'Healthy, fitrah habits'}),
    row({ar:'الشهر ٨',en:'Month 8'},'🔭',{ar:'عقلٌ مبدع',en:'A creative mind'},{ar:'أكاديمية المبدعين — لغتي العربية + كن المبدع',en:'Academy — My Arabic + Be the Creator'},{ar:'مشروعٌ صغير + قراءة',en:'A small project + reading'}),
    row({ar:'الشهر ٩',en:'Month 9'},'🕌',{ar:'قلبي مع الأقصى',en:'My heart with Al-Aqsa'},{ar:'القدس والأمة — رحلة الأقصى',en:'Al-Quds — Journey of Al-Aqsa'},{ar:'يعرف قيمة الأقصى ويدعو',en:'Knows Al-Aqsa\u2019s worth & prays'}),
    row({ar:'الشهر ١٠',en:'Month 10'},'🛡️',{ar:'توحيدٌ وأمان',en:'Tawheed & security'},{ar:'منارة العقيدة — التوحيد + الأمان بالله',en:'Faith Minaret — Tawheed + Security with Allah'},{ar:'يطمئن قلبه بالله',en:'His heart rests in Allah'}),
    row({ar:'الشهر ١١',en:'Month 11'},'🌙',{ar:'مواسمُ الخير',en:'Seasons of good'},{ar:'واحة العبادة — الصيام/الدعاء/الزكاة (موسمي)',en:'Worship Oasis — fasting / du\u2019a / zakah (seasonal)'},{ar:'يعيش الموسم عبادةً',en:'Lives the season in worship'}),
    row({ar:'الشهر ١٢',en:'Month 12'},'🎉',{ar:'مراجعةٌ واحتفال',en:'Review & celebrate'},{ar:'مراجعة كل الأركان + الشهادات',en:'Review every corner + certificates'},{ar:'تخرّجُ البُناة',en:'Builders\u2019 graduation'})
  ];
  var B2 = { note:{ar:'السنة الأولى: خطة الـ١٢ شهرًا أعلاه (تأسيس). السنة الثانية: تعميقٌ ورحلاتٌ جديدة كما يلي.',en:'Year 1: the 12-month plan above (foundations). Year 2: depth & new journeys, as below.'},
    y2:[
      row({ar:'ف١',en:'T1'},'✨',{ar:'أركانُ الإيمان',en:'Pillars of faith'},{ar:'الملائكة + الكتب والرسل + اليوم الآخر',en:'Angels + Books & Messengers + Last Day'},{ar:'٣ رحلات عقيدة',en:'3 creed journeys'}),
      row({ar:'ف٢',en:'T2'},'📖',{ar:'مع الحديث',en:'With the hadith'},{ar:'بستان القرآن — الأربعون النووية (مختارة)',en:'Qur\u2019an Garden — selected 40 Hadith'},{ar:'١٠ أحاديث محفوظة',en:'10 hadith memorized'}),
      row({ar:'ف٣',en:'T3'},'🕋',{ar:'فقهُ العبادة',en:'Fiqh of worship'},{ar:'واحة العبادة — الزكاة + الحج (تعلّمًا)',en:'Worship Oasis — Zakah + Hajj (learning)'},{ar:'يفهم أركان الإسلام كاملة',en:'Grasps all pillars of Islam'}),
      row({ar:'ف٤',en:'T4'},'🦁',{ar:'قوةُ الشخصية',en:'Strength of character'},{ar:'النادي الرياضي — قوة الشخصية + الحذر من الآفات',en:'Sports Club — character strength + avoiding dangers'},{ar:'يقول لا للخطأ',en:'Says no to wrong'}),
      row({ar:'ف٥',en:'T5'},'🎤',{ar:'لساني وبياني',en:'My tongue & speech'},{ar:'الأكاديمية — الخطابة + عقول منيرة',en:'Academy — oratory + illuminating minds'},{ar:'يلقي كلمةً قصيرة',en:'Gives a short talk'}),
      row({ar:'ف٦',en:'T6'},'🤝',{ar:'أمّةٌ واحدة',en:'One ummah'},{ar:'القدس والأمة — الأمة الواحدة + التغيير',en:'Al-Quds — One Ummah + Change'},{ar:'يشعر بإخوانه',en:'Feels for his brothers'}),
      row({ar:'ف٧',en:'T7'},'📜',{ar:'إتمامُ جزء عمّ',en:'Finishing Juz \u2019Amma'},{ar:'حفظ ومراجعة جزء عمّ كاملًا',en:'Memorize & revise all of Juz \u2019Amma'},{ar:'حافظٌ لجزء عمّ',en:'Has memorized Juz \u2019Amma'}),
      row({ar:'ف٨',en:'T8'},'🎓',{ar:'مستعدٌّ للفرسان',en:'Ready for Knights'},{ar:'مراجعةٌ شاملة + الانتقال لمسار ١٠–١٢',en:'Full review + move to the 10\u201312 track'},{ar:'شهادة البُناة العليا',en:'Builders\u2019 honours'})
    ] };

  /* ════════ TRACK C · 10–12 ════════ */
  var C1 = [
    row({ar:'الشهر ١',en:'Month 1'},'🔬',{ar:'براهينُ العقيدة',en:'Proofs of creed'},{ar:'منارة العقيدة — اليقين + المختبر + التوحيد',en:'Faith Minaret — Certainty + Lab + Tawheed'},{ar:'يردّ شبهةً ببرهان',en:'Answers a doubt with proof'}),
    row({ar:'الشهر ٢',en:'Month 2'},'✨',{ar:'أركانُ الإيمان',en:'Pillars of faith'},{ar:'الملائكة + الكتب + اليوم الآخر + القدر',en:'Angels + Books + Last Day + Qadar'},{ar:'يشرح أركان الإيمان',en:'Explains the pillars of faith'}),
    row({ar:'الشهر ٣',en:'Month 3'},'🕋',{ar:'فقهُ العبادة',en:'Fiqh of worship'},{ar:'واحة العبادة — الصلاة (تعمّق) + الصيام + الزكاة + الحج',en:'Worship Oasis — deeper prayer + fasting + zakah + hajj'},{ar:'يؤدّي العبادات بفقه',en:'Worships with understanding'}),
    row({ar:'الشهر ٤',en:'Month 4'},'📖',{ar:'القرآن والسنة',en:'Qur\u2019an & Sunnah'},{ar:'بستان القرآن — السور + الأربعون + أنا صاحبك القرآن',en:'Qur\u2019an Garden — surahs + 40 Hadith + Your Companion'},{ar:'وردٌ يومي ثابت',en:'A fixed daily portion'}),
    row({ar:'الشهر ٥',en:'Month 5'},'🏛️',{ar:'قصصُ القرآن والسيرة',en:'Qur\u2019anic stories & seerah'},{ar:'قصص القرآن + حصن الأبطال (السيرة)',en:'Qur\u2019anic stories + Heroes\u2019 Fortress (seerah)'},{ar:'يستخرج العِبَر',en:'Draws out the lessons'}),
    row({ar:'الشهر ٦',en:'Month 6'},'💚',{ar:'أخلاقٌ وقِيَم',en:'Manners & values'},{ar:'حيّنا الصغير + القلب السليم (تعمّق)',en:'Our District + Pure Heart (deeper)'},{ar:'محاسبةٌ ومجاهدة',en:'Self-accounting & striving'}),
    row({ar:'الشهر ٧',en:'Month 7'},'🦁',{ar:'قوةُ الشخصية',en:'Strength of character'},{ar:'النادي الرياضي — قوة الشخصية + احذر الآفات + الفطرة',en:'Sports Club — character + dangers + fitrah'},{ar:'يقاوم ضغط الأقران',en:'Resists peer pressure'}),
    row({ar:'الشهر ٨',en:'Month 8'},'🎤',{ar:'العقلُ والبيان',en:'Mind & eloquence'},{ar:'الأكاديمية — عقول منيرة + لغتي + الخطابة',en:'Academy — illuminating minds + Arabic + oratory'},{ar:'بحثٌ ومحاضرة قصيرة',en:'A small research & talk'}),
    row({ar:'الشهر ٩',en:'Month 9'},'🕌',{ar:'الأمةُ وقضاياها',en:'The ummah & its causes'},{ar:'القدس والأمة — الأقصى + الأمة الواحدة + التغيير',en:'Al-Quds — Aqsa + One Ummah + Change'},{ar:'مشروعُ خيرٍ للأمة',en:'A service project for the ummah'}),
    row({ar:'الشهر ١٠',en:'Month 10'},'🛡️',{ar:'الثباتُ والأمان',en:'Steadfastness & security'},{ar:'منارة العقيدة — رحلة الأبطال (الثبات) + الأمان',en:'Faith Minaret — Heroes (steadfastness) + Security'},{ar:'يثبت على الحقّ',en:'Holds firm on the truth'}),
    row({ar:'الشهر ١١',en:'Month 11'},'💡',{ar:'مشروعي الإيماني',en:'My faith project'},{ar:'كن المبدع — مشروعٌ يخدم أسرته أو حيّه',en:'Be the Creator — a project serving family or community'},{ar:'ينفّذ مشروعًا كاملًا',en:'Completes a full project'}),
    row({ar:'الشهر ١٢',en:'Month 12'},'🎓',{ar:'مراجعةٌ وتخرّج',en:'Review & graduation'},{ar:'مراجعة شاملة لكل الأركان + شهادة الفرسان',en:'Full review of all corners + Knights\u2019 certificate'},{ar:'فارسٌ متكامل',en:'A well-rounded knight'})
  ];
  var C2 = { note:{ar:'السنة الأولى: خطة الـ١٢ شهرًا أعلاه. السنة الثانية: إتقانٌ وقيادة — يُعلّم الطفل غيره ويُتمّ الرحلات.',en:'Year 1: the 12-month plan above. Year 2: mastery & leadership — the child teaches others and completes the journeys.'},
    y2:[
      row({ar:'ف١',en:'T1'},'🔬',{ar:'إتقانُ العقيدة',en:'Mastering creed'},{ar:'إتمام كل رحلات منارة العقيدة العشر',en:'Complete all 10 Faith-Minaret journeys'},{ar:'منارة مكتملة',en:'Minaret completed'}),
      row({ar:'ف٢',en:'T2'},'🕋',{ar:'إتقانُ العبادة',en:'Mastering worship'},{ar:'إتمام رحلات الواحة الست',en:'Complete the 6 Oasis journeys'},{ar:'واحة مكتملة',en:'Oasis completed'}),
      row({ar:'ف٣',en:'T3'},'📜',{ar:'حفظُ ما تيسّر',en:'Memorizing onward'},{ar:'الانتقال من جزء عمّ إلى ما قبله (تبارك...)',en:'Move from Juz \u2019Amma backward (Tabarak\u2026)'},{ar:'جزءان فأكثر',en:'Two+ juz'}),
      row({ar:'ف٤',en:'T4'},'🕌',{ar:'الأربعون كاملة',en:'The full 40 Hadith'},{ar:'إتمام الأربعين النووية حفظًا وفهمًا',en:'Complete the 40 Hadith, memorized & understood'},{ar:'حافظٌ للأربعين',en:'Memorized the 40'}),
      row({ar:'ف٥',en:'T5'},'🔭',{ar:'إتقانُ الأكاديمية',en:'Mastering the Academy'},{ar:'إتمام رحلات الأكاديمية + بحثٌ موسّع',en:'Complete Academy journeys + a larger research'},{ar:'باحثٌ صغير',en:'A young researcher'}),
      row({ar:'ف٦',en:'T6'},'🤝',{ar:'خدمةُ الأمة',en:'Serving the ummah'},{ar:'مبادرةٌ حقيقية للأقصى أو المحتاجين',en:'A real initiative for Al-Aqsa or the needy'},{ar:'أثرٌ ملموس',en:'A tangible impact'}),
      row({ar:'ف٧',en:'T7'},'👨‍🏫',{ar:'يُعلّمُ غيره',en:'He teaches others'},{ar:'يشرح ركنًا لإخوته أو أصدقائه',en:'Teaches a corner to siblings or friends'},{ar:'مُعلّمٌ صغير',en:'A little teacher'}),
      row({ar:'ف٨',en:'T8'},'🎓',{ar:'التخرّجُ الكبير',en:'The grand graduation'},{ar:'مراجعةٌ شاملة + شهادة إتمام المدينة',en:'Full review + City-completion certificate'},{ar:'خرّيجُ المدينة',en:'City graduate'})
    ] };

  R.tracks = [
    { id:'a', ic:'🌱', c:'#27AE60', age:'4–6', nm:{ar:'البراعم',en:'Little Sprouts'},
      pace:{ar:'١٠–١٥ دقيقة · أغلب الأيام · باللعب والتكرار',en:'10\u201315 min · most days · play & repetition'},
      about:{ar:'في هذا العمر نزرع الحبّ لا المعلومة: حبُّ الله، حبُّ الصلاة، حبُّ القرآن، وأخلاقٌ جميلة عبر القصة واللعب. لا اختبارات ولا ضغط.',en:'At this age we plant love, not information: love of Allah, of prayer, of the Qur\u2019an, and beautiful manners through story & play. No tests, no pressure.'},
      one:A1, two:A2 },
    { id:'b', ic:'🧱', c:'#2980B9', age:'7–9', nm:{ar:'البُناة',en:'Young Builders'},
      pace:{ar:'٢٠–٣٠ دقيقة · ٥–٦ أيام أسبوعيًّا',en:'20\u201330 min · 5\u20136 days a week'},
      about:{ar:'سنُّ بناء العادات: صلاةٌ منتظمة، وردٌ قرآني، وخُلُقٌ كلَّ أسبوع. يربط الطفل بين ما يتعلّمه في الموقع وما يعيشه في بيته.',en:'The habit-building age: regular prayer, a Qur\u2019an portion, a manner each week. The child links what he learns on the site to what he lives at home.'},
      one:B1, two:B2 },
    { id:'c', ic:'🛡️', c:'#8E44AD', age:'10–12', nm:{ar:'الفرسان',en:'Knights'},
      pace:{ar:'٣٠–٤٥ دقيقة · يوميًّا · مع نقاشٍ وبرهان',en:'30\u201345 min · daily · with discussion & evidence'},
      about:{ar:'سنُّ الفهم والقناعة: نبني العقيدة بالبرهان، ونعمّق العبادة بالفقه، ونوقظ الهمّة للأمة. الطفل شريكٌ في التخطيط لا متلقٍّ فقط.',en:'The age of understanding & conviction: creed built on proof, worship deepened by fiqh, concern for the ummah awakened. The child becomes a planning partner, not just a recipient.'},
      one:C1, two:C2 }
  ];

  /* ── parent golden rules ── */
  R.rules = [
    { ic:'🧭', t:{ar:'القدوة قبل الكلمة',en:'Example before words'}, d:{ar:'طفلك يقلّدك أكثر مما يسمعك. عِشْ ما تريده منه.',en:'Your child copies you more than he hears you. Live what you want from him.'} },
    { ic:'🐢', t:{ar:'القليل الدائم',en:'A little, consistently'}, d:{ar:'خمس دقائق كل يوم خيرٌ من ساعةٍ تنقطع. الاستمرار هو السرّ.',en:'Five minutes daily beats an hour that stops. Consistency is the secret.'} },
    { ic:'💛', t:{ar:'الحبُّ أولًا',en:'Love first'}, d:{ar:'اربط الدين بالفرح والأمان، لا بالخوف والعقاب.',en:'Tie faith to joy & safety, never to fear & punishment.'} },
    { ic:'⭐', t:{ar:'احتفِ بالخطوة',en:'Celebrate each step'}, d:{ar:'استخدم نقاط السلوك والشهادات في الموقع لتثبيت العادة.',en:'Use the site\u2019s behaviour points & certificates to lock in habits.'} },
    { ic:'🤲', t:{ar:'الدعاء سلاحك',en:'Du\u2019a is your weapon'}, d:{ar:'ادعُ لولدك بالهداية والصلاح في كل سجود.',en:'Pray for your child\u2019s guidance & righteousness in every sujood.'} },
    { ic:'🪟', t:{ar:'لكلِّ طفلٍ بابه',en:'Each child, his own door'}, d:{ar:'اختر المسار حسب عمره وميوله، ولا تقارنه بإخوته.',en:'Pick the track by his age & bent; never compare him to siblings.'} }
  ];

  window.ROADMAP = R;
})();
