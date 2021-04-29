let num = 455;
let str = num + "";
let sum = 0;
let prod = 1;

for (let i = 0; i <= str.length - 1; i++) {
    sum = sum + (+str[i]);
    prod = prod * (+str[i]);
}

if (prod % sum === 0) {
    console.log("Quotient is " + prod / sum + ".");
} else if (prod === 0) {
    console.log("Cannot calculate.");
} else {
    console.log("Remainder is " + prod % sum + ".");
}
