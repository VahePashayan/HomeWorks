let min = Infinity;
function findMinPos(arr) {
    if(arr.length === 0) {
        if(min === Infinity) {
            return -1;
        }else {
            return min;
        }   
    }
    if(arr[0] > 0 && arr[0] <= min) {
        min = arr[0];
        arr.shift();
        return  findMinPos(arr);
    }else {
        arr.shift();
        return findMinPos(arr);
    }
}

console.log(findMinPos([56, -9, 87, -23, 0, -105, 55, 1]));