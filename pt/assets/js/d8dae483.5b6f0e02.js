"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9286],{9613:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return t?a.createElement(g,r(r({ref:n},l),{},{components:t})):a.createElement(g,r({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(1966),o=t(9836),s=(t(9496),t(9613)),r=["components"],i={id:"using-changesets",title:"Usando Changesets com pnpm"},p=void 0,c={unversionedId:"using-changesets",id:"version-7.x/using-changesets",title:"Usando Changesets com pnpm",description:"No momento da reda\xe7\xe3o desta documenta\xe7\xe3o, a vers\xe3o mais recente do pnpm era v6.14. A vers\xe3o mais recente do Changesets era v2.16.0.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/pt/7.x/using-changesets",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"using-changesets",title:"Usando Changesets com pnpm"},sidebar:"version-7.x/docs",previous:{title:"Completar linha de comando utilizando tab",permalink:"/pt/7.x/completion"},next:{title:"Integra\xe7\xe3o Cont\xednua",permalink:"/pt/7.x/continuous-integration"}},l={},u=[{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:2},{value:"Adicionando novos changesets",id:"adicionando-novos-changesets",level:2},{value:"Publicando changesets",id:"publicando-changesets",level:2},{value:"Usando GitHub Actions",id:"usando-github-actions",level:2},{value:"Atualizando as vers\xf5es do pacote",id:"atualizando-as-vers\xf5es-do-pacote",level:3},{value:"Publicando",id:"publicando",level:3}],d={toc:u},m="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,r);return(0,s.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"No momento da reda\xe7\xe3o desta documenta\xe7\xe3o, a vers\xe3o mais recente do pnpm era v6.14. A vers\xe3o mais recente do ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," era v2.16.0.")),(0,s.kt)("h2",{id:"configura\xe7\xe3o"},"Configura\xe7\xe3o"),(0,s.kt)("p",null,"Para configurar o changesets num ambiente pnpm, instale ",(0,s.kt)("inlineCode",{parentName:"p"},"changesets")," como uma depend\xeancia de desenvolvimento na raiz do ambiente:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -Dw @changesets/cli\n")),(0,s.kt)("p",null,"Em seguida, o comando de inicializa\xe7\xe3o do changesets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,s.kt)("h2",{id:"adicionando-novos-changesets"},"Adicionando novos changesets"),(0,s.kt)("p",null,"Para gerar um novo changeset, execute ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm changeset")," na raiz do reposit\xf3rio. Os arquivos markdown gerados no diret\xf3rio ",(0,s.kt)("inlineCode",{parentName:"p"},".changeset")," devem ser commitados no reposit\xf3rio."),(0,s.kt)("h2",{id:"publicando-changesets"},"Publicando changesets"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Execute ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm changeset version"),". Isso ir\xe1 incrementar as vers\xf5es dos pacotes previamente especificados com ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," (e quaisquer depend\xeancias dos mesmos) e atualizar os arquivos de changelog."),(0,s.kt)("li",{parentName:"ol"},"Execute ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm install"),". Isto ir\xe1 atualizar o lockfile e reconstruir pacotes."),(0,s.kt)("li",{parentName:"ol"},"Fa\xe7a um commit das altera\xe7\xf5es."),(0,s.kt)("li",{parentName:"ol"},"Execute ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". Esse comando ir\xe1 publicar todos os pacotes que possuem vers\xf5es com colis\xe3o ainda n\xe3o presentes no registro.")),(0,s.kt)("h2",{id:"usando-github-actions"},"Usando GitHub Actions"),(0,s.kt)("p",null,"Para automatizar o processo, voc\xea pode usar a ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version")," com GitHub Actions."),(0,s.kt)("h3",{id:"atualizando-as-vers\xf5es-do-pacote"},"Atualizando as vers\xf5es do pacote"),(0,s.kt)("p",null,"A a\xe7\xe3o detectar\xe1 quando arquivos de changeset chegarem na branch ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," e, em seguida, abrir\xe1 um novo Pull Request listando todos os pacotes com vers\xf5es alteradas. Uma vez mesclados, os pacotes ser\xe3o atualizados e voc\xea poder\xe1 decidir se deseja publicar ou n\xe3o adicionando a propriedade ",(0,s.kt)("inlineCode",{parentName:"p"},"publish"),"."),(0,s.kt)("h3",{id:"publicando"},"Publicando"),(0,s.kt)("p",null,"Adicione um novo script ",(0,s.kt)("inlineCode",{parentName:"p"},"ci:publish")," que executa ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm publish -r"),". Assim quando for feito o merge da PR criada pelo comando ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version")," o pacote ser\xe1 publicado no registry."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"package.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n      "ci:publish": "pnpm publish -r"\n   },\n   ...\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@v1\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,s.kt)("p",null,"Mais informa\xe7\xf5es e documenta\xe7\xe3o sobre essa a\xe7\xe3o podem ser encontradas ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"aqui"),"."))}g.isMDXComponent=!0}}]);