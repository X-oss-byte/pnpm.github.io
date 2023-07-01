"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3645],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,v=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=n(1966),i=n(9836),a=(n(9496),n(9613)),o=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,d={unversionedId:"cli/audit",id:"version-7.x/cli/audit",title:"pnpm audit",description:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u65e2\u77e5\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u554f\u984c\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/ja/7.x/cli/audit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-7.x/docs",previous:{title:"pnpm dedupe",permalink:"/ja/7.x/cli/dedupe"},next:{title:"pnpm list",permalink:"/ja/7.x/cli/list"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:s},m="wrapper";function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u65e2\u77e5\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u554f\u984c\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u554f\u984c\u304c\u898b\u3064\u304b\u3063\u305f\u5834\u5408\u306f\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm update")," \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u5358\u7d14\u306a\u66f4\u65b0\u3067\u3059\u3079\u3066\u306e\u554f\u984c\u304c\u4fee\u6b63\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001 ",(0,a.kt)("a",{parentName:"p",href:"/ja/7.x/package_json#pnpmoverrides"},"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9")," \u3092\u4f7f\u7528\u3057\u3066\u3001\u8106\u5f31\u6027\u306e\u306a\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5f37\u5236\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," \u306b\u8106\u5f31\u6027\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u4f7f\u7528\u3057\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0")," \u3092\u5f37\u5236\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u307e\u305f\u306f\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5f71\u97ff\u304c\u306a\u3044\u8106\u5f31\u6027\u3092\u8a31\u5bb9\u3057\u305f\u3044\u5834\u5408\u306f\u3001 ",(0,a.kt)("a",{parentName:"p",href:"/ja/7.x/package_json#pnpmauditconfigignorecves"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm.auditConfig.ignoreCves"))," \u306e\u8a2d\u5b9a\u3092\u4f7f\u3046\u3068\u3088\u3044\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,a.kt)("strong",{parentName:"li"},"low"),", ",(0,a.kt)("strong",{parentName:"li"},"moderate"),", ",(0,a.kt)("strong",{parentName:"li"},"high"),", ",(0,a.kt)("strong",{parentName:"li"},"critical")),(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,a.kt)("strong",{parentName:"li"},"low"))),(0,a.kt)("p",null,"\u76e3\u67fb\u30ec\u30d9\u30eb\u304c ",(0,a.kt)("inlineCode",{parentName:"p"},"<severity>")," \u4ee5\u4e0a\u306e\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u306e\u307f\u8868\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--fix"},"--fix"),(0,a.kt)("p",null,"\u8106\u5f31\u3067\u306a\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u3092\u5f37\u5236\u3059\u308b\u305f\u3081\u306b\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u30d5\u30a1\u30a4\u30eb\u306b\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306b\u95a2\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u30fb\u8ffd\u8a18\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"JSON\u5f62\u5f0f\u3067\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"devDependencies \u306e\u307f\u3092\u76e3\u67fb\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u306e dependencies \u306e\u307f\u3092\u76e3\u67fb\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u306e\u76e3\u67fb\u3092\u3057\u307e\u305b\u3093\u3002"),(0,a.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,a.kt)("p",null,"\u30ec\u30b8\u30b9\u30c8\u30ea\u304c200\u4ee5\u5916\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3067\u5fdc\u7b54\u3059\u308b\u5834\u5408\u3067\u3042\u3063\u3066\u3082\u3001\u30d7\u30ed\u30bb\u30b9\u30920\u3067\u7d42\u4e86\u3057\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u5b9f\u969b\u306b\u898b\u3064\u304b\u3063\u305f\u8106\u5f31\u6027\u3092\u6b63\u5e38\u306b\u8fd4\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u5931\u6557\u3057\u307e\u3059\u3002"))}v.isMDXComponent=!0}}]);