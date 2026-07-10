/* corners/stories/companions-little/abdurrahman.js — عبد الرحمن بن عوف للصغار (٣–٦) · ٦ حكايات */
window.COMPANIONS_LITTLE = window.COMPANIONS_LITTLE || {};
window.COMPANIONS_LITTLE.abdurrahman = {
  id:'abdurrahman', icon:'🎁', color:'#27AE60', title:'عَبْدُ الرَّحْمَنِ بْنُ عَوْف', tag:'التَّاجِرُ الْكَرِيم',
  stories:[

{ id:'early', icon:'🌟', color:'#27AE60', title:'مِنَ السَّابِقِين',
  tag:'آمَنَ مُبَكِّرًا وَهَاجَر',
  pages:[
    { emoji:'🌟', text:'كَانَ عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ مِنْ أَوَائِلِ مَنْ آمَنَ بِالنَّبِيِّ ﷺ، وَهَاجَرَ مِنْ أَجْلِ دِينِه.',
      prompt:'An early believer setting out with resolve, foremost in faith and migration, warm, no face' },
    { emoji:'🏠', text:'تَرَكَ مَالَهُ وَبَيْتَهُ فِي مَكَّةَ وَهَاجَرَ إِلَى الْمَدِينَةِ فَقِيرًا، لَكِنَّهُ غَنِيُّ الْقَلْبِ بِالْإِيمَان.',
      prompt:'A migrant leaving wealth behind for faith, sacrifice for religion, warm dignified, no faces' },
    { emoji:'💚', text:'قَدَّمَ دِينَهُ عَلَى مَالِه، فَعَوَّضَهُ اللهُ خَيْرًا كَثِيرًا فِي الدُّنْيَا وَالْآخِرَة.',
      prompt:'A hand releasing wealth and receiving blessings of light, reward for sacrifice, warm bright' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ أَنَّ مَنْ تَرَكَ شَيْئًا لِلَّهِ عَوَّضَهُ اللهُ خَيْرًا مِنْه.',
      prompt:'A child giving something up for good and gaining better, sacrifice rewarded, warm uplifting' },
  ],
  moral:'مَنْ تَرَكَ شَيْئًا لِلَّهِ عَوَّضَهُ اللهُ خَيْرًا مِنْه. 💛',
  game:{ type:'pairs', title:'صِلْ كُلَّ شَيْءٍ بِعَبْدِ الرَّحْمَن', pairs:[
    ['🌟 مِنَ السَّابِقِين','لِلْإِيمَان'],
    ['🏠 هَاجَرَ','وَتَرَكَ مَالَه'],
    ['💚 عَوَّضَهُ الله','خَيْرًا كَثِيرًا'] ] },
  act:{ q:'مَاذَا تَرَكَ عَبْدُ الرَّحْمَنِ مِنْ أَجْلِ دِينِه؟', yay:'أَحْسَنْت! تَرَكَ مَالَهُ وَبَيْتَهُ وَهَاجَر', opts:[
    { e:'🏠', t:'مَالَهُ وَبَيْتَهُ فِي مَكَّة', ok:true },
    { e:'😴', t:'لَمْ يَتْرُكْ شَيْئًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ عَوِّضْنَا خَيْرًا كُلَّمَا تَرَكْنَا شَيْئًا لِأَجْلِك' },

{ id:'market', icon:'🛒', color:'#D4A017', title:'دُلَّنِي عَلَى السُّوق',
  tag:'الْعَمَلُ وَالْكَسْبُ الْحَلَال',
  pages:[
    { emoji:'🤝', text:'حِينَ آخَى النَّبِيُّ ﷺ بَيْنَهُ وَبَيْنَ أَنْصَارِيٍّ كَرِيم، عَرَضَ عَلَيْهِ الْأَنْصَارِيُّ نِصْفَ مَالِه!',
      prompt:'A generous host offering to share his wealth with a newcomer, brotherhood, warm, no faces' },
    { emoji:'🛒', text:'فَشَكَرَهُ عَبْدُ الرَّحْمَنِ وَقَال: بَارَكَ اللهُ لَكَ فِي مَالِك، لَكِنْ دُلَّنِي عَلَى السُّوق!',
      prompt:'A busy marketplace with someone eager to work, seeking honest earning, warm bright, no faces' },
    { emoji:'💪', text:'أَرَادَ أَنْ يَعْمَلَ وَيَكْسِبَ بِيَدِهِ لَا أَنْ يَأْخُذَ مِنْ غَيْرِه، فَبَدَأَ التِّجَارَةَ مِنَ الصِّفْر.',
      prompt:'A merchant starting small and working hard, self-reliance, warm dignified, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الْعِزَّةَ وَالْعَمَل: أَكْسِبُ بِيَدِي وَلَا أَعْتَمِدُ عَلَى غَيْرِي مَا اسْتَطَعْت.',
      prompt:'A child working diligently and proudly, honest work and dignity, warm uplifting' },
  ],
  moral:'الْيَدُ الْعُلْيَا خَيْر: أَعْمَلُ وَأَكْسِبُ بِيَدِي وَلَا أَعْتَمِدُ عَلَى غَيْرِي. 💚',
  game:{ type:'sort', title:'أَيُّهُمَا أَفْضَل؟', bins:['أَعْمَلُ وَأَكْسِب ✅','أَعْتَمِدُ عَلَى غَيْرِي 🚫'], items:[
    { e:'🛒', t:'أَذْهَبُ لِلسُّوقِ وَأَعْمَل', bin:0 },
    { e:'🙏', t:'أَطْلُبُ مِنَ النَّاسِ دَائِمًا', bin:1 },
    { e:'💪', t:'أَكْسِبُ بِيَدِي', bin:0 },
    { e:'😴', t:'أَنْتَظِرُ الْعَطَاء', bin:1 } ] },
  act:{ q:'مَاذَا طَلَبَ عَبْدُ الرَّحْمَنِ مِنْ أَخِيهِ الْأَنْصَارِيّ؟', yay:'أَحْسَنْت! دُلَّنِي عَلَى السُّوقِ لِأَعْمَل', opts:[
    { e:'🛒', t:'دُلَّنِي عَلَى السُّوق', ok:true },
    { e:'💰', t:'أَعْطِنِي نِصْفَ مَالِك' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي كَسْبًا حَلَالًا بِعَمَلِ يَدِي' },

{ id:'blessed', icon:'📈', color:'#16A085', title:'بَرَكَةٌ فِي التِّجَارَة',
  tag:'الصِّدْقُ يَجْلِبُ الرِّزْق',
  pages:[
    { emoji:'📈', text:'بَارَكَ اللهُ فِي تِجَارَةِ عَبْدِ الرَّحْمَنِ لِأَنَّهُ كَانَ صَادِقًا أَمِينًا، فَصَارَ مِنْ أَغْنَى الصَّحَابَة.',
      prompt:'A thriving honest trade with growing blessings, blessing in commerce, warm bright, no faces' },
    { emoji:'🤝', text:'قَال: مَا عَقَدْتُ صَفْقَةً إِلَّا رَبِحْتُ فِيهَا، لِأَنَّهُ لَا يَغِشُّ وَلَا يَكْذِبُ فِي بَيْعِه.',
      prompt:'An honest handshake in a marketplace, honesty in trade, warm trustworthy, no faces' },
    { emoji:'✨', text:'الصِّدْقُ فِي الْبَيْعِ وَالشِّرَاءِ يَجْلِبُ الْبَرَكَة، وَالْغِشُّ يَمْحَقُهَا.',
      prompt:'Honest trade glowing with blessing vs deceit fading, honesty bringing barakah, warm symbolic' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الصِّدْقَ فِي كُلِّ تَعَامُلَاتِي، فَالصِّدْقُ يَجْلِبُ الْخَيْرَ وَالْبَرَكَة.',
      prompt:'A child being honest in dealings with friends, honesty in daily life, warm uplifting' },
  ],
  moral:'الصِّدْقُ فِي التَّعَامُلِ يَجْلِبُ الْبَرَكَة، وَالْغِشُّ يَمْحَقُهَا. 💚',
  game:{ type:'sort', title:'أَيُّهَا يَجْلِبُ الْبَرَكَة؟', bins:['بَرَكَةٌ 💚','مَحْقٌ 🚫'], items:[
    { e:'🤝', t:'الصِّدْقُ فِي الْبَيْع', bin:0 },
    { e:'🤥', t:'الْغِشُّ وَالْكَذِب', bin:1 },
    { e:'⚖️', t:'الْأَمَانَةُ فِي التَّعَامُل', bin:0 },
    { e:'😈', t:'خِدَاعُ الْمُشْتَرِي', bin:1 } ] },
  act:{ q:'لِمَاذَا بُورِكَ فِي تِجَارَةِ عَبْدِ الرَّحْمَن؟', yay:'أَحْسَنْت! لِصِدْقِهِ وَأَمَانَتِه', opts:[
    { e:'🤝', t:'لِأَنَّهُ صَادِقٌ أَمِين', ok:true },
    { e:'😈', t:'لِأَنَّهُ يَغِشّ' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ بَارِكْ لِي فِي رِزْقِي بِالصِّدْقِ وَالْأَمَانَة' },

{ id:'generous', icon:'🎁', color:'#C0392B', title:'الْكَرَمُ الْعَظِيم',
  tag:'أَنْفَقَ أَمْوَالَهُ لِلَّه',
  pages:[
    { emoji:'🎁', text:'كُلَّمَا زَادَ مَالُ عَبْدِ الرَّحْمَن، زَادَ كَرَمُهُ وَعَطَاؤُه! فَلَمْ يَجْعَلِ الْمَالَ فِي قَلْبِه، بَلْ فِي يَدِه.',
      prompt:'A wealthy figure giving abundantly to the needy, wealth used for good, warm bright, no faces' },
    { emoji:'🐪', text:'تَصَدَّقَ مَرَّةً بِقَافِلَةٍ كَامِلَةٍ مِنَ الْبَضَائِعِ (٧٠٠ بَعِير) عَلَى أَهْلِ الْمَدِينَة!',
      prompt:'A great caravan of goods given away in charity, enormous generosity, warm radiant, no faces' },
    { emoji:'💰', text:'وَأَعْتَقَ الْعَبِيد، وَأَنْفَقَ فِي سَبِيلِ الله، وَأَوْصَى بِمَالٍ كَثِيرٍ لِلْفُقَرَاء.',
      prompt:'Coins and goods flowing to those in need, charity in many forms, warm compassionate, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنَّ الْمَالَ نِعْمَةٌ نَشْكُرُهَا بِالْعَطَاء، وَأَنَّ الْكَرِيمَ يُحِبُّهُ اللهُ وَالنَّاس.',
      prompt:'A child sharing wealth joyfully, gratitude through giving, warm uplifting' },
  ],
  moral:'الْمَالُ نِعْمَةٌ نَشْكُرُهَا بِالْعَطَاء، وَالْكَرِيمُ يُحِبُّهُ اللهُ وَالنَّاس. 💚',
  game:{ type:'find', title:'كُنْ كَرِيمًا! اجْمَعْ هَدَايَا الْعَطَاءِ الْخَمْس', target:'🎁', count:5, distractors:['💰','☁️'], size:12 },
  act:{ q:'مَاذَا فَعَلَ عَبْدُ الرَّحْمَنِ كُلَّمَا زَادَ مَالُه؟', yay:'أَحْسَنْت! زَادَ كَرَمُهُ وَعَطَاؤُه', opts:[
    { e:'🎁', t:'زَادَ كَرَمُهُ وَإِنْفَاقُه', ok:true },
    { e:'😤', t:'زَادَ بُخْلُه' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي شَاكِرًا لِنِعْمَتِكَ بِالْعَطَاء' },

{ id:'humble', icon:'😌', color:'#5B4B8A', title:'غَنِيٌّ مُتَوَاضِع',
  tag:'الْمَالُ لَمْ يُغَيِّرْه',
  pages:[
    { emoji:'😌', text:'مَعَ غِنَاهُ الْعَظِيم، بَقِيَ عَبْدُ الرَّحْمَنِ مُتَوَاضِعًا بَسِيطًا، لَا يَتَكَبَّرُ وَلَا يَتَفَاخَر.',
      prompt:'A wealthy yet humble figure dressed simply among people, humility despite riches, warm, no faces' },
    { emoji:'👕', text:'كَانَ لَا يُعْرَفُ بَيْنَ خَدَمِهِ مِنْ شِدَّةِ تَوَاضُعِهِ وَبَسَاطَةِ لِبَاسِه!',
      prompt:'A simply dressed person indistinguishable from workers, extreme humility, warm bright, no faces' },
    { emoji:'😢', text:'وَكَانَ يَبْكِي خَوْفًا أَنْ يَشْغَلَهُ الْمَالُ عَنِ الْآخِرَة، وَيَقُول: أَخَافُ أَنْ تَكُونَ حَسَنَاتِي عُجِّلَتْ لِي.',
      prompt:'A humble figure reflecting tearfully on the Hereafter, fear of worldly distraction, warm serene, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنَّ الْمَالَ لَا يُغَيِّرُ الْقَلْبَ الطَّيِّب، وَأَنَّ التَّوَاضُعَ خُلُقُ الْعُظَمَاء.',
      prompt:'A humble content child regardless of what he has, humility, warm uplifting' },
  ],
  moral:'الْمَالُ لَا يُغَيِّرُ الْقَلْبَ الطَّيِّب، وَالتَّوَاضُعُ خُلُقُ الْعُظَمَاء. 💚',
  game:{ type:'sort', title:'كَيْفَ أَكُونُ إِذَا كَثُرَ مَالِي؟', bins:['تَوَاضُعٌ وَعَطَاء 💚','كِبْرٌ وَبُخْل 🚫'], items:[
    { e:'😌', t:'أَبْقَى مُتَوَاضِعًا', bin:0 },
    { e:'😤', t:'أَتَكَبَّرُ عَلَى النَّاس', bin:1 },
    { e:'🎁', t:'أُنْفِقُ وَأُسَاعِد', bin:0 },
    { e:'🙄', t:'أَتَفَاخَرُ بِمَالِي', bin:1 } ] },
  act:{ q:'كَيْفَ كَانَ عَبْدُ الرَّحْمَنِ مَعَ غِنَاه؟', yay:'أَحْسَنْت! مُتَوَاضِعًا بَسِيطًا كَرِيمًا', opts:[
    { e:'😌', t:'مُتَوَاضِعًا بَسِيطًا', ok:true },
    { e:'👑', t:'مُتَكَبِّرًا مُتَفَاخِرًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ لَا تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّي' },

{ id:'jannah', icon:'🌟', color:'#C9A227', title:'الْمُبَشَّرُ بِالْجَنَّة',
  tag:'تَاجِرُ الْآخِرَة',
  pages:[
    { emoji:'🌟', text:'عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ مِنَ الْعَشَرَةِ الْمُبَشَّرِينَ بِالْجَنَّة، وَأَحَدُ السِّتَّةِ أَهْلِ الشُّورَى.',
      prompt:'A radiant golden star among ten in a warm sky, glad tidings, serene glow' },
    { emoji:'💰', text:'كَانَ أَغْنَى الصَّحَابَة، لَكِنَّهُ جَعَلَ غِنَاهُ طَرِيقًا لِلْجَنَّةِ بِالْعَطَاءِ وَالصَّدَقَة.',
      prompt:'Wealth transformed into a path of light to paradise, riches used for the Hereafter, warm radiant' },
    { emoji:'💚', text:'جَمَعَ الْعَمَلَ وَالْكَسْبَ الْحَلَالَ وَالْكَرَمَ وَالتَّوَاضُع — قُدْوَةٌ لِكُلِّ تَاجِرٍ وَعَامِل.',
      prompt:'A complete role model of honest wealth and generosity, exemplary character, warm bright, no faces' },
    { emoji:'💛', text:'فَأُحِبُّ عَبْدَ الرَّحْمَن، وَأَقْتَدِي بِصِدْقِهِ وَعَمَلِهِ وَكَرَمِهِ وَتَوَاضُعِه.',
      prompt:'A child aspiring toward a bright guiding star, following a role model, uplifting warm' },
  ],
  moral:'أَجْعَلُ رِزْقِي طَرِيقًا لِلْخَيْرِ بِالْكَسْبِ الْحَلَالِ وَالْعَطَاء. 💛',
  game:{ type:'order', title:'رَتِّبْ صِفَاتِ عَبْدِ الرَّحْمَن', items:[
    { e:'🌟', t:'مِنَ السَّابِقِينَ الْمُهَاجِرِين' },
    { e:'🛒', t:'عَمِلَ وَكَسَبَ الْحَلَال' },
    { e:'🎁', t:'أَنْفَقَ مَالَهُ فِي الْخَيْر' },
    { e:'🌟', t:'الْمُبَشَّرُ بِالْجَنَّة' } ] },
  act:{ q:'بِمَ بَشَّرَ النَّبِيُّ ﷺ عَبْدَ الرَّحْمَن؟', yay:'أَحْسَنْت! بَشَّرَهُ بِالْجَنَّة', opts:[
    { e:'🌟', t:'بَشَّرَهُ بِالْجَنَّة', ok:true },
    { e:'💰', t:'بِالْمَالِ فَقَط' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْ رِزْقِي عَوْنًا لِي عَلَى طَاعَتِك' },

]};
