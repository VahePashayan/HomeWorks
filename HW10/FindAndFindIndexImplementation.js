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

  function doFind(array, searchThis) {
    for (let index = 0; index < array.length; index++) {              //find and findIndex
      const element = array[index];
      if(searchThis(element, index, array)){
        return element.name + " and index: " + index;
      }
    
    }
  }

  function findNameOfElderThan60(item) {
    if(item.age >= 60) {
      return item.name;
    }else {
      return undefined;
    }
  }

console.log(doFind(users, findNameOfElderThan60));
