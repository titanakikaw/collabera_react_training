// Big O Notation

const arr = [-1, 2, 3, 4, 8, 9, 10];

const length = Math.floor(arr.length / 2);

console.log(length);

// O(1)
console.log(arr[length] === 4);

// 1. sum of each item in array

// big O notation

let result = false;

// O(N*2)
// O(N^2)
// O(N)
// O(LogN) > 1 < N

// O(1)
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  const element = arr[i];
  if (element === 4) {
    result = true;
    break;
  }
}

console.log(result);

let m = 0;
do {
  console.log("hello");
} while (false);

const newArr = [...Array(10000).keys()];

// Heap -> Primitive type of data stored in heap memory
// stack -> Non primitive type data stored in stack
// cache -> programatically we have to do this

console.time("for");
for (let i = 0; i < newArr.length; i++) {}
console.timeEnd("for");

console.time("while");
let j = 0;
while (j < newArr.length) {
  j++;
}
console.timeEnd("while");

console.time("dowhile");
let k = 0;
do {
  k++;
} while (k < newArr.length);
console.timeEnd("dowhile");

console.time("forEach");
newArr.forEach((element) => {});
console.timeEnd("forEach");

// for
// while
// do while
// foreach

// which is the fastest one?

// 1,00,000
