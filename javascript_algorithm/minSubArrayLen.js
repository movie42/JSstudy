// Sliding Window.
// 주어진 arr의 vlaue를 더했을때 num의 값과 일치하는 값중 최속 연속된 값을 찾는 문제.

const minSubArrayLen = (arr, num) => {
  let minLength = Infinity;
  // 먼저 arr에서 연속된 값을 더했을 때, num보다 작으면 j++, 크면 i++움직인다.는 if문을 작성해보자.
  let i = 0;
  let j = 0;
  let sum = arr[i];
  // 처음에 && i<j라는 조건을 while에 넣었었는데 이 값은 불필요한것같다. 왜냐하면 최소길이가 1인 경우도 있기 때문이다.
  while (j < arr.length) {
    if (sum < num) {
      // console.log("sum<num", "sum", sum, "i", i, "j", j);
      j++;
      sum += arr[j];
    } else if (sum >= num) {
      minLength = Math.min(minLength, j - i + 1);
      // console.log("sum>num", "sum", sum, "i", i, "j", j);
      sum -= arr[i];
      i++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

//console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 9));
