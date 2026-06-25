/* data/stories/ibnhaytham.js — Scientists · Ibn al-Haytham — sources: عيون الأنباء · إسلام ويب · موسوعات تاريخ العلوم · الدرر السنية */
window.HISN_STORIES = window.HISN_STORIES || {};
HISN_STORIES.ibnhaytham = [
  { icon:'👁️', scene:'mihrab', character:'🔬',
    title:{ ar:'كيف نرى؟ لغزٌ حلَّه ابنُ الهيثم', en:'How Do We See? A Riddle Ibn al-Haytham Solved' },
    pages:[
      { scene:'mihrab', character:'🔬',
        text:{ ar:'منذ القديم، تساءلَ الناسُ: كيف نرى الأشياءَ بأعينِنا؟ ظنَّ بعضُ الفلاسفةِ القدماءِ أنّ <b>العينَ تُرسِلُ شعاعاً</b> يخرجُ منها ويلمسُ الأشياءَ فنراها! لكنّ هذا كان خطأً.<br><br>جاءَ <b>ابنُ الهيثم</b> ولم يقبلْ هذه الفكرةَ لمجرّدِ أنّ القدماءَ قالوها. بل قرّرَ أن <b>يبحثَ ويُجرِّبَ بنفسِه</b>. درسَ الضوءَ والظلَّ والعينَ بتجاربَ دقيقة، حتى اكتشفَ الحقيقة: نحن نرى الأشياءَ لأنّ <b>الضوءَ ينعكسُ منها ويدخلُ إلى أعينِنا</b>! وكتبَ ذلك في كتابِه العظيمِ «المناظر». والأجملُ أنّه علّمَ العالمَ قاعدةً ذهبيّة: <b>لا تُصدِّقْ شيئاً لمجرّدِ أنّ الناسَ قالوه، بل تأكّدْ منه بالتجربةِ والدليل</b>. هذه القاعدةُ صارتْ أساسَ العلمِ الحديثِ كلِّه!',
          en:'Since ancient times, people wondered: how do we see things with our eyes? Some ancient philosophers thought the <b>eye sends out a ray</b> that touches things so we see them! But this was wrong.<br><br><b>Ibn al-Haytham</b> did not accept this idea merely because the ancients said it. He decided to <b>research and experiment himself</b>. He studied light, shadow, and the eye with precise experiments, until he discovered the truth: we see things because <b>light reflects from them and enters our eyes</b>! He wrote this in his great book "al-Manazir." Best of all, he taught the world a golden rule: <b>do not believe something merely because people said it — verify it by experiment and evidence</b>. This rule became the basis of all modern science!' },
        choice:{ q:{ar:'لماذا لم يقبلْ ابنُ الهيثمِ فكرةَ القدماءِ عن الرؤية؟',en:'Why did Ibn al-Haytham not accept the ancients\u2019 idea about vision?'},
          opts:[
            { t:{ar:'لأنّه أرادَ أن يتأكّدَ بالتجربةِ والدليلِ بنفسِه',en:'Because he wanted to verify by experiment and evidence himself'},c:true,exp:{ar:'نعم! لا تُصدِّقْ شيئاً حتى تتأكّدَ منه بالدليل.',en:'Yes! Don\u2019t believe something until you verify it with evidence.'} },
            { t:{ar:'لأنّه يكرهُ القدماء',en:'Because he hated the ancients'},c:false,exp:{ar:'لا، بل أرادَ الحقيقةَ بالدليل.',en:'No — he wanted the truth with evidence.'} },
            { t:{ar:'بلا سبب',en:'For no reason'},c:false,exp:{ar:'لا، بل لحبِّه للتثبّتِ والبحث.',en:'No — for his love of verification and research.'} },
          ] } },
    ],
    quiz:[
      { q:{ar:'ماذا اكتشفَ ابنُ الهيثمِ عن الرؤية؟',en:'What did Ibn al-Haytham discover about vision?'},
        opts:[ {t:{ar:'أنّنا نرى بانعكاسِ الضوءِ إلى أعينِنا',en:'That we see by light reflecting into our eyes'},c:true}, {t:{ar:'أنّ العينَ تُرسِلُ شعاعاً',en:'That the eye sends out a ray'},c:false}, {t:{ar:'أنّنا لا نرى',en:'That we don\u2019t see'},c:false} ] },
      { q:{ar:'ما القاعدةُ الذهبيّةُ التي علّمها للعالم؟',en:'What golden rule did he teach the world?'},
        opts:[ {t:{ar:'تأكّدْ بالتجربةِ ولا تُصدِّقْ بلا دليل',en:'Verify by experiment; don\u2019t believe without evidence'},c:true}, {t:{ar:'صدِّقْ كلَّ شيء',en:'Believe everything'},c:false}, {t:{ar:'قلّدِ القدماءَ دائماً',en:'Always imitate the ancients'},c:false} ] },
      { q:{ar:'ما أثرُ منهجِه على العلم؟',en:'What was his method\u2019s effect on science?'},
        opts:[ {t:{ar:'صارَ أساسَ العلمِ الحديثِ كلِّه',en:'It became the basis of all modern science'},c:true}, {t:{ar:'لا أثرَ له',en:'It had no effect'},c:false}, {t:{ar:'أضرَّ بالعلم',en:'It harmed science'},c:false} ] },
    ],
    moral:{ar:'لا تُصدِّقْ شيئاً لمجرّدِ أنّ الناسَ قالوه، بل تأكّدْ منه بالتجربةِ والدليل — فالتثبّتُ أساسُ العلمِ والحكمة.',en:'Don\u2019t believe something merely because people said it — verify it by experiment and evidence; verification is the basis of knowledge and wisdom.'},
    badge:{icon:'👁️',title:{ar:'وِسامُ التثبّتِ العلمي',en:'Badge of Scientific Verification'}},
    reflect:[ {ar:'هل تتأكّدُ من المعلوماتِ قبلَ أن تُصدِّقَها أو تنشرَها؟',en:'Do you verify information before believing or sharing it?'}, {ar:'كيف يساعدُك التفكيرُ العلميُّ على معرفةِ الحقيقة؟',en:'How does scientific thinking help you know the truth?'} ],
    didYouKnow:[ {ar:'كتابُ «المناظر» لابنِ الهيثمِ تُرجِمَ إلى اللاتينيّةِ وأثّرَ في علماءِ أوروبا قروناً — المصدر: موسوعات تاريخ العلوم',en:'Ibn al-Haytham\u2019s "al-Manazir" was translated into Latin and influenced European scientists for centuries — Source: history of science encyclopedias'}, {ar:'يُعَدُّ ابنُ الهيثمِ من أوائلِ من أرسى المنهجَ التجريبيَّ القائمَ على الملاحظةِ والاختبار — المصدر: عيون الأنباء',en:'Ibn al-Haytham is considered among the first to establish the experimental method based on observation and testing — Source: Uyun al-Anba\u2019'} ],
  },
];
