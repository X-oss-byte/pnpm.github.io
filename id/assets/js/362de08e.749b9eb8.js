"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7541],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=l(r),d=i,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(1966),i=r(9836),a=(r(9496),r(9613)),o=["components"],c={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"version-8.x/cli/patch-commit",title:"pnpm patch-commit <path>",description:"Generate a patch out of a directory (inspired by a similar command in Yarn).",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-8.x/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/id/cli/patch-commit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"8.x",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"version-8.x/docs",previous:{title:"pnpm patch <pkg>",permalink:"/id/cli/patch"},next:{title:"pnpm patch-remove <pkg...>",permalink:"/id/cli/patch-remove"}},m={},s=[{value:"Options",id:"options",level:2},{value:"---patches-dir &lt;dir&gt;",id:"---patches-dir-dir",level:3}],u={toc:s},d="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Generate a patch out of a directory (inspired by a similar command in Yarn)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"---patches-dir-dir"},"---patches-dir ","<","dir>"),(0,a.kt)("p",null,"The generated patch file will be saved to this directory. By default, patches are saved to the ",(0,a.kt)("inlineCode",{parentName:"p"},"patches")," directory in the root of the project."))}f.isMDXComponent=!0}}]);