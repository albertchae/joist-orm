"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[349],{5318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8399:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(5773),o=r(808),i=(r(7378),r(5318)),a=["components"],s={title:"Derived Fields"},l=void 0,c={unversionedId:"features/derived-fields",id:"features/derived-fields",isDocsHomePage:!1,title:"Derived Fields",description:"If you mark a field as derived in joist-codegen.json, it will not have a setter, only an abstract getter than you must implement, and that Joist will call to use as the column in the database.",source:"@site/docs/features/derived-fields.md",sourceDirName:"features",slug:"/features/derived-fields",permalink:"/joist-ts/docs/features/derived-fields",editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/derived-fields.md",tags:[],version:"current",frontMatter:{title:"Derived Fields"},sidebar:"tutorialSidebar",previous:{title:"Cascading Deletions",permalink:"/joist-ts/docs/features/cascade-deletions"},next:{title:"graphql-filters",permalink:"/joist-ts/docs/features/graphql-filters"}},u=[],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you mark a field as derived in ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen.json"),", it will not have a setter, only an ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract")," getter than you must implement, and that Joist will call to use as the column in the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "derivedFields": ["Author.initials"]\n}\n')),(0,i.kt)("p",null,"Note that this currently only works for primitive columns, and the getter must be synchronous."))}f.isMDXComponent=!0}}]);