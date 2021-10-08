export const foo = () => 'foo';

export const bar = (doFoo: boolean) => {
    if (doFoo) {
        foo();
    }
    return 'bar';
};
