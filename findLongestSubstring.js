const findLongestSubstring = (str) => {
  if (str.length === 0) return 0;
  // j는 계속 오른쪽으로 움직인다. 움직이면서 obj에 obj[str[j]]는 계속 +1로 저장한다.
  // 만약 obj[str[j]]가 존재하면 그 값은 1로 초기화된다.
  let i = 0;
  let j = 0;
  let obj = {};
  let maxLength = 0;
  while (j < str.length) {
    if (!obj[str[j]]) {
      obj[str[j]] = (obj[str[j - 1]] || 0) + 1;
      console.log("no", obj[str[j]]);
      maxLength = Math.max(maxLength, obj[str[j]]);
      j++;
    } else {
      obj[str[j]] = 1;
      console.log("yes", obj[str[j]]);
      j++;
    }
  }
  return maxLength;
};

// console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
