// 선형 탐색법 : 이건 말 그대로 쭉 순서대로 찾으면서 일치하는 값의 인덱스를 반환하면됨.
// indexOf()라는 내장함수가 있음.
// 반복문을 쓴다.
// 찾는 값이 없으면 -1을 반환

function linearSearch(arr, num) {
  if (arr.length === 0) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15))
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4))
