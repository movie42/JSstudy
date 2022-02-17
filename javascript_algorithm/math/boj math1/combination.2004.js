// https://www.acmicpc.net/problem/2004

const path = require("path");
const dirname = path.resolve("inputData");
const vscode = dirname + "/input.txt";

const back = "dev/stdin";

const fs = require("fs");
const number = fs.readFileSync(vscode).toString().trim();
const log = (...value) => console.log(...value);

function solution(num) {}

log(solution(+number));
