// async programing
// from 1 function you can return only one thing
// we cant control function from outside
function* test() {
  try {
    yield 1;
    yield 2;
    yield 3;
    return "done";
  } catch (error) {
    console.log(error);
  }
}

const gen = test();

console.log(gen.next());
console.log(gen.next());
gen.return();
// gen.throw(new Error("error"))
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
