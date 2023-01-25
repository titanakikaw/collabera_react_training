// Object

const firstName = "Yagnesh";
const lastName = "Modh";
const age = 30;

const user = {
  firstName,
  lastName,
  age,
  fullName() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.fullName());
