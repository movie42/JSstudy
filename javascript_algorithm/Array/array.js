const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];

//join
console.log(arr1.join(", "));

// reverse
arr1.reverse();
console.log(arr1);

// pop, push, shift unshift

// slice

// splice

// 순회
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (const item of arr1) {
  console.log(item);
}

// 배열은 객체와 같다.
console.log(typeof arr1);
