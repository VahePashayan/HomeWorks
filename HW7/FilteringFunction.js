const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
let filterFalsyValues = (arr) => {
    arr = arr.filter(Boolean)
    return arr;
};

console.log(filterFalsyValues(["hello", 1233, []]));