import{e as v}from"./dynamicModule.b0001511.js";import{r as n}from"./index.39fdb616.js";const S=()=>{var s=n("profileSchemas"),u=n("profileSchema");let f=n({}),r=n({}),a;v(s.value,u.value).then(e=>(e&&(a=e),!0));async function p(e,t=null){var l,c,h,m;if(!a)return!1;let i=(l=a[e].rules)!=null?l:null,o=(h=(c=f.value[e])!=null?c:null)!=null?h:t;if(!(i&&o))return console.log("No Validator Set; For",(m=a[e])!=null?m:!1,e),!0;r.value[e]=null;for(let g of i)if(!await y(g,o)){r.value[e]=d(g),console.log("No Validated  for = "+e);break}return console.log(r.value," Validatiotion Obj."),!0}function d(e){switch(console.log(e),e.type){case"required":return"Field is required";case"minLength":return`Minimum length is ${e.value}`;case"maxLength":return`Maximum length is ${e.value}`;case"pattern":return"Invalid format";default:return"Invalid input"}}const y=async(e,t)=>{switch(console.log(e,t),e.type){case"required":return t!=null&&t!=="";case"minLength":return t.length>=e.value;case"maxLength":return t.length<=e.value;case"pattern":return new RegExp(e.value).test(t);case"type":return _(e.value,t);default:return!0}},_=(e,t)=>{switch(e){case"number":return!isNaN(t);case"string":return typeof t=="string";case"array":return Array.isArray(t);case"object":return typeof t=="object"&&!Array.isArray(t);default:return!1}};return{thisSchemaPath:s,thisSchemaFile:u,_debugObj:r,_validateThis:p}};export{S as u};