"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[254],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(i,".").concat(f)]||u[f]||s[f]||a;return r?n.createElement(d,p(p({ref:t},m),{},{components:r})):n.createElement(d,p({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(1966),o=r(9836),a=(r(9496),r(9613)),p=["components"],c={id:"patch-remove",title:"pnpm patch-remove <pkg...>"},i=void 0,l={unversionedId:"cli/patch-remove",id:"version-8.x/cli/patch-remove",title:"pnpm patch-remove <pkg...>",description:"Added in: v8.5.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-8.x/cli/patch-remove.md",sourceDirName:"cli",slug:"/cli/patch-remove",permalink:"/ja/cli/patch-remove",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"8.x",frontMatter:{id:"patch-remove",title:"pnpm patch-remove <pkg...>"},sidebar:"version-8.x/docs",previous:{title:"pnpm patch-commit <path>",permalink:"/ja/cli/patch-commit"},next:{title:"pnpm audit",permalink:"/ja/cli/audit"}},m={},u=[],s={toc:u},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Added in: v8.5.0"),(0,a.kt)("p",null,"Remove existing patch files and settings in ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm.patchedDependencies"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-remove foo@1.0.0 bar@1.0.1\n")))}d.isMDXComponent=!0}}]);