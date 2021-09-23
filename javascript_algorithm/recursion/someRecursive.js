// SAMPLE INPUT / OUTPUT

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, fuc) {
  if (arr.length === 0) return false;
  if (fuc(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), fuc);
  // arr 값을 순서대로 fuc로 받는다.
  // 조건이 맞으면 true, 아니면 false;
}

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true)
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true)
// console.log(someRecursive([4, 6, 8], isOdd)); // false)
//console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false)
