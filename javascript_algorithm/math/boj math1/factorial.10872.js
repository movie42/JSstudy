// https://www.acmicpc.net/problem/10872
const path = require("path");
const dirname = path.resolve("inputData");
const vscode = dirname + "/input.txt";

const back = "dev/stdin";

const fs = require("fs");
const number = fs.readFileSync(vscode).toString().trim();
const log = (...value) => console.log(...value);

function solution(num) {
  let answer = 1;
  if (num === 0) return 1;
  if (num === 1) return 1;
  for (let i = 1; i <= num; i++) {
    answer *= i;
  }
  return answer;
}

log(solution(+number));
