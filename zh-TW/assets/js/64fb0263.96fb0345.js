"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7989],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),f=o,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var r=n(1966),o=n(9836),i=(n(9496),n(9613)),a=["components"],l={id:"limitations",title:"Limitations"},p=void 0,m={unversionedId:"limitations",id:"limitations",title:"Limitations",description:"1. npm-shrinkwrap.json \u8207 package-lock.json \u88ab\u5ffd\u7565\u3002 \u8207 pnpm \u4e0d\u540c\uff0cnpm \u53ef\u4ee5\u5b89\u88dd\u76f8\u540c\u7684 name@version \u4e26\u4e14\u64c1\u6709\u4e0d\u540c\u7684\u4f9d\u8cf4\u5957\u4ef6\u7d44\u5408\u3002 npm \u7684 lockfile \u88ab\u8a2d\u8a08\u65bc\u53cd\u61c9\u6241\u5e73\u5316 node_modules \u7684\u5e03\u5c40\uff0c\u7136\u800c\uff0c\u7576 pnpm \u5efa\u7acb\u6642\u9810\u8a2d\u4f7f\u7528\u9694\u96e2\u5e03\u5c40\uff0c\u56e0\u6b64\u7121\u6cd5\u9075\u5faa npm \u7684 lockfile \u683c\u5f0f\u3002 layout, however, as pnpm creates an isolated layout by default, it cannot respect npm's lockfile format. \u82e5\u60a8\u5e0c\u671b\u5c07 lockfile \u8f49\u63db\u70ba pnpm \u683c\u5f0f\uff0c\u8acb\u53c3\u8003 pnpm import\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/zh-TW/next/limitations",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"limitations",title:"Limitations"},sidebar:"docs",previous:{title:"\u6a19\u8a8c",permalink:"/zh-TW/next/logos"},next:{title:"\u57fa\u65bc\u7b26\u865f\u9023\u63a5\u7684 node_modules \u7d50\u69cb",permalink:"/zh-TW/next/symlinked-node-modules-structure"}},s={},c=[],u={toc:c},f="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," \u8207 ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json")," \u88ab\u5ffd\u7565\u3002 \u8207 pnpm \u4e0d\u540c\uff0cnpm \u53ef\u4ee5\u5b89\u88dd\u76f8\u540c\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"name@version")," \u4e26\u4e14\u64c1\u6709\u4e0d\u540c\u7684\u4f9d\u8cf4\u5957\u4ef6\u7d44\u5408\u3002 npm \u7684 lockfile \u88ab\u8a2d\u8a08\u65bc\u53cd\u61c9\u6241\u5e73\u5316 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," \u7684\u5e03\u5c40\uff0c\u7136\u800c\uff0c\u7576 pnpm \u5efa\u7acb\u6642\u9810\u8a2d\u4f7f\u7528\u9694\u96e2\u5e03\u5c40\uff0c\u56e0\u6b64\u7121\u6cd5\u9075\u5faa npm \u7684 lockfile \u683c\u5f0f\u3002 layout, however, as pnpm creates an isolated layout by default, it cannot respect npm's lockfile format. \u82e5\u60a8\u5e0c\u671b\u5c07 lockfile \u8f49\u63db\u70ba pnpm \u683c\u5f0f\uff0c\u8acb\u53c3\u8003 ",(0,i.kt)("a",{parentName:"li",href:"/zh-TW/next/cli/import"},"pnpm import"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"Binstubs (\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/.bin")," \u4e2d\u7684\u6a94\u6848) \u7686\u70ba shell \u6a94\u6848\uff0c\u4e26\u4e0d\u662f JS \u6a94\u6848\u7684\u7b26\u865f\u93c8\u7d50\u3002 Shell \u6a94\u6848\u88ab\u5275\u5efa\u4f86\u5354\u52a9\u53ef\u63d2\u62d4\u7684 CLI \u61c9\u7528\u7a0b\u5f0f\uff0c\u5728\u975e\u5e38\u898f\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," \u7d50\u69cb\u4e2d\u641c\u5c0b\u5b83\u7684\u5916\u639b\u7a0b\u5f0f\u3002 \u9019\u662f\u4e0d\u662f\u5e38\u898b\u7684\u554f\u984c\uff0c\u82e5\u60a8\u5e0c\u671b\u8a72\u6a94\u6848\u662f JS \u6a94\u6848\u683c\u5f0f\uff0c\u8acb\u76f4\u63a5\u5f15\u7528 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736")," \u4e2d\u6240\u63cf\u8ff0\u7684\u539f\u59cb\u6a94\u6848\u3002")),(0,i.kt)("p",null,"\u6709\u95dc\u65bc\u4e0a\u65b9\u9019\u4e9b\u554f\u984c\u7684\u89e3\u6c7a\u65b9\u6848\u55ce\uff1f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"\u5206\u4eab\u5b83\u5011\u5427\uff01")))}d.isMDXComponent=!0}}]);