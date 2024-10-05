import{q as Ke,aC as je,aD as ft,aE as vt,aF as mt,a5 as Ot,aG as Bt,a7 as Et,aH as Ft,c as f,aI as Rt,g as Qe,h,a2 as Ee,aJ as Ht,aK as Lt,aa as ne,r as F,w as ve,N as G,aL as Tt,S as Dt,aM as Pt,aN as Nt,aO as $t,aP as Kt,aQ as ot,aR as ke,aS as jt,aT as Qt,H as Ut,ad as Ne,aU as Xt,aV as fe,a9 as Wt,aW as Yt,aX as Gt,D as Jt}from"./index.bf8cd5e7.js";import{a as Zt,b as el,Q as tl,c as ll}from"./moduleLoader.eb95d7fa.js";import{n as rt}from"./debugMixin.7255e004.js";var ul=Ke({name:"QField",inheritAttrs:!1,props:{...je,tag:{type:String,default:"label"}},emits:ft,setup(){return vt(mt({tagProp:!0}))}});const nl={xs:8,sm:10,md:14,lg:20,xl:24};var al=Ke({name:"QChip",props:{...Ot,...Bt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:o}){const{proxy:{$q:C}}=Qe(),H=Et(e,C),i=Ft(e,nl),O=f(()=>e.selected===!0||e.icon!==void 0),y=f(()=>e.selected===!0?e.iconSelected||C.iconSet.chip.selected:e.icon),g=f(()=>e.iconRemove||C.iconSet.chip.remove),I=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),r=f(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(I.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(H.value===!0?" q-chip--dark q-dark":"")}),b=f(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||C.lang.label.remove};return{chip:d,remove:D}});function V(d){d.keyCode===13&&k(d)}function k(d){e.disable||(o("update:selected",!e.selected),o("click",d))}function z(d){(d.keyCode===void 0||d.keyCode===13)&&(ne(d),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function T(){const d=[];I.value===!0&&d.push(h("div",{class:"q-focus-helper"})),O.value===!0&&d.push(h(Ee,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const D=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ht(s.default,D))),e.iconRight&&d.push(h(Ee,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(h(Ee,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...b.value.remove,onClick:z,onKeyup:z})),d}return()=>{if(e.modelValue===!1)return;const d={class:r.value,style:i.value};return I.value===!0&&Object.assign(d,b.value.chip,{onClick:k,onKeyup:V}),Rt("div",d,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Lt,e.ripple]])}}});const K=1e3,il=["start","center","end","start-force","center-force","end-force"],ol=Array.prototype.filter;function me(e,s){return e+s}function $e(e,s,o,C,H,i,O,y){const g=e===window?document.scrollingElement||document.documentElement:e,I=H===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-O-y,scrollMaxSize:0,offsetStart:-O,offsetEnd:-y};if(H===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=g.scrollLeft,r.scrollViewSize+=g.clientWidth),r.scrollMaxSize=g.scrollWidth,i===!0&&(r.scrollStart=0-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=g.scrollTop,r.scrollViewSize+=g.clientHeight),r.scrollMaxSize=g.scrollHeight),o!==null)for(let b=o.previousElementSibling;b!==null;b=b.previousElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=b[I]);if(C!==null)for(let b=C.nextElementSibling;b!==null;b=b.nextElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=b[I]);if(s!==e){const b=g.getBoundingClientRect(),V=s.getBoundingClientRect();H===!0?(r.offsetStart+=V.left-b.left,r.offsetEnd-=V.width):(r.offsetStart+=V.top-b.top,r.offsetEnd-=V.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function ct(e,s,o,C){s==="end"&&(s=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(C===!0&&(s=0-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):o===!0?(C===!0&&(s=0-s),e.scrollLeft=s):e.scrollTop=s}function xe(e,s,o,C){if(o>=C)return 0;const H=s.length,i=Math.floor(o/K),O=Math.floor((C-1)/K)+1;let y=e.slice(i,O).reduce(me,0);return o%K!==0&&(y-=s.slice(i*K,o).reduce(me,0)),C%K!==0&&C!==H&&(y-=s.slice(C,O*K).reduce(me,0)),y}const St={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},ml=Object.keys(St),st={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...St};function rl({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:o,virtualScrollItemSizeComputed:C}){const H=Qe(),{props:i,emit:O,proxy:y}=H,{$q:g}=y;let I,r,b,V=[],k;const z=F(0),T=F(0),d=F({}),D=F(null),X=F(null),L=F(null),M=F({from:0,to:0}),pe=f(()=>i.tableColspan!==void 0?i.tableColspan:100);C===void 0&&(C=f(()=>i.virtualScrollItemSize));const _=f(()=>C.value+";"+i.virtualScrollHorizontal),W=f(()=>_.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ve(W,()=>{j()}),ve(_,J);function J(){ae(r,!0)}function Se(l){ae(l===void 0?r:l)}function Z(l,a){const v=s();if(v==null||v.nodeType===8)return;const q=$e(v,o(),D.value,X.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);b!==q.scrollViewSize&&j(q.scrollViewSize),P(v,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,il.indexOf(a)!==-1?a:r!==-1&&l>r?"end":"start")}function qe(){const l=s();if(l==null||l.nodeType===8)return;const a=$e(l,o(),D.value,X.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),v=e.value-1,q=a.scrollMaxSize-a.offsetStart-a.offsetEnd-T.value;if(I===a.scrollStart)return;if(a.scrollMaxSize<=0){P(l,a,0,0);return}b!==a.scrollViewSize&&j(a.scrollViewSize),ge(M.value.from);const B=Math.floor(a.scrollMaxSize-Math.max(a.scrollViewSize,a.offsetEnd)-Math.min(k[v],a.scrollViewSize/2));if(B>0&&Math.ceil(a.scrollStart)>=B){P(l,a,v,a.scrollMaxSize-a.offsetEnd-V.reduce(me,0));return}let w=0,m=a.scrollStart-a.offsetStart,E=m;if(m<=q&&m+a.scrollViewSize>=z.value)m-=z.value,w=M.value.from,E=m;else for(let S=0;m>=V[S]&&w<v;S++)m-=V[S],w+=K;for(;m>0&&w<v;)m-=k[w],m>-a.scrollViewSize?(w++,E=m):E=k[w]+m;P(l,a,w,E)}function P(l,a,v,q,B){const w=typeof B=="string"&&B.indexOf("-force")!==-1,m=w===!0?B.replace("-force",""):B,E=m!==void 0?m:"start";let S=Math.max(0,v-d.value[E]),N=S+d.value.total;N>e.value&&(N=e.value,S=Math.max(0,N-d.value.total)),I=a.scrollStart;const Y=S!==M.value.from||N!==M.value.to;if(Y===!1&&m===void 0){he(v);return}const{activeElement:Ie}=document,U=L.value;Y===!0&&U!==null&&U!==Ie&&U.contains(Ie)===!0&&(U.addEventListener("focusout",ze),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",ze)}));const Ae=m!==void 0?k.slice(S,v).reduce(me,0):0;if(Y===!0){const ee=N>=M.value.from&&S<=M.value.to?M.value.to:N;M.value={from:S,to:ee},z.value=xe(V,k,0,S),T.value=xe(V,k,N,e.value),requestAnimationFrame(()=>{M.value.to!==N&&I===a.scrollStart&&(M.value={from:M.value.from,to:N},T.value=xe(V,k,N,e.value))})}requestAnimationFrame(()=>{if(I!==a.scrollStart)return;Y===!0&&ge(S);const ee=k.slice(S,v).reduce(me,0),te=ee+a.offsetStart+z.value,Me=te+k[v];let we=te+q;if(m!==void 0){const Re=ee-Ae,Ve=a.scrollStart+Re;we=w!==!0&&Ve<te&&Me<Ve+a.scrollViewSize?Ve:m==="end"?Me-a.scrollViewSize:te-(m==="start"?0:Math.round((a.scrollViewSize-k[v])/2))}I=we,ct(l,we,i.virtualScrollHorizontal,g.lang.rtl),he(v)})}function ge(l){const a=L.value;if(a){const v=ol.call(a.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),q=v.length,B=i.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let w=l,m,E;for(let S=0;S<q;){for(m=B(v[S]),S++;S<q&&v[S].classList.contains("q-virtual-scroll--with-prev")===!0;)m+=B(v[S]),S++;E=m-k[w],E!==0&&(k[w]+=E,V[Math.floor(w/K)]+=E),w++}}}function ze(){L.value!==null&&L.value!==void 0&&L.value.focus()}function ae(l,a){const v=1*C.value;(a===!0||Array.isArray(k)===!1)&&(k=[]);const q=k.length;k.length=e.value;for(let w=e.value-1;w>=q;w--)k[w]=v;const B=Math.floor((e.value-1)/K);V=[];for(let w=0;w<=B;w++){let m=0;const E=Math.min((w+1)*K,e.value);for(let S=w*K;S<E;S++)m+=k[S];V.push(m)}r=-1,I=void 0,z.value=xe(V,k,0,M.value.from),T.value=xe(V,k,M.value.to,e.value),l>=0?(ge(M.value.from),G(()=>{Z(l)})):ye()}function j(l){if(l===void 0&&typeof window!="undefined"){const m=s();m!=null&&m.nodeType!==8&&(l=$e(m,o(),D.value,X.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}b=l;const a=parseFloat(i.virtualScrollSliceRatioBefore)||0,v=parseFloat(i.virtualScrollSliceRatioAfter)||0,q=1+a+v,B=l===void 0||l<=0?1:Math.ceil(l/C.value),w=Math.max(1,B,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/q));d.value={total:Math.ceil(w*q),start:Math.ceil(w*a),center:Math.ceil(w*(.5+a)),end:Math.ceil(w*(1+a)),view:B}}function Fe(l,a){const v=i.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+v]:C.value+"px"};return[l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[h("tr",[h("td",{style:{[v]:`${z.value}px`,...q},colspan:pe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[v]:`${z.value}px`,...q}}),h(l,{class:"q-virtual-scroll__content",key:"content",ref:L,tabindex:-1},a.flat()),l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"after",ref:X},[h("tr",[h("td",{style:{[v]:`${T.value}px`,...q},colspan:pe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"after",ref:X,style:{[v]:`${T.value}px`,...q}})]}function he(l){r!==l&&(i.onVirtualScroll!==void 0&&O("virtualScroll",{index:l,from:M.value.from,to:M.value.to-1,direction:l<r?"decrease":"increase",ref:y}),r=l)}j();const ye=Tt(qe,g.platform.is.ios===!0?120:35);Dt(()=>{j()});let be=!1;return Pt(()=>{be=!0}),Nt(()=>{if(be!==!0)return;const l=s();I!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?ct(l,I,i.virtualScrollHorizontal,g.lang.rtl):Z(r)}),Object.assign(y,{scrollTo:Z,reset:J,refresh:Se}),{virtualScrollSliceRange:M,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:j,onVirtualScrollEvt:ye,localResetVirtualScroll:ae,padVirtualScroll:Fe,scrollTo:Z,reset:J,refresh:Se}}const dt=e=>["add","add-unique","toggle"].includes(e),cl=".*+?^${}()|[]\\",sl=Object.keys(je);var Sl=Ke({name:"QSelect",inheritAttrs:!1,props:{...st,...$t,...je,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:dt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:st.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...ft,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:s,emit:o}){const{proxy:C}=Qe(),{$q:H}=C,i=F(!1),O=F(!1),y=F(-1),g=F(""),I=F(!1),r=F(!1);let b=null,V=null,k,z,T,d=null,D,X,L,M;const pe=F(null),_=F(null),W=F(null),J=F(null),Se=F(null),Z=Kt(e),qe=Xt(lt),P=f(()=>Array.isArray(e.options)?e.options.length:0),ge=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ze,virtualScrollSliceSizeComputed:ae,localResetVirtualScroll:j,padVirtualScroll:Fe,onVirtualScrollEvt:he,scrollTo:ye,setVirtualScrollSize:be}=rl({virtualScrollLength:P,getVirtualScrollTarget:bt,getVirtualScrollEl:et,virtualScrollItemSizeComputed:ge}),l=mt(),a=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&k!==void 0?k:[],c=n.map(p=>yt(p,u));return e.modelValue===null&&t===!0?c.filter(p=>p!==null):c}return n}),v=f(()=>{const t={};return sl.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),q=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>ot(a.value)),w=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),m=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),E=f(()=>P.value===0),S=f(()=>a.value.map(t=>$.value(t)).join(", ")),N=f(()=>e.displayValue!==void 0?e.displayValue:S.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Ie=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(Y.value))),U=f(()=>l.focused.value===!0?e.tabindex:-1),Ae=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${y.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>a.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:ht,toggleOption:le,tabindex:U.value}))),Me=f(()=>{if(P.value===0)return[];const{from:t,to:n}=ze.value;return e.options.slice(t,n).map((u,c)=>{const p=ie.value(u)===!0,x=Te(u)===!0,R=t+c,A={clickable:!0,active:x,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":x===!0?"true":"false",id:`${l.targetUid.value}_${R}`,onClick:()=>{le(u)}};return p!==!0&&(y.value===R&&(A.focused=!0),H.platform.is.desktop===!0&&(A.onMousemove=()=>{i.value===!0&&oe(R)})),{index:R,opt:u,html:Y.value(u),label:$.value(u),selected:A.active,focused:A.focused,toggleOption:le,setOptionIndex:oe,itemProps:A}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:H.iconSet.arrow.dropdown),Re=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),Q=f(()=>Le(e.optionValue,"value")),$=f(()=>Le(e.optionLabel,"label")),ie=f(()=>Le(e.optionDisable,"disable")),_e=f(()=>a.value.map(t=>Q.value(t))),gt=f(()=>{const t={onInput:lt,onChange:qe,onKeydown:Ze,onKeyup:Ge,onKeypress:Je,onFocus:We,onClick(n){z===!0&&fe(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=qe,t});ve(a,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(O.value!==!0&&i.value!==!0||B.value!==!0)&&(T!==!0&&de(),(O.value===!0||i.value===!0)&&re(""))},{immediate:!0}),ve(()=>e.fillInput,de),ve(i,De),ve(P,_t);function Ue(t){return e.emitValue===!0?Q.value(t):t}function He(t){if(t!==-1&&t<a.value.length)if(e.multiple===!0){const n=e.modelValue.slice();o("remove",{index:t,value:n.splice(t,1)[0]}),o("update:modelValue",n)}else o("update:modelValue",null)}function ht(t){He(t),l.focus()}function Xe(t,n){const u=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&Ce($.value(t),!0,!0),o("update:modelValue",u);return}if(a.value.length===0){o("add",{index:0,value:u}),o("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Te(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const c=e.modelValue.slice();o("add",{index:c.length,value:u}),c.push(u),o("update:modelValue",c)}function le(t,n){if(l.editable.value!==!0||t===void 0||ie.value(t)===!0)return;const u=Q.value(t);if(e.multiple!==!0){n!==!0&&(Ce(e.fillInput===!0?$.value(t):"",!0,!0),ue()),_.value!==null&&_.value.focus(),(a.value.length===0||ke(Q.value(a.value[0]),u)!==!0)&&o("update:modelValue",e.emitValue===!0?u:t);return}if((z!==!0||I.value===!0)&&l.focus(),We(),a.value.length===0){const x=e.emitValue===!0?u:t;o("add",{index:0,value:x}),o("update:modelValue",e.multiple===!0?[x]:x);return}const c=e.modelValue.slice(),p=_e.value.findIndex(x=>ke(x,u));if(p!==-1)o("remove",{index:p,value:c.splice(p,1)[0]});else{if(e.maxValues!==void 0&&c.length>=e.maxValues)return;const x=e.emitValue===!0?u:t;o("add",{index:c.length,value:x}),c.push(x)}o("update:modelValue",c)}function oe(t){if(H.platform.is.desktop!==!0)return;const n=t!==-1&&t<P.value?t:-1;y.value!==n&&(y.value=n)}function Oe(t=1,n){if(i.value===!0){let u=y.value;do u=rt(u+t,-1,P.value-1);while(u!==-1&&u!==y.value&&ie.value(e.options[u])===!0);y.value!==u&&(oe(u),ye(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(u>=0?$.value(e.options[u]):D,!0))}}function yt(t,n){const u=c=>ke(Q.value(c),t);return e.options.find(u)||n.find(u)||t}function Le(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:c=>c!==null&&typeof c=="object"&&u in c?c[u]:c}function Te(t){const n=Q.value(t);return _e.value.find(u=>ke(u,n))!==void 0}function We(t){e.useInput===!0&&_.value!==null&&(t===void 0||_.value===t.target&&t.target.value===S.value)&&_.value.select()}function Ye(t){Wt(t,27)===!0&&i.value===!0&&(fe(t),ue(),de()),o("keyup",t)}function Ge(t){const{value:n}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",b!==null&&(clearTimeout(b),b=null),V!==null&&(clearTimeout(V),V=null),de(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),c=x=>{const R=e.options.find(A=>x.value(A).toLocaleLowerCase()===u);return R===void 0?!1:(a.value.indexOf(R)===-1?le(R):ue(),!0)},p=x=>{c(Q)!==!0&&(c($)===!0||x===!0||re(n,!0,()=>p(!0)))};p()}else l.clearValue(t)}function Je(t){o("keypress",t)}function Ze(t){if(o("keydown",t),Yt(t)===!0)return;const n=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(y.value!==-1||n===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&u===!1){ce();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){ne(t),se();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),y.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ae.value!==void 0&&(ne(t),y.value=Math.max(-1,Math.min(P.value,y.value+(t.keyCode===33?-1:1)*ae.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),Oe(t.keyCode===38?-1:1,e.multiple));const c=P.value;if((L===void 0||M<Date.now())&&(L=""),c>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length!==0)){i.value!==!0&&se(t);const p=t.key.toLocaleLowerCase(),x=L.length===1&&L[0]===p;M=Date.now()+1500,x===!1&&(ne(t),L+=p);const R=new RegExp("^"+L.split("").map(Pe=>cl.indexOf(Pe)!==-1?"\\"+Pe:Pe).join(".*"),"i");let A=y.value;if(x===!0||A<0||R.test($.value(e.options[A]))!==!0)do A=rt(A+1,-1,c-1);while(A!==y.value&&(ie.value(e.options[A])===!0||R.test($.value(e.options[A]))!==!0));y.value!==A&&G(()=>{oe(A),ye(A),A>=0&&e.useInput===!0&&e.fillInput===!0&&Be($.value(e.options[A]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ne(t),y.value!==-1&&y.value<c){le(e.options[y.value]);return}if(n===!0){const p=(x,R)=>{if(R){if(dt(R)!==!0)return}else R=e.newValueMode;if(Ce("",e.multiple!==!0,!0),x==null)return;(R==="toggle"?le:Xe)(x,R==="add-unique"),e.multiple!==!0&&(_.value!==null&&_.value.focus(),ue())};if(e.onNewValue!==void 0?o("newValue",g.value,p):p(g.value),e.multiple!==!0)return}i.value===!0?ce():l.innerLoading.value!==!0&&se()}}function et(){return z===!0?Se.value:W.value!==null&&W.value.contentEl!==null?W.value.contentEl:void 0}function bt(){return et()}function wt(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?te.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?te.value.map((t,n)=>h(al,{key:"option-"+n,removable:l.editable.value===!0&&ie.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:U.value,onRemove(){t.removeAtIndex(n)}},()=>h("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[h("span",{[Ie.value===!0?"innerHTML":"textContent"]:N.value})]}function tt(){if(E.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:g.value}):void 0;const t=s.option!==void 0?s.option:u=>h(ll,{key:u.index,...u.itemProps},()=>h(el,()=>h(tl,()=>h("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=Fe("div",Me.value.map(t));return s["before-options"]!==void 0&&(n=s["before-options"]().concat(n)),Jt(s["after-options"],n)}function Vt(t,n){const u=n===!0?{...Ae.value,...l.splitAttrs.attributes.value}:void 0,c={ref:n===!0?_:void 0,key:"i_t",class:w.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...gt.value};return t!==!0&&z===!0&&(Array.isArray(c.class)===!0?c.class=[...c.class,"no-pointer-events"]:c.class+=" no-pointer-events"),h("input",c)}function lt(t){b!==null&&(clearTimeout(b),b=null),V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&(Be(t.target.value||""),T=!0,D=g.value,l.focused.value!==!0&&(z!==!0||I.value===!0)&&l.focus(),e.onFilter!==void 0&&(b=setTimeout(()=>{b=null,re(g.value)},e.inputDebounce)))}function Be(t,n){g.value!==t&&(g.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?o("inputValue",t):V=setTimeout(()=>{V=null,o("inputValue",t)},e.inputDebounce))}function Ce(t,n,u){T=u!==!0,e.useInput===!0&&(Be(t,!0),(n===!0||u!==!0)&&(D=t),n!==!0&&re(t))}function re(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&a.value.length!==0&&T!==!0&&t===$.value(a.value[0])&&(t="");const c=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);d!==null&&clearTimeout(d),d=c,o("filter",t,(p,x)=>{(n===!0||l.focused.value===!0)&&d===c&&(clearTimeout(d),typeof p=="function"&&p(),r.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?i.value===!0&&ue():i.value===!0?De(!0):i.value=!0),typeof x=="function"&&G(()=>{x(C)}),typeof u=="function"&&G(()=>{u(C)})}))},()=>{l.focused.value===!0&&d===c&&(clearTimeout(d),l.innerLoading.value=!1,r.value=!1),i.value===!0&&(i.value=!1)})}function Ct(){return h(Zt,{ref:W,class:m.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&E.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Re.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:he,onBeforeShow:nt,onBeforeHide:kt,onShow:xt},tt)}function kt(t){at(t),ce()}function xt(){be()}function pt(t){fe(t),_.value!==null&&_.value.focus(),I.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function qt(t){fe(t),G(()=>{I.value=!1})}function zt(){const t=[h(ul,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:q.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:pt,onBlur:qt},{...s,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(h("div",{ref:Se,class:m.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Ne,onScrollPassive:he},tt())),h(Gt,{ref:J,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:nt,onBeforeHide:It,onHide:At,onShow:Mt},()=>h("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(I.value===!0?" q-select__dialog--focused":"")},t))}function It(t){at(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function At(t){ue(),l.focused.value===!1&&o("blur",t),de()}function Mt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&_.value!==null&&_.value!==t&&_.value.focus(),be()}function ce(){O.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,r.value=!1)))}function se(t){l.editable.value===!0&&(z===!0?(l.onControlFocusin(t),O.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?re(g.value):(E.value!==!0||s["no-option"]!==void 0)&&(i.value=!0))}function ue(){O.value=!1,ce()}function de(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&a.value.length!==0&&$.value(a.value[0])||"",!0,!0)}function De(t){let n=-1;if(t===!0){if(a.value.length!==0){const u=Q.value(a.value[0]);n=e.options.findIndex(c=>ke(Q.value(c),u))}j(n)}oe(n)}function _t(t,n){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),G(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>n?j():De(!0))}))}function ut(){O.value===!1&&W.value!==null&&W.value.updatePosition()}function nt(t){t!==void 0&&fe(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function at(t){t!==void 0&&fe(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function it(){z=H.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||E.value===!1:!0),X=H.platform.is.ios===!0&&z===!0&&e.useInput===!0?"fade":e.transitionShow}return jt(it),Qt(ut),it(),Ut(()=>{b!==null&&clearTimeout(b),V!==null&&clearTimeout(V)}),Object.assign(C,{showPopup:se,hidePopup:ue,removeAtIndex:He,add:Xe,toggleOption:le,getOptionIndex:()=>y.value,setOptionIndex:oe,moveOptionSelection:Oe,filter:re,updateMenuPosition:ut,updateInputValue:Ce,isOptionSelected:Te,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>ie.value.apply(null,t)===!0,getOptionValue:(...t)=>Q.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:a,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:pe,targetRef:_,hasValue:B,showPopup:se,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||ot(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(O.value===!0||E.value!==!0||s["no-option"]!==void 0))return z===!0?zt():Ct();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{de(),ce()})},onClick(t){if(Ne(t),z!==!0&&i.value===!0){ce(),_.value!==null&&_.value.focus();return}se(t)}},getControl:t=>{const n=wt(),u=t===!0||O.value!==!0||z!==!0;if(e.useInput===!0)n.push(Vt(t,u));else if(l.editable.value===!0){const p=u===!0?Ae.value:void 0;n.push(h("input",{ref:u===!0?_:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:Ze,onKeyup:Ye,onKeypress:Je})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(h("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(Z.value!==void 0&&e.disable!==!0&&_e.value.length!==0){const p=_e.value.map(x=>h("option",{value:x,selected:!0}));n.push(h("select",{class:"hidden",name:Z.value,multiple:e.multiple},p))}const c=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return h("div",{class:"q-field__native row items-center",...c,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[h(Ee,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:we.value})]:null}),vt(l)}});export{Sl as Q,rl as a,ml as c,st as u};
