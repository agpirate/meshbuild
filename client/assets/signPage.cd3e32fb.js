import{Q as Y}from"./QItemLabel.08c2e852.js";import{Q as U}from"./QPage.96c97a5a.js";import{r as v,u as he,w as ee,o as ve,af as pe,k as _e,n as o,l as g,p as j,q as f,aV as I,bq as be,t,m as _,y as Q,x as M,v as C,f as w,br as te,E as ne,b7 as D,bm as oe,a$ as N,b8 as O,a2 as xe,b9 as Se,F as we,z as Ce}from"./index.2148c7c3.js";import{_ as ke,a as Le,p as Pe,g as Ae,b as Me,c as je,s as $e,d as Te}from"./geolocMixin.c063d452.js";import{u as De}from"./use-quasar.78b3a44a.js";import{d as Ne,u as Ee,a as Ie,_ as $,b as Oe}from"./debugMixin.523eb2f4.js";import"./axios.05cf8750.js";const Ve=()=>{var z=v("profileSchemas"),V=v("profileSchema");let T=v({}),p=v({}),L=v(null);Ne("profileSchemas","profileSchema").then(l=>{l&&(L.value=l)});async function R(l,a=null){var G,B,i;if(console.log("ssssssssssss",l,a),!L.value||!a)return!1;let q=(G=L.value[l].rules)!=null?G:null,H=(i=(B=T.value[l])!=null?B:null)!=null?i:a;if(!q)return!0;p.value[l]=null;for(let F of q)if(!await d(F,H)){p.value[l]=Z(F),console.log("No Validated  for = "+l);break}return console.log(p.value," Validatiotion Obj."),!0}function Z(l){switch(l.type){case"required":return"Field is required";case"minValue":return"Minimum Value Error";case"maxValue":return"Maximam Value Error";case"minLength":return`Minimum length is ${l.value}`;case"maxLength":return`Maximum length is ${l.value}`;case"pattern":return"Invalid format";default:return"Invalid input"}}const d=async(l,a)=>{switch(console.log(typeof l,typeof a,"validation is thisrule210"),l.type){case"required":return a!=null&&a!="";case"minValue":return a>=l.value;case"maxValue":return a<=l.value;case"minLength":return a.length>=l.value;case"maxLength":return a.length<=l.value;case"pattern":return new RegExp(l.value).test(a);case"type":return P(l.value,a);default:return!0}},P=(l,a)=>{switch(l){case"number":return!isNaN(a);case"string":return typeof a=="string";case"array":return Array.isArray(a);case"object":return typeof a=="object"&&!Array.isArray(a);default:return!1}};return{thisSchemaPath:z,thisSchemaFile:V,_debugObj:p,_validateThis:R}},Re={class:"size-AskGps bgc-light boxStyle-sm radius-xxs fontStyle-sm font-system sh-xxs-system-secondaryOUT ccolumn cgap-4"},qe=t("div",{style:{height:"10px","background-color":"orangered",color:"lightblue"}},null,-1),Ge=t("h4",null," Location Access Required ",-1),Be=t("div",{class:"crow cj-center"},[t("p",{class:"box-size-flexp75auto font-dark"}," Mesh requires location access to provide you with the best experience ")],-1),Fe={class:"crow cj-end"},Ke=t("h4",{class:""}," Close ",-1),Ue=[Ke],Qe=t("h4",{class:""}," Allow ",-1),ze=[Qe],Ze={key:1},He=t("div",null,null,-1),Je=t("div",{class:"font-grey",style:{position:"fixed",bottom:"5px",left:"5px"}},[t("p",null," Provided by mesh ")],-1),We={class:"ccol-grow ccolumn cj-center ia-center"},Xe={class:"boxStyle-xs radius-sm bgc-font-grey25"},Ye=t("h4",{class:"font-smokey"}," Log In",-1),et={class:"boxStyle cgap-4 ccolumn ia-center"},tt={class:"ccolumn cgap-2 cj-start"},nt={class:"boxStyle-xxs radius-xs bgc-grey25 crow cj-evenly ia-center font-grey"},ot={class:"ri-phone-fill fontStyle-md font-light"},st={key:0,class:"fontStyle-sm font-negative"},lt={class:"boxStyle-xxs crow cj-between ia-center font-grey150 fontStyle-sm"},at=t("h4",{class:""}," Login",-1),it=t("h5",null," Create New",-1),rt=t("div",{class:"boxStyle-xxs"},[t("h4",{class:"font-warning"}," Creating Account"),t("h6",null,"mesh")],-1),ct={key:0,class:"boxStyle-xxs ccolumn"},ut={class:"ccol-auto crow boxStyle-xxs font-grey75"},gt={class:"ccolumn fontStyle-sm font-grey"},dt={class:"boxStyle-xxs radius-xs bgc-grey25 crow cj-evenly ia-center font-grey"},yt=t("h1",null,[t("i",{class:"ri-phone-fill fontStyle-md font-light"})],-1),mt={class:"boxStyle-xxs radius-xs bgc-grey25 crow cj-evenly ia-center font-grey"},ft=t("h1",null,[t("i",{class:"ri-key-fill fontStyle-md font-light"})],-1),ht={key:0,class:"warnMessage"},vt={key:1},pt={class:"font-light"},_t={class:"bgwarning crow cj-between ia-center fontStyle-sm"},bt=t("h4",null," Create",-1),xt=t("h4",{class:""}," Already Registered ? ",-1),St={key:2,class:"boxStyle-xs radius-sm ccolumn cgap-3"},wt=t("h3",null,"Continue with login key ",-1),Ct=t("hr",null,null,-1),kt={key:0,class:"ccolumn"},Lt={class:"boxStyle-xxs radius-xs bgc-grey25 crow cj-evenly ia-center font-grey"},Pt=t("h1",null,[t("i",{class:"ri-key-line fontStyle-md font-light"})],-1),At={key:0,class:"warnMessage"},Mt={key:1},jt={class:"bgc-font-grey25 boxStyle-sm p-lrsm crow cj-between fontStyle-sm pointer font-smoke"},$t=t("h3",null," Continue",-1),Tt=[$t],Dt=t("h3",null," Create",-1),Nt=[Dt],Et=t("div",{class:"fontStyle-md font-grey25"}," Contact us: +251 914424140 ",-1),It=t("p",{class:"text-grey q-pa-sm"},"Provided by mesh",-1),Qt={__name:"signPage",setup(z){const{askForGPS:V,_thislocation:T,gpsStatus:p,allowGPS:L,_initGeo:R,getCurrentPosition:Z}=ke(),{_debugObj:d,_validateThis:P}=Ve(),{Loadingpage:l,Loadingevent:a,Loading:q,DoneMessage:H,KnowthisMessage:G,WarnthisMessage:B,timerLoadevent:i,timerDone:F,timerInformthis:se,timerError:Ot}=Ee(),le=Le(),ae=Pe();Ie({title:"mesh",titleTemplate:s=>`${s} - LoginPage`,script:{printJs:{type:"application/ld+json",innerHTML:"{  }"},ldJson:{type:"application/ld+json",innerHTML:"{ }"}}}),De();const ie=he();var n=v({});async function re(){n.value={};try{n.value.phone=null,n.value.phoneCode=["",""],n.value.geolocation={},n.value.geolocation={lat:"",long:""},n.value.location={},n.value.location={country:"",city:"",street:""}}catch{}return!0}let x=v({login:"init",create:!1}),ce=v("Continue"),ue="phone";const ge=ae,de={createData:async function(){let s={};return n.value[ue]==null?!1:await ge.createData(n.value,s).then(e=>{var r;return(r=e.status)!=null&&r?e.data:!1}).catch(()=>!1)}};async function E(){var s;return console.log(d!=null?d:!1,"debugggggg"),(s=d.value)!=null&&s?Object.values(d.value).every(r=>r==null)&&J():(d.value=null,J()),!0}v(0);var J=async function(){return console.log(`

Function - _manageStoreLogin --STORE Authentication Initializing [Phone,Stored_ID]---- 
`),await le.useLogin(n.value).then(async s=>{var r,m,b,u,c,S,y;var e=(r=s.data)!=null?r:!1;return console.log(`
 LoginStatus = ${s.status} 
`),console.log(s.data,(m=a.continueform)!=null?m:!1),!((b=s.status)!=null&&b)||!e?!((u=n.value.phone)!=null&&u)||x.value.login=="init"?(await i({loginform:0},0,"Create New Account"),!0):(console.log(n.value,"ceating new"),x.value.login="create",await i({loginform:0},0,"Creating New Account !"),de.createData().then(async A=>A&&Object.keys(A).length?(x.value.login="init",console.log(`

</Function - _manageStoreLogin -- New Profile Created -- 
`),ce.value="Log to Continue",i({loginform:0},0,"Account Created ! Login to continue.")):(n.value.phone=null,await i({loginform:0},0,"Phone Number Error !"))).catch(A=>i({main:0},0,"Try Refreshing, please ?"+A))):(c=e.enrollKey)!=null&&c&&e.enrollKey!=((S=n.value.enrollKey)!=null?S:!1)?(await i({main:5e3},0,"Continue with key"),x.value.login="keyrequired",!0):(n.value=Object.assign({},e),console.log(`
 User Acctype = ${n.value.acctype} 
`),(y=n.value.acctype)!=null&&y?(await i({main:0},0,"...."),await fe("Home","Home","saleit"),i({loginform:0},0,"Routing Error. Check Connection Please ;")):(await i({main:5e3},0,"Access Error, Retrying.."),!1))}).catch(async s=>(console.log(`

</Function - _manageStoreLogin - 
`+s),await i({main:0},0,"Error Connecting.."+s)))};v(!1),v(null);let K=v([]),k=v(null);ee(p,(s,e)=>((s=="finish"||s==null)&&ye(),!0)),ee(T,(s,e)=>{var r,m;return s&&(n.value.geolocation=s,W("lat",I((r=s.lat)!=null?r:null)),W("long",I((m=s.long)!=null?m:null))),!0});async function ye(){var s,e,r,m,b,u,c;if(console.log("Setting Locations =<> GPS = ",Object.values((s=n.value.geolocation)!=null?s:{})," && timeZone = ",k.value),!k.value)return!1;if(T.value)n.value.geolocation=T.value;else{let S=((e=k.value.loc)!=null?e:"").split(",");console.error(S,"GPS ACESS IS BLOCKED, timeZone API OPtions ...."),S[1]&&(n.value.geolocation={lat:S[0],long:S[1]})}return $._set("lat",n.value.geolocation.lat),$._set("long",n.value.geolocation.long),n.value.phoneCode=K.value,n.value.location.country=(r=k.value.country)!=null?r:"",n.value.location.city=(m=k.value.city)!=null?m:"",n.value.location.street=(b=k.value.city)!=null?b:"",n.value.location.provinance=(u=k.value.region)!=null?u:"",n.value.currency=(c=K.value[2])!=null?c:$._get("currency","ETB"),console.log("Final =<> GPS = ",n.value.geolocation," && Locations = ",n.value.location),p.value==null||(p.value=null),!0}async function me(){return console.log("Initiating the API or TimeZone Locations System"),p.value="Checking.... Connection.",K.value=await Ae(),k.value=await Me(),p.value=await je(),new Promise(s=>{setTimeout(()=>{console.log("Terminating the API or TimeZone Locations System, && INIT GeoData Mining using GPS or TimeZone GeoData !!! !"),R(),s(!0)},2e3)})}i({main:0},0,"..."),ve(async()=>(console.log(`

<0 ---------Mining Client DATA ---- 
`),await i({main:0},0,"mesh "),await me().then(async s=>(console.log(`

<0 ---------Automatic Authentications Initiated---- 
`),await E(),console.log(`

</0---------Automatic Authentications Terminated--- 
`),!0)).catch(async s=>await i({main:0},0,"Error Connecting.. "+s)))),pe(async()=>{console.log(`

<---------Defaulting Profile <--this--> ---- 
`),console.log(`

---------Mining User Device Informations [Phones, GeoLocations]---- 
`)}),re();let fe=async(s=null,e=null,r=!0)=>{var m,b,u;if(!s||!((m=n.value.acctype)!=null&&m))return!1;if(be[s]._auth&&!((b=n.value.enrolled)!=null&&b))return _thisOps.value="createPermission",!1;await i({main:0},0,"");try{let c=Object.assign({acctype:(u=n.value.acctype[r])!=null?u:""},$._reroute(s,e,$e.value=="Small"));return $._set("path",I("mesh")),await ie.push(c),i({main:1},1," "),!0}catch(c){return console.log(`

</Routing Functions of pathName = ${s}  == >> ${c} == >>  
`),i({main:3e3},3e3,c),!1}};async function W(s,e){return e&&$._set(s,I(e)),!0}return(s,e)=>{var m,b;const r=_e("buttton");return((m=o(a).main)!=null?m:!1)||o(p)?(g(),j(U,{key:0,class:"column flex flex-center bgc-system rounded-borders q-py-sm"},{default:f(()=>{var u;return[o(p)=="permiting_gpsservice"?(g(),j(Oe,{key:0,isOpen:o(V),onEmitClick0:e[2]||(e[2]=c=>o(L)(c))},{default:f(()=>[t("div",Re,[qe,Ge,Be,t("div",Fe,[t("button",{class:"boxStyle-sm radius-xs bgc-grey225-hovered font-negative",onClick:e[0]||(e[0]=c=>o(L)(!1))},Ue),t("button",{class:"boxStyle-sm radius-xs bgc-grey225-hovered font-posetive",onClick:e[1]||(e[1]=c=>o(L)(!0))},ze)])])]),_:1},8,["isOpen"])):(g(),_("p",Ze)),He,(u=o(a).main)!=null&&u?(g(),j(Y,{key:2,style:{color:"lightyellow"},class:"fontdstyle"},{default:f(()=>{var c;return[Q(M((c=o(l).content)!=null?c:"..."),1)]}),_:1})):C("",!0),Je]}),_:1})):(b=o(a).continueform)!=null&&b?(g(),j(U,{key:1,class:"flex flex-center"},{default:f(()=>[w(oe,{class:"col-auto boxbstyle"},{default:f(()=>[w(te,{class:"text-dark"},{default:f(()=>{var u;return[Q(M((u=o(l).content)!=null?u:"..."),1)]}),_:1}),w(te,{class:"text-dark"},{default:f(()=>[w(ne,{flat:"",color:"red",label:"Cancel",onClick:e[3]||(e[3]=D(u=>o(n).phone=null,["prevent"]))}),w(ne,{flat:"",label:"Continue...",onClick:e[4]||(e[4]=D(u=>o(i)({loginform:0},0,""),["prevent"]))})]),_:1})]),_:1})]),_:1})):(g(),j(U,{key:2,persistent:"",class:"ccolumn"},{default:f(()=>{var u,c,S;return[t("div",We,[t("div",Xe,[o(x).login=="init"?(g(),_("div",{key:0,style:{"min-width":"40%","max-width":"80vw"},class:xe(["radius-xxs boxStyle-sm p-xl fontStyle-sm ccolumn c-gap-3",o(d).phone?"border-xxs-negative":"border-xxs-grey25"])},[Ye,t("div",et,[t("div",tt,[t("div",nt,[t("h1",null,[t("i",ot,M(o(n).phoneCode[1]),1)]),N(t("input",{class:"bgc-grey50 font-grey200 ccol-grow boxStyle-sm radius-sm",type:"Number","onUpdate:modelValue":e[5]||(e[5]=y=>o(n).phone=y),label:"Phone Number",onChange:e[6]||(e[6]=y=>o(P)("phone",o(n).phone))},null,544),[[O,o(n).phone]])])]),o(d).phone?(g(),_("p",st,M(o(d).phone),1)):C("",!0)]),t("div",lt,[w(r,{class:"boxStyle-sm radius-sm bgc-grey25 bgc-grey75-hovered pointer",onClick:e[7]||(e[7]=D(y=>E(),["prevent"]))},{default:f(()=>[at]),_:1}),w(r,{class:"boxStyle-sm radius-xs bgc-grey25 bgc-grey100-hovered pointer",onClick:e[8]||(e[8]=y=>o(x).login="create")},{default:f(()=>[it]),_:1})])],2)):o(x).login=="create"?(g(),j(oe,{key:1,class:"boxStyle-xxs bgc-grey25 radius-xxs fontStyle-sm"},{default:f(()=>{var y,A,X;return[rt,(A=(y=o(n).phoneCode)==null?void 0:y.length)!=null&&A?(g(),_("div",ct,[t("div",ut,[N(t("select",{class:"ccol-grow","onUpdate:modelValue":e[9]||(e[9]=h=>o(n).phoneCode=h),onChange:e[10]||(e[10]=h=>o(P)("phoneCode",o(n).phoneCode))},[(g(!0),_(we,null,Ce(Object.values(o(Te)),h=>(g(),_("option",{key:h},M(h),1))),128))],544),[[Se,o(n).phoneCode]])]),t("div",gt,[t("div",dt,[yt,N(t("input",{class:"bgc-grey50 font-grey200 ccol-grow boxStyle-sm radius-sm",type:"Number","onUpdate:modelValue":e[11]||(e[11]=h=>o(n).phone=h),label:"Phone Number",onChange:e[12]||(e[12]=h=>o(P)("phone",o(n).phone))},null,544),[[O,o(n).phone]])]),t("div",mt,[ft,N(t("input",{class:"bgc-grey50 font-grey200 ccol-grow boxStyle-sm radius-sm",type:"password","onUpdate:modelValue":e[13]||(e[13]=h=>o(n).password=h),label:"Phone Number",onChange:e[14]||(e[14]=h=>o(P)("password",o(n).password))},null,544),[[O,o(n).password]])])]),o(d).phone?(g(),_("div",ht,M(o(d).phone),1)):C("",!0)])):C("",!0),(X=o(d).phone)!=null&&X?(g(),_("div",vt)):C("",!0),t("div",pt,[w(Y,{caption:""},{default:f(()=>[Q("Sale & Buy ")]),_:1})]),t("div",_t,[w(r,{class:"boxStyle-sm pointer radius-sm bgc-dark font-grey100",onClick:e[15]||(e[15]=D(h=>E(),["prevent"]))},{default:f(()=>[bt]),_:1}),w(r,{class:"boxStyle-sm pointer font-system",onClick:e[16]||(e[16]=h=>o(x).login="init")},{default:f(()=>[xt]),_:1})])]}),_:1})):o(x).login=="keyrequired"?(g(),_("div",St,[wt,Ct,(c=(u=o(n).phoneCode)==null?void 0:u.length)!=null&&c?(g(),_("div",kt,[t("div",Lt,[Pt,N(t("input",{class:"bgc-grey50 font-posetive fontStyle-md ccol-grow boxStyle-sm radius-sm",type:"password","onUpdate:modelValue":e[17]||(e[17]=y=>o(n).enrollKey=y),label:"Phone Number",onChange:e[18]||(e[18]=y=>o(P)("enrollKey",o(n).enrollKey))},null,544),[[O,o(n).enrollKey]])]),o(d).phone?(g(),_("div",At,M(o(d).phone),1)):C("",!0)])):C("",!0),(S=o(d).phone)!=null&&S?(g(),_("div",Mt)):C("",!0),t("div",jt,[t("button",{onClick:e[19]||(e[19]=D(y=>E(),["prevent"])),class:"boxStyle-sm bgc-grey25 font-light radius-xs pointer"},Tt),t("button",{onClick:e[20]||(e[20]=y=>o(x).login="create"),class:"boxStyle-sm bgc-dark font-system radius-xs pointer"},Nt)])])):C("",!0)]),Et]),It]}),_:1}))}}};export{Qt as default};
