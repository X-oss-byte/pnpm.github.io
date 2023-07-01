"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9234],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),d=c,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[m]="string"==typeof e?e:c,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(1966),c=r(9836),i=(r(9496),r(9613)),o=["components"],a={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"version-7.x/cli/patch-commit",title:"pnpm patch-commit <path>",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v7.4.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/ru/7.x/cli/patch-commit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"version-7.x/docs",previous:{title:"pnpm patch <pkg>",permalink:"/ru/7.x/cli/patch"},next:{title:"pnpm dedupe",permalink:"/ru/7.x/cli/dedupe"}},u={},m=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"---patches-dir &lt;dir&gt;",id:"---patches-dir-dir",level:3}],s={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,c.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v7.4.0"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0430\u0442\u0447 \u0438\u0437 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 (\u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 \u0432 Yarn)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")),(0,i.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,i.kt)("h3",{id:"---patches-dir-dir"},"---patches-dir ","<","dir>"),(0,i.kt)("p",null,"Added in: v7.30.0"),(0,i.kt)("p",null,"The generated patch file will be saved to this directory. By default, patches are saved to the ",(0,i.kt)("inlineCode",{parentName:"p"},"patches")," directory in the root of the project."))}f.isMDXComponent=!0}}]);