"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[142],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4767:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],u={title:"Validation Rules"},l=void 0,s={unversionedId:"features/validation-rules",id:"features/validation-rules",isDocsHomePage:!1,title:"Validation Rules",description:"Entities can have validation rules added that will be run during EntityManager.flush():",source:"@site/docs/features/validation-rules.md",sourceDirName:"features",slug:"/features/validation-rules",permalink:"/joist-ts/docs/features/validation-rules",editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/validation-rules.md",tags:[],version:"current",frontMatter:{title:"Validation Rules"},sidebar:"tutorialSidebar",previous:{title:"Unit of Work",permalink:"/joist-ts/docs/features/unit-of-work"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Entities can have validation rules added that will be run during ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager.flush()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class Author extends AuthorCodegen {\n  constructor(em: EntityManager, opts: AuthorOpts) {\n    super(em, opts);\n  })\n}\n\nauthorConfig.addRule((author) => {\n  if (author.firstName && author.firstName === author.lastName) {\n    return "firstName and lastName must be different";\n  }\n});\n\n// Rules can be async\nauthorConfig.addRule(async (author) => {\n  const books = await authorthis.books.load();\n  // ...\n});\n')),(0,o.kt)("p",null,"If any validation rule returns a non-",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," string, ",(0,o.kt)("inlineCode",{parentName:"p"},"flush()")," will throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationErrors")," error."),(0,o.kt)("p",null,"If you would like to skip validation rules, you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"skipValidation: true")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"flush()"),". Use this technique with caution, as it can create invalid entities."))}d.isMDXComponent=!0}}]);