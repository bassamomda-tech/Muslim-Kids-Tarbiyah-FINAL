# Quran verses → Sheikh Al-Husary

Any Quran quote written between ﴿ ﴾ on the site is played in Al-Husary's recitation.

* `corners/shared/quran-verse-map.js` — built-in list of the site's quotes (instant).
* Quotes added later are recognised automatically by the voice server (`functions/quran-match.js`,
  data `functions/quran-words.json`) — nothing to run.
* Optional, after adding many verses (makes them instant): `node tools/quran-verse-map/build.js`
* `fetch.py` re-downloads the word lists + Al-Husary word timings from quran.com into `data/`
  (only needed to rebuild `functions/quran-words.json`).
