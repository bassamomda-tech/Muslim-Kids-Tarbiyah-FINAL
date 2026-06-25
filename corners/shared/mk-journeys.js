/* ════════════════════════════════════════════════════════════════
   mk-journeys.js — Canonical registry of EVERY station journey.
   Powers the parents dashboard, per-corner bags, and downloads.
   completedOf(j) reads the child's live localStorage progress.
   For corners that share one done-key (ibada/sport) each journey is
   split by its station-id prefix (idMatch).
   Window globals: MK_JOURNEYS (array), MK_J (helpers).
   ════════════════════════════════════════════════════════════════ */
(function () {
  var J = [
    /* ─── منارة العقيدة · Faith Minaret ─── */
    { id:'yaqeen',  corner:'aqeeda', total:20, icon:'🔬', color:'#27AE60', doneKey:'yaqeenDone',  page:'corners/faith-minaret/yaqeen.html',  name:{ar:'رحلة اليقين — عجائب المخلوقات', en:'Certainty — Wonders of Creation'} },
    { id:'lab',     corner:'aqeeda', total:10, icon:'🧪', color:'#E74C3C', doneKey:'labDone',     page:'corners/faith-minaret/lab.html',     name:{ar:'مختبر كشف الحقائق', en:'The Truth-Revealing Lab'} },
    { id:'tawheed', corner:'aqeeda', total:10, icon:'🕋', color:'#6C5CE7', doneKey:'tawheedDone', page:'corners/faith-minaret/tawheed.html', name:{ar:'رحلة التوحيد — البراهين', en:'Tawheed — The Proofs'} },
    { id:'maarifa', corner:'aqeeda', total:20, icon:'🌅', color:'#2E86DE', doneKey:'maarifaDone', page:'corners/faith-minaret/maarifa.html', name:{ar:'كيف عرفنا الله؟', en:'How We Knew Allah'} },
    { id:'aman',    corner:'aqeeda', total:15, icon:'🛡️', color:'#1ABC9C', doneKey:'amanDone',    page:'corners/faith-minaret/aman.html',    name:{ar:'سلسلة الأمان بالله', en:'Security With Allah'} },
    { id:'malaika', corner:'aqeeda', total:10, icon:'✨', color:'#8E7CC3', doneKey:'malaikaDone', page:'corners/faith-minaret/malaika.html', name:{ar:'رحلة جنود النور (الملائكة)', en:'Soldiers of Light (Angels)'} },
    { id:'kutub',   corner:'aqeeda', total:10, icon:'📜', color:'#2980B9', doneKey:'kutubDone',   page:'corners/faith-minaret/kutub.html',   name:{ar:'رحلة البلاغ (الكتب والرسل)', en:'The Message (Books & Messengers)'} },
    { id:'akhira',  corner:'aqeeda', total:11, icon:'🌉', color:'#C56B3E', doneKey:'akhiraDone',  page:'corners/faith-minaret/akhira.html',  name:{ar:'رحلة العبور (اليوم الآخر)', en:'The Crossing (Last Day)'} },
    { id:'qadar',   corner:'aqeeda', total:10, icon:'🖋️', color:'#3E7CB1', doneKey:'qadarDone',   page:'corners/faith-minaret/qadar.html',   name:{ar:'رحلة سر التقدير (القدر)', en:'The Decree (Qadar)'} },
    { id:'thabat',  corner:'aqeeda', total:12, icon:'🦁', color:'#C0392B', doneKey:'thabatDone',  page:'corners/faith-minaret/thabat.html',  name:{ar:'رحلة الأبطال (الثبات)', en:'The Heroes (Steadfastness)'} },

    /* ─── واحة العبادة · Worship Oasis (shared key: ibadaDone) ─── */
    { id:'salah',   corner:'ibada', total:34, icon:'🕌', color:'#117A8B', doneKey:'ibadaDone', idMatch:'salah-',   page:'corners/little-district/pages/ibada-journeys.html?j=salah',   name:{ar:'رحلة الصلاة', en:'The Prayer Journey'} },
    { id:'fasting', corner:'ibada', total:10, icon:'🌙', color:'#8E44AD', doneKey:'ibadaDone', idMatch:'fast-',    page:'corners/little-district/pages/ibada-journeys.html?j=fasting', name:{ar:'مدرسة الصيام', en:'Fasting School'} },
    { id:'adhkar',  corner:'ibada', total:20, icon:'🛡️', color:'#2980B9', doneKey:'ibadaDone', idMatch:'dhikr-',   page:'corners/little-district/pages/ibada-journeys.html?j=adhkar',  name:{ar:'درع الأذكار', en:'Shield of Adhkar'} },
    { id:'dua',     corner:'ibada', total:10, icon:'🤲', color:'#E67E22', doneKey:'ibadaDone', idMatch:'dua-',     page:'corners/little-district/pages/ibada-journeys.html?j=dua',     name:{ar:'خيط النور (الدعاء)', en:'Thread of Light (Du\'a)'} },
    { id:'zakah',   corner:'ibada', total:10, icon:'🎁', color:'#27AE60', doneKey:'ibadaDone', idMatch:'zakah-',   page:'corners/little-district/pages/ibada-journeys.html?j=zakah',   name:{ar:'كنز العطاء (الزكاة)', en:'Treasure of Giving (Zakah)'} },
    { id:'hajj',    corner:'ibada', total:10, icon:'🕋', color:'#C0392B', doneKey:'ibadaDone', idMatch:'hajj-',    page:'corners/little-district/pages/ibada-journeys.html?j=hajj',    name:{ar:'الرحلة الكبرى (الحج)', en:'The Grand Journey (Hajj)'} },

    /* ─── بستان القرآن · Quran & Sunnah Garden (115 stations across 4 sections) ─── */
    { id:'surahs',  corner:'quran', total:38, icon:'📜', color:'#1A9B7B', flagPrefix:'qg:',  page:'corners/little-district/pages/quran-surahs.html',    name:{ar:'حديقة السور القصيرة', en:'Short Surahs Garden'} },
    { id:'qstories',corner:'quran', total:20, icon:'🏛️', color:'#2E8B57', flagPrefix:'qs:',  page:'corners/little-district/pages/quran-stories.html',   name:{ar:'قصص القرآن', en:"Qur'anic Stories"} },
    { id:'hadith40',corner:'quran', total:42, icon:'🕌', color:'#0E6B53', flagPrefix:'hd:',  page:'corners/little-district/pages/hadith.html',          name:{ar:'الأربعون النووية', en:'The 40 Hadith of Nawawi'} },
    { id:'qsahib',  corner:'quran', total:15, icon:'📖', color:'#1A9B7B', doneKey:'qsahibDone', page:'corners/little-district/pages/quran-companions.html', name:{ar:'أنا صاحبك القرآن', en:'I Am Your Companion, the Qur’an'} },

    /* ─── حيّنا الصغير · Our Little District (district engine: ld:) ─── */
    { id:'district', corner:'social', total:34, icon:'🏘️', color:'#D4A017', ldKey:true, page:'corners/little-district/pages/social.html', name:{ar:'بيوت الحيّ — الأخلاق والآداب', en:'District Houses — Manners & Etiquette'} },

    /* ─── النادي الرياضي · Sports Club (shared key: sportDone) ─── */
    { id:'fitrah',    corner:'sport', total:10, icon:'🌿', color:'#16A085', doneKey:'sportDone', idMatch:'fitrah-',    page:'corners/little-district/pages/sport.html?j=fitrah',    name:{ar:'سنن الفطرة', en:'The Fitrah Sunnahs'} },
    { id:'sport',     corner:'sport', total:10, icon:'💪', color:'#27AE60', doneKey:'sportDone', idMatch:'sport-',     page:'corners/little-district/pages/sport.html?j=sport',     name:{ar:'الرياضة والقوة', en:'Sport & Strength'} },
    { id:'warning',   corner:'sport', total:10, icon:'🛡️', color:'#E67E22', doneKey:'sportDone', idMatch:'warning-',   page:'corners/little-district/pages/sport.html?j=warning',   name:{ar:'احذر هذه الآفات', en:'Beware These Dangers'} },
    { id:'character', corner:'sport', total:15, icon:'🦁', color:'#2980B9', doneKey:'sportDone', idMatch:'character-', page:'corners/little-district/pages/sport.html?j=character', name:{ar:'قوة الشخصية', en:'Strength of Character'} },

    /* ─── أكاديمية المبدعين · Innovators' Academy ─── */
    { id:'mubdi',  corner:'academy', total:15, icon:'💡', color:'#1FAE8C', doneKey:'mubdiDone',  page:'corners/heroes-fortress/mubdi.html',  name:{ar:'كن أنت المبدع', en:'Be the Creator'} },
    { id:'lugha',  corner:'academy', total:15, icon:'📜', color:'#C9962E', doneKey:'lughaDone',  page:'corners/heroes-fortress/lugha.html',  name:{ar:'لغتي العربية', en:'My Arabic Language'} },
    { id:'manara', corner:'academy', total:10, icon:'🏛️', color:'#C9A227', doneKey:'manaraDone', page:'corners/heroes-fortress/manara.html', name:{ar:'منارة العالم', en:"The World's Lighthouse"} },
    { id:'explorers', corner:'academy', total:14, icon:'🔭', color:'#1F8FB0', doneKey:'explorersDone', page:'corners/heroes-fortress/academy-explorers.html', name:{ar:'رحلة المستكشفين', en:"The Explorers' Journey"} },
    { id:'minds',     corner:'academy', total:18, icon:'📖', color:'#C0902E', doneKey:'mindsDone',     page:'corners/heroes-fortress/academy-minds.html',     name:{ar:'عقول منيرة', en:'Illuminating Minds'} },
    { id:'khataba',   corner:'academy', total:6,  icon:'🎤', color:'#7E5BD0', doneKey:'khatabaDone',   page:'corners/heroes-fortress/academy-khataba.html',   name:{ar:'الخطابة والإلقاء', en:'Oratory & Recitation'} },

    /* ─── ركن القدس والأمة · Al-Quds & Ummah ─── */
    { id:'aqsa',    corner:'quds', total:10, icon:'🕌', color:'#1F8B6E', doneKey:'aqsaDone',    page:'corners/quds-ummah/aqsa.html',    name:{ar:'رحلة الأقصى', en:'Journey of Al-Aqsa'} },
    { id:'wahda',   corner:'quds', total:10, icon:'🤝', color:'#1577A6', doneKey:'wahdaDone',   page:'corners/quds-ummah/wahda.html',   name:{ar:'الأمة الواحدة', en:'The One Ummah'} },
    { id:'taghyir', corner:'quds', total:10, icon:'🌅', color:'#C0902E', doneKey:'taghyirDone', page:'corners/quds-ummah/taghyir.html', name:{ar:'رحلة التغيير', en:'Journey of Change'} },
  ];

  function arr(key){ try { return JSON.parse(localStorage.getItem(key) || '[]') || []; } catch(e){ return []; } }

  /* how many stations the child completed in this journey */
  function completedOf(j){
    if (j.ldKey){
      // district: count ld:done:* flags that are '1'
      var n = 0;
      for (var i=0;i<localStorage.length;i++){ var k=localStorage.key(i); if(k.indexOf('ld:done:')===0 && localStorage.getItem(k)==='1') n++; }
      return Math.min(n, j.total);
    }
    if (j.flagPrefix){
      // per-slug flags: <prefix>done:<slug> === '1'
      var m = 0, pf = j.flagPrefix + 'done:';
      for (var x=0;x<localStorage.length;x++){ var kk=localStorage.key(x); if(kk.indexOf(pf)===0 && localStorage.getItem(kk)==='1') m++; }
      return Math.min(m, j.total);
    }
    var a = arr(j.doneKey);
    if (j.idMatch){ return a.filter(function(id){ return String(id).indexOf(j.idMatch)===0; }).length; }
    return Math.min(a.length, j.total);
  }
  function pctOf(j){ return j.total ? Math.round(completedOf(j)/j.total*100) : 0; }
  function byCorner(cornerId){ return J.filter(function(j){ return j.corner===cornerId; }); }

  /* aggregate stats for a corner */
  function cornerStats(cornerId){
    var js = byCorner(cornerId), done=0, total=0, journeysDone=0, started=0;
    js.forEach(function(j){ var c=completedOf(j); done+=c; total+=j.total; if(c>=j.total&&j.total>0) journeysDone++; if(c>0) started++; });
    return { journeys:js, done:done, total:total, pct: total?Math.round(done/total*100):0, journeysDone:journeysDone, started:started, count:js.length };
  }

  window.MK_JOURNEYS = J;
  window.MK_J = { completedOf:completedOf, pctOf:pctOf, byCorner:byCorner, cornerStats:cornerStats };
})();
