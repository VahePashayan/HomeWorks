let arr = [1, -19, 30, 4, 6];

let findLargestProduct = (arr) => {
    let maxProduct = -Infinity;
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] * arr[i + 1] > maxProduct) {
            maxProduct = arr[i] * arr[i + 1];
        }
    }
    return maxProduct;
};

console.log(findLargestProduct(arr));