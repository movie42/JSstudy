class User {
  constructor(name) {
    this.user = name;
  }
}

const user = new User("whao");
const user2 = new User("jane");

console.log(user);

User.prototype.setName = function (name) {
  this.user = name;
  return this.user;
};
class Age extends User {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

user.setName("hi");
console.log(user);

console.log(user.constructor === User);

const userAge = new Age(undefined, 2);

console.log(userAge);

userAge.setName("hh");

console.log(userAge);
