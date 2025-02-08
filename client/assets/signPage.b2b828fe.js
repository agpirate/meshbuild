import{Q as ee}from"./QItemLabel.f12facf1.js";import{Q as U}from"./QPage.f81471c9.js";import{r as p,u as ve,w as te,o as pe,ae as _e,bm as be,m as o,k as d,n as M,p as y,aZ as E,br as xe,q as t,l as v,x as Q,v as A,t as w,f as C,bs as ne,D as oe,b6 as T,bn as se,aX as N,b7 as O,b8 as Se,F as we,y as Ce}from"./index.bc257d95.js";import{s as ke}from"./utils.3be206ad.js";import{_ as Le,a as Pe,p as Ae,g as Me,b as je,c as $e,d as De}from"./geolocMixin.39715752.js";import{u as Te}from"./use-quasar.7b6d4ebe.js";import{d as Ne,u as Ie,a as Ee,_ as j,b as Oe}from"./debugMixin.eac55b8f.js";import"./axios.05cf8750.js";const Ve=()=>{var Z=p("profileSchemas"),V=p("profileSchema");let $=p({}),_=p({}),L=p(null);Ne("profileSchemas","profileSchema").then(l=>{l&&(L.value=l)});async function R(l,a=null){var q,G,i;if(console.log("ssssssssssss",l,a),!L.value||!a)return!1;let B=(q=L.value[l].rules)!=null?q:null,H=(i=(G=$.value[l])!=null?G:null)!=null?i:a;if(!B)return!0;_.value[l]=null;for(let F of B)if(!await g(F,H)){_.value[l]=z(F),console.log("No Validated  for = "+l);break}return console.log(_.value," Validatiotion Obj."),!0}function z(l){switch(l.type){case"required":return"Field is required";case"minValue":return"Minimum Value Error";case"maxValue":return"Maximam Value Error";case"minLength":return`Minimum length is ${l.value}`;case"maxLength":return`Maximum length is ${l.value}`;case"pattern":return"Invalid format";default:return"Invalid input"}}const g=async(l,a)=>{switch(console.log(typeof l,typeof a,"validation is thisrule210"),l.type){case"required":return a!=null&&a!="";case"minValue":return a>=l.value;case"maxValue":return a<=l.value;case"minLength":return a.length>=l.value;case"maxLength":return a.length<=l.value;case"pattern":return new RegExp(l.value).test(a);case"type":return P(l.value,a);default:return!0}},P=(l,a)=>{switch(l){case"number":return!isNaN(a);case"string":return typeof a=="string";case"array":return Array.isArray(a);case"object":return typeof a=="object"&&!Array.isArray(a);default:return!1}};return{thisSchemaPath:Z,thisSchemaFile:V,_debugObj:_,_validateThis:R}},Re={class:"size-AskGps bgc-light boxStyle-sm radius-xxs fontStyle-sm font-system sh-xxs-system-secondaryOUT ccolumn cgap-4"},Be=t("div",{style:{height:"10px","background-color":"orangered",color:"lightblue"}},null,-1),qe=t("h4",null," Location Access Required ",-1),Ge=t("div",{class:"crow cj-center"},[t("p",{class:"box-size-flexp75auto font-dark"}," Mesh requires location access to provide you with the best experience ")],-1),Fe={class:"crow cj-end"},Ke=t("h4",{class:""}," Close ",-1),Ue=[Ke],Qe=t("h4",{class:""}," Allow ",-1),Ze=[Qe],ze={key:1},He=t("div",null,null,-1),Je=t("div",{class:"font-grey",style:{position:"fixed",bottom:"5px",left:"5px"}},[t("p",null," Provided by mesh ")],-1),We={class:"ccol-grow ccolumn cj-center ia-center"},Xe={class:"boxStyle-xs radius-sm bgc-dl15"},Ye={key:0,style:{"min-width":"40%","max-width":"80vw"},class:"bgc-dl30 radius-xxs boxStyle-sm p-xl fontStyle-md ccolumn c-gap-3"},et=t("h4",{class:"font-smokey"}," Log In",-1),tt=t("h6",{class:"font-smokey font-system"}," Mesh",-1),nt={class:"boxStyle cgap-4 ccolumn ia-center"},ot={class:"ccolumn cgap-2"},st={class:"boxStyle-xxs radius-sm bgc-grey75 crow cj-evenly ia-center font-grey"},lt={class:"ri-phone-fill icon-xl font-light"},at={key:0,class:"font-negative"},it={key:1},rt={class:"boxStyle-dense crow cj-between ia-center font-grey150"},ct=t("h4",{class:""}," Login",-1),ut=t("h5",null," Create New",-1),dt=t("div",{class:"boxStyle-xxs"},[t("h4",{class:"font-warning"}," Creating Account"),t("h6",null,"mesh")],-1),gt={key:0,class:"boxStyle-xxs ccolumn"},mt={class:"ccol-auto crow boxStyle-xxs font-grey75"},ht={class:"ccolumn fontStyle-md font-grey"},yt={class:"boxStyle-xxs radius-sm bgc-grey75 crow cj-evenly ia-center"},ft=t("h1",null,[t("i",{class:"ri-phone-fill"})],-1),vt={class:"boxStyle-xxs radius-sm bgc-grey75 crow cj-evenly ia-center"},pt=t("h1",null,[t("i",{class:"ri-key-fill"})],-1),_t={key:0,class:"warnMessage"},bt={key:1},xt={class:"q-py-xs"},St={class:"bgwarning crow cj-between ia-center fontStyle-sm"},wt=t("h4",null," Create",-1),Ct=t("h4",{class:"font-primary"}," Already Registered ? ",-1),kt={key:2,class:"boxStyle-xs radius-sm ccolumn cgap-3"},Lt=t("h3",null,"Continue with login key ",-1),Pt=t("hr",null,null,-1),At={key:0,class:"ccolumn"},Mt={class:"boxStyle-xxs radius-sm bgc-grey75 crow cj-evenly ia-center"},jt=t("h1",null,[t("i",{class:"ri-key-fill"})],-1),$t={key:0,class:"warnMessage"},Dt={key:1},Tt={class:"bgc-dl15 boxStyle-sm p-lrsm crow cj-between fontStyle-sm pointer font-smoke"},Nt=t("h3",null," Continue",-1),It=[Nt],Et=t("h3",null," Create",-1),Ot=[Et],Vt=t("h6",null," Contact us: +251 914424140 ",-1),Rt=t("p",{class:"text-grey q-pa-sm"},"Provided by mesh",-1),Jt={__name:"signPage",setup(Z){const{askForGPS:V,_thislocation:$,gpsStatus:_,allowGPS:L,_initGeo:R,getCurrentPosition:z}=Le(),{_debugObj:g,_validateThis:P}=Ve(),{Loadingpage:l,Loadingevent:a,Loading:B,DoneMessage:H,KnowthisMessage:q,WarnthisMessage:G,timerLoadevent:i,timerDone:F,timerInformthis:le,timerError:Bt}=Ie(),ae=Pe(),ie=Ae();Ee({title:"mesh",titleTemplate:s=>`${s} - LoginPage`,script:{printJs:{type:"application/ld+json",innerHTML:"{  }"},ldJson:{type:"application/ld+json",innerHTML:"{ }"}}}),Te();const re=ve();var n=p({});async function ce(){n.value={};try{n.value.phone=null,n.value.phoneCode=["",""],n.value.geolocation={},n.value.geolocation={lat:"",long:""},n.value.location={},n.value.location={country:"",city:"",street:""}}catch{}return!0}let x=p({login:"init",create:!1}),ue=p("Continue"),de="phone";const ge=ie,me={createData:async function(){let s={};return n.value[de]==null?!1:await ge.createData(n.value,s).then(e=>{var r;return(r=e.status)!=null&&r?e.data:!1}).catch(()=>!1)}};async function I(){var s;return console.log(g!=null?g:!1,"debugggggg"),(s=g.value)!=null&&s?Object.values(g.value).every(r=>r==null)&&J():(g.value=null,J()),!0}p(0);var J=async function(){return console.log(`

Function - _manageStoreLogin --STORE Authentication Initializing [Phone,Stored_ID]---- 
`),await ae.useLogin(n.value).then(async s=>{var r,h,b,u,c,S,D;var e=(r=s.data)!=null?r:!1;return console.log(`
 LoginStatus = ${s.status} 
`),console.log(s.data,(h=a.continueform)!=null?h:!1),!((b=s.status)!=null&&b)||!e?!((u=n.value.phone)!=null&&u)||x.value.login=="init"?(await i({loginform:0},0,"Create New Account"),!0):(console.log(n.value,"ceating new"),x.value.login="create",await i({loginform:0},0,"Creating New Account !"),me.createData().then(async m=>m&&Object.keys(m).length?(x.value.login="init",console.log(`

</Function - _manageStoreLogin -- New Profile Created -- 
`),ue.value="Log to Continue",i({loginform:0},0,"Account Created ! Login to continue.")):(n.value.phone=null,await i({loginform:0},0,"Phone Number Error !"))).catch(m=>i({main:0},0,"Try Refreshing, please ?"+m))):(c=e.enrollKey)!=null&&c&&e.enrollKey!=((S=n.value.enrollKey)!=null?S:!1)?(await i({main:5e3},0,"Continue with key"),x.value.login="keyrequired",!0):(n.value=Object.assign({},e),console.log(`
 User Acctype = ${n.value.acctype} 
`),(D=n.value.acctype)!=null&&D?(await i({main:0},0,"...."),await fe("Home","Home","saleit"),i({loginform:0},0,"Routing Error. Check Connection Please ;")):(await i({main:5e3},0,"Access Error, Retrying.."),!1))}).catch(async s=>(console.log(`

</Function - _manageStoreLogin - 
`+s),await i({main:0},0,"Error Connecting.."+s)))};p(!1),p(null);let K=p([]),k=p(null);te(_,(s,e)=>((s=="finish"||s==null)&&he(),!0)),te($,(s,e)=>{var r,h;return s&&(n.value.geolocation=s,W("lat",E((r=s.lat)!=null?r:null)),W("long",E((h=s.long)!=null?h:null))),!0});async function he(){var s,e,r,h,b,u,c;if(console.log("Setting Locations =<> GPS = ",Object.values((s=n.value.geolocation)!=null?s:{})," && timeZone = ",k.value),!k.value)return!1;if($.value)n.value.geolocation=$.value;else{let S=((e=k.value.loc)!=null?e:"").split(",");console.error(S,"GPS ACESS IS BLOCKED, timeZone API OPtions ...."),S[1]&&(n.value.geolocation={lat:S[0],long:S[1]})}return j._set("lat",n.value.geolocation.lat),j._set("long",n.value.geolocation.long),n.value.phoneCode=K.value,n.value.location.country=(r=k.value.country)!=null?r:"",n.value.location.city=(h=k.value.city)!=null?h:"",n.value.location.street=(b=k.value.city)!=null?b:"",n.value.location.provinance=(u=k.value.region)!=null?u:"",n.value.currency=(c=K.value[2])!=null?c:j._get("currency","ETB"),console.log("Final =<> GPS = ",n.value.geolocation," && Locations = ",n.value.location),_.value==null||(_.value=null),!0}async function ye(){return console.log("Initiating the API or TimeZone Locations System"),_.value="Checking.... Connection.",K.value=await Me(),k.value=await je(),_.value=await $e(),new Promise(s=>{setTimeout(()=>{console.log("Terminating the API or TimeZone Locations System, && INIT GeoData Mining using GPS or TimeZone GeoData !!! !"),R(),s(!0)},2e3)})}i({main:0},0,"..."),pe(async()=>(console.log(`

<0 ---------Mining Client DATA ---- 
`),await i({main:0},0,"mesh "),await ye().then(async s=>(console.log(`

<0 ---------Automatic Authentications Initiated---- 
`),await I(),console.log(`

</0---------Automatic Authentications Terminated--- 
`),!0)).catch(async s=>await i({main:0},0,"Error Connecting.. "+s)))),_e(async()=>{console.log(`

<---------Defaulting Profile <--this--> ---- 
`),console.log(`

---------Mining User Device Informations [Phones, GeoLocations]---- 
`)}),ce();let fe=async(s=null,e=null,r=!0)=>{var h,b,u;if(!s||!((h=n.value.acctype)!=null&&h))return!1;if(xe[s]._auth&&!((b=n.value.enrolled)!=null&&b))return _thisOps.value="createPermission",!1;await i({main:0},0,"");try{let c=Object.assign({acctype:(u=n.value.acctype[r])!=null?u:""},j._reroute(s,e,ke.value=="Small"));return j._set("path",E("mesh")),await re.push(c),i({main:1},1," "),!0}catch(c){return console.log(`

</Routing Functions of pathName = ${s}  == >> ${c} == >>  
`),i({main:3e3},3e3,c),!1}};async function W(s,e){return e&&j._set(s,E(e)),!0}return(s,e)=>{var h,b;const r=be("buttton");return((h=o(a).main)!=null?h:!1)||o(_)?(d(),M(U,{key:0,class:"column flex flex-center bgc-system rounded-borders q-py-sm"},{default:y(()=>{var u;return[o(_)=="permiting_gpsservice"?(d(),M(Oe,{key:0,isOpen:o(V),onEmitClick0:e[2]||(e[2]=c=>o(L)(c))},{default:y(()=>[t("div",Re,[Be,qe,Ge,t("div",Fe,[t("button",{class:"boxStyle-sm radius-xs bgc-grey225-hovered font-negative",onClick:e[0]||(e[0]=c=>o(L)(!1))},Ue),t("button",{class:"boxStyle-sm radius-xs bgc-grey225-hovered font-posetive",onClick:e[1]||(e[1]=c=>o(L)(!0))},Ze)])])]),_:1},8,["isOpen"])):(d(),v("p",ze)),He,(u=o(a).main)!=null&&u?(d(),M(ee,{key:2,style:{color:"lightyellow"},class:"fontdstyle"},{default:y(()=>{var c;return[Q(A((c=o(l).content)!=null?c:"..."),1)]}),_:1})):w("",!0),Je]}),_:1})):(b=o(a).continueform)!=null&&b?(d(),M(U,{key:1,class:"flex flex-center"},{default:y(()=>[C(se,{class:"col-auto boxbstyle"},{default:y(()=>[C(ne,{class:"text-dark"},{default:y(()=>{var u;return[Q(A((u=o(l).content)!=null?u:"..."),1)]}),_:1}),C(ne,{class:"text-dark"},{default:y(()=>[C(oe,{flat:"",color:"red",label:"Cancel",onClick:e[3]||(e[3]=T(u=>o(n).phone=null,["prevent"]))}),C(oe,{flat:"",label:"Continue...",onClick:e[4]||(e[4]=T(u=>o(i)({loginform:0},0,""),["prevent"]))})]),_:1})]),_:1})]),_:1})):(d(),M(U,{key:2,persistent:"",class:"ccolumn"},{default:y(()=>{var u,c,S,D;return[t("div",We,[t("div",Xe,[o(x).login=="init"?(d(),v("div",Ye,[et,tt,t("div",nt,[t("div",ot,[t("div",st,[t("h1",null,[t("i",lt,A(o(n).phoneCode[1]),1)]),N(t("input",{class:"bgc-dl15 ccol-grow boxStyle-sm radius-sm",type:"Number","onUpdate:modelValue":e[5]||(e[5]=m=>o(n).phone=m),label:"Phone Number",onChange:e[6]||(e[6]=m=>o(P)("phone",o(n).phone))},null,544),[[O,o(n).phone]])])]),o(g).phone?(d(),v("p",at,A(o(g).phone),1)):w("",!0),(u=o(g).phone)!=null&&u?(d(),v("div",it)):w("",!0)]),t("div",rt,[C(r,{class:"boxStyle-sm radius-sm bgc-grey75 bgc-grey75-hovered pointer",onClick:e[7]||(e[7]=T(m=>I(),["prevent"]))},{default:y(()=>[ct]),_:1}),C(r,{class:"boxStyle-sm radius-xs bgc-grey75 bgc-grey100-hovered pointer",onClick:e[8]||(e[8]=m=>o(x).login="create")},{default:y(()=>[ut]),_:1})])])):o(x).login=="create"?(d(),M(se,{key:1,class:"boxStyle-xxs bgc-grey175 radius-xxs fontStyle-sm"},{default:y(()=>{var m,X,Y;return[dt,(X=(m=o(n).phoneCode)==null?void 0:m.length)!=null&&X?(d(),v("div",gt,[t("div",mt,[N(t("select",{class:"ccol-grow","onUpdate:modelValue":e[9]||(e[9]=f=>o(n).phoneCode=f),onChange:e[10]||(e[10]=f=>o(P)("phoneCode",o(n).phoneCode))},[(d(!0),v(we,null,Ce(Object.values(o(De)),f=>(d(),v("option",{key:f},A(f),1))),128))],544),[[Se,o(n).phoneCode]])]),t("div",ht,[t("div",yt,[ft,N(t("input",{class:"bgc-dl15 ccol-grow boxStyle-sm radius-sm",type:"Number","onUpdate:modelValue":e[11]||(e[11]=f=>o(n).phone=f),label:"Phone Number",onChange:e[12]||(e[12]=f=>o(P)("phone",o(n).phone))},null,544),[[O,o(n).phone]])]),t("div",vt,[pt,N(t("input",{class:"bgc-dl15 ccol-grow boxStyle-sm radius-sm",type:"password","onUpdate:modelValue":e[13]||(e[13]=f=>o(n).password=f),label:"Phone Number",onChange:e[14]||(e[14]=f=>o(P)("password",o(n).password))},null,544),[[O,o(n).password]])])]),o(g).phone?(d(),v("div",_t,A(o(g).phone),1)):w("",!0)])):w("",!0),(Y=o(g).phone)!=null&&Y?(d(),v("div",bt)):w("",!0),t("div",xt,[C(ee,{caption:""},{default:y(()=>[Q("Sale & Buy ")]),_:1})]),t("div",St,[C(r,{class:"boxStyle-sm pointer radius-sm bgc-grey75 font-smoke",onClick:e[15]||(e[15]=T(f=>I(),["prevent"]))},{default:y(()=>[wt]),_:1}),C(r,{class:"boxStyle-sm pointer font-primary",onClick:e[16]||(e[16]=f=>o(x).login="init")},{default:y(()=>[Ct]),_:1})])]}),_:1})):o(x).login=="keyrequired"?(d(),v("div",kt,[Lt,Pt,(S=(c=o(n).phoneCode)==null?void 0:c.length)!=null&&S?(d(),v("div",At,[t("div",Mt,[jt,N(t("input",{class:"bgc-dl15 ccol-grow boxStyle-sm radius-sm font-smoke",type:"password","onUpdate:modelValue":e[17]||(e[17]=m=>o(n).enrollKey=m),label:"Phone Number",onChange:e[18]||(e[18]=m=>o(P)("enrollKey",o(n).enrollKey))},null,544),[[O,o(n).enrollKey]])]),o(g).phone?(d(),v("div",$t,A(o(g).phone),1)):w("",!0)])):w("",!0),(D=o(g).phone)!=null&&D?(d(),v("div",Dt)):w("",!0),t("div",Tt,[t("button",{onClick:e[19]||(e[19]=T(m=>I(),["prevent"])),class:"boxStyle-sm bgc-dl45 radius-xs pointer"},It),t("button",{onClick:e[20]||(e[20]=m=>o(x).login="create"),class:"BBoxStyle-flat"},Ot)])])):w("",!0)]),Vt]),Rt]}),_:1}))}}};export{Jt as default};
