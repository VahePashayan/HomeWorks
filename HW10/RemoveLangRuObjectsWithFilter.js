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

let removeRuLangUsers = function (arr) {
    let res = [];
    res = arr.filter(item => item.lang !== "ru");
    return res;
};

console.log(removeRuLangUsers(users));