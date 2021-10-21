function User(name) {
  this.name = name;
  this.sayHi = function () {
    return `Hi, ${this.name}`;
  };
}

const user1 = new User("kiwi33");

console.log(user1.name);
console.log(user1.sayHi());
