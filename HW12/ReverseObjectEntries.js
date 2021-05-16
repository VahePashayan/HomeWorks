// [ [ 'name', 'Vahe' ], [ 'age', 23 ], [ 'gender', 'male' ] ]

let fromPairs = function (arr) {
    let obj = arr.reduce(function(acc, element) {
        acc[element[0]] = element[1];
        return acc;
    }, {});
    return obj;
};

console.log(fromPairs([ [ 'name', 'Vahe' ], [ 'age', 23 ], [ 'gender', 'male' ] ]))
