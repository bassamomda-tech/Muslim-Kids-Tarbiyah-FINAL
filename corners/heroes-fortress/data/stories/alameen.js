// data/stories/alameen.js — Seerah · الصادقُ الأمين (الحجرُ الأسود + الأمانة)
// Sources: ابن هشام · الرحيق المختوم · ابن كثير · حلف الفضول
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.alameen = [
  {
    icon: '💎', scene: 'mosque', character: '🧔', endCharacter: '🤝',
    title: { ar: 'الأمينُ وحِكمةُ الحَجَرِ الأسود', en: 'Al-Amin & the Wisdom of the Black Stone' },
    pages: [
      { scene: 'madinah', character: '🧔',
        text: {
          ar: 'قَبلَ أن يُوحى إليه ﷺ بِسَنَوات، كانَ النّاسُ في مَكّةَ يُنادونَهُ بِلَقَبَين جَميلَين: <b>«الصّادِق»</b> لأنّه لا يَكذِبُ أبداً، و<b>«الأمين»</b> لأنّه يَحفَظُ كُلَّ ما يُؤتَمَنُ عليه.<br><br>كانوا يَترُكونَ عِندَهُ أموالَهُم وأماناتِهِم وهُم مُطمَئِنّونَ، حتّى الَّذينَ سَيُعادونَهُ فيما بَعد! لم يَكُنْ في مَكّةَ كُلِّها رَجُلٌ أصدَقَ ولا أأمَنَ مِن مُحَمَّدٍ ﷺ.',
          en: 'Years before he ﷺ received revelation, the people of Makkah called him by two beautiful titles: <b>"As-Sadiq" (the Truthful)</b> because he never lied, and <b>"Al-Amin" (the Trustworthy)</b> because he guarded everything entrusted to him.<br><br>They would leave their money and valuables with him in complete peace of mind — even those who would later oppose him! In all of Makkah there was no man more truthful or more trustworthy than Muhammad ﷺ.',
        } },
      { scene: 'mosque', character: '🏗️',
        text: {
          ar: 'وذاتَ يَوم، قَرَّرَ أهلُ مَكّةَ أن يُعيدوا بِناءَ <b>الكَعبة</b> المُشرَّفة، لأنَّ السُّيولَ أضعَفَتْ جُدرانَها. اجتَمَعَتِ القَبائلُ كُلُّها، وبَدَأوا يَبنونَ بِأيديهِم، كُلُّ قَبيلةٍ تَبني جُزءاً.<br><br>وعِندَما وَصَلوا إلى مَوضِعِ <b>الحَجَرِ الأسود</b> — وهوَ حَجَرٌ مُبارَكٌ نَزَلَ مِن الجَنّة — وَقَعَ الخِلافُ الكَبير! فكُلُّ قَبيلةٍ أرادَتْ شَرَفَ رَفعِ الحَجَرِ ووَضعِهِ في مَكانِه. قالَ كُلُّ زَعيم: «نَحنُ نَضَعُهُ، لا غَيرُنا!»',
          en: 'One day, the people of Makkah decided to rebuild the honored <b>Kaʿbah</b>, because floods had weakened its walls. All the tribes gathered and began building with their own hands, each tribe building a part.<br><br>But when they reached the place of the <b>Black Stone</b> — a blessed stone that came down from Paradise — a great dispute broke out! Every tribe wanted the honor of lifting the stone and setting it in place. Each chief said: "We will place it, no one else!"',
        } },
      { scene: 'mosque', character: '😠',
        text: {
          ar: 'اشتَدَّ الخِلاف، وكادَتِ القَبائلُ أن تَتَقاتَلَ بِالسُّيوف! أعَدَّ بَعضُهُم السِّلاح، وتَحالَفوا، وأقسَموا. ظَلَّتْ مَكّةُ أيّاماً في خِلافٍ شَديد، والكُلُّ خائفٌ مِن حَربٍ تُدَمِّرُ كُلَّ شَيء.<br><br>ثُمَّ هَدَأوا قَليلاً، واتَّفَقوا على حَلٍّ حَكيم: «أوَّلُ مَن يَدخُلُ علينا مِن بابِ المَسجِدِ، نَجعَلُهُ حَكَماً بَينَنا، ونَرضى بِحُكمِه!» وانتَظَروا جَميعاً، أعيُنُهُم على الباب — مَن سَيَدخُل؟',
          en: 'The dispute grew fierce, and the tribes nearly fought each other with swords! Some prepared weapons, made alliances, and swore oaths. Makkah remained for days in severe conflict, everyone afraid of a war that would destroy everything.<br><br>Then they calmed down a little and agreed on a wise solution: "Whoever enters upon us first through the gate of the Sanctuary, we will make him a judge between us, and accept his ruling!" They all waited, their eyes on the gate — who would enter?',
        },
        choice: {
          q: { ar: 'لماذا اتَّفَقَ النّاسُ على تَحكيمِ أوَّلِ داخِل؟', en: 'Why did the people agree to let the first to enter be their judge?' },
          opts: [
            { t: { ar: 'لِيَتَجَنَّبوا الحَربَ ويَجِدوا حَلّاً عادِلاً', en: 'To avoid war and find a fair solution' }, c: true,
              exp: { ar: 'نَعَم! خافوا الاقتِتالَ فبَحَثوا عن حَكَمٍ يَرضى به الجَميع.', en: 'Yes! They feared fighting, so they sought a judge all would accept.' } },
            { t: { ar: 'لأنَّهُم مَلّوا مِن البِناء', en: 'Because they were bored of building' }, c: false,
              exp: { ar: 'لا — كانوا خائفينَ مِن حَربٍ، لا مَلَلٍ مِن العَمَل.', en: 'No — they feared a war, not boredom with the work.' } },
            { t: { ar: 'لأنَّ الحَجَرَ كانَ ثَقيلاً', en: 'Because the stone was heavy' }, c: false,
              exp: { ar: 'لا — المُشكِلةُ كانَتْ شَرَفَ وَضعِهِ، لا ثِقَلَه.', en: 'No — the problem was the honor of placing it, not its weight.' } },
          ],
        } },
      { scene: 'mosque', character: '😍',
        text: {
          ar: 'وفَجأةً... دَخَلَ مِن البابِ رَجُلٌ! فلمّا رَأَوهُ صاحوا جَميعاً بِفَرَح: <b>«هذا الأمين! رَضِينا! هذا مُحَمَّد!»</b><br><br>فَرِحوا كُلُّهُم، لأنَّهُم يَثِقونَ به جَميعاً، ويَعلَمونَ أنّه لا يَظلِمُ أحَداً. عَرَضوا عليه المُشكِلة: مَن يَضَعُ الحَجَرَ الأسودَ في مَكانِه؟ فَكَّرَ النبيُّ ﷺ بِحِكمَةٍ عَجيبة، ثُمَّ طَلَبَ ثَوباً (رِداءً) ووَضَعَهُ على الأرض، وَوَضَعَ الحَجَرَ الأسودَ في وَسَطِ الثَّوب.',
          en: 'And suddenly... a man entered through the gate! When they saw him, they all cried out with joy: <b>"This is Al-Amin! We are pleased! This is Muhammad!"</b><br><br>They all rejoiced, because they all trusted him and knew he would wrong no one. They presented the problem to him: who would set the Black Stone in its place? The Prophet ﷺ thought with amazing wisdom, then asked for a cloak and laid it on the ground, and placed the Black Stone in the middle of the cloak.',
        } },
      { scene: 'mosque', character: '🤝',
        text: {
          ar: 'ثُمَّ قالَ ﷺ: «لِتَأخُذْ كُلُّ قَبيلةٍ بِطَرَفٍ مِن الثَّوب، وارفَعوهُ جَميعاً!» فأمسَكَ كُلُّ زَعيمٍ بِطَرَف، ورَفَعوا الحَجَرَ مَعاً — كُلُّهُم شارَكوا في الشَّرَف، ولم يَغضَبْ أحَد!<br><br>فلمّا وَصَلوا إلى المَوضِع، مَدَّ النبيُّ ﷺ يَدَهُ الشَّريفةَ بِنَفسِه ووَضَعَ الحَجَرَ في مَكانِه. ففَرِحَتِ القَبائلُ كُلُّها، وزالَ الخِلاف، وعادَ السَّلامُ إلى مَكّة. حَلٌّ واحدٌ حَكيمٌ مَنَعَ حَرباً كَبيرة!',
          en: 'Then he ﷺ said: "Let each tribe take hold of an edge of the cloak, and lift it all together!" So each chief grasped an edge, and they raised the stone together — all of them sharing in the honor, and no one was angry!<br><br>When they reached the spot, the Prophet ﷺ stretched out his own noble hand and set the stone in its place. So all the tribes rejoiced, the dispute vanished, and peace returned to Makkah. One wise solution prevented a great war!',
        } },
      { scene: 'garden', character: '🌟',
        text: {
          ar: 'انظُرْ كيفَ كانَ النبيُّ ﷺ حَكيماً عادِلاً حتّى قَبلَ النُّبوّة! حَلَّ المُشكِلةَ بِطَريقةٍ أرضَتِ الجَميع، فلا غالِبَ ولا مَغلوب. هذه هيَ الحِكمة: أن تَجِدَ حَلّاً يَجمَعُ القُلوبَ ولا يُفَرِّقُها.<br><br>وكانَ ﷺ قَبلَ ذلكَ قد شارَكَ في <b>حِلفِ الفُضول</b> — عَهدٍ تَعاهَدَ فيهِ فِتيانُ مَكّةَ على نُصرةِ المَظلومِ ورَدِّ الحُقوقِ لأصحابِها. وقالَ بَعدَ الإسلام: «لو دُعيتُ إليهِ في الإسلامِ لأجَبت».<br><br>فتَعَلَّمْ مِن الأمين: كُنْ صادقاً، أميناً، حَكيماً، ومُصلِحاً بَينَ النّاس — فهذه أخلاقُ نَبيِّكَ ﷺ.',
          en: 'See how wise and just the Prophet ﷺ was even before prophethood! He solved the problem in a way that pleased everyone — no winner and no loser. This is wisdom: to find a solution that unites hearts rather than dividing them.<br><br>Before that, he ﷺ had joined the <b>Pact of Virtue (Hilf al-Fudul)</b> — a covenant in which the young men of Makkah pledged to support the oppressed and return rights to their owners. After Islam he said: "If I were called to it in Islam, I would respond."<br><br>So learn from Al-Amin: be truthful, trustworthy, wise, and a peacemaker among people — for these are the manners of your Prophet ﷺ.',
        } },
    ],
    quiz: [
      { q: { ar: 'بِأيِّ لَقَبَينِ نادى أهلُ مَكّةَ النبيَّ ﷺ قَبلَ النُّبوّة؟', en: 'By which two titles did Makkah call the Prophet ﷺ before prophethood?' },
        opts: [
          { t: { ar: 'الصّادِقُ الأمين', en: 'The Truthful, the Trustworthy' }, c: true },
          { t: { ar: 'القَويُّ الشُّجاع', en: 'The Strong, the Brave' }, c: false },
          { t: { ar: 'الغَنيُّ الكَريم', en: 'The Rich, the Generous' }, c: false },
        ] },
      { q: { ar: 'كيفَ حَلَّ النبيُّ ﷺ خِلافَ القَبائلِ على الحَجَرِ الأسود؟', en: 'How did the Prophet ﷺ solve the tribes\u2019 dispute over the Black Stone?' },
        opts: [
          { t: { ar: 'وَضَعَ الحَجَرَ في ثَوبٍ ورَفَعوهُ جَميعاً', en: 'He put the stone in a cloak and they lifted it together' }, c: true },
          { t: { ar: 'اختارَ قَبيلةً واحدةً فقط', en: 'He chose only one tribe' }, c: false },
          { t: { ar: 'وَضَعَهُ بِنَفسِهِ دونَ مَشورة', en: 'He placed it himself without consulting' }, c: false },
        ] },
      { q: { ar: 'ما العَهدُ الَّذي شارَكَ فيهِ النبيُّ ﷺ لِنُصرةِ المَظلوم؟', en: 'Which covenant did the Prophet ﷺ join to support the oppressed?' },
        opts: [
          { t: { ar: 'حِلفُ الفُضول', en: 'The Pact of Virtue (Hilf al-Fudul)' }, c: true },
          { t: { ar: 'صُلحُ الحُديبية', en: 'The Treaty of Hudaybiyyah' }, c: false },
          { t: { ar: 'بَيعةُ العَقَبة', en: 'The Pledge of Aqabah' }, c: false },
        ] },
    ],
    moral: { ar: 'الصِّدقُ والأمانةُ والحِكمةُ تَجعَلُ النّاسَ يُحِبّونَكَ ويَثِقونَ بِك — وأفضَلُ الحُلولِ ما جَمَعَ القُلوبَ ولم يُفَرِّقْها.', en: 'Truthfulness, trustworthiness and wisdom make people love and trust you — and the best solution is the one that unites hearts rather than dividing them.' },
    badge: { icon: '💎', title: { ar: 'الحَكيمُ الأمين', en: 'The Wise & Trustworthy' } },
    reflect: [
      { ar: 'حينَ يَختَلِفُ أصدقاؤُك، كيفَ تَجِدُ حَلّاً يُرضي الجَميع؟', en: 'When your friends disagree, how can you find a solution that pleases everyone?' },
      { ar: 'لماذا وَثِقَ أهلُ مَكّةَ بِالنبيِّ ﷺ حتّى أعداؤُه؟', en: 'Why did the people of Makkah trust the Prophet ﷺ — even his opponents?' },
      { ar: 'كيفَ تَكونُ أنتَ «أميناً» في بَيتِكَ ومَدرَسَتِك؟', en: 'How can you be "trustworthy" at home and at school?' },
    ],
    didYouKnow: [
      { ar: 'قِصّةُ تَحكيمِ النبيِّ ﷺ في الحَجَرِ الأسودِ كانَتْ وعُمرُهُ نَحوُ ٣٥ سنة، قَبلَ النُّبوّةِ بِخَمسِ سَنَوات. — المصدر: ابن هشام', en: 'The Prophet ﷺ arbitrated the Black Stone at about age 35, five years before prophethood. — Source: Ibn Hisham' },
      { ar: 'الحَجَرُ الأسودُ نَزَلَ مِن الجَنّةِ كما أخبَرَ النبيُّ ﷺ. — رواه الترمذي ٨٧٧', en: 'The Black Stone descended from Paradise, as the Prophet ﷺ told us. — Tirmidhi 877' },
      { ar: 'حِلفُ الفُضولِ كانَ عَهداً لِنُصرةِ المَظلومِ، وأثنى عليه النبيُّ ﷺ بَعدَ الإسلام. — المصدر: البيهقي', en: 'Hilf al-Fudul was a pact to support the oppressed, which the Prophet ﷺ praised after Islam. — Source: Al-Bayhaqi' },
    ],
  },
];
