let strInput = "Which would be worse - to live as a monster, or to die as a good man?"

let findBiggestWord = function(str) {
    
    let max = -Infinity;
    let maxIndex = 0;
    let arr = str.replaceAll("," , "").split(" ");
    for(let i = 0; i < arr.length; i++) {
        if(max <= arr[i].length) {
            max = arr[i].length;
            maxIndex = i;
        }
    }
    return arr[maxIndex];
}

console.log(findBiggestWord(strInput));