// https://www.acmicpc.net/problem/1676
const path = require("path");
const dirname = path.resolve("inputData");
const vscode = dirname + "/input.txt";

const back = "dev/stdin";

const fs = require("fs");
const number = fs.readFileSync(vscode).toString().trim();
const log = (...value) => console.log(...value);

function solution(num) {
  let num5 = num;
  let num2 = num;
  let answer5 = 0;
  let answer2 = 0;

  while (num5 >= 5) {
    answer5 += parseInt(num5 / 5, 10);
    num5 /= 5;
  }

  while (num2 >= 2) {
    answer2 += parseInt(num2 / 2, 10);
    num2 /= 2;
  }

  return Math.min(answer2, answer5);
}

log(solution(+number));
