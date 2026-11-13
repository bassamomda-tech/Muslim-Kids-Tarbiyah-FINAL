/* فيديوهات الحلقات على يوتيوب: أضف رقم الحلقة ومعرّف الفيديو (الجزء بعد youtu.be/) فيظهر قسم «شاهد الحلقة» في صفحة الحلقة. */
window.SERIES_VIDEOS = {
  'akhlaq-series': { 1: 'MwOlLgxfIew' },
  'money-series': {},
  'fiqh-series': {},
  'anos-series': {},
  'nasheed-series': {}
};
window.seriesVideoSection = function (key, n) {
  var id = ((window.SERIES_VIDEOS || {})[key] || {})[n];
  return { icon: '🎬', h: { ar: 'شاهد الحلقة (فيديو)', en: 'Watch the episode' }, html: { ar: id ?
    '<div style="position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;background:#000"><iframe src="https://www.youtube-nocookie.com/embed/' + id +
    '?rel=0&cc_load_policy=1" title="فيديو الحلقة" style="position:absolute;inset:0;width:100%;height:100%;border:0" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>' +
    '<p style="text-align:center;margin-top:.5rem"><a href="https://youtu.be/' + id + '" target="_blank" rel="noopener">▶ شاهدها على يوتيوب</a></p>' : '' } };
};
