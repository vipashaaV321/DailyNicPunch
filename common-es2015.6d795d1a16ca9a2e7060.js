(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s}));const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},c=()=>{r.selectionChanged()},s=()=>{r.selectionEnd()},a=t=>{r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},"H/yF":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL"),i=n("tk/3");let o=(()=>{class t{constructor(t){this.http=t}getdata(t){try{return this.http.get(`http://newsapi.org/v2/${t}&apikey=26c308ecce174eb4ab330254f00c7bea`)}catch(e){console.error(e.status),console.error(e.error),console.error(e.headers)}}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(i.b))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},NKIX:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("QX1p"),i=n("ItpF"),o=n("2c9M");const c=(t,e)=>{let n,c;const s=(t,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(u(),a(o,i)):u()},a=(t,e)=>{n=t,c||(c=n);const i=n;Object(r.n)(()=>i.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!n)return;const e=n;Object(r.n)(()=>e.classList.remove("ion-activated")),t&&c!==n&&n.click(),n=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,o.a),onMove:t=>s(t.currentX,t.currentY,o.b),onEnd:()=>{u(!0),Object(o.e)(),c=void 0}})}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));const r=async(t,e,n,r,i)=>{if(t)return t.attachViewToDom(e,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},YXEz:function(t,e,n){"use strict";n.r(e),n.d(e,"NewsPageModule",(function(){return f}));var r=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),c=n("tyNb"),s=n("fXoL"),a=n("H/yF");const u=[{path:"",component:(()=>{class t{constructor(t){this.newsService=t}ngOnInit(){console.log(this.newsService.currentArticle)}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(a.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-news"]],decls:5,vars:0,template:function(t,e){1&t&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.hc(3,"news"),s.Lb(),s.Lb(),s.Lb(),s.Kb(4,"ion-content"))},directives:[o.i,o.q,o.p,o.h],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(u)],c.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[r.b,i.a,o.r,l]]}),t})()},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s}));const r=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}},qtYk:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),c=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.b,i.a,o.r]]}),t})()}}]);