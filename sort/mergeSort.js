// megeSort는 정렬된 두 배열을 합쳐 정렬된 하나의 배열로 만드는 sort방법
// 그래서 정렬되지 않은 배열을 최소단위로 쪼개야한다.

// 먼저 배열을 합치는 함수를 만들자.

const mergeArray = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  if (i >= arr1.length) {
    result.push(...arr2.slice(j));
  }
  if (j >= arr2.length) {
    result.push(...arr1.slice(i));
  }
  return result;
};

// test
// console.log(mergeArray([1, 5, 9, 10, 11], [2, 4, 6, 8, 14, 16, 17]));

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
};

// Test
// console.log(mergeSort([4, 2, 6, 8, 11, 55,17,12,9,5,33,3333,124124,2,4,5,11,88,2323]));
