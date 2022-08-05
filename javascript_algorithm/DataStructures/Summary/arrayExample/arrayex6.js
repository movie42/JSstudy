const arr = [1, 2, 3, 4, 5];

console.log("arr", arr);

const arr2 = arr.map((value) => value);

console.log("arr2", arr2);

const arr3 = arr.map((value) => value.toString());

console.log("arr3", arr3);

const arr4 = arr3.join("");

console.log("arr3 join", arr4);
