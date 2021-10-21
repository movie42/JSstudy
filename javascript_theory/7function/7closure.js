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
