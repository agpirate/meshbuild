import{r as t}from"./index.88fd6401.js";import{m as v}from"./moduleLoader.51b16005.js";const M=()=>{const s=t(0),i=t(""),o=t("");let a=t("");t("");let n=t([]),c=t([]),h=t(null),m=t(null);t(null);let _=t({}),e=t({});t([]),t([]);let r=t(["userID","userName","time","action"]);t([]);let l=t("");t(["","orderID","quantity","price","description","time","action"]);let p=t(["phone","userName","geolocation","location","userID","phoneCode"]);var u=t({});return{count:s,Objprops_:i,_thisModel:o,_this_acctype:u,_this_Schema:a,lockedColumns:r,invisibleColumns:l,_this_Rows:n,status_thisDetail:h,_this:m,_this_Query:_,columns:c,_thisDefault:e,_thisModels:p}},w=()=>{var s=t("saleitSchemas"),i=t("saleitSchema");let o=t({}),a=t({}),n;v(s.value,i.value).then(e=>{e&&(n=e)});async function c(e,r=null){var u,d,f,g;if(!n)return!1;let l=(u=n[e].rules)!=null?u:null,p=(f=(d=o.value[e])!=null?d:null)!=null?f:r;if(!l)return console.log("No Validator Set; For",(g=n[e])!=null?g:!1,e),!0;a.value[e]=null;for(let y of l)if(!await m(y,p)){a.value[e]=h(y),console.log("No Validated  for = "+e);break}return console.log(a.value," Validatiotion Obj."),!0}function h(e){switch(e.type){case"required":return"Field is required";case"minValue":return"Minimum Value Error";case"maxValue":return"Maximam Value Error";case"minLength":return`Minimum length is ${e.value}`;case"maxLength":return`Maximum length is ${e.value}`;case"pattern":return"Invalid format";default:return"Invalid input"}}const m=async(e,r)=>{switch(console.log(typeof e,typeof r,"validation is thisrule210"),e.type){case"required":return r!=null&&r!="";case"minValue":return r>=e.value;case"maxValue":return r<=e.value;case"minLength":return r.length>=e.value;case"maxLength":return r.length<=e.value;case"pattern":return new RegExp(e.value).test(r);case"type":return _(e.value,r);default:return!0}},_=(e,r)=>{switch(e){case"number":return!isNaN(r);case"string":return typeof r=="string";case"array":return Array.isArray(r);case"object":return typeof r=="object"&&!Array.isArray(r);default:return!1}};return{thisSchemaPath:s,thisSchemaFile:i,_debugObj:a,_validateThis:c}};export{w as a,M as u};
