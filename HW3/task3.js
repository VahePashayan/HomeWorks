let a = 10, 
b = 3;
// a = 3, b = 10

let c = 0;
c = a; //c = 3, a = 3, b = 10
a = b; //c = 3, a = 10, b = 10
b = c; //c = 3, a = 10, b = 3

console.log(a);
console.log(b);
