function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[start] > arr[i]) {
      pivot++;
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
    }
  }
  [arr[start], arr[pivot]] = [arr[pivot], arr[start]];
  return pivot;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([7, 5, 3, 1, 4, 4, 6, 8]));
