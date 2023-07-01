"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[581],{9613:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),v=o,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||a;return r?t.createElement(m,l(l({ref:n},s),{},{components:r})):t.createElement(m,l({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=v;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},9810:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(1966),o=r(9836),a=(r(9496),r(9613)),l=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-7.x/cli/remove",title:"pnpm remove",description:"Aliases: rm, uninstall, un",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/es/7.x/cli/remove",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-7.x/docs",previous:{title:"pnpm update",permalink:"/es/7.x/cli/update"},next:{title:"pnpm link",permalink:"/es/7.x/cli/link"}},s={},d=[{value:"Opciones",id:"opciones",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:d},v="wrapper";function m(e){var n=e.components,r=(0,o.Z)(e,l);return(0,a.kt)(v,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"un")),(0,a.kt)("p",null,"Removes packages from ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("h2",{id:"opciones"},"Opciones"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"When used inside a ",(0,a.kt)("a",{parentName:"p",href:"/es/7.x/workspaces"},"workspace"),", removes a dependency (or dependencies) from every workspace package."),(0,a.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"Remove a global package."),(0,a.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/es/7.x/filtering"},"Leer m\xe1s acerca del filtrado.")))}m.isMDXComponent=!0}}]);