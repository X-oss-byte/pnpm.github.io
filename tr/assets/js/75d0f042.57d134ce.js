"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1340],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(r),s=a,f=d["".concat(p,".").concat(s)]||d[s]||u[s]||c;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(2962),a=r(2742),c=(r(9496),r(9613)),i=["components"],o={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"cli/patch-commit",title:"pnpm patch-commit <path>",description:"Added in: v7.4.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/tr/next/cli/patch-commit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"docs",previous:{title:"pnpm patch <pkg>",permalink:"/tr/next/cli/patch"},next:{title:"pnpm dedupe",permalink:"/tr/next/cli/dedupe"}},m={},u=[{value:"Parametreler",id:"parametreler",level:2},{value:"---patches-dir &lt;dir&gt;",id:"---patches-dir-dir",level:3}],d={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Added in: v7.4.0"),(0,c.kt)("p",null,"Generate a patch out of a directory (inspired by a similar command in Yarn)."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")),(0,c.kt)("h2",{id:"parametreler"},"Parametreler"),(0,c.kt)("h3",{id:"---patches-dir-dir"},"---patches-dir ","<","dir>"),(0,c.kt)("p",null,"Added in: v7.30.0"),(0,c.kt)("p",null,"The generated patch file will be saved to this directory. By default, patches are saved to the ",(0,c.kt)("inlineCode",{parentName:"p"},"patches")," directory in the root of the project."))}s.isMDXComponent=!0}}]);