//1
 console.log(Number('0x77') === 0x77)       // true     As number() returns number   

//2 
 console.log(Number('077') === 077)     // false        As Number('077') returns 77, and 077 returns 63

//3 
console.log(Number(' 12'))      //12        Number() deletes 0 before number