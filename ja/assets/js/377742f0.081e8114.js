"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2772],{9613:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,c=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return n?l.createElement(c,i(i({ref:t},k),{},{components:n})):l.createElement(c,i({ref:t},k))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var l=n(1966),a=n(9836),r=(n(9496),n(9613)),i=["components"],p={id:"install",title:"pnpm install"},o=void 0,s={unversionedId:"cli/install",id:"version-7.x/cli/install",title:"pnpm install",description:"\u30a8\u30a4\u30ea\u30a2\u30b9: i",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/ja/7.x/cli/install",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-7.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/ja/7.x/cli/add"},next:{title:"pnpm update",permalink:"/ja/7.x/cli/update"}},k={},m=[{value:"TL;DR",id:"tldr",level:2},{value:"Options",id:"options",level:2},{value:"--force",id:"--force",level:3},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:m},d="wrapper";function c(e){var t=e.components,p=(0,a.Z)(e,i);return(0,r.kt)(d,(0,l.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30a8\u30a4\u30ea\u30a2\u30b9: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5168\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"CI \u74b0\u5883\u3067\u306f\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u3066\u3082\u66f4\u65b0\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u5931\u6557\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/7.x/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9")," \u5185\u3067\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002 \u3053\u306e\u52d5\u4f5c\u3092\u7121\u52b9\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," \u3092  ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7461).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30b3\u30de\u30f3\u30c9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u610f\u5473"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c8\u30a2\u304b\u3089\u306e\u307f\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \u3092\u66f4\u65b0\u3057\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \u306e\u307f\u66f4\u65b0\u3059\u308b")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--force"},"--force"),(0,r.kt)("p",null,"\u4f9d\u5b58\u95a2\u4fc2\u306e\u5f37\u5236\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb: \u30b9\u30c8\u30a2\u3067\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u518d\u53d6\u5f97\u3057\u3001\u4e92\u63db\u6027\u306e\u306a\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e pnpm \u3067\u4f5c\u6210\u3055\u308c\u305f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3084\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u518d\u4f5c\u6210\u3057\u307e\u3059\u3002 Install all optionalDependencies even they don't satisfy the current environment(cpu, os, arch)."),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001pnpm \u306f\u30b9\u30c8\u30a2\u3067\u3059\u3067\u306b\u5229\u7528\u53ef\u80fd\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30ed\u30fc\u30ab\u30eb\u3067\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u5931\u6557\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u5931\u52b9\u30c1\u30a7\u30c3\u30af\u306f\u7701\u7565\u3055\u308c\u307e\u3059\u304c\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u306f\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u8981\u6c42\u3055\u308c\u307e\u3059\u3002 \u3059\u3079\u3066\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u3084\u308b\u3088\u3046\u306b\u5f37\u5236\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"pnpm\u306f\u3001\u74b0\u5883\u5909\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\u304cproduction\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306b\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u305a\u3001\u65e2\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u9650\u308a\u524a\u9664\u3057\u307e\u3059\u3002 \u3053\u306e\u30d5\u30e9\u30b0\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001pnpm \u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a\u3092\u7121\u8996\u3057\u3066 production \u74b0\u5883\u3068\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\u306b\u95a2\u4fc2\u306a\u304f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306e\u307f\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u306f\u65e2\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u9650\u308a\u524a\u9664\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u3053\u308c\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u306e\u307f\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u306f\u66f8\u304d\u8fbc\u307e\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"\u7834\u640d\u3057\u305f lockfile \u306e\u9805\u76ee\u3092\u81ea\u52d5\u7684\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CI \u74b0\u5883\u4ee5\u5916: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"CI \u74b0\u5883: \u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306f ",(0,r.kt)("strong",{parentName:"li"},"true")))),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001 pnpm \u306f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u307e\u305b\u3093\u3002 lockfile \u304c\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3068\u540c\u671f\u3057\u3066\u304a\u3089\u305a\u3001\u66f4\u65b0\u304c\u5fc5\u8981\u306a\u5834\u5408\u3001\u307e\u305f\u306f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5931\u6557\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/watson/ci-info#supported-ci-tools"},"CI \u74b0\u5883"),"\u3067\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u3067\u3059\u3002 \u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u304c CI \u74b0\u5883\u306e\u691c\u51fa\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"',title:'"https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"'},"exports.isCI = !!(\n  env.CI || // Travis CI, CircleCI, Cirrus CI, GitLab CI, Appveyor, CodeShip, dsari\n  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI\n  env.BUILD_NUMBER || // Jenkins, TeamCity\n  env.RUN_ID || // TaskCluster, dsari\n  exports.name ||\n  false\n)\n")),(0,r.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TTY \u6a19\u6e96\u51fa\u529b: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"TTY \u6a19\u6e96\u51fa\u529b\u4ee5\u5916: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9032\u884c\u72b6\u6cc1\u306e\u30c7\u30d0\u30c3\u30b0\u60c5\u5831\u3092\u30bf\u30fc\u30df\u30ca\u30eb\u306b\u30ed\u30b0\u51fa\u529b\u3059\u308b\u30ec\u30dd\u30fc\u30bf\u30fc\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - \u81f4\u547d\u7684\u306a\u30a8\u30e9\u30fc\u3082\u542b\u3081\u3001\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u4f55\u3082\u51fa\u529b\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - \u6a19\u6e96\u51fa\u529b\u304c TTY \u3067\u3042\u308b\u3068\u304d\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ec\u30dd\u30fc\u30bf\u30fc\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," - \u51fa\u529b\u3092\u5e38\u306b\u6700\u5f8c\u306b\u52a0\u3048\u3066\u3044\u304f\u3002 \u30ab\u30fc\u30bd\u30eb\u64cd\u4f5c\u3092\u884c\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - \u6700\u3082\u8a73\u7d30\u306a\u30ec\u30dd\u30fc\u30bf\u30fc\u3002 ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059\u3079\u3066\u306e\u30ed\u30b0\u3092\u51fa\u529b\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u51fa\u529b\u3055\u308c\u308b\u60c5\u5831\u306e\u7a2e\u985e\u3092\u5909\u66f4\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/7.x/npmrc#loglevel"},"loglevel"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u30b9\u30c8\u30a2\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u3082\u3001\u30b9\u30c8\u30a2\u30b5\u30fc\u30d0\u30fc\u306f\u5b9f\u884c\u3057\u7d9a\u3051\u307e\u3059\u3002 \u30b9\u30c8\u30a2\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," \u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u3084 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," \u3067\u4f7f\u7528\u3055\u308c\u308b\u30d5\u30e9\u30c3\u30c8\u306a",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u69cb\u9020\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u8b66\u544a"),": \u3053\u308c\u306f\u975e\u5e38\u306b\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3001\u304a\u3088\u3073\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/7.x/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}c.isMDXComponent=!0},7461:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);