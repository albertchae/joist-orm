"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[265],{5318:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,c=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(c,r(r({ref:t},h),{},{components:n})):a.createElement(c,r({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(2685),o=(n(7378),n(5318));const i={title:"Relations",sidebar_position:2},r=void 0,l={unversionedId:"modeling/relations",id:"modeling/relations",title:"Relations",description:"Relations are relationships between entities in your domain model, for example an Author's list of Books or an Author's current Publisher.",source:"@site/docs/modeling/relations.md",sourceDirName:"modeling",slug:"/modeling/relations",permalink:"/docs/modeling/relations",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/modeling/relations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Relations",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fields",permalink:"/docs/modeling/fields"},next:{title:"Validation Rules",permalink:"/docs/modeling/validation-rules"}},s={},p=[{value:"Reading Relations",id:"reading-relations",level:3},{value:"Many To One References",id:"many-to-one-references",level:2},{value:"One To Many Collections",id:"one-to-many-collections",level:2},{value:"One To One Reference",id:"one-to-one-reference",level:2},{value:"Many to Many Collection",id:"many-to-many-collection",level:2},{value:"Polymorphic References",id:"polymorphic-references",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Usage",id:"usage",level:3},{value:"Renaming Relations",id:"renaming-relations",level:2},{value:"Consistent Relations",id:"consistent-relations",level:2},{value:"Custom Relations",id:"custom-relations",level:2},{value:"hasOneThrough",id:"hasonethrough",level:3},{value:"hasManyThrough",id:"hasmanythrough",level:3},{value:"hasOneDerived &amp; hasManyDerived",id:"hasonederived--hasmanyderived",level:3}],h={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Relations are relationships between entities in your domain model, for example an ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"'s list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"s or an ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"'s current ",(0,o.kt)("inlineCode",{parentName:"p"},"Publisher"),"."),(0,o.kt)("p",null,"Joist's ",(0,o.kt)("inlineCode",{parentName:"p"},"joist-codegen")," step automatically discovers the relations from your database schema (based on foreign keys) and generates either ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference"),"s (for relations that point to a single other entity) or ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection"),"s (for relations that point to multiple other entities)."),(0,o.kt)("p",null,"Two common themes for all of Joist's relations are that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"They are by default unloaded, and require ",(0,o.kt)("inlineCode",{parentName:"p"},"await author.book.load()")," calls to load, ",(0,o.kt)("em",{parentName:"p"},"but")," also all support preloading via populate hints, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/goals/load-safe-relations"},"load safe relations")," for more.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Joist always keeps "both sides" of relationships in sync, for example if you add a ',(0,o.kt)("inlineCode",{parentName:"p"},"Book")," to an ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),", that ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"'s list of books will automatically include that ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"."),(0,o.kt)("p",{parentName:"li"},"This is a big quality-of-life win, as business logic (validation rules, rendering logic) will always see the latest state of relations, and not have to worry about running against now-stale data."))),(0,o.kt)("h3",{id:"reading-relations"},"Reading Relations"),(0,o.kt)("p",null,"In other ORMs you may be used to checking for the existings of a relation by checking for it's presence, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"if (book.author) { ... }"),". In Joist, all relations are always present, but may not be set to a value. To check if a relation is set use ",(0,o.kt)("inlineCode",{parentName:"p"},"isSet"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const b1 = await em.load(Book, "b:1");\n\n// Always returns truthy\nif (b1.author) {\n  ...\n}\n\n// Returns true if the author is set\nif (b1.author.isSet) {\n  ...\n}\n')),(0,o.kt)("p",null,"If you want to read the id of a relation without loading it, you can do so via the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const b1 = await em.load(Book, "b:1");\n\n// The id of the author is available without loading the author\nconst authorId = b1.author.id;\n')),(0,o.kt)("h2",{id:"many-to-one-references"},"Many To One References"),(0,o.kt)("p",null,'Joist looks for "outgoing" (many-to-one) foreign keys like ',(0,o.kt)("inlineCode",{parentName:"p"},"books.author_id")," pointing to ",(0,o.kt)("inlineCode",{parentName:"p"},"books.id")," and automatically includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"ManyToOneReference")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"BookCodegen")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export abstract class BookCodegen {\n  readonly author: ManyToOneReference<Book, Author, never> = hasOne(authorMeta, "author", "books");\n}\n')),(0,o.kt)("p",null,"Accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," field requires either calling ",(0,o.kt)("inlineCode",{parentName:"p"},".load()")," or a populate hint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Unloaded author field\nconst b1 = await em.load(Book, "b:1");\nconst a1 = await b1.author.load();\nconsole.log(a1.firstName);\n\n// Preloaded author field\nconst b2 = await em.load(Book, "b:2", "author");\nconsole.log(b2.author.get.firstName);\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"books.author_id")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"not null"),", then the reference will be required, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"someBook.author.get")," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),", otherwise it will be optional, and ",(0,o.kt)("inlineCode",{parentName:"p"},"someBook.author.get")," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"Author | undefined"),".")),(0,o.kt)("h2",{id:"one-to-many-collections"},"One To Many Collections"),(0,o.kt)("p",null,'Joist also looks for "incoming" (one-to-many) foreign keys like the opposite of ',(0,o.kt)("inlineCode",{parentName:"p"},"Author"),' being "pointed at" by the ',(0,o.kt)("inlineCode",{parentName:"p"},"books.author_id")," column and automatically generates a ",(0,o.kt)("inlineCode",{parentName:"p"},"hasMany"),' collection as the "other side" in ',(0,o.kt)("inlineCode",{parentName:"p"},"AuthorCodegen.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export abstract class AuthorCodegen {\n  readonly books: Collection<Author, Book> = hasMany(bookMeta, "books", "author", "author_id");\n}\n')),(0,o.kt)("p",null,"When unloaded, ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection"),"s support adding and removing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const a = await em.load(Author, "a:1");\na.books.add(someBook);\na.books.remove(otherBook);\n')),(0,o.kt)("p",null,"But accessing the contents of the collection requires being loaded, again either with a ",(0,o.kt)("inlineCode",{parentName:"p"},".load()")," call or a populate hint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Unloaded Author.books collection\nconst a1 = await em.load(Author, "a:1");\nconst books = await a1.books.load();\nconsole.log(books.length);\n\n// Preloaded Author.books collection\nconst a2 = await em.load(Author, "a:2", "books");\nconsole.log(a2.books.get.length);\nconsole.log(a2.books.get[0].title);\n')),(0,o.kt)("h2",{id:"one-to-one-reference"},"One To One Reference"),(0,o.kt)("p",null,'Joist distinguishes "incoming" foreign keys with a unique constraint as a one-to-one relationship rather than one-to-many and instead automatically generates a ',(0,o.kt)("inlineCode",{parentName:"p"},"hasOneToOne"),' reference as the "other side" rather than ',(0,o.kt)("inlineCode",{parentName:"p"},"hasMany"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export abstract class AuthorCodegen {\n  readonly image: OneToOneReference<Author, Image> = hasOne(imageMeta, "image", "author", "author_id");\n}\n')),(0,o.kt)("p",null,"These references work similarly to a ",(0,o.kt)("inlineCode",{parentName:"p"},"hasOne")," reference, but have less information available to them when in an unloaded state (such as checking if the reference is set without loading it).  Additionally, they are always assumed to be nullable."),(0,o.kt)("h2",{id:"many-to-many-collection"},"Many to Many Collection"),(0,o.kt)("p",null,'Joist will skip generating full entity classes for any tables it considers to be a "join table" between two other entities. Instead, it will  generate matching ',(0,o.kt)("inlineCode",{parentName:"p"},"hasManyToMany")," collections on each of the entities pointed to by the foreign keys on the join table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export abstract class BookCodegen {\n  readonly tags: Collection<Author, Tag> = hasManyToMany("authors_to_tags", "tags", "author_id", tagMeta, "authors", "tag_id");\n}\n')),(0,o.kt)("p",null,"These collections work similarly to a ",(0,o.kt)("inlineCode",{parentName:"p"},"hasMany"),' collection.   When determining if a table is a "join table", joist checks if the table has a single primary key column, two foreign key columns, an optional ',(0,o.kt)("inlineCode",{parentName:"p"},"created_at")," column, and no other columns."),(0,o.kt)("h2",{id:"polymorphic-references"},"Polymorphic References"),(0,o.kt)("p",null,"Polymorphic references model an entity (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),") that has a single logical field that can be set to multiple (i.e. poly) ",(0,o.kt)("em",{parentName:"p"},"types")," of other entities, but ",(0,o.kt)("em",{parentName:"p"},"only one such entity at a time")," (i.e. a reference b/c it points to only one other entity)."),(0,o.kt)("p",null,"For example maybe a ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," has a single logical ",(0,o.kt)("inlineCode",{parentName:"p"},"publisher")," field that can either be a ",(0,o.kt)("inlineCode",{parentName:"p"},"CorporatePublisher")," entity (a row in the ",(0,o.kt)("inlineCode",{parentName:"p"},"corporate_publishers")," table) or a ",(0,o.kt)("inlineCode",{parentName:"p"},"SelfPublisher")," entity (a row in the ",(0,o.kt)("inlineCode",{parentName:"p"},"self_publishers")," table)."),(0,o.kt)("p",null,"The simplest way to model this ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," scenario would be having two foreign keys, a ",(0,o.kt)("inlineCode",{parentName:"p"},"books.corporate_publisher_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"books.self_publisher_id"),', and then having your application\'s business logic "just know" that it should enforce only one of these keys being set at a single time.'),(0,o.kt)("p",null,'Polymorphic references allow you to tell Joist about this "single logical field that could be two-or-more different types", and it will do the "can only be set at once" handling for you.'),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Polymorphic references have two components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the domain model, they are a single logical field (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.publisher"),")."),(0,o.kt)("p",{parentName:"li"},"The field type is ",(0,o.kt)("inlineCode",{parentName:"p"},"PolymorphicReference<BookPublisher>"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"BookPublisher")," is a code generated type union of each potential type, i.e. Joist will create:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"}," export type BookPublisher = CorporatePublisher | SelfPublisher;\n")),(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"BookCodegen.ts")," file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In the database schema, they are multiple physical columns, one per "other" entity type (i.e. ',(0,o.kt)("inlineCode",{parentName:"p"},"books.publisher_corporate_publisher_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"books.publisher_self_publisher_id"),")"))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To use polymorphic references, there are two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the multiple physical foreign keys in your schema, all with a similar ",(0,o.kt)("inlineCode",{parentName:"p"},"publisher_*_id")," naming convention.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"joist-config.json"),", add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"publisher")," relation that is marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"polymorphic"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entites": {\n     "Comment": {\n        "relations": { "publisher": { "polymorphic": "notNull" } },\n        "tag": "comment"\n     }\n  }\n}\n')),(0,o.kt)("p",{parentName:"li"},"Joist with then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"publisher")," name to scan for any other ",(0,o.kt)("inlineCode",{parentName:"p"},"publisher_"),"-prefixed foreign keys and automatically pull them in as components of this polymorphic reference."))),(0,o.kt)("h2",{id:"renaming-relations"},"Renaming Relations"),(0,o.kt)("p",null,'Joist makes a best guess for relation names, based on the foreign key\'s column name and the table it points to (i.e. the "other side" of ',(0,o.kt)("inlineCode",{parentName:"p"},"books.author_id")," should be called ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.books"),"), but this is not always perfect."),(0,o.kt)("p",null,"Sometimes a table will have two incoming foreign keys that cause a naming collision, or you just want a different name (self-referential foreign keys like ",(0,o.kt)("inlineCode",{parentName:"p"},"authors.mentor_id")," are particularly hard for Joist to guess good names for)."),(0,o.kt)("p",null,"In these circumstances, you can specify which field names to use directly in the database schema. Joist uses ",(0,o.kt)("inlineCode",{parentName:"p"},"pg-structure"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://www.pg-structure.com/nav.02.api/classes/dbobject.html#commentdata"},(0,o.kt)("inlineCode",{parentName:"a"},"commentData"))," convention (which is basically a JSON payload in the column's ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMENT")," metadata) to look for two properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fieldName")," for renaming a m2o reference, and"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"otherFieldName")," for renaming the opposing m2o/m2m/o2o relation")),(0,o.kt)("p",null,"Setting this ",(0,o.kt)("inlineCode",{parentName:"p"},"commentData")," structure by hand can be tedious, but Joist's ",(0,o.kt)("inlineCode",{parentName:"p"},"joist-migration-utils")," package provides both a ",(0,o.kt)("inlineCode",{parentName:"p"},"renameRelation")," function (for renaming fields of existing columns) and a ",(0,o.kt)("inlineCode",{parentName:"p"},"foreignKey")," helper (for renames fields on new columns) that allow easily setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"otherFieldName")," keys."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Why ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMENT")," metadata? Putting field names in the ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMENT")," metadata is somewhat unconventional, but it has a few advantages:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'It follows Joist\'s overall philosophy of "the database is the source of truth", and')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Previously we put renames in the ",(0,o.kt)("inlineCode",{parentName:"p"},"joist-config.json")," file, but that meant having to know/guess the wrong/unintuitive name, just to map it over to the correct name. Which was confusing and also did not handle collisions."),(0,o.kt)("p",{parentName:"li"},"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMENT")," approach, the ",(0,o.kt)("inlineCode",{parentName:"p"},"joist-config.json")," now has only the correct/best field name for the rest of the config options you might want to specify on the relation.")))),(0,o.kt)("h2",{id:"consistent-relations"},"Consistent Relations"),(0,o.kt)("p",null,"Joist keeps both sides of m2o/o2m/o2o relationships in sync, i.e.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Load the author with the books collection loaded\nconst a = await em.load(Author, "a:1", "books");\n// Load a book, and set the author\nconst b = await em.load(Book, "b:1");\nb.author.set(a);\n// This will print true\nconsole.log(a.books.get.includes(b));\n')),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.books")," collection is not loaded yet, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"b.author.set"),' line does not cause it to become loaded, but instead will remember "add ',(0,o.kt)("inlineCode",{parentName:"p"},"b"),'" as a pending operation, to apply to ',(0,o.kt)("inlineCode",{parentName:"p"},"a.books"),", should it later become loaded within the current ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager"),"."),(0,o.kt)("h2",{id:"custom-relations"},"Custom Relations"),(0,o.kt)("p",null,"Besides the core relations discovered from the schema's foreign keys, Joist lets you declare additional relations in your domain model."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"These custom relations are great for defining relationships between ",(0,o.kt)("em",{parentName:"p"},"entities")," in your domain model, like how ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," might relate to ",(0,o.kt)("inlineCode",{parentName:"p"},"BookReview"),"."),(0,o.kt)("p",{parentName:"admonition"},"If you'd like to define custom ",(0,o.kt)("em",{parentName:"p"},"non-entity")," fields, like derived numbers or strings, see ",(0,o.kt)("a",{parentName:"p",href:"./derived-fields"},"Derived Fields"),".")),(0,o.kt)("h3",{id:"hasonethrough"},"hasOneThrough"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hasOneThrough")," defines a shortcut from your entity to a single other entity, for example if asking for a ",(0,o.kt)("inlineCode",{parentName:"p"},"BookReview"),"'s author (via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),") is very common, you can define a ",(0,o.kt)("inlineCode",{parentName:"p"},"BookReview.author")," relation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class BookReview extends BookReviewCodegen {\n  // use never if Author will always be set, or undefined if it might be unset\n  readonly author: Reference<BookReview, Author, never> = hasOneThrough((review) => review.book.author);\n  // Paths can be arbitrarily long\n  readonly publisher: Reference<BookReview, Publisher, never> = hasOneThrough((review) => review.book.author.publisher);\n}\n")),(0,o.kt)("p",null,"With this alias defined, you can refactor code to be more succinct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Using the core relations\nconst br1 = await em.load(BookReview, { book: { author: "publisher" } });\nconsole.log(`br1 publisher:` + br1.book.get.author.get.publisher.get);\n\n// Using the hasOneThrough alias\nconst br2 = await em.load(BookReview, "publisher");\nconsole.log(`br2 publisher:` + br2.publisher.get);\n')),(0,o.kt)("p",null,"Both of these approaches have the same runtime behavior, i.e. under the hook ",(0,o.kt)("inlineCode",{parentName:"p"},"br2.publisher.get")," is actually executing ",(0,o.kt)("inlineCode",{parentName:"p"},"review.book.get.author.get.publisher.get"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that currently ",(0,o.kt)("inlineCode",{parentName:"p"},"hasOneThrough")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hasManyThrough")," load all the entities on the path between the current entity and the target(s), i.e. the above example pulls all the review's books, the book's authors, and the author's publisher into memory."),(0,o.kt)("p",{parentName:"admonition"},"We have an issue tracking optimizing this to avoid loading entities, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/issues/524"},"Issue 524"),".")),(0,o.kt)("h3",{id:"hasmanythrough"},"hasManyThrough"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hasManyThrough")," is very similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"hasOneThrough")," but for collections of multiple entities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Publisher extends PublisherCodegen {\n  readonly reviews: Collection<Publisher, BookReview> = hasManyThrough((p) => p.authors.books.bookReviews);\n}\n")),(0,o.kt)("p",null,"The behavior is the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"hasOneThrough"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Using the core relations\nconst p1 = await em.load(Publisher, { authors: { books: "reviews" } });\nconsole.log(`p1 reviews:` + p1.authors.get.flatMap(a => a.books.get.flatMap(b => b.reviews.get)));\n\n// Using the hasManyThrough alias\nconst p2 = await em.load(Publisher, "reviews");\nconsole.log(`p2 reviews:` + p2.reviews.get);\n')),(0,o.kt)("h3",{id:"hasonederived--hasmanyderived"},"hasOneDerived & hasManyDerived"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hasOneDerived")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hasManyDerived")," are very similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"hasOneThrough")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hasManyThrough"),", but allow a lambda to filter the results."),(0,o.kt)("p",null,"For example, maybe ",(0,o.kt)("inlineCode",{parentName:"p"},"Publisher.reviews")," should only be ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," reviews:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class BookReview extends PublisherCodegen {\n  readonly reviews: Collection<Publisher, BookReview> = hasManyDerived(\n    { authors: { books: "reviews" } },\n    (p) => p.authors.get\n      .flatMap(a => a.books.get.flatMap(b => b.reviews.get))\n      .filter(br => br.isPublic)\n  );\n}\n')))}d.isMDXComponent=!0}}]);