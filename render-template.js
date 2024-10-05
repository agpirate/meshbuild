module.exports=function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html><html ' +
((__t = ( _meta.htmlAttrs )) == null ? '' : __t) +
'><head>' +
((__t = ( _meta.headTags )) == null ? '' : __t) +
' <title>Quasar App</title><meta charset=utf-8><meta name=description content="A Quasar Project"><meta name=format-detection content="telephone=no"><meta name=msapplication-tap-highlight content=no><meta name=viewport content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width"><link rel=icon type=image/png sizes=128x128 href=/icons/favicon-128x128.png><link rel=icon type=image/png sizes=96x96 href=/icons/favicon-96x96.png><link rel=icon type=image/png sizes=32x32 href=/icons/favicon-32x32.png><link rel=icon type=image/png sizes=16x16 href=/icons/favicon-16x16.png><link rel=icon type=image/ico href=/favicon.ico><script type=module crossorigin src=/assets/index.5600d395.js></script><link rel=stylesheet href=/assets/index.37c2d891.css> ' +
((__t = ( _meta.endingHeadTags || '' )) == null ? '' : __t) +
'</head><body class="' +
((__t = ( _meta.bodyClasses )) == null ? '' : __t) +
'" ' +
((__t = ( _meta.bodyAttrs )) == null ? '' : __t) +
'>' +
((__t = ( _meta.bodyTags )) == null ? '' : __t) +
' <div id=q-app>' +
((__t = ( _meta.runtimePageContent )) == null ? '' : __t) +
'</div></body></html>';

}
return __p
}