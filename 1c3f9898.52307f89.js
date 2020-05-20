(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),o=(n(0),n(282)),i={id:"jest-yoshi-preset",title:"Jest Yoshi Preset",sidebar_label:"Jest Yoshi Preset"},s={id:"version-4.x/jest-yoshi-preset",title:"Jest Yoshi Preset",description:"## Introduction",source:"@site/versioned_docs/version-4.x/jest-yoshi-preset.md",permalink:"/yoshi/docs/jest-yoshi-preset",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/jest-yoshi-preset.md",version:"4.x",lastUpdatedBy:"yanivefraim",lastUpdatedAt:1589713724,sidebar_label:"Jest Yoshi Preset"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Dev mode",id:"dev-mode",children:[]},{value:"CI mode",id:"ci-mode",children:[]}]},{value:"Test types",id:"test-types",children:[{value:"Component and Unit tests",id:"component-and-unit-tests",children:[]},{value:"Browser and Server e2e tests",id:"browser-and-server-e2e-tests",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Setup Files",id:"setup-files",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Yoshi defines a custom ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#preset-string"}),"Jest preset")," to enable zero-configuration testing for most apps."),Object(o.b)("p",null,"This preset configures Jest with 2 different project types (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#projects-array-string-projectconfig"}),"learn more"),"), each project uses a unique environment (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#testenvironment-string"}),"learn more"),"). Each environment sets up its own globals and is configured to run for every file that matches a certain glob pattern (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/isaacs/node-glob"}),"learn more"),")."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev jest-yoshi-preset puppeteer\n")),Object(o.b)("p",null,"Add the following to your Jest config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "preset": "jest-yoshi-preset"\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you're using TypeScript you should add ",Object(o.b)("inlineCode",{parentName:"p"},"jest-yoshi-preset")," types to your code by adding the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "files": ["./node_modules/jest-yoshi-preset/types.d.ts"]\n}\n')),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"dev-mode"},"Dev mode"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"start")," command to build and serve your bundle and static files, your ",Object(o.b)("inlineCode",{parentName:"p"},"e2e")," tests require them."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yoshi start\n")),Object(o.b)("p",null,"From a different terminal window, use ",Object(o.b)("inlineCode",{parentName:"p"},"npx jest")," command normally."),Object(o.b)("p",null,"Run a specific test"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npx jest my-specific-test\n")),Object(o.b)("p",null,"Run all tests of a specific type (different ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#projects-array-string-projectconfig"}),"jest project"),")."),Object(o.b)("p",null,"You can filter the tests using the display name (",Object(o.b)("inlineCode",{parentName:"p"},"e2e"),", ",Object(o.b)("inlineCode",{parentName:"p"},"spec"),")"),Object(o.b)("p",null,"For example, running only e2e tests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"MATCH_ENV=e2e npx jest\n")),Object(o.b)("p",null,"Run jest using watch mode"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npx jest --watch\n")),Object(o.b)("h3",{id:"ci-mode"},"CI mode"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also use this mode locally")),Object(o.b)("p",null,"In this mode, your tests will run against you local ",Object(o.b)("inlineCode",{parentName:"p"},"dist/statics")," directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npx yoshi test\n")),Object(o.b)("p",null,"Yoshi serves the files from ",Object(o.b)("inlineCode",{parentName:"p"},"dist/statics"),". Make sure to run ",Object(o.b)("inlineCode",{parentName:"p"},"npx yoshi build")," before you run the tests using this mode."),Object(o.b)("h2",{id:"test-types"},"Test types"),Object(o.b)("h3",{id:"component-and-unit-tests"},"Component and Unit tests"),Object(o.b)("p",null,"Run against all ",Object(o.b)("inlineCode",{parentName:"p"},".spec.js")," or ",Object(o.b)("inlineCode",{parentName:"p"},".spec.ts")," files. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jsdom/jsdom"}),"JSDOM")," environment is included."),Object(o.b)("h3",{id:"browser-and-server-e2e-tests"},"Browser and Server e2e tests"),Object(o.b)("p",null,"Run against all ",Object(o.b)("inlineCode",{parentName:"p"},".e2e.js")," or ",Object(o.b)("inlineCode",{parentName:"p"},".e2e.ts")," files. Starts up a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-platform/wix-node-platform"}),"bootstrap server")," instance and creates a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer"}),"Puppeteer")," page for that test."),Object(o.b)("p",null,"It creates a global ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md#class-browser"}),"Browser")," instance and a global ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md#class-page"}),"Page")," instance for every test file. They're available as ",Object(o.b)("inlineCode",{parentName:"p"},"global.browser")," and ",Object(o.b)("inlineCode",{parentName:"p"},"global.page")," respectively."),Object(o.b)("p",null,"Has a default test timeout of 10 seconds."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("h4",{id:"api"},"API"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"puppeteer")," - a configuration object to be passed as ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions"}),"options")," to Puppeteer's launch method"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"bootstrap")," - node platform bootstrap setup:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setup")," - environment setup function which is called before each test file"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"teardown")," - environment teardown function which called after each test file"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"server")," - server to be bootstraped",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"command")," - runs a command which bootstrap the server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"port")," - wait for a server to start listening on this port before running the tests. This port will be available in your server script as an environment variable (PORT)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"e2eOptions")," - overrides for ",Object(o.b)("inlineCode",{parentName:"li"},"e2e")," environment. For now, only ",Object(o.b)("inlineCode",{parentName:"li"},"globals")," and ",Object(o.b)("inlineCode",{parentName:"li"},"moduleNameMapper")," are available"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"specOptions")," - overrides for ",Object(o.b)("inlineCode",{parentName:"li"},"spec")," environment. For now, only ",Object(o.b)("inlineCode",{parentName:"li"},"globals"),", ",Object(o.b)("inlineCode",{parentName:"li"},"moduleNameMapper"),", ",Object(o.b)("inlineCode",{parentName:"li"},"testURL")," and ",Object(o.b)("inlineCode",{parentName:"li"},"resetMocks")," are available"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"collectCoverage")," - Jest's ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#collectcoverage-boolean"}),"collectCoverage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"coveragePathIgnorePatterns")," - Jest's ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#coveragepathignorepatterns-array-string"}),"coveragePathIgnorePatterns")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"collectCoverageFrom")," - Jest's ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#collectcoveragefrom-array"}),"collectCoverageFrom")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"coverageReporters")," - Jest's ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#coveragereporters-array-string"}),"coverageReporters")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"coverageDirectory")," - Jest's ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#coveragedirectory-string"}),"coverageDirectory")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"coverageThreshold")," - Jest's ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#coveragethreshold-object"}),"coverageThreshold"))),Object(o.b)("p",null,"This preset looks for a ",Object(o.b)("inlineCode",{parentName:"p"},"jest-yoshi.config.js")," file at the root of your project. The exported object is used to configure different parts of the preset."),Object(o.b)("p",null,"example configurations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/typescript/jest-yoshi.config.js"}),"fullstack project")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/client/typescript/jest-yoshi.config.js"}),"client project"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  bootstrap: {\n    // environment setup function which called before each test file\n    setup: async ({ globalObject }) => {},\n    // environment teardown function which called after each test file\n    teardown: async ({ globalObject }) => {}\n  },\n  server: {\n    // runs a command which bootstrap the server\n    command: "node server.js",\n    // wait for a server to start listening on this port before running the tests\n    // this port will be available in your server script as an environment variable (PORT)\n    port: 3000\n  },\n  puppeteer: {\n    // toggle headless chrome mode\n    headless: true\n  }\n};\n')),Object(o.b)("h3",{id:"setup-files"},"Setup Files"),Object(o.b)("p",null,"If you want to run some code before your tests you can use one of the 2 following setup files (1 for each environment):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<rootDir>/__tests__/spec-setup.(j|t)s"),": Setup for ",Object(o.b)("inlineCode",{parentName:"li"},".spec")," tests (Component and Unit tests)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<rootDir>/__tests__/e2e-setup.(j|t)s"),": Setup for ",Object(o.b)("inlineCode",{parentName:"li"},".e2e")," tests (Browser an Server e2e tests)")),Object(o.b)("p",null,"These setup files are actually ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#setupfilesafterenv-array"}),"Jests's ",Object(o.b)("inlineCode",{parentName:"a"},"setupFilesAfterEnv"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A path to a module that runs some code to configure or set up the testing framework before each test.")))}b.isMDXComponent=!0},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),j=a,d=p["".concat(i,".").concat(j)]||p[j]||u[j]||o;return n?r.a.createElement(d,s({ref:t},l,{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=j;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);