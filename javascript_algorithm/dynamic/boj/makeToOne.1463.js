// https://www.acmicpc.net/problem/1463

const path = require("path");
const dirname = path.resolve("inputData");

const vsc = dirname + "/input.txt";
const back = "dev/stdin";

const fs = require("fs");
const x = fs.readFileSync(vsc).toString().trim();

const log = (...value) => console.log(...value);

// 풀리긴 풀리지만 모든 경우의 수를 재귀로 다 더하는 것이기 때문에 Maximum call stack size exceeded 에러가 나게 된다.
// 개선 방법은 없을까?
// function solution(num, memo = {}) {
//   if (num in memo) return memo[num];
//   if (num === 1) {
//     return (memo[num] = 0);
//   }

//   memo[num] = solution(num - 1, memo) + 1;
//   if (num % 2 === 0) {
//     memo[num] = Math.min(memo[num], solution(num / 2, memo) + 1);
//   }
//   if (num % 3 === 0) {
//     memo[num] = Math.min(memo[num], solution(num / 3, memo) + 1);
//   }
//   return memo[num];
// }

function solution(num) {
  let memo = [];
  memo.length = num;
  memo[0] = 0;
  memo[1] = 0;

  for (let i = 2; i <= num; i++) {
    memo[i] = memo[i - 1] + 1;
    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }
    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }
  }

  return memo[num];
}

log(solution(+x));
