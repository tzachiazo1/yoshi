(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{239:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(9),a=(r(0),r(283)),o={id:"initializing-server-data",title:"Initializing Server Data",sidebar_label:"Initializing Server Data"},c={id:"version-4.x/yoshi-server/initializing-server-data",title:"Initializing Server Data",description:"Initializing Server Data",source:"@site/versioned_docs/version-4.x/yoshi-server/initializing-server-data.md",permalink:"/yoshi/docs/yoshi-server/initializing-server-data",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/yoshi-server/initializing-server-data.md",version:"4.x",lastUpdatedBy:"cowchimp",lastUpdatedAt:1589875147,sidebar_label:"Initializing Server Data",sidebar:"version-4.x/yoshi-server",previous:{title:"React Binding",permalink:"/yoshi/docs/yoshi-server/react-binding"},next:{title:"Middlewares",permalink:"/yoshi/docs/yoshi-server/middlewares"}},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"initializing-server-data"},"Initializing Server Data"),Object(a.b)("p",null,"Yoshi Server functions and routes run for every request, while sometimes we want to run setup code only once, during server initialization."),Object(a.b)("p",null,"Start by creating a ",Object(a.b)("inlineCode",{parentName:"p"},"src/init-server.[j|t]s")," file with a function that receives the node-platform's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context"}),"context")," object, and returns any object:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// src/init-server.ts\nimport { BootstrapContext } from "@wix/wix-bootstrap-ng/typed";\nexport default async (context: BootstrapContext) => {\n  return {\n    myData: "hello world"\n  };\n};\n')),Object(a.b)("p",null,"Then in your functions/routes, it will be available under ",Object(a.b)("inlineCode",{parentName:"p"},"this.initData"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { method } from \"yoshi-server\";\n\nexport const greeting = method(function(age: number) {\n  console.log(this.initData.myData); // logs 'hello world'\n\n  return {\n    name: `world! ${age}`,\n    age\n  };\n});\n")))}p.isMDXComponent=!0},283:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return r?i.a.createElement(m,c(c({ref:t},l),{},{components:r})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);