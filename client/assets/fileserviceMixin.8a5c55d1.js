import{r as a}from"./index.a33c9604.js";const I=()=>{let i=a(null),f=a(null),g=a(null),d=a(!1),s=a([]),n=a([]),_=a(0),y=a(!1);a(0),a(!0);async function F(v,e){let l=v.target.files==null||v.target.files.length==0?!1:v.target.files;if(l){await p(),f.value=e,g.value="folder";for(let t=0;t<l.length;t++)s.value.push(l[t]),n.value.push(URL.createObjectURL(l[t]))}}let u=a({}),w=a("");u.value.width=100,u.value.height=100;async function p(){return f.value=null,g.value=null,d.value=!1,n.value=[],s.value=[],_.value=0,y.value=!1,!0}async function U(v){var e;return(e=y.value)!=null&&e?(n.value.splice(v,1),s.value.splice(v,1)):_.value=v,!0}let D=a({}),M=a([]),S=a([]),o=a(!1),m=a(!0),C=a(""),c=a(""),r=a({});a(""),a("");const N=a(!1),h=a({facingMode:"user",aspectRatio:{min:1,max:1.7777777778},width:{min:1280},height:{min:720}});class A{constructor(){console.error("Init.. Device Naviator")}async _navigateDevice(){var l,t,R;try{if(i.value=navigator.mediaDevices,console.error(i.value,"Navigating mediaDevice.op"),(l=i.value)!=null&&l){D.value.getUserMedia=(t=i.value.getUserMedia)!=null?t:{};for(let E of["getUserMedia","webkitGetUserMedia","mozGetUserMedia","msGetUserMedia"]){var e=(R=navigator[E])!=null?R:!1;e&&(D.value[E]=e)}}else i.value=null}catch(E){i.value=null,console.log(E,"EEEEEEEEEEEEEEEEEEEEEEEEEEEE")}return!0}async _enumNavigateDevice(){try{return await i.value.enumerateDevices().then(e=>{M.value=[];for(let l in e){let t=e[l];t.kind==="videoinput"?(o.value=t.deviceId,M.value.push(t)):(C.value=t.deviceId,S.value.push(t))}return!0})}catch{}return!0}async _openCamera(e=""){var l,t;return console.error("Navigating mediaDevice."),await p(),await this._navigateDevice(),d.value=!0,g.value="camera",(l=D.value.getUserMedia)!=null&&l?(await this._enumNavigateDevice(),f.value=e,(t=o.value)!=null&&t&&(h.value.deviceId={exact:o.value}),h.value.facingMode=m.value?"user":"environment",c.value=await i.value.getUserMedia({video:h.value,audio:N.value}),r.value.srcObject=c.value,r.value.onloadedmetadata=()=>{r.value.play()}):console.error("Navigating mediaDevice.Error"),!0}async _stopCamera(){await p();try{c.value.getTracks().forEach(e=>{e.stop(),e=!1})}catch{c.value.getVideoTracks().forEach(e=>{e.stop(),e=!1})}return r.value.src=null,!0}async _operateDevice(e){return e=="pause"?r.value.pause():e=="play"&&r.value.play(),!0}async _saveScreenShoots(){d.value=!1;try{c.value.getTracks().forEach(e=>{e.stop(),e=!1})}catch{c.value.getVideoTracks().forEach(e=>{e.stop(),e=!1})}return r.value.src=null,!0}async _screenShoot(e=!1){if(e)return s.value=[],n.value=[],!0;w.value=u.value.getContext("2d"),w.value.drawImage(r.value,0,0,u.value.width,u.value.height);try{n.value.push(u.value.toDataURL("image/png")),u.value.toBlob(l=>{s.value.push(new File([l],"fileName.png"+String(new Date),{type:"image/png"},.9))},"image/png")}catch{n.value.push(u.value.toDataURL("image/jpeg")),u.value.toBlob(l=>{s.value.push(new File([l],"fileName.jpeg"+String(new Date),{type:"image/jpeg"},.9))},"image/jpeg")}return console.log(w,"lllllllllll"),!0}async _setCameraParam(e="",l=!1){return m.value=l,o.value=e,await _openCamera()}async _setMicParam(e=""){return C.value=S.value.deviceId[e],await _openCamera()}}return{_thisMedia:i,_fileAttributeName:f,_cameraBox:d,_fileSourceFoCam:g,_fileAsSRC:n,_fileAsRaw:s,_liveFeedSRC:u,_fileAsSRCIndex:_,_cameraDevice:A,_listCameraSource:M,_selectedCameraById:o,_selectedCameraByface:m,_liveFeedRawStreaming:r,_fileSourceFolder:F,_fileAsSRCOps:y,_fileAsSRCOpsCall:U,_resetFileSource:p}};export{I as u};
