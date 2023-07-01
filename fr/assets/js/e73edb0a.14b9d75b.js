"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4428],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||a;return n?l.createElement(k,i(i({ref:t},u),{},{components:n})):l.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var l=n(1966),r=n(9836),a=(n(9496),n(9613)),i=["components"],o={id:"install",title:"pnpm install"},s=void 0,p={unversionedId:"cli/install",id:"version-8.x/cli/install",title:"pnpm install",description:"Alias: i",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-8.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/fr/cli/install",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"8.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-8.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/fr/cli/add"},next:{title:"pnpm update",permalink:"/fr/cli/update"}},u={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Options",id:"options",level:2},{value:"--force",id:"--force",level:3},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"--resolution-only",id:"--resolution-only",level:3}],m={toc:d},c="wrapper";function k(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)(c,(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"i")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," est utilis\xe9 pour installer toutes les d\xe9pendances d'un projet."),(0,a.kt)("p",null,"Dans un environnement CI, l'installation \xe9choue si un fichier de verrouillage est pr\xe9sent mais n\xe9cessite une mise \xe0 jour."),(0,a.kt)("p",null,"Dans un espace de travail ",(0,a.kt)("a",{parentName:"p",href:"/fr/workspaces"}," workspace "),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," toutes les d\xe9pendances dans tous les projets. Si vous souhaitez d\xe9sactiver ce comportement, d\xe9finissez le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"recursive-install")," sur ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7461).Z,width:"940",height:"472"})),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,a.kt)("td",{parentName:"tr",align:null},"Installer hors ligne \xe0 partir du magasin uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," n'est pas mis \xe0 jour")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,a.kt)("td",{parentName:"tr",align:null},"Seul ",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," est mis \xe0 jour")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,'Force la r\xe9installation des d\xe9pendances\xa0: r\xe9cup\xe8re les packages modifi\xe9s dans le "store", recr\xe9e un fichier "lockfile" et/ou un r\xe9pertoire de modules cr\xe9\xe9s par une version non compatible de pnpm. Install all optionalDependencies even they don\'t satisfy the current environment(cpu, os, arch).'),(0,a.kt)("h3",{id:"--offline"},"--offline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Si ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),', pnpm utilisera uniquement les packages d\xe9j\xe0 disponibles dans le "store". Si un paquet ne se trouve pas localement, l\'installation \xe9chouera.'),(0,a.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Si ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", les v\xe9rifications d'obsolescence des donn\xe9es mises en cache seront ignor\xe9es, mais les donn\xe9es manquantes seront demand\xe9es au serveur. Pour forcer le mode hors ligne complet, utilisez ",(0,a.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"pnpm n'installera aucun paquet r\xe9pertori\xe9 dans ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," et supprimera ceux dans la mesure o\xf9 ils \xe9taient d\xe9j\xe0 install\xe9s, si la variable d'environnement ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," est d\xe9finie sur production. Utilisez ce flag pour indiquer \xe0 pnpm d'ignorer ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," et prendre son statut de production \xe0 partir de ce flag \xe0 la place."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Seules ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," sont install\xe9es et les ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," sont supprim\xe9es dans la mesure o\xf9 elles \xe9taient d\xe9j\xe0 install\xe9es, quel que soit le ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," ne sont pas install\xe9es."),(0,a.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Lorsqu'il est utilis\xe9, ne met \xe0 jour que ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". Rien n'est \xe9crit dans le r\xe9pertoire ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,a.kt)("p",null,'Correction automatique des entr\xe9es "lockfile" cass\xe9es.'),(0,a.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pour non-CI : ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Pour CI : ",(0,a.kt)("strong",{parentName:"li"},"true"),", si un fichier lockfile est pr\xe9sent"))),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Si ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm ne g\xe9n\xe8rera pas de fichier de verrouillage et ne s'installera pas si le fichier de verrouillage n'est plus synchronis\xe9 avec le manifeste, une mise \xe0 jour est n\xe9cessaire ou aucun fichier de verrouillage n'est pr\xe9sent."),(0,a.kt)("p",null,"Ce param\xe8tre est ",(0,a.kt)("inlineCode",{parentName:"p"},"vrai")," par d\xe9faut dans les environnements de ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/watson/ci-info#supported-ci-tools"},"CI"),". Le code suivant est utilis\xe9 pour d\xe9tecter les environnements de CI\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"',title:'"https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"'},"exports.isCI = !!(\n  env.CI || // Travis CI, CircleCI, Cirrus CI, GitLab CI, Appveyor, CodeShip, dsari\n  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI\n  env.BUILD_NUMBER || // Jenkins, TeamCity\n  env.RUN_ID || // TaskCluster, dsari\n  exports.name ||\n  false\n)\n")),(0,a.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pour la sortie standard TTY\xa0: ",(0,a.kt)("strong",{parentName:"li"},"default")),(0,a.kt)("li",{parentName:"ul"},"Pour la non-sortie standard TTY\xa0: ",(0,a.kt)("strong",{parentName:"li"},"append-only")))),(0,a.kt)("li",{parentName:"ul"},"Type : ",(0,a.kt)("strong",{parentName:"li"},"default"),", ",(0,a.kt)("strong",{parentName:"li"},"append-only"),", ",(0,a.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,a.kt)("strong",{parentName:"li"},"silent"))),(0,a.kt)("p",null,"Vous permet de choisir l'avertisseur qui affichera les informations dans le terminal \xe0 propos de la progression de l'installation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"silent")," - rien ne sera \xe9crit dans la console, \xe0 l'exception des erreurs fatales"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default")," - l'avertisseur par d\xe9faut lorsque la sortie standard est TTY"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"append-only")," - la sortie est toujours ajout\xe9e \xe0 la fin. Aucune manipulation de curseur n'est effectu\xe9e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ndjson")," - l'avertisseur le plus verbeux. Imprime tous les journaux au format ",(0,a.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson"))),(0,a.kt)("p",null,"Si vous souhaitez modifier le type d'informations imprim\xe9es, utilisez le param\xe8tre ",(0,a.kt)("a",{parentName:"p",href:"/fr/npmrc#loglevel"},"loglevel"),"."),(0,a.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Lance un serveur de stockage en arri\xe8re-plan. Le serveur de stockage continuera \xe0 fonctionner apr\xe8s l'installation. Pour arr\xeater le serveur de stockage, ex\xe9cutez  ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,a.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Cr\xe9e une structure plate de ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," , similaire \xe0 celle de ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,a.kt)("strong",{parentName:"p"},"AVERTISSEMENT"),": Ceci est fortement d\xe9conseill\xe9."),(0,a.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"N'ex\xe9cutez aucun script d\xe9fini dans le projet ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," et ses d\xe9pendances ."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/filtering"},"En savoir plus sur le filtrage.")),(0,a.kt)("h3",{id:"--resolution-only"},"--resolution-only"),(0,a.kt)("p",null,"Ajout\xe9 dans la version\xa0: v7.3.0"),(0,a.kt)("p",null,"R\xe9ex\xe9cution de la r\xe9solution: utile pour lafficher les probl\xe8mes de d\xe9pendance des pairs."))}k.isMDXComponent=!0},7461:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);