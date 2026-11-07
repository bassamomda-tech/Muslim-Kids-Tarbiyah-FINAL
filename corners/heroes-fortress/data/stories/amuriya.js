/* data/stories/amuriya.js — Battles · معركة عمورية (multi-story set)
   Sources: البداية والنهاية · تاريخ الطبري · تاريخ الدولة العثمانية · إسلام ويب · الدرر السنية */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.amuriya = [
 {
  "icon": "📜",
  "scene": "desert",
  "character": "😢",
  "title": {
   "ar": "وامُعتصماه! (الأسباب)",
   "en": "O Mu’tasim! (Causes)"
  },
  "pages": [
      {"scene": "globe", "character": "👑", "text": {"ar": "في القرنِ الثالثِ الهجريّ كانت <b>الدولةُ العبّاسيّةُ</b> دولةً واسعةً قويّة، يحكمُها الخليفةُ <b>المعتصمُ بالله</b>، وهو ابنُ الخليفةِ <b>هارونَ الرشيد</b>. وكان المعتصمُ معروفاً بقوّةِ جسمِه وشجاعتِه وشدّةِ همّتِه.<br><br>وكانت بين بلادِ المسلمينَ وبلادِ <b>الروم البيزنطيّين</b> حدودٌ طويلةٌ فيها مدنٌ وحصونٌ تُسمّى <b>«الثغور»</b>، يسكنُها المسلمونَ ويحرسونَها. وكان الرومُ يُغيرونَ عليها أحياناً، والمسلمونَ يدافعونَ عنها ويحمونَ أهلَها.", "en": "In the third century after the Hijrah, the <b>Abbasid state</b> was a vast and powerful realm, ruled by the caliph <b>al-Mu’tasim billah</b>, son of the caliph <b>Harun ar-Rashid</b>. Al-Mu’tasim was known for his physical strength, his courage and his great determination.<br><br>Between the Muslim lands and the lands of the <b>Byzantines</b> stretched a long frontier of towns and forts called <b>“the Thughur”</b>, where Muslims lived and stood guard. The Byzantines sometimes raided them, and the Muslims defended them and protected their people."}},
      {"scene": "fire", "character": "🏚️", "text": {"ar": "وفي سنةِ ٢٢٣هـ، كان المعتصمُ مشغولاً بقتالِ متمرّدٍ خطيرٍ في الشرقِ اسمُه <b>بابك</b>. فاستغلَّ إمبراطورُ الرومِ <b>توفيل</b> هذه الفرصة، وأغارَ بجيشٍ كبيرٍ على مدينةِ <b>زِبَطْرة</b>، وهي من ثغورِ المسلمين.<br><br>أحرقَ الرومُ المدينة، وآذَوا أهلَها، وأخذوا كثيراً من المسلمينَ والمسلماتِ <b>أسرى</b> إلى بلادِهم. كان ذلك ظلماً عظيماً لأناسٍ آمنينَ في بيوتِهم، لم يكونوا يقاتلونَ أحداً.<br><br>وصلتْ أخبارُ زِبَطْرةَ إلى المسلمينَ في كلِّ مكان فحزنوا حزناً شديداً، وكان أكثرُ ما يؤلمُهم أنّ إخوانَهم وأخواتِهم صاروا أسرى بعيداً عن بيوتِهم وأهلِهم، لا يعرفونَ متى يعودون.", "en": "In the year 223 AH, al-Mu’tasim was busy fighting a dangerous rebel in the east named <b>Babak</b>. The Byzantine emperor <b>Theophilos</b> seized this chance and raided the Muslim frontier town of <b>Zibatra</b> with a large army.<br><br>The Byzantines burned the town, harmed its people, and carried off many Muslim men and women as <b>captives</b> to their lands. It was a great injustice against people who were living peacefully in their homes and fighting no one.<br><br>News of Zibatra reached Muslims everywhere, and they were deeply saddened. What hurt them most was that their brothers and sisters had become captives far from their homes and families, not knowing when they would return."}},
   {
    "scene": "desert",
    "character": "😢",
    "text": {
     "ar": "في مدينةِ عَمُّوريّةَ الرّوميّة، اعتدى جنديٌّ روميٌّ على <b>امرأةٍ مسلمةٍ أسيرة</b>، فصاحت من الظلم: «<b>وامُعتصماه!</b>» تستغيثُ بخليفةِ المسلمين. ضحِكَ الرّوميُّ ساخراً: هل سيأتي المعتصمُ من أجلِك؟",
     "en": "In the Byzantine city of Amorium, a Roman soldier assaulted a <b>captive Muslim woman</b>, and she cried out from the injustice: “<b>O Mu’tasim!</b>” calling on the caliph of the Muslims. The Roman laughed mockingly: “Will Mu’tasim come for you?”"
    },
    "choice": {
     "q": {
      "ar": "بمَنِ استغاثتِ المرأةُ المظلومة؟",
      "en": "Whom did the wronged woman call?"
     },
     "opts": [
      {
       "t": {
        "ar": "بخليفةِ المسلمينَ المعتصم",
        "en": "The caliph Mu’tasim"
       },
       "c": true,
       "exp": {
        "ar": "نعم! وثقت بأنّه ينصرُها.",
        "en": "Yes! She trusted he would aid her."
       }
      },
      {
       "t": {
        "ar": "بالعدو",
        "en": "The enemy"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل بالمعتصم.",
        "en": "No — by Mu’tasim."
       }
      },
      {
       "t": {
        "ar": "بأحدٍ من الرّوم",
        "en": "Some Roman"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل بالمعتصم.",
        "en": "No — by Mu’tasim."
       }
      }
     ]
    }
   },
      {"scene": "call", "character": "📢", "text": {"ar": "ويختلفُ الرواةُ في تفاصيلِ قصّةِ هذه المرأة، لكنّ المؤرّخينَ متّفقونَ على أنّ غارةَ الرومِ على <b>زِبَطْرة</b> وأسرَهم للمسلمينَ كانت سببَ حملةِ المعتصم. وانتشرَ الخبرُ في بلادِ المسلمين، حتى وصلَ إلى الخليفةِ في قصرِه.<br><br>لقد صرختِ المرأةُ لأنّها كانت تثقُ أنّ لها إخوةً لن يتركوها. وقد قال النبيُّ ﷺ: <b>«انصرْ أخاك ظالماً أو مظلوماً»</b>، فقالوا: كيف ننصرُه ظالماً؟ قال: <b>«تأخذُ فوقَ يديه»</b> (رواه البخاري)، أي تمنعُه من الظلم. فالمسلمُ لا يقفُ صامتاً أمامَ الظلم.", "en": "Narrators differ on the details of this woman’s story, but historians agree that the Byzantine raid on <b>Zibatra</b> and their capture of Muslims was the cause of al-Mu’tasim’s campaign. The news spread across the Muslim lands until it reached the caliph in his palace.<br><br>The woman cried out because she trusted she had brothers who would not abandon her. The Prophet ﷺ said: <b>“Help your brother, whether he is the wrongdoer or the wronged.”</b> They asked: How do we help him when he is the wrongdoer? He said: <b>“By holding back his hand”</b> (al-Bukhari) — that is, by stopping him from wrongdoing. A Muslim does not stand silent in the face of injustice."}},
  ],
  "quiz": [
   {
    "q": {
     "ar": "بماذا صاحتِ المرأةُ المسلمة؟",
     "en": "What did the Muslim woman cry?"
    },
    "opts": [
     {
      "t": {
       "ar": "وامُعتصماه",
       "en": "O Mu’tasim!"
      },
      "c": true
     },
     {
      "t": {
       "ar": "وامالاه",
       "en": "O my wealth!"
      },
      "c": false
     },
     {
      "t": {
       "ar": "لا شيء",
       "en": "Nothing"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "كيف ردَّ الرّوميُّ على استغاثتِها؟",
     "en": "How did the Roman respond?"
    },
    "opts": [
     {
      "t": {
       "ar": "سخِرَ منها",
       "en": "He mocked her"
      },
      "c": true
     },
     {
      "t": {
       "ar": "أطلقها",
       "en": "Freed her"
      },
      "c": false
     },
     {
      "t": {
       "ar": "اعتذرَ",
       "en": "Apologized"
      },
      "c": false
     }
    ]
   },
      {"q": {"ar": "ما المدينةُ الإسلاميّةُ التي أغارَ عليها الرومُ فكانت سببَ الحملة؟", "en": "Which Muslim town did the Byzantines raid, causing the campaign?"}, "opts": [{"t": {"ar": "زِبَطْرة", "en": "Zibatra"}, "c": true}, {"t": {"ar": "بغداد", "en": "Baghdad"}, "c": false}, {"t": {"ar": "مكّة", "en": "Makkah"}, "c": false}]}
  ],
  "moral": {
   "ar": "المظلومُ يثقُ بأنّ إخوانَه ينصرونه، والمؤمنُ لا يخذلُ المستغيث.",
   "en": "The wronged trust their brethren will help; the believer never abandons one who calls."
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
    "ar": "هل يثقُ بك الناسُ أنّك تنصرُهم وقتَ الحاجة؟",
    "en": "Do people trust you to help them when needed?"
   },
      {"ar": "إذا رأيتَ زميلاً يُظلَمُ أو يُسخَرُ منه، ماذا تفعل؟", "en": "If you see a classmate being wronged or mocked, what do you do?"}
  ],
  "didYouKnow": [
   {
    "ar": "كانت عَمُّوريّةُ سنةَ ٢٢٣هـ في خلافةِ المعتصم — المصدر: البداية والنهاية",
    "en": "Amorium was in 223 AH under Mu’tasim — Source: Al-Bidaya wa an-Nihaya"
   },
      {"ar": "أغارَ إمبراطورُ الرومِ توفيلُ على زِبَطْرةَ من ثغورِ المسلمينَ سنةَ ٢٢٣هـ وأسرَ أهلَها — المصدر: تاريخ الطبري", "en": "The Byzantine emperor Theophilos raided the Muslim frontier town of Zibatra in 223 AH and took its people captive — Source: Tarikh at-Tabari"}
  ]
 },
 {
  "icon": "📣",
  "scene": "mosque",
  "character": "🛡️",
  "title": {
   "ar": "لبّيكِ يا أُختاه (المعركة)",
   "en": "At Your Service, Sister (The Battle)"
  },
  "pages": [
      {"scene": "throne", "character": "🗺️", "text": {"ar": "قرّرَ المعتصمُ أن يردَّ على هذا الظلمِ ردّاً يعرفُه الرومُ جميعاً. فسألَ: أيُّ بلادِ الرومِ أعزُّ عليهم وأمنعُ؟ فقيل له: <b>عَمُّوريّة</b>، فهي مدينةٌ عظيمةٌ محصّنة، ومنها أصلُ أسرةِ الإمبراطور، وهي عندَهم أشرفُ من القسطنطينيّة.<br><br>فجمعَ المعتصمُ الجنودَ والعُدّةَ والمؤونة، وأعدَّ آلاتِ الحصار، واستعدَّ استعداداً طويلاً دقيقاً. ويُذكرُ أنّ بعضَ المنجّمينَ قالوا له: لا تخرجْ الآن فإنّك لن تنتصر، فلم يلتفتْ إلى كلامِهم، وتوكّلَ على الله.<br><br>وسارَ الجيشُ مسافاتٍ طويلةً عبرَ الجبالِ والوديان، والجنودُ يعلمونَ أنّهم خرجوا لنصرةِ إخوانِهم المظلومين، لا لطلبِ الشهرةِ والمال. فكانت النيّةُ الصادقةُ تخفّفُ عنهم تعبَ الطريقِ الطويل.", "en": "Al-Mu’tasim decided to answer this injustice in a way all the Byzantines would understand. He asked: Which Byzantine city is the most precious and best defended to them? He was told: <b>Amorium</b> — a great fortified city, the hometown of the emperor’s family, and to them nobler even than Constantinople.<br><br>So al-Mu’tasim gathered soldiers, equipment and supplies, prepared siege machines, and made long and careful preparations. It is said that some astrologers told him: Don’t set out now, for you will not win — but he paid no attention to their words and put his trust in Allah.<br><br>The army marched long distances across mountains and valleys. The soldiers knew they had set out to help their wronged brothers and sisters, not to seek fame or wealth — and that sincere intention eased the hardship of the long road."}},
   {
    "scene": "mosque",
    "character": "📣",
    "text": {
     "ar": "بلغَ الخليفةَ <b>المعتصمَ</b> الخبرُ وهو في مجلسِه، فقامَ غاضباً لله وصاحَ: «<b>لبّيكِ لبّيكِ!</b>». وجهّزَ على الفورِ <b>جيشاً عظيماً</b> لم يُرَ مثلُه، وسارَ بنفسِه لِنصرةِ امرأةٍ واحدةٍ مظلومة! وصلَ عَمُّوريّةَ وحاصرَها حتى فتحَها.",
     "en": "The news reached Caliph <b>Mu’tasim</b> in his court; he rose, angry for Allah’s sake, and cried: “<b>At your service! At your service!</b>” He immediately prepared a <b>great army</b> like none seen, and marched himself to rescue a single wronged woman! He reached Amorium and besieged it until he conquered it."
    },
    "choice": {
     "q": {
      "ar": "ماذا فعلَ المعتصمُ لِنصرةِ امرأةٍ واحدة؟",
      "en": "What did Mu’tasim do to rescue one woman?"
     },
     "opts": [
      {
       "t": {
        "ar": "جهّزَ جيشاً عظيماً وسارَ بنفسِه",
        "en": "Prepared a great army and marched himself"
       },
       "c": true,
       "exp": {
        "ar": "نعم! نصرةُ المظلومِ شرفٌ عظيم.",
        "en": "Yes! Aiding the wronged is a great honour."
       }
      },
      {
       "t": {
        "ar": "تجاهلَ الأمر",
        "en": "Ignored it"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل نصرها بجيش.",
        "en": "No — he sent an army."
       }
      },
      {
       "t": {
        "ar": "أرسلَ رسالةً فقط",
        "en": "Sent only a letter"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل جيشاً عظيماً.",
        "en": "No — a great army."
       }
      }
     ]
    }
   },
      {"scene": "mountain", "character": "🏰", "text": {"ar": "كانت أسوارُ عمّوريّةَ عاليةً قويّة، فحاصرَها المسلمونَ أيّاماً، ورمَوها بالمجانيق. ويذكرُ <b>الطبريُّ</b> أنّ رجلاً مسلماً كان أسيراً عندهم دلَّ المعتصمَ على <b>موضعٍ ضعيفٍ في السور</b> كان قد تهدّمَ ثمّ بُنيَ بناءً غيرَ متين.<br><br>فركّزَ المسلمونَ رميَهم على ذلك الموضع حتى انهدم، ودخلوا المدينة. وهكذا اجتمعَ <b>الإيمانُ والتخطيطُ</b>: نيّةٌ صادقةٌ لنصرةِ المظلوم، وعقلٌ يبحثُ عن أفضلِ الطرقِ لتحقيقِ الهدف.", "en": "Amorium’s walls were high and strong, so the Muslims besieged the city for days and bombarded it with catapults. <b>At-Tabari</b> reports that a Muslim who had been a captive there showed al-Mu’tasim <b>a weak spot in the wall</b> that had collapsed and been rebuilt poorly.<br><br>The Muslims aimed at that spot until it fell, and they entered the city. This is how <b>faith and planning</b> came together: a sincere intention to help the wronged, and a mind searching for the best way to reach the goal."}},
      {"scene": "sprout", "character": "🧠", "text": {"ar": "أمرَنا اللهُ أن نستعدَّ ونأخذَ بالأسباب، فقال تعالى: <b>﴿ وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ ﴾</b>. فالمعتصمُ لم يكتفِ بالغضب، بل خطّطَ وجهّزَ وسألَ أهلَ الخبرة.<br><br>وأنتَ حين تريدُ أن تنصرَ صديقاً أو تحلَّ مشكلة، لا تتصرّفْ بالغضبِ وحدَه. فكّرْ أوّلاً، واطلبِ المساعدةَ من الكبار، واخترِ الطريقةَ الصحيحة، ثمّ توكّلْ على الله. فالشجاعةُ مع الحكمةِ تصنعُ النصر.", "en": "Allah commanded us to prepare and take the proper means: <b>﴿ “And prepare against them whatever you are able of strength” ﴾</b>. Al-Mu’tasim did not stop at being angry — he planned, prepared and asked people with experience.<br><br>When you want to help a friend or solve a problem, do not act on anger alone. Think first, ask grown-ups for help, choose the right way, and then trust in Allah. Courage together with wisdom is what brings success."}},
  ],
  "quiz": [
   {
    "q": {
     "ar": "بمَ ردَّ المعتصمُ على الاستغاثة؟",
     "en": "How did Mu’tasim respond to the cry?"
    },
    "opts": [
     {
      "t": {
       "ar": "لبّيكِ لبّيكِ، وجهّزَ جيشاً",
       "en": "“At your service!” and raised an army"
      },
      "c": true
     },
     {
      "t": {
       "ar": "تجاهلها",
       "en": "Ignored it"
      },
      "c": false
     },
     {
      "t": {
       "ar": "ضحِك",
       "en": "Laughed"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "مَن قادَ الجيش؟",
     "en": "Who led the army?"
    },
    "opts": [
     {
      "t": {
       "ar": "المعتصمُ بنفسِه",
       "en": "Mu’tasim himself"
      },
      "c": true
     },
     {
      "t": {
       "ar": "جنديٌّ عادي",
       "en": "An ordinary soldier"
      },
      "c": false
     },
     {
      "t": {
       "ar": "لا أحد",
       "en": "No one"
      },
      "c": false
     }
    ]
   },
      {"q": {"ar": "ما الذي ساعدَ المسلمينَ على دخولِ عمّوريّة؟", "en": "What helped the Muslims enter Amorium?"}, "opts": [{"t": {"ar": "معرفةُ موضعٍ ضعيفٍ في السور", "en": "Knowing a weak spot in the wall"}, "c": true}, {"t": {"ar": "كلامُ المنجّمين", "en": "The astrologers’ words"}, "c": false}, {"t": {"ar": "فتحَ الرومُ الأبوابَ لهم", "en": "The Byzantines opened the gates for them"}, "c": false}]}
  ],
  "moral": {
   "ar": "نصرةُ المظلومِ — ولو كان فرداً واحداً — شرفٌ يستحقُّ كلَّ تضحية.",
   "en": "Aiding the wronged — even a single person — is an honour worth every sacrifice."
  },
  "badge": {
   "icon": "📣",
   "title": {
    "ar": "وِسامُ نصرةِ المظلوم",
    "en": "Badge of Aiding the Wronged"
   }
  },
  "reflect": [
   {
    "ar": "هل تُسرعُ لِنصرةِ المظلومِ ولو كان ضعيفاً؟",
    "en": "Do you rush to help the wronged even if weak?"
   },
      {"ar": "كيف تجمعُ بين الشجاعةِ والتخطيطِ حين تريدُ أن تساعدَ أحداً؟", "en": "How do you combine courage and planning when you want to help someone?"}
  ],
  "didYouKnow": [
   {
    "ar": "قيلَ إنّ جيشَ عَمُّوريّةَ من أعظمِ جيوشِ ذلك الزمان — المصدر: البداية والنهاية",
    "en": "The army of Amorium was said to be among the greatest of its time — Source: Al-Bidaya wa an-Nihaya"
   },
      {"ar": "ذكرَ الطبريُّ أنّ أسيراً مسلماً دلَّ المعتصمَ على موضعٍ ضعيفٍ في سورِ عمّوريّة — المصدر: تاريخ الطبري", "en": "At-Tabari reports that a Muslim captive showed al-Mu’tasim a weak spot in the wall of Amorium — Source: Tarikh at-Tabari"}
  ]
 },
 {
  "icon": "🌟",
  "scene": "ascend",
  "character": "⭐",
  "title": {
   "ar": "عزّةُ المسلمين (النصر)",
   "en": "The Dignity of Muslims (Victory)"
  },
  "pages": [
      {"scene": "mountain", "character": "🚪", "text": {"ar": "بعد أن انهدمَ جزءٌ من السور، دخلَ جيشُ المسلمينَ <b>عمّوريّة</b>، واستسلمَ مَن بقيَ من المدافعينَ عنها. وكانت هذه المدينةُ التي يفخرُ بها الرومُ قد سقطتْ في يدِ الخليفةِ الذي استهزؤوا به.<br><br>وكان أهمُّ ما يبحثُ عنه المسلمونَ في المدينة هو إخوانَهم <b>الأسرى</b> الذين أُخذوا ظلماً، ليُطلقوهم ويعيدوهم إلى أهلِهم وبيوتِهم.<br><br>ولكَ أن تتخيّلَ فرحةَ أولئك الأسرى حين رأَوا جنودَ المسلمينَ يدخلونَ عليهم! لقد جاءَ الفرجُ بعد الضيق، وعرفوا أنّ إخوانَهم لم ينسَوهم، وأنّ صرخةَ المظلومِ لم تذهبْ سُدى.", "en": "After part of the wall fell, the Muslim army entered <b>Amorium</b>, and the remaining defenders surrendered. The city the Byzantines were so proud of had fallen into the hands of the caliph they had mocked.<br><br>What mattered most to the Muslims in the city was to find their brothers and sisters, <b>the captives</b> who had been taken unjustly, to free them and bring them back to their families and homes.<br><br>Just imagine the joy of those captives when they saw the Muslim soldiers coming in to them! Relief had come after hardship; they knew their brothers had not forgotten them, and that the cry of the wronged had not been in vain."}},
   {
    "scene": "ascend",
    "character": "⭐",
    "text": {
     "ar": "فتحَ المعتصمُ <b>عَمُّوريّة</b> وأنقذَ المرأةَ المسلمةَ وكلَّ الأسرى. تعلّمَ العالمُ كلُّه درساً: أنّ <b>المسلمَ عزيزٌ</b> لا يُهانُ، وأنّ المسلمينَ أمّةٌ واحدةٌ تنصرُ ضعيفَها. صارت «وامُعتصماه» رمزاً لِنصرةِ المظلومِ عبرَ التاريخ.",
     "en": "Mu’tasim conquered <b>Amorium</b> and rescued the Muslim woman and all the captives. The whole world learned a lesson: that <b>the Muslim is honoured</b> and not to be humiliated, and that the Muslims are one nation that aids its weak. “O Mu’tasim!” became a symbol of aiding the wronged throughout history."
    },
    "choice": {
     "q": {
      "ar": "ما الدرسُ الذي تعلّمه العالمُ من عَمُّوريّة؟",
      "en": "What lesson did the world learn from Amorium?"
     },
     "opts": [
      {
       "t": {
        "ar": "أنّ المسلمَ عزيزٌ والأمّةَ تنصرُ ضعيفَها",
        "en": "That the Muslim is honoured and the nation aids its weak"
       },
       "c": true,
       "exp": {
        "ar": "نعم! عزّةٌ وأخوّة.",
        "en": "Yes! Dignity and brotherhood."
       }
      },
      {
       "t": {
        "ar": "أنّ الضعيفَ يُترَك",
        "en": "That the weak are abandoned"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل يُنصَر.",
        "en": "No — they are aided."
       }
      },
      {
       "t": {
        "ar": "أنّ القوّةَ للظلم",
        "en": "That strength is for oppression"
       },
       "c": false,
       "exp": {
        "ar": "لا، بل لِنصرةِ المظلوم.",
        "en": "No — to aid the wronged."
       }
      }
     ]
    }
   },
      {"scene": "pen", "character": "🖋️", "text": {"ar": "فرحَ المسلمونَ بهذا النصرِ فرحاً عظيماً، وقالَ الشاعرُ <b>أبو تمّام</b> قصيدةً مشهورةً في فتحِ عمّوريّة، يردُّ فيها على المنجّمينَ الذين قالوا إنّ المعتصمَ لن ينتصر، ومطلعُها:<br><br><b>«السيفُ أصدقُ إنباءً من الكتبِ ... في حدِّه الحدُّ بين الجِدِّ واللعبِ»</b><br><br>أي أنّ العملَ الجادَّ والشجاعةَ أصدقُ من كلامِ المنجّمين. وما زالَ الناسُ يحفظونَ هذه القصيدةَ ويتعلّمونها إلى اليوم.", "en": "The Muslims rejoiced greatly at this victory, and the poet <b>Abu Tammam</b> composed a famous poem about the conquest of Amorium, answering the astrologers who had said al-Mu’tasim would not win. It begins:<br><br><b>“The sword tells truer news than the books — in its edge lies the line between seriousness and play.”</b><br><br>In other words, serious action and courage are truer than astrologers’ talk. People still memorize and study this poem today."}},
      {"scene": "sprout", "character": "🤝", "text": {"ar": "قال النبيُّ ﷺ: <b>«المسلمُ أخو المسلم، لا يظلمُه ولا يُسلِمُه»</b> (متّفقٌ عليه)، أي لا يتركُه لمن يؤذيه. فالمسلمونَ كالجسدِ الواحد، إذا تألّمَ منه عضوٌ تألّمَ الجسدُ كلُّه.<br><br>قد لا تقودُ جيشاً، لكنّك تستطيعُ أن تكونَ <b>«معتصماً صغيراً»</b>: تقفُ مع زميلٍ يُسخَرُ منه، وتخبرُ معلّمَك إذا رأيتَ ظلماً، ولا تضحكُ مع مَن يستهزئُ بغيرِه، وتدعو لإخوانِك المظلومينَ في كلِّ مكان. وتذكّرْ دائماً أنّ <b>عزّةَ المسلمِ</b> في إيمانِه وأخلاقِه، وأنّ اللهَ ينصرُ مَن ينصرُ المظلومينَ ويرحمُ الضعفاء.", "en": "The Prophet ﷺ said: <b>“A Muslim is the brother of a Muslim: he does not wrong him, nor does he abandon him”</b> (agreed upon) — meaning he does not leave him to whoever harms him. Muslims are like one body: when one part hurts, the whole body feels it.<br><br>You may not lead an army, but you can be <b>“a little Mu’tasim”</b>: stand by a classmate who is being mocked, tell your teacher when you see something unfair, don’t laugh along with someone making fun of others, and pray for your wronged brothers and sisters everywhere. And always remember that <b>a Muslim’s dignity</b> lies in his faith and character, and that Allah helps those who help the wronged and show mercy to the weak."}},
  ],
  "quiz": [
   {
    "q": {
     "ar": "مَن أنقذَ المعتصمُ في عَمُّوريّة؟",
     "en": "Whom did Mu’tasim rescue at Amorium?"
    },
    "opts": [
     {
      "t": {
       "ar": "المرأةَ المسلمةَ والأسرى",
       "en": "The Muslim woman and captives"
      },
      "c": true
     },
     {
      "t": {
       "ar": "لا أحد",
       "en": "No one"
      },
      "c": false
     },
     {
      "t": {
       "ar": "التجّار",
       "en": "Merchants"
      },
      "c": false
     }
    ]
   },
   {
    "q": {
     "ar": "ماذا صارت «وامُعتصماه»؟",
     "en": "What did “O Mu’tasim!” become?"
    },
    "opts": [
     {
      "t": {
       "ar": "رمزاً لِنصرةِ المظلوم",
       "en": "A symbol of aiding the wronged"
      },
      "c": true
     },
     {
      "t": {
       "ar": "أُغنيةً",
       "en": "A song"
      },
      "c": false
     },
     {
      "t": {
       "ar": "اسمَ مدينة",
       "en": "A city name"
      },
      "c": false
     }
    ]
   },
      {"q": {"ar": "مَن الشاعرُ الذي قالَ قصيدةً مشهورةً في فتحِ عمّوريّة؟", "en": "Which poet composed a famous poem about the conquest of Amorium?"}, "opts": [{"t": {"ar": "أبو تمّام", "en": "Abu Tammam"}, "c": true}, {"t": {"ar": "المتنبّي", "en": "Al-Mutanabbi"}, "c": false}, {"t": {"ar": "امرؤ القيس", "en": "Imru’ al-Qays"}, "c": false}]}
  ],
  "moral": {
   "ar": "المسلمونَ أمّةٌ واحدةٌ، عزيزةٌ بإيمانِها، تنصرُ المظلومَ وتحمي الضعيف.",
   "en": "Muslims are one nation, honoured by their faith, aiding the wronged and protecting the weak."
  },
  "badge": {
   "icon": "🌟",
   "title": {
    "ar": "وِسامُ العزّة",
    "en": "Badge of Dignity"
   }
  },
  "reflect": [
   {
    "ar": "كيف تحفظُ عزّةَ إخوانِك وتدافعُ عنهم؟",
    "en": "How do you protect your brethren’s dignity and defend them?"
   },
      {"ar": "كيف تكونُ «معتصماً صغيراً» في مدرستِك أو حيِّك؟", "en": "How can you be “a little Mu’tasim” at your school or in your neighbourhood?"}
  ],
  "didYouKnow": [
   {
    "ar": "قصةُ «وامُعتصماه» من أشهرِ قصصِ نصرةِ المظلومِ في التاريخ — المصدر: البداية والنهاية",
    "en": "“O Mu’tasim!” is among history’s most famous stories of aiding the wronged — Source: Al-Bidaya wa an-Nihaya"
   },
      {"ar": "قصيدةُ أبي تمّام «السيفُ أصدقُ إنباءً من الكتبِ» قيلتْ في فتحِ عمّوريّة — المصدر: ديوان أبي تمّام · البداية والنهاية", "en": "Abu Tammam’s poem “The sword tells truer news than the books” was composed on the conquest of Amorium — Source: Diwan Abi Tammam · Al-Bidaya wa an-Nihaya"}
  ]
 }
];
