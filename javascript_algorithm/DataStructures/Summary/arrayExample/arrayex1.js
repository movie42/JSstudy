const arr1 = [];
const arr2 = new Array();

console.log(arr1);
console.log(arr2);

const arr3 = [1, 2, 3, 4];

console.log(arr3);

const arr4 = new Array(5).fill(true);

console.log(arr4);

const arr5 = Array.from(new Array(5), (v, i) => i + 1);

console.log(arr5);

const arr6 = Array.from([1, 2, 3, 4], (v, i) => v + i);

console.log(arr6);
