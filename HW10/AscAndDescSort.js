let sortBy = function (arr, str) {

    if (str === "Desc") {
        return arr.sort((a, b) => b - a);
    }

    return arr.sort((a, b) => a - b);

}

console.log(sortBy([4, 3, 2, 54, 101, 1]));