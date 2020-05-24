(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(284)),l={id:"bundle-analyze",title:"Analyze Your Bundle",sidebar_label:"Analyze Your Bundle"},i={id:"development/bundle-analyze",title:"Analyze Your Bundle",description:"Running `yoshi` with the `--stats` flag:",source:"@site/docs/development/bundle-analyze.md",permalink:"/yoshi/docs/next/development/bundle-analyze",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/development/bundle-analyze.md",version:"next",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589792762,sidebar_label:"Analyze Your Bundle",sidebar:"docs",previous:{title:"How to use SVG?",permalink:"/yoshi/docs/next/styles-and-assets/svg"},next:{title:"Debugging",permalink:"/yoshi/docs/next/development/debugging"}},b=[],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Running ",Object(o.b)("inlineCode",{parentName:"p"},"yoshi")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"--stats")," flag:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yoshi build --stats\n")),Object(o.b)("p",null,"Will generate a webpack profiling file in ",Object(o.b)("inlineCode",{parentName:"p"},"target/webpack-stats.json")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You can do one of the following:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"use the built in webpack-bundle-analyzer by adding the ",Object(o.b)("inlineCode",{parentName:"li"},"analyze")," option to the build command:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yoshi build --analyze\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"upload the ",Object(o.b)("inlineCode",{parentName:"li"},"webpack-stats.json")," file to a website:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://chrisbateman.github.io/webpack-visualizer/"}),"https://chrisbateman.github.io/webpack-visualizer/")),Object(o.b)("li",{parentName:"ul"},"Drag ",Object(o.b)("inlineCode",{parentName:"li"},"target/webpack-stats.json")," from your project and drop in browser page for analysis.")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"use the CLI with the ",Object(o.b)("inlineCode",{parentName:"p"},"webpack-stats.json"),": try ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/robertknight/webpack-bundle-size-analyzer"}),"https://github.com/robertknight/webpack-bundle-size-analyzer"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the webpack bundle analyzer page:"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://webpack.github.io/analyse/"}),"https://webpack.github.io/analyse/")),Object(o.b)("li",{parentName:"ul"},"Upload ",Object(o.b)("inlineCode",{parentName:"li"},"target/webpack-stats.json")," from your project")))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,i({ref:t},c,{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);