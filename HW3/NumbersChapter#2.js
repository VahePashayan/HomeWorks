let max = 10; //created ma and min
let min = 3;

function randomInteger() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

alert(randomInteger());

//(max - min + 1) to find interval between min and max including max.
