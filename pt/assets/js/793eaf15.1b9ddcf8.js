"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6248],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(1966),a=r(9836),i=(r(9496),r(9613)),p=["components"],l={id:"pack",title:"pnpm pack"},o=void 0,c={unversionedId:"cli/pack",id:"version-7.x/cli/pack",title:"pnpm pack",description:"Cria um tarball a partir de um pacote.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/pt/7.x/cli/pack",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"version-7.x/docs",previous:{title:"pnpm publish",permalink:"/pt/7.x/cli/publish"},next:{title:"pnpm -r, --recursive",permalink:"/pt/7.x/cli/recursive"}},u={},s=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",level:3},{value:"Life Cycle Scripts",id:"life-cycle-scripts",level:2}],d={toc:s},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cria um tarball a partir de um pacote."),(0,i.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,i.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,i.kt)("p",null,"Diret\xf3rio no qual ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm pack")," salvar\xe1 os tarballs. O padr\xe3o \xe9 o diret\xf3rio de trabalho atual."),(0,i.kt)("h2",{id:"life-cycle-scripts"},"Life Cycle Scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postpack"))))}f.isMDXComponent=!0}}]);