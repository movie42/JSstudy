// https://www.acmicpc.net/problem/10799

const path = require("path");
const dirname = path.resolve("inputData");

const vscode = dirname + "/input.txt";
const back = "dev/stdin";

const fs = require("fs");
const string = fs.readFileSync(vscode).toString().trim();

const log = (...value) => console.log(...value);

function solution(str) {
  let answer = 0;
  let stack = [];
  let factory = str.split("");

  for (let i = 0; i < factory.length; i++) {
    if (factory[i] === "(") {
      stack.push(factory[i]);
    } else {
      stack.pop();
      if (factory[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }
  return answer;
}

log(solution(string));
