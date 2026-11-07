/* data/stories/wadilakka.js — Battles · معركة وادي لكة (multi-story set)
   Sources: البداية والنهاية · تاريخ الطبري · فتوح البلدان · إسلام ويب · الدرر السنية */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.wadilakka = [
 {
  "icon": "📜",
  "scene": "peaks",
  "character": "🌊",
  "title": {
   "ar": "عبورُ البحر (الأسباب)",
   "en": "Crossing the Sea (Causes)"
  },
  "pages": [
   {
    "scene": "sea",
    "character": "⛵",
    "text": {
     "ar": "بعدَ أن وصلَ الإسلامُ إلى أقصى <b>المغرب</b> وأسلمَ كثيرٌ من البربر، صارَ <b>موسى بنُ نُصَير</b> والياً على إفريقيّةَ والمغربِ في خلافةِ <b>الوليدِ بنِ عبدِ الملك</b>، وجعلَ <b>طارقَ بنَ زياد</b> والياً على مدينةِ <b>طنجة</b>، المطلّةِ على المضيقِ الذي يفصلُ إفريقيا عن أوروبا.<br><br>لم يتعجّلْ موسى، بل كتبَ إلى الخليفةِ يستأذنُه، فأوصاه الوليدُ أن يختبرَ الطريقَ بالسرايا الصغيرةِ أوّلاً، وألّا يُعرّضَ المسلمينَ لأخطارِ البحر. فأرسلَ موسى سنةَ ٩١هـ رجلاً اسمُه <b>طَريفُ بنُ مالك</b> في نحوِ خمسمئةِ رجلٍ يستكشفُ الساحل، فرجعَ سالماً بأخبارٍ تُطمئن. وهكذا يكونُ <b>التخطيطُ قبلَ العمل</b>.",
     "en": "After Islam had reached the far end of the <b>Maghrib</b> and many Berbers had become Muslim, <b>Musa ibn Nusayr</b> became governor of Ifriqiya and the Maghrib in the caliphate of <b>al-Walid ibn Abd al-Malik</b>. He made <b>Tariq ibn Ziyad</b> governor of the city of <b>Tangier</b>, overlooking the strait that separates Africa from Europe.<br><br>Musa did not rush. He wrote to the caliph for permission, and al-Walid advised him to test the way with small expeditions first and not to expose the Muslims to the dangers of the sea. So in 91 AH Musa sent a man named <b>Tarif ibn Malik</b> with about five hundred men to scout the coast, and he came back safely with reassuring news. This is how <b>planning comes before action</b>."
    }
   },
   {
    "scene": "peaks",
    "character": "🌊",
    "text": {
     "ar": "كانت <b>الأندلسُ</b> (إسبانيا) يحكمُها ملكٌ ظالمٌ اسمُه <b>لُذريق</b>، يأخذُ أموالَ الناسِ ظُلماً ويُذِلُّ الضعفاءَ، حتى ضجَّ الشعبُ من جَورِه. فاستغاثَ المظلومونَ بالمسلمين. فأرسلَ القائدُ <b>موسى بنُ نُصَير</b> فتاهُ البطلَ <b>طارقَ بنَ زياد</b> سنةَ <b>٩٢هـ</b> على رأسِ جيشٍ صغيرٍ نحوِ <b>سبعةِ آلافٍ</b> أكثرُهم من البربرِ حديثي الإسلام. عبرَ بهمُ البحرَ في سُفُنٍ قليلةٍ إلى جبلٍ سُمِّيَ بعدَه <b>جبلَ طارق</b>. ويَروي بعضُ المؤرّخين أنّه قبلَ المعركةِ <b>أحرقَ السفن</b> — لا ليقطعَ طريقَ الرجوع، بل ليُعلِّقَ القلوبَ كلَّها باللهِ وحدَه: لا مَهربَ إلا إليه، ولا نصرَ إلا منه. هكذا بدأت رحلةُ العدلِ: قِلّةٌ مؤمنةٌ تطلبُ رِضا اللهِ ونصرةَ المظلوم.",
     "en": "<b>Andalusia</b> (Spain) was ruled by an unjust king named <b>Roderic</b>, who seized people’s wealth and humiliated the weak until the people cried out against his tyranny. The oppressed sought the Muslims’ help. So the commander <b>Musa ibn Nusayr</b> sent his brave deputy <b>Tariq ibn Ziyad</b> in <b>92 AH</b> at the head of a small army of about <b>seven thousand</b>, mostly newly-Muslim Berbers. He crossed the sea in a few ships to a mountain later named after him, <b>Gibraltar (Jabal Tariq)</b>. Some historians report that before the battle he <b>burned the ships</b> — not to cut off retreat, but to attach every heart to Allah alone: no escape but to Him, no victory but from Him. Thus began the journey of justice: a believing few seeking Allah’s pleasure and the aid of the oppressed."
    },
    "choice": {
     "q": {
      "ar": "لماذا عبرَ طارقٌ إلى الأندلس؟",
      "en": "Why did Tariq cross to Andalusia?"
     },
     "opts": [
      {
       "t": {
        "ar": "لِيرفعَ الظلمَ وينشرَ العدل",
        "en": "To lift injustice and spread justice"
       },
       "c": true,
       "exp": {
        "ar": "نعم! نصرةُ المظلوم.",
        "en": "Yes! Aiding the oppressed."
       }
      },
      {
       "t": {
        "ar": "للسياحة",
        "en": "For tourism"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل لِرفعِ الظلم.",
        "en": "No — to lift oppression."
       }
      },
      {
       "t": {
        "ar": "للمال",
        "en": "For wealth"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل للعدل.",
        "en": "No — for justice."
       }
      }
     ]
    }
   },
   {
    "scene": "peaks",
    "character": "🏔️",
    "text": {
     "ar": "نزلَ طارقٌ وجنودُه عند الجبلِ الصخريِّ العظيمِ في <b>رجب سنةَ ٩٢هـ</b>، ثمّ تقدّموا فدخلوا البلادَ القريبة. وكان الملكُ لُذريقُ مشغولاً بحربٍ في شمالِ البلاد، فلمّا جاءَه الخبرُ جمعَ جيوشَه من كلِّ مكانٍ وأقبلَ مسرعاً نحوَ الجنوب.<br><br>وماذا نتعلّمُ من هذه البداية؟ أنّ العملَ العظيمَ يحتاجُ إلى <b>نيّةٍ صالحة</b> — نصرةِ المظلوم — وإلى <b>استشارةٍ واستئذانٍ وتخطيط</b>، ثمّ إلى شجاعةٍ في التنفيذ. فإذا أردتَ مشروعاً كبيراً في مدرستِك، فاستشرْ معلّمَك، وجرّبْ خطوةً صغيرة، ثمّ توكّلْ على الله وابدأ.",
     "en": "Tariq and his soldiers landed by the great rocky mountain in <b>Rajab of 92 AH</b>, then advanced into the nearby lands. King Roderic was busy with a war in the north of the country; when the news reached him, he gathered his armies from everywhere and hurried south.<br><br>What do we learn from this beginning? That a great work needs <b>a good intention</b> — helping the oppressed — and <b>consultation, permission and planning</b>, and then courage in carrying it out. If you want to do a big project at school, consult your teacher, try a small step first, and then trust in Allah and begin."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "أيُّ بلادٍ قصدها طارق؟",
     "en": "Which land did Tariq head to?"
    },
    "opts": [
     {
      "t": {
       "ar": "الأندلس (إسبانيا)",
       "en": "Andalusia (Spain)"
      },
      "c": true
     },
     {
      "t": {
       "ar": "الهند",
       "en": "India"
      },
      "c": false
     },
     {
      "t": {
       "ar": "الصين",
       "en": "China"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "كيف وصلَ إليها؟",
     "en": "How did he reach it?"
    },
    "opts": [
     {
      "t": {
       "ar": "عبرَ البحر",
       "en": "By crossing the sea"
      },
      "c": true
     },
     {
      "t": {
       "ar": "بالطائرة",
       "en": "By plane"
      },
      "c": false
     },
     {
      "t": {
       "ar": "سيراً",
       "en": "On foot only"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "ما اسمُ الجبلِ الذي نزلَ عنده طارقٌ وسُمِّيَ باسمِه؟",
     "en": "What is the mountain where Tariq landed, named after him?"
    },
    "opts": [
     {
      "t": {
       "ar": "جبلُ طارق",
       "en": "Gibraltar (Jabal Tariq)"
      },
      "c": true
     },
     {
      "t": {
       "ar": "جبلُ أُحُد",
       "en": "Mount Uhud"
      },
      "c": false
     },
     {
      "t": {
       "ar": "جبلُ الطور",
       "en": "Mount Sinai"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "نصرةُ المظلومِ ونشرُ العدلِ غايةٌ نبيلةٌ تستحقُّ التضحية.",
   "en": "Aiding the oppressed and spreading justice is a noble aim worth sacrifice."
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
    "ar": "هل تساعدُ المظلومَ ولو كلّفك ذلك جهداً؟",
    "en": "Do you help the wronged even if it costs you effort?"
   },
   {
    "ar": "لماذا استأذنَ موسى الخليفةَ وجرّبَ بسريّةٍ صغيرةٍ قبلَ العملِ الكبير؟",
    "en": "Why did Musa ask the caliph’s permission and test with a small expedition before the big task?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "كانت وادي لَكَّةَ سنةَ ٩٢هـ — المصدر: فتوح البلدان",
    "en": "Wadi Lakka (Guadalete) was in 92 AH — Source: Futuh al-Buldan"
   },
   {
    "ar": "قبلَ طارقٍ بعامٍ أرسلَ موسى بنُ نُصَيرٍ طريفَ بنَ مالكٍ في نحوِ خمسمئةِ رجلٍ يستكشفُ الساحل، وإليه تُنسَبُ مدينةُ «طريف» في إسبانيا اليوم — المصدر: الكامل في التاريخ · نفح الطيب",
    "en": "A year before Tariq, Musa ibn Nusayr sent Tarif ibn Malik with about five hundred men to scout the coast; the Spanish town of Tarifa is named after him — Source: Al-Kamil fi at-Tarikh · Nafh at-Tib"
   }
  ]
 },
 {
  "icon": "🔥",
  "scene": "desert",
  "character": "🛡️",
  "title": {
   "ar": "خطبةُ طارقٍ المشهورة (المعركة)",
   "en": "Tariq’s Famous Speech (The Battle)"
  },
  "pages": [
   {
    "scene": "desert",
    "character": "🐎",
    "text": {
     "ar": "لمّا علمَ طارقٌ أنّ لُذريقَ قادمٌ بجيشٍ ضخم، لم يغترَّ بشجاعتِه ولم يتهوّر، بل كتبَ إلى <b>موسى بنِ نُصَير</b> يطلبُ المدد، فأرسلَ إليه موسى خمسةَ آلافِ رجل. وهذه حكمةُ القائد: أن يأخذَ بالأسبابِ كلِّها، ثمّ يتوكّلَ على الله.<br><br>والتقى الجيشانِ قربَ نهرٍ في جنوبِ الأندلسِ يُسمّيه المؤرّخونَ <b>وادي لَكَّة</b>، وكان ذلك في <b>شهرِ رمضانَ سنةَ ٩٢هـ</b>. والمسلمونَ صائمونَ صابرون، بعيدونَ عن بلادِهم، ليس لهم إلّا اللهُ ثمّ ثباتُهم.",
     "en": "When Tariq learned that Roderic was coming with a huge army, he was not deceived by his own courage and did not act rashly. He wrote to <b>Musa ibn Nusayr</b> asking for reinforcements, and Musa sent him five thousand men. This is a commander's wisdom: to take every means, and then to rely on Allah.<br><br>The two armies met near a river in the south of al-Andalus that historians call <b>Wadi Lakka</b>, in <b>the month of Ramadan, 92 AH</b>. The Muslims were fasting and patient, far from their homelands, with no one but Allah and then their own steadfastness."
    }
   },
   {
    "scene": "desert",
    "character": "🔥",
    "text": {
     "ar": "ثم جاءتِ المواجهةُ الكبرى عند <b>وادي لَكَّة</b>. تأمّلْ <b>ميزانَ القوى</b>: نحوُ <b>اثني عشرَ ألفَ</b> مسلمٍ — بعدَ أن أمدَّهم موسى بخمسةِ آلافٍ — أمامَ جيشِ الملكِ لُذريقَ الجرّارِ الذي بلغَ نحوَ <b>مئةِ ألفِ</b> مقاتل! أي إنّ كلَّ مسلمٍ يقفُ أمامَ نحوِ <b>ثمانيةٍ</b> من أعدائه، وجاءَ لُذريقُ على عرشٍ يجرُّه البِغالُ تكبُّراً، وحولَه السلاحُ والخيلُ والدُّروع. وقفَ <b>طارقٌ</b> في جنودِه القليلينَ وخطبَ خطبتَه المشهورةَ يُذكِّرُهم باللهِ قبلَ السيف: «أيّها الناسُ، أينَ المفرُّ؟ البحرُ من ورائِكم والعدوُّ أمامَكم، وليس لكم — واللهِ — إلا <b>الصدقُ والصبر</b>». ذكّرَهم أنّ النصرَ بيدِ اللهِ لا بالعدد، وأنّ القلّةَ المؤمنةَ تَغلِبُ الكثرةَ بإذنِه. فاشتعلتِ العزائمُ، وامتلأتِ القلوبُ يقيناً، وقاتلوا كالأبطالِ يطلبونَ إحدى الحُسنَيَين: النصرَ أو الجنّة.",
     "en": "Then came the great clash at <b>Wadi Lakka (Guadalete)</b>. Ponder the <b>balance of power</b>: about <b>twelve thousand</b> Muslims — after Musa reinforced them with five thousand — against King Roderic’s vast army of nearly <b>one hundred thousand</b> fighters! Each Muslim stood before about <b>eight</b> of his enemies; Roderic came on a throne drawn by mules in arrogance, surrounded by arms, horses, and armor. <b>Tariq</b> stood among his few soldiers and gave his famous speech, reminding them of Allah before the sword: “O people, where is the escape? The sea is behind you and the enemy before you; by Allah, you have nothing but <b>truth and patience</b>.” He reminded them that victory is in Allah’s hand, not in numbers, and that a believing few overcome the many by His leave. Resolve blazed, hearts filled with certainty, and they fought like heroes seeking one of two goods: victory or Paradise."
    },
    "choice": {
     "q": {
      "ar": "بمَ حثَّ طارقٌ جنودَه؟",
      "en": "To what did Tariq urge his soldiers?"
     },
     "opts": [
      {
       "t": {
        "ar": "الصدقِ والصبرِ والعزيمة",
        "en": "Truth, patience, and resolve"
       },
       "c": true,
       "exp": {
        "ar": "نعم! كلماتٌ تُشعِلُ الهمم.",
        "en": "Yes! Words that ignite resolve."
       }
      },
      {
       "t": {
        "ar": "الهروب",
        "en": "Running away"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل الصبرَ والثبات.",
        "en": "No — patience and steadfastness."
       }
      },
      {
       "t": {
        "ar": "الاستسلام",
        "en": "Surrender"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل العزيمة.",
        "en": "No — resolve."
       }
      }
     ]
    }
   },
   {
    "scene": "mosque",
    "character": "🤲",
    "text": {
     "ar": "وقد علّمَ النبيُّ ﷺ أصحابَه أدبَ المواجهة فقال: <b>«لا تتمنَّوا لقاءَ العدوّ، وسَلُوا اللهَ العافية، فإذا لقيتموهم فاصبروا»</b>. فالمسلمُ لا يحبُّ الحربَ ولا يطلبُها، لكنّه إذا وقفَ في موقفِ الحقِّ ثبتَ ولم يهرب.<br><br>ونحن اليومَ لا نقفُ في ساحاتِ المعارك، لكنّ لكلٍّ منّا «وادياً» يحتاجُ فيه إلى الصبر: امتحانٌ صعب، أو قولُ الحقِّ أمامَ زملائِك، أو تركُ عادةٍ سيّئة. فتذكّرْ كلمةَ طارق: ليس لك إلّا <b>الصدقُ والصبر</b>، واطلبِ العونَ من الله.",
     "en": "The Prophet ﷺ taught his companions the manners of facing an enemy, saying: <b>\"Do not wish to meet the enemy, and ask Allah for well-being; but when you meet them, be patient.\"</b> A Muslim does not love war or seek it, but when he stands in a position of truth, he stands firm and does not run.<br><br>Today we do not stand on battlefields, but each of us has a \"valley\" where we need patience: a hard exam, speaking the truth in front of classmates, or giving up a bad habit. Remember Tariq's words: you have nothing but <b>truthfulness and patience</b> — and seek help from Allah."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "ماذا كان خلفَ جيشِ طارق؟",
     "en": "What was behind Tariq’s army?"
    },
    "opts": [
     {
      "t": {
       "ar": "البحر",
       "en": "The sea"
      },
      "c": true
     },
     {
      "t": {
       "ar": "جبلٌ عالٍ",
       "en": "A high mountain"
      },
      "c": false
     },
     {
      "t": {
       "ar": "مدينة",
       "en": "A city"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "بمَ اشتهرَ طارقٌ قبلَ المعركة؟",
     "en": "What was Tariq famous for before the battle?"
    },
    "opts": [
     {
      "t": {
       "ar": "خطبتِه الملهِمة",
       "en": "His inspiring speech"
      },
      "c": true
     },
     {
      "t": {
       "ar": "صمتِه",
       "en": "His silence"
      },
      "c": false
     },
     {
      "t": {
       "ar": "نومِه",
       "en": "His sleeping"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "كم صارَ عددُ المسلمينَ بعدَ أن أمدَّهم موسى؟",
     "en": "How many Muslims were there after Musa reinforced them?"
    },
    "opts": [
     {
      "t": {
       "ar": "نحوُ مئةِ ألف",
       "en": "About one hundred thousand"
      },
      "c": false
     },
     {
      "t": {
       "ar": "نحوُ اثني عشرَ ألفاً",
       "en": "About twelve thousand"
      },
      "c": true
     },
     {
      "t": {
       "ar": "نحوُ ألفٍ فقط",
       "en": "Only about one thousand"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "الكلمةُ الصادقةُ تُشعِلُ العزائمَ وتصنعُ الأبطال.",
   "en": "A sincere word ignites resolve and makes heroes."
  },
  "badge": {
   "icon": "🔥",
   "title": {
    "ar": "وِسامُ العزيمة",
    "en": "Badge of Resolve"
   }
  },
  "reflect": [
   {
    "ar": "كيف تُشجّعُ نفسَك حين لا مفرَّ من مواجهةِ أمرٍ صعب؟",
    "en": "How do you encourage yourself when you must face something hard?"
   },
   {
    "ar": "ماذا تقولُ لصديقِك الخائفِ قبلَ امتحانٍ أو موقفٍ صعب؟",
    "en": "What would you say to a frightened friend before an exam or a hard situation?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "خطبةُ طارقٍ من أشهرِ الخُطبِ في التاريخ — المصدر: نفح الطيب",
    "en": "Tariq’s speech is among history’s most famous — Source: Nafh at-Tib"
   },
   {
    "ar": "قال النبيُّ ﷺ: «لا تتمنَّوا لقاءَ العدوّ، وسَلُوا اللهَ العافية، فإذا لقيتموهم فاصبروا» — المصدر: صحيح البخاري ومسلم",
    "en": "The Prophet ﷺ said: \"Do not wish to meet the enemy, and ask Allah for well-being; but when you meet them, be patient\" — Source: Sahih al-Bukhari & Muslim"
   }
  ]
 },
 {
  "icon": "🌟",
  "scene": "ascend",
  "character": "⭐",
  "title": {
   "ar": "فتحُ الأندلس (النصر)",
   "en": "The Opening of Andalusia (Victory)"
  },
  "pages": [
   {
    "scene": "desert",
    "character": "⚔️",
    "text": {
     "ar": "بعدَ أن سمعَ الجنودُ كلماتِ طارقٍ اشتدّتْ عزائمُهم، ووقفوا صفوفاً متراصّةً كالبنيان. وكان في جيشِ لُذريقَ — كما يذكرُ المؤرّخون — بعضُ الأمراءِ الناقمينَ عليه بسببِ ظلمِه، فلم يكونوا معه بقلوبِهم، وتخلّى بعضُهم عنه أثناءَ القتال. فالظالمُ قد يجمعُ حولَه الجنودَ الكثيرين، لكنّه لا يملكُ قلوبَهم.<br><br>أمّا المسلمونَ فكانت قلوبُهم مجتمعةً على هدفٍ واحد: رضا الله.",
     "en": "After the soldiers heard Tariq's words, their resolve grew strong, and they stood in tight rows like a solid building. In Roderic's army — as historians mention — were some nobles who resented him for his injustice; they were not with him in their hearts, and some of them abandoned him during the fighting. A tyrant may gather many soldiers around him, but he does not own their hearts.<br><br>As for the Muslims, their hearts were united on one goal: the pleasure of Allah."
    }
   },
   {
    "scene": "ascend",
    "character": "⭐",
    "text": {
     "ar": "ودارتِ المعركةُ أياماً، والمسلمونَ يصبرونَ ويثبتون، حتى أنزلَ اللهُ نصرَه: انهزمَ جيشُ لُذريقَ العظيمُ وفرَّ مَلِكُه فلم يُعرَفْ له أثر، وغرقَ كبرياؤُه في الوادي! فانظُرِ <b>الإعجاز</b>: قِلّةٌ مؤمنةٌ تَغلِبُ جيشاً يفوقُها ثمانيةَ أضعاف — مِصداقَ قولِه تعالى: ﴿<b>كم من فئةٍ قليلةٍ غلبت فئةً كثيرةً بإذنِ الله</b>﴾. لم يكن السيفُ وحدَه، بل الإيمانُ والتوكّلُ والإخلاصُ في طلبِ العدل. وفُتِحتْ <b>الأندلسُ</b>، فعاشَ فيها المسلمونَ نحوَ <b>٨٠٠ سنة</b> أقاموا فيها العلمَ والعدلَ والحضارة، وبَنَوا المدارسَ والمكتباتِ والجامعاتِ والمساجدَ الجميلةَ كقُرطبةَ وغَرناطة، حتى صارتِ الأندلسُ منارةَ علمٍ يقصِدُها العالَمُ كلُّه.",
     "en": "The battle raged for days, the Muslims patient and steadfast, until Allah sent His victory: Roderic’s great army was routed, its king fled and was never found, his pride drowned in the valley! Behold the <b>miracle</b>: a believing few overcoming an army eight times their size — fulfilling Allah’s words: ﴿<b>How many a small group has overcome a large group by Allah’s leave</b>﴾. It was not the sword alone, but faith, reliance on Allah, and sincerity in seeking justice. <b>Andalusia</b> was opened, and the Muslims lived there about <b>800 years</b>, establishing knowledge, justice, and civilization, building schools, libraries, universities, and beautiful mosques like Córdoba and Granada — until Andalusia became a beacon of learning sought by the whole world."
    },
    "choice": {
     "q": {
      "ar": "كم سنةً عاشَ المسلمونَ في الأندلس؟",
      "en": "How long did Muslims live in Andalusia?"
     },
     "opts": [
      {
       "t": {
        "ar": "نحوَ ٨٠٠ سنةٍ من العلمِ والحضارة",
        "en": "About 800 years of knowledge and civilization"
       },
       "c": true,
       "exp": {
        "ar": "نعم! حضارةٌ عظيمةٌ مزدهرة.",
        "en": "Yes! A great, flourishing civilization."
       }
      },
      {
       "t": {
        "ar": "يوماً واحداً",
        "en": "One day"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل قروناً طويلة.",
        "en": "No — for long centuries."
       }
      },
      {
       "t": {
        "ar": "سنةً",
        "en": "One year"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل ٨٠٠ سنة.",
        "en": "No — 800 years."
       }
      }
     ]
    }
   },
   {
    "scene": "madinah",
    "character": "🏰",
    "text": {
     "ar": "ثمّ سارَ طارقٌ إلى <b>طُلَيطِلة</b>، عاصمةِ المملكة، فدخلَها، ولحقَ به <b>موسى بنُ نُصَير</b> سنةَ ٩٣هـ بجيشٍ آخر، فالتقيا وأكملا فتحَ أكثرِ البلاد. وكان المسلمونَ يكتبونَ للناسِ <b>عهودَ الأمان</b>؛ ومن أشهرِها عهدٌ كتبَه <b>عبدُ العزيزِ بنُ موسى</b> لأميرٍ اسمُه تُدمير، يُؤمّنُه وقومَه على أنفسِهم وأموالِهم، ولا يُكرَهونَ على دينِهم، ولا تُحرَقُ كنائسُهم.<br><br>فعرفَ الناسُ أنّ هؤلاءِ القادمينَ جاؤوا بالعدلِ لا بالظلم، فأسلمَ كثيرٌ منهم عن رضا وقناعة.",
     "en": "Then Tariq marched to <b>Toledo</b>, the capital of the kingdom, and entered it. <b>Musa ibn Nusayr</b> followed him in 93 AH with another army; they met and together completed the opening of most of the land. The Muslims wrote <b>covenants of safety</b> for the people. One of the most famous was written by <b>Abd al-Aziz ibn Musa</b> for a prince named Theodemir, guaranteeing him and his people safety for their lives and property, that they would not be forced out of their religion, and that their churches would not be burned.<br><br>So people saw that these newcomers had come with justice, not oppression, and many of them embraced Islam willingly and with conviction."
    }
   },
   {
    "scene": "pen",
    "character": "📚",
    "text": {
     "ar": "وبقيتِ الأندلسُ قروناً منارةً للعلم، خرجَ منها علماءُ في التفسيرِ والحديثِ والطبِّ والفلك. لكنّها ضاعتْ في النهايةِ حين <b>تفرّقَ المسلمونَ</b> وتنازعوا، حتى سقطتْ غرناطةُ سنةَ ٨٩٧هـ. واللهُ يقول: <b>﴿وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ﴾</b>.<br><br>فالدرسُ لنا: النصرُ يأتي بالإيمانِ والعدلِ والوحدة، ويضيعُ بالتفرّقِ والظلم. فكنْ في بيتِك وفصلِك صانعَ <b>محبّةٍ واتّفاق</b>، وابنِ بعلمِك شيئاً نافعاً يبقى بعدَك.",
     "en": "Al-Andalus remained a beacon of learning for centuries, producing scholars of Qur'anic commentary, hadith, medicine and astronomy. But in the end it was lost when <b>the Muslims became divided</b> and quarreled, until Granada fell in 897 AH. Allah says: <b>﴿\"And do not dispute with one another, or you will lose heart and your strength will depart\"﴾</b>.<br><br>So the lesson for us: victory comes through faith, justice and unity, and is lost through division and injustice. Be a maker of <b>love and agreement</b> in your home and your class, and with your knowledge build something useful that lasts after you."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "على مَن نصرَ اللهُ المسلمينَ رغمَ قلّتِهم؟",
     "en": "Over whom did Allah aid the few Muslims?"
    },
    "opts": [
     {
      "t": {
       "ar": "الملكِ الظالم",
       "en": "The unjust king"
      },
      "c": true
     },
     {
      "t": {
       "ar": "المغول",
       "en": "The Mongols"
      },
      "c": false
     },
     {
      "t": {
       "ar": "الفُرس",
       "en": "The Persians"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "ماذا بنى المسلمونَ في الأندلس؟",
     "en": "What did the Muslims build in Andalusia?"
    },
    "opts": [
     {
      "t": {
       "ar": "المدارسَ والمكتباتِ والمساجد",
       "en": "Schools, libraries, mosques"
      },
      "c": true
     },
     {
      "t": {
       "ar": "لا شيء",
       "en": "Nothing"
      },
      "c": false
     },
     {
      "t": {
       "ar": "الحصونَ فقط",
       "en": "Only forts"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "ما المدينةُ التي كانت عاصمةَ المملكةِ ودخلَها طارق؟",
     "en": "Which city was the kingdom’s capital that Tariq entered?"
    },
    "opts": [
     {
      "t": {
       "ar": "طُلَيطِلة",
       "en": "Toledo"
      },
      "c": true
     },
     {
      "t": {
       "ar": "بغداد",
       "en": "Baghdad"
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
   }
  ],
  "moral": {
   "ar": "العزيمةُ والإيمانُ يفتحانِ الأبوابَ ويبنيانِ الحضارات.",
   "en": "Resolve and faith open doors and build civilizations."
  },
  "badge": {
   "icon": "🌟",
   "title": {
    "ar": "وِسامُ فاتحِ الأندلس",
    "en": "Badge of the Andalusia-Opener"
   }
  },
  "reflect": [
   {
    "ar": "كيف تجعلُ أثرَك في الدنيا نافعاً وباقياً؟",
    "en": "How do you make your mark useful and lasting?"
   },
   {
    "ar": "كيف يحافظُ الناسُ على وحدتِهم حتى لا يضيعَ ما بنوه؟",
    "en": "How can people keep their unity so that what they built is not lost?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "ازدهرتِ الأندلسُ بالعلمِ والعمارةِ قروناً طويلة — المصدر: نفح الطيب",
    "en": "Andalusia flourished in knowledge and architecture for centuries — Source: Nafh at-Tib"
   },
   {
    "ar": "كتبَ عبدُ العزيزِ بنُ موسى بنِ نُصَيرٍ سنةَ ٩٤هـ عهداً لتُدميرَ يُؤمّنُه وقومَه على أنفسِهم ودينِهم وكنائسِهم، وحُفِظَ نصُّه في كتبِ التاريخ — المصدر: بغية الملتمس للضبّي",
    "en": "In 94 AH Abd al-Aziz ibn Musa ibn Nusayr wrote a covenant for Theodemir guaranteeing him and his people safety for their lives, religion and churches; its text is preserved in the histories — Source: Bughyat al-Multamis by ad-Dabbi"
   }
  ]
 }
];
