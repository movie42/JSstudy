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
      maxLength = Math.max(maxLength, obj[str[j]]);
      // console.log("no", obj[str[j]], "j", j, "i", i, obj);
      j++;
    } else {
      //값이 있을때면 몇번째에서 값이 있었는지 obj에 저장된 값이 i와 j가 되고 j는 하나 늘어난다.
      i++;
      j = i;
      obj = {};
      // console.log("end", "i", i, "j", j, obj[str[j]]);
    }
  }
  return maxLength;
};

// console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
