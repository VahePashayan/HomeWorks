let strInput = "Wert12lop-12";

let sum = function (str) {
    let pattern = /-?(\d+)*/g;
    let arr = str.match(pattern);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res = res + arr[i]
    };


    console.log(res);
};

sum(strInput);