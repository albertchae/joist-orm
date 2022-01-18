"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[607],{5318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],s={title:"Unit of Work",sidebar_position:1},u=void 0,c={unversionedId:"features/unit-of-work",id:"features/unit-of-work",isDocsHomePage:!1,title:"Unit of Work",description:"Joist's EntityManager acts as a Unit of Work, which caches the entities that are currently loaded/being mutated.",source:"@site/docs/features/unit-of-work.md",sourceDirName:"features",slug:"/features/unit-of-work",permalink:"/docs/features/unit-of-work",editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/unit-of-work.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Unit of Work",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/features"},next:{title:"Fast Database Resets",permalink:"/docs/features/fast-database-resets"}},l=[{value:"Not a Shared/Distributed Cache",id:"not-a-shareddistributed-cache",children:[],level:3}],d={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Joist's ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," acts as a ",(0,o.kt)("a",{parentName:"p",href:"https://www.martinfowler.com/eaaCatalog/unitOfWork.html"},"Unit of Work"),", which caches the entities that are currently loaded/being mutated."),(0,o.kt)("p",null,"For example, if you issue multiple ",(0,o.kt)("inlineCode",{parentName:"p"},".find")," calls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const a = await em.find(Author, { id: "a:1" });\nconst b = await em.find(Author, { id: "a:1" });\n// Prints true\nconsole.log(a === b);\n')),(0,o.kt)("p",null,"Joist will issue 2 queries, one per ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," call (because the where clauses could be different), but when reading the query results, Joist will recognize that the 2nd ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," returns an already-loaded ",(0,o.kt)("inlineCode",{parentName:"p"},"Author#a:1")," instance, and use that same instance."),(0,o.kt)("p",null,'This pattern generally makes reasoning about "what have I changed so far?", "what is the latest version of the entity?" easier, because when handling a given ',(0,o.kt)("inlineCode",{parentName:"p"},"POST")," / API update, you don't have to worry about various parts of your code having stale/different versions of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"."),(0,o.kt)("h3",{id:"not-a-shareddistributed-cache"},"Not a Shared/Distributed Cache"),(0,o.kt)("p",null,"Note that this is not a shared/second-level cache, i.e. a cache that would be shared across multiple requests to your webapp/API to reduce calls to the relational database."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," should only be used by a single request, and so the cache is request scoped."),(0,o.kt)("p",null,"Granted, shared/second-level caches can be a good idea, but it means you have to worry about cache invalidation and staleness strategies, so for now Joist avoids that complexity."))}p.isMDXComponent=!0}}]);