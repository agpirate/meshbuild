import{r as W,c as V,w as X,l as o,V as n,f as r,n as m,U as s,u as e,Q as x,F as b,a3 as C,m as S,p as I,b as P,bn as _e,X as N,aP as Y,aL as U,a1 as Z,$ as g,a0 as R,a2 as J,bz as ve,W as K,aI as F,aH as ee,Z as fe,_ as be}from"./index.f7ccc731.js";import{d as ge,u as he,Q as te}from"./saleitModel.57694aff.js";import{k as ke,l as we,m as xe}from"./crudThisModel.d502c31a.js";import{Q as se}from"./QItemLabel.62f4d943.js";import{d as Ce}from"./debugMixin.f6fac20b.js";const Se={class:"column"},qe={key:0},$e={key:1},Ve={key:0},Ne={class:"col row fit"},Re={class:"row",style:{"border-radius":"15px",height:"100px",overflow:"scroll"}},Ie={class:"q-pa-sm q-gutter-sm row justify-between"},Fe={size:"col-auto row"},Qe={key:1,class:"col row fit"},Pe={key:2},Ue={class:"",style:{"max-width":"4vw"}},Be={class:"col q-pa-none q-ma-none items-center column",style:{width:"100%","max-height":"40vh"}},ze={class:"absolute-full transparent column justify-start"},Ae={class:"row justify-end q-my-sm",style:{"min-width":"100%"}},Oe={key:0,class:"justify-left col-auto",style:{}},je={class:"column",style:{width:"100%",height:"100%","background-color":"transparent"}},De=["onClick"],Me=s("div",{class:"col text-dark"},null,-1),Le={class:"column col-auto items-end",style:{}},Te={class:"row q-gutter-sm"},Ee=s("div",{class:"col row justify-between q-py-sm"},null,-1),He={class:"col fontastyle q-gutter-xs column",style:{"border-radius":"5px",border:"0px solid white"}},Ge={class:"col row q-gutter-sm"},We={class:"col",style:{border:"0px solid black"}},Xe={key:0,class:"text-red"},Ye={key:1},Ze={class:"col",style:{border:"0px solid black"}},Je={key:0,class:"text-red"},Ke={key:1},et={class:"col",style:{border:"0px solid black"}},tt={key:0,class:"text-red"},st={key:1},lt={class:"col",style:{border:"0px solid black"}},ot={key:0,class:"text-red"},it={key:1},nt={key:0},at={key:0,class:"text-red"},rt={key:1},dt={class:"col fontastyle q-gutter-xs column",style:{"border-radius":"5px",border:"0px solid white"}},ut={class:"justify-end row"},ct={key:0},yt={class:"row q-gutter-sm"},mt={class:"col",style:{"min-width":"15vw","max-width":"40%",border:"0px solid black"}},pt={key:0,class:"text-red"},_t={key:1},vt={class:"col-auto",style:{"min-width":"15vw","max-width":"40%",border:"0px solid black"}},ft={key:0,class:"text-red"},bt={key:1},gt={class:"col-auto",style:{border:"0px solid black"}},ht={key:0,class:"text-red"},kt={key:1},wt=s("p",null,"(Happy Hours Price)",-1),xt={key:1},Ct={class:"column q-gutter-sm"},St={key:0,class:"text-red"},qt={key:1},$t={key:0,class:"text-red"},Vt={key:1},Bt={__name:"thisCardm",props:{_this:{type:Object,default:()=>({})},_pageSettings:{type:Object,default:()=>({})},__thisOps:{type:String,required:!0},__thisOpsStatus:{type:String},active_fileName:{type:String},thisSchemaFile_Rec:{type:String},thisSchemaPath_Rec:{type:String}},emits:["Create_this","Update_this","close"],setup(_,{emit:le}){var T,E,H,G;var{thisSchemaPath:oe,thisSchemaFile:ie,_debugObj:c,_validateThis:d}=ge(),{_thisMedia:Nt,_fileAttributeName:Q,_cameraBox:q,_fileSourceFoCam:B,_fileAsSRC:h,_fileAsString:ne,_fileAsRaw:z,_liveFeedSRC:ae,_fileAsSRCIndex:A,_cameraDevice:re,_listCameraSource:O,_selectedCameraById:j,_selectedCameraByface:D,_liveFeedRawStreaming:de,_fileSourceFolder:ue,_fileAsSRCOps:v,_fileAsSRCOpsCall:ce,_resetFileSource:Rt,get_liveFeedRaw:ye}=he();const y=_;let $=W(null);Ce(y.thisSchemaPath_Rec,y.thisSchemaFile_Rec).then(u=>{u&&($.value=u)});let f=W(!0);var i=V(()=>y._this);V(()=>y._this),ne=V(()=>(y._this[y.active_fileName],alert(y.active_fileName),""));var p=new re;X(q,(u,t)=>(u!=null&&u||p._saveScreenShoots(),!0)),oe=V(()=>y.thisSchemaPath_Rec),ie=V(()=>y.thisSchemaFile_Rec),X(Q,(u,t)=>(u&&(i.value[u]=z.value,typeof z.value=="object"?i.value.file_={files:u}:i.value.file_={file:u}),!0));let me=["Home & Living","Fashion & Apparel","Electronics & Gadgets"];y.__thisOps=="CreateRowItem"&&(d("catagory",(T=i.value.catagory)!=null?T:""),d("price",(E=i.value.price)!=null?E:""),d("quantity",(H=i.value.quantity)!=null?H:""),d("currency",(G=i.value.currency)!=null?G:""));const M=le;function L(u){let t=Object.values(c.value).every(k=>k==null),a=Q.value?h.value.length:i.value[y.active_fileName].length;if(!(t&&a))return!1;M(u)}function pe(){M("close",!1)}return(u,t)=>(o(),n(b,null,[r(_e,{modelValue:e(q),"onUpdate:modelValue":t[4]||(t[4]=a=>P(q)?q.value=a:q=a),class:"column overlay-Glass rounded-borders z-top bg-black"},{default:m(()=>[s("div",Se,[e(B)=="folder"?(o(),n("div",qe)):e(B)=="camera"?(o(),n("div",$e,[e(ye)?(o(),n("div",Ve,[s("div",Ne,[r(x,{rounded:"",color:"primary",size:"sm",label:"capture",icon:"camera",onClick:t[0]||(t[0]=a=>e(p)._screenShoot()),style:{position:"relative",bottom:"-10px",left:"40%"}}),s("video",{clas:"col-2",ref_key:"_liveFeedRawStreaming",ref:de,autoplay:"",playsinline:"",style:{width:"100%"}},null,512),s("canvas",{id:"_liveFeedSRC",ref_key:"_liveFeedSRC",ref:ae,style:{display:"none"}},null,512),s("div",Re,[(o(!0),n(b,null,C(e(h),a=>(o(),n("div",{key:a,style:{margin:"5px"}},[r(te,{src:a,style:{width:"80px",height:"80px"}},null,8,["src"])]))),128))])]),s("div",Ie,[s("div",null,[r(x,{rounded:"",color:"negative",size:"sm",label:"close",onClick:t[1]||(t[1]=a=>e(p)._stopCamera())}),r(x,{rounded:"",color:"green",size:"sm",label:"save",onClick:t[2]||(t[2]=a=>e(p)._saveScreenShoots())}),r(x,{rounded:"",color:"primary",size:"sm",label:"capture",icon:"camera",onClick:t[3]||(t[3]=a=>e(p)._screenShoot())})]),s("div",Fe,[e(O).length?(o(),S(we,{key:0,"switch-toggle-side":"","expand-separator":"",icon:"camera",size:"xs"},{default:m(()=>[(o(!0),n(b,null,C(e(O),a=>(o(),S(ke,{key:a,class:"row q-gutter-sm"},{default:m(()=>[r(x,{style:{height:"100%"},"no-caps":"",size:"sm",dense:!0,color:e(j)==a.deviceId?"blue":"black",label:a.label?a.label.split("_")[1]:"cam",onClick:k=>e(p)._setCameraParam(a.deviceId,!1)},null,8,["color","label","onClick"]),r(x,{style:{height:"100%"},"no-caps":"",size:"sm",dense:!0,color:e(j)==a.deviceId?"orange":"black",label:e(D)?"Front Cam":"Back Cam",onClick:k=>e(p)._setCameraParam(a.deviceId,!e(D))},null,8,["color","label","onClick"])]),_:2},1024))),128))]),_:1})):I("",!0)])])])):(o(),n("div",Qe," Check Camera Access & Retry "))])):(o(),n("div",Pe," Error Accessing System, please allow on settting for Location and Media Devices "))])]),_:1},8,["modelValue"]),s("div",{class:"overlay z-top",style:{},onClick:t[36]||(t[36]=a=>pe())},[Object.keys(e(i)).length&&e($)?(o(),S(be,{key:0,style:{"min-width":"50vw",width:"90vw","max-height":"80vh"},onClick:t[35]||(t[35]=fe(()=>{},["stop"]))},{default:m(()=>{var a,k;return[s("div",Ue,[_.__thisOps=="CreateRowItem"?(o(),n("button",{key:0,class:"BBoxStyle-dense fontStyle-dense",onClick:t[5]||(t[5]=l=>L("Create_this"))},N(u.dictionary.add[Number((a=_._pageSettings.language)!=null?a:1)]),1)):(o(),n("button",{key:1,class:"BBoxStyle-dense fontStyle-dense",onClick:t[6]||(t[6]=l=>L("Update_this"))},N(u.dictionary.update[Number((k=_._pageSettings.language)!=null?k:1)]),1))]),r(xe,{value:.8,color:"orange"}),s("div",Be,[r(te,{loading:"lazy",class:"",style:{width:"100%",height:"auto"},src:e(Q)?e(h)[e(A)]:e(i)[_.active_fileName][e(A)]},{default:m(()=>[s("div",ze,[s("div",Ae,[e(h)&&e(h).length>1?(o(),n("div",Oe,[s("div",je,[(o(!0),n(b,null,C(e(h).length,l=>(o(),n("button",{style:{"border-radius":"0px","box-shadow":"none","background-color":"transparent",border:"0px"},onClick:w=>e(ce)(l-1),key:l},[s("input",{style:Y(e(v)?"color:red":""),type:"radio"},null,4)],8,De))),128))])])):I("",!0),Me,s("div",Le,[s("input",{type:"file",multiple:"",ref:"openFolder",style:{display:"none"},onChange:t[7]||(t[7]=l=>e(ue)(l,_.active_fileName))},null,544),s("div",Te,[s("button",{class:"ButtonAction-D",onClick:t[8]||(t[8]=l=>u.$refs.openFolder.click())},[r(U,{name:"folder"})]),s("button",{class:"ButtonAction-D",onClick:t[9]||(t[9]=l=>e(p)._openCamera("saleitgr"))},[r(U,{name:"add_a_photo"})])]),s("button",{style:{"background-color":"transparent",border:"0px"},icon:"folder",onClick:t[10]||(t[10]=l=>P(v)?v.value=!e(v):v=!e(v))},[r(U,{name:"delete",style:Y(e(v)?"color:red":"")},null,8,["style"])])])]),Ee])]),_:1},8,["src"])]),_.__thisOps=="CreateRowItem"?(o(),S(Z,{key:0,class:"column text-dark no-wrap bg-white fontbstyle"},{default:m(()=>[s("fieldset",He,[s("div",Ge,[s("fieldset",We,[s("legend",null,[e(c).quantity?(o(),n("u",Xe," Quantity ")):(o(),n("u",Ye," Quantity "))]),g(s("input",{type:"Number",class:"col fontestyle boxbstyle","onUpdate:modelValue":t[11]||(t[11]=l=>e(i).quantity=l),onInput:t[12]||(t[12]=l=>e(d)("quantity",e(i).quantity)),style:{"max-width":"20vw"}},null,544),[[R,e(i).quantity]])]),s("fieldset",Ze,[s("legend",null,[e(c).price?(o(),n("u",Je," Price ")):(o(),n("u",Ke," Price "))]),g(s("input",{type:"Number",class:"col fontestyle boxbstyle","onUpdate:modelValue":[t[13]||(t[13]=l=>e(i).price=l),t[15]||(t[15]=l=>e(d)("price",e(i).price))],onInput:t[14]||(t[14]=l=>e(d)("price",e(i).price)),style:{"max-width":"20vw"}},null,544),[[R,e(i).price]])]),s("fieldset",et,[s("legend",null,[e(c).currency?(o(),n("u",tt," currency ")):(o(),n("u",st," currency "))]),g(s("select",{outlined:"",class:"col-md col-xs q-pa-none boxbstyle",style:{},color:"purple-12","onUpdate:modelValue":t[16]||(t[16]=l=>e(i).currency=l),onInput:t[17]||(t[17]=l=>e(d)("currency",e(i).currency))},[(o(!0),n(b,null,C(e($).currency.enum,l=>(o(),n("option",{key:l},N(l),1))),128))],544),[[J,e(i).currency]])])]),s("div",null,[s("fieldset",lt,[s("legend",null,[e(c).catagory?(o(),n("u",ot," Catagory ")):(o(),n("u",it," Catagory "))]),g(s("select",{outlined:"",class:"col-md col-xs q-pa-none boxbstyle",style:{},color:"purple-12","onUpdate:modelValue":t[18]||(t[18]=l=>e(i).catagory=l),onInput:t[19]||(t[19]=l=>{var w;return e(d)("catagory",(w=e(i).catagory)!=null?w:"Others")})},[(o(!0),n(b,null,C(e($).catagory.enum,l=>(o(),n("option",{key:l},N(l),1))),128))],544),[[J,e(i).catagory]])])]),e(me).includes(e(i).catagory)?(o(),n("div",nt,[(o(!0),n(b,null,C(e($).usage.enum,l=>(o(),S(ve,{"keep-color":"","left-label":"",size:"md",modelValue:e(i).usage,"onUpdate:modelValue":[t[20]||(t[20]=w=>e(i).usage=w),t[21]||(t[21]=w=>e(d)("usage",e(i).usage))],val:l,label:l,color:"black",key:l},null,8,["modelValue","val","label"]))),128)),e(c).usage?(o(),n("u",at," Used or New ? ")):(o(),n("u",rt," Used or New ? "))])):I("",!0),r(se,{caption:""},{default:m(()=>[K(" What are You Saling !")]),_:1}),r(F,{inset:""})])]),_:1})):(o(),S(Z,{key:1,class:"column text-dark bg-white fontbstyle"},{default:m(()=>[s("fieldset",dt,[s("div",ut,[s("button",{onClick:t[22]||(t[22]=l=>P(f)?f.value=!e(f):f=!e(f)),class:"ButtonAction-D"},N(e(f)?"Next Page":"First Page"),1)]),r(F,{inset:""}),e(f)?(o(),n("div",ct,[s("div",yt,[s("fieldset",mt,[s("legend",null,[e(c).usage?(o(),n("u",pt," Quantity ")):(o(),n("u",_t," Quantity "))]),g(s("input",{type:"Number",class:"fontestyle boxbstyle","onUpdate:modelValue":[t[23]||(t[23]=l=>e(i).quantity=l),t[24]||(t[24]=l=>e(d)("quantity",e(i).quantity))],style:{"min-width":"15vw","max-width":"95%"}},null,512),[[R,e(i).quantity]])]),s("fieldset",vt,[s("legend",null,[e(c).price?(o(),n("u",ft," Price ")):(o(),n("u",bt," Price "))]),g(s("input",{type:"Number",class:"col fontestyle boxbstyle","onUpdate:modelValue":[t[25]||(t[25]=l=>e(i).price=l),t[27]||(t[27]=l=>e(d)("price",e(i).price))],onInput:t[26]||(t[26]=l=>e(d)("price",e(i).price)),style:{"max-width":"80%"}},null,544),[[R,e(i).price]])]),s("fieldset",gt,[s("legend",null,[e(c).discount?(o(),n("u",ht," New Price ")):(o(),n("u",kt," New Price "))]),g(s("input",{type:"Number",class:"col fontestyle boxbstyle","onUpdate:modelValue":[t[28]||(t[28]=l=>e(i).discount=l),t[30]||(t[30]=l=>e(d)("discount",e(i).discount))],onInput:t[29]||(t[29]=l=>e(d)("discount",e(i).discount)),style:{"max-width":"95%"}},null,544),[[R,e(i).discount]]),wt])])])):(o(),n("div",xt,[s("div",Ct,[r(ee,{class:"col-md col-xs q-pa-sm",style:{},outlined:"",modelValue:e(i).header,"onUpdate:modelValue":[t[31]||(t[31]=l=>e(i).header=l),t[32]||(t[32]=l=>e(d)("header",e(i).header))],label:"Name","stack-label":""},{default:m(()=>[e(c).header?(o(),n("u",St," Title ")):(o(),n("u",qt," Title "))]),_:1},8,["modelValue"]),r(ee,{outlined:"",modelValue:e(i).content,"onUpdate:modelValue":[t[33]||(t[33]=l=>e(i).content=l),t[34]||(t[34]=l=>e(d)("content",e(i).content))],label:"decscriptions",style:{},filled:"",autogrow:""},{default:m(()=>[e(c).content?(o(),n("u",$t," Description ")):(o(),n("u",Vt," Description "))]),_:1},8,["modelValue"])]),r(F,{inset:""}),r(se,{caption:""},{default:m(()=>[K(" Notes to be displayed !")]),_:1})])),r(F,{inset:""})])]),_:1}))]}),_:1})):I("",!0)])],64))}};export{Bt as _};
