let inputArray = [1, 2, "abcd", 3, null, "undefined"];

function doForEach( arr, func) {
    for(let i = 0; i < arr.length; i++) {
        const element = arr[i];
        func(element);
    }
};



function plus10(el) {
    console.log(el + 10);
};

console.log(doForEach(inputArray, plus10));

