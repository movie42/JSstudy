const map = new Map();

map.set("name", "javascript");

console.log(map);

console.log(map.get("name"));

map.delete("name");

console.log(map);

const map2 = new Map([
  ["name", "javascript"],
  ["age", 23],
  ["address", "browser"],
]);

console.log("key, value");
for (let [key, value] of map2) {
  console.log(key, value);
}

const keys = map2.keys();
const values = map2.values();
const entries = map2.entries();
console.log(keys);
console.log(values);
console.log(entries);

for (let key of keys) {
  console.log(key);
}

for (let value of values) {
  console.log(value);
}

const keysArray = Array.from(keys);
console.log(keysArray);
