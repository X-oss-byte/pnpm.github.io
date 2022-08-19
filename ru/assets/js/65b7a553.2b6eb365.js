"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9474],{9613:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=s(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},o),{},{components:a})):n.createElement(c,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2110:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var n=a(2081),r=a(4604),l=(a(9496),a(9613)),i=["components"],p={id:"workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u044b"},d=void 0,s={unversionedId:"workspaces",id:"workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u044b",description:"pnpm \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 (multi-package \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432, multi-project \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 \u0438\u043b\u0438 \u043c\u043e\u043d\u043e\u043b\u0438\u0442\u043d\u044b\u0445 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432). \u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/ru/next/workspaces",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u044b"},sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/ru/next/pnpmfile"},next:{title:"\u0410\u043b\u0438\u0430\u0441\u044b",permalink:"/ru/next/aliases"}},o={},m=[{value:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (workspace:)",id:"\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-workspace",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b",id:"\u0441\u0441\u044b\u043b\u043a\u0438-\u043d\u0430-\u043f\u0430\u043a\u0435\u0442\u044b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-\u0447\u0435\u0440\u0435\u0437-\u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b",level:3},{value:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0438\u0445 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u0442\u044c",id:"\u0441\u0441\u044b\u043b\u043a\u0430-\u043d\u0430-\u043f\u0430\u043a\u0435\u0442\u044b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-\u0447\u0435\u0440\u0435\u0437-\u0438\u0445-\u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u0442\u044c",level:3},{value:"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438",id:"\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f-\u043f\u0430\u043a\u0435\u0442\u043e\u0432-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438",level:3},{value:"Release workflow",id:"release-workflow",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:2}],u={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 (multi-package \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432, multi-project \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 \u0438\u043b\u0438 \u043c\u043e\u043d\u043e\u043b\u0438\u0442\u043d\u044b\u0445 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432). \u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438."),(0,l.kt)("p",null,"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0444\u0430\u0439\u043b ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435. \u0420\u0430\u0431\u043e\u0447\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc"))," \u0432 \u043a\u043e\u0440\u043d\u0435."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0437\u0443\u0447\u0430\u0435\u0442\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u043c, \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u043b\u044f\u043d\u0443\u0442\u044c \u0432 ",(0,l.kt)("a",{parentName:"p",href:"https://bit.dev/?utm_source=pnpm&utm_medium=workspace_page"},"Bit"),". Bit \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 pnpm \u043f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c, \u043d\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043c\u043d\u043e\u0433\u0438\u0435 \u0432\u0435\u0449\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0432 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0439 pnpm/npm/Yarn. \u0415\u0441\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044f \u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"bit \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u043e\u0431 \u044d\u0442\u043e\u043c: ",(0,l.kt)("a",{parentName:"p",href:"https://bit.cloud/blog/painless-monorepo-dependency-management-with-bit-l4f9fzyw?utm_source=pnpm&utm_medium=workspace_page"},"\u0411\u0435\u0437\u0431\u043e\u043b\u0435\u0437\u043d\u0435\u043d\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u043c\u0438 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u0441 Bit"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-workspace"},"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (workspace:)"),(0,l.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e pnpm \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u0435\u0441\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430\u043c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u0441\u0432\u044f\u0437\u0430\u043d \u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),", \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u0438\u043c\u0435\u0435\u0442 \u0432 \u0441\u0432\u043e\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"'),". \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u0438\u043c\u0435\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u0445 \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u0431\u0443\u0434\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430. \u0422\u0430\u043a\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432\u043d\u043e\u0441\u0438\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c."),(0,l.kt)("p",null,"\u041a \u0441\u0447\u0430\u0441\u0442\u044c\u044e, pnpm \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:"),". \u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b, pnpm \u043e\u0442\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0442\u044c \u0447\u0442\u043e-\u043b\u0438\u0431\u043e, \u043a\u0440\u043e\u043c\u0435 \u043f\u0430\u043a\u0435\u0442\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438. \u0418\u0442\u0430\u043a, \u0435\u0441\u043b\u0438 \u0432\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", \u043d\u0430 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u043e\u0448\u0438\u0431\u043a\u043e\u0439, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438."),(0,l.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u043e\u043b\u0435\u0437\u0435\u043d, \u043a\u043e\u0433\u0434\u0430 \u0434\u043b\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/npmrc#link-workspace-packages"},"link-workspace-packages")," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 pnpm \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0442\u043e\u043b\u044c\u043a\u043e, \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:"),"."),(0,l.kt)("h3",{id:"\u0441\u0441\u044b\u043b\u043a\u0438-\u043d\u0430-\u043f\u0430\u043a\u0435\u0442\u044b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-\u0447\u0435\u0440\u0435\u0437-\u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b"},"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b"),(0,l.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),". \u041e\u0431\u044b\u0447\u043d\u043e \u0432\u044b \u0431\u044b \u0441\u043e\u0441\u043b\u0430\u043b\u0438\u0441\u044c \u043d\u0430 \u043d\u0435\u0433\u043e \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0442\u0430\u043a\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0435\u0439 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u0430\u043b\u0438\u0430\u0441\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0448\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u0442\u0430\u043d\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,l.kt)("h3",{id:"\u0441\u0441\u044b\u043b\u043a\u0430-\u043d\u0430-\u043f\u0430\u043a\u0435\u0442\u044b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-\u0447\u0435\u0440\u0435\u0437-\u0438\u0445-\u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u0442\u044c"},"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0438\u0445 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u0442\u044c"),(0,l.kt)("p",null,"\u0412 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0441 2 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u0432 \u0441\u0432\u043e\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u0445, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". \u041f\u0435\u0440\u0435\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0435\u0439 \u044d\u0442\u0438 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044b\u0447\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0438, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u0441\u0435\u043c\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432."),(0,l.kt)("h3",{id:"\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f-\u043f\u0430\u043a\u0435\u0442\u043e\u0432-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438"},"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"),(0,l.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u043f\u0430\u043a\u0435\u0442 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0443\u043f\u0430\u043a\u043e\u0432\u0430\u043d \u0432 \u0430\u0440\u0445\u0438\u0432 (\u0431\u0443\u0434\u044c \u0442\u043e \u0447\u0435\u0440\u0435\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," \u0438\u043b\u0438 \u043e\u0434\u043d\u0443 \u0438\u0437 \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), \u043c\u044b \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c \u043b\u044e\u0431\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u043d\u0430:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432 \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (\u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:~")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace: ^"),")"),(0,l.kt)("li",{parentName:"ul"},"\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d semver (\u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430)")),(0,l.kt)("p",null,"\u0422\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"zoo")," \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u0438 \u0432\u0441\u0435 \u043e\u043d\u0438 \u0438\u043c\u0435\u044e\u0442 \u0432\u0435\u0440\u0441\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),", \u0442\u043e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"\u0411\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d \u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,l.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,l.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"For how to set up a repository using Rush, read ",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,l.kt)("p",null,"For using Changesets with pnpm, read ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/using-changesets"},"this guide"),"."),(0,l.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"),(0,l.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,l.kt)("p",null,"If you see the message ",(0,l.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("p",null,"\u0412\u043e\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 pnpm:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u0440\u043e\u0435\u043a\u0442"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0417\u0432\u0435\u0437\u0434\u044b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0414\u0430\u0442\u0430 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u043c\u0438\u0442 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/next.js"},"Next.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/next.js",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f7b81316aea4fc9962e5e54981a6d559004231aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitejs/vite"},"Vite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitejs/vite",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuejs/vue-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-10-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/prisma/prisma"},"Prisma")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/prisma/prisma",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/slidevjs/slidev"},"Slidev")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/slidevjs/slidev",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/element-plus/element-plus"},"Element Plus")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/element-plus/element-plus",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f9e192535ff74d1443f1d9e0c5394fad10428629"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/verdaccio/verdaccio",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/withastro/astro"},"Astro")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/withastro/astro",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cyclejs/cyclejs",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f2187ab6688368edb904b649bd371a658f6a8637"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vueuse/vueuse"},"VueUse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vueuse/vueuse",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nextauthjs/next-auth",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4f29d39521451e859dbdb83179756b372e3dd7aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sveltejs/kit"},"SvelteKit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/sveltejs/kit",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/Saul-Mirone/milkdown",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitest-dev/vitest"},"Vitest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitest-dev/vitest",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/logto-io/logto"},"Logto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/logto-io/logto",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0b002e07850c8e6d09b35d22fab56d3e99d77043"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nhost/nhost"},"Nhost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nhost/nhost",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-07"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10a1799a1fef2f558f737de3bb6cadda2b50e58f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rollup/plugins"},"Rollup plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/rollup/plugins",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"53fb18c0c2852598200c547a0b1d745d15b5b487"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bytedance/bytemd"},"ByteMD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/bytedance/bytemd",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ice-lab/icestark"},"icestark")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ice-lab/icestark",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4862326a8de53d02f617e7b1986774fd7540fccd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuepress/vuepress-next"},"VuePress 2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuepress/vuepress-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-04-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b85b1c3b39e80a8de92a7469381061f75ef33623"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/turborepo"},"Turborepo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/turborepo",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-02"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fd171519ec02a69c9afafc1bc5d9d1b481fba721"))))))}k.isMDXComponent=!0}}]);