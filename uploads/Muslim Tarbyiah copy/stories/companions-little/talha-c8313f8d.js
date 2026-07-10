/* corners/stories/companions-little/talha.js — طلحة بن عبيد الله للصغار (٣–٦) · ٦ حكايات */
window.COMPANIONS_LITTLE = window.COMPANIONS_LITTLE || {};
window.COMPANIONS_LITTLE.talha = {
  id:'talha', icon:'🛡️', color:'#C0392B', title:'طَلْحَةُ بْنُ عُبَيْدِ الله', tag:'طَلْحَةُ الْخَيْر',
  stories:[

{ id:'early', icon:'🌟', color:'#C0392B', title:'مِنَ السَّابِقِينَ الْأَوَّلِين',
  tag:'أَسْلَمَ مُبَكِّرًا',
  pages:[
    { emoji:'🌟', text:'كَانَ طَلْحَةُ مِنْ أَوَائِلِ مَنْ آمَنَ بِالنَّبِيِّ ﷺ، وَهُوَ أَحَدُ الثَّمَانِيَةِ السَّابِقِينَ لِلْإِسْلَام.',
      prompt:'An early believer with a glowing heart in old Makkah, foremost in faith, warm, no face detail' },
    { emoji:'😠', text:'عُذِّبَ فِي أَوَّلِ إِسْلَامِه، لَكِنَّهُ صَبَرَ وَثَبَتَ عَلَى دِينِه وَلَمْ يَتَرَاجَع.',
      prompt:'A steadfast figure enduring hardship with patience, firmness in faith, warm, no faces' },
    { emoji:'💚', text:'قَدَّمَ إِيمَانَهُ عَلَى كُلِّ شَيْء، فَكَانَ مِنْ أَحَبِّ النَّاسِ إِلَى النَّبِيِّ ﷺ.',
      prompt:'A beloved companion glowing with faith, love and closeness, warm tender, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ الْمُبَادَرَةَ إِلَى الْخَيْر: أَكُونُ سَبَّاقًا لِلْإِيمَانِ وَالطَّاعَة.',
      prompt:'A child eagerly racing toward good deeds, being foremost in good, warm uplifting' },
  ],
  moral:'أُبَادِرُ إِلَى الْخَيْرِ وَأَثْبُتُ عَلَى إِيمَانِي مَهْمَا كَانَ الثَّمَن. 💛',
  game:{ type:'pairs', title:'صِلْ كُلَّ شَيْءٍ بِطَلْحَة', pairs:[
    ['🌟 طَلْحَة','مِنَ السَّابِقِينَ الْأَوَّلِين'],
    ['😠 صَبَرَ','عَلَى الْأَذَى فِي أَوَّلِ إِسْلَامِه'],
    ['💚 أَحَبَّهُ','النَّبِيُّ ﷺ'] ] },
  act:{ q:'مَتَى أَسْلَمَ طَلْحَة؟', yay:'أَحْسَنْت! مِنَ السَّابِقِينَ الْأَوَّلِين', opts:[
    { e:'🌟', t:'مُبَكِّرًا مِنَ السَّابِقِين', ok:true },
    { e:'⏰', t:'فِي آخِرِ حَيَاتِه' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي مِنَ الْمُسَارِعِينَ إِلَى الْخَيْر' },

{ id:'uhud', icon:'🛡️', color:'#8E2E2E', title:'يَوْمُ أُحُد',
  tag:'حَمَى النَّبِيَّ ﷺ بِنَفْسِه',
  pages:[
    { emoji:'🛡️', text:'فِي غَزْوَةِ أُحُد، حِينَ اشْتَدَّ الْخَطَرُ عَلَى النَّبِيِّ ﷺ، وَقَفَ طَلْحَةُ يَحْمِيهِ بِجَسَدِه.',
      prompt:'A brave protector shielding another with his own body, ultimate loyalty, warm heroic, no faces' },
    { emoji:'✋', text:'تَلَقَّى الضَّرَبَاتِ بِيَدِهِ لِيَحْمِيَ النَّبِيَّ ﷺ، حَتَّى شُلَّتْ يَدُهُ مِنْ كَثْرَةِ الْجِرَاح!',
      prompt:'A hand raised protectively taking harm to shield another, sacrifice, warm dignified, no gore, no faces' },
    { emoji:'🌟', text:'قَالَ النَّبِيُّ ﷺ عَنْ ذَلِكَ الْيَوْم: مَنْ سَرَّهُ أَنْ يَنْظُرَ إِلَى شَهِيدٍ يَمْشِي فَلْيَنْظُرْ إِلَى طَلْحَة!',
      prompt:'A radiant honor over a loyal hero, praised bravery, warm serene, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الْوَفَاءَ وَالتَّضْحِيَة: أَحْمِي مَنْ أُحِبُّ وَأُضَحِّي مِنْ أَجْلِ الْحَقّ.',
      prompt:'A child bravely protecting a friend, loyalty and sacrifice, warm uplifting' },
  ],
  moral:'الْوَفَاءُ وَالتَّضْحِيَةُ خُلُقُ الْأَبْطَال: أَحْمِي مَنْ أُحِبُّ وَأُضَحِّي لِلْحَقّ. 💚',
  game:{ type:'sort', title:'أَيُّهَا مِنَ الْوَفَاء؟', bins:['وَفَاءٌ وَتَضْحِيَة 💚','خِذْلَان 🚫'], items:[
    { e:'🛡️', t:'أَحْمِي مَنْ أُحِبّ', bin:0 },
    { e:'🏃', t:'أَتْرُكُ صَدِيقِي فِي الشِّدَّة', bin:1 },
    { e:'🤝', t:'أَقِفُ مَعَ الْحَقّ', bin:0 },
    { e:'😴', t:'أَهْرُبُ عِنْدَ الْخَطَر', bin:1 } ] },
  act:{ q:'مَاذَا فَعَلَ طَلْحَةُ فِي أُحُد؟', yay:'أَحْسَنْت! حَمَى النَّبِيَّ ﷺ بِنَفْسِه', opts:[
    { e:'🛡️', t:'حَمَى النَّبِيَّ بِجَسَدِه', ok:true },
    { e:'🏃', t:'هَرَبَ' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الْوَفَاءَ وَالشَّجَاعَة' },

{ id:'generous', icon:'🎁', color:'#D4A017', title:'طَلْحَةُ الْخَيْر',
  tag:'الْكَرَمُ الْعَظِيم',
  pages:[
    { emoji:'🎁', text:'كَانَ طَلْحَةُ تَاجِرًا غَنِيًّا، لَكِنَّهُ كَرِيمٌ جِدًّا، يُنْفِقُ مَالَهُ فِي الْخَيْرِ وَلَا يَبْخَل.',
      prompt:'A generous merchant sharing wealth freely, great generosity, warm bright, no faces' },
    { emoji:'💰', text:'كَانَ يُوَزِّعُ أَمْوَالَهُ عَلَى الْفُقَرَاءِ وَالْمُحْتَاجِين، حَتَّى لَقَّبَهُ النَّبِيُّ ﷺ بِأَلْقَابِ الْخَيْر.',
      prompt:'Coins and goods distributed kindly to those in need, charity, warm compassionate, no faces' },
    { emoji:'🌟', text:'سَمَّاهُ النَّبِيُّ ﷺ: طَلْحَةَ الْخَيْر، وَطَلْحَةَ الْجُود، وَطَلْحَةَ الْفَيَّاض — لِكَثْرَةِ عَطَائِه.',
      prompt:'A radiant title of generosity bestowed, honored for giving, warm serene, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الْكَرَم: أُشَارِكُ مِمَّا عِنْدِي وَأُسَاعِدُ الْمُحْتَاجِ بِفَرَح.',
      prompt:'A child sharing generously with a joyful heart, generosity, warm uplifting' },
  ],
  moral:'الْكَرَمُ خُلُقٌ جَمِيل: أُشَارِكُ مِمَّا عِنْدِي وَأُسَاعِدُ الْمُحْتَاجَ بِفَرَح. 💚',
  game:{ type:'find', title:'كُنْ كَرِيمًا كَطَلْحَة! اجْمَعْ هَدَايَا الْخَيْرِ الْخَمْس', target:'🎁', count:5, distractors:['💰','☁️'], size:12 },
  act:{ q:'بِمَ لَقَّبَ النَّبِيُّ ﷺ طَلْحَة؟', yay:'أَحْسَنْت! طَلْحَةَ الْخَيْرِ لِكَرَمِه', opts:[
    { e:'🎁', t:'طَلْحَةَ الْخَيْرِ وَالْجُود', ok:true },
    { e:'😠', t:'طَلْحَةَ الْبَخِيل' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي كَرِيمًا مِعْطَاءً لِلْخَيْر' },

{ id:'loyalty', icon:'🤝', color:'#16A085', title:'الْوَفَاءُ لِلْأَصْحَاب',
  tag:'حُبٌّ وَإِخَاء',
  pages:[
    { emoji:'🤝', text:'كَانَ طَلْحَةُ وَفِيًّا لِإِخْوَانِهِ الصَّحَابَة، يُحِبُّهُم وَيُسَاعِدُهُم وَيَقِفُ مَعَهُم فِي الشِّدَّة.',
      prompt:'Loyal companions supporting each other warmly, brotherhood and loyalty, warm bright, no faces' },
    { emoji:'💞', text:'الْمُؤْمِنُونَ إِخْوَة، يُحِبُّ بَعْضُهُم بَعْضًا فِي الله، وَيَنْصُرُ بَعْضُهُم بَعْضًا.',
      prompt:'Hearts of light joined in brotherhood, love for Allah sake, warm tender' },
    { emoji:'🌟', text:'كَانَ الْأَنْصَارُ وَالْمُهَاجِرُونَ إِخْوَةً، وَطَلْحَةُ مِثَالٌ فِي الْوَفَاءِ وَحُبِّ إِخْوَانِه.',
      prompt:'A united group of friends caring for one another, loyalty embodied, warm uplifting, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الْوَفَاءَ لِأَصْدِقَائِي: أُحِبُّهُم وَأُسَاعِدُهُم وَلَا أَخْذُلُهُم.',
      prompt:'A child being a loyal helpful friend, loyalty and friendship, warm uplifting' },
  ],
  moral:'أَكُونُ وَفِيًّا لِأَصْدِقَائِي: أُحِبُّهُم وَأُسَاعِدُهُم وَلَا أَخْذُلُهُم. 💚',
  game:{ type:'sort', title:'أَيُّهَا مِنَ الْوَفَاءِ لِلْأَصْدِقَاء؟', bins:['وَفَاءٌ 💚','خِذْلَان 🚫'], items:[
    { e:'🤝', t:'أَقِفُ مَعَ صَدِيقِي', bin:0 },
    { e:'🏃', t:'أَتْرُكُهُ عِنْدَ الْحَاجَة', bin:1 },
    { e:'💞', t:'أُحِبُّهُ فِي الله', bin:0 },
    { e:'🙅', t:'أُهْمِلُهُ إِذَا احْتَاجَنِي', bin:1 } ] },
  act:{ q:'كَيْفَ أَكُونُ وَفِيًّا لِأَصْدِقَائِي؟', yay:'أَحْسَنْت! أُحِبُّهُم وَأُسَاعِدُهُم وَلَا أَخْذُلُهُم', opts:[
    { e:'🤝', t:'أُسَاعِدُهُم وَأَقِفُ مَعَهُم', ok:true },
    { e:'🙅', t:'أَخْذُلُهُم عِنْدَ الْحَاجَة' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الْوَفَاءَ وَحُبَّ إِخْوَانِي فِيك' },

{ id:'shy', icon:'😌', color:'#5B4B8A', title:'حَيِيٌّ مُتَوَاضِع',
  tag:'خُلُقٌ عَظِيم',
  pages:[
    { emoji:'😌', text:'مَعَ غِنَاهُ وَشَجَاعَتِه، كَانَ طَلْحَةُ مُتَوَاضِعًا حَيِيًّا، لَا يَتَكَبَّرُ عَلَى أَحَد.',
      prompt:'A humble modest figure among people, humility despite status, warm, no face detail' },
    { emoji:'🤲', text:'كَانَ يُحِبُّ الْخَيْرَ لِلنَّاس، وَيُخْفِي صَدَقَاتِهِ، وَيَتَوَاضَعُ لِلصَّغِيرِ وَالْكَبِير.',
      prompt:'Quiet secret charity given humbly, hidden good, warm gentle, no faces' },
    { emoji:'💛', text:'الْجَمْعُ بَيْنَ الْقُوَّةِ وَالتَّوَاضُعِ وَالْكَرَمِ وَالْحَيَاءِ خُلُقُ الْعُظَمَاء.',
      prompt:'Virtues combined in one balanced character, greatness of character, warm serene' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنْ أَجْمَعَ الْأَخْلَاقَ الْجَمِيلَة: الْقُوَّةَ وَالتَّوَاضُعَ وَالْكَرَمَ وَالْحَيَاء.',
      prompt:'A child showing many good manners together, well-rounded character, warm uplifting' },
  ],
  moral:'أَجْمَعُ الْأَخْلَاقَ الْجَمِيلَة: الْقُوَّةَ وَالتَّوَاضُعَ وَالْكَرَمَ وَالْحَيَاء. 💚',
  game:{ type:'sort', title:'أَيُّهَا خُلُقٌ جَمِيل؟', bins:['خُلُقٌ جَمِيل 💚','خُلُقٌ سَيِّئ 🚫'], items:[
    { e:'😌', t:'التَّوَاضُعُ وَالْحَيَاء', bin:0 },
    { e:'😤', t:'الْكِبْرُ وَالتَّفَاخُر', bin:1 },
    { e:'🎁', t:'الْكَرَمُ وَالْعَطَاء', bin:0 },
    { e:'🙄', t:'الْبُخْلُ وَالِاحْتِقَار', bin:1 } ] },
  act:{ q:'كَيْفَ كَانَ طَلْحَةُ مَعَ غِنَاهُ وَقُوَّتِه؟', yay:'أَحْسَنْت! مُتَوَاضِعًا حَيِيًّا كَرِيمًا', opts:[
    { e:'😌', t:'مُتَوَاضِعًا حَيِيًّا', ok:true },
    { e:'😤', t:'مُتَكَبِّرًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ زَيِّنِّي بِالْأَخْلَاقِ الْجَمِيلَة' },

{ id:'jannah', icon:'🌟', color:'#C9A227', title:'الْمُبَشَّرُ بِالْجَنَّة',
  tag:'شَهِيدٌ حَيّ',
  pages:[
    { emoji:'🌟', text:'طَلْحَةُ مِنَ الْعَشَرَةِ الْمُبَشَّرِينَ بِالْجَنَّة، وَقَالَ عَنْهُ النَّبِيُّ ﷺ: طَلْحَةُ مِمَّنْ قَضَى نَحْبَه — أَيْ صَدَقَ مَعَ الله.',
      prompt:'A radiant golden star among ten in a warm sky, glad tidings, serene glow' },
    { emoji:'🛡️', text:'عَاشَ بَطَلًا وَفِيًّا كَرِيمًا شُجَاعًا، وَمَاتَ شَهِيدًا فِي سَبِيلِ الله.',
      prompt:'A loyal brave hero honored with light, a life of loyalty and courage, warm dignified, no faces' },
    { emoji:'💚', text:'جَمَعَ طَلْحَةُ الشَّجَاعَةَ وَالْوَفَاءَ وَالْكَرَمَ وَالْحَيَاء — قُدْوَةٌ رَائِعَة.',
      prompt:'A complete role model glowing with virtues, an exemplary companion, warm bright, no faces' },
    { emoji:'💛', text:'فَأُحِبُّ طَلْحَة، وَأَقْتَدِي بِوَفَائِهِ وَكَرَمِهِ وَشَجَاعَتِه.',
      prompt:'A child aspiring toward a bright guiding star, following a role model, uplifting warm' },
  ],
  moral:'أُحِبُّ طَلْحَة، وَأَقْتَدِي بِوَفَائِهِ وَكَرَمِهِ وَشَجَاعَتِه. 💛',
  game:{ type:'order', title:'رَتِّبْ صِفَاتِ طَلْحَةَ الْخَيْر', items:[
    { e:'🌟', t:'مِنَ السَّابِقِينَ الْأَوَّلِين' },
    { e:'🛡️', t:'حَمَى النَّبِيَّ فِي أُحُد' },
    { e:'🎁', t:'طَلْحَةُ الْخَيْرِ لِكَرَمِه' },
    { e:'🌟', t:'الْمُبَشَّرُ بِالْجَنَّة' } ] },
  act:{ q:'بِمَ بَشَّرَ النَّبِيُّ ﷺ طَلْحَة؟', yay:'أَحْسَنْت! بَشَّرَهُ بِالْجَنَّة', opts:[
    { e:'🌟', t:'بَشَّرَهُ بِالْجَنَّة', ok:true },
    { e:'💰', t:'بِالْمَال' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الْجَنَّةَ وَحُسْنَ الْخُلُق' },

]};
