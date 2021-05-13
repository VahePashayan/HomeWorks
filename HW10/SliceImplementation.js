let inputArray = [1, 2, "abcd", 3, null, "undefined"];

let doSlice = function (array, startIndex, endIndex) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (endIndex === undefined && startIndex === undefined) {
            res = array;
        } else if (endIndex === undefined && i >= startIndex) {
            res.push(array[i]);
        }
        if (i >= startIndex && i < endIndex) {
            res.push(array[i]);
        }
    };
    return res;
}

console.log(doSlice(inputArray, 2, 5));
console.log(doSlice(inputArray));
console.log(doSlice(inputArray, 2));