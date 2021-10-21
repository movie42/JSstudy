# 배열 기초

- 자바스크립트의 배열은 Array 객체이며 객체로 배열의 기능을 가상으로 흉내 낸 것이다.

## 배열 리터럴

- [...]부분이 리터럴이다
- 배열은 요소에 인덱스가 매겨져있다.

```javascript
const data = [1,2,3,4,5]

const data2 = [1,2, ,4,5]

const data3 = ["string", {name:'JEON'}, 2, [2,3,4], true, false]

console.log(data.length) // 6
```

## Array 생성자로 생성하기

```javascript
const data4 = new Array(2,3,4) 

// 위에 값과 의미가 다름
// 배열의 길이가 6인 빈배열 생성, 음의 정수 한개만 들어갈 수 없음
const data5 = new Array(6)
```

## 추가, 삭제, 희소배열

```javascript
const addArray = [1,2,3]
addArray[3] = 4
addArray.push(5)

// 삭제를 하면 그 요소를 삭제해도 길이는 달라지지 않는다.
delete a[1]

// [1,undefined,3,4,5] -> 희소배열
console.log(addArray) 
```





