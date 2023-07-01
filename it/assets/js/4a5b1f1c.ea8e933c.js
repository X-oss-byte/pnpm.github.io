"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3140],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(r),s=i,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(1966),i=r(9836),a=(r(9496),r(9613)),o=["components"],p={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"Prepara un pacchetto per l'applicazione delle patch (ispirato a un comando simile in Yarn).",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/it/next/cli/patch",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm dedupe",permalink:"/it/next/cli/dedupe"},next:{title:"pnpm patch-commit <path>",permalink:"/it/next/cli/patch-commit"}},d={},u=[{value:"Opzioni",id:"opzioni",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3},{value:"--ignore-existing",id:"--ignore-existing",level:3}],m={toc:u},s="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Prepara un pacchetto per l'applicazione delle patch (ispirato a un comando simile in Yarn)."),(0,a.kt)("p",null,"Questo comando far\xe0 s\xec che un pacchetto venga estratto in una directory temporanea destinata a essere modificabile a piacimento."),(0,a.kt)("p",null,"Una volta terminate le modifiche, esegui ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (dove ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," \xe8 la directory temporanea che hai ricevuto) per generare un file di patch e registrarlo nel tuo manifest di primo livello tramite il campo ",(0,a.kt)("a",{parentName:"p",href:"/it/next/package_json#pnpmpatcheddependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"patchedDependencies")),"."),(0,a.kt)("p",null,"Utilizzo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"La demo del comando patch pnpm",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,a.kt)("p",null,"Il pacchetto che deve essere corretto verr\xe0 estratto in questa directory."),(0,a.kt)("h3",{id:"--ignore-existing"},"--ignore-existing"),(0,a.kt)("p",null,"Ignora i file di patch esistenti durante l'applicazione delle patch."))}f.isMDXComponent=!0}}]);