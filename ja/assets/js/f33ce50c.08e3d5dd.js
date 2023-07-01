"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6298],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=o(n),m=l,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=n(1966),l=n(9836),a=(n(9496),n(9613)),i=["components"],p={id:"pack",title:"pnpm pack"},c=void 0,o={unversionedId:"cli/pack",id:"cli/pack",title:"pnpm pack",description:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306etarball\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/ja/next/cli/pack",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"docs",previous:{title:"pnpm publish",permalink:"/ja/next/cli/publish"},next:{title:"pnpm -r, --recursive",permalink:"/ja/next/cli/recursive"}},u={},s=[{value:"\u5f15\u6570",id:"\u5f15\u6570",level:2},{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",level:3},{value:"--pack-gzip-level &lt;level&gt;",id:"--pack-gzip-level-level",level:3},{value:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",level:2}],d={toc:s},m="wrapper";function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306etarball\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,a.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm pack"),"\u304ctarball\u3092\u4fdd\u5b58\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u521d\u671f\u5024\u306f\u73fe\u5728\u306e\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"--pack-gzip-level-level"},"--pack-gzip-level ","<","level",">"),(0,a.kt)("p",null,"Added in: v8.3.0"),(0,a.kt)("p",null,"Specifying custom compression level."),(0,a.kt)("h2",{id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8"},"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prepack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prepare")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"postpack"))))}f.isMDXComponent=!0}}]);