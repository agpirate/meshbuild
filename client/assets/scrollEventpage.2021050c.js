import{r as o,o as d,a as t}from"./index.9448454b.js";function w(l=200){const e=o(!1),n=o(!1),r=o(!1),s=o(0),i=()=>(n.value=window.scrollY>s.value,e.value=window.scrollY>l,s.value=e.value?window.scrollY:window.scrollY+l,r.value=window.scrollY+window.innerHeight>=document.body.scrollHeight-5,console.log("windowH -",window.innerHeight,"; Yscrolls - ",window.scrollY,"sumWindows_Height -",window.scrollY+window.innerHeight,"; BodyHeights -",document.body.scrollHeight),!0);return d(()=>{window.addEventListener("scroll",i)}),t(()=>{window.removeEventListener("scroll",i)}),{isScrolled:e,isScrolledUp:n,isScrolledDown:r}}export{w as u};
