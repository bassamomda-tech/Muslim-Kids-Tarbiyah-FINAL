# Quran verse map (Al-Husary read-aloud)

Re-run after adding new verses between ﴿ ﴾ anywhere on the site:

```
cd tools/quran-verse-map
python3 fetch.py   # once: downloads word lists + Al-Husary word timings from quran.com into data/
python3 build.py   # rewrites corners/shared/quran-verse-map.js
```

`data/` is not committed (it is re-downloadable).
