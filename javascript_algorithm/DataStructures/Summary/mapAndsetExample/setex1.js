const set = new Set();

console.log(set);

set.add(1);
set.add("javascript");

console.log(set);

const arr = [
  "javascript",
  "python",
  "golang",
  "javascript",
  "javascript",
  "typescript",
];

const language = new Set(arr);

console.log(language);
