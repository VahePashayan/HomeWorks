let inputArr = [123, 34, 6, 23];
let sign = prompt("Please write a sign");


let sum = function(arr) {
    let sum = inputArr[0];
    for(let i = 1; i < inputArr.length; i++) {
        sum = sum + inputArr[i];
    }
    return sum;
}

let def = function(arr) {
    let def = inputArr[0];
    for(let i = 1; i < inputArr.length; i++) {
        def = def - inputArr[i];
    }
    return def;
}

let multiple = function(arr) {
    let res = inputArr[0];
    for(let i = 1; i < inputArr.length; i++) {
        res = res * inputArr[i];
    }
    return res;
}

let div = function(arr) {
    let res = inputArr[0];
    for(let i = 1; i < inputArr.length; i++) {
        if(arr[i] === 0) {
            return ("undefined");
            break;
        }
        res = res / inputArr[i];
    }
    return res;
}

switch (sign) {
    case "+":
        console.log(sum(inputArr));
        break;
    case "-":
        console.log(def(inputArr));
        break;
    case "/":
        console.log(div(inputArr));
        break;
    case "*":
        console.log(multiple(inputArr));
        break;
    default:
        alert("Please write one of this these signs: + , - , / , *")
};
