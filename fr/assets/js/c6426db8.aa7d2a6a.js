"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3355],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=i,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(1966),i=r(9836),a=(r(9496),r(9613)),o=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"version-8.x/cli/audit",title:"pnpm audit",description:"V\xe9rifie les probl\xe8mes de s\xe9curit\xe9 connus avec les paquets install\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-8.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/fr/cli/audit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"8.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-8.x/docs",previous:{title:"pnpm patch-remove <pkg...>",permalink:"/fr/cli/patch-remove"},next:{title:"pnpm list",permalink:"/fr/cli/list"}},u={},c=[{value:"Options",id:"options",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],d={toc:c},m="wrapper";function v(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"V\xe9rifie les probl\xe8mes de s\xe9curit\xe9 connus avec les paquets install\xe9s."),(0,a.kt)("p",null,"Si des probl\xe8mes de s\xe9curit\xe9 sont d\xe9tect\xe9s, essayez de mettre \xe0 jour vos d\xe9pendances via ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Si une simple mise \xe0 jour ne corrige pas tous les probl\xe8mes, utilisez ",(0,a.kt)("a",{parentName:"p",href:"/fr/package_json#pnpmoverrides"},"outrepasse")," pour forcer les versions qui ne sont pas vuln\xe9rables. Par exemple, si ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," est vuln\xe9rable, utilisez ces substitutions pour forcer ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Ou autrement, ex\xe9cutez ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,a.kt)("p",null,"Si vous voulez tol\xe9rer certaines vuln\xe9rabilit\xe9s, car elles n'affectent pas votre projet, vous pouvez utiliser le param\xe8tre ",(0,a.kt)("a",{parentName:"p",href:"/fr/package_json#pnpmauditconfigignorecves"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm.auditConfig.ignoreCves")),"."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"low"),", ",(0,a.kt)("strong",{parentName:"li"},"moderate"),", ",(0,a.kt)("strong",{parentName:"li"},"high"),", ",(0,a.kt)("strong",{parentName:"li"},"critical")),(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut : ",(0,a.kt)("strong",{parentName:"li"},"low"))),(0,a.kt)("p",null,"N'afficher que les alertes dont la gravit\xe9 est sup\xe9rieure ou \xe9gale \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,a.kt)("h3",{id:"--fix"},"--fix"),(0,a.kt)("p",null,"Ajouter des remplacements au fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," afin de forcer les versions non vuln\xe9rables des d\xe9pendances."),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"G\xe9n\xe9rer le rapport d'audit au format JSON."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Audite uniquement les d\xe9pendances de dev."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Audite uniquement les d\xe9pendances de production."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Ne pas auditer les ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,a.kt)("p",null,"Si le registre r\xe9pond avec un code d'\xe9tat non-200, le processus doit sortir avec 0. Le processus n'\xe9chouera donc que si le registre r\xe9pond effectivement avec succ\xe8s aux vuln\xe9rabilit\xe9s trouv\xe9es."))}v.isMDXComponent=!0}}]);