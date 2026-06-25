/* engine/tweaks.js — shared Tweaks panel (theme + path), mounted on every page.
   Loaded as a Babel script AFTER tweaks-panel.jsx. Persists choice to
   localStorage('hisn-prefs2') so all pages stay in sync. */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dusk",
  "path": "rampart"
}/*EDITMODE-END*/;

function HisnTweaks(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(()=>{
    const r = document.documentElement;
    r.dataset.theme = t.theme; r.dataset.path = t.path;
    try { localStorage.setItem('hisn-prefs2', JSON.stringify({theme:t.theme, path:t.path})); } catch(e){}
    if (typeof window.HISN_onPath === 'function') window.HISN_onPath();
  }, [t.theme, t.path]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Aesthetic" />
      <TweakRadio label="Theme" value={t.theme}
        options={[{value:'dusk',label:'Dusk'},{value:'navy',label:'Navy'},{value:'parchment',label:'Scroll'}]}
        onChange={(v)=>setTweak('theme', v)} />
      <TweakSection label="Timeline" />
      <TweakRadio label="Path style" value={t.path}
        options={[{value:'rampart',label:'Rampart'},{value:'river',label:'River'}]}
        onChange={(v)=>setTweak('path', v)} />
    </TweaksPanel>
  );
}
ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<HisnTweaks/>);
