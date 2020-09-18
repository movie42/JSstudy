// 함수 nestedEvenSum은 외부 obj1 혹은 obj2를 받아서 중첩된 obj 값의 모든 짝수를 다 더합니다.

function nestedEvenSum(obj) {
  // 1. 음... 일단 obj를 반복하는 함수를 만든다.
  let sum = 0;
  for (let key in obj) {
    // 2. 그리고 if(문으로 해당 값이 숫자이면서 짝수면 더한다.)
    if (Number(obj[key]) % 2 === 0) {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }
    // 4. 다른값이면 아무것도 하지 않는다.
    // 해결될줄 알았는데... 왜 안될까? 일단 obj전체를 다 탐색하지 않는다. 이유가 뭘까?*/
    // else에서 return을 해버려서 그냥 결과가 끝나버렸다....
  }
  return sum;
}

/*
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};
*/

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
