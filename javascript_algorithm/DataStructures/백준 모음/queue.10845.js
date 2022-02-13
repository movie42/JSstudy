// https://www.acmicpc.net/problem/10845

const path = require("path");
const dirname = path.resolve("inputData");

const vscode = dirname + "/input.txt";
const back = "dev/stdin";

const fs = require("fs");
const [n, ...arr] = fs.readFileSync(back).toString().trim().split("\n");

const log = (...value) => console.log(...value);

/*
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

function solution(n, arr) {
  let queue = [];

  const methods = {
    push(x) {
      queue.push(x);
    },
    pop() {
      if (this.size()) {
        return queue.shift();
      }
      return -1;
    },
    size() {
      return queue.length;
    },
    empty() {
      if (this.size()) {
        return 0;
      }
      return 1;
    },
    front() {
      if (this.size()) {
        return queue[0];
      }
      return -1;
    },
    back() {
      if (this.size()) {
        return queue[queue.length - 1];
      }
      return -1;
    },
  };

  const orders = arr.map((item) => {
    let [key, value] = item.split(" ");
    return methods[key](+value);
  });

  return orders.filter((value) => value !== undefined).join("\n");
}

console.log(solution(+n, arr));
