let inputStr = "abcdefghijk";

let ifUnique = (str) => {
    
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length - 1; j++) {
            if(str[i] === str[j]) {
                return "Not isogram";
            }
        }
    }
    return "isogram";
};


console.log(ifUnique(inputStr));