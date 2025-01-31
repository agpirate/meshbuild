import{c as Q,w as C,aV as T,aE as Z,aD as ee,a as te,aW as A,q as ne,h as ae,x as le,aX as oe,r as p,aj as ie,aL as j,J as re,aY as q,o as se,B as U,g as ue,aZ as ce,E as $,a_ as z,a$ as de,K as fe,b0 as me,l as he,X as ve,W as ge,b1 as pe,$ as ye,p as _e,b2 as P}from"./index.09b8edac.js";import{a as we}from"./axios.05cf8750.js";function Ve(e){{const t={active:!0};if(typeof e=="function"){const a=Q(e);t.val=a.value,C(a,n=>{t.val=n,t.active===!0&&T()})}else t.val=e;A.push(t),T(),Z(()=>{t.active=!0,T()}),ee(()=>{t.active=!1,T()}),te(()=>{A.splice(A.indexOf(t),1),T()})}}var Ye=ne({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=Q(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>ae("div",{class:a.value},le(t.default))}});function xe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),oe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ee={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Ke={...Ee,contextMenu:Boolean};function Ne({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:n,proxy:l,emit:i}=ue(),r=p(null);let c=null;function f(o){return r.value===null?!1:o===void 0||o.touches===void 0||o.touches.length<=1}const u={};a===void 0&&(Object.assign(u,{hide(o){l.hide(o)},toggle(o){l.toggle(o),o.qAnchorHandled=!0},toggleKey(o){ie(o,13)===!0&&u.toggle(o)},contextClick(o){l.hide(o),j(o),re(()=>{l.show(o),o.qAnchorHandled=!0})},prevent:j,mobileTouch(o){if(u.mobileCleanup(o),f(o)!==!0)return;l.hide(o),r.value.classList.add("non-selectable");const s=o.target;q(u,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[r.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,l.show(o),o.qAnchorHandled=!0},300)},mobileCleanup(o){r.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),e.value===!0&&o!==void 0&&xe()}}),a=function(o=n.contextMenu){if(n.noParentEvent===!0||r.value===null)return;let s;o===!0?l.$q.platform.is.mobile===!0?s=[[r.value,"touchstart","mobileTouch","passive"]]:s=[[r.value,"mousedown","hide","passive"],[r.value,"contextmenu","contextClick","notPassive"]]:s=[[r.value,"click","toggle","passive"],[r.value,"keyup","toggleKey","passive"]],q(u,"anchor",s)});function d(){ce(u,"anchor")}function m(o){for(r.value=o;r.value.classList.contains("q-anchor--skip");)r.value=r.value.parentNode;a()}function h(){if(n.target===!1||n.target===""||l.$el.parentNode===null)r.value=null;else if(n.target===!0)m(l.$el.parentNode);else{let o=n.target;if(typeof n.target=="string")try{o=document.querySelector(n.target)}catch{o=void 0}o!=null?(r.value=o.$el||o,a()):(r.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return C(()=>n.contextMenu,o=>{r.value!==null&&(d(),a(o))}),C(()=>n.target,()=>{r.value!==null&&d(),h()}),C(()=>n.noParentEvent,o=>{r.value!==null&&(o===!0?d():a())}),se(()=>{h(),t!==!0&&n.modelValue===!0&&r.value===null&&i("update:modelValue",!1)}),U(()=>{c!==null&&clearTimeout(c),d()}),{anchorEl:r,canShow:f,anchorEvents:u}}function Qe(e,t){const a=p(null);let n;function l(c,f){const u=`${f!==void 0?"add":"remove"}EventListener`,d=f!==void 0?f:n;c!==window&&c[u]("scroll",d,$.passive),window[u]("scroll",d,$.passive),n=f}function i(){a.value!==null&&(l(a.value),a.value=null)}const r=C(()=>e.noParentEvent,()=>{a.value!==null&&(i(),t())});return U(r),{localScrollTarget:a,unconfigureScrollTarget:i,changeScrollEvent:l}}const{notPassiveCapture:W}=$,x=[];function H(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=z.length-1;for(;a>=0;){const n=z[a].$;if(n.type.name==="QTooltip"){a--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;a--}for(let n=x.length-1;n>=0;n--){const l=x[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ue(e){x.push(e),x.length===1&&(document.addEventListener("mousedown",H,W),document.addEventListener("touchstart",H,W))}function Fe(e){const t=x.findIndex(a=>a===e);t!==-1&&(x.splice(t,1),x.length===0&&(document.removeEventListener("mousedown",H,W),document.removeEventListener("touchstart",H,W)))}let B,R;function Je(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Xe(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const D={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{D[`${e}#ltr`]=e,D[`${e}#rtl`]=e});function Oe(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:D[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function be(e,t){let{top:a,left:n,right:l,bottom:i,width:r,height:c}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],n-=t[0],i+=t[1],l+=t[0],r+=t[0],c+=t[1]),{top:a,bottom:i,height:c,left:n,right:l,width:r,middle:n+(l-n)/2,center:a+(i-a)/2}}function Se(e,t,a){let{top:n,left:l}=e.getBoundingClientRect();return n+=t.top,l+=t.left,a!==void 0&&(n+=a[1],l+=a[0]),{top:n,bottom:n+1,height:1,left:l,right:l+1,width:1,middle:l,center:n}}function Te(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function V(e,t,a,n){return{top:e[a.vertical]-t[n.vertical],left:e[a.horizontal]-t[n.horizontal]}}function Me(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Me(e,t+1)},10);return}const{targetEl:a,offset:n,anchorEl:l,anchorOrigin:i,selfOrigin:r,absoluteOffset:c,fit:f,cover:u,maxHeight:d,maxWidth:m}=e;if(de.is.ios===!0&&window.visualViewport!==void 0){const L=document.body.style,{offsetLeft:b,offsetTop:w}=window.visualViewport;b!==B&&(L.setProperty("--q-pe-left",b+"px"),B=b),w!==R&&(L.setProperty("--q-pe-top",w+"px"),R=w)}const{scrollLeft:h,scrollTop:o}=a,s=c===void 0?be(l,u===!0?[0,0]:n):Se(l,c,n);Object.assign(a.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:m||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:y,offsetHeight:_}=a,{elWidth:O,elHeight:G}=f===!0||u===!0?{elWidth:Math.max(s.width,y),elHeight:u===!0?Math.max(s.height,_):_}:{elWidth:y,elHeight:_};let g={maxWidth:m,maxHeight:d};(f===!0||u===!0)&&(g.minWidth=s.width+"px",u===!0&&(g.minHeight=s.height+"px")),Object.assign(a.style,g);const E=Te(O,G);let v=V(s,E,i,r);if(c===void 0||n===void 0)I(v,s,E,i,r);else{const{top:L,left:b}=v;I(v,s,E,i,r);let w=!1;if(v.top!==L){w=!0;const S=2*n[1];s.center=s.top-=S,s.bottom-=S+2}if(v.left!==b){w=!0;const S=2*n[0];s.middle=s.left-=S,s.right-=S+2}w===!0&&(v=V(s,E,i,r),I(v,s,E,i,r))}g={top:v.top+"px",left:v.left+"px"},v.maxHeight!==void 0&&(g.maxHeight=v.maxHeight+"px",s.height>v.maxHeight&&(g.minHeight=g.maxHeight)),v.maxWidth!==void 0&&(g.maxWidth=v.maxWidth+"px",s.width>v.maxWidth&&(g.minWidth=g.maxWidth)),Object.assign(a.style,g),a.scrollTop!==o&&(a.scrollTop=o),a.scrollLeft!==h&&(a.scrollLeft=h)}function I(e,t,a,n,l){const i=a.bottom,r=a.right,c=fe(),f=window.innerHeight-c,u=document.body.clientWidth;if(e.top<0||e.top+i>f)if(l.vertical==="center")e.top=t[n.vertical]>f/2?Math.max(0,f-i):0,e.maxHeight=Math.min(i,f);else if(t[n.vertical]>f/2){const d=Math.min(f,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(i,d),e.top=Math.max(0,d-i)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(i,f-e.top);if(e.left<0||e.left+r>u)if(e.maxWidth=Math.min(r,u),l.horizontal==="middle")e.left=t[n.horizontal]>u/2?Math.max(0,u-r):0;else if(t[n.horizontal]>u/2){const d=Math.min(u,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(r,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(r,u-e.left)}function Ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ze(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function et(e,t,a){if(a<=t)return t;const n=a-t+1;let l=t+(e-t)%n;return l<t&&(l=n+l),l===0?0:l}function tt(e,t=2,a="0"){if(e==null)return e;const n=""+e;return n.length>=t?n:new Array(t-n.length+1).join(a)+n}let Ce=["null","undefined","",null,void 0,!1];var Y={_updateStorage:async function(e,t){var a;return t?(localStorage.setItem(e,t),t):(a=localStorage.getItem(e))!=null?a:""},_get:(e=null,t=null)=>{try{const a=localStorage.getItem(e);return Ce.includes(a)&&t?(localStorage.setItem(e,t),t):a}catch{return!1}},_set:(e=null,t=null)=>t?localStorage.setItem(e,t):!1,_getsession:(e=null)=>e?sessionStorage.getItem(e):!1,_setsession:(e=null,t=null)=>t?sessionStorage.set(e,t):!1,_clear:(e=null,t=null)=>(e?localStorage.removeItem(e):(sessionStorage.clear(),localStorage.clear()),{path:"/",name:"",query:{userid:""},params:{}}),_reroute:(e,t,a)=>{let n=[];return a?(n=[`/play/s${t}`,"s"+e],localStorage.setItem("path",`s${t}`)):(n=[`/play/${t}`,e],localStorage.setItem("path",`${t}`)),{path:n[0],name:n[1],query:{userid:""},params:{}}}};const F=new Date,k=F.getFullYear();var Le=new Date(k,0,1),We=new Date(k,11,31);const J=F.getMonth(),He=new Date(k,J,1),ke=new Date(k,J+1,0);Array.from({length:12},(e,t)=>new Date(null,t,null).toLocaleDateString("en",{month:"short"}));var K=()=>({daya:He,dayz:ke}),N=()=>({daya:Le,dayz:We});p({updatedAt:{$gte:K.daya,$lt:K.dayz}});p({updatedAt:{$gte:N.daya,$lt:N.dayz}});const Ae="https://mesh.et:443",X=we.create({baseURL:Ae,timeout:7e3});X.interceptors.request.use(e=>(localStorage.getItem("token"),e),e=>Promise.reject(e));const nt={get:M("GET","getdelete"),post:M("POST","postput"),put:M("PUT","postput"),patch:M("PATCH"),delete:M("DELETE","getdelete")};function M(e,t){try{return async(a,n=null,l={},i={})=>{var f;let r=a.split("/")[2];var c={method:e,headers:Object.assign(i,await $e(r)),params:{...l,timestamp:await je()}};if(c.headers["Content-Type"]="application/json",t=="postput"){if(!(n!=null&&n))return{status:!1,data:null};let u=(f=n.file_)!=null?f:!1;c.data=n,u&&(c=await De(u,c,n))}try{const u=await X(a,c);return await Ie(u).then(d=>({status:!0,data:d}),d=>({status:!1,data:d})).catch(d=>({status:!1,data:d}))}catch(u){return{status:!1,data:u}}}}catch(a){console.log(a)}}let Pe=[200,201,202];async function Ie(e){var t,a,n;console.log("checking response............");try{if(Pe.includes((t=e.status)!=null?t:!1)&&((a=e.data)!=null?a:!1)){try{e.data=(n=JSON.parse(e.data))!=null?n:e.data}catch{}if(e.headers.get("Content-Type").includes("application/json"))return e.data}return Promise.reject(e)}catch(l){return Promise.reject(l)}}async function $e(e=""){var l,i;var t={};t._issModal=e;let a=(l=Y._get("lat"))!=null?l:!1,n=(i=Y._get("long"))!=null?i:!1;return a&&(t.lat=a,t.long=n),console.log(`
 Inject Headers Value as 
 Model Name =`,t),t!=null?t:{}}async function De(e,t,a){var l;var n=new FormData;t.headers["Content-Type"]="multipart/form-data",t.params.file_=e;for(let i in a)if(Object.values(e).includes(i))if((l=e.files)!=null&&l)for(let r in a[i])n.append(i,a[i][r]);else if(e.file)n.append(i,a[i][0]);else return!1;else typeof a[i]!="object"&&n.append(i,a[i]);return t.headers["Content-Type"]="multipart/form-data",t.data=n,t}async function je(){return new Date}const qe={__name:"dialogOne",props:{isOpen:null,enableCloser:!1},emits:["emitClick0"],setup(e,{emit:t}){const a=t;function n(l){a("emitClick0",l)}return(l,i)=>e.isOpen?(he(),ve("div",{key:0,class:"fixed-topleft ts-box-fit layer6 ps-relative onedlayout crow cj-center ia-center",onClick:i[1]||(i[1]=r=>n(null))},[ge("div",{onClick:i[0]||(i[0]=ye(()=>{},["stop"]))},[pe(l.$slots,"default",{class:"col"},void 0,!0)])])):_e("",!0)}};var at=me(qe,[["__scopeId","data-v-d4a2bf42"]]);function ze(e){switch(e){case"../../shared/schemas/chatSchemas.js":return P(()=>import("./chatSchemas.debe03fe.js"),[]);case"../../shared/schemas/profileSchemas.js":return P(()=>import("./profileSchemas.bd90bd18.js"),[]);case"../../shared/schemas/saleitSchemas.js":return P(()=>import("./saleitSchemas.0440e56e.js"),[]);default:return new Promise(function(t,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}async function lt(e,t){try{var a=await ze("../../shared/schemas/"+e+".js");return a[t]}catch(n){return console.error("Error loading module:",e,n),null}}const ot=()=>{p(0);var e=p({}),t=p(null),a=p([]),n=p([]),l=p([]),i=p([]);async function r(m={main:0},h=6e3,o=""){let s="";e.value={},t.value={color:"green",content:o,title:s};let y=Object.entries(m);return e.value[y[0][0]]=!0,y[0][1]&&new Promise(_=>{setTimeout(()=>{e.value[y[0][0]]=!1,_(!0)},y[0][1])}),h?new Promise(_=>{setTimeout(()=>{t.value=!1,_(!0)},h)}):!0}async function c(m=6e3,h="",o=""){return a.value.push({color:"green",content:h,title:o}),m?new Promise(s=>{setTimeout(()=>{a.value.shift(),s(!0)},m)}):!0}function f(m=6e3,h="",o=""){return n.value.push({color:"green",content:h,title:o}),m?new Promise(s=>{setTimeout(()=>{n.value.shift(),s(!0)},m)}):!0}function u(m=6e3,h="",o=o){return l.value.push({color:"cyan",content:h,title:o}),m?new Promise(s=>{setTimeout(()=>{l.value.shift(),s(!0)},m)}):!0}function d(m=6e3,h="",o=""){return i.value.push({color:"red",content:h,title:o}),m?new Promise(s=>{setTimeout(()=>{i.value.shift(),s(!0)},m)}):!0}return{Loadingpage:t,Loadingevent:e,Loading:a,DoneMessage:n,KnowthisMessage:l,WarnthisMessage:i,timerLoadevent:r,timerLoad:c,timerDone:f,timerInformthis:u,timerError:d}};export{Ye as Q,Y as _,Ve as a,at as b,Ke as c,lt as d,Xe as e,Qe as f,Ne as g,Ue as h,nt as i,$e as j,xe as k,Ze as l,X as m,et as n,tt as o,Oe as p,Ge as q,Fe as r,Me as s,Ee as t,ot as u,Je as v};
