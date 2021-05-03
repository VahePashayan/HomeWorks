//1
 console.log(Number('0x77') === 0x77);       // true     As number() returns number   

//2 
 console.log(Number('077') === 077);     // false        As Number('077') returns 77, and 077 returns 63

//3 
console.log(Number(' 12'));      //12        Number() deletes 0 before number

//4
console.log(isNaN(' '));     //false         As " " = false = 0  

//5 
console.log(+'');        //0         As false and with + becomes 0

//6 
console.log(.1 + .2 == .3);      //false         .1 is the same as 0.1

//7//8 
console.log(9007199254740992 + 1 == 9007199254740992);       //true
console.log(9007199254740992 + 2 == 9007199254740992);       //false

//9//10
console.log(-0 === +0);      // true         //0 === +0 === -0
console.log(0 === -0);       

//11
console.log(1 / "2");        //0.5       As only + operator changed number to string 

//12//13
console.log(1 / 0);          //Infinity
console.log(1 / -0);         //-Infinity

//14
console.log(Infinity / Infinity);        //NaN    

//15 
console.log(0 / 0);         //NaN