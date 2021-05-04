let inputWord = "pencil";
let arrOfWords = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];

function anagrams(word, arr) {
    const length = word.length;
    const sample = word.split('').sort().join('');
    return arr.filter(item => item.length === length)
       
}
console.log(anagrams(inputWord, arrOfWords));