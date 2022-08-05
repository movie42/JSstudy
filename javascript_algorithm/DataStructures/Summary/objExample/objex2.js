const obj = { name: "javascript" };
const obj2 = new Object({ name: "string" });

console.log(obj);
console.log(obj2);

function ObjFunc(name) {
  return { name };
}

const obj3 = new ObjFunc("hihi");

console.log(obj3);

class Obj {
  constructor(name) {
    this.name = name;
  }
}

const obj4 = new Obj("obj");

console.log(obj4);
