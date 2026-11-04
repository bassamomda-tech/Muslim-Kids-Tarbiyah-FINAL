# Story voice warming

`stories-ar.jsonl` lists every Arabic line the site's story readers send to the voice service
(one JSON per line: text, lang, gender, style, page). It was recorded by opening each story page
in a browser and pressing play, so the text matches exactly what children hear.

Order (most used first): Little Library → Sunnah stories & Prophet moments → Heroes Fortress
stories → Little District houses → faith/quds/heroes journeys & apps → other Treasures cards.

Warm it from Cloud Shell (inside `functions/`), 3 workers side by side:

    WARM_FILE=../tools/voice-warm/stories-ar.jsonl WARM_LANG=ar WARM_SHARD=1/3 node warm-voices.js
    WARM_FILE=../tools/voice-warm/stories-ar.jsonl WARM_LANG=ar WARM_SHARD=2/3 node warm-voices.js
    WARM_FILE=../tools/voice-warm/stories-ar.jsonl WARM_LANG=ar WARM_SHARD=3/3 node warm-voices.js

Each run stops by itself when Gemini's daily limit is used up (about 440 clips a day).
Run it again the next day: clips already made are skipped in a fraction of a second,
so it simply carries on where it stopped. New stories you add later are voiced the
first time a child plays them, and then kept.
