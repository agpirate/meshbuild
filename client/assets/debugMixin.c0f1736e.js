import{c as V,w as E,aY as A,aN as q,aM as B,a as Q,aZ as z,u as X,o as k,N as Y,r as p,a_ as ee,a$ as te,b0 as ne,g as re,s as ae}from"./index.88fd6401.js";function Ne(e){{const t={active:!0};if(typeof e=="function"){const n=V(e);t.val=n.value,E(n,r=>{t.val=r,t.active===!0&&A()})}else t.val=e;z.push(t),A(),q(()=>{t.active=!0,A()}),B(()=>{t.active=!1,A()}),Q(()=>{z.splice(z.indexOf(t),1),A()})}}function Te(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ze(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function Ee(e,t,n){if(n<=t)return t;const r=n-t+1;let i=t+(e-t)%r;return i<t&&(i=r+i),i===0?0:i}function Le(e,t=2,n="0"){if(e==null)return e;const r=""+e;return r.length>=t?r:new Array(t-r.length+1).join(n)+r}function oe(e){return te()?(ne(e),!0):!1}function L(e){return typeof e=="function"?e():X(e)}const N=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const ie=Object.prototype.toString,se=e=>ie.call(e)==="[object Object]",ue=()=>{};function le(e,t){function n(...r){return new Promise((i,l)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(l)})}return n}const x=e=>e();function ce(e=x){const t=p(!0);function n(){t.value=!1}function r(){t.value=!0}const i=(...l)=>{t.value&&e(...l)};return{isActive:ee(t),pause:n,resume:r,eventFilter:i}}function fe(e){return e||re()}function de(e,t,n={}){const{eventFilter:r=x,...i}=n;return E(e,le(r,t),i)}function pe(e,t,n={}){const{eventFilter:r,...i}=n,{eventFilter:l,pause:g,resume:m,isActive:S}=ce(r);return{stop:de(e,t,{...i,eventFilter:l}),pause:g,resume:m,isActive:S}}function he(e,t=!0,n){fe()?k(e,n):t?e():Y(e)}function ve(e){var t;const n=L(e);return(t=n==null?void 0:n.$el)!=null?t:n}const _=N?window:void 0;N&&window.document;N&&window.navigator;N&&window.location;function C(...e){let t,n,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,i]=e,t=_):[t,n,r,i]=e,!t)return ue;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const l=[],g=()=>{l.forEach(h=>h()),l.length=0},m=(h,o,u,s)=>(h.addEventListener(o,u,s),()=>h.removeEventListener(o,u,s)),S=E(()=>[ve(t),L(i)],([h,o])=>{if(g(),!h)return;const u=se(o)?{...o}:o;l.push(...n.flatMap(s=>r.map(f=>m(h,s,f,u))))},{immediate:!0,flush:"post"}),w=()=>{S(),g()};return oe(w),w}const M=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O="__vueuse_ssr_handlers__",we=ge();function ge(){return O in M||(M[O]=M[O]||{}),M[O]}function ye(e,t){return we[e]||t}function me(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Se={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},P="vueuse-storage";function H(e,t,n,r={}){var i;const{flush:l="pre",deep:g=!0,listenToStorageChanges:m=!0,writeDefaults:S=!0,mergeDefaults:w=!1,shallow:h,window:o=_,eventFilter:u,onError:s=a=>{console.error(a)},initOnMounted:f}=r,d=(h?ae:p)(typeof t=="function"?t():t);if(!n)try{n=ye("getDefaultStorage",()=>{var a;return(a=_)==null?void 0:a.localStorage})()}catch(a){s(a)}if(!n)return d;const v=L(t),F=me(v),b=(i=r.serializer)!=null?i:Se[F],{pause:G,resume:W}=pe(d,()=>K(d.value),{flush:l,deep:g,eventFilter:u});o&&m&&he(()=>{C(o,"storage",D),C(o,P,Z),f&&D()}),f||D();function j(a,c){o&&o.dispatchEvent(new CustomEvent(P,{detail:{key:e,oldValue:a,newValue:c,storageArea:n}}))}function K(a){try{const c=n.getItem(e);if(a==null)j(c,null),n.removeItem(e);else{const y=b.write(a);c!==y&&(n.setItem(e,y),j(c,y))}}catch(c){s(c)}}function R(a){const c=a?a.newValue:n.getItem(e);if(c==null)return S&&v!=null&&n.setItem(e,b.write(v)),v;if(!a&&w){const y=b.read(c);return typeof w=="function"?w(y,v):F==="object"&&!Array.isArray(y)?{...v,...y}:y}else return typeof c!="string"?c:b.read(c)}function D(a){if(!(a&&a.storageArea!==n)){if(a&&a.key==null){d.value=v;return}if(!(a&&a.key!==e)){G();try{(a==null?void 0:a.newValue)!==b.write(d.value)&&(d.value=R(a))}catch(c){s(c)}finally{a?Y(W):W()}}}}function Z(a){D(a.detail)}return d}function Fe(e,t,n={}){const{window:r=_}=n;return H(e,t,r==null?void 0:r.localStorage,n)}function We(e,t,n={}){const{window:r=_}=n;return H(e,t,r==null?void 0:r.sessionStorage,n)}let be=p();be=V(()=>{try{const e=window.innerWidth,t=window.innerHeight;return e<600||t<400?"Small":e>=600&&e<1200||t>=400&&t<800?"Medium":"Large"}catch{return 0}});const I=new Date,T=I.getFullYear();var Ae=new Date(T,0,1),_e=new Date(T,11,31);const U=I.getMonth(),De=new Date(T,U,1),Me=new Date(T,U+1,0);Array.from({length:12},(e,t)=>new Date(null,t,null).toLocaleDateString("en",{month:"short"}));var J=()=>({daya:De,dayz:Me}),$=()=>({daya:Ae,dayz:_e});p({updatedAt:{$gte:J.daya,$lt:J.dayz}});p({updatedAt:{$gte:$.daya,$lt:$.dayz}});const je=()=>{p(0);var e=p({}),t=p(null),n=p([]),r=p([]),i=p([]),l=p([]);async function g(o={main:0},u=6e3,s=""){let f="";e.value={},t.value={color:"green",content:s,title:f};let d=Object.entries(o);return e.value[d[0][0]]=!0,d[0][1]&&new Promise(v=>{setTimeout(()=>{e.value[d[0][0]]=!1,v(!0)},d[0][1])}),u?new Promise(v=>{setTimeout(()=>{t.value=!1,v(!0)},u)}):!0}async function m(o=6e3,u="",s=""){return n.value.push({color:"green",content:u,title:s}),o?new Promise(f=>{setTimeout(()=>{n.value.shift(),f(!0)},o)}):!0}function S(o=6e3,u="",s=""){return r.value.push({color:"green",content:u,title:s}),o?new Promise(f=>{setTimeout(()=>{r.value.shift(),f(!0)},o)}):!0}function w(o=6e3,u="",s=s){return i.value.push({color:"cyan",content:u,title:s}),o?new Promise(f=>{setTimeout(()=>{i.value.shift(),f(!0)},o)}):!0}function h(o=6e3,u="",s=""){return l.value.push({color:"red",content:u,title:s}),o?new Promise(f=>{setTimeout(()=>{l.value.shift(),f(!0)},o)}):!0}return{Loadingpage:t,Loadingevent:e,Loading:n,DoneMessage:r,KnowthisMessage:i,WarnthisMessage:l,timerLoadevent:g,timerLoad:m,timerDone:S,timerInformthis:w,timerError:h}};export{Ne as a,Fe as b,We as c,ze as d,Te as e,Ee as n,Le as p,be as s,je as u};
