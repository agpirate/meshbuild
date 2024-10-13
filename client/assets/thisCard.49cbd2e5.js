import{h as E}from"./thisAndForeignMixin.a857c10d.js";import{az as J,r as X,c as w,w as Z,l as i,Y as a,u as e,m as S,n as m,f as u,W as s,F as k,bb as C,p,X as N,b as G,b9 as O,Q as A,Z as d,a2 as $,_,a3 as f,a4 as h,be as j,ba as q,bd as P,a0 as K,a1 as ee,bP as te,bI as le,bJ as se}from"./index.39fdb616.js";import{Q as oe}from"./debugCards.9002d9a8.js";import{e as ie,Q as B}from"./dynamicModule.b0001511.js";import{a as ae}from"./schemaValidator.5ac88f9a.js";import{u as ne}from"./fileserviceMixin.f4920f93.js";const M=r=>(le("data-v-5badc5eb"),r=r(),se(),r),de={class:"col q-pa-none q-ma-none"},re={class:"absolute-full transparent column justify-between"},ue={class:"row q-ma-sm"},ce={key:0,class:"justify-left col-auto",style:{}},pe={class:"row",style:{width:"100%",height:"10px"}},ye=["onClick"],me=M(()=>s("div",{class:"col text-dark"},null,-1)),be={class:"column col-auto q-gutter-xs",style:{width:"5vw"}},ve={class:"col row justify-between q-py-sm"},_e={class:"self-end justify-left col-auto",style:{"max-width":"4vw"}},fe={key:0},ge={key:1,class:"font0astyle"},he={class:"col fontastyle q-gutter-xs column",style:{"border-radius":"5px",border:"0px solid white"}},xe={class:"col-auto row q-gutter-md"},we={class:"col-grow",style:{border:"0px solid black","max-width":"10vw"}},Se={key:0,class:"boxvalidStyle text-red"},ke={class:"col-grow",style:{border:"0px solid black"}},Ce={key:0,class:"boxvalidStyle text-red"},qe={class:"col",style:{border:"0px solid black"}},Ve={key:0,class:"boxvalidStyle text-red"},$e={class:"col",style:{border:"0px solid black"}},Ie={key:0,class:"boxvalidStyle text-red"},Fe={key:0},Re={key:0,class:"boxvalidStyle"},Qe={class:"col fontastyle q-gutter-xs column",style:{"border-radius":"5px",border:"0px solid white"}},Ue={class:"row q-gutter-md"},Ne={class:"col",style:{border:"0px solid black"}},Oe={key:0,class:"boxvalidStyle text-red"},Ae={class:"col-auto",style:{border:"0px solid black"}},je={key:0,class:"boxvalidStyle text-red"},Pe={class:"col-auto",style:{border:"0px solid black"}},Be={key:0,class:"boxvalidStyle text-red"},Me=M(()=>s("p",null,"(Happy Hours Price)",-1)),ze={class:"column q-gutter-sm"},De={key:0,class:"boxvalidStyle"},He={key:0,class:"boxvalidStyle"},Le={__name:"thisCard",props:{_this:{type:Object,default:()=>({})},_pageSettings:{type:Object,default:()=>({})},__thisOps:{type:String,required:!0},__thisOpsStatus:{type:String},__thisFileAttribute:{type:String},thisSchemaFile_Rec:{type:String},thisSchemaPath_Rec:{type:String}},emits:["Create_this","Update_this","close"],setup(r,{emit:z}){var{thisSchemaPath:D,thisSchemaFile:H,_debugObj:n,_validateThis:c}=ae(),{_thisMedia:Te,_fileAttributeName:I,_cameraBox:We,_fileSourceFoCam:Ye,_fileAsSRC:x,_fileAsString:L,_fileAsRaw:F,_liveFeedSRC:Ee,_fileAsSRCIndex:R,_cameraDevice:Je,_listCameraSource:Xe,_selectedCameraById:Ze,_selectedCameraByface:Ge,_liveFeedRawStreaming:Ke,_fileSourceFolder:T,_fileAsSRCOps:b,_fileAsSRCOpsCall:W,_resetFileSource:et}=ne();const v=r;let g=X(null);ie(v.thisSchemaPath_Rec,v.thisSchemaFile_Rec).then(y=>{y&&(g.value=y)});var o=w(()=>v._this);L=w(()=>v._this[v.__thisFileAttribute]),D=w(()=>v.thisSchemaPath_Rec),H=w(()=>v.thisSchemaFile_Rec),Z(I,(y,t)=>(y&&(o.value[y]=F.value,typeof F.value=="object"?o.value.file_={files:y}:o.value.file_={file:y}),!0));const Q=z;function U(y){if(Object.values(n.value).every(l=>l==null)){if(!o.value.price)return!1}else return!1;Q(y)}function Y(){Q("close",!1)}return(y,t)=>(i(),a("div",{class:"overlay z-top",style:{},onClick:t[29]||(t[29]=l=>Y())},[Object.keys(e(o)).length&&e(g)?(i(),S(ee,{key:0,style:{"min-width":"30vw","max-width":"40vw","max-height":"80vh"},onClick:t[28]||(t[28]=K(()=>{},["stop"]))},{default:m(()=>[u(E,{value:.8,color:"orange"}),u($,{class:"row items-center no-wrap q-pa-none"},{default:m(()=>[s("div",de,[u(oe,{loading:"lazy",class:"",style:{"aspect-ratio":"2/1","max-width":"50vw"},src:e(I)?e(x)[e(R)]:e(o)[r.__thisFileAttribute][e(R)]},{default:m(()=>[s("div",re,[s("div",ue,[e(x)&&e(x).length>1?(i(),a("div",ce,[s("div",pe,[(i(!0),a(k,null,C(e(x).length,l=>(i(),a("button",{style:{"border-radius":"15px",width:"30px"},onClick:V=>e(W)(l-1),key:l},[s("p",{style:O(e(b)?"color:red":"")},d(l),5)],8,ye))),128))])])):p("",!0),me,s("div",be,[s("input",{type:"file",multiple:"",ref:"openFolder",style:{display:"none"},onChange:t[0]||(t[0]=l=>e(T)(l,r.__thisFileAttribute))},null,544),s("button",{stle:"width:100px;height:100px;padding:0px;margin:0px;",icon:"folder",onClick:t[1]||(t[1]=l=>y.$refs.openFolder.click())},[u(N,{name:"add_a_photo",style:{width:"100%",height:"100%",padding:"0px",margin:"0px"}})]),s("button",{stle:"width:100px;height:100px;padding:0px;margin:0px;",icon:"folder",onClick:t[2]||(t[2]=l=>G(b)?b.value=!e(b):b=!e(b))},[u(N,{name:"delete",style:O(e(b)?"color:red":"")},null,8,["style"])])])]),s("div",ve,[s("div",_e,[r.__thisOps=="CreateRowItem"?(i(),a("div",fe,[u(A,{"no-caps":"",dense:!0,loading:r.__thisOpsStatus,class:"apple-button",flat:"",label:(r._pageSettings.language,"Create"),onClick:t[3]||(t[3]=l=>U("Create_this"))},null,8,["loading","label"])])):(i(),a("div",ge,[u(A,{flat:"",loading:r.__thisOpsStatus,class:"bg-orange shadow-7 q-pa-xs row flex-center",color:"white",icon:"upload",onClick:t[4]||(t[4]=l=>U("Update_this"))},null,8,["loading"]),s("p",null,d((r._pageSettings.language,"Update")),1)]))])])])]),_:1},8,["src"])])]),_:1}),r.__thisOps=="CreateRowItem"?(i(),S($,{key:0,class:"column text-dark bg-white fontbstyle"},{default:m(()=>[s("fieldset",he,[s("div",xe,[s("fieldset",we,[s("legend",null,[_(" Quantity "),e(n).quantity?(i(),a("div",Se," ( "+d(e(n).quantity)+") ",1)):p("",!0)]),f(s("input",{type:"Number",class:"col fontestyle boxbstyle","onUpdate:modelValue":[t[5]||(t[5]=l=>e(o).quantity=l),t[6]||(t[6]=l=>e(c)("quantity",e(o).quantity))],style:{"max-width":"10vw"}},null,512),[[h,e(o).quantity]])]),s("fieldset",ke,[s("legend",null,[_(" Price "),e(n).price?(i(),a("div",Ce," ( "+d(e(n).price)+") ",1)):p("",!0)]),f(s("input",{type:"Number",class:"col fontestyle boxbstyle","onUpdate:modelValue":[t[7]||(t[7]=l=>e(o).price=l),t[9]||(t[9]=l=>e(c)("price",e(o).price))],onInput:t[8]||(t[8]=l=>e(c)("price",e(o).price)),style:{"max-width":"10vw"}},null,544),[[h,e(o).price]])]),s("fieldset",qe,[s("legend",null,[s("p",null,d(r._pageSettings.language?"\u121D\u12F5\u1265":"currency"),1),e(n).currency?(i(),a("div",Ve," ( "+d(e(n).currency)+") ",1)):p("",!0)]),f(s("select",{outlined:"",class:"col-md col-xs q-pa-none boxbstyle",style:{},color:"purple-12","onUpdate:modelValue":t[10]||(t[10]=l=>e(o).currency=l),onInput:t[11]||(t[11]=l=>e(c)("currency",e(o).currency))},[(i(!0),a(k,null,C(e(g).currency.enum,l=>(i(),a("option",{key:l},d(l),1))),128))],544),[[j,e(o).currency]])])]),s("div",null,[s("fieldset",$e,[s("legend",null,[s("p",null,d(r._pageSettings.language?"\u121D\u12F5\u1265":"catagory"),1),e(n).catagory?(i(),a("div",Ie," ( "+d(e(n).catagory)+") ",1)):p("",!0)]),f(s("select",{outlined:"",class:"col-md col-xs q-pa-none boxbstyle",style:{},color:"purple-12","onUpdate:modelValue":t[12]||(t[12]=l=>e(o).catagory=l),onInput:t[13]||(t[13]=l=>e(c)("catagory",e(o).catagory))},[(i(!0),a(k,null,C(e(g).catagory.enum,l=>(i(),a("option",{key:l},d(l),1))),128))],544),[[j,e(o).catagory]])])]),["Vehicles","Households"].includes(e(o).catagory)?(i(),a("div",Fe,[(i(!0),a(k,null,C(e(g).usage.enum,l=>(i(),S(te,{"keep-color":"","left-label":"",size:"md",modelValue:e(o).usage,"onUpdate:modelValue":[t[14]||(t[14]=V=>e(o).usage=V),t[15]||(t[15]=V=>e(c)("usage",e(o).usage))],val:l,label:l,color:"black",key:l},null,8,["modelValue","val","label"]))),128)),e(n).usage?(i(),a("div",Re,d(e(n).usage),1)):p("",!0)])):p("",!0),u(B,{caption:""},{default:m(()=>[_(" What are You Saling !")]),_:1}),u(q,{inset:""})])]),_:1})):(i(),S($,{key:1,class:"column text-dark bg-white fontbstyle"},{default:m(()=>[s("fieldset",Qe,[s("div",Ue,[s("fieldset",Ne,[s("legend",null,[_(" Quantity "),e(n).quantity?(i(),a("div",Oe," ( "+d(e(n).quantity)+") ",1)):p("",!0)]),f(s("input",{type:"Number",class:"fontestyle boxbstyle","onUpdate:modelValue":[t[16]||(t[16]=l=>e(o).quantity=l),t[17]||(t[17]=l=>e(c)("quantity",e(o).quantity))],style:{"max-width":"95%"}},null,512),[[h,e(o).quantity]])]),s("fieldset",Ae,[s("legend",null,[_(" Price "),e(n).price?(i(),a("div",je," ( "+d(e(n).price)+") ",1)):p("",!0)]),f(s("input",{type:"Number",class:"col fontestyle boxbstyle","onUpdate:modelValue":[t[18]||(t[18]=l=>e(o).price=l),t[20]||(t[20]=l=>e(c)("price",e(o).price))],onInput:t[19]||(t[19]=l=>e(c)("price",e(o).price)),style:{"max-width":"95%"}},null,544),[[h,e(o).price]])]),s("fieldset",Pe,[s("legend",null,[_(" New Price "),e(n).discount?(i(),a("div",Be," ( "+d(e(n).discount)+") ",1)):p("",!0)]),f(s("input",{type:"Number",class:"col fontestyle boxbstyle","onUpdate:modelValue":[t[21]||(t[21]=l=>e(o).discount=l),t[23]||(t[23]=l=>e(c)("discount",e(o).discount))],onInput:t[22]||(t[22]=l=>e(c)("discount",e(o).discount)),style:{"max-width":"95%"}},null,544),[[h,e(o).discount]]),Me])]),u(q,{inset:""}),s("div",ze,[u(P,{class:"col-md col-xs q-pa-sm",style:{},outlined:"",modelValue:e(o).header,"onUpdate:modelValue":[t[24]||(t[24]=l=>e(o).header=l),t[25]||(t[25]=l=>e(c)("header",e(o).header))],label:"Name","stack-label":""},{default:m(()=>[e(n).header?(i(),a("div",De,d(e(n).header),1)):p("",!0)]),_:1},8,["modelValue"]),u(P,{outlined:"",modelValue:e(o).content,"onUpdate:modelValue":[t[26]||(t[26]=l=>e(o).content=l),t[27]||(t[27]=l=>e(c)("content",e(o).content))],label:"decscriptions",style:{},filled:"",autogrow:""},{default:m(()=>[e(n).content?(i(),a("div",He,d(e(n).content),1)):p("",!0)]),_:1},8,["modelValue"])]),u(q,{inset:""}),u(B,{caption:""},{default:m(()=>[_(" Notes to be displayed !")]),_:1}),u(q,{inset:""})])]),_:1}))]),_:1})):p("",!0)]))}};var nt=J(Le,[["__scopeId","data-v-5badc5eb"]]);export{nt as t};
