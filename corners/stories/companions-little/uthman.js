/* corners/stories/companions-little/uthman.js — عثمان ذو النورين للصغار (٣–٦) · ٧ حكايات */
window.COMPANIONS_LITTLE = window.COMPANIONS_LITTLE || {};
window.COMPANIONS_LITTLE.uthman = {
  id:'uthman', icon:'📖', color:'#2E9E7E', title:'عُثْمَانُ ذُو النُّورَيْن', tag:'الْحَيَاءُ وَالْكَرَم',
  stories:[

{ id:'haya', icon:'😌', color:'#2E9E7E', title:'الرَّجُلُ الْحَيِيّ',
  tag:'تَسْتَحْيِي مِنْهُ الْمَلَائِكَة',
  pages:[
    { emoji:'😌', text:'كَانَ عُثْمَانُ شَدِيدَ الْحَيَاء، حَتَّى قَالَ النَّبِيُّ ﷺ: أَلَا أَسْتَحْيِي مِنْ رَجُلٍ تَسْتَحْيِي مِنْهُ الْمَلَائِكَة!',
      prompt:'A gentle modest dignified figure with soft light, deep modesty, warm serene, no face detail' },
    { emoji:'🌸', text:'الْحَيَاءُ خُلُقٌ جَمِيل: يَمْنَعُ صَاحِبَهُ مِنْ فِعْلِ الْقَبِيح، وَيَزِينُهُ بِالْأَدَب.',
      prompt:'A blooming flower symbolizing modesty and grace, beauty of haya, warm gentle' },
    { emoji:'💬', text:'قَالَ النَّبِيُّ ﷺ: الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْر، وَالْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَان.',
      prompt:'A soft glowing heart adorned with grace, modesty as part of faith, warm tender' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الْحَيَاء: أَسْتَحْيِي مِنَ اللهِ فَلَا أَفْعَلُ سُوءًا، وَأَتَأَدَّبُ مَعَ النَّاس.',
      prompt:'A modest well-mannered child behaving gracefully, practicing haya, warm uplifting' },
  ],
  moral:'الْحَيَاءُ خُلُقٌ جَمِيلٌ مِنَ الْإِيمَان، أَسْتَحْيِي مِنَ اللهِ فَأَبْتَعِدُ عَنِ السُّوء. 💚',
  game:{ type:'sort', title:'أَيُّهَا مِنَ الْحَيَاء؟', bins:['حَيَاءٌ جَمِيل 💚','قِلَّةُ حَيَاء 🚫'], items:[
    { e:'😌', t:'أَتَأَدَّبُ وَأَسْتَحْيِي مِنَ الله', bin:0 },
    { e:'🙈', t:'أَفْعَلُ الْقَبِيحَ عَلَنًا', bin:1 },
    { e:'🌸', t:'أَتَكَلَّمُ بِأَدَب', bin:0 },
    { e:'😤', t:'أَتَبَجَّحُ بِلَا خَجَل', bin:1 } ] },
  act:{ q:'مَا خُلُقُ عُثْمَانَ الَّذِي اشْتُهِرَ بِه؟', yay:'أَحْسَنْت! الْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَان', opts:[
    { e:'😌', t:'الْحَيَاء', ok:true },
    { e:'😠', t:'الْغَضَب' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الْحَيَاءَ مِنْكَ وَحُسْنَ الْأَدَب' },

{ id:'nurayn', icon:'💞', color:'#B0578D', title:'ذُو النُّورَيْن',
  tag:'زَوْجُ ابْنَتَيِ النَّبِيِّ ﷺ',
  pages:[
    { emoji:'💞', text:'سُمِّيَ عُثْمَانُ «ذَا النُّورَيْن» لِأَنَّهُ تَزَوَّجَ ابْنَتَيِ النَّبِيِّ ﷺ: رُقَيَّة، ثُمَّ أُمَّ كُلْثُومٍ بَعْدَهَا.',
      prompt:'Two glowing lights joined in honor, the title of two lights, warm reverent, no faces' },
    { emoji:'🌟', text:'كَانَتْ هَذِهِ مَنْزِلَةً عَظِيمَةً لَمْ تَحْصُلْ لِأَحَدٍ غَيْرِه، لِمَكَانَتِهِ وَخُلُقِهِ الْعَظِيم.',
      prompt:'A radiant honor bestowed, a unique distinction, warm serene glow' },
    { emoji:'🤝', text:'أَحَبَّهُ النَّبِيُّ ﷺ وَأَحَبَّهُ الْمُسْلِمُونَ لِحَيَائِهِ وَكَرَمِهِ وَلِينِ جَانِبِه.',
      prompt:'A beloved figure among warm friends, love and respect, warm bright, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنَّ حُسْنَ الْخُلُقِ يَرْفَعُ صَاحِبَهُ وَيُحَبِّبُهُ إِلَى اللهِ وَالنَّاس.',
      prompt:'A kind child loved by everyone around, good character raising a person, warm uplifting' },
  ],
  moral:'حُسْنُ الْخُلُقِ يَرْفَعُ صَاحِبَهُ وَيُحَبِّبُهُ إِلَى اللهِ وَالنَّاس. 💚',
  game:{ type:'pairs', title:'صِلْ كُلَّ شَيْءٍ بِمَعْنَاه', pairs:[
    ['💞 ذُو النُّورَيْن','تَزَوَّجَ ابْنَتَيِ النَّبِيّ'],
    ['😌 حَيَاؤُه','خُلُقُهُ الْمَشْهُور'],
    ['🌟 مَنْزِلَتُه','عَظِيمَةٌ عِنْدَ النَّبِيّ'] ] },
  act:{ q:'لِمَاذَا سُمِّيَ عُثْمَانُ ذَا النُّورَيْن؟', yay:'أَحْسَنْت! تَزَوَّجَ ابْنَتَيِ النَّبِيِّ ﷺ', opts:[
    { e:'💞', t:'تَزَوَّجَ ابْنَتَيِ النَّبِيِّ ﷺ', ok:true },
    { e:'💡', t:'حَمَلَ مِصْبَاحَيْن' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ حَسِّنْ خُلُقِي وَحَبِّبْنِي إِلَيْكَ وَإِلَى النَّاس' },

{ id:'well', icon:'💧', color:'#2980B9', title:'بِئْرُ رُومَة',
  tag:'اشْتَرَى الْبِئْرَ لِلْمُسْلِمِين',
  pages:[
    { emoji:'💧', text:'حِينَ جَاءَ الْمُسْلِمُونَ الْمَدِينَة، كَانَ فِيهَا بِئْرٌ عَذْبٌ اسْمُهُ «رُومَة» يَمْلِكُهُ رَجُلٌ يَبِيعُ مَاءَهُ بِثَمَنٍ غَالٍ.',
      prompt:'An old well of fresh water in a dry town, a precious water source, warm, no faces' },
    { emoji:'🎁', text:'فَقَالَ النَّبِيُّ ﷺ: مَنْ يَشْتَرِي بِئْرَ رُومَةَ فَيَجْعَلَهَا لِلْمُسْلِمِين وَلَهُ الْجَنَّة؟ فَاشْتَرَاهَا عُثْمَانُ بِمَالِهِ وَوَقَفَهَا لِلْجَمِيع!',
      prompt:'A generous hand making a well free for all, endowing water, warm bright, no faces' },
    { emoji:'🌊', text:'فَشَرِبَ مِنْهَا الْمُسْلِمُونَ مَجَّانًا، وَصَارَتْ صَدَقَةً جَارِيَةً يَجْرِي أَجْرُهَا لِعُثْمَان.',
      prompt:'People happily drinking free water from a well, ongoing charity, warm cooperative scene, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الْكَرَمَ: أُنْفِقُ مِمَّا أُحِبُّ لِنَفْعِ النَّاس، فَالصَّدَقَةُ الْجَارِيَةُ يَبْقَى أَجْرُهَا.',
      prompt:'A child sharing something valuable to benefit others, generosity, warm uplifting' },
  ],
  moral:'أُنْفِقُ لِنَفْعِ النَّاس، فَالصَّدَقَةُ الْجَارِيَةُ يَبْقَى أَجْرُهَا. 💚',
  game:{ type:'find', title:'اسْقِ النَّاسَ كَعُثْمَان! اجْمَعْ قَطَرَاتِ الْخَيْرِ الْخَمْس', target:'💧', count:5, distractors:['🪨','☁️'], size:12 },
  act:{ q:'مَاذَا فَعَلَ عُثْمَانُ بِبِئْرِ رُومَة؟', yay:'أَحْسَنْت! اشْتَرَاهَا وَوَقَفَهَا لِلْمُسْلِمِين', opts:[
    { e:'🎁', t:'اشْتَرَاهَا وَجَعَلَهَا لِلْجَمِيع', ok:true },
    { e:'💰', t:'بَاعَ مَاءَهَا غَالِيًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْ لِي صَدَقَةً جَارِيَةً تَنْفَعُ النَّاس' },

{ id:'army', icon:'🎁', color:'#D4A017', title:'جَيْشُ الْعُسْرَة',
  tag:'أَنْفَقَ كَثِيرًا فِي سَبِيلِ الله',
  pages:[
    { emoji:'⚔️', text:'فِي وَقْتٍ صَعْبٍ احْتَاجَ الْمُسْلِمُونَ إِلَى تَجْهِيزِ جَيْشٍ كَبِير، لَكِنَّ الْمَالَ كَانَ قَلِيلًا.',
      prompt:'Preparations for a large expedition in hard times, a moment of need, warm, no faces' },
    { emoji:'🐪', text:'فَجَهَّزَ عُثْمَانُ ثُلُثَ الْجَيْشِ بِمَالِهِ: مِئَاتِ الْجِمَالِ وَالْخَيْلِ وَالْأَمْوَال!',
      prompt:'Many camels and horses and supplies donated generously, huge generosity, warm bright, no faces' },
    { emoji:'💚', text:'فَقَالَ النَّبِيُّ ﷺ: مَا ضَرَّ عُثْمَانَ مَا عَمِلَ بَعْدَ الْيَوْم — لِعِظَمِ كَرَمِهِ فِي سَبِيلِ الله.',
      prompt:'A radiant reward-light over a generous giver, generosity honored, warm serene, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ الْبَذْلَ عِنْدَ الْحَاجَة: أُسَاعِدُ إِخْوَانِي بِمَا أَسْتَطِيعُ بِسَخَاء.',
      prompt:'A child generously helping in a group effort, giving in need, warm uplifting' },
  ],
  moral:'أَبْذُلُ مَا أَسْتَطِيعُ عِنْدَ الْحَاجَةِ بِسَخَاء، فَالْكَرَمُ يُحِبُّهُ اللهُ وَرَسُولُه. 💛',
  game:{ type:'sort', title:'مَتَى أَبْذُلُ وَأُنْفِق؟', bins:['بَذْلٌ فِي الْخَيْر 💚','بُخْلٌ 🚫'], items:[
    { e:'🎁', t:'أُسَاعِدُ عِنْدَ الْحَاجَة', bin:0 },
    { e:'😤', t:'أَبْخَلُ دَائِمًا', bin:1 },
    { e:'🤝', t:'أُشَارِكُ إِخْوَانِي', bin:0 },
    { e:'🙅', t:'أَمْنَعُ عَنِ الْمُحْتَاج', bin:1 } ] },
  act:{ q:'كَمْ جَهَّزَ عُثْمَانُ مِنْ جَيْشِ الْعُسْرَة؟', yay:'أَحْسَنْت! ثُلُثَ الْجَيْشِ بِمَالِه', opts:[
    { e:'🐪', t:'ثُلُثَ الْجَيْشِ بِمَالِه', ok:true },
    { e:'🪙', t:'دِرْهَمًا وَاحِدًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي مِنَ الْمُنْفِقِينَ فِي سَبِيلِك' },

{ id:'quran', icon:'📖', color:'#16A085', title:'جَامِعُ الْقُرْآن',
  tag:'حَفِظَ الْقُرْآنَ لِلْأُمَّة',
  pages:[
    { emoji:'📖', text:'فِي زَمَنِ عُثْمَانَ الْخَلِيفَة، انْتَشَرَ الْإِسْلَامُ فِي بِلَادٍ كَثِيرَة، وَخَافَ عُثْمَانُ أَنْ يَخْتَلِفَ النَّاسُ فِي قِرَاءَةِ الْقُرْآن.',
      prompt:'An open glowing Quran with light spreading to many lands, preserving the Book, warm reverent' },
    { emoji:'✍️', text:'فَجَمَعَ الْقُرْآنَ فِي مُصْحَفٍ وَاحِدٍ مُتَّفَقٍ عَلَيْه، وَأَرْسَلَ نُسَخًا إِلَى كُلِّ الْبِلَاد.',
      prompt:'Copies of a unified Quran being written and sent out, unifying the Quran, warm serene, no faces' },
    { emoji:'🌍', text:'فَبِفَضْلِ اللهِ ثُمَّ عُثْمَانَ، وَصَلَ الْقُرْآنُ إِلَيْنَا الْيَوْمَ بِنَفْسِ الْحَرْفِ لَمْ يَتَغَيَّر!',
      prompt:'The same Quran preserved across the world and time, unbroken preservation, warm radiant' },
    { emoji:'💚', text:'فَأُحِبُّ الْقُرْآنَ وَأَحْفَظُه، وَأَشْكُرُ مَنْ حَفِظُوهُ لَنَا مِنَ الصَّحَابَة.',
      prompt:'A child holding a Quran with love and gratitude, love of the Quran, warm uplifting' },
  ],
  moral:'الْقُرْآنُ وَصَلَ إِلَيْنَا مَحْفُوظًا بِفَضْلِ اللهِ ثُمَّ جَمْعِ عُثْمَان. 💚',
  game:{ type:'order', title:'رَتِّبْ كَيْفَ حُفِظَ الْقُرْآنُ لَنَا', items:[
    { e:'📖', t:'نُزُولُ الْقُرْآنِ عَلَى النَّبِيّ' },
    { e:'🧠', t:'حِفْظُ الصَّحَابَةِ لَه' },
    { e:'✍️', t:'جَمْعُ عُثْمَانَ لَهُ فِي مُصْحَف' },
    { e:'🌍', t:'وُصُولُهُ إِلَيْنَا مَحْفُوظًا' } ] },
  act:{ q:'مَاذَا فَعَلَ عُثْمَانُ لِلْقُرْآن؟', yay:'أَحْسَنْت! جَمَعَهُ فِي مُصْحَفٍ وَاحِدٍ لِلْأُمَّة', opts:[
    { e:'📖', t:'جَمَعَهُ فِي مُصْحَفٍ مُوَحَّد', ok:true },
    { e:'🔥', t:'أَخْفَاه' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي' },

{ id:'sabr', icon:'🤲', color:'#5B4B8A', title:'صَبْرُهُ وَثَبَاتُه',
  tag:'الْحِلْمُ عِنْدَ الشِّدَّة',
  pages:[
    { emoji:'🤲', text:'فِي آخِرِ حَيَاتِه، وَاجَهَ عُثْمَانُ فِتْنَةً صَعْبَةً وَأُنَاسًا ظَلَمُوه، لَكِنَّهُ صَبَرَ وَلَمْ يُرِدْ إِرَاقَةَ دِمَاءِ الْمُسْلِمِين.',
      prompt:'A patient dignified figure facing hardship calmly, patience in trial, warm serene, no faces' },
    { emoji:'📖', text:'قُتِلَ ظُلْمًا وَهُوَ يَقْرَأُ الْقُرْآن، صَابِرًا مُحْتَسِبًا، رَاضِيًا بِقَضَاءِ الله.',
      prompt:'An open glowing Quran with soft light, patience and faith to the end, warm reverent, no faces' },
    { emoji:'🌟', text:'كَانَ حَلِيمًا كَرِيمًا، يُقَابِلُ الْإِسَاءَةَ بِالصَّبْرِ وَالْعَفْو، وَلَا يُحِبُّ الْفِتْنَة.',
      prompt:'A gentle forbearing presence choosing peace, forbearance, warm tender scene, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الْحِلْمَ وَالصَّبْر: أَضْبِطُ نَفْسِي عِنْدَ الْغَضَب، وَأَخْتَارُ السَّلَامَ لَا الْفِتْنَة.',
      prompt:'A calm patient child staying peaceful when provoked, forbearance and calm, warm uplifting' },
  ],
  moral:'أَتَعَلَّمُ الْحِلْمَ وَالصَّبْر، وَأَخْتَارُ السَّلَامَ وَأَضْبِطُ نَفْسِي عِنْدَ الْغَضَب. 💚',
  game:{ type:'sort', title:'مَاذَا أَفْعَلُ عِنْدَ الشِّدَّة؟', bins:['حِلْمٌ وَصَبْر 💚','فِتْنَةٌ 🚫'], items:[
    { e:'🤲', t:'أَصْبِرُ وَأَضْبِطُ نَفْسِي', bin:0 },
    { e:'😡', t:'أَغْضَبُ وَأُثِيرُ الْمَشَاكِل', bin:1 },
    { e:'🕊️', t:'أَخْتَارُ السَّلَام', bin:0 },
    { e:'👊', t:'أَرُدُّ الْإِسَاءَةَ بِأَسْوَأ', bin:1 } ] },
  act:{ q:'كَيْفَ وَاجَهَ عُثْمَانُ الْفِتْنَة؟', yay:'أَحْسَنْت! بِالصَّبْرِ وَكَرِهَ إِرَاقَةَ الدِّمَاء', opts:[
    { e:'🤲', t:'بِالصَّبْرِ وَحُبِّ السَّلَام', ok:true },
    { e:'⚔️', t:'بِإِثَارَةِ الْحَرْب' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الْحِلْمَ وَالصَّبْرَ عِنْدَ الشَّدَائِد' },

{ id:'jannah', icon:'🌟', color:'#C9A227', title:'الْمُبَشَّرُ بِالْجَنَّة',
  tag:'ثَالِثُ الْخُلَفَاءِ الرَّاشِدِين',
  pages:[
    { emoji:'🌟', text:'عُثْمَانُ مِنَ الْعَشَرَةِ الْمُبَشَّرِينَ بِالْجَنَّة، وَثَالِثُ الْخُلَفَاءِ الرَّاشِدِينَ بَعْدَ أَبِي بَكْرٍ وَعُمَر.',
      prompt:'A radiant golden star among ten in a warm sky, glad tidings, serene glow' },
    { emoji:'💞', text:'أَحَبَّهُ النَّبِيُّ ﷺ حُبًّا عَظِيمًا، وَكَانَ مِثَالًا فِي الْحَيَاءِ وَالْكَرَمِ وَحُبِّ الْقُرْآن.',
      prompt:'A beloved figure honored for modesty and generosity, love and honor, warm tender, no faces' },
    { emoji:'💚', text:'فَأُحِبُّ عُثْمَان، وَأَقْتَدِي بِحَيَائِهِ وَكَرَمِهِ وَحُبِّهِ لِلْقُرْآن.',
      prompt:'A child aspiring toward a bright guiding star with a full heart, following a role model, uplifting' },
    { emoji:'💛', text:'فَأَجْعَلُ الْحَيَاءَ وَالْكَرَمَ وَحُبَّ الْقُرْآنِ مِنْ أَخْلَاقِي كُلَّ يَوْم.',
      prompt:'A modest generous child reading Quran happily, living the virtues, warm uplifting' },
  ],
  moral:'أُحِبُّ عُثْمَان، وَأَقْتَدِي بِحَيَائِهِ وَكَرَمِهِ وَحُبِّهِ لِلْقُرْآن. 💛',
  game:{ type:'pairs', title:'صِلْ كُلَّ صِفَةٍ بِعُثْمَان', pairs:[
    ['😌 الْحَيَاء','خُلُقُهُ الْمَشْهُور'],
    ['🎁 الْكَرَم','جَهَّزَ جَيْشَ الْعُسْرَة'],
    ['📖 حُبُّ الْقُرْآن','جَمَعَهُ لِلْأُمَّة'] ] },
  act:{ q:'بِمَ بَشَّرَ النَّبِيُّ ﷺ عُثْمَان؟', yay:'أَحْسَنْت! بَشَّرَهُ بِالْجَنَّة', opts:[
    { e:'🌟', t:'بَشَّرَهُ بِالْجَنَّة', ok:true },
    { e:'💰', t:'بِالْمَال' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الْجَنَّةَ وَحُسْنَ الْخُلُق' },

]};
