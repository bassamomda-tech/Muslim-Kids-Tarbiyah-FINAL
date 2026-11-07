/* data/stories/aynjalut.js — Battles · معركة عين جالوت (multi-story set)
   Sources: البداية والنهاية · الكامل لابن الأثير · تاريخ الدولة العثمانية · إسلام ويب · الدرر السنية */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.aynjalut = [
 {
  "icon": "📜",
  "scene": "desert",
  "character": "😨",
  "title": {
   "ar": "خطرُ المغول (الأسباب)",
   "en": "The Mongol Threat (Causes)"
  },
  "pages": [
   {
    "scene": "desert",
    "character": "🏇",
    "text": {
     "ar": "في أوائلِ القرنِ السابعِ الهجريّ، خرجتْ من سهولِ <b>منغوليا</b> البعيدةِ في شرقِ آسيا قبائلُ بدويّةٌ جمعَها قائدٌ شديدٌ اسمُه <b>جنكيز خان</b>. كانوا فرساناً مهَرةً، يركبونَ الخيلَ منذُ صغرِهم، ويقطعونَ المسافاتِ الطويلةَ بسرعةٍ عجيبة.<br><br>فاجتاحوا البلادَ واحدةً بعدَ الأخرى، ودخلوا بلادَ المسلمينَ في المشرق، فسقطتْ مدنٌ عظيمةٌ كانت منارةً للعلم، مثلَ <b>بُخارى</b> و<b>سَمَرقند</b>. وكتبَ المؤرّخُ <b>ابنُ الأثير</b>، الذي عاشَ في ذلك الزمان، أنّ ما أصابَ المسلمينَ منهم كان من أعظمِ المصائبِ التي نزلتْ بالناس.",
     "en": "In the early seventh century after the Hijra, nomadic tribes came out of the far plains of <b>Mongolia</b> in East Asia, united by a fierce leader named <b>Genghis Khan</b>. They were skilled horsemen who rode from childhood and crossed long distances at astonishing speed.<br><br>They swept over one land after another and entered the Muslim lands of the East, and great cities that had been lighthouses of learning, such as <b>Bukhara</b> and <b>Samarqand</b>, fell. The historian <b>Ibn al-Athir</b>, who lived in that time, wrote that what befell the Muslims at their hands was among the greatest calamities ever to strike mankind."
    }
   },
   {
    "scene": "night",
    "character": "📨",
    "text": {
     "ar": "وبعدَ سنواتٍ جاءَ حفيدُ جنكيز خان، واسمُه <b>هولاكو</b>، فحاصرَ <b>بغدادَ</b> عاصمةَ الخلافةِ العبّاسيّة، ودخلَها سنةَ <b>ستٍّ وخمسينَ وستّمئة</b>، وقتلَ الخليفةَ <b>المستعصم</b> وكثيراً من أهلِها. ثمّ زحفَ إلى الشام، فسقطتْ <b>حلبُ</b> ثمّ <b>دمشق</b>.<br><br>ولم يبقَ أمامَ المغولِ إلّا <b>مصر</b>. فأرسلَ هولاكو إلى سلطانِها رسالةً مليئةً بالتهديد، يأمرُه فيها أن يستسلمَ قبلَ أن يصيبَه ما أصابَ غيرَه. كانت لحظةً مخيفة: إن سقطتْ مصرُ فقد ينفتحُ الطريقُ إلى بلادِ الحرمَين.",
     "en": "Years later came Genghis Khan’s grandson, <b>Hulagu</b>. He besieged <b>Baghdad</b>, the capital of the Abbasid caliphate, and entered it in the year <b>656 AH</b>, killing the caliph <b>al-Musta’sim</b> and many of its people. Then he marched on Sham, and <b>Aleppo</b> and then <b>Damascus</b> fell.<br><br>Only <b>Egypt</b> was left before the Mongols. Hulagu sent its sultan a letter full of threats, ordering him to surrender before what had happened to others happened to him. It was a frightening moment: if Egypt fell, the road to the lands of the two Holy Mosques might lie open."
    }
   },
   {
    "scene": "desert",
    "character": "😨",
    "text": {
     "ar": "جاءَ <b>المغولُ</b> كالإعصار، دمّروا المدنَ وقتلوا الناسَ، حتى أسقطوا <b>بغداد</b>! وقلّما ثبتَ أمامَهم جيشٌ، فخافهمُ العالَم. ثم توجّهوا نحوَ مصرَ والشام. فقامَ السلطانُ <b>قطز</b> وقال: لا بدّ أن نُوقفَهم وننقذَ الإسلام.",
     "en": "The <b>Mongols</b> came like a storm, destroying cities and killing people, even toppling <b>Baghdad</b>! Hardly any army had been able to stand against them, and the world feared them. Then they turned toward Egypt and Sham. Sultan <b>Qutuz</b> rose and said: we must stop them and save Islam."
    },
    "choice": {
     "q": {
      "ar": "لماذا قرّرَ قطزُ مواجهةَ المغول؟",
      "en": "Why did Qutuz decide to face the Mongols?"
     },
     "opts": [
      {
       "t": {
        "ar": "لِيُوقفَ شرَّهم وينقذَ الإسلام",
        "en": "To stop their evil and save Islam"
       },
       "c": true,
       "exp": {
        "ar": "نعم! الشجاعةُ في مواجهةِ الخطر.",
        "en": "Yes! Courage in facing danger."
       }
      },
      {
       "t": {
        "ar": "خوفاً واستسلاماً",
        "en": "Out of fear and surrender"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل شجاعةً.",
        "en": "No — out of courage."
       }
      },
      {
       "t": {
        "ar": "للمال",
        "en": "For wealth"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل لِنصرةِ الإسلام.",
        "en": "No — to aid Islam."
       }
      }
     ]
    }
   },
   {
    "scene": "mosque",
    "character": "🤲",
    "text": {
     "ar": "جمعَ قطزُ الأمراءَ وشاورَهم، فكان منهم المتردّدُ والخائف، فشجّعَهم وذكّرَهم بمسؤوليّتِهم أمامَ الله. ووقفَ معه العالِمُ الكبيرُ <b>العِزُّ بنُ عبدِ السلام</b>، فأفتى بوجوبِ الجهادِ لدفعِ هذا الخطر، واشترطَ أن يبدأَ الأمراءُ بإخراجِ أموالِهم قبلَ أن يُؤخَذَ شيءٌ من عامّةِ الناس.<br><br>وهكذا اجتمعَ <b>العالِمُ والقائدُ والجنود</b> على هدفٍ واحد. فالشجاعةُ ليست أن لا تخاف، بل أن تفعلَ الصوابَ وأنت خائف، متوكّلاً على الله. وإذا اجتمعَ الناسُ على الحقِّ وبدأ الكبارُ بأنفسِهم، صارتِ القلوبُ قويّةً أمامَ أصعبِ التحدّيات.",
     "en": "Qutuz gathered the emirs and consulted them. Some hesitated and some were afraid, so he encouraged them and reminded them of their responsibility before Allah. The great scholar <b>al-Izz ibn Abd as-Salam</b> stood with him: he ruled that it was obligatory to strive to repel this danger, and he made it a condition that the emirs first give from their own wealth before anything was taken from ordinary people.<br><br>So <b>the scholar, the leader and the soldiers</b> came together for one goal. Courage is not having no fear — it is doing what is right while you are afraid, relying on Allah. And when people unite on the truth and the leaders begin with themselves, hearts become strong before the hardest challenges."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "أيُّ مدينةٍ عظيمةٍ أسقطها المغول؟",
     "en": "Which great city did the Mongols topple?"
    },
    "opts": [
     {
      "t": {
       "ar": "بغداد",
       "en": "Baghdad"
      },
      "c": true
     },
     {
      "t": {
       "ar": "مكّة",
       "en": "Makkah"
      },
      "c": false
     },
     {
      "t": {
       "ar": "دمشق",
       "en": "Damascus"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "مَن قرّرَ مواجهةَ المغول؟",
     "en": "Who decided to face the Mongols?"
    },
    "opts": [
     {
      "t": {
       "ar": "السلطانُ قطز",
       "en": "Sultan Qutuz"
      },
      "c": true
     },
     {
      "t": {
       "ar": "صلاحُ الدين",
       "en": "Salahuddin"
      },
      "c": false
     },
     {
      "t": {
       "ar": "ألب أرسلان",
       "en": "Alp Arslan"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "مَن العالِمُ الذي وقفَ مع قطزَ وطلبَ أن يبدأَ الأمراءُ بأموالِهم؟",
     "en": "Which scholar stood with Qutuz and asked the emirs to give their own wealth first?"
    },
    "opts": [
     {
      "t": {
       "ar": "العِزُّ بنُ عبدِ السلام",
       "en": "Al-Izz ibn Abd as-Salam"
      },
      "c": true
     },
     {
      "t": {
       "ar": "ابنُ بطّوطة",
       "en": "Ibn Battuta"
      },
      "c": false
     },
     {
      "t": {
       "ar": "هولاكو",
       "en": "Hulagu"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "الشجاعةُ في مواجهةِ الخطرِ لإنقاذِ الناسِ من أعظمِ البطولة.",
   "en": "Courage to face danger and save people is among the greatest heroism."
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
    "ar": "كيف تواجهُ ما يُخيفُك بشجاعة؟",
    "en": "How do you face what frightens you bravely?"
   },
   {
    "ar": "لماذا كان مهمّاً أن يبدأَ الأمراءُ بأموالِهم قبلَ الناس؟",
    "en": "Why was it important that the emirs gave their own wealth before the people did?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "كانت عينُ جالوتَ سنةَ ٦٥٨هـ — المصدر: البداية والنهاية",
    "en": "Ayn Jalut was in 658 AH — Source: Al-Bidaya wa an-Nihaya"
   },
   {
    "ar": "سقطتْ بغدادُ بيدِ هولاكو سنةَ ٦٥٦هـ وقُتِلَ الخليفةُ المستعصم — المصدر: البداية والنهاية",
    "en": "Baghdad fell to Hulagu in 656 AH and the caliph al-Musta’sim was killed — Source: Al-Bidaya wa an-Nihaya"
   }
  ]
 },
 {
  "icon": "📣",
  "scene": "desert",
  "character": "🛡️",
  "title": {
   "ar": "وا إسلاماه! (المعركة)",
   "en": "O Islam! (The Battle)"
  },
  "pages": [
   {
    "scene": "mountain",
    "character": "🗺️",
    "text": {
     "ar": "خرجَ قطزُ بجيشِه من مصرَ في صيفِ سنةِ <b>ثمانٍ وخمسينَ وستّمئة</b>، وجعلَ في المقدّمةِ القائدَ الشجاعَ <b>بيبرس</b>. وكان هولاكو قد رجعَ إلى الشرقِ بأكثرِ جيشِه بعدَ موتِ ملكِ المغولِ الأكبر، وتركَ في الشامِ قائدَه <b>كَتْبُغا</b> ومعه جيشٌ كبير.<br><br>والتقى الجمعانِ في شهرِ <b>رمضانَ المبارك</b> عند <b>عينِ جالوت</b> في أرضِ فلسطين، وهي عينُ ماءٍ في سهلٍ واسعٍ تحيطُ به التلال. ويذكرُ المؤرّخونَ أنّ قطزَ أحسنَ التخطيط: أخفى جزءاً كبيراً من جيشِه بين التلال، وتقدّمتْ طليعةُ بيبرسَ لتستدرجَ المغولَ إلى السهل.",
     "en": "Qutuz marched out of Egypt with his army in the summer of the year <b>658 AH</b>, placing the brave commander <b>Baybars</b> at the vanguard. Hulagu had gone back east with most of his army after the death of the great Mongol Khan, leaving his commander <b>Kitbuqa</b> in Sham with a large force.<br><br>The two sides met in the blessed month of <b>Ramadan</b> at <b>Ayn Jalut</b> in the land of Palestine — a spring of water in a wide plain surrounded by hills. Historians mention that Qutuz planned well: he hid a large part of his army among the hills, while Baybars’s vanguard advanced to draw the Mongols out into the plain."
    }
   },
   {
    "scene": "desert",
    "character": "📣",
    "text": {
     "ar": "التقى الجيشانِ عند <b>عينِ جالوت</b>. تأمّلْ <b>ميزانَ القوى</b>: المغولُ جيشٌ لم يُهزَمْ قطُّ، أرعبَ الأرضَ كلَّها وأسقطَ الإمبراطوريّات، وكان النّاسُ يستسلمونَ لمجرّدِ سماعِ اسمِه! واجههم المسلمونَ بجيشٍ مملوكيٍّ مقارِبٍ في العدد لكنّه يحملُ سلاحاً أعظم: <b>إيماناً لا يعرفُ اليأس</b>. اشتدَّ القتالُ وكاد بعضُ المسلمينَ يضطربون، فألقى السلطانُ <b>قطز</b> خوذتَه ونزلَ يقاتلُ بنفسِه صارخاً بأعلى صوتِه: «<b>وا إسلاماه! وا إسلاماه! يا اللهُ انصُرْ عبدَك قطز على المغول</b>»، يدعو اللهَ ويبكي. فاشتعلتِ الحماسةُ في القلوب، وثبتَ المسلمونَ يطلبونَ النصرَ من السماء.",
     "en": "The two armies met at <b>Ayn Jalut</b>. Ponder the <b>balance of power</b>: the Mongols were an army never defeated, terrifying the whole earth and toppling empires — people would surrender at the mere mention of their name! The Muslims faced them with a Mamluk army close in number but carrying a greater weapon: <b>a faith that knows no despair</b>. The fighting intensified and some Muslims nearly wavered, so Sultan <b>Qutuz</b> threw off his helmet, dismounted to fight himself, crying at the top of his voice: «<b>O Islam! O Islam! O Allah, aid Your servant Qutuz against the Mongols</b>», praying to Allah and weeping. Zeal blazed in their hearts, and the Muslims stood firm, seeking victory from the heavens."
    },
    "choice": {
     "q": {
      "ar": "ماذا فعلَ قطزُ حين اشتدَّ القتال؟",
      "en": "What did Qutuz do when fighting intensified?"
     },
     "opts": [
      {
       "t": {
        "ar": "صرخَ «وا إسلاماه» وقاتلَ بنفسِه",
        "en": "Cried “O Islam!” and fought himself"
       },
       "c": true,
       "exp": {
        "ar": "نعم! القائدُ الشجاعُ يُلهمُ جنودَه.",
        "en": "Yes! A brave leader inspires his soldiers."
       }
      },
      {
       "t": {
        "ar": "هرب",
        "en": "He fled"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل قاتلَ بنفسِه.",
        "en": "No — he fought himself."
       }
      },
      {
       "t": {
        "ar": "استسلم",
        "en": "He surrendered"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل ثبتَ وقاتل.",
        "en": "No — he stood firm and fought."
       }
      }
     ]
    }
   },
   {
    "scene": "peaks",
    "character": "🐎",
    "text": {
     "ar": "لمّا رأى الجنودُ سلطانَهم بلا خوذةٍ في وسطِ المعركة، يدعو اللهَ ويُقاتلُ معهم، عادَ إليهم ثباتُهم، وخرجَ مَن كان مختبئاً بين التلال، فأحاطوا بجيشِ المغولِ من كلِّ جانب. وقُتِلَ قائدُهم <b>كَتْبُغا</b>، فاضطربَ جيشُه وبدأَ ينهار.<br><br>تعلّمْ من هذا المشهد: أنّ القائدَ الحقيقيَّ يكونُ في المقدّمةِ لا في الخلف، وأنّ <b>التخطيطَ والدعاءَ</b> يسيرانِ معاً، فقطزُ رتّبَ جيشَه بذكاء، ثمّ رفعَ يديه إلى السماء. فإذا كان عندك امتحانٌ صعب، فذاكرْ جيّداً كما خطّطَ قطز، ثمّ ادعُ اللهَ كما دعا.",
     "en": "When the soldiers saw their sultan bareheaded in the middle of the battle, praying to Allah and fighting beside them, their steadfastness returned. Those hidden among the hills came out and surrounded the Mongol army on every side. Their commander <b>Kitbuqa</b> was killed, his army was thrown into confusion, and it began to collapse.<br><br>Learn from this scene that a true leader stands at the front, not at the back, and that <b>planning and prayer</b> go together: Qutuz arranged his army cleverly, then raised his hands to the sky. So if you have a hard exam, study well as Qutuz planned, and then pray to Allah as he prayed."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "بماذا صرخَ قطز؟",
     "en": "What did Qutuz cry out?"
    },
    "opts": [
     {
      "t": {
       "ar": "وا إسلاماه",
       "en": "O Islam!"
      },
      "c": true
     },
     {
      "t": {
       "ar": "وا مالاه",
       "en": "O my wealth!"
      },
      "c": false
     },
     {
      "t": {
       "ar": "وا راحتاه",
       "en": "O my rest!"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "ماذا فعلَ بخوذتِه؟",
     "en": "What did he do with his helmet?"
    },
    "opts": [
     {
      "t": {
       "ar": "ألقاها ونزلَ يقاتل",
       "en": "Threw it off and fought"
      },
      "c": true
     },
     {
      "t": {
       "ar": "باعها",
       "en": "Sold it"
      },
      "c": false
     },
     {
      "t": {
       "ar": "أخفاها",
       "en": "Hid it"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "في أيِّ شهرٍ كانت معركةُ عينِ جالوت؟",
     "en": "In which month was the Battle of Ayn Jalut?"
    },
    "opts": [
     {
      "t": {
       "ar": "رمضان",
       "en": "Ramadan"
      },
      "c": true
     },
     {
      "t": {
       "ar": "ذو الحجّة",
       "en": "Dhul-Hijja"
      },
      "c": false
     },
     {
      "t": {
       "ar": "صفر",
       "en": "Safar"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "القائدُ الشجاعُ يثبُتُ أوّلاً، فيُلهمُ من حولَه الثباتَ والإقدام.",
   "en": "A brave leader stands firm first, inspiring others to courage."
  },
  "badge": {
   "icon": "📣",
   "title": {
    "ar": "وِسامُ الثباتِ والإقدام",
    "en": "Badge of Resolve"
   }
  },
  "reflect": [
   {
    "ar": "كيف تشجّعُ غيرَك بثباتِك أنت؟",
    "en": "How does your own steadfastness encourage others?"
   },
   {
    "ar": "كيف تجمعُ بين التخطيطِ الجيّدِ والدعاءِ في أعمالِك؟",
    "en": "How can you combine good planning with prayer in what you do?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "صرخةُ «وا إسلاماه» من أشهرِ مواقفِ الشجاعة — المصدر: البداية والنهاية",
    "en": "The cry “O Islam!” is among the most famous moments of courage — Source: Al-Bidaya wa an-Nihaya"
   },
   {
    "ar": "كانت المعركةُ في الخامسِ والعشرينَ من رمضانَ سنةَ ٦٥٨هـ، وقُتِلَ فيها قائدُ المغولِ كَتْبُغا — المصدر: البداية والنهاية",
    "en": "The battle was on 25 Ramadan 658 AH, and the Mongol commander Kitbuqa was killed in it — Source: Al-Bidaya wa an-Nihaya"
   }
  ]
 },
 {
  "icon": "🛡️",
  "scene": "ascend",
  "character": "⭐",
  "title": {
   "ar": "حيثُ تَوقّفَ المغول (النصر)",
   "en": "Where the Mongols Were Halted (Victory)"
  },
  "pages": [
   {
    "scene": "night",
    "character": "🌙",
    "text": {
     "ar": "كان العالَمُ الإسلاميُّ كلُّه في تلك الأيّامِ يحبسُ أنفاسَه: في القاهرةِ ومكّةَ والمدينة، كان الناسُ يدعونَ اللهَ في ليالي <b>رمضان</b> أن ينصرَ المسلمين. فقد سقطتْ بغدادُ ودمشق، وأصبحتْ هذه المعركةُ هي الأملَ الأخير.<br><br>وفي ساحةِ عينِ جالوت، بعدَ صرخةِ قطزَ «وا إسلاماه»، تغيّرَ كلُّ شيء: عادَ الجنودُ إلى صفوفِهم، واشتدَّ عزمُهم، وتقدّمَ <b>بيبرس</b> بفرسانِه، فبدأَ ميزانُ المعركةِ يميلُ لصالحِ المسلمين.",
     "en": "In those days the whole Muslim world was holding its breath: in Cairo, Makkah and Madinah, people were praying to Allah in the nights of <b>Ramadan</b> to grant the Muslims victory. Baghdad and Damascus had fallen, and this battle had become the last hope.<br><br>On the field of Ayn Jalut, after Qutuz’s cry “O Islam!”, everything changed: the soldiers returned to their ranks, their resolve grew stronger, and <b>Baybars</b> advanced with his horsemen, so the balance of the battle began to tip in the Muslims’ favour."
    }
   },
   {
    "scene": "ascend",
    "character": "⭐",
    "text": {
     "ar": "ثبتَ المسلمونَ بقيادةِ قطزَ والبطلِ بيبرس، وهجموا بقوّةٍ وإيمان، فحدثَ ما لم يُصدّقْه العالم: <b>هُزِمَ المغولُ لأوّلِ مرّة</b>! انكسرَ جيشُهم الذي لا يُقهَر، وتوقّفَ زحفُهم المدمّرُ عند عينِ جالوت. أنقذَ اللهُ الإسلامَ على أيديهم.",
     "en": "The Muslims stood firm under Qutuz and the hero Baybars, and attacked with strength and faith. Then the unbelievable happened: <b>the Mongols were defeated for the first time</b>! Their invincible army broke, and their destructive advance halted at Ayn Jalut. Allah saved Islam through them."
    },
    "choice": {
     "q": {
      "ar": "ماذا حدثَ للمغولِ في عينِ جالوت؟",
      "en": "What happened to the Mongols at Ayn Jalut?"
     },
     "opts": [
      {
       "t": {
        "ar": "هُزِموا لأوّلِ مرّةٍ وتوقّفَ زحفُهم",
        "en": "Defeated for the first time; their advance halted"
       },
       "c": true,
       "exp": {
        "ar": "نعم! نصرٌ أنقذَ الإسلام.",
        "en": "Yes! A victory that saved Islam."
       }
      },
      {
       "t": {
        "ar": "انتصروا",
        "en": "They won"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل هُزِموا.",
        "en": "No — they were defeated."
       }
      },
      {
       "t": {
        "ar": "لم يحدثْ شيء",
        "en": "Nothing happened"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل هُزِموا.",
        "en": "No — they were defeated."
       }
      }
     ]
    }
   },
   {
    "scene": "desert",
    "character": "🌪️",
    "text": {
     "ar": "لمّا انكسرَ جيشُ المغولِ في عينِ جالوت، فرَّ مَن بقيَ منهم نحوَ الشمال، فلحقَ بهم المسلمونَ بقيادةِ <b>بيبرس</b>، حتى اجتمعوا مرّةً أخرى قربَ <b>بَيسان</b>، فدارتْ عليهم الهزيمةُ ثانيةً.<br><br>وكان النصرُ في الأيّامِ الأخيرةِ من شهرِ <b>رمضان</b>، فاستقبلَ المسلمونَ <b>عيدَ الفطر</b> بفرحتَين: فرحةِ الصيام، وفرحةِ النصر. وأرسلَ قطزُ البشارةَ إلى مصرَ والشام، فخرجَ الناسُ يُكبّرونَ ويحمدونَ الله، بعدَ سنواتٍ طويلةٍ من الخوفِ والحزن.",
     "en": "When the Mongol army broke at Ayn Jalut, those who remained fled north. The Muslims pursued them under <b>Baybars</b>, until they gathered again near <b>Baysan</b>, and there they were defeated a second time.<br><br>The victory came in the last days of the month of <b>Ramadan</b>, so the Muslims welcomed <b>Eid al-Fitr</b> with two joys: the joy of fasting and the joy of victory. Qutuz sent the good news to Egypt and Sham, and people came out saying Allahu akbar and praising Allah, after long years of fear and sorrow."
    }
   },
   {
    "scene": "mosque",
    "character": "🕌",
    "text": {
     "ar": "دخلَ المسلمونَ <b>دمشقَ</b> وعادتِ الشامُ إلى أهلِها، وحُفِظتْ مصرُ وبلادُ الحرمَينِ من الخراب. والأعجبُ من ذلك أنّ كثيراً من المغولِ أنفسِهم دخلوا في الإسلامِ بعدَ سنوات، وصارَ من ملوكِهم مَن يُصلّي ويبني المساجد! فاللهُ يهدي القلوبَ كما ينصرُ المؤمنين.<br><br>قال اللهُ تعالى: <b>﴿ كَم مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ ﴾</b>. فلا تقلْ أمامَ أيِّ صعوبة: هذا مستحيل! بل استعنْ بالله، واعملْ بجِدّ، واثبتْ، فكم من مشكلةٍ ظنَّها الناسُ لا تُحَلّ، ثمّ حلّها اللهُ لمن صبرَ وثبت.",
     "en": "The Muslims entered <b>Damascus</b>, Sham returned to its people, and Egypt and the lands of the two Holy Mosques were saved from ruin. More amazing still, many of the Mongols themselves later entered Islam, and some of their kings came to pray and build mosques! Allah guides hearts just as He grants victory to the believers.<br><br>Allah says: <b>﴿ How many a small company has overcome a large company by permission of Allah ﴾</b>. So never say before a difficulty: This is impossible! Seek Allah’s help, work hard and stand firm — how many problems people thought could never be solved, and then Allah solved them for the one who was patient and steadfast."
    }
   }
  ],
  "quiz": [
   {
    "q": {
     "ar": "هل كان المغولُ يُهزَمونَ قبلَ عينِ جالوت؟",
     "en": "Were the Mongols ever defeated before Ayn Jalut?"
    },
    "opts": [
     {
      "t": {
       "ar": "لا، كانت أوّلَ هزيمةٍ لهم",
       "en": "No — it was the great defeat that stopped their advance"
      },
      "c": true
     },
     {
      "t": {
       "ar": "نعم كثيراً",
       "en": "Yes, often"
      },
      "c": false
     },
     {
      "t": {
       "ar": "لم يُقاتلوا",
       "en": "They never fought"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "مَن كان مع قطزَ من الأبطال؟",
     "en": "Which hero was with Qutuz?"
    },
    "opts": [
     {
      "t": {
       "ar": "بيبرس",
       "en": "Baybars"
      },
      "c": true
     },
     {
      "t": {
       "ar": "خالدٌ",
       "en": "Khalid"
      },
      "c": false
     },
     {
      "t": {
       "ar": "طارقٌ",
       "en": "Tariq"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "بأيِّ فرحتَينِ استقبلَ المسلمونَ عيدَ الفطرِ بعدَ عينِ جالوت؟",
     "en": "With which two joys did the Muslims welcome Eid al-Fitr after Ayn Jalut?"
    },
    "opts": [
     {
      "t": {
       "ar": "فرحةِ الصيامِ وفرحةِ النصر",
       "en": "The joy of fasting and the joy of victory"
      },
      "c": true
     },
     {
      "t": {
       "ar": "فرحةِ الغنائمِ فقط",
       "en": "Only the joy of spoils"
      },
      "c": false
     },
     {
      "t": {
       "ar": "فرحةِ السفر",
       "en": "The joy of travel"
      },
      "c": false
     }
    ]
   }
  ],
  "moral": {
   "ar": "بالإيمانِ والثباتِ يُهزَمُ مَن يظنُّ الناسُ أنّه لا يُهزَم.",
   "en": "With faith and steadfastness, the seemingly unbeatable is beaten."
  },
  "badge": {
   "icon": "🛡️",
   "title": {
    "ar": "وِسامُ قاهرِ المغول",
    "en": "Badge of the Mongol-Vanquisher"
   }
  },
  "reflect": [
   {
    "ar": "هل تيأسُ أمامَ ما يبدو مستحيلاً؟",
    "en": "Do you despair before what seems impossible?"
   },
   {
    "ar": "ما المشكلةُ التي ظننتَها مستحيلةً ثمّ يسّرها اللهُ لك؟",
    "en": "What problem did you think was impossible until Allah made it easy for you?"
   }
  ],
  "didYouKnow": [
   {
    "ar": "عينُ جالوتَ أوّلُ هزيمةٍ كبرى أوقفت زحفَ المغولِ نحو الشامِ ومصر — المصدر: البداية والنهاية",
    "en": "Ayn Jalut was the first great defeat that stopped the Mongol advance towards Syria and Egypt — Source: Al-Bidaya wa an-Nihaya"
   },
   {
    "ar": "بعدَ عينِ جالوتَ دخلَ كثيرٌ من المغولِ في الإسلام، ومنهم السلطانُ غازان الذي أسلمَ سنةَ ٦٩٤هـ — المصدر: البداية والنهاية",
    "en": "After Ayn Jalut many Mongols embraced Islam, among them Sultan Ghazan, who became Muslim in 694 AH — Source: Al-Bidaya wa an-Nihaya"
   }
  ]
 }
];
