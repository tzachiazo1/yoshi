(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),r=(n(0),n(283)),i={id:"business-manager-flow",title:"Business-Manager Flow",sidebar_label:"Business-Manager Flow"},l={id:"version-4.x/business-manager-flow",title:"Business-Manager Flow",description:"\ud83e\uddea Experimental",source:"@site/versioned_docs/version-4.x/business-manager-flow.md",permalink:"/yoshi/docs/business-manager-flow",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/business-manager-flow.md",version:"4.x",lastUpdatedBy:"Ronen Amiel",lastUpdatedAt:1589803095,sidebar_label:"Business-Manager Flow"},b=[{value:"Overview",id:"overview",children:[]},{value:"Concepts",id:"concepts",children:[{value:"Module Bundle",id:"module-bundle",children:[]},{value:"Pages",id:"pages",children:[]},{value:"Exported Components",id:"exported-components",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Development",id:"development",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Module-level Configuration",id:"module-level-configuration",children:[]},{value:"Page-level Configuration",id:"page-level-configuration",children:[]},{value:"Exported Component-level Configuration",id:"exported-component-level-configuration",children:[]},{value:"Method-level Configuration",id:"method-level-configuration",children:[]},{value:"Run code in BM&#39;s <code>init()</code> phase",id:"run-code-in-bms-init-phase",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83e\uddea Experimental")),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"The Business-Manager is Wix's backoffice platform.\nFor more information on the platform, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/business-manager/"}),"official docs"),"."),Object(r.b)("p",null,"Yoshi's Business-Manager Flow eases the development process of Business-Manager applications by reducing boilerplate, automating common tasks and solving infrastructure and runtime problems in a single place."),Object(r.b)("p",null,"Inspired by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/#file-system-routing"}),"Next.js")," It requires the developer to create a specific file structure and can statically analyze it to provide features like file system routing, auto generation of module config and more."),Object(r.b)("h2",{id:"concepts"},"Concepts"),Object(r.b)("h3",{id:"module-bundle"},"Module Bundle"),Object(r.b)("p",null,"BM Flow auto-generates a module bundle file for you, which will automatically register the necessary pages & public API for your application at runtime."),Object(r.b)("h3",{id:"pages"},"Pages"),Object(r.b)("p",null,"Adding Page Components to your application is as simple as creating a new file somewhere in the special ",Object(r.b)("inlineCode",{parentName:"p"},"src/pages")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),'// src/pages/index.tsx\n\nexport default () => {\n  useEffect(() => {\n    notifyViewFinishedLoading("<YOUR_PAGE_COMPONENT_NAME>");\n  }, []);\n\n  return <Page>...</Page>;\n};\n')),Object(r.b)("h4",{id:"route"},"Route"),Object(r.b)("p",null,"The pages' route will be determined by the page file's path relative to the root ",Object(r.b)("inlineCode",{parentName:"p"},"src/pages")," directory, prefixed with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#routenamespace"}),Object(r.b)("inlineCode",{parentName:"a"},"routeNamespace")," config option"),".\nFor example:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Route"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"src/pages/index.tsx")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"/"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"src/pages/foo.tsx")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"/foo"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"src/pages/foo/bar.tsx")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"/foo/bar"))))),Object(r.b)("h3",{id:"exported-components"},"Exported Components"),Object(r.b)("p",null,"Similar to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#pages"}),"pages"),", exposing components from your Business-Manager module is done by creating a new file in the special ",Object(r.b)("inlineCode",{parentName:"p"},"src/exported-components")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"// src/exported-components/shared-modal.tsx\n\nexport default () => {\n  return <Modal>...</Modal>;\n};\n")),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("p",null,"Exposing methods from your Business-Manager module is done by creating files in the special ",Object(r.b)("inlineCode",{parentName:"p"},"src/methods")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// src/methods/some-method.ts\n\nexport default () => {\n  // Do plenty of things\n};\n")),Object(r.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"EXPERIMENTAL_FLOW_BM=true npx create-yoshi-app")," & choose template ",Object(r.b)("inlineCode",{parentName:"p"},"flow-bm"),"."),Object(r.b)("p",null,"This will bootstrap a new Business-Manager application, along with a single (root) page."),Object(r.b)("h2",{id:"development"},"Development"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"npx yoshi-bm start")," to start your Business-Manager application.\nThis serves your module bundles on http://localhost:3200."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In the future, your application will be launched in production Business-Manager automatically.")),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"npx yoshi-bm build")," to build your Business-Manager application.\nThis builds your module bundle and generates a working ",Object(r.b)("inlineCode",{parentName:"p"},"module_MODULE_ID.json")," file in your ",Object(r.b)("inlineCode",{parentName:"p"},"target")," directory, for your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/business-manager/blob/master/business-manager-web/docs/module-config-file.md"}),"integration with Business-Manager"),"."),Object(r.b)("h2",{id:"testing"},"Testing"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"npx yoshi-bm test")," to run your tests with the configured test runner (Jest by default). Pass ",Object(r.b)("inlineCode",{parentName:"p"},"--watch")," to start it in watch mode."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("h3",{id:"module-level-configuration"},"Module-level Configuration"),Object(r.b)("p",null,"The following configurations are available by creating a ",Object(r.b)("inlineCode",{parentName:"p"},".module.json")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "moduleId": "my-module",\n  "routeNamespace": "my-route",\n  "topology": {\n    "someArtifactsUrl": {\n      "artifactId": "com.wixpress.some-artifact"\n    }\n  }\n}\n')),Object(r.b)("hr",null),Object(r.b)("h4",{id:"moduleid"},Object(r.b)("inlineCode",{parentName:"h4"},"moduleId")),Object(r.b)("p",null,"Use this to override your ",Object(r.b)("inlineCode",{parentName:"p"},"moduleId"),".\nDefaults to your ",Object(r.b)("inlineCode",{parentName:"p"},"artifactId")," (taken from ",Object(r.b)("inlineCode",{parentName:"p"},"pom.xml"),")."),Object(r.b)("h4",{id:"routenamespace"},Object(r.b)("inlineCode",{parentName:"h4"},"routeNamespace")),Object(r.b)("p",null,"This prefixes all your pages with the given string.\nDefaults to ",Object(r.b)("inlineCode",{parentName:"p"},"''"),"."),Object(r.b)("p",null,"For example, given ",Object(r.b)("inlineCode",{parentName:"p"},'"routeNamespace": "foo"'),", the following pages will configured as such:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Route"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"src/pages/index.tsx")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"/foo"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"src/pages/bar.tsx")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"/foo/bar"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"src/pages/bar/baz.tsx")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"/foo/bar/baz"))))),Object(r.b)("h4",{id:"topology"},Object(r.b)("inlineCode",{parentName:"h4"},"topology")),Object(r.b)("p",null,"Sets your application's topology template. Defaults to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "staticsUrl": {\n    "artifactId": "<YOUR_ARTIFACT_ID>"\n  }\n}\n')),Object(r.b)("h3",{id:"page-level-configuration"},"Page-level Configuration"),Object(r.b)("p",null,"Pages can be customized by adding a ",Object(r.b)("inlineCode",{parentName:"p"},"*.json")," file with the same name as the appropriate page.\nFor example, the ",Object(r.b)("inlineCode",{parentName:"p"},"src/pages/some-route.tsx")," file, will be configured by ",Object(r.b)("inlineCode",{parentName:"p"},"src/pages/some-route.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "componentId": "some-component-id",\n  "componentName": "some-component-name"\n}\n')),Object(r.b)("h4",{id:"pagecomponentid"},Object(r.b)("inlineCode",{parentName:"h4"},"page.componentId")),Object(r.b)("p",null,"Sets the page's ",Object(r.b)("inlineCode",{parentName:"p"},"componentId"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"<MODULE_ID>.pages.<FILE_NAME>"),"."),Object(r.b)("h4",{id:"pagecomponentname"},Object(r.b)("inlineCode",{parentName:"h4"},"page.componentName")),Object(r.b)("p",null,"Sets the page's ",Object(r.b)("inlineCode",{parentName:"p"},"componentName"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"<MODULE_ID>.pages.<FILE_NAME>"),"."),Object(r.b)("h3",{id:"exported-component-level-configuration"},"Exported Component-level Configuration"),Object(r.b)("p",null,"Exported components can be customized by adding a ",Object(r.b)("inlineCode",{parentName:"p"},"*.json")," file with the same name as the appropriate component file.\nFor example, the ",Object(r.b)("inlineCode",{parentName:"p"},"src/exported-components/some-component.tsx")," file, will be configured by ",Object(r.b)("inlineCode",{parentName:"p"},"src/exported-components/some-component.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "componentId": "some-component-id"\n}\n')),Object(r.b)("h4",{id:"exported-componentcomponentid"},Object(r.b)("inlineCode",{parentName:"h4"},"exported-component.componentId")),Object(r.b)("p",null,"Sets the component's ",Object(r.b)("inlineCode",{parentName:"p"},"componentId"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"<MODULE_ID>.components.<FILE_NAME>"),"."),Object(r.b)("h3",{id:"method-level-configuration"},"Method-level Configuration"),Object(r.b)("p",null,"Methods can be customized by adding a ",Object(r.b)("inlineCode",{parentName:"p"},"*.json")," file with the same name as the appropriate method file.\nFor example, the ",Object(r.b)("inlineCode",{parentName:"p"},"src/methods/some-method.ts")," file, will be configured by ",Object(r.b)("inlineCode",{parentName:"p"},"src/methods/some-method.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "methodId": "some-method-id"\n}\n')),Object(r.b)("h4",{id:"methodmethodid"},Object(r.b)("inlineCode",{parentName:"h4"},"method.methodId")),Object(r.b)("p",null,"Sets the method's ",Object(r.b)("inlineCode",{parentName:"p"},"methodId"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"<MODULE_ID>.methods.<FILE_NAME>"),"."),Object(r.b)("h3",{id:"run-code-in-bms-init-phase"},"Run code in BM's ",Object(r.b)("inlineCode",{parentName:"h3"},"init()")," phase"),Object(r.b)("p",null,"Create a file ",Object(r.b)("inlineCode",{parentName:"p"},"src/moduleInit.{ts,js}"),", for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'export default () => {\n  configModule("<YOUR_MODULE_ID>", "<SOME_MODULE>", {\n    /* ... */\n  });\n};\n')),Object(r.b)("p",null,"More info ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/business-manager/blob/master/business-manager-api/docs/business-manager-module.md#init"}),"here"),"."))}p.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||r;return n?o.a.createElement(u,l(l({ref:t},c),{},{components:n})):o.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);