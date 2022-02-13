// https://www.acmicpc.net/problem/17413

const path = require("path");
const dirname = path.resolve("inputData");

const vscode = dirname + "/input.txt";
const back = "dev/stdin";

const fs = require("fs");
const string = fs.readFileSync(vscode).toString().trim();

const log = (...value) => console.log(...value);

function solution(str) {
  let save = "";
  let answer = "";
  let isFlip = false;

  str.split("").forEach((value) => {
    if (isFlip) {
      save += value;
      if (value === ">") {
        isFlip = false;
        answer += save;
        save = "";
      }
    } else {
      if (value === "<") {
        isFlip = true;
        save += value;
      } else if (value === " ") {
        save += value;
        answer += save;
        save = "";
      } else {
        save = value + save;
      }
    }
  });
  answer += save;
  return answer.trim();
}

log(solution(string));
