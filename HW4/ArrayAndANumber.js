let arr = [5, 46, 17, -2, 89, 0, 26];
let num = 0;
let min = Math.abs(num - arr[0]);
let index = 0;

for (let i = 1; i <= arr.length - 1; i++) {
    if (min > Math.abs(num - arr[i])) {
        min = Math.abs(num - arr[i]);
        index = i;
    }
}
console.log(index);

