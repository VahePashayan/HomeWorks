let parseInteger = function(arr) {
    let res = arr.map(item => Number.isNaN(parseInt(item)) ? null: parseInt(item));
    return res;
};

console.log(parseInteger(["1", "px", "asdfjasdfh"]));