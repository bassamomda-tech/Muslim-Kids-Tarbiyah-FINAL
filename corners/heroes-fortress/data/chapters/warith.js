// data/chapters/warith.js — ركن القلب السليم · حبُّ الله · الأسماء الحسنى
// الوارث (الباقي بعدَ فناءِ الخلق، يَرِثُ الأرضَ ومَن عليها، وهو خيرُ الوارثين)
// Sources: القرآن الكريم · صحيح البخاري ومسلم · سنن الترمذي · إسلام ويب (معاني الأسماء)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.warith = {
  id: 'warith', era: 'heart', kind: 'name', icon: 'crescent',
  name: { ar: 'الوارث', en: 'The Inheritor' },
  tag:  { ar: 'يَبقى بعدَ كلِّ شيء', en: 'He remains after everything' },
  accent: '#5B4B8A', accent2: '#8676B8',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  greeting: {
    ar: 'مرحباً يا صغيري! 🌙 الألعابُ تَنكسِر، والأوراقُ تَتساقط، والدنيا كلُّها تَنتهي… لكنّ هناك مَن <b>يَبقى ولا يَزول</b>! إنّه «الوارث». تعالَ نتعرّفْ عليه ونُحبَّه.',
    en: 'Welcome, little one! 🌙 Toys break, leaves fall, and the whole world will end… but there is One who <b>remains and never fades</b>! He is "Al-Warith". Come, let’s know Him and love Him.',
  },
  knowledge: {
    didYouKnow: {
      ar: 'كلُّ ما نَملِكُه هو في الحقيقةِ <b>مِلكٌ لله</b>، أعطانا إيّاه مدّةً قصيرة، ثم يعودُ إليه! قال تعالى: <b>﴿إِنَّا نَحْنُ نَرِثُ الْأَرْضَ وَمَنْ عَلَيْهَا وَإِلَيْنَا يُرْجَعُونَ﴾</b>.',
      en: 'Everything we own truly <b>belongs to Allah</b>; He lent it to us for a short while, and then it returns to Him! He said: <b>"Indeed, it is We who will inherit the earth and whoever is on it, and to Us they will be returned."</b>',
    },
    who: {
      ar: '«الوارثُ» هو <b>الباقي الدائم</b> بعدَ فناءِ جميعِ الخلق. كلُّ مَن على الأرضِ يَفنى، ويَبقى اللهُ <b>الحيُّ الذي لا يموت</b>، فيَرِثُ الأرضَ ومَن عليها، ويَرجِعُ إليه كلُّ مُلك. وهو <b>خيرُ الوارثين</b>. فمن عرفَه لم يَتعلّقْ قلبُه بالدنيا الفانية، بل قدّمَ <b>ما يَبقى</b>: الصدقةَ والعلمَ النافعَ والعملَ الصالح.',
      en: '"Al-Warith" is <b>the Everlasting One who remains</b> after all creation passes away. Everyone on earth will perish, and Allah, <b>the Ever-Living who never dies</b>, remains — He inherits the earth and whoever is on it, and all ownership returns to Him. He is <b>the Best of inheritors</b>. Whoever knows Him doesn’t tie his heart to the passing world, but sends ahead <b>what lasts</b>: charity, beneficial knowledge and good deeds.',
    },
    facts: [
      { ar: 'اسمُ «الوارث» جاءَ في القرآن: ﴿وَنَحْنُ الْوَارِثُونَ﴾.', en: 'The name "Al-Warith" is in the Qur’an: "And We are the Inheritors."' },
      { ar: 'كلُّ مَن على الأرضِ يَفنى، ويَبقى وجهُ ربِّنا ذي الجلالِ والإكرام.', en: 'All on earth will perish, and the Face of our Lord, Owner of Majesty and Honor, remains.' },
      { ar: 'كلُّ ما نَملِكُه أمانةٌ مؤقّتةٌ من الله.', en: 'Everything we own is a temporary trust from Allah.' },
      { ar: 'ما تَصدّقتَ به يَبقى لك، وما بخلتَ به يَذهب.', en: 'What you give in charity stays for you; what you hold back goes away.' },
      { ar: 'دعا زكريّا ربَّه: ﴿وَأَنْتَ خَيْرُ الْوَارِثِينَ﴾ فاستجابَ له.', en: 'Zakariyya prayed: "And You are the best of inheritors" — and He answered him.' },
    ],
    ayah: { ar: '﴿ وَإِنَّا لَنَحْنُ نُحْيِي وَنُمِيتُ وَنَحْنُ الْوَارِثُونَ ﴾', ref: { ar: 'الحجر ٢٣', en: 'Al-Hijr 23' } },
  },
  storyIntro: {
    ar: 'تعالَ نتعلّمْ من «الوارث» 🌙 ما الذي يَبقى حقّاً وما الذي يَزول!',
    en: 'Come, let’s learn from "Al-Warith" 🌙 what truly lasts and what fades away!',
  },
  story: [
    { scene: 'mihrab', tag: { ar: 'في القرآن الكريم', en: 'In the Qur’an' },
      title: { ar: 'دعاءُ زكريّا في المحراب', en: 'Zakariyya’s du‘a in the niche' },
      text: { ar: 'كبِرَ زكريّا عليه السلام وضعُفَ عظمُه، ولم يكن له ولد. فوقفَ في <b>المحراب</b> يدعو بقلبٍ خاشع: <b>﴿رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ﴾</b>. فاستجابَ اللهُ له، ووهبَ له <b>يحيى</b> نبيّاً صالحاً! مَن دعا الوارثَ لم يَخِبْ أبداً.', en: 'Zakariyya (peace be upon him) grew old and weak, and had no child. He stood in the <b>prayer niche</b> praying with a humble heart: <b>"My Lord, do not leave me alone, and You are the best of inheritors."</b> Allah answered him and gave him <b>Yahya</b>, a righteous prophet! Whoever calls on Al-Warith is never disappointed.' } },
    { scene: 'garden', tag: { ar: 'من الصحابة', en: 'From the companions' },
      title: { ar: 'بستانُ أبي طلحة', en: 'Abu Talha’s orchard' },
      text: { ar: 'كان لأبي طلحةَ رضي الله عنه بستانٌ جميلٌ اسمُه <b>«بَيْرُحاء»</b>، وكان أحبَّ أموالِه إليه. فلمّا نزلَ قولُه تعالى: <b>﴿لَنْ تَنَالُوا الْبِرَّ حَتَّىٰ تُنْفِقُوا مِمَّا تُحِبُّونَ﴾</b>، جاءَ إلى النبيِّ ﷺ وجعلَه <b>صدقةً لله</b>. ففرحَ النبيُّ ﷺ وقال: «ذلك مالٌ رابح» (متفق عليه). عرفَ أنّ الدنيا يَرِثُها الله، فقدّمَ ما يَبقى.', en: 'Abu Talha (may Allah be pleased with him) had a beautiful orchard called <b>"Bayruha’"</b>, the dearest of his wealth to him. When Allah revealed: <b>"You will never attain righteousness until you spend from what you love,"</b> he came to the Prophet ﷺ and made it <b>charity for Allah</b>. The Prophet ﷺ was pleased and said: "That is profitable wealth" (Bukhari & Muslim). He knew Allah inherits the world, so he sent ahead what lasts.' } },
    { scene: 'tree', tag: { ar: 'في حياتنا', en: 'In our life' },
      title: { ar: 'شجرةُ الجدّ', en: 'Grandpa’s tree' },
      text: { ar: 'جلسَ حمزةُ تحتَ شجرةِ زيتونٍ كبيرةٍ في بيتِ جدِّه. قال جدُّه: زرعَها <b>أبي</b> قبلَ سنينَ طويلة، ثم رحلَ عن الدنيا، وما زلنا نأكلُ منها ونتصدّقُ بزيتِها. كلُّنا نرحلُ ويَبقى <b>الوارثُ</b> سبحانه، فازرعْ يا بُنيّ خيراً يَبقى أجرُه لك. فزرعَ حمزةُ بذرةً في ذلك اليوم.', en: 'Hamza sat under a big olive tree at his grandfather’s house. Grandpa said: <b>my father</b> planted it many years ago, then left this world, and we still eat from it and give its oil in charity. We all depart, and <b>Al-Warith</b>, glory be to Him, remains — so plant good, my son, whose reward stays for you. That day, Hamza planted a seed.' } },
    { scene: 'basket', tag: { ar: 'ما الذي يَبقى؟', en: 'What really lasts?' },
      title: { ar: 'سلّةُ الألعاب', en: 'The basket of toys' },
      text: { ar: 'كان عند رُقيّةَ ألعابٌ كثيرة لا تلعبُ بها. فحكى لها أبوها قولَ النبيِّ ﷺ: إنّما لكَ من مالِك <b>ما أكلتَ فأفنَيت، أو لبستَ فأبلَيت، أو تصدّقتَ فأمضَيت</b> (رواه مسلم). ففكّرَت رُقيّة، وملأت <b>سلّةً</b> بألعابِها الجيّدة وأعطتها لأطفالٍ محتاجين. قالت: الآن صارت ألعابي <b>باقيةً</b> لي عند الله!', en: 'Ruqayya had many toys she never played with. Her father told her the Prophet’s ﷺ words: what is truly yours of your wealth is <b>what you ate and used up, wore and wore out, or gave in charity and sent ahead</b> (Muslim). Ruqayya thought, filled a <b>basket</b> with her good toys and gave them to children in need. She said: now my toys are <b>kept</b> for me with Allah!' } },
  ],
  storyChoice: {
    q: { ar: 'عندك شيءٌ تُحبُّه وصديقُك يحتاجُ مثلَه، ماذا تَفعل؟', en: 'You have something you love and your friend needs one like it. What do you do?' },
    opts: [
      { t: { ar: 'أُخبِّئُه، فهو مِلكي للأبد', en: 'I hide it — it’s mine forever' }, c: false,
        exp: { ar: 'لا، فلا شيءَ يَبقى معنا للأبد، والوارثُ هو اللهُ وحدَه.', en: 'No — nothing stays with us forever; Allah alone is Al-Warith.' } },
      { t: { ar: 'أُعطيه أو أُشارِكُه فيه، ليَبقى أجرُه لي عند الله', en: 'I give or share it, so its reward stays for me with Allah' }, c: true,
        exp: { ar: 'أحسنت! هكذا فعلَ أبو طلحة: قدّمَ ما يُحبُّ فبقيَ له.', en: 'Well done! That’s what Abu Talha did: he gave what he loved, so it stayed for him.' } },
      { t: { ar: 'أتباهى به أمامَه', en: 'I show it off in front of him' }, c: false,
        exp: { ar: 'لا، التباهي بما يَفنى لا يُرضي الله.', en: 'No — boasting about what fades doesn’t please Allah.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ ﴾', ref: { ar: 'الأنبياء ٨٩', en: 'Al-Anbiya 89' } },
    dua:  { ar: 'اللّهُمَّ متِّعْنا بأسماعِنا وأبصارِنا وقوّتِنا ما أحيَيتَنا، واجعلْه الوارثَ منّا', ref: { ar: 'رواه الترمذي وحسّنه الألباني', en: 'Tirmidhi (graded hasan by al-Albani)' } },
    pledge: {
      title: { ar: 'عهدُ ما يَبقى', en: 'The Lasting Pledge' },
      lines: [
        { ar: 'أتصدّقُ اليومَ بشيءٍ أُحبُّه ولو كان صغيراً.', en: 'Today I give in charity something I love, even if small.' },
        { ar: 'لا أحزنُ كثيراً إذا انكسرَت لعبتي، فكلُّ شيءٍ لله.', en: 'I don’t grieve too much if my toy breaks — everything belongs to Allah.' },
        { ar: 'أُعلِّمُ غيري شيئاً نافعاً يَبقى أجرُه لي.', en: 'I teach someone something useful whose reward stays for me.' },
        { ar: 'أعتني بأغراضي لأنّها أمانةٌ من الله.', en: 'I take care of my things because they are a trust from Allah.' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'ماذا يعني «الوارث»؟', en: 'What does "Al-Warith" mean?' },
          options: [ { ar: 'لا شيء', en: 'Nothing' }, { ar: 'الذي يَفنى مثلَ الخلق', en: 'The One who perishes like creation' }, { ar: 'الباقي بعدَ فناءِ الخلق، يَرِثُ الأرضَ ومَن عليها', en: 'The One who remains after creation passes, inheriting the earth and all on it' } ], answer: 2 },
        { q: { ar: 'بماذا دعا زكريّا ربَّه؟', en: 'With what did Zakariyya call his Lord?' },
          options: [ { ar: 'ربِّ لا تَذَرْني فرداً وأنت خيرُ الوارثين', en: 'My Lord, do not leave me alone, and You are the best of inheritors' }, { ar: 'لم يَدْعُ', en: 'He didn’t pray' }, { ar: 'طلبَ مالاً كثيراً', en: 'He asked for much money' } ], answer: 0 },
        { q: { ar: 'ماذا فعلَ أبو طلحةَ ببستانِه «بَيْرُحاء»؟', en: 'What did Abu Talha do with his orchard "Bayruha’"?' },
          options: [ { ar: 'باعَه ليشتريَ ألعاباً', en: 'Sold it to buy toys' }, { ar: 'جعلَه صدقةً لله', en: 'Made it charity for Allah' }, { ar: 'أغلقَه عن الناس', en: 'Closed it off from people' } ], answer: 1 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ ليُكتملَ المعنى', en: 'Match to complete the meaning' },
      pairs: [
        { a: { ar: 'زكريّا', en: 'Zakariyya' }, b: { ar: 'وهبَ اللهُ له يحيى', en: 'Allah gave him Yahya' } },
        { a: { ar: 'أبو طلحة', en: 'Abu Talha' }, b: { ar: 'تصدّقَ بأحبِّ مالِه', en: 'Gave his dearest wealth in charity' } },
        { a: { ar: 'شجرةُ الجدّ', en: 'Grandpa’s tree' }, b: { ar: 'خيرٌ يَبقى بعدَ صاحبِه', en: 'Good that lasts after its owner' } },
        { a: { ar: 'الوارث', en: 'Al-Warith' }, b: { ar: 'يَبقى بعدَ كلِّ شيء', en: 'Remains after everything' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'كلُّ مَن على الأرضِ يَفنى ويَبقى اللهُ وحدَه.', en: 'Everyone on earth perishes and Allah alone remains.' }, t: true },
        { statement: { ar: 'الأشياءُ التي نَملِكُها تَبقى معنا للأبد.', en: 'The things we own stay with us forever.' }, t: false },
        { statement: { ar: 'الصدقةُ يَبقى أجرُها لصاحبِها عند الله.', en: 'The reward of charity stays for its giver with Allah.' }, t: true },
        { statement: { ar: 'مَن دعا اللهَ الوارثَ خابَ دعاؤه.', en: 'Whoever calls on Allah, Al-Warith, is let down.' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ الأثرِ الباقي', en: 'Medal of the Lasting Legacy' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ اسمَ «الوارث» اخلِطْ هذه في يومِك ✨', en: 'To live the name "Al-Warith", mix these into your day ✨' },
      steps: [
        { icon: '🎁', ar: 'أُعطي محتاجاً شيئاً من أغراضي الجيّدة.', en: 'I give someone in need one of my good things.' },
        { icon: '🌱', ar: 'أزرعُ نبتةً أو أسقي شجرةً يَنتفعُ بها الناس.', en: 'I plant a seedling or water a tree that people benefit from.' },
        { icon: '📚', ar: 'أُعلِّمُ أخي أو صديقي آيةً أو دعاءً.', en: 'I teach my sibling or friend a verse or a du‘a.' },
        { icon: '🤲', ar: 'أدعو اللهَ بدعاءِ زكريّا: وأنت خيرُ الوارثين.', en: 'I pray with Zakariyya’s du‘a: and You are the best of inheritors.' },
      ],
      result: { ar: 'قلبٌ لا يتعلّقُ بما يَفنى، يُقدِّمُ الخيرَ الباقيَ لربِّه الوارث! 🌙', en: 'A heart not attached to what fades, sending ahead lasting good to its Lord, Al-Warith! 🌙' },
    },
    stickers: [
      { icon: 'crescent', color: '#5B4B8A', title: { ar: 'الباقي سبحانه', en: 'The Everlasting' } },
      { icon: 'leaf',     color: '#6E5EA0', title: { ar: 'شجرةُ الأجر', en: 'Tree of Reward' } },
      { icon: 'gem',      color: '#4C3E76', title: { ar: 'صدقةٌ باقية', en: 'Lasting Charity' } },
      { icon: 'book',     color: '#3F3363', title: { ar: 'علمٌ يَنفع', en: 'Useful Knowledge' } },
    ],
    moral: { ar: 'عرفنا أنّ اللهَ «الوارثَ» يَبقى بعدَ فناءِ كلِّ شيء، ويَرِثُ الأرضَ ومَن عليها، وهو خيرُ الوارثين، فمن أحبَّه لم يتعلّقْ قلبُه بالدنيا، وقدّمَ ما يَبقى: الصدقةَ والعلمَ والعملَ الصالح.', en: 'We learned that Allah "Al-Warith" remains after everything passes, inherits the earth and all on it, and is the Best of inheritors — whoever loves Him doesn’t attach his heart to the world, and sends ahead what lasts: charity, knowledge and good deeds.' },
    reflect: [
      { ar: 'ما الشيءُ الذي تُحبُّه وتستطيعُ أن تُشارِكَه غيرَك؟', en: 'What thing you love could you share with someone else?' },
      { ar: 'ما العملُ الصالحُ الذي تُحبُّ أن يَبقى أجرُه لك بعدَ سنين؟', en: 'Which good deed would you love to keep rewarding you for years?' },
    ],
  },
};
