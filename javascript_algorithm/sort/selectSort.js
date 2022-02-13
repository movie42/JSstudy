// 선택 정렬은 음... 선택된 값이 배열의 끝까지 탐색해
// 가면서 가장 작은 값을 찾으면 그 값과 선택한 값을 교환하는 정렬이다.

const selectSort = (arr) => {
  // 최소값 index를 저장할 변수를 생성한다.
  for (let i = 0; i < arr.length; i++) {
    let minValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      // 이것도 결국 중첩 반복문이다.
      if (arr[minValue] > arr[j]) {
        // 선택 값보다 작은 값을 찾아라! 가장 작은 값과 선택값을 swap해야함.
        minValue = j;
      }
    }
    [arr[i], arr[minValue]] = [arr[minValue], arr[i]];
  }
  return arr;
};

// test

console.log(
  selectSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]),
);
