const sum = (function () {
    return function sum(...nums) {
        const args = [...nums];
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3));