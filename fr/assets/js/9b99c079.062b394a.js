"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[216],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var l=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?l.createElement(k,r(r({ref:n},c),{},{components:t})):l.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=t(1966),a=t(9836),i=(t(9496),t(9613)),r=["components"],o={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,s={unversionedId:"pnpmfile",id:"version-8.x/pnpmfile",title:".pnpmfile.cjs",description:"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called .pnpmfile.cjs.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-8.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/fr/pnpmfile",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"8.x",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"version-8.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/fr/pnpm-workspace_yaml"},next:{title:"Workspace",permalink:"/fr/workspaces"}},c={},u=[{value:"Hooks",id:"hooks",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Utilisation",id:"utilisation",level:4},{value:"Limitations connues",id:"limitations-connues",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promesse&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promesselockfile",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:4},{value:"Limitations connues",id:"limitations-connues-1",level:4},{value:"Configuration associ\xe9e",id:"configuration-associ\xe9e",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],d={toc:u},m="wrapper";function k(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)(m,(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,i.kt)("p",null,"Par d\xe9faut, ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," doit \xeatre situ\xe9 dans le m\xeame r\xe9pertoire que le fichier de verrouillage. Par exemple, dans un ",(0,i.kt)("a",{parentName:"p",href:"/fr/workspaces"},"workspace")," avec un fichier de verrouillage partag\xe9, ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," doit \xeatre \xe0 la racine du monorepo."),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"tldr"},"TL;DR"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hook Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Processus"),(0,i.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,i.kt)("td",{parentName:"tr",align:null},"Appel\xe9 apr\xe8s que pnpm ait analys\xe9 le manifeste du paquet de la d\xe9pendance"),(0,i.kt)("td",{parentName:"tr",align:null},"Permet de modifier le ",(0,i.kt)("inlineCode",{parentName:"td"},"package.json")," d\u2019une d\xe9pendance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,i.kt)("td",{parentName:"tr",align:null},"Appel\xe9 apr\xe8s que les d\xe9pendances aient \xe9t\xe9 r\xe9solues."),(0,i.kt)("td",{parentName:"tr",align:null},"Permet de modifier le fichier lockfile")))),(0,i.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,i.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,i.kt)("p",null,"Permet de modifier le ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," d\u2019une d\xe9pendance apr\xe8s l\u2019analyse et avant la r\xe9solution. Ces mutations ne sont pas enregistr\xe9es dans le syst\xe8me de fichiers, cependant, elles affecteront ce qui est r\xe9solu dans le fichier lockfile et donc ce qui est install\xe9."),(0,i.kt)("p",null,"Notez que vous devrez supprimer le ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," si vous avez d\xe9j\xe0 r\xe9solu la d\xe9pendance que vous souhaitez modifier."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Si vous avez besoin d'enregistrer les modificitions de ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", vous devez utiliser la commande ",(0,i.kt)("a",{parentName:"p",href:"/fr/cli/patch"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," et patcher le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Cela peut \xeatre utile si vous souhaitez supprimer le champs ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," d'une d\xe9pendance par exemple.")),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pkg")," - Le manifeste du package. Soit la r\xe9ponse du registre, soit le contenu de ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")," - Objet de contexte pour l'\xe9tape. La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"#log(msg)")," permet d'utiliser un journal de d\xe9bogage pour l'\xe9tape.")),(0,i.kt)("h4",{id:"utilisation"},"Utilisation"),(0,i.kt)("p",null,"Exemple ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (change les d\xe9pendances d'une d\xe9pendance) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,i.kt)("h4",{id:"limitations-connues"},"Limitations connues"),(0,i.kt)("p",null,"Supprimer le champ ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," du manifeste d'une d\xe9pendance via ",(0,i.kt)("inlineCode",{parentName:"p"},"readPackage")," n'emp\xeachera pas de construire la d\xe9pendance. Lors de la construction d'une d\xe9pendance, pnpm lit le ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," du package \xe0 partir de l'archive du package, qui n'est pas affect\xe9e par le hook. Pour ignorer la construction d'un paquet, utilisez le champ ",(0,i.kt)("a",{parentName:"p",href:"/fr/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),"."),(0,i.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promesselockfile"},(0,i.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promesse<lockfile>")),(0,i.kt)("p",null,"Vous permet de modifier la sortie du fichier de verrouillage avant qu\u2019elle ne soit s\xe9rialis\xe9e."),(0,i.kt)("h4",{id:"arguments-1"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lockfile")," - Le fichier de r\xe9solution lockfile s\xe9rialis\xe9 dans ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")," - Objet de contexte pour l'\xe9tape. La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"#log(msg)")," permet d'utiliser un journal de d\xe9bogage pour l'\xe9tape.")),(0,i.kt)("h4",{id:"exemple-dutilisation"},"Exemple d'utilisation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,i.kt)("h4",{id:"limitations-connues-1"},"Limitations connues"),(0,i.kt)("p",null,"Il n'y en a pas - tout ce qui peut \xeatre fait avec le fichier de verrouillage peut \xeatre via cette fonction, et vous pouvez m\xeame \xe9tendre les fonctionnalit\xe9s du fichier de verrouillage."),(0,i.kt)("h2",{id:"configuration-associ\xe9e"},"Configuration associ\xe9e"),(0,i.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," sera ignor\xe9. Utile avec ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," lorsque vous voulez vous assurer qu'aucun script n'est ex\xe9cut\xe9 pendant l'installation."),(0,i.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Par d\xe9faut : ",(0,i.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"chemin")),(0,i.kt)("li",{parentName:"ul"},"Exemple\xa0: ",(0,i.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,i.kt)("p",null,"L'emplacement du pnpmfile local."),(0,i.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"chemin")),(0,i.kt)("li",{parentName:"ul"},"Exemple\xa0: ",(0,i.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,i.kt)("p",null,"L'emplacement du pnpmfile global. Un fichier pnpm global est utilis\xe9 par tous les projets lors de l'installation."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Il est recommand\xe9 d'utiliser les fichiers pnpmfiles locaux. N'utilisez un pnpmfile global que si vous utilisez pnpm sur des projets qui n'utilisent pas pnpm comme gestionnaire de packages principal.")))}k.isMDXComponent=!0}}]);