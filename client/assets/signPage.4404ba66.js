import{h as b,q as ve,O as he,P as _e,r as _,R as be,w as oe,o as we,S as xe,k as Ce,u as n,l as y,m as k,n as i,U as E,V as Se,W as o,X as L,Y as N,f as r,Z as x,p as S,_ as ae,Q as J,$ as I,a0 as W,a1 as Q,a2 as R,a3 as D,a4 as G}from"./index.479a4e77.js";import{Q as $,a as ke}from"./QSelect.342be206.js";import{Q as Y}from"./QPage.d987e118.js";import{s as Pe}from"./utils.bb0f8c13.js";import{_ as Me,a as Le,p as Ne,g as Ae,b as Be,c as qe,d as $e}from"./geolocMixin.9c30a0d7.js";import{u as Te}from"./use-quasar.6c02ab83.js";import{d as De,u as je,a as Ie,_ as j,b as Oe}from"./debugMixin.5367f11c.js";import"./axios.05cf8750.js";const Ve=[b("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)","stroke-width":"2"},[b("circle",{cx:"22",cy:"22",r:"6"},[b("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),b("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),b("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"22",cy:"22",r:"6"},[b("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),b("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),b("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"22",cy:"22",r:"8"},[b("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})])])];var Ee=ve({name:"QSpinnerRings",props:he,setup(O){const{cSize:T,classes:A}=_e(O);return()=>b("svg",{class:A.value,stroke:"currentColor",width:T.value,height:T.value,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg"},Ve)}});const Qe=()=>{var O=_("profileSchemas"),T=_("profileSchema");let A=_({}),v=_({}),B=_(null);De("profileSchemas","profileSchema").then(l=>{l&&(B.value=l)});async function K(l,u=null){var F,H,c;if(console.log("ssssssssssss",l,u),!B.value||!u)return!1;let U=(F=B.value[l].rules)!=null?F:null,ee=(c=(H=A.value[l])!=null?H:null)!=null?c:u;if(!U)return!0;v.value[l]=null;for(let Z of U)if(!await p(Z,ee)){v.value[l]=X(Z),console.log("No Validated  for = "+l);break}return console.log(v.value," Validatiotion Obj."),!0}function X(l){switch(l.type){case"required":return"Field is required";case"minValue":return"Minimum Value Error";case"maxValue":return"Maximam Value Error";case"minLength":return`Minimum length is ${l.value}`;case"maxLength":return`Maximum length is ${l.value}`;case"pattern":return"Invalid format";default:return"Invalid input"}}const p=async(l,u)=>{switch(console.log(typeof l,typeof u,"validation is thisrule210"),l.type){case"required":return u!=null&&u!="";case"minValue":return u>=l.value;case"maxValue":return u<=l.value;case"minLength":return u.length>=l.value;case"maxLength":return u.length<=l.value;case"pattern":return new RegExp(l.value).test(u);case"type":return q(l.value,u);default:return!0}},q=(l,u)=>{switch(l){case"number":return!isNaN(u);case"string":return typeof u=="string";case"array":return Array.isArray(u);case"object":return typeof u=="object"&&!Array.isArray(u);default:return!1}};return{thisSchemaPath:O,thisSchemaFile:T,_debugObj:v,_validateThis:K}},Re={class:"fontStyle-dense"},Ge={class:"boxStyle-dense bgdark radiussm fontStyle-dense onedlayout ccolumn cgap-4"},Ke=o("h4",null," Allow Location Access ",-1),Ue=o("div",{class:"txtsmokey onedlayout ccrow cj-center"},[o("p",{class:"txtlight",style:{width:"80%"}}," Mesh requires location access to provide you with the best experience ")],-1),Fe={class:"onedlayout crow cj-end"},He=o("h4",{class:"txtnegative"}," Close ",-1),Ze=[He],ze=o("h4",{class:"txtposetive"}," Allow ",-1),Je=[ze],We={key:1},Ye=o("p",{class:"text-grey q-pa-sm",style:{position:"fixed",bottom:"5px",left:"5px"}}," Provided by mesh ",-1),Xe={class:"col flex flex-center column bg-black q-pa-sm"},et={key:0,style:{"min-width":"20%","max-width":"80vw"},class:"bggreysmokey radiusxxs fontStyle-dense"},tt=o("h4",{class:"txtsmokey"}," Mesh",-1),nt=o("p",{class:"txtsmoke"}," Online Market",-1),ot={class:"boxStyle onedlayout cgap-4 ccolumn ia-center fontStyle-dense"},at={class:"onedlayout ccolumn cgap-2"},st={class:"txtlight onedlayout crow",style:{width:"100%"}},lt={class:"ri-phone-fill"},it={key:0,class:"txtnegative"},rt={key:1},ut=o("p",null,"You can be Trader too. ",-1),ct={class:"boxStyle-dense bgwarning onedlayout crow cj-between ia-center fontStyle-dense"},dt=o("h4",null," Login",-1),gt=o("h4",{class:"txtprimary"}," Create New ",-1),mt={class:"column justify-evenly items-center"},pt={key:0,class:"warnMessage"},yt={key:1},ft={class:"boxStyle-dense bgwarning onedlayout crow cj-between ia-center fontStyle-dense"},vt=o("h4",null," Create",-1),ht=o("h4",{class:"txtprimary"}," Have account login ? ",-1),_t={class:"column justify-evenly items-center"},bt={key:0,class:"warnMessage"},wt={key:1},xt={class:"text-dark bg-orange onedlayout crow cj-evenly ia-center fontStyle-base"},Ct={class:"txtdark"},St={class:"col-auto column q-my-sm q-gutter-xs text-grey"},kt=o("br",null,null,-1),Pt=o("p",{class:"text-grey q-pa-sm"},"Provided by mesh",-1),It={__name:"signPage",setup(O){const{askForGPS:T,_thislocation:A,gpsStatus:v,allowGPS:B,_initGeo:K,getCurrentPosition:X}=Me(),{_debugObj:p,_validateThis:q}=Qe(),{Loadingpage:l,Loadingevent:u,Loading:U,DoneMessage:ee,KnowthisMessage:F,WarnthisMessage:H,timerLoadevent:c,timerDone:Z,timerInformthis:se,timerError:Mt}=je(),le=Le(),ie=Ne();Ie({title:"mesh",titleTemplate:a=>`${a} - LoginPage`,script:{printJs:{type:"application/ld+json",innerHTML:"{  }"},ldJson:{type:"application/ld+json",innerHTML:"{ }"}}}),Te();const re=be();var t=_({});async function ue(){t.value={};try{t.value.phone=null,t.value.phoneCode=["",""],t.value.geolocation={},t.value.geolocation={lat:"",long:""},t.value.location={},t.value.location={country:"",city:"",street:""}}catch{}return!0}let C=_({login:"init",create:!1}),ce=_("Continue"),de="phone";const ge=ie,me={createData:async function(){let a={};return t.value[de]==null?!1:await ge.createData(t.value,a).then(e=>{var d;return(d=e.status)!=null&&d?e.data:!1}).catch(()=>!1)}};async function V(){var a;return console.log(p!=null?p:!1,"debugggggg"),(a=p.value)!=null&&a?Object.values(p.value).every(d=>d==null)&&te():(p.value=null,te()),!0}_(0);var te=async function(){return console.log(`

Function - _manageStoreLogin --STORE Authentication Initializing [Phone,Stored_ID]---- 
`),await le.useLogin(t.value).then(async a=>{var d,f,w,m,s,h,M;var e=(d=a.data)!=null?d:!1;return console.log(`
 LoginStatus = ${a.status} 
`),console.log(a.data,(f=u.continueform)!=null?f:!1),!((w=a.status)!=null&&w)||!e?!((m=t.value.phone)!=null&&m)||C.value.login=="init"?(await c({loginform:0},0,"Create New Account"),!0):(console.log(t.value,"ceating new"),C.value.login="create",await c({loginform:0},0,"Creating New Account !"),me.createData().then(async g=>g&&Object.keys(g).length?(C.value.login="init",console.log(`

</Function - _manageStoreLogin -- New Profile Created -- 
`),ce.value="Log to Continue",c({loginform:0},0,"Account Created ! Login to continue.")):(t.value.phone=null,await c({loginform:0},0,"Phone Number Error !"))).catch(g=>c({main:0},0,"Try Refreshing, please ?"+g))):(s=e.enrollKey)!=null&&s&&e.enrollKey!=((h=t.value.enrollKey)!=null?h:!1)?(await c({main:5e3},0,"Use Correct key!"),C.value.login="keyrequired",!0):(t.value=Object.assign({},e),console.log(`
 User Acctype = ${t.value.acctype} 
`),(M=t.value.acctype)!=null&&M?(await c({main:0},0,"...."),await fe("Home","Home","saleit"),c({loginform:0},0,"Routing Error. Check Connection Please ;")):(await c({main:5e3},0,"Access Error, Retrying.."),!1))}).catch(async a=>(console.log(`

</Function - _manageStoreLogin - 
`+a),await c({main:0},0,"Error Connecting.."+a)))};_(!1),_(null);let z=_([]),P=_(null);oe(v,(a,e)=>((a=="finish"||a==null)&&pe(),!0)),oe(A,(a,e)=>{var d,f;return a&&(t.value.geolocation=a,ne("lat",E((d=a.lat)!=null?d:null)),ne("long",E((f=a.long)!=null?f:null))),!0});async function pe(){var a,e,d,f,w,m,s;if(console.log("Setting Locations =<> GPS = ",Object.values((a=t.value.geolocation)!=null?a:{})," && timeZone = ",P.value),!P.value)return!1;if(A.value)t.value.geolocation=A.value;else{let h=((e=P.value.loc)!=null?e:"").split(",");console.error(h,"GPS ACESS IS BLOCKED, timeZone API OPtions ...."),h[1]&&(t.value.geolocation={lat:h[0],long:h[1]})}return j._set("lat",t.value.geolocation.lat),j._set("long",t.value.geolocation.long),t.value.phoneCode=z.value,t.value.location.country=(d=P.value.country)!=null?d:"",t.value.location.city=(f=P.value.city)!=null?f:"",t.value.location.street=(w=P.value.city)!=null?w:"",t.value.location.provinance=(m=P.value.region)!=null?m:"",t.value.currency=(s=z.value[2])!=null?s:j._get("currency","ETB"),console.log("Final =<> GPS = ",t.value.geolocation," && Locations = ",t.value.location),v.value==null||(v.value=null),!0}async function ye(){return console.log("Initiating the API or TimeZone Locations System"),v.value="Checking.... Connection.",z.value=await Ae(),P.value=await Be(),v.value=await qe(),new Promise(a=>{setTimeout(()=>{console.log("Terminating the API or TimeZone Locations System, && INIT GeoData Mining using GPS or TimeZone GeoData !!! !"),K(),a(!0)},2e3)})}c({main:0},0,"..."),we(async()=>(console.log(`

<0 ---------Mining Client DATA ---- 
`),await c({main:0},0,"mesh "),await ye().then(async a=>(console.log(`

<0 ---------Automatic Authentications Initiated---- 
`),await V(),console.log(`

</0---------Automatic Authentications Terminated--- 
`),!0)).catch(async a=>await c({main:0},0,"Error Connecting.. "+a)))),xe(async()=>{console.log(`

<---------Defaulting Profile <--this--> ---- 
`),console.log(`

---------Mining User Device Informations [Phones, GeoLocations]---- 
`)}),ue();let fe=async(a=null,e=null,d=!0)=>{var f,w,m;if(!a||!((f=t.value.acctype)!=null&&f))return!1;if(Se[a]._auth&&!((w=t.value.enrolled)!=null&&w))return _thisOps.value="createPermission",!1;await c({main:0},0,"");try{let s=Object.assign({acctype:(m=t.value.acctype[d])!=null?m:""},j._reroute(a,e,Pe.value=="Small"));return j._set("path",E(e)),await re.push(s),c({main:1},1," "),!0}catch(s){return console.log(`

</Routing Functions of pathName = ${a}  == >> ${s} == >>  
`),c({main:3e3},3e3,s),!1}};async function ne(a,e){return e&&j._set(a,E(e)),!0}return(a,e)=>{var f,w;const d=Ce("buttton");return((f=n(u).main)!=null?f:!1)||n(v)?(y(),k(Y,{key:0,class:"column flex flex-center bg-orange rounded-borders q-py-sm"},{default:i(()=>{var m;return[n(v)=="permiting_gpsservice"?(y(),k(Oe,{key:0,isOpen:n(T),onEmitClick0:e[2]||(e[2]=s=>n(B)(s))},{default:i(()=>[o("div",Re,[o("div",Ge,[Ke,Ue,o("div",Fe,[o("button",{class:"BBoxStyle-wide bgnull bgHover",onClick:e[0]||(e[0]=s=>n(B)(!1))},Ze),o("button",{class:"BBoxStyle-wide bgnull bgHover",onClick:e[1]||(e[1]=s=>n(B)(!0))},Je)])])])]),_:1},8,["isOpen"])):(y(),L("p",We,N(n(v)=="timezone"?".":".."),1)),o("div",null,[r(Ee,{style:{color:"lightyellow"},size:"10em"})]),(m=n(u).main)!=null&&m?(y(),k($,{key:2,style:{color:"lightyellow"},class:"fontdstyle"},{default:i(()=>{var s;return[x(N((s=n(l).content)!=null?s:"..."),1)]}),_:1})):S("",!0),Ye]}),_:1})):(w=n(u).continueform)!=null&&w?(y(),k(Y,{key:1,class:"flex flex-center"},{default:i(()=>[r(W,{class:"col-auto boxbstyle"},{default:i(()=>[r(ae,{class:"text-dark"},{default:i(()=>{var m;return[x(N((m=n(l).content)!=null?m:"..."),1)]}),_:1}),r(ae,{class:"text-dark"},{default:i(()=>[r(J,{flat:"",color:"red",label:"Cancel",onClick:e[3]||(e[3]=I(m=>n(t).phone=null,["prevent"]))}),r(J,{flat:"",label:"Continue...",onClick:e[4]||(e[4]=I(m=>n(c)({loginform:0},0,""),["prevent"]))})]),_:1})]),_:1})]),_:1})):(y(),k(Y,{key:2,persistent:"",class:"bg-white rounded-borders column"},{default:i(()=>{var m;return[o("div",Xe,[o("div",null,[n(C).login=="init"?(y(),L("div",et,[tt,nt,o("div",ot,[o("div",at,[o("h4",st,[o("i",lt,N(n(t).phoneCode[1]),1)]),Q(o("input",{class:"boxcstyle",type:"Number","onUpdate:modelValue":e[5]||(e[5]=s=>n(t).phone=s),label:"Phone Number",onChange:e[6]||(e[6]=s=>n(q)("phone",n(t).phone))},null,544),[[R,n(t).phone]])]),n(p).phone?(y(),L("p",it,N(n(p).phone),1)):S("",!0),(m=n(p).phone)!=null&&m?(y(),L("div",rt)):S("",!0)]),ut,o("div",ct,[r(d,{style:{cursor:"pointer"},class:"BBoxStyle-dense txtprimary",onClick:e[7]||(e[7]=I(s=>V(),["prevent"]))},{default:i(()=>[dt]),_:1}),r(d,{style:{cursor:"pointer"},class:"BBoxStyle-dense txtprimary",onClick:e[8]||(e[8]=s=>n(C).login="create")},{default:i(()=>[gt]),_:1})])])):n(C).login=="create"?(y(),k(W,{key:1,class:"bggreysmokey radiusxxs fontStyle-dense"},{default:i(()=>{var s,h,M;return[r(D,{class:"q-pa-sm q-gutter-sm"},{default:i(()=>[r($,{class:"text-weight-bold text-orange text-h5"},{default:i(()=>[x("Create account")]),_:1}),r($,{caption:""},{default:i(()=>[x("mesh")]),_:1})]),_:1}),(h=(s=n(t).phoneCode)==null?void 0:s.length)!=null&&h?(y(),k(D,{key:0,class:"q-pa-md row q-gutter-sm column"},{default:i(()=>[r(ke,{class:"boxStyle-dense radiussm bglight",modelValue:n(t).phoneCode,"onUpdate:modelValue":e[9]||(e[9]=g=>n(t).phoneCode=g),options:Object.values(n($e)),onChange:e[10]||(e[10]=g=>n(q)("phoneCode",n(t).phoneCode)),label:"Country",dense:!0},{prepend:i(()=>[r(G,{name:"place"})]),_:1},8,["modelValue","options"]),o("div",mt,[o("div",null,[r(G,{name:"phone"}),x(" +"+N(n(t).phoneCode[1])+" ",1),Q(o("input",{class:"boxcstyle",type:"Number","onUpdate:modelValue":e[11]||(e[11]=g=>n(t).phone=g),label:"Phone Number",onChange:e[12]||(e[12]=g=>n(q)("phone",n(t).phone))},null,544),[[R,n(t).phone]])]),o("div",null,[r(G,{name:"password"}),x(" password "),Q(o("input",{class:"boxcstyle",type:"password","onUpdate:modelValue":e[13]||(e[13]=g=>n(t).password=g),label:"Phone Number",onChange:e[14]||(e[14]=g=>n(q)("password",n(t).password))},null,544),[[R,n(t).password]])])]),n(p).phone?(y(),L("div",pt,N(n(p).phone),1)):S("",!0)]),_:1})):S("",!0),(M=n(p).phone)!=null&&M?(y(),L("div",yt)):S("",!0),r(D,{class:"q-py-xs"},{default:i(()=>[r($,{caption:""},{default:i(()=>[x("Sale & Buy ")]),_:1})]),_:1}),o("div",ft,[r(d,{style:{cursor:"pointer"},class:"BBoxStyle-dense txtprimary",onClick:e[15]||(e[15]=I(g=>V(),["prevent"]))},{default:i(()=>[vt]),_:1}),r(d,{style:{cursor:"pointer"},class:"BBoxStyle-dense txtprimary",onClick:e[16]||(e[16]=g=>n(C).login="init")},{default:i(()=>[ht]),_:1})])]}),_:1})):n(C).login=="keyrequired"?(y(),k(W,{key:2,style:{"min-width":"20%","max-width":"80vw"},flat:""},{default:i(()=>{var s,h,M;return[r(D,{class:"q-pa-sm q-gutter-sm"},{default:i(()=>[r($,{class:"text-weight-bold text-orange text-h5"},{default:i(()=>[x("Joining mesh")]),_:1}),r($,{caption:""},{default:i(()=>[x("For Traders Only")]),_:1})]),_:1}),(h=(s=n(t).phoneCode)==null?void 0:s.length)!=null&&h?(y(),k(D,{key:0,class:"q-pa-md row q-gutter-sm column"},{default:i(()=>[o("div",_t,[o("div",null,[r(G,{name:"password"}),x(" Log key "),Q(o("input",{class:"boxcstyle",type:"password","onUpdate:modelValue":e[17]||(e[17]=g=>n(t).enrollKey=g),label:"Phone Number",onChange:e[18]||(e[18]=g=>n(q)("enrollKey",n(t).enrollKey))},null,544),[[R,n(t).enrollKey]])])]),n(p).phone?(y(),L("div",bt,N(n(p).phone),1)):S("",!0)]),_:1})):S("",!0),(M=n(p).phone)!=null&&M?(y(),L("div",wt)):S("",!0),o("div",xt,[r(J,{onClick:e[19]||(e[19]=I(g=>V(),["prevent"])),class:"fontastyle",flat:"",label:"Login"}),o("p",Ct,[o("button",{onClick:e[20]||(e[20]=g=>n(C).login="create"),class:"BBoxStyle-flat"},"Create ")])])]}),_:1})):S("",!0)]),o("div",St,[kt,r(D,{class:"q-py-xs text-grey"},{default:i(()=>[r($,{class:"text-grey",caption:""},{default:i(()=>[x("Contact us: +251 914424140 ")]),_:1})]),_:1})])]),Pt]}),_:1}))}}};export{It as default};
