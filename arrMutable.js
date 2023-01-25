const arr = [1, 2, 3, 4, 5, 6];

arr.splice(2, 0, 8);

console.log(arr);

// Mutable
// add new item in array
arr.push(7);

console.log(arr);

arr.pop();

console.log(arr);

// never do this
arr.unshift(0);

console.log(arr);

arr.shift();

console.log(arr);

// CRUD Operation

// Mutable

// Immutable
