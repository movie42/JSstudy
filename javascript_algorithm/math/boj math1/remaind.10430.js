// https://www.acmicpc.net/problem/10430

const path = require("path");
const dirname = path.resolve("../inputData");
const vscode = dirname + "/input.txt";

const back = "dev/stdin";

const fs = require("fs");
const arr = fs.readFileSync(vscode).toString().trim().split(" ");
const log = (...value) => console.log(...value);

function solution(arr) {
  const [A, B, C] = arr.map((value) => +value);
  let answer = [];

  answer.push((A + B) % C);
  answer.push(((A % C) + (B % C)) % C);
  answer.push((A * B) % C);
  answer.push(((A % C) * (B % C)) % C);

  return answer.join("\n");
}

log(solution(arr));
