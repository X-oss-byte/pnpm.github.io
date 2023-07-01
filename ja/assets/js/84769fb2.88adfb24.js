"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9094],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(1966),o=t(9836),p=(t(9496),t(9613)),i=["components"],a={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"version-8.x/cli/prune",title:"pnpm prune",description:"\u4e0d\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-8.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/ja/cli/prune",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"8.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-8.x/docs",previous:{title:"pnpm rebuild",permalink:"/ja/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/ja/cli/fetch"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],d={toc:s},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u4e0d\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--prod"},"--prod"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306b\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u306b\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"\u73fe\u5728\u306e prune \u30b3\u30de\u30f3\u30c9\u306f\u3001\u30e2\u30ce\u30ea\u30dd\u3067\u518d\u5e30\u7684\u306b\u5b9f\u884c\u3059\u308b\u6a5f\u80fd\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u3002 \u30e2\u30ce\u30ea\u30dd\u3067\u672c\u756a\u74b0\u5883\u7528\u306e\u4f9d\u5b58\u95a2\u4fc2\u3060\u3051\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u304d\u306f\u3001\u5168\u3066\u306e",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u3092\u524a\u9664\u3057\u3066\u304b\u3089",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),"\u30b3\u30de\u30f3\u30c9\u3067\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}f.isMDXComponent=!0}}]);