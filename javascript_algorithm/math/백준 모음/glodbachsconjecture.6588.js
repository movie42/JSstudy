// https://www.acmicpc.net/problem/1929

const path = require("path");
const dirname = path.resolve("../inputData");
const vscode = dirname + "/input.txt";

const back = "dev/stdin";

const fs = require("fs");
const arr = fs.readFileSync(vscode).toString().trim().split("\n");
const log = (...value) => console.log(...value);

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(arr) {
  arr.forEach((number) => {
    let prime = [];

    for (let i = 1; i <= number; i++) {
      prime[i - 1] = i;
    }

    for (let i = 2; i < number; i++) {
      if (prime[i] === 0) continue;

      for (let j = i + i; j < number; j += i) {
        log(j);
      }
    }
  });
}

log(solution(arr.map((value) => +value)));
