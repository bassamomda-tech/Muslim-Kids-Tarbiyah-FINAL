/* ════════════════════════════════════════════════════════════════
   quest-data.js — generates the "عجائب الخلق" magical-quest storybook
   from the live رحلة اليقين stations (window.YAQEEN_STATIONS).
   • 20 station spreads + a front cast/kingdom spread + a certificate.
   • Cast: يوسف & مريم, guided by الحكيم the wise owl.
   • ART prompts are kept OUT of the book and exposed as window.QUEST.ART
     so the book stays clean & print-ready; prompts live in a separate doc.
   Bilingual (Arabic primary).
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var ST = window.YAQEEN_STATIONS || [];

  /* ── house art-style + recurring cast descriptions (for prompt consistency) ── */
  var STYLE =
    "Lavish magical Islamic children's-storybook illustration, warm painterly Disney/Pixar feel. " +
    "Deep starry indigo-and-purple night sky, glowing golden lantern light, an enchanted Islamic city of domes and minarets shimmering in the background, " +
    "rich gold-filigree accents and a sense of wonder. Luminous, highly detailed, high-resolution and print-ready. " +
    "The recurring heroes Youssef and Mariam are friendly children with warm, gentle faces; keep them identical every time. " +
    "Never depict any prophet or sacred figure, and never draw the Ka'bah with a face.";
  var YOUSSEF = "Youssef, a cheerful 10-year-old Muslim boy with warm light-brown skin, short dark wavy hair and big kind eyes, " +
    "wearing a teal-and-blue explorer's tunic with a hooded cloak and a small leather belt, holding a glowing golden lantern";
  var MARIAM  = "Mariam, a bright 9-year-old Muslim girl with warm skin and a soft patterned headscarf framing her smiling face, " +
    "wearing a royal-purple cloak over a cream dress, holding a glowing open book of light";
  var HAKEEM  = "Al-Hakeem, a wise friendly little owl with large amber eyes, soft brown-and-cream feathers, tiny round spectacles and a small gold-trimmed scholar's cloak";
  var CAST = YOUSSEF + "; " + MARIAM + "; and " + HAKEEM + ". Keep these three characters looking exactly the same in every illustration.";

  /* ── scene phrases keyed by station.scene ── */
  var SCENE_EN = {
    cell:'inside the glowing depths of a living cell', forest:'in a sunlit enchanted green forest',
    night:'flying through a starry night sky', ice:'on the bright polar lands of ice and snow',
    web:'in a moonlit glade where a silver thread shimmers between the trees', sky:'high in the open sky above seas and deserts',
    ocean:'in a colourful coral reef deep under the sea', desert:'in a vast golden sand desert under a warm sun',
    river:'beside a flowing river with a wooden dam', hive:'inside a golden honeycomb city of perfect hexagons',
    soil:'in a secret underground city of tunnels and rooms', body:'in a wondrous glowing world inside the human body',
    space:'among glowing planets and stars in outer space', cloud:'up among soft rain clouds and rainbows',
    deep:'on the dark, mysterious ocean floor lit by glowing creatures'
  };
  var SCENE_AR = {
    cell:'أعماقِ الخلِيّةِ الحَيّةِ المُضيئة', forest:'غابةِ العجائبِ الخضراء',
    night:'سماءِ اللّيلِ المُرصَّعةِ بالنّجوم', ice:'أرضِ الجليدِ القُطبيّةِ البيضاء',
    web:'فجوةٍ يتلألأُ فيها خيطٌ فضّيٌّ بينَ الأغصان', sky:'أعالي السّماءِ فوقَ البحارِ والصّحاري',
    ocean:'أعماقِ البحرِ المُلوَّن', desert:'الصّحراءِ الذّهبيّةِ الواسعة',
    river:'ضفّةِ النّهرِ الجاري', hive:'مدينةِ النّحلِ الذّهبيّة',
    soil:'المدينةِ السّرّيّةِ تحتَ الأرض', body:'عالَمٍ عجيبٍ داخلَ جسمِ الإنسان',
    space:'بينَ النّجومِ والكواكب', cloud:'بينَ السّحبِ ودورةِ الماء',
    deep:'قاعِ المُحيطِ المُظلمِ المُضيء'
  };
  function sEn(s){ return SCENE_EN[s] || 'in its wonderful natural home'; }
  function sAr(s){ return SCENE_AR[s] || 'عالَمِ العجائب'; }
  function subjEn(st){ var p=st.title.en.split('—'); return p[p.length-1].trim(); }
  function subjAr(st){ var p=st.title.ar.split('—'); return p[p.length-1].trim(); }
  function stripB(s){ return String(s).replace(/<\/?b>/g,''); }

  /* ── shared cast (filled once on the front spread) ── */
  var CHARACTERS = [
    { slot:'q-char0', name:{ar:'يوسف',en:'Youssef'}, role:{ar:'بَطلٌ شُجاعٌ مُحبٌّ للاكتشاف', en:'A brave young explorer'},
      prompt:"Character portrait of "+YOUSSEF+", smiling and curious, head-and-shoulders, on a soft glowing indigo background. "+STYLE },
    { slot:'q-char1', name:{ar:'مريم',en:'Mariam'}, role:{ar:'ذكيّةٌ كثيرةُ التأمّل', en:'Clever and thoughtful'},
      prompt:"Character portrait of "+MARIAM+", thoughtful and kind, head-and-shoulders, on a soft glowing indigo background. "+STYLE },
    { slot:'q-char2', name:{ar:'الحكيم',en:'Al-Hakeem'}, role:{ar:'بومةُ الأكاديميةِ وصاحبُ الحكمة', en:'The wise owl guide'},
      prompt:"Character portrait of "+HAKEEM+", warm and wise, facing forward, on a soft glowing indigo background. "+STYLE }
  ];
  var MAP = {
    slot:'q-map', label:{ar:'خريطةُ مملكةِ العجائب', en:'Map of the Kingdom of Wonders'},
    locations:['أكاديمية اليقين','مدينة النحل','غابة العجائب','وادي الخلق','بحر الأعماق','صحراء الآيات'],
    prompt:"An antique treasure-map of an enchanted kingdom called «مملكة العجائب», on aged parchment with a compass rose and gold ink. "+
      "Mark labelled places with tiny icons: a central academy-castle of light, a golden bee-city, a glowing forest, a creation valley, a deep glowing sea, and a desert of signs. Warm hand-drawn map style. "+STYLE
  };

  /* ── per-station quest builder ── */
  function buildQuest(st){
    var subjA = subjAr(st), subjE = subjEn(st);
    var refrain = { ar:'ما خُلِقَ هذا عبثاً؛ فلكلِّ تصميمٍ بديعٍ مُصمِّمٌ حكيم.', en:'This was not made in vain — every wondrous design has a wise Designer.' };

    var tests = st.match.pairs.map(function(p,i){
      return {
        slot:'q'+st.num+'-test'+i,
        title:p.tool, caption:p.job,
        prompt:"Storybook illustration: a close, magical view of "+p.tool.en+" of the "+subjE+" — it "+p.job.en.toLowerCase()+". Set "+sEn(st.scene)+". One of the heroes (Youssef or Mariam) looks on in wonder. "+STYLE
      };
    });

    return {
      id:st.id, num:st.num, color:st.color, emoji:st.emoji||st.icon, icon:st.icon,
      value:{ar:'عجائب الخلق', en:'Wonders of Creation'},
      title:st.title,
      subtitle:st.logicKey,
      hero:{ slot:'q'+st.num+'-hero', label:{ar:'مشهدُ '+subjA, en:subjE+' scene'},
        prompt:"Wide storybook hero scene: "+CAST+" exploring "+sEn(st.scene)+". The wonder of this page is "+subjE+", shown large, glowing and full of wonder; Youssef lifts his lantern and Mariam holds her book of light, al-Hakeem the owl beside them. Leave calm space at the top for a title. "+STYLE },
      storyStart:{ label:{ar:'بدايةُ القصة', en:'How it begins'},
        ar:'في مملكةِ العجائب، قادَ الحكيمُ — بومةُ الأكاديمية — يوسفَ ومريمَ إلى '+sAr(st.scene)+'، وقال: «تعالَيا نكتشفُ سرّاً مِن أسرارِ خلقِ الله!».',
        en:'In the Kingdom of Wonders, al-Hakeem the wise owl led Youssef and Mariam to '+sEn(st.scene)+', saying: "Come, let us uncover a secret of Allah\'s creation!"' },
      wonder:{ label:{ar:'العجيبة', en:'The wonder'}, ar:st.complexity.ar, en:st.complexity.en },
      mrChance:st.mrChance, bust:st.myth.bust,
      questTitle:{ ar:'رحلةُ البحثِ عن سرِّ '+subjA, en:'The quest for the secret of the '+subjE },
      intro:{ ar:'في '+sAr(st.scene)+' وقفَ يوسفُ ومريمُ أمامَ سرٍّ عجيب. قال الحكيم: «لن تَكشِفا السرَّ إلّا بثلاثةِ اكتشافات!». فبدآ الرحلة…',
        en:'There, Youssef and Mariam stood before an amazing secret. "You will only unlock it through three discoveries!" said al-Hakeem. And so the quest began…' },
      mission:{ ar:'مهمّتُكما: تأمَّلا في هذه الأعجوبةِ الثلاثَ مرّات، واكتشِفا مَنِ الذي علَّمها وأتقَنَها… ثمّ عودا بنجمةِ اليقين.',
        en:'Your mission: make three discoveries about this wonder, find out Who taught and perfected it… then return with the Star of Certainty.' },
      tests:tests,
      resolution:{ slot:'q'+st.num+'-res', label:{ar:'عودةُ نجمةِ اليقين', en:'Return of the Star'},
        title:{ar:'عودةُ نجمةِ اليقين', en:'Return of the Star of Certainty'},
        text:{ ar:'عادَ يوسفُ ومريمُ إلى أكاديميةِ اليقين وقد امتلأَ قلباهما دهشة. فقال الحكيم: «'+stripB(st.myth.bust.ar)+' وما كانَ بهذا الإتقانِ لا ينشأُ صُدفةً، بل هو صنعةُ خالقٍ حكيم». فأشرقَت في صدريهما نجمةُ اليقين ✨.',
          en:'Youssef and Mariam returned to the Academy of Certainty, hearts full of awe. Al-Hakeem said: "'+stripB(st.myth.bust.en)+' Such mastery never arises by chance — it is the craft of a wise Creator." And the Star of Certainty shone in their hearts ✨.' },
        prompt:"Storybook scene: Youssef and Mariam back at the glowing Academy of Certainty with al-Hakeem the owl, a radiant golden Star of Certainty rising between them, joyful and full of awe, subtly themed around "+subjE+". "+STYLE },
      ayah:{ text:st.reflection.ayah, ref:st.reflection.ref, explain:st.reflection.explain },
      experiment:st.experiment, familyQ:st.familyQ,
      nameOfAllah:{ ar:st.nameOfAllah.name.ar, en:st.nameOfAllah.name.en, meaning:st.nameOfAllah.meaning },
      lessons:[ st.logicKey, st.myth.bust, refrain ],
      message:st.dua,
      star:{ title:{ar:'نجمةُ اليقين', en:'Star of Certainty'},
        text:{ ar:'اجمعْ نجومَ اليقينِ كلّما تأمَّلتَ في عجائبِ الخلقِ مِن حولِك.', en:'Collect Stars of Certainty each time you reflect on the wonders around you.'} },
      badges:[
        { icon:st.badge.icon, label:st.badge.title },
        { icon:'🔍', label:{ar:'التأمّل', en:'Reflection'} },
        { icon:'🦉', label:{ar:'الحكمة', en:'Wisdom'} },
        { icon:'📖', label:{ar:'الآية', en:'The Sign'} },
        { icon:'⭐', label:{ar:'اليقين', en:'Certainty'} }
      ]
    };
  }

  var QUESTS = ST.map(buildQuest);

  /* ── flat ART prompt list for the separate prompts document ── */
  var ART = [];
  CHARACTERS.forEach(function(c){ ART.push({ group:'shared', groupLabel:{ar:'الشخصيات والخريطة (تُملأ مرّة واحدة)',en:'Cast & map (fill once)'}, slot:c.slot, label:{ar:'شخصية: '+c.name.ar, en:'Character: '+c.name.en}, prompt:c.prompt }); });
  ART.push({ group:'shared', groupLabel:{ar:'الشخصيات والخريطة (تُملأ مرّة واحدة)',en:'Cast & map (fill once)'}, slot:MAP.slot, label:{ar:'خريطة المملكة', en:'Kingdom map'}, prompt:MAP.prompt });
  QUESTS.forEach(function(q){
    var gl={ar:'المحطة '+q.num+' · '+q.title.ar, en:'Station '+q.num+' · '+q.title.en};
    ART.push({ group:q.num, groupLabel:gl, slot:q.hero.slot, label:{ar:'المشهد الرئيسي', en:'Hero scene'}, prompt:q.hero.prompt });
    q.tests.forEach(function(t,i){ ART.push({ group:q.num, groupLabel:gl, slot:t.slot, label:{ar:'اكتشاف '+(i+1)+': '+t.title.ar, en:'Discovery '+(i+1)+': '+t.title.en}, prompt:t.prompt }); });
    ART.push({ group:q.num, groupLabel:gl, slot:q.resolution.slot, label:{ar:'مشهد النهاية', en:'Resolution scene'}, prompt:q.resolution.prompt });
  });

  window.QUEST = { STYLE:STYLE, CAST:CAST, CHARACTERS:CHARACTERS, MAP:MAP, QUESTS:QUESTS, ART:ART };
})();
