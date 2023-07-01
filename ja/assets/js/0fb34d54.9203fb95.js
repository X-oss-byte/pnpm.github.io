"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9089],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=t(1966),a=t(9836),l=(t(9496),t(9613)),p=["components"],i={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-8.x/cli/run",title:"pnpm run",description:"\u30a8\u30a4\u30ea\u30a2\u30b9: run-script",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-8.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/ja/cli/run",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"8.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-8.x/docs",previous:{title:"pnpm licenses",permalink:"/ja/cli/licenses"},next:{title:"pnpm test",permalink:"/ja/cli/test"}},u={},m=[{value:"\u4f8b",id:"\u4f8b",level:2},{value:"Running multiple scripts",id:"running-multiple-scripts",level:2},{value:"\u8a73\u7d30",id:"\u8a73\u7d30",level:2},{value:"<code>npm run</code> \u3068\u306e\u9055\u3044",id:"npm-run-\u3068\u306e\u9055\u3044",level:2},{value:"\u74b0\u5883\u5909\u6570",id:"\u74b0\u5883\u5909\u6570",level:2},{value:"Options",id:"options",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],c={toc:m},k="wrapper";function d(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)(k,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30a8\u30a4\u30ea\u30a2\u30b9: ",(0,l.kt)("inlineCode",{parentName:"p"},"run-script")),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u6b21\u306e\u3088\u3046\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," \u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u3092\u4f7f\u3063\u3066\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059! \u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3088\u306d\uff1f \u30ad\u30fc\u3092\u306a\u308b\u3079\u304f\u6253\u3061\u305f\u304f\u306a\u3044\u4eba\u306e\u305f\u3081\u306b\u3001\u5168\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f pnpm \u30b3\u30de\u30f3\u30c9\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3068\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \u306f\u305f\u3060\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u306e\u7701\u7565\u3067\u3059(\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u540d\u524d\u304c pnpm \u30b3\u30de\u30f3\u30c9\u3068\u88ab\u3063\u3066\u3044\u306a\u3044\u9650\u308a)\u3002"),(0,l.kt)("h2",{id:"running-multiple-scripts"},"Running multiple scripts"),(0,l.kt)("p",null,"You may run multiple scripts at the same time by using a regex instead of the script name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/<regex>/"\n')),(0,l.kt)("p",null,"Run all scripts that start with ",(0,l.kt)("inlineCode",{parentName:"p"},"watch:"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/^watch:.*/"\n')),(0,l.kt)("h2",{id:"\u8a73\u7d30"},"\u8a73\u7d30"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," \u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," \u3092\u5b9f\u884c\u3059\u308b\u969b\u306b\u3001\u30b7\u30a7\u30eb\u306e\u65e2\u5b58\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," \u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308c\u3070\u3001\u305d\u308c\u3092\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u901a\u5e38\u306e\u30b3\u30de\u30f3\u30c9\u306e\u3088\u3046\u306b\u4f7f\u3048\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f8\u3051\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,l.kt)("p",null,"\u3053\u308c\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \u304c\u30b7\u30a7\u30eb\u306b\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u304f\u3066\u3082\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," \u3082 ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," \u306b\u8ffd\u52a0\u3055\u308c\u308b\u305f\u3081\u3001\u30c4\u30fc\u30eb\u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30eb\u30fc\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u4efb\u610f\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," \u304b\u3089\u547c\u3073\u51fa\u305b\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"npm-run-\u3068\u306e\u9055\u3044"},(0,l.kt)("inlineCode",{parentName:"h2"},"npm run")," \u3068\u306e\u9055\u3044"),(0,l.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001pnpm \u306f\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4efb\u610f\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"pre")," \u304a\u3088\u3073 ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," \u30d5\u30c3\u30af\u3092\u5b9f\u884c\u3057\u307e\u305b\u3093 (\u4f8b\u3048\u3070 ",(0,l.kt)("inlineCode",{parentName:"p"},"prestart")," \u306a\u3069) \u3002 \u3053\u306e npm \u306e\u6a5f\u80fd\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u660e\u793a\u7684\u3067\u306f\u306a\u304f\u6697\u9ed9\u7684\u306b\u306a\u308a\u3001\u5b9f\u884c\u30d5\u30ed\u30fc\u3092\u96e3\u89e3\u306b\u3059\u308b\u539f\u56e0\u3068\u306a\u3063\u3066\u3044\u307e\u3057\u305f\u3002 \u307e\u305f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm serve")," \u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm preserve")," \u3082\u5b9f\u884c\u3057\u3066\u3057\u307e\u3046\u3068\u3044\u3046\u9a5a\u304f\u3079\u304d\u5b9f\u884c\u7d50\u679c\u306b\u3082\u3064\u306a\u304c\u308a\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u4f55\u3089\u304b\u306e\u7406\u7531\u3067 npm \u306e pre/post \u30b9\u30af\u30ea\u30d7\u30c8\u306e\u52d5\u4f5c\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h2",{id:"\u74b0\u5883\u5909\u6570"},"\u74b0\u5883\u5909\u6570"),(0,l.kt)("p",null,"\u5b9f\u884c\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u5bfe\u3057\u3066\u3001 pnpm \u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3059\u308b\u74b0\u5883\u5909\u6570\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u74b0\u5883\u5909\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u5b9f\u884c\u4e2d\u306e\u30d7\u30ed\u30bb\u30b9\u306b\u95a2\u3059\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u60c5\u5831\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"pnpm \u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u308b\u74b0\u5883\u5909\u6570\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"npm_command")," - \u5b9f\u884c\u3055\u308c\u305f\u30b3\u30de\u30f3\u30c9\u306e\u540d\u524d\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u5b9f\u884c\u3055\u308c\u305f\u30b3\u30de\u30f3\u30c9\u304c ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm run"),'\u306e\u5834\u5408\u3001\u3053\u306e\u5909\u6570\u306e\u5024\u306f "run-script" \u306b\u306a\u308a\u307e\u3059\u3002')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"run")," \u30b3\u30de\u30f3\u30c9\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u540d\u306e\u524d\u306b\u8a18\u8f09\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30d7\u30c8\u540d\u306e\u5f8c\u306b\u8a18\u8f09\u3055\u308c\u305f\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u5b9f\u884c\u3055\u308c\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u6e21\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u6b21\u306e\u4f8b\u3067\u306f\u3001\u3044\u305a\u308c\u3082pnpm CLI\u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"--silent")," \u30aa\u30d7\u30b7\u30e7\u30f3\u4ed8\u304d\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,l.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u540d\u306e\u5f8c\u306e\u5f15\u6570\u306f\u3001\u5b9f\u884c\u3055\u308c\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002 \u3064\u307e\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," \u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack --watch")," \u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,l.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,l.kt)("h3",{id:"script-shell"},"script-shell"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"path"))),(0,l.kt)("p",null,"The shell to use for scripts run with the ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,l.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,l.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,l.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,l.kt)("p",null,"But if the ",(0,l.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,l.kt)("h3",{id:"--if-present"},"--if-present"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"\u4e26\u884c\u6027\u3068\u30c8\u30dd\u30ed\u30b8\u30ab\u30eb\u30bd\u30fc\u30c8\u306e\u7d50\u679c\u3092\u5b8c\u5168\u306b\u7121\u8996\u3057\u3066\u3001\u30de\u30c3\u30c1\u3059\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5bfe\u3057\u3066\u6307\u5b9a\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5373\u6642\u5b9f\u884c\u3057\u3001\u63a5\u982d\u8f9e\u4ed8\u304d\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u3067\u51fa\u529b\u3057\u307e\u3059\u3002 \u3053\u306e\u30d5\u30e9\u30b0\u306f\u3001\u591a\u304f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u9577\u6642\u9593\u5b9f\u884c\u3055\u308c\u308b\u51e6\u7406\u3001\u4f8b\u3048\u3070\u3001\u9577\u6642\u9593\u306e\u30d3\u30eb\u30c9\u51e6\u7406\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--stream"},"--stream"),(0,l.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,l.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,l.kt)("p",null,"Aggregate output from child processes that are run in parallel, and only print output when the child process is finished. It makes reading large logs after running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"--parallel")," or with ",(0,l.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," much easier (especially on CI). Only ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," is supported."),(0,l.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,l.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,l.kt)("p",null,"\u7279\u5b9a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u5b9f\u884c\u3092\u518d\u958b\u3057\u307e\u3059\u3002 \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u5927\u304d\u306a\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059\u3002\u30d3\u30eb\u30c9\u9806\u5e8f\u3067\u524d\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5b9f\u884c\u305b\u305a\u306b\u3001\u7279\u5b9a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u30d3\u30eb\u30c9\u3092\u518d\u958b\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,l.kt)("p",null,"Record the result of the scripts executions into a ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file."),(0,l.kt)("p",null,"An example of a ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionStatus": {\n    "/Users/zoltan/src/pnpm/pnpm/cli/command": {\n      "status": "passed",\n      "duration": 1861.143042\n    },\n    "/Users/zoltan/src/pnpm/pnpm/cli/common-cli-options-help": {\n      "status": "passed",\n      "duration": 1865.914958\n    }\n  }\n')),(0,l.kt)("p",null,"Possible values of ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," are: 'passed', 'queued', 'running'."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}d.isMDXComponent=!0}}]);