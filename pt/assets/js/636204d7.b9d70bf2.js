"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[458],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var o=n(1966),r=n(9836),a=(n(9496),n(9613)),l=["components"],p={id:"completion",title:"Completar linha de comando utilizando tab"},i=void 0,c={unversionedId:"completion",id:"version-8.x/completion",title:"Completar linha de comando utilizando tab",description:"Ao contr\xe1rio de outros gerenciadores de pacotes populares, que geralmente requerem plugins, o pnpm suporta completar linhas de comando por tab para Bash, Zsh, Fish e shells semelhantes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-8.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/pt/completion",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"8.x",frontMatter:{id:"completion",title:"Completar linha de comando utilizando tab"},sidebar:"version-8.x/docs",previous:{title:"Apelidos",permalink:"/pt/aliases"},next:{title:"Usando Changesets com pnpm",permalink:"/pt/using-changesets"}},s={},m=[{value:"Fig (on macOS only)",id:"fig-on-macos-only",level:2},{value:"g-plane/pnpm-shell-completion",id:"g-planepnpm-shell-completion",level:2}],u={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ao contr\xe1rio de outros gerenciadores de pacotes populares, que geralmente requerem plugins, o pnpm suporta completar linhas de comando por tab para Bash, Zsh, Fish e shells semelhantes."),(0,a.kt)("p",null,"Para configurar o preenchimento autom\xe1tico, rode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"O CLI vai perguntar qual shell ser\xe1 usado para gerar o script de preenchimento autom\xe1tico. Como alternativa, voc\xea pode especificar o shell utilizando linha de comando:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"Para ver exemplos de preenchimento autom\xe1tico, leia ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"este artigo"),"."),(0,a.kt)("h2",{id:"fig-on-macos-only"},"Fig (on macOS only)"),(0,a.kt)("p",null,"You can get IDE-style autocompletions for pnpm with ",(0,a.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". It works in Bash, Zsh, and Fish."),(0,a.kt)("p",null,"To install, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")),(0,a.kt)("h2",{id:"g-planepnpm-shell-completion"},"g-plane/pnpm-shell-completion"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/g-plane/pnpm-shell-completion"},"pnpm-shell-completion")," is a shell plugin maintained by Pig Fang on Github."),(0,a.kt)("p",null,"Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide completion for ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm --filter <package>"),"."),(0,a.kt)("li",{parentName:"ul"},"Provide completion for ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm remove")," command, even in workspace's packages (by specifying ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter")," option)."),(0,a.kt)("li",{parentName:"ul"},"Provide completion for scripts in ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),".")))}f.isMDXComponent=!0}}]);