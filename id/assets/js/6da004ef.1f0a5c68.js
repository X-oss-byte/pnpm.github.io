"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8101],{9613:(e,n,a)=>{a.d(n,{Zo:()=>k,kt:()=>c});var t=a(9496);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},k=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=l,c=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?t.createElement(c,r(r({ref:n},k),{},{components:a})):t.createElement(c,r({ref:n},k))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7611:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>k,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var t=a(1966),l=a(9836),i=(a(9496),a(9613)),r=["components"],p={id:"install",title:"pnpm install"},o=void 0,s={unversionedId:"cli/install",id:"cli/install",title:"pnpm install",description:"Alias: i",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/id/next/cli/install",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"install",title:"pnpm install"},sidebar:"docs",previous:{title:"pnpm add <pkg>",permalink:"/id/next/cli/add"},next:{title:"pnpm update",permalink:"/id/next/cli/update"}},k={},u=[{value:"RINGKASAN",id:"ringkasan",level:2},{value:"Opsi",id:"opsi",level:2},{value:"--force",id:"--force",level:3},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"--resolution-only",id:"--resolution-only",level:3}],d={toc:u},m="wrapper";function c(e){var n=e.components,p=(0,l.Z)(e,r);return(0,i.kt)(m,(0,t.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"i")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," digunakan untuk menginstal semua dependensi (paket yang menjadi ketergantungan paket lain) dari sebuah proyek."),(0,i.kt)("p",null,"Di linkungan CI, instalasi akan gagal jika sebuah lockfile hadir tetapi butuh diperbarui."),(0,i.kt)("p",null,"Di dalam ",(0,i.kt)("a",{parentName:"p",href:"/id/next/workspaces"},"workspace (ruang kerja)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," akan menginstal semua dependensi di semua proyek. Jika Anda ingin menonaktifkan perilaku ini, ubah setelan ",(0,i.kt)("inlineCode",{parentName:"p"},"recursive-install")," menjadi ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7461).Z,width:"940",height:"472"})),(0,i.kt)("h2",{id:"ringkasan"},"RINGKASAN"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Perintah"),(0,i.kt)("th",{parentName:"tr",align:null},"Berarti"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,i.kt)("td",{parentName:"tr",align:null},"Hanya install secara luring melalui store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," tidak akan diperbarui")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Hanya memperbarui ",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml"))))),(0,i.kt)("h2",{id:"opsi"},"Opsi"),(0,i.kt)("h3",{id:"--force"},"--force"),(0,i.kt)("p",null,"Force reinstall dependencies: refetch packages modified in store, recreate a lockfile and/or modules directory created by a non-compatible version of pnpm. Install all optionalDependencies even they don't satisfy the current environment(cpu, os, arch)."),(0,i.kt)("h3",{id:"--offline"},"--offline"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Jika ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm hanya akan menggunakan paket-paket yang sudah tersedia di store. Jika paket tidak ditemukan secara lokal, maka akan instalasi gagal."),(0,i.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Jika ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pemeriksaan kedaluwarsa untuk data yang di-cache akan dilewati, tetapi data yang hilang akan diminta dari server. Untuk memaksa mode luring penuh, gunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"pnpm will not install any package listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," and will remove those insofar they were already installed, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Gunakan tanda ini untuk menginstruksikan pnpm supaya mengabaikan ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," dan mengambil status produksinya dari tanda ini."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed and ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," are removed insofar they were already installed, regardless of the ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"opsionalKetergantungan")," tidak akan diinstal."),(0,i.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Ketika digunakan, hanya akan memperbarui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Tidak akan ada yang ditulis ke direktori ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,i.kt)("p",null,"Memperbaiki entri-entri lockfile yang rusak secara otomatis."),(0,i.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Untuk lingkungan bukan CI: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Untuk lingkungan CI: ",(0,i.kt)("strong",{parentName:"li"},"true"),", jika lockfile hadir"))),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Jika ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm tidak akan menghasilkan lockfile dan akan gagal jika lockfilenya tidak sinkron dengan manifes / butuh diperbarui atau tidak ada lockfile yang hadir."),(0,i.kt)("p",null,"This setting is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," by default in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/watson/ci-info#supported-ci-tools"},"CI environments"),". Kode berikut digunakan untuk mendeteksi enviroment CI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"',title:'"https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"'},"exports.isCI = !!(\n  env.CI || // Travis CI, CircleCI, Cirrus CI, GitLab CI, Appveyor, CodeShip, dsari\n  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI\n  env.BUILD_NUMBER || // Jenkins, TeamCity\n  env.RUN_ID || // TaskCluster, dsari\n  exports.name ||\n  false\n)\n")),(0,i.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Untuk stdout TTY: ",(0,i.kt)("strong",{parentName:"li"},"default")),(0,i.kt)("li",{parentName:"ul"},"Untuk stdout bukan TTY: ",(0,i.kt)("strong",{parentName:"li"},"append-only")))),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"default"),", ",(0,i.kt)("strong",{parentName:"li"},"append-only"),", ",(0,i.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,i.kt)("strong",{parentName:"li"},"silent"))),(0,i.kt)("p",null,"Memungkinkan Anda untuk memilih reporter yang akan mencatat log debug ke terminal tentang kemajuan instalasi."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"silent")," - no output is logged to the console, not even fatal errors"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default"),", pelapor asali ketika stdout-nya adalah TTY"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"append-only")," - the output is always appended to the end. Tidak ada manipulasi kursor yang dilakukan"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ndjson"),", pelapor yang ",(0,i.kt)("em",{parentName:"li"},"verbose")," (menampilkan keluaran yang lebih rinci). Menampilkan semua log dalam format ",(0,i.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson"))),(0,i.kt)("p",null,"If you want to change what type of information is printed, use the ",(0,i.kt)("a",{parentName:"p",href:"/id/next/npmrc#loglevel"},"loglevel")," setting."),(0,i.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Memulai sebuah server penyimpanan di latar belakang. Peladen store akan tetap berjalan bahkan setelah instalasi selesai. Untuk memberhentikan peladen store, jalankan ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,i.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Membuat struktur ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," datar, mirip dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,i.kt)("strong",{parentName:"p"},"PERINGATAN"),": Ini sangat tidak dianjurkan."),(0,i.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asali: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Tipe: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Jangan menjalankan skrip apapun yang terdefinisi di dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," proyek dan setiap dependensinya."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/next/filtering"},"Baca lebih lanjut tentang filtering.")),(0,i.kt)("h3",{id:"--resolution-only"},"--resolution-only"),(0,i.kt)("p",null,"Added in: v8.3.0"),(0,i.kt)("p",null,"Re-runs resolution: useful for printing out peer dependency issues."))}c.isMDXComponent=!0},7461:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);