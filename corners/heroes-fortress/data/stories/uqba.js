/* data/stories/uqba.js — Heroes · Uqba ibn Nafi — sources: سير أعلام النبلاء · الكامل في التاريخ (ابن الأثير) · البداية والنهاية · إسلام ويب · الدرر السنية */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.uqba = [
  { icon:'🏙️', scene:'tree', character:'🕌',
    title:{ ar:'الوادي الذي صار مدينة', en:'The Valley That Became a City' },
    pages:[
      {
       "scene": "desert",
       "character": "🐎",
       "text": {
        "ar": "وُلِدَ <b>عقبةُ بنُ نافعٍ الفِهريّ</b> في زمنِ النبيِّ ﷺ، ونشأَ في بيئةِ الصحابة، وخرجَ شابّاً مع <b>عمرِو بنِ العاص</b> في فتحِ مصر، فتعلّمَ الشجاعةَ والتدبير. ثمّ ولّاه الخليفةُ <b>معاويةُ بنُ أبي سفيان</b> أمرَ إفريقيّةَ سنةَ ٥٠هـ، وأرسلَ معه نحوَ عشرةِ آلافِ مقاتل.<br><br>كانت جيوشُ المسلمينَ قبلَه تدخلُ تلك البلادَ ثمّ ترجع، فيعودُ أهلُها إلى ما كانوا عليه. فرأى عقبةُ أنّ الدعوةَ تحتاجُ إلى <b>بيتٍ ثابت</b>: مدينةٍ يستقرُّ فيها المسلمون، ويعرفُ الناسُ منها الإسلامَ عن قُرب. واختارَ لها مكاناً بعيداً عن شاطئِ البحر، حتى لا تصلَ إليها سفنُ الروم بسهولة.",
        "en": "<b>Uqba ibn Nafi al-Fihri</b> was born in the time of the Prophet ﷺ and grew up among the companions. As a young man he went out with <b>Amr ibn al-As</b> in the opening of Egypt, where he learned courage and good planning. Later the caliph <b>Mu'awiya ibn Abi Sufyan</b> put him in charge of Ifriqiya in 50 AH and sent about ten thousand fighters with him.<br><br>Before him, Muslim armies would enter those lands and then return, and the people would go back to how they had been. Uqba saw that calling people to Islam needed <b>a settled home</b>: a city where Muslims would stay, so people could come to know Islam up close. He chose a spot far from the seashore, so that Byzantine ships could not easily reach it."
       }
      },
      { scene:'tree', character:'🌳',
        text:{ ar:'أرادَ القائدُ <b>عقبةُ بنُ نافع</b> أن يبنيَ للمسلمينَ في <b>إفريقيّة</b> (تونسَ اليوم) مدينةً يسكنونها، يتعلّمونَ فيها دينَهم، ويخرجونَ منها لنشرِ الخير، فلا يكونوا ضيوفاً عابرين. فاختارَ <b>وادياً</b> كثيرَ الأشجار، لكنّه كان مملوءاً بـ<b>السِّباعِ والحيّاتِ</b> والوحوش! تعجّبَ أصحابُه: كيف نبني في مكانٍ كهذا؟<br><br>وكان عقبةُ رجلاً صالحاً <b>مستجابَ الدعوة</b>. فوقفَ ونادى بصوتٍ عالٍ — كما يروي الذهبيُّ في ترجمتِه —: <b>إنّا نازلون، فاظعنوا</b> (ارحلوا)! فخرجتِ الوحوشُ من جحورِها هاربةً، والناسُ ينظرونَ متعجّبين! ثمّ <b>بنى عقبةُ مدينةَ القيروان</b> نحوَ سنةِ ٥٠هـ، وأسكنَ فيها الناس، وبنى في وسطِها <b>مسجدَها الجامع</b>. وصارتِ القيروانُ بعد ذلك منارةً للعلمِ يقصدُها العلماءُ من كلِّ مكان، ولا يزالُ <b>جامعُ عقبة</b> قائماً يُرفَعُ فيه الأذانُ إلى اليوم!',
          en:'The commander <b>Uqba ibn Nafi</b> wanted to build for the Muslims in <b>Ifriqiya</b> (today’s Tunisia) a city to live in, learn their religion, and set out from to spread good, rather than being passing guests. He chose a <b>valley</b> thick with trees — but it was full of <b>beasts, snakes</b> and wild animals! His companions wondered: how can we build in a place like this?<br><br>Uqba was a righteous man <b>whose prayers were answered</b>. He stood and called out loudly — as adh-Dhahabi reports in his biography —: <b>We are settling here, so depart!</b> The animals came out of their dens fleeing while people watched in amazement! Then <b>Uqba built the city of Kairouan</b> around 50 AH, settled people in it, and built at its heart its <b>great mosque</b>. Kairouan later became a lighthouse of learning that scholars came to from everywhere, and <b>the Mosque of Uqba</b> still stands today, with the call to prayer raised in it!' },
        choice:{ q:{ar:'لماذا أرادَ عقبةُ أن يبنيَ مدينة؟',en:'Why did Uqba want to build a city?'},
          opts:[
            { t:{ar:'ليسكنَها المسلمونَ ويتعلّموا وينشروا الخير',en:'So Muslims could live there, learn, and spread good'},c:true,exp:{ar:'نعم! المدينةُ صارتْ منارةً للعلمِ قروناً طويلة.',en:'Yes! The city became a lighthouse of learning for many centuries.'} },
            { t:{ar:'ليتفاخرَ بها',en:'To show off'},c:false,exp:{ar:'لا، بل لخدمةِ المسلمينَ ونشرِ الدين.',en:'No — to serve the Muslims and spread the faith.'} },
            { t:{ar:'ليصطادَ الوحوش',en:'To hunt the animals'},c:false,exp:{ar:'لا، بل دعا اللهَ فخرجتِ الوحوشُ من الوادي.',en:'No — he called and the animals left the valley.'} },
          ] } },
      {
       "scene": "mosque",
       "character": "🧱",
       "text": {
        "ar": "عملَ المسلمونَ في بناءِ القيروانِ نحوَ <b>خمسِ سنين</b>، يقطعونَ الأشجارَ ويرفعونَ الجدران، والقائدُ بينهم يعملُ ويُشرف. وكان أوّلُ ما خطَّه عقبةُ <b>المسجد</b>، واجتهدَ هو وأصحابُه في تحديدِ <b>القِبلة</b> حتى تكونَ صلاةُ أهلِ المدينةِ متّجهةً إلى الكعبةِ تماماً. ومعنى «القيروان» في اللغة: <b>المكانُ الذي تنزلُ فيه القافلةُ والجيش</b>.<br><br>فما الدرسُ لك؟ أنّ الأعمالَ العظيمةَ تبدأُ بنيّةٍ صالحةٍ ودعاء، ثمّ تحتاجُ إلى صبرٍ وعملٍ يوماً بعدَ يوم. ابدأْ ببناءِ شيءٍ نافع — عادةٍ طيّبةٍ أو مكتبةٍ صغيرةٍ في بيتك — واجعلْ <b>اللهَ في قلبِه</b> كما جعلَ عقبةُ المسجدَ في قلبِ مدينتِه.",
        "en": "The Muslims worked on building Kairouan for about <b>five years</b>, cutting trees and raising walls, with their commander among them working and overseeing. The first thing Uqba marked out was <b>the mosque</b>, and he and his companions took great care in fixing the <b>qibla</b>, so that the city's prayers would face the Kaaba exactly. The word \"Kairouan\" means <b>a place where a caravan or an army makes camp</b>.<br><br>What is the lesson for you? Great works begin with a good intention and a prayer, and then they need patience and effort day after day. Start building something useful — a good habit, or a small library in your home — and put <b>Allah at its heart</b>, just as Uqba put the mosque at the heart of his city."
       }
      }
    ],
    quiz:[
      { q:{ar:'ماذا كان في الوادي قبلَ بناءِ القيروان؟',en:'What was in the valley before Kairouan was built?'},
        opts:[ {t:{ar:'قصورٌ كبيرة',en:'Big palaces'},c:false}, {t:{ar:'سباعٌ وحيّاتٌ ووحوش',en:'Beasts, snakes and wild animals'},c:true}, {t:{ar:'بحرٌ واسع',en:'A wide sea'},c:false} ] },
      { q:{ar:'ما الذي بناه عقبةُ في وسطِ المدينة؟',en:'What did Uqba build at the city’s heart?'},
        opts:[ {t:{ar:'سوقاً',en:'A market'},c:false}, {t:{ar:'قصراً لنفسِه',en:'A palace for himself'},c:false}, {t:{ar:'المسجدَ الجامع',en:'The great mosque'},c:true} ] },
      { q:{ar:'في أيِّ بلدٍ تقعُ القيروانُ اليوم؟',en:'In which country is Kairouan today?'},
        opts:[ {t:{ar:'تونس',en:'Tunisia'},c:true}, {t:{ar:'الهند',en:'India'},c:false}, {t:{ar:'اليمن',en:'Yemen'},c:false} ] },
    ],
    moral:{ar:'البطلُ لا يمرُّ مروراً عابراً، بل يبني ما ينفعُ الناسَ بعده قروناً — ويبدأُ بالدعاءِ والتوكّلِ على الله.',en:'A hero does not just pass through; he builds what benefits people for centuries — beginning with prayer and trust in Allah.'},
    badge:{icon:'🏙️',title:{ar:'وِسامُ البنّاءِ المُبارَك',en:'Badge of the Blessed Builder'}},
    reflect:[ {ar:'ما الشيءُ النافعُ الذي يمكنُ أن تبنيَه في بيتِك أو مدرستِك؟',en:'What useful thing could you build at home or school?'}, {ar:'لماذا كان المسجدُ في قلبِ المدينة؟',en:'Why was the mosque at the heart of the city?'} ],
    didYouKnow:[ {ar:'ذكرَ الذهبيُّ أنّ عقبةَ أنشأَ القيروانَ وأسكنَها الناس، وأنّه كان مُجابَ الدعوة — المصدر: سير أعلام النبلاء',en:'Adh-Dhahabi mentions that Uqba founded Kairouan, settled people in it, and that his prayers were answered — Source: Siyar A‘lam an-Nubala’'}, {ar:'جامعُ عقبةَ في القيروانِ من أقدمِ المساجدِ في شمالِ إفريقيا — المصدر: إسلام ويب (القيروان درّة العمارة الإسلامية)',en:'The Mosque of Uqba in Kairouan is among the oldest mosques in North Africa — Source: IslamWeb (Kairouan, Jewel of Islamic Architecture)'} ],
  },

  { icon:'🌊', scene:'sea', character:'🐎',
    title:{ ar:'يا ربِّ، لولا هذا البحر', en:'O Lord, Were It Not for This Sea' },
    pages:[
      {
       "scene": "mosque",
       "character": "👨‍👦",
       "text": {
        "ar": "بعدَ سنواتٍ من بناءِ القيروان، عادَ عقبةُ والياً على إفريقيّةَ سنةَ ٦٢هـ، وقد اشتاقَ قلبُه إلى أن يحملَ الإسلامَ إلى أبعدِ أرضٍ في المغرب. فجمعَ أولادَه قبلَ أن يخرج، وأوصاهم بتقوى اللهِ وتعلُّمِ القرآنِ والعلم، وأخبرَهم أنّه باعَ نفسَه لله، وأنّه لا يدري أيراهم بعد يومِه هذا أم لا.<br><br>ثمّ خرجَ بجيشِه يقطعُ بلادَ <b>المغرب</b> مدينةً بعدَ مدينة، يدعو أهلَها إلى التوحيد، ويدخلُ في الإسلامِ كثيرٌ من <b>البربر</b>، حتى بلغَ أقصى البلادِ في الغرب.",
        "en": "Years after building Kairouan, Uqba returned as governor of Ifriqiya in 62 AH, his heart longing to carry Islam to the farthest land of the Maghrib. Before setting out, he gathered his children and advised them to fear Allah and to learn the Qur'an and knowledge. He told them that he had sold himself to Allah, and that he did not know whether he would see them again after that day.<br><br>Then he set out with his army across the lands of the <b>Maghrib</b>, city after city, calling their people to the Oneness of Allah. Many of the <b>Berbers</b> entered Islam, until he reached the farthest lands of the west."
       }
      },
      { scene:'sea', character:'🌊',
        text:{ ar:'سارَ <b>عقبةُ بنُ نافع</b> بجيشِه غرباً شهوراً طويلة، يقطعُ الصحارى والجبالَ والوديان، يدعو الناسَ إلى الإسلام، ويُعلّمُهم أنّ اللهَ واحدٌ لا شريكَ له. وكلّما وصلَ إلى أرضٍ قال: فلنمضِ إلى ما بعدها! لم يكن يطلبُ مالاً ولا شهرة، بل كان قلبُه مُعلّقاً بنشرِ كلمةِ «لا إله إلّا الله».<br><br>حتى وصلَ يوماً إلى مكانٍ لم يجدْ بعده أرضاً: <b>البحرُ المحيطُ</b> العظيم (المحيطُ الأطلسيّ)، أمواجُه تمتدُّ إلى ما لا نهاية! فوقفَ عقبةُ على الشاطئ، ورفعَ بصرَه إلى السماء، وقال كلمتَه الخالدة: <b>«يا ربِّ، لولا هذا البحرُ لمضيتُ في البلادِ مجاهداً في سبيلك»</b>. لم يقلْ: لقد تعبت! ولا: يكفيني ما فعلت! بل قال: لو كانتْ هناك أرضٌ لواصلت! هذه هي <b>الهمّةُ العالية</b> التي لا تقفُ إلّا حيث تنتهي الأرض. واللهُ يقول: ﴿ وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ﴾.',
          en:'<b>Uqba ibn Nafi</b> marched west with his army for many long months, crossing deserts, mountains and valleys, inviting people to Islam and teaching them that Allah is One with no partner. Whenever he reached a land, he said: Let us go on to what lies beyond! He sought neither wealth nor fame; his heart was set on spreading "There is no god but Allah."<br><br>Until one day he reached a place with no land beyond it: <b>the great Ocean</b> (the Atlantic), its waves stretching endlessly! Uqba stood on the shore, raised his eyes to the sky, and said his timeless words: <b>"O Lord, were it not for this sea, I would go on through the lands striving in Your path."</b> He did not say: I am tired! Nor: what I have done is enough! He said: if there were land, I would keep going! This is <b>high resolve</b> that stops only where the earth ends. And Allah says: "Those who strive for Us — We will surely guide them to Our ways." (Al-Ankabut 69)' },
        choice:{ q:{ar:'ماذا تدلُّ عليه كلمةُ عقبةَ عند البحر؟',en:'What do Uqba’s words at the sea show?'},
          opts:[
            { t:{ar:'أنّه تعِبَ ويريدُ الراحة',en:'That he was tired and wanted rest'},c:false,exp:{ar:'لا، بل قال إنّه سيواصلُ لو وجدَ أرضاً.',en:'No — he said he would continue if there were land.'} },
            { t:{ar:'أنّه يحبُّ البحر',en:'That he loved the sea'},c:false,exp:{ar:'ليس هذا المقصود، بل همّتُه في نشرِ الخير.',en:'That’s not the point — it shows his resolve to spread good.'} },
            { t:{ar:'همّتَه العاليةَ في نشرِ الإسلام',en:'His high resolve to spread Islam'},c:true,exp:{ar:'نعم! لم يكن يوقفُه إلّا البحر.',en:'Yes! Only the sea could stop him.'} },
          ] } },
      {
       "scene": "sea",
       "character": "🐎",
       "text": {
        "ar": "ويذكرُ المؤرّخونَ أنّ عقبةَ لم يكتفِ بالوقوفِ على الشاطئ، بل <b>أدخلَ فرسَه في البحرِ حتى بلغَ الماءُ صدرَها</b>، كأنّه يقول: هذا آخرُ ما أستطيعُ أن أصلَ إليه! ثمّ رجعَ بجيشِه شرقاً نحوَ القيروان، وقد وصلَ الإسلامُ معه إلى أقصى الأرض.<br><br>وأنت يا صديقي، ما «البحرُ» الذي ستصلُ إليه؟ ربّما حفظُ جزءٍ من القرآن، أو قراءةُ كتابٍ صعب، أو برُّ والديك كلَّ يوم. لا تتوقّفْ عند أوّلِ تعب، بل امشِ حتى <b>آخرِ ما تستطيع</b>، وقلْ في قلبك: يا ربِّ، لو استطعتُ أكثرَ لفعلت.",
        "en": "Historians mention that Uqba did not merely stand on the shore: he <b>rode his horse into the sea until the water reached its chest</b>, as if to say: this is the farthest I am able to reach! Then he turned back east with his army toward Kairouan, having carried Islam with him to the edge of the land.<br><br>And you, my friend — what \"sea\" will you reach? Perhaps memorizing a part of the Qur'an, finishing a difficult book, or being good to your parents every day. Do not stop at the first sign of tiredness; keep walking to <b>the very limit of what you can do</b>, and say in your heart: O Lord, if I could do more, I would."
       }
      }
    ],
    quiz:[
      { q:{ar:'أيُّ بحرٍ وقفَ عنده عقبة؟',en:'Which sea did Uqba stand at?'},
        opts:[ {t:{ar:'المحيطُ الأطلسيّ',en:'The Atlantic Ocean'},c:true}, {t:{ar:'البحرُ الأحمر',en:'The Red Sea'},c:false}, {t:{ar:'نهرُ دجلة',en:'The Tigris'},c:false} ] },
      { q:{ar:'ماذا قال عقبةُ عند البحر؟',en:'What did Uqba say at the sea?'},
        opts:[ {t:{ar:'لنرجعْ إلى بيوتِنا',en:'Let us go home'},c:false}, {t:{ar:'يا ربِّ، لولا هذا البحرُ لمضيتُ في البلاد',en:'O Lord, were it not for this sea, I would go on'},c:true}, {t:{ar:'أريدُ المال',en:'I want wealth'},c:false} ] },
      { q:{ar:'ما الذي كان يطلبُه عقبةُ في رحلتِه؟',en:'What was Uqba seeking on his journey?'},
        opts:[ {t:{ar:'الشهرة',en:'Fame'},c:false}, {t:{ar:'الذهب',en:'Gold'},c:false}, {t:{ar:'نشرَ كلمةِ لا إله إلّا الله',en:'Spreading "There is no god but Allah"'},c:true} ] },
    ],
    moral:{ar:'الهمّةُ العاليةُ لا تقولُ «تعبت»، بل تقولُ «لو استطعتُ لواصلت» — ومن جاهدَ في اللهِ هداه سبُلَه.',en:'High resolve doesn’t say "I’m tired" but "if I could, I would continue" — whoever strives for Allah, He guides to His ways.'},
    badge:{icon:'🌊',title:{ar:'وِسامُ الهمّةِ حتى المحيط',en:'Badge of Resolve to the Ocean'}},
    reflect:[ {ar:'متى شعرتَ بالتعبِ في عملٍ خيّر؟ كيف تتذكّرُ همّةَ عقبةَ لتُكمل؟',en:'When have you felt tired in a good deed? How can Uqba’s resolve help you finish?'}, {ar:'ما «المحيطُ» الذي تحلمُ أن تصلَ إليه في العلمِ أو الخير؟',en:'What "ocean" do you dream of reaching in learning or good deeds?'} ],
    didYouKnow:[ {ar:'ذكرَ ابنُ الأثيرِ أنّ عقبةَ بلغَ ماليانَ ورأى البحرَ المحيطَ فقال: «يا ربِّ لولا هذا البحرُ لمضيتُ في البلادِ مجاهداً في سبيلك» — المصدر: الكامل في التاريخ',en:'Ibn al-Athir mentions that Uqba reached the Ocean and said: "O Lord, were it not for this sea, I would go on through the lands striving in Your path" — Source: Al-Kamil fi at-Tarikh'}, {ar:'تُروى هذه الكلمةُ بألفاظٍ مختلفةٍ في الكتبِ والخطب، وأوثقُها ما في كتبِ التاريخِ المعتمدة — المصدر: الكامل في التاريخ · البداية والنهاية',en:'These words are told in different wordings in books and sermons; the most reliable is in the standard histories — Source: Al-Kamil · Al-Bidaya wa an-Nihaya'} ],
  },

  { icon:'⭐', scene:'desert', character:'🤝',
    title:{ ar:'العفوُ قبلَ الشهادة', en:'Forgiveness Before Martyrdom' },
    pages:[
      {
       "scene": "desert",
       "character": "🏜️",
       "text": {
        "ar": "كان <b>أبو المهاجرِ دينار</b> قد تولّى أمرَ إفريقيّةَ في الفترةِ التي عُزِلَ فيها عقبة، ثمّ لمّا رجعَ عقبةُ والياً كان بينهما ما يكونُ أحياناً بين القادةِ من اختلافٍ في الرأيِ والمعاملة. ومع ذلك خرجَ أبو المهاجرِ مع الجيشِ في رحلتِه الطويلةِ إلى المحيط.<br><br>وكان في تلك البلادِ زعيمٌ من البربرِ اسمُه <b>كُسَيلة</b>، غضبَ من عقبة، فجمعَ أنصارَه ومعهم الرومُ، وانتظرَ الفرصة. فلمّا رأى عقبةَ راجعاً في جماعةٍ صغيرةٍ — نحوَ ثلاثمئةِ رجل — خرجَ عليه بجيشٍ كبير.",
        "en": "<b>Abu al-Muhajir Dinar</b> had governed Ifriqiya during the period when Uqba was removed from office. When Uqba returned as governor, there was between them the kind of disagreement in opinion and treatment that sometimes happens between leaders. Even so, Abu al-Muhajir went out with the army on its long journey to the Ocean.<br><br>In those lands was a Berber chief named <b>Kusayla</b>, who was angry with Uqba. He gathered his supporters, joined by the Byzantines, and waited for his chance. When he saw Uqba returning with a small group — about three hundred men — he came out against him with a large army."
       }
      },
      { scene:'desert', character:'🤝',
        text:{ ar:'في طريقِ عودةِ <b>عقبةَ بنِ نافع</b> من المحيطِ سنةَ ٦٣هـ، كان قد أرسلَ أكثرَ جيشِه أمامَه إلى القيروان، وبقيَ معه عددٌ قليلٌ من أصحابِه. وكان معه قائدٌ مسلمٌ آخرُ اسمُه <b>أبو المهاجر</b>، وكان بينهما <b>خلافٌ قديم</b> جعلَ عقبةَ يُبقيه عنده محبوساً مقيّداً. وفجأةً خرجَ عليهم عدوٌّ بجمعٍ كبيرٍ عند مكانٍ يُقالُ له <b>تَهُودة</b>.<br><br>عرفَ عقبةُ أنّها ساعةُ اللقاءِ بالله. فماذا فعل؟ لم يُفكّرْ في الخلافِ القديم، بل <b>أطلقَ أبا المهاجرِ وعفا عنه</b>، وقال له: <b>«الحقْ بالمسلمينَ وقُمْ بأمرِهم، وأنا أغتنمُ الشهادة»</b> — أراد أن ينجوَ أخوه ويقودَ المسلمين! فقال أبو المهاجر: <b>«وأنا أيضاً أريدُ الشهادة»</b>. فوقفا معاً كتفاً إلى كتف، أخوينِ صافيَي القلب، حتى <b>استُشهِدا جميعاً</b> مع أصحابِهما. ﴿ مِنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ ﴾. ولا يزالُ المكانُ الذي دُفنَ فيه يُعرَفُ إلى اليومِ باسمِ <b>«سيدي عقبة»</b> في الجزائر.',
          en:'On <b>Uqba ibn Nafi</b>’s way back from the Ocean in 63 AH, he had sent most of his army ahead to Kairouan and kept only a few companions with him. With him was another Muslim commander named <b>Abu al-Muhajir</b>; there had been an <b>old disagreement</b> between them, so Uqba kept him confined in chains. Suddenly an enemy came out against them in great numbers at a place called <b>Tahuda</b>.<br><br>Uqba knew it was the hour of meeting Allah. What did he do? He did not think of the old quarrel — he <b>freed Abu al-Muhajir and forgave him</b>, saying: <b>"Join the Muslims and lead them, and I will seize martyrdom"</b> — he wanted his brother to be safe and lead the Muslims! Abu al-Muhajir said: <b>"I too want martyrdom."</b> So they stood together shoulder to shoulder, two brothers with clean hearts, until <b>both were martyred</b> with their companions. "Among the believers are men who were true to what they promised Allah." (Al-Ahzab 23) The place where he is buried is still known today as <b>"Sidi Uqba"</b> in Algeria.' },
        choice:{ q:{ar:'ماذا فعلَ عقبةُ مع أبي المهاجرِ في الساعةِ الأخيرة؟',en:'What did Uqba do with Abu al-Muhajir at the final hour?'},
          opts:[
            { t:{ar:'تركَه مقيّداً',en:'Left him in chains'},c:false,exp:{ar:'لا، بل أطلقَه وعفا عنه.',en:'No — he freed and forgave him.'} },
            { t:{ar:'أطلقَه وعفا عنه وطلبَ له النجاة',en:'Freed him, forgave him, and wished him safety'},c:true,exp:{ar:'نعم! القلبُ الصافي يعفو قبلَ أن يلقى ربَّه.',en:'Yes! A clean heart forgives before meeting its Lord.'} },
            { t:{ar:'هربَ وتركَه',en:'Fled and left him'},c:false,exp:{ar:'لا، بل ثبتا معاً حتى استُشهِدا.',en:'No — they stood firm together until martyred.'} },
          ] } },
      {
       "scene": "mosque",
       "character": "🌅",
       "text": {
        "ar": "لم تذهبْ تضحيةُ عقبةَ وأصحابِه سُدى. فبعدَ سنواتٍ قليلةٍ عادَ المسلمونَ بقيادةِ <b>زهيرِ بنِ قيسٍ البَلَويّ</b>، فهزموا كُسَيلةَ واستعادوا القيروان، ثمّ انتشرَ الإسلامُ في المغربِ كلِّه، وأحبَّه أهلُه حتى صاروا هم أنفسُهم حَمَلةً له إلى الأندلسِ وإفريقيا.<br><br>وأجملُ ما بقيَ من قصّةِ عقبةَ تلك اللحظة: رجلٌ يعلمُ أنّه سيلقى ربَّه، فيُطلقُ أخاه ويعفو عنه ويتمنّى له النجاة. فإذا غضبتَ من صديقٍ أو أخ، فلا تنتظرْ حتى يفوتَ الوقت؛ <b>سامحْ اليوم</b>، فالقلوبُ الصافيةُ هي أحبُّ القلوبِ إلى الله.",
        "en": "The sacrifice of Uqba and his companions was not in vain. A few years later the Muslims returned under <b>Zuhayr ibn Qays al-Balawi</b>, defeated Kusayla and recovered Kairouan. Then Islam spread through the whole Maghrib, and its people came to love it so much that they themselves carried it on to al-Andalus and Africa.<br><br>The most beautiful thing that remains of Uqba's story is that moment: a man who knows he is about to meet his Lord, and so he frees his brother, forgives him, and hopes for his safety. So if you are angry with a friend or a brother, do not wait until it is too late; <b>forgive today</b>, for clean hearts are the hearts most beloved to Allah."
       }
      }
    ],
    quiz:[
      { q:{ar:'أين استُشهِدَ عقبةُ بنُ نافع؟',en:'Where was Uqba ibn Nafi martyred?'},
        opts:[ {t:{ar:'في مكّة',en:'In Makkah'},c:false}, {t:{ar:'عند تَهُودةَ في المغرب',en:'At Tahuda in the Maghrib'},c:true}, {t:{ar:'في بغداد',en:'In Baghdad'},c:false} ] },
      { q:{ar:'ماذا قال أبو المهاجرِ لعقبة؟',en:'What did Abu al-Muhajir tell Uqba?'},
        opts:[ {t:{ar:'وأنا أيضاً أريدُ الشهادة',en:'I too want martyrdom'},c:true}, {t:{ar:'لن أسامحَك',en:'I will never forgive you'},c:false}, {t:{ar:'سأهرب',en:'I will run away'},c:false} ] },
      { q:{ar:'ما اسمُ المكانِ الذي دُفنَ فيه عقبةُ اليوم؟',en:'What is the place where Uqba is buried called today?'},
        opts:[ {t:{ar:'جبلُ طارق',en:'Gibraltar'},c:false}, {t:{ar:'القيروان',en:'Kairouan'},c:false}, {t:{ar:'سيدي عقبة',en:'Sidi Uqba'},c:true} ] },
    ],
    moral:{ar:'أجملُ ما نلقى به اللهَ قلبٌ صافٍ لا يحملُ على أخيه شيئاً — فاعفُ وسامحْ ولا تؤجّل.',en:'The most beautiful thing to meet Allah with is a clean heart holding nothing against a brother — so forgive and don’t delay.'},
    badge:{icon:'⭐',title:{ar:'وِسامُ القلبِ الصافي عند اللقاء',en:'Badge of the Clean Heart at the End'}},
    reflect:[ {ar:'هل بينك وبين أحدٍ خلافٌ قديم؟ كيف تصالحُه اليوم؟',en:'Is there an old quarrel between you and someone? How can you make peace today?'}, {ar:'لماذا أرادَ عقبةُ أن ينجوَ أبو المهاجرِ ويقودَ المسلمين؟',en:'Why did Uqba want Abu al-Muhajir to survive and lead the Muslims?'} ],
    didYouKnow:[ {ar:'ذكرَ ابنُ الأثيرِ أنّ عقبةَ أطلقَ أبا المهاجرِ وقال: الحقْ بالمسلمين وقُمْ بأمرِهم وأنا أغتنمُ الشهادة، فقال: وأنا أيضاً أريدُ الشهادة — المصدر: الكامل في التاريخ',en:'Ibn al-Athir mentions that Uqba freed Abu al-Muhajir and said: Join the Muslims and lead them, I will seize martyrdom; he replied: I too want martyrdom — Source: Al-Kamil fi at-Tarikh'}, {ar:'قال ابنُ يونس: قُتِلَ عقبةُ سنةَ ثلاثٍ وستّين — المصدر: سير أعلام النبلاء',en:'Ibn Yunus said: Uqba was killed in the year 63 AH — Source: Siyar A‘lam an-Nubala’'} ],
  },
];
