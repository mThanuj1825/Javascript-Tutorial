const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];
let arr2;

(function () {
    arr2 = [...arr1];
    arr1[0] = "potato";
})();

console.log(arr2);