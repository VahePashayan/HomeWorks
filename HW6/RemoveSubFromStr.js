let string = "This is some text.";
let word = "is";

let remove = function(str, word) {
    str = str.replaceAll(word, "");
    return str;
}

console.log(remove(string, word));