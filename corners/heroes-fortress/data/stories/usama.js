/* data/stories/usama.js — Heroes · Usama ibn Zayd — sources: صور من حياة الصحابة (الباشا) · إسلام ويب · الدرر السنية · البداية والنهاية · صحيح البخاري ومسلم */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.usama = [
  { icon:'🫧', scene:'peaks', character:'⚔️',
    title:{ ar:'هل شققتَ عن قلبِه؟', en:'Did You Open His Heart?' },
    pages:[
      { scene:'peaks', character:'⚔️',
        text:{ ar:'في إحدى السرايا لحِقَ <b>أسامةُ</b> رجلاً من العدوِّ في القتال، فلمّا أدركه ورفعَ سيفَه قال الرجلُ فجأة: <b>«لا إله إلّا الله!»</b> لكنّ أسامةَ ظنَّ أنّه قالها خوفاً من السيفِ فقط، فضربه فقتله.<br><br>فلمّا رجعوا وبلغَ النبيَّ ﷺ الخبرُ تغيّرَ وجهُه وقال: <b>«يا أسامةُ، أقتلتَه بعدَ أن قال لا إله إلّا الله؟!»</b> فقال أسامة: يا رسولَ الله، إنّما قالها متعوّذاً من القتل! فقال النبيُّ ﷺ: <b>«أفلا شققتَ عن قلبِه حتى تعلمَ أقالها أم لا؟»</b> وكرّرها حتى تمنّى أسامةُ لو أنّه لم يكنْ أسلمَ إلّا ذلك اليوم — من شدّةِ ندمِه!',
          en:'On one expedition <b>Usama</b> pursued an enemy man in battle. When he reached him and raised his sword, the man suddenly said: <b>"There is no god but Allah!"</b> But Usama thought he said it only out of fear of the sword, so he struck and killed him.<br><br>When they returned and the news reached the Prophet ﷺ, his face changed and he said: <b>"O Usama, did you kill him after he said \'There is no god but Allah\'?!"</b> Usama said: O Messenger of Allah, he only said it to escape being killed! The Prophet ﷺ said: <b>"Did you open his heart to know whether he meant it or not?"</b> and repeated it until Usama wished he had only become Muslim that very day — from the depth of his regret!' },
        choice:{ q:{ar:'ما الدرسُ الذي علّمه النبيُّ ﷺ لأسامة؟',en:'What lesson did the Prophet ﷺ teach Usama?'},
          opts:[
            { t:{ar:'ألّا يحكمَ على نيّةِ القلبِ — الظاهرُ لنا والقلوبُ لله',en:'Not to judge the heart\'s intention — the outward is ours, hearts are Allah\'s'},c:true,exp:{ar:'نعم! نحكمُ بالظاهرِ ونَكِلُ السرائرَ إلى الله.',en:'Yes! We judge by the apparent and leave hidden matters to Allah.'} },
            { t:{ar:'أن يقتلَ المزيد',en:'To kill more'},c:false,exp:{ar:'لا، بل عاتبه على الحكمِ على القلب.',en:'No — he rebuked him for judging the heart.'} },
            { t:{ar:'ألّا يقاتلَ أبداً',en:'Never to fight at all'},c:false,exp:{ar:'لا، بل ألّا يحكمَ على نيّةِ من نطقَ بالشهادة.',en:'No — not to judge the intention of one who declares faith.'} },
          ] } },
    ],
    quiz:[
      { q:{ar:'ماذا قال الرجلُ قبلَ أن يقتلَه أسامة؟',en:'What did the man say before Usama killed him?'},
        opts:[ {t:{ar:'لا إله إلّا الله',en:'There is no god but Allah'},c:true}, {t:{ar:'لا شيء',en:'Nothing'},c:false}, {t:{ar:'استسلمتُ',en:'I surrender'},c:false} ] },
      { q:{ar:'بِمَ عاتبه النبيُّ ﷺ؟',en:'For what did the Prophet ﷺ rebuke him?'},
        opts:[ {t:{ar:'هل شققتَ عن قلبِه؟',en:'Did you open his heart?'},c:true}, {t:{ar:'لماذا تأخّرت؟',en:'Why were you late?'},c:false}, {t:{ar:'أين الغنيمة؟',en:'Where is the spoil?'},c:false} ] },
      { q:{ar:'ما القاعدةُ التي نتعلّمُها؟',en:'What principle do we learn?'},
        opts:[ {t:{ar:'الظاهرُ لنا والقلوبُ إلى الله',en:'The apparent is ours; hearts to Allah'},c:true}, {t:{ar:'نحكمُ على النيّات',en:'We judge intentions'},c:false}, {t:{ar:'سوءُ الظن',en:'Thinking ill'},c:false} ] },
    ],
    moral:{ar:'لا نحكمُ على ما في القلوب — نأخذُ الناسَ بظاهرِهم ونَكِلُ سرائرَهم إلى الله.',en:'We do not judge what is in hearts — we take people by their outward state and leave their inner secrets to Allah.'},
    badge:{icon:'🫧',title:{ar:'وِسامُ حُسنِ الظن',en:'Badge of Good Assumption'}},
    reflect:[ {ar:'هل تُحسِنُ الظنَّ بالناسِ ولا تحكمُ على نواياهم؟',en:'Do you think well of people and not judge their intentions?'}, {ar:'كيف تتعلّمُ من خطئِك كما تعلّمَ أسامة؟',en:'How do you learn from your mistakes as Usama did?'} ],
    didYouKnow:[ {ar:'قصّةُ أسامةَ والرجلِ الذي قال الشهادةَ ثابتةٌ في صحيحِ مسلم — المصدر: صحيح مسلم',en:'The account of Usama and the man who said the shahada is established in Sahih Muslim — Source: Sahih Muslim'}, {ar:'كان أسامةُ بعدَها يتورّعُ عن القتالِ في الفتنةِ خشيةَ الدماء — المصدر: البداية والنهاية',en:'Afterward Usama was scrupulous about fighting in civil strife, fearing bloodshed — Source: Al-Bidaya wa an-Nihaya'} ],
  },
  { icon:'🏴', scene:'madinah', character:'🐎',
    title:{ ar:'قائدٌ في الثامنةَ عشرة', en:'A Commander at Eighteen' },
    pages:[
      { scene:'madinah', character:'🐎',
        text:{ ar:'في آخرِ حياةِ النبيِّ ﷺ جهّزَ جيشاً كبيراً لغزوِ الرومِ في الشام، وجعلَ قائدَه <b>أسامةَ بنَ زيد</b> وهو شابٌّ في نحوِ الثامنةَ عشرة! وكان في الجيشِ كبارُ المهاجرينَ والأنصار. فتكلّمَ بعضُ الناسِ مستغربين: كيف يُؤمَّرُ شابٌّ على الكبار؟<br><br>فغضِبَ النبيُّ ﷺ وخطبَ وقال: <b>«إن تطعنوا في إمارتِه فقد كنتم تطعنونَ في إمارةِ أبيه من قبل، وايمُ اللهِ إن كان لخليقاً للإمارة، وإنّ ابنَه من بعدِه لمن أحبِّ الناسِ إليّ»</b>. فعرفَ الناسُ أنّ العبرةَ <b>بالكفاءةِ والأمانةِ لا بالسنّ</b>.',
          en:'Near the end of his life the Prophet ﷺ prepared a great army to fight the Romans in Sham, and made its commander <b>Usama ibn Zayd</b> — a youth of about eighteen! The army included senior Muhajirun and Ansar. Some people spoke in surprise: how can a youth command the elders?<br><br>The Prophet ﷺ grew displeased and addressed them: <b>"If you criticize his command, you criticized his father\'s command before; and by Allah, he was worthy of command, and his son after him is among the dearest of people to me."</b> So the people understood that what matters is <b>ability and trustworthiness, not age</b>.' },
        choice:{ q:{ar:'لماذا أمّر النبيُّ ﷺ أسامةَ الشابَّ على الكبار؟',en:'Why did the Prophet ﷺ put young Usama over the elders?'},
          opts:[
            { t:{ar:'لأنّ العبرةَ بالكفاءةِ والأمانةِ لا بالسن',en:'Because what matters is ability and trust, not age'},c:true,exp:{ar:'نعم! الشابُّ الكفءُ الأمينُ يستحقُّ القيادة.',en:'Yes! A capable, trustworthy youth deserves to lead.'} },
            { t:{ar:'محاباةً له فقط',en:'Out of favoritism only'},c:false,exp:{ar:'لا، بل لكفاءتِه وأهليّتِه للإمارة.',en:'No — for his ability and fitness to command.'} },
            { t:{ar:'لأنّه لا يوجدُ غيرُه',en:'Because there was no one else'},c:false,exp:{ar:'لا، بل كان في الجيشِ كبارُ الصحابة، لكنّه أهلٌ لها.',en:'No — the army had senior companions, but he was fit for it.'} },
          ] } },
    ],
    quiz:[
      { q:{ar:'كم كان عمرُ أسامةَ حين قادَ الجيش؟',en:'How old was Usama when he led the army?'},
        opts:[ {t:{ar:'نحو الثامنةَ عشرة',en:'About eighteen'},c:true}, {t:{ar:'ستّون',en:'Sixty'},c:false}, {t:{ar:'أربعون',en:'Forty'},c:false} ] },
      { q:{ar:'من كان في جيشِ أسامة؟',en:'Who was in Usama\'s army?'},
        opts:[ {t:{ar:'كبارُ المهاجرينَ والأنصار',en:'Senior Muhajirun and Ansar'},c:true}, {t:{ar:'الأطفالُ فقط',en:'Only children'},c:false}, {t:{ar:'لا أحد',en:'No one'},c:false} ] },
      { q:{ar:'ما العبرةُ في تأميرِه؟',en:'What is the lesson in his appointment?'},
        opts:[ {t:{ar:'الكفاءةُ والأمانةُ لا السن',en:'Ability and trust, not age'},c:true}, {t:{ar:'الكبرُ في السن',en:'Old age'},c:false}, {t:{ar:'كثرةُ المال',en:'Much wealth'},c:false} ] },
    ],
    moral:{ar:'العبرةُ بالكفاءةِ والأمانةِ لا بالسن، والشابُّ المؤهّلُ يستحقُّ القيادةَ والثقة.',en:'What matters is ability and trustworthiness, not age — a qualified youth deserves leadership and trust.'},
    badge:{icon:'🏴',title:{ar:'وِسامُ القائدِ الشاب',en:'Badge of the Young Commander'}},
    reflect:[ {ar:'كيف تُثبِتُ أنّك أهلٌ للمسؤوليةِ رغمَ صِغَرِ سنِّك؟',en:'How do you prove you are fit for responsibility despite your youth?'}, {ar:'هل تتقنُ ما يُوكَلُ إليك حتى يثقَ بك الناس؟',en:'Do you master what is entrusted to you so people trust you?'} ],
    didYouKnow:[ {ar:'أصرَّ أبو بكرٍ على إنفاذِ جيشِ أسامةَ بعدَ وفاةِ النبيِّ ﷺ تنفيذاً لأمرِه — المصدر: البداية والنهاية',en:'Abu Bakr insisted on dispatching Usama\'s army after the Prophet\'s ﷺ death, fulfilling his command — Source: Al-Bidaya wa an-Nihaya'}, {ar:'رجعَ جيشُ أسامةَ منتصراً سالماً، وكان أوّلَ انتصارٍ في خلافةِ أبي بكر — المصدر: الدرر السنية',en:'Usama\'s army returned victorious and safe — the first victory of Abu Bakr\'s caliphate — Source: ad-Durar as-Saniyya'} ],
  },
  {
    "icon": "⚖️",
    "scene": "scales",
    "character": "🧑",
    "title": {
      "ar": "العدلُ للجميع",
      "en": "Justice for Everyone"
    },
    "pages": [
      {
        "scene": "scales",
        "character": "🧑",
        "text": {
          "ar": "كان <b>أسامةُ بنُ زيد</b> يُلقَّبُ بـ<b>«حِبِّ رسولِ الله ﷺ»</b> لشدّةِ محبّةِ النبيِّ ﷺ له. وفي يومٍ من الأيّام سرقت امرأةٌ من قبيلةِ <b>بني مخزوم</b> — وهي قبيلةٌ شريفةٌ عظيمةٌ في قريش — فخافَ قومُها أن يُقامَ عليها حكمُ الله، وقالوا: من يُكلِّمُ رسولَ اللهِ ﷺ فيها؟ ثمّ قالوا: <b>ومن يجترئُ عليه إلّا أسامة، حِبُّ رسولِ الله ﷺ!</b><br><br>فكلّمَ أسامةُ النبيَّ ﷺ يطلبُ أن يعفوَ عنها. فتغيّرَ وجهُ النبيِّ ﷺ وقال: <b>«أتشفعُ في حدٍّ من حدودِ الله؟!»</b> فقال أسامة: استغفرْ لي يا رسولَ الله. ثمّ قامَ النبيُّ ﷺ فخطبَ الناسَ وقال: إنّما أهلكَ الأممَ قبلَكم أنّهم <b>كانوا إذا أخطأَ فيهم الشريفُ تركوه، وإذا أخطأَ الضعيفُ عاقبوه</b>. وأقسمَ ﷺ أنّه <b>لو فعلت ذلك ابنتُه فاطمةُ — وحاشاها — لأقامَ عليها الحكمَ نفسَه</b>.<br><br>تعلّمَ أسامةُ الدرسَ وتعلّمته الأمّةُ كلُّها: <b>القانونُ واحدٌ للغنيِّ والفقير، للقريبِ والبعيد</b>، ولا تنفعُ الواسطةُ في حقوقِ الله. وتابت المرأةُ بعدَ ذلك توبةً حسنة، وصارت تأتي السيّدةَ عائشةَ فترفعُ حاجتَها إلى النبيِّ ﷺ.",
          "en": "<b>Usama ibn Zayd</b> was called <b>\"the beloved of the Messenger of Allah ﷺ\"</b> because of how much the Prophet ﷺ loved him. One day a woman from the tribe of <b>Banu Makhzum</b> — a noble, powerful clan of Quraysh — stole, and her people feared Allah's ruling would be applied to her. They said: Who will speak to the Messenger of Allah ﷺ about her? Then they said: <b>Who would dare except Usama, the beloved of the Messenger of Allah ﷺ!</b><br><br>So Usama spoke to the Prophet ﷺ, asking him to pardon her. The Prophet's ﷺ face changed and he said: <b>\"Do you intercede regarding one of the limits set by Allah?!\"</b> Usama said: Ask forgiveness for me, O Messenger of Allah. Then the Prophet ﷺ stood and addressed the people: What destroyed the nations before you was that <b>when a noble person among them did wrong they let him off, and when a weak person did wrong they punished him</b>. And he ﷺ swore that <b>even if his own daughter Fatima — and she was far from it — had done so, he would apply the same ruling to her</b>.<br><br>Usama learned the lesson, and so did the whole Ummah: <b>the law is one for rich and poor, near and far</b>, and favouritism has no place in Allah's rights. The woman later repented sincerely, and used to come to 'A'isha, who would convey her needs to the Prophet ﷺ."
        },
        "choice": {
          "q": {
            "ar": "ماذا علّمَ النبيُّ ﷺ أسامةَ والناسَ في هذه القصّة؟",
            "en": "What did the Prophet ﷺ teach Usama and the people in this story?"
          },
          "opts": [
            {
              "t": {
                "ar": "أنّ الحكمَ واحدٌ للشريفِ والضعيف",
                "en": "That the ruling is the same for the noble and the weak"
              },
              "c": true,
              "exp": {
                "ar": "أحسنت! العدلُ للجميعِ بلا واسطةٍ ولا محاباة.",
                "en": "Well done! Justice for all, without favouritism."
              }
            },
            {
              "t": {
                "ar": "أنّ الأقوياءَ لا يُحاسَبون",
                "en": "That the powerful are not held accountable"
              },
              "c": false,
              "exp": {
                "ar": "لا، بل هذا ما أهلكَ الأممَ السابقة.",
                "en": "No — that is what destroyed earlier nations."
              }
            },
            {
              "t": {
                "ar": "أنّ الواسطةَ تنفعُ دائماً",
                "en": "That connections always help"
              },
              "c": false,
              "exp": {
                "ar": "لا، فالواسطةُ لا تنفعُ في حقوقِ الله.",
                "en": "No — connections do not help in Allah's rights."
              }
            }
          ]
        }
      }
    ],
    "quiz": [
      {
        "q": {
          "ar": "بماذا كان يُلقَّبُ أسامة؟",
          "en": "What was Usama's title?"
        },
        "opts": [
          {
            "t": {
              "ar": "سيفُ الله",
              "en": "The Sword of Allah"
            },
            "c": false
          },
          {
            "t": {
              "ar": "حِبُّ رسولِ الله ﷺ",
              "en": "The beloved of the Messenger of Allah ﷺ"
            },
            "c": true
          },
          {
            "t": {
              "ar": "أمينُ الأمّة",
              "en": "The trustee of the Ummah"
            },
            "c": false
          }
        ]
      },
      {
        "q": {
          "ar": "ماذا قال النبيُّ ﷺ لأسامةَ حين كلّمه؟",
          "en": "What did the Prophet ﷺ say to Usama when he spoke to him?"
        },
        "opts": [
          {
            "t": {
              "ar": "أحسنتَ يا أسامة",
              "en": "Well done, Usama"
            },
            "c": false
          },
          {
            "t": {
              "ar": "اذهبْ والعبْ",
              "en": "Go and play"
            },
            "c": false
          },
          {
            "t": {
              "ar": "أتشفعُ في حدٍّ من حدودِ الله؟",
              "en": "Do you intercede regarding one of Allah's limits?"
            },
            "c": true
          }
        ]
      },
      {
        "q": {
          "ar": "ماذا أهلكَ الأممَ السابقةَ كما قال النبيُّ ﷺ؟",
          "en": "What destroyed earlier nations, as the Prophet ﷺ said?"
        },
        "opts": [
          {
            "t": {
              "ar": "تركُ الشريفِ ومعاقبةُ الضعيف",
              "en": "Letting the noble off and punishing the weak"
            },
            "c": true
          },
          {
            "t": {
              "ar": "كثرةُ المطر",
              "en": "Too much rain"
            },
            "c": false
          },
          {
            "t": {
              "ar": "قلّةُ الطعام",
              "en": "Too little food"
            },
            "c": false
          }
        ]
      }
    ],
    "moral": {
      "ar": "العدلُ أساسُ الأمم: الحقُّ واحدٌ للجميع، ولا نُحابي أحداً لقرابتِه أو مكانتِه، حتى أحبَّ الناسِ إلينا.",
      "en": "Justice is the foundation of nations: what is right is the same for all, and we favour no one for kinship or status — not even those we love most."
    },
    "badge": {
      "icon": "⚖️",
      "title": {
        "ar": "وِسامُ العدلِ للجميع",
        "en": "Badge of Justice for All"
      }
    },
    "reflect": [
      {
        "ar": "هل تُعامِلُ صديقَك المقرّبَ وغيرَه بالعدلِ نفسِه في اللعب؟",
        "en": "Do you treat your best friend and others with the same fairness in games?"
      },
      {
        "ar": "لماذا يجبُ أن يكونَ القانونُ واحداً للجميع؟",
        "en": "Why must the rules be the same for everyone?"
      }
    ],
    "didYouKnow": [
      {
        "ar": "قصّةُ المرأةِ المخزوميّةِ وقولُه ﷺ لأسامة: «أتشفعُ في حدٍّ من حدودِ الله؟» رواها البخاري (٣٤٧٥) ومسلم (١٦٨٨)",
        "en": "The story of the Makhzumi woman and his ﷺ words to Usama \"Do you intercede regarding one of Allah's limits?\" are in al-Bukhari (3475) and Muslim (1688)"
      },
      {
        "ar": "ذكرت عائشةُ رضي الله عنها أنّ المرأةَ حسُنت توبتُها وتزوّجت، وكانت تأتيها فترفعُ حاجتَها إلى النبيِّ ﷺ — رواه البخاري (٢٦٤٨)",
        "en": "'A'isha mentioned that the woman's repentance was good, she married, and would come to her to convey her needs to the Prophet ﷺ — al-Bukhari (2648)"
      }
    ]
  },
];
