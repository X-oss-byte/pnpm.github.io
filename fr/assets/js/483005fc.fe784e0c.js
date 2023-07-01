"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8453],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[m]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=t(1966),o=t(9836),i=(t(9496),t(9613)),l=["components"],a={id:"completion",title:"Compl\xe9tion de la ligne de commande"},p=void 0,s={unversionedId:"completion",id:"version-8.x/completion",title:"Compl\xe9tion de la ligne de commande",description:"Contrairement aux autres gestionnaires de packages populaires, qui ont g\xe9n\xe9ralement besoin de plugins, pnpm prend en charge la compl\xe9tion des onglets en ligne de commande pour Bash, Zsh, Fish, et les interpr\xe9teurs de commandes similaires.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-8.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/fr/completion",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"8.x",frontMatter:{id:"completion",title:"Compl\xe9tion de la ligne de commande"},sidebar:"version-8.x/docs",previous:{title:"Alias",permalink:"/fr/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/fr/using-changesets"}},c={},m=[{value:"Fig (macOS uniquement)",id:"fig-macos-uniquement",level:2},{value:"g-plane/pnpm-shell-completion",id:"g-planepnpm-shell-completion",level:2}],u={toc:m},d="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contrairement aux autres gestionnaires de packages populaires, qui ont g\xe9n\xe9ralement besoin de plugins, pnpm prend en charge la compl\xe9tion des onglets en ligne de commande pour Bash, Zsh, Fish, et les interpr\xe9teurs de commandes similaires."),(0,i.kt)("p",null,"Pour configurer l'auto-compl\xe9tion, ex\xe9cutez:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,i.kt)("p",null,"L'interface CLI vous demandera quel shell g\xe9n\xe9rera le script de saisie automatique. Alternativement, le shell cible peut \xeatre sp\xe9cifi\xe9 en ligne de commande\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,i.kt)("p",null,"Pour voir des exemples de compl\xe9tion, lisez ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"cet article"),"."),(0,i.kt)("h2",{id:"fig-macos-uniquement"},"Fig (macOS uniquement)"),(0,i.kt)("p",null,"Vous pouvez obtenir des options d'autocompl\xe9tion pour pnpm avec ",(0,i.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". Ca fonctionne avec Bash, Zsh, et Fish."),(0,i.kt)("p",null,"Pour l'installer, ex\xe9cutez :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")),(0,i.kt)("h2",{id:"g-planepnpm-shell-completion"},"g-plane/pnpm-shell-completion"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/g-plane/pnpm-shell-completion"},"pnpm-shell-completion")," is a shell plugin maintained by Pig Fang on Github."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide completion for ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm --filter <package>"),"."),(0,i.kt)("li",{parentName:"ul"},"Provide completion for ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm remove")," command, even in workspace's packages (by specifying ",(0,i.kt)("inlineCode",{parentName:"li"},"--filter")," option)."),(0,i.kt)("li",{parentName:"ul"},"Provide completion for scripts in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),".")))}g.isMDXComponent=!0}}]);