import{a7 as Fa,r as v,c as r,bz as Ea,bA as aa,H as Qa,a5 as Pa,aO as za,g as Da,ar as Ua,h as O,aI as Ka,bP as Wa,q as Xa,w as oa,aa as Ha,R as ja,o as Ga,a as Ya,C as ta,k as Ja,l as m,Y as $,u as d,m as T,n as h,b as de,aX as pa,p as B,f as x,W as I,a0 as la,F as Se,Q as ge,a1 as Ca,Z as Y,X as J,bS as Za,bb as na,bd as et,a2 as at,bu as tt,bv as Be,bw as Ke,bg as ra,a3 as lt,aK as nt}from"./index.9448454b.js";import{Q as rt}from"./QSelect.8d86a541.js";import{d as st,Q as sa,c as ot,b as wa}from"./moduleLoader.3973f9e2.js";import{u as ut,Q as Ma,a as it}from"./schemaDefaultingMixin.b8f58fd0.js";import{Q as ct}from"./QExpansionItem.a45d7b69.js";import{T as dt}from"./QScrollArea.0c6a18b4.js";import{d as Z,u as vt,a as mt}from"./debugMixin.5d903f52.js";import{u as ft,t as bt,Q as ht,a as gt,b as yt,c as _t,d as ne}from"./thisAndForeignMixin.0b7638b6.js";import{u as xt,m as kt}from"./profilefilter.42cec5cd.js";import{u as pt}from"./use-quasar.76fede33.js";import{p as Ct}from"./profileStore.e0bcca6e.js";import{p as wt}from"./profileSchemas.3482d32a.js";import{_ as Mt}from"./confirmButton.2933045c.js";import{u as St}from"./statusMixin.a08ace60.js";import"./QResizeObserver.ffeb6a9d.js";import"./touch.9135741d.js";import"./axios.05cf8750.js";import"./profileschemaValidator.e44e41e0.js";const Sa="q-slider__marker-labels",Dt=n=>({value:n}),Rt=({marker:n})=>O("div",{key:n.value,style:n.style,class:n.classes},n.label),Ra=[34,37,40,33,39,38],Tt={...Pa,...za,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:n=>n>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},Lt=["pan","update:modelValue","change"];function $t({updateValue:n,updatePosition:V,getDragging:ee,formAttrs:o}){const{props:a,emit:re,slots:j,proxy:{$q:se}}=Da(),b=Fa(a,se),g=Wa(o),G=v(!1),oe=v(!1),z=v(!1),S=v(!1),E=r(()=>a.vertical===!0?"--v":"--h"),ye=r(()=>"-"+(a.switchLabelSide===!0?"switched":"standard")),q=r(()=>a.vertical===!0?a.reverse===!0:a.reverse!==(se.lang.rtl===!0)),K=r(()=>isNaN(a.innerMin)===!0||a.innerMin<a.min?a.min:a.innerMin),ae=r(()=>isNaN(a.innerMax)===!0||a.innerMax>a.max?a.max:a.innerMax),te=r(()=>a.disable!==!0&&a.readonly!==!0&&K.value<ae.value),De=r(()=>{if(a.step===0)return c=>c;const t=(String(a.step).trim().split(".")[1]||"").length;return c=>parseFloat(c.toFixed(t))}),Re=r(()=>a.step===0?1:a.step),Oe=r(()=>te.value===!0?a.tabindex||0:-1),me=r(()=>a.max-a.min),_e=r(()=>ae.value-K.value),fe=r(()=>pe(K.value)),xe=r(()=>pe(ae.value)),ue=r(()=>a.vertical===!0?q.value===!0?"bottom":"top":q.value===!0?"right":"left"),p=r(()=>a.vertical===!0?"height":"width"),u=r(()=>a.vertical===!0?"width":"height"),D=r(()=>a.vertical===!0?"vertical":"horizontal"),C=r(()=>{const t={role:"slider","aria-valuemin":K.value,"aria-valuemax":ae.value,"aria-orientation":D.value,"data-step":a.step};return a.disable===!0?t["aria-disabled"]="true":a.readonly===!0&&(t["aria-readonly"]="true"),t}),N=r(()=>`q-slider q-slider${E.value} q-slider--${G.value===!0?"":"in"}active inline no-wrap `+(a.vertical===!0?"row":"column")+(a.disable===!0?" disabled":" q-slider--enabled"+(te.value===!0?" q-slider--editable":""))+(z.value==="both"?" q-slider--focus":"")+(a.label||a.labelAlways===!0?" q-slider--label":"")+(a.labelAlways===!0?" q-slider--label-always":"")+(b.value===!0?" q-slider--dark":"")+(a.dense===!0?" q-slider--dense q-slider--dense"+E.value:""));function A(t){const c="q-slider__"+t;return`${c} ${c}${E.value} ${c}${E.value}${ye.value}`}function w(t){const c="q-slider__"+t;return`${c} ${c}${E.value}`}const W=r(()=>{const t=a.selectionColor||a.color;return"q-slider__selection absolute"+(t!==void 0?` text-${t}`:"")}),Te=r(()=>w("markers")+" absolute overflow-hidden"),ua=r(()=>w("track-container")),ia=r(()=>A("pin")),ca=r(()=>A("label")),We=r(()=>A("text-container")),Xe=r(()=>A("marker-labels-container")+(a.markerLabelsClass!==void 0?` ${a.markerLabelsClass}`:"")),da=r(()=>"q-slider__track relative-position no-outline"+(a.trackColor!==void 0?` bg-${a.trackColor}`:"")),He=r(()=>{const t={[u.value]:a.trackSize};return a.trackImg!==void 0&&(t.backgroundImage=`url(${a.trackImg}) !important`),t}),ke=r(()=>"q-slider__inner absolute"+(a.innerTrackColor!==void 0?` bg-${a.innerTrackColor}`:"")),Ne=r(()=>{const t=xe.value-fe.value,c={[ue.value]:`${100*fe.value}%`,[p.value]:t===0?"2px":`${100*t}%`};return a.innerTrackImg!==void 0&&(c.backgroundImage=`url(${a.innerTrackImg}) !important`),c});function va(t){const{min:c,max:_,step:k}=a;let R=c+t*(_-c);if(k>0){const Q=(R-K.value)%k;R+=(Math.abs(Q)>=k/2?(Q<0?-1:1)*k:0)-Q}return R=De.value(R),Z(R,K.value,ae.value)}function pe(t){return me.value===0?0:(t-a.min)/me.value}function je(t,c){const _=Ua(t),k=a.vertical===!0?Z((_.top-c.top)/c.height,0,1):Z((_.left-c.left)/c.width,0,1);return Z(q.value===!0?1-k:k,fe.value,xe.value)}const Ae=r(()=>Ea(a.markers)===!0?a.markers:Re.value),X=r(()=>{const t=[],c=Ae.value,_=a.max;let k=a.min;do t.push(k),k+=c;while(k<_);return t.push(_),t}),M=r(()=>{const t=` ${Sa}${E.value}-`;return Sa+`${t}${a.switchMarkerLabelsSide===!0?"switched":"standard"}${t}${q.value===!0?"rtl":"ltr"}`}),be=r(()=>a.markerLabels===!1?null:Ge(a.markerLabels).map((t,c)=>({index:c,value:t.value,label:t.label||t.value,classes:M.value+(t.classes!==void 0?" "+t.classes:""),style:{...Fe(t.value),...t.style||{}}}))),Le=r(()=>({markerList:be.value,markerMap:ma.value,classes:M.value,getStyle:Fe})),$e=r(()=>{const t=_e.value===0?"2px":100*Ae.value/_e.value;return{...Ne.value,backgroundSize:a.vertical===!0?`2px ${t}%`:`${t}% 2px`}});function Ge(t){if(t===!1)return null;if(t===!0)return X.value.map(Dt);if(typeof t=="function")return X.value.map(_=>{const k=t(_);return aa(k)===!0?{...k,value:_}:{value:_,label:k}});const c=({value:_})=>_>=a.min&&_<=a.max;return Array.isArray(t)===!0?t.map(_=>aa(_)===!0?_:{value:_}).filter(c):Object.keys(t).map(_=>{const k=t[_],R=Number(_);return aa(k)===!0?{...k,value:R}:{value:R,label:k}}).filter(c)}function Fe(t){return{[ue.value]:`${100*(t-a.min)/me.value}%`}}const ma=r(()=>{if(a.markerLabels===!1)return null;const t={};return be.value.forEach(c=>{t[c.value]=c}),t});function fa(){if(j["marker-label-group"]!==void 0)return j["marker-label-group"](Le.value);const t=j["marker-label"]||Rt;return be.value.map(c=>t({marker:c,...Le.value}))}const ba=r(()=>[[dt,ha,void 0,{[D.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function ha(t){t.isFinal===!0?(S.value!==void 0&&(V(t.evt),t.touch===!0&&n(!0),S.value=void 0,re("pan","end")),G.value=!1,z.value=!1):t.isFirst===!0?(S.value=ee(t.evt),V(t.evt),n(),G.value=!0,re("pan","start")):(V(t.evt),n())}function Ee(){z.value=!1}function Qe(t){V(t,ee(t)),n(),oe.value=!0,G.value=!0,document.addEventListener("mouseup",Pe,!0)}function Pe(){oe.value=!1,G.value=!1,n(!0),Ee(),document.removeEventListener("mouseup",Pe,!0)}function Ce(t){V(t,ee(t)),n(!0)}function he(t){Ra.includes(t.keyCode)&&n(!0)}function ie(t){if(a.vertical===!0)return null;const c=se.lang.rtl!==a.reverse?1-t:t;return{transform:`translateX(calc(${2*c-1} * ${a.thumbSize} / 2 + ${50-100*c}%))`}}function Ve(t){const c=r(()=>oe.value===!1&&(z.value===t.focusValue||z.value==="both")?" q-slider--focus":""),_=r(()=>`q-slider__thumb q-slider__thumb${E.value} q-slider__thumb${E.value}-${q.value===!0?"rtl":"ltr"} absolute non-selectable`+c.value+(t.thumbColor.value!==void 0?` text-${t.thumbColor.value}`:"")),k=r(()=>({width:a.thumbSize,height:a.thumbSize,[ue.value]:`${100*t.ratio.value}%`,zIndex:z.value===t.focusValue?2:void 0})),R=r(()=>t.labelColor.value!==void 0?` text-${t.labelColor.value}`:""),Q=r(()=>ie(t.ratio.value)),qe=r(()=>"q-slider__text"+(t.labelTextColor.value!==void 0?` text-${t.labelTextColor.value}`:""));return()=>{const we=[O("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[O("path",{d:a.thumbPath})]),O("div",{class:"q-slider__focus-ring fit"})];return(a.label===!0||a.labelAlways===!0)&&(we.push(O("div",{class:ia.value+" absolute fit no-pointer-events"+R.value},[O("div",{class:ca.value,style:{minWidth:a.thumbSize}},[O("div",{class:We.value,style:Q.value},[O("span",{class:qe.value},t.label.value)])])])),a.name!==void 0&&a.disable!==!0&&g(we,"push")),O("div",{class:_.value,style:k.value,...t.getNodeData()},we)}}function ze(t,c,_,k){const R=[];a.innerTrackColor!=="transparent"&&R.push(O("div",{key:"inner",class:ke.value,style:Ne.value})),a.selectionColor!=="transparent"&&R.push(O("div",{key:"selection",class:W.value,style:t.value})),a.markers!==!1&&R.push(O("div",{key:"marker",class:Te.value,style:$e.value})),k(R);const Q=[Ka("div",{key:"trackC",class:ua.value,tabindex:c.value,..._.value},[O("div",{class:da.value,style:He.value},R)],"slide",te.value,()=>ba.value)];if(a.markerLabels!==!1){const qe=a.switchMarkerLabelsSide===!0?"unshift":"push";Q[qe](O("div",{key:"markerL",class:Xe.value},fa()))}return Q}return Qa(()=>{document.removeEventListener("mouseup",Pe,!0)}),{state:{active:G,focus:z,preventFocus:oe,dragging:S,editable:te,classes:N,tabindex:Oe,attributes:C,roundValueFn:De,keyStep:Re,trackLen:me,innerMin:K,innerMinRatio:fe,innerMax:ae,innerMaxRatio:xe,positionProp:ue,sizeProp:p,isReversed:q},methods:{onActivate:Qe,onMobileClick:Ce,onBlur:Ee,onKeyup:he,getContent:ze,getThumbRenderFn:Ve,convertRatioToModel:va,convertModelToRatio:pe,getDraggingRatio:je}}}const ve={MIN:0,RANGE:1,MAX:2};var Vt=Xa({name:"QRange",props:{...Tt,modelValue:{type:Object,default:()=>({min:null,max:null}),validator:n=>"min"in n&&"max"in n},dragRange:Boolean,dragOnlyRange:Boolean,leftLabelColor:String,leftLabelTextColor:String,rightLabelColor:String,rightLabelTextColor:String,leftLabelValue:[String,Number],rightLabelValue:[String,Number],leftThumbColor:String,rightThumbColor:String},emits:Lt,setup(n,{emit:V}){const{proxy:{$q:ee}}=Da(),{state:o,methods:a}=$t({updateValue:_e,updatePosition:xe,getDragging:fe,formAttrs:r(()=>({type:"hidden",name:n.name,value:`${n.modelValue.min}|${n.modelValue.max}`}))}),re=v(null),j=v(0),se=v(0),b=v({min:0,max:0});function g(){b.value.min=n.modelValue.min===null?o.innerMin.value:Z(n.modelValue.min,o.innerMin.value,o.innerMax.value),b.value.max=n.modelValue.max===null?o.innerMax.value:Z(n.modelValue.max,o.innerMin.value,o.innerMax.value)}oa(()=>`${n.modelValue.min}|${n.modelValue.max}|${o.innerMin.value}|${o.innerMax.value}`,g),g();const G=r(()=>a.convertModelToRatio(b.value.min)),oe=r(()=>a.convertModelToRatio(b.value.max)),z=r(()=>o.active.value===!0?j.value:G.value),S=r(()=>o.active.value===!0?se.value:oe.value),E=r(()=>{const p={[o.positionProp.value]:`${100*z.value}%`,[o.sizeProp.value]:`${100*(S.value-z.value)}%`};return n.selectionImg!==void 0&&(p.backgroundImage=`url(${n.selectionImg}) !important`),p}),ye=r(()=>{if(o.editable.value!==!0)return{};if(ee.platform.is.mobile===!0)return{onClick:a.onMobileClick};const p={onMousedown:a.onActivate};return(n.dragRange===!0||n.dragOnlyRange===!0)&&Object.assign(p,{onFocus:()=>{o.focus.value="both"},onBlur:a.onBlur,onKeydown:ue,onKeyup:a.onKeyup}),p});function q(p){return ee.platform.is.mobile!==!0&&o.editable.value===!0&&n.dragOnlyRange!==!0?{onFocus:()=>{o.focus.value=p},onBlur:a.onBlur,onKeydown:ue,onKeyup:a.onKeyup}:{}}const K=r(()=>n.dragOnlyRange!==!0?o.tabindex.value:null),ae=r(()=>ee.platform.is.mobile!==!0&&(n.dragRange||n.dragOnlyRange===!0)?o.tabindex.value:null),te=v(null),De=r(()=>q("min")),Re=a.getThumbRenderFn({focusValue:"min",getNodeData:()=>({ref:te,key:"tmin",...De.value,tabindex:K.value}),ratio:z,label:r(()=>n.leftLabelValue!==void 0?n.leftLabelValue:b.value.min),thumbColor:r(()=>n.leftThumbColor||n.thumbColor||n.color),labelColor:r(()=>n.leftLabelColor||n.labelColor),labelTextColor:r(()=>n.leftLabelTextColor||n.labelTextColor)}),Oe=r(()=>q("max")),me=a.getThumbRenderFn({focusValue:"max",getNodeData:()=>({...Oe.value,key:"tmax",tabindex:K.value}),ratio:S,label:r(()=>n.rightLabelValue!==void 0?n.rightLabelValue:b.value.max),thumbColor:r(()=>n.rightThumbColor||n.thumbColor||n.color),labelColor:r(()=>n.rightLabelColor||n.labelColor),labelTextColor:r(()=>n.rightLabelTextColor||n.labelTextColor)});function _e(p){(b.value.min!==n.modelValue.min||b.value.max!==n.modelValue.max)&&V("update:modelValue",{...b.value}),p===!0&&V("change",{...b.value})}function fe(p){const{left:u,top:D,width:C,height:N}=re.value.getBoundingClientRect(),A=n.dragOnlyRange===!0?0:n.vertical===!0?te.value.offsetHeight/(2*N):te.value.offsetWidth/(2*C),w={left:u,top:D,width:C,height:N,valueMin:b.value.min,valueMax:b.value.max,ratioMin:G.value,ratioMax:oe.value},W=a.getDraggingRatio(p,w);return n.dragOnlyRange!==!0&&W<w.ratioMin+A?w.type=ve.MIN:n.dragOnlyRange===!0||W<w.ratioMax-A?n.dragRange===!0||n.dragOnlyRange===!0?(w.type=ve.RANGE,Object.assign(w,{offsetRatio:W,offsetModel:a.convertRatioToModel(W),rangeValue:w.valueMax-w.valueMin,rangeRatio:w.ratioMax-w.ratioMin})):w.type=w.ratioMax-W<W-w.ratioMin?ve.MAX:ve.MIN:w.type=ve.MAX,w}function xe(p,u=o.dragging.value){let D;const C=a.getDraggingRatio(p,u),N=a.convertRatioToModel(C);switch(u.type){case ve.MIN:C<=u.ratioMax?(D={minR:C,maxR:u.ratioMax,min:N,max:u.valueMax},o.focus.value="min"):(D={minR:u.ratioMax,maxR:C,min:u.valueMax,max:N},o.focus.value="max");break;case ve.MAX:C>=u.ratioMin?(D={minR:u.ratioMin,maxR:C,min:u.valueMin,max:N},o.focus.value="max"):(D={minR:C,maxR:u.ratioMin,min:N,max:u.valueMin},o.focus.value="min");break;case ve.RANGE:const A=C-u.offsetRatio,w=Z(u.ratioMin+A,o.innerMinRatio.value,o.innerMaxRatio.value-u.rangeRatio),W=N-u.offsetModel,Te=Z(u.valueMin+W,o.innerMin.value,o.innerMax.value-u.rangeValue);D={minR:w,maxR:w+u.rangeRatio,min:o.roundValueFn.value(Te),max:o.roundValueFn.value(Te+u.rangeValue)},o.focus.value="both";break}b.value=b.value.min===null||b.value.max===null?{min:D.min||n.min,max:D.max||n.max}:{min:D.min,max:D.max},n.snap!==!0||n.step===0?(j.value=D.minR,se.value=D.maxR):(j.value=a.convertModelToRatio(b.value.min),se.value=a.convertModelToRatio(b.value.max))}function ue(p){if(!Ra.includes(p.keyCode))return;Ha(p);const u=([34,33].includes(p.keyCode)?10:1)*o.keyStep.value,D=([34,37,40].includes(p.keyCode)?-1:1)*(o.isReversed.value===!0?-1:1)*(n.vertical===!0?-1:1)*u;if(o.focus.value==="both"){const C=b.value.max-b.value.min,N=Z(o.roundValueFn.value(b.value.min+D),o.innerMin.value,o.innerMax.value-C);b.value={min:N,max:o.roundValueFn.value(N+C)}}else{if(o.focus.value===!1)return;{const C=o.focus.value;b.value={...b.value,[C]:Z(o.roundValueFn.value(b.value[C]+D),C==="min"?o.innerMin.value:b.value.min,C==="max"?o.innerMax.value:b.value.max)}}}_e()}return()=>{const p=a.getContent(E,ae,ye,u=>{u.push(Re(),me())});return O("div",{ref:re,class:"q-range "+o.classes.value+(n.modelValue.min===null||n.modelValue.max===null?" q-slider--no-value":""),...o.attributes.value,"aria-valuenow":n.modelValue.min+"|"+n.modelValue.max},p)}}});const qt={class:"fontdstyle text-white column q-gutter-sm q-pa-sm"},It=I("div",null,"Changing User Role & Permission",-1),Bt=I("div",{class:"fontcstyle text-black"},"Select New RoleName",-1),Ot={class:"row q-gutter-sm"},Nt={class:"col row q-pa-xs q-gutter-xs row",style:{height:"90vh"}},At=I("div",{style:{width:"10vw"}},null,-1),Ft={key:0,class:"col column rounded q-pa-sm",style:{height:"90vh"}},Et={class:"col text-bold"},Qt={class:"q-gutter-xs row items-top col"},Pt={key:0,class:"col row"},zt={class:"row q-gutter-sm",style:{"font-family":"Ubuntu","font-weight":"bolder"}},Ut={key:0,class:"q-gutter-xs row"},Kt={class:"col row q-gutter-sm",style:{"border-radius":"5px"}},Wt=I("div",null,"Days Filter :",-1),Xt={class:"col-3 q-mx-sm"},Ht=["props"],jt={key:0},Gt={key:0,class:"text-black;fontastyle"},Yt={key:1,class:"fontbstyle",style:{"font-size":"0.7rem"}},Jt=["innerHTML"],Zt={key:2},el={key:1,class:"row q-gutter-xs text-dark"},al={key:1,color:"grey-4","text-color":"black"},tl=["color"],kl={__name:"userPage",props:{_profile:{type:Object,default:()=>({})},_acctype:{type:Object,default:()=>({})}},setup(n){let V=v(null),ee=v("Are You Sure ?");v(null);var{_this_Rows:o,_this_Details:a,columns:re,_this_Query:j,_this_RowsStatus:se,_thisDefault:b,_this:g,_is_thisOwner:G,_is_this_netPrice:oe,_is_this_open:z,__thisBox:S,__thisIndex:E,__thisOps:ye,__thisOpsStatus:q,__this_foreignBox:K,__this_foreignBoxIndex:ae,__this_foreignBoxOps:te,__this_foreignBoxOpsStatus:De,__this_foreignBoxsubOps:Re}=ft();const{Loadingpage:Oe,Loadingevent:me,Loading:_e,DoneMessage:fe,KnowthisMessage:xe,WarnthisMessage:ue,timerLoadpage:p,timerLoadevent:u,timerLoad:D,timerDone:C,timerInformthis:N,timerError:A}=vt(),{status_Loading:w,status_DoneMessage:W,status_KnowthisMessage:Te,status_WarnthisMessage:ua,staus_timerLoad:ia,status_timerDone:ca,status_timerInformthis:We,status_timerError:Xe}=St();let{count:da,_allColumnName:He,_rolesColumn:ke,visibleColumn:Ne,_allColumnNames:va,_rolesColumns:pe,visibleColumns:je,Objprops_:Ae,_thisModel:X,_this_acctype:M,_this_Schema:be,lockedColumns:Le,invisibleColumns:$e,_thisModels:Ge,_this_Defaulting:Fe,foreign_Columns:ma,_this_foreignDefaulting:fa,visible_clientColumns:ba}=ut();var{_enableRowFilter:ha,_thisFiltering:Ee}=xt();const Qe=pt();ja(),mt({title:"Admin DB Managment",titleTemplate:s=>`${s} - DashBoard`,script:{printJs:{type:"application/ld+json",innerHTML:"{  }"},ldJson:{type:"application/ld+json",innerHTML:"{ }"}}}),X.value="profile",v(" Employees Managment"),be.value=wt;const Ce=Ct(),he=bt();var ie=n;Ae.value=ie,M=r(()=>{var s,l;return(s=ie._acctype)!=null&&s&&(l=ie._acctype[X.value])!=null?l:null});let Ve=v({vw_i:!0,showForm:!1});oa(ie._pageSetting,(s,l)=>(Ve.value=Object.assign(Ve.value,s),!0));let ze=v(null);ze=r(()=>Ce.getstatus_Rows),oa(ze,(s,l)=>{let L=s;if(s==null)L="No Data";else if(s==!1)L="No Data";else if(s==!0)L="Loading New Data..";else if(s=="Error Connection")return Xe(9e3,L+" ?","Product & Services"),!0;return We(9e3,L,"Product & Services"),!0});async function t(s,l){return La.value=null,E.value=l,ye.value=s,q.value=!1,S.value=!1,le.value=!1,l==null?g.value=Object.assign({},b.value):g.value=Object.assign({},o.value[l]),console.log(g.value,"ppp",o.value),!0}Le.value=["userID","profileMeta","pension","incomeTax","pensionNet","pensionNet","taxableSalary","incomeTax","incomeTax","taxfreeSalary","netSalary","payDays"];let c=v(["companyID","userID"]);v({istakenBy:"takenBy",Col:"storeStatus",Val:["taken"]}),v({isreturnedBy:"returnedBy",Col:"storeStatus",Val:["Onstore"]}),$e.value=["profile","_stage_","cover","profileMeta","phoneCode","location","geolocation","verified","cart","queryWeight","acckey",""],Qe.screen.lt.md&&$e.value.push("storeStatus");const _=v({rowsPerPage:50});re=r(()=>{var s,l,L;if(console.log(`

 Creating ${X.value}  Table Schema with AccTypeof ${M.value}`),M.value){let f=[],i=[],y=(s=M.value.role)!=null?s:!1,H=(l=M.value.capability)!=null?l:!1,Me=(L=M.value.roles)!=null?L:[];console.log(`
 User Role & Permissions:_ rolesWall = ${y} && capabilityWall = ${H} && modelRole = ${Me}`);for(let F in be.value){let ce={name:F,schema:be.value[F],label:F,align:"left"};if(f.push(ce),He(F),$e.value.includes(F)||i.push(F),!(F==="extraColumn"||Le.value.includes(F)))try{if([H[0],H[2]].includes("2"))Me.includes(F),ke(ce);else if(H[0]=="1"){if(Me.includes(F))continue;ke(ce)}else if(H[2]=="1")if(y.includes(F))ke(ce);else continue;else continue}catch{}}return f.push({name:"actions",schema:{type:"String"},label:"actions",value:H[0]+H[1]+H[2]}),i.push("actions"),k(),Ne(i),console.log(`

 ENDing ${X.value}  Table Schema with AccTypeof ${M.value}`),f}else return[{}]});async function k(){return b.value=await Fe(Ge.value),b.value.userID=ie._profile.id,!0}async function R(s=null,l=null){return console.log(`
 Profile Syncing is "Intitiated ====="
`),o.value=[],j.value={},await Ba(Ce,j.value),!0}let Q="";o=r(()=>qe(Ce.getDatas));function qe(s){return _.value.rowsPerPage=10,s}let we={_delRow:async(s=null,l,L)=>s==null?(g.value={id:L},V.value=we._delRow,!1):(V.value=null,s?await Ze.deleteData().then(f=>(f&&R("userID",ie._profile.id),!0)).catch(f=>!1):!1)};const Ta={type:"String",enum:["admin","store","regAdmin","finance","sale","marketing","quality","marketing","others"]};let le=v(null);async function Ye(s,l=null){return console.log(s,g.value,l),l?(await t("UpdateRowItem",s),g.value.group=null,le.value=!0,!0):s==null?(await t("CreateRowItem",null),S.value=!0,!0):(await t("UpdateRowItem",s),S.value=!0,!0)}let ga=v(null),La=v(null);async function $a(){var l;q.value=!0;let s=(l=ga.value)!=null?l:!1;return s&&(g.value[s]=_fileAsRaw.value,typeof _fileAsRaw.value=="object"?g.value.file_={files:s}:g.value.file_={file:s}),g.value.onplayOps="CreateRowItem",g.value.onplaySubops="new",await Ze.createData().then(async L=>L?(S.value=!1,!0):(A(5e3,Be[2],Be[0]),!0)).catch(L=>(A(5e3,Be[2],Be[0]),q.value=!1,S.value=!1,!1))}async function ya(s=!1){var L;q.value=!0;let l=(L=ga.value)!=null?L:!1;return l&&(g.value[l]=_fileAsRaw.value,typeof _fileAsRaw.value=="object"?g.value.file_={files:l}:g.value.file_={file:l}),g.value.onplayOps="UpdateRowItem",g.value.onplaySubops=s,await Ze.updateData().then(async f=>(f?(C(5e3,Be[1],"Succefully Updated"),o.value[E.value]=Object.assign({},f),t(null,null)):A(5e3,Ke[1],Ke[0]),q.value=!1,!0)).catch(f=>(A(5e3,Ke[2],Ke[0]),q.value=!1,S.value=!1,!1))}let Va="",qa="id",Je="id";const Ze={createData:async function(s={}){try{return g.value[Va]==null?!1:await he.createData(g.value,s).then(l=>l.status?l.data:(u({createData:5e3},5e3,"Error"+l.data),!1)).catch(l=>(u({createData:5e3},5e3,"Error createData","..."+l),!1))}catch(l){return u({createData:5e3},5e3,"Error createData","..."+l),!1}},updateData:async function(s={}){try{return g.value[qa]==null?!1:await he.updateData(g.value,s).then(l=>l.status?l.data:(u({updateData:5e3},5e3,"Error"+l.data),!1)).catch(l=>(u({updateData:5e3},5e3,"Error updateData","..."+l),!1))}catch(l){return u({updateData:5e3},5e3,"Error updateData","..."+l),!1}},readData:async function(){return u({readData:0},0,"Searching..."),await he.readData().then(s=>s.status?s.data:(u({readData:5e3},0," Error "+s.data),!1)).catch(s=>(u({readData:5e3},5e3,"Error Deleting","..."+s),!1))},readFData:async function(s={}){u({readFData:0},0,"Searching...");try{return Object.keys(s!=null?s:{}).length==0?!1:await he.readFData(s).then(l=>l.status?l.data:(u({readFData:5e3},0," Error"+l.data),!1)).catch(l=>(u({readFData:5e3},5e3,"Error Deleting","..."+l),!1))}catch(l){return u({readFData:5e3},5e3,"Error Deleting","..."+l),!1}},deleteData:async function(){u({deleteData:0},0,"Searching...");try{if(g.value[Je]==null)return!1;let s={};return s[Je]=g.value[Je],await he.deleteData(s).then(l=>l.status?l.data:(u({deleteData:5e3},0," Error"+l.data),!1)).catch(l=>(u({deleteData:5e3},5e3,"Error Deleting","..."+l),!1))}catch{return u({deleteData:5e3},5e3,"Error Deleting","..."+e),!1}}};let Ia=v(25e3);const Ba=async(s,l)=>(console.log(`
 Profile Syncing is "Active Final"
`),clearInterval(Q),await s.set_syncQuery(l),s.set_syncLock(!1),s.asyncDatas(),setTimeout(function(){clearInterval(Q),Q=setInterval(s.asyncDatas,Ia.value)},5e3),!0);Ga(async()=>{Ce.set_syncLock(!0),R()}),Ya(async()=>(clearInterval(Q),!0)),v([{}]),v(""),v([]),v(!1),v(100),v([]),v(""),v([]),v([{label:"Name",value:"Name"},{label:"ID",value:"ID"}]),v(!0);let Ie=v(""),Ue=v({min:2,max:8}),_a=ta({group_I:{male:!0,female:!0}});const Oa=r(()=>({search:Ie.value,male:_a.group_I.male,female:_a.group_I.female}));ta([["name","companyID","department","position"],["Educations","Expriences","position","department","gender","pension","pensionRate","loan","incomeTax","netSalary"],["address","employeedate","salary"]]),v({});var U=v([]);v([g]),ta({});function Na(){return Object.keys(U.value[0]).length==0&&U.value[0]==g&&U.value.shift(),U.value.length===0?o.value[0]:U.value[0],U.value.length===0?"":`# ${U.value.length>1?U.value.length:""} ,selected of ${o.value.length}`}function Aa(){}return(s,l)=>{const L=Ja("Label");return m(),$(Se,null,[d(pe).length?(m(),T(pa,{key:0,modelValue:d(S),"onUpdate:modelValue":l[3]||(l[3]=f=>de(S)?S.value=f:S=f),"transition-show":"scale","transition-hide":"scale",style:{background:"rgba(73, 255, 1, 0.342)",border:"15px solid rgb(0, 0, 117)"},persistent:""},{default:h(()=>[x(kt,{inputColor:"white",_blocedColumns:d(c),_rolesColumns:d(pe),_this:d(g),_thisDefault:d(b),__thisOps:d(ye),onClose:l[0]||(l[0]=f=>de(S)?S.value=f:S=f),onUpdate:l[1]||(l[1]=f=>ya()),onCreate:l[2]||(l[2]=f=>$a())},null,8,["_blocedColumns","_rolesColumns","_this","_thisDefault","__thisOps"])]),_:1},8,["modelValue"])):B("",!0),x(st,{isOpen:d(V),onEmitClick0:l[4]||(l[4]=f=>de(V)?V.value=f:V=f)},{default:h(()=>[x(Mt,{onConfirmButton:d(V),header:d(ee),title:"Yes",textcolor:"black",background:"green",title2:"No",textcolor2:"green",background2:"red"},null,8,["onConfirmButton","header"])]),_:1},8,["isOpen"]),x(pa,{modelValue:d(le),"onUpdate:modelValue":l[8]||(l[8]=f=>de(le)?le.value=f:le=f),"transition-show":"scale","transition-hide":"scale",style:{background:"rgba(73, 255, 1, 0.342)",border:"15px solid rgb(0, 0, 117)"},persistent:""},{default:h(()=>[I("div",qt,[It,Bt,I("div",null,[x(rt,{style:{"min-width":"7vw"},color:"secondary",outlined:"",dense:"",modelValue:d(g).group,"onUpdate:modelValue":l[5]||(l[5]=f=>d(g).group=f),options:Ta.enum,single:"","use-chips":"","stack-label":"","label-color":"black",class:"col text-weight-bold"},null,8,["modelValue","options"])]),I("div",Ot,[x(ge,{label:"confirm",onClick:l[6]||(l[6]=f=>ya("updateRole"))}),x(ge,{label:"Cancel",color:"red",onClick:l[7]||(l[7]=f=>de(le)?le.value=!1:le=!1)})])])]),_:1},8,["modelValue"]),I("div",Nt,[At,d(Ve).vw_i?(m(),$("div",Ft,[x(la,{class:"col dark bordered column q-pa-none q-ma-none"},{default:h(()=>[x(ct,{label:d(X)+" More ...",class:"shadow-1 overflow-hidden",style:{"border-radius":"5px","text-transform":"capitalize"},"header-class":"text-black-10 text-blue","expand-icon-class":"text-blue",dense:!0},{default:h(()=>[x(Ca,{class:"col-auto row",style:{"text-transform":"capitalize"}},{default:h(()=>[I("div",Et," DashBoard Monitor @ "+Y(d(X)),1),I("div",Qt,[x(Ma,{class:"row q-gutter-xs"},{default:h(()=>[x(sa,{class:"text-bold text-green"},{default:h(()=>[J("Access Privilges:- ")]),_:1}),x(sa,{class:"text-red-10"},{default:h(()=>{var f,i;return[J(Y((i=(f=d(M))==null?void 0:f.group)!=null?i:"")+": ",1)]}),_:1})]),_:1})])]),_:1})]),_:1},8,["label"]),x(Ca,{class:"q-pa-none col column bordered wrap scroll bg-white"},{default:h(()=>{var f;return[Object.keys((f=d(M))!=null?f:{}).length?(m(),$("div",Pt,[x(ht,{color:"white",class:"col text-md text-weight-bold sticky-table transparent",dense:!0,rows:d(o),columns:d(re),"row-key":"id",rowIndex:"true","selected-rows-label":Na,selection:"multiple",selected:d(U),"onUpdate:selected":[l[12]||(l[12]=i=>de(U)?U.value=i:U=i),Aa],filterMethod:d(Ee),filter:Oa.value,"visible-columns":d(je),"no-data-label":"Items doesn't Founded !"},{"top-left":h(()=>{var i;return[I("div",zt,[(i=d(M).capability)!=null&&i?(m(),$("div",Ut,[x(ge,{dense:"",outline:"",class:"col-auto",label:d(X)+" Managment"},null,8,["label"]),d(M).capability[0]!="0"?(m(),T(ge,{key:0,dense:"",color:"secondary",class:"",label:"ADD  "+d(X),onClick:l[9]||(l[9]=y=>Ye(null))},null,8,["label"])):B("",!0)])):B("",!0),I("div",Kt,[Wt,x(Vt,{class:"q-mt-none",modelValue:d(Ue),"onUpdate:modelValue":l[10]||(l[10]=y=>de(Ue)?Ue.value=y:Ue=y),color:d(Za)[Math.floor(Math.random()*6)+1],markers:"",min:1,max:10,"inner-min":2,"inner-max":8,"marker-labels":"","switch-marker-labels-side":"",style:{width:"20vw"}},{default:h(()=>[I("template",null,[(m(),$(Se,null,na(10,y=>I("div",{key:y,style:{width:"20vw"}},Y(y),1)),64))])]),_:1},8,["modelValue","color"])])])]}),"top-right":h(()=>[I("div",Xt,[x(et,{standout:"bg-green",style:{"min-width":"7vw","max-width":"13vw",background:"rgba(255, 255, 255, 0.589)","border-radius":"5px"},debounce:"400",color:"black",modelValue:d(Ie),"onUpdate:modelValue":l[11]||(l[11]=i=>de(Ie)?Ie.value=i:Ie=i),label:"Search","stack-label":"",dense:!0},{append:h(()=>[x(at,{name:"search"})]),_:1},8,["modelValue"])])]),"header-cell":h(i=>[x(gt,{style:{"text-align":"left","text-transform":"capitalize"},class:"",props:i},{default:h(()=>[J(Y(typeof i.col.label=="string"?i.col.label:" "),1)]),_:2},1032,["props"])]),body:h(i=>[Object.keys(i.row).length?(m(),T(_t,{key:0,props:i,class:"cursor-pointer text-bold text-weight-bolder"},{default:h(()=>[x(it,{class:"bg-white",offset:[10,10]},{default:h(()=>[J(Y(i.row._stage_),1)]),_:2},1024),x(yt,{"auto-width":""},{default:h(()=>[x(tt,{dense:"",modelValue:i.selected,"onUpdate:modelValue":y=>i.selected=y},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),(m(!0),$(Se,null,na(i.cols,y=>{var H,Me,F,ce,xa,ka;return m(),$("td",{props:i,style:{"font-size":"0.6em","text-align":"justify"},class:ra(["col text-bold text-center fontastyle",y.name=="name"?"text-center text-weight-bolder":"text-center "]),key:y.name},[(H=y.schema)!=null&&H?(m(),$(Se,{key:0},[(Me=y.schema.type)!=null&&Me?(m(),$("div",jt,[y.name!="actions"?(m(),$("div",Gt,[y.name==="gmStatus"?(m(),T(ne,{key:0},{default:h(()=>[x(L,{class:ra(i.row.gmStatus?"bg-green":"bg-red")},{default:h(()=>[J(" \xA0 ")]),_:2},1032,["class"])]),_:2},1024)):(m(),$("div",Yt,["textarea"in Object.keys((F=y.schema)!=null?F:{})?(m(),T(la,{key:0,flat:"",bordered:"",dense:!0},{default:h(()=>{var P;return[(P=i.row[y.name])!=null&&P?(m(),T(ne,{key:0},{default:h(()=>[I("div",{innerHTML:i.row[y.name]},null,8,Jt)]),_:2},1024)):(m(),T(ne,{key:1,style:{background:"red"}}))]}),_:2},1024)):["r_Time","d_Time"].includes(y.name)?(m(),T(la,{key:1,flat:"",bordered:"",dense:!0},{default:h(()=>{var P;return[(P=i.row[y.name])!=null&&P?(m(),T(ne,{key:0},{default:h(()=>[J(Y(i.row[y.name].split("T")[1]),1)]),_:2},1024)):(m(),T(ne,{key:1,style:{background:"red"}}))]}),_:2},1024)):(ce=i.row[y.name])!=null&&ce?(m(),$("div",Zt,Y(i.row[y.name]),1)):B("",!0)]))])):(xa=d(M))!=null&&xa?(m(),$("div",el,[d(M).capability!="00000"?(m(),$(Se,{key:0},[d(M).capability[1]!="0"&&d(M).accstage.includes(i.row._stage_)?(m(),T(ge,{key:0,color:"blue",label:"Update",onClick:P=>Ye(i.rowIndex),class:"fontastyle","no-caps":""},null,8,["onClick"])):B("",!0),d(M).capability[2]!="0"&&d(M).accstage.includes(i.row._stage_)?(m(),T(ge,{key:1,color:"red-7",label:"Delete",onClick:P=>d(we)._delRow(null,i.rowIndex,i.key),class:"fontastyle",dense:!0,"no-caps":""},null,8,["onClick"])):B("",!0),d(M).capability[2]!="0"&&d(M).accstage.includes(i.row._stage_)?(m(),T(ge,{key:2,color:"green",label:"Role",onClick:P=>Ye(i.rowIndex,"group"),class:"fontastyle",dense:!0,"no-caps":""},null,8,["onClick"])):B("",!0)],64)):B("",!0)])):B("",!0)])):Array.isArray(y.schema)?(m(),$("div",al,[(ka=i.row[y.name])!=null&&ka?(m(),T(ne,{key:0},{default:h(()=>[J(Y(i.row[y.name]),1)]),_:2},1024)):(m(),T(ne,{key:1,style:{background:"red"}}))])):Object.keys(y.schema).length?(m(),$("div",{key:2,class:"text-primary row q-gutter-xs col-auto",color:i.row.status=="Active"?"green":i.row.status=="Disable"?"red":"grey","text-color":"primary"},[(m(!0),$(Se,null,na(i.row[y.name],(P,ea)=>(m(),T(Ma,{key:ea,class:"column q-gutter-xs col-auto",style:{"font-size":"0.7rem"}},{default:h(()=>["type"in y.schema[ea]?lt((m(),T(ot,{key:0,clickable:"",class:ra(["rounded-borders col-auto row q-pa-none q-gutter-xs",d(Qe).dark.isActive?"bg-red":"bg-white"]),dense:""},{default:h(()=>[x(wa,{class:"col-auto q-gutter-xs q-pa-none"},{default:h(()=>[x(sa,{class:"col-auto q-pa-none"},{default:h(()=>[J(Y(ea)+" ",1),P!=null&&P?(m(),T(ne,{key:0},{default:h(()=>[J(Y(P),1)]),_:2},1024)):(m(),T(ne,{key:1,style:{background:"red"}}))]),_:2},1024)]),_:2},1024),x(wa,{side:""},{default:h(()=>[J(" . ")]),_:1})]),_:2},1032,["class"])),[[nt]]):B("",!0)]),_:2},1024))),128))],8,tl)):B("",!0)],64)):B("",!0)],10,Ht)}),128))]),_:2},1032,["props"])):B("",!0)]),_:1},8,["rows","columns","selected","filterMethod","filter","visible-columns"])])):B("",!0)]}),_:1})]),_:1})])):B("",!0)])],64)}}};export{kl as default};
