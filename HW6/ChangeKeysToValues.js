let inputObj = { a: 1, b: 2, c: 2 };

const changeKeysToValues = function(obj) {
   
    Object.keys(obj).reduce(function(acc, key) {
        
        const value = obj[key];
        acc[value] = acc[value] || [];
        acc[value].push(key);
        return acc;
    }, {});
}

console.log(changeKeysToValues(inputObj));