import{q as w,G as E,w as p,o as v,H as b,I as x,J as L,g as S,K as m,L as P,M as H,r as C,A as M,N as T,h as N}from"./index.88fd6401.js";const{passive:y}=m,Q=["both","horizontal","vertical"];var D=w({name:"QScrollObserver",props:{axis:{type:String,validator:i=>Q.includes(i),default:"vertical"},debounce:[String,Number],scrollTarget:E},emits:["scroll"],setup(i,{emit:g}){const e={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,c;p(()=>i.scrollTarget,()=>{o(),d()});function l(){t!==null&&t();const u=Math.max(0,P(r)),f=H(r),s={top:u-e.position.top,left:f-e.position.left};if(i.axis==="vertical"&&s.top===0||i.axis==="horizontal"&&s.left===0)return;const h=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";e.position={top:u,left:f},e.directionChanged=e.direction!==h,e.delta=s,e.directionChanged===!0&&(e.direction=h,e.inflectionPoint=e.position),g("scroll",{...e})}function d(){r=L(c,i.scrollTarget),r.addEventListener("scroll",n,y),n(!0)}function o(){r!==void 0&&(r.removeEventListener("scroll",n,y),r=void 0)}function n(u){if(u===!0||i.debounce===0||i.debounce==="0")l();else if(t===null){const[f,s]=i.debounce?[setTimeout(l,i.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];t=()=>{s(f),t=null}}}const{proxy:a}=S();return p(()=>a.$q.lang.rtl,l),v(()=>{c=a.$el.parentNode,d()}),b(()=>{t!==null&&t(),o()}),Object.assign(a,{trigger:n,getPosition:()=>e}),x}});function R(){const i=C(!M.value);return i.value===!1&&v(()=>{i.value=!0}),{isHydrated:i}}const O=typeof ResizeObserver!="undefined",z=O===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var V=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(i,{emit:g}){let e=null,t,r={width:-1,height:-1};function c(o){o===!0||i.debounce===0||i.debounce==="0"?l():e===null&&(e=setTimeout(l,i.debounce))}function l(){if(e!==null&&(clearTimeout(e),e=null),t){const{offsetWidth:o,offsetHeight:n}=t;(o!==r.width||n!==r.height)&&(r={width:o,height:n},g("resize",r))}}const{proxy:d}=S();if(d.trigger=c,O===!0){let o;const n=a=>{t=d.$el.parentNode,t?(o=new ResizeObserver(c),o.observe(t),l()):a!==!0&&T(()=>{n(!0)})};return v(()=>{n()}),b(()=>{e!==null&&clearTimeout(e),o!==void 0&&(o.disconnect!==void 0?o.disconnect():t&&o.unobserve(t))}),x}else{let a=function(){e!==null&&(clearTimeout(e),e=null),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",c,m.passive),n=void 0)},u=function(){a(),t&&t.contentDocument&&(n=t.contentDocument.defaultView,n.addEventListener("resize",c,m.passive),l())};const{isHydrated:o}=R();let n;return v(()=>{T(()=>{t=d.$el,t&&u()})}),b(a),()=>{if(o.value===!0)return N("object",{class:"q--avoid-card-border",style:z.style,tabindex:-1,type:"text/html",data:z.url,"aria-hidden":"true",onLoad:u})}}}});export{D as Q,V as a};
