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
   }
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
   }
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
   }
  ],
  "didYouKnow": [
   {
    "ar": "كانت عَمُّوريّةُ سنةَ ٢٢٣هـ في خلافةِ المعتصم — المصدر: البداية والنهاية",
    "en": "Amorium was in 223 AH under Mu’tasim — Source: Al-Bidaya wa an-Nihaya"
   }
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
   }
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
   }
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
   }
  ],
  "didYouKnow": [
   {
    "ar": "قيلَ إنّ جيشَ عَمُّوريّةَ من أعظمِ جيوشِ ذلك الزمان — المصدر: البداية والنهاية",
    "en": "The army of Amorium was said to be among the greatest of its time — Source: Al-Bidaya wa an-Nihaya"
   }
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
   }
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
   }
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
   }
  ],
  "didYouKnow": [
   {
    "ar": "قصةُ «وامُعتصماه» من أشهرِ قصصِ نصرةِ المظلومِ في التاريخ — المصدر: البداية والنهاية",
    "en": "“O Mu’tasim!” is among history’s most famous stories of aiding the wronged — Source: Al-Bidaya wa an-Nihaya"
   }
  ]
 }
];
