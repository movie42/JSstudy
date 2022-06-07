// https://www.acmicpc.net/problem/1158

const path = require("path");
const dirname = path.resolve("inputData");

const vscode = dirname + "/input.txt";
const back = "dev/stdin";

const fs = require("fs");
const { format } = require("path");
const [n, k] = fs.readFileSync(back).toString().trim().split(" ");

const log = (...value) => console.log(...value);

function solution(n, k) {
  let queue = [];
  let result = [];

  for (let i = 1; i <= +n; i++) {
    queue.push(Number(i));
  }

  while (queue.length) {
    for (let i = 0; i < k; i++) {
      queue.push(queue.shift());
    }
    result.push(queue.pop());
  }

  return `<${result.join(", ")}>`;
}

console.log(solution(n, k));
