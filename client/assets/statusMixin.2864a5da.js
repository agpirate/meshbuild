import{r as u}from"./index.15b391b8.js";const v=()=>{u(0);var s=u([]),n=u([]),o=u([]),a=u([]);function i(e=6e3,t="",r=""){return s.value.push({color:"grey",content:t,title:r}),console.log("inform Status",t),setTimeout(()=>(s.value.shift(),!1),e),!0}function l(e=6e3,t="",r=""){return n.value.push({color:"green",content:t,title:r}),setTimeout(()=>(n.value.shift(),!1),e),!0}function f(e=6e3,t="",r=""){return o.value.push({color:"grey",content:t,title:r}),console.log("inform Status",t),setTimeout(()=>(o.value.shift(),!1),e),!0}function _(e=6e3,t="",r=""){return a.value.push({color:"red",content:t,title:r}),setTimeout(()=>(a.value.shift(),!1),e),!0}return{status_Loading:s,status_DoneMessage:n,status_KnowthisMessage:o,status_WarnthisMessage:a,status_timerLoad:i,status_timerDone:l,status_timerInformthis:f,status_timerError:_}};export{v as u};
