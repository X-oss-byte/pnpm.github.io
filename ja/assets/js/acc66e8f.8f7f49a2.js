"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[557],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=i(t),f=p,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||l;return t?r.createElement(u,a(a({ref:n},s),{},{components:t})):r.createElement(u,a({ref:n},s))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var i=2;i<l;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=t(2962),p=t(2742),l=(t(9496),t(9613)),a=["components"],o={id:"fetch",title:"pnpm fetch"},c=void 0,i={unversionedId:"cli/fetch",id:"cli/fetch",title:"pnpm fetch",description:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u7121\u8996\u3057\u3066\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u53d6\u5f97\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4eee\u60f3\u30b9\u30c8\u30a2\u306b\u8a18\u9332\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/ja/next/cli/fetch",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"docs",previous:{title:"pnpm prune",permalink:"/ja/next/cli/prune"},next:{title:"pnpm install-test",permalink:"/ja/next/cli/install-test"}},s={},m=[{value:"\u4f7f\u7528\u30b7\u30ca\u30ea\u30aa",id:"\u4f7f\u7528\u30b7\u30ca\u30ea\u30aa",level:2},{value:"\u5f15\u6570",id:"\u5f15\u6570",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],d={toc:m};function f(e){var n=e.components,t=(0,p.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u7121\u8996\u3057\u3066\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u53d6\u5f97\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4eee\u60f3\u30b9\u30c8\u30a2\u306b\u8a18\u9332\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u30b7\u30ca\u30ea\u30aa"},"\u4f7f\u7528\u30b7\u30ca\u30ea\u30aa"),(0,l.kt)("p",null,"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u7279\u306b docker \u30a4\u30e1\u30fc\u30b8\u306e\u30d3\u30eb\u30c9\u3092\u6539\u5584\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"Node.js\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eDockerfile\u306e\u66f8\u304d\u65b9\u306b\u95a2\u3059\u308b",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"\u516c\u5f0f\u30ac\u30a4\u30c9"),"\u3092\u8aad\u3093\u3060\u3053\u3068\u304c\u306a\u3051\u308c\u3070\u3001\u5148\u306b\u8aad\u3093\u3067\u304a\u3044\u305f\u307b\u3046\u304c\u3044\u3044\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"\u79c1\u305f\u3061\u304c\u516c\u5f0f\u30ac\u30a4\u30c9\u3092\u53c2\u8003\u306b\u3057\u3066\u5b66\u3093\u3060\u3001pnpm\u3092\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u6700\u9069\u5316\u3057\u305fDockerfile\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm install\u306b\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# \u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u30d1\u30c3\u30c1\u3092\u5f53\u3066\u305f\u5834\u5408\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u524d\u306b\u30d1\u30c3\u30c1\u3082\u542b\u3081\u308b\nCOPY patches patches\n\nRUN pnpm install --frozen-lockfile --prod\n\n# \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bd\u30fc\u30b9\u3092\u30d0\u30f3\u30c9\u30eb\u3059\u308b\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".npmrc"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"\u306e\u3044\u305a\u308c\u304b\u3092\u5909\u66f4\u3057\u306a\u3044\u9650\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lock-file --prod"),"\u306e\u30ec\u30a4\u30e4\u30fc\u306b\u95a2\u3059\u308b\u30d3\u30eb\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u5e38\u306b\u6709\u52b9\u3067\u3059\u3002\u3053\u308c\u306f\u3001docker\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u3068\u304d\u3001\u6700\u3082\u6642\u9593\u306e\u304b\u304b\u308b\u30ec\u30a4\u30e4\u30fc\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u3057\u304b\u3057\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306b\u306f\u4f9d\u5b58\u95a2\u4fc2\u4ee5\u5916\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u3084\u30b9\u30af\u30ea\u30d7\u30c8\u3001\u3055\u307e\u3056\u307e\u306a\u30c4\u30fc\u30eb\u306e\u8a2d\u5b9a\u60c5\u5831\u306a\u3069\u304c\u542b\u307e\u308c\u308b\u306e\u3067\u3001\u79c1\u305f\u3061\u304c\u610f\u56f3\u3057\u305f\u3088\u308a\u305a\u3063\u3068\u983b\u7e41\u306b\u5909\u66f4\u3055\u308c\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001\u30e2\u30ce\u30ea\u30dd\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308bDockerfile\u3092\u4fdd\u5b88\u3059\u308b\u306e\u306f\u5927\u5909\u3067\u3059\u3002\u4f8b\u3048\u3070\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm install\u306b\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# \u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u30d1\u30c3\u30c1\u3092\u5f53\u3066\u305f\u5834\u5408\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u524d\u306b\u30d1\u30c3\u30c1\u3082\u542b\u3081\u308b\nCOPY patches patches\n\n# \u5404\u30b5\u30d6\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5bfe\u3057\u3066\u3001\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u6b63\u3057\u3044\u5834\u6240\u306b\u30b3\u30d4\u30fc\u3059\u308b\u8ffd\u52a0\u306e\u30b9\u30c6\u30c3\u30d7\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\n# \u305d\u308c\u306f\u3001Docker\u306f\u5358\u4e00\u306e\u6307\u793a\u3067package.json\u306e\u307f\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u304c\u306a\u3044\u305f\u3081\u3067\u3059\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bd\u30fc\u30b9\u3092\u30d0\u30f3\u30c9\u30eb\u3059\u308b\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,l.kt)("p",null,"\u30b5\u30d6\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8ffd\u52a0\u3057\u305f\u308a\u524a\u9664\u3057\u305f\u308a\u3059\u308b\u3068\u304d\u3001Dockerfile\u3082\u5909\u66f4\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," \u306f\u305d\u3046\u3044\u3063\u305f\u554f\u984c\u3092\u5b8c\u5168\u306b\u89e3\u6c7a\u3057\u307e\u3059\u3002\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u60c5\u5831\u3060\u3051\u3092\u983c\u308a\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ed\u30fc\u30c9\u3057\u3066\u3001\u4eee\u60f3\u30b9\u30c8\u30a2\u683c\u7d0d\u3059\u308b\u304b\u3089\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch\u306f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u307f\u304c\u5fc5\u8981\nCOPY pnpm-lock.yaml ./\n\n# \u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u30d1\u30c3\u30c1\u3092\u5f53\u3066\u305f\u5834\u5408\u306f\u3001pnpm fetch\u3092\u5b9f\u884c\u3059\u308b\u524d\u306b\u30d1\u30c3\u30c1\u3092\u542b\u3081\u308b\nCOPY patches patches\n\nRUN pnpm fetch --prod ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,l.kt)("p",null,"\u5358\u7d14\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u30e2\u30ce\u30ea\u30dd\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u3069\u3061\u3089\u3067\u3082\u4e0a\u624b\u304f\u6a5f\u80fd\u3057\u307e\u3059\u3002\u5fc5\u8981\u306a\u4f9d\u5b58\u5bfe\u8c61\u306f\u5168\u3066\u4eee\u60f3\u30b9\u30c8\u30a2\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"--offline"),"\u30d5\u30e9\u30b0\u3092\u6307\u5b9a\u3057\u3066pnpm\u304c\u5916\u90e8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u901a\u4fe1\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3057\u306a\u3044\u9650\u308a\u3001\u305d\u306e\u30ec\u30a4\u30e4\u30fc\u306b\u95a2\u3059\u308b\u30d3\u30eb\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u6709\u52b9\u306e\u305f\u3081\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod")," \u306f\u5927\u5e45\u306b\u6642\u9593\u3092\u7bc0\u7d04\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("h2",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,l.kt)("h3",{id:"--dev"},"--dev"),(0,l.kt)("p",null,"\u958b\u767a\u30d1\u30c3\u30b1\u30fc\u30b8\u3060\u3051\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--prod"},"--prod"),(0,l.kt)("p",null,"\u958b\u767a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53d6\u5f97\u3057\u307e\u305b\u3093\u3002"))}f.isMDXComponent=!0}}]);