import{r as a,c as _,o as m,k as d,l as s,m as l,n as i,f as c,u as h,Q as v,p as y}from"./index.86673bd5.js";import{Q as k,a as g}from"./QLayout.a405216f.js";import{u as I}from"./use-quasar.963beff9.js";const S={__name:"SignLayout",setup(w){const n=I();var u=a();a(!1),u.value={SaleIt:["Anything To Sale ?","photo","saleIt",!1],RentIt:["Anything For Rent ?","collections_bookmark","rentIt",!1],Market:["Show current Market Price","assistant","marketIt",!1],OrderIt:["Looking Service you Like!","group","orderIt",!1],locateIt:["Locate Your Need","import_contacts","locateIt",!1]},a(!1),_(()=>({height:n.screen.height-22+"px",width:n.screen.width+"px"}));var e=null,o=!1;m(async()=>{try{window.addEventListener("beforeinstallprompt",t=>{alert("incc"),e=t,o=!0})}catch{}});async function p(){if(e){e.prompt();const{outcome:t}=await e.userChoice;console.log(`User response to the install prompt: ${t}`),e=null,o=!1}}return(t,r)=>{const f=d("router-view");return s(),l(k,null,{default:i(()=>[c(g,null,{default:i(()=>[h(o)?(s(),l(v,{key:0,style:{position:"fixed",top:"100px","z-index":"100"},icon:"add_to_home_screen",onClick:r[0]||(r[0]=x=>p())})):y("",!0),c(f)]),_:1})]),_:1})}}};export{S as default};
