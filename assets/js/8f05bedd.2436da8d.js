"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11],{5318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7055:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=r(5773),n=r(808),a=(r(7378),r(5318)),i=["components"],s={title:"Goals",slug:"/goals",sidebar_label:"Overview",sidebar_position:1},l=void 0,c={unversionedId:"goals/overview",id:"goals/overview",isDocsHomePage:!1,title:"Goals",description:"The high-level goal of Joist is to bring ActiveRecord-level productivity to TypeScript/Node projects.",source:"@site/docs/goals/overview.md",sourceDirName:"goals",slug:"/goals",permalink:"/joist-ts/docs/goals",editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/goals/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Goals",slug:"/goals",sidebar_label:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Adding to Your Project",permalink:"/joist-ts/docs/getting-started/adding-to-your-project"},next:{title:"Code Generation",permalink:"/joist-ts/docs/goals/code-generation"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The high-level goal of Joist is to bring ",(0,a.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/active_record_basics.html"},"ActiveRecord"),"-level productivity to TypeScript/Node projects."),(0,a.kt)("p",null,"This is a lofty goal, and Joist has just started down that road, but that is the standard Joist strives for and ideally can surpass."),(0,a.kt)("p",null,"The major goals are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/joist-ts/docs/goals/code-generation"},"code generation")," to move fast and reduce boilerplate"),(0,a.kt)("li",{parentName:"ul"},"Avoid ",(0,a.kt)("a",{parentName:"li",href:"/joist-ts/docs/goals/dataloader-integration"},"N+1s")," through first-class dataloader integration"),(0,a.kt)("li",{parentName:"ul"},"Make ",(0,a.kt)("a",{parentName:"li",href:"/joist-ts/docs/goals/type-safe-relations"},"loaded vs. unloaded collections")," represented in the type system"),(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("a",{parentName:"li",href:"/joist-ts/docs/goals/great-tests"},"great testing")," with built-in factories and other support"),(0,a.kt)("li",{parentName:"ul"},"Internally have a ",(0,a.kt)("a",{parentName:"li",href:"/joist-ts/docs/goals/small-codebase"},"small & simple codebase")," to ease long-term maintenance concerns")))}d.isMDXComponent=!0}}]);