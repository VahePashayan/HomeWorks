let getBestStudent = function(obj) {
    let max = -Infinity;
    let user
    for(let key in obj) {
        let result = obj[key].reduce((total, el) => total + el);
    
    if(result / obj[key].length > max) {
        max = result;
        user = key
    }
    };

    return user;

};
console.log(getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
    }));
