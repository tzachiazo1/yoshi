# Changelog

## 4.93.0 (2020-06-10)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor-runtime`
  - [#2541](https://github.com/wix/yoshi/pull/2541) Automatic `fedops` logging for Editor Flow projects ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `yoshi-helpers`
  - [#2547](https://github.com/wix/yoshi/pull/2547) Yoshi serverless: fix scope name ([@yanivefraim](https://github.com/yanivefraim))

## 4.92.1 (2020-06-10)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#2544](https://github.com/wix/yoshi/pull/2544) Fix a bug with create yoshi app ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-library`, `yoshi-flow-monorepo`
  - [#2539](https://github.com/wix/yoshi/pull/2539) Send telemetry when start building ([@ranyitz](https://github.com/ranyitz))

## 4.92.0 (2020-06-10)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-app`, `yoshi-helpers`
  - [#2542](https://github.com/wix/yoshi/pull/2542) Yoshi Serverless: remove redundant deps and test scope ([@yanivefraim](https://github.com/yanivefraim))

## 4.91.0 (2020-06-10)

#### :rocket: New Feature

- `yoshi-common`
  - [#2531](https://github.com/wix/yoshi/pull/2531) Write full webpack errors log to file. ([@daliusd](https://github.com/daliusd))

#### :bug: Bug Fix

- `yoshi-flow-bm`
  - [#2543](https://github.com/wix/yoshi/pull/2543) Copy templates in flow-bm ([@amitdahan](https://github.com/amitdahan))

#### :memo: Documentation

- [#2536](https://github.com/wix/yoshi/pull/2536) Document env vars related to debugging ([@daliusd](https://github.com/daliusd))

#### Committers: 2

- Amit Dahan ([@amitdahan](https://github.com/amitdahan))
- Dalius Dobravolskas ([@daliusd](https://github.com/daliusd))

## 4.90.1 (2020-06-09)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#2528](https://github.com/wix/yoshi/pull/2528) Remove `editor.app.ts` and `viewer.app.ts` from the template ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#2537](https://github.com/wix/yoshi/pull/2537) Fix create yoshi app library flow creation bug ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-bm`
  - [#2530](https://github.com/wix/yoshi/pull/2530) Fix wrong value passed in `moduleConfigurationId` in flow-bm ([@amitdahan](https://github.com/amitdahan))

## 4.90.0 (2020-06-09)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-serverless`
  - [#2535](https://github.com/wix/yoshi/pull/2535) fix serverless route + add a missing dep ([@yanivefraim](https://github.com/yanivefraim))

#### :house: Internal

- `create-yoshi-app`
  - [#2512](https://github.com/wix/yoshi/pull/2512) in case there is an error during prompts it will now throw properly ([@ranyitz](https://github.com/ranyitz))

## 4.89.0 (2020-06-09)

#### :boom: Breaking Change

- `babel-plugin-transform-hmr-runtime`, `babel-preset-yoshi`, `bootstrap-hot-loader`, `create-yoshi-app`, `eslint-config-yoshi-base`, `eslint-config-yoshi`, `jest-yoshi-preset`, `stylelint-config-yoshi`, `tslint-config-yoshi-base`, `tslint-config-yoshi`, `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-library`, `yoshi-flow-monorepo`, `yoshi-helpers`, `yoshi-server-react`, `yoshi-server-tools`, `yoshi-server`, `yoshi`
  - [#2516](https://github.com/wix/yoshi/pull/2516) Upgrade prettier to v2 ([@liorcode](https://github.com/liorcode))

#### :bug: Bug Fix

- `yoshi-stylable-dependencies`
  - [#2532](https://github.com/wix/yoshi/pull/2532) Add explicit `@stylable/core` & `@stylable/runtime` dependencies ([@argshook](https://github.com/argshook))

## 4.88.0 (2020-06-09)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-server-tools`, `yoshi-serverless`
  - [#2490](https://github.com/wix/yoshi/pull/2490) Yoshi Serverless POC ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2513](https://github.com/wix/yoshi/pull/2513) Create Sentry logs automatically ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish

- `yoshi-common`
  - [#2525](https://github.com/wix/yoshi/pull/2525) Do not show progress bar if `DEBUG=true` ([@daliusd](https://github.com/daliusd))

#### :house: Internal

- [#2529](https://github.com/wix/yoshi/pull/2529) Publish yoshi's packages to http://npm.dev.wixpress.com/ ([@ranyitz](https://github.com/ranyitz))

## 4.87.0 (2020-06-09)

#### :rocket: New Feature

- `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-monorepo`
  - [#2526](https://github.com/wix/yoshi/pull/2526) Support configuring webworker compilation's resolve.alias ([@ronami](https://github.com/ronami))
- `yoshi-flow-library`
  - [#2519](https://github.com/wix/yoshi/pull/2519) Pass unused arguments to jest in library-flow ([@daliusd](https://github.com/daliusd))
- `yoshi-flow-editor`
  - [#2507](https://github.com/wix/yoshi/pull/2507) Make `viewer.app.ts` and `editor.app.ts` optional ([@yavorsky](https://github.com/yavorsky))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2514](https://github.com/wix/yoshi/pull/2514) Endorse starting from wix-serverless when creating a server project ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-app`
  - [#2523](https://github.com/wix/yoshi/pull/2523) Fix a bug with server process and `--debug` argv ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2521](https://github.com/wix/yoshi/pull/2521) Init flowAPI even if no `viewer.app.ts` was created ([@yavorsky](https://github.com/yavorsky))

#### :memo: Documentation

- [#2522](https://github.com/wix/yoshi/pull/2522) Add warning about global installation ([@daliusd](https://github.com/daliusd))

## 4.86.0 (2020-06-07)

#### :rocket: New Feature

- `yoshi-flow-bm`
  - [#2418](https://github.com/wix/yoshi/pull/2418) Open production BM on `yoshi-bm start` ([@amitdahan](https://github.com/amitdahan))
  - [#2469](https://github.com/wix/yoshi/pull/2469) Add `--url` to `yoshi-bm start` ([@amitdahan](https://github.com/amitdahan))
- `jest-yoshi-preset`
  - [#2505](https://github.com/wix/yoshi/pull/2505) Read `{testEnv}-setup.(ts|js)` files from within `src/(__tests__|test)` ([@amitdahan](https://github.com/amitdahan))

#### :bug: Bug Fix

- `yoshi-flow-bm`
  - [#2502](https://github.com/wix/yoshi/pull/2502) Fix nested route inference in flow-bm ([@amitdahan](https://github.com/amitdahan))

#### :memo: Documentation

- [#2517](https://github.com/wix/yoshi/pull/2517) Improve contributing section - sort, arrange and ensure it's up to date ([@ranyitz](https://github.com/ranyitz))
- [#2506](https://github.com/wix/yoshi/pull/2506) Update runtime docs ([@yavorsky](https://github.com/yavorsky))

#### :house: Internal

- `jest-yoshi-preset`, `yoshi-flow-legacy`, `yoshi-flow-library`
  - [#2510](https://github.com/wix/yoshi/pull/2510) Replace jest-teamcity-reporter with jest-teamcity ([@ohana54](https://github.com/ohana54))

#### Committers: 5

- Amit Dahan ([@amitdahan](https://github.com/amitdahan))
- Artem Yavorsky ([@yavorsky](https://github.com/yavorsky))
- Ran Yitzhaki ([@ranyitz](https://github.com/ranyitz))
- Tomer Ohana ([@ohana54](https://github.com/ohana54))
- [@wix-renovate](https://github.com/wix-renovate)

## 4.85.0 (2020-06-04)

#### :rocket: New Feature

- `yoshi-common`
  - [#2504](https://github.com/wix/yoshi/pull/2504) Kill child servers on serve process exit ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-bm-runtime`, `yoshi-flow-bm`
  - [#2495](https://github.com/wix/yoshi/pull/2495) Add `moduleConfigurationId` to bm-flow config ([@amitdahan](https://github.com/amitdahan))
- `create-yoshi-app`
  - [#2498](https://github.com/wix/yoshi/pull/2498) Configure `auto-release` by default ([@yavorsky](https://github.com/yavorsky))
- `yoshi-flow-monorepo`
  - [#2503](https://github.com/wix/yoshi/pull/2503) Produce a `umd` bundle for site-assets web bundles ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2501](https://github.com/wix/yoshi/pull/2501) Produce sourcemaps for site-assets modules ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-bm-runtime`
  - [#2497](https://github.com/wix/yoshi/pull/2497) Fix `moduleInit` being required in flow-bm-runtime ([@amitdahan](https://github.com/amitdahan))

#### :memo: Documentation

- [#2500](https://github.com/wix/yoshi/pull/2500) Improve yoshi description points on the website main page ([@ranyitz](https://github.com/ranyitz))

## 4.84.0 (2020-06-01)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2494](https://github.com/wix/yoshi/pull/2494) Make `petri-specs` directory at the root of the monorepo work ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`, `yoshi-config`, `yoshi-flow-editor`
  - [#2487](https://github.com/wix/yoshi/pull/2487) Remove yoshi config for editor flow ([@yavorsky](https://github.com/yavorsky))
- `create-yoshi-app`, `yoshi-flow-editor`
  - [#2403](https://github.com/wix/yoshi/pull/2403) Allow to set `controllerType` for component configuration ([@maoryosef2](https://github.com/maoryosef2))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2486](https://github.com/wix/yoshi/pull/2486) Remove Settings scss file from template ([@yavorsky](https://github.com/yavorsky))

## 4.83.2 (2020-05-28)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2485](https://github.com/wix/yoshi/pull/2485) Update `use` rule of externalize-relative-module-loader ([@yavorsky](https://github.com/yavorsky))

## 4.83.1 (2020-05-27)

#### :building_construction: Templates

- `create-yoshi-app`, `jest-yoshi-preset`, `yoshi-flow-editor`
  - [#2482](https://github.com/wix/yoshi/pull/2482) Use default config for editor flow jest. Remove ssr files ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2484](https://github.com/wix/yoshi/pull/2484) Fix a bug with two manifests with the same name for site-assets ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `create-yoshi-app`, `jest-yoshi-preset`, `yoshi-flow-editor`
  - [#2482](https://github.com/wix/yoshi/pull/2482) Use default config for editor flow jest. Remove ssr files ([@yavorsky](https://github.com/yavorsky))
- `create-yoshi-app`
  - [#2480](https://github.com/wix/yoshi/pull/2480) Remove sentry from dev/sites ([@yavorsky](https://github.com/yavorsky))

## 4.83.0 (2020-05-27)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-monorepo`
  - [#2465](https://github.com/wix/yoshi/pull/2465) Yoshi Server: Create Dockerfile ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-common`, `yoshi-server-client`, `yoshi-server`
  - [#2445](https://github.com/wix/yoshi/pull/2445) Yoshi Server: Error toast message ([@yanivefraim](https://github.com/yanivefraim))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2473](https://github.com/wix/yoshi/pull/2473) Remove `cssBaseUrl` prop from template. ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2483](https://github.com/wix/yoshi/pull/2483) Disable emit source maps on site-assets compilation ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-editor-runtime`
  - [#2475](https://github.com/wix/yoshi/pull/2475) Await for initAppForPage result ([@yavorsky](https://github.com/yavorsky))

## 4.82.0 (2020-05-26)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2472](https://github.com/wix/yoshi/pull/2472) Site Assets web compilation for running site-assets code in the browser ([@ranyitz](https://github.com/ranyitz))

## 4.81.0 (2020-05-26)

#### :rocket: New Feature

- `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2471](https://github.com/wix/yoshi/pull/2471) Allow `initAppForPage` to return a data to use it in controller ([@yavorsky](https://github.com/yavorsky))
- `yoshi-flow-bm`
  - [#2463](https://github.com/wix/yoshi/pull/2463) Allow overriding the module bundle name ([@amitdahan](https://github.com/amitdahan))
- `yoshi-server`
  - [#2450](https://github.com/wix/yoshi/pull/2450) Fix request/response types ([@yanivefraim](https://github.com/yanivefraim))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2458](https://github.com/wix/yoshi/pull/2458) Start BM loader during first render ([@amitdahan](https://github.com/amitdahan))
  - [#2452](https://github.com/wix/yoshi/pull/2452) Use `npm lint` script for `lint-staged` in flow-library template ([@amitdahan](https://github.com/amitdahan))

#### :bug: Bug Fix

- `yoshi-flow-editor`
  - [#2454](https://github.com/wix/yoshi/pull/2454) Fix editor script for bob apps. ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish

- `yoshi-common`
  - [#2467](https://github.com/wix/yoshi/pull/2467) Emit metadata file with data on how to load each entry separately ([@ronami](https://github.com/ronami))
  - [#2462](https://github.com/wix/yoshi/pull/2462) Run Suricate with cache enabled and update it between compilations ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- [#2453](https://github.com/wix/yoshi/pull/2453) [docs] adding docs for assets.md ([@sidoruk-sv](https://github.com/sidoruk-sv))

## 4.80.3 (2020-05-21)

#### :bug: Bug Fix

- `yoshi-flow-editor-runtime`
  - [#2449](https://github.com/wix/yoshi/pull/2449) Pass `dataCallback` to editor sentry ([@yavorsky](https://github.com/yavorsky))

## 4.80.2 (2020-05-20)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-monorepo`
  - [#2446](https://github.com/wix/yoshi/pull/2446) fix `umdNamedDefine` config property ([@tuchk4](https://github.com/tuchk4))

#### :memo: Documentation

- [#2448](https://github.com/wix/yoshi/pull/2448) Sync main docs with versioned docs ([@yavorsky](https://github.com/yavorsky))

## 4.80.1 (2020-05-20)

#### :bug: Bug Fix

- `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2447](https://github.com/wix/yoshi/pull/2447) Hotfixes for editor script and controller flow options ([@yavorsky](https://github.com/yavorsky))
- `yoshi-flow-monorepo`
  - [#2443](https://github.com/wix/yoshi/pull/2443) Type `serve.d.ts` correctly ([@Schniz](https://github.com/Schniz))
  - [#2439](https://github.com/wix/yoshi/pull/2439) Ignore snapshot files when copying assets in monorepo flow ([@tuchk4](https://github.com/tuchk4))

#### :memo: Documentation

- [#2444](https://github.com/wix/yoshi/pull/2444) Adjust create new editor flow app instructions in docs ([@ranyitz](https://github.com/ranyitz))

## 4.80.0 (2020-05-20)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2433](https://github.com/wix/yoshi/pull/2433) Add editor script support and `flowAPI` ([@yavorsky](https://github.com/yavorsky))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2440](https://github.com/wix/yoshi/pull/2440) Replace ooi template with flow editor ([@yavorsky](https://github.com/yavorsky))

## 4.79.0 (2020-05-19)

#### :rocket: New Feature

- `yoshi-common`
  - [#2436](https://github.com/wix/yoshi/pull/2436) Add compression to yoshi's local `cdn` during serve ([@ranyitz](https://github.com/ranyitz))

## 4.78.0 (2020-05-19)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2424](https://github.com/wix/yoshi/pull/2424) Update experiments usage for editor flow. ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#2427](https://github.com/wix/yoshi/pull/2427) Prevent running template tests twice for single-language templates ([@yavorsky](https://github.com/yavorsky))
- `yoshi-common`
  - [#2434](https://github.com/wix/yoshi/pull/2434) allow to always override SURICATE_TUNNEL_ID ([@cowchimp](https://github.com/cowchimp))

#### :memo: Documentation

- [#2435](https://github.com/wix/yoshi/pull/2435) Yoshi Server: update docs to use Ambassador ([@yanivefraim](https://github.com/yanivefraim))
- [#2431](https://github.com/wix/yoshi/pull/2431) Update docs on shipping a `.css` bundle in library-flow ([@amitdahan](https://github.com/amitdahan))

## 4.77.4 (2020-05-18)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2428](https://github.com/wix/yoshi/pull/2428) Don't load server HMR entry if Suricate is used ([@ronami](https://github.com/ronami))
  - [#2419](https://github.com/wix/yoshi/pull/2419) Use a different runtime id in case we use stylable 3 ([@ranyitz](https://github.com/ranyitz))

## 4.77.3 (2020-05-18)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#2425](https://github.com/wix/yoshi/pull/2425) Create a temporary `package.json` for `add-sentry` configuration ([@yavorsky](https://github.com/yavorsky))

## 4.77.2 (2020-05-18)

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2363](https://github.com/wix/yoshi/pull/2363) Migrate BM templates to use `wix-i18n-config` ([@amitdahan](https://github.com/amitdahan))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#2426](https://github.com/wix/yoshi/pull/2426) Fix dev.js script to support template loops ([@yavorsky](https://github.com/yavorsky))

#### :house: Internal

- `create-yoshi-app`
  - [#2426](https://github.com/wix/yoshi/pull/2426) Fix dev.js script to support template loops ([@yavorsky](https://github.com/yavorsky))

#### Committers: 3

- Amit Dahan ([@amitdahan](https://github.com/amitdahan))
- Artem Yavorsky ([@yavorsky](https://github.com/yavorsky))
- barak igal ([@barak007](https://github.com/barak007))

## 4.77.1 (2020-05-17)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2421](https://github.com/wix/yoshi/pull/2421) Library Flow: fix typescript and react babel bug ([@ranyitz](https://github.com/ranyitz))

#### Committers: 1

- Ran Yitzhaki ([@ranyitz](https://github.com/ranyitz))

## 4.77.0 (2020-05-17)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor-runtime`
  - [#2406](https://github.com/wix/yoshi/pull/2406) Add example BILogger to Editor flow template ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#2414](https://github.com/wix/yoshi/pull/2414) Build site-assets Webpack config instead of client in monorepo start script ([@ronami](https://github.com/ronami))

## 4.76.0 (2020-05-17)

#### :boom: Breaking Change

- `yoshi-server-client`, `yoshi-server-react`, `yoshi-server-testing`
  - [#2413](https://github.com/wix/yoshi/pull/2413) Yoshi Server - change client-server api ([@yanivefraim](https://github.com/yanivefraim))

#### :rocket: New Feature

- `yoshi-server-client`, `yoshi-server-react`, `yoshi-server-testing`
  - [#2413](https://github.com/wix/yoshi/pull/2413) Yoshi Server - change client-server api ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`, `yoshi-flow-editor-runtime`
  - [#2408](https://github.com/wix/yoshi/pull/2408) Add fedops logger to editor-flow template ([@bordi](https://github.com/bordi))
- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2402](https://github.com/wix/yoshi/pull/2402) Add sentry support for editor flow ([@yavorsky](https://github.com/yavorsky))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2405](https://github.com/wix/yoshi/pull/2405) Add translations to the template. ([@yavorsky](https://github.com/yavorsky))

#### :memo: Documentation

- `babel-preset-yoshi`
  - [#2401](https://github.com/wix/yoshi/pull/2401) Documentation website improvements 📒 🧽 💫 ([@ranyitz](https://github.com/ranyitz))

## 4.75.0 (2020-05-14)

#### :rocket: New Feature

- `yoshi-server-testing`
  - [#2399](https://github.com/wix/yoshi/pull/2399) Update yoshi server testing with new api ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`
  - [#2398](https://github.com/wix/yoshi/pull/2398) Yoshi Server, BM generator: run testkit as fork ([@yanivefraim](https://github.com/yanivefraim))

## 4.74.0 (2020-05-14)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#2392](https://github.com/wix/yoshi/pull/2392) Port js universal template to use `wix-i18n-config` ([@vybu](https://github.com/vybu))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2392](https://github.com/wix/yoshi/pull/2392) Port js universal template to use `wix-i18n-config` ([@vybu](https://github.com/vybu))
  - [#2390](https://github.com/wix/yoshi/pull/2390) Yoshi generators: fullstack use `wix-i18n-config` ([@vybu](https://github.com/vybu))

#### :bug: Bug Fix

- `yoshi-flow-editor`
  - [#2393](https://github.com/wix/yoshi/pull/2393) Hotfix for editor script related to default export. ([@yavorsky](https://github.com/yavorsky))
- `yoshi-common`
  - [#2352](https://github.com/wix/yoshi/pull/2352) Add a unique `chunkCallbackName` according to package name ([@ronami](https://github.com/ronami))
- `yoshi-helpers`
  - [#2379](https://github.com/wix/yoshi/pull/2379) Fix `a different process is already running on port 3200` error when root folder has whitespace ([@Akrabut](https://github.com/Akrabut))

#### :nail_care: Polish

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2400](https://github.com/wix/yoshi/pull/2400) Use absolute URLs for CSS assets in Thunderbolt and Elements ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- [#2397](https://github.com/wix/yoshi/pull/2397) Fix the website's particles ([@ranyitz](https://github.com/ranyitz))
- [#2367](https://github.com/wix/yoshi/pull/2367) Editor flow docs ([@yavorsky](https://github.com/yavorsky))
- [#2385](https://github.com/wix/yoshi/pull/2385) Remove the generic get started from the readme, and update tagline ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- `create-yoshi-app`, `yoshi-flow-editor`
  - [#2394](https://github.com/wix/yoshi/pull/2394) Update to TypeScript v3.9.2 ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#2391](https://github.com/wix/yoshi/pull/2391) Skip a highly flaky stylable ssr test ([@ranyitz](https://github.com/ranyitz))

## 4.73.0 (2020-05-13)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor`
  - [#2357](https://github.com/wix/yoshi/pull/2357) Add platform app studio component to be generated via wizard and generate editor builder automatically ([@yavorsky](https://github.com/yavorsky))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2384](https://github.com/wix/yoshi/pull/2384) Integrate `sled` to yoshi flow editor ooi template ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#2389](https://github.com/wix/yoshi/pull/2389) Upload `serve.js` & `serve.d.ts` files to npm ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#2388](https://github.com/wix/yoshi/pull/2388) Remove `yoshi server` from being a planet on the website (Flow) ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#2386](https://github.com/wix/yoshi/pull/2386) Fix website publishing on master using travis ([@ranyitz](https://github.com/ranyitz))

## 4.72.0 (2020-05-12)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-monorepo`
  - [#2335](https://github.com/wix/yoshi/pull/2335) Allow configuring `serverExternals` via config ([@yavorsky](https://github.com/yavorsky))
- `yoshi-server`
  - [#2381](https://github.com/wix/yoshi/pull/2381) Fix context type ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#2377](https://github.com/wix/yoshi/pull/2377) Fix BM template ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-flow-bm-runtime`
  - [#2374](https://github.com/wix/yoshi/pull/2374) Fix yoshi-flow-bm-runtime ESM build and root exports ([@amitdahan](https://github.com/amitdahan))

#### :memo: Documentation

- [#2382](https://github.com/wix/yoshi/pull/2382) Yoshi Server: Fix documentation ([@yanivefraim](https://github.com/yanivefraim))

## 4.71.0 (2020-05-12)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-library`, `yoshi-flow-monorepo`, `yoshi-helpers`
  - [#2316](https://github.com/wix/yoshi/pull/2316) Yoshi serve support for monorepo ([@ranyitz](https://github.com/ranyitz))

## 4.70.1 (2020-05-12)

#### :memo: Documentation

- [#2376](https://github.com/wix/yoshi/pull/2376) Yoshi Server: remove the 'under development' message ([@yanivefraim](https://github.com/yanivefraim))

## 4.70.0 (2020-05-12)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#2282](https://github.com/wix/yoshi/pull/2282) Yoshi Server: update BM template ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-common`, `yoshi-server-client`
  - [#2373](https://github.com/wix/yoshi/pull/2373) Yoshi Server: add a Business Manager default baseUrl ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-legacy`
  - [#2371](https://github.com/wix/yoshi/pull/2371) Exclude `mergeLonghand` plugin from cssnano optimizations ([@ranyitz](https://github.com/ranyitz))
- `yoshi-common`
  - [#2370](https://github.com/wix/yoshi/pull/2370) better error handling for webpack errors during build ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#2342](https://github.com/wix/yoshi/pull/2342) Yoshi server Docs: add to sidebar ([@yanivefraim](https://github.com/yanivefraim))
- [#2364](https://github.com/wix/yoshi/pull/2364) Fix broken links in website ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#2343](https://github.com/wix/yoshi/pull/2343) createVersion: Commit also when there are just untracked files ([@ranyitz](https://github.com/ranyitz))
- [#2372](https://github.com/wix/yoshi/pull/2372) Custom publish can now publish new packages to npm from the CI ([@ranyitz](https://github.com/ranyitz))

## 4.69.0 (2020-05-11)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`
  - [#2353](https://github.com/wix/yoshi/pull/2353) Yoshi Server: add HMR support for new files ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#2348](https://github.com/wix/yoshi/pull/2348) Prevent asking language for projects if only one is supported ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish

- `create-yoshi-app`, `yoshi-flow-bm-runtime`, `yoshi-flow-bm`
  - [#2355](https://github.com/wix/yoshi/pull/2355) Split BM flow output bundles to selectively add deps ([@amitdahan](https://github.com/amitdahan))
- `create-yoshi-app`, `yoshi-flow-bm`
  - [#2358](https://github.com/wix/yoshi/pull/2358) Write module config file into `target` ([@amitdahan](https://github.com/amitdahan))
- `create-yoshi-app`, `yoshi-flow-bm-runtime`
  - [#2356](https://github.com/wix/yoshi/pull/2356) Make `react` a `peerDep` of `yoshi-flow-bm-runtime` ([@amitdahan](https://github.com/amitdahan))

## 4.68.3 (2020-05-07)

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2337](https://github.com/wix/yoshi/pull/2337) Set `esModuleInterop` for all TypeScript templates ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :bug: Bug Fix

- `yoshi-common`
  - [#2354](https://github.com/wix/yoshi/pull/2354) Verify that the `target` directory exists before writing the `server.log` ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#2351](https://github.com/wix/yoshi/pull/2351) fix link to OOI docs ([@junkkerrigan](https://github.com/junkkerrigan))

## 4.68.2 (2020-05-07)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2341](https://github.com/wix/yoshi/pull/2341) run webpackbar in basic mode in every ci environment ([@ranyitz](https://github.com/ranyitz))
- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2349](https://github.com/wix/yoshi/pull/2349) Include only monorepo packages in transpilation ([@ranyitz](https://github.com/ranyitz))

## 4.68.1 (2020-05-06)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2344](https://github.com/wix/yoshi/pull/2344) Do not show the progress bar in case there are many compilations ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#2346](https://github.com/wix/yoshi/pull/2346) Add lodash to create yoshi app dependencies ([@yavorsky](https://github.com/yavorsky))

## 4.68.0 (2020-05-06)

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2336](https://github.com/wix/yoshi/pull/2336) Use single brackets for i18next interpolation in templates ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :nail_care: Polish

- `yoshi-common`
  - [#2340](https://github.com/wix/yoshi/pull/2340) Add content hash to Stylable files ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- `yoshi-server`
  - [#2327](https://github.com/wix/yoshi/pull/2327) Yoshi Server Docs - middlwares ([@yanivefraim](https://github.com/yanivefraim))
- Other
  - [#2330](https://github.com/wix/yoshi/pull/2330) Yoshi Server docs: custom server ([@yanivefraim](https://github.com/yanivefraim))

## 4.67.0 (2020-05-06)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2332](https://github.com/wix/yoshi/pull/2332) Improve thunderbolt progress bar with showing all compilations & remove the debug site-assets compilation ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-bm`
  - [#2322](https://github.com/wix/yoshi/pull/2322) Open Business-Manager (testkit) url on `yoshi-bm start` ([@amitdahan](https://github.com/amitdahan))
  - [#2324](https://github.com/wix/yoshi/pull/2324) Watch config files for flow-bm model changes ([@amitdahan](https://github.com/amitdahan))
- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2318](https://github.com/wix/yoshi/pull/2318) Implement dev center wizard ([@yavorsky](https://github.com/yavorsky))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2333](https://github.com/wix/yoshi/pull/2333) Use `data-hook` instead of `data-testid` in templates ([@sidoruk-sv](https://github.com/sidoruk-sv))
  - [#2331](https://github.com/wix/yoshi/pull/2331) Remove JS project for editor flow and update template tests ([@yavorsky](https://github.com/yavorsky))
- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2305](https://github.com/wix/yoshi/pull/2305) Add template for platform apps ([@maoryosef2](https://github.com/maoryosef2))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2332](https://github.com/wix/yoshi/pull/2332) Improve thunderbolt progress bar with showing all compilations ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#2326](https://github.com/wix/yoshi/pull/2326) Yoshi server docs: Initialize server data ([@yanivefraim](https://github.com/yanivefraim))
- [#2329](https://github.com/wix/yoshi/pull/2329) Yoshi server docs: testing ([@yanivefraim](https://github.com/yanivefraim))
- [#2321](https://github.com/wix/yoshi/pull/2321) Yoshi server docs: getting started ([@yanivefraim](https://github.com/yanivefraim))

## 4.66.0 (2020-05-03)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-bm-runtime`, `yoshi-flow-bm`
  - [#2279](https://github.com/wix/yoshi/pull/2279) Customize module topology through `.module.json` ([@amitdahan](https://github.com/amitdahan))
- `yoshi-server-client`
  - [#2251](https://github.com/wix/yoshi/pull/2251) Yoshi Server Client: use `wix-headers` ([@yanivefraim](https://github.com/yanivefraim))

#### Committers: 3

- Amit Dahan ([@amitdahan](https://github.com/amitdahan))
- Yaniv Efraim ([@yanivefraim](https://github.com/yanivefraim))
- [@wix-renovate](https://github.com/wix-renovate)

## 4.65.0 (2020-04-30)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-legacy`, `yoshi-flow-library`, `yoshi-flow-monorepo`, `yoshi-helpers`
  - [#2299](https://github.com/wix/yoshi/pull/2299) Allow only building specific apps in a monorepo (e.g. `yoshi-monorepo build my-app`) ([@amitdahan](https://github.com/amitdahan))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2311](https://github.com/wix/yoshi/pull/2311) Move `__tests__` directory to be inside `src` ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi-common`
  - [#2313](https://github.com/wix/yoshi/pull/2313) Reduce amount of data saved in stats ([@Gongreg](https://github.com/Gongreg))

## 4.64.0 (2020-04-28)

#### :rocket: New Feature

- `yoshi-server`
  - [#2283](https://github.com/wix/yoshi/pull/2283) Support BM routing ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#2310](https://github.com/wix/yoshi/pull/2310) Create stats for Elements/TB with Webpack's publicPath ([@ronami](https://github.com/ronami))
- `jest-yoshi-preset`
  - [#2309](https://github.com/wix/yoshi/pull/2309) Fix `devtools` option in `jest-yoshi.config.js` not working bug ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#2290](https://github.com/wix/yoshi/pull/2290) Add initial BM Flow docs ([@amitdahan](https://github.com/amitdahan))

## 4.63.1 (2020-04-28)

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#2302](https://github.com/wix/yoshi/pull/2302) Decrease the size of Elements/TB stats file ([@ronami](https://github.com/ronami))

## 4.63.0 (2020-04-27)

#### :rocket: New Feature

- `yoshi-server`
  - [#2273](https://github.com/wix/yoshi/pull/2273) Make it easier to access your server's config file ([@yanivefraim](https://github.com/yanivefraim))

#### :nail_care: Polish

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2301](https://github.com/wix/yoshi/pull/2301) Improve Elements' server bundle size ([@ronami](https://github.com/ronami))

## 4.62.0 (2020-04-26)

#### :rocket: New Feature

- `yoshi-common`
  - [#2300](https://github.com/wix/yoshi/pull/2300) Profile a build using `PROFILE=true` environment parameter ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-monorepo`
  - [#2295](https://github.com/wix/yoshi/pull/2295) Run `yoshi build --analyze` in monorepo to get webworker bundles analyze as well ([@amitdahan](https://github.com/amitdahan))

#### :bug: Bug Fix

- `yoshi-flow-bm-runtime`, `yoshi-flow-bm`
  - [#2293](https://github.com/wix/yoshi/pull/2293) Register page components with `componentName` instead of `componentId` ([@amitdahan](https://github.com/amitdahan))

## 4.61.2 (2020-04-26)

#### :rocket: New Feature

- `yoshi-flow-legacy`, `yoshi-helpers`
  - [#2245](https://github.com/wix/yoshi/pull/2245) Use `is-ci` package instead of reading TeamCity's env vars ([@stavalfi](https://github.com/stavalfi))

## 4.61.1 (2020-04-26)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2226](https://github.com/wix/yoshi/pull/2226) Fix a bug that prevented library flow to work in some cases when yarn was used for installation ([@ranyitz](https://github.com/ranyitz))
- `yoshi-server`
  - [#2277](https://github.com/wix/yoshi/pull/2277) Fix a bug where there's no renderer ([@yanivefraim](https://github.com/yanivefraim))

#### :memo: Documentation

- [#2286](https://github.com/wix/yoshi/pull/2286) Fix broken assets links in website ([@ranyitz](https://github.com/ranyitz))
- [#2289](https://github.com/wix/yoshi/pull/2289) Change tagline and improve planets logic ([@ranyitz](https://github.com/ranyitz))
- [#2288](https://github.com/wix/yoshi/pull/2288) Brand new main page based on yoshi flows universe idea 🚀 ([@yavorsky](https://github.com/yavorsky))
- [#2285](https://github.com/wix/yoshi/pull/2285) Inline all assets used in the docs ([@amitdahan](https://github.com/amitdahan))
- [#2287](https://github.com/wix/yoshi/pull/2287) Add flow editor to docs ([@yavorsky](https://github.com/yavorsky))

#### :house: Internal

- `yoshi-server`
  - [#2278](https://github.com/wix/yoshi/pull/2278) Yoshi Server: fix types ([@yanivefraim](https://github.com/yanivefraim))

## 4.61.0 (2020-04-23)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2284](https://github.com/wix/yoshi/pull/2284) Enable `yoshi build --stats` for monorepo-flow worker bundle ([@amitdahan](https://github.com/amitdahan))

#### :memo: Documentation

- `yoshi-flow-editor`
  - [#2275](https://github.com/wix/yoshi/pull/2275) Add docs for platform apps support with editor flow ([@yavorsky](https://github.com/yavorsky))

## 4.60.0 (2020-04-23)

#### :rocket: New Feature

- `yoshi-flow-monorepo`
  - [#2280](https://github.com/wix/yoshi/pull/2280) Write only the minimal stats file and do it only when needed ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2274](https://github.com/wix/yoshi/pull/2274) Minimize node server code for Tb-Elements ([@ronami](https://github.com/ronami))

## 4.59.0 (2020-04-22)

#### :rocket: New Feature

- [#2276](https://github.com/wix/yoshi/pull/2276) Brand new website ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-legacy`
  - [#2272](https://github.com/wix/yoshi/pull/2272) Generate automatically bundle analyzer port ([@yavorsky](https://github.com/yavorsky))

## 4.58.0 (2020-04-21)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-legacy`, `yoshi-flow-library`, `yoshi-flow-monorepo`
  - [#2267](https://github.com/wix/yoshi/pull/2267) Add a progress bar for build & start commands ([@ranyitz](https://github.com/ranyitz))
- `yoshi-server`
  - [#2257](https://github.com/wix/yoshi/pull/2257) Add an option to use `@wix/wix-bootstrap-renderer` ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-common`
  - [#2224](https://github.com/wix/yoshi/pull/2224) Add `editorx` domains to webpack-dev-server's allowed hosts ([@ranyitz](https://github.com/ranyitz))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2225](https://github.com/wix/yoshi/pull/2225) Fix flow library template tsconfig to support es5 transpilation ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#2266](https://github.com/wix/yoshi/pull/2266) Change exports to export s to make the search work on API page ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- `yoshi-flow-monorepo`
  - [#2256](https://github.com/wix/yoshi/pull/2256) Bundle `editor-elements-library` similar to `thudnerbolt-elements` ([@NitayRabi](https://github.com/NitayRabi))
- Other
  - [#2258](https://github.com/wix/yoshi/pull/2258) Remove specific names and use a team as the codeowners of the repo ([@ranyitz](https://github.com/ranyitz))

## 4.57.2 (2020-04-19)

#### :rocket: New Feature

- `babel-preset-yoshi`
  - [#2254](https://github.com/wix/yoshi/pull/2254) Allow using flag to prevent prop type optimization ([@NitayRabi](https://github.com/NitayRabi))
- `yoshi-flow-editor`
  - [#2231](https://github.com/wix/yoshi/pull/2231) Update editor entry-point to accept `default` export with function ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `jest-yoshi-preset`
  - [#2235](https://github.com/wix/yoshi/pull/2235) Use an identity-proxy that supports both default & named imports ([@amitdahan](https://github.com/amitdahan))

#### :nail_care: Polish

- `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2252](https://github.com/wix/yoshi/pull/2252) Pass `componentId` to platform's Settings ([@yavorsky](https://github.com/yavorsky))

## 4.57.1 (2020-04-16)

#### :bug: Bug Fix

- `yoshi-flow-editor-runtime`
  - [#2246](https://github.com/wix/yoshi/pull/2246) Hotfix: return `wrappedController` for createControllers wrapper ([@yavorsky](https://github.com/yavorsky))

## 4.57.0 (2020-04-16)

#### :rocket: New Feature

- `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2217](https://github.com/wix/yoshi/pull/2217) Separate wrapping for ooi widgets and platform widgets ([@maoryosef2](https://github.com/maoryosef2))

#### :nail_care: Polish

- `yoshi-common`
  - [#2227](https://github.com/wix/yoshi/pull/2227) Don't transpile Carmi's output with Typescript/Babel ([@ronami](https://github.com/ronami))
- `yoshi-flow-editor-runtime`
  - [#2222](https://github.com/wix/yoshi/pull/2222) Use `EditorSDKLoadedContext` interface for editorSDK render prop. ([@yavorsky](https://github.com/yavorsky))
- `yoshi-flow-editor`
  - [#2233](https://github.com/wix/yoshi/pull/2233) Add `isAnalyze` option to Worker bundles for flow editor. ([@yavorsky](https://github.com/yavorsky))

#### :house: Internal

- [#2238](https://github.com/wix/yoshi/pull/2238) Remove `yurynix` from codeowners ([@yurynix](https://github.com/yurynix))

## 4.56.3 (2020-04-15)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-editor`
  - [#2237](https://github.com/wix/yoshi/pull/2237) Add entries from editor flow to files needed to be transpiled ([@yavorsky](https://github.com/yavorsky))

## 4.56.2 (2020-04-14)

#### :bug: Bug Fix

- `yoshi-flow-editor`
  - [#2229](https://github.com/wix/yoshi/pull/2229) Use ES5 in entry points ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish

- `yoshi-flow-editor-runtime`
  - [#2228](https://github.com/wix/yoshi/pull/2228) Use `isEditor` as an optional value for `IWixSDKProps` ([@yavorsky](https://github.com/yavorsky))

## 4.56.1 (2020-04-13)

#### :rocket: New Feature

- `yoshi-flow-legacy`
  - [#2218](https://github.com/wix/yoshi/pull/2218) Enable setting mocha timeout as an environment variable ([@morsh](https://github.com/morsh))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2220](https://github.com/wix/yoshi/pull/2220) Revert "fullstack templates use @wix/wix-test-env" ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-library`, `yoshi-flow-monorepo`
  - [#2221](https://github.com/wix/yoshi/pull/2221) Revert "Verify dependency tree for dependency conflicts (#2199)" ([@amitdahan](https://github.com/amitdahan))

## 4.56.0 (2020-04-13)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2202](https://github.com/wix/yoshi/pull/2202) Editor Flow now loads Editor SDK dynamically and incapsulate it ([@yavorsky](https://github.com/yavorsky))
- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-library`, `yoshi-flow-monorepo`
  - [#2199](https://github.com/wix/yoshi/pull/2199) Verify dependency tree for dependency conflicts ([@amitdahan](https://github.com/amitdahan))
- `yoshi-server-client`
  - [#2196](https://github.com/wix/yoshi/pull/2196) Handle non json response ([@yanivefraim](https://github.com/yanivefraim))

#### :nail_care: Polish

- `eslint-config-yoshi-base`, `eslint-config-yoshi`
  - [#2200](https://github.com/wix/yoshi/pull/2200) Remove `no-non-null-assertion` eslint rule ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#2219](https://github.com/wix/yoshi/pull/2219) `BROWSER=none` instead of `false` for canceling browser from opening on `start` ([@ranyitz](https://github.com/ranyitz))
- [#2205](https://github.com/wix/yoshi/pull/2205) Fix a broken link in create-app docs ([@tozaicevas](https://github.com/tozaicevas))

#### :house: Internal

- [#2198](https://github.com/wix/yoshi/pull/2198) Split yoshi server tests to run less time in the CI ([@yanivefraim](https://github.com/yanivefraim))

## 4.55.1 (2020-04-06)

#### :bug: Bug Fix

- `yoshi-flow-legacy`, `yoshi-flow-monorepo`
  - [#2197](https://github.com/wix/yoshi/pull/2197) Bump wnpm-ci to `8.0.121` to fix a bug with publishing versions when there were no changes ([@netanelgilad](https://github.com/netanelgilad))
- `yoshi-flow-library`
  - [#2194](https://github.com/wix/yoshi/pull/2194) Add `jest` and `jest-teamcity-reporter` as dependencies ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi-server`
  - [#2161](https://github.com/wix/yoshi/pull/2161) Refactor `InternalServerError` ([@yanivefraim](https://github.com/yanivefraim))

#### :house: Internal

- [#2195](https://github.com/wix/yoshi/pull/2195) Update timeout for a flaky test ([@yanivefraim](https://github.com/yanivefraim))

## 4.55.0 (2020-04-05)

#### :rocket: New Feature

- `jest-yoshi-preset`, `yoshi-config`
  - [#2186](https://github.com/wix/yoshi/pull/2186) Add the option to override the `globals` object in `e2eOptions` (#2102) ([@lironch](https://github.com/lironch))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2192](https://github.com/wix/yoshi/pull/2192) Remove strict implicit compiler options ([@ranyitz](https://github.com/ranyitz))
  - [#2183](https://github.com/wix/yoshi/pull/2183) Bump `bootstrap-hot-loader` to V4 ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `yoshi-flow-editor`
  - [#2191](https://github.com/wix/yoshi/pull/2191) [flow-editor] Add `commonjs2` external for lodash. ([@yavorsky](https://github.com/yavorsky))

## 4.54.1 (2020-04-05)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2185](https://github.com/wix/yoshi/pull/2185) [editor-flow] Add BoB apps support and allow users override platform hooks ([@yavorsky](https://github.com/yavorsky))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2189](https://github.com/wix/yoshi/pull/2189) [server templates]: Update express version ([@alexandervain](https://github.com/alexandervain))

## 4.54.0 (2020-04-02)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-library`, `yoshi-flow-monorepo`
  - [#2171](https://github.com/wix/yoshi/pull/2171) Output Webpack stats to a file (`target/webpack-stats.json`) by default on CI ([@Gongreg](https://github.com/Gongreg))
- `yoshi-common`
  - [#2170](https://github.com/wix/yoshi/pull/2170) Support bundling `st.css` files in SSR ([@NitayRabi](https://github.com/NitayRabi))

#### :bug: Bug Fix

- `yoshi-flow-editor-runtime`
  - [#2184](https://github.com/wix/yoshi/pull/2184) Prevent throwing errors for `publicData` getter when value is not loaded yet ([@yavorsky](https://github.com/yavorsky))
- `yoshi-flow-editor`
  - [#2177](https://github.com/wix/yoshi/pull/2177) Use `debug: false` value for editor bundles ([@yavorsky](https://github.com/yavorsky))

#### :memo: Documentation

- [#2169](https://github.com/wix/yoshi/pull/2169) add `node-api` doc to the website's sidebar ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- `yoshi-flow-bm-runtime`, `yoshi-flow-bm`
  - [#2173](https://github.com/wix/yoshi/pull/2173) Fix BM `moduleParams` type breakage ([@amitdahan](https://github.com/amitdahan))

## 4.53.3 (2020-04-01)

#### :nail_care: Polish

- `yoshi-flow-legacy`
  - [#2175](https://github.com/wix/yoshi/pull/2175) Yoshi Server: support yoshi-server for storybook ([@yanivefraim](https://github.com/yanivefraim))

## 4.53.2 (2020-03-31)

#### :bug: Bug Fix

- `yoshi-flow-library`
  - [#2172](https://github.com/wix/yoshi/pull/2172) add yoshi-flow-library's bin to the package.json's files array ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- `yoshi-flow-editor`
  - [#2167](https://github.com/wix/yoshi/pull/2167) feat(yoshi-flow-editor): Add migraiton guide ([@yavorsky](https://github.com/yavorsky))

## 4.53.1 (2020-03-30)

#### :bug: Bug Fix

- `jest-yoshi-preset`
  - [#2166](https://github.com/wix/yoshi/pull/2166) Yoshi Server: use jest transform on e2e tests ([@yanivefraim](https://github.com/yanivefraim))

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#2165](https://github.com/wix/yoshi/pull/2165) Fix Suricate configuration for monorepo flow ([@giladsegal](https://github.com/giladsegal))

#### :house: Internal

- [#1974](https://github.com/wix/yoshi/pull/1974) Add missing tests for `yoshi-server-testing` ([@yanivefraim](https://github.com/yanivefraim))

## 4.53.0 (2020-03-27)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor`
  - [#2151](https://github.com/wix/yoshi/pull/2151) Add `editorScript` support using `editor.app.ts` entry ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `yoshi-flow-editor-runtime`
  - [#2158](https://github.com/wix/yoshi/pull/2158) Fix `ssr` by checking `window` approachability ([@yavorsky](https://github.com/yavorsky))
- `eslint-config-yoshi-base`, `yoshi-server`
  - [#2145](https://github.com/wix/yoshi/pull/2145) Update eslint-config-yoshi-base for TS ([@malcolmmadsheep](https://github.com/malcolmmadsheep))

#### :memo: Documentation

- [#2156](https://github.com/wix/yoshi/pull/2156) Fixing the test watch command ([@lironch](https://github.com/lironch))

#### :house: Internal

- `yoshi-common`, `yoshi-helpers`
  - [#2148](https://github.com/wix/yoshi/pull/2148) Add support for custom cdn certificate ([@amiryonatan](https://github.com/amiryonatan))
- `create-yoshi-app`, `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-library`, `yoshi-flow-monorepo`, `yoshi-server-react`
  - [#2147](https://github.com/wix/yoshi/pull/2147) Disable no `null` assertion rule in yoshi's codebase ([@ranyitz](https://github.com/ranyitz))
- `yoshi-common`
  - [#2142](https://github.com/wix/yoshi/pull/2142) Prevent clearing console when `DEBUG` environment parameter is enabled ([@ranyitz](https://github.com/ranyitz))

## 4.52.2 (2020-03-23)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2137](https://github.com/wix/yoshi/pull/2137) Always transpile with `ts-node` ts/tsx files even if they're ignored by git ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `yoshi-flow-editor`
  - [#2134](https://github.com/wix/yoshi/pull/2134) [flow-editor] Dont generate viewerScript for each widget. ([@yavorsky](https://github.com/yavorsky))
- `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2135](https://github.com/wix/yoshi/pull/2135) [editor-flow] Settings panel fixes. ([@yavorsky](https://github.com/yavorsky))

#### :house: Internal

- [#2136](https://github.com/wix/yoshi/pull/2136) Yoshi Server Tests: a tiny type fix ([@yanivefraim](https://github.com/yanivefraim))

## 4.52.1 (2020-03-22)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2133](https://github.com/wix/yoshi/pull/2133) Don't transpile with `ts-node/register` files ignored by git ([@ronami](https://github.com/ronami))

#### :house: Internal

- `create-yoshi-app`
  - [#2130](https://github.com/wix/yoshi/pull/2130) create-yoshi-app:dev should include the experimental flows ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#2115](https://github.com/wix/yoshi/pull/2115) Add a test for initData on routes ([@yanivefraim](https://github.com/yanivefraim))

## 4.52.0 (2020-03-19)

#### :rocket: New Feature

- `yoshi-server-client`, `yoshi-server`
  - [#2125](https://github.com/wix/yoshi/pull/2125) Support CSRF ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-flow-editor`
  - [#2123](https://github.com/wix/yoshi/pull/2123) Consider `overridePlatformBaseUrls` when building a query + build it with `join-url` ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `yoshi-common`
  - [#2127](https://github.com/wix/yoshi/pull/2127) Resolve stylable dependencies from `cwd` ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish

- `yoshi-common`
  - [#2126](https://github.com/wix/yoshi/pull/2126) Use `React` as an external module for `thunderbolt-elements` ([@ronami](https://github.com/ronami))
- `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#2124](https://github.com/wix/yoshi/pull/2124) Use `withStyles` wrapper and always `separate-css` ([@yavorsky](https://github.com/yavorsky))

#### :memo: Documentation

- [#2128](https://github.com/wix/yoshi/pull/2128) update contributing with an up to date 'release-a-new-version' guide ([@ranyitz](https://github.com/ranyitz))

## 4.51.2 (2020-03-19)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2122](https://github.com/wix/yoshi/pull/2122) Resolve tsc bin only when tsc-process is used ([@ranyitz](https://github.com/ranyitz))

## 4.51.1 (2020-03-18)

#### :rocket: New Feature

- `babel-preset-yoshi`, `create-yoshi-app`, `jest-yoshi-preset`, `yoshi-common`, `yoshi-flow-library`
  - [#2094](https://github.com/wix/yoshi/pull/2094) Yoshi flow library ([@ranyitz](https://github.com/ranyitz))

## 4.51.0 (2020-03-18)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#2107](https://github.com/wix/yoshi/pull/2107) Enable IDE syntax highlighting for templates `package.json` files ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `bootstrap-hot-loader`
  - [#2116](https://github.com/wix/yoshi/pull/2116) bootstrap-hot-loader: change `BootstrapContext` to be `any` ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-flow-monorepo`
  - [#2114](https://github.com/wix/yoshi/pull/2114) Use inline source maps for worker locally to support loading worker as a blob ([@ronami](https://github.com/ronami))

#### :house: Internal

- [#2112](https://github.com/wix/yoshi/pull/2112) [create-yoshi-app:dev]: Improve symlink strategy to ignore development types ([@ranyitz](https://github.com/ranyitz))

## 4.50.0 (2020-03-17)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-server`
  - [#2106](https://github.com/wix/yoshi/pull/2106) Yoshi server: init server ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-server`
  - [#2111](https://github.com/wix/yoshi/pull/2111) Yoshi Server: Support ambassador ([@yanivefraim](https://github.com/yanivefraim))

## 4.49.1 (2020-03-16)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2104](https://github.com/wix/yoshi/pull/2104) Don't make full page reload if client HMR is defined ([@ronami](https://github.com/ronami))
- `jest-yoshi-preset`
  - [#2103](https://github.com/wix/yoshi/pull/2103) Fix `devtools` option in `jest-yoshi.config.js` not working bug ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#2099](https://github.com/wix/yoshi/pull/2099) add a message to the readme that only wix employees can contribute ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- `yoshi-flow-monorepo`
  - [#2056](https://github.com/wix/yoshi/pull/2056) thunderbolt - Add `editor-elements-registry` to bundling check ([@NitayRabi](https://github.com/NitayRabi))

## 4.49.0 (2020-03-15)

#### :rocket: New Feature

- `yoshi-server`
  - [#2101](https://github.com/wix/yoshi/pull/2101) Yoshi Server: less strict return type restrictions ([@yanivefraim](https://github.com/yanivefraim))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2021](https://github.com/wix/yoshi/pull/2021) Fullstack templates use @wix/wix-test-env ([@hugebdu](https://github.com/hugebdu))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#2100](https://github.com/wix/yoshi/pull/2100) Remove tslint rule from settings.json ([@ranyitz](https://github.com/ranyitz))

## 4.48.0 (2020-03-15)

#### :rocket: New Feature

- Other
  - [#2096](https://github.com/wix/yoshi/pull/2096) Revert "Remove ts in index-dev" ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#2090](https://github.com/wix/yoshi/pull/2090) Remove erb from BM templates ([@banuni](https://github.com/banuni))
- `yoshi-common`
  - [#2093](https://github.com/wix/yoshi/pull/2093) Add `.editor-flow-dev.com` to allowedHosts ([@yavorsky](https://github.com/yavorsky))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2075](https://github.com/wix/yoshi/pull/2075) Align npm scripts in templates ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-common`
  - [#2097](https://github.com/wix/yoshi/pull/2097) Enable adding an absolute path to `serverFilePath` in `serverProcess` ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#2091](https://github.com/wix/yoshi/pull/2091) [yoshi template "library"]: use `maven-v4.0.0.xsd` in `pom.xml` ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :memo: Documentation

- `yoshi-flow-editor`
  - [#2030](https://github.com/wix/yoshi/pull/2030) Add docs for overview and dev center registration + troubleshooting. ([@yavorsky](https://github.com/yavorsky))

#### :house: Internal

- [#2087](https://github.com/wix/yoshi/pull/2087) Integration tests: fix stylable flaky test ([@yanivefraim](https://github.com/yanivefraim))
- [#1970](https://github.com/wix/yoshi/pull/1970) Basic setup for testing monorepo flow use cases ([@ronami](https://github.com/ronami))

## 4.47.3 (2020-03-11)

#### :bug: Bug Fix

- `yoshi-server`
  - [#2078](https://github.com/wix/yoshi/pull/2078) Yoshi Server: Support nested default routes ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-flow-legacy`
  - [#2089](https://github.com/wix/yoshi/pull/2089) Remove dep check ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#2085](https://github.com/wix/yoshi/pull/2085) Integration tests: fix flaky storybook test ([@yanivefraim](https://github.com/yanivefraim))

#### :nail_care: Polish

- `yoshi-flow-legacy`
  - [#2081](https://github.com/wix/yoshi/pull/2081) Add migration script link to release deprecation ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- Other
  - [#2085](https://github.com/wix/yoshi/pull/2085) Integration tests: fix flaky storybook test ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-bm-runtime`, `yoshi-flow-bm`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`, `yoshi-helpers`, `yoshi-server-react`, `yoshi-server-tools`
  - [#2074](https://github.com/wix/yoshi/pull/2074) Remove not needed type resolutions ([@ranyitz](https://github.com/ranyitz))

## 4.47.2 (2020-03-10)

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2076](https://github.com/wix/yoshi/pull/2076) Duplicated module field in library template ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-legacy`
  - [#2083](https://github.com/wix/yoshi/pull/2083) Revert telemetry and bi-logger private dependency ([@ranyitz](https://github.com/ranyitz))

## 4.47.1 (2020-03-09)

#### :boom: Breaking Change

- `yoshi-flow-monorepo`
  - [#2072](https://github.com/wix/yoshi/pull/2072) Remove the `yoshi release` command of the monorepo flow ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-flow-legacy`
  - [#2077](https://github.com/wix/yoshi/pull/2077) Wait for release command - fix yoshi release ([@ranyitz](https://github.com/ranyitz))

## 4.47.0 (2020-03-09)

#### :rocket: New Feature

- `yoshi-server`
  - [#2058](https://github.com/wix/yoshi/pull/2058) Provide `404` and `500` errors on Yoshi Server Routes ([@yanivefraim](https://github.com/yanivefraim))

#### :warning: Deprecation :building_construction: Templates

- `create-yoshi-app`, `yoshi-flow-legacy`
  - [#2069](https://github.com/wix/yoshi/pull/2069) Deprecate `yoshi release` command ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#2060](https://github.com/wix/yoshi/pull/2060) Move some integration tests from `.js` to `.ts` ([@yanivefraim](https://github.com/yanivefraim))
- [#2070](https://github.com/wix/yoshi/pull/2070) Add deprecation PR label ([@ranyitz](https://github.com/ranyitz))

## 4.46.0 (2020-03-09)

#### :boom: Breaking Change

- `stylelint-config-yoshi`, `yoshi-flow-legacy`
  - [#2062](https://github.com/wix/yoshi/pull/2062) Remove stylelint dependency ([@ranyitz](https://github.com/ranyitz))

#### :rocket: New Feature

- `eslint-config-yoshi-base`
  - [#2066](https://github.com/wix/yoshi/pull/2066) Add the spaced comment eslint rule ([@ranyitz](https://github.com/ranyitz))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2065](https://github.com/wix/yoshi/pull/2065) Use eslint for TypeScript templates ([@ranyitz](https://github.com/ranyitz))
  - [#2067](https://github.com/wix/yoshi/pull/2067) `tsconfig` skip lib check for templates ([@ranyitz](https://github.com/ranyitz))
  - [#2063](https://github.com/wix/yoshi/pull/2063) Update vscode intregration ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-flow-legacy`, `yoshi-helpers`
  - [#2059](https://github.com/wix/yoshi/pull/2059) Use `SRC_MD5` to consturct public patch ([@NitayRabi](https://github.com/NitayRabi))

#### :house: Internal

- `yoshi-common`
  - [#2061](https://github.com/wix/yoshi/pull/2061) Refactor server process class usage (default `env`) ([@ranyitz](https://github.com/ranyitz))

## 4.45.1 (2020-03-08)

#### :bug: Bug Fix

- `yoshi-common`
  - [#2057](https://github.com/wix/yoshi/pull/2057) Fix yoshi serve: app-server use `NODE_ENV="development"` ([@ranyitz](https://github.com/ranyitz))
- `yoshi-common`, `yoshi-flow-monorepo`
  - [#2045](https://github.com/wix/yoshi/pull/2045) Run webworker server compiler in start command ([@ronami](https://github.com/ronami))

## 4.45.0 (2020-03-08)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-common`
  - [#2051](https://github.com/wix/yoshi/pull/2051) Support for `TypeScript`/`Babel` transpilation for server process ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-legacy`
  - [#2037](https://github.com/wix/yoshi/pull/2037) Make `yoshi test --help` show how to run specific test files ([@jakutis](https://github.com/jakutis))

#### :house: Internal

- [#2052](https://github.com/wix/yoshi/pull/2052) Run integration tests serially by default ([@ranyitz](https://github.com/ranyitz))
- [#2048](https://github.com/wix/yoshi/pull/2048) Integration tests: Remove duplications ([@yanivefraim](https://github.com/yanivefraim))
- [#2044](https://github.com/wix/yoshi/pull/2044) Integration tests: Handle errors in tests + better logs ([@yanivefraim](https://github.com/yanivefraim))

## 4.44.1 (2020-03-04)

#### :bug: Bug Fix

- `yoshi`
  - [#2046](https://github.com/wix/yoshi/pull/2046) Fix `webpack.config.storybook.js` stylable webpack plugin import ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#2040](https://github.com/wix/yoshi/pull/2040) Add scripts to Yoshi tests fixtures ([@yanivefraim](https://github.com/yanivefraim))

## 4.44.0 (2020-03-04)

#### :rocket: New Feature

- `jest-yoshi-preset`, `yoshi-common`, `yoshi-flow-legacy`, `yoshi-stylable-dependencies`, `yoshi`
  - [#2023](https://github.com/wix/yoshi/pull/2023) Add `yoshi-stylable-dependencies` (Support for stylable 3) ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#2036](https://github.com/wix/yoshi/pull/2036) Change integration package name to avoid haste map warning ([@yanivefraim](https://github.com/yanivefraim))
- [#2035](https://github.com/wix/yoshi/pull/2035) Remove website lockfile ([@ranyitz](https://github.com/ranyitz))

## 4.43.2 (2020-03-01)

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2028](https://github.com/wix/yoshi/pull/2028) Start `server=dist/server` on TypeScript templates ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#2025](https://github.com/wix/yoshi/pull/2025) Fix stylable type mismatches ([@nitayneeman](https://github.com/nitayneeman))

## 4.43.1 (2020-02-27)

#### :bug: Bug Fix

- `yoshi`
  - [#2024](https://github.com/wix/yoshi/pull/2024) Remove `*.st.css` from `types.d.ts` ([@ranyitz](https://github.com/ranyitz))

## 4.43.0 (2020-02-26)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`, `yoshi`
  - [#2010](https://github.com/wix/yoshi/pull/2010) Expose `stylableSeparateCss` configuration ([@nitayneeman](https://github.com/nitayneeman))
- `yoshi-server`
  - [#2019](https://github.com/wix/yoshi/pull/2019) Yoshi Server HMR ([@yanivefraim](https://github.com/yanivefraim))

## 4.42.0 (2020-02-26)

#### :rocket: New Feature

- `yoshi-common`
  - [#2018](https://github.com/wix/yoshi/pull/2018) Yoshi serve node API ([@Gongreg](https://github.com/Gongreg))

#### :memo: Documentation

- [#2016](https://github.com/wix/yoshi/pull/2016) Yoshi serve documentation ([@Gongreg](https://github.com/Gongreg))
- [#2020](https://github.com/wix/yoshi/pull/2020) Remove `index-dev.ts` option from docs ([@Gongreg](https://github.com/Gongreg))

## 4.41.0 (2020-02-25)

#### :rocket: New Feature

- `eslint-config-yoshi-base`
  - [#2012](https://github.com/wix/yoshi/pull/2012) Remove `@typescript-eslint/consistent-type-definitions` rule ([@Gongreg](https://github.com/Gongreg))
- `yoshi-common`, `yoshi-flow-app`, `yoshi-helpers`
  - [#1980](https://github.com/wix/yoshi/pull/1980) Yoshi serve command implementation ([@Gongreg](https://github.com/Gongreg))
- `eslint-config-yoshi-base`, `eslint-config-yoshi`
  - [#2005](https://github.com/wix/yoshi/pull/2005) Add `eslint-config-yoshi` TypeScript support ([@Gongreg](https://github.com/Gongreg))

#### :building_construction: Templates

- `create-yoshi-app`
  - [#2004](https://github.com/wix/yoshi/pull/2004) Server templates cleanups ([@hugebdu](https://github.com/hugebdu))

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#2015](https://github.com/wix/yoshi/pull/2015) Scoping thunderbolt modules under `@wix` ([@orgranit](https://github.com/orgranit))

#### :house: Internal

- [#2014](https://github.com/wix/yoshi/pull/2014) Fix website publishing ([@ranyitz](https://github.com/ranyitz))
- [#2011](https://github.com/wix/yoshi/pull/2011) Add templates label to changelog ([@ranyitz](https://github.com/ranyitz))

## 4.40.1 (2020-02-24)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#1991](https://github.com/wix/yoshi/pull/1991) Support single viewerScript + few fixes and enhancements ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#1927](https://github.com/wix/yoshi/pull/1927) Emit Webpack stats file for worker compilation ([@ronami](https://github.com/ronami))

## 4.40.0 (2020-02-23)

#### :rocket: New Feature

- `yoshi-server-client`, `yoshi-server-react`, `yoshi-server-testing`, `yoshi-server`
  - [#1996](https://github.com/wix/yoshi/pull/1996) Yoshi Server - change the api ([@yanivefraim](https://github.com/yanivefraim))

#### :nail_care: Polish

- `create-yoshi-app`, `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`, `yoshi-helpers`
  - [#1960](https://github.com/wix/yoshi/pull/1960) Deprecating --entry-point and --server flags ([@Gongreg](https://github.com/Gongreg))

#### :memo: Documentation

- [#1997](https://github.com/wix/yoshi/pull/1997) Update configuration.md ([@Gongreg](https://github.com/Gongreg))

## 4.39.0 (2020-02-21)

#### :rocket: New Feature

- `yoshi-server`
  - [#1992](https://github.com/wix/yoshi/pull/1992) Yoshi Server: add a `requireHttps` middleware ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-server-testing`
  - [#1988](https://github.com/wix/yoshi/pull/1988) Yoshi Server Testing: better error messages ([@yanivefraim](https://github.com/yanivefraim))

## 4.38.0 (2020-02-20)

#### :boom: Breaking Change

- `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`
  - [#1978](https://github.com/wix/yoshi/pull/1978) Removing `--ssl` `--https` options ([@Gongreg](https://github.com/Gongreg))

## 4.37.5 (2020-02-20)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1984](https://github.com/wix/yoshi/pull/1984) use a separate runtime chunk only for target web ([@ronami](https://github.com/ronami))

#### :house: Internal

- [#1985](https://github.com/wix/yoshi/pull/1985) Tests: increase timeout for flaky TS test ([@yanivefraim](https://github.com/yanivefraim))

## 4.37.4 (2020-02-19)

#### :nail_care: Polish

- `yoshi-flow-legacy`
  - [#1981](https://github.com/wix/yoshi/pull/1981) Yoshi Server: add support for mocha ([@yanivefraim](https://github.com/yanivefraim))

## 4.37.3 (2020-02-19)

#### :bug: Bug Fix

- `create-yoshi-app`, `yoshi-common`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`
  - [#1983](https://github.com/wix/yoshi/pull/1983) Bump to `tpa-style-webpack-plugin@1.3.13` to fix a bug with enhanced tpa style option usage ([@sagish](https://github.com/sagish))

## 4.37.2 (2020-02-19)

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#1982](https://github.com/wix/yoshi/pull/1982) Add content hash to client `webworker` bundle ([@roymiloh](https://github.com/roymiloh))

#### :house: Internal

- `create-yoshi-app`
  - [#1976](https://github.com/wix/yoshi/pull/1976) fix(create-yoshi-app): Increase timeout time for `h2` selector for viewer. ([@yavorsky](https://github.com/yavorsky))

## 4.37.1 (2020-02-18)

#### :nail_care: Polish

- `yoshi-flow-legacy`, `yoshi-flow-monorepo`
  - [#1973](https://github.com/wix/yoshi/pull/1973) Fixed a bug where empty dependencies won't update `tsconfig.json` ([@amiryonatan](https://github.com/amiryonatan))

## 4.37.0 (2020-02-17)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1967](https://github.com/wix/yoshi/pull/1967) [create-yoshi-app][out-of-iframe] - Remove wix-ui-core dependency ([@shlomitc](https://github.com/shlomitc))

#### :bug: Bug Fix

- `jest-yoshi-preset`
  - [#1971](https://github.com/wix/yoshi/pull/1971) Yoshi Server: do not apply Yoshi Server Jest Transform in e2e tests ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`
  - [#1972](https://github.com/wix/yoshi/pull/1972) FEDINF-488 - moved the validation of node version to the start of the… ([@asaf-yonay](https://github.com/asaf-yonay))

#### :house: Internal

- [#1966](https://github.com/wix/yoshi/pull/1966) Fix website publishing: enforce registry to be the public registry for the website ([@ranyitz](https://github.com/ranyitz))

## 4.36.0 (2020-02-16)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1961](https://github.com/wix/yoshi/pull/1961) Upgrade `18next` and change client templates ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#1959](https://github.com/wix/yoshi/pull/1959) Build all packages on monorepo flow ([@roymiloh](https://github.com/roymiloh))

## 4.35.1 (2020-02-16)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1929](https://github.com/wix/yoshi/pull/1929) Upgrade 18next and change fullstack templates ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1965](https://github.com/wix/yoshi/pull/1965) Drop type declarations for wnp modules with types ([@hugebdu](https://github.com/hugebdu))

#### :house: Internal

- `create-yoshi-app`, `yoshi-common`, `yoshi-flow-legacy`
  - [#1956](https://github.com/wix/yoshi/pull/1956) Add the `spaced-comment` lint rule ([@ranyitz](https://github.com/ranyitz))

## 4.35.0 (2020-02-12)

#### :rocket: New Feature

- `yoshi-server`
  - [#1954](https://github.com/wix/yoshi/pull/1954) Yoshi Server: a temp fix for body parsing ([@yanivefraim](https://github.com/yanivefraim))
- `jest-yoshi-preset`, `yoshi-config`
  - [#1952](https://github.com/wix/yoshi/pull/1952) jest-preset-override - allow resetMocks config override ([@justtal](https://github.com/justtal))

## 4.34.0 (2020-02-12)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-common`
  - [#1947](https://github.com/wix/yoshi/pull/1947) Add an ability to modify the public path ([@roymiloh](https://github.com/roymiloh))

#### :nail_care: Polish

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#1949](https://github.com/wix/yoshi/pull/1949) Do not generate manifest for server webworker bundle ([@roymiloh](https://github.com/roymiloh))

#### :memo: Documentation

- [#1951](https://github.com/wix/yoshi/pull/1951) Added documentation about `BROWSER=false` ([@Gongreg](https://github.com/Gongreg))

## 4.33.0 (2020-02-10)

#### :rocket: New Feature

- `yoshi-server`
  - [#1943](https://github.com/wix/yoshi/pull/1943) Yoshi server: add `bo-auth` middleware ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-common`, `yoshi-config`, `yoshi-flow-monorepo`
  - [#1931](https://github.com/wix/yoshi/pull/1931) Create a webworker bundle that runs on server side ([@roymiloh](https://github.com/roymiloh))

## 4.32.0 (2020-02-09)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-storybook-dependencies`
  - [#1861](https://github.com/wix/yoshi/pull/1861) Storybook managed under experimental flag ([@NitayRabi](https://github.com/NitayRabi))
- `eslint-config-yoshi`, `tslint-config-yoshi`
  - [#1918](https://github.com/wix/yoshi/pull/1918) `eslint-tslint-config-yoshi` - remove `no-full-wsr-lib` ([@mykas](https://github.com/mykas))
- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-legacy`, `yoshi`
  - [#1913](https://github.com/wix/yoshi/pull/1913) Telemetry support with `wix-bi-logger` ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1930](https://github.com/wix/yoshi/pull/1930) prevent error when project is opened at the first time ([@sidoruk-sv](https://github.com/sidoruk-sv))
- Other
  - [#1934](https://github.com/wix/yoshi/pull/1934) Removed remaining references to projects ([@Gongreg](https://github.com/Gongreg))

#### :house: Internal

- Other
  - [#1924](https://github.com/wix/yoshi/pull/1924) Migrate testing infra to TypeScript ([@ronami](https://github.com/ronami))
- `jest-yoshi-preset`, `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`, `yoshi-helpers`, `yoshi-server-tools`, `yoshi-server`, `yoshi`
  - [#1896](https://github.com/wix/yoshi/pull/1896) Remove files from the root pattern all over the monorepo ([@ranyitz](https://github.com/ranyitz))

## 4.31.0 (2020-02-04)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-template-intro`
  - [#1919](https://github.com/wix/yoshi/pull/1919) Upgrade `husky` to new major v`4.2.1` ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#1922](https://github.com/wix/yoshi/pull/1922) Remove content hash from webworker output for experimentalBuildHtml ([@ronami](https://github.com/ronami))
- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`
  - [#1856](https://github.com/wix/yoshi/pull/1856) Fix TypeScript caching issues on build command ([@roymiloh](https://github.com/roymiloh))

#### :house: Internal

- Other
  - [#1916](https://github.com/wix/yoshi/pull/1916) Refactor Yoshi Server's tests, use common base fixture ([@yanivefraim](https://github.com/yanivefraim))
  - [#1915](https://github.com/wix/yoshi/pull/1915) Refactor test utils, remove code duplication ([@yanivefraim](https://github.com/yanivefraim))
  - [#1911](https://github.com/wix/yoshi/pull/1911) Simplify moment exclusion test (Stabler CI) ([@NitayRabi](https://github.com/NitayRabi))
- `yoshi-server-client`, `yoshi-server`
  - [#1914](https://github.com/wix/yoshi/pull/1914) `yoshi-server` bug fix: return of different types ([@yanivefraim](https://github.com/yanivefraim))

## 4.30.0 (2020-02-02)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-template-intro`
  - [#1912](https://github.com/wix/yoshi/pull/1912) Upgrade `lint-staged` to new major v`10.0.7` ([@sidoruk-sv](https://github.com/sidoruk-sv))
- `yoshi-common`, `yoshi-flow-monorepo`
  - [#1894](https://github.com/wix/yoshi/pull/1894) Transpile webworker `importScripts` into `fetch` and `eval` ([@giladsegal](https://github.com/giladsegal))

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#1909](https://github.com/wix/yoshi/pull/1909) Add content hash to webworker output for `experimentalBuildHtml` ([@giladsegal](https://github.com/giladsegal))

#### :house: Internal

- Other
  - [#1906](https://github.com/wix/yoshi/pull/1906) Remove the restriction from `mini-css-extract-plugin` ([@ranyitz](https://github.com/ranyitz))
  - [#1908](https://github.com/wix/yoshi/pull/1908) Improve test performance ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-common`, `yoshi-flow-app`, `yoshi-server-client`, `yoshi-server`
  - [#1888](https://github.com/wix/yoshi/pull/1888) Yoshi server refactor + tests ([@yanivefraim](https://github.com/yanivefraim))

## 4.29.0 (2020-01-29)

#### :rocket: New Feature & :bug: Bug Fix

- `jest-yoshi-preset`
  - [#1885](https://github.com/wix/yoshi/pull/1885) `jest-environment-yoshi-puppeteer` Detect network errors + add a message for missing cdn server ([@yanivefraim](https://github.com/yanivefraim))

#### :house: Internal

- `jest-yoshi-preset`, `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`
  - [#1895](https://github.com/wix/yoshi/pull/1895) Remove files from the root of `yoshi-common` ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#1901](https://github.com/wix/yoshi/pull/1901) Configure renovate to work with wix registry ([@netanelgilad](https://github.com/netanelgilad))
  - [#1898](https://github.com/wix/yoshi/pull/1898) Remove `.npmrc` ([@netanelgilad](https://github.com/netanelgilad))
  - [#1890](https://github.com/wix/yoshi/pull/1890) Prompt when running integration tests with publish locally ([@yanivefraim](https://github.com/yanivefraim))
  - [#1892](https://github.com/wix/yoshi/pull/1892) Align integration tests to use new infra ([@yanivefraim](https://github.com/yanivefraim))
  - [#1889](https://github.com/wix/yoshi/pull/1889) Remove redundant files ([@yanivefraim](https://github.com/yanivefraim))
  - [#1886](https://github.com/wix/yoshi/pull/1886) Add tests for `babel-preset-yoshi` ([@yanivefraim](https://github.com/yanivefraim))

## 4.28.9 (2020-01-26)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1878](https://github.com/wix/yoshi/pull/1878) Fix a bug in `notExternalModules` regex patterns ([@yanivefraim](https://github.com/yanivefraim))

#### :nail_care: Polish

- `yoshi-common`
  - [#1883](https://github.com/wix/yoshi/pull/1883) Fix `svelte-server-side-preprocess` to report Svelte filename ([@nirnatan](https://github.com/nirnatan))
  * [#1880](https://github.com/wix/yoshi/pull/1880) Add immutable `true` to Svelte options ([@nirnatan](https://github.com/nirnatan))

#### :memo: Documentation

- [#1852](https://github.com/wix/yoshi/pull/1852) Fix broken link CLI documentation ([@EgoziE](https://github.com/EgoziE))

#### :house: Internal

- Other
  - [#1887](https://github.com/wix/yoshi/pull/1887) Improve release process - install website during publish ([@yanivefraim](https://github.com/yanivefraim))
  - [#1873](https://github.com/wix/yoshi/pull/1873) Add tests for `jest-preset-overrides` ([@yanivefraim](https://github.com/yanivefraim))
  - [#1882](https://github.com/wix/yoshi/pull/1882) Updates integration tests infra - get server url from `scripts` ([@yanivefraim](https://github.com/yanivefraim))
  - [#1875](https://github.com/wix/yoshi/pull/1875) update `CONTRIBUTING.md` document with the new testing infra ([@yanivefraim](https://github.com/yanivefraim))
  - [#1881](https://github.com/wix/yoshi/pull/1881) Update integration tests timeout ([@yanivefraim](https://github.com/yanivefraim))
  - [#1863](https://github.com/wix/yoshi/pull/1863) Clean old tests status checks ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`
  - [#1877](https://github.com/wix/yoshi/pull/1877) Change npm scripts names ([@ranyitz](https://github.com/ranyitz))

## 4.28.8 (2020-01-23)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1878](https://github.com/wix/yoshi/pull/1878) Fix a bug in notExternalModules regex patterns ([@yanivefraim](https://github.com/yanivefraim))

#### :nail_care: Polish

- `yoshi-common`
  - [#1880](https://github.com/wix/yoshi/pull/1880) Add `immutable` true to Svelte's options ([@nirnatan](https://github.com/nirnatan))

#### :memo: Documentation

- [#1852](https://github.com/wix/yoshi/pull/1852) Fix broken link ([@EgoziE](https://github.com/EgoziE))

#### :house: Internal

- `create-yoshi-app`
  - [#1877](https://github.com/wix/yoshi/pull/1877) Change npm scripts names ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#1863](https://github.com/wix/yoshi/pull/1863) Clean old tests status checks ([@yanivefraim](https://github.com/yanivefraim))

## 4.28.7 (2020-01-22)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1872](https://github.com/wix/yoshi/pull/1872) Fix server template's `environment.ts` ([@hugebdu](https://github.com/hugebdu))

#### :house: Internal

- `eslint-config-yoshi-base`
  - [#1871](https://github.com/wix/yoshi/pull/1871) Add basic linting guidelines ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-editor-runtime`
  - [#1868](https://github.com/wix/yoshi/pull/1868) Add a rule to disallow enums ([@ranyitz](https://github.com/ranyitz))
- `yoshi-flow-editor`
  - [#1869](https://github.com/wix/yoshi/pull/1869) [editor-flow] disconnect `CLI` and `bin` files ([@ranyitz](https://github.com/ranyitz))

## 4.28.6 (2020-01-20)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1865](https://github.com/wix/yoshi/pull/1865) Fix a bug with regex lookbehind not supported in Node v8 ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `yoshi-common`
  - [#1864](https://github.com/wix/yoshi/pull/1864) Always use Svelte as an external dependency in server bundle ([@ronami](https://github.com/ronami))
  - [#1858](https://github.com/wix/yoshi/pull/1858) Use `async` attribute instead of `defer` for injected script tags ([@ronami](https://github.com/ronami))

#### :house: Internal

- `create-yoshi-app`
  - [#1866](https://github.com/wix/yoshi/pull/1866) During create-yoshi-app:dev perform initial commit only on first time generation ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#1857](https://github.com/wix/yoshi/pull/1857) Update stale-bot config to extend time until stale and time until close ([@ranyitz](https://github.com/ranyitz))
  - [#1850](https://github.com/wix/yoshi/pull/1850) New test infra - move all tests and kill kitchensink ([@yanivefraim](https://github.com/yanivefraim))
  - [#1862](https://github.com/wix/yoshi/pull/1862) Add new status checks for new test infra ([@yanivefraim](https://github.com/yanivefraim))

## 4.28.5 (2020-01-19)

#### :rocket: New Feature

- `yoshi-common`
  - [#1812](https://github.com/wix/yoshi/pull/1812) Svelte SSR transform ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#1860](https://github.com/wix/yoshi/pull/1860) Always generate Webpack's stats for monorepo flow ([@roymiloh](https://github.com/roymiloh))

#### :memo: Documentation

- [#1851](https://github.com/wix/yoshi/pull/1851) Migration readme - Babel config clarification ([@koriguy](https://github.com/koriguy))

## 4.28.4 (2020-01-13)

#### :bug: Bug Fix

- `yoshi-flow-legacy`
  - [#1781](https://github.com/wix/yoshi/pull/1781) Fix eslint not finding `ts` files on TypeScript project ([@eranshabi](https://github.com/eranshabi))

#### :house: Internal

- [#1848](https://github.com/wix/yoshi/pull/1848) Reconfigure renovate with minor and patch updates ([@ranyitz](https://github.com/ranyitz))
- [#1843](https://github.com/wix/yoshi/pull/1843) New testing infra - add more tests ([@yanivefraim](https://github.com/yanivefraim))

## 4.28.3 (2020-01-13)

#### :bug: Bug Fix

- `jest-yoshi-preset`, `yoshi-common`, `yoshi-config`, `yoshi-flow-legacy`, `yoshi-helpers`
  - [#1847](https://github.com/wix/yoshi/pull/1847) change `babel-preset-yoshi` to be loaded from `yoshi-common` and fixing bug with monorepos installed via yarn ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#1838](https://github.com/wix/yoshi/pull/1838) Move tests to new testing infra ([@yanivefraim](https://github.com/yanivefraim))

## 4.28.2 (2020-01-09)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-bm`, `yoshi-flow-editor`
  - [#1842](https://github.com/wix/yoshi/pull/1842) Fix externals not resolving correctly with monorepos ([@ronami](https://github.com/ronami))

## 4.28.1 (2020-01-09)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1835](https://github.com/wix/yoshi/pull/1835) Serve statics from dev server in monorepo flow. ([@roymiloh](https://github.com/roymiloh))

#### :house: Internal

- [#1836](https://github.com/wix/yoshi/pull/1836) Do not try to publish on pullrequest CI. ([@yanivefraim](https://github.com/yanivefraim))
- [#1830](https://github.com/wix/yoshi/pull/1830) Test infra - move more tests to the new infra. ([@yanivefraim](https://github.com/yanivefraim))
- [#1825](https://github.com/wix/yoshi/pull/1825) Install with yarn in e2e tests. ([@ranyitz](https://github.com/ranyitz))
- [#1834](https://github.com/wix/yoshi/pull/1834) Reduce lerna's log level from default (notice) to 'warn'. ([@ranyitz](https://github.com/ranyitz))

## 4.28.0 (2020-01-07)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1822](https://github.com/wix/yoshi/pull/1822) `create-yoshi-app` - perform initial commit ([@NitayRabi](https://github.com/NitayRabi))
- `eslint-config-yoshi-base`, `jest-yoshi-preset`
  - [#1805](https://github.com/wix/yoshi/pull/1805) `jest-yoshi-preset` - Jest debug watch mode plugin ([@NitayRabi](https://github.com/NitayRabi))

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#1811](https://github.com/wix/yoshi/pull/1811) Generate `stats.json` during build and start into `dist/statics` ([@ronami](https://github.com/ronami))

#### :house: Internal

- Other
  - [#1823](https://github.com/wix/yoshi/pull/1823) Reduce Verdaccio logger output ([@juanpicado](https://github.com/juanpicado))
- `yoshi-common`
  - [#1780](https://github.com/wix/yoshi/pull/1780) New testing infra ([@yanivefraim](https://github.com/yanivefraim))

## 4.27.0 (2020-01-06)

#### :boom: Breaking Change

- `jest-yoshi-preset`, `yoshi-config`
  - [#1788](https://github.com/wix/yoshi/pull/1788) Separate jest overrides supported type by jest project type. ([@NitayRabi](https://github.com/NitayRabi))

#### :rocket: New Feature

- `yoshi-common`
  - [#1795](https://github.com/wix/yoshi/pull/1795) Show A warning log in case a `devDependency` (`yoshi`) is in the `dependencies` array ([@NitayRabi](https://github.com/NitayRabi))

#### :bug: Bug Fix

- `yoshi-common`
  - [#1810](https://github.com/wix/yoshi/pull/1810) Move suricate (private) dependency to be loaded by the consumer ([@ranyitz](https://github.com/ranyitz))
  - [#1818](https://github.com/wix/yoshi/pull/1818) Replace `@` with `_` in tunnel ids ([@netanelgilad](https://github.com/netanelgilad))

#### :house: Internal

- Other
  - [#1737](https://github.com/wix/yoshi/pull/1737) Advise to install dependencies when there is a change in `package.json/yarn.lock` after pulling/merging changes ([@deanshub](https://github.com/deanshub))
  - [#1808](https://github.com/wix/yoshi/pull/1808) Fix a bug - missing a return statement in one of the tests ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-flow-legacy`
  - [#1809](https://github.com/wix/yoshi/pull/1809) drop `haml` tests ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-common`
  - [#1807](https://github.com/wix/yoshi/pull/1807) Fix `.tsbuildinfo` (TypeScript cache file) bug with external types. ([@ranyitz](https://github.com/ranyitz))

## 4.26.1 (2020-01-02)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1801](https://github.com/wix/yoshi/pull/1801) Moving to sync requiring for ssr ([@deanshub](https://github.com/deanshub))
- `yoshi-common`
  - [#1803](https://github.com/wix/yoshi/pull/1803) Use unversioned public path on prod bundle only ([@roymiloh](https://github.com/roymiloh))
- `yoshi-common`, `yoshi-flow-monorepo`
  - [#1802](https://github.com/wix/yoshi/pull/1802) Do not emit runtime chunk on tb elements build ([@roymiloh](https://github.com/roymiloh))
- Other
  - [#1798](https://github.com/wix/yoshi/pull/1798) Fix PR website publishing ([@NitayRabi](https://github.com/NitayRabi))
  - [#1797](https://github.com/wix/yoshi/pull/1797) Fix website publishing (Fix baseUrl) ([@NitayRabi](https://github.com/NitayRabi))

#### :house: Internal

- [#1791](https://github.com/wix/yoshi/pull/1791) Fix website publishing on master ([@NitayRabi](https://github.com/NitayRabi))

## 4.26.0 (2019-12-31)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-monorepo`
  - [#1764](https://github.com/wix/yoshi/pull/1764) Integrate Suricate (tunneling) ([@ranyitz](https://github.com/ranyitz))

# 4.25.3 (2019-12-30)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1794](https://github.com/wix/yoshi/pull/1794) Update `svelte-loader` test regex to match `svx` files ([@giladsegal](https://github.com/giladsegal))

#### :nail_care: Polish

- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-bm`, `yoshi-flow-editor`, `yoshi-flow-monorepo`
  - [#1796](https://github.com/wix/yoshi/pull/1796) Use one hot entry for the entire app instead of one per entry ([@ronami](https://github.com/ronami))

## 4.25.2 (2019-12-29)

#### :rocket: New Feature

- `yoshi-common`
  - [#1793](https://github.com/wix/yoshi/pull/1793) Add `mdsvex` svelte preprocessor ([@giladsegal](https://github.com/giladsegal))

#### :bug: Bug Fix

- `yoshi-flow-legacy`
  - [#1792](https://github.com/wix/yoshi/pull/1792) Remove check for verbose on `UncaughtError` ([@NitayRabi](https://github.com/NitayRabi))
- Other
  - [#1789](https://github.com/wix/yoshi/pull/1789) Fix travis website publishing ([@NitayRabi](https://github.com/NitayRabi))

#### :house: Internal

- [#1787](https://github.com/wix/yoshi/pull/1787) Publish website on PRs using `teamcity-surge-autorelease` ([@NitayRabi](https://github.com/NitayRabi))

## 4.25.1 (2019-12-26)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1786](https://github.com/wix/yoshi/pull/1786) Use more verbose names, don't add a redundant comma between script tags ([@ronami](https://github.com/ronami))

## 4.25.0 (2019-12-26)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1755](https://github.com/wix/yoshi/pull/1755) [create-yoshi-app] Upgrade `lint-staged` for templates to `9.5.0` ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :bug: Bug Fix

- `yoshi-common`
  - [#1784](https://github.com/wix/yoshi/pull/1784) Change when a chunk is inlined to be based on its name (.inline) ([@ronami](https://github.com/ronami))

## 4.24.0 (2019-12-25)

#### :rocket: New Feature

- `yoshi-common`
  - [#1765](https://github.com/wix/yoshi/pull/1765) HtmlWebpackPlugin: Inline CSS chunks / don't inject chunks ([@ronami](https://github.com/ronami))
- `jest-yoshi-preset`
  - [#1775](https://github.com/wix/yoshi/pull/1775) Move global setup/teardown to e2e test environment ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#1782](https://github.com/wix/yoshi/pull/1782) Support split chunks config in monorepos ([@ronami](https://github.com/ronami))
- `yoshi-common`
  - [#1774](https://github.com/wix/yoshi/pull/1774) Ignore browser mainField when target `node` ([@tompere](https://github.com/tompere))

## 4.23.7 (2019-12-18)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-style-dependencies`
  - [#1769](https://github.com/wix/yoshi/pull/1769) Revert `css-loader` upgrade ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#1763](https://github.com/wix/yoshi/pull/1763) Throw when publish fails ([@ranyitz](https://github.com/ranyitz))
- [#1756](https://github.com/wix/yoshi/pull/1756) Decrease amount of audit warnings during installation ([@sidoruk-sv](https://github.com/sidoruk-sv))

## 4.23.6 (2019-12-16)

#### :bug: Bug Fix

- `yoshi-helpers`
  - [#1762](https://github.com/wix/yoshi/pull/1762) Fix thunderbolt/elements hacky transpilation ([@ronami](https://github.com/ronami))
- `yoshi-flow-monorepo`
  - [#1761](https://github.com/wix/yoshi/pull/1761) Build site-assets modules with content hashes in production ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `yoshi-helpers`
  - [#1758](https://github.com/wix/yoshi/pull/1758) Editor Elements fix - transpile `node-modules` only for TB App ([@NitayRabi](https://github.com/NitayRabi))
- `yoshi-flow-monorepo`
  - [#1759](https://github.com/wix/yoshi/pull/1759) Disable chunks on server bundle on `thunderbolt-elements` only ([@roymiloh](https://github.com/roymiloh))

## 4.23.4 (2019-12-15)

#### :house: Internal

- `yoshi-common`, `yoshi-style-dependencies`
  - [#1750](https://github.com/wix/yoshi/pull/1750) updating css-loader ([@deanshub](https://github.com/deanshub))
- Other
  - [#1757](https://github.com/wix/yoshi/pull/1757) fixing yarn install issue (website) ([@deanshub](https://github.com/deanshub))

## 4.23.3 (2019-12-11)

#### :bug: Bug Fix

- `yoshi-config`, `yoshi-flow-monorepo`, `yoshi`
  - [#1753](https://github.com/wix/yoshi/pull/1753) Distinguish between apps and libs by `projectType` config option ([@roymiloh](https://github.com/roymiloh))

## 4.23.2 (2019-12-10)

#### :bug: Bug Fix

- `jest-yoshi-preset`, `yoshi-common`, `yoshi-flow-legacy`, `yoshi-helpers`
  - [#1751](https://github.com/wix/yoshi/pull/1751) Construct CDN URL according to the package's `experimentalBuildHtml` ([@ronami](https://github.com/ronami))

#### :house: Internal

- `create-yoshi-app`, `jest-yoshi-preset`, `yoshi-common`, `yoshi-flow-legacy`, `yoshi-helpers`, `yoshi`
  - [#1733](https://github.com/wix/yoshi/pull/1733) Change npm to Yarn ([@ranyitz](https://github.com/ranyitz))

## 4.23.1 (2019-12-08)

#### :nail_care: Polish

- `yoshi-common`, `yoshi-config`, `yoshi-flow-monorepo`
  - [#1747](https://github.com/wix/yoshi/pull/1747) Add `asset-relocate-loader` for node bundles ([@ronami](https://github.com/ronami))

## 4.23.0 (2019-12-08)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-flow-legacy`
  - [#1711](https://github.com/wix/yoshi/pull/1711) Update Yoshi to Node 12 ([@amitdahan](https://github.com/amitdahan))

## 4.22.3 (2019-12-04)

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#1743](https://github.com/wix/yoshi/pull/1743) Override output settings for site assets modules correctly ([@ronami](https://github.com/ronami))

## 4.22.2 (2019-12-04)

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#1740](https://github.com/wix/yoshi/pull/1740) Open url according to pkg config instead of root config ([@ronami](https://github.com/ronami))
- `yoshi-flow-legacy`
  - [#1739](https://github.com/wix/yoshi/pull/1739) Make `yoshi start` on legacy flow emit build to disk ([@amitdahan](https://github.com/amitdahan))

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#1741](https://github.com/wix/yoshi/pull/1741) Adjust custom site assets config to use correct naming conventions ([@ronami](https://github.com/ronami))

## 4.22.1 (2019-11-27)

#### :house: Internal

- `yoshi`
  - [#1730](https://github.com/wix/yoshi/pull/1730) Stop telemetry until we have our own custom server ([@ronami](https://github.com/ronami))

## 4.22.0 (2019-11-27)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-helpers`
  - [#1725](https://github.com/wix/yoshi/pull/1725) Assume only one `pom.xml` exists on monorepo root ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#1726](https://github.com/wix/yoshi/pull/1726) Use correct versions for packages inside the Yoshi monorepo ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `yoshi-flow-monorepo`
  - [#1724](https://github.com/wix/yoshi/pull/1724) Support working on webworker bundle locally in monorepo flow ([@ronami](https://github.com/ronami))

#### :house: Internal

- `create-yoshi-app`, `yoshi-flow-bm-runtime`, `yoshi-flow-bm`
  - [#1701](https://github.com/wix/yoshi/pull/1701) Add `yoshi-flow-bm` and make the template pass while using it ([@amitdahan](https://github.com/amitdahan))
- `yoshi-common`, `yoshi-flow-monorepo`
  - [#1723](https://github.com/wix/yoshi/pull/1723) Build site assets modules with specific webpack config ([@ronami](https://github.com/ronami))
- `yoshi-common`, `yoshi`
  - [#1727](https://github.com/wix/yoshi/pull/1727) Resolving telemetry dependency ([@deanshub](https://github.com/deanshub))
- `yoshi-common`
  - [#1728](https://github.com/wix/yoshi/pull/1728) Don't collect telemetry on Yoshi's E2E tests ([@ronami](https://github.com/ronami))

## 4.21.11 (2019-11-26)

#### :house: Internal

- `yoshi-common`, `yoshi`
  - [#1722](https://github.com/wix/yoshi/pull/1722) Add telemetry ([@ronami](https://github.com/ronami))

## 4.21.10 (2019-11-26)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`, `yoshi-helpers`
  - [#1720](https://github.com/wix/yoshi/pull/1720) Resolve bootstrap env vars according to cwd for monorepo support ([@roymiloh](https://github.com/roymiloh))

#### :nail_care: Polish

- `yoshi-flow-legacy`
  - [#1721](https://github.com/wix/yoshi/pull/1721) fix eslint not running on .tsx files ([@eranshabi](https://github.com/eranshabi))

#### :house: Internal

- `yoshi-flow-editor`
  - [#1718](https://github.com/wix/yoshi/pull/1718) Use transpiled JavaScript in the yoshi-flow-editor's templates (instead of jsx) ([@deanshub](https://github.com/deanshub))

## 4.21.9 (2019-11-24)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-legacy`, `yoshi`
  - [#1717](https://github.com/wix/yoshi/pull/1717) Upgrade stylable to `1.3.1` ([fixes jest cache invalidation for `.st.css` files](https://github.com/wix/stylable/pull/887)) ([@AviVahl](https://github.com/AviVahl))

## 4.21.8 (2019-11-24)

#### :house: Internal

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#1714](https://github.com/wix/yoshi/pull/1714) Build changes to support custom `editor-elements` build ([@ronami](https://github.com/ronami))
- `yoshi-helpers`
  - [#1715](https://github.com/wix/yoshi/pull/1715) [Temporary hack] Always transpile `editor-elements` through `ts-loader` ([@ronami](https://github.com/ronami))
- `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-editor`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`, `yoshi-helpers`, `yoshi-server-tools`
  - [#1705](https://github.com/wix/yoshi/pull/1705) Bump some-what major dev dependencies and refactor `yoshi-config` ([@ronami](https://github.com/ronami))
- Other
  - [#1702](https://github.com/wix/yoshi/pull/1702) Show package name when publish fails because of it ([@ranyitz](https://github.com/ranyitz))

## 4.21.7 (2019-11-20)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1699](https://github.com/wix/yoshi/pull/1699) Wait for server process to listen to a port before opening the browser ([@ronami](https://github.com/ronami))

## 4.21.6 (2019-11-20)

#### :house: Internal

- `create-yoshi-app`, `yoshi-flow-editor-runtime`, `yoshi-flow-editor`, `yoshi-helpers`
  - [#1612](https://github.com/wix/yoshi/pull/1612) Yoshi flow editor ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#1613](https://github.com/wix/yoshi/pull/1613) Yoshi BM Flow ([@amitdahan](https://github.com/amitdahan))

## 4.21.5 (2019-11-20)

#### :nail_care: Polish

- `yoshi-common`, `yoshi-server`
  - [#1700](https://github.com/wix/yoshi/pull/1700) Change manifest and ejs templates naming conventions ([@roymiloh](https://github.com/roymiloh))

#### :memo: Documentation

- [#1698](https://github.com/wix/yoshi/pull/1698) Remove `externalUnprocessedModules` option from docs ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- [#1697](https://github.com/wix/yoshi/pull/1697) Add test scripts for the new templates to come ([@amitdahan](https://github.com/amitdahan))

## 4.21.4 (2019-11-19)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1688](https://github.com/wix/yoshi/pull/1688) Update Server template with Node Platform types ([@alexandervain](https://github.com/alexandervain))

#### :house: Internal

- `yoshi-flow-monorepo`
  - [#1671](https://github.com/wix/yoshi/pull/1671) Improve publish script ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#1685](https://github.com/wix/yoshi/pull/1685) Correctly link Yoshi's CLIs ([@amitdahan](https://github.com/amitdahan))

## 4.21.3 (2019-11-18)

#### :house: Internal

- `yoshi-common`
  - [#1693](https://github.com/wix/yoshi/pull/1693) Work-around for `thunderbolt-elements` ([@hadarge](https://github.com/hadarge))

## 4.21.2 (2019-11-18)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1691](https://github.com/wix/yoshi/pull/1691) Support transpiling TypeScript files with Carmi loader ([@yotambarzilay](https://github.com/yotambarzilay))

## 4.21.1 (2019-11-18)

#### :bug: Bug Fix

- `yoshi-flow-monorepo`
  - [#1512](https://github.com/wix/yoshi/pull/1512) Don't publish from monorepo release command ([@netanelgilad](https://github.com/netanelgilad))

## 4.21.0 (2019-11-17)

#### :rocket: New Feature

- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-monorepo`
  - [#1681](https://github.com/wix/yoshi/pull/1681) Create a `manifest.json` for local development ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `yoshi-flow-app`, `yoshi-flow-monorepo`
  - [#1683](https://github.com/wix/yoshi/pull/1683) Pass through `experimentalBuildHtml` flag ([@roymiloh](https://github.com/roymiloh))

## 4.20.10 (2019-11-17)

#### :bug: Bug Fix

- `yoshi-flow-app`
  - [#1680](https://github.com/wix/yoshi/pull/1680) Pass missing configurations to webpack config ([@ronami](https://github.com/ronami))

## 4.20.9 (2019-11-15)

#### :bug: Bug Fix

- `yoshi-flow-app`, `yoshi-flow-monorepo`
  - [#1676](https://github.com/wix/yoshi/pull/1676) Pass `tpaStyle` and `enhancedTpaStyle` config options to the webpack config ([@ranyitz](https://github.com/ranyitz))

## 4.20.8 (2019-11-15)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1679](https://github.com/wix/yoshi/pull/1679) Transpile TypeScript according to `--production` ([@ronami](https://github.com/ronami))

## 4.20.7 (2019-11-15)

#### :bug: Bug Fix

- `yoshi-common`
  - [#1677](https://github.com/wix/yoshi/pull/1677) Transpile TypeScript to latest browsers only on local development ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#1674](https://github.com/wix/yoshi/pull/1674) Server templates: fix `index-dev.js` ([@hugebdu](https://github.com/hugebdu))

## 4.20.6 (2019-11-14)

#### :bug: Bug Fix

- `yoshi-flow-app`, `yoshi-flow-monorepo`
  - [#1670](https://github.com/wix/yoshi/pull/1670) Don't crash if `--verbose` is passed to app/monorepo ([@ronami](https://github.com/ronami))

## 4.20.5 (2019-11-13)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#1669](https://github.com/wix/yoshi/pull/1669) Write manifest file to correct app directory in monorepos ([@ronami](https://github.com/ronami))
- `yoshi-common`, `yoshi-flow-app`, `yoshi-flow-monorepo`, `yoshi-server-tools`
  - [#1668](https://github.com/wix/yoshi/pull/1668) Move types to `devDependencies` ([@ranyitz](https://github.com/ranyitz))

## 4.20.4 (2019-11-13)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-monorepo`
  - [#1666](https://github.com/wix/yoshi/pull/1666) Whitelist external monorepo packages in node bundle ([@ronami](https://github.com/ronami))
- `yoshi-flow-app`, `yoshi-flow-monorepo`
  - [#1667](https://github.com/wix/yoshi/pull/1667) Fix `cssModules` config not having any effect ([@ronami](https://github.com/ronami))
- `yoshi-flow-monorepo`

  - [#1665](https://github.com/wix/yoshi/pull/1665) Take Dev Server/HMR configuration values per app over rootConfig ([@ronami](https://github.com/ronami))

## 4.20.3 (2019-11-13)

#### :bug: Bug Fix

- `yoshi-common`, `yoshi-flow-legacy`, `yoshi`
  - [#1664](https://github.com/wix/yoshi/pull/1664) Use latest `stylable@1` ([@AviVahl](https://github.com/AviVahl))

## 4.20.2 (2019-11-13)

#### :bug: Bug Fix

- `yoshi`
  - [#1663](https://github.com/wix/yoshi/pull/1663) Correct the path of yoshi's `jest.config.js` in `wallaby-jest` file ([@ranyitz](https://github.com/ranyitz))

## 4.20.1 (2019-11-13)

#### :bug: Bug Fix

- `yoshi`
  - Add support for monorepo flow

## 4.20.0 (2019-11-13)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1544](https://github.com/wix/yoshi/pull/1544) Update i18n for OOI templates ([@bodia-uz](https://github.com/bodia-uz))

#### :house: Internal

- `create-yoshi-app`, `jest-yoshi-preset`, `yoshi-common`, `yoshi-config`, `yoshi-flow-app`, `yoshi-flow-legacy`, `yoshi-flow-monorepo`, `yoshi-helpers`, `yoshi-server-tools`, `yoshi-server`, `yoshi`
  - [#1647](https://github.com/wix/yoshi/pull/1647) Prepare code-base for multiple flows and migrate most of it to TypeScript ([@ronami](https://github.com/ronami))

## 4.19.0 (2019-12-06)

#### :rocket: New Feature

- `yoshi`
  - [#1657](https://github.com/wix/yoshi/pull/1657) Support browser env var ([@roymiloh](https://github.com/roymiloh))
  - [#1650](https://github.com/wix/yoshi/pull/1650) Support importing web-workers ([@roymiloh](https://github.com/roymiloh))

#### :house: Internal

- `yoshi-server-react`, `yoshi`
  - [#1654](https://github.com/wix/yoshi/pull/1654) Prettier version update ([@deanshub](https://github.com/deanshub))

## 4.18.0 (2019-11-06)

#### :rocket: New Feature

- `yoshi`
  - [#1626](https://github.com/wix/yoshi/pull/1626) Fix `HtmlWebpackPlugin` to work inside monorepo ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1646](https://github.com/wix/yoshi/pull/1646) Update `wix-private.mock.js` ([@ranyitz](https://github.com/ranyitz))
- `jest-yoshi-preset`
  - [#1641](https://github.com/wix/yoshi/pull/1641) Page close error level ([@rokasmik](https://github.com/rokasmik))

#### :house: Internal

- `create-yoshi-app`
  - [#1631](https://github.com/wix/yoshi/pull/1631) Improve symlinking strategy ([@ranyitz](https://github.com/ranyitz))
  - [#1625](https://github.com/wix/yoshi/pull/1625) Remove TS workaround for `@types/prompts` ([@amitdahan](https://github.com/amitdahan))

## 4.17.3 (2019-10-23)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1620](https://github.com/wix/yoshi/pull/1620) Fix removal of CYA's shebang ([@amitdahan](https://github.com/amitdahan))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1614](https://github.com/wix/yoshi/pull/1614) Fail template generation if node version does not match ours ([@amitdahan](https://github.com/amitdahan))

## 4.17.2 (2019-10-22)

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1617](https://github.com/wix/yoshi/pull/1617) Fix TS importing project's own `package.json` and causing it to be copied ([@amitdahan](https://github.com/amitdahan))
  - [#1616](https://github.com/wix/yoshi/pull/1616) TypeScript tweaks ([@amitdahan](https://github.com/amitdahan))
  - [#1504](https://github.com/wix/yoshi/pull/1504) Server templates: use `wix-test-env` for environment setup ([@hugebdu](https://github.com/hugebdu))

#### :house: Internal

- `create-yoshi-app`
  - [#1598](https://github.com/wix/yoshi/pull/1598) Migrate `create-yoshi-app` to TypeScript ([@amitdahan](https://github.com/amitdahan))

## 4.17.1 (2019-10-16)

#### :bug: Bug Fix

- `yoshi`
  - [#1610](https://github.com/wix/yoshi/pull/1610) Copy public folder to correct location for monorepos ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `yoshi`
  - [#1609](https://github.com/wix/yoshi/pull/1609) Set Svelte's `hydratable` to `true` by default ([@ronami](https://github.com/ronami))

## 4.17.0 (2019-10-16)

#### :rocket: New Feature

- `yoshi`
  - [#1597](https://github.com/wix/yoshi/pull/1597) Show a warning if no server entry point was found ([@amitdahan](https://github.com/amitdahan))
  - [#1591](https://github.com/wix/yoshi/pull/1591) Add support for Svelte as a Webpack loader ([@ronami](https://github.com/ronami))
  - [#1590](https://github.com/wix/yoshi/pull/1590) Add support for Carmi as a Webpack loader ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1583](https://github.com/wix/yoshi/pull/1583) Fix BM template by emitting TS src files again ([@amitdahan](https://github.com/amitdahan))

#### :nail_care: Polish

- `jest-yoshi-preset`
  - [#1607](https://github.com/wix/yoshi/pull/1607) Increase E2E test timeout and Puppeteer navigation timeout ([@ronami](https://github.com/ronami))
- `yoshi-config`, `yoshi`
  - [#1606](https://github.com/wix/yoshi/pull/1606) Don't handle local dependencies on the same monorepo as external for server bundle ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#1595](https://github.com/wix/yoshi/pull/1595) Migrate OOI templates to `@testing-library/react` ([@amitdahan](https://github.com/amitdahan))
  - [#1593](https://github.com/wix/yoshi/pull/1593) Migrate BM templates to App Flow ([@amitdahan](https://github.com/amitdahan))
  - [#1596](https://github.com/wix/yoshi/pull/1596) Update templates to 9.3 `@testing-library/react` ([@amitdahan](https://github.com/amitdahan))
  - [#1594](https://github.com/wix/yoshi/pull/1594) BM Template migration to `@testing-library/react` ([@amitdahan](https://github.com/amitdahan))
  - [#1585](https://github.com/wix/yoshi/pull/1585) Add EditorConfig extension as recommended for VSCode ([@simast](https://github.com/simast))
- `yoshi`
  - [#1603](https://github.com/wix/yoshi/pull/1603) Support starting multiple apps with different dev-server/hmr settings ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- [#1492](https://github.com/wix/yoshi/pull/1492) Fix migration guide version 4 for Yarn workspaces ([@zemlanin](https://github.com/zemlanin))

#### :house: Internal

- `create-yoshi-app`
  - [#1604](https://github.com/wix/yoshi/pull/1604) Always run template E2E tests with verbose output ([@ronami](https://github.com/ronami))
  - [#1601](https://github.com/wix/yoshi/pull/1601) Bump template E2E test timeout from 10 minutes to 20 minutes ([@ronami](https://github.com/ronami))

## 4.16.4 (2019-10-02)

#### :bug: Bug Fix

- `yoshi`
  - [#1561](https://github.com/wix/yoshi/pull/1561) Show an explicit error on missing server entry ([@deanshub](https://github.com/deanshub))
- `jest-yoshi-preset`, `yoshi`
  - [#1573](https://github.com/wix/yoshi/pull/1573) Support transforming static assets in `jest-yoshi-preset` ([@amitdahan](https://github.com/amitdahan))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1558](https://github.com/wix/yoshi/pull/1558) Stricter `tsconfig.json` in Business Manager template ([@amitdahan](https://github.com/amitdahan))
  - [#1570](https://github.com/wix/yoshi/pull/1570) Stricter `tsconfig.json` in fullstack template ([@amitdahan](https://github.com/amitdahan))

## 4.16.3 (2019-09-23)

#### :nail_care: Polish

- `yoshi`
  - [#1572](https://github.com/wix/yoshi/pull/1572) Run type-check based on app's tsconfig rather than the root tsconfig ([@ronami](https://github.com/ronami))

## 4.16.2 (2019-09-22)

#### :bug: Bug Fix

- `yoshi`
  - [#1567](https://github.com/wix/yoshi/pull/1567) Fix a bug with passing incorrect arguments to Lerna's APIs ([@ronami](https://github.com/ronami))
  - [#1549](https://github.com/wix/yoshi/pull/1549) Add hash to assets name ([@deanshub](https://github.com/deanshub))

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1556](https://github.com/wix/yoshi/pull/1556) Update BizMgr template react versions ([@amitdahan](https://github.com/amitdahan))
- `create-yoshi-app`, `jest-yoshi-preset`
  - [#1554](https://github.com/wix/yoshi/pull/1554) Client stricter config ([@amitdahan](https://github.com/amitdahan))
- `jest-yoshi-preset`, `yoshi-config`, `yoshi-helpers`, `yoshi-server-tools`, `yoshi-server`, `yoshi`
  - [#1555](https://github.com/wix/yoshi/pull/1555) Top commands ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#1562](https://github.com/wix/yoshi/pull/1562) Update SVG usage ([@nktssh](https://github.com/nktssh))

#### :nail_care: Polish

- `yoshi`
  - [#1566](https://github.com/wix/yoshi/pull/1566) Adjustments to monorepo setup ([@ronami](https://github.com/ronami))
- `yoshi-server-client`, `yoshi-server-react`
  - [#1559](https://github.com/wix/yoshi/pull/1559) Transpile `yoshi-server-client` and `yoshi-server-react` to run on all browsers (ES5) ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#1552](https://github.com/wix/yoshi/pull/1552) Update TypeScript version in templates to `~3.6.0` ([@amitdahan](https://github.com/amitdahan))

#### :house: Internal

- [#1557](https://github.com/wix/yoshi/pull/1557) Exit on setup when setup is failing during kitchensink tests ([@ranyitz](https://github.com/ranyitz))
- [#1550](https://github.com/wix/yoshi/pull/1550) Ignore lerna backup files ([@deanshub](https://github.com/deanshub))
- [#1542](https://github.com/wix/yoshi/pull/1542) Unskip TypeScript HMR tests and skip web worker (specifically) flaky tests ([@ranyitz](https://github.com/ranyitz))

## 4.15.2 (2019-09-12)

#### :bug: Bug Fix

- `jest-yoshi-preset`, `yoshi`
  - [#1541](https://github.com/wix/yoshi/pull/1541) Transform `.api` files only for those who opt-in ([@ronami](https://github.com/ronami))

## 4.15.1 (2019-09-11)

#### :bug: Bug Fix

- `yoshi`
  - [#1539](https://github.com/wix/yoshi/pull/1539) Inject HMR entries to the correct Webpack configuration ([@ronami](https://github.com/ronami))

#### :house: Internal

- [#1532](https://github.com/wix/yoshi/pull/1532) Temporarily skip flaky HMR tests ([@ronami](https://github.com/ronami))
- [#1531](https://github.com/wix/yoshi/pull/1531) separate kitchensink app-flow and yoshi-server tests ([@ranyitz](https://github.com/ranyitz))

## 4.15.0 (2019-09-11)

#### :rocket: New Feature

- `create-yoshi-app`, `jest-yoshi-preset`, `yoshi-config`, `yoshi-server-client`, `yoshi-server-react`, `yoshi-server-testing`, `yoshi-server-tools`, `yoshi-server`, `yoshi`
  - [#1476](https://github.com/wix/yoshi/pull/1476) Yoshi server ([@ronami](https://github.com/ronami))

#### :house: Internal

- [#1530](https://github.com/wix/yoshi/pull/1530) Remove travis configuration for Yoshi tests ([@ranyitz](https://github.com/ranyitz))

## 4.14.0 (2019-09-11)

#### :rocket: New Feature

- `yoshi`
  - [#1529](https://github.com/wix/yoshi/pull/1529) `jest.config.js` - Allow overriding transformers from local config ([@NitayRabi](https://github.com/NitayRabi))
- `create-yoshi-app`
  - [#1486](https://github.com/wix/yoshi/pull/1486) Update `business-manager-module` template with `notifyViewStartLoading` ([@ronenst](https://github.com/ronenst))
- `babel-preset-yoshi`
  - [#1519](https://github.com/wix/yoshi/pull/1519) Keep dynamic `import()` if `modules: false` (e.g. ECMAScript build) ([@zemlanin](https://github.com/zemlanin))

#### :house: Internal

- `babel-preset-yoshi`
  - [#1527](https://github.com/wix/yoshi/pull/1527) Add comment regarding `babel-plugin-dynamic-import` to babel preset yoshi ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#1497](https://github.com/wix/yoshi/pull/1497) Fix tests with `chalk`ed snapshots in color terms ([@zemlanin](https://github.com/zemlanin))

## 4.13.0 (2019-09-08)

#### :rocket: New Feature

- `babel-preset-yoshi`
  - [#1519](https://github.com/wix/yoshi/pull/1519) Keep dynamic `import()` if `modules: false` (e.g. ECMAScript build) ([@zemlanin](https://github.com/zemlanin))

#### :house: Internal

- `create-yoshi-app`
  - [#1497](https://github.com/wix/yoshi/pull/1497) Fix tests with `chalk`ed snapshots in color terms ([@zemlanin](https://github.com/zemlanin))

## 4.12.1 (2019-09-04)

#### :rocket: New Feature

- `yoshi`
  - [#1514](https://github.com/wix/yoshi/pull/1514) Update `tpa-style-webpack-plugin` version to `1.3.11` ([@ronnyrin](https://github.com/ronnyrin))

## 4.12.0 (2019-08-29)

#### :rocket: New Feature

- `yoshi`
  - [#1515](https://github.com/wix/yoshi/pull/1515) Adds `deviantart.lan` to allowedhosts for hmr on that project ([@carl-e](https://github.com/carl-e))
- `jest-yoshi-preset`, `yoshi-config`
  - [#1506](https://github.com/wix/yoshi/pull/1506) Jest `testURL` config option override ([@jonohayon](https://github.com/jonohayon))

#### :nail_care: Polish

- `babel-preset-yoshi`
  - [#1513](https://github.com/wix/yoshi/pull/1513) Transpile development bundle to last chrome version ([@netanelgilad](https://github.com/netanelgilad))

#### :memo: Documentation

- `create-yoshi-app`
  - [#1505](https://github.com/wix/yoshi/pull/1505) Fix typo in `ooi` readme ([@ronnyrin](https://github.com/ronnyrin))

#### :house: Internal

- [#1516](https://github.com/wix/yoshi/pull/1516) Fix TypeScript version to `~3.5` ([@ronami](https://github.com/ronami))

## 4.11.2 (2019-08-20)

#### :rocket: New Feature

- `yoshi-helpers`, `yoshi`
  - [#1500](https://github.com/wix/yoshi/pull/1500) Support `eslint` for linting TypeScript files ([@eranshabi](https://github.com/eranshabi))

## 4.11.1 (2019-08-11)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1482](https://github.com/wix/yoshi/pull/1482) Better guesstimation of user's wix email ([@yavorsky](https://github.com/yavorsky))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1479](https://github.com/wix/yoshi/pull/1479) Optimize `eslint` and `babel` configs for `server` and `library` templates ([@yavorsky](https://github.com/yavorsky))

#### :house: Internal

- `create-yoshi-app`, `eslint-config-yoshi`, `tslint-config-yoshi`, `yoshi-helpers`
  - [#1484](https://github.com/wix/yoshi/pull/1484) Update unit test files pattern to `*.test.js` ([@yavorsky](https://github.com/yavorsky))
- `yoshi-config`
  - [#1481](https://github.com/wix/yoshi/pull/1481) Move `@jest/types` to be devDependency ([@yanivefraim](https://github.com/yanivefraim))
  - [#1478](https://github.com/wix/yoshi/pull/1478) Add types to jest config ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`
  - [#1480](https://github.com/wix/yoshi/pull/1480) Increase template tests timeout from 30s to 60s ([@ronami](https://github.com/ronami))

## 4.11.0 (2019-08-01)

#### :rocket: New Feature

- `jest-yoshi-preset`, `yoshi-config`
  - [#1467](https://github.com/wix/yoshi/pull/1467) Jest yoshi preset overrides ([@yanivefraim](https://github.com/yanivefraim))

#### :nail_care: Polish

- `jest-yoshi-preset`
  - [#1470](https://github.com/wix/yoshi/pull/1470) Added jest preset types pointer ([@amiryonatan](https://github.com/amiryonatan))

#### :house: Internal

- `bootstrap-hot-loader`
  - [#1447](https://github.com/wix/yoshi/pull/1447) Migrate `bootstrap-hot-loader` to TypeScript ([@ronami](https://github.com/ronami))
- `jest-environment-yoshi-bootstrap`, `jest-environment-yoshi-puppeteer`, `jest-yoshi-preset`, `yoshi`
  - [#1471](https://github.com/wix/yoshi/pull/1471) Combine Jest preset and related packages into 1 package ([@yanivefraim](https://github.com/yanivefraim))

## 4.10.5 (2019-07-29)

#### :rocket: New Feature

- `yoshi`
  - [#1458](https://github.com/wix/yoshi/pull/1458) Remove webpack lock from yoshi ([@matveyok](https://github.com/matveyok))

#### :bug: Bug Fix

- `yoshi-helpers`, `yoshi`
  - [#1475](https://github.com/wix/yoshi/pull/1475) Add user defined `process.env.APP_CONF_DIR` ([@yanivefraim](https://github.com/yanivefraim))

#### :house: Internal

- `yoshi`
  - [#1474](https://github.com/wix/yoshi/pull/1474) Bump 'wnpm-ci' to v8 ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-config`, `yoshi-helpers`
  - [#1463](https://github.com/wix/yoshi/pull/1463) Migrate `yoshi-helpers` to TypeScript ([@ronami](https://github.com/ronami))

## 4.10.4 (2019-07-21)

#### :rocket: New Feature

- `yoshi`
  - [#1235](https://github.com/wix/yoshi/pull/1235) Add an option to add a custom protractor config ([@yanivefraim](https://github.com/yanivefraim))

#### :memo: Documentation

- `create-yoshi-app`
  - [#1460](https://github.com/wix/yoshi/pull/1460) Fix links to `out-of-iframe` docs on their templates readme ([@ranyitz](https://github.com/ranyitz))

## 4.10.3 (2019-07-16)

#### :bug: Bug Fix

- `jest-yoshi-preset`, `yoshi`
  - [#1457](https://github.com/wix/yoshi/pull/1457) When using jest, do not ignore the transformation of svg assets from `node_modules` ([@amiryonatan](https://github.com/amiryonatan))

## 4.10.2 (2019-07-16)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1452](https://github.com/wix/yoshi/pull/1452) Update react version in the templates to `16.8.6` ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1459](https://github.com/wix/yoshi/pull/1459) `out-of-iframe` `typescript` template: Fix button color dynamic change in settings panel ([@eran-gottlieb](https://github.com/eran-gottlieb))
- `yoshi`
  - [#1449](https://github.com/wix/yoshi/pull/1449) Fix `wallaby.ts` file to not include types ([@ronami](https://github.com/ronami))
  - [#1433](https://github.com/wix/yoshi/pull/1433) Print full path of dependencies with different major version ([@agankarin](https://github.com/agankarin))

#### :memo: Documentation

- `babel-preset-yoshi`, `bootstrap-hot-loader`, `create-yoshi-app`, `jest-environment-yoshi-bootstrap`, `jest-environment-yoshi-puppeteer`, `yoshi-template-intro`, `yoshi`
  - [#1446](https://github.com/wix/yoshi/pull/1446) Fix typos throughout the project ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :house: Internal

- [#1441](https://github.com/wix/yoshi/pull/1441) Adjust travis config to recent split in test commands ([@ronami](https://github.com/ronami))

## 4.10.1 (2019-07-03)

#### :bug: Bug Fix

- `yoshi`

  - [#1439](https://github.com/wix/yoshi/pull/1439) Fix Wallaby Mocha config ([@netanelgilad](https://github.com/netanelgilad))
  - [#1437](https://github.com/wix/yoshi/pull/1437) Adjust Wallaby to version 4 changes ([@ronami](https://github.com/ronami))
  - [#1436](https://github.com/wix/yoshi/pull/1436) Fix server not getting `process.env.NODE_ENV` and others ([@ronami](https://github.com/ronami))
  - [#1431](https://github.com/wix/yoshi/pull/1431) Support `--https` CLI option in `yoshi start` command ([@agankarin](https://github.com/agankarin))

- `yoshi-config`
  - [#1434](https://github.com/wix/yoshi/pull/1434) Fix yoshi-config validation/schema ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1428](https://github.com/wix/yoshi/pull/1428) Remove "yoshi-helpers" dependency to improve performance ([@drorl-wix](https://github.com/drorl-wix))

#### :memo: Documentation

- [#1425](https://github.com/wix/yoshi/pull/1425) Add version-3 migration to the website ([@gilmeir](https://github.com/gilmeir))
- [#1435](https://github.com/wix/yoshi/pull/1435) Fix wrong path for Webpack's stats file ([@shilomagen](https://github.com/shilomagen))
- [#1430](https://github.com/wix/yoshi/pull/1430) Update docs about project types (add OOI app) ([@drorl-wix](https://github.com/drorl-wix))

#### :house: Internal

- [#1438](https://github.com/wix/yoshi/pull/1438) Build packages in travis before running scripts ([@ronami](https://github.com/ronami))

## 4.10.0 (2019-07-01)

#### :rocket: New Feature

- `create-yoshi-app`, `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#1377](https://github.com/wix/yoshi/pull/1377) Support `web-worker` bundle in Yoshi ([@ranyitz](https://github.com/ranyitz))
  * [#1395](https://github.com/wix/yoshi/pull/1395) Rtl css ([@liatash](https://github.com/liatash))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1419](https://github.com/wix/yoshi/pull/1419) Update `verifyRegistry` to check if wix's private registry is reachable (#1403) ([@drorl-wix](https://github.com/drorl-wix))
- `yoshi`
  - [#1421](https://github.com/wix/yoshi/pull/1421) Add Wallaby support with "**tests**" folder ([@drorl-wix](https://github.com/drorl-wix))

#### :house: Internal

- `bootstrap-hot-loader`, `create-yoshi-app`, `jest-yoshi-preset`, `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#1401](https://github.com/wix/yoshi/pull/1401) [RFC] Migrate to TypeScript ([@ronami](https://github.com/ronami))
- Other
  - [#1422](https://github.com/wix/yoshi/pull/1422) Make `lint-staged` fail on warnings ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#1423](https://github.com/wix/yoshi/pull/1423) Install published version on templates tests rather than `latest` ([@ronami](https://github.com/ronami))

## 4.9.6 (2019-06-30)

#### :bug: Bug Fix

- `yoshi`
  - [#1417](https://github.com/wix/yoshi/pull/1417) Lock `terser-webpack-plugin` ([@ronami](https://github.com/ronami))

## 4.9.5 (2019-06-30)

#### :bug: Bug Fix

- `yoshi`
  - [#1416](https://github.com/wix/yoshi/pull/1416) Bump `tpa-style-webpack-plugin` ([@ronami](https://github.com/ronami))
- `eslint-config-yoshi`, `yoshi-config`, `yoshi`
  - [#1414](https://github.com/wix/yoshi/pull/1414) Lock terser to v4.0.0 to fix a bug in v4.0.1 ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- [#1406](https://github.com/wix/yoshi/pull/1406) Fix out-dated Stylelint docs ([@ronami](https://github.com/ronami))

#### :house: Internal

- `yoshi-helpers`, `yoshi`
  - [#1405](https://github.com/wix/yoshi/pull/1405) Remove unused/dead code ([@ronami](https://github.com/ronami))

## 4.9.4 (2019-06-27)

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1370](https://github.com/wix/yoshi/pull/1370) Bump node to v10 for library generator and kitchensink tests ([@yanivefraim](https://github.com/yanivefraim))
  - [#1398](https://github.com/wix/yoshi/pull/1398) Dependencies: replace `react-testing-library` with `@testing-library/react` ([@sidoruk-sv](https://github.com/sidoruk-sv))
- `yoshi`
  - [#1399](https://github.com/wix/yoshi/pull/1399) Run `wnpm-ci` `prepareForRelase()` only in master CI ([@ronami](https://github.com/ronami))

#### :house: Internal

- Other
  - [#1400](https://github.com/wix/yoshi/pull/1400) Bump Lerna to v3 ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#1402](https://github.com/wix/yoshi/pull/1402) Skip a flaky test which fails very often ([@ronami](https://github.com/ronami))
- `create-yoshi-app`, `yoshi`
  - [#1396](https://github.com/wix/yoshi/pull/1396) Remove Sentry from the code base ([@ronami](https://github.com/ronami))

## 4.9.3 (2019-06-23)

#### :bug: Bug Fix

- `yoshi`
  - [#1391](https://github.com/wix/yoshi/pull/1391) Publish monorepo libs only in master CI ([@yairhaimo](https://github.com/yairhaimo))

#### :nail_care: Polish

- `yoshi`
  - [#1390](https://github.com/wix/yoshi/pull/1390) Detect an available port for server HMR ([@ronami](https://github.com/ronami))
  - [#1384](https://github.com/wix/yoshi/pull/1384) Remove the dependency on `@stylable/cli` ([@ranyitz](https://github.com/ranyitz))

## 4.9.2 (2019-06-17)

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1381](https://github.com/wix/yoshi/pull/1381)
    Server TypeScript template - bump target to `es6` ([@hugebdu](https://github.com/hugebdu))
  - [#1378](https://github.com/wix/yoshi/pull/1378)
    Update `ooi` development site ([@ranyitz](https://github.com/ranyitz))

## 4.9.1 (2019-06-11)

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1374](https://github.com/wix/yoshi/pull/1374) Improve the `ooi` templates readme ([@ranyitz](https://github.com/ranyitz))

## 4.9.0 (2019-06-10)

#### :rocket: New Feature

- `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#1369](https://github.com/wix/yoshi/pull/1369) Run minimal number of tests on PR CI ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `yoshi`
  - [#1373](https://github.com/wix/yoshi/pull/1373) Adjust to deprecated autoprefixer API ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1367](https://github.com/wix/yoshi/pull/1367) Custom entry point for server project templates ([@hugebdu](https://github.com/hugebdu))

## 4.8.2 (2019-06-10)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1371](https://github.com/wix/yoshi/pull/1371) Fix a bug with `ooi` viewer app css path ([@ranyitz](https://github.com/ranyitz))

## 4.8.1 (2019-06-10)

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1350](https://github.com/wix/yoshi/pull/1350) refactor of the out-of-iframe template readme (app -> widget) ([@ranyitz](https://github.com/ranyitz))

## 4.8.0 (2019-06-05)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1362](https://github.com/wix/yoshi/pull/1362) Open both `editor` and `viewer` + move to `js` config ([@ranyitz](https://github.com/ranyitz))
  - [#1357](https://github.com/wix/yoshi/pull/1357) Add settings panel `e2e` test in `ooi` templates ([@ranyitz](https://github.com/ranyitz))
- `yoshi`
  - [#1353](https://github.com/wix/yoshi/pull/1353) Allow hmr over production site (`.wixsite.com`) ([@deanshub](https://github.com/deanshub))
- `yoshi-config`, `yoshi`
  - [#1351](https://github.com/wix/yoshi/pull/1351) Support `startUrl` option and accept multiple urls for `--url` flag ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1356](https://github.com/wix/yoshi/pull/1356) Remove `organization` option ([@AndriiTsarenko](https://github.com/AndriiTsarenko))
  - [#1358](https://github.com/wix/yoshi/pull/1358) Improvements to the server template ([@hugebdu](https://github.com/hugebdu))

#### :memo: Documentation

- [#1361](https://github.com/wix/yoshi/pull/1361) Remove Hebrew talks links from Yoshi's site ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- `create-yoshi-app`
  - [#1363](https://github.com/wix/yoshi/pull/1363) Improve symlink modules by removing the existing modules before ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#1359](https://github.com/wix/yoshi/pull/1359) Move Yoshi test directory to be an inner directory ([@ranyitz](https://github.com/ranyitz))

## 4.7.3 (2019-06-03)

#### :nail_care: Polish

- `yoshi-config`
  - [#1349](https://github.com/wix/yoshi/pull/1349) Add `packages` directory to the base glob pattern ([@ronami](https://github.com/ronami))
- `jest-yoshi-preset`, `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#1348](https://github.com/wix/yoshi/pull/1348) Use multi glob patterns instead of a glob set ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#1346](https://github.com/wix/yoshi/pull/1346) Bump Axios to v0.19.0 ([@ronami](https://github.com/ronami))

## 4.7.2 (2019-05-29)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1342](https://github.com/wix/yoshi/pull/1342) `ooi` templates have a `"start:editor"` script in npm scripts ([@ranyitz](https://github.com/ranyitz))
  - [#1337](https://github.com/wix/yoshi/pull/1337) Work against production when running `npm start` ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi-config`
  - [#1340](https://github.com/wix/yoshi/pull/1340) Remove the unused configuration option - `universalProject` ([@ranyitz](https://github.com/ranyitz))

## 4.7.1 (2019-05-29)

#### :bug: Bug Fix

- `yoshi-helpers`, `yoshi`
  - [#1338](https://github.com/wix/yoshi/pull/1338) Fix `MANAGEMENT_PORT` default and introduce `GRPC_PORT` ([@alexandervain](https://github.com/alexandervain))
- `create-yoshi-app`
  - [#1336](https://github.com/wix/yoshi/pull/1336) Use wallaby jest setup instead of mocha in library template ([@yurynix](https://github.com/yurynix))

## 4.7.0 (2019-05-28)

#### :rocket: New Feature

- `jest-yoshi-preset`
  - [#1330](https://github.com/wix/yoshi/pull/1330) Add `@types/jest` dependency for better autocompletions in tests ([@litalwix](https://github.com/litalwix))

#### :nail_care: Polish

- `yoshi`
  - [#1331](https://github.com/wix/yoshi/pull/1331) Limit useless server HMR logs ([@ronami](https://github.com/ronami))

## 4.6.6 (2019-05-26)

#### :house: Internal

- `create-yoshi-app`
  - [#1327](https://github.com/wix/yoshi/pull/1327) Add support for multiple projects in `create-yoshi-app:dev` ([@ranyitz](https://github.com/ranyitz))

## 4.6.5 (2019-05-26)

#### :house: Internal

- `create-yoshi-app`
  - [#1326](https://github.com/wix/yoshi/pull/1326) Reuse `createApp` from `dev` script and move relevant parts to the `bin` directory ([@ranyitz](https://github.com/ranyitz))

## 4.6.4 (2019-05-26)

#### :bug: Bug Fix

- [#1320](https://github.com/wix/yoshi/pull/1320) Fix the migration guide of version 4 ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1322](https://github.com/wix/yoshi/pull/1322) Yoshi 4 migration `ooi` template ([@ranyitz](https://github.com/ranyitz))
  - [#1316](https://github.com/wix/yoshi/pull/1316) Refactor `src` file structure for `ooi` TypeScript template ([@ranyitz](https://github.com/ranyitz))

## 4.6.3 (2019-05-22)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1312](https://github.com/wix/yoshi/pull/1312) Generators: revert testkit `server`, back to using `app`. ([@yanivefraim](https://github.com/yanivefraim))
- `jest-environment-yoshi-bootstrap`, `jest-environment-yoshi-puppeteer`, `yoshi-config`
  - [#1307](https://github.com/wix/yoshi/pull/1307) Refresh jest's watch mode when updating jest-yoshi-config. ([@brumeregan](https://github.com/brumeregan))

#### :nail_care: Polish

- `create-yoshi-app`

  - [#1311](https://github.com/wix/yoshi/pull/1311) create-yoshi-app: minor cleanups towards the perfection. ([@hugebdu](https://github.com/hugebdu))
  - [#1286](https://github.com/wix/yoshi/pull/1286) Add wix-ui-tpa provider - for mobile mode. ([@jonathanadler](https://github.com/jonathanadler))

## 4.6.2 (2019-05-21)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1306](https://github.com/wix/yoshi/pull/1306) Change Bootstrap's testkit to use server, instead of app. ([@yanivefraim](https://github.com/yanivefraim))
  - [#1302](https://github.com/wix/yoshi/pull/1302) Upgrade react to 16.8. ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `create-yoshi-app`, `yoshi-template-intro`
  - [#1305](https://github.com/wix/yoshi/pull/1305) Update generators to use Webpack's dynamic import. ([@yanivefraim](https://github.com/yanivefraim))
- `jest-environment-yoshi-puppeteer`, `yoshi`
  - [#1053](https://github.com/wix/yoshi/pull/1053) Use sockjs instead of ipc for server HMR communication. ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#1303](https://github.com/wix/yoshi/pull/1303) Remove https for opening browser, `npm start` ([@brumeregan](https://github.com/brumeregan))

## 4.6.1 (2019-05-20)

#### :bug: Bug Fix

- `yoshi`
  - [#1301](https://github.com/wix/yoshi/pull/1301) Ignore monorepo hoisted dependencies in server bundle ([@ronami](https://github.com/ronami))

## 4.6.0 (2019-05-19)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1284](https://github.com/wix/yoshi/pull/1284) Update `fullstack` & `client` templates to use lazy-loaded `<Intro />` component. ([@yavorsky](https://github.com/yavorsky))

## 4.5.3 (2019-05-16)

#### :rocket: New Feature

- `yoshi-template-intro`
  - [#1258](https://github.com/wix/yoshi/pull/1258) Add `yoshi-template-intro` package to import it from all templates ([@yavorsky](https://github.com/yavorsky))

#### :bug: Bug Fix

- `yoshi-helpers`
  - [#1263](https://github.com/wix/yoshi/pull/1263) Fix `babel-preset-yoshi` resolve path ([@yavorsky](https://github.com/yavorsky))

## 4.5.2 (2019-05-16)

#### :bug: Bug Fix

- `yoshi`
  - [#1288](https://github.com/wix/yoshi/pull/1288) Don't remove `viewBox` from `svg` when being loaded as react component ([@ipanasenko](https://github.com/ipanasenko))

## 4.5.1 (2019-05-15)

#### :rocket: New Feature

- `yoshi`
  - [#1293](https://github.com/wix/yoshi/pull/1293) Verify typescript references before `build`/`start` ([@ronami](https://github.com/ronami))
  - [#1292](https://github.com/wix/yoshi/pull/1292) Add `InterpolateHtmlPlugin` for `experimentalBuildHtml` ([@yanivefraim](https://github.com/yanivefraim))

## 4.5.0 (2019-05-14)

#### :rocket: New Feature

- `yoshi-config`, `yoshi`
  - [#1285](https://github.com/wix/yoshi/pull/1285) Basic monorepo support ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `yoshi`
  - [#1279](https://github.com/wix/yoshi/pull/1279) Resolve symlinks to their symlinked locations in Webpack ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `yoshi-config`, `yoshi`
  - [#1291](https://github.com/wix/yoshi/pull/1291) Resolve symlinks only in monorepos ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#1282](https://github.com/wix/yoshi/pull/1282) Log full URL to CDN, including scheme and port ([@danielagreen](https://github.com/danielagreen))

#### :memo: Documentation

- [#1290](https://github.com/wix/yoshi/pull/1290) Fix migration guide to Yoshi V4 ([@yanivefraim](https://github.com/yanivefraim))

## 4.4.3 (2019-05-08)

#### :rocket: New Feature

- `tslint-config-yoshi-base`, `tslint-config-yoshi`, `yoshi`
  - [#1278](https://github.com/wix/yoshi/pull/1278) Add React Hooks `ts-lint` rule ([@aarnoldaas](https://github.com/aarnoldaas))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1281](https://github.com/wix/yoshi/pull/1281) Fix OOI template `e2e` tests ([@gileck](https://github.com/gileck))

## 4.4.2 (2019-05-08)

#### :rocket: New Feature

- `eslint-config-yoshi-base`, `eslint-config-yoshi`, `yoshi`
  - [#1274](https://github.com/wix/yoshi/pull/1274) Add React Hooks `eslint` rules ([@aarnoldaas](https://github.com/aarnoldaas))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#1237](https://github.com/wix/yoshi/pull/1237) Remove `@types/axios` from devDeps ([@ipanasenko](https://github.com/ipanasenko))
- `yoshi`
  - [#1280](https://github.com/wix/yoshi/pull/1280) Fix hash for assets ([@yanivefraim](https://github.com/yanivefraim))

## 4.4.1 (2019-05-07)

#### :bug: Bug Fix

- `yoshi`
  - [#1262](https://github.com/wix/yoshi/pull/1262) Add jest-cli as a direct yoshi dependency. ([@yavorsky](https://github.com/yavorsky))
- `create-yoshi-app`
  - [#1243](https://github.com/wix/yoshi/pull/1243) Fix issues with lint .js files in typescript environments ([@dmfilipenko](https://github.com/dmfilipenko))

#### :nail_care: Polish

- `yoshi`
  - [#1275](https://github.com/wix/yoshi/pull/1275) Rename ejs production file for html webpack plugin ([@yanivefraim](https://github.com/yanivefraim))

## 4.4.0 (2019-05-06)

#### :rocket: New Feature

- `yoshi-config`, `yoshi`
  - [#1206](https://github.com/wix/yoshi/pull/1206) Pipe output to `server.log` in App flow ([@ihork](https://github.com/ihork))

#### :bug: Bug Fix

- [#1271](https://github.com/wix/yoshi/pull/1271) Configure algolia to search according to the version specified ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi-config`
  - [#1251](https://github.com/wix/yoshi/pull/1251) Improve error logging in jest setup error handling ([@rokasmik](https://github.com/rokasmik))
- `yoshi-helpers`, `yoshi`
  - [#1270](https://github.com/wix/yoshi/pull/1270) Remove migrate to scoped packages task ([@aarnoldaas](https://github.com/aarnoldaas))
- `create-yoshi-app`
  - [#1267](https://github.com/wix/yoshi/pull/1267) Add `spec-setup` with `react-testing-library/clean-after-each` ([@aarnoldaas](https://github.com/aarnoldaas))
- `jest-yoshi-preset`
  - [#1208](https://github.com/wix/yoshi/pull/1208) Throw an error in case `MATCH_ENV` was not used properly ([@orimwix](https://github.com/orimwix))

#### :house: Internal

- `create-yoshi-app`
  - [#1269](https://github.com/wix/yoshi/pull/1269) Add another `100,000ms` timeout to verify there is no timeout problem in template tests ([@ranyitz](https://github.com/ranyitz))
- `yoshi-config`
  - [#964](https://github.com/wix/yoshi/pull/964) Add basic unit tests for `yoshi-config`'s `validateConfig` ([@cowchimp](https://github.com/cowchimp))

## 4.3.3 (2019-05-02)

#### :rocket: New Feature

- `yoshi-helpers`, `yoshi`
  - [#1224](https://github.com/wix/yoshi/pull/1224) Create manifest JSON file with mapping to initial assets ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#1260](https://github.com/wix/yoshi/pull/1260) Enable `--source-map` option in app flow build ([@ronenst](https://github.com/ronenst))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1255](https://github.com/wix/yoshi/pull/1255) OOI generator best practices ([@jonathanadler](https://github.com/jonathanadler))

## 4.3.2 (2019-04-28)

#### :rocket: New Feature

- [#1200](https://github.com/wix/yoshi/pull/1200) Make deploy "website" to surge.sh conditional ([@nktssh](https://github.com/nktssh))

#### :bug: Bug Fix

- `yoshi`
  - [#1253](https://github.com/wix/yoshi/pull/1253) Remove HMR from production bundle ([@yanivefraim](https://github.com/yanivefraim))
  - [#1252](https://github.com/wix/yoshi/pull/1252) Remove server `ts-loader` config ([@yairhaimo](https://github.com/yairhaimo))
  - [#1244](https://github.com/wix/yoshi/pull/1244) Add server bundle on build logs ([@koretskiyav](https://github.com/koretskiyav))
- `jest-environment-yoshi-puppeteer`
  - [#1245](https://github.com/wix/yoshi/pull/1245) Make puppeteer ignore ssl errors if user run with flag ssl:true ([@dmfilipenko](https://github.com/dmfilipenko))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1249](https://github.com/wix/yoshi/pull/1249) Use major version in nvmrc, and not a specific one ([@jonathanadler](https://github.com/jonathanadler))

#### :house: Internal

- `create-yoshi-app`
  - [#1197](https://github.com/wix/yoshi/pull/1197) Simplify biz-mgr babel template ([@yurynix](https://github.com/yurynix))
- Other
  - [#1247](https://github.com/wix/yoshi/pull/1247) Update docusaurus ([@dmfilipenko](https://github.com/dmfilipenko))

## 4.3.1 (2019-04-22)

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1230](https://github.com/wix/yoshi/pull/1230) Simplify ooi javascript src directory file structure ([@ranyitz](https://github.com/ranyitz))

## 4.3.0 (2019-04-22)

#### :house: Internal

- `yoshi`
  - [2cb5ec0](https://github.com/wix/yoshi/commit/2cb5ec044ee9c505e74d0b5517b61fe0f167c55f) Bump `tpa-style-webpack-plugin`

#### :bug: Bug Fix

- `yoshi-angular-dependencies`, `yoshi`
  - [#1226](https://github.com/wix/yoshi/pull/1226) Provide `yoshi-runtime` by default ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [539abe9](https://github.com/wix/yoshi/commit/539abe9aae31b40988ea6ad21998dff4531b420a) Add missing dev dependency to biz-mgr templates

## 4.2.2 (2019-04-07)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#1223](https://github.com/wix/yoshi/pull/1223) Node library template is added to the list ([@ranyitz](https://github.com/ranyitz))
  - [#1217](https://github.com/wix/yoshi/pull/1217) Out of iframe template is added to the list ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#1225](https://github.com/wix/yoshi/pull/1225) Remove universal template from project types documentation ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- `create-yoshi-app`
  - [#1222](https://github.com/wix/yoshi/pull/1222) Separate template tests into different status checks on CI ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#1212](https://github.com/wix/yoshi/pull/1212) Adjust internal `createVersion` script to generate versioned docs ([@ronami](https://github.com/ronami))

## 4.2.1 (2019-04-04)

#### :bug: Bug Fix

- `yoshi-config`, `yoshi`
  - [#1216](https://github.com/wix/yoshi/pull/1216) Webpack HTML plugin fixes ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#1213](https://github.com/wix/yoshi/pull/1213) Wrong `MATCH_ENV` in VS Code settings ([@bt4R9](https://github.com/bt4R9))

#### :memo: Documentation

- [#1194](https://github.com/wix/yoshi/pull/1194) Add versioned documentation 🎉🐉 ([@nktssh](https://github.com/nktssh))

## 4.2.0 (2019-04-04)

#### :rocket: New Feature

- `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#1090](https://github.com/wix/yoshi/pull/1090) Html Webpack Plugin MVP (experimental) ([@ronami](https://github.com/ronami))
- `jest-yoshi-preset`
  - [#1193](https://github.com/wix/yoshi/pull/1193) Allow using JSDOM in v14 (experimental) ([@nktssh](https://github.com/nktssh))
  - [#1160](https://github.com/wix/yoshi/pull/1160) Add to our Jest preset a graphql transform ([@yurynix](https://github.com/yurynix))
- `create-yoshi-app`
  - [#967](https://github.com/wix/yoshi/pull/967) Add sentry and fedops to client and fullstack apps ([@yaelhe](https://github.com/yaelhe))
  - [#1190](https://github.com/wix/yoshi/pull/1190) Add the ability to use an answers json file instead of prompt ([@Schniz](https://github.com/Schniz))

#### :bug: Bug Fix

- `yoshi`
  - [#1203](https://github.com/wix/yoshi/pull/1203) Wrong displayName in jest wallaby ([@bt4R9](https://github.com/bt4R9))

#### :house: Internal

- `yoshi`
  - [#1205](https://github.com/wix/yoshi/pull/1205) Fix failing integration tests (Babel) ([@ronami](https://github.com/ronami))
  - [#1198](https://github.com/wix/yoshi/pull/1198) Remove an unused and undocumented way to disable thread optimization in Typescript ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#1196](https://github.com/wix/yoshi/pull/1196) Refactor create yoshi app ([@ranyitz](https://github.com/ranyitz))

## 4.1.2 (2019-04-01)

#### :nail_care: Polish

- `yoshi`
  - [#1191](https://github.com/wix/yoshi/pull/1191) Add sensible defaults to `webpack-dev-server`'s `allowedHosts` ([@ronami](https://github.com/ronami))

## 4.1.1 (2019-03-31)

#### :rocket: New Feature

- `yoshi`
  - [#1188](https://github.com/wix/yoshi/pull/1188) Support `externalUnprocessedModules` config option for transpiling TypeScript files ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1186](https://github.com/wix/yoshi/pull/1186) Update `husky` && `lint-staged` use new recommended config format ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- [#1184](https://github.com/wix/yoshi/pull/1184) Tiny fix for app-flow guide (fix image url) ([@sidoruk-sv](https://github.com/sidoruk-sv))

## 4.1.0 (2019-03-27)

#### :rocket: New Feature

- `yoshi`
  - [#1166](https://github.com/wix/yoshi/pull/1166) Support opening the browser on a different url with `--url` (for !appFlow) ([@yairhaimo](https://github.com/yairhaimo))

#### :nail_care: Polish

- `create-yoshi-app`, `yoshi`
  - [#1182](https://github.com/wix/yoshi/pull/1182) Don't run Stylelint during `yoshi lint` ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#1167](https://github.com/wix/yoshi/pull/1167) Business Manager template opens correct url on `npm start` ([@yairhaimo](https://github.com/yairhaimo))

#### :house: Internal

- `tslint-config-yoshi-base`, `yoshi-helpers`, `yoshi`
  - [#1175](https://github.com/wix/yoshi/pull/1175) Fix ESLint warnings and set maximum warnings to 0 ([@ronami](https://github.com/ronami))
- `eslint-config-yoshi`, `jest-environment-yoshi-bootstrap`, `jest-environment-yoshi-puppeteer`, `jest-yoshi-preset`, `yoshi-helpers`, `yoshi`
  - [#1168](https://github.com/wix/yoshi/pull/1168) Require `yoshi-helpers` files directly and simplify bootstrap env vars logic ([@ronami](https://github.com/ronami))
- `eslint-config-yoshi-base`, `yoshi`
  - [#1170](https://github.com/wix/yoshi/pull/1170) Remove redundant `.eslintrc` files and remove lint warnings on react version ([@ronami](https://github.com/ronami))

## 4.1.0-rc.4 (2019-03-23)

#### :boom: Breaking Change

- `create-yoshi-app`, `yoshi`
  - [#1164](https://github.com/wix/yoshi/pull/1164) Change the default server entry for `app-flow` from `test/dev-server` to `dev/server`, only relevant for client projects. ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `create-yoshi-app`, `yoshi`
  - [#1164](https://github.com/wix/yoshi/pull/1164) Fail gracefully if `source-map-support` is not installed. ([@ronami](https://github.com/ronami))
- `jest-environment-yoshi-bootstrap`, `yoshi-helpers`, `yoshi`
  - [#1161](https://github.com/wix/yoshi/pull/1161) Defaults for rpc and petri testkits ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#1151](https://github.com/wix/yoshi/pull/1151) Polish generators ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `create-yoshi-app`, `yoshi`
  - [#1164](https://github.com/wix/yoshi/pull/1164) Show correct source maps in e2e jest tests, by not installing `source-map-support` twice. ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- `create-yoshi-app`, `yoshi`
  - [#1164](https://github.com/wix/yoshi/pull/1164) Update migration guide for `app-flow` to install `source-map-support`. ([@ronami](https://github.com/ronami))
- [#1163](https://github.com/wix/yoshi/pull/1163) Update links in docs ([@yairhaimo](https://github.com/yairhaimo))

## 4.1.0-rc.3 (2019-03-21)

#### :rocket: New Feature

- `jest-yoshi-preset`
  - [#1150](https://github.com/wix/yoshi/pull/1150) Add `jest-watch-typeahead` plugin ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-config`, `yoshi`
  - [#1153](https://github.com/wix/yoshi/pull/1153) Don't use node platform defaults if a project has old config folder ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#1152](https://github.com/wix/yoshi/pull/1152) Parse properly `lint --fix` argument ([@yurynix](https://github.com/yurynix))
  - [#1140](https://github.com/wix/yoshi/pull/1140) Add Stylable Webpack plugin project level hashing ([@NitayRabi](https://github.com/NitayRabi))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1148](https://github.com/wix/yoshi/pull/1148) Remove `__STATICS_BASE_URL__` from client & fullstack templates ([@ranyitz](https://github.com/ranyitz))
- `yoshi`
  - [#1142](https://github.com/wix/yoshi/pull/1142) Supply a better default for New Relic log level in user's app servers ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- `create-yoshi-app`
  - [#1138](https://github.com/wix/yoshi/pull/1138) Update business manager template to use dynamic imports ([@yurynix](https://github.com/yurynix))

## 4.1.0-rc.2 (2019-03-19)

#### :bug: Bug Fix

- `yoshi`
  - [#1141](https://github.com/wix/yoshi/pull/1141) Support bootstrap's environment parameters also in app flow ([@ranyitz](https://github.com/ranyitz))

## 4.1.0-rc.1 (2019-03-18)

#### :nail_care: Polish

- `create-yoshi-app`
  - [#1137](https://github.com/wix/yoshi/pull/1137) Replaced `enzyme` with `react-testing-library` ([@saarkuriel](https://github.com/saarkuriel))
- `create-yoshi-app`, `jest-environment-yoshi-bootstrap`, `yoshi`
  - [#1132](https://github.com/wix/yoshi/pull/1132) Adds defaults for bootstrap testkit and config emitter ([@ranyitz](https://github.com/ranyitz))

## 4.1.0-rc.0 (2019-03-18)

#### :rocket: New Feature

- `jest-yoshi-preset`
  - [#1130](https://github.com/wix/yoshi/pull/1130) Support using setup file from `test` and not only from `__tests__` ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#1123](https://github.com/wix/yoshi/pull/1123) Migrate fullstack template to use app flow ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi`
  - [#1115](https://github.com/wix/yoshi/pull/1115) Server side rendering: generate long/short class names in prod/dev respectively ([@ronami](https://github.com/ronami))
  - [#1127](https://github.com/wix/yoshi/pull/1127) Add title (babel) for Babel task instead of a full path ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `create-yoshi-app`, `jest-yoshi-preset`
  - [#1131](https://github.com/wix/yoshi/pull/1131) Remove redundant setup file, change default e2e timeout to 10s ([@ronami](https://github.com/ronami))
- `yoshi-style-dependencies`, `yoshi`
  - [#1103](https://github.com/wix/yoshi/pull/1103) Minimize the impact of conflicting `sass` versions ([@ronami](https://github.com/ronami))
- `yoshi-helpers`, `yoshi`
  - [#1122](https://github.com/wix/yoshi/pull/1122) Verify that all yoshi related dependencies are in the same major version ([@ronami](https://github.com/ronami))
- `jest-yoshi-preset`, `yoshi`
  - [#1129](https://github.com/wix/yoshi/pull/1129) Remove `babel-core` 7-bridge ([@yairhaimo](https://github.com/yairhaimo))
- `jest-yoshi-preset`
  - [#1128](https://github.com/wix/yoshi/pull/1128) Use Jests's default `moduleFileExtensions` configuration ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#1125](https://github.com/wix/yoshi/pull/1125) Change the old link to the documentation site in starting link ([@ranyitz](https://github.com/ranyitz))
- `yoshi`
  - [#1100](https://github.com/wix/yoshi/pull/1100) Optimize Wallaby for Jest ([@ArtemGovorov](https://github.com/ArtemGovorov))

#### :memo: Documentation

- [#1108](https://github.com/wix/yoshi/pull/1108) Version 4 migration guide/blog ([@ronami](https://github.com/ronami))

#### :house: Internal

- `yoshi`
  - [#1120](https://github.com/wix/yoshi/pull/1120) Remove `haste-task-babel` dependency ([@yavorsky](https://github.com/yavorsky))
- `babel-preset-yoshi`
  - [#1111](https://github.com/wix/yoshi/pull/1111) Use `requireDefault` helper for babel plugins ([@yavorsky](https://github.com/yavorsky))
- `yoshi-config`
  - [#1087](https://github.com/wix/yoshi/pull/1087) Add an option to load the config without validating it ([@ranyitz](https://github.com/ranyitz))

## 4.1.0-alpha.7 (2019-03-13)

#### :rocket: New Feature

- `create-yoshi-app`, `eslint-config-yoshi`
  - [#1096](https://github.com/wix/yoshi/pull/1096) Update generators to use React Version 16 ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `jest-yoshi-preset`
  - [#1106](https://github.com/wix/yoshi/pull/1106) Inject regenerator-runtime globally for backward compatibility (was dropped in Jest V24) ([@yanivefraim](https://github.com/yanivefraim))

## 4.1.0-alpha.6 (2019-03-11)

#### :rocket: New Feature

- `yoshi`
  - [#1084](https://github.com/wix/yoshi/pull/1084) Support opening the browser with a different URL using `--url` ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `yoshi-angular-dependencies`, `yoshi-style-dependencies`, `yoshi`
  - [#1095](https://github.com/wix/yoshi/pull/1095) Fix loader dependencies ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi`
  - [#1094](https://github.com/wix/yoshi/pull/1094) Transpile server code with default compiler options for angular apps ([@ronami](https://github.com/ronami))
- `jest-environment-yoshi-puppeteer`, `yoshi`
  - [#1085](https://github.com/wix/yoshi/pull/1085) Bump puppeteer version to make sure a correct version is always installed ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- `yoshi`
  - [#1078](https://github.com/wix/yoshi/pull/1078) Polish the output of `build-app` to show file sizes ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- [#1081](https://github.com/wix/yoshi/pull/1081) Fix setup docs according to new globs ([@yanivefraim](https://github.com/yanivefraim))

#### :house: Internal

- `jest-yoshi-preset`, `yoshi`
  - [#1077](https://github.com/wix/yoshi/pull/1077) Add missing integration tests to Yoshi's Jest setup ([@ronami](https://github.com/ronami))

## 4.1.0-alpha.5 (2019-03-05)

#### :bug: Bug Fix

- `yoshi`
  - [#1076](https://github.com/wix/yoshi/pull/1076) Fix Protractor glob pattern to use the new `e2eTest` glob ([@yanivefraim](https://github.com/yanivefraim))
  - [#1075](https://github.com/wix/yoshi/pull/1075) Support writing a stats file when running app-flow build ([@ronami](https://github.com/ronami))

## 4.1.0-alpha.4 (2019-03-05)

#### :boom: Breaking Change

- `jest-environment-yoshi-puppeteer`
  - [#1067](https://github.com/wix/yoshi/pull/1067) Add default Puppeteer timeouts ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`, `yoshi`
  - [#1006](https://github.com/wix/yoshi/pull/1006) Make Jest the default test runner when running `npx yoshi test` ([@yanivefraim](https://github.com/yanivefraim))

#### :bug: Bug Fix

- `yoshi`
  - [#1072](https://github.com/wix/yoshi/pull/1072) Fix https flag/option not starting `webpack-dev-server` in https ([@ronami](https://github.com/ronami))
  - [#1047](https://github.com/wix/yoshi/pull/1047) Run `eslint` even after stylelint errors ([@yanivefraim](https://github.com/yanivefraim))
  - [#1046](https://github.com/wix/yoshi/pull/1046) Do not show the name of files that did not have `stylelint` errors ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-config`, `yoshi`
  - [#1071](https://github.com/wix/yoshi/pull/1071) Fix Webpack's version to `v4.28.4` ([@ronami](https://github.com/ronami))
- `yoshi-config`
  - [#1061](https://github.com/wix/yoshi/pull/1061) Use a base for globs and add `__tests__` to the new base ([@ranyitz](https://github.com/ranyitz))
- `jest-yoshi-preset`, `yoshi`
  - [#1059](https://github.com/wix/yoshi/pull/1059) Handle importing `svg` files in tests (mocha,jest,jest-yoshi-preset) for React 15 ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi`
  - [#1073](https://github.com/wix/yoshi/pull/1073) Support old flow CLI options: `--ssl` and `--entry-point` ([@ronami](https://github.com/ronami))
  - [#1066](https://github.com/wix/yoshi/pull/1066) Improve TypeScript speed in watch mode using incremental API in app flow ([@yanivefraim](https://github.com/yanivefraim))
  - [#1065](https://github.com/wix/yoshi/pull/1065) Fix deprecated `resolve-url-loader` config ([@ronami](https://github.com/ronami))
  - [#1029](https://github.com/wix/yoshi/pull/1029) Configure `hot-update.json` of Webpack's HMR to be in `updates` directory ([@ranyitz](https://github.com/ranyitz))

#### :house: Internal

- Other
  - [#1058](https://github.com/wix/yoshi/pull/1058) Test improvements ([@yanivefraim](https://github.com/yanivefraim))
  - [#1056](https://github.com/wix/yoshi/pull/1056) Update Travis Node version to v10 ([@yanivefraim](https://github.com/yanivefraim))
  - [#1007](https://github.com/wix/yoshi/pull/1007) Configure Renovate ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1022](https://github.com/wix/yoshi/pull/1022) Remove redundant dependencies from kitchensink projects ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#1064](https://github.com/wix/yoshi/pull/1064) Remove redundant files ([@ronami](https://github.com/ronami))
  - [#1035](https://github.com/wix/yoshi/pull/1035) Configure npm to not automatically add `^` to installed dependencies ([@cowchimp](https://github.com/cowchimp))
  - [#1032](https://github.com/wix/yoshi/pull/1032) Update dependency terser to v3.16.1 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1031](https://github.com/wix/yoshi/pull/1031) Update dependency ng-annotate to v1.2.2 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1030](https://github.com/wix/yoshi/pull/1030) Update dependency detect-port to v1.3.0 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1033](https://github.com/wix/yoshi/pull/1033) Update dependency terser-webpack-plugin to v1.2.3 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1024](https://github.com/wix/yoshi/pull/1024) Freeze Yoshi's direct dependencies ([@cowchimp](https://github.com/cowchimp))
- `jest-environment-yoshi-puppeteer`, `yoshi-helpers`, `yoshi`
  - [#1020](https://github.com/wix/yoshi/pull/1020) Change app-flow tests to support testing Yoshi's testing infra ([@ronami](https://github.com/ronami))
- `yoshi-angular-dependencies`, `yoshi-config`, `yoshi-helpers`, `yoshi-style-dependencies`
  - [#1037](https://github.com/wix/yoshi/pull/1037) Freeze direct dependencies in `yoshi-*` packages ([@cowchimp](https://github.com/cowchimp))

## 4.1.0-alpha.3 (2019-02-26)

#### :rocket: New Feature

- `yoshi`
  - [#992](https://github.com/wix/yoshi/pull/992) Improve app flow: Show server errors in the browser and refresh the browser on server changes ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `yoshi`
  - [#1016](https://github.com/wix/yoshi/pull/1016) properly log port when waiting for server to start ([@netanelgilad](https://github.com/netanelgilad))
  - [#1017](https://github.com/wix/yoshi/pull/1017) Generate correct public path on local build ([@ranyitz](https://github.com/ranyitz))

## 4.1.0-alpha.2 (2019-02-25)

#### :boom: Breaking Change

- `babel-plugin-transform-hmr-runtime`, `create-yoshi-app`, `jest-environment-yoshi-bootstrap`, `jest-environment-yoshi-puppeteer`, `jest-yoshi-preset`, `yoshi`
  - [#954](https://github.com/wix/yoshi/pull/954) Migrate to Jest 24 ([@matveyok](https://github.com/matveyok))
- `create-yoshi-app`, `jest-environment-yoshi-puppeteer`, `jest-yoshi-preset`, `yoshi-config`, `yoshi-helpers`, `yoshi`

  - [#808](https://github.com/wix/yoshi/pull/808) Update test globs ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi-config`, `yoshi`
  - [#1010](https://github.com/wix/yoshi/pull/1010) Change 'appflow' FT ([@yanivefraim](https://github.com/yanivefraim))

#### :house: Internal

- `create-yoshi-app`, `jest-yoshi-preset`, `yoshi`
  - [#1011](https://github.com/wix/yoshi/pull/1011) Fix server/business-manager generators for version 4 ([@yanivefraim](https://github.com/yanivefraim))

## 4.1.0-alpha.1 (2019-02-07)

#### :boom: Breaking Change

- `create-yoshi-app`, `eslint-config-yoshi-base`, `eslint-config-yoshi`, `jest-environment-yoshi-puppeteer`, `jest-yoshi-preset`, `tslint-config-yoshi`, `yoshi-angular-dependencies`, `yoshi-helpers`, `yoshi-style-dependencies`, `yoshi`
  - [#955](https://github.com/wix/yoshi/pull/955) Bump old dependencies and target only relevant latest browsers with `autoprefixer` ([@ronami](https://github.com/ronami))

## 4.1.0-alpha.0 (2019-02-05)

#### :boom: Breaking Change

- `babel-preset-yoshi`, `create-yoshi-app`, `jest-yoshi-preset`, `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#917](https://github.com/wix/yoshi/pull/917) Configure Babel to ignore `babelrc` and use `babel-preset-yoshi` ([@ronami](https://github.com/ronami))
- `create-yoshi-app`, `yoshi`
  - [#940](https://github.com/wix/yoshi/pull/940) Predefined Typescript definitions for Yoshi. **Requires a minimum version of Typescript 2.9** ([@saarkuriel](https://github.com/saarkuriel))
  - [#738](https://github.com/wix/yoshi/pull/738) Don't run tests in `start` by default ([@Schniz](https://github.com/Schniz))
- `create-yoshi-app`, `jest-yoshi-preset`, `yoshi`
  - [#781](https://github.com/wix/yoshi/pull/781) Allow using SVGs as React components ([@ranyitz](https://github.com/ranyitz))
- `yoshi`
  - [#765](https://github.com/wix/yoshi/pull/765) Remove `DynamicPublicPath` plugin from `webpack.config.js` ([@netanelgilad](https://github.com/netanelgilad))
- `eslint-config-yoshi-base`, `eslint-config-yoshi`, `yoshi`
  - [#712](https://github.com/wix/yoshi/pull/712) Migrate to `eslint` version 5 ([@ronami](https://github.com/ronami))
- `babel-plugin-transform-hmr-runtime`, `babel-preset-yoshi`, `jest-yoshi-preset`, `yoshi-helpers`, `yoshi`
  - [#646](https://github.com/wix/yoshi/pull/646) Transpile JavaScript using Babel 7 ([@yavorsky](https://github.com/yavorsky))

#### :rocket: New Feature

- `create-yoshi-app`, `stylelint-config-yoshi`, `yoshi`
  - [#750](https://github.com/wix/yoshi/pull/750) Lint Stylesheets by default ([@Schniz](https://github.com/Schniz))
- `yoshi`
  - [#711](https://github.com/wix/yoshi/pull/711) Use `cssnano` as a CSS minifier ([@ronami](https://github.com/ronami))
  - [#538](https://github.com/wix/yoshi/pull/538) Wait for app-server port before finishing app-server task ([@netanelgilad](https://github.com/netanelgilad))

#### :nail_care: Polish

- `yoshi-config`, `yoshi`
  - [#948](https://github.com/wix/yoshi/pull/948) Remove `experimentalTSTarget` configuration option ([@saarkuriel](https://github.com/saarkuriel))
- `yoshi`
  - [#937](https://github.com/wix/yoshi/pull/937) Use `svg-url-loader` instead of `url-loader` to optimize bundle size ([@saarkuriel](https://github.com/saarkuriel))
  - [#739](https://github.com/wix/yoshi/pull/739) Generate separate assets into `dist/statics/assets` ([@ronami](https://github.com/ronami))
  - [#714](https://github.com/wix/yoshi/pull/714) Move from `uglifyjs` to `terser` ([@ronami](https://github.com/ronami))
  - [#715](https://github.com/wix/yoshi/pull/715) Small `webpack` improvements ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- `stylelint-config-yoshi`
  - [#807](https://github.com/wix/yoshi/pull/807) Add documentation for stylesheet linting ([@Schniz](https://github.com/Schniz))

#### :house: Internal

- `babel-preset-yoshi`, `yoshi`
  - [#815](https://github.com/wix/yoshi/pull/815) Fix app flow tests on version 4.x ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#734](https://github.com/wix/yoshi/pull/734) Open browser on `yoshi start` ([@netanelgilad](https://github.com/netanelgilad))

## 3.30.5 (2019-02-21)

#### :bug: Bug Fix

- `yoshi-helpers`, `yoshi`
  - [#1000](https://github.com/wix/yoshi/pull/1000) Upgrade `mocha-teamcity-reporter` to v2 ([@yairhaimo](https://github.com/yairhaimo))

#### :nail_care: Polish

- `yoshi-config`, `yoshi`
  - [#977](https://github.com/wix/yoshi/pull/977) Remove `ajv` from `yoshi` and upgrade the version ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- `tslint-config-yoshi`
  - [#993](https://github.com/wix/yoshi/pull/993) Update README.md with `tslint-config-yoshi` ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :house: Internal

- `create-yoshi-app`, `eslint-config-yoshi-base`, `tslint-config-yoshi-base`, `yoshi-helpers`, `yoshi`
  - [#978](https://github.com/wix/yoshi/pull/978) Do not pack `dist` and `test` in `yoshi` main package ([@ranyitz](https://github.com/ranyitz))

## 3.30.4 (2019-02-20)

#### :bug: Bug Fix

- `yoshi-helpers`, `yoshi`
  - [#990](https://github.com/wix/yoshi/pull/990) Remove `mocha-teamcity-reporter` as a temporary fix ([@yairhaimo](https://github.com/yairhaimo))
- `jest-yoshi-preset`
  - [#973](https://github.com/wix/yoshi/pull/973) Fix watch Jest mode - do not watch 'dist' and 'target' folders ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`
  - [#984](https://github.com/wix/yoshi/pull/984) Update biz mgr template to address configuration changes ([@yurynix](https://github.com/yurynix))
- `yoshi-helpers`
  - [#969](https://github.com/wix/yoshi/pull/969) Fix checking if file is exist. ([@rudnitskih](https://github.com/rudnitskih))

#### :house: Internal

- `create-yoshi-app`
  - [#983](https://github.com/wix/yoshi/pull/983) Remove component library generators from list ([@yairhaimo](https://github.com/yairhaimo))

## 3.30.3 (2019-02-10)

#### :bug: Bug Fix

- `yoshi-config`
  - [#976](https://github.com/wix/yoshi/pull/976) Lock AJV version due to a bug ([@yurynix](https://github.com/yurynix))

## 3.30.2 (2019-02-10)

- `yoshi`
  - [#975](https://github.com/wix/yoshi/pull/975) lock ajv version [yurynix](https://github.com/yurynix)

## 3.30.1 (2019-02-07)

#### :house: Internal

- `create-yoshi-app`
  - [#970](https://github.com/wix/yoshi/pull/970) Fix clash between test infra's .npmrc and .npmrc generated by the templates [cowchimp](https://github.com/cowchimp)
- `yohsi`
  - [#951](https://github.com/wix/yoshi/pull/951) Use fs-extra's `pathExists` instead of deprecated `exists` and make `fs-extra` a dependency instead of dev-dep. [yaelhe](https://github.com/yaelhe)

#### :nail_care: Polish

- `yoshi`
  - [#965](https://github.com/wix/yoshi/pull/965) Fail early if Yoshi is being run with an old Node version [cowchimp](https://github.com/cowchimp)

## 3.30.0 (2019-02-04)

#### :rocket: New Feature

- `yoshi`
  - [#958](https://github.com/wix/yoshi/pull/958) Update `stylable` runtime config ([@tomrav](https://github.com/tomrav))

#### :bug: Bug Fix

- `yoshi`
  - [#966](https://github.com/wix/yoshi/pull/966) Unfix `terser` version ([@yairhaimo](https://github.com/yairhaimo))

#### :nail_care: Polish

- `yoshi`
  - [#961](https://github.com/wix/yoshi/pull/961) Don't minimize server bundle ([@ronami](https://github.com/ronami))
- `yoshi-config`
  - [#963](https://github.com/wix/yoshi/pull/963) Change Yoshi's config schema to support setting `separateCss: true` ([@cowchimp](https://github.com/cowchimp))

## 3.29.0 (2019-02-04)

#### :rocket: New Feature

- `jest-yoshi-preset`, `yoshi`
  - [#909](https://github.com/wix/yoshi/pull/909) Upgrade stylable packages to 1.0.0+ ([@AviVahl](https://github.com/AviVahl))

#### :bug: Bug Fix

- `yoshi`
  - [#936](https://github.com/wix/yoshi/pull/936) Use TSLINT on JS files if project is Typescript (Closes [#929](https://github.com/wix/yoshi/issues/929)) ([@saarkuriel](https://github.com/saarkuriel))
- `yoshi-config`
  - [#941](https://github.com/wix/yoshi/pull/941) Update `yoshi-config-schema` to use webpack schema defaults ([@matveyok](https://github.com/matveyok))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#953](https://github.com/wix/yoshi/pull/953) set `.npmrc` to `package-lock=false` in templates (#625) ([@cowchimp](https://github.com/cowchimp))
- `yoshi`
  - [#947](https://github.com/wix/yoshi/pull/947) Remove redundant include for GraphQL files ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- [#957](https://github.com/wix/yoshi/pull/957) Add documentation for the why & how of using a lockfile ([@cowchimp](https://github.com/cowchimp))

#### :house: Internal

- Other
  - [#950](https://github.com/wix/yoshi/pull/950) Release website to Surge.sh on PR ([@saarkuriel](https://github.com/saarkuriel))
  - [#952](https://github.com/wix/yoshi/pull/952) Run website job on master only ([@saarkuriel](https://github.com/saarkuriel))
  - [#946](https://github.com/wix/yoshi/pull/946) Reorder `travis.yaml` ([@saarkuriel](https://github.com/saarkuriel))
- `yoshi-config`
  - [#941](https://github.com/wix/yoshi/pull/941) Update `yoshi-config-schema` to use webpack schema defaults ([@matveyok](https://github.com/matveyok))

## 3.28.0 (2019-01-27)

#### :rocket: New Feature

- `jest-yoshi-preset`, `yoshi`
- [#909](https://github.com/wix/yoshi/pull/909) Upgrade stylable packages to version `^1.0.0` ([@AviVahl](https://github.com/AviVahl))

## 3.27.0 (2019-01-24)

#### :rocket: New Feature

- `yoshi`
  - [#930](https://github.com/wix/yoshi/pull/930) Add process.env.IS_MINIFIED. ([@felixmosh](https://github.com/felixmosh))

#### :house: Internal

- `yoshi`
  - [#933](https://github.com/wix/yoshi/pull/933) App flow Typescript tests ([@ronami](https://github.com/ronami))
- Other
  - [#932](https://github.com/wix/yoshi/pull/932) Pass Jest's globalConfig to `jest-puppeteer` global setup/teardown functions ([@ronami](https://github.com/ronami))

## 3.26.0 (2019-01-21)

#### :rocket: New Feature

- `yoshi-helpers`, `yoshi`
  - [#915](https://github.com/wix/yoshi/pull/915) Adds `ARTIFACT_ID` env var to bundle ([@aaronvine](https://github.com/aaronvine))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#913](https://github.com/wix/yoshi/pull/913) Fix Business Manager artifact name in erb template ([@ronenst](https://github.com/ronenst))
- `yoshi`
  - [3b5fb8](https://github.com/wix/yoshi/commit/3b5fb86d3695b876d26944f2bee0667d2dee6052) Fix webpack version until webpack issue `#8656` is solved

#### :nail_care: Polish

- `create-yoshi-app`
  - [#919](https://github.com/wix/yoshi/pull/919) Add a "read more" link to `*.json.erb` template files ([@sidoruk-sv](https://github.com/sidoruk-sv))
  - [#911](https://github.com/wix/yoshi/pull/911) Replace deprecated `${workspaceRoot}` variable with `${workspaceFolder}` ([@sidoruk-sv](https://github.com/sidoruk-sv))

#### :house: Internal

- `jest-yoshi-preset`, `tslint-config-yoshi-base`, `tslint-config-yoshi`, `yoshi-helpers`, `yoshi`
  - [#920](https://github.com/wix/yoshi/pull/920) Bump dev dependency to Typescript 3 ([@ronami](https://github.com/ronami))

## 3.25.1 (2019-01-14)

#### :bug: Bug Fix

- `eslint-config-yoshi-base`
  - [#910](https://github.com/wix/yoshi/pull/910) Remove `jest/prefer-to-have-length` eslint rule ([@yairhaimo](https://github.com/yairhaimo))

## 3.25.0 (2019-01-13)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#904](https://github.com/wix/yoshi/pull/904) Update Biz Mgr Babel generator template ([@yurynix](https://github.com/yurynix))

#### :house: Internal

- [#891](https://github.com/wix/yoshi/pull/891) Increase stalebot's counter params ([@yairhaimo](https://github.com/yairhaimo))

## 3.24.1 (2019-01-09)

#### :bug: Bug Fix

- `yoshi`, `create-yoshi-app`, `jest-environment-yoshi-puppeteer`, `jest-yoshi-preset`
  - [#906](https://github.com/wix/yoshi/pull/906) Bump `globby` version to 8.0.2, because 8.0.1 had an issue ([@yurynix](https://github.com/yurynix))

## 3.24.0 (2019-01-08)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#850](https://github.com/wix/yoshi/pull/850) Migrate Business Manager Typescript template to jest/puppeteer ([@liorMar](https://github.com/liorMar))

#### :bug: Bug Fix

- `yoshi`
  - [#865](https://github.com/wix/yoshi/pull/865) Use webpack node lib mock config in storybook config ([@yairhaimo](https://github.com/yairhaimo))

## 3.23.0 (2018-12-31) :champagne: :fireworks:

#### :rocket: New Feature

- `yoshi-config`, `yoshi`
  - [#896](https://github.com/wix/yoshi/pull/896) Add opt-in Typescript transpilation target for ES modules ([@yairhaimo](https://github.com/yairhaimo))

#### :bug: Bug Fix

- `yoshi`
  - [#897](https://github.com/wix/yoshi/pull/897) Server bundle experiment should respect `hmr` config ([@yairhaimo](https://github.com/yairhaimo))

#### :memo: Documentation

- [#894](https://github.com/wix/yoshi/pull/894) Update export-es-module guide location ([@yakirn](https://github.com/yakirn))
- [#893](https://github.com/wix/yoshi/pull/893) Add a note about Lerna and tags for a new version release ([@yurynix](https://github.com/yurynix))

## 3.22.5 (2018-12-25)

#### :bug: Bug fix

- [#890](https://github.com/wix/yoshi/pull/890) Fix build on TeamCity PR CI, make it contain the correct webpack_require prefix (static url) [@yurynix](https://github.com/yurynix)

## 3.22.4 (2018-12-05)

#### :bug: Bug Fix

- [#875](https://github.com/wix/yoshi/pull/875) Add `petriSpecs` to config schema ([@yairhaimo](https://github.com/yairhaimo))

#### :house: Internal

- [#874](https://github.com/wix/yoshi/pull/874) Make directory listing test consistent ([@Schniz](https://github.com/Schniz))
- [#871](https://github.com/wix/yoshi/pull/871) Add a test that verifies directory listing in assets directory ([@yurynix](https://github.com/yurynix))

## 3.22.3 (2018-12-03)

#### :bug: Bug Fix

- `jest-yoshi-preset`
  - [#869](https://github.com/wix/yoshi/pull/869) Change Jest css transform regex to support node 8 ([@yairhaimo](https://github.com/yairhaimo))

## 3.22.2 (2018-12-02)

#### :bug: Bug Fix

- `jest-yoshi-preset`
  - [#868](https://github.com/wix/yoshi/pull/868) Re-Fix Jest css transform overriding Stylable transform ([@yairhaimo](https://github.com/yairhaimo))

## 3.22.1 (2018-12-02)

#### :bug: Bug Fix

- `jest-yoshi-preset`
  - [#866](https://github.com/wix/yoshi/pull/866) Fix Jest css transform overriding Stylable transform ([@yairhaimo](https://github.com/yairhaimo))

## 3.22.0 (2018-12-02)

#### :rocket: New Feature

- `jest-yoshi-preset`
  - [#857](https://github.com/wix/yoshi/pull/857) Add support for css ([@jonathanadler](https://github.com/jonathanadler))

#### :bug: Bug Fix

- `jest-environment-yoshi-puppeteer`
  - [#843](https://github.com/wix/yoshi/pull/843) Puppeteer: tearing down Parent Environment and no throw on `pageerror` ([@liorMar](https://github.com/liorMar))

#### :house: Internal

- Other
  - [#859](https://github.com/wix/yoshi/pull/859) Keep running all app flow tests even if one fails ([@ronami](https://github.com/ronami))
  - [#845](https://github.com/wix/yoshi/pull/845) Wait for `terminate` to resolve ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi`
  - [#856](https://github.com/wix/yoshi/pull/856) Add missing app-flow tests for build output ([@ronami](https://github.com/ronami))
  - [#844](https://github.com/wix/yoshi/pull/844) Move HMR to `webpack` config ([@yurynix](https://github.com/yurynix))
  - [#855](https://github.com/wix/yoshi/pull/855) Enable watch tests ([@yurynix](https://github.com/yurynix))
  - [#851](https://github.com/wix/yoshi/pull/851) Improve app-flow tests and add missing tests ([@ronami](https://github.com/ronami))
  - [#752](https://github.com/wix/yoshi/pull/752) Increase max retries for tests, so they pass locally ([@yurynix](https://github.com/yurynix))
- `jest-environment-yoshi-puppeteer`, `yoshi-helpers`, `yoshi`
  - [#840](https://github.com/wix/yoshi/pull/840) Fix killing of server process and its children, for travis-ci ([@yanivefraim](https://github.com/yanivefraim))

## 3.21.0 (2018-11-21)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#837](https://github.com/wix/yoshi/pull/837) Migrate templates to scoped packages ([@Schniz](https://github.com/Schniz))

#### :bug: Bug Fix

- `yoshi`
  - [#836](https://github.com/wix/yoshi/pull/836) Remove update-node-version task #645 ([@andriuss](https://github.com/andriuss))
- `yoshi-helpers`, `yoshi`
  - [#835](https://github.com/wix/yoshi/pull/835) Ignore ssl errors when proxying requests to the local cdn ([@netanelgilad](https://github.com/netanelgilad))
- `jest-environment-yoshi-puppeteer`, `yoshi`
  - [#834](https://github.com/wix/yoshi/pull/834) Merge user defined puppeteer args with default args ([@netanelgilad](https://github.com/netanelgilad))

#### :house: Internal

- `create-yoshi-app`, `eslint-config-yoshi-base`, `tslint-config-yoshi-base`, `yoshi-helpers`, `yoshi`
  - [#816](https://github.com/wix/yoshi/pull/816) Add no-extraneous-dependencies to eslintrc ([@netanelgilad](https://github.com/netanelgilad))
- Other
  - [#826](https://github.com/wix/yoshi/pull/826) Improve test:app-flow infra ([@ronami](https://github.com/ronami))
  - [#838](https://github.com/wix/yoshi/pull/838) Install chrome on travis ([@ranyitz](https://github.com/ranyitz))
- `jest-environment-yoshi-puppeteer`
  - [#832](https://github.com/wix/yoshi/pull/832) fix `cdnProxy.stop` method - wait for `closeProxy` to be resolved ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi`
  - [#801](https://github.com/wix/yoshi/pull/801) Log test execution output if the test failed ([@netanelgilad](https://github.com/netanelgilad))

## 3.20.3 (2018-11-20)

#### :bug: Bug Fix

- `yoshi`
  - [#831](https://github.com/wix/yoshi/pull/831) Remove forward proxy from protractor ([@ranyitz](https://github.com/ranyitz))

#### :memo: Documentation

- [#812](https://github.com/wix/yoshi/pull/812) Mention tags used for changelog in contributing guide ([@yurynix](https://github.com/yurynix))

#### :house: Internal

- `yoshi`
  - [#827](https://github.com/wix/yoshi/pull/827) Fix puppeteer on travis ci ([@yanivefraim](https://github.com/yanivefraim))
- Other
  - [#825](https://github.com/wix/yoshi/pull/825) Add version_N.x branches to travis-ci ([@yanivefraim](https://github.com/yanivefraim))
  - [#824](https://github.com/wix/yoshi/pull/824) Fix travis to work with puppeteer ([@yanivefraim](https://github.com/yanivefraim))
- `create-yoshi-app`
  - [#814](https://github.com/wix/yoshi/pull/814) Mock `verifyRegistry` for unit tests ([@yanivefraim](https://github.com/yanivefraim))

## 3.20.2 (2018-11-19)

#### :bug: Bug Fix

- `yoshi`
  - [838e013](https://github.com/wix/yoshi/commit/838e0136e203ac903512f89173d521486b58d0fe) Fix version of `uglifyjs-webpack-plugin` ([@netanelgilad](https://github.com/netanelgilad))

## 3.20.1 (2018-11-19)

#### :bug: Bug Fix

- `yoshi`
  - [#810](https://github.com/wix/yoshi/pull/810) Add `uglifyjs-webpack-plugin` as a dependency ([@netanelgilad](https://github.com/netanelgilad))

## 3.20.0 (2018-11-19)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#766](https://github.com/wix/yoshi/pull/766) Add platform app generator ([@yairhaimo](https://github.com/yairhaimo))

#### :bug: Bug Fix

- `jest-environment-yoshi-puppeteer`, `yoshi-helpers`, `yoshi`
  - [#735](https://github.com/wix/yoshi/pull/735) Start a forward proxy to intercept public cdn requests to the local cdn ([@netanelgilad](https://github.com/netanelgilad))
- `jest-yoshi-preset`, `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#787](https://github.com/wix/yoshi/pull/787) Fix puppeteer cdn issue ([@netanelgilad](https://github.com/netanelgilad))
  - [#775](https://github.com/wix/yoshi/pull/775) Starting cdn when e2e exists ([@amiryonatan](https://github.com/amiryonatan))
- `yoshi`
  - [#771](https://github.com/wix/yoshi/pull/771) Watch public dir during start and sync the static dir with changes ([@ronami](https://github.com/ronami))

#### :nail_care: Polish

- Other
  - [#786](https://github.com/wix/yoshi/pull/786) prettier all the markdown files ([@Schniz](https://github.com/Schniz))
- `yoshi-config`, `yoshi`
  - [#780](https://github.com/wix/yoshi/pull/780) Change the public dir from public to src/assets ([@ronami](https://github.com/ronami))

#### :memo: Documentation

- [#783](https://github.com/wix/yoshi/pull/783) Use headlines instead of table for start options ([@yurynix](https://github.com/yurynix))

#### :house: Internal

- Other
  - [#809](https://github.com/wix/yoshi/pull/809) Add tests to travis-ci ([@yanivefraim](https://github.com/yanivefraim))
  - [#799](https://github.com/wix/yoshi/pull/799) Run lint on a separate command (for PR CI) ([@ronami](https://github.com/ronami))
  - [#789](https://github.com/wix/yoshi/pull/789) prettify markdowns pre-commit hook ([@Schniz](https://github.com/Schniz))
- `create-yoshi-app`, `yoshi`
  - [#777](https://github.com/wix/yoshi/pull/777) Testing infra for experimental server bundle ([@ronami](https://github.com/ronami))
- `create-yoshi-app`, `eslint-config-yoshi-base`
  - [#804](https://github.com/wix/yoshi/pull/804) Run eslint on website/templates instead of ignoring them ([@ronami](https://github.com/ronami))
- `eslint-config-yoshi-base`
  - [#802](https://github.com/wix/yoshi/pull/802) Fix failing eslint tests ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#795](https://github.com/wix/yoshi/pull/795) better testing infrastructure ([@ranyitz](https://github.com/ranyitz))
  - [#782](https://github.com/wix/yoshi/pull/782) Tell mocha to retry only on CI ([@yurynix](https://github.com/yurynix))
- `create-yoshi-app`, `eslint-config-yoshi-base`, `tslint-config-yoshi-base`, `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#791](https://github.com/wix/yoshi/pull/791) Improve testing infrastructure ([@ronami](https://github.com/ronami))

## 3.19.3 (2018-11-13)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#761](https://github.com/wix/yoshi/pull/761) Pin component libraries templates `storybook` version to `alpha.14` for usage with `react@15` ([@Schniz](https://github.com/Schniz))
- `yoshi`
  - [#770](https://github.com/wix/yoshi/pull/770) Fix yoshi not outputting verbose errors on CI ([@netanelgilad](https://github.com/netanelgilad))

#### :nail_care: Polish

- `bootstrap-hot-loader`
  - [#773](https://github.com/wix/yoshi/pull/773) Add basic types to bootstrap-hot-loader ([@ronami](https://github.com/ronami))

#### :house: Internal

- `create-yoshi-app`
  - [#769](https://github.com/wix/yoshi/pull/769) Improve e2e errors by using `it` instead of `before` ([@netanelgilad](https://github.com/netanelgilad))

## 3.19.2 (2018-11-12)

#### :bug: Bug Fix

- `yoshi`
  - [#754](https://github.com/wix/yoshi/pull/754) Run two different typescript type checks ([@ronami](https://github.com/ronami))

#### :house: Internal

- `yoshi`
  - [#758](https://github.com/wix/yoshi/pull/758) A small refactor - remove of a redundant helper function ([@yanivefraim](https://github.com/yanivefraim))

## 3.19.1 (2018-11-11)

#### :bug: Bug Fix

- `yoshi`
  - [#699](https://github.com/wix/yoshi/pull/699) Serve JS files on CDN with proper content type ([@yurynix](https://github.com/yurynix))

#### :nail_care: Polish

- `yoshi`
  - [#716](https://github.com/wix/yoshi/pull/716) Show a loading indication when starting a local development setup ([@ronami](https://github.com/ronami))

#### :house: Internal

- `yoshi`
  - [#747](https://github.com/wix/yoshi/pull/747) Fix flaky tests related to `yoshi start` ([@ronami](https://github.com/ronami))

## 3.19.0 (2018-11-07)

#### :rocket: New Feature

- `eslint-config-yoshi-base`
  - [#745](https://github.com/wix/yoshi/pull/745) Change prettier errors to warnings instead of errors ([@netanelgilad](https://github.com/netanelgilad))
- `tslint-config-yoshi-base`, `yoshi`
  - [#746](https://github.com/wix/yoshi/pull/746) Yoshi lint will exit cleanly on tslint warnings and will warn on prettier errors ([@netanelgilad](https://github.com/netanelgilad))

#### :bug: Bug Fix

- `yoshi-helpers`, `yoshi`
  - [#736](https://github.com/wix/yoshi/pull/736) Check existence of `tsconfig.json` for TypeScript project detection ([@Schniz](https://github.com/Schniz))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#732](https://github.com/wix/yoshi/pull/732) Ddd links for bootstrap middlewares documentation ([@ranyitz](https://github.com/ranyitz))

## 3.18.3 (2018-11-05)

#### :bug: Bug Fix

- `jest-environment-yoshi-bootstrap`
  - [#731](https://github.com/wix/yoshi/pull/731) When generating a port, kill the process that runs a server on that port to make sure the port is available ([@ranyitz](https://github.com/ranyitz))

## 3.18.2 (2018-11-04)

#### :bug: Bug Fix

- `yoshi`
  - [#713](https://github.com/wix/yoshi/pull/713) Upgrade `react-dev-utils` minimum version to provide `typescriptFormatter` ([@ranyitz](https://github.com/ranyitz))

## 3.18.1 (2018-11-01)

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#710](https://github.com/wix/yoshi/pull/710) Fix generation of projects into custom dirs ([@netanelgilad](https://github.com/netanelgilad))

## 3.18.0 (2018-11-01)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#688](https://github.com/wix/yoshi/pull/688) Validate @wix email on project generation ([@netanelgilad](https://github.com/netanelgilad))
  - [#610](https://github.com/wix/yoshi/pull/610) Sort projects by priority ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi`
  - [#692](https://github.com/wix/yoshi/pull/692) Write client files to the file system and show them nicely via `serve-handler` ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `jest-environment-yoshi-puppeteer`
  - [#706](https://github.com/wix/yoshi/pull/706) Add `globby` as dependency ([@yakirn](https://github.com/yakirn))
- Other
  - [#698](https://github.com/wix/yoshi/pull/698) Support `splitChunks: true` in Yoshi config schema ([@netanelgilad](https://github.com/netanelgilad))

#### :nail_care: Polish

- `yoshi`
  - [#691](https://github.com/wix/yoshi/pull/691) Transpile server bundle to Node version 8 ([@ronami](https://github.com/ronami))
  - [#693](https://github.com/wix/yoshi/pull/693) Run `fork-ts-checker-webpack-plugin` only once ([@ronami](https://github.com/ronami))
  - [#695](https://github.com/wix/yoshi/pull/695) Format TypeScript errors with `react-dev-utils` ([@ronami](https://github.com/ronami))

## 3.17.0 (2018-10-29)

#### :rocket: New Feature

- `yoshi`
  - [#683](https://github.com/wix/yoshi/pull/683) Print error messages and add verbose flag for full stacktrace ([@netanelgilad](https://github.com/netanelgilad))
  - [#677](https://github.com/wix/yoshi/pull/677) Look for a `dev-server` entry if the standard server entry isn't found ([@ronami](https://github.com/ronami))

#### :bug: Bug Fix

- `jest-environment-yoshi-puppeteer`
  - [#678](https://github.com/wix/yoshi/pull/678) Remove `headless: true` default from `puppeteer.launch` call ([@ronami](https://github.com/ronami))
- `yoshi-config`
  - [#682](https://github.com/wix/yoshi/pull/682) Fix async function type checking bug by using `ajv` instead of `jest-validate` to validate jest config ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#679](https://github.com/wix/yoshi/pull/679) Handle `dep-check` errors on build ([@netanelgilad](https://github.com/netanelgilad))

#### :memo: Documentation

- [#680](https://github.com/wix/yoshi/pull/680) Move the docs for `babel-preset-yoshi` and `jest-yoshi-preset` to the docs website ([@ronami](https://github.com/ronami))

## 3.16.3 (2018-10-25)

#### :bug: Bug Fix

- `jest-environment-yoshi-bootstrap`, `jest-yoshi-preset`
  - [#669](https://github.com/wix/yoshi/pull/669) Run jest yoshi config inside Jest's vm so transforms/console are used correctly ([@ronami](https://github.com/ronami))

## 3.16.1 (2018-10-24)

#### :bug: Bug Fix

- `yoshi`
  - [#656](https://github.com/wix/yoshi/pull/656) Show long class names in Storybook ([@muteor](https://github.com/muteor))
  - [#667](https://github.com/wix/yoshi/pull/667) Enable using a different test runner in Karma configuration ([@ranyitz](https://github.com/ranyitz))
  - [#665](https://github.com/wix/yoshi/pull/665) Support `externals` configuration when using Karma (`specs.bundle`) ([@eddierl](https://github.com/eddierl))
  - [#666](https://github.com/wix/yoshi/pull/666) Enable using different browsers in Karma configuration ([@eddierl](https://github.com/eddierl))

#### :memo: Documentation

- Other
  - [#664](https://github.com/wix/yoshi/pull/664) Update contributing "Local Testing" section + arrange scripts alphabetically ([@ranyitz](https://github.com/ranyitz))
  - [#655](https://github.com/wix/yoshi/pull/655) Add `svg2react-icon` tool to svg docs ([@bildja](https://github.com/bildja))
- `jest-yoshi-preset`
  - [#649](https://github.com/wix/yoshi/pull/649) Add `jest-yoshi` setup files documentation ([@saarkuriel](https://github.com/saarkuriel))

#### :house: Internal

- `create-yoshi-app`, `yoshi`
  - [#612](https://github.com/wix/yoshi/pull/612) Sentry error reporting ([@netanelgilad](https://github.com/netanelgilad))

## 3.16.0 (2018-10-17)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#644](https://github.com/wix/yoshi/pull/644) Add `.editorconfig` to all templates ([@netanelgilad](https://github.com/netanelgilad))

#### :bug: Bug Fix

- `yoshi`
  - [#648](https://github.com/wix/yoshi/pull/648) Copy `.ejs`/`.vm` files to `dist/statics` in experimental server bundle ([@ronami](https://github.com/ronami))
  - [#635](https://github.com/wix/yoshi/pull/635) Redirect `.min` assets to non min assets in start-app ([@ronami](https://github.com/ronami))
- `create-yoshi-app`
  - [#633](https://github.com/wix/yoshi/pull/633) Fix generated `launch.json` for VSCode across templates ([@netanelgilad](https://github.com/netanelgilad))

#### :nail_care: Polish

- `yoshi`
  - [#647](https://github.com/wix/yoshi/pull/647) Update `rtlcss-webpack-plugin` version ([@netanelgilad](https://github.com/netanelgilad))

#### :memo: Documentation

- [#643](https://github.com/wix/yoshi/pull/643) Change readme to latest changes, make it more informative ([@ronami](https://github.com/ronami))

#### :house: Internal

- Other
  - [#640](https://github.com/wix/yoshi/pull/640) Run only publish ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#638](https://github.com/wix/yoshi/pull/638) Improve e2e tests by emulating production installations ([@ronami](https://github.com/ronami))
  - [#639](https://github.com/wix/yoshi/pull/639) Verify each package's publishConfig to prevent redundant publishes to public npm ([@ronami](https://github.com/ronami))

## 3.15.5 (2018-10-15)

#### :bug: Bug Fix

- `jest-yoshi-preset`
  - [#637](https://github.com/wix/yoshi/pull/637) Use the new `@stylable` dependencies ([@shlomitc](https://github.com/shlomitc))

## 3.15.4 (2018-10-14)

#### :nail_care: Polish

- `yoshi`
  - [#627](https://github.com/wix/yoshi/pull/627) Use relative public path in css `url()` calls ([@ranyitz](https://github.com/ranyitz))
- Other
  - [#629](https://github.com/wix/yoshi/pull/629) Fix link path in api configurations docs ([@lbelinsk](https://github.com/lbelinsk))

#### :memo: Documentation

- [#632](https://github.com/wix/yoshi/pull/632) Fix docs for configuring debugging in vscode ([@netanelgilad](https://github.com/netanelgilad))

#### :house: Internal

- [#634](https://github.com/wix/yoshi/pull/634) Simplify publish script ([@ranyitz](https://github.com/ranyitz))

## 3.15.3 (2018-10-11)

#### :house: Internal

- `yoshi`
  - [#486](https://github.com/wix/yoshi/pull/486) Upgrade stylable to new scoped package ([@tomrav](https://github.com/tomrav))

## 3.15.2 (2018-10-10)

#### :bug: Bug Fix

- `yoshi`
  - [#623](https://github.com/wix/yoshi/pull/623) Fix wallaby babel ([@netanelgilad](https://github.com/netanelgilad))
  - [#626](https://github.com/wix/yoshi/pull/626) Fix debugging of jest tests ([@netanelgilad](https://github.com/netanelgilad))

#### :nail_care: Polish

- `yoshi`
  - [#624](https://github.com/wix/yoshi/pull/624) Further simplify `wallabyCommon.tests` by using unshift ([@splintor](https://github.com/splintor))

## 3.15.1 (2018-10-10)

#### :nail_care: Polish

- `yoshi`
  - [#622](https://github.com/wix/yoshi/pull/622) Simplify `wallabyCommon.tests` update in wallaby-mocha.js ([@splintor](https://github.com/splintor))

#### :bug: Bug Fix

- `yoshi`
  - [2d31fdd](https://github.com/wix/yoshi/commit/2d31fdd678e5cbf87d05cfbc5ab6a762b6960c9d) Fix a bug that caused Yoshi to crash if TypeScript was not installed ([@ronami](https://github.com/ronami))

## 3.15.0 (2018-10-09)

#### :rocket: New Feature

- `bootstrap-hot-loader`, `create-yoshi-app`, `yoshi-config`, `yoshi`
  - [#586](https://github.com/wix/yoshi/pull/586) Server-side bundle experimental feature ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#618](https://github.com/wix/yoshi/pull/618) Forward options after `--jest` to jest bin ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `create-yoshi-app`, `yoshi`
  - [#619](https://github.com/wix/yoshi/pull/619) Fix wallaby configuration when working with `jest` ([@netanelgilad](https://github.com/netanelgilad))
- `yoshi-config`, `yoshi`
  - [#620](https://github.com/wix/yoshi/pull/620) Change the stats file destination to `target` instead of `dist` ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi`
  - [#621](https://github.com/wix/yoshi/pull/621) Remove the duplicate package checker plugin ([@ranyitz](https://github.com/ranyitz))

## 3.14.2 (2018-10-09)

#### :bug: Bug Fix

- `yoshi`
  - [#617](https://github.com/wix/yoshi/pull/617) Fix a bug when using `--stats` option and stats files was not written ([@ronenst](https://github.com/ronenst))
  - [#616](https://github.com/wix/yoshi/pull/616) [eslint] Log warnings to the console if there are only warnings ([@ranyitz](https://github.com/ranyitz))
  - [#614](https://github.com/wix/yoshi/pull/614) [tslint] Use `yoshi lint <files>` filter on top of the files specified in `tsconfig` ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `create-yoshi-app`
  - [#615](https://github.com/wix/yoshi/pull/615) Improve Lint on typescript templates ([@ranyitz](https://github.com/ranyitz))
    - Ignore `d.ts` files on the `lint-staged` config
    - Include `*.spec.tsx` files on the default `tsconfig.json`

#### :house: Internal

- `yoshi-config`
  - [#613](https://github.com/wix/yoshi/pull/613) Remove unused config options (`isUniversalProject`, `isEsModule`) ([@ronami](https://github.com/ronami))

## 3.14.1 (2018-10-03)

#### :bug: Bug Fix

- `yoshi`
  - [#609](https://github.com/wix/yoshi/pull/609) Fix Karma bundle failing if it tries to access native Node modules ([@netanelgilad](https://github.com/netanelgilad))

## 3.14.0 (2018-10-03)

#### :bug: Bug Fix

- `yoshi-helpers`
  - [#607](https://github.com/wix/yoshi/pull/607) Bring back `mergeByConcat` function ([@ranyitz](https://github.com/ranyitz))
- `yoshi`
  - [#573](https://github.com/wix/yoshi/pull/573) Enable opt-in to build with `devtool: source-map` ([@netanelgilad](https://github.com/netanelgilad))

#### :nail_care: Polish

- [#606](https://github.com/wix/yoshi/pull/606) add npm version badge ([@netanelgilad](https://github.com/netanelgilad))

#### :house: Internal

- `jest-environment-yoshi-bootstrap`, `jest-environment-yoshi-puppeteer`, `jest-yoshi-preset`, `yoshi-helpers`, `yoshi`
  - [#608](https://github.com/wix/yoshi/pull/608) Use exact versions for inner cross dependencies ([@ranyitz](https://github.com/ranyitz))

## 3.13.1 (2018-10-02)

#### :bug: Bug Fix

- `yoshi-helpers`, `yoshi`
  - [#602](https://github.com/wix/yoshi/pull/602) Create webpack's public path only in case there is a `pom.xml` file ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- [#601](https://github.com/wix/yoshi/pull/601) Fix broken link to bundle analysis guide ([@ronenst](https://github.com/ronenst))
- [#603](https://github.com/wix/yoshi/pull/603) Fix broken link to images on `debugging.md` ([@sidoruk-sv](https://github.com/sidoruk-sv))

## 3.13.0 (2018-10-02)

#### :rocket: New Feature

- `yoshi`
  - [#582](https://github.com/wix/yoshi/pull/582) Process `unprocessedModules` with graphql loader ([@eddierl](https://github.com/eddierl))
- `yoshi-config`, `yoshi`
  - [#591](https://github.com/wix/yoshi/pull/591) Add `--stats` flag to generate `dist/webpack-stats.json` ([@ronenst](https://github.com/ronenst))

#### :bug: Bug Fix

- `create-yoshi-app`
  - [#597](https://github.com/wix/yoshi/pull/597) Add dynamic `%organization%` into some of `pom.xml` templates ([@sidoruk-sv](https://github.com/sidoruk-sv))

## 3.12.0 (2018-10-02)

#### :rocket: New Feature

- [#594](https://github.com/wix/yoshi/pull/594) Integrate algolia search ([@ranyitz](https://github.com/ranyitz))
- [#590](https://github.com/wix/yoshi/pull/590) Initial documentation site ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi-config`, `yoshi`
  - [#593](https://github.com/wix/yoshi/pull/593) Fix webpack's public path for local development ([@ranyitz](https://github.com/ranyitz))
- `create-yoshi-app`
  - [#596](https://github.com/wix/yoshi/pull/596) Add @types/node version 8 as version 10 clashes with typescript ([@ranyitz](https://github.com/ranyitz))
- `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#592](https://github.com/wix/yoshi/pull/592) Change `xml2js` with `xmldoc` and compute artifact id from `pom.xml` ([@ranyitz](https://github.com/ranyitz))
- `babel-preset-yoshi`
  - [#585](https://github.com/wix/yoshi/pull/585) Do not transpile dynamic imports only when used in webpack ([@ranyitz](https://github.com/ranyitz))

#### :nail_care: Polish

- `yoshi`
  - [#588](https://github.com/wix/yoshi/pull/588) Prefer local yoshi installation when using CLI ([@yanivefraim](https://github.com/yanivefraim))
- `yoshi-helpers`, `yoshi`
  - [#584](https://github.com/wix/yoshi/pull/584) Show a warning when the user tries to run e2e tests but there is no bundle built ([@ranyitz](https://github.com/ranyitz))
- `yoshi-helpers`
  - [#579](https://github.com/wix/yoshi/pull/579) Upgrade "typescript" peer dependency version to also accept 3^ ([@nktssh](https://github.com/nktssh))

#### :house: Internal

- `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#589](https://github.com/wix/yoshi/pull/589) Refactor webpack config to a single file ([@ronami](https://github.com/ronami))

## 3.11.0 (2018-09-16)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#540](https://github.com/wix/yoshi/pull/540) Generate a git repo if needed ([@netanelgilad](https://github.com/netanelgilad))
  - [#537](https://github.com/wix/yoshi/pull/537) Node version verification ([@yairhaimo](https://github.com/yairhaimo))

#### :bug: Bug Fix

- `yoshi-helpers`, `yoshi`
  - [#565](https://github.com/wix/yoshi/pull/565) Generate stats file using BundleAnalyzerPlugin instead of manually ([@netanelgilad](https://github.com/netanelgilad))
- `yoshi`
  - [#566](https://github.com/wix/yoshi/pull/566) Don't show Webpack performance hints by default ([@netanelgilad](https://github.com/netanelgilad))

#### :nail_care: Polish

- `tslint-config-yoshi-base`
  - [#569](https://github.com/wix/yoshi/pull/569) Remove `no-unused-variables` & `strict-type-predicates` tslint rules ([@yairhaimo](https://github.com/yairhaimo))

## 3.10.1 (2018-09-05)

#### :bug: Bug Fix

- `yoshi-helpers`
  - [#564](https://github.com/wix/yoshi/pull/564) Add direct dependency on lodash ([@ronami](https://github.com/ronami))

## 3.10.0 (2018-09-05)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#561](https://github.com/wix/yoshi/pull/561) Simplify local (fake) server for client projects ([@ronami](https://github.com/ronami))

#### :house: Internal

- `eslint-config-yoshi-base`, `jest-environment-yoshi-bootstrap`, `jest-environment-yoshi-puppeteer`, `tslint-config-yoshi-base`, `yoshi-config`, `yoshi-helpers`, `yoshi`
  - [#558](https://github.com/wix/yoshi/pull/558) create new packages `yoshi-config` and `yoshi-helpers` ([@ranyitz](https://github.com/ranyitz))

## 3.9.1 (2018-09-04)

#### :bug: Bug Fix

- `create-yoshi-app`, `yoshi`
  - [#560](https://github.com/wix/yoshi/pull/560) add `universalProject` to configuration schema ([@netanelgilad](https://github.com/netanelgilad))

## 3.9.0 (2018-09-02)

#### :rocket: New Feature

- `create-yoshi-app`
  - [#549](https://github.com/wix/yoshi/pull/549) Simplify server code and add basic annotations to it ([@ronami](https://github.com/ronami))
  - [#556](https://github.com/wix/yoshi/pull/556) Drop explicit Response type in fullstack/TypeScript ([@roymiloh](https://github.com/roymiloh))
  - [#554](https://github.com/wix/yoshi/pull/554) Add `wix-bootstrap-renderer` to fullstack projects ([@roymiloh](https://github.com/roymiloh))
  - [#542](https://github.com/wix/yoshi/pull/542) Simplify i18n setup to use webpack's dynamic imports ([@ronami](https://github.com/ronami))
- `yoshi`
  - [#552](https://github.com/wix/yoshi/pull/552) Cleanup output of build command ([@netanelgilad](https://github.com/netanelgilad))
  - [#555](https://github.com/wix/yoshi/pull/555) Add lerna-changelog for autogeneration of changelog based on PRs from last tag ([@ranyitz](https://github.com/ranyitz))

#### :bug: Bug Fix

- `yoshi`
  - [#550](https://github.com/wix/yoshi/pull/550) Lock wallaby's babel version ([@amitdahan](https://github.com/amitdahan))
- `create-yoshi-app`
  - [#548](https://github.com/wix/yoshi/pull/548) Use template var instead of `package.json` to prevent Lerna from analyzing them ([@ronami](https://github.com/ronami))

## 3.8.1 (Aug 29, 2018)

#### :nail_care: Enhancement

- `yoshi`
  - [#535](https://github.com/wix/yoshi/pull/535) Validate that Yoshi's config is correct before running a command

#### :bug: Bug

- `create-yoshi-app`
  - [#545](https://github.com/wix/yoshi/pull/545) Use files from /src only during test

## 3.8.0 (Aug 27, 2018)

#### :nail_care: Enhancement

- `create-yoshi-app`
  - [#533](https://github.com/wix/yoshi/pull/533) Update typescript generator templates to use version `3.0.1`
  - [#505](https://github.com/wix/yoshi/pull/505) Move client/fullstack generators to use `jest-yoshi-preset`

## 3.7.0 (Aug 23, 2018)

#### :bug: Bug

- `create-yoshi-app`
  - [#511](https://github.com/wix/yoshi/pull/511) Support generating a project in a directory with initialized git repository
  - [#522](https://github.com/wix/yoshi/pull/522) Add `lint-staged` to project templates
- `yoshi`
  - [#522](https://github.com/wix/yoshi/pull/522) Ensure `shouldRunStylelint` before linting specific style files

#### :nail_care: Enhancement

- `yoshi`
  - [#519](https://github.com/wix/yoshi/pull/519) Remove depCheck from start command
  - [#520](https://github.com/wix/yoshi/pull/520) Add enhanced tpa style webpack plugin

#### :house: Internal

- [#517](https://github.com/wix/yoshi/pull/517) Link local packages when running create-yoshi-app e2es

## 3.6.1 (Aug 21, 2018)

#### :bug: Bug

- `create-yoshi-app`
  - [#508](https://github.com/wix/yoshi/pull/508) Fix a bug with generating projects

## 3.6.0 (Aug 21, 2018)

#### :bug: Bug

- `yoshi`
  - [#503](https://github.com/wix/yoshi/pull/503) Allow Wallaby to import json from tests directory as well

#### :nail_care: Enhancement

- `jest-yoshi-preset`
  - [#501](https://github.com/wix/yoshi/pull/501) [#504](https://github.com/wix/yoshi/pull/504) Various fixes and improvements
- `yoshi`
  - [#502](https://github.com/wix/yoshi/pull/502) Add an option to configure Webpack with `umdNamedDefine`

#### :house: Internal

- `yoshi`
  - [#475](https://github.com/wix/yoshi/pull/475) Move depkeeper configuration to `depkeeper-preset-yoshi`
- `create-yoshi-app`
  - [#499](https://github.com/wix/yoshi/pull/499) Add a dev command that enables fun and fast development for the templates of `create-yoshi-app`

## 3.5.0 (Aug 14, 2018)

#### :nail_care: Enhancement

- `jest-yoshi-preset`
  - [#495](https://github.com/wix/yoshi/pull/495) Initial version of `jest-yoshi-preset`

## 3.4.4 (Aug 14, 2018)

#### :bug: Bug

- `create-yoshi-app`
  - [#490](https://github.com/wix/yoshi/pull/490) Fix default global git user config
- `yoshi`
  - [#496](https://github.com/wix/yoshi/pull/496) Added support for two CLI options when using Jest: runInBand and forceExit
  - [#497](https://github.com/wix/yoshi/pull/497) Add a unique `jsonpFunction` for each project according to project name

## 3.4.3 (Aug 7, 2018)

#### :bug: Bug

- `create-yoshi-app`
  - [#478](https://github.com/wix/yoshi/pull/478) Add Support for `git`'s include directive
  - [#474](https://github.com/wix/yoshi/pull/482) Fix a bug where choosing `node-library` option resulted in an empty project
- `yoshi`
  - [#483](https://github.com/wix/yoshi/pull/483) Upgrade `externalize-realtive-module-loader` to a version that supports windows

## 3.4.2 (Aug 2, 2018)

- `create-yoshi-app`
  - [#474](https://github.com/wix/yoshi/pull/474) Update post create messages

## 3.4.1 (Aug 1, 2018)

#### :bug: Bug

- `create-yoshi-app`
  - [#472](https://github.com/wix/yoshi/pull/472) Fix `create-yoshi-app` bugs:
    - `.gitignore` not generated
    - Wrong file names

## 3.4.0 (Aug 1, 2018)

#### :nail_care: Enhancement

- `yoshi`
  - [#455](https://github.com/wix/yoshi/pull/455) Add (webpack) static public path on CI build time according to the CDN location to support assets management in deployable libraries

## 3.3.1 (Jul 29, 2018)

#### :bug: Bug

- `yoshi`
  - [#469](https://github.com/wix/yoshi/pull/469) Fixed mocha to not throw an error and exit while in watch mode

## 3.3.0 (Jul 26, 2018)

#### :nail_care: Enhancement

- `yoshi`
  - [#458](https://github.com/wix/yoshi/pull/458) Add an option to disable `threadLoader` for typescript projects
  - [#462](https://github.com/wix/yoshi/pull/462) Suppresses warnings that arise from typescript during `build`

## 3.2.1 (Jul 26, 2018)

#### :boom: Breaking Change

- `eslint-config-yoshi`

  - [#461](https://github.com/wix/yoshi/pull/461) Add `wix-style-react` lint rules

- `tslint-config-yoshi`
  - [#461](https://github.com/wix/yoshi/pull/461) Add `wix-style-react` lint rules

## 3.2.0 (Jul 25, 2018)

#### :nail_care: Enhancement

- `yoshi`
  - [#459](https://github.com/wix/yoshi/pull/459) Suppresses warnings that arise from typescript `transpile-only` and reporting types
  - [#460](https://github.com/wix/yoshi/pull/460) Add configuration for `keepFunctionNames` in yoshi config to prevent `uglifyJS` from mangling them

## 3.1.3 (Jul 22, 2018)

#### :bug: Bug

- `yoshi`
  - [#452](https://github.com/wix/yoshi/pull/452) Fix `webpack.config.storybook.js` file sass loader integration.

## 3.1.2 (Jul 19, 2018)

#### :bug: Bug

- `yoshi`
  - [#450](https://github.com/wix/yoshi/pull/450) Fix `globalObject` template to work with dynamic imports.

## 3.1.1 (Jul 17, 2018)

#### :nail_care: Enhancement

- `yoshi`
  - [#419](https://github.com/wix/yoshi/pull/419) Update the version of `wnpm-ci` and add support for `--minor` option

#### :bug: Bug

- `tslint-config-yoshi-base`
  - [#445](https://github.com/wix/yoshi/pull/445) Fix `tslint-config-yoshi-base` failing on VSCode
- `yoshi`
  - [#444](https://github.com/wix/yoshi/pull/444) Fix for HMR settings and support for multiple entries

## 3.1.0 (Jul 16, 2018)

#### :bug: Bug

- `yoshi`

  - [#418](https://github.com/wix/yoshi/pull/418) Always start dev server with `NODE_ENV=development`
  - [#416](https://github.com/wix/yoshi/pull/416) Adjust `externalize-relative-lodash` to windows
  - [#391](https://github.com/wix/yoshi/pull/391) Allow `npm test` and `npm start` run on the same time (`webpack-dev-server` will check if it is already up and won't throw)

- `tslint-config-yoshi-base`

  - [#427](https://github.com/wix/yoshi/pull/427) Add js-rules to TSLint configs
  - [#431](https://github.com/wix/yoshi/pull/431) [#436](https://github.com/wix/yoshi/pull/436) [#437](https://github.com/wix/yoshi/pull/437) Various changes to TSLint rules

- `eslint-config-yoshi-base`
  - [#437](https://github.com/wix/yoshi/pull/437) [#441](https://github.com/wix/yoshi/pull/441) Various changes to ESLint rules

## 3.0.0 (Jul 4, 2018)

#### :nail_care: Enhancement

- `yoshi`

  - [#415](https://github.com/wix/yoshi/pull/415) Allow running `start` (local development) in production mode with `--production`
  - [#414](https://github.com/wix/yoshi/pull/414) Do not run `webpack-dev-server` when there are no e2e test files

- `tslint-config-yoshi-base`
  - [#417](https://github.com/wix/yoshi/pull/417) Configure several TSLint rules to be a bit less strict

## 3.0.0-rc.1 (Jul 2, 2018)

#### :boom: Breaking Change

- `yoshi`

  - [#410](https://github.com/wix/yoshi/pull/410) Configure Jasmine to not run tests randomly and not bail on first failure

- `eslint-config-yoshi-base`

  - [#411](https://github.com/wix/yoshi/pull/411) Add linting rules and globals for testing environments

- `tslint-config-yoshi-base`
  - [#411](https://github.com/wix/yoshi/pull/411) Add linting rules for testing environments

## 3.0.0-rc.0 (Jul 1, 2018)

#### :boom: Breaking Change

- `yoshi`
  - [#401](https://github.com/wix/yoshi/pull/401) Remove `babel-preset-wix` from yoshi's dependencies
  - [#402](https://github.com/wix/yoshi/pull/402) Change emitted `webpack-stats` file names:
    - `webpack-stats.prod.json` => `webpack-stats.min.json`
    - `webpack-stats.dev.json` => `webpack-stats.json`
  - [#402](https://github.com/wix/yoshi/pull/402) `localIdentName` (css modules generated class name) will be short only on minified bundles

#### :house: Internal

- `yoshi`
  - [#402](https://github.com/wix/yoshi/pull/402) Run every command with the proper `NODE_ENV`:
    - build with `NODE_ENV="production"`
    - test with `NODE_ENV="test"`
    - start with `NODE_ENV="development"`

#### :nail_care: Enhancement

- `yoshi`
  - [#398](https://github.com/wix/yoshi/pull/398) In tests, transpile TypeScript for node version 8.x (for example, do not transpile `async`/`await`)
  - [#409](https://github.com/wix/yoshi/pull/409) Optimize TypeScript (loader) for latest Chrome on `start` (local development)
- `babel-preset-yoshi`
  - [#401](https://github.com/wix/yoshi/pull/401) Add support for tree-shaking when using yoshi

## 3.0.0-beta.2 (Jun 25, 2018)

#### :boom: Breaking Change

- `yoshi`
  - [#389](https://github.com/wix/yoshi/pull/389) Remove `protractor` from yoshi's dependencies
  - [#393](https://github.com/wix/yoshi/pull/393) Remove `ng-annotate` and `ng-annotate-loader` from yoshi's dependencies
  - [#394](https://github.com/wix/yoshi/pull/394) By default, `yoshi --karma` works with `Chrome` browser (Instead of `phantomJS`) and `mocha` framework. Meaning that devs that rely on `phantomJS` and configuration like [`phantomjs-polyfill`](https://github.com/tom-james-watson/phantomjs-polyfill) need to configure it for themselves, or migrate to use `Chrome` (recommended)

#### :nail_care: Enhancement

- `yoshi`

  - [#387](https://github.com/wix/yoshi/pull/387) Add support for `prelint` hook.
  - [#384](https://github.com/wix/yoshi/pull/384) Add support for `extend` configuration option.

- `yoshi-angular-dependencies`

  - [#394](https://github.com/wix/yoshi/pull/394) Add a new package that brings `karma`, `ng-annotate`, `protractor` and some plugins for `angular` projects that use `yoshi`.

- `yoshi-style-dependencies`
  - [#392](https://github.com/wix/yoshi/pull/392) Add a new package that brings `css-loader`, `node-sass`, `post-css-loader` and more packages for projects that use `styles`/`css`.

#### :house: Internal

- `yoshi`
  - [#386](https://github.com/wix/yoshi/pull/386) Replace [caporal](https://github.com/mattallty/Caporal.js) with [commander](https://github.com/tj/commander.js) CLI framework to reduce yoshi's install time.

## 3.0.0-beta.1 (Jun 20, 2018)

#### :boom: Breaking Change

- `yoshi`
  - [#381](https://github.com/wix/yoshi/pull/381) Require users to install `node-sass`/`karma` packages if they need them. The purpose is to decrease the `npm install` time for people that don't use the above packages. This is a breaking change for `scss` files or `yoshi test --karma`

## 3.0.0-beta.0 (Jun 13, 2018)

- `yoshi-config-tslint` & `yoshi-config-tslint-base`
  - Various changes to the tslint config:
    - Don't extend the default rules from `tslint-react`
    - Remove various tslint rules from base `tslint` config
    - Don't use recommended rule defaults from `tslint-microsoft-contrib`

## 3.0.0-alpha.12 (Jun 12, 2018)

#### :boom: Breaking Change

- `yoshi`
  - [#354](https://github.com/wix/yoshi/pull/354) Use `tsconfig.json` instead of a glob pattern to determine the files tslint should work on

#### :nail_care: Enhancement

- `eslint-config-yoshi-base`
  - [#350](https://github.com/wix/yoshi/pull/350) Remove `import/first` and `import/no-extraneous-dependencies` warnings
- `tslint-config-yoshi-base`
  - [#360](https://github.com/wix/yoshi/pull/360) New package to lint typescript projects using yoshi
- `tslint-config-yoshi`
  - [#360](https://github.com/wix/yoshi/pull/360) New package to lint typescript & react projects using yoshi

## 3.0.0-alpha.11 (Jun 7, 2018)

#### :boom: Breaking Change

- [#342](https://github.com/wix/yoshi/pull/342) Upgrade jasmine to `v3.1.0`

## 3.0.0-alpha.10 (Jun 5, 2018)

#### :bug: Bug

- [#340](https://github.com/wix/yoshi/pull/340) Fix jasmine base reporter printing

## 3.0.0-alpha.9 (Jun 5, 2018)

#### :nail_care: Enhancement

- [#339](https://github.com/wix/yoshi/pull/339) Support a configuration option to not transpile tests with Babel

## 3.0.0-alpha.8 (Jun 5, 2018)

#### :bug: Bug

- `babel-preset-yoshi`
  - [#334](https://github.com/wix/yoshi/pull/334) Use `{ modules: "commonjs" }` as default to the babel preset

## 3.0.0-alpha.4 (May 30, 2018)

#### :nail_care: Enhancement

- [#317](https://github.com/wix/yoshi/pull/317) Upgrade Jest version from v22 to v23

#### :bug: Bug

- [#316](https://github.com/wix/yoshi/pull/316) Fix various Babel bugs:
  - Use `.deafult` for `babel-plugin-transform-dynamic-import`. [Because of this issue](https://github.com/airbnb/babel-plugin-dynamic-import-node/issues/27)
  - Enable `{ modules: "commonjs" }` by default in `test` environment

## 3.0.0-alpha.3 (May 29, 2018)

#### :bug: Bug

- `babel-preset-yoshi`
  - [#315](https://github.com/wix/yoshi/pull/315) Fix babel preset require error

## 3.0.0-alpha.2 (May 29, 2018)

- `eslint-config-yoshi-base`

  - [#289](https://github.com/wix/yoshi/pull/289) Loosen up `eslint-config-yoshi-base` import rules.
    - Change `import/first` and `import/no-extraneous-dependencies` to warnings (It would be hard to migrate in a big project, but we still want users to be aware of it)
    - Remove `import/no-cycle` (due to its [linting time cost](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md#when-not-to-use-it))

- `babel-preset-yoshi`
  - [#308](https://github.com/wix/yoshi/pull/308) `babel-preset-yoshi` various optimizations and fixes

## 3.0.0-alpha.0 (May 14, 2018)

#### :boom: Breaking Change

- `yoshi`
  - [#284](https://github.com/wix/yoshi/pull/284) Upgrade `jest` version from 20 to 22 and `jest-teamcity-reporter` to 0.9
  - [#282](https://github.com/wix/yoshi/pull/282) Remove `eslint-config-wix` as a dependency, it will not be bundled with yoshi

#### :nail_care: Enhancement

- `yoshi`
  - [#281](https://github.com/wix/yoshi/pull/281) Replace `extract-test-plugin` with `mini-css-extract-plugin` and add `css-hot-loader`. (enable `HMR` for `CSS`)
  - [#282](https://github.com/wix/yoshi/pull/282) Provide `eslint-config-yoshi` & `eslint-config-yoshi-base` with all peer dependencies

## 2.8.2 (Jun 6, 2018)

#### :nail_care: Enhancement

- [#341](https://github.com/wix/yoshi/pull/341) Add `.json` to the list of resolved extensions by Webpack

## 2.12.0 (Jul 3, 2018)

#### :nail_care: Enhancement

- [#413](https://github.com/wix/yoshi/pull/413) Add configuration for Webpack's `resolve.alias` Using Yoshi's `resolveAlias` option

## 2.11.3 (Jul 1, 2018)

#### :bug: Bug

- [#395](https://github.com/wix/yoshi/pull/395) Mocha `--watch` mode do not run the tests after a change in the `dist` directory
- [#408](https://github.com/wix/yoshi/pull/408) Do not fail the build on an older yoshi version.

## 2.11.2 (Jun 24, 2018)

#### :bug: Bug

- [#382](https://github.com/wix/yoshi/pull/382) Fix `start --no-server` work
- [#390](https://github.com/wix/yoshi/pull/390) Drop `petri-specs` convert task

## 2.11.1 (Jun 20, 2018)

#### :bug: Bug

- [#383](https://github.com/wix/yoshi/pull/383) Fix configuration done in [#371](https://github.com/wix/yoshi/pull/371)

## 2.11.0 (Jun 14, 2018)

#### :nail_care: Enhancement

- [#367](https://github.com/wix/yoshi/pull/367) Add support for a new font type (otf)
- [#371](https://github.com/wix/yoshi/pull/371) Configure Stylable with `{ "shortNamespaces": false }` for optimization

## 2.10.1 (Jun 13, 2018)

#### :bug: Bug

- Revert [#364](https://github.com/wix/yoshi/pull/364) as it contains several breaking changes and it will be merged again into `v3.x.x`

## 2.10.0 (Jun 13, 2018)

#### :nail_care: Enhancement

- [#364](https://github.com/wix/yoshi/pull/364) Bump `node-sass` version from `~4.5.3` to `^4.5.3`

## 2.9.0 (Jun 12, 2018)

#### :nail_care: Enhancement

- [#358](https://github.com/wix/yoshi/pull/358) [#361](https://github.com/wix/yoshi/pull/358) Add an option to configure live-reload
- [#352](https://github.com/wix/yoshi/pull/352) Add support for exclude property in `protractor.conf.js`
- [#332](https://github.com/wix/yoshi/pull/332) Add an option to override DEBUG environment parameter in app-server

## 2.8.3 (Jun 7, 2018)

#### :bug: Bug

- [#345](https://github.com/wix/yoshi/pull/345) Revert `esnext` enforced configuration for `ts-loader`.
- [#335](https://github.com/wix/yoshi/pull/335) Support `--debug=0` option (enable debug with auto port generation)

## 2.8.2 (Jun 6, 2018)

#### :nail_care: Enhancement

- [#341](https://github.com/wix/yoshi/pull/341) Add `.json` to the list of resolved extensions by Webpack

## 2.8.1 (May 31, 2018)

#### :bug: Bug

- [#330](https://github.com/wix/yoshi/pull/330) Fix library (UMD) bundles to work when loaded by Node.js and as WebWorkers
- [#329](https://github.com/wix/yoshi/pull/329) Patch stylable to always be part of the app's JavaScript bundle

## 2.8.0 (May 31, 2018)

#### :nail_care: Enhancement

- [#327](https://github.com/wix/yoshi/pull/327) Support `--coverage` option for `test` command
- [#325](https://github.com/wix/yoshi/pull/325) Add stylable support for karma tests
- [#322](https://github.com/wix/yoshi/pull/322) Support tree shaking in TypeScript by:
  - Create an `es` version if a `module` field exist in `package.json`
  - Force TypeScript loader to use `{ module: "esnext" }` to enable tree shaking

## 2.7.0 (May 31, 2018)

#### :bug: Bug

- [#320](https://github.com/wix/yoshi/pull/320) Upgrade `haste` dependencies to version `~0.2.8`

#### :nail_care: Enhancement

- [#319](https://github.com/wix/yoshi/pull/319) Change cdn host to 0.0.0.0 so it will be available from all network interfaces

## 2.6.2 (May 29, 2018)

#### :nail_care: Enhancement

- [#251](https://github.com/wix/yoshi/pull/251) Force `{ module: 'commonjs' }` for TypeScript projects when running tests with `ts-node`

#### :house: Internal

- [#306](https://github.com/wix/yoshi/pull/306) Set Stylable’s `classNameOptimizations` option to `false`
- [#310](https://github.com/wix/yoshi/pull/310) Change `Wix Style React`'s DepKeeper configuration

## 2.6.1 (May 23, 2018)

#### :bug: Bug

- [#302](https://github.com/wix/yoshi/pull/302) Be able to run protractor after mocha/jest

## 2.6.0 (May 22, 2018)

#### :nail_care: Enhancement

- [#291](https://github.com/wix/yoshi/pull/291) Add support for `--debug-brk` option on `test` and `start` commands

## 2.5.1 (May 22, 2018)

#### :bug: Bug

- [#300](https://github.com/wix/yoshi/pull/300) Make tree shaking work with `babel-preset-wix`

## 2.5.0 (May 21, 2018)

#### :nail_care: Enhancement

- [#298](https://github.com/wix/yoshi/pull/298) Support es transpilation also for typescript

#### :bug: Bug

- [#295](https://github.com/wix/yoshi/pull/295) Bump `webpack-hot-client` from `v2.2.0` to `v3.0.0` (fixes hmr multiple entries bug)

## 2.4.1 (May 19, 2018)

- [#296](https://github.com/wix/yoshi/pull/296) Fix es modules readme, upgrade `babel-preset-wix` version to 2.0.0

## 2.4.0 (May 13, 2018)

#### :bug: Bug

- [#274](https://github.com/wix/yoshi/pull/274) Lint fixes for wallaby config
- [#277](https://github.com/wix/yoshi/pull/277) Jest Stylable Transform Fix for Windows

#### :nail_care: Enhancement

- `eslint-config-yoshi-base`
  - [#258](https://github.com/wix/yoshi/pull/258) Has been created and can be used
- `eslint-config-yoshi`
  - [#276](https://github.com/wix/yoshi/pull/276) Has been created and can be used
- `babel-preset-yoshi`
  - [#205](https://github.com/wix/yoshi/pull/205) Has been created and can be used
- `yoshi`
  - [#253](https://github.com/wix/yoshi/pull/253) support nvm version in wallaby

## 2.3.0 (May 9, 2018)

#### :nail_care: Enhancement

- [#264](https://github.com/wix/yoshi/pull/264) Add debug ability for tests and app-server
  - `yoshi test --debug`
  - `yoshi start --debug`

## 2.2.0 (May 9, 2018)

#### :bug: Bug

- Fixate `eslint` version to `4.13.1` in order to be compatible with `eslint-config-wix` (with `babel-eslint` version)

## 2.1.10 (May 8, 2018)

#### :bug: Bug

- [#267](https://github.com/wix/yoshi/pull/267) Update `haste-task-typescript` to support windows
- Remove all `eslint-config-yoshi-base` related dependencies to prevent clash with `eslint-config-wix`

## 2.1.9 (May 8, 2018)

#### :bug: Bug

- Add `eslint-config-wix` to be a dependency of yoshi for backwards compatibility.

## 2.1.7 (May 6, 2018)

#### :nail_care: Enhancement

- [#208](https://github.com/wix/yoshi/pull/208) Add the `--ssl` option to `start` that serves the app bundle on https

#### :bug: Bug

- [#257](https://github.com/wix/yoshi/pull/257) HMR "auto" fallbacks to default entry if non supplied
- [#250](https://github.com/wix/yoshi/pull/250) Fix wallaby-jest to work with Stylable

## 2.1.6 (May 2, 2018)

#### :bug: Bug

- [#237](https://github.com/wix/yoshi/pull/237) Consider the different runtime context for wallaby setup function

#### :house: Internal

- [#243](https://github.com/wix/yoshi/pull/243) Remove custom publish script and use CI's built-in one instead
- Remove a dependency on `semver`
- [#245](https://github.com/wix/yoshi/pull/245) Release script will now exit with status code 0 if running in CI
- [#231](https://github.com/wix/yoshi/pull/231) Add contribution templates for issues and pull requests
- [#246](https://github.com/wix/yoshi/pull/246) Improve test and reduce flakiness by creating symlinks instead of installing specific dependencies
- [#249](https://github.com/wix/yoshi/pull/249) Internal refactor to `protractor.conf.js`

## 2.1.5 (April 29, 2018)

- Internal: [#232](https://github.com/wix/yoshi/pull/232) Better release script for creating new versions
- Internal: [#207](https://github.com/wix/yoshi/pull/207), [#242](https://github.com/wix/yoshi/pull/242) Rewrite build command tests and decrease test time
- [#223](https://github.com/wix/yoshi/pull/223) Documented how to configure Jest
- Update version of `stylable-webpack-plugin` to `1.0.5`
- [#233](https://github.com/wix/yoshi/pull/233) `yoshi info` now displays the project's yoshi config

## 2.1.4 (April 26, 2018)

- Hotfix: fix `stylable-webpack-plugin` to `1.0.4` to prevent runtime error

## 2.1.3 (April 25, 2018)

- [#211](https://github.com/wix/yoshi/pull/211) Yoshi Lint - Add support for file list
- [#228](https://github.com/wix/yoshi/pull/228) Add `yoshi info` command to gather local environment information
- [#229](https://github.com/wix/yoshi/pull/229) Fix `test-setup` and `wallaby-common` paths for wallaby configs

## 2.1.2 (April 24, 2018)

- [#220](https://github.com/wix/yoshi/pull/220) Fix a bug in webpack configuration for karma based projects

## 2.1.1 (April 23, 2018)

- [#216](https://github.com/wix/yoshi/pull/216) Add stylable support for storybook webpack configuration

## 2.1.0 (April 23, 2018)

- [#210](https://github.com/wix/yoshi/pull/210) Add stylable support for webpack using [stylable-webpack-plugin](https://github.com/wix-playground/stylable-webpack-plugin)
- [#209](https://github.com/wix/yoshi/pull/209) Add support for 'it' test suffix for wallaby

## 2.0.0 (April 22, 2018)

- See [migration guide](https://github.com/wix-private/fed-handbook/wiki/Yoshi-2.0#migration-guide)

## 2.0.0-rc.0 (April 18, 2018)

- :house_with_garden: Changes in the code structure, build configuration in CI and release script

## 2.0.0-beta.3 (March 28, 2018)

- [#189](https://github.com/wix/yoshi/pull/189) Add `hmr: "auto"` option, which customizes [webpack HMR](https://webpack.js.org/concepts/hot-module-replacement/) and [react-hot-loader](https://github.com/gaearon/react-hot-loader) automatically
- [#191](https://github.com/wix/yoshi/pull/191) Fix `test-setup` paths for wallaby configs
- [#187](https://github.com/wix/yoshi/pull/187) When compiling ES modules, move styles and assets to `es` directory

## 2.0.0-beta.2 (March 19, 2018)

- **(Breaking)** Remove `haste` as a bin alias, from now on only `yoshi` would be valid bin. (for example `haste start` would not be supported, use `yoshi start` instead)

## 2.0.0-beta.1 (March 19, 2018)

- [#181](https://github.com/wix/yoshi/pull/181) Exclude the following tasks logs:

  1.  `wixUpdateNodeVersion`
  2.  `migrateScopePackages`
  3.  `migrateBowerArtifactory`
  4.  `wixDepCheck`
  5.  `copy-server-assets`
  6.  `copy-static-assets-legacy`
  7.  `copy-static-assets`
  8.  `maven-statics`
  9.  `petri-specs`

- [#182](https://github.com/wix/yoshi/pull/182) Remove `yoshi-utils` as a dev dependency and replace with a local function
- [#183](https://github.com/wix/yoshi/pull/183) Copy `yoshi-runtime` package from original yoshi repository

## 2.0.0-beta.0 (March 15, 2018)

- [#178](https://github.com/wix/yoshi/pull/178) Add ES6 modules support

## 2.0.0-alpha.2 (March 6, 2018)

- [#171](https://github.com/wix/yoshi/pull/171) Update release script to support `old` npm dist-tag
- [#172](https://github.com/wix/yoshi/pull/172) Add `yoshi.config.js` support

## 1.2.0-alpha.1 (March 4, 2018)

- [#169](https://github.com/wix/yoshi/pull/169) Add a custom publish script, the ci will automatically release after changing the version on `package.json`
  - [#157](https://github.com/wix/yoshi/pull/157) Update webpack and related packages:
  - Bump loaders: [css-loader](https://github.com/webpack-contrib/css-loader), [resolve-url-loader](https://github.com/bholloway/resolve-url-loader), [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin), [file-loader](https://github.com/webpack-contrib/file-loader) and [ts-loader](https://github.com/TypeStrong/ts-loader)
    - Replace [happypack](https://github.com/amireh/happypack) with [thread-loader](https://github.com/webpack-contrib/thread-loader) (since it's faster and compatible with webpack 4)
    - Rename `commonsChunk` to `splitChunks` to match webpack's naming
    - Use `splitChunks.chunks: 'all'` by default (see more: [RIP CommonsChunkPlugin](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693))
    - Disable [stylable-loader](github.com/wix/stylable-integration) (since it's incompatible with webpack 4)

## 1.2.1 (April 8, 2018)

start releasing on `yoshi` exclusively, update release script to publish one package, and updated relative paths from `haste-preset-yoshi` to `yoshi`

## 1.2.0 (April 3, 2018)

- [#194](https://github.com/wix/yoshi/pull/194) Stop saving webpack stats on start command

## 1.1.2 (March 27, 2018)

- [#168](https://github.com/wix/yoshi/pull/168) Set default formatter for tslint to `stylish` and add `--format` option for `lint` command

## 1.1.0 (March 25, 2018)

- [#188](https://github.com/wix/yoshi/pull/188) Add option to only separate CSS on production

## 1.0.48 (March 21, 2018)

- [#143](https://github.com/wix/yoshi/pull/143) Add `stylable-integration` require-hooks and transform functions for testing environments (jest + mocha)

## 1.0.47 (March 7, 2018)

- [#176](https://github.com/wix/yoshi/pull/176) Adding `ts` files to the glob pattern provided by `debug/mocha`

## 1.0.46 (March 7, 2018)

- [#177](https://github.com/wix/yoshi/pull/177) Fix: Remove webpack output from `start` & `test` commands

## 1.0.45 (February 21, 2018)

- [#156](https://github.com/wix/yoshi/pull/156) Inline wix tasks instead of using them as external packages
- [#154](https://github.com/wix/yoshi/pull/154) Add `wix-bootstrap-*` to depcheck task

## 1.0.44 (February 18, 2018)

- Start of manual releases (see commit history for changes in previous versions of [yoshi](https://github.com/wix/yoshi))
