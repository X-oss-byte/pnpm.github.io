"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8433],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||p;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(1966),a=n(9836),p=(n(9496),n(9613)),l=["components"],o={id:"dlx",title:"pnpm dlx"},c=void 0,i={unversionedId:"cli/dlx",id:"version-7.x/cli/dlx",title:"pnpm dlx",description:"Busca un paquete desde el registro sin tener que intalarlo como una dependencia, se carga al momento, y corre cualquier comando binario por defecto que expone.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/es/7.x/cli/dlx",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-7.x/docs",previous:{title:"pnpm exec",permalink:"/es/7.x/cli/exec"},next:{title:"pnpm create",permalink:"/es/7.x/cli/create"}},u={},s=[{value:"Opciones",id:"opciones",level:2},{value:"--package &lt;nombre&gt;",id:"--package-nombre",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],d={toc:s},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Busca un paquete desde el registro sin tener que intalarlo como una dependencia, se carga al momento, y corre cualquier comando binario por defecto que expone."),(0,p.kt)("p",null,"Por ejemplo, para usar ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," en cualquier lugar para iniciar una aplicaci\xf3n de reacci\xf3n sin necesitar instalarla en otro proyecto, puede ejecutar:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"Esto obtendr\xe1 ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," del registro y lo ejecutar\xe1 con los argumentos dados."),(0,p.kt)("p",null,"Tambi\xe9n puede especificar qu\xe9 versi\xf3n exacta del paquete le gustar\xeda usar:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,p.kt)("h2",{id:"opciones"},"Opciones"),(0,p.kt)("h3",{id:"--package-nombre"},"--package ","<","nombre",">"),(0,p.kt)("p",null,"El paquete a instalar antes de ejecutar el comando."),(0,p.kt)("p",null,"Ejemplo:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"Se pueden proporcionar varios paquetes para la instalaci\xf3n:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,p.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,p.kt)("p",null,"Added in: v7.21.0"),(0,p.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,p.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,p.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,p.kt)("p",null,"Ejemplo:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package cowsay --package lolcatjs -c dlx 'echo \"hi pnpm\" | cowsay | lolcatjs'\n")),(0,p.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,p.kt)("p",null,"Only the output of the executed command is printed."))}f.isMDXComponent=!0}}]);