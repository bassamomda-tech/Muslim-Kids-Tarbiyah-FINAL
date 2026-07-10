/* corners/stories/companions-little/zubayr.js — الزبير بن العوّام للصغار (٣–٦) · ٦ حكايات */
window.COMPANIONS_LITTLE = window.COMPANIONS_LITTLE || {};
window.COMPANIONS_LITTLE.zubayr = {
  id:'zubayr', icon:'⚔️', color:'#2980B9', title:'الزُّبَيْرُ بْنُ الْعَوَّام', tag:'حَوَارِيُّ النَّبِيِّ ﷺ',
  stories:[

{ id:'young', icon:'👦', color:'#2980B9', title:'أَسْلَمَ صَغِيرًا',
  tag:'مِنْ أَوَائِلِ الْمُؤْمِنِين',
  pages:[
    { emoji:'👦', text:'أَسْلَمَ الزُّبَيْرُ وَهُوَ صَغِيرٌ فِي الْخَامِسَةَ عَشْرَة، مِنْ أَوَائِلِ مَنْ آمَنَ بِالنَّبِيِّ ﷺ.',
      prompt:'A brave young teen with a glowing heart in old Makkah, early faith, warm, no face detail' },
    { emoji:'💪', text:'وَهُوَ ابْنُ عَمَّةِ النَّبِيِّ ﷺ (صَفِيَّة)، وَكَانَ شُجَاعًا قَوِيًّا مُنْذُ صِغَرِه.',
      prompt:'A courageous youth standing tall, bravery from youth, warm strong, no faces' },
    { emoji:'⚔️', text:'يُرْوَى أَنَّهُ أَوَّلُ مَنْ سَلَّ سَيْفَهُ فِي سَبِيلِ الله، دِفَاعًا عَنِ النَّبِيِّ ﷺ.',
      prompt:'A drawn sword of light raised in defense, first to defend, warm dignified, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنَّ الصَّغِيرَ يَكُونُ بَطَلًا شُجَاعًا يَنْصُرُ الْحَقَّ مُنْذُ صِغَرِه.',
      prompt:'A brave young child standing for good, heroism in youth, warm uplifting' },
  ],
  moral:'الصَّغِيرُ يَكُونُ بَطَلًا: أَنْصُرُ الْحَقَّ وَأَكُونُ شُجَاعًا مُنْذُ صِغَرِي. 💚',
  game:{ type:'pairs', title:'صِلْ كُلَّ شَيْءٍ بِالزُّبَيْر', pairs:[
    ['👦 أَسْلَمَ','وَهُوَ صَغِير'],
    ['⚔️ أَوَّلُ مَنْ سَلَّ سَيْفَه','فِي سَبِيلِ الله'],
    ['💪 ابْنُ عَمَّةِ النَّبِيّ','صَفِيَّة'] ] },
  act:{ q:'مَتَى أَسْلَمَ الزُّبَيْر؟', yay:'أَحْسَنْت! صَغِيرًا مِنَ الْأَوَائِل', opts:[
    { e:'👦', t:'صَغِيرًا مِنَ السَّابِقِين', ok:true },
    { e:'👴', t:'شَيْخًا كَبِيرًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي بَطَلًا لِلْحَقِّ مُنْذُ صِغَرِي' },

{ id:'hawari', icon:'⚔️', color:'#5B4B8A', title:'حَوَارِيُّ النَّبِيِّ ﷺ',
  tag:'نَاصِرُهُ الْخَاصّ',
  pages:[
    { emoji:'⚔️', text:'قَالَ النَّبِيُّ ﷺ: إِنَّ لِكُلِّ نَبِيٍّ حَوَارِيًّا (نَاصِرًا خَاصًّا)، وَحَوَارِيِّي الزُّبَيْر!',
      prompt:'A loyal special helper honored with light, the special supporter, warm reverent, no faces' },
    { emoji:'💚', text:'كَانَ الزُّبَيْرُ دَائِمًا مَعَ النَّبِيِّ ﷺ، يَنْصُرُهُ وَيُدَافِعُ عَنْهُ فِي كُلِّ مَوْقِف.',
      prompt:'A faithful defender always at the side of the one he supports, steadfast loyalty, warm, no faces' },
    { emoji:'🏇', text:'حِينَ سَمِعَ إِشَاعَةً بِخَطَرٍ عَلَى النَّبِيِّ ﷺ، خَرَجَ فَوْرًا بِسَيْفِهِ لِيَنْصُرَه، قَبْلَ أَنْ يَتَأَكَّد!',
      prompt:'A rider rushing out immediately to help at the first sign of danger, instant loyalty, warm, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ الْوَلَاءَ لِلْحَقِّ وَأَهْلِه: أَكُونُ نَاصِرًا سَبَّاقًا لِإِخْوَانِي.',
      prompt:'A child quickly helping a friend in need, quick loyalty, warm uplifting' },
  ],
  moral:'أَكُونُ نَاصِرًا سَبَّاقًا لِلْحَقِّ وَأَهْلِه كَحَوَارِيِّ النَّبِيِّ ﷺ. 💛',
  game:{ type:'find', title:'كُنْ نَاصِرًا سَبَّاقًا! اجْمَعْ رَايَاتِ النُّصْرَةِ الْخَمْس', target:'🚩', count:5, distractors:['☁️','🪨'], size:12 },
  act:{ q:'بِمَ لَقَّبَ النَّبِيُّ ﷺ الزُّبَيْر؟', yay:'أَحْسَنْت! حَوَارِيَّهُ — نَاصِرَهُ الْخَاصّ', opts:[
    { e:'⚔️', t:'حَوَارِيَّ النَّبِيِّ ﷺ', ok:true },
    { e:'💰', t:'أَغْنَى النَّاس' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي نَاصِرًا لِلْحَقِّ وَأَهْلِه' },

{ id:'brave', icon:'🦁', color:'#C0392B', title:'شُجَاعٌ فِي الْمَعَارِك',
  tag:'ثَبَاتٌ لَا يَعْرِفُ الْخَوْف',
  pages:[
    { emoji:'🦁', text:'شَهِدَ الزُّبَيْرُ بَدْرًا وَأُحُدًا وَكُلَّ الْغَزَوَاتِ مَعَ النَّبِيِّ ﷺ، وَكَانَ مِنْ أَشْجَعِ الْفُرْسَان.',
      prompt:'A valiant knight-like figure firm in the field, great bravery, warm heroic, no faces' },
    { emoji:'💪', text:'كَانَتْ فِي جَسَدِهِ جِرَاحٌ كَثِيرَةٌ مِنَ الْمَعَارِك، شَاهِدَةٌ عَلَى ثَبَاتِهِ فِي نُصْرَةِ الْحَقّ.',
      prompt:'Marks of valor from many battles shown honorably, courage and sacrifice, warm dignified, no gore, no faces' },
    { emoji:'💚', text:'لَكِنَّ شَجَاعَتَهُ كَانَتْ لِلَّهِ وَفِي الْحَقّ، لَا لِلتَّفَاخُرِ وَلَا لِلظُّلْم.',
      prompt:'Courage devoted to a righteous cause, bravery for Allah, warm balanced, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ الشَّجَاعَةَ فِي الْحَقّ، وَأَنَّ الْبَطَلَ يَثْبُتُ وَلَا يَخَافُ إِلَّا الله.',
      prompt:'A brave child standing firm for right, courage in truth, warm uplifting' },
  ],
  moral:'الشَّجَاعَةُ لِلَّهِ وَفِي الْحَقّ، وَالْبَطَلُ يَثْبُتُ وَلَا يَخَافُ إِلَّا الله. 💛',
  game:{ type:'sort', title:'أَيُّهَا شَجَاعَةٌ صَحِيحَة؟', bins:['شَجَاعَةٌ لِلَّه ✅','تَفَاخُرٌ أَوْ ظُلْم 🚫'], items:[
    { e:'🦁', t:'أُدَافِعُ عَنِ الْحَقّ', bin:0 },
    { e:'😤', t:'أَتَفَاخَرُ بِقُوَّتِي', bin:1 },
    { e:'🛡️', t:'أَحْمِي الْمَظْلُوم', bin:0 },
    { e:'👊', t:'أَظْلِمُ الضَّعِيف', bin:1 } ] },
  act:{ q:'لِمَاذَا كَانَتْ شَجَاعَةُ الزُّبَيْرِ عَظِيمَة؟', yay:'أَحْسَنْت! لِأَنَّهَا كَانَتْ لِلَّهِ وَفِي الْحَقّ', opts:[
    { e:'💚', t:'لِأَنَّهَا لِلَّهِ وَفِي الْحَقّ', ok:true },
    { e:'🙄', t:'لِلتَّفَاخُر' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الشَّجَاعَةَ فِي الْحَقّ خَالِصَةً لَك' },

{ id:'trust', icon:'🤲', color:'#16A085', title:'ثِقَتُهُ بِالله',
  tag:'أَوْصَى أَوْلَادَهُ بِالتَّوَكُّل',
  pages:[
    { emoji:'🤲', text:'كَانَ الزُّبَيْرُ وَاثِقًا بِالله، وَأَوْصَى أَوْلَادَهُ أَنْ يَجْعَلُوا اللهَ لَهُم فِي كُلِّ أَمْر.',
      prompt:'A figure entrusting his affairs to Allah with raised hands, trust in Allah, warm serene, no faces' },
    { emoji:'💰', text:'قَال: إِذَا احْتَجْتُم فَاطْلُبُوا مِنْ مَوْلَايَ — يَعْنِي الله! فَاللهُ خَيْرُ حَافِظٍ وَمُعِين.',
      prompt:'Reliance on Allah as the best guardian, complete trust, warm reassuring, no faces' },
    { emoji:'🌟', text:'فَحَفِظَ اللهُ أَوْلَادَهُ وَبَارَكَ لَهُم، لِأَنَّ مَنْ تَوَكَّلَ عَلَى اللهِ كَفَاه.',
      prompt:'A blessed protected family under warm light, trust rewarded, warm bright, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ التَّوَكُّل: أَعْمَلُ وَأَجْتَهِد، ثُمَّ أَثِقُ بِأَنَّ اللهَ خَيْرُ مُعِين.',
      prompt:'A child working then trusting Allah calmly, effort and trust, warm uplifting' },
  ],
  moral:'أَعْمَلُ وَأَجْتَهِد، ثُمَّ أَتَوَكَّلُ عَلَى اللهِ خَيْرِ حَافِظٍ وَمُعِين. 💚',
  game:{ type:'sort', title:'مَاذَا يَفْعَلُ الْمُتَوَكِّلُ الذَّكِيّ؟', bins:['تَوَكُّلٌ صَحِيح ✅','خَطَأ 🚫'], items:[
    { e:'💪', t:'أَعْمَلُ ثُمَّ أَتَوَكَّل', bin:0 },
    { e:'😴', t:'أَتْرُكُ الْعَمَلَ وَأَنْتَظِر', bin:1 },
    { e:'🤲', t:'أَثِقُ بِأَنَّ اللهَ يَكْفِينِي', bin:0 },
    { e:'😰', t:'أَقْلَقُ وَلَا أَثِقُ بِالله', bin:1 } ] },
  act:{ q:'بِمَ أَوْصَى الزُّبَيْرُ أَوْلَادَه؟', yay:'أَحْسَنْت! أَنْ يَتَوَكَّلُوا عَلَى الله', opts:[
    { e:'🤲', t:'أَنْ يَجْعَلُوا اللهَ حَافِظَهُم', ok:true },
    { e:'💰', t:'أَنْ يَجْمَعُوا الْمَال' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'حَسْبِيَ اللهُ وَنِعْمَ الْوَكِيل' },

{ id:'generous', icon:'🎁', color:'#D4A017', title:'كَرِيمٌ رَغْمَ الشَّجَاعَة',
  tag:'الْجَمْعُ بَيْنَ الْأَخْلَاق',
  pages:[
    { emoji:'🎁', text:'مَعَ شَجَاعَتِه، كَانَ الزُّبَيْرُ كَرِيمًا يُنْفِقُ فِي سَبِيلِ الله، وَيُسَاعِدُ الْمُحْتَاجِين.',
      prompt:'A brave figure also generous to the needy, courage with generosity, warm bright, no faces' },
    { emoji:'💰', text:'كَانَ تَاجِرًا نَاجِحًا، لَكِنَّهُ لَا يُحِبُّ الدُّنْيَا، بَلْ يُنْفِقُ مَالَهُ فِي الْخَيْر.',
      prompt:'A successful merchant sharing wealth for good, wealth used well, warm, no faces' },
    { emoji:'💛', text:'الْبَطَلُ الْحَقُّ يَجْمَعُ الْأَخْلَاقَ الْجَمِيلَة: الشَّجَاعَةَ وَالْكَرَمَ وَالتَّوَكُّلَ وَالتَّوَاضُع.',
      prompt:'Virtues combined in a balanced hero, complete character, warm serene, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ أَنْ أَكُونَ قَوِيًّا وَكَرِيمًا فِي الْوَقْتِ نَفْسِه، أَجْمَعُ كُلَّ خُلُقٍ جَمِيل.',
      prompt:'A child both strong and generous, well-rounded good character, warm uplifting' },
  ],
  moral:'الْبَطَلُ يَجْمَعُ الْأَخْلَاقَ: الشَّجَاعَةَ وَالْكَرَمَ وَالتَّوَكُّلَ وَالتَّوَاضُع. 💚',
  game:{ type:'sort', title:'أَيُّهَا خُلُقٌ جَمِيل؟', bins:['خُلُقٌ جَمِيل 💚','خُلُقٌ سَيِّئ 🚫'], items:[
    { e:'🎁', t:'الْكَرَمُ وَالْعَطَاء', bin:0 },
    { e:'🦁', t:'الشَّجَاعَةُ فِي الْحَقّ', bin:0 },
    { e:'😤', t:'الْبُخْلُ وَالْكِبْر', bin:1 },
    { e:'🙄', t:'التَّفَاخُرُ وَالطَّمَع', bin:1 } ] },
  act:{ q:'كَيْفَ كَانَ الزُّبَيْرُ مَعَ شَجَاعَتِه؟', yay:'أَحْسَنْت! كَرِيمًا مُنْفِقًا فِي الْخَيْر', opts:[
    { e:'🎁', t:'كَرِيمًا يُنْفِقُ فِي الْخَيْر', ok:true },
    { e:'😤', t:'بَخِيلًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْمَعْ لِي الْأَخْلَاقَ الْجَمِيلَة' },

{ id:'jannah', icon:'🌟', color:'#C9A227', title:'الْمُبَشَّرُ بِالْجَنَّة',
  tag:'بَطَلٌ مُبَشَّرٌ بِالْجَنَّة',
  pages:[
    { emoji:'🌟', text:'الزُّبَيْرُ مِنَ الْعَشَرَةِ الْمُبَشَّرِينَ بِالْجَنَّة، وَأَحَدُ السِّتَّةِ الَّذِينَ اخْتَارَهُمْ عُمَرُ لِلشُّورَى.',
      prompt:'A radiant golden star among ten in a warm sky, glad tidings, serene glow' },
    { emoji:'💞', text:'أَحَبَّهُ النَّبِيُّ ﷺ وَقَال: الزُّبَيْرُ حَوَارِيِّي — فَنَالَ مَنْزِلَةً عَظِيمَة.',
      prompt:'A beloved honored companion with warm light, love and honor, warm tender, no faces' },
    { emoji:'💚', text:'جَمَعَ الزُّبَيْرُ الشَّجَاعَةَ وَالْوَلَاءَ وَالْكَرَمَ وَالتَّوَكُّل — قُدْوَةٌ لِكُلِّ بَطَل.',
      prompt:'A complete role model glowing with virtues, exemplary hero, warm bright, no faces' },
    { emoji:'💛', text:'فَأُحِبُّ الزُّبَيْر، وَأَقْتَدِي بِشَجَاعَتِهِ وَوَلَائِهِ لِلْحَقّ.',
      prompt:'A child aspiring toward a bright guiding star, following a role model, uplifting warm' },
  ],
  moral:'أُحِبُّ الزُّبَيْر، وَأَقْتَدِي بِشَجَاعَتِهِ وَوَلَائِهِ لِلْحَقّ. 💛',
  game:{ type:'order', title:'رَتِّبْ صِفَاتِ الزُّبَيْر', items:[
    { e:'👦', t:'أَسْلَمَ صَغِيرًا مِنَ السَّابِقِين' },
    { e:'⚔️', t:'حَوَارِيُّ النَّبِيِّ ﷺ' },
    { e:'🦁', t:'شُجَاعٌ فِي كُلِّ الْغَزَوَات' },
    { e:'🌟', t:'الْمُبَشَّرُ بِالْجَنَّة' } ] },
  act:{ q:'بِمَ بَشَّرَ النَّبِيُّ ﷺ الزُّبَيْر؟', yay:'أَحْسَنْت! بَشَّرَهُ بِالْجَنَّة', opts:[
    { e:'🌟', t:'بَشَّرَهُ بِالْجَنَّة', ok:true },
    { e:'💰', t:'بِالْمَال' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي الْجَنَّةَ وَالشَّجَاعَةَ فِي الْحَقّ' },

]};
