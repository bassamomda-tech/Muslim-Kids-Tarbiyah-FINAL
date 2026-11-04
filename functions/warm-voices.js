/* warm-voices.js — generate the natural (Gemini) voice for all podcasts ahead of time,
   so the first child who presses ▶ does not wait. Run once after deploying (and again
   after adding new episodes):
       WARM_KEY="$(firebase functions:secrets:access GEMINI_API_KEY --project muslim-kids-tarbiyah)" node warm-voices.js https://narrate-XXXX-uc.a.run.app
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
// proves to the server that this is the site owner (so the daily / per-visitor limits don't block warming):
//   WARM_KEY="$(firebase functions:secrets:access GEMINI_API_KEY --project muslim-kids-tarbiyah)" node warm-voices.js <URL>
const WARM = process.env.WARM_KEY ? require('crypto').createHash('sha256').update('warm|' + process.env.WARM_KEY.trim()).digest('hex') : '';
if (!WARM) console.log('(no WARM_KEY set: the server limits of new clips per hour apply)');
const jobs = [];
Object.values(window.SKILLS || {}).forEach((S) => S.stations.forEach((st) => (st.podcast ? st.podcast.lines : []).forEach((l) => {
  const who = (S.cast || {})[l[0]] || {};
  [['ar', l[1]], ['en', l[2]]].forEach(([lang, t]) => chunks(String(t).replace(/<[^>]+>/g, '')).forEach((text) => jobs.push({ text, lang, gender: who.g || 'female', style: 'podcast' })));
})));
/* WARM_FILE=../tools/voice-warm/stories-ar.jsonl → warm the site's STORIES instead of the podcasts: a list of the
   exact read-aloud requests, recorded page by page (tools/voice-warm/README.md). In list order = most-read first. */
if (process.env.WARM_FILE) {
  jobs.length = 0;
  fs.readFileSync(path.resolve(process.env.WARM_FILE), 'utf8').split('\n').filter(Boolean).forEach((l) => {
    try { const j = JSON.parse(l); jobs.push({ text: j.text, lang: j.lang || 'ar', gender: j.gender || 'female', style: j.style || 'story' }); } catch (e) {}
  });
}
/* Arabic lines first (most children listen in Arabic); WARM_LANG=ar → Arabic only */
if (process.env.WARM_LANG) { for (let i = jobs.length - 1; i >= 0; i--) if (jobs[i].lang !== process.env.WARM_LANG) jobs.splice(i, 1); }
jobs.sort((a, b) => (a.lang === 'ar' ? 0 : 1) - (b.lang === 'ar' ? 0 : 1));
/* WARM_SHARD=1/3 (2/3, 3/3) → this run does every 3rd clip, so 3 runs can work side by side */
const SH = (process.env.WARM_SHARD || '').match(/^(\d+)\/(\d+)$/);
if (SH) { const k = +SH[1] - 1, n = +SH[2]; for (let i = jobs.length - 1; i >= 0; i--) if (i % n !== k) jobs.splice(i, 1); }
console.log('clips to prepare:', jobs.length);
(async () => {
  let done = 0, made = 0, fallback = 0, failed = 0, wait = 7000, inRow = 0;   // Tier 1 allows 10 voice requests a minute → one every 7 s
  for (const j of jobs) {
    let ok = false;
    for (let t = 0; t < 4 && !ok; t++) {
      try {
        const r = await fetch(EP, { method: 'POST', headers: Object.assign({ 'Content-Type': 'application/json' }, WARM ? { 'x-mk-warm': WARM } : {}), body: JSON.stringify(j) });
        const o = await r.json();
        if (!o.url) throw new Error(JSON.stringify(o));
        if (o.engine && o.engine !== 'gemini' && ++inRow >= 12) {   // 12 backup-voice answers in a row = Gemini's daily limit is used up
          console.log('Gemini daily limit reached — stopping. Run again after the daily reset (about 8 am UK time).'); process.exit(0);
        }
        if (o.engine && o.engine !== 'gemini') { fallback++; wait = Math.min(60000, Math.max(15000, wait * 2)); await new Promise((res) => setTimeout(res, wait)); continue; }   // Gemini busy: slow down, try again
        inRow = 0; ok = true; if (!o.cached) made++; else wait = 300; if (!o.cached) wait = Math.max(7000, wait * 0.8);
      } catch (e) { await new Promise((res) => setTimeout(res, 5000)); }
    }
    if (!ok) failed++;
    if (++done % 25 === 0) console.log(done + '/' + jobs.length, '(new ' + made + ', retried busy ' + fallback + ', failed ' + failed + ')');
    await new Promise((res) => setTimeout(res, wait));   // gentle on Gemini's per-minute limit
  }
  console.log('finished:', done, 'clips — new', made, '· failed', failed, '(run again to retry failures)');
})();
