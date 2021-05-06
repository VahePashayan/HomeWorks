let inputArr = [1, 2, 3, 4 , 5, 6, 8, 9];

let ifUnique = (arr) => {
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length - 1; j++) {
            if(arr[i] === arr[j]) {
                return "Not unique";
            }
        }
    }
    return "Unique";
};


console.log(ifUnique(inputArr));