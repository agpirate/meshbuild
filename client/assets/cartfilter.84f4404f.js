import{r as e,L as p}from"./index.86673bd5.js";const z=()=>{let n="mycart",o=e({geoSearch:{state:!1,value:"off"}});const c={title:"MeshShops",titleTemplate:i=>`${i}`,icon:"/icons/qimage.png",script:{}};let s=e({page:1,rowsPerPage:10,rowsNumber:0});var l=e(null);let u=e({page:1,rowsNumber:2,rowsPerPage:2});return{paginationId:l,pageName:n,metaData:c,_pageSettings:o,pagination:s,paginationCard:u}},B=()=>{let n={gt:!1,lt:!1,eq:!1},o=p({Requested:!0,Queed:!0,Served:!0}),c=p({cart:!0,buy:!0}),s=e(null),l=e(0);p(0);let u=e({cart:0,buy:0}),i=e({Requesting:0,Requested:0,Queed:0,Served:0}),_=e(!0),f=e(!1),S=e(null);function A(h,t){if(!_.value||!(t!=null&&t))return h;l.value=0;let g=0,P={cart:0,buy:0},R={Requesting:0,Requested:0,Queed:0,Served:0};const v=h.filter((a,x)=>{var F,I,L,C,M,N;let d=!0,b=!1,D=!1,q=t.search?t.search.toLowerCase():"";if(q!=""){d=!1;let Q=Object.values(a).map(r=>{try{return r.toString().toLowerCase()}catch{return" "}});for(let r=0;r<Q.length;r++)if(Q[r].includes(q)){d=!0;break}}let j=(F=a.served)!=null?F:!1;b=(I=t[j])!=null?I:!0;let k=(L=a.store)!=null?L:!1;D=(C=t[k])!=null?C:!0;let y=!0,m=(M=t.recordDate)!=null?M:!1;a.createdAt&&m&&(y=new Date(m).toLocaleDateString()==new Date(a.createdAt).toLocaleDateString());let w=d&&b&&D&&y;return f.value=!w,w?(P[a.store]++,R[a.served]++,g=g+parseFloat((N=a.price)!=null?N:0),!0):!1});return l.value=g,u.value=P,i.value=R,S.value=v.length?v.length:Math.random(),v}async function O(){f.value=!1,s.value=null}return{priceFilter:n,_serveStatus:o,_storeStatus:c,_recordDate:s,totalPrice:l,storeItems:u,serveItems:i,_enableRowFilter:_,_filteredRow:S,filterOccured:f,_thisFiltering:A,clearFilters:O}};export{B as a,z as u};
