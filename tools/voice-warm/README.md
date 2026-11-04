# Voice warming (preparing the Gemini voice ahead of time)

**It runs by itself.** The `warmVoices` function (functions/index.js) wakes every 30 minutes,
works down `functions/warm-list.jsonl` and makes the Gemini clips that are not saved yet,
until Gemini's daily allowance is used up (about 440 clips a day on Tier 1). Next morning it
carries on where it stopped.

Children are never slowed down by it: the website gets the saved Gemini clip, or — for a line
that is not ready yet — the Google voice at once, which is saved too.

Order of the list: Arabic podcasts → Arabic stories (most read first: Little Library, Sunnah
stories & Prophet moments, Heroes Fortress, Little District houses, journeys & apps, other
Treasures cards) → English podcasts.

## After adding podcasts or stories

    node tools/voice-warm/build-list.js          # rebuilds functions/warm-list.jsonl
    cd functions && firebase deploy --only functions --project muslim-kids-tarbiyah

`stories-ar.jsonl` is the recorded list of story lines (one JSON per line: text, lang, gender,
style, page). Stories not in it are still voiced: Google voice the first time, then saved.

## Switches (functions/.env)

- `TTS_WARM=off` — pause the automatic warming.
- `TTS_LIVE_GEMINI=on` — let visitors create Gemini clips themselves (slower for them; only
  worth it once the list is finished, for brand-new lines).

Progress is kept in Firestore: `tts_limits/warm_state` (`i` of `total`, `madeToday`).
`functions/warm-voices.js` still works for warming by hand from Cloud Shell.
