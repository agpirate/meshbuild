import{l as g,Y as f,W as i,Z as r,f as s,n as l,X as u,b9 as a,Q as c}from"./index.00a864f4.js";import"./thisAndForeignMixin.e24c3402.js";const k={class:"column"},q={class:"fontestyle q-py-md"},S={class:"row justify-between q-gutter-sm fontestyle",style:{width:"100%"}},B={__name:"confirmButton",props:{header:{type:String,required:!0},title:{type:String,required:!0},textcolor:{type:String,required:!0},background:{type:String,required:!0},title2:{type:String,required:!0},textcolor2:{type:String,required:!0},background2:{type:String,required:!0}},emits:["confirmButton"],setup(t,{emit:d}){const y=d;function o(n){y("confirmButton",n)}return(n,e)=>(g(),f("div",k,[i("div",q,r(t.header),1),i("div",S,[s(c,{onClick:e[0]||(e[0]=m=>o(!0)),style:a({backgroundColor:t.background,color:t.textcolor})},{default:l(()=>[u(r(t.title),1)]),_:1},8,["style"]),s(c,{onClick:e[1]||(e[1]=m=>o(!1)),style:a({backgroundColor:t.background2,color:t.textcolor2})},{default:l(()=>[u(r(t.title2),1)]),_:1},8,["style"])])]))}};export{B as _};
