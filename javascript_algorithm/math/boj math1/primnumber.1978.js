// https://www.acmicpc.net/problem/1978

const path = require("path");
const dirname = path.resolve("../inputData");
const vscode = dirname + "/input.txt";

const back = "dev/stdin";

const fs = require("fs");
const [n, arr] = fs.readFileSync(vscode).toString().trim().split("\n");
const log = (...value) => console.log(...value);

function solution(n, arr) {
  let count = 0;
  let isPrime = true;

  for (let i = 0; i < n; i++) {
    let number = arr[i];
    for (let j = 2; j < number; j++) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (number === 1) {
      isPrime = false;
    }

    if (isPrime) {
      count += 1;
    } else {
      isPrime = true;
    }
  }

  return count;
}

log(
  solution(
    n,
    arr
      .split(" ")
      .filter((value) => value !== "")
      .map((value) => +value),
  ),
);
