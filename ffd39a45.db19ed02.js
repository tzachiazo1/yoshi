(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{273:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(2),i=t(9),a=(t(0),t(278)),o={id:"middlewares",title:"Middlewares",sidebar_label:"Middlewares"},s={id:"yoshi-server/middlewares",title:"Middlewares",description:"Yoshi Server provides built-in middlewares that parse the incoming request. Those middlewares are:",source:"@site/docs/yoshi-server/middlewares.md",permalink:"/yoshi/docs/next/yoshi-server/middlewares",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/yoshi-server/middlewares.md",version:"next",lastUpdatedBy:"Vytenis Butkevicius",lastUpdatedAt:1589375475,sidebar_label:"Middlewares",sidebar:"yoshi-server",previous:{title:"Initializing Server Data",permalink:"/yoshi/docs/next/yoshi-server/initializing-server-data"},next:{title:"Custom Server",permalink:"/yoshi/docs/next/yoshi-server/custom-server"}},c=[],p={rightToc:c};function l(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Yoshi Server provides built-in middlewares that parse the incoming request. Those middlewares are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/expressjs/cookie-parser"}),Object(a.b)("inlineCode",{parentName:"a"},"cookie-parser"))," - parse Cookie header and populate ",Object(a.b)("inlineCode",{parentName:"li"},"req.cookies")," with an object keyed by the cookie names."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wix-platform/wix-node-platform/tree/master/express/wix-express-require-https"}),Object(a.b)("inlineCode",{parentName:"a"},"wix-express-require-https"))," - redirects requests made through http to http."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wix-platform/wix-node-platform/blob/master/express/wix-express-csrf/README.md"}),Object(a.b)("inlineCode",{parentName:"a"},"wix-express-csrf"))," - provides csrf protection.")),Object(a.b)("h1",{id:"express-middlewares-support"},"Express Middlewares Support"),Object(a.b)("p",null,"Yoshi Server provides the ",Object(a.b)("inlineCode",{parentName:"p"},"runMiddleware")," function, which lets you run an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:""}),"express middleware")," from your server function/route."),Object(a.b)("p",null,"For example, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}),"configuring CORS (cross-origin)")," for your server function can be done by leveraging the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/expressjs/cors"}),"cors")," package."),Object(a.b)("p",null,"Let's add ",Object(a.b)("inlineCode",{parentName:"p"},"cors")," to the our server function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import Cors from 'cors'\nimport { method, runMiddleware } from \"yoshi-server\";\n\n// Initializing the cors middleware\nconst cors = Cors(); // Enable all CORS requests\n\nexport const greeting = method(function(age: number) {\n  // Run the middleware\n  await runMiddleware(this.req, this.res, cors)\n\n  return {\n    name: `world! ${age}`,\n    age\n  };\n});\n")),Object(a.b)("h1",{id:"applying-a-middleware-for-multiple-server-functions--routes"},"Applying a middleware for multiple server functions / routes"),Object(a.b)("p",null,"To apply a middlware to multiple server functions/routes, check the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"custom-server"}),"Custom Server")," documentation."))}l.isMDXComponent=!0},278:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var r=i.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s({},r,{},e)),t},u=function(e){var r=l(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return t?i.a.createElement(m,s({ref:r},p,{components:t})):i.a.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);