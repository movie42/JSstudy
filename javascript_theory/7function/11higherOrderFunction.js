function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function square(x) {
  return x * x;
}

function sum1(x) {
  return x + 1;
}

function minus2(x) {
  return x - 2;
}

const three = compose(square, sum1);
const five = compose(square, minus2);
const sumFive = compose(sum1, minus2);

console.log(three(3));
console.log(sumFive(5));
console.log(square(sumFive(5)));
