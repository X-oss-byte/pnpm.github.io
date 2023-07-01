"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1184],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),s=p,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:p,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(1966),p=r(9836),i=(r(9496),r(9613)),a=["components"],o={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"\u30d1\u30c3\u30c1\u3092\u9069\u7528\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6e96\u5099\u3057\u307e\u3059(Yarn\u306e\u540c\u69d8\u306e\u30b3\u30de\u30f3\u30c9\u306b\u89e6\u767a\u3055\u308c\u307e\u3057\u305f)\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/ja/next/cli/patch",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm dedupe",permalink:"/ja/next/cli/dedupe"},next:{title:"pnpm patch-commit <path>",permalink:"/ja/next/cli/patch-commit"}},u={},d=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3},{value:"--ignore-existing",id:"--ignore-existing",level:3}],m={toc:d},s="wrapper";function f(e){var t=e.components,r=(0,p.Z)(e,a);return(0,i.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30d1\u30c3\u30c1\u3092\u9069\u7528\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6e96\u5099\u3057\u307e\u3059(Yarn\u306e\u540c\u69d8\u306e\u30b3\u30de\u30f3\u30c9\u306b\u89e6\u767a\u3055\u308c\u307e\u3057\u305f)\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u4e00\u6642\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5c55\u958b\u3055\u308c\u3001\u305d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u3067\u306e\u7de8\u96c6\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u5909\u66f4\u304c\u7d42\u308f\u3063\u305f\u3089\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," \u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5c55\u958b\u3055\u308c\u305f\u4e00\u6642\u30c7\u30a3\u30ec\u30af\u30c8\u30ea) \u3092\u5b9f\u884c\u3057\u3066\u30d1\u30c3\u30c1\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u3001",(0,i.kt)("a",{parentName:"p",href:"/ja/next/package_json#pnpmpatcheddependencies"},(0,i.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4ecb\u3057\u3066\u30c8\u30c3\u30d7\u30ec\u30d9\u30eb\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306b\u305d\u308c\u3092\u767b\u9332\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4f7f\u3044\u65b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"pnpm patch \u30b3\u30de\u30f3\u30c9\u306e\u30c7\u30e2",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,i.kt)("p",null,"\u30d1\u30c3\u30c1\u306e\u9069\u7528\u304c\u5fc5\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3001\u3053\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u5c55\u958b\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--ignore-existing"},"--ignore-existing"),(0,i.kt)("p",null,"\u30d1\u30c3\u30c1\u9069\u7528\u6642\u306b\u65e2\u5b58\u306e\u30d1\u30c3\u30c1 \u30d5\u30a1\u30a4\u30eb\u3092\u7121\u8996\u3057\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);