"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8702],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=t(1966),a=t(9836),o=(t(9496),t(9613)),i=["components"],p={id:"errors",title:"Error Codes"},l=void 0,s={unversionedId:"errors",id:"version-8.x/errors",title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-8.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/es/errors",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"8.x",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"version-8.x/docs",previous:{title:"Trabajando con Git",permalink:"/es/git"},next:{title:"Logotipos",permalink:"/es/logos"}},c={},d=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2},{value:"ERR_PNPM_TARBALL_INTEGRITY",id:"err_pnpm_tarball_integrity",level:2}],u={toc:d},m="wrapper";function h(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"Un directorio de m\xf3dulos est\xe1 presente y est\xe1 vinculado a un directorio de almacenamiento diferente."),(0,o.kt)("p",null,"Si cambi\xf3 el directorio de la tienda intencionalmente, ejecute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," y pnpm reinstalar\xe1 las dependencias usando el nuevo almacenamiento."),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"Un proyecto tiene una dependencia de espacio de trabajo que no existe en el espacio de trabajo."),(0,o.kt)("p",null,"Por ejemplo, el paquete ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," tiene ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," en las ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencias"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"Sin embargo, solo hay ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," en el espacio de trabajo, por lo que ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," fallar\xe1."),(0,o.kt)("p",null,"Para corregir este error, todas las dependencias que usan el ",(0,o.kt)("a",{parentName:"p",href:"/es/workspaces#workspace-protocol-workspace"},"protocolo de espacio de trabajo")," deben actualizarse para usar versiones de paquetes que est\xe1n presentes en el espacio de trabajo. Esto puede hacerse manualmente o usando el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail if the project has unresolved peer dependencies or the peer dependencies are not matching the wanted ranges. To fix this, install the missing peer dependencies."),(0,o.kt)("p",null,"You may also selectively ignore these errors using the ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," and ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,o.kt)("p",null,"This error happens when installation cannot be performed without changes to the lockfile. This might happen in a CI environment if someone has changed a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file in the repository without running ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," afterwards. Or someone forgot to commit the changes to the lockfile."),(0,o.kt)("p",null,"To fix this error, just run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes to the lockfile."),(0,o.kt)("h2",{id:"err_pnpm_tarball_integrity"},"ERR","_","PNPM","_","TARBALL","_","INTEGRITY"),(0,o.kt)("p",null,"This error indicates that the downloaded package's tarball did not match the expected integrity checksum."),(0,o.kt)("p",null,"If you use the npm registry (",(0,o.kt)("inlineCode",{parentName:"p"},"registry.npmjs.org"),"), then this probably means that the integrity in your lockfile is incorrect. This might happen if a lockfile had badly resolved merge conflicts."),(0,o.kt)("p",null,"If you use a registry that allows to override existing versions of a package, then it might mean that in your local metadata cache you have the integrity checksum of an older version of the package. In this case, you should run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune"),". This command will remove your local metadata cache. Then you can retry the command that failed."),(0,o.kt)("p",null,"But also be careful and verify that the package is downloaded from the right URL. The URL should be printed in the error message."))}h.isMDXComponent=!0}}]);