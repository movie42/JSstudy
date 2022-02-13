// https://www.acmicpc.net/problem/9012

const path = require("path");
const dirname = path.resolve("inputData");

const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync(dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const log = (...value) => console.log(...value);

// log("틀린 풀이");

const result = arr.map((brakets) => {
  let stack = [];
  let result = true;

  brakets
    .trim()
    .split("")
    .map((braket, index) => {
      if (braket === "(") {
        stack.push(braket);
      } else {
        if (!stack.pop()) {
          result = false;
        }
      }
    });

  if (stack.length !== 0) {
    result = false;
  }

  if (result) {
    return "YES";
  } else {
    return "NO";
  }
});

log(result.join("\n"));

// log("맞는 풀이");

// for (let i = 0; i < +n; i++) {
//   let stack = [];
//   let result = true;
//   const brakets = arr[i];
//   const braket = brakets.split("");

//   for (let j = 0; j < braket.length; j++) {
//     if (braket[j] === "(") {
//       stack.push(braket[j]);
//     } else {
//       if (!stack.pop()) {
//         result = false;
//         break;
//       }
//     }
//   }

//   if (stack.length !== 0) {
//     result = false;
//   }

//   if (result) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }
