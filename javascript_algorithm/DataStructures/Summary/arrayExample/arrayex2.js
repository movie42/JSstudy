const arr = [];

arr.push(1);
arr.push(2);
arr.push(2, 4, 8);

console.log(arr);

console.log(arr.pop());

arr.unshift(0);
arr.unshift(-1);
arr.unshift(-2, -3);

console.log(arr);

console.log(arr.shift());
