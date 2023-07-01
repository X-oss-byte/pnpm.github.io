"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4531],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(1966),r=n(9836),l=(n(9496),n(9613)),s=["components"],i={id:"filtering",title:"Filtrage"},p=void 0,o={unversionedId:"filtering",id:"version-7.x/filtering",title:"Filtrage",description:"Le filtrage vous permet de restreindre les commandes \xe0 des sous-ensembles sp\xe9cifiques de packages.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/fr/7.x/filtering",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"filtering",title:"Filtrage"},sidebar:"version-7.x/docs",previous:{title:"Configuration",permalink:"/fr/7.x/configuring"},next:{title:"Scripts",permalink:"/fr/7.x/scripts"}},c={},u=[{value:"Correspondant",id:"correspondant",level:2},{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Except\xe9",id:"except\xe9",level:2},{value:"Multiplicit\xe9",id:"multiplicit\xe9",level:2},{value:"--filter-prod &lt;mod\xe8le_filtrage&gt;",id:"--filter-prod-mod\xe8le_filtrage",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Le filtrage vous permet de restreindre les commandes \xe0 des sous-ensembles sp\xe9cifiques de packages."),(0,l.kt)("p",null,"pnpm supporte une syntaxe de s\xe9lecteur riche pour choisir les paquets par nom ou par relation."),(0,l.kt)("p",null,"Les s\xe9lecteurs peuvent \xeatre sp\xe9cifi\xe9s via le flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," (ou ",(0,l.kt)("inlineCode",{parentName:"p"},"-F"),") :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,l.kt)("h2",{id:"correspondant"},"Correspondant"),(0,l.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,l.kt)("p",null,"Pour s\xe9lectionner un package exact, sp\xe9cifiez simplement son nom (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") ou utilisez un paterne pour s\xe9lectionner un ensemble de paquets (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,l.kt)("p",null,"Exemples\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,l.kt)("p",null,"Sp\xe9cifier le scope du package est optionnel, donc ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter=core")," choisira ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core")," si ",(0,l.kt)("inlineCode",{parentName:"p"},"core")," n'est pas trouv\xe9. Cependant, si l'espace de travail a plusieurs packages avec le m\xeame nom (par exemple, ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core")," et ",(0,l.kt)("inlineCode",{parentName:"p"},"@types/core"),"), le filtrage sans scope ne choisira rien."),(0,l.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,l.kt)("p",null,"Pour s\xe9lectionner un package et ses d\xe9pendances (directes et non directes), suffixez le nom du paquet avec des points de suspension: ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". Par exemple, la commande suivante ex\xe9cutera les tests de ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," et toutes ses d\xe9pendances:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,l.kt)("p",null,"Vous pouvez utiliser un paterne pour s\xe9lectionner un ensemble de packages racine\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,l.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,l.kt)("p",null,"Pour s\xe9lectionner UNIQUEMENT les d\xe9pendances d'un package (\xe0 la fois directes et non directes), suffixez le nom avec les points de suspension susmentionn\xe9s pr\xe9c\xe9d\xe9s d'un chevron. Par exemple, la commande suivante ex\xe9cutera les tests de ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," et toutes ses d\xe9pendances:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,l.kt)("h3",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,l.kt)("p",null,"Pour s\xe9lectionner un paquet et ses packages d\xe9pendants (directs et non directs), pr\xe9fixez le nom du paquet avec des points de suspension\xa0: ",(0,l.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". Par exemple, \xe7a va ex\xe9cuter les tests de ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," et de tous les paquets qui en d\xe9pendent\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,l.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,l.kt)("p",null,"Pour s\xe9lectionner SEULEMENT les d\xe9pendants d'un paquet (direct et non-direct), pr\xe9parez le nom du paquet avec une ellipse suivie d'un chevron. Par exemple, cela va lancer les tests pour tous les paquets d\xe9pendants du ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,l.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,l.kt)("p",null,"Un mod\xe8le de glob relatif au r\xe9pertoire de travail courant correspondant aux projets."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,l.kt)("p",null,"Inclut tous les projets qui sont dans le r\xe9pertoire sp\xe9cifi\xe9."),(0,l.kt)("p",null,"Il peut \xe9galement \xeatre utilis\xe9 avec les op\xe9rateurs d'ellipse et chevron pour s\xe9lectionner d\xe9pendants/d\xe9pendances :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,l.kt)("p",null,"Il peut \xe9galement \xeatre combin\xe9 avec ",(0,l.kt)("inlineCode",{parentName:"p"},"[<since>]"),". Par exemple, pour s\xe9lectionner tous les projets modifi\xe9s dans un r\xe9pertoire:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,l.kt)("p",null,"Ou vous pouvez s\xe9lectionner tous les packages d'un r\xe9pertoire avec des noms correspondant au mod\xe8le donn\xe9 :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,l.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,l.kt)("p",null,"S\xe9lectionne tous les paquets modifi\xe9s depuis le commit ou la branche sp\xe9cifi\xe9s. Peut \xeatre suffix\xe9 ou pr\xe9fix\xe9 avec ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," pour inclure des d\xe9pendances/d\xe9pendantes."),(0,l.kt)("p",null,"Par exemple, la commande suivante va lancer les tests dans tous les paquets modifi\xe9s depuis ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," et sur toutes les d\xe9pendances:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,l.kt)("h2",{id:"except\xe9"},"Except\xe9"),(0,l.kt)("p",null,"N'importe lequel des s\xe9lecteurs de filtres peut fonctionner comme des op\xe9rateurs d'exclusion lorsqu'ils ont un \xab !\xbb en t\xeate. In zsh (and possibly other shells), \"!\" should be escaped: ",(0,l.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,l.kt)("p",null,"Dans cet exemple, ceci va lancer une commande sur tous les projets except\xe9 pour ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,l.kt)("p",null,"Et ceci va lancer une commande sur tous les projets qui ne sont pas dans le dossier ",(0,l.kt)("inlineCode",{parentName:"p"},"lib"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,l.kt)("h2",{id:"multiplicit\xe9"},"Multiplicit\xe9"),(0,l.kt)("p",null,"Lorsque les paquets sont filtr\xe9s, chaque paquet est pris qui correspond \xe0 au moins un des s\xe9lecteurs. Vous pouvez utiliser autant de filtres que vous le souhaitez :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,l.kt)("h2",{id:"--filter-prod-mod\xe8le_filtrage"},"--filter-prod ","<","mod\xe8le_filtrage>"),(0,l.kt)("p",null,"Agit de la m\xeame mani\xe8re qu'un ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," mais omet ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," lors de la s\xe9lection des projets de d\xe9pendance depuis l'espace de travail."),(0,l.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. Si tel est le cas, les paquets d\xe9pendants de ces paquets modifi\xe9s ne sont pas inclus."),(0,l.kt)("p",null,'Cette option est utile avec le filtre "changed since". Par exemple, la prochaine commande ex\xe9cutera des tests dans tous les paquets modifi\xe9s, et si les changements sont dans le code source du paquet, les tests s\'ex\xe9cuteront \xe9galement dans les paquets d\xe9pendants :'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,l.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,l.kt)("p",null,"Permet d'ignorer les fichiers modifi\xe9s par les motifs de glob lors du filtrage pour les projets modifi\xe9s depuis la commit/branche sp\xe9cifi\xe9e."),(0,l.kt)("p",null,"Exemple d'utilisation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}f.isMDXComponent=!0}}]);