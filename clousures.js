// const calc = (a, b, operation) => {
//     if(operation === '/') {
//         return a  / b
//     }
//     if(operation === '+') {
//         return a + b
//     }
//     if(operation === '-') {
//         return a - b;
//     }
//     if(operation === '*') {
//         return a * b;
//     }
//     return 0;
// }

// console.log(calc(1,2, '*'));

// i can resuse the code
const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(mul(2, 4));

console.log(add(1, 2));

// dont need to change in existing function
// clousure
const calc = (a, b) => {
  return (operation) => {
    return operation(a, b);
  };
};

console.log(calc(1, 2)(add));
console.log(calc(1, 2)(mul));
console.log(calc(1, 2)(div));
