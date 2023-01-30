// import { x, y } from "./app";
import data from "./app";
import Box from "./test";
import "../style.scss";

// remove white space
// remove comments
// remove unused code
// replace all varaiable names with smaller variable name

function add(a, b) {
  return a + b;
}

const b = new Box();
b.printType();

console.log(add(data.x, data.y));
