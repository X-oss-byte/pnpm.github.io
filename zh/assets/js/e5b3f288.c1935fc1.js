"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[499],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),k=l,d=s["".concat(o,".").concat(k)]||s[k]||m[k]||a;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:l,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(1966),l=n(9836),a=(n(9496),n(9613)),p=["components"],i={id:"publish",title:"pnpm publish"},o=void 0,c={unversionedId:"cli/publish",id:"version-8.x/cli/publish",title:"pnpm publish",description:"\u53d1\u5e03\u4e00\u4e2a\u5305\u5230\u6ce8\u518c\u8868\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-8.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/zh/cli/publish",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-CN",tags:[],version:"8.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-8.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/zh/cli/env"},next:{title:"pnpm pack",permalink:"/zh/cli/pack"}},u={},s=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"--no-git-checks",id:"--no-git-checks",level:3},{value:"--publish-branch",id:"--publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"--otp",id:"--otp",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:2}],m={toc:s},k="wrapper";function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)(k,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53d1\u5e03\u4e00\u4e2a\u5305\u5230\u6ce8\u518c\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>] [options]\n")),(0,a.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/zh/workspaces"},"\u5de5\u4f5c\u7a7a\u95f4"),"\u5185\u53d1\u5e03\u65f6\uff0c\u5de5\u4f5c\u7a7a\u95f4\u6839\u76ee\u5f55\u7684 LICENSE \u6587\u4ef6\u5c06\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"package")," \u4e00\u8d77\u6253\u5305\u3002\uff08\u9664\u975e",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u6709\u4e13\u5c5e\u7684\u8bb8\u53ef\u8bc1\uff09"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u53d1\u5e03\u4e4b\u524d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,a.kt)("a",{parentName:"p",href:"/zh/package_json#publishconfig"},"publishConfig")," \u5b57\u6bb5\u8986\u76d6\u67d0\u4e9b\u5b57\u6bb5\u3002 \u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," \u81ea\u5b9a\u4e49\u53d1\u5e03\u7684\u5b50\u76ee\u5f55\uff08\u901a\u5e38\u4f7f\u7528\u7b2c\u4e09\u65b9\u6784\u5efa\u5de5\u5177\uff09\u3002"),(0,a.kt)("p",null,"\u9012\u5f52\u8fd0\u884c\u6b64\u547d\u4ee4\u65f6 (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),")\uff0cpnpm \u5c06\u53d1\u5e03\u6240\u6709\u7248\u672c\u5c1a\u672a\u53d1\u5e03\u5230\u6ce8\u518c\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u4ece\u5de5\u4f5c\u533a\u53d1\u5e03\u6240\u6709\u5305\u3002"),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"\u4ee5 JSON \u683c\u5f0f\u663e\u793a\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"\u4f7f\u7528\u7ed9\u5b9a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," \u53d1\u5e03",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u5728\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u65f6\u4f1a\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"tag "),"\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"#\u5728 foo \u5305\u76ee\u5f55\npnpm publish --tag next\n# \u5728\u9879\u76ee\u4e2d\uff0c\u4f60\u60f3\u7528 foo \u7684 next \u7248\u672c\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"\u544a\u77e5\u8f6f\u4ef6\u6e90\u6240\u53d1\u5e03\u7684\u5305\u662f\u516c\u5f00\u7684\u8fd8\u662f\u53d7\u9650\u5236\u7684\u3002"),(0,a.kt)("h3",{id:"--no-git-checks"},"--no-git-checks"),(0,a.kt)("p",null,"\u4e0d\u68c0\u67e5\u5f53\u524d\u7684\u5206\u652f\u662f\u5426\u4e3a\u53d1\u5e03\u5206\u652f\u3001\u5206\u652f\u662f\u5426\u5e72\u51c0\u548c\u3001\u662f\u5426\u548c\u4e0e\u8fdc\u7a0b\u540c\u6b65\u3002"),(0,a.kt)("h3",{id:"--publish-branch"},"--publish-branch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("strong",{parentName:"li"},"master")," \u548c ",(0,a.kt)("strong",{parentName:"li"},"main")),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("strong",{parentName:"li"},"String"))),(0,a.kt)("p",null,"\u7528\u4e8e\u53d1\u5e03\u6700\u65b0\u66f4\u6539\u7684\u4ed3\u5e93\u7684\u4e3b\u5206\u652f\u3002"),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"\u5c1d\u8bd5\u53d1\u5e03 ",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\uff0c\u5373\u4f7f\u5728\u6ce8\u518c\u8868\u4e2d\u7684\u7248\u672c\u5df2\u5b58\u5728\u3002"),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"\u5c06\u5df2\u53d1\u5e03\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\u7684\u5217\u8868\u4fdd\u5b58\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),"\u3002 \u8fd9\u5728\u4f7f\u7528\u5176\u4ed6\u4e00\u4e9b\u5de5\u5177\u6765\u62a5\u544a\u5df2\u53d1\u5e03",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\u7684\u5217\u8868\u65f6\u5f88\u6709\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),"\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishedPackages": [\n    {\n      "name": "foo",\n      "version": "1.0.0"\n    },\n    {\n      "name": "bar",\n      "version": "2.0.0"\n    }\n  }\n]\n')),(0,a.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,a.kt)("p",null,"\u6267\u884c\u53d1\u5e03\u5305\u7684\u6240\u6709\u6d41\u7a0b\uff0c\u4f46\u4e0d\u4f1a\u628a\u5305\u53d1\u5e03\u5230\u8f6f\u4ef6\u6e90\u4e0a\u3002"),(0,a.kt)("h3",{id:"--otp"},"--otp"),(0,a.kt)("p",null,"\u5f53\u53d1\u5e03\u5305\u9700\u8981\u53cc\u56e0\u7d20\u8eab\u4efd\u9a8c\u8bc1\uff082FA\uff09\u65f6\uff0c\u6b64\u9009\u9879\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u4e00\u6b21\u6027\u5bc6\u7801\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"git-checks")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"publish-branch")," \u9009\u9879\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'},"git-checks=false\npublish-branch=production\n")),(0,a.kt)("h2",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prepublishOnly")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prepublish")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prepack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prepare")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"postpack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"publish")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"postpublish"))))}d.isMDXComponent=!0}}]);