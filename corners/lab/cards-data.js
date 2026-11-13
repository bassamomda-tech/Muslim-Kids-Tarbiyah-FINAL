/* cards-data.js — «بطاقات عالمي» / My World Cards: the words a young child meets every day.
   Each card: id, e (one emoji picture), ar/en (name), f (one short true fact), optional s (its sound), optional q.
   q:true only puts the small badge «ذُكِرَ في القرآن» on the card — no Quran or hadith text is ever quoted here.
   Rules for anyone adding cards: no person/face emoji (jobs use the TOOL), simple facts that are certainly true. */
(function () {
  'use strict';
  function c(id, e, ar, en, far, fen, x) {
    var o = { id: id, e: e, ar: ar, en: en, f: { ar: far, en: fen } };
    if (x && x.q) o.q = true;
    if (x && x.s) o.s = { ar: x.s[0], en: x.s[1] };
    return o;
  }
  var Q = { q: 1 };
  window.LAB_CARDS = {
    cats: [
      { id: 'animals', e: '🐪', color: 'rgba(232,181,48,.2)', t: { ar: 'الحَيَوانات', en: 'Animals' }, cards: [
        c('cat', '🐈', 'قِطَّة', 'Cat', 'القِطَّةُ تُنَظِّفُ فَرْوَها بِلِسانِها.', 'A cat cleans its fur with its tongue.', { s: ['مُواء', 'Meow'] }),
        c('dog', '🐕', 'كَلْب', 'Dog', 'الكَلْبُ يَشُمُّ الرَّوائِحَ أَفْضَلَ مِنَ الإِنْسانِ بِكَثير.', 'A dog can smell much better than a person.', { q: 1, s: ['نُباح', 'Woof'] }),
        c('horse', '🐎', 'حِصان', 'Horse', 'الحِصانُ يَجْري بِسُرْعَةٍ وَيَسْتَطيعُ أَنْ يَنامَ واقِفًا.', 'A horse runs fast and can sleep standing up.', { q: 1, s: ['صَهيل', 'Neigh'] }),
        c('cow', '🐄', 'بَقَرَة', 'Cow', 'البَقَرَةُ تُعْطينا الحَليب.', 'The cow gives us milk.', { q: 1, s: ['خُوار', 'Moo'] }),
        c('sheep', '🐑', 'خَروف', 'Sheep', 'الخَروفُ يُغَطّيهِ الصّوف، وَمِنَ الصّوفِ نَصْنَعُ مَلابِسَ دافِئَة.', 'A sheep is covered in wool, and we make warm clothes from wool.', { s: ['ثُغاء', 'Baa'] }),
        c('goat', '🐐', 'ماعِز', 'Goat', 'الماعِزُ يَتَسَلَّقُ الصُّخورَ وَالجِبالَ بِمَهارَة.', 'Goats are very good at climbing rocks and mountains.'),
        c('camel', '🐪', 'جَمَل', 'Camel', 'الجَمَلُ يَصْبِرُ أَيّامًا بِلا ماءٍ في الصَّحْراء.', 'A camel can go for days without water in the desert.', Q),
        c('elephant', '🐘', 'فِيل', 'Elephant', 'الفيلُ أَكْبَرُ حَيَوانٍ يَعيشُ عَلى اليابِسَة.', 'The elephant is the biggest animal that lives on land.', Q),
        c('giraffe', '🦒', 'زَرافَة', 'Giraffe', 'الزَّرافَةُ أَطْوَلُ حَيَوانٍ في العالَم.', 'The giraffe is the tallest animal in the world.'),
        c('rabbit', '🐇', 'أَرْنَب', 'Rabbit', 'الأَرْنَبُ لَهُ أُذُنانِ طَويلَتانِ وَيَقْفِزُ بِسُرْعَة.', 'A rabbit has two long ears and hops quickly.'),
        c('zebra', '🦓', 'حِمارٌ وَحْشِيّ', 'Zebra', 'الحِمارُ الوَحْشِيُّ جِسْمُهُ مُخَطَّطٌ بِالأَبْيَضِ وَالأَسْوَد.', 'A zebra has black and white stripes.'),
        c('tiger', '🐅', 'نَمِر', 'Tiger', 'النَّمِرُ قِطٌّ كَبيرٌ قَوِيٌّ جِسْمُهُ مُخَطَّط.', 'The tiger is a big, strong cat with stripes.'),
        c('kangaroo', '🦘', 'كَنْغَر', 'Kangaroo', 'أُمُّ الكَنْغَرِ تَحْمِلُ صَغيرَها في جَيْبٍ عَلى بَطْنِها.', 'A mother kangaroo carries her baby in a pouch on her tummy.'),
        c('monkey', '🐒', 'قِرْد', 'Monkey', 'القِرْدُ يَتَسَلَّقُ الأَشْجارَ بِيَدَيْهِ وَرِجْلَيْه.', 'A monkey climbs trees with its hands and feet.'),
        c('hedgehog', '🦔', 'قُنْفُذ', 'Hedgehog', 'القُنْفُذُ يُغَطّي ظَهْرَهُ شَوْكٌ يَحْميه.', 'A hedgehog has spines on its back to protect it.')
      ] },
      { id: 'birds', e: '🦜', color: 'rgba(59,179,109,.22)', t: { ar: 'الطُّيور', en: 'Birds' }, cards: [
        c('rooster', '🐓', 'دِيك', 'Rooster', 'الدّيكُ يَصيحُ في الصَّباحِ الباكِر.', 'The rooster crows early in the morning.', { s: ['صِياح', 'Cock-a-doodle-doo'] }),
        c('duck', '🦆', 'بَطَّة', 'Duck', 'قَدَما البَطَّةِ تُساعِدانِها عَلى السِّباحَة.', 'A duck\'s feet help it to swim.', { s: ['بَطْبَطَة', 'Quack'] }),
        c('swan', '🦢', 'بَجَعَة', 'Swan', 'البَجَعَةُ لَها رَقَبَةٌ طَويلَةٌ وَتَسْبَحُ في البُحَيْرات.', 'A swan has a long neck and swims on lakes.'),
        c('owl', '🦉', 'بُومَة', 'Owl', 'البومَةُ تَرى جَيِّدًا في الظَّلام.', 'An owl can see well in the dark.'),
        c('eagle', '🦅', 'نَسْر', 'Eagle', 'النَّسْرُ يَرى مِنْ مَكانٍ عالٍ جِدًّا.', 'An eagle can see from very high up.'),
        c('dove', '🕊️', 'حَمامَة', 'Dove', 'الحَمامَةُ تَعْرِفُ طَريقَ العَوْدَةِ إِلى بَيْتِها مِنْ مَكانٍ بَعيد.', 'A pigeon can find its way home from far away.', { s: ['هَديل', 'Coo'] }),
        c('parrot', '🦜', 'بَبَّغاء', 'Parrot', 'بَعْضُ البَبَّغاواتِ تُقَلِّدُ كَلامَ النّاس.', 'Some parrots can copy the words people say.'),
        c('peacock', '🦚', 'طاوُوس', 'Peacock', 'ذَكَرُ الطّاووسِ لَهُ ذَيْلٌ طَويلٌ مُلَوَّن.', 'The male peacock has a long colourful tail.'),
        c('penguin', '🐧', 'بِطْريق', 'Penguin', 'البِطْريقُ طائِرٌ لا يَطير، لٰكِنَّهُ سَبّاحٌ ماهِر.', 'A penguin is a bird that cannot fly, but it is a great swimmer.'),
        c('flamingo', '🦩', 'فلامِنْغو', 'Flamingo', 'الفلامِنْغو يَقِفُ كَثيرًا عَلى رِجْلٍ واحِدَة.', 'A flamingo often stands on one leg.'),
        c('turkey', '🦃', 'ديكٌ رومِيّ', 'Turkey', 'الدّيكُ الرّومِيُّ طائِرٌ كَبيرٌ يَفْرِدُ ذَيْلَهُ كَالمِرْوَحَة.', 'A turkey is a big bird that spreads its tail like a fan.'),
        c('sparrow', '🐦', 'عُصْفور', 'Little bird', 'العُصْفورُ يَبْني عُشَّهُ مِنَ القَشِّ وَالأَعْواد.', 'A little bird builds its nest from straw and twigs.', { s: ['زَقْزَقَة', 'Tweet'] }),
        c('chick', '🐤', 'كَتْكوت', 'Chick', 'الكَتْكوتُ يَخْرُجُ مِنَ البَيْضَة.', 'A chick hatches out of an egg.'),
        c('crow', '🐦‍⬛', 'غُراب', 'Crow', 'الغُرابُ طائِرٌ أَسْوَدُ ذَكِيٌّ جِدًّا.', 'The crow is a very clever black bird.', { q: 1, s: ['نَعيق', 'Caw'] })
      ] },
      { id: 'sea', e: '🐬', color: 'rgba(60,140,220,.28)', t: { ar: 'كائِناتُ البَحْر', en: 'Sea creatures' }, cards: [
        c('fish', '🐟', 'سَمَكَة', 'Fish', 'السَّمَكَةُ تَتَنَفَّسُ في الماءِ بِالخَياشيم.', 'A fish breathes in water with its gills.', Q),
        c('tropical', '🐠', 'سَمَكَةٌ مُلَوَّنَة', 'Colourful fish', 'أَسْماكٌ مُلَوَّنَةٌ كَثيرَةٌ تَعيشُ في البِحارِ الدّافِئَة.', 'Many colourful fish live in warm seas.'),
        c('whale', '🐋', 'حُوت', 'Whale', 'الحوتُ الأَزْرَقُ أَكْبَرُ حَيَوانٍ في العالَم.', 'The blue whale is the biggest animal in the world.', Q),
        c('dolphin', '🐬', 'دُلْفين', 'Dolphin', 'الدُّلْفينُ يَصْعَدُ إِلى سَطْحِ الماءِ لِيَتَنَفَّسَ الهَواء.', 'A dolphin comes up to the top of the water to breathe air.'),
        c('shark', '🦈', 'قِرْش', 'Shark', 'القِرْشُ إِذا سَقَطَتْ لَهُ سِنٌّ نَبَتَتْ مَكانَها سِنٌّ جَديدَة.', 'When a shark loses a tooth, a new one grows in its place.'),
        c('octopus', '🐙', 'أُخْطُبوط', 'Octopus', 'الأُخْطُبوطُ لَهُ ثَماني أَذْرُع.', 'An octopus has eight arms.'),
        c('crab', '🦀', 'سَلْطَعون', 'Crab', 'السَّلْطَعونُ يَمْشي غالِبًا إِلى الجانِب.', 'A crab usually walks sideways.'),
        c('shrimp', '🦐', 'رُوبْيان', 'Shrimp', 'الرّوبْيانُ لَهُ قِشْرَةٌ رَقيقَةٌ وَقُرونُ اسْتِشْعارٍ طَويلَة.', 'A shrimp has a thin shell and long feelers.'),
        c('lobster', '🦞', 'كَرْكَنْد', 'Lobster', 'الكَرْكَنْدُ لَهُ مِخْلَبانِ كَبيرانِ قَوِيّان.', 'A lobster has two big strong claws.'),
        c('turtle', '🐢', 'سُلَحْفاة', 'Turtle', 'السُّلَحْفاةُ البَحْرِيَّةُ تَضَعُ بَيْضَها في رِمالِ الشّاطِئ.', 'A sea turtle lays its eggs in the sand on the beach.'),
        c('puffer', '🐡', 'سَمَكَةٌ مُنْتَفِخَة', 'Pufferfish', 'السَّمَكَةُ المُنْتَفِخَةُ تَنْفُخُ جِسْمَها كَالكُرَةِ عِنْدَ الخَطَر.', 'A pufferfish puffs itself up like a ball when there is danger.'),
        c('squid', '🦑', 'حَبّار', 'Squid', 'الحَبّارُ يُطْلِقُ حِبْرًا داكِنًا لِيَهْرُبَ مِنَ الخَطَر.', 'A squid squirts dark ink to escape from danger.'),
        c('shell', '🐚', 'صَدَفَة', 'Shell', 'الصَّدَفَةُ بَيْتٌ صُلْبٌ لِحَيَوانٍ بَحْرِيٍّ صَغير.', 'A shell is the hard home of a small sea animal.'),
        c('seal', '🦭', 'فُقْمَة', 'Seal', 'الفُقْمَةُ سَبّاحَةٌ ماهِرَةٌ وَتَسْتَريحُ عَلى الشّاطِئِ أَوِ الجَليد.', 'A seal is a great swimmer and rests on the shore or the ice.')
      ] },
      { id: 'insects', e: '🐝', color: 'rgba(245,204,90,.2)', t: { ar: 'الحَشَراتُ وَالكائِناتُ الصَّغيرَة', en: 'Insects & minibeasts' }, cards: [
        c('bee', '🐝', 'نَحْلَة', 'Bee', 'النَّحْلَةُ تَجْمَعُ رَحيقَ الأَزْهارِ وَتَصْنَعُ العَسَل.', 'A bee collects nectar from flowers and makes honey.', { q: 1, s: ['طَنين', 'Buzz'] }),
        c('ant', '🐜', 'نَمْلَة', 'Ant', 'النَّمْلَةُ تَحْمِلُ أَشْياءَ أَثْقَلَ مِنْ جِسْمِها.', 'An ant can carry things heavier than its own body.', Q),
        c('spider', '🕷️', 'عَنْكَبوت', 'Spider', 'العَنْكَبوتُ لَهُ ثَماني أَرْجُلٍ وَيَنْسِجُ بَيْتَهُ مِنْ خُيوط. وَهُوَ لَيْسَ حَشَرَة.', 'A spider has eight legs and spins a web. It is not an insect.', Q),
        c('butterfly', '🦋', 'فَراشَة', 'Butterfly', 'الفَراشَةُ كانَتْ يَرَقَةً صَغيرَةً قَبْلَ أَنْ تَطير.', 'A butterfly was a little caterpillar before it could fly.'),
        c('ladybird', '🐞', 'دَعْسوقَة', 'Ladybird', 'الدَّعْسوقَةُ خُنْفُساءُ صَغيرَةٌ عَلى ظَهْرِها نُقَط.', 'A ladybird is a little beetle with spots on its back.'),
        c('grasshopper', '🦗', 'جُنْدُب', 'Grasshopper', 'الجُنْدُبُ يَقْفِزُ بَعيدًا بِرِجْلَيْهِ الخَلْفِيَّتَيْنِ القَوِيَّتَيْن.', 'A grasshopper jumps far with its strong back legs.'),
        c('mosquito', '🦟', 'بَعوضَة', 'Mosquito', 'البَعوضَةُ حَشَرَةٌ صَغيرَةٌ جِدًّا، وَقَرْصَتُها تُسَبِّبُ الحَكَّة.', 'A mosquito is a tiny insect, and its bite makes us itch.', Q),
        c('fly', '🪰', 'ذُبابَة', 'Fly', 'الذُّبابَةُ لَها عَيْنانِ كَبيرَتانِ تَرى بِهِما في اتِّجاهاتٍ كَثيرَة.', 'A fly has two big eyes that see in many directions.', Q),
        c('caterpillar', '🐛', 'يَرَقَة', 'Caterpillar', 'اليَرَقَةُ تَأْكُلُ أَوْراقَ النَّباتِ ثُمَّ تَصيرُ فَراشَة.', 'A caterpillar eats leaves and then becomes a butterfly.'),
        c('snail', '🐌', 'حَلَزون', 'Snail', 'الحَلَزونُ يَحْمِلُ بَيْتَهُ عَلى ظَهْرِهِ وَيَمْشي بِبُطْء.', 'A snail carries its home on its back and moves slowly.'),
        c('beetle', '🪲', 'خُنْفُساء', 'Beetle', 'الخُنْفُساءُ لَها غِطاءٌ صُلْبٌ يَحْمي جَناحَيْها.', 'A beetle has a hard cover that protects its wings.'),
        c('worm', '🪱', 'دودَةُ الأَرْض', 'Earthworm', 'دودَةُ الأَرْضِ تَعيشُ في التُّرْبَةِ وَتُفيدُ النَّبات.', 'An earthworm lives in the soil and helps plants.'),
        c('scorpion', '🦂', 'عَقْرَب', 'Scorpion', 'العَقْرَبُ لَهُ ثَماني أَرْجُلٍ وَإِبْرَةٌ في آخِرِ ذَيْلِه، فَلا نَلْمِسُه.', 'A scorpion has eight legs and a sting at the end of its tail, so we never touch it.'),
        c('cockroach', '🪳', 'صُرْصور', 'Cockroach', 'الصُّرْصورُ يَخْتَبِئُ في النَّهارِ وَيَخْرُجُ في اللَّيْل.', 'A cockroach hides in the day and comes out at night.')
      ] },
      { id: 'plants', e: '🌴', color: 'rgba(59,179,109,.22)', t: { ar: 'النَّباتاتُ وَالأَشْجار', en: 'Plants & trees' }, cards: [
        c('tree', '🌳', 'شَجَرَة', 'Tree', 'الأَشْجارُ تُعْطينا الظِّلَّ وَالثِّمارَ وَالخَشَب.', 'Trees give us shade, fruit and wood.'),
        c('palm', '🌴', 'نَخْلَة', 'Palm tree', 'النَّخْلَةُ تُعْطينا التَّمْر.', 'The date palm gives us dates.', Q),
        c('cactus', '🌵', 'صَبّار', 'Cactus', 'الصَّبّارُ يَخْزِنُ الماءَ في ساقِهِ وَيَعيشُ في الأَماكِنِ الجافَّة.', 'A cactus stores water in its stem and lives in dry places.'),
        c('sunflower', '🌻', 'دَوّارُ الشَّمْس', 'Sunflower', 'بُذورُ دَوّارِ الشَّمْسِ تُؤْكَلُ وَيُصْنَعُ مِنْها الزَّيْت.', 'We can eat sunflower seeds and make oil from them.'),
        c('rose', '🌹', 'وَرْدَة', 'Rose', 'الوَرْدَةُ رائِحَتُها طَيِّبَةٌ وَفي ساقِها أَشْواك.', 'A rose smells lovely and has thorns on its stem.'),
        c('tulip', '🌷', 'زَهْرَةُ التّوليب', 'Tulip', 'زَهْرَةُ التّوليبِ تَنْبُتُ مِنْ بَصَلَةٍ تَحْتَ التُّراب.', 'A tulip grows from a bulb under the soil.'),
        c('seedling', '🌱', 'نَبْتَة', 'Seedling', 'النَّبْتَةُ تَبْدَأُ مِنْ بَذْرَةٍ صَغيرَة.', 'A seedling starts from a tiny seed.'),
        c('pine', '🌲', 'شَجَرَةُ الصَّنَوْبَر', 'Pine tree', 'أَوْراقُ الصَّنَوْبَرِ رَفيعَةٌ كَالإِبَر، وَتَبْقى خَضْراءَ في الشِّتاء.', 'Pine leaves are thin like needles and stay green in winter.'),
        c('herb', '🌿', 'أَعْشاب', 'Herbs', 'بَعْضُ الأَعْشابِ مِثْلُ النَّعْناعِ لَها رائِحَةٌ طَيِّبَة.', 'Some herbs, like mint, have a lovely smell.'),
        c('leaf', '🍃', 'وَرَقَةُ شَجَر', 'Leaf', 'الأَوْراقُ تَصْنَعُ غِذاءَ النَّباتِ بِضَوْءِ الشَّمْس.', 'Leaves make food for the plant using sunlight.'),
        c('autumn', '🍂', 'أَوْراقُ الخَريف', 'Autumn leaves', 'في الخَريفِ تَصْفَرُّ أَوْراقُ بَعْضِ الأَشْجارِ وَتَسْقُط.', 'In autumn the leaves of some trees turn yellow and fall.'),
        c('pot', '🪴', 'نَبْتَةٌ في أَصيص', 'Pot plant', 'النَّبْتَةُ تَحْتاجُ إِلى الماءِ وَالضَّوْءِ لِتَنْمو.', 'A plant needs water and light to grow.'),
        c('flower', '🌼', 'زَهْرَة', 'Flower', 'الأَزْهارُ تَجْذِبُ النَّحْلَ وَالفَراشات.', 'Flowers attract bees and butterflies.'),
        c('blossom', '🌸', 'زَهْرُ الشَّجَر', 'Blossom', 'في الرَّبيعِ تُزْهِرُ أَشْجارٌ كَثيرَة.', 'In spring many trees are covered in blossom.'),
        c('wheat', '🌾', 'سُنْبُلَةُ قَمْح', 'Ear of wheat', 'مِنْ حُبوبِ القَمْحِ نَصْنَعُ الدَّقيقَ ثُمَّ الخُبْز.', 'From grains of wheat we make flour, and then bread.')
      ] },
      { id: 'food', e: '🍎', color: 'rgba(230,90,80,.22)', t: { ar: 'الفَواكِهُ وَالخُضار', en: 'Fruits & vegetables' }, cards: [
        c('apple', '🍎', 'تُفّاحَة', 'Apple', 'التُّفّاحُ يَنْمو عَلى الأَشْجار، وَمِنْهُ الأَحْمَرُ وَالأَخْضَرُ وَالأَصْفَر.', 'Apples grow on trees and can be red, green or yellow.'),
        c('banana', '🍌', 'مَوْزَة', 'Banana', 'المَوْزُ يَنْمو مُجْتَمِعًا في عَناقيدَ كَبيرَة.', 'Bananas grow together in big bunches.', Q),
        c('grapes', '🍇', 'عِنَب', 'Grapes', 'العِنَبُ يَنْمو في عَناقيد، وَإِذا جُفِّفَ صارَ زَبيبًا.', 'Grapes grow in bunches, and dried grapes are raisins.', Q),
        c('orange', '🍊', 'بُرْتُقالَة', 'Orange', 'البُرْتُقالُ فيهِ فيتامينُ «ج» المُفيدُ لِلْجِسْم.', 'Oranges have vitamin C, which is good for the body.'),
        c('watermelon', '🍉', 'بِطّيخ', 'Watermelon', 'أَكْثَرُ البِطّيخِ ماء، فَهُوَ يَرْوينا في الصَّيْف.', 'A watermelon is mostly water, so it refreshes us in summer.'),
        c('strawberry', '🍓', 'فَراوْلَة', 'Strawberry', 'بُذورُ الفَراوْلَةِ الصَّغيرَةُ تَكونُ عَلى سَطْحِها مِنَ الخارِج.', 'A strawberry has its tiny seeds on the outside.'),
        c('lemon', '🍋', 'لَيْمونَة', 'Lemon', 'اللَّيْمونُ طَعْمُهُ حامِض.', 'A lemon tastes sour.'),
        c('mango', '🥭', 'مانْجو', 'Mango', 'المانْجو فاكِهَةٌ حُلْوَةٌ في وَسَطِها بَذْرَةٌ كَبيرَة.', 'A mango is a sweet fruit with one big seed in the middle.'),
        c('olive', '🫒', 'زَيْتون', 'Olives', 'نَعْصِرُ الزَّيْتونَ لِنَحْصُلَ عَلى زَيْتِ الزَّيْتون.', 'We press olives to get olive oil.', Q),
        c('pear', '🍐', 'كُمَّثْرى', 'Pear', 'الكُمَّثْرى فاكِهَةٌ حُلْوَةٌ تَنْمو عَلى الأَشْجار.', 'A pear is a sweet fruit that grows on trees.'),
        c('carrot', '🥕', 'جَزَرَة', 'Carrot', 'الجَزَرَةُ جَذْرٌ يَنْمو تَحْتَ التُّراب.', 'A carrot is a root that grows under the soil.'),
        c('tomato', '🍅', 'طَماطِم', 'Tomato', 'الطَّماطِمُ تَكونُ خَضْراءَ ثُمَّ تَحْمَرُّ عِنْدَما تَنْضَج.', 'A tomato is green and then turns red when it is ripe.'),
        c('cucumber', '🥒', 'خِيار', 'Cucumber', 'الخِيارُ فيهِ ماءٌ كَثير.', 'A cucumber has a lot of water in it.'),
        c('potato', '🥔', 'بَطاطا', 'Potato', 'البَطاطا تَنْمو تَحْتَ التُّراب.', 'Potatoes grow under the soil.'),
        c('onion', '🧅', 'بَصَلَة', 'Onion', 'تَقْطيعُ البَصَلِ قَدْ يَجْعَلُ العَيْنَيْنِ تَدْمَعان.', 'Cutting an onion can make our eyes water.'),
        c('corn', '🌽', 'ذُرَة', 'Corn', 'حُبوبُ الذُّرَةِ مَصْفوفَةٌ في صُفوف، وَمِنْها نَصْنَعُ الفُشار.', 'Corn grows in neat rows on the cob, and popcorn is made from corn.')
      ] },
      { id: 'jobs', e: '🩺', color: 'rgba(160,120,230,.22)', t: { ar: 'المِهَن', en: 'Jobs' }, cards: [
        c('doctor', '🩺', 'طَبيب', 'Doctor', 'الطَّبيبُ يَفْحَصُ المَرْضى وَيُساعِدُهُمْ عَلى الشِّفاء.', 'A doctor examines sick people and helps them to get better.'),
        c('builder', '🧱', 'بَنّاء', 'Builder', 'البَنّاءُ يَبْني البُيوتَ وَالمَدارِسَ وَالمَساجِد.', 'A builder builds houses, schools and mosques.'),
        c('farmer', '🌾', 'مُزارِع', 'Farmer', 'المُزارِعُ يَزْرَعُ الأَرْضَ لِنَجِدَ طَعامَنا.', 'A farmer grows crops so that we have food.'),
        c('teacher', '📚', 'مُعَلِّم', 'Teacher', 'المُعَلِّمُ يُعَلِّمُنا القِراءَةَ وَالكِتابَةَ وَأَشْياءَ نافِعَة.', 'A teacher teaches us reading, writing and many useful things.'),
        c('baker', '🍞', 'خَبّاز', 'Baker', 'الخَبّازُ يَعْجِنُ الدَّقيقَ وَيَخْبِزُ الخُبْز.', 'A baker kneads dough and bakes bread.'),
        c('tailor', '🧵', 'خَيّاط', 'Tailor', 'الخَيّاطُ يَخيطُ المَلابِسَ بِالإِبْرَةِ وَالخَيْط.', 'A tailor sews clothes with a needle and thread.'),
        c('mechanic', '🔧', 'ميكانيكِيّ', 'Mechanic', 'الميكانيكِيُّ يُصْلِحُ السَّيّاراتِ المُعَطَّلَة.', 'A mechanic fixes cars that have broken down.'),
        c('firefighter', '🚒', 'إِطْفائِيّ', 'Firefighter', 'الإِطْفائِيُّ يُطْفِئُ الحَرائِقَ وَيُنْقِذُ النّاس.', 'Firefighters put out fires and rescue people.'),
        c('pilot', '✈️', 'طَيّار', 'Pilot', 'الطَّيّارُ يَقودُ الطّائِرَة.', 'A pilot flies the aeroplane.'),
        c('fisher', '🎣', 'صَيّادُ سَمَك', 'Fisherman', 'صَيّادُ السَّمَكِ يَصْطادُ السَّمَكَ بِالصِّنّارَةِ أَوِ الشَّبَكَة.', 'A fisherman catches fish with a rod or a net.'),
        c('carpenter', '🪚', 'نَجّار', 'Carpenter', 'النَّجّارُ يَصْنَعُ الأَبْوابَ وَالكَراسِيَّ مِنَ الخَشَب.', 'A carpenter makes doors and chairs out of wood.'),
        c('pharmacist', '💊', 'صَيْدَلِيّ', 'Pharmacist', 'الصَّيْدَلِيُّ يُعْطينا الدَّواءَ الَّذي يَكْتُبُهُ الطَّبيب.', 'A pharmacist gives us the medicine that the doctor prescribes.'),
        c('scientist', '🧪', 'عالِم', 'Scientist', 'العالِمُ يَسْأَلُ وَيُجَرِّبُ لِيَكْتَشِفَ أَشْياءَ جَديدَة.', 'A scientist asks questions and does experiments to discover new things.'),
        c('postman', '📮', 'ساعي البَريد', 'Postman', 'ساعي البَريدِ يوصِلُ الرَّسائِلَ وَالطُّرودَ إِلى البُيوت.', 'A postman delivers letters and parcels to our homes.'),
        c('dentist', '🦷', 'طَبيبُ الأَسْنان', 'Dentist', 'طَبيبُ الأَسْنانِ يَعْتَني بِأَسْنانِنا وَيُعالِجُها.', 'A dentist looks after our teeth and treats them.'),
        c('cook', '🍳', 'طَبّاخ', 'Cook', 'الطَّبّاخُ يُعِدُّ الطَّعامَ اللَّذيذ.', 'A cook prepares tasty food.')
      ] },
      { id: 'transport', e: '🚆', color: 'rgba(60,140,220,.28)', t: { ar: 'وَسائِلُ النَّقْل', en: 'Transport' }, cards: [
        c('car', '🚗', 'سَيّارَة', 'Car', 'السَّيّارَةُ لَها أَرْبَعُ عَجَلات.', 'A car has four wheels.'),
        c('bus', '🚌', 'حافِلَة', 'Bus', 'الحافِلَةُ تَحْمِلُ رُكّابًا كَثيرينَ مَعًا.', 'A bus carries many passengers together.'),
        c('train', '🚆', 'قِطار', 'Train', 'القِطارُ يَسيرُ عَلى سِكَّةٍ مِنَ الحَديد.', 'A train runs on metal rails.'),
        c('plane', '✈️', 'طائِرَة', 'Aeroplane', 'الطّائِرَةُ تَطيرُ عالِيًا فَوْقَ السَّحاب.', 'An aeroplane flies high above the clouds.'),
        c('helicopter', '🚁', 'مِرْوَحِيَّة', 'Helicopter', 'المِرْوَحِيَّةُ تَطيرُ بِمِرْوَحَةٍ كَبيرَةٍ فَوْقَها.', 'A helicopter flies with a big rotor on top.'),
        c('bicycle', '🚲', 'دَرّاجَة', 'Bicycle', 'الدَّرّاجَةُ لَها عَجَلَتانِ وَتَتَحَرَّكُ بِدَفْعِ الدَّوّاسَتَيْن.', 'A bicycle has two wheels and moves when we push the pedals.'),
        c('motorbike', '🏍️', 'دَرّاجَةٌ نارِيَّة', 'Motorbike', 'الدَّرّاجَةُ النّارِيَّةُ لَها عَجَلَتانِ وَمُحَرِّك.', 'A motorbike has two wheels and an engine.'),
        c('ship', '🚢', 'سَفينَة', 'Ship', 'السَّفينَةُ تَحْمِلُ النّاسَ وَالبَضائِعَ عَبْرَ البَحْر.', 'A ship carries people and goods across the sea.'),
        c('sailboat', '⛵', 'قارِبٌ شِراعِيّ', 'Sailing boat', 'القارِبُ الشِّراعِيُّ تَدْفَعُهُ الرّيحُ بِشِراعِه.', 'The wind pushes a sailing boat along by its sail.'),
        c('rocket', '🚀', 'صارُوخ', 'Rocket', 'الصّاروخُ يَحْمِلُ رُوّادَ الفَضاءِ إِلى الفَضاء.', 'A rocket carries astronauts into space.'),
        c('tractor', '🚜', 'جَرّار', 'Tractor', 'الجَرّارُ يُساعِدُ المُزارِعَ في حَرْثِ الأَرْض.', 'A tractor helps the farmer to plough the land.'),
        c('lorry', '🚚', 'شاحِنَة', 'Lorry', 'الشّاحِنَةُ تَنْقُلُ البَضائِعَ مِنْ مَكانٍ إِلى مَكان.', 'A lorry carries goods from place to place.'),
        c('ambulance', '🚑', 'سَيّارَةُ إِسْعاف', 'Ambulance', 'سَيّارَةُ الإِسْعافِ تَنْقُلُ المَرْضى بِسُرْعَةٍ إِلى المُسْتَشْفى.', 'An ambulance takes sick people quickly to hospital.'),
        c('fireengine', '🚒', 'سَيّارَةُ إِطْفاء', 'Fire engine', 'سَيّارَةُ الإِطْفاءِ تَحْمِلُ الماءَ وَالسَّلالِمَ لِإِطْفاءِ الحَرائِق.', 'A fire engine carries water and ladders to put out fires.'),
        c('taxi', '🚕', 'سَيّارَةُ أُجْرَة', 'Taxi', 'سَيّارَةُ الأُجْرَةِ توصِلُ الرُّكّابَ مُقابِلَ أُجْرَة.', 'A taxi takes passengers where they want to go for a fare.')
      ] },
      { id: 'home', e: '🔑', color: 'rgba(232,181,48,.2)', t: { ar: 'أَشْياءُ البَيْت', en: 'Home things' }, cards: [
        c('door', '🚪', 'بَاب', 'Door', 'نَفْتَحُ البابَ لِنَدْخُلَ وَنُغْلِقُهُ لِنَحْفَظَ البَيْت.', 'We open the door to come in and close it to keep the home safe.'),
        c('window', '🪟', 'نافِذَة', 'Window', 'النّافِذَةُ تُدْخِلُ الضَّوْءَ وَالهَواءَ إِلى الغُرْفَة.', 'A window lets light and air into the room.'),
        c('bed', '🛏️', 'سَرير', 'Bed', 'نَنامُ عَلى السَّريرِ لِيَرْتاحَ جِسْمُنا.', 'We sleep on a bed so that our body can rest.'),
        c('chair', '🪑', 'كُرْسِيّ', 'Chair', 'الكُرْسِيُّ لَهُ أَرْبَعُ أَرْجُلٍ وَنَجْلِسُ عَلَيْه.', 'A chair has four legs and we sit on it.'),
        c('sofa', '🛋️', 'أَريكَة', 'Sofa', 'الأَريكَةُ مَقْعَدٌ طَويلٌ مُريحٌ يَجْلِسُ عَلَيْهِ أَكْثَرُ مِنْ واحِد.', 'A sofa is a long comfy seat for more than one to sit on.'),
        c('key', '🔑', 'مِفْتاح', 'Key', 'المِفْتاحُ يَفْتَحُ القُفْلَ وَيُغْلِقُه.', 'A key opens and closes a lock.'),
        c('lamp', '💡', 'مِصْباح', 'Light bulb', 'المِصْباحُ يُضيءُ بِالكَهْرَباء.', 'A light bulb gives light using electricity.'),
        c('clock', '⏰', 'ساعَةٌ مُنَبِّهَة', 'Alarm clock', 'المُنَبِّهُ يَرِنُّ لِيوقِظَنا في الوَقْتِ المُناسِب.', 'An alarm clock rings to wake us up at the right time.'),
        c('soap', '🧼', 'صابُون', 'Soap', 'نَغْسِلُ أَيْدِيَنا بِالماءِ وَالصّابونِ لِتَكونَ نَظيفَة.', 'We wash our hands with soap and water to keep them clean.'),
        c('toothbrush', '🪥', 'فُرْشاةُ أَسْنان', 'Toothbrush', 'نُنَظِّفُ أَسْنانَنا بِالفُرْشاةِ لِتَبْقى قَوِيَّة.', 'We brush our teeth with a toothbrush to keep them strong.'),
        c('spoon', '🥄', 'مِلْعَقَة', 'Spoon', 'نَأْكُلُ الحَساءَ بِالمِلْعَقَة.', 'We eat soup with a spoon.'),
        c('plate', '🍽️', 'صَحْن', 'Plate', 'نَضَعُ الطَّعامَ في الصَّحْن.', 'We put our food on a plate.'),
        c('broom', '🧹', 'مِكْنَسَة', 'Broom', 'نَكْنُسُ الأَرْضَ بِالمِكْنَسَةِ لِتَكونَ نَظيفَة.', 'We sweep the floor with a broom to keep it clean.'),
        c('book', '📖', 'كِتاب', 'Book', 'في الكِتابِ صَفَحاتٌ نَقْرَؤُها وَنَتَعَلَّمُ مِنْها.', 'A book has pages that we read and learn from.'),
        c('scissors', '✂️', 'مِقَصّ', 'Scissors', 'المِقَصُّ لَهُ شَفْرَتانِ، وَنَسْتَعْمِلُهُ بِحَذَر.', 'Scissors have two blades, and we use them carefully.'),
        c('basket', '🧺', 'سَلَّة', 'Basket', 'نَحْمِلُ الأَشْياءَ في السَّلَّةِ أَوْ نَجْمَعُها فيها.', 'We carry or collect things in a basket.')
      ] },
      { id: 'sky', e: '🌈', color: 'rgba(60,140,220,.28)', t: { ar: 'الطَّقْسُ وَالسَّماء', en: 'Weather & sky' }, cards: [
        c('sun', '☀️', 'شَمْس', 'Sun', 'الشَّمْسُ نَجْمٌ يُعْطينا الضَّوْءَ وَالدِّفْء.', 'The sun is a star that gives us light and warmth.'),
        c('crescent', '🌙', 'هِلال', 'Crescent moon', 'نَرى الهِلالَ في أَوَّلِ الشَّهْرِ الهِجْرِيّ.', 'We see the crescent at the start of the Hijri month.'),
        c('fullmoon', '🌕', 'بَدْر', 'Full moon', 'القَمَرُ لا يُضيءُ بِنَفْسِهِ، بَلْ يَعْكِسُ ضَوْءَ الشَّمْس.', 'The moon does not make its own light; it reflects the light of the sun.'),
        c('star', '⭐', 'نَجْمَة', 'Star', 'النُّجومُ شُموسٌ بَعيدَةٌ جِدًّا، لِذٰلِكَ نَراها صَغيرَة.', 'Stars are suns that are very far away, so they look tiny.'),
        c('cloud', '☁️', 'سَحابَة', 'Cloud', 'السَّحابَةُ قَطَراتُ ماءٍ صَغيرَةٌ جِدًّا.', 'A cloud is made of very tiny drops of water.'),
        c('rain', '🌧️', 'مَطَر', 'Rain', 'المَطَرُ يَنْزِلُ مِنَ السَّحابِ فَيَسْقي الأَرْضَ وَالنَّبات.', 'Rain falls from the clouds and waters the land and the plants.'),
        c('snow', '❄️', 'ثَلْج', 'Snow', 'نُدْفَةُ الثَّلْجِ لَها سِتَّةُ أَطْراف.', 'A snowflake has six points.'),
        c('lightning', '⚡', 'بَرْق', 'Lightning', 'نَرى البَرْقَ أَوَّلًا ثُمَّ نَسْمَعُ الرَّعْد.', 'We see the lightning first and then hear the thunder.'),
        c('rainbow', '🌈', 'قَوْسُ قُزَح', 'Rainbow', 'قَوْسُ قُزَحَ يَظْهَرُ حينَ تُشْرِقُ الشَّمْسُ وَالمَطَرُ يَنْزِل.', 'A rainbow appears when the sun shines while it is raining.'),
        c('wind', '💨', 'رِيح', 'Wind', 'الرّيحُ هَواءٌ يَتَحَرَّك.', 'Wind is moving air.'),
        c('tornado', '🌪️', 'إِعْصار', 'Tornado', 'الإِعْصارُ ريحٌ قَوِيَّةٌ جِدًّا تَدورُ بِسُرْعَة.', 'A tornado is a very strong wind that spins fast.'),
        c('fog', '🌫️', 'ضَباب', 'Fog', 'الضَّبابُ سَحابٌ قَريبٌ مِنَ الأَرْض.', 'Fog is a cloud close to the ground.'),
        c('earth', '🌍', 'الأَرْض', 'Earth', 'الأَرْضُ كَوْكَبُنا، وَأَكْثَرُ سَطْحِها ماء.', 'The Earth is our planet, and most of its surface is water.'),
        c('umbrella', '☔', 'مِظَلَّة', 'Umbrella', 'المِظَلَّةُ تَحْمينا مِنَ المَطَر.', 'An umbrella keeps the rain off us.'),
        c('thermometer', '🌡️', 'ميزانُ الحَرارَة', 'Thermometer', 'ميزانُ الحَرارَةِ يَقيسُ دَرَجَةَ الحَرارَة.', 'A thermometer measures how hot or cold it is.'),
        c('sunrise', '🌅', 'شُروق', 'Sunrise', 'تُشْرِقُ الشَّمْسُ مِنَ الشَّرْقِ وَتَغْرُبُ في الغَرْب.', 'The sun rises in the east and sets in the west.')
      ] }
    ]
  };
})();
