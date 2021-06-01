let resArr = [];
function removeFirst(arr) {
    if(arr.length <= 1) {
        return resArr;
    }else {
        resArr.push(arr[1]);
        arr.splice(1, 1);
        return removeFirst(arr);
    }
}

console.log(removeFirst([6, 78, "n", 0, 1]));