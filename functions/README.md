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

---

## 🎙️ Gemini voice — natural, warm Arabic for stories & podcasts

The `narrate` function now reads with **Gemini text-to-speech** (a warm storyteller voice; the
podcasts use a friendly "talk" style, host and child in two voices). Every sentence is generated
once and saved in Firebase Storage, then reused for every child. If Gemini is not set up or
fails, it falls back to the old Google voice automatically — the site never goes silent.

### 1. Get a Gemini API key (2 minutes)
1. Open **https://aistudio.google.com** and sign in with the Google account of the
   `muslim-kids-tarbiyah` project.
2. Click **Get API key → Create API key** → choose the project **muslim-kids-tarbiyah**.
3. Copy the key. **Never put it in the website files** — it only goes in the step below.
4. In **Google Cloud Console → Billing** make sure the project has billing on (it is already on
   "Blaze" for the current voice). Gemini TTS is billed per use; because every clip is saved once,
   the cost stays small. Check the current price on the AI Studio pricing page.

### 2. Store the key and deploy (Google Cloud Shell works from a tablet)
Open https://console.cloud.google.com → select `muslim-kids-tarbiyah` → the `>_` (Cloud Shell) icon, then:
```
git clone https://github.com/bassamomda-tech/Muslim-Kids-Tarbiyah-FINAL.git
cd Muslim-Kids-Tarbiyah-FINAL/functions
npm install
firebase functions:secrets:set GEMINI_API_KEY      # paste the key when asked
firebase deploy --only functions:narrate --project muslim-kids-tarbiyah
```
The website already points to the narrate function (`corners/shared/mk-system.js` →
`TTS_ENDPOINT`), so nothing else changes. If the deploy prints a **new** URL, put that URL in
`TTS_ENDPOINT`.

### 3. (Recommended) Prepare all podcast clips once
```
node warm-voices.js https://narrate-ltyvjxcneq-uc.a.run.app
```
Now the first child who presses ▶ hears the natural voice straight away.

### Change the voice or the model (optional)
Create `functions/.env` with any of:
```
GEMINI_TTS_MODEL=gemini-2.5-flash-preview-tts     # or the newer gemini-3.1-flash-tts-preview
GEMINI_VOICE_AR_F=Sulafat                         # warm female  (try: Vindemiatrix, Achernar, Aoede)
GEMINI_VOICE_AR_M=Achird                          # friendly male (try: Sadaltager, Iapetus, Charon)
```
then deploy again. Changing a voice makes new clips; the old ones are simply not used.

### Fusha, not dialect
Every Arabic request tells the voice to read **Modern Standard Arabic (الفصحى)** exactly as
written — no Egyptian or other dialect (ج = j, ق = q, ث/ذ as written). After deploying, open a
story and a podcast and listen. If a voice still sounds Egyptian:
1. try another voice (`GEMINI_VOICE_AR_F` / `GEMINI_VOICE_AR_M`) or the newer model
   (`GEMINI_TTS_MODEL=gemini-3.1-flash-tts-preview`), **or**
2. use Google's newer Modern-Standard-Arabic voices instead of Gemini:
   in Cloud Console → Text-to-Speech → *Voices*, pick an **ar-XA "Chirp3-HD"** voice you like, then in `functions/.env`:
   ```
   TTS_ENGINE=google
   GOOGLE_VOICE_AR_F=ar-XA-Chirp3-HD-<name>
   GOOGLE_VOICE_AR_M=ar-XA-Chirp3-HD-<name>
   ```
   and deploy again.

