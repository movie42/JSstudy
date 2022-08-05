const obj = {};

obj.name = "javascript";
console.log(obj);

obj["name"] = "python";
console.log(obj);

const obj2 = { name: "java", age: 30 };
delete obj2.name;

console.log(obj2);

delete obj2["age"];
console.log(obj2);
