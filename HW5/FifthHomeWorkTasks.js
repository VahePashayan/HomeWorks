//1
 console.log(Number('0x77') === 0x77)       // true     As number() returns number   

//2 
 console.log(Number('077') === 077)     // false        As Number('077') returns 77, and 077 returns 63

//3 
console.log(Number(' 12'))      //12        Number() deletes 0 before number

//4
console.log(isNaN(' '))     //false         As " " = false = 0  

//5 
console.log(+'')        //0         As false and with + becomes 0

//6 
console.log(.1 + .2 == .3)      //false         .1 is the same as 0.1