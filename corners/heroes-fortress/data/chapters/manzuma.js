// data/chapters/manzuma.js — Seerah · المنظومة المنيرة (audio poem station)
// ───────────────────────────────────────────────────────────────────────────
// VERSES: transcribed from «المنيرة في مهمّ علم السيرة» — نظم صالح بن عبد الله العصيمي.
// 20 أبيات (rajaz). Each verse below shows the full بيت: الصدر … العجز.
//
// TO FINISH: add the recitation audio at  History Corner/assets/manzuma.mp3
//   then fine-tune each verse's `t` (start-second) so the karaoke highlight lands
//   on cue. Until the file is there, the station shows a gentle "audio coming soon"
//   note and the verses stay fully readable. Timings below are estimates (~8s each).
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.manzuma = {
  id: 'manzuma', era: 'seerah', icon: 'crescent',
  name: { ar: 'المنظومة المنيرة', en: 'The Luminous Seerah Poem' },
  tag:  { ar: 'نَظمٌ مُيسَّرٌ في سيرةِ النبيِّ ﷺ — اسمعْ وردِّد', en: 'A simple poem of the Prophet’s ﷺ life — listen & repeat' },
  accent: '#7C5CCF', accent2: '#9A72CF',
  greeting: { ar: 'مرحباً يا بطل! هذه منظومةٌ جميلةٌ تحكي سيرةَ حبيبِنا ﷺ نَظماً. أنصِتْ إليها، ثم ردِّدْها معي حتى تحفظَها فتُحبَّه أكثر 🎵', en: "Welcome, hero! This is a beautiful poem telling the life of our beloved ﷺ in verse. Listen, then repeat with me until you memorize it and love him even more 🎵" },

  manzuma: {
    audio: 'assets/manzuma.mp3',
    reciter: { ar: '', en: '' },          // e.g. { ar:'ابن النفيس', en:'Ibn an-Nafis' }
    audioPending: true,                    // set false once assets/manzuma.mp3 is added
    intro: {
      ar: 'هيّا نستمعُ معاً إلى «المنظومةِ المنيرة» 🎵 اضغطْ زرَّ التشغيل، وتابِعِ البيتَ المُضيءَ بعينَيك، وردِّدْ خلفَه. وإن صعُبتْ كلمةٌ، فاضغطْ عليها لِتعرفَ معناها.',
      en: 'Let’s listen together to “The Luminous Poem” 🎵 Press play, follow the glowing verse with your eyes, and repeat after it. If a word is hard, tap it to learn its meaning.'
    },
    verses: [
      { t:0,   ar:'بِحَمْدِ رَبِّي أَبْدَأُ الْمُنِيرَهْ ❁ ثُمَّ الصَّلَاةُ وَالسَّلَامُ السِّيرَهْ',
        en:'With praise of my Lord I begin “Al-Munirah,” then prayers and peace — this is the life-story.',
        gloss:[ {w:{ar:'الْمُنِيرَهْ',en:'Al-Munirah'}, m:{ar:'اسمُ هذه المنظومة، ومعناها: المُضيئة',en:'the name of this poem — “the luminous one”'}},
                {w:{ar:'السِّيرَهْ',en:'as-Sirah'}, m:{ar:'قصةُ حياةِ النبيِّ ﷺ',en:'the life-story of the Prophet ﷺ'}} ] },
      { t:8,   ar:'عَلَى نَبِيٍّ آسْمُهُ مُحَمَّدْ ❁ أَبُوهُ عَبْدُ اللهِ مِنْهُ مُفْرَدْ',
        en:'Upon a Prophet whose name is Muhammad; his father is Abdullah — he was left orphaned of him.',
        gloss:[ {w:{ar:'مُفْرَدْ',en:'mufrad'}, m:{ar:'وحيداً يتيماً، فقد ماتَ أبوه قبلَ وِلادتِه',en:'left alone/orphaned — his father died before his birth'}} ] },
      { t:16,  ar:'وَجَدُّهُ شَيْبَةُ عَبْدُ الْمُطَّلِبْ ❁ مِنْ نَسْلِ عَدْنَانَ وَأَصْلُهُ الْعَرَبْ',
        en:'His grandfather is Shaybah (Abd al-Muttalib), from the line of Adnan, and his origin is Arab.',
        gloss:[ {w:{ar:'عَدْنَانَ',en:'Adnan'}, m:{ar:'جَدٌّ كبيرٌ للعرب، من نسلِه النبيُّ ﷺ',en:'a great forefather of the Arabs in the Prophet’s ﷺ lineage'}} ] },
      { t:24,  ar:'وَأُمُّهُ بِنْتُ لِوَهْبٍ آمِنَهْ ❁ أَجْدَادُهُ بَيْنَ قُرَيْشٍ كَائِنَهْ',
        en:'His mother is Aminah bint Wahb; his forefathers are among Quraysh.' },
      { t:32,  ar:'مَوْلِدُهُ فِي الْبَلَدِ الْأَمِينِ ❁ عَامَ قُدُومِ الْفِيلِ لِلتَّبْيِينِ',
        en:'His birth was in the secure land, in the Year of the Elephant — to make it clear.',
        gloss:[ {w:{ar:'الْبَلَدِ الْأَمِينِ',en:'the secure land'}, m:{ar:'مكةُ المكرَّمة',en:'Makkah'}},
                {w:{ar:'عَامَ الْفِيلِ',en:'Year of the Elephant'}, m:{ar:'العامُ الذي جاء فيه أصحابُ الفيلِ لِهدمِ الكعبة',en:'the year the army with the elephant came to destroy the Ka‘bah'}} ] },
      { t:40,  ar:'فِي يَوْمِ الِاثْنَيْنِ رَبِيعِ الْأَوَّلِ ❁ فِي ثَانِي عَشْرِهِ حِسَابًا عَوِّلِ',
        en:'On Monday, in Rabi‘ al-Awwal; on its twelfth, by reckoning, rely.' },
      { t:48,  ar:'مُسْتَرْضَعًا أَتَمَّ مَعَ حَلِيمَهْ ❁ أَرْبَعَةَ الْأَعْوَامِ فِي غَنِيمَهْ',
        en:'Suckled, he completed with Halimah four years in blessing.',
        gloss:[ {w:{ar:'مُسْتَرْضَعًا',en:'nursed'}, m:{ar:'أُرضِعَ عند حليمةَ السعديةِ في البادية',en:'he was nursed by Halimah as-Sa‘diyyah in the desert'}} ] },
      { t:56,  ar:'وَأُمُّهُ عَقِيبَ سِتٍّ مَاتَتْ ❁ وَجَدُّهُ بَعْدَ ثَمَانٍ وَافَتْ',
        en:'His mother died when he was six; his grandfather passed when he was eight.',
        gloss:[ {w:{ar:'عَقِيبَ',en:'‘aqib'}, m:{ar:'بَعْدَ، عَقِبَ',en:'after'}} ] },
      { t:64,  ar:'ثُمَّ أَبُو طَالِبٍ عَمُّهُ كَفَلْ ❁ وَزَارَ بُصْرَى الشَّامِ مَعْهُ وَارْتَحَلْ',
        en:'Then his uncle Abu Talib took care of him; he traveled and visited Busra of Sham with him.',
        gloss:[ {w:{ar:'كَفَلْ',en:'kafal'}, m:{ar:'رَعاهُ واعتنى به',en:'cared for and raised him'}},
                {w:{ar:'بُصْرَى',en:'Busra'}, m:{ar:'مدينةٌ في بلادِ الشام',en:'a city in Greater Syria (Sham)'}} ] },
      { t:72,  ar:'مِنْ بَعْدِهِ مُتَّجِرًا فِي مَالِ ❁ خَدِيجَةٍ فَزَوْجُهُ فِي التَّالِي',
        en:'Afterwards, trading with the wealth of Khadijah — and she became his wife thereafter.',
        gloss:[ {w:{ar:'مُتَّجِرًا',en:'trading'}, m:{ar:'يعملُ بالتجارةِ والبيعِ والشراء',en:'working in trade — buying and selling'}} ] },
      { t:80,  ar:'وَفِي تَمَامِ أَرْبَعِينَ أُرْسِلَا ❁ لِلنَّاسِ يَهْدِيهِمْ لِدِينٍ حُمِّلَا',
        en:'At the full age of forty he was sent to people, to guide them to a religion he was entrusted with.',
        gloss:[ {w:{ar:'أُرْسِلَا',en:'was sent'}, m:{ar:'بُعِثَ نبيًّا برسالةِ الإسلام',en:'was sent as a Prophet with the message of Islam'}} ] },
      { t:88,  ar:'يَدْعُو إِلَى التَّوْحِيدِ جَوْفَ مَكَّةِ ❁ ثَلَاثَ عَشْرَةَ سِنِينًا تَمَّتِ',
        en:'Calling to Tawhid in the heart of Makkah, thirteen years were completed.',
        gloss:[ {w:{ar:'التَّوْحِيدِ',en:'Tawhid'}, m:{ar:'إفرادُ اللهِ وحدَه بالعبادة',en:'worshipping God alone'}} ] },
      { t:96,  ar:'وَبَعْدَهَا هِجْرَتُهُ تَعَيَّنَتْ ❁ لِطَيْبَةٍ ثُمَّ السُّيُوفُ شُرِّعَتْ',
        en:'After that his Hijrah was set to Taybah (Madinah); then the swords were ordained.',
        gloss:[ {w:{ar:'طَيْبَةٍ',en:'Taybah'}, m:{ar:'من أسماءِ المدينةِ المنوَّرة',en:'one of the names of Madinah'}},
                {w:{ar:'شُرِّعَتْ',en:'were ordained'}, m:{ar:'فُرِضَ الجهادُ والدفاعُ عن الدين',en:'jihad/defending the religion was legislated'}} ] },
      { t:104, ar:'سَبْعًا وَعِشْرِينَ غَزَا بِالنُّصْرَةِ ❁ وَمَوْتُهُ فِي حَادِي عَشْرَ الْهِجْرَةِ',
        en:'Twenty-seven campaigns he led with victory; his death was in the eleventh year of Hijrah.',
        gloss:[ {w:{ar:'غَزَا',en:'ghaza'}, m:{ar:'خرجَ بنفسِه في الغزواتِ للدفاعِ عن الإسلام',en:'he personally went out on expeditions to defend Islam'}} ] },
      { t:112, ar:'أَزْوَاجُهُ بَعْدَ خَدِيجٍ عَشَرَهْ ❁ سَوْدَةُ ثُمَّ عَائِشُ الْمُطَهَّرَهْ',
        en:'His wives after Khadijah were ten: Sawdah, then Aisha the pure,' },
      { t:120, ar:'فَحَفْصَةٌ زَيْنَبُ أُمُّ سَلَمَهْ ❁ وَبِنْتُ جَحْشٍ زَيْنَبُ الْمُكَرَّمَهْ',
        en:'then Hafsah, Zaynab, Umm Salamah, and the daughter of Jahsh — Zaynab the honored,' },
      { t:128, ar:'ثُمَّ آبْنَةُ الْحَارِثِ ذِي جُوَيْرِيَهْ ❁ أُمُّ حَبِيبَةٍ وَرَمْلَةٌ هِيَهْ',
        en:'then the daughter of al-Harith — Juwayriyah; and Umm Habibah, who is Ramlah,' },
      { t:136, ar:'صَفِيَّةٌ مَيْمُونَةٌ وَالْجَامِعَهْ ❁ مِنْ نَسْلِ إِسْمَاعِيلَ إِلَّا التَّاسِعَهْ',
        en:'Safiyyah, Maymunah — and the gathering point: all from Ismail’s line except the ninth.',
        gloss:[ {w:{ar:'وَالْجَامِعَهْ',en:'the gathering point'}, m:{ar:'الفائدةُ التي تَجمعُهنّ',en:'the summarizing point that gathers them all'}} ] },
      { t:144, ar:'أَوْلَادُهُ الْقَاسِمُ عَبْدُ اللهِ ❁ الطَّاهِرُ الطَّيِّبُ زَاكِي الْجَاهِ',
        en:'His children: al-Qasim, Abdullah, at-Tahir, at-Tayyib — pure of rank,' },
      { t:152, ar:'وَزَيْنَبُ رُقَيَّةُ وَفَاطِمَهْ ❁ وَأُمُّ كُلْثُومٍ إِبْرَاهِيمُ الْخَاتِمَهْ',
        en:'and Zaynab, Ruqayyah, Fatimah, Umm Kulthum — and Ibrahim was the last.' },
    ],
  },
};
