/* activity-prompts.js — Nano Banana (Gemini image) prompt bank for the
   Parents' Corner. 90 prompts · 9 corners · all ages · all activity types.
   Each prompt body is written in English (the model's instruction language)
   with the exact Arabic text to render kept inside «guillemets». The shared
   house-style clause (AP_STYLE) is appended automatically on copy so every
   copied prompt is complete and on-brand. Window global: AP. */
(function () {
  'use strict';

  /* House style + safety, appended to every copied prompt */
  var AP_STYLE =
    "Style: warm, friendly modern flat-vector children's illustration with rounded shapes and soft shadows. " +
    "Color palette: deep navy #0A2540, gold #D4A017, royal purple #8E44AD and teal #1A9B7B on a cream #FEF5DC background. " +
    "All human characters are FACELESS (no facial features) and modestly dressed; never depict any prophet, companion, or angel as a person, " +
    "and never draw the Ka'bah with a face. Print-ready and high-resolution, crisp clean line work, generous margins, uncluttered layout. " +
    "Render every Arabic word exactly as written, correctly spelled, fully connected and clearly legible.";

  var CORNERS = [
    { id:'aqeeda',  icon:'🕋', color:'#C0392B', ar:'منارة العقيدة',      en:'Faith Minaret',        sub:{ar:'اليقين · التوحيد · أركان الإيمان', en:'Certainty · Tawheed · Pillars of Iman'} },
    { id:'ibada',   icon:'🌙', color:'#117A8B', ar:'واحة العبادة',       en:'Worship Oasis',        sub:{ar:'الصلاة · الصيام · الأذكار · الحج', en:'Salah · Fasting · Adhkar · Hajj'} },
    { id:'quran',   icon:'📖', color:'#1A9B7B', ar:'بستان القرآن والسنة', en:'Quran & Sunnah Garden', sub:{ar:'السور · القصص · الأربعون النووية', en:'Surahs · Stories · 40 Hadith'} },
    { id:'social',  icon:'🏘️', color:'#D4A017', ar:'حيّنا الصغير',       en:'Our Little District',  sub:{ar:'الأخلاق والآداب', en:'Manners & Etiquette'} },
    { id:'heart',   icon:'💚', color:'#6C3483', ar:'ركن القلب السليم',   en:'Pure Heart Corner',    sub:{ar:'أمراض القلوب وعلاجها', en:'Heart diseases & their cures'} },
    { id:'history', icon:'🏰', color:'#E67E22', ar:'حصن الأبطال',        en:"Heroes' Fortress",     sub:{ar:'الصحابة والأبطال والتاريخ', en:'Companions · Heroes · History'} },
    { id:'sport',   icon:'🏊', color:'#27AE60', ar:'النادي الرياضي',     en:'Sports Club',          sub:{ar:'سنن الفطرة · القوة · الإرادة', en:'Fitrah · Strength · Discipline'} },
    { id:'academy', icon:'🔭', color:'#2980B9', ar:'أكاديمية المبدعين',  en:"Innovators' Academy",  sub:{ar:'العلم · اللغة · العلماء · الإبداع', en:'Knowledge · Language · Scholars'} },
    { id:'quds',    icon:'🕌', color:'#2E8B57', ar:'ركن القدس والأمة',   en:'Al-Quds & Ummah',      sub:{ar:'الأقصى · الأمة الواحدة · التغيير', en:'Al-Aqsa · One Ummah · Change'} },
  ];

  var TYPES = {
    coloring:    { ar:'تلوين وخطوط',        en:'Coloring & line art',   icon:'🖍️' },
    flashcards:  { ar:'بطاقات ومطابقة',     en:'Flashcards & matching', icon:'🃏' },
    board:       { ar:'ألعاب لوحية ونرد',   en:'Board & dice games',    icon:'🎲' },
    poster:      { ar:'ملصقات ولوحات',      en:'Posters & wall charts', icon:'🖼️' },
    tracker:     { ar:'جداول متابعة ومكافآت', en:'Trackers & rewards',  icon:'📅' },
    puzzle:      { ar:'متاهات وألغاز',      en:'Mazes & puzzles',       icon:'🧩' },
    story:       { ar:'قصص ومشاهد مصوّرة',  en:'Story & comic scenes',  icon:'💬' },
    craft:       { ar:'مجسّمات وقصّ ولصق',  en:'Crafts & cut-outs',     icon:'✂️' },
    dua:         { ar:'بطاقات أدعية وأذكار', en:"Du'a & dhikr cards",   icon:'🤲' },
    certificate: { ar:'شهادات وأوسمة',      en:'Certificates & badges', icon:'🏅' },
  };

  var AGES = [
    { id:'3-5',  ar:'٣–٥ سنوات', en:'Ages 3–5' },
    { id:'6-8',  ar:'٦–٨ سنوات', en:'Ages 6–8' },
    { id:'9-12', ar:'٩–١٢ سنة',  en:'Ages 9–12' },
    { id:'13+',  ar:'١٣+ سنة',   en:'Ages 13+' },
  ];

  function P(corner, type, age, titleAr, titleEn, body){
    return { corner:corner, type:type, age:age, titleAr:titleAr, titleEn:titleEn, body:body };
  }

  var PROMPTS = [
    /* ───────────── 1 · منارة العقيدة · Faith Minaret ───────────── */
    P('aqeeda','coloring','3-5','عجائب الخلق','Wonders of Creation',
      "A single A4 portrait coloring sheet titled in large bold Arabic «عجائب الخلق» across the top. Big, bold, thick black outlines for little hands to color: a smiling honeybee on a honeycomb, a tall mountain, a shining sun, a leafy tree, and a single water droplet. Label each object with its Arabic word in a clear rounded font (نحلة، جبل، شمس، شجرة، ماء). Lots of white space, no shading, pure clean outlines."),
    P('aqeeda','flashcards','6-8','أسماء الخالق','Names of the Creator',
      "An A4 portrait sheet of 12 cut-out memory-match cards in a 3×4 grid with dashed scissor borders. Six matching pairs that connect a Name of Allah to one of His creations, each with a small flat icon and Arabic label: «الخالق» with a galaxy, «الرزّاق» with fruit and grain, «المصوّر» with a butterfly, «النور» with a sunrise, «الحيّ» with a sprouting seed, «العليم» with an open book. Card backs share one geometric pattern."),
    P('aqeeda','poster','6-8','أركان الإيمان الستة','The Six Pillars of Iman',
      "An A4 portrait educational wall poster titled «أركان الإيمان الستة». Six numbered rounded panels stacked vertically, each with a flat SYMBOLIC icon and Arabic label: belief in Allah (a radiant star), the angels (a soft glowing orb of light), the books (a stack of scriptures), the messengers (a rolled message scroll), the Last Day (a sunrise over a horizon), divine decree (an open hand holding a pen). Never draw angels or messengers as people."),
    P('aqeeda','board','9-12','سلّم البراهين','Ladder of Proofs',
      "An A4 LANDSCAPE printable board game titled «سلّم البراهين»: a winding path of 30 numbered stepping-stones climbing from the ground up to a glowing minaret of faith at the top. Some stones carry a question mark (reflection questions), some a star (move ahead). Include a small dice key, a START marker «ابدأ» and a finish marker «وصلت لليقين». Decorate the border with stars, planets and natural wonders."),
    P('aqeeda','puzzle','9-12','جنود النور','Soldiers of Light',
      "An A4 portrait maze titled «جنود النور». A faceless child at the entrance must follow the one correct winding path, passing soft glowing orbs of light (representing guardian angels — NEVER drawn as people), to reach a warmly lit home at the center. Scatter small stars around the maze. Include the Arabic instruction line «ساعد الطفل ليصل إلى بيته بأمان» at the bottom."),
    P('aqeeda','story','9-12','كيف عرفت ربّي؟','How I Knew My Lord',
      "An A4 portrait 4-panel comic strip with faceless characters, titled «كيف عرفت ربّي؟». Panel 1: a child gazes up at a vast starry night sky. Panel 2: the child looks through a telescope at planets. Panel 3: the child studies a flower and a butterfly with a magnifying glass. Panel 4: the child sits peacefully bathed in a warm glow, with the caption «كلّ شيء يدلّ على الله». Keep speech bubbles short."),
    P('aqeeda','tracker','6-8','عادات اليقين','Habits of Certainty',
      "An A4 portrait weekly habit tracker titled «عادات اليقين»: 7 day-columns and 5 habit-rows, each row with an icon and Arabic label — say Bismillah «بسم الله», thank Allah «الحمد لله», reflect on a creation «تأمّلت في مخلوق», say the shahada «الشهادة», remember Allah «ذكرت الله». Each cell is an empty star to color in. A glowing minaret decorates the header."),
    P('aqeeda','craft','6-8','مجسّم المنارة','Build the Minaret',
      "An A4 portrait cut-and-fold paper craft template to build a 3D 'Faith Minaret' tower «منارة العقيدة». Show the flat unfolded net with dashed fold lines and light-grey glue tabs, decorated with gold geometric Islamic patterns and a glowing lantern at the top. Include small Arabic step labels «قص» (cut), «اطوِ» (fold), «الصق» (glue)."),
    P('aqeeda','dua','3-5','بطاقات التوحيد','Tawheed Cards',
      "An A4 portrait sheet of 4 large rounded dhikr cards for toddlers with dashed cut lines between them. Each card has one short remembrance in big clear Arabic plus a soft flat illustration: «لا إله إلا الله» with a glowing star, «الله أكبر» with a sunrise, «سبحان الله» with a flower, «الحمد لله» with a fruit tree. Gentle, warm and minimal."),
    P('aqeeda','certificate','13+','بطل الثبات','Hero of Steadfastness',
      "An A4 LANDSCAPE award certificate titled «بطل الثبات» with an ornate gold border and a central medal/shield emblem. Include a blank dashed line for the child's name labeled «الاسم», a line of text «أتمّ رحلة الأبطال في الثبات على الحق», and small lines for date «التاريخ» and signature «التوقيع». Dignified, elegant, with geometric Islamic ornament in the corners."),

    /* ───────────── 2 · واحة العبادة · Worship Oasis ───────────── */
    P('ibada','poster','3-5','خطوات الصلاة','Steps of Salah',
      "An A4 portrait wall chart titled «خطوات الصلاة» showing the prayer positions in order with simple faceless child figures: standing «قيام», bowing «ركوع», prostrating «سجود», and sitting «جلوس». Number each step 1–4 with its Arabic label, on a soft mosque-arch background, friendly flat style."),
    P('ibada','flashcards','6-8','خطوات الوضوء','Wudu Steps',
      "An A4 portrait sheet of 8 cut-out sequencing cards for the steps of wudu with dashed borders. Faceless hands perform each step in order — washing hands, rinsing mouth, rinsing nose, washing face, washing arms, wiping the head, wiping ears, washing feet — each numbered with the Arabic label «الوضوء» and a short caption. Flowing-water motif."),
    P('ibada','tracker','6-8','جدول صلواتي','My Salah Tracker',
      "An A4 portrait weekly salah tracker titled «جدول صلواتي»: 5 columns for «الفجر» «الظهر» «العصر» «المغرب» «العشاء» and 7 day-rows, each cell an empty star to color after the prayer. A friendly mosque with a crescent decorates the top, and a little 'great job' badge sits at the bottom."),
    P('ibada','board','9-12','مدرسة الصيام','Fasting School',
      "An A4 LANDSCAPE Ramadan board game titled «مدرسة الصيام»: a crescent-moon path of 30 numbered day-stones from the first day of Ramadan to a festive Eid finish «عيد مبارك». Each stone holds a tiny good-deed or fasting tip. Mark START «أول رمضان». Decorate the border with hanging lanterns, crescents and stars; include a small dice key."),
    P('ibada','dua','3-5','أذكار الصباح والمساء','Morning & Evening Adhkar',
      "An A4 portrait sheet of 4 large adhkar cards titled «أذكار الصباح والمساء» with a soft protective-shield motif behind each. Two morning cards on a sunrise background and two evening cards on a starry-night background, each with one short dhikr in big clear Arabic. Dashed cut lines, gentle and calming."),
    P('ibada','craft','6-8','بوصلة القبلة','Qiblah Compass Craft',
      "An A4 portrait cut-out craft template for a paper Qiblah compass and a small prayer-mat bookmark, decorated with a mihrab arch and gold geometric patterns. Include Arabic labels «القبلة» and «سجادة الصلاة», a split-pin marker for the compass needle, and dashed cut lines."),
    P('ibada','coloring','6-8','الرحلة الكبرى — الحج','The Grand Journey — Hajj',
      "An A4 portrait coloring page titled «الرحلة الكبرى — الحج»: the white tents of Mina, gentle hills, and faceless pilgrims in plain white ihram walking together; in the far background a simple plain Ka'bah cube (just the black cube with a gold band, NO face and no features). Bold clean outlines, plenty of space to color."),
    P('ibada','puzzle','9-12','كنز العطاء','Treasure of Giving',
      "An A4 portrait maze titled «كنز العطاء». A gold coin at the start must follow the correct path through twisting streets, past little charity icons (bread, a coat, a book), to reach a family in need at the far end. Include the Arabic instruction «أوصِل الصدقة إلى مستحقّها» and a small 'treasure' decoration."),
    P('ibada','story','9-12','خيط النور','Thread of Light',
      "An A4 portrait 4-panel comic with faceless characters titled «خيط النور». Panel 1: a child wakes in a dark room as the alarm glows. Panel 2: the child makes wudu at a basin. Panel 3: the child raises open hands in du'a and a thread of golden light rises toward the sky. Panel 4: the child smiles at a soft sunrise through the window. Short Arabic captions."),
    P('ibada','certificate','9-12','صديق الصلاة','Friend of Salah',
      "An A4 LANDSCAPE certificate titled «صديق الصلاة» with a gold border and a crescent-and-mosque emblem at the top. A blank dashed name line «الاسم», the text «حافظ على صلواته الخمس في أوقاتها», and small lines for «التاريخ» and «التوقيع». Teal-and-gold ornament."),

    /* ───────────── 3 · بستان القرآن والسنة · Quran & Sunnah Garden ───────────── */
    P('quran','coloring','3-5','بستان السور','Garden of Surahs',
      "An A4 portrait coloring page titled «بستان السور»: a cheerful garden where four big flowers each carry the name of a short surah in clear Arabic — «الفاتحة»، «الإخلاص»، «الفلق»، «الناس». Add a smiling sun, butterflies and grass. Thick simple outlines for toddlers, lots of white space."),
    P('quran','flashcards','6-8','مطابقة السور','Match the Surah',
      "An A4 portrait sheet of 12 memory cards (6 pairs) with dashed cut borders, matching a short surah name to a simple symbol of its theme: «الفيل» with an elephant, «الفلق» with a dawn sky, «الكوثر» with a flowing river, «الإخلاص» with a single radiant star, «الناس» with a protective shield, «العصر» with an hourglass. Small flat icons, clear Arabic."),
    P('quran','poster','6-8','آداب القرآن','Etiquette of the Qur’an',
      "An A4 portrait wall chart titled «آداب القرآن» on an open-book backdrop. Five numbered panels, each with a faceless child and an Arabic label: clean hands «الطهارة», sit respectfully «الجلوس بأدب», listen quietly «الإنصات», recite beautifully «الترتيل», act upon it «العمل به». Green-and-gold flat style."),
    P('quran','board','9-12','رحلة قصص القرآن','Journey of Qur’anic Stories',
      "An A4 LANDSCAPE board game titled «رحلة قصص القرآن» winding past Qur'anic-story scenes shown ONLY through settings and objects, never any prophet: the cave and loyal dog of «أصحاب الكهف», the ant of «سورة النمل», the whale of «يونس», the elephant of «سورة الفيل». Add question stops, a dice key and a finish flag."),
    P('quran','story','9-12','أصحاب الكهف','The People of the Cave',
      "An A4 portrait illustrated single-scene storybook poster titled «أصحاب الكهف»: a glowing cave mouth set in a green hillside with a loyal dog resting at the entrance and a soft shaft of light falling inside — absolutely NO human figures. Calm, warm flat style with stars appearing in the dusk sky."),
    P('quran','tracker','6-8','حفظ جزء عمّ','Memorizing Juz Amma',
      "An A4 portrait memorization checklist titled «جدول حفظ جزء عمّ»: a vertical list of the short surahs of Juz Amma, each with an empty star to color when memorized and a small leaf icon. A flowering-garden border frames the page and a progress meter sits at the bottom labeled «تقدّمي»."),
    P('quran','dua','6-8','الأربعون النووية','The Forty Nawawi',
      "An A4 portrait sheet of 6 kid-friendly hadith cards titled «الأربعون النووية», dashed cut lines between them. Each card shows one short, simple hadith meaning in clear Arabic with a tiny flat icon — e.g. «إنما الأعمال بالنيات» with a heart, «من حسن إسلام المرء تركه ما لا يعنيه» with a smile, «لا يؤمن أحدكم حتى يحبّ لأخيه» with two hands."),
    P('quran','craft','6-8','زينة السور','Surah Garden Mobile',
      "An A4 portrait cut-out craft to build a hanging 'surah garden' mobile: several punch-out flower discs, each labeled with a short surah name in Arabic, plus a top strip and hanging threads. Show dashed cut/fold lines and the Arabic instructions «قص» and «علّق». Bright, cheerful flat colors."),
    P('quran','puzzle','9-12','بستان الحروف','Garden of Letters',
      "An A4 portrait maze set in a garden titled «بستان القرآن»: the winding path collects Arabic letters that spell out a short surah name, with a small Arabic word-bank box at the bottom for the answer «الكلمة». Clean printable lines, flowers and vines decorating the edges."),
    P('quran','certificate','9-12','حافظ جزء عمّ','Hafiz of Juz Amma',
      "An A4 LANDSCAPE certificate titled «حافظ جزء عمّ» with an ornate gold-and-green border and an open-Qur'an emblem (leave the pages blank, no text inside). A blank name line «الاسم», the text «أتمّ حفظ جزء عمّ كاملاً», and lines for «التاريخ» and «التوقيع»."),

    /* ───────────── 4 · حيّنا الصغير · Our Little District ───────────── */
    P('social','poster','3-5','الأخلاق الذهبية','Golden Manners',
      "An A4 portrait wall chart titled «الأخلاق الذهبية» with four bright rounded panels, each showing a faceless smiling child and a phrase in big Arabic: say salaam «السلام عليكم», say please «من فضلك», say thank you «شكراً», say sorry «آسف». Warm gold-and-navy flat style."),
    P('social','flashcards','6-8','مطابقة الأخلاق','Manners Match',
      "An A4 portrait sheet of 12 matching cards (6 pairs) with faceless kids and dashed cut borders, each pairing a good manner with its situation: sharing toys, helping a neighbor, lowering one's voice, queuing politely, greeting guests, tidying up. Clear Arabic labels under each scene."),
    P('social','board','9-12','جولة في الحيّ','A Walk Through the District',
      "An A4 LANDSCAPE board game titled «جولة في الحيّ»: a path winding past the friendly houses of the little district — the neighbor's house, the guest house, the market, the small mosque — each stop teaching one manner with a short Arabic tip. Mark START «ابدأ» and a finish badge «أفضل جار». Dice key included."),
    P('social','tracker','6-8','الأعمال الطيبة','Good Deeds Tracker',
      "An A4 portrait weekly kindness tracker titled «جدول الأعمال الطيبة»: rows of good deeds (helped at home «ساعدت في البيت», kind word «كلمة طيبة», shared «شاركت», said salaam «ألقيت السلام») across 7 day-columns with heart-shaped checkboxes. A cheerful neighborhood header."),
    P('social','coloring','6-8','حيّنا الصغير','Our Little District',
      "An A4 portrait coloring page titled «حيّنا الصغير»: a warm little Muslim neighborhood with friendly houses topped by small domes and arches, a little mosque with a minaret, trees, and faceless children greeting one another in the street. Bold clean outlines, generous space to color."),
    P('social','story','9-12','جار كريم','A Generous Neighbor',
      "An A4 portrait 4-panel comic with faceless characters titled «جار كريم»: panel 1 a child sees a neighbor struggling with heavy shopping bags; panel 2 the child offers to help; panel 3 they carry the bags together to the door; panel 4 the neighbor gives a warm du'a and the child beams. Short Arabic captions."),
    P('social','craft','6-8','قرية الأخلاق','Village of Manners',
      "An A4 portrait cut-and-fold paper-village template: three little district houses with fold tabs, each printed with a manner to practice — «أفشِ السلام», «ساعد جارك», «احفظ لسانك». Show dashed cut and fold lines and small Arabic step labels. Bright flat colors."),
    P('social','dua','6-8','أدعية يومي','My Daily Du’as',
      "An A4 portrait sheet of 6 daily-life du'a cards for kids with dashed cut lines, each a faceless flat scene with its short Arabic du'a: entering home «دعاء دخول المنزل», leaving home, before eating, before sleeping, on waking, and when sneezing. Soft, friendly icons."),
    P('social','puzzle','6-8','أعد الغرض لصاحبه','Return the Lost Toy',
      "An A4 portrait maze titled «أعد الغرض لصاحبه» with nice WIDE paths for younger children: a faceless child must guide a lost toy through the neighborhood streets back to the correct house at the end. Include a short Arabic instruction line and small house icons along the way."),
    P('social','certificate','9-12','جار مثالي','Model Neighbor',
      "An A4 LANDSCAPE certificate titled «جار مثالي» with a gold border and a little-houses emblem. A blank name line «الاسم», the text «تحلّى بأحسن الأخلاق مع جيرانه وأهله», and lines for «التاريخ» and «التوقيع». Warm gold-and-navy ornament."),

    /* ───────────── 5 · ركن القلب السليم · Pure Heart Corner ───────────── */
    P('heart','poster','6-8','حديقة القلب','Garden of the Heart',
      "An A4 portrait wall chart titled «حديقة القلب»: a big heart-shaped garden where good traits bloom as bright flowers — «الصدق»، «الشكر»، «الرحمة»، «الصبر» — and bad traits appear as weeds being gently pulled out — «الكذب»، «الحسد»، «الغضب»، «الكبر». Purple-and-gold flat style, clear Arabic labels."),
    P('heart','flashcards','9-12','الداء والدواء','Disease & Cure',
      "An A4 portrait sheet of 12 cards (6 pairs) with dashed cut lines, matching a heart-disease to its cure, each with a small flat icon: «الحسد»→«الشكر», «الغضب»→«الصبر», «الكِبر»→«التواضع», «الكذب»→«الصدق», «البخل»→«الكرم», «القسوة»→«الرحمة». Clean, clear Arabic."),
    P('heart','tracker','6-8','قلب نظيف','A Clean Heart',
      "An A4 portrait daily checklist titled «قلب نظيف» across 7 days: forgive someone «سامحت», be grateful «شكرت», tell the truth «صدقت», control my anger «تحكّمت بغضبي», help others «ساعدت». Each cell is a small heart to color. A glowing-heart header."),
    P('heart','coloring','3-5','قلب سليم','A Sound Heart',
      "An A4 portrait coloring page of one big friendly heart filled with simple pretty patterns and the words «قلب سليم» inside, surrounded by little flowers and stars. Thick simple outlines made for toddlers."),
    P('heart','board','9-12','لمّع قلبك','Polish Your Heart',
      "An A4 LANDSCAPE board game titled «لمّع قلبك»: a path where landing on a good-deed stone earns a 'shine' token and landing on a 'rust' stone (a bad habit) sends you back a few steps. The path ends at a sparkling clean heart «القلب السليم». Add a dice key and a START marker, with sparkle decorations."),
    P('heart','story','9-12','اختر الصبر','Choose Patience',
      "An A4 portrait 4-panel comic with faceless characters titled «اختر الصبر»: panel 1 a child feels angry and the small heart drawn beside them turns grey; panel 2 the child pauses and takes a breath; panel 3 the child raises hands in a short du'a; panel 4 the child smiles and the heart turns bright green. Short Arabic captions."),
    P('heart','craft','6-8','عجلة المشاعر','Feelings Wheel',
      "An A4 portrait cut-out 'feelings wheel' craft: a round spinner attached with a split pin, divided into moods with Arabic labels — calm «هادئ», angry «غاضب», grateful «شاكر», sad «حزين» — plus an outer 'what do I do?' tip ring. Show dashed cut lines and an arrow marker."),
    P('heart','dua','6-8','أدعية القلب','Du’as for the Heart',
      "An A4 portrait sheet of 4 du'a-for-the-heart cards titled «أدعية القلب», each with a soft glowing-heart illustration and one short du'a in big Arabic: «اللهم اهدِ قلبي», «يا مقلّب القلوب ثبّت قلبي على دينك», «اللهم طهّر قلبي», «ربّ اشرح لي صدري». Dashed cut lines."),
    P('heart','puzzle','9-12','اكتشف الفروق','Spot the Difference',
      "An A4 portrait find-the-difference titled «اكتشف الفروق»: two nearly identical scenes of faceless children playing together — one kind version and one with subtle unkind details to find (a child left out, a frown, a dropped toy ignored, litter). Mark that there are 8 differences with a small counter row."),
    P('heart','certificate','9-12','القلب السليم','The Sound Heart',
      "An A4 LANDSCAPE certificate titled «القلب السليم» with a glowing-heart emblem and a gold-and-purple border. A blank name line «الاسم», the text «جاهد نفسه لتطهير قلبه من أمراضه», and lines for «التاريخ» and «التوقيع»."),

    /* ───────────── 6 · حصن الأبطال · Heroes' Fortress ───────────── */
    P('history','poster','9-12','حصن الأبطال','Heroes’ Fortress Timeline',
      "An A4 LANDSCAPE timeline wall chart titled «حصن الأبطال» of great moments in Islamic history, each marked ONLY by an emblem or object on a flowing ribbon timeline — a banner, a scroll, a fortress, a crescent, a lantern — and NEVER any human portrait or figure. Clear Arabic event labels, warm orange-and-gold flat style."),
    P('history','flashcards','9-12','الأبطال وصفاتهم','Heroes & Their Virtues',
      "An A4 portrait sheet of 12 matching cards with dashed cut lines, pairing a famous companion or hero with their known virtue, represented ONLY by an emblem or object — a balanced scale for justice «العدل», a brave horse for courage «الشجاعة», a scroll for knowledge «العلم», a key for the conqueror «الفتح». NEVER a face or human figure. Arabic labels."),
    P('history','board','9-12','دافع عن الحصن','Defend the Fortress',
      "An A4 LANDSCAPE board game titled «دافع عن الحصن»: a path of courage and virtue challenges leading up to a grand fortress gate. The stones show shields, banners and scrolls; question stops test good values with short Arabic prompts. Absolutely no human figures. Include a dice key and START/FINISH markers."),
    P('history','coloring','6-8','الحصن العظيم','The Great Fortress',
      "An A4 portrait coloring page titled «حصن الأبطال»: a majestic Islamic fortress with tall towers, arched gates, fluttering banners and noble horses standing outside — and NO people. Bold clean outlines with geometric details to color, plenty of open space."),
    P('history','craft','6-8','درع وراية','Shield & Banner',
      "An A4 portrait cut-out template for a paper shield and a triangular banner, both decorated with Islamic geometric star patterns. Show dashed cut and fold lines and Arabic labels «درع» and «راية». Bold flat colors, a handle tab on the shield."),
    P('history','story','9-12','مشهد البطولة','A Scene of Heroism',
      "An A4 portrait 4-panel comic telling a heroic episode through SCENERY and OBJECTS only — a desert dawn, a planted banner on a hill, a protected city gate, a celebration with lanterns — with no human faces or figures at all. Short Arabic narration captions beneath each panel."),
    P('history','tracker','6-8','بطل صغير','Little Hero',
      "An A4 portrait weekly tracker titled «بطل صغير» of brave and good deeds: told the truth «قلت الصدق», helped someone «ساعدت», was patient «صبرت», prayed on time «صلّيت في وقتها». Shield-shaped checkboxes across 7 days, with a fortress-and-banner header."),
    P('history','puzzle','9-12','طريق الفضائل','Path of Virtues',
      "An A4 portrait maze winding through a fortress, collecting virtue tokens along the way — courage «شجاعة», justice «عدل», mercy «رحمة», patience «صبر» — on the path to the keep. Include the Arabic instruction «اجمع الفضائل وادخل الحصن». No human figures."),
    P('history','dua','9-12','أدعية الثبات','Du’as of Steadfastness',
      "An A4 portrait sheet of 4 cards of courage and steadfastness du'as titled «أدعية الثبات والشجاعة», each with a shield or banner motif and one short du'a in big Arabic: «اللهم ثبّت أقدامنا وانصرنا», «ربنا أفرغ علينا صبراً», «اللهم اجعلني من عبادك الصالحين». Dashed cut lines."),
    P('history','certificate','13+','بطل الحصن','Hero of the Fortress',
      "An A4 LANDSCAPE certificate titled «بطل الحصن» with a shield-and-banner crest and an ornate gold border. A blank name line «الاسم», the text «اقتدى بأبطال الإسلام في الشجاعة وحسن الخلق», and lines for «التاريخ» and «التوقيع»."),

    /* ───────────── 7 · النادي الرياضي · Sports Club ───────────── */
    P('sport','poster','3-5','سنن الفطرة','The Fitrah Sunnahs',
      "An A4 portrait wall chart titled «سنن الفطرة» showing healthy sunnah habits with faceless kids: using the siwak / brushing teeth «السواك», trimming nails «تقليم الأظافر», washing and keeping clean «النظافة», combing hair «تسريح الشعر». Number each with its Arabic label, fresh green flat style."),
    P('sport','tracker','6-8','جسم صحي','A Healthy Body',
      "An A4 portrait weekly tracker titled «جسم صحي»: rows for siwak / brush teeth «السواك», drink water «الماء», sleep early «النوم مبكراً», exercise «الرياضة», eat fruit «الفواكه», across 7 day-columns with checkboxes. A sporty header with a water bottle and a sun."),
    P('sport','flashcards','6-8','عادة صحية أم لا؟','Healthy or Not?',
      "An A4 portrait sheet of 12 matching cards with dashed cut lines, each pairing a healthy habit with its unhealthy opposite: water «ماء» vs soda, sleeping early vs late screens, fruit «فاكهة» vs junk food, playing outside vs sitting all day. Faceless kids and clear Arabic labels."),
    P('sport','board','9-12','تحدّي القوة','The Strength Challenge',
      "An A4 LANDSCAPE board game titled «تحدّي القوة»: an athletic track where good stones are sunnah sports — swimming «السباحة», archery «الرماية», horse-riding «الفروسية», running «الجري» — that move you ahead, while 'danger' stones (junk food, too much screen time) send you back. Finish at a champion's medal. Dice key included."),
    P('sport','coloring','6-8','الرياضة والقوة','Sport & Strength',
      "An A4 portrait coloring page titled «الرياضة والقوة»: faceless kids doing the sunnah sports — one swimming, one doing archery, one riding a horse, one running — under a bright sunny sky with a field and trees. Bold clean outlines, room to color."),
    P('sport','craft','6-8','وسام البطل','Champion’s Medal',
      "An A4 portrait cut-out paper craft for a champion's medal on a ribbon and a small coach's whistle, decorated with a star and the Arabic word «بطل». Show dashed cut lines, a slot for the ribbon, and bold flat colors."),
    P('sport','puzzle','9-12','مسار البطل','The Hero’s Track',
      "An A4 portrait maze titled «مسار البطل»: guide a faceless young athlete through a training course of hurdles, cones and ladders to the finish line, collecting energy stars on the way. Include a short Arabic instruction line and a checkered finish flag."),
    P('sport','story','9-12','قوة الإرادة','Willpower',
      "An A4 portrait 4-panel comic with faceless characters titled «قوة الإرادة»: panel 1 a child wakes early as the sun rises; panel 2 exercises and stretches; panel 3 chooses fruit over junk food; panel 4 proudly crosses a race finish line. Short Arabic captions about discipline."),
    P('sport','dua','6-8','أدعية العافية','Du’as for Wellbeing',
      "An A4 portrait sheet of 4 du'a cards for strength and health titled «أدعية القوة والعافية», each with a sporty flat icon and one short du'a in big Arabic: «اللهم عافني في بدني», «اللهم إني أسألك الصحة والعافية», «اللهم قوّني على طاعتك». Dashed cut lines."),
    P('sport','certificate','9-12','بطل اللياقة','Fitness Champion',
      "An A4 LANDSCAPE certificate titled «بطل اللياقة» with a medal-and-laurel emblem and a green-and-gold border. A blank name line «الاسم», the text «حافظ على قوّته وصحّته اتّباعاً لسنّة نبيّه», and lines for «التاريخ» and «التوقيع»."),

    /* ───────────── 8 · أكاديمية المبدعين · Innovators' Academy ───────────── */
    P('academy','poster','9-12','منارة العالِم','Lighthouse of the Scholar',
      "An A4 portrait wall chart titled «منارة العالِم» of Muslim scholars' contributions, each represented ONLY by their invention or instrument — never a portrait: algebra symbols for «الخوارزمي», an eye/optics diagram for «ابن الهيثم», surgical tools for «الزهراوي», an astrolabe for «البيروني», a world map for «الإدريسي». Label each field in Arabic, blue-and-gold flat style."),
    P('academy','flashcards','6-8','الحروف العربية','The Arabic Alphabet',
      "An A4 portrait sheet of Arabic alphabet flashcards titled «الحروف العربية»: a clean grid of large, crisp, correctly-formed letters (ا ب ت ث ج ح خ ...), each beside a themed flat object beginning with that letter and its Arabic word. Dashed cut borders. Make the letters perfectly legible and correct."),
    P('academy','board','9-12','رحلة المستكشفين','The Explorers’ Journey',
      "An A4 LANDSCAPE board game titled «رحلة المستكشفين»: an old-map path with a compass rose, mountains, seas and discovery stops; landing on a 'discovery' stone reveals a science fact. Mark START «ابدأ» and a finish badge «مستكشف عظيم». Antique-map flat style with Arabic labels and a dice key."),
    P('academy','coloring','6-8','ورشة المبدع','The Inventor’s Workshop',
      "An A4 portrait coloring page titled «أكاديمية المبدعين»: a young inventor's workshop and observatory full of objects — a telescope, gears, stacked books, a globe, beakers and a star chart — and NO people. Bold clean outlines, lots of detail to color."),
    P('academy','craft','9-12','مجسّم الإسطرلاب','Build an Astrolabe',
      "An A4 portrait cut-out paper model of a simple astrolabe with a rotating disc fixed by a split pin, decorated with stars and Eastern-Arabic numerals «١ ٢ ٣». Show dashed cut lines, alignment marks, and Arabic step labels «قص» «ركّب» «أدر»."),
    P('academy','tracker','6-8','القراءة والتعلّم','Reading & Learning',
      "An A4 portrait weekly tracker titled «جدول القراءة والتعلّم»: rows for read a book «قرأت كتاباً», learned a new word «تعلّمت كلمة», asked a good question «سألت سؤالاً», finished my work «أنجزت واجبي», across 7 day-columns with checkboxes. A bright academic header with books and a lamp."),
    P('academy','puzzle','9-12','صِل النقاط','Connect the Dots',
      "An A4 portrait dot-to-dot puzzle that uses Eastern-Arabic numerals «١ ٢ ٣ ٤ ...» and reveals a lighthouse beside an observatory when connected. Include the small Arabic instruction «صِل النقاط بالترتيب» and a faint guide so younger kids can start. Clean printable lines."),
    P('academy','story','9-12','كن أنت المبدع','Be the Creator',
      "An A4 portrait 4-panel comic with faceless characters titled «كن أنت المبدع»: panel 1 a child notices an everyday problem; panel 2 sketches an idea on paper; panel 3 builds a simple invention from household bits; panel 4 proudly shows it working. Short encouraging Arabic captions."),
    P('academy','dua','6-8','أدعية العلم','Du’as for Knowledge',
      "An A4 portrait sheet of 4 du'a-for-knowledge cards titled «أدعية العلم», each with a book or lamp flat icon and one short du'a in big Arabic: «ربِّ زدني علماً», «اللهم انفعني بما علّمتني وعلّمني ما ينفعني», «اللهم فقّهني في الدين». Dashed cut lines."),
    P('academy','certificate','9-12','مبدع المستقبل','Young Innovator',
      "An A4 LANDSCAPE certificate titled «مبدع المستقبل» with a lightbulb-and-book emblem and a blue-and-gold border. A blank name line «الاسم», the text «أبدع وتعلّم في أكاديمية المبدعين», and lines for «التاريخ» and «التوقيع»."),

    /* ───────────── 9 · ركن القدس والأمة · Al-Quds & Ummah ───────────── */
    P('quds','poster','6-8','المسجد الأقصى','Al-Aqsa Mosque',
      "An A4 portrait wall chart titled «المسجد الأقصى» showing the Al-Aqsa compound architecture: the golden Dome of the Rock «قبة الصخرة» and the silver-domed Qibli Mosque «المصلى القبلي» among olive trees and old-city walls — BUILDINGS ONLY, no figures. Label the parts in Arabic, green-and-gold flat style."),
    P('quds','coloring','6-8','القدس','Al-Quds',
      "An A4 portrait coloring page titled «القدس»: the old-city skyline of Jerusalem with the Dome of the Rock, stone arches, city walls, olive trees and a crescent moon overhead. Bold clean outlines, plenty of space to color, no people."),
    P('quds','flashcards','9-12','الأمة الواحدة','The One Ummah',
      "An A4 portrait sheet of 12 matching cards with dashed cut lines titled «الأمة الواحدة»: match a Muslim country's name to its flag or a silhouette of its famous landmark, celebrating one global ummah. Clear Arabic labels, no faces. Warm, hopeful flat style."),
    P('quds','tracker','6-8','أتذكّر أمّتي','I Remember My Ummah',
      "An A4 portrait weekly tracker titled «أتذكّر أمّتي»: rows for made du'a for Al-Aqsa «دعوت للأقصى», learned about a Muslim country «تعرّفت على بلد», did a good deed for others «عمل خير», shared «شاركت», across 7 day-columns. Olive-branch checkboxes and a Dome-of-the-Rock header."),
    P('quds','board','9-12','رحلة التغيير','Journey of Change',
      "An A4 LANDSCAPE board game titled «رحلة التغيير»: a path showing how small good actions — a du'a, a kind word, planting a tree, learning something, helping a friend — build up step by step into big positive change, ending at a bright sunrise over Al-Quds «فجر جديد». Arabic stops and a dice key."),
    P('quds','story','9-12','من أجل القدس','For the Sake of Al-Quds',
      "An A4 portrait 4-panel comic with faceless characters titled «من أجل القدس»: panel 1 children write letters and raise hands in du'a for Al-Quds; panel 2 they plant an olive sapling together; panel 3 they water and care for it; panel 4 it has grown into a strong tree under a hopeful sunrise. Short Arabic captions."),
    P('quds','craft','6-8','قبة الصخرة','Dome of the Rock Craft',
      "An A4 portrait cut-and-fold paper model of the golden Dome of the Rock «قبة الصخرة», plus a small olive-tree paper craft «شجرة الزيتون». Show the flat nets with dashed cut and fold lines, glue tabs, and Arabic labels. Gold-and-green flat colors."),
    P('quds','dua','6-8','أدعية للأقصى','Du’as for Al-Aqsa',
      "An A4 portrait sheet of 4 du'a cards titled «أدعية للأقصى والأمة», each with a Dome-of-the-Rock or olive-branch motif and one short du'a in big Arabic: «اللهم حرّر المسجد الأقصى», «اللهم انصر إخواننا المستضعفين», «اللهم احفظ أمّة الإسلام». Dashed cut lines."),
    P('quds','puzzle','9-12','الطريق إلى الأقصى','The Road to Al-Aqsa',
      "An A4 portrait maze titled «الطريق إلى الأقصى» winding through the narrow old-city streets of Jerusalem to reach the Al-Aqsa gate at the end, collecting little olive branches along the way. Include a short Arabic instruction line and stone-arch decorations."),
    P('quds','certificate','9-12','سفير القدس','Ambassador of Al-Quds',
      "An A4 LANDSCAPE certificate titled «سفير القدس» with a Dome-of-the-Rock-and-olive-branch emblem and a green-and-gold border. A blank name line «الاسم», the text «حمل قضية الأقصى في قلبه وعمل لها», and lines for «التاريخ» and «التوقيع»."),
  ];

  window.AP = { STYLE: AP_STYLE, CORNERS: CORNERS, TYPES: TYPES, AGES: AGES, PROMPTS: PROMPTS };
})();
