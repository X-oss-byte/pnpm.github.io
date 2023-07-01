"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6023],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(1966),l=n(9836),a=(n(9496),n(9613)),o=["components"],i={id:"outdated",title:"pnpm outdated"},p=void 0,s={unversionedId:"cli/outdated",id:"version-7.x/cli/outdated",title:"pnpm outdated",description:"V\xe9rifie les packages obsol\xe8tes. La v\xe9rification peut \xeatre limit\xe9e \xe0 un sous-ensemble des packages install\xe9s en fournissant des arguments (les mod\xe8les sont pris en charge).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/fr/7.x/cli/outdated",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"version-7.x/docs",previous:{title:"pnpm list",permalink:"/fr/7.x/cli/list"},next:{title:"pnpm why",permalink:"/fr/7.x/cli/why"}},c={},u=[{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--long",id:"--long",level:3},{value:"--format &lt;format&gt;",id:"--format-format",level:3},{value:"--compatible",id:"--compatible",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"V\xe9rifie les packages obsol\xe8tes. La v\xe9rification peut \xeatre limit\xe9e \xe0 un sous-ensemble des packages install\xe9s en fournissant des arguments (les mod\xe8les sont pris en charge)."),(0,a.kt)("p",null,"Exemples\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Ex\xe9cuter la commande sur chaque paquet dans les sous-r\xe9pertoires ou bien sur chaque paquet de l'espace de travail, quand ex\xe9cut\xe9 dans un espace de travail."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/7.x/filtering"},"En savoir plus sur le filtrage.")),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"R\xe9pertorier les packages globaux obsol\xe8tes."),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"Affiche les d\xe9tails."),(0,a.kt)("h3",{id:"--format-format"},"--format ","<","format",">"),(0,a.kt)("p",null,"Ajout\xe9 dans : v7.15.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,a.kt)("strong",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"table"),", ",(0,a.kt)("strong",{parentName:"li"},"list"),", ",(0,a.kt)("strong",{parentName:"li"},"json"))),(0,a.kt)("p",null,"Affiche les d\xe9pendances obsol\xe8tes dans le format indiqu\xe9."),(0,a.kt)("h3",{id:"--compatible"},"--compatible"),(0,a.kt)("p",null,"Prints only versions that satisfy specifications in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Checks only ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Checks only ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Doesn't check ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}f.isMDXComponent=!0}}]);