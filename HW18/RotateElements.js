function rotateN(arr, n) {
    if (n === 0) {
        return arr;
    }
    if (n > 0) {
        let shifted = arr.shift();
        arr.push(shifted);
        n -= 1
        return rotateN(arr, n)
    } else if (n < 0) {
        let popped = arr.pop();
        arr.unshift(popped)
        n += 1
        return rotateN(arr, n)
    }
}
console.log(rotateN(["a", "b", "c", "d", "e", "f", "g", "h"], -2));