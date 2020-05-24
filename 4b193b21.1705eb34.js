(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{179:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(2),r=t(9),i=(t(0),t(284)),a={id:"split-chunks",title:"Split Chunks",sidebar_label:"Split Chunks"},c={id:"version-4.x/development/split-chunks",title:"Split Chunks",description:"## How do I separately bundle common logic for multiple entries?",source:"@site/versioned_docs/version-4.x/development/split-chunks.md",permalink:"/yoshi/docs/development/split-chunks",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/development/split-chunks.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589792762,sidebar_label:"Split Chunks",sidebar:"version-4.x/docs",previous:{title:"Moment.js optimization",permalink:"/yoshi/docs/development/momentjs-optimization"},next:{title:"Version 4 Migration guide",permalink:"/yoshi/docs/migration-guide"}},l=[{value:"How do I separately bundle common logic for multiple entries?",id:"how-do-i-separately-bundle-common-logic-for-multiple-entries",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-do-i-separately-bundle-common-logic-for-multiple-entries"},"How do I separately bundle common logic for multiple entries?"),Object(i.b)("p",null,"If you are using multiple entries you might consider using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693"}),Object(i.b)("inlineCode",{parentName:"a"},"yoshi.splitChunks")),", it will create a separate file (chunk) consisting of common modules shared between multiple entry points. This results in page speed optimizations as the browser can quickly serve the shared code from cache, rather than being forced to load a larger bundle whenever a new page is visited."),Object(i.b)("p",null,"If you want to add it, go to your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and add the ",Object(i.b)("inlineCode",{parentName:"p"},"commonChunks")," option, the value can be a ",Object(i.b)("em",{parentName:"p"},"boolean")," or an ",Object(i.b)("em",{parentName:"p"},"object"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "entry": {\n    "a": "./a",\n    "b": "./b",\n  },\n  "splitChunks": true\n}\n')),Object(i.b)("p",null,"Insert ",Object(i.b)("inlineCode",{parentName:"p"},"true")," for the default configuration and an object for custom configuration, it is the same config you would normally insert to the plugin -> ",Object(i.b)("inlineCode",{parentName:"p"},"optimization.splitChunks: <config>")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'// default configuration\n{\n  "chunks": "all",\n  "name": "commons",\n  "minChunks": 2\n};\n')),Object(i.b)("p",null,"Once the plugin is active it will generate the following files if needed:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"commons.chunk.js")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"commons.chunk.min.js")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"commons.chunk.js.map")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"commons.css")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"commons.min.css")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"commons.css.map"))),Object(i.b)("p",null,"Don't forget to add them into your html file before the entry point."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<script\n  src="commons.chunk<% if (!debug) { %>.min<% } %>.js"\n  charset="utf-8"\n><\/script>\n<script\n  src="entry.bundle<% if (!debug) { %>.min<% } %>.js"\n  charset="utf-8"\n><\/script>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<link\n  rel="stylesheet"\n  type="text/css"\n  href="commons<% if (!debug) { %>.min<% } %>.css"\n/>\n<link\n  rel="stylesheet"\n  type="text/css"\n  href="app<% if (!debug) { %>.min<% } %>.css"\n/>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," since ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.0")," version (webpack 4 support), if you're customizing ",Object(i.b)("inlineCode",{parentName:"p"},"splitChunks")," with ",Object(i.b)("em",{parentName:"p"},"configuration object"),", you should pass ",Object(i.b)("inlineCode",{parentName:"p"},'splitChunks.chunks: "all" | "async" | "initial"')," option.\nPlease look into ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#configuration"}),"RIP CommonsChunkPlugin")," to receive all advantage of webpack 4 ",Object(i.b)("inlineCode",{parentName:"p"},"splitChunks")," optimizations."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note 2:")," consider chunk filename update after ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.0"),": ",Object(i.b)("inlineCode",{parentName:"p"},"chunk")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"bundle"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),"- commons.bundle.js\n+ commons.chunk.js\n")))}p.isMDXComponent=!0},284:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=o,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||i;return t?r.a.createElement(d,c({ref:n},s,{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);