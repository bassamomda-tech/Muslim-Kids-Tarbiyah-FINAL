/* data/stories/qaqa.js — Heroes · Al-Qa'qa' ibn Amr — sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · تاريخ الطبري · البداية والنهاية */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.qaqa = [
  { icon:'📣', scene:'peaks', character:'🦁',
    title:{ ar:'صوتٌ خيرٌ من ألفِ رجل', en:'A Voice Better Than a Thousand Men' },
    pages:[
      { scene:'desert', character:'🐎',
        text:{ ar:'لمّا أرادَ الخليفةُ <b>أبو بكرٍ الصدّيق</b> أن يُرسِلَ المددَ إلى جيشِ المسلمينَ في الشام، اختارَ فارساً واحداً فقط هو <b>القعقاعُ بنُ عمرو</b> وأرسله. فتعجّبَ بعضُ الناس: كيف يُرسِلُ رجلاً واحداً مدداً لجيشٍ كبير؟!<br><br>فقال أبو بكرٍ كلمتَه المشهورة: <b>«لا يُهزَمُ جيشٌ فيهم مثلُ هذا»</b>، وقال: <b>«صوتُ القعقاعِ في الجيشِ خيرٌ من ألفِ رجل»</b>! فلم يكنِ المقصودُ عددَ الرجال، بل ما يحملُه القعقاعُ من <b>شجاعةٍ وثباتٍ ورفعٍ لمعنويّاتِ الجيش</b>. فالبطلُ الواحدُ قد يُغيّرُ مجرى المعركةِ بإذنِ الله.',
          en:'When Caliph <b>Abu Bakr as-Siddiq</b> wished to send reinforcement to the Muslim army in Sham, he chose just one knight — <b>al-Qa\u2019qa\u2019 ibn Amr</b> — and sent him. Some were surprised: how can a single man be reinforcement for a large army?!<br><br>Abu Bakr spoke his famous words: <b>"An army that has the like of this man in it will not be defeated,"</b> and said: <b>"The voice of al-Qa\u2019qa\u2019 in the army is better than a thousand men"</b>! What mattered was not the number of men, but what al-Qa\u2019qa\u2019 carried of <b>courage, steadfastness, and the ability to raise the army\u2019s morale</b>. A single hero can change the course of a battle, by Allah\u2019s leave.' },
        choice:{ q:{ar:'لماذا اعتبرَ أبو بكرٍ القعقاعَ خيراً من ألفِ رجل؟',en:'Why did Abu Bakr consider al-Qa\u2019qa\u2019 better than a thousand men?'},
          opts:[
            { t:{ar:'لشجاعتِه وثباتِه ورفعِه لمعنويّاتِ الجيش',en:'For his courage, steadfastness, and lifting the army\u2019s morale'},c:true,exp:{ar:'نعم! القيمةُ بالأثرِ لا بالعددِ وحدَه.',en:'Yes! Worth is measured by impact, not numbers alone.'} },
            { t:{ar:'لأنّه طويلُ القامة',en:'Because he was tall'},c:false,exp:{ar:'لا، بل لشجاعتِه وأثرِه في الجيش.',en:'No — for his courage and impact on the army.'} },
            { t:{ar:'لأنّه غني',en:'Because he was wealthy'},c:false,exp:{ar:'لا، بل لبطولتِه وتدبيرِه.',en:'No — for his heroism and planning.'} },
          ] } },
    ],
    quiz:[
      { q:{ar:'من قال «صوتُ القعقاعِ خيرٌ من ألفِ رجل»؟',en:'Who said "al-Qa\u2019qa\u2019\u2019s voice is worth a thousand men"?'},
        opts:[ {t:{ar:'أبو بكرٍ الصدّيق',en:'Abu Bakr as-Siddiq'},c:true}, {t:{ar:'أبو جهل',en:'Abu Jahl'},c:false}, {t:{ar:'بلال',en:'Bilal'},c:false} ] },
      { q:{ar:'كم فارساً أرسلَ أبو بكرٍ مدداً؟',en:'How many knights did Abu Bakr send as reinforcement?'},
        opts:[ {t:{ar:'فارساً واحداً (القعقاع)',en:'One knight (al-Qa\u2019qa\u2019)'},c:true}, {t:{ar:'ألفاً',en:'A thousand'},c:false}, {t:{ar:'مئة',en:'A hundred'},c:false} ] },
      { q:{ar:'ما الدرسُ من ذلك؟',en:'What is the lesson?'},
        opts:[ {t:{ar:'القيمةُ بالأثرِ لا بالعددِ وحده',en:'Worth is by impact, not numbers alone'},c:true}, {t:{ar:'العددُ هو كلُّ شيء',en:'Numbers are everything'},c:false}, {t:{ar:'الفردُ لا قيمةَ له',en:'An individual has no value'},c:false} ] },
    ],
    moral:{ar:'القيمةُ بالأثرِ والإخلاصِ لا بالعددِ وحدَه، والبطلُ الواحدُ قد يُغيّرُ مجرى الأمورِ بإذنِ الله.',en:'Worth is in impact and sincerity, not numbers alone — a single hero can change the course of events, by Allah\u2019s leave.'},
    badge:{icon:'📣',title:{ar:'وِسامُ الأثرِ العظيم',en:'Badge of Great Impact'}},
    reflect:[ {ar:'كيف تكونُ ذا أثرٍ نافعٍ في مجموعتِك؟',en:'How can you have a beneficial impact in your group?'}, {ar:'هل تُشجّعُ من حولَك وترفعُ همّتَهم؟',en:'Do you encourage those around you and lift their spirits?'} ],
    didYouKnow:[ {ar:'كلمةُ أبي بكرٍ في القعقاعِ ذكرها الطبريُّ في تاريخِه عند إرسالِ المددِ للشام — المصدر: تاريخ الطبري',en:'Abu Bakr\u2019s words about al-Qa\u2019qa\u2019 are recorded by at-Tabari when reinforcement was sent to Sham — Source: Tarikh at-Tabari'}, {ar:'شهِدَ القعقاعُ معاركَ الفتوحِ الكبرى وكان من أبطالِ القادسيّةِ ضدَّ الفرس — المصدر: البداية والنهاية',en:'Al-Qa\u2019qa\u2019 witnessed the great conquest battles and was among the heroes of Qadisiyya against the Persians — Source: Al-Bidaya wa an-Nihaya'} ],
  },
  { icon:'💪', scene:'peaks', character:'⚔️',
    title:{ ar:'ثباتٌ في أصعبِ المواقف', en:'Steadfastness in the Hardest Moments' },
    pages:[
      { scene:'peaks', character:'⚔️',
        text:{ ar:'في معركةِ <b>القادسيّة</b> ضدَّ جيشِ الفرسِ الضخم، اشتدّ القتالُ أيّاماً، وكان الفرسُ يستخدمونَ <b>الفِيَلةَ الضخمة</b> التي أرعبتْ خيلَ المسلمين! وفي أصعبِ اللحظاتِ كان <b>القعقاعُ</b> يظهرُ ببطولتِه فيثبّتُ الناسَ ويُشعِلُ فيهم الحماس.<br><br>ابتكرَ القعقاعُ حيلةً ذكيّة: جعلَ مجموعاتٍ صغيرةً تظهرُ من بعيدٍ بين الحينِ والآخرِ فيظنُّها الجيشُ مدداً جديداً قادماً، فترتفعُ معنويّاتُهم. كان <b>يقاتلُ بشجاعةٍ ويُدبِّرُ بعقل</b>، حتى نصرَ اللهُ المسلمينَ في القادسيّةِ نصراً عظيماً فُتِحَتْ به بلادُ فارس. علّمنا القعقاعُ أنّ <b>الشجاعةَ مع الذكاءِ والثبات</b> هي طريقُ النصر.',
          en:'At the Battle of <b>Qadisiyya</b> against the vast Persian army, the fighting raged for days, and the Persians used <b>huge elephants</b> that terrified the Muslims\u2019 horses! In the hardest moments <b>al-Qa\u2019qa\u2019</b> would appear with his heroism, steadying the people and igniting their zeal.<br><br>Al-Qa\u2019qa\u2019 devised a clever trick: he had small groups appear from afar at intervals, so the army would think fresh reinforcement was arriving and their morale would rise. He <b>fought with courage and planned with intellect</b>, until Allah granted the Muslims a great victory at Qadisiyya, by which Persia was opened. Al-Qa\u2019qa\u2019 taught us that <b>courage with cleverness and steadfastness</b> is the road to victory.' },
        choice:{ q:{ar:'كيف ساعدَ القعقاعُ جيشَ المسلمينَ في القادسيّة؟',en:'How did al-Qa\u2019qa\u2019 help the Muslim army at Qadisiyya?'},
          opts:[
            { t:{ar:'بالشجاعةِ والذكاءِ ورفعِ المعنويّات',en:'With courage, cleverness, and lifting morale'},c:true,exp:{ar:'نعم! الشجاعةُ مع العقلِ والثباتِ طريقُ النصر.',en:'Yes! Courage with intellect and steadfastness is the road to victory.'} },
            { t:{ar:'بالهروبِ من المعركة',en:'By fleeing the battle'},c:false,exp:{ar:'لا، بل ثبتَ ودبّرَ وشجّعَ الجيش.',en:'No — he stood firm, planned, and encouraged the army.'} },
            { t:{ar:'بالاستسلام',en:'By surrendering'},c:false,exp:{ar:'لا، بل قاتلَ بشجاعةٍ حتى النصر.',en:'No — he fought bravely until victory.'} },
          ] } },
    ],
    quiz:[
      { q:{ar:'ما الذي استخدمه الفرسُ وأرعبَ خيلَ المسلمين؟',en:'What did the Persians use that terrified the Muslims\u2019 horses?'},
        opts:[ {t:{ar:'الفِيَلةَ الضخمة',en:'Huge elephants'},c:true}, {t:{ar:'المطر',en:'Rain'},c:false}, {t:{ar:'الرمال',en:'Sand'},c:false} ] },
      { q:{ar:'بأيِّ حيلةٍ رفعَ القعقاعُ معنويّاتِ الجيش؟',en:'By what trick did al-Qa\u2019qa\u2019 raise the army\u2019s morale?'},
        opts:[ {t:{ar:'أظهرَ مجموعاتٍ كأنّها مددٌ قادم',en:'He made groups appear as if reinforcement was coming'},c:true}, {t:{ar:'وزّعَ المال',en:'He handed out money'},c:false}, {t:{ar:'نام',en:'He slept'},c:false} ] },
      { q:{ar:'ما طريقُ النصرِ كما علّمنا القعقاع؟',en:'What is the road to victory as al-Qa\u2019qa\u2019 taught?'},
        opts:[ {t:{ar:'الشجاعةُ مع الذكاءِ والثبات',en:'Courage with cleverness and steadfastness'},c:true}, {t:{ar:'الخوفُ والتردّد',en:'Fear and hesitation'},c:false}, {t:{ar:'العددُ فقط',en:'Numbers alone'},c:false} ] },
    ],
    moral:{ar:'الشجاعةُ مع الذكاءِ والثباتِ طريقُ النصر، والبطلُ يُلهِمُ من حولَه القوّةَ والعزيمة.',en:'Courage with cleverness and steadfastness is the road to victory; a hero inspires strength and resolve in those around him.'},
    badge:{icon:'💪',title:{ar:'وِسامُ الثباتِ والحكمة',en:'Badge of Steadfastness & Wisdom'}},
    reflect:[ {ar:'هل تجمعُ بين الشجاعةِ والتفكيرِ حين تواجهُ مشكلة؟',en:'Do you combine courage and thinking when you face a problem?'}, {ar:'كيف تثبُتُ وتُثبِّتُ غيرَك وقتَ الصعوبات؟',en:'How do you stay firm and steady others in hard times?'} ],
    didYouKnow:[ {ar:'كانت القادسيّةُ من أعظمِ معاركِ الإسلامِ، فُتِحَتْ بها بلادُ فارسَ في عهدِ عمر — المصدر: تاريخ الطبري',en:'Qadisiyya was one of Islam\u2019s greatest battles, by which Persia was opened in Umar\u2019s era — Source: Tarikh at-Tabari'}, {ar:'ابتكرَ القادةُ المسلمونَ طرقاً للتعاملِ مع الفِيَلةِ بقطعِ خراطيمِها وإزعاجِها — المصدر: البداية والنهاية',en:'The Muslim commanders devised ways to deal with the elephants by cutting their trunks and unsettling them — Source: Al-Bidaya wa an-Nihaya'} ],
  },
  {
    "icon": "🐪",
    "scene": "camel",
    "character": "🧠",
    "title": {
      "ar": "الإبلُ المُبرقَعة",
      "en": "The Veiled Camels"
    },
    "pages": [
      {
        "scene": "camel",
        "character": "🧠",
        "text": {
          "ar": "<b>يُروى</b> في كتبِ التاريخِ أنّه في معركةِ <b>القادسيّة</b>، في اليومِ الأوّل، كانت <b>فِيَلةُ الفرسِ</b> الضخمةُ تُخيفُ خيولَ المسلمين، فإذا رأتها الخيلُ نفرت وهربت! فحزِنَ المسلمونَ وفكّروا: كيف نتغلّبُ على هذه المشكلة؟<br><br>ففكّرَ <b>القعقاعُ بنُ عمرو</b> بذكاء: «إذا كانت خيولُنا تخافُ ما لم تألفْه، فخيولُهم كذلك!» فيُروى أنّه في اليومِ الثاني — يومِ <b>أغواث</b> — أمرَ بجِمالٍ <b>فغُطِّيَتْ بالأقمشةِ والبراقع</b> حتى صارت أشكالاً غريبة، وأحاطَ بها الفرسان، ثمّ أطلقها نحوَ خيولِ الفرس. فلمّا رأتها خيولُهم <b>نفرت وفزِعت</b>، فلقيَ الفرسُ يومئذٍ من الإبلِ ما لقيَه المسلمونَ من الفِيَلة!<br><br>هذه القصّةُ تُعلِّمُنا أنّ <b>العقلَ نعمةٌ من الله</b>: فبدلَ أن نيأسَ أمامَ المشكلة، نُفكّرُ في حلٍّ ذكيٍّ مبتكر، مع التوكّلِ على الله. والمسلمُ <b>يأخذُ بالأسبابِ ويُحسِنُ التدبير</b>.",
          "en": "<b>It is narrated</b> in history books that at the battle of <b>al-Qadisiyya</b>, on the first day, the huge <b>Persian elephants</b> frightened the Muslims' horses — when the horses saw them they bolted! The Muslims were troubled and wondered: how can we overcome this problem?<br><br><b>Al-Qa'qa' ibn 'Amr</b> thought cleverly: \"If our horses fear what they are not used to, so will theirs!\" It is narrated that on the second day — the day of <b>Aghwath</b> — he had camels <b>covered with cloths and veils</b> until they looked like strange shapes, surrounded them with horsemen, and sent them toward the Persian horses. When their horses saw them they <b>shied and panicked</b>, and the Persians that day suffered from the camels what the Muslims had suffered from the elephants!<br><br>This story teaches that <b>the mind is a blessing from Allah</b>: instead of despairing at a problem, we think of a clever, creative solution while trusting in Allah. The Muslim <b>takes the means and plans well</b>."
        },
        "choice": {
          "q": {
            "ar": "ما فكرةُ القعقاعِ في هذه الرواية؟",
            "en": "What was al-Qa'qa's idea in this narration?"
          },
          "opts": [
            {
              "t": {
                "ar": "أن يُغطّيَ الإبلَ حتى تُخيفَ خيولَ الفرس",
                "en": "To cover the camels so they would frighten the Persian horses"
              },
              "c": true,
              "exp": {
                "ar": "أحسنت! فكرةٌ ذكيّةٌ تقلبُ المشكلةَ على صاحبِها.",
                "en": "Well done! A clever idea that turned the problem back on the enemy."
              }
            },
            {
              "t": {
                "ar": "أن يهربَ من المعركة",
                "en": "To flee from the battle"
              },
              "c": false,
              "exp": {
                "ar": "لا، بل فكّرَ في حلٍّ ذكيّ.",
                "en": "No — he thought of a clever solution."
              }
            },
            {
              "t": {
                "ar": "أن يشتريَ فِيَلة",
                "en": "To buy elephants"
              },
              "c": false,
              "exp": {
                "ar": "لا، بل استخدمَ الإبلَ التي عندَه.",
                "en": "No — he used the camels he had."
              }
            }
          ]
        }
      }
    ],
    "quiz": [
      {
        "q": {
          "ar": "ما الذي كان يُخيفُ خيولَ المسلمينَ في اليومِ الأوّل؟",
          "en": "What frightened the Muslims' horses on the first day?"
        },
        "opts": [
          {
            "t": {
              "ar": "الأسود",
              "en": "Lions"
            },
            "c": false
          },
          {
            "t": {
              "ar": "فِيَلةُ الفرس",
              "en": "The Persian elephants"
            },
            "c": true
          },
          {
            "t": {
              "ar": "المطر",
              "en": "Rain"
            },
            "c": false
          }
        ]
      },
      {
        "q": {
          "ar": "ما اسمُ اليومِ الثاني من أيّامِ القادسيّة؟",
          "en": "What was the name of the second day of al-Qadisiyya?"
        },
        "opts": [
          {
            "t": {
              "ar": "يومُ بدر",
              "en": "The day of Badr"
            },
            "c": false
          },
          {
            "t": {
              "ar": "يومُ الخندق",
              "en": "The day of the Trench"
            },
            "c": false
          },
          {
            "t": {
              "ar": "يومُ أغواث",
              "en": "The day of Aghwath"
            },
            "c": true
          }
        ]
      },
      {
        "q": {
          "ar": "ماذا نتعلّمُ من هذه الرواية؟",
          "en": "What do we learn from this narration?"
        },
        "opts": [
          {
            "t": {
              "ar": "أن نستعملَ عقولَنا في حلِّ المشكلاتِ مع التوكّلِ على الله",
              "en": "To use our minds to solve problems while trusting in Allah"
            },
            "c": true
          },
          {
            "t": {
              "ar": "أن نيأسَ بسرعة",
              "en": "To despair quickly"
            },
            "c": false
          },
          {
            "t": {
              "ar": "ألّا نُفكّر",
              "en": "Not to think"
            },
            "c": false
          }
        ]
      }
    ],
    "moral": {
      "ar": "لا تيأسْ أمامَ المشكلة؛ فكّرْ وابتكرْ حلّاً، وخُذْ بالأسبابِ وتوكّلْ على الله.",
      "en": "Don't despair before a problem — think, create a solution, take the means and trust in Allah."
    },
    "badge": {
      "icon": "🐪",
      "title": {
        "ar": "وِسامُ الفكرةِ المبتكرة",
        "en": "Badge of the Creative Idea"
      }
    },
    "reflect": [
      {
        "ar": "تذكّرْ مشكلةً واجهتَها، كيف فكّرتَ في حلِّها؟",
        "en": "Remember a problem you faced — how did you think of a solution?"
      },
      {
        "ar": "لماذا يجبُ أن نجمعَ بين التفكيرِ والتوكّلِ على الله؟",
        "en": "Why should we combine thinking with trust in Allah?"
      }
    ],
    "didYouKnow": [
      {
        "ar": "قصّةُ الإبلِ المبرقعةِ يومَ أغواثَ رواها الطبريُّ في «تاريخه» من طريقِ سيفِ بنِ عمر، وقد تكلّمَ العلماءُ في إسنادِها لضعفِ سيفٍ عندَ المحدّثين، ولذا نرويها بصيغةِ «يُروى»",
        "en": "The story of the veiled camels on the day of Aghwath is narrated by at-Tabari in his History via Sayf ibn 'Umar; scholars have spoken about its chain since Sayf is weak according to hadith scholars, so we tell it as \"it is narrated\""
      },
      {
        "ar": "سُمِّيَت أيّامُ القادسيّة: يومُ أرماث، ثمّ يومُ أغواث، ثمّ يومُ عِماس، ثمّ ليلةُ الهرير — المصدر: تاريخ الطبري والبداية والنهاية",
        "en": "The days of al-Qadisiyya were called: the day of Armath, then Aghwath, then 'Imas, then the Night of al-Harir — Source: Tarikh at-Tabari and al-Bidaya wa an-Nihaya"
      }
    ]
  },
];
