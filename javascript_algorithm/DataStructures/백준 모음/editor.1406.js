// https://www.acmicpc.net/problem/1406

const path = require("path");
const dirname = path.resolve("inputData");

const fs = require("fs");
const [string, order, ...arr] = fs
  .readFileSync(dirname + "/input.txt")
  .toString()
  .split("\n");

// const log = (...value) => console.log(...value);

// 시작시 커서는 맨 뒤
// n = 명령어 수
// P ^ ^라는 문자열 입력
// L 왼쪽으로 커서 한칸 이동( 맨앞일때 무시)
// R 오른쪽으로  커서 한칸 이동( 맨뒤일때 무시)

// function solution(str, order, ...arr) {
//   let answer = str.split("");
//   let cursor = str.length;

//   for (let i = 0; i < order; i++) {
//     let [key, value] = arr[i].split(" ");

//     if (key === "P") {
//       answer.splice(cursor, 0, value);
//       cursor += 1;
//     }

//     if (key === "L" && cursor !== 0) {
//       cursor -= 1;
//     }

//     if (key === "R" && cursor !== answer.length) {
//       cursor += 1;
//     }

//     if (key === "B" && cursor !== 0) {
//       answer.splice(cursor - 1, 1);
//       cursor -= 1;
//     }
//   }

//   return answer.join("");
// }

// log(solution(string, +order, ...arr));

function solution(str, order, ...arr) {
  let ltStack = str;
  let rtQueue = [];

  for (let i = 0; i < order; i++) {
    let [key, value] = arr[i].split(" ");

    if (key === "P") {
      ltStack.push(value);
    }

    if (key === "L" && ltStack.length) {
      rtQueue.push(ltStack.pop());
    }

    if (key === "D" && rtQueue.length) {
      ltStack.push(rtQueue.pop());
    }

    if (key === "B" && ltStack.length) {
      ltStack.pop();
    }
  }

  rtQueue.reverse();

  return [...ltStack, ...rtQueue].join("");
}

console.log(solution(string.split(""), +order, ...arr));
