let getNumbersArr = function (arr) {
    let res = [];
    res = arr.filter(item =>
        typeof (item) === "number" && !Number.isNaN(item));

    return res;
};

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN]

console.log(getNumbersArr(arr));