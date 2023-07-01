"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3314],{9613:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>f});var n=i(9496);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(i),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return i?n.createElement(f,r(r({ref:t},s),{},{components:i})):n.createElement(f,r({ref:t},s))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=i.length,r=new Array(l);r[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:o,r[1]=a;for(var c=2;c<l;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},841:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=i(1966),o=i(9836),l=(i(9496),i(9613)),r=["components"],a={id:"filtering",title:"Filtraggio"},p=void 0,c={unversionedId:"filtering",id:"version-8.x/filtering",title:"Filtraggio",description:"Il filtraggio consente di limitare i comandi a specifici sottoinsiemi di pacchetti.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-8.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/it/filtering",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"8.x",frontMatter:{id:"filtering",title:"Filtraggio"},sidebar:"version-8.x/docs",previous:{title:"Configurazione",permalink:"/it/configuring"},next:{title:"Script",permalink:"/it/scripts"}},s={},d=[{value:"Corrispondenza",id:"corrispondenza",level:2},{value:"--filter &lt;nome_pacchetto&gt;",id:"--filter-nome_pacchetto",level:3},{value:"--filter &lt;nome_pacchetto&gt;...",id:"--filter-nome_pacchetto-1",level:3},{value:"--filter &lt;nome_pacchetto&gt;^...",id:"--filter-nome_pacchetto-2",level:3},{value:"--filter ...&lt;nome_pacchetto&gt;",id:"--filter-nome_pacchetto-3",level:3},{value:"--filter &quot;...^&lt;nome_pacchetto&gt;&quot;",id:"--filter-nome_pacchetto-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<dopo>&quot;",id:"--filter-dopo",level:3},{value:"Esclusione",id:"esclusione",level:2},{value:"Molteplicit\xe0",id:"molteplicit\xe0",level:2},{value:"--filter-prod &lt;modello_filtro&gt;",id:"--filter-prod-modello_filtro",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],m={toc:d},u="wrapper";function f(e){var t=e.components,i=(0,o.Z)(e,r);return(0,l.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Il filtraggio consente di limitare i comandi a specifici sottoinsiemi di pacchetti."),(0,l.kt)("p",null,"pnpm supporta una ricca sintassi di selettori per la selezione dei pacchetti per nome o per relazione."),(0,l.kt)("p",null,"I selettori possono essere specificati tramite il flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," (o ",(0,l.kt)("inlineCode",{parentName:"p"},"-F"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,l.kt)("h2",{id:"corrispondenza"},"Corrispondenza"),(0,l.kt)("h3",{id:"--filter-nome_pacchetto"},"--filter ","<","nome_pacchetto>"),(0,l.kt)("p",null,"Per selezionare un pacchetto esatto, \xe8 sufficiente specificare il suo nome (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") o utilizzare un modello per selezionare un insieme di pacchetti (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,l.kt)("p",null,"Esempi:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,l.kt)("p",null,"Specificare l'ambito del pacchetto \xe8 facoltativo, quindi ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter=core")," sceglier\xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core")," se ",(0,l.kt)("inlineCode",{parentName:"p"},"core")," non viene trovato. Tuttavia, se l'area di lavoro ha pi\xf9 pacchetti con lo stesso nome (ad esempio, ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core")," e ",(0,l.kt)("inlineCode",{parentName:"p"},"@types/core"),"), il filtro senza ambito non selezioner\xe0 nulla."),(0,l.kt)("h3",{id:"--filter-nome_pacchetto-1"},"--filter ","<","nome_pacchetto>..."),(0,l.kt)("p",null,"Per selezionare un pacchetto e le sue dipendenze (dirette e non dirette), aggiungi il suffisso del nome del pacchetto con i puntini di sospensione: ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". Ad esempio, il prossimo comando eseguir\xe0 i test di ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," e tutte le sue dipendenze:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,l.kt)("p",null,"Puoi usare uno schema per selezionare un set di pacchetti radice:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,l.kt)("h3",{id:"--filter-nome_pacchetto-2"},"--filter ","<","nome_pacchetto>^..."),(0,l.kt)("p",null,"Per selezionare SOLO le dipendenze di un pacchetto (sia diretto che non diretto), aggiungi al nome il suffisso con i suddetti puntini di sospensione preceduti da un gallone. Ad esempio, il prossimo comando eseguir\xe0 i test per tutte le dipendenze di ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,l.kt)("h3",{id:"--filter-nome_pacchetto-3"},"--filter ...","<","nome_pacchetto>"),(0,l.kt)("p",null,"Per selezionare un pacchetto e i suoi pacchetti dipendenti (dirette e non dirette), aggiungi il prefisso del nome del pacchetto con i puntini di sospensione: ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". Ad esempio, questo eseguir\xe0 i test di ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," e tutti i pacchetti dipendenti da esso:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,l.kt)("h3",{id:"--filter-nome_pacchetto-4"},'--filter "...^',"<",'nome_pacchetto>"'),(0,l.kt)("p",null,"Per selezionare SOLO i dipendenti di un pacchetto (sia diretti che non diretti), prefissare il nome del pacchetto con un'ellissi seguita da un gallone. Ad esempio, questo eseguir\xe0 i test per tutti i pacchetti dipendenti da ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,l.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,l.kt)("p",null,"Un modello glob relativo ai progetti corrispondenti della cartella di lavoro corrente."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,l.kt)("p",null,"Include tutti i progetti che si trovano nella cartella specificata."),(0,l.kt)("p",null,"Pu\xf2 essere utilizzato con gli operatori puntini di sospensione e gallone per selezionare anche dipendenti/dipendenze:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,l.kt)("p",null,"Pu\xf2 anche essere combinato con ",(0,l.kt)("inlineCode",{parentName:"p"},"[<dopo>]"),". Ad esempio, per selezionare tutti i progetti modificati all'interno di una cartella:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,l.kt)("p",null,"Oppure puoi selezionare tutti i pacchetti da una cartella con nomi che corrispondono al modello:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,l.kt)("h3",{id:"--filter-dopo"},'--filter "',"[<","dopo>]",'"'),(0,l.kt)("p",null,"Seleziona tutti i pacchetti modificati dopo il commit/branch specificato. Pu\xf2 avere il suffisso o il prefisso ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," per includere dipendenze/dipendenti."),(0,l.kt)("p",null,"Ad esempio, il comando successivo eseguir\xe0 i test in tutti i pacchetti modificati dopo ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," e su tutti i pacchetti dipendenti:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,l.kt)("h2",{id:"esclusione"},"Esclusione"),(0,l.kt)("p",null,'Tutti i selettori di filtro possono funzionare come operatori di esclusione quando hanno uno "!" iniziale. In zsh (e possibilmente in altre shell), dovrebbe essere effettuato l\'escaping di "!": ',(0,l.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,l.kt)("p",null,"Ad esempio, questo eseguir\xe0 un comando in tutti i progetti tranne ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,l.kt)("p",null,"E questo eseguir\xe0 un comando in tutti i progetti che non si trovano nella cartella ",(0,l.kt)("inlineCode",{parentName:"p"},"lib"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,l.kt)("h2",{id:"molteplicit\xe0"},"Molteplicit\xe0"),(0,l.kt)("p",null,"Quando i pacchetti vengono filtrati, viene preso ogni pacchetto che corrisponde ad almeno uno dei selettori. Puoi usare tutti i filtri che vuoi:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,l.kt)("h2",{id:"--filter-prod-modello_filtro"},"--filter-prod ","<","modello_filtro>"),(0,l.kt)("p",null,"Agisce allo stesso modo di ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," ma omette le dipendenze di sviluppo (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),") quando si selezionano i progetti di dipendenza dallo spazio di lavoro."),(0,l.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"test-pattern")," consente di rilevare se i file modificati sono correlati ai test. Se lo sono, i pacchetti dipendenti di tali pacchetti modificati non sono inclusi."),(0,l.kt)("p",null,'Questa opzione \xe8 utile con il filtro "modificato da". Ad esempio, il prossimo comando eseguir\xe0 i test in tutti i pacchetti modificati e, se le modifiche sono nel del pacchetto, i test verranno eseguiti anche nei pacchetti dipendenti:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,l.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,l.kt)("p",null,"Consente di ignorare i file modificati dai modelli glob durante il filtraggio per i progetti modificati dal commit/ramo specificato."),(0,l.kt)("p",null,"Esempio di utilizzo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}f.isMDXComponent=!0}}]);