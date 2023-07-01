"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2191],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=n(1966),a=n(9836),l=(n(9496),n(9613)),o=["components"],p={id:"exec",title:"pnpm exec"},i=void 0,c={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"Execute a shell command in scope of a project.",source:"@site/docs/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/next/cli/exec",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/exec.md",tags:[],version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1679347216,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/next/cli/test"},next:{title:"pnpm dlx",permalink:"/next/cli/dlx"}},s={},m=[{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Examples",id:"examples-1",level:4},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Execute a shell command in scope of a project."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"If you have Jest as a dependency of your project, there is no need to install Jest globally, just run it with ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," part is actually optional when the command is not in conflict with a builtin pnpm command, so you may also just run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Any options for the ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," command should be listed before the ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," keyword.\nOptions listed after the ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," keyword are passed to the executed command."),(0,l.kt)("p",null,"Good. pnpm will run recursively:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,l.kt)("p",null,"Bad, pnpm will not run recursively but ",(0,l.kt)("inlineCode",{parentName:"p"},"jest")," will be executed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-r")," option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Execute the shell command in every project of the workspace."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable\n",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("p",null,"Prune ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,l.kt)("p",null,"View package information for all packages. This should be used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,l.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script\nimmediately in all matching packages with prefixed streaming output. This is the\npreferred flag for long-running processes over many packages, for instance, a\nlengthy build process."),(0,l.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,l.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,l.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,l.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/next/cli/run#--report-summary"},"Read about this option in the run command docs")),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/next/filtering"},"Read more about filtering.")))}f.isMDXComponent=!0}}]);