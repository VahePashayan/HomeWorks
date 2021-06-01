function factorial(n) {
    if(n != 1){ 
        return n * factorial(n - 1)
        // 5 * factorial(4) 120
        // 4 * factorial(3) 24
        // 3 * factorial(2) 6
        // 2 * factorial(1) 2
    }else{
        return 1;
    }
  }
  
console.log( factorial(5) ); 

function sum(arr) {
    if(arr.length === 0) {
        return 0;
    }else {
        return arr[0] + sum(arr.slice(1));
        //[13, 0, 4, 3, 9]
        //13 + sum(arr.slice(1))
        //[0, 4, 3, 9]
        //0 + sum(arr.slice(1))
        //[4, 3, 9]
        //4 + sum(arr.slice(1))
        //[3, 9]
        //3 + sum(arr.slice(1))
        //[9]
        //9 + sum(arr.slice(1))
        //[]
    }
}

console.log(sum([13, 0, 4, 3, 9]));

function fib(n) {
    let arr
    if(n === 1 || n === 2) {
        return 1;
    }else {
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(5));


