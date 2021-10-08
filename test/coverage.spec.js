'use strict';

const common = require('../commonjs.cjs');
const commonTypescript = require('../dist/common-typescript.cjs');
const typescript = require('../dist/typescript.js');

module.exports.CoverageSpec = {

    success() {
        common.foo();
        common.bar(false);

        commonTypescript.foo();
        commonTypescript.bar(false);

        typescript.foo();
        typescript.bar(false);
    },
};
