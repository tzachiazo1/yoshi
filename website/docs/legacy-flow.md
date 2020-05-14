---
id: legacy-flow
title: Legacy Flow
sidebar_label: Legacy Flow
---

## CLI

### Global options

#### `--help` ( `-h` )

Output usage information

Default: `./dist/index.js`

#### `--verbose`

Yoshi will print verbose logs and error messages.

Default: `true` in CI

### start

This will run the specified (server) `entryPoint` file and mount a CDN server.

#### options

##### `--entry-point` ( `-e` ) <img src="https://img.shields.io/badge/deprecated-yellow"/>

Entry point for the app.

Default: `index.js`

##### `--server` <img src="https://img.shields.io/badge/deprecated-yellow"/>

> An alias for `entry-point` configuration option.

Entry point for the app server. Supported only by [app flow](app-flow.md).

Default: `index.js`

##### `--manual-restart`

Get SIGHUP on change and manage application reboot manually

Default: `false`

##### `--with-tests`

Spawn `npm test` after start

Default: `false`

##### `--no-server`

Do not spawn the app server

Default: `false`

##### `--debug`

Allow server debugging, debugger will be available at 127.0.0.1:[port]

Default: `0`

##### `--debug-brk`

Allow server debugging, debugger will be available at 127.0.0.1:[port], process won't start until debugger will be attached

Default: `0`

##### `--production`

Start using unminified production build (the tests would not run in this mode)

Default: `0`

The following are the default values for the CDN server's port, mount directory and whether to serve statics over https or regular http. You can change them in your `package.json`:

```json
"yoshi": {
  "servers": {
    "cdn": {
      "port": 3200,
      "dir": "dist/statics",
      "ssl": false
    }
  }
}
```

##### `--url`

> Similar to the `startUrl` configuration option. If both are specified `--url` will be used.

> Note: You can disable browser opening functionality by using `BROWSER=none` env variable.

Opens the browser on a supplied url, also supports multiple urls separated by comma.

Default: `http://localhost:3000`

### build

#### options

##### `--analyze`

run webpack-bundle-analyzer plugin.

##### `--stats`

output webpack stats file to `dist/webpack-stats.json` (see also [bundle analysis](legacy-guides/bundle-analyze.md))|

##### `--source-map`

Explicitly emit bundle source maps.

This task will perform the following:

1. Compile using `TypeScript` (`*.ts`) or `babel` (`*.js`) files into `dist/`.
2. Copy assets to `dist` folder (ejs/html/images...).

