let obj = { a: 1, b: 2, c: 2, d: 2 };

const changeKeysToValues = (obj) =>

    Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        acc[value] = acc[value] || [];
        acc[value].push(key);
        return acc;
    }, {});
    
console.log(changeKeysToValues(obj));