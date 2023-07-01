"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4991],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(1966),a=r(9836),o=(r(9496),r(9613)),i=["components"],c={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"version-8.x/cli/patch-commit",title:"pnpm patch-commit <path>",description:"Generate a patch out of a directory (inspired by a similar command in Yarn).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-8.x/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/es/cli/patch-commit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"8.x",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"version-8.x/docs",previous:{title:"pnpm patch <pkg>",permalink:"/es/cli/patch"},next:{title:"pnpm patch-remove <pkg...>",permalink:"/es/cli/patch-remove"}},s={},m=[{value:"Opciones",id:"opciones",level:2},{value:"---patches-dir &lt;dir&gt;",id:"---patches-dir-dir",level:3}],u={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generate a patch out of a directory (inspired by a similar command in Yarn)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("h3",{id:"---patches-dir-dir"},"---patches-dir ","<","dir>"),(0,o.kt)("p",null,"The generated patch file will be saved to this directory. By default, patches are saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"patches")," directory in the root of the project."))}f.isMDXComponent=!0}}]);