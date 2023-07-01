"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7212],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),f=l,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:l,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(1966),l=n(9836),o=(n(9496),n(9613)),r=["components"],a={id:"config",title:"pnpm config"},p=void 0,c={unversionedId:"cli/config",id:"version-8.x/cli/config",title:"pnpm config",description:"Alias: c",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-8.x/cli/config.md",sourceDirName:"cli",slug:"/cli/config",permalink:"/it/cli/config",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"8.x",frontMatter:{id:"config",title:"pnpm config"},sidebar:"version-8.x/docs",previous:{title:"pnpm doctor",permalink:"/it/cli/doctor"},next:{title:"package.json",permalink:"/it/package_json"}},u={},s=[{value:"Comandi",id:"comandi",level:2},{value:"set &lt;key&gt; &lt;value&gt;",id:"set-key-value",level:3},{value:"get &lt;key&gt;",id:"get-key",level:3},{value:"delete &lt;key&gt;",id:"delete-key",level:3},{value:"list",id:"list",level:3},{value:"Opzioni",id:"opzioni",level:2},{value:"--global, -g",id:"--global--g",level:3},{value:"--location",id:"--location",level:3},{value:"--json",id:"--json",level:2}],d={toc:s},f="wrapper";function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)(f,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Alias: ",(0,o.kt)("inlineCode",{parentName:"p"},"c")),(0,o.kt)("p",null,"Gestisci i file di configurazione."),(0,o.kt)("p",null,"I file di configurazione sono in formato ",(0,o.kt)("inlineCode",{parentName:"p"},"INI"),"."),(0,o.kt)("p",null,"Il file di configurazione locale si trova nella radice del progetto ed \xe8 denominato ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,o.kt)("p",null,"Il file di configurazione globale si trova in una delle seguenti posizioni:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se la variabile env ",(0,o.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME")," \xe8 impostata, allora ",(0,o.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME/pnpm/rc")),(0,o.kt)("li",{parentName:"ul"},"Su Windows: ",(0,o.kt)("strong",{parentName:"li"},"~/AppData/Local/pnpm/config/rc")),(0,o.kt)("li",{parentName:"ul"},"Su macOS: ",(0,o.kt)("strong",{parentName:"li"},"~/Library/Preferences/pnpm/rc")),(0,o.kt)("li",{parentName:"ul"},"Su Linux: ",(0,o.kt)("strong",{parentName:"li"},"~/.config/pnpm/rc"))),(0,o.kt)("h2",{id:"comandi"},"Comandi"),(0,o.kt)("h3",{id:"set-key-value"},"set ","<","key> ","<","value>"),(0,o.kt)("p",null,"Imposta la chiave di configurazione sul valore fornito."),(0,o.kt)("h3",{id:"get-key"},"get ","<","key>"),(0,o.kt)("p",null,"Stampa il valore di configurazione per la chiave fornita."),(0,o.kt)("h3",{id:"delete-key"},"delete ","<","key>"),(0,o.kt)("p",null,"Rimuove la chiave di configurazione dal file di configurazione."),(0,o.kt)("h3",{id:"list"},"list"),(0,o.kt)("p",null,"Mostra tutte le impostazioni di configurazione."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Set the configuration in the global config file."),(0,o.kt)("h3",{id:"--location"},"--location"),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"project"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc")," file at the nearest ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," will be used."),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"global"),", the performance is the same as setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"--global")," option."),(0,o.kt)("h2",{id:"--json"},"--json"),(0,o.kt)("p",null,"Show all the config settings in JSON format."))}m.isMDXComponent=!0}}]);