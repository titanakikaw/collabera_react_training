// global scope

// function scope

// Block scope

// this data will be available in entire file
var a = 1;

function test() {
  // function scope
  var b = 2;
}

if (true) {
  // Block scope is not working in Javascript
  var c = 3;
}

console.log(c);
