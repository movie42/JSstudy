function solution(clases, timetable) {
  let answer = "YES";
  let queue = clases.split("");

  for (let x of timetable) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        return "NO";
      }
    }
  }
  if (queue.length > 0) return "NO";

  return answer;
}

let a = "CBA";
let b = "CBDGE";

console.log(solution(a, b));
