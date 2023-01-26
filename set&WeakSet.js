// O(logN)

const newArr = [1, 2, 3, 4, 1, 3, 2, 6];

console.log([...new Set(newArr)]);

// cant compare two non-primitive type of data
const a = { a: 1 };
const b = { a: 1 };

console.log(a === b);

const arr = [9, 3, 11, 4, 3, 1];

// Set & Map

// set method is only use for primitive type of data
const set = new Set(arr);

console.log(set);

// O(1)
console.log(set.has({ a: 1 }));
// O(1)
set.delete(2);

console.log(set);

set.add(12);

console.log(set);

console.log(Array.isArray(set));

// 1. converting set into array
// 2. iterate to foreach
set.forEach((i) => {
  console.log(i);
});

// iterators
// directly iterate set object
for (const i of set) {
  console.log(i);
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const [key, value] of Object.entries(obj)) {
  console.log(key);
  console.log(value);
}

// only iterate object
for (const key in set) {
  console.log(key);
  console.log(obj[key]);
}

// set
// find
// delete
// add
// remove

// iterate set with for-of
// iterate with key and value

// remove all duplicate item from array

// WeakSet

const weakSet = new WeakSet();
// occupy less memory
// cant iterate this data
// only add non-primitive type of data
// to store temp data we use weakset
const obj1 = { a: 1 };

weakSet.add(obj1);

const obj2 = { a: 2 };

weakSet.add(obj2);

console.log(weakSet.has(obj2));

weakSet.delete(obj2);

console.log(weakSet.has(obj2));
