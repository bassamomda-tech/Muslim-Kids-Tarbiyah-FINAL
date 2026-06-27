# Cloud Text-to-Speech — setup & deploy

This folder is a **Firebase Cloud Function** that gives the website natural
Google Arabic/English narration. It holds the Google credentials securely on
the server (never in the browser) and caches every clip so replays are free.

You only do this ONCE. After it's live, the whole site uses the natural voice.

---

## STEP A — Console (works on a tablet or any browser)

1. **Firebase Console** → https://console.firebase.google.com → open the
   `muslim-kids-tarbiyah` project → bottom-left, click the plan name →
   **upgrade to "Blaze" (pay-as-you-go)**. It keeps the free monthly
   allowance; you only pay if you exceed it (caching makes that unlikely).
2. **Google Cloud Console** → https://console.cloud.google.com → make sure the
   same project is selected (top bar) → search **"Cloud Text-to-Speech API"**
   → open it → **Enable**.

---

## STEP B — Deploy the function

### Option 1 · Google Cloud Shell  ✅ works on a TABLET (no install)

1. Go to **https://console.cloud.google.com** and confirm the
   `muslim-kids-tarbiyah` project is selected.
2. Tap the **terminal icon** `>_` in the top-right ("Activate Cloud Shell").
   A black terminal opens at the bottom of the page.
3. Type these lines one at a time (paste + Enter). Replace the GitHub URL with
   your repo's URL:
   ```
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>/functions
   npm install
   firebase deploy --only functions --project muslim-kids-tarbiyah
   ```
   (If it asks to authorize, tap **Authorize**.)
4. When it finishes it prints a URL like:
   ```
   https://us-central1-muslim-kids-tarbiyah.cloudfunctions.net/narrate
   ```
   **Copy that URL.**

### Option 2 · A computer (developer)

```
npm install -g firebase-tools
firebase login
cd functions
npm install
firebase deploy --only functions
```

---

## STEP C — Switch it on (one edit)

Open `corners/shared/mk-system.js`, find:
```js
var TTS_ENDPOINT = '';
```
Paste your URL inside the quotes:
```js
var TTS_ENDPOINT = 'https://us-central1-muslim-kids-tarbiyah.cloudfunctions.net/narrate';
```
Save → commit/push. Every read-aloud button now uses the natural voice, with
the browser voice as an automatic fallback. Done.

---

## Change the voice
In `functions/index.js`, the `VOICES` object sets the voices. Arabic options
include `ar-XA-Wavenet-A/B/C/D`. Audition them at
https://cloud.google.com/text-to-speech then change the `name` and redeploy
(`firebase deploy --only functions`).
