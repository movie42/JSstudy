const arr = [1, 2, 3, 4];

const start = arr.slice(1);
const newArray = arr.slice(1, 2);

console.log(arr);
console.log(start);
console.log(newArray);

const arr2 = [1, 2, 3, 4, 5];

arr2.splice(3, 1, -1, -2);

console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];

arr3.splice(1, 0, -1, -2);

console.log(arr3);
