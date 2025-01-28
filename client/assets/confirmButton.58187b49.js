import{q as c,a9 as g,ab as y,c as d,h as m,x as S,g as k,l as f,X as b,W as t,Y as r,bo as u}from"./index.bcd9954b.js";const h=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],q=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var w=c({name:"QSkeleton",props:{...g,tag:{type:String,default:"div"},type:{type:String,validator:e=>h.includes(e),default:"rect"},animation:{type:String,validator:e=>q.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:s}){const i=k(),o=y(e,i.proxy.$q),a=d(()=>{const l=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:l[0],height:l[1]}}),n=d(()=>`q-skeleton q-skeleton--${o.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>m(e.tag,{class:n.value,style:a.value},S(s.default))}});const v={class:"boxStyle p-sidesmd bgsmokey radiusxxs onedlayout ccolumn cgap-3 fontStyle-dense"},x={class:"txtgrey"},B={class:"boxStyle-dense onedlayout ccolumn cgap-4 fontStyle-dense"},Q=t("p",null,"The item will be deleted permanently",-1),C={class:"onedlayout crow cgap-3"},$={__name:"confirmButton",props:{header:{type:String,required:!1},title:{type:String,required:!1},textcolor:{type:String,required:!1},background:{type:String,required:!1},title2:{type:String,required:!1},textcolor2:{type:String,required:!1},background2:{type:String,required:!1}},emits:["confirmButton"],setup(e,{emit:s}){const i=s;function o(a){i("confirmButton",a)}return(a,n)=>(f(),b("div",v,[t("h3",x,r(e.header),1),t("div",B,[Q,t("div",C,[t("button",{class:"BBoxStyle-dense radiusmd bgnegative fontStyle-dense",onClick:n[0]||(n[0]=l=>o(!0)),style:u({backgroundColor:e.background,color:e.textcolor})},[t("h2",null,r(e.title),1)],4),t("button",{class:"BBoxStyle-dense radiusmd bgnegative fontStyle-dense",onClick:n[1]||(n[1]=l=>o(!1)),style:u({backgroundColor:e.background2,color:e.textcolor2})},[t("h2",null,r(e.title2),1)],4)])])]))}};export{w as Q,$ as _};
