let inputStr = "23.4abc";
let parsed = "";
for(let i = 0; i < inputStr.length; i++) {
    if(inputStr[i].charCodeAt(0) >= 49 && inputStr[i].charCodeAt(0)) {
        parsed = parsed + inputStr[i];
    }else if(inputStr[i] === " " || inputStr[i] === "0") {
        continue;
    }else {
        break;
    }
}

if(parsed === "") console.log("NaN");
if(parsed[0] === ".") {
    parsed = "0" + parsed;
}
console.log(parsed)
