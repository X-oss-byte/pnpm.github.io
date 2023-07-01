"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4003],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:a,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(1966),a=n(9836),l=(n(9496),n(9613)),p=["components"],o={id:"dlx",title:"pnpm dlx"},i=void 0,c={unversionedId:"cli/dlx",id:"version-7.x/cli/dlx",title:"pnpm dlx",description:"R\xe9cup\xe8re un package du registre sans l'installer en tant que d\xe9pendance, le charge, et ex\xe9cute le binaire de commande par d\xe9faut qu'il expose.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/fr/7.x/cli/dlx",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-7.x/docs",previous:{title:"pnpm exec",permalink:"/fr/7.x/cli/exec"},next:{title:"Cr\xe9ation pnpm",permalink:"/fr/7.x/cli/create"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--package &lt;nom&gt;",id:"--package-nom",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],d={toc:s},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"R\xe9cup\xe8re un package du registre sans l'installer en tant que d\xe9pendance, le charge, et ex\xe9cute le binaire de commande par d\xe9faut qu'il expose."),(0,l.kt)("p",null,"Par exemple, pour utiliser ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," n'importe o\xf9 afin de cr\xe9er une application react sans avoir besoin de l'installer sous un autre projet, vous pouvez ex\xe9cuter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,l.kt)("p",null,"Cela r\xe9cup\xe9rera ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," du registre et l'ex\xe9cutera avec les arguments donn\xe9s."),(0,l.kt)("p",null,"Vous pouvez \xe9galement sp\xe9cifier la version exacte du package que vous souhaitez utiliser\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--package-nom"},"--package ","<","nom",">"),(0,l.kt)("p",null,"Le package \xe0 installer avant d'ex\xe9cuter la commande."),(0,l.kt)("p",null,"Exemple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,l.kt)("p",null,"Plusieurs packages peuvent \xeatre fournis pour l'installation\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,l.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,l.kt)("p",null,"Ajout\xe9 dans : v7.21.0"),(0,l.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,l.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,l.kt)("p",null,"Exemple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package cowsay --package lolcatjs -c dlx 'echo \"hi pnpm\" | cowsay | lolcatjs'\n")),(0,l.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,l.kt)("p",null,"Seule la sortie de la commande ex\xe9cut\xe9e est affich\xe9e."))}f.isMDXComponent=!0}}]);