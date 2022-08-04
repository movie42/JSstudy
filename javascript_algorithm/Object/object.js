const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "hiho", age: 24 };

// 추가

obj2["address"] = "seoul";
obj2.email = "a@gmail.com";

// 삭제

delete obj2.email;

console.log(obj1, obj2, obj3);

// in

console.log("address" in obj2);
console.log("email" in obj2);

// keys의 집합

console.log(Object.keys(obj3));

// values

console.log(Object.values(obj3));

// for in

for (const key in obj3) {
  console.log(key, obj3[key]);
}
