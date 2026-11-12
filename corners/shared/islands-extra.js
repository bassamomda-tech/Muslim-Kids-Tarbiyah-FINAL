/* islands-extra.js — content for the adventure layer of «عالم الجزر» (islands.html).
   WHY   : the ayah/hadith that closes each island — ids of the already-reviewed texts in my-day-data.js.
   QUIZ  : three quick questions per island (asked once the island is lit) → the island's badge.
   PARENT: one question to ask at home + one thing to do together.
   DREAMS: «حين أكبر» — the child's dream marks the stations that lead to it.
   VISITS: ships that visit from Muslim lands (one short, well-known fact each). */
window.MK_ISL = {
  WHY: { start: 'h24', quran: 'h10', dhikr: 'h39', games: 'h36', stories: 'h37', brain: 'a14', lab: 'a19', skills: 'h29', aqeeda: 'a01', heroes: 'h30', district: 'h25', ummah: 'a10', academy: 'h35' },
  /* [question ar, en, options ar, options en] — the FIRST option is the right one (shown shuffled) */
  QUIZ: {
    start: [['بماذا نبدأ كلَّ عملٍ طيّب؟', 'How do we begin every good deed?', ['بسم الله', 'بالاستعجال', 'بالتأجيل'], ['With Bismillah', 'In a rush', 'By putting it off']],
      ['ما الذي يجعل العمل الصغير عظيمًا عند الله؟', 'What makes a small deed great with Allah?', ['النيّة الصالحة', 'أن يراه الناس', 'أن يكون صعبًا'], ['A good intention', 'People seeing it', 'Being difficult']],
      ['كم خطوةً في «يومي»؟', 'How many steps are in "My Day"?', ['خمس', 'ثلاث', 'عشر'], ['Five', 'Three', 'Ten']]],
    quran: [['ما أوّل سورةٍ في المصحف؟', 'Which surah comes first in the mushaf?', ['الفاتحة', 'الناس', 'الإخلاص'], ['Al-Fatihah', 'An-Nas', 'Al-Ikhlas']],
      ['«خيرُكم من تعلَّم القرآن و…»', '"The best of you are those who learn the Quran and…"', ['علَّمه', 'نسيه', 'أخفاه'], ['teach it', 'forget it', 'hide it']],
      ['كيف نقرأ القرآن؟', 'How do we read the Quran?', ['على مهلٍ وبأدب', 'بسرعةٍ شديدة', 'ونحن نلعب'], ['Slowly and with respect', 'Very fast', 'While playing']]],
    dhikr: [['كم صلاةً مفروضةً في اليوم والليلة؟', 'How many obligatory prayers are there each day?', ['خمس', 'ثلاث', 'سبع'], ['Five', 'Three', 'Seven']],
      ['ماذا نقول بعد العطاس؟', 'What do we say after sneezing?', ['الحمد لله', 'سبحان الله', 'الله أكبر'], ['Alhamdulillah', 'SubhanAllah', 'Allahu Akbar']],
      ['ماذا نفعل قبل الصلاة؟', 'What do we do before the prayer?', ['نتوضّأ', 'نأكل', 'نركض'], ['Make wudu', 'Eat', 'Run']]],
    games: [['اللاعبُ المسلم…', 'A Muslim player…', ['صادقٌ لا يغشّ', 'يغضب إذا خسر', 'يسخر من غيره'], ['is honest and never cheats', 'gets angry when losing', 'mocks others']],
      ['كم حرفًا في اللغة العربية؟', 'How many letters are in the Arabic alphabet?', ['٢٨', '٢٠', '٣٥'], ['28', '20', '35']],
      ['ماذا نقول إذا فاز صديقُنا؟', 'What do we say when our friend wins?', ['ما شاء الله، مبارك!', 'هذا ليس عدلًا', 'لا نقول شيئًا'], ['MashaAllah, well done!', "That's not fair", 'Nothing']]],
    stories: [['مَن خاتَمُ الأنبياء؟', 'Who is the last of the prophets?', ['محمّد ﷺ', 'موسى عليه السلام', 'نوح عليه السلام'], ['Muhammad ﷺ', 'Musa, peace be upon him', 'Nuh, peace be upon him']],
      ['ماذا نقول عند ذكر النبيّ؟', 'What do we say when the Prophet is mentioned?', ['صلّى الله عليه وسلّم', 'ما شاء الله', 'إن شاء الله'], ['Peace and blessings be upon him', 'MashaAllah', 'InshaAllah']],
      ['لماذا نقرأ قصص الصالحين؟', 'Why do we read stories of the righteous?', ['لنقتدي بهم', 'لنقضي الوقت فقط', 'لنحفظ الأسماء فقط'], ['To follow their example', 'Only to pass time', 'Only to learn names']]],
    brain: [['ما الأفضل قبل أن تلعب نقلتك؟', 'What is best before you make your move?', ['أن أفكّر', 'أن أستعجل', 'أن أُغمض عينيّ'], ['To think', 'To rush', 'To close my eyes']],
      ['٢ ، ٤ ، ٦ ، … ؟', '2, 4, 6, … ?', ['٨', '٧', '١٠'], ['8', '7', '10']],
      ['إذا أخطأتُ في لعبة…', 'If I make a mistake in a game…', ['أحاول من جديد', 'أترك اللعب', 'أغضب'], ['I try again', 'I quit', 'I get angry']]],
    lab: [['ماذا يحتاج النبات ليصنع غذاءه؟', 'What does a plant need to make its food?', ['ضوءًا وماءً وهواءً', 'ظلامًا فقط', 'ملحًا وسكّرًا'], ['Light, water and air', 'Only darkness', 'Salt and sugar']],
      ['ما العضو الذي يضخّ الدم في الجسم؟', 'Which organ pumps blood around the body?', ['القلب', 'المعدة', 'الرئة'], ['The heart', 'The stomach', 'The lung']],
      ['مِن أين ينزل المطر؟', 'Where does rain fall from?', ['من السحاب', 'من الجبال', 'من القمر'], ['From the clouds', 'From the mountains', 'From the moon']]],
    skills: [['التاجرُ الأمين…', 'An honest merchant…', ['يصدُق في البيع', 'يُخفي العيب', 'يرفع السعر بالكذب'], ['tells the truth when selling', 'hides faults', 'lies to raise the price']],
      ['«الإحسان» في العمل معناه…', '"Ihsan" in work means…', ['أن أُتقنه', 'أن أُنهيه بسرعة', 'أن أتركه لغيري'], ['doing it with excellence', 'finishing fast', 'leaving it to others']],
      ['ماذا نفعل بجزءٍ من مالنا؟', 'What do we do with part of our money?', ['نتصدّق وندّخر', 'نُنفقه كلَّه', 'نُخفيه دائمًا'], ['Give charity and save', 'Spend it all', 'Always hide it']]],
    aqeeda: [['مَن خلقنا وخلق كلَّ شيء؟', 'Who created us and everything?', ['الله', 'الناس', 'الطبيعة'], ['Allah', 'People', 'Nature']],
      ['كم إلهًا نعبد؟', 'How many gods do we worship?', ['إلهًا واحدًا', 'اثنين', 'كثيرًا'], ['One God', 'Two', 'Many']],
      ['مِمَّ خُلقت الملائكة؟', 'What were the angels created from?', ['من نور', 'من طين', 'من ماء'], ['Light', 'Clay', 'Water']]],
    heroes: [['القويُّ حقًّا هو…', 'The truly strong person is…', ['من يملك نفسه عند الغضب', 'من يضرب غيره', 'من يصرخ أعلى'], ['the one who controls himself when angry', 'the one who hits others', 'the one who shouts loudest']],
      ['إلى أين هاجر النبيّ ﷺ من مكّة؟', 'Where did the Prophet ﷺ migrate to from Makkah?', ['المدينة', 'القدس', 'دمشق'], ['Madinah', 'Jerusalem', 'Damascus']],
      ['إذا أخطأتُ في حقّ أحد…', 'If I wrong someone…', ['أعتذر له', 'أتجاهله', 'ألومه'], ['I say sorry', 'I ignore them', 'I blame them']]],
    district: [['ماذا نقول عند لقاء المسلم؟', 'What do we say when we meet a Muslim?', ['السلام عليكم', 'مع السلامة', 'تصبح على خير'], ['As-salamu alaykum', 'Goodbye', 'Good night']],
      ['بأيّ يدٍ نأكل؟', 'Which hand do we eat with?', ['اليمنى', 'اليسرى', 'لا فرق'], ['The right', 'The left', 'Either']],
      ['حقُّ الجار علينا…', "Our neighbour's right is…", ['أن نُحسن إليه', 'أن نُزعجه', 'أن نتجاهله'], ['that we are good to them', 'to disturb them', 'to ignore them']]],
    ummah: [['أين المسجد الأقصى؟', 'Where is al-Aqsa Mosque?', ['في القدس', 'في مكّة', 'في المدينة'], ['In Jerusalem', 'In Makkah', 'In Madinah']],
      ['إلى أين يتّجه المسلمون في صلاتهم؟', 'Which way do Muslims face in prayer?', ['إلى الكعبة', 'إلى الشمس', 'إلى أيّ جهة'], ['Towards the Ka\'bah', 'Towards the sun', 'Any way']],
      ['المسلمون في كلّ العالم…', 'Muslims all over the world are…', ['إخوة', 'غرباء', 'متنافسون'], ['brothers and sisters', 'strangers', 'rivals']]],
    academy: [['ما أوّل كلمةٍ نزلت من القرآن؟', 'What was the first word of the Quran revealed?', ['اقرأ', 'قُل', 'اكتب'], ['Read', 'Say', 'Write']],
      ['مَن وضع أُسس علم الجبر؟', 'Who laid the foundations of algebra?', ['الخوارزمي', 'ابن بطّوطة', 'المعمار سنان'], ['Al-Khwarizmi', 'Ibn Battuta', 'Mimar Sinan']],
      ['ماذا درس ابن الهيثم؟', 'What did Ibn al-Haytham study?', ['الضوء والرؤية', 'الطبخ', 'الزراعة'], ['Light and vision', 'Cooking', 'Farming']]]
  },
  /* [ask ar, ask en, together ar, together en] */
  PARENT: {
    start: ['ما الشيء الذي تتمنّى أن تتعلّمه هذا الشهر؟', 'What is one thing you wish to learn this month?', 'اكتبا معًا نيّةً واحدة للأسبوع وعلّقاها على الثلّاجة.', 'Write one intention for the week together and put it on the fridge.'],
    quran: ['أيُّ آيةٍ تحبّها أكثر؟ ولماذا؟', 'Which ayah do you love most, and why?', 'اقرآ معًا صفحةً بعد صلاة المغرب.', 'Read a page together after Maghrib.'],
    dhikr: ['متى تشعر أنّ قلبك قريبٌ من الله؟', 'When do you feel your heart is close to Allah?', 'صلِّيا ركعتين معًا في البيت.', 'Pray two rak\'ahs together at home.'],
    games: ['ما اللعبة التي علّمتك شيئًا جديدًا؟', 'Which game taught you something new?', 'العبا معًا لعبةً بلا شاشة عشر دقائق.', 'Play a screen-free game together for ten minutes.'],
    stories: ['مَن الشخصية التي أعجبتك في قصّة اليوم؟ وبماذا؟', 'Who did you admire in today\'s story, and why?', 'احكِ لطفلك قصّةً من طفولتك.', 'Tell your child a story from your own childhood.'],
    brain: ['ما أصعب مسألةٍ حللتَها؟ وكيف؟', 'What was the hardest puzzle you solved, and how?', 'حُلّا لغزًا أو العبا شطرنجًا معًا.', 'Solve a puzzle or play chess together.'],
    lab: ['ما الذي أدهشك في خلق الله اليوم؟', 'What amazed you in Allah\'s creation today?', 'أجريا تجربةً بسيطة في المطبخ وراقباها.', 'Do a simple kitchen experiment and watch it together.'],
    skills: ['ما العمل الذي تحبّ أن تُتقنه حين تكبر؟', 'What work would you love to master when you grow up?', 'علِّم طفلك مهارةً منزليّة واحدة هذا الأسبوع.', 'Teach your child one home skill this week.'],
    aqeeda: ['ما النعمة التي تشكر الله عليها اليوم؟', 'Which blessing do you thank Allah for today?', 'تأمّلا السماء ليلًا وتحدّثا عن عظمة الخالق.', 'Look at the night sky and talk about the greatness of the Creator.'],
    heroes: ['مَن قدوتُك؟ وما الصفة التي تحبّها فيه؟', 'Who is your role model, and which trait do you love in them?', 'اقرآ معًا موقفًا من السيرة قبل النوم.', 'Read one moment from the Seerah together before bed.'],
    district: ['مَن الذي أسعدتَه اليوم؟', 'Whom did you make happy today?', 'زورا جارًا أو قريبًا معًا.', 'Visit a neighbour or relative together.'],
    ummah: ['أيُّ بلدٍ مسلم تحبّ أن تزوره؟', 'Which Muslim country would you love to visit?', 'ضعا معًا صدقةً في صندوق، وادعوا للمسلمين.', 'Put charity in a box together and make du\'a for Muslims.'],
    academy: ['لو اخترعتَ شيئًا ينفع الناس، ماذا يكون؟', 'If you invented something useful, what would it be?', 'اصنعا معًا شيئًا بسيطًا من موادّ البيت.', 'Build something simple together from things at home.']
  },
  /* [id, icon, ar, en, pattern matched against the station link] */
  DREAMS: [
    ['hafiz', '📖', 'حافظًا للقرآن', 'A hafiz of the Quran', 'wird|quran|voices|fiqh'],
    ['doctor', '🩺', 'طبيبًا', 'A doctor', 'doctor|heart|digestion|breathing|sport'],
    ['scientist', '🔭', 'عالِمًا', 'A scientist', 'scientist|lab/|yaqeen|academy'],
    ['engineer', '🏗️', 'مهندسًا', 'An engineer', 'engineer|maker|coder|blocks|tangram|workshop'],
    ['teacher', '🍎', 'معلّمًا', 'A teacher', 'stories|faqih|khataba|names-cards|akhlaq'],
    ['merchant', '🛒', 'تاجرًا أمينًا', 'An honest merchant', 'merchant|money|hasanat'],
    ['farmer', '🌾', 'مزارعًا', 'A farmer', 'farmer|plant|garden|water-cycle'],
    ['explorer', '🧭', 'رحّالةً', 'An explorer', 'historian|tours|atlas|landmarks|quds|day-night']
  ],
  VISITS: [
    ['🇮🇩', 'إندونيسيا', 'Indonesia', 'أكبرُ بلدٍ مسلم في عدد السكّان، وهو آلافُ الجزر!', 'The country with the most Muslims in the world — and it is thousands of islands!'],
    ['🇹🇷', 'تركيا', 'Türkiye', 'في إسطنبول جامع السليمانية الذي بناه المعمار سنان.', 'In Istanbul stands the Suleymaniye Mosque, built by Mimar Sinan.'],
    ['🇲🇦', 'المغرب', 'Morocco', 'في مدينة فاس جامع القرويّين، من أقدم دور العلم.', 'In the city of Fez is al-Qarawiyyin, one of the oldest homes of learning.'],
    ['🇪🇬', 'مصر', 'Egypt', 'في القاهرة الجامع الأزهر، وعمره أكثر من ألف سنة.', 'In Cairo is al-Azhar Mosque, more than a thousand years old.'],
    ['🇲🇱', 'مالي', 'Mali', 'في مدينة جِنّي مسجدٌ عظيم مبنيٌّ كلُّه من الطين.', 'In the city of Djenné is a great mosque built entirely of mud.'],
    ['🇺🇿', 'أوزبكستان', 'Uzbekistan', 'فيها بُخارى وسمرقند، ومن بُخارى الإمام البخاري.', 'Home of Bukhara and Samarkand — Imam al-Bukhari came from Bukhara.'],
    ['🇲🇾', 'ماليزيا', 'Malaysia', 'بلدٌ مسلم في جنوب شرق آسيا، عاصمته كوالالمبور.', 'A Muslim country in South-East Asia; its capital is Kuala Lumpur.']
  ]
};
