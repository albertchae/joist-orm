"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8623],{6507:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var t=n(4246),i=n(1670);const a={title:"Large Collections",sidebar_position:4},s=void 0,l={id:"advanced/large-collections",title:"Large Collections",description:"In Joist, large collections are one-to-many collections (like author.books) that would fundamentally load too much data (like a single author having 100k books), such that we want to prevent code from accidentally loading the collection by mistake.",source:"@site/docs/advanced/large-collections.md",sourceDirName:"advanced",slug:"/advanced/large-collections",permalink:"/docs/advanced/large-collections",draft:!1,unlisted:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/advanced/large-collections.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Large Collections",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Entity Cloning",permalink:"/docs/advanced/cloning"},next:{title:"Optimistic Locking",permalink:"/docs/advanced/optimistic-locking"}},c={},r=[];function d(e){const o={code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["In Joist, large collections are one-to-many collections (like ",(0,t.jsx)(o.code,{children:"author.books"}),") that would fundamentally load too much data (like a single author having 100k books), such that we want to prevent code from accidentally loading the collection by mistake."]}),"\n",(0,t.jsxs)(o.p,{children:["Normally, ",(0,t.jsx)(o.code,{children:"joist-codegen"})," automatically generates loadable one-to-many collections in your domain modal. For example, given a ",(0,t.jsx)(o.code,{children:"books.author_id"})," foreign key, your code can immediately do:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:'const author = await em.load(Author, "a:1");\nconst books = await author.books.load();\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Or use ",(0,t.jsx)(o.code,{children:"books"})," in a load hint:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:'const author = await em.load(Author, "a:1", "books");\nconsole.log(author.books.get);\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Both of which will load/preload the full ",(0,t.jsx)(o.code,{children:"author.books"})," collection into memory for easy access."]}),"\n",(0,t.jsxs)(o.p,{children:["Usually this is great, ",(0,t.jsx)(o.em,{children:"unless"})," we know when designing the schema that ",(0,t.jsx)(o.code,{children:"author.books.load()"})," is fundamentally likely to pull in too much data and blow our up ",(0,t.jsx)(o.code,{children:"EntityManager"}),"'s entity limit (which is 10,000 entities by default)."]}),"\n",(0,t.jsxs)(o.p,{children:["In this scenario, we can tell Joist to treat ",(0,t.jsx)(o.code,{children:"books"})," as a large collection, by setting ",(0,t.jsx)(o.code,{children:"large: true"})," in the ",(0,t.jsx)(o.code,{children:"joist-config.json"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "entities": {\n    "Author": {\n      "relations": {\n        "books": { "large": true }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Now, ",(0,t.jsx)(o.code,{children:"joist-codegen"})," still generates an ",(0,t.jsx)(o.code,{children:"Author.books"})," property, however it will be typed as a ",(0,t.jsx)(o.code,{children:"LargeCollection"})," which:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Does not have a ",(0,t.jsx)(o.code,{children:".load()"})," method, and"]}),"\n",(0,t.jsx)(o.li,{children:"Cannot be used in a load hint"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:['Both of which prevent the collection from accidentally being fully loaded into memory, and prevents developers from having to "just know" not to load ',(0,t.jsx)(o.code,{children:"author.books"})," while writing business logic."]}),"\n",(0,t.jsxs)(o.p,{children:["Instead, the ",(0,t.jsx)(o.code,{children:"LargeCollection"})," relation only supports a few known-safe methods that work without fully loading it into memory:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:'const author = await em.load(Author, "a:1");\nconst b1 = await em.load(Book, "b:1");\n\n// Adding/removing the book\nauthor.books.add(b1);\nauthor.books.remove(b1);\n\n// Probing if `b1` is in `author.books`\nawait author.books.includes(b1);\n\n// Probing if `bookId` is in `author.books`\nconst b2 = await author.books.find(bookId);\n'})})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1670:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>s});var t=n(7378);const i={},a=t.createContext(i);function s(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);