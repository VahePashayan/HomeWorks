class Person {
    constructor (firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }
    
    get firstName () {
        return this._firstName;
    }

    get lastName () {
        return this._lastName;
    }

    get gender () {
        return this._gender;
    }

    get age () {
        return this._age;
    }

    toString = function() {
        return `${this.firstName} ${this.lastName}, ${this.age} years old.`;
    }
}

// let user1 = new Person("Name", "Surname", "female", 23);
// console.log(user1.toString()); // Name Surname, 23 years old.

class Student extends Person {
    constructor(firstName, lastName, gender, age, year, fee, program = []) {
        super(firstName, lastName, gender, age);
        this.year = year;
        this.fee = fee;
        this.program = program;
        this.isAllPassed = false;
    }


    passExam = function(arrOfProgram) {
            if(arrOfProgram.every((item) => item.grade >= 50)) {
                this.year += 1;
                this.isAllPassed = true;
            }
        }
}

let student = new Student("Vahe", "Pashayan", "male", 23, 2, 400000);

console.log(student.year);
console.log(student.isAllPassed);
student.passExam([{ programName: "math", grade: 60 },
{ programName: "english", grade: 70 }]);
console.log(student.year);
console.log(student.isAllPassed);

