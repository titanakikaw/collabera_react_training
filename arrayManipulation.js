const arr = [1, 2, 3, 4, 5, 6];

const [, , ...rest] = arr;

console.log(rest);

const index = 2;

const finalArr = [...arr.slice(0, index), ...arr.slice(index + 1)];

console.log(finalArr);

const newArr = [0, ...arr, 7];

console.log(newArr);

// const list = ["yagnesh", "virar", "rohit", "jose", "xyz"];

// 1. add the "Shikhar" at end
// 2. replace "jose" with "rone"
// 3. add "abc" at index 1

// arr.splice(3,0,8, 9)

arr.splice(2, 2);

console.log(arr);
