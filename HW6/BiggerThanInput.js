let inputArr = [1, 1, 2, -3, 0, 8, 4, 0];
let inputNum = 9;
let output = [];

let pushingBiggerNum = function(num, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            output.push(arr[i]);
        }
    }
    if(output.length === 0){
        return "Such values do not exist."
    }
    return output;
}

console.log(pushingBiggerNum(inputNum, inputArr));