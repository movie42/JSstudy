function averagePair(arr, aver) {
  // 1. 평균은 두 개 이상의 값을 더해서 2로 나누는 문제이기
  //    때문에 arr의 length가 1이하이면 flase를 반환한다.
  if (arr.length <= 1) return false;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let average = (arr[i] + arr[j]) / 2;
    if (average === aver) {
      return true;
    } else if (average < aver) {
      // 만약 구해진 평균값이 파라미터값 aver보다 작을때 i가 움직인다.
      // 왜냐하면 배열이 정렬되어있기 떄문에 가장 끝에 있는 값이 가장 크기 떄문이다.
      // 그래서 aver보다 average가 크면 가장 왼쪽에 있는 값이 오른쪽으로 움직여야 average값이 커진다.
      i++;
    } else {
      j--;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
