console.log("private variable");

function Private() {
  let numbers = 0;

  this.getNumber = function () {
    return numbers;
  };

  this.number = function () {
    numbers++;
  };
}

let private = new Private();

console.log(private.number());
console.log(private.getNumber());
console.log(private.numbers === undefined);
