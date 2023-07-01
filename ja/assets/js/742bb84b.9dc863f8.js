"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4879],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,v=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>v,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var r=n(1966),i=n(9836),l=(n(9496),n(9613)),a=["components"],p={id:"pack",title:"pnpm pack"},o=void 0,c={unversionedId:"cli/pack",id:"version-8.x/cli/pack",title:"pnpm pack",description:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306etarball\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-8.x/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/ja/cli/pack",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"8.x",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"version-8.x/docs",previous:{title:"pnpm publish",permalink:"/ja/cli/publish"},next:{title:"pnpm -r, --recursive",permalink:"/ja/cli/recursive"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",level:3},{value:"--pack-gzip-level &lt;level&gt;",id:"--pack-gzip-level-level",level:3},{value:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",level:2}],d={toc:s},m="wrapper";function v(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306etarball\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack"),"\u304ctarball\u3092\u4fdd\u5b58\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u521d\u671f\u5024\u306f\u73fe\u5728\u306e\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u3059\u3002"),(0,l.kt)("h3",{id:"--pack-gzip-level-level"},"--pack-gzip-level ","<","level",">"),(0,l.kt)("p",null,"Added in: v8.3.0"),(0,l.kt)("p",null,"Specifying custom compression level."),(0,l.kt)("h2",{id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8"},"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prepack")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prepare")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"postpack"))))}v.isMDXComponent=!0}}]);