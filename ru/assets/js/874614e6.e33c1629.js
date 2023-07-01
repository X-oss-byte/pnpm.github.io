"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6337],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(t),c=o,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(k,p(p({ref:n},m),{},{components:t})):a.createElement(k,p({ref:n},m))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<r;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=t(1966),o=t(9836),r=(t(9496),t(9613)),p=["components"],l={title:"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},s=void 0,i={permalink:"/ru/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://translate.pnpm.io/project/pnpm/ru",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",description:"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 node_modules \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 \u043c\u0430\u044f 2020 \u0433.",tags:[],readingTime:2.625,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"Node-Modules configuration options with pnpm",permalink:"/ru/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},m={authorsImageUrls:[void 0]},d=[],u={toc:d},c="wrapper";function k(e){var n=e.components,t=(0,o.Z)(e,p);return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u042f \u043f\u0440\u0438\u043d\u044f\u043b \u0441\u0447\u0438\u0442\u0430\u0442\u044c, \u0447\u0442\u043e \u0447\u0438\u0442\u0430\u0442\u0435\u043b\u0438 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0438 \u0443\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u0437\u043d\u0430\u043a\u043e\u043c\u044b \u0441 \u043f\u043b\u043e\u0441\u043a\u043e\u0439 \u043f\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u043f\u0430\u043f\u043a\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0439 npm \u0438 Yarn. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0435, \u043f\u043e\u0447\u0435\u043c\u0443 \u0432 npm \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0442\u0440\u0435\u0442\u044c\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043d\u0430\u0447\u0430\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043b\u043e\u0441\u043a\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u0440\u0435\u0434\u044b\u0441\u0442\u043e\u0440\u0438\u044e \u0432 ",(0,r.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm?"),".")),(0,r.kt)("p",null,"\u0422\u0430\u043a \u0447\u0435\u043c \u0436\u0435 \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u0430 \u043f\u0430\u043f\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u0432 pnpm? \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0434\u0432\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm add express")," \u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 \u043d\u0438\u0445, \u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add express")," \u0432 \u0434\u0440\u0443\u0433\u043e\u043c. \u0412\u043e\u0442 \u0432\u0435\u0440\u0445\u043d\u044f\u044f \u0447\u0430\u0441\u0442\u044c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u0432 \u043f\u0435\u0440\u0432\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0441\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"\u0437\u0434\u0435\u0441\u044c"),"."),(0,r.kt)("p",null,"\u0410 \u0432\u043e\u0442 \u0447\u0442\u043e \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u044d\u0442\u043e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"\u0437\u0434\u0435\u0441\u044c"),"."),(0,r.kt)("p",null,"\u0422\u0430\u043a \u0433\u0434\u0435 \u0436\u0435 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438? \u0412 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u0435\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0430 \u043f\u0430\u043f\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm")," \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),". \u0427\u0442\u043e \u0436, \u043c\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", \u0442\u0430\u043a \u0447\u0442\u043e \u044d\u0442\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u043e \u0442\u043e\u043c, \u043f\u043e\u0447\u0435\u043c\u0443 \u0441\u0442\u0440\u043e\u0433\u043e\u0441\u0442\u044c pnpm \u2014 \u044d\u0442\u043e \u0445\u043e\u0440\u043e\u0448\u043e ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"\u0437\u0434\u0435\u0441\u044c"))),(0,r.kt)("p",null,"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c, \u0447\u0442\u043e \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n  .modules.yaml\n")),(0,r.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u044d\u043a\u0441\u043f\u0440\u0435\u0441\u0441")," \u043d\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"? \u0413\u0434\u0435 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),"?"),(0,r.kt)("p",null,"\u0414\u0435\u043b\u043e \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u2014 \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430. When Node.js resolves dependencies, it uses their real locations, so it does not preserve symlinks. But where is the real location of ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", you might ask?"),(0,r.kt)("p",null,"Here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,r.kt)("p",null,"OK, so now we know the purpose of the ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," folder. ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," stores all the packages in a flat folder structure, so every package can be found in a folder named by this pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,r.kt)("p",null,"We call it the virtual store directory."),(0,r.kt)("p",null,"This flat structure avoids the long path issues that were caused by the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," created by npm v2 but keeps packages isolated unlike the flat ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," created by npm v3,4,5,6 or Yarn v1."),(0,r.kt)("p",null,"Now let's look into the real location of ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,r.kt)("p",null,"Is it a scam? It still lacks ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"! The second trick of pnpm's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure is that the dependencies of packages are on the same directory level on which the real location of the dependent package. So dependencies of ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," are not in ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," but in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,r.kt)("p",null,"All the dependencies of ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," are symlinks to appropriate directories in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Placing dependencies of ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," one level up allows avoiding circular symlinks."),(0,r.kt)("p",null,"So as you can see, even though pnpm's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure seems unusual at first:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"it is completely Node.js compatible"),(0,r.kt)("li",{parentName:"ol"},"\u043f\u0430\u043a\u0435\u0442\u044b \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u043c\u0438")),(0,r.kt)("p",null,"The structure is a little bit ",(0,r.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"more complex")," for packages with peer dependencies but the idea is the same: using symlinks to create a nesting with a flat directory structure."))}k.isMDXComponent=!0}}]);