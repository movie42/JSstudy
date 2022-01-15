function makeCounter() {
  var count = 0;
  return f;
  function f() {
    return count++;
  }
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function sum(a) {
  return function (b) {
    return a + b;
  };
}

const add1 = sum(1);
console.log(add1(2));
