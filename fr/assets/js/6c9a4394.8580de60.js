"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8387],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||p;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,c=new Array(p);c[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[u]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<p;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(1966),i=n(9836),p=(n(9496),n(9613)),c=["components"],a={id:"scripts",title:"Scripts"},o=void 0,l={unversionedId:"scripts",id:"scripts",title:"Scripts",description:"Comment pnpm g\xe8re le champ scripts du package.json.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/fr/next/scripts",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"docs",previous:{title:"Filtrage",permalink:"/fr/next/filtering"},next:{title:"pnpm add <pkg>",permalink:"/fr/next/cli/add"}},s={},u=[{value:"Scripts du cycle de vie",id:"scripts-du-cycle-de-vie",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,p.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Comment pnpm g\xe8re le champ ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," du ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("h2",{id:"scripts-du-cycle-de-vie"},"Scripts du cycle de vie"),(0,p.kt)("h3",{id:"pnpmdevpreinstall"},(0,p.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,p.kt)("p",null,"Fonctionne uniquement sur ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," local."),(0,p.kt)("p",null,"S'ex\xe9cute avant l'installation de toute d\xe9pendance."),(0,p.kt)("p",null,"Ce script est ex\xe9cut\xe9 uniquement lorsqu'il est d\xe9fini dans le ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," du projet racine."))}f.isMDXComponent=!0}}]);