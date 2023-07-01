"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7244],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=u(n),s=a,d=k["".concat(o,".").concat(s)]||k[s]||m[s]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>k});var r=n(1966),a=n(9836),l=(n(9496),n(9613)),i=["components"],p={id:"recursive",title:"pnpm -r, --recursive"},o=void 0,u={unversionedId:"cli/recursive",id:"version-8.x/cli/recursive",title:"pnpm -r, --recursive",description:"\u522b\u540d\uff1am, multi, recursive,  -r",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-8.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/zh/cli/recursive",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-CN",tags:[],version:"8.x",frontMatter:{id:"recursive",title:"pnpm -r, --recursive"},sidebar:"version-8.x/docs",previous:{title:"pnpm pack",permalink:"/zh/cli/pack"},next:{title:"pnpm server",permalink:"/zh/cli/server"}},c={},k=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--link-workspace-packages",id:"--link-workspace-packages",level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",level:3},{value:"--no-bail",id:"--no-bail",level:3},{value:"--no-sort",id:"--no-sort",level:3},{value:"--reverse",id:"--reverse",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:k},s="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u522b\u540d\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"recursive"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,l.kt)("p",null,"\u4e0e\u4ee5\u4e0b\u547d\u4ee4\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u5728\u5de5\u4f5c\u533a\u7684\u6bcf\u4e2a\u9879\u76ee\u4e2d\u8fd0\u884c\u547d\u4ee4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"outdated")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"publish")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rebuild")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unlink")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"why"))),(0,l.kt)("p",null,"\u5728\u5de5\u4f5c\u533a\u7684\u6bcf\u4e2a\u9879\u76ee\u4e2d\u8fd0\u884c\u547d\u4ee4\uff0c\u4e0d\u5305\u62ec\u6839\u9879\u76ee\uff0c\u4e0e\u4ee5\u4e0b\u547d\u4ee4\u4e00\u8d77\u4f7f\u7528\u65f6\u4e3a \uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add"))),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5373\u4f7f\u5728\u8fd0\u884c\u811a\u672c\u65f6\u4e5f\u5305\u542b\u6839\u9879\u76ee\uff0c\u8bf7\u5c06 ","[include-workspace-root][]"," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,l.kt)("p",null,"\u7528\u6cd5\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r publish\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"true\uff0cfalse\uff0cdeep"))),(0,l.kt)("p",null,"\u5c06\u4e00\u4e2a monorepo \u7684\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u672c\u5730\u53ef\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u94fe\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules "),"\u4e2d\uff0c\u800c\u4e0d\u662f\u4ece\u6ce8\u518c\u8868\u91cd\u65b0\u4e0b\u8f7d\u3002 \u8fd9\u4e2a\u529f\u80fd\u6a21\u62df\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"\u3002"),(0,l.kt)("p",null,"\u5f53\u5b83\u8bbe\u7f6e\u4e3a deep \u65f6\uff0c\u672c\u5730",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u4e5f\u53ef\u4ee5\u88ab\u5b50\u4f9d\u8d56\u9879\u94fe\u63a5\u5230\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u9f13\u52b1\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/workspaces#link-workspace-packages"},"npmrc")," \u4ee3\u66ff\u6765\u8fdb\u884c\u6b64\u8bbe\u7f6e\uff0c\u53bb\u5f3a\u5236\u6240\u6709\u73af\u5883\u4e2d\u90fd\u6709\u540c\u6837\u7684\u8868\u73b0\u3002 \u6b64\u9009\u9879\u5355\u72ec\u5b58\u5728\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u5728\u5fc5\u8981\u65f6\u8986\u76d6\u5b83\u3002"),(0,l.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"\u8bbe\u7f6e\u540c\u65f6\u8fd0\u884c\u7684\u6700\u5927\u4efb\u52a1\u6570\u3002 \u5bf9\u4e8e\u65e0\u9650\u7684\u5e76\u53d1\uff0c\u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),"\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"workpace-concurrency")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"<= 0")," \uff0c\u5b83\u5c06\u4f7f\u7528\u4e3b\u673a\u5185\u6838\u7684\u6570\u91cf\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"max(1, (\u5185\u6838\u6570\u91cf) - abs(\u5de5\u4f5c\u7a7a\u95f4\u7684\u5e76\u53d1\u6570\u91cf))")),(0,l.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"\u5982\u679c\u4e3a true\uff0c\u5219\u5728\u4efb\u52a1\u629b\u51fa\u9519\u8bef\u65f6\u505c\u6b62\u3002"),(0,l.kt)("p",null,"\u6b64\u914d\u7f6e\u4e0d\u4f1a\u5f71\u54cd\u9000\u51fa\u7801\uff08exit code\uff09\u3002 \u5373\u4f7f\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bail")," \uff0c\u6240\u6709\u4efb\u52a1\u4e5f\u90fd\u5c06\u5b8c\u6210\uff0c\u9664\u975e\u4efb\u610f\u7684\u4efb\u52a1\u6267\u884c\u5931\u8d25\uff0c\u90a3\u4e48\u8be5\u547d\u4ee4\u5c06\u4ee5\u975e\u96f6\u7801\uff08non-zero code\uff09\u9000\u51fa\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff08\u5728\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u4e2d run test\uff0c\u5982\u679c\u5176\u4e2d\u4efb\u610f\u4e00\u4e2a\u5931\u8d25\u5219\u7ee7\u7eed\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,l.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"\u5f53\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"packages"),"\u6309\u62d3\u6251\u8fdb\u884c\u6392\u5e8f\uff08\u4f9d\u8d56\u4e8e\u4f9d\u8d56\u9879\u524d\uff09\u3002 \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort"),"\u7981\u7528\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,l.kt)("h3",{id:"--reverse"},"--reverse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("strong",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"\u5f53\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u4e4b\u95f4\u7684\u987a\u5e8f\u4f1a\u98a0\u5012\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")),(0,l.kt)("p",null,"[include-workspace-root]",": ../npmrc. md#include-workspace-root"))}d.isMDXComponent=!0}}]);