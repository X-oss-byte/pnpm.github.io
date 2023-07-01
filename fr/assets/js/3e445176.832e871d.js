"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8137],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(1966),o=n(9836),a=(n(9496),n(9613)),i=["components"],l={id:"completion",title:"Compl\xe9tion de la ligne de commande"},p=void 0,s={unversionedId:"completion",id:"version-7.x/completion",title:"Compl\xe9tion de la ligne de commande",description:"Contrairement aux autres gestionnaires de packages populaires, qui ont g\xe9n\xe9ralement besoin de plugins, pnpm prend en charge la compl\xe9tion des onglets en ligne de commande pour Bash, Zsh, Fish, et les interpr\xe9teurs de commandes similaires.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/fr/7.x/completion",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"completion",title:"Compl\xe9tion de la ligne de commande"},sidebar:"version-7.x/docs",previous:{title:"Alias",permalink:"/fr/7.x/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/fr/7.x/using-changesets"}},c={},m=[{value:"Fig (macOS uniquement)",id:"fig-macos-uniquement",level:2}],u={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contrairement aux autres gestionnaires de packages populaires, qui ont g\xe9n\xe9ralement besoin de plugins, pnpm prend en charge la compl\xe9tion des onglets en ligne de commande pour Bash, Zsh, Fish, et les interpr\xe9teurs de commandes similaires."),(0,a.kt)("p",null,"Pour configurer l'auto-compl\xe9tion, ex\xe9cutez:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"L'interface CLI vous demandera quel shell g\xe9n\xe9rera le script de saisie automatique. Alternativement, le shell cible peut \xeatre sp\xe9cifi\xe9 en ligne de commande\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"Pour voir des exemples de compl\xe9tion, lisez ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"cet article"),"."),(0,a.kt)("h2",{id:"fig-macos-uniquement"},"Fig (macOS uniquement)"),(0,a.kt)("p",null,"Vous pouvez obtenir des options d'autocompl\xe9tion pour pnpm avec ",(0,a.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". Ca fonctionne avec Bash, Zsh, et Fish."),(0,a.kt)("p",null,"Pour l'installer, ex\xe9cutez :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")))}f.isMDXComponent=!0}}]);