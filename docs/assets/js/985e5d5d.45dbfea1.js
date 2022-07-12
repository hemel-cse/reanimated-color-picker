"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,k=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6,sidebar_label:"Panel3",description:"A circle-shaped slider is used for changing the color's hue and saturation."},l="<Panel3 />",o={unversionedId:"API/Panel3",id:"API/Panel3",title:"<Panel3 />",description:"A circle-shaped slider is used for changing the color's hue and saturation.",source:"@site/docs/API/Panel3.md",sourceDirName:"API",slug:"/API/Panel3",permalink:"/reanimated-color-picker/docs/API/Panel3",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Panel3",description:"A circle-shaped slider is used for changing the color's hue and saturation."},sidebar:"tutorialSidebar",previous:{title:"Panel2",permalink:"/reanimated-color-picker/docs/API/Panel2"},next:{title:"HueSlider",permalink:"/reanimated-color-picker/docs/API/HueSlider"}},d={},p=[],c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"panel3-"},(0,a.kt)("inlineCode",{parentName:"h1"},"<Panel3 />")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"panel2",src:n(9277).Z,width:"200",height:"200"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A circle-shaped slider is used for changing the color's hue and saturation."),(0,a.kt)("li",{parentName:"ul"},"Move the handle around the center to change the color's hue."),(0,a.kt)("li",{parentName:"ul"},"Move the handle away or toward the center to change the color's saturation.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You need to add ",(0,a.kt)("a",{parentName:"li",href:"#small_orange_diamondbrightnessslider-"},(0,a.kt)("inlineCode",{parentName:"a"},"<BrightnessSlider />"))," alongside with it."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"thumbSize"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"35")),(0,a.kt)("td",{parentName:"tr",align:"left"},"panel's handle (thumb) size (height","*","width)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"thumbColor"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"interactive",(0,a.kt)("inlineCode",{parentName:"td"},"*")),(0,a.kt)("td",{parentName:"tr",align:"left"},"change thumb's color")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"thumbShape"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"'ring'")),(0,a.kt)("td",{parentName:"tr",align:"left"},"change thumb's shape: ",(0,a.kt)("inlineCode",{parentName:"td"},"'ring'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'solid'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'hollow'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'line'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'plus'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'pill'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'triangleUp'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'triangleDown'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'doubleTriangle'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'rect'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'circle'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"style"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ViewStyle")),(0,a.kt)("td",{parentName:"tr",align:"center"},"/"),(0,a.kt)("td",{parentName:"tr",align:"left"},"panel's container style")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Some style properties will be overwritten."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"*","interactive")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The thumb color will be changed depending on the contrast ratio if no color value is passed."))))}m.isMDXComponent=!0},9277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/panel3-3b7d2d9898197da5851a715050c30f95.png"}}]);