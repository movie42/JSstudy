// 예제1
console.log("ex1");

function memorize(f) {
  const cache = {};
  return function (x) {
    if (x in cache) return cache[x];
    cache[x] = f(x);
    return cache[x];
  };
}

function isPrime(n) {
  if (n < 2) return false;
  // 나는 보통 소수를 구할 때, 2~자기 자신까지 전부 나눴었는데 그럴 필요가 없다는걸 알았다.
  const m = Math.sqrt(n);
  for (let i = 2; i <= m; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const isPrimeMemo = memorize(isPrime);

const N = 1000;

for (let i = 2; i <= N; i++) {
  isPrimeMemo(i);
}

for (let i = 2; i + 2 <= N; i++) {
  if (isPrimeMemo(i) && isPrimeMemo(i + 2)) console.log(i + "," + (i + 2));
}

// 피보나치

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 성능이 떨어진다. 왜그럴까? 추측해보건데, fibonacci에서 계산할 때, cache를 사용하지 않는 것 같다.
// const memoFibonacci = memorize(fibonacci);

// 재귀를 저장하려면 위와같은 방법으로는 할 수 없는 것 같다.

const memoFibonacci = memorize(function (n) {
  if (n < 2) return n;
  return memoFibonacci(n - 1) + memoFibonacci(n - 2);
});

for (let i = 0; i < 100; i++) {
  console.log(memoFibonacci(i));
}

// function fibonacci_for(num, memo = {}) {
//   if (num in memo) return memo[num];
//   if (num === 0) return 0;
//   if (num < 2) return num;
//   memo[num] = fibonacci_for(num - 1, memo) + fibonacci_for(num - 2, memo);
//   return memo[num];
// }

// for (let i = 0; i < 100; i++) {
//   console.log(fibonacci_for(i));
// }

// 예제2
console.log("ex2");

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
