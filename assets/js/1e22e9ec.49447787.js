"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6672],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(1966),o=t(9836),i=(t(9496),t(9613)),p=["components"],a={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"cli/prune",title:"pnpm prune",description:"Removes unnecessary packages.",source:"@site/docs/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/next/cli/prune",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/prune.md",tags:[],version:"current",lastUpdatedBy:"Jon Lauridsen",lastUpdatedAt:1627460404,formattedLastUpdatedAt:"Jul 28, 2021",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"docs",previous:{title:"pnpm rebuild",permalink:"/next/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/next/cli/fetch"}},u={},d=[{value:"Options",id:"options",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],s={toc:d},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,p);return(0,i.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes unnecessary packages."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--prod"},"--prod"),(0,i.kt)("p",null,"Remove the packages specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Remove the packages specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The prune command does not support recursive execution on a monorepo currently. To only install production-dependencies in a monorepo ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folders can be deleted and then re-installed with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),".")))}f.isMDXComponent=!0}}]);