/* data/stories/nahawand.js — Battles · معركة نهاوند (multi-story set)
   Sources: البداية والنهاية · تاريخ الطبري · الكامل لابن الأثير · إسلام ويب · الدرر السنية */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.nahawand = [
 {
  "icon": "📜",
  "scene": "mountain",
  "character": "🤔",
  "title": {
   "ar": "فتحُ الفتوح (الأسباب)",
   "en": "The Victory of Victories (Causes)"
  },
  "pages": [
   {
    "scene": "throne",
    "character": "👑",
    "text": {
     "ar": "بعد أن انتصرَ المسلمونَ في <b>القادسيّة</b>، ثمّ فتحوا <b>المدائنَ</b> عاصمةَ الفرس، هربَ ملكُهم <b>يَزْدَجِرْد</b> إلى الشرق. لكنّه لم يستسلم، بل كتبَ إلى أهلِ بلادِه في كلِّ ناحية: اجتمِعوا! فجاءتِ الجنودُ من الجبالِ والمدنِ البعيدة، واجتمعوا عند مدينةِ <b>نهاوند</b> بين جبالٍ عاليةٍ، وجعلوا عليهم قائداً اسمُه <b>الفَيْرُزان</b>.<br><br>ووصلَ الخبرُ إلى <b>المدينةِ المنوّرة</b>، إلى أميرِ المؤمنين <b>عمرَ بنِ الخطّاب</b> رضي الله عنه، سنةَ <b>٢١ للهجرة</b>. فعرفَ عمرُ أنّ هذه ليست معركةً عاديّة، بل هي آخرُ ما بقيَ من قوّةِ فارس.",
     "en": "After the Muslims won at <b>al-Qadisiyyah</b> and then conquered <b>al-Mada’in</b>, the Persian capital, their king <b>Yazdegerd</b> fled east. But he did not give up. He wrote to his people in every region: Gather! Soldiers came from the mountains and distant cities and assembled at the town of <b>Nahawand</b>, among high mountains, with a commander named <b>al-Fayruzan</b> at their head.<br><br>The news reached <b>Madinah</b>, the Commander of the Believers <b>Umar ibn al-Khattab</b> (may Allah be pleased with him), in the year <b>21 AH</b>. Umar knew this was no ordinary battle: it was all that remained of Persia’s power."
    }
   },
   {
    "scene": "mountain",
    "character": "🤔",
    "text": {
     "ar": "بعد القادسيّةِ لم تستسلمْ فارس، بل جمعت <b>آخرَ جيوشِها العظيمة</b> عند نهاوندَ لِتُوقفَ المسلمينَ نهائيّاً. تأمّلْ <b>ميزانَ القوى</b>: نحوُ <b>٣٠ ألفَ</b> مسلمٍ أمامَ جيشٍ فارسيٍّ بلغَ نحوَ <b>١٥٠ ألفِ</b> مقاتل — أي إنّ كلَّ مسلمٍ يقفُ أمامَ نحوِ <b>خمسةٍ</b> من أعدائه! وربطَ الفُرسُ بعضَهم ببعضٍ بالسلاسلِ لئلا يفرّوا، وتحصّنوا في مكانِهم. كانت معركةً فاصلة: مَن ينتصرْ فيها يحسمِ الأمر. ولهذا سمّاها المسلمونَ <b>«فتحَ الفتوح»</b>. ومع هذه الكثرةِ الهائلةِ ما وهَنَ المؤمنون؛ لأنّهم يعلمونَ أنّ النصرَ بيدِ اللهِ لا بعددِ الجنود.",
     "en": "After al-Qadisiyyah, Persia did not surrender; it gathered <b>its last great armies</b> at Nahawand to stop the Muslims for good. Ponder the <b>balance of power</b>: about <b>30,000</b> Muslims against a Persian army of nearly <b>150,000</b> fighters — each Muslim standing before about <b>five</b> of his enemies! The Persians even chained themselves together so none would flee, and fortified their position. It was a decisive battle: whoever won would settle the matter. So the Muslims called it <b>“the Victory of Victories.”</b> Yet with all this overwhelming number the believers did not weaken — for they knew victory is in Allah’s hand, not in the count of soldiers."
    },
    "choice": {
     "q": {
      "ar": "لماذا سُمّيت «فتحَ الفتوح»؟",
      "en": "Why was it called “the Victory of Victories”?"
     },
     "opts": [
      {
       "t": {
        "ar": "لأنّها حسمت أمرَ فارسَ نهائيّاً",
        "en": "It settled Persia’s matter for good"
       },
       "c": true,
       "exp": {
        "ar": "نعم! كانت المعركةَ الفاصلة.",
        "en": "Yes! It was the decisive battle."
       }
      },
      {
       "t": {
        "ar": "لأنّها كانت صغيرة",
        "en": "It was a small battle"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل عظيمةٌ فاصلة.",
        "en": "No — it was great and decisive."
       }
      },
      {
       "t": {
        "ar": "لأنّها كانت في مكّة",
        "en": "It was in Makkah"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل في فارس.",
        "en": "No — it was in Persia."
       }
      }
     ]
    }
   },
   {
    "scene": "madinah",
    "character": "🧔",
    "text": {
     "ar": "فماذا فعلَ عمر؟ جمعَ الصحابةَ وشاورَهم، وأرادَ أن يخرجَ بنفسِه إلى الجيش. فأشارَ عليه كبارُ الصحابةِ أن يبقى في المدينة؛ فهو <b>رأسُ المسلمين</b>، وإن أصابَه شيءٌ اضطربَ أمرُ الناس. فقبلَ عمرُ النصيحة، واختارَ للقيادةِ صحابيّاً تقيّاً هو <b>النعمانُ بنُ مُقَرِّن</b>.<br><br>وكتبَ عمرُ ترتيباً حكيماً: إن أُصيبَ النعمانُ فالأميرُ <b>حذيفةُ بنُ اليمان</b>، فإن أُصيبَ فالأميرُ بعدَه رجلٌ آخرُ سمّاه. هكذا يكونُ القائدُ الحكيم: <b>يستشير</b>، ويقبلُ النصيحة، ويستعدُّ لكلِّ احتمالٍ قبلَ أن يقع. وأنتَ أيضاً: شاورْ أهلَك قبلَ قراراتِك المهمّة، وخطّطْ قبلَ أن تبدأ.",
     "en": "So what did Umar do? He gathered the Companions and consulted them, wanting to march out to the army himself. The senior Companions advised him to remain in Madinah: he was <b>the head of the Muslims</b>, and if anything happened to him, people’s affairs would fall into disorder. Umar accepted the advice and chose a devout Companion to lead: <b>an-Nu’man ibn Muqarrin</b>.<br><br>Umar also wrote a wise order of command: if an-Nu’man is struck down, the leader is <b>Hudhayfa ibn al-Yaman</b>; and if he is struck down, then another man he named after him. This is how a wise leader acts: he <b>consults</b>, accepts advice, and prepares for every possibility before it happens. You too: consult your family before important decisions, and plan before you begin."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "ماذا جمعت فارسُ عند نهاوند؟",
     "en": "What did Persia gather at Nahawand?"
    },
    "opts": [
     {
      "t": {
       "ar": "آخرَ جيوشِها العظيمة",
       "en": "Its last great armies"
      },
      "c": true
     },
     {
      "t": {
       "ar": "قافلةَ تجارة",
       "en": "A trade caravan"
      },
      "c": false
     },
     {
      "t": {
       "ar": "الفِيَلةَ فقط",
       "en": "Only elephants"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "بماذا لُقّبتِ المعركة؟",
     "en": "What was the battle nicknamed?"
    },
    "opts": [
     {
      "t": {
       "ar": "فتحُ الفتوح",
       "en": "The Victory of Victories"
      },
      "c": true
     },
     {
      "t": {
       "ar": "يومُ الفرقان",
       "en": "The Day of Distinction"
      },
      "c": false
     },
     {
      "t": {
       "ar": "أمُّ المعارك",
       "en": "Mother of Battles"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "مَن اختارَ عمرُ قائداً لجيشِ المسلمينَ في نهاوند؟",
     "en": "Whom did Umar choose to lead the Muslim army at Nahawand?"
    },
    "opts": [
     {
      "t": {
       "ar": "خالدَ بنَ الوليد",
       "en": "Khalid ibn al-Walid"
      },
      "c": false
     },
     {
      "t": {
       "ar": "النعمانَ بنَ مُقَرِّن",
       "en": "An-Nu’man ibn Muqarrin"
      },
      "c": true
     },
     {
      "t": {
       "ar": "عمرَو بنَ العاص",
       "en": "Amr ibn al-As"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "بعد كلِّ نجاحٍ قد تأتي مهمّةٌ أكبر، فاستعدَّ لها بعزيمة.",
   "en": "After each success a bigger task may come; prepare for it with resolve."
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
    "ar": "كيف تستعدُّ للمهمّاتِ الكبيرةِ في حياتك؟",
    "en": "How do you prepare for big tasks in life?"
   },
   {
    "ar": "لماذا قبلَ عمرُ نصيحةَ الصحابةِ وبقيَ في المدينة؟",
    "en": "Why did Umar accept the Companions’ advice and stay in Madinah?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "كانت نهاوندُ سنةَ ٢١هـ في خلافةِ عمر — المصدر: تاريخ الطبري",
    "en": "Nahawand was in 21 AH under Umar — Source: Tarikh at-Tabari"
   },
   {
    "ar": "شاورَ عمرُ الصحابةَ في الخروجِ بنفسِه إلى نهاوند، ثمّ أمّرَ النعمانَ بنَ مقرّن، وجعلَ حذيفةَ بنَ اليمانِ أميراً إن أُصيبَ النعمان — المصدر: تاريخ الطبري (سنة ٢١هـ) · البداية والنهاية",
    "en": "Umar consulted the Companions about marching to Nahawand himself, then appointed an-Nu’man ibn Muqarrin, naming Hudhayfa ibn al-Yaman as commander if an-Nu’man fell — Source: Tarikh at-Tabari (year 21 AH) · Al-Bidaya wa an-Nihaya"
   }
  ]
 },
 {
  "icon": "🤲",
  "scene": "desert",
  "character": "🤲",
  "title": {
   "ar": "دعاءُ النعمانِ ودموعُه",
   "en": "An-Nu’man’s Prayer & Tears"
  },
  "pages": [
   {
    "scene": "mountain",
    "character": "🏰",
    "text": {
     "ar": "وصلَ جيشُ المسلمينَ إلى نهاوند، فوجدوا الفرسَ قد تحصّنوا خلفَ <b>خنادقَ</b> وحصون، لا يخرجونَ إلّا متى شاؤوا. مرّتِ الأيّامُ والجيشانِ ينتظران، والبردُ يشتدُّ بين الجبال. فجمعَ النعمانُ قادتَه وشاورَهم: كيف نُخرجُهم من حصونِهم؟<br><br>فاتّفقوا على <b>حيلةٍ ذكيّة</b>: تتقدّمُ خيلٌ من المسلمينَ فتناوشُ الفرس، ثمّ تتراجعُ كأنّها منهزمة. فلمّا فعلَ ذلك الفارسُ الشجاعُ <b>القعقاعُ بنُ عمرو</b>، طمعَ الفرسُ وخرجوا من خنادقِهم يلحقونَ به، حتى صاروا في الأرضِ المكشوفةِ أمامَ جيشِ المسلمين.",
     "en": "The Muslim army reached Nahawand and found the Persians fortified behind <b>trenches</b> and strongholds, coming out only when they pleased. Days passed with both armies waiting, and the cold grew harsh among the mountains. So an-Nu’man gathered his commanders and consulted them: How can we draw them out of their fortresses?<br><br>They agreed on <b>a clever plan</b>: Muslim horsemen would advance and skirmish with the Persians, then fall back as if defeated. When the brave horseman <b>al-Qa’qa’ ibn Amr</b> did this, the Persians grew eager and came out of their trenches chasing him — until they stood in the open ground facing the Muslim army."
    }
   },
   {
    "scene": "desert",
    "character": "🤲",
    "text": {
     "ar": "خرجَ الفرسُ، وتهيّأَ المسلمونَ للقتال، وتمنّى بعضُهم أن يبدأَ القتالُ فوراً. لكنّ النعمانَ كان ينتظرُ وقتاً يعرفُه من صحبتِه للنبيّ ﷺ.<br><br>قبلَ المعركةِ وقفَ القائدُ التقيُّ <b>النعمانُ بنُ مُقَرِّن</b> ورفعَ يديه باكياً: «اللّهمَّ أعِزَّ دينَك وانصُرْ عبادَك، وارزُقِ النعمانَ <b>شهادةً</b> ونصراً يُعِزُّ به الإسلام». ثم قال: إذا هبّتِ الريحُ وزالتِ الشمسُ فاحملوا، فتلك ساعةُ استجابة.",
     "en": "The Persians had come out, and the Muslims were ready to fight; some wished the battle would begin at once. But an-Nu’man was waiting for a time he knew from his companionship with the Prophet ﷺ.<br><br>Before the battle the devout commander <b>an-Nu’man ibn Muqarrin</b> stood and raised his hands weeping: “O Allah, honour Your religion and aid Your servants, and grant an-Nu’man <b>martyrdom</b> and a victory by which You honour Islam.” Then he said: when the wind blows and the sun declines, charge — for that is an hour of answered prayer."
    },
    "choice": {
     "q": {
      "ar": "ماذا طلبَ النعمانُ من ربِّه؟",
      "en": "What did an-Nu’man ask of his Lord?"
     },
     "opts": [
      {
       "t": {
        "ar": "عزّةَ الإسلامِ والشهادةَ في سبيلِ الله",
        "en": "Honour for Islam and martyrdom for Allah"
       },
       "c": true,
       "exp": {
        "ar": "نعم! دعا بخيرٍ عظيمٍ لدينِه ولنفسِه.",
        "en": "Yes! He asked great good for his faith and himself."
       }
      },
      {
       "t": {
        "ar": "المالَ والجاه",
        "en": "Wealth and status"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل عزّةَ الدين.",
        "en": "No — honour for the faith."
       }
      },
      {
       "t": {
        "ar": "الراحةَ والنوم",
        "en": "Rest and sleep"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل النصرَ والشهادة.",
        "en": "No — victory and martyrdom."
       }
      }
     ]
    }
   },
   {
    "scene": "wind",
    "character": "🚩",
    "text": {
     "ar": "ما سرُّ هذا الوقت؟ روى البخاريُّ في صحيحِه أنّ النعمانَ قال: <b>«شهدتُ القتالَ مع رسولِ اللهِ ﷺ، كان إذا لم يقاتلْ في أوّلِ النهار انتظرَ حتى تهبَّ الأرواحُ وتحضرَ الصلوات»</b>. فهو يقتدي بالنبيِّ ﷺ حتى في اختيارِ الساعة!<br><br>ويذكرُ المؤرّخونَ أنّه قال لجنودِه: إنّي هازٌّ الرايةَ ثلاثَ مرّات؛ في الأولى تهيّؤوا، وفي الثانيةِ أعِدّوا سلاحَكم، فإذا هززتُها الثالثةَ فاحملوا. وبكى الناسُ حين سمعوا دعاءَه، وقالوا: آمين.",
     "en": "What was the secret of that time? Al-Bukhari reports in his Sahih that an-Nu’man said: <b>\"I witnessed fighting with the Messenger of Allah ﷺ; if he did not fight at the start of the day, he would wait until the winds blew and the prayer times came.\"</b> He followed the Prophet ﷺ even in choosing the hour!<br><br>Historians mention that he told his soldiers: I will shake the banner three times; at the first, get ready; at the second, prepare your weapons; and when I shake it the third time, charge. The people wept when they heard his prayer, and said: Ameen."
    }
   },
   {
    "scene": "night",
    "character": "🤲",
    "text": {
     "ar": "تأمّلْ هذا القائد: أمامَه جيشٌ عظيم، ومع ذلك لم يطلبْ لنفسِه مالاً ولا شهرة، بل طلبَ <b>عزّةَ الدين</b> ونصرَ المسلمين، وطلبَ الشهادة. لقد كان قلبُه متعلّقاً بالآخرةِ أكثرَ من الدنيا.<br><br>وأنتَ قبلَ امتحانِك، أو قبلَ أمرٍ صعبٍ يخيفُك، ارفعْ يديكَ مثلَ النعمان، وادعُ اللهَ بصدق، ثمّ اعملْ بأحسنِ ما تستطيع. واختَرْ أوقاتَ الإجابة: بين الأذانِ والإقامة، وفي السجود، وفي آخرِ الليل. فالدعاءُ <b>مفتاحُ كلِّ خير</b>.",
     "en": "Consider this commander: before him stood a mighty army, yet he asked nothing for himself — no wealth, no fame. He asked for <b>honour for the religion</b> and victory for the Muslims, and he asked for martyrdom. His heart was attached to the Hereafter more than to this world.<br><br>Before your exam, or before something difficult that frightens you, raise your hands like an-Nu’man, pray to Allah sincerely, then do your very best. And choose the times when prayers are answered: between the adhan and the iqamah, in sujud, and in the last part of the night. Supplication is <b>the key to every good</b>."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "بماذا دعا النعمانُ لنفسِه؟",
     "en": "What did an-Nu’man pray for himself?"
    },
    "opts": [
     {
      "t": {
       "ar": "الشهادةَ في سبيلِ الله",
       "en": "Martyrdom for Allah"
      },
      "c": true
     },
     {
      "t": {
       "ar": "المُلكَ",
       "en": "Kingship"
      },
      "c": false
     },
     {
      "t": {
       "ar": "الكنوزَ",
       "en": "Treasures"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "متى أمرَ بالحملِ على العدو؟",
     "en": "When did he order the charge?"
    },
    "opts": [
     {
      "t": {
       "ar": "حين تهبُّ الريحُ وتزولُ الشمس",
       "en": "When the wind blows and the sun declines"
      },
      "c": true
     },
     {
      "t": {
       "ar": "في منتصفِ الليل",
       "en": "At midnight"
      },
      "c": false
     },
     {
      "t": {
       "ar": "عند الفجرِ فقط",
       "en": "Only at dawn"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "ممّن تعلّمَ النعمانُ أن ينتظرَ هبوبَ الريحِ ووقتَ الصلاة؟",
     "en": "From whom did an-Nu’man learn to wait for the winds and the prayer time?"
    },
    "opts": [
     {
      "t": {
       "ar": "من الفرس",
       "en": "From the Persians"
      },
      "c": false
     },
     {
      "t": {
       "ar": "من رسولِ اللهِ ﷺ",
       "en": "From the Messenger of Allah ﷺ"
      },
      "c": true
     },
     {
      "t": {
       "ar": "من كتابٍ قديم",
       "en": "From an old book"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "الدعاءُ سلاحُ المؤمن، يرفعُ يديه قبلَ كلِّ أمرٍ عظيم.",
   "en": "Supplication is the believer’s weapon, raised before every great matter."
  },
  "badge": {
   "icon": "🤲",
   "title": {
    "ar": "وِسامُ الدعاء",
    "en": "Badge of Supplication"
   }
  },
  "reflect": [
   {
    "ar": "هل تدعو اللهَ قبلَ المهمّاتِ المهمّة؟",
    "en": "Do you pray to Allah before important tasks?"
   },
   {
    "ar": "ما الأوقاتُ التي تُرجى فيها إجابةُ الدعاء، ومتى ستدعو فيها هذا الأسبوع؟",
    "en": "Which times are hoped for answered prayers, and when will you pray in them this week?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "كان النعمانُ صحابيّاً تقيّاً كثيرَ الدعاء — المصدر: البداية والنهاية",
    "en": "An-Nu’man was a devout companion, much given to prayer — Source: Al-Bidaya wa an-Nihaya"
   },
   {
    "ar": "قال النعمانُ بنُ مقرّن: «شهدتُ القتالَ مع رسولِ اللهِ ﷺ، كان إذا لم يقاتلْ في أوّلِ النهار انتظرَ حتى تهبَّ الأرواحُ وتحضرَ الصلوات» — المصدر: صحيح البخاري (كتاب الجزية)",
    "en": "An-Nu’man ibn Muqarrin said: \"I witnessed fighting with the Messenger of Allah ﷺ; if he did not fight at the start of the day, he waited until the winds blew and the prayer times came\" — Source: Sahih al-Bukhari (Book of Jizya)"
   }
  ]
 },
 {
  "icon": "🚩",
  "scene": "ascend",
  "character": "🛡️",
  "title": {
   "ar": "الرايةُ لا تسقط (الشهادةُ والنصر)",
   "en": "The Banner Never Falls"
  },
  "pages": [
   {
    "scene": "ascend",
    "character": "🛡️",
    "text": {
     "ar": "حملَ المسلمونَ بثباتٍ وإيمانٍ بعد أن استدرجوا الفُرسَ من حصونِهم بحيلةٍ ذكيّة، وفي ذُروةِ النصرِ <b>زلّتْ قدمُ النعمانَ واستُشهِد</b>. فماذا حدث؟ هل توقّفَ الجيش؟ لا! <b>أخذَ أخوه الرايةَ</b> وسترَ الخبرَ ودفعَها إلى <b>حذيفةَ بنِ اليمان</b>، فأكملوا حتى تمَّ النصرُ العظيم. تأمّلِ <b>الإعجاز</b>: ثلاثونَ ألفاً يهزمونَ خمسةَ أضعافِهم من أعتى جيوشِ الأرض — مِصداقَ قولِه تعالى: ﴿<b>كم من فئةٍ قليلةٍ غلبت فئةً كثيرةً بإذنِ الله</b>﴾. لم يكن السرُّ في السيفِ وحدَه، بل في <b>دعاءِ النعمانِ ودموعِه</b> وصدقِ المؤمنينَ وتوكّلِهم. تحقّقَ دعاؤه: عزٌّ للإسلامِ وشهادةٌ له، وانكسرتْ شوكةُ فارسَ إلى الأبد.",
     "en": "The Muslims charged with steadfastness and faith after luring the Persians from their fortifications with a clever ruse, and at the peak of victory <b>an-Nu’man slipped and was martyred</b>. What happened? Did the army stop? No! <b>His brother took the banner</b>, concealed the news, and handed it to <b>Hudhayfa ibn al-Yaman</b>; they finished until the great victory was won. Behold the <b>miracle</b>: thirty thousand defeating five times their number of the mightiest armies on earth — fulfilling Allah’s words: ﴿<b>How many a small group has overcome a large group by Allah’s leave</b>﴾. The secret was not the sword alone, but <b>an-Nu’man’s prayer and tears</b>, and the believers’ sincerity and reliance on Allah. His prayer came true: honour for Islam and martyrdom for him, and Persia’s power was broken forever."
    },
    "choice": {
     "q": {
      "ar": "ماذا تعلّمنا حين استُشهِدَ القائد؟",
      "en": "What do we learn when the commander was martyred?"
     },
     "opts": [
      {
       "t": {
        "ar": "أنّ مهمّةَ الخيرِ تستمرُّ ولو غابَ صاحبُها",
        "en": "That the mission of good continues even if its bearer is gone"
       },
       "c": true,
       "exp": {
        "ar": "نعم! الخيرُ لا يقفُ على شخصٍ واحد.",
        "en": "Yes! Good does not depend on one person."
       }
      },
      {
       "t": {
        "ar": "أنّ كلَّ شيءٍ يتوقّف",
        "en": "That everything stops"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل حملَ الرايةَ غيرُه.",
        "en": "No — another raised the banner."
       }
      },
      {
       "t": {
        "ar": "أنّ المعركةَ خَسِرت",
        "en": "That the battle was lost"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل انتصروا.",
        "en": "No — they won."
       }
      }
     ]
    }
   },
   {
    "scene": "desert",
    "character": "💧",
    "text": {
     "ar": "ويروي الطبريُّ أنّ أخاه <b>مَعْقِلَ بنَ مُقَرِّن</b> جاءه بعدَ المعركة وفيه بقيّةٌ من حياة، فغسلَ وجهَه بالماء. ففتحَ النعمانُ عينيه وسأل: <b>«ما فعلَ الناس؟»</b> — لم يسألْ عن جرحِه ولا عن نفسِه، بل عن المسلمين! فقال معقل: فتحَ اللهُ عليهم.<br><br>فقال النعمان: <b>«الحمدُ لله، اكتبوا بذلك إلى عمر»</b>، ثمّ فاضتْ روحُه. حتى في آخرِ لحظةٍ من حياتِه كان يحمدُ اللهَ ويفكّرُ في أميرِه وفي فرحِ المسلمين.",
     "en": "At-Tabari reports that his brother <b>Ma’qil ibn Muqarrin</b> came to him after the battle while a little life still remained in him, and washed his face with water. An-Nu’man opened his eyes and asked: <b>\"What have the people done?\"</b> — he did not ask about his wound or himself, but about the Muslims! Ma’qil said: Allah has granted them victory.<br><br>An-Nu’man said: <b>\"Praise be to Allah — write and tell Umar,\"</b> and then his soul departed. Even in the last moment of his life he was praising Allah and thinking of his leader and of the Muslims’ joy."
    }
   },
   {
    "scene": "madinah",
    "character": "😢",
    "text": {
     "ar": "وفي المدينة كان عمرُ ينتظرُ الأخبارَ بقلقٍ كبير. فلمّا جاءه الرسولُ بالبشرى سألَه عن النعمان، فأخبرَه باستشهادِه، فبكى عمرُ بكاءً شديداً. ثمّ ذُكرتْ له أسماءُ شهداءَ آخرين، وقيل له: وآخرونَ لا تعرفُهم. فقال عمرُ ما معناه: وما يضرُّهم ألّا يعرفَهم عمر؟ إنّ اللهَ يعرفُهم!<br><br>يا صديقي، قد تعملُ خيراً لا يراه أحد، ولا يشكرُك عليه أحد. لا تحزن! فاللهُ يرى ويعرفُ ويحفظُ أجرَك. وإذا رأيتَ عملاً طيّباً بدأه غيرُك — فاحملْ أنتَ <b>الراية</b>، وأكملْه.",
     "en": "In Madinah, Umar was waiting for news with great worry. When the messenger arrived with the good news, Umar asked him about an-Nu’man, and he told him of his martyrdom — and Umar wept bitterly. Then the names of other martyrs were mentioned, and he was told: and others whom you do not know. Umar said words meaning: What harm is it to them that Umar does not know them? Allah knows them!<br><br>My friend, you may do good that no one sees and no one thanks you for. Don’t be sad! Allah sees, knows, and keeps your reward safe. And when you see a good work that someone else began — take up <b>the banner</b> yourself, and complete it."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "مَن حملَ الرايةَ بعد النعمان؟",
     "en": "Who took the banner after an-Nu’man?"
    },
    "opts": [
     {
      "t": {
       "ar": "حذيفةُ بنُ اليمان",
       "en": "Hudhayfa ibn al-Yaman"
      },
      "c": true
     },
     {
      "t": {
       "ar": "سعدٌ",
       "en": "Sa’d"
      },
      "c": false
     },
     {
      "t": {
       "ar": "بلال",
       "en": "Bilal"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "هل تحقّقَ دعاءُ النعمان؟",
     "en": "Was an-Nu’man’s prayer answered?"
    },
    "opts": [
     {
      "t": {
       "ar": "نعم: نصرٌ وشهادة",
       "en": "Yes: victory and martyrdom"
      },
      "c": true
     },
     {
      "t": {
       "ar": "لا",
       "en": "No"
      },
      "c": false
     },
     {
      "t": {
       "ar": "نصرٌ فقط",
       "en": "Only victory"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "ماذا سألَ النعمانُ قبلَ أن يموت؟",
     "en": "What did an-Nu’man ask before he died?"
    },
    "opts": [
     {
      "t": {
       "ar": "أين مالي؟",
       "en": "Where is my money?"
      },
      "c": false
     },
     {
      "t": {
       "ar": "ما فعلَ الناس؟",
       "en": "What have the people done?"
      },
      "c": true
     },
     {
      "t": {
       "ar": "مَن سيأخذُ مكاني؟",
       "en": "Who will take my place?"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "عملُ الخيرِ يستمرُّ ولو غابَ صاحبُه؛ فأكمِلْ ما بدأه غيرُك.",
   "en": "Good continues even when its bearer is gone; continue what others began."
  },
  "badge": {
   "icon": "🚩",
   "title": {
    "ar": "وِسامُ الرايةِ الباقية",
    "en": "Badge of the Enduring Banner"
   }
  },
  "reflect": [
   {
    "ar": "هل تُكملُ العملَ الطيّبَ الذي بدأه غيرُك؟",
    "en": "Do you continue the good others started?"
   },
   {
    "ar": "لماذا لا يحزنُ المؤمنُ إذا لم يعرفِ الناسُ عملَه الطيّب؟",
    "en": "Why doesn’t a believer feel sad if people don’t know about his good deeds?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "استُشهِدَ النعمانُ في ذُروةِ النصر فكان من السعداء — المصدر: تاريخ الطبري",
    "en": "An-Nu’man was martyred at the peak of victory — Source: Tarikh at-Tabari"
   },
   {
    "ar": "لمّا وجدَ معقلُ بنُ مقرّنٍ أخاه النعمانَ وبه رمق، سألَه النعمان: ما فعلَ الناس؟ فقال: فتحَ اللهُ عليهم، فقال: الحمدُ لله، اكتبوا بذلك إلى عمر — المصدر: تاريخ الطبري (سنة ٢١هـ) · البداية والنهاية",
    "en": "When Ma’qil ibn Muqarrin found his brother an-Nu’man still breathing, an-Nu’man asked: What have the people done? He said: Allah has given them victory. He said: Praise be to Allah, write to Umar about it — Source: Tarikh at-Tabari (year 21 AH) · Al-Bidaya wa an-Nihaya"
   }
  ]
 }
];
