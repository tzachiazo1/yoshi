(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(278)),s={id:"jest-setup",title:"Jest Setup",sidebar_label:"Jest Setup"},i={id:"version-3.x/guides/jest-setup",title:"Jest Setup",description:"## Introduction",source:"@site/versioned_docs/version-3.x/guides/jest-setup.md",permalink:"/yoshi/docs/3.x/guides/jest-setup",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/guides/jest-setup.md",version:"3.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589364017,sidebar_label:"Jest Setup",sidebar:"version-3.x-docs",previous:{title:"Testing With Enzyme",permalink:"/yoshi/docs/3.x/guides/enzyme-support"},next:{title:"Babel Setup",permalink:"/yoshi/docs/3.x/guides/babel-setup"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Dev mode",id:"dev-mode",children:[]},{value:"CI mode",id:"ci-mode",children:[]}]},{value:"Environments",id:"environments",children:[{value:"JSDOM (component)",id:"jsdom-component",children:[]},{value:"Bootstrap (server)",id:"bootstrap-server",children:[]},{value:"Puppeteer (e2e)",id:"puppeteer-e2e",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Setup Files",id:"setup-files",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Yoshi defines a custom ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#preset-string"}),"Jest preset")," to enable zero-configuration testing for most apps."),Object(a.b)("p",null,"This preset configures Jest with 3 different project types (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#projects-array-string-projectconfig"}),"learn more"),"), each project uses a unique environment (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#testenvironment-string"}),"learn more"),"). Each environment sets up its own globals and is configured to run for every file that matches a certain glob pattern (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/isaacs/node-glob"}),"learn more"),")."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev jest-yoshi-preset puppeteer\n")),Object(a.b)("p",null,"Add the following to your Jest config:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "preset": "jest-yoshi-preset"\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you're using TypeScript you should add ",Object(a.b)("inlineCode",{parentName:"p"},"jest-yoshi-preset")," types to your code by adding the following to your ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "files": ["./node_modules/jest-yoshi-preset/types.d.ts"]\n}\n')),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"dev-mode"},"Dev mode"),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"start")," command to build and serve your bundle and static files, your ",Object(a.b)("inlineCode",{parentName:"p"},"e2e")," tests require them."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yoshi start --no-test\n")),Object(a.b)("p",null,"From a different terminal window, use ",Object(a.b)("inlineCode",{parentName:"p"},"npx jest")," command normally."),Object(a.b)("p",null,"Run a specific test"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npx jest my-specific-test\n")),Object(a.b)("p",null,"Run all tests of a specific type (different ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#projects-array-string-projectconfig"}),"jest project"),")."),Object(a.b)("p",null,"You can filter the tests using the display name (",Object(a.b)("inlineCode",{parentName:"p"},"e2e"),", ",Object(a.b)("inlineCode",{parentName:"p"},"component"),", ",Object(a.b)("inlineCode",{parentName:"p"},"server"),") and choose more than one, separated by commas."),Object(a.b)("p",null,"For example, running only server and component tests:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"MATCH_ENV=server,component npx jest\n")),Object(a.b)("p",null,"Run jest using watch mode"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npx jest --watch\n")),Object(a.b)("h3",{id:"ci-mode"},"CI mode"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can also use this mode locally")),Object(a.b)("p",null,"In this mode, your tests will run against you local ",Object(a.b)("inlineCode",{parentName:"p"},"dist/statics")," directory."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npx yoshi test --jest\n")),Object(a.b)("p",null,"Yoshi serves the files from ",Object(a.b)("inlineCode",{parentName:"p"},"dist/statics"),". Make sure to run ",Object(a.b)("inlineCode",{parentName:"p"},"npx yoshi build")," before you run the tests using this mode."),Object(a.b)("h2",{id:"environments"},"Environments"),Object(a.b)("h3",{id:"jsdom-component"},"JSDOM (component)"),Object(a.b)("p",null,"Sets up a standard ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jsdom/jsdom"}),"JSDOM")," environment for component tests."),Object(a.b)("p",null,"It's configured for every file under ",Object(a.b)("inlineCode",{parentName:"p"},"<rootDir>/src/**/*.spec.js"),"."),Object(a.b)("h3",{id:"bootstrap-server"},"Bootstrap (server)"),Object(a.b)("p",null,"An environment for testing your server (API) code. It starts up a different instance of your server (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-platform/wix-node-platform"}),"wix-ng-bootstrap based"),") for every test file."),Object(a.b)("p",null,"You should define setup and teardown functions to start/stop your server and relevant mocks (learn more: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-testkit"}),"wix-bootstrap-testkit"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-platform/wix-node-platform/tree/master/rpc/wix-rpc-testkit"}),"wix-rpc-testkit"),")."),Object(a.b)("p",null,"Runs for every test file matching ",Object(a.b)("inlineCode",{parentName:"p"},"<rootDir>/test/server/**/*.spec.js"),"."),Object(a.b)("h3",{id:"puppeteer-e2e"},"Puppeteer (e2e)"),Object(a.b)("p",null,"An environment that pre-configures ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer"}),"Puppeteer")," for running your E2E tests."),Object(a.b)("p",null,"It creates a global Browser instance (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md#class-browser"}),"learn more"),") and a global Page instance (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md#class-page"}),"learn more"),") for every test file. They're available as ",Object(a.b)("inlineCode",{parentName:"p"},"global.browser")," and ",Object(a.b)("inlineCode",{parentName:"p"},"global.page")," respectively."),Object(a.b)("p",null,"Runs for every file that matches ",Object(a.b)("inlineCode",{parentName:"p"},"<rootDir>/test/e2e/**/*.spec.js"),"."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"This preset looks for a ",Object(a.b)("inlineCode",{parentName:"p"},"jest-yoshi.config.js")," file at the root of your project. The exported object is used to configure different parts of the preset."),Object(a.b)("p",null,"example configurations:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/fullstack/jest-yoshi.config.js"}),"fullstack project")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/blob/master/packages/create-yoshi-app/templates/client/jest-yoshi.config.js"}),"client project"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  bootstrap: {\n    // environment setup function which called before each test file\n    setup: async ({ globalObject }) => {},\n    // environment teardown function which called after each test file\n    teardown: async ({ globalObject }) => {}\n  },\n  server: {\n    // runs a command which bootstrap the server\n    command: "node server.js",\n    // wait for a server to start listening on this port before running the tests\n    // this port will be available in you server script as an environment variable (PORT)\n    port: 3000\n  },\n  puppeteer: {\n    // toggle headless chrome mode\n    headless: true\n  }\n};\n')),Object(a.b)("h3",{id:"setup-files"},"Setup Files"),Object(a.b)("p",null,"If you want to run some code before your tests you can use one of the 3 following setup files (1 for each environment):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<rootDir>/test/setup.component.(j|t)s"),": JSDOM (component)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<rootDir>/test/setup.server.(j|t)s"),": Bootstrap (server)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<rootDir>/test/setup.e2e.(j|t)s"),": Puppeteer (e2e)")),Object(a.b)("p",null,"These setup files are actually ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#setuptestframeworkscriptfile-string"}),"Jests's ",Object(a.b)("inlineCode",{parentName:"a"},"setupTestFrameworkScriptFile"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A path to a module that runs some code to configure or set up the testing framework before each test.")))}l.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,i({ref:t},p,{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);