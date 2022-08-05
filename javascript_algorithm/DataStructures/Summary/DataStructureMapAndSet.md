# 맵과 셋

## 맵

[예제](mapAndsetExample/mapex1.js)

맵은 key와 value를 가진 튜플 형태로 저장된다. 객체와 다르게 다양한 자료형을 허용한다.

```javascript
const map = [
  ["name", "javascript"],
  ["age", 23],
  ["address", "browser"],
];
```

### 선언

```javascript
const map = new Map();
```

### 초기화

```javascript
const map = new Map([
  ["name", "javascript"],
  ["age", 23],
  ["address", "browser"],
]);
```

### set, get

- set은 인자를 두개 받아 key와 value 순서로 map에 값을 저장한다.

```javascript
const map = new Map();

map.set("name", "javascript");
console.log(map); // Map(1) { 'name' => 'javascript' }
```

- get은 key값을 넣어 value를 찾는다.

```javascript
const map = new Map();

map.set("name", "javascript");
console.log(map.get("name")); // javascript
```

### delete, clear

delete는 key값을 삭제한다.
clear는 모든 값을 삭제한다.

```javascript
const map = new Map();

map.set("name", "javascript");
map.delete("name");
console.log(map); // Map(0) {}

map.set("name", "javascript");
map.set("age", 23);
map.clear();
console.log(map); // Map(0) {}
```

### key와 value

- map.keys()

  - 반복 가능한 객체를 반환하기 때문에 for...of로 순회할 수 있다.
  - 배열로 반환하려면 Array.from(map.keys())를 사용한다.

- map.values()

  - 반복 가능한 객체를 반환하기 때문에 for...of로 순회할 수 있다.
  - 배열로 반환하려면 Array.from(map.values())를 사용한다.

- map.entries()
  - 반복 가능한 객체를 반환하기 때문에 for...of로 순회할 수 있다.
  - for(let entries of map)과 똑같이 동작한다.
  - 구조 분해 할당을 하면 key, value를 볼 수 있다.

```javascript
const map = new Map([
  ["name", "javascript"],
  ["age", 23],
  ["address", "browser"],
]);

const keys = map.keys(); //[Map Iterator] { 'name', 'age', 'address' }
for (let key of keys) {
  console.log(key);
}

const values = map.values(); //[Map Iterator] { 'javascript', 23, 'browser' }
for (let value of values) {
  console.log(value);
}

for (let entires of map) {
  console.log(entries);
}
```

## 셋

[예제](mapAndsetExample/setex1.js)

셋은 배열과 유사하다. 하지만 유일한 값만 저장한다.(중복된 값은 저장하지 않는다.)

### 선언

```javascript
const set = new Set();
```

### 초기화

```javascript
const arr = [
  "javascript",
  "python",
  "golang",
  "javascript",
  "javascript",
  "typescript",
];

const language = new Set(arr);
console.log(language); // Set(4) { 'javascript', 'python', 'golang', 'typescript' }
```

### add

set.add(value)로 값을 넣을 수 있다.

```javascript
const set = new Set();
set.add("javascript");

console.log(set); // Set(1) { 'javascrpit' }
```

### delete, clear

set.delete(value)는 value를 삭제한다.
set.clear()는 모든 값을 삭제한다.

### keys, values

- set.keys()

  - set의 모든 값을 포함하는 이터러블 객체를 반환한다.

- set.values()
  - keys와 동일한 작업을 수행한다. 맵과 호환성을 위해 만들어 졌다.
