const isSubsequence = (str1, str2) => {
  if (str1 > str2) return false;
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++, j++;
    } else {
      j++;
    }
    if (i === str1.length) {
      return true;
    }
  }
  return false;
};

console.log(isSubsequence("abc", "acb"));
