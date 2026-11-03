import json, urllib.request, os, concurrent.futures as cf, time
def get(u):
    for i in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'curl/8.5.0'}), timeout=60) as r: return json.load(r)
        except Exception as e: time.sleep(2**i)
    raise SystemExit('fail '+u)
def chap(c):
    if not os.path.exists(f'data/words/{c}.json'):
        vs=[]; p=1
        while p:
            d=get(f'https://api.quran.com/api/v4/verses/by_chapter/{c}?words=true&word_fields=text_imlaei_simple,char_type_name&per_page=50&page={p}')
            vs+= [{'k':v['verse_key'],'w':[w['text_imlaei_simple'] for w in v['words'] if w['char_type_name']=='word']} for v in d['verses']]
            p=d['pagination']['next_page']
        json.dump(vs,open(f'data/words/{c}.json','w'),ensure_ascii=False)
    if not os.path.exists(f'data/seg/{c}.json'):
        d=get(f'https://api.quran.com/api/v4/recitations/6/by_chapter/{c}?fields=segments&per_page=300')
        assert d['pagination']['next_page'] is None, c
        json.dump({a['verse_key']:a.get('segments') for a in d['audio_files']},open(f'data/seg/{c}.json','w'))
    return c
with cf.ThreadPoolExecutor(8) as ex: print(len(list(ex.map(chap,range(1,115)))))
