// map method

// only update current data

const users = [
  {
    name: "Virat",
    age: 30,
    gender: "male",
  },
  {
    name: "Rohit",
    age: 28, //  35
    gender: "male",
  },
  {
    name: "Rishabh",
    age: 25,
    gender: "male",
  },
  {
    name: "Deepika",
    age: 32,
    gender: "female",
  },
  {
    name: "Alia",
    age: 19,
    gender: "female",
  },
];

// profession: "cricketor"
// profession: "actor"

const newUsers = users.map((x) => {
  if (x.name === "Rohit") {
    return { ...x, age: 35 };
  }
  return x;
});

console.log(users);

// const arr = [1,2,3,4,5,6]

// const newArr = arr.map(x => {
//     if(x % 2 === 0) {
//         return x * 2
//     }
//     return x;
// })

// console.log(newArr);
