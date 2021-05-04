let inputArr = [45, 12, 3, 6, 17, 0];
let odd = [];
let even = [];

let oddAndEven = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    console.log(odd, even);
}

oddAndEven(inputArr);