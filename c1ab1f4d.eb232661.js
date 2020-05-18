(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{238:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(278)),o={id:"project-types",title:"Project Types",sidebar_label:"Project Types"},s={id:"version-3.x/getting-started/project-types",title:"Project Types",description:"The following Project Types can be generated using `create-yoshi-app`:",source:"@site/versioned_docs/version-3.x/getting-started/project-types.md",permalink:"/yoshi/docs/3.x/getting-started/project-types",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/getting-started/project-types.md",version:"3.x",lastUpdatedBy:"Akrabut",lastUpdatedAt:1589369227,sidebar_label:"Project Types",sidebar:"version-3.x-docs",previous:{title:"Usage",permalink:"/yoshi/docs/3.x/getting-started/usage"},next:{title:"Configuration",permalink:"/yoshi/docs/3.x/api/configuration"}},c=[{value:"Client",id:"client",children:[]},{value:"Fullstack",id:"fullstack",children:[]},{value:"Node Library",id:"node-library",children:[]},{value:"Server",id:"server",children:[]},{value:"Universal",id:"universal",children:[]},{value:"Business Manager Module",id:"business-manager-module",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following Project Types can be generated using ",Object(i.b)("inlineCode",{parentName:"p"},"create-yoshi-app"),":"),Object(i.b)("h2",{id:"client"},"Client"),Object(i.b)("p",null,"Only Client project built with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React"),". The result is a bundle that will be uploaded to the cdn."),Object(i.b)("h2",{id:"fullstack"},"Fullstack"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js")," Server + Client project. The result is similar to the client, with a server that serves an html file which uses the created bundle."),Object(i.b)("h2",{id:"node-library"},"Node Library"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.npmjs.com/getting-started/creating-node-modules"}),"Node.js")," module that should be used by other Node.js applications as a 3rd party dependency."),Object(i.b)("h2",{id:"server"},"Server"),Object(i.b)("p",null,"Only Server project"),Object(i.b)("h2",{id:"universal"},"Universal"),Object(i.b)("p",null,"The server will handle the initial render when a user first requests your app. It will render all of the required components and send the response as a string back to the client (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-dom-server.html"}),"server-side rendering"),"). From that point on, the client takes over rendering duties."),Object(i.b)("p",null,"The server will also be responsible for making ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix-private/fed-handbook/blob/master/RPC.md"}),"RPC")," calls for different services and exposing a RESTful API for it's client application."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Important Note:")," A universal project is significantly more complex than it's fullstack counterpart, unless you require any of these features, it is recommended to use the fullstack project instead."),Object(i.b)("h2",{id:"business-manager-module"},"Business Manager Module"),Object(i.b)("p",null,"A client project that integrate with business manager APIs."),Object(i.b)("hr",null),Object(i.b)("p",null,"For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/tree/master/packages/create-yoshi-app/templates"}),"the templates"),"\nfor those project types"))}p.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(h,s({ref:t},l,{components:r})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);