"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4911],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(i,".").concat(f)]||u[f]||s[f]||p;return r?n.createElement(d,a(a({ref:t},m),{},{components:r})):n.createElement(d,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(1966),o=r(9836),p=(r(9496),r(9613)),a=["components"],c={id:"patch-remove",title:"pnpm patch-remove <pkg...>"},i=void 0,l={unversionedId:"cli/patch-remove",id:"version-8.x/cli/patch-remove",title:"pnpm patch-remove <pkg...>",description:"Added in: v8.5.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-8.x/cli/patch-remove.md",sourceDirName:"cli",slug:"/cli/patch-remove",permalink:"/tr/cli/patch-remove",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"8.x",frontMatter:{id:"patch-remove",title:"pnpm patch-remove <pkg...>"},sidebar:"version-8.x/docs",previous:{title:"pnpm patch-commit <path>",permalink:"/tr/cli/patch-commit"},next:{title:"pnpm audit",permalink:"/tr/cli/audit"}},m={},u=[],s={toc:u},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Added in: v8.5.0"),(0,p.kt)("p",null,"Remove existing patch files and settings in ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm.patchedDependencies"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-remove foo@1.0.0 bar@1.0.1\n")))}d.isMDXComponent=!0}}]);