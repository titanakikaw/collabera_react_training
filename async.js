// Async Programing

// Javascript Single Threaded Run time
// what is thread?

// Parallel Programing

// all the languages (except Javascript)

// Main thread       // Child thread
// task1(1ms)        // task3(5min)
// task2(1ms)
// task4(1ms)

// Run program faster

// Javascript was only developed for the browser

// Node.js Is using V8 Engine developed by google
// v8 is engine is fasted to execute Javascript code because of there architecture to run async Programing

// Node.js took v8 engine for runtime

// three ways to achieve async Programing

// 1. Callback
// 2. Promises
// 3. Generator

// callback is function which execute after some event

// user generated event
// document.addEventListener("click", () => {
//     // callback function
// })

// time event
// system generated event
setTimeout(() => {}, 0);

//  event occured by process
// event occured throught program

// console.log("Start") // sync code

// system generated event
// async code

// Macro task
// setTimeout(() => {
//     console.log("Timeout!")
//  }, 0)

//  async code
// Micro task
//  Promise.resolve("promise").then(res => console.log('res'))

//  sync code
//  console.log("End")

console.log("s1");

// system generated
// Macro Qu
setTimeout(() => {
  console.log("a1");
}, 0);

//  User generared
// Micro Queue
Promise.resolve("Promise").then((res) => {
  console.log(res);
});

console.log("s2");

setTimeout(() => {
  console.log("a2");
}, 5);

console.log("s3");

setTimeout(() => {
  console.log("a3");
}, 8);
