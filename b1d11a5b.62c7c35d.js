(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),l=(n(0),n(282)),r={id:"yoshi-config",title:"Yoshi Config",sidebar_label:"Yoshi Config"},s={id:"yoshi-config",title:"Yoshi Config",description:"> Yoshi config is currently being used in the following flows: [Legacy](legacy-flow.md), [App](app-flow.md) & Monorepo.",source:"@site/docs/yoshi-config.md",permalink:"/yoshi/docs/next/yoshi-config",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/yoshi-config.md",version:"next",lastUpdatedBy:"yanivefraim",lastUpdatedAt:1589713724,sidebar_label:"Yoshi Config",sidebar:"docs",previous:{title:"Testing",permalink:"/yoshi/docs/next/testing"},next:{title:"Node API",permalink:"/yoshi/docs/next/node-api"}},i=[{value:"extends",id:"extends",children:[]},{value:"separateCss",id:"separatecss",children:[]},{value:"splitChunks",id:"splitchunks",children:[]},{value:"cssModules",id:"cssmodules",children:[]},{value:"tpaStyle",id:"tpastyle",children:[]},{value:"enhancedTpaStyle",id:"enhancedtpastyle",children:[]},{value:"separateStylableCss",id:"separatestylablecss",children:[]},{value:"clientProjectName",id:"clientprojectname",children:[]},{value:"keepFunctionNames",id:"keepfunctionnames",children:[]},{value:"entry",id:"entry",children:[]},{value:"servers.cdn",id:"serverscdn",children:[]},{value:"externals",id:"externals",children:[]},{value:"startUrl",id:"starturl",children:[]},{value:"specs",id:"specs",children:[]},{value:"exports",id:"exports",children:[]},{value:"transpileTests",id:"transpiletests",children:[]},{value:"hmr",id:"hmr",children:[]},{value:"liveReload",id:"livereload",children:[]},{value:"performance",id:"performance",children:[]},{value:"resolveAlias",id:"resolvealias",children:[]},{value:"hooks",id:"hooks",children:[]},{value:"umdNamedDefine",id:"umdnameddefine",children:[]}],c={rightToc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Yoshi config is currently being used in the following flows: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/yoshi/docs/next/legacy-flow"}),"Legacy"),", ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/yoshi/docs/next/app-flow"}),"App")," & Monorepo.")),Object(l.b)("p",null,"Configurations are meant to be inside ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," under ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi")," section or by passing flags to common tasks, for example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-project",\n  "version": "0.0.1",\n  "yoshi": {\n    "entry": {\n      "app": "./app2.js"\n    }\n  }\n}\n')),Object(l.b)("p",null,"Alternatively, you can create a file named ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," in your project's root directory, and export an object with the configuration you need. For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  entry: {\n    app: "./app2.js"\n  }\n};\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Yoshi will prefer configuration from ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," over ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," file.")),Object(l.b)("h3",{id:"extends"},"extends"),Object(l.b)("p",null,"A path to a package that sets up defaults for ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi"),"'s config. The project's config can override those defaults."),Object(l.b)("p",null,"The purpose of this option is to allow reusing configurations that are the same across multiple (similar) projects."),Object(l.b)("p",null,"Here's an example of how a simple ",Object(l.b)("inlineCode",{parentName:"p"},"extends")," file looks like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  defaultConfig: {\n    exports: "[name]",\n    externals: {\n      lodash: "lodash"\n    }\n  }\n};\n')),Object(l.b)("h3",{id:"separatecss"},"separateCss"),Object(l.b)("p",null,"By default, your ",Object(l.b)("inlineCode",{parentName:"p"},"require"),"d css will bundled to a separate ",Object(l.b)("inlineCode",{parentName:"p"},"app.css")," bundle. You can leave your css in main js bundle by adding the following to your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "separateCss": false\n}\n')),Object(l.b)("h3",{id:"splitchunks"},"splitChunks"),Object(l.b)("p",null,"Configure webpack's ",Object(l.b)("inlineCode",{parentName:"p"},"optimization.splitChunks")," option. It's an opt-in feature that creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points."),Object(l.b)("p",null,"Supports both ",Object(l.b)("inlineCode",{parentName:"p"},"false")," value ",Object(l.b)("em",{parentName:"p"},"(default)"),", ",Object(l.b)("inlineCode",{parentName:"p"},"true")," and a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#configuration"}),"configuration object"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "splitChunks": true\n  }\n')),Object(l.b)("h3",{id:"cssmodules"},"cssModules"),Object(l.b)("p",null,"We use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"css modules")," as default. You can disable this option any time by adding the following to wix section inside your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "cssModules": false\n}\n')),Object(l.b)("p",null,"You also use the ",Object(l.b)("inlineCode",{parentName:"p"},"prod")," keyword to only separate css on CI and production, this is useful for speeding up HMR on local dev environments."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "separateCss": "prod"\n}\n')),Object(l.b)("p",null,"Disabling cssModules on a specific css file is possible by adding ",Object(l.b)("inlineCode",{parentName:"p"},".global")," before file extension.\nFor example:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"./Counter.global.scss")," //no css modules for this file"),Object(l.b)("p",null,"Using css modules inside your component is easy:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import s from "./Counter.scss"; // import css/scss\n\n<p className={s.mainColor}>{counterValue}</p>;\n')),Object(l.b)("p",null,"Using css when css modules are turned off:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import "./Counter.scss"; // import css/scss\n\n<p className="mainColor">{counterValue}</p>;\n')),Object(l.b)("h3",{id:"tpastyle"},"tpaStyle"),Object(l.b)("p",null,"Set to true to build with TPA style."),Object(l.b)("h3",{id:"enhancedtpastyle"},"enhancedTpaStyle"),Object(l.b)("p",null,"Set to true to build with enhanced TPA style."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/badge/status-experimental-ff69b4.svg",alt:"status experimental"})))),Object(l.b)("h3",{id:"separatestylablecss"},"separateStylableCss"),Object(l.b)("p",null,"Output the stylable css into ",Object(l.b)("inlineCode",{parentName:"p"},"app.stylable.bundle.css")," file."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"By default, the Stylable CSS output will be bundled to the JS bundle (using the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/stylable/tree/master/packages/webpack-plugin#plugin-configuration-options"}),Object(l.b)("inlineCode",{parentName:"a"},"includeCSSInJS")," option"),").")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "separateStylableCss": true\n}\n')),Object(l.b)("h3",{id:"clientprojectname"},"clientProjectName"),Object(l.b)("p",null,"The name of the client project."),Object(l.b)("h3",{id:"keepfunctionnames"},"keepFunctionNames"),Object(l.b)("p",null,"Set to true to keep function names when uglifying"),Object(l.b)("h3",{id:"entry"},"entry"),Object(l.b)("p",null,"Explanation is in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#build"}),"cli/build")," section."),Object(l.b)("h3",{id:"serverscdn"},"servers.cdn"),Object(l.b)("p",null,"Configuration for the CDN server. The default config is:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "servers": {\n      "cdn": {\n        "ssl": false,\n        "port": 3200,\n        "dir": "dist/statics",\n        "url": "http://localhost:3200"\n      }\n    }\n  }\n}\n')),Object(l.b)("h4",{id:"ssl"},"ssl"),Object(l.b)("p",null,"By setting ssl to true your CDN server will start with HTTPS. You may have to approve the certificates by manually going to ",Object(l.b)("inlineCode",{parentName:"p"},"https://localhost:3200")," on your browser."),Object(l.b)("h4",{id:"url"},"url"),Object(l.b)("p",null,"Yoshi will take care to switch between http and https when using ssl, but you can also manually set the url with this option."),Object(l.b)("h3",{id:"externals"},"externals"),Object(l.b)("p",null,"Prevent bundling of certain imported packages and instead retrieve these external dependencies at runtime (as a script tags)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "externals": {\n      "react": "React"\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"starturl"},"startUrl"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Similar to ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi start --url")," cli option\nIf both are specified ",Object(l.b)("inlineCode",{parentName:"p"},"--url")," will be used.")),Object(l.b)("p",null,"opens the browser on the specified url.\nSupports a url string or an array of url strings."),Object(l.b)("h3",{id:"specs"},"specs"),Object(l.b)("p",null,"Specs globs are configurable. ",Object(l.b)("inlineCode",{parentName:"p"},"browser")," is for karma, ",Object(l.b)("inlineCode",{parentName:"p"},"node")," is for mocha and jasmine."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "specs": {\n      "browser": "dist/custom/globs/**/*.spec.js",\n      "node": "dist/custom/globs/**/*.spec.js"\n    }\n  }\n}\n')),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "specs": {\n      "browser": "dist/src/client/**/*.spec.js",\n      "node": "dist/src/server/**/*.spec.js"\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"exports"},"exports"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Please use ",Object(l.b)("strong",{parentName:"p"},"exports")," and not export, there is a bug that the search doesn't work")),Object(l.b)("p",null,"If set, export the bundle as library. ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi.exports")," is the name."),Object(l.b)("p",null,"Use this if you are writing a library and want to publish it as single file. Library will be exported with ",Object(l.b)("inlineCode",{parentName:"p"},"UMD")," format."),Object(l.b)("h3",{id:"transpiletests"},"transpileTests"),Object(l.b)("p",null,"An option to not transpile tests with Babel (via ",Object(l.b)("inlineCode",{parentName:"p"},"@babel/register"),"). Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"."),Object(l.b)("h3",{id:"hmr"},"hmr"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Boolean")," | ",Object(l.b)("inlineCode",{parentName:"p"},'"auto"')),Object(l.b)("p",null,"Set to ",Object(l.b)("inlineCode",{parentName:"p"},"false")," in order to disable hot module replacement. (defaults to true)"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'"auto"')," is an experimental feature which provides zero configuration HMR for react. It will include ",Object(l.b)("inlineCode",{parentName:"p"},"react-hot-loader")," to the top of the entry file and will wrap React's root component in special Higher Order Component which enables hot module reload for react. Also it will call ",Object(l.b)("inlineCode",{parentName:"p"},"module.hot.accept")," on the project's entry file."),Object(l.b)("h3",{id:"livereload"},"liveReload"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Boolean")),Object(l.b)("p",null,"If true, instructs the browser to physically refresh the entire page if / when webpack indicates that a hot patch cannot be applied and a full refresh is needed."),Object(l.b)("h3",{id:"performance"},"performance"),Object(l.b)("p",null,"Allows to use the Webpack Performance Budget feature.\nThe configuration object is the same as in webpack.\nFor more info, you can read the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/performance/"}),"webpack docs"),"."),Object(l.b)("h3",{id:"resolvealias"},"resolveAlias"),Object(l.b)("p",null,"Allows you to use the Webpack Resolve Alias feature.\nThe configuration object is the same as in Webpack, note that the paths are relative to Webpack's context.\nFor more info, you can read the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/resolve/#resolve-alias"}),"webpack docs"),"."),Object(l.b)("h3",{id:"hooks"},"hooks"),Object(l.b)("p",null,"Run a shell script at a specific time in yoshi's execution."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "hooks": {\n      "prelint": "echo running-before-lint"\n    }\n  }\n}\n')),Object(l.b)("p",null,"Next time you'll run ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi lint"),", this command will execute and only then the linter will run."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"supported hooks:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"prelint")," - Runs before the linter")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Missing a hook?")," Feel free to open issues/PRs for more hooks if needed."),Object(l.b)("h3",{id:"umdnameddefine"},"umdNamedDefine"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Boolean")),Object(l.b)("p",null,"If option is ",Object(l.b)("inlineCode",{parentName:"p"},"true")," AMD modules of the UMD build will have names. Otherwise an anonymous define is used(the same as in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/output/#output-umdnameddefine"}),"webpack"),").\nBy default it is ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"."))}b.isMDXComponent=!0},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,j=p["".concat(r,".").concat(d)]||p[d]||u[d]||l;return n?o.a.createElement(j,s({ref:t},c,{components:n})):o.a.createElement(j,s({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);