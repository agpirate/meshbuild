import{r,C as P}from"./index.00a864f4.js";const x=()=>{let a=r(0);P(0);let i=r({cart:0,buy:0}),n=r({Requesting:0,Requested:0,Queed:0,Served:0}),c=r(!0),v=r(null);function y(d,e){if(console.error("Row Filtering...",e),!c.value||!(e!=null&&e))return d;a.value=0;let s=0,_={cart:0,buy:0},g={Requesting:0,Requested:0,Queed:0,Served:0};const u=d.filter((t,Q)=>{var D,b,F,q,I,L;let f=!0,h=!1,R=!1,p=e.search?e.search.toLowerCase():"";if(p!=""){f=!1;let w=Object.values(t).map(l=>{try{return l.toString().toLowerCase()}catch{return" "}});for(let l=0;l<w.length;l++)if(w[l].includes(p)){f=!0;break}}let C=(D=t.served)!=null?D:!1;h=(b=e[C])!=null?b:!0;let A=(F=t.store)!=null?F:!1;R=(q=e[A])!=null?q:!0;let S=!0,o=(I=e.recordDate)!=null?I:!1;return console.log(o,"fffffffffffffff"),t.createdAt&&o&&(S=new Date(o).toLocaleDateString()==new Date(t.createdAt).toLocaleDateString()),f&&h&&R&&S?(_[t.store]++,g[t.served]++,s=s+parseFloat((L=t.price)!=null?L:0),!0):!1});return a.value=s,i.value=_,n.value=g,v.value=u.length?u.length:Math.random(),u}return{totalPrice:a,storeItems:i,serveItems:n,_enableRowFilter:c,_filteredRow:v,_thisFiltering:y}};export{x as u};
