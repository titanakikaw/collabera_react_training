// index

// you cant store more data in Set or Map
// disctionary

const map = new Map();

map.set("yagnesh", {
  name: "Yagnesh",
  age: 30,
  gender: "male",
});

map.set("virat", {
  name: "Virat",
  age: 30,
  gender: "male",
});

map.set("Rohit", {
  name: "Rohit",
  age: 28, //  35
  gender: "male",
});

//   O(1)
console.log(map.get("Rohit"));

map.delete("Rohit");

console.log(map.get("Rohit"));

for (const [key, value] of map) {
  console.log(key);
  console.log(value);
}

const weakMap = new WeakMap();

const obj1 = { a: 1 };
weakMap.set(obj1, 1);

console.log(weakMap.get(obj1));

weakMap.has(obj1);
