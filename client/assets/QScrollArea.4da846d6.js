import{b4 as ce,ah as _,I as ve,bm as de,ae as P,bn as A,ad as R,aU as D,ar as B,af as H,aa as fe,q as he,a5 as me,r as m,a7 as be,c as d,aK as pe,w as ze,aL as Se,aM as ye,H as ge,h as S,D as Ce,a3 as V,g as _e,bo as O,bp as K}from"./index.2d8c7734.js";import{a as U,Q as qe}from"./QResizeObserver.34813c7c.js";import{g as I,s as N}from"./touch.9135741d.js";import{h as Me}from"./moduleLoader.6f2f3520.js";import{d as T}from"./debugMixin.9a788b98.js";function $(o,n,v){const f=B(o);let e,l=f.left-n.event.x,r=f.top-n.event.y,t=Math.abs(l),s=Math.abs(r);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?e=l<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=r<0?"up":"down":u.up===!0&&r<0?(e="up",t>s&&(u.left===!0&&l<0?e="left":u.right===!0&&l>0&&(e="right"))):u.down===!0&&r>0?(e="down",t>s&&(u.left===!0&&l<0?e="left":u.right===!0&&l>0&&(e="right"))):u.left===!0&&l<0?(e="left",t<s&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down"))):u.right===!0&&l>0&&(e="right",t<s&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down")));let p=!1;if(e===void 0&&v===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,p=!0,e==="left"||e==="right"?(f.left-=l,t=0,l=0):(f.top-=r,s=0,r=0)}return{synthetic:p,payload:{evt:o,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:f,direction:e,isFirst:n.event.isFirst,isFinal:v===!0,duration:Date.now()-n.event.time,distance:{x:t,y:s},offset:{x:l,y:r},delta:{x:f.left-n.event.lastX,y:f.top-n.event.lastY}}}}let Ee=0;var x=ce({name:"touch-pan",beforeMount(o,{value:n,modifiers:v}){if(v.mouse!==!0&&_.has.touch!==!0)return;function f(l,r){v.mouse===!0&&r===!0?fe(l):(v.stop===!0&&D(l),v.prevent===!0&&R(l))}const e={uid:"qvtp_"+Ee++,handler:n,modifiers:v,direction:I(v),noop:ve,mouseStart(l){N(l,e)&&de(l)&&(P(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(N(l,e)){const r=l.target;P(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,r){if(_.is.firefox===!0&&A(o,!0),e.lastEvt=l,r===!0||v.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&R(u),l.cancelBubble===!0&&D(u),Object.assign(u,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:u}}D(l)}const{left:t,top:s}=B(l);e.event={x:t,y:s,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:s}},move(l){if(e.event===void 0)return;const r=B(l),t=r.left-e.event.x,s=r.top-e.event.y;if(t===0&&s===0)return;e.lastEvt=l;const u=e.event.mouse===!0,p=()=>{f(l,u);let b;v.preserveCursor!==!0&&v.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Me(),e.styleCleanup=y=>{if(e.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),u===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{q(),y()},50):q()}else y!==void 0&&y()}};if(e.event.detected===!0){e.event.isFirst!==!0&&f(l,e.event.mouse);const{payload:b,synthetic:y}=$(l,e,!1);b!==void 0&&(e.handler(b)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=b.position.left,e.event.lastY=b.position.top,e.event.lastDir=y===!0?void 0:b.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){p(),e.event.detected=!0,e.move(l);return}const z=Math.abs(t),h=Math.abs(s);z!==h&&(e.direction.horizontal===!0&&z>h||e.direction.vertical===!0&&z<h||e.direction.up===!0&&z<h&&s<0||e.direction.down===!0&&z<h&&s>0||e.direction.left===!0&&z>h&&t<0||e.direction.right===!0&&z>h&&t>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,r){if(e.event!==void 0){if(H(e,"temp"),_.is.firefox===!0&&A(o,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler($(l===void 0?e.lastEvt:l,e).payload);const{payload:t}=$(l===void 0?e.lastEvt:l,e,!0),s=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(o.__qtouchpan=e,v.mouse===!0){const l=v.mouseCapture===!0||v.mousecapture===!0?"Capture":"";P(e,"main",[[o,"mousedown","mouseStart",`passive${l}`]])}_.has.touch===!0&&P(e,"main",[[o,"touchstart","touchStart",`passive${v.capture===!0?"Capture":""}`],[o,"touchmove","noop","notPassiveCapture"]])},updated(o,n){const v=o.__qtouchpan;v!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&v.end(),v.handler=n.value),v.direction=I(n.modifiers))},beforeUnmount(o){const n=o.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),H(n,"main"),H(n,"temp"),_.is.firefox===!0&&A(o,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete o.__qtouchpan)}});const G=["vertical","horizontal"],j={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},J={prevent:!0,mouse:!0,mouseAllDir:!0},W=o=>o>=250?50:Math.ceil(o/5);var He=he({name:"QScrollArea",props:{...me,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(o,{slots:n,emit:v}){const f=m(!1),e=m(!1),l=m(!1),r={vertical:m(0),horizontal:m(0)},t={vertical:{ref:m(null),position:m(0),size:m(0)},horizontal:{ref:m(null),position:m(0),size:m(0)}},{proxy:s}=_e(),u=be(o,s.$q);let p=null,z;const h=m(null),b=d(()=>"q-scrollarea"+(u.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=d(()=>{const a=t.vertical.size.value-r.vertical.value;if(a<=0)return 0;const i=T(t.vertical.position.value/a,0,1);return Math.round(i*1e4)/1e4}),t.vertical.thumbHidden=d(()=>(o.visible===null?l.value:o.visible)!==!0&&f.value===!1&&e.value===!1||t.vertical.size.value<=r.vertical.value+1),t.vertical.thumbStart=d(()=>t.vertical.percentage.value*(r.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=d(()=>Math.round(T(r.vertical.value*r.vertical.value/t.vertical.size.value,W(r.vertical.value),r.vertical.value))),t.vertical.style=d(()=>({...o.thumbStyle,...o.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=d(()=>{const a=t.horizontal.size.value-r.horizontal.value;if(a<=0)return 0;const i=T(Math.abs(t.horizontal.position.value)/a,0,1);return Math.round(i*1e4)/1e4}),t.horizontal.thumbHidden=d(()=>(o.visible===null?l.value:o.visible)!==!0&&f.value===!1&&e.value===!1||t.horizontal.size.value<=r.horizontal.value+1),t.horizontal.thumbStart=d(()=>t.horizontal.percentage.value*(r.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=d(()=>Math.round(T(r.horizontal.value*r.horizontal.value/t.horizontal.size.value,W(r.horizontal.value),r.horizontal.value))),t.horizontal.style=d(()=>({...o.thumbStyle,...o.horizontalThumbStyle,[s.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=d(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?o.contentStyle:o.contentActiveStyle),q=[[x,a=>{k(a,"vertical")},void 0,{vertical:!0,...J}]],Z=[[x,a=>{k(a,"horizontal")},void 0,{horizontal:!0,...J}]];function F(){const a={};return G.forEach(i=>{const c=t[i];a[i+"Position"]=c.position.value,a[i+"Percentage"]=c.percentage.value,a[i+"Size"]=c.size.value,a[i+"ContainerSize"]=r[i].value}),a}const X=pe(()=>{const a=F();a.ref=s,v("scroll",a)},0);function Y(a,i,c){if(G.includes(a)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(a==="vertical"?K:O)(h.value,i,c)}function ee({height:a,width:i}){let c=!1;r.vertical.value!==a&&(r.vertical.value=a,c=!0),r.horizontal.value!==i&&(r.horizontal.value=i,c=!0),c===!0&&M()}function te({position:a}){let i=!1;t.vertical.position.value!==a.top&&(t.vertical.position.value=a.top,i=!0),t.horizontal.position.value!==a.left&&(t.horizontal.position.value=a.left,i=!0),i===!0&&M()}function le({height:a,width:i}){t.horizontal.size.value!==i&&(t.horizontal.size.value=i,M()),t.vertical.size.value!==a&&(t.vertical.size.value=a,M())}function k(a,i){const c=t[i];if(a.isFirst===!0){if(c.thumbHidden.value===!0)return;z=c.position.value,e.value=!0}else if(e.value!==!0)return;a.isFinal===!0&&(e.value=!1);const C=j[i],w=r[i].value,ne=(c.size.value-w)/(w-c.thumbSize.value),ue=a.distance[C.dist],se=z+(a.direction===C.dir?1:-1)*ue*ne;Q(se,i)}function L(a,i){const c=t[i];if(c.thumbHidden.value!==!0){const C=a[j[i].offset];if(C<c.thumbStart.value||C>c.thumbStart.value+c.thumbSize.value){const w=C-c.thumbSize.value/2;Q(w/r[i].value*c.size.value,i)}c.ref.value!==null&&c.ref.value.dispatchEvent(new MouseEvent(a.type,a))}}function ae(a){L(a,"vertical")}function re(a){L(a,"horizontal")}function M(){f.value=!0,p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,f.value=!1},o.delay),o.onScroll!==void 0&&X()}function Q(a,i){h.value[j[i].scroll]=a}let g=null;function oe(){g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,l.value=!0},s.$q.platform.is.ios?50:0)}function ie(){g!==null&&(clearTimeout(g),g=null),l.value=!1}let E=null;return ze(()=>s.$q.lang.rtl,a=>{h.value!==null&&O(h.value,Math.abs(t.horizontal.position.value)*(a===!0?-1:1))}),Se(()=>{E={top:t.vertical.position.value,left:t.horizontal.position.value}}),ye(()=>{if(E===null)return;const a=h.value;a!==null&&(O(a,E.left),K(a,E.top))}),ge(X.cancel),Object.assign(s,{getScrollTarget:()=>h.value,getScroll:F,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:Y,setScrollPercentage(a,i,c){Y(a,i*(t[a].size.value-r[a].value)*(a==="horizontal"&&s.$q.lang.rtl===!0?-1:1),c)}}),()=>S("div",{class:b.value,onMouseenter:oe,onMouseleave:ie},[S("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:o.tabindex!==void 0?o.tabindex:void 0},[S("div",{class:"q-scrollarea__content absolute",style:y.value},Ce(n.default,[S(U,{debounce:0,onResize:le})])),S(qe,{axis:"both",onScroll:te})]),S(U,{debounce:0,onResize:ee}),S("div",{class:t.vertical.barClass.value,style:[o.barStyle,o.verticalBarStyle],"aria-hidden":"true",onMousedown:ae}),S("div",{class:t.horizontal.barClass.value,style:[o.barStyle,o.horizontalBarStyle],"aria-hidden":"true",onMousedown:re}),V(S("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),q),V(S("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),Z)])}});export{He as Q,x as T};
