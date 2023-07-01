"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9582],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var a=n(1966),r=n(9836),i=(n(9496),n(9613)),l=["components"],p={id:"run",title:"pnpm run"},s=void 0,o={unversionedId:"cli/run",id:"version-8.x/cli/run",title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-8.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/id/cli/run",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"8.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-8.x/docs",previous:{title:"pnpm licenses",permalink:"/id/cli/licenses"},next:{title:"pnpm test",permalink:"/id/cli/test"}},u={},c=[{value:"Contoh",id:"contoh",level:2},{value:"Running multiple scripts",id:"running-multiple-scripts",level:2},{value:"Detail",id:"detail",level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",level:2},{value:"Lingkungan",id:"lingkungan",level:2},{value:"Options",id:"options",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c},d="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run-script")),(0,i.kt)("p",null,"Runs a script defined in the package's manifest file."),(0,i.kt)("h2",{id:"contoh"},"Contoh"),(0,i.kt)("p",null,"Let's say you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," script configured in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,i.kt)("p",null,"You can now run that script by using ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Simple, right? Another thing to note for those that like to save keystrokes and time is that all scripts get aliased in as pnpm commands, so ultimately ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm watch")," is just shorthand for ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (ONLY for scripts that do not share the same name as already existing pnpm commands)."),(0,i.kt)("h2",{id:"running-multiple-scripts"},"Running multiple scripts"),(0,i.kt)("p",null,"You may run multiple scripts at the same time by using a regex instead of the script name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/<regex>/"\n')),(0,i.kt)("p",null,"Run all scripts that start with ",(0,i.kt)("inlineCode",{parentName:"p"},"watch:"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/^watch:.*/"\n')),(0,i.kt)("h2",{id:"detail"},"Detail"),(0,i.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,i.kt)("p",null,"And even though ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,i.kt)("p",null,"For workspaces, ",(0,i.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,i.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,i.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,i.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,i.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,i.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,i.kt)("h2",{id:"lingkungan"},"Lingkungan"),(0,i.kt)("p",null,"There are some environment variables that pnpm automatically creates for the executed scripts. These environment variables may be used to get contextual information about the running process."),(0,i.kt)("p",null,"These are the environment variables created by pnpm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"npm_command")," - contains the name of the executed command. If the executed command is ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm run"),', then the value of this variable will be "run-script".')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"Any options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command should be listed before the script's name. Options listed after the script's name are passed to the executed script."),(0,i.kt)("p",null,"All these will run pnpm CLI with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--silent")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,i.kt)("p",null,"Any arguments after the command's name are added to the executed script. So if ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," runs ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack --watch"),", then this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,i.kt)("p",null,"will run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,i.kt)("h3",{id:"script-shell"},"script-shell"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The shell to use for scripts run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,i.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,i.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,i.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,i.kt)("p",null,"But if the ",(0,i.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,i.kt)("h3",{id:"--if-present"},"--if-present"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,i.kt)("h3",{id:"--stream"},"--stream"),(0,i.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,i.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,i.kt)("p",null,"Aggregate output from child processes that are run in parallel, and only print output when the child process is finished. It makes reading large logs after running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"--parallel")," or with ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," much easier (especially on CI). Only ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," is supported."),(0,i.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,i.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,i.kt)("p",null,"Melanjutkan eksekusi dari proyek tertentu. Ini bisa berguna jika Anda bekerja dengan ruang kerja yang besar dan ingin memulai ulang build di proyek tertentu tanpa menjalankan semua proyek yang mendahuluinya dalam urutan build."),(0,i.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,i.kt)("p",null,"Record the result of the scripts executions into a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file."),(0,i.kt)("p",null,"An example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionStatus": {\n    "/Users/zoltan/src/pnpm/pnpm/cli/command": {\n      "status": "passed",\n      "duration": 1861.143042\n    },\n    "/Users/zoltan/src/pnpm/pnpm/cli/common-cli-options-help": {\n      "status": "passed",\n      "duration": 1865.914958\n    }\n  }\n')),(0,i.kt)("p",null,"Possible values of ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," are: 'passed', 'queued', 'running'."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/filtering"},"Baca lebih lanjut tentang filtering.")))}k.isMDXComponent=!0}}]);