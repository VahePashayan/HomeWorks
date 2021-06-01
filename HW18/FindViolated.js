let counter = 0;
function findViolated(arr) {
    if(arr.length === 1) {
        return -1;
    }
    if(arr[0] <= arr[1]) {
        arr.shift();
        counter++;
        return findViolated(arr);
    }else {
        return counter + 1; 
    }
}

console.log(findViolated([-9, -4, -4, 3, 12, 4, 5]));