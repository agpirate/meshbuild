import{r as a,c as m,o as _,k as d,l as s,m as l,n as i,f as c,u as h,Q as v,p as y}from"./index.5600d395.js";import{Q as k,a as g}from"./QLayout.30f9eea0.js";import{u as I}from"./use-quasar.073926fb.js";import"./QResizeObserver.e7bb0c92.js";const P={__name:"SignLayout",setup(w){const r=I();var u=a();a(!1),u.value={SaleIt:["Anything To Sale ?","photo","saleIt",!1],RentIt:["Anything For Rent ?","collections_bookmark","rentIt",!1],Market:["Show current Market Price","assistant","marketIt",!1],OrderIt:["Looking Service you Like!","group","orderIt",!1],locateIt:["Locate Your Need","import_contacts","locateIt",!1]},a(!1),m(()=>({height:r.screen.height-22+"px",width:r.screen.width+"px"}));var e=null,o=!1;_(async()=>{try{window.addEventListener("beforeinstallprompt",t=>{alert("incc"),e=t,o=!0})}catch{}});async function p(){if(e){e.prompt();const{outcome:t}=await e.userChoice;console.log(`User response to the install prompt: ${t}`),e=null,o=!1}}return(t,n)=>{const f=d("router-view");return s(),l(k,null,{default:i(()=>[c(g,null,{default:i(()=>[h(o)?(s(),l(v,{key:0,style:{position:"fixed",top:"100px","z-index":"100"},icon:"add_to_home_screen",onClick:n[0]||(n[0]=x=>p())})):y("",!0),c(f)]),_:1})]),_:1})}}};export{P as default};