You can specify multiple entry points in your `package.json` file. This gives the ability build multiple bundles at once. More info about Webpack entries can be found [here](http://webpack.github.io/docs/configuration.html#entry).

```json
"yoshi": {
  "entry": {
    "a": "./a",
    "b": "./b",
    "c": ["./c", "./d"]
  }
}
```

**Note:** if you have multiple entries you should consider using the [`optimization.splitChunks`](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693)

**Note2:** the decision whether to use `TypeScript` or `babel` is done by searching `tsconfig.json` inside the root directory.

### test

Executes tests using `jest` as default.

#### options

##### `--jest`

Run tests with Jest - this is the default

##### `--mocha`

Run unit tests with Mocha

You can set environment variable `MOCHA_TIMEOUT` to set the timeout for mocha tests.
defaults to 30000ms

##### `--jasmine`

Run unit tests with Jasmine

##### `--karma`

Run tests with Karma (browser)

##### `--protractor`

Run e2e tests with Protractor (e2e)

##### `--watch`

Run tests on watch mode (works for mocha, jasmine, jest & karma)

##### `--debug`

Allow test debugging (works for mocha, jest & protractor)

##### `--debug-brk`

Allow test debugging (works for mocha, jest & protractor), process won't start until debugger will be attached

##### `--coverage`

Collect and output code coverage

#### Examples

- Jest test setup:

  Every other argument you'll pass to `yoshi test` will be forwarded to jest, For example:

  `yoshi test --forceExit foo.spec.js`

  Will run jest on `foo.spec.js` file and will apply [`forceExit`](https://jestjs.io/docs/en/cli#forceexit).

  **Note:** `--debug & --debug-brk` won't be transfer to jest, but instead will be [used in yoshi for test debugging](https://jestjs.io/docs/en/troubleshooting#tests-are-failing-and-you-don-t-know-why)

- Mocha tests setup:

  You can add a `test/mocha-setup.js` file, with mocha tests specific setup. Mocha will `require` this file, if exists.
  Example for such `test/mocha-setup.js`:

  ```js
  import "babel-polyfill";
  import "isomorphic-fetch";
  import sinonChai from "sinon-chai";
  import chaiAsPromised from "chai-as-promised";
  import chai from "chai";

  chai.use(sinonChai);
  chai.use(chaiAsPromised);
  ```

- Karma tests setup:

  When running tests using Karma, make sure you have the right configurations in your `package.json` as described in [`yoshi.specs`](#wixspecs) section. In addition, if you have a `karma.conf.js` file, the configurations will be merged with our [built-in configurations](yoshi/config/karma.conf.js).

- Jasmine tests setup:

  Specifying a custom glob for test files is possible by configuring `package.json` as described in [`yoshi.specs`](#wixspecs). The default glob matches `.spec.` files in all folders.

  If you wish to load helpers, import them all in a file placed at `'test/setup.js'`.

### lint

#### options

##### `--fix`

Automatically fix lint problems

Default: `false`

##### `--format`

Use a specific formatter for eslint/tslint

Default: `stylish`

##### `[files...]`

Optional list of files (space delimited) to run lint on

Default: empty

Executes linters based on the project type:

- [`TSLint`](https://palantir.github.io/tslint/) for TypeScript projects (a `tslint.json` configuration file is required)
- [`ESLint`](https://eslint.org/) for Babel projects (an `.eslintrc` configuration file is required)

### release

#### options

##### `--minor`

bump a minor version instead of a patch

Default: `false`

Bump the patch version in `package.json` using `wnpm-release`. -->

## Configuration

The legacy flow is using [yoshi-config](yoshi-config.md)

## assets folder

`src/assets` or `app/assets`

Every asset inside this folder will be copied to the `dist/statics` folder and will be deploy to the cdn from the CI.

## Writing a library

> NOTE: In case you are writing a new library, please use the [Library Flow](library-flow.md) instead

### Export ES modules along with commonjs?

#### TL;DR

Add `module: 'path/to/entry.js'` in your `package.json`. For typescript project, make sure you have `{"module": "es6"}` in `tsconfig.json`.

#### Why

- bundlers (rollup/webpack) could use ES modules (import/export) to perform tree-shaking.

> When you import a library, you'll end up having all of it in your bundle, even though you use only a small part. The commonly known [`tree-shaking`](https://webpack.js.org/guides/tree-shaking/) is a feature that makes sure unused modules will not be included in your bundle.

- Yoshi (webpack under the hood)[will use `module` field instead of `main`](https://webpack.js.org/guides/author-libraries/#final-steps).
  Yoshi will also use this field to infer whether to create `/es` directory with no modules transformed.

#### How

1. Specify path to your entry file with `module: 'dist/es/src/entry.js'`. Please note that Yoshi will create `es` directory with untranspiled modules near your usual transformation output (`dist/src` and `dist/es/src`).

_package.json_

```json
"module": "dist/es/src/entry.js"
},
"yoshi": {
  "entry": "./entry.js"
}
```

This will create 2 output targets:

```
dist
└── src/entry.js
└── es
     └── src/entry.js
```

**NOTE:** In `pacakge.json`, you can [configure `"sideEffects": false`](https://github.com/webpack/webpack/tree/master/examples/side-effects) and allow webpack to perform tree-shaking on your library when imported to other projects, eg:

```js
import { Button } from "wix-style-react";
```
