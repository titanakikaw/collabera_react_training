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
    name: "Taimur",
    age: 08,
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

// return true
// else return false
// O(LogN) best case
// O(N) worst case
const isRohitExist = users.some((x) => x.name === "Rohit");

// return true
// else return false
// O(N) best case
// O(logN) worst case
const isEveryAdult = users.every((x) => x.age >= 18);

console.log(isRohitExist);
console.log(isEveryAdult);

// O(logN)
const rishbhIndex = users.findIndex((x) => x.name === "Rishabh");
const newArr = [
  ...users.slice(0, rishbhIndex),
  ...users.slice(rishbhIndex + 1),
];

// O(N)
const newArr1 = users.filter((x) => x.name !== "Rishabh");

console.log(newArr1);

console.log(newArr);

// ============
// findIndex
// find
// filter
// some
// every
// ============
// return boolean

// map
// reduce

// reutn index of the item
// if record not found then -1
// Complexity O(logN) best case scenario
// O(N) worst case scenario
const rohitIndex = users.findIndex((item) => {
  console.log(item.name);
  // return boolean
  return item.name === "abc";
});

// reutn item
// if record not found then undefined
// Complexity O(logN) best case scenario
// O(N) worst case scenario
const rohitInfo = users.find((item) => {
  console.log(item.name);
  // return boolean
  return item.name === "abc";
});

console.log(rohitInfo);

// return array of item
// if not found then return []
// O(N)
const maleRecords = users.filter((item) => {
  console.log(item.name);
  return item.gender === "male";
});

console.log(maleRecords);
