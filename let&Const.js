// advance Javascript Features

// you cant redeclare same variable name with let
let a = 1;

// but you can reassign the value
a = 2;

console.log(a);

// cant redeclare same variable name
const pi = 3.14;

// cant reassign value
// pi = "hello"

// let and const will work with block scope
if (true) {
  let p = 5;

  const l = 3;
}

// console.log(l);
