// https://www.acmicpc.net/problem/6588

const path = require("path");
const dirname = path.resolve("inputData");
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
  const maxNumber = Math.max(...arr);

  const numbers = new Array(maxNumber + 1).fill(false);
  for (let i = 2; i < maxNumber; i++) {
    if (numbers[i] === false) {
      for (let j = i * i; j <= maxNumber; j += i) {
        numbers[j] = true;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    for (let j = 3; j < currentNumber; j += 2) {}
  }
}

log(solution(arr.map((value) => +value)));
