import{E as u,K as g,L as m,c as d,h as y,H as S,g as k,k as b,l as f,q as t,v as r,A as c}from"./index.1766bbda.js";const h=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],q=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var w=u({name:"QSkeleton",props:{...g,tag:{type:String,default:"div"},type:{type:String,validator:e=>h.includes(e),default:"rect"},animation:{type:String,validator:e=>q.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:s}){const i=k(),o=m(e,i.proxy.$q),a=d(()=>{const l=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:l[0],height:l[1]}}),n=d(()=>`q-skeleton q-skeleton--${o.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>y(e.tag,{class:n.value,style:a.value},S(s.default))}});const v={class:"boxStyle p-sidesmd bgc-grey200 radius-xxs onedlayout ccolumn cgap-3 fontStyle-sm"},x={class:"font-grey"},Q={class:"boxStyle-sm onedlayout ccolumn cgap-4 fontStyle-sm"},B=t("p",null,"The item will be deleted permanently",-1),C={class:"onedlayout crow cgap-3"},$={__name:"confirmButton",props:{header:{type:String,required:!1},title:{type:String,required:!1},textcolor:{type:String,required:!1},background:{type:String,required:!1},title2:{type:String,required:!1},textcolor2:{type:String,required:!1},background2:{type:String,required:!1}},emits:["confirmButton"],setup(e,{emit:s}){const i=s;function o(a){i("confirmButton",a)}return(a,n)=>(b(),f("div",v,[t("h3",x,r(e.header),1),t("div",Q,[B,t("div",C,[t("button",{class:"bboxStyle-sm radiusmd bgc-negative fontStyle-sm",onClick:n[0]||(n[0]=l=>o(!0)),style:c({backgroundColor:e.background,color:e.textcolor})},[t("h2",null,r(e.title),1)],4),t("button",{class:"bboxStyle-sm radiusmd bgc-negative fontStyle-sm",onClick:n[1]||(n[1]=l=>o(!1)),style:c({backgroundColor:e.background2,color:e.textcolor2})},[t("h2",null,r(e.title2),1)],4)])])]))}};export{w as Q,$ as _};
