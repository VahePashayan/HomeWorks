const inputArr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

let getSum = function (arr) {
    let res;
    let filtered = [];
    filtered = arr.filter(item => item > 18);
    res = filtered.reduce((total, el) => total + el);
    return res
};

console.log(getSum(inputArr));
