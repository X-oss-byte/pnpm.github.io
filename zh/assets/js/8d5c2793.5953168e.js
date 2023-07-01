"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[608],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||p;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var r=n(1966),a=n(9836),p=(n(9496),n(9613)),o=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},l=void 0,i={unversionedId:"pnpm-workspace_yaml",id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml \u5b9a\u4e49\u4e86 \u5de5\u4f5c\u7a7a\u95f4 \u7684\u6839\u76ee\u5f55\uff0c\u5e76\u80fd\u591f\u4f7f\u60a8\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5305\u542b / \u6392\u9664\u76ee\u5f55 \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5b50\u76ee\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/zh/next/pnpm-workspace_yaml",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"docs",previous:{title:".npmrc",permalink:"/zh/next/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/zh/next/pnpmfile"}},s={},m=[],u={toc:m},f="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," \u5b9a\u4e49\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"/zh/next/workspaces"},"\u5de5\u4f5c\u7a7a\u95f4")," \u7684\u6839\u76ee\u5f55\uff0c\u5e76\u80fd\u591f\u4f7f\u60a8\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5305\u542b / \u6392\u9664\u76ee\u5f55 \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5b50\u76ee\u5f55\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in direct subdirs of packages/\n  - 'packages/*'\n  # all packages in subdirs of components/\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,p.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u76ee\u5f55\u4f4d\u7f6e\u901a\u914d\u7b26\uff0c\u6839\u76ee\u5f55\u4e0b\u7684package\u76ee\u5f55\u4e5f\u603b\u662f\u88ab\u5305\u542b."))}y.isMDXComponent=!0}}]);