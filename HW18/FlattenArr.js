function flatten(arr, res = []) {
    if(arr.length === 0) {
        return res;
    }

    arr.forEach((item) => {
        if(Array.isArray(item)) {
            return flatten(item, res)
        }else {
            res.push(item);
        }
    })

    return res;
}

console.log(flatten([14, [1, [[[3, []]], 1], 0]]));