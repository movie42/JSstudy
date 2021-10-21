const n = 5;
// a++, ++a의 평가 방법이 다르다.
let a = 1;
// a를 평가하고 1을 더한다.
a++;

// a에 1을 더하고 평가한다.
++a;

//예

for (let i = 0; i < n; i++) {
  console.log(i); // 0,1,2,3,4
}

for (let i = 1; i < n; ++i) {
  console.log(i); // 1,2,3,4
}

let b = "1";

console.log(typeof +b); // number
console.log(typeof b); // string
