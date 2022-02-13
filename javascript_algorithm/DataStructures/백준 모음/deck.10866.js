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

/*
push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

function solution(n, arr) {
  let deck = [];

  const methods = {
    push_front(x) {
      deck.unshift(x);
    },
    push_back(x) {
      deck.push(x);
    },
    pop_front() {
      if (this.size()) {
        return deck.shift();
      }
      return -1;
    },
    pop_back() {
      if (this.size()) {
        return deck.pop();
      }
      return -1;
    },
    size() {
      return deck.length;
    },
    empty() {
      if (this.size()) {
        return 0;
      }
      return 1;
    },
    front() {
      if (this.size()) return deck[0];
      return -1;
    },
    back() {
      if (this.size()) return deck[deck.length - 1];
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
