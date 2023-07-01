"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8268],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||s[f]||p;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(1966),o=r(9836),p=(r(9496),r(9613)),i=["components"],a={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"version-7.x/cli/import",title:"pnpm import",description:"pnpm import\u306fpnpm\u4ee5\u5916\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306elockfile\u304b\u3089pnpm-lock.yaml\u3092\u751f\u6210\u3057\u307e\u3059\u3002 \u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\uff1a",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/ja/7.x/cli/import",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"import",title:"pnpm import"},sidebar:"version-7.x/docs",previous:{title:"pnpm unlink",permalink:"/ja/7.x/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/ja/7.x/cli/rebuild"}},m={},u=[],s={toc:u},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,p.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm import"),"\u306fpnpm\u4ee5\u5916\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306elockfile\u304b\u3089",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"\u3092\u751f\u6210\u3057\u307e\u3059\u3002 \u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"yarn.lock"))),(0,p.kt)("p",null,"\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u4e8b\u524d\u306b ",(0,p.kt)("a",{parentName:"p",href:"/ja/7.x/pnpm-workspace_yaml"},"workspace.yaml")," \u30d5\u30a1\u30a4\u30eb\u3067\u5ba3\u8a00\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);