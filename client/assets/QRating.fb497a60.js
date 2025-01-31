import{q as R,aa as k,aF as w,ac as D,bD as Q,r as z,c as d,aJ as P,h as g,M as j,a4 as E,g as K,bE as N,ag as y}from"./index.1f497dc9.js";import{l as J}from"./debugMixin.741c1957.js";var O=R({name:"QRating",props:{...k,...w,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:L,emit:I}){const{proxy:{$q:v}}=K(),H=D(e),$=Q(e),x=N($),o=z(0);let u={};const f=d(()=>e.readonly!==!0&&e.disable!==!0),C=d(()=>`q-rating row inline items-center q-rating--${f.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),V=d(()=>{const l=Array.isArray(e.icon)===!0?e.icon.length:0,a=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,t=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,c=Array.isArray(e.color)===!0?e.color.length:0,i=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,n=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:l,icon:l>0?e.icon[l-1]:e.icon,selIconLen:a,selIcon:a>0?e.iconSelected[a-1]:e.iconSelected,halfIconLen:t,halfIcon:t>0?e.iconHalf[a-1]:e.iconHalf,colorLen:c,color:c>0?e.color[c-1]:e.color,selColorLen:i,selColor:i>0?e.colorSelected[i-1]:e.colorSelected,halfColorLen:n,halfColor:n>0?e.colorHalf[n-1]:e.colorHalf}}),q=d(()=>{if(typeof e.iconAriaLabel=="string"){const l=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return a=>`${l}${a}`}if(Array.isArray(e.iconAriaLabel)===!0){const l=e.iconAriaLabel.length;if(l>0)return a=>e.iconAriaLabel[Math.min(a,l)-1]}return(l,a)=>`${a} ${l}`}),M=d(()=>{const l=[],a=V.value,t=Math.ceil(e.modelValue),c=f.value===!0?0:null,i=e.iconHalf===void 0||t===e.modelValue?-1:t;for(let n=1;n<=e.max;n++){const r=o.value===0&&e.modelValue>=n||o.value>0&&o.value>=n,s=i===n&&o.value<n,m=o.value>0&&(s===!0?t:e.modelValue)>=n&&o.value<n,b=s===!0?n<=a.halfColorLen?e.colorHalf[n-1]:a.halfColor:a.selColor!==void 0&&r===!0?n<=a.selColorLen?e.colorSelected[n-1]:a.selColor:n<=a.colorLen?e.color[n-1]:a.color,F=(s===!0?n<=a.halfIconLen?e.iconHalf[n-1]:a.halfIcon:a.selIcon!==void 0&&(r===!0||m===!0)?n<=a.selIconLen?e.iconSelected[n-1]:a.selIcon:n<=a.iconLen?e.icon[n-1]:a.icon)||v.iconSet.rating.icon;l.push({name:(s===!0?n<=a.halfIconLen?e.iconHalf[n-1]:a.halfIcon:a.selIcon!==void 0&&(r===!0||m===!0)?n<=a.selIconLen?e.iconSelected[n-1]:a.selIcon:n<=a.iconLen?e.icon[n-1]:a.icon)||v.iconSet.rating.icon,attrs:{tabindex:c,role:"radio","aria-checked":e.modelValue===n?"true":"false","aria-label":q.value(n,F)},iconClass:"q-rating__icon"+(r===!0||s===!0?" q-rating__icon--active":"")+(m===!0?" q-rating__icon--exselected":"")+(o.value===n?" q-rating__icon--hovered":"")+(b!==void 0?` text-${b}`:"")})}return l}),_=d(()=>{const l={role:"radiogroup"};return e.disable===!0&&(l["aria-disabled"]="true"),e.readonly===!0&&(l["aria-readonly"]="true"),l});function A(l){if(f.value===!0){const a=J(parseInt(l,10),1,parseInt(e.max,10)),t=e.noReset!==!0&&e.modelValue===a?0:a;t!==e.modelValue&&I("update:modelValue",t),o.value=0}}function h(l){f.value===!0&&(o.value=l)}function B(l,a){switch(l.keyCode){case 13:case 32:return A(a),y(l);case 37:case 40:return u[`rt${a-1}`]&&u[`rt${a-1}`].focus(),y(l);case 39:case 38:return u[`rt${a+1}`]&&u[`rt${a+1}`].focus(),y(l)}}function S(){o.value=0}return P(()=>{u={}}),()=>{const l=[];return M.value.forEach(({iconClass:a,name:t,attrs:c},i)=>{const n=i+1;l.push(g("div",{key:n,ref:r=>{u[`rt${n}`]=r},class:"q-rating__icon-container flex flex-center",...c,onClick(){A(n)},onMouseover(){h(n)},onMouseout:S,onFocus(){h(n)},onBlur:S,onKeyup(r){B(r,n)}},j(L[`tip-${n}`],[g(E,{class:a,name:t})])))}),e.name!==void 0&&e.disable!==!0&&x(l,"push"),g("div",{class:C.value,style:H.value,..._.value},l)}}});export{O as Q};
