function Calculator () {
    this.add = (firstNum, secondNum) => firstNum + secondNum;
    this.subtract = (firstNum, secondNum) => firstNum - secondNum;
    this.multiply = (firstNum, secondNum) => firstNum * secondNum;
    this.divide = (firstNum, secondNum) => firstNum / secondNum;
}

const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));