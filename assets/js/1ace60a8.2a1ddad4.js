"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[185],{7:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(4246),o=t(1670);const a={title:"Quick Tour",sidebar_position:0},i=void 0,r={id:"getting-started/tour",title:"Quick Tour",description:'This page gives a quick overview/scan of "what using Joist looks like". Joist\'s docs dive into these features in more detail, and see Installation for a true "getting started".',source:"@site/docs/getting-started/tour.md",sourceDirName:"getting-started",slug:"/getting-started/tour",permalink:"/docs/getting-started/tour",draft:!1,unlisted:!1,editUrl:"https://github.com/joist-orm/joist-orm/edit/main/docs/docs/getting-started/tour.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Quick Tour",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/getting-started"}},d={},l=[];function c(e){const n={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:['This page gives a quick overview/scan of "what using Joist looks like". Joist\'s docs dive into these features in more detail, and see ',(0,s.jsx)(n.a,{href:"/docs/getting-started",children:"Installation"}),' for a true "getting started".']}),"\n",(0,s.jsxs)(n.p,{children:["With Joist, you start by creating/updating your database schema, using ",(0,s.jsx)(n.code,{children:"node-pg-migrate"})," or whatever migration tool you like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Start your postgres database\ndocker-compose up db --wait\n# Apply the latest migrations\nnpm run migrate\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then invoke Joist's code generation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run joist-codegen\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To automatically get super-clean domain objects created (see ",(0,s.jsx)(n.a,{href:"/docs/goals/code-generation",children:"Code Generation"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// src/entities/Author.ts\nexport class Author extends AuthorCodegen {\n  // ...empty placeholder for your custom methods/business logic...\n}\n\n// src/entities/AuthorCodegen.ts\nexport class AuthorCodegen {\n  // ...all the boilerplate fields & m2o/o2m/m2m relations generated for you...\n  readonly books: Collection<Author, Book> = hasOne(...);\n  get firstName(): string { ... }\n  set firstName(): string { ... }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Joist generates both sides of relations, and will keep them automatically in sync (see ",(0,s.jsx)(n.a,{href:"/docs/modeling/relations",children:"Relations"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const a1 = em.load(Author, "a:1", "books");\n// Create a new book for a1\nconst b1 = new Book(em, { title: "b1", author: a1 });\n// a1.books already has b1 in it, so your view of data is always consistent\nexpect(a1.books.get.includes(b1)).toBe(true);\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can create your own derived relations for common paths in your domain:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class Author extends AuthorCodegen {\n  // Use hasManyThrough for simple paths that include everything\n  readonly reviews: Collection<Author, Review> = hasManyThrough((a) => a.books.reviews);\n  \n  // Use hasManyDerived to do filtering if needed\n  readonly publicReviews: Collection<Author, Review> = hasManyDerived(\n    { books: "reviews" },\n    (a) => a.flatMap(a.books.get).flatMap(b => b.reviews.get).filter(r => r.isPublic)\n  );  \n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or derived fields that will be reactively calculated (and updated in the database) when their dependencies change (see ",(0,s.jsx)(n.a,{href:"/docs/modeling/derived-fields",children:"Derived Fields"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class Author extends AuthorCodegen {\n  readonly numberOfBooks: ReactiveField<Author, number> =\n    hasReactiveField(\n     "numberOfBooks",\n     ["books"],\n     (a) => a.books.get.length,\n    );\n}\n\n// Now we can filter/sort by numberOfBooks in queries b/c its a column in the db\nconst prolificAuthors = await em.find(Author, { numberOfBooks: { gt: 100 } });\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You write validation rules that can be per-field, per-entity or even ",(0,s.jsx)(n.em,{children:"reactive across multiple entities"}),", i.e. in ",(0,s.jsx)(n.code,{children:"Author.ts"})," (see ",(0,s.jsx)(n.a,{href:"/docs/modeling/validation-rules",children:"Validation Rules"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { authorConfig as config } from "./entities";\n\nexport class Author extends AuthorCodegen {}\n\n// Required rules for `NOT NULL` columns are automatically added in AuthorCodegen\n\n// Anytime a book is associated/disassociated to/from this author, run this rule\nconfig.addRule("books", (author) => {\n  if (author.books.get.length > 10) {\n    return "Too many books";\n  }\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You load/save entities via a per-request ",(0,s.jsx)(n.code,{children:"EntityManager"})," that acts as a ",(0,s.jsx)(n.a,{href:"/docs/advanced/unit-of-work",children:"Unit of Work"})," and on ",(0,s.jsx)(n.code,{children:"em.flush"})," will batch any changes made during the current request in an atomic transaction, only after running all validation rules & updating any derived values (see ",(0,s.jsx)(n.a,{href:"/docs/features/entity-manager",children:"Entity Manager"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const a1 = em.load(Author, "a:1");\na1.firstName = "Allen";\na2.lastName = "Zed";\n// Runs validation against all created/updated entities, calls lifecycle hooks,\n// updates derived values, and issues bulk INSERTs/UPDATEs in a transaction\nawait em.flush();\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To avoid tedious ",(0,s.jsx)(n.code,{children:"await"})," / ",(0,s.jsx)(n.code,{children:"Promise.all"}),", you can use deep load a subgraph via populate hints (see ",(0,s.jsx)(n.a,{href:"/docs/goals/load-safe-relations",children:"Load-Safe Relations"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Use 1 await to preload a tree of data\nconst loaded = await a1.populate({\n  books: { reviews: "comments" },\n  publisher: {},\n});\n\n// No more await Promise.all\nloaded.books.get.forEach((book) => {\n  book.reviews.get.forEach((review) => {\n    console.log(review.name);\n  });\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Loading any references or collections within the domain model is guaranteed to be N+1 safe, regardless of where the ",(0,s.jsx)(n.code,{children:"populate"})," / ",(0,s.jsx)(n.code,{children:"load"})," calls happen within the code-path (see ",(0,s.jsx)(n.a,{href:"/docs/goals/avoiding-n-plus-1s",children:"Avoiding N+1 Queries"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["To find entities, you can use an ergonomic ",(0,s.jsx)(n.code,{children:"em.find"}),' API that combines joins and conditions in a single "join literal" (see ',(0,s.jsx)(n.a,{href:"/docs/features/queries-find",children:"Finding Entities"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const books = await em.find(\n  Book,\n  {\n    author: { publisher: { name: "p1" } },\n    status: BookStatus.Published,\n  },\n  { orderBy: { name: "desc" } }\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or if you have complex conditions, you can use dedicated conditions to do cross-table ",(0,s.jsx)(n.code,{children:"AND"}),"s and ",(0,s.jsx)(n.code,{children:"OR"}),"s (also see ",(0,s.jsx)(n.a,{href:"/docs/features/queries-find",children:"Finding Entities"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const [p, b] = aliases(Publisher, Book);\nconst books = await em.find(\n  Book,\n  { as: b, author: { publisher: p } },\n  {\n    conditions: { or: [p.name.eq("p1"), b.status.eq(BookStatus.Published)] },     \n    orderBy: { name: "desc" },\n  }\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"For lower-level, complex queries that do sums, group bys, etc., Joist currently defers to existing query builder libraries like Knex."}),"\n",(0,s.jsxs)(n.p,{children:["You can test all of your behavior with integrated test factories (see ",(0,s.jsx)(n.a,{href:"/docs/testing/test-factories",children:"Test Factories"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import {  newEntityManager } from "./setupTests";\n\ndescribe("Author", () => {\n  it("can have reactive validation rules", async () => {\n    const em = newEntityManager();\n    // Given the book and author start out with acceptable names\n    const a1 = new Author(em, { firstName: "a1" });\n    const b1 = new Book(em, { title: "b1", author: a1 });\n    await em.flush();\n    // When the book name is later changed to collide with the author\n    b1.title = "a1";\n    // Then the validation rule is ran even though it\'s on the author entity\n    await expect(em.flush()).rejects.toThrow(\n        "Validation error: Author:1 A book title cannot be the author\'s firstName",\n    );\n  });\n})\n'})}),"\n",(0,s.jsx)(n.p,{children:'And tweak your factories to provide "valid by default" data to keep your tests succinct:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export function newAuthor(em: EntityManager, opts: FactoryOpts<Author> = {}): DeepNew<Author> {\n  return newTestInstance(em, Author, opts, {\n    // firstName has a unique constraint, so make it unique  \n    firstName: `a${testIndex}`,\n    // Authors should be popular by default, but only in tests, not prod\n    isPopular: true,\n  });\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Finally, Joist has a number of other nifty features, like ",(0,s.jsx)(n.a,{href:"/docs/advanced/tagged-ids",children:"Tagged Ids"}),", automatic handling of ",(0,s.jsx)(n.a,{href:"/docs/advanced/soft-deletes",children:"Soft Deletes"}),", support for ",(0,s.jsx)(n.a,{href:"/docs/advanced/class-table-inheritance",children:"Class Table Inheritance"}),", and more."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1670:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(7378);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);