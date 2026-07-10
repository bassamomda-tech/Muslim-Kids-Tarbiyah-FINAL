/* corners/stories/companions-little/saad.js — سعد بن أبي وقّاص للصغار (٣–٦) · ٦ حكايات */
window.COMPANIONS_LITTLE = window.COMPANIONS_LITTLE || {};
window.COMPANIONS_LITTLE.saad = {
  id:'saad', icon:'🏹', color:'#D4A017', title:'سَعْدُ بْنُ أَبِي وَقَّاص', tag:'أَوَّلُ مَنْ رَمَى بِسَهْم',
  stories:[

{ id:'young', icon:'🌟', color:'#D4A017', title:'الْفَتَى الْمُؤْمِن',
  tag:'آمَنَ وَهُوَ صَغِير',
  pages:[
    { emoji:'🌟', text:'أَسْلَمَ سَعْدُ بْنُ أَبِي وَقَّاصٍ وَهُوَ فَتًى صَغِيرٌ فِي السَّابِعَةَ عَشْرَةَ مِنْ عُمُرِه، مِنَ السَّابِقِينَ الْأَوَّلِين.',
      prompt:'A young believer embracing faith early, youthful devotion, warm dawn light, no face' },
    { emoji:'🏹', text:'كَانَ فَارِسًا مَاهِرًا وَرَامِيًا بَارِعًا بِالسِّهَام، وَوَهَبَ مَهَارَتَهُ لِنُصْرَةِ الْحَقّ.',
      prompt:'A skilled young archer with a bow, talent devoted to good, warm heroic, no face' },
    { emoji:'💚', text:'قَدَّمَ قُوَّتَهُ وَشَبَابَهُ فِي طَاعَةِ الله، فَلَمْ يَنْتَظِرْ حَتَّى يَكْبُر.',
      prompt:'Youthful strength offered in service of good, energy for a noble cause, warm bright, no face' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ أَنَّ الصِّغَرَ لَيْسَ عُذْرًا، وَأَنَّ مَوَاهِبِي أُوَظِّفُهَا فِي الْخَيْرِ مُبَكِّرًا.',
      prompt:'A child using his talents for good early in life, gifts for good, warm uplifting' },
  ],
  moral:'أُوَظِّفُ مَوَاهِبِي فِي الْخَيْرِ مُبَكِّرًا، فَالصِّغَرُ لَيْسَ عُذْرًا. 💛',
  game:{ type:'pairs', title:'صِلْ كُلَّ شَيْءٍ بِسَعْد', pairs:[
    ['🌟 أَسْلَمَ','وَهُوَ فَتًى صَغِير'],
    ['🏹 رَامٍ','مَاهِرٌ بِالسِّهَام'],
    ['💚 قَدَّمَ','قُوَّتَهُ لِلَّه'] ] },
  act:{ q:'مَتَى أَسْلَمَ سَعْد؟', yay:'أَحْسَنْت! وَهُوَ فَتًى صَغِيرٌ مِنَ السَّابِقِين', opts:[
    { e:'🌟', t:'وَهُوَ فَتًى صَغِير', ok:true },
    { e:'👴', t:'وَهُوَ شَيْخٌ كَبِير' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي مِنَ السَّابِقِينَ إِلَى الْخَيْر' },

{ id:'mother', icon:'💚', color:'#27AE60', title:'الْبِرُّ مَعَ الثَّبَات',
  tag:'أَطَعْتُ اللهَ وَبَرَرْتُ أُمِّي',
  pages:[
    { emoji:'😢', text:'حِينَ أَسْلَمَ سَعْد، غَضِبَتْ أُمُّهُ وَأَقْسَمَتْ أَلَّا تَأْكُلَ وَلَا تَشْرَبَ حَتَّى يَتْرُكَ دِينَه!',
      prompt:'A worried mother refusing food to pressure her son, family test of faith, warm emotional, no faces' },
    { emoji:'💪', text:'حَزِنَ سَعْدٌ لِأُمِّهِ كَثِيرًا، لَكِنَّهُ ثَبَتَ عَلَى دِينِه، فَالطَّاعَةُ لِلَّهِ قَبْلَ كُلِّ أَحَد.',
      prompt:'A devoted son steadfast in faith while loving his mother, faith before all, warm resolute, no faces' },
    { emoji:'💚', text:'قَالَ لَهَا بِلُطْف: يَا أُمَّاهُ لَوْ كَانَ لَكِ مِئَةُ نَفْسٍ فَخَرَجَتْ، مَا تَرَكْتُ دِينِي! فَأَكَلَتْ أُمُّه.',
      prompt:'A gentle son speaking kindly yet firmly to his mother, gentle firmness, warm tender, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ أَنْ أَبَرَّ وَالِدَيَّ بِلُطْف، لَكِنْ لَا أَتْرُكَ طَاعَةَ اللهِ لِأَجْلِ أَحَد.',
      prompt:'A child being kind to parents while keeping his faith, balance of duty, warm uplifting' },
  ],
  moral:'أَبَرُّ وَالِدَيَّ بِلُطْف، لَكِنْ لَا طَاعَةَ لِمَخْلُوقٍ فِي مَعْصِيَةِ الْخَالِق. 💛',
  game:{ type:'sort', title:'مَاذَا أَفْعَلُ مَعَ وَالِدَيَّ؟', bins:['بِرٌّ وَلُطْف 💚','لَا أُطِيعُ فِي مَعْصِيَة 🛑'], items:[
    { e:'🤗', t:'أُحْسِنُ إِلَيْهِمَا دَائِمًا', bin:0 },
    { e:'🙅', t:'لَا أَتْرُكُ صَلَاتِي لَوْ مَنَعَانِي', bin:1 },
    { e:'💐', t:'أُطِيعُهُمَا فِي الْخَيْر', bin:0 },
    { e:'🚫', t:'لَا أَعْصِي اللهَ لِإِرْضَائِهِمَا', bin:1 } ] },
  act:{ q:'مَاذَا فَعَلَ سَعْدٌ حِينَ أَضْرَبَتْ أُمُّهُ عَنِ الطَّعَام؟', yay:'أَحْسَنْت! بَرَّهَا بِلُطْفٍ لَكِنَّهُ ثَبَتَ عَلَى دِينِه', opts:[
    { e:'💚', t:'ثَبَتَ عَلَى دِينِهِ وَبَرَّهَا بِلُطْف', ok:true },
    { e:'😔', t:'تَرَكَ دِينَه' },
    { e:'😠', t:'قَسَا عَلَيْهَا' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي بَارًّا بِوَالِدَيَّ ثَابِتًا عَلَى دِينِك' },

{ id:'arrow', icon:'🏹', color:'#C0392B', title:'أَوَّلُ سَهْمٍ فِي سَبِيلِ الله',
  tag:'ارْمِ سَعْدُ فِدَاكَ أَبِي وَأُمِّي',
  pages:[
    { emoji:'🏹', text:'كَانَ سَعْدٌ أَوَّلَ مَنْ رَمَى بِسَهْمٍ فِي سَبِيلِ الله، يُدَافِعُ عَنِ الْمُسْلِمِينَ بِمَهَارَتِه.',
      prompt:'An archer defending the community with skill, first to fire an arrow for the cause, warm heroic, no face' },
    { emoji:'💛', text:'وَفِي أُحُدٍ قَالَ لَهُ النَّبِيُّ ﷺ: ارْمِ سَعْدُ فِدَاكَ أَبِي وَأُمِّي! فَجَمَعَ لَهُ أَبَوَيْه.',
      prompt:'A cherished archer honored by his leader, great honor and encouragement, warm radiant, no faces' },
    { emoji:'🌟', text:'كَانَتْ كَلِمَةً عَظِيمَةً لَمْ يَقُلْهَا النَّبِيُّ ﷺ لِأَحَدٍ غَيْرِه، فَكَانَتْ شَرَفًا كَبِيرًا لِسَعْد.',
      prompt:'A moment of unique honor and pride, singular distinction, warm bright, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنْ أُتْقِنَ مَهَارَتِي وَأَسْتَخْدِمَهَا فِي نُصْرَةِ الْحَقِّ وَحِمَايَةِ النَّاس.',
      prompt:'A child mastering a skill to protect and help others, skill for good, warm uplifting' },
  ],
  moral:'أُتْقِنُ مَهَارَتِي وَأَسْتَخْدِمُهَا فِي نُصْرَةِ الْحَقّ. 💚',
  game:{ type:'find', title:'ارْمِ نَحْوَ الْهَدَف! اجْمَعِ السِّهَامَ الْخَمْسَ الصَّائِبَة', target:'🎯', count:5, distractors:['🏹','☁️'], size:12 },
  act:{ q:'بِمَ تَمَيَّزَ سَعْدٌ فِي الْجِهَاد؟', yay:'أَحْسَنْت! أَوَّلُ مَنْ رَمَى بِسَهْمٍ فِي سَبِيلِ الله', opts:[
    { e:'🏹', t:'أَوَّلُ مَنْ رَمَى بِسَهْم', ok:true },
    { e:'🍳', t:'أَوَّلُ مَنْ طَبَخَ' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْ قُوَّتِي وَمَهَارَتِي فِي طَاعَتِك' },

{ id:'dua', icon:'🤲', color:'#5B4B8A', title:'مُسْتَجَابُ الدَّعْوَة',
  tag:'دَعَا لَهُ النَّبِيُّ ﷺ',
  pages:[
    { emoji:'🤲', text:'دَعَا لَهُ النَّبِيُّ ﷺ: اللَّهُمَّ اسْتَجِبْ لِسَعْدٍ إِذَا دَعَاك! فَصَارَ مُسْتَجَابَ الدَّعْوَة.',
      prompt:'Hands raised in a blessed dua, gift of answered prayers, warm radiant, no faces' },
    { emoji:'🌟', text:'كَانَ النَّاسُ يَخَافُونَ دَعْوَتَهُ وَيَطْلُبُونَ دُعَاءَه، لِأَنَّ اللهَ يَسْتَجِيبُ لَه.',
      prompt:'People seeking a righteous man\u2019s prayers, respected supplication, warm reverent, no faces' },
    { emoji:'💚', text:'وَهَذِهِ الْبَرَكَةُ نَالَهَا بِبِرِّهِ وَصِدْقِهِ وَأَكْلِهِ الْحَلَال، فَالدُّعَاءُ يُسْتَجَابُ بِالطَّيِّبَات.',
      prompt:'Righteous living leading to answered prayers, purity bringing blessing, warm symbolic, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ أَنْ أَحْفَظَ لِسَانِي وَأَطْعَمَ الْحَلَال، لِيَكُونَ دُعَائِي مُسْتَجَابًا بِإِذْنِ الله.',
      prompt:'A child praying sincerely with a pure heart, sincere dua, warm uplifting' },
  ],
  moral:'الْحَلَالُ وَالْبِرُّ يَجْعَلَانِ دُعَائِي مُسْتَجَابًا بِإِذْنِ الله. 💛',
  game:{ type:'find', title:'ادْعُ رَبَّك! اجْمَعِ الْأَيْدِيَ الْمَرْفُوعَةَ بِالدُّعَاءِ الْخَمْس', target:'🤲', count:5, distractors:['☁️','⭐'], size:12 },
  act:{ q:'بِمَ دَعَا النَّبِيُّ ﷺ لِسَعْد؟', yay:'أَحْسَنْت! أَنْ يَسْتَجِيبَ اللهُ دُعَاءَه', opts:[
    { e:'🤲', t:'أَنْ يَسْتَجِيبَ اللهُ دَعْوَتَه', ok:true },
    { e:'💰', t:'أَنْ يَكْثُرَ مَالُه' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي مِمَّنْ تَسْتَجِيبُ دُعَاءَه' },

{ id:'leader', icon:'🏙️', color:'#16A085', title:'قَائِدُ الْقَادِسِيَّة',
  tag:'أَمَانَةٌ وَقِيَادَةٌ حَكِيمَة',
  pages:[
    { emoji:'🏹', text:'قَادَ سَعْدٌ جَيْشَ الْمُسْلِمِينَ فِي مَعْرَكَةِ الْقَادِسِيَّةِ الْعَظِيمَة، بِحِكْمَةٍ وَشَجَاعَة.',
      prompt:'A wise commander leading with courage and strategy, leadership, warm heroic, no faces' },
    { emoji:'🤲', text:'وَكَانَ يَعْتَمِدُ عَلَى الدُّعَاءِ وَالتَّوَكُّلِ عَلَى الله، لَا عَلَى كَثْرَةِ الْجَيْشِ وَحْدَه.',
      prompt:'A leader relying on prayer and trust in God, reliance on Allah, warm serene, no faces' },
    { emoji:'🏙️', text:'وَبَنَى مَدِينَةَ الْكُوفَة، وَكَانَ حَاكِمًا عَادِلًا أَمِينًا يَخَافُ اللهَ فِي رَعِيَّتِه.',
      prompt:'A just governor building and caring for a city, fair leadership, warm bright, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنَّ الْقِيَادَةَ أَمَانَة، وَأَنَّ النَّصْرَ مِنَ اللهِ بِالتَّقْوَى وَالتَّوَكُّل.',
      prompt:'A child leading a small group fairly and humbly, responsible leadership, warm uplifting' },
  ],
  moral:'الْقِيَادَةُ أَمَانَة، وَالنَّصْرُ مِنَ اللهِ بِالتَّقْوَى وَالتَّوَكُّل. 💚',
  game:{ type:'sort', title:'مِمَّ يَأْتِي النَّصْر؟', bins:['سَبَبُ النَّصْر 💚','لَا يَكْفِي وَحْدَه 🚫'], items:[
    { e:'🤲', t:'الدُّعَاءُ وَالتَّوَكُّل', bin:0 },
    { e:'⚖️', t:'الْعَدْلُ وَالتَّقْوَى', bin:0 },
    { e:'🔢', t:'كَثْرَةُ الْجَيْشِ وَحْدَهَا', bin:1 },
    { e:'😤', t:'الْغُرُورُ بِالْقُوَّة', bin:1 } ] },
  act:{ q:'عَلَامَ اعْتَمَدَ سَعْدٌ فِي قِيَادَتِه؟', yay:'أَحْسَنْت! عَلَى الدُّعَاءِ وَالتَّوَكُّلِ عَلَى الله', opts:[
    { e:'🤲', t:'الدُّعَاءُ وَالتَّوَكُّلُ عَلَى الله', ok:true },
    { e:'🔢', t:'كَثْرَةُ الْجَيْشِ فَقَط' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ انْصُرْنَا بِتَقْوَاكَ وَتَوَكُّلِنَا عَلَيْك' },

{ id:'jannah', icon:'🌟', color:'#C9A227', title:'الْمُبَشَّرُ بِالْجَنَّة',
  tag:'خَالُ النَّبِيِّ ﷺ',
  pages:[
    { emoji:'🌟', text:'سَعْدُ بْنُ أَبِي وَقَّاصٍ مِنَ الْعَشَرَةِ الْمُبَشَّرِينَ بِالْجَنَّة، وَأَحَدُ السِّتَّةِ أَهْلِ الشُّورَى.',
      prompt:'A radiant golden star among ten in a warm sky, glad tidings, serene glow' },
    { emoji:'💚', text:'كَانَ فَارِسًا مُجَاهِدًا، بَارًّا بِأُمِّه، مُسْتَجَابَ الدَّعْوَة، قَائِدًا عَادِلًا.',
      prompt:'A complete role model of faith, valor and justice, exemplary life, warm bright, no faces' },
    { emoji:'💛', text:'جَمَعَ الْقُوَّةَ وَالْبِرَّ وَالتَّقْوَى، فَكَانَ قُدْوَةً لِكُلِّ فَتًى مُؤْمِن.',
      prompt:'Strength and piety combined in one person, balanced hero, warm radiant, no faces' },
    { emoji:'🌟', text:'فَأُحِبُّ سَعْدًا، وَأَقْتَدِي بِثَبَاتِهِ وَبِرِّهِ وَتَوَكُّلِهِ عَلَى الله.',
      prompt:'A child aspiring toward a bright guiding star, following a role model, uplifting warm' },
  ],
  moral:'أَجْمَعُ بَيْنَ الْقُوَّةِ وَالْبِرِّ وَالتَّقْوَى مِثْلَ سَعْد. 💛',
  game:{ type:'order', title:'رَتِّبْ صِفَاتِ سَعْد', items:[
    { e:'🌟', t:'آمَنَ صَغِيرًا مِنَ السَّابِقِين' },
    { e:'💚', t:'بَرَّ أُمَّهُ وَثَبَتَ عَلَى دِينِه' },
    { e:'🏹', t:'أَوَّلُ مَنْ رَمَى بِسَهْم' },
    { e:'🌟', t:'الْمُبَشَّرُ بِالْجَنَّة' } ] },
  act:{ q:'بِمَ بَشَّرَ النَّبِيُّ ﷺ سَعْدًا؟', yay:'أَحْسَنْت! بَشَّرَهُ بِالْجَنَّة', opts:[
    { e:'🌟', t:'بَشَّرَهُ بِالْجَنَّة', ok:true },
    { e:'💰', t:'بِالْمَالِ فَقَط' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْمَعْ لِي بَيْنَ الْقُوَّةِ وَالتَّقْوَى وَالْبِرّ' },

]};
