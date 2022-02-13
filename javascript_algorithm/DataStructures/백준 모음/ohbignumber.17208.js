// https://www.acmicpc.net/problem/17298

const path = require("path");
const dirname = path.resolve("inputData");

const vscode = dirname + "/input.txt";
const back = "dev/stdin";

const fs = require("fs");
const [n, arr] = fs.readFileSync(vscode).toString().trim().split("\n");

const log = (...value) => console.log(...value);

function solution(n, arr) {
  const numbers = arr.split(" ").map((value) => Number(value));
  const answer = [];
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (i === n - 1) {
      answer.push(-1);
      break;
    }
    max = numbers[i];
    for (let j = i; j < numbers.length; j++) {
      if (max < numbers[j]) {
        max = numbers[j];
        answer.push(numbers[j]);
        break;
      }
    }
    if (numbers[i] === max) {
      answer.push(-1);
    }
  }
  return answer.join(" ");
}

log(solution(n, arr));
