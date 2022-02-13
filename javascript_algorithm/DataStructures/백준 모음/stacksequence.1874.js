// https://www.acmicpc.net/problem/1874

const path = require("path");
const dirname = path.resolve("inputData");

const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync(dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const log = (...value) => console.log(...value);

function solution(n, ...values) {
  let stack = [];
  let result = [];
  let count = 1;

  for (let i = 0; i < n; i++) {
    const value = values.shift();

    while (count <= value) {
      stack.push(count++);
      result.push("+");
    }

    const popedItem = stack.pop();
    if (popedItem !== value) {
      return "NO";
    }
    result.push("-");
  }

  return result.join("\n");
}

console.log(solution(+n, ...arr.map((i) => +i)));
