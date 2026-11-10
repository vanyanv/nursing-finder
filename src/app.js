/* ---------- icons (Lucide, inlined) ---------- */
const ICONS = __ICONS__;
const ic=(n,c="size-4")=>`<svg class="${c} shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]||""}</svg>`;

/* ---------- helpers ---------- */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const today=new Date(); today.setHours(0,0,0,0);
const daysUntil=iso=>Math.round((new Date(iso+"T00:00:00")-today)/864e5);
const fmt=(iso,yr)=>new Date(iso+"T00:00:00").toLocaleDateString("en-US",yr?{month:"short",day:"numeric",year:"numeric"}:{month:"short",day:"numeric"});
const nextDl=s=>(s.deadlines||[]).find(d=>daysUntil(d[0])>=0);
const dleft=n=>n===0?"Today":n===1?"Tomorrow":`${n} days`;
const tone=n=>n<=30?"bad":n<=90?"warn":"good";
const badge=(text,t="neutral")=>`<span class="badge badge-${t}">${esc(text)}</span>`;
const countBadge=iso=>{const n=daysUntil(iso);return n<0?badge("Passed"):badge(dleft(n),tone(n))};
const store={get(k){try{return JSON.parse(localStorage.getItem(k)||"{}")}catch(e){return{}}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const pref=(k,d)=>{try{return localStorage.getItem(k)||d}catch(e){return d}}, setPref=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
let filter=pref("filter","all"), query="";
const live=SCHOOLS.filter(s=>s.status);
const isPublic=s=>/Public/.test(s.where);
const city=s=>s.where.split(" · ")[0];
const kind=s=>s.where.split(" · ")[1]||"";

const FIT={ucla:["Reach","bad"],csulb:["Competitive","warn"],calstatela:["Competitive","warn"],pepperdine:["Above typical admits","good"],wcu:["No GPA cutoff","good"],chamberlain:["No GPA cutoff","good"]};
const fit=s=>FIT[s.id]||["Above minimums","good"];
const nTone=v=>{const x=parseFloat(v);return isNaN(x)?"":x>=90?"t-good":x>=80?"t-warn":"t-bad"};
const NEXT={
 csulb:["Submit Cal State Apply and choose “Nursing BS”","https://www.calstate.edu/apply"],
 calstatela:["Submit Cal State Apply for Cal State LA","https://www.calstate.edu/apply"],
 ucla:["Submit the UC Application","https://apply.universityofcalifornia.edu/"],
 msmu:["Start the Nursing Transfer application","https://admissions.msmu.edu/apply/"],
 auhs:["Start an application (rolling admission)","https://www.auhs.edu/applying-for-auhs"],
 apu:["Ask APU for 2+2 transfer dates, then apply","https://engage.apu.edu/portal/app"],
 biola:["Apply to Biola as a transfer","https://go.biola.edu/portal/apply_today"],
 pepperdine:["Apply as a transfer, choosing “BSN - 2-Year”","https://admission.pepperdine.edu/apply/"],
 cdu:["Take the TEAS, then apply on NursingCAS","https://nursingcas.liaisoncas.org/apply/"],
 wcu:["Apply for the next start date","https://westcoastuniversity.edu/get-started/application-for-admission"],
 chamberlain:["Start the application and book an interview","https://community.chamberlain.edu/s/application?source=300728"]};

const header=()=>`<header class="border-b border-border bg-bg/90 backdrop-blur sticky top-[env(safe-area-inset-top,0px)] z-20">
  <div class="wrap flex h-14 items-center justify-between gap-3">
    <a href="#" class="flex items-center gap-2 font-semibold tracking-tight text-fg no-underline">${ic("GraduationCap","size-5 logo")}<span>Nursing Finder</span></a>
    <span class="hidden sm:inline-flex items-center gap-2 text-sm text-muted">Her GPA <span class="num font-medium text-fg">3.9</span><span class="text-border">/</span>Science <span class="num font-medium text-fg">4.0</span></span>
  </div></header>`;

/* ---------- home ---------- */
function row(s){
  const d=nextDl(s), f=fit(s);
  return `<a href="#${s.id}" class="row group grid grid-cols-[1fr_auto] md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)_70px_90px_70px_minmax(0,1.3fr)_20px] items-center gap-x-4 gap-y-1 px-4 py-3.5 no-underline text-fg hover:bg-subtle">
    <div class="min-w-0"><div class="font-medium truncate">${esc(s.name)}</div><div class="text-sm text-muted truncate">${esc(city(s))} · ${esc(kind(s))}</div></div>
    <div class="md:order-none justify-self-end md:justify-self-start">${badge(f[0],f[1])}</div>
    <div class="col-span-2 md:col-span-1 flex md:block gap-4 text-sm"><span class="md:hidden text-muted">GPA</span> <span class="num">${esc(s.glance.gpa[0])}</span></div>
    <div class="hidden md:block text-sm truncate">${esc(s.glance.test[0])}</div>
    <div class="hidden md:block text-sm num font-medium ${nTone(s.nclex[0])}">${esc(s.nclex[0])}</div>
    <div class="col-span-2 md:col-span-1 text-sm flex items-center gap-2 min-w-0">${d?`<span class="num shrink-0">${fmt(d[0])}</span>${countBadge(d[0])}`:`<span class="text-muted">Not posted</span>`}</div>
    <div class="hidden md:block text-muted group-hover:text-fg">${ic("ChevronRight")}</div>
  </a>`;
}
function home(){
  const match=s=>(!query||(s.name+" "+s.where+" "+(s.short||"")).toLowerCase().includes(query))&&(filter==="all"||(filter==="public"?isPublic(s):!isPublic(s)));
  const lb=live.filter(s=>s.area==="lb"&&match(s)), la=live.filter(s=>s.area==="la"&&match(s)), no=SCHOOLS.filter(s=>s.area==="no");
  const all=[];live.forEach(s=>(s.deadlines||[]).forEach(d=>{if(daysUntil(d[0])>=0)all.push([d[0],d[1],s])}));all.sort((a,b)=>a[0].localeCompare(b[0]));
  const group=(title,list,dc)=>list.length?`<div class="px-4 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-muted flex items-center gap-2"><span class="dot ${dc}"></span>${title}</div><div class="divide-y divide-border border-y border-border">${list.map(row).join("")}</div>`:"";
  const tab=(k,l)=>`<button data-f="${k}" class="tab ${filter===k?"tab-on":""}">${l}</button>`;
  document.getElementById("app").innerHTML=`${header()}<main class="wrap py-10">
   <section class="max-w-2xl">
     <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight">BSN programs for an LBCC transfer</h1>
     <p class="mt-3 text-muted text-[17px] leading-relaxed">Every bachelor's nursing program in LA County that takes community college transfers. Open a school to see what to do, in order, with a link for every step.</p>
     <p class="sm:hidden mt-3 text-sm text-muted">Her GPA <span class="num text-fg font-medium">3.9</span> · Science <span class="num text-fg font-medium">4.0</span></p>
   </section>

   <section class="mt-10">
     <h2 class="text-sm font-medium text-muted mb-3 flex items-center gap-2">${ic("CalendarDays")}Next deadlines</h2>
     <div class="card divide-y divide-border">${all.slice(0,4).map(([iso,label,s])=>`<a href="#${s.id}" class="flex items-center gap-4 px-4 py-3 no-underline text-fg hover:bg-subtle">
        <div class="date-tile ${tone(daysUntil(iso))} w-12 py-1 shrink-0 text-center leading-tight"><div class="text-xs uppercase opacity-80">${fmt(iso).split(" ")[0]}</div><div class="text-xl font-semibold num">${fmt(iso).split(" ")[1]}</div></div>
        <div class="min-w-0 flex-1"><div class="font-medium">${esc(s.short)}</div><div class="text-sm text-muted">${esc(label)}</div></div>${countBadge(iso)}</a>`).join("")}</div>
   </section>

   <section class="mt-10">
     <div class="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-3">
       <div class="tabs" role="group" aria-label="Filter">${tab("all","All schools")}${tab("public","Public")}${tab("private","Private")}</div>
       <label class="relative sm:w-64"><span class="sr-only">Search schools</span><span class="absolute left-3 top-1/2 -translate-y-1/2 text-muted">${ic("Search")}</span><input id="q" type="search" value="${esc(query)}" placeholder="Search schools or cities" class="input pl-9"></label>
     </div>
     <div class="card overflow-hidden">
       <div class="hidden md:grid grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)_70px_90px_70px_minmax(0,1.3fr)_20px] gap-x-4 px-4 py-2.5 text-xs font-medium text-muted bg-subtle border-b border-border"><span>School</span><span>Fit for her</span><span>Min GPA</span><span>Test</span><span>NCLEX</span><span>Next deadline</span><span></span></div>
       ${group("Long Beach",lb,"dot-lb")}${group("Rest of LA County",la,"dot-la")}
       ${!lb.length&&!la.length?`<p class="p-6 text-muted">No schools match “${esc(query)}”.</p>`:""}
       <div class="h-4"></div>
     </div>
     <details class="mt-4 card px-4"><summary class="py-3 cursor-pointer text-sm font-medium flex items-center justify-between">Not an option for LBCC transfers (${no.length}) ${ic("ChevronDown","size-4 text-muted chev")}</summary>
       <ul class="pb-3 space-y-3">${no.map(s=>`<li class="text-sm"><span class="font-medium">${esc(s.name)}</span> <span class="text-muted">· ${esc(city(s))}</span><div class="text-muted">${esc(s.why)}</div></li>`).join("")}</ul></details>
   </section>

   <footer class="mt-14 pt-6 border-t border-border text-sm text-muted space-y-2 max-w-2xl">
     <p>Every fact comes from the school's own website or the California Board of Registered Nursing, checked ${CHECKED} with two or three separate research passes per school. “Fit for her” compares her 3.9 / 4.0 with each school's published numbers only.</p>
     <p>Match LBCC classes to each school on <a href="https://assist.org" target="_blank" rel="noopener">assist.org</a>, or ask an LBCC counselor at <span class="num">(562) 938-4560</span>.</p>
   </footer></main>`;
  const q=document.getElementById("q");
  q.oninput=e=>{query=e.target.value.toLowerCase().trim();home();const n=document.getElementById("q");n.focus();n.setSelectionRange(n.value.length,n.value.length)};
  document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{filter=b.dataset.f;setPref("filter",filter);home()});
}

/* ---------- school page ---------- */
function school(s){
  const key="ticks-"+s.id, ticks=store.get(key), g=s.glance, d=nextDl(s), nx=NEXT[s.id], f=fit(s);
  let total=0;
  const chk=(id,label,note,url)=>{total++;const on=!!ticks[id];return `<li class="flex items-start gap-3 py-2.5">
     <input type="checkbox" id="${id}" class="cb mt-0.5" ${on?"checked":""}>
     <label for="${id}" class="flex-1 min-w-0 cursor-pointer ${on?"line-through text-muted":""}"><span>${esc(label)}</span>${note?`<span class="block text-sm text-muted no-underline">${esc(note)}</span>`:""}</label>
     ${url?`<a href="${url}" target="_blank" rel="noopener" class="btn-sm shrink-0">Open ${ic("ArrowUpRight","size-3.5")}</a>`:""}</li>`};
  const stepBlock=(n,title,sub,items,extra="")=>`<li class="relative pl-10 pb-8 last:pb-0">
     <span class="absolute left-0 top-0 grid size-7 place-items-center rounded-full border step-n text-sm font-semibold num">${n}</span>
     <span class="absolute left-[13px] top-8 bottom-1 w-px bg-border step-line"></span>
     <h3 class="font-medium leading-7">${esc(title)}</h3>${sub?`<p class="text-sm text-muted mt-0.5">${esc(sub)}</p>`:""}
     ${items?`<ul class="mt-2 divide-y divide-border">${items}</ul>`:""}${extra}</li>`;
  let n=0;
  const steps=[stepBlock(++n, s.courses.length?"Finish the prerequisite classes at LBCC":"Prerequisite classes", s.prereqRule, s.courses.length?s.courses.map((c,i)=>chk(`${s.id}-c${i}`,c[0],c[1])).join(""):"", s.courses.length?`<p class="mt-2 text-sm text-muted">Find the matching LBCC class on <a href="https://assist.org" target="_blank" rel="noopener">assist.org</a> or ask an LBCC counselor.</p>`:"")]
    .concat(s.steps.map((st,si)=>stepBlock(++n,st.title,st.sub,st.checks.map((c,ci)=>chk(`${s.id}-s${si}-${ci}`,c[0],c[1],c[2])).join("")))).join("");
  const cmpRow=(k,v,h,ok)=>`<div class="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr_90px] gap-x-4 gap-y-0.5 py-3 text-sm">
     <div class="text-muted">${esc(k)}</div><div class="num">${esc(v)}</div>
     <div class="num ${ok===true?"text-good font-medium":"text-muted"} flex items-center gap-1">${h?(ok===true?ic("Check","size-3.5"):"")+`<span class="sm:hidden text-muted font-normal">Her: </span>`+esc(h):""}</div></div>`;
  const stat=(label,val,sub,cls="",vc="")=>`<div class="p-4 ${cls}"><div class="text-xs text-muted">${label}</div><div class="mt-1 text-2xl font-semibold tracking-tight num ${vc}">${esc(val)}</div><div class="mt-0.5 text-xs text-muted">${esc(sub)}</div></div>`;
  const rateMain=s.rate.split(" (")[0], rateSub=s.rate.includes("(")?s.rate.split("(")[1].replace(")",""):"";
  document.getElementById("app").innerHTML=`${header()}<main class="wrap py-8">
    <nav class="text-sm text-muted flex items-center gap-1.5"><a href="#" class="text-muted no-underline hover:text-fg flex items-center gap-1">${ic("ArrowLeft","size-3.5")}All schools</a><span>/</span><span class="text-fg truncate">${esc(s.short)}</span></nav>
    <div class="mt-5 flex flex-wrap items-center gap-2">${badge(f[0],f[1])}${badge(`Checked ${s.checks}× on official pages`)}${s.status==="partial"?badge("Some details not posted","warn"):""}</div>
    <h1 class="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">${esc(s.name)}</h1>
    <p class="mt-1 text-muted">${esc(s.where)}</p>
    <p class="mt-4 max-w-2xl text-[17px] leading-relaxed">${esc(s.lead)}</p>

    <div class="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
      <div class="min-w-0 space-y-10">
        <div class="card grid grid-cols-2 md:grid-cols-4 divide-border [&>*]:border-border">
          ${stat("Minimum GPA",g.gpa[0],g.gpa[1],"border-b md:border-b-0 border-r")}${stat("Entrance test",g.test[0],g.test[1],"border-b md:border-b-0 md:border-r")}${stat("Admit rate",rateMain,rateSub||g.odds[1],"border-r")}${stat("NCLEX pass rate",s.nclex[0],s.nclex[1]+" · 2024–25","",nTone(s.nclex[0]))}
        </div>

        <section>
          <h2 class="text-lg font-semibold tracking-tight">How she compares</h2>
          <p class="mt-1 text-muted">${esc(s.compare.verdict)}</p>
          <div class="card mt-4 px-4 divide-y divide-border">
            <div class="hidden sm:grid grid-cols-[1fr_1.2fr_90px] gap-x-4 py-2.5 text-xs font-medium text-muted"><span>Published by the school</span><span>School</span><span>Her</span></div>
            ${s.compare.rows.map(r=>cmpRow(...r)).join("")}
          </div>
          <p class="mt-2 text-xs text-muted">Sources: <a href="${s.compare.src}" target="_blank" rel="noopener">school's published numbers</a> · <a href="https://www.rn.ca.gov/education/passrates.shtml" target="_blank" rel="noopener">CA Board of Registered Nursing</a>. Nothing is estimated.</p>
        </section>

        <section>
          <div class="flex items-end justify-between gap-4 flex-wrap">
            <h2 class="text-lg font-semibold tracking-tight">Step by step</h2>
            <div class="flex items-center gap-3 text-sm text-muted"><span id="pc" class="num"></span><div class="w-28 h-1.5 rounded-full bg-subtle overflow-hidden"><div id="pb" class="h-full bar-fill rounded-full transition-all"></div></div></div>
          </div>
          <ol class="mt-5">${steps}</ol>
          <p class="mt-4 text-xs text-muted">Check marks are saved on this device.</p>
        </section>

        <section class="space-y-3">
          ${s.notes.length?`<details class="card px-4" open><summary class="py-3 cursor-pointer font-medium flex items-center gap-2">${ic("CircleAlert","size-4 text-warn")}Double-check with the school <span class="ml-auto">${ic("ChevronDown","size-4 text-muted chev")}</span></summary><ul class="pb-4 space-y-2 text-sm list-disc pl-5">${s.notes.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></details>`:""}
          <details class="card px-4"><summary class="py-3 cursor-pointer font-medium flex items-center gap-2">${ic("Info","size-4 text-muted")}Good to know <span class="ml-auto">${ic("ChevronDown","size-4 text-muted chev")}</span></summary><ul class="pb-4 space-y-2 text-sm list-disc pl-5">${s.extra.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></details>
          <details class="card px-4"><summary class="py-3 cursor-pointer font-medium flex items-center gap-2">${ic("Link","size-4 text-muted")}Sources <span class="ml-auto">${ic("ChevronDown","size-4 text-muted chev")}</span></summary><ul class="pb-4 space-y-1.5 text-sm">${s.sources.map(u=>`<li><a href="${u}" target="_blank" rel="noopener" class="break-all">${esc(decodeURIComponent(u).replace(/^https?:\/\/(www\.)?/,""))}</a></li>`).join("")}</ul></details>
        </section>
      </div>

      <aside class="space-y-4 lg:sticky lg:top-20 lg:order-none -order-1 min-w-0">
        ${nx?`<div class="card next-card p-4"><div class="kicker text-xs font-medium flex items-center gap-1.5">${ic("Clock","size-3.5")}Do this next${d?` · by ${fmt(d[0],1)}`:""}</div>
          <p class="mt-1.5 font-medium leading-snug">${esc(nx[0])}</p>
          <a href="${nx[1]}" target="_blank" rel="noopener" class="btn mt-3 w-full">Open ${ic("ArrowUpRight","size-4")}</a></div>`:""}
        <div class="card"><div class="px-4 pt-3.5 pb-1 text-sm font-medium">Key dates</div>
          ${(s.deadlines||[]).length?`<ul class="divide-y divide-border">${s.deadlines.map(([iso,l])=>`<li class="flex items-start gap-3 px-4 py-2.5 ${daysUntil(iso)<0?"opacity-50":""}"><div class="w-14 shrink-0 text-sm num font-medium">${fmt(iso)}</div><div class="flex-1 min-w-0 text-sm text-muted">${esc(l)}</div>${countBadge(iso)}</li>`).join("")}</ul>`:`<p class="px-4 pb-3.5 text-sm text-muted">No transfer deadlines are posted online. Call admissions to ask.</p>`}</div>
        <div class="card"><div class="px-4 pt-3.5 pb-1 text-sm font-medium">Sign-up links</div>
          <ul class="divide-y divide-border">${s.apply.concat([["assist.org: match LBCC classes","https://assist.org"]]).map(([l,u])=>`<li><a href="${u}" target="_blank" rel="noopener" class="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-fg no-underline hover:bg-subtle"><span>${esc(l)}</span>${ic("ArrowUpRight","size-4 text-muted")}</a></li>`).join("")}</ul></div>
        <div class="card"><div class="px-4 pt-3.5 pb-1 text-sm font-medium">Contact</div>
          <ul class="divide-y divide-border">${s.contact.map(([k,v])=>`<li class="flex items-center gap-3 px-4 py-2.5"><div class="min-w-0 flex-1"><div class="text-xs text-muted">${esc(k)}</div><div class="text-sm break-all select-all num">${esc(v)}</div></div><button class="btn-ghost" data-copy="${esc(v)}" aria-label="Copy ${esc(k)}">${ic("Copy","size-3.5")}<span>Copy</span></button></li>`).join("")}</ul></div>
      </aside>
    </div>
    <footer class="mt-14 pt-6 border-t border-border text-sm text-muted">Checked ${CHECKED}. Rules change every year, so confirm with ${esc(s.short)} before applying.</footer>
  </main>`;
  const update=()=>{const t=store.get(key);const done=Object.values(t).filter(Boolean).length;document.getElementById("pc").textContent=`${done} of ${total} done`;document.getElementById("pb").style.width=(total?done/total*100:0)+"%"};
  update();
  document.querySelectorAll(".cb").forEach(inp=>inp.onchange=()=>{const t=store.get(key);t[inp.id]=inp.checked;store.set(key,t);const lab=inp.nextElementSibling;lab.classList.toggle("line-through",inp.checked);lab.classList.toggle("text-muted",inp.checked);update()});
  document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=()=>{const lbl=b.querySelector("span");const ok=()=>{lbl.textContent="Copied";setTimeout(()=>lbl.textContent="Copy",1500)};const sel=()=>{const r=document.createRange();r.selectNodeContents(b.previousElementSibling.lastElementChild);const x=getSelection();x.removeAllRanges();x.addRange(r)};
    try{navigator.clipboard.writeText(b.dataset.copy).then(ok,sel)}catch(e){sel()}});
}

/* ---------- router ---------- */
function route(){const s=live.find(x=>x.id===location.hash.slice(1));if(s){school(s);scrollTo(0,0)}else home()}
addEventListener("hashchange",route); route();
