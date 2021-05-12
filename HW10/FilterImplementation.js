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

function doFilter(array, filterFunc) {
    let res = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(filterFunc(element, index, array)) {
            res.push(filterFunc(element));
        }else {
            continue;
        }
    }
    return res;
}

function filterFunc(item) {
    if(item.age < 30) {
        return item;
    }else {
        return undefined;
    }
}

console.log(doFilter(users, filterFunc));