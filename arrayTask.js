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

const index = 1;

const newUsers = [
  ...users.slice(0, index),
  { ...users[index], age: 35 },
  ...users.slice(index + 1),
];

console.log(users);
console.log(newUsers);

// immutabally
