"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7694],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=c(n),f=a,d=g["".concat(o,".").concat(f)]||g[f]||s[f]||r;return n?l.createElement(d,p(p({ref:t},m),{},{components:n})):l.createElement(d,p({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<r;c++)p[c]=n[c];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9376:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,assets:()=>m,toc:()=>s,default:()=>f});var l=n(7813),a=n(7044),r=(n(9496),n(9613)),p=["components"],i={id:"filtering",title:"\u8fc7\u6ee4"},o=void 0,c={unversionedId:"filtering",id:"version-7.x/filtering",title:"\u8fc7\u6ee4",description:"\u8fc7\u6ee4\u5141\u8bb8\u60a8\u5c06\u547d\u4ee4\u9650\u5236\u4e8e\u5305\u7684\u7279\u5b9a\u5b50\u96c6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/zh/7.x/filtering",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"filtering",title:"\u8fc7\u6ee4"},sidebar:"version-7.x/docs",previous:{title:"\u914d\u7f6e",permalink:"/zh/7.x/configuring"},next:{title:"\u811a\u672c",permalink:"/zh/7.x/scripts"}},m={},s=[{value:"\u5339\u914d",id:"\u5339\u914d",level:2},{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"\u6392\u9664",id:"\u6392\u9664",level:2},{value:"\u591a\u91cd\u6027",id:"\u591a\u91cd\u6027",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],g={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fc7\u6ee4\u5141\u8bb8\u60a8\u5c06\u547d\u4ee4\u9650\u5236\u4e8e\u5305\u7684\u7279\u5b9a\u5b50\u96c6\u3002"),(0,r.kt)("p",null,"pnpm \u652f\u6301\u4e30\u5bcc\u9009\u62e9\u5668\u8bed\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u540d\u79f0\u6216\u5173\u7cfb\u9009\u62e9\u5305\u3002"),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," (\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"-F"),") \u6807\u5fd7\u5236\u5b9a\u9009\u62e9\u5668:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,r.kt)("h2",{id:"\u5339\u914d"},"\u5339\u914d"),(0,r.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,r.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u7cbe\u786e\u7684\u5305\uff0c \u53ea\u7528\u6307\u5b9a\u5b83\u7684\u540d\u79f0 (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") \u6216\u4f7f\u7528 \u901a\u914d\u7b26\u9009\u62e9\u4e00\u7ec4\u5305 (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/*"),")\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,r.kt)("p",null,"\u6307\u5b9a\u5305\u7684\u8303\u56f4\u662f\u53ef\u9009\u7684\uff0c\u56e0\u6b64\u5982\u679c\u672a\u627e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"--filter=core")," \u5c06\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core"),"\u3002 \u4f46\u662f\uff0c\u5982\u679c\u5de5\u4f5c\u533a\u6709\u591a\u4e2a\u540c\u540d\u7684\u5305\uff08\u4f8b\u5982\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/core"),"\uff09\uff0c\u5219\u6ca1\u6709\u8303\u56f4\u7684\u8fc7\u6ee4\u5c06\u4e0d\u4f1a\u9009\u62e9\u4efb\u4f55\u5185\u5bb9\u3002"),(0,r.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,r.kt)("p",null,"\u8981\u9009\u62e9\u4e00\u4e2a\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56\u9879 (\u76f4\u63a5\u548c\u975e\u76f4\u63a5) \u5728\u5305\u540d\u79f0\u540e\u52a0\u4e0a\u7701\u7565\u53f7\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"<package_name>..."),"\u3002 \u4f8b\u5982\uff0c\u4e0b\u4e00\u4e2a\u547d\u4ee4\u5c06\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u53ca\u5176\u6240\u6709\u4f9d\u8d56\u7684\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\u6765\u9009\u62e9\u4e00\u7ec4\u6839\u76ee\u5f55\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,r.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,r.kt)("p",null,"\u8981\u53ea\u9009\u62e9\u4e00\u4e2a\u5305\u7684\u4f9d\u8d56\u9879(\u76f4\u63a5\u548c\u975e\u76f4\u63a5)\uff0c \u5728\u5305\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u5c71\u5f62\u7b26\u53f7\u52a0\u4e0a\u4e0a\u9762\u63d0\u5230\u7684\u7701\u7565\u53f7\u3002 \u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u547d\u4ee4\u5c06\u8fd0\u884c\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),"\u7684\u4f9d\u8d56\u9879\u7684\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,r.kt)("h3",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,r.kt)("p",null,"\u8981\u9009\u62e9\u4e00\u4e2a\u5305\u53ca\u88ab\u5176\u4f9d\u8d56\u7684\u5305(\u76f4\u63a5\u548c\u975e\u76f4\u63a5)\uff0c\u5728\u5305\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u7701\u7565\u53f7: ",(0,r.kt)("inlineCode",{parentName:"p"},"...<package_name>"),"\u3002 \u4f8b\u5982\uff0c\u8fd9\u5c06\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u4ee5\u53ca\u4f9d\u8d56\u4e8e\u5b83\u7684\u6240\u6709\u5305\u7684\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,r.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,r.kt)("p",null,"\u8981\u53ea\u9009\u62e9\u4e00\u4e2a\u5305\u7684\u88ab\u4f9d\u8d56\u9879 (\u76f4\u63a5\u548c\u975e\u76f4\u63a5) \uff0c\u5728\u5305\u540d\u524d\u6dfb\u52a0\u4e00\u4e2a\u7701\u7565\u53f7\u4e0e\u5c71\u5f62\u7b26\u53f7\u3002 \u4f8b\u5982\uff0c\u8fd9\u5c06\u8fd0\u884c\u6240\u6709\u4f9d\u8d56\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u5305\u7684\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,r.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,r.kt)("p",null,"\u76f8\u5bf9\u4e8e\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u5339\u914d\u9879\u76ee\u7684\u5168\u5c40\u6a21\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,r.kt)("p",null,"\u5305\u62ec\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7701\u7565\u53f7\u4e0e\u5c71\u5f62\u7b26\u53f7\u6765\u9009\u62e9\u4f9d\u8d56\u9879\u4e0e\u88ab\u4f9d\u8d56\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"[<since>]")," \u5408\u5e76\u4f7f\u7528\u3002 \u4f8b\u5982\uff0c\u8981\u5728\u67d0\u4e2a\u76ee\u5f55\u4e2d\u9009\u62e9\u6240\u6709\u5df2\u66f4\u6539\u7684\u9879\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,r.kt)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u4ece\u67d0\u4e2a\u76ee\u5f55\u4e2d\u9009\u62e9\u7b26\u5408\u7ed9\u5b9a\u7684\u901a\u914d\u7b26\u7684\u6240\u6709\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,r.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,r.kt)("p",null,"\u9009\u62e9\u81ea\u6307\u5b9a\u7684 commit / branch \u4ee5\u6765\u6709\u66f4\u6539\u7684\u6240\u6709\u5305\u3002 \u53ef\u4ee5\u5728\u524d\u540e\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"...")," \u6765\u5305\u62ec\u4f9d\u8d56\u9879/\u88ab\u4f9d\u8d56\u9879\uff1a"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u8fd0\u884c\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," \u4ee5\u6765\u6240\u6709\u53d8\u52a8\u8fc7\u7684\u5305\u4ee5\u53ca\u88ab\u5176\u4f9d\u8d56\u7684\u5305\u7684\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,r.kt)("h2",{id:"\u6392\u9664"},"\u6392\u9664"),(0,r.kt)("p",null,'\u4efb\u4f55\u8fc7\u6ee4\u89c4\u5219\u9009\u62e9\u5668\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u6392\u9664\u9879\uff0c\u53ea\u8981\u5728\u5f00\u5934\u6dfb\u52a0\u4e00\u4e2a"!"\u3002 \u5728 zsh (\u53ef\u80fd\u8fd8\u6709\u5176\u4ed6shells) \u4e2d, "!" \u5e94\u8f6c\u4e49: ',(0,r.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8fd9\u5c06\u5728\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u4ee5\u5916\u7684\u6240\u6709\u9879\u76ee\u4e2d\u8fd0\u884c\u4e00\u4e2a\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,r.kt)("p",null,"\u7136\u540e\u8fd9\u5c06\u5728\u6240\u6709\u4e0d\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"lib"),"\u76ee\u5f55\u4e0b\u7684\u9879\u76ee\u4e2d\u8fd0\u884c\u4e00\u4e2a\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,r.kt)("h2",{id:"\u591a\u91cd\u6027"},"\u591a\u91cd\u6027"),(0,r.kt)("p",null,"\u5f53\u5305\u88ab\u8fc7\u6ee4\u65f6\uff0c\u6bcf\u4e2a\u90fd\u4f1a\u88ab\u5339\u914d\u5230\u81f3\u5c11\u4e00\u4e2a\u9009\u62e9\u5668\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528\u65e0\u9650\u6570\u91cf\u7684\u8fc7\u6ee4\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,r.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,r.kt)("p",null,"\u5728\u4ece\u5de5\u4f5c\u533a\u9009\u62e9\u4f9d\u8d56\u9879\u65f6\uff0c\u4f1a\u5ffd\u7565 ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\uff0c\u5176\u4f59\u884c\u4e3a\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," \u4e00\u81f4\u3002"),(0,r.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,r.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,r.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,r.kt)("p",null,"\u5141\u8bb8\u5728\u8fc7\u6ee4\u81ea\u6307\u5b9a\u63d0\u4ea4/\u5206\u652f\u4ee5\u6765\u66f4\u6539\u7684\u9879\u76ee\u65f6\u901a\u8fc7 glob \u6a21\u5f0f\u5ffd\u7565\u66f4\u6539\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u7528\u6cd5\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}f.isMDXComponent=!0}}]);