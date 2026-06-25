/* ═══════════════════════════════════════════════════════════════
   بيت الحِلم  ·  House of Forbearance
   ─────────────────────────────────────────────────────────────── */

window.HOUSES.forbearance = {

  tagline: {
    ar: 'كَظمُ الغَيظِ والعَفوُ عَنِ النّاس',
    en: 'Restraining anger and pardoning people',
  },

  /* ───── ROOM 1: Knowledge ───── */
  knowledge: {
    didYouKnow: {
      title: { ar:'هل تَعلمُ أنَّ الحِلمَ يُدخِلُكَ الجَنَّةَ؟', en:'Did you know forbearance leads to Paradise?' },
      sub:   { ar:'«مَن كَظَمَ غَيظاً وهو قادرٌ على أن يُنفِذَه، دَعاهُ اللهُ على رُؤوسِ الخَلائِقِ حتّى يُخَيِّرَهُ مِن أيِّ الحُورِ شاء»', en:'"Whoever restrains anger while able to act on it, Allah will call him before all creatures to choose whichever houri he wishes"' },
    },
    definition: {
      linguistic: {
        ar: 'الحِلمُ ضِدُّ الطَّيشِ والعَجَلة. وأَصلُهُ «الأَناةُ» — لأنَّ الحَليمَ يَتَمَهَّلُ ولا يَنتَقِمُ عِندَ الغَضَب!',
        en: 'The opposite of rashness and haste. Its root means "pause" — because the forbearing person delays and does not retaliate when angry.',
      },
      terminology: {
        ar: 'هو <b>ضَبطُ النَّفسِ والطَّبعِ عندَ هَيَجانِ الغَضَب</b> — تَكظِمُ غَيظَكَ وتَعفو مع القُدرَةِ على الانتِقام.',
        en: 'Controlling yourself and your nature when anger surges — restraining your rage and pardoning despite being able to retaliate.',
      },
      simile: {
        ar: 'الحِلمُ كالبَحرِ العَميق: يَبتَلِعُ الأَمواجَ الهائِجةَ ويَبقى ساكِناً هادِئاً!',
        en: 'Forbearance is like the deep ocean: it swallows raging waves and remains calm and still!',
      },
    },
    forms: [
      { icon:'🧘', color:'#D4AC0D', title:{ar:'كَظمُ الغَيظ',  en:'Restraining anger'},     body:{ar:'تَحبِسُ غَضَبَكَ في صَدرِكَ ولا تُظهِرُه.',           en:'You hold your anger inside and do not show it.'} },
      { icon:'🤝', color:'#27AE60', title:{ar:'العَفوُ عَنِ المُسيء',en:'Pardoning wrongdoers'},    body:{ar:'تَسامِحُ مَن أَساءَ إليكَ مع القُدرَةِ على الرَّد.', en:'You forgive who wrongs you despite having power to respond.'} },
      { icon:'🕊️', color:'#1ABC9C', title:{ar:'السَّكينَةُ عِندَ الاستِفزاز',en:'Calmness when provoked'},   body:{ar:'تَبقى هادِئاً حينَ يُحاوِلُ أَحَدٌ إِغضابَك.', en:'You stay calm when someone tries to anger you.'} },
      { icon:'💬', color:'#2980B9', title:{ar:'الرَّدُّ بِاللِّينِ',   en:'Gentle response'},   body:{ar:'تُجيبُ بِكَلامٍ لَيِّنٍ على الكَلامِ القاسي.',   en:'You answer harsh words with gentle ones.'} },
      { icon:'🛡️', color:'#8E44AD', title:{ar:'الصَّفحُ الجَميل',   en:'Beautiful pardon'},   body:{ar:'تَعفو وتَنسى ولا تُذَكِّرُ بالخَطأ.',   en:'You pardon, forget, and never remind of the mistake.'} },
      { icon:'🌟', color:'#E67E22', title:{ar:'الإِحسانُ إلى المُسيء',   en:'Kindness to wrongdoers'},     body:{ar:'تُحسِنُ إلى مَن أَساءَ إِليك.',             en:'You are kind to those who wronged you.'} },
    ],
    ranking: [
      { color:'#D4AC0D', title:{ar:'كَظمُ الغَيظ',  en:'Restraining rage'},  body:{ar:'تَحبِسُ الغَضَبَ ولا تُنَفِّذُه',     en:'You hold back anger and do not act on it'} },
      { color:'#1ABC9C', title:{ar:'العَفوُ والصَّفح', en:'Pardoning and overlooking'}, body:{ar:'تَعفو في قَلبِكَ وتَتَجاوَز',         en:'You forgive in your heart and overlook'} },
      { color:'#27AE60', title:{ar:'الإِحسانُ بَعدَ العَفو',en:'Kindness after pardon'},  body:{ar:'تُقابِلُ الإِساءَةَ بِالإِحسان',    en:'You meet harm with goodness'} },
    ],
    verses: [
      { text: { ar:'﴿ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ ﴾',
                en:'"Those who restrain anger and pardon people — Allah loves the doers of good."' },
        ref: { ar:'[سورة آل عمران: ١٣٤]', en:'[Surah Aal-Imran: 134]' } },
      { text: { ar:'﴿ وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ ﴾',
                en:'"Whoever is patient and forgives — that is a matter of great resolve."' },
        ref: { ar:'[سورة الشورى: ٤٣]', en:'[Surah Ash-Shura: 43]' } },
      { text: { ar:'﴿ خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ ﴾',
                en:'"Take what is given freely, enjoin good, and turn away from the ignorant."' },
        ref: { ar:'[سورة الأعراف: ١٩٩]', en:'[Surah Al-A\'raf: 199]' } },
    ],
    hadiths: [
      { text: { ar:'«مَن كَظَمَ غَيظاً وهو قادِرٌ على أن يُنفِذَه، دَعاهُ اللهُ على رُؤوسِ الخَلائِقِ يومَ القِيامَة حتّى يُخَيِّرَهُ مِن أيِّ الحُورِ شاء»',
                en:'"Whoever restrains rage while able to carry it out, Allah will call him before all creation on the Day of Resurrection to choose whichever houri he wishes."' },
        source: { ar:'[رواه أبو داود والترمذي]', en:'[Abu Dawud & Tirmidhi]' } },
      { text: { ar:'«لَيسَ الشَّديدُ بِالصُّرَعَة، إنَّما الشَّديدُ الَّذي يَملِكُ نَفسَهُ عِندَ الغَضَب»',
                en:'"The strong one is not the wrestler — the strong one is who controls himself when angry."' },
        source: { ar:'[رواه البخاري ومسلم]', en:'[Bukhari & Muslim]' } },
    ],
    benefits: [
      { ar:'🌸 يُكسِبُكَ محبَّةَ اللهِ ورِضوانَه',  en:'🌸 Earns you Allah’s love and pleasure' },
      { ar:'💛 يُدخِلُكَ الجَنَّةَ ويُخَيِّرُكَ مِن الحُور', en:'💛 Admits you to Paradise and lets you choose from the houris' },
      { ar:'🤝 يُحَوِّلُ الأَعداءَ إلى أَصدِقاء',   en:'🤝 Turns enemies into friends' },
      { ar:'🛡️ يَحفَظُكَ مِن الوُقوعِ في الذُّنوب',         en:'🛡️ Protects you from falling into sin' },
      { ar:'🌟 يَرفَعُ قَدرَكَ عندَ اللهِ والنّاس', en:'🌟 Raises your status with Allah and people' },
    ],
    obstacles: [
      { ar:'الاندِفاعُ والعَجَلَة',     en:'Impulsiveness and haste' },
      { ar:'حُبُّ الانتِقامِ والتَّشَفّي',     en:'Love of revenge and retaliation' },
      { ar:'الكِبرُ والغُرور',      en:'Arrogance and pride' },
      { ar:'ضَعفُ الإِيمانِ بِالجَزاء',           en:'Weak faith in divine reward' },
    ],
    acquireMeans: [
      { ar:'تَذَكُّرُ عَفوِ اللهِ عَنكَ', en:'Remembering Allah’s pardon for you' },
      { ar:'التَّدَرُّبُ على كَظمِ الغَيظِ في المَواقِفِ الصَّغيرة',                  en:'Practicing restraint in small situations' },
      { ar:'مُصاحَبَةُ الحُلَماء',             en:'Keeping company with the forbearing' },
      { ar:'الدُّعاءُ بِأن يَرزُقَكَ اللهُ الحِلم', en:'Supplicating that Allah grants you forbearance' },
    ],
  },

  /* ───── ROOM 2: Stories — paginated, interactive ─────
     Sources: Sahih al-Bukhari for the Prophet's forbearance in Taif · 
     Sahih al-Bukhari & Muslim for the Bedouin story · IslamWeb & historical books for Mu'awiyah & al-Ahnaf ·
     All stories verified from the five approved sources. */
  stories: [
    /* STORY 1 — Prophet's forbearance in Taif */
    {
      icon:'🌙', scene:'desert', character:'😢',
      title: { ar:'«بَل أَرجو أن يُخرِجَ اللهُ مِن أَصلابِهم...»', en:'"Rather, I hope Allah brings from their loins…"' },
      pages: [
        { scene:'desert', character:'😢',
          text:{ ar:'خَرَجَ النَّبيُّ ﷺ إلى الطّائِف يَطلُبُ النُّصرَةَ بَعدَما اشتَدَّ أَذى قُرَيش. <b>ذَهَبَ إلى ثَلاثَةٍ مِن سادَةِ ثَقيف</b> يَدعوهُم إلى الإِسلام ويَطلُبُ حِمايَتَهُم.<br><br>لَكِنَّهُم رَفَضوا بِقُبحٍ شَديد! قالَ أَحَدُهُم: «أَنا أَمرُطُ ثِيابَ الكَعبَةِ إن كانَ اللهُ أَرسَلَك!» وقالَ الثّاني: «أَما وَجَدَ اللهُ أَحَداً غَيرَك؟» وقالَ الثّالِث: «لا أُكَلِّمُكَ أَبَداً!»',
                 en:'The Prophet ﷺ went to Taif seeking support after Quraysh’s persecution intensified. <b>He approached three leaders of Thaqif</b>, inviting them to Islam and asking for protection.<br><br>But they refused harshly! One said: "I’d tear the Ka\'bah’s cloth if Allah sent you!" Another: "Couldn’t Allah find someone else?" The third: "I’ll never speak to you!"' } },
        { scene:'desert', character:'😔',
          text:{ ar:'لَم يَكتَفوا بِالرَّفض! <b>أَمَروا صِبيانَهُم وسُفَهاءَهُم أن يَرمُوهُ بِالحِجارَة!</b><br><br>وَقَفَ الصِّبيانُ صَفَّين على جانِبَي الطَّريق، وكُلَّما مَرَّ النَّبيُّ ﷺ رَمَوهُ حتّى دَمِيَت قَدَماهُ الشَّريفَتان! سالَ الدَّمُ في نَعلَيه، وسَقَطَ على وَجهِهِ مِن شِدَّةِ الأَلَم والتَّعَب.',
                 en:'They didn’t stop at refusal! <b>They ordered their boys and fools to stone him!</b><br><br>The boys lined both sides of the road, pelting him until his blessed feet bled! Blood filled his sandals, and he fell on his face from pain and exhaustion.' } },
        { scene:'desert', character:'🌥️',
          text:{ ar:'لَم يُفِق ﷺ إلّا وهو في قَرنِ الثَّعالِب، ورَفَعَ رَأسَهُ فَإذا سَحابَةٌ تُظِلُّه! نَظَرَ فَإذا جِبريلُ عليه السَّلام، ومَعَهُ مَلَكُ الجِبال.<br><br>قالَ مَلَكُ الجِبال: <b>«يا مُحَمَّد، إن شِئتَ أن أُطبِقَ عَلَيهِمُ الأَخشَبَين!»</b> — يَعني الجَبَلَين العَظيمَين يَسحَقانِ أَهلَ الطّائِف!',
                 en:'He came to at Qarn ath-Tha\'alib, looked up — a cloud shaded him! He saw Jibril, and with him the Angel of the Mountains.<br><br>The Angel said: <b>"O Muhammad, if you wish I will crush them between the two mountains!"</b>' },
          choice:{ q:{ar:'ماذا قالَ النَّبيُّ ﷺ لِمَلَكِ الجِبال؟ خَمِّن!',en:'What did the Prophet ﷺ say?'},
            opts:[
              { t:{ar:'«نَعَم، أَطبِق عَلَيهِم — هُم يَستَحِقّون!»',en:'"Yes, crush them — they deserve it!"'},c:false,exp:{ar:'لا! رَحمَتُهُ ﷺ أَعظَمُ مِن ذلك.',en:'No! His mercy was greater than that.'} },
              { t:{ar:'«بَل أَرجو أن يُخرِجَ اللهُ مِن أَصلابِهِم مَن يَعبُدُ الله»',en:'"Rather, I hope Allah brings from their descendants those who worship Him"'},c:true,exp:{ar:'صحيح! <b>عَفا عَنهُم ودَعا لَهُم بِالهِدايَة!</b>',en:'Correct! <b>He pardoned them and prayed for their guidance!</b>'} },
              { t:{ar:'«أَمهِلني حتّى أُفَكِّر»',en:'"Give me time to think"'},c:false,exp:{ar:'لَم يَتَرَدَّد ﷺ — عَفا مُباشَرَة.',en:'He didn’t hesitate — he pardoned immediately.'} },
            ] } },
        { scene:'garden', character:'😊',
          text:{ ar:'قالَ النَّبيُّ ﷺ بِقَلبٍ رَحيم: <b>«بَل أَرجو أن يُخرِجَ اللهُ مِن أَصلابِهِم مَن يَعبُدُ اللهَ وَحدَهُ لا يُشرِكُ بِه شَيئاً»</b><br><br>أيُّ حِلمٍ هذا؟ يُؤذونَهُ فَيَدعو لَهُم! يَرمونَهُ بِالحِجارَة فَيَرجو لَهُمُ الهِدايَة!',
                 en:'The Prophet ﷺ said with a merciful heart: <b>"Rather, I hope Allah brings from their descendants those who worship Him alone, not associating anything with Him"</b><br><br>What forbearance! They harm him, he prays for them! They stone him, he hopes for their guidance!' } },
        { scene:'madinah', character:'🌟',
          text:{ ar:'وَفِعلاً! بَعدَ سَنَواتٍ أَسلَمَت ثَقيفٌ كُلُّها، وخَرَجَ مِن أَصلابِهِم صَحابَةٌ عُظَماء!<br><br>هذا هو الحِلم — <b>تَعفو عَمَّن أَساءَ إِليك، وتَدعو لَهُ بِالخَير، وتَصبِرُ حتّى يُغَيِّرَ اللهُ قَلبَه!</b>',
                 en:'And indeed! Years later, all of Thaqif embraced Islam, and from their descendants came great Companions!<br><br>This is forbearance — <b>you pardon who wronged you, pray for their good, and be patient until Allah changes their heart!</b>' } },
      ],
      quiz: [
        { q:{ar:'إلى أينَ ذَهَبَ النَّبيُّ ﷺ يَطلُبُ النُّصرَة؟', en:'Where did the Prophet go seeking support?'},
          opts:[
            { t:{ar:'إلى المَدينَة', en:'To Madinah'}, c:false },
            { t:{ar:'إلى الطّائِف', en:'To Taif'}, c:true },
            { t:{ar:'إلى اليَمَن', en:'To Yemen'}, c:false }
          ] },
        { q:{ar:'مَن عَرَضَ على النَّبيِّ ﷺ أن يُطبِقَ الجَبَلَين على القَوم؟', en:'Who offered to crush the people between two mountains?'},
          opts:[
            { t:{ar:'جِبريل عليه السَّلام', en:'Jibril'}, c:false },
            { t:{ar:'مَلَكُ الجِبال', en:'The Angel of the Mountains'}, c:true },
            { t:{ar:'مَلَكُ المَوت', en:'The Angel of Death'}, c:false }
          ] },
        { q:{ar:'كيفَ رَدَّ النَّبيُّ ﷺ على العَرض؟', en:'How did the Prophet respond to the offer?'},
          opts:[
            { t:{ar:'قَبِلَ ودَعا على القَوم', en:'Accepted and cursed them'}, c:false },
            { t:{ar:'رَفَضَ ودَعا لَهُم بِالهِدايَة', en:'Refused and prayed for their guidance'}, c:true },
            { t:{ar:'طَلَبَ مُهلَةً لِلتَّفكير', en:'Asked for time to think'}, c:false }
          ] },
      ],
      moral:      { ar:'الحِلمُ يُحَوِّلُ القُلوبَ ويَهدي الضّالّين — فَاعفُ وادعُ لِمَن أَساءَ إِليك!', en:'Forbearance transforms hearts and guides the lost — pardon and pray for those who wrong you!' },
      badge:      { icon:'🌙', title:{ar:'وِسامُ الرَّحمَة',en:'Badge of Mercy'} },
      reflect:    [ 
        {ar:'كيفَ تَشعُرُ حينَ يُؤذيكَ أَحَد؟ هل تَستَطيعُ أن تَدعُوَ لَهُ بِالخَير؟', en:'How do you feel when someone hurts you? Can you pray for their good?'}, 
        {ar:'ما الَّذي مَنَعَ النَّبيَّ ﷺ مِن الانتِقام رَغمَ قُدرَتِه؟', en:'What kept the Prophet from revenge despite his power?'} 
      ],
      didYouKnow: [ 
        {ar:'رواه البخاري ومسلم — https://islamweb.net/ar/article/171351', en:'Narrated by Bukhari & Muslim — islamweb.net'}, 
        {ar:'هذه القِصَّةُ تُعَلِّمُنا أنَّ الحِلمَ أَقوى مِن الانتِقام في تَغييرِ القُلوب', en:'This story teaches that forbearance is stronger than revenge in changing hearts'} 
      ],
    },

    /* STORY 2 — The Bedouin who pulled the Prophet's cloak */
    {
      icon:'🤠', scene:'madinah', character:'🧔',
      title: { ar:'الأَعرابيُّ الَّذي جَذَبَ رِداءَ النَّبيّ ﷺ!', en:'The Bedouin who yanked the Prophet’s cloak!' },
      pages: [
        { scene:'madinah', character:'🧔',
          text:{ ar:'كانَ النَّبيُّ ﷺ يَمشي في المَدينَة، وعَلَيهِ بُردٌ نَجرانيٌّ غَليظُ الحاشِيَة. مَعَهُ أَنَسُ بنُ مالِكٍ رضي الله عنه.<br><br>فَجأَةً، رَكَضَ نَحوَهُ أَعرابيٌّ جِلفٌ غَليظُ الطَّبع!',
                 en:'The Prophet ﷺ was walking in Madinah wearing a thick-bordered Najrani cloak. Anas ibn Malik was with him.<br><br>Suddenly, a rough-mannered Bedouin ran toward him!' } },
        { scene:'madinah', character:'😠',
          text:{ ar:'<b>جَذَبَ الأَعرابيُّ رِداءَ النَّبيِّ ﷺ جَذبَةً شَديدَةً!</b> قالَ أَنَس: «حتّى نَظَرتُ إلى صَفحَةِ عاتِقِ رَسولِ اللهِ ﷺ قَد أَثَّرَت بِها حاشِيَةُ البُردِ مِن شِدَّةِ جَذبَتِه!»<br><br>تَرَكَ الجَذبُ أَثَراً أَحمَرَ على كَتِفِ النَّبيِّ ﷺ! لَكِنَّ النَّبيَّ ﷺ لَم يَغضَب!',
                 en:'<b>The Bedouin yanked the Prophet’s cloak violently!</b> Anas said: "I saw the edge of the cloak had left a mark on the Prophet’s shoulder from how hard he pulled!"<br><br>The pull left a red mark on the Prophet’s shoulder! But he did not get angry!' } },
        { scene:'madinah', character:'🤨',
          text:{ ar:'ثُمَّ قالَ الأَعرابيُّ بِفَظاظَة: <b>«يا مُحَمَّد! مُر لي مِن مالِ اللهِ الَّذي عِندَك!»</b><br><br>لَم يَقُل: «يا رَسولَ الله» ولا «أَكرِمني» ولا «مِن فَضلِك» — بَل أَمَرَهُ بِجَفاء شَديد!',
                 en:'Then the Bedouin said rudely: <b>"O Muhammad! Order them to give me from Allah’s wealth you have!"</b><br><br>He didn’t say "O Messenger of Allah" or "honor me" or "please" — just a harsh command!' },
          choice:{ q:{ar:'كيفَ تَظُنُّ النَّبيَّ ﷺ رَدَّ على هذا الجَفاء؟',en:'How do you think the Prophet responded to this rudeness?'},
            opts:[
              { t:{ar:'طَرَدَهُ وزَجَرَه',en:'Drove him away and scolded him'},c:false,exp:{ar:'لا — النَّبيُّ ﷺ لا يُعامِلُ النّاسَ بِالمِثل.',en:'No — the Prophet didn’t treat people the same way.'} },
              { t:{ar:'التَفَتَ إِلَيهِ وضَحِكَ ثُمَّ أَمَرَ لَهُ بِعَطاء',en:'Turned to him, smiled, and ordered a gift for him'},c:true,exp:{ar:'نَعَم! <b>ابتَسَمَ وأَعطاهُ مِن المال!</b>',en:'Yes! <b>He smiled and gave him money!</b>'} },
              { t:{ar:'سَكَتَ ومَضى دونَ رَدّ',en:'Stayed silent and walked away'},c:false,exp:{ar:'لا — بَل أَجابَ حاجَتَهُ بِلُطف!',en:'No — he met his need with kindness!'} },
            ] } },
        { scene:'madinah', character:'😊',
          text:{ ar:'قالَ أَنَس: <b>«فَالتَفَتَ إِلَيهِ رَسولُ اللهِ ﷺ ثُمَّ ضَحِكَ، ثُمَّ أَمَرَ لَهُ بِعَطاء»</b><br><br>ابتَسَمَ! لَم يَنتَقِم، لَم يَزجُر، لَم يُعاقِب. بَل ضَحِكَ وأَعطاهُ ما طَلَب!',
                 en:'Anas said: <b>"The Messenger of Allah turned to him, smiled, then ordered a gift for him"</b><br><br>He smiled! He didn’t retaliate, scold, or punish. He laughed and gave him what he asked!' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'هذا هو الحِلمُ الحَقيقيّ — <b>أن تُقابِلَ الجَفاءَ بِالابتِسامَة، والفَظاظَةَ بِالكَرَم!</b><br><br>قالَ اللهُ تعالى: ﴿وَلَو كُنتَ فَظّاً غَليظَ القَلبِ لانفَضّوا مِن حَولِك﴾ — لَكِنَّ النَّبيَّ ﷺ كانَ رَحمَةً لِلعالَمين.',
                 en:'This is true forbearance — <b>meeting rudeness with a smile, harshness with generosity!</b><br><br>Allah said: "If you were harsh and hard-hearted, they would have fled from you" — but the Prophet was a mercy to all worlds.' } },
      ],
      quiz: [
        { q:{ar:'ماذا فَعَلَ الأَعرابيُّ لِرِداءِ النَّبيّ ﷺ؟', en:'What did the Bedouin do to the Prophet’s cloak?'},
          opts:[
            { t:{ar:'مَزَّقَهُ', en:'Tore it'}, c:false },
            { t:{ar:'جَذَبَهُ جَذبَةً شَديدَة', en:'Yanked it violently'}, c:true },
            { t:{ar:'أَخَذَهُ مِنه', en:'Took it from him'}, c:false }
          ] },
        { q:{ar:'ماذا طَلَبَ الأَعرابيُّ مِن النَّبيّ ﷺ؟', en:'What did the Bedouin ask from the Prophet?'},
          opts:[
            { t:{ar:'الطَّعام', en:'Food'}, c:false },
            { t:{ar:'المال', en:'Money'}, c:true },
            { t:{ar:'الثِّياب', en:'Clothes'}, c:false }
          ] },
        { q:{ar:'كيفَ رَدَّ النَّبيُّ ﷺ على الأَعرابيّ؟', en:'How did the Prophet respond to the Bedouin?'},
          opts:[
            { t:{ar:'ضَحِكَ وأَعطاهُ ما طَلَب', en:'Smiled and gave him what he asked'}, c:true },
            { t:{ar:'غَضِبَ وطَرَدَه', en:'Got angry and drove him away'}, c:false },
            { t:{ar:'لَم يُجِبهُ', en:'Did not answer him'}, c:false }
          ] },
      ],
      moral:      { ar:'الحِلمُ يَجعَلُكَ مَحبوباً حتّى عِندَ مَن أَساءَ إِليك — فَقابِلِ الإِساءَةَ بِالإِحسان!', en:'Forbearance makes you beloved even to those who wrong you — meet harm with kindness!' },
      badge:      { icon:'😊', title:{ar:'نُجومُ الحِلم',en:'Stars of Forbearance'} },
      reflect:    [ 
        {ar:'لِماذا ضَحِكَ النَّبيُّ ﷺ رَغمَ الأَذى؟', en:'Why did the Prophet smile despite being harmed?'}, 
        {ar:'ما الَّذي يَمنَعُكَ مِن الحِلمِ عِندَما يُسيءُ إِليكَ أَحَد؟', en:'What keeps you from forbearance when someone wrongs you?'} 
      ],
      didYouKnow: [ 
        {ar:'رواه البخاري ومسلم — صحيح البخاري حديث ٦٠٨٨ — https://dorar.net', en:'Bukhari & Muslim — Sahih al-Bukhari #6088 — dorar.net'}, 
        {ar:'قالَ العُلَماء: الحِلمُ يُطفِئُ نارَ الغَضَبِ ويَكسِبُ القُلوب', en:'Scholars said: forbearance extinguishes anger’s fire and wins hearts'} 
      ],
    },

    /* STORY 3 — Mu'awiyah's forbearance with the Bedouin */
    {
      icon:'👑', scene:'desert', character:'🤴',
      title: { ar:'مُعاوِيَةُ وحِلمُهُ مع مَن أَهانَه!', en:'Mu\'awiyah’s forbearance with who insulted him!' },
      pages: [
        { scene:'desert', character:'🤴',
          text:{ ar:'كانَ مُعاوِيَةُ بنُ أَبي سُفيانَ رضي الله عنه خَليفَةَ المُسلِمين، وكانَ مَشهوراً بِحِلمِهِ حتّى قالوا: <b>«حِلمُ مُعاوِيَة»</b> مَثَلاً يُضرَب!<br><br>كانَ يَقول: «إنّي لَآنَفُ أن يَكونَ في الأَرضِ جَهلٌ لا يَسَعُهُ حِلمي، وذَنبٌ لا يَسَعُهُ عَفوي!»',
                 en:'Mu\'awiyah ibn Abi Sufyan, the Caliph of Muslims, was famous for his forbearance until they said: <b>"The forbearance of Mu\'awiyah"</b> as a proverb!<br><br>He would say: "I refuse to let there be on earth ignorance my forbearance can’t bear, or sin my pardon can’t embrace!"' } },
        { scene:'madinah', character:'😤',
          text:{ ar:'بَعَثَ مُعاوِيَةُ يَوماً إلى رَجُلٍ مِن الأَنصارِ بِخَمسِمِئَةِ دينار — هَدِيَّةً كَريمَة!<br><br>لَكِنَّ الأَنصاريَّ استَقَلَّها! قالَ لابنِه: <b>«خُذها وامضِ إلى مُعاوِيَة، فاضرِب بِها وَجهَهُ، ورُدَّها عَلَيه!»</b> وأَقسَمَ على ابنِهِ أن يَفعَلَ ذلك!',
                 en:'Mu\'awiyah once sent to an Ansari man five hundred dinars — a generous gift!<br><br>But the Ansari thought it too little! He told his son: <b>"Take it to Mu\'awiyah, throw it in his face, and return it!"</b> He made his son swear to do it!' } },
        { scene:'madinah', character:'😰',
          text:{ ar:'جاءَ الابنُ إلى مُعاوِيَة ومَعَهُ الدَّنانير. قالَ بِحَياء: <b>«يا أَميرَ المُؤمِنين، إنَّ أَبي فيه حِدَّةٌ وسُرعَة، وقَد أَمَرَني بِكَذا وكَذا، وأَقسَمَ عَلَيَّ، وما أَقدِرُ على مُخالَفَتِه.»</b><br><br>ماذا تَتَوَقَّعُ أن يَفعَلَ الخَليفَة؟',
                 en:'The son came to Mu\'awiyah with the money. He said shyly: <b>"O Commander of Believers, my father is quick-tempered and impulsive. He ordered me to do such-and-such, and made me swear, and I can’t disobey him."</b><br><br>What do you expect the Caliph to do?' },
          choice:{ q:{ar:'ماذا تَظُنُّ مُعاوِيَة فَعَل؟',en:'What do you think Mu\'awiyah did?'},
            opts:[
              { t:{ar:'عاقَبَ الرَّجُلَ واستَدعاهُ لِلمُحاسَبَة',en:'Punished the man and summoned him'},c:false,exp:{ar:'لا — الحِلمُ لا يُعاقِب على الجَهل!',en:'No — forbearance doesn’t punish ignorance!'} },
              { t:{ar:'وَضَعَ يَدَهُ على وَجهِهِ وقالَ: افعَل ما أَمَرَكَ أَبوك',en:'Put his hand on his face and said: do what your father ordered'},c:true,exp:{ar:'نَعَم! <b>سَهَّلَ على الابنِ تَنفيذَ القَسَم!</b>',en:'Yes! <b>He made it easy for the son to keep the oath!</b>'} },
              { t:{ar:'رَفَضَ وطَرَدَ الابن',en:'Refused and drove the son away'},c:false,exp:{ar:'لا — بَل ساعَدَهُ بِكَرَم!',en:'No — he helped him generously!'} },
            ] } },
        { scene:'madinah', character:'🤲',
          text:{ ar:'قالَ مُعاوِيَة بِحِلمٍ عَجيب: <b>«افعَل ما أَمَرَكَ أَبوك، وارفُق بِعَمِّك»</b> — ثُمَّ وَضَعَ يَدَهُ على وَجهِهِ لِيَضرِبَهُ الابنُ بِرِفقٍ تَنفيذاً لِلقَسَم!<br><br>فَاستَحيا الصَّبيُّ ورَمى الدَّراهِمَ، فَضاعَفَها مُعاوِيَةُ وحَمَلَها إلى الأَنصاريّ!',
                 en:'Mu\'awiyah said with amazing forbearance: <b>"Do what your father ordered, and be gentle with your uncle"</b> — then placed his hand on his face so the boy could strike it gently to fulfill the oath!<br><br>The boy was ashamed and threw down the money. Mu\'awiyah doubled it and sent it to the Ansari!' } },
        { scene:'desert', character:'😮',
          text:{ ar:'بَلَغَ الخَبَرُ يَزيدَ ابنَ مُعاوِيَة، فَدَخَلَ غَضبانَ وقالَ: «لَقَد أَفرَطتَ في الحِلمِ حتّى خِفتُ أن يُعَدَّ ذلك مِنكَ ضَعفاً!»<br><br>فَقالَ مُعاوِيَة: <b>«أَي بُنَيّ، إنَّهُ لا يَكونُ مع الحِلمِ نَدامَةٌ ولا مَذَمَّة. امضِ لِشَأنِك، ودَعني ورَأيي!»</b>',
                 en:'The news reached Yazid, Mu\'awiyah’s son. He entered angrily: "You’ve gone too far in forbearance — I fear it will be seen as weakness!"<br><br>Mu\'awiyah said: <b>"My son, forbearance brings no regret or blame. Go about your business and leave me to my way!"</b>' } },
      ],
      quiz: [
        { q:{ar:'بِكَم بَعَثَ مُعاوِيَةُ إلى الأَنصاريّ؟', en:'How much did Mu\'awiyah send to the Ansari?'},
          opts:[
            { t:{ar:'مِئَة دينار', en:'One hundred dinars'}, c:false },
            { t:{ar:'خَمسُمِئَة دينار', en:'Five hundred dinars'}, c:true },
            { t:{ar:'أَلف دينار', en:'One thousand dinars'}, c:false }
          ] },
        { q:{ar:'ماذا أَمَرَ الأَنصاريُّ ابنَهُ أن يَفعَل؟', en:'What did the Ansari order his son to do?'},
          opts:[
            { t:{ar:'يَضرِبَ مُعاوِيَةَ بِالمال', en:'Strike Mu\'awiyah with the money'}, c:true },
            { t:{ar:'يَحتَفِظَ بِالمال', en:'Keep the money'}, c:false },
            { t:{ar:'يُعطِيَ المالَ لِلفُقَراء', en:'Give the money to the poor'}, c:false }
          ] },
        { q:{ar:'كيفَ رَدَّ مُعاوِيَةُ على هذه الإِهانَة؟', en:'How did Mu\'awiyah respond to this insult?'},
          opts:[
            { t:{ar:'عاقَبَ الرَّجُل', en:'Punished the man'}, c:false },
            { t:{ar:'سَهَّلَ على الابنِ تَنفيذَ القَسَم وضاعَفَ المال', en:'Made it easy for the son and doubled the money'}, c:true },
            { t:{ar:'رَفَضَ استِقبالَ الابن', en:'Refused to receive the son'}, c:false }
          ] },
      ],
      moral:      { ar:'الحِلمُ الحَقيقيُّ هو أن تَعفُوَ عَمَّن أَهانَكَ وتُحسِنَ إِلَيه — فَهذا يَملِكُ القُلوب!', en:'True forbearance is pardoning who insulted you and being kind to them — this wins hearts!' },
      badge:      { icon:'👑', title:{ar:'تاجُ الحِلم',en:'Crown of Forbearance'} },
      reflect:    [ 
        {ar:'لِماذا لَم يَغضَب مُعاوِيَةُ رَغمَ الإِهانَة؟', en:'Why didn’t Mu\'awiyah get angry despite the insult?'}, 
        {ar:'ما الفَرقُ بَينَ الحِلمِ والضَّعف؟', en:'What’s the difference between forbearance and weakness?'} 
      ],
      didYouKnow: [ 
        {ar:'ذَكَرَها ابنُ أَبي الدُّنيا في كِتابِ «حِلم مُعاوِيَة» — https://islamweb.net', en:'Recorded by Ibn Abi ad-Dunya in "The Forbearance of Mu\'awiyah" — islamweb.net'}, 
        {ar:'قالَ ابنُ عَبّاس: عَلِمتُ بِمَ غَلَبَ مُعاوِيَةُ النّاس — كانوا إذا طاروا وَقَع، وإذا وَقَعَ طاروا', en:'Ibn Abbas said: I know how Mu\'awiyah surpassed people — when they flew, he settled; when he settled, they flew'} 
      ],
    },

    /* STORY 4 — Al-Ahnaf ibn Qays */
    {
      icon:'🧙', scene:'desert', character:'👴',
      title: { ar:'الأَحنَفُ بنُ قَيس — أَحلَمُ العَرَب!', en:'Al-Ahnaf ibn Qays — most forbearing of the Arabs!' },
      pages: [
        { scene:'desert', character:'👴',
          text:{ ar:'كانَ الأَحنَفُ بنُ قَيسٍ سَيِّدَ قَومِه، ومَعَ ذلك كانَ أَحنَفَ الرِّجلَين (مُعوَجَّهما)، وأَعوَرَ العَين. فَسَأَلَهُ رَجُل: <b>«بِمَ سُدتَ قَومَكَ وأَنتَ أَحنَفُ أَعوَر؟»</b><br><br>قالَ: <b>«بِتَركي ما لا يَعنيني، كَما عَناكَ مِن أَمري ما لا يَعنيك!»</b>',
                 en:'Al-Ahnaf ibn Qays was chief of his people, yet his legs were crooked and he had one eye. A man asked: <b>"How did you lead your people being crooked-legged and one-eyed?"</b><br><br>He said: <b>"By leaving what doesn’t concern me — as what doesn’t concern you about me has concerned you!"</b>' } },
        { scene:'madinah', character:'🤔',
          text:{ ar:'كانَ النّاسُ يَتَعَجَّبونَ مِن حِلمِه! فَكانَ يَقول: <b>«واللهِ إنّي لَأَجِدُ ما تَجِدون — ولَكِنّي صَبور!»</b><br><br>وقالَ: «وَجَدتُ الحِلمَ أَنصَرَ لي مِن الرِّجال!» — يَعني أنَّ الحِلمَ أَقوى مِن أيِّ جَيشٍ يَنصُرُه!',
                 en:'People marveled at his forbearance! He would say: <b>"By Allah, I feel what you feel — but I am patient!"</b><br><br>He said: "I found forbearance more helpful than men!" — meaning forbearance is stronger than any army!' } },
        { scene:'madinah', character:'😠',
          text:{ ar:'يَوماً كانَ الأَحنَفُ يَطوفُ بِالكَعبَة، فَجاءَ رَجُلٌ وشَتَمَهُ وسَبَّه! والأَحنَفُ ساكِت.<br><br>شَتَمَهُ مَرَّةً ثانِيَة — والأَحنَفُ ساكِت. شَتَمَهُ ثَلاثاً — والأَحنَفُ ساكِت!',
                 en:'One day al-Ahnaf was circling the Ka\'bah when a man came and insulted him! Al-Ahnaf was silent.<br><br>He insulted him again — al-Ahnaf silent. A third time — al-Ahnaf silent!' },
          choice:{ q:{ar:'ماذا تَظُنُّ الأَحنَفَ فَعَلَ بَعدَ الشَّتيمَةِ الثّالِثَة؟',en:'What do you think al-Ahnaf did after the third insult?'},
            opts:[
              { t:{ar:'رَدَّ عَلَيهِ بِشَتيمَةٍ مِثلِها',en:'Insulted him back'},c:false,exp:{ar:'لا — الحَليمُ لا يُشاتِم!',en:'No — the forbearing don’t insult back!'} },
              { t:{ar:'أَسرَعَ في الطَّوافِ لِيَبتَعِدَ عَنه',en:'Hurried in tawaf to get away'},c:true,exp:{ar:'نَعَم! <b>أَسرَعَ لِيَبتَعِدَ عَن الفِتنَة!</b>',en:'Yes! <b>He hurried to distance himself from trouble!</b>'} },
              { t:{ar:'وَقَفَ وضَرَبَه',en:'Stopped and hit him'},c:false,exp:{ar:'لا — الحِلمُ أَقوى مِن العُنف!',en:'No — forbearance is stronger than violence!'} },
            ] } },
        { scene:'madinah', character:'🏃',
          text:{ ar:'قالَ الأَحنَف: <b>فَأَسرَعتُ المَشيَ لِأَتَخَلَّصَ مِنه!</b><br><br>فَقالَ الرَّجُل: «أَفِرّاً مِنّي يا أَحنَف؟» قالَ: <b>«لا، ولَكِنّي أَفِرُّ بِكَ مِن نَفسي — كَراهِيَةَ أن أُجيبَكَ بِمِثلِ ما تَقول!»</b>',
                 en:'Al-Ahnaf said: <b>I hurried to escape him!</b><br><br>The man said: "Fleeing from me, Ahnaf?" He replied: <b>"No — I’m fleeing WITH you from myself, lest I answer you with what you say!"</b>' } },
        { scene:'garden', character:'🌟',
          text:{ ar:'وكانَ الأَحنَفُ يَقول: <b>«ما ضَرَبتُ غُلاماً لي قَطّ، ولا سَبَبتُ أَحَداً، ولا شَتَمتُ أَحَداً قَطّ!»</b><br><br>قالَ الحَسَنُ البَصريّ عَنهُ: «رَأَيتُ الأَحنَفَ — ما رَأَيتُ شَريفاً قَطُّ كانَ أَشبَهَ بِأَخلاقِ المُهاجِرينَ والأَنصارِ مِنهُ!»<br><br>ذَكَرَهُ الحافِظُ الذَّهَبيُّ في سِيَرِ أَعلامِ النُّبَلاء.',
                 en:'Al-Ahnaf said: <b>"I never struck a servant, cursed anyone, or insulted anyone!"</b><br><br>Al-Hasan al-Basri said of him: "I saw al-Ahnaf — I never saw a noble more similar in character to the Emigrants and Helpers!"<br><br>Al-Dhahabi mentioned him in Siyar A\'lam an-Nubala.' } },
      ],
      quiz: [
        { q:{ar:'ماذا كانَ في جِسمِ الأَحنَفِ بنِ قَيس؟', en:'What physical traits did al-Ahnaf have?'},
          opts:[
            { t:{ar:'أَحنَفُ الرِّجلَين وأَعوَرُ العَين', en:'Crooked legs and one eye'}, c:true },
            { t:{ar:'طَويلُ القامَة', en:'Very tall'}, c:false },
            { t:{ar:'قَصيرُ القامَة', en:'Very short'}, c:false }
          ] },
        { q:{ar:'ماذا قالَ الأَحنَفُ عَن حِلمِه؟', en:'What did al-Ahnaf say about his forbearance?'},
          opts:[
            { t:{ar:'إنَّهُ لا يَشعُرُ بِالغَضَب أَبَداً', en:'He never feels anger'}, c:false },
            { t:{ar:'يَشعُرُ بِالغَضَبِ ولَكِنَّهُ صَبور', en:'He feels anger but is patient'}, c:true },
            { t:{ar:'الغَضَبُ عِندَهُ ضَعيفٌ جِدّاً', en:'His anger is very weak'}, c:false }
          ] },
        { q:{ar:'ماذا فَعَلَ حينَ شَتَمَهُ الرَّجُل؟', en:'What did he do when the man insulted him?'},
          opts:[
            { t:{ar:'شَتَمَهُ بِالمِثل', en:'Insulted him back'}, c:false },
            { t:{ar:'أَسرَعَ في الطَّوافِ لِيَبتَعِد', en:'Hurried in tawaf to distance himself'}, c:true },
            { t:{ar:'وَقَفَ وقاتَلَه', en:'Stopped and fought him'}, c:false }
          ] },
      ],
      moral:      { ar:'الحِلمُ صِفَةُ الأَقوِياءِ لا الضُّعَفاء — فَاملِك نَفسَكَ عِندَ الغَضَب تَكُن مِن العُظَماء!', en:'Forbearance is the trait of the strong, not the weak — control yourself when angry to be among the great!' },
      badge:      { icon:'🧙', title:{ar:'حَكيمُ الحِلم',en:'Sage of Forbearance'} },
      reflect:    [ 
        {ar:'لِماذا قالَ الأَحنَفُ إنَّهُ يَفِرُّ بِالرَّجُلِ مِن نَفسِه؟', en:'Why did al-Ahnaf say he fled with the man from himself?'}, 
        {ar:'هل تَستَطيعُ أن تَصبِرَ على مَن يُؤذيكَ بِالكَلام؟', en:'Can you be patient with someone who harms you with words?'} 
      ],
      didYouKnow: [ 
        {ar:'سِيَرُ أَعلامِ النُّبَلاء — الذَّهَبيّ — ج٤ ص٧٠', en:'Siyar A\'lam an-Nubala — al-Dhahabi — vol. 4, p. 70'}, 
        {ar:'قالَ عُمَرُ بنُ الخَطّاب: «هذا واللهِ السَّيِّد!» — https://islamweb.net', en:'Umar ibn al-Khattab said: "This, by Allah, is the chief!" — islamweb.net'} 
      ],
    },
  ],

  /* ───── ROOM 3: Memorize ───── */
  memorize: {
    verses: [
      { text:{ar:'﴿ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ ﴾', en:'"Those who restrain anger and pardon people — Allah loves the doers of good"'}, 
        ref:{ar:'[سورة آل عمران: ١٣٤]', en:'[Surah Aal-Imran: 134]'} },
      { text:{ar:'﴿ وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ ﴾', en:'"Whoever is patient and forgives — that is a matter of great resolve"'}, 
        ref:{ar:'[سورة الشورى: ٤٣]', en:'[Surah Ash-Shura: 43]'} },
    ],
    hadiths: [
      { text:{ar:'«مَن كَظَمَ غَيظاً وهو قادِرٌ على أن يُنفِذَه، دَعاهُ اللهُ على رُؤوسِ الخَلائِقِ حتّى يُخَيِّرَهُ مِن أيِّ الحُورِ شاء»', en:'"Whoever restrains rage while able to act on it, Allah will call him before all creation to choose whichever houri he wishes"'}, 
        ref:{ar:'[رواه أبو داود والترمذي]', en:'[Abu Dawud & Tirmidhi]'} },
      { text:{ar:'«لَيسَ الشَّديدُ بِالصُّرَعَة، إنَّما الشَّديدُ الَّذي يَملِكُ نَفسَهُ عِندَ الغَضَب»', en:'"The strong one is not the wrestler — the strong one is who controls himself when angry"'}, 
        ref:{ar:'[رواه البخاري ومسلم]', en:'[Bukhari & Muslim]'} },
    ],
    pledge: {
      title: {ar:'عَهدُ الحَليم', en:'The Forbearing Pledge'},
      lines: [
        {ar:'أَعِدُ أن أَكظِمَ غَيظي ولا أَنتَقِمَ مِمَّن أَساءَ إِلَيّ', en:'I pledge to restrain my anger and not retaliate against who wrongs me'},
        {ar:'أَعِدُ أن أَعفُوَ عَمَّن أَخطَأَ في حَقّي وأَصفَحَ صَفحاً جَميلاً', en:'I pledge to pardon who errs against me and overlook beautifully'},
        {ar:'أَعِدُ أن أُقابِلَ الإِساءَةَ بِالإِحسانِ والجَفاءَ بِالرَّحمَة', en:'I pledge to meet harm with kindness and harshness with mercy'},
        {ar:'أَعِدُ أن أَتَذَكَّرَ عَفوَ اللهِ عَنّي كُلَّما هَمَمتُ بِالانتِقام', en:'I pledge to remember Allah’s pardon for me whenever I think of revenge'},
      ],
      dua: {ar:'اللَّهُمَّ ارزُقني حِلماً يُطفِئُ نارَ الغَضَب، وصَفحاً يَملِكُ القُلوب، وعَفواً يُشبِهُ عَفوَك عَنّي', en:'O Allah, grant me forbearance that extinguishes anger’s fire, pardon that wins hearts, and forgiveness resembling Your forgiveness of me'},
    },
  },

  /* ───── ROOM 4: Activities — 6 types × 3 levels = 18 games, 180 points ───── */
  activities: {
    totalPoints: 180,
    list: [
      /* 1. KNOWLEDGE — fill, T/F, MCQ */
      { id:'know', icon:'📝', kind:'fill', title:{ ar:'اختبار المعرفة', en:'Knowledge Test' },
        levels: [
          { kind:'fillBlanks', points:30,
            wordBank: {ar:['كَظمُ الغَيظ','العَفو','الإِحسان','الصَّبر','الحِلم'], en:['restraining anger','pardon','kindness','patience','forbearance']},
            items: [
              { prefix:{ar:'الحِلمُ هو',en:'Forbearance is'}, 
                answer:{ar:'كَظمُ الغَيظ',en:'restraining anger'}, 
                suffix:{ar:'والعَفوُ عَنِ النّاس',en:'and pardoning people'} },
              { prefix:{ar:'مِن أَعلى دَرَجاتِ الحِلمِ',en:'The highest level of forbearance is'}, 
                answer:{ar:'الإِحسان',en:'kindness'}, 
                suffix:{ar:'إلى مَن أَساءَ إِليك',en:'to who wronged you'} },
              { prefix:{ar:'الحَليمُ يَتَحَلّى بِـ',en:'The forbearing has'}, 
                answer:{ar:'الصَّبر',en:'patience'}, 
                suffix:{ar:'عِندَ الاستِفزاز',en:'when provoked'} },
              { prefix:{ar:'مِن فَوائِدِ',en:'A benefit of'}, 
                answer:{ar:'الحِلم',en:'forbearance'}, 
                suffix:{ar:'أَنَّهُ يَكسِبُ القُلوب',en:'is that it wins hearts'} },
              { prefix:{ar:'أَوَّلُ خُطوَةٍ في الحِلمِ هي',en:'The first step in forbearance is'}, 
                answer:{ar:'العَفو',en:'pardon'}, 
                suffix:{ar:'عَن المُسيء',en:'the wrongdoer'} },
            ]
          },
          { kind:'trueFalse', points:30,
            items: [
              { q:{ar:'الحِلمُ يَعني ألّا تَشعُرَ بِالغَضَبِ أَبَداً', 
                   en:'Forbearance means never feeling anger'}, t:false },
              { q:{ar:'الحَليمُ يَملِكُ نَفسَهُ عِندَ الغَضَبِ رَغمَ قُدرَتِهِ على الرَّدّ', 
                   en:'The forbearing controls himself when angry despite ability to respond'}, t:true },
              { q:{ar:'الحِلمُ ضَعفٌ وخَوف', 
                   en:'Forbearance is weakness and fear'}, t:false },
              { q:{ar:'اللهُ يُحِبُّ الكاظِمينَ الغَيظَ والعافينَ عَنِ النّاس', 
                   en:'Allah loves those who restrain anger and pardon people'}, t:true },
              { q:{ar:'الانتِقامُ أَفضَلُ مِن العَفو', 
                   en:'Revenge is better than pardon'}, t:false },
              { q:{ar:'الأَحنَفُ بنُ قَيسٍ كانَ يَقول: إنّي لَأَجِدُ ما تَجِدونَ ولَكِنّي صَبور', 
                   en:'Al-Ahnaf ibn Qays said: I feel what you feel but I am patient'}, t:true },
              { q:{ar:'النَّبيُّ ﷺ عَفا عَن أَهلِ الطّائِفِ ودَعا لَهُم بِالهِدايَة', 
                   en:'The Prophet pardoned the people of Taif and prayed for their guidance'}, t:true },
              { q:{ar:'الحِلمُ يُزيلُ البَغضاءَ بَينَ النّاس', 
                   en:'Forbearance removes hatred between people'}, t:true },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما جَزاءُ مَن كَظَمَ غَيظَهُ وهو قادِرٌ على تَنفيذِه؟', 
                   en:'What is the reward for restraining rage while able to act?'},
                opts:[
                  { t:{ar:'يُخَيَّرُ مِن الحُورِ العين', en:'Choosing from the houris'}, c:true },
                  { t:{ar:'يُعطى مالاً كَثيراً', en:'Being given much wealth'}, c:false },
                  { t:{ar:'يَصيرُ مَلِكاً', en:'Becoming a king'}, c:false }
                ] },
              { q:{ar:'مَن الصَّحابيُّ الَّذي اشتَهَرَ بِالحِلم؟', 
                   en:'Which Companion was famous for forbearance?'},
                opts:[
                  { t:{ar:'مُعاوِيَةُ بنُ أَبي سُفيان', en:'Mu\'awiyah ibn Abi Sufyan'}, c:true },
                  { t:{ar:'خالِدُ بنُ الوَليد', en:'Khalid ibn al-Walid'}, c:false },
                  { t:{ar:'سَعدُ بنُ أَبي وَقّاص', en:'Sa\'d ibn Abi Waqqas'}, c:false }
                ] },
              { q:{ar:'مَن أَحلَمُ العَرَب؟', 
                   en:'Who was the most forbearing of Arabs?'},
                opts:[
                  { t:{ar:'الأَحنَفُ بنُ قَيس', en:'Al-Ahnaf ibn Qays'}, c:true },
                  { t:{ar:'عَمرو بنُ العاص', en:'Amr ibn al-\'As'}, c:false },
                  { t:{ar:'أَبو عُبَيدَة', en:'Abu \'Ubaydah'}, c:false }
                ] },
              { q:{ar:'ماذا قالَ النَّبيُّ ﷺ عَن الشَّديدِ الحَقيقيّ؟', 
                   en:'What did the Prophet say about the truly strong?'},
                opts:[
                  { t:{ar:'الَّذي يَملِكُ نَفسَهُ عِندَ الغَضَب', en:'Who controls himself when angry'}, c:true },
                  { t:{ar:'الَّذي يَغلِبُ في المُصارَعَة', en:'Who wins in wrestling'}, c:false },
                  { t:{ar:'الَّذي لَدَيهِ عَضَلاتٌ كَبيرَة', en:'Who has big muscles'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 2. MATCHING */
      { id:'flip', icon:'🎴', kind:'flipMatch', title:{ ar:'الذّاكِرَة', en:'Memory' },
        levels: [
          { kind:'flipMatch', points:30,
            pairs: [
              { a:{ar:'كَظمُ الغَيظ', en:'Restraining rage'}, 
                b:{ar:'حَبسُ الغَضَبِ في الصَّدر', en:'Holding anger inside'} },
              { a:{ar:'العَفو', en:'Pardon'}, 
                b:{ar:'التَّجاوُزُ عَنِ المُسيء', en:'Overlooking the wrongdoer'} },
              { a:{ar:'الصَّفحُ الجَميل', en:'Beautiful pardon'}, 
                b:{ar:'العَفوُ دونَ تَذكيرٍ بِالخَطأ', en:'Forgiving without reminding of error'} },
              { a:{ar:'الإِحسانُ إلى المُسيء', en:'Kindness to wrongdoers'}, 
                b:{ar:'مُقابَلَةُ السُّوءِ بِالخَير', en:'Meeting harm with good'} },
              { a:{ar:'السَّكينَةُ عِندَ الاستِفزاز', en:'Calmness when provoked'}, 
                b:{ar:'الهُدوءُ رَغمَ المُحاوَلاتِ لِإِغضابِك', en:'Staying calm despite attempts to anger you'} },
            ]
          },
          { kind:'match', points:30,
            left: [
              { id:1, t:{ar:'النَّبيُّ ﷺ في الطّائِف', 
                        en:'Prophet in Taif'} },
              { id:2, t:{ar:'الأَعرابيُّ الَّذي جَذَبَ الرِّداء', 
                        en:'Bedouin who yanked cloak'} },
              { id:3, t:{ar:'مُعاوِيَةُ والأَنصاريّ', 
                        en:'Mu\'awiyah and the Ansari'} },
              { id:4, t:{ar:'الأَحنَفُ بنُ قَيس', 
                        en:'Al-Ahnaf ibn Qays'} },
            ],
            right: [
              { id:3, t:{ar:'وَضَعَ يَدَهُ لِيُضرَب', 
                        en:'Put his hand to be struck'} },
              { id:1, t:{ar:'دَعا لَهُم بِالهِدايَة', 
                        en:'Prayed for their guidance'} },
              { id:4, t:{ar:'أَسرَعَ في الطَّوافِ لِيَبتَعِد', 
                        en:'Hurried in tawaf to distance'} },
              { id:2, t:{ar:'ضَحِكَ وأَعطاهُ مالاً', 
                        en:'Smiled and gave money'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'أَيُّ الآياتِ تَتَحَدَّثُ عَن كَظمِ الغَيظ؟', 
                   en:'Which verse speaks of restraining anger?'},
                opts:[
                  { t:{ar:'﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ﴾', 
                       en:'"Those who restrain anger and pardon people"'}, c:true },
                  { t:{ar:'﴿إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ﴾', 
                       en:'"Allah commands justice and goodness"'}, c:false },
                  { t:{ar:'﴿وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ﴾', 
                       en:'"Establish prayer and give zakat"'}, c:false }
                ] },
              { q:{ar:'ما هو الحِلمُ الحَقيقيّ؟', 
                   en:'What is true forbearance?'},
                opts:[
                  { t:{ar:'ضَبطُ النَّفسِ عِندَ الغَضَب', 
                       en:'Controlling yourself when angry'}, c:true },
                  { t:{ar:'عَدَمُ الشُّعورِ بِالغَضَب', 
                       en:'Not feeling anger'}, c:false },
                  { t:{ar:'الهُروبُ مِن المَشاكِل', 
                       en:'Fleeing from problems'}, c:false }
                ] },
              { q:{ar:'مَن قالَ: «إنّي لَآنَفُ أن يَكونَ في الأَرضِ جَهلٌ لا يَسَعُهُ حِلمي»؟', 
                   en:'Who said: "I refuse to let there be on earth ignorance my forbearance can’t bear"?'},
                opts:[
                  { t:{ar:'مُعاوِيَةُ بنُ أَبي سُفيان', en:'Mu\'awiyah ibn Abi Sufyan'}, c:true },
                  { t:{ar:'عُمَرُ بنُ الخَطّاب', en:'Umar ibn al-Khattab'}, c:false },
                  { t:{ar:'عَليُّ بنُ أَبي طالِب', en:'Ali ibn Abi Talib'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 3. SORTING — good/bad behaviors */
      { id:'sort', icon:'🗂️', kind:'sort', title:{ ar:'صَنِّف السُّلوكات', en:'Sort Behaviors' },
        levels: [
          { kind:'sort', points:30,
            items: [
              { t:{ar:'تَكظِمُ غَيظَكَ رَغمَ قُدرَتِكَ على الرَّدّ', 
                   en:'Restraining rage despite ability to respond'}, good:true },
              { t:{ar:'تَنتَقِمُ مِمَّن أَساءَ إِليك', 
                   en:'Retaliating against who wronged you'}, good:false },
              { t:{ar:'تَعفو عَمَّن أَخطَأَ في حَقِّك', 
                   en:'Pardoning who erred against you'}, good:true },
              { t:{ar:'تُذَكِّرُ النّاسَ بِأَخطائِهِم دائِماً', 
                   en:'Always reminding people of their errors'}, good:false },
              { t:{ar:'تَصفَحُ صَفحاً جَميلاً', 
                   en:'Overlooking beautifully'}, good:true },
              { t:{ar:'تَغضَبُ وتَثورُ عِندَ أَقَلِّ استِفزاز', 
                   en:'Getting angry at slightest provocation'}, good:false },
              { t:{ar:'تَملِكُ لِسانَكَ عِندَ الغَضَب', 
                   en:'Controlling your tongue when angry'}, good:true },
              { t:{ar:'تَشتُمُ مَن يَشتُمُكَ', 
                   en:'Insulting who insults you'}, good:false },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'تُحسِنُ إلى مَن أَساءَ إِليك', 
                   en:'Being kind to who wronged you'}, good:true },
              { t:{ar:'تَحقِدُ على مَن آذاك', 
                   en:'Holding grudges against who harmed you'}, good:false },
              { t:{ar:'تَدعو لِمَن ظَلَمَكَ بِالهِدايَة', 
                   en:'Praying for guidance of who oppressed you'}, good:true },
              { t:{ar:'تَتَحَدَّثُ عَن عُيوبِ مَن أَخطَأَ', 
                   en:'Talking about faults of who erred'}, good:false },
              { t:{ar:'تَصبِرُ على الأَذى', 
                   en:'Being patient with harm'}, good:true },
              { t:{ar:'تَقاطِعُ مَن أَغضَبَك', 
                   en:'Cutting off who angered you'}, good:false },
              { t:{ar:'تَبحَثُ عَن الأَعذارِ لِلمُخطِئ', 
                   en:'Looking for excuses for the mistaken one'}, good:true },
            ]
          },
          { kind:'sort', points:30,
            items: [
              { t:{ar:'تَبتَسِمُ في وَجهِ مَن جَفاك', 
                   en:'Smiling at who was harsh to you'}, good:true },
              { t:{ar:'تَقاطِعُ مَن أَساءَ إِليك', 
                   en:'Cutting off who wronged you'}, good:false },
              { t:{ar:'تَملِكُ نَفسَكَ عِندَ الغَضَب', 
                   en:'Controlling yourself when angry'}, good:true },
              { t:{ar:'تَشتُمُ مَن شَتَمَك', 
                   en:'Insulting who insulted you'}, good:false },
              { t:{ar:'تَتَذَكَّرُ عَفوَ اللهِ عَنكَ قَبلَ أن تَنتَقِم', 
                   en:'Remembering Allah’s pardon before revenge'}, good:true },
              { t:{ar:'تَنشُرُ أَسرارَ مَن أَغضَبَك', 
                   en:'Spreading secrets of who angered you'}, good:false },
            ]
          },
        ]
      },

      /* 4. CIPHER */
      { id:'cipher', icon:'🔑', kind:'cipher', title:{ ar:'فُكَّ الشِّفرَة', en:'Decode' },
        levels: [
          { kind:'cipher', points:30,
            key: {
              ar: {'🌙':'ح','💚':'ل','🌟':'م','🤲':'ع','💛':'ف','🌸':'و'},
              en: {'🌙':'f','💚':'o','🌟':'r','🤲':'b','💛':'e','🌸':'a','🏆':'n','🌺':'c','🕊️':'p'}
            },
            puzzles: [
              { symbols:{ar:'🌙 💚 🌟', en:'🤲 💛 🌸 🏆'}, answer:{ar:'حِلم', en:'bear'} },
              { symbols:{ar:'🤲 🤲 💛 💚', en:'🌙 💚 🏆 💛 🌺'}, answer:{ar:'عَفو', en:'fence'} },
              { symbols:{ar:'🌸 🤲 🌟 🤲', en:'🕊️ 🌸 🏆 💚 🏆'}, answer:{ar:'وَعر', en:'paron'} },
            ]
          },
          { kind:'cipher', points:30,
            key: {
              ar: {'الحاء':'١','اللام':'٢','الميم':'٣','العين':'٤','الفاء':'٥','الواو':'٦'},
              en: {'f':'1','o':'2','r':'3','b':'4','e':'5','a':'6','n':'7','c':'8','p':'9'}
            },
            puzzles: [
              { symbols:{ar:'١-٢-٣', en:'4-5-6-3'}, answer:{ar:'حلم', en:'bear'} },
              { symbols:{ar:'٤-٥-٦', en:'9-6-3-7'}, answer:{ar:'عفو', en:'parn'} },
              { symbols:{ar:'٦-٤-٣', en:'8-6-2-3'}, answer:{ar:'وعم', en:'corn'} },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'ما أَفضَلُ طَريقَةٍ لِتَعَلُّمِ الحِلم؟', en:'What’s the best way to learn forbearance?'},
                opts:[
                  { t:{ar:'التَّدَرُّبُ في المَواقِفِ الصَّغيرَة', en:'Practicing in small situations'}, c:true },
                  { t:{ar:'الانتِظارُ حتّى يَأتيَ الحِلمُ تِلقائِيّاً', en:'Waiting for forbearance to come automatically'}, c:false },
                  { t:{ar:'تَجَنُّبُ كُلِّ المَواقِفِ المُغضِبَة', en:'Avoiding all anger-provoking situations'}, c:false }
                ] },
              { q:{ar:'لِماذا الحِلمُ أَقوى مِن الانتِقام؟', en:'Why is forbearance stronger than revenge?'},
                opts:[
                  { t:{ar:'لأَنَّهُ يُحَوِّلُ الأَعداءَ إلى أَصدِقاء', en:'Because it turns enemies into friends'}, c:true },
                  { t:{ar:'لأَنَّهُ أَسهَل', en:'Because it’s easier'}, c:false },
                  { t:{ar:'لأَنَّهُ يَجعَلُكَ مَشهوراً', en:'Because it makes you famous'}, c:false }
                ] },
            ]
          },
        ]
      },

      /* 5. SCENARIOS */
      { id:'scen', icon:'🎭', kind:'mcq', title:{ ar:'مَواقِف', en:'Scenarios' },
        levels: [
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'أَخوكَ الصَّغيرُ كَسَرَ لُعبَتَكَ المُفَضَّلَة. ماذا تَفعَل؟', 
                   en:'Your little brother broke your favorite toy. What do you do?'},
                opts:[
                  { t:{ar:'أَصرُخُ عَلَيهِ وأَكسِرُ لُعبَتَه', 
                       en:'Yell at him and break his toy'}, c:false },
                  { t:{ar:'أَكظِمُ غَيظي وأَعفو عَنهُ', 
                       en:'Restrain my anger and pardon him'}, c:true },
                  { t:{ar:'أَشتَكي لِوالِدَيَّ فَوراً', 
                       en:'Complain to my parents immediately'}, c:false },
                ] },
              { q:{ar:'زَميلُكَ دَفَعَكَ في الطّابور. ماذا تَفعَل؟', 
                   en:'Your classmate pushed you in line. What do you do?'},
                opts:[
                  { t:{ar:'أَدفَعُهُ بِالمِثل', 
                       en:'Push him back'}, c:false },
                  { t:{ar:'أَسأَلُهُ بِلُطف: لِماذا فَعَلتَ ذلك؟', 
                       en:'Ask him kindly: why did you do that?'}, c:true },
                  { t:{ar:'أَصرُخُ في وَجهِه', 
                       en:'Yell in his face'}, c:false },
                ] },
              { q:{ar:'صَديقُكَ أَخَذَ قَلَمَكَ دونَ إِذن. ماذا تَقول؟', 
                   en:'Your friend took your pen without permission. What do you say?'},
                opts:[
                  { t:{ar:'«أَنتَ لِصّ! أَعِد قَلَمي فَوراً!»', 
                       en:'"You thief! Return my pen now!"'}, c:false },
                  { t:{ar:'«مِن فَضلِك، استَأذِن في المَرَّةِ القادِمَة»', 
                       en:'"Please, ask permission next time"'}, c:true },
                  { t:{ar:'أَسكُتُ ولا أَتَكَلَّم مَعَهُ أَبَداً', 
                       en:'Stay silent and never speak to him'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'صَديقُكَ نَسِيَ مَوعِدَكُما وذَهَبَ مع غَيرِك. ماذا تَفعَل؟', 
                   en:'Your friend forgot your appointment and went with someone else. What do you do?'},
                opts:[
                  { t:{ar:'أَقاطِعُهُ ولا أُكَلِّمُهُ', 
                       en:'Cut him off and don’t speak to him'}, c:false },
                  { t:{ar:'أَعفو عَنهُ وأُذَكِّرُهُ بِلُطف', 
                       en:'Pardon him and remind him kindly'}, c:true },
                  { t:{ar:'أَنشُرُ سِرَّهُ انتِقاماً', 
                       en:'Spread his secret in revenge'}, c:false },
                ] },
              { q:{ar:'والِدَتُكَ رَفَضَت طَلَبَكَ لِشِراءِ لُعبَةٍ جَديدَة. ماذا تَفعَل؟', 
                   en:'Your mother refused your request to buy a new toy. What do you do?'},
                opts:[
                  { t:{ar:'أَغضَبُ وأَصرُخ', 
                       en:'Get angry and yell'}, c:false },
                  { t:{ar:'أَكظِمُ غَيظي وأَحتَرِمُ قَرارَها', 
                       en:'Restrain my anger and respect her decision'}, c:true },
                  { t:{ar:'أَبكي حتّى تُوافِق', 
                       en:'Cry until she agrees'}, c:false },
                ] },
              { q:{ar:'أُختُكَ أَكَلَت حِصَّتَكَ مِن الحَلوى. كيفَ تَتَصَرَّف؟', 
                   en:'Your sister ate your portion of sweets. How do you act?'},
                opts:[
                  { t:{ar:'أَصرُخُ وأَضرِبُها', 
                       en:'Yell and hit her'}, c:false },
                  { t:{ar:'أَصبِرُ وأَسامِحُها', 
                       en:'Be patient and forgive her'}, c:true },
                  { t:{ar:'آخُذُ حِصَّتَها في المَرَّةِ القادِمَة', 
                       en:'Take her portion next time'}, c:false },
                ] },
            ]
          },
          { kind:'mcq', points:30,
            items: [
              { q:{ar:'مُعَلِّمُكَ وَبَّخَكَ أَمامَ الصَّفّ بِسَبَبِ خَطَأٍ لَم تَفعَلهُ. ماذا تَفعَل؟', 
                   en:'Your teacher scolded you in front of class for an error you didn’t make. What do you do?'},
                opts:[
                  { t:{ar:'أَصبِرُ ثُمَّ أُوَضِّحُ لَهُ بِأَدَب', 
                       en:'Be patient then clarify to him politely'}, c:true },
                  { t:{ar:'أَرُدُّ عَلَيهِ بِفَظاظَة', 
                       en:'Respond to him rudely'}, c:false },
                  { t:{ar:'أَتَرُكُ الصَّفَّ غاضِباً', 
                       en:'Leave class angrily'}, c:false },
                ] },
              { q:{ar:'جارُكَ رَمى كُرَتَهُ في حَديقَتِكُم ثُمَّ دَخَلَ دونَ إِذن. ماذا تَقول؟', 
                   en:'Your neighbor threw his ball in your yard then entered without permission. What do you say?'},
                opts:[
                  { t:{ar:'«لا تَدخُل مَرَّةً أُخرى أَبَداً!»', 
                       en:'"Never enter again!"'}, c:false },
                  { t:{ar:'«تَفَضَّل، لَكِن مِن فَضلِك استَأذِن في المَرَّةِ القادِمَة»', 
                       en:'"Go ahead, but please ask permission next time"'}, c:true },
                  { t:{ar:'«سَأَحتَفِظُ بِكُرَتِك عِقاباً لَك»', 
                       en:'"I’ll keep your ball as punishment"'}, c:false },
                ] },
            ]
          },
        ]
      },

      /* 6. MAZE */
      { id:'maze', icon:'🧩', kind:'maze', title:{ ar:'الأَلغاز', en:'Puzzles' },
        levels: [
          { kind:'maze', points:30, sizes:[5,7,9] },
          { kind:'maze', points:30, sizes:[7,9,11] },
          { kind:'maze', points:30, sizes:[9,11,13] },
        ]
      },
    ],
  },

  /* ───── ROOM 5: Treasures — 6 colorful stickers ───── */
  treasures: [
    { icon:'🏅', color:'#27AE60', title:{ar:'وِسامُ الحِلم',     en:'Forbearance Medal' } },
    { icon:'🕊️', color:'#1ABC9C', title:{ar:'طائِرُ السَّلام',      en:'Peace Dove' } },
    { icon:'🌟', color:'#F4D03F', title:{ar:'نَجمَةُ الحَليم', en:'Star of the Forbearing' } },
    { icon:'💚', color:'#2980B9', title:{ar:'قَلبُ العَفو',     en:'Heart of Pardon' } },
    { icon:'👑', color:'#E67E22', title:{ar:'تاجُ الصَّبر',    en:'Crown of Patience' } },
    { icon:'🤲', color:'#8E44AD', title:{ar:'يَدُ الرَّحمَة',    en:'Hand of Mercy' } },
  ],

  /* ───── HOUSE ICON (certificate seal) ───── */
  icon: '🕊️',

  /* ───── MAGIC MIX — daily actions ───── */
  magicMixTitle: { ar:'كيفَ تَعيشُ الحِلمَ كُلَّ يوم؟', en:'How do you live forbearance every day?' },
  formulaEq: { ar:'كَظم + عَفو + إِحسان = حَليم 🏆', en:'Restraint + Pardon + Kindness = Forbearing 🏆' },
  magicMix: [
    { icon:'🛑', title:{ar:'توَقَّف قَبلَ أن تَتَكَلَّم',en:'Stop before you speak'},
      body:{ar:'عِندَما تَغضَب، عُدَّ إلى خَمسَة قَبلَ الكَلام — ستَجِدُ الغَضَبَ خَفَّ!',en:'When angry, count to five before speaking — you’ll find anger lessened!'} },
    { icon:'💚', title:{ar:'اعفُ عَنِ الصَّغائِر',en:'Pardon small things'},
      body:{ar:'كُلَّ يومٍ اعفُ عَن خَطَأٍ صَغيرٍ — سَيَصيرُ العَفوُ عادَةً لَك!',en:'Every day pardon a small error — forgiveness will become your habit!'} },
    { icon:'🤲', title:{ar:'تَذَكَّر عَفوَ اللهِ عَنك',en:'Remember Allah’s pardon for you'},
      body:{ar:'قَبلَ أن تَنتَقِمَ قُل: «اللهُ عَفا عَن أَخطائي الكَثيرَة — فَلأَعفُ أَنا!»',en:'Before revenge say: "Allah pardoned my many errors — so let me pardon!"'} },
    { icon:'😊', title:{ar:'ابتَسِم في وَجهِ مَن جَفاك',en:'Smile at who was harsh'},
      body:{ar:'حاوِل أن تَبتَسِمَ لِمَن أَساءَ إِليكَ — الابتِسامَةُ تُطفِئُ النّار!',en:'Try to smile at who wronged you — a smile extinguishes fire!'} },
    { icon:'🌟', title:{ar:'اطلُب مِن اللهِ الحِلم',en:'Ask Allah for forbearance'},
      body:{ar:'قُل كُلَّ صَباح: «اللَّهُمَّ ارزُقني حِلماً وصَبراً وعَفواً»',en:'Say every morning: "O Allah, grant me forbearance, patience, and pardon"'} },
    { icon:'🏆', title:{ar:'فَكِّر في الجائِزَة',en:'Think of the prize'},
      body:{ar:'تَذَكَّر: «مَن كَظَمَ غَيظَهُ اختارَ مِن الحُورِ ما شاء!» — أَلَيسَت تَستَحِقُّ الصَّبر؟',en:'Remember: "Who restrains rage chooses whichever houri he wishes!" — isn’t it worth patience?'} },
  ],

  /* ───── CERTIFICATE TEXT ───── */
  certificate: {
    subtitle: { ar:'تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَةَ بَيتِ الحِلم', en:'Awarded to those who completed the House of Forbearance' },
    statement: { ar:'لإتقانِهِ/إتقانِها <b>كَظمَ الغَيظِ والعَفوَ عَنِ النّاسِ والإِحسانَ إلى المُسيء</b> — اقتِداءً بِالنَّبيِّ ﷺ، ومُعاوِيَةَ بنِ أَبي سُفيان، والأَحنَفِ بنِ قَيس.',
                 en:'For mastering <b>restraining anger, pardoning people, and kindness to wrongdoers</b> — following the Prophet ﷺ, Mu\'awiyah ibn Abi Sufyan, and al-Ahnaf ibn Qays.' },
  },

};
