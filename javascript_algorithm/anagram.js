function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let strObj = {};
  for (let i = 0; i < str1.length; i++) {
    strObj[str1[i]] = (strObj[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (strObj[str2[i]]) {
      strObj[str2[i]] = strObj[str2[i]] - 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("aaz", "zaa"));
