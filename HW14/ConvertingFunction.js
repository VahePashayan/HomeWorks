// function reverseString(s) {
//     typeof s !== "string" ? console.log("s.split is not a function") : (s = s.split("").reverse().join(""));
//     console.log(s);
//     }

let reverseString = function(s) {
    try {
        let res;
        res = s.split("").reverse().join("");
        return res;
    } catch (e) {
        return e;

    }    
};

console.log(reverseString(7))