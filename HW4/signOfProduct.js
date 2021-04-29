let a = 10;
let b = 5;
let c = 3;
let count = 0;

if (a === 0 || b === 0 || c === 0) {
    console.log("undefined")
} else if (a < 0) {
    count++;
} else if (b < 0) {
    count++;
} else if (c < 0) {
    count++;
}
if (count % 2 === 0) {
    console.log("+")
} else {
    console.log("-")
}