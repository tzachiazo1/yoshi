(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(9),a=(n(0),n(282)),i={id:"component",title:"Component Level",sidebar_label:"Component Level"},l={id:"version-4.x/editor-flow/structure-api/component",title:"Component Level",description:"According to the Yoshi Editor Flow concept, the app is grouped by components, instead of functional purpose. Since communitcation between different components (Widget, Page) in scope of single app is a rare case, people usually working on single Component while working on the new business feature.",source:"@site/versioned_docs/version-4.x/editor-flow/structure-api/component.md",permalink:"/yoshi/docs/editor-flow/structure-api/component",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/structure-api/component.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589968552,sidebar_label:"Component Level"},c=[{value:"<code>.component.json</code>",id:"componentjson",children:[]},{value:"<code>controller</code>",id:"controller",children:[{value:"<code>controllerConfig</code>",id:"controllerconfig",children:[]},{value:"<code>flowAPI</code>",id:"flowapi",children:[]}]},{value:"<code>Widget</code>",id:"widget",children:[]},{value:"<code>Settings</code>",id:"settings",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"According to the Yoshi Editor Flow concept, the app is grouped by components, instead of functional purpose. Since communitcation between different components (Widget, Page) in scope of single app is a rare case, people usually working on single Component while working on the new business feature."),Object(a.b)("p",null,"So for now, we'll have ",Object(a.b)("inlineCode",{parentName:"p"},"Widget"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Settings")," and ",Object(a.b)("inlineCode",{parentName:"p"},"controller")," in a single place, instead of having ",Object(a.b)("inlineCode",{parentName:"p"},"settings")," directory with all settings panels of your app. Or ",Object(a.b)("inlineCode",{parentName:"p"},"viewerScript")," directory, which will include all controllers. With last approach, it could be really hard to navigate between ",Object(a.b)("inlineCode",{parentName:"p"},"controller")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Widget")," located in completely different directories or even projects, since Widget consumes properties passed by controller. You'll probably want to maintain ",Object(a.b)("inlineCode",{parentName:"p"},"PublicData")," in a single place also instead of switching between settings and widget directory."),Object(a.b)("h2",{id:"componentjson"},Object(a.b)("inlineCode",{parentName:"h2"},".component.json")),Object(a.b)("p",null,"Located under ",Object(a.b)("inlineCode",{parentName:"p"},"src/components/:componentName/.component.json")," this config file helps us to generate ",Object(a.b)("inlineCode",{parentName:"p"},"createControllers")," for Viewer Script under the hood. Here you can find ",Object(a.b)("inlineCode",{parentName:"p"},"id")," of your component and type (",Object(a.b)("inlineCode",{parentName:"p"},"WIDGET_OUT_OF_IFRAME"),", ",Object(a.b)("inlineCode",{parentName:"p"},"PAGE_OUT)OF_IFRAME")," or ",Object(a.b)("inlineCode",{parentName:"p"},"APP_STUDIO_WIDGET"),")."),Object(a.b)("h2",{id:"controller"},Object(a.b)("inlineCode",{parentName:"h2"},"controller")),Object(a.b)("p",null,"File which ",Object(a.b)("inlineCode",{parentName:"p"},"export default createController")," function."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createController")," is called with useful arguments by platform."),Object(a.b)("p",null,"Arguments:"),Object(a.b)("h3",{id:"controllerconfig"},Object(a.b)("inlineCode",{parentName:"h3"},"controllerConfig")),Object(a.b)("p",null,"Controller config passed by the platform."),Object(a.b)("p",null,"Read more: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/lifecycle#client-viewer-platform_articles_lifecycle_controllerinfo"}),"IControllerInfo in platform docs")),Object(a.b)("h3",{id:"flowapi"},Object(a.b)("inlineCode",{parentName:"h3"},"flowAPI")),Object(a.b)("p",null,"Object with experiments, locations and useful helpers passed by the flow to reduce boilerplate on the controller side."),Object(a.b)("h4",{id:"getexperiments"},Object(a.b)("inlineCode",{parentName:"h4"},"getExperiments")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"() => Promise<Experiments>")),Object(a.b)("p",null,"Return a Promise, which will be resolved with ",Object(a.b)("inlineCode",{parentName:"p"},"Experiments")," instance for current app's scope.\nTo read more about experiments API, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-private/fed-infra/tree/master/experiments/wix-experiments"}),"check Experiments page")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function({ flowAPI }) => {\n  return {\n    pageReady() {\n      const experiments = await flowAPI.getExperiments();\n      setProps({\n        withNewButton: experiments.enabled('specs.my-scope.EnableNewButton'),\n      });\n    }\n  };\n}\n")),Object(a.b)("p",null,"Parallel loading example to improve your controller performance:"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function createController({ flowData }) => {\n  return {\n    pageReady() {\n      const [experiments, someData] = await Promise.all([\n        flowData.getExperiments(),\n        getSomeData(),\n      ]);\n      setProps({\n        withNewButton: experiments.enabled('specs.my-scope.EnableNewButton'),\n        someData,\n      });\n    }\n  };\n}\n")),Object(a.b)("h4",{id:"isssr"},"isSSR"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"() => boolean")),Object(a.b)("p",null,"Whether or not worker script is being executed in server-side rendering environment."),Object(a.b)("h4",{id:"ismobile"},"isMobile"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"() => boolean")),Object(a.b)("p",null,"Current form factor of the ",Object(a.b)("inlineCode",{parentName:"p"},"window")," is a mobile;"),Object(a.b)("h4",{id:"getsitelanguage"},"getSiteLanguage"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"(fallbackLanguage = 'en') => string")),Object(a.b)("p",null,"If multilingual is enabled, returns current language for it. If not, returns site language. Will take a fallback language if nothing found."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function({ flowAPI }) => {\n  return {\n    pageReady() {\n      const language = flowAPI.getSiteLanguage();\n      const translations = getSiteTranslations(language);\n\n      // ...\n    }\n  };\n}\n")),Object(a.b)("h4",{id:"reporterror"},"reportError"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"(error: Error) => void"),"\nA function that comes from already initilized sentryMonitor to capture an exception in your controller.\nIt will create an error with ",Object(a.b)("inlineCode",{parentName:"p"},"Viewer:Worker")," environment for your sentry DSN configured in ",Object(a.b)("inlineCode",{parentName:"p"},".application.json"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sentryMonitor")," is available under ",Object(a.b)("inlineCode",{parentName:"p"},"flowAPI.sentryMonitor")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function({ flowAPI }) => {\n  return {\n    pageReady() {\n      try {\n        await doSomethingDangerous();\n      } catch (e) {\n        flowAPI.reportError(e); // or flowAPI.sentryMonotor.captureException(e);\n      }\n\n      // ...\n    }\n  };\n}\n")),Object(a.b)("h4",{id:"fedopslogger"},"fedopsLogger"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"BaseLogger<string>")," from ",Object(a.b)("inlineCode",{parentName:"p"},"@wix/fedops-logger")),Object(a.b)("p",null,"Already initialized Fedops Logger instance."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-private/fed-infra/tree/master/fedops/fedops-logger"}),"Read more about Fedops API")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export default async function({ flowAPI, controllerConfig }) => {\n  const { fedopsLogger, isSSR, widgetId } = flowAPI;\n  fedopsLogger.appLoadStarted();\n\n  return {\n    pageReady() {\n      const someData = await getSomeData();\n\n      setProps({\n        someData,\n      });\n\n      if (isSSR()) {\n        fedopsLogger.appLoaded({\n          appId: controllerConfig.appParams.appDefinitionId,\n          widgetId\n        });\n      }\n    }\n  };\n}\n")),Object(a.b)("h2",{id:"widget"},Object(a.b)("inlineCode",{parentName:"h2"},"Widget")),Object(a.b)("p",null,"File which ",Object(a.b)("inlineCode",{parentName:"p"},"export default")," React Component."),Object(a.b)("p",null,"This component will be rendered in 2 different environments: viewer (common frame for the whole side) and editor (isolated iFrame).\nThe basic idea is that developers shouldn't be aware of this difference.\nJust exporting a valid React Component and receiving a props from the controller's ",Object(a.b)("inlineCode",{parentName:"p"},"setProps")," will perfectly work."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Widget.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"export default ({ title }) => (<div>\n  <h1>{title}</h1>\n</div>)\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"controller.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"export default () => ({\n  pageReady() {\n    setProps({\n      title: 'Some title from controller',\n    });\n  }\n})\n")),Object(a.b)("h2",{id:"settings"},Object(a.b)("inlineCode",{parentName:"h2"},"Settings")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"(optional)")),Object(a.b)("p",null,"File which ",Object(a.b)("inlineCode",{parentName:"p"},"export default")," React Component."),Object(a.b)("p",null,"It will be rendered in editor part. Via Settings panel app's user can configure Out-of-iFrame Widget."),Object(a.b)("p",null,"It's recommend to use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-private/wix-base-ui"}),Object(a.b)("inlineCode",{parentName:"a"},"wix-base-ui"))," for styling and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-private/tpa-settings"}),"TPA Settings")," for reducing boilerplate relating to Settings panel development."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Settings")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { TpaSettingsProvider } from '@wix/tpa-settings/dist/src/contexts';\nimport { SettingsTabLayout } from '@wix/tpa-settings/dist/src/components';\nimport { WixSDK } from 'yoshi-flow-editor-runtime';\nimport 'yoshi-flow-editor-runtime/styles/wix-base-ui.global.scss';\n\nconst Settings = () => {\n  return (\n    <WixSDK>{({ Wix }) => (\n      <TpaSettingsProvider Wix={Wix}>\n        <SettingsTabLayout>\n          <SettingsTabLayout.Tab\n            title={t('settings.tab.main')}\n            articleId=\"78c122c7-ef06-47c1-a137-07abfae7ed89\"\n            Component={() => <MainTab />}\n          />\n        </SettingsTabLayout>\n      </TpaSettingsProvider>\n    )}</WixSDK>\n  );\n};\n\nexport default Settings;\n")))}b.isMDXComponent=!0},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||a;return n?o.a.createElement(m,l({ref:t},p,{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);