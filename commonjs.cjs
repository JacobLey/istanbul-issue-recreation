'use strict';

module.exports.foo = () => 'foo';

module.exports.bar = (doFoo) => {
    if (doFoo) {
        foo();
    }
    return 'bar';
};
