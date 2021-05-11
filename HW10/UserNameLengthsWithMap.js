const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];

let getUserNameLengths = function (arr) {
    let resUserNames = arr.map(item => item.username.length)
    return resUserNames;
};

console.log(getUserNameLengths(users));