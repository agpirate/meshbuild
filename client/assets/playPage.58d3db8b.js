import{l as n,X as r,W as s,u as t,c as K,F as Re,bd as Xe,Y as k,R as yl,r as J,w as ie,o as gl,a as ml,m as S,b as Z,p as C,f as u,n as c,aP as pl,Q as U,bm as ee,Z as ve,bF as wl,a4 as fe,be as xt,bf as bt,bp as xl,bo as bl}from"./index.09b8edac.js";import{Q as Ye}from"./QPage.9de5094f.js";import{U as Sl,u as Cl,a as kl,b as Il,c as Ol,d as Rl,e as Bl,f as Dl,t as Ml,s as $l,g as ql,h as Pl,_ as St,Q as Ct,i as Ze,j as Ke}from"./crudThisModel.16f78383.js";import{c as Ql,e as Fl,u as Ul,a as jl,d as Vl,f as Nl,g as Ll,_ as kt,Q as It,h as Ie,b as zl}from"./saleitModel.2ff4b8ea.js";import{u as El,a as Al,d as Ot,b as We,_ as Tl,Q as Rt}from"./debugMixin.89fce45a.js";import{Q as Oe,e as Yl,d as Zl}from"./QSelect.bbd526c5.js";import{_ as Kl,Q as Ge}from"./confirmButton.688a186a.js";import{u as Wl}from"./use-quasar.17138886.js";import{a as Gl,u as Xl,c as Hl,_ as Bt,b as Jl}from"./buyAction.1fbce56f.js";import{_ as es,a as ts,b as Dt}from"./orderDetail.9bc56c53.js";import{_ as ls,u as ss}from"./queryBuilder.963dd08a.js";import{t as as}from"./thisQueryBuilder.ff5ee46a.js";import"./axios.05cf8750.js";import"./QRating.30b2e101.js";const ns={class:"",style:{"font-family":"Arial, sans-serif","background-color":"#f4f4f4",display:"flex","justify-content":"center","align-items":"center",height:"100vh",margin:"0"}},is={class:"slides"},os=["src"],us={__name:"imageSlider",props:{images:{type:Object,default:()=>({})}},emits:["create","update","close"],setup(B,{emit:Be}){var _=B;let j=0;async function ye(N){!_.images.length||(j+=N,j<0?j=_.images.length-1:j>=_.images.length&&(j=0))}return(N,oe)=>(n(),r("div",ns,[s("div",is,[s("img",{src:B.images[t(j)],alt:"Image 1",style:{width:"100%",height:"auto"}},null,8,os)]),s("button",{onClick:oe[0]||(oe[0]=W=>ye(1)),style:{position:"absolute",top:"50vh",right:"0px","z-index":"5"}},"Next")]))}},rs={class:"ts-yOverflow indexOrder-Scroll-size onedlayout ccolumn fontStyle-dense"},ds={key:0},cs={class:"onedlayout ccrow cj-between ia-center fontStyle-dense txtsmokey"},_s={class:"ri-phone-fill"},hs={class:"onedlayout crow ia-center boxStyle-dense fontStyle-dense txtsmokey"},vs=["onClick"],fs={key:1,class:"boxStyle-dense bgwarning"},ys={class:"boxStyle-dense radiusxxs boxShadowxxs-darksmokey txtsmoke",style:{width:"23vw",overflow:"hidden","text-overflow":"ellipsis"}},gs={key:1},ms=s("h6",{style:{},class:"txtlight"}," No Comments [ADD New] ",-1),ps=[ms],ws={__name:"commentView",props:{_profile:{type:Object,default:()=>({})},this_chat_Row:{type:Number,default:null},this_chat_Rows:{type:Number,default:null},_pageSettings:{type:Object,default:()=>({})},messages:{type:Object,default:()=>({})}},emits:["selectIndex"],setup(B,{emit:Be}){const _=B;var j=K(()=>_.this_chat_Row);const ye=Be;function N(oe,W,L,te=null){ye("selectIndex",{foreignIndex:W,foreignOps:L,foreignOpsStatus:te})}return(oe,W)=>(n(),r("div",rs,[B.this_chat_Rows.length?(n(),r("div",ds,[(n(!0),r(Re,null,Xe(B.this_chat_Rows,(L,te)=>{var Pe;return n(),r("div",{key:te,class:""},[s("div",cs,[s("i",_s,k(L.phone),1),s("div",hs,[s("span",null,k(L.fcreatedAt),1),(L.userID==B._profile.id||oe._this_userOwned)&&L.id!=t(j).id?(n(),r("button",{key:0,class:"BBoxStyle-dense txtposetive",onClick:Qe=>N("comments",te,"edit",null)}," edit ",8,vs)):(n(),r("div",fs))])]),s("div",ys,k((Pe=L.comment)!=null?Pe:""),1)])}),128))])):(n(),r("div",gs,ps))]))}},xs={key:0,class:"col"},bs={class:"bgdark detailRow-size"},Ss={key:3,style:{position:"fixed",bottom:"100px",left:"2%","z-index":"100"}},Cs=s("h4",{class:""}," Loading ",-1),ks={key:0,class:"",style:{"min-width":"99vw","min-height":"100vh"}},Is={class:"ps-relative ccol-grow onedlayout crow"},Os={class:"ps-absolute parent-fit boxStyle-dense onedlayout crow"},Rs={key:0,class:"ccol-grow onedlayout ccolumn cj-between ia-start"},Bs={class:"boxStyle-dense radiusxs",style:{"min-width":"30%","border-bottom-left-radius":"0px"}},Ds=["onClick"],Ms={class:"onedlayout crow cgap-5 cj-between ia-center"},$s={class:"boxStyle-dense radiusxxs bgsmokey fontStyle-base txtgrey"},qs={class:"ri-phone-fill"},Ps=s("i",{class:"txtsystem ri-verified-badge-line"},null,-1),Qs={class:"onedlayout crow ia-center boxStyle-flat radiusxxs fontStyle-dense txtgrey"},Fs=["onClick"],Us=s("p",{class:"txtlight"}," Follow |",-1),js=[Us],Vs={class:"bggreysmokey radiusxxs txtlight"},Ns={class:"onedlayout ccolumn ia-start cgap-3"},Ls=["src"],zs={class:"onedlayout crow cj-between",style:{width:"100%"}},Es=["onClick"],As=s("h4",null," Show Details ",-1),Ts=[As],Ys={key:1,class:"onedlayout crow ia-center bggreysmokey radiusxxs boxStyle-dense fontStyle-dense",style:{"max-height":"5vh"}},Zs=["onClick"],Ks={class:"txtprimary"},Ws=s("h4",null," | ",-1),Gs={class:"onedlayout crow cgap-3 fontStyle-dense txtsystem"},Xs={class:"txtsystem"},Hs={class:"ri-phone-fill"},Js={class:"col-auto"},ea={class:"boxStyle bggreysmoke radiusxxs onedlayout ccolumn ia-center cgap-2"},ta=["onClick"],la=s("div",{class:"horizontalLineBlack"},null,-1),sa=["onClick"],aa=s("h4",{class:"txtposetive"}," Open ",-1),na=[aa],ia={key:1,class:"text-red"},oa=s("div",{class:"horizontalLineBlack"},null,-1),ua=["onClick"],ra={key:0,class:"ps-absolute parent-tr txtposetive"},da=["onClick"],ca={key:2,class:"onedlayout ccolumn"},_a=["onClick"],ha=s("p",null," edit ",-1),va=["onClick"],fa=s("p",null," edit ",-1),ya=s("div",{style:{}},null,-1),ga={key:0},ma={key:0,class:"boxStyle-dense bggrey radiusxxs"},pa={key:0,class:"onedlayout ccolumn"},wa={class:"onedlayout ccolumn ia-start boxStyle-dense fontStyle-dense txtlight"},xa={class:"txtj-start"},ba={key:0,style:{width:"99%"},class:"onedlayout ccolumn"},Sa={class:"col-auto q-pa-xs text-bold justify-end row"},Ca={class:"txtlight"},ka={key:1,style:{width:"99%"},class:"onedlayout ccolumn"},Ia=s("div",{class:"justify-end row font0bstyle"},[s("div",{style:{}},"Editing..")],-1),Oa={class:"column"},Ra={class:"onedlayout ccrow cj-between"},Ba={class:""},Da={class:"txtposetive"},Ma={key:1,class:"boxStyle-dense"},$a={class:"boxStyle-dense bgsmokey radiusxs"},qa={class:"boxStyle-dense bgdark onedlayout ccolumn cgap-0"},Pa={key:0},Qa={key:0,class:"q-pa-sm text-red"},Fa={key:1,class:"q-pa-sm"},Ua={key:1,class:""},ja={key:0,class:"boxStyle-dense bgdark onedlayout ccolumn cgap-0"},Va={class:""},Na={class:"onedlayout crow cgap-2 cj-end"},La={key:2,class:"onedlayout ccolumn fontStyle-dense"},za={class:"txtlight boxStyle-dense bggreysmokey p-sidesm"},Ea={key:3,class:"onedlayout crow cj-center ia-center"},Aa={key:1},Ta=["onClick"],Ya={class:"onedlayout crow ia-center boxStyle-flat fontStyle-dense"},Za={class:"txtsmokey"},Ka={class:"onedlayout ccolumn ps-relative"},Wa={key:0,class:"boxStyle-flat bgdrop-light onedlayout ccolumn ps-absolute parent-fit",style:{}},Ga={class:""},Xa={key:0},Ha={key:1,class:"boxStyle-flat onedlayout ccolumn ps-absolute parent-fitauto"},Ja={key:0,class:"fontStyle-dense"},en={class:"txtsystem"},tn={class:"boxStyle-dense fontStyle-dense bgdark"},ln={class:"boxStyle-dense onedlayout crow cj-between fontS"},sn={key:0,class:"fontStyle-dense"},an=s("h2",{class:"txtwarning"}," Open ",-1),nn=[an],on={key:1,class:"radiusmd bgnegative fontStyle-dense"},un=s("h3",{class:"txtlight"},"Cosed ",-1),rn=[un],dn={class:"fontStyle-dense onedlayout ccolumn ia-end"},cn={class:"txtgrey"},_n={class:"onedlayout crow cj-evenly fontStyle-dense"},hn=["onClick"],vn={class:"txtsmoke"},fn=["onClick"],yn={class:"txtsmoke"},gn={key:2},mn={key:1,class:"onedlayout ccolumn cj-center ia-center",style:{width:"100%",height:"90vh"}},pn={style:{width:"90%"},class:"col-auto q-gutter-xs transparent row"},wn={style:{width:"80%"},class:"col q-pa-xs row q-gutter-xs"},xn=s("h4",null," please wait, while fetching data.... ",-1),Ui={__name:"playPage",props:{_profile:{type:Object,default:()=>({})},_acctype:{type:Object,default:()=>{}},lytCreatRow:{type:Boolean,default:!1},lytSearchRow:{type:String,default:""},lytButtonRow:{type:String,default:""},isScrolled:{type:Boolean,default:!1},isScrolledUp:{type:Boolean,default:!1},_pageSetting:{type:Object,default:()=>({})},_thisMedia:{type:Object,default:()=>({})},_tableModel_Cols_Props:{type:Object,default:()=>({})},_tableModel_Row_Props:{type:Object,default:()=>({})},visible_modelCols_label_Props:{type:Object,default:()=>({})}},emits:["_this_Query"],setup(B,{emit:Be}){let{_pageSettings:_,pageName:j,metaData:ye,pagination:N,paginationId:oe,paginationCard:W}=Gl(),{userInformation:L,modelRow_Builder:te,foreign_modelRow_Builder:Pe,foreign__tableModel_Cols:Qe}=Ql();var{active_fileName:He,active_fileIndex:ge,__thisFileOps_onCard:Mt,__thisFileOps_onZoom:me,thisOps:bn,thisOpsCard:Sn,thissubOpsStatus:Cn,__thisBox:V,__thisIndex:h,__thisOps:g,__thisOpsCard:Fe,__thisOpsStatus:q,__thissubOps:$t,__thissubOpsStatus:qt,active_foreignModel:Pt,active_foreignModelDialog:ue,active_foreignModelIndex:x,active_foreignModelOps:le,active_foreignModelOpsStatus:Je,active_foreignModelsubOps:Qt}=Fl(),{_fileAttributeName:re,_cameraBox:kn,_fileSourceFoCam:In,_fileAsSRC:On,_fileAsRaw:Rn,_liveFeedSRC:Bn,_fileAsSRCIndex:Dn,_cameraDevice:Mn,_listCameraSource:$n,_selectedCameraById:qn,_selectedCameraByface:Pn,_liveFeedRawStreaming:Qn,_fileSourceFolder:Fn,_fileAsSRCOps:Un,_fileAsSRCOpsCall:jn,_resetFileSource:Vn}=Ul();const{thisSchemaPath:et,thisSchemaFile:tt,_debugObj:Nn,_validateThis:Ln}=jl();let{createKey:zn,updateKey:En,delKey:An,_this_Model_Url:Ft,_thisService:Ut,activeRow:jt,_this:i,message:Tn,messageTimer:Yn,createData:Vt,updateData:De,readData:Zn,readFData:Kn,deleteData:Nt}=Sl();const{Loadingpage:Wn,Loadingevent:Lt,DoneMessage:Ue,WarnthisMessage:je,timerLoadevent:Me,timerDone:$,timerError:z}=El(),{status_KnowthisMessage:Ve,status_timerInformthis:zt}=Vl();let{queryBuilder_foreign:lt}=ss(),d=B,{Model_Name:Gn,Model_Url:Et,saleit_schemaPath:At,saleit_schemaFile:Tt,locked_modelCols_label:Xn,flexInvisible_modelCols_labels:Hn,useric_modelCols_label:Jn}=Nl(),{_this_Schema:ei,_tableModel_Cols:Ne,_tableModel_Row:Yt,all_modelCols_label:ti,allowed_modelCols:li,visible_modelCols_label:si}=Ll(),{_this_Query:$e,accModel_Row:ai,_this_Rows:b,_this_RowsChecked:se,_this_Details:ni,_this_userOwned:qe}=Cl(),{saleitClient_Name:ii,saleitClient_schemaPath:Zt,saleitClient_schemaFile:Kt,locklabels_saleitClient_Cols:oi,invislabels_saleitClient_Cols:st,userlabels_saleitClient_Cols:Wt,plugable_client_Cols:ui,labels_plugable_client_Cols:ri}=kl(),{saleitClient_Schema:at,saleitClient_Cols:nt,saleitClient_Row:E,alllabels_saleitClient_Cols:di,acclabels_saleitClient_Cols:ci,vislabels_saleitClient_Cols:Gt}=Il(),{this_client_Query:it,this_client_Rows:P,this_client_RowsChecked:_i,this_client_Row:y,_this_client_Details:hi,this_client_userOwned:vi}=Ol(),{saleitChat_Name:fi,saleitChat_schemaPath:Xt,saleitChat_schemaFile:Ht,locklabels_saleitChat_Cols:yi,invislabels_saleitChat_Cols:Jt,userlabels_saleitChat_Cols:el}=Rl(),{saleitChat_Schema:ot,saleitChat_Cols:ut,saleitChat_Row:pe,alllabels_saleitChat_Cols:gi,acclabels_saleitChat_Cols:mi,vislabels_saleitChat_Cols:tl}=Bl(),{this_chat_Query:rt,this_chat_Rows:ae,this_chat_RowsChecked:pi,this_chat_Row:O,_this_chat_Details:wi,this_chat_userOwned:xi}=Dl();var{priceFilter:ll,_enableRowFilter:bi,_thisFiltering:sl,_filteredRow:al}=Xl();const dt=Wl(),ct=yl();Al(ye);const nl=Be;J(null);let _t=J(null),ht=J(null),vt=J(null),Le=J(null),ne=J(null),il=J("Are You Sure ?");L.value=d!=null?d:!1,et.value=At,tt.value=Tt;const ol=K(()=>({search:d.lytSearchRow,priceFilter:ll}));Ut.value=Ml();const A=$l(),T=ql(),de=Pl();Ne=K(()=>{var l,e;return(l=d._tableModel_Cols_Props)!=null&&l?(ul(),(e=d._tableModel_Cols_Props)!=null?e:null):null}),Yt=K(()=>{var l,e;return(l=d._tableModel_Row_Props)!=null&&l&&(e=d._tableModel_Row_Props)!=null?e:null});async function ul(){await Ot(Zt,Kt).then(o=>(o&&(at.value=o),!0)),await Ot(Xt,Ht).then(o=>(o&&(ot.value=o),!0)),dt.screen.lt.md&&st.value.push("");let l=await Qe(at.value,st.value);nt.value=l[0],Gt.value=l[1],await rl(nt.value);let e=await Qe(ot.value,Jt.value);return ut.value=e[0],tl.value=e[1],await dl(ut.value),!1}async function rl(l){return E.value=await te(Wt.value,l),E.value.orderID=await St(),E.value.userID=d._profile.id,E.value.phone=d._profile.phone,E.value.phoneCode=d._profile.phoneCode,E.value.quantity=1,!0}async function dl(l){return pe.value=await te(el.value,l),pe.value.userID=d._profile.id,pe.value.phone=d._profile.phone,pe.value.phoneCode=d._profile.phoneCode,!0}ie(d._pageSetting,(l,e)=>(_.value=Object.assign(_.value,l),!0)),_t=K(()=>d.lytSearchRow),ie(_t,async(l,e)=>{l&&(_.value.tableView="cards",Y("lytSearchRow",l))}),ht=K(()=>d.lytButtonRow),ie(ht,async(l,e)=>{l&&(_.value.tableView="cards",Y(l[0],l[1],l[2]))}),Le=K(()=>A.getstatus_Rows),ie(Le,async(l,e)=>{let o;if(q.value=!1,l==null)return o="No Data.",!0;if(l=="noupdates")o="No Updates.";else if(l==!1)o="Locked";else{if(l==!0)return o="Loading ....",!0;if(l=="BadConnection")o="Offline";else return o=l,await Me({message:1},2e3,"...Session Closed"),l=="Unauthorized"&&gt(),!1}return zt(5e3,o,"Product & Services"),!0}),ie(i,(l,e)=>{if(jt.value=l,Ft.value=Et,h.value==null)return i.value.currency="ETB",!0;try{qe.value=l.userID==d._profile.id}catch{[qe.value]=[!1]}return!0}),ie(al,(l,e)=>{}),vt=K(()=>d.lytCreatRow),ie(vt,async(l,e)=>(await _e({thisIndex:null,thisOpsStatus:null,thisOps:"Create_this",thisOpsCard:"thisCard",stopSync:null}),V.value=!0,!0));async function cl(l=null){return re.value=null,await _e({thisIndex:l,thisOpsStatus:null,thisOps:"Update_this",thisOpsCard:"thisCard",stopSync:null}),V.value=!0,!0}async function Y(l=null,e=null,o=null){var D;q.value="loading",A.set_syncLock(!0),clearInterval(ce),Me({this_Query:0},0,"Updating..."),b.value=[],le.value=!1,h.value=null;let w={id:null,content:null,header:null,qweight:{},geoSearch:(D=_.value.geoSearch.value)!=null?D:"off",queryOperator:"productSpecific-or",limits:100,skips:0},I=await as($e.value,l,e,o);return $e.value={...w,...I[0]},nl("_this_Query",$e.value),le.value=I[2],await fl(A,$e.value),_.value.tableView=I[1],!0}let ce="";b=K(()=>_l(A.getDatas));function _l(l){return Array.isArray(l)?l.length?l:(_.value.tableView="cards",b.value):[]}async function ze(){var e;P.value=null;let l={activeUserID:d._profile.id,userItemOwnership:qe.value,activeItemID:(e=i.value.id)!=null?e:"",queryOperator:"and",otherQueries:{store:"buy"}};return it.value=await lt(l),await Ae(T,it.value).then(async o=>(o&&(P.value=o,await we(le.value,null)),!0)).catch(o=>!1)}async function Ee(){var e;P.value=null;let l={activeUserID:d._profile.id,userItemOwnership:!0,activeItemID:(e=i.value.id)!=null?e:"",queryOperator:"and",otherQueries:{store:"buy"}};return rt.value=await lt(l),await Ae(de,rt.value).then(o=>(o&&(ae.value=o,we(le.value,null)),!0))}async function _e(l={thisIndex:null,thisOpsStatus:null,thisOps:null,thisOpsCard:null,stopSync:null}){var e,o;if(h.value=l.thisIndex,(e=l.stopSync)!=null&&e&&(l.thisOps=="clients"?T.set_syncLock(!0):de.set_syncLock(!0)),re.value=null,ge.value=null,V.value=null,$t.value=null,qt.value=null,He.value="saleitgr",q.value=l.thisOpsStatus,g.value=l.thisOps,Fe.value=l.thisOpsCard,l.thisIndex==null)i.value=Object.assign({},d._tableModel_Row_Props),i.value.geolocation=d._profile.geolocation,i.value.location=d._profile.location,i.value.currency=(o=d._profile.currency)!=null?o:"",i.value.userID=d._profile.id,i.value.phoneCode=d._profile.phoneCode,i.value.phone=d._profile.phone;else try{i.value=Object.assign({},b.value[l.thisIndex])}catch{}return!0}async function we(l,e,o=null,w=null){var I,D,xe,be;x.value=e,o&&o.set_syncLock(!0),Pt.value=null,ue.value=null,Qt.value=null,Je.value=w,le.value=l;try{if(g.value=="comments")e==null?(O.value=Object.assign({},pe.value),O.value.userID=d._profile.id,O.value.saleitID=(D=(I=i.value)==null?void 0:I.id)!=null?D:""):O.value=Object.assign({},ae.value[e]);else if(e==null||g.value=="details")y.value=Object.assign({},E.value),y.value.userID=d._profile.id,y.value.phoneCode=d._profile.phoneCode,y.value.currency=i.value.currency,y.value.location=i.value.location,y.value.geolocation=i.value.geolocation,y.value.saleitID=(be=(xe=i.value)==null?void 0:xe.id)!=null?be:"",y.value.orderID=await St();else try{y.value=Object.assign({},P.value[e])}catch{}}catch{}return!0}const ft=async function(l,e,o){let w=x.value==l;return l==null||w&&le.value==e?(await we(null,null,g.value=="clients"?T:"",null),!0):!1};let m={_add:async()=>(x.value=null,y.value=Object.assign({},E.value),!0),selectedIndex_:async(l={foreignIndex:null,foreignOps:null,foreignOpsStatus:null})=>(Je.value=l.foreignOps,await ft(l.foreignIndex,l.foreignOps,g.value)?!1:(await we(l.foreignOps,l.foreignIndex,g.value=="clients"?T:de,l.foreignOpsStatus),!0)),selectedIndex_RowDetail:async(l,e=null,o=null)=>{let w="clients";return await ft(e,o)?!1:(h.value=0,await Ae(A,{id:l}).then(async I=>{try{I&&(b.value[h.value]=I[h.value],await R._detailView(b.value[h.value].id,h.value,w,"selected","detailCard"),await m.selectedIndex_({foreignIndex:e,foreignOps:o,foreignOpsStatus:null}))}catch{return!0}}),!0)},selectedIndex_RowCard:async(l=null)=>{ue.value=l},_remove:async()=>{if(g.value=="comments"){let l={id:i.value.id,comments:O.value};l.thisOps=g.value,l.thisSubOps="delete";let e=await de.deleteData(l,{});if(!e.status)return z(500,"Error Creating",""),!1;$(5e3,"Removed",""),b.value[h.value]=e.data.data,ae.value.splice(x.value,1),await we(null,null,null,null)}else{let l={id:i.value.id,clients:y.value};l.thisOps=g.value,l.thisSubOps="delete";let e=await T.deleteData(l);if(!e.status)return z(500,"Error Creating",""),!1;$(5e3,"Removed",""),b.value[h.value]=e.data.data,P.value.splice(x.value,1),await m.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null})}return!0},_update_foreign:async()=>{if(x.value=null,g.value=="comments"){let l={id:i.value.id,comments:O.value};l.thisOps=g.value,l.thisSubOps="update";let e=await de.updateData(l,{});return e.status?($(5e3,"Updated Succefully",""),b.value[h.value]=e.data.data,typeof x.value=="number"&&!ue.value?ae.value[x.value]=e.data.foreignData:await Ee(),await m.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null}),!0):(z(500,"Error Updating",""),!1)}else{let l={id:i.value.id,clients:y.value};l.thisOps=g.value,l.thisSubOps="update",l.clients.store="buy";let e=await T.updateData(l,{});return e.status?($(5e3,"Updated Succefully",""),b.value[h.value]=e.data.data,typeof x.value=="number"&&!ue.value?P.value[x.value]=e.data.foreignData:await ze(),await m.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null}),!0):(z(500,"Error Updating",""),!1)}},_create_foreign:async()=>{if(g.value=="comments"){let l={id:i.value.id,comments:O.value};l.thisOps=g.value,l.thisSubOps="create";let e=await de.createData(l,{});if(!e.status)return z(500,"Error Creating",""),!1;$(5e3,"Created",""),b.value[h.value]=e.data.data,typeof x.value=="number"&&!ue.value?ae.value[x.value]=e.data.foreignData:await Ee(),await m.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null})}return!0},_directBuyer:async(l={thisOps:null,thisIndex:null,thisSubOps:null,newOps:!0})=>{var w,I,D;let e={clients:y.value};e=Object.assign(e,l),e.clients.store=l.thisSubOps;let o;if(l.newOps?o=await T.createData(e,{}):o=await T.updateData(e,{}),!o.status)return z(500,"Error Creating",""),!1;if(l.thisSubOps=="buy")$(5e3,ee.orderdone[Number((w=_.value.language)!=null?w:1)],"");else return $(5e3,ee.savedone[Number((I=_.value.language)!=null?I:1)],""),se.value.push((D=o.data.data.id)!=null?D:null),!0;return b.value[h.value]=o.data.data,typeof x.value=="number"&&!ue.value?P.value[x.value]=o.data.foreignData:await ze(),await m.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null}),!0}},R={_removeItem:async function(l=null,e=null){return h.value=null,g.value=e,delete b.value[l],!0},_detailView:async(l=null,e=null,o=null,w=null,I=null,D=null)=>(await _e({thisIndex:e,thisOps:o,thisOpsCard:I,thisOpsStatus:w,stopSync:A}),await m.selectedIndex_({foreignIndex:null,foreignOps:D,foreignOpsStatus:null}),!0),selectedRow_ForeignRows:async(l={thisIndex:null,thisOps:null,thisOpsCard:null,thisSubOps:null,this_foreignBoxOps:null})=>{var e;return console.error(l,"dddddddddjjjjjj"),await _e({thisOps:l.thisOps,thisOpsCard:(e=l.thisOpsCard)!=null?e:!1,thisIndex:l.thisIndex,stopSync:A}),await m.selectedIndex_({foreignIndex:null,foreignOps:l.this_foreignBoxOps,foreignOpsStatus:!0}),l.this_foreignBoxOps!="direct"&&(l.thisOps=="clients"?ze():Ee()),!0},_rating:async(l={thisIndex:null,id:null,thisOps:null,thisSubOps:null,thisColValue:null})=>(i.value=Object.assign(i.value,l),await De().then(async e=>(e&&($(5e3,"You Rated","Succefully Updated"),b.value[l.thisIndex]._itServiceRating++),!0)).catch(e=>!1)),_likes:async(l={thisIndex:null,id:null,thisOps:null,thisSubOps:null,thisColValue:null})=>(i.value=Object.assign(i.value,l),await De().then(async e=>(e&&($(5e3,"Liked","Succefully Updated"),b.value[l.thisIndex].likes.like++),!0)).catch(e=>!1)),_following:async(l={thisIndex:null,id:null,thisOps:null,thisSubOps:null,thisColValue:null})=>(i.value=Object.assign(i.value,l),await De().then(async e=>(e&&$(5e3,"Following ","Succefully Updated"),!0)).catch(e=>!1)),_delRow:async(l=null,e,o)=>l==null?(i.value={id:o},ne.value=R._delRow,!1):(ne.value=null,l?await Nt().then(w=>(w&&Y("userID",d._profile.id),!0)).catch(w=>!1):!1),_toCart:async(l={id:null,thisIndex:null,thisOps:null,thisSubOps:null})=>{var o,w;i.value={clients:Object.assign({store:l.thisSubOps},(o=E.value)!=null?o:{})},i.value=Object.assign(i.value,l),console.log(l,"poooooo");let e=await T.createData(i.value,{});return e.status?($(5e3,"Product Saved",""),se.value.push((w=e.data.data.id)!=null?w:null),!0):(z(500,"Error Creating",""),!1)}};async function hl(){return q.value=!0,i.value.thisOps=g.value,i.value.thisSubOps="new",await Vt().then(async l=>(Me({createData:1},1,"Updating..."),l?j!="myservice"?ct.push("/play/MyServices"):Y("userID",d._profile.id):(q.value=!1,re.value=null,!0))).catch(l=>(z(5e3,"Error Creating","Error Creating"+l),re.value=null,V.value=!1,!1))}async function vl(){return q.value=!0,i.value.thisOps=g.value,i.value.thisSubOps="update",await De().then(async l=>(Me({updateData:1},1,"Updating..."),l&&($(5e3,"Item Updated","Succefully Updated"),b.value[h.value]=Object.assign({},l),V.value=!1),q.value=!1,re.value=null,!0)).catch(l=>(z(5e3,"Error Updating","Error Updating"+l),q.value=!1,V.value=!1,re.value=null,!1))}let yt=J(25e5);const fl=async(l,e)=>(clearInterval(ce),await l.set_syncQuery(e),l.set_syncLock(!1),l.asyncDatas(),setTimeout(function(){clearInterval(ce),ce=setInterval(l.asyncDatas,yt.value)},yt.value),!0),Ae=async(l,e)=>await l.readFData(e).then(o=>o.status?o.data:!1);gl(async()=>{clearInterval(ce),await _e({thisOps:null,thisOpsCard:null,thisIndex:null,stopSync:A}),await m.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null})}),Y(),ml(async()=>(clearInterval(ce),await _e({thisOps:"clients",thisOpsCard:null,thisIndex:null,stopSync:A}),await m.selectedIndex_({foreignIndex:null,foreignOps:null,foreignOpsStatus:null}),!0));let gt=async()=>ct.push(Tl._clear());async function Te(l,e=null,o="onList"){if(h.value=l,ge.value=e,o=="onZoom"){let w={};w=b.value[l],i.value=Object.assign({},w),me.value=!0}else Mt=!0}return(l,e)=>{var o,w,I,D,xe,be,mt,pt;return n(),r(Re,null,[t(V)?(n(),S(ls,{key:0,_this:t(i),_pageSettings:t(_),__thisOpsStatus:t(q),__thisOps:t(g),active_fileName:t(He),thisSchemaFile_Rec:t(tt),thisSchemaPath_Rec:t(et),onClose:e[0]||(e[0]=v=>Z(V)?V.value=v:V=v),onUpdate_this:e[1]||(e[1]=v=>vl()),onCreate_this:e[2]||(e[2]=v=>hl())},null,8,["_this","_pageSettings","__thisOpsStatus","__thisOps","active_fileName","thisSchemaFile_Rec","thisSchemaPath_Rec"])):C("",!0),u(pl,{modelValue:t(me),"onUpdate:modelValue":e[3]||(e[3]=v=>Z(me)?me.value=v:me=v),class:"column saleitContentOps-Glass"},{default:c(()=>{var v,a;return[(a=(v=t(i))==null?void 0:v.saleitgr)!=null&&a?(n(),r("div",xs,[u(us,{images:t(i).saleitgr},null,8,["images"])])):C("",!0)]}),_:1},8,["modelValue"]),t(g)=="details"&&t(Fe)=="detailCard"?(n(),S(We,{key:1,isOpen:t(g),onEmitClick0:e[7]||(e[7]=v=>Z(g)?g.value=v:g=v)},{default:c(()=>[s("div",bs,[u(ts,{_this_RowsChecked:t(se),__thisIndex:t(h),active_fileIndex:t(ge),_this:t(i),_pageSettings:t(_),active_foreignModelOps:t(le),active_foreignModelIndex:t(x),this_client_Row:t(y),onSelectedIndex_RowCard:e[4]||(e[4]=v=>t(m).selectedIndex_RowCard(v)),onBuyIndex:e[5]||(e[5]=v=>t(m)._directBuyer(v)),onCartIndex:e[6]||(e[6]=v=>t(m)._directBuyer(v))},null,8,["_this_RowsChecked","__thisIndex","active_fileIndex","_this","_pageSettings","active_foreignModelOps","active_foreignModelIndex","this_client_Row"])])]),_:1},8,["isOpen"])):C("",!0),t(q)=="loading"?(n(),S(We,{key:2,isOpen:t(q)},{default:c(()=>[ve(" Loading ... ")]),_:1},8,["isOpen"])):C("",!0),u(We,{isOpen:t(ne),onEmitClick0:e[8]||(e[8]=v=>Z(ne)?ne.value=v:ne=v)},{default:c(()=>[u(Kl,{onConfirmButton:t(ne),header:t(il),title:"Yes",textcolor:"black",background:"green",title2:"No",textcolor2:"green",background2:"red",style:{padding:"40px","border-radius":"5px"}},null,8,["onConfirmButton","header"])]),_:1},8,["isOpen"]),t(Le)=="BadConnection"?(n(),r("div",Ss,[u(U,{color:"red",label:"No Connection.",class:"fontStyle-dense",style:{"border-radius":"3px"},size:"sm"})])):C("",!0),(o=t(Ue).length)!=null&&o?(n(),S(kt,{key:4,messages:(w=t(Ue))!=null?w:[],onCloseButton:e[9]||(e[9]=v=>Ue.value=[])},null,8,["messages"])):C("",!0),(I=t(je).length)!=null&&I?(n(),S(kt,{key:5,messages:(D=t(je))!=null?D:[{}],onCloseButton:e[10]||(e[10]=v=>je.value=[])},null,8,["messages"])):C("",!0),(xe=t(Ve).length)!=null&&xe?(n(),S(es,{key:6,messages:(be=t(Ve))!=null?be:[{}],onCloseButton:e[11]||(e[11]=v=>Ve.value=[])},null,8,["messages"])):C("",!0),(mt=t(Lt).message)!=null&&mt?(n(),S(Ye,{key:7,class:"ts-box-fill onedlayout crow cj-center ia-center"},{default:c(()=>[Cs]),_:1})):(pt=t(dt).screen.lt.md)!=null&&pt?(n(),S(Ye,{key:8,class:"ts-box-fill onedlayout crow cj-center ia-center"},{default:c(()=>[s("button",{class:"",onClick:e[12]||(e[12]=v=>t(gt)())}," Continue Mobile Mode ")]),_:1})):(n(),S(Ye,{key:9,class:"ts-box-fill onedlayout ccolumn cj-center fontStyle-dense"},{default:c(()=>{var v;return[(v=t(b))!=null&&v?(n(),r("div",ks,[t(_).tableView=="main"?(n(),S(Ct,{key:0,rows:t(b),columns:t(Ne),filterMethod:t(sl),filter:ol.value,"visible-columns":B.visible_modelCols_label_Props,"virtual-scroll":"","row-key":"id",rowIndex:"true",inFullscreen:!0,pagination:t(N),"onUpdate:pagination":e[32]||(e[32]=a=>Z(N)?N.value=a:N=a),loading:l.loading,"hide-pagination":"",onRequest:e[33]||(e[33]=a=>l.onRequest()),"hide-top":"","hide-bottom":"","no-data-label":"","hide-header":"",style:{"padding-top":"10vh"},class:"bgdark"},wl({_:2},[t(b).length?{name:"body",fn:c(a=>[t(b).length?(n(),S(Ze,{key:0,props:a,class:"mainRow-size onedlayout crow q-tr--no-hover"},{default:c(()=>[u(Ke,{class:"ccol-2"}),u(Ke,{class:"mainRow-size ccol-6 onedlayout crow"},{default:c(()=>{var G,X,H;return[s("div",Is,[u(It,{loading:"lazy",src:t(h)==a.rowIndex&&t(ge)?a.row.saleitgr[t(ge)]:a.row.saleitgr[0],"spinner-color":"orange",class:"ccol-grow raised boxStyle-dense radiussm bg",style:{}},null,8,["src"]),s("div",Os,[a.rowIndex==t(h)?(n(),r("div",Rs,[s("div",Bs,[s("div",{class:"onedlayout ccolumn ia-start",onClick:f=>{var Q;return Y("userID",(Q=a.row.userID)!=null?Q:null)}},[s("div",Ms,[s("div",$s,[s("i",qs,k(a.row.fphone),1)]),Ps]),s("div",Qs,[a.row.userID!=t(d)._profile.id?(n(),r("button",{key:0,class:"bggreysmokey radiusxxs BBoxStyle-flat p-sidesm fontStyle-dense",onClick:f=>t(R)._following({thisIndex:a.rowIndex,id:a.row.id,thisOps:"following",thisSubOps:"increase"})},js,8,Fs)):C("",!0),s("p",Vs,k(a.row.fcreatedAt),1)])],8,Ds)]),s("div",Ns,[(n(!0),r(Re,null,Xe(a.row.saleitgr,(f,Q)=>(n(),S(U,{outline:"",key:Q,onMouseover:he=>Te(a.rowIndex,Q),class:"col-1 column transparent q-pa-none no-border",style:{"max-width":"3dvw"}},{default:c(()=>[s("img",{src:f,class:"col fit shadow-2 transparent rounded-borders q-pa-none",style:{"aspect-ratio":"1/1",width:"100%"}},null,8,Ls)]),_:2},1032,["onMouseover"]))),128)),u(U,{flat:"",dense:!0,icon:"zoom_in",onClick:f=>Te(a.rowIndex,0,"onZoom"),onMouseover:f=>Te(a.rowIndex,0,"onZoom")},{default:c(()=>[u(Ie,null,{default:c(()=>[ve("Look Closer")]),_:1})]),_:2},1032,["onClick","onMouseover"])]),s("div",zs,[u(Rt,{class:"q-py-sm fontbstyle col-auto"},{default:c(()=>[s("div",null,[s("button",{class:"BBoxStyle-dense bgsmokey radiusxs fontStyle-dense",onClick:f=>t(R)._detailView(a.row.id,a.rowIndex,"details","selected","detailCard")},Ts,8,Es)])]),_:2},1024),u(Rt,null,{default:c(()=>[u(Hl,{rowProp:a.row,__thisIndex:a.rowIndex,_this_RowsChecked:t(se),_pageSettings:t(_),onBuyIndex:e[13]||(e[13]=f=>t(R).selectedRow_ForeignRows(f)),onCartIndex:e[14]||(e[14]=f=>t(m)._directBuyer(f)),onRateIndex:e[15]||(e[15]=f=>t(R)._rating(f))},null,8,["rowProp","__thisIndex","_this_RowsChecked","_pageSettings"])]),_:2},1024)])])):(n(),r("div",Ys,[s("button",{class:"BBoxStyle-flat fontStyle-dense",onClick:f=>t(R)._detailView(a.row.id,a.rowIndex,"details","hover","detailPaper")},[s("p",Ks,k(t(ee).more[Number((G=t(_).language)!=null?G:1)]),1)],8,Zs),Ws,s("div",Gs,[s("h1",Xs,[s("i",Hs,k(a.row.fphone),1)])])]))])]),s("div",Js,[s("div",ea,[s("button",{onClick:f=>t(R)._removeItem(a.rowIndex),class:"onedlayout ccolumn cj-center BBoxStyle-flat txtnegative p-sidexs",style:{"min-width":"3vw","min-height":"3vh"}},[u(fe,{name:"close"})],8,ta),la,a.row.quantity&&a.row.price?(n(),r("div",{key:0,onClick:f=>t(R).selectedRow_ForeignRows({thisIndex:a.rowIndex,thisOps:"clients",thisOpsCard:"buycart",thisSubOps:null,this_foreignBoxOps:"buycart"}),class:"fontStyle-dense"},na,8,sa)):(n(),r("div",ia,[(X=a.row.tClient)!=null&&X?(n(),S(Oe,{key:0},{default:c(()=>[ve("Sold ")]),_:1})):(n(),S(Oe,{key:1},{default:c(()=>{var f;return[(f=a.row.tClient)!=null&&f?(n(),S(Oe,{key:0},{default:c(()=>[u(U,{dense:!0,size:"sm",color:"red"},{default:c(()=>[ve(" Sold ")]),_:1})]),_:1})):(n(),S(Oe,{key:1},{default:c(()=>[u(U,{dense:!0,size:"sm",color:"orange"},{default:c(()=>[ve(" Pending ")]),_:1})]),_:1}))]}),_:2},1024))])),oa,s("button",{onClick:f=>t(R)._likes({thisIndex:a.rowIndex,id:a.row.id,thisOps:"likes",thisSubOps:"increase"}),class:"ps-relative onedlayout ccolumn cj-center BBoxStyle-flat p-sidexs fontStyle-base txtnegative",style:{"min-width":"3vw","min-height":"3vh"}},[u(fe,{name:"favorite"}),(H=a.row.likes)!=null&&H?(n(),r("h4",ra,k(a.row.likes.like),1)):C("",!0)],8,ua),s("button",{onClick:f=>t(R).selectedRow_ForeignRows({thisIndex:a.rowIndex,thisOps:"comments",thisOpsCard:"commentCard",thisSubOps:null,this_foreignBoxOps:"edit"}),class:"onedlayout ccolumn cj-center BBoxStyle-flat p-sidexs txtdark",style:{"min-width":"3vw","min-height":"3vh"}},[u(fe,{name:"message"})],8,da),t(d)._profile.phone==a.row.phone?(n(),r("div",ca,[s("button",{onClick:f=>cl(a.rowIndex),class:"onedlayout ccolumn cj-center BBoxStyle-flat p-sidexs txtdark",style:{"min-width":"3vw","min-height":"3vh"}},[u(fe,{name:"edit"}),u(Ie,{class:"bgdark fontStyle-dense"},{default:c(()=>[ha]),_:1})],8,_a),s("button",{onClick:f=>t(R)._delRow(null,a.rowIndex,a.key),class:"onedlayout ccolumn cj-center BBoxStyle-flat p-sidexs txtdark",style:{"min-width":"3vw","min-height":"3vh"}},[u(fe,{name:"delete"}),u(Ie,{class:"bgdark fontStyle-dense"},{default:c(()=>[fa]),_:1})],8,va)])):C("",!0),u(U,{round:"",flat:"",icon:"more_vert"},{default:c(()=>[u(Yl,{self:"top left",flat:"",stack:"","no-caps":"",class:"row q-gutter-none"},{default:c(()=>[u(zl,{style:{"max-width":"100px",padding:"7px"}},{default:c(()=>[u(Zl,{clickable:""},{default:c(()=>[u(U,{round:"",dense:!0,flat:"",icon:"lock",onClick:f=>Y("id",a.row.id)},{default:c(()=>[u(Ie,{class:"bg-black text-white fontStyle-dense",self:"top middle"},{default:c(()=>[ve(" Lock Product ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),ya]),_:2},1024)]),_:2},1024)]),_:2},1024)])])]}),_:2},1024),u(Ke,{class:"mainRow-size ccol-grow boxStyle-dense"},{default:c(()=>{var G,X,H,f,Q,he,Se,Ce,M,F,wt;return[typeof t(h)=="number"&&t(h)==a.rowIndex&&t(g)?(n(),r("div",ga,[t(g)=="comments"?(n(),r("div",ma,[((G=t(O))!=null?G:!1)&&Object.keys(t(O)).length?(n(),r("div",pa,[s("div",wa,[s("span",xa,k((X=t(ae).length)!=null?X:0)+" "+k(t(ee).comments[Number((H=t(_).language)!=null?H:1)]),1),t(x)==null?(n(),r("div",ba,[u(Oe,{style:{}},{default:c(()=>[u(xt,{outlined:"",modelValue:t(O).comment,"onUpdate:modelValue":e[16]||(e[16]=p=>t(O).comment=p),label:"short comment","stack-label":"",class:"fontStyle-dense",dense:!0},null,8,["modelValue"])]),_:1}),s("div",Sa,[s("button",{class:"BBoxStyle-dense bgdark radiusxxs fontStyle-dense",onClick:e[17]||(e[17]=p=>t(m)._create_foreign("comments"))},[s("p",Ca,k(t(ee).submitComment[Number((f=t(_).language)!=null?f:1)]),1)])])])):(n(),r("div",ka,[Ia,s("div",Oa,[u(xt,{size:"sm",outlined:"",type:"text",standout:"bg-teal-2 text-white",autogrow:"",modelValue:t(O).comment,"onUpdate:modelValue":e[18]||(e[18]=p=>t(O).comment=p),"stack-label":"",dense:!0,placeholder:"commenting..."},null,8,["modelValue"])]),s("div",Ra,[s("div",Ba,[u(U,{rounded:"",flat:"",size:"sm",color:"red",icon:"close",label:"close",onClick:e[19]||(e[19]=p=>Z(x)?x.value=null:x=null)}),u(U,{round:"",flat:"",icon:"done",size:"sm",onClick:e[20]||(e[20]=p=>t(m)._update_foreign())}),u(U,{round:"",flat:"",icon:"delete",size:"sm",onClick:e[21]||(e[21]=p=>t(m)._remove())})]),s("button",{class:"BBoxStyle-dense bgnull bghover-grey fontStyle-dense",onClick:e[22]||(e[22]=p=>t(m)._add("comments"))},[s("p",Da,k(t(ee).newComment[Number((Q=t(_).language)!=null?Q:1)]),1)])])]))]),u(bt,{spaced:"",inset:""}),u(ws,{_profile:B._profile,this_chat_Row:t(O),this_chat_Rows:t(ae),onSelectIndex:e[23]||(e[23]=p=>t(m).selectedIndex_(p))},null,8,["_profile","this_chat_Row","this_chat_Rows"])])):C("",!0)])):C("",!0),t(g)=="clients"&&t(Fe)=="buycart"?(n(),r("div",Ma,[s("div",$a,[s("div",qa,[((Se=(he=t(i))==null?void 0:he.price)!=null?Se:!1)&&((M=(Ce=t(i))==null?void 0:Ce.quantity)!=null?M:!1)?(n(),r("div",Ua,[(F=t(y).orderID)!=null&&F?(n(),r("div",ja,[s("div",Va,[u(Dt,{style:{padding:"0px",margin:"0px"},title:null,quantity:t(y).quantity,price:t(i).netPrice,currency:t(i).currency,onstore:t(i).quantity,background2:"white",background:"white",onDecreaseButton:e[24]||(e[24]=p=>{var ke;return t(y).quantity=parseFloat((ke=t(y).quantity)!=null?ke:1)-1}),onIncreaseButton:e[25]||(e[25]=p=>{var ke;return t(y).quantity=parseFloat((ke=t(y).quantity)!=null?ke:1)+1})},null,8,["quantity","price","currency","onstore"])]),s("div",Na,[u(Bt,{_this:t(i),rowProp:a.row,__thisIndex:a.rowIndex,_this_RowsChecked:t(se),_pageSettings:t(_),onBuyIndex:e[26]||(e[26]=p=>t(m)._directBuyer(p)),onCartIndex:e[27]||(e[27]=p=>t(m)._directBuyer(p))},null,8,["_this","rowProp","__thisIndex","_this_RowsChecked","_pageSettings"])])])):C("",!0)])):(n(),r("div",Pa,[t(i).netPrice?(n(),r("div",Fa,"Product is sold out!")):(n(),r("div",Qa," Sorry, Price isn't fixed yet! "))])),(wt=t(P))!=null&&wt?(n(),r("div",La,[s("h4",za," You have "+k(t(P).length)+" orders ",1),u(Jl,{_this_userOwned:t(qe),this_client_Row:t(y),this_client_Rows:t(P),_profile:B._profile,_pageSettings:t(_),active_foreignModelIndex:t(x),onDischargeIndex:e[28]||(e[28]=p=>Z(x)?x.value=p:x=p),onSelectIndex:e[29]||(e[29]=p=>t(m).selectedIndex_(p)),onDeleteIndex:e[30]||(e[30]=p=>t(m)._remove(p)),onUpdateIndex:e[31]||(e[31]=p=>t(m)._update_foreign(p))},null,8,["_this_userOwned","this_client_Row","this_client_Rows","_profile","_pageSettings","active_foreignModelIndex"])])):(n(),r("div",Ea,[t(P)==null?(n(),S(xl,{key:0,color:"blue",size:"5em",thickness:5})):(n(),r("div",Aa,"Your Cart is Empty!"))]))])])])):C("",!0)])):C("",!0)]}),_:2},1024)]),_:2},1032,["props"])):C("",!0)]),key:"0"}:void 0]),1032,["rows","columns","filterMethod","filter","visible-columns","pagination","loading"])):t(_).tableView=="cards"?(n(),S(Ct,{key:1,flat:"",bordered:"",rows:t(b),columns:t(Ne),"virtual-scroll":"","row-key":"id",rowIndex:"true",grid:"","grid-header":"",inFullscreen:!0,pagination:t(W),"onUpdate:pagination":e[39]||(e[39]=a=>Z(W)?W.value=a:W=a),loading:l.loading,"hide-pagination":"",onRequest:l.onRequest,"hide-top":"","hide-bottom":"","no-data-label":"",style:{"padding-top":"10vh"},class:"bgdark","hide-header":""},{header:c(a=>[u(Ze,{props:a,class:"ts-box-fillauto onedlayout crow",style:bl([{height:"5vh",position:"fixed","z-index":"5"},B.isScrolledUp?"top:0vh":"top:6vh;padding-top:0px"])},null,8,["props","style"])]),item:c(a=>[t(b).length?(n(),S(Ze,{key:0,props:a,class:"boxStyle-dense bggreysmokey"},{default:c(()=>{var G,X,H,f,Q,he,Se,Ce;return[s("button",{class:"BBoxStyle-flat",onClick:M=>{var F;return Y("userID",(F=a.row.userID)!=null?F:null)}},[s("div",Ya,[u(fe,{name:"phone"}),s("h3",Za,k(a.row.fphone),1)]),u(Ie,{class:"bgdark fontStyle-dense"},{default:c(()=>[s("h5",null," More of "+k(a.row.phone),1)]),_:2},1024)],8,Ta),s("div",Ka,[s("div",null,[(X=(G=a.row)==null?void 0:G.saleitgr)!=null&&X?(n(),S(It,{key:0,src:a.row.saleitgr[0],style:{"aspect-ratio":"1/1",width:"15vw"},class:"",onMouseover:M=>t(h)==a.rowIndex?null:t(R)._detailView(a.row.id,a.rowIndex,"clients","selected","detailCard")},null,8,["src","onMouseover"])):C("",!0)]),t(h)==a.rowIndex?(n(),r("div",Wa,[s("div",Ga,[u(U,{color:"red",onClick:e[34]||(e[34]=M=>Z(h)?h.value=null:h=null),icon:"close",flat:"",dense:!0})]),((f=(H=t(i))==null?void 0:H.price)!=null?f:!1)&&((he=(Q=t(i))==null?void 0:Q.quantity)!=null?he:!1)&&t(y)?(n(),r("div",Xa,[u(Dt,{style:{},title:null,quantity:t(y).quantity,price:t(i).netPrice,currency:t(i).currency,onstore:t(i).quantity,background2:"white",background:"white",onDecreaseButton:e[35]||(e[35]=M=>{var F;return t(y).quantity=parseFloat((F=t(y).quantity)!=null?F:1)-1}),onIncreaseButton:e[36]||(e[36]=M=>{var F;return t(y).quantity=parseFloat((F=t(y).quantity)!=null?F:1)+1})},null,8,["quantity","price","currency","onstore"])])):C("",!0)])):(n(),r("div",Ha,[t(se).includes(a.row.id)?(n(),r("div",Ja,[s("h4",en,k((t(_).language,"Saved")),1)])):C("",!0)]))]),s("div",tn,[s("div",ln,[a.row.isOpen?(n(),r("div",sn,nn)):(n(),r("div",on,rn)),s("div",dn,[s("h4",null,k(a.row.price)+" "+k(a.row.currency),1),s("p",cn," On Store: "+k(a.row.quantity),1)])]),s("div",_n,[typeof t(h)=="number"&&t(h)==a.rowIndex?(n(),S(Bt,{key:0,_this:t(i),rowProp:a.row,__thisIndex:a.rowIndex,_this_RowsChecked:t(se),_pageSettings:t(_),onBuyIndex:e[37]||(e[37]=M=>t(m)._directBuyer(M)),onCartIndex:e[38]||(e[38]=M=>t(m)._directBuyer(M))},null,8,["_this","rowProp","__thisIndex","_this_RowsChecked","_pageSettings"])):(n(),r(Re,{key:1},[s("button",{class:"BBoxStyle-flat p-sidesm bgnull bghover-light",onClick:M=>t(R)._detailView(a.row.id,a.rowIndex,"details","selected","detailCard")},[s("h3",vn,k(t(ee).details[Number((Se=t(_).language)!=null?Se:1)]),1)],8,hn),s("button",{class:"BBoxStyle-flat p-sidesm bgnull bghover-light",onClick:M=>Y("id",a.row.id)},[s("h3",yn,k(t(ee).explore[Number((Ce=t(_).language)!=null?Ce:1)]),1)],8,fn)],64))])])]}),_:2},1032,["props"])):C("",!0)]),_:1},8,["rows","columns","pagination","loading","onRequest"])):(n(),r("div",gn,"Connection Error."))])):(n(),r("div",mn,[s("div",pn,[(n(),r(Re,null,Xe([1,2,3,4,5],a=>u(Ge,{class:"col",square:"",key:a})),64))]),s("div",wn,[u(Ge,{class:"col"}),u(Ge,{class:"col-4",square:""})]),u(bt,{inset:""}),xn]))]}),_:1}))],64)}}};export{Ui as default};
