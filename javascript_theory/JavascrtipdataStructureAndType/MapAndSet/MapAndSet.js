// 과제 : https://ko.javascript.info/map-set
// 배열에서 중복 요소 제거하기

function unique(arr) {
  const newArr = Array.from(new Set(arr));
  return newArr;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

// 애너그램 걸러내기

// nap-pan, ear-are-era, cheaters-hectares-teachers

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join();
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

// 과제 3

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);
