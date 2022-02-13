// https://www.acmicpc.net/problem/9093

const path = require("path");
const dirname = path.resolve("inputData");

const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync(dirname + "/input.txt")
  .toString()
  .split("\n");

const log = (value) => console.log(value);

const newArr = arr.map((words) => {
  return words
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
});

log(newArr.join("\n"));
