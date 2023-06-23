"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3209],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?l.createElement(f,o(o({ref:t},s),{},{components:n})):l.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var l=n(2962),r=n(2742),a=(n(9496),n(9613)),o=["components"],i={id:"config",title:"pnpm config"},c=void 0,p={unversionedId:"cli/config",id:"version-8.x/cli/config",title:"pnpm config",description:"Alias: i",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-8.x/cli/config.md",sourceDirName:"cli",slug:"/cli/config",permalink:"/es/cli/config",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"8.x",frontMatter:{id:"config",title:"pnpm config"},sidebar:"version-8.x/docs",previous:{title:"pnpm doctor",permalink:"/es/cli/doctor"},next:{title:"package.json",permalink:"/es/package_json"}},s={},u=[{value:"Commands",id:"commands",level:2},{value:"set &lt;clave&gt; &lt;valor&gt;",id:"set-clave-valor",level:3},{value:"get &lt;clave&gt;",id:"get-clave",level:3},{value:"delete &lt;clave&gt;",id:"delete-clave",level:3},{value:"list",id:"list",level:3},{value:"Opciones",id:"opciones",level:2},{value:"--global, -g",id:"--global--g",level:3},{value:"--location",id:"--location",level:3},{value:"--json",id:"--json",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"i")),(0,a.kt)("p",null,"Gestiona los archivos de configuraci\xf3n."),(0,a.kt)("p",null,"Los archivos de configuraci\xf3n est\xe1n en formato ",(0,a.kt)("inlineCode",{parentName:"p"},"INI"),"."),(0,a.kt)("p",null,"El archivo de configuraci\xf3n local se encuentra en la ra\xedz del proyecto y se llama ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,a.kt)("p",null,"El archivo de configuraci\xf3n global se encuentra en una de las siguientes ubicaciones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si se establece la variable de entorno ",(0,a.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME"),", entonces ",(0,a.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME/pnpm/rc")),(0,a.kt)("li",{parentName:"ul"},"En Windows: ",(0,a.kt)("strong",{parentName:"li"},"~/AppData/Local/pnpm/config/rc")),(0,a.kt)("li",{parentName:"ul"},"En macOS: ",(0,a.kt)("strong",{parentName:"li"},"~/Library/Preferences/pnpm/rc")),(0,a.kt)("li",{parentName:"ul"},"En Linux: ",(0,a.kt)("strong",{parentName:"li"},"~/.config/pnpm/rc"))),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"set-clave-valor"},"set ","<","clave> ","<","valor>"),(0,a.kt)("p",null,"Establece la clave de configuraci\xf3n en el valor proporcionado."),(0,a.kt)("h3",{id:"get-clave"},"get ","<","clave>"),(0,a.kt)("p",null,"Imprime el valor de configuraci\xf3n de la clave proporcionada."),(0,a.kt)("h3",{id:"delete-clave"},"delete ","<","clave>"),(0,a.kt)("p",null,"Elimina la clave de configuraci\xf3n del archivo de configuraci\xf3n."),(0,a.kt)("h3",{id:"list"},"list"),(0,a.kt)("p",null,"Muestra todos los ajustes de configuraci\xf3n."),(0,a.kt)("h2",{id:"opciones"},"Opciones"),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"Set the configuration in the global config file."),(0,a.kt)("h3",{id:"--location"},"--location"),(0,a.kt)("p",null,"When set to ",(0,a.kt)("inlineCode",{parentName:"p"},"project"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc")," file at the nearest ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," will be used."),(0,a.kt)("p",null,"When set to ",(0,a.kt)("inlineCode",{parentName:"p"},"global"),", the performance is the same as setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"--global")," option."),(0,a.kt)("h2",{id:"--json"},"--json"),(0,a.kt)("p",null,"Show all the config settings in JSON format."))}m.isMDXComponent=!0}}]);