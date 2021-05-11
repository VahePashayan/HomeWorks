const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];

let filterByField = function (arr, key) {
    let res = [];
    res = arr.filter((item => item[key] === true))
    return res;
};

console.log(filterByField(users, "isAstronaut"));