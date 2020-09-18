function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[start] > arr[i]) {
      pivot++;
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
    }
  }
  [arr[start], arr[pivot]] = [arr[pivot], arr[start]];
  console.log(arr);
  return pivot;
}

console.log(pivot([4, 1, 8, 4, 4, 7, 6, 3]));
