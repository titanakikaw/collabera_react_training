const arr = [9, 2, 3, 4, 5, 6, 7];

// const newVal = arr.reduce((p, c) => {
//  console.log(p);
// }, 0)

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
  ,
  {
    name: "Taimiur",
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
  {
    name: "Rekha",
    age: 69,
    gender: "female",
  },
];

const age = Math.floor(35 / 10);

console.log(`${age}0-${age}9`);

//   30-39

//   {
//     00-09: [],
//     10-19: [],
//     20-29: [],
//     30-39: [],
//     60-69: []
//   }

const obj = {};

//   a
console.log(obj["a"]);

obj["a"] = 1;

console.log(obj);

const groupByGender = users.reduce((p, c) => {
  const ag = Math.floor(c.age / 10);
  const key = `${ag}0-${ag}9`;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupByGender);

//   {
//     male: [],
//     female: []
//   }

//   const maleRecords = users.reduce((p, c) => {
//     console.log(p);
//     if(c.gender === "male") {
//         return [...p, c]
//     }
//     return p;
//   }, []);

//   console.log(maleRecords);

// const ageSum = users.reduce((p, c, i) => {
//     if(i + 1 === users.length) {
//         return (p + c.age) / users.length
//     }
//     return p + c.age
// }, 0)

// console.log(ageSum);
// console.log(ageSum/users.length);

//   find avarage age of reduce method

// const rishabhInfo = users.reduce((p, c, index) => {
//     console.log(p);
//     if(c.name === "xz") {
//         return c;
//     }
//     return p;
// });

// console.log(rishabhInfo);

// previous is output of previous iteration
// current is current value of an array
// const sum = arr.reduce((p, c) => p + c, 0)

// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result += element;
// }

// arr.forEach(e => result += e);

// console.log(result);
