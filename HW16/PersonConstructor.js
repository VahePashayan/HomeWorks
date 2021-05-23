function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    this.eat = function (food) {
        if(this.stomach.length < 10) {
            return this.stomach.push(food);
        }
        
    }
    this.poop = function() {    
        return this.stomach.length = [];
    }
    this.toString = function() {
        return `${this.name}, ${this.age}`;
    }
}

let student = new Person("Zhirayr", 41);

student.eat("tolma");
student.eat("lahmajo");
student.eat("shaurma");
student.eat("pipertov sup");
student.eat("cola");
student.eat("pizza");
student.eat("tan");
student.eat("ajarakan khachapuri");
student.eat("burger");
student.eat("coffee");
student.eat("no place to add something");


console.log(student.stomach);
student.poop();
console.log(student.stomach);
console.log(student.toString());
