function solution(s) {
  const stack = [];
  for (let i in s) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    return "NO";
  } else {
    return "YES";
  }
}

let a = "(()(()))(()";
console.log(solution(a));
