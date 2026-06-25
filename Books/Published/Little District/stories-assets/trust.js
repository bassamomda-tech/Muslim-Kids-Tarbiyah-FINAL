/* ═══════════════════════════════════════════════════════════════
   بيت الأمانة  ·  House of Trust
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.trust = {

  tagline: {
    ar: 'الأمانةُ حفظُ الحقوقِ وأداؤها كما هي',
    en: 'Trustworthiness: guarding rights and fulfilling them as they are',
  },

  /* ───── ROOM 1: Knowledge ───── */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تعلم أن الأمانة من علامات الإيمان؟', en:'Did you know that trustworthiness is a sign of faith?' },
      sub:   { ar:'«لا إيمانَ لِمَن لا أمانةَ لَه، ولا دينَ لِمَن لا عهدَ لَه» ﷺ', en:'"No faith for one without trust, no religion for one without keeping their word" — the Prophet ﷺ' },
    },
    definition: {
      linguistic: {
        ar: 'الأمانةُ مِن الأَمنِ والاطمئنان — لأنَّ الأمينَ يُؤمَنُ جانِبُهُ ولا يُخافُ منه الخِيانة!',
        en: 'From "safety and peace" — because the trustworthy are safe to trust; you don’t fear betrayal from them.',
      },
      terminology: {
        ar: 'هي <b>حِفظُ الحقوقِ وأداؤُها إلى أهلِها كما هي</b> — في المالِ والسِّرِّ والعملِ والمسؤوليَّة.',
        en: 'Guarding rights and returning them to their owners as they are — in wealth, secrets, work, and responsibility.',
      },
      simile: {
        ar: 'الأمانةُ كالخِزانةِ المُحكَمة: تَحفظُ ما فيها ولا تُفرِّطُ في شَيءٍ منه!',
        en: 'Trustworthiness is like a sealed vault: it guards what’s inside and never lets anything slip!',
      },
    },
    forms: [
      { icon:'💰', color:'#27AE60', title:{ar:'أمانةُ المالِ',     en:'Trust with wealth'},      body:{ar:'أن تَحفظَ ما أُودِعَ عندكَ ولو كان قِرشاً.',            en:'Guarding what’s left with you — even a penny.'} },
      { icon:'🤐', color:'#E67E22', title:{ar:'أمانةُ السِّرّ',    en:'Trust with secrets'},    body:{ar:'لا تُفشي سِرَّاً ائتَمَنَكَ عليه أحد.',              en:'Never reveal a secret someone entrusted to you.'} },
      { icon:'📝', color:'#2980B9', title:{ar:'أمانةُ العمل',     en:'Trust in work'},         body:{ar:'تُتقِنُ عملَكَ وتُؤدِّيهِ كما يَنبغي.',              en:'Excel at your work and do it properly.'} },
      { icon:'⚖️', color:'#8E44AD', title:{ar:'أمانةُ الولاية',   en:'Trust in authority'},   body:{ar:'إذا كُلِّفتَ بمسؤوليَّةٍ أدَّيتَها بعدلٍ وإخلاص.', en:'If given authority, fulfill it justly and sincerely.'} },
      { icon:'👂', color:'#C0392B', title:{ar:'أمانةُ الشَّهادة',  en:'Trust in testimony'},   body:{ar:'تَشهدُ بالحقِّ ولا تَكتُمُ شَهادة.',                en:'Testify to truth; never conceal it.'} },
      { icon:'🌟', color:'#D4AC0D', title:{ar:'الأمانةُ مع الله',  en:'Trust with Allah'},      body:{ar:'تُؤدِّي الفرائضَ وتَحفظُ جوارِحَكَ عن الحرام.',      en:'Fulfill obligations; guard your limbs from sin.'} },
      { icon:'🤝', color:'#16A085', title:{ar:'أمانةُ العَهد',     en:'Trust in promises'},    body:{ar:'إذا وَعَدتَ فَلا تُخلِف — الوَعدُ أمانة.',          en:'If you promise, don’t break it — a promise is trust.'} },
      { icon:'👨‍👩‍👧‍👦', color:'#D35400', title:{ar:'أمانةُ الأُسرة',   en:'Trust in family'},      body:{ar:'رِعايةُ الأهلِ والأولادِ حَقٌّ وأمانة.',             en:'Caring for family and children is a right and trust.'} },
    ],
    ranking: [
      { color:'#27AE60', title:{ar:'الأمانةُ الكُبرى',     en:'The greatest trust'},     body:{ar:'التَّوحيدُ والفَرائض — أعظَمُ ما ائتَمنَكَ اللهُ عليه',               en:'Monotheism and duties — the greatest trust Allah gave you'} },
      { color:'#2980B9', title:{ar:'أمانةُ الحُكمِ والولاية', en:'Trust in leadership'},   body:{ar:'القيادةُ والمَسؤوليَّة — «يومَ القيامةِ خِزيٌ ونَدامة»',                en:'Leadership and authority — "on Judgment Day, shame and regret"'} },
      { color:'#E67E22', title:{ar:'أمانةُ المعامَلات',     en:'Trust in dealings'},      body:{ar:'حِفظُ الودائعِ والعُهودِ في التِّجارةِ والحياة',                         en:'Safeguarding deposits and promises in trade and life'} },
      { color:'#8E44AD', title:{ar:'أمانةُ الأسرار',        en:'Trust with secrets'},     body:{ar:'كِتمانُ ما ائتَمَنَكَ النَّاسُ عليه',                                    en:'Concealing what people entrusted to you'} },
      { color:'#16A085', title:{ar:'أمانةُ الكَلِمة',       en:'Trust in speech'},       body:{ar:'الصِّدقُ في القَولِ والشَّهادةِ بالحَقّ',                                en:'Honesty in speech and testifying to truth'} },
    ],
    verses: [
      { text: { ar:'﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا ﴾',
                en:'"Allah commands you to return trusts to their owners."' },
        ref: { ar:'[سورة النساء: ٥٨]', en:'[Surah An-Nisa: 58]' } },
      { text: { ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللَّهَ وَالرَّسُولَ وَتَخُونُوا أَمَانَاتِكُمْ وَأَنتُمْ تَعْلَمُونَ ﴾',
                en:'"O believers — do not betray Allah and the Messenger, nor betray your trusts knowingly."' },
        ref: { ar:'[سورة الأنفال: ٢٧]', en:'[Surah Al-Anfal: 27]' } },
      { text: { ar:'﴿ وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ ﴾',
                en:'"And those who are faithful to their trusts and their pledges."' },
        ref: { ar:'[سورة المؤمنون: ٨]', en:'[Surah Al-Mu\'minun: 8]' } },
      { text: { ar:'﴿ إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ فَأَبَيْنَ أَن يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا وَحَمَلَهَا الْإِنسَانُ إِنَّهُ كَانَ ظَلُومًا جَهُولًا ﴾',
                en:'"We offered the trust to the heavens, earth, and mountains, but they refused to bear it and were afraid. Yet man undertook it — indeed, he is unjust and ignorant."' },
        ref: { ar:'[سورة الأحزاب: ٧٢]', en:'[Surah Al-Ahzab: 72]' } },
    ],
    hadiths: [
      { text: { ar:'«لا إيمانَ لِمَن لا أمانةَ له، ولا دينَ لِمَن لا عَهدَ له»',
                en:'"No faith for one without trust, no religion for one without keeping their word."' },
        source: { ar:'[رواه أحمد — حديث ١٢٣٨٤]', en:'[Ahmad — 12384]' } },
      { text: { ar:'«أَدِّ الأمانةَ إلى مَن ائتَمَنَكَ، ولا تَخُنْ مَن خانَك»',
                en:'"Return the trust to one who trusted you, and do not betray one who betrayed you."' },
        source: { ar:'[رواه أبو داود والترمذي]', en:'[Abu Dawud & Tirmidhi]' } },
      { text: { ar:'«آيةُ المُنافِقِ ثَلاث: إذا حَدَّثَ كَذَب، وإذا وَعَدَ أَخلَف، وإذا اؤتُمِنَ خان»',
                en:'"The sign of a hypocrite is three: when he speaks, he lies; when he promises, he breaks it; and when trusted, he betrays."' },
        source: { ar:'[متفق عليه — البخاري ومسلم]', en:'[Agreed upon — Bukhari & Muslim]' } },
    ],
    benefits: [
      { ar:'💚 الأمانةُ من صِفاتِ المؤمنين الصَّادقين',     en:'💚 Trustworthiness is a mark of sincere believers' },
      { ar:'🌸 تَجلبُ ثِقةَ الناسِ ومحبَّتَهم',            en:'🌸 It earns people’s trust and affection' },
      { ar:'🏆 مَن حَفِظَ الأمانةَ حَفِظَهُ الله',         en:'🏆 Whoever guards trust, Allah guards them' },
      { ar:'✨ تَفتحُ أبوابَ الرِّزقِ والبَركة',           en:'✨ It opens doors of provision and blessing' },
      { ar:'🌟 تُورِثُ الطُّمَأنينةَ والسَّكينة في القلب', en:'🌟 It plants peace and tranquility in the heart' },
      { ar:'🛡️ سَبَبٌ لِدُخولِ قُلوبِ النَّاسِ في الإسلام', en:'🛡️ A cause for people’s hearts entering Islam' },
      { ar:'📈 تَرفَعُ مَنزِلَةَ العَبدِ عِندَ اللهِ والنَّاس', en:'📈 It raises the servant’s rank with Allah and people' },
      { ar:'💎 تَجعَلُ صاحِبَها قُدوَةً يُحتَذى بِها',     en:'💎 Makes its bearer a role model to follow' },
      { ar:'🌺 تُقَرِّبُ مِن الجَنَّة وتُباعِدُ عن النَّار',  en:'🌺 It brings closer to Paradise and farther from Hellfire' },
      { ar:'💫 تَحفَظُ المُجتَمَعَ مِن الفَسادِ والخِيانة',   en:'💫 It protects society from corruption and betrayal' },
      { ar:'🌻 تُكسِبُ صاحِبَها السُّمعةَ الحَسَنة',        en:'🌻 It earns its bearer a good reputation' },
      { ar:'🎯 تُوصِلُ إلى كَمالِ الإيمانِ وحُسنِ الإسلام', en:'🎯 It leads to perfect faith and beautiful Islam' },
      { ar:'🕊️ تَزيدُ الإيمانَ وتُنَوِّرُ القَلب',         en:'🕊️ It increases faith and illuminates the heart' },
    ],
    obstacles: [
      { ar:'الطَّمَعُ في المال',           en:'Greed for wealth' },
      { ar:'ضَعفُ الإيمان',               en:'Weakness of faith' },
      { ar:'قُرَناءُ السُّوء',             en:'Bad company' },
      { ar:'الغَفلةُ عن مُراقَبةِ الله',  en:'Heedlessness of Allah’s watch' },
      { ar:'حُبُّ الشُّهرةِ والمَنصِب',   en:'Love of fame and position' },
      { ar:'الاستعجالُ في تَحصيلِ المَنافع', en:'Hastiness in seeking benefits' },
      { ar:'الجَهلُ بِعَظَمةِ الأمانة',   en:'Ignorance of trust’s greatness' },
      { ar:'التَّساهُلُ في الصَّغائر',    en:'Being lax with small matters' },
      { ar:'تَقليدُ أَهلِ الخِيانة',      en:'Imitating people of betrayal' },
      { ar:'النَّظَرُ إلى قِلَّةِ الأمانة',en:'Looking at the smallness of trust' },
    ],
    acquireMeans: [
      { ar:'استَحضِرْ أنَّ اللهَ يَراكَ ويَسمعُكَ',              en:'Remember that Allah sees and hears you' },
      { ar:'تَذَكَّرْ عاقبةَ الخيانةِ في الدُّنيا والآخِرة',     en:'Recall the consequence of betrayal here and in the Hereafter' },
      { ar:'صاحِبْ أهلَ الأمانةِ واقتَدِ بهم',                 en:'Befriend the trustworthy and follow their example' },
      { ar:'تَدرَّبْ على أداءِ الأماناتِ الصَّغيرةِ كالكَبيرة', en:'Practice keeping small trusts like big ones' },
      { ar:'اقرَأ سِيَرَ الأُمَناءِ مِن الصَّحابةِ والسَّلَف',   en:'Read biographies of the trustworthy from Companions and predecessors' },
      { ar:'اجعَلِ الأمانةَ شِعارَكَ في كُلِّ تَعامُلاتِك',     en:'Make trustworthiness your motto in all dealings' },
      { ar:'ادعُ اللهَ أن يَجعَلَكَ مِن الأُمَناء',            en:'Supplicate Allah to make you among the trustworthy' },
      { ar:'حاسِبْ نَفسَكَ يَومياً في أداءِ الأمانات',          en:'Hold yourself accountable daily in fulfilling trusts' },
      { ar:'تَعلَّمْ أَحكامَ الأمانةِ في الفِقه',              en:'Learn the rulings of trust in Islamic jurisprudence' },
    ],
  },

  /* ───── ROOM 2: Stories — paginated, interactive ─────
     Story sources:
     1. Prophet's trust during migration — islamweb.net, dorar.net
     2. Shepherd "Where is Allah?" — dorar.net, islamweb.net  
     3. Abu Hanifa's silk cloth honesty — islamweb.net
     4. Returning the Ka'bah key — islamweb.net, dorar.net */
  stories: [
    /* STORY 1 */
    {
      icon:'🕌', scene:'madinah', character:'🧔',
      title: { ar:'الأمينُ يَردُّ الأماناتِ وَهوَ مُطارَد!', en:'The trustworthy one returns deposits while hunted!' },
      pages: [
        { scene:'madinah', character:'🧔',
          text:{ ar:'في شَوارعِ مَكَّةَ المُكَرَّمة، كانَ النَّبيُّ ﷺ يَمشي بَينَ النَّاسِ قَبلَ البَعثةِ وَبَعدَها، وَالجَميعُ يَعرفونَهُ بِلَقَبٍ واحد: <b>«الصَّادقُ الأمين»</b>. كانَ التُّجَّارُ يَأتونَ إليه بِأَكياسِ الذَّهَبِ والفِضَّة، وَالنِّساءُ بِحُليِّهِنَّ الثَّمين، وَالمُسافرونَ بِوَثائقِهِم المُهِمَّة. حتَّى أَعداؤُهُ الَّذينَ كَذَّبوهُ وَآذَوهُ كانوا يَثِقونَ بِه ثِقَةً عَمياء!<br><br>لَم يَكُنْ في كُلِّ مَكَّةَ مَكانٌ أَأمَنُ لِحِفظِ الأماناتِ مِن بَيتِ مُحَمَّدٍ ﷺ. إذا أَرادَ أَحَدُهُم السَّفَرَ، تَرَكَ كُلَّ ما يَملِكُ عِندَهُ وَهوَ مُطمَئِنُّ القَلب.',
                 en:'In the streets of honored Makkah, the Prophet ﷺ walked among people before and after his mission, and everyone knew him by one title: <b>"The Truthful, The Trustworthy."</b> Merchants would come to him with bags of gold and silver, women with their precious jewelry, travelers with their important documents. Even his enemies who denied and harmed him trusted him with blind faith!<br><br>There was no place in all of Makkah safer for keeping trusts than Muhammad’s ﷺ house. When anyone wanted to travel, they would leave everything they owned with him with a peaceful heart.' } },
        { scene:'night', character:'🌙',
          text:{ ar:'مَرَّتِ السِّنون، وَاشتَدَّ أَذى قُرَيشٍ للمُسلمين. ضَرَبوهُم، وَعَذَّبوهُم، وَحَاصَروهُم، حَتَّى أَذِنَ اللهُ لَهُم بالهِجرةِ إلى المَدينةِ المُنَوَّرة. بَدَأَ المُسلمونَ يَخرُجونَ سِرّاً، جَماعاتٍ وَفُرادى، يَترُكونَ بُيوتَهُم وَأَموالَهُم خَلفَهُم.<br><br>فَلَمّا رَأَت قُرَيشٌ ذلك، خافَت أن يَهاجِرَ النَّبيُّ ﷺ أَيضاً. فَاجتَمَعَت سادَتُها في دارِ النَّدوة، وَخَطَّطوا لِقَتلِهِ قَبلَ أن يُفلِتَ مِن أَيديهِم. اختاروا شابّاً قَويّاً مِن كُلِّ قَبيلة، وَأَعطَوهُم السُّيوفَ المَسلولة، وَقالوا: «أَحيطوا بِبَيتِهِ اللَّيلة، فَإذا خَرَجَ فَجراً، اضرِبوهُ ضَربَةَ رَجُلٍ واحِد!»',
                 en:'Years passed, and Quraysh’s persecution of Muslims intensified. They beat them, tortured them, besieged them, until Allah permitted migration to Madinah the Illuminated. Muslims began leaving secretly, in groups and alone, abandoning their homes and wealth behind.<br><br>When Quraysh saw this, they feared the Prophet ﷺ would migrate too. Their leaders gathered in Dar an-Nadwah and plotted to kill him before he could slip away. They chose a strong young man from each tribe, gave them drawn swords, and said: "Surround his house tonight, and when he comes out at dawn, strike him as one man!"' } },
        { scene:'night', character:'⭐',
          text:{ ar:'جاءَ جِبريلُ عليه السَّلامُ إلى النَّبيِّ ﷺ تِلكَ اللَّيلة، وَأَخبَرَهُ بِالمُؤامَرة، وَأَمَرَهُ ألّا يَنامَ في فِراشِه. كانَ الوَقتُ حَرِجاً — عَشَراتُ السُّيوفِ حَولَ البَيت، وَالمَوتُ يَترَبَّصُ خَلفَ الباب!<br><br>لَكِنَّ في قَلبِ هذا الخَطَرِ الرَّهيب، كانَ عِندَ النَّبيِّ ﷺ أَمرٌ أَهَمّ: <b>وَدائعُ النَّاسِ وَأَماناتُهُم المَحفوظةُ في بَيتِه!</b> كانَت هُناكَ صُرَرٌ مِن المال، وَمَجوهَراتٌ ثَمينة، وَوَثائقُ مُهِمَّة، وَعُقودُ بَيعٍ وَشِراء — كُلُّها لِأُناسٍ مِن قُرَيش، وَمِنهُم مَن يَقِفُ الآنَ خارِجَ بَيتِهِ يَنتَظِرُ قَتلَه!<br><br>ماذا سَيَفعَلُ النَّبيُّ ﷺ؟ هل سَيَهرُبُ بِها ويَقول: «هؤُلاءِ أَعدائي، يُريدونَ قَتلي، فَأَنا أَحَقُّ بِأَموالِهِم»؟',
                 en:'Jibril came to the Prophet ﷺ that night and told him of the plot, ordering him not to sleep in his bed. The time was critical — dozens of swords around the house, death lurking behind the door!<br><br>But in the heart of this terrible danger, the Prophet ﷺ had a more important matter: <b>people’s deposits and trusts kept in his house!</b> There were bundles of money, precious jewelry, important documents, sale and purchase contracts — all belonging to people of Quraysh, some of whom now stood outside his house waiting to kill him!<br><br>What would the Prophet ﷺ do? Would he flee with them and say: "These are my enemies who want to kill me, so I deserve their wealth more"?' } },
        { scene:'madinah', character:'😇',
          text:{ ar:'نَظَرَ النَّبيُّ ﷺ إلى ابنِ عَمِّهِ الشَّابّ، عَليِّ بنِ أبي طالب، وَقالَ لَهُ بِصَوتٍ هادِئٍ وَلَكِنَّهُ حازِم: <b>«يا عَليّ، اتَّشِحْ بِبُردي الأَخضَر، وَنَمْ عَلى فِراشي اللَّيلة.»</b><br><br>عَرَفَ عَليٌّ رَضيَ اللهُ عنه أَنَّ هذا يَعني الخَطَر — لَكِنَّهُ لَم يَتَرَدَّد لَحظَة! وَعَدَهُ النَّبيُّ ﷺ قائلاً: «لَن يَصِلَ إليكَ مَكروهٌ إن شاءَ الله.» ثُمَّ أَعطاهُ المُهِمَّةَ الأَعظَم:<br><br><b>«ابقَ في مَكَّةَ ثَلاثَ لَيالٍ بَعدَ خُروجي. ابحَثْ عن كُلِّ صاحِبِ أَمانةٍ وَوَديعة، وَرُدَّ إليه حَقَّهُ كامِلاً — لا تَترُكْ دينارًا ولا دِرهَماً ولا خاتَماً!»</b><br><br>لَم يَقُلْ: «خُذِ الأَموالَ وَالحَقني في المَدينة!» لَم يَقُل: «دَعْها فَهُم أَعداؤُنا!» بَل قالَ بِكُلِّ وُضوح: <em>رُدَّ الأَمانةَ لِصاحِبِها — وَلو كانَ عَدُوَّك!</em>',
                 en:'The Prophet ﷺ looked at his young cousin, Ali ibn Abi Talib, and said to him in a calm but firm voice: <b>"O Ali, wrap yourself in my green cloak and sleep in my bed tonight."</b><br><br>Ali knew this meant danger — but he didn’t hesitate for a moment! The Prophet ﷺ promised him: "No harm will reach you, if Allah wills." Then he gave him the greatest mission:<br><br><b>"Stay in Makkah three nights after I leave. Search for every owner of a trust and deposit, and return their rights in full — don’t leave a dinar, a dirham, or a ring!"</b><br><br>He didn’t say: "Take the money and catch up with me in Madinah!" He didn’t say: "Leave it — they’re our enemies!" Rather, he said with complete clarity: <em>Return the trust to its owner — even if they’re your enemy!</em>' },
          choice:{ q:{ar:'لِماذا رَدَّ النَّبيُّ ﷺ الأماناتِ حَتَّى لِمَن يُريدُ قَتلَه؟',en:'Why did the Prophet ﷺ return trusts even to those who wanted to kill him?'},
            opts:[
              { t:{ar:'لأنَّهُ خائفٌ منهم.',en:'He was afraid of them.'},c:false,exp:{ar:'لا — كانَ شُجاعاً، لَكِنَّ الأمانةَ لا تَسقُطُ بالعَداوة!',en:'No — he was brave, but trust doesn’t fall away with enmity.'} },
              { t:{ar:'لأنَّ الأمانةَ واجبةٌ حتَّى مع العَدُوّ.',en:'Because trust is obligatory even with an enemy.'},c:true,exp:{ar:'نَعَم! الأمانةُ حَقٌّ لا يَسقُطُ — حتَّى لو أَساءَ إليكَ صاحِبُها.',en:'Yes! Trust is a right that doesn’t drop — even if the owner wronged you.'} },
              { t:{ar:'لأنَّهُ كانَ يُريدُ إرضاءَهُم.',en:'To please them.'},c:false,exp:{ar:'لا — هوَ فَعلَها لأنَّها الحَقّ، لا لِيُرضيَ أَحداً.',en:'No — he did it because it’s right, not to please anyone.'} },
            ] } },
        { scene:'desert', character:'🌙',
          text:{ ar:'خَرَجَ النَّبيُّ ﷺ تِلكَ اللَّيلة، وَأَعمى اللهُ أَبصارَهُم فَلَم يَرَوهُ وَهوَ يَمُرُّ بَينَهُم! ذَهَبَ إلى غارِ ثَور، وَمِنهُ إلى المَدينة. أَمّا عَليٌّ رَضيَ اللهُ عنه، فَنامَ في فِراشِ النَّبيِّ ﷺ تِلكَ اللَّيلة، وَالمَلائكةُ تَحرُسُه!<br><br>وَفي الصَّباح، اقتَحَمَ المُشرِكونَ البَيت، فَوَجَدوا عَليّاً لا النَّبيَّ ﷺ. غَضِبوا وَصَرَخوا، لَكِنَّهُ لَم يَهتَمّ. كانَ عِندَهُ عَمَلٌ أَهَمّ يَجِبُ إنجازُه!',
                 en:'The Prophet ﷺ left that night, and Allah blinded their eyes so they didn’t see him pass among them! He went to Cave Thawr, then to Madinah. As for Ali, he slept in the Prophet’s ﷺ bed that night with angels guarding him!<br><br>In the morning, the polytheists stormed the house and found Ali, not the Prophet ﷺ. They raged and shouted, but he didn’t care. He had more important work to complete!' } },
        { scene:'madinah', character:'👤',
          text:{ ar:'مَكَثَ عَليٌّ رَضيَ اللهُ عنه ثَلاثَ لَيالٍ كامِلة في مَكَّة، يَطوفُ في شَوارِعِها، يَسألُ وَيَبحَث: «مَن لَهُ أَمانةٌ عِندَ مُحَمَّد؟ مَن لَهُ وَديعةٌ في بَيتِه؟» جاءَهُ النَّاسُ مِن كُلِّ مَكان — بَعضُهُم مِن أَصدِقاءِ النَّبيِّ ﷺ، وَبَعضُهُم مِن أَلَدِّ أَعدائِه!<br><br>جاءَهُ رَجُلٌ كانَ يَسُبُّ النَّبيَّ ﷺ في الطُّرُقات، فَأَعطاهُ عَليٌّ كيسَ نُقودِهِ كامِلاً. جاءَتهُ امرأةٌ مِن بَني أُميَّة الَّذينَ حارَبوا المُسلمين، فَأَعطاها حُلِيَّها كَما هي. لَم يُنقِصْ دِرهَماً، لَم يُؤَخِّرْ وَديعة، لَم يَقُل لِأَحَدٍ: «أَنتَ عَدُوُّنا فَلَن أُعطيَك!»<br><br>حتَّى الَّذينَ كانوا يَقِفونَ لَيلَةَ الهِجرةِ بِسُيوفِهِم حَولَ البَيت — استَلَموا أَماناتِهِم كامِلة، دونَ نَقص!',
                 en:'Ali stayed three full nights in Makkah, walking its streets, asking and searching: "Who has a trust with Muhammad? Who has a deposit in his house?" People came to him from everywhere — some friends of the Prophet ﷺ, and some his fiercest enemies!<br><br>A man who cursed the Prophet ﷺ in the streets came, and Ali gave him his bag of money in full. A woman from Banu Umayyah who fought the Muslims came, and he gave her jewelry as it was. He didn’t reduce a dirham, didn’t delay a deposit, didn’t tell anyone: "You’re our enemy so I won’t give you!"<br><br>Even those who stood on migration night with their swords around the house — received their trusts complete, without shortage!' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'وَبَعدَ ثَلاثِ لَيالٍ، حينَ تَأَكَّدَ عَليٌّ رَضيَ اللهُ عنه أَنَّهُ رَدَّ كُلَّ شَيء، خَرَجَ مِن مَكَّةَ مُهاجِراً إلى المَدينة. مَشى عَلى قَدَمَيهِ مَسافاتٍ طَويلة، حتَّى تَوَرَّمَت قَدَماهُ وَنَزَفَتا — لَكِنَّهُ كانَ سَعيداً!<br><br>لِماذا؟ لأنَّهُ أَدَّى الأَمانة! لأنَّهُ رَدَّ الحُقوقَ لأَصحابِها ولو كانوا أَعداء! لأنَّهُ تَعَلَّمَ مِن نَبيِّهِ ﷺ أَنَّ <b>الأَمانةَ لا تَسقُطُ بالعَداوة، والحَقَّ حَقٌّ ولو كانَ لِعَدُوِّك!</b><br><br>وَهَكَذا عَلَّمَنا رَسولُ اللهِ ﷺ: الأمانةُ تُؤدَّى في كُلِّ حال — في الأَمنِ والخَوف، في القُوَّةِ والضَّعف، مع الصَّديقِ والعَدُوّ. وَلِذلكَ أَنزَلَ اللهُ تَعالى: ﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا ﴾',
                 en:'After three nights, when Ali was certain he had returned everything, he left Makkah migrating to Madinah. He walked on foot for long distances until his feet swelled and bled — but he was happy!<br><br>Why? Because he fulfilled the trust! Because he returned rights to their owners even if they were enemies! Because he learned from his Prophet ﷺ that <b>trust doesn’t fall with enmity, and right is right even if for your enemy!</b><br><br>Thus the Messenger of Allah ﷺ taught us: trust is fulfilled in every state — in safety and fear, in strength and weakness, with friend and enemy. That’s why Allah revealed: "Allah commands you to return trusts to their owners."' } },
      ],
      quiz: [
        { q:{ar:'لِماذا تَرَكَ النَّبيُّ ﷺ عَليّاً في مَكَّة؟', en:'Why did the Prophet ﷺ leave Ali in Makkah?'},
          opts:[
            { t:{ar:'لِيَحميَهُ مِن قُرَيش', en:'To protect him from Quraysh'}, c:false },
            { t:{ar:'لِيَرُدَّ الأماناتِ إلى أهلِها', en:'To return trusts to their owners'}, c:true },
            { t:{ar:'لِيُخبِرَ قُرَيشاً عن الهِجرة', en:'To tell Quraysh about the migration'}, c:false }
          ] },
        { q:{ar:'ماذا فَعَلَ عَليٌّ رَضيَ اللهُ عنه في مَكَّة؟', en:'What did Ali do in Makkah?'},
          opts:[
            { t:{ar:'اختَبَأَ حتَّى يَلحَقَ بالنَّبيّ', en:'Hid until he could join the Prophet'}, c:false },
            { t:{ar:'رَدَّ كُلَّ الوَدائعِ إلى أصحابِها', en:'Returned all deposits to their owners'}, c:true },
            { t:{ar:'جَمَعَ المالَ لِلهِجرة', en:'Gathered money for migration'}, c:false }
          ] },
        { q:{ar:'ما الدَّرسُ الأَعظَمُ مِن هذه القِصَّة؟', en:'What’s the greatest lesson from this story?'},
          opts:[
            { t:{ar:'الأمانةُ واجبةٌ حتَّى مع الأعداء', en:'Trust is obligatory even with enemies'}, c:true },
            { t:{ar:'الهِجرةُ أَهَمُّ مِن كُلِّ شَيء', en:'Migration is more important than everything'}, c:false },
            { t:{ar:'يَجوزُ أَخذُ مالِ العَدُوّ', en:'Taking an enemy’s wealth is allowed'}, c:false }
          ] },
      ],
      moral:      { ar:'الأمانةُ حَقٌّ لا يَسقُطُ — حتَّى لو أساءَ إليكَ صاحِبُها. رُدَّ الأمانةَ لِمَن ائتَمَنَك ولو كانَ عَدُوَّك!', en:'Trust is a right that never falls — even if its owner wronged you. Return trust to whoever trusted you, even if they’re your enemy!' },
      badge:      { icon:'🕌', title:{ar:'أمينُ الأُمَّة', en:'Trustee of the Nation'} },
      reflect:    [ 
        {ar:'لو كانَ عندكَ أمانةٌ لِشَخصٍ أساءَ إليك، هل سَتَرُدُّها؟', en:'If you had a trust from someone who wronged you, would you return it?'},
        {ar:'كيفَ تُحافِظُ على أماناتِ النَّاسِ في حياتِك اليوميَّة؟', en:'How do you guard people’s trusts in your daily life?'},
        {ar:'ما أَصعَبُ أمانةٍ تَجِدُها في حَياتِك، وَكَيفَ تُؤدِّيها؟', en:'What’s the hardest trust in your life, and how do you fulfill it?'}
      ],
      didYouKnow: [ 
        {ar:'قِصَّةُ رَدِّ الأماناتِ يومَ الهِجرةِ مَذكورةٌ في السِّيرةِ النَّبويَّة — البيهقي: السنن الكبرى ٦/٢٨٩، ابن كثير: البداية والنهاية ٣/٢١٨', en:'The story of returning trusts on migration day is recorded in the Prophet’s biography — Al-Bayhaqi: Al-Sunan Al-Kubra 6/289, Ibn Kathir: Al-Bidayah wan-Nihayah 3/218'},
        {ar:'رَدُّ الأماناتِ كانَ مِن آخِرِ ما فَعَلَهُ النَّبيُّ ﷺ قَبلَ الهِجرة — مَصدَر: islamweb.net', en:'Returning trusts was among the last things the Prophet ﷺ did before migration — source: islamweb.net'},
        {ar:'عَليٌّ رَضيَ اللهُ عنه نامَ في فِراشِ النَّبيِّ ﷺ تِلكَ اللَّيلة، وَالمَلائكةُ تَحرُسُه مِن كَيدِ المُشرِكين — مَصدَر: ابن هشام، السِّيرة النَّبويَّة', en:'Ali slept in the Prophet’s ﷺ bed that night, with angels guarding him from the polytheists’ plot — source: Ibn Hisham, As-Sirah an-Nabawiyyah'}
      ],
    },

    /* STORY 2 */
    {
      icon:'🐑', scene:'desert', character:'👦',
      title: { ar:'الرَّاعي الصَّغيرُ الَّذي قالَ: «فأينَ الله؟»', en:'The young shepherd who said: "Where is Allah?"' },
      pages: [
        { scene:'desert', character:'🧔',
          text:{ ar:'كانَت الشَّمسُ تَميلُ نَحوَ الغُروبِ في صَحراءِ الحِجاز، حينَ نَزَلَ عُمَرُ بنُ الخطَّابِ رَضيَ اللهُ عنه وَرِفاقُهُ مِن رِحالِهِم لِيَستَريحوا. كانوا في طَريقِهِم إلى مَكَّةَ المُكَرَّمة، وَالسَّفَرُ طَويلٌ شاقّ.<br><br>بَينَما هُم يَنصِبونَ خَيمتَهُم، سَمِعوا صَوتَ ثُغاءِ الغَنَم يَأتي مِن بَعيد. رَفَعوا أَبصارَهُم، فَرَأَوا على سَفحِ الجَبَلِ غُلاماً صَغيراً يَرعى قَطيعاً مِن الغَنَم. كانَ وَحيداً في تِلكَ البَرِّيَّةِ الشَّاسعة، لا رَفيقَ لَهُ إلّا الغَنَمُ وَاللهُ الَّذي يَرعاه!',
                 en:'The sun was tilting toward sunset in the Hijaz desert when Umar ibn al-Khattab and his companions dismounted to rest. They were on their way to honored Makkah, and the journey was long and arduous.<br><br>While setting up their tent, they heard the bleating of sheep from afar. They raised their eyes and saw on the mountainside a young boy tending a flock of sheep. He was alone in that vast wilderness, with no companion except the sheep and Allah who watched over him!' } },
        { scene:'desert', character:'😊',
          text:{ ar:'دَعاهُ عُمَرُ رَضيَ اللهُ عنه بِصَوتٍ حانٍ: <b>«يا راعي، هَلُمَّ إلينا!»</b><br><br>نَزَلَ الغُلامُ مِن الجَبَل، يَمشي بِخُطُواتٍ خَفيفة، وَجهُهُ البَريءُ يَشِعُّ نوراً. كانَ يَرتَدي ثَوباً بَسيطاً رَثّاً، وَلَكِنَّ في عَينَيهِ بَريقاً يَدُلُّ على إيمانٍ عَميق.<br><br>قالَ لَهُ عُمَر: «يا غُلام، بِعني شاةً مِن هذا الغَنَم. نَحنُ جِياعٌ مُتعَبون، وَنُريدُ أن نَذبَحَها لِلعَشاء.»<br><br>نَظَرَ الغُلامُ إلى الغَنَمِ بِحُبّ، ثُمَّ رَفَعَ رَأسَهُ إلى عُمَر وَقالَ بِصَوتٍ هادِئ: <b>«إنَّها لَيسَت لي يا سَيِّدي. إنَّها لِمَولايَ الَّذي استَأجَرَني لِرَعيِها.»</b>',
                 en:'Umar called him warmly: <b>"O shepherd, come to us!"</b><br><br>The boy descended from the mountain, walking with light steps, his innocent face radiating light. He wore a simple worn garment, but in his eyes was a gleam showing deep faith.<br><br>Umar said to him: "O boy, sell me one sheep from this flock. We are hungry and tired, and want to slaughter it for dinner."<br><br>The boy looked at the sheep lovingly, then raised his head to Umar and said calmly: <b>"They’re not mine, my master. They belong to my owner who hired me to tend them."</b>' } },
        { scene:'desert', character:'🤔',
          text:{ ar:'ابتَسَمَ عُمَرُ رَضيَ اللهُ عنه ابتِسامَةً خَفيفة. كانَ يَعرِفُ أنَّ الأمانةَ سَهلَةٌ حينَ يَراكَ النَّاس، لَكِنَّها صَعبَةٌ حينَ تَكونُ وَحيداً في البَرِّيَّة! أَرادَ أن يَختَبِرَ هذا الغُلامَ الصَّغير — هل هوَ أَمينٌ حَقّاً؟<br><br>فَقالَ لَهُ بِلُطفٍ وَكَأَنَّهُ يُعَلِّمُه حيلَةً ذَكيَّة: «يا بُنَيّ، قُلْ لِسَيِّدِكَ عِندَما يَسأَلُك: <em>أَكَلَها الذِّئب!</em> وَخُذْ ثَمَنَها لِنَفسِك! لا أَحَدَ يَرانا هُنا — نَحنُ في الصَّحراء، بَعيدونَ عن المَدينة!»<br><br>كانَت فُرصةً ذَهَبيَّة لِلغُلام! المالُ في يَدِه، والسَّيِّدُ بَعيدٌ لا يَدري، وَالذِّئابُ كَثيرةٌ في هذه الصَّحراء — مَن سَيَشُكُّ في قِصَّتِه؟',
                 en:'Umar smiled slightly. He knew that trustworthiness is easy when people see you, but difficult when you’re alone in the wilderness! He wanted to test this young boy — is he truly trustworthy?<br><br>He said to him gently as if teaching him a clever trick: "My son, tell your master when he asks: <em>A wolf ate it!</em> And take its price for yourself! No one sees us here — we’re in the desert, far from the city!"<br><br>It was a golden opportunity for the boy! The money in his hand, the master far away unknowing, and wolves plentiful in this desert — who would doubt his story?' },
          choice:{ q:{ar:'ماذا كانَ يَختَبِرُ عُمَرُ في الغُلام؟',en:'What was Umar testing in the boy?'},
            opts:[
              { t:{ar:'ذَكاءَهُ وَسُرعةَ بَديهَتِه.',en:'His intelligence and quick wit.'},c:false,exp:{ar:'لا — كانَ يَختَبِرُ شَيئاً أَعمَق!',en:'No — he was testing something deeper!'} },
              { t:{ar:'أمانتَهُ وَخَوفَهُ مِن الله.',en:'His trustworthiness and fear of Allah.'},c:true,exp:{ar:'نَعَم! هل سَيَخونُ الأمانةَ حينَ لا يَراهُ أَحَد؟',en:'Yes! Would he betray trust when no one was watching?'} },
              { t:{ar:'مَعرِفَتَهُ بِرَعيِ الغَنَم.',en:'His knowledge of shepherding.'},c:false,exp:{ar:'لا — كانَ الاختبارُ في شَيءٍ أَثمَن!',en:'No — the test was about something more precious!'} },
            ] } },
        { scene:'desert', character:'🌙',
          text:{ ar:'وَقَفَ الغُلامُ صامِتاً لَحَظات، كَأَنَّما يُفَكِّرُ في العَرض. نَظَرَ إلى الغَنَمِ الَّتي يَرعاها، ثُمَّ نَظَرَ إلى عُمَر، ثُمَّ رَفَعَ بَصَرَهُ إلى السَّماء...<br><br>ثُمَّ قالَ بِصَوتٍ هادِئٍ وَلَكِنَّهُ مَليءٌ بِاليَقين: «وَلَكِنْ يا سَيِّدي... ماذا سَأَقولُ لِسَيِّدي؟»<br><br>قالَ عُمَر مُتَظاهِراً بالبَساطة: «قُل لَهُ: أَكَلَها الذِّئب!»<br><br>فَنَظَرَ الغُلامُ إلى عُمَرَ نَظرةً عَميقة، وَقالَ بِكُلِّ بَراءَةِ الأَطفالِ وَقُوَّةِ المُؤمنين: «نَعَم، سَأَقولُ ذلك... وَلَكِن...»',
                 en:'The boy stood silent for moments, as if thinking about the offer. He looked at the sheep he was tending, then at Umar, then raised his gaze to the sky...<br><br>Then he said in a calm voice but full of certainty: "But my master... what will I tell my master?"<br><br>Umar said, feigning simplicity: "Tell him: a wolf ate it!"<br><br>The boy looked at Umar with a deep gaze and said with all the innocence of children and the strength of believers: "Yes, I’ll say that... but..."' } },
        { scene:'desert', character:'😇',
          text:{ ar:'ثُمَّ أَشارَ الغُلامُ بِإصبَعِهِ الصَّغيرِ إلى السَّماء، وَقالَ بِصَوتٍ ارتَفَعَ في الصَّحراءِ الهادِئة:<br><br><b>«فَأَينَ الله؟!»</b><br><br>سَقَطَت هذه الكَلِماتُ الأَربَع على قَلبِ عُمَرَ كَالصَّاعِقة! وَقَفَ مَشدوهاً، وَعَيناهُ تَذرِفانِ الدُّموع. هذا الطِّفلُ الصَّغير، الَّذي لا يَملِكُ شَيئاً في هذه الدُّنيا، يُعَلِّمُ أَميرَ المُؤمنينَ دَرساً لَن يَنساهُ أَبَداً!<br><br><em>نَعَم — أَينَ اللهُ الَّذي يَرانا وَيَسمَعُنا في كُلِّ لَحظة؟ أَينَ اللهُ الَّذي لا تَخفى عليه خافِيَة؟</em> قَد يَخدَعُ الإنسانُ سَيِّدَهُ، قَد يَخدَعُ النَّاس، لَكِنَّهُ لَن يَستَطيعَ أن يَخدَعَ الله!',
                 en:'Then the boy pointed his small finger to the sky and said in a voice that rose in the quiet desert:<br><br><b>"Where is Allah?!"</b><br><br>These four words fell on Umar’s heart like lightning! He stood stunned, his eyes shedding tears. This small child, who owns nothing in this world, was teaching the Commander of the Faithful a lesson he would never forget!<br><br><em>Yes — where is Allah who sees and hears us every moment? Where is Allah from whom nothing is hidden?</em> A person might deceive his master, might deceive people, but he can never deceive Allah!' } },
        { scene:'madinah', character:'😢',
          text:{ ar:'جَلَسَ عُمَرُ رَضيَ اللهُ عنه على الأَرض، وَبَكى بُكاءً شَديداً. قالَ لِرِفاقِه: «واللهِ، لَقَد عَلَّمَني هذا الغُلامُ ما لَم أَتَعَلَّمهُ مِن سِنينَ طَويلة!»<br><br>ثُمَّ نَظَرَ إلى الغُلامِ بِعَينَينِ مَليئَتَينِ بالإِعجابِ والاحتِرام، وَقالَ: «بارَكَ اللهُ فيك يا بُنَيّ! لَقَد حَفِظتَ أَمانةَ سَيِّدِك، وَحَفِظَكَ اللهُ بِذلك!»<br><br>وَلَم يَكتَفِ عُمَرُ بالثَّناءِ والدُّعاء — بَل ذَهَبَ مُباشَرَةً إلى سَيِّدِ الغُلام، واشتَراهُ مِنهُ بِمالٍ كَثير، ثُمَّ أَعتَقَهُ حُرّاً لِوَجهِ الله!',
                 en:'Umar sat on the ground and wept intensely. He said to his companions: "By Allah, this boy has taught me what I haven’t learned in many years!"<br><br>Then he looked at the boy with eyes full of admiration and respect, and said: "May Allah bless you, my son! You guarded your master’s trust, and Allah will guard you for it!"<br><br>Umar didn’t stop at praise and supplication — he went directly to the boy’s master, bought him with much wealth, then freed him for Allah’s sake!' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'وَبَعدَ أَن أَعتَقَهُ، قالَ لَهُ عُمَرُ رَضيَ اللهُ عنه بِصَوتٍ مُرتَجِف:<br><br><b>«أَعتَقَتكَ في الدُّنيا هذه الكَلِمة — فَأَينَ الله؟ — وَأَرجو أن تُعتِقَكَ في الآخِرة!»</b><br><br>كَلِمةٌ واحدةٌ صادِقة، نابِعةٌ مِن قَلبٍ يُراقِبُ الله، غَيَّرَت مَصيرَ هذا الغُلامِ لِلأَبَد! مِن عَبدٍ مَملوكٍ إلى رَجُلٍ حُرٍّ كَريم!<br><br>وَعَلَّمَتنا هذه القِصَّة:<br>💎 اللهُ يَرانا حينَ لا يَرانا أَحَد<br>💎 الأمانةُ تُحفَظُ بِمُراقَبةِ الله، لا بِخَوفِ النَّاس<br>💎 كَلِمةٌ واحدةٌ مِن الحَقِّ قَد تُغَيِّرُ حَياتَك<br>💎 الصِّغارُ قَد يَكونونَ أَعظَمَنا إيماناً!',
                 en:'After freeing him, Umar said with a trembling voice:<br><br><b>"This word freed you in this world — ’Where is Allah?’ — and I hope it frees you in the Hereafter!"</b><br><br>One sincere word, springing from a heart that watches for Allah, changed this boy’s destiny forever! From an owned slave to a free, noble man!<br><br>This story taught us:<br>💎 Allah sees us when no one else does<br>💎 Trust is guarded by awareness of Allah, not fear of people<br>💎 One word of truth may change your life<br>💎 The young may have the greatest faith among us!' } },
      ],
      quiz: [
        { q:{ar:'ماذا طَلَبَ عُمَرُ مِن الرَّاعي؟', en:'What did Umar ask from the shepherd?'},
          opts:[
            { t:{ar:'أن يَبيعَهُ شاة', en:'To sell him a sheep'}, c:true },
            { t:{ar:'أن يُعَلِّمَهُ الرَّعي', en:'To teach him shepherding'}, c:false },
            { t:{ar:'أن يَدُلَّهُ على الطَّريق', en:'To show him the way'}, c:false }
          ] },
        { q:{ar:'ماذا قالَ الرَّاعي لَمّا اقتَرَحَ عليه عُمَر أن يَقولَ أَكَلَها الذِّئب؟', en:'What did the shepherd say when Umar suggested saying a wolf ate it?'},
          opts:[
            { t:{ar:'قَبِلَ ذلك', en:'He accepted'}, c:false },
            { t:{ar:'قالَ: فَأَينَ الله؟', en:'He said: Where is Allah?'}, c:true },
            { t:{ar:'هَرَبَ خَوفاً', en:'He fled in fear'}, c:false }
          ] },
        { q:{ar:'ماذا فَعَلَ عُمَرُ بالرَّاعي بَعدَ ذلك؟', en:'What did Umar do with the shepherd after that?'},
          opts:[
            { t:{ar:'اشتَراهُ وَأَعتَقَه', en:'Bought and freed him'}, c:true },
            { t:{ar:'عاقَبَهُ على رَفضِه', en:'Punished him for refusing'}, c:false },
            { t:{ar:'تَرَكَهُ وَذَهَب', en:'Left him and went away'}, c:false }
          ] },
      ],
      moral:      { ar:'اللهُ يَراكَ حينَ لا يَراكَ أَحَد — فَاحفَظِ الأمانةَ لا خَوفاً مِن النَّاس، بل خَوفاً مِن ربِّ النَّاس!', en:'Allah sees you when no one else does — so guard trust not from fear of people, but from fear of the Lord of people!' },
      badge:      { icon:'🐑', title:{ar:'حارسُ الأمانة', en:'Guardian of Trust'} },
      reflect:    [ 
        {ar:'هل تَحفظُ الأمانةَ حينَ لا يَراكَ أَحَد؟', en:'Do you guard trust when no one is watching you?'},
        {ar:'ما الَّذي يَمنعُكَ مِن الخِيانةِ — خَوفُ النَّاسِ أَم خَوفُ الله؟', en:'What prevents you from betrayal — fear of people or fear of Allah?'},
        {ar:'كَيفَ تُقَوِّي مُراقَبةَ اللهِ في قَلبِك؟', en:'How do you strengthen Allah’s watchfulness in your heart?'}
      ],
      didYouKnow: [ 
        {ar:'قِصَّةُ الرَّاعي «فَأَينَ الله» مَذكورةٌ في كِتابِ موسوعة الأخلاق والزُّهد والرَّقائق — المكتبة الشاملة، صفحة ٥٣', en:'The shepherd’s story "Where is Allah?" is recorded in the Encyclopedia of Ethics, Asceticism and Spiritual Refinement — Al-Maktaba Ash-Shamila, page 53'},
        {ar:'رَواها عبدُ اللهِ بنُ دينار — مَصدَر: dorar.net و islamweb.net', en:'Narrated by Abdullah ibn Dinar — source: dorar.net and islamweb.net'},
        {ar:'كَلِمةُ «فَأَينَ الله» أَعتَقَتِ الغُلامَ في الدُّنيا، ونَرجو أن تُعتِقَهُ في الآخِرة — قالها عُمَرُ بنُ الخطَّاب رَضيَ اللهُ عنه', en:'"Where is Allah?" freed the boy in this world, and we hope it frees him in the Hereafter — said by Umar ibn al-Khattab'}
      ],
    },

    /* STORY 3 */
    {
      icon:'👔', scene:'garden', character:'👨‍💼',
      title: { ar:'تاجِرُ الحَريرِ الَّذي رَفَضَ الرِّبحَ الحَرام!', en:'The silk merchant who refused unlawful profit!' },
      pages: [
        { scene:'garden', character:'👨‍💼',
          text:{ ar:'في مَدينةِ الكوفةِ العَريقة، في زَمَنِ التَّابعين، عاشَ رَجُلٌ جَمَعَ بَينَ العِلمِ والتِّجارة، بَينَ الوَرَعِ والحِكمة. إنَّهُ الإمامُ أبو حنيفةَ النُّعمانُ بنُ ثابت — الفَقيهُ العَظيمُ وَتاجِرُ الحَريرِ الأَمين.<br><br>كانَ يَملِكُ دُكّاناً في سوقِ الكوفة، يَبيعُ فيه الأَقمِشةَ الفاخِرة. كُلُّ صَباح، كانَ يَفتَحُ دُكّانَهُ بَعدَ صَلاةِ الفَجر، ويَقولُ دائماً: <b>«أَفضَلُ المالِ الكَسبُ مِن الحَلال، وَأَطيَبُ ما يَأكُلُهُ المَرءُ مِن عَمَلِ يَدِه!»</b><br><br>كانَ التُّجَّارُ في الكوفةِ يَتَعَجَّبونَ مِنه — كَيفَ يَجمَعُ بَينَ الصِّدقِ في التِّجارةِ والعِلمِ في الفِقه؟ حتَّى شَبَّهَهُ بَعضُهُم بأبي بَكرٍ الصِّدّيقِ رَضيَ اللهُ عنه في أمانَتِه!',
                 en:'In the ancient city of Kufa, in the era of the Followers, lived a man who combined knowledge and trade, piety and wisdom. He was Imam Abu Hanifa An-Nu\'man ibn Thabit — the great jurist and trustworthy silk merchant.<br><br>He owned a shop in Kufa’s market where he sold fine fabrics. Every morning, he would open his shop after Fajr prayer, always saying: <b>"The best wealth is lawful earning, and the finest food is from one’s own work!"</b><br><br>Kufa’s merchants marveled at him — how could he combine honesty in trade with knowledge in jurisprudence? Some even compared him to Abu Bakr As-Siddiq in his trustworthiness!' } },
        { scene:'garden', character:'👩',
          text:{ ar:'في أَحَدِ الأَيَّامِ الحارَّة، دَخَلَت عَلَيهِ امرأةٌ مُسِنَّة، تَحمِلُ ثَوباً مَطويّاً بِعِناية. كانَت تَبدو فَقيرةً مُحتاجة، وَمَلابِسُها بَسيطةٌ رَثَّة.<br><br>قالَت بِصَوتٍ خافِت: «يا سَيِّدي، عِندي هذا الثَّوبُ الحَريريّ. وَرِثتُهُ عن أُمّي رَحِمَها الله، وَأُريدُ أن أَبيعَهُ لأَشتَريَ طَعاماً لأَولادي.»<br><br>أَخَذَ أبو حنيفةَ الثَّوبَ بِيَدَيهِ بِلُطف، وَفَرَدَهُ على طاوِلَتِه. كانَ ثَوباً جَميلاً مِن حَريرٍ خالِص، مَنسوجاً بِإتقانٍ عَجيب، تَتَلألَأُ خيوطُهُ تَحتَ ضَوءِ الشَّمس!<br><br>سَأَلَها بِحَنان: «وَكَم تُريدينَ ثَمَناً لَه يا أُختي؟»<br><br>نَظَرَتِ المَرأةُ إلى الثَّوبِ بِحَسرة، وَقالَت: «مِئَةُ دِرهَم... هل هذا كَثير؟»',
                 en:'On a hot day, an elderly woman entered carrying a carefully folded cloth. She appeared poor and needy, her clothes simple and worn.<br><br>She said in a soft voice: "My master, I have this silk cloth. I inherited it from my mother, may Allah have mercy on her, and I want to sell it to buy food for my children."<br><br>Abu Hanifa took the cloth gently in his hands and spread it on his table. It was a beautiful cloth of pure silk, woven with amazing precision, its threads glistening under the sunlight!<br><br>He asked her tenderly: "And how much do you want for it, my sister?"<br><br>The woman looked at the cloth regretfully and said: "One hundred dirhams... is that too much?"' } },
        { scene:'garden', character:'🤔',
          text:{ ar:'فَحَصَ أبو حنيفةَ الثَّوبَ بِدِقَّة، يَنظُرُ إلى نَسيجِه وَخيوطِه، يَتَفَحَّصُ كُلَّ زاويةٍ فيه. ثُمَّ رَفَعَ رَأسَهُ إلى المَرأة، وَقالَ بِهُدوءٍ وَوَقار:<br><br><b>«هُوَ خَيرٌ مِن ذلك يا أُختي. بِكَم تَقولين؟»</b><br><br>استَغرَبَتِ المَرأةُ! تاجِرٌ يَقولُ لَها: «ارفَعي الثَّمَن»؟! هل يَمزَحُ مَعَها؟ فَكَّرَت قَليلاً، ثُمَّ قالَت بِتَرَدُّد: «إذاً... مِئَتا دِرهَم؟»<br><br>هَزَّ أبو حنيفةَ رَأسَهُ بِهُدوء وَقالَ: <b>«هُوَ خَيرٌ مِن ذلك.»</b><br><br>الآنَ تَأَكَّدَتِ المَرأةُ أنَّهُ يَستَهزِئُ بِها! كَيفَ يَكونُ ثَوبُها القَديمُ يُساوي أَكثَرَ مِن مِئَتَي دِرهَم؟ لَكِنَّها احتاجَتِ المال، فَقالَت: «ثَلاثُمِئَة؟»',
                 en:'Abu Hanifa examined the cloth precisely, looking at its weave and threads, inspecting every corner. Then he raised his head to the woman and said calmly and with dignity:<br><br><b>"It’s worth more than that, my sister. How much do you say?"</b><br><br>The woman was shocked! A merchant telling her: "Raise the price"?! Was he joking with her? She thought a moment, then said hesitantly: "Then... two hundred dirhams?"<br><br>Abu Hanifa shook his head calmly and said: <b>"It’s worth more than that."</b><br><br>Now the woman was sure he was mocking her! How could her old cloth be worth more than two hundred dirhams? But she needed the money, so she said: "Three hundred?"' } },
        { scene:'garden', character:'😲',
          text:{ ar:'قالَ بِنَفسِ الهُدوء: «هُوَ خَيرٌ مِن ذلك.»<br><br>زادَت: «أَربَعُمِئَة؟!»<br><br>قالَ: <b>«هُوَ خَيرٌ مِن ذلك.»</b><br><br>الآنَ غَضِبَتِ المَرأةُ! ظَنَّت أنَّ هذا التَّاجِرَ يَلعَبُ بِها وَيَستَهزِئُ بِفَقرِها! فَقالَت بِحِدَّة: <b>«أَتَهزَأُ بي يا رَجُل؟! أَنا امرأةٌ فَقيرة، أَحتاجُ المال، وَأَنتَ تَضحَكُ عَلَيّ!»</b><br><br>نَظَرَ إليها أبو حنيفةَ بِعَينَينِ مَليئَتَينِ بالحَنانِ والاحتِرام، وَقالَ بِجِدِّيَّة: «لا وَاللهِ يا أُختي، ما أَهزَأُ بِكِ. وَلَكِنْ هذا الثَّوبُ قيمَتُهُ أَكثَرُ مِمَّا تَظُنّين.»',
                 en:'He said with the same calm: "It’s worth more than that."<br><br>She raised it: "Four hundred?!"<br><br>He said: <b>"It’s worth more than that."</b><br><br>Now the woman got angry! She thought this merchant was playing with her and mocking her poverty! She said sharply: <b>"Are you mocking me, man?! I’m a poor woman who needs money, and you’re laughing at me!"</b><br><br>Abu Hanifa looked at her with eyes full of tenderness and respect, and said seriously: "No, by Allah, my sister, I’m not mocking you. But this cloth is worth more than you think."' },
          choice:{ q:{ar:'لِماذا كانَ أبو حنيفةَ يَقولُ لَها ارفَعي الثَّمَن؟',en:'Why did Abu Hanifa tell her to raise the price?'},
            opts:[
              { t:{ar:'لأنَّهُ لا يُريدُ شِراءَ الثَّوب.',en:'He didn’t want to buy the cloth.'},c:false,exp:{ar:'لا — بَل كانَ يُريدُهُ لَكِنْ بِثَمَنِهِ العادِل!',en:'No — he wanted it but at its fair price!'} },
              { t:{ar:'لأنَّ الأمانةَ تَقتَضي إخبارَها بالثَّمَنِ الحَقيقيّ.',en:'Trustworthiness requires telling her the real price.'},c:true,exp:{ar:'نَعَم! مِن الأمانةِ ألّا تَغُشَّ البائعَ كَما لا تَغُشُّ المُشتَري.',en:'Yes! Trustworthiness means not cheating the seller as you don’t cheat the buyer.'} },
              { t:{ar:'لِيُظهِرَ أمامَ النَّاسِ أنَّهُ كَريم.',en:'To show people he’s generous.'},c:false,exp:{ar:'لا — كانَ يَفعلُها لِوَجهِ الله، لا لِلنَّاس.',en:'No — he did it for Allah’s sake, not for people.'} },
            ] } },
        { scene:'garden', character:'😅',
          text:{ ar:'ثُمَّ قالَ لَها: «دَعيني أُحضِرُ خَبيراً يُقَوِّمُهُ لَنا، حتَّى تَطمَئِنّي.»<br><br>خَرَجَ مِن دُكّانِه، وَعادَ بَعدَ دَقائقَ مَعَ رَجُلٍ عَجوزٍ مِن كِبارِ تُجَّارِ الحَرير. أَعطاهُ الثَّوب، فَفَحَصَهُ الخَبيرُ بِدِقَّة — نَظَرَ إلى خيوطِه، وَشَمَّ رائحتَه، وَلَمَسَ نَسيجَه، وَرَفَعَهُ إلى الضَّوء.<br><br>ثُمَّ قالَ وَهوَ يَهُزُّ رَأسَهُ بِإعجاب: «هذا حَريرٌ فارسيٌّ نادِر! نَسيجُهُ مِن أَجودِ ما رَأَيتُ في حَياتي! <b>قيمتُهُ الحَقيقيَّةُ خَمسُمِئَةِ دِرهَم، ولا أَقَلّ!</b>»<br><br>وَقَفَتِ المَرأةُ مَشدوهة! خَمسُمِئَة؟! كانَت سَتَبيعُهُ بِمِئَةٍ فَقَط! كادَت أن تَخسَرَ أَربَعَمِئَةِ دِرهَمٍ بِسَبَبِ جَهلِها!',
                 en:'Then he said to her: "Let me bring an expert to appraise it for us, so you can be reassured."<br><br>He left his shop and returned after minutes with an elderly man, one of the senior silk merchants. He gave him the cloth, and the expert examined it precisely — looked at its threads, smelled it, touched its weave, and raised it to the light.<br><br>Then he said while shaking his head admiringly: "This is rare Persian silk! Its weave is among the finest I’ve seen in my life! <b>Its true value is five hundred dirhams, no less!</b>"<br><br>The woman stood stunned! Five hundred?! She was going to sell it for just one hundred! She almost lost four hundred dirhams because of her ignorance!' } },
        { scene:'madinah', character:'💰',
          text:{ ar:'أَخرَجَ أبو حنيفةَ خَمسَمِئَةِ دِرهَمٍ مِن صُندوقِه، وَوَضَعَها في يَدِ المَرأةِ بِلُطف. كانَت يَداها تَرتَجِفانِ وَهيَ تُمسِكُ بالمال — لَم تَرَ في حَياتِها كُلِّها هذا المَبلَغ!<br><br>قالَت وَالدُّموعُ تَنهَمِرُ مِن عَينَيها: «بارَكَ اللهُ فيكَ يا سَيِّدي! لَولاكَ لَخَسِرتُ نِصفَ ثَمَنِه! ما رَأَيتُ في حَياتي تاجِراً مِثلَك!»<br><br>ابتَسَمَ أبو حنيفةَ وَقالَ: «هذا ما أَمَرَنا اللهُ بِه يا أُختي. الأمانةُ ليسَت فَقَط مع المُشتَري — بَل مع البائعِ أيضاً. لا يَحِلُّ لي أن آخُذَ مالَكِ بِأَقَلَّ مِن قيمَتِه، كَما لا يَحِلُّ لي أن أَغُشَّ مُشتَرياً وَأَبيعَهُ بِأَكثَرَ مِن قيمَتِه!»',
                 en:'Abu Hanifa took out five hundred dirhams from his box and placed them gently in the woman’s hand. Her hands trembled as she held the money — she had never seen such an amount in her entire life!<br><br>She said with tears streaming from her eyes: "May Allah bless you, my master! Without you, I would have lost half its price! I’ve never seen a merchant like you in my life!"<br><br>Abu Hanifa smiled and said: "This is what Allah commanded us, my sister. Trustworthiness isn’t only with the buyer — but with the seller too. It’s not lawful for me to take your wealth for less than its value, just as it’s not lawful to cheat a buyer and sell for more than its value!"' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'خَرَجَتِ المَرأةُ مِن الدُّكَّانِ وَقَلبُها يَفيضُ شُكراً لِلَّه، وَانتَشَرَتِ القِصَّةُ في كُلِّ أَرجاءِ الكوفة. صارَ النَّاسُ يَقولونَ: «إذا أَرَدتَ الصِّدقَ والأَمانة، فَاذهَبْ إلى أبي حنيفة!»<br><br>وَهَكَذا عَلَّمَنا الإمامُ أبو حنيفة:<br><br>💎 الأمانةُ ليسَت فَقَط مع المُشتَري — بَل مع البائعِ أيضاً<br>💎 لا تَستَغِلَّ جَهلَ النَّاسِ بِقيمةِ الأشياء<br>💎 التِّجارةُ الحَلالُ فيها بَرَكة، وَلو قَلَّ الرِّبح<br>💎 اللهُ يُباركُ في مالِ الأَمين، وَيَرفَعُ ذِكرَهُ في النَّاس<br><br>رَحِمَهُ اللهُ رَحمَةً واسِعة — كانَ نِعمَ التَّاجِرُ الأَمين، وَنِعمَ الفَقيهُ العالِم!',
                 en:'The woman left the shop with her heart overflowing with gratitude to Allah, and the story spread throughout all of Kufa. People began saying: "If you want honesty and trustworthiness, go to Abu Hanifa!"<br><br>Thus Imam Abu Hanifa taught us:<br><br>💎 Trust isn’t only with the buyer — but with the seller too<br>💎 Don’t exploit people’s ignorance of value<br>💎 Lawful trade has blessing, even if profit is small<br>💎 Allah blesses the trustworthy’s wealth and raises their reputation among people<br><br>May Allah have vast mercy on him — what a trustworthy merchant and learned jurist he was!' } },
      ],
      quiz: [
        { q:{ar:'ماذا كانَت مِهنةُ أبي حنيفة؟', en:'What was Abu Hanifa’s profession?'},
          opts:[
            { t:{ar:'تاجِرُ حَرير', en:'Silk merchant'}, c:true },
            { t:{ar:'قاضٍ', en:'Judge'}, c:false },
            { t:{ar:'خَيّاط', en:'Tailor'}, c:false }
          ] },
        { q:{ar:'لِماذا طَلَبَ مِن المَرأةِ أن تَرفَعَ الثَّمَن؟', en:'Why did he ask the woman to raise the price?'},
          opts:[
            { t:{ar:'لأنَّهُ لا يُريدُ الشِّراء', en:'He didn’t want to buy'}, c:false },
            { t:{ar:'لأنَّ الأمانةَ تَقتَضي إخبارَها بالثَّمَنِ الحَقيقيّ', en:'Trustworthiness requires telling the real price'}, c:true },
            { t:{ar:'لِيُظهِرَ كَرَمَه', en:'To show generosity'}, c:false }
          ] },
        { q:{ar:'كَم كانَت قيمةُ الثَّوبِ الحَقيقيَّة؟', en:'What was the cloth’s real value?'},
          opts:[
            { t:{ar:'مِئَة دِرهَم', en:'One hundred dirhams'}, c:false },
            { t:{ar:'ثَلاثُمِئَة دِرهَم', en:'Three hundred dirhams'}, c:false },
            { t:{ar:'خَمسُمِئَة دِرهَم', en:'Five hundred dirhams'}, c:true }
          ] },
      ],
      moral:      { ar:'الأمانةُ مع البائعِ كَالأمانةِ مع المُشتَري — لا تَستَغِلَّ جَهلَ النَّاسِ بِقيمةِ الأشياء!', en:'Trust with the seller is like trust with the buyer — don’t exploit people’s ignorance of value!' },
      badge:      { icon:'👔', title:{ar:'التَّاجِرُ الأَمين', en:'The Trustworthy Merchant'} },
      reflect:    [ 
        {ar:'لو وَجَدتَ شَيئاً رَخيصاً جِدّاً لأنَّ صاحبَهُ لا يَعرفُ قيمتَهُ، ماذا سَتَفعَل؟', en:'If you found something very cheap because its owner doesn’t know its value, what would you do?'},
        {ar:'كيفَ تُطَبِّقُ الأمانةَ في حياتِكَ اليوميَّة؟', en:'How do you apply trustworthiness in your daily life?'},
        {ar:'هل يُمكِنُ أن تَكونَ أَميناً في التِّجارةِ وَتَربَحَ في نَفسِ الوَقت؟', en:'Can you be trustworthy in trade and profit at the same time?'}
      ],
      didYouKnow: [ 
        {ar:'قِصَّةُ أبي حنيفةَ والثَّوبِ الحَريريِّ مَذكورةٌ في كِتابِ «تاريخ بغداد» للخطيب البغداديّ، ج١٣ ص٣٦٢ — مَصدَر: islamweb.net', en:'Abu Hanifa’s silk cloth story is recorded in "History of Baghdad" by Al-Khatib Al-Baghdadi, vol. 13, p. 362 — source: islamweb.net'},
        {ar:'أبو حنيفةَ كانَ يُشَبَّهُ بأبي بَكرٍ الصِّدّيقِ في الأمانةِ والصِّدقِ في التِّجارة', en:'Abu Hanifa was compared to Abu Bakr As-Siddiq in trustworthiness and honesty in trade'},
        {ar:'كانَ النَّاسُ يَقولونَ في الكوفة: «إذا أَرَدتَ الصِّدقَ والأَمانة، فَاذهَبْ إلى أبي حنيفة» — لِشُهرَتِه بالاستِقامة', en:'People in Kufa said: "If you want honesty and trust, go to Abu Hanifa" — due to his fame for integrity'}
      ],
    },

    /* STORY 4 */
    {
      icon:'🔑', scene:'mosque', character:'🕋',
      title: { ar:'مِفتاحُ الكَعبةِ — أمانةٌ تُردُّ يومَ الفَتح!', en:'The Ka\'bah’s key — a trust returned on the day of victory!' },
      pages: [
        { scene:'mosque', character:'🕋',
          text:{ ar:'في مَكَّةَ المُكَرَّمة، كانَ لِبَيتِ اللهِ الحَرامِ مِفتاحٌ عَظيم، يَحمِلُه بَنو شَيبة — عائلةٌ مِن قُرَيشٍ وَرِثوا هذا الشَّرَفَ جيلاً بَعدَ جيل، مِن أَيَّامِ إبراهيمَ عليه السَّلام.<br><br>كانَ عُثمانُ بنُ طَلحةَ هوَ حامِلُ المِفتاحِ في ذلكَ الزَّمان. كُلَّ يَومٍ كانَ يَفتَحُ بابَ الكَعبة لِلنَّاس، وَيُغلِقُهُ عِندَ الغُروب. كانَ يَفتَخِرُ بِهذه الوَظيفةِ العَظيمة، وَيَقولُ: «نَحنُ سَدَنَةُ البَيت، حُرَّاسُهُ وَخُدَّامُه!»<br><br>لَكِنَّ عُثمانَ كانَ على الشِّرك، يَعبُدُ الأصنامَ الَّتي حَولَ الكَعبة، وَيَكرَهُ النَّبيَّ ﷺ وَالمُسلمين!',
                 en:'In honored Makkah, the Sacred House of Allah had a great key, carried by Banu Shaybah — a Quraysh family who inherited this honor generation after generation, since the days of Ibrahim peace be upon him.<br><br>Uthman ibn Talhah was the key holder in that time. Every day he would open the Ka\'bah’s door for people and close it at sunset. He was proud of this great duty, saying: "We are the Ka\'bah’s custodians, its guards and servants!"<br><br>But Uthman was on polytheism, worshiping the idols around the Ka\'bah, and hating the Prophet ﷺ and the Muslims!' } },
        { scene:'mosque', character:'⚔️',
          text:{ ar:'مَرَّتِ السِّنون، وَاشتَدَّ الصِّراعُ بَينَ الحَقِّ والباطِل. حارَبَت قُرَيشٌ المُسلمينَ في بَدرٍ فَانهَزَموا، وَفي أُحُدٍ فَلَم يَنتَصِروا، وَفي الخَندَقِ فَرَجَعوا خائبين.<br><br>حتَّى جاءَ عامُ الفَتحِ العَظيم — السَّنَةُ الثَّامنةُ مِن الهِجرة. خَرَجَ النَّبيُّ ﷺ مِن المَدينةِ في عَشَرَةِ آلافِ مُسلم، يَقصِدونَ مَكَّة فاتِحين لا غازين، مُحَرِّرينَ لا مُعتَدين.<br><br>وَلَمّا رَأَت قُرَيشٌ هذا الجَيشَ العَظيم، عَرَفَت أنَّ المُقاوَمةَ مُستَحيلة. دَخَلَ النَّبيُّ ﷺ مَكَّةَ وَرَأسُهُ يَكادُ يُلامِسُ عُنُقَ دابَّتِه تَواضُعاً لِلَّه، وَهوَ يَقرَأُ سورةَ الفَتح!',
                 en:'Years passed, and the struggle between truth and falsehood intensified. Quraysh fought the Muslims at Badr and were defeated, at Uhud without victory, and at the Trench returning disappointed.<br><br>Until came the year of the Great Conquest — the eighth year of migration. The Prophet ﷺ left Madinah with ten thousand Muslims, intending Makkah as liberators not raiders, freers not aggressors.<br><br>When Quraysh saw this great army, they knew resistance was impossible. The Prophet ﷺ entered Makkah with his head nearly touching his mount’s neck in humility before Allah, reciting Surah Al-Fath!' } },
        { scene:'mosque', character:'🕋',
          text:{ ar:'ذَهَبَ النَّبيُّ ﷺ مُباشَرَةً إلى الكَعبةِ المُشَرَّفة. كانَ حَولَها ثَلاثُمِئَةٍ وَستّونَ صَنَماً — آلِهةً باطِلةً عَبَدَها المُشرِكونَ مِن دونِ الله!<br><br>أَرادَ النَّبيُّ ﷺ أن يَدخُلَ الكَعبةَ لِيُطَهِّرَها مِن الأصنام، وَيُعيدَها بَيتاً خالِصاً لِلَّهِ الواحِدِ القَهَّار. لَكِنَّ البابَ كانَ مُغلَقاً، وَالمِفتاحُ عِندَ عُثمانَ بنِ طَلحة!<br><br>أَرسَلَ النَّبيُّ ﷺ في طَلَبِ المِفتاح. جاءَ عُثمانُ وَهوَ خائفٌ مُتَرَدِّد — ماذا سَيَفعَلُ النَّبيُّ ﷺ بِالمِفتاح؟ هل سَيَأخُذُهُ مِنهُ إلى الأَبَد؟<br><br>أَعطاهُ المِفتاحَ بِيَدٍ مُرتَجِفة، وَقَلبُهُ يَخفِقُ بِقُوَّة.',
                 en:'The Prophet ﷺ went directly to the honored Ka\'bah. Around it were three hundred sixty idols — false gods the polytheists worshiped besides Allah!<br><br>The Prophet ﷺ wanted to enter the Ka\'bah to purify it from idols and restore it as a house purely for Allah the One, the Dominant. But the door was locked, and the key was with Uthman ibn Talhah!<br><br>The Prophet ﷺ sent for the key. Uthman came fearful and hesitant — what would the Prophet ﷺ do with the key? Would he take it from him forever?<br><br>He gave him the key with a trembling hand, his heart beating strongly.' } },
        { scene:'mosque', character:'✨',
          text:{ ar:'فَتَحَ النَّبيُّ ﷺ بابَ الكَعبة، وَدَخَلَ بَيتَ اللهِ الحَرام. طافَ بِه، وَصَلَّى رَكعَتَين، ثُمَّ بَدَأَ يُحَطِّمُ الأصنامَ واحِداً تِلوَ الآخَر بِعَصاهُ، وَهوَ يَقرَأ: <b>﴿ وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا ﴾</b><br><br>سَقَطَتِ الأصنامُ واحِداً تِلوَ الآخَر — تَحَطَّمَت رُؤوسُها وَتَكَسَّرَت أَذرُعُها! كانَ مَنظَراً مَهيباً — البَيتُ يُطَهَّرُ مِن الشِّرك، وَيَعودُ كَما بَناهُ إبراهيمُ عليه السَّلام: بَيتاً لِلتَّوحيدِ الخالِص!<br><br>خَرَجَ النَّبيُّ ﷺ مِن الكَعبة، وَالمِفتاحُ لا يَزالُ في يَدِه. وَقَفَ الصَّحابةُ حَولَهُ يَنتَظِرون — ماذا سَيَفعَلُ بِالمِفتاح؟',
                 en:'The Prophet ﷺ opened the Ka\'bah’s door and entered Allah’s Sacred House. He circumambulated it, prayed two units, then began breaking the idols one after another with his staff, reciting: <b>"Say: Truth has come and falsehood has vanished; indeed falsehood is bound to vanish"</b><br><br>The idols fell one after another — their heads shattered and their arms broke! It was an awesome sight — the House being purified from polytheism, returning as Ibrahim built it: a house for pure monotheism!<br><br>The Prophet ﷺ came out of the Ka\'bah with the key still in his hand. The Companions stood around him waiting — what would he do with the key?' } },
        { scene:'mosque', character:'📖',
          text:{ ar:'كانَ بَعضُ الصَّحابةِ يَظُنُّونَ أنَّ المِفتاحَ سَيُعطى لِبَني هاشِم — عائلةِ النَّبيِّ ﷺ — أو لِبَني عَبدِ المُطَّلِب. وَكانَ العَبَّاسُ عَمُّ النَّبيِّ ﷺ يَتَمَنَّى أن يُعطيَهُ المِفتاحَ لِتَجتَمِعَ في بَني هاشِم سِقايَةُ الحاجِّ وَسِدانَةُ البَيت!<br><br>لَكِنَّ اللهَ تَعالى أَنزَلَ آيةً في تِلكَ اللَّحظةِ المُباركة — آيةً عَظيمة، سَتَبقى تُتلى إلى يَومِ القِيامة:<br><br><b>﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا ﴾</b><br><br>سَمِعَها النَّبيُّ ﷺ، فَفَهِمَ الأَمرَ الإلهيَّ فَوراً. نَعَم — هذا المِفتاحُ أمانة، وَيَجِبُ أن يُردَّ لِصاحِبِه!',
                 en:'Some Companions thought the key would be given to Banu Hashim — the Prophet’s ﷺ family — or to Banu Abdul-Muttalib. Al-Abbas, the Prophet’s ﷺ uncle, hoped he would give him the key so provision of pilgrims and custodianship of the House would unite in Banu Hashim!<br><br>But Allah revealed a verse at that blessed moment — a great verse that will be recited until Judgment Day:<br><br><b>"Allah commands you to return trusts to their owners"</b><br><br>The Prophet ﷺ heard it and understood the divine command immediately. Yes — this key is a trust and must be returned to its owner!' },
          choice:{ q:{ar:'لِماذا رَدَّ النَّبيُّ ﷺ المِفتاحَ لِعُثمان؟',en:'Why did the Prophet ﷺ return the key to Uthman?'},
            opts:[
              { t:{ar:'لأنَّهُ خافَ مِن عُثمان.',en:'He feared Uthman.'},c:false,exp:{ar:'لا — كانَ المُنتَصِر! لَكِنَّ الأمانةَ لا تَسقُطُ بالنَّصر.',en:'No — he was the victor! But trust doesn’t fall with victory.'} },
              { t:{ar:'لأنَّ الأمانةَ تُؤدَّى لِصاحبِها.',en:'Because trust is returned to its owner.'},c:true,exp:{ar:'نَعَم! حتَّى في يومِ الفَتحِ — الأمانةُ أَمانة!',en:'Yes! Even on the day of victory — trust is trust!'} },
              { t:{ar:'لأنَّهُ لا يُريدُ المِفتاح.',en:'He didn’t want the key.'},c:false,exp:{ar:'لا — رَدَّهُ امتِثالاً لأَمرِ الله، لا لِعَدَمِ الحاجة.',en:'No — he returned it in obedience to Allah’s command, not lack of need.'} },
            ] } },
        { scene:'madinah', character:'😢',
          text:{ ar:'خَرَجَ النَّبيُّ ﷺ مِن الكَعبة، وَهوَ يَتلو الآية: ﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا ﴾<br><br>ثُمَّ دَعا عُثمانَ بنَ طَلحة — الرَّجُلَ الَّذي كانَ بالأَمسِ على الشِّرك، وَاليَومَ خائفٌ مُرتَجِف!<br><br>مَدَّ النَّبيُّ ﷺ يَدَهُ الشَّريفةَ بِالمِفتاح إلى عُثمان، وَنَظَرَ في عَينَيهِ نَظرَةً مَليئةً بالرَّحمةِ والعَدل، وَقالَ بِصَوتٍ وَقور:<br><br><b>«خُذوها يا بَني طَلحة، خالِدةً تالِدة، لا يَنزِعُها مِنكُم إلّا ظالِم! هاكَ مِفتاحَك يا عُثمان، اليَومَ يَومُ بِرٍّ وَوَفاء!»</b>',
                 en:'The Prophet ﷺ came out of the Ka\'bah reciting the verse: "Allah commands you to return trusts to their owners"<br><br>Then he called Uthman ibn Talhah — the man who was yesterday on polytheism, and today fearful and trembling!<br><br>The Prophet ﷺ extended his noble hand with the key to Uthman, looked into his eyes with a gaze full of mercy and justice, and said with a dignified voice:<br><br><b>"Take it, O sons of Talhah, forever and ever — no one will take it from you except a wrongdoer! Here is your key, O Uthman — today is a day of kindness and faithfulness!"</b>' } },
        { scene:'mosque', character:'🌟',
          text:{ ar:'وَقَفَ عُثمانُ بنُ طَلحةَ مَشدوهاً — لا يُصَدِّقُ ما يَحدُث! المُنتَصِرُ يَرُدُّ الأمانةَ لِلمَهزوم؟! القَويُّ يُعطي الضَّعيفَ حَقَّه؟!<br><br>هَزَّ هذا الموقفُ كِيانَهُ كُلَّه. رَأى في هذه اللَّحظةِ عَظَمةَ الإسلام، وَجَمالَ العَدل، وَرَوعةَ الأمانة. قالَ في نَفسِه: <em>«أَيُّ دينٍ هذا الَّذي يَأمُرُ المُنتَصِرَ أن يَرُدَّ الحَقَّ لِمَن كانَ عَدُوَّهُ بالأَمس؟!»</em><br><br>وَهُناك، أَمامَ الكَعبةِ المُطَهَّرة، وَأَمامَ الآلافِ مِن المُسلمين، رَفَعَ عُثمانُ بنُ طَلحةَ يَدَيهِ وَقالَ بِصَوتٍ مُرتَجِف:<br><br><b>«أَشهَدُ أن لا إلهَ إلّا الله، وَأَشهَدُ أنَّ مُحَمَّداً رَسولُ الله!»</b><br><br>أَسلَمَ عُثمان، وَحَسُنَ إسلامُه، وَبَقيَ المِفتاحُ في يَدِه وَفي أَيدي ذُرِّيَّتِه إلى يَومِنا هذا!',
                 en:'Uthman ibn Talhah stood stunned — not believing what was happening! The victor returning trust to the defeated?! The strong giving the weak his right?!<br><br>This stance shook his entire being. He saw in that moment the greatness of Islam, the beauty of justice, and the magnificence of trustworthiness. He said to himself: <em>"What religion is this that commands the victor to return the right to one who was his enemy yesterday?!"</em><br><br>There, before the purified Ka\'bah and before thousands of Muslims, Uthman ibn Talhah raised his hands and said with a trembling voice:<br><br><b>"I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah!"</b><br><br>Uthman embraced Islam, his Islam was beautiful, and the key remained in his hand and in his descendants’ hands to this very day!' } },
        { scene:'garden', character:'✨',
          text:{ ar:'وَهَكَذا عَلَّمَنا رَسولُ اللهِ ﷺ:<br><br>🔑 الأمانةُ تُؤدَّى في كُلِّ حال — حتَّى في ذُروةِ النَّصرِ والقُوَّة<br>🔑 الحَقُّ حَقٌّ ولو كانَ لِمَن يُخالِفُك في الدِّين<br>🔑 الأمانةُ سَبَبٌ لِدُخولِ قُلوبِ النَّاسِ في الإسلام<br>🔑 المُنتَصِرُ الحَقيقيُّ هوَ مَن يَملِكُ نَفسَهُ عِندَ القُدرة<br><br>وَلا يَزالُ المِفتاحُ إلى يَومِنا هذا — بَعدَ أَكثَرَ مِن ١٤٠٠ سَنَة — في أَيدي ذُرِّيَّةِ عُثمانَ بنِ طَلحة! يَفتَحونَ الكَعبةَ لِلنَّاس، وَيُغلِقونَها، جيلاً بَعدَ جيل، شاهِدينَ على عَظَمةِ الأمانةِ في الإسلام!',
                 en:'Thus the Messenger of Allah ﷺ taught us:<br><br>🔑 Trust is fulfilled in every state — even at the peak of victory and power<br>🔑 Right is right even if for one who differs from you in religion<br>🔑 Trustworthiness opens people’s hearts to Islam<br>🔑 The true victor is one who controls himself when powerful<br><br>The key remains to this very day — after more than 1400 years — in the hands of Uthman ibn Talhah’s descendants! They open the Ka\'bah for people and close it, generation after generation, witnesses to the greatness of trustworthiness in Islam!' } },
      ],
      quiz: [
        { q:{ar:'مَن كانَ يَحمِلُ مِفتاحَ الكَعبةِ قَبلَ الفَتح؟', en:'Who held the Ka\'bah’s key before the conquest?'},
          opts:[
            { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:false },
            { t:{ar:'عُثمانُ بنُ طَلحة', en:'Uthman ibn Talhah'}, c:true },
            { t:{ar:'أبو بَكرٍ الصِّدّيق', en:'Abu Bakr As-Siddiq'}, c:false }
          ] },
        { q:{ar:'ماذا فَعَلَ النَّبيُّ ﷺ بالمِفتاحِ بَعدَ الفَتح؟', en:'What did the Prophet ﷺ do with the key after the conquest?'},
          opts:[
            { t:{ar:'أَبقاهُ عِندَه', en:'Kept it with him'}, c:false },
            { t:{ar:'رَدَّهُ لِعُثمان', en:'Returned it to Uthman'}, c:true },
            { t:{ar:'أَعطاهُ لِعَليّ', en:'Gave it to Ali'}, c:false }
          ] },
        { q:{ar:'ماذا حَدَثَ لِعُثمانَ بنِ طَلحةَ بَعدَ هذا الموقف؟', en:'What happened to Uthman ibn Talhah after this stance?'},
          opts:[
            { t:{ar:'أَسلَمَ وَحَسُنَ إسلامُه', en:'He embraced Islam and his Islam was beautiful'}, c:true },
            { t:{ar:'بَقيَ على الشِّرك', en:'He remained on polytheism'}, c:false },
            { t:{ar:'هاجَرَ مِن مَكَّة', en:'He migrated from Makkah'}, c:false }
          ] },
      ],
      moral:      { ar:'الأمانةُ تُؤدَّى في كُلِّ حال — حتَّى في ذُروةِ النَّصرِ والقُوَّة. الحَقُّ حَقٌّ ولو كانَ لِعَدُوِّك!', en:'Trust is fulfilled in every state — even at the peak of victory and power. Right is right even if for your enemy!' },
      badge:      { icon:'🔑', title:{ar:'حافِظُ الأمانة', en:'Keeper of Trust'} },
      reflect:    [ 
        {ar:'هل تَرُدُّ الحُقوقَ حتَّى حينَ يَكونُ لَكَ القُوَّةُ والسُّلطان؟', en:'Do you return rights even when you have power and authority?'},
        {ar:'كيفَ تُؤثِّرُ الأمانةُ على نَظرةِ النَّاسِ لِلإسلام؟', en:'How does trustworthiness affect people’s view of Islam?'},
        {ar:'ما الدَّرسُ الأَعظَمُ الَّذي تَعَلَّمتَهُ مِن قِصَّةِ رَدِّ المِفتاح؟', en:'What’s the greatest lesson you learned from the story of returning the key?'}
      ],
      didYouKnow: [ 
        {ar:'قِصَّةُ رَدِّ مِفتاحِ الكَعبةِ مَذكورةٌ في تَفسيرِ الطَّبَريّ وابنِ كَثير، وَنَزَلَت الآيةُ ﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا ﴾ في هذا الموقف — مَصدَر: islamweb.net', en:'The story of returning the Ka\'bah’s key is in Tafsir At-Tabari and Ibn Kathir; the verse "Allah commands you to return trusts to their owners" was revealed in this situation — source: islamweb.net'},
        {ar:'المِفتاحُ لا يَزالُ في أَيدي ذُرِّيَّةِ عُثمانَ بنِ طَلحةَ حتَّى اليَوم — أَكثَرَ مِن ١٤٠٠ سَنَة!', en:'The key remains in Uthman ibn Talhah’s descendants’ hands to this day — over 1400 years!'},
        {ar:'أَسلَمَ عُثمانُ بنُ طَلحةَ بَعدَ هذا الموقف، وَحَسُنَ إسلامُه، وَبَقِيَ شَرَفُ السِّدانةِ في عائلَتِه إلى اليَوم', en:'Uthman ibn Talhah embraced Islam after this stance, his Islam was beautiful, and the honor of custodianship remained in his family to this day'}
      ],
    },
  ],

  /* ───── ROOM 3: Memorize ───── */
  memorize: {
    verses: [
      { text:{ar:'﴿ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا ﴾', en:'"Allah commands you to return trusts to their owners."'},
        ref:{ar:'[سورة النساء: ٥٨]', en:'[Surah An-Nisa: 58]'} },
      { text:{ar:'﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللَّهَ وَالرَّسُولَ وَتَخُونُوا أَمَانَاتِكُمْ وَأَنتُمْ تَعْلَمُونَ ﴾', en:'"O believers — do not betray Allah and the Messenger, nor betray your trusts knowingly."'},
        ref:{ar:'[سورة الأنفال: ٢٧]', en:'[Surah Al-Anfal: 27]'} },
      { text:{ar:'﴿ وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ ﴾', en:'"And those who are faithful to their trusts and their pledges."'},
        ref:{ar:'[سورة المؤمنون: ٨]', en:'[Surah Al-Mu\'minun: 8]'} },
      { text:{ar:'﴿ إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ فَأَبَيْنَ أَن يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا وَحَمَلَهَا الْإِنسَانُ ﴾', en:'"We offered the trust to the heavens, earth, and mountains, but they refused to bear it and were afraid. Yet man undertook it."'},
        ref:{ar:'[سورة الأحزاب: ٧٢]', en:'[Surah Al-Ahzab: 72]'} },
    ],
    hadiths: [
      { text:{ar:'«لا إيمانَ لِمَن لا أمانةَ له، ولا دينَ لِمَن لا عَهدَ له»', en:'"No faith for one without trust, no religion for one without keeping their word."'},
        ref:{ar:'[رواه أحمد — حديث ١٢٣٨٤]', en:'[Ahmad — 12384]'} },
      { text:{ar:'«أَدِّ الأمانةَ إلى مَن ائتَمَنَكَ، ولا تَخُنْ مَن خانَك»', en:'"Return the trust to one who trusted you, and do not betray one who betrayed you."'},
        ref:{ar:'[رواه أبو داود والترمذي]', en:'[Abu Dawud & Tirmidhi]'} },
      { text:{ar:'«آيةُ المُنافِقِ ثَلاث: إذا حَدَّثَ كَذَب، وإذا وَعَدَ أَخلَف، وإذا اؤتُمِنَ خان»', en:'"The sign of a hypocrite is three: when he speaks, he lies; when he promises, he breaks it; and when trusted, he betrays."'},
        ref:{ar:'[متفق عليه — البخاري ومسلم]', en:'[Agreed upon — Bukhari & Muslim]'} },
    ],
    pledge: {
      title: {ar:'عَهدُ الأمانة', en:'Pledge of Trustworthiness'},
      lines: [
        {ar:'أَعِدُ أن أَحفَظَ كُلَّ أمانةٍ وُضِعَت عِندي — مالاً أو سِرّاً أو عَمَلاً', en:'I pledge to guard every trust placed with me — wealth, secret, or work'},
        {ar:'وَأَعِدُ أن أَرُدَّ الحُقوقَ لأَهلِها — حتَّى لو كانوا أَعدائي', en:'I pledge to return rights to their owners — even if they are my enemies'},
        {ar:'وَأَعِدُ أن أَتَذَكَّرَ أنَّ اللهَ يَراني — في السِّرِّ والعَلَن', en:'I pledge to remember that Allah sees me — in private and public'},
        {ar:'وَأَعِدُ أن أَكونَ أَميناً كَما كانَ نَبيُّنا ﷺ', en:'I pledge to be trustworthy as our Prophet ﷺ was'},
        {ar:'وَأَعِدُ ألّا أَخونَ أَمانةً مَهما كانَت صَغيرة', en:'I pledge never to betray a trust no matter how small'},
        {ar:'وَأَعِدُ أن أُتقِنَ عَمَلي وَأُؤدِّيَ واجباتي بِإخلاص', en:'I pledge to excel at my work and fulfill my duties sincerely'},
      ],
      dua: {ar:'اللَّهُمَّ اجعَلني مِن الأُمَناءِ الصَّادقين، واحفَظني مِن الخِيانةِ والغَدر، آمين!', en:'O Allah, make me among the sincere and trustworthy, and guard me from betrayal and treachery, Amin!'},
    },
  },

  /* ───── ROOM 4: Activities (6 types × 3 levels = 18 tasks, 180 points) ───── */
  activities: {
    totalPoints: 180,
    list: [

      /* 1. KNOW (fill/true-false/MCQ) */
      { id:'know', icon:'📝', kind:'fill', title:{ar:'اختبار المعرفة', en:'Knowledge Test'},
        levels: [
          { kind:'fillBlanks', points:30,
            wordBank: {ar:['الأمانة','المال','السِّر','العمل','الولاية'], en:['trust','wealth','secret','work','authority']},
            items: [
              { prefix:{ar:'إنَّ اللهَ يَأمُرُكُم أن تُؤدُّوا',en:'Allah commands you to return'}, answer:{ar:'الأمانات',en:'trusts'}, suffix:{ar:'إلى أهلِها',en:'to their owners'} },
              { prefix:{ar:'أمانةُ',en:'Trust with'}, answer:{ar:'المال',en:'wealth'}, suffix:{ar:'تَعني حِفظَ ما أُودِعَ عندك',en:'means guarding what’s deposited with you'} },
              { prefix:{ar:'مِن أنواعِ الأمانةِ: أمانةُ',en:'Types of trust: trust with'}, answer:{ar:'السِّرّ',en:'secret'}, suffix:{ar:'وَكِتمانُه',en:'and concealing it'} },
              { prefix:{ar:'مِن الأمانةِ: إتقانُ',en:'From trust: excellence in'}, answer:{ar:'العمل',en:'work'}, suffix:{ar:'وَأَداؤُهُ كما يَنبغي',en:'and doing it properly'} },
              { prefix:{ar:'أمانةُ',en:'Trust in'}, answer:{ar:'الولاية',en:'authority'}, suffix:{ar:'تَعني العَدلَ في المَسؤوليَّة',en:'means justice in responsibility'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'الأمانةُ واجبةٌ حتَّى مع الأعداء', en:'Trust is obligatory even with enemies'}, t:true },
              { q:{ar:'يَجوزُ خِيانةُ مَن خانَك', en:'It’s allowed to betray one who betrayed you'}, t:false },
              { q:{ar:'رَدَّ النَّبيُّ ﷺ الأماناتِ يومَ الهِجرة', en:'The Prophet ﷺ returned trusts on migration day'}, t:true },
              { q:{ar:'الأمانةُ تَشمَلُ المالَ فَقَط', en:'Trust includes only wealth'}, t:false },
              { q:{ar:'قالَ الرَّاعي لِعُمَر: فَأَينَ الله؟', en:'The shepherd said to Umar: Where is Allah?'}, t:true },
              { q:{ar:'مِن الأمانةِ إفشاءُ أسرارِ النَّاس', en:'Revealing people’s secrets is part of trust'}, t:false },
              { q:{ar:'أبو حنيفةَ كانَ تاجِرَ حَريرٍ أَميناً', en:'Abu Hanifa was a trustworthy silk merchant'}, t:true },
              { q:{ar:'يَجوزُ استغلالُ جَهلِ النَّاسِ في البَيع', en:'Exploiting people’s ignorance in selling is allowed'}, t:false },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مَن قالَ: «لا إيمانَ لِمَن لا أمانةَ له»؟', en:'Who said: "No faith for one without trust"?'},
                opts:[
                  { t:{ar:'النَّبيُّ ﷺ', en:'The Prophet ﷺ'}, c:true },
                  { t:{ar:'أبو بَكر', en:'Abu Bakr'}, c:false },
                  { t:{ar:'عُمَر', en:'Umar'}, c:false }
                ] },
              { q:{ar:'ماذا فَعَلَ أبو حنيفةَ لَمّا جاءَتهُ المرأةُ بالثَّوب؟', en:'What did Abu Hanifa do when the woman came with the cloth?'},
                opts:[
                  { t:{ar:'اشتَراهُ بِسِعرٍ رَخيص', en:'Bought it cheaply'}, c:false },
                  { t:{ar:'طَلَبَ مِنها رَفعَ الثَّمَن', en:'Asked her to raise the price'}, c:true },
                  { t:{ar:'رَفَضَ الشِّراء', en:'Refused to buy'}, c:false }
                ] },
              { q:{ar:'لِمَن رَدَّ النَّبيُّ ﷺ مِفتاحَ الكَعبة؟', en:'To whom did the Prophet ﷺ return the Ka\'bah’s key?'},
                opts:[
                  { t:{ar:'أبي بَكر', en:'Abu Bakr'}, c:false },
                  { t:{ar:'عُثمانَ بنِ طَلحة', en:'Uthman ibn Talhah'}, c:true },
                  { t:{ar:'عَليّ', en:'Ali'}, c:false }
                ] },
              { q:{ar:'ما الَّذي يَمنعُ الأَمينَ مِن الخِيانة؟', en:'What prevents the trustworthy from betrayal?'},
                opts:[
                  { t:{ar:'خَوفُ النَّاس', en:'Fear of people'}, c:false },
                  { t:{ar:'مُراقَبةُ الله', en:'Awareness of Allah'}, c:true },
                  { t:{ar:'الخَوفُ مِن العِقاب', en:'Fear of punishment'}, c:false }
                ] },
              { q:{ar:'ما أَعظَمُ أمانةٍ ائتَمَنَنا اللهُ عليها؟', en:'What’s the greatest trust Allah entrusted us with?'},
                opts:[
                  { t:{ar:'التَّوحيدُ والعِبادات', en:'Monotheism and worship'}, c:true },
                  { t:{ar:'المالُ والتِّجارة', en:'Wealth and trade'}, c:false },
                  { t:{ar:'الأسرارُ فَقَط', en:'Secrets only'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 2. FLIP/MATCH */
      { id:'flip', icon:'🎴', kind:'flipMatch', title:{ar:'التَّطابُق', en:'Matching'},
        levels: [
          { kind:'flipMatch', points:30,
            pairs: [
              { a:{ar:'أمانةُ المال', en:'Trust with wealth'}, b:{ar:'حِفظُ الوَديعة', en:'Guarding deposits'} },
              { a:{ar:'أمانةُ السِّرّ', en:'Trust with secrets'}, b:{ar:'كِتمانُ ما ائتَمَنَك', en:'Concealing what’s entrusted'} },
              { a:{ar:'أمانةُ العمل', en:'Trust in work'}, b:{ar:'إتقانُ الوَظيفة', en:'Excelling at the job'} },
              { a:{ar:'أمانةُ الولاية', en:'Trust in authority'}, b:{ar:'العَدلُ في القيادة', en:'Justice in leadership'} },
              { a:{ar:'أمانةُ العَهد', en:'Trust in promises'}, b:{ar:'الوَفاءُ بالوَعد', en:'Fulfilling promises'} },
              { a:{ar:'أمانةُ الشَّهادة', en:'Trust in testimony'}, b:{ar:'الصِّدقُ في الشَّهادة', en:'Honesty in testimony'} },
            ]
          },
          { kind:'match', points:30,
            left: [
              { id:1, t:{ar:'رَدُّ الأماناتِ يومَ الهِجرة', en:'Returning trusts on migration day'} },
              { id:2, t:{ar:'«فَأَينَ الله؟»', en:'"Where is Allah?"'} },
              { id:3, t:{ar:'ثَوبُ الحَرير', en:'The silk cloth'} },
              { id:4, t:{ar:'مِفتاحُ الكَعبة', en:'The Ka\'bah’s key'} },
            ],
            right: [
              { id:4, t:{ar:'عُثمانُ بنُ طَلحة', en:'Uthman ibn Talhah'} },
              { id:1, t:{ar:'عَليُّ بنُ أبي طالب', en:'Ali ibn Abi Talib'} },
              { id:3, t:{ar:'أبو حنيفة', en:'Abu Hanifa'} },
              { id:2, t:{ar:'الرَّاعي الصَّغير', en:'The young shepherd'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما أَعظَمُ أمانةٍ ائتَمَنَنا اللهُ عليها؟', en:'What’s the greatest trust Allah entrusted us with?'},
                opts:[
                  { t:{ar:'التَّوحيدُ والفَرائض', en:'Monotheism and duties'}, c:true },
                  { t:{ar:'المالُ فَقَط', en:'Wealth only'}, c:false },
                  { t:{ar:'الأسرار', en:'Secrets'}, c:false }
                ] },
              { q:{ar:'ماذا يَحدثُ لِمَن خانَ الأمانة؟', en:'What happens to one who betrays trust?'},
                opts:[
                  { t:{ar:'يَومَ القيامةِ خِزيٌ ونَدامة', en:'On Judgment Day, shame and regret'}, c:true },
                  { t:{ar:'لا شَيء', en:'Nothing'}, c:false },
                  { t:{ar:'يُكافَأ', en:'They’re rewarded'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 3. SORT (good/bad behaviors) */
      { id:'sort', icon:'🗂️', kind:'sort', title:{ar:'التَّرتيب', en:'Sorting'},
        levels: [
          { kind:'sort', points:30,
            items: [
              { t:{ar:'حِفظُ سِرِّ صَديقي', en:'Keeping my friend’s secret'}, good:true },
              { t:{ar:'إتقانُ واجباتي المَدرسيَّة', en:'Excelling at my homework'}, good:true },
              { t:{ar:'إفشاءُ ما ائتَمَنَني عليه', en:'Revealing what I was entrusted with'}, good:false },
              { t:{ar:'رَدُّ الأمانةِ لِصاحبِها', en:'Returning trust to its owner'}, good:true },
              { t:{ar:'الاحتفاظُ بِما لَيسَ لي', en:'Keeping what’s not mine'}, good:false },
              { t:{ar:'أَداءُ الصَّلاةِ في وَقتِها', en:'Praying on time'}, good:true },
              { t:{ar:'الكَذِبُ لإخفاءِ الخِيانة', en:'Lying to hide betrayal'}, good:false },
              { t:{ar:'الوَفاءُ بالوَعد', en:'Fulfilling promises'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'تَسليمُ الضَّائعِ لِصاحبِه', en:'Returning the lost item to its owner'}, good:true },
              { t:{ar:'الكَذِبُ لإخفاءِ الخِيانة', en:'Lying to hide betrayal'}, good:false },
              { t:{ar:'الصِّدقُ في البَيعِ والشِّراء', en:'Honesty in buying and selling'}, good:true },
              { t:{ar:'استغلالُ جَهلِ النَّاس', en:'Exploiting people’s ignorance'}, good:false },
              { t:{ar:'القيامُ بالمَسؤوليَّةِ بإخلاص', en:'Fulfilling responsibility sincerely'}, good:true },
              { t:{ar:'التَّهاونُ في حُقوقِ الآخَرين', en:'Being careless with others’ rights'}, good:false },
              { t:{ar:'حِفظُ أَموالِ النَّاس', en:'Guarding people’s wealth'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'التَّفريطُ في العَمَل', en:'Neglecting work'}, good:false },
              { t:{ar:'حِفظُ مالِ الغَير', en:'Guarding others’ wealth'}, good:true },
              { t:{ar:'الأمانةُ مع الأعداء', en:'Trust even with enemies'}, good:true },
              { t:{ar:'خِيانةُ مَن خانَني', en:'Betraying one who betrayed me'}, good:false },
              { t:{ar:'أَداءُ الحُقوقِ كامِلة', en:'Fulfilling rights completely'}, good:true },
              { t:{ar:'التَّلاعُبُ بالأمانات', en:'Manipulating trusts'}, good:false },
            ]
          },
        ]
      },

      /* 4. CIPHER (emoji/number codes) */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ar:'الشِّفرة', en:'Cipher'},
        levels: [
          { kind:'cipher', points:30,
            key: {ar:{'🌸':'أ','💧':'م','⭐':'ن','🔑':'ة'}, en:{'🌸':'t','💧':'r','⭐':'u','🔑':'s','🌙':'t'}},
            puzzles: [
              { symbols:{ar:'🌸 💧 🌸 ⭐ 🔑',en:'🌸 💧 🌙 🌙 🔑'}, answer:{ar:'أمانة',en:'trust'} },
              { symbols:{ar:'🌸 💧 🌸 ⭐',en:'🌸 💧 🌙 🔑'}, answer:{ar:'أمان',en:'true'} },
              { symbols:{ar:'⭐ 🔑 💧 🌸',en:'🔑 🌙 💧 🌸'}, answer:{ar:'نصرة',en:'sure'} },
              { symbols:{ar:'💧 🌸 ⭐ 🔑',en:'💧 🌙 🌙 🔑'}, answer:{ar:'مانع',en:'rust'} },
              { symbols:{ar:'🌸 💧 ⭐ 🔑',en:'🌸 🔑 🌙 🔑'}, answer:{ar:'أمنة',en:'test'} },
            ]
          },
          { kind:'cipher', points:30,
            key: {ar:{'أ':1,'م':2,'ا':3,'ن':4,'ة':5}, en:{'t':1,'r':2,'u':3,'s':4,'t':5}},
            puzzles: [
              { symbols:{ar:'1-2-1-4-5',en:'1-2-3-4-1'}, answer:{ar:'أمانة',en:'trust'} },
              { symbols:{ar:'4-5-2-1',en:'1-2-3-5'}, answer:{ar:'نصرة',en:'true'} },
              { symbols:{ar:'1-2-1-4',en:'4-3-2-5'}, answer:{ar:'أمان',en:'sure'} },
              { symbols:{ar:'2-1-4-5',en:'2-3-4-1'}, answer:{ar:'مانع',en:'rust'} },
              { symbols:{ar:'1-2-4-5',en:'1-5-3-5'}, answer:{ar:'أمنة',en:'test'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما الَّذي يَمنعُ الأمينَ مِن الخِيانة؟', en:'What prevents the trustworthy from betrayal?'},
                opts:[
                  { t:{ar:'خَوفُ النَّاس', en:'Fear of people'}, c:false },
                  { t:{ar:'مُراقَبةُ الله', en:'Awareness of Allah'}, c:true },
                  { t:{ar:'طَمَعُ المُكافأة', en:'Greed for reward'}, c:false }
                ] },
              { q:{ar:'كيفَ نُحافِظُ على الأمانة؟', en:'How do we guard trust?'},
                opts:[
                  { t:{ar:'بِتَذَكُّرِ أنَّ اللهَ يَرانا', en:'By remembering Allah sees us'}, c:true },
                  { t:{ar:'بِالخَوفِ مِن العِقاب', en:'By fearing punishment'}, c:false },
                  { t:{ar:'بِطَلَبِ الشُّهرة', en:'By seeking fame'}, c:false }
                ] },
              { q:{ar:'ماذا يَحدثُ لِمَن خانَ الأمانة؟', en:'What happens to one who betrays trust?'},
                opts:[
                  { t:{ar:'يَفقِدُ ثِقةَ النَّاس', en:'Loses people’s trust'}, c:true },
                  { t:{ar:'يَزدادُ مالُه', en:'His wealth increases'}, c:false },
                  { t:{ar:'يُحِبُّهُ النَّاس', en:'People love him'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 5. SCENARIOS (real-life situations) */
      { id:'scen', icon:'🎭', kind:'mcq', title:{ar:'المَواقِف', en:'Scenarios'},
        levels: [
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'وَجَدتَ مَحفظةً في الشَّارع. ماذا تَفعَل؟', en:'You found a wallet in the street. What do you do?'},
                opts:[
                  { t:{ar:'أَبحثُ عن صاحبِها أو أُسَلِّمُها للشُّرطة', en:'Search for its owner or give it to police'}, c:true },
                  { t:{ar:'آخُذُها لِنَفسي', en:'Take it for myself'}, c:false },
                  { t:{ar:'أَتَظاهَرُ أَنَّني لَم أَرَها', en:'Pretend I didn’t see it'}, c:false },
                ] },
              { q:{ar:'صَديقُكَ أَودَعَ عندكَ سِرّاً. ماذا تَفعَل؟', en:'Your friend entrusted you with a secret. What do you do?'},
                opts:[
                  { t:{ar:'أَكتُمُهُ ولا أُخبِرُ أَحَداً', en:'Keep it and tell no one'}, c:true },
                  { t:{ar:'أُخبِرُ صَديقاً واحداً فَقَط', en:'Tell just one friend'}, c:false },
                  { t:{ar:'أَنشُرُهُ على الجَميع', en:'Spread it to everyone'}, c:false },
                ] },
              { q:{ar:'اشتَرَيتَ شَيئاً وَأَعطاكَ البائعُ نُقوداً زيادة. ماذا تَفعَل؟', en:'You bought something and the seller gave you extra change. What do you do?'},
                opts:[
                  { t:{ar:'أُرجِعُ لَهُ المالَ الزَّائد', en:'Return the extra money to him'}, c:true },
                  { t:{ar:'أَحتَفِظُ بِهِ وَأَفرَح', en:'Keep it and be happy'}, c:false },
                  { t:{ar:'أُعطيهِ لِلفُقَراء', en:'Give it to the poor'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'أَعطاكَ المُعَلِّمُ أَوراقَ الامتحانِ لِتوزِّعَها. ماذا تَفعَل؟', en:'The teacher gave you exam papers to distribute. What do you do?'},
                opts:[
                  { t:{ar:'أوزِّعُها بأمانةٍ ولا أَنظُرُ فيها', en:'Distribute them honestly without looking'}, c:true },
                  { t:{ar:'أَنظُرُ في الأسئلة', en:'Look at the questions'}, c:false },
                  { t:{ar:'أُخبِرُ أَصدقائي بالأسئلة', en:'Tell my friends the questions'}, c:false },
                ] },
              { q:{ar:'استَلَمتَ مالاً لِتُوصِلَهُ لِشَخصٍ آخَر. ماذا تَفعَل؟', en:'You received money to deliver to someone. What do you do?'},
                opts:[
                  { t:{ar:'أُوصِلُهُ كامِلاً كَما هُو', en:'Deliver it complete as it is'}, c:true },
                  { t:{ar:'آخُذُ جُزءاً مِنهُ كَأُجرة', en:'Take part as a fee'}, c:false },
                  { t:{ar:'أَحتَفِظُ بِهِ لِنَفسي', en:'Keep it for myself'}, c:false },
                ] },
              { q:{ar:'صاحِبُ الدُّكَّانِ نَسِيَ أن يَحسُبَ ثَمَنَ شَيءٍ اشتَرَيتَه. ماذا تَفعَل؟', en:'The shop owner forgot to charge for something you bought. What do you do?'},
                opts:[
                  { t:{ar:'أُذَكِّرُهُ وَأَدفَعُ الثَّمَن', en:'Remind him and pay the price'}, c:true },
                  { t:{ar:'أَخرُجُ بِسُرعةٍ قَبلَ أن يَنتَبِه', en:'Leave quickly before he notices'}, c:false },
                  { t:{ar:'أَتَظاهَرُ أَنَّني لَم أَلحَظ', en:'Pretend I didn’t notice'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'أَخطَأتَ في العَمَلِ ولا أَحَدَ رآك. ماذا تَفعَل؟', en:'You made a mistake at work and no one saw. What do you do?'},
                opts:[
                  { t:{ar:'أُخبِرُ المَسؤولَ بالخَطَأ', en:'Tell the supervisor about the mistake'}, c:true },
                  { t:{ar:'أُخفي الخَطَأ', en:'Hide the mistake'}, c:false },
                  { t:{ar:'أُلقي اللَّومَ على غَيري', en:'Blame someone else'}, c:false },
                ] },
              { q:{ar:'وَعَدتَ صَديقَكَ بِمُساعَدَتِهِ لَكِنْ جاءَتكَ دَعوةٌ لِلَّعِب. ماذا تَفعَل؟', en:'You promised your friend to help him but got an invitation to play. What do you do?'},
                opts:[
                  { t:{ar:'أُساعِدُ صَديقي كَما وَعَدتُ', en:'Help my friend as I promised'}, c:true },
                  { t:{ar:'أَذهَبُ لِلَّعِب وَأَعتَذِرُ لاحِقاً', en:'Go play and apologize later'}, c:false },
                  { t:{ar:'أَكذِبُ وَأَقولُ إنَّني مَريض', en:'Lie and say I’m sick'}, c:false },
                ] },
            ]
          },
        ]
      },

      /* 6. MAZE */
      { id:'maze', icon:'🧩', kind:'maze', title:{ar:'الأَلغاز', en:'Puzzles'},
        levels: [
          { kind:'maze', points:30, sizes:[5,7,9] },
          { kind:'maze', points:30, sizes:[7,9,11] },
          { kind:'maze', points:30, sizes:[9,11,13] },
        ]
      },
    ],
  },

  /* ───── ROOM 5: Treasures — RAINBOW colored stickers ───── */
  treasures: [
    { icon:'💚', color:'#27AE60', title:{ar:'قَلبُ الأَمين',      en:'The Trustworthy Heart' } },
    { icon:'🔑', color:'#1ABC9C', title:{ar:'مِفتاحُ الجَنَّة',   en:'Key to Paradise' } },
    { icon:'🌟', color:'#F4D03F', title:{ar:'نَجمةُ الصِّدق',     en:'Star of Honesty' } },
    { icon:'🛡️', color:'#2980B9', title:{ar:'دِرعُ المُراقَبة',   en:'Shield of Watchfulness' } },
    { icon:'📜', color:'#E67E22', title:{ar:'عَهدُ الوَفاء',      en:'Pledge of Loyalty' } },
    { icon:'💎', color:'#8E44AD', title:{ar:'جَوهَرةُ الأمانة',   en:'Gem of Trust' } },
  ],

  /* ───── HOUSE ICON (certificate seal emoji) ───── */
  icon: '🔑',

  /* ───── MAGIC MIX — practical daily actions ───── */
  magicMixTitle: { ar:'كيف تَعيشُ الأمانةَ كُلَّ يوم؟', en:'How do you live trustworthiness every day?' },
  formulaEq: { ar:'مُراقَبة + صِدق + وَفاء = أَمين 🏆', en:'Watchfulness + Honesty + Loyalty = Trustworthy 🏆' },
  magicMix: [
    { icon:'👀', title:{ar:'تَذَكَّرْ أنَّ اللهَ يَراك',en:'Remember Allah sees you'},
      body:{ar:'قَبلَ أيِّ فِعلٍ قُل في قَلبِك: «اللهُ يَراني» — وَسَتَحفَظُ الأمانة.',en:'Before any act, say in your heart: "Allah sees me" — you’ll guard the trust.'} },
    { icon:'💰', title:{ar:'احفَظِ الأماناتِ كَما هي',en:'Guard trusts as they are'},
      body:{ar:'إذا وُضِعَ عِندكَ مالٌ أو سِرٌّ أو عَمَل — احفَظهُ كأنَّهُ عَينُك!',en:'If wealth, secret, or work is placed with you — guard it like your own eye!'} },
    { icon:'🤝', title:{ar:'أَوفِ بِعُهودِك',en:'Fulfill your promises'},
      body:{ar:'إذا وَعَدتَ فَلا تُخلِف — الوَعدُ أمانة.',en:'If you promise, don’t break it — a promise is a trust.'} },
    { icon:'📝', title:{ar:'أَتقِنْ عَمَلَك',en:'Excel at your work'},
      body:{ar:'العَمَلُ أمانة — فَأَدِّهِ كأَحسَنِ ما يَكون!',en:'Work is a trust — do it as best as possible!'} },
    { icon:'🤐', title:{ar:'اكتُمِ الأَسرار',en:'Keep secrets'},
      body:{ar:'ما ائتَمَنَكَ عليه أَحَدٌ لا تُفشِهِ — السِّرُّ أمانة.',en:'What someone entrusted you with, don’t reveal — secrets are trusts.'} },
    { icon:'🌟', title:{ar:'رُدَّ الحُقوقَ حتَّى لأَعدائك',en:'Return rights even to enemies'},
      body:{ar:'الأمانةُ لا تَسقُطُ بالعَداوة — رُدَّ الحَقَّ لِمَن ائتَمَنَك ولو كانَ عَدُوَّك.',en:'Trust doesn’t fall with enmity — return the right to who trusted you, even if an enemy.'} },
    { icon:'⏰', title:{ar:'أَدِّ الصَّلاةَ في وَقتِها',en:'Pray on time'},
      body:{ar:'الصَّلاةُ أَعظَمُ أمانة — فَاحفَظها في وَقتِها بِخُشوع.',en:'Prayer is the greatest trust — guard it in its time with reverence.'} },
    { icon:'📚', title:{ar:'صاحِبْ أَهلَ الأمانة',en:'Befriend the trustworthy'},
      body:{ar:'الصَّاحِبُ ساحِب — فَصاحِبْ مَن يَحفَظُ الأمانةَ لِتَتَعَلَّمَ مِنه.',en:'Friends pull you — so befriend those who keep trust to learn from them.'} },
    { icon:'💭', title:{ar:'تَذَكَّرْ عاقِبةَ الخِيانة',en:'Recall betrayal’s consequence'},
      body:{ar:'الخِيانةُ خِزيٌ في الدُّنيا وَنَدامةٌ يَومَ القِيامة — فَاحذَرها!',en:'Betrayal is shame in this world and regret on Judgment Day — beware of it!'} },
    { icon:'📖', title:{ar:'اقرَأ سِيَرَ الأُمَناء',en:'Read biographies of the trustworthy'},
      body:{ar:'اقرَأ عن النَّبيِّ ﷺ وَالصَّحابةِ وَكَيفَ حَفِظوا الأمانة — وَاقتَدِ بهم.',en:'Read about the Prophet ﷺ and Companions and how they kept trust — and follow them.'} },
  ],

  /* ───── CERTIFICATE TEXT ───── */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ الأمانة', en:'Awarded to those who completed the House of Trust' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>حِفظَ الحُقوقِ وَأَداءَها كَما هي</b> — اقتداءً بالنَّبيِّ ﷺ الَّذي رَدَّ الأماناتِ يومَ الهِجرة، وَبالرَّاعي الَّذي قالَ «فَأَينَ الله؟»، وَبأبي حنيفةَ التَّاجِرِ الأمين، وَبعُثمانَ بنِ طَلحةَ حامِلِ مِفتاحِ الكَعبة.',
                 en:'For mastering <b>guarding rights and fulfilling them as they are</b> — following the Prophet ﷺ who returned trusts on migration day, the shepherd who said "Where is Allah?", Abu Hanifa the trustworthy merchant, and Uthman ibn Talhah, keeper of the Ka\'bah’s key.' },
  },

};
