import{_ as r}from"./debugMixin.5367f11c.js";var p=async(f,s,t,n)=>{var g,a;let i={},e="main",o=!1;if(["catagory","usage","trend","paginationID"].includes(s))i.qweight=[1,0,0,0],s=="catagory"?i.qweight[1]=n:s=="usage"&&(i.qweight[1]=((g=f.qweight)!=null?g:[0,0])[1],i.qweight[2]=n),i.queryOperator="productSpecific-and";else if(s=="id")i[s]=t!=null?t:null,o="view";else if(s=="lytSearchRow")e="cards",isNaN(t)?(i.content=String(t),i.header=String(t)):i.phone=Number(t);else if(s==null){let c=(a=r._getsession("qw"))!=null?a:!1;i.qweight=c?JSON.parse(c):[1,1,1,16],i.queryOperator="userSpecific-or",e="cards"}else i[s]=t!=null?t:null;return[i,e,o]};export{p as t};
