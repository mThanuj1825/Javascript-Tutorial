let arr = [1, 2, 3, 4, 5];
let item = 6;

function f(arr, item) {
    arr.push(item);
    return arr.shift();
}

console.log(JSON.stringify(arr));

console.log(f(arr, item));

console.log(JSON.stringify(arr));