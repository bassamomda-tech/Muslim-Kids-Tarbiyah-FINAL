/* warm-voices.js — generate the natural (Gemini) voice for all podcasts ahead of time,
   so the first child who presses ▶ does not wait. Run once after deploying (and again
   after adding new episodes):
       node warm-voices.js https://narrate-XXXX-uc.a.run.app
   It only calls YOUR narrate function; each clip is saved there and reused for everyone. */
const fs = require('fs'), path = require('path');
const EP = process.argv[2];
if (!EP) { console.log('usage: node warm-voices.js <narrate URL>'); process.exit(1); }
const DATA = path.join(__dirname, '..', 'corners', 'skills', 'data');
global.window = {};
fs.readdirSync(DATA).filter((f) => f.endsWith('.js')).forEach((f) => eval(fs.readFileSync(path.join(DATA, f), 'utf8')));
// split long lines exactly like the website does (mk-tts-cloud.js), so every warmed clip is the one a child asks for
const TTS = fs.readFileSync(path.join(__dirname, '..', 'corners', 'shared', 'mk-tts-cloud.js'), 'utf8');
const chunks = new Function(TTS.match(/function chunks[\s\S]*?\n  }\n/)[0] + 'return chunks;')();
const jobs = [];
Object.values(window.SKILLS || {}).forEach((S) => S.stations.forEach((st) => (st.podcast ? st.podcast.lines : []).forEach((l) => {
  const who = (S.cast || {})[l[0]] || {};
  [['ar', l[1]], ['en', l[2]]].forEach(([lang, t]) => chunks(String(t).replace(/<[^>]+>/g, '')).forEach((text) => jobs.push({ text, lang, gender: who.g || 'female', style: 'podcast' })));
})));
console.log('clips to prepare:', jobs.length);
(async () => {
  let done = 0, made = 0, failed = 0;
  for (const j of jobs) {
    try {
      const r = await fetch(EP, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(j) });
      const o = await r.json(); if (!o.url) throw new Error(JSON.stringify(o));
      if (!o.cached) made++;
    } catch (e) { failed++; }
    if (++done % 50 === 0) console.log(done + '/' + jobs.length, '(new ' + made + ', failed ' + failed + ')');
    await new Promise((res) => setTimeout(res, 400));   // gentle on the API rate limit
  }
  console.log('finished:', done, 'clips — new', made, '· failed', failed, '(run again to retry failures)');
})();
