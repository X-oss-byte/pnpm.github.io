"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4867],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||a;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var i=n(1966),r=n(9836),a=(n(9496),n(9613)),l=["components"],p={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-7.x/cli/run",title:"pnpm run",description:"Alias: run-script",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/it/7.x/cli/run",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-7.x/docs",previous:{title:"pnpm licenses",permalink:"/it/7.x/cli/licenses"},next:{title:"pnpm test",permalink:"/it/7.x/cli/test"}},u={},c=[{value:"Esempi",id:"esempi",level:2},{value:"Running multiple scripts",id:"running-multiple-scripts",level:2},{value:"Details",id:"details",level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",level:2},{value:"Environment",id:"environment",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--resume-from &lt;nome_pacchetto&gt;",id:"--resume-from-nome_pacchetto",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:c},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)(d,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"run-script")),(0,a.kt)("p",null,"Esegue uno script definito nel file manifesto del pacchetto."),(0,a.kt)("h2",{id:"esempi"},"Esempi"),(0,a.kt)("p",null,"Supponiamo che tu abbia uno script ",(0,a.kt)("inlineCode",{parentName:"p"},"watch")," configurato nel tuo ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", in questo modo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,a.kt)("p",null,"Ora puoi eseguire questo script usando ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Semplice, vero? Un'altra cosa da notare per coloro a cui piace risparmiare sequenze di tasti e tempo \xe8 che tutti gli script vengono resi alias come comandi pnpm, quindi alla fine ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \xe8 solo abbreviazione per ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (SOLO per gli script che non condividono lo stesso nome dei comandi pnpm gi\xe0 esistenti)."),(0,a.kt)("h2",{id:"running-multiple-scripts"},"Running multiple scripts"),(0,a.kt)("p",null,"Added in: v7.27.0"),(0,a.kt)("p",null,"You may run multiple scripts at the same time by using a regex instead of the script name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/<regex>/"\n')),(0,a.kt)("p",null,"Run all scripts that start with ",(0,a.kt)("inlineCode",{parentName:"p"},"watch:"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/^watch:.*/"\n')),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,a.kt)("p",null,"And even though ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,a.kt)("p",null,"For workspaces, ",(0,a.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,a.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,a.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,a.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,a.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,a.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"There are some environment variables that pnpm automatically creates for the executed scripts. These environment variables may be used to get contextual information about the running process."),(0,a.kt)("p",null,"These are the environment variables created by pnpm:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"npm_command")," - contains the name of the executed command. If the executed command is ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm run"),', then the value of this variable will be "run-script".')),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("p",null,"Any options for the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," command should be listed before the script's name. Options listed after the script's name are passed to the executed script."),(0,a.kt)("p",null,"All these will run pnpm CLI with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--silent")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,a.kt)("p",null,"Any arguments after the command's name are added to the executed script. So if ",(0,a.kt)("inlineCode",{parentName:"p"},"watch")," runs ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack --watch"),", then this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,a.kt)("p",null,"will run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,a.kt)("h3",{id:"script-shell"},"script-shell"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"percorso"))),(0,a.kt)("p",null,"The shell to use for scripts run with the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,a.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,a.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,a.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,a.kt)("p",null,"But if the ",(0,a.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,a.kt)("h3",{id:"--if-present"},"--if-present"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Ignora completamente la convaluta e l'ordinamento topologico, eseguendo un dato script immediatamente in tutti i pacchetti corrispondenti con output di streaming prefissato. Questo \xe8 il flag preferito per i processi a lungo termine su molti pacchetti, per esempio, un lungo processo di compilazione."),(0,a.kt)("h3",{id:"--stream"},"--stream"),(0,a.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,a.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,a.kt)("p",null,"Aggregate output from child processes that are run in parallel, and only print output when the child process is finished. It makes reading large logs after running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"--parallel")," or with ",(0,a.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," much easier (especially on CI). Only ",(0,a.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," is supported."),(0,a.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,a.kt)("h3",{id:"--resume-from-nome_pacchetto"},"--resume-from ","<","nome_pacchetto",">"),(0,a.kt)("p",null,"Added in: v7.22.0"),(0,a.kt)("p",null,"Riprende l'esecuzione da un determinato progetto. Questo pu\xf2 essere utile se si sta lavorando con un grande workspace e si desidera riavviare la build di un determinato progetto senza eseguire la build di tutti i progetti che lo precedono."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"Added in: v7.28.0"),(0,a.kt)("p",null,"Record the result of the scripts executions into a ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file."),(0,a.kt)("p",null,"An example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionStatus": {\n    "/Users/zoltan/src/pnpm/pnpm/cli/command": {\n      "status": "passed",\n      "duration": 1861.143042\n    },\n    "/Users/zoltan/src/pnpm/pnpm/cli/common-cli-options-help": {\n      "status": "passed",\n      "duration": 1865.914958\n    }\n  }\n')),(0,a.kt)("p",null,"Possible values of ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," are: 'passed', 'queued', 'running'."),(0,a.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/it/7.x/filtering"},"Ulteriori informazioni sui filtri.")))}h.isMDXComponent=!0}}]);