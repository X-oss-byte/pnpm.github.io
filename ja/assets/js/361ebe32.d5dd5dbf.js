"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6118],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(2962),a=r(2742),o=(r(9496),r(9613)),c=["components"],i={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"cli/patch-commit",title:"pnpm patch-commit <path>",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v7.4.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/ja/next/cli/patch-commit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"docs",previous:{title:"pnpm patch <pkg>",permalink:"/ja/next/cli/patch"},next:{title:"pnpm dedupe",permalink:"/ja/next/cli/dedupe"}},u={},m=[{value:"Options",id:"options",level:2},{value:"---patches-dir &lt;dir&gt;",id:"---patches-dir-dir",level:3}],s={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v7.4.0"),(0,o.kt)("p",null,"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u30d1\u30c3\u30c1\u3092\u751f\u6210\u3057\u307e\u3059(Yarn\u306e\u540c\u69d8\u306e\u30b3\u30de\u30f3\u30c9\u306b\u89e6\u767a\u3055\u308c\u307e\u3057\u305f)\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"---patches-dir-dir"},"---patches-dir ","<","dir>"),(0,o.kt)("p",null,"Added in: v7.30.0"),(0,o.kt)("p",null,"The generated patch file will be saved to this directory. By default, patches are saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"patches")," directory in the root of the project."))}d.isMDXComponent=!0}}]);