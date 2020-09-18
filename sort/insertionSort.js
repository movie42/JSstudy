// insertion sort는 자신의 자리를 찾아 삽입하는 정렬.
// 현재 값과 비교하여 선택값이 작으면 교환해 가는 방식.

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

console.log(insertionSort([3, 80, 20, 33, 55, 689, 2, 11, 48]));
