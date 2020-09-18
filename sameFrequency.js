function sameFrequency(num1, num2) {
  let val1 = num1.toString();
  let val2 = num2.toString();
  if (val1.length !== val2.length) return false;
  let count = {};
  for (let i = 0; i < val1.length; i++) {
    count[val1[i]] = (count[val1[i]] || 0) + 1;
  }
  for (let i = 0; i < val2.length; i++) {
    if (count[val2[i]]) {
      count[val2[i]] = count[val2[i]] - 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
