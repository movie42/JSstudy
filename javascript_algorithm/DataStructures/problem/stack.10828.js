const path = require("path");
const dirname = path.resolve("inputData");
const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync(dirname + "/input.txt")
  .toString()
  .split("\n");

// const [n, ...arr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

function solution() {
  const stack = [];
  let answer = [];

  const orders = {
    push(x) {
      stack.push(x);
    },
    pop() {
      if (this.empty() === 0) return stack.pop();
      else return -1;
    },
    size() {
      return stack.length;
    },
    empty() {
      if (stack.length === 0) return 1;
      return 0;
    },
    top() {
      if (this.empty() === 1) return -1;
      else return stack[stack.length - 1];
    },
  };

  for (let i = 0; i < +n; i++) {
    const [order, value] = arr[i].split(" ");
    if (order === "push") {
      orders[order](+value);
    } else {
      answer.push(orders[order]());
    }
  }

  return answer.join("\n");
}

console.log(solution());
