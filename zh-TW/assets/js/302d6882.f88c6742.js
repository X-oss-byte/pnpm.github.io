"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8479],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),v=a,m=s["".concat(p,".").concat(v)]||s[v]||d[v]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=v;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(1966),a=n(9836),l=(n(9496),n(9613)),o=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"cli/remove",title:"pnpm remove",description:"\u6307\u4ee4\u5225\u540d\uff1arm, uninstall, un",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/zh-TW/next/cli/remove",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/zh-TW/next/cli/update"},next:{title:"pnpm link",permalink:"/zh-TW/next/cli/link"}},u={},s=[{value:"\u9078\u9805",id:"\u9078\u9805",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:s},v="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)(v,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6307\u4ee4\u5225\u540d\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"un")),(0,l.kt)("p",null,"\u5f9e ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u548c\u5c08\u6848\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u522a\u9664\u4f9d\u8cf4\u3002"),(0,l.kt)("h2",{id:"\u9078\u9805"},"\u9078\u9805"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/next/workspaces"},"\u5de5\u4f5c\u5340"),"\u4e2d\u4f7f\u7528\u6642\uff0c\u5c07\u5f9e\u6bcf\u500b\u5de5\u4f5c\u5340\u5305\u4e2d\u522a\u9664\u8a72\u4f9d\u8cf4\u9805\u3002"),(0,l.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"\u522a\u9664\u4e00\u500b\u5168\u57df\u5957\u4ef6\u3002"),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"\u50c5\u5f9e ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u4e2d\u522a\u9664\u4f9d\u8cf4\u9805\u3002"),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"\u50c5\u5f9e ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u4e2d\u522a\u9664\u4f9d\u8cf4\u9805\u3002"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"\u50c5\u5f9e ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u4e2d\u522a\u9664\u4f9d\u8cf4\u9805\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-TW/next/filtering"},"\u95b1\u8b80\u66f4\u591a\u95dc\u65bc filter \u7684\u8cc7\u8a0a\u3002")))}m.isMDXComponent=!0}}]);