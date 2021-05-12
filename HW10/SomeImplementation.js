const users = [
    {
        name: "Jack Wilshere",
        age: 29,
        gender: "m",
    },
    {
        name: "Eric Cantona",
        age: 54,
        gender: "m",
    },
    {
        name: "Graeme Souness",
        age: 68,
        gender: "m",
    },
    {
        name: "Jack",
        age: 20,
        gender: "m",
    },
    {
        name: "Ann",
        age: 25,
        gender: "f",
    },
];

function doEvery(array, checking) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(checking(element, index, array) === true) {
            return true;
        }
    }
    return false;
}

function checkingFemaleGender(item) {
    if(item.gender === "f") {
        return true;
    }else {
        return false;
    }
}


console.log(doEvery(users, checkingFemaleGender));