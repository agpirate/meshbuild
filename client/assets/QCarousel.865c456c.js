import{b3 as H,a$ as B,C as J,b4 as Z,aY as N,b5 as V,au as Y,ag as O,aZ as L,r as K,c,w as F,g as W,J as G,h as f,ay as ee,bH as te,x as M,bI as ne,q as j,a9 as oe,ab as ae,o as ie,B as re,ad as le,bt as ue,Q as z,M as se}from"./index.9a87f786.js";import{g as R,s as U}from"./touch.9135741d.js";import{k as ce}from"./debugMixin.4ead5bfe.js";import{m as ve,n as de,o as fe}from"./crudThisModel.46b92e8d.js";function me(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,m)=>{const r=parseFloat(i);r&&(o[m]=r)}),o}var pe=H({name:"touch-swipe",beforeMount(e,{value:o,arg:i,modifiers:m}){if(m.mouse!==!0&&B.has.touch!==!0)return;const r=m.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:me(i),direction:R(m),noop:J,mouseStart(a){U(a,t)&&Z(a)&&(N(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(U(a,t)){const d=a.target;N(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,d){B.is.firefox===!0&&V(e,!0);const h=Y(a);t.event={x:h.left,y:h.top,time:Date.now(),mouse:d===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){O(a);return}const d=Date.now()-t.event.time;if(d===0)return;const h=Y(a),y=h.left-t.event.x,u=Math.abs(y),b=h.top-t.event.y,s=Math.abs(b);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&s<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(u<t.sensitivity[2]&&s<t.sensitivity[2])return;const p=u/d,C=s/d;t.direction.vertical===!0&&u<s&&u<100&&C>t.sensitivity[0]&&(t.event.dir=b<0?"up":"down"),t.direction.horizontal===!0&&u>s&&s<100&&p>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&u<s&&b<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<s&&b>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>s&&y<0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>s&&y>0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(O(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ce(),t.styleCleanup=w=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const x=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(x,50):x()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:d,distance:{x:u,y:s}})):t.end(a)},end(a){t.event!==void 0&&(L(t,"temp"),B.is.firefox===!0&&V(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&O(a),t.event=void 0)}};if(e.__qtouchswipe=t,m.mouse===!0){const a=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";N(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}B.has.touch===!0&&N(t,"main",[[e,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchswipe;i!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&i.end(),i.handler=o.value),i.direction=R(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(L(o,"main"),L(o,"temp"),B.is.firefox===!0&&V(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});function ge(){let e=Object.create(null);return{getCache:(o,i)=>e[o]===void 0?e[o]=typeof i=="function"?i():i:e[o],setCache(o,i){e[o]=i},hasCache(o){return Object.hasOwnProperty.call(e,o)},clearCache(o){o!==void 0?delete e[o]:e=Object.create(null)}}}const he={name:{required:!0},disable:Boolean},X={setup(e,{slots:o}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},M(o.default))}},ye={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},be=["update:modelValue","beforeTransition","transition"];function Ce(){const{props:e,emit:o,proxy:i}=W(),{getCache:m}=ge();let r,t;const a=K(null),d=K(null);function h(n){const l=e.vertical===!0?"up":"left";P((i.$q.lang.rtl===!0?-1:1)*(n.direction===l?1:-1))}const y=c(()=>[[pe,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=c(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=c(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),s=c(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=c(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=c(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=c(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);F(()=>e.modelValue,(n,l)=>{const g=_(n)===!0?k(n):-1;t!==!0&&T(g===-1?0:g<k(l)?-1:1),a.value!==g&&(a.value=g,o("beforeTransition",n,l),G(()=>{o("transition",n,l)}))});function x(){P(1)}function $(){P(-1)}function D(n){o("update:modelValue",n)}function _(n){return n!=null&&n!==""}function k(n){return r.findIndex(l=>l.props.name===n&&l.props.disable!==""&&l.props.disable!==!0)}function Q(){return r.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function T(n){const l=n!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(n===-1?u.value:b.value):null;d.value!==l&&(d.value=l)}function P(n,l=a.value){let g=l+n;for(;g!==-1&&g<r.length;){const S=r[g];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){T(n),t=!0,o("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}g+=n}e.infinite===!0&&r.length!==0&&l!==-1&&l!==r.length&&P(n,n===-1?r.length:-1)}function I(){const n=k(e.modelValue);return a.value!==n&&(a.value=n),!0}function E(){const n=_(e.modelValue)===!0&&I()&&r[a.value];return e.keepAlive===!0?[f(ne,C.value,[f(w.value===!0?m(p.value,()=>({...X,name:p.value})):X,{key:p.value,style:s.value},()=>n)])]:[f("div",{class:"q-panel scroll",style:s.value,key:p.value,role:"tabpanel"},[n])]}function v(){if(r.length!==0)return e.animated===!0?[f(ee,{name:d.value},E)]:E()}function q(n){return r=te(M(n.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&_(l.props.name)===!0),r.length}function A(){return r}return Object.assign(i,{next:x,previous:$,goTo:D}),{panelIndex:a,panelDirectives:y,updatePanelsList:q,updatePanelIndex:I,getPanelContent:v,getEnabledPanels:Q,getPanels:A,isValidPanelName:_,keepAliveProps:C,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:P,goToPanel:D,nextPanel:x,previousPanel:$}}var ke=j({name:"QCarouselSlide",props:{...he,imgSrc:String},setup(e,{slots:o}){const i=c(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:i.value},M(o.default))}}),Te=j({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:o}){const i=c(()=>`q-carousel__control absolute absolute-${e.position}`),m=c(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>f("div",{class:i.value,style:m.value},M(o.default))}});const xe=["top","right","bottom","left"],Pe=["regular","flat","outline","push","unelevated"];var $e=j({name:"QCarousel",props:{...oe,...ye,...ve,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Pe.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>xe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...de,...be],setup(e,{slots:o}){const{proxy:{$q:i}}=W(),m=ae(e,i);let r=null,t;const{updatePanelsList:a,getPanelContent:d,panelDirectives:h,goToPanel:y,previousPanel:u,nextPanel:b,getEnabledPanels:s,panelIndex:p}=Ce(),{inFullscreen:C}=fe(),w=c(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),x=c(()=>e.vertical===!0?"vertical":"horizontal"),$=c(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),D=c(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${x.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${$.value}`:"")),_=c(()=>{const v=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?v.reverse():v}),k=c(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),Q=c(()=>e.navigationActiveIcon||k.value),T=c(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));F(()=>e.modelValue,()=>{e.autoplay&&P()}),F(()=>e.autoplay,v=>{v?P():r!==null&&(clearTimeout(r),r=null)});function P(){const v=ue(e.autoplay)===!0?Math.abs(e.autoplay):5e3;r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,v>=0?b():u()},v)}ie(()=>{e.autoplay&&P()}),re(()=>{r!==null&&clearTimeout(r)});function I(v,q){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${$.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},s().map(q))])}function E(){const v=[];if(e.navigation===!0){const q=o["navigation-icon"]!==void 0?o["navigation-icon"]:n=>f(z,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),A=t-1;v.push(I("buttons",(n,l)=>{const g=n.props.name,S=p.value===l;return q({index:l,maxIndex:A,name:g,active:S,btnProps:{icon:S===!0?Q.value:k.value,size:"sm",...T.value},onClick:()=>{y(g)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(I("thumbnails",A=>{const n=A.props;return f("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+q,src:n.imgSrc||n["img-src"],onClick:()=>{y(n.name)}})}))}return e.arrows===!0&&p.value>=0&&((e.infinite===!0||p.value>0)&&v.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${x.value} absolute flex flex-center`},[f(z,{icon:_.value[0],...T.value,onClick:u})])),(e.infinite===!0||p.value<t-1)&&v.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${x.value} absolute flex flex-center`},[f(z,{icon:_.value[1],...T.value,onClick:b})]))),se(o.control,v)}return()=>(t=a(o),f("div",{class:D.value,style:w.value},[le("div",{class:"q-carousel__slides-container"},d(),"sl-cont",e.swipeable,()=>h.value)].concat(E())))}});export{$e as Q,Te as a,ke as b};
