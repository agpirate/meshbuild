import{q as Y,al as ve,am as U,A as me,an as fe,r as e,c as q,ao as ge,ap as Q,aq as he,ar as _e,as as ye,w as W,B as ee,aZ as te,aY as ae,D as pe,h as P,ay as se,g as Z,x as K,ag as Se,l as z,X as V,F as be,bd as we,W as F,Y as Ce,f as Me,a4 as ke,bi as Te,u as De,I as Re,o as xe,bp as Oe,bq as H,a9 as Ne,ab as qe}from"./index.86673bd5.js";import{t as Ee,v as le,e as Pe,p as ie,f as Ie,g as Ae,r as re,s as Be,k as ne,h as Ge,d as Le}from"./debugMixin.91fa187d.js";async function Fe(t){var d,v,f,y,u,a,s,m,D,g,p,C,b,O,_,w;let l={},n;for(let S of t){if(typeof S.name=="string")n=S.name;else return null;try{let i=(d=S.schema)!=null?d:null;if(!(i!=null&&i))continue;let h=(v=i.rules)!=null?v:!1,M=(f=i.onlySSR)!=null?f:!1;if("type"in i){if(M)continue;l[n]="",l[n]=(y=i.default)!=null?y:""}else{l[n]={};let R=i;for(let k in R)if(i=R[k],h=(u=i.rules)!=null?u:!1,M=(a=i.onlySSR)!=null?a:!1,"type"in i){if(M)continue;l[n][k]="",l[n][k]=(s=i.default)!=null?s:""}else{l[n][k]={};let I=i;for(let x in I)if(i=I[x],h=(m=i.rules)!=null?m:!1,M=(D=i.onlySSR)!=null?D:!1,"type"in i){if(M)continue;l[n][k][x]="",l[n][k][x]=(g=i.default)!=null?g:""}else{l[n][k][x]="";let A=i;for(let r in A)if(i=A[x],h=(p=i.rules)!=null?p:!1,M=(C=i.onlySSR)!=null?C:!1,"type"in i){if(M)continue;l[n][k][x][r]="",l[n][k][x][r]=(b=i.default)!=null?b:""}else{l[n][k][x][r]="";let o=i;for(let c in o)if(i=o[c],h=(O=i.rules)!=null?O:!1,M=(_=i.onlySSR)!=null?_:!1,"type"in i){if(M)continue;l[n][k][x][r][c]="",l[n][k][x][r][c]=(w=i.default)!=null?w:""}}}}}}catch(i){console.log(tempCols,i,S.schema,"SchemaSklts.js failed for column")}}return l}var Ze=Y({name:"QTooltip",inheritAttrs:!1,props:{...Ee,...ve,...U,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...U.transitionShow,default:"jump-down"},transitionHide:{...U.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:le},self:{type:String,default:"top middle",validator:le},offset:{type:Array,default:()=>[14,14],validator:Pe},scrollTarget:me,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...fe],setup(t,{slots:l,emit:n,attrs:d}){let v,f;const y=Z(),{proxy:{$q:u}}=y,a=e(null),s=e(!1),m=q(()=>ie(t.anchor,u.lang.rtl)),D=q(()=>ie(t.self,u.lang.rtl)),g=q(()=>t.persistent!==!0),{registerTick:p,removeTick:C}=ge(),{registerTimeout:b}=Q(),{transitionProps:O,transitionStyle:_}=he(t),{localScrollTarget:w,changeScrollEvent:S,unconfigureScrollTarget:i}=Ie(t,X),{anchorEl:h,canShow:M,anchorEvents:R}=Ae({showing:s,configureAnchorEl:ue}),{show:k,hide:I}=_e({showing:s,canShow:M,handleShow:o,handleHide:c,hideOnRouteChange:g,processOnMount:!0});Object.assign(R,{delayShow:L,delayHide:B});const{showPortal:x,hidePortal:A,renderPortal:r}=ye(y,a,de,"tooltip");if(u.platform.is.mobile===!0){const N={anchorEl:h,innerRef:a,onClickOutside(G){return I(G),G.target.classList.contains("q-dialog__backdrop")&&Se(G),!0}},j=q(()=>t.modelValue===null&&t.persistent!==!0&&s.value===!0);W(j,G=>{(G===!0?Ge:re)(N)}),ee(()=>{re(N)})}function o(N){x(),p(()=>{f=new MutationObserver(()=>E()),f.observe(a.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),E(),X()}),v===void 0&&(v=W(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,E)),b(()=>{x(!0),n("show",N)},t.transitionDuration)}function c(N){C(),A(),T(),b(()=>{A(!0),n("hide",N)},t.transitionDuration)}function T(){f!==void 0&&(f.disconnect(),f=void 0),v!==void 0&&(v(),v=void 0),i(),te(R,"tooltipTemp")}function E(){Be({targetEl:a.value,offset:t.offset,anchorEl:h.value,anchorOrigin:m.value,selfOrigin:D.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function L(N){if(u.platform.is.mobile===!0){ne(),document.body.classList.add("non-selectable");const j=h.value,G=["touchmove","touchcancel","touchend","click"].map(J=>[j,J,"delayHide","passiveCapture"]);ae(R,"tooltipTemp",G)}b(()=>{k(N)},t.delay)}function B(N){u.platform.is.mobile===!0&&(te(R,"tooltipTemp"),ne(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),b(()=>{I(N)},t.hideDelay)}function ue(){if(t.noParentEvent===!0||h.value===null)return;const N=u.platform.is.mobile===!0?[[h.value,"touchstart","delayShow","passive"]]:[[h.value,"mouseenter","delayShow","passive"],[h.value,"mouseleave","delayHide","passive"]];ae(R,"anchor",N)}function X(){if(h.value!==null||t.scrollTarget!==void 0){w.value=pe(h.value,t.scrollTarget);const N=t.noParentEvent===!0?E:I;S(w.value,N)}}function ce(){return s.value===!0?P("div",{...d,ref:a,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",d.class],style:[d.style,_.value],role:"tooltip"},K(l.default)):null}function de(){return P(se,O.value,ce)}return ee(T),Object.assign(y.proxy,{updatePosition:E}),r}});let $=e(null);const Ke=()=>{var t=e("saleitSchemas"),l=e("saleitSchema");let n=e({}),d=e({});Le("saleitSchemas","saleitSchema").then(a=>{a&&($.value=a)});async function v(a,s=null){var g,p,C;if(!$.value)return!1;let m=(g=$.value[a].rules)!=null?g:null,D=(C=(p=n.value[a])!=null?p:null)!=null?C:s;if(!m)return!0;d.value[a]=null;for(let b of m)if(!await y(b,D)){d.value[a]=f(b),console.log("No Validated  for = "+a);break}return console.log(d.value," Validatiotion Obj."),!0}function f(a){switch(a.type){case"required":return"Field is required";case"minValue":return"Minimum Value Error";case"maxValue":return"Maximam Value Error";case"minLength":return`Minimum length is ${a.value}`;case"maxLength":return`Maximum length is ${a.value}`;case"pattern":return"Invalid format";default:return"Invalid input"}}const y=async(a,s)=>{switch(console.log(typeof a,typeof s,"validation is thisrule210"),a.type){case"required":return s!=null&&s!="";case"minValue":return s>=a.value;case"maxValue":return s<=a.value;case"minLength":return s.length>=a.value;case"maxLength":return s.length<=a.value;case"pattern":return new RegExp(a.value).test(s);case"type":return u(a.value,s);default:return!0}},u=(a,s)=>{switch(a){case"number":return!isNaN(s);case"string":return typeof s=="string";case"array":return Array.isArray(s);case"object":return typeof s=="object"&&!Array.isArray(s);default:return!1}};return{thisSchemaPath:t,thisSchemaFile:l,_debugObj:d,_validateThis:v}},Xe=()=>{const t=e(0);e("");const l=e("");e(""),e(""),e([]),e(null),e(null),e(null);let n=e({}),d=e([]),v=e({}),f=e([]),y=e([]);e(["userID","userName","time","action"]);let u=e([]);e("");let a=e(["","orderID","quantity","price","description","time","action"]),s=e(["phone","userName","geolocation","location","userID","phoneCode"]);e({});let m="";const D=async _=>f.value.push(_),g=async _=>y.value.push(_),p=async _=>u.value=_;async function C(_,w){return console.error("Default Row Generations for ==>> Main Model <<",w,_),w.length?await Fe(w).then(async S=>{var i;for(let h of _)S[h]=(i=l.value._profile[h])!=null?i:"";return S}).catch(S=>(console.log("Error SchemaSklt",S),{})):{}}let b=async(_,w=[])=>{let S=[],i=[];console.log("Default Schema Generations for ==>> Foreign Model <<");for(let h in _){let M={name:h,schema:_[h]};S.push(M),w.includes(h)||i.push(h)}return[S,i]};async function O(_){var S;let w={};for(let i of _)w[i]=(S=l.value._profile[i])!=null?S:"",console.log(w[i],i,"-----------------------------");return console.log("Default Row Generations for ==>> Foreign Model <<",_),w}return{count:t,allfun_tableModel_Cols:D,accfun_tableModel_Cols:g,visfun_tableModel_Cols:p,userInformation:l,_this_Query:n,_tableModel_Cols:d,_tableModel_Row:v,userlabels_tableModel_Cols:s,modal_iss:m,modelRow_Builder:C,foreign__tableModel_Cols:b,foreign_modelRow_Builder:O,visible_client_tableModel_Cols:a}};let oe=e();oe=q(()=>{try{const t=window.innerWidth,l=window.innerHeight;return t<600||l<400?"Small":t>=600&&t<1200||l>=400&&l<800?"Medium":"Large"}catch{return 0}});const je={class:"notification"},Ue={style:{color:"whitesmoke",margin:"0 0 0"},class:"fontastyle"},ze={class:"col-auto row"},Ve=["onClick"],Je={__name:"debugCards",props:{messages:{type:Object,default:()=>({})}},emits:["closeButton"],setup(t,{emit:l}){const n=l;function d(v,f){n("closeButton",v,f)}return(v,f)=>(z(),V("div",{class:Te([De(oe)=="Small"?"mobile":"desktop","z-top flexlyt columnitm"]),style:{position:"fixed",bottom:"5%",left:"3%","border-radius":"3px",padding:"3px",margin:"2px"}},[(z(!0),V(be,null,we(t.messages,(y,u)=>(z(),V("div",{key:u},[F("div",je,[F("p",Ue,Ce(y.content),1),F("div",ze,[F("button",{style:{"background-color":"transparent",border:"0px",color:"red","min-width":"30px","min-height":"30px"},class:"",onClick:a=>d("close",u)},[Me(ke,{name:"close",size:"md",style:{width:"60px"}})],8,Ve)])])]))),128))],2))}},He={ratio:[String,Number]};function $e(t,l){return q(()=>{const n=Number(t.ratio||(l!==void 0?l.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const Qe=1.7778;var et=Y({name:"QImg",props:{...He,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Qe},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(t,{slots:l,emit:n}){const d=e(t.initialRatio),v=$e(t,d),f=Z(),{registerTimeout:y,removeTimeout:u}=Q(),{registerTimeout:a,removeTimeout:s}=Q(),m=q(()=>t.placeholderSrc!==void 0?{src:t.placeholderSrc}:null),D=q(()=>t.errorSrc!==void 0?{src:t.errorSrc,__qerror:!0}:null),g=[e(null),e(m.value)],p=e(0),C=e(!1),b=e(!1),O=q(()=>`q-img q-img--${t.noNativeMenu===!0?"no-":""}menu`),_=q(()=>({width:t.width,height:t.height})),w=q(()=>`q-img__image ${t.imgClass!==void 0?t.imgClass+" ":""}q-img__image--with${t.noTransition===!0?"out":""}-transition q-img__image--`),S=q(()=>({...t.imgStyle,objectFit:t.fit,objectPosition:t.position}));function i(){if(s(),t.loadingShowDelay===0){C.value=!0;return}a(()=>{C.value=!0},t.loadingShowDelay)}function h(){s(),C.value=!1}function M({target:r}){H(f)===!1&&(u(),d.value=r.naturalHeight===0?.5:r.naturalWidth/r.naturalHeight,R(r,1))}function R(r,o){o===1e3||H(f)===!0||(r.complete===!0?k(r):y(()=>{R(r,o+1)},50))}function k(r){H(f)!==!0&&(p.value=p.value^1,g[p.value].value=null,h(),r.getAttribute("__qerror")!=="true"&&(b.value=!1),n("load",r.currentSrc||r.src))}function I(r){u(),h(),b.value=!0,g[p.value].value=D.value,g[p.value^1].value=m.value,n("error",r)}function x(r){const o=g[r].value,c={key:"img_"+r,class:w.value,style:S.value,alt:t.alt,crossorigin:t.crossorigin,decoding:t.decoding,referrerpolicy:t.referrerpolicy,height:t.height,width:t.width,loading:t.loading,fetchpriority:t.fetchpriority,"aria-hidden":"true",draggable:t.draggable,...o};return p.value===r?Object.assign(c,{class:c.class+"current",onLoad:M,onError:I}):c.class+="loaded",P("div",{class:"q-img__container absolute-full",key:"img"+r},P("img",c))}function A(){return C.value===!1?P("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(l[b.value===!0?"error":"default"])):P("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():t.noSpinner===!0?void 0:[P(Oe,{color:t.spinnerColor,size:t.spinnerSize})])}{let r=function(){W(()=>t.src||t.srcset||t.sizes?{src:t.src,srcset:t.srcset,sizes:t.sizes}:null,o=>{u(),b.value=!1,o===null?(h(),g[p.value^1].value=m.value):i(),g[p.value].value=o},{immediate:!0})};Re.value===!0?xe(r):r()}return()=>{const r=[];return v.value!==null&&r.push(P("div",{key:"filler",style:v.value})),g[0].value!==null&&r.push(x(0)),g[1].value!==null&&r.push(x(1)),r.push(P(se,{name:"q-transition--fade"},A)),P("div",{key:"main",class:O.value,style:_.value,role:"img","aria-label":t.alt},r)}}}),tt=Y({name:"QList",props:{...Ne,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:l}){const n=Z(),d=qe(t,n.proxy.$q),v=q(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(d.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>P(t.tag,{class:v.value},K(l.default))}});const at=()=>{let t=e(!0);var l=e(null),n=e(null),d=e(null),v=e(!1),f=e([]),y=e([]),u=e([]),a=e(0),s=e(!1),m=e({width:100,height:100});e("");var D=e(!1),g=e({}),p=e(!1),C=e([]),b=e([]),O=e([]),_=e(!1),w=e(!0),S=e(null),i=e(!1),h=e({width:{min:50},height:{min:50}}),M=q(()=>{var r;return(r=D.value)!=null?r:!1}),R=async()=>(d.value=null,v.value=!1,f.value=[],u.value=[],y.value=[],a.value=0,s.value=!1,g.value={},p.value=!1,M.value=!1,!0),k=async r=>(s.value?(u.value.splice(r,1),y.value.splice(r,1),a.value=0):a.value=r,!0),I=async r=>(s.value?(f.value.splice(r,1),a.value=0):a.value=r,!0),x=async(r,o)=>{var c=r.target.files;!c||c.length===0||(await R(),n.value=o,d.value="folder",Array.from(c).forEach(T=>{y.value.push(T),u.value.push(URL.createObjectURL(T))}))};class A{constructor(){console.log("Initializing Camera Device Navigator"),this.mediaStream=null}async _navigateDevice(){try{if("mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices)return C.value.getUserMedia=navigator.mediaDevices.getUserMedia,["webkitGetUserMedia","mozGetUserMedia","msGetUserMedia"].forEach(o=>{var T;var c=(T=navigator[o])!=null?T:!1;c&&(C.value[o]=c)}),!0;throw"media device not supported ; "}catch(o){return console.error("Error :",o),l.value=null,!1}}async _enumNavigateDevice(){var c,T,E,L;try{var o=await l.value.enumerateDevices();return b.value=o.filter(B=>B.kind==="videoinput"),O.value=o.filter(B=>B.kind==="audioinput"),_.value=(T=(c=b.value[0])==null?void 0:c.deviceId)!=null?T:null,S.value=(L=(E=O.value[0])==null?void 0:E.deviceId)!=null?L:null,!0}catch(B){return console.error("Error enumerating devices:",B),!1}}async _openCamera(o=""){try{if(await R(),!(await this._navigateDevice()&&Object.keys(C.value).length))throw"media device not found";v.value=!0,d.value="camera",n.value=o,p.value="init",this.mediaStream=navigator.mediaDevices,l.value=navigator.mediaDevices,h.value={deviceId:_.value?{exact:_.value}:void 0,facingMode:w.value?"user":"environment",width:{min:50,ideal:1e3,max:1920},height:{min:50,ideal:100,max:1080}};let T={video:h.value,audio:i.value};try{D.value=await navigator.mediaDevices.getUserMedia(T),p.value="ok",g.value.srcObject=D.value,g.value.onloadedmetadata=async()=>{await g.value.play()}}catch(E){throw E.name==="NotAllowedError"?E.permissionDenied?t.value="Please allow camera access.":t.value="please unblock camera access":t.value="Check Camera Access & Retry ","getUserMeida"}}catch(c){console.error("Camera Access Error : _ :",c)}}async checkCameraPermission(){try{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks()[0].stop(),t.value="granted"}catch(o){o.name==="NotAllowedError"?o.permissionDenied?t.value="Please allow camera access.":t.value="please unblock camera access":(console.error("Error checking camera permission:",o),t.value="Check Camera Access & Retry ")}}async _stopCamera(){var o;try{await R(),(o=D.value)==null||o.getTracks().forEach(c=>c.stop()),g.value={}}catch(c){console.error("Error stopping camera:",c)}return console.error("Camera Stopped."),!0}async _screenShoot(o=!1){if(o)return y.value=[],u.value=[],!0;if(u.value.length>=4)return!0;m.value.getContext("2d").drawImage(g.value,0,0,m.value.width,m.value.height);try{u.value.push(m.value.toDataURL("image/png")),m.value.toBlob(T=>{y.value.push(new File([T],`screenshot_${Date.now()}.png`,{type:"image/png"}))},"image/png")}catch{u.value.push(m.value.toDataURL("image/jpeg")),m.value.toBlob(T=>{y.value.push(new File([T],`screenshot_${Date.now()}.jpeg`,{type:"image/jpeg"}))},"image/jpeg")}return!0}async _saveScreenShoots(){var o;try{v.value=!1,(o=D.value)==null||o.getTracks().forEach(c=>c.stop()),g.value.src=null}catch(c){console.error("Error saving screenshots:",c),this._stopCamera()}return!0}async _setCameraParam(o="",c=!1){w.value=c,_.value=o,await this._openCamera()}async _setMicParam(o=""){var c,T;S.value=(T=(c=O.value[o])==null?void 0:c.deviceId)!=null?T:null,await this._openCamera()}async _operateDevice(o){return o==="pause"?g.value.pause():o==="play"&&g.value.play(),!0}}return{hasCameraPermission:t,_thisMedia:l,_fileAttributeName:n,_cameraBox:v,_fileSourceFoCam:d,_fileAsSRC:u,_fileAsString:f,_fileAsRaw:y,_liveFeedSRC:m,_fileAsSRCIndex:a,_cameraDevice:A,_listCameraSource:b,_selectedCameraById:_,_selectedCameraByface:w,_liveFeedRawStreaming:g,_liveFeedRawStreamingStatus:p,_fileSourceFolder:x,_fileAsSRCOps:s,_fileAsSRCOpsCall:k,_fileAsSRCOpsCall2:I,_resetFileSource:R,get_liveFeedRaw:M}},lt=()=>{e(0);var t=e([]),l=e([]),n=e([]),d=e([]);function v(a=6e3,s="",m=""){return t.value.push({color:"grey",content:s,title:m}),console.log("inform Status",s),setTimeout(()=>(t.value.shift(),!1),a),!0}function f(a=6e3,s="",m=""){return l.value.push({color:"green",content:s,title:m}),setTimeout(()=>(l.value.shift(),!1),a),!0}function y(a=6e3,s="",m=""){return n.value.push({color:"grey",content:s,title:m}),console.log("inform Status",s),setTimeout(()=>(n.value.shift(),!1),a),!0}function u(a=6e3,s="",m=""){return d.value.push({color:"red",content:s,title:m}),setTimeout(()=>(d.value.shift(),!1),a),!0}return{status_Loading:t,status_DoneMessage:l,status_KnowthisMessage:n,status_WarnthisMessage:d,status_timerLoad:v,status_timerDone:f,status_timerInformthis:y,status_timerError:u}},it=()=>{let t=e("profile"),l=e(0),n=e(null),d=e(null),v=e({hover:!1,active:!1,selected:!1,details:!1,clients:!1,comments:!1}),f=e(null),y=e(null);e(!1);let u=e(null),a=e(null),s=e(null),m=e(null),D=e(null),g=e(null),p=e(null),C=e(null),b=e(null),O=e(!1),_=e(),w=e(),S=e(),i=e(null),h=e(null),M=e(null),R=e(null),k=e(null);return{active_fileName:t,active_fileIndex:l,__thisFileOps_onCard:n,__thisFileOps_onZoom:d,thisOps:v,thisOpsCard:f,thissubOpsStatus:y,_is_thisOwner:O,_is_this_netPrice:_,_is_this_open:w,_is_this_currency:S,__thisBox:u,__thisIndex:m,__thisOps:D,__thisOpsCard:g,__thisOpsStatus:p,__thissubOps:C,__thissubOpsStatus:b,active_foreignModel:i,active_foreignModelDialog:a,active_foreignModelFilter:s,active_foreignModelIndex:h,active_foreignModelOps:M,active_foreignModelOpsStatus:R,active_foreignModelsubOps:k}},rt=()=>{let t="saleit",l="/saleitapi/saleit",n="saleitSchemas",d="saleitSchema",v=e(["userID","userName"]),f=e([]),y=e(["phone","userName","geolocation","location","userID","phoneCode","saleitgr"]);return{Model_Name:t,Model_Url:l,saleit_schemaPath:n,saleit_schemaFile:d,locked_modelCols_label:v,flexInvisible_modelCols_labels:f,useric_modelCols_label:y,plugable_saleit_Cols:[{name:"cost",schema:{type:"Number",default:0}},{name:"time",schema:{type:"String",default:""}},{name:"action",schema:{type:"String",default:""}}],labels_plugable_saleit_Cols:["cost","time","action"]}},nt=()=>{e(0);let t=e(""),l=e([]),n=e({}),d=e([]),v=e([]);e(["userID","userName","time","action"]);let f=e([]);return e(""),{_this_Schema:t,_tableModel_Cols:l,allowed_modelCols:v,_tableModel_Row:n,all_modelCols_label:d,visible_modelCols_label:f}};export{et as Q,Je as _,Ke as a,tt as b,Xe as c,lt as d,it as e,rt as f,nt as g,Ze as h,at as u};
