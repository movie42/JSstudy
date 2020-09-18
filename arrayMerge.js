function arrayMerge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) {
    result.push(...arr2.slice(j));
  } else if (j === arr2.length) {
    result.push(...arr1.slice(i));
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, half));
  let rightArr = mergeSort(arr.slice(half));
  return arrayMerge(leftArr, rightArr);
}

console.log(mergeSort([1, 2, 555, 1, 0, 100, 2, 3]));
