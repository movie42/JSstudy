const obj = { name: "javascript", age: 23, address: "browser" };

for (let key in obj) {
  console.log(key, obj[key]);
}

for (let [key, item] of Object.entries(obj)) {
  console.log(key, item);
}

const obj2 = {
  interpret: { name: "javascript", age: 23, address: "browser" },
  complie: { name: "c", age: 30, address: "everyWhere" },
};

console.log(Object.entries(obj2));
for (let [key, item] of Object.entries(obj2)) {
  console.log(key, item);
}

const keys = Object.keys(obj2);

console.log(keys);

const values = Object.values(obj2);

console.log(values);
