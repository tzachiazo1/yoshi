(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),s=(r(0),r(278)),i={id:"disable-css-modules",title:"Disable CSS Modules",sidebar_label:"Disable CSS Modules"},a={id:"version-3.x/guides/disable-css-modules",title:"Disable CSS Modules",description:"There are situations when you are using css modules inside you project, but you need to disable them in specific places (for example, when importing css from 3rd party vendor).",source:"@site/versioned_docs/version-3.x/guides/disable-css-modules.md",permalink:"/yoshi/docs/3.x/guides/disable-css-modules",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/guides/disable-css-modules.md",version:"3.x",lastUpdatedBy:"Akrabut",lastUpdatedAt:1589369227,sidebar_label:"Disable CSS Modules",sidebar:"version-3.x-docs",previous:{title:"Debugging",permalink:"/yoshi/docs/3.x/guides/debugging"},next:{title:"Testing With Enzyme",permalink:"/yoshi/docs/3.x/guides/enzyme-support"}},c=[{value:"Importing css from node_modules",id:"importing-css-from-node_modules",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"There are situations when you are using css modules inside you project, but you need to disable them in specific places (for example, when importing css from 3rd party vendor)."),Object(s.b)("p",null,"In those cases you can wrap your css with ",Object(s.b)("inlineCode",{parentName:"p"},":global"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),":global {\n  .global-class-name {\n    color: green;\n  }\n}\n")),Object(s.b)("p",null,"Please find more details ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#exceptions"}),"here"),"."),Object(s.b)("h2",{id:"importing-css-from-node_modules"},"Importing css from node_modules"),Object(s.b)("p",null,"In case you want to import a css from your node modules, just ",Object(s.b)("inlineCode",{parentName:"p"},"@import")," it inside your scss file, and wrap it with ",Object(s.b)("inlineCode",{parentName:"p"},":global"),":"),Object(s.b)("p",null,"Importing style.scss from '3rd-party-module/x/style.scss':"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),'@import "3rd-party-module/x/style.scss";\n')),Object(s.b)("p",null,"In case you are importing a regular 'css' file, just omit file extension:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),'@import "3rd-party-module/x/style";\n')))}u.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return r?o.a.createElement(m,a({ref:t},l,{components:r})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);