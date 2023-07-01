"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4548],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(1966),o=n(9836),a=(n(9496),n(9613)),i=["components"],l={id:"config",title:"pnpm config"},c=void 0,p={unversionedId:"cli/config",id:"version-7.x/cli/config",title:"pnpm config",description:"Aliases: c",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/config.md",sourceDirName:"cli",slug:"/cli/config",permalink:"/pt/7.x/cli/config",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"config",title:"pnpm config"},sidebar:"version-7.x/docs",previous:{title:"pnpm doctor",permalink:"/pt/7.x/cli/doctor"},next:{title:"package.json",permalink:"/pt/7.x/package_json"}},u={},s=[{value:"Comandos",id:"comandos",level:2},{value:"set &lt;key&gt; &lt;value&gt;",id:"set-key-value",level:3},{value:"get &lt;key&gt;",id:"get-key",level:3},{value:"delete &lt;key&gt;",id:"delete-key",level:3},{value:"list",id:"list",level:3},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:s},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"c")),(0,a.kt)("p",null,"Gerencia os arquivos de configura\xe7\xf5es."),(0,a.kt)("p",null,"Os arquivos de configura\xe7\xe3o est\xe3o no formato ",(0,a.kt)("inlineCode",{parentName:"p"},"INI"),"."),(0,a.kt)("p",null,"O arquivo de configura\xe7\xe3o local est\xe1 localizado na raiz do projeto e \xe9 denominado ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,a.kt)("p",null,"O arquivo de configura\xe7\xe3o global est\xe1 localizado em um dos seguintes locais:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Se a vari\xe1vel de ambiente ",(0,a.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME")," estiver configurada, ent\xe3o ",(0,a.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME/pnpm/rc")),(0,a.kt)("li",{parentName:"ul"},"No Windows: ",(0,a.kt)("strong",{parentName:"li"},"~/AppData/Local/pnpm/config/rc")),(0,a.kt)("li",{parentName:"ul"},"No macOS: ",(0,a.kt)("strong",{parentName:"li"},"~/Library/Preferences/pnpm/rc")),(0,a.kt)("li",{parentName:"ul"},"No Linux: ",(0,a.kt)("strong",{parentName:"li"},"~/.config/pnpm/rc"))),(0,a.kt)("h2",{id:"comandos"},"Comandos"),(0,a.kt)("h3",{id:"set-key-value"},"set ","<","key> ","<","value>"),(0,a.kt)("p",null,"Define a chave de configura\xe7\xe3o para o valor fornecido."),(0,a.kt)("h3",{id:"get-key"},"get ","<","key>"),(0,a.kt)("p",null,"Imprime o valor de configura\xe7\xe3o para a chave fornecida."),(0,a.kt)("h3",{id:"delete-key"},"delete ","<","key>"),(0,a.kt)("p",null,"Remove a chave de configura\xe7\xe3o do arquivo de configura\xe7\xe3o."),(0,a.kt)("h3",{id:"list"},"list"),(0,a.kt)("p",null,"Exibe todas as defini\xe7\xf5es de configura\xe7\xe3o."),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"Exibe a configura\xe7\xe3o no arquivo de configura\xe7\xe3o global."))}m.isMDXComponent=!0}}]);