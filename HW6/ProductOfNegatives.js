let inputArr = [[3, 4], [11, 0], [5, 6, 7, 8]];
let product = 1;

let productOfNegatives = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(!Array.isArray(arr[i])) {
            return "Invalid Argument";
        }
        let negativeArr = arr[i].filter(item => item < 0);
        if(negativeArr.length === 0) {
            prod = 1;
        }else {
            product = product * Math.max(...negativeArr);
        }
    }
    return product;
}

console.log(productOfNegatives(inputArr)); 