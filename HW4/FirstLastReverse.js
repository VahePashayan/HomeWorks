let num = 4657389;

let str = num + "";
let first = str.slice(0, 1);
let last = str.slice(str.length - 1);
console.log(last + str.slice(1, str.length - 1) + first);