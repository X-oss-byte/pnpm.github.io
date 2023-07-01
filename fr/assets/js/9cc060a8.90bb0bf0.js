"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8259],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=n(1966),a=n(9836),l=(n(9496),n(9613)),i=["components"],p={id:"run",title:"pnpm run"},s=void 0,o={unversionedId:"cli/run",id:"cli/run",title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/fr/next/cli/run",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"run",title:"pnpm run"},sidebar:"docs",previous:{title:"pnpm licenses",permalink:"/fr/next/cli/licenses"},next:{title:"pnpm test",permalink:"/fr/next/cli/test"}},u={},c=[{value:"Examples",id:"examples",level:2},{value:"Running multiple scripts",id:"running-multiple-scripts",level:2},{value:"Details",id:"details",level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",level:2},{value:"Environment",id:"environment",level:2},{value:"Options",id:"options",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--resume-from &lt;nom_du_paquet&gt;",id:"--resume-from-nom_du_paquet",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"run-script")),(0,l.kt)("p",null,"Runs a script defined in the package's manifest file."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Let's say you have a ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," script configured in your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,l.kt)("p",null,"You can now run that script by using ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Simple, right? Another thing to note for those that like to save keystrokes and time is that all scripts get aliased in as pnpm commands, so ultimately ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm watch")," is just shorthand for ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (ONLY for scripts that do not share the same name as already existing pnpm commands)."),(0,l.kt)("h2",{id:"running-multiple-scripts"},"Running multiple scripts"),(0,l.kt)("p",null,"You may run multiple scripts at the same time by using a regex instead of the script name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/<regex>/"\n')),(0,l.kt)("p",null,"Run all scripts that start with ",(0,l.kt)("inlineCode",{parentName:"p"},"watch:"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/^watch:.*/"\n')),(0,l.kt)("h2",{id:"details"},"Details"),(0,l.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,l.kt)("p",null,"And even though ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,l.kt)("p",null,"For workspaces, ",(0,l.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,l.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,l.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,l.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,l.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,l.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,l.kt)("h2",{id:"environment"},"Environment"),(0,l.kt)("p",null,"There are some environment variables that pnpm automatically creates for the executed scripts. These environment variables may be used to get contextual information about the running process."),(0,l.kt)("p",null,"These are the environment variables created by pnpm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"npm_command")," - contains the name of the executed command. If the executed command is ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm run"),', then the value of this variable will be "run-script".')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Any options for the ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," command should be listed before the script's name. Options listed after the script's name are passed to the executed script."),(0,l.kt)("p",null,"All these will run pnpm CLI with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--silent")," option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,l.kt)("p",null,"Any arguments after the command's name are added to the executed script. So if ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," runs ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack --watch"),", then this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,l.kt)("p",null,"will run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,l.kt)("h3",{id:"script-shell"},"script-shell"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"chemin"))),(0,l.kt)("p",null,"The shell to use for scripts run with the ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,l.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,l.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,l.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,l.kt)("p",null,"But if the ",(0,l.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,l.kt)("h3",{id:"--if-present"},"--if-present"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--stream"},"--stream"),(0,l.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,l.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,l.kt)("p",null,"Aggregate output from child processes that are run in parallel, and only print output when the child process is finished. It makes reading large logs after running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"--parallel")," or with ",(0,l.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," much easier (especially on CI). Only ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," is supported."),(0,l.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,l.kt)("h3",{id:"--resume-from-nom_du_paquet"},"--resume-from ","<","nom_du_paquet",">"),(0,l.kt)("p",null,"Reprendre l\u2019ex\xe9cution \xe0 partir d\u2019un projet sp\xe9cifique. Cela peut \xeatre utile lorsque l'on travaille avec un workspace de taille cons\xe9quente et que l'on souhaite red\xe9marrer une build depuis un projet sp\xe9cifique sans devoir ex\xe9cuter tous les projets qui le pr\xe9c\xe8dent dans l\u2019ordre de la build."),(0,l.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,l.kt)("p",null,"Record the result of the scripts executions into a ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file."),(0,l.kt)("p",null,"An example of a ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionStatus": {\n    "/Users/zoltan/src/pnpm/pnpm/cli/command": {\n      "status": "passed",\n      "duration": 1861.143042\n    },\n    "/Users/zoltan/src/pnpm/pnpm/cli/common-cli-options-help": {\n      "status": "passed",\n      "duration": 1865.914958\n    }\n  }\n')),(0,l.kt)("p",null,"Possible values of ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," are: 'passed', 'queued', 'running'."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/fr/next/filtering"},"En savoir plus sur le filtrage.")))}h.isMDXComponent=!0}}]);