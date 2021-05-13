let inputArray = [1, 2, "abcd", 3, null, "undefined"];

function doForEach( array, func) {
    for(let index = 0; index < array.length; index++) {
        const element = array[index];
        func(element, index, array);
    }
};

function printArray(el, index, array) {
    console.log("Index : " + index + " Value : " + array[index]);
}

function plus10(el) {
    console.log(el + 10);
};

console.log(doForEach(inputArray, plus10));

console.log(doForEach(inputArray, printArray));



