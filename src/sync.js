/* ---------- cloud sync (Neon via /api/progress) ---------- */
(function(){
  const P=new URLSearchParams(location.search).get("p")||"main", API="/api/progress?p="+encodeURIComponent(P);
  const set0=store.set.bind(store);
  const post=b=>fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}).catch(()=>{});
  store.set=(k,v)=>{set0(k,v);if(k.startsWith("ticks-"))post({school:k.slice(6),ticks:v});else if(k==="status")post({status:v})};
  fetch(API).then(r=>r.ok?r.json():null).then(all=>{if(!all)return;
    const st=all.__status;delete all.__status;if(st)set0("status",{...store.get("status"),...st});
    for(const [school,t] of Object.entries(all))set0("ticks-"+school,{...store.get("ticks-"+school),...t});
    if(!document.activeElement||document.activeElement.id!=="q")route()}).catch(()=>{});
})();
