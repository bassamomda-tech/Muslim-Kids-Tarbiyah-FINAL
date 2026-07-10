/* corners/stories/minaret-little/kutub.js — رحلة البلاغ (الكتب) للصغار (٣–٦)
   ٩ حكايات مبسّطة من محطات «رحلة البلاغ» في منارة العقيدة — الكتبُ السماويةُ ومعجزاتُ الرسل.
   كل صفحة: emoji (بديل مؤقت) + text (سطران سهلان) + prompt (وصف صورة إنجليزي لتوليدها لاحقاً).
   ملاحظة فنية: لا نُصوِّر الأنبياءَ ولا وجوهَهم. */
window.MINARET_LITTLE = window.MINARET_LITTLE || {};
window.MINARET_LITTLE.kutub = {
  id:'kutub', icon:'📜', color:'#C9A227', title:'رِحْلَةُ الْبَلَاغ', tag:'الْكُتُبُ وَمُعْجِزَاتُ الرُّسُل',
  stories:[

{ id:'map', icon:'🗺️', color:'#2980B9', title:'خَرِيطَةُ الله',
  tag:'لِمَاذَا أَرْسَلَ اللهُ الرُّسُلَ وَالْكُتُب؟',
  pages:[
    { emoji:'🧩', text:'عَرَفْنَا اللهَ بِعُقُولِنَا مِنْ آثَارِ صُنْعِهِ. لَكِنْ بَقِيَ سُؤَال: مَاذَا يُرِيدُ اللهُ مِنِّي؟',
      prompt:'A child looking up at a starry sky with a thoughtful question mark, wondering and warm' },
    { emoji:'🌀', text:'تَخَيَّلْ نَفْسَكَ فِي مَتَاهَةٍ كَبِيرَة. تَعْرِفُ أَنَّ لَهَا مُصَمِّمًا، لَكِنْ لَا تَعْرِفُ طَرِيقَ الْخُرُوج!',
      prompt:'A friendly colorful maze seen from above with a small child in the middle, puzzled, bright illustration' },
    { emoji:'💌', text:'فَأَرْسَلَ اللهُ الرَّحِيمُ رُسُلًا يُعَلِّمُونَنَا، وَكُتُبًا مِنَ السَّمَاءِ هِيَ رَسَائِلُهُ إِلَيْنَا.',
      prompt:'A glowing letter of light descending gently from the sky toward open hands, hope and guidance' },
    { emoji:'💚', text:'فِيهَا مَنْ هُوَ اللهُ، وَمَاذَا يُحِبّ، وَكَيْفَ نَصِلُ إِلَيْه. مَا أَجْمَلَ خَرِيطَةَ السَّمَاء!',
      prompt:'A treasure map made of light leading to a glowing destination, warm gold and teal, wonder' },
  ],
  moral:'اللهُ الرَّحِيمُ لَمْ يَتْرُكْنَا فِي الْمَتَاهَة، بَلْ أَرْسَلَ الْخَرِيطَة. 💚',
  game:{ type:'maze', title:'اتْبَعْ خَرِيطَةَ السَّمَاءِ وَصِلْ إِلَى النُّورِ الْهَادِي', avatar:'🗺️', goal:'💡', wall:'🌫️', map:['S.#..','.###.','...#.','##...','#..#G'] },
  act:{ q:'لِمَاذَا أَرْسَلَ اللهُ الرُّسُلَ وَالْكُتُب؟', yay:'صَحِيح! لِيَهْدُونَا الطَّرِيقَ إِلَيْه', opts:[
    { e:'🗺️', t:'لِيَدُلُّونَا عَلَى طَرِيقِ الله', ok:true },
    { e:'🎁', t:'لِيُوَزِّعُوا الْهَدَايَا' },
    { e:'🤷', t:'بِلَا سَبَب' } ] },
  dua:'الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَذَا' },

{ id:'suhuf', icon:'📜', color:'#C0905C', title:'الصُّحُفُ الْأُولَى',
  tag:'صُحُفُ إِبْرَاهِيمَ وَمُوسَى',
  pages:[
    { emoji:'📜', text:'قَبْلَ الْكُتُبِ الْكِبَارِ أَنْزَلَ اللهُ صُحُفًا — صَفَحَاتٍ مِنَ الْوَحْيِ — عَلَى إِبْرَاهِيمَ وَمُوسَى.',
      prompt:'Ancient glowing parchment scrolls resting on soft desert sand at dawn, reverent and warm' },
    { emoji:'💎', text:'فِيهَا كَلَامٌ جَمِيل: الْفَائِزُ الْحَقِيقِيُّ مَنْ طَهَّرَ قَلْبَهُ وَذَكَرَ رَبَّهُ وَصَلَّى.',
      prompt:'A shining clean heart with a small star above it, purity and success, gentle glow' },
    { emoji:'⚖️', text:'وَفِيهَا: كُلُّ إِنْسَانٍ مَسْؤُولٌ عَنْ عَمَلِهِ هُو. لَا يَحْمِلُ أَحَدٌ ذَنْبَ أَحَد.',
      prompt:'A gentle balance scale glowing under soft light, personal responsibility, calm illustration' },
    { emoji:'💛', text:'كَلَامُهَا هُوَ نَفْسُ مَا يُعَلِّمُنَا الْقُرْآن! لِأَنَّ الْمُرْسِلَ وَاحِد: اللهُ.',
      prompt:'Several scrolls and a book connected by one beam of golden light, unity of the message' },
  ],
  moral:'رِسَالَةُ السَّمَاءِ وَاحِدَةٌ لِأَنَّ مُرْسِلَهَا وَاحِد. 💛',
  game:{ type:'pairs', title:'صِلْ كُلَّ وَصِيَّةٍ بِمَعْنَاهَا', pairs:[
    ['🫧 مَنْ تَزَكَّى','طَهَّرَ قَلْبَه'],
    ['🕌 ذَكَرَ رَبَّهُ وَصَلَّى','طَرِيقُ الْفَلَاح'],
    ['⚖️ كُلٌّ مَسْؤُول','عَنْ عَمَلِهِ هُو'] ] },
  act:{ q:'لِمَاذَا تَتَشَابَهُ الصُّحُفُ وَالْقُرْآن؟', yay:'أَحْسَنْت! لِأَنَّ مُرْسِلَهَا وَاحِدٌ هُوَ الله', opts:[
    { e:'💛', t:'لِأَنَّ الْمُرْسِلَ وَاحِدٌ هُوَ الله', ok:true },
    { e:'📚', t:'صُدْفَةً فَقَط' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ زَكِّ نَفْسِي أَنْتَ خَيْرُ مَنْ زَكَّاهَا' },

{ id:'tawrah', icon:'⛰️', color:'#27AE60', title:'التَّوْرَاة',
  tag:'نُورٌ نَزَلَ عَلَى مُوسَى',
  pages:[
    { emoji:'⛰️', text:'بَعْدَ أَنْ نَجَّى اللهُ مُوسَى وَقَوْمَهُ مِنْ فِرْعَوْن، وَاعَدَهُ عِنْدَ جَبَلِ الطُّور.',
      prompt:'A majestic mountain at dawn with soft golden light around its peak, awe and reverence, no figures' },
    { emoji:'📖', text:'وَكَلَّمَهُ رَبُّهُ، وَأَنْزَلَ عَلَيْهِ التَّوْرَاة: كِتَابًا فِيهِ هُدًى وَنُور.',
      prompt:'Glowing tablets of light on a mountaintop radiating warmth, guidance and light, majestic' },
    { emoji:'📏', text:'فِيهَا وَصَايَا جَمِيلَة: اعْبُدِ اللهَ وَحْدَه، بِرُّ الْوَالِدَيْن، لَا تَكْذِب، لَا تَسْرِق.',
      prompt:'Ten glowing commandment lines on a stone tablet, clean and clear, warm gold light' },
    { emoji:'💚', text:'نُؤْمِنُ بِالتَّوْرَاةِ الَّتِي نَزَلَتْ عَلَى مُوسَى — هَذَا مِنْ إِيمَانِنَا.',
      prompt:'An open glowing ancient book with soft light, respect and faith, serene' },
  ],
  moral:'أُؤْمِنُ بِكُلِّ كِتَابٍ أَنْزَلَهُ الله. 💚',
  game:{ type:'sort', title:'أَيُّهَا مِنْ وَصَايَا التَّوْرَاةِ الْجَمِيلَة؟', bins:['وَصِيَّةٌ جَمِيلَة ✅','لَيْسَتْ مِنْهَا 🚫'], items:[
    { e:'🤗', t:'بِرُّ الْوَالِدَيْن', bin:0 },
    { e:'🙏', t:'اعْبُدِ اللهَ وَحْدَه', bin:0 },
    { e:'😠', t:'اظْلِمِ النَّاس', bin:1 },
    { e:'🤥', t:'اكْذِبْ كَثِيرًا', bin:1 } ] },
  act:{ q:'مَاذَا أَنْزَلَ اللهُ عَلَى مُوسَى؟', yay:'أَحْسَنْت! التَّوْرَاةَ فِيهَا هُدًى وَنُور', opts:[
    { e:'📖', t:'التَّوْرَاة', ok:true },
    { e:'🎵', t:'الزَّبُور' },
    { e:'📚', t:'الْإِنْجِيل' } ] },
  dua:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ نُورَ صَدْرِي' },

{ id:'zabur', icon:'🎵', color:'#8E44AD', title:'الزَّبُور',
  tag:'تَسَابِيحُ دَاوُود',
  pages:[
    { emoji:'🎵', text:'أَعْطَى اللهُ دَاوُودَ أَجْمَلَ صَوْتٍ فِي التَّارِيخ، وَأَنْزَلَ عَلَيْهِ الزَّبُور: كِتَابَ تَسَابِيح.',
      prompt:'Musical notes made of light floating over green hills at golden hour, beautiful and serene, no figure' },
    { emoji:'⛰️', text:'وَكَانَ إِذَا سَبَّحَ رَبَّهُ سَبَّحَتْ مَعَهُ الْجِبَالُ الصُّمُّ وَتَوَقَّفَتِ الطُّيُورُ لِتُرَدِّدَ خَلْفَه!',
      prompt:'Mountains and birds glowing softly as if singing along, golden light, wondrous harmony' },
    { emoji:'🐦', text:'يَا جِبَالُ رَدِّدِي مَعَهُ، وَيَا طَيْرُ! كُلُّ الْكَوْنِ يُسَبِّحُ اللهَ.',
      prompt:'Birds paused mid-air in a glowing sky above mountains, all in gentle praise, peaceful' },
    { emoji:'💜', text:'فَحِينَ أُسَبِّحُ اللهَ لَسْتُ وَحْدِي — أَنْضَمُّ إِلَى جَوْقَةِ الْكَوْنِ كُلِّه!',
      prompt:'A child with hands raised in praise, the whole landscape glowing with them, joyful unity' },
  ],
  moral:'حِينَ أُسَبِّحُ اللهَ أَنْضَمُّ إِلَى جَوْقَةِ الْكَوْن. 💜',
  game:{ type:'find', title:'الطُّيُورُ تُسَبِّحُ مَعَ دَاوُود! اجْمَعِ الطُّيُورَ الْخَمْس', target:'🐦', count:5, distractors:['☁️','⛰️'], size:12 },
  act:{ q:'مَاذَا حَدَثَ حِينَ سَبَّحَ دَاوُودُ رَبَّه؟', yay:'صَحِيح! سَبَّحَتْ مَعَهُ الْجِبَالُ وَالطَّيْر', opts:[
    { e:'⛰️', t:'سَبَّحَتْ مَعَهُ الْجِبَالُ وَالطَّيْر', ok:true },
    { e:'🌧️', t:'نَزَلَ الْمَطَر' },
    { e:'🤷', t:'لَا شَيْء' } ] },
  dua:'سُبْحَانَ اللهِ وَبِحَمْدِهِ سُبْحَانَ اللهِ الْعَظِيم' },

{ id:'injil', icon:'🕊️', color:'#16A085', title:'الْإِنْجِيل',
  tag:'بِشَارَةُ عِيسَى',
  pages:[
    { emoji:'🕊️', text:'أَرْسَلَ اللهُ عِيسَى ابْنَ مَرْيَمَ إِلَى قَوْمِهِ، وَآتَاهُ الْإِنْجِيل — وَمَعْنَاهُ: الْبِشَارَة!',
      prompt:'A gentle white dove with soft light around it over a green valley, peace and good news' },
    { emoji:'📗', text:'فِيهِ هُدًى وَنُور، وَجَاءَ مُصَدِّقًا لِلتَّوْرَاة — حَلْقَةٌ جَدِيدَةٌ فِي نَفْسِ السِّلْسِلَة.',
      prompt:'A glowing green book beside older scrolls, all connected by light, continuity and harmony' },
    { emoji:'✨', text:'وَفِيهِ بِشَارَةٌ عَظِيمَة: رَسُولٌ يَأْتِي بَعْدَ عِيسَى اسْمُهُ أَحْمَد!',
      prompt:'A radiant name of light appearing in the sky like a promise, hopeful and warm' },
    { emoji:'💚', text:'نَحْنُ نُحِبُّ عِيسَى وَنُؤْمِنُ بِهِ نَبِيًّا كَرِيمًا، وَبِالْإِنْجِيلِ الَّذِي أَنْزَلَهُ الله.',
      prompt:'A softly glowing heart over an open book, love and faith, serene teal and gold' },
  ],
  moral:'الْأَنْبِيَاءُ إِخْوَةٌ، وَكُتُبُ اللهِ سِلْسِلَةٌ وَاحِدَة. 💚',
  game:{ type:'order', title:'رَتِّبْ سِلْسِلَةَ كُتُبِ اللهِ بِالتَّرْتِيب', items:[
    { e:'📜', t:'صُحُفُ إِبْرَاهِيم' },
    { e:'📖', t:'التَّوْرَاة' },
    { e:'🎵', t:'الزَّبُور' },
    { e:'🕊️', t:'الْإِنْجِيل' },
    { e:'🌕', t:'الْقُرْآن' } ] },
  act:{ q:'مَاذَا يَعْنِي اسْمُ «الْإِنْجِيل»؟', yay:'أَحْسَنْت! يَعْنِي الْبِشَارَة', opts:[
    { e:'✨', t:'الْبِشَارَة', ok:true },
    { e:'⚔️', t:'الْحَرْب' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُول' },

{ id:'quran', icon:'📖', color:'#C0392B', title:'الْقُرْآنُ الْمَحْفُوظ',
  tag:'الرِّسَالَةُ الْخَاتِمَة',
  pages:[
    { emoji:'🌕', text:'الْقُرْآنُ آخِرُ رَسَائِلِ السَّمَاء، أَنْزَلَهُ اللهُ عَلَى مُحَمَّدٍ ﷺ لِلْبَشَرِيَّةِ كُلِّهَا.',
      prompt:'A beautiful glowing Quran on a wooden stand under a full moon, majestic and serene' },
    { emoji:'🛡️', text:'وَتَكَفَّلَ اللهُ بِحِفْظِهِ بِنَفْسِه: إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُون.',
      prompt:'An open Quran surrounded by a soft protective shield of golden light, safe and radiant' },
    { emoji:'🌍', text:'الطِّفْلُ فِي إِنْدُونِيسِيَا وَالشَّيْخُ فِي الْمَغْرِبِ يَحْفَظَانِهِ بِنَفْسِ الْحَرْف!',
      prompt:'A globe with two glowing points connected by light, same open book at each, unity across the world' },
    { emoji:'💛', text:'أَرْبَعَةَ عَشَرَ قَرْنًا لَمْ يَتَغَيَّرْ فِيهِ حَرْفٌ وَاحِد! هَذَا وَعْدُ الله.',
      prompt:'The same radiant Quran through a timeline of soft light, unchanged, awe and reassurance' },
  ],
  moral:'الْقُرْآنُ مَحْفُوظٌ بِوَعْدِ الله، لَمْ وَلَنْ يَتَغَيَّر. 💛',
  game:{ type:'memory', title:'الْقُرْآنُ مَحْفُوظٌ فِي الصُّدُورِ وَالسُّطُور: اقْلِبِ الْبِطَاقَاتِ وَجِدِ الْأَزْوَاج', pairs:['📖','🌕','🛡️'] },
  act:{ q:'مَنْ يَحْفَظُ الْقُرْآنَ مِنَ التَّغْيِير؟', yay:'صَحِيح! اللهُ تَكَفَّلَ بِحِفْظِهِ بِنَفْسِه', opts:[
    { e:'🛡️', t:'اللهُ حَفِظَهُ بِنَفْسِه', ok:true },
    { e:'🔒', t:'صُنْدُوقٌ حَدِيدِيّ' },
    { e:'🤷', t:'لَا أَحَد' } ] },
  dua:'اللَّهُمَّ اجْعَلْنَا مِنْ أَهْلِ الْقُرْآن' },

{ id:'seal', icon:'👑', color:'#D4A017', title:'خَتْمُ الْمَلِك',
  tag:'مَا الْمُعْجِزَة؟',
  pages:[
    { emoji:'🔏', text:'حِينَ يُرْسِلُ الْمَلِكُ مَبْعُوثًا، يُعْطِيهِ خَتْمَهُ الَّذِي لَا يُقَلِّدُهُ أَحَد.',
      prompt:'A royal golden seal stamp glowing on a scroll, official and unmistakable, warm light' },
    { emoji:'✨', text:'وَالْمُعْجِزَةُ خَتْمُ الله: أَمْرٌ خَارِقٌ لَا يَقْدِرُ عَلَيْهِ بَشَر، يُجْرِيهِ اللهُ لِرَسُولِه.',
      prompt:'A staff turning into a serpent shown as a burst of light, extraordinary sign, awe' },
    { emoji:'☝️', text:'الْمُعْجِزَةُ مِنْ أَمْرِ اللهِ وَحْدَه، لَيْسَتْ قُوَّةً فِي جِسْمِ النَّبِيّ!',
      prompt:'A hand of light with rays coming from above it, power from the source not the hand, symbolic' },
    { emoji:'🙇', text:'وَلِذَلِكَ سَحَرَةُ فِرْعَوْنَ حِينَ رَأَوْا عَصَا مُوسَى عَرَفُوا أَنَّهُ أَمْرُ اللهِ فَآمَنُوا!',
      prompt:'Silhouettes bowing in prostration before a burst of divine light, sudden faith, reverent' },
  ],
  moral:'الْمُعْجِزَةُ مِنْ أَمْرِ اللهِ وَحْدَه، وَالْأَنْبِيَاءُ بَشَر. ☝️',
  game:{ type:'sort', title:'أَيُّهُمَا مُعْجِزَةٌ مِنَ الله، وَأَيُّهُمَا خُدْعَةٌ بَشَرِيَّة؟', bins:['مُعْجِزَةٌ مِنَ الله ✨','خُدْعَةٌ بَشَرِيَّة 🎩'], items:[
    { e:'🌊', t:'فَلْقُ الْبَحْرِ بِأَمْرِ الله', bin:0 },
    { e:'🎩', t:'خُدْعَةُ سَاحِرٍ مُدَرَّب', bin:1 },
    { e:'🐍', t:'الْعَصَا تَصِيرُ حَيَّةً بِإِذْنِ الله', bin:0 },
    { e:'🃏', t:'لُعْبَةُ وَرَقٍ ذَكِيَّة', bin:1 } ] },
  act:{ q:'مِنْ أَيْنَ تَأْتِي الْمُعْجِزَة؟', yay:'أَحْسَنْت! مِنْ أَمْرِ اللهِ وَحْدَه', opts:[
    { e:'☝️', t:'مِنْ أَمْرِ اللهِ وَحْدَه', ok:true },
    { e:'💪', t:'مِنْ قُوَّةِ النَّبِيّ' },
    { e:'🪄', t:'مِنْ سِحْر' } ] },
  dua:'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِالله' },

{ id:'signs', icon:'🌊', color:'#16A085', title:'مُعْجِزَاتٌ بِإِذْنِ الله',
  tag:'مُوسَى وَعِيسَى',
  pages:[
    { emoji:'🌊', text:'حِينَ حَاصَرَ فِرْعَوْنُ مُوسَى عِنْدَ الْبَحْر، قَالَ مُوسَى: إِنَّ مَعِيَ رَبِّي سَيَهْدِين!',
      prompt:'A vast sea with two towering walls of water and a dry path between them, majestic miracle, awe' },
    { emoji:'🪄', text:'فَضَرَبَ بِعَصَاهُ الْبَحْرَ فَانْفَلَقَ جَبَلَيْنِ مِنْ مَاء! كُلُّهُ بِأَمْرِ الله.',
      prompt:'A glowing staff striking water that parts into two shining walls, dramatic light, no figure' },
    { emoji:'🕊️', text:'وَعِيسَى يُبْرِئُ الْمَرِيضَ وَيُحْيِي الْمَوْتَى، وَيَنْفُخُ فِي الطِّينِ فَيَصِيرُ طَيْرًا.',
      prompt:'A small clay bird coming to life with sparkles of light, gentle miracle by Allah leave, wondrous' },
    { emoji:'☝️', text:'لَكِنْ فِي كُلِّ مَرَّةٍ يَقُولُ اللهُ: بِإِذْنِي! الْفَاعِلُ هُوَ الله، وَعِيسَى عَبْدُهُ وَرَسُولُه.',
      prompt:'Rays of golden light from above touching a healing scene, power from Allah, reverent and warm' },
  ],
  moral:'كُلُّ مُعْجِزَةٍ بِإِذْنِ الله، فَنَعْبُدُ اللهَ وَحْدَه. ☝️',
  game:{ type:'pairs', title:'صِلْ كُلَّ مُعْجِزَةٍ بِنَبِيِّهَا', pairs:[
    ['🌊 فَلْقُ الْبَحْر','مُوسَى عَلَيْهِ السَّلَام'],
    ['🕊️ إِحْيَاءُ الْمَوْتَى بِإِذْنِ الله','عِيسَى عَلَيْهِ السَّلَام'],
    ['☝️ الْقُدْرَةُ كُلُّهَا','لِلَّهِ وَحْدَه'] ] },
  act:{ q:'مَا الْكَلِمَةُ الَّتِي تَتَكَرَّرُ مَعَ مُعْجِزَاتِ عِيسَى؟', yay:'صَحِيح! بِإِذْنِي — فَالْفَاعِلُ هُوَ الله', opts:[
    { e:'☝️', t:'بِإِذْنِي (بِإِذْنِ الله)', ok:true },
    { e:'💪', t:'بِقُوَّتِي' },
    { e:'🪄', t:'بِسِحْرِي' } ] },
  dua:'اللَّهُمَّ اجْعَلْنَا مِنَ الْمُوَحِّدِينَ الثَّابِتِين' },

{ id:'chain', icon:'🏰', color:'#E67E22', title:'اللَّبِنَةُ الْأَخِيرَة',
  tag:'سِلْسِلَةٌ وَاحِدَةٌ وَرِسَالَةٌ وَاحِدَة',
  pages:[
    { emoji:'🏰', text:'ضَرَبَ النَّبِيُّ ﷺ مَثَلًا جَمِيلًا: رَجُلٌ بَنَى قَصْرًا جَمِيلًا وَتَرَكَ مَكَانَ لَبِنَةٍ وَاحِدَة.',
      prompt:'A beautiful ornate palace with one small brick space empty at a corner, golden light, storybook style' },
    { emoji:'🧱', text:'كُلُّ نَبِيٍّ وَضَعَ لَبِنَةً فِي نَفْسِ الْبِنَاء: نُوحٌ وَإِبْرَاهِيمُ وَمُوسَى وَعِيسَى.',
      prompt:'Builders adding glowing bricks to one shared palace wall in harmony, no faces, warm cooperation' },
    { emoji:'✨', text:'حَتَّى جَاءَ نَبِيُّنَا ﷺ فَوَضَعَ اللَّبِنَةَ الْأَخِيرَةَ فَاكْتَمَلَ الْقَصْر!',
      prompt:'A golden final brick glowing as it completes a magnificent palace, triumphant light' },
    { emoji:'💚', text:'الْأَنْبِيَاءُ كُلُّهُمْ إِخْوَة، وَرِسَالَتُهُمْ وَاحِدَة: اعْبُدُوا اللهَ وَحْدَه.',
      prompt:'A completed radiant palace under a starry sky with a warm glow, unity and completion' },
  ],
  moral:'الْأَنْبِيَاءُ بَنَّاؤُونَ لِقَصْرٍ وَاحِد، وَمُحَمَّدٌ ﷺ اللَّبِنَةُ الْأَخِيرَة. 💚',
  game:{ type:'order', title:'ابْنِ الْقَصْرَ! رَتِّبِ اللَّبِنَاتِ مِنَ الْأَسَاسِ إِلَى الْخِتَام', items:[
    { e:'🧱', t:'أَسَاسُ التَّوْحِيد' },
    { e:'🏗️', t:'جُدْرَانٌ يَبْنِيهَا الْأَنْبِيَاء' },
    { e:'✨', t:'اللَّبِنَةُ الْأَخِيرَة: مُحَمَّدٌ ﷺ' },
    { e:'🏰', t:'الْقَصْرُ اكْتَمَل!' } ] },
  act:{ q:'مَنِ اللَّبِنَةُ الْأَخِيرَةُ الَّتِي أَكْمَلَتِ الْقَصْر؟', yay:'أَحْسَنْت! مُحَمَّدٌ ﷺ خَاتَمُ النَّبِيِّين', opts:[
    { e:'✨', t:'نَبِيُّنَا مُحَمَّدٌ ﷺ', ok:true },
    { e:'🧱', t:'أَحَدُ الْبَنَّائِين' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُول' },

]};
