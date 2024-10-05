import{c as s,q as H,r as d,am as N,A as M,o as O,h as r,av as P,x as A,bh as V,w as W,bi as w,g as Y,az as Z,l as k,Y as C,F as G,bb as J,bg as K,u as U,W as S,Z as X,f as p,a2 as ee}from"./index.bf8cd5e7.js";import{s as te}from"./debugMixin.7255e004.js";import"./statusMixin.2ae1da12.js";const ie={ratio:[String,Number]};function ae(e,i){return s(()=>{const a=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const ne=1.7778;var me=H({name:"QImg",props:{...ie,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ne},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:i,emit:a}){const m=d(e.initialRatio),g=ae(e,m),u=Y(),{registerTimeout:y,removeTimeout:c}=N(),{registerTimeout:q,removeTimeout:z}=N(),_=s(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),I=s(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),n=[d(null),d(_.value)],o=d(0),f=d(!1),v=d(!1),L=s(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),x=s(()=>({width:e.width,height:e.height})),R=s(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),j=s(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function D(){if(z(),e.loadingShowDelay===0){f.value=!0;return}q(()=>{f.value=!0},e.loadingShowDelay)}function b(){z(),f.value=!1}function Q({target:t}){w(u)===!1&&(c(),m.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,T(t,1))}function T(t,l){l===1e3||w(u)===!0||(t.complete===!0?$(t):y(()=>{T(t,l+1)},50))}function $(t){w(u)!==!0&&(o.value=o.value^1,n[o.value].value=null,b(),t.getAttribute("__qerror")!=="true"&&(v.value=!1),a("load",t.currentSrc||t.src))}function F(t){c(),b(),v.value=!0,n[o.value].value=I.value,n[o.value^1].value=_.value,a("error",t)}function B(t){const l=n[t].value,h={key:"img_"+t,class:R.value,style:j.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return o.value===t?Object.assign(h,{class:h.class+"current",onLoad:Q,onError:F}):h.class+="loaded",r("div",{class:"q-img__container absolute-full",key:"img"+t},r("img",h))}function E(){return f.value===!1?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},A(i[v.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[r(V,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){W(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,l=>{c(),v.value=!1,l===null?(b(),n[o.value^1].value=_.value):D(),n[o.value].value=l},{immediate:!0})};M.value===!0?O(t):t()}return()=>{const t=[];return g.value!==null&&t.push(r("div",{key:"filler",style:g.value})),n[0].value!==null&&t.push(B(0)),n[1].value!==null&&t.push(B(1)),t.push(r(P,{name:"q-transition--fade"},E)),r("div",{key:"main",class:L.value,style:x.value,role:"img","aria-label":e.alt},t)}}});const oe={class:"notification"},re={style:{color:"whitesmoke",padding:"5px"},class:"fontastyle"},le={class:"col-auto row transparent"},se=["onClick"],ue={__name:"debugCards",props:{messages:{type:Object,default:()=>({})}},emits:["closeButton"],setup(e,{emit:i}){const a=i;function m(g,u){a("closeButton",g,u)}return(g,u)=>(k(),C("div",{class:K([U(te)=="Small"?"mobile":"desktop","z-top flexlyt columnitm"]),style:{position:"fixed",bottom:"5%",left:"3%","border-radius":"3px",padding:"3px",margin:"2px"}},[(k(!0),C(G,null,J(e.messages,(y,c)=>(k(),C("div",{key:c},[S("div",oe,[S("div",re,X(y.content),1),S("div",le,[S("button",{style:{"background-color":"transparent",color:"red"},class:"btn btn-close",onClick:q=>m("close",c)},[p(ee,{name:"close"})],8,se)])])]))),128))],2))}};var fe=Z(ue,[["__scopeId","data-v-e73ff32a"]]);export{me as Q,fe as d};
