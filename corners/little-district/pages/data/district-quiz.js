/* district-quiz.js — 3-level tests for حينا الصغير (akhlaq + adab), 34 houses */
window.DISTRICT_QUIZ = {
  akhlaq: { stations: [
 {
  "id": "truth",
  "num": 1,
  "icon": "🏠",
  "title": {
   "ar": "حصن الصدق",
   "en": "Fortress of Truth"
  },
  "key": {
   "ar": "الصدقُ قولُ الحقِّ ولو على النفس",
   "en": "Truthfulness is telling the truth, even against oneself"
  },
  "flip": {
   "claim": {
    "ar": "الكذبُ البسيطُ لا يضرّ",
    "en": "A small lie does no harm"
   },
   "bust": {
    "ar": "الصدقُ ينجي والكذبُ يهلك؛ ﷺ: «عليكم بالصدق»",
    "en": "Truth saves and lying destroys"
   }
  }
 },
 {
  "id": "trust",
  "num": 2,
  "icon": "🏠",
  "title": {
   "ar": "بيت الأمانة",
   "en": "House of Trust"
  },
  "key": {
   "ar": "الأمانةُ حفظُ ما اؤتُمِنتَ عليه وأداؤه",
   "en": "Trustworthiness is guarding and returning what you are entrusted with"
  },
  "flip": {
   "claim": {
    "ar": "ما دامَ صاحبُه غائبًا فلا بأس",
    "en": "If the owner is away, it is fine"
   },
   "bust": {
    "ar": "الأمانةُ تُؤدَّى كاملةً؛ والخيانةُ من صفاتِ المنافق",
    "en": "Trust must be fully returned"
   }
  }
 },
 {
  "id": "courage",
  "num": 3,
  "icon": "🏠",
  "title": {
   "ar": "بيت الشجاعة",
   "en": "House of Courage"
  },
  "key": {
   "ar": "الشجاعةُ قولُ الحقِّ وفعلُ الخيرِ بلا خوف",
   "en": "Courage is speaking truth and doing good without fear"
  },
  "flip": {
   "claim": {
    "ar": "الشجاعةُ هي التهوّرُ والمخاطرة",
    "en": "Courage means recklessness"
   },
   "bust": {
    "ar": "الشجاعةُ الحقّةُ ضبطُ النفسِ وقولُ الحقّ",
    "en": "True courage is self-control and truth"
   }
  }
 },
 {
  "id": "ihsan",
  "num": 4,
  "icon": "🏠",
  "title": {
   "ar": "بيت الإحسان",
   "en": "House of Ihsan"
  },
  "key": {
   "ar": "الإحسانُ إتقانُ العملِ ومراقبةُ الله",
   "en": "Ihsan is perfecting your work and being mindful of Allah"
  },
  "flip": {
   "claim": {
    "ar": "يكفي أداءُ العملِ كيفما كان",
    "en": "Any sloppy effort is enough"
   },
   "bust": {
    "ar": "الإحسانُ أن تعملَ كأنّك ترى الله",
    "en": "Ihsan is to act as if you see Allah"
   }
  }
 },
 {
  "id": "tongue",
  "num": 5,
  "icon": "🏠",
  "title": {
   "ar": "بيت حفظ اللسان",
   "en": "House of the Guarded Tongue"
  },
  "key": {
   "ar": "حفظُ اللسانِ تركُ الكلامِ السيّئِ والغيبة",
   "en": "Guarding the tongue means leaving bad speech and backbiting"
  },
  "flip": {
   "claim": {
    "ar": "أقولُ ما أشاءُ فالكلامُ حرّ",
    "en": "I can say anything I want"
   },
   "bust": {
    "ar": "ﷺ: «من كان يؤمنُ بالله فليقل خيرًا أو ليصمت»",
    "en": "Speak good or stay silent"
   }
  }
 },
 {
  "id": "pardon",
  "num": 6,
  "icon": "🏠",
  "title": {
   "ar": "بيت العفو",
   "en": "House of Pardon"
  },
  "key": {
   "ar": "العفوُ تركُ العقابِ مع القدرةِ عليه",
   "en": "Pardon is forgiving when you are able to punish"
  },
  "flip": {
   "claim": {
    "ar": "العفوُ ضعفٌ ومذلّة",
    "en": "Pardon is weakness"
   },
   "bust": {
    "ar": "العفوُ عزّةٌ؛ «وليعفوا وليصفحوا»",
    "en": "Pardon is honor"
   }
  }
 },
 {
  "id": "forbearance",
  "num": 7,
  "icon": "🏠",
  "title": {
   "ar": "بيت الحلم",
   "en": "House of Forbearance"
  },
  "key": {
   "ar": "الحلمُ ضبطُ النفسِ عند الغضب",
   "en": "Forbearance is self-control when angry"
  },
  "flip": {
   "claim": {
    "ar": "الغضبُ الشديدُ دليلُ القوّة",
    "en": "Rage shows strength"
   },
   "bust": {
    "ar": "ﷺ: «ليس الشديدُ بالصُّرعة، إنما الشديدُ من يملكُ نفسَه عند الغضب»",
    "en": "The strong one controls himself in anger"
   }
  }
 },
 {
  "id": "respect",
  "num": 8,
  "icon": "🏠",
  "title": {
   "ar": "بيت الاحترام",
   "en": "House of Respect"
  },
  "key": {
   "ar": "الاحترامُ توقيرُ الكبيرِ ورحمةُ الصغير",
   "en": "Respect is honoring elders and being kind to the young"
  },
  "flip": {
   "claim": {
    "ar": "الاحترامُ للكبارِ فقط",
    "en": "Respect is only for adults"
   },
   "bust": {
    "ar": "ﷺ: «ليس منّا من لم يوقّر كبيرَنا ويرحم صغيرَنا»",
    "en": "Respect both old and young"
   }
  }
 },
 {
  "id": "sincerity",
  "num": 9,
  "icon": "🏠",
  "title": {
   "ar": "بيت الإخلاص",
   "en": "House of Sincerity"
  },
  "key": {
   "ar": "الإخلاصُ أن يكونَ العملُ لله وحده",
   "en": "Sincerity is doing deeds for Allah alone"
  },
  "flip": {
   "claim": {
    "ar": "أعملُ الخيرَ ليراني الناس",
    "en": "I do good so people see me"
   },
   "bust": {
    "ar": "الإخلاصُ روحُ العمل؛ والرياءُ يُحبِطه",
    "en": "Sincerity is the soul of every deed"
   }
  }
 },
 {
  "id": "humility",
  "num": 10,
  "icon": "🏠",
  "title": {
   "ar": "بيت التواضع",
   "en": "House of Humility"
  },
  "key": {
   "ar": "التواضعُ خفضُ الجناحِ وتركُ الكِبر",
   "en": "Humility is gentleness and leaving arrogance"
  },
  "flip": {
   "claim": {
    "ar": "التواضعُ ذلٌّ ونقص",
    "en": "Humility is humiliation"
   },
   "bust": {
    "ar": "ﷺ: «ما تواضعَ أحدٌ لله إلا رفعه»",
    "en": "Allah raises the humble"
   }
  }
 },
 {
  "id": "haya",
  "num": 11,
  "icon": "🏠",
  "title": {
   "ar": "بيت الحياء",
   "en": "House of Haya"
  },
  "key": {
   "ar": "الحياءُ خُلُقٌ يمنعُ من القبيح",
   "en": "Modesty restrains us from wrong"
  },
  "flip": {
   "claim": {
    "ar": "الحياءُ خجلٌ يمنعُ التعلّم",
    "en": "Modesty stops learning"
   },
   "bust": {
    "ar": "ﷺ: «الحياءُ لا يأتي إلا بخير»",
    "en": "Modesty brings only good"
   }
  }
 },
 {
  "id": "striving",
  "num": 12,
  "icon": "🏠",
  "title": {
   "ar": "بيت السعي",
   "en": "House of Striving"
  },
  "key": {
   "ar": "السعيُ بذلُ الجهدِ في الخير",
   "en": "Striving is exerting effort in good"
  },
  "flip": {
   "claim": {
    "ar": "أتركُ كلَّ شيءٍ للقَدَر بلا عمل",
    "en": "I leave everything to fate without effort"
   },
   "bust": {
    "ar": "نأخذُ بالأسبابِ ونتوكّلُ على الله",
    "en": "Take the means and trust Allah"
   }
  }
 },
 {
  "id": "patience",
  "num": 13,
  "icon": "🏠",
  "title": {
   "ar": "بيت الصبر",
   "en": "House of Patience"
  },
  "key": {
   "ar": "الصبرُ ثباتٌ عند البلاءِ وعلى الطاعة",
   "en": "Patience is steadfastness in hardship and obedience"
  },
  "flip": {
   "claim": {
    "ar": "الصبرُ استسلامٌ وعجز",
    "en": "Patience is helpless surrender"
   },
   "bust": {
    "ar": "«إنما يوفّى الصابرون أجرَهم بغير حساب»",
    "en": "The patient are rewarded without measure"
   }
  }
 },
 {
  "id": "loyalty",
  "num": 14,
  "icon": "🏠",
  "title": {
   "ar": "بيت الوفاء",
   "en": "House of Loyalty"
  },
  "key": {
   "ar": "الوفاءُ حفظُ العهدِ وردُّ الجميل",
   "en": "Loyalty is keeping promises and returning kindness"
  },
  "flip": {
   "claim": {
    "ar": "الوعدُ كلامٌ يُنسى",
    "en": "A promise is just words"
   },
   "bust": {
    "ar": "«وأوفوا بالعهد إنّ العهدَ كان مسؤولًا»",
    "en": "Fulfill your promises"
   }
  }
 },
 {
  "id": "gratitude",
  "num": 15,
  "icon": "🏠",
  "title": {
   "ar": "بيت الشكر",
   "en": "House of Gratitude"
  },
  "key": {
   "ar": "الشكرُ الاعترافُ بالنعمةِ وحمدُ المنعِم",
   "en": "Gratitude is recognizing blessings and thanking the Giver"
  },
  "flip": {
   "claim": {
    "ar": "النعمُ حقٌّ لي فلا أشكر",
    "en": "Blessings are my right, no thanks needed"
   },
   "bust": {
    "ar": "«لئن شكرتم لأزيدنّكم»",
    "en": "Thankfulness increases blessings"
   }
  }
 },
 {
  "id": "generosity",
  "num": 16,
  "icon": "🏠",
  "title": {
   "ar": "بيت الكرم",
   "en": "House of Generosity"
  },
  "key": {
   "ar": "الكرمُ بذلُ الخيرِ للناسِ بطيبِ نفس",
   "en": "Generosity is giving good to people gladly"
  },
  "flip": {
   "claim": {
    "ar": "الكرمُ تبذيرٌ وإسراف",
    "en": "Generosity is wasteful"
   },
   "bust": {
    "ar": "الكرمُ خُلُقٌ نبيل، والبخلُ مذموم",
    "en": "Generosity is noble; stinginess is blamed"
   }
  }
 },
 {
  "id": "knowledge",
  "num": 17,
  "icon": "🏠",
  "title": {
   "ar": "بيت العلم",
   "en": "House of Knowledge"
  },
  "key": {
   "ar": "طلبُ العلمِ فريضةٌ ونورٌ للقلب",
   "en": "Seeking knowledge is a duty and light for the heart"
  },
  "flip": {
   "claim": {
    "ar": "العلمُ لا يلزمُ إلا الكبار",
    "en": "Only adults need knowledge"
   },
   "bust": {
    "ar": "ﷺ: «طلبُ العلمِ فريضةٌ على كلِّ مسلم»",
    "en": "Knowledge is obligatory on every Muslim"
   }
  }
 },
 {
  "id": "chivalry",
  "num": 18,
  "icon": "🏠",
  "title": {
   "ar": "بيت المروءة",
   "en": "House of Chivalry"
  },
  "key": {
   "ar": "المروءةُ فعلُ الجميلِ وتركُ الدنيء",
   "en": "Chivalry is doing noble acts and leaving base ones"
  },
  "flip": {
   "claim": {
    "ar": "المروءةُ قديمةٌ لا تنفع",
    "en": "Chivalry is outdated"
   },
   "bust": {
    "ar": "المروءةُ خُلُقُ الكرامِ في كلِّ زمان",
    "en": "Chivalry is the trait of the noble"
   }
  }
 },
 {
  "id": "contentment",
  "num": 19,
  "icon": "🏠",
  "title": {
   "ar": "بيت القناعة والرضا",
   "en": "House of Contentment"
  },
  "key": {
   "ar": "القناعةُ الرضا بما قسمَ الله",
   "en": "Contentment is being pleased with Allah’s share"
  },
  "flip": {
   "claim": {
    "ar": "من يقنعْ يبقَ فقيرًا",
    "en": "Contentment keeps you poor"
   },
   "bust": {
    "ar": "ﷺ: «القناعةُ كنزٌ لا يفنى»",
    "en": "Contentment is a treasure that never ends"
   }
  }
 },
 {
  "id": "mercy",
  "num": 20,
  "icon": "🏠",
  "title": {
   "ar": "بيت الرحمة",
   "en": "House of Mercy"
  },
  "key": {
   "ar": "الرحمةُ الرفقُ بالخلقِ والعطفُ عليهم",
   "en": "Mercy is gentleness and compassion to all"
  },
  "flip": {
   "claim": {
    "ar": "الرحمةُ بالضعفاءِ فقط",
    "en": "Mercy is only for the weak"
   },
   "bust": {
    "ar": "ﷺ: «الراحمون يرحمهم الرحمن»",
    "en": "The merciful are shown mercy by Allah"
   }
  }
 },
 {
  "id": "justice",
  "num": 21,
  "icon": "🏠",
  "title": {
   "ar": "بيت العدل",
   "en": "House of Justice"
  },
  "key": {
   "ar": "العدلُ إعطاءُ كلِّ ذي حقٍّ حقَّه",
   "en": "Justice is giving everyone their due"
  },
  "flip": {
   "claim": {
    "ar": "أنصرُ صديقي ولو كان ظالمًا",
    "en": "I support my friend even if wrong"
   },
   "bust": {
    "ar": "«اعدلوا هو أقربُ للتقوى»",
    "en": "Be just; it is nearer to piety"
   }
  }
 },
 {
  "id": "altruism",
  "num": 22,
  "icon": "🏠",
  "title": {
   "ar": "بيت الإيثار",
   "en": "House of Altruism"
  },
  "key": {
   "ar": "بيتُ الإيثار: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Altruism: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "الإيثار غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل الإيثار خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 },
 {
  "id": "goodthink",
  "num": 23,
  "icon": "🏠",
  "title": {
   "ar": "بيت حسن الظن",
   "en": "House of Good Thoughts"
  },
  "key": {
   "ar": "بيتُ حسن الظن: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Good Thoughts: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "حسن الظن غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل حسن الظن خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 },
 {
  "id": "mastery",
  "num": 24,
  "icon": "🏠",
  "title": {
   "ar": "بيت الإتقان",
   "en": "House of Mastery"
  },
  "key": {
   "ar": "بيتُ الإتقان: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Mastery: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "الإتقان غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل الإتقان خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 }
] },
  adab: { stations: [
 {
  "id": "greeting",
  "num": 1,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب السلام",
   "en": "House of Greeting Manners"
  },
  "key": {
   "ar": "آدابُ السلامِ نشرُ التحيّةِ بالخير",
   "en": "The etiquette of greeting is spreading peace"
  },
  "flip": {
   "claim": {
    "ar": "السلامُ غيرُ مهمّ",
    "en": "Greeting is unimportant"
   },
   "bust": {
    "ar": "ﷺ: «أفشوا السلامَ بينكم»",
    "en": "Spread the salam among you"
   }
  }
 },
 {
  "id": "eating",
  "num": 2,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب الطعام",
   "en": "House of Eating Manners"
  },
  "key": {
   "ar": "آدابُ الطعامِ التسميةُ والأكلُ باليمين",
   "en": "Table manners: say bismillah and eat with the right hand"
  },
  "flip": {
   "claim": {
    "ar": "آكلُ كيفما اتّفق",
    "en": "I eat however I like"
   },
   "bust": {
    "ar": "ﷺ: «سمِّ اللهَ وكُلْ بيمينك»",
    "en": "Say Allah’s name and eat with your right"
   }
  }
 },
 {
  "id": "permission",
  "num": 3,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب الاستئذان",
   "en": "House of Permission"
  },
  "key": {
   "ar": "بيتُ الاستئذان: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Permission: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "الاستئذان غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل الاستئذان خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 },
 {
  "id": "dua",
  "num": 4,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب الدعاء",
   "en": "House of Du\\u2018a Manners"
  },
  "key": {
   "ar": "بيتُ الدعاء: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Du\\u2018a: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "الدعاء غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل الدعاء خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 },
 {
  "id": "sleep",
  "num": 5,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب النوم",
   "en": "House of Sleep Manners"
  },
  "key": {
   "ar": "بيتُ النوم: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Sleep: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "النوم غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل النوم خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 },
 {
  "id": "hospitality",
  "num": 6,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب الضيافة",
   "en": "House of Hospitality"
  },
  "key": {
   "ar": "بيتُ الضيافة: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Hospitality: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "الضيافة غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل الضيافة خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 },
 {
  "id": "bathroom",
  "num": 7,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب قضاء الحاجة",
   "en": "House of Bathroom Manners"
  },
  "key": {
   "ar": "بيتُ الحاجة: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Bathroom: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "الحاجة غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل الحاجة خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 },
 {
  "id": "masjid",
  "num": 8,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب المسجد",
   "en": "House of Masjid Manners"
  },
  "key": {
   "ar": "بيتُ المسجد: المسلمُ يتحلّى بهذا الخُلُقِ النبيل",
   "en": "House of Masjid: a Muslim adorns himself with this noble trait"
  },
  "flip": {
   "claim": {
    "ar": "المسجد غيرُ مهمّ",
    "en": "This trait is unimportant"
   },
   "bust": {
    "ar": "بل المسجد خُلُقٌ عظيمٌ دعا إليه الإسلام",
    "en": "It is a great trait Islam calls to"
   }
  }
 },
 {
  "id": "friendship",
  "num": 9,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب الأخوة",
   "en": "House of Brotherhood"
  },
  "key": {
   "ar": "آدابُ الأخوّةِ المحبّةُ والنصيحة",
   "en": "Brotherhood manners: love and sincere advice"
  },
  "flip": {
   "claim": {
    "ar": "الصديقُ من يوافقني في كلِّ شيء",
    "en": "A friend agrees with me always"
   },
   "bust": {
    "ar": "ﷺ: «المرءُ على دينِ خليلِه»",
    "en": "Choose your friends wisely"
   }
  }
 },
 {
  "id": "majlis",
  "num": 10,
  "icon": "🏠",
  "title": {
   "ar": "بيت آداب المجلس",
   "en": "House of the Majlis"
  },
  "key": {
   "ar": "آدابُ المجلسِ الإنصاتُ وحسنُ الاستماع",
   "en": "Gathering manners: listening well and good company"
  },
  "flip": {
   "claim": {
    "ar": "أقاطعُ الناسَ وأتصدّرُ المجلس",
    "en": "I interrupt and push to the front"
   },
   "bust": {
    "ar": "نُنصتُ ونوسّعُ ونحترمُ الحاضرين",
    "en": "Listen, make room, and respect others"
   }
  }
 }
] }
};
