let inputArr = [1, 3, 5, 7];

let getSumOfQuadratic = (arr) => {
    let sum = 0;
    arr = arr.filter(item => item % 2 === 0);
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }      
    return sum;  
};



console.log(getSumOfQuadratic(inputArr));