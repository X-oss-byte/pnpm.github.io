"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45],{1290:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(9836),l=a(9496),n=a(5924),i=a(3220),o=a(8709),s=a(4982),m=a(9187);const c={sidebar:"sidebar_pCHW",sidebarItemTitle:"sidebarItemTitle_JQVx",sidebarItemList:"sidebarItemList_z5Cd",sidebarItem:"sidebarItem_ubWi",sidebarItemLink:"sidebarItemLink_C1cL",sidebarItemLinkActive:"sidebarItemLinkActive_mZ6Q"};function u(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(c.sidebarItemList,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title))})))))}var d=a(8804);function g(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function v(e){return l.createElement(d.Zo,{component:g,props:e})}function h(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(v,{sidebar:t}):l.createElement(u,{sidebar:t}):null}var p=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,p),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},8033:(e,t,a)=>{a.d(t,{Z:()=>A});var r=a(9496),l=a(5924),n=a(2545),i=a(677);function o(e){var t,a=e.children,l=e.className,o=(0,n.C)(),s=o.frontMatter,m=o.assets,c=(0,i.C)().withBaseUrl,u=null!=(t=m.image)?t:s.image;return r.createElement("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&r.createElement("meta",{itemProp:"image",content:c(u,{absolute:!0})}),a)}var s=a(4982);const m={title:"title_RJHB"};function c(e){var t=e.className,a=(0,n.C)(),i=a.metadata,o=a.isBlogPostPage,c=i.permalink,u=i.title,d=o?"h1":"h2";return r.createElement(d,{className:(0,l.Z)(m.title,t),itemProp:"headline"},o?u:r.createElement(s.Z,{itemProp:"url",to:c},u))}var u=a(9187),d=a(9172);const g={container:"container_zCGu"};function v(e){var t,a=e.readingTime,l=(t=(0,d.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,l(a))}function h(e){var t=e.date,a=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function p(){return r.createElement(r.Fragment,null," \xb7 ")}function E(e){var t=e.className,a=(0,n.C)().metadata,i=a.date,o=a.formattedDate,s=a.readingTime;return r.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",t)},r.createElement(h,{date:i,formattedDate:o}),void 0!==s&&r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement(v,{readingTime:s})))}function b(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function f(e){var t=e.author,a=e.className,n=t.name,i=t.title,o=t.url,s=t.imageURL,m=t.email,c=o||m&&"mailto:"+m||void 0;return r.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},s&&r.createElement(b,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),i&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N={authorCol:"authorCol_DmgG",imageOnlyAuthorRow:"imageOnlyAuthorRow_Tzfe",imageOnlyAuthorCol:"imageOnlyAuthorCol_obua"};function _(e){var t=e.className,a=(0,n.C)(),i=a.metadata.authors,o=a.assets;if(0===i.length)return null;var s=i.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?N.imageOnlyAuthorRow:"row",t)},i.map((function(e,t){var a;return r.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?N.imageOnlyAuthorCol:N.authorCol),key:t},r.createElement(f,{author:Object.assign({},e,{imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL})}))})))}function P(){return r.createElement("header",null,r.createElement(c,null),r.createElement(E,null),r.createElement(_,null))}var Z=a(2680),k=a(7270);function C(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage;return r.createElement("div",{id:i?Z.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},r.createElement(k.Z,null,t))}var T=a(1667),I=a(5014),w=a(1966),L=a(9836),y=["blogPostTitle"];function F(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function R(e){var t=e.blogPostTitle,a=(0,L.Z)(e,y);return r.createElement(s.Z,(0,w.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(F,null))}const B={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_s3wJ"};function x(){var e=(0,n.C)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,o=t.title,s=t.editUrl,m=t.hasTruncateMarker,c=!a&&m,u=i.length>0;return u||c||s?r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",a&&B.blogPostFooterDetailsFull)},u&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},r.createElement(I.Z,{tags:i})),a&&s&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(T.Z,{editUrl:s})),c&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":u})},r.createElement(R,{blogPostTitle:o,to:t.permalink}))):null}function A(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return r.createElement(o,{className:(0,l.Z)(i,a)},r.createElement(P,null),r.createElement(C,null,t),r.createElement(x,null))}},1667:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(9496),l=a(9187),n=a(3987),i=a(1966),o=a(9836),s=a(5924);const m={iconEdit:"iconEdit_mu1i"};var c=["className"];function u(e){var t=e.className,a=(0,o.Z)(e,c);return r.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m.iconEdit,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:n.k.common.editThisPage},r.createElement(u,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4947:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(9496),l=a(5924),n=a(4982);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return r.createElement(n.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},a))}},5014:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(9496),l=a(5924),n=a(9187),i=a(4982);const o={tag:"tag_dsT9",tagRegular:"tagRegular_S8DR",tagWithCount:"tagWithCount_H5gm"};function s(e){var t=e.permalink,a=e.label,n=e.count;return r.createElement(i.Z,{href:t,className:(0,l.Z)(o.tag,n?o.tagWithCount:o.tagRegular)},a,n&&r.createElement("span",null,n))}const m={tags:"tags_s874",tag:"tag_MJCD"};function c(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(m.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m.tag},r.createElement(s,{label:t,permalink:a}))}))))}},2545:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var r=a(9496),l=a(9179),n=r.createContext(null);function i(e){var t=e.children,a=e.content,l=e.isBlogPostPage,i=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==l&&l});return r.createElement(n.Provider,{value:i},t)}function o(){var e=(0,r.useContext)(n);if(null===e)throw new l.i6("BlogPostProvider");return e}},9172:(e,t,a)=>{a.d(t,{c:()=>m});var r=a(9496),l=a(275),n=["zero","one","two","few","many","other"];function i(e){return n.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);