"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1437],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(f,p(p({ref:n},s),{},{components:t})):o.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<r;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(1966),a=t(9836),r=(t(9496),t(9613)),p=["components"],i={id:"fetch",title:"pnpm fetch"},l=void 0,c={unversionedId:"cli/fetch",id:"version-8.x/cli/fetch",title:"pnpm fetch",description:"Fetch packages from a lockfile into virtual store, package manifest is ignored.",source:"@site/versioned_docs/version-8.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/cli/fetch",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/fetch.md",tags:[],version:"8.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-8.x/docs",previous:{title:"pnpm prune",permalink:"/cli/prune"},next:{title:"pnpm install-test",permalink:"/cli/install-test"}},s={},d=[{value:"Usage scenario",id:"usage-scenario",level:2},{value:"Options",id:"options",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3}],m={toc:d},u="wrapper";function f(e){var n=e.components,t=(0,a.Z)(e,p);return(0,r.kt)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Fetch packages from a lockfile into virtual store, package manifest is ignored."),(0,r.kt)("h2",{id:"usage-scenario"},"Usage scenario"),(0,r.kt)("p",null,"This command is specifically designed to improve building a docker image."),(0,r.kt)("p",null,"You may have read the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"official guide")," to writing a Dockerfile for a Node.js\napp, if you haven't read it yet, you may want to read it first."),(0,r.kt)("p",null,"From that guide, we learn to write an optimized Dockerfile for projects using\npnpm, which looks like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nWORKDIR /path/to/somewhere\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# If you patched any package, include patches before install too\nCOPY patches patches\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"As long as there are no changes to ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache is still valid up to the layer of\n",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", which cost most of the time\nwhen building a docker image."),(0,r.kt)("p",null,"However, modification to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than\nwe expect, because it does not only contain dependencies, but may also\ncontain the version number, scripts, and arbitrary configuration for any other\ntool."),(0,r.kt)("p",null,"It's also hard to maintain a Dockerfile that builds a monorepo project, it may\nlook like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nWORKDIR /path/to/somewhere\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# If you patched any package, include patches before install too\nCOPY patches patches\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,r.kt)("p",null,"As you can see, the Dockerfile has to be updated when you add or remove\nsub-packages."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," solves the above problem perfectly by providing the ability\nto load packages into the virtual store using only information from a lockfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nWORKDIR /path/to/somewhere\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\n# If you patched any package, include patches before running pnpm fetch\nCOPY patches patches\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"It works for both simple and monorepo projects, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," enforces\npnpm not to communicate with the package registry as all needed packages are\nalready present in the virtual store."),(0,r.kt)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the\nlayer, so ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", will save you much\ntime."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Only development packages will be fetched"),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"Development packages will not be fetched"))}f.isMDXComponent=!0}}]);