import{r as a,C as N}from"./index.15b391b8.js";const j=()=>{let s=a(0);N(0);let d=a({cart:0,buy:0}),v=a({Requesting:0,Requested:0,Queed:0,Served:0}),i=a(!0),g=a(null);function w(_,e){if(console.error("Row Filtering...",e,i.value),!i.value||!(e!=null&&e))return _;s.value=0;let n=0,p={cart:0,buy:0},D={Requesting:0,Requested:0,Queed:0,Served:0};const f=_.filter((t,P)=>{var A,F,m,q,x,I,L;let o=!0,h=!1,R=!1,S=e.search?e.search.toLowerCase():"";if(S!=""){o=!1;let u=Object.values(t).map(l=>{try{return l.toString().toLowerCase()}catch{return" "}});for(let l=0;l<u.length;l++)if(u[l].includes(S)){o=!0;break}}let C=(A=t.served)!=null?A:!1;h=(F=e[C])!=null?F:!0;let M=(m=t.store)!=null?m:!1;R=(q=e[M])!=null?q:!0;let r=(x=e.filterDays)!=null?x:!1;if(t.updatedAt&&r){let c=t.updatedAt.split("/"),u=Number(c[0]),l=Number(c[1]);u>=new Date().getMonth()+1&&(l>=new Date().getDate()-r.max||r.max==2||r.max==8)}let b=!0,y=(I=e.recordDate)!=null?I:!1;return t.createdAt&&y&&(b=new Date(y).toLocaleDateString()==new Date(t.createdAt).toLocaleDateString()),o&&h&&R&&b?(p[t.store]++,D[t.served]++,n=n+parseFloat((L=t.price)!=null?L:0),!0):!1});return s.value=n,d.value=p,v.value=D,g.value=f.length?f.length:Math.random(),f}return{totalPrice:s,storeItems:d,serveItems:v,_enableRowFilter:i,_filteredRow:g,_thisFiltering:w}};export{j as u};
