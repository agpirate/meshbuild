import{r as A,R as cl,c as Y,w as ee,o as _l,a as hl,l as i,X as u,u as l,m as C,b as ce,p as k,n as b,f,F as Me,bm as $,bp as qe,W as a,Y as O,Z as _e,bd as ut,Q as rt,bo as vl,a4 as yl,bf as fl}from"./index.479a4e77.js";import{Q as dt}from"./QPage.d987e118.js";import{a as gl,d as pl,u as wl,e as ml,c as xl,f as bl,g as Sl,_ as ct,Q as _t,h as Cl}from"./saleitModel.e0c41a15.js";import{u as kl,a as Ol,d as Pe,b as me,_ as Il,Q as ht}from"./debugMixin.5367f11c.js";import{u as Rl,a as Bl,b as Dl,c as Ml,d as ql,e as Pl,f as $l,U as Ql,t as Ul,s as Fl,g as Nl,h as Vl,_ as vt,Q as yt,i as xe,j as El}from"./crudThisModel.1d95f7c1.js";import{_ as Ll,Q as $e}from"./confirmButton.585fe127.js";import{u as jl}from"./use-quasar.6c02ab83.js";import{_ as zl,a as Tl,b as ft}from"./orderDetail.f71a1bfc.js";import{u as Al,a as Yl,_ as gt,b as Zl,c as Kl}from"./buyAction.5b1a5a42.js";import{_ as Hl,u as Wl}from"./queryBuilder.02838b7f.js";import{t as Xl}from"./thisQueryBuilder.ec781fc6.js";import"./axios.05cf8750.js";import"./QSelect.342be206.js";import"./QRating.60302f9c.js";const Gl={key:0,class:"detailRow-sizeHauto boxStyle-dense bgdark onedlayout ccolumn cgap-0"},Jl={key:1,class:""},es={key:0},ts=a("div",{style:{"font-weight":"lighter","font-size":"12px"}},"Loading",-1),ls={key:1,style:{"font-size":"43px","font-weight":"bolder",color:"red"}},ss=a("div",{style:{"font-weight":"lighter","font-size":"12px"}},"Loading",-1),as={class:"detailRow-sizeHauto boxStyle-dense bgdark onedlayout ccolumn cgap-0"},ns={key:0},is={key:0,class:"q-pa-sm text-red"},os={key:1,class:"q-pa-sm"},us={key:1,class:""},rs={key:0,class:"onedlayout ccolumn"},ds={class:""},cs={class:"onedlayout crow cgap-2 cj-end"},_s={key:2,class:"onedlayout ccolumn fontStyle-dense",style:{}},hs={class:"txtlight boxStyle-dense bggreysmokey p-sidesm"},vs={key:3,class:"onedlayout crow cj-center ia-center"},ys={key:1},fs={key:0,class:""},gs={class:"ps-relative ccol-grow onedlayout crow"},ps={class:"ps-absolute parent-fit boxStyle-dense onedlayout crow"},ws={key:0,class:"ccol-grow onedlayout ccolumn cj-between ia-start"},ms={class:"boxStyle-dense radiusxs",style:{"min-width":"30%","border-bottom-left-radius":"0px"}},xs=["onClick"],bs={class:"onedlayout crow cgap-5 cj-between ia-center"},Ss={class:"boxStyle-dense radiusxxs bgsmokey fontStyle-base txtgrey"},Cs={class:"ri-phone-fill"},ks=a("div",{class:"bgsmokey boxStyle-dense radiusxxs"},[a("i",{class:"txtsystem ri-verified-badge-line"})],-1),Os={class:"onedlayout crow boxStyle-dense bggrey radiusxxs fontStyle-dense txtgrey"},Is=["onClick"],Rs=a("h4",{class:"txtlight"}," Follow |",-1),Bs=[Rs],Ds={class:"txtlight"},Ms={class:"onedlayout ccolumn ia-start cgap-3"},qs=["src"],Ps={class:"onedlayout crow cj-between",style:{width:"100%"}},$s=["onClick"],Qs=a("h4",null," Show Details ",-1),Us=[Qs],Fs={key:1,class:"onedlayout crow ia-center",style:{"max-height":"5vh"}},Ns=["onClick"],Vs={class:"txtgrey"},Es=a("h4",null," | ",-1),Ls={class:"onedlayout crow cgap-3 fontStyle-base txtsystem"},js={class:"ri-phone-fill"},zs={style:{position:"absolute",right:"3px",top:"20%","z-index":"4"},class:"ps-absolute parent-tr onedlayout ccolumn cgap-2 cj-center ia-center"},Ts={key:0,class:"BBoxStyle-dense radiussm bgposetive fontStyle-dense"},As={class:"txtlight"},Ys={key:1,style:{color:"orangered"},class:"fonte0astyle"},Zs={key:0,class:"BBoxStyle-dense radiussm bgnegative fontStyle-dense txtlight"},Ks={class:"txtlight"},Hs={key:1,class:"BBoxStyle-dense radiussm bgwarning fontStyle-dense"},Ws={class:"txtlight"},Xs=["onClick"],Gs={class:"txtlight"},Js=["onClick"],ea=a("h4",{class:"txtlight"}," Comments ",-1),ta=[ea],la=["onClick"],sa=a("i",{class:"ri-information-line onedlayout crow ia-center fontStyle-wide"},null,-1),aa=[sa],na={key:4,class:"onedlayout ccolumn cgap-2"},ia=["onClick"],oa=a("h4",{class:"txtlight"}," edit ",-1),ua=[oa],ra=["onClick"],da=a("h4",{class:"txtlight"}," Delete ",-1),ca=[da],_a={class:"onedlayout ccolumn bg-blue ps-relative"},ha={key:0,class:"col-auto q-gutter-sm justify-center q-pa-none q-ma-none column",style:{position:"absolute",width:"100%",height:"100%",top:"0px","z-index":"3","backdrop-filter":"blur(0.5px)"}},va={key:0,class:"row q-gutter-sm"},ya=["onClick"],fa=["onClick"],ga={class:""},pa={key:1},wa={key:0,class:"onedlayout ccolumn ia-start"},ma={class:"boxStyle-dense onedlayout crow cgap-1"},xa={key:1},ba={key:1,class:"boxStyle-dense onedlayout ccolumn ps-absolute parent-fit"},Sa={class:"onedlayout crow cj-between"},Ca={key:0,class:"BBoxStyle-dense radiussm bgposetive fontStyle-dense"},ka={class:"txtlight"},Oa={key:1,style:{color:"orangered"},class:"fonte0astyle"},Ia={key:0,class:"BBoxStyle-dense radiussm bgnegative fontStyle-dense txtlight"},Ra={class:"txtlight"},Ba={key:1,class:"BBoxStyle-dense radiussm bgwarning fontStyle-dense"},Da={class:"txtlight"},Ma={key:2,class:"fontastyle"},qa={class:"fontastyle text-white"},Pa={class:"col-grow column justify-end"},$a=["onClick"],Qa=a("i",{class:"ri-information-line onedlayout crow ia-center fontStyle-wide"},null,-1),Ua=[Qa],Fa={key:2},Na={key:1,class:"col q-py-md q-gutter-md transparent flex flex-center column",style:{width:"100vw"}},Va={style:{width:"90%"},class:"col-auto q-gutter-xs transparent row"},Ea={style:{width:"90%"},class:"col q-pa-xs row q-gutter-xs"},La={style:{display:"flex","flex-flow":"column nowrap",width:"90%"}},zn={__name:"splayPage",props:{_profile:{type:Object,default:()=>({})},_acctype:{type:Object,default:()=>{}},lytCreatRow:{type:Boolean,default:!1},lytSearchRow:{type:String,default:""},lytButtonRow:{type:String,default:""},isScrolled:{type:Boolean,default:!1},isScrolledUp:{type:Boolean,default:!1},_pageSetting:{type:Object,default:()=>({})},_thisMedia:{type:Object,default:()=>({})},_tableModel_Cols_Props:{type:Object,default:()=>({})},_tableModel_Row_Props:{type:Object,default:()=>({})},visible_modelCols_label_Props:{type:Object,default:()=>({})}},emits:["_this_Query"],setup(he,{emit:pt}){const{thisSchemaPath:Qe,thisSchemaFile:Ue,_debugObj:ja,_validateThis:za}=gl();let Z=A(null),wt=A("Are You Sure ?");const{Loadingpage:Ta,Loadingevent:mt,DoneMessage:be,WarnthisMessage:Se,timerLoadevent:ve,timerDone:D,timerError:F}=kl(),{status_KnowthisMessage:Ce,status_timerInformthis:xt}=pl();var{_fileAttributeName:te}=wl();const bt=jl(),Fe=cl();let r=he;const St=pt;var{active_fileName:Ne,active_fileIndex:ne,__thisFileOps_onCard:Ct,__thisFileOps_onZoom:kt,thisOps:Aa,thisOpsCard:Ya,thissubOpsStatus:Za,__thisBox:Q,__thisIndex:v,__thisOps:d,__thisOpsCard:ye,__thisOpsStatus:R,__thissubOps:Ot,__thissubOpsStatus:It,active_foreignModel:Rt,active_foreignModelDialog:le,active_foreignModelIndex:x,active_foreignModelOps:K,active_foreignModelOpsStatus:Ve,active_foreignModelsubOps:Bt}=ml();let{userInformation:Dt,modelRow_Builder:Ee,foreign_modelRow_Builder:Ka,foreign__tableModel_Cols:Le}=xl(),{Model_Name:Ha,Model_Url:Mt,saleit_schemaPath:je,saleit_schemaFile:ze,locked_modelCols_label:Wa,flexInvisible_modelCols_labels:Xa,useric_modelCols_label:Ga}=bl(),{_this_Schema:qt,_tableModel_Cols:ke,_tableModel_Row:Pt,all_modelCols_label:Ja,allowed_modelCols:en,visible_modelCols_label:tn}=Sl(),{_this_Query:fe,accModel_Row:ln,_this_Rows:g,_this_RowsChecked:H,_this_Details:sn,_this_userOwned:ge}=Rl(),{saleitClient_Name:an,saleitClient_schemaPath:$t,saleitClient_schemaFile:Qt,locklabels_saleitClient_Cols:nn,invislabels_saleitClient_Cols:Te,userlabels_saleitClient_Cols:Ut}=Bl(),{saleitClient_Schema:Ae,saleitClient_Cols:Ye,saleitClient_Row:N,alllabels_saleitClient_Cols:on,acclabels_saleitClient_Cols:un,vislabels_saleitClient_Cols:Ft}=Dl(),{this_client_Query:Ze,this_client_Rows:M,this_client_RowsChecked:rn,this_client_Row:c,_this_client_Details:dn,this_client_userOwned:cn}=Ml(),{saleitChat_Name:_n,saleitChat_schemaPath:Nt,saleitChat_schemaFile:Vt,locklabels_saleitChat_Cols:hn,invislabels_saleitChat_Cols:Et,userlabels_saleitChat_Cols:Lt}=ql(),{saleitChat_Schema:Ke,saleitChat_Cols:He,saleitChat_Row:We,alllabels_saleitChat_Cols:vn,acclabels_saleitChat_Cols:yn,vislabels_saleitChat_Cols:jt}=Pl(),{this_chat_Query:Xe,this_chat_Rows:ie,this_chat_RowsChecked:fn,this_chat_Row:W,_this_chat_Details:gn,this_chat_userOwned:pn}=$l();var{priceFilter:zt,_enableRowFilter:wn,_thisFiltering:Tt,_filteredRow:At}=Al();let{_pageSettings:_,pageName:Yt,metaData:Zt,pagination:mn,paginationId:xn,paginationCard:pe}=Yl(),{createKey:bn,updateKey:Sn,delKey:Cn,_this_Model_Url:Kt,_thisService:Ht,activeRow:Wt,_this:o,message:kn,messageTimer:On,createData:Xt,updateData:we,readData:In,readFData:Rn,deleteData:Gt}=Ql();Ol(Zt),Pe(je,ze).then(e=>(e&&(qt.value=e),!0)),Ht.value=Ul();const U=Fl(),q=Nl(),X=Vl();A({clients:q,comments:X,null:null}),Dt.value=r!=null?r:!1,Qe.value=je,Ue.value=ze;const Jt=Y(()=>({search:r.lytSearchRow,priceFilter:zt}));ke=Y(()=>{var e,t;return(e=r._tableModel_Cols_Props)!=null&&e?(el(),(t=r._tableModel_Cols_Props)!=null?t:null):null}),Pt=Y(()=>{var e,t;return(e=r._tableModel_Row_Props)!=null&&e&&(t=r._tableModel_Row_Props)!=null?t:null}),bt.screen.lt.md&&Te.value.push("");async function el(){await Pe($t,Qt).then(n=>(n&&(Ae.value=n),!0));let e=await Le(Ae.value,Te.value);Ye.value=e[0],Ft.value=e[1],await tl(Ye.value),await Pe(Nt,Vt).then(n=>(n&&(Ke.value=n),!0));let t=await Le(Ke.value,Et.value);return He.value=t[0],jt.value=t[1],await ll(He.value),!1}async function tl(e){return N.value=await Ee(Ut.value,e),N.value.orderID=await vt(),N.value.userID=r._profile.id,N.value.phone=r._profile.phone,N.value.quantity=1,!0}async function ll(e){return We.value=await Ee(Lt.value,e),!0}let Ge=A(null),Je=A(null),et=A(null),tt=A(null);ee(r._pageSetting,(e,t)=>(_.value=Object.assign(_.value,e),!0)),Ge=Y(()=>r.lytSearchRow),ee(Ge,async(e,t)=>{e&&(_.value.tableView="cards",G("lytSearchRow",e))}),Je=Y(()=>r.lytButtonRow),ee(Je,async(e,t)=>{e&&(_.value.tableView="cards",G(e[0],e[1],e[2]))}),et=Y(()=>r.lytCreatRow),ee(et,async(e,t)=>(await J({thisIndex:null,thisOpsStatus:null,thisOps:"Create_this",thisOpsCard:"thisCard",stopSync:null}),Q.value=!0,!0)),tt=Y(()=>U.getstatus_Rows),ee(tt,async(e,t)=>{let n;if(R.value=!1,e==null)return n="No Data.",!0;if(e=="noupdates")n="No Updates.";else if(e==!1)n="Locked";else{if(e==!0)return n="Loading ....",!0;if(e=="BadConnection")n="Offline";else return n=e,await ve({message:1},2e3,"...Session Closed"),e=="Unauthorized"&&dl(),!1}return xt(5e3,n,"Product & Services"),!0}),ee(o,(e,t)=>{if(Wt.value=e,Kt.value=Mt,v.value==null)return o.value.currency="ETB",!0;try{ge.value=e.userID==r._profile.id}catch{[ge.value]=[!1]}return!0}),ee(At,(e,t)=>{});async function sl(e=null){return te.value=null,await J({thisIndex:e,thisOpsStatus:null,thisOps:"Update_this",thisOpsCard:"thisCard",stopSync:null}),Q.value=!0,!0}async function al(){return alert("ddddd"),!0}async function G(e=null,t=null,n=null){var B;R.value="loading",U.set_syncLock(!0),clearInterval(se),ve({this_Query:0},0,"Updating..."),g.value=[],K.value=!1,v.value=null;let h={id:null,content:null,header:null,qweight:{},geoSearch:(B=_.value.geoSearch.value)!=null?B:"off",queryOperator:"productSpecific-or",limits:100,skips:0};console.error(h.geoSearch);let S=await Xl(fe.value,e,t,n);return console.error(h.geoSearch),fe.value={...h,...S[0]},St("_this_Query",fe.value),K.value=S[2],await rl(U,fe.value),_.value.tableView=S[1],!0}let se="";g=Y(()=>nl(U.getDatas));function nl(e){return Array.isArray(e)?e.length?e:(_.value.tableView="cards",g.value):[]}let{queryBuilder_foreign:lt}=Wl();async function Oe(){var t;M.value=null;let e={activeUserID:r._profile.id,userItemOwnership:ge.value,activeItemID:(t=o.value.id)!=null?t:"",queryOperator:"and",otherQueries:{store:"buy"}};return Ze.value=await lt(e),await Re(q,Ze.value).then(async n=>(n&&(M.value=n,await ae(K.value,null)),!0)).catch(n=>!1)}async function Ie(){var t;M.value=null;let e={activeUserID:r._profile.id,userItemOwnership:!0,activeItemID:(t=o.value.id)!=null?t:"",queryOperator:"and",otherQueries:{store:"buy"}};return Xe.value=await lt(e),await Re(X,Xe.value).then(n=>(n&&(ie.value=n,ae(K.value,null)),!0))}async function J(e={thisIndex:null,thisOpsStatus:null,thisOps:null,thisOpsCard:null,stopSync:null}){var t,n;if(v.value=e.thisIndex,(t=e.stopSync)!=null&&t&&(e.thisOps=="clients"?q.set_syncLock(!0):X.set_syncLock(!0)),te.value=null,ne.value=null,Q.value=null,Ot.value=null,It.value=null,R.value=e.thisOpsStatus,d.value=e.thisOps,ye.value=e.thisOpsCard,e.thisIndex==null)o.value=Object.assign({},r._tableModel_Row_Props),o.value.geolocation=r._profile.geolocation,o.value.location=r._profile.location,o.value.currency=(n=r._profile.currency)!=null?n:"",o.value.userID=r._profile.id,o.value.phoneCode=r._profile.phoneCode,o.value.phone=r._profile.phone;else try{o.value=Object.assign({},g.value[e.thisIndex])}catch{}return Ne.value="saleitgr",!0}async function ae(e,t,n=null,h=null){var S,B,oe,ue;x.value=t,n&&n.set_syncLock(!0),Rt.value=null,le.value=null,Bt.value=null,Ve.value=h,K.value=e;try{if(d.value=="comments")t==null?(W.value=Object.assign({},We.value),W.value.userID=r._profile.id,W.value.saleitID=(B=(S=o.value)==null?void 0:S.id)!=null?B:""):W.value=Object.assign({},ie.value[t]);else if(t==null||d.value=="details")c.value=Object.assign({},N.value),c.value.userID=r._profile.id,c.value.phoneCode=r._profile.phoneCode,c.value.currency=o.value.currency,c.value.location=o.value.location,c.value.geolocation=o.value.geolocation,c.value.saleitID=(ue=(oe=o.value)==null?void 0:oe.id)!=null?ue:"",c.value.orderID=await vt();else try{c.value=Object.assign({},M.value[t])}catch{}}catch{}return!0}const il=async function(e=null,t=null){let n=v.value==e;return e==null||n&&d.value==t?(await J({thisOps:t,thisOpsCard:null,thisIndex:e,stopSync:U}),await ae(null,null,t=="clients"?q:""),!0):!1},st=async function(e,t,n){let h=x.value==e;return e==null||h&&K.value==t?(await ae(null,null,d.value=="clients"?q:"",null),!0):!1};let p={_add:async()=>(x.value=null,c.value=Object.assign({},N.value),!0),selectedIndex_:async(e={foreignIndex:null,foreignOps:null,foreignOpsStatus:null})=>(Ve.value=e.foreignOps,await st(e.foreignIndex,e.foreignOps,d.value)?!1:(await ae(e.foreignOps,e.foreignIndex,d.value=="clients"?q:X,e.foreignOpsStatus),!0)),selectedIndex_RowDetail:async(e,t=null,n=null)=>{let h="clients";return await st(t,n)?!1:(v.value=0,await Re(U,{id:e}).then(async S=>{try{S&&(g.value[v.value]=S[v.value],await I._detailView(g.value[v.value].id,v.value,h,"selected","detailCard"),await p.selectedIndex_({foreignIndex:t,foreignOps:n,foreignOpsStatus:null}))}catch{return!0}}),!0)},selectedIndex_RowCard:async(e=null)=>{le=e},_remove:async()=>{if(d.value=="comments"){let e={id:o.value.id,comments:W.value};e.thisOps=d.value,e.thisSubOps="delete";let t=await X.deleteData(e,{});if(!t.status)return F(500,"Error Creating",""),!1;D(5e3,"Removed",""),g.value[v.value]=t.data.data,ie.value.splice(x.value,1),await ae(null,null,null,null)}else{let e={id:o.value.id,clients:c.value};e.thisOps=d.value,e.thisSubOps="delete";let t=await q.deleteData(e);if(!t.status)return F(500,"Error Creating",""),!1;D(5e3,"Removed",""),g.value[v.value]=t.data.data,M.value.splice(x.value,1),await p.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null})}return!0},_update_foreign:async()=>{if(x.value=null,d.value=="comments"){let e={id:o.value.id,comments:W.value};e.thisOps=d.value,e.thisSubOps="update";let t=await X.updateData(e,{});return t.status?(D(5e3,"Updated Succefully",""),g.value[v.value]=t.data.data,typeof x.value=="number"&&!le.value?ie.value[x.value]=t.data.foreignData:await Ie(),await p.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null}),!0):(F(500,"Error Updating",""),!1)}else{let e={id:o.value.id,clients:c.value};e.thisOps=d.value,e.thisSubOps="update",e.clients.store="buy";let t=await q.updateData(e,{});return t.status?(D(5e3,"Updated Succefully",""),g.value[v.value]=t.data.data,typeof x.value=="number"&&!le.value?M.value[x.value]=t.data.foreignData:await Oe(),await p.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null}),!0):(F(500,"Error Updating",""),!1)}},_create_foreign:async()=>{if(d.value=="comments"){let e={id:o.value.id,comments:W.value};e.thisOps=d.value,e.thisSubOps="create";let t=await X.createData(e,{});if(!t.status)return F(500,"Error Creating",""),!1;D(5e3,"Created",""),g.value[v.value]=t.data.data,typeof x.value=="number"&&!le.value?ie.value[x.value]=t.data.foreignData:await Ie(),await p.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null})}return!0},_directBuyer:async(e={thisOps:null,thisIndex:null,thisSubOps:null,newOps:!0})=>{var h,S,B;let t={clients:c.value};t=Object.assign(t,e),t.clients.store=e.thisSubOps;let n;if(e.newOps?n=await q.createData(t,{}):n=await q.updateData(t,{}),!n.status)return F(500,"Error Creating",""),!1;if(e.thisSubOps=="buy")D(5e3,$.orderdone[Number((h=_.value.language)!=null?h:1)],"");else return D(5e3,$.savedone[Number((S=_.value.language)!=null?S:1)],""),H.value.push((B=n.data.data.id)!=null?B:null),!0;return g.value[v.value]=n.data.data,typeof x.value=="number"&&!le.value?M.value[x.value]=n.data.foreignData:await Oe(),await p.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null}),!0}},I={_removeItem:async function(e=null,t=null){return v.value=null,d.value=t,delete g.value[e],!0},_detailView:async(e=null,t=null,n=null,h=null,S=null,B=null)=>(await J({thisIndex:t,thisOps:n,thisOpsCard:S,thisOpsStatus:h,stopSync:U}),await p.selectedIndex_({foreignIndex:null,foreignOps:B,foreignOpsStatus:null}),!0),selectedRow_ForeignRows:async(e={thisIndex:null,thisOps:null,thisOpsCard:null,thisSubOps:null,this_foreignBoxOps:null})=>{var t;return console.error(e,"dddddddddjjjjjj"),await J({thisOps:e.thisOps,thisOpsCard:(t=e.thisOpsCard)!=null?t:!1,thisIndex:e.thisIndex,stopSync:U}),await p.selectedIndex_({foreignIndex:null,foreignOps:e.this_foreignBoxOps,foreignOpsStatus:!0}),e.this_foreignBoxOps!="direct"&&(e.thisOps=="clients"?Oe():Ie()),!0},_rating:async(e={thisIndex:null,id:null,thisOps:null,thisSubOps:null,thisColValue:null})=>(o.value=Object.assign(o.value,e),await we().then(async t=>(t&&(D(5e3,"You Rated","Succefully Updated"),g.value[e.thisIndex]._itServiceRating++),!0)).catch(t=>!1)),_likes:async(e={thisIndex:null,id:null,thisOps:null,thisSubOps:null,thisColValue:null})=>(o.value=Object.assign(o.value,e),await we().then(async t=>(t&&(D(5e3,"Liked","Succefully Updated"),g.value[e.thisIndex].likes.like++),!0)).catch(t=>!1)),_following:async(e={thisIndex:null,id:null,thisOps:null,thisSubOps:null,thisColValue:null})=>(o.value=Object.assign(o.value,e),await we().then(async t=>(t&&D(5e3,"Following ","Succefully Updated"),!0)).catch(t=>!1)),_delRow:async(e=null,t,n)=>e==null?(o.value={id:n},Z.value=I._delRow,!1):(Z.value=null,e?await Gt().then(h=>(h&&G("userID",r._profile.id),!0)).catch(h=>!1):!1),_toCart:async(e={id:null,thisIndex:null,thisOps:null,thisSubOps:null})=>{var n,h;o.value={clients:Object.assign({store:e.thisSubOps},(n=N.value)!=null?n:{})},o.value=Object.assign(o.value,e),console.log(e,"poooooo");let t=await q.createData(o.value,{});return t.status?(D(5e3,"Product Saved",""),H.value.push((h=t.data.data.id)!=null?h:null),!0):(F(500,"Error Creating",""),!1)}};async function ol(){return R.value=!0,o.value.thisOps=d.value,o.value.thisSubOps="new",await Xt().then(async e=>(ve({createData:1},1,"Updating..."),e?Yt!="myservice"?Fe.push("/play/MyServices"):G("userID",r._profile.id):(R.value=!1,te.value=null,!0))).catch(e=>(F(5e3,"Error Creating","Error Creating"+e),te.value=null,Q.value=!1,!1))}async function ul(){return R.value=!0,o.value.thisOps=d.value,o.value.thisSubOps="update",await we().then(async e=>(ve({updateData:1},1,"Updating..."),e&&(D(5e3,"Item Updated","Succefully Updated"),g.value[v.value]=Object.assign({},e),Q.value=!1),R.value=!1,te.value=null,!0)).catch(e=>(F(5e3,"Error Updating","Error Updating"+e),R.value=!1,Q.value=!1,te.value=null,!1))}let at=A(25e5);const rl=async(e,t)=>(clearInterval(se),await e.set_syncQuery(t),e.set_syncLock(!1),e.asyncDatas(),setTimeout(function(){clearInterval(se),se=setInterval(e.asyncDatas,at.value)},at.value),!0),Re=async(e,t)=>await e.readFData(t).then(n=>n.status?n.data:!1);_l(async()=>{clearInterval(se),await J({thisOps:null,thisOpsCard:null,thisIndex:null,stopSync:U}),await p.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null})}),G(),hl(async()=>(clearInterval(se),await J({thisOps:"clients",thisOpsCard:null,thisIndex:null,stopSync:U}),await p.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null}),!0));let dl=async()=>Fe.push(Il._clear());async function Be(e,t=null,n="onList"){if(v.value=e,ne.value=t,n=="onZoom"){let h={};h=g.value[e],o.value=Object.assign({},h),kt.value=!0}else Ct=!0}return(e,t)=>{var n,h,S,B,oe,ue,nt;return i(),u(Me,null,[l(Q)?(i(),C(Hl,{key:0,_this:l(o),_pageSettings:l(_),__thisOpsStatus:l(R),__thisOps:l(d),active_fileName:l(Ne),thisSchemaFile_Rec:l(Ue),thisSchemaPath_Rec:l(Qe),onClose:t[0]||(t[0]=y=>ce(Q)?Q.value=y:Q=y),onUpdate_this:t[1]||(t[1]=y=>ul()),onCreate_this:t[2]||(t[2]=y=>ol())},null,8,["_this","_pageSettings","__thisOpsStatus","__thisOps","active_fileName","thisSchemaFile_Rec","thisSchemaPath_Rec"])):k("",!0),l(d)=="details"&&l(ye)=="detailCard"?(i(),C(me,{key:1,isOpen:l(d),onEmitClick0:t[6]||(t[6]=y=>il())},{default:b(()=>[Object.keys(l(o)).length?(i(),u("div",Gl,[f(Tl,{_this_RowsChecked:l(H),__thisIndex:l(v),active_fileIndex:l(ne),_this:l(o),_pageSettings:l(_),active_foreignModelOps:l(K),active_foreignModelIndex:l(x),this_client_Row:l(c),onSelectedIndex_RowCard:t[3]||(t[3]=y=>l(p).selectedIndex_RowCard(y)),onBuyIndex:t[4]||(t[4]=y=>l(p)._directBuyer(y)),onCartIndex:t[5]||(t[5]=y=>l(p)._directBuyer(y))},null,8,["_this_RowsChecked","__thisIndex","active_fileIndex","_this","_pageSettings","active_foreignModelOps","active_foreignModelIndex","this_client_Row"])])):(i(),u("div",Jl,[l(R)?(i(),u("div",es,[f(qe,{color:"primary",size:"3em",thickness:2}),ts])):(i(),u("div",ls," Order Detail "))]))]),_:1},8,["isOpen"])):k("",!0),l(R)=="loading"?(i(),C(me,{key:2,isOpen:l(R)},{default:b(()=>[f(qe,{color:"primary",size:"3em",thickness:2}),ss]),_:1},8,["isOpen"])):k("",!0),f(me,{isOpen:l(Z),onEmitClick0:t[7]||(t[7]=y=>ce(Z)?Z.value=y:Z=y)},{default:b(()=>[f(Ll,{onConfirmButton:l(Z),header:l(wt),title:"Yes",textcolor:"black",background:"green",title2:"No",textcolor2:"green",background2:"red",style:{padding:"40px","border-radius":"5px"}},null,8,["onConfirmButton","header"])]),_:1},8,["isOpen"]),l(d)=="clients"&&l(ye)=="buycart"?(i(),C(me,{key:3,isOpen:l(d),onEmitClick0:t[16]||(t[16]=y=>ce(d)?d.value=!1:d=!1)},{default:b(()=>{var y,s,V,E,L,j;return[a("div",as,[Number((s=(y=l(o))==null?void 0:y.isOpen)!=null?s:!1)&&Number((E=(V=l(o))==null?void 0:V.quantity)!=null?E:!1)?(i(),u("div",us,[(L=l(c).orderID)!=null&&L?(i(),u("div",rs,[a("div",ds,[f(ft,{style:{padding:"0px",margin:"0px"},title:null,quantity:l(c).quantity,price:l(o).netPrice,currency:l(o).currency,onstore:l(o).quantity,background2:"white",background:"white",onDecreaseButton:t[8]||(t[8]=m=>{var P;return l(c).quantity=parseFloat((P=l(c).quantity)!=null?P:1)-1}),onIncreaseButton:t[9]||(t[9]=m=>{var P;return l(c).quantity=parseFloat((P=l(c).quantity)!=null?P:1)+1})},null,8,["quantity","price","currency","onstore"])]),a("div",cs,[f(gt,{_this:l(o),rowProp:l(o),__thisIndex:l(v),_this_RowsChecked:l(H),_pageSettings:l(_),onBuyIndex:t[10]||(t[10]=m=>l(p)._directBuyer(m)),onCartIndex:t[11]||(t[11]=m=>l(p)._directBuyer(m))},null,8,["_this","rowProp","__thisIndex","_this_RowsChecked","_pageSettings"])])])):k("",!0)])):(i(),u("div",ns,[l(o).netPrice?(i(),u("div",os,"Product is sold out!")):(i(),u("div",is," Sorry, Price isn't fixed yet! "))])),(j=l(M))!=null&&j?(i(),u("div",_s,[a("h4",hs," You have "+O(l(M).length)+" orders ",1),f(Zl,{_this_userOwned:l(ge),this_client_Row:l(c),this_client_Rows:l(M),_profile:he._profile,_pageSettings:l(_),active_foreignModelIndex:l(x),onDischargeIndex:t[12]||(t[12]=m=>ce(x)?x.value=m:x=m),onSelectIndex:t[13]||(t[13]=m=>l(p).selectedIndex_(m)),onDeleteIndex:t[14]||(t[14]=m=>l(p)._remove(m)),onUpdateIndex:t[15]||(t[15]=m=>l(p)._update_foreign(m))},null,8,["_this_userOwned","this_client_Row","this_client_Rows","_profile","_pageSettings","active_foreignModelIndex"])])):(i(),u("div",vs,[l(M)==null?(i(),C(qe,{key:0,color:"blue",size:"5em",thickness:5})):(i(),u("div",ys,"Your Cart is Empty!"))]))])]}),_:1},8,["isOpen"])):k("",!0),(n=l(be).length)!=null&&n?(i(),C(ct,{key:4,messages:(h=l(be))!=null?h:[],onCloseButton:t[17]||(t[17]=y=>be.value=[])},null,8,["messages"])):k("",!0),(S=l(Se).length)!=null&&S?(i(),C(ct,{key:5,messages:(B=l(Se))!=null?B:[{}],onCloseButton:t[18]||(t[18]=y=>Se.value=[])},null,8,["messages"])):k("",!0),(oe=l(Ce).length)!=null&&oe?(i(),C(zl,{key:6,messages:(ue=l(Ce))!=null?ue:[{}],onCloseButton:t[19]||(t[19]=y=>Ce.value=[])},null,8,["messages"])):k("",!0),(nt=l(mt).message)!=null&&nt?(i(),C(dt,{key:7},{default:b(()=>[_e(" Seesion Error ! please wait to login. ")]),_:1})):(i(),C(dt,{key:8,class:"ts-box-fill onedlayout ccolumn cj-center fontStyle-dense"},{default:b(()=>{var y;return[((y=l(g))!=null?y:!1)&&l(g).length?(i(),u("div",fs,[l(_).tableView=="main"?(i(),C(yt,{key:0,rows:l(g),columns:l(ke),filterMethod:l(Tt),filter:Jt.value,"visible-columns":he.visible_modelCols_label_Props,"virtual-scroll":"","row-key":"id",rowIndex:"true",inFullscreen:!0,"no-data-label":"Data Error","rows-per-page-options":[0],"hide-top":"","hide-bottom":"","hide-header":"",style:{"padding-top":"10vh"},class:"bgdark"},{body:b(s=>[l(g).length?(i(),C(xe,{key:0,props:s,class:"column col-11 q-gutter-xs q-tr--no-hover fit fontbstyle",style:{"min-height":"50vh",border:"0px solid blue",padding:"0px",margin:"0px"}},{default:b(()=>[f(El,{class:"mainRow-size ccol-12 onedlayout crow"},{default:b(()=>{var V,E,L,j,m,P,re;return[a("div",gs,[f(_t,{loading:"lazy",src:l(v)==s.rowIndex&&l(ne)?s.row.saleitgr[l(ne)]:s.row.saleitgr[0],"spinner-color":"orange",class:"ccol-grow raised boxStyle-dense radiussm bg",style:{}},null,8,["src"]),a("div",ps,[s.rowIndex==l(v)?(i(),u("div",ws,[a("div",ms,[a("div",{class:"",onClick:w=>{var z;return G("userID",(z=s.row.userID)!=null?z:null)}},[a("div",bs,[a("div",Ss,[a("i",Cs,O(s.row.fphone),1)]),ks]),a("div",Os,[s.row.userID!=l(r)._profile.id?(i(),u("button",{key:0,class:"BBoxStyle-dense p-sidesm fontStyle-dense",onClick:w=>l(I)._following({thisIndex:s.rowIndex,id:s.row.id,thisOps:"following",thisSubOps:"increase"})},Bs,8,Is)):k("",!0),a("h5",Ds,O(s.row.fcreatedAt),1)])],8,xs)]),a("div",Ms,[(i(!0),u(Me,null,ut(s.row.saleitgr,(w,z)=>(i(),C(rt,{outline:"",key:z,onMouseover:De=>Be(s.rowIndex,z),class:"col-1 column transparent q-pa-none no-border",style:{"max-width":"7vw"}},{default:b(()=>[a("img",{src:w,class:"col fit shadow-2 rounded-borders q-pa-none",style:{"aspect-ratio":"1/1","min-width":"100%"}},null,8,qs)]),_:2},1032,["onMouseover"]))),128)),f(rt,{flat:"",dense:!0,icon:"zoom_in",onClick:w=>Be(s.rowIndex,0,"onZoom"),onMouseover:w=>Be(s.rowIndex,0,"onZoom")},{default:b(()=>[f(Cl,null,{default:b(()=>[_e("Look Closer")]),_:1})]),_:2},1032,["onClick","onMouseover"])]),a("div",Ps,[f(ht,{class:"q-py-sm fontbstyle col-auto"},{default:b(()=>[a("div",null,[a("button",{class:"BBoxStyle-dense bgsmokey radiusxs fontStyle-dense",onClick:w=>l(I)._detailView(s.row.id,s.rowIndex,"details","selected","detailCard")},Us,8,$s)])]),_:2},1024),f(ht,null,{default:b(()=>[f(Kl,{rowProp:s.row,__thisIndex:s.rowIndex,_this_RowsChecked:l(H),_pageSettings:l(_),onBuyIndex:t[20]||(t[20]=w=>l(I).selectedRow_ForeignRows(w)),onCartIndex:t[21]||(t[21]=w=>l(p)._directBuyer(w)),onRateIndex:t[22]||(t[22]=w=>l(I)._rating(w))},null,8,["rowProp","__thisIndex","_this_RowsChecked","_pageSettings"])]),_:2},1024)])])):(i(),u("div",Fs,[a("button",{class:"BBoxStyle-flat bgsmokey radiusxxs fontStyle-dense",onClick:w=>l(I)._detailView(s.row.id,s.rowIndex,"hover","detailCover")},[a("h4",Vs,O(l($).more[Number((V=l(_).language)!=null?V:1)]),1)],8,Ns),Es,a("div",Ls,[a("i",js,O(s.row.fphone),1)])]))]),a("div",zs,[s.row.isOpen?(i(),u("button",Ts,[a("h4",As,O(l($).open[Number((E=l(_).language)!=null?E:1)]),1)])):(i(),u("div",Ys,[(L=s.row.tClient)!=null&&L?(i(),u("button",Zs,[a("h4",Ks,O(l($).sold[Number((j=l(_).language)!=null?j:1)]),1)])):(i(),u("button",Hs,[a("h4",Ws,O(l($).pending[Number((m=l(_).language)!=null?m:1)]),1)]))])),(P=s.row.likes)!=null&&P?(i(),u("button",{key:2,class:"fontStyle-dense BBoxStyle-dense bggrey txtlight radiusmd",onClick:w=>l(I)._likes({thisIndex:s.rowIndex,id:s.row.id,thisOps:"likes",thisSubOps:"increase"})},[a("h4",Gs," Like "+O(s.row.likes.like),1)],8,Xs)):k("",!0),a("button",{class:"fontStyle-dense BBoxStyle-dense bggrey txtlight radiusmd",onClick:w=>l(I).selectedRow_ForeignRows(s.rowIndex,"comments")},ta,8,Js),(re=s.row.likes)!=null&&re?(i(),u("button",{key:3,class:"fontStyle-dense BBoxStyle-dense bggrey txtlight radiusmd",onClick:w=>l(I)._detailView(s.row.id,s.rowIndex,"details","hover","detailCover")},aa,8,la)):k("",!0),l(r)._profile.id==s.row.userID?(i(),u("div",na,[a("button",{class:"fontStyle-dense BBoxStyle-dense bggrey txtlight radiusmd",onClick:w=>sl(s.rowIndex)},ua,8,ia),a("button",{class:"fontStyle-dense BBoxStyle-dense bggrey txtlight radiusmd",onClick:w=>l(I)._delRow(null,s.rowIndex,s.key)},ca,8,ra)])):k("",!0)])])]}),_:2},1024)]),_:2},1032,["props"])):(i(),C(xe,{key:1,class:"column col-11 q-gutter-xs q-tr--no-hover fit fontbstyle",style:{"min-height":"50vh",border:"0px solid blue",padding:"0px",margin:"0px"}},{default:b(()=>[_e(" Error Loading Product ... ")]),_:1}))]),_:1},8,["rows","columns","filterMethod","filter","visible-columns"])):l(_).tableView=="cards"?(i(),C(yt,{key:1,flat:"",bordered:"",rows:l(g),columns:l(ke),"virtual-scroll":"","row-key":"id",rowIndex:"true",grid:"","hide-header":"",inFullscreen:!0,pagination:l(pe),"onUpdate:pagination":t[27]||(t[27]=s=>ce(pe)?pe.value=s:pe=s),loading:e.loading,"hide-pagination":"",onRequest:al,"hide-top":"","hide-bottom":"","no-data-label":"",class:"boxStyle-dense thinbar",style:{"padding-top":"5vh"}},{header:b(s=>[f(xe,{props:s,class:"ts-box-fillauto onedlayout crow",style:vl([{height:"5vh",position:"fixed","z-index":"5"},he.isScrolledUp?"top:0vh":"top:6vh;padding-top:0px"])},null,8,["props","style"])]),item:b(s=>[f(xe,{props:s,class:"boxStyle-dense bggrey"},{default:b(()=>{var V,E,L,j,m,P,re,w,z,De,it,ot;return[a("div",_a,[a("div",null,[(E=(V=s.row)==null?void 0:V.saleitgr)!=null&&E?(i(),C(_t,{key:0,src:s.row.saleitgr[0],style:{"aspect-ratio":"1/1.5","min-width":"40vw"},class:""},null,8,["src"])):k("",!0)]),typeof l(v)=="number"&&l(v)==s.rowIndex?(i(),u("div",ha,[l(R)=="hover"?(i(),u("div",va,[a("button",{class:"BBoxStyle-dense bgsmokey radiusmd",onClick:T=>l(I)._detailView(s.row.id,s.rowIndex,"details","selected","detailCard")},[a("h4",null,O(l($).details[Number((L=l(_).language)!=null?L:1)]),1)],8,ya),s.row.isOpen?(i(),u("button",{key:0,class:"BBoxStyle-dense p-sidesm bgwarning radiusmd",onClick:T=>l(I)._detailView(s.row.id,s.rowIndex,"clients","selected","buyPaper")},[a("h4",ga,O(l($)["buy open"][Number((j=l(_).language)!=null?j:1)]),1)],8,fa)):k("",!0)])):l(d)=="clients"&&l(ye)=="buyPaper"?(i(),u("div",pa,[((P=(m=l(o))==null?void 0:m.price)!=null?P:!1)&&((w=(re=l(o))==null?void 0:re.quantity)!=null?w:!1)&&l(c)?(i(),u("div",wa,[f(ft,{style:{},quantity:l(c).quantity,price:l(o).netPrice,currency:l(o).currency,background2:"white",background:"white",onDecreaseButton:t[23]||(t[23]=T=>{var de;return l(c).quantity=parseFloat((de=l(c).quantity)!=null?de:1)-1}),onIncreaseButton:t[24]||(t[24]=T=>{var de;return l(c).quantity=parseFloat((de=l(c).quantity)!=null?de:1)+1})},null,8,["quantity","price","currency"]),a("div",ma,[f(gt,{_this:l(o),rowProp:s.row,__thisIndex:s.rowIndex,_this_RowsChecked:l(H),_pageSettings:l(_),onBuyIndex:t[25]||(t[25]=T=>l(p)._directBuyer(T)),onCartIndex:t[26]||(t[26]=T=>l(p)._directBuyer(T))},null,8,["_this","rowProp","__thisIndex","_this_RowsChecked","_pageSettings"])])])):(i(),u("div",xa,"Sale Closed !"))])):k("",!0)])):(i(),u("div",ba,[a("div",Sa,[s.row.isOpen?(i(),u("button",Ca,[a("h4",ka,O(l($).open[Number((z=l(_).language)!=null?z:1)]),1)])):(i(),u("div",Oa,[(De=s.row.tClient)!=null&&De?(i(),u("button",Ia,[a("h4",Ra,O(l($).sold[Number((it=l(_).language)!=null?it:1)]),1)])):(i(),u("button",Ba,[a("h4",Da,O(l($).pending[Number((ot=l(_).language)!=null?ot:1)]),1)]))])),l(H).includes(s.row.id)?(i(),u("div",Ma,[a("div",qa,[_e(O((l(_).language,"Saved"))+" ",1),f(yl,{name:"save"})])])):k("",!0)]),a("div",Pa,[a("div",null,[a("button",{class:"BBoxStyle-dense",onClick:T=>l(I)._detailView(s.row.id,s.rowIndex,"details","hover","detailPaper")},Ua,8,$a)])])]))])]}),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading"])):(i(),u("div",Fa,"No Data"))])):(i(),u("div",Na,[f(fl,{inset:""}),_e(" please wait, while fetching data.... "),a("div",Va,[(i(),u(Me,null,ut([1,2,3,4,5],s=>f($e,{class:"col",square:"",key:s})),64))]),a("div",Ea,[f($e,{class:"col"}),f($e,{class:"col-4",square:""})]),a("div",La,[a("button",{onClick:t[28]||(t[28]=s=>G(null,null,16))},"Home")])]))]}),_:1}))],64)}}};export{zn as default};
