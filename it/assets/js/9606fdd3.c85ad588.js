"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1808],{9613:(e,i,n)=>{n.d(i,{Zo:()=>c,kt:()=>k});var t=n(9496);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function r(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var i=t.useContext(p),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},c=function(e){var i=s(e.components);return t.createElement(p.Provider,{value:i},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?t.createElement(k,l(l({ref:i},c),{},{components:n})):t.createElement(k,l({ref:i},c))}));function k(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var p in i)hasOwnProperty.call(i,p)&&(r[p]=i[p]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1078:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(1966),a=n(9836),o=(n(9496),n(9613)),l=["components"],r={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,s={unversionedId:"pnpmfile",id:"pnpmfile",title:".pnpmfile.cjs",description:"pnpm ti consente di agganciarti direttamente al processo di installazione tramite funzioni speciali (hook). Gli hook possono essere dichiarati in un file chiamato .pnpmfile.cjs.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/it/next/pnpmfile",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"docs",previous:{title:"pnpm-workspace.yaml",permalink:"/it/next/pnpm-workspace_yaml"},next:{title:"Spazio di lavoro",permalink:"/it/next/workspaces"}},c={},d=[{value:"Hooks",id:"hooks",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"Argomenti",id:"argomenti",level:4},{value:"Utilizzo",id:"utilizzo",level:4},{value:"Limitazioni conosciute",id:"limitazioni-conosciute",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",level:3},{value:"Argomenti",id:"argomenti-1",level:4},{value:"Esempio di utilizzo",id:"esempio-di-utilizzo",level:4},{value:"Limitazioni note",id:"limitazioni-note",level:4},{value:"Configurazione correlata",id:"configurazione-correlata",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],m={toc:d},u="wrapper";function k(e){var i=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(u,(0,t.Z)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm ti consente di agganciarti direttamente al processo di installazione tramite funzioni speciali (hook). Gli hook possono essere dichiarati in un file chiamato ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,o.kt)("p",null,"Per impostazione predefinita, ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dovrebbe trovarsi nella stessa cartella del file di blocco. Ad esempio, in uno ",(0,o.kt)("a",{parentName:"p",href:"/it/next/workspaces"},"spazio di lavoro")," con un file di blocco ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dovrebbe trovarsi nella radice del monorepo."),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"tldr"},"TL;DR"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Funzione hook"),(0,o.kt)("th",{parentName:"tr",align:null},"Processo"),(0,o.kt)("th",{parentName:"tr",align:null},"Utilizzi"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,o.kt)("td",{parentName:"tr",align:null},"Chiamato dopo che pnpm ha analizzato il manifesto del pacchetto della dipendenza"),(0,o.kt)("td",{parentName:"tr",align:null},"Ti permette di mutare il ",(0,o.kt)("inlineCode",{parentName:"td"},"package.json")," di una dipendenza")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,o.kt)("td",{parentName:"tr",align:null},"Chiamato dopo che le dipendenze sono state risolte."),(0,o.kt)("td",{parentName:"tr",align:null},"Consente di modificare il file di blocco.")))),(0,o.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,o.kt)("p",null,"Consente di modificare ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," di una dipendenza dopo l'analisi e prima della risoluzione. Queste mutazioni non vengono salvate nel filesystem, tuttavia, interessano ci\xf2 viene risolto nel file di blocco e quindi ci\xf2 che viene installato."),(0,o.kt)("p",null,"Nota che dovrai eliminare ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," se hai gi\xe0 risolto la dipendenza che desideri modificare."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Se hai bisogno di modifiche al file ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," salvate nel filesystem, devi usare il comando ",(0,o.kt)("a",{parentName:"p",href:"/it/next/cli/patch"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," e patchare il file ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". Questo potrebbe essere utile se vuoi rimuovere il campo ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," di una dipendenza, ad esempio.")),(0,o.kt)("h4",{id:"argomenti"},"Argomenti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pkg")," - Il manifesto del pacchetto. La risposta dal registro o il contenuto di ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contesto")," - Oggetto contesto per il passaggio. Il metodo ",(0,o.kt)("inlineCode",{parentName:"li"},"#log(msg)")," consente di utilizzare un registro di debug per il passaggio.")),(0,o.kt)("h4",{id:"utilizzo"},"Utilizzo"),(0,o.kt)("p",null,"Esempio ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (cambia le dipendenze di una dipendenza):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,o.kt)("h4",{id:"limitazioni-conosciute"},"Limitazioni conosciute"),(0,o.kt)("p",null,"Rimozione del campo ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," da una dipendenza del manifesto tramite ",(0,o.kt)("inlineCode",{parentName:"p"},"readPackage")," sar\xe0 impedir\xe0 a pnpm di costruire la dipendenza. Quando si crea una dipendenza, pnpm legge il ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," del pacchetto dall'archivio del pacchetto, che non \xe8 interessato dall'hook. Per ignorare la compilazione di un pacchetto, utilizzare il campo ",(0,o.kt)("a",{parentName:"p",href:"/it/next/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),"."),(0,o.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,o.kt)("p",null,"Consente di modificare l'output del file di blocco prima che venga serializzato."),(0,o.kt)("h4",{id:"argomenti-1"},"Argomenti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockfile")," - L'oggetto risoluzioni lockfile serializzato su ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contesto")," - Oggetto contesto per il passaggio. Il metodo ",(0,o.kt)("inlineCode",{parentName:"li"},"#log(msg)")," consente di utilizzare un registro di debug per il passaggio.")),(0,o.kt)("h4",{id:"esempio-di-utilizzo"},"Esempio di utilizzo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,o.kt)("h4",{id:"limitazioni-note"},"Limitazioni note"),(0,o.kt)("p",null,"Non ce ne sono: tutto ci\xf2 che pu\xf2 essere fatto con il file di blocco pu\xf2 essere modificato tramite questa funzione e puoi persino estendere la funzionalit\xe0 del file di blocco."),(0,o.kt)("h2",{id:"configurazione-correlata"},"Configurazione correlata"),(0,o.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," verr\xe0 ignorato. Utile insieme a ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-script")," quando si si desidera assicurarsi che nessuno script venga eseguito durante l'installazione."),(0,o.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"percorso")),(0,o.kt)("li",{parentName:"ul"},"Esempio: ",(0,o.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,o.kt)("p",null,"La posizione del file pnpm locale."),(0,o.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"percorso")),(0,o.kt)("li",{parentName:"ul"},"Esempio: ",(0,o.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,o.kt)("p",null,"La posizione di un file pnpm globale. Un file pnpm globale viene utilizzato da tutti i progetti durante l'installazione."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Si consiglia di utilizzare file pnpm locali. Usa un pnpmfile globale solo se usi pnpm su progetti che non usano pnpm come gestore di pacchetti principale.")))}k.isMDXComponent=!0}}]);