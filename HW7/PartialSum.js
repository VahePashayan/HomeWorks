const getSum = (num1) => {
    return (num2) => {
        return num1 + num2;
    }

}

console.log(getSum(1)(2));
const addOne = getSum(1);
console.log(addOne(2));
const addTen = getSum(10);
console.log(addTen(2));
console.log(addOne(4));
console.log(addTen(10));
