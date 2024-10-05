import{q as X,a5 as ne,a7 as ie,c as w,h as L,x as Y,g as Z,ai as re,aj as B,G as oe,ak as se,r as u,al as fe,am as de,an as ce,ao as ye,ap as pe,w as U,H as j,af as V,ae as W,J as me,av as ve,aa as ge}from"./index.5600d395.js";import{u as Ne,v as F,e as he,p as J,f as be,g as Se,r as z,s as $e,h as K,i as Ce}from"./moduleLoader.4b892664.js";async function _e(e){var f,m,$,r,v;console.log("schemaSklt Called");let t={},l,d=e;for(let g of d){if(typeof g.name=="string")l=g.name;else return null;let n=g.schema;if("type"in n)t[l]="",t[l]=(f=n.default)!=null?f:"";else{t[l]={};let h=n;for(let i in h)if(n=h[i],"type"in n)t[l][i]="",t[l][i]=(m=n.default)!=null?m:"";else{t[l][i]={};let C=n;for(let o in C)if(n=C[o],"type"in n)t[l][i][o]="",t[l][i][o]=($=n.default)!=null?$:"";else{t[l][i][o]="";let b=n;for(let S in b){let _=b[o];if("type"in _)t[l][i][o][S]="",t[l][i][o][S]=(r=_.default)!=null?r:"";else{t[l][i][o][S]="";let q=_;for(let T in q){let G=d[T];"type"in G&&(t[l][i][o][S][T]="",t[l][i][o][S][T]=(v=G.default)!=null?v:"")}}}}}}}return t}var qe=X({name:"QList",props:{...ne,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=Z(),d=ie(e,l.proxy.$q),f=w(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(d.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:f.value},Y(t.default))}}),Ge=X({name:"QTooltip",inheritAttrs:!1,props:{...Ne,...re,...B,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...B.transitionShow,default:"jump-down"},transitionHide:{...B.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:F},self:{type:String,default:"top middle",validator:F},offset:{type:Array,default:()=>[14,14],validator:he},scrollTarget:oe,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...se],setup(e,{slots:t,emit:l,attrs:d}){let f,m;const $=Z(),{proxy:{$q:r}}=$,v=u(null),g=u(!1),n=w(()=>J(e.anchor,r.lang.rtl)),h=w(()=>J(e.self,r.lang.rtl)),i=w(()=>e.persistent!==!0),{registerTick:C,removeTick:o}=fe(),{registerTimeout:b}=de(),{transitionProps:S,transitionStyle:_}=ce(e),{localScrollTarget:q,changeScrollEvent:T,unconfigureScrollTarget:G}=be(e,A),{anchorEl:c,canShow:E,anchorEvents:D}=Se({showing:g,configureAnchorEl:le}),{show:O,hide:a}=ye({showing:g,canShow:E,handleShow:k,handleHide:H,hideOnRouteChange:i,processOnMount:!0});Object.assign(D,{delayShow:ee,delayHide:te});const{showPortal:y,hidePortal:p,renderPortal:N}=pe($,v,ae,"tooltip");if(r.platform.is.mobile===!0){const s={anchorEl:c,innerRef:v,onClickOutside(P){return a(P),P.target.classList.contains("q-dialog__backdrop")&&ge(P),!0}},Q=w(()=>e.modelValue===null&&e.persistent!==!0&&g.value===!0);U(Q,P=>{(P===!0?Ce:z)(s)}),j(()=>{z(s)})}function k(s){y(),C(()=>{m=new MutationObserver(()=>x()),m.observe(v.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),x(),A()}),f===void 0&&(f=U(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,x)),b(()=>{y(!0),l("show",s)},e.transitionDuration)}function H(s){o(),p(),R(),b(()=>{p(!0),l("hide",s)},e.transitionDuration)}function R(){m!==void 0&&(m.disconnect(),m=void 0),f!==void 0&&(f(),f=void 0),G(),V(D,"tooltipTemp")}function x(){$e({targetEl:v.value,offset:e.offset,anchorEl:c.value,anchorOrigin:n.value,selfOrigin:h.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(s){if(r.platform.is.mobile===!0){K(),document.body.classList.add("non-selectable");const Q=c.value,P=["touchmove","touchcancel","touchend","click"].map(I=>[Q,I,"delayHide","passiveCapture"]);W(D,"tooltipTemp",P)}b(()=>{O(s)},e.delay)}function te(s){r.platform.is.mobile===!0&&(V(D,"tooltipTemp"),K(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),b(()=>{a(s)},e.hideDelay)}function le(){if(e.noParentEvent===!0||c.value===null)return;const s=r.platform.is.mobile===!0?[[c.value,"touchstart","delayShow","passive"]]:[[c.value,"mouseenter","delayShow","passive"],[c.value,"mouseleave","delayHide","passive"]];W(D,"anchor",s)}function A(){if(c.value!==null||e.scrollTarget!==void 0){q.value=me(c.value,e.scrollTarget);const s=e.noParentEvent===!0?x:a;T(q.value,s)}}function ue(){return g.value===!0?L("div",{...d,ref:v,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",d.class],style:[d.style,_.value],role:"tooltip"},Y(t.default)):null}function ae(){return L(ve,S.value,ue)}return j(R),Object.assign($.proxy,{updatePosition:x}),N}}),M="";const Te={_stage_:{type:Number,vtype:"Number",default:1},userID:{type:M,ref:"profiles"},userName:{type:String,vtype:"String",default:"",$ifNull:""},phone:{type:Number,vtype:"Number",default:"",$ifNull:""},phoneCode:{type:Array,vtype:"Array",default:["",""],$ifNull:["",""],required:!0},catagory:{type:String,vtype:"String",default:"Households",$ifNull:"Households",enum:["Electronics","Vehicles","Households","Land/House","Clothing","Food","Others"]},queryWeight:{type:String,vtype:"String",default:"1.1.1.1",$ifNull:"1.1.1.1"},catagoryScore:{type:Number,vtype:"Number",default:0,$ifNull:0},usageScore:{type:Number,vtype:"Number",default:0,$ifNull:0},trendScore:{type:Number,vtype:"Number",default:0,$ifNull:0},usage:{type:String,vtype:"String",default:"Used",$ifNull:"Used",enum:["New","Used"]},saleitgr:{type:Array,default:["/saleitgr/saleitpng.png"],vtype:"file"},header:{type:String,vtype:"String",default:"....",$ifNull:"....",validRuleset:"[ val => val && val.length > 0 || 'Please type something']"},content:{type:String,vtype:"String",textarea:!0,default:"....",$ifNull:"...."},quantity:{type:Number,vtype:"Number",default:0,$ifNull:0,rules:[{type:"required"},{type:"minValue",value:1},{type:"minLength",value:1},{type:"maxLength",value:9},{type:"pattern",value:"^[0-9]+$"}]},price:{type:Number,vtype:"Number",default:0,$ifNull:0,rules:[{type:"required"},{type:"minValue",value:1},{type:"minLength",value:1},{type:"maxLength",value:10},{type:"pattern",value:"^[0-9]+$"}]},currency:{type:String,vtype:"String",default:"$(US)",$ifNull:"$(US)",enum:["$(US)","GB Pound","Euro","ETB","Pound"],rules:[{type:"required"}]},discount:{type:Number,vtype:"Number",default:0,$ifNull:0},tPrice:{type:Number,vtype:"Number",default:0,$ifNull:0},location:{country:{type:String,default:"",$ifNull:""},provinance:{type:String,default:"",$ifNull:""},city:{type:String,default:"",$ifNull:""},street:{type:String,default:"",$ifNull:""}},geolocation:{lat:{type:Number,vtype:"Number",default:0,$ifNull:0},long:{type:Number,vtype:"Number",default:0,$ifNull:0}},timer:{action:{type:String,vtype:"String",enum:["delete","expired","sold",""],default:"",$ifNull:""},hours:{type:Number,vtype:"Number",default:-1,$ifNull:-1},days:{type:Number,vtype:"Number",default:-1,$ifNull:-1}},status:{type:String,vtype:"String",default:"posted",$ifNull:"posted",enum:["posted","sold","Paused","discarded"]},likes:{like:{type:Number,vtype:"Number",default:0,$ifNull:0},dislike:{type:Number,vtype:"Number",default:0,$ifNull:0}},completed:{type:String,vtype:"String",default:"no",$ifNull:"no"},_itServiceRating:{type:Number,vtype:"Number",default:0,$ifNull:0},tClient:{type:Number,vtype:"Number",default:0,$ifNull:0},tQs:{type:Number,vtype:"Number",default:0,$ifNull:0},tQ:{type:Number,vtype:"Number",default:0,$ifNull:0},tC:{type:Number,vtype:"Number",default:0,$ifNull:0},tQC:{type:Number,vtype:"Number",default:0,$ifNull:0},tQt:{type:Number,vtype:"Number",default:0,$ifNull:0},tCt:{type:Number,vtype:"Number",default:0,$ifNull:0},tQCt:{type:Number,vtype:"Number",default:0,$ifNull:0},tQCtonD:{type:Number,vtype:"Number",default:0,$ifNull:0},tQCttech:{type:Number,vtype:"Number",default:0,$ifNull:0}},ke={geolocation:{lat:{type:String,vtype:"String",default:"000000",$ifNull:"000000"},long:{type:String,vtype:"String",default:"000001",$ifNull:"000001"}},phone:{type:Number,vtype:"Number",default:"",$ifNull:""},phoneCode:{type:Array,vtype:"Array",default:["",""],$ifNull:["",""],required:!0},saleitID:{type:M,ref:"saleits"},userID:{type:M,ref:"profiles"},orderID:{type:String,vtype:"String",default:"xyxy",$ifNull:"+xyxy"},confirmID:{type:String,vtype:"String",default:"xyxy",$ifNull:"+xyxy"},quantity:{type:Number,vtype:"Number",default:0,$ifNull:0},price:{type:Number,vtype:"Number",default:0,$ifNull:0},currency:{type:String,vtype:"String",default:"$(US)",$ifNull:"$(US)",enum:["$(US)","GB Pound","Euro","ETB","Pound"]},paymentMethod:{type:String,vtype:"String",default:"onDelivery",$ifNull:"onDelivery",enum:["onDelivery","TELBirr","EBCBirr","others"]},served:{type:String,vtype:"String",default:"Requested",$ifNull:"Requested",enum:["Served","Queed","Requested","Requesting"]},store:{type:String,vtype:"String",default:"cart",$ifNull:"cart",enum:["cart","buy","bought"]},description:{type:String,vtype:"String",default:"",$ifNull:""},time:{type:String,vtype:"String",default:"",$ifNull:""}},xe=()=>{const e=u(0),t=u(""),l=u("");let d=u("");u("");let f=u([]),m=u([]),$=u(null),r=u(null);u(null);let v=u({}),g=u({}),n=u([]),h=u([]),i=u(["userID","userName","time","action"]),C=u([]),o=u("");d.value=Te;let b=u(["","orderID","quantity","price","description","time","action"]),S=u(["phone","userName","geolocation","location","userID","phoneCode"]);var _=u({});let q="";const T=async a=>n.value.push(a),G=async a=>h.value.push(a),c=async a=>C.value=a;async function E(a){return h.value.length?(console.log("Default Row Generations for ==>> Main Model <<"),await _e(h.value).then(async y=>{var p;for(let N of a)y[N]=(p=t.value._profile[N])!=null?p:"";return y}).catch(y=>({}))):{}}let D=async(a,y=[])=>{let p=[],N=[];console.log("Default Schema Generations for ==>> Foreign Model <<");for(let k in a){let H={name:k,schema:a[k]};p.push(H),y.includes(k)||N.push(k)}return[p,N]};async function O(a){var p;let y={};for(let N of a)y[N]=(p=t.value._profile[N])!=null?p:"";return console.log("Default Row Generations for ==>> Foreign Model <<",a),y}return{count:e,_allColumnName:T,_rolesColumn:G,visibleColumn:c,_allColumnNames:n,_rolesColumns:h,visibleColumns:C,Objprops_:t,_thisModel:l,_this_acctype:_,_this_Schema:d,lockedColumns:i,invisibleColumns:o,_this_Rows:f,_this_Details:$,_this:r,_this_Query:v,columns:m,_thisDefault:g,_thisModels:S,modal_iss:q,_this_Defaulting:E,foreign_Columns:D,_this_foreignDefaulting:O,visible_clientColumns:b}};export{qe as Q,Ge as a,ke as s,xe as u};
