"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8636],{9613:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>c});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(a),m=r,c=s["".concat(o,".").concat(m)]||s[m]||k[m]||i;return a?t.createElement(c,l(l({ref:n},u),{},{components:a})):t.createElement(c,l({ref:n},u))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7852:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>d,toc:()=>s});var t=a(1966),r=a(9836),i=(a(9496),a(9613)),l=["components"],p={id:"audit",title:"pnpm audit"},o=void 0,d={unversionedId:"cli/audit",id:"version-7.x/cli/audit",title:"pnpm audit",description:"Cek untuk masalah keamanan yang diketahui dengan paket-paket yang telah terpasang.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/id/7.x/cli/audit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-7.x/docs",previous:{title:"pnpm dedupe",permalink:"/id/7.x/cli/dedupe"},next:{title:"pnpm list",permalink:"/id/7.x/cli/list"}},u={},s=[{value:"Opsi",id:"opsi",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],k={toc:s},m="wrapper";function c(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(m,(0,t.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cek untuk masalah keamanan yang diketahui dengan paket-paket yang telah terpasang."),(0,i.kt)("p",null,"Jika masalah keamanan ditemukan, coba perbarui dependensi Anda melalui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Jika sebuah update sederhana tidak memperbaiki semua masalah, gunakan ",(0,i.kt)("a",{parentName:"p",href:"/id/7.x/package_json#pnpmoverrides"},"overrides")," untuk memaksa versi yang tidak rentan. Misalnya, jika ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash @<2.1.0")," rentan, gunakan overrides untuk memaksa ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Atau sebagai alternatif, jalankan ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,i.kt)("p",null,"Jika anda ingin mentolerir hal ini karena itu tidak berpengaruh ke project, kamu bisa menggunanakan pengaturan ",(0,i.kt)("a",{parentName:"p",href:"/id/7.x/package_json#pnpmauditconfigignorecves"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm.auditConfig.ignoreCves")),"."),(0,i.kt)("h2",{id:"opsi"},"Opsi"),(0,i.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"low"),", ",(0,i.kt)("strong",{parentName:"li"},"moderate"),", ",(0,i.kt)("strong",{parentName:"li"},"high"),", ",(0,i.kt)("strong",{parentName:"li"},"critical")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"low"))),(0,i.kt)("p",null,"Tampilkan saran dengan tingkat keparahan yang lebih besar dari atau sama dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,i.kt)("h3",{id:"--fix"},"--fix"),(0,i.kt)("p",null,"Tambahkan penggantian ke file ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," untuk memaksa versi dependensi yang tidak rentan."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Keluarkan laporan audit dalam format JSON."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Hanya audit dependensi dev."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Hanya audit dependensi production."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Jangan audit ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,i.kt)("p",null,"Jika registri merespons dengan kode status non-200, proses harus keluar dengan 0. Jadi prosesnya akan gagal hanya jika registri benar-benar berhasil merespons dengan kerentanan yang ditemukan."))}c.isMDXComponent=!0}}]);