import{d as be,u as ke,Q as Se}from"./saleitModel.a4846131.js";import{r as z,c as V,w as O,l as i,V as n,f as m,n as B,u as e,U as s,p as S,F as w,a3 as I,W as re,m as P,Q as de,X as u,b as R,bn as we,Z as Ce,af as v,aO as f,aP as Be,$ as C,a0 as $,a2 as ue,bz as Ie,aI as A,aH as ce}from"./index.a557511d.js";import{k as Ne,l as qe,m as Ve}from"./crudThisModel.3ef3417b.js";import{Q as $e}from"./QItemLabel.566293a5.js";import{d as Fe}from"./debugMixin.91ffc486.js";const Oe={key:0},Re={key:1},Ue={class:"txtsmokey ps-relative cameraBox-size"},je={class:"onedlayout ccolumn"},Qe={key:0,class:"ps-absolute parent-fit onedlayout ccolumn cj-between"},De={key:0},ze={key:1,class:"ccol-grow onedlayout ccolumn cj-between"},Pe={class:"row",style:{"border-radius":"15px",height:"100px",overflow:"scroll"}},Ae={class:"fontStyle-dense onedlayout crow"},Me={key:0,class:"onedlayout crow ia-center"},Te=s("h4",{class:"txtlight"}," close",-1),Ee=[Te],Le=s("h4",{class:"txtlight"}," Save",-1),He=[Le],We=s("h4",null," Capure",-1),Ge=[We],Xe={size:"col-auto row"},Ze={key:1},Je={class:"txtsmokey"},Ke={key:2},Ye={class:"bgsmokey"},et=s("i",{class:"ri-upload-2-fill onedlayout crow ia-center txtlight"},null,-1),tt={class:"txtlight"},st={class:"boxStyle-dense ps-relative onedlayout crow ia-center cj-center",style:{width:"(15vw,35vw)","min-height":"15vh"}},lt=["src"],ot={key:1,class:""},it={class:"boxStyle-dense p-sidesm ps-absolute parent-fit"},nt={class:"row justify-end q-my-sm",style:{"min-width":"100%"}},at={key:0,class:"justify-left col-auto",style:{}},rt={class:"column",style:{width:"100%",height:"100%","background-color":"transparent"}},dt=["onClick"],ut=s("div",{class:"col text-dark"},null,-1),ct={class:"onedlayout ccolumn cgap-3",style:{}},yt={class:"onedlayout ccolumn ia-center"},mt=s("h3",{class:"txtgrey"},[s("i",{class:"ri-folder-fill"})],-1),vt=[mt],gt=s("h3",{class:"txtdark"},[s("i",{class:"ri-camera-fill"})],-1),pt=[gt],_t=s("i",{class:"ri-delete-bin-line"},null,-1),ht=[_t],ft=s("div",{class:"col row justify-between q-py-sm"},null,-1),xt={key:0,class:"boxStyle p-sidesm"},bt={class:"onedlayout crow cgap-3 cj-evenly"},kt={class:"onedlayout ccolumn cgap-2"},St={class:"onedlayout ccolumn cgap-2"},wt={class:"onedlayout ccolumn cgap-2"},Ct={class:"onedlayout ccolumn cgap-2"},Bt={key:0},It={key:0,class:"text-red"},Nt={key:1},qt={key:1,class:"column text-dark bg-white fontbstyle"},Vt={class:"col fontastyle q-gutter-xs column",style:{"border-radius":"5px",border:"0px solid white"}},$t={class:"justify-end row"},Ft={class:"txtprimary"},Ot={key:0},Rt={class:"onedlayout crow cgap-3 cj-evenly"},Ut={class:"onedlayout ccolumn cgap-2"},jt={class:"onedlayout ccolumn cgap-2"},Qt={class:"onedlayout ccolumn cgap-2"},Dt={key:1},zt={class:"column q-gutter-sm"},Pt={key:0,class:"text-red"},At={key:1},Mt={key:0,class:"text-red"},Tt={key:1},Kt={__name:"thisCard",props:{_this:{type:Object,default:()=>({})},_pageSettings:{type:Object,default:()=>({})},__thisOps:{type:String,required:!0},__thisOpsStatus:{type:String},active_fileName:{type:String},thisSchemaFile_Rec:{type:String},thisSchemaPath_Rec:{type:String}},emits:["Create_this","Update_this","close"],setup(a,{emit:U}){var J,K,Y,ee;var{thisSchemaPath:j,thisSchemaFile:g,_debugObj:c,_validateThis:d}=be(),{_thisMedia:Et,_fileAttributeName:Q,hasCameraPermission:D,_cameraBox:p,_fileSourceFoCam:M,_fileAsSRC:x,_fileAsString:ye,_fileAsRaw:T,_liveFeedSRC:me,_fileAsSRCIndex:E,_cameraDevice:ve,_listCameraSource:L,_selectedCameraById:H,_selectedCameraByface:W,_liveFeedRawStreaming:G,_liveFeedRawStreamingStatus:X,_fileSourceFolder:ge,_fileAsSRCOps:_,_fileAsSRCOpsCall:pe,_resetFileSource:Lt,get_liveFeedRaw:Ht}=ke();const y=a,Z=U;let N=z(null);Fe(y.thisSchemaPath_Rec,y.thisSchemaFile_Rec).then(r=>{r&&(N.value=r)});let b=z(!0);var o=V(()=>y._this);V(()=>y._this),ye=V(()=>(y._this[y.active_fileName],alert(y.active_fileName),""));var k=new ve;O(p,(r,t)=>!0);let _e=z(null);O(G,(r,t)=>(console.log("liveStream :  __  "+r),_e.value=r,!0)),O(D,(r,t)=>(console.log("cameraPermission"+r),!0)),j=V(()=>y.thisSchemaPath_Rec),g=V(()=>y.thisSchemaFile_Rec),O(Q,(r,t)=>(r&&(o.value[r]=T.value,typeof T.value=="object"?o.value.file_={files:r}:o.value.file_={file:r}),!0));let he=["Home & Living","Fashion & Apparel","Electronics & Gadgets"];y.__thisOps=="Create_this"&&(d("catagory",(J=o.value.catagory)!=null?J:""),d("price",(K=o.value.price)!=null?K:1),d("quantity",(Y=o.value.quantity)!=null?Y:1),d("currency",(ee=o.value.currency)!=null?ee:"ETB"));function fe(r){let t=Object.values(c.value).every(F=>F==null),q=Q.value?x.value.length:o.value[y.active_fileName].length;if(console.log(q,t),!(t&&q))return!1;Z(r)}function xe(){Z("close",!1)}return(r,t)=>{var q,F,te,se,le,oe,ie,ne,ae;return i(),n(w,null,[m(we,{modelValue:e(p),"onUpdate:modelValue":t[4]||(t[4]=l=>R(p)?p.value=l:p=l),class:"overlay-Glass rounded-borders z-top bg-black onedlayout crow",onClick:t[5]||(t[5]=l=>R(p)?p.value=!1:p=!1),style:{}},{default:B(()=>[e(M)=="folder"?(i(),n("div",Oe)):e(M)=="camera"?(i(),n("div",Re,[s("div",Ue,[s("div",je,[s("video",{clas:"",id:"feedRaw",ref_key:"_liveFeedRawStreaming",ref:G,autoplay:"",playsinline:"",style:{"max-width":"100%"}},null,512),s("canvas",{id:"_liveFeedSRC",ref_key:"_liveFeedSRC",ref:me,style:{display:"none"}},null,512)]),e(D)==!0?(i(),n("div",Qe,[e(X)=="init"?(i(),n("div",De," Waiting .... ")):S("",!0),e(X)=="ok"?(i(),n("div",ze,[s("div",Pe,[(i(!0),n(w,null,I(e(x),l=>(i(),n("div",{key:l,style:{margin:"5px"}},[m(Se,{src:l,style:{width:"50px"}},null,8,["src"])]))),128))]),s("div",Ae,[e(x).length?(i(),n("div",Me,[s("button",{class:"BBoxStyle-dense radiussm bgnegative",onClick:t[0]||(t[0]=l=>e(k)._stopCamera())},Ee),s("button",{class:"BBoxStyle-dense radiussm bgposetive",onClick:t[1]||(t[1]=l=>e(k)._saveScreenShoots())},He),re(" | ")])):S("",!0),s("button",{class:"BBoxStyle-dense radiussm bgsmokey",onClick:t[2]||(t[2]=l=>e(k)._screenShoot())},Ge),s("div",Xe,[e(L).length?(i(),P(qe,{key:0,"switch-toggle-side":"","expand-separator":"",icon:"camera",size:"xs"},{default:B(()=>[(i(!0),n(w,null,I(e(L),l=>(i(),P(Ne,{key:l,class:"row q-gutter-sm"},{default:B(()=>[m(de,{style:{height:"100%"},"no-caps":"",size:"sm",dense:!0,color:e(H)==l.deviceId?"blue":"black",label:l.label?l.label.split("_")[1]:"cam",onClick:h=>e(k)._setCameraParam(l.deviceId,!1)},null,8,["color","label","onClick"]),m(de,{style:{height:"100%"},"no-caps":"",size:"sm",dense:!0,color:e(H)==l.deviceId?"orange":"black",label:e(W)?"Front Cam":"Back Cam",onClick:h=>e(k)._setCameraParam(l.deviceId,!e(W))},null,8,["color","label","onClick"])]),_:2},1024))),128))]),_:1})):S("",!0)])])])):S("",!0)])):(i(),n("div",Ze,[s("h4",Je,u(e(D)),1),s("button",{onClick:t[3]||(t[3]=l=>e(k)._openCamera())}," Try Again.")]))])])):(i(),n("div",Ke," Error Accessing System, please allow on settting for Location and Media Devices "))]),_:1},8,["modelValue"]),s("div",{class:"fixed-topleft layer7 ts-box-fit bgdrop-deep ts-bg-backdrop-dense onedlayout crow cj-center ia-center",style:{display:"flex","flex-flow":"row wrap"},onClick:t[34]||(t[34]=l=>xe())},[Object.keys(e(o)).length&&e(N)?(i(),n("div",{key:0,class:"thisCard-size bgsmokey onedlayout ccolumn boxStyle-dense radiusxxs",onClick:t[33]||(t[33]=Ce(()=>{},["stop"]))},[s("div",Ye,[s("button",{class:v(["BBoxStyle-dense fontStyle-dense",a.__thisOps=="Create_this"?"bgsystem":"bggrey"]),onClick:t[6]||(t[6]=l=>fe(a.__thisOps))},[et,s("h4",tt,u(e(f)[a.__thisOps+"_label"][Number((q=a._pageSettings.language)!=null?q:1)]),1)],2)]),m(Ve,{value:.8,color:"orange"}),s("div",st,[(F=e(o)[a.active_fileName])!=null&&F?(i(),n("img",{key:0,class:"",src:e(Q)?e(x)[e(E)]:e(o)[a.active_fileName][e(E)],style:{"aspect-ratio":"2/1","max-width":"100%"}},null,8,lt)):(i(),n("div",ot," Image Required ")),s("div",it,[s("div",nt,[e(x)&&e(x).length>1?(i(),n("div",at,[s("div",rt,[(i(!0),n(w,null,I(e(x).length,l=>(i(),n("button",{style:{"border-radius":"0px","box-shadow":"none","background-color":"transparent",border:"0px"},onClick:h=>e(pe)(l-1),key:l},[s("input",{style:Be(e(_)?"color:red":""),type:"radio"},null,4)],8,dt))),128))])])):S("",!0),ut,s("div",ct,[s("input",{type:"file",multiple:"",ref:"openFolder",style:{display:"none"},onChange:t[7]||(t[7]=l=>e(ge)(l,a.active_fileName))},null,544),s("div",yt,[s("button",{class:"BBoxStyle-dense bgnull fontStyle",style:{"min-width":"2vw"},onClick:t[8]||(t[8]=l=>r.$refs.openFolder.click())},vt),s("button",{class:"BBoxStyle-dense bgnull fontStyle",style:{"min-width":"2vw"},onClick:t[9]||(t[9]=l=>e(k)._openCamera("saleitgr"))},pt),s("button",{style:{"background-color":"transparent",border:"0px"},icon:"folder",onClick:t[10]||(t[10]=l=>R(_)?_.value=!e(_):_=!e(_)),class:v(e(_)?"txtnegative":"")},[s("h3",{class:v(["txtdark",e(_)?"txtnegative":""])},ht,2)],2)])])]),ft])]),a.__thisOps=="Create_this"?(i(),n("div",xt,[s("div",bt,[s("div",kt,[s("h5",{class:v(e(c).quantity?"txtnegative":"txtprimary")},u(e(f).quantity[Number((te=a._pageSettings.language)!=null?te:1)]),3),C(s("input",{type:"Number",class:"iBoxStyle-dense radiusxxs","onUpdate:modelValue":t[11]||(t[11]=l=>e(o).quantity=l),onInput:t[12]||(t[12]=l=>e(d)("quantity",e(o).quantity))},null,544),[[$,e(o).quantity]])]),s("div",St,[s("h5",{class:v(e(c).price?"txtnegative":"txtprimary")},u(e(f).price[Number((se=a._pageSettings.language)!=null?se:1)]),3),C(s("input",{type:"Number",class:"iBoxStyle-dense radiusxxs","onUpdate:modelValue":t[13]||(t[13]=l=>e(o).price=l),onInput:t[14]||(t[14]=l=>e(d)("price",e(o).price))},null,544),[[$,e(o).price]])]),s("div",wt,[s("h5",{class:v(e(c).currency?"txtnegative":"txtprimary")},u(e(f).currency[Number((le=a._pageSettings.language)!=null?le:1)]),3),C(s("select",{class:"iBoxStyle-dense radiusxxs","onUpdate:modelValue":t[15]||(t[15]=l=>e(o).currency=l),onInput:t[16]||(t[16]=l=>e(d)("currency",e(o).currency))},[(i(!0),n(w,null,I(e(N).currency.enum,l=>(i(),n("option",{key:l},u(l),1))),128))],544),[[ue,e(o).currency]])])]),s("div",null,[s("div",Ct,[s("h5",{class:v(e(c).catagory?"txtnegative":"txtprimary")},u(e(f).catagory[Number((oe=a._pageSettings.language)!=null?oe:1)]),3),C(s("select",{type:"Number",class:"iBoxStyle-dense radiusxxs","onUpdate:modelValue":t[17]||(t[17]=l=>e(o).catagory=l),onInput:t[18]||(t[18]=l=>{var h;return e(d)("catagory",(h=e(o).catagory)!=null?h:"Others")})},[(i(!0),n(w,null,I(e(N).catagory.enum,l=>(i(),n("option",{key:l},u(l),1))),128))],544),[[ue,e(o).catagory]])])]),e(he).includes(e(o).catagory)?(i(),n("div",Bt,[(i(!0),n(w,null,I(e(N).usage.enum,l=>(i(),P(Ie,{"keep-color":"","left-label":"",size:"md",modelValue:e(o).usage,"onUpdate:modelValue":t[19]||(t[19]=h=>e(o).usage=h),val:l,label:l,color:"black",key:l,onChange:t[20]||(t[20]=h=>e(d)("usage",e(o).usage))},null,8,["modelValue","val","label"]))),128)),e(c).usage?(i(),n("u",It," Used or New ? ")):(i(),n("u",Nt," Used or New ? "))])):S("",!0)])):(i(),n("div",qt,[s("fieldset",Vt,[s("div",$t,[s("button",{onClick:t[21]||(t[21]=l=>R(b)?b.value=!e(b):b=!e(b)),class:"BBoxStyle-dense"},[s("h5",Ft,u(e(b)?"Next":"Back"),1)])]),m(A,{inset:""}),e(b)?(i(),n("div",Ot,[s("div",Rt,[s("div",Ut,[s("h5",{class:v(e(c).quantity?"txtnegative":"txtprimary")},u(e(f).quantity[Number((ie=a._pageSettings.language)!=null?ie:1)]),3),C(s("input",{type:"Number",class:"iBoxStyle-dense radiusxxs","onUpdate:modelValue":t[22]||(t[22]=l=>e(o).quantity=l),onInput:t[23]||(t[23]=l=>e(d)("quantity",e(o).quantity))},null,544),[[$,e(o).quantity]])]),s("div",jt,[s("h5",{class:v(e(c).price?"txtnegative":"txtprimary")},u(e(f).price[Number((ne=a._pageSettings.language)!=null?ne:1)]),3),C(s("input",{type:"Number",class:"iBoxStyle-dense radiusxxs","onUpdate:modelValue":t[24]||(t[24]=l=>e(o).price=l),onInput:t[25]||(t[25]=l=>e(d)("price",e(o).price))},null,544),[[$,e(o).price]])]),s("div",Qt,[s("h5",{class:v(e(c).discount?"txtnegative":"txtprimary")},u(e(f).discount[Number((ae=a._pageSettings.language)!=null?ae:1)]),3),C(s("input",{type:"Number",class:"iBoxStyle-dense radiusxxs","onUpdate:modelValue":t[26]||(t[26]=l=>e(o).discount=l),onInput:t[27]||(t[27]=l=>e(d)("discount",e(o).discount)),onChange:t[28]||(t[28]=l=>e(d)("discount",e(o).discount)),style:{"max-width":"95%"}},null,544),[[$,e(o).discount]])])])])):(i(),n("div",Dt,[s("div",zt,[m(ce,{class:"col-md col-xs q-pa-sm",style:{},outlined:"",modelValue:e(o).header,"onUpdate:modelValue":t[29]||(t[29]=l=>e(o).header=l),label:"Header",onChange:t[30]||(t[30]=l=>e(d)("header",e(o).header))},{default:B(()=>[e(c).header?(i(),n("u",Pt," Title ")):(i(),n("u",At," Title "))]),_:1},8,["modelValue"]),m(ce,{outlined:"",modelValue:e(o).content,"onUpdate:modelValue":t[31]||(t[31]=l=>e(o).content=l),onChange:t[32]||(t[32]=l=>e(d)("content",e(o).content)),label:"Content",style:{},filled:"",autogrow:""},{default:B(()=>[e(c).content?(i(),n("u",Mt," Description ")):(i(),n("u",Tt," Description "))]),_:1},8,["modelValue"])]),m(A,{inset:""}),m($e,{caption:""},{default:B(()=>[re(" Notes to be displayed !")]),_:1})])),m(A,{inset:""})])]))])):S("",!0)])],64)}}},Yt=()=>{let a={},U={activeItemID:null,activeUserID:null,userItemOwnership:!1,queryOperator:"or",otherQueries:{}};async function j(g=U){return g.userItemOwnership||(a.userID=g.activeUserID),a.saleitID=g.activeItemID,a=Object.assign(a,g.otherQueries),a.queryOperator="-"+g.queryOperator,a=Object.assign(a,g.otherQueries),a}return{queryBuilder_foreign:j}};export{Kt as _,Yt as u};
