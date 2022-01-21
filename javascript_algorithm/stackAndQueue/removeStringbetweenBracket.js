// 못 풀었다...
// function solution(s) {
//   let stringData = s.split("");
//   let stack = [];
//   let start;
//   let end;
//   for (let i in stringData) {
//     if (stringData[i] === "(" && stack[stack.length - 1] !== "(") {
//       stack.push(stringData[i]);
//       start = i;
//     } else if (stringData[i] === "(" && stack[stack.length - 1] === "(") {
//       stack.push(stringData[i]);
//     }

//     if (stringData[i] === ")") {
//       stack.pop();
//       if (stack.length === 0) {
//         end = +i + 1;
//         console.log(stringData.splice(end));
//         let sliceData = stringData.splice(end + 1);
//       }
//     }
//   }
//   if (start === undefined) {
//     return stringData.join("");
//   }
// }

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(x);
    }
  }
  answer = stack.join("");
  return answer;
}

let a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(a));
