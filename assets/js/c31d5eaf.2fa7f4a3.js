"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[939],{118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4246),i=n(1670);const o={title:"Test Factories",sidebar_position:0},a=void 0,r={id:"testing/test-factories",title:"Test Factories",description:"Joist generates customizable factories for easily creating test data, i.e. a test can easily create any entity, with all its required fields & dependencies transitively filled in, with a single line:",source:"@site/docs/testing/test-factories.md",sourceDirName:"testing",slug:"/testing/test-factories",permalink:"/docs/testing/test-factories",draft:!1,unlisted:!1,editUrl:"https://github.com/joist-orm/joist-orm/edit/main/docs/docs/testing/test-factories.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Test Factories",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"Fast Database Resets",permalink:"/docs/testing/fast-database-resets"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Defaults for Primitives",id:"defaults-for-primitives",level:3},{value:"Unique Strings",id:"unique-strings",level:3},{value:"Defaults for References",id:"defaults-for-references",level:3},{value:"Reusing Existing Entities",id:"reusing-existing-entities",level:3},{value:"Forcing New Entities",id:"forcing-new-entities",level:4},{value:"Reusing Entities With <code>use</code>",id:"reusing-entities-with-use",level:4},{value:"Defaults for Collections",id:"defaults-for-collections",level:3},{value:"Custom Opts",id:"custom-opts",level:3},{value:"Disabling Factory Defaults",id:"disabling-factory-defaults",level:3},{value:"DeepNew / <code>async</code> Free Assertions",id:"deepnew--async-free-assertions",level:2},{value:"Singletons with the <code>useExisting</code> option",id:"singletons-with-the-useexisting-option",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Joist generates customizable factories for easily creating test data, i.e. a test can easily create any entity, with all its required fields & dependencies transitively filled in, with a single line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Given an author...\nconst a = newAuthor(em);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The approach is very similar to generic test factory tools like ",(0,s.jsx)(t.a,{href:"https://github.com/thoughtbot/fishery",children:"Fishery"}),", but with deep/native integration with Joist."]}),"\n",(0,s.jsx)(t.p,{children:'The goal of test factories are to provide tests (and only tests!) with "valid by default" instances of entities, so that each test can focus solely on the state/behavior that is unique to its boundary case.'}),"\n",(0,s.jsxs)(t.p,{children:["Joist also fundamentally assumes the database is reset between each test (see ",(0,s.jsx)(t.a,{href:"/docs/testing/fast-database-resets",children:"Fast Database Resets"}),"), and so allowing tests to succinctly create the entire graph of entities they need is a key part of Joist's developer experience."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Note that Joist's factories are ",(0,s.jsx)(t.strong,{children:"not intended to be used in production code"}),"; they are only for quickly creating synthetic data in unit tests."]})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["For example, given a ",(0,s.jsx)(t.code,{children:"Book"})," entity, Joist creates an initial ",(0,s.jsx)(t.code,{children:"newBook.ts"})," file that looks like:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { EntityManager, FactoryOpts, New, newTestInstance } from "joist-orm";\nimport { Book } from "../entities";\n\nexport function newBook(em: EntityManager, opts: FactoryOpts<Book> = {}): New<Book> {\n  return newTestInstance(em, Book, opts, {});\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Tests can then call ",(0,s.jsx)(t.code,{children:"newBook"})," with as few opts as they want, and all required fields (for both primitives and relations) will be filled in."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, since ",(0,s.jsx)(t.code,{children:"book.author_id"})," is a not-null column, calling ",(0,s.jsx)(t.code,{children:"const b1 = newBook()"})," will create both a ",(0,s.jsx)(t.code,{children:"Book"})," with a ",(0,s.jsx)(t.code,{children:"title"})," (required primitive field) as well as create a new ",(0,s.jsx)(t.code,{children:"Author"})," (required foreign key/many-to-one field) and assign it to ",(0,s.jsx)(t.code,{children:"b1.author"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'const b = newBook(em);\nexpect(b.title).toEqual("title");\nexpect(b.author.get.firstName).toEqual("firstName");\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This creation is recursive, i.e. ",(0,s.jsx)(t.code,{children:"newBookReview()"})," will make a new ",(0,s.jsx)(t.code,{children:"BookReview"}),", a new ",(0,s.jsx)(t.code,{children:"Book"})," (required for ",(0,s.jsx)(t.code,{children:"bookReview.book"}),"), and a new ",(0,s.jsx)(t.code,{children:"Author"})," (required for ",(0,s.jsx)(t.code,{children:"book.author"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"Importantly, you can also pass partials for either the book or the author:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Given a book by the author "a1"\nconst b = newBook(em, { author: { firstName: "a1" } });\n// Then we got the default title\nexpect(b.title).toEqual("title");\n// And "a1" was used as the author\'s firstName\nexpect(b.author.get.firstName).toEqual("a1");\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This is key so that your tests can ",(0,s.jsx)(t.strong,{children:"set only the minimum amount of fields necessary to specify their boundary case"}),", and defer to the factories for any other irrelevant boilerplate."]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.h3,{id:"defaults-for-primitives",children:"Defaults for Primitives"}),"\n",(0,s.jsx)(t.p,{children:"Factories can provide test suite-wide defaults, for example providing a default age:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// Default Authors (only within tests) to age 40\nexport function newAuthor(\n  em: EntityManager,\n  opts: FactoryOpts<Author> = {},\n): DeepNew<Author> {\n  return newTestInstance(em, Author, opts, {\n    age: 40,\n  });\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["And then every ",(0,s.jsx)(t.code,{children:"newAuthor"})," will have an ",(0,s.jsx)(t.code,{children:"age"})," of 40, unless a test specifically requires a different age:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// Given an author that is 30\nconst a = newAuthor(em, { age: 30 });\n// Then we didn't use the default age\nexpect(a.age).toEqual(30);\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"This can be particularly helpful when you're adding a new field to an existing entity, and want all tests to have a default value for the new field, without updating every individual test."})}),"\n",(0,s.jsx)(t.h3,{id:"unique-strings",children:"Unique Strings"}),"\n",(0,s.jsxs)(t.p,{children:["If you have a field that must be unique, like ",(0,s.jsx)(t.code,{children:"name"})," with a database-enforce ",(0,s.jsx)(t.code,{children:"UNIQUE"})," constraint, you can use the ",(0,s.jsx)(t.code,{children:"testIndex"})," helper to automatically create unique-but-deterministic values:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { testIndex } from "joist-orm";\n\nexport function newBook(em: EntityManager, opts: FactoryOpts<Book> = {}): New<Book> {\n  return newTestInstance(em, Book, opts, {\n    // Make a unique name, `testIndex` will be 1/2/etc increasing and reset per-test\n    title: `b${testIndex}`,\n  });\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"defaults-for-references",children:"Defaults for References"}),"\n",(0,s.jsx)(t.p,{children:"Factories can also provide default entities, for example a book creating a default author:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export function newBook(em: EntityManager, opts: FactoryOpts<Book> = {}): New<Book> {\n  return newTestInstance(em, Book, opts, {\n    author: {},\n  });\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that, if ",(0,s.jsx)(t.code,{children:"author"})," was required, we would not have to explicitly pass ",(0,s.jsx)(t.code,{children:"author: {}"}),"; we'd only pass ",(0,s.jsx)(t.code,{children:"author"})," to ",(0,s.jsx)(t.code,{children:"newTestInstance"})," if:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"author"})," field is not required, but we want all test ",(0,s.jsx)(t.code,{children:"Book"}),"s to have one anyway"]}),"\n",(0,s.jsxs)(t.li,{children:["We want all ",(0,s.jsx)(t.code,{children:"Book"}),"s' authors to themselves have some specific defaults, like ",(0,s.jsx)(t.code,{children:"author: { age: 30 }"}),","]}),"\n",(0,s.jsxs)(t.li,{children:["We want to explicitly create a ",(0,s.jsx)(t.em,{children:"new"})," author (see the next point)"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"reusing-existing-entities",children:"Reusing Existing Entities"}),"\n",(0,s.jsx)(t.p,{children:'When factories need to set a relation field, they will first look for an "obvious default" entity before creating a new entity.'}),"\n",(0,s.jsxs)(t.p,{children:['This is useful for stitching together complex schemas, because it means validation rules like "a ',(0,s.jsx)(t.code,{children:"BookReview"})," must have the same ",(0,s.jsx)(t.code,{children:"bookReview.author"})," as its ",(0,s.jsx)(t.code,{children:"bookReview.author.book"}),'" (pretending that ',(0,s.jsx)(t.code,{children:"BookReview"})," had its own ",(0,s.jsx)(t.code,{children:"author"}),' field) will pass "for free" because we don\'t "sprawl out" and continually create new/unnecessary entities.']}),"\n",(0,s.jsxs)(t.p,{children:["That said, Joist will only reuse an entity if there is a ",(0,s.jsx)(t.em,{children:"single"})," instance of that entity."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Given we have a single author\nconst a = newAuthor(em);\n// Then newBook will see "there is only 1 author" and assume we want that one\nconst b = newBook(em);\nexpect(b.author.get).toEqual(a);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["If there are multiple ",(0,s.jsx)(t.code,{children:"Author"}),"s created in the test, Joist sees it as ambiguous which one it should use, and so creates a new ",(0,s.jsx)(t.code,{children:"Author"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Given we have two existing Authors\nconst [a1, a2] = [newAuthor(em), newAuthor(em)];\n// Then newBook will create a 3rd Author\nconst b = newBook(em);\nexpect(b.author.get.name).toEqual("a3");\n'})}),"\n",(0,s.jsx)(t.h4,{id:"forcing-new-entities",children:"Forcing New Entities"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to a specific field to never reuse existing entities, you can use ",(0,s.jsx)(t.code,{children:"{}"}),' as a marker for "always create a new entity":']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export function newBook(em: EntityManager, opts: FactoryOpts<Book> = {}): New<Book> {\n  return newTestInstance(em, Book, opts, {\n    author: {},\n  });\n}\n"})}),"\n",(0,s.jsxs)(t.h4,{id:"reusing-entities-with-use",children:["Reusing Entities With ",(0,s.jsx)(t.code,{children:"use"})]}),"\n",(0,s.jsxs)(t.p,{children:["As covered, if your test has already created multiple entities of a given type (e.g. multiple ",(0,s.jsx)(t.code,{children:"Author"}),'s), Joist will not use them as "obvious defaults", but if you want to nominate a specific ',(0,s.jsx)(t.code,{children:"Author"})," as the default for a given ",(0,s.jsx)(t.code,{children:"newBookReview"})," call, you can pass the ",(0,s.jsx)(t.code,{children:"use"})," option:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// We have multiple authors\nconst [a1, a2] = [newAuthor(em), newAuthor(em)];\n// Make a new book review, but use a2 instead of creating a new Author\nconst br = newBookReview(em, { use: a2 });\n"})}),"\n",(0,s.jsx)(t.h3,{id:"defaults-for-collections",children:"Defaults for Collections"}),"\n",(0,s.jsxs)(t.p,{children:['If you have validation rules like "all ',(0,s.jsx)(t.code,{children:"Author"}),"s must have at least one ",(0,s.jsx)(t.code,{children:"Book"}),'", the ',(0,s.jsx)(t.code,{children:"newAuthor"})," factory can create valid-by-default ",(0,s.jsx)(t.code,{children:"Author"}),"s by passing ",(0,s.jsx)(t.code,{children:"books: [{}]"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export function newAuthor(em: EntityManager, opts: FactoryOpts<Author> = {}): DeepNew<Author> {\n  return newTestInstance(em, Author, opts, {\n    // Every Author has at least one Book\n    books: [{}],\n  });\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:['Note that, due to the native factory integration, Joist is smart enough that if you create the graph "bottom up" and call ',(0,s.jsx)(t.code,{children:"newBook()"}),", it will be smart enough to know that ",(0,s.jsx)(t.code,{children:"newAuthor"})," should not create a 2nd book:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// Given we create a book\nconst b = newBook(em);\n// Then `newAuthor` was effectively passed `books: [b]` and did not create a 2nd book\nexpect(b.author.get.books.get.length).toBe(1);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"custom-opts",children:"Custom Opts"}),"\n",(0,s.jsxs)(t.p,{children:["Besides just setting existing entity fields, like ",(0,s.jsx)(t.code,{children:"Author.firstName"})," and ",(0,s.jsx)(t.code,{children:"Books.author"}),', Joist\'s factories allow you to declare custom, factory-specific opts so that multiple tests can request the similar "pre-baked" test data from a factory.']}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"In fishery, these are called transient params."})}),"\n",(0,s.jsxs)(t.p,{children:["For example, a test might need to create a somewhat large graph of test data for a business scenario, perhaps a ",(0,s.jsx)(t.code,{children:"Book"})," with a signed contract with a larger publisher (this is not that big, but it's a good example):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Given a book that is signed with a large publisher\nconst b = newBook(em, {\n  author: {\n    contracts: [{ signed: true, publisher: { type: "large" } }],\n  },\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:['If this "create a book ... with an author ... with a contract ... that is signed" is a common requirement for tests, it can be cumbersome to copy/paste this snippet across many tests, and keep it up to date (perhaps ',(0,s.jsx)(t.code,{children:"signed"})," changes from ",(0,s.jsx)(t.code,{children:"true"})," to a ",(0,s.jsx)(t.code,{children:"signedOn"})," timestamp)."]}),"\n",(0,s.jsxs)(t.p,{children:["Instead, Joist's factories allow you to add a custom ",(0,s.jsx)(t.code,{children:"withSignedContract"})," opt to the ",(0,s.jsx)(t.code,{children:"newBook"})," factory:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Add an optional `withSignedContract` opt\nexport function newBook(\n  em: EntityManager,\n  opts: FactoryOpts<Book> & { withSignedContract?: boolean } = {},\n): New<Book> {\n  return newTestInstance(em, Book, opts, {\n    // Conditionally create the snippet when requested\n    ...(opts.withSignedContract ? { author: { contracts: [{ signed: true, publisher: { type: "large" } }] } } : {}),\n  });\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"And now tests can request this behavior for free:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Given we have a book with a signed contract\nconst book = newBook(em, { title: "b1", withSignedContract: true });\n// And it also works if going through BookReview\nconst br = newBookReview(em, { book: { withSignedContract: true } });\n'})}),"\n",(0,s.jsx)(t.p,{children:"In general, we have two recommendations for this feature:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Be careful and don't abuse it; tests are simplest to read when any assertions they have are against data that is specified directly inline in the \"Given\" block; if you've abstracted too much of your test's setup to a custom opt, it will hurt readability."}),"\n",(0,s.jsx)(t.p,{children:"Also, custom opts are a slippery slope to the seed data anti-pattern, where the seed data becomes so large & gnarly (because it's been tweaked over the years to support more and more disparate test cases), that the seed data becomes very brittle and can't be changed without failing a ton of tests."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Use prefixes like ",(0,s.jsx)(t.code,{children:"with"})," and ",(0,s.jsx)(t.code,{children:"and"})," in the names of custom opts, e.g. ",(0,s.jsx)(t.code,{children:"withSignedContract"})," or ",(0,s.jsx)(t.code,{children:"andSigned"})," to make it clear to readers that the opt is custom to the factory and not actually a regular database/entity field."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"disabling-factory-defaults",children:"Disabling Factory Defaults"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes you'll have a test that wants to opt-out of the defaults provided by a factory."}),"\n",(0,s.jsxs)(t.p,{children:["You can do this by using ",(0,s.jsx)(t.code,{children:"useFactoryDefaults: false"}),", for example if ",(0,s.jsx)(t.code,{children:"newAuthor.ts"})," establishes a default age of 40, you can ignore it by passing ",(0,s.jsx)(t.code,{children:"useFactoryDefaults: false"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// Ignore the default when creating an author\nconst a = newAuthor(em, { useFactoryDefaults: false });\n\n// You can also ignore when creating an author via another factory\nconst br = newBookReview(em, {\n  book: { author: { useFactoryDefaults: false } },\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Setting ",(0,s.jsx)(t.code,{children:"useFactoryDefaults: false"})," ignores the defaults inside of ",(0,s.jsx)(t.code,{children:"newAuthor.ts"}),", ",(0,s.jsx)(t.code,{children:"newBook.ts"}),', etc., but it does not disable Joist\'s fundamental "required fields must always be set" defaults.']}),"\n",(0,s.jsxs)(t.p,{children:["If you want to disable those as well, you can use ",(0,s.jsx)(t.code,{children:'useFactoryDefaults: "none"'}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Ignore all defaults\nconst b = newBook(em, { useFactoryDefaults: "none" });\n// Normally this would be "title", but is left unset\nexpect(b.title).toBeUndefined();\n// Normally this would be a new/existing Author, but is left unset\nexpect(b.author.get).toBeUndefined();\n'})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["If you find yourself regularly using ",(0,s.jsx)(t.code,{children:"useFactoryDefaults"}),", it might be an indication that your factory's defaults are too opinionated, and the factory should do less by default."]}),(0,s.jsx)(t.p,{children:'For example, instead of the factory having "not actually universally required/useful" defaults that frequently need to be turned off, only the tests that actually rely on the sometimes-wanted/sometimes-not-wanted defaults should opt in to them via a dedicated custom opt.'})]}),"\n",(0,s.jsxs)(t.h2,{id:"deepnew--async-free-assertions",children:["DeepNew / ",(0,s.jsx)(t.code,{children:"async"})," Free Assertions"]}),"\n",(0,s.jsxs)(t.p,{children:["In production code, Joist relations must be accessed asynchronously, i.e. either with ",(0,s.jsx)(t.code,{children:"load()"})," calls or ",(0,s.jsx)(t.code,{children:"populate"})," preloads:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Call load directly\nconst b1 = await em.load(Book, "b:1");\nconst a1 = await book.author.load();\n// Use a preload\nconst b2 = await em.load(Book, "b:2", "author");\nconst a2 = book.author.get;\n'})}),"\n",(0,s.jsx)(t.p,{children:'However, because in tests we "just know" there is a) not that much data, and b) the factories control the instantiation of all entities, we can make the assumption that all relations are loaded already.'}),"\n",(0,s.jsxs)(t.p,{children:["So factories return a special ",(0,s.jsx)(t.code,{children:"DeepNew"})," type that marks all relations as loaded:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'it("some test", async () => {\n  const em = newEntityManager();\n  // Given a book\n  const b1 = newBook(em);\n  // When we exercise our production code\n  performSomeBusinessLogic(b1);\n  // Then we can assert against b1.authors w/o an await/load\n  expect(b1.authors.get.length).toBe(1);\n  // And we can assert against the author\'s publisher\n  expect(b1.authors.get[0].publisher.get.name).toBe("p1");\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This capability can dramatically clean up test assertions, by removing the need for ",(0,s.jsx)(t.code,{children:"await"})," and ",(0,s.jsx)(t.code,{children:"load()"})," calls."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Also see Joist's ",(0,s.jsx)(t.a,{href:"/docs/testing/entity-matcher",children:"toMatchEntity"}),", which provides another ergonomic way to assert against entities."]})}),"\n",(0,s.jsxs)(t.h2,{id:"singletons-with-the-useexisting-option",children:["Singletons with the ",(0,s.jsx)(t.code,{children:"useExisting"})," option"]}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes when a test has just called ",(0,s.jsx)(t.code,{children:"newAuthor"}),", we want the factory to realize that, due to unique constraints/business logic specific to ",(0,s.jsx)(t.code,{children:"Author"}),", that the appropriate ",(0,s.jsx)(t.code,{children:"Author"})," instance the test is asking for already exists."]}),"\n",(0,s.jsxs)(t.p,{children:['An example is schemas with "enum-like" or "singleton" entities. Enum-like entities are user-added rows in the database (they are not a true ',(0,s.jsx)(t.code,{children:"enum"}),'), but still have enum-like behavior like "there should be only one of these entities for the given (name, parent, etc.) set of values", potentially backed by database-level unique constrains.']}),"\n",(0,s.jsxs)(t.p,{children:["An example might be a ",(0,s.jsx)(t.code,{children:"PublisherType"})," entity that is effectively unique on a ",(0,s.jsx)(t.code,{children:"name"})," column, where the desired behavior is:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'// Creates a new PublisherType w/name: large\nnewPublisher(em, { type: { name: "large" } });\n// Creates a new PublisherType w/name: small\nnewPublisher(em, { type: { name: "small" } });\n// Should reuse the existing PublisherType w/name: large\nnewPublisher(em, { type: { name: "large" } });\n'})}),"\n",(0,s.jsx)(t.p,{children:'In these situations, you effectively want your factory to "scan existing entities" and look for an entity that matches the test\'s requested opts.'}),"\n",(0,s.jsxs)(t.p,{children:["To do this, you can use the ",(0,s.jsx)(t.code,{children:"useExisting"})," flag on ",(0,s.jsx)(t.code,{children:"newTestInstance"}),", which is a lambda that returns \"does the test's requested opts match this existing ",(0,s.jsx)(t.code,{children:"PublisherType"}),'"?:']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export function newPublisherType(\n  em: EntityManager,\n  opts: FactoryOpts<PublisherType> = {},\n): DeepNew<PublisherType> {\n  return newTestInstance(\n    em,\n    {},\n    { useExisting: (opts, existing) => existing.name === opts.name },\n  );\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The benefit of using ",(0,s.jsx)(t.code,{children:"useExisting"})," is that the ",(0,s.jsx)(t.code,{children:"existing"})," param will already be typed to your given entity type (i.e. ",(0,s.jsx)(t.code,{children:"PublisherType"}),"), and the ",(0,s.jsx)(t.code,{children:"opts"}),' param will be the "post-resolution" opts, i.e. instead of "maybe object literals or maybe object instances", they will be object instances (basically ',(0,s.jsx)(t.code,{children:"OptsOf<PublisherType>"}),"), which simplifies the lambda's matching logic."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1670:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7378);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);