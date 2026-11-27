const fs=require("fs"),path=require("path");
const {SR}=require("./subres.js");const {ROADMAPS}=require("./roadmaps.js");
const JUNK=/birfatura|ecosire|zunapro/i;
const norm=u=>{try{return decodeURIComponent(u).replace(/\/$/,"").toLowerCase()}catch(e){return u.toLowerCase()}};
for(const line of fs.readFileSync(path.join(__dirname,"add.tsv"),"utf8").split("\n")){const f=line.split("\t");if(f.length<7)continue;const[id,mi,si,lang,type,label,url]=f;const slot=SR[id][+mi][lang];while(slot.length<=+si)slot.push([]);slot[+si].push([label,url.trim(),type]);}
const out={};
for(const r of ROADMAPS){out[r.id]=r.modules.map((m,i)=>{const o={};for(const lang of["tr","en"]){const seen=new Set();const subs=m.subs[lang].map((s,k)=>(SR[r.id][i][lang][k]||[]).filter(x=>{const n=norm(x[1]);if(JUNK.test(x[1])||seen.has(n))return false;seen.add(n);return true}));const rest=m.res[lang].filter(x=>{const n=norm(x[1]);if(JUNK.test(x[1])||seen.has(n))return false;seen.add(n);return true});o[lang]={subs,rest}}return o})}
fs.writeFileSync(path.join(__dirname,"subdata.js"),"const SUBRES = "+JSON.stringify(out)+";\n");
let n={tr:0,en:0};for(const id in out)out[id].forEach(m=>["tr","en"].forEach(l=>{n[l]+=m[l].subs.flat().length+m[l].rest.length}));console.log(n);
