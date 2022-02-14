// https://www.acmicpc.net/problem/1929

const path = require("path");
const dirname = path.resolve("../inputData");
const vscode = dirname + "/input.txt";

const back = "dev/stdin";

const fs = require("fs");
const [A, B] = fs.readFileSync(vscode).toString().trim().split(" ");
const log = (...value) => console.log(...value);

function solution(a, b) {
  let numbers = [];
  let answer = [];

  for (let i = a; i <= b; i++) {
    numbers[i] = i;
  }

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= b; i++) {
    if (numbers[i] === 0) continue;
    if (isPrime(numbers[i])) {
      for (let j = i + i; j <= b; j += i) {
        numbers[j] = 0;
      }
    }
  }

  for (let i = a; i < numbers.length; i++) {
    if (numbers[i] !== 1) {
      if (numbers[i] !== 0) answer.push(i);
    }
  }

  return answer.join("\n");
}

log(solution(+A, +B));
