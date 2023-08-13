# using nanoid under jest issue

This error isn't really related to ts-jest but it was the easiest way to setup the testing environment, and use jest-environment-jsdom. This makes nanoid use the index.browser.js. This in turn has 'pure-ESM' imports that are not really compatible with jest without further configuration. I would like to not configure jest to transpile nanoid particularly, because I want to ship a library that I would like to use nanoid, but I don't want my users to have to, in turn, configure their jest environments in a custom way


## setup

```
git clone repo
cd repo
yarn
yarn test
```


## error
```

yarn run v1.22.19
warning package.json: No license field
$ jest
 FAIL  src/file.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /home/cdiesh/proj/node_modules/nanoid/index.browser.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export { urlAlphabet } from './url-alphabet/index.js'
                                                                                      ^^^^^^

    SyntaxError: Unexpected token 'export'

    > 1 | import {nanoid} from 'nanoid'
        | ^
      2 |
      3 | export function getNano() {
      4 |   return nanoid()

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1496:14)
      at Object.<anonymous> (src/file.ts:1:1)
      at Object.<anonymous> (src/file.test.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.121 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

## note


this error happens whether nanoid v3 or v4 is used

## question

is the special browser bundle necessary?
