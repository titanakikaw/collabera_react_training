// var a;
// a = 1;

// function test() {
//   var a;
//   var b;
//   // output
//   console.log(a);
//   undefined;
//   a = 5;
//   b = 10;
//   // output
//   console.log(a);
//   5;
//   // output
//   console.log(b);
//   10;
// }

// test();

var a = 1;

function test() {
  var a = 5;
  function test1() {
    console.log(a);
    a = 10;
    a++;
  }
  console.log(a);
  test1();
}

test();

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
