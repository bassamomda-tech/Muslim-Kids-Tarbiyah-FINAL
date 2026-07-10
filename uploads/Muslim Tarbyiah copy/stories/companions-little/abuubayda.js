/* corners/stories/companions-little/abuubayda.js — أبو عبيدة بن الجرّاح للصغار (٣–٦) · ٦ حكايات */
window.COMPANIONS_LITTLE = window.COMPANIONS_LITTLE || {};
window.COMPANIONS_LITTLE.abuubayda = {
  id:'abuubayda', icon:'🌟', color:'#1F8B6E', title:'أَبُو عُبَيْدَةَ بْنُ الْجَرَّاح', tag:'أَمِينُ الْأُمَّة',
  stories:[

{ id:'early', icon:'🌟', color:'#1F8B6E', title:'مِنَ السَّابِقِين',
  tag:'آمَنَ مُبَكِّرًا',
  pages:[
    { emoji:'🌟', text:'أَسْلَمَ أَبُو عُبَيْدَةَ بْنُ الْجَرَّاحِ فِي أَوَّلِ الْإِسْلَام، عَلَى يَدِ أَبِي بَكْرٍ الصِّدِّيق.',
      prompt:'An early believer embracing faith, foremost in Islam, warm dawn light, no face' },
    { emoji:'🌊', text:'وَهَاجَرَ إِلَى الْحَبَشَةِ ثُمَّ إِلَى الْمَدِينَة، وَتَحَمَّلَ الْأَذَى فِي سَبِيلِ دِينِه.',
      prompt:'A migrant enduring hardship for faith, patience in migration, warm dignified, no faces' },
    { emoji:'💚', text:'قَدَّمَ دِينَهُ عَلَى رَاحَتِهِ وَأَهْلِهِ وَبَلَدِه، فَكَانَ مِنَ الْمُقَرَّبِين.',
      prompt:'A believer prioritizing faith over comfort, devotion, warm bright, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ أَنَّ السَّبْقَ إِلَى الْخَيْرِ شَرَف، وَأَنَّ الدِّينَ أَغْلَى مَا نَمْلِك.',
      prompt:'A child eager to be first in goodness, love of faith, warm uplifting' },
  ],
  moral:'السَّبْقُ إِلَى الْخَيْرِ شَرَف، وَالدِّينُ أَغْلَى مَا نَمْلِك. 💛',
  game:{ type:'pairs', title:'صِلْ كُلَّ شَيْءٍ بِأَبِي عُبَيْدَة', pairs:[
    ['🌟 أَسْلَمَ','مُبَكِّرًا'],
    ['🌊 هَاجَرَ','لِأَجْلِ دِينِه'],
    ['💚 قَدَّمَ','دِينَهُ عَلَى كُلِّ شَيْء'] ] },
  act:{ q:'مَتَى أَسْلَمَ أَبُو عُبَيْدَة؟', yay:'أَحْسَنْت! فِي أَوَّلِ الْإِسْلَامِ مِنَ السَّابِقِين', opts:[
    { e:'🌟', t:'فِي أَوَّلِ الْإِسْلَام', ok:true },
    { e:'👴', t:'فِي آخِرِ عُمُرِه' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي مِنَ السَّابِقِينَ إِلَى الْخَيْر' },

{ id:'ameen', icon:'⚖️', color:'#16A085', title:'أَمِينُ هَذِهِ الْأُمَّة',
  tag:'لِكُلِّ أُمَّةٍ أَمِين',
  pages:[
    { emoji:'⚖️', text:'قَالَ النَّبِيُّ ﷺ: إِنَّ لِكُلِّ أُمَّةٍ أَمِينًا، وَأَمِينُ هَذِهِ الْأُمَّةِ أَبُو عُبَيْدَةَ بْنُ الْجَرَّاح!',
      prompt:'A trustworthy man honored for his integrity, the trusted one, warm radiant, no faces' },
    { emoji:'🤝', text:'كَانَ صَادِقًا أَمِينًا لَا يَكْذِبُ وَلَا يَخُون، يَأْتَمِنُهُ النَّاسُ عَلَى كُلِّ شَيْء.',
      prompt:'A person people trust with everything, honesty and reliability, warm bright, no faces' },
    { emoji:'💚', text:'الْأَمَانَةُ أَنْ تَحْفَظَ مَا اؤْتُمِنْتَ عَلَيْه، وَأَنْ تَصْدُقَ فِي كُلِّ قَوْلٍ وَفِعْل.',
      prompt:'A guarded trust kept faithfully, safeguarding what is entrusted, warm symbolic, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ أَنْ أَكُونَ أَمِينًا: أَحْفَظُ الْأَمَانَةَ وَأَصْدُقُ دَائِمًا.',
      prompt:'A child keeping a promise and being trustworthy, trustworthiness, warm uplifting' },
  ],
  moral:'أَكُونُ أَمِينًا: أَحْفَظُ الْأَمَانَةَ وَأَصْدُقُ دَائِمًا. 💛',
  game:{ type:'sort', title:'مَا صِفَاتُ الْأَمِين؟', bins:['أَمَانَة 💚','خِيَانَة 🚫'], items:[
    { e:'🤝', t:'أَحْفَظُ مَا اؤْتُمِنْتُ عَلَيْه', bin:0 },
    { e:'🤥', t:'أَكْذِبُ وَأَخُون', bin:1 },
    { e:'✅', t:'أَصْدُقُ فِي قَوْلِي', bin:0 },
    { e:'👀', t:'آخُذُ مَا لَيْسَ لِي', bin:1 } ] },
  act:{ q:'بِمَ لَقَّبَ النَّبِيُّ ﷺ أَبَا عُبَيْدَة؟', yay:'أَحْسَنْت! أَمِينُ هَذِهِ الْأُمَّة', opts:[
    { e:'⚖️', t:'أَمِينُ الْأُمَّة', ok:true },
    { e:'🏹', t:'فَارِسُ الْأُمَّة' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي أَمِينًا صَادِقًا فِي كُلِّ أُمُورِي' },

{ id:'firm', icon:'💪', color:'#C0392B', title:'الثَّبَاتُ فِي أُحُد',
  tag:'قَدَّمَ الدِّينَ عَلَى كُلِّ شَيْء',
  pages:[
    { emoji:'🛡️', text:'فِي مَعْرَكَةِ أُحُدٍ ثَبَتَ أَبُو عُبَيْدَةَ يُدَافِعُ عَنِ النَّبِيِّ ﷺ حِينَ اشْتَدَّ الْخَطَر.',
      prompt:'A brave defender standing firm to protect his leader, loyalty in danger, warm heroic, no faces' },
    { emoji:'💪', text:'نَزَعَ حَلْقَتَيِ الدِّرْعِ مِنْ وَجْهِ النَّبِيِّ ﷺ بِأَسْنَانِه، فَسَقَطَتْ ثَنِيَّتَاهُ فِدَاءً لَه!',
      prompt:'A devoted companion sacrificing for his leader, selfless sacrifice, warm emotional, no faces' },
    { emoji:'💚', text:'لَمْ يُبَالِ بِنَفْسِهِ فِي سَبِيلِ نُصْرَةِ الْحَقّ، فَكَانَ الثَّبَاتُ عُنْوَانَه.',
      prompt:'A steadfast believer disregarding self for the cause, firmness, warm bright, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ الثَّبَاتَ عِنْدَ الشَّدَائِد، وَأَنْ أُضَحِّيَ مِنْ أَجْلِ مَا أُحِبُّ وَأُومِنُ بِه.',
      prompt:'A child staying firm and brave in hardship, steadfastness, warm uplifting' },
  ],
  moral:'أَثْبُتُ عِنْدَ الشَّدَائِد، وَأُضَحِّي مِنْ أَجْلِ مَا أُومِنُ بِه. 💛',
  game:{ type:'find', title:'ثَبَاتٌ وَفِدَاء! اجْمَعْ دُرُوعَ الْحِمَايَةِ الْخَمْس', target:'🛡️', count:5, distractors:['⚔️','☁️'], size:12 },
  act:{ q:'مَاذَا فَعَلَ أَبُو عُبَيْدَةَ فِي أُحُد؟', yay:'أَحْسَنْت! ثَبَتَ وَضَحَّى لِيَحْمِيَ النَّبِيَّ ﷺ', opts:[
    { e:'🛡️', t:'ثَبَتَ وَدَافَعَ عَنِ النَّبِيِّ ﷺ', ok:true },
    { e:'🏃', t:'هَرَبَ خَائِفًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ثَبِّتْنِي عِنْدَ الشَّدَائِدِ عَلَى الْحَقّ' },

{ id:'leader', icon:'🕌', color:'#2980B9', title:'الْقَائِدُ الْمُتَوَاضِع',
  tag:'قِيَادَةٌ بِلَا كِبْر',
  pages:[
    { emoji:'🕌', text:'جَعَلَهُ عُمَرُ قَائِدًا لِجَيْشِ الْمُسْلِمِينَ فِي الشَّام، فَكَانَ قَائِدًا حَكِيمًا مُتَوَاضِعًا مَحْبُوبًا.',
      prompt:'A humble beloved commander leading with wisdom, gentle leadership, warm bright, no faces' },
    { emoji:'👑', text:'وَحِينَ زَارَهُ عُمَرُ وَجَدَهُ يَعِيشُ بَسِيطًا كَأَحَدِ جُنُودِه، لَا فَرْقَ بَيْنَهُ وَبَيْنَهُم!',
      prompt:'A leader living simply like his soldiers, humility in authority, warm, no faces' },
    { emoji:'💚', text:'لَمْ يَتَكَبَّرْ بِمَنْصِبِه، بَلْ خَدَمَ النَّاسَ وَعَاشَ مِثْلَهُم، فَأَحَبُّوهُ حُبًّا عَظِيمًا.',
      prompt:'A servant-leader loved by his people, humble service, warm radiant, no faces' },
    { emoji:'💛', text:'فَأَتَعَلَّمُ أَنَّ الْقَائِدَ الْحَقِيقِيَّ يَخْدُمُ وَلَا يَتَكَبَّر، وَيَتَوَاضَعُ فَيُحِبُّهُ النَّاس.',
      prompt:'A child leading by serving humbly, humble leadership, warm uplifting' },
  ],
  moral:'الْقَائِدُ الْحَقِيقِيُّ يَخْدُمُ وَلَا يَتَكَبَّر. 💛',
  game:{ type:'sort', title:'كَيْفَ يَكُونُ الْقَائِدُ الْمَحْبُوب؟', bins:['قِيَادَةٌ طَيِّبَة 💚','قِيَادَةٌ سَيِّئَة 🚫'], items:[
    { e:'🤝', t:'يَخْدُمُ النَّاسَ وَيَتَوَاضَع', bin:0 },
    { e:'😤', t:'يَتَكَبَّرُ عَلَى مَنْ مَعَه', bin:1 },
    { e:'😌', t:'يَعِيشُ بَسِيطًا مِثْلَهُم', bin:0 },
    { e:'👑', t:'يَطْلُبُ التَّعْظِيمَ لِنَفْسِه', bin:1 } ] },
  act:{ q:'كَيْفَ كَانَ أَبُو عُبَيْدَةَ قَائِدًا؟', yay:'أَحْسَنْت! مُتَوَاضِعًا يَعِيشُ كَجُنُودِه', opts:[
    { e:'😌', t:'مُتَوَاضِعًا يَخْدُمُ النَّاس', ok:true },
    { e:'👑', t:'مُتَكَبِّرًا مُتَعَالِيًا' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ ارْزُقْنِي التَّوَاضُعَ وَخِدْمَةَ النَّاس' },

{ id:'plague', icon:'🤲', color:'#5B4B8A', title:'الثَّبَاتُ فِي الطَّاعُون',
  tag:'قَدَرُ اللهِ وَحُسْنُ الظَّنّ',
  pages:[
    { emoji:'🏜️', text:'انْتَشَرَ الطَّاعُونُ (مَرَضٌ شَدِيد) فِي الشَّام، وَأَبُو عُبَيْدَةَ قَائِدُ الْجَيْش.',
      prompt:'A difficult time of trial in the land, hardship and patience, warm muted, no faces' },
    { emoji:'💪', text:'ثَبَتَ مَعَ النَّاسِ وَلَمْ يَتْرُكْهُم، رَاضِيًا بِقَدَرِ الله، مُطَمْئِنًّا لَا يَخَاف.',
      prompt:'A steadfast leader staying with his people in hardship, loyalty and courage, warm, no faces' },
    { emoji:'🤲', text:'قَالَ: اللَّهُمَّ ارْزُقْ آلَ أَبِي عُبَيْدَةَ نَصِيبَهُم مِنْ رَحْمَتِك! فَكَانَ رَاضِيًا بِلِقَاءِ رَبِّه.',
      prompt:'Hands raised in acceptance of God\u2019s decree, contentment with fate, warm serene, no faces' },
    { emoji:'💚', text:'فَأَتَعَلَّمُ الرِّضَا بِقَدَرِ الله، وَحُسْنَ الظَّنِّ بِه، وَعَدَمَ تَرْكِ إِخْوَانِي وَقْتَ الشِّدَّة.',
      prompt:'A child accepting God\u2019s will with a calm heart, contentment, warm uplifting' },
  ],
  moral:'أَرْضَى بِقَدَرِ الله، وَأُحْسِنُ الظَّنَّ بِه، وَلَا أَتْرُكُ إِخْوَانِي. 💚',
  game:{ type:'find', title:'حُسْنُ الظَّنِّ بِالله! اجْمَعِ الْقُلُوبَ الرَّاضِيَةَ الْخَمْس', target:'💚', count:5, distractors:['☁️','🌧️'], size:12 },
  act:{ q:'مَاذَا فَعَلَ أَبُو عُبَيْدَةَ وَقْتَ الطَّاعُون؟', yay:'أَحْسَنْت! ثَبَتَ مَعَ النَّاسِ رَاضِيًا بِقَدَرِ الله', opts:[
    { e:'💪', t:'ثَبَتَ مَعَ النَّاسِ وَلَمْ يَتْرُكْهُم', ok:true },
    { e:'🏃', t:'هَرَبَ وَحْدَه' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ رَضِّنِي بِقَضَائِكَ وَأَحْسِنْ ظَنِّي بِك' },

{ id:'jannah', icon:'🌟', color:'#C9A227', title:'الْمُبَشَّرُ بِالْجَنَّة',
  tag:'خَاتِمَةُ الْعَشَرَة',
  pages:[
    { emoji:'🌟', text:'أَبُو عُبَيْدَةَ بْنُ الْجَرَّاحِ مِنَ الْعَشَرَةِ الْمُبَشَّرِينَ بِالْجَنَّة، أَمِينُ هَذِهِ الْأُمَّة.',
      prompt:'A radiant golden star among ten in a warm sky, glad tidings, serene glow' },
    { emoji:'💚', text:'جَمَعَ الْأَمَانَةَ وَالثَّبَاتَ وَالتَّوَاضُعَ وَالرِّضَا بِقَدَرِ الله.',
      prompt:'A complete role model of trust and humility, exemplary life, warm bright, no faces' },
    { emoji:'💛', text:'كَانَ قُدْوَةً فِي الصِّدْقِ وَالْأَمَانَةِ وَخِدْمَةِ النَّاسِ وَالتَّضْحِيَة.',
      prompt:'A guiding example of integrity and service, role model, warm radiant, no faces' },
    { emoji:'🌟', text:'فَأُحِبُّ أَبَا عُبَيْدَة، وَأَقْتَدِي بِأَمَانَتِهِ وَتَوَاضُعِهِ وَثَبَاتِه.',
      prompt:'A child aspiring toward a bright guiding star, following a role model, uplifting warm' },
  ],
  moral:'أَجْمَعُ الْأَمَانَةَ وَالتَّوَاضُعَ وَالثَّبَاتَ مِثْلَ أَبِي عُبَيْدَة. 💛',
  game:{ type:'order', title:'رَتِّبْ صِفَاتِ أَبِي عُبَيْدَة', items:[
    { e:'🌟', t:'مِنَ السَّابِقِينَ الْأَوَّلِين' },
    { e:'⚖️', t:'أَمِينُ الْأُمَّة' },
    { e:'🕌', t:'الْقَائِدُ الْمُتَوَاضِع' },
    { e:'🌟', t:'الْمُبَشَّرُ بِالْجَنَّة' } ] },
  act:{ q:'بِمَ بَشَّرَ النَّبِيُّ ﷺ أَبَا عُبَيْدَة؟', yay:'أَحْسَنْت! بَشَّرَهُ بِالْجَنَّة', opts:[
    { e:'🌟', t:'بَشَّرَهُ بِالْجَنَّة', ok:true },
    { e:'💰', t:'بِالْمَالِ فَقَط' },
    { e:'🤷', t:'لَا أَعْرِف' } ] },
  dua:'اللَّهُمَّ اجْعَلْنِي أَمِينًا مُتَوَاضِعًا ثَابِتًا عَلَى دِينِك' },

]};
