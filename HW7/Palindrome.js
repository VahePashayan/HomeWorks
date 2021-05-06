let str = "asdffdsajh";

let checkPalindrome = (str) => {
    if (str === str.split("").reverse().join("")) {
        return "Is palindrome";
    }else {
        return "Not palindrome";
    }
};

console.log(checkPalindrome(str));