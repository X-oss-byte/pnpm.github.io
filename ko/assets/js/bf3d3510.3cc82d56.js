"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1308],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,k=s["".concat(p,".").concat(m)]||s[m]||f[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(1966),i=n(9836),l=(n(9496),n(9613)),o=["components"],a={id:"unlink",title:"pnpm unlink"},p=void 0,c={unversionedId:"cli/unlink",id:"version-8.x/cli/unlink",title:"pnpm unlink",description:"\uc2dc\uc2a4\ud15c \uc804\uccb4 \ud328\ud0a4\uc9c0\ub97c \uc5b8\ub9c1\ud06c\ud569\ub2c8\ub2e4 (pnpm link \uc758 \ubc18\ub300).",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-8.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/ko/cli/unlink",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ko",tags:[],version:"8.x",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-8.x/docs",previous:{title:"pnpm link",permalink:"/ko/cli/link"},next:{title:"pnpm import",permalink:"/ko/cli/import"}},u={},s=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],f={toc:s},m="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc2dc\uc2a4\ud15c \uc804\uccb4 \ud328\ud0a4\uc9c0\ub97c \uc5b8\ub9c1\ud06c\ud569\ub2c8\ub2e4 (",(0,l.kt)("a",{parentName:"p",href:"/ko/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link"))," \uc758 \ubc18\ub300)."),(0,l.kt)("p",null,"\uc778\uc218 \uc5c6\uc774 \ud638\ucd9c\ud558\uba74, \ub9c1\ud06c\ub41c \ubaa8\ub4e0 \uc758\uc874\uc131\uc774 \uc5b8\ub9c1\ud06c\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uac83\uc740 pnpm\uc774 \uc678\ubd80 \ub9c1\ud06c\ub97c \uc81c\uac70\ud55c \ud6c4 \uc758\uc874\uc131\uc744 \ub2e4\uc2dc \uc124\uce58\ud55c\ub2e4\ub294 \uc810\uc744 \uc81c\uc678\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink")," \uc640 \uc720\uc0ac\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ko/workspaces"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4")," \ub0b4\uc5d0\uc11c \uc2e4\ud589\ub420 \ub54c, \ud558\uc704 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0 \ub610\ub294 \ubaa8\ub4e0 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc5b8\ub9c1\ud06c\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}k.isMDXComponent=!0}}]);