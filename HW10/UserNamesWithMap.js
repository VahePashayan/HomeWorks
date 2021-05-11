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

let getUserNames = function(arr) {
    let resUserNames = arr.map(item => item.username)
    return resUserNames;
};

console.log(getUserNames(users));