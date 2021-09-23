// 주어진 배열의 하위배열에서 length만큼의 값을 더한 것에서 최대값을 찾는 문제
// 예를들어 [100,200,300,400]에서 [100,300]은 연속되지 않았기 때문에 하위배열이 아니다.

const maxSubarraySum = (arr, leng) => {
  if (arr.length < leng) return null;
  let maxValue = -Infinity;
  let sum = 0;
  for (let i = 0; i <= arr.length - leng; i++) {
    for (let j = i; j < i + leng; j++) {
      sum += arr[j];
      // 그후에 최대값과 비교하여 값이 큰쪽으로 교체한다.
    }
    maxValue = Math.max(maxValue, sum);
    sum = 0;
  }
  return maxValue;
};

// console.log(maxSubarraySum([100, 200, 300, 400], 2));
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
