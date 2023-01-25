// functions are also hoisted
// function overloading is not wokring in javascript

// two challanges
// 1. you should not call function before its declaration
// 2. you should not declare same function name again

// named function
// function add(a, b) {
//     return a + b;
// }

// function add() {
//     return "hacked..."
// }

// anonymous function
// arrow functions are light weighted
const add = (a, b) => a + b;

//  if you have only one parameter then if you dont writer parameter wrapper bracket that is fine
const greet = (name) => `Hello, ${name}`;

console.log(greet("Yagnesh"));

// arrow function
// in advance javascript there are removing function keyword

console.log(add(1, 2));

// write a function which accept name as a parameter and return Hello, name
//  the function should not call before its declration
//  the function should not hacked...

// Convert same function as arrow function
