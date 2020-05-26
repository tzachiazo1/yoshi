(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(9),o=(r(0),r(283)),a={id:"runtime-API",title:"Runtime API",sidebar_label:"Runtime API"},p={id:"version-4.x/editor-flow/runtime-API",title:"Runtime API",description:"yoshi-flow-editor-runtime package provides a lot of useful helpers to reduce boilerplate for Out-of-iFrame apps.",source:"@site/versioned_docs/version-4.x/editor-flow/runtime-API.md",permalink:"/yoshi/docs/editor-flow/runtime-API",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/runtime-API.md",version:"4.x",lastUpdatedBy:"cowchimp",lastUpdatedAt:1589875147,sidebar_label:"Runtime API",sidebar:"version-4.x/editor-flow",previous:{title:"Component Level",permalink:"/yoshi/docs/editor-flow/structure-api/component"},next:{title:"Local Development",permalink:"/yoshi/docs/editor-flow/local-development"}},c=[{value:"<code>WixSDK</code>",id:"wixsdk",children:[{value:"Props",id:"props",children:[]}]}],l={rightToc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yoshi-flow-editor-runtime")," package provides a lot of useful helpers to reduce boilerplate for Out-of-iFrame apps."),Object(o.b)("h2",{id:"wixsdk"},Object(o.b)("inlineCode",{parentName:"h2"},"WixSDK")),Object(o.b)("p",null,"WixSDK is a Render Prop that provides ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix-private/fed-infra/blob/master/js-sdk-wrapper/src/types.ts"}),"IStaticWix")," object."),Object(o.b)("p",null,"It renders a children function with ",Object(o.b)("inlineCode",{parentName:"p"},"sdk")," argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { WixSDK } from 'yoshi-flow-editor-runtime';\n\nexport default () =>\n  <WixSDK>{sdk =>\n    <SomeComp Wix={sdk.Wix} /> IStaticWix or null\n  }</WixSDK>\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sdk.Wix")," will be ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if ",Object(o.b)("inlineCode",{parentName:"p"},"WixSDK")," is being used in Widget part and rendered in Viewer mode, so make sure you are checking if it's not ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to use it."),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"isEditor")," - should be passed for Settings part. It triggers a ",Object(o.b)("inlineCode",{parentName:"p"},"WixSDK"),", so it will use strict types for ",Object(o.b)("inlineCode",{parentName:"p"},"sdk.Wix")," and it won't be ",Object(o.b)("em",{parentName:"p"},"optional"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Settings.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { WixSDK } from 'yoshi-flow-editor-runtime';\n\nexport default () =>\n  <WixSDK isEditor>{sdk =>\n    <SomeComp Wix={sdk.Wix} /> // IStaticWix\n  }</WixSDK>\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We are currently working on implementing more runtime helpers")))}s.isMDXComponent=!0},283:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return r?i.a.createElement(m,p(p({ref:t},l),{},{components:r})):i.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);