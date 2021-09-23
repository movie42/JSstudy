// binarySearch는 array를 반으로 나눠서 찾는다. 반드시 array는 정렬된 array이어야한다. 반드시!

function binarySearch(arr, num) {
  if (arr.length === 0) return -1;
  //1. 먼저 array의 가운데를 찾는다. 이건 평균값?으로 한다.
  let front = 0;
  let end = arr.length - 1;
  let mid = Math.floor((front + end) / 2); // 내림을 한다.
  // 반복해야한다.
  while (arr[mid] !== num && front <= end) {
    if (num < arr[mid]) {
      end = mid - 1;
    } else {
      front = mid + 1;
    }
    // 왜 무한대로 돌아가나 했더니.... mid값을 업뎃해줘야한다!
    mid = Math.floor((front + end) / 2);
  }
  return arr[mid] === num ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
/* console.log(
binarySearch(
  [
    5,
    6,
    10,
    13,
    14,
    18,
    30,
    34,
    35,
    37,
    40,
    44,
    64,
    79,
    84,
    86,
    95,
    96,
    98,
    99,
  ],
  10
));
*/
