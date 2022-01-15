// 과제 주어진 숫자까지 모든 숫자 더하기
// https://ko.javascript.info/recursion#ref-3152

function sumTo(number) {
  if (number === 1) {
    return number;
  }

  return number + sumTo(number - 1);
}

// console.log(sumTo(100));

// 팩토리얼 계산하기
// https://ko.javascript.info/recursion#ref-3153

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

// console.log(factorial(5));

// 피보나치 계산하기
// https://ko.javascript.info/recursion#ref-3153

function fib(n, memo = {}) {
  if (n <= 2) return 1;

  if (memo[n] === undefined) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }

  return memo[n];
}

// console.log(fib(77));

// quick srot

const unsort = [5, 2, 10, 22, 3, 4, 100];

function quickSort(data) {
  if (data.length < 2) {
    return data;
  }

  const pivot = data[0];
  const left = [];
  const right = [];

  for (let i = 0; i < data.length; i++) {
    if (pivot > data[i]) {
      left.push(data[i]);
    } else if (pivot < data[i]) {
      right.push(data[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(unsort));
