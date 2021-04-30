let arr = [[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]];
let arrOfSum = [];
let sum = 0;

for(let i = 0; i < arr.length ; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        sum = sum + arr[i][j];
    }
    arrOfSum.push(sum);
    sum = 0;
}

console.log(arrOfSum);