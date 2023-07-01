"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4451],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1327:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(1966),o=t(9836),r=(t(9496),t(9613)),i=["components"],l={id:"aliases",title:"Alias"},p=void 0,s={unversionedId:"aliases",id:"version-8.x/aliases",title:"Alias",description:"Gli alias consentono di installare pacchetti con nomi personalizzati.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-8.x/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/it/aliases",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"8.x",frontMatter:{id:"aliases",title:"Alias"},sidebar:"version-8.x/docs",previous:{title:"Spazio di lavoro",permalink:"/it/workspaces"},next:{title:"Completamento tramite tab per la linea di comando",permalink:"/it/completion"}},c={},d=[],u={toc:d},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gli alias consentono di installare pacchetti con nomi personalizzati."),(0,r.kt)("p",null,"Supponiamo che tu usi ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," in tutto il tuo progetto. C'\xe8 un bug in ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," che rompe il tuo progetto. Hai una soluzione ma ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," non la unir\xe0. Normalmente dovresti installare ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," direttamente dal tuo fork (come una dipendenza ospitata da git) o pubblicarlo con un nome diverso. Se usi la seconda soluzione devi sostituire tutti i requisiti nel tuo progetto con il nuovo nome della dipendenza (",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),"). Con gli alias, hai una terza opzione."),(0,r.kt)("p",null,"Pubblica un nuovo pacchetto chiamato ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," e installalo usando ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," come il suo alias:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,r.kt)("p",null,"Non sono necessarie modifiche al codice. Tutte le richieste di ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," ora si risolveranno a ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,r.kt)("p",null,"A volte vorrai usare due diverse versioni di un pacchetto nel tuo progetto. Facile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,r.kt)("p",null,"Ora puoi richiedere la prima versione di lodash tramite ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," e la seconda tramite ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,r.kt)("p",null,"Questo diventa ancora pi\xf9 potente se combinato con gli hook. Forse vuoi sostituire ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," con ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," in tutti i pacchetti in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),". Puoi ottenere facilmente questo risultato con il seguente ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}f.isMDXComponent=!0}}]);