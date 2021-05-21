let inputString = Number(1234);

let reverseString = function(s) {
    try {
        let res;
        res = s.split("").reverse().join("");
        return res;
    } catch (e) {
        return e;

    }    
};

console.log(reverseString(inputString));

