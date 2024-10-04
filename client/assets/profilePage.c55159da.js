import{r as i,R as ma,b2 as ha,c as W,w as ee,o as ga,a as pa,C as ye,k as ya,l as o,Y as b,u,m,n as d,b as U,aW as Be,p as k,f,W as R,a0 as we,F as ae,Q as q,a1 as Le,bd as wa,a2 as ba,X as B,Z as L,bu as Da,bb as Fe,bv as te,bw as ue,bg as be,a3 as ka,aJ as xa}from"./index.a33c9604.js";import{Q as Sa}from"./QSelect.abe7341a.js";import{Q as Ca}from"./QExpansionItem.82d0cea6.js";import{u as Oa,t as Ra,Q as Ia,a as Qa,b as Ta,c as Ea,d as T}from"./thisAndForeignMixin.7695bea4.js";import{u as Ma,a as Ua,Q as Ba}from"./schemaDefaultingMixin.13e666be.js";import{d as La,c as Fa,b as Ve,Q as Va}from"./dialogOne.c85c9c5d.js";import{u as Aa,m as Na}from"./profilefilter.e23b2313.js";import{u as qa}from"./use-quasar.369640b6.js";import{u as Pa,a as $a}from"./debugMixin.db1f0e67.js";import{_ as Wa}from"./storeService.3eb6e8a7.js";import{p as za}from"./profileStore.08e88bed.js";import{_ as Ya}from"./confirmButton.2ddcb70e.js";import{u as Ha}from"./statusMixin.115290e3.js";import{u as ja,a as Ja}from"./schemaValidator.54b03bbe.js";import{u as Ka}from"./tableMixin.bfed13b2.js";import"./axios.05cf8750.js";import"./QScrollArea.8b94154f.js";import"./QResizeObserver.eb852cd3.js";import"./touch.9135741d.js";import"./profileschemaValidator.88dcf2b3.js";const Xa={class:"fontdstyle text-white column q-gutter-sm q-pa-sm"},Za=R("div",null,"Changing User Role & Permission",-1),Ga=R("div",{class:"fontcstyle text-black"},"Select New RoleName",-1),et={class:"row q-gutter-sm"},at={class:"col row q-pa-xs q-gutter-xs",style:{height:"90vh"}},tt={class:"col column rounded q-pa-sm",style:{height:"90vh"}},lt={key:0,class:"col row"},st={class:"row q-gutter-sm",style:{"font-family":"Ubuntu","font-weight":"bolder"}},rt={key:0,class:"q-gutter-xs row"},nt={class:"col-3 q-mx-sm"},ut=["props"],it={key:0},ot={key:0,class:"text-black;fontastyle"},ct={key:1,class:"fontbstyle",style:{"font-size":"0.7rem"}},dt=["innerHTML"],ft={key:2},vt={key:1,class:"row q-gutter-xs text-dark"},_t={key:1,color:"grey-4","text-color":"black"},mt=["color"],ht=["color"],le="/profileapi/profile",tl={__name:"profilePage",props:{_profile:{type:Object,default:()=>({})},_acctype:{type:Object,default:()=>({})}},setup(Ae){let F=i(null),Ne=i("Are You Sure ?");i(null);const{Loadingpage:gt,Loadingevent:pt,DoneMessage:yt,WarnthisMessage:wt,timerLoadevent:v,timerDone:z,timerError:Y}=Pa(),{status_Loading:bt,status_DoneMessage:Dt,status_KnowthisMessage:kt,status_WarnthisMessage:xt,staus_timerLoad:St,status_timerDone:Ct,status_timerInformthis:qe,status_timerError:Ot}=Ha();let{Objprops_:De,_allColumnName:Pe,_rolesColumn:se,visibleColumn:$e,_allColumnNames:Rt,_rolesColumns:ke,visibleColumns:We,modal_iss:It,_this_Defaulting:ze,foreign_Columns:Qt,_this_foreignDefaulting:Tt}=Ma();var{thisOps:Et,thissubOpsStatus:Mt,__thisBox:D,__thisIndex:V,__thisOps:A,__thisOpsStatus:S,__thissubOps:Ye,__thissubOpsStatus:xe,__this_foreignBox:He,__this_foreignBoxDialog:je,__this_foreignBoxIndex:Je,__this_foreignBoxOps:re,__this_foreignBoxOpsStatus:ie,__this_foreignBoxsubOps:Ke}=Oa();let{count:Ut,_thisModel:N,_this_Schema:oe,lockedColumns:Se,invisibleColumns:ce,_this_Rows:w,_this:s,columns:Ce,_this_Query:g,_thisDefault:H,_thisModels:Xe}=ja();var{_enableRowFilter:Ge,_thisFiltering:Oe,_filteredRow:Ze}=Ka(),{_enableRowFilter:Ge,_thisFiltering:Oe}=Aa();const Re=qa();ma(),$a({title:"Admin DB Managment",titleTemplate:t=>`${t} - DashBoard`,script:{printJs:{type:"application/ld+json",innerHTML:"{  }"},ldJson:{type:"application/ld+json",innerHTML:"{ }"}}});const{thisSchemaPath:de,thisSchemaFile:fe}=Ja();de.value="profileSchemas",fe.value="profileSchema",ha(()=>import("../../composables/schemas/"+de.value),[]).then(t=>{oe.value=t[fe.value]}).catch(t=>{console.error("Error importing schema:",t)}),N.value="profile";const j=Ra(),E=za();var _=Ae;De.value=_;let h=i({});De.value=_,h=W(()=>{var t,a;return(t=_._acctype)!=null&&t&&(a=_._acctype[N.value])!=null?a:null});let P=i({geoSearch:{state:!1,value:"off"}});ee(_._pageSetting,(t,a)=>(P.value=Object.assign(P.value,t),!0)),ee(Ze,(t,a)=>{var r;return(r=_.lytSearchRow)!=null&&r&&ve("lytSearchRow"),!0});let ea=W(()=>_.lytCreatRow);ee(ea,async(t,a)=>(await X("CreateRowItem",null),D.value=!0,!0)),ee(s,(t,a)=>(V.value==null,!0));let Ie=i(null);Ie=W(()=>E.getstatus_Rows),ee(Ie,async(t,a)=>{let r;if(S.value=!1,t==null)return r="No Data.",!0;if(t=="noupdates")r="No Updates.";else if(t==!1)r="Locked";else{if(t==!0)return r="Loading ....",!0;if(t=="BadConnection")r="Offline";else return r=t,await v({message:1},2e3,"...Session Closed"),t=="Unauthorized"&&_logOut(),!1}return qe(5e3,r,"Product & Services"),!0});async function ne(t,a){return Ee.value=null,V.value=a,A.value=t,S.value=!1,D.value=!1,I.value=!1,a==null?s.value=Object.assign({},H.value):s.value=Object.assign({},w.value[a]),console.log(s.value,"ppp",w.value),!0}Se.value=["userID","profileMeta","pension","incomeTax","pensionNet","pensionNet","taxableSalary","incomeTax","incomeTax","taxfreeSalary","netSalary","payDays"];let aa=i(["companyID","userID"]);i({istakenBy:"takenBy",Col:"storeStatus",Val:["taken"]}),i({isreturnedBy:"returnedBy",Col:"storeStatus",Val:["Onstore"]}),ce.value=["profile","_stage_","cover","profileMeta","phoneCode","location","geolocation","verified","cart","queryWeight","contacts","",""],Re.screen.lt.md&&ce.value.push(""),Ce=W(()=>{var t,a,r;if(console.log(`

 Creating ${N.value}  Table Schema with AccTypeof ${h.value}`),h.value){let n=[],l=[],c=(t=h.value.role)!=null?t:!1,p=(a=h.value.capability)!=null?a:!1,Q=(r=h.value.roles)!=null?r:[];console.log(`
 User Role & Permissions:_ rolesWall = ${c} && capabilityWall = ${p} && modelRole = ${Q}`);for(let y in oe.value){let O={name:y,schema:oe.value[y],label:y,align:"left"};if(n.push(O),Pe(y),ce.value.includes(y)||l.push(y),!(y==="extraColumn"||Se.value.includes(y)))try{if([p[0],p[2]].includes("2"))Q.includes(y),se(O);else if(p[0]=="1"){if(Q.includes(y))continue;se(O)}else if(p[2]=="1")if(c.includes(y))se(O);else continue;else continue}catch{}}return n.push({name:"actions",schema:{type:"String"},label:"actions",value:p[0]+p[1]+p[2]}),l.push("actions"),ta(),$e(l),console.log(`

 ENDing ${N.value}  Table Schema with AccTypeof ${h.value}`),n}else return[{}]});async function ta(){return H.value=await ze(Xe.value),H.value.userID=_._profile.id,!0}i(!0);let J=i({rowsPerPage:0});i(!1),i({page:1,rowsNumber:2,rowsPerPage:2});var Qe=i(null);async function ve(t=null,a=null){var n,l,c,p,Q,y,O,G;S.value="loading",E.set_syncLock(!0),clearInterval(K),v({this_Query:0},0,"Updating...");let r=g.value;if(w.value=[],g.value={},re.value=!1,g.value.limits=100,g.value.skips=0,(n=Qe.value)!=null&&n)g.value.skips=(l=r.skips)!=null?l:0,g.value.limits=(c=r.skips)!=null?c:0,g.value.qweight=[1,10,(p=saleUsage[a])!=null?p:1,3],J.value.rowsNumber+=2,g.value.limits+=2,g.value.skips+=2,Qe.value=null;else if(t=="lytSearchRow")P.value.tableView="main",g.value.content=_.lytSearchRow,g.value.qweight&&(g.value.qweight[3]=3);else if(t)P.value.tableView="main",["catagory","usage","trend","paginationID"].includes(t)?g.value.qweight=[1,(y=saleCatagory[a])!=null?y:((Q=r.qweight)!=null?Q:[1,1,1,1])[1],(O=saleUsage[a])!=null?O:1,3]:g.value[t]=a!=null?a:null;else if(a)P.value.tableView="main",re.value="view",g.value.id=a;else{P.value.tableView="cards";let M=(G=Wa._getsession("qw"))!=null?G:!1;M=M?M.split(","):[1,1,1,2],g.value.qweight=[1,M[1],M[2],2]}return await da(E,g.value),!0}let K="";w=W(()=>la(E.getDatas));function la(t){return Array.isArray(t)?t:[]}async function X(t=null,a=null,r=null){var n;if(r&&r.set_syncLock(!0),he.value=null,Ee.value=null,D.value=null,Ye.value=null,xe.value=null,S.value=S.value?S.value:null,V.value=a,A.value=t,a==null)s.value=Object.assign({},H.value),s.value.geolocation=_._profile.geolocation,s.value.location=_._profile.location,s.value.currency=(n=_._profile.currency)!=null?n:"",s.value.userID=_._profile.id,s.value.phoneCode=_._profile.phoneCode,s.value.phone=_._profile.phone;else try{s.value=Object.assign({},w.value[a])}catch{}return!0}async function _e(t,a,r=null){var n,l,c,p;r&&r.set_syncLock(!0),He.value=null,je.value=null,Ke.value=null,ie.value=ie.value?ie.value:null,Je.value=a,re.value=t;try{if(A.value=="comments")a==null?(_this_chatforeign.value=Object.assign({},_thisDefault_chat.value),_this_chatforeign.value.userID=_._profile.id,_this_chatforeign.value.saleitID=(l=(n=s.value)==null?void 0:n.id)!=null?l:""):_this_chatforeign.value=Object.assign({},_this_modelTwoRows.value[a]);else if(a==null||A.value=="details")_this_modelOneforeign.value=Object.assign({},_thisDefault_client.value),_this_modelOneforeign.value.userID=_._profile.id,_this_modelOneforeign.value.phoneCode=_._profile.phoneCode,_this_modelOneforeign.value.currency=s.value.currency,_this_modelOneforeign.value.location=s.value.location,_this_modelOneforeign.value.geolocation=s.value.geolocation,_this_modelOneforeign.value.saleitID=(p=(c=s.value)==null?void 0:c.id)!=null?p:"",_this_modelOneforeign.value.orderID=await _genOrderID();else try{_this_modelOneforeign.value=Object.assign({},_this_modelOneRows.value[a])}catch{}}catch{}return!0}const sa=async function(t,a){let r=V.value==t;return t==null||r&&A.value==a?(await X(a,null,E),await _e(null,null,a=="clients"?modelOneService:""),!0):!1};i("Orders List..");let ra=i([]),Te={_removeItem:async function(t=null,a=null){return V.value=null,A.value=a,delete w.value[t],!0},_detailView:async(t=null,a=null,r=null,n=null,l=null)=>(S.value=n,["hover","",null,!1].includes(r)?(await X(r,a,E),!0):(await X(r,a),await _e(l,null),!0)),selectedRow_ForeignRows:async(t=null,a=null,r=null)=>await sa(t,a)?!1:(await X(a,t,E),await _e(r,null,a=="clients"?modelOneService:modelTwoService),re.value=r,xe.value=!0,r!="direct"&&(a=="clients"?_this_modelOneQuery():_this_modelTwoQuery()),!0),_rating:async t=>(s.value={id:w.value[t].id,_itServiceRating:w.value[t]._itServiceRating},s.value.thisOps="_itServiceRating",s.value.thisSubOps="increase",await $.updateData().then(async a=>(console.log(a,"Rating...."),a&&(z(5e3,"You Rated","Succefully Updated"),w.value[V.value]._itServiceRating++),!0)).catch(a=>!1)),_likes:async t=>(s.value={id:w.value[t].id},s.value.thisOps="likes",s.value.thisSubOps="increase",await $.updateData().then(async a=>(a&&(z(5e3,"Liked","Succefully Updated"),w.value[t].likes.like++),!0)).catch(a=>!1)),_following:async t=>(s.value={id:w.value[t].id},s.value.thisOps="following",s.value.thisSubOps="increase",await $.updateData().then(async a=>(a&&z(5e3,"You Following","Succefully Updated"),!0)).catch(a=>!1)),_delRow:async(t=null,a,r)=>t==null?(s.value={id:r},F.value=Te._delRow,!1):(F.value=null,t?await $.deleteData().then(n=>(n&&ve("userID",_._profile.id),!0)).catch(n=>!1):!1),_toCart:async(t=null,a=null)=>{var n,l;s.value={id:t,clients:Object.assign({},(n=_thisDefault_client.value)!=null?n:{})},s.value.clients.store="cart",s.value.thisOps=a,s.value.thisSubOps="create";let r=await modelOneService.createData(s.value,{});return r.status?(z(5e3,"Product Saved",""),ra.value.push((l=r.data.data.id)!=null?l:null),!0):(Y(500,"Error Creating",""),!1)}};const na={type:"String",enum:["upgraded","client","creator","admin","xrole"]};let I=i(null);async function me(t,a=null){return console.log(t,s.value,a),a?(await ne("UpdateRowItem",t),s.value.group=null,I.value=!0,!0):t==null?(await ne("CreateRowItem",null),D.value=!0,!0):(await ne("UpdateRowItem",t),D.value=!0,!0)}let he=i(null),Ee=i(null);async function ua(){var a;S.value=!0;let t=(a=he.value)!=null?a:!1;return t&&(s.value[t]=_fileAsRaw.value,typeof _fileAsRaw.value=="object"?s.value.file_={files:t}:s.value.file_={file:t}),s.value.onplayOps="CreateRowItem",s.value.onplaySubops="new",await $.createData().then(async r=>r?(D.value=!1,!0):(Y(5e3,te[2],te[0]),!0)).catch(r=>(Y(5e3,te[2],te[0]),S.value=!1,D.value=!1,!1))}async function Me(t=!1){var r;S.value=!0;let a=(r=he.value)!=null?r:!1;return a&&(s.value[a]=_fileAsRaw.value,typeof _fileAsRaw.value=="object"?s.value.file_={files:a}:s.value.file_={file:a}),s.value.onplayOps="UpdateRowItem",s.value.onplaySubops=t,await $.updateData().then(async n=>(n?(z(5e3,te[1],"Succefully Updated"),w.value[V.value]=Object.assign({},n),ne(null,null)):Y(5e3,ue[1],ue[0]),S.value=!1,!0)).catch(n=>(Y(5e3,ue[2],ue[0]),S.value=!1,D.value=!1,!1))}let ia="",oa="id",ge="id";const $={createData:async function(t={}){try{return s.value[ia]==null?!1:await j.createData(le,s.value,t).then(a=>a.status?a.data:(v({createData:5e3},5e3,"Error"+a.data),!1)).catch(a=>(v({createData:5e3},5e3,"Error createData","..."+a),!1))}catch(a){return v({createData:5e3},5e3,"Error createData","..."+a),!1}},updateData:async function(t={}){try{return s.value[oa]==null?!1:await j.updateData(le,s.value,t).then(a=>a.status?a.data:(v({updateData:5e3},5e3,"Error"+a.data),!1)).catch(a=>(v({updateData:5e3},5e3,"Error updateData","..."+a),!1))}catch(a){return v({updateData:5e3},5e3,"Error updateData","..."+a),!1}},readData:async function(){return v({readData:0},0,"Searching..."),await j.readData(le).then(t=>t.status?t.data:(v({readData:5e3},0," Error "+t.data),!1)).catch(t=>(v({readData:5e3},5e3,"Error Deleting","..."+t),!1))},readFData:async function(t={}){v({readFData:0},0,"Searching...");try{return Object.keys(t!=null?t:{}).length==0?!1:await j.readFData(le,t).then(a=>a.status?a.data:(v({readFData:5e3},0," Error"+a.data),!1)).catch(a=>(v({readFData:5e3},5e3,"Error Deleting","..."+a),!1))}catch(a){return v({readFData:5e3},5e3,"Error Deleting","..."+a),!1}},deleteData:async function(){v({deleteData:0},0,"Searching...");try{if(s.value[ge]==null)return!1;let t={};return t[ge]=s.value[ge],await j.deleteData(le,t).then(a=>a.status?a.data:(v({deleteData:5e3},0," Error"+a.data),!1)).catch(a=>(v({deleteData:5e3},5e3,"Error Deleting","..."+a),!1))}catch{return v({deleteData:5e3},5e3,"Error Deleting","..."+e),!1}}};let ca=i(25e3);const da=async(t,a)=>(console.log(`
 Profile Syncing is "Active Final"
`),clearInterval(K),await t.set_syncQuery(a),t.set_syncLock(!1),t.asyncDatas(),setTimeout(function(){clearInterval(K),K=setInterval(t.asyncDatas,ca.value)},5e3),!0);ga(async()=>{E.set_syncLock(!0),ve()}),pa(async()=>(clearInterval(K),!0)),i([{}]),i(""),i([]),i(!1),i(100),i([]),i(""),i([]),i([{label:"Name",value:"Name"},{label:"ID",value:"ID"}]),i(!0);let Z=i("");i({min:2,max:8});let Ue=ye({group_I:{male:!0,female:!0}});const fa=W(()=>({search:Z.value,male:Ue.group_I.male,female:Ue.group_I.female}));ye([["name","companyID","department","position"],["Educations","Expriences","position","department","gender","pension","pensionRate","loan","incomeTax","netSalary"],["address","employeedate","salary"]]),i({});var C=i([]);i([s]),ye({});function va(){return Object.keys(C.value[0]).length==0&&C.value[0]==s&&C.value.shift(),C.value.length===0?w.value[0]:C.value[0],C.value.length===0?"":`# ${C.value.length>1?C.value.length:""} ,selected of ${w.value.length}`}function _a(){}return(t,a)=>{const r=ya("Label");return o(),b(ae,null,[u(ke).length?(o(),m(Be,{key:0,modelValue:u(D),"onUpdate:modelValue":a[3]||(a[3]=n=>U(D)?D.value=n:D=n),"transition-show":"scale","transition-hide":"scale",style:{background:"rgba(73, 255, 1, 0.342)",border:"15px solid rgb(0, 0, 117)"},persistent:""},{default:d(()=>[f(Na,{inputColor:"white",_xDisplayDefaulted:u(aa),_rolesColumns:u(ke),_this:u(s),_thisDefault:u(H),__thisOps:u(A),thisSchemaFile:u(fe),thisSchemaPath:u(de),onClose:a[0]||(a[0]=n=>U(D)?D.value=n:D=n),onUpdate:a[1]||(a[1]=n=>Me()),onCreate:a[2]||(a[2]=n=>ua())},null,8,["_xDisplayDefaulted","_rolesColumns","_this","_thisDefault","__thisOps","thisSchemaFile","thisSchemaPath"])]),_:1},8,["modelValue"])):k("",!0),f(La,{isOpen:u(F),onEmitClick0:a[4]||(a[4]=n=>U(F)?F.value=n:F=n)},{default:d(()=>[f(Ya,{onConfirmButton:u(F),header:u(Ne),title:"Yes",textcolor:"black",background:"green",title2:"No",textcolor2:"green",background2:"red"},null,8,["onConfirmButton","header"])]),_:1},8,["isOpen"]),f(Be,{modelValue:u(I),"onUpdate:modelValue":a[8]||(a[8]=n=>U(I)?I.value=n:I=n),"transition-show":"scale","transition-hide":"scale",style:{background:"rgba(73, 255, 1, 0.342)",border:"15px solid rgb(0, 0, 117)"},persistent:""},{default:d(()=>[R("div",Xa,[Za,Ga,R("div",null,[f(Sa,{style:{"min-width":"7vw"},color:"secondary",outlined:"",dense:"",modelValue:u(s).group,"onUpdate:modelValue":a[5]||(a[5]=n=>u(s).group=n),options:na.enum,single:"","use-chips":"","stack-label":"","label-color":"black",class:"col text-weight-bold"},null,8,["modelValue","options"])]),R("div",et,[f(q,{label:"confirm",onClick:a[6]||(a[6]=n=>Me("updateRole"))}),f(q,{label:"Cancel",color:"red",onClick:a[7]||(a[7]=n=>U(I)?I.value=!1:I=!1)})])])]),_:1},8,["modelValue"]),R("div",at,[R("div",tt,[f(we,{class:"col dark bordered column q-pa-none q-ma-none"},{default:d(()=>[f(Ca,{label:u(N)+" More ...",class:"shadow-1 overflow-hidden",style:{"border-radius":"5px","text-transform":"capitalize"},"header-class":"text-black-10 text-blue","expand-icon-class":"text-blue",dense:!0},{default:d(()=>[f(Le,{class:"col-auto row",style:{"text-transform":"capitalize"}})]),_:1},8,["label"]),f(Le,{class:"q-pa-none col column bordered wrap scroll bg-orange"},{default:d(()=>{var n;return[Object.keys((n=u(h))!=null?n:{}).length?(o(),b("div",lt,[f(Ia,{color:"white",class:"col text-md text-weight-bold sticky-table transparent",dense:!0,rows:u(w),columns:u(Ce),"row-key":"id",rowIndex:"true","selected-rows-label":va,selection:"multiple",selected:u(C),"onUpdate:selected":[a[11]||(a[11]=l=>U(C)?C.value=l:C=l),_a],filterMethod:u(Oe),filter:fa.value,"visible-columns":u(We),"no-data-label":"Items doesn't Founded !",pagination:u(J),"onUpdate:pagination":a[12]||(a[12]=l=>U(J)?J.value=l:J=l)},{"top-left":d(()=>{var l;return[R("div",st,[(l=u(h).capability)!=null&&l?(o(),b("div",rt,[f(q,{dense:"",outline:"",class:"col-auto",label:u(N)+" Managment"},null,8,["label"]),u(h).capability[0]!="0"?(o(),m(q,{key:0,dense:"",color:"orange",class:"",label:"Create  "+u(N),onClick:a[9]||(a[9]=c=>me(null))},null,8,["label"])):k("",!0)])):k("",!0)])]}),"top-right":d(()=>[R("div",nt,[f(wa,{standout:"bg-green",style:{"min-width":"7vw","max-width":"13vw",background:"rgba(255, 255, 255, 0.589)","border-radius":"5px"},debounce:"400",color:"black",modelValue:u(Z),"onUpdate:modelValue":a[10]||(a[10]=l=>U(Z)?Z.value=l:Z=l),label:"Search","stack-label":"",dense:!0},{append:d(()=>[f(ba,{name:"search"})]),_:1},8,["modelValue"])])]),"header-cell":d(l=>[f(Qa,{style:{"text-align":"left","text-transform":"capitalize"},class:"",props:l},{default:d(()=>[B(L(typeof l.col.label=="string"?l.col.label:" "),1)]),_:2},1032,["props"])]),body:d(l=>[Object.keys(l.row).length?(o(),m(Ea,{key:0,props:l,class:"cursor-pointer text-bold text-weight-bolder"},{default:d(()=>[f(Ua,{class:"bg-white",offset:[10,10]},{default:d(()=>[B(L(l.row._stage_),1)]),_:2},1024),f(Ta,{"auto-width":""},{default:d(()=>[f(Da,{dense:"",modelValue:l.selected,"onUpdate:modelValue":c=>l.selected=c},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),(o(!0),b(ae,null,Fe(l.cols,c=>{var p,Q,y,O,G,M;return o(),b("td",{props:l,style:{"font-size":"0.6em","text-align":"justify"},class:be(["col text-bold text-center fontastyle",c.name=="name"?"text-center text-weight-bolder":"text-center "]),key:c.name},[(p=c.schema)!=null&&p?(o(),b(ae,{key:0},[(Q=c.schema.type)!=null&&Q?(o(),b("div",it,[c.name!="actions"?(o(),b("div",ot,[c.name==="gmStatus"?(o(),m(T,{key:0},{default:d(()=>[f(r,{class:be(l.row.gmStatus?"bg-green":"bg-red")},{default:d(()=>[B(" \xA0 ")]),_:2},1032,["class"])]),_:2},1024)):(o(),b("div",ct,["textarea"in Object.keys((y=c.schema)!=null?y:{})?(o(),m(we,{key:0,flat:"",bordered:"",dense:!0},{default:d(()=>{var x;return[(x=l.row[c.name])!=null&&x?(o(),m(T,{key:0},{default:d(()=>[R("div",{innerHTML:l.row[c.name]},null,8,dt)]),_:2},1024)):(o(),m(T,{key:1,style:{background:"red"}}))]}),_:2},1024)):["r_Time","d_Time"].includes(c.name)?(o(),m(we,{key:1,flat:"",bordered:"",dense:!0},{default:d(()=>{var x;return[(x=l.row[c.name])!=null&&x?(o(),m(T,{key:0},{default:d(()=>[B(L(l.row[c.name].split("T")[1]),1)]),_:2},1024)):(o(),m(T,{key:1,style:{background:"red"}}))]}),_:2},1024)):(O=l.row[c.name])!=null&&O?(o(),b("div",ft,L(l.row[c.name]),1)):k("",!0)]))])):(G=u(h))!=null&&G?(o(),b("div",vt,[u(h).capability!="00000"?(o(),b(ae,{key:0},[u(h).capability[1]!="0"&&u(h).accstage.includes(l.row._stage_)?(o(),m(q,{key:0,color:"orange",label:"Update",onClick:x=>me(l.rowIndex),class:"fontastyle","no-caps":""},null,8,["onClick"])):k("",!0),u(h).capability[2]!="0"&&u(h).accstage.includes(l.row._stage_)?(o(),m(q,{key:1,color:"red-7",label:"Delete",onClick:x=>u(Te)._delRow(null,l.rowIndex,l.key),class:"fontastyle",dense:!0,"no-caps":""},null,8,["onClick"])):k("",!0),u(h).capability[2]!="0"&&u(h).accstage.includes(l.row._stage_)?(o(),m(q,{key:2,color:"green",label:"Role",onClick:x=>me(l.rowIndex,"group"),class:"fontastyle",dense:!0,"no-caps":""},null,8,["onClick"])):k("",!0)],64)):k("",!0)])):k("",!0)])):Array.isArray(c.schema)?(o(),b("div",_t,[(M=l.row[c.name])!=null&&M?(o(),m(T,{key:0},{default:d(()=>[B(L(l.row[c.name]),1)]),_:2},1024)):(o(),m(T,{key:1,style:{background:"red"}}))])):Object.keys(c.schema).includes("ref")?(o(),b("div",{key:2,class:"text-primary row q-gutter-xs col-auto",color:l.row.status=="Active"?"green":l.row.status=="Disable"?"red":"grey","text-color":"primary"},L(l.row[c.name]),9,mt)):Object.keys(c.schema).length?(o(),b("div",{key:3,class:"text-primary row q-gutter-xs col-auto",color:l.row.status=="Active"?"green":l.row.status=="Disable"?"red":"grey","text-color":"primary"},[(o(!0),b(ae,null,Fe(l.row[c.name],(x,pe)=>(o(),m(Ba,{key:pe,class:"column q-gutter-xs col-auto",style:{"font-size":"0.7rem"}},{default:d(()=>["type"in c.schema[pe]?ka((o(),m(Fa,{key:0,clickable:"",class:be(["rounded-borders col-auto row q-pa-none q-gutter-xs",u(Re).dark.isActive?"bg-red":"bg-white"]),dense:""},{default:d(()=>[f(Ve,{class:"col-auto q-gutter-xs q-pa-none"},{default:d(()=>[f(Va,{class:"col-auto q-pa-none"},{default:d(()=>[B(L(pe)+" ",1),x!=null&&x?(o(),m(T,{key:0},{default:d(()=>[B(L(x),1)]),_:2},1024)):(o(),m(T,{key:1,style:{background:"red"}}))]),_:2},1024)]),_:2},1024),f(Ve,{side:""},{default:d(()=>[B(" . ")]),_:1})]),_:2},1032,["class"])),[[xa]]):k("",!0)]),_:2},1024))),128))],8,ht)):k("",!0)],64)):k("",!0)],10,ut)}),128))]),_:2},1032,["props"])):k("",!0)]),_:1},8,["rows","columns","selected","filterMethod","filter","visible-columns","pagination"])])):k("",!0)]}),_:1})]),_:1})])])],64)}}};export{tl as default};