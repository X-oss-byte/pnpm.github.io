"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7109],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||p;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,o=new Array(p);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(1966),i=r(9836),p=(r(9496),r(9613)),o=["components"],a={id:"scripts",title:"Scripts"},c=void 0,l={unversionedId:"scripts",id:"version-7.x/scripts",title:"Scripts",description:"Comment pnpm g\xe8re le champ scripts du package.json.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/fr/7.x/scripts",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"version-7.x/docs",previous:{title:"Filtrage",permalink:"/fr/7.x/filtering"},next:{title:"pnpm add <pkg>",permalink:"/fr/7.x/cli/add"}},s={},u=[{value:"Scripts du cycle de vie",id:"scripts-du-cycle-de-vie",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,p.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Comment pnpm g\xe8re le champ ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," du ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("h2",{id:"scripts-du-cycle-de-vie"},"Scripts du cycle de vie"),(0,p.kt)("h3",{id:"pnpmdevpreinstall"},(0,p.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,p.kt)("p",null,"Fonctionne uniquement sur ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," local."),(0,p.kt)("p",null,"S'ex\xe9cute avant l'installation de toute d\xe9pendance."),(0,p.kt)("p",null,"Ce script est ex\xe9cut\xe9 uniquement lorsqu'il est d\xe9fini dans le ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," du projet racine."))}f.isMDXComponent=!0}}]);