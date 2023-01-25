const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(obj);

const { b, ...xyz } = obj;

console.log(xyz);

// const a = 5;
const key = "d";

const newObj = { ...obj, [key]: 4 };

console.log(newObj);
// destructuring
// const {a: objA, [key]:objB} = obj;

// console.log(a);
// console.log(objA);
// console.log(objB);

// dot notation
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

// array notation
console.log(obj["a"]);
console.log(obj[key]);
console.log(obj["c"]);

// mutably add new Property
// obj.d = 4;
// obj.b = 5
// delete obj.b;

// console.log(obj);

// immutable way to add new property
// old technique
// const obj1 = Object.assign({}, obj, {d: 4});
// const obj2 = Object.assign({}, obj, {b: 5, a: 2,d: 4});
// console.log(obj2);

// spread operator
const obj1 = { ...obj, d: 4, b: 5 };

console.log(obj1);
console.log(obj);

const user = {
  firstName: "Rohit",
  lastName: "Sharma",
  age: 33,
  gender: "male",
};

// mutable
const newProp = "profession";

const newUser = {
  ...user,
  [newProp]: "Trainer",
  age: 30,
  sex: user.gender,
  fullName: `${user.firstName} ${user.lastName}`,
};
const { firstName, lastName, gender, ...rest } = newUser;

console.log(rest);

// user[newProp] = "Trainer";
// user['age'] = 30;
// user['sex'] = user.gender;
// delete user.gender;
// user['fullName'] = `${user.firstName} ${user.lastName}`
// delete user.firstName;
// delete user.lastName;

// console.log(user);

// mutabaly/immutably

// 1. add a new peorpty using newProp with value "Trainer"
// 2. update the age from 33 -> 30
// 3. replace property name gender -> sex
// 4. remove property firstname and lastname and add fullName

// final object should look like below
const final = {
  fullName: "Rohit Sharma",
  age: 30,
  sex: "male",
  profession: "Trainer",
};
