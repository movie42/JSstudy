const arr = [1, 2, 3, 4, 5];

console.log("for");

for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i]);
}

console.log("for of");

for (let item of arr) {
  console.log(item);
}

console.log("forEach");

arr.forEach((value, index) => value + 1);
