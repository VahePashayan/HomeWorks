function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Baby(name, age, favoriteToy) {
    Person.call(this, name, age,);
    this.favoriteToy = favoriteToy;
  }
  
  Baby.prototype = Object.create(Person.prototype);
  Baby.prototype.play = function () {
      console.log(`${this.age} year old ${this.name} is playing with ${this.favoriteToy}`);
  }

let child = new Baby("Ashotik", 1, "tablet"); 

child.play();
