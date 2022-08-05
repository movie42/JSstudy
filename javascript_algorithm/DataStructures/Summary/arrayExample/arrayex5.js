const arr = [1, 2, 3, 4, 5];

console.log(arr[1]);

// find
console.log("find");
console.log(arr.find((value) => value === 2));
console.log(arr.find((value) => value === 6));

// findIndex
console.log("findIndex");
console.log(arr.findIndex((value) => value === 2));
console.log(arr.findIndex((value) => value === 6));

// filter
console.log("filter");
const arr2 = arr.filter((value) => value > 2);
const arr3 = arr.filter((value) => value < -1);

console.log(arr2);
console.log(arr3);

// some
console.log("some");
const arr4 = arr.some((value) => value > 2);
const arr5 = arr.some((value) => value < -1);

console.log(arr4);
console.log(arr5);

// every
console.log("every");
const arr6 = arr.every((value) => value > 1);
const arr7 = arr.every((value) => value > -1);

console.log(arr6);
console.log(arr7);
