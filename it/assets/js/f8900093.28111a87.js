"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3424],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(1966),o=n(9836),i=(n(9496),n(9613)),a=["components"],l={id:"completion",title:"Completamento tramite tab per la linea di comando"},p=void 0,c={unversionedId:"completion",id:"version-7.x/completion",title:"Completamento tramite tab per la linea di comando",description:"A differenza di altri gestori di pacchetti popolari, che di solito richiedono plugin, pnpm supporta il completamento della scheda a riga di comando per Bash, Zsh, Fish, e shell simili.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/it/7.x/completion",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"completion",title:"Completamento tramite tab per la linea di comando"},sidebar:"version-7.x/docs",previous:{title:"Alias",permalink:"/it/7.x/aliases"},next:{title:"Utilizzo di Changesets con pnpm",permalink:"/it/7.x/using-changesets"}},s={},m=[{value:"Fig (solo su macOS)",id:"fig-solo-su-macos",level:2}],u={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A differenza di altri gestori di pacchetti popolari, che di solito richiedono plugin, pnpm supporta il completamento della scheda a riga di comando per Bash, Zsh, Fish, e shell simili."),(0,i.kt)("p",null,"Per impostare l'autocompletamento, eseguire:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,i.kt)("p",null,"La CLI chieder\xe0 per quale shell generare lo script di autocompletamento. In alternativa, la shell di destinazione pu\xf2 essere specificata nella riga di comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,i.kt)("p",null,"Per vedere esempi di completamento, leggi ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"questo articolo"),"."),(0,i.kt)("h2",{id:"fig-solo-su-macos"},"Fig (solo su macOS)"),(0,i.kt)("p",null,"\xc8 possibile ottenere completamenti automatici in stile IDE per pnpm con ",(0,i.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". Funziona in Bash, Zsh e Fish."),(0,i.kt)("p",null,"Per installare, eseguire:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")))}f.isMDXComponent=!0}}]);