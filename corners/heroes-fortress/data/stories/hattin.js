/* data/stories/hattin.js — Battles · معركة حطين (multi-story set)
   Sources: البداية والنهاية · الكامل لابن الأثير · تاريخ الدولة العثمانية · إسلام ويب · الدرر السنية */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.hattin = [
 {
  "icon": "📜",
  "scene": "mosque",
  "character": "😢",
  "title": {
   "ar": "طريقُ القدس (الأسباب)",
   "en": "The Road to Al-Quds (Causes)"
  },
  "pages": [
   {
    "scene": "mosque",
    "character": "🏰",
    "text": {
     "ar": "قبلَ حطّينَ بنحوِ تسعينَ سنة، جاءت جيوشٌ كبيرةٌ من أوروبّا يرفعونَ الصليبَ على ثيابِهم، فسمّاهم الناسُ <b>الصليبيّين</b>. وكان المسلمونَ في ذلك الوقتِ متفرّقين، كلُّ أميرٍ في مدينتِه يختلفُ مع جارِه.<br><br>فاستطاعَ الصليبيّونَ أن يحتلّوا مدناً كثيرةً في الشام، ثم دخلوا <b>بيتَ المقدس</b> سنةَ ٤٩٢هـ، وقتلوا كثيراً من أهلِه، ووضعوا الصليبَ فوقَ <b>قبّةِ الصخرة</b>، ومُنِعَ الأذانُ في <b>المسجدِ الأقصى</b>، أولى القبلتين وثالثِ الحرمين.<br><br>وبقيَ المسلمونَ يبكونَ القدسَ سنواتٍ طويلة، ويسألونَ: متى نعودُ إليه؟",
     "en": "About ninety years before Hattin, large armies came from Europe wearing the cross on their clothes, so people called them <b>the Crusaders</b>. At that time the Muslims were divided: every prince in his own city quarrelled with his neighbour.<br><br>So the Crusaders were able to occupy many cities in Syria, and then entered <b>Jerusalem</b> in 492 AH. They killed many of its people, placed a cross on top of the <b>Dome of the Rock</b>, and the call to prayer was silenced in <b>al-Aqsa Mosque</b>, the first qibla and the third of the holy sanctuaries.<br><br>For long years the Muslims wept for Al-Quds and asked: When will we return to it?"
    }
   },
   {
    "scene": "mosque",
    "character": "🪵",
    "text": {
     "ar": "ثم بدأت <b>الصحوة</b>: قامَ القائدُ <b>عمادُ الدينِ زنكي</b> فحرّرَ مدينةَ <b>الرُّها</b>، ثم جاءَ ابنُه <b>نورُ الدينِ محمود</b>، وكان عادلاً تقيّاً، فجمعَ مدنَ الشامِ تحتَ رايةٍ واحدة.<br><br>وأمرَ نورُ الدينِ النجّارينَ في <b>حلب</b> أن يصنعوا <b>منبراً</b> جميلاً من الخشبِ المنقوش، ليضعَه في المسجدِ الأقصى يومَ يُحرَّر! كان يُعِدُّ المنبرَ قبلَ أن يُحرّرَ المسجد، لأنّه كان واثقاً بوعدِ الله. وتوفّي نورُ الدينِ قبلَ أن يرى ذلك اليوم، لكنّ تلميذَه وقائدَه كان يحملُ الحلمَ نفسَه.",
     "en": "Then the <b>awakening</b> began. The commander <b>Imad ad-Din Zengi</b> liberated the city of <b>Edessa (ar-Ruha)</b>, and then came his son <b>Nur ad-Din Mahmud</b>, a just and pious man, who gathered the cities of Syria under one banner.<br><br>Nur ad-Din ordered the carpenters of <b>Aleppo</b> to make a beautiful <b>pulpit</b> of carved wood, to place in al-Aqsa Mosque on the day it was liberated! He prepared the pulpit before freeing the mosque, because he trusted Allah's promise. Nur ad-Din died before seeing that day, but his student and commander carried the same dream."
    }
   },
   {
    "scene": "mosque",
    "character": "😢",
    "text": {
     "ar": "كان <b>الصليبيّونَ</b> قد احتلّوا <b>بيتَ المقدسِ</b> وظلموا أهلَه سنواتٍ طويلة. حزِنَ المسلمونَ على القدس. فجاءَ القائدُ العادلُ <b>صلاحُ الدينِ الأيوبيّ</b> ووحّدَ المسلمينَ وأعدَّ جيشاً لِتحريرِ القدسِ ورفعِ الظلم.",
     "en": "The <b>Crusaders</b> had occupied <b>Jerusalem</b> and oppressed its people for long years. The Muslims grieved for Al-Quds. Then the just commander <b>Salahuddin al-Ayyubi</b> came, united the Muslims, and prepared an army to liberate Jerusalem and lift the injustice."
    },
    "choice": {
     "q": {
      "ar": "لماذا أعدَّ صلاحُ الدينِ جيشَه؟",
      "en": "Why did Salahuddin prepare his army?"
     },
     "opts": [
      {
       "t": {
        "ar": "لِتحريرِ القدسِ ورفعِ الظلم",
        "en": "To liberate Al-Quds and lift injustice"
       },
       "c": true,
       "exp": {
        "ar": "نعم! نصرةُ المظلومِ واجب.",
        "en": "Yes! Aiding the wronged is a duty."
       }
      },
      {
       "t": {
        "ar": "لأخذِ الأموال",
        "en": "To take wealth"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل لِتحريرِ القدس.",
        "en": "No — to free Al-Quds."
       }
      },
      {
       "t": {
        "ar": "للشهرة",
        "en": "For fame"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل لله.",
        "en": "No — for Allah."
       }
      }
     ]
    }
   },
   {
    "scene": "desert",
    "character": "🐪",
    "text": {
     "ar": "وُلِدَ صلاحُ الدينِ في <b>تكريت</b>، وعملَ مع نورِ الدينِ حتى صار سلطاناً على <b>مصرَ والشام</b> معاً، فأصبحَ الصليبيّونَ بين جيشَين من المسلمين لأوّلِ مرّة. وكانت بينهم وبينه <b>هدنةٌ</b> وعهود.<br><br>لكنّ أميرَ قلعةِ الكَرَكِ الصليبيَّ <b>أرناط</b> نقضَ العهد، فهجمَ على قافلةٍ من المسلمينَ المسافرينَ الآمنين، وأخذَ أموالَهم وأسرَهم. فغضبَ صلاحُ الدينِ غضباً شديداً، لأنّ <b>الغدرَ ونقضَ العهدِ</b> من أقبحِ الأعمال، وجمعَ جيوشَه من مصرَ والشامِ والجزيرة.<br><br>وهكذا نتعلّمُ أنّ <b>الوحدةَ قوّة</b>: ما دامَ المسلمونَ متفرّقين ضعفوا، فلمّا اجتمعوا صاروا قادرينَ على رفعِ الظلم.",
     "en": "Salahuddin was born in <b>Tikrit</b>, and worked with Nur ad-Din until he became sultan over both <b>Egypt and Syria</b>; for the first time the Crusaders were caught between two Muslim armies. There was a <b>truce</b> and agreements between them and him.<br><br>But the Crusader lord of the castle of al-Karak, <b>Reynald (Arnat)</b>, broke the covenant: he attacked a caravan of peaceful Muslim travellers, seized their goods and took them captive. Salahuddin was extremely angry, because <b>treachery and breaking promises</b> are among the ugliest deeds, and he gathered his armies from Egypt, Syria and al-Jazira.<br><br>So we learn that <b>unity is strength</b>: while the Muslims were divided they were weak, and when they came together they were able to lift injustice."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "مَنِ احتلَّ بيتَ المقدس؟",
     "en": "Who occupied Jerusalem?"
    },
    "opts": [
     {
      "t": {
       "ar": "الصليبيّون",
       "en": "The Crusaders"
      },
      "c": true
     },
     {
      "t": {
       "ar": "الفُرس",
       "en": "The Persians"
      },
      "c": false
     },
     {
      "t": {
       "ar": "المغول",
       "en": "The Mongols"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "مَن وحّدَ المسلمينَ لِتحريرِها؟",
     "en": "Who united the Muslims to free it?"
    },
    "opts": [
     {
      "t": {
       "ar": "صلاحُ الدين",
       "en": "Salahuddin"
      },
      "c": true
     },
     {
      "t": {
       "ar": "قطز",
       "en": "Qutuz"
      },
      "c": false
     },
     {
      "t": {
       "ar": "بربروس",
       "en": "Barbarossa"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "مَن أمرَ بصنعِ منبرٍ للمسجدِ الأقصى قبلَ تحريرِه؟",
     "en": "Who ordered a pulpit made for al-Aqsa before it was freed?"
    },
    "opts": [
     {
      "t": {
       "ar": "نورُ الدينِ محمود",
       "en": "Nur ad-Din Mahmud"
      },
      "c": true
     },
     {
      "t": {
       "ar": "أرناط",
       "en": "Reynald"
      },
      "c": false
     },
     {
      "t": {
       "ar": "هارونُ الرشيد",
       "en": "Harun ar-Rashid"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "نصرةُ المظلومِ وتحريرُ الحقِّ من أعظمِ الأعمال.",
   "en": "Aiding the wronged and freeing what is right is among the greatest deeds."
  },
  "badge": {
   "icon": "📜",
   "title": {
    "ar": "وِسامُ فهمِ الأسباب",
    "en": "Badge of Understanding"
   }
  },
  "reflect": [
   {
    "ar": "كيف تنصرُ المظلومَ من حولِك؟",
    "en": "How do you help the wronged around you?"
   },
   {
    "ar": "لماذا كان المسلمونَ ضعفاءَ حين تفرّقوا، وكيف تساعدُ على جمعِ القلوبِ في بيتِك وصفِّك؟",
    "en": "Why were the Muslims weak when divided, and how can you help bring hearts together at home and in class?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "كانت حطّينُ سنةَ ٥٨٣هـ — المصدر: البداية والنهاية",
    "en": "Hattin was in 583 AH — Source: Al-Bidaya wa an-Nihaya"
   },
   {
    "ar": "صنعَ نورُ الدينِ محمود منبراً في حلبَ للمسجدِ الأقصى، فنقله صلاحُ الدينِ إليه بعدَ التحرير — المصدر: الكامل لابن الأثير · البداية والنهاية",
    "en": "Nur ad-Din Mahmud had a pulpit made in Aleppo for al-Aqsa, and Salahuddin moved it there after the liberation — Source: Ibn al-Athir's al-Kamil · Al-Bidaya wa an-Nihaya"
   }
  ]
 },
 {
  "icon": "🧠",
  "scene": "desert",
  "character": "🛡️",
  "title": {
   "ar": "خطّةُ الماء (المعركة)",
   "en": "The Water Plan (The Battle)"
  },
  "pages": [
   {
    "scene": "desert",
    "character": "☀️",
    "text": {
     "ar": "في شهرِ <b>ربيعٍ الآخر</b> سنةَ ٥٨٣هـ، في حرِّ الصيفِ الشديد، اجتمعَ جيشُ الصليبيّينَ الكبيرُ عند عيونِ ماءٍ غزيرةٍ اسمُها <b>صَفّورية</b>. كانوا في مكانٍ فيه ماءٌ وظلّ، ولو بقوا فيه لصعبَ على المسلمينَ قتالُهم.<br><br>ففكّرَ صلاحُ الدين: كيف أُخرجُهم من عندِ الماء؟ فسارَ بجيشِه إلى مدينةِ <b>طبريّة</b> على البحيرة، وحاصرَها. فاختلفَ قادةُ الصليبيّين: بعضُهم قال: لا تخرجوا إلى الصحراء، وبعضُهم أصرَّ على الخروجِ لإنقاذِ طبريّة. فخرجوا!",
     "en": "In the month of <b>Rabi' al-Akhir</b> in 583 AH, in the intense summer heat, the great Crusader army gathered at abundant springs called <b>Saffuriyya</b>. They were in a place with water and shade, and had they stayed there, fighting them would have been hard for the Muslims.<br><br>So Salahuddin thought: How can I draw them away from the water? He marched with his army to the town of <b>Tiberias</b> on the lake and besieged it. The Crusader leaders disagreed: some said, Do not go out into the desert; others insisted on marching out to rescue Tiberias. And out they came!"
    }
   },
   {
    "scene": "desert",
    "character": "🧠",
    "text": {
     "ar": "خطّطَ <b>صلاحُ الدينِ بحكمة</b>: استدرجَ الصليبيّينَ إلى أرضٍ حارّةٍ جافّةٍ عند حطّين، و<b>قطعَ عنهمُ الماء</b> في حرِّ الصيف! فأصابهمُ العطشُ والتعبُ الشديد. ثم أشعلَ النارَ في الأعشابِ فزادهم ضِيقاً، وهجمَ المسلمونَ فانتصروا نصراً عظيماً.",
     "en": "<b>Salahuddin planned wisely</b>: he lured the Crusaders into hot, dry land at Hattin and <b>cut them off from water</b> in the summer heat! Thirst and exhaustion struck them. Then he set the grass ablaze, increasing their distress, and the Muslims attacked and won a great victory."
    },
    "choice": {
     "q": {
      "ar": "كيف خطّطَ صلاحُ الدينِ للنصر؟",
      "en": "How did Salahuddin plan for victory?"
     },
     "opts": [
      {
       "t": {
        "ar": "بالحكمةِ وقطعِ الماءِ عن العدو",
        "en": "With wisdom, cutting the enemy from water"
       },
       "c": true,
       "exp": {
        "ar": "نعم! التخطيطُ الذكيُّ نصف النصر.",
        "en": "Yes! Clever planning is half the victory."
       }
      },
      {
       "t": {
        "ar": "بالمصادفة",
        "en": "By chance"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل بتخطيطٍ محكم.",
        "en": "No — by careful planning."
       }
      },
      {
       "t": {
        "ar": "بكثرةِ العدد",
        "en": "By numbers"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل بالحكمة.",
        "en": "No — by wisdom."
       }
      }
     ]
    }
   },
   {
    "scene": "fire",
    "character": "🔥",
    "text": {
     "ar": "قضى الصليبيّونَ ليلتَهم على هضبةٍ يابسةٍ عطشى، والمسلمونَ حولَهم من كلِّ جانب، يكبّرونَ ويهلّلون. وفي الصباحِ لجأ الصليبيّونَ إلى تلَّين صغيرَين يُسمّيانِ <b>قرونَ حطّين</b>، فأحاطَ بهم المسلمون.<br><br>ويروي <b>الأفضلُ</b> ابنُ صلاحِ الدينِ وكان شابّاً صغيراً إلى جانبِ أبيه: كنّا كلّما رأينا الصليبيّينَ يتراجعونَ فرحنا، فيقولُ أبي: لم ينتهِ الأمرُ بعد. فلمّا سقطت خيمةُ ملكِهم، <b>نزلَ صلاحُ الدينِ عن فرسِه وسجدَ شكراً لله</b> وبكى من الفرح.<br><br>وأُسِرَ ملكُ الصليبيّين وكثيرٌ من قادتِهم، وكان ذلك من أعظمِ الانتصاراتِ في تاريخِ المسلمين.",
     "en": "The Crusaders spent the night on a dry, thirsty plateau, with the Muslims around them on every side, calling out Allahu Akbar and La ilaha illa Allah. In the morning the Crusaders took refuge on two small hills called <b>the Horns of Hattin</b>, and the Muslims surrounded them.<br><br><b>Al-Afdal</b>, Salahuddin's son, who was a young man at his father's side, narrated: Every time we saw the Crusaders fall back we rejoiced, but my father would say: It is not over yet. When their king's tent fell, <b>Salahuddin dismounted from his horse and prostrated in thanks to Allah</b>, weeping with joy.<br><br>The Crusader king and many of their commanders were captured. It was one of the greatest victories in Muslim history."
    }
   },
   {
    "scene": "spring",
    "character": "🥤",
    "text": {
     "ar": "أُتِيَ بملكِ الصليبيّينَ إلى خيمةِ صلاحِ الدين، وهو متعَبٌ عطشانُ خائف. فأمرَ له صلاحُ الدينِ <b>بشرابٍ باردٍ</b> يشربُه، وكان من عادةِ العربِ أنّ مَن أطعمتَه أو سقيتَه فقد أمّنتَه. فاطمأنَّ الملك.<br><br>أمّا <b>أرناطُ</b> الذي غدرَ بالقافلة، فلم يُعطِه صلاحُ الدينِ الأمان، لأنّه نقضَ العهدَ وظلمَ الآمنين.<br><br>تعلّمْ يا بطل: صلاحُ الدينِ لم ينتصرْ بالحماسةِ وحدَها، بل <b>بالتفكيرِ والصبرِ والتخطيطِ والدعاء</b>، ثم شكرَ اللهَ ولم يتكبّر. فإذا كان عندك امتحانٌ أو مشكلة، ففكّرْ في خطّة، واستعِنْ بالله، واشكرْه إذا نجحت.",
     "en": "The Crusader king was brought to Salahuddin's tent, exhausted, thirsty and afraid. Salahuddin ordered <b>a cold drink</b> for him to drink — it was an Arab custom that whoever you fed or gave drink to, you had granted safety. So the king was reassured.<br><br>As for <b>Reynald</b>, who had betrayed the caravan, Salahuddin did not grant him safety, because he had broken his covenant and wronged peaceful people.<br><br>Learn, young hero: Salahuddin did not win by enthusiasm alone, but <b>by thinking, patience, planning and prayer</b> — and then he thanked Allah and was not arrogant. So when you have an exam or a problem, think of a plan, seek Allah's help, and thank Him when you succeed."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "ماذا قطعَ صلاحُ الدينِ عن الصليبيّين؟",
     "en": "What did Salahuddin cut from the Crusaders?"
    },
    "opts": [
     {
      "t": {
       "ar": "الماء",
       "en": "Water"
      },
      "c": true
     },
     {
      "t": {
       "ar": "الطعام فقط",
       "en": "Only food"
      },
      "c": false
     },
     {
      "t": {
       "ar": "النوم",
       "en": "Sleep"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "في أيِّ فصلٍ كانت المعركة؟",
     "en": "In what season was the battle?"
    },
    "opts": [
     {
      "t": {
       "ar": "الصيفِ الحار",
       "en": "The hot summer"
      },
      "c": true
     },
     {
      "t": {
       "ar": "الشتاءِ البارد",
       "en": "Cold winter"
      },
      "c": false
     },
     {
      "t": {
       "ar": "الربيع",
       "en": "Spring"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "ماذا فعلَ صلاحُ الدينِ حين تحقّقَ النصر؟",
     "en": "What did Salahuddin do when victory came?"
    },
    "opts": [
     {
      "t": {
       "ar": "سجدَ شكراً لله",
       "en": "He prostrated in thanks to Allah"
      },
      "c": true
     },
     {
      "t": {
       "ar": "أقامَ حفلةً كبيرة",
       "en": "He threw a big party"
      },
      "c": false
     },
     {
      "t": {
       "ar": "تفاخرَ بقوّتِه",
       "en": "He boasted of his strength"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "التخطيطُ الذكيُّ والأخذُ بالأسبابِ بابٌ عظيمٌ للنصر.",
   "en": "Clever planning and taking the means is a great door to victory."
  },
  "badge": {
   "icon": "🧠",
   "title": {
    "ar": "وِسامُ التخطيطِ الحكيم",
    "en": "Badge of Wise Planning"
   }
  },
  "reflect": [
   {
    "ar": "كيف تُخطّطُ بذكاءٍ لِحلِّ مشكلة؟",
    "en": "How do you plan cleverly to solve a problem?"
   },
   {
    "ar": "هل تشكرُ اللهَ حين تنجحُ، أم تنسبُ النجاحَ إلى نفسِك فقط؟",
    "en": "Do you thank Allah when you succeed, or credit only yourself?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "كان عطشُ الصليبيّينَ سبباً كبيراً في هزيمتِهم — المصدر: البداية والنهاية",
    "en": "The Crusaders’ thirst was a major cause of their defeat — Source: Al-Bidaya wa an-Nihaya"
   },
   {
    "ar": "سجدَ صلاحُ الدينِ شكراً لله حين سقطت خيمةُ ملكِ الصليبيّينَ في حطّين، كما رواه ابنُه الأفضل — المصدر: الكامل لابن الأثير",
    "en": "Salahuddin prostrated in thanks to Allah when the Crusader king's tent fell at Hattin, as his son al-Afdal reported — Source: Ibn al-Athir's al-Kamil"
   }
  ]
 },
 {
  "icon": "🕌",
  "scene": "mosque",
  "character": "🤲",
  "title": {
   "ar": "تحريرُ القدسِ والرحمة (النتائج)",
   "en": "Liberating Al-Quds & Mercy (Results)"
  },
  "pages": [
   {
    "scene": "mosque",
    "character": "🛡️",
    "text": {
     "ar": "بعدَ حطّين، فتحَ صلاحُ الدينِ مدناً كثيرةً على الساحل، مثلَ <b>عكّا</b>، ثم توجّهَ إلى <b>بيتِ المقدس</b> وحاصرَه. وكان في المدينةِ عددٌ كبيرٌ من الصليبيّين، فخافوا أن يفعلَ بهم ما فعله أجدادُهم بأهلِ القدسِ قبلَ تسعينَ سنة.<br><br>فخرجَ إليه قائدُهم يطلبُ <b>الأمان</b>. فاتّفقَ معه صلاحُ الدينِ على أن يخرجَ الصليبيّونَ من المدينةِ سالمين، ويدفعَ كلُّ واحدٍ فديةً يسيرة، ويأخذوا أموالَهم معهم.<br><br>ودخلَ المسلمونَ القدسَ يومَ <b>الجمعة ٢٧ رجب ٥٨٣هـ</b>، وهي الليلةُ التي يذكرُ فيها كثيرٌ من الناسِ ذكرى الإسراءِ والمعراج.",
     "en": "After Hattin, Salahuddin took many coastal cities, such as <b>Acre</b>, then headed to <b>Jerusalem</b> and besieged it. Inside the city were a great many Crusaders, and they feared he would do to them what their forefathers had done to the people of Al-Quds ninety years earlier.<br><br>So their leader came out to him asking for <b>safety</b>. Salahuddin agreed with him that the Crusaders would leave the city unharmed, each paying a small ransom and taking their belongings with them.<br><br>The Muslims entered Al-Quds on <b>Friday, 27 Rajab 583 AH</b> — the date on which many people remember the Night Journey and Ascension."
    }
   },
   {
    "scene": "mosque",
    "character": "🤲",
    "text": {
     "ar": "بعد النصرِ سارَ صلاحُ الدينِ و<b>حرّرَ بيتَ المقدس</b>! وعادَ الأذانُ يُرفعُ في المسجدِ الأقصى بعد سنواتٍ طويلة. والأجملُ: لمّا دخلَ القدسَ <b>عاملَ أهلَها بالرحمةِ والعفو</b> ولم ينتقمْ، رغمَ ما فعله الصليبيّونَ من قبل. فأحبَّه الناسُ حتى أعداؤُه.",
     "en": "After the victory Salahuddin marched and <b>liberated Jerusalem</b>! The call to prayer rose again in Al-Aqsa Mosque after long years. And most beautiful: when he entered Al-Quds he <b>treated its people with mercy and pardon</b>, not revenge, despite what the Crusaders had done. People loved him — even his enemies."
    },
    "choice": {
     "q": {
      "ar": "كيف عاملَ صلاحُ الدينِ أهلَ القدس؟",
      "en": "How did Salahuddin treat the people of Al-Quds?"
     },
     "opts": [
      {
       "t": {
        "ar": "بالرحمةِ والعفوِ لا بالانتقام",
        "en": "With mercy and pardon, not revenge"
       },
       "c": true,
       "exp": {
        "ar": "نعم! الرحمةُ من أخلاقِ الأبطال.",
        "en": "Yes! Mercy is a hero’s trait."
       }
      },
      {
       "t": {
        "ar": "بالانتقامِ الشديد",
        "en": "With harsh revenge"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل عفا ورحم.",
        "en": "No — he pardoned and showed mercy."
       }
      },
      {
       "t": {
        "ar": "بالطرد",
        "en": "By expelling them"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل أمّنهم.",
        "en": "No — he gave them safety."
       }
      }
     ]
    }
   },
   {
    "scene": "mosque",
    "character": "🕊️",
    "text": {
     "ar": "وكان كثيرٌ من الفقراءِ لا يملكونَ الفدية، فطلبَ <b>العادلُ</b> أخو صلاحِ الدينِ ألفاً منهم فأطلقَهم، وأطلقَ صلاحُ الدينِ كثيراً من الشيوخِ والضعفاءِ بلا فدية. ورأى الناسُ رجالَ الكنيسةِ يخرجونَ بأموالِهم، فلم يمنعْهم صلاحُ الدين وقال إنّه لا يغدرُ بالعهد.<br><br>ثم غُسِلَت <b>قبّةُ الصخرة</b> والمسجدُ الأقصى، وأُنزِلَ الصليبُ عن القبّة، وأُقيمت أوّلُ <b>صلاةِ جمعةٍ</b> في الأقصى بعدَ نحوِ تسعينَ سنة. وجاءَ صلاحُ الدينِ بمنبرِ <b>نورِ الدين</b> من حلبَ فوضعه في المسجد، فتحقّقَ حلمُ أستاذِه!",
     "en": "Many of the poor could not pay the ransom, so <b>al-Adil</b>, Salahuddin's brother, asked for a thousand of them and set them free, and Salahuddin released many of the elderly and weak without ransom. People saw churchmen leaving with their wealth, but Salahuddin did not stop them, saying he would not betray the agreement.<br><br>Then the <b>Dome of the Rock</b> and al-Aqsa Mosque were washed, the cross was taken down from the dome, and the first <b>Friday prayer</b> was held in al-Aqsa after about ninety years. Salahuddin brought <b>Nur ad-Din's</b> pulpit from Aleppo and placed it in the mosque — his teacher's dream came true!"
    }
   },
   {
    "scene": "mosque",
    "character": "🌟",
    "text": {
     "ar": "قارِنْ يا بطل بين يومَين: يومَ دخلَ الصليبيّونَ القدسَ فقتلوا أهلَها، ويومَ دخلَها صلاحُ الدينِ فعفا وأمّنَ وأوفى بالعهد. لهذا كتبَ عنه المؤرّخونَ في الشرقِ والغربِ كلامَ إعجاب، وبقيَ اسمُه رمزاً <b>للفروسيّةِ والرحمة</b>.<br><br>فالمسلمُ القويُّ لا ينتقمُ لنفسِه، بل <b>يعدلُ ويرحمُ ويفي بوعدِه</b> حتى مع مَن آذاه. وأنت كذلك: إذا ظلمك أحدٌ ثم اعتذر، فاعفُ عنه، وإذا وعدتَ فأوفِ.",
     "en": "Compare two days, young hero: the day the Crusaders entered Al-Quds and killed its people, and the day Salahuddin entered it and pardoned, gave safety and kept his word. That is why historians in East and West wrote of him with admiration, and his name remains a symbol of <b>chivalry and mercy</b>.<br><br>The strong Muslim does not take revenge for himself; he <b>is just, merciful and keeps his promise</b>, even with those who hurt him. You too: if someone wrongs you and then apologizes, forgive him — and when you promise, keep your promise."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "ماذا حرّرَ صلاحُ الدين؟",
     "en": "What did Salahuddin liberate?"
    },
    "opts": [
     {
      "t": {
       "ar": "بيتَ المقدس",
       "en": "Jerusalem"
      },
      "c": true
     },
     {
      "t": {
       "ar": "دمشق",
       "en": "Damascus"
      },
      "c": false
     },
     {
      "t": {
       "ar": "القاهرة",
       "en": "Cairo"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "بمَ عاملَ أهلَ القدس؟",
     "en": "How did he treat the people of Al-Quds?"
    },
    "opts": [
     {
      "t": {
       "ar": "بالرحمةِ والعفو",
       "en": "With mercy and pardon"
      },
      "c": true
     },
     {
      "t": {
       "ar": "بالقسوة",
       "en": "With cruelty"
      },
      "c": false
     },
     {
      "t": {
       "ar": "بالطرد",
       "en": "By expelling"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "في أيِّ شهرٍ دخلَ صلاحُ الدينِ بيتَ المقدس؟",
     "en": "In which month did Salahuddin enter Jerusalem?"
    },
    "opts": [
     {
      "t": {
       "ar": "رجب",
       "en": "Rajab"
      },
      "c": true
     },
     {
      "t": {
       "ar": "رمضان",
       "en": "Ramadan"
      },
      "c": false
     },
     {
      "t": {
       "ar": "محرّم",
       "en": "Muharram"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "البطلُ القويُّ رحيمٌ عند المقدرة، يعفو ولا ينتقم.",
   "en": "The strong hero is merciful when able, pardoning rather than avenging."
  },
  "badge": {
   "icon": "🕌",
   "title": {
    "ar": "وِسامُ تحريرِ القدس",
    "en": "Badge of Liberating Al-Quds"
   }
  },
  "reflect": [
   {
    "ar": "هل تعفو حين تقدرُ على الانتقام؟",
    "en": "Do you pardon when you could take revenge?"
   },
   {
    "ar": "كيف تفي بوعدِك حتى مع مَن لا تحبُّه؟",
    "en": "How do you keep your promise even with someone you don't like?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "عَفْوُ صلاحِ الدينِ عن أهلِ القدسِ اشتهرَ في التاريخِ كلِّه — المصدر: البداية والنهاية",
    "en": "Salahuddin’s pardon of Al-Quds’ people is famed throughout history — Source: Al-Bidaya wa an-Nihaya"
   },
   {
    "ar": "دخلَ صلاحُ الدينِ القدسَ يومَ الجمعة ٢٧ رجب سنةَ ٥٨٣هـ، وأطلقَ أخوه العادلُ ألفاً من الفقراءِ بلا فدية — المصدر: الكامل لابن الأثير · البداية والنهاية",
    "en": "Salahuddin entered Al-Quds on Friday 27 Rajab 583 AH, and his brother al-Adil freed a thousand poor people without ransom — Source: Ibn al-Athir's al-Kamil · Al-Bidaya wa an-Nihaya"
   }
  ]
 }
];
