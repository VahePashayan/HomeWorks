const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];

let calculateAvgAge = function (arr) {
    let avgAge;
    let ages = [];
    ages = arr.map(user => user.age).reduce((total, age) => total + age);
    avgAge = ages / arr.length;
    return avgAge;
};

console.log(calculateAvgAge(users));

