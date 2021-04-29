let arr = [1, 4, " i am a string", "456"];
let countNum = 0;
let countStr = 0;
for (let i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] === "number") {
        countNum++;
    } else {
        countStr++;
    }
}
console.log("Numbers: " + countNum + ", Strings: " + countStr);
