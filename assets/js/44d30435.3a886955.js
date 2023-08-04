"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=n(2685),i=(n(7378),n(5318));const l={title:"Partial Update APIs"},o=void 0,r={unversionedId:"features/partial-update-apis",id:"features/partial-update-apis",title:"Partial Update APIs",description:'Joist has built-in support for building "partial update"-style APIs on top of your domain model.',source:"@site/docs/features/partial-update-apis.md",sourceDirName:"features",slug:"/features/partial-update-apis",permalink:"/docs/features/partial-update-apis",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/partial-update-apis.md",tags:[],version:"current",frontMatter:{title:"Partial Update APIs"},sidebar:"tutorialSidebar",previous:{title:"Cascading Deletes",permalink:"/docs/features/cascade-deletes"},next:{title:"Unit of Work",permalink:"/docs/advanced/unit-of-work"}},p={},s=[{value:"Unsetting Fields with <code>null</code> Marker",id:"unsetting-fields-with-null-marker",level:2},{value:"Saving Parents with Children",id:"saving-parents-with-children",level:2},{value:"Incremental Collection Updates",id:"incremental-collection-updates",level:2},{value:"Legacy Incremental Collection Updates",id:"legacy-incremental-collection-updates",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Joist has built-in support for building "partial update"-style APIs on top of your domain model.'),(0,i.kt)("p",null,"Partial update APIs, whether they are implemented over REST or GraphQL or GRPC, typically follow the conventions of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A create or update can include only a subset of fields, and any field not included in the subset is left as-is"),(0,i.kt)("li",{parentName:"ul"},"An update can use ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),' as a marker to mean "unset this field"'),(0,i.kt)("li",{parentName:"ul"},"Updating a parent's collection of children can be done incrementally, i.e. w/o knowing the full set of children")),(0,i.kt)("p",null,"Joist has dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.createOrUpdatePartial")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity.setPartial")," APIs to help implement APIs that follow these conventions with as little boilerplate as possible."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These methods are particularly useful for implementing GraphQL APIs, where Joist's normal ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity.set")," methods have TypeScript types that are too strict for GraphQL's looser/less strict type system."),(0,i.kt)("p",{parentName:"admonition"},"For example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"SaveAuthorInput")," ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName")," that is generated by ",(0,i.kt)("a",{parentName:"p",href:"https://graphql-code-generator.com"},"graphql-code-generator")," might be typed as ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName: string | null | undefined")," which does not match Joist's more idiomatic ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.firstName: string | undefined")," typing.")),(0,i.kt)("h2",{id:"unsetting-fields-with-null-marker"},"Unsetting Fields with ",(0,i.kt)("inlineCode",{parentName:"h2"},"null")," Marker"),(0,i.kt)("p",null,"A common pattern for partial-update style APIs is to treat ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," differently, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"{ firstName: null }"),' specifically means "unset the ',(0,i.kt)("inlineCode",{parentName:"p"},"firstName"),' property", while ',(0,i.kt)("inlineCode",{parentName:"p"},"firstName")," being not present (i.e. either ",(0,i.kt)("inlineCode",{parentName:"p"},"{ firstName: undefined }")," or an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),') means "do not change ',(0,i.kt)("inlineCode",{parentName:"p"},"firstName"),'".'),(0,i.kt)("p",null,"As mentioned, in a GraphQL input type this might be typed as ",(0,i.kt)("inlineCode",{parentName:"p"},"SaveAuthorInput")," having a ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName: string | null | undefined")," field."),(0,i.kt)("p",null,"Normally the ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"-ness of input's ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName")," will cause issues with Joist's \"preferred ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),'" convention:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// This is typed as string | null | undefined\nconst { firstName } = saveAuthorInput;\nconst author = em.load(Author, "1");\n// The normal `.set` will not compile\nauthor.set({ firstName });\n}\n')),(0,i.kt)("p",null,"Instead, Joist provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"setPartial")," that allows code to opt-in to the partial-semantic behavior and an RPC layer's potentially-less-strict typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// This is typed as string | null | undefined\nconst { firstName } = saveAuthorInput;\nconst author = em.load(Author, "1");\n// Compiles successfully\nauthor.setPartial({ firstName });\n}\n')),(0,i.kt)("p",null,"Specifically, the semantics of ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity.setPartial")," is that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a required field ",(0,i.kt)("inlineCode",{parentName:"li"},"firstName"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'{ firstName: "foo" }')," will update ",(0,i.kt)("inlineCode",{parentName:"li"},"firstName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ firstName: undefined }")," will do nothing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ firstName: null }")," will cause a validation error b/c ",(0,i.kt)("inlineCode",{parentName:"li"},"firstName")," is required and cannot be ",(0,i.kt)("inlineCode",{parentName:"li"},"null")))),(0,i.kt)("li",{parentName:"ul"},"For an optional field ",(0,i.kt)("inlineCode",{parentName:"li"},"lastName"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'{ lastName: "bar" }')," will update ",(0,i.kt)("inlineCode",{parentName:"li"},"lastName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ lastName: undefined }")," will do nothing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ lastName: null }")," will unset ",(0,i.kt)("inlineCode",{parentName:"li"},"lastName")," (i.e. set it as ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),")"))),(0,i.kt)("li",{parentName:"ul"},"For collections like ",(0,i.kt)("inlineCode",{parentName:"li"},"books"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ books: [b1] }")," will set the collection to ",(0,i.kt)("em",{parentName:"li"},"just")," ",(0,i.kt)("inlineCode",{parentName:"li"},"b1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ books: null }")," will set the collection to ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ books: undefined }")," will do nothing")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.createPartial")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.createOrUpdatePartial")," methods both have these semantics as well."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Arguably, the ideal partial-update type for ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," in this scenario would be:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SaveAuthorInput {\n  firstName: string | undefined;\n  lastName: string | null | undefined;\n}\n")),(0,i.kt)("p",{parentName:"admonition"},"But sometimes it's a challenge to get the RPC framework, e.g. GraphQL in this instance, to generate a type that exactly matches this, which is why Joist offers these more flexible ",(0,i.kt)("inlineCode",{parentName:"p"},"setPartial")," methods.")),(0,i.kt)("h2",{id:"saving-parents-with-children"},"Saving Parents with Children"),(0,i.kt)("p",null,"To save both a parent and multiple potentially-new-or-existing children, Joist provides ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.createOrUpdatePartial"),"."),(0,i.kt)("p",null,"An example usage is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Given some RPC types (in this instance GraphQL)\ninterface SaveAuthorInput {\n  id?: string | null;\n  firstName?: string | null;\n  books?: SaveBookInput[];\n}\ninterface SaveBookInput {\n  id?: string | null;\n  title?: string | null;\n  \n}\n\n// When the client\'s request comes in...\nconst input: SaveAuthorInput = {\n  // Updating author 1\n  id: "a:1",\n  // To have 3 books\n  books: [\n    // And the 1st book is new\n    { title: "new book" },\n    // And the 2nd book already exists but has no changes\n    { id: "b:1" },\n    // And the 3rd book already exists but has a new title \n    { id: "b:2", title: "updated" },\n  ]\n}\n\n// Then we can apply all of those changes via\n// a single call\nawait em.createOrUpdatePartial(Author, input);\n')),(0,i.kt)("p",null,"Admittedly, your RPC/GraphQL API convention for parent/children inputs has to fairly closely follow what Joist's own partial update / ",(0,i.kt)("inlineCode",{parentName:"p"},"createOrUpdatePartial")," convention, but assuming you do so, Joist can reduce a very large amount of CRUD boilerplate in an RPC/GraphQL API."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.create"),", which is synchronous, ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.createOrUpdatePartial")," is async and needs to be ",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"-d because it may require SQL calls to look up existing entities, e.g. the ",(0,i.kt)("inlineCode",{parentName:"p"},"b:1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b:2")," IDs in the above example.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Joist's ",(0,i.kt)("inlineCode",{parentName:"p"},"createOrUpdatePartial")," behavior, while developed independently, is effectively similar Objection.js's ",(0,i.kt)("a",{parentName:"p",href:"https://vincit.github.io/objection.js/guide/query-examples.html#graph-upserts"},(0,i.kt)("inlineCode",{parentName:"a"},"upsertGraph"))," operation.")),(0,i.kt)("h2",{id:"incremental-collection-updates"},"Incremental Collection Updates"),(0,i.kt)("p",null,"Joist's default behavior for any collection set (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity.set"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity.setPartial"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManger.createOrUpdatePartial"),", etc.) is for the collection to be exhaustively set to the new value, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = newAuthor(em);\n// Start out with two books\nauthor.set({ books: [b1, b2] });\n// Later set with a third book\nauthor.set({ books: [b3] });\n// Passes b/c `set` has implicitly removed the 1st two books\nexpect(author.books.get.length).toEqual(1);\n")),(0,i.kt)("p",null,"However, when partially updating entities via an RPC call, it's often convenient to change only a single child of the collection, especially for APIs where the child itself doesn't have a dedicated operation (i.e. saving an invoice line item can only be done via the invoice API)."),(0,i.kt)("p",null,"To support these APIs, ",(0,i.kt)("inlineCode",{parentName:"p"},"setPartial")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"createOrUpdatePartial")," will both opt-in to incremental collection semantics if they detect an extra ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," hint key on the children. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = newAuthor(em);\n// Start out with two books\nauthor.set({ books: [b1, b2] });\n// Later add a third book\nauthor.setPartial({ books: [\n  // And include the `op` hint\n  { op: "include", title: "b3" }\n]});\n// Passes b/c `setPartial` saw `op` and worked incrementally\nexpect(author.books.get.length).toEqual(3);\n')),(0,i.kt)("p",null,"The valid values of an ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," keyword are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'{ op: "delete", id: ... }')," will remove the child and ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityManager.delete")," it for hard deletion"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'{ op: "remove", id: ... }')," will remove the child but not call ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityManager.delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'{ op: "include", id: ... }')," will include (i.e. add if needed, or just update if it already an existing child) the child")),(0,i.kt)("p",null,"If any child has an ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," key, then all children must have an ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," key, to be the most clear/consistent to the caller that incremental semantics are being used.  "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," key is not an actual column stored in your database or domain model, i.e. the ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," entity should not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," field."),(0,i.kt)("p",{parentName:"admonition"},"Instead, ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," can be just an extra key on the RPC/GraphQL input types to specifically driven Joist's incremental collection semantics."),(0,i.kt)("p",{parentName:"admonition"},"The key name ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," was chosen for both succinctness and also low probably of overlapping with real fields in the domain model.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Because incremental semantics are enabled by the presence of an ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," key, if the collection is empty it will fundamentally look like an exhaustive set that clears the collection."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// An empty collection will always clear the books, and can't be\n// treated as a incremental operation\nauthor.setPartial({ books: [] });\n")),(0,i.kt)("p",{parentName:"admonition"},'This means that if a client is trying to optimize its call by sending "only changed children", when no children have been changed then it should not include the child key in the payload at all, to avoid unintentionally clearing the collection.'),(0,i.kt)("p",{parentName:"admonition"},"Technically, Joist currently supports a 4th ",(0,i.kt)("inlineCode",{parentName:"p"},'{ op: "incremental" }'),' keyword that can act as a "fake child" and will be ignored (i.e. not treated as an entity to add/remove from the collection), but will still enable incremental semantics and so avoid the "empty list clears the collection" gotcha.')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you're working in React, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/homebound-team/form-state/"},"form-state")," library has built-in knowledge of Joist's ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," keyword/incremental collection semantics and makes it easy to craft optimized/only-what-changed payloads with a single ",(0,i.kt)("inlineCode",{parentName:"p"},"form.changedValue")," call.")),(0,i.kt)("h2",{id:"legacy-incremental-collection-updates"},"Legacy Incremental Collection Updates"),(0,i.kt)("p",null,"Joist's initial version of incremental updates used separate ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," keys instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"op"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = newAuthor(em);\n// Start out with three books\nauthor.set({ books: [b1, b2, b3] });\n// Then delete b1, remove b2, leave b3 alone, and add b4\nauthor.setPartial({ books: [\n  { id: "b:1", delete: true },\n  { id: "b:2", remove: true },\n  { id: "b:4" },\n]});\n')),(0,i.kt)("p",null,"These are still supported, but are soft-deprecated and the ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," key is preferred going forward."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We moved away from ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," keywords for two reasons:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"They are more likely to overlap with existing fields in the domain model, and"),(0,i.kt)("li",{parentName:"ol"},"It is ergonomically easier for our frontend UI to bind to an always-present ",(0,i.kt)("inlineCode",{parentName:"li"},"op")," key, and just flip its value from ",(0,i.kt)("inlineCode",{parentName:"li"},"include"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"delete")," when the user toggles adding/removing rows, instead of adding/removing entire ",(0,i.kt)("inlineCode",{parentName:"li"},"delete")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"remove")," keys."))))}m.isMDXComponent=!0}}]);