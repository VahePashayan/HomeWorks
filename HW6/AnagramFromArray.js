let inputWord = "pencil";
let arrOfWords = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];

function anagrams(word, arr) {
    const sample = word.split("").sort().join("");
    return arr.filter(item => item.split("").sort().join("") === sample)
       
}
console.log(anagrams(inputWord, arrOfWords));