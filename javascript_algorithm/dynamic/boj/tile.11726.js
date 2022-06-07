// https://www.acmicpc.net/problem/1463

const path = require("path");
const dirname = path.resolve("inputData");

const vsc = dirname + "/input.txt";
const back = "dev/stdin";

const fs = require("fs");
const x = fs.readFileSync(vsc).toString().trim();

const log = (...value) => console.log(...value);

// 2*n을 2*1, 1*2 타일로 채우는 경우의 수
function solution(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num === 1) return 1;
  if (num === 0) return 1;

  memo[num] = solution(num - 1, memo) + solution(num - 2, memo);

  return memo[num] % 10007;
}

log(solution(+x));
