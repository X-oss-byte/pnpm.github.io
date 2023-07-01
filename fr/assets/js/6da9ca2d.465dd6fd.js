"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3306],{9613:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>k});var a=t(9496);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},i=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=u(t),c=s,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return t?a.createElement(k,r(r({ref:n},i),{},{components:t})):a.createElement(k,r({ref:n},i))}));function k(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:s,r[1]=p;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var a=t(1966),s=t(9836),o=(t(9496),t(9613)),r=["components"],p={title:"Flat node_modules n'est pas le seul moyen",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,u={permalink:"/fr/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://translate.pnpm.io/project/pnpm/fr",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"Flat node_modules n'est pas le seul moyen",description:"Les nouveaux utilisateurs de pnpm me posent souvent des questions sur la structure bizarre du dossier node_modules que pnpm cr\xe9\xe9. Pourquoi n'est-il pas plat ? O\xf9 sont toutes les sous-d\xe9pendances ?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 mai 2020",tags:[],readingTime:2.895,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Flat node_modules n'est pas le seul moyen",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"Options de configuration des node_modules avec pnpm",permalink:"/fr/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},i={authorsImageUrls:[void 0]},d=[],m={toc:d},c="wrapper";function k(e){var n=e.components,t=(0,s.Z)(e,r);return(0,o.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Les nouveaux utilisateurs de pnpm me posent souvent des questions sur la structure bizarre du dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," que pnpm cr\xe9\xe9. Pourquoi n'est-il pas plat ? O\xf9 sont toutes les sous-d\xe9pendances ?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Je vais supposer que les lecteurs de cet article sont d\xe9j\xe0 familiers avec les ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," plats cr\xe9\xe9s par npm et Yarn. Si vous ne comprenez pas pourquoi npm 3 a d\xfb commencer \xe0 utiliser ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," en v3, vous pouvez trouver un peu de pr\xe9histoire dans ",(0,o.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Pourquoi devrait-on utiliser pnpm ?"),".")),(0,o.kt)("p",null,"Alors pourquoi les ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," de pnpm sont inhabituels ? Cr\xe9ons deux r\xe9pertoires et \xe9xecutons ",(0,o.kt)("inlineCode",{parentName:"p"},"npm add express")," dans l'un d'eux et ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add express")," dans l'autre. Voil\xe0 ce que vous obtenez dans le ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," du premier r\xe9pertoire:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,o.kt)("p",null,"Vous pouvez voir tout le r\xe9pertoire ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"ici"),"."),(0,o.kt)("p",null,"Et voici ce que vous obtenez dans les ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," cr\xe9\xe9s par pnpm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,o.kt)("p",null,"Vous pouvez v\xe9rifier ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"ici"),"."),(0,o.kt)("p",null,"Alors, o\xf9 sont toues les d\xe9pendances ? Il y a qu'un seul dossier dans les ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," appel\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm")," et il y a un lien symbolique appel\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),". Et bien, nous n'avons install\xe9 que ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),", c'est donc le seul package auquel votre application doit avoir acc\xe8s"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"En savoir plus sur pourquoi la rigueur de pnpm est une bonne chose ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"ici"))),(0,o.kt)("p",null,"Voyons ce qu'il y a \xe0 l'int\xe9rieur d'",(0,o.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n  .modules.yaml\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"express")," n'a pas de ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," ? O\xf9 sont toutes les d\xe9pendances d'",(0,o.kt)("inlineCode",{parentName:"p"},"express")," ?"),(0,o.kt)("p",null,"L'astuce est qu'",(0,o.kt)("inlineCode",{parentName:"p"},"express")," n'est qu'un lien symbolique. Lorsque Node.js r\xe9sout les d\xe9pendances, il utilise leurs emplacements r\xe9els, il ne conserve donc pas les liens symboliques. Mais o\xf9 est l'emplacement r\xe9el d'",(0,o.kt)("inlineCode",{parentName:"p"},"express"),", vous vous demandez ?"),(0,o.kt)("p",null,"Ici: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,o.kt)("p",null,"OK, alors maintenant nous connaissons l'utilit\xe9 du dossier ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm/"),". ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm/")," stocke tous les packages dans une structure de dossiers plats, de sorte que chaque package peut \xeatre trouv\xe9 dans un dossier nomm\xe9 par ce mod\xe8le:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,o.kt)("p",null,"On appelle \xe7a le dossier du stockage virtuel."),(0,o.kt)("p",null,"Cette structure plate \xe9vite les probl\xe8mes de long chemin caus\xe9s par les ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," cr\xe9\xe9s par npm v2 mais maintient les packages isol\xe9s, contrairement aux ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," plats cr\xe9\xe9s par npm v 3, 4, 5, 6 ou bien Yarn v1."),(0,o.kt)("p",null,"Regardons maintenant le r\xe9el emplacement d'",(0,o.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,o.kt)("p",null,"Est-ce une arnaque ? Il manque encore ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," ! La deuxi\xe8me astuce de la structure des ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," de pnpm est que les d\xe9pendances des packages se trouvent au m\xeame niveau de r\xe9pertoire que l'emplacement r\xe9el du package d\xe9pendant. Donc les d\xe9pendances d'",(0,o.kt)("inlineCode",{parentName:"p"},"express")," ne sont pas dans ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," mais dans ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,o.kt)("p",null,"Toutes les d\xe9pendances d'",(0,o.kt)("inlineCode",{parentName:"p"},"express")," sont des liens symboliques vers des dossiers appropri\xe9s dans ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Placer les d\xe9pendances d'",(0,o.kt)("inlineCode",{parentName:"p"},"express")," un niveau sup\xe9rieur permet d'\xe9viter les liens symboliques circulaires."),(0,o.kt)("p",null,"Donc, comme vous pouvez le voir, m\xeame si la structure ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," pnpm semble inhabituelle au premier abord:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"il est compl\xe8tement compatible avec Node.js"),(0,o.kt)("li",{parentName:"ol"},"les packages sont bien regroup\xe9s avec leurs d\xe9pendances")),(0,o.kt)("p",null,"La structure est un peu ",(0,o.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"plus complexe")," pour les packages avec des d\xe9pendances paires mais l'id\xe9e est la m\xeame: utiliser des liens symboliques pour cr\xe9er une imbrication avec une structure de dossier plate."))}k.isMDXComponent=!0}}]);