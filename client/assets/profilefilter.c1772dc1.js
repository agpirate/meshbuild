import{I as De,q as ie,c as T,h as b,x as re,bE as ge,aj as Ne,r as K,bk as Re,bF as Ee,w as te,o as ye,a2 as ve,Q as R,g as we,aV as be,aW as ke,ad as fe,a5 as Fe,a7 as Ie,bG as Qe,bH as Me,H as _e,aa as We,N as Ke,ax as Ge,az as Ye,l as f,m as v,n as q,f as L,a1 as he,W as x,Z as E,ba as ae,Y as V,F as N,bb as Y,u as d,b9 as Z,a3 as pe,bm as me,bd as _,p as J,_ as Je,a0 as Xe,bI as Ze,bJ as je}from"./index.15b391b8.js";import{Q as j}from"./QSelect.e42c84a0.js";import{a as et,b as F,c as G,m as tt}from"./moduleLoader.24e1d81e.js";import{a as lt,Q as X}from"./schemaDefaultingMixin.83bbe6d0.js";import{e as ot,f as nt,g as at}from"./thisAndForeignMixin.137fabf3.js";import{Q as st}from"./QScrollArea.19286be1.js";import{u as it}from"./profileschemaValidator.3e550420.js";function xe(e,t){if(t&&e===t)return null;const l=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(l)===!0)return e;const n=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,u=n.display;return u==="block"||u==="table"?e:xe(e.parentNode)}function se(e,t,l){return!e||e===document.body?!1:l===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function Ce(e,t,l){if(l||(l=document.createRange(),l.selectNode(e),l.setStart(e,0)),t.count===0)l.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(l.setEnd(e,t.count),t.count=0);else for(let n=0;t.count!==0&&n<e.childNodes.length;n++)l=Ce(e.childNodes[n],t,l);return l}const rt=/^https?:\/\//;class ut{constructor(t,l){this.el=t,this.eVm=l,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(se(t.anchorNode,this.el,!0)&&se(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const l=t.startContainer;return l.nodeType===document.ELEMENT_NODE?l:l.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?xe(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const l=document.createRange(),n=document.getSelection();t!==null?(l.setStart(t.startContainer,t.startOffset),l.setEnd(t.endContainer,t.endOffset),n.removeAllRanges(),n.addRange(l)):(n.selectAllChildren(this.el),n.collapseToEnd())}savePosition(){let t=-1,l;const n=document.getSelection(),u=this.el.parentNode;if(n.focusNode&&se(n.focusNode,u))for(l=n.focusNode,t=n.focusOffset;l&&l!==u;)l!==this.el&&l.previousSibling?(l=l.previousSibling,t+=l.textContent.length):l=l.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const l=window.getSelection(),n=Ce(this.el,{count:this.savedPos});n&&(n.collapse(!1),l.removeAllRanges(),l.addRange(n))}}hasParent(t,l){const n=l?this.parent:this.blockParent;return n!==null?n.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,l,n=this.parent){return n===null?!1:t.includes(n.nodeName.toLowerCase())===!0?!0:l===!0?this.hasParents(t,l,n.parentNode):!1}is(t,l){if(this.selection===null)return!1;switch(t){case"formatBlock":return l==="DIV"&&this.parent===this.el||this.hasParent(l,l==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===l;case"fontName":const n=document.queryCommandValue(t);return n===`"${l}"`||n===l;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const u=document.queryCommandState(t);return l!==void 0?u===l:u}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,l,n=De){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(l)&&this.is(t,l)&&(t="outdent",l=null),l==="PRE"&&this.is(t,"PRE")&&(l="P");else if(t==="print"){n();const u=window.open();u.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),u.print(),u.close();return}else if(t==="link"){const u=this.getParentAttribute("href");if(u===null){const m=this.selectWord(this.selection),i=m?m.toString():"";if(!i.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=rt.test(i)?i:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(m.getRangeAt(0))}else this.eVm.editLinkUrl.value=u,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),n();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),n();return}document.execCommand(t,!1,l),n()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const l=document.createRange();l.setStart(t.anchorNode,t.anchorOffset),l.setEnd(t.focusNode,t.focusOffset);const n=l.collapsed?["backward","forward"]:["forward","backward"];l.detach();const u=t.focusNode,m=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",n[0],"character"),t.modify("move",n[1],"word"),t.extend(u,m),t.modify("extend",n[1],"character"),t.modify("extend",n[0],"word"),t}}var dt=ie({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const l=T(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(u=>e[u]===!0).map(u=>`q-btn-group--${u}`).join(" ");return`q-btn-group row no-wrap${n.length!==0?" "+n:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>b("div",{class:l.value},re(t.default))}});const ct=Object.keys(ge);function ft(e){return ct.reduce((t,l)=>{const n=e[l];return n!==void 0&&(t[l]=n),t},{})}var ht=ie({name:"QBtnDropdown",props:{...ge,...Ne,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:l}){const{proxy:n}=we(),u=K(e.modelValue),m=K(null),i=Re(),P=T(()=>{const r={"aria-expanded":u.value===!0?"true":"false","aria-haspopup":"true","aria-controls":i.value,"aria-label":e.toggleAriaLabel||n.$q.lang.label[u.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(r["aria-disabled"]="true"),r}),B=T(()=>"q-btn-dropdown__arrow"+(u.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),z=T(()=>Ee(e)),c=T(()=>ft(e));te(()=>e.modelValue,r=>{m.value!==null&&m.value[r?"show":"hide"]()}),te(()=>e.split,k);function U(r){u.value=!0,l("beforeShow",r)}function C(r){l("show",r),l("update:modelValue",!0)}function g(r){u.value=!1,l("beforeHide",r)}function s(r){l("hide",r),l("update:modelValue",!1)}function H(r){l("click",r)}function O(r){be(r),k(),l("click",r)}function S(r){m.value!==null&&m.value.toggle(r)}function h(r){m.value!==null&&m.value.show(r)}function k(r){m.value!==null&&m.value.hide(r)}return Object.assign(n,{show:h,hide:k,toggle:S}),ye(()=>{e.modelValue===!0&&h()}),()=>{const r=[b(ve,{class:B.value,name:e.dropdownIcon||n.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&r.push(b(et,{ref:m,id:i.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:U,onShow:C,onBeforeHide:g,onHide:s},t.default)),e.split===!1?b(R,{class:"q-btn-dropdown q-btn-dropdown--simple",...c.value,...P.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:H},{default:()=>re(t.label,[]).concat(r),loading:t.loading}):b(dt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...z.value,glossy:e.glossy,stretch:e.stretch},()=>[b(R,{class:"q-btn-dropdown--current",...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:O},{default:t.label,loading:t.loading}),b(R,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...P.value,...z.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>r)])}}});function Se(e,t,l){t.handler?t.handler(e,l,l.caret):l.runCmd(t.cmd,t.param)}function ue(e){return b("div",{class:"q-editor__toolbar-group"},e)}function qe(e,t,l,n=!1){const u=n||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),m=[];if(t.tip&&e.$q.platform.is.desktop){const i=t.key?b("div",[b("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;m.push(b(lt,{delay:1e3},()=>[b("div",{innerHTML:t.tip}),i]))}return b(R,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:u?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:u&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(i){l&&l(),Se(i,t,e)}},()=>m)}function pt(e,t){const l=t.list==="only-icons";let n=t.label,u=t.icon!==null?t.icon:void 0,m,i;function P(){z.component.proxy.hide()}if(l)i=t.options.map(c=>{const U=c.type===void 0?e.caret.is(c.cmd,c.param):!1;return U&&(n=c.tip,u=c.icon!==null?c.icon:void 0),qe(e,c,P,U)}),m=e.toolbarBackgroundClass.value,i=[ue(i)];else{const c=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,U=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,C=t.list==="no-icons";i=t.options.map(g=>{const s=g.disable?g.disable(e):!1,H=g.type===void 0?e.caret.is(g.cmd,g.param):!1;H&&(n=g.tip,u=g.icon!==null?g.icon:void 0);const O=g.htmlTip;return b(G,{active:H,activeClass:c,clickable:!0,disable:s,dense:!0,onClick(S){P(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),Se(S,g,e)}},()=>[C===!0?null:b(F,{class:H?c:U,side:!0},()=>b(ve,{name:g.icon!==null?g.icon:void 0})),b(F,O?()=>b("div",{class:"text-no-wrap",innerHTML:g.htmlTip}):g.tip?()=>b("div",{class:"text-no-wrap"},g.tip):void 0)])}),m=[e.toolbarBackgroundClass.value,U]}const B=t.highlight&&n!==t.label,z=b(ht,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:B?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:B&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:n,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:u,contentClass:m,onShow:c=>e.emit("dropdownShow",c),onHide:c=>e.emit("dropdownHide",c),onBeforeShow:c=>e.emit("dropdownBeforeShow",c),onBeforeHide:c=>e.emit("dropdownBeforeHide",c)},()=>i);return z}function mt(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(l=>l.cmd==="viewsource")).map(t=>ue(t.map(l=>e.isViewingSource.value&&l.cmd!=="viewsource"?!1:l.type==="slot"?re(e.slots[l.slot]):l.type==="dropdown"?pt(e,l):qe(e,l))))}function gt(e,t,l,n={}){const u=Object.keys(n);if(u.length===0)return{};const m={default_font:{cmd:"fontName",param:e,icon:l,tip:t}};return u.forEach(i=>{const P=n[i];m[i]={cmd:"fontName",param:P,icon:l,tip:P,htmlTip:`<font face="${P}">${P}</font>`}}),m}function yt(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let l=e.editLinkUrl.value;const n=()=>{e.caret.restore(),l!==e.editLinkUrl.value&&document.execCommand("createLink",!1,l===""?" ":l),e.editLinkUrl.value=null};return[b("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),b("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:l,onInput:u=>{be(u),l=u.target.value},onKeydown:u=>{if(ke(u)!==!0)switch(u.keyCode){case 13:return fe(u),n();case 27:fe(u),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),ue([b(R,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),b(R,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:n})])]}}var ee=ie({name:"QEditor",props:{...Fe,...ot,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default:()=>[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...nt,"update:modelValue","keydown","click","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:l}){const{proxy:n}=we(),{$q:u}=n,m=Ie(e,u),{inFullscreen:i,toggleFullscreen:P}=at(),B=Qe(),z=K(null),c=K(null),U=K(null),C=K(!1),g=T(()=>!e.readonly&&!e.disable);let s,H,O=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),s=window.getComputedStyle(document.body).fontFamily;const S=T(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),h=T(()=>{const o=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:o,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!g.value,size:"sm"}}),k=T(()=>{const o=u.lang.editor,a=u.iconSet.editor;return{bold:{cmd:"bold",icon:a.bold,tip:o.bold,key:66},italic:{cmd:"italic",icon:a.italic,tip:o.italic,key:73},strike:{cmd:"strikeThrough",icon:a.strikethrough,tip:o.strikethrough,key:83},underline:{cmd:"underline",icon:a.underline,tip:o.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:a.unorderedList,tip:o.unorderedList},ordered:{cmd:"insertOrderedList",icon:a.orderedList,tip:o.orderedList},subscript:{cmd:"subscript",icon:a.subscript,tip:o.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:a.superscript,tip:o.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:w=>w.caret&&!w.caret.can("link"),icon:a.hyperlink,tip:o.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:a.toggleFullscreen,tip:o.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:a.viewSource,tip:o.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:a.quote,tip:o.quote,key:81},left:{cmd:"justifyLeft",icon:a.left,tip:o.left},center:{cmd:"justifyCenter",icon:a.center,tip:o.center},right:{cmd:"justifyRight",icon:a.right,tip:o.right},justify:{cmd:"justifyFull",icon:a.justify,tip:o.justify},print:{type:"no-state",cmd:"print",icon:a.print,tip:o.print,key:80},outdent:{type:"no-state",disable:w=>w.caret&&!w.caret.can("outdent"),cmd:"outdent",icon:a.outdent,tip:o.outdent},indent:{type:"no-state",disable:w=>w.caret&&!w.caret.can("indent"),cmd:"indent",icon:a.indent,tip:o.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:a.removeFormat,tip:o.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:a.hr,tip:o.hr},undo:{type:"no-state",cmd:"undo",icon:a.undo,tip:o.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:a.redo,tip:o.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:a.heading1||a.heading,tip:o.heading1,htmlTip:`<h1 class="q-ma-none">${o.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:a.heading2||a.heading,tip:o.heading2,htmlTip:`<h2 class="q-ma-none">${o.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:a.heading3||a.heading,tip:o.heading3,htmlTip:`<h3 class="q-ma-none">${o.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:a.heading4||a.heading,tip:o.heading4,htmlTip:`<h4 class="q-ma-none">${o.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:a.heading5||a.heading,tip:o.heading5,htmlTip:`<h5 class="q-ma-none">${o.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:a.heading6||a.heading,tip:o.heading6,htmlTip:`<h6 class="q-ma-none">${o.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:a.heading,tip:o.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:a.code,htmlTip:`<code>${o.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:a.size1||a.size,tip:o.size1,htmlTip:`<font size="1">${o.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:a.size2||a.size,tip:o.size2,htmlTip:`<font size="2">${o.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:a.size3||a.size,tip:o.size3,htmlTip:`<font size="3">${o.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:a.size4||a.size,tip:o.size4,htmlTip:`<font size="4">${o.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:a.size5||a.size,tip:o.size5,htmlTip:`<font size="5">${o.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:a.size6||a.size,tip:o.size6,htmlTip:`<font size="6">${o.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:a.size7||a.size,tip:o.size7,htmlTip:`<font size="7">${o.size7}</font>`}}}),r=T(()=>{const o=e.definitions||{},a=e.definitions||e.fonts?Me(!0,{},k.value,o,gt(s,u.lang.editor.defaultFont,u.iconSet.editor.font,e.fonts)):k.value;return e.toolbar.map(w=>w.map($=>{if($.options)return{type:"dropdown",icon:$.icon,label:$.label,size:"sm",dense:!0,fixedLabel:$.fixedLabel,fixedIcon:$.fixedIcon,highlight:$.highlight,list:$.list,options:$.options.map(Ae=>a[Ae])};const Q=a[$];return Q?Q.type==="no-state"||o[$]&&(Q.cmd===void 0||k.value[Q.cmd]&&k.value[Q.cmd].type==="no-state")?Q:Object.assign({type:"toggle"},Q):{type:"slot",slot:$}}))}),p={$q:u,props:e,slots:t,emit:l,inFullscreen:i,toggleFullscreen:P,runCmd:oe,isViewingSource:C,editLinkUrl:U,toolbarBackgroundClass:S,buttonProps:h,contentRef:c,buttons:r,setContent:le};te(()=>e.modelValue,o=>{O!==o&&(O=o,le(o,!0))}),te(U,o=>{l(`link${o?"Show":"Hide"}`)});const y=T(()=>e.toolbar&&e.toolbar.length!==0),A=T(()=>{const o={},a=w=>{w.key&&(o[w.key]={cmd:w.cmd,param:w.param})};return r.value.forEach(w=>{w.forEach($=>{$.options?$.options.forEach(a):a($)})}),o}),W=T(()=>i.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),D=T(()=>`q-editor q-editor--${C.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(i.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(m.value===!0?" q-editor--dark q-dark":"")),I=T(()=>[e.contentClass,"q-editor__content",{col:i.value,"overflow-auto":i.value||e.maxHeight}]),ze=T(()=>e.disable===!0?{"aria-disabled":"true"}:{});function Te(){if(c.value!==null){const o=`inner${C.value===!0?"Text":"HTML"}`,a=c.value[o];a!==e.modelValue&&(O=a,l("update:modelValue",a))}}function Pe(o){if(l("keydown",o),o.ctrlKey!==!0||ke(o)===!0){M();return}const a=o.keyCode,w=A.value[a];if(w!==void 0){const{cmd:$,param:Q}=w;We(o),oe($,Q,!1)}}function Le(o){M(),l("click",o)}function Ue(o){if(c.value!==null){const{scrollTop:a,scrollHeight:w}=c.value;H=w-a}p.caret.save(),l("blur",o)}function $e(o){Ke(()=>{c.value!==null&&H!==void 0&&(c.value.scrollTop=c.value.scrollHeight-H)}),l("focus",o)}function Ve(o){const a=z.value;if(a!==null&&a.contains(o.target)===!0&&(o.relatedTarget===null||a.contains(o.relatedTarget)!==!0)){const w=`inner${C.value===!0?"Text":"HTML"}`;p.caret.restorePosition(c.value[w].length),M()}}function He(o){const a=z.value;a!==null&&a.contains(o.target)===!0&&(o.relatedTarget===null||a.contains(o.relatedTarget)!==!0)&&(p.caret.savePosition(),M())}function de(){H=void 0}function ce(o){p.caret.save()}function le(o,a){if(c.value!==null){a===!0&&p.caret.savePosition();const w=`inner${C.value===!0?"Text":"HTML"}`;c.value[w]=o,a===!0&&(p.caret.restorePosition(c.value[w].length),M())}}function oe(o,a,w=!0){ne(),p.caret.restore(),p.caret.apply(o,a,()=>{ne(),p.caret.save(),w&&M()})}function M(){setTimeout(()=>{U.value=null,n.$forceUpdate()},1)}function ne(){Ge(()=>{c.value!==null&&c.value.focus({preventScroll:!0})})}function Oe(){return c.value}return ye(()=>{p.caret=n.caret=new ut(c.value,p),le(e.modelValue),M(),document.addEventListener("selectionchange",ce)}),_e(()=>{document.removeEventListener("selectionchange",ce)}),Object.assign(n,{runCmd:oe,refreshToolbar:M,focus:ne,getContentEl:Oe}),()=>{let o;if(y.value){const a=[b("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+S.value},mt(p))];U.value!==null&&a.push(b("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+S.value},yt(p))),o=b("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},a)}return b("div",{ref:z,class:D.value,style:{height:i.value===!0?"100%":null},...ze.value,onFocusin:Ve,onFocusout:He},[o,b("div",{ref:c,style:W.value,class:I.value,contenteditable:g.value,placeholder:e.placeholder,...B.listeners.value,onInput:Te,onKeydown:Pe,onClick:Le,onBlur:Ue,onFocus:$e,onMousedown:de,onTouchstartPassive:de})])}}});const vt=e=>(Ze("data-v-eb8274aa"),e=e(),je(),e),wt={class:"text-h6 text-weight-bold row justify-between"},bt={class:"row text-grey-3 text-weight-bold text-h5"},kt=vt(()=>x("div",{class:"text-green rounded-borders text-weight-bolder"},"YGP",-1)),xt={class:"q-px-md no-border text-secondary"},Ct=["set"],St={style:{"border-radius":"4px 4px"},class:"rounded-borders"},qt={class:"text-weight-bold",style:{color:"rgb(0, 23, 85)","text-transform":"capitalize"}},Bt={class:"fontdstyle"},zt={class:"row q-gutter-sm"},Tt={key:0,class:"col-shrink column"},Pt={class:"fontastyle"},Lt={style:{"border-radius":"4px 4px"},class:"rounded-borders"},Ut={class:"text-weight-bold",style:{color:"rgb(0, 23, 85)","text-transform":"capitalize"}},$t={style:{"border-radius":"4px 4px"},class:"rounded-borders"},Vt={class:"text-weight-bold",style:{color:"rgb(0, 23, 85)","text-transform":"capitalize"}},Ht={class:"col q-gutter-xs row"},Ot={style:{"border-radius":"4px 4px"},class:"rounded-borders"},At={class:"text-weight-bold",style:{color:"rgb(0, 23, 85)","text-transform":"capitalize"}},Dt={class:"col q-gutter-xs row"},Nt={style:{"border-radius":"4px 4px"},class:"rounded-borders"},Rt={class:"text-black text-weight-bold",style:{color:"rgb(0, 23, 85)","text-transform":"capitalize"}},Et={__name:"mainForm",props:{_xDisplayDefaulted:{type:Object,default:()=>({})},_rolesColumns:{type:Object,default:()=>({})},_this:{type:Object,default:()=>({})},_thisDefault:{type:Object,default:()=>({})},__thisOps:{type:String,default:""},inputColor:{type:String,default:""},thisSchemaFile:{type:String,required:!0},thisSchemaPath:{type:String,required:!0}},emits:["create","update","close"],setup(e,{emit:t}){const{_debugObj:l,_validateThis:n}=it();var u=e,m=T(()=>u._rolesColumns),i=T(()=>u._this),P=T(()=>u._thisDefault);let B=T(()=>{var C;return{"background-color":(C=u.inputColor)!=null?C:"white"}});const z=t;function c(C){if(!Object.values(l.value).every(s=>s==null))return!1;z(C,i.value)}function U(){z("close",!1)}return tt("",u.thisSchemaPath).then(C=>{}),(C,g)=>(f(),v(Xe,{style:{"min-width":"60vw"}},{default:q(()=>[L(he,{style:{background:"rgb(15, 59, 0)",border:"1px solid rgb(1, 58, 163)","font-family":"Sans-serif","min-width":"50vh"},class:"text-bold"},{default:q(()=>[x("div",wt,[x("div",bt,E(e.__thisOps=="CreateRowItem"?"Registeration":"Update")+" Form ",1),kt])]),_:1}),L(ae),L(he,{class:"scroll shadow-5 text-white",style:{"max-height":"60vh",background:"rgb(233, 231, 231)"}},{default:q(()=>[x("fieldset",xt,[L(ae,{inset:""}),L(X,{class:"row",style:{width:"50vw"}},{default:q(()=>[(f(!0),V(N,null,Y(d(m),(s,H)=>(f(),v(G,{key:H,class:"col-grow row"},{default:q(()=>{var O;return[e._xDisplayDefaulted.includes(s.name)?J("",!0):(f(),V("div",{key:0,set:C.tier_0schema=s.schema,style:{width:"100%"},class:"col-grow row"},[(O=s.schema.type)!=null&&O?(f(),v(F,{key:0,class:"column q-gutter-xs col-12 text-wight-bold"},{default:q(()=>{var S,h,k,r,p;return[x("fieldset",St,[x("legend",qt,E(s.name),1),x("div",{style:Z(d(B))},[s.schema.type=="Array"?(f(),V(N,{key:0},[],64)):(f(),V(N,{key:1},[(S=s.schema.enum)!=null&&S?(f(),v(j,{key:0,style:{"min-width":"7vw"},color:"secondary",outlined:"",dense:"",modelValue:d(i)[s.name],"onUpdate:modelValue":y=>d(i)[s.name]=y,options:s.schema.enum,single:"","use-chips":"","stack-label":"","label-color":"black",class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","options"])):(h=s.schema.vtype)!=null&&h?(f(),V(N,{key:1},[pe(x("div",{style:{"backdrop-filter":"blur(15px)",width:"80%"},class:"text-weight-bold text-red"},E(d(l)[s.name]),513),[[me,(k=d(l)[s.name])!=null?k:!1]]),L(_,{style:{"min-width":"7vw"},dense:"",outlined:"",modelValue:d(i)[s.name],"onUpdate:modelValue":[y=>d(i)[s.name]=y,y=>d(n)(s.name)],type:s.schema.vtype,capture:"user",class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","type"])],64)):(r=s.schema.textarea)!=null&&r?(f(),v(ee,{key:2,dense:"",outlined:"",modelValue:d(i)[s.name],"onUpdate:modelValue":y=>d(i)[s.name]=y,filled:"",autogrow:"",label:s.name,class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","label"])):(f(),V(N,{key:3},[pe(x("div",{style:{"backdrop-filter":"blur(15px)",width:"80%"},class:"text-weight-bold text-red"},E(d(l)[s.name]),513),[[me,(p=d(l)[s.name])!=null?p:!1]]),L(_,{style:{"min-width":"7vw"},dense:"",outlined:"",modelValue:d(i)[s.name],"onUpdate:modelValue":[y=>d(i)[s.name]=y,y=>d(n)(s.name)],type:s.schema.type,class:"col text-weight-bold","lazy-rules":"",rules:[y=>y&&y.length>0||"Please type something"]},null,8,["modelValue","onUpdate:modelValue","type","rules"])],64))],64))],4)])]}),_:2},1024)):Array.isArray(s.schema)?(f(),v(F,{key:1,class:"column q-gutter-xs col-12",style:{"min-width":"30vw"}},{default:q(()=>[L(F,null,{default:q(()=>[x("div",Bt,E(s.name),1),x("div",zt,[L(R,{unelevated:"",size:"sm",round:"",outline:"",dense:!0,rounded:"",color:"purple",label:"# "+d(i)[s.name].length},null,8,["label"]),L(R,{flat:"",size:"sm",class:"col",dense:!0,color:"white",icon:"add",label:"Create "+s.name,onClick:S=>d(i)[s.name].push(d(P)[s.name][0])},null,8,["label","onClick"])])]),_:2},1024),d(i)[s.name].length?(f(),v(st,{key:0,class:"bg-grey-12 row",style:{height:"40vh",width:"100%"}},{default:q(()=>[L(X,null,{default:q(()=>[(f(!0),V(N,null,Y(d(i)[s.name],(S,h)=>(f(),v(G,{key:h,class:"col q-gutter-xs column"},{default:q(()=>[h>=1?(f(),V("div",Tt,[x("div",Pt,E(h),1),x("div",null,[L(R,{onClick:k=>d(i)[s.name].splice(h,1),dense:"true",label:"remove"},null,8,["onClick"])])])):J("",!0),L(X,{class:"row q-gutter-sm"},{default:q(()=>[(f(!0),V(N,null,Y(s.schema[0],(k,r)=>(f(),v(G,{key:r,class:"col-auto q-pa-none"},{default:q(()=>{var p;return[(p=k.type)!=null&&p?(f(),v(F,{key:0,class:"col text-wight-bold"},{default:q(()=>{var y,A,W;return[x("fieldset",Lt,[x("legend",Ut,E(r),1),x("div",{style:Z(d(B))},[k.type=="Array"?(f(),V(N,{key:0},[],64)):(f(),V(N,{key:1},[(y=k.enum)!=null&&y?(f(),v(j,{key:0,style:{"min-width":"6vw"},color:"secondary",outlined:"",dense:"",modelValue:d(i)[s.name][h][r],"onUpdate:modelValue":D=>d(i)[s.name][h][r]=D,options:k.enum,single:"","use-chips":"","stack-label":"","label-color":"black",class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","options"])):(A=k.vtype)!=null&&A?(f(),v(_,{key:1,style:{"min-width":"5vw"},dense:"",outlined:"",modelValue:d(i)[s.name][h][r],"onUpdate:modelValue":D=>d(i)[s.name][h][r]=D,type:k.vtype,capture:"user",class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","type"])):(W=k.textarea)!=null&&W?(f(),v(ee,{key:2,dense:"",style:{"min-width":"5vw"},outlined:"",modelValue:d(i)[s.name][h][r],"onUpdate:modelValue":D=>d(i)[s.name][h][r]=D,filled:"",autogrow:"",label:r,class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","label"])):(f(),v(_,{key:3,style:{"min-width":"5vw"},dense:"",outlined:"",modelValue:d(i)[s.name][h][r],"onUpdate:modelValue":D=>d(i)[s.name][h][r]=D,type:k.type,class:"col text-weight-bold","lazy-rules":"",rules:[D=>D&&D.length>0||"Please type something"]},null,8,["modelValue","onUpdate:modelValue","type","rules"]))],64))],4)])]}),_:2},1024)):J("",!0)]}),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)):J("",!0)]),_:2},1024)):(f(),v(F,{key:2,class:"row q-gutter-xs col-12",style:{width:"100%"}},{default:q(()=>[x("fieldset",$t,[x("legend",Vt,E(s.name),1),L(X,{class:"row items-top q-gutter-sm q-pa-xs"},{default:q(()=>[(f(!0),V(N,null,Y(s.schema,(S,h)=>(f(),v(G,{key:h,class:"col-grow q-gutter-xs row",style:{"min-width":"3vw"}},{default:q(()=>{var k;return[x("div",Ht,[(k=S.type)!=null&&k?(f(),v(F,{key:0,class:"text-wight-bold"},{default:q(()=>{var r,p,y;return[x("fieldset",Ot,[x("legend",At,E(h),1),x("div",{style:Z(d(B))},[S.type=="Array"?(f(),V(N,{key:0},[],64)):(f(),V(N,{key:1},[(r=S.enum)!=null&&r?(f(),v(j,{key:0,style:{"min-width":"7vw"},color:"secondary",outlined:"",dense:"",modelValue:d(i)[s.name][h],"onUpdate:modelValue":A=>d(i)[s.name][h]=A,options:S.enum,single:"","use-chips":"","stack-label":"","label-color":"black",class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","options"])):(p=S.textarea)!=null&&p?(f(),v(ee,{key:1,dense:"",outlined:"",modelValue:d(i)[s.name][h],"onUpdate:modelValue":A=>d(i)[s.name][h]=A,filled:"",autogrow:"",label:h,class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","label"])):(y=S.vtype)!=null&&y?(f(),v(_,{key:2,style:{"min-width":"7vw"},dense:"",outlined:"",modelValue:d(i)[s.name][h],"onUpdate:modelValue":A=>d(i)[s.name][h]=A,type:S.vtype,class:"col text-weight-bold","lazy-rules":""},null,8,["modelValue","onUpdate:modelValue","type"])):(f(),v(_,{key:3,style:{"min-width":"7vw"},dense:"",outlined:"",modelValue:d(i)[s.name][h],"onUpdate:modelValue":A=>d(i)[s.name][h]=A,type:S.type,class:"col text-weight-bold","lazy-rules":""},null,8,["modelValue","onUpdate:modelValue","type"]))],64))],4)])]}),_:2},1024)):(f(),v(F,{key:1},{default:q(()=>[x("b",null,E(h),1),L(X,null,{default:q(()=>[(f(!0),V(N,null,Y(S,(r,p)=>(f(),v(G,{key:p,class:"col q-gutter-xs row",style:{"min-width":"7vw"}},{default:q(()=>{var y;return[x("div",Dt,[(y=r.type)!=null&&y?(f(),v(F,{key:0,class:"text-wight-bold"},{default:q(()=>{var A,W,D;return[x("fieldset",Nt,[x("legend",Rt,E(p),1),x("div",{style:Z(d(B))},[r.type=="Array"?(f(),V(N,{key:0},[],64)):(f(),V(N,{key:1},[(A=r.enum)!=null&&A?(f(),v(j,{key:0,style:{"min-width":"7vw"},color:"secondary",outlined:"",dense:"",modelValue:d(i)[s.name][h][p],"onUpdate:modelValue":I=>d(i)[s.name][h][p]=I,options:r.enum,single:"","use-chips":"","stack-label":"","label-color":"black",class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","options"])):(W=r.vtype)!=null&&W?(f(),v(_,{key:1,style:{"min-width":"7vw"},dense:"",outlined:"",modelValue:d(i)[s.name][h][p],"onUpdate:modelValue":I=>d(i)[s.name][h][p]=I,type:r.vtype,capture:"user",class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","type"])):(D=r.textarea)!=null&&D?(f(),v(ee,{key:2,dense:"",outlined:"",modelValue:d(i)[s.name][h][p],"onUpdate:modelValue":I=>d(i)[s.name][h][p]=I,filled:"",autogrow:"",label:p,class:"col text-weight-bold"},null,8,["modelValue","onUpdate:modelValue","label"])):(f(),v(_,{key:3,style:{"min-width":"7vw"},dense:"",outlined:"",modelValue:d(i)[s.name][h][p],"onUpdate:modelValue":I=>d(i)[s.name][h][p]=I,type:r.type,class:"col text-weight-bold","lazy-rules":""},null,8,["modelValue","onUpdate:modelValue","type"]))],64))],4)])]}),_:2},1024)):J("",!0)])]}),_:2},1024))),128))]),_:2},1024)]),_:2},1024))])]}),_:2},1024))),128))]),_:2},1024)])]),_:2},1024))],8,Ct))]}),_:2},1024))),128))]),_:1})])]),_:1}),L(ae),L(Je,null,{default:q(()=>[L(R,{outlined:"",label:"CANCEL",color:"red",onClick:g[0]||(g[0]=s=>U(!1))}),e.__thisOps=="CreateRowItem"?(f(),v(R,{key:0,outlined:"",label:"Create",color:"green",onClick:g[1]||(g[1]=s=>c("create"))})):(f(),v(R,{key:1,outlined:"",label:"Update",color:"orange",onClick:g[2]||(g[2]=s=>c("update"))}))]),_:1})]),_:1}))}};var Gt=Ye(Et,[["__scopeId","data-v-eb8274aa"]]);Array.from({length:12},(e,t)=>new Date(null,t,null).toLocaleDateString("en",{month:"short"}));const Be=new Date;Be.getFullYear();Be.getMonth();const Yt=()=>{let e=K(!0);function t(l,n){return e.value||!(n!=null&&n)?l:l.filter((m,i)=>{var S,h,k;let P=!0,B=!1,z=!1,c=!1,U=n.search?n.search.toLowerCase():"";if(U!=""){P=!1;let p=Object.values(m).map(y=>{try{return y.toString().toLowerCase()}catch{return" "}});for(let y=0;y<p.length;y++)if(p[y].includes(U)){P=!0;break}}let C=(S=m.catagories)!=null?S:!1;C=="Machinery"?B=n.Machines:C=="Consumable"?B=n.Consumable:C=="Accessory"?B=n.Acce:C=="Tools"?B=n.Tools:C=="Spares"?B=n.Spares:C=="Sanitary"?B=n.Sanitary:C=="RaWMatterial"&&(B=n.Raws);let g=!1,s=!1,H=!1;(h=m.storeStatus)!=null&&h&&(g=!m.storeStatus.status,s=!(!m.storeStatus.Onstore&&g),H=!!m.storeStatus.taken),z=n.Issued&&g?!0:z,z=n.Onstore&&s?!0:z,z=n.taken&&H?!0:z;let O=(k=n.filterDays)!=null?k:!1;if(m.updatedAt&&O){let r=m.updatedAt.split("/"),p=Number(r[0]),y=Number(r[1]);p>=new Date().getMonth()+1&&(y>=new Date().getDate()-O.max||O.max==2||O.max==8)&&(c=!0)}else c=!0;return!!(P&&B&&z&&c)})}return{_enableRowFilter:e,_thisFiltering:t}};export{Gt as m,Yt as u};
