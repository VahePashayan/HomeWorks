let inputNum = 4593653;
let string = inputNum + "";
let maxDigit = -Infinity;
let minDigit = Infinity;

for(let i = 0; i <= string.length - 1; i++) {
    if(maxDigit < string[i]) {
        maxDigit = string[i];
    }
    if(minDigit > string[i]) {
        minDigit = string[i];
    }
}

console.log(maxDigit - minDigit);