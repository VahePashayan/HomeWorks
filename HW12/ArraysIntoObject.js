let zipObject = function(arr1, arr2) {
    let obj = {};
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        const element1 = arr2[index];
        obj[element] = element1;
        if(obj[element] === undefined){
            obj[element] = null;
        }
    }

    return obj;
};


console.log(zipObject(["a", "b", "c", "d", "e"], [1, 2]));