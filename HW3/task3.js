let a = 10, 
b = 3;
// a = 3, b = 10

let c = 0;
c = a; //c = 10, a = 10, b = 3
a = b; //c = 10, a = 3, b = 3
b = c; //c = 10, a = 3, b = 10

console.log(a);
console.log(b);
