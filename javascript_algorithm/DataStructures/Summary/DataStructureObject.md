# 객체

## 선언

[예제](objExample/objex1.js)

```javascript
const obj = {};
const obj2 = new Object();
```

## 초기화

[예제](objExample/objex2.js)

```javascript
const obj = { name: "javascript" };
const obj2 = new Object({ name: "javascript" });
```

생성자로 선언 초기화 하는 방법도 있다.

```javascript
function Obj(name) {
  return { name };
}

const obj = new Obj("javascript"); // { name: 'javascript' }

class ProgramingLanguage {
  constructor(name) {
    this.name = name;
  }
}

const obj2 = new ProgramingLanguage("javascript"); // Obj { name: 'javascript' }
```

## 값 추가, 삭제

[예제](objExample/objex3.js)

- 추가

```javascript
const obj = {};

obj.name = "javascript";
console.log(obj);

obj["name"] = "python";
console.log(obj);
```

- 삭제

```javascript
const obj2 = { name: "java", age: 30 };
delete obj2.name;

console.log(obj2);

delete obj2["age"];
console.log(obj2);
```

## 찾기

[예제](objExample/objex4.js)

- obj[key] 또는 obj.key
  - key로 값을 찾을 수 있다.
  - key가 obj에 없는 값이면 undefined를 반환한다.

```javascript
const obj = { name: "javascript", age: 23, address: "browser" };
console.log(obj["name"]);
```

## 순회

- for ... in
  - key 값을 순회할 수 있다.

```javascript
const obj = { name: "javascript", age: 23, address: "browser" };
for (let key in obj) {
  console.log(key);
}
```

- for ... of Object.entries(obj)
  - Object.entries(obj)를 사용하면 객체가 튜플 형태로 변경된다. 예) [['name', 'javascript']]
  - for...of 로 순회가 가능하다.

```javascript
const obj = { name: "javascript", age: 23, address: "browser" };
for (let [key, item] of Object.entries(obj)) {
  console.log(key, item);
}
```

- Object.keys(obj)
  - key를 배열로 반환한다.

```javascript
const obj = { name: "javascript", age: 23, address: "browser" };
const keys = Object.keys(obj);
```

- Object.values(obj)
  - value를 배열로 반환한다.

```javascript
const obj = { name: "javascript", age: 23, address: "browser" };
const values = Object.values(obj);
```
