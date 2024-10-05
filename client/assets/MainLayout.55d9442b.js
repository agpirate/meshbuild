import{Q as j,a as k}from"./QLayout.23f5fba4.js";import{R as Q,r,C as $,w as q,c as z,b8 as J,o as K,S as W,k as X,l as Y,m as Z,n as I,U as L,f as x,u}from"./index.15b391b8.js";import{u as V}from"./use-quasar.448f36cc.js";import{u as ee,a as ae}from"./debugMixin.2db8f2fc.js";import{t as te}from"./serviceStore.ca5f8907.js";import{p as ie}from"./profileStore.7bd75b6b.js";import{a as oe}from"./authenticatingStore.7ece30f0.js";import{u as ne}from"./statusMixin.2864a5da.js";import{u as re}from"./fileserviceMixin.99354ea9.js";import{_permission as le}from"./profileSchemas.7b92c6e5.js";import"./QResizeObserver.34dc0643.js";import"./axios.05cf8750.js";import"./storeService.3eb6e8a7.js";const qe={__name:"MainLayout",setup(se){var R;const{Loadingpage:ce,Loadingevent:ue,Loading:ve,DoneMessage:ge,KnowthisMessage:pe,WarnthisMessage:me,timerLoadevent:v,timerLoad:fe,timerDone:_e,timerInformthis:de,timerError:he}=ee();ne();var{_thisMedia:c,_fileAttributeName:ye,_cameraBox:Se,_fileSourceFoCam:we,_fileAsSRC:De,_fileAsRaw:Me,_liveFeedSRC:Ce,_fileAsSRCIndex:Re,_cameraDevice:A,_listCameraSource:h,_selectedCameraById:U,_selectedCameraByface:Ie,_liveFeedRawStreaming:y,_fileSourceFolder:Le,_fileAsSRCOps:xe,_fileAsSRCOpsCall:Ae,_resetFileSource:Ue}=re();const S=V(),b=ie(),w=oe();te();const _=Q();ae({title:"iService",titleTemplate:n=>`${n} - DashBoard`,icon:"/public/icons/favicon-32x32.jpg",script:{printJs:{type:"application/ld+json",innerHTML:"{  }"},ldJson:{type:"application/ld+json",innerHTML:"{ }"}}});var F=r("");r(!1),r(!1),r(!1),r(!1),r(!1);var B=r(!1),E=r();r(!1),E.value={myStore:["what did i bought ?","shop","Shop",!1,"/play/playcart"],myService:["what i'm saling ?","store","Service",!1,"/play/playservice"]};let G=r(null);var H=$((R=le)!=null?R:null);let g=r({});g.value.tableView="main",g.value.currency="ETB",g.value.language=1,g.value.languageOptions=["Tigrigna","English"];var a=r({});r(null);async function N(){a.value={};try{a.value.phone=null,a.value.phoneCode=["",""],a.value.geolocation={},a.value.geolocation={lat:"",long:""},a.value.location={},a.value.location={country:"",city:"",street:""}}catch{}return!0}N(),q(a,async(n,o)=>{var e,l,s;let i={},t=(e=n==null?void 0:n.geolocation)!=null?e:!1;return t&&(localStorage.setItem("geo.clat",L((l=t.lat)!=null?l:"")),localStorage.setItem("geo.clong",L((s=t.long)!=null?s:""))),b.set_reqHeader(i),!0});let D=r({}),d=r(null),M=r(null);class P{constructor(){var o,i;try{(o=navigator==null?void 0:navigator.mediaDevices)!=null&&o&&(c.value=navigator.mediaDevices,Objprops__[c]=navigator.mediaDevices)}catch{}try{(i=navigator==null?void 0:navigator.geolocation)!=null&&i&&(d.value=navigator.geolocation)}catch{}return!1}async _navigateGeo(o){var i;return(i=d.value)!=null&&i?d.value.watchPosition(t=>{var s,p,m,f;var e=parseFloat((p=(s=t.coords)==null?void 0:s.latitude)!=null?p:0),l=parseFloat((f=(m=t.coords)==null?void 0:m.longitude)!=null?f:0);return e&&e!=a.value.geolocation.lat&&(a.value.geolocation={lat:e,long:l},M.value={country:"",city:"",street:""}),this},t=>this,{enableHighAccuracy:!0,timeout:100*60*24,maximumAge:6e4}):navigator.geolocation.value.watchPosition(t=>{var s,p,m,f;var e=parseFloat((p=(s=t.coords)==null?void 0:s.latitude)!=null?p:0),l=parseFloat((f=(m=t.coords)==null?void 0:m.longitude)!=null?f:0);return e&&e!=a.value.geolocation.lat&&(a.value.geolocation={lat:e,long:l},M.value={country:"",city:"",street:""}),this},t=>this,{enableHighAccuracy:!0,timeout:100*60*24,maximumAge:6e4}),this}async _navigateDevice(){var i,t,e;if((i=c.value)!=null&&i){D.value.getUserMedia=(t=c.value.getUserMedia)!=null?t:{};for(let l of["getUserMedia","webkitGetUserMedia","mozGetUserMedia","msGetUserMedia"]){var o=(e=navigator[l])!=null?e:!1;o&&(D.value[l]=o)}}return this}async _enumNavigateDevice(){var o;return(o=c.value)!=null&&o&&c.value.enumerateDevices().then(i=>{h.value=[];for(let t in i){let e=i[t];e.kind==="videoinput"?(U.value=e.deviceId,h.value.push(e)):(_selectedMicById.value=e.deviceId,_listMicSource.value.push(e))}}),this}async _operateDevice(o){return o=="pause"?y.value.pause():o=="play"&&y.value.play(),!0}}z(()=>({height:S.screen.height+"px",width:S.screen.width+"px"})),J(w);var T=async function(){return console.log(`

Function - _manageStoreLogin --STORE Authentication Initializing [Phone,Stored_ID]---- 
`),await w.useLogin(a.value).then(async n=>{var o,i,t,e;return console.log(`
 LoginStatus = ${n.status} 
`),!((o=n.status)!=null&&o)||!((i=n.data)!=null&&i)?(await v({main:0},5e3,"Authentication Error"),_.push("/")):(a.value=Object.assign({},n.data),console.log(`
 User Acctype = ${a.value.acctype} 
`),(t=a.value.acctype)!=null&&t?(G.value=(e=a.value.acctype.profile)!=null?e:null,!0):(await v({main:5e3},0,"Access Error, Retrying.."),_.push("/")))}).catch(async n=>await v({main:0},0,"Error Connecting.."+n))},C=new P,O=new A;return v({main:0},0,"Loading..."),K(async()=>(console.log(`
 <==> Mining UserDevice Informations 
`),O._navigateDevice(),console.log(`
 <==> Mining UserDevice Informations == _cameraInstance END ==
`),console.log(`
 <==> Mining UserDevice Informations 
`),await C._navigateDevice(),await C._navigateGeo(),console.log(`
 <==> Mining UserDevice Informations == _navClass END == 
`),await T().then(async n=>!0).catch(async n=>(await v({main:0},5e3,"scrumbled privilege detected"),_.push("/"))))),W(async()=>{console.log(`

<---------Defaulting Profile <--this--> ---- 
`),console.log(`

---------Mining User Device Informations [Phones, GeoLocations]---- 
`)}),(n,o)=>{const i=X("router-view");return Y(),Z(j,{view:"lHh Lpr lFf"},{default:I(()=>[x(k,{style:{},class:"col-grow transparent row"},{default:I(()=>[x(i,{_profile:u(a),__permission:u(H),_acctype:u(a).acctype,lytCreatRow:u(B),lytSearchRow:u(F),_thisMedia2:u(c),_pageSetting:u(g)},null,8,["_profile","__permission","_acctype","lytCreatRow","lytSearchRow","_thisMedia2","_pageSetting"])]),_:1})]),_:1})}}};export{qe as default};
