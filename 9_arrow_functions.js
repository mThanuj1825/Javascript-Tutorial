const myconcat = (a1, a2) => a1.concat(a2);

console.log(myconcat([1, 2], [3, 4, 5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    return arr.filter((n) => {
        return Number.isInteger(n) && n > 0;
    }).map((x) => {
        return x * x;
    });
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);