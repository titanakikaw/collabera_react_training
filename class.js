// const yagneshInfo = {
//     firstName: "Yagnesh",
//     lastName: "Modh",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     getInfo() {
//         return this;
//     }
// }

// const viratInfo = {
//     firstName: "Virat",
//     lastName: "Kohli",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     getInfo() {
//         return this;
//     }
// }

// code reusability mechanism

// Encapsulation
// abstration -> return only related info
// PolyMorphysm -> Many Avatars
// inheritance

// Blueprint of the object
class User {
  static example = "hell";

  // can call only once when you initialize
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set firstName(value) {
    this._firstName = User.nameCase(value);
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    this._lastName = User.nameCase(value);
  }

  get lastName() {
    return this._lastName;
  }

  static nameCase(value) {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }

  #getSalaryInfo() {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInfo() {
    return this;
  }
}

class Admin extends User {
  constructor() {
    super("Mighty", "God");
  }

  // method overriding
  getInfo() {
    const data = super.getInfo();
    return { ...data, isAdmin: true };
  }

  manageUser() {
    return true;
  }
}

class SuperUser extends User {}

const admin = new Admin();

console.log(admin.fullName());
console.log(admin.manageUser());
console.log(admin.getInfo());

console.log(User.nameCase("hello"));

const yagneshInfo = new User("yagnesh", "modh");
const viratInfo = new User("virat", "kohli");

console.log(yagneshInfo.fullName());
console.log(viratInfo.fullName());

console.log(yagneshInfo.getInfo());

console.log(viratInfo.getInfo());

// Animal

// type -> dog/cat
// canFly() -> true/false
// makeSound() -> return some voice
// name -> first letter shold always capital
// gender -> this should be private
// getInfo -> { name, type, gender, canFly }

// synchronous Programing
console.log(1);
console.log(2);
console.log(3);
