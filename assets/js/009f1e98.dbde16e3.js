"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[436],{6831:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=i(4246),s=i(1670);const o={title:"Configuration",slug:"/configuration",sidebar_position:2},r=void 0,d={id:"getting-started/configuration",title:"Configuration",description:"Joist prefers convention over configuration, but it still has some knobs to control its behavior.",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/configuration",permalink:"/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/joist-orm/joist-orm/edit/main/docs/docs/getting-started/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration",slug:"/configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Schema Assumptions",permalink:"/docs/getting-started/schema-assumptions"},next:{title:"Overview",permalink:"/docs/goals"}},c={},l=[{value:"Codegen Configuration",id:"codegen-configuration",level:2},{value:"<code>databaseUrl</code>",id:"databaseurl",level:3},{value:"<code>idType</code>",id:"idtype",level:3},{value:"<code>contextType</code>",id:"contexttype",level:3},{value:"<code>entitiesDirectory</code>",id:"entitiesdirectory",level:3},{value:"<code>createFlushFunction</code>",id:"createflushfunction",level:3},{value:"<code>ignoredTables</code>",id:"ignoredtables",level:3},{value:"<code>timestampColumns</code>",id:"timestampcolumns",level:3},{value:"<code>codegenPlugins</code>",id:"codegenplugins",level:3},{value:"<code>entities</code>",id:"entities",level:3},{value:"<code>tag</code>",id:"tag",level:4},{value:"<code>tableName</code>",id:"tablename",level:4},{value:"<code>entities.orderBy</code>",id:"entitiesorderby",level:3},{value:"<code>entities.fields</code>",id:"entitiesfields",level:3},{value:"<code>entities.relations</code>",id:"entitiesrelations",level:3},{value:"Runtime Configuration",id:"runtime-configuration",level:2},{value:"Connection Pool",id:"connection-pool",level:3},{value:"Driver",id:"driver",level:3},{value:"IdAssigner",id:"idassigner",level:4},{value:"EntityManager",id:"entitymanager",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Joist prefers convention over configuration, but it still has some knobs to control its behavior."}),"\n",(0,t.jsx)(n.p,{children:"The configuration is split into two sections:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Codegen config, used by ",(0,t.jsx)(n.code,{children:"npm run joist-codegen"})," during the code generation build step,"]}),"\n",(0,t.jsxs)(n.li,{children:["Runtime config, used by ",(0,t.jsx)(n.code,{children:"EntityManager"})," at runtime to configure the database that Joist connects to."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can get started without any codegen config, and only some minimal runtime config."}),"\n",(0,t.jsx)(n.h2,{id:"codegen-configuration",children:"Codegen Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The codegen configuration is controlled by a ",(0,t.jsx)(n.code,{children:"./joist-config.json"})," file, that ",(0,t.jsx)(n.code,{children:"npm run joist-codegen"})," will look for and automatically run."]}),"\n",(0,t.jsx)(n.p,{children:"A short, minimalistic example is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "entitiesDirectory": "./src/entities"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Each of the supported keys are described below. Note this is an exhaustive list, but all the keys are optional."}),"\n",(0,t.jsx)(n.h3,{id:"databaseurl",children:(0,t.jsx)(n.code,{children:"databaseUrl"})}),"\n",(0,t.jsxs)(n.p,{children:["This is the ",(0,t.jsx)(n.em,{children:"build-time"})," connection information for your database, e.g. it is only used when running ",(0,t.jsx)(n.code,{children:"npm run joist-codegen"}),", and won't be used for either your unit tests or production code, because it's assumed to have a hard-coded/local-only host/port/etc."]}),"\n",(0,t.jsxs)(n.p,{children:["If this is not set, ",(0,t.jsx)(n.code,{children:"npm run joist-codegen"})," will also look for a ",(0,t.jsx)(n.code,{children:"DATABASE_URL"})," environment variable."]}),"\n",(0,t.jsx)(n.h3,{id:"idtype",children:(0,t.jsx)(n.code,{children:"idType"})}),"\n",(0,t.jsxs)(n.p,{children:["Controls the type of the domain model's ",(0,t.jsx)(n.code,{children:"id"})," properties, i.e. ",(0,t.jsx)(n.code,{children:"Author.id"})," or ",(0,t.jsx)(n.code,{children:"author1.id"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Available values: ",(0,t.jsx)(n.code,{children:"tagged-string"}),", ",(0,t.jsx)(n.code,{children:"untagged-string"}),", ",(0,t.jsx)(n.code,{children:"number"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Joist's default behavior is ",(0,t.jsx)(n.code,{children:"tagged-string"})," which means the type of ",(0,t.jsx)(n.code,{children:"Author.id"})," will be a ",(0,t.jsx)(n.code,{children:"string"}),", and the value will be ",(0,t.jsx)(n.code,{children:'"a:1"'})," where ",(0,t.jsx)(n.code,{children:"a"}),' is the "tag" established for all ',(0,t.jsx)(n.code,{children:"Author"})," entities, and ",(0,t.jsx)(n.code,{children:"1"})," is the numeric primary key value of that row."]}),"\n",(0,t.jsxs)(n.p,{children:["If you do not want the ",(0,t.jsx)(n.code,{children:"a:"})," tagged prefix, you can use ",(0,t.jsx)(n.code,{children:"untagged-string"})," or ",(0,t.jsx)(n.code,{children:"number"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "idType": "untagged-string"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This is currently a project-wide setting and cannot be changed on an entity-by-entity basis."}),"\n",(0,t.jsxs)(n.p,{children:["Also note that this ",(0,t.jsx)(n.code,{children:"idType"})," setting controls the ",(0,t.jsx)(n.em,{children:"codegen output"}),", but Joist will still look at the database type of each individual entity's ",(0,t.jsx)(n.code,{children:"id"})," column to determine if the SQL values are actually numbers (i.e. auto increment integers) or other types like UUIDs."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Even if you use ",(0,t.jsx)(n.code,{children:"untagged-string"}),"s, currently Joist still manages ids internally as tagged, and so you'll still see a per-entity ",(0,t.jsx)(n.code,{children:"tag"})," established in the ",(0,t.jsx)(n.code,{children:"joist-config.json"})," file, but the tag will be stripped by the ",(0,t.jsx)(n.code,{children:"id"})," getters."]})}),"\n",(0,t.jsx)(n.h3,{id:"contexttype",children:(0,t.jsx)(n.code,{children:"contextType"})}),"\n",(0,t.jsxs)(n.p,{children:["This optional key specifies your application specific ",(0,t.jsx)(n.code,{children:"Context"})," type, if you're using that pattern."]}),"\n",(0,t.jsxs)(n.p,{children:["The expectation is that this will be a request-level ",(0,t.jsx)(n.code,{children:"Context"}),", i.e. it might hold user auth information or other application-specific information."]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass your request-level ",(0,t.jsx)(n.code,{children:"Context"})," to each ",(0,t.jsx)(n.code,{children:"EntityManager"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { Context } from "src/context";\nimport { EntityManager } from "src/entities";\n\nconst em = new EntityManager(ctx, driver);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then in ",(0,t.jsx)(n.code,{children:"EntityManager"}),"-managed hooks, you'll be able to access the context:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'config.beforeDelete((book, ctx) => {\n  if (!ctx.user.isAdmin) {\n    return "Only admins can delete a book";\n  }\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["And the ",(0,t.jsx)(n.code,{children:"ctx"})," param will be correctly typed to your application's specific ",(0,t.jsx)(n.code,{children:"Context"})," type."]}),"\n",(0,t.jsx)(n.h3,{id:"entitiesdirectory",children:(0,t.jsx)(n.code,{children:"entitiesDirectory"})}),"\n",(0,t.jsx)(n.p,{children:"This controls whether Joist outputs the entity, codegen, and metadata files."}),"\n",(0,t.jsxs)(n.p,{children:["The default is ",(0,t.jsx)(n.code,{children:"./src/entities"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"createflushfunction",children:(0,t.jsx)(n.code,{children:"createFlushFunction"})}),"\n",(0,t.jsxs)(n.p,{children:["Joist's preferred approach to testing is to let tests ",(0,t.jsx)(n.code,{children:"COMMIT"})," their code, and then use a ",(0,t.jsx)(n.code,{children:"flush_database"})," stored procedure to very quickly ",(0,t.jsx)(n.code,{children:"TRUNCATE"})," all tables between each test."]}),"\n",(0,t.jsxs)(n.p,{children:["This ",(0,t.jsx)(n.code,{children:"flush_database"})," stored procedure if created during ",(0,t.jsx)(n.code,{children:"npm run codegen"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you'd prefer to not use, you can set this to false:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "createFlushFunction": false\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you have multiple test databases (i.e. one per Jest work), you can set the parameter to an array of database names:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "createFlushFunction": ["db_test_1", "db_test_2"]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"ignoredtables",children:(0,t.jsx)(n.code,{children:"ignoredTables"})}),"\n",(0,t.jsx)(n.p,{children:"Allows ignoring tables, i.e. not generating TypeScript entities for them."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "ignoredTables": ["some_old_thing"]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"timestampcolumns",children:(0,t.jsx)(n.code,{children:"timestampColumns"})}),"\n",(0,t.jsxs)(n.p,{children:["Joist will automatically manage columns like ",(0,t.jsx)(n.code,{children:"Author.created_at"})," and ",(0,t.jsx)(n.code,{children:"Author.updated_at"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"timestampColumns"})," key lets you configure your schema's conventions for column names."]}),"\n",(0,t.jsxs)(n.p,{children:["For example the following config looks for ",(0,t.jsx)(n.em,{children:"only"})," ",(0,t.jsx)(n.code,{children:"updated_at"})," and ",(0,t.jsx)(n.code,{children:"created_at"})," and requires both column to be present for Joist to consider a database table and entity table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "timestampFields": {\n    "updatedAt": {\n      "names": ["updated_at"],\n      "required": true\n    },\n    "createdAt": {\n      "names": ["created_at"],\n      "required": true\n    },\n    "deletedAt": {\n      "names": ["deleted_at"],\n      "required": true\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The default configuration is basically:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "timestampFields": {\n    "updatedAt": {\n      "names": ["updated_at", "updatedAt"],\n      "required": false\n    },\n    "createdAt": {\n      "names": ["created_at", "createdAt"],\n      "required": false\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["I.e. Joist will look for either ",(0,t.jsx)(n.code,{children:"updated_at"})," or ",(0,t.jsx)(n.code,{children:"updatedAt"})," naming conventions, and will not require the ",(0,t.jsx)(n.code,{children:"updatedAt"})," column be present to consider a table an entity table."]}),"\n",(0,t.jsx)(n.h3,{id:"codegenplugins",children:(0,t.jsx)(n.code,{children:"codegenPlugins"})}),"\n",(0,t.jsxs)(n.p,{children:["Allows other functionality to be inserted into the ",(0,t.jsx)(n.code,{children:"npm run joist-codegen"})," pipeline."]}),"\n",(0,t.jsx)(n.p,{children:"The current example is an extra GraphQL-specific plugin that creates GraphQL-specific scaffolding/output based on your domain model:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "codegenPlugins": ["joist-graphql-codegen"]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"entities",children:(0,t.jsx)(n.code,{children:"entities"})}),"\n",(0,t.jsx)(n.p,{children:"This is a big section that allows per-entity configuration."}),"\n",(0,t.jsx)(n.p,{children:"There are several sub-keys:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export interface EntityConfig {\n  tag: string;\n  tableName?: string;\n  fields?: Record<string, FieldConfig>;\n  relations?: Record<string, RelationConfig>;\n  orderBy?: string;\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"tag",children:(0,t.jsx)(n.code,{children:"tag"})}),"\n",(0,t.jsxs)(n.p,{children:["This controls the tag that Joist uses for each entity. By default, Joist will guess a tag by abbreviating a table name ",(0,t.jsx)(n.code,{children:"books_reviews"})," as the tag ",(0,t.jsx)(n.code,{children:"br"})," and automatically save it in ",(0,t.jsx)(n.code,{children:"joist-config.json"}),". If you'd like a different value, you're free to change it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "entities": {\n    "Author": { "tag": "a" }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that you should probably not change the tag name for an entity after it has been deployed to production, b/c the tagged id could exist in external systems, i.e. if you've sent ",(0,t.jsx)(n.code,{children:'"a:1"'})," to a 3rd party system, and then change your tag to ",(0,t.jsx)(n.code,{children:'"author"'}),", you might break an integration that tries to look up the entity by the old ",(0,t.jsx)(n.code,{children:'"a:1"'})," value."]}),"\n",(0,t.jsx)(n.h4,{id:"tablename",children:(0,t.jsx)(n.code,{children:"tableName"})}),"\n",(0,t.jsxs)(n.p,{children:["Allows defining specific entity names for tables, for example if you had a ",(0,t.jsx)(n.code,{children:"tbl_publishers"})," table that you wanted to back the ",(0,t.jsx)(n.code,{children:"Publisher"})," entity, then you could setup:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "entities": {\n    "Publisher": { "tableName": "tbl_publishers" }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["By default, Joist assumes table names are plural (i.e. ",(0,t.jsx)(n.code,{children:"publishers"}),") and will ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/pluralize",children:(0,t.jsx)(n.code,{children:"singular"})})," the name for the entity name (i.e. ",(0,t.jsx)(n.code,{children:"Publisher"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"entitiesorderby",children:(0,t.jsx)(n.code,{children:"entities.orderBy"})}),"\n",(0,t.jsxs)(n.p,{children:["Allows defining a default ",(0,t.jsx)(n.code,{children:"orderBy"})," for the entity, i.e. if you want to always order ",(0,t.jsx)(n.code,{children:"Publisher"})," entities by ",(0,t.jsx)(n.code,{children:"name"})," by default, you could setup:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "entities": {\n    "Publisher": { "orderBy": "name" }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"orderBy"})," value must be the field name of a primitive, synchronous value on the entity. Or a field name with an ",(0,t.jsx)(n.code,{children:"ASC"})," / ",(0,t.jsx)(n.code,{children:"DESC"})," suffix, i.e. ",(0,t.jsx)(n.code,{children:'"orderBy": "name DESC"'}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If unset, Joist will order by ",(0,t.jsx)(n.code,{children:"id"})," by default to ensure deterministic ordering."]}),"\n",(0,t.jsx)(n.h3,{id:"entitiesfields",children:(0,t.jsx)(n.code,{children:"entities.fields"})}),"\n",(0,t.jsxs)(n.p,{children:["You can configure primitive fields by setting the camel-cased field name in the entity's ",(0,t.jsx)(n.code,{children:"fields"})," key:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "entities": {\n    "Author": { "fields": { "firstName": {} } }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Within the field literal, these values are supported:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'export interface FieldConfig {\n  derived?: "sync" | "async";\n  protected?: boolean;\n  ignore?: true;\n  superstruct?: string;\n  zodSchema?: string;\n  type?: string;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"derived"})," controls whether this field is derived from business logic (...link to docs...)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"protected"})," controls whether this is field is ",(0,t.jsx)(n.code,{children:"protected"})," and so can only be accessed internally by the domain model code"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ignore"})," controls whether to ignore the field"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"superstruct"})," links to the superstruct type to use for ",(0,t.jsxs)(n.a,{href:"/docs/modeling/jsonb-fields",children:[(0,t.jsx)(n.code,{children:"jsonb"})," columns"]}),", i.e. ",(0,t.jsx)(n.code,{children:"commentStreamReads@src/entities/superstruct"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"zodSchema"})," links to the Zod schema to use for ",(0,t.jsxs)(n.a,{href:"/docs/modeling/jsonb-fields",children:[(0,t.jsx)(n.code,{children:"jsonb"})," columns"]}),", i.e. ",(0,t.jsx)(n.code,{children:"CommentStreamReads@src/entities/schemas"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"type"})," links to an TypeScript type to use instead of the schema derived one"]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, the ",(0,t.jsx)(n.code,{children:"type"})," must be a ",(0,t.jsx)(n.a,{href:"https://typescript.tv/best-practices/improve-your-type-safety-with-branded-types/",children:"branded type"})," of the runtime type, b/c Joist will still instantiate the value with whatever it's schema-derived value is."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/joist-orm/joist-orm/discussions/674#discussioncomment-6092907",children:"this discussion"})," for a future ",(0,t.jsx)(n.code,{children:"serde"})," feature that would allow you to instantiate custom runtime values."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"entitiesrelations",children:(0,t.jsx)(n.code,{children:"entities.relations"})}),"\n",(0,t.jsxs)(n.p,{children:["You can configure relations (references and collections to other entities) by setting the camel-cased relation name in the entity's ",(0,t.jsx)(n.code,{children:"relations"})," key:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'export interface RelationConfig {\n  polymorphic?: "notNull" | true;\n  large?: true;\n  orderBy?: string;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The supported values are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"polymorphic"})," creates this relation as a ",(0,t.jsx)(n.a,{href:"/docs/modeling/relations#polymorphic-references",children:"polymorphic relation"}),", which logical combines several physical foreign keys into a single field"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"large"})," indicates that a collection is too big to be fully loaded into memory and changes the generated type to ",(0,t.jsx)(n.code,{children:"LargeCollection"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"orderBy"})," allows setting an order specific to this collection, the value must be a primitive, synchronous field on the entities within the collection"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"runtime-configuration",children:"Runtime Configuration"}),"\n",(0,t.jsx)(n.p,{children:"There are three main things to configure at runtime:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connection pool"}),"\n",(0,t.jsx)(n.li,{children:"Driver"}),"\n",(0,t.jsx)(n.li,{children:"EntityManager"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"connection-pool",children:"Connection Pool"}),"\n",(0,t.jsxs)(n.p,{children:["Your application should have a single global connection pool; currently Joist recommends using ",(0,t.jsx)(n.a,{href:"http://knexjs.org/",children:"knex"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { newPgConnectionConfig } from "joist-utils";\n\nconst knex = createKnex({\n  client: "pg",\n  // This will read DATABASE_URL, but you can use whatever config you want, see the knex docs\n  connection: newPgConnectionConfig(),\n  // Setting this is true will `console.log` the SQL statements that Joist executes\n  debug: false,\n  asyncStackTraces: true,\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"driver",children:"Driver"}),"\n",(0,t.jsxs)(n.p,{children:["Joist has a ",(0,t.jsx)(n.code,{children:"Driver"})," interface to support multiple different databases, like Postgres or MySQL or even an experimental in-memory driver. Currently only Postgres is supported."]}),"\n",(0,t.jsx)(n.p,{children:"Similar to the knex connection pool, you can create a single global instance of this driver:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const driver = new PostgresDriver(knex);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"idassigner",children:"IdAssigner"}),"\n",(0,t.jsxs)(n.p,{children:["When creating the ",(0,t.jsx)(n.code,{children:"PostgresDriver"}),", you can pass an ",(0,t.jsx)(n.code,{children:"IdAssigner"})," instance, which currently has three implementations:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SequenceIdAssigner"})," assigns numeric ids from each entity's ",(0,t.jsx)(n.code,{children:"SEQUENCE"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RandomUuidAssigner"})," assigns random UUIDs if you're using UUID columns"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TestUuidAssigner"})," assigns deterministic UUIDs for unit testing"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"entitymanager",children:"EntityManager"}),"\n",(0,t.jsxs)(n.p,{children:["With the global connection pool and ",(0,t.jsx)(n.code,{children:"Driver"})," instance, you can create per-request ",(0,t.jsx)(n.code,{children:"EntityManager"})," instances:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Your application's per-request Context, if applicable\nconst ctx = {};\nconst em = new EntityManager(ctx, driver);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1670:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var t=i(7378);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);