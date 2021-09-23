// array를 받아서 모든 값이 전부 한 차원으로 묶인 새로운 array를 return;

function flatten(arr) {
  let result = [];
  // 1. 일단 첫번째로 생각해볼건 arr가 concat으로 합쳐지는 방법을 생각해본다.
  // 2. flatten이 반복되려면? 조건문으로 반복한다?
  // 조건문에서 현재 값이 array인지 array가 아닌지 판별해서 넣는다.
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
