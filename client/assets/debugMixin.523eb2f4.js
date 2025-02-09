import{c as A,w as C,b2 as p,ah as L,ag as k,a as $,b3 as S,b4 as D,r as c,b5 as b,l as x,m as O,t as R,b6 as z,b7 as V,a2 as Y,v as q}from"./index.2148c7c3.js";import{a as B}from"./axios.05cf8750.js";function ne(e){{const t={active:!0};if(typeof e=="function"){const a=A(e);t.val=a.value,C(a,r=>{t.val=r,t.active===!0&&p()})}else t.val=e;S.push(t),p(),L(()=>{t.active=!0,p()}),k(()=>{t.active=!1,p()}),$(()=>{S.splice(S.indexOf(t),1),p()})}}function F(e){switch(e){case"../../shared/schemas/chatSchemas.js":return D(()=>import("./chatSchemas.debe03fe.js"),[]);case"../../shared/schemas/profileSchemas.js":return D(()=>import("./profileSchemas.bd90bd18.js"),[]);case"../../shared/schemas/saleitSchemas.js":return D(()=>import("./saleitSchemas.0440e56e.js"),[]);default:return new Promise(function(t,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}async function se(e,t){try{var a=await F("../../shared/schemas/"+e+".js");return a[t]}catch(r){return console.error("Error loading module:",e,r),null}}const E=new Date,y=E.getFullYear();var H=new Date(y,0,1),J=new Date(y,11,31);const M=E.getMonth(),N=new Date(y,M,1),U=new Date(y,M+1,0);Array.from({length:12},(e,t)=>new Date(null,t,null).toLocaleDateString("en",{month:"short"}));var T=()=>({daya:N,dayz:U}),I=()=>({daya:H,dayz:J});c({updatedAt:{$gte:T.daya,$lt:T.dayz}});c({updatedAt:{$gte:I.daya,$lt:I.dayz}});let W=["null","undefined","",null,void 0,!1];var P={_updateStorage:async function(e,t){var a;return t?(localStorage.setItem(e,t),t):(a=localStorage.getItem(e))!=null?a:""},_get:(e=null,t=null)=>{try{const a=localStorage.getItem(e);return console.error("path fetching store",a,e),W.includes(a)&&t?(localStorage.setItem(e,t),t):a}catch{return!1}},_set:(e=null,t=null)=>t?localStorage.setItem(e,t):!1,_getsession:(e=null)=>e?sessionStorage.getItem(e):!1,_setsession:(e=null,t=null)=>t?sessionStorage.set(e,t):!1,_clear:(e=null,t=null)=>{if(e)if(Array.isArray(e))for(let a=0;a<e.length;a++)localStorage.removeItem(e[a]);else localStorage.removeItem(e);else sessionStorage.clear(),localStorage.clear();return{path:"/",name:"",query:{userid:""},params:{}}},_reroute:(e,t,a)=>{let r=[];return a?(r=[`/play/s${t}`,"s"+e],localStorage.setItem("path",`s${t}`)):(r=[`/play/${t}`,e],localStorage.setItem("path",`${t}`)),{path:r[0],name:r[1],query:{userid:""},params:{}}}};const G="https://mesh.et",j=B.create({baseURL:G,timeout:7e3});j.interceptors.request.use(e=>(localStorage.getItem("token"),e),e=>Promise.reject(e));const le={get:h("GET","getdelete"),post:h("POST","postput"),put:h("PUT","postput"),patch:h("PATCH"),delete:h("DELETE","getdelete")};function h(e,t){try{return async(a,r=null,s={},n={})=>{var v;let g=a.split("/")[2];var f={method:e,headers:Object.assign(n,await X(g)),params:{...s,timestamp:await ee()}};if(f.headers["Content-Type"]="application/json",t=="postput"){if(!(r!=null&&r))return{status:!1,data:null};let m=(v=r.file_)!=null?v:!1;f.data=r,m&&(f=await Z(m,f,r))}try{const m=await j(a,f);return await Q(m).then(d=>({status:!0,data:d}),d=>({status:!1,data:d})).catch(d=>({status:!1,data:d}))}catch(m){return{status:!1,data:m}}}}catch(a){console.log(a)}}let K=[200,201,202];async function Q(e){var t,a,r;console.log("checking response............");try{if(K.includes((t=e.status)!=null?t:!1)&&((a=e.data)!=null?a:!1)){try{e.data=(r=JSON.parse(e.data))!=null?r:e.data}catch{}if(e.headers.get("Content-Type").includes("application/json"))return e.data}return Promise.reject(e)}catch(s){return Promise.reject(s)}}async function X(e=""){var s,n;var t={};t._issModal=e;let a=(s=P._get("lat"))!=null?s:!1,r=(n=P._get("long"))!=null?n:!1;return a&&(t.lat=a,t.long=r),console.log(`
 Inject Headers Value as 
 Model Name =`,t),t!=null?t:{}}async function Z(e,t,a){var s;var r=new FormData;t.headers["Content-Type"]="multipart/form-data",t.params.file_=e;for(let n in a)if(Object.values(e).includes(n))if((s=e.files)!=null&&s)for(let g in a[n])r.append(n,a[n][g]);else if(e.file)r.append(n,a[n][0]);else return!1;else typeof a[n]!="object"&&r.append(n,a[n]);return t.headers["Content-Type"]="multipart/form-data",t.data=r,t}async function ee(){return new Date}const te={__name:"dialogOne",props:{isOpen:null,enableCloser:!1,bg:{type:String,default:""}},emits:["emitClick0"],setup(e,{emit:t}){const a=t;function r(s){a("emitClick0",s)}return(s,n)=>e.isOpen?(x(),O("div",{key:0,class:Y(["fixed-topleft ts-box-fit layer6 ps-relative onedlayout crow cj-center ia-center",e.bg]),onClick:n[1]||(n[1]=g=>r(null))},[R("div",{onClick:n[0]||(n[0]=V(()=>{},["stop"]))},[z(s.$slots,"default",{class:"col"},void 0,!0)])],2)):q("",!0)}};var oe=b(te,[["__scopeId","data-v-502308bc"]]);const ie=()=>{c(0);var e=c({}),t=c(null),a=c([]),r=c([]),s=c([]),n=c([]);async function g(l={main:0},o=6e3,i=""){let u="";e.value={},t.value={color:"green",content:i,title:u};let _=Object.entries(l);return e.value[_[0][0]]=!0,_[0][1]&&new Promise(w=>{setTimeout(()=>{e.value[_[0][0]]=!1,w(!0)},_[0][1])}),o?new Promise(w=>{setTimeout(()=>{t.value=!1,w(!0)},o)}):!0}async function f(l=6e3,o="",i=""){return a.value.push({color:"green",content:o,title:i}),l?new Promise(u=>{setTimeout(()=>{a.value.shift(),u(!0)},l)}):!0}function v(l=6e3,o="",i=""){return r.value.push({color:"green",content:o,title:i}),l?new Promise(u=>{setTimeout(()=>{r.value.shift(),u(!0)},l)}):!0}function m(l=6e3,o="",i=i){return s.value.push({color:"cyan",content:o,title:i}),l?new Promise(u=>{setTimeout(()=>{s.value.shift(),u(!0)},l)}):!0}function d(l=6e3,o="",i=""){return n.value.push({color:"red",content:o,title:i}),l?new Promise(u=>{setTimeout(()=>{n.value.shift(),u(!0)},l)}):!0}return{Loadingpage:t,Loadingevent:e,Loading:a,DoneMessage:r,KnowthisMessage:s,WarnthisMessage:n,timerLoadevent:g,timerLoad:f,timerDone:v,timerInformthis:m,timerError:d}};export{P as _,ne as a,oe as b,se as d,j as m,le as p,X as r,ie as u};
