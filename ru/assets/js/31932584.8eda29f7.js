"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2202],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,f=m["".concat(p,".").concat(k)]||m[k]||u[k]||r;return n?l.createElement(f,i(i({ref:t},d),{},{components:n})):l.createElement(f,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=n(2962),a=n(2742),r=(n(9496),n(9613)),i=["components"],o={id:"install",title:"pnpm install"},p=void 0,s={unversionedId:"cli/install",id:"version-7.x/cli/install",title:"pnpm install",description:"\u0410\u043b\u0438\u0430\u0441\u044b: i",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/ru/cli/install",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-7.x/docs",previous:{title:"pnpm add <\u043f\u0430\u043a\u0435\u0442>",permalink:"/ru/cli/add"},next:{title:"pnpm update",permalink:"/ru/cli/update"}},d={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--force",id:"--force",level:3},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435&gt;",id:"--reporter\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",level:3}],m={toc:u};function k(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441\u044b: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,r.kt)("p",null,"\u0412 \u0441\u0440\u0435\u0434\u0435 CI \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u043e\u043a\u0444\u0430\u0439\u043b, \u043d\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435."),(0,r.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0438 ",(0,r.kt)("a",{parentName:"p",href:"/ru/workspaces"},"\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u044d\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u0434\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8927).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0444\u043b\u0430\u0439\u043d, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 (CAS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0422\u043e\u043b\u044c\u043a\u043e ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d")))),(0,r.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,r.kt)("h3",{id:"--force"},"--force"),(0,r.kt)("p",null,"Force reinstall dependencies: refetch packages modified in store, recreate a lockfile and/or modules directory created by a non-compatible version of pnpm. Install all optionalDependencies even they don\\'t satisfy the current environment(cpu, os, arch)."),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use only packages already available in the store. If a package won't be found locally, the installation will fail."),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"pnpm will not install any package listed in ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," and will remove those insofar they were already installed, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production status from this flag instead."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed and ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," are removed insofar they were already installed, regardless of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When used, only updates ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Nothing gets written to the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory."),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"Fix broken lockfile entries automatically."),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For non-CI: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"For CI: ",(0,r.kt)("strong",{parentName:"li"},"true"),", if a lockfile is present"))),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present."),(0,r.kt)("p",null,"This setting is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by default in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/watson/ci-info#supported-ci-tools"},"CI environments"),". The following code is used to detect CI environments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"',title:'"https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"'},"exports.isCI = !!(\n  env.CI || // Travis CI, CircleCI, Cirrus CI, GitLab CI, Appveyor, CodeShip, dsari\n  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI\n  env.BUILD_NUMBER || // Jenkins, TeamCity\n  env.RUN_ID || // TaskCluster, dsari\n  exports.name ||\n  false\n)\n")),(0,r.kt)("h3",{id:"--reporter\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},"--reporter=","<","\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"For non-TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Allows you to choose the reporter that will log debug info to the terminal about the installation progress."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u0435 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0432\u043e\u0434, \u0434\u0430\u0436\u0435 \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," - \u0432\u044b\u0432\u043e\u0434 \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0435\u0446. No cursor manipulations are performed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),(0,r.kt)("p",null,"If you want to change what type of information is printed, use the ",(0,r.kt)("a",{parentName:"p",href:"/ru/npmrc#loglevel"},"loglevel")," setting."),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Creates a flat ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure, similar to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,r.kt)("strong",{parentName:"p"},"WARNING"),": This is highly discouraged."),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u043a\u0440\u0438\u043f\u0442\u044b, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u0432 \u043a\u043e\u0440\u043d\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0432 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u0445."),(0,r.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ru/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}k.isMDXComponent=!0},8927:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);