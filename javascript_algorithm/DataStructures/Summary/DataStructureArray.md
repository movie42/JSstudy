# 자바스크립트의 자료구조

## 자료구조

### 배열

1. 선언

[예제](arrayExample/arrayex1.js)

자바스크립트의 배열 선언 방법

```javascript
const arr1 = new Array();
const arr2 = [];
```

초기화를 하는 방법

- 직접 값을 넣어주기

```javascript
const arr = [1, 2, 3, 4];
```

- 동일한 값으로 채우기

```javascript
const arr = new Array().fill(5);
```

- 배열 배서드를 이용해 초기화하기

```javascript
const arr = Array.from(new Array(5), (v, i) => i + 1);
```

2. 값을 넣고 빼는 방법

[예제](arrayExample/arrayex2.js)

- push : 배열 끝에 값을 추가한다.

```javascript
const arr = [];

arr.push(1);
```

- pop : 배열 끝에 값을 제거한다. 이때 pop은 제거한 값을 리턴한다.

```javascript
const arr = [1, 2];

arr.pop();
```

- unshift: 배열 가장 앞에 값을 넣는다.

```javascript
const arr = [1, 2];

arr.unshift(0);
```

- shift : 배열 가장 앞쪽 값을 제거한다. 이때 제거한 값을 반환한다.

```javascript
const arr = [1, 2];

arr.shift();
```

3. 중간에 값을 추가하거나 제거하는 방법

[예제](arrayExample/arrayex3.js)

- slice
  - 인자를 두 개 받는다.
  - 둘 다 입력하면 index로 start index부터 end index 바로 앞까지 배열을 잘라 반환한다. 하나만 입력하면 상수 만큼 배열 앞을 자른다.
  - 원본 배열은 변경하지 않고 새로운 배열을 반환한다.

```javascript
const arr = [1, 2, 3, 4];

const arr2 = arr.slice(1, 2);

console.log(arr); // [1, 2, 3, 4]
console.log(arr2); //  [2]
```

- splice
  - 인자를 3개 이상 받는다. 첫번째 추가하거나 제거할 값의 위치, 두번째 인자는 첫번째 위치로부터 얼마나 삭제할 것인지, 세번째 인자부터는 추가할 값이다.
  - 두 번째 인자를 0으로 입력하면 첫 번째 인자로 입력한 위치 앞에 값이 추가된다.
  - 원본을 변경한다.

```javascript
const arr = [1, 2, 3, 4];

arr.splice(1, 0, -1, -2);

console.log(arr); // [1, -1, -2, 2, 3, 4]
```

4. 순회

[예제](arrayExample/arrayex4.js)

배열의 값을 순회하는 방법

- for
  - 반복문을 사용해서 배열을 순회할 수 있다.

```javascript
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i]);
}
```

- for ... of

```javascript
const arr = [1, 2, 3, 4];

for (let item of arr) {
  console.log(item);
}
```

- forEach
  - 배열 조건없이 처음부터 끝까지 순회한다.
  - 새로운 배열을 반환하거나 원본 배열을 변경하지 않는다.

```javascript
const arr = [1, 2, 3, 4];

arr.forEach((value, index) => console.log(value, index));
```

5. 값을 찾는 방법

[예제](arrayExample/arrayex5.js)

- arr[0]
  배열의 index에 해당하는 값을 리턴한다.

```javascript
const arr = [1, 2, 3];
arr[1]; // 2
```

- find
  - 배열을 순회하면서 조건에 맞는 값을 반환한다.
  - 찾지 못하면 undefinedf를 반환한다.

```javascript
const arr = [1, 2, 3];

arr.find((value) => value === 2); // 2
arr.find((value) => value === 5); // undefined
```

- filter
  - 조건에 맞는 값을 찾아 새로운 배열을 반환한다.(원본 배열은 변경하지 않는다.)

```javascript
const arr = [1, 2, 3, 4, 5];
arr.filter((value) => value > 2); // [3, 4, 5]
```

- 그밖에 some, every, findIndex 등 유용한 메서드들이 있다.

6. 값을 변경하기

[예제](arrayExample/arrayex6.js)

- map
  - 아마도 가장 유용한 방법
  - 배열을 순회하면서 함수를 동작한다.
  - 새로운 배열을 반환한다.

```javascript
const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map((value) => value);
const arr3 = arr.map((value) => value + 1);
```

- join
  - 배열을 문자열로 변경하고 문자열을 반환한다.
  - 원본 배열을 변경하지 않는다.

```javascript
const arr = [1, 2, 3, 4];
arr.join(""); //1234
arr.join(","); //1,2,3,4
arr.join(", "); //1, 2, 3, 4
```
