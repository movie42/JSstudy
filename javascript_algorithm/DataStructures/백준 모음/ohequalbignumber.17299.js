// https://www.acmicpc.net/problem/17299

const path = require("path");
const dirname = path.resolve("inputData");

const vscode = dirname + "/input.txt";
const back = "dev/stdin";

const fs = require("fs");
const [n, arr] = fs.readFileSync(vscode).toString().trim().split("\n");

const log = (...value) => console.log(...value);

// 오답 시간 초과

// function solution(n, arr) {
//   let answer = [];
//   let NGF = {};
//   let max = 0;
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (NGF[arr[i]]) {
//       NGF[arr[i]] += 1;
//     } else {
//       NGF[arr[i]] = 1;
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     max = NGF[arr[i]];
//     for (let j = i; j < n; j++) {
//       if (NGF[arr[i]] < NGF[arr[j]]) {
//         count += 1;
//       }
//     }
//     if (count === 0) {
//       answer.push(-1);
//     } else {
//       answer.push(count);
//       count = 0;
//     }
//   }

//   return answer.join(" ");
// }

// log(
//   solution(
//     +n,
//     arr.split(" ").map((value) => +value),
//   ),
// );

// 오답 시간 초과

function solution(n, arr) {
  let result = new Array(arr.length).fill(-1);
  let count = {};
  arr.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (
      stack.length &&
      count[arr[stack[stack.length - 1]]] < count[arr[i]]
    ) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result.join(" ");
}

log(
  solution(
    +n,
    arr.split(" ").map((value) => +value),
  ),
);
