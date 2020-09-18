// sort는 생각보다 재미있다???
// bubble sort는 연속된 두 값을 비교해서 앞 값이 후 값보다 크면 교환하여 가장 끝에 가장 큰 값이 정렬된다.

function bubbleSort(arr) {
  //일단 반복한다.
  for (let i = arr.length; i > 0; i--) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
  // 이중 반복...? 밖에 방법이 없을까?
  /* 이렇게는 아님... 생각을 잘못했다.
  for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  } */
}

//test
console.log(
  bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);
