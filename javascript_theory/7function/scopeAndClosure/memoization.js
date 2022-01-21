Function.prototype.memoized = function (key) {
  this._values = this._values || {};
  return this._values[key] !== undefined
    ? this._values[key]
    : (this._values[key] = this.apply(this, arguments));
};

Function.prototype.memoize = function () {
  let fn = this;
  return function () {
    return fn.memoized.apply(fn, arguments);
  };
};

let isPrime = function (num) {
  let prime = num != 1;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}.memoize();
console.log(isPrime(6));
