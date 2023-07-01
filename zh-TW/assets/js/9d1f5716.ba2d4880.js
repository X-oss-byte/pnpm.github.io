"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4986],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||p;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,o=new Array(p);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(1966),i=n(9836),p=(n(9496),n(9613)),o=["components"],a={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"version-8.x/cli/patch",title:"pnpm patch <pkg>",description:"\u70ba\u4fee\u88dc\u7a0b\u5e8f\u6e96\u5099\u5957\u4ef6 (\u5f9e Yarn \u4e2d\u985e\u4f3c\u7684\u547d\u4ee4\u6fc0\u767c)\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-8.x/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/zh-TW/cli/patch",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"8.x",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"version-8.x/docs",previous:{title:"pnpm dedupe",permalink:"/zh-TW/cli/dedupe"},next:{title:"pnpm patch-commit <path>",permalink:"/zh-TW/cli/patch-commit"}},u={},d=[{value:"Options",id:"options",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3},{value:"--ignore-existing",id:"--ignore-existing",level:3}],s={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,p.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u70ba\u4fee\u88dc\u7a0b\u5e8f\u6e96\u5099\u5957\u4ef6 (\u5f9e Yarn \u4e2d\u985e\u4f3c\u7684\u547d\u4ee4\u6fc0\u767c)\u3002"),(0,p.kt)("p",null,"\u9019\u500b\u547d\u4ee4\u5c07\u6703\u9020\u6210\u5957\u4ef6\u5728\u8a2d\u8a08\u70ba\u53ef\u7de8\u8f2f\u7684\u81e8\u6642\u76ee\u9304\u4e2d\u88ab\u58d3\u7e2e\u3002"),(0,p.kt)("p",null,"\u5728\u60a8\u5b8c\u6210\u8b8a\u66f4\u4e4b\u5f8c\uff0c\u8acb\u57f7\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (\u9700\u5c07 ",(0,p.kt)("inlineCode",{parentName:"p"},"<path>")," \u8a2d\u70ba\u60a8\u63a5\u6536\u5230\u7684\u81e8\u6642\u76ee\u9304) \u4f86\u7522\u751f\u4e00\u500b\u4fee\u88dc\u6a94\uff0c\u4e26\u900f\u904e ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/package_json#pnpmpatcheddependencies"},(0,p.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," \u6b04\u4f4d\u5c07\u5176\u8a3b\u518a\u5230\u6700\u4e0a\u5c64\u8cc7\u8a0a\u6e05\u55ae\u4e2d\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,p.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,p.kt)("p",null,"\u9700\u8981\u4fee\u88dc\u7684\u5957\u4ef6\u6703\u88ab\u89e3\u58d3\u7e2e\u5230\u6b64\u8cc7\u6599\u593e\u4e2d\u3002"),(0,p.kt)("h3",{id:"--ignore-existing"},"--ignore-existing"),(0,p.kt)("p",null,"\u9032\u884c\u4fee\u88dc\u6642\uff0c\u5ffd\u7565\u73fe\u6709\u7684\u4fee\u88dc\u6a94\u6848\u3002"))}f.isMDXComponent=!0}}]);