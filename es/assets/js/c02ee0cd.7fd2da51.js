"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4647],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(2962),i=t(2742),a=(t(9496),t(9613)),l=["components"],o={id:"unlink",title:"pnpm unlink"},c=void 0,p={unversionedId:"cli/unlink",id:"version-8.x/cli/unlink",title:"pnpm unlink",description:"Desvincula un paquete de todo el sistema (inverso de pnpm link).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-8.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/es/cli/unlink",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"8.x",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-8.x/docs",previous:{title:"pnpm link",permalink:"/es/cli/link"},next:{title:"pnpm import",permalink:"/es/cli/import"}},s={},u=[{value:"Opciones",id:"opciones",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Desvincula un paquete de todo el sistema (inverso de ",(0,a.kt)("a",{parentName:"p",href:"/es/cli/link"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,a.kt)("p",null,"Si se llama sin argumentos, todas las dependencias vinculadas se desvincular\xe1n."),(0,a.kt)("p",null,"Esto es similar a ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", excepto que pnpm vuelve a instalar la dependencia despu\xe9s de eliminar el enlace externo."),(0,a.kt)("h2",{id:"opciones"},"Opciones"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Desvincular en cada paquete encontrado en subdirectorios o en cada paquete de espacio de trabajo, cuando se ejecuta dentro de un espacio de trabajo ",(0,a.kt)("a",{parentName:"p",href:"/es/workspaces"}),"."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/es/filtering"},"Leer m\xe1s acerca del filtrado.")))}m.isMDXComponent=!0}}]);