// data/chapters/wasi.js — ركن القلب السليم · حبُّ الله · الأسماء الحسنى
// الواسع (وسِعَ غِناه فقرَ عبادِه، ووسِعَ رزقُه جميعَ خلقِه، ووسِعَت رحمتُه وعلمُه كلَّ شيء)
// Sources: القرآن الكريم · صحيح البخاري ومسلم · لسان العرب · إسلام ويب (معاني الأسماء)
window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
HISN.chapters.wasi = {
  id: 'wasi', era: 'heart', kind: 'name', icon: 'globe',
  name: { ar: 'الواسع', en: 'The All-Encompassing' },
  tag:  { ar: 'رحمتُه وعطاؤه بلا حدود', en: 'His mercy and giving have no limits' },
  accent: '#1F7A9E', accent2: '#52A8C9',
  rooms: ['knowledge', 'story', 'memorize', 'activities', 'treasures'],
  greeting: {
    ar: 'مرحباً يا صغيري! 🌍 انظُرْ إلى <b>السماءِ الواسعة</b> والبحرِ الكبير… هل تعلمُ أنّ رحمةَ اللهِ وعطاءَه <b>أوسعُ من ذلك كلِّه</b>؟ إنّه «الواسع». تعالَ نتعرّفْ عليه ونُحبَّه.',
    en: 'Welcome, little one! 🌍 Look at the <b>wide sky</b> and the great sea… Did you know that Allah’s mercy and giving are <b>vaster than all of that</b>? He is "Al-Wasi‘". Come, let’s know Him and love Him.',
  },
  knowledge: {
    didYouKnow: {
      ar: 'في الحديثِ القدسيّ: لو اجتمعَ كلُّ الناسِ وسألوا اللهَ ما يُريدون، فأعطى كلَّ واحدٍ سؤالَه، <b>ما نقصَ ذلك ممّا عنده إلا كما يَنقُصُ المِخيَطُ إذا أُدخِلَ البحر</b> (رواه مسلم)! لأنّه «الواسع». وقال تعالى: <b>﴿وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ﴾</b>.',
      en: 'In a hadith qudsi: if all people gathered and asked Allah for what they want, and He gave each one their request, <b>it would lessen what He has no more than a needle lessens the sea when dipped in it</b> (Muslim) — because He is "Al-Wasi‘". And He said: <b>"My mercy encompasses all things."</b>',
    },
    who: {
      ar: '«الواسعُ» هو الغنيُّ الذي <b>وسِعَ غِناه فقرَ عبادِه</b>، ووسِعَ رزقُه <b>جميعَ خلقِه</b>، ووسِعَت رحمتُه كلَّ شيء، وأحاطَ بكلِّ شيءٍ علماً. عطاؤه لا يَنفَد، ومغفرتُه أوسعُ من ذنوبِ العباد، ومُلكُه واسعٌ عظيم. فمن عرفَه <b>لم ييأسْ من رحمتِه</b>، ولم يَبخلْ على الناس، وكان صدرُه واسعاً رحيماً.',
      en: '"Al-Wasi‘" is the Rich One whose <b>wealth covers the need of all His servants</b>, whose provision reaches <b>all His creation</b>, whose mercy encompasses everything, and whose knowledge surrounds all things. His giving never runs out, His forgiveness is wider than the sins of His servants, and His dominion is vast and great. Whoever knows Him <b>never despairs of His mercy</b>, is not stingy with people, and has a wide, kind heart.',
    },
    facts: [
      { ar: 'اسمُ «الواسع» جاءَ في القرآن: ﴿إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ﴾.', en: 'The name "Al-Wasi‘" is in the Qur’an: "Indeed, Allah is All-Encompassing, All-Knowing."' },
      { ar: 'رحمةُ اللهِ وسِعَت كلَّ شيء.', en: 'Allah’s mercy encompasses all things.' },
      { ar: 'عطاءُ اللهِ لا يَنقُصُ ولا يَنفَدُ أبداً.', en: 'Allah’s giving never decreases and never runs out.' },
      { ar: 'مغفرتُه أوسعُ من كلِّ ذنب، فلا ييأسُ التائب.', en: 'His forgiveness is wider than every sin, so the one who repents never despairs.' },
      { ar: 'مَن عرفَ الواسعَ وسّعَ صدرَه ومجلسَه للناس.', en: 'Whoever knows Al-Wasi‘ widens his heart and his gathering for people.' },
    ],
    ayah: { ar: '﴿ إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ ﴾', ref: { ar: 'البقرة ١١٥', en: 'Al-Baqarah 115' } },
  },
  storyIntro: {
    ar: 'تعالَ نُسافرْ في سَعةِ «الواسع» 🌍 — من حبّةِ قمحٍ صغيرة، إلى السماءِ الكبيرة، إلى قلبِك!',
    en: 'Come, let’s travel through the vastness of "Al-Wasi‘" 🌍 — from a tiny grain of wheat, to the great sky, to your heart!',
  },
  story: [
    { scene: 'grain', tag: { ar: 'في القرآن الكريم', en: 'In the Qur’an' },
      title: { ar: 'الحبّةُ التي صارت سبعمائة', en: 'The grain that became seven hundred' },
      text: { ar: 'ضربَ اللهُ لنا مثلاً جميلاً: مَن تصدّقَ في سبيلِ الله، كان كمَن زرعَ <b>حبّةً واحدة</b>، فأنبتَت <b>سبعَ سنابل</b>، في كلِّ سُنبلةٍ مائةُ حبّة! ثم قال: <b>﴿وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ﴾</b>. عطاءُ الواسعِ يُضاعِفُ الخيرَ الصغيرَ أضعافاً كثيرة.', en: 'Allah gave us a beautiful example: whoever gives charity for His sake is like one who plants <b>a single grain</b> that grows <b>seven ears</b>, each with a hundred grains! Then He said: <b>"And Allah multiplies for whom He wills, and Allah is All-Encompassing, All-Knowing."</b> Al-Wasi‘’s giving multiplies a small good many times over.' } },
    { scene: 'cosmos', tag: { ar: 'في الكون', en: 'In the universe' },
      title: { ar: 'السماءُ التي تتّسع', en: 'The sky that keeps widening' },
      text: { ar: 'في ليلةٍ صافية نظرَ أحمدُ إلى النجومِ التي لا تُعَدّ. قال له أبوه: هذه السماءُ بناها اللهُ <b>واسعةً عظيمة</b>، وقد قال تعالى: <b>﴿وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ﴾</b>. فإذا كانت السماءُ بهذه السَّعة، فكيف <b>بسَعةِ رحمةِ خالقِها</b>؟', en: 'On a clear night, Ahmad looked at the countless stars. His father said: Allah built this sky <b>vast and mighty</b>, and He said: <b>"And the heaven We built with strength, and indeed, We are expanding it."</b> If the sky is this vast, then how vast is <b>the mercy of its Creator</b>?' } },
    { scene: 'night', tag: { ar: 'في حياتنا', en: 'In our life' },
      title: { ar: 'رحمةٌ أوسعُ من خطئي', en: 'A mercy wider than my mistake' },
      text: { ar: 'كذبَ خالدٌ على أمِّه، ثم حزنَ في الليلِ وظنَّ أنّ اللهَ لن يُسامحَه. فقالت له أمُّه بحنان: يا بُنيّ، <b>رحمةُ اللهِ واسعة</b>، أوسعُ من كلِّ خطأ. فاعتذرَ خالدٌ لأمِّه، واستغفرَ ربَّه، ووعدَ ألّا يكذبَ ثانية. فنامَ وقلبُه <b>مطمئنٌّ مسرور</b>.', en: 'Khalid lied to his mother, then felt sad at night and thought Allah would not forgive him. His mother said gently: my son, <b>Allah’s mercy is vast</b>, wider than every mistake. So Khalid apologized to his mother, sought his Lord’s forgiveness, and promised not to lie again. He slept with a <b>calm, happy heart</b>.' } },
    { scene: 'mosque', tag: { ar: 'خُلُقُ السَّعة', en: 'The manner of wideness' },
      title: { ar: 'تَفسَّحوا في الحَلْقة', en: 'Make room in the circle' },
      text: { ar: 'في حَلْقةِ القرآن جاءَ ولدٌ جديدٌ متأخّراً ولم يَجِدْ مكاناً. فتذكّرَ عليٌّ قولَه تعالى: <b>﴿إِذَا قِيلَ لَكُمْ تَفَسَّحُوا فِي الْمَجَالِسِ فَافْسَحُوا يَفْسَحِ اللَّهُ لَكُمْ﴾</b>، فتحرّكَ قليلاً وقال: تعالَ هنا! فرحَ الولدُ الجديد، وصارا صديقَين. مَن وسّعَ على الناسِ <b>وسّعَ اللهُ عليه</b>.', en: 'In the Qur’an circle, a new boy came late and found no space. Ali remembered Allah’s words: <b>"When you are told to make room in gatherings, make room — Allah will make room for you,"</b> so he moved a little and said: come here! The new boy was happy, and they became friends. Whoever makes room for people, <b>Allah makes room for him</b>.' } },
  ],
  storyChoice: {
    q: { ar: 'أخطأتَ خطأً كبيراً وشعرتَ بالحزن، بماذا تُفكّر؟', en: 'You made a big mistake and feel sad. What do you think?' },
    opts: [
      { t: { ar: 'أتوبُ وأستغفرُ، فرحمةُ الواسعِ أوسعُ من خطئي', en: 'I repent and seek forgiveness — Al-Wasi‘’s mercy is wider than my mistake' }, c: true,
        exp: { ar: 'أحسنت! رحمةُ اللهِ وسِعَت كلَّ شيء، فلا تيأسْ أبداً.', en: 'Well done! Allah’s mercy encompasses all things — never despair.' } },
      { t: { ar: 'اللهُ لن يُسامحَني أبداً', en: 'Allah will never forgive me' }, c: false,
        exp: { ar: 'لا، هذا يأسٌ لا يُحبُّه الله. مغفرتُه واسعةٌ لمن تاب.', en: 'No — that is despair, which Allah doesn’t love. His forgiveness is vast for whoever repents.' } },
      { t: { ar: 'أُخفي الخطأَ وأُكرِّرُه', en: 'I hide the mistake and repeat it' }, c: false,
        exp: { ar: 'لا، بل نتوبُ ونُصلِحُ ونعزمُ ألّا نعود.', en: 'No — we repent, make it right, and resolve not to return to it.' } },
    ],
  },
  memorize: {
    ayah: { ar: '﴿ وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ ﴾', ref: { ar: 'الأعراف ١٥٦', en: 'Al-A‘raf 156' } },
    dua:  { ar: 'اللّهُمَّ يا واسعَ الرحمةِ اغفِرْ لي، ووسِّعْ لي في رزقي وعلمي وقلبي', ref: { ar: 'من الدعاء', en: 'A supplication' } },
    pledge: {
      title: { ar: 'عهدُ القلبِ الواسع', en: 'The Wide Heart Pledge' },
      lines: [
        { ar: 'لا أيأسُ من رحمةِ الله، وأستغفرُه إذا أخطأت.', en: 'I never despair of Allah’s mercy, and I seek His forgiveness when I err.' },
        { ar: 'أُفسِحُ المكانَ لغيري في الصفِّ والحَلْقةِ واللعب.', en: 'I make room for others in line, in the circle and in play.' },
        { ar: 'أتصدّقُ ولو بشيءٍ صغير، فالواسعُ يُضاعِفُه.', en: 'I give charity, even something small — Al-Wasi‘ multiplies it.' },
        { ar: 'أُسامحُ مَن أخطأَ في حقّي، ليكونَ صدري واسعاً.', en: 'I forgive whoever wronged me, so my heart becomes wide.' },
      ],
    },
  },
  activities: [
    { type: 'quiz', title: { ar: 'اختبارٌ سريع', en: 'Quick Quiz' },
      questions: [
        { q: { ar: 'ماذا يعني «الواسع»؟', en: 'What does "Al-Wasi‘" mean?' },
          options: [ { ar: 'عطاؤه قليلٌ يَنفَد', en: 'His giving is small and runs out' }, { ar: 'لا شيء', en: 'Nothing' }, { ar: 'وسِعَت رحمتُه ورزقُه وعلمُه كلَّ شيء', en: 'His mercy, provision and knowledge encompass all things' } ], answer: 2 },
        { q: { ar: 'كم سُنبلةً أنبتَت الحبّةُ في المثلِ القرآني؟', en: 'How many ears did the grain grow in the Qur’anic example?' },
          options: [ { ar: 'سبعَ سنابل', en: 'Seven ears' }, { ar: 'سُنبلةً واحدة', en: 'One ear' }, { ar: 'لم تُنبِتْ شيئاً', en: 'It grew nothing' } ], answer: 0 },
        { q: { ar: 'ماذا نفعلُ إذا جاءَ صديقٌ ولم يَجِدْ مكاناً؟', en: 'What do we do if a friend comes and finds no space?' },
          options: [ { ar: 'نتجاهلُه', en: 'We ignore him' }, { ar: 'نُفسِحُ له المكان', en: 'We make room for him' }, { ar: 'نطلبُ منه أن يذهب', en: 'We ask him to leave' } ], answer: 1 },
      ] },
    { type: 'match', title: { ar: 'وصِّلْ ليُكتملَ المعنى', en: 'Match to complete the meaning' },
      pairs: [
        { a: { ar: 'حبّةُ القمح', en: 'The grain of wheat' }, b: { ar: 'سبعُ سنابلَ في كلٍّ منها مائة', en: 'Seven ears, each with a hundred' } },
        { a: { ar: 'السماء', en: 'The sky' }, b: { ar: 'بناها اللهُ واسعةً عظيمة', en: 'Allah built it vast and mighty' } },
        { a: { ar: 'التائبُ من الذنب', en: 'One who repents' }, b: { ar: 'يَجِدُ رحمةً واسعة', en: 'Finds a vast mercy' } },
        { a: { ar: 'مَن يُفسِحُ للناس', en: 'Whoever makes room for people' }, b: { ar: 'يُفسِحُ اللهُ له', en: 'Allah makes room for him' } },
      ] },
    { type: 'trueFalse', title: { ar: 'صح أم خطأ؟', en: 'True or False?' },
      items: [
        { statement: { ar: 'رحمةُ اللهِ وسِعَت كلَّ شيء.', en: 'Allah’s mercy encompasses all things.' }, t: true },
        { statement: { ar: 'إذا أعطى اللهُ الناسَ كثيراً نقصَ مُلكُه.', en: 'If Allah gives people a lot, His dominion decreases.' }, t: false },
        { statement: { ar: 'الصدقةُ الصغيرةُ يُضاعِفُها الواسعُ أضعافاً.', en: 'Al-Wasi‘ multiplies a small charity many times.' }, t: true },
        { statement: { ar: 'مَن أذنبَ لا يُقبَلُ منه استغفار.', en: 'Whoever sins cannot have his repentance accepted.' }, t: false },
      ] },
  ],
  treasures: {
    medal: { ar: 'وِسامُ السَّعة', en: 'Medal of Vastness' },
    recipe: {
      title: { ar: 'الخلطةُ السحرية', en: 'The Magic Mix' },
      intro: { ar: 'لِتعيشَ اسمَ «الواسع» اخلِطْ هذه في يومِك ✨', en: 'To live the name "Al-Wasi‘", mix these into your day ✨' },
      steps: [
        { icon: '🤲', ar: 'أستغفرُ اللهَ وأثقُ أنّ رحمتَه أوسعُ من أخطائي.', en: 'I seek Allah’s forgiveness, trusting His mercy is wider than my mistakes.' },
        { icon: '🪙', ar: 'أتصدّقُ بشيءٍ صغيرٍ اليوم، والواسعُ يُضاعِفُه.', en: 'I give a small charity today, and Al-Wasi‘ multiplies it.' },
        { icon: '🪑', ar: 'أُفسِحُ لغيري مكاناً بجانبي بابتسامة.', en: 'I make room for someone beside me with a smile.' },
        { icon: '💙', ar: 'أُسامحُ صديقاً أخطأَ في حقّي.', en: 'I forgive a friend who wronged me.' },
      ],
      result: { ar: 'قلبٌ واسعٌ كريم، لا ييأسُ من رحمةِ الله، ويَتّسِعُ للناسِ جميعاً! 🌍', en: 'A wide, generous heart that never despairs of Allah’s mercy and has room for everyone! 🌍' },
    },
    stickers: [
      { icon: 'globe', color: '#1F7A9E', title: { ar: 'رحمةٌ وسِعَت كلَّ شيء', en: 'Mercy Over All Things' } },
      { icon: 'star',  color: '#3790B3', title: { ar: 'سماءٌ واسعة', en: 'A Vast Sky' } },
      { icon: 'leaf',  color: '#196683', title: { ar: 'سبعُ سنابل', en: 'Seven Ears' } },
      { icon: 'heart', color: '#14546C', title: { ar: 'صدرٌ واسع', en: 'A Wide Heart' } },
    ],
    moral: { ar: 'عرفنا أنّ اللهَ «الواسعَ» وسِعَ غِناه فقرَ عبادِه، ووسِعَ رزقُه خلقَه، ووسِعَت رحمتُه وعلمُه كلَّ شيء، فمن أحبَّه لم ييأسْ من رحمتِه، وتصدّقَ، ووسّعَ صدرَه ومجلسَه للناس.', en: 'We learned that Allah "Al-Wasi‘" — His wealth covers His servants’ need, His provision reaches His creation, and His mercy and knowledge encompass everything — whoever loves Him never despairs of His mercy, gives charity, and widens his heart and his gathering for people.' },
    reflect: [
      { ar: 'متى شعرتَ أنّ رحمةَ اللهِ أوسعُ من خطئِك؟', en: 'When did you feel Allah’s mercy was wider than your mistake?' },
      { ar: 'مَن تستطيعُ أن تُفسِحَ له مكاناً أو تُسامحَه اليوم؟', en: 'Whom can you make room for, or forgive, today?' },
    ],
  },
};
