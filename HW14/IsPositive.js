let isPositive = function(a) {
    if(a > 0) {
        return "YES";
    }else if(a < 0) {
        throw new Error("Negative ERROR");
    }else {
        throw new Error("Zero ERROR");
    }
};

console.log(isPositive(0));