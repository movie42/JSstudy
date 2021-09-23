// naive string search는 아주 잘 작동한다. 문제는 문자열이 길어지고 중복되는 값이 많아질수록 성능이 정말... 휴...
// 지구가 멸망해도 안끝나는 값이 입력될 수도 있을까?
// 찾는 문자열은 연속적으로 맞아야한다. 연속되게 일치되는 모든 값의 수를 세어서 최종 반환한다.

const naiveStringSearch = (str, value) => {
  // 반복문을 중첩시킨다.
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < value.length; j++) {
      // 그럼 비교를 해야겠지....
      if (value[j] !== str[i + j]) {
        // 일단 같지 않으면 빠져나온다.
        // console.log("i", i, "j", j, "break");
        break;
      }
      // 아... j가 value를 한번 다 돌았다는 걸 알 수 있는 방법은 j 랑 value.length-1과 같을때.
      if (j === value.length - 1) {
        result++;
      }
    }
  }
  return result;
};

// test case
console.log(naiveStringSearch("ababababbbbbbcccabcaaadbbabc", "abc"));
