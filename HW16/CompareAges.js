function Person(name, age) {
    this.name = name;
    this.age = age;
    this.compareAge = function(man) {
        if(this.age < man.age) {
            return `${man.name} is older than me`;
        }else if(this.age > man.age) {
            return `${man.name} is younger than me`; 
        }else {
            return `${man.name} is the same age as me`
        }
    }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

 console.log(p1.compareAge(p2));
 console.log(p2.compareAge(p1));
 console.log(p1.compareAge(p3));

