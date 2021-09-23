# 객체

> 자바스크립트에서 객체는 가장 중요한 값이다.
> 원시 타입을 제외한 모든 값이 객체다.
> 심지어 배열도 객체다. 자바스크립트 배열은 다른 언어의 배열을 흉내낸 것이다.

- 프로퍼티 : 이름과 값
- 프로퍼티의 이름은 [식별자](./../2variable_and_value/variable_value.md), 문자열 리터럴(빈문자열도 사용 가능)을 사용할 수 있다.

- [객체](#객체)
  - [객체 리터럴](#객체-리터럴)
    - [객체 리터럴 할당 방법](#객체-리터럴-할당-방법)
    - [값을 읽는 방법](#값을-읽는-방법)
    - [프로퍼티의 추가와 삭제](#프로퍼티의-추가와-삭제)
    - [메서드](#메서드)
    - [객체는 참조타입](#객체는-참조타입)
      - [얕은 복사, 깊은 복사](#얕은-복사-깊은-복사)

## 객체 리터럴

### 객체 리터럴 할당 방법

```javascript
const userA = { name : "A", age:23, address:"Korea"}
```

- {...} 부분이 객체 리터럴이다. 


### 값을 읽는 방법

```javascript
const userA = { name : "A", age:23, address:"Korea"}

console.log(userA.name)
console.log(userA["name"])

// 없는 프로퍼티를 읽으려고 하면 undefined반환
console.log(userA.work) // undefined
```

### 프로퍼티의 추가와 삭제

- 자바스크립트는 프로그램 실행중에 객체의 값을 추가 삭제가 가능하다.

```javascript
const userA = {name : "A", age:23, address:"Korea"}
// 없는 프로퍼티의 이름과 값을 대입하면 새로운 프로퍼티 생성
userA.job = "designer"

// 삭제하고자 하는 프로퍼티 이름 앞에 delete를 붙인다.
delete userA.name
```

### 메서드
- 프로퍼티에 저장된 값의 타입이 함수이면 그 프로퍼티를 메서드라고 부른다. 

```javascript
const userA = {visit:false, isPrototype:function(visit){console.log(true)}}
```

### 객체는 참조타입
- 객체 타입의 값을 변수에 대입하면 그 변수에는 객체의 참조(메모리에서의 위치)가 저장 됨.

```javascript
const userA = {name : "A", age:23, address:"Korea"}
const userB = userA

userB.name = "B"
console.log(userA, userB) // B, B
```

#### 얕은 복사, 깊은 복사
> 참고 문서
> [[Javascript] 얕은 복사, 깊은 복사](https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)
> [[JavaScript] 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)](https://velog.io/@recordboy/JavaScript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%ACShallow-Copy%EC%99%80-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%ACDeep-Copy)

1. 얕은 복사  
   - 복사 한 후에, 복사한 객체가 같은 원래 값과 같은 값을 참조하면 얕은 복사다.

```javascript
const userA = {
    name : "A", 
    age:23, 
    address: {
        contury:"Korea", 
        city:"Seoul"
        }
    }
// 얕은 복사 방법 1
const userB = userA

userB.name = "B"
console.log(userA, userB) // B, B

// 얕은 복사 방법 2
const userB = {...userA}

// 얕은 복사 방법 3
// 이차원 객체는 깊은 복사가 이루어지지 않기 때문에 얕은 복사라고 불러야한다.
const userB = Object.assign({}, userA)


```

2. 깊은 복사  
   - 독립적인 메모리에 새롭게 값을 할당하는 것. 
   - 새롭게 할당된 값을 변경해도 이전 값은 그대로 유지된다.

> 실행 예제
> [deepCopy.js](./deepCopy.js)


```javascript
const userA = {
    name : "A", 
    age:23, 
    address: {
        contury:"Korea", 
        city:"Seoul"
        },
    visit:false, 
    isPrototype:function(this.visit){
        console.log(true)
        }
    }

// 깊은 복사 1
// 매우 느림, 메서드를 만나면 undefined으로 값을 할당
const userB = JSON.parse(JSON.stringify(userA))

// 깊은 복사 2
// 재귀 함수 사용
function deepCopy(obj) {
  if (obj === {} || typeof obj !== "object") {
    return obj;
  }

  const copyObj = {};
  for (let key in obj) {
    copyObj[key] = deepCopy(obj[key]);
  }
  return copyObj;
}

const userC = deepCopy(userA);
userC.address.contury = "Thiland";

console.log("userA", userA);
console.log("userC", userC);
```