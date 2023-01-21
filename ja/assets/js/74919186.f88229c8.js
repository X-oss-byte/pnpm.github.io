"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1358],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(o,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(k,p(p({ref:t},u),{},{components:n})):a.createElement(k,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(2962),r=n(2742),l=(n(9496),n(9613)),p=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-7.x/cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/ja/cli/update",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-7.x/docs",previous:{title:"pnpm install",permalink:"/ja/cli/install"},next:{title:"pnpm remove",permalink:"/ja/cli/remove"}},u={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"\u30d1\u30bf\u30fc\u30f3\u306b\u3088\u308b\u4f9d\u5b58\u95a2\u4fc2\u306e\u9078\u629e",id:"\u30d1\u30bf\u30fc\u30f3\u306b\u3088\u308b\u4f9d\u5b58\u95a2\u4fc2\u306e\u9078\u629e",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," \u306f\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u306b\u57fa\u3065\u3044\u3066\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u5f15\u6570\u306a\u3057\u3067\u5b9f\u884c\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30b3\u30de\u30f3\u30c9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u610f\u5473"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"package.json"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u306b\u57fa\u3065\u3044\u3066\u3001\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"package.json"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u3092\u7121\u8996\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"foo"),"\u3092v2\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u66f4\u65b0\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@babel"),"\u30b9\u30b3\u30fc\u30d7\u306b\u542b\u307e\u308c\u308b\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002")))),(0,l.kt)("h2",{id:"\u30d1\u30bf\u30fc\u30f3\u306b\u3088\u308b\u4f9d\u5b58\u95a2\u4fc2\u306e\u9078\u629e"},"\u30d1\u30bf\u30fc\u30f3\u306b\u3088\u308b\u4f9d\u5b58\u95a2\u4fc2\u306e\u9078\u629e"),(0,l.kt)("p",null,"\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u7279\u5b9a\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u66f4\u65b0\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3059\u3079\u3066\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"babel")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/*\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),"\u3092\u9664\u304f\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,l.kt)("p",null,"Patterns may also be combined, so the next command will update all ",(0,l.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,l.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/* !@babel/core\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (node_modules\u3092\u9664\u304f) \u306e\u5b58\u5728\u3059\u308b\u3059\u3079\u3066\u306e\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u3001\u4f9d\u5b58\u5bfe\u8c61\u306e\u66f4\u65b0\u3092\u4e26\u5217\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,l.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u3067\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u3092\u7121\u8996\u3057\u307e\u3059\u3002 \u4ee3\u308f\u308a\u306b",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," \u30bf\u30b0\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059 (\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30e1\u30b8\u30e3\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u66f4\u65b0\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059)\u3002"),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"\u30b0\u30ed\u30fc\u30d0\u30eb\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ea\u30f3\u30af\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002 \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5408\u308f\u305b\u3066\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3044\u305a\u308c\u304b\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u66f4\u65b0\u3059\u308b\u5834\u5408\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306b\u66f4\u65b0\u3055\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u304c\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u3068\u304d\u3001\u30b3\u30de\u30f3\u30c9\u306f\u5931\u6557\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b",(0,l.kt)("inlineCode",{parentName:"p"},"express"),"\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u5931\u6557\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u306b\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306b\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u306b\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u307e\u305b\u3093\u3002"),(0,l.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,l.kt)("p",null,"\u53e4\u304f\u306a\u3063\u305f\u4f9d\u5b58\u95a2\u4fc2\u3092\u8868\u793a\u3057\u3001\u66f4\u65b0\u3059\u308b\u4f9d\u5b58\u95a2\u4fc2\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);