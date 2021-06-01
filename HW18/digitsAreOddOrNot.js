function oddOrNot(number) {
    let numStr = number.toString();

    if(numStr.length === 1 && numStr[numStr.length - 1] % 2 !== 0) {
        return true;
    }else if(numStr[numStr.length - 1] % 2 === 0) {
        return false;
    }else {
        return oddOrNot(Number((numStr.slice(0, numStr.length - 1))));
    }
}

console.log(oddOrNot(533));