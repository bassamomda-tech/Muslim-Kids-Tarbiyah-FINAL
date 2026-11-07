/* data/stories/urwa.js — Heroes · Urwa ibn az-Zubayr — sources: سير أعلام النبلاء (الذهبي) · حلية الأولياء (أبو نعيم) · تهذيب الكمال · صور من حياة التابعين (الباشا) · إسلام ويب */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.urwa = [
  { icon:'📖', scene:'madinah', character:'🧕',
    title:{ ar:'تلميذُ خالتِه عائشة', en:'The Student of His Aunt A’isha' },
    pages:[
      {
       "scene": "madinah",
       "character": "👦",
       "text": {
        "ar": "وُلِدَ <b>عروةُ</b> في المدينةِ المنوّرةِ في زمنِ الخلفاءِ الراشدين، والمدينةُ يومئذٍ مملوءةٌ بأصحابِ رسولِ اللهِ ﷺ: في المسجدِ يجلسُ العلماءُ منهم، وفي الطرقاتِ يمشي من رأى النبيَّ ﷺ وسمعَ منه. وكان أخوه الأكبرُ <b>عبدُ اللهِ بنُ الزبير</b> من أشجعِ الناسِ وأعبدِهم.<br><br>وكانت حُجرةُ خالتِه <b>عائشةَ</b> رضي الله عنها ملاصقةً لمسجدِ رسولِ الله ﷺ، وهي الحُجرةُ التي عاشَ فيها النبيُّ ﷺ ودُفنَ فيها. وكان عروةُ — لأنّها خالتُه — يدخلُ عليها ويجلسُ قريباً منها، فيسمعُ ما لا يسمعُه كثيرٌ من الناس.",
        "en": "<b>Urwa</b> was born in Madinah in the time of the Rightly Guided Caliphs, when the city was still full of the companions of the Messenger of Allah ﷺ: scholars among them sat in the mosque, and people who had seen the Prophet ﷺ and heard from him walked its streets. His older brother, <b>Abdullah ibn az-Zubayr</b>, was among the bravest and most devoted of people.<br><br>The room of his aunt <b>A'isha</b> was right beside the Mosque of the Messenger of Allah ﷺ — the very room where the Prophet ﷺ lived and where he is buried. Because she was his aunt, Urwa could visit her and sit close to her, hearing what many people never got to hear."
       }
      },
      { scene:'madinah', character:'📜',
        text:{ ar:'نشأ <b>عروةُ بنُ الزبير</b> في بيتٍ من أعظمِ بيوتِ الإسلام: أبوه <b>الزبيرُ</b> حواريُّ رسولِ الله ﷺ، وأمُّه <b>أسماءُ بنتُ أبي بكر</b>، وجدُّه أبو بكرٍ الصدّيق. لكنّ أعظمَ كنزٍ وجدَه قريباً منه كان خالتَه <b>أمَّ المؤمنينَ عائشة</b> رضي الله عنها، أعلمَ النساءِ بحديثِ رسولِ الله ﷺ.<br><br>فلزِمَها عروةُ يسألُها ويكتبُ ويحفظ، لا يتركُ حديثاً عندها إلّا تعلّمَه. وكان يقول: <b>«لقد رأيتُني قبلَ موتِ عائشةَ بأربعِ حِجَج وأنا أقول: لو ماتتِ اليومَ ما ندمتُ على حديثٍ عندها إلّا وقد وعيتُه»</b>. فصارَ من أعلمِ الناسِ بحديثِها، وأحدَ <b>الفقهاءِ السبعةِ في المدينة</b>.<br><br>وكان يقولُ لأبنائه: <b>«يا بَنيّ، تعلّموا العلم، فإنّكم إن تكونوا صغارَ قومٍ عسى أن تكونوا كبارَهم»</b> — فالعلمُ يرفعُ الصغيرَ حتى يصيرَ كبيراً.',
          en:'<b>Urwa ibn az-Zubayr</b> grew up in one of the greatest homes of Islam: his father <b>az-Zubayr</b> was the disciple of the Messenger of Allah ﷺ, his mother was <b>Asma’ bint Abi Bakr</b>, and his grandfather was Abu Bakr as-Siddiq. But the greatest treasure close to him was his aunt, the <b>Mother of the Believers A’isha</b>, the most knowledgeable woman in the hadith of the Messenger of Allah ﷺ.<br><br>Urwa stayed close to her, asking, writing and memorizing, leaving no hadith she had without learning it. He used to say: <b>"Four years before A’isha died, I found myself saying: if she died today I would regret no hadith of hers, for I have learned them all."</b> So he became one of those who knew her hadith best, and one of the <b>seven jurists of Madinah</b>.<br><br>He would tell his sons: <b>"My sons, learn knowledge, for if you are the youngest of a people today, perhaps you will be their leaders tomorrow"</b> — for knowledge raises the small until they become great.' },
        choice:{ q:{ar:'كيف استفادَ عروةُ من خالتِه عائشة؟',en:'How did Urwa benefit from his aunt A’isha?'},
          opts:[
            { t:{ar:'كان يزورُها للطعامِ فقط',en:'He only visited her for food'},c:false,exp:{ar:'لا، بل لزِمَها ليتعلّمَ حديثَها.',en:'No — he stayed close to learn her hadith.'} },
            { t:{ar:'لزِمَها يسألُ ويحفظُ حتى وعى حديثَها كلَّه',en:'He stayed close, asking and memorizing until he learned all her hadith'},c:true,exp:{ar:'أحسنت! اغتنمَ القريبَ العالِمَ فصارَ فقيهاً كبيراً.',en:'Well done! He made the most of his learned relative and became a great jurist.'} },
            { t:{ar:'لم يتعلّمْ منها شيئاً',en:'He learned nothing from her'},c:false,exp:{ar:'لا، بل كان من أعلمِ الناسِ بحديثِها.',en:'No — he was among those who knew her hadith best.'} },
          ] } },
      {
       "scene": "pen",
       "character": "✍️",
       "text": {
        "ar": "وصارَ عروةُ بعدَ ذلك <b>معلّماً</b> يقصدُه الطلّابُ من كلِّ مكان. ومن أشهرِ تلاميذِه ابنُه <b>هشامُ بنُ عروة</b> والإمامُ <b>ابنُ شهابٍ الزُّهريّ</b>. ولو فتحتَ اليومَ صحيحَ البخاريِّ لوجدتَ مراراً كثيرةً هذا الإسناد: <b>«عن هشامِ بنِ عروة، عن أبيه، عن عائشة»</b> — فكثيرٌ من حديثِ عائشةَ وصلَ إلينا عن طريقِ عروة!<br><br>وكان من أوائلِ من جمعَ أخبارَ <b>سيرةِ النبيِّ ﷺ ومغازيه</b>. فتعلّمْ يا صديقي من عروة: اسألْ والديك وأجدادَك ومعلّميك، واكتبْ ما تتعلّم، فقد يجعلُ اللهُ علمَك هذا نوراً يصلُ إلى الناسِ بعدك بمئاتِ السنين.",
        "en": "Urwa later became <b>a teacher</b> whom students sought out from everywhere. Among his most famous students were his son <b>Hisham ibn Urwa</b> and Imam <b>Ibn Shihab az-Zuhri</b>. If you open Sahih al-Bukhari today, you will find this chain many, many times: <b>\"From Hisham ibn Urwa, from his father, from A'isha\"</b> — much of A'isha's hadith reached us through Urwa!<br><br>He was also among the first to gather the reports of <b>the Prophet's ﷺ life and campaigns</b>. So learn from Urwa, my friend: ask your parents, your grandparents and your teachers, and write down what you learn — Allah may make this knowledge of yours a light that reaches people hundreds of years after you."
       }
      }
    ],
    quiz:[
      { q:{ar:'مَن جدُّ عروةَ لأمِّه؟',en:'Who was Urwa’s maternal grandfather?'},
        opts:[ {t:{ar:'عمرُ بنُ الخطّاب',en:'Umar ibn al-Khattab'},c:false}, {t:{ar:'أبو بكرٍ الصدّيق',en:'Abu Bakr as-Siddiq'},c:true}, {t:{ar:'عثمانُ بنُ عفّان',en:'Uthman ibn Affan'},c:false} ] },
      { q:{ar:'ماذا قال عروةُ قبلَ موتِ عائشةَ بأربعِ سنوات؟',en:'What did Urwa say four years before A’isha died?'},
        opts:[ {t:{ar:'لن أندمَ على حديثٍ عندها إلّا وقد وعيتُه',en:'I would regret no hadith of hers, for I learned them'},c:true}, {t:{ar:'لم أتعلّمْ شيئاً',en:'I learned nothing'},c:false}, {t:{ar:'سأتعلّمُ لاحقاً',en:'I will learn later'},c:false} ] },
      { q:{ar:'بماذا نصحَ عروةُ أبناءَه؟',en:'What did Urwa advise his sons?'},
        opts:[ {t:{ar:'اجمعوا المال',en:'Gather money'},c:false}, {t:{ar:'العبوا كثيراً',en:'Play a lot'},c:false}, {t:{ar:'تعلّموا العلمَ لتكونوا كبارَ قومِكم',en:'Learn knowledge so you may lead your people'},c:true} ] },
    ],
    moral:{ar:'العلمُ كنزٌ قريبٌ منك — اغتنمْ أهلَ العلمِ حولَك قبلَ أن يفوتَك ما عندهم.',en:'Knowledge is a treasure near you — make the most of the learned around you before what they have passes you by.'},
    badge:{icon:'📖',title:{ar:'وِسامُ التلميذِ الحريص',en:'Badge of the Eager Student'}},
    reflect:[ {ar:'مَن أكثرُ شخصٍ تتعلّمُ منه في عائلتِك؟',en:'Who in your family do you learn from the most?'}, {ar:'ما السؤالُ الذي تريدُ أن تسألَه لجدِّك أو جدّتِك؟',en:'What question would you like to ask your grandparent?'} ],
    didYouKnow:[ {ar:'قال عروة: «لو ماتتِ اليومَ ما ندمتُ على حديثٍ عندها إلّا وقد وعيتُه» — المصدر: سير أعلام النبلاء',en:'Urwa said: "If she died today I would regret no hadith of hers, for I have learned them" — Source: Siyar A’lam an-Nubala’'}, {ar:'الفقهاءُ السبعةُ في المدينةِ منهم عروةُ بنُ الزبيرِ وسعيدُ بنُ المسيّب — المصدر: تهذيب الكمال',en:'The seven jurists of Madinah included Urwa ibn az-Zubayr and Sa’id ibn al-Musayyib — Source: Tahdhib al-Kamal'} ],
  },
  { icon:'🏔️', scene:'desert', character:'🤲',
    title:{ ar:'«لئن ابتليتَ لقد عافيت»', en:'"If You Tested, You Also Gave Wellbeing"' },
    pages:[
      {
       "scene": "desert",
       "character": "🐪",
       "text": {
        "ar": "بعدَ أن كبُرَ عروةُ وصارَ من كبارِ علماءِ المدينة، دعاه الخليفةُ <b>الوليدُ بنُ عبدِ الملك</b> لزيارتِه في <b>دمشق</b>، عاصمةِ الخلافةِ في الشام. فخرجَ عروةُ في قافلةٍ طويلة، يقطعُ الصحراءَ أيّاماً بين المدينةِ والشام، والشمسُ حارّةٌ والطريقُ متعب.<br><br>وكان عروةُ في سفرِه كما هو في بيتِه: صائماً كثيراً، قائماً بالليل، ذاكراً للهِ في الطريق. لم يكن يعلمُ أنّ هذه الرحلةَ ستحملُ له امتحاناً من أصعبِ ما يمرُّ به إنسان.",
        "en": "When Urwa had grown older and become one of the senior scholars of Madinah, the caliph <b>al-Walid ibn Abd al-Malik</b> invited him to visit him in <b>Damascus</b>, the capital of the caliphate in Syria. Urwa set out in a long caravan, crossing the desert for days between Madinah and Syria under a hot sun on a tiring road.<br><br>On his journey Urwa was just as he was at home: fasting often, standing in prayer at night, remembering Allah along the way. He did not know that this trip would bring him one of the hardest tests a person can face."
       }
      },
      { scene:'desert', character:'🐎',
        text:{ ar:'سافرَ عروةُ إلى الشامِ ومعه ابنُه <b>محمد</b>. وفي الطريقِ أصابتْ رجلَه <b>الأَكِلة</b> — مرضٌ خطيرٌ يأكلُ اللحمَ وينتشر — فقال الأطبّاء: لا دواءَ لها إلّا القطع، وإلّا انتشرتْ في جسدِه كلِّه. فقُطِعتْ رجلُه، فصبرَ صبراً عجيباً. وفي السفرِ نفسِه سقطَ ابنُه محمدٌ بين الخيلِ فمات!<br><br>بلاءانِ عظيمانِ في سفرٍ واحد! فماذا قال عروة؟ لم يصرخْ ولم يعترضْ، بل قال: <b>﴿لَقَدْ لَقِينَا مِنْ سَفَرِنَا هَٰذَا نَصَبًا﴾</b>، ثم رفعَ يديه وقال: <b>«اللّهُمَّ لك الحمد، كانوا سبعةً فأخذتَ واحداً وأبقيتَ ستّة، وكانت لي أطرافٌ أربعةٌ فأخذتَ واحداً وأبقيتَ ثلاثة، فلئن ابتليتَ لقد عافيت، ولئن أخذتَ لقد أبقيت»</b>.<br><br>نظرَ عروةُ إلى <b>ما بقيَ</b> لا إلى ما ذهب! وكان يقرأُ رُبعَ القرآنِ كلَّ يومٍ ويقومُ به الليل، فلم يتركْه إلّا تلك الليلةَ من شدّةِ الألم، ثم عادَ إليه في الليلةِ التالية. فالصابرُ الشاكرُ لا يتركُ ربَّه في الشدّة.',
          en:'Urwa traveled to Syria with his son <b>Muhammad</b>. On the way, <b>gangrene</b> struck his leg — a dangerous disease that eats the flesh and spreads — and the doctors said: There is no cure but amputation, or it will spread through his whole body. So his leg was amputated, and he bore it with astonishing patience. On that same journey his son Muhammad fell among the horses and died!<br><br>Two great trials on one journey! What did Urwa say? He did not scream or object, but said: <b>"We have certainly met with fatigue on this journey of ours,"</b> then raised his hands and said: <b>"O Allah, to You be praise. They were seven and You took one and left six; I had four limbs and You took one and left three. If You have tested, You have also given wellbeing; and if You have taken, You have also left."</b><br><br>Urwa looked at <b>what remained</b>, not at what was gone! He used to read a quarter of the Qur’an every day and pray with it at night; he left it only that one night from the severity of the pain, then returned to it the next night. The patient and grateful never leave their Lord in hardship.' },
        choice:{ q:{ar:'ما سرُّ صبرِ عروةَ في هذا البلاء؟',en:'What was the secret of Urwa’s patience in this trial?'},
          opts:[
            { t:{ar:'أنّه لم يشعرْ بالألم',en:'He felt no pain'},c:false,exp:{ar:'لا، فقد تألّمَ حتى تركَ وِردَه ليلة، لكنّه صبر.',en:'No — he was in such pain he left his recitation one night, yet he was patient.'} },
            { t:{ar:'أنّه نظرَ إلى ما بقيَ من النعمِ فحمدَ الله',en:'He looked at the blessings that remained and praised Allah'},c:true,exp:{ar:'أحسنت! الشاكرُ يرى نعمَ اللهِ حتى في البلاء.',en:'Well done! The grateful see Allah’s blessings even in trials.'} },
            { t:{ar:'أنّه نسيَ ما حدث',en:'He forgot what happened'},c:false,exp:{ar:'لا، بل تذكّرَ نعمَ اللهِ فحمدَه.',en:'No — he remembered Allah’s blessings and praised Him.'} },
          ] } },
      {
       "scene": "madinah",
       "character": "🏡",
       "text": {
        "ar": "ويذكرُ المؤرّخونَ أنّ الأطبّاءَ عرضوا عليه قبلَ القطعِ شيئاً يُذهبُ وعيَه حتى لا يشعرَ بالألم، فأبى، لأنّه أحبَّ أن يبقى ذاكراً لربِّه حاضرَ القلب. ثمّ رجعَ عروةُ إلى المدينةِ برِجلٍ واحدة، فجاءَه الناسُ يُعزّونَه في ابنِه ورِجلِه، فوجدوه راضياً حامداً، لم يتغيّرْ لسانُه عن ذكرِ الله.<br><br>وهذا هو الدرسُ لنا: حين يُصيبُنا مرضٌ أو حزن، نتذكّرُ النعمَ الكثيرةَ التي ما زالتْ معنا. فإذا كُسرتْ يدُك فاحمدِ اللهَ على الأخرى، وإذا خسرتَ مباراةً فاحمدِ اللهَ على صحّتِك وأصدقائك. <b>القلبُ الشاكرُ يرى النعمةَ</b> حتى في أصعبِ الأيّام.",
        "en": "Historians mention that before the amputation the doctors offered him something that would take away his awareness so he would not feel the pain, but he refused, preferring to stay mindful of his Lord with a present heart. Then Urwa returned to Madinah on one leg. People came to console him for his son and his leg, and they found him content and full of praise; his tongue never stopped remembering Allah.<br><br>This is the lesson for us: when illness or sadness strikes, we remember the many blessings still with us. If you break one hand, praise Allah for the other; if you lose a match, praise Allah for your health and your friends. <b>A grateful heart sees blessings</b> even on the hardest days."
       }
      }
    ],
    quiz:[
      { q:{ar:'لماذا قُطِعتْ رجلُ عروة؟',en:'Why was Urwa’s leg amputated?'},
        opts:[ {t:{ar:'بسببِ الأَكِلةِ التي لا دواءَ لها إلّا القطع',en:'Because of gangrene curable only by amputation'},c:true}, {t:{ar:'بسببِ معركة',en:'Because of a battle'},c:false}, {t:{ar:'بسببِ سقوطٍ من جبل',en:'Because of a fall from a mountain'},c:false} ] },
      { q:{ar:'ماذا قال عروةُ بعد البلاء؟',en:'What did Urwa say after the trial?'},
        opts:[ {t:{ar:'هذا ظلم',en:'This is unfair'},c:false}, {t:{ar:'لن أُصلّيَ بعد اليوم',en:'I will not pray anymore'},c:false}, {t:{ar:'اللّهُمَّ لك الحمد',en:'O Allah, to You be praise'},c:true} ] },
      { q:{ar:'كم ليلةً تركَ عروةُ وِردَه من القرآن؟',en:'How many nights did Urwa leave his Qur’an portion?'},
        opts:[ {t:{ar:'شهراً كاملاً',en:'A whole month'},c:false}, {t:{ar:'ليلةً واحدةً فقط',en:'Only one night'},c:true}, {t:{ar:'تركَه إلى الأبد',en:'Forever'},c:false} ] },
    ],
    moral:{ar:'الصابرُ الشاكرُ ينظرُ إلى ما بقيَ من النعمِ لا إلى ما ذهب، فيحمدُ اللهَ في كلِّ حال.',en:'The patient and grateful look at the blessings that remain, not at what is gone, and praise Allah in every state.'},
    badge:{icon:'🏔️',title:{ar:'وِسامُ الحمدِ في الشدّة',en:'Badge of Praise in Hardship'}},
    reflect:[ {ar:'إذا فقدتَ لعبةً أو شيئاً تحبُّه، ماذا بقيَ لك من النعم؟',en:'If you lose a toy or something you love, what blessings do you still have?'}, {ar:'كيف تقولُ «الحمدُ لله» حتى حين تحزن؟',en:'How can you say "Alhamdulillah" even when you are sad?'} ],
    didYouKnow:[ {ar:'قال عروة: «فلئن ابتليتَ لقد عافيت، ولئن أخذتَ لقد أبقيت» — المصدر: سير أعلام النبلاء وحلية الأولياء',en:'Urwa said: "If You have tested, You have also given wellbeing; if You have taken, You have also left" — Source: Siyar A’lam an-Nubala’ & Hilyat al-Awliya’'}, {ar:'استشهدَ عروةُ بقولِ موسى عليه السلام: ﴿لَقَدْ لَقِينَا مِنْ سَفَرِنَا هَٰذَا نَصَبًا﴾ — المصدر: الكهف ٦٢',en:'Urwa quoted the words of Musa: "We have certainly met with fatigue on this journey of ours" — Source: Al-Kahf 62'} ],
  },
  { icon:'🌴', scene:'garden', character:'🍇',
    title:{ ar:'البستانُ المفتوحُ للناس', en:'The Garden Open to All' },
    pages:[
      {
       "scene": "palm",
       "character": "💧",
       "text": {
        "ar": "كانت المدينةُ المنوّرةُ مدينةَ <b>النخيلِ والبساتين</b>، يعيشُ أهلُها على التمر، وينتظرونَ موسمَ الرُّطَبِ كلَّ صيفٍ بفرحٍ كبير. وكان عروةُ قد سكنَ في آخرِ أمرِه في <b>وادي العقيق</b> قربَ المدينة، وحفرَ هناك بئراً عُرِفتْ باسمِه: <b>«بئرُ عروة»</b>، وكان الناسُ يمدحونَ ماءَها.<br><br>وفي ذلك الوادي الأخضرِ كانت النخلاتُ تتمايلُ بعناقيدِها الذهبيّة، والطيورُ تُغرّدُ بين سعفِها. نعمةٌ كبيرة، لكنّ النعمةَ — كما سترى — امتحانٌ أيضاً: هل يشكرُها صاحبُها أم ينساها؟",
        "en": "Madinah was a city of <b>palm trees and gardens</b>. Its people lived on dates and waited for the fresh-date season every summer with great joy. Late in his life Urwa lived in <b>the valley of al-Aqiq</b> near Madinah, and there he dug a well that became known by his name: <b>\"Urwa's Well\"</b>, whose water people praised.<br><br>In that green valley the palms swayed with their golden clusters and birds sang among the fronds. It was a great blessing — but a blessing, as you will see, is also a test: will its owner be thankful, or forget?"
       }
      },
      { scene:'garden', character:'🌴',
        text:{ ar:'كان لعروةَ بنِ الزبيرِ <b>بستانٌ جميلٌ</b> في المدينة، فيه نخيلٌ كثيرٌ يحملُ الرُّطَبَ الحلو. وكان أصحابُ البساتينِ يُحيطونَها بالأسوارِ ويحرسونَها أيّامَ الثمرِ حتى لا يأخذَ منها أحد. أمّا عروةُ فكان يفعلُ عكسَ ذلك تماماً!<br><br>كان إذا جاءتْ <b>أيّامُ الرُّطَب</b> فتحَ فتحةً في سورِ بستانِه، وأذِنَ للناسِ أن يدخلوا، <b>فيأكلونَ ويحملونَ</b> معهم ما يشاؤون — الفقيرُ والمسافرُ والجار. وكان إذا دخلَ بستانَه ردّدَ قولَه تعالى: <b>﴿وَلَوْلَا إِذْ دَخَلْتَ جَنَّتَكَ قُلْتَ مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ﴾</b> حتى يخرج.<br><br>كان يعلمُ أنّ النعمةَ من اللهِ لا من قوّتِه ولا من ذكائه، فكان يشكرُها بالعطاء. ومن شكرَ النعمةَ زادَه الله، ومن نسبَها إلى نفسِه وبخلَ بها كان كصاحبِ الجنّتينِ في سورةِ الكهفِ الذي ضاعتْ جنّتُه.',
          en:'Urwa ibn az-Zubayr had a <b>beautiful garden</b> in Madinah, with many palm trees bearing sweet fresh dates. Garden owners would wall their gardens and guard them in harvest season so no one could take anything. But Urwa did the very opposite!<br><br>When the <b>date season</b> came, he would open a gap in his garden wall and let people come in, <b>to eat and carry away</b> whatever they wished — the poor, the traveler and the neighbor. And whenever he entered his garden he would repeat Allah’s words: <b>"Why, when you entered your garden, did you not say: What Allah wills; there is no power except with Allah?"</b> until he left.<br><br>He knew the blessing came from Allah, not from his own strength or cleverness, so he thanked Allah by giving. Whoever thanks Allah for a blessing, Allah increases it; and whoever credits it to himself and hoards it is like the owner of the two gardens in Surat al-Kahf, whose garden was lost.' },
        choice:{ q:{ar:'لماذا كان عروةُ يقولُ «ما شاءَ اللهُ لا قوّةَ إلّا بالله» في بستانِه؟',en:'Why did Urwa say "What Allah wills; no power except with Allah" in his garden?'},
          opts:[
            { t:{ar:'ليتذكّرَ أنّ النعمةَ من اللهِ لا من قوّتِه',en:'To remember the blessing is from Allah, not his own strength'},c:true,exp:{ar:'صحيح! وشكرَها بأن شاركَها مع الناس.',en:'Correct! And he thanked Allah by sharing it with people.'} },
            { t:{ar:'ليُخيفَ الناسَ من دخولِه',en:'To scare people from entering'},c:false,exp:{ar:'لا، بل كان يفتحُه لهم ويُرحِّبُ بهم.',en:'No — he opened it and welcomed them.'} },
            { t:{ar:'لأنّه يفتخرُ ببستانِه',en:'Because he boasted of his garden'},c:false,exp:{ar:'لا، بل هذه الكلمةُ ضدُّ الفخر، فهي نسبةُ النعمةِ لله.',en:'No — these words are the opposite of boasting; they credit the blessing to Allah.'} },
          ] } },
      {
       "scene": "sprout",
       "character": "🤲",
       "text": {
        "ar": "ولم يكن عروةُ يرى في كرمِه هذا شيئاً عجيباً، فقد تربّى في بيتٍ يحبُّ العطاء: أمُّه <b>أسماءُ بنتُ أبي بكر</b> كانت من أكرمِ الناس، وجدُّه أبو بكرٍ أنفقَ مالَه كلَّه في سبيلِ الله. فتعلّمَ أنّ المالَ الذي يُعطى للناسِ يبقى أجرُه، والمالَ الذي يُحبَسُ يفنى.<br><br>وأنت أيضاً عندك «بستان»: ألعابُك وكتبُك وطعامُك ووقتُك. فإذا أعجبَك شيءٌ عندك فقلْ: <b>«ما شاءَ اللهُ لا قوّةَ إلّا بالله»</b>، ثمّ شاركْه مع أخيك وصديقِك. وتذكّرْ وعدَ اللهِ: <b>﴿لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ﴾</b>.",
        "en": "Urwa did not see anything remarkable in this generosity, for he was raised in a home that loved giving: his mother <b>Asma' bint Abi Bakr</b> was among the most generous of people, and his grandfather Abu Bakr spent all his wealth in the path of Allah. He learned that wealth given to people keeps its reward, while wealth held back fades away.<br><br>You too have a \"garden\": your toys, your books, your food and your time. When something you have delights you, say <b>\"Ma sha' Allah, la quwwata illa billah — what Allah wills; there is no power except with Allah,\"</b> and then share it with your brother and your friend. And remember Allah's promise: <b>﴿\"If you are grateful, I will surely increase you\"﴾</b>."
       }
      }
    ],
    quiz:[
      { q:{ar:'ماذا كان عروةُ يفعلُ في أيّامِ الرُّطَب؟',en:'What did Urwa do in date season?'},
        opts:[ {t:{ar:'يُغلِقُ بستانَه ويحرسُه',en:'Locked and guarded his garden'},c:false}, {t:{ar:'يبيعُ كلَّ الثمر',en:'Sold all the fruit'},c:false}, {t:{ar:'يفتحُ سورَه ليأكلَ الناسُ ويحملوا',en:'Opened its wall for people to eat and carry'},c:true} ] },
      { q:{ar:'في أيِّ سورةٍ قصّةُ صاحبِ الجنّتين؟',en:'Which surah has the story of the two gardens?'},
        opts:[ {t:{ar:'الكهف',en:'Al-Kahf'},c:true}, {t:{ar:'يس',en:'Ya-Sin'},c:false}, {t:{ar:'الملك',en:'Al-Mulk'},c:false} ] },
      { q:{ar:'كيف نشكرُ اللهَ على النعم؟',en:'How do we thank Allah for blessings?'},
        opts:[ {t:{ar:'بالبخلِ بها',en:'By hoarding them'},c:false}, {t:{ar:'بنسبتِها لله ومشاركتِها مع الناس',en:'By crediting them to Allah and sharing them'},c:true}, {t:{ar:'بالافتخارِ بها',en:'By boasting about them'},c:false} ] },
    ],
    moral:{ar:'النعمةُ من الله، وشكرُها بالعطاءِ وقولِ «ما شاءَ اللهُ لا قوّةَ إلّا بالله».',en:'Blessings come from Allah, and we thank Him by giving and saying "What Allah wills; there is no power except with Allah."'},
    badge:{icon:'🌴',title:{ar:'وِسامُ البستانِ الكريم',en:'Badge of the Generous Garden'}},
    reflect:[ {ar:'ما النعمةُ التي تستطيعُ أن تُشارِكَها مع غيرِك اليوم؟',en:'What blessing can you share with others today?'}, {ar:'متى تقولُ «ما شاءَ اللهُ لا قوّةَ إلّا بالله»؟',en:'When do you say "Ma sha’ Allah, la quwwata illa billah"?'} ],
    didYouKnow:[ {ar:'كان عروةُ إذا كان أيّامُ الرُّطَبِ ثلمَ حائطَه فيدخلُ الناسُ فيأكلونَ ويحملون — المصدر: سير أعلام النبلاء',en:'In date season Urwa would open a gap in his wall so people could enter, eat and carry fruit — Source: Siyar A’lam an-Nubala’'}, {ar:'الآيةُ التي كان يُردِّدُها في بستانِه من سورةِ الكهف، الآية ٣٩ — المصدر: القرآن الكريم',en:'The verse he repeated in his garden is from Surat al-Kahf, verse 39 — Source: The Noble Qur’an'} ],
  },
];
