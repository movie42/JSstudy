function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 3, 3, 3, 3, 5, 5, 5, 6, 7, 7, 7, 9]));
