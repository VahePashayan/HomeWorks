let inputWord = "pencil";
let arrOfWords = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];

function anagrams(word, words) {
    const length = word.length;
    const sample = word.split('').sort().join('');
    return words.filter(w => w.length === length)
        .filter(function (e) {
            return e.split('').sort().join('') === sample;
        })
}
console.log(anagrams(inputWord, arrOfWords));