function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) {
      stack.push(+x);
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      let result = eval(`${lt}${x}${rt}`);
      stack.push(result);
    }
  }
  answer = +stack[0];
  return answer;
}

let postfix = "352+*9-";

console.log(solution(postfix));
