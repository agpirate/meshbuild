import{az as S,l as c,Y as i,F as _,bb as B,bg as C,b9 as u,W as o,Z as f,f as d,a2 as h,bI as z,bJ as $,Q as g}from"./index.a33c9604.js";import"./thisAndForeignMixin.7695bea4.js";const w=e=>(z("data-v-761489ef"),e=e(),$(),e),I={class:"row justify-between"},j={style:{"font-size":"14px",color:"#555"}},N={class:"col-auto row transparent"},F=["onClick"],Q=w(()=>o("div",null,null,-1)),P={__name:"statusCards",props:{messages:{type:Object,default:()=>({})}},emits:["closeButton"],setup(e,{emit:y}){const a=y;function b(s,t){a("closeButton",s,t)}return(s,t)=>(c(),i("div",{style:{position:"fixed",bottom:"5%",right:"3%"},class:C(["z-top column justify-end",s.screenSize=="Small"?"mobile":"desktop"])},[(c(!0),i(_,null,B(e.messages,(r,n)=>{var l;return c(),i("div",{class:"notification",style:u("color:"+r.color),key:n},[o("div",I,[o("p",j,f((l=r.content)!=null?l:""),1),o("div",N,[o("button",{style:{"background-color":"transparent",color:"red"},onClick:m=>b("close",n)},[d(h,{name:"close"})],8,F)])])],4)}),128)),Q],2))}};var O=S(P,[["__scopeId","data-v-761489ef"]]);const V={class:"row justify-between items-center q-gutter-md q-py-md"},D={class:"col-auto column justify-evenly q-gutter-xs"},E={class:"col",style:{"backdrop-filter":"blur(200px)","border-radius":"10%"}},W={__name:"buyButton",props:{quantity:{type:Number,required:!0},price:{type:Number,required:!0},title:{type:String,required:!0},textcolor:{type:String,required:!0},background:{type:String,required:!0},title2:{type:String,required:!0},textcolor2:{type:String,required:!0},background2:{type:String,required:!0},currency:{type:String,required:!0},onstore:{type:Number,required:!0}},emits:["decreaseButton","increaseButton"],setup(e,{emit:y}){const a=y;function b(t){a("decreaseButton",t)}function s(t){console.log("increasing button",t),a("increaseButton",t)}return(t,r)=>{var n,l,m,k,v,p;return c(),i("div",V,[o("div",D,[d(g,{label:e.title,icon:"remove",flat:"",style:u([{"background-color":"red"},{backgroundColor:(n=e.background)!=null?n:"red",color:(l=e.textcolor)!=null?l:"black"}]),class:"",dense:!0,onClick:r[0]||(r[0]=x=>parseFloat(e.quantity)>1?b(!0):!1)},null,8,["label","style"]),d(g,{color:"orange",size:"md",class:"q-mx-xs","no-caps":"",label:"Qty = "+e.quantity,dense:!0},null,8,["label"]),d(g,{onClick:r[1]||(r[1]=x=>{var q;return parseFloat(e.quantity)<((q=e.onstore)!=null?q:1e6)?s(!1):!1}),label:e.title2,icon:"add",class:"",flat:"",dense:!0,style:u({backgroundColor:(m=e.background2)!=null?m:"orange",color:(k=e.textcolor2)!=null?k:"black"})},null,8,["label","style"])]),o("div",E,[o("div",{class:"fontcstyle q-pa-xs",style:u([{backgroundColor:e.background2,color:(v=e.textcolor2)!=null?v:"black"},{border:"1px solid black","border-radius":"5px"}])},f(e.price*e.quantity)+" "+f((p=e.currency)!=null?p:""),5)])])}}};export{W as _,O as s};
