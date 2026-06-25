// data/prophets.js — Era I · Age of the Prophets (Adam → Isa)
// Map meta only. A station's full lesson lives in data/chapters/<id>.js
window.HISN = window.HISN || {}; HISN.eras = HISN.eras || {};
HISN.eras.prophets = {
  id: 'prophets', order: 1, icon: 'foundation',
  title: { ar: 'عَصرُ الأنبياء', en: 'Age of the Prophets' },
  sub:   { ar: 'من آدم إلى عيسى عليهم السلام', en: 'From Adam to Isa' },
  tier:  { ar: 'الأساس', en: 'The Foundation' },
  blurb: { ar: 'ابدأ من أوّلِ البشر، وتعرّفْ على أنبياءِ اللهِ وقصصِهم العظيمة.',
           en: 'Begin with the first human, and meet the prophets of Allah and their great stories.' },
  accent: '#E0A82A', accent2: '#C2691A',
  // The 25 prophets named in the Qur'an, in chronological order.
  // (Muhammad ﷺ — the 25th — has his own era: the Seerah.)
  nodes: [
    { id:'adam',     icon:'apple',    name:{ar:'آدَم',en:'Adam'},     hon:'عليه السلام', hook:{ar:'كيف خلق الله أوّل إنسان؟',en:'How did Allah create the first human?'} },
    { id:'idris',    icon:'pen',      name:{ar:'إدريس',en:'Idris'},    hon:'عليه السلام', hook:{ar:'أوّل من خطّ بالقلم',en:'The first to write with the pen'} },
    { id:'nuh',      icon:'ark',      name:{ar:'نُوح',en:'Nuh'},       hon:'عليه السلام', hook:{ar:'سفينةٌ تنجو من الطوفان',en:'An ark that survives the flood'} },
    { id:'hud',      icon:'wind',     name:{ar:'هُود',en:'Hud'},       hon:'عليه السلام', hook:{ar:'قومُ عادٍ والريحُ العظيمة',en:'The people of Aad and the great wind'} },
    { id:'salih',    icon:'camel',    name:{ar:'صالِح',en:'Salih'},    hon:'عليه السلام', hook:{ar:'ناقةُ اللهِ المعجزة',en:'The miracle she-camel'} },
    { id:'ibrahim',  icon:'fire',     name:{ar:'إبراهيم',en:'Ibrahim'},hon:'عليه السلام', hook:{ar:'النارُ كانت برداً وسلاماً',en:'The fire became cool and safe'} },
    { id:'ismail',   icon:'kaaba',    name:{ar:'إسماعيل',en:'Ismail'}, hon:'عليه السلام', hook:{ar:'بناءُ الكعبةِ وزمزم',en:'Building the Kaaba & Zamzam'} },
    { id:'lut',      icon:'storm',    name:{ar:'لُوط',en:'Lut'},       hon:'عليه السلام', hook:{ar:'النجاةُ بالإيمان',en:'Saved by faith'} },
    { id:'ishaq',    icon:'gem',      name:{ar:'إسحاق',en:'Ishaq'},    hon:'عليه السلام', hook:{ar:'البشارةُ بالغلامِ الحليم',en:'The glad tidings of a gentle son'} },
    { id:'yaqub',    icon:'crescent', name:{ar:'يَعقوب',en:'Yaqub'},   hon:'عليه السلام', hook:{ar:'الصبرُ الجميلُ على فِراقِ يوسف',en:'Beautiful patience over losing Yusuf'} },
    { id:'yusuf',    icon:'star',     name:{ar:'يُوسُف',en:'Yusuf'},   hon:'عليه السلام', hook:{ar:'الحلمُ والجبُّ وعزيزُ مصر',en:'The dream, the well, and Egypt'} },
    { id:'shuayb',   icon:'compass',  name:{ar:'شُعَيب',en:'Shuayb'},  hon:'عليه السلام', hook:{ar:'خطيبُ الأنبياءِ وأَوفُوا الكيل',en:'The orator who taught honest scales'} },
    { id:'ayyub',    icon:'leaf',     name:{ar:'أيُّوب',en:'Ayyub'},   hon:'عليه السلام', hook:{ar:'أصبرُ الناسِ على البلاء',en:'The most patient in hardship'} },
    { id:'dhulkifl', icon:'shield',   name:{ar:'ذو الكِفل',en:'Dhul-Kifl'}, hon:'عليه السلام', hook:{ar:'تكفّلَ بالخيرِ فوفى',en:'He pledged to do good and kept it'} },
    { id:'musa',     icon:'staff',    name:{ar:'مُوسى',en:'Musa'},     hon:'عليه السلام', hook:{ar:'العصا ينشقُّ بها البحر',en:'The staff that split the sea'} },
    { id:'harun',    icon:'book',     name:{ar:'هارون',en:'Harun'},    hon:'عليه السلام', hook:{ar:'لسانُ موسى وأخوه الوزير',en:"Musa's voice and helper brother"} },
    { id:'dawud',    icon:'mountain', name:{ar:'داوُد',en:'Dawud'},    hon:'عليه السلام', hook:{ar:'تسبّحُ معه الجبال',en:'Mountains glorify with him'} },
    { id:'sulayman', icon:'crown',    name:{ar:'سُليمان',en:'Sulayman'},hon:'عليه السلام', hook:{ar:'مُلكٌ يكلّمُ الطيرَ والنمل',en:'A king who spoke to birds and ants'} },
    { id:'ilyas',    icon:'mount',    name:{ar:'إلياس',en:'Ilyas'},    hon:'عليه السلام', hook:{ar:'دعوةٌ ضدَّ عبادةِ الأصنام',en:'A stand against idol worship'} },
    { id:'alyasa',   icon:'light',    name:{ar:'اليَسَع',en:'Al-Yasa'},hon:'عليه السلام', hook:{ar:'النبيُّ الصالحُ المختار',en:'The chosen, righteous prophet'} },
    { id:'yunus',    icon:'whale',    name:{ar:'يُونُس',en:'Yunus'},   hon:'عليه السلام', hook:{ar:'دعاءٌ في بطنِ الحوت',en:'A prayer inside the whale'} },
    { id:'zakariyya',icon:'mosque',   name:{ar:'زكريّا',en:'Zakariyya'},hon:'عليه السلام', hook:{ar:'دعاءٌ خفيٌّ في المِحراب',en:'A whispered prayer in the sanctuary'} },
    { id:'yahya',    icon:'heart',    name:{ar:'يحيى',en:'Yahya'},     hon:'عليه السلام', hook:{ar:'حِكمةٌ وُهِبَها وهو صبيّ',en:'Given wisdom while still a child'} },
    { id:'isa',      icon:'dove',     name:{ar:'عِيسى',en:'Isa'},      hon:'عليه السلام', hook:{ar:'تكلّمَ في المهدِ طفلاً',en:'He spoke as a baby in the cradle'} },
  ],
};

