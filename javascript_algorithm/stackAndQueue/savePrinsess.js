function solution(s) {
  let answer;
  let [a, b] = s.split(" ");
  let queue = [];

  for (let i = 1; i <= +a; i++) {
    queue.push(i);
  }

  while (queue.length !== 1) {
    for (let i = 0; i < +b; i++) {
      if (i !== +b - 1) {
        let tmp = queue.shift();
        queue.push(tmp);
      } else {
        queue.shift();
      }
    }
  }
  answer = queue[0];
  return answer;
}

let a = "8 3";
console.log(solution(a));
