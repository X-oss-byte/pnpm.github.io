"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3733],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(r),s=a,f=d["".concat(p,".").concat(s)]||d[s]||u[s]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(1966),a=r(9836),i=(r(9496),r(9613)),o=["components"],c={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"version-7.x/cli/patch-commit",title:"pnpm patch-commit <path>",description:"Added in: v7.4.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/tr/7.x/cli/patch-commit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"version-7.x/docs",previous:{title:"pnpm patch <pkg>",permalink:"/tr/7.x/cli/patch"},next:{title:"pnpm dedupe",permalink:"/tr/7.x/cli/dedupe"}},m={},d=[{value:"Parametreler",id:"parametreler",level:2},{value:"---patches-dir &lt;dir&gt;",id:"---patches-dir-dir",level:3}],u={toc:d},s="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v7.4.0"),(0,i.kt)("p",null,"Generate a patch out of a directory (inspired by a similar command in Yarn)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"---patches-dir-dir"},"---patches-dir ","<","dir>"),(0,i.kt)("p",null,"Added in: v7.30.0"),(0,i.kt)("p",null,"The generated patch file will be saved to this directory. By default, patches are saved to the ",(0,i.kt)("inlineCode",{parentName:"p"},"patches")," directory in the root of the project."))}f.isMDXComponent=!0}}]);