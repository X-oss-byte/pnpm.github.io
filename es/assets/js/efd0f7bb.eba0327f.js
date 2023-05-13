"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4297],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(2962),r=n(2742),o=(n(9496),n(9613)),l=["components"],i={id:"filtering",title:"Filtraci\xf3n"},p=void 0,s={unversionedId:"filtering",id:"version-7.x/filtering",title:"Filtraci\xf3n",description:"El filtrado permite restringir los comandos a un subconjunto espec\xedfico de paquetes.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/es/7.x/filtering",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"filtering",title:"Filtraci\xf3n"},sidebar:"version-7.x/docs",previous:{title:"Configuraci\xf3n",permalink:"/es/7.x/configuring"},next:{title:"Scripts",permalink:"/es/7.x/scripts"}},c={},d=[{value:"Emparejamiento",id:"emparejamiento",level:2},{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",level:3},{value:"--filter &lt;package_name&gt;",id:"--filter-package_name-3",level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Excluyendo",id:"excluyendo",level:2},{value:"Multiplicidad",id:"multiplicidad",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"-- test-pattern &lt;glob&gt;",id:"---test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"El filtrado permite restringir los comandos a un subconjunto espec\xedfico de paquetes."),(0,o.kt)("p",null,"pnpm admite un selector de sintaxis enriquecida para seleccionar paquetes por nombre o por relaci\xf3n."),(0,o.kt)("p",null,"Los selectores pueden especificarse mediante el indicador ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," (o ",(0,o.kt)("inlineCode",{parentName:"p"},"-F"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,o.kt)("h2",{id:"emparejamiento"},"Emparejamiento"),(0,o.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,o.kt)("p",null,"Para seleccionar un paquete exacto, simplemente especifique su nombre (",(0,o.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") o use un patr\xf3n para seleccionar un conjunto de paquetes (",(0,o.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,o.kt)("p",null,"Specifying the scope of the package is optional, so ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter=core")," will pick ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/core")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," is not found. Sin embargo, si el espacio de trabajo tiene varios paquetes con el mismo nombre (por ejemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/core")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/core"),"), el filtrado sin alcance no seleccionar\xe1 nada."),(0,o.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,o.kt)("p",null,"Para seleccionar un paquete y sus dependencias (directas y no directas), coloque el sufijo en el nombre del paquete con puntos suspensivos: ",(0,o.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". Por ejemplo, el siguiente comando ejecutar\xe1 pruebas para todas las dependencias de ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,o.kt)("p",null,"Puede usar un patr\xf3n para seleccionar un conjunto de paquetes ra\xedz:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,o.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,o.kt)("p",null,"Para seleccionar SOLAMENTE las dependencias de un paquete (tanto directas como no directas), agregue al nombre los puntos suspensivos antes mencionados precedidos por un cheur\xf3n. Por ejemplo, el siguiente comando ejecutar\xe1 pruebas para todas las dependencias de ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,o.kt)("h3",{id:"--filter-package_name-3"},"--filter ","<","package_name>"),(0,o.kt)("p",null,"Para seleccionar un paquete y sus dependencias (directas y no directas), coloque el sufijo en el nombre del paquete con puntos suspensivos: ",(0,o.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". Por ejemplo, esto ejecutar\xe1 las pruebas de ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," y todos los paquetes que dependen de \xe9l:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,o.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,o.kt)("p",null,"Para seleccionar SOLAMENTE a los dependientes de un paquete (tanto directos como no directos), prefije el nombre del paquete con puntos suspensivos seguidos de un cheur\xf3n. Por ejemplo, esto ejecutar\xe1 pruebas para todos los paquetes que dependen de ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,o.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,o.kt)("p",null,"Un patr\xf3n global relativo a los proyectos que coincidan con el directorio de trabajo actual."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,o.kt)("p",null,"Incluye todos los proyectos que est\xe1n bajo el directorio especificado."),(0,o.kt)("p",null,"Tambi\xe9n se puede usar con los operadores de puntos suspensivos y cheur\xf3n para seleccionar dependientes/dependencias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,o.kt)("p",null,"Tambi\xe9n se puede combinar con ",(0,o.kt)("inlineCode",{parentName:"p"},"[<since>]"),". Por ejemplo, para seleccionar todos los proyectos modificados dentro de un directorio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,o.kt)("p",null,"O puede seleccionar todos los paquetes de un directorio con nombres que coincidan con el patr\xf3n dado:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,o.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,o.kt)("p",null,"Selecciona todos los paquetes cambiados desde el commit/rama especificado. Puede tener el sufijo o el prefijo ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," para incluir dependencias/dependientes."),(0,o.kt)("p",null,"Por ejemplo, el siguiente comando ejecutar\xe1 pruebas en todos los paquetes modificados desde ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," y en cualquier paquete dependiente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,o.kt)("h2",{id:"excluyendo"},"Excluyendo"),(0,o.kt)("p",null,'Cualquiera de los selectores de filtro puede funcionar como operadores de exclusi\xf3n cuando tienen un inicial "!". En zsh (y posiblemente en otros shells), "!" se debe escapar: ',(0,o.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,o.kt)("p",null,"Por ejemplo, esto ejecutar\xe1 un comando en todos los proyectos excepto en ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,o.kt)("p",null,"Y esto ejecutar\xe1 un comando en todos los proyectos que no est\xe9n en el directorio ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,o.kt)("h2",{id:"multiplicidad"},"Multiplicidad"),(0,o.kt)("p",null,"Cuando se filtran los paquetes, se toma cada paquete que coincida con al menos uno de los selectores. Puedes usar tantos filtros como quieras:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,o.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,o.kt)("p",null,"Act\xfaa igual que ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," pero omite ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," al seleccionar los proyectos de dependencia del espacio de trabajo."),(0,o.kt)("h2",{id:"---test-pattern-glob"},"-- test-pattern ","<","glob>"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"test-pattern")," permite detectar los archivos modificados relacionados con pruebas. Si lo son, los paquetes dependientes de dichos paquetes modificados no est\xe1n incluidos."),(0,o.kt)("p",null,'Esta opci\xf3n es \xfatil con el filtro "cambiado desde". Por ejemplo, el siguiente comando ejecutar\xe1 pruebas en todos los paquetes modificados, y si los cambios est\xe1n en el c\xf3digo fuente del paquete, las pruebas tambi\xe9n se ejecutar\xe1n en los paquetes dependientes:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,o.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,o.kt)("p",null,"Permite ignorar los archivos cambiados por patrones de glob al filtrar los proyectos cambiados desde el commit/rama especificado."),(0,o.kt)("p",null,"Ejemplo de uso:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}m.isMDXComponent=!0}}]);