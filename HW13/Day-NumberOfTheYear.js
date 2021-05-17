let dayOfYear = function(stringDate) {
    let dateArr = stringDate.split("/").map(el => parseInt(el));
    let date = new Date(dateArr[2], dateArr[0] - 1, dateArr[1]);
    let date0 = new Date(dateArr[2], 0, 1);
    let res = date - date0;
    return res / 1000 / 3600 / 24 + 1;
};

console.log(dayOfYear("12/13/2020"))