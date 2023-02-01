// const p1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("p1 Resolved");
//         }, 10000)
//     })
// }
// const p2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("p2 Resolved");
//         }, 1000)
//     })
// }
// const p3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("p3 Resolved");
//         }, 2000)
//     })
// }

// const { log } = require("async");



// const data = async () => {
//     try {
//         console.time("promise")
//         const allSettled = await Promise.allSettled([p1]);
//         console.log(allSettled.value)
//         console.time("End promise")
//     } catch (error) {
//         console.log(error)
//     }
// }


//ARRAYS


// FOR COPYING ARRAY TO NEW VARIABLE
// const arr = [1, 2, 3, 4, 5, 6];






// data();
// const arr = [1, 2, 3, 4, 5, 6];

// const [,,,...rest] = arr;   
// console.log(rest)


// const users = [
//     {
//       name: "Virat",
//       age: 30,
//       gender: "male",
//     },
//     {
//       name: "Rohit",
//       age: 28, //  35
//       gender: "male",
//     },
//     {
//       name: "Rishabh",
//       age: 25,
//       gender: "male",
//     },
//     {
//       name: "Taimur",
//       age: 08,
//       gender: "male",
//     },
//     {
//       name: "Deepika",
//       age: 32,
//       gender: "female",
//     },
//     {
//       name: "Alia",
//       age: 19,
//       gender: "female",
//     },
//   ];


//   const sortedUsersByGender = users.reduce((p,c) => {
//     const key = c.gender
//     if(p[key] === undefined){
//         p[key] = [];
//     }
//     p[key].push(c)
//     return p
//   }, {})
//   console.log(sortedUsersByGender)


// const sortedByAge = users.reduce((p, c) => {
//     const rAge = Math.floor( c.age / 10);
//     const key = `${rAge}0 - ${rAge}9`;
//     if(p[key] === undefined){
//         p[key] = [];
//     }

//     p[key].push(c);
//     return p
// }, {})

// console.log(sortedByAge)




  
  // return true
  // else return false
  // O(LogN) best case
  // O(N) worst case
//   const isRohitExist = users.some((x) => x.name === "Rohit");
  
  // return true
  // else return false
  // O(N) best case
  // O(logN) worst case
//   const isEveryAdult = users.every((x) => x.age >= 18);
  
//   console.log(isRohitExist);
//   console.log(isEveryAdult);

//   const rishbhIndex = users.findIndex((x) => x.name === "Rishabh");
//     const newArr = [
//     ...users.slice(0, rishbhIndex),
//     {name : 'test'},
//     ...users.slice(rishbhIndex + 1),
//     ];
// console.log(newArr)

const arr = [9, 2, 3, 4, 5, 6, 7];


// const sum = arr.reduce((p,c) => {
//     return p + c
// }, 0)
// console.log(sum)

// const newArr = [...arr.splice(0,3), 5 , ...arr.splice(1, arr.length)]
// console.log(newArr)

// 1.
// const multiply = (a,b) => a * b
// console.log(multiply(5,5));

// 2.

// let a = 1;
// let b = 2;

// [a,b] = [b,a]
// console.log(a)
// console.log(b)

// 3.
// const reverseString = (string) => { 
//     const reversed = [];
//     for (let index = string.length - 1 ; index >= 0; index--) {
//         const element = string[index];
//         reversed.push(element)
//     }
//     return reversed.join("")
// }
// console.log(reverseString('hello'))


// let a = 4;
// let b = 5;
// a = a + b
// b = a - b
// a = a - b
// console.log(a)
// console.log(b)


// 4.
// const returnCount = (string) => {
//   let ctr = 0;
//   for (let index = 0; index < string.length; index++) {
//     if(index != 0 && index != string.length -1 ){
//         ctr += 1
//     }
//   }
//   return ctr
// } 
// console.log(returnCount("helloworld"))

// 5.
// const concat = (arr) => arr.concat(arr)
// console.log(concat(['a','b']))


// 6.
// const a1 = [1, 2, 3, 4, 5];
// const b1 = [4, 0, 0, 0, 8];

// let a1Center = Math.floor(a1.length / 2);
// let b1Center = Math.floor(a1.length / 2);
// console.log(a1Center)

// const newArr1 = [...a1.splice(0, a1Center - 1  ), 9,9,9 ,...a1.splice(a1Center + 1, a1.length)]
// const newArr2 = [...a1.splice(0, b1Center - 1  ), 9,9,9 ,...a1.splice(b1Center + 1, a1.length)]
// console.log(newArr1)


// 7.
// const books = [
//     { name: "Harry Potter", author: "Joanne Rowling" },
//     { name: "Warcross", author: "Marie Lu" },
//     { name: "The Hunger Games", author: "Suzanne Collins" },
// ]
// const sortedAuthor = books.sort((a,b) => a.author > b.author)
// console.log(sortedAuthor)



// 8.

// const arr2 = [
//     {
//         id: 1,
//         name: 'emp1',
//         rank: 4,
//     },
//     {
//         id: 2,
//         name: 'emp2',
//         rank: 2,
//     },
//     {
//         id: 2,
//         name: 'emp2',
//         rank: 4
//     },
//     {
//         id: 3,
//         name: 'emp3',
//         rank: 3,
//     },
// ];

// ---------right-answer
// const new_Arr2 = arr2.reduce((p, c, index) => {
//     const duplicate = p.find(i => i.id === c.id)
//     if(!duplicate || duplicate.rank < c.rank){
//         p = p.filter((x) => x.name !== c.name)
//         p.push(c)
//     }
//     return p.sort((a,b) => a - b)
// }, [])
// console.log(new_Arr2)
//-----------------------


//--------right but still not enough solution
// const new_Arr2 = arr2.reduce((p, c, index) => {
    
//     const arr3 = p.find((item) => item.id === c.id && c.rank <= item.rank)
    
//     if(!arr3){
//         p.push(c)
//     }
//     return p
// }, [])

// console.log(new_Arr2)
// -------------------------------------------