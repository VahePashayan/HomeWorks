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

  let getHead = (array) => {
     return array[0];
  };

  let getTail = (array) => {
    return array.slice(1);   
  };

  console.log(getTail(users));
  console.log(getHead(users));