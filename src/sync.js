/* ---------- cloud sync (Neon via /api/progress) ---------- */
(function(){
  const P=new URLSearchParams(location.search).get("p")||"main", API="/api/progress?p="+encodeURIComponent(P);
  const set0=store.set.bind(store);
  store.set=(k,v)=>{set0(k,v);if(k.startsWith("ticks-"))fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({school:k.slice(6),ticks:v})}).catch(()=>{})};
  fetch(API).then(r=>r.ok?r.json():null).then(all=>{if(!all)return;for(const [school,t] of Object.entries(all))set0("ticks-"+school,{...store.get("ticks-"+school),...t});if(location.hash.length>1)route()}).catch(()=>{});
})();
