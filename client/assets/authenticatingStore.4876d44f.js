import{b0 as R,r as I,c as L,U as P}from"./index.a33c9604.js";import{a as O}from"./axios.05cf8750.js";import{b as u,c as A}from"./debugMixin.db1f0e67.js";import{_ as D}from"./storeService.3eb6e8a7.js";const q=(o=null)=>(o?O.defaults.headers=Object.assign({},o):delete O.defaults.headers.Authorization,!0),C="http://127.0.0.1:8080/api",E=O.create({baseURL:C,timeout:7e3}),b="authenticatingStore",H={get:w("GET"),post:w("POST"),put:w("PUT"),patch:w("PATCH"),delete:w("DELETE")};function w(o){return async(l,i=null,g={})=>{var c={method:o,headers:await W(b),params:g};if(c.headers["Content-Type"]="application/json",c.params.timestamp=new Date,i!=null)try{const r=o==="POST"?await E.post(l,i,c):await E.put(l,i,c);return await j(r).then(n=>({status:!0,data:n}),n=>(console.log(n),{status:!1,data:n})).catch(n=>(console.log(n),{status:!1,data:n}))}catch(r){return console.log("API Response Error",r),{status:!1,data:r}}else try{const r=o==="GET"?await E.get(l,c):await E.delete(l,c);return await j(r).then(n=>({status:!0,data:n}),n=>(console.log(n),{status:!1,data:n})).catch(n=>(console.log(n),{status:!1,data:n}))}catch(r){return console.log("API Response Error",r),{status:!1,data:r}}}}let U=[200];async function j(o){var l,i,g,c,r,n,f,y,h,T,_,t;console.log(o,"Response Data",U.includes((l=o.status)!=null?l:!1),(i=o.data)!=null?i:!1);try{if(U.includes((g=o.status)!=null?g:!1)){let e=o.data;try{e=(c=JSON.parse(e))!=null?c:e}catch{}const a=o.headers.get("Content-Type").includes("application/json");if(console.log("Response Data check 2 ;",a,(r=e.acctype)!=null?r:!1),a&&((n=e.acctype)!=null?n:!1)){e.token=(f=o.headers.token)!=null?f:"";let s={};return s.Authorization="Bearer;"+e.token,s.acckey=(y=e.acckey)!=null?y:"",s.acctype=(h=e.acctype)!=null?h:"",s.id=(T=e.id)!=null?T:"",s.phone=(_=e.phone)!=null?_:"",s.keyID=(t=e.keyID)!=null?t:"",q(s),e}}return Promise.reject(o)}catch(e){return Promise.reject(e)}}async function W(o=""){var c,r;var l={};l.Test="WooW",l._issModal=o;let i=P((c=u("geo.llat").value)!=null?c:!1),g=P((r=u("geo.llong").value)!=null?r:!1);return i&&(l["geo.lat"]=i,l["geo.long"]=g),l!=null?l:{}}var x={_isRegistered:!1,user:{},cookies:""},M=R(b,()=>{let o=I(x),l=I(null),i=I(null),g=L(()=>o.value),c=L(()=>l.value),r=L(()=>i.value);function n(t=null){return!0}async function f(t=null,e=null,p=null){var a,s,S,k,v;if(t!=null&&t){let d=(a=t!=null?t:i.value)!=null?a:!1;i.value=u("_isRegistered",d)}if(console.log("loging UserData",e),e&&Object.keys(e).length){l.value=u("user",e,{mergeDefaults:!0});try{u("userID",(s=e.id)!=null?s:""),u("acctype",(S=e.acctype)!=null?S:"",{mergeDefaults:!0}),A("token",(k=e.token)!=null?k:""),A("qw",e.queryWeight[1]),A("userID",(v=e.id)!=null?v:"")}catch(d){console.log("Loging Error",d,e.acckey)}}else l.value=u("user",l.value);return!0}async function y(){return D._clear(),u("_isRegistered",null),u("user",null),u("userID",null),D._clear("userID"),u("phone",null),D._clear("phone"),u("_acctype",null),!0}let h=["phone","id"];async function T(t={}){var e,p;if(t=Object.assign(t,(e=await _())!=null?e:t),console.log("((1)) Incoming User/Storage Data "+t),((p=t[h[0]])!=null?p:t[h[1]])==null)return{status:!1,data:"LogIn Keys :"+t};await y(),console.error("Clearing Storage"),console.log(t);try{return await H.post("/login",t).then(async a=>{var S,k,v,d;let s=(S=a.data.acctype)!=null?S:!1;if(console.log("((2)) Response User/Storage Data "+a.data),a.status&&s){a.data.acctype={},a.data.group=(k=s.group)!=null?k:"",a.data.acctype.group=(v=s.group)!=null?v:"";for(let m in s)((d=s[m].capability)!=null?d:!1)&&s[m].capability!="00000"&&(a.data.acctype[m]=Object.assign({group:s.group},s[m]));await f(!0,a.data,"true")}return a}).catch(a=>({status:!1,data:a}))}catch(a){return{status:!1,data:a}}}async function _(){var p,a;var t=Boolean((p=u("_isRegistered").value)!=null?p:!1);let e=(a=u("userID").value)!=null?a:null;return t&&e?{id:e}:null}return{getLogStatus:g,getLogisREgistered:r,getLogUser:c,set_reqHeader:n,setlogStatus:f,clearlogStatus:y,useLogin:T}});export{M as a};