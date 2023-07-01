"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9068],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var p=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,p,a=function(e,n){if(null==e)return{};var t,p,a={},o=Object.keys(e);for(p=0;p<o.length;p++)t=o[p],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)t=o[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=p.createContext({}),s=function(e){var n=p.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return p.createElement(m.Provider,{value:n},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},c=p.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),i=s(t),c=a,k=i["".concat(m,".").concat(c)]||i[c]||u[c]||o;return t?p.createElement(k,r(r({ref:n},d),{},{components:t})):p.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[i]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return p.createElement.apply(null,r)}return p.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var p=t(1966),a=t(9836),o=(t(9496),t(9613)),r=["components"],l={title:"\ud3c9\ud0c4\ud55c node_modules\uac00 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},m=void 0,s={permalink:"/ko/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://translate.pnpm.io/project/pnpm/ko",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"\ud3c9\ud0c4\ud55c node_modules\uac00 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.",description:"pnpm\uc758 \uc2e0\uaddc \uc0ac\uc6a9\uc790\ub4e4\uc774 pnpm\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 node_modules\uc758 \ud2b9\uc774\ud55c \uad6c\uc870\uc5d0 \ub300\ud574 \uc790\uc8fc \uc9c8\ubb38\ud569\ub2c8\ub2e4. \uc65c \ud50c\ub7ab\uc774 \uc544\ub2cc\uac00\uc694? \ubaa8\ub4e0 \ud558\uc704 \uc758\uc874\uc131\ub4e4\uc740 \uc5b4\ub514\uc5d0 \uc788\ub098\uc694?",date:"2020-05-27T00:00:00.000Z",formattedDate:"2020\ub144 5\uc6d4 27\uc77c",tags:[],readingTime:5.295,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"\ud3c9\ud0c4\ud55c node_modules\uac00 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158",permalink:"/ko/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},d={authorsImageUrls:[void 0]},i=[],u={toc:i},c="wrapper";function k(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)(c,(0,p.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm\uc758 \uc2e0\uaddc \uc0ac\uc6a9\uc790\ub4e4\uc774 pnpm\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uc758 \ud2b9\uc774\ud55c \uad6c\uc870\uc5d0 \ub300\ud574 \uc790\uc8fc \uc9c8\ubb38\ud569\ub2c8\ub2e4. \uc65c \ud50c\ub7ab\uc774 \uc544\ub2cc\uac00\uc694? \ubaa8\ub4e0 \ud558\uc704 \uc758\uc874\uc131\ub4e4\uc740 \uc5b4\ub514\uc5d0 \uc788\ub098\uc694?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc800\ub294 \uc774 \uae30\uc0ac\uc758 \ub3c5\uc790\ub4e4\uc774 npm\uacfc Yarn\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uc5d0 \uc774\ubbf8 \uc775\uc219\ud558\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4. \ub9cc\uc57d npm 3\uc774 \ud50c\ub7ab ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \ub97c \uc0ac\uc6a9\ud558\uc5ec v3 \uc5d0\uc11c \uc2dc\uc791\ud574\uc57c \ud558\ub294 \uc774\uc720\ub97c \uc774\ud574\ud558\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0, ",(0,o.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"\uc5d0\uc11c \uba87 \uac00\uc9c0 \uc0ac\uc804 \ud788\uc2a4\ud1a0\ub9ac\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),".")),(0,o.kt)("p",null,"\uadf8\ub7ec\uba74 \uc65c pnpm\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \ub514\ub809\ud1a0\ub9ac\ub294 \ud2b9\uc774\ud560\uae4c\uc694? \ub450 \uac1c\uc758 \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4e4\uace0 \uadf8 \uc911 \ud558\ub098\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"npm add express")," \uc744 \uc2e4\ud589\ud558\uace0 \ub2e4\ub978 \ud558\ub098\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add express"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uccab \ubc88\uc9f8 \ub514\ub809\ud1a0\ub9ac\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uc5d0\uc11c \uc5bb\uc744 \uc218 \uc788\ub294 \uc0c1\uc704 \ud56d\ubaa9\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,o.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"\uc5ec\uae30"),"\uc5d0\uc11c \uc804\uccb4 \ub514\ub809\ud1a0\ub9ac\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 \uc774\uac83\uc774 pnpm\uc5d0 \uc758\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uc5d0\uc11c \uc5bb\uc740 \ud56d\ubaa9\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,o.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"\uc5ec\uae30"),"\uc5d0\uc11c \uc804\uccb4 \ub514\ub809\ud1a0\ub9ac\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub798\uc11c \ubaa8\ub4e0 \uc758\uc874\uc131\ub4e4\uc740 \uc5b4\ub514\uc5d0 \uc788\uc744\uae4c\uc694? ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \uc5d0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm")," \uc774\ub77c\ub294 \ud558\ub098\uc758 \ud3f4\ub354\ubfd0\uc774\uba70 ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\ub77c\ub294 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub9cc \uc788\uc2b5\ub2c8\ub2e4. \uc74c, \uc6b0\ub9ac\ub294 \uc624\uc9c1 ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\ub9cc \uc124\uce58\ud588\uc73c\ubbc0\ub85c \ub2f9\uc2e0\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uc720\uc77c\ud55c \ud328\ud0a4\uc9c0\uc785\ub2c8\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc65c pnpm\uc758 \uc5c4\uaca9\ud568\uc774 \uc88b\uc740\uc9c0 ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"\uc5ec\uae30"),"\uc11c \uc790\uc138\ud788 \uc77d\uc5b4\ubcf4\uc138\uc694.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\uc548\uc5d0 \ubb34\uc5c7\uc774 \uc788\ub294\uc9c0 \ubd05\uc2dc\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n  .modules.yaml\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"express")," \uc5d0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uac00 \uc5c6\ub124\uc694? ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\uc758 \ubaa8\ub4e0 \uc758\uc874\uc131\ub4e4\uc740 \uc5b4\ub514\uc5d0 \uc788\uc744\uae4c\uc694?"),(0,o.kt)("p",null,"\ud2b8\ub9ad\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\uac00 \ub2e8\uc9c0 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4. Node.js\ub294 \uc758\uc874\uc131\uc744 \ud574\uacb0\ud560 \ub54c, \uc2e4\uc81c \uc704\uce58\ub97c \uc0ac\uc6a9\ud558\ubbc0\ub85c \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub97c \uc720\uc9c0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\uc758 \uc2e4\uc81c \uc704\uce58\uac00 \uc5b4\ub514\ub0d0\uace0 \ub2f9\uc2e0\uc740 \ubb3c\uc5b4\ubcfc \uc218 \uc788\uaca0\uc8e0?"),(0,o.kt)("p",null,"\uc5ec\uae30: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,o.kt)("p",null,"\uc790, \uc774\uc81c \uc6b0\ub9ac\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm/")," \ud3f4\ub354\uc758 \ubaa9\uc801\uc744 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm/")," \ub294 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub97c \ud50c\ub7ab \ud3f4\ub354 \uad6c\uc870\ub85c \uc800\uc7a5\ud558\ubbc0\ub85c \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub294 \ub2e4\uc74c \ud328\ud134\uc73c\ub85c \uc774\ub984\uc774 \uc9c0\uc815\ub41c \ud3f4\ub354\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<\uc774\ub984>@<\ubc84\uc804>/node_modules/<\uc774\ub984>\n")),(0,o.kt)("p",null,"\uc6b0\ub9ac\ub294 \uc774\uac83\uc744 \uac00\uc0c1 \uc800\uc7a5\uc18c \ub514\ub809\ud1a0\ub9ac\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \ud3c9\ud0c4\ud55c \uad6c\uc870\ub294 npm v2\uc5d0 \uc758\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \uc911\ucca9 \ud615\uc2dd\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules ")," \uc5d0\uc11c\uc758 \uae34 \uacbd\ub85c \ubb38\uc81c\ub97c \ud68c\ud53c\ud558\uc9c0\ub9cc, npm v3,4,5,6 \ub610\ub294 Yarn v1\uc5d0 \uc758\ud574 \uc0dd\uc131\ub41c \ud3c9\ud0c4\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"node _modules"),"\uc640\ub294 \ub2ec\ub9ac \ud328\ud0a4\uc9c0\ub97c \uaca9\ub9ac\ub41c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\uc81c ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\uc758 \uc2e4\uc81c \uc704\uce58\ub97c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,o.kt)("p",null,"\uc0ac\uae30\uc77c\uae4c\uc694? ",(0,o.kt)("inlineCode",{parentName:"p"},"node _modules"),"\uac00 \uc5ec\uc804\ud788 \uc5c6\ub124\uc694! pnpm\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \uad6c\uc870\uc758 \ub450 \ubc88\uc9f8 \ud2b8\ub9ad\uc740 \ud328\ud0a4\uc9c0\uc758 \uc758\uc874\uc131\ub4e4\uc774 \uc758\uc874 \ud328\ud0a4\uc9c0\uc758 \uc2e4\uc81c \uc704\uce58\uc640 \ub3d9\uc77c\ud55c \ub514\ub809\ud1a0\ub9ac \ub808\ubca8\uc5d0 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\uc758 \uc758\uc874\uc131\ub4e4\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/"),"\uc5d0 \uc788\ub294 \uac83\uc774 \uc544\ub2c8\ub77c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\uc758 \ubaa8\ub4e0 \uc758\uc874\uc131\ub4e4\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/")," \ub0b4\uc758 \uc801\uc808\ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub300\ud55c \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\uc785\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"\uc758 \uc758\uc874\uc131\ub4e4\uc744 \ud55c \ub2e8\uacc4 \uc704\ub85c \ubc30\uce58\ud558\uba74 \uc21c\ud658 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub97c \ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubcf4\uc2dc\ub2e4\uc2dc\ud53c pnpm\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \uad6c\uc870\uac00 \ucc98\uc74c\uc5d0\ub294 \ud2b9\uc774\ud55c \uac83 \uac19\uc8e0:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Node.js\uc640 \uc644\uc804\ud788 \ud638\ud658\ub429\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\ud328\ud0a4\uc9c0\ub294 \uc758\uc874\uc131\uacfc \ud568\uaed8 \uba4b\uc9c0\uac8c \uadf8\ub8f9\ud654\ub429\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\ud53c\uc5b4 \uc758\uc874\uc131\uc744 \uac00\uc9c4 \ud328\ud0a4\uc9c0\uc758 \uacbd\uc6b0 \uad6c\uc870\uac00 ",(0,o.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"\uc870\uae08 \ub354 \ubcf5\uc7a1"),"\ud558\uc9c0\ub9cc \uc0dd\uac01\uc740 \ub3d9\uc77c\ud569\ub2c8\ub2e4: \ud3c9\ud0c4\ud55c \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub85c \uc911\ucca9\uad6c\uc870\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub97c \uc0ac\uc6a9\ud558\uae30"))}k.isMDXComponent=!0}}]);