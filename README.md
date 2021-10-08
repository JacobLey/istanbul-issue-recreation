# istanbul-issue-recreation

Run `npm i` then `npm test`.

The `test` command will transpile any typescript into the `/dist` directory.

Then it will invoke `nyc mocha`, which runs the test files under `/test`.

`nyc` will then output a coverage report for the files.

Note that any report for `common-typescript.cts` is missing, despite it being executed alongside the other files.

The `/coverage` directory is checked into git to easily preview the issue. See the [index coverage](https://jacobley.github.io/istanbul-issue-recreation/coverage/index.html).

## CTS

The `.cts` extension is new to [typescript 4.5](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#esm-nodejs).

It transpiles to a `.cjs` file, which should be natively handled by `nyc`/`istanbul`.

Source maps are provided to point back to the "real" typescript files.

Note this behavior is fully supported for normal typescript `.ts` files, and coverage for `.cjs` is also supported. So merging those two _should_ be fully supported, but is somehow not.
