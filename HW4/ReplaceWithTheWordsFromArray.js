let sen = "_, we have a _."
let arr = ["Houston", "problem"];

let arrSen = sen.split(" ");
for (let i = 0; i <= arrSen.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
        if (arrSen[i].includes("_")) {
            arrSen[i] = arr[j];
            arr.shift();
        }
    }
}
console.log(arrSen.join(" "));
