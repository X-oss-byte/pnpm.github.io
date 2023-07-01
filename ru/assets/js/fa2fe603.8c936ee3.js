"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2971],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(1966),o=t(9836),p=(t(9496),t(9613)),i=["components"],a={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"cli/prune",title:"pnpm prune",description:"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/ru/next/cli/prune",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"docs",previous:{title:"pnpm rebuild",permalink:"/ru/next/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/ru/next/cli/fetch"}},u={},d=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],s={toc:d},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b."),(0,p.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,p.kt)("h3",{id:"--prod"},"--prod"),(0,p.kt)("p",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 prune \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e. \u0427\u0442\u043e\u0431\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e production-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e, \u043f\u0430\u043f\u043a\u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u044b, \u0430 \u0437\u0430\u0442\u0435\u043c \u0437\u0430\u043d\u043e\u0432\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),".")))}f.isMDXComponent=!0}}]);