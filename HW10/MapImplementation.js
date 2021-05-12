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

function doMap(array, mapper) {
    let res = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        res.push(mapper(element, index, array));
    }
    return res;
}

function printTwoTimesDecreasedAges(item) {
    return item.age / 2;
}

console.log(doMap(users, printTwoTimesDecreasedAges));