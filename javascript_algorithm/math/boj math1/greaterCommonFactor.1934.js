// https://www.acmicpc.net/problem/1934
/*
A, B 최대 공약수는 
소수가 나올때까지 소수로 나눠서 나눠준 수를 곱한다. 
지수로 바꿔 최소 지수를 모아 곱한다. 

A, B의 최소 공배수는 
소수가 나올때까지 소수로 나눠서 서로소와 나눠준 수를 모두 곱한다. 
지수는 모든 숫자와 지수가 가장 큰 값을 전부 곱한다. 

L최대 공배수, G 최대 공약수, a, b A,B의 서로소

L = a * b * G
A * B = a * b * G * G = L * G

유클리드 호제법이란 말은 두 수가 서로(互) 
상대방 수를 나누어(除)서 결국 원하는 수를 얻는 알고리즘을 나타낸다. 
2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), 
a와 b의 최대공약수는 b와 r의 최대공약수와 같다. 
이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 
다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 
나누는 수가 a와 b의 최대공약수이다. 

*/

const path = require("path");
const dirname = path.resolve("../inputData");
const vscode = dirname + "/input.txt";

const back = "dev/stdin";

const fs = require("fs");
const [n, ...arr] = fs.readFileSync(vscode).toString().trim().split("\n");
const log = (...value) => console.log(...value);

function solution(n, arr) {
  let newArr = arr
    .filter((value) => value !== "")
    .map((value) => {
      const [A, B] = value.split(" ").map((value) => +value);
      let a = Math.max(A, B);
      let b = Math.min(A, B);
      let r;
      while (a % b !== 0) {
        r = a % b;
        a = b;
        b = r;
      }
      return (A * B) / b;
    });
  return newArr.join("\n").trim();
}

log(solution(n, arr));
