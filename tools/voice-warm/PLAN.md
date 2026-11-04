# Voice plan — best voice, (almost) no ongoing cost

Agreed 4 Nov 2026. Voice: **Gemini** (Sulafat female, Achird male, Modern Standard Arabic).

## Where the money goes

| What | When | Rough cost |
|---|---|---|
| Making a clip | once per line, ever | whole site (~10,400 lines) ≈ $40–75 one time |
| Playing a saved clip | every time a child listens | today: Firebase function call + Storage download → free at small traffic, a few $/month with thousands of daily users |
| New stories / podcasts later | once per new line | cents |

Goal: make **playing** free forever, so the only cost left is making new lines.

## Phase 1 — warm everything with Gemini (running now)

- The server's `warmVoices` function (functions/index.js) runs every 30 min and works down
  `functions/warm-list.jsonl` until Gemini's daily allowance (~440 clips) is used up.
- Order: Arabic podcasts (905) → Arabic stories (8,494, most-read first) → English podcasts (974).
- Visitors never wait: a line that is not ready yet is read at once in the Google voice (saved too).
- Every Gemini recording is checked for sound before it is saved (the 32 kbps silent-clip bug of
  3–4 Nov must never return: the encoder stays at 48 kbps).
- A daily check (9:47 pm UK) reports progress and tests 3 new clips for sound.
- Expected finish: about the end of November 2026.

## Phase 2 — move the clips to Cloudflare R2 (free downloads)

Why R2: the site already runs through Cloudflare, and R2 charges **nothing for downloads**.
Free every month: 10 GB storage, 1 million uploads, 10 million reads. All clips together are
about 0.5–1 GB, so the site stays inside the free allowance even with many thousands of children.
(R2 asks for a card on file, but nothing is charged inside the free allowance.)

### What the owner sets up (about 15 minutes, Cloudflare dashboard)
1. **R2 → Create bucket** named `tarbiyah-voices`.
2. Bucket → **Settings → Custom domain** → `audio.tarbiyahkids.uk` (makes the files public, served by Cloudflare's cache).
3. **R2 → Manage API tokens → Create token** with "Object Read & Write" on that bucket.
   Paste the keys **only into Cloud Shell** when asked — never into a chat or a website file.

### Copying the clips (one command in Cloud Shell, prepared when Phase 1 ends)
- `rclone` copies `gs://muslim-kids-tarbiyah.firebasestorage.app/tts/` → `r2:tarbiyah-voices/tts/`
  (same file names, so nothing needs renaming). Silent pre-4-Nov clips and `fallback-` clips are skipped.
- The same command is re-run after adding new stories (it only copies new files).

### The website change (corners/shared/mk-tts-cloud.js)
- The browser works out a clip's file name itself (SHA-1 of
  `gemini|fusha2|gemini-2.5-flash-preview-tts|<voice>|<style>|<text>`, the same name the server uses).
- A small list of ready clips (`voices-index.json`, ~100 KB, cached) says which lines are on R2.
- Ready line → play straight from `https://audio.tarbiyahkids.uk/tts/...` — **no server call, no cost**.
- Not on the list → ask the `narrate` server exactly as today (brand-new lines only).
- Quran verses keep playing Sheikh Al-Husary from everyayah.com (already free).

### After Phase 2
- Firebase is used only for brand-new lines → stays inside its free allowance.
- `warmVoices` can stay on: it voices new lines in Gemini; the copy command then moves them to R2.
- Optional: set a Google Cloud budget alert (e.g. $10/month) as a safety net.

## Rules learned the hard way
- Listen to (or measure) new clips after any change to the voice code — never just check that files were saved.
- Show every change before it is uploaded; everything stays on `main`.
- Never paste API keys into chat or website files.
