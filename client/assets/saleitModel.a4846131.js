import{aQ as Te,r as a,aD as ke,an as ce,J as Ee,al as F,w as W,o as ye,B as G,g as U,aq as ae,E as ie,aR as de,aj as Re,K as De,q as Q,as as qe,aS as Y,A as Le,au as Ae,c as L,aT as He,aw as ne,aU as Be,ax as Ne,aV as Ie,D as Pe,h as H,aW as pe,x as K,ar as We,l as J,V as Z,F as Oe,a3 as je,U as z,X as ze,f as Fe,aL as Ge,af as $e,u as Ve,I as Ue,aX as Qe,aY as ee,at as Ke,av as Xe}from"./index.a557511d.js";import{d as Ye}from"./debugMixin.91ffc486.js";async function Je(e){var i,n,f,u,d,o,r,v,k,y,s,h,x,R,S,C;let t={},l;for(let b of e){if(typeof b.name=="string")l=b.name;else return null;try{let c=(i=b.schema)!=null?i:null;if(!(c!=null&&c))continue;let g=(n=c.rules)!=null?n:!1,M=(f=c.onlySSR)!=null?f:!1;if("type"in c){if(M)continue;t[l]="",t[l]=(u=c.default)!=null?u:""}else{t[l]={};let T=c;for(let w in T)if(c=T[w],g=(d=c.rules)!=null?d:!1,M=(o=c.onlySSR)!=null?o:!1,"type"in c){if(M)continue;t[l][w]="",t[l][w]=(r=c.default)!=null?r:""}else{t[l][w]={};let D=c;for(let q in D)if(c=D[q],g=(v=c.rules)!=null?v:!1,M=(k=c.onlySSR)!=null?k:!1,"type"in c){if(M)continue;t[l][w][q]="",t[l][w][q]=(y=c.default)!=null?y:""}else{t[l][w][q]="";let N=c;for(let m in N)if(c=N[q],g=(s=c.rules)!=null?s:!1,M=(h=c.onlySSR)!=null?h:!1,"type"in c){if(M)continue;t[l][w][q][m]="",t[l][w][q][m]=(x=c.default)!=null?x:""}else{t[l][w][q][m]="";let _=c;for(let p in _)if(c=_[p],g=(R=c.rules)!=null?R:!1,M=(S=c.onlySSR)!=null?S:!1,"type"in c){if(M)continue;t[l][w][q][m][p]="",t[l][w][q][m][p]=(C=c.default)!=null?C:""}}}}}}catch(c){console.log(tempCols,c,b.schema,"SchemaSklts.js failed for column")}}return t}function oe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Te.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const be={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},ht={...be,contextMenu:Boolean};function Ze({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:i,proxy:n,emit:f}=U(),u=a(null);let d=null;function o(s){return u.value===null?!1:s===void 0||s.touches===void 0||s.touches.length<=1}const r={};l===void 0&&(Object.assign(r,{hide(s){n.hide(s)},toggle(s){n.toggle(s),s.qAnchorHandled=!0},toggleKey(s){ke(s,13)===!0&&r.toggle(s)},contextClick(s){n.hide(s),ce(s),Ee(()=>{n.show(s),s.qAnchorHandled=!0})},prevent:ce,mobileTouch(s){if(r.mobileCleanup(s),o(s)!==!0)return;n.hide(s),u.value.classList.add("non-selectable");const h=s.target;F(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[u.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,n.show(s),s.qAnchorHandled=!0},300)},mobileCleanup(s){u.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&s!==void 0&&oe()}}),l=function(s=i.contextMenu){if(i.noParentEvent===!0||u.value===null)return;let h;s===!0?n.$q.platform.is.mobile===!0?h=[[u.value,"touchstart","mobileTouch","passive"]]:h=[[u.value,"mousedown","hide","passive"],[u.value,"contextmenu","contextClick","notPassive"]]:h=[[u.value,"click","toggle","passive"],[u.value,"keyup","toggleKey","passive"]],F(r,"anchor",h)});function v(){ae(r,"anchor")}function k(s){for(u.value=s;u.value.classList.contains("q-anchor--skip");)u.value=u.value.parentNode;l()}function y(){if(i.target===!1||i.target===""||n.$el.parentNode===null)u.value=null;else if(i.target===!0)k(n.$el.parentNode);else{let s=i.target;if(typeof i.target=="string")try{s=document.querySelector(i.target)}catch{s=void 0}s!=null?(u.value=s.$el||s,l()):(u.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return W(()=>i.contextMenu,s=>{u.value!==null&&(v(),l(s))}),W(()=>i.target,()=>{u.value!==null&&v(),y()}),W(()=>i.noParentEvent,s=>{u.value!==null&&(s===!0?v():l())}),ye(()=>{y(),t!==!0&&i.modelValue===!0&&u.value===null&&f("update:modelValue",!1)}),G(()=>{d!==null&&clearTimeout(d),v()}),{anchorEl:u,canShow:o,anchorEvents:r}}function et(e,t){const l=a(null);let i;function n(d,o){const r=`${o!==void 0?"add":"remove"}EventListener`,v=o!==void 0?o:i;d!==window&&d[r]("scroll",v,ie.passive),window[r]("scroll",v,ie.passive),i=o}function f(){l.value!==null&&(n(l.value),l.value=null)}const u=W(()=>e.noParentEvent,()=>{l.value!==null&&(f(),t())});return G(u),{localScrollTarget:l,unconfigureScrollTarget:f,changeScrollEvent:n}}const{notPassiveCapture:$}=ie,O=[];function V(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=de.length-1;for(;l>=0;){const i=de[l].$;if(i.type.name==="QTooltip"){l--;continue}if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;l--}for(let i=O.length-1;i>=0;i--){const n=O[i];if((n.anchorEl.value===null||n.anchorEl.value.contains(t)===!1)&&(t===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(t)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function tt(e){O.push(e),O.length===1&&(document.addEventListener("mousedown",V,$),document.addEventListener("touchstart",V,$))}function fe(e){const t=O.findIndex(l=>l===e);t!==-1&&(O.splice(t,1),O.length===0&&(document.removeEventListener("mousedown",V,$),document.removeEventListener("touchstart",V,$)))}let ve,me;function he(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function lt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const re={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{re[`${e}#ltr`]=e,re[`${e}#rtl`]=e});function ge(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:re[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function at(e,t){let{top:l,left:i,right:n,bottom:f,width:u,height:d}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],i-=t[0],f+=t[1],n+=t[0],u+=t[0],d+=t[1]),{top:l,bottom:f,height:d,left:i,right:n,width:u,middle:i+(n-i)/2,center:l+(f-l)/2}}function it(e,t,l){let{top:i,left:n}=e.getBoundingClientRect();return i+=t.top,n+=t.left,l!==void 0&&(i+=l[1],n+=l[0]),{top:i,bottom:i+1,height:1,left:n,right:n+1,width:1,middle:n,center:i}}function nt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function _e(e,t,l,i){return{top:e[l.vertical]-t[i.vertical],left:e[l.horizontal]-t[i.horizontal]}}function Se(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Se(e,t+1)},10);return}const{targetEl:l,offset:i,anchorEl:n,anchorOrigin:f,selfOrigin:u,absoluteOffset:d,fit:o,cover:r,maxHeight:v,maxWidth:k}=e;if(Re.is.ios===!0&&window.visualViewport!==void 0){const M=document.body.style,{offsetLeft:T,offsetTop:w}=window.visualViewport;T!==ve&&(M.setProperty("--q-pe-left",T+"px"),ve=T),w!==me&&(M.setProperty("--q-pe-top",w+"px"),me=w)}const{scrollLeft:y,scrollTop:s}=l,h=d===void 0?at(n,r===!0?[0,0]:i):it(n,d,i);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:k||"100vw",maxHeight:v||"100vh",visibility:"visible"});const{offsetWidth:x,offsetHeight:R}=l,{elWidth:S,elHeight:C}=o===!0||r===!0?{elWidth:Math.max(h.width,x),elHeight:r===!0?Math.max(h.height,R):R}:{elWidth:x,elHeight:R};let b={maxWidth:k,maxHeight:v};(o===!0||r===!0)&&(b.minWidth=h.width+"px",r===!0&&(b.minHeight=h.height+"px")),Object.assign(l.style,b);const c=nt(S,C);let g=_e(h,c,f,u);if(d===void 0||i===void 0)te(g,h,c,f,u);else{const{top:M,left:T}=g;te(g,h,c,f,u);let w=!1;if(g.top!==M){w=!0;const D=2*i[1];h.center=h.top-=D,h.bottom-=D+2}if(g.left!==T){w=!0;const D=2*i[0];h.middle=h.left-=D,h.right-=D+2}w===!0&&(g=_e(h,c,f,u),te(g,h,c,f,u))}b={top:g.top+"px",left:g.left+"px"},g.maxHeight!==void 0&&(b.maxHeight=g.maxHeight+"px",h.height>g.maxHeight&&(b.minHeight=b.maxHeight)),g.maxWidth!==void 0&&(b.maxWidth=g.maxWidth+"px",h.width>g.maxWidth&&(b.minWidth=b.maxWidth)),Object.assign(l.style,b),l.scrollTop!==s&&(l.scrollTop=s),l.scrollLeft!==y&&(l.scrollLeft=y)}function te(e,t,l,i,n){const f=l.bottom,u=l.right,d=De(),o=window.innerHeight-d,r=document.body.clientWidth;if(e.top<0||e.top+f>o)if(n.vertical==="center")e.top=t[i.vertical]>o/2?Math.max(0,o-f):0,e.maxHeight=Math.min(f,o);else if(t[i.vertical]>o/2){const v=Math.min(o,i.vertical==="center"?t.center:i.vertical===n.vertical?t.bottom:t.top);e.maxHeight=Math.min(f,v),e.top=Math.max(0,v-f)}else e.top=Math.max(0,i.vertical==="center"?t.center:i.vertical===n.vertical?t.top:t.bottom),e.maxHeight=Math.min(f,o-e.top);if(e.left<0||e.left+u>r)if(e.maxWidth=Math.min(u,r),n.horizontal==="middle")e.left=t[i.horizontal]>r/2?Math.max(0,r-u):0;else if(t[i.horizontal]>r/2){const v=Math.min(r,i.horizontal==="middle"?t.middle:i.horizontal===n.horizontal?t.right:t.left);e.maxWidth=Math.min(u,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,i.horizontal==="middle"?t.middle:i.horizontal===n.horizontal?t.left:t.right),e.maxWidth=Math.min(u,r-e.left)}var gt=Q({name:"QTooltip",inheritAttrs:!1,props:{...be,...qe,...Y,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...Y.transitionShow,default:"jump-down"},transitionHide:{...Y.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:he},self:{type:String,default:"top middle",validator:he},offset:{type:Array,default:()=>[14,14],validator:lt},scrollTarget:Le,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Ae],setup(e,{slots:t,emit:l,attrs:i}){let n,f;const u=U(),{proxy:{$q:d}}=u,o=a(null),r=a(!1),v=L(()=>ge(e.anchor,d.lang.rtl)),k=L(()=>ge(e.self,d.lang.rtl)),y=L(()=>e.persistent!==!0),{registerTick:s,removeTick:h}=He(),{registerTimeout:x}=ne(),{transitionProps:R,transitionStyle:S}=Be(e),{localScrollTarget:C,changeScrollEvent:b,unconfigureScrollTarget:c}=et(e,se),{anchorEl:g,canShow:M,anchorEvents:T}=Ze({showing:r,configureAnchorEl:xe}),{show:w,hide:D}=Ne({showing:r,canShow:M,handleShow:_,handleHide:p,hideOnRouteChange:y,processOnMount:!0});Object.assign(T,{delayShow:j,delayHide:I});const{showPortal:q,hidePortal:N,renderPortal:m}=Ie(u,o,Me,"tooltip");if(d.platform.is.mobile===!0){const A={anchorEl:g,innerRef:o,onClickOutside(P){return D(P),P.target.classList.contains("q-dialog__backdrop")&&We(P),!0}},X=L(()=>e.modelValue===null&&e.persistent!==!0&&r.value===!0);W(X,P=>{(P===!0?tt:fe)(A)}),G(()=>{fe(A)})}function _(A){q(),s(()=>{f=new MutationObserver(()=>B()),f.observe(o.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),B(),se()}),n===void 0&&(n=W(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,B)),x(()=>{q(!0),l("show",A)},e.transitionDuration)}function p(A){h(),N(),E(),x(()=>{N(!0),l("hide",A)},e.transitionDuration)}function E(){f!==void 0&&(f.disconnect(),f=void 0),n!==void 0&&(n(),n=void 0),c(),ae(T,"tooltipTemp")}function B(){Se({targetEl:o.value,offset:e.offset,anchorEl:g.value,anchorOrigin:v.value,selfOrigin:k.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function j(A){if(d.platform.is.mobile===!0){oe(),document.body.classList.add("non-selectable");const X=g.value,P=["touchmove","touchcancel","touchend","click"].map(ue=>[X,ue,"delayHide","passiveCapture"]);F(T,"tooltipTemp",P)}x(()=>{w(A)},e.delay)}function I(A){d.platform.is.mobile===!0&&(ae(T,"tooltipTemp"),oe(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),x(()=>{D(A)},e.hideDelay)}function xe(){if(e.noParentEvent===!0||g.value===null)return;const A=d.platform.is.mobile===!0?[[g.value,"touchstart","delayShow","passive"]]:[[g.value,"mouseenter","delayShow","passive"],[g.value,"mouseleave","delayHide","passive"]];F(T,"anchor",A)}function se(){if(g.value!==null||e.scrollTarget!==void 0){C.value=Pe(g.value,e.scrollTarget);const A=e.noParentEvent===!0?B:D;b(C.value,A)}}function Ce(){return r.value===!0?H("div",{...i,ref:o,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,S.value],role:"tooltip"},K(t.default)):null}function Me(){return H(pe,R.value,Ce)}return G(E),Object.assign(u.proxy,{updatePosition:B}),m}});function _t(e){return e.charAt(0).toUpperCase()+e.slice(1)}function yt(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function pt(e,t,l){if(l<=t)return t;const i=l-t+1;let n=t+(e-t)%i;return n<t&&(n=i+n),n===0?0:n}function bt(e,t=2,l="0"){if(e==null)return e;const i=""+e;return i.length>=t?i:new Array(t-i.length+1).join(l)+i}let le=a(null);const St=()=>{var e=a("saleitSchemas"),t=a("saleitSchema");let l=a({}),i=a({});Ye("saleitSchemas","saleitSchema").then(o=>{o&&(le.value=o)});async function n(o,r=null){var y,s,h;if(!le.value)return!1;let v=(y=le.value[o].rules)!=null?y:null,k=(h=(s=l.value[o])!=null?s:null)!=null?h:r;if(!v)return!0;i.value[o]=null;for(let x of v)if(!await u(x,k)){i.value[o]=f(x),console.log("No Validated  for = "+o);break}return console.log(i.value," Validatiotion Obj."),!0}function f(o){switch(o.type){case"required":return"Field is required";case"minValue":return"Minimum Value Error";case"maxValue":return"Maximam Value Error";case"minLength":return`Minimum length is ${o.value}`;case"maxLength":return`Maximum length is ${o.value}`;case"pattern":return"Invalid format";default:return"Invalid input"}}const u=async(o,r)=>{switch(console.log(typeof o,typeof r,"validation is thisrule210"),o.type){case"required":return r!=null&&r!="";case"minValue":return r>=o.value;case"maxValue":return r<=o.value;case"minLength":return r.length>=o.value;case"maxLength":return r.length<=o.value;case"pattern":return new RegExp(o.value).test(r);case"type":return d(o.value,r);default:return!0}},d=(o,r)=>{switch(o){case"number":return!isNaN(r);case"string":return typeof r=="string";case"array":return Array.isArray(r);case"object":return typeof r=="object"&&!Array.isArray(r);default:return!1}};return{thisSchemaPath:e,thisSchemaFile:t,_debugObj:i,_validateThis:n}},wt=()=>{const e=a(0);a("");const t=a("");a(""),a(""),a([]),a(null),a(null),a(null);let l=a({}),i=a([]),n=a({}),f=a([]),u=a([]);a(["userID","userName","time","action"]);let d=a([]);a("");let o=a(["","orderID","quantity","price","description","time","action"]),r=a(["phone","userName","geolocation","location","userID","phoneCode"]);a({});let v="";const k=async S=>f.value.push(S),y=async S=>u.value.push(S),s=async S=>d.value=S;async function h(S,C){return console.error("Default Row Generations for ==>> Main Model <<",C,S),C.length?await Je(C).then(async b=>{var c;for(let g of S)b[g]=(c=t.value._profile[g])!=null?c:"";return b}).catch(b=>(console.log("Error SchemaSklt",b),{})):{}}let x=async(S,C=[])=>{let b=[],c=[];console.log("Default Schema Generations for ==>> Foreign Model <<");for(let g in S){let M={name:g,schema:S[g]};b.push(M),C.includes(g)||c.push(g)}return[b,c]};async function R(S){var b;let C={};for(let c of S)C[c]=(b=t.value._profile[c])!=null?b:"",console.log(C[c],c,"-----------------------------");return console.log("Default Row Generations for ==>> Foreign Model <<",S),C}return{count:e,allfun_tableModel_Cols:k,accfun_tableModel_Cols:y,visfun_tableModel_Cols:s,userInformation:t,_this_Query:l,_tableModel_Cols:i,_tableModel_Row:n,userlabels_tableModel_Cols:r,modal_iss:v,modelRow_Builder:h,foreign__tableModel_Cols:x,foreign_modelRow_Builder:R,visible_client_tableModel_Cols:o}};let we=a();we=L(()=>{try{const e=window.innerWidth,t=window.innerHeight;return e<600||t<400?"Small":e>=600&&e<1200||t>=400&&t<800?"Medium":"Large"}catch{return 0}});const ot={class:"notification"},rt={style:{color:"whitesmoke",margin:"0 0 0"},class:"fontastyle"},st={class:"col-auto row"},ut=["onClick"],xt={__name:"debugCards",props:{messages:{type:Object,default:()=>({})}},emits:["closeButton"],setup(e,{emit:t}){const l=t;function i(n,f){l("closeButton",n,f)}return(n,f)=>(J(),Z("div",{class:$e([Ve(we)=="Small"?"mobile":"desktop","z-top flexlyt columnitm"]),style:{position:"fixed",bottom:"5%",left:"3%","border-radius":"3px",padding:"3px",margin:"2px"}},[(J(!0),Z(Oe,null,je(e.messages,(u,d)=>(J(),Z("div",{key:d},[z("div",ot,[z("p",rt,ze(u.content),1),z("div",st,[z("button",{style:{"background-color":"transparent",border:"0px",color:"red","min-width":"30px","min-height":"30px"},class:"",onClick:o=>i("close",d)},[Fe(Ge,{name:"close",size:"md",style:{width:"60px"}})],8,ut)])])]))),128))],2))}},ct={ratio:[String,Number]};function dt(e,t){return L(()=>{const l=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const ft=1.7778;var Ct=Q({name:"QImg",props:{...ct,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ft},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:l}){const i=a(e.initialRatio),n=dt(e,i),f=U(),{registerTimeout:u,removeTimeout:d}=ne(),{registerTimeout:o,removeTimeout:r}=ne(),v=L(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),k=L(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),y=[a(null),a(v.value)],s=a(0),h=a(!1),x=a(!1),R=L(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),S=L(()=>({width:e.width,height:e.height})),C=L(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),b=L(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function c(){if(r(),e.loadingShowDelay===0){h.value=!0;return}o(()=>{h.value=!0},e.loadingShowDelay)}function g(){r(),h.value=!1}function M({target:m}){ee(f)===!1&&(d(),i.value=m.naturalHeight===0?.5:m.naturalWidth/m.naturalHeight,T(m,1))}function T(m,_){_===1e3||ee(f)===!0||(m.complete===!0?w(m):u(()=>{T(m,_+1)},50))}function w(m){ee(f)!==!0&&(s.value=s.value^1,y[s.value].value=null,g(),m.getAttribute("__qerror")!=="true"&&(x.value=!1),l("load",m.currentSrc||m.src))}function D(m){d(),g(),x.value=!0,y[s.value].value=k.value,y[s.value^1].value=v.value,l("error",m)}function q(m){const _=y[m].value,p={key:"img_"+m,class:C.value,style:b.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,..._};return s.value===m?Object.assign(p,{class:p.class+"current",onLoad:M,onError:D}):p.class+="loaded",H("div",{class:"q-img__container absolute-full",key:"img"+m},H("img",p))}function N(){return h.value===!1?H("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(t[x.value===!0?"error":"default"])):H("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[H(Qe,{color:e.spinnerColor,size:e.spinnerSize})])}{let m=function(){W(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,_=>{d(),x.value=!1,_===null?(g(),y[s.value^1].value=v.value):c(),y[s.value].value=_},{immediate:!0})};Ue.value===!0?ye(m):m()}return()=>{const m=[];return n.value!==null&&m.push(H("div",{key:"filler",style:n.value})),y[0].value!==null&&m.push(q(0)),y[1].value!==null&&m.push(q(1)),m.push(H(pe,{name:"q-transition--fade"},N)),H("div",{key:"main",class:R.value,style:S.value,role:"img","aria-label":e.alt},m)}}}),Mt=Q({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=L(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>H("div",{class:l.value},K(t.default))}}),Tt=Q({name:"QList",props:{...Ke,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=U(),i=Xe(e,l.proxy.$q),n=L(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>H(e.tag,{class:n.value},K(t.default))}});const kt=()=>{let e=a(!0);var t=a(null),l=a(null),i=a(null),n=a(!1),f=a([]),u=a([]),d=a([]),o=a(0),r=a(!1),v=a({width:100,height:100});a("");var k=a(!1),y=a({}),s=a(!1),h=a([]),x=a([]),R=a([]),S=a(!1),C=a(!0),b=a(null),c=a(!1),g=a({width:{min:50},height:{min:50}}),M=L(()=>{var m;return(m=k.value)!=null?m:!1}),T=async()=>(i.value=null,n.value=!1,f.value=[],d.value=[],u.value=[],o.value=0,r.value=!1,y.value={},s.value=!1,M.value=!1,!0),w=async m=>(r.value?(d.value.splice(m,1),u.value.splice(m,1),o.value=0):o.value=m,!0),D=async m=>(r.value?(f.value.splice(m,1),o.value=0):o.value=m,!0),q=async(m,_)=>{var p=m.target.files;!p||p.length===0||(await T(),l.value=_,i.value="folder",Array.from(p).forEach(E=>{u.value.push(E),d.value.push(URL.createObjectURL(E))}))};class N{constructor(){console.log("Initializing Camera Device Navigator"),this.mediaStream=null}async _navigateDevice(){try{if("mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices)return h.value.getUserMedia=navigator.mediaDevices.getUserMedia,["webkitGetUserMedia","mozGetUserMedia","msGetUserMedia"].forEach(_=>{var E;var p=(E=navigator[_])!=null?E:!1;p&&(h.value[_]=p)}),!0;throw"media device not supported ; "}catch(_){return console.error("Error :",_),t.value=null,!1}}async _enumNavigateDevice(){var p,E,B,j;try{var _=await t.value.enumerateDevices();return x.value=_.filter(I=>I.kind==="videoinput"),R.value=_.filter(I=>I.kind==="audioinput"),S.value=(E=(p=x.value[0])==null?void 0:p.deviceId)!=null?E:null,b.value=(j=(B=R.value[0])==null?void 0:B.deviceId)!=null?j:null,!0}catch(I){return console.error("Error enumerating devices:",I),!1}}async _openCamera(_=""){try{if(await T(),!(await this._navigateDevice()&&Object.keys(h.value).length))throw"media device not found";n.value=!0,i.value="camera",l.value=_,s.value="init",this.mediaStream=navigator.mediaDevices,t.value=navigator.mediaDevices,g.value={deviceId:S.value?{exact:S.value}:void 0,facingMode:C.value?"user":"environment",width:{min:50,ideal:1e3,max:1920},height:{min:50,ideal:100,max:1080}};let E={video:g.value,audio:c.value};try{k.value=await navigator.mediaDevices.getUserMedia(E),s.value="ok",y.value.srcObject=k.value,y.value.onloadedmetadata=async()=>{await y.value.play()}}catch(B){throw B.name==="NotAllowedError"?B.permissionDenied?e.value="Please allow camera access.":e.value="please unblock camera access":e.value="Check Camera Access & Retry ","getUserMeida"}}catch(p){console.error("Camera Access Error : _ :",p)}}async checkCameraPermission(){try{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks()[0].stop(),e.value="granted"}catch(_){_.name==="NotAllowedError"?_.permissionDenied?e.value="Please allow camera access.":e.value="please unblock camera access":(console.error("Error checking camera permission:",_),e.value="Check Camera Access & Retry ")}}async _stopCamera(){var _;try{await T(),(_=k.value)==null||_.getTracks().forEach(p=>p.stop()),y.value={}}catch(p){console.error("Error stopping camera:",p)}return console.error("Camera Stopped."),!0}async _screenShoot(_=!1){if(_)return u.value=[],d.value=[],!0;if(d.value.length>=4)return!0;v.value.getContext("2d").drawImage(y.value,0,0,v.value.width,v.value.height);try{d.value.push(v.value.toDataURL("image/png")),v.value.toBlob(E=>{u.value.push(new File([E],`screenshot_${Date.now()}.png`,{type:"image/png"}))},"image/png")}catch{d.value.push(v.value.toDataURL("image/jpeg")),v.value.toBlob(E=>{u.value.push(new File([E],`screenshot_${Date.now()}.jpeg`,{type:"image/jpeg"}))},"image/jpeg")}return!0}async _saveScreenShoots(){var _;try{n.value=!1,(_=k.value)==null||_.getTracks().forEach(p=>p.stop()),y.value.src=null}catch(p){console.error("Error saving screenshots:",p),this._stopCamera()}return!0}async _setCameraParam(_="",p=!1){C.value=p,S.value=_,await this._openCamera()}async _setMicParam(_=""){var p,E;b.value=(E=(p=R.value[_])==null?void 0:p.deviceId)!=null?E:null,await this._openCamera()}async _operateDevice(_){return _==="pause"?y.value.pause():_==="play"&&y.value.play(),!0}}return{hasCameraPermission:e,_thisMedia:t,_fileAttributeName:l,_cameraBox:n,_fileSourceFoCam:i,_fileAsSRC:d,_fileAsString:f,_fileAsRaw:u,_liveFeedSRC:v,_fileAsSRCIndex:o,_cameraDevice:N,_listCameraSource:x,_selectedCameraById:S,_selectedCameraByface:C,_liveFeedRawStreaming:y,_liveFeedRawStreamingStatus:s,_fileSourceFolder:q,_fileAsSRCOps:r,_fileAsSRCOpsCall:w,_fileAsSRCOpsCall2:D,_resetFileSource:T,get_liveFeedRaw:M}},Et=()=>{a(0);var e=a([]),t=a([]),l=a([]),i=a([]);function n(o=6e3,r="",v=""){return e.value.push({color:"grey",content:r,title:v}),console.log("inform Status",r),setTimeout(()=>(e.value.shift(),!1),o),!0}function f(o=6e3,r="",v=""){return t.value.push({color:"green",content:r,title:v}),setTimeout(()=>(t.value.shift(),!1),o),!0}function u(o=6e3,r="",v=""){return l.value.push({color:"grey",content:r,title:v}),console.log("inform Status",r),setTimeout(()=>(l.value.shift(),!1),o),!0}function d(o=6e3,r="",v=""){return i.value.push({color:"red",content:r,title:v}),setTimeout(()=>(i.value.shift(),!1),o),!0}return{status_Loading:e,status_DoneMessage:t,status_KnowthisMessage:l,status_WarnthisMessage:i,status_timerLoad:n,status_timerDone:f,status_timerInformthis:u,status_timerError:d}},Rt=()=>{let e=a([0,0]),t=a("profile"),l=a(0),i=a(null),n=a(null),f=a({hover:!1,active:!1,selected:!1,details:!1,clients:!1,comments:!1}),u=a(null),d=a(null);a(!1);let o=a(null),r=a(null),v=a(null),k=a(null),y=a(null),s=a(null),h=a(null),x=a(null),R=a(null),S=a(!1),C=a(),b=a(),c=a(),g=a(null),M=a(null),T=a(null),w=a(null),D=a(null);return{active_layer:e,active_fileName:t,active_fileIndex:l,__thisFileOps_onCard:i,__thisFileOps_onZoom:n,thisOps:f,thisOpsCard:u,thissubOpsStatus:d,_is_thisOwner:S,_is_this_netPrice:C,_is_this_open:b,_is_this_currency:c,__thisBox:o,__thisIndex:k,__thisOps:y,__thisOpsCard:s,__thisOpsStatus:h,__thissubOps:x,__thissubOpsStatus:R,active_foreignModel:g,active_foreignModelDialog:r,active_foreignModelFilter:v,active_foreignModelIndex:M,active_foreignModelOps:T,active_foreignModelOpsStatus:w,active_foreignModelsubOps:D}},Dt=()=>{let e="saleit",t="/saleitapi/saleit",l="saleitSchemas",i="saleitSchema",n=a(["userID","userName"]),f=a([]),u=a(["phone","userName","geolocation","location","userID","phoneCode","saleitgr"]);return{Model_Name:e,Model_Url:t,saleit_schemaPath:l,saleit_schemaFile:i,locked_modelCols_label:n,flexInvisible_modelCols_labels:f,useric_modelCols_label:u,plugable_saleit_Cols:[{name:"cost",schema:{type:"Number",default:0}},{name:"time",schema:{type:"String",default:""}},{name:"action",schema:{type:"String",default:""}}],labels_plugable_saleit_Cols:["cost","time","action"]}},qt=()=>{a(0);let e=a(""),t=a([]),l=a({}),i=a([]),n=a([]);a(["userID","userName","time","action"]);let f=a([]);return a(""),{_this_Schema:e,_tableModel_Cols:t,allowed_modelCols:n,_tableModel_Row:l,all_modelCols_label:i,visible_modelCols_label:f}};export{Ct as Q,xt as _,_t as a,yt as b,oe as c,St as d,Mt as e,Tt as f,wt as g,Et as h,Rt as i,Dt as j,qt as k,gt as l,ht as m,lt as n,et as o,bt as p,Ze as q,ge as r,fe as s,Se as t,kt as u,he as v,tt as w,pt as x};
