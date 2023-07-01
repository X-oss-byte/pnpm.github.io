"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[162],{9613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>k});var t=a(9496);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,p=function(e,n){if(null==e)return{};var a,t,p={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(p[a]=e[a]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var r=t.createContext({}),s=function(e){var n=t.useContext(r),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(r.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,p=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=p,k=c["".concat(r,".").concat(m)]||c[m]||u[m]||i;return a?t.createElement(k,o(o({ref:n},d),{},{components:a})):t.createElement(k,o({ref:n},d))}));function k(e,n){var a=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[c]="string"==typeof e?e:p,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6763:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=a(1966),p=a(9836),i=(a(9496),a(9613)),o=["components"],l={id:"package_json",title:"package.json"},r=void 0,s={unversionedId:"package_json",id:"version-8.x/package_json",title:"package.json",description:"El fichero manifest de un paquete. Contient toda la metadata del paquete, incluyendo dependencies, titulo, autor, etc\xe9tera. Este es un estandar a trav\xe9s de todos gestores de paquetes de Node.JS, inclu\xeddo pnpm.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-8.x/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/es/package_json",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"8.x",frontMatter:{id:"package_json",title:"package.json"},sidebar:"version-8.x/docs",previous:{title:"pnpm config",permalink:"/es/cli/config"},next:{title:".npmrc",permalink:"/es/npmrc"}},d={},c=[{value:"engines",id:"engines",level:2},{value:"dependenciesMeta",id:"dependenciesmeta",level:2},{value:"dependenciesMeta.*.injected",id:"dependenciesmetainjected",level:3},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",level:2},{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",level:3},{value:"publishConfig",id:"publishconfig",level:2},{value:"publishConfig.executableFiles",id:"publishconfigexecutablefiles",level:3},{value:"publishConfig.directory",id:"publishconfigdirectory",level:3},{value:"publishConfig.linkDirectory",id:"publishconfiglinkdirectory",level:3},{value:"pnpm.overrides",id:"pnpmoverrides",level:2},{value:"pnpm.packageExtensions",id:"pnpmpackageextensions",level:2},{value:"pnpm.peerDependencyRules",id:"pnpmpeerdependencyrules",level:2},{value:"pnpm.peerDependencyRules.ignoreMissing",id:"pnpmpeerdependencyrulesignoremissing",level:3},{value:"pnpm.peerDependencyRules.allowedVersions",id:"pnpmpeerdependencyrulesallowedversions",level:3},{value:"pnpm.peerDependencyRules.allowAny",id:"pnpmpeerdependencyrulesallowany",level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",level:2},{value:"pnpm.onlyBuiltDependencies",id:"pnpmonlybuiltdependencies",level:2},{value:"pnpm.allowedDeprecatedVersions",id:"pnpmalloweddeprecatedversions",level:2},{value:"pnpm.patchedDependencies",id:"pnpmpatcheddependencies",level:2},{value:"pnpm.allowNonAppliedPatches",id:"pnpmallownonappliedpatches",level:2},{value:"pnpm.updateConfig",id:"pnpmupdateconfig",level:2},{value:"pnpm.updateConfig.ignoreDependencies",id:"pnpmupdateconfigignoredependencies",level:3},{value:"pnpm.auditConfig",id:"pnpmauditconfig",level:2},{value:"pnpm.auditConfig.ignoreCves",id:"pnpmauditconfigignorecves",level:3},{value:"pnpm.requiredScripts",id:"pnpmrequiredscripts",level:2},{value:"resolutions",id:"resolutions",level:2}],u={toc:c},m="wrapper";function k(e){var n=e.components,a=(0,p.Z)(e,o);return(0,i.kt)(m,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"El fichero manifest de un paquete. Contient toda la metadata del paquete, incluyendo dependencies, titulo, autor, etc\xe9tera. Este es un estandar a trav\xe9s de todos gestores de paquetes de Node.JS, inclu\xeddo pnpm."),(0,i.kt)("h2",{id:"engines"},"engines"),(0,i.kt)("p",null,"Puedes espec\xedficar la versi\xf3n de Node y pnpm con la que tu aplicaci\xf3n trabaja:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,i.kt)("p",null,"Durante el desarrollo local, pnpm siempre fallar\xe1 con un mensaje de error si su versi\xf3n no coincide con la especificada en el campo ",(0,i.kt)("inlineCode",{parentName:"p"},"engines"),"."),(0,i.kt)("p",null,"A menos que el usuario haya establecido un valor para ",(0,i.kt)("inlineCode",{parentName:"p"},"engine-strict")," (ver ",(0,i.kt)("a",{parentName:"p",href:"/es/npmrc#engine-strict"},".npmrc"),"), este campo es solo indicativo y solo generar\xe1 advertencias cuando su paquete est\xe9 instalado como una dependencia."),(0,i.kt)("h2",{id:"dependenciesmeta"},"dependenciesMeta"),(0,i.kt)("p",null,"Metainformaci\xf3n adicional utilizada para dependencias declaradas dentro de ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opcionalDependencies"),"y ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependenceas"),"."),(0,i.kt)("h3",{id:"dependenciesmetainjected"},"dependenciesMeta.*.injected"),(0,i.kt)("p",null,"If this is set to true for a local dependency, the package will be hard linked to the modules directory, not symlinked."),(0,i.kt)("p",null,"For instance, the following ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in a workspace will create a symlink to ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory of ",(0,i.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0"\n  }\n}\n')),(0,i.kt)("p",null,"But what if ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," in its peer dependencies? If all projects in the monorepo use the same version of ",(0,i.kt)("inlineCode",{parentName:"p"},"react"),", then no problem. But what if ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," is required by ",(0,i.kt)("inlineCode",{parentName:"p"},"card")," that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"react@16")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"form")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"react@17"),"? Without using ",(0,i.kt)("inlineCode",{parentName:"p"},"inject"),", you'd have to choose a single version of ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," and install it as dev dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"button"),". But using the ",(0,i.kt)("inlineCode",{parentName:"p"},"injected")," field you can inject ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," to a package, and ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," will be installed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," version of that package."),(0,i.kt)("p",null,"So this will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "16"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"button")," will be hard linked into the dependencies of ",(0,i.kt)("inlineCode",{parentName:"p"},"card"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"react@16")," will be symlinked to the dependencies of ",(0,i.kt)("inlineCode",{parentName:"p"},"card/node_modules/button"),"."),(0,i.kt)("p",null,"And this will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"form"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "form",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "17"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"button")," will be hard linked into the dependencies of ",(0,i.kt)("inlineCode",{parentName:"p"},"form"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"react@17")," will be symlinked to the dependencies of ",(0,i.kt)("inlineCode",{parentName:"p"},"form/node_modules/button"),"."),(0,i.kt)("p",null,"A diferencia de las dependencias normales, las inyectadas no est\xe1n vinculadas a la carpeta de destino, por lo que no se actualizan autom\xe1ticamente, por ejemplo, despu\xe9s de ejecutar el script de compilaci\xf3n. Para actualizar el contenido de la carpeta vinculada de forma permanente al estado m\xe1s reciente de la carpeta del paquete de dependencia, vuelva a llamar a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm i"),"."),(0,i.kt)("p",null,"Tenga en cuenta que el paquete ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," debe tener cualquier script de ciclo de vida que se ejecute en la instalaci\xf3n para que ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," detecte los cambios y lo actualice. Por ejemplo, el paquete se puede reconstruir en la instalaci\xf3n: ",(0,i.kt)("inlineCode",{parentName:"p"},'"prepare": "pnpm run build"'),". Cualquier script funcionar\xeda, incluso un comando simple no relacionado y sin efectos secundarios, como este: ",(0,i.kt)("inlineCode",{parentName:"p"},'"prepare": "pnpm root"'),"."),(0,i.kt)("h2",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,i.kt)("p",null,"Este campo enumera informaci\xf3n adicional relacionada con las dependencias enumeradas en el campo ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"."),(0,i.kt)("h3",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,i.kt)("p",null,"Si se establece en verdadero, el administrador de paquetes marcar\xe1 la dependencia del par seleccionada como opcional. Por lo tanto, el consumidor que lo omite ya no ser\xe1 reportado como un error."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Tenga en cuenta que aunque ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," no fue especificado en ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", est\xe1 marcada como opcional. pnpm por lo tanto supondr\xe1 que cualquier versi\xf3n de bar est\xe1 bien. Sin embargo, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," es opcional, pero solo para la especificaci\xf3n de versi\xf3n requerida."),(0,i.kt)("h2",{id:"publishconfig"},"publishConfig"),(0,i.kt)("p",null,"Es posible anular algunos campos en el manifiesto antes de que el paquete est\xe9. Los siguientes campos pueden ser anulados:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#bin"},(0,i.kt)("inlineCode",{parentName:"a"},"bin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#main"},(0,i.kt)("inlineCode",{parentName:"a"},"main"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,i.kt)("inlineCode",{parentName:"a"},"exports"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#types"},(0,i.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,i.kt)("inlineCode",{parentName:"a"},"typings"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#module"},(0,i.kt)("inlineCode",{parentName:"a"},"module"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#browser"},(0,i.kt)("inlineCode",{parentName:"a"},"browser"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#esnext"},(0,i.kt)("inlineCode",{parentName:"a"},"esnext"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#es2015"},(0,i.kt)("inlineCode",{parentName:"a"},"es2015"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,i.kt)("inlineCode",{parentName:"a"},"unpkg"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#microbundle"},(0,i.kt)("inlineCode",{parentName:"a"},"umd:main"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions"},(0,i.kt)("inlineCode",{parentName:"a"},"typesVersions"))),(0,i.kt)("li",{parentName:"ul"},"cpu"),(0,i.kt)("li",{parentName:"ul"},"os")),(0,i.kt)("p",null,"Para anular un campo, agregue la versi\xf3n de publicaci\xf3n del campo a ",(0,i.kt)("inlineCode",{parentName:"p"},"publishingConfig"),"."),(0,i.kt)("p",null,"Por ejemplo, el siguiente ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,i.kt)("p",null,"Se publicar\xe1 como:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,i.kt)("h3",{id:"publishconfigexecutablefiles"},"publishConfig.executableFiles"),(0,i.kt)("p",null,"De manera predeterminada, por razones de portabilidad, ning\xfan archivo, excepto los que se enumeran en el campo bin, se marcar\xe1 como ejecutable en el archivo del paquete resultante. El campo ",(0,i.kt)("inlineCode",{parentName:"p"},"executableFiles")," le permite declarar campos adicionales que deben tener el indicador ejecutable (+x) establecido incluso si no se puede acceder directamente a ellos a trav\xe9s del campo bin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "executableFiles": [\n      "./dist/shim.js"\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"publishconfigdirectory"},"publishConfig.directory"),(0,i.kt)("p",null,"Tambi\xe9n puede utilizar el campo ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," para personalizar el subdirectorio publicado relativo al actual ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"Se espera que tenga una versi\xf3n modificada del paquete actual en el directorio especificado (usualmente usando herramientas de compilaci\xf3n de terceros)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In this example the ",(0,i.kt)("inlineCode",{parentName:"p"},'"dist"')," folder must contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n  }\n}\n')),(0,i.kt)("h3",{id:"publishconfiglinkdirectory"},"publishConfig.linkDirectory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Por defecto: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Tipo: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Cuando se establece en ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", el proyecto se vincular\xe1 desde la ubicaci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," durante el desarrollo local."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n    "linkDirectory": true\n  }\n}\n')),(0,i.kt)("h2",{id:"pnpmoverrides"},"pnpm.overrides"),(0,i.kt)("p",null,"This field allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."),(0,i.kt)("p",null,"Note that the overrides field can only be set at the root of the project."),(0,i.kt)("p",null,"An example of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "quux": "npm:@myorg/quux@^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,i.kt)("p",null,'You may specify the package the overriden dependency belongs to by separating the package selector from the dependency selector with a ">", for example ',(0,i.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",(0,i.kt)("inlineCode",{parentName:"p"},"zoo")," dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"qar@1"),", not for any other dependencies."),(0,i.kt)("p",null,"Una anulaci\xf3n se puede definir como una referencia a la especificaci\xf3n de una dependencia directa. Esto se logra anteponiendo el nombre de la dependencia con un ",(0,i.kt)("inlineCode",{parentName:"p"},"$"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "^1.0.0"\n  },\n  "pnpm": {\n    "overrides": {\n      "foo": "$foo"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The referenced package does not need to match the overridden one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "^1.0.0"\n  },\n  "pnpm": {\n    "overrides": {\n      "bar": "$foo"\n    }\n  }  \n}\n')),(0,i.kt)("h2",{id:"pnpmpackageextensions"},"pnpm.packageExtensions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions")," fields offer a way to extend the existing package definitions with additional information. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"react-redux")," should have ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom")," in its ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," but it has not, it is possible to patch ",(0,i.kt)("inlineCode",{parentName:"p"},"react-redux")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The keys in ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions")," are package names or package names and semver ranges, so it is possible to patch only some versions of a package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The following fields may be extended using ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependenciesMeta"),"."),(0,i.kt)("p",null,"A bigger example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "express@1": {\n        "optionalDependencies": {\n          "typescript": "2"\n        }\n      },\n      "fork-ts-checker-webpack-plugin": {\n        "dependencies": {\n          "@babel/core": "1"\n        },\n        "peerDependencies": {\n          "eslint": ">= 6"\n        },\n        "peerDependenciesMeta": {\n          "eslint": {\n            "optional": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Junto con Yarn, mantenemos una base de datos de ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions")," para parchear paquetes rotos en el ecosistema. If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions"),", consider sending a PR upstream and contributing your extension to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-extensions/sources/index.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"@yarnpkg/extensions"))," database.")),(0,i.kt)("h2",{id:"pnpmpeerdependencyrules"},"pnpm.peerDependencyRules"),(0,i.kt)("h3",{id:"pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing"),(0,i.kt)("p",null,"pnpm will not print warnings about missing peer dependencies from this list."),(0,i.kt)("p",null,"For instance, with the following configuration, pnpm will not print warnings if a dependency needs ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," but ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," is not installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["react"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Package name patterns may also be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["@babel/*", "@eslint/*"]\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions"),(0,i.kt)("p",null,"Unmet peer dependency warnings will not be printed for peer dependencies of the specified range."),(0,i.kt)("p",null,"For instance, if you have some dependencies that need ",(0,i.kt)("inlineCode",{parentName:"p"},"react@16")," but you know that they work fine with ",(0,i.kt)("inlineCode",{parentName:"p"},"react@17"),", then you may use the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowedVersions": {\n        "react": "17"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"This will tell pnpm that any dependency that has react in its peer dependencies should allow ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," v17 to be installed."),(0,i.kt)("p",null,"It is also possible to suppress the warnings only for peer dependencies of specific packages. For instance, with the following configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," v17 will be only allowed when it is in the peer dependencies of the ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," v2 package or in the dependencies of any ",(0,i.kt)("inlineCode",{parentName:"p"},"card")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowedVersions": {\n        "button@2>react": "17",\n        "card>react": "17"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"pnpmpeerdependencyrulesallowany"},"pnpm.peerDependencyRules.allowAny"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"allowAny")," is an array of package name patterns, any peer dependency matching the pattern will be resolved from any version, regardless of the range specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies"),". Por ejemplo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowAny": ["@babel/*", "eslint"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The above setting will mute any warnings about peer dependency version mismatches related to ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/")," packages or ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint"),"."),(0,i.kt)("h2",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,i.kt)("p",null,'This field allows to ignore the builds of specific dependencies. The "preinstall", "install", and "postinstall" scripts of the listed packages will not be executed during installation.'),(0,i.kt)("p",null,"An example of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')),(0,i.kt)("h2",{id:"pnpmonlybuiltdependencies"},"pnpm.onlyBuiltDependencies"),(0,i.kt)("p",null,"A list of package names that are allowed to be executed during installation. If this field exists, only the listed packages will be able to run install scripts."),(0,i.kt)("p",null,"Ejemplo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "onlyBuiltDependencies": ["fsevents"]\n  }\n}\n')),(0,i.kt)("h2",{id:"pnpmalloweddeprecatedversions"},"pnpm.allowedDeprecatedVersions"),(0,i.kt)("p",null,"This setting allows muting deprecation warnings of specific packages."),(0,i.kt)("p",null,"Ejemplo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "allowedDeprecatedVersions": {\n      "express": "1",\n      "request": "*"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"With the above configuration pnpm will not print deprecation warnings about any version of ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," and about v1 of ",(0,i.kt)("inlineCode",{parentName:"p"},"express"),"."),(0,i.kt)("h2",{id:"pnpmpatcheddependencies"},"pnpm.patchedDependencies"),(0,i.kt)("p",null,"This field is added/updated automatically when you run ",(0,i.kt)("a",{parentName:"p",href:"/es/cli/patch-commit"},"pnpm patch-commit"),". It is a dictionary where the key should be the package name and exact version. The value should be a relative path to a patch file."),(0,i.kt)("p",null,"Ejemplo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "patchedDependencies": {\n      "express@4.18.1": "patches/express@4.18.1.patch"\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"pnpmallownonappliedpatches"},"pnpm.allowNonAppliedPatches"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", installation won't fail if some of the patches from the ",(0,i.kt)("inlineCode",{parentName:"p"},"patchedDependencies")," field were not applied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "patchedDependencies": {\n      "express@4.18.1": "patches/express@4.18.1.patch"\n    }\n    "allowNonAppliedPatches": true\n}\n')),(0,i.kt)("h2",{id:"pnpmupdateconfig"},"pnpm.updateConfig"),(0,i.kt)("h3",{id:"pnpmupdateconfigignoredependencies"},"pnpm.updateConfig.ignoreDependencies"),(0,i.kt)("p",null,"Sometimes you can't update a dependency. For instance, the latest version of the dependency started to use ESM but your project is not yet in ESM. Annoyingly, such a package will be always printed out by the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm outdated")," command and updated, when running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm update --latest"),". However, you may list packages that you don't want to upgrade in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreDependencies")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "updateConfig": {\n      "ignoreDependencies": ["load-json-file"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Patterns are also supported, so you may ignore any packages from a scope: ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/*"),"."),(0,i.kt)("h2",{id:"pnpmauditconfig"},"pnpm.auditConfig"),(0,i.kt)("h3",{id:"pnpmauditconfigignorecves"},"pnpm.auditConfig.ignoreCves"),(0,i.kt)("p",null,"A list of CVE IDs that will be ignored by the ",(0,i.kt)("a",{parentName:"p",href:"/es/cli/audit"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm audit"))," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "auditConfig": {\n      "ignoreCves": [\n        "CVE-2022-36313"\n      ]\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"pnpmrequiredscripts"},"pnpm.requiredScripts"),(0,i.kt)("p",null,"Scripts listed in this array will be required in each project of the workspace. Otherwise, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r run <script name>")," will fail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "pnpm": {\n    "requiredScripts": ["build"]\n  }\n}\n')),(0,i.kt)("h2",{id:"resolutions"},"resolutions"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"#pnpmoverrides"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm.overrides")),". We read it for easier migration from Yarn."))}k.isMDXComponent=!0}}]);