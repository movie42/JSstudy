// https://www.acmicpc.net/problem/9093

const path = require("path");
const dirname = path.resolve("inputData");

const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync(dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const stack = [];
let answer = "";

for (let i = 0; i < n; i++) {
  arr[i].split(" ").forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      stack.push(word.charAt(i));
    }
    for (let i = word.length; i > 0; i--) {
      answer += stack.pop();
    }
    answer += " ";
  });
  console.log(answer);
  answer = "";
}

const word = "hello";

// const back = arr.map((item) => {
//   const wordList = item.split(" ");
//   return wordList
//     .map((value) => {
//       return value.split("").reverse().join("");
//     })
//     .join(" ");
// });

// console.log(back.join("\n"));

// const log = (value) => console.log(value);

// const newArr = arr.map((words) => {
//   return words
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// });

// log(newArr.join("\n"));
