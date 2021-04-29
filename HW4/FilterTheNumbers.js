let arr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let arrNum = [];
let oddEven = [];
for (let i = 0; i <= arr.length - 1; i++) {
    if(typeof arr[i] === "number") {
        arrNum.push(arr[i]);
    }
}

for(let i = 0; i <= arrNum.length - 1; i++){
    if(arrNum[i] % 2 !== 0) {
        oddEven.push(arrNum[i]);
    }
}
for(let i = 0; i <= arrNum.length - 1; i++){
    if(arrNum[i] % 2 === 0) {
        oddEven.push(arrNum[i]);
    }
}
console.log(oddEven);