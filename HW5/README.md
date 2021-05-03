# Readme for task #5
## Type Coercion for primitives


### 5.1 Comparisons:

```javascript
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

//16
console.log(+null);         //0         null becomes false = 0;

//17
console.log(+undefined);        //NaN 

//18
console.log(parseInt('.2'));        //NaN       as parseInt doesn't work with floating number

//19 
console.log(parseInt('077a'))       //77        as parseInt deletes 0 before number and string after number

//20 
console.log(parseInt('I’m the best value - said Infinity.'))        //NaN           As there is no number

//21
console.log(parseFloat('12.78ff'))      //12.78         Returns floating number

//22
console.log("" + 1 + 0)         //10            "" makes 1 and 0 strings, but after each other

//23
console.log("" - 1 + 0)         //-1            "" becomes false and then zero

//24
console.log("4px" - 2)          //NaN           as string becomes NaN
```

---

### 5.2 **_parseInt_** and **_parseFloat_** logic implementation:

```javascript
let inputStr = " 2304abc";
let parsed = "";
for(let i = 0; i < inputStr.length; i++) {
    if(inputStr[i].charCodeAt(0) >= 49 && inputStr[i].charCodeAt(0) <= 57 || inputStr[i].charCodeAt(0) === 46) {
        parsed = parsed + inputStr[i];
    }else if(inputStr[i] === " " || inputStr[i] === "0") {
        continue;
    }else {
        break;
    }
}

if(parsed === "") console.log("NaN");
if(parsed[0] === ".") {
    parsed = "0" + parsed;
}
console.log(parsed)

```