/* ── Timeline view metadata ──────────────────────────────────────────────
   The era page can switch between the Map and a chronological Timeline.
   IMPORTANT: the dates below are APPROXIMATE scholarly estimates only — the
   exact dates of the prophets are known to Allah alone. They are shown with a
   "~" and an on-screen "estimate" note so children understand they are rough. */
HISN.eras.prophets.bands = [
  { id:'first',     label:{ar:'الفجرُ الأوّل',   en:'The First Ages'} },
  { id:'flood',     label:{ar:'بعدَ الطوفان',     en:'After the Flood'} },
  { id:'ibrahim',   label:{ar:'آلُ إبراهيم',      en:'Family of Ibrahim'} },
  { id:'madyan',    label:{ar:'مَدْيَنُ والصبر',  en:'Madyan & Trials'} },
  { id:'israil',    label:{ar:'بنو إسرائيل',      en:'Bani Israil'} },
  { id:'beforeisa', label:{ar:'قُبَيلَ عيسى',     en:'Before Isa'} },
];
HISN.eras.prophets.timelineNote = {
  ar:'التواريخ تقديريّةٌ تقريبيّة — والعلمُ الحقيقيُّ عندَ الله.',
  en:'Dates are rough estimates — true knowledge is with Allah.'
};
(function(tl){ HISN.eras.prophets.nodes.forEach(n=>Object.assign(n, tl[n.id]||{})); })({
  adam:     { band:'first',     when:{ar:'البداية',en:'The beginning'},      place:{ar:'الأرض',en:'Earth'},                    line:{ar:'أوّلُ البشرِ وأبو الناسِ جميعاً',en:'The first human — father of all people'} },
  idris:    { band:'first',     when:{ar:'العصورُ الأولى',en:'Earliest ages'},place:{ar:'بلادٌ قديمة',en:'Ancient lands'},      line:{ar:'من نسلِ آدمَ عليه السلام',en:'From the line of Adam'} },
  nuh:      { band:'flood',     when:{ar:'~ ٣٩٠٠ ق.م',en:'~3900 BCE'},        place:{ar:'بلادُ الرافدين',en:'Mesopotamia'},     line:{ar:'من ذريّةِ آدم — أبو البشرِ بعدَ الطوفان',en:'Of Adam\u2019s line — father of mankind after the Flood'} },
  hud:      { band:'flood',     when:{ar:'~ ٢٤٠٠ ق.م',en:'~2400 BCE'},        place:{ar:'الأحقاف · جزيرةُ العرب',en:'Al-Ahqaf, Arabia'}, line:{ar:'أُرسِلَ إلى قومِ عاد',en:'Sent to the people of Aad'} },
  salih:    { band:'flood',     when:{ar:'~ ٢٠٠٠ ق.م',en:'~2000 BCE'},        place:{ar:'الحِجر · جزيرةُ العرب',en:'Al-Hijr, Arabia'},   line:{ar:'أُرسِلَ إلى قومِ ثمود',en:'Sent to the people of Thamud'} },
  ibrahim:  { band:'ibrahim',   when:{ar:'~ ١٩٠٠ ق.م',en:'~1900 BCE'},        place:{ar:'العراق ← الشام ← مكّة',en:'Iraq → Sham → Makkah'}, line:{ar:'من ذريّةِ نوحٍ عليه السلام',en:'Descendant of Nuh'} },
  ismail:   { band:'ibrahim',   when:{ar:'~ ١٨٥٠ ق.م',en:'~1850 BCE'},        place:{ar:'مكّة',en:'Makkah'},                     line:{ar:'ابنُ إبراهيمَ الأكبر (أمُّه هاجر)',en:'Elder son of Ibrahim'} },
  lut:      { band:'ibrahim',   when:{ar:'~ ١٩٠٠ ق.م',en:'~1900 BCE'},        place:{ar:'سدوم · قُربَ الشام',en:'Sodom, near Sham'},     line:{ar:'ابنُ أخي إبراهيم',en:'Nephew of Ibrahim'} },
  ishaq:    { band:'ibrahim',   when:{ar:'~ ١٨٠٠ ق.م',en:'~1800 BCE'},        place:{ar:'أرضُ كنعان · الشام',en:'Canaan (Sham)'},        line:{ar:'ابنُ إبراهيمَ (أمُّه سارة)',en:'Son of Ibrahim'} },
  yaqub:    { band:'ibrahim',   when:{ar:'~ ١٧٥٠ ق.م',en:'~1750 BCE'},        place:{ar:'كنعان ← مصر',en:'Canaan → Egypt'},      line:{ar:'ابنُ إسحاق — وأبناؤه أسباطُ بني إسرائيل',en:'Son of Ishaq — father of the tribes'} },
  yusuf:    { band:'ibrahim',   when:{ar:'~ ١٧٠٠ ق.م',en:'~1700 BCE'},        place:{ar:'مصر',en:'Egypt'},                       line:{ar:'ابنُ يعقوبَ عليه السلام',en:'Son of Yaqub'} },
  shuayb:   { band:'madyan',    when:{ar:'~ ١٥٠٠ ق.م',en:'~1500 BCE'},        place:{ar:'مَدْيَن · شمالُ الجزيرة',en:'Madyan, NW Arabia'}, line:{ar:'نبيُّ أهلِ مَدْيَن',en:'Sent to the people of Madyan'} },
  ayyub:    { band:'madyan',    when:{ar:'~ ١٥٠٠ ق.م',en:'~1500 BCE'},        place:{ar:'أرضُ الشام',en:'Land of Sham'},          line:{ar:'من ذريّةِ إسحاقَ عليه السلام',en:'Descendant of Ishaq'} },
  dhulkifl: { band:'madyan',    when:{ar:'غيرُ مُحدَّد',en:'Uncertain'},      place:{ar:'الشام',en:'Sham'},                      line:{ar:'نبيٌّ صالحٌ صابر',en:'A righteous, patient prophet'} },
  musa:     { band:'israil',    when:{ar:'~ ١٣٠٠ ق.م',en:'~1300 BCE'},        place:{ar:'مصر ← سيناء',en:'Egypt → Sinai'},       line:{ar:'من بني إسرائيل (سِبطُ لاوي)',en:'Of Bani Israil'} },
  harun:    { band:'israil',    when:{ar:'~ ١٣٠٠ ق.م',en:'~1300 BCE'},        place:{ar:'مصر ← سيناء',en:'Egypt → Sinai'},       line:{ar:'أخو موسى ووزيرُه',en:'Brother of Musa'} },
  dawud:    { band:'israil',    when:{ar:'~ ١٠٠٠ ق.م',en:'~1000 BCE'},        place:{ar:'بيتُ المقدِس',en:'Jerusalem'},          line:{ar:'من بني إسرائيل — مَلِكٌ ونبيّ',en:'Of Bani Israil — king & prophet'} },
  sulayman: { band:'israil',    when:{ar:'~ ٩٦٠ ق.م',en:'~960 BCE'},          place:{ar:'بيتُ المقدِس',en:'Jerusalem'},          line:{ar:'ابنُ داوُدَ عليه السلام',en:'Son of Dawud'} },
  ilyas:    { band:'israil',    when:{ar:'~ ٨٥٠ ق.م',en:'~850 BCE'},          place:{ar:'بَعلبك · الشام',en:'Baalbek, Sham'},    line:{ar:'من بني إسرائيل',en:'Of Bani Israil'} },
  alyasa:   { band:'israil',    when:{ar:'~ ٨٠٠ ق.م',en:'~800 BCE'},          place:{ar:'الشام',en:'Sham'},                      line:{ar:'خليفةُ إلياسَ من بني إسرائيل',en:'Ilyas\u2019s successor, of Bani Israil'} },
  yunus:    { band:'israil',    when:{ar:'~ ٧٧٠ ق.م',en:'~770 BCE'},          place:{ar:'نِينَوى · العراق',en:'Nineveh, Iraq'},  line:{ar:'من بني إسرائيل',en:'Of Bani Israil'} },
  zakariyya:{ band:'beforeisa', when:{ar:'~ القرن ١ ق.م',en:'~1st c. BCE'},   place:{ar:'بيتُ المقدِس',en:'Jerusalem'},          line:{ar:'من بني إسرائيل، كفَلَ مريم',en:'Of Bani Israil; guardian of Maryam'} },
  yahya:    { band:'beforeisa', when:{ar:'~ ١ م',en:'~1 CE'},                 place:{ar:'فلسطين',en:'Palestine'},                line:{ar:'ابنُ زكريّا عليه السلام',en:'Son of Zakariyya'} },
  isa:      { band:'beforeisa', when:{ar:'~ ٤ ق.م – ٣٠ م',en:'~4 BCE–30 CE'}, place:{ar:'بيتُ لحم وفلسطين',en:'Bethlehem & Palestine'}, line:{ar:'ابنُ مريمَ بنتِ عِمران',en:'Son of Maryam'} },
});

/* ───── CERTIFICATE — unlocked when every prophet station is complete ───── */
HISN.eras.prophets.certificate = {
  subtitle: {
    ar: 'تُمنَحُ هذه الشَّهادةُ لِمَن أَتَمَّ رِحلةَ عَصرِ الأنبياء — مِن آدمَ إلى عيسى عليهم السلام',
    en: 'Awarded to those who completed the Age of the Prophets — from Adam to Isa, peace be upon them',
  },
  statement: {
    ar: 'لِإتمامِهِ/إتمامِها رِحلةَ <b>الأنبياءِ المذكورينَ في القرآن</b> — فتعلَّمَ التوحيدَ مع نوح، والتوكُّلَ مع إبراهيم، والصبرَ مع أيّوب، واليقينَ مع يونسَ عليهم السلام.',
    en: 'For completing the journey of <b>the prophets named in the Qur’an</b> — learning tawḥīd with Nuh, trust with Ibrahim, patience with Ayyub, and certainty with Yunus, peace be upon them.',
  },
};
