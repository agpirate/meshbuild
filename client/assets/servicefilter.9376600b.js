import{r as e,aX as _}from"./index.61380e2f.js";const $=()=>{let n="myservice";const o={title:"Mesh P&S",titleTemplate:i=>`${i}`,icon:"/icons/qimage.png",script:{}};let c=e({geoSearch:{state:!1,value:"off"}}),s=e({page:1,rowsPerPage:10,rowsNumber:0});var l=e(null);let u=e({page:1,rowsNumber:2,rowsPerPage:2});return{paginationId:l,pageName:n,metaData:o,_pageSettings:c,pagination:s,paginationCard:u}},z=()=>{let n={gt:!1,lt:!1,eq:!1},o=_({Requested:!0,Queed:!0,Served:!0}),c=_({cart:!0,buy:!0}),s=e(null),l=e(0);_(0);let u=e({cart:0,buy:0}),i=e({Requesting:0,Requested:0,Queed:0,Served:0}),f=e(!0),g=e(!1),S=e(null);function A(h,t){if(console.error("Row Filtering...",t,f.value),!f.value||!(t!=null&&t))return h;l.value=0;let v=0,P={cart:0,buy:0},R={Requesting:0,Requested:0,Queed:0,Served:0};const d=h.filter((a,x)=>{var m,I,L,C,M,N;let p=!0,b=!1,D=!1,q=t.search?t.search.toLowerCase():"";if(q!=""){p=!1;let Q=Object.values(a).map(r=>{try{return r.toString().toLowerCase()}catch{return" "}});for(let r=0;r<Q.length;r++)if(Q[r].includes(q)){p=!0;break}}let j=(m=a.served)!=null?m:!1;b=(I=t[j])!=null?I:!0;let k=(L=a.store)!=null?L:!1;D=(C=t[k])!=null?C:!0;let y=!0,F=(M=t.recordDate)!=null?M:!1;a.createdAt&&F&&(y=new Date(F).toLocaleDateString()==new Date(a.createdAt).toLocaleDateString());let w=p&&b&&D&&y;return g.value=!w,w?(P[a.store]++,R[a.served]++,v=v+parseFloat((N=a.price)!=null?N:0),!0):!1});return l.value=v,u.value=P,i.value=R,S.value=d.length?d.length:Math.random(),d}async function O(){g.value=!1,s.value=null}return{priceFilter:n,_serveStatus:o,_storeStatus:c,_recordDate:s,totalPrice:l,storeItems:u,serveItems:i,_enableRowFilter:f,_filteredRow:S,filterOccured:g,_thisFiltering:A,clearFilters:O}};export{z as a,$ as u};
