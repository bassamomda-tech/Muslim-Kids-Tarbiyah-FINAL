/* corners/stories/companions-little/saeed.js — سعيد بن زيد للصغار (٣–٦) · ٦ حكايات */
window.COMPANIONS_LITTLE = window.COMPANIONS_LITTLE || {};
window.COMPANIONS_LITTLE.saeed = {
  id:'saeed', icon:'🤲', color:'#5B4B8A', title:'سَعِيدُ بْنُ زَيْد', tag:'الْمُسْتَجَابُ الدَّعْوَة',
  stories:[

{ id:'father', icon:'🔍', color:'#5B4B8A', title:'عَلَى دِينِ الْفِطْرَة',
  tag:'بَيْتٌ بَحَثَ عَنِ الْحَقّ',
  pages:[
    { emoji:'🔍', text:'كَانَ أَبُو سَعِيدٍ (زَيْدُ بْنُ عَمْرٍو) يَبْحَثُ عَنْ دِينِ إِبْرَاهِيمَ الْحَقّ قَبْلَ الْإِسْلَام، وَرَفَضَ عِبَادَةَ الْأَصْنَام.',
      prompt:'A seeker turning away from idols toward the truth, search for pure faith, warm thoughtful, no faces' },
    { emoji:'🌟', text:'فَنَشَأَ سَعِيدٌ فِي بَيْتٍ يُحِبُّ الْحَقّ، فَلَمَّا جَاءَ الْإِسْلَامُ أَسْلَمَ مُبَكِّرًا مِنَ السَّابِقِين.',
      prompt:'A young man embracing Islam early, foremost in faith, warm dawn light, no face' },
    { emoji:'💚', text:'الْبَيْتُ الَّذِي يُحِبُّ الْحَقَّ يُرَبِّي أَبْنَاءً يُحِبُّونَ الْحَقّ.',
      prompt:'A home nurturing love of truth in children, upbringing on goodness, warm bright, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ أَنْ أَبْحَثَ عَنِ الْحَقِّ وَأُحِبَّه، وَأَنَّ الْبَيْتَ الطَّيِّبَ يُثْمِرُ خَيْرًا.',
      prompt:'A child growing up loving truth in a good home, love of goodness, warm uplifting' },
  ],
  moral:'الْبَيْتُ الَّذِي يُحِبُّ الْحَقَّ يُرَبِّي أَبْنَاءً عَلَى الْخَيْر. 💛',
  game:{ type:'pairs', title:'صِلْ كُلَّ شَيْءٍ بِسَعِيد', pairs:[
    ['🔍 أَبُوه','بَحَثَ عَنِ الْحَقّ'],
    ['🌟 سَعِيد','أَسْلَمَ مُبَكِّرًا'],
    ['💚 بَيْتُه','يُحِبُّ الْحَقّ'] ] },
  act:{ q:'فِي أَيِّ بَيْتٍ نَشَأَ سَعِيد؟', yay:'أَحْسَنْت! بَيْتٌ يُحِبُّ الْحَقَّ وَيَبْحَثُ عَنْه', opts:[
    { e:'🔍', t:'بَيْتٌ يُحِبُّ الْحَقّ', ok:true },
    { e:'🗿', t:'بَيْتٌ يَعْبُدُ الْأَصْنَام' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَه' },

{ id:'omar', icon:'📖', color:'#C0392B', title:'إِسْلَامٌ غَيَّرَ التَّارِيخ',
  tag:'سَبَبٌ فِي إِسْلَامِ عُمَر',
  pages:[
    { emoji:'📖', text:'كَانَتْ أُخْتُ عُمَرَ (فَاطِمَة) زَوْجَةَ سَعِيد، وَكَانَا يَقْرَآنِ الْقُرْآنَ فِي بَيْتِهِمَا سِرًّا.',
      prompt:'A couple reading the Quran together at home, faith in the household, warm gentle, no faces' },
    { emoji:'⚔️', text:'جَاءَ عُمَرُ غَاضِبًا يُرِيدُ أَذَاهُمَا، فَسَمِعَ الْقُرْآنَ فَلَانَ قَلْبُهُ الْقَوِيّ!',
      prompt:'An angry man softened upon hearing the Quran, transformation of a heart, warm dramatic, no faces' },
    { emoji:'🌟', text:'فَأَسْلَمَ عُمَرُ فِي ذَلِكَ الْبَيْت! وَكَانَ سَعِيدٌ وَزَوْجَتُهُ سَبَبًا فِي هِدَايَةِ الْفَارُوق.',
      prompt:'A pivotal moment of guidance in a humble home, cause of great good, warm radiant, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنَّ كَلِمَةً طَيِّبَةً أَوْ قُرْآنًا أَقْرَؤُهُ قَدْ يَكُونُ سَبَبًا فِي خَيْرٍ عَظِيم.',
      prompt:'A child sharing goodness that leads to more good, small cause big effect, warm uplifting' },
  ],
  moral:'كَلِمَةُ خَيْرٍ صَغِيرَةٌ قَدْ تَكُونُ سَبَبًا فِي هِدَايَةٍ عَظِيمَة. 💚',
  game:{ type:'order', title:'رَتِّبْ قِصَّةَ إِسْلَامِ عُمَر', items:[
    { e:'📖', t:'سَعِيدٌ وَزَوْجَتُهُ يَقْرَآنِ الْقُرْآن' },
    { e:'⚔️', t:'عُمَرُ يَأْتِي غَاضِبًا' },
    { e:'👂', t:'يَسْمَعُ الْقُرْآنَ فَيَلِينُ قَلْبُه' },
    { e:'🌟', t:'يُسْلِمُ عُمَر' } ] },
  act:{ q:'مَاذَا كَانَ لِسَعِيدٍ فِي إِسْلَامِ عُمَر؟', yay:'أَحْسَنْت! كَانَ سَبَبًا فِي هِدَايَتِه', opts:[
    { e:'🌟', t:'كَانَ سَبَبًا فِي إِسْلَامِه', ok:true },
    { e:'😴', t:'لَمْ يَكُنْ لَهُ دَوْر' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي سَبَبًا فِي هِدَايَةِ غَيْرِي' },

{ id:'jihad', icon:'⚔️', color:'#16A085', title:'الْمُجَاهِدُ الثَّابِت',
  tag:'شَهِدَ الْمَشَاهِدَ كُلَّهَا',
  pages:[
    { emoji:'⚔️', text:'شَهِدَ سَعِيدٌ الْمَعَارِكَ كُلَّهَا مَعَ النَّبِيِّ ﷺ إِلَّا بَدْرًا، وَكَانَ شُجَاعًا ثَابِتًا.',
      prompt:'A steadfast warrior present in many battles, courage and constancy, warm heroic, no faces' },
    { emoji:'🌍', text:'وَجَاهَدَ فِي فُتُوحِ الشَّامِ بَعْدَ النَّبِيِّ ﷺ، يَنْشُرُ الْخَيْرَ وَالْعَدْل.',
      prompt:'A believer serving in the spread of justice, service after the Prophet, warm bright, no faces' },
    { emoji:'💚', text:'لَمْ يَطْلُبْ مَنْصِبًا وَلَا شُهْرَة، بَلْ عَمِلَ لِلَّهِ خَالِصًا فِي صَمْتٍ وَإِخْلَاص.',
      prompt:'A humble servant working sincerely without seeking fame, sincerity, warm serene, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ الْإِخْلَاصَ فِي الْعَمَل، فَأَعْمَلُ لِلَّهِ لَا لِلشُّهْرَةِ وَلَا الثَّنَاء.',
      prompt:'A child doing good quietly for God alone, sincere effort, warm uplifting' },
  ],
  moral:'أَعْمَلُ لِلَّهِ بِإِخْلَاص، لَا لِلشُّهْرَةِ وَلَا الثَّنَاء. 💛',
  game:{ type:'sort', title:'لِمَنْ أَعْمَل؟', bins:['إِخْلَاصٌ لِلَّه 💚','رِيَاءٌ لِلنَّاس 🚫'], items:[
    { e:'🤲', t:'أَعْمَلُ لِوَجْهِ الله', bin:0 },
    { e:'📸', t:'أَعْمَلُ لِيَرَانِي النَّاس', bin:1 },
    { e:'🌟', t:'أُخْفِي عَمَلِيَ الصَّالِح', bin:0 },
    { e:'📢', t:'أَتَبَاهَى بِطَاعَتِي', bin:1 } ] },
  act:{ q:'كَيْفَ عَمِلَ سَعِيدٌ لِلَّه؟', yay:'أَحْسَنْت! بِإِخْلَاصٍ فِي صَمْتٍ دُونَ طَلَبِ شُهْرَة', opts:[
    { e:'💚', t:'بِإِخْلَاصٍ دُونَ طَلَبِ شُهْرَة', ok:true },
    { e:'📢', t:'لِيَمْدَحَهُ النَّاس' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْ عَمَلِي خَالِصًا لِوَجْهِك' },

{ id:'dua', icon:'🤲', color:'#8E44AD', title:'مُسْتَجَابُ الدَّعْوَة',
  tag:'دَعَا فَاسْتُجِيبَ لَه',
  pages:[
    { emoji:'⚖️', text:'اتَّهَمَتْهُ امْرَأَةٌ ظُلْمًا وَادَّعَتْ أَنَّهُ أَخَذَ أَرْضَهَا، وَهُوَ بَرِيءٌ لَمْ يَظْلِمْهَا.',
      prompt:'An innocent man falsely accused, injustice and patience, warm emotional, no faces' },
    { emoji:'🤲', text:'فَدَعَا سَعِيدٌ: اللَّهُمَّ إِنْ كَانَتْ كَاذِبَةً فَأَعْمِ بَصَرَهَا وَاجْعَلْ قَبْرَهَا فِي أَرْضِهَا!',
      prompt:'Hands raised in a truthful dua against injustice, prayer of the wronged, warm serene, no faces' },
    { emoji:'🌟', text:'فَاسْتَجَابَ اللهُ دُعَاءَه، وَظَهَرَ صِدْقُه، لِأَنَّهُ كَانَ صَادِقًا مَظْلُومًا.',
      prompt:'Truth revealed and prayer answered, vindication by God, warm radiant, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنَّ اللهَ يَنْصُرُ الْمَظْلُوم، وَأَنَّ دُعَاءَ الصَّادِقِ لَا يُرَدّ.',
      prompt:'A child trusting that God defends the wronged, faith in divine justice, warm uplifting' },
  ],
  moral:'اللهُ يَنْصُرُ الْمَظْلُوم، وَدُعَاءُ الصَّادِقِ لَا يُرَدّ. 💚',
  game:{ type:'find', title:'ادْعُ رَبَّك! اجْمَعِ الْأَيْدِيَ الْمَرْفُوعَةَ بِالدُّعَاءِ الْخَمْس', target:'🤲', count:5, distractors:['☁️','⭐'], size:12 },
  act:{ q:'مَاذَا حَدَثَ حِينَ دَعَا سَعِيدٌ عَلَى مَنْ ظَلَمَه؟', yay:'أَحْسَنْت! اسْتَجَابَ اللهُ لَهُ وَنَصَرَه', opts:[
    { e:'🌟', t:'اسْتَجَابَ اللهُ دُعَاءَه', ok:true },
    { e:'😴', t:'لَمْ يَحْدُثْ شَيْء' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ انْصُرْنِي إِنْ ظُلِمْت، وَاجْعَلْ دُعَائِي مُسْتَجَابًا' },

{ id:'humble', icon:'😌', color:'#27AE60', title:'الزَّاهِدُ الْمُتَوَاضِع',
  tag:'لَمْ يَطْلُبِ الدُّنْيَا',
  pages:[
    { emoji:'😌', text:'كَانَ سَعِيدٌ زَاهِدًا مُتَوَاضِعًا، لَا يُحِبُّ الْمَنَاصِبَ وَلَا يَتَعَلَّقُ بِالدُّنْيَا.',
      prompt:'A content ascetic uninterested in status, humility and detachment, warm serene, no faces' },
    { emoji:'🤍', text:'عَاشَ بَسِيطًا رَاضِيًا بِمَا قَسَمَ اللهُ لَه، مُشْتَغِلًا بِالْآخِرَةِ عَنِ الدُّنْيَا.',
      prompt:'A simple content life focused on the Hereafter, contentment, warm bright, no faces' },
    { emoji:'💚', text:'وَكَانَ يُذَكِّرُ النَّاسَ بِالصَّحَابَةِ وَفَضْلِهِم، لَا يَنْسَى إِخْوَانَهُ فِي الْخَيْر.',
      prompt:'A believer honoring his righteous companions, loyalty and gratitude, warm, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ الزُّهْدَ وَالْقَنَاعَة، فَأَرْضَى بِمَا عِنْدِي وَأَشْتَغِلُ بِالْآخِرَة.',
      prompt:'A content child grateful for what he has, contentment, warm uplifting' },
  ],
  moral:'أَرْضَى بِمَا قَسَمَ اللهُ لِي، وَأَشْتَغِلُ بِالْآخِرَةِ عَنِ الدُّنْيَا. 💛',
  game:{ type:'sort', title:'مَا صِفَاتُ الزَّاهِدِ الرَّاضِي؟', bins:['زُهْدٌ وَقَنَاعَة 💚','طَمَعٌ وَتَعَلُّق 🚫'], items:[
    { e:'😌', t:'الرِّضَا بِمَا قَسَمَ الله', bin:0 },
    { e:'💰', t:'حُبُّ الْمَالِ وَالْجَمْع', bin:1 },
    { e:'🤍', t:'الِاشْتِغَالُ بِالْآخِرَة', bin:0 },
    { e:'👑', t:'حُبُّ الْمَنَاصِب', bin:1 } ] },
  act:{ q:'كَيْفَ عَاشَ سَعِيد؟', yay:'أَحْسَنْت! زَاهِدًا مُتَوَاضِعًا رَاضِيًا', opts:[
    { e:'😌', t:'زَاهِدًا مُتَوَاضِعًا', ok:true },
    { e:'👑', t:'طَامِعًا فِي الدُّنْيَا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الْقَنَاعَةَ وَالرِّضَا بِقِسْمَتِك' },

{ id:'jannah', icon:'🌟', color:'#C9A227', title:'الْمُبَشَّرُ بِالْجَنَّة',
  tag:'أَحَدُ الْعَشَرَة',
  pages:[
    { emoji:'🌟', text:'سَعِيدُ بْنُ زَيْدٍ مِنَ الْعَشَرَةِ الْمُبَشَّرِينَ بِالْجَنَّة، مِنَ السَّابِقِينَ الْأَوَّلِين.',
      prompt:'A radiant golden star among ten in a warm sky, glad tidings, serene glow' },
    { emoji:'💚', text:'جَمَعَ حُبَّ الْحَقِّ وَالْجِهَادَ وَالْإِخْلَاصَ وَالزُّهْدَ وَاسْتِجَابَةَ الدَّعْوَة.',
      prompt:'A complete righteous life of many virtues, exemplary character, warm bright, no faces' },
    { emoji:'💛', text:'كَانَ قُدْوَةً فِي الْبَحْثِ عَنِ الْحَقِّ وَاتِّبَاعِهِ وَالْعَمَلِ لِلَّهِ بِإِخْلَاص.',
      prompt:'A guiding example of sincerity and truth, role model, warm radiant, no faces' },
    { emoji:'🌟', text:'فَأُحِبُّ سَعِيدًا، وَأَقْتَدِي بِحُبِّهِ لِلْحَقِّ وَإِخْلَاصِهِ وَتَوَاضُعِه.',
      prompt:'A child aspiring toward a bright guiding star, following a role model, uplifting warm' },
  ],
  moral:'أُحِبُّ الْحَقَّ وَأَتَّبِعُهُ وَأَعْمَلُ لِلَّهِ بِإِخْلَاصٍ مِثْلَ سَعِيد. 💛',
  game:{ type:'order', title:'رَتِّبْ صِفَاتِ سَعِيد', items:[
    { e:'🔍', t:'نَشَأَ فِي بَيْتٍ يُحِبُّ الْحَقّ' },
    { e:'📖', t:'سَبَبٌ فِي إِسْلَامِ عُمَر' },
    { e:'🤲', t:'مُسْتَجَابُ الدَّعْوَة' },
    { e:'🌟', t:'الْمُبَشَّرُ بِالْجَنَّة' } ] },
  act:{ q:'بِمَ بَشَّرَ النَّبِيُّ ﷺ سَعِيدًا؟', yay:'أَحْسَنْت! بَشَّرَهُ بِالْجَنَّة', opts:[
    { e:'🌟', t:'بَشَّرَهُ بِالْجَنَّة', ok:true },
    { e:'💰', t:'بِالْمَالِ فَقَط' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْحَقِّ وَالْإِخْلَاص' },

]};
