let arr = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];
let max = -Infinity;
let min = Infinity;
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length > max) {
        max = arr[i].length;
    }
    if (arr[i].length < min) {
        min = arr[i].length;
    }
}
console.log(max + min);