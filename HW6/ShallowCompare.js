let inputObject1 = { a: 1 };
let inputObject2 = { a: 1 };

let shallowCompare = function(obj1, obj2) {
    let objKeys1 = Object.keys(obj1);
    let objKeys2 = Object.keys(obj2);

    if(objKeys1.length !== objKeys2.length) {
        return false;
    }

    for(let i = 0; i < objKeys1.length; i++) {
        if(objKeys1[i] !== objKeys2[i]) {
            return false;
        }
    }
    return true;
}   

console.log(shallowCompare(inputObject1, inputObject2));