/* week-quests.js — «مهمّة الأسبوع» (the weekly quest).
   Each week the whole family focuses on one value: the child sees it in the daily page,
   the parents see it in the weekly report.
   Fields: id, icon, title{ar,en}, why{ar,en,src{ar,en}} (one authentic ayah/hadith),
   tasks[3]{icon,ar,en}, family{ar,en}, talk{ar,en}.
   Ayat between ﴿ ﴾ are played as recitation — they are checked against the mushaf
   with functions/quran-match.js. */
window.MK_QUESTS = [
  { id:'kindness-neighbours', icon:'🏡',
    title:{ ar:'أسبوعُ الإحسان إلى الجيران', en:'The week of kindness to neighbours' },
    why:{ ar:'قال النبيُّ ﷺ: «مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ».',
          en:'The Prophet ﷺ said: "Whoever believes in Allah and the Last Day, let them honour their neighbour."',
          src:{ ar:'متّفقٌ عليه (البخاريّ ومسلم)', en:'Agreed upon (al-Bukhari and Muslim)' } },
    tasks:[
      { icon:'👋', ar:'هيّا نُلقي السلامَ على جيرانِنا بابتسامة.', en:'Let\'s greet our neighbours with salam and a smile.' },
      { icon:'🍪', ar:'لنُهدِ الجيرانَ طبقًا صغيرًا من الطعام مع ماما أو بابا.', en:'Let\'s take a small plate of food to a neighbour with Mum or Dad.' },
      { icon:'🤫', ar:'لنلعبْ بهدوءٍ حتى لا نُزعجَ جيرانَنا.', en:'Let\'s play quietly so we do not disturb our neighbours.' }
    ],
    family:{ ar:'اصنعوا معًا بطاقةَ شكرٍ أو هديّةً صغيرةً لجارٍ واحدٍ وقدِّموها له.', en:'Make a thank-you card or a small gift together and give it to one neighbour.' },
    talk:{ ar:'ما الشيءُ اللطيفُ الذي يمكنُ أن نفعلَه لجيرانِنا الأسبوعَ القادم؟', en:'What kind thing could we do for our neighbours next week?' } },

  { id:'honesty', icon:'🗣️',
    title:{ ar:'أسبوعُ الصدق', en:'The week of honesty' },
    why:{ ar:'قال اللهُ تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ﴾ [التوبة: ١١٩]',
          en:'Allah says: "O you who believe, be mindful of Allah and be with those who are truthful."',
          src:{ ar:'سورة التوبة، الآية ١١٩', en:'Quran, at-Tawbah 9:119' } },
    tasks:[
      { icon:'✅', ar:'هيّا نقولُ الحقَّ دائمًا، حتى لو أخطأنا.', en:'Let\'s always tell the truth, even when we make a mistake.' },
      { icon:'🧸', ar:'لنُعِدْ ما ليس لنا إلى صاحبِه.', en:'Let\'s give back anything that is not ours.' },
      { icon:'🎲', ar:'لنلعبْ بأمانةٍ ولا نغشَّ في الألعاب.', en:'Let\'s play fairly and never cheat in games.' }
    ],
    family:{ ar:'كلُّ مَن يقولُ الصدقَ في موقفٍ صعبٍ هذا الأسبوع نضعُ له نجمةً على «لوحةِ الصادقين».', en:'Whenever someone tells the truth in a hard moment this week, add a star to the family "Truth Board".' },
    talk:{ ar:'لماذا نشعرُ بالراحةِ عندما نقولُ الصدق؟', en:'Why do we feel at peace when we tell the truth?' } },

  { id:'cleanliness-tahara', icon:'🧼',
    title:{ ar:'أسبوعُ النظافة والطهارة', en:'The week of cleanliness and purity' },
    why:{ ar:'قال النبيُّ ﷺ: «الطُّهُورُ شَطْرُ الْإِيمَانِ».',
          en:'The Prophet ﷺ said: "Purity is half of faith."',
          src:{ ar:'رواه مسلم (٢٢٣)', en:'Sahih Muslim (223)' } },
    tasks:[
      { icon:'🫧', ar:'هيّا نغسلُ أيديَنا قبلَ الأكلِ وبعدَه.', en:'Let\'s wash our hands before and after eating.' },
      { icon:'🪥', ar:'لننظّفْ أسنانَنا صباحًا ومساءً.', en:'Let\'s brush our teeth in the morning and at night.' },
      { icon:'💧', ar:'لنتعلّمْ خطوةً من خطواتِ الوضوءِ مع ماما أو بابا.', en:'Let\'s learn one step of wudu with Mum or Dad.' }
    ],
    family:{ ar:'توضّؤوا معًا قبلَ صلاةٍ واحدةٍ كلَّ يوم، والكبارُ يُعلّمون الصغار.', en:'Make wudu together before one prayer every day, with the older ones teaching the younger.' },
    talk:{ ar:'كيف تجعلُنا النظافةُ نشعرُ بالسعادةِ والنشاط؟', en:'How does being clean make us feel happy and fresh?' } },

  { id:'gratitude-shukr', icon:'🤲',
    title:{ ar:'أسبوعُ الشكر', en:'The week of gratitude' },
    why:{ ar:'قال اللهُ تعالى: ﴿فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ﴾ [البقرة: ١٥٢]',
          en:'Allah says: "So remember Me; I will remember you. And be grateful to Me and do not be ungrateful."',
          src:{ ar:'سورة البقرة، الآية ١٥٢', en:'Quran, al-Baqarah 2:152' } },
    tasks:[
      { icon:'🍽️', ar:'هيّا نقولُ «الحمدُ لله» بعدَ كلِّ أكلةٍ وشربة.', en:'Let\'s say "Alhamdulillah" after every meal and drink.' },
      { icon:'💌', ar:'لنقلْ «شكرًا» لكلِّ مَن يساعدُنا.', en:'Let\'s say "thank you" to everyone who helps us.' },
      { icon:'✨', ar:'لنذكرْ قبلَ النومِ ثلاثَ نِعَمٍ أعطانا اللهُ إيّاها.', en:'Let\'s name three blessings from Allah before we sleep.' }
    ],
    family:{ ar:'ضعوا «برطمانَ النِّعَم»: كلُّ واحدٍ يكتبُ أو يرسمُ نعمةً كلَّ يوم، ونقرؤها معًا آخرَ الأسبوع.', en:'Start a "blessings jar": everyone writes or draws one blessing a day, and read them together at the end of the week.' },
    talk:{ ar:'ما أجملُ نعمةٍ أعطاك اللهُ إيّاها اليوم؟', en:'What is the most beautiful blessing Allah gave you today?' } },

  { id:'salah-on-time', icon:'🕌',
    title:{ ar:'أسبوعُ الصلاة في وقتها', en:'The week of praying on time' },
    why:{ ar:'سُئل النبيُّ ﷺ: أيُّ العملِ أحبُّ إلى الله؟ فقال: «الصَّلَاةُ عَلَى وَقْتِهَا».',
          en:'The Prophet ﷺ was asked which deed Allah loves most. He said: "Prayer at its proper time."',
          src:{ ar:'متّفقٌ عليه (البخاريّ ومسلم)', en:'Agreed upon (al-Bukhari and Muslim)' } },
    tasks:[
      { icon:'⏰', ar:'هيّا نتركُ اللعبَ ونستعدُّ عندما نسمعُ الأذان.', en:'Let\'s stop playing and get ready when we hear the adhan.' },
      { icon:'🧎', ar:'لنصلِّ صلاةً واحدةً على الأقلِّ كلَّ يومٍ مع العائلة.', en:'Let\'s pray at least one prayer every day with the family.' },
      { icon:'🧺', ar:'لنجهّزْ سجّادةَ الصلاةِ في مكانها النظيف.', en:'Let\'s set out our prayer mat in a clean place.' }
    ],
    family:{ ar:'صلّوا جماعةً في البيتِ صلاةَ المغربِ كلَّ يومٍ هذا الأسبوع.', en:'Pray Maghrib together at home in congregation every day this week.' },
    talk:{ ar:'كيف نشعرُ عندما نتركُ ما بأيدينا ونقومُ إلى الصلاة؟', en:'How do we feel when we put things down and go to pray?' } },

  { id:'honouring-parents', icon:'💞',
    title:{ ar:'أسبوعُ برِّ الوالدين', en:'The week of honouring parents' },
    why:{ ar:'قال اللهُ تعالى: ﴿وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾ [الإسراء: ٢٤]',
          en:'Allah says: "And lower to them the wing of humility out of mercy, and say: My Lord, have mercy on them as they raised me when I was small."',
          src:{ ar:'سورة الإسراء، الآية ٢٤', en:'Quran, al-Isra 17:24' } },
    tasks:[
      { icon:'🙋', ar:'هيّا نُجيبُ ماما وبابا بسرعةٍ وبكلامٍ لطيف.', en:'Let\'s answer Mum and Dad quickly and kindly.' },
      { icon:'🧹', ar:'لنساعدْ في عملٍ صغيرٍ في البيتِ دونَ أن يُطلَبَ منّا.', en:'Let\'s help with one small job at home without being asked.' },
      { icon:'🤲', ar:'لندعُ لوالدَينا: «ربِّ ارحمْهما كما ربَّياني صغيرًا».', en:'Let\'s make dua for our parents: "My Lord, have mercy on them as they raised me when I was small."' }
    ],
    family:{ ar:'اتّصلوا معًا بالجدِّ والجدّةِ أو زوروهم، وليُخبرْهم كلُّ واحدٍ بشيءٍ يحبُّه فيهم.', en:'Call or visit the grandparents together, and let each person tell them one thing they love about them.' },
    talk:{ ar:'ما الشيءُ الذي يفعلُه والداك لك كلَّ يومٍ ولا ننتبهُ له؟', en:'What do your parents do for you every day that we often do not notice?' } },

  { id:'sharing-generosity', icon:'🎁',
    title:{ ar:'أسبوعُ المشاركة والكرم', en:'The week of sharing and generosity' },
    why:{ ar:'قال اللهُ تعالى: ﴿لَن تَنَالُوا الْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ ۚ وَمَا تُنفِقُوا مِن شَيْءٍ فَإِنَّ اللَّهَ بِهِ عَلِيمٌ﴾ [آل عمران: ٩٢]',
          en:'Allah says: "You will never attain righteousness until you spend from what you love. And whatever you spend, Allah knows it well."',
          src:{ ar:'سورة آل عمران، الآية ٩٢', en:'Quran, Al Imran 3:92' } },
    tasks:[
      { icon:'🧩', ar:'هيّا نشاركُ ألعابَنا مع إخوتِنا وأصدقائِنا.', en:'Let\'s share our toys with our siblings and friends.' },
      { icon:'🍎', ar:'لنقسمْ وجبتَنا الخفيفةَ مع صديقٍ في المدرسة.', en:'Let\'s share our snack with a friend at school.' },
      { icon:'🪙', ar:'لنضعْ قطعةً نقديّةً في صندوقِ الصدقة.', en:'Let\'s put a coin in the sadaqah box.' }
    ],
    family:{ ar:'اختاروا معًا ملابسَ أو ألعابًا بحالةٍ جيّدةٍ وتبرّعوا بها لمن يحتاجها.', en:'Choose clothes or toys in good condition together and donate them to people who need them.' },
    talk:{ ar:'كيف شعرتَ عندما أعطيتَ شيئًا تحبُّه لغيرك؟', en:'How did it feel to give someone something you love?' } },

  { id:'patience-sabr', icon:'🌱',
    title:{ ar:'أسبوعُ الصبر', en:'The week of patience' },
    why:{ ar:'قال اللهُ تعالى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ﴾ [البقرة: ١٥٣]',
          en:'Allah says: "O you who believe, seek help through patience and prayer. Indeed, Allah is with the patient."',
          src:{ ar:'سورة البقرة، الآية ١٥٣', en:'Quran, al-Baqarah 2:153' } },
    tasks:[
      { icon:'🚶', ar:'هيّا ننتظرُ دورَنا بهدوءٍ في اللعبِ وفي الطابور.', en:'Let\'s wait calmly for our turn in games and in line.' },
      { icon:'😮‍💨', ar:'عندما نغضبُ، لنتنفّسْ بعمقٍ ونقلْ: «أعوذُ باللهِ من الشيطانِ الرجيم».', en:'When we feel angry, let\'s take a deep breath and say: "I seek refuge in Allah from Shaytan."' },
      { icon:'🧱', ar:'لنُكملْ عملًا صعبًا قليلًا حتى النهاية دونَ أن نستسلم.', en:'Let\'s finish one slightly hard task to the end without giving up.' }
    ],
    family:{ ar:'ازرعوا معًا بذرةً واسقوها كلَّ يومٍ، وانتظروا بصبرٍ حتى تنبت.', en:'Plant a seed together, water it every day, and wait patiently for it to grow.' },
    talk:{ ar:'متى صبرتَ هذا الأسبوع، وكيف ساعدكَ ذلك؟', en:'When were you patient this week, and how did it help you?' } },

  { id:'good-words', icon:'💬',
    title:{ ar:'أسبوعُ الكلمة الطيّبة', en:'The week of good words' },
    why:{ ar:'قال النبيُّ ﷺ: «وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ».',
          en:'The Prophet ﷺ said: "And a good word is charity."',
          src:{ ar:'متّفقٌ عليه (البخاريّ ومسلم)', en:'Agreed upon (al-Bukhari and Muslim)' } },
    tasks:[
      { icon:'🌷', ar:'هيّا نقولُ كلمةً جميلةً لشخصٍ مختلفٍ كلَّ يوم.', en:'Let\'s say something kind to a different person every day.' },
      { icon:'🙏', ar:'لنستعملْ «من فضلك» و«شكرًا» و«عفوًا».', en:'Let\'s use "please", "thank you" and "sorry".' },
      { icon:'🚫', ar:'لنبتعدْ عن الكلماتِ التي تُحزنُ الآخرين أو تسخرُ منهم.', en:'Let\'s stay away from words that hurt or make fun of others.' }
    ],
    family:{ ar:'كلُّ واحدٍ يكتبُ كلمةً طيّبةً على ورقةٍ ويُخفيها لفردٍ من العائلةِ ليجدَها.', en:'Each person writes a kind note and hides it for another family member to find.' },
    talk:{ ar:'ما أجملُ كلمةٍ سمعتَها هذا الأسبوع، وكيف شعرتَ بعدَها؟', en:'What is the nicest thing someone said to you this week, and how did it make you feel?' } },

  { id:'mercy-animals', icon:'🐈',
    title:{ ar:'أسبوعُ الرحمة بالحيوان', en:'The week of mercy to animals' },
    why:{ ar:'قال النبيُّ ﷺ: «فِي كُلِّ ذَاتِ كَبِدٍ رَطْبَةٍ أَجْرٌ».',
          en:'The Prophet ﷺ said: "There is a reward for kindness to every living creature."',
          src:{ ar:'رواه البخاريّ (٢٣٦٣)، ونحوه عند مسلم', en:'Sahih al-Bukhari (2363); similar in Muslim' } },
    tasks:[
      { icon:'🥣', ar:'هيّا نضعُ ماءً للطيورِ أو القططِ في الشرفةِ أو الحديقة.', en:'Let\'s put out water for birds or cats on the balcony or in the garden.' },
      { icon:'🐾', ar:'لنتعاملْ مع الحيواناتِ برفقٍ ولا نُخيفْها.', en:'Let\'s be gentle with animals and never scare them.' },
      { icon:'🐜', ar:'لنتركِ النملَ والحشراتِ الصغيرةَ في سلامٍ ولا نؤذِها.', en:'Let\'s leave ants and little insects in peace and not hurt them.' }
    ],
    family:{ ar:'اصنعوا معًا مُغذّيًا بسيطًا للطيور وعلّقوه، وراقبوا مَن يزوره.', en:'Make a simple bird feeder together, hang it up, and watch who visits.' },
    talk:{ ar:'لو كنتَ قطّةً عطشى، ماذا تتمنّى أن يفعلَ الناسُ لك؟', en:'If you were a thirsty kitten, what would you wish people would do for you?' } },

  { id:'keeping-promises', icon:'🤝',
    title:{ ar:'أسبوعُ الوفاء بالوعد', en:'The week of keeping promises' },
    why:{ ar:'قال اللهُ تعالى في وصفِ المؤمنين: ﴿وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ﴾ [المؤمنون: ٨]',
          en:'Allah describes the believers: "And those who are faithful to their trusts and their promises."',
          src:{ ar:'سورة المؤمنون، الآية ٨', en:'Quran, al-Muminun 23:8' } },
    tasks:[
      { icon:'📝', ar:'هيّا نعدُ وعدًا صغيرًا واحدًا ونَفي به.', en:'Let\'s make one small promise and keep it.' },
      { icon:'⏳', ar:'لنرجعْ إلى البيتِ أو نتركِ الشاشةَ في الوقتِ الذي اتّفقنا عليه.', en:'Let\'s come in or switch off the screen at the time we agreed.' },
      { icon:'📚', ar:'لنُعِدْ ما استعرناه من أصدقائِنا في موعده.', en:'Let\'s return what we borrowed from friends on time.' }
    ],
    family:{ ar:'ليَعِدْ كلُّ فردٍ وعدًا للعائلةِ يكتبُه على لوحة، ونفرحْ معًا عندما يَفي به.', en:'Each family member writes one promise on a board, and we celebrate together when it is kept.' },
    talk:{ ar:'كيف نشعرُ عندما يَفي أحدٌ بوعدِه لنا؟', en:'How do we feel when someone keeps a promise to us?' } },

  { id:'seeking-knowledge', icon:'📖',
    title:{ ar:'أسبوعُ طلب العلم', en:'The week of seeking knowledge' },
    why:{ ar:'قال النبيُّ ﷺ: «مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا، سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ».',
          en:'The Prophet ﷺ said: "Whoever takes a path seeking knowledge, Allah will make easy for them a path to Paradise."',
          src:{ ar:'رواه مسلم (٢٦٩٩)', en:'Sahih Muslim (2699)' } },
    tasks:[
      { icon:'❓', ar:'هيّا نسألُ سؤالًا جديدًا كلَّ يومٍ ونبحثُ عن جوابه.', en:'Let\'s ask one new question every day and find its answer.' },
      { icon:'📕', ar:'لنقرأْ قصّةً أو صفحةً من كتابٍ مع ماما أو بابا.', en:'Let\'s read a story or a page of a book with Mum or Dad.' },
      { icon:'🤲', ar:'لندعُ قبلَ المذاكرة: «ربِّ زدني علمًا».', en:'Let\'s make dua before learning: "My Lord, increase me in knowledge."' }
    ],
    family:{ ar:'اذهبوا معًا إلى المكتبةِ أو المسجد، وليتعلّمْ كلُّ واحدٍ شيئًا جديدًا ويُعلّمْه للباقين.', en:'Visit the library or the mosque together; each person learns one new thing and teaches it to the others.' },
    talk:{ ar:'ما أجملُ شيءٍ تعلّمتَه هذا الأسبوع؟', en:'What is the most interesting thing you learned this week?' } },

  { id:'no-waste', icon:'♻️',
    title:{ ar:'أسبوعُ الترتيب وعدم الإسراف', en:'The week of tidiness and no waste' },
    why:{ ar:'قال اللهُ تعالى: ﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ﴾ [الأعراف: ٣١]',
          en:'Allah says: "Eat and drink, but do not waste. Indeed, He does not love those who waste."',
          src:{ ar:'سورة الأعراف، من الآية ٣١', en:'Quran, al-Araf 7:31 (part of the verse)' } },
    tasks:[
      { icon:'🍚', ar:'هيّا نضعُ في صحونِنا ما نستطيعُ أكلَه فقط.', en:'Let\'s put on our plates only what we can eat.' },
      { icon:'🚰', ar:'لنُغلقِ الصنبورَ جيّدًا ونُطفئِ الأنوارَ عندما نخرجُ من الغرفة.', en:'Let\'s turn the tap off properly and switch off the lights when we leave a room.' },
      { icon:'🧸', ar:'لنُعِدْ ألعابَنا وكتبَنا إلى أماكنِها بعدَ اللعب.', en:'Let\'s put our toys and books back in their places after playing.' }
    ],
    family:{ ar:'رتّبوا معًا غرفةً واحدةً في البيت، وأصلحوا شيئًا مكسورًا بدلَ رميه.', en:'Tidy one room together, and fix something broken instead of throwing it away.' },
    talk:{ ar:'ما الأشياءُ التي نستطيعُ أن نوفّرَها في بيتِنا؟', en:'What are some things we can save instead of wasting at home?' } },

  { id:'visiting-sick-elderly', icon:'🌼',
    title:{ ar:'أسبوعُ زيارة المريض والإحسان إلى الكبار', en:'The week of visiting the sick and caring for the elderly' },
    why:{ ar:'قال النبيُّ ﷺ: «حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ خَمْسٌ: رَدُّ السَّلَامِ، وَعِيَادَةُ الْمَرِيضِ، وَاتِّبَاعُ الْجَنَائِزِ، وَإِجَابَةُ الدَّعْوَةِ، وَتَشْمِيتُ الْعَاطِسِ».',
          en:'The Prophet ﷺ said: "The rights of a Muslim upon a Muslim are five: returning the salam, visiting the sick, following the funeral, accepting an invitation, and replying to the one who sneezes."',
          src:{ ar:'رواه البخاريّ (١٢٤٠)، ونحوه عند مسلم', en:'Sahih al-Bukhari (1240); similar in Muslim' } },
    tasks:[
      { icon:'🎨', ar:'هيّا نرسمُ بطاقةَ «سلامتك» لمريضٍ أو لكبيرٍ في العائلة.', en:'Let\'s draw a "get well soon" card for someone who is ill or an elderly relative.' },
      { icon:'🪑', ar:'لنُقدّمْ مقعدَنا أو نحملْ شيئًا عن كبيرِ السِّنّ.', en:'Let\'s offer our seat to an older person or help carry something for them.' },
      { icon:'🤲', ar:'لندعُ للمريض: «اللهمّ اشفِه».', en:'Let\'s make dua for someone who is ill: "O Allah, heal them."' }
    ],
    family:{ ar:'زوروا معًا قريبًا مريضًا أو جارًا كبيرًا في السنّ، أو اتّصلوا به إن لم تستطيعوا الزيارة.', en:'Visit a sick relative or an elderly neighbour together, or call them if a visit is not possible.' },
    talk:{ ar:'كيف نُدخلُ السرورَ على قلبِ شخصٍ مريضٍ أو وحيد؟', en:'How can we bring happiness to someone who is ill or lonely?' } },

  { id:'smile-salam', icon:'😊',
    title:{ ar:'أسبوعُ الابتسامة وإفشاء السلام', en:'The week of smiling and spreading salam' },
    why:{ ar:'قال النبيُّ ﷺ: «أَوَلَا أَدُلُّكُمْ عَلَى شَيْءٍ إِذَا فَعَلْتُمُوهُ تَحَابَبْتُمْ؟ أَفْشُوا السَّلَامَ بَيْنَكُمْ».',
          en:'The Prophet ﷺ said: "Shall I not tell you of something that, if you do it, you will love one another? Spread salam among yourselves."',
          src:{ ar:'رواه مسلم (٥٤)', en:'Sahih Muslim (54)' } },
    tasks:[
      { icon:'👋', ar:'هيّا نبدأُ بـ«السلامُ عليكم» عندما ندخلُ البيتَ أو الصفّ.', en:'Let\'s be the first to say "Assalamu alaikum" when we enter the house or the classroom.' },
      { icon:'😁', ar:'لنبتسمْ في وجهِ كلِّ مَن نلقاه.', en:'Let\'s smile at everyone we meet.' },
      { icon:'💬', ar:'لنردَّ السلامَ كاملًا: «وعليكمُ السلامُ ورحمةُ اللهِ وبركاتُه».', en:'Let\'s reply in full: "Wa alaikum assalam wa rahmatullahi wa barakatuh."' }
    ],
    family:{ ar:'عُدّوا معًا كم مرّةً ألقيتم السلامَ هذا الأسبوع، وحاولوا أن يزيدَ العددُ كلَّ يوم.', en:'Count together how many times you said salam this week, and try to beat it each day.' },
    talk:{ ar:'كيف تغيّرُ الابتسامةُ والسلامُ يومَ الآخرين؟', en:'How can a smile and a salam change someone\'s day?' } },

  { id:'love-quran', icon:'📗',
    title:{ ar:'أسبوعُ حبّ القرآن', en:'The week of loving the Quran' },
    why:{ ar:'قال النبيُّ ﷺ: «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ».',
          en:'The Prophet ﷺ said: "The best of you are those who learn the Quran and teach it."',
          src:{ ar:'رواه البخاريّ (٥٠٢٧)', en:'Sahih al-Bukhari (5027)' } },
    tasks:[
      { icon:'🎧', ar:'هيّا نستمعُ إلى سورةٍ قصيرةٍ كلَّ يوم.', en:'Let\'s listen to a short surah every day.' },
      { icon:'🧠', ar:'لنحفظْ آيةً جديدةً هذا الأسبوعَ مع ماما أو بابا.', en:'Let\'s memorise one new ayah this week with Mum or Dad.' },
      { icon:'🫶', ar:'لنمسكِ المصحفَ باحترامٍ ونضعْه في مكانٍ عالٍ ونظيف.', en:'Let\'s hold the mushaf with respect and keep it in a high, clean place.' }
    ],
    family:{ ar:'اجلسوا معًا عشرَ دقائقَ كلَّ يومٍ لقراءةِ القرآن، وليقرأْ كلُّ واحدٍ ما يحفظُه للباقين.', en:'Sit together for ten minutes each day to read Quran, and let each person recite what they know to the others.' },
    talk:{ ar:'ما السورةُ التي تحبُّها أكثر، ولماذا؟', en:'Which surah do you love the most, and why?' } }
];